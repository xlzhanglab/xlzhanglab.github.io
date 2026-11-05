# Xiaolei Zhang · Academic Website

A bilingual academic website for Xiaolei Zhang, a Ph.D. student at the College of Artificial Intelligence, Nankai University. English is the default language. The site includes Home, Research, Publications, and Experience.

Target repository: `xlzhanglab/xlzhanglab.github.io`. This project has not been uploaded or deployed.

## Files to upload to GitHub

```text
.github/workflows/deploy.yml
src/
public/
scripts/check-site.mjs
.gitignore
astro.config.mjs
package.json
pnpm-lock.yaml
tsconfig.json
README.md
```

The root allowlist in `.gitignore` includes the source, assets, configuration, and deployment checker listed above. Review `git status --short` before committing.

`.local/`, `.vscode/`, and `preview-site.cmd` are local preview tools and are excluded from Git. Historical previews, screenshots, archives, and superseded notes are preserved in `.local/old/`. Build output, dependencies, logs, and ZIP archives are also excluded. GitHub's browser upload does not apply `.gitignore`: select only the listed files and place them at the repository root without an extra project folder.

### File audit

The upload list contains 34 files that support the current features and maintenance workflow. Not every file is essential just to display a page. All 19 source files are page entries or have import references. All 7 public assets have page references or a crawler purpose. The dependency manifest matches the lockfile, and every locked dependency is reachable from Astro.

| Files | Purpose and necessity |
| --- | --- |
| `package.json`, `pnpm-lock.yaml`, `astro.config.mjs`, `.github/workflows/deploy.yml` | Required by the current Astro build and GitHub Pages workflow. |
| `scripts/check-site.mjs` | Checks pages, links, and bibliography before deployment. The workflow calls it directly; update the workflow before removing it. |
| `tsconfig.json`, `.gitignore` | Configure types and Git inclusion rules for the current development workflow. |
| `README.md` | Optional maintenance documentation; not part of the build. |
| `src/components/ResearchFigure.astro` | Fallback illustration for papers without an image. All three current papers have images. Removing it also requires updating `Paper.astro` and the local preview exporter. |
| `src/pages/sitemap.xml.ts`, `public/robots.txt` | Support search indexing; not required for basic page display. |
| `public/assets/social-card.png`, `public/favicon.svg` | Provide a link preview image and browser icon. Update their references before removing them. |

`.local/old/` is a historical backup. `.local/browser-check.mjs`, `.local/content-sources.md`, and `.local/social-card.svg` are local checking or maintenance resources, not upload requirements. F5 and the Windows launcher use `.local/build-preview.mjs`, `.local/preview.mjs`, and `.local/serve.mjs`. Generated previews are stored in `.local/preview/` and are also excluded.

## Editing content and images

- `src/data/profile.ts`: identity, affiliation, email, research interests, education, and project experience.
- `src/data/approach.ts`: the shared research narrative.
- `src/data/publications.ts`: published papers, image paths, bilingual notes, DOIs, and BibTeX.
- `src/data/ui.ts`: English and Chinese interface labels.
- `src/pages/[lang]/`: the four page templates.
- `src/layouts/Layout.astro`: navigation, sidebar, and page metadata.
- `src/styles/global.css`: site styles.

Portrait: `public/assets/portrait-000.jpg`. Paper images: `gec-imc.svg`, `dsgenas.svg`, and `emcenas.svg` under `public/assets/papers/`. When changing a filename or format, update the corresponding image path in the data file. Public URLs start with `/assets/` and omit `public/`. Home, Research, and Publications share the paper images. `public/assets/social-card.png` is the link preview image.

Only the three confirmed published papers are displayed. Source links and bibliographic records remain in the publication data. The doctoral entry indicates current enrollment without an inferred starting year.

Use English for filenames, code comments, developer documentation, and tool labels. Keep the website's Chinese and English content in its localized fields.

## Local preview

On this computer, press F5 or double-click `preview-site.cmd` to generate a standalone static preview with the existing Node runtime and open the English homepage. No dependencies are installed or downloaded. Output is written to `.local/preview/site`; stop and restart the preview after making changes.

The tools in `.local/` are separate from the production Astro build. Keep `.local/build-preview.mjs` in sync when changing Astro page layouts. These local tools are excluded from GitHub, so a fresh clone on another computer will not include them.

An environment with project dependencies already installed can run `pnpm dev`. Production build and validation commands are:

```sh
pnpm build
pnpm check:site
```

Project dependencies are not installed locally, and the production Astro build has not been run.

## GitHub Pages deployment

1. Commit the listed source files to the `main` branch of `xlzhanglab/xlzhanglab.github.io`.
2. In Settings → Pages, set Source to GitHub Actions.
3. A push to `main` runs the existing workflow on GitHub: install locked build dependencies, generate the static site, check pages and links, and deploy. Pull requests only build and check.

Astro is the only direct dependency. The GitHub build does not install the local browser checking tools. The intended URL is [xlzhanglab.github.io](https://xlzhanglab.github.io/); this is not a claim that the site is live.
