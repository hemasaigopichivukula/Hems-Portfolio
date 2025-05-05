import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="relative text-center py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg">
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
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-12 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#eff6ff"></path>
        </svg>
      </div>
    </header>
  );
}
