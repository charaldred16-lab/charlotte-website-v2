# Apply the Contact production hotfix

This hotfix adds the final production safeguards to the working Contact page.

## Included changes

- `/privacy` privacy notice page
- just-in-time privacy disclosure beside the enquiry form
- Privacy link in the shared footer
- `/privacy` sitemap entry
- `aria-busy` submission state
- dedicated Formspree rate-limit handling
- safe handling of concise Formspree validation messages
- direct-email fallback after failed submissions
- Playwright coverage for a 429 failure and the Privacy page

## Apply

1. Stop any running development/test server with `Ctrl + C`.
2. Extract this ZIP somewhere outside your website folder.
3. Copy everything inside the extracted folder into:

```text
C:\Users\chara\charlotte-website-v2
```

4. Allow Windows to merge folders and replace matching files.

No `npm install` is required.

## Verify

Run:

```powershell
npm run quality
```

If it passes:

```powershell
npm run dev
```

Check:

```text
http://localhost:3000/contact
http://localhost:3000/privacy
```

On Contact, confirm:
- Privacy notice appears above Send enquiry.
- Privacy notice opens `/privacy`.
- 15-minute booking still opens Google Calendar.
- A real Formspree submission still reaches Gmail.

Then check the footer contains Privacy.

## Commit and deploy

```powershell
git add .
git commit -m "Harden contact form and add privacy notice"
git push origin main
```

After Vercel deploys, make one final real enquiry from the live site and confirm it arrives in Gmail.
