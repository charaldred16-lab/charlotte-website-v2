# Final engineering review

## Status

The project is suitable to merge after the local installation and quality commands in `APPLY_ENGINEERING_PATCH.md` pass.

## Improvements completed

- Node runtime aligned to Node.js 24 LTS
- GitHub Actions quality workflow
- Typed case-study content separated from route code
- Shared case-study metadata and JSON-LD helpers
- Case-study CSS separated from homepage/global CSS
- Keyboard skip link with focus transfer
- Branded 404 and recoverable error states
- Conservative security response headers
- Playwright smoke tests
- No inline CSS or component style blocks

## Static checks completed in the generation environment

- 23 TypeScript and TSX files transpiled without syntax diagnostics
- CSS braces balanced in both stylesheets
- Every main page target has `id="main-content"` and `tabIndex={-1}`
- No `style={{...}}`, embedded `<style>` or styled-jsx usage
- Required Hertz assets and routes are present

## Check that remains local

The authoritative check requires the npm packages and browser binary:

```powershell
npm install
npx playwright install chromium
npm run quality
```

The generation environment could not fetch `@playwright/test` from its restricted internal npm registry, so it could not create the updated lock file or execute the full Next.js/Playwright run. Commit the lock file created on your machine.
