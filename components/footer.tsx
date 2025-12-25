import Link from "next/link"
import Image from "next/image"
import { Github, Send } from "lucide-react"

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
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About BION
              </Link>
              <Link href="/whitepaper" className="block text-sm text-muted-foreground hover:text-primary">
                Whitepaper
              </Link>
              <Link href="/team" className="block text-sm text-muted-foreground hover:text-primary">
                Team
              </Link>
              <Link href="/exchanges" className="block text-sm text-muted-foreground hover:text-primary">
                Exchanges
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Documentation
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                API Reference
              </Link>
              <Link href="#" className="block text-sm text-muted-foreground hover:text-primary">
                Developer Tools
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Support
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4">Community</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Send className="w-5 h-5" />
              </Link>
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
