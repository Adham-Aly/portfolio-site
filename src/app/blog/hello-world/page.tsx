import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { formatDate, getPost } from "@/lib/posts";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { postJsonLd } from "@/lib/structured-data";

const post = getPost("hello-world")!;

const title = `${post.title} · ${siteConfig.name}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    ...baseOpenGraph,
    type: "article",
    url: `/blog/${post.slug}`,
    title,
    description: post.excerpt,
    publishedTime: `${post.date}T00:00:00.000Z`,
    authors: [siteConfig.name],
  },
  twitter: { ...baseTwitter, title, description: post.excerpt },
};

export default function HelloWorldPost() {
  return (
    <article>
      <JsonLd data={postJsonLd(post)} />

      <PageHeader title={post.title} nav="home" />

      <time dateTime={post.date} className="mt-1 block text-sm text-muted">
        {formatDate(post.date)}
      </time>

      <div className="mt-6 space-y-5 leading-relaxed">
        <p>
          Welcome, and thanks for stopping by. This is the first post on what I
          hope becomes a running log of the things I build, break, and learn
          along the way.
        </p>
        <p>
          I spend most of my time somewhere between machine learning, low-level
          systems, and open source, so expect notes on the projects I&rsquo;m
          working on, ideas I&rsquo;m still chewing on, and the occasional deep
          dive for when something finally clicks.
        </p>
        <p>More soon.</p>
      </div>

      <div className="mt-10">
        <Link
          href="/blog"
          className="text-sm italic text-muted transition-colors hover:text-foreground"
        >
          ← Back to blog
        </Link>
      </div>
    </article>
  );
}
