import type { Meta, StoryObj } from '@storybook/vue3-vite';
import XSvgIcon from '../ui/XSvgIcon.vue';

const meta = {
  title: 'General/XSvgIcon',
  component: XSvgIcon,
} satisfies Meta<typeof XSvgIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    name: 'amd',
  },
};
