
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const galleryItems = [
  {
    type: "image", 
    url: "../../../attached_assets/image_1747939455451.png",
    title: "Award Ceremony Recognition",
    description: "Receiving recognition at a formal ceremony"
  },
  {
    type: "image",
    url: "/attached_assets/AI Pitch 2025.jpg", 
    title: "Group Photo at UCR Business School",
    description: "Team photo at the UC Riverside School of Business"
  },
  {
    type: "image",
    url: "/attached_assets/Best Analyst- Amazon.jpg",
    title: "Award Ceremony",
    description: "Recognition ceremony for outstanding achievements"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index}>
                <motion.div
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
                        className="w-full h-[600px] object-contain bg-white rounded-lg shadow-lg"
                      />
                      <div className="p-6 bg-white/95 absolute bottom-0 w-full backdrop-blur-sm rounded-b-lg">
                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}
