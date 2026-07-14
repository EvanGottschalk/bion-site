"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { WaitlistDialog } from "./waitlist-dialog"

type WaitlistContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

/**
 * Access the site-wide waitlist popup. Call `open()` from any client component
 * (e.g. a "Get BION" button) to show the waitlist form.
 */
export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) {
    throw new Error("useWaitlist must be used within a <WaitlistProvider>")
  }
  return ctx
}

/**
 * Provides the waitlist popup once for the whole app and exposes open/close via
 * context. Mounted at the root in app/layout.tsx.
 */
export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <WaitlistContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
      <WaitlistDialog open={isOpen} onOpenChange={setIsOpen} />
    </WaitlistContext.Provider>
  )
}
