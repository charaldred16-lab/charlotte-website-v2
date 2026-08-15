# About page build notes

The About page has been implemented from the approved responsive direction while reusing the site's existing design system rather than copying generated mock-up details literally.

## Design decisions preserved

- Asymmetric desktop hero with a smaller, calmer H1.
- Stacked tablet/mobile hero for readability.
- Blush `How I work` section with one purposeful divider before the differentiator statement.
- No icons, photography, diagrams, invented evidence, decorative arrows, or company-logo cards.
- Hertz and Ocado Technology are shown as experience, followed by one `View selected work` link.
- Compact contact panel with the existing primary button style.
- Mobile content stays visible; no accordions were introduced.

## Existing system reused

- `SiteHeader` and its established desktop/mobile breakpoint.
- `SiteFooter` and its responsive behaviour.
- Newsreader and Manrope from the root `next/font` configuration.
- Existing colour tokens, container widths, focus states, text-link style, and primary button style.

The shared navigation points `About` to `/about`. The active inner-page navigation styling now lives in `globals.css`, where it belongs, instead of depending on the case-study stylesheet.

## Engineering review changes

- Added complete About Open Graph and Twitter metadata rather than relying on shallow inheritance of nested metadata objects.
- Sanitised the About Person JSON-LD using the same `<` escaping pattern as the homepage and case studies.
- Removed page-level `overflow: clip` so horizontal-overflow tests cannot be masked by CSS.
- Moved shared active-navigation rules from `case-study.css` into `globals.css`.
- Expanded About Playwright coverage to 390px, 834px, and 1440px viewports.

## Accessibility and SEO

- About navigation receives `aria-current="page"` on the About page.
- Main content keeps the existing skip-link target (`#main-content`).
- Semantic section headings and articles are used.
- About metadata, canonical URL, Person JSON-LD, and sitemap entry are included.
- Playwright checks the single Selected Work link and horizontal overflow at mobile, tablet, and desktop widths.
