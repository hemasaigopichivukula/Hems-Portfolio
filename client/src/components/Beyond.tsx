
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Beyond() {
  return (
    <section id="beyond" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Beyond Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Interests & Activities</h3>
              <p className="text-gray-600 mb-4">
                I'm driven by curiosity — not just in data and strategy, but in life. I love spending time with friends discussing real-world challenges and exploring how we might turn them into meaningful solutions — often through a business lens that blends impact with opportunity.
              </p>
              <p className="text-gray-600 mb-4">
                Traveling refreshes my mind and expands my perspective, and sports keep me grounded. I'm an avid player of cricket, badminton, pickleball, and snooker — always up for a match, always ready to learn.
              </p>
              <p className="text-gray-600">
                And when I'm home? You'll find me in the kitchen. Cooking is my creative outlet and one of my favorite ways to connect with people. Few things bring me more joy than watching someone smile over something I've made.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Living by "Happy to Help" led me to join SAC – Students Against Child Labor back in India. Our mission was to end child labor through education, and we worked at the grassroots — visiting villages, educating parents, and helping children enroll in local schools.
              </p>
              <p className="text-gray-600 mb-4">
                We organized science fairs, tutoring sessions, and community events that ignited a passion for learning in young minds.
              </p>
              <p className="text-gray-600">
                It was real, messy, and deeply fulfilling — and it taught me that meaningful change happens when we listen first, and then act with heart.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
