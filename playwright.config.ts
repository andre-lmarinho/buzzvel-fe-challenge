import { defineConfig } from "@playwright/test";

// Serves the production build; tests never touch the dev server on 3000.
// `pnpm test` builds first so a fresh clone works.
export default defineConfig({
	testDir: "tests",
	fullyParallel: true,
	reporter: "list",
	use: {
		baseURL: "http://localhost:3100",
	},
	webServer: {
		command: "pnpm exec next start --port 3100",
		url: "http://localhost:3100",
		reuseExistingServer: false,
		timeout: 60_000,
	},
	projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
