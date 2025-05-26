import { useState, useEffect } from "react";

export default function Navigation() {
  const menuItems = [
    { id: "home", label: "Home", icon: "fa-home" },
    { id: "about", label: "About", icon: "fa-compass" },
    { id: "projects", label: "Projects", icon: "fa-rocket" },
    { id: "skills", label: "Skills", icon: "fa-tools" },
    { id: "gallery", label: "Gallery", icon: "fa-images" },
    { id: "writings", label: "Editorials", icon: "fa-brain" },
    { id: "values", label: "Philosophy", icon: "fa-heart" },
    { id: "mentors", label: "Mentors", icon: "fa-users" },
    { id: "beyond", label: "Beyond Tech", icon: "fa-smile" },
    { id: "contact", label: "Contact", icon: "fa-envelope" }
  ];
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`bg-blue-900/95 backdrop-blur-sm text-white ${scrolled ? 'py-2 fixed w-full top-0' : 'py-4 relative'} px-6 z-50 shadow-md transition-all duration-300`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <button 
            id="mobileMenuBtn" 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>

          <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row w-full md:w-auto pt-4 md:pt-0 flex-col md:space-x-4 space-y-2 md:space-y-0`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                onClick={() => scrollToSection(item.id)} 
                className="hover:text-yellow-300 transition flex flex-col items-center py-2 px-2 w-full text-center rounded-md hover:bg-blue-800"
              >
                <i className={`fas ${item.icon} text-lg mb-1`}></i>
                <span className="text-xs">{item.label}</span>
              </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}