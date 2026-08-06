insert into storage.buckets (id, name, public)
values ('resume-pdfs', 'resume-pdfs', false)
on conflict (id) do update set public = false;

create table if not exists public.resume_documents (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  storage_path text not null unique,
  original_filename text not null,
  byte_size integer not null check (byte_size > 0 and byte_size <= 5242880),
  storage_consent_at timestamptz not null,
  training_consent boolean not null default false,
  retention_expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

alter table public.resume_documents enable row level security;

create policy "Users can read their resume metadata"
  on public.resume_documents for select using (auth.uid() = user_id);

create policy "Users can delete their resume metadata"
  on public.resume_documents for delete using (auth.uid() = user_id);

create policy "Users can read their private resume files"
  on storage.objects for select
  using (bucket_id = 'resume-pdfs' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Users can upload their private resume files"
  on storage.objects for insert
  with check (bucket_id = 'resume-pdfs' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Users can delete their private resume files"
  on storage.objects for delete
  using (bucket_id = 'resume-pdfs' and (storage.foldername(name))[1] = auth.uid()::text);
