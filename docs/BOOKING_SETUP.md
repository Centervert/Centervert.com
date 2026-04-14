# Book a Call – database-only setup

Bookings are stored only in your Supabase database. Availability is driven by **configurable office hours** (no calendar sync). You can sync from the DB to Outlook (or any calendar) yourself.

## 1. Supabase

**Project:** https://ijazrolewgfaryrygnfd.supabase.co (Centervert Website & Portal)

Run the migration in **this** project so the Table Editor shows `bookings` and `calendar_connections`:

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → select **Centervert Website & Portal** (ijazrolewgfaryrygnfd).
2. Go to **SQL Editor** → **New query**.
3. Paste the contents of `supabase/migrations/20260318000000_bookings_and_calendar.sql` and click **Run**.

No service-role key is required for the booking flow; the app uses the standard Supabase client for inserts.

## 2. Environment variables (optional)

- **`BOOKING_TIMEZONE`** – IANA timezone for office hours (default: `America/New_York`).  
  Example: `BOOKING_TIMEZONE=America/Chicago`

Slots are generated for **weekdays only**, **9am–5pm** local time, **30-minute** intervals. To change hours or duration, edit `src/lib/booking-slots.ts`.

## 3. How it works

- **GET `/api/book/availability?date=YYYY-MM-DD`** – returns slots from office hours (no Microsoft Graph).
- **POST `/api/book`** – saves the booking to `bookings` (guest name/email/notes, start_at, end_at, meeting_type, status).  
  `outlook_event_id` is left `null`; you can use it later when you push events to Outlook.

Sync from the DB to your Outlook calendar however you prefer (scheduled job, Zapier, custom script, etc.).
