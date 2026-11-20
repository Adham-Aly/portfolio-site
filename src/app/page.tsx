import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/lib/site";
import { homeJsonLd } from "@/lib/structured-data";
import { currentWork } from "@/lib/current-work";
import { experience } from "@/lib/experience";
import { projects } from "@/lib/projects";

// Title, description, openGraph and twitter are all inherited from the root
// layout, which already describes the site as a whole. Only the canonical is
// page-specific.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((highlight, index) => (
        <li key={index} className="flex gap-2.5 leading-relaxed">
          <span aria-hidden className="select-none text-muted">
            ›
          </span>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div>
      <JsonLd data={homeJsonLd()} />

      <PageHeader title="Adham Aly" nav="blog" />

      <p className="mt-6 leading-relaxed">{siteConfig.tagline}</p>

      <section className="mt-12">
        <h2 className="text-muted">Currently Working On</h2>

        <div className="mt-3 space-y-8">
          {currentWork.map((work) => (
            <div key={work.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <span>{work.title}</span>
                <span className="text-sm text-muted">
                  {work.stack.join(" · ")}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                <span className="italic">{work.subtitle}</span>
                {work.postSlug ? (
                  <>
                    {" · "}
                    <Link
                      href={`/blog/${work.postSlug}`}
                      className="transition-colors hover:text-foreground"
                    >
                      Read more
                    </Link>
                  </>
                ) : null}
              </p>
              <Highlights items={work.highlights} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-muted">Experience</h2>

        <div className="mt-3 space-y-8">
          {experience.map((role) => (
            <div key={`${role.role}-${role.organization}`}>
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
              <Highlights items={role.highlights} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-muted">Projects</h2>

        <div className="mt-3 space-y-8">
          {projects.map((project) => (
            <div key={project.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
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
              {project.subtitle || project.repo ? (
                <p className="mt-0.5 text-sm text-muted">
                  {project.subtitle ? (
                    <span className="italic">{project.subtitle}</span>
                  ) : null}
                  {project.subtitle && project.repo ? " · " : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground"
                    >
                      Source
                    </a>
                  ) : null}
                </p>
              ) : null}
              <Highlights items={project.highlights} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
