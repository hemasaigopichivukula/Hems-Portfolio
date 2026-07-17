
import { projectsData } from "@/lib/data";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-code text-sm"></i>
          </span>
          Projects
        </h2>
        <div className="w-20 h-1 bg-primary mb-6"></div>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-10">
          Selected work demonstrating how I combine AI, automation, analytics, and operational strategy to solve practical business problems.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              className="group card-hover project-card-print"
              key={index}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col h-full hover:shadow-2xl transition duration-300 transform group-hover:-translate-y-2 group-hover:border-b-4 group-hover:border-primary">
                  <ProjectCard project={project} />
                </a>
              ) : (
                <div className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col h-full">
                  <ProjectCard
                    project={project}
                    onAction={project.action === "openPortfolioAssistant"
                      ? () => window.dispatchEvent(new Event("open-portfolio-assistant"))
                      : undefined}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media print {
          .project-card-print {
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            break-inside: avoid;
          }
        }
      `}</style>
    </section>
  );
}

type Project = (typeof projectsData)[number];

function ProjectCard({ project, onAction }: { project: Project; onAction?: () => void }) {
  return (
    <>
                <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900 opacity-80 group-hover:opacity-70 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`fas ${project.icon} text-5xl text-white opacity-70`}></i>
                  </div>
                  <div className="absolute top-3 right-3 bg-white text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                  {onAction ? (
                    <button
                      type="button"
                      onClick={onAction}
                      className="text-primary font-medium flex items-center hover:font-bold"
                      aria-label="Open and try the AI Portfolio Assistant"
                    >
                      {project.ctaText}
                      <i className="fas fa-comment-dots ml-2"></i>
                    </button>
                  ) : (
                    <span className="text-primary font-medium flex items-center group-hover:font-bold">
                      {project.ctaText} {project.link && <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>}
                    </span>
                  )}
                </div>
    </>
  );
}
