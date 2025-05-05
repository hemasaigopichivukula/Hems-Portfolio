import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling to change navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav id="navbar" className={`bg-blue-900 text-white ${scrolled ? 'py-2' : 'py-4'} px-6 sticky top-0 z-50 shadow-md transition-all duration-300`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <a href="#" className="text-xl font-bold hover:text-yellow-300 transition">
            <span className="hidden md:inline">Hema Sai</span>
            <span className="md:hidden">HS</span>
          </a>
          
          <button 
            id="mobileMenuBtn" 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          
          <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row w-full md:w-auto pt-4 md:pt-0 flex-col md:space-x-8 space-y-2 md:space-y-0`}>
            <li><a href="#about" className="hover:text-yellow-300 transition block py-1">About</a></li>
            <li><a href="#experience" className="hover:text-yellow-300 transition block py-1">Experience</a></li>
            <li><a href="#projects" className="hover:text-yellow-300 transition block py-1">Projects</a></li>
            <li><a href="#skills" className="hover:text-yellow-300 transition block py-1">Skills</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition block py-1">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
