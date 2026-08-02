# Hertz implementation synchronisation hotfix

The test has revealed a real implementation mismatch: the route loads, but the current built page does not contain the reusable evidence section. This hotfix replaces the complete Hertz implementation as one consistent unit.

## Included

- Hertz route
- Typed Hertz content
- Reusable case-study layout and types
- Case-study metadata helper
- Case-study CSS and root CSS import
- Four genuine Hertz image assets
- A browser test based on the visible evidence images rather than internal CSS class names

## Apply

1. Stop any running server with `Ctrl + C`.
2. Extract the ZIP outside the project.
3. Copy everything inside the extracted folder into:

```text
C:\Users\chara\charlotte-website-v2
```

4. Allow Windows to merge folders and replace matching files.

Do not copy the outer hotfix folder into the project.

## Verify the source before testing

Run:

```powershell
Select-String -Path .\src\components\case-study\CaseStudyLayout.tsx -Pattern 'className="cs-evidence"'
Select-String -Path .\src\content\case-studies\hertz.ts -Pattern 'driving-licence-front.png'
Select-String -Path .\src\app\layout.tsx -Pattern 'case-study.css'
```

Each command must return a matching line.

Then clear the old build:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
```

No npm installation is needed.

## Test

```powershell
npm run typecheck
npx playwright test tests/site.spec.ts -g "Hertz case study"
npm run quality
```
