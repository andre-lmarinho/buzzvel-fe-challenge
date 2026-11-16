# 0006 — Playwright E2E suite + Storybook for UI primitives

- **Date:** 2026-11-16
- **Status:** Accepted

## Context

The challenge marks automated tests as optional but "welcome". What existed before: `scripts/a11y.mjs` (axe-core scan in CI) and a development-time Playwright sweep over 211 viewport widths — real verification, but not reproducible from a fresh clone.

What actually needs testing in this codebase: rendered behavior (menu, form, anchors, overflow, skip link) and the visual contract of the five `ui/` primitives. There is almost no pure logic — `src/lib/site-url.ts` is the only function with real branches — so a unit-test layer (Vitest + jsdom + testing-library) would duplicate what browser-level tests already assert, with a third toolchain for one testable function.

## Decision

- **Playwright test suite** (`tests/page.spec.ts`, `pnpm test`, `@playwright/test`): skip link as first Tab stop, menu `aria-expanded` open/close cycle, form submission with `role="status"`, native email validation, no horizontal overflow at 320/768/1280 px, anchor navigation, content images loading. The dev-time sweep's behaviors are now committed and reproducible; the sweep itself stays untracked.
- **SEO URLs** (`tests/seo.spec.ts`): the suite builds with `NEXT_PUBLIC_SITE_URL=http://localhost:3100`; sitemap.xml, robots.txt and llms.txt must serve exactly that origin.
- **Storybook** (`@storybook/nextjs-vite`, `pnpm storybook`): stories for the five `src/components/ui/` primitives only — variant matrices and type roles, not per-section stories. Stories are not imported by the app, so they add nothing to the page bundle.
- **Vitest: rejected for now.** No pure logic to justify a unit layer; revisit if `site-url.ts` grows or form validation leaves native HTML.

## Consequences

- `pnpm test` builds first (`next build && playwright test`), so a fresh clone works; CI runs a fifth parallel job (`e2e`).
- Story files are part of the type-checked surface (`tsc --noEmit`) and Biome lint.
- Storybook ships the same local font files via `.storybook/preview.css`, re-declaring the `--font-*` variables that `next/font` only defines in the Next build — stories render the real typography.
- New interactive behavior must gain a spec in `tests/page.spec.ts` or it is only covered by the manual checks.
