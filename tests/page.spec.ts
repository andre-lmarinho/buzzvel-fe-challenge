import { expect, test } from "@playwright/test";

// One spec per design behavior: skip link, mobile menu, contact form,
// responsive overflow, anchor navigation and content images.

test("skip link is the first Tab stop", async ({ page }) => {
	await page.goto("/");
	await page.keyboard.press("Tab");
	await expect(
		page.getByRole("link", { name: "Skip to content" }),
	).toBeFocused();
});

test("mobile menu opens and closes with correct aria state", async ({
	page,
}) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto("/");
	const toggle = page.locator('button[aria-controls="mobile-menu"]');

	await expect(toggle).toHaveAttribute("aria-expanded", "false");
	await toggle.click();
	const menu = page.locator("#mobile-menu");
	await expect(menu).toBeVisible();
	await expect(toggle).toHaveAttribute("aria-expanded", "true");
	await expect(toggle).toHaveAttribute("aria-label", "Close menu");

	// Activating a menu link closes the menu.
	await menu.getByRole("link", { name: "Start learning" }).click();
	await expect(menu).toBeHidden();
	await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("contact form submits and announces confirmation", async ({ page }) => {
	await page.goto("/");
	await page.fill('input[name="name"]', "Test User");
	await page.fill('input[name="email"]', "test@example.com");
	await page.fill('textarea[name="question"]', "Hello");
	await page.click('button:has-text("Send message")');

	await expect(page.locator('p[role="status"]')).toHaveText(
		"Demo only: no message was sent.",
	);
});

test("contact form rejects an invalid email with native validation", async ({
	page,
}) => {
	await page.goto("/");
	await page.fill('input[name="name"]', "Test User");
	await page.fill('input[name="email"]', "not-an-email");
	await page.fill('textarea[name="question"]', "Hello");
	await page.click('button:has-text("Send message")');

	await expect(page.locator('p[role="status"]')).toBeHidden();
	await expect(page.locator('input[name="email"]:invalid')).toHaveCount(1);
});

for (const width of [320, 768, 1280]) {
	test(`no horizontal overflow at ${width} px`, async ({ page }) => {
		await page.setViewportSize({ width, height: 900 });
		await page.goto("/");
		const scrollWidth = await page.evaluate(
			() => document.documentElement.scrollWidth,
		);
		expect(scrollWidth).toBeLessThanOrEqual(width);
	});
}

test("header CTA navigates to the categories anchor", async ({ page }) => {
	await page.setViewportSize({ width: 1280, height: 900 });
	await page.goto("/");
	await page.getByRole("link", { name: "Start learning" }).first().click();

	await expect(page).toHaveURL(/#categories/);
	const categories = page.locator("#categories");
	await expect(categories).toBeInViewport();
});

test("content images load", async ({ page }) => {
	await page.goto("/");
	const sources = await page.evaluate(() =>
		Array.from(document.querySelectorAll("img"))
			.filter((img) => img.alt !== "")
			.map((img) => img.getAttribute("src") ?? ""),
	);
	expect(sources.length).toBeGreaterThan(0);
	for (const src of sources) {
		const response = await page.request.get(src);
		expect(response.status(), src).toBe(200);
	}
});
