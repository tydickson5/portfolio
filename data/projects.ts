export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Mobile" | "Full-Stack" | "Data & Tools" | "Web";
  featured: boolean;
  platforms: ("iOS" | "Backend" | "Web" | "API" | "CLI")[];
  tags: string[];
  metrics?: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
    app?: string;
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
    tagline: "Trip sharing app to inspire people around the world to travel",
    description:
      "Caravyn is an IOS app which allows users to share the trips that they have taken for friends or the public. Currently in beta testing with some friends and family.",
    category: "Full-Stack",
    featured: true,
    platforms: ["iOS", "Backend", "Web"],
    tags: ["SwiftUI", "Node.js", "Nest.js", "PostgreSQL", "Mapbox", "Supabase", "Next", "Vercel"],
    links: {
      github: "https://github.com/tydickson5/caravyn",
      live: "https://caravyn.com",
      app: "https://testflight.apple.com/join/PxBqJVAG"
    },
    highlights: [
      "Interactive world map (MapKit) with users posts and trips for friends or the public to see",
      "Nest and NodeJS backend with connection to Supabase for PostgreSQL database management",
      "Website with beta testing application form plus interactie mapbox map for showing example trips",
    ],
    architecture: [
      {
        component: "iOS Native App",
        tech: "SwiftUI, MapKit, Supabase, Nuke",
        summary:
          "Native app using MapKit, supabase for quick database updates and requests, and Nuke for better image/video caching",
      },
      {
        component: "Backend Service",
        tech: "Node.js, Nest, Supabase",
        summary:
          "Backend run on Fly.io with two dedicated servers in Washington D.C. and Singapore",
      },
      {
        component: "Website",
        tech: "TypeScript, Mapbox GL, Next",
        summary:
          "Work in progress website for beta test signups, blog, and map marketing tactic deplyed on Vercel",
      },
    ],
  },
  {
    id: "chef-n-share",
    title: "Chef n Share",
    tagline: "Roommate item sharing app",
    description:
      "Simple native IOS app for sharing items with roommates. Allows users to add, delete, select state of item, join different groups, and leave notes under items.",
    category: "Full-Stack",
    featured: true,
    platforms: ["Web", "iOS"],
    tags: ["SwiftUI", "Firebase", "HTML", "CSS"],
    links: {
      github: "https://github.com/tydickson5/RoomateApp",
      live: "https://roommate-app-site.vercel.app/index.html",
      app: "https://testflight.apple.com/join/t5Bpvd5P"
    },
    highlights: [
      "Item tracking list with reodering, sorting, item lookup, and live state changing",
      "Group sharing, joining, and creating",
      "Simple waitlist signup page and app use instructions page deployed on Vercel",
    ],
    architecture: [
      {
        component: "Mobile App",
        tech: "SwiftUI, Firebase",
        summary:
          "Firebase used for auth and database management",
      },
      {
        component: "Website",
        tech: "HTML, CSS, Javascript",
        summary:
          "Simple webiste for signup page and app use instructions",
      },
    ],
  },
  {
    id: "hoosjoining",
    title: "HoosJoining",
    tagline: "Web app to connect UVA CIOs with students",
    description:
      "Semester long class project which allowed users to search, join, message, and recieve announcements from student led organizations",
    category: "Web",
    featured: true,
    platforms: [],
    tags: ["Python", "Django", "Heroku", "Postgres"],
    links: {
      github: "https://github.com/tydickson5/hoosjoining",
    },
    highlights: [
      "Semester long class project built using SCRUM methodology",
      "Built using Python and Django with a Postgres backend deployed with Heroku",
      "Google authentication",
    ],
    architecture: [
      {
        component: "Web",
        tech: "Django, Heroku",
        summary:
          "Web app to log in as user or administrator for CIO",
      },
    ],
  },
  {
    id: "question-forecaster",
    title: "Question Forecaster",
    tagline: "Forecast student questions by uploading teaching documents",
    description:
      "Built for a hackathon, Question Forecaster allows teachers to know what questions their students might ask when uploading a lession plan, activity, etc.",
    category: "Web",
    featured: true,
    platforms: [],
    tags: ["Flask", "Python", "OpenAI", "HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/tydickson5/questionforecaster",
    },
    highlights: [
      "Upload lesson to site",
      "ChatGPT API analyzes lesson and predicts potential questions/problems students might have",
      "Return questions/problems ranked by likleyhood to happen",
    ],
    architecture: [
      {
        component: "Web UI",
        tech: "HTML, CSS, Javascript",
        summary:
          "Simple web interface to upload lesson and return questions/problems",
      },
      {
        component: "Forecaster Backend",
        tech: "Flask, Python, OpenAI API",
        summary:
          "Backend to analyze and rank lesson plan to find potential questions/problems through refined prompting",
      },
    ],
  }        
  
];

