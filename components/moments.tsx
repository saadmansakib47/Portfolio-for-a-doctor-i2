"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, MapPin, Calendar } from "lucide-react"
import TypingTitle from "./typing-title"

const moments = [
  {
    id: 1,
    title: "First Day at Medical College",
    location: "University Campus",
    date: "September 2021",
    description: "The beginning of an incredible journey in medicine",
    image: "/medical-college-first-day.png",
  },
  {
    id: 2,
    title: "Anatomy Lab Session",
    location: "Anatomy Department",
    date: "October 2021",
    description: "First hands-on experience with human anatomy",
    image: "/placeholder-h2l98.png",
  },
  {
    id: 3,
    title: "Clinical Rotation",
    location: "City Hospital",
    date: "March 2023",
    description: "First patient interaction during clinical training",
    image: "/medical-student-clinical-rotation.png",
  },
  {
    id: 4,
    title: "Research Presentation",
    location: "Conference Hall",
    date: "June 2023",
    description: "Presenting research findings at medical conference",
    image: "/medical-student-presentation.png",
  },
  {
    id: 5,
    title: "Community Health Camp",
    location: "Rural Village",
    date: "August 2023",
    description: "Volunteering at community health awareness program",
    image: "/medical-students-health-camp.png",
  },
  {
    id: 6,
    title: "Study Group Session",
    location: "Library",
    date: "November 2023",
    description: "Late night study sessions with fellow medical students",
    image: "/placeholder-m3h2a.png",
  },
]

export default function Moments() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % moments.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="moments" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TypingTitle text="Moments" className="text-4xl font-bold text-gray-800 mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing precious memories from my medical journey - a photo album of experiences
          </p>
        </motion.div>

        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={moments[currentIndex].image || "/placeholder.svg"}
                alt={moments[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{moments[currentIndex].title}</h3>
                  <p className="text-lg mb-4 opacity-90">{moments[currentIndex].description}</p>

                  <div className="flex items-center gap-6 text-sm opacity-80">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{moments[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{moments[currentIndex].date}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {moments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Camera icon */}
          <div className="absolute top-4 right-4">
            <Camera className="w-6 h-6 text-white/80" />
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-2">
          {moments.map((moment, index) => (
            <button
              key={moment.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex ? "border-teal-500 scale-110" : "border-gray-300 opacity-70"
              }`}
            >
              <img src={moment.image || "/placeholder.svg"} alt={moment.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
