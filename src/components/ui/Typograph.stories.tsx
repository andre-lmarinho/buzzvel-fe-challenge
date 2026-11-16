import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Eyebrow, H1, H2, H3, P } from "./Typograph";

const meta = {
	title: "UI/Typograph",
	// One story per Figma type role; the exports double as the autodocs list.
	parameters: { layout: "centered" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const DisplayH1: Story = {
	render: () => <H1>Practical learning for curious people</H1>,
};
export const SectionH2: Story = {
	render: () => <H2>Meet international students &amp; teachers</H2>,
};
export const CardH3: Story = { render: () => <H3>Frontend Fundamentals</H3> };
export const Body: Story = {
	render: () => (
		<div className="w-96">
			<P>
				Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
				risus ac vel, velit, nunc.
			</P>
		</div>
	),
};
export const EyebrowLabel: Story = {
	render: () => <Eyebrow className="text-blue">The courses</Eyebrow>,
};
