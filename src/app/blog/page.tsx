import type { Metadata } from "next";
import Link from "next/link";
import { posts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing and notes by Adham Aly on AI, software, and open source.",
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <h1 className="text-lg font-bold lowercase">blog</h1>
      <p className="mt-3 text-muted">
        notes, writing, and the occasional deep dive.
      </p>

      <div className="mt-8 space-y-6">
        {sortedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
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
