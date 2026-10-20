# PhD Care Clinic

A complete, responsive static website for CSE doctoral and early-career researcher support.

## Run locally

Open `index.html` in a browser, or serve the directory with any static-file server.

## Before publishing

1. In `script.js`, replace `hello@phdcareclinic.org` with the clinic's real enquiry inbox. The form opens the visitor's email application—no data is collected or stored by this static site.
2. Update any copy, prices or legal/contact details that need to reflect the operating clinic.
3. In the repository’s **Settings → Pages**, select **GitHub Actions** as the deployment source. This one-time setup is required before the workflow can deploy.

After setup, every push to `main` runs `.github/workflows/deploy-pages.yml` and deploys the latest site automatically. The workflow publishes only the HTML, CSS, JavaScript and logo files needed by the website.

## Project files

- `index.html` — all site content and semantic structure
- `styles.css` — responsive design system and layout
- `script.js` — mobile navigation, reveal effects and static email enquiry form
- `.github/workflows/deploy-pages.yml` — GitHub Pages CI/CD
