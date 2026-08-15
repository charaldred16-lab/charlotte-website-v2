# Services page build notes

## Approved direction implemented

The Services page is deliberately problem-led rather than a service catalogue.

Structure:

1. Hero: "I help teams get clear on what matters and confident about what to do next."
2. Four recognisable client situations in a restrained 2 × 2 editorial layout on desktop.
3. A quiet conclusion: the approach is shaped around the question.
4. Ongoing fractional support.
5. "Tell me what’s happening" contact CTA.

## Final design refinements

- Hero H1 is intentionally around 8–10% smaller than the earlier mock-up.
- No decorative rule sits beside the approach statement.
- No icons, diagrams, numbered frameworks, accordions, arrows or repeated case-study examples.
- The problem grid has no vertical divider; only a subtle row separator on desktop.
- Mobile keeps all problem content visible and gives the CTA a full-width button.
- Existing shared header, footer, fonts, buttons, colour tokens and navigation behaviour are reused.

## Site integration

- Added `/services`.
- Changed the existing `How I help` navigation item to `Services` and pointed it to `/services`.
- Added `/services` to the sitemap.
- Added metadata, Open Graph, Twitter and Service JSON-LD.
- Added Playwright coverage at 390px, 834px and 1440px.
