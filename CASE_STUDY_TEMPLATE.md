# Reusable case-study template

Case-study content lives in:

```text
src/content/case-studies/
```

Each story exports an object that `satisfies CaseStudyContent`, giving the content file full type checking without widening its values.

## Core modules

Every story contains:

- client and category
- title and introduction
- project details
- context sections

## Optional modules

Use only the modules the story genuinely needs:

- `journey` — a compact summary in the hero
- `quote` — an editorial statement, not an invented customer quotation
- `reframe` — compares an initial problem framing with a research-informed one
- `decisionJourney` — shows where different interventions sit in a journey
- `evidence` — genuine screenshots or artefacts with intrinsic dimensions
- `delivery` — the main stages of the work
- `feature` — a pilot, result or key outcome, with an optional genuine image
- `principles` — the decisions or lessons that shaped the work
- `nextProject` — links to another case study

## Adding a new story

1. Create a typed content file in `src/content/case-studies/`.
2. Create a route under `src/app/work/<slug>/page.tsx`.
3. Use `createCaseStudyMetadata`, `createCaseStudyJsonLd` and `CaseStudyLayout`.
4. Add the route to `src/app/sitemap.ts`.
5. Add a Playwright test for the story's most important claims and layout behaviour.
6. Run `npm run quality`.

## Evidence rule

Do not invent screenshots, UI states, research outputs, customer quotations, companies, metrics or results.

When genuine artefacts do not exist, use editorial structures such as a problem reframe or journey map. These should explain the reasoning without resembling fabricated product evidence.
