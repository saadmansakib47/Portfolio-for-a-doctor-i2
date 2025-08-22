import { Book, Music, Camera, Plane, Heart, Users } from "lucide-react"
import TypingTitle from "./typing-title"

export default function Interests() {
  return (
    <section id="interests" className="section-padding bg-white">
      <div className="container-max">
        <TypingTitle text="Interests & Hobbies" underlineColor="green" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Reading</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Passionate about reading medical journals, literature, and books on personal development. Always eager to
              expand knowledge beyond the medical curriculum.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Music className="h-8 w-8 text-green-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Music</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Music serves as a source of relaxation and inspiration. Enjoy listening to various genres and believe in
              the therapeutic power of music in healthcare.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="h-8 w-8 text-pink-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Photography</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Capturing moments and memories through photography. Particularly interested in documenting community
              health initiatives and medical education experiences.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Plane className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Travel</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Interested in exploring different cultures and healthcare systems around the world. Travel broadens
              perspective on global health challenges and solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-green-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Wellness</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Advocate for holistic wellness including mental health, physical fitness, and work-life balance. Practice
              mindfulness and stress management techniques.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-pink-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Community</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Active in community building and social initiatives. Believe in the power of community support in
              healthcare and personal growth.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            These interests help maintain a balanced perspective on life and contribute to personal growth as both a
            medical professional and an individual. They provide inspiration and energy for the demanding journey of
            medical education and future healthcare practice.
          </p>
        </div>
      </div>
    </section>
  )
}
