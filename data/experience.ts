export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  type: "Internship" | "Contract" | "Operations" | "Full-Time" | "Part-Time" | "Independent";
  type: "Internship" | "Contract" | "Full-Time" | "Part-Time" | "Independent";
  description?: string;
  highlights: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "patriot-development-corp",
    role: "Intern",
    company: "Patriot Development Corporation",
    location: "Dulles, VA",
    period: "Summer 2026",
    type: "Internship",
    description:
      "Modernized internal accounting systems, infrastructure, and field telemetry tracking software across company operations.",
    highlights: [
      "Improved accounting and truck fuel management systems through increasing utility of large Excel tracking sheets with Visual Basic and Python",
      "Updated public website UI, created employee site, and helped convert company computers to Microsoft Azure",
      "Assisted with the testing of an in-house mobile app and third-party software for truck fuel tracking for contracted companies",
    ],
    skills: ["Python", "Visual Basic (VBA)", "Microsoft Azure", "Web UI", "Mobile App Testing", "Excel Automation"],
  },
  {
    id: "ember-fellowship",
    role: "Contracted Software Engineer",
    company: "Ember Fellowship",
    location: "Remote",
    period: "2025 — 2026",
    type: "Contract",
    description:
      "Developed web intelligence and data collection automation engines to systematically track hiring and career opportunity listings.",
    highlights: [
      "Contributed with writing programs to scrape target company listings to help track career opportunities",
      "Utilized Python web scraping frameworks (Scrapy and Selenium) to collect, clean, and process structured data",
    ],
    skills: ["Python", "Scrapy", "Selenium", "Web Scraping", "Data Pipelines", "Automation"],
  },
  {
    id: "first-bank-virginia",
    role: "Intern",
    company: "First Bank (Virginia)",
    location: "Virginia",
    period: "Summer 2025",
    type: "Internship",
    description:
      "Contributed to quarterly financial reporting, branch network integration, and market research initiatives.",
    highlights: [
      "Wrote major parts of third and fourth quarter earnings reports and updated investor financial reports",
      "Set up CISCO routers and switches for newly acquired Touchstone branches in recent merger",
      "Researched markets, expansion plans, mergers, and community outreach opportunities",
      "Completed capstone project on bringing younger customers to community banks by the end of the summer",
    ],
    skills: ["Financial Analysis", "CISCO Networking", "Earnings Reports", "Market Research", "Strategy"],
  },
  {
    id: "farmington-country-club",
    role: "Outdoor Operations",
    company: "Farmington Country Club",
    location: "Charlottesville, VA",
    period: "2025 — Present",
    type: "Operations",
    description:
      "Deliver premium guest experiences, logistical coordination, and tournament operations at a premier private club.",
    highlights: [
      "Work to create a unique and high-quality experience for members and guests of a private club",
      "Manage carts, clubs, driving ranges, and tournaments while giving a professional and personal experience",
    ],
    skills: ["Operations Management", "Client Relations", "Event Coordination", "Teamwork"],
  },
];
