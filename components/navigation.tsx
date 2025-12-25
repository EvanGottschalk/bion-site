"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/whitepaper", label: "Whitepaper" },
    { href: "/exchanges", label: "Exchanges" },
    { href: "/contact", label: "Contact" },
  ]

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
            <Button className="text-sm sm:text-base px-3 sm:px-4">
              <span className="hidden xs:inline">Get BION</span>
              <span className="xs:hidden">Get</span>
            </Button>

            {/* Hamburger Menu Button */}
            <button
              className="text-white hover:text-primary transition-colors p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 top-16 z-40 animate-in fade-in duration-200">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 w-72 sm:w-80 h-full bg-black/95 backdrop-blur-xl shadow-2xl border-l border-white/10 animate-in slide-in-from-right duration-300">
              <div className="p-6 sm:p-8 h-full flex flex-col">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group relative text-white text-lg sm:text-xl font-medium transition-all duration-300 py-4 px-4 rounded-lg ${
                        pathname === item.href
                          ? "bg-[#9ca1ff]/10 text-[#9ca1ff]"
                          : "hover:bg-white/5 hover:text-[#9ca1ff] hover:translate-x-1"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "slideIn 0.3s ease-out forwards",
                        opacity: 0,
                      }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {pathname === item.href && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#9ca1ff] rounded-r-full" />
                      )}
                    </Link>
                  ))}
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
