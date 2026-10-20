# PhD Care Clinic

A complete, responsive static website for CSE doctoral and early-career researcher support.

## Run locally

Open `index.html` in a browser, or serve the directory with any static-file server.

## Before publishing

1. The enquiry form is configured to open a message addressed to `sayanmondal2098@gmail.com`. It uses the visitor's email application—no data is collected or stored by this static site.
2. Update any copy, prices or legal/contact details that need to reflect the operating clinic.
3. In the repository’s **Settings → Pages**, select **GitHub Actions** as the deployment source. This one-time setup is required before the workflow can deploy.

After setup, every push to `main` runs `.github/workflows/deploy-pages.yml` and deploys the latest site automatically. The workflow publishes only the HTML, CSS, JavaScript and logo files needed by the website.

### First GitHub Pages deployment

The reported `Get Pages site failed` error means Pages has not been enabled for the repository yet. Choose one one-time setup path:

1. In **Settings → Pages**, select **GitHub Actions** as the source, then rerun the workflow.
2. Or add a `PAGES_ENABLEMENT_TOKEN` repository secret containing a fine-grained personal access token with **Pages: write** and **Administration: write** access to this repository. The workflow uses it only to create the Pages site; later deployments use the built-in `GITHUB_TOKEN`.

The workflow now uses Node 24-based Actions and the pinned Ubuntu 24.04 runner, so the Node 20 and `ubuntu-latest` migration notices are removed.

## Project files

- `index.html` — all site content and semantic structure
- `styles.css` — responsive design system and layout
- `script.js` — mobile navigation, reveal effects and static email enquiry form
- `.github/workflows/deploy-pages.yml` — GitHub Pages CI/CD
