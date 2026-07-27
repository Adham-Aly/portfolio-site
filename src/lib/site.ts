// One-sentence intro. Rendered on the home page and reused verbatim as the
// SEO / social description, so the two can never drift apart.
const tagline =
  "Incoming computer science student at the University of Toronto, and an AI Engineer, deeply interested in machine learning, automation/robotics, and open source.";

export const siteConfig = {
  name: "Adham Aly",
  tagline,
  description: tagline,
  links: {
    github: "https://github.com/Adham-Aly",
    linkedin: "https://www.linkedin.com/in/adhamalysaleh/",
    // Served from /public/resume.pdf — opens in a new tab.
    resume: "/resume.pdf",
    email: "adham.alysaleh@gmail.com",
  },
} as const;
