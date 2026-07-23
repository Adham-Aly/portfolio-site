import { siteConfig } from "@/lib/site";
import { experience } from "@/lib/experience";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-bold">adham aly</h1>

      <p className="mt-6 leading-relaxed">{siteConfig.tagline}</p>

      <section className="mt-12">
        <h2 className="text-muted">experience</h2>

        <div className="mt-3 space-y-8">
          {experience.map((role) => (
            <div key={`${role.role}-${role.organization}`}>
              {/* Placeholder link — add a URL in src/lib/experience.ts */}
              <a
                href={role.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline"
              >
                {role.role}
              </a>
              <p className="mt-0.5 text-sm text-muted">
                {role.organization} · {role.location} · {role.period}
              </p>
              <ul className="mt-3 space-y-1.5">
                {role.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2.5 leading-relaxed">
                    <span aria-hidden className="select-none text-muted">
                      ›
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-muted">projects</h2>

        <div className="mt-3 space-y-8">
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
      </section>
    </div>
  );
}
