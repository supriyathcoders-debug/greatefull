/**
 * Client-side GrowthHub365 / LeadConnector lead submission.
 * This function runs in the browser and sends data directly to the CRM.
 */

export type LeadFormSource = "contact" | "ai-revenue-audit";

export type CanonicalLeadPayload = {
  form: LeadFormSource;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
  metadata?: Record<string, unknown>;
};

function splitFullName(full: string): { firstName: string; lastName: string } {
  const t = full.trim();
  if (!t) return { firstName: "Website", lastName: "Lead" };
  const space = t.indexOf(" ");
  if (space === -1) return { firstName: t, lastName: "-" };
  return { firstName: t.slice(0, space).trim(), lastName: t.slice(space + 1).trim() || "-" };
}

/**
 * Submits lead data directly from the client.
 * Uses NEXT_PUBLIC_ environment variables for configuration.
 */
export async function submitLeadDirectly(payload: CanonicalLeadPayload): Promise<{ ok: true } | { ok: false; error: string; detail?: string }> {
  const webhookUrl = process.env.NEXT_PUBLIC_GROWTHHUB365_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          ...payload,
        }),
      });
      if (res.ok) return { ok: true };
      const text = await res.text().catch(() => "");
      return { ok: false, error: "Webhook submission failed", detail: text.slice(0, 500) };
    } catch (err: any) {
      return { ok: false, error: "Network error", detail: err.message };
    }
  }

  // Fallback to direct API if no webhook but credentials exist
  const token = process.env.NEXT_PUBLIC_GROWTHHUB365_ACCESS_TOKEN?.trim();
  const locationId = process.env.NEXT_PUBLIC_GROWTHHUB365_LOCATION_ID?.trim();

  if (!token || !locationId) {
    return { ok: false, error: "CRM Configuration Missing", detail: "Please set NEXT_PUBLIC_GROWTHHUB365_WEBHOOK_URL or API credentials in your environment." };
  }

  const base = (process.env.NEXT_PUBLIC_GROWTHHUB365_API_BASE?.trim() || "https://services.leadconnectorhq.com").replace(/\/$/, "");
  const version = process.env.NEXT_PUBLIC_GROWTHHUB365_API_VERSION?.trim() || "2021-07-28";
  const messageFieldId = process.env.NEXT_PUBLIC_GROWTHHUB365_MESSAGE_CUSTOM_FIELD_ID?.trim();

  const { firstName, lastName } = splitFullName(payload.fullName);
  const tags = ["grateful-marketing-site", "static-export", payload.form];
  const baseSource = `Website · ${payload.form === "contact" ? "Contact" : "AI Revenue Audit"}`;
  const msg = payload.message.trim();

  const source = messageFieldId || !msg
    ? baseSource
    : `${baseSource} | ${msg.replace(/\s+/g, " ").slice(0, 220)}${msg.length > 220 ? "…" : ""}`;

  const contactBody: Record<string, any> = {
    locationId,
    firstName,
    lastName,
    email: payload.email.trim(),
    tags,
    source,
  };

  if (payload.phone?.trim()) contactBody.phone = payload.phone.trim();
  if (payload.company?.trim()) contactBody.companyName = payload.company.trim();
  if (payload.metadata?.website) contactBody.website = String(payload.metadata.website);
  if (payload.metadata?.location) contactBody.address1 = String(payload.metadata.location);

  if (messageFieldId && msg) {
    contactBody.customFields = [{ id: messageFieldId, value: msg }];
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    Version: version,
  };

  try {
    const contactRes = await fetch(`${base}/contacts/`, {
      method: "POST",
      headers,
      body: JSON.stringify(contactBody),
    });

    const contactData = await contactRes.json().catch(() => ({}));

    if (!contactRes.ok) {
      // Check for duplicate
      const errMsg = contactData.message || "Contact creation failed";
      if (errMsg.toLowerCase().includes("duplicate") || errMsg.toLowerCase().includes("already exists")) {
        return { ok: false, error: "Contact already exists", detail: "Submission failed because contact already exists. We recommend using a Webhook for better duplicate handling." };
      }
      return { ok: false, error: errMsg };
    }

    const contactId = contactData.id || contactData.contact?.id;

    // Create Note if possible
    if (contactId && msg) {
      await fetch(`${base}/contacts/${encodeURIComponent(contactId)}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({ body: msg }),
      }).catch(() => { }); // Ignore note failure
    }

    // Handle Opportunity
    const pipelineId = process.env.NEXT_PUBLIC_GROWTHHUB365_PIPELINE_ID?.trim();
    const stageId = process.env.NEXT_PUBLIC_GROWTHHUB365_PIPELINE_STAGE_ID?.trim();

    if (contactId && pipelineId && stageId) {
      const oppName = payload.service?.trim() || `${payload.form === "ai-revenue-audit" ? "AI Revenue Audit" : "Contact"} — ${firstName} ${lastName}`.trim();
      await fetch(`${base}/opportunities/`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          locationId,
          pipelineId,
          pipelineStageId: stageId,
          contactId,
          name: oppName.slice(0, 120),
          status: "open",
        }),
      }).catch(() => { });
    }

    return { ok: true };
  } catch (err: any) {
    return { ok: false, error: "Network error", detail: err.message };
  }
}
