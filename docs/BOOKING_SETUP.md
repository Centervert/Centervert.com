# Book a Call – database-only setup

Bookings are stored only in your Supabase database. Availability is driven by **configurable office hours** (no calendar sync). You can sync from the DB to Outlook (or any calendar) yourself.

## 1. Supabase

**Project:** https://ijazrolewgfaryrygnfd.supabase.co (Centervert Website & Portal)

Run the migrations in **this** project so the Table Editor shows `bookings`, `calendar_connections`, and `scale_up_rsvps`:

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → select **Centervert Website & Portal** (ijazrolewgfaryrygnfd).
2. Go to **SQL Editor** → **New query**.
3. Paste the contents of `supabase/migrations/20260318000000_bookings_and_calendar.sql` and click **Run**.
4. Run `supabase/migrations/20260416000000_scale_up_rsvps_and_tighten_bookings_rls.sql` the same way (Scale Up RSVPs table and tighter `bookings` RLS).

**Service role:** `POST /api/book` and `POST /api/rsvp` use the **service role** key on the server (`SUPABASE_SERVICE_ROLE_KEY` in Vercel). Set it alongside `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Do not expose the service role in client code.

## 2. Environment variables

**Required for `/api/book` and `/api/rsvp`:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` (server only).

**Optional:**

- **`BOOKING_TIMEZONE`** – IANA timezone for office hours (default: `America/New_York`).  
  Example: `BOOKING_TIMEZONE=America/Chicago`

Slots are generated for **weekdays only**, **9am–5pm** local time, **30-minute** intervals. To change hours or duration, edit `src/lib/booking-slots.ts`.

## 3. How it works

- **GET `/api/book/availability?date=YYYY-MM-DD`** – returns slots from office hours (no Microsoft Graph).
- **POST `/api/book`** – saves the booking to `bookings` (guest name/email/notes, start_at, end_at, meeting_type, status).  
  `outlook_event_id` is left `null`; you can use it later when you push events to Outlook.
- **POST `/api/rsvp`** – saves Scale Up RSVPs to `scale_up_rsvps` (city, event slug, name, email, company, optional source and focus area).

Sync from the DB to your Outlook calendar however you prefer (scheduled job, Zapier, custom script, etc.).
