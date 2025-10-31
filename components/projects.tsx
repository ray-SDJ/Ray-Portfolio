"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCarousel from "@/app/components/projectCarousel";
import { allProjects } from "@/app/components/projectsData";

export function Projects() {
  const [selectedProjectType, setSelectedProjectType] = useState<
    "engineering" | "security"
  >("security");

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Projects
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        {/* Project Type Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted p-1 rounded-full border border-border">
            <button
              onClick={() => setSelectedProjectType("engineering")}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedProjectType === "engineering"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              &lt;/&gt; Full-Stack Engineering
            </button>

            <button
              onClick={() => setSelectedProjectType("security")}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedProjectType === "security"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              🛡️ Pentesting
            </button>
          </div>
        </div>

        {/* Project Display */}
        <div key={selectedProjectType}>
          <ProjectCarousel projects={allProjects[selectedProjectType]} />
        </div>
      </div>
    </section>
  );
}
