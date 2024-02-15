import type {Meta, StoryObj} from '@storybook/react';
import {Input} from '../shared';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['input'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {name: 'AVRAHAM'};