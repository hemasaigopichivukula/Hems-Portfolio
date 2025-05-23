import { technicalSkills, softSkills } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white" data-aos="fade-left">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-tools text-sm"></i>
          </span>
          Skills & Certifications
        </h2>
        <div className="w-20 h-1 bg-primary mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-700">Technical Skills</h3>

            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2.5">
                    <motion.div 
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-700">Soft Skills & Certifications</h3>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100" key={index}>
                  <div className="flex items-center space-x-2">
                    <i className={`fas ${skill.icon} text-blue-600`}></i>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}