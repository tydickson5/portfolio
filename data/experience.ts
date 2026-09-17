export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "Full-Time" | "Contract" | "Internship" | "Independent";
  description: string;
  highlights: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "lead-engineer-caravyn",
    role: "Lead Software & iOS Engineer",
    company: "Caravyn",
    location: "Charlottesville, VA / Remote",
    period: "2024 — Present",
    type: "Independent",
    description:
      "Architected and engineered an end-to-end synchronized convoy navigation platform across native iOS, real-time Node.js backend, and Next.js web application.",
    highlights: [
      "Engineered native iOS client with SwiftUI, CoreLocation, and Mapbox SDK with offline route caching and low-latency proximity radar",
      "Designed and deployed event-driven WebSocket and Redis pub/sub telemetry service delivering sub-100ms coordinate synchronization",
      "Built responsive web trip planner and spectator tracking portal with Next.js and Tailwind CSS",
    ],
    skills: ["Swift", "SwiftUI", "Node.js", "WebSockets", "Redis", "Next.js", "PostgreSQL"],
  },
  {
    id: "full-stack-developer",
    role: "Full-Stack Software Engineer",
    company: "Chef n Share & HoosJoining",
    location: "Charlottesville, VA",
    period: "2023 — 2024",
    type: "Contract",
    description:
      "Developed high-engagement social discovery and community web applications with responsive user interfaces and real-time backend state management.",
    highlights: [
      "Created dynamic recipe scaling algorithm and ingredient pantry matching for culinary discovery platform",
      "Engineered real-time meetup broadcast engine with optimistic UI updates and instant RSVP tracking",
      "Implemented secure relational schema, row-level authentication, and media storage pipelines",
    ],
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Firebase", "Supabase", "REST APIs"],
  },
  {
    id: "systems-data-engineer",
    role: "Data Systems & Pipeline Developer",
    company: "Data & Scraping Infrastructure",
    location: "Remote",
    period: "2023 — 2023",
    type: "Contract",
    description:
      "Built resilient asynchronous crawler engines and statistical forecasting analysis tools for structured dataset extraction.",
    highlights: [
      "Designed fault-tolerant web crawler using Python, Playwright, and Asyncio with proxy rotation and rate-limit mitigation",
      "Automated Pydantic schema validation ensuring clean normalized data exports to PostgreSQL and JSONL",
      "Implemented Bayesian scoring and calibration visualization modules in Python and FastAPI",
    ],
    skills: ["Python", "Playwright", "FastAPI", "Pandas", "Docker", "PostgreSQL", "Asyncio"],
  },
];

