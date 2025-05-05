
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Writings() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Writings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Blog</h3>
                <p className="text-gray-600">Sharing insights and experiences through technical writing</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                <p className="text-gray-600">Contributing to open source documentation and tutorials</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
