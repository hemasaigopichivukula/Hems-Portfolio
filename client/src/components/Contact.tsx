import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company || !formData.inquiryType || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", {
        name: formData.name,
        email: formData.email,
        subject: `${formData.inquiryType} — ${formData.company}`,
        message: `Company or Organization: ${formData.company}\nInquiry Type: ${formData.inquiryType}\n\nChallenge:\n${formData.message}`,
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50" data-aos="fade-up">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
          <span className="bg-primary text-white w-10 h-10 rounded-full inline-flex items-center justify-center mr-3">
            <i className="fas fa-envelope text-sm"></i>
          </span>
          Let&apos;s Solve a Business Problem
        </h2>
        <div className="w-20 h-1 bg-primary mb-6"></div>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-10">
          Looking to implement AI, automate a repetitive workflow, improve an operational process, or build a practical internal tool? Share the challenge and I&apos;ll help explore a realistic path forward.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Get In Touch</h3>
              <p className="mb-6">Reach out about an AI or automation project, consulting opportunity, or full-time role.</p>

              <div className="space-y-4">
                <a href="mailto:hchiv001@ucr.edu" className="flex items-start space-x-3 hover:text-primary transition-colors">
                  <div className="bg-blue-100 text-primary p-2 rounded-full">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hchiv001@ucr.edu</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/hemasaigopichivukula/" target="_blank" className="flex items-start space-x-3 hover:text-primary transition-colors">
                  <div className="bg-blue-100 text-primary p-2 rounded-full">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-gray-600">Connect with me</p>
                  </div>
                </a>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-primary p-2 rounded-full">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl">
              <fieldset className="mb-6">
                <legend className="block text-sm font-medium text-gray-700 mb-3">Inquiry Type</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Inquiry Type">
                  {["AI or Automation Project", "Consulting Opportunity", "Full-Time Opportunity"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      role="radio"
                      aria-checked={formData.inquiryType === type}
                      onClick={() => setFormData((previous) => ({ ...previous, inquiryType: type }))}
                      className={`h-full rounded-lg border p-3 text-sm font-medium text-left transition ${
                        formData.inquiryType === type
                          ? "border-primary bg-blue-50 text-primary ring-2 ring-blue-100"
                          : "border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50"
                      }`}
                    >
                      <span className="flex items-start gap-2">
                        <i className={`fas ${formData.inquiryType === type ? "fa-circle-check" : "fa-circle"} mt-0.5`}></i>
                        {type}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                    required 
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company or Organization</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company or organization name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                  required 
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What challenge are you trying to solve?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Describe the current process, challenge, or opportunity..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Start the Conversation"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
