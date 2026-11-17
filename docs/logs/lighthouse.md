# Lighthouse

Mobile Lighthouse results for the deployed production build (`https://buzzvel-fe-challenge-omega.vercel.app/`), measured Nov 16, 2026. The full report of a reference run is saved next to this file (`lighthouse-mobile.html`, open in a browser).

## Method

- Lighthouse **13.5.0** (CLI) against the deployed production URL, mobile emulation (Android, Chrome 156).
- Default **simulated** mobile throttling (slow 4G, 4× CPU slowdown) — the same model PageSpeed Insights uses.
- Five sequential runs; scores vary between identical runs, so single runs are not treated as results. [Lighthouse: score variability](https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md)

## Result (production)

Performance **100** (median of five runs: 100, 99, 100, 100, 100) — accessibility 100, best-practices 100, SEO 100.

| Metric | Value |
| --- | --- |
| First Contentful Paint | 1.2 s |
| Largest Contentful Paint | **1.3 s** |
| Speed Index | 1.2 s |
| Total Blocking Time | 20 ms |
| Cumulative Layout Shift | 0 |
| Time to Interactive | 2.2 s |
| Total transfer | 300 KiB |

The Nov 15/16 pre-deploy local runs measured Performance 97 (LCP 2.4 s / TBT 110 ms). Measured against production, all five runs sit between 99 and 100, closing the gap left by run-to-run variability.
