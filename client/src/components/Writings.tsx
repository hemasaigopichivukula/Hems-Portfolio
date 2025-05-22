
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const perspectives = [
  {
    title: "One Year, One Vision: The AI Pitch Competition Journey",
    content: "From concept to reality—building an inter-university AI competition and the leadership lessons learned along the way."
  },
  {
    title: "What Makes a Great Mentor—and Why I Found Four",
    content: "How mentors from Amazon, academia, entrepreneurship, and design shaped my understanding of leadership beyond theory."
  },
  {
    title: "Beyond Execution: From Operations to Strategy",
    content: "My evolution from managing tasks to leading vision, and how strategy becomes a mindset rather than a title."
  },
  {
    title: "From Amazon Metrics to Meaningful Impact",
    content: "Transitioning from corporate metrics to nonprofit outcomes, and finding purpose as the new KPI."
  },
  {
    title: "AI as a Strategic Mentor",
    content: "How AI can serve as a mindset coach and strategic partner beyond just a tool for tasks and applications."
  },
  {
    title: "Probing and Bias for Action",
    content: "The twin engines of progress: how deep questioning and decisive action drive leadership success."
  },
  {
    title: "Lead Like a Community Builder",
    content: "Building trust, fostering psychological safety, and creating space for shared ownership in leadership."
  }
];

export default function Writings() {
  return (
    <section id="writings" className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Editorials</h2>
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
