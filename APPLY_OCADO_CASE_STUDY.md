# Apply the reviewed Ocado case study

This patch adds the Ocado offers case study and includes the final review improvements.

## 1. Back up the working project

From `C:\Users\chara\charlotte-website-v2`:

```powershell
git status
git switch -c backup-before-ocado-case-study
git push -u origin backup-before-ocado-case-study
git switch main
```

Commit any unfinished work before creating the backup branch.

## 2. Copy the patch

Extract the ZIP outside the website folder. Copy everything inside the extracted patch folder into:

```text
C:\Users\chara\charlotte-website-v2
```

Allow Windows to merge folders and replace matching files. Do not create a nested patch directory inside the project.

## 3. Confirm the key files

```powershell
Test-Path .\src\content\case-studies\ocado.ts
Select-String -Path .\src\content\case-studies\ocado.ts -Pattern "Research direction"
Select-String -Path .\playwright.config.ts -Pattern "npm run build"
```

The first command should return `True`; the other commands should show matching lines.

## 4. Run the complete quality gate

No dependency was added, so no npm installation is required.

```powershell
npm run quality
```

Playwright now creates its own production build. A filtered test can also be run directly:

```powershell
npx playwright test tests/site.spec.ts -g "Ocado case study"
```

## 5. Review locally

```powershell
npm run dev
```

Open:

```text
http://localhost:3000/work/ocado-offers
```

Review desktop, tablet and mobile widths. Confirm that the page contains no invented Ocado imagery or evidence gallery.

## 6. Commit and deploy

```powershell
git add .
git commit -m "Add reviewed Ocado offers case study"
git push origin main
```

Confirm that GitHub Actions passes and that Vercel deploys the new route successfully.
