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

alter table public.profiles enable row level security;
alter table public.assessments enable row level security;
alter table public.conversations enable row level security;

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
