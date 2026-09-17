import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ty Dickson | Software Engineer",
  description:
    "Personal portfolio of Ty Dickson. Full-stack, mobile (iOS), backend systems, and data pipeline engineer. Discover Caravyn, Chef n Share, HoosJoining, Question Forecaster, and WebScraper.",
  keywords: [
    "Ty Dickson",
    "Software Engineer",
    "Portfolio",
    "iOS Developer",
    "Next.js",
    "Caravyn",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Ty Dickson", url: "https://github.com/tydickson5" }],
  openGraph: {
    title: "Ty Dickson | Software Engineer",
    description:
      "Full-stack & mobile engineer specializing in Swift/iOS, scalable web applications, and backend systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grain-overlay antialiased selection:bg-forest-800 selection:text-tan-100 min-h-screen bg-tan-100 text-forest-900">
        {children}
      </body>
    </html>
  );
}

