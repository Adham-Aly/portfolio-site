import Link from "next/link";

// A pencil, for the one place on this site that is written rather than built.
function PencilIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M17.4 3.4 20.6 6.6 9 18.1 5 19l.9-4z" />
      <path d="M5.9 15 9 18.1" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M19 12H6" />
      <path d="M11.5 6.5 6 12l5.5 5.5" />
    </svg>
  );
}

/**
 * Page masthead: the title on the left, and the site's single other
 * destination on the right — both aligned to the content column so the
 * navigation belongs to the same grid as everything the reader is scanning.
 */
export function PageHeader({
  title,
  nav,
}: {
  title: string;
  nav: "blog" | "home";
}) {
  const toBlog = nav === "blog";

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h1 className="text-lg font-bold">{title}</h1>

      <Link
        href={toBlog ? "/blog" : "/"}
        className="group inline-flex items-center gap-1.5 text-sm"
      >
        {toBlog ? <PencilIcon /> : <ArrowLeftIcon />}
        <span className="underline-offset-4 group-hover:underline">
          {toBlog ? "Blog" : "Adham Aly"}
        </span>
      </Link>
    </div>
  );
}
