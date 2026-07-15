# portfolio-site

The personal portfolio of Adham Aly — an ultra-minimal, type-driven site built
with [Next.js](https://nextjs.org) (App Router).

Set in [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville)
on a warm paper background, with pages for home, projects, experience, and a
blog.

## Tech stack

- **[Next.js 16](https://nextjs.org)** — App Router, server components, Turbopack
- **[React 19](https://react.dev)**
- **[TypeScript](https://www.typescriptlang.org)** — strict mode
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[ESLint 9](https://eslint.org)** — `eslint-config-next`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command         | Description                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Start the dev server (with hot reload) |
| `npm run build` | Create an optimized production build   |
| `npm run start` | Serve the production build             |
| `npm run lint`  | Lint the codebase with ESLint          |

## Project structure

```
public/
  resume.pdf                     # Hosted résumé (linked in the footer)
src/
  app/
    layout.tsx                   # Root layout: font, metadata, nav + footer
    page.tsx                     # Home
    globals.css                  # Theme tokens + Tailwind import
    projects/page.tsx            # Projects
    experience/page.tsx          # Experience
    blog/page.tsx                # Blog index
    blog/hello-world/page.tsx    # A blog post
  components/
    nav.tsx                      # Top navigation (active-link aware)
    footer.tsx                   # GitHub / LinkedIn / Résumé / Email
  lib/
    site.ts                      # Name, tagline, and external links
    projects.ts                  # Project entries
    experience.ts                # Experience entries
    posts.ts                     # Blog post registry
```

## Editing content

- **Links to projects / experience** — the entries in `src/lib/projects.ts` and
  `src/lib/experience.ts` ship with empty `href: ""` placeholders. Paste a URL
  in and the title becomes a live link (opens in a new tab).
- **Profile links** — GitHub, LinkedIn, résumé, and email live in
  `src/lib/site.ts`.
- **New blog post** — add an entry to `src/lib/posts.ts` and create
  `src/app/blog/<slug>/page.tsx`.
- **Résumé** — replace `public/resume.pdf`.

## Deployment

Optimized for [Vercel](https://vercel.com/new). Any platform that supports a
Node.js Next.js build (`npm run build` → `npm run start`) also works.
