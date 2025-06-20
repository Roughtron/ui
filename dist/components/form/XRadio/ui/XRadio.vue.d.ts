declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            active: boolean;
        }): any;
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
    variant: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    disabled: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
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
    variant: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    disabled: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    name: string;
    disabled: boolean;
    value: any;
    variant: string;
    modelValue: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
