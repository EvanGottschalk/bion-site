"use client"

import { useState, type CSSProperties, type ReactNode } from "react"
import Link from "next/link"
import { useWaitlist } from "@/components/waitlist/waitlist-context"

type FooterLinkProps = {
  href?: string
  target?: "_blank" | "_self"
  action?: "waitlist" // when set, opens the waitlist popup instead of navigating
  fontColor: string
  highlightFontColor: string
  fontSize?: number // px; omitted for icon links (sized by the icon itself)
  className?: string
  ariaLabel?: string
  children: ReactNode
}

/**
 * A footer link whose color swaps to `highlightFontColor` on hover. Renders a
 * <button> that opens the waitlist popup when action is 'waitlist', a Next <Link>
 * for internal routes, or a plain <a> for external / new-tab links.
 * Used for both text links and social icons (icons inherit color via currentColor).
 */
export function FooterLink({
  href,
  target,
  action,
  fontColor,
  highlightFontColor,
  fontSize,
  className,
  ariaLabel,
  children,
}: FooterLinkProps) {
  const [hovered, setHovered] = useState(false)
  const { open: openWaitlist } = useWaitlist()

  const style: CSSProperties = {
    color: hovered ? highlightFontColor : fontColor,
    transition: "color 150ms",
    ...(fontSize ? { fontSize: `${fontSize}px` } : {}),
  }

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  if (action === "waitlist") {
    return (
      <button
        type="button"
        onClick={() => openWaitlist()}
        aria-label={ariaLabel}
        className={`${className ?? ""} cursor-pointer bg-transparent border-0 p-0 text-left`}
        style={{ ...style, font: "inherit" }}
        {...handlers}
      >
        {children}
      </button>
    )
  }

  const isExternal = target === "_blank" || (href ?? "").startsWith("http")

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={className}
        style={style}
        {...handlers}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href ?? "#"} aria-label={ariaLabel} className={className} style={style} {...handlers}>
      {children}
    </Link>
  )
}
