# 0002 — Use pnpm as the package manager

- **Date:** 2026-11-14
- **Status:** Accepted

## Context

The project needs a package manager for dependency installation, script running and a lockfile. npm is the bundled default; pnpm installs dependencies from a shared content-addressable store and builds a strict, symlinked `node_modules`, so packages can only import dependencies they actually declare.

## Decision

Use **pnpm**. The version is pinned in `package.json` via the `packageManager` field (`pnpm@11.17.0`), so Corepack-compatible environments pick the same version.

## Alternatives

- **npm** — bundled and zero setup, but installs are slower and its hoisted `node_modules` allows imports of undeclared dependencies.
- **yarn** — comparable to pnpm; no advantage over it for a single-package project.
- **bun** — a different runtime and toolchain; not required by this project.

## Consequences

- Commands use `pnpm` (`pnpm install`, `pnpm dev`, `pnpm build`, …).
- The lockfile is `pnpm-lock.yaml`; the npm `package-lock.json` was removed.
- CI, when added, should install pnpm or rely on Corepack to respect the pinned version.
