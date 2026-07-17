import { capabilityGroups, certifications, professionalStrengths } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6 bg-white" data-aos="fade-left">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-tools text-sm"></i>
          </span>
          Skills & Certifications
        </h2>
        <div className="w-20 h-1 bg-primary mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {capabilityGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center shrink-0">
                  <i className={`fas ${group.icon} text-sm`}></i>
                </span>
                <h3 className="text-xl font-bold text-gray-700">{group.title}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-gray-700">
                    <i className="fas fa-check text-blue-600 text-xs mt-1.5"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10">
          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-700">Formal Certifications</h3>
            {certifications.map((certification) => (
              <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm" key={certification.name}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <i className={`fas ${certification.icon} text-blue-600`}></i>
                    <span className="font-medium">{certification.name}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    {certification.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5 text-gray-700">Professional Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {professionalStrengths.map((strength) => (
                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm" key={strength.name}>
                  <div className="flex items-center gap-2">
                    <i className={`fas ${strength.icon} text-blue-600`}></i>
                    <span className="font-medium">{strength.name}</span>
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
