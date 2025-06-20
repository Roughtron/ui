import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        color: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        mini: BooleanConstructor;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        color: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        size: {
            type: StringConstructor;
            default: string;
            validator: (v: string) => boolean;
        };
        mini: BooleanConstructor;
    }>> & Readonly<{}>, {
        color: string;
        size: string;
        mini: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
        mini: {
            control: "boolean";
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Loader: Story;
