# Charlotte Aldred consultancy website

Reviewed Next.js App Router implementation of the approved responsive homepage and Hertz case study.

## Included

- Locked homepage copy and responsive layouts
- Responsive Hertz case study using genuine evidence screenshots
- Newsreader and Manrope via `next/font`
- Accessible navigation, skip link, focus management and reduced-motion support
- Branded not-found and recoverable error states
- SEO metadata, JSON-LD, robots and sitemap
- Reusable typed case-study content system
- Security response headers and the `X-Powered-By` header disabled
- Automated GitHub quality workflow
- Playwright browser checks for navigation, carousel, evidence, overflow, 404 and security headers
- Homepage and case-study CSS kept outside page/component code

## Requirements

- Node.js 24 LTS
- npm

The project pins the Node major version in both `.nvmrc` and `package.json`.

## Install and run

```bash
npm install
npx playwright install chromium
npm run quality
npm run dev
```

Open `http://localhost:3000`.

Commands:

- `npm run check` — ESLint, TypeScript and production build
- `npm run test:e2e` — production build followed by Playwright browser tests
- `npm run quality` — lint, typecheck, production build and browser tests

## Project structure

```text
src/
├── app/                         routes, metadata and global entry styles
├── components/                  shared interactive and layout components
├── content/case-studies/        typed case-study content
├── lib/                         site and case-study helpers
└── styles/case-study.css        reusable case-study presentation

tests/site.spec.ts               browser smoke tests
.github/workflows/quality.yml    automated GitHub checks
```

The Hertz route is intentionally small. Its content lives in:

```text
src/content/case-studies/hertz.ts
```

The reusable page structure lives in:

```text
src/components/case-study/CaseStudyLayout.tsx
```

## Production environment variables

Create `.env.local` locally and add the same values in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://charlottealdred.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@charlottealdred.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/charlotte-aldred-b055151b/
```

`NEXT_PUBLIC_SITE_URL` is used for canonical metadata, Open Graph URLs, robots, JSON-LD and the sitemap.

## Before public launch

The About, Insights and Ocado case-study routes are still placeholders and are marked `noindex`. Build those pages or temporarily remove their public links before promoting the finished site.

Commit the updated `package-lock.json` after installation so local, GitHub and Vercel builds resolve the same dependency tree.
