# Engineering changes

## Implemented

1. **Automated quality checks**
   - Added `.github/workflows/quality.yml`.
   - Runs a clean install, production build and Playwright tests on pushes to `main` and pull requests.

2. **Runtime alignment**
   - Standardised local, GitHub and Vercel-compatible runtime declarations on Node.js 24 LTS.

3. **Typed case-study content**
   - Moved Hertz content out of the route file.
   - Added a reusable `CaseStudyContent` contract and metadata/JSON-LD helpers.

4. **CSS maintainability**
   - Moved the reusable case-study system out of the large homepage stylesheet into `src/styles/case-study.css`.
   - CSS remains separate from JSX.

5. **Browser tests**
   - Added Playwright checks for the homepage, mobile menu, work carousel, Hertz evidence, horizontal overflow, security headers and 404 handling.

6. **Accessibility and failure states**
   - Added a keyboard skip link with explicit focus transfer.
   - Added branded `not-found.tsx` and recoverable `error.tsx` pages.

7. **Security hardening**
   - Disabled the `X-Powered-By` header.
   - Added conservative headers for content sniffing, framing, referrers, permissions and object/base restrictions.

## Deliberately not added

- A restrictive script/style CSP, because it would require careful coordination with Next.js inline runtime scripts and any future Google Analytics or Vercel Analytics setup.
- A CMS, database or generic page builder; the current site does not need that complexity.
- Large unit-test coverage for static copy; the browser smoke tests focus on failure-prone interactions and layouts.
