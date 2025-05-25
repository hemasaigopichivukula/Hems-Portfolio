import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"

const mentors = [
  {
    id: 1,
    name: "Ravi Teja Kakkerla",
    role: "Sr. Workforce Manager at Amazon",
    impact: "Ravi Teja Kakkerla is a Sr. Workforce Manager at Amazon and was my reporting manager for over 3.5 years during my tenure there. He is the embodiment of leadership that empowers rather than controls. He taught me that talent and commitment are enough to get recognized and promoted. His leadership style—marked by humility, openness to feedback, and a trust-first mindset—gave me the freedom to explore, innovate, and grow. Thanks to his mentorship, I was promoted from L2 to L4 in just 15 months.",
    linkedin: "https://www.linkedin.com/in/raviteja030690/",
    image: "/Ravi Teja Kakkerla.jpg"
  },
  {
    id: 2,
    name: "Sabarish R Sethuraman",
    role: "Senior Cloud Applications Test Engineer & Entrepreneur",
    impact: "Sabarish R Sethuraman, an entrepreneur and senior cloud applications test engineer in the space and defense sector, has mentored me in my entrepreneurial journey. He has shown me that consistency is more important than brilliance and taught me how to approach life with emotional control and positivity. From learning to read people to building deeper, more productive conversations, his mentorship has helped me grow into a resilient and thoughtful future entrepreneur.",
    linkedin: "https://www.linkedin.com/in/sabarishsethuraman/",
    image: "/Sabarish R Sethuraman.jpg"
  },
  {
    id: 3,
    name: "Rahul Muthavarapu",
    role: "Product Consultant",
    impact: "Coming from a chemistry background, he ventured into startups and eventually found his place in product design. Rahul consistently challenges norms, pushes boundaries, and encourages others to think beyond the obvious. He has inspired me to stop limiting myself and start exploring the multiple dimensions of creativity, leadership, and personal potential.",
    linkedin: "https://www.linkedin.com/in/rmuth004/",
    image: "/Rahul Muthavarapu.jpeg"
  },
  {
    id: 4,
    name: "Dilip Kotturi",
    role: "Sr. Supply Chain Manager at Amazon",
    impact: "Dilip Kotturi, currently a Sr. Supply Chain Manager at Amazon, was my Senior Manager at Alexa Data Services. His story—from starting as a customer associate to rising to an L6 role in Seattle—is one of perseverance and continuous self-improvement. He taught me that not all days are productive, but every day can be a learning opportunity. His motto, 'If you know it, do it. If you don't, ask and learn,' has deeply shaped how I approach challenges in both work and life.",
    linkedin: "https://www.linkedin.com/in/kotturi-d-b45741151/",
    image: "/Dilip Kotturi.jpg"
  }
];

export default function Mentors() {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <section id="mentors" className="py-20">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Mentors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {mentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer flex flex-col items-center"
                  onClick={() => setSelectedMentor(mentor)}
                >
                  <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-[30px]">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-contain transition-all"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-base font-medium mb-1">{mentor.name}</p>
                    <p className="text-sm text-gray-600 max-w-[200px]">{mentor.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
        {selectedMentor && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedMentor.name}</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="font-semibold text-lg text-blue-600 mb-3">{selectedMentor.role}</p>
              <p className="text-gray-700 mb-4">{selectedMentor.impact}</p>
              <a 
                href={selectedMentor.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-linkedin mr-2"></i>
                Connect on LinkedIn
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}