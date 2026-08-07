create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_key text not null,
  stripe_checkout_session_id text not null unique,
  stripe_payment_intent_id text,
  stripe_customer_id text,
  amount_cents integer not null check (amount_cents > 0),
  currency text not null default 'usd',
  status text not null check (status in ('paid', 'refunded', 'pending', 'failed')),
  purchased_at timestamptz,
  refunded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists purchases_user_id_idx on public.purchases(user_id);

alter table public.purchases enable row level security;

create policy "Users can read their purchases"
  on public.purchases for select using (auth.uid() = user_id);
