
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"

const mentors = [
  { id: 1, name: "John Doe", role: "Tech Lead", impact: "Guided me through system architecture", image: "https://source.unsplash.com/100x100/?portrait&1" },
  { id: 2, name: "Jane Smith", role: "Product Manager", impact: "Taught me product thinking", image: "https://source.unsplash.com/100x100/?portrait&2" },
  { id: 3, name: "Mike Johnson", role: "CTO", impact: "Mentored in leadership skills", image: "https://source.unsplash.com/100x100/?portrait&3" },
  { id: 4, name: "Sarah Wilson", role: "Engineering Manager", impact: "Enhanced my technical skills", image: "https://source.unsplash.com/100x100/?portrait&4" },
  { id: 5, name: "David Brown", role: "Senior Architect", impact: "Improved my system design approach", image: "https://source.unsplash.com/100x100/?portrait&5" },
  { id: 6, name: "Lisa Anderson", role: "VP Engineering", impact: "Strategic thinking mentor", image: "https://source.unsplash.com/100x100/?portrait&6" },
  { id: 7, name: "Robert Taylor", role: "Principal Engineer", impact: "Technical excellence guidance", image: "https://source.unsplash.com/100x100/?portrait&7" },
  { id: 8, name: "Emily Davis", role: "Director of Engineering", impact: "Career growth advisor", image: "https://source.unsplash.com/100x100/?portrait&8" },
];

export default function Mentors() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Mentors</h2>
            <div className="grid grid-cols-4 gap-8">
              {mentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedMentor(mentor)}
                >
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="rounded-full grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <p className="text-center text-sm font-medium">{mentor.name}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
        {selectedMentor && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedMentor.name}</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="font-semibold text-lg">{selectedMentor.role}</p>
              <p className="mt-2">{selectedMentor.impact}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
