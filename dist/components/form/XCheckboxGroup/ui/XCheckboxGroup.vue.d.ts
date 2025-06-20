import { PropType } from 'vue';
import { Checkbox } from '../../XCheckbox';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        text?(_: {
            label: string;
            value: string | number | boolean;
            icon?: string;
            disabled?: boolean;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<string[] | number[]>;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    fields: {
        type: PropType<Checkbox[]>;
        default: () => never[];
    };
    checkboxProps: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string[] | number[]) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<string[] | number[]>;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    fields: {
        type: PropType<Checkbox[]>;
        default: () => never[];
    };
    checkboxProps: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string[] | number[]) => any) | undefined;
}>, {
    modelValue: string[] | number[];
    fields: Checkbox[];
    checkboxProps: Record<string, any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
