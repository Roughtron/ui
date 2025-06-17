import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        name: {
            type: StringConstructor;
            required: true;
        };
        color: {
            type: StringConstructor;
            default: null;
        };
        size: {
            type: import('vue').PropType<TXCssSize>;
            default: string;
        };
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        name: {
            type: StringConstructor;
            required: true;
        };
        color: {
            type: StringConstructor;
            default: null;
        };
        size: {
            type: import('vue').PropType<TXCssSize>;
            default: string;
        };
    }>> & Readonly<{}>, {
        color: string;
        size: TXCssSize;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGSVGElement>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Icon: Story;
