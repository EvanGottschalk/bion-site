import Image from "next/image"
import type { ReactNode } from "react"
import { Github, Send } from "lucide-react"
import { FooterLink } from "@/components/footer-link"
import {
  FOOTER_COLUMN_LEFT,
  FOOTER_COLUMN_MIDDLE,
  FOOTER_COLUMN_RIGHT,
  type FooterLinkColumn,
} from "@/config/ui_config"

// Maps a social icon key from config to its rendered icon (colored via currentColor).
const SOCIAL_ICONS: Record<string, (size: number) => ReactNode> = {
  x: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  github: (size) => <Github style={{ width: size, height: size }} />,
  telegram: (size) => <Send style={{ width: size, height: size }} />,
}

function LinkColumn({ column }: { column: FooterLinkColumn }) {
  return (
    <div>
      <h3
        className="font-semibold mb-3 sm:mb-4"
        style={{ color: column.title.fontColor, fontSize: `${column.title.fontSize}px` }}
      >
        {column.title.label}
      </h3>
      <div className="space-y-2">
        {column.links.map((link) => (
          <FooterLink
            key={link.label}
            href={link.href}
            target={link.target}
            action={link.action}
            fontColor={column.linkStyling.fontColor}
            highlightFontColor={column.linkStyling.highlightFontColor}
            fontSize={column.linkStyling.fontSize}
            className="block"
          >
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <Image src="/bion-b-icon.png" alt="BION B" width={32} height={32} className="object-contain" />
              </div>
              <Image src="/bion-logo.png" alt="BION" width={60} height={20} className="object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered utility token for the fourth industrial revolution. Powering automation on the Solana
              blockchain.
            </p>
          </div>

          {/* Quick Links */}
          <LinkColumn column={FOOTER_COLUMN_LEFT} />

          {/* Resources */}
          <LinkColumn column={FOOTER_COLUMN_MIDDLE} />

          {/* Community */}
          <div>
            <h3
              className="font-semibold mb-3 sm:mb-4"
              style={{
                color: FOOTER_COLUMN_RIGHT.title.fontColor,
                fontSize: `${FOOTER_COLUMN_RIGHT.title.fontSize}px`,
              }}
            >
              {FOOTER_COLUMN_RIGHT.title.label}
            </h3>
            <div className="flex space-x-4">
              {FOOTER_COLUMN_RIGHT.links.map((link) => (
                <FooterLink
                  key={link.icon}
                  href={link.href}
                  target={link.target}
                  ariaLabel={link.ariaLabel}
                  fontColor={FOOTER_COLUMN_RIGHT.iconStyling.fontColor}
                  highlightFontColor={FOOTER_COLUMN_RIGHT.iconStyling.highlightFontColor}
                >
                  {SOCIAL_ICONS[link.icon](FOOTER_COLUMN_RIGHT.iconStyling.size)}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 BION Token. All rights reserved.</p>
          <p className="mt-2">BION is a utility token for AI automation and is not intended for investment purposes.</p>
        </div>
      </div>
    </footer>
  )
}
