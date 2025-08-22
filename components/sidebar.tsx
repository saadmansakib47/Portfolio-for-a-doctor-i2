"use client"

import { X, GraduationCap, FlaskConical, Heart, Users, BookOpen, StickyNote, Camera, Quote } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarItems = [
    { href: "#education", label: "Education", icon: GraduationCap },
    { href: "#research", label: "Research", icon: FlaskConical },
    { href: "#interests", label: "Interests", icon: Heart },
    { href: "#volunteering", label: "Volunteering", icon: Users },
    { href: "#reflections", label: "Reflections", icon: BookOpen },
    { href: "#notes", label: "Notes", icon: StickyNote },
    { href: "#moments", label: "Moments", icon: Camera },
    { href: "#quotes", label: "Quotes", icon: Quote },
  ]

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="font-serif font-bold text-xl text-gray-800">Nidhi</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
                >
                  <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center text-sm text-gray-500 border-t pt-4">
              <p>Fariha Afrin Nidhi</p>
              <p className="text-xs">MBBS Student</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
