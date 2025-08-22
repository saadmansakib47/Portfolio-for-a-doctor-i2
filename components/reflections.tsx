import { Quote, Heart, Lightbulb, Target } from "lucide-react"
import TypingTitle from "./typing-title"

export default function Reflections() {
  return (
    <section id="reflections" className="section-padding bg-white">
      <div className="container-max">
        <TypingTitle text="Reflections & Philosophy" underlineColor="blue" />

        <div className="text-center mb-12">
          
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Quote className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Personal Mission</h3>
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              "To become a compassionate healthcare professional who not only treats diseases but also heals hearts,
              advocates for health equity, and contributes to the advancement of medical science for the betterment of
              humanity."
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-green-600" />
                <h4 className="font-serif text-xl font-bold text-gray-800">On Compassion</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Medicine is not just about diagnosing and treating; it's about connecting with people at their most
                vulnerable moments and providing hope, comfort, and healing."
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="h-6 w-6 text-pink-600" />
                <h4 className="font-serif text-xl font-bold text-gray-800">On Learning</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Every patient teaches us something new. Medical education is a lifelong journey where curiosity,
                humility, and dedication are our greatest companions."
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Future Vision</h3>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                As I continue my medical journey, I envision myself contributing to healthcare in multiple ways:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Clinical Excellence</h5>
                      <p className="text-gray-600 text-sm">
                        Providing exceptional patient care with evidence-based practice
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Research Innovation</h5>
                      <p className="text-gray-600 text-sm">
                        Contributing to medical research and healthcare innovation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Community Impact</h5>
                      <p className="text-gray-600 text-sm">
                        Addressing healthcare disparities and promoting health equity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Medical Education</h5>
                      <p className="text-gray-600 text-sm">Mentoring future healthcare professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Core Belief</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              "Healthcare is a fundamental human right, and as future healthcare professionals, we have the
              responsibility to ensure that quality care is accessible to all, regardless of their background or
              circumstances."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
