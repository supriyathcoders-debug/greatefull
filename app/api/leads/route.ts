import { NextResponse } from "next/server";
import { isGrowthHubConfigured, submitLeadToGrowthHub, type CanonicalLeadPayload } from "@/lib/crm/growthhub-submit";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 120_000;

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

function isValidEmail(email: string): boolean {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(request: Request) {
  if (!isGrowthHubConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "CRM is not configured. Set GROWTHHUB365_WEBHOOK_URL or GROWTHHUB365_ACCESS_TOKEN + GROWTHHUB365_LOCATION_ID in the server environment.",
      },
      { status: 503 },
    );
  }

  const len = Number(request.headers.get("content-length") || 0);
  if (len > 0 && len > MAX_BODY_BYTES) {
    return badRequest("Request body too large.");
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return badRequest("Invalid JSON body.");
  }

  if (!raw || typeof raw !== "object") {
    return badRequest("Expected a JSON object.");
  }

  const body = raw as Record<string, unknown>;
  const form = body.form;
  if (form !== "contact" && form !== "ai-revenue-audit") {
    return badRequest('Invalid or missing "form" (use "contact" or "ai-revenue-audit").');
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const message = typeof body.message === "string" ? body.message : "";

  if (!fullName) return badRequest("fullName is required.");
  if (!email || !isValidEmail(email)) return badRequest("A valid email is required.");
  if (!message.trim()) return badRequest("message is required.");

  const payload: CanonicalLeadPayload = {
    form,
    fullName,
    email,
    phone: typeof body.phone === "string" ? body.phone : undefined,
    company: typeof body.company === "string" ? body.company : undefined,
    message: message.trim(),
    service: typeof body.service === "string" ? body.service : undefined,
    metadata:
      body.metadata && typeof body.metadata === "object" && !Array.isArray(body.metadata)
        ? (body.metadata as Record<string, unknown>)
        : undefined,
  };

  const result = await submitLeadToGrowthHub(payload);
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Could not save your submission to the CRM.",
        detail: result.detail.slice(0, 400),
      },
      { status: result.status >= 400 && result.status < 600 ? result.status : 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
