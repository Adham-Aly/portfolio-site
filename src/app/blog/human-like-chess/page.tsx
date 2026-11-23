import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { formatDate, getPost } from "@/lib/posts";
import { baseOpenGraph, baseTwitter } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { postJsonLd } from "@/lib/structured-data";
import { Figure } from "./_figures/figure";
import { GameToTokens } from "./_figures/game-to-tokens";
import { MoveChoices } from "./_figures/move-choices";
import { SystemOverview } from "./_figures/system-overview";
import { TransformerSketch } from "./_figures/transformer-sketch";
import { TwoApproaches } from "./_figures/two-approaches";

const post = getPost("human-like-chess")!;
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

export default function HumanLikeChessPost() {
  return (
    <article>
      <JsonLd data={postJsonLd(post)} />

      <PageHeader title={post.title} nav="home" />

      <time dateTime={post.date} className="mt-1 block text-sm text-muted">
        {formatDate(post.date)}
      </time>

      <div className="mt-6 space-y-5 leading-relaxed">
        <p>
          I&rsquo;m currently working on a solution to a problem I noticed
          after looking into the way chess bots work.
        </p>
        <p>
          Modern chess bots are completely unbeatable by any human, by a massive
          margin. Nobody can come close. But that creates a fundamental flaw:
          they&rsquo;re just too good. No one wants to play against a bot that
          beats them in the first five moves. You want to actually learn, by
          getting the chance to play against a computer that&rsquo;s at a
          comparable level to you.
        </p>
        <p>
          Modern chess bots attempt to solve this problem by purposely making
          themselves &ldquo;dumber&rdquo;: weakening the engine through various
          methods, such as reducing the depth of the search and the evaluations
          it runs.
        </p>
        <p>
          The problem with all this is that it still doesn&rsquo;t play like a
          human. Although you might still develop your chess skills training
          this way, to me at least, something just never felt right about
          playing against a conventional chess bot. Which is why I decided to
          take a different, bottom-up approach: instead of creating a god-tier
          algorithm that annihilates humans at chess, why not train a model
          from the start to play like a real human?
        </p>
        <p>
          This is what this project is about: I&rsquo;m training a transformer
          on the massive public archive of Lichess games, at various Elo
          ratings, to see how much closer to human-like play the models get
          compared to conventional chess bots.
        </p>

        <Figure
          number={1}
          caption="Two ways to build a 1200-level opponent. Today’s bots start superhuman and get held back; this project starts from how 1200-rated people actually play."
        >
          <TwoApproaches />
        </Figure>

        <h2 className="pt-3 font-bold">The plan</h2>

        <p>
          The idea is to give the model nothing but game records. No search, no
          hand-written evaluation function, no chess knowledge built in at all:
          just games, written out as plain move text. The model reads a game
          one token at a time (either one character or one whole move per
          token; I haven&rsquo;t settled on which yet) and learns to predict
          what comes next, the same way a language model predicts the next
          word.
        </p>

        <Figure
          number={2}
          caption="The model only ever gets the moves as text, never the board, so it has to work out the position for itself. How to cut that text into tokens is still an open choice."
        >
          <GameToTokens />
        </Figure>
        <p>
          The important part is that each model only ever sees games from one
          rating band. A model trained on 1200-rated games doesn&rsquo;t learn
          the best move in a position. It learns the move a 1200-rated player
          would most likely make there, including the tactics they miss and the
          natural-looking moves that turn out to be mistakes. So instead of an
          engine pretending to be weaker, you get a model that plays at the
          level of the players it learned from, and hopefully plays like them
          too.
        </p>

        <Figure
          number={3}
          caption={
            <>
              What White actually played in this position across Lichess blitz,
              rapid and classical games. Taking the pawn with Nxe5 walks into a
              known trap (Black answers Qg5), and White wins only 23% of those
              games at 1200. Lower-rated players fall for it almost twice as
              often. That difference is exactly what a 1200 model should learn
              to reproduce. Source: Lichess opening explorer and cloud
              evaluation, November 2026.
            </>
          }
        >
          <MoveChoices />
        </Figure>
        <p>
          For size, I&rsquo;m aiming for a few tens of millions of parameters,
          trained on a GPU for about a day. That&rsquo;s tiny next to modern
          language models, but chess is a much narrower domain than language.
        </p>

        <Figure
          number={4}
          caption="A rough sketch of the model: a standard decoder-only transformer, the same shape as a small language model, reading moves instead of words. The sizes and many of the details will change once I actually start building it."
        >
          <TransformerSketch />
        </Figure>

        <p>
          And since the model is really just predicting text, I&rsquo;ll also
          need to make sure it only ever plays legal moves.
        </p>

        <Figure
          number={5}
          caption="The whole project on one screen: training one model per rating band, then playing with one, move by move."
        >
          <SystemOverview />
        </Figure>
        <p>
          I&rsquo;m still early on this one, so a lot of the details will
          probably change as I go. I&rsquo;ll share code and results here once
          I have a model I can actually play against.
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
