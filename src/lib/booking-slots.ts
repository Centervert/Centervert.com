/**
 * Generate bookable time slots from configurable office hours.
 * No calendar sync – you can sync bookings from the DB to Outlook yourself.
 */

import { fromZonedTime } from "date-fns-tz";
import { formatInTimeZone } from "date-fns-tz";

const DEFAULT_TIMEZONE = "America/New_York";
const START_HOUR = 9; // 9am
const END_HOUR = 17; // 5pm
const SLOT_MINUTES = 30;

export type TimeSlot = { start: string; end: string };

/**
 * Returns 30-minute slots for the given date in office hours (9am–5pm local), weekdays only.
 * Uses the requested timezone (default Eastern). Slots are returned as ISO strings (UTC).
 */
export function getOfficeHoursSlots(
  dateStr: string,
  timeZone: string = DEFAULT_TIMEZONE
): TimeSlot[] {
  // Weekend in the requested timezone? (e = 1–7, 6=Sat 7=Sun)
  const noonUtc = fromZonedTime(
    `${dateStr}T12:00:00`,
    timeZone
  );
  const dayOfWeek = parseInt(
    formatInTimeZone(noonUtc, timeZone, "e", { weekStartsOn: 0 }),
    10
  );
  if (dayOfWeek === 6 || dayOfWeek === 7) return [];

  const slots: TimeSlot[] = [];
  for (let hour = START_HOUR; hour < END_HOUR; hour++) {
    for (let min = 0; min < 60; min += SLOT_MINUTES) {
      const startLocal = `${dateStr}T${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:00`;
      const startUtc = fromZonedTime(startLocal, timeZone);
      const endUtc = new Date(startUtc.getTime() + SLOT_MINUTES * 60 * 1000);
      slots.push({
        start: startUtc.toISOString(),
        end: endUtc.toISOString(),
      });
    }
  }
  return slots;
}
