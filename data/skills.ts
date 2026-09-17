export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ESNext)", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Swift", level: "Proficient" },
      { name: "SQL (Postgres)", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Advanced" },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "State Management", level: "Proficient" },
      { name: "REST & GraphQL", level: "Proficient" },
    ],
  },
  {
    title: "Mobile & Native",
    skills: [
      { name: "iOS / SwiftUI", level: "Proficient" },
      { name: "React Native / Expo", level: "Proficient" },
      { name: "CoreLocation & Maps", level: "Proficient" },
      { name: "Offline Sync & Storage", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: "Advanced" },
      { name: "FastAPI / Python", level: "Proficient" },
      { name: "WebSockets & Realtime", level: "Proficient" },
      { name: "PostgreSQL & PostGIS", level: "Proficient" },
      { name: "Redis", level: "Proficient" },
      { name: "Supabase & Firebase", level: "Proficient" },
    ],
  },
  {
    title: "Data, Tools & DevOps",
    skills: [
      { name: "Web Scraping & Playwright", level: "Advanced" },
      { name: "Git & GitHub CI/CD", level: "Advanced" },
      { name: "Docker", level: "Proficient" },
      { name: "Vercel & Cloud Deploy", level: "Advanced" },
      { name: "Data Extraction & Pipelines", level: "Advanced" },
    ],
  },
];

