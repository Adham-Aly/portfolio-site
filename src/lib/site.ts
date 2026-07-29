// One-sentence intro. Rendered on the home page and reused verbatim as the
// SEO / social description, so the two can never drift apart.
const tagline =
  "AI/ML Engineer & First-year Computer Science student at the University of Toronto. Deeply interested in machine learning, automation/robotics, and open source.";

// Absolute origin for canonical URLs, the sitemap, robots.txt and og:url.
// Every SEO route derives from this one value, so pointing the site at a new
// domain is a single change here (or NEXT_PUBLIC_SITE_URL in the environment).
const url = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://adhamaly.com").replace(
  /\/+$/,
  "",
);

export const siteConfig = {
  name: "Adham Aly",
  tagline,
  description: tagline,
  url,
  // og:locale format (underscore), not the html lang attribute.
  locale: "en_US",
  links: {
    github: "https://github.com/Adham-Aly",
    linkedin: "https://www.linkedin.com/in/adhamalysaleh/",
    // Served from /public/resume.pdf — opens in a new tab.
    resume: "/resume.pdf",
    email: "adham.alysaleh@gmail.com",
  },
} as const;
