import { useState, useEffect } from "react";

export default function Navigation() {
  const menuItems = [
    { id: "header", label: "Home", icon: "fa-home" },
    { id: "about", label: "About", icon: "fa-compass" },
    { id: "experience", label: "Experience", icon: "fa-book" },
    { id: "projects", label: "Projects", icon: "fa-rocket" },
    { id: "skills", label: "Skills", icon: "fa-tools" },
    { id: "resume", label: "Resume", icon: "fa-file" },
    { id: "writings", label: "Ideology & Perspectives", icon: "fa-brain" },
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="navbar" className={`bg-blue-900 text-white ${scrolled ? 'py-2' : 'py-4'} px-6 sticky top-0 z-50 shadow-md transition-all duration-300`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <button 
            id="mobileMenuBtn" 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>

          <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row w-full md:w-auto pt-4 md:pt-0 flex-col md:space-x-8 space-y-2 md:space-y-0`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                onClick={() => scrollToSection(item.id)} 
                className="hover:text-yellow-300 transition block py-2 px-3 w-full text-left rounded-md hover:bg-blue-800"
              >
                <i className={`fas ${item.icon} mr-2`}></i>
                {item.label}
              </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}