create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  selected_pivot_title text,
  training_consent_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  source text not null check (source in ('resume', 'manual')),
  source_filename text,
  current_title text,
  target_title text,
  input_summary jsonb not null default '{}'::jsonb,
  suggested_roles jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  assessment_id uuid references public.assessments(id) on delete cascade,
  messages jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roadmap_shares (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  target_role text not null,
  created_at timestamptz not null default now(),
  revoked_at timestamptz
);

create table if not exists public.saved_roadmaps (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role_title text not null,
  saved_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roadmap_checks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  check_type text not null check (check_type in ('resume', 'manual')),
  created_at timestamptz not null default now()
);

create index if not exists roadmap_checks_user_created_at_idx
  on public.roadmap_checks(user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.assessments enable row level security;
alter table public.conversations enable row level security;
alter table public.roadmap_shares enable row level security;
alter table public.saved_roadmaps enable row level security;
alter table public.roadmap_checks enable row level security;

create policy "Users can read their profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can create their profile"
  on public.profiles for insert with check (auth.uid() = id);

create policy "Users can read their assessments"
  on public.assessments for select using (auth.uid() = user_id);

create policy "Users can create their assessments"
  on public.assessments for insert with check (auth.uid() = user_id or user_id is null);

create policy "Users can read their conversations"
  on public.conversations for select using (auth.uid() = user_id);

create policy "Users can create their conversations"
  on public.conversations for insert with check (auth.uid() = user_id or user_id is null);

create policy "Users can manage their roadmap shares"
  on public.roadmap_shares for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can read their saved roadmaps"
  on public.saved_roadmaps for select using (auth.uid() = user_id);

create policy "Users can create their saved roadmaps"
  on public.saved_roadmaps for insert with check (auth.uid() = user_id);

create policy "Users can delete their saved roadmaps"
  on public.saved_roadmaps for delete using (auth.uid() = user_id);

create policy "Users can read their roadmap checks"
  on public.roadmap_checks for select using (auth.uid() = user_id);
