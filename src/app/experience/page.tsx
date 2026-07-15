import type { Metadata } from "next";
import { experience } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Leadership and work experience of Adham Aly.",
};

export default function ExperiencePage() {
  return (
    <section className="wrap py-16 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight tracking-[-0.015em] lowercase">
          experience
        </h1>
        <p className="mt-4 text-muted">where i&rsquo;ve been spending my time.</p>
      </header>

      <ul className="mt-14 space-y-14">
        {experience.map((role) => (
          <li key={`${role.role}-${role.organization}`} className="max-w-2xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-xl sm:text-2xl">
                {/* Placeholder link — add a URL in src/lib/experience.ts */}
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  {role.role}
                </a>
              </h2>
              <span className="text-sm text-muted">{role.period}</span>
            </div>
            <p className="mt-1 text-muted">
              {role.organization}
              <span className="mx-2 text-muted/60">·</span>
              {role.location}
            </p>
            <ul className="mt-4 space-y-2.5">
              {role.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex gap-3 leading-relaxed text-foreground/85"
                >
                  <span aria-hidden className="mt-[0.15em] select-none text-muted">
                    –
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
