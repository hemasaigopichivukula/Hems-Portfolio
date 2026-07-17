export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-6 bg-gray-50" data-aos="fade-up">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-user-alt text-sm"></i>
          </span>
          About Me
        </h2>
        <div className="w-20 h-1 bg-primary mb-6"></div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="w-full md:w-2/3">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              I help organizations transform complex operational challenges into AI-enabled workflows, intelligent automation, and scalable business systems. With nearly five years of Amazon experience and an MBA focused on strategy and business analytics, I combine business understanding, structured execution, and practical AI implementation.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              My work spans AI assistants, chatbots, workflow automation, operational analytics, dashboards, process improvement, and program management. I focus on applying AI where it creates measurable value—not adding technology for its own sake.
            </p>
          </div>
          <div className="w-full md:w-1/3">
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
