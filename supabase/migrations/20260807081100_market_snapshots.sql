create table if not exists public.market_snapshots (
  id uuid primary key default gen_random_uuid(),
  role_slug text not null references public.career_roles(slug) on delete cascade,
  salary_range text not null,
  demand_level text not null check (demand_level in ('high', 'steady', 'emerging')),
  demand_summary text not null,
  source text not null check (source in ('curated-catalog', 'configured-provider')),
  refreshed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists market_snapshots_role_slug_created_at_idx
  on public.market_snapshots (role_slug, created_at desc);

alter table public.market_snapshots enable row level security;

create policy "Anyone can read market snapshots"
  on public.market_snapshots for select using (true);
