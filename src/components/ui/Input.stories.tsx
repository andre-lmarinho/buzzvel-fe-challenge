import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input, Textarea } from "./Input";

const meta = {
	title: "UI/Input",
	component: Input,
	parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: { label: "Full name", name: "name", placeholder: "Your name" },
};
export const Email: Story = {
	args: {
		label: "Email",
		name: "email",
		type: "email",
		placeholder: "youremail@example.com",
	},
};
export const Required: Story = {
	args: {
		label: "Full name",
		name: "name",
		required: true,
		placeholder: "Your name",
	},
};
export const Question: Story = {
	args: { label: "Your question" },
	render: () => (
		<div className="w-96">
			<Textarea
				label="Your question"
				name="question"
				placeholder="Tell us how we can help..."
			/>
		</div>
	),
};
