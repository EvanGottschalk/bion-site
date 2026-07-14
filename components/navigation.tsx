"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { useWaitlist } from "@/components/waitlist/waitlist-context"
import { TOP_RIGHT_BUTTONS, TOP_RIGHT_MENU, WAITLIST_POPUP } from "@/config/ui_config"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [iconHovered, setIconHovered] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const { open: openWaitlist } = useWaitlist()

  const { ACTIVE, iconColor, iconHighlightColor, menuOptionStyling, menuOptions, mobile } = TOP_RIGHT_MENU
  // Merge the mobile overrides over the base styling when on a mobile viewport
  const menuStyle = isMobile ? { ...menuOptionStyling, ...mobile.menuOptionStyling } : menuOptionStyling

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
              <Image src="/bion-b-icon.png" alt="BION B" width={32} height={32} className="object-contain" />
            </div>
            <Image src="/bion-logo.png" alt="BION" width={60} height={20} className="object-contain" />
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {TOP_RIGHT_BUTTONS.map((button, index) => {
              const isHovered = hoveredButton === index

              // Icon button: an image recolored to `fillColor` via CSS mask, wrapped in a link.
              if (button.buttonType === "icon") {
                const size = isMobile ? button.mobile.width : button.width
                return (
                  <a
                    key={index}
                    href={button.href}
                    target={button.target}
                    rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
                    aria-label={button.ariaLabel}
                    className="inline-flex items-center justify-center transition-colors cursor-pointer"
                    style={{
                      paddingLeft: `${button.paddingLeft}px`,
                      paddingRight: `${button.paddingRight}px`,
                      paddingTop: `${button.paddingTop}px`,
                      paddingBottom: `${button.paddingBottom}px`,
                    }}
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <span
                      aria-hidden
                      style={{
                        display: "inline-block",
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: isHovered ? button.highlightColor : button.fillColor,
                        transition: "background-color 150ms",
                        WebkitMaskImage: `url(${button.icon})`,
                        maskImage: `url(${button.icon})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  </a>
                )
              }

              // Shape button: text label with a filled background.
              const opensWaitlist = button.action === "waitlist" && WAITLIST_POPUP.ACTIVE
              const sharedProps = {
                className:
                  "inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors cursor-pointer",
                style: {
                  color: button.fontColor,
                  fontSize: `${isMobile ? button.mobile.fontSize : button.fontSize}px`,
                  backgroundColor: isHovered ? button.highlightColor : button.fillColor,
                  paddingLeft: `${button.paddingLeft}px`,
                  paddingRight: `${button.paddingRight}px`,
                  paddingTop: `${button.paddingTop}px`,
                  paddingBottom: `${button.paddingBottom}px`,
                  borderRadius: `${button.borderRadius}px`,
                },
                onMouseEnter: () => setHoveredButton(index),
                onMouseLeave: () => setHoveredButton(null),
              }
              const label = isMobile ? button.mobile.label : button.label

              return opensWaitlist ? (
                <button key={index} type="button" onClick={openWaitlist} {...sharedProps}>
                  {label}
                </button>
              ) : (
                <Link key={index} href={button.href} {...sharedProps}>
                  {label}
                </Link>
              )
            })}

            {/* Hamburger Menu Button */}
            {ACTIVE && (
              <button
                className="transition-colors p-2 cursor-pointer"
                style={{ color: iconHovered ? iconHighlightColor : iconColor }}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            )}
          </div>
        </div>

        {ACTIVE && isOpen && (
          <div className="fixed inset-0 top-16 z-40 animate-in fade-in duration-200">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 w-72 sm:w-80 h-full bg-black/95 backdrop-blur-xl shadow-2xl border-l border-white/10 animate-in slide-in-from-right duration-300">
              <div className="p-6 sm:p-8 h-full flex flex-col">
                <div className="flex flex-col space-y-1">
                  {menuOptions.map((item, index) => {
                    const isActive = pathname === item.href
                    const isHovered = hoveredItem === index
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group relative font-medium transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                          fontSize: `${menuStyle.fontSize}px`,
                          color: isActive
                            ? menuStyle.activeFontColor
                            : isHovered
                              ? menuStyle.hoverFontColor
                              : menuStyle.fontColor,
                          backgroundColor: isActive
                            ? menuStyle.activeFillColor
                            : isHovered
                              ? menuStyle.hoverFillColor
                              : menuStyle.fillColor,
                          paddingLeft: `${menuStyle.paddingLeft}px`,
                          paddingRight: `${menuStyle.paddingRight}px`,
                          paddingTop: `${menuStyle.paddingTop}px`,
                          paddingBottom: `${menuStyle.paddingBottom}px`,
                          borderRadius: `${menuStyle.borderRadius}px`,
                          transform: !isActive && isHovered ? "translateX(4px)" : "translateX(0)",
                          animationDelay: `${index * 50}ms`,
                          animation: "slideIn 0.3s ease-out forwards",
                          opacity: 0,
                        }}
                      >
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                            style={{ backgroundColor: menuStyle.accentBarColor }}
                          />
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}
