export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  // Placeholder for now — add a URL (club/organization page, etc.) to make the
  // role title a live link that opens in a new tab.
  href: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "President, Computer Science Club",
    organization: "White Oaks Secondary School",
    location: "Oakville, ON",
    period: "Sept 2024 – July 2026",
    href: "",
    highlights: [
      "Directed a 15+ person executive team running computer-science and competitive-programming events, including the WOSS Dual Olympiad, and owned logistics, marketing, and sponsorship outreach.",
      "Taught weekly data-structures, algorithms, and software-engineering lessons to a class of 50+ students, building their competitive-programming and problem-solving skills.",
      "Led a 10-person curriculum subteam authoring lesson plans, in-class activities, and original contest problems used across sessions and competitions.",
    ],
  },
];
