-- API routes use Supabase service_role JWT. Tables created in the SQL Editor
-- did not receive DML grants for role service_role, which caused inserts from
-- Next.js (createAdminClient) to fail with "permission denied for table".
grant select, insert, update, delete on public.bookings to service_role;
grant select, insert, update, delete on public.scale_up_rsvps to service_role;
grant select, insert, update, delete on public.calendar_connections to service_role;
