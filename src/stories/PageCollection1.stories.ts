import type {Meta, StoryObj} from '@storybook/react';
import PageCollection1 from 'containers/PageCollection1';

const meta = {
  component: PageCollection1,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PageCollection1>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {name: 'AVRAHAM'};