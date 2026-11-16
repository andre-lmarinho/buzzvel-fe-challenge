# buzzvel-test

Buzzvel Front-End Engineer coding challenge (November 2026) — the [Figma design](https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026) implemented as a production-quality one-page site with **Next.js App Router, TypeScript and Tailwind CSS v4**.

## Quick start

```sh
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build
pnpm start          # serve the production build
```

Node 26 (`.nvmrc` + `engines`) and pnpm 11 (`packageManager`, Corepack-resolved) are pinned — the same versions run in CI.

## What ships

- **Design implementation** — all 8 sections plus header and footer, at 320–1920 px, from design tokens defined once in `globals.css`. Intentional divergences from the Figma frames are documented and justified: [design-divergences.md](docs/design-divergences.md).
- **Interactions** — mobile menu with correct `aria-expanded`/`aria-controls`, in-page anchor navigation with smooth scroll and reduced-motion fallback, and a mock contact form (required fields, `role="status"` confirmation — no backend, per challenge scope).
- **Browser chrome** — the parts the OS draws around the page are branded too: `themeColor` in the `viewport` export tints the mobile browser UI, and the scrollbar is styled to the palette on every scroll container (10px lane, neutral ink thumb, blue on hover, Firefox via `scrollbar-width`/`scrollbar-color`) — CSS only.
- **Typography** — Inter v3.19 and Plus Jakarta Sans self-hosted and **pixel-validated against the Figma frames** (max error 0.82 px); Google Fonts cannot pin a version, so files are versioned in-repo: [ADR 0005](docs/adr/0005-serve-fonts-locally-from-versioned-files.md).
- **Images** — served as AVIF with WebP fallback through the `next/image` optimizer; content negotiation verified live: [ADR 0004](docs/adr/0004-image-formats-avif-with-webp-fallback.md).
- **Accessibility** — skip link, semantic landmarks, 44 px controls, focus indicators that survive any background, `prefers-reduced-motion` support; audited against **WCAG 2.2 A/AA**: [accessibility.md](docs/accessibility.md), full [audit](docs/logs/wcag-audit.md).
- **Tested** — Playwright suite (interactions, SEO URLs) and Storybook for the UI primitives ([ADR 0006](docs/adr/0006-playwright-suite-and-storybook.md)).
- **SEO** — canonical URL, `robots.txt`, `sitemap.xml`, Open Graph image, `llms.txt`: [seo.md](docs/seo.md).

## Quality gates

| Command | What it does |
| --- | --- |
| `pnpm dev` / `pnpm build` / `pnpm start` | Dev server / production build / serve it |
| `pnpm lint` | Biome lint + format + import check |
| `pnpm format` / `pnpm fix` | Format files / fix lint in place |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm a11y` | axe-core scan of the built page (WCAG 2.0–2.2 A/AA tags, 3 widths + menu/form states) |
| `pnpm test` | Build + Playwright suite over the page's interactions (`tests/page.spec.ts`) |
| `pnpm storybook` / `pnpm storybook:build` | Component playground for the UI primitives / static build |

Every push to `main` and every PR runs five parallel checks — lint, typecheck, build, a11y scan and Playwright suite ([ADR 0003](docs/adr/0003-ci-cd-pipeline.md)). Husky pre-commits lint staged files; deploys are Vercel's Git integration.

## Key decisions

| ADR | Decision | Why |
| --- | --- | --- |
| [0001](docs/adr/0001-use-biome-for-lint-and-format.md) | Biome for lint **and** format | One dependency, one gate command; includes a11y lint rules |
| [0002](docs/adr/0002-use-pnpm-as-package-manager.md) | pnpm, version pinned | `packageManager` field → same package manager everywhere |
| [0003](docs/adr/0003-ci-cd-pipeline.md) | 4 parallel CI jobs, shared setup | Fast feedback; a11y violations fail the build |
| [0004](docs/adr/0004-image-formats-avif-with-webp-fallback.md) | AVIF first, WebP fallback | Smallest transfer in browsers that negotiate; standard optimizer |
| [0005](docs/adr/0005-serve-fonts-locally-from-versioned-files.md) | Local versioned font files | Metric drift from unpinned Google Fonts cannot regress the design; latin subsets cut transfer to ~40 KB per family |
| [0006](docs/adr/0006-playwright-suite-and-storybook.md) | Playwright suite + Storybook for UI primitives | Rendered behavior reproducible from a clone; primitives isolated; no unit layer — there is no pure logic to test |

## Audits

- [WCAG 2.2 A/AA audit](docs/logs/wcag-audit.md) — per-criterion matrix, one documented fail (1.4.11 control boundaries, kept for Figma fidelity) and the methods used, including a real Orca screen-reader pass.
- [Lighthouse](docs/logs/lighthouse.md) — mobile method and results, Performance 98; the full report is attached: [lighthouse-mobile.html](docs/logs/lighthouse-mobile.html).

## Known gaps

- Navigation targets are in-page anchors — the challenge is a single page.
- The contact form is mock (client-side confirmation, no backend), per challenge scope.

## Time spent

| Stage | Date | Focus | Time |
| --- | --- | --- | --- |
| Project setup | 2026-11-14 | Tooling, CI/CD pipeline | ≈ 1h10 |
| Design implementation | 2026-11-14 | Tokens, fonts, accessibility baseline, assets from Figma, full responsive page (8 sections + footer) | ≈ 3h30 |
| SEO, accessibility, performance | 2026-11-15 | Canonical/sitemap/robots, WCAG pass, font and image transfer | ≈ 1h |
| Tests and docs | 2026-11-16 | Playwright suite, Storybook, SEO URL tests | ≈ 30min |

**Total: ≈ 6h10** for 2026-11-14 (see the [logs](docs/logs) for the later stages).

## AI tools

- **Agents:** frontier coding models (GLM family, OpenAI Codex, Claude) orchestrated through OpenCode, with skills for UI review, engineering documentation and React/Next.js performance.
- **Design data:** Figma MCP and the Figma REST API — frame measurements, token extraction and the pixel-diff font validation behind [ADR 0005](docs/adr/0005-serve-fonts-locally-from-versioned-files.md).
- **Review:** CodeRabbit on pull requests, plus hand review of every commit.
- **How the results were checked:** Playwright screenshots from 320 to 1920 px, Lighthouse audits, and the local gates (`pnpm lint`, `pnpm typecheck`, `pnpm build`, `pnpm a11y`, `pnpm test`). Every claim in `docs/` was verified against the code it describes.
