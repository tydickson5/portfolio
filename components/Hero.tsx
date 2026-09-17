import { ArrowDown, ArrowUpRight, Github, Mail, MapPin, GraduationCap, BookOpen } from "lucide-react";

export default function Hero() {
  const coursework = [
    "Software Engineering",
    "Data Structures & Algorithms 1 & 2",
    "Software Development Essentials",
    "Computer Systems & Organization 1 & 2",
    "Discrete Mathematics & Theory 1 & 2",
    "Mobile Application Development",
  ];

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-tan-300">
      {/* Organic gradient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-forest-200/25 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Introduction & Narrative */}
          <div className="lg:col-span-7">
            {/* Main Title & Role */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-forest-950 leading-tight font-serif">
                Ty Dickson
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-forest-700 mt-2">
                Software Engineer
              </p>
            </div>

            {/* About Me Story & Narrative */}
            <div className="space-y-4 text-forest-800/95 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Hi, I&apos;m <span className="font-semibold text-forest-950">Ty Dickson</span>. I&apos;m a 3rd-year
                Computer Science major with a General Business minor at the <span className="font-semibold text-forest-950">University of Virginia</span>.
                I work mostly with IOS native (although I am learnign Kotlin right now) and web applications.
              </p>
              <p className="text-sm sm:text-base text-forest-800">
                I have experience with IOS, various JS Frameworks, python with Django and Flask, and Java. I have also done class 
                projects using the SCRUM methodology and built apps under pressure in hackathons. Most of my projects have gone
                through some form of beta testing, so I know how to take feedback and improve upon what I have.

              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
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

          {/* Right Column: Education & Coursework Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-tan-50 border border-tan-300 shadow-card">
              {/* Card Header */}
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-tan-200">
                <div className="p-2 rounded-xl bg-forest-100 text-forest-800">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    Education &amp; Background
                  </h2>
                  <p className="text-base font-bold font-serif text-forest-950">
                    University of Virginia (UVA)
                  </p>
                </div>
              </div>

              {/* Major & Minor Details */}
              <div className="space-y-1.5 mb-5 text-sm">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-600">Standing</span>
                  <span className="font-semibold text-forest-950">3rd Year Undergraduate</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-600">Major</span>
                  <span className="font-semibold text-forest-950">Computer Science</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-600">Minor</span>
                  <span className="font-semibold text-forest-950">General Business</span>
                </div>
              </div>

              {/* Coursework Section */}
              <div className="pt-4 border-t border-tan-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-forest-700 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-forest-600" />
                  <span>Relevant Coursework</span>
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-tan-100/90 text-forest-900 border border-tan-300 hover:border-forest-400 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location Footer Strip */}
              <div className="mt-5 pt-4 border-t border-tan-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-forest-800">
                  <MapPin className="w-3.5 h-3.5 text-forest-600" />
                  <span className="font-semibold">Charlottesville, VA</span>
                  <span className="text-forest-400">•</span>
                  <span className="text-forest-600">UVA Grounds</span>
                </div>
                <span className="font-mono text-[11px] font-semibold text-forest-700 bg-forest-100 px-2 py-0.5 rounded">
                  Class of 2028
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
