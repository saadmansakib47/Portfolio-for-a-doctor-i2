"use client"

import { Stethoscope, Heart, Brain, GraduationCap } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center medical-gradient relative overflow-hidden"
    >
      {/* Floating medical icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Stethoscope
          className="absolute top-20 left-10 h-8 w-8 text-blue-300 opacity-50 float-animation"
          style={{ animationDelay: "0s" }}
        />
        <Heart
          className="absolute top-40 right-20 h-6 w-6 text-pink-300 opacity-50 float-animation"
          style={{ animationDelay: "1s" }}
        />
        <Brain
          className="absolute bottom-40 left-20 h-7 w-7 text-green-300 opacity-50 float-animation"
          style={{ animationDelay: "2s" }}
        />
        <GraduationCap
          className="absolute bottom-20 right-10 h-8 w-8 text-blue-300 opacity-50 float-animation"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container-max text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Fariha Afrin <span className="text-blue-600">Nidhi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            MBBS Student | Future Healthcare Professional | Passionate about Medical Research
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Learn About Me
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
