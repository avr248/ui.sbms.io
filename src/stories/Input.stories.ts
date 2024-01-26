import type {Meta, StoryObj} from '@storybook/react';
import {Input} from '../shared';

const meta = {
  className: "",
  sizeClass: "h-11 px-4 py-3",
  fontClass: "text-sm font-normal",
  rounded: "rounded-2xl",
  type: "text",
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {name: 'AVRAHAM'};