import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
	title: "UI/Badge",
	component: Badge,
	parameters: { layout: "centered" },
	argTypes: { variant: { control: "select" } },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = { args: { variant: "soft", children: "01" } };
export const Pill: Story = { args: { variant: "pill", children: "120+" } };
export const Outline: Story = {
	args: { variant: "outline", children: "8 lessons" },
};
export const OnDark: Story = {
	// `outline` leaves text color open; white is the dark-surface usage.
	args: {
		variant: "outline",
		children: "Intermediate",
		className: "text-white",
	},
	parameters: { backgrounds: { value: "blue" } },
};
export const Label: Story = {
	args: { variant: "label", children: "Featured course" },
};
