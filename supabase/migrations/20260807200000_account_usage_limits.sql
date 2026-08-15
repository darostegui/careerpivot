create table if not exists public.roadmap_checks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  check_type text not null check (check_type in ('resume', 'manual')),
  created_at timestamptz not null default now()
);

create index if not exists roadmap_checks_user_created_at_idx
  on public.roadmap_checks(user_id, created_at desc);

alter table public.roadmap_checks enable row level security;

create policy "Users can read their roadmap checks"
  on public.roadmap_checks for select using (auth.uid() = user_id);

create or replace function public.record_roadmap_check(
  p_user_id uuid,
  p_check_type text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));

  if (
    select count(*)
    from public.roadmap_checks
    where user_id = p_user_id
      and created_at >= now() - interval '30 days'
  ) >= 12 then
    raise exception 'roadmap_check_limit_exceeded';
  end if;

  insert into public.roadmap_checks (user_id, check_type)
  values (p_user_id, p_check_type);
end;
$$;

revoke all on function public.record_roadmap_check(uuid, text) from public, anon, authenticated;
grant execute on function public.record_roadmap_check(uuid, text) to service_role;

create or replace function public.enforce_resume_document_limit()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(new.user_id::text, 1));
  if (select count(*) from public.resume_documents where user_id = new.user_id) >= 5 then
    raise exception 'resume_storage_limit_exceeded';
  end if;
  return new;
end;
$$;

drop trigger if exists enforce_resume_document_limit on public.resume_documents;
create trigger enforce_resume_document_limit
before insert on public.resume_documents
for each row execute function public.enforce_resume_document_limit();
