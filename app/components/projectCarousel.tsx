import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./projectCard";
import { Project } from "./projectsData";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPerPage >= projects.length
        ? 0
        : prevIndex + projectsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - projectsPerPage < 0
        ? Math.floor((projects.length - 1) / projectsPerPage) * projectsPerPage
        : prevIndex - projectsPerPage
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <div className="relative w-full">
      <motion.div
        className="absolute -top-16 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-500/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-violet-400 font-mono text-sm">PROJECT</span>
        <span className="text-cyan-400 font-mono text-lg font-bold">
          {currentIndex + 1}-
          {Math.min(currentIndex + projectsPerPage, projects.length)}
        </span>
        <span className="text-gray-500 font-mono text-sm">OF</span>
        <span className="text-violet-400 font-mono text-lg font-bold">
          {projects.length}
        </span>
      </motion.div>

      <div className="overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  fullDescription={project.fullDescription}
                  images={project.images}
                  tags={project.tags}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-full text-white border border-violet-500/50 group-hover:border-violet-500 transition-all duration-300">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-black/80 backdrop-blur-sm p-4 rounded-full text-white border border-cyan-500/50 group-hover:border-cyan-500 transition-all duration-300">
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </motion.button>

      <motion.div
        className="flex justify-center items-center mt-12 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="relative w-48 h-2 bg-gray-800/50 rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full"
            animate={{
              width: `${
                ((Math.floor(currentIndex / projectsPerPage) + 1) /
                  Math.ceil(projects.length / projectsPerPage)) *
                100
              }%`,
            }}
            transition={{ duration: 0.5, type: "spring" }}
          />

          <motion.div
            className="absolute h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="flex gap-2 ml-4">
          {Array.from(
            { length: Math.ceil(projects.length / projectsPerPage) },
            (_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i * projectsPerPage)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / projectsPerPage) === i
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500"
                    : "bg-gray-600"
                }`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              >
                {Math.floor(currentIndex / projectsPerPage) === i && (
                  <motion.div
                    className="absolute inset-0 bg-violet-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
