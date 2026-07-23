import { siteConfig } from "@/lib/site";

const { github, linkedin, resume, email } = siteConfig.links;

const externalLinks = [
  { label: "GitHub", href: github, external: true },
  { label: "LinkedIn", href: linkedin, external: true },
  { label: "Resume", href: resume, external: true },
  { label: "Email", href: `mailto:${email}`, external: false },
];

export function Header() {
  return (
    <header className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm italic text-muted">
      {externalLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </header>
  );
}
