# Charlotte Aldred consultancy homepage

Reviewed Next.js App Router implementation of the approved desktop, tablet and mobile homepage.

## Included

- Locked homepage copy and section order
- Newsreader and Manrope via `next/font`
- Responsive desktop, tablet and mobile layouts
- Accessible mobile navigation with focus management, Escape-to-close and close-on-navigation behaviour
- Mobile Selected Work swipe carousel with live `1 of 2` status
- Focus-visible and reduced-motion support
- SEO metadata, canonical URL, Open Graph image, Twitter card, JSON-LD, robots and sitemap
- Approved hero and worked-with assets
- Placeholder routes for About, Insights and both case studies, marked `noindex` until their content is complete
- Pinned production dependencies and a Node.js version requirement

## Run locally

Next.js 16 requires Node.js 20.9 or newer. Node 22 is recommended for this project.

```bash
nvm use
npm install
npm run check
npm run dev
```

Open `http://localhost:3000`.

`npm run check` runs ESLint, TypeScript checking and a production build.

## Add to the existing website

The main implementation files are:

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/WorkCarousel.tsx`
- `src/lib/site.ts`
- the image files in `public/`

Copy these into the corresponding folders of the existing Next.js project, preserving existing analytics, deployment settings and any routes already in use.

## Production environment variables

Create `.env.local` locally and add the same values in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://charlottealdred.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@charlottealdred.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/charlotte-aldred-b055151b/
```

`NEXT_PUBLIC_SITE_URL` is important because it is used for canonical metadata, Open Graph URLs, robots and the sitemap. The code can fall back to Vercel deployment variables, but setting the production domain explicitly is preferable.

## Before public launch

The homepage is complete, but the About, Insights and two case-study routes are intentionally placeholders. They are marked `noindex`, but they are still reachable from homepage links. Before making the site public, either:

1. build those pages, or
2. temporarily remove their homepage links/sections.

Only show Insights articles that are genuinely published.

After the first successful install, commit the generated `package-lock.json` so Vercel and local builds use the same dependency versions.
