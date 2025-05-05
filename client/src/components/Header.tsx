import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative text-center py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <div className="relative inline-block">
          <div className="mx-auto rounded-full w-32 h-32 bg-blue-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-xl mb-6">
            HS
          </div>
          <div className="absolute bottom-6 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hema Sai Gopi Chivukula</h1>
        <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-2xl mx-auto">
          MBA mind behind streamlined solutions — where strategy meets simplicity
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <a href="#contact">Contact Me</a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>

      
    </motion.header>
  );
}