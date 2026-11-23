import type { ReactNode } from "react";
import { Arrow, Node } from "./figure";

function Flow({
  label,
  steps,
}: {
  label: ReactNode;
  steps: { text: ReactNode; variant?: "default" | "emphasis" }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.08em] text-muted">{label}</p>
      <div className="mt-2 flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-stretch sm:gap-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1.5 sm:flex-1 sm:flex-row sm:gap-2"
          >
            {index > 0 ? <Arrow className="rotate-90 sm:rotate-0" /> : null}
            <Node variant={step.variant} className="flex w-full items-center sm:h-full">
              {step.text}
            </Node>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Weakening a superhuman engine vs. learning from human games directly. */
export function TwoApproaches() {
  return (
    <div className="space-y-6">
      <Flow
        label="Top-down · today’s bots"
        steps={[
          { text: "A superhuman engine" },
          { text: "Handicapped: a shallower search, deliberately weaker moves" },
          {
            text: (
              <span className="text-muted">
                Weaker, but still plays like an engine
              </span>
            ),
          },
        ]}
      />
      <Flow
        label="Bottom-up · this project"
        steps={[
          { text: "Games played by 1200-rated humans" },
          { text: "A transformer learns to predict their moves" },
          { text: "Plays like a 1200-rated human", variant: "emphasis" },
        ]}
      />
    </div>
  );
}
