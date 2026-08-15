# About page engineering review

Status: ready for local `npm run quality`.

The reviewed implementation addresses the four issues identified in the engineering pass.

## Fixed

1. Shared inner-page header styling no longer lives in `case-study.css`; it has been moved to `src/app/globals.css`.
2. About metadata now explicitly defines the Open Graph website type/site name and complete Twitter title/description/card data.
3. Person JSON-LD is serialised with `<` escaped to `\\u003c`, matching the existing safe pattern used elsewhere in the project.
4. `.about-page { overflow: clip; }` has been removed, so responsive overflow failures cannot be hidden.

## Test coverage

The About Playwright test now loads `/about` at:

- 390 × 844 (mobile)
- 834 × 1112 (tablet)
- 1440 × 1000 (desktop)

At each width it verifies the page loads, approved core content remains visible, there is exactly one `View selected work` link, and the document has no horizontal overflow.

## Validation performed in the packaging environment

- 22 TypeScript/TSX files parsed with the installed TypeScript compiler with no syntax diagnostics.
- `globals.css`, `about.css`, and `case-study.css` all have balanced braces.
- Shared `site-header--inner-page` CSS rules now exist only in `globals.css`.
- No `overflow: clip` remains in `about.css`.
- About metadata includes `siteName`, complete Twitter metadata, and the shared JSON-LD escaping pattern.

A full Next.js/Playwright run is not available in the packaging environment because project dependencies are not installed there. The authoritative check remains:

```powershell
npm run quality
```

## Deferred housekeeping

The project still declares Node `24.x` while `@types/node` is `^22.0.0`. This is pre-existing and does not block the About page. Align it during a dependency-maintenance pass, because doing so should also update the repository's real `package-lock.json`.
