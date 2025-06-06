import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './projectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - projectsPerPage < 0 ? 
        Math.floor((projects.length - 1) / projectsPerPage) * projectsPerPage : 
        prevIndex - projectsPerPage
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={currentIndex}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              fullDescription={project.fullDescription}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              tags={project.tags}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-violet-600 p-3 rounded-full text-white hover:bg-violet-700 transition duration-300"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-violet-600 p-3 rounded-full text-white hover:bg-violet-700 transition duration-300"
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

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from(
          { length: Math.ceil(projects.length / projectsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * projectsPerPage)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / projectsPerPage) === i
                  ? 'w-8 bg-violet-600'
                  : 'w-2 bg-violet-400'
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}