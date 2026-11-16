import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageSection } from "./PageSection";

const meta = {
	title: "UI/PageSection",
	component: PageSection,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<PageSection className="bg-cream py-10">
			<p className="rounded-lg border border-line bg-white p-4 text-sm">
				Full-bleed background and centered gutters on one element (page-gutters
				utility: px-5 → sm 540px cap → md 1120px cap).
			</p>
		</PageSection>
	),
};
