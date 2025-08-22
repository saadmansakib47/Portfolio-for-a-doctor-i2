"use client" // Added client directive to enable React hooks

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Research from "@/components/research"
import Achievements from "@/components/achievements"
import Interests from "@/components/interests"
import Volunteering from "@/components/volunteering"
import Reflections from "@/components/reflections"
import Notes from "@/components/notes"
import Moments from "@/components/moments"
import QuoteGenerator from "@/components/quote-generator"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl font-semibold tracking-wide">
        <span className="typing-effect">A journey of dreams begins here…</span>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Research />
      <Achievements />
      <Interests />
      <Volunteering />
      <Reflections />
      <Notes />
      <Moments />
      <QuoteGenerator />
      <Contact />
      <Footer />
    </main>
  )
}
