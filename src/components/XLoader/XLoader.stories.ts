import type { Meta, StoryObj } from '@storybook/vue3-vite';
import XLoader from './XLoader.vue';

const meta = {
  title: 'UI/XLoader',
  component: XLoader,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'gray', 'white'],
      description: 'Loader color',
    },
    size: {
      control: 'select', options: ['xs', 's', 'm', 'l'],
      description: 'Loader size',
    },
    mini: {
      control: 'boolean',
      description: 'Mini loader style',
    }
  }
} satisfies Meta<typeof XLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loader: Story = {
  args: {
    color: 'primary',
    size: 'm',
    mini: false,
  }
};
