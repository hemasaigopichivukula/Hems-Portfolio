
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Mentors() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Mentorship</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Guidance & Support</h3>
                <p className="text-gray-600">Dedicated to helping others grow in their technical journey</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Knowledge Sharing</h3>
                <p className="text-gray-600">Sharing experiences and best practices with the community</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
