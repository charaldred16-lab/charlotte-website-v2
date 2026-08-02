# Apply the engineering patch to charlotte-website-v2

These steps assume the approved homepage and Hertz case study are already in your existing local repository.

## 1. Create a backup branch

In VS Code, open `charlotte-website-v2`, stop any running development server with `Ctrl + C`, then run:

```powershell
git status
git switch -c backup-before-engineering-improvements
git push -u origin backup-before-engineering-improvements
git switch main
```

If `git status` shows uncommitted work, commit it before creating the backup branch.

## 2. Copy the patch

Extract the engineering patch ZIP outside the project. Copy everything **inside** the extracted patch folder into:

```text
C:\Users\chara\charlotte-website-v2
```

Allow Windows to merge folders and replace the matching files.

Do not copy the outer patch folder itself into the repository.

## 3. Install the new test dependency

From the project root:

```powershell
node -v
npm install
npx playwright install chromium
```

`node -v` should begin with `v24`. Your previously shown Node 24 installation is suitable.

Do not run `npm audit fix --force`.

## 4. Run the complete checks

```powershell
npm run quality
```

This runs linting, TypeScript, a production build and browser tests.

Then preview the site:

```powershell
npm run dev
```

Check:

- `http://localhost:3000`
- `http://localhost:3000/work/hertz-keyless-rental`
- `http://localhost:3000/anything-that-does-not-exist`

Stop the server with `Ctrl + C`.

## 5. Commit the generated lock file and code

```powershell
git status
git add .
git commit -m "Add engineering quality and accessibility improvements"
git push origin main
```

The updated `package-lock.json` must be included.

## 6. Check GitHub Actions

In GitHub:

1. Open the `charlotte-website-v2` repository.
2. Select **Actions**.
3. Open **Quality checks**.
4. Confirm the run finishes with a green tick.

The first run installs Chromium and may take several minutes.

## 7. Confirm Vercel uses Node 24

In the existing Vercel project:

1. Open **Settings**.
2. Open **Build and Deployment**.
3. Find **Node.js Version**.
4. Select **24.x** if it is not already selected.
5. Redeploy only if Vercel does not automatically deploy the GitHub push.

The `package.json` engine also requests Node 24.x, so the code and project setting agree.

## 8. Optional: protect main after the first successful workflow

In GitHub:

1. Open **Settings → Branches** or **Rules → Rulesets**.
2. Create a rule for `main`.
3. Enable **Require status checks to pass before merging**.
4. Select the `quality` check from the workflow.

This is useful if you later use pull requests. It is optional for a one-person repository.
