export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Hema Sai Gopi Chivukula</h2>
            <p className="text-blue-200">MBA mind behind streamlined solutions</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/hemasaigopichivukula/" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/hemasai" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:hchiv001@ucr.edu" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Hema Sai Gopi Chivukula. All rights reserved.</p>
          <p className="mt-2 md:mt-0">&nbsp;</p>
        </div>
      </div>
    </footer>
  );
}
