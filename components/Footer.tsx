import { ArrowUp, Github } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-forest-950 text-tan-200 py-12 border-t border-forest-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-forest-800 text-tan-100 flex items-center justify-center font-serif text-sm font-bold">
              TD
            </span>
            <div>
              <p className="text-sm font-bold text-tan-100">Ty Dickson</p>
              <p className="text-xs text-forest-300">
                Crafted with Next.js &amp; Tailwind CSS • Ready for Vercel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-forest-300">
            <a
              href="https://github.com/tydickson5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tan-100 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#projects"
              className="hover:text-tan-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-tan-100 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-tan-100 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-tan-100 transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-forest-900 hover:bg-forest-800 text-tan-100 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-forest-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-forest-400">
          <p>© {currentYear} Ty Dickson. All rights reserved.</p>
          <p className="italic font-serif">Designed in Dark Forest Green &amp; Warm Tan.</p>
        </div>
      </div>
    </footer>
  );
}

