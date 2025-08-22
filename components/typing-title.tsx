"use client"

import { useState, useEffect } from "react"

interface TypingTitleProps {
  text: string
  underlineColor: string
  className?: string
}

export default function TypingTitle({ text, underlineColor, className = "" }: TypingTitleProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById(`typing-title-${text.replace(/\s+/g, "-").toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [text, isVisible])

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [text, isVisible])

  return (
    <div id={`typing-title-${text.replace(/\s+/g, "-").toLowerCase()}`} className={`text-center mb-12 ${className}`}>
      <div className="overflow-hidden">
        <h2
          className={`font-serif text-4xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
          }`}
        >
          {displayedText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </h2>
      </div>
      <div
        className={`w-24 h-1 bg-${underlineColor}-600 mx-auto transition-all duration-1000 delay-500 ${
          isComplete ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      ></div>
    </div>
  )
}
