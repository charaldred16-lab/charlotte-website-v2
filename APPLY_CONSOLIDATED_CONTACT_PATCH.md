# Apply the consolidated Contact patch

This replaces both the earlier Contact page patch and the later production hotfix.

The latest test output showed that the production/privacy files were present, but the base Contact implementation had not been fully merged:
- Services still linked to `mailto:`
- `/contact` did not return a successful page
- the rate-limit test could not find the enquiry form
- `/privacy` did work

This consolidated patch puts all Contact-related files back into a known-good, matching state.

## 1. Stop any running server

Press:

```text
Ctrl + C
```

in any terminal running Next.js or Playwright.

## 2. Extract the ZIP

Extract this ZIP somewhere OUTSIDE:

```text
C:\Users\chara\charlotte-website-v2
```

## 3. Copy the contents into the project

Copy everything INSIDE the extracted folder into:

```text
C:\Users\chara\charlotte-website-v2
```

Allow Windows to merge folders and replace matching files.

## 4. Verify the important files before running tests

From the project root run:

```powershell
Test-Path .\src\app\contact\page.tsx
Test-Path .\src\components\ContactForm.tsx
Test-Path .\src\app\privacy\page.tsx
```

All three must return:

```text
True
```

Then verify Services now points to Contact:

```powershell
Select-String -Path .\src\app\services\page.tsx -Pattern 'href="/contact"'
```

You should see a matching line.

Verify the Contact page is using the real form component:

```powershell
Select-String -Path .\src\app\contact\page.tsx -Pattern "ContactForm"
```

Verify the real integrations:

```powershell
Select-String -Path .\src\lib\site.ts -Pattern "xqpzdbbd|sHEzKAsREm4a5LAB7"
```

## 5. Clear the previous Next build

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
```

You do NOT need to run npm install.

## 6. Run a fast check first

```powershell
npm run typecheck
```

Then run only the Contact and Services browser tests:

```powershell
npx playwright test tests/site.spec.ts -g "Services page|Contact page|Contact form|Privacy notice"
```

If those pass, run the complete gate:

```powershell
npm run quality
```

## 7. Test the real integrations locally

```powershell
npm run dev
```

Open:

```text
http://localhost:3000/contact
```

Confirm:
- Services → Get in touch opens `/contact`
- the Contact form is visible
- Privacy notice opens `/privacy`
- Book a 15-minute intro call opens Google Calendar
- one real enquiry arrives in Gmail

## 8. Commit and push

```powershell
git add .
git commit -m "Complete working contact and privacy flow"
git push origin main
```
