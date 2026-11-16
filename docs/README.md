# Documentation map

Start by what you need to verify or change. `../README.md` covers install, commands and the submission summary.

## Decisions (why the code looks like this)

- [ADR 0001 — Biome for lint and format](adr/0001-use-biome-for-lint-and-format.md)
- [ADR 0002 — pnpm as package manager](adr/0002-use-pnpm-as-package-manager.md)
- [ADR 0003 — CI/CD pipeline](adr/0003-ci-cd-pipeline.md)
- [ADR 0004 — AVIF with WebP fallback](adr/0004-image-formats-avif-with-webp-fallback.md)
- [ADR 0005 — Fonts from versioned files](adr/0005-serve-fonts-locally-from-versioned-files.md)

## Feature records (what shipped, and what deliberately didn't)

- [Design divergences](design-divergences.md) — every place the implementation intentionally differs from the Figma frames, with the reason.
- [Accessibility](accessibility.md) — what is in place and how it was verified; pointer to the audit.
- [SEO](seo.md) — technical basics shipped; content strategy deliberately out and when to revisit.

## Audits (evidence)

- [WCAG 2.2 A/AA audit](logs/wcag-audit.md) — per-criterion matrix, one accepted fail, methods.
- [Lighthouse](logs/lighthouse.md) — mobile method and results; full report in [lighthouse-mobile.html](logs/lighthouse-mobile.html).
