declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    checkbox: BooleanConstructor;
    checked: BooleanConstructor;
    prependIcon: StringConstructor;
    prependIconProps: ObjectConstructor;
    appendIcon: StringConstructor;
    appendIconProps: ObjectConstructor;
    markSelectedOption: BooleanConstructor;
    isTruncate: BooleanConstructor;
    rounded: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    checkbox: BooleanConstructor;
    checked: BooleanConstructor;
    prependIcon: StringConstructor;
    prependIconProps: ObjectConstructor;
    appendIcon: StringConstructor;
    appendIconProps: ObjectConstructor;
    markSelectedOption: BooleanConstructor;
    isTruncate: BooleanConstructor;
    rounded: BooleanConstructor;
}>> & Readonly<{}>, {
    checkbox: boolean;
    checked: boolean;
    markSelectedOption: boolean;
    isTruncate: boolean;
    rounded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
