# 0004 — Image formats: AVIF with WebP fallback

- **Date:** 2026-11-14
- **Status:** Accepted

## Context

All raster assets in `public/` are PNGs delivered from the Figma export, and every usage goes through `next/image` (`/_next/image`), which resizes and re-encodes each source into the output format negotiated with the browser. Next.js' default `images.formats` is `['image/webp']`, so the PNG sources were already being served as WebP — but AVIF was never attempted. AVIF typically wins on compression for both photographic and flat/UI content, and supports alpha (relevant to PNG sources with transparency), at the cost of a much heavier encode. Because of that cost, AVIF is opt-in and expressed as a format-preference list; the optimizer serves the first format the browser's `Accept` header supports.

## Decision

Set the format preference in `next.config.ts`:

```ts
images: {
    formats: ["image/avif", "image/webp"],
    ...
}
```

The order encodes the fallback policy: browsers announcing AVIF support receive AVIF; the rest fall back to WebP. The negotiation is per request, so no static duplicate pipeline is needed — the PNG sources stay as-is and are the input to the optimizer, not the delivery format. No `<Image>` call sites change.

## Alternatives

- **Default (`webp` only)** — no config change, but leaves the AVIF gains on the table for every capable browser (the majority today).
- **Pre-converting sources with a build step (e.g. `sharp` script generating AVIF/WebP variants in `public/`)** — avoids per-request encode, but adds a pipeline and a build dependency for variants `next/image` generates on demand anyway; the optimizer still re-encodes anything the pre-converter misses.
- **Serving the original PNGs** — zero conversion cost, but by far the largest payloads.

## Consequences

- First request for a new size/format variant triggers an AVIF encode, which is CPU-bound and slower than WebP. Variants are cached, so this is cold-cache latency, not a per-request tax.
- SVGs are unaffected: with `dangerouslyAllowSVG` they pass through unconverted, as vector sources.
- Output quality is the Next.js default (75); `images.qualities` is the lever if it needs tuning.
- **Open item to verify in production:** confirm the AVIF cold-cache encode cost is acceptable on the deployment target (Vercel, per ADR 0003). Check a set of first-hit image URLs for response latency and that `content-type` is `image/avif` under an AVIF-capable `Accept` header, `image/webp` otherwise. If encode latency shows up in real-page metrics, revisit this decision — the fallback is reverting `formats` to the default, not introducing a pre-conversion pipeline.
