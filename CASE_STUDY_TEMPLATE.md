# Reusable case-study system

Case studies use typed content rather than placing the full story directly in a route file.

## Files

- `src/content/case-studies/types.ts` — shared content contract
- `src/content/case-studies/hertz.ts` — Hertz story content
- `src/components/case-study/CaseStudyLayout.tsx` — reusable presentation
- `src/lib/case-study.ts` — metadata, URL and JSON-LD helpers
- `src/styles/case-study.css` — case-study styling
- `src/app/work/hertz-keyless-rental/page.tsx` — small route entry point

No CSS is embedded in the route or component code.

## Create another story

1. Duplicate `src/content/case-studies/hertz.ts` and rename it.
2. Replace only the genuine content and image details.
3. Keep `satisfies CaseStudyContent` at the end so TypeScript checks the story structure.
4. Create a route under `src/app/work/<slug>/page.tsx` that uses the shared metadata and layout helpers.
5. Add the published route to `src/app/sitemap.ts`.
6. Add or update the homepage card in `src/lib/site.ts`.

## Optional modules

A story can include or omit:

- journey summary
- quote
- evidence gallery
- delivery process
- featured result or pilot, with or without an image
- principles
- next-project link

The visual system should remain consistent, but projects should not be forced into identical narratives.

## Images

Every image declares its genuine width and height. Evidence screenshots link to the original full-size file. When a story has exactly three evidence images, tablet widths show two above and one centred beneath; mobile uses one readable column.
