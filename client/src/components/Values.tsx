
import { motion } from "framer-motion";

function Values() {
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
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-gray-600">
              Embracing growth through constant learning and adaptation in our ever-evolving technological landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
            <p className="text-gray-600">
              Pushing boundaries and thinking outside the box to create meaningful solutions that drive progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">User-Centric Design</h3>
            <p className="text-gray-600">
              Placing user needs at the forefront of every decision to create intuitive and impactful experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Values;
