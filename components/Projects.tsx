"use client";

import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const CATEGORIES = ["All", "Full-Stack", "Mobile", "Web", "Data & Tools"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-tan-200/80 rounded-xl border border-tan-300">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === cat
                      ? "bg-forest-900 text-tan-100 shadow-sm"
                      : "text-forest-800 hover:text-forest-950 hover:bg-tan-300/60"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`ml-1.5 text-[10px] py-0.2 px-1.5 rounded-full ${
                      activeCategory === cat
                        ? "bg-forest-800 text-tan-200"
                        : "bg-tan-300 text-forest-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-width Project Cards Stack */}
        <div className="flex flex-col gap-10 w-full">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
