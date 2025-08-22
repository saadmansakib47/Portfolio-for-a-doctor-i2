"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, BookOpen, FileText, Lightbulb, Heart } from "lucide-react"
import TypingTitle from "./typing-title"

const notes = [
  {
    id: 1,
    title: "Anatomy Study Notes",
    content: "Detailed notes on cardiovascular system, focusing on heart structure and blood circulation pathways.",
    icon: Heart,
    color: "bg-red-50 border-red-200",
  },
  {
    id: 2,
    title: "Pharmacology Insights",
    content: "Key drug interactions and mechanisms of action for common medications used in clinical practice.",
    icon: FileText,
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 3,
    title: "Clinical Observations",
    content: "Important observations from hospital rotations and patient interactions during clinical training.",
    icon: Lightbulb,
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    id: 4,
    title: "Research Methodology",
    content: "Notes on statistical analysis methods and research design principles for medical studies.",
    icon: BookOpen,
    color: "bg-green-50 border-green-200",
  },
  {
    id: 5,
    title: "Pathology Review",
    content: "Comprehensive review of disease mechanisms and diagnostic criteria for various conditions.",
    icon: Heart,
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: 6,
    title: "Medical Ethics",
    content: "Key principles of medical ethics and their application in clinical decision-making processes.",
    icon: FileText,
    color: "bg-pink-50 border-pink-200",
  },
]

export default function Notes() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="notes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TypingTitle text="Notes" className="text-4xl font-bold text-gray-800 mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my study notes, insights, and observations from my medical journey
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {notes.map((note, index) => {
              const IconComponent = note.icon
              return (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex-shrink-0 w-80 p-6 rounded-xl border-2 ${note.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-teal-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{note.content}</p>
                </motion.div>
              )
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
