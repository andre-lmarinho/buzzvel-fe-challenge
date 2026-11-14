# 0001 — Use Biome for linting and formatting

- **Date:** 2026-11-14
- **Status:** Accepted

## Context

The Buzzvel FE coding challenge requires a Next.js (App Router), TypeScript and Tailwind CSS project. Like any TypeScript project it needs a linter and a formatter. The common setup is ESLint + Prettier (two dependencies, two configs). The alternatives evaluated were:

- **ESLint + Prettier** — the default Next.js setup. Two tools that must agree on the same files, and a formatting layer that is slow compared to modern Rust-based formatters.
- **Biome** — a single Rust-based tool that lints and formats with one binary, one config and one command. A documented migration on a comparable Next.js project ([A Next.js migration to Biome](https://andremarinho.me/posts/biome-migration-lint-format)) reported large local speedups (lint 2.21 s → 0.19 s, format check 4.28 s → 0.16 s, combined gate 6.50 s → 0.99 s; best-of-five runs, unequal rule sets, so timings of the configured commands rather than an equal-work benchmark).
- **OXC (oxlint + oxfmt)** — also Rust-based, but split into two tools. Preliminary informal runs against Biome were **inconclusive**:

  | Workload | Result |
  | --- | --- |
  | Check + fix (lint + format in one pass) | Biome faster |
  | Individual lint run | OXC faster |
  | Individual format run | OXC faster |

  No significant gains were identified for either tool in the development environment or in CI/CD. The comparison did not establish a clear winner, and the two tools' coverage of the combined check+fix workload is not equivalent (Biome runs both roles from one command).

## Decision

Use **Biome** for both linting and formatting.

- Single dependency (`@biomejs/biome`) and single config (`biome.json`).
- One gate command (`biome check .`) that covers lint, format diff and import organizing; `biome check --write .` fixes in place.
- Recommended rules plus the React and Next domains as the baseline rule set.
- Type checking stays separate (`tsc --noEmit`); Biome does not type-check.

## Consequences

- One tool to install, configure, update and document; no ESLint/Prettier cross-config drift.
- Formatter conventions follow Biome defaults (e.g. double quotes), not Prettier's — a difference to keep in mind when comparing with older projects.
- The OXC comparison remains open-ended: if a future project shows measurable pain in either CI or dev workflows that the combined check+fix advantage does not offset, the decision can be revisited. With no demonstrated gain, we keep the single-tool setup.
- As the reference migration notes, a linter migration can also change which files are checked and which rules apply; the rule set here is the Biome recommended baseline, so no legacy rule parity is assumed.
