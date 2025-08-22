import { HandHeart, Users, Globe, Stethoscope } from "lucide-react"
import TypingTitle from "./typing-title"

export default function Volunteering() {
  return (
    <section id="volunteering" className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-max">
        <TypingTitle text="Volunteering & Service" underlineColor="green" />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <HandHeart className="h-8 w-8 text-green-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Community Health</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Actively involved in community health programs, providing basic healthcare education and support to
              underserved populations. Focus on preventive care and health awareness.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Health Education Workshops</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Free Health Screenings</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Vaccination Campaigns</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Student Mentorship</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mentoring junior medical students and pre-medical students, providing guidance on academic success, career
              planning, and personal development in the medical field.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Academic Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Career Counseling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Study Groups</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="h-8 w-8 text-pink-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Global Health</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Participating in global health initiatives and awareness campaigns, contributing to efforts addressing
              healthcare disparities and promoting health equity worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Health Equity Advocacy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">International Health Programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Cross-cultural Healthcare</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Medical Missions</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Participating in medical mission trips and healthcare outreach programs, providing essential medical
              services to communities with limited access to healthcare.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Rural Healthcare Outreach</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Emergency Medical Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Healthcare Infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Service Philosophy</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            "Service to others is not just a responsibility but a privilege. Through volunteering, I've learned that
            healing extends beyond medical treatment—it encompasses compassion, understanding, and community support.
            Every volunteer experience has shaped my perspective on healthcare and reinforced my commitment to making a
            positive impact in people's lives."
          </p>
        </div>
      </div>
    </section>
  )
}
