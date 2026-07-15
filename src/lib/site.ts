export const siteConfig = {
  name: "Adham Aly",
  // Shown as the small wordmark in the top-left of the nav.
  shortName: "adham",
  // One-sentence intro rendered on the home page (kept deliberately lowercase).
  tagline:
    "incoming computer science student at the university of toronto, building toward ai engineering and always tinkering with machine learning, robotics, and open source.",
  // Sentence-case version used for SEO / social metadata.
  description:
    "Adham Aly is a computer science student and aspiring AI engineer interested in machine learning, robotics, and open source.",
  links: {
    github: "https://github.com/Adham-Aly",
    linkedin: "https://www.linkedin.com/in/adhamalysaleh/",
    // Served from /public/resume.pdf — opens in a new tab.
    resume: "/resume.pdf",
    email: "adham.alysaleh@gmail.com",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
] as const;
