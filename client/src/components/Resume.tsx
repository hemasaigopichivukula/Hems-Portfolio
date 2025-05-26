import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const galleryItems = [
  {
    type: "image",
    url: "/Product Club Award.jpg",
    title: "Product Club Achievement",
    description: "Leading UCR's Product Club to win the prestigious Collaboration of the Year Award, fostering innovation and teamwork"
  },
  {
    type: "image",
    url: "/Collaboration of the year Award.jpg",
    title: "Leadership Excellence",
    description: "Honored to receive the Collaboration of the Year Award as President of Product Club, recognizing our team's outstanding achievements"
  },
  {
    type: "image",
    url: "/Team 2024-2025.HEIC",
    title: "Product Club Leadership Team",
    description: "Guiding UCR's next generation of product innovators as President for 2024-2025"
  },
  {
    type: "image",
    url: "/AI Pitch 2025.jpg",
    title: "AI Innovation Champion",
    description: "Presenting cutting-edge AI solutions at UCR's annual pitch competition, showcasing technical excellence"
  },
  {
    type: "image",
    url: "/Best Analyst- Amazon.jpg",
    title: "Amazon Excellence Award",
    description: "Recognized as Best Analyst at Amazon for delivering exceptional analytical insights and strategic impact"
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
                      <div className="relative w-full h-[400px]">
                        <img 
                          src={item.url} 
                          alt={item.title}
                          className="w-full h-full object-contain bg-white"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.jpg';
                            console.error(`Failed to load image: ${item.url}`);
                          }}
                        />
                      </div>
                      <div className="p-6 bg-white/95 w-full backdrop-blur-sm">
                        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
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