
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Values() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-8 text-center">The Philosophy</h2>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <p className="text-3xl font-serif italic text-gray-700 leading-relaxed">
                "Innovation is not just about creating something new; it's about making a meaningful impact 
                in the lives of others through thoughtful and purposeful solutions."
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
