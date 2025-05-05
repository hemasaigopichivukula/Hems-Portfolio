
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Beyond() {
  return (
    <section id="beyond" className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Beyond Tech</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Interests</h3>
                <p className="text-gray-600">Exploring various hobbies and activities outside of technology</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">Active participation in local and online communities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
