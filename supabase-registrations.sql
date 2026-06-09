create extension if not exists "pgcrypto";

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone_number text not null,
  church text not null,
  attended_before boolean not null,
  heard_about text not null,
  heard_about_other text,
  location text not null,
  willing_to_travel text not null,
  created_at timestamp with time zone default now()
);

alter table public.registrations enable row level security;

drop policy if exists "Public can create registrations" on public.registrations;
create policy "Public can create registrations"
on public.registrations
for insert
to anon, authenticated
with check (true);

drop policy if exists "Approved admins can read registrations" on public.registrations;
create policy "Approved admins can read registrations"
on public.registrations
for select
to authenticated
using (
  lower(auth.jwt() ->> 'email') in (
    'babayodetestimony0318@gmail.com',
    'teenspray01@gmail.com'
  )
);

create index if not exists registrations_created_at_idx
on public.registrations (created_at desc);

create index if not exists registrations_search_idx
on public.registrations (name, phone_number, church);
