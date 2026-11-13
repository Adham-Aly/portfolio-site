import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { formatDate, getPost } from "@/lib/posts";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { postJsonLd } from "@/lib/structured-data";

const post = getPost("ml-roadmap")!;
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

const milestones = [
  {
    date: "2026-11-27",
    title: "Recognize handwritten digits",
    description:
      "Build a basic neural network on MNIST and measure its accuracy on held-out data.",
  },
  {
    date: "2026-12-11",
    title: "Move from digits to letters",
    description:
      "Extend the classifier to handwritten letters using EMNIST Letters.",
  },
  {
    date: "2027-01-08",
    title: "Predict the next token",
    description:
      "Build a simple next-token predictor: a bigram baseline with sample text generation.",
  },
  {
    date: "2027-01-29",
    title: "Introduce attention",
    description:
      "Train a small transformer for next-token prediction and compare it against the baseline.",
  },
  {
    date: "2027-02-26",
    title: "Build a transformer chessbot",
    description:
      "Train on Lichess games to predict moves, constrain play to legal moves, and evaluate against a simple baseline.",
  },
];

export default function MlRoadmapPost() {
  return (
    <article>
      <JsonLd data={postJsonLd(post)} />

      <PageHeader title={post.title} nav="home" />

      <time dateTime={post.date} className="mt-1 block text-sm text-muted">
        {formatDate(post.date)}
      </time>

      <div className="mt-6 space-y-5 leading-relaxed">
        <p>
          My next few months of building: start with handwritten characters,
          move into language modeling, then apply transformers to chess.
          Five projects, each building on the last.
        </p>

        <p>
          I emphasize <strong>quality over quantity</strong>. By choosing to learn
          things more deeply than most of my peers, I believe I&rsquo;m investing
          in my future self: building knowledge that compounds over time and
          delivers a high long-term ROI.
        </p>

        <ol role="list" className="space-y-5">
          {milestones.map((milestone) => (
            <li
              key={milestone.date}
              className="border-l border-muted/30 pl-4"
            >
              <time
                dateTime={milestone.date}
                className="block text-sm text-muted"
              >
                By {formatDate(milestone.date)}
              </time>
              <h2 className="mt-1 font-bold">{milestone.title}</h2>
              <p className="mt-1">{milestone.description}</p>
            </li>
          ))}
        </ol>

        <p>
          These are target dates. I plan to share code, results, and short
          write-ups as each project lands.
        </p>
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
