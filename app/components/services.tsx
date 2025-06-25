import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [selectedService, setSelectedService] = useState<"dev" | "pentest">(
    "dev"
  );
  const [showEmail, setShowEmail] = useState(false);

  const services = {
    dev: {
      title: "WEB DEVELOPMENT",
      subtitle: "// FULL-STACK SOLUTIONS",
      description:
        "Building next-generation web applications with cutting-edge technologies",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "API Development",
        "Database Architecture",
        "UI/UX Implementation",
        "Performance Optimization",
      ],
      icon: "< />",
      color: "violet",
    },
    pentest: {
      title: "PENETRATION TESTING",
      subtitle: "// SECURITY ASSESSMENT",
      description:
        "Comprehensive security testing to identify and eliminate vulnerabilities",
      features: [
        "Vulnerability Assessment",
        "Network Security Testing",
        "Web Application Testing",
        "Social Engineering Tests",
        "Security Consultation",
        "Detailed Reports & Remediation",
      ],
      icon: "🛡️",
      color: "cyan",
    },
  };

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
    // Optional: Copy email to clipboard
    navigator.clipboard.writeText("raynersoto0908@outlook.com");
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-black via-violet-900/10 to-black"
      id="services"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 font-mono tracking-wider"
            animate={{
              textShadow: [
                "0 0 20px rgba(147,51,234,0.8)",
                "0 0 40px rgba(6,182,212,0.8)",
                "0 0 20px rgba(147,51,234,0.8)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              &lt;SERVICES/&gt;
            </span>
          </motion.h2>

          {/* Futuristic Toggle Switch */}
          <motion.div
            className="inline-flex bg-black/50 backdrop-blur-sm p-1 rounded-full mb-8 border border-violet-500/30"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <motion.button
              onClick={() => setSelectedService("dev")}
              className={`relative px-8 py-3 rounded-full font-mono text-sm tracking-wider transition-all duration-300 ${
                selectedService === "dev"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {selectedService === "dev" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId="serviceToggle"
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">WEB DEVELOPER</span>
            </motion.button>

            <motion.button
              onClick={() => setSelectedService("pentest")}
              className={`relative px-8 py-3 rounded-full font-mono text-sm tracking-wider transition-all duration-300 ${
                selectedService === "pentest"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {selectedService === "pentest" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId="serviceToggle"
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">PENETRATION TESTER</span>
            </motion.button>
          </motion.div>

          {/* Service Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 15 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-8 shadow-2xl border border-violet-500/30 backdrop-blur-sm overflow-hidden">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-transparent" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32">
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-500 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-500 to-transparent" />
                </div>

                {/* Service Header */}
                <motion.div
                  className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700/50"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`text-4xl font-bold ${
                        selectedService === "dev"
                          ? "text-violet-500"
                          : "text-cyan-500"
                      }`}
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {services[selectedService].icon}
                    </motion.div>
                    <div className="text-left">
                      <h3 className="text-white font-mono text-2xl tracking-wider">
                        {services[selectedService].title}
                      </h3>
                      <p
                        className={`text-sm font-mono ${
                          selectedService === "dev"
                            ? "text-violet-400"
                            : "text-cyan-400"
                        }`}
                      >
                        {services[selectedService].subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className={`w-3 h-3 rounded-full ${
                        selectedService === "dev"
                          ? "bg-violet-500"
                          : "bg-cyan-500"
                      }`}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-sm font-mono">
                      ONLINE
                    </span>
                  </div>
                </motion.div>

                {/* Service Content */}
                <div className="text-left">
                  <motion.p
                    className="text-gray-300 mb-8 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {services[selectedService].description}
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {services[selectedService].features.map(
                      (feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300"
                          whileHover={{
                            x: 10,
                            borderColor:
                              selectedService === "dev"
                                ? "rgba(147,51,234,0.5)"
                                : "rgba(6,182,212,0.5)",
                          }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full ${
                              selectedService === "dev"
                                ? "bg-violet-500"
                                : "bg-cyan-500"
                            }`}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                          <span className="text-gray-300 font-mono text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      )
                    )}
                  </motion.div>

                  {/* Call to Action */}
                  <motion.div
                    className="flex justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.button
                      onClick={handleEmailClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-12 py-4 font-mono text-sm tracking-wider
                        text-white rounded-lg overflow-hidden group transition-all duration-300 ${
                          selectedService === "dev"
                            ? "bg-gradient-to-r from-violet-600 to-purple-600"
                            : "bg-gradient-to-r from-cyan-600 to-blue-600"
                        } ${showEmail ? "px-6" : "px-12"}`}
                    >
                      <AnimatePresence mode="wait">
                        {!showEmail ? (
                          <motion.span
                            key="send-email"
                            className="relative z-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            Send Email
                          </motion.span>
                        ) : (
                          <motion.span
                            key="email-display"
                            className="relative z-10 flex items-center space-x-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <span>rayner.soto.dev@gmail.com</span>
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </motion.svg>
                          </motion.span>
                        )}
                      </AnimatePresence>

                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.button>
                  </motion.div>

                  {/* Optional: Add a small tooltip */}
                  <AnimatePresence>
                    {showEmail && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex justify-center mt-2"
                      >
                        <span className="text-xs text-gray-400 font-mono">
                          Email copied to clipboard!
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Animated grid overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(${
                      selectedService === "dev"
                        ? "rgba(147,51,234,0.2)"
                        : "rgba(6,182,212,0.2)"
                    } 1px, transparent 1px),
                                    linear-gradient(90deg, ${
                                      selectedService === "dev"
                                        ? "rgba(147,51,234,0.2)"
                                        : "rgba(6,182,212,0.2)"
                                    } 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                  animate={{
                    backgroundPosition: ["0px 0px", "20px 20px"],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
