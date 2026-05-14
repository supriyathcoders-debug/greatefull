/**
 * Server-only GrowthHub365 / LeadConnector-style lead sync.
 * Configure via env — never import this from client components.
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
  /** Extra structured fields (e.g. audit answers) for webhooks / logging */
  metadata?: Record<string, unknown>;
};

function splitFullName(full: string): { firstName: string; lastName: string } {
  const t = full.trim();
  if (!t) return { firstName: "Website", lastName: "Lead" };
  const space = t.indexOf(" ");
  if (space === -1) return { firstName: t, lastName: "-" };
  return { firstName: t.slice(0, space).trim(), lastName: t.slice(space + 1).trim() || "-" };
}

function lcHeaders(token: string, version: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    Version: version,
  };
}

function getContactIdFromResponse(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined;
  const o = data as Record<string, unknown>;
  if (typeof o.id === "string") return o.id;
  const contact = o.contact;
  if (contact && typeof contact === "object") {
    const id = (contact as Record<string, unknown>).id;
    if (typeof id === "string") return id;
  }
  return undefined;
}

async function postJson(url: string, body: unknown, headers: HeadersInit): Promise<Response> {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    cache: "no-store",
  });
}

async function submitViaWebhook(
  webhookUrl: string,
  payload: CanonicalLeadPayload,
): Promise<{ ok: true } | { ok: false; status: number; detail: string }> {
  const body = {
    submittedAt: new Date().toISOString(),
    ...payload,
  };
  const res = await postJson(webhookUrl, body, { "Content-Type": "application/json" });
  if (res.ok) return { ok: true };
  const text = await res.text().catch(() => "");
  return { ok: false, status: res.status, detail: text.slice(0, 500) || res.statusText };
}

async function submitViaApi(payload: CanonicalLeadPayload): Promise<
  { ok: true } | { ok: false; status: number; detail: string }
> {
  const token = process.env.GROWTHHUB365_ACCESS_TOKEN?.trim();
  const locationId = process.env.GROWTHHUB365_LOCATION_ID?.trim();
  const base = (process.env.GROWTHHUB365_API_BASE?.trim() || "https://services.leadconnectorhq.com").replace(
    /\/$/,
    "",
  );
  const version = process.env.GROWTHHUB365_API_VERSION?.trim() || "2021-07-28";
  const messageFieldId = process.env.GROWTHHUB365_MESSAGE_CUSTOM_FIELD_ID?.trim();

  if (!token || !locationId) {
    return { ok: false, status: 500, detail: "Missing GROWTHHUB365_ACCESS_TOKEN or GROWTHHUB365_LOCATION_ID" };
  }

  const { firstName, lastName } = splitFullName(payload.fullName);
  const tags = ["grateful-marketing-site", payload.form];

  const baseSource = `Website · ${payload.form === "contact" ? "Contact" : "AI Revenue Audit"}`;
  const msg = payload.message.trim();
  const source =
    messageFieldId || !msg
      ? baseSource
      : `${baseSource} | ${msg.replace(/\s+/g, " ").slice(0, 220)}${msg.length > 220 ? "…" : ""}`;

  const contactBody: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    email: payload.email.trim(),
    tags,
    source,
  };

  const phone = payload.phone?.trim();
  if (phone) contactBody.phone = phone;

  const company = payload.company?.trim();
  if (company) contactBody.companyName = company;

  if (messageFieldId && payload.message.trim()) {
    contactBody.customFields = [{ id: messageFieldId, value: payload.message.trim() }];
  }

  const contactRes = await postJson(`${base}/contacts/`, contactBody, lcHeaders(token, version));
  const contactText = await contactRes.text();
  let contactJson: unknown;
  try {
    contactJson = JSON.parse(contactText) as unknown;
  } catch {
    contactJson = undefined;
  }

  if (!contactRes.ok) {
    const msg =
      contactJson && typeof contactJson === "object" && "message" in contactJson
        ? String((contactJson as { message?: string }).message)
        : contactText.slice(0, 500);
    return { ok: false, status: contactRes.status, detail: msg || contactRes.statusText };
  }

  const contactId = getContactIdFromResponse(contactJson);
  const pipelineId = process.env.GROWTHHUB365_PIPELINE_ID?.trim();
  const stageId = process.env.GROWTHHUB365_PIPELINE_STAGE_ID?.trim();

  if (contactId && pipelineId && stageId) {
    const oppName =
      payload.service?.trim() ||
      `${payload.form === "ai-revenue-audit" ? "AI Revenue Audit" : "Contact"} — ${firstName} ${lastName}`.trim();
    const oppBody = {
      locationId,
      pipelineId,
      pipelineStageId: stageId,
      contactId,
      name: oppName.slice(0, 120),
      status: "open",
    };
    const oppRes = await postJson(`${base}/opportunities/`, oppBody, lcHeaders(token, version));
    if (!oppRes.ok) {
      const oppText = await oppRes.text();
      return {
        ok: false,
        status: oppRes.status,
        detail: `Contact created but opportunity failed: ${oppText.slice(0, 400)}`,
      };
    }
  }

  return { ok: true };
}

/**
 * Sends the lead to GrowthHub365 using either an inbound webhook URL or API credentials.
 */
export async function submitLeadToGrowthHub(
  payload: CanonicalLeadPayload,
): Promise<{ ok: true } | { ok: false; status: number; detail: string }> {
  const webhookUrl = process.env.GROWTHHUB365_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    return submitViaWebhook(webhookUrl, payload);
  }
  return submitViaApi(payload);
}

export function isGrowthHubConfigured(): boolean {
  const webhook = Boolean(process.env.GROWTHHUB365_WEBHOOK_URL?.trim());
  const api = Boolean(
    process.env.GROWTHHUB365_ACCESS_TOKEN?.trim() && process.env.GROWTHHUB365_LOCATION_ID?.trim(),
  );
  return webhook || api;
}
