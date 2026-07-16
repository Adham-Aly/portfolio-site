import { siteConfig } from "@/lib/site";

const { github, linkedin, resume, email } = siteConfig.links;

const links = [
  { label: "github", href: github, external: true },
  { label: "linkedin", href: linkedin, external: true },
  { label: "résumé", href: resume, external: true },
  { label: "email", href: `mailto:${email}`, external: false },
];

export function Footer() {
  return (
    <footer className="mt-14 flex flex-wrap gap-x-5 gap-y-2 text-sm italic text-muted">
      {links.map((link) => (
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
    </footer>
  );
}
