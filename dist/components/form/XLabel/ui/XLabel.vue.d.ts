declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {
        label: HTMLLabelElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    htmlFor: {
        type: StringConstructor;
    };
    required: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    htmlFor: {
        type: StringConstructor;
    };
    required: BooleanConstructor;
}>> & Readonly<{}>, {
    required: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    label: HTMLLabelElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
