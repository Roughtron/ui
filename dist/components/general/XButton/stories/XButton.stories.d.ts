import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    argTypes: {
        color: {
            control: "select";
            options: string[];
            description: string;
        };
        size: {
            control: "select";
            options: string[];
            description: string;
        };
        loading: {
            control: "boolean";
            description: string;
        };
        disabled: {
            control: "boolean";
            description: string;
        };
        outline: {
            control: "boolean";
            description: string;
        };
        block: {
            control: "boolean";
            description: string;
        };
        ghost: {
            control: "boolean";
            description: string;
        };
        text: {
            control: "boolean";
            description: string;
        };
        square: {
            control: "boolean";
            description: string;
        };
        round: {
            control: "boolean";
            description: string;
        };
        table: {
            control: "boolean";
            description: string;
        };
        onClick: {
            action: string;
            description: string;
        };
    };
    args: {
        color: string;
        size: string;
        loading: boolean;
        disabled: boolean;
        outline: boolean;
        block: boolean;
        ghost: boolean;
        text: boolean;
        square: boolean;
        round: boolean;
        table: boolean;
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Gray: Story;
