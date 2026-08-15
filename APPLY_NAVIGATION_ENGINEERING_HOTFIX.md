# Navigation engineering hotfix

This hotfix fixes the two engineering issues identified after the Services review.

## Changes

### Shared navigation
The single shared navigation source is now:

1. Home
2. About
3. Services
4. Selected Work
5. Insights
6. Contact

Because both `SiteHeader` and `SiteFooter` read this array, the correction applies site-wide.

Case-study pages now mark `Selected Work` as their active navigation area rather than the old `Work` label.

### Regression tests
The Playwright suite now protects:
- the agreed navigation labels and order;
- `aria-current="page"` on Services;
- the Services contact CTA retaining a `mailto:` destination;
- the existing responsive content and overflow checks.

## Apply

1. Stop any running dev/test server with `Ctrl + C`.
2. Extract this ZIP outside the project.
3. Copy everything inside the extracted folder into:

```text
C:\Users\chara\charlotte-website-v2
```

4. Allow Windows to merge folders and replace the three matching files.

No npm install is required.

## Verify

Run:

```powershell
Select-String -Path .\src\lib\site.ts -Pattern '"Home"|"Selected Work"|"Contact"'
```

Then:

```powershell
npm run quality
```

If it passes, check the site locally:

```powershell
npm run dev
```

Review `/`, `/services`, `/about`, and one case-study page. In particular:
- header/footer order is Home / About / Services / Selected Work / Insights / Contact;
- Services is active on `/services`;
- Selected Work is active on case-study pages.

Then commit:

```powershell
git add .
git commit -m "Align shared navigation and strengthen regression tests"
git push origin main
```
