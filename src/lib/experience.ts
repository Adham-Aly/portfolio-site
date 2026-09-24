export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  // The role title links here (club/organization page, event site, etc.) and
  // opens in a new tab.
  href: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "President, Computer Science Club",
    organization: "White Oaks Secondary School",
    location: "Oakville, ON",
    period: "Sept 2024 – July 2026",
    href: "https://wmoj.ca/csclub",
    highlights: [
      "Directed a 15+ person executive team running computer-science and competitive-programming events, including the WOSS Dual Olympiad, owning logistics, marketing, and sponsorship outreach.",
      "Taught weekly data-structures, algorithms, and software-engineering lessons to a class of 50+ students, building their competitive-programming and problem-solving skills.",
      "Led a 10-person curriculum subteam authoring lesson plans, in-class activities, and original competitive-programming contest problems used across sessions and competitions.",
    ],
  },
  {
    role: "Director, WOSS TriOlympiad",
    organization: "White Oaks Secondary School",
    location: "Oakville, ON",
    period: "Sept 2024 – July 2026",
    href: "https://triolympiad.ca",
    highlights: [
      "Directed the WOSS TriOlympiad, a free three-day physics, math, and computer-science competition with solo and team rounds, drawing 100+ interested students from across the Halton District School Board.",
      "Coordinated a 16-person organizing team across the school's Math, Physics, and Computer Science clubs to write original contest problems and run the event, and led sponsorship outreach with tiered packages from $100 to $1,500.",
      "Co-built the event website (triolympiad.ca) in Next.js and TypeScript, with online registration that saved sign-ups to Google Sheets and sent automatic confirmation emails.",
    ],
  },
];
