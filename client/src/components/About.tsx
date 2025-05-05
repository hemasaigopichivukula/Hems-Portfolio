export default function About() {
  return (
    <section id="about" className="py-16 px-6" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-user-alt text-sm"></i>
          </span>
          About Me
        </h2>
        <div className="w-20 h-1 bg-primary mb-6"></div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <p className="text-lg leading-relaxed mb-4">
              I help organizations improve efficiency while fostering leadership and personal growth. With an MBA background and experience at major companies like Amazon, I specialize in simplifying complex systems and building people-centered strategies for lasting impact.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My approach combines strategic thinking with practical implementation - turning ideas into actionable solutions that drive measurable results.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/in/hemasaigopichivukula/" target="_blank" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg flex items-center hover:bg-blue-200 transition">
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a href="#" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg flex items-center hover:bg-blue-200 transition">
                <i className="fas fa-file-pdf mr-2"></i> Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="font-semibold text-xl mb-3 text-primary">Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-graduation-cap mt-1 text-primary mr-2"></i>
                  <span><strong>Education:</strong> MBA, Business Analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 text-primary mr-2"></i>
                  <span><strong>Location:</strong> California</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-briefcase mt-1 text-primary mr-2"></i>
                  <span><strong>Experience:</strong> 5+ years</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-language mt-1 text-primary mr-2"></i>
                  <span><strong>Languages:</strong> English, Hindi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
