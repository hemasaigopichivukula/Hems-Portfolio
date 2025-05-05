
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const perspectives = [
  {
    title: "Innovation Strategy",
    content: "Exploring the intersection of technology and business value"
  },
  {
    title: "Leadership Principles",
    content: "Building and scaling high-performing teams"
  },
  {
    title: "Digital Transformation",
    content: "Navigating the challenges of modern enterprise evolution"
  },
  {
    title: "Future of Tech",
    content: "Insights on emerging technologies and their impact"
  }
];

export default function Writings() {
  return (
    <section id="writings" className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Ideology & Perspectives</h2>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="flex gap-6"
          >
            {[...perspectives, ...perspectives].map((item, index) => (
              <Card key={index} className="min-w-[300px] bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
