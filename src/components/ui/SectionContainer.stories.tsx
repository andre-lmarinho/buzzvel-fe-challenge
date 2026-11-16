import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionContainer } from "./SectionContainer";

const meta = {
	title: "UI/SectionContainer",
	component: SectionContainer,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<section className="bg-cream py-10">
			<SectionContainer>
				<p className="rounded-lg border border-line bg-white p-4 text-sm">
					Max-width container with responsive gutters (px-5 → md:px-10).
				</p>
			</SectionContainer>
		</section>
	),
};
