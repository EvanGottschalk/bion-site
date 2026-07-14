"use client"

import { useEffect, useState, type CSSProperties, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitWaitlist } from "@/app/actions/waitlist"
import { WAITLIST_POPUP } from "@/config/ui_config"

type WaitlistDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Simple, permissive email shape check (real validation happens server-side later).
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Map the config's title alignment onto the header's cross-axis (flexbox) alignment.
const ALIGN_ITEMS: Record<string, CSSProperties["alignItems"]> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
}

// Convert a #rrggbb (or #rgb) hex + 0–1 opacity into an rgba() string for the glow.
function hexToRgba(hex: string, opacity: number) {
  const h = hex.replace("#", "")
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

type FormValues = Record<string, string>

function emptyValues(): FormValues {
  return Object.fromEntries(WAITLIST_POPUP.fields.map((field) => [field.name, ""]))
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Reset the form a moment after the popup closes so the next open starts fresh
  // (delayed so the reset isn't visible during the close animation).
  useEffect(() => {
    if (open) return
    const timeout = setTimeout(() => {
      setValues(emptyValues())
      setError(null)
      setIsSubmitting(false)
      setIsSubmitted(false)
    }, 200)
    return () => clearTimeout(timeout)
  }, [open])

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const email = values.email?.trim() ?? ""
    if (!email) {
      setError(WAITLIST_POPUP.errors.emailRequired)
      return
    }
    if (!EMAIL_PATTERN.test(email)) {
      setError(WAITLIST_POPUP.errors.emailInvalid)
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      const result = await submitWaitlist(values)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.error)
      }
    } catch {
      setError(WAITLIST_POPUP.errors.generic)
    } finally {
      setIsSubmitting(false)
    }
  }

  const { windowStyle, title } = WAITLIST_POPUP
  const { outerGlow } = windowStyle

  const contentStyle: CSSProperties = {
    paddingLeft: windowStyle.paddingLeft,
    paddingRight: windowStyle.paddingRight,
    paddingTop: windowStyle.paddingTop,
    paddingBottom: windowStyle.paddingBottom,
    boxShadow: `0 0 ${outerGlow.blur}px ${outerGlow.spread}px ${hexToRgba(outerGlow.color, outerGlow.opacity)}`,
  }

  const headerStyle: CSSProperties = {
    textAlign: title.alignment,
    alignItems: ALIGN_ITEMS[title.alignment],
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" style={contentStyle}>
        {isSubmitted ? (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <DialogHeader className="items-center text-center sm:text-center">
              <DialogTitle>{WAITLIST_POPUP.success.title}</DialogTitle>
              <DialogDescription>{WAITLIST_POPUP.success.message}</DialogDescription>
            </DialogHeader>
            <Button className="mt-2 w-full" onClick={() => onOpenChange(false)}>
              {WAITLIST_POPUP.success.dismissLabel}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader style={headerStyle}>
              <DialogTitle>{title.label}</DialogTitle>
              <DialogDescription>{WAITLIST_POPUP.description}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {WAITLIST_POPUP.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label htmlFor={`waitlist-${field.name}`}>
                    {field.label}
                    {field.required && (
                      <span className="text-destructive">{WAITLIST_POPUP.requiredMarker}</span>
                    )}
                  </Label>
                  <Input
                    id={`waitlist-${field.name}`}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    value={values[field.name] ?? ""}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                    aria-invalid={field.name === "email" && !!error}
                  />
                </div>
              ))}

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" className="mt-1 w-full" disabled={isSubmitting}>
                {isSubmitting ? WAITLIST_POPUP.submittingLabel : WAITLIST_POPUP.submitLabel}
              </Button>

              <p className="text-center text-xs text-muted-foreground">{WAITLIST_POPUP.privacyNote}</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
