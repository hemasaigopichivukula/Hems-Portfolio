import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-white" data-aos="fade-right">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-briefcase text-sm"></i>
          </span>
          Experience & Achievements
        </h2>
        <div className="w-20 h-1 bg-primary mb-10"></div>
        
        <div className="relative border-l-2 border-blue-200 pl-8 ml-4 space-y-12">
          {experienceData.map((exp, index) => (
            <div className="relative" key={index}>
              <div className="absolute -left-11 top-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">
                <i className={`fas ${exp.icon} text-xs`}></i>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm inline-block">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-3">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
