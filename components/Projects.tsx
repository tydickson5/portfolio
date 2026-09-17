"use client";

import { FolderGit2 } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-forest-600" />
            <span>Projects Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-forest-950 tracking-tight">
            Featured Systems &amp; Applications
          </h2>
          <p className="text-forest-700 text-base mt-2 max-w-2xl">
            In-depth breakdown of native mobile platforms, distributed backends, data extraction
            pipelines, and interactive web tools.
          </p>
        </div>

        {/* Full-width Project Cards Stack */}
        <div className="flex flex-col gap-10 w-full">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
