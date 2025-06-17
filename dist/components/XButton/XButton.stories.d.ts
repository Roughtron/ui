import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
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
            iconSize: {
                type: import('vue').PropType<TXCssSize>;
            };
            iconProps: {
                type: ObjectConstructor;
            };
            disabled: BooleanConstructor;
            to: (StringConstructor | ObjectConstructor)[];
            href: StringConstructor;
            target: {
                type: StringConstructor;
                validator: (v: string) => boolean;
            };
            download: (StringConstructor | BooleanConstructor)[];
            outline: BooleanConstructor;
            block: BooleanConstructor;
            loading: BooleanConstructor;
            icon: StringConstructor;
            ghost: BooleanConstructor;
            text: BooleanConstructor;
            prepend: StringConstructor;
            append: StringConstructor;
            square: BooleanConstructor;
            round: BooleanConstructor;
            table: BooleanConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            color: string;
            size: string;
            table: boolean;
            text: boolean;
            disabled: boolean;
            outline: boolean;
            block: boolean;
            loading: boolean;
            ghost: boolean;
            square: boolean;
            round: boolean;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
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
            iconSize: {
                type: import('vue').PropType<TXCssSize>;
            };
            iconProps: {
                type: ObjectConstructor;
            };
            disabled: BooleanConstructor;
            to: (StringConstructor | ObjectConstructor)[];
            href: StringConstructor;
            target: {
                type: StringConstructor;
                validator: (v: string) => boolean;
            };
            download: (StringConstructor | BooleanConstructor)[];
            outline: BooleanConstructor;
            block: BooleanConstructor;
            loading: BooleanConstructor;
            icon: StringConstructor;
            ghost: BooleanConstructor;
            text: BooleanConstructor;
            prepend: StringConstructor;
            append: StringConstructor;
            square: BooleanConstructor;
            round: BooleanConstructor;
            table: BooleanConstructor;
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            color: string;
            size: string;
            table: boolean;
            text: boolean;
            disabled: boolean;
            outline: boolean;
            block: boolean;
            loading: boolean;
            ghost: boolean;
            square: boolean;
            round: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
        iconSize: {
            type: import('vue').PropType<TXCssSize>;
        };
        iconProps: {
            type: ObjectConstructor;
        };
        disabled: BooleanConstructor;
        to: (StringConstructor | ObjectConstructor)[];
        href: StringConstructor;
        target: {
            type: StringConstructor;
            validator: (v: string) => boolean;
        };
        download: (StringConstructor | BooleanConstructor)[];
        outline: BooleanConstructor;
        block: BooleanConstructor;
        loading: BooleanConstructor;
        icon: StringConstructor;
        ghost: BooleanConstructor;
        text: BooleanConstructor;
        prepend: StringConstructor;
        append: StringConstructor;
        square: BooleanConstructor;
        round: BooleanConstructor;
        table: BooleanConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        color: string;
        size: string;
        table: boolean;
        text: boolean;
        disabled: boolean;
        outline: boolean;
        block: boolean;
        loading: boolean;
        ghost: boolean;
        square: boolean;
        round: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            append?(_: {}): any;
        };
    });
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
        loading: false;
        disabled: false;
        outline: false;
        block: false;
        ghost: false;
        text: false;
        square: false;
        round: false;
        table: false;
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Gray: Story;
