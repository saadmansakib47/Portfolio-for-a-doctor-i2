import { Book, Utensils, Sparkles, Plane, Heart, Users } from "lucide-react"
import TypingTitle from "./typing-title"

export default function Interests() {
  return (
    <section id="interests" className="section-padding bg-white">
      <div className="container-max">
        <TypingTitle text="Interests & Hobbies" underlineColor="green" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reading */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Reading</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Loves diving into books ranging from medical journals to inspiring literature. Reading is both a way to expand knowledge and a source of personal reflection.
            </p>
          </div>

          {/* Cooking */}
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Utensils className="h-8 w-8 text-green-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Cooking</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Finds joy in experimenting with flavors and creating wholesome meals. Cooking is a creative outlet and a way to share warmth with family and friends.
            </p>
          </div>

          {/* Beauty & Skincare */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="h-8 w-8 text-pink-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Beauty & Skincare</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Enthusiastic about makeovers, skincare, and self-care routines. Sees beauty as a form of self-expression and confidence-building.
            </p>
          </div>

          {/* Travel */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Plane className="h-8 w-8 text-blue-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Travel</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Loves exploring new cultures, places, and people. Travel offers a chance to see the world through different perspectives and experiences.
            </p>
          </div>

          {/* Wellness */}
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-green-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Wellness</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Strong believer in holistic well-being, from mental health to physical fitness. Practices mindfulness and promotes balance in everyday life.
            </p>
          </div>

          {/* Community */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-pink-600" />
              <h3 className="font-serif text-xl font-bold text-gray-800">Community</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Values giving back through community service and social initiatives. Believes in the power of compassion and collective effort in shaping a healthier society.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            These hobbies bring balance, creativity, and joy to life, while shaping a compassionate perspective as a future healthcare professional. They inspire personal growth and resilience in the demanding journey of medicine.
          </p>
        </div>
      </div>
    </section>
  )
}
