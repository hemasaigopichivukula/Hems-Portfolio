
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const galleryItems = [
  {
    type: "image",
    url: "/path-to-award-image.jpg",
    title: "Achievement Award",
    description: "Received for outstanding performance"
  },
  {
    type: "image",
    url: "/path-to-speech-image.jpg",
    title: "Keynote Speech",
    description: "Speaking at tech conference"
  }
  // Add more items as needed
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
