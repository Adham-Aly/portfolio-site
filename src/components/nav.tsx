"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <div className="wrap flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:py-8">
        <Link
          href="/"
          className="text-lg tracking-tight text-foreground transition-opacity hover:opacity-60"
        >
          {siteConfig.shortName}
        </Link>

        <nav className="flex flex-wrap items-baseline gap-x-5 gap-y-1.5 sm:gap-x-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
