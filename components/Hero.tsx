import { ArrowDown, ArrowUpRight, Github, Mail, Phone, Smartphone, Layers, Terminal, CheckCircle } from "lucide-react";

export default function Hero() {
  const principles = [
    {
      title: "Pragmatic Architecture",
      desc: "Clean database models, well-bounded services, and type-safe interfaces built to scale predictably.",
    },
    {
      title: "Native Fluidity & Polish",
      desc: "Deep appreciation for platform idioms—optimizing SwiftUI render cycles, native gestures, and responsive web UX.",
    },
    {
      title: "Data Integrity & Resilience",
      desc: "Designing fault tolerance into asynchronous jobs, web scraping pipelines, and high-frequency real-time state distribution.",
    },
  ];

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-tan-300">
      {/* Organic gradient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-forest-200/25 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Introduction & Narrative */}
          <div className="lg:col-span-7">
            {/* Title & Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-semibold tracking-wide mb-5">
              <span>Ty Dickson • Software Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest-950 leading-[1.15] mb-6 font-serif">
              Building intuitive{" "}
              <span className="italic font-normal text-forest-700 underline decoration-forest-400/50 decoration-2 underline-offset-4">
                native apps
              </span>
              , robust backends, and elegant web platforms.
            </h1>

            {/* About Me Story & Narrative */}
            <div className="space-y-4 text-forest-800/95 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Hi, I&apos;m <span className="font-semibold text-forest-950">Ty Dickson</span>. I&apos;m a software engineer
                passionate about turning complex systems into elegant, high-impact digital experiences. My work spans
                native iOS applications with real-time location telemetry, scalable Node.js/PostgreSQL backends,
                and modern Next.js web applications.
              </p>
              <p className="text-sm sm:text-base text-forest-800">
                Whether architecting multi-vehicle convoy synchronization in <span className="font-semibold text-forest-950">Caravyn</span>,
                building social culinary platforms in <span className="font-semibold text-forest-950">Chef n Share</span>, or
                evaluating probabilistic models and data extraction pipelines, I focus on shipping software that is both technically
                rigorous and delightful to use.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-forest-900 text-tan-50 font-semibold text-sm hover:bg-forest-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-tan-200 text-forest-900 border border-tan-300 font-semibold text-sm hover:bg-tan-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="w-4 h-4 text-forest-700" />
                <span>Contact Info</span>
              </a>

              <a
                href="https://github.com/tydickson5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-tan-50 text-forest-800 hover:text-forest-950 border border-tan-300 font-medium text-sm transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Focus Areas */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-tan-50 border border-tan-300 shadow-card">
              <h2 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-5 flex items-center gap-2">
                <span>Core Engineering Philosophy</span>
              </h2>

              <div className="space-y-4">
                {principles.map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-forest-950 mb-0.5">
                        {principle.title}
                      </h3>
                      <p className="text-xs text-forest-700 leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Spec Strip */}
              <div className="mt-6 pt-5 border-t border-tan-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block font-semibold uppercase text-forest-600">Location</span>
                  <span className="font-bold text-forest-950 text-sm">Charlottesville / Remote</span>
                </div>
                <div>
                  <span className="block font-semibold uppercase text-forest-600">Specialization</span>
                  <span className="font-bold text-forest-950 text-sm">Full-Stack &amp; iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
