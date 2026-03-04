-- USERS
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  created_at timestamp default now()
);

-- PRODUCTS
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric(10,2) not null,
  stock integer default 0,
  created_at timestamp default now()
);

-- LOYALTY
create table loyalty (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  points integer default 0,
  updated_at timestamp default now()
);

-- ORDERS
create table orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  total numeric(10,2),
  status text default 'pending',
  created_at timestamp default now()
);