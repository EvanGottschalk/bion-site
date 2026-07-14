"use client"

import { useState, type CSSProperties } from "react"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useWaitlist } from "@/components/waitlist/waitlist-context"
import type { PageButton } from "@/config/ui_config"

/**
 * Renders a home-page CTA button entirely from its config (see PageButton in
 * config/ui_config.ts). Handles waitlist vs. link actions, hover styling, the
 * optional trailing arrow, borders, and mobile font sizing.
 */
export function ConfigButton({ button }: { button: PageButton }) {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobile()
  const { open: openWaitlist } = useWaitlist()

  // On hover, fall back to the base value when a highlight override isn't set.
  const borderWidth =
    isHovered && button.highlightBorderWidth !== undefined ? button.highlightBorderWidth : button.borderWidth
  const borderColor = isHovered && button.highlightBorderColor ? button.highlightBorderColor : button.borderColor

  const style: CSSProperties = {
    color: isHovered && button.highlightFontColor ? button.highlightFontColor : button.fontColor,
    fontSize: `${isMobile ? button.mobile.fontSize : button.fontSize}px`,
    backgroundColor: isHovered ? button.highlightColor : button.fillColor,
    border: borderWidth > 0 ? `${borderWidth}px solid ${borderColor}` : undefined,
    paddingLeft: `${button.paddingLeft}px`,
    paddingRight: `${button.paddingRight}px`,
    paddingTop: `${button.paddingTop}px`,
    paddingBottom: `${button.paddingBottom}px`,
    borderRadius: `${button.borderRadius}px`,
  }

  const className =
    "inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors cursor-pointer w-full sm:w-auto"

  const content = (
    <>
      {button.label}
      {button.arrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  )

  const hoverHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }

  if (button.action === "waitlist") {
    return (
      <button type="button" onClick={openWaitlist} className={className} style={style} {...hoverHandlers}>
        {content}
      </button>
    )
  }

  return (
    <a
      href={button.href}
      target={button.target}
      rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
      className={className}
      style={style}
      {...hoverHandlers}
    >
      {content}
    </a>
  )
}
