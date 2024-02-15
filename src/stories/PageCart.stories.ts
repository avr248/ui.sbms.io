import type { Meta, StoryObj } from "@storybook/react";
import PageCart from "containers/PageCart";

const meta = {
	component: PageCart,
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof PageCart>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = { name: "AVRAHAM" };
