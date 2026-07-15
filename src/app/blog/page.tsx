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
    <section className="wrap py-16 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight tracking-[-0.015em] lowercase">
          blog
        </h1>
        <p className="mt-4 text-muted">
          notes, writing, and the occasional deep dive.
        </p>
      </header>

      <ul className="mt-14 space-y-10">
        {sortedPosts.map((post) => (
          <li key={post.slug} className="max-w-2xl">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-xl underline-offset-4 group-hover:underline sm:text-2xl">
                  {post.title}
                </h2>
                <time dateTime={post.date} className="text-sm text-muted">
                  {formatDate(post.date)}
                </time>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
