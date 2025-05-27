import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 px-4 md:px-6 bg-white" data-aos="fade-right">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-briefcase text-sm"></i>
          </span>
          Experience & Achievements
        </h2>
        <div className="w-20 h-1 bg-primary mb-10"></div>
        
        <div className="relative border-l-2 border-blue-200 pl-6 md:pl-8 ml-2 md:ml-4 space-y-8 md:space-y-12">
          {experienceData.map((exp, index) => (
            <div className="relative" key={index}>
              <div className="absolute -left-9 md:-left-11 top-0 bg-primary text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center">
                <i className={`fas ${exp.icon} text-xs`}></i>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                  <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm inline-block mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-3 text-sm md:text-base">{exp.company}</p>
                <p className="text-sm md:text-base">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
