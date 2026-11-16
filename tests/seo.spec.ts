import { expect, test } from "@playwright/test";

// The production build under test is built with
// NEXT_PUBLIC_SITE_URL=http://localhost:3100 (see `pnpm test` and the CI e2e
// job), so these assertions exercise the env branch of src/lib/site-url.ts —
// the origin that feeds canonical URL, sitemap, robots.txt and llms.txt.
const SITE = "http://localhost:3100";

test("sitemap.xml lists exactly the configured site URL", async ({
	request,
}) => {
	const body = await (await request.get("/sitemap.xml")).text();
	const locs = body.match(/<loc>(.*?)<\/loc>/g) ?? [];
	expect(locs).toEqual([`<loc>${SITE}/</loc>`]);
});

test("robots.txt links the sitemap at the configured site URL", async ({
	request,
}) => {
	const body = await (await request.get("/robots.txt")).text();
	expect(body).toContain(`Sitemap: ${SITE}/sitemap.xml`);
});

test("llms.txt uses the configured site URL", async ({ request }) => {
	const body = await (await request.get("/llms.txt")).text();
	expect(body).toContain(`[Home](${SITE}/)`);
});
