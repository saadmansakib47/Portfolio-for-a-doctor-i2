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
