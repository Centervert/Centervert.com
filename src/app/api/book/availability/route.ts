import { NextRequest, NextResponse } from "next/server";
import { getOfficeHoursSlots } from "@/lib/booking-slots";

const DEFAULT_TIMEZONE =
  process.env.BOOKING_TIMEZONE || "America/New_York";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const timezone =
      searchParams.get("timezone") || process.env.BOOKING_TIMEZONE || DEFAULT_TIMEZONE;

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: "Missing or invalid date (use YYYY-MM-DD)" },
        { status: 400 }
      );
    }

    const slots = getOfficeHoursSlots(date, timezone);
    return NextResponse.json({ slots });
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Failed to load availability";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
