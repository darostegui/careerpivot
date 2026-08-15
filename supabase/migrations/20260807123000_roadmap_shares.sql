create table if not exists public.roadmap_shares (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  target_role text not null,
  created_at timestamptz not null default now(),
  revoked_at timestamptz
);

alter table public.roadmap_shares enable row level security;

create policy "Users can manage their roadmap shares"
  on public.roadmap_shares for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
