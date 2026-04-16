import { NextRequest, NextResponse } from "next/server";
import { findScaleUpEvent } from "@/lib/scale-up-events";
import { createAdminClient } from "@/lib/supabase/admin";

type RsvpPayload = {
  city?: string;
  eventSlug?: string;
  name?: string;
  email?: string;
  company?: string;
  source?: string;
  focusArea?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: RsvpPayload;
  try {
    body = (await request.json()) as RsvpPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const { city, eventSlug, name, email, company, source, focusArea } = body;

  if (!city || !eventSlug) {
    return NextResponse.json(
      { error: "Missing event reference" },
      { status: 400 }
    );
  }

  const event = findScaleUpEvent(city, eventSlug);
  if (!event) {
    return NextResponse.json({ error: "Unknown event" }, { status: 404 });
  }

  if (!name || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Please include your full name." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please include a valid email address." },
      { status: 400 }
    );
  }
  if (!company || company.trim().length < 2) {
    return NextResponse.json(
      { error: "Please include your company." },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toISOString();

  let supabase;
  try {
    supabase = createAdminClient();
  } catch {
    return NextResponse.json(
      {
        error:
          "RSVP is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY on the server.",
      },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("scale_up_rsvps").insert({
    city: event.city,
    event_slug: event.slug,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    company: company.trim(),
    source: source?.trim() || null,
    focus_area: focusArea?.trim() || null,
  });

  if (error) {
    console.error("[scale-up rsvp] insert failed", error.message);
    return NextResponse.json(
      { error: "Could not save your RSVP. Please try again or email connect@centervert.com." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      submittedAt,
      event: { city: event.city, slug: event.slug },
    },
    { status: 201 }
  );
}
