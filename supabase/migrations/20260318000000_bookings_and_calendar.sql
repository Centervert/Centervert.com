-- Book a Call: bookings and calendar_connections tables
-- Run this in Supabase SQL Editor or via supabase db push

-- Bookings: store each strategy call booking
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  guest_name text,
  guest_email text not null,
  guest_notes text,
  start_at timestamptz not null,
  end_at timestamptz not null,
  meeting_type text default 'strategy_call',
  outlook_event_id text,
  status text default 'scheduled' check (status in ('scheduled', 'cancelled', 'completed')),
  created_at timestamptz default now()
);

-- RLS: allow service role and anon to insert (API uses anon from server); restrict reads if desired
alter table public.bookings enable row level security;

create policy "Allow insert for bookings"
  on public.bookings for insert
  with check (true);

create policy "Allow select for bookings"
  on public.bookings for select
  using (true);

-- Calendar connection: one row per provider (microsoft) storing OAuth tokens for booking availability
create table if not exists public.calendar_connections (
  id uuid primary key default gen_random_uuid(),
  provider text not null unique default 'microsoft',
  refresh_token text,
  access_token text,
  token_expires_at timestamptz,
  user_email text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.calendar_connections enable row level security;

-- No policies: anon/key cannot read or write. Use service role in API for this table.

-- Optional: index for listing bookings by time
create index if not exists bookings_start_at_idx on public.bookings (start_at);
