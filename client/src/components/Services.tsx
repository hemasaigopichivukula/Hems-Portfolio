import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Strategy & Opportunity Assessment",
    description: "Identify practical AI use cases, prioritize opportunities, and create an implementation roadmap aligned with business needs.",
    icon: "fa-lightbulb",
  },
  {
    title: "AI Assistants & Chatbots",
    description: "Design intelligent assistants for customer support, internal knowledge, email retrieval, lead qualification, and recurring business questions.",
    icon: "fa-comments",
  },
  {
    title: "Workflow & Process Automation",
    description: "Automate repetitive operational tasks, approvals, reporting, document handling, and information flows.",
    icon: "fa-gears",
  },
  {
    title: "AI-Enabled Business Tools",
    description: "Build practical internal tools, prototypes, dashboards, and lightweight applications using AI-assisted development.",
    icon: "fa-laptop-code",
  },
  {
    title: "Operations & Process Improvement",
    description: "Analyze workflows, bottlenecks, capacity, service levels, and performance gaps to improve execution.",
    icon: "fa-arrow-trend-up",
  },
  {
    title: "Dashboards & Decision Support",
    description: "Create KPI frameworks, reporting systems, executive dashboards, and decision-support tools.",
    icon: "fa-chart-line",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 px-4 md:px-6 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-handshake text-sm"></i>
          </span>
          How I Help Businesses
        </h2>
        <div className="w-20 h-1 bg-primary mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border border-blue-100"
            >
              <div className="bg-primary text-white w-11 h-11 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-gray-800">
            Have a process that is manual, slow, or difficult to scale?
          </p>
          <p className="text-gray-600 mt-1 mb-5">
            Let&apos;s explore whether AI or automation can improve it.
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-blue-700"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
