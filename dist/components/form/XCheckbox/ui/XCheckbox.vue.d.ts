declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        text?(_: {}): any;
        text?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: null;
        default: null;
    };
    modelValue: {
        type: null;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    testId: {
        type: StringConstructor;
        default: string;
    };
    classic: BooleanConstructor;
    toggle: BooleanConstructor;
    bordered: BooleanConstructor;
    disabled: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: boolean | string[] | number[], isChecked?: boolean | undefined) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: null;
        default: null;
    };
    modelValue: {
        type: null;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    testId: {
        type: StringConstructor;
        default: string;
    };
    classic: BooleanConstructor;
    toggle: BooleanConstructor;
    bordered: BooleanConstructor;
    disabled: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | string[] | number[], isChecked?: boolean | undefined) => any) | undefined;
}>, {
    name: string;
    toggle: boolean;
    disabled: boolean;
    testId: string;
    value: any;
    modelValue: any;
    classic: boolean;
    bordered: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
