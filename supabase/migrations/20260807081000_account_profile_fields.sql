alter table public.profiles
  add column if not exists selected_pivot_title text,
  add column if not exists training_consent_at timestamptz;
