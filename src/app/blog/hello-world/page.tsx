import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPost } from "@/lib/posts";

const post = getPost("hello-world")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
};

export default function HelloWorldPost() {
  return (
    <div className="wrap py-16 sm:py-20">
      <article className="max-w-2xl">
        <header>
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.015em] lowercase">
            {post.title}
          </h1>
          <time dateTime={post.date} className="mt-3 block text-sm text-muted">
            {formatDate(post.date)}
          </time>
        </header>

        <div className="mt-8 space-y-5 leading-relaxed text-foreground/90">
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

        <footer className="mt-14">
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← back to blog
          </Link>
        </footer>
      </article>
    </div>
  );
}
