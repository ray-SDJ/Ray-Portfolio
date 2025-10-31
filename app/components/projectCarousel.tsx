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
      <div className="absolute -top-16 right-4 flex items-center space-x-2 bg-muted/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
        <span className="text-muted-foreground text-sm">PROJECT</span>
        <span className="text-primary text-lg font-bold">
          {currentIndex + 1}-
          {Math.min(currentIndex + projectsPerPage, projects.length)}
        </span>
        <span className="text-muted-foreground text-sm">OF</span>
        <span className="text-primary text-lg font-bold">
          {projects.length}
        </span>
      </div>

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

      <button
        onClick={prevSlide}
        aria-label="Previous projects"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-card backdrop-blur-sm p-4 rounded-full text-foreground border border-border hover:border-primary transition-all duration-300"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next projects"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-card backdrop-blur-sm p-4 rounded-full text-foreground border border-border hover:border-primary transition-all duration-300"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="flex justify-center items-center mt-12 gap-3">
        <div className="relative w-48 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full bg-primary rounded-full"
            animate={{
              width: `${
                ((Math.floor(currentIndex / projectsPerPage) + 1) /
                  Math.ceil(projects.length / projectsPerPage)) *
                100
              }%`,
            }}
            transition={{ duration: 0.5, type: "spring" }}
          />
        </div>

        <div className="flex gap-2 ml-4">
          {Array.from(
            { length: Math.ceil(projects.length / projectsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * projectsPerPage)}
                aria-label={`Go to page ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / projectsPerPage) === i
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
