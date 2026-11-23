import type { ReactNode } from "react";

/** A numbered figure with a caption, set off from the surrounding prose. */
export function Figure({
  number,
  caption,
  children,
}: {
  number: number;
  caption: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className="py-4">
      {children}
      <figcaption className="mt-4 text-sm leading-relaxed text-muted">
        <span className="font-bold text-foreground">Figure {number}.</span>{" "}
        {caption}
      </figcaption>
    </figure>
  );
}

// Shared building blocks for the box-and-arrow diagrams.

export function Node({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  // "open" marks a part of the design that hasn't been decided yet.
  variant?: "default" | "emphasis" | "open";
  className?: string;
}) {
  const styles = {
    default: "border-line bg-surface",
    emphasis: "border-foreground bg-surface",
    open: "border-dashed border-muted/70 bg-transparent",
  }[variant];
  return (
    <div
      className={`rounded-md border px-3 py-2 text-sm leading-snug ${styles} ${className}`}
    >
      {children}
    </div>
  );
}

/** A small right-pointing arrow; rotate it with classes (e.g. per breakpoint). */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-muted ${className}`}
    >
      <path d="M2.5 8h10.5" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

/** "Not decided yet" key for diagrams that use dashed boxes. */
export function OpenKey() {
  return (
    <p className="mt-4 flex items-center gap-2 text-xs text-muted">
      <span
        aria-hidden="true"
        className="inline-block h-3 w-5 rounded-[3px] border border-dashed border-muted/70"
      />
      Dashed: not decided yet
    </p>
  );
}

/** A downward arrow between stacked boxes. */
export function Down() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1">
      <Arrow className="rotate-90" />
    </div>
  );
}
