import { Trophy, Star, Medal, Target } from "lucide-react"
import TypingTitle from "./typing-title"

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="container-max">
        <TypingTitle text="Achievements" underlineColor="pink" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">Academic Excellence</h3>
            <p className="text-gray-600 text-sm">Consistent high performance in medical studies and examinations</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">Research Recognition</h3>
            <p className="text-gray-600 text-sm">Recognition for contributions to medical research projects</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Medal className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">Community Service</h3>
            <p className="text-gray-600 text-sm">Active participation in healthcare community service initiatives</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-2">Leadership</h3>
            <p className="text-gray-600 text-sm">Leadership roles in student organizations and medical societies</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">Notable Accomplishments</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Medical Student Excellence Award</h4>
                  <p className="text-gray-600 text-sm">
                    Recognition for outstanding academic performance and dedication
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Research Presentation</h4>
                  <p className="text-gray-600 text-sm">Presented research findings at medical student conference</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Volunteer Recognition</h4>
                  <p className="text-gray-600 text-sm">Acknowledged for exceptional community health service</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Clinical Skills Certification</h4>
                  <p className="text-gray-600 text-sm">Advanced certification in clinical examination techniques</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Medical Ethics Training</h4>
                  <p className="text-gray-600 text-sm">
                    Completed advanced training in medical ethics and patient care
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Peer Mentorship</h4>
                  <p className="text-gray-600 text-sm">Successfully mentored junior medical students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
