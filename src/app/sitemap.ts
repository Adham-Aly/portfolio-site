import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Post dates are plain yyyy-mm-dd; parsing them as UTC keeps the emitted
  // timestamps from sliding a day backwards in western timezones.
  const postDate = (iso: string) => new Date(`${iso}T00:00:00.000Z`);
  const newestPost = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))[0];

  return [
    {
      url: siteConfig.url,
      // The home page is regenerated on every deploy, which is also the only
      // way its content ever changes.
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: newestPost ? postDate(newestPost.date) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: postDate(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
