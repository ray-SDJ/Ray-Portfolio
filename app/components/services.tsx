import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [selectedService, setSelectedService] = useState<"dev" | "pentest">(
    "dev"
  );

  const services = {
    dev: {
      title: "Web Development",
      description: "Full-stack development with modern technologies",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "API Development",
        "Database Design",
        "UI/UX Implementation",
        "Performance Optimization",
      ],
    },
    pentest: {
      title: "Penetration Testing",
      description: "Comprehensive security assessment and testing",
      features: [
        "Vulnerability Assessment",
        "Network Security Testing",
        "Web Application Testing",
        "Social Engineering Tests",
        "Security Consultation",
        "Detailed Report & Remediation",
      ],
    },
  };

  return (
    <section className="py-20 bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Pixelated Toggle Switch */}
          <div className="inline-flex bg-gray-800 p-1 rounded-lg mb-8">
            <motion.button
              onClick={() => setSelectedService("dev")}
              className={`px-6 py-2 rounded-md font-pixel text-sm ${
                selectedService === "dev"
                  ? "bg-violet-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Web Developer
            </motion.button>
            <motion.button
              onClick={() => setSelectedService("pentest")}
              className={`px-6 py-2 rounded-md font-pixel text-sm ${
                selectedService === "pentest"
                  ? "bg-violet-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Penetration Testing
            </motion.button>
          </div>

          {/* Service Window */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-800 rounded-lg p-8 shadow-2xl border-2 border-violet-500"
            >
              {/* Window Header */}
              <div className="flex items-center mb-6 border-b border-gray-700 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-white font-pixel text-xl mx-auto pr-12">
                  {services[selectedService].title}
                </h3>
              </div>

              {/* Service Content */}
              <div className="text-left">
                <p className="text-gray-300 mb-6">
                  {services[selectedService].description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services[selectedService].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <svg
                        className="w-5 h-5 text-violet-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300 font-pixel text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Call to Action */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-violet-600 text-white rounded-lg font-pixel text-sm
                    hover:bg-violet-700 transition duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
