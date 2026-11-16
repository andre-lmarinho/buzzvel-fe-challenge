import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

// Variant and size pairs mirror the real usage in the app; `size` owns
// height and padding, so a Button without one renders malformed.
const meta = {
	title: "UI/Button",
	component: Button,
	parameters: { layout: "centered" },
	argTypes: {
		variant: { control: "select" },
		size: { control: "select" },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidXl: Story = {
	args: { variant: "solid", size: "xl", children: "Start learning" },
};
export const SolidSm: Story = {
	args: { variant: "solid", size: "sm", children: "Start learning" },
};
export const OutlineXl: Story = {
	args: { variant: "outline", size: "xl", children: "See how it works" },
};
export const YellowXl: Story = {
	args: { variant: "yellow", size: "xl", children: "Get the course" },
};
export const GhostLg: Story = {
	args: { variant: "ghost", size: "lg", children: "Log in" },
};
export const LinkSm: Story = {
	args: { variant: "link", size: "sm", href: "#contact", children: "Log in" },
};
export const LinkInverse: Story = {
	args: {
		variant: "link-inverse",
		size: "lg",
		href: "#categories",
		children: "Browse all courses",
	},
};
