# 0003 — CI/CD pipeline

- **Date:** 2026-11-14
- **Status:** Accepted

## Context

The project is a single page, so a full pipeline is in theory overkill — but it is a Next.js project and the challenge asks for it to be built as a complete site inside, even if the surface is a single page. The repo is therefore treated like any production Next.js app: the gates that would guard a larger app run here. The public GitHub repo is a challenge requirement, and a Vercel deployment is linked as an extra. Reference CI data from the Biome migration article showed a CI change cutting 104 s → 79 s purely by parallelizing jobs — a result of job parallelism, not of any tooling switch.

## Decision

- **CI on GitHub Actions** (`.github/workflows/ci.yml`), parallel jobs sharing one setup (Node from `.nvmrc`, pnpm version from the `packageManager` field, `--frozen-lockfile`, pnpm store cache):
  - `lint` — `biome check .`
  - `typecheck` — `tsc --noEmit`
  - `build` — `next build` (telemetry disabled)
  - `a11y` — axe-core scan of the production build (`pnpm a11y`, `scripts/a11y.mjs`)
- **CD delegated to Vercel's Git integration**: every push and PR gets its own build and deploy/preview from the same lockfile and build command. No deploy job and no Vercel token in Actions — one pipeline owns deploys instead of two.

## Alternatives

- **Single sequential job** — fewer moving parts, but slower feedback and conflated signals.
- **Actions deploying via the Vercel CLI** — needs a token in repo secrets and duplicates the deploy pipeline Vercel already runs on every push.
- **Other CI providers** — GitHub Actions is native to the required public GitHub repo.
- **Dependabot / Renovate** — rejected: this is a deliver-and-forget codebase (a recruitment challenge, not a maintained product). Scheduled update polling on GitHub would be permanent machinery with no one left to merge the PRs. Dependencies were bumped to their current latest versions once during setup instead, and stay pinned as delivered.

## Consequences

- Four parallel installs per run; the pnpm cache keeps them cheap, and the `a11y` job additionally downloads Chromium (~1 min).
- A clean scan covers only the exercised states and the rules axe implements — not a WCAG conformance claim; manual checks and screen-reader testing ([accessibility](../accessibility.md)) stay as complementary evidence. New interactive states must be added to `scripts/a11y.mjs` or they are never scanned.
- Actions checks and Vercel builds run independently — a green check and a green Vercel build are different signals, both watched.
- The checks are the intended merge gates; enabling branch protection on `main` to require them is a follow-up configuration on GitHub, not something the workflow can enforce.
- A Husky pre-commit hook runs `biome check --write --staged --no-errors-on-unmatched`, fixing mechanical issues on staged files before they reach CI — Actions compute is spent on the real gates, not on catching formatting errors.
