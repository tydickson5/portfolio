import { ArrowUpRight, Github, Smartphone, Globe, Server, Terminal, Cpu, CheckCircle2, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
    <article className="w-full rounded-2xl bg-tan-50 border border-tan-300 hover:border-forest-600/60 p-6 sm:p-8 lg:p-10 shadow-subtle hover:shadow-card transition-all duration-300">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-tan-200">
        <div className="flex flex-wrap items-center gap-2">
          {project.platforms.map((plat) => (
            <span
              key={plat}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-forest-100 text-forest-800 border border-forest-200"
            >
              {renderPlatformIcon(plat)}
              <span>{plat}</span>
            </span>
          ))}

          <span className="text-xs font-semibold text-forest-700 uppercase tracking-wider bg-tan-200/90 px-2.5 py-1 rounded-md border border-tan-300/80">
            {project.category}
          </span>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2.5">
          {project.links.app && project.links.app !== "#" && (
            <a
              href={project.links.app}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-tan-50 bg-forest-800 hover:bg-forest-700 transition-colors shadow-sm"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Open App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.links.githubApp && (
            <a
              href={project.links.githubApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-forest-900 bg-tan-100 hover:bg-tan-200 border border-tan-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>App Repo</span>
            </a>
          )}
          {project.links.github && !project.links.githubApp && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-forest-900 bg-tan-100 hover:bg-tan-200 border border-tan-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{project.links.githubBackend ? "App Repo" : "Source Code"}</span>
            </a>
          )}
          {project.links.githubBackend && (
            <a
              href={project.links.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-forest-900 bg-tan-100 hover:bg-tan-200 border border-tan-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Backend / Web Repo</span>
            </a>
          )}
          {project.links.live && project.links.live !== "#" && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-tan-50 bg-forest-900 hover:bg-forest-800 transition-colors"
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Title & Tagline with optional Project App Icon */}
      <div className="mt-6 mb-5 flex items-start gap-4 sm:gap-5">
        {project.image && (
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl overflow-hidden border border-tan-300 bg-white shadow-subtle p-1">
            <img
              src={project.image}
              alt={`${project.title} logo`}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-forest-950 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-forest-700 mt-1.5">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Main Narrative Description */}
      <div className="space-y-4 mb-6 text-forest-800/95 text-base leading-relaxed max-w-5xl">
        <p>{project.description}</p>
      </div>

      {/* Metrics / Special highlight if present */}
      {project.metrics && (
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-forest-100/80 border border-forest-200 text-xs sm:text-sm font-semibold text-forest-900">
          <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
          <span>{project.metrics}</span>
        </div>
      )}

      {/* Architecture Breakdown (Multi-column or stacked inside the full-width card) */}
      {project.architecture && project.architecture.length > 0 && (
        <div className="mt-6 pt-6 border-t border-tan-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-forest-600" />
            <span>Architecture &amp; Subsystems</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architecture.map((arch, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-tan-100/90 border border-tan-300 flex flex-col justify-between"
              >
                <div>
                  <h5 className="font-bold text-sm text-forest-950 mb-1">
                    {arch.component}
                  </h5>
                  <p className="text-xs text-forest-800 leading-relaxed mb-3">
                    {arch.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-tan-200">
                  <span className="text-[11px] font-mono font-medium text-forest-700 bg-forest-100/70 px-2 py-0.5 rounded inline-block">
                    {arch.tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-6 pt-6 border-t border-tan-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-3">
            Key Engineering Highlights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-800">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack Footer */}
      <div className="mt-6 pt-6 border-t border-tan-200 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-forest-700 mr-2">
          Technologies:
        </span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-tan-200 text-forest-900 border border-tan-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
