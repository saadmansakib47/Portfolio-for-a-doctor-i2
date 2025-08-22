import { Microscope, FileText, Users, TrendingUp } from "lucide-react"

export default function Research() {
  return (
    <section id="research" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">Research & Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Microscope className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Current Research</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Currently involved in research projects focusing on preventive medicine and community health initiatives.
              Exploring innovative approaches to healthcare delivery in underserved communities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Community Health Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Preventive Medicine Strategies</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Healthcare Technology Integration</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-8 w-8 text-green-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Publications</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Working on research papers and case studies to contribute to medical literature. Focus areas include
              patient care optimization and medical education methodologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Case Study Documentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Medical Education Research</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Healthcare Innovation Studies</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-pink-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Collaborative Projects</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Participating in interdisciplinary research projects with fellow medical students and healthcare
              professionals to address complex medical challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Student Research Groups</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Medical Professional Networks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Community Health Partnerships</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-2xl font-bold text-gray-800">Future Goals</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Planning to pursue specialized research in areas that can make significant impact on healthcare outcomes
              and patient quality of life.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Advanced Medical Research</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-600">Healthcare Innovation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Global Health Initiatives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
