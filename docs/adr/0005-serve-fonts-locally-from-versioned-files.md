# 0005 — Serve fonts locally from versioned files

- **Date:** 2026-11-14
- **Status:** Accepted

## Context

The design file uses Inter for body text and Plus Jakarta Sans for display. Pixel-diff validation against the Figma frames showed text drifting horizontally by up to ~4 px per line, growing along each string. The cause was the font build, not the layout: measuring nine text strings against the boxes returned by the Figma REST API, Inter **v3.19** matches with a maximum error of 0.82 px, while the **Inter 4.x** served by Google at the time differs by up to 4 px per line and ~2 px per wide glyph (`m`).

`next/font/google` cannot pin a version: it serves whatever Google hosts when the build runs, so metric drift arrives silently with no code change. Runtime loading is not a differentiator — both `next/font/google` and `next/font/local` self-host the files; only the build-time source differs. (This project also sets `preload: false` on both font calls.)

## Decision

Serve the `.woff2` files committed in `src/fonts/`:

- `Inter-Variable.woff2` — Latin subset of Inter v3.19, restricted to weights 400–700.
- `Jakarta-Variable.woff2` — Plus Jakarta Sans variable (wght 200–800, latin), the same file Google was serving at the time, frozen before it can change.

Both fonts use `next/font/local`.

## Consequences

- Font metrics are frozen: the pixel parity achieved against the Figma frames cannot regress from a third-party update.
- Updating a font is a deliberate file replacement in `src/fonts/` (plus the weight declaration in `layout.tsx`), ideally re-validated against the Figma frames with a pixel-diff check (development-time, not committed).
- Latin subsets reduce font transfer; content outside their character coverage requires a font update.
- If a future Inter release matches the Figma build again, the files can be swapped back after re-validation.
