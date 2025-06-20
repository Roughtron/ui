declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            inputValue: any;
            handleBlur: (e?: Event, shouldValidate?: boolean) => void;
            handleChange: (e: Event | unknown, shouldValidate?: boolean) => void;
        }): any;
        error?(_: {
            errorMessage: string | undefined;
        }): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: null;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: null;
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    value: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
