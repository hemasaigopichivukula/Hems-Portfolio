
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
