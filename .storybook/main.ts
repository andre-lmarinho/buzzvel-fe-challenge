import path from "node:path";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
	framework: "@storybook/nextjs-vite",
	stories: ["../src/components/ui/**/*.stories.@(ts|tsx)"],
	// Tailwind v4 via the project's postcss.config.mjs (@tailwindcss/postcss).
	// backgrounds (canvas surface) is built into Storybook core since v9.
	addons: [],
	typescript: {
		// Stories don't need SB's type-check pass; tsc --noEmit covers the repo.
		check: false,
	},
	viteFinal: (config) => {
		config.resolve ??= {};
		config.resolve.alias = [
			...(Array.isArray(config.resolve.alias) ? config.resolve.alias : []),
			{ find: "@", replacement: path.resolve(process.cwd(), "src") },
		];
		return config;
	},
};

export default config;
