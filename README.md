# portfolio-site

My personal portfolio, built with [Next.js](https://nextjs.org) (App Router).

Currently a minimal placeholder ("Hello, world") on a complete, production-ready
foundation — real content will be added incrementally.

## Tech stack

- **[Next.js 16](https://nextjs.org)** — App Router, server components, Turbopack
- **[React 19](https://react.dev)**
- **[TypeScript](https://www.typescriptlang.org)** — strict mode
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[ESLint 9](https://eslint.org)** — `eslint-config-next`

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start the dev server (with hot reload)  |
| `npm run build` | Create an optimized production build     |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Lint the codebase with ESLint           |

## Project structure

```
src/
  app/
    layout.tsx     # Root layout, fonts, and metadata
    page.tsx       # Home page
    globals.css    # Global styles + Tailwind import
public/            # Static assets
```

## Deployment

Optimized for [Vercel](https://vercel.com/new). Any platform that supports a
Node.js Next.js build (`npm run build` → `npm run start`) also works.
