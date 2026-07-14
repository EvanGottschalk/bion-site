"use client"

import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { useWaitlist } from "./waitlist-context"

/**
 * A "Get BION" call-to-action that opens the waitlist popup on click.
 * Forwards all Button props (variant, size, className, children, …) so it can
 * be dropped in wherever a styled Button was previously used.
 */
export function GetBionButton({ onClick, ...props }: ComponentProps<typeof Button>) {
  const { open } = useWaitlist()

  return (
    <Button
      onClick={(event) => {
        onClick?.(event)
        open()
      }}
      {...props}
    />
  )
}
