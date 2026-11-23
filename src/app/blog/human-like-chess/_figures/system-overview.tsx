import type { ReactNode } from "react";
import { Down, Node, OpenKey } from "./figure";

type Step = { text: ReactNode; detail?: ReactNode; open?: boolean };

const TRAINING: Step[] = [
  { text: "Lichess’s public game archive" },
  {
    text: "Split by rating band",
    detail: "… · 1200 · 1600 · 2000 · … (band width open)",
    open: true,
  },
  { text: "Strip each game to move text", detail: "1. e4 e5 2. Nf3 …" },
  { text: "Tokenize", detail: "characters or whole moves?", open: true },
  { text: "Train one transformer per band" },
];

const PLAYING: Step[] = [
  { text: "The game so far" },
  { text: "The model for the chosen rating" },
  { text: "Probabilities for the next move" },
  { text: "Drop the illegal moves" },
  {
    text: "Pick a move",
    detail: "sample it, or always take the top one?",
    open: true,
  },
];

function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol role="list">
      {steps.map((step, index) => (
        <li key={index}>
          {index > 0 ? <Down /> : null}
          <Node variant={step.open ? "open" : "default"}>
            {step.text}
            {step.detail ? (
              <span className="mt-0.5 block text-xs text-muted">
                {step.detail}
              </span>
            ) : null}
          </Node>
        </li>
      ))}
    </ol>
  );
}

function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted">
      {children}
    </p>
  );
}

/** The whole project on one screen: how models get trained, then how one plays. */
export function SystemOverview() {
  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
        <div>
          <ColumnTitle>Training · per band</ColumnTitle>
          <Steps steps={TRAINING} />
        </div>

        <div>
          <ColumnTitle>Playing · every move</ColumnTitle>
          {/* The bracket on the left carries the loop: after a move is
              played and the opponent replies, the game goes back in. */}
          <div className="relative pl-6">
            <div
              aria-hidden="true"
              className="absolute bottom-5 left-1 top-5 w-4 rounded-l-md border-y border-l border-muted/60"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 8 8"
              width="8"
              height="8"
              className="absolute left-[16px] top-[16px] text-muted/60"
            >
              <path d="M0 0l8 4-8 4z" fill="currentColor" />
            </svg>
            <Steps steps={PLAYING} />
          </div>
          <p className="mt-2 pl-6 text-xs leading-relaxed text-muted">
            Play it, add the opponent’s reply, and go around again.
          </p>
        </div>
      </div>

      <OpenKey />
    </div>
  );
}
