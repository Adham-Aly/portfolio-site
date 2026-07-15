import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Adham Aly, spanning machine learning, low-level systems, and full-stack web.",
};

export default function ProjectsPage() {
  return (
    <section className="wrap py-16 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight tracking-[-0.015em] lowercase">
          projects
        </h1>
        <p className="mt-4 text-muted">
          a few things i&rsquo;ve designed, built, and shipped.
        </p>
      </header>

      <ul className="mt-14 space-y-12">
        {projects.map((project) => (
          <li key={project.title} className="max-w-2xl">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-xl sm:text-2xl">
                {/* Placeholder link — real project URL goes in src/lib/projects.ts */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  {project.title}
                </a>
              </h2>
              <span className="text-sm text-muted">
                {project.stack.join("  ·  ")}
              </span>
            </div>
            {project.subtitle ? (
              <p className="mt-1 text-sm italic text-muted">{project.subtitle}</p>
            ) : null}
            <p className="mt-3 leading-relaxed text-foreground/85">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
