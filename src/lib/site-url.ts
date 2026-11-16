// Base origin for metadataBase, canonical, sitemap, robots and llms.txt.
// VERCEL_PROJECT_PRODUCTION_URL is Vercel's automatic production domain, so the
// build-time metadata is correct with no env var configured.
const raw =
	process.env.NEXT_PUBLIC_SITE_URL ??
	process.env.VERCEL_PROJECT_PRODUCTION_URL ??
	"http://localhost:3000";

export const siteUrl = new URL(
	/^https?:\/\//.test(raw) ? raw : `https://${raw}`,
).origin;
