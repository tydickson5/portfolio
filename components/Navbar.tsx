"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-tan-100 border-b border-tan-300 py-3.5 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-forest-900 font-semibold tracking-tight transition-colors"
        >
          <span className="w-9 h-9 rounded-lg bg-forest-900 text-tan-100 flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:bg-forest-800 transition-colors">
            TD
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-none tracking-tight text-forest-950">
              Ty Dickson
            </span>
            <span className="text-[11px] font-medium text-forest-700 leading-tight tracking-wider uppercase mt-0.5">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-forest-800">
          <a
            href="#projects"
            className="hover:text-forest-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-700 hover:after:w-full after:transition-all"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-forest-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-700 hover:after:w-full after:transition-all"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-forest-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-700 hover:after:w-full after:transition-all"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-forest-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-forest-700 hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Contact CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-tan-100 bg-forest-900 hover:bg-forest-800 rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-forest-900 hover:bg-tan-200 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-tan-100 border-b border-tan-300 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 text-base font-medium text-forest-900">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-tan-200 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-tan-200 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-tan-200 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-tan-200 transition-colors"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-tan-200">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-tan-100 bg-forest-900 hover:bg-forest-800 rounded-lg shadow-sm"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

