# buzzvel-test

Buzzvel Front-End Engineer coding challenge (November 2026) — a complete responsive page (desktop and mobile) built from the [Figma design](https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026) with Next.js App Router, TypeScript and Tailwind CSS.

## Stack

- Next.js (App Router) + React
- TypeScript
- Tailwind CSS v4
- Biome for linting and formatting — see [ADR 0001](docs/adr/0001-use-biome-for-lint-and-format.md)
- Images served as AVIF with WebP fallback through `next/image` — see [ADR 0004](docs/adr/0004-image-formats-avif-with-webp-fallback.md)
- Inter + Plus Jakarta Sans served locally from versioned files — see [ADR 0005](docs/adr/0005-serve-fonts-locally-from-versioned-files.md)

## Getting started

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

Node 26 is pinned in `.nvmrc` (and `engines` in `package.json`) — with `fnm` or `nvm`, run `fnm use` / `nvm use` in the project.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Lint + format check (Biome) |
| `pnpm format` | Format files (Biome) |
| `pnpm fix` | Lint + format with fixes (Biome) |
| `pnpm typecheck` | Type-check with `tsc` |

## CI/CD

GitHub Actions runs four parallel checks on every push and PR — lint, typecheck, production build and an axe-core accessibility scan of the built page (`.github/workflows/ci.yml`, see [ADR 0003](docs/adr/0003-ci-cd-pipeline.md)). A Husky pre-commit hook runs Biome on staged files before each commit. Deployment is handled by Vercel's Git integration.

## Key decisions

- [ADR 0001 — Use Biome for linting and formatting](docs/adr/0001-use-biome-for-lint-and-format.md).
- [ADR 0002 — Use pnpm as the package manager](docs/adr/0002-use-pnpm-as-package-manager.md).
- [ADR 0003 — CI/CD pipeline](docs/adr/0003-ci-cd-pipeline.md).
- [ADR 0004 — Image formats: AVIF with WebP fallback](docs/adr/0004-image-formats-avif-with-webp-fallback.md).
- [ADR 0005 — Serve fonts locally from versioned files](docs/adr/0005-serve-fonts-locally-from-versioned-files.md).
- [Design divergences](docs/design-divergences.md) — intentional corrections and responsive decisions that differ from the Figma frames.
- [Accessibility](docs/accessibility.md) — what is in place, how it was checked, and what was not done.
- [SEO](docs/seo.md) — technical basics shipped (canonical, sitemap, OG image, llms.txt); content strategy deliberately out.

## Logs/Audits

- [WCAG 2.2 A/AA audit](docs/logs/wcag-audit.md) — per-criterion results, findings and methods.

## Known gaps

- Navigation targets are in-page anchors — the challenge is a single page.
- The contact form is mock (client-side confirmation, no backend), per challenge scope.
