
import { motion } from "framer-motion";

export default function Values() {
  return (
    <section id="values" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Values & Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Strategic Problem-Solving</h3>
            <p className="text-gray-600">
              Transform complex challenges into structured, actionable solutions through systematic analysis and innovative thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Data-Driven Leadership</h3>
            <p className="text-gray-600">
              Empower decision-making through clear metrics and insights, turning information into actionable strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Continuous Growth</h3>
            <p className="text-gray-600">
              Embrace learning and adaptation as core principles, staying ahead in our evolving business landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
