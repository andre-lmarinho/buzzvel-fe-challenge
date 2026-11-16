import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta = {
	title: "UI/Logo",
	component: Logo,
	parameters: { layout: "centered" },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnWhite: Story = { args: { className: "text-ink" } };
export const OnBlue: Story = { args: { className: "text-white" } };
