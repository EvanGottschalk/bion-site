"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { WAITLIST_POPUP } from "@/config/ui_config"

export type WaitlistValues = Record<string, string>

export type WaitlistResult = { success: true } | { success: false; error: string }

// Permissive email shape check — mirrors the client-side check so the server
// never trusts the client to have validated.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Persists a waitlist submission to Supabase. The row is built from the fields
 * configured in WAITLIST_POPUP, so each field's `name` maps directly to a column.
 */
export async function submitWaitlist(values: WaitlistValues): Promise<WaitlistResult> {
  const row: Record<string, string | null> = {}

  for (const field of WAITLIST_POPUP.fields) {
    const value = (values[field.name] ?? "").trim()

    if (field.required && !value) {
      return { success: false, error: WAITLIST_POPUP.errors.emailRequired }
    }
    row[field.name] = value === "" ? null : value
  }

  const email = row.email ?? ""
  if (!email || !EMAIL_PATTERN.test(email)) {
    return { success: false, error: WAITLIST_POPUP.errors.emailInvalid }
  }

  try {
    const supabase = createServerSupabaseClient()
    const { error } = await supabase.from(WAITLIST_POPUP.table).insert(row)

    if (error) {
      // 23505 = unique_violation → this email is already on the list
      if (error.code === "23505") {
        return { success: false, error: WAITLIST_POPUP.errors.alreadyJoined }
      }
      console.error("Waitlist insert failed:", error)
      return { success: false, error: WAITLIST_POPUP.errors.generic }
    }

    return { success: true }
  } catch (err) {
    console.error("Waitlist submission error:", err)
    return { success: false, error: WAITLIST_POPUP.errors.generic }
  }
}
