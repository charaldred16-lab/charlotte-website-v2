# Build review

Reviewed on 30 July 2026.

## Checks completed

- Parsed all 13 TypeScript/TSX files with the TypeScript compiler: no syntax errors.
- Confirmed every homepage anchor target exists.
- Confirmed the About, Insights and both case-study routes exist.
- Confirmed approved image assets are present with valid dimensions.
- Reviewed the responsive menu and carousel implementation for focus, keyboard, reduced-motion and live status behaviour.
- Pinned Next.js, React and React DOM versions and added a Node.js requirement.
- Added canonical, Open Graph and Twitter metadata plus a 1200×630 share image.
- Added more descriptive accessible labels to repeated article and case-study links.
- Marked placeholder content routes `noindex` until they are completed.

## Check still required in a normal npm environment

The sandbox package registry does not provide Next.js, so a real dependency install and production build could not be completed here.

Run:

```bash
npm install
npm run check
```

Then commit the generated `package-lock.json`.

## Public-launch blocker

The About, Insights and case-study routes are placeholders. They are protected from indexing, but users can still reach them from the homepage. Build those pages or temporarily remove their links before public launch.
