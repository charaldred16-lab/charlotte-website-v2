# Ocado case-study review changes

This revision applies the engineering-manager review before the case study is added to the live project.

## Content

- Tightened both context sections so the checkout insight is not repeated across several paragraphs.
- Shortened the journey introduction.
- Renamed the journey markers to **Research direction** and **Original proposal**.
- No screenshots, customer quotations, metrics or research artefacts have been added.

## Readability

- Increased the journey marker text from 11px to 12px.
- Slightly reduced its letter spacing so the labels are easier to scan on mobile.

## Testing

- Playwright now builds the production site itself before starting the test server.
- `npx playwright test` and individual filtered tests therefore work from a clean checkout.
- The Ocado test checks that no case-study evidence gallery exists, rather than banning every image that might later be used by a shared site component.
