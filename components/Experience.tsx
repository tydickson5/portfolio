import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, FileText } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 bg-tan-200/40 border-t border-tan-300 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5 text-forest-600" />
              <span>Career &amp; Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-forest-950 tracking-tight">
              Work Experience
            </h2>
            <p className="text-forest-700 text-base mt-2 max-w-xl">
              Track record of designing, building, and deploying production-grade mobile applications,
              backend architectures, and data infrastructure.
            </p>
          </div>

          {/* Quick resume link or contact CTA */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tan-50 text-forest-900 border border-tan-300 hover:border-forest-600 text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
            >
              <FileText className="w-4 h-4 text-forest-700" />
              <span>Request Full Resume</span>
            </a>
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-tan-50 border border-tan-300 hover:border-forest-600/50 shadow-subtle transition-all duration-300"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-tan-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-forest-950">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-forest-700 mt-1">
                    <span className="text-forest-950">{exp.company}</span>
                    <span className="text-tan-400">•</span>
                    <span className="flex items-center gap-1 font-normal text-forest-700">
                      <MapPin className="w-3.5 h-3.5 text-forest-600" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto mt-2 sm:mt-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-forest-100 text-forest-800 border border-forest-200">
                    <Calendar className="w-3 h-3 text-forest-600" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-tan-200/90 text-forest-700 border border-tan-300/80 uppercase tracking-wider">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-forest-800/95 leading-relaxed my-4">
                {exp.description}
              </p>

              {/* Highlights Bullet points */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-800">
                      <CheckCircle2 className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-tan-200">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-700 mr-2">
                  Skills:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-tan-100 text-forest-900 border border-tan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

