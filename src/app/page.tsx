import { siteConfig } from "@/lib/site";
import { experience } from "@/lib/experience";

export default function Home() {
  return (
    <div>
      <h1 className="text-lg font-bold">adham aly</h1>

      <p className="mt-6 leading-relaxed">{siteConfig.tagline}</p>

      <section className="mt-8">
        <p className="text-muted">experience</p>

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
    </div>
  );
}
