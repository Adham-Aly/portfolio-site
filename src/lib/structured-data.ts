import { posts, type Post } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

const { url, name, description, links } = siteConfig;

// Stable @id anchors let nodes reference each other by pointer instead of
// repeating the whole Person object inside every other node.
const personId = `${url}/#person`;
const websiteId = `${url}/#website`;
const blogId = `${url}/blog#blog`;

// The site is one person's portfolio, so Person is the entity every other
// node hangs off — it's what Google can surface as a knowledge panel.
const person = {
  "@type": "Person",
  "@id": personId,
  name,
  url,
  description,
  jobTitle: "AI Engineer",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Automation",
    "Robotics",
    "Open Source",
    "Software Engineering",
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Toronto",
  },
  sameAs: [links.github, links.linkedin],
};

function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${url}${crumb.path}`,
    })),
  };
}

/** Home page: the person, and the site that represents them. */
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": websiteId,
        url,
        name,
        description,
        inLanguage: "en-US",
        publisher: { "@id": personId },
      },
    ],
  };
}

/** Blog index: the blog itself plus a summary of every post it lists. */
export function blogJsonLd(blogDescription: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "Blog",
        "@id": blogId,
        url: `${url}/blog`,
        name: `Blog · ${name}`,
        description: blogDescription,
        inLanguage: "en-US",
        author: { "@id": personId },
        publisher: { "@id": personId },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${url}/blog/${post.slug}`,
          datePublished: post.date,
        })),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  };
}

/** A single post, tied back to the blog it belongs to. */
export function postJsonLd(post: Post) {
  const postUrl = `${url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#post`,
        url: postUrl,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en-US",
        author: { "@id": personId },
        publisher: { "@id": personId },
        isPartOf: { "@id": blogId },
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };
}
