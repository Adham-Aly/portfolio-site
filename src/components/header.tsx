"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

const { github, linkedin, resume, email } = siteConfig.links;

const externalLinks = [
  { label: "github", href: github, external: true },
  { label: "linkedin", href: linkedin, external: true },
  { label: "resume", href: resume, external: true },
  { label: "email", href: `mailto:${email}`, external: false },
];

export function Header() {
  const pathname = usePathname();
  const onBlog = pathname.startsWith("/blog");

  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
      {/* The site's only internal destination: blog from home, home from the blog. */}
      <Link href={onBlog ? "/" : "/blog"} className="italic hover-underline">
        {onBlog ? "adham aly" : "blog"}
      </Link>

      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm italic text-muted">
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
      </nav>
    </header>
  );
}
