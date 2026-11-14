# buzzvel-test

Buzzvel Front-End Engineer coding challenge (November 2026) — a complete responsive page (desktop and mobile) built from the [Figma design](https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026) with Next.js App Router, TypeScript and Tailwind CSS.

## Stack

- Next.js (App Router) + React
- TypeScript
- Tailwind CSS v4
- Biome for linting and formatting — see [ADR 0001](docs/adr/0001-use-biome-for-lint-and-format.md)

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

GitHub Actions runs three parallel checks on every push and PR — lint, typecheck and production build (`.github/workflows/ci.yml`, see [ADR 0003](docs/adr/0003-ci-cd-pipeline.md)). A Husky pre-commit hook runs Biome on staged files before each commit. Deployment is handled by Vercel's Git integration.

## Key decisions

- [ADR 0001 — Use Biome for linting and formatting](docs/adr/0001-use-biome-for-lint-and-format.md).
- [ADR 0002 — Use pnpm as the package manager](docs/adr/0002-use-pnpm-as-package-manager.md).
- [ADR 0003 — CI/CD pipeline](docs/adr/0003-ci-cd-pipeline.md).

## Known gaps

- Page sections, design implementation and font setup are pending.
- Time spent and AI tools sections to be filled in before submission.
