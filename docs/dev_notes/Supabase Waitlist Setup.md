# Supabase Waitlist Setup

The "Get BION / Get Early Access" buttons open the waitlist popup
(`components/waitlist/*`). On submit, the form calls the `submitWaitlist` server
action (`app/actions/waitlist.ts`), which inserts a row into Supabase.

## 1. Environment variables

Fill in `.env.local` (gitignored) with values from your Supabase project under
**Settings → API**:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-PUBLIC-KEY
```

Restart `yarn dev` after editing. (These also need to be set in the hosting
provider's env settings — e.g. Vercel → Project → Settings → Environment
Variables — for production.)

## 2. Create the table + security policy

In the Supabase dashboard, open **SQL Editor → New query**, paste the following,
and run it. The columns match the field `name`s in
`WAITLIST_POPUP.fields` (`config/ui_config.ts`); the table name matches
`WAITLIST_POPUP.table`.

```sql
create table if not exists public.waitlist_signups (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  aphid      text,
  x          text,
  instagram  text,
  created_at timestamptz not null default now()
);

-- Row-level security: allow the public (anon) role to INSERT only.
-- No SELECT policy is created, so submissions can be written but not read back
-- by the anon key. Read them via the dashboard / a service-role context.
alter table public.waitlist_signups enable row level security;

create policy "Anon can join the waitlist"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);
```

## Notes

- The `email unique` constraint is what powers the "You're already on the list"
  message — a duplicate insert returns Postgres error `23505`, which the action
  maps to `WAITLIST_POPUP.errors.alreadyJoined`.
- To add a field: add it to `WAITLIST_POPUP.fields` **and** add a matching column.
  The row is built from the config, so no other code changes are needed. On an
  existing table, migrate with e.g. `alter table public.waitlist_signups add
  column if not exists aphid text;` (column name must match the field's `name`).
- View submissions in the dashboard under **Table Editor → waitlist_signups**.
