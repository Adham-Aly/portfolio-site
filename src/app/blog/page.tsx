import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { blogDescription, posts, formatDate } from "@/lib/posts";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { blogJsonLd } from "@/lib/structured-data";

const title = `Blog · ${siteConfig.name}`;

export const metadata: Metadata = {
  title: "Blog",
  description: blogDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    ...baseOpenGraph,
    type: "website",
    url: "/blog",
    title,
    description: blogDescription,
  },
  twitter: { ...baseTwitter, title, description: blogDescription },
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <JsonLd data={blogJsonLd(blogDescription)} />

      <PageHeader title="Blog" nav="home" />

      <p className="mt-3 text-muted">
        Notes, writing, and the occasional deep dive.
      </p>

      <div className="mt-8 space-y-6">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <span className="underline-offset-4 group-hover:underline">
                {post.title}
              </span>
              <time dateTime={post.date} className="text-sm text-muted">
                {formatDate(post.date)}
              </time>
            </div>
            <p className="mt-1 leading-relaxed text-muted">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
