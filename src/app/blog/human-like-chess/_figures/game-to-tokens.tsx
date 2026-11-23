import type { ReactNode } from "react";
import { Arrow } from "./figure";
import { ChessBoard } from "./chess-board";

const MOVE_TEXT = "1. e4 e5 2. Nf3 Nc6";
const MOVES = ["e4", "e5", "Nf3", "Nc6"];

function Token({ children, faint = false }: { children: string; faint?: boolean }) {
  return (
    <span
      className={`inline-flex h-7 min-w-[1.375rem] items-center justify-center rounded-[4px] border border-line bg-surface px-1.5 font-mono text-[0.8125rem] ${
        faint ? "text-muted" : ""
      }`}
    >
      {children}
    </span>
  );
}

function Option({
  title,
  count,
  tokens,
  notes,
}: {
  title: string;
  count: number;
  tokens: ReactNode;
  notes: string[];
}) {
  return (
    <div className="rounded-md border border-dashed border-muted/70 p-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs text-muted">{count} tokens</p>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1">{tokens}</div>
      <ul className="mt-2.5 space-y-0.5 text-xs leading-relaxed text-muted">
        {notes.map((note) => (
          <li key={note} className="flex gap-2">
            <span aria-hidden="true">·</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** What the model sees, and the two ways of cutting it into tokens. */
export function GameToTokens() {
  const characters = [...MOVE_TEXT];

  return (
    <div>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:gap-5">
        <div className="w-44 shrink-0">
          <ChessBoard
            fen="r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3"
            label="Chess position after 1. e4 e5 2. Nf3 Nc6."
          />
          <p className="mt-1.5 text-center text-xs text-muted">What you see</p>
        </div>

        <Arrow className="rotate-90 sm:rotate-0 sm:self-center sm:-mt-5" />

        <div className="flex w-full flex-col sm:flex-1">
          <div className="flex flex-1 items-center justify-center rounded-md border border-line bg-surface px-4 py-5 font-mono text-base">
            {MOVE_TEXT}
          </div>
          <p className="mt-1.5 text-center text-xs text-muted">
            What the model sees: no board, just text
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.08em] text-muted">
          Two ways to tokenize it
        </p>
        <p className="text-xs italic text-muted">undecided</p>
      </div>

      <div className="mt-2 space-y-2.5">
        <Option
          title="One character per token"
          count={characters.length}
          tokens={characters.map((char, index) =>
            char === " " ? (
              <Token key={index} faint>
                ␣
              </Token>
            ) : (
              <Token key={index}>{char}</Token>
            ),
          )}
          notes={[
            "Tiny vocabulary: a few dozen symbols",
            "Games become about 5× longer",
            "Can spell out moves that don’t exist",
          ]}
        />
        <Option
          title="One move per token"
          count={MOVES.length}
          tokens={MOVES.map((move) => (
            <Token key={move}>{move}</Token>
          ))}
          notes={[
            "Bigger vocabulary: a few thousand possible moves",
            "Every token is a whole move",
            "Illegal moves are easy to block",
          ]}
        />
      </div>
    </div>
  );
}
