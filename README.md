# Adam Gilbert — Portfolio

A personal portfolio highlighting selected work in applied AI, computer vision, sports analytics, and software development.

## Live site

The GitHub Pages project site is configured at <https://adamgibb.github.io/gilbertmanor.co.uk/>.

## Run locally

```powershell
cd adam-portfolio
npm ci
npm run dev
```

Open <http://localhost:3000> while the development server is running.

## Build and lint

```powershell
cd adam-portfolio
npm run lint
npm run build
```

The production build creates a static site in `adam-portfolio/out`.

## Deployment

Pushing to `main` runs [the GitHub Pages workflow](.github/workflows/pages.yml), which installs the locked dependencies, lints the source, creates the static export, and publishes it to GitHub Pages. The workflow applies the repository path prefix at build time. A local build uses the root path so it works at `localhost:3000`.

For the first deployment, set the repository’s Pages source to **GitHub Actions** under **Settings → Pages → Build and deployment**.

## Project structure

- `adam-portfolio/src/app/page.js` — portfolio content and project cards
- `adam-portfolio/src/app/globals.css` — responsive visual styles
- `adam-portfolio/src/app/layout.js` — document layout and SEO metadata
- `adam-portfolio/next.config.mjs` — static export and GitHub Pages path configuration
