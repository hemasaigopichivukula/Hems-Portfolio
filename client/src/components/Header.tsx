import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Header({ id }: { id?: string }) {
  return (
    <motion.header
      id={id} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative text-center py-12 md:py-16 pt-28 md:pt-32 bg-blue-800 bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg min-h-[60vh] md:min-h-auto flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 w-full" data-aos="fade-up">
        <div className="relative inline-block">
          <div className="mx-auto rounded-full w-32 h-32 overflow-hidden border-4 border-white shadow-xl mb-6">
            <img 
              src="profile.png" 
              alt="Hema Sai Gopi Chivukula, AI Strategy, Automation and Operations Consultant"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/profile.png";
              }}
            />
          </div>
          <div className="absolute bottom-6 right-0 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
        </div>
        <p className="text-sm sm:text-base font-medium text-blue-100 mb-2">Hema Sai Gopi Chivukula</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 px-2">AI Strategy, Automation &amp; Operations Consultant</h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mt-2 max-w-2xl mx-auto px-4">
          I help businesses turn operational challenges into practical AI solutions, intelligent workflows, and scalable systems that save time, improve decisions, and support growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 px-4">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss a Project
          </Button>
        </div>
        <div className="flex justify-center gap-5 mt-4 px-4 text-sm sm:text-base">
          <Button
            asChild
            variant="link"
            className="h-auto p-0 text-blue-100 hover:text-white"
          >
            <a href="https://drive.google.com/file/d/1Ch-x-fOSuvfiHK1uw_x76ukYcdi5Ptgo/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
          <Button 
            asChild
            variant="link"
            className="h-auto p-0 text-blue-100 hover:text-white"
          >
            <a href="https://www.linkedin.com/in/hemasaigopichivukula/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
        </div>
      </div>


    </motion.header>
  );
}
