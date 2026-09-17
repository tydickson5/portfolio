"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Smartphone, Globe, Server, Terminal } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case "iOS":
        return <Smartphone className="w-3.5 h-3.5" />;
      case "Web":
        return <Globe className="w-3.5 h-3.5" />;
      case "Backend":
        return <Server className="w-3.5 h-3.5" />;
      case "CLI":
        return <Terminal className="w-3.5 h-3.5" />;
      default:
        return <Cpu className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-tan-50 rounded-2xl border border-tan-300 shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-forest-900 text-tan-100 px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-forest-800 text-forest-200 border border-forest-700">
                {project.category}
              </span>
              {project.platforms.map((plat) => (
                <span
                  key={plat}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-forest-800/80 text-forest-100"
                >
                  {renderPlatformIcon(plat)}
                  <span>{plat}</span>
                </span>
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-tan-50">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-tan-200 hover:text-tan-50 hover:bg-forest-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-1.5">
              Overview &amp; Purpose
            </h4>
            <p className="text-base text-forest-900 leading-relaxed">
              {project.description}
            </p>
            {project.metrics && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-100/70 border border-forest-200 text-xs font-semibold text-forest-800">
                <CheckCircle2 className="w-4 h-4 text-forest-600" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-2.5">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-forest-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture breakdown if present */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture Breakdown</span>
              </h4>
              <div className="space-y-3">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-tan-100/80 border border-tan-300 text-sm"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-forest-950">{arch.component}</span>
                      <span className="text-xs font-mono text-forest-700 bg-forest-100/60 px-2 py-0.5 rounded">
                        {arch.tech}
                      </span>
                    </div>
                    <p className="text-xs text-forest-800 leading-normal">{arch.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-2">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-forest-100/80 text-forest-900 border border-forest-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-tan-200/60 border-t border-tan-300 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-forest-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.links.live && project.links.live !== "#" && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-950 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-forest-900 text-tan-50 hover:bg-forest-800 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

