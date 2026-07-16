import { siteConfig } from "@/lib/site";
import { experience } from "@/lib/experience";

export default function Home() {
  return (
    <section className="wrap pt-20 pb-28 sm:pt-28 lg:pt-36">
      <h1 className="text-[clamp(2rem,6vw,3rem)] leading-[0.95] tracking-[-0.02em] lowercase">
        adham aly
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl lowercase">
        {siteConfig.tagline}
      </p>

      <div className="mt-16 max-w-2xl sm:mt-20">
        <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
          experience
        </h2>

        <div className="mt-6 space-y-14">
          {experience.map((role) => (
            <div key={`${role.role}-${role.organization}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl sm:text-2xl">
                  {/* Placeholder link — add a URL in src/lib/experience.ts */}
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline"
                  >
                    {role.role}
                  </a>
                </h3>
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
                    <span
                      aria-hidden
                      className="mt-[0.15em] select-none text-muted"
                    >
                      –
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
