import { createClient } from "@supabase/supabase-js"

/**
 * Creates a Supabase client for use in server-side code (Server Actions, Route
 * Handlers). Uses the public URL + anon key; row-level security on the table
 * governs what this client is allowed to do (see the SQL in the setup notes —
 * only inserts into the waitlist table are permitted for the anon role).
 */
export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local",
    )
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}
