
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Values() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">Embracing new technologies and creative solutions</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">Striving for quality in everything we do</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-600">Working together to achieve greater results</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
