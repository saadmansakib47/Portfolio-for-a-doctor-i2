import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Merriweather } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Fariha Afrin Nidhi - Medical Student Portfolio",
  description: "Portfolio of Fariha Afrin Nidhi, MBBS student passionate about healthcare and medical research",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
