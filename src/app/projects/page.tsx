import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Adham Aly, spanning machine learning, low-level systems, and full-stack web.",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-lg font-bold lowercase">projects</h1>
      <p className="mt-3 text-muted">
        a few things i&rsquo;ve designed, built, and shipped.
      </p>

      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              {/* Placeholder link — real project URL goes in src/lib/projects.ts */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline"
              >
                {project.title}
              </a>
              <span className="text-sm text-muted">
                {project.stack.join(" · ")}
              </span>
            </div>
            {project.subtitle ? (
              <p className="text-sm italic text-muted">{project.subtitle}</p>
            ) : null}
            <p className="mt-1.5 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
