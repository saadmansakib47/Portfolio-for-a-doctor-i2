"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RefreshCw, Quote } from "lucide-react"
import TypingTitle from "./typing-title"
import { AnimatePresence } from "framer-motion"

const medicalQuotes = [
  {
    text: "The good physician treats the disease; the great physician treats the patient who has the disease.",
    author: "William Osler",
  },
  {
    text: "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life.",
    author: "Paracelsus",
  },
  {
    text: "The best doctor gives the least medicines.",
    author: "Benjamin Franklin",
  },
  {
    text: "Wherever the art of medicine is loved, there is also a love of humanity.",
    author: "Hippocrates",
  },
  {
    text: "The greatest medicine of all is to teach people how not to need it.",
    author: "Hippocrates",
  },
  {
    text: "To cure sometimes, to relieve often, to comfort always.",
    author: "Edward Livingston Trudeau",
  },
  {
    text: "Medicine is a science of uncertainty and an art of probability.",
    author: "William Osler",
  },
  {
    text: "The physician must be able to tell the antecedents, know the present, and foretell the future.",
    author: "Hippocrates",
  },
  {
    text: "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
    author: "Hippocrates",
  },
  {
    text: "The art of medicine consists of amusing the patient while nature cures the disease.",
    author: "Voltaire",
  },
  {
    text: "Medicine is my lawful wife and literature my mistress; when I get tired of one, I spend the night with the other.",
    author: "Anton Chekhov",
  },
  {
    text: "The doctor of the future will give no medicines, but will interest his patients in the care of the human frame, in diet, and in the cause and prevention of disease.",
    author: "Thomas Edison",
  },
]

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(medicalQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)

  const generateNewQuote = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * medicalQuotes.length)
      setCurrentQuote(medicalQuotes[randomIndex])
      setIsGenerating(false)
    }, 800)
  }

  return (
    <section id="quotes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TypingTitle text="Inspirational Quotes" className="text-4xl font-bold text-gray-800 mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wisdom from great physicians and thinkers to inspire the medical journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500" />

          {/* Quote icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote className="w-16 h-16 text-teal-600" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6 italic">
                "{currentQuote.text}"
              </blockquote>

              <cite className="text-lg text-teal-600 font-semibold not-italic">— {currentQuote.author}</cite>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8">
            <button
              onClick={generateNewQuote}
              disabled={isGenerating}
              className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <RefreshCw className={`w-5 h-5 ${isGenerating ? "animate-spin" : ""}`} />
              {isGenerating ? "Generating..." : "New Quote"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
