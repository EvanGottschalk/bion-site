import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BION Token - AI-Powered Utility Token on Solana",
  description:
    "BION is a chain-agnostic utility token powering AI automation and blockchain integration. Built for the fourth industrial revolution.",
  generator: "BION",
  keywords: "BION, cryptocurrency, AI token, Solana, blockchain, artificial intelligence, automation",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
