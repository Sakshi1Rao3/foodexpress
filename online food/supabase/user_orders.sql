-- FoodExpress app orders table (separate from any existing "orders" table).
-- Run once in Supabase Dashboard > SQL Editor. Safe to re-run: it never drops or resets data.

create table if not exists public.user_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  items jsonb not null,
  subtotal integer not null check (subtotal >= 0),
  delivery_fee integer not null check (delivery_fee >= 0),
  taxes integer not null check (taxes >= 0),
  total integer not null check (total >= 0),
  status text not null default 'confirmed',
  created_at timestamptz not null default now()
);

create index if not exists user_orders_user_id_created_at_idx
  on public.user_orders (user_id, created_at desc);

alter table public.user_orders enable row level security;

-- Signed-in users can only read and create their own orders
drop policy if exists "Users can view their own orders" on public.user_orders;
create policy "Users can view their own orders"
  on public.user_orders for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can create their own orders" on public.user_orders;
create policy "Users can create their own orders"
  on public.user_orders for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Make the new table visible to the API immediately
notify pgrst, 'reload schema';
