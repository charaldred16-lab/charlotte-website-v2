# Apply the engineering-reviewed About page patch

Use this patch with the existing working `charlotte-website-v2` repository after the Hertz, Ocado, and engineering changes are already present.

This patch replaces the earlier About-page patch. If you already applied the earlier patch, it is still safe to apply this reviewed version over the top.

## 1. Back up the current state

```powershell
git status
```

Commit any work you want to keep before applying the patch.

## 2. Stop the development server

Use `Ctrl + C` in any terminal running Next.js.

## 3. Copy the reviewed patch

Extract the ZIP outside the project. Copy everything inside the extracted patch folder into:

```text
C:\Users\chara\charlotte-website-v2
```

Allow Windows to merge folders and replace matching files.

## 4. Confirm the reviewed files are present

```powershell
Test-Path .\src\styles\about.css
Select-String -Path .\src\app\about\page.tsx -Pattern "serializedPersonJsonLd"
Select-String -Path .\src\app\globals.css -Pattern "site-header--inner-page"
Select-String -Path .\tests\site.spec.ts -Pattern "fits all responsive viewports"
```

The first command should return `True`; the other commands should return matching lines.

## 5. Run the full engineering gate

No dependency changed, so `npm install` is not required.

```powershell
npm run quality
```

The About browser test now checks mobile, tablet, and desktop widths.

## 6. Review locally

```powershell
npm run dev
```

Open:

```text
http://localhost:3000/about
```

Review the About page and briefly verify the homepage, Hertz, and Ocado pages because this patch moves the shared inner-page navigation styling into the global design-system stylesheet.

## 7. Commit and deploy

```powershell
git add .
git commit -m "Build engineering-reviewed About page"
git push origin main
```

Then confirm the GitHub Actions quality workflow and Vercel deployment both pass.
