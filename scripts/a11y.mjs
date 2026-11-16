import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const PORT = 4123;
const BASE = `http://localhost:${PORT}`;
const TAGS = [
	"wcag2a",
	"wcag2aa",
	"wcag21a",
	"wcag21aa",
	"wcag22a",
	"wcag22aa",
];

function startServer() {
	const child = spawn(
		"pnpm",
		["exec", "next", "start", "--port", String(PORT)],
		{
			stdio: ["ignore", "ignore", "inherit"],
		},
	);
	child.on("exit", (code) => {
		if (code !== 0 && code !== null) {
			console.error(`Server exited with code ${code}`);
			process.exitCode = 1;
		}
	});
	return child;
}

async function waitForServer() {
	for (let i = 0; i < 100; i += 1) {
		try {
			const res = await fetch(BASE);
			if (res.ok) return;
		} catch {
			// server not up yet
		}
		await sleep(200);
	}
	throw new Error(`Server did not come up at ${BASE}`);
}

async function scan(page, label) {
	const results = await new AxeBuilder({ page })
		.withTags(TAGS)
		.include("body")
		.analyze();
	for (const violation of results.violations) {
		console.log(
			`\n[${label}] ${violation.id} (${violation.impact}) — ${violation.help} (${violation.helpUrl})`,
		);
		for (const node of violation.nodes) {
			console.log(`  ${node.target.join(" ")}`);
		}
	}
	return results.violations;
}

const server = startServer();
try {
	await waitForServer();
	const browser = await chromium.launch();
	const violations = [];
	try {
		for (const width of [402, 768, 1280]) {
			const context = await browser.newContext({
				viewport: { width, height: 900 },
				deviceScaleFactor: 1,
			});
			const page = await context.newPage();
			await page.goto(BASE, { waitUntil: "networkidle" });
			await page.evaluate(() => document.fonts.ready);
			violations.push(...(await scan(page, `${width} default`)));

			if (width === 402) {
				await page.click('button[aria-controls="mobile-menu"]');
				violations.push(...(await scan(page, "402 menu open")));
			}
			if (width === 1280) {
				await page.fill('input[name="name"]', "Test User");
				await page.fill('input[name="email"]', "test@example.com");
				await page.fill('textarea[name="question"]', "Hello");
				await page.click('button:has-text("Send message")');
				await page.waitForSelector('p[role="status"]');
				violations.push(...(await scan(page, "1280 form submitted")));
			}
			await page.close();
			await context.close();
		}
	} finally {
		await browser.close();
	}

	if (violations.length > 0) {
		console.error(`\naxe-core: ${violations.length} violation(s) found`);
		process.exitCode = 1;
	} else {
		console.log("\naxe-core: no violations (WCAG 2.2 A/AA rules)");
	}
} finally {
	server.kill();
}
