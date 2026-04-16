import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      guestName,
      guestEmail,
      guestNotes,
      startAt,
      endAt,
    } = body as {
      guestName?: string;
      guestEmail?: string;
      guestNotes?: string;
      startAt?: string;
      endAt?: string;
    };

    if (!guestEmail || !startAt || !endAt) {
      return NextResponse.json(
        { error: "Missing required fields: guestEmail, startAt, endAt" },
        { status: 400 }
      );
    }

    const start = new Date(startAt);
    const end = new Date(endAt);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return NextResponse.json(
        { error: "Invalid startAt or endAt" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();
    const { data: booking, error } = await supabase
      .from("bookings")
      .insert({
        guest_name: guestName || null,
        guest_email: guestEmail,
        guest_notes: guestNotes || null,
        start_at: startAt,
        end_at: endAt,
        meeting_type: "strategy_call",
        outlook_event_id: null,
        status: "scheduled",
      })
      .select("id, start_at, end_at, guest_email")
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to save booking: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        booking: {
          id: booking.id,
          startAt: booking.start_at,
          endAt: booking.end_at,
        },
      },
      { status: 201 }
    );
  } catch (e) {
    const message = e instanceof Error ? e.message : "Booking failed";
    if (
      message.includes("Missing NEXT_PUBLIC_SUPABASE_URL") ||
      message.includes("SUPABASE_SERVICE_ROLE_KEY")
    ) {
      return NextResponse.json(
        { error: "Booking is not configured on the server." },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: "Booking failed. Please try again or email connect@centervert.com." },
      { status: 500 }
    );
  }
}
