"use client"

import { useState } from "react"
import { Heart, Cake, ArrowUp } from "lucide-react"

export default function Footer() {
  const [showBirthday, setShowBirthday] = useState(false)

  const handleBirthdayClick = () => {
    setShowBirthday(true)
    setTimeout(() => setShowBirthday(false), 5000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Birthday Animation */}
      {showBirthday && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Balloons */}
          <div className="absolute bottom-0 left-10 float-animation">
            <div className="w-8 h-10 bg-pink-500 rounded-full"></div>
            <div className="w-0.5 h-16 bg-gray-400 mx-auto"></div>
          </div>
          <div className="absolute bottom-0 left-20 float-animation" style={{ animationDelay: "0.5s" }}>
            <div className="w-8 h-10 bg-blue-500 rounded-full"></div>
            <div className="w-0.5 h-16 bg-gray-400 mx-auto"></div>
          </div>
          <div className="absolute bottom-0 right-20 float-animation" style={{ animationDelay: "1s" }}>
            <div className="w-8 h-10 bg-green-500 rounded-full"></div>
            <div className="w-0.5 h-16 bg-gray-400 mx-auto"></div>
          </div>
          <div className="absolute bottom-0 right-10 float-animation" style={{ animationDelay: "1.5s" }}>
            <div className="w-8 h-10 bg-yellow-500 rounded-full"></div>
            <div className="w-0.5 h-16 bg-gray-400 mx-auto"></div>
          </div>

          {/* Confetti */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"][Math.floor(Math.random() * 5)],
              }}
            >
              <div className="w-2 h-2 rounded-full"></div>
            </div>
          ))}

          {/* Birthday Message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-serif text-2xl font-bold mb-2">🎉 Happy Birthday! 🎉</h3>
              <p className="text-gray-600">Wishing you a wonderful year ahead filled with success and happiness!</p>
            </div>
          </div>
        </div>
      )}

      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="font-serif font-bold text-xl">Fariha Afrin Nidhi</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Dedicated MBBS student passionate about healthcare, medical research, and making a positive impact in
              people's lives.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#education" className="block text-gray-300 hover:text-white transition-colors">
                Education
              </a>
              <a href="#research" className="block text-gray-300 hover:text-white transition-colors">
                Research
              </a>
              <a href="#achievements" className="block text-gray-300 hover:text-white transition-colors">
                Achievements
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Connect</h3>
            <p className="text-gray-300 mb-4">
              Let's connect and collaborate on healthcare initiatives and medical research.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBirthdayClick}
                className="text-pink-500 hover:text-pink-400 transition-colors"
                title="Special Surprise!"
              >
                <Cake className="h-6 w-6" />
              </button>
              <button
                onClick={scrollToTop}
                className="text-blue-500 hover:text-blue-400 transition-colors"
                title="Back to Top"
              >
                <ArrowUp className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Black Eagle. Made with <Heart className="inline h-4 w-4 text-pink-500" /> for healthcare and
            humanity.
          </p>
        </div>
      </div>
    </footer>
  )
}
