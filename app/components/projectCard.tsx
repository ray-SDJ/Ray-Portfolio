import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  images: {
    src: string;
    alt: string;
  }[];
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({
  title,
  description,
  fullDescription,
  images,
  tags,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {!isExpanded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-violet-500/30 backdrop-blur-sm group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{
            borderColor: "rgba(147,51,234,0.6)",
            boxShadow: "0 0 30px rgba(147,51,234,0.4)",
          }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Image container with overlay effect */}
          <div className="relative overflow-hidden">
            <motion.img
              alt={images[0].alt}
              src={images[0].src}
              className="object-cover w-full h-56"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Scan line effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent h-1/3"
              animate={{
                y: isHovered ? ["0%", "300%"] : "0%",
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative p-6 z-10">
            <motion.p
              className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-mono"
              animate={{
                textShadow: isHovered
                  ? "0 0 20px rgba(147,51,234,0.8)"
                  : "none",
              }}
            >
              {title}
            </motion.p>
            <p className="text-gray-400 mb-4 font-mono text-sm">
              {description}
            </p>

            {/* Tags with futuristic style */}
            <div className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-violet-900/40 to-cyan-900/40 text-cyan-300 rounded-full text-sm font-mono border border-cyan-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "rgba(6,182,212,0.6)",
                  }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>

            <motion.button
              onClick={() => setIsExpanded(true)}
              className="relative w-full py-2 text-violet-400 border border-violet-400/50 rounded-lg hover:bg-violet-400/10 transition duration-300 font-mono tracking-wider overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">VIEW MORE</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-violet-500/50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/50" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-violet-500/50"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.8, rotateY: 90 }}
            transition={{ type: "spring", damping: 20 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(147,51,234,0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(6,182,212,0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(147,51,234,0.2) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative">
              <motion.img
                alt={images[0].alt}
                src={images[0].src}
                className="object-cover w-full h-96"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Close button */}
              <motion.button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm p-3 rounded-full text-white hover:bg-violet-600/80 transition duration-300 border border-violet-500/50 group"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Project status indicator */}
              <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/50">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 text-sm font-mono">
                  ACTIVE PROJECT
                </span>
              </div>
            </div>

            <div className="relative p-8 z-10">
              <motion.h2
                className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-mono"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h2>

              <motion.div
                className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-violet-500/30 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-300 text-lg leading-relaxed font-mono">
                  {fullDescription || description}
                </p>
              </motion.div>

              {/* Enhanced tags  */}
              <motion.div
                className="mb-8 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-violet-900/40 to-cyan-900/40 text-cyan-300 rounded-full text-sm font-mono border border-cyan-500/50"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(6,182,212,0.5)",
                    }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                className="flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-mono tracking-wider overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      VIEW CODE
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-2 px-6 py-3 text-cyan-400 border-2 border-cyan-400/50 rounded-lg font-mono tracking-wider overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(6,182,212,0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      LIVE DEMO
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-violet-600/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
