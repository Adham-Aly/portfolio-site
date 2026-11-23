import { ChessBoard } from "./chess-board";

// Lichess opening explorer, Lichess database, blitz + rapid + classical,
// read on 22 November 2026. Each band is the average rating of the two
// players (1200 = 1200–1399, 2000 = 2000–2199). "Other" is what the listed
// moves leave of 100%. The engine's choice is the Lichess cloud evaluation's
// top line (depth 50).
const BANDS = [
  { key: "low", label: "Rated 1200–1399", games: "2.6M games", color: "#bd5b3a" },
  { key: "high", label: "Rated 2000–2199", games: "290K games", color: "#24689c" },
] as const;

const MOVES: {
  san: string;
  note?: string;
  share: { low: number; high: number };
}[] = [
  { san: "Nxd4", note: "the engine’s pick", share: { low: 39, high: 45 } },
  { san: "Nxe5", note: "grabs the pawn: the trap", share: { low: 27, high: 15 } },
  { san: "c3", share: { low: 10, high: 14 } },
  { san: "d3", share: { low: 10, high: 5 } },
  { san: "O-O", share: { low: 6, high: 16 } },
  { san: "Other", share: { low: 8, high: 5 } },
];

// Bars are drawn against 50% rather than 100% so the differences are visible;
// every bar carries its value, so nothing is read off an axis.
const SCALE_MAX = 50;

/** What players at two rating bands actually played in one position. */
export function MoveChoices() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
      <div className="mx-auto w-52 shrink-0 sm:mx-0 sm:w-48">
        <ChessBoard
          fen="r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4"
          label="Chess position after 1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4, White to move. An arrow shows the knight on f3 taking the pawn on e5."
          arrows={[{ from: "f3", to: "e5" }]}
        />
        <p className="mt-1.5 text-center text-xs leading-snug text-muted">
          1. e4 e5 2. Nf3 Nc6
          <br />
          3. Bc4 Nd4, White to move
        </p>
      </div>

      <div className="min-w-0 flex-1">
        <ul
          aria-hidden="true"
          className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted"
        >
          {BANDS.map((band) => (
            <li key={band.key} className="flex items-center gap-1.5">
              <span
                className="inline-block h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: band.color }}
              />
              {band.label}
              <span className="opacity-80">({band.games})</span>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="mt-3 space-y-3">
          {MOVES.map((move) => (
            <div key={move.san}>
              <p className="text-sm leading-snug">
                <span className={move.san === "Other" ? "text-muted" : "font-bold"}>
                  {move.san}
                </span>
                {move.note ? (
                  <span className="text-xs italic text-muted"> · {move.note}</span>
                ) : null}
              </p>
              <div className="mt-1 space-y-[2px]">
                {BANDS.map((band) => {
                  const value = move.share[band.key];
                  return (
                    <div key={band.key} className="flex items-center gap-2">
                      <div
                        className="h-2 rounded-r-[4px]"
                        style={{
                          width: `${(value / SCALE_MAX) * 85}%`,
                          backgroundColor: band.color,
                        }}
                      />
                      <span className="text-[0.6875rem] leading-none tabular-nums text-muted">
                        {value}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <table className="sr-only">
          <caption>
            Share of games in which White played each move, by rating band
          </caption>
          <thead>
            <tr>
              <th scope="col">Move</th>
              {BANDS.map((band) => (
                <th key={band.key} scope="col">
                  {band.label} ({band.games})
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOVES.map((move) => (
              <tr key={move.san}>
                <th scope="row">
                  {move.san}
                  {move.note ? `, ${move.note}` : ""}
                </th>
                {BANDS.map((band) => (
                  <td key={band.key}>{move.share[band.key]}%</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
