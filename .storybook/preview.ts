import "./preview.css";
import "@/app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
	parameters: {
		controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
		// Canvas surface for contrast-sensitive components (white text/logo).
		// SB 10 API: `options` + initial/backgrounds globals (not the SB8 shape).
		backgrounds: {
			options: {
				white: { name: "White", value: "#ffffff" },
				cream: { name: "Cream", value: "#f9f8f3" },
				blue: { name: "Blue", value: "#3157f6" },
			},
		},
		// Section surfaces live on white or cream; center components like the page does.
		layout: "centered",
	},
	initialGlobals: {
		backgrounds: { value: "white" },
	},
};

export default preview;
