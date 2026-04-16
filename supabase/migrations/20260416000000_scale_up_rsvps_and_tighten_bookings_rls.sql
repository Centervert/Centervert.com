-- Scale Up RSVPs (written by Next.js /api/rsvp using service role; RLS has no policies for anon/authenticated)
create table if not exists public.scale_up_rsvps (
  id uuid primary key default gen_random_uuid(),
  city text not null,
  event_slug text not null,
  name text not null,
  email text not null,
  company text not null,
  source text,
  focus_area text,
  created_at timestamptz not null default now()
);

create index if not exists scale_up_rsvps_event_idx
  on public.scale_up_rsvps (city, event_slug, created_at desc);

alter table public.scale_up_rsvps enable row level security;

comment on table public.scale_up_rsvps is 'Scale Up event RSVPs from centervert.com; inserted via service role only.';

-- Bookings: remove permissive policies so only service role can read/write (API uses admin client)
drop policy if exists "Allow insert for bookings" on public.bookings;
drop policy if exists "Allow select for bookings" on public.bookings;
