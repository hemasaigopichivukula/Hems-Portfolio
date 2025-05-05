
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export function Values() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Values</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Quality</h3>
            <p>Committed to delivering high-quality solutions</p>
          </div>
          <div>
            <h3 className="font-semibold">Innovation</h3>
            <p>Constantly learning and adopting new technologies</p>
          </div>
          <div>
            <h3 className="font-semibold">Collaboration</h3>
            <p>Working together to achieve better results</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
