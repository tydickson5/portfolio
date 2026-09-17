export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Mobile" | "Full-Stack" | "Data & Tools";
  featured: boolean;
  platforms: ("iOS" | "Backend" | "Web" | "API" | "CLI")[];
  tags: string[];
  metrics?: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  highlights: string[];
  architecture?: {
    component: string;
    tech: string;
    summary: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: "caravyn",
    title: "Caravyn",
    tagline: "Synchronized road trip navigation & group travel coordination platform",
    description:
      "A complete multi-platform ecosystem designed for caravans, road trips, and convoy travel. Features real-time GPS fleet positioning, convoy voice & text comms, automated waypoint sync, and route disruption re-routing across mobile and web.",
    category: "Full-Stack",
    featured: true,
    platforms: ["iOS", "Backend", "Web"],
    tags: ["Swift", "SwiftUI", "Node.js", "WebSockets", "Next.js", "PostgreSQL", "Mapbox"],
    metrics: "Sub-100ms real-time vehicle coordinate synchronization",
    links: {
      github: "https://github.com/tydickson5/caravyn",
      live: "https://caravyn.app",
    },
    highlights: [
      "Native iOS application with offline-first turn-by-turn routing and live convoy proximity radar",
      "Event-driven backend service managing high-frequency telemetry over WebSockets and Redis pub/sub",
      "Interactive Next.js trip planner and administrative web dashboard with shared itineraries",
      "Dynamic lead-vehicle route sharing with instant reroute distribution to followers",
    ],
    architecture: [
      {
        component: "iOS Native App",
        tech: "SwiftUI, CoreLocation, Mapbox iOS SDK, BackgroundTasks",
        summary:
          "Energy-efficient GPS tracking with adaptive ping rates, offline maps caching, and haptic convoy alerts.",
      },
      {
        component: "Backend Telemetry Service",
        tech: "Node.js / Express, WebSockets (ws), Redis, PostgreSQL / PostGIS",
        summary:
          "Scalable real-time geospatial server computing convoy bounding boxes, route deviations, and instant telemetry broadcast.",
      },
      {
        component: "Web Portal & Route Planner",
        tech: "Next.js, TypeScript, Tailwind CSS, Mapbox GL",
        summary:
          "Collaborative desktop route crafting, fuel stop estimations, itinerary scheduling, and spectator live-tracking.",
      },
    ],
  },
  {
    id: "chef-n-share",
    title: "Chef n Share",
    tagline: "Community culinary discovery, recipe publishing & meal sharing platform",
    description:
      "A culinary social web & mobile application connecting home cooks, private chefs, and food enthusiasts. Allows users to discover curated recipes, fork community dishes with ingredient substitutions, and organize shared culinary dinners.",
    category: "Full-Stack",
    featured: true,
    platforms: ["Web", "iOS"],
    tags: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary"],
    metrics: "Interactive recipe scaling & culinary social feed",
    links: {
      github: "https://github.com/tydickson5/chef-n-share",
      live: "https://chefnshare.com",
    },
    highlights: [
      "Dynamic portion & serving size scaler that recalculates weights and baking ratios instantly",
      "Smart pantry inventory matching — suggesting recipes based on available kitchen ingredients",
      "Recipe forking & visual timeline history to document culinary adaptations and family traditions",
      "Cross-platform responsive web application alongside native mobile companion",
    ],
    architecture: [
      {
        component: "Web & Mobile App",
        tech: "Next.js 14, React Native / Expo, Tailwind CSS",
        summary:
          "Shared design language with ultra-responsive cooking mode (preventing screen timeout while hands are messy).",
      },
      {
        component: "Database & Auth",
        tech: "Supabase (PostgreSQL), Row Level Security (RLS)",
        summary:
          "Relational database modeling complex recipes, step-by-step media, ratings, and dietary constraint filters.",
      },
    ],
  },
  {
    id: "hoosjoining",
    title: "HoosJoining",
    tagline: "Spontaneous group meetup & campus community connection engine",
    description:
      "An intuitive, low-friction social platform built to discover who's getting together right now. Designed to eliminate endless group chat poll paralysis by providing real-time activity beacons for pick-up sports, study groups, dining, and campus happenings.",
    category: "Mobile",
    featured: true,
    platforms: ["Web", "iOS"],
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase", "Geolocation API"],
    metrics: "Zero-friction 1-tap join requests and RSVP tracking",
    links: {
      github: "https://github.com/tydickson5/hoosjoining",
      live: "https://hoosjoining.com",
    },
    highlights: [
      "Expiring activity 'beacons' that keep events fresh, active, and strictly time-relevant",
      "1-tap 'I'm In' commitment mechanism with live attendee counts and capacity caps",
      "Location-aware activity radar grouping spontaneous meetups by proximity",
      "Custom interest filters (Intramural Sports, Coding Sprints, Library Study, Food Runs)",
    ],
    architecture: [
      {
        component: "Real-time Event Engine",
        tech: "Firebase Firestore & Realtime Database, Next.js",
        summary:
          "Live event state stream with optimistic UI updates and instant join counters without page reloads.",
      },
    ],
  },
  {
    id: "question-forecaster",
    title: "Question Forecaster",
    tagline: "Probabilistic prediction engine & crowdsourced question forecasting tool",
    description:
      "A Bayesian forecasting and predictive analysis web tool that enables analysts and communities to calibrate probability estimates, track accuracy scores (Brier scores), and aggregate collective intelligence on complex forward-looking questions.",
    category: "Data & Tools",
    featured: true,
    platforms: ["Web", "API"],
    tags: ["TypeScript", "Next.js", "Python", "FastAPI", "Data Analysis", "Chart.js"],
    metrics: "Brier score calibration curves & automated probability aggregation",
    links: {
      github: "https://github.com/tydickson5/question-forecaster",
      live: "https://questionforecaster.app",
    },
    highlights: [
      "Interactive probability distribution slider & probability density visualization",
      "Automated Brier scoring system quantifying forecaster calibration and track record over time",
      "Aggregated consensus engine applying log-odds pooling to synthesize community predictions",
      "RESTful prediction API for programmatic forecast ingestion and resolution verification",
    ],
    architecture: [
      {
        component: "Forecasting API & Scoring Engine",
        tech: "Python, FastAPI, NumPy, Pandas",
        summary:
          "Statistical calculations for calibration curves, confidence intervals, and logarithmic probability aggregations.",
      },
      {
        component: "Forecasting UI",
        tech: "Next.js, Tailwind CSS, Recharts / Chart.js",
        summary:
          "Interactive probability distributions, calibration charts, and chronological forecast adjustment tracking.",
      },
    ],
  },
  {
    id: "webscraper",
    title: "WebScraper & Data Pipeline",
    tagline: "Resilient, distributed web extraction engine & structured dataset pipeline",
    description:
      "A fault-tolerant web crawler and dataset synthesis engine built to extract, normalize, and validate structured data from unstructured web pages. Features proxy rotation, anti-bot mitigation, headless browser fallback, and schema validation.",
    category: "Data & Tools",
    featured: false,
    platforms: ["CLI", "Backend", "API"],
    tags: ["Python", "Playwright", "BeautifulSoup", "Asyncio", "Docker", "PostgreSQL"],
    metrics: "High-throughput extraction with automatic retry & schema validation",
    links: {
      github: "https://github.com/tydickson5/webscraper-pipeline",
      live: "#",
    },
    highlights: [
      "Dynamic browser rendering fallback with Playwright for JavaScript-heavy single-page applications",
      "Intelligent proxy pooling with automatic backoff and rate-limit throttle handling",
      "Pydantic schema validation ensuring clean, strongly-typed structured output to PostgreSQL and JSONL",
      "Extensible plug-and-play parser architecture for rapid onboarding of new target domains",
    ],
    architecture: [
      {
        component: "Crawler Core",
        tech: "Python 3.12, Asyncio, aiohttp, Playwright",
        summary:
          "Concurrent asynchronous worker pool executing polite crawl policies with dynamic concurrency regulation.",
      },
      {
        component: "Storage & Export",
        tech: "PostgreSQL, SQLAlchemy, S3/MinIO",
        summary:
          "Automated deduplication based on content hashes and incremental synchronization runs.",
      },
    ],
  },
];

