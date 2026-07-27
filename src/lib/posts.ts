export type Post = {
  slug: string;
  title: string;
  // ISO date (yyyy-mm-dd).
  date: string;
  excerpt: string;
};

// Describes the blog section itself (its meta description and structured
// data) — distinct from the site-wide intro in src/lib/site.ts, which
// describes the person rather than this one section.
export const blogDescription =
  "Writing and notes by Adham Aly on AI, software, and open source.";

// Registry used by the blog index. Each post also has its own page under
// src/app/blog/<slug>/page.tsx — add a folder there and an entry here to
// publish a new post.
export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-07-15",
    excerpt:
      "A first note on why this blog exists and what I plan to write about here.",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

// Formats an ISO date without timezone drift (parses the parts as UTC).
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
