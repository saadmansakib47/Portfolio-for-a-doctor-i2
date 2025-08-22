import { User, MapPin, Calendar } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-gray-600">
              <User className="h-5 w-5 text-blue-600" />
              <span>Medical Student</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="h-5 w-5 text-green-600" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Calendar className="h-5 w-5 text-pink-600" />
              <span>Born: December 25th</span>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              I am a dedicated MBBS student with a deep passion for healthcare and medical research. My journey in
              medicine is driven by a genuine desire to make a positive impact on people's lives and contribute to the
              advancement of medical science.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through my studies, I have developed a strong foundation in medical knowledge while maintaining a
              compassionate approach to patient care. I believe in the power of continuous learning and staying updated
              with the latest medical developments.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Compassion</h4>
                  <p className="text-gray-600 text-sm">Treating every patient with empathy and understanding</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Excellence</h4>
                  <p className="text-gray-600 text-sm">Striving for the highest standards in medical practice</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Innovation</h4>
                  <p className="text-gray-600 text-sm">Embracing new technologies and research in healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
