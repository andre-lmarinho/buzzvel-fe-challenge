# SEO

Status: **technical basics shipped; content strategy deliberately out.** This page records what ships, what is intentionally absent and why, and when to revisit.

## What ships

- Metadata in `src/app/layout.tsx`: `title` and `description`, `metadataBase` (from `src/lib/site-url.ts`), `alternates.canonical: "./"`, an `openGraph` block (title, description, `type: "website"`, `url`), `themeColor` in the viewport, `lang="en"`, and the favicon (`src/app/icon.svg`).
- **Base URL** (`src/lib/site-url.ts`): `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` → `VERCEL_URL` → `localhost:3000`, with `https://` prefixed when missing. Production values are injected by Vercel; a custom domain only needs `NEXT_PUBLIC_SITE_URL`.
- **`robots.txt`** (`src/app/robots.ts`): allow all, links the sitemap.
- **`sitemap.xml`** (`src/app/sitemap.ts`): the single page with `lastModified`.
- **OG image** (`src/app/opengraph-image.tsx`): 1200×630 PNG, blue background, "luma." wordmark and tagline; Next wires it into `og:image` automatically.
- **`llms.txt`** (`src/app/llms.txt/route.ts`): plain-text site summary with an absolute URL.
- The structural basics come from the accessibility baseline: one page, one `h1`, semantic landmarks, descriptive alt text ([accessibility](accessibility.md)).
- One content gap observed and left for the content stage: the People section paragraph is lorem ipsum placeholder text — unindexable until real copy replaces it.
- Image performance is handled by `next/image` with AVIF/WebP negotiation ([ADR 0004](adr/0004-image-formats-avif-with-webp-fallback.md)).

## The decision

SEO was left intentionally thin:

1. Undoing a wrong indexation costs far more than any code-level improvement at this stage; 
2. Anything beyond the minimum must come from the business strategy, not from temporary code; 
3. Marketing has not been consulted, so only the minimum to rank, be indexed and be discovered is in place.

## Intentionally absent

Keywords, meta keywords, structured data (JSON-LD), hreflang and analytics: all depend on the business/marketing conversation that has not happened. The lorem ipsum paragraph in People is also a content gap, not an SEO decision.

## When to revisit

- **A production domain is set** — verify `NEXT_PUBLIC_SITE_URL` (or the Vercel-injected variable) resolves in production and the canonical/sitemap/OG URLs point there.
- **Marketing alignment** — positioning, keywords, content plan: the point where structured data, richer OG variants and real copy (replacing the lorem ipsum) become definable.

Until the marketing conversation happens, the current state is the intended end state — not a backlog.
