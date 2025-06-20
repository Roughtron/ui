import { PropType } from 'vue';
import { CssSize } from '../../../../types/shared.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
        type: PropType<CssSize>;
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
    iconSize: {
        type: PropType<CssSize>;
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
}>> & Readonly<{}>, {
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
