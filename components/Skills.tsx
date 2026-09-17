import { Wrench, Terminal, Cpu, Database, Smartphone, Cloud } from "lucide-react";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-forest-700" />;
      case 1:
        return <Cpu className="w-4 h-4 text-forest-700" />;
      case 2:
        return <Smartphone className="w-4 h-4 text-forest-700" />;
      case 3:
        return <Database className="w-4 h-4 text-forest-700" />;
      case 4:
        return <Cloud className="w-4 h-4 text-forest-700" />;
      default:
        return <Wrench className="w-4 h-4 text-forest-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-forest-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-forest-950 tracking-tight">
            Tools, Technologies &amp; Stack
          </h2>
          <p className="text-forest-700 text-base mt-2">
            A comprehensive overview of languages, frameworks, and infrastructure tools I use to
            bring products from design to production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-tan-50/90 border border-tan-300 hover:border-forest-600/50 shadow-subtle transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-tan-200">
                <div className="p-1.5 rounded-lg bg-forest-100">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-forest-950">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-tan-100/90 border border-tan-300 hover:border-forest-400 transition-colors"
                  >
                    <span className="text-xs font-medium text-forest-900">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-forest-600 font-semibold bg-forest-100/70 px-1.5 py-0.5 rounded">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

