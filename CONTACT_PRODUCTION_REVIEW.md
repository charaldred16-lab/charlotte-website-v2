# Contact production review

This pass addresses the final production concerns identified after the working Contact page was built.

## Changes made

- Added a `/privacy` page with layered privacy information for the enquiry form and linked third-party services.
- Added a short just-in-time privacy notice beside the form submission action.
- Added Privacy to the shared footer only; it is not part of the primary navigation.
- Added `/privacy` to the sitemap.
- Added `aria-busy` to the enquiry form while a submission is in progress.
- Added a specific message for Formspree HTTP 429 rate limiting.
- Safely surfaces a concise Formspree validation message when one is returned, while retaining a generic fallback for network/unknown errors.
- Kept a direct email fallback visible after failed submissions.
- Added Playwright coverage for the rate-limit failure path and the Privacy page.

## Privacy note

The privacy page is a practical implementation based on the site's current data flows: Vercel hosting, Formspree enquiry submissions and the optional Google Calendar booking link. It should be reviewed if analytics, advertising, mailing-list software, additional processors or materially different data uses are added later.
