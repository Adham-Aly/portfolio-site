import { siteConfig } from "@/lib/site";

const { github, linkedin, resume, email } = siteConfig.links;

const externalLinks = [
  { label: "GitHub", href: github },
  { label: "LinkedIn", href: linkedin },
  { label: "Résumé", href: resume },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap flex flex-wrap items-center gap-x-6 gap-y-3 py-10 text-sm text-muted">
        {externalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${email}`}
          className="transition-colors hover:text-foreground"
        >
          Email
        </a>
        <span className="w-full text-muted/70 sm:ml-auto sm:w-auto">
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
      </div>
    </footer>
  );
}
