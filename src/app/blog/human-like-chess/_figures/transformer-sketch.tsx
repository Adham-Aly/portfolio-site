import type { ReactNode } from "react";
import { Down, Node } from "./figure";

const TOKENS = ["e4", "e5", "Nf3", "Nc6"];
const NEXT = ["Bc4", "Bb5", "d4", "Nc3"];

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex h-6 items-center rounded-[4px] border border-line bg-background px-1.5 font-mono text-xs">
      {children}
    </span>
  );
}

const COLUMNS = "sm:grid-cols-[15rem_1fr]";

// One layer of the stack: the box, with a short note beside it (below it on
// narrow screens).
function Layer({ box, note }: { box: ReactNode; note?: ReactNode }) {
  return (
    <div className={`grid gap-x-5 gap-y-1 sm:items-center ${COLUMNS}`}>
      <div>{box}</div>
      {note ? <p className="text-xs leading-relaxed text-muted">{note}</p> : null}
    </div>
  );
}

// The arrow between two layers, kept under the box column.
function Between() {
  return (
    <div className={`grid gap-x-5 ${COLUMNS}`}>
      <Down />
    </div>
  );
}

// Causal attention mask: each move (row) can look at itself and the moves
// before it (filled), never the ones after.
function CausalMask() {
  const cell = 13;
  const gap = 2;
  const labelWidth = 26;
  const size = TOKENS.length * (cell + gap) - gap;
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${labelWidth + size} ${size}`}
      width={labelWidth + size}
      height={size}
      className="mt-1.5 block"
    >
      {TOKENS.map((token, row) => (
        <g key={token}>
          <text
            x={labelWidth - 5}
            y={row * (cell + gap) + cell / 2}
            textAnchor="end"
            dominantBaseline="central"
            className="fill-muted font-mono"
            fontSize={9}
          >
            {token}
          </text>
          {TOKENS.map((_, col) => (
            <rect
              key={col}
              x={labelWidth + col * (cell + gap)}
              y={row * (cell + gap)}
              width={cell}
              height={cell}
              rx={2}
              className={col <= row ? "fill-muted/70" : "fill-none stroke-line"}
              strokeWidth={1}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

/** A rough sketch of a standard decoder-only transformer, applied to moves. */
export function TransformerSketch() {
  return (
    <div>
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-dashed border-muted/70 px-3 py-1 text-xs text-muted">
        Rough sketch: subject to change as I start implementing it
      </p>

      <Layer
        box={
          <div className="flex flex-wrap justify-center gap-1">
            {TOKENS.map((token) => (
              <Chip key={token}>{token}</Chip>
            ))}
          </div>
        }
        note="The game so far, as tokens (shown here one move per token)."
      />
      <Between />
      <Layer
        box={<Node className="text-center">Token + position embeddings</Node>}
        note="Each token becomes a vector, tagged with where it sits in the game."
      />
      <Between />
      <Layer
        box={
          <div className="relative rounded-lg border border-line p-2.5 pt-6">
            <span className="absolute left-3 top-1.5 text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
              Transformer block
            </span>
            <span className="absolute right-3 top-1.5 text-xs italic text-muted">
              × N
            </span>
            <Node className="text-center">Masked self-attention</Node>
            <Down />
            <Node className="text-center">Feed-forward network</Node>
          </div>
        }
        note={
          <>
            <span>
              Attention lets each move look back at every earlier move, but never
              ahead. Each part also has a residual connection and layer norm.
              How many blocks (N) and how wide is still open.
            </span>
            <CausalMask />
          </>
        }
      />
      <Between />
      <Layer
        box={<Node className="text-center">Linear layer + softmax</Node>}
        note="Turns the last position’s vector into a score for every token in the vocabulary."
      />
      <Between />
      <Layer
        box={
          <div className="flex flex-wrap items-center justify-center gap-1">
            {NEXT.map((move, index) => (
              <span key={move} style={{ opacity: 1 - index * 0.2 }}>
                <Chip>{move}</Chip>
              </span>
            ))}
            <span className="px-1 text-xs text-muted">…</span>
          </div>
        }
        note="A probability for each possible next move. Which one gets played comes next."
      />
    </div>
  );
}
