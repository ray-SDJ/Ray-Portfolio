"use client";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ProjectCarousel from "./components/projectCarousel";
import Services from "./components/services";
import { allProjects } from './components/projectsData';

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 }); // Default values
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update window size
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Optional: Add resize listener
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants
  const glitchText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        repeat: 5,
        repeatType: "reverse" as const,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [selectedProjectType, setSelectedProjectType] = useState<
    "engineering" | "security"
  >("security");

  return (
    <div className="bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(147,51,234,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(147,51,234,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Cyberpunk grid effect */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 bg-black/50 backdrop-blur-xl py-4 shadow-[0_0_30px_rgba(147,51,234,0.5)] sticky top-0 border-b border-violet-500/30"
      >
        <div className="mx-auto px-4 justify-between items-center container flex">
          <motion.div
            className="text-violet-400 text-2xl font-bold font-mono tracking-widest"
            whileHover={{ scale: 1.05 }}
            animate={{
              textShadow: [
                "0 0 10px rgba(147,51,234,0.8)",
                "0 0 20px rgba(147,51,234,1)",
                "0 0 10px rgba(147,51,234,0.8)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &lt;RAYNER.SDJ/&gt;
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cyan-400 font-mono text-sm tracking-wider relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-violet-600/20 blur-md"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                />
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      <section
        className="relative py-20 md:py-32 min-h-screen flex items-center"
        id="home"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-cyan-900/10" />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative mx-auto px-4 md:flex-row items-center container flex flex-col z-10"
        >
          <motion.div variants={fadeInUp} className="md:w-1/2 md:mb-0 mb-12">
            <motion.div
              animate={glitchText.visible}
              initial={glitchText.hidden}
              className="mb-6"
            >
              <p className="text-4xl md:text-6xl font-bold tracking-tight font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  HELLO, I'M
                </span>
              </p>
              <motion.p
                className="text-5xl md:text-7xl font-bold mt-2 font-mono"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(147,51,234,0.8), 0 0 40px rgba(147,51,234,0.5)",
                    "0 0 30px rgba(6,182,212,0.8), 0 0 60px rgba(6,182,212,0.5)",
                    "0 0 20px rgba(147,51,234,0.8), 0 0 40px rgba(147,51,234,0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500">
                  RAYNER SOTO
                </span>
              </motion.p>
            </motion.div>

            <motion.p
              className="text-2xl md:text-3xl mb-6 text-cyan-400 tracking-wider font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              FULL-STACK ENGINEER // PENETRATION TESTER
            </motion.p>

            <p className="text-lg mb-8 text-gray-300 max-w-lg backdrop-blur-sm bg-black/30 p-4 rounded-lg border border-violet-500/20">
              OSCP Candidate and Full Stack Engineer specializing in application
              security, vulnerability assessment, and ethical hacking.
              Passionate about making website dreams come true while combining
              development expertise with offensive security to strengthen
              organizational defenses.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="https://www.upwork.com/freelancers/~01e5a9d4ae6c5c438d?mp_source=share"
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg shadow-lg
                  font-mono tracking-wider relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">HIRE ME</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="https://github.com/ray-SDJ"
                className="px-8 py-3 text-violet-400 rounded-lg shadow-lg border-2
                  border-violet-500 hover:bg-violet-900/30 transition duration-300 font-mono tracking-wider
                  relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">VIEW WORK</span>
                <motion.div
                  className="absolute inset-0 bg-violet-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:w-1/2 relative">
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full blur-3xl opacity-50" />
              <motion.img
                alt="Professional headshot of Rayner Soto"
                src="/profile-pic.jpg"
                className="relative object-cover border-4 border-transparent rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto shadow-2xl"
                style={{
                  borderImage: "linear-gradient(45deg, #8b5cf6, #06b6d4) 1",
                }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(45deg, transparent, rgba(147,51,234,0.3), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-b from-black via-violet-900/10 to-black"
        id="about"
      >
        <div className="mx-auto px-4 container relative z-10">
          <motion.p
            className="text-3xl md:text-4xl font-bold mb-16 text-center font-mono tracking-wider"
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
              &lt;ABOUT ME/&gt;
            </span>
          </motion.p>

          <div className="md:flex-row items-center flex flex-col gap-12">
            <motion.div
              className="md:w-1/2 md:mb-0 mb-10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg blur-xl opacity-30" />
                <img
                  alt="Professional portrait of Rayner Soto"
                  src="/profile-pic.jpg"
                  className="relative max-w-md rounded-lg w-full mx-auto shadow-2xl border-2 border-violet-500/30"
                />
              </div>
            </motion.div>

            <div className="md:w-1/2 md:pl-12">
              <motion.p
                className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-mono"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                WHO I AM
              </motion.p>

              <div className="space-y-4">
                <motion.div
                  className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-violet-500/30"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    Full Stack Developer // Penetration Tester and Security
                    Engineer with strong foundations in both software
                    development and cybersecurity, actively pursuing the
                    Offensive Security Certified Professional (OSCP)
                    certification. Recently earned CompTIA Security+ and Google
                    Cybersecurity certifications, along with Codecademy
                    certificates in Full-Stack Development and Computer Science.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/30"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about offensive security, vulnerability
                    detection, and ethical hacking, with hands-on experience in
                    penetration testing tools, vulnerability scanning, and
                    secure authentication. Equally passionate about full stack
                    development, creating secure web applications that bridge
                    the gap between robust functionality and cybersecurity best
                    practices.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 grid grid-cols-2 gap-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[
                  { label: "NAME", value: "Rayner Soto" },
                  { label: "EMAIL", value: "raynersoto0908@outlook.com" },
                  { label: "LOCATION", value: "Little Ferry, NJ" },
                  { label: "PHONE", value: "201-687-3237" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="bg-gradient-to-r from-violet-900/20 to-cyan-900/20 p-3 rounded-lg border border-violet-500/30"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(147,51,234,0.6)",
                    }}
                  >
                    <p className="text-cyan-400 font-bold mb-1 font-mono text-sm">
                      {item.label}:
                    </p>
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-b from-black via-cyan-900/10 to-black"
        id="projects"
      >
        <div className="mx-auto px-4 container relative z-10">
          <motion.p
            className="text-3xl md:text-4xl font-bold mb-8 text-center font-mono tracking-wider"
            animate={{
              textShadow: [
                "0 0 20px rgba(6,182,212,0.8)",
                "0 0 40px rgba(147,51,234,0.8)",
                "0 0 20px rgba(6,182,212,0.8)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              &lt;PROJECTS/&gt;
            </span>
          </motion.p>

          {/* Project Type Toggle */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex bg-black/50 backdrop-blur-sm p-1 rounded-full border border-violet-500/30">
              <motion.button
                onClick={() => setSelectedProjectType("security")}
                className={`relative px-8 py-3 rounded-full font-mono text-sm tracking-wider transition-all duration-300 ${
                  selectedProjectType === "security"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {selectedProjectType === "security" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layoutId="projectToggle"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">🛡️ PENTESTING</span>
              </motion.button>

              <motion.button
                onClick={() => setSelectedProjectType("engineering")}
                className={`relative px-8 py-3 rounded-full font-mono text-sm tracking-wider transition-all duration-300 ${
                  selectedProjectType === "engineering"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {selectedProjectType === "engineering" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      layoutId="projectToggle"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">
                  &lt;/&gt; Full-Stack Enigneering
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Project Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCarousel projects={allProjects[selectedProjectType]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-b from-black via-violet-900/10 to-black"
        id="skills"
      >
        <div className="mx-auto px-4 container relative z-10">
          <motion.p
            className="text-3xl md:text-4xl font-bold mb-16 text-center font-mono tracking-wider"
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
              &lt;TECHNICAL PROFICIENCIES/&gt;
            </span>
          </motion.p>

          <div className="md:grid-cols-2 grid grid-cols-1 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl font-bold mb-8 text-violet-400 font-mono">
                // DEVELOPMENT
              </p>
              <div className="space-y-6">
                {[
                  { name: "React/Next.js", level: 95 },
                  { name: "JavaScript/TypeScript", level: 90 },
                  { name: "Python-Flask-Django", level: 100 },
                  { name: "Java", level: 60 },
                  { name: "SQL/PostgreSQL", level: 100 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="justify-between mb-2 flex">
                      <span className="text-gray-300 font-medium font-mono">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-2xl font-bold mb-8 mt-12 text-cyan-400 font-mono">
                // SECURITY & TESTING
              </p>
              <div className="space-y-6">
                {[
                  { name: "Penetration Testing & Kali Linux", level: 95 },
                  { name: "Security Architecture", level: 90 },
                  { name: "Risk Management", level: 90 },
                  { name: "Security Compliance", level: 85 },
                  { name: "SIEM/IDS/IPS", level: 85 },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="justify-between mb-2 flex">
                      <span className="text-gray-300 font-medium font-mono">
                        {skill.name}
                      </span>
                      <span className="text-violet-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-violet-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-2xl font-bold mb-8 text-cyan-400 font-mono">
                // TOOLS & TECHNOLOGIES
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Kali Linux",
                  "Active Directory",
                  "Burp Suite",
                  "Metasploit",
                  "Wireshark",
                  "Nmap",
                  "OWASP ZAP",
                  "Git/GitHub",
                  "Vulnerability Scanning",
                  "Web Application Security",
                ].map((tool, i) => (
                  <motion.div
                    key={tool}
                    className="relative bg-gradient-to-br from-violet-900/20 to-cyan-900/20 rounded-lg text-center p-6 border border-violet-500/30 backdrop-blur-sm overflow-hidden group"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(147,51,234,0.6)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="relative text-lg font-bold text-white font-mono z-10">
                      {tool}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="relative z-10">
        <Services />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 bg-gradient-to-b from-black via-cyan-900/10 to-violet-900/10"
        id="contact"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto px-4 container relative z-10"
        >
          <motion.p
            className="text-3xl md:text-4xl font-bold mb-16 text-center font-mono tracking-wider"
            animate={{
              textShadow: [
                "0 0 20px rgba(6,182,212,0.8)",
                "0 0 40px rgba(147,51,234,0.8)",
                "0 0 20px rgba(6,182,212,0.8)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              &lt;CONTACT/&gt;
            </span>
          </motion.p>

          <div className="md:flex-row flex flex-col gap-12 max-w-4xl mx-auto">
            <motion.div
              className="md:w-1/2 space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  title: "PHONE",
                  value: "(201) 687-3237",
                  color: "from-violet-600 to-purple-600",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  title: "EMAIL",
                  value: "Raynersoto0908@outlook.com",
                  color: "from-cyan-600 to-blue-600",
                },
                {
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </>
                  ),
                  title: "LOCATION",
                  value: "Little Ferry, NJ",
                  color: "from-purple-600 to-violet-600",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="items-center flex space-x-4 group"
                  whileHover={{ x: 10 }}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${item.color} rounded-xl p-3`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {item.icon}
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-1 font-mono">
                      {item.title}
                    </p>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="mt-10"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-4 font-mono">
                  // FOLLOW ME
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      href: "https://github.com/ray-SDJ",
                      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    },
                    {
                      href: "www.linkedin.com/in/rayner-soto-de-jesus-baa6b6215",
                      icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full hover:from-violet-700 hover:to-purple-700 transition-all
                        duration-300 p-3 group overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative h-6 w-6 text-white z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-violet-900/20 to-cyan-900/20 p-8 rounded-xl backdrop-blur-sm border border-violet-500/30">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-6 font-mono">
                  // SEND MESSAGE
                </p>
                <form className="space-y-4">
                  <motion.input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-mono"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 font-mono"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.textarea
                    placeholder="YOUR MESSAGE"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 font-mono resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg font-mono tracking-wider relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">SEND MESSAGE</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-black border-t border-violet-500/30 py-8"
      >
        <div className="mx-auto px-4 container relative z-10">
          <div className="text-center">
            <motion.div
              className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-2xl font-bold mb-4 font-mono"
              animate={{
                textShadow: [
                  "0 0 10px rgba(147,51,234,0.8)",
                  "0 0 20px rgba(6,182,212,0.8)",
                  "0 0 10px rgba(147,51,234,0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &lt;RAYNER.SDJ/&gt;
            </motion.div>
            <p className="text-gray-400 mb-6 font-mono">
              LIVING, LEARNING, & LEVELING UP ONE DAY AT A TIME.
            </p>
            <p className="text-gray-500 font-mono">
              © {new Date().getFullYear()} RAYNER SOTO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
