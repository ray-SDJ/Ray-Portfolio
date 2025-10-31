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
          className="relative bg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-border group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-primary/5"
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
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-1/3"
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
            <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{description}</p>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsExpanded(true)}
              className="w-full py-2 text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition duration-300"
            >
              View More
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            className="relative bg-card rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.8, rotateY: 90 }}
            transition={{ type: "spring", damping: 20 }}
          >
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
              <button
                onClick={() => setIsExpanded(false)}
                aria-label="Close project details"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-full text-foreground hover:bg-primary/20 transition duration-300 border border-border"
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
              </button>
            </div>

            <div className="relative p-8 z-10">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {title}
              </h2>

              <div className="bg-muted/50 p-4 rounded-lg border border-border mb-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {fullDescription || description}
                </p>
              </div>

              {/* Tags  */}
              <div className="mb-8 flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition"
                  >
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
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
