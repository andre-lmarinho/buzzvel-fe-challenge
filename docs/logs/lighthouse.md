# Lighthouse

Mobile Lighthouse results for the production build of the single page (`/`), measured Nov 15, 2026 with the committed code. The full report of a reference run is saved next to this file (`lighthouse-mobile.html`, open in a browser).

## Method

- Lighthouse **13.6.0** (CLI, `--quiet`) against `next start` serving the production build, Playwright Chromium 159 (`--headless=new --no-sandbox`).
- Default **simulated** mobile throttling (slow 4G, 4× CPU slowdown) — the same model PageSpeed Insights uses.
- Multiple sequential runs per configuration; scores vary between identical runs, so single runs are not treated as results. [Lighthouse: score variability](https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md)

## Result (committed code)

Performance **98** — accessibility 100, best-practices 100, SEO 100.

| Metric | Value |
| --- | --- |
| First Contentful Paint | 0.9 s |
| Largest Contentful Paint | **2.1 s** |
| Speed Index | 0.9 s |
| Total Blocking Time | 150 ms |
| Cumulative Layout Shift | 0 |
| Time to Interactive | 3.0 s |
| Total transfer | 290 KiB |
