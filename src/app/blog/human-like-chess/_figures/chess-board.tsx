import { piecePaths, type PieceCode } from "./pieces";

const LIGHT_SQUARE = "#e9e1cf";
const DARK_SQUARE = "#c8b99b";
const WHITE_PIECE = "#fbf9f4";
const INK = "#1c1b18";

type Square = `${"a" | "b" | "c" | "d" | "e" | "f" | "g" | "h"}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;

export type BoardArrow = { from: Square; to: Square };

// Centre of a square in board units (a8 is the top-left square).
function centre(square: Square) {
  const file = square.charCodeAt(0) - 97;
  const rank = Number(square[1]);
  return { x: file + 0.5, y: 8 - rank + 0.5 };
}

// Reads the piece-placement field of a FEN string into (row, col, piece).
function parsePlacement(fen: string) {
  const pieces: { row: number; col: number; code: PieceCode }[] = [];
  fen
    .split(" ")[0]
    .split("/")
    .forEach((rank, row) => {
      let col = 0;
      for (const char of rank) {
        if (/\d/.test(char)) {
          col += Number(char);
          continue;
        }
        const colour = char === char.toUpperCase() ? "w" : "b";
        pieces.push({ row, col, code: `${colour}${char.toUpperCase()}` as PieceCode });
        col += 1;
      }
    });
  return pieces;
}

/**
 * A static chess diagram drawn from a FEN string, from White's side. Scales to
 * its container's width.
 */
export function ChessBoard({
  fen,
  label,
  arrows = [],
}: {
  fen: string;
  // Spoken description of the position for screen readers.
  label: string;
  arrows?: BoardArrow[];
}) {
  return (
    <svg
      viewBox="0 0 8 8"
      role="img"
      aria-label={label}
      className="block h-auto w-full rounded-[3px]"
    >
      {Array.from({ length: 64 }, (_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        return (
          <rect
            key={i}
            x={col}
            y={row}
            width={1}
            height={1}
            fill={(row + col) % 2 === 0 ? LIGHT_SQUARE : DARK_SQUARE}
          />
        );
      })}

      {parsePlacement(fen).map(({ row, col, code }) => (
        <g key={`${row}-${col}`} transform={`translate(${col} ${row})`}>
          {code.startsWith("w") ? (
            <>
              <path d={piecePaths[`b${code[1]}` as PieceCode]} fill={WHITE_PIECE} />
              <path d={piecePaths[code]} fill={INK} />
            </>
          ) : (
            <path d={piecePaths[code]} fill={INK} />
          )}
        </g>
      ))}

      {arrows.map(({ from, to }) => {
        const a = centre(from);
        const b = centre(to);
        const length = Math.hypot(b.x - a.x, b.y - a.y);
        const ux = (b.x - a.x) / length;
        const uy = (b.y - a.y) / length;
        // The shaft stops where the head begins; the head's tip stops short
        // of the target square's centre so it doesn't cover the piece.
        const tip = { x: b.x - ux * 0.12, y: b.y - uy * 0.12 };
        const base = { x: tip.x - ux * 0.42, y: tip.y - uy * 0.42 };
        const half = 0.22;
        return (
          <g key={`${from}-${to}`} opacity={0.62}>
            <line
              x1={a.x}
              y1={a.y}
              x2={base.x}
              y2={base.y}
              stroke={INK}
              strokeWidth={0.16}
              strokeLinecap="round"
            />
            <polygon
              points={`${tip.x},${tip.y} ${base.x - uy * half},${base.y + ux * half} ${base.x + uy * half},${base.y - ux * half}`}
              fill={INK}
            />
          </g>
        );
      })}
    </svg>
  );
}
