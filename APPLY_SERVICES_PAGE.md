# Apply the Services page patch

This patch is intended for the existing working `charlotte-website-v2` repository after the reviewed About page has been applied.

## 1. Stop the development server

Press `Ctrl + C` in any terminal running Next.js.

## 2. Extract the patch outside the website folder

Do not create a nested patch folder inside the project.

## 3. Copy everything inside the extracted patch into

```text
C:\\Users\\chara\\charlotte-website-v2
```

Allow Windows to merge directories and replace matching files.

## 4. Confirm the Services page exists

```powershell
Test-Path .\\src\\app\\services\\page.tsx
Test-Path .\\src\\styles\\services.css
```

Both should return `True`.

Confirm the navigation points to the new page:

```powershell
Select-String -Path .\\src\\lib\\site.ts -Pattern 'Services.*services'
```

## 5. Run the complete quality gate

No new npm packages are required.

```powershell
npm run quality
```

## 6. Review locally

```powershell
npm run dev
```

Open:

```text
http://localhost:3000/services
```

Check desktop, tablet and mobile widths, especially the 2 × 2 problem layout and the mobile CTA.

## 7. Commit and deploy

```powershell
git add .
git commit -m "Build responsive Services page"
git push origin main
```

Then confirm GitHub Actions and the Vercel deployment both pass.
