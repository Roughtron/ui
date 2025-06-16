import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import XButton from './XButton.vue';

const meta = {
  title: 'UI/XButton',
  component: XButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray'],
      description: 'Button color',
    },
    size: { control: 'select', options: ['xxxs', 'xxs', 'xs', 's', 'm', 'l'], description: 'Button size' },
    loading: { control: 'boolean', description: 'Show loading state' },
    disabled: { control: 'boolean', description: 'Disable the button' },
    outline: { control: 'boolean', description: 'Outline style' },
    block: { control: 'boolean', description: 'Full width button' },
    ghost: { control: 'boolean', description: 'Ghost style' },
    text: { control: 'boolean', description: 'Text style' },
    square: { control: 'boolean', description: 'Square button' },
    round: { control: 'boolean', description: 'Round button' },
    table: { control: 'boolean', description: 'Table style' },
    onClick: { action: 'clicked', description: 'Button click event' },
  },
  args: {
    color: 'primary',
    size: 's',
    loading: false,
    disabled: false,
    outline: false,
    block: false,
    ghost: false,
    text: false,
    square: false,
    round: false,
    table: false,
    onClick: fn(),
  },
} satisfies Meta<typeof XButton>;

export default meta;

const parameters = {
  controls: {
    exclude: ['onClick', 'color'],
  }
};

const Template: Story = {
  render: (args) => ({
    components: { XButton },
    setup() {
      return { args };
    },
    template: '<x-button v-bind="args">Button</x-button>',
  }),
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  ...Template,
  args: {
    color: 'primary',
  },
  parameters,
};

export const Gray: Story = {
  ...Template,
  args: {
    color: 'gray',
  },
  parameters,
};