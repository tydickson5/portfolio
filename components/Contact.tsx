"use client";

import { useState } from "react";
import { Mail, Phone, Copy, Check, Github, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "tydickson255@gmail.com";
  const phoneNumber = "(502) 794-2034";
  const rawPhoneNumber = "5027942034";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("502-794-2034");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-tan-200/50 border-t border-tan-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-forest-600" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-forest-950 tracking-tight mb-3">
            Let&apos;s Connect
          </h2>

          <p className="text-forest-800 text-base leading-relaxed">
            Interested in collaborating on a mobile or web application, or discussing software
            engineering opportunities? Reach out directly via email or phone.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-tan-50 border border-tan-300 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-forest-600">
                    Email Address
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-forest-950 truncate select-all">
                    {emailAddress}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-tan-200">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-tan-200 hover:bg-tan-300 text-forest-900 text-xs font-semibold transition-colors"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-forest-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-forest-900 hover:bg-forest-800 text-tan-100 text-xs font-semibold transition-colors"
              >
                <span>Open Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-tan-50 border border-tan-300 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-forest-600">
                    Direct Phone
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-forest-950 select-all">
                    {phoneNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-tan-200">
              <button
                onClick={handleCopyPhone}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-tan-200 hover:bg-tan-300 text-forest-900 text-xs font-semibold transition-colors"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-forest-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${rawPhoneNumber}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-forest-900 hover:bg-forest-800 text-tan-100 text-xs font-semibold transition-colors"
              >
                <span>Call Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* GitHub link banner */}
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/tydickson5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-tan-50 border border-tan-300 hover:border-forest-600 text-xs sm:text-sm font-semibold text-forest-900 transition-colors shadow-subtle"
          >
            <Github className="w-4 h-4" />
            <span>github.com/tydickson5</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
