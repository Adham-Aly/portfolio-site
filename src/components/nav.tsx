"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-hairline pb-4 text-lg italic leading-tight sm:w-40 sm:shrink-0 sm:flex-col sm:items-end sm:gap-x-0 sm:gap-y-4 sm:border-b-0 sm:border-r sm:pb-1 sm:pr-8 sm:text-right">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`lowercase transition-colors hover:text-foreground ${
              isActive ? "text-foreground" : "text-muted"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
