import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-300"></div>

            {/* Education items */}
            <div className="space-y-12">
              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                    Bachelor of Medicine, Bachelor of Surgery (MBBS)
                  </h3>
                  <p className="text-green-600 font-medium mb-2">Currently Pursuing</p>
                  <p className="text-gray-600 mb-4">
                    Comprehensive medical education covering anatomy, physiology, pathology, pharmacology, and clinical
                    practice. Developing strong foundations in patient care and medical ethics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Clinical Skills</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Medical Research</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Patient Care</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">Science Group - Completed</p>
                  <p className="text-gray-600 mb-4">
                    Specialized in Science subjects with focus on Biology, Chemistry, and Physics. Built strong
                    analytical and problem-solving skills essential for medical studies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Biology</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Chemistry</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Physics</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">Continuous Medical Education</h3>
                  <p className="text-pink-600 font-medium mb-2">Ongoing</p>
                  <p className="text-gray-600 mb-4">
                    Actively participating in medical conferences, workshops, and online courses to stay updated with
                    latest medical advancements and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                      Medical Conferences
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Online Courses</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
