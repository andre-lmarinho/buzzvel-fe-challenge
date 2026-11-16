import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AvatarStack } from "./AvatarStack";

const meta = {
	title: "UI/AvatarStack",
	component: AvatarStack,
	parameters: { layout: "centered" },
	argTypes: {
		size: { control: "select" },
		ring: { control: "select" },
	},
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cream: Story = { args: { count: 4, size: "sm", ring: "cream" } };
export const Yellow: Story = { args: { count: 4, size: "md", ring: "yellow" } };
export const WithCaption: Story = { args: { count: 4, caption: true } };
