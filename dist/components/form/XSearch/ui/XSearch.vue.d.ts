import { PropType } from 'vue';
import { SearchMode } from '../types';
import { Nullable } from '../../../../types/shared.types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        append?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    mode: {
        type: PropType<SearchMode>;
        default: SearchMode;
    };
    icon: {
        type: PropType<Nullable<string>>;
        default: null;
    };
    showMode: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clear: (value: string) => any;
    "update:model-value": (value: string) => any;
    "update:mode": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    mode: {
        type: PropType<SearchMode>;
        default: SearchMode;
    };
    icon: {
        type: PropType<Nullable<string>>;
        default: null;
    };
    showMode: BooleanConstructor;
}>> & Readonly<{
    onClear?: ((value: string) => any) | undefined;
    "onUpdate:model-value"?: ((value: string) => any) | undefined;
    "onUpdate:mode"?: ((value: string) => any) | undefined;
}>, {
    icon: Nullable<string>;
    name: string;
    color: string;
    mode: SearchMode;
    modelValue: string;
    placeholder: string;
    showMode: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
