
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-code text-sm"></i>
          </span>
          Projects
        </h2>
        <div className="w-20 h-1 bg-primary mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              className="group card-hover"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={project.link} target="_blank" 
                 className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col h-full hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2 group-hover:border-b-4 group-hover:border-primary">
                <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900 opacity-80 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`fas ${project.icon} text-5xl text-white opacity-70`}></i>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-white text-primary px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-primary font-medium flex items-center group-hover:font-bold">
                    View Project <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </span>
                  <span className="flex items-center text-gray-500">
                    <i className="fab fa-github text-lg"></i>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
