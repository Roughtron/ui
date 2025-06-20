declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    variant: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    icon: {
        type: StringConstructor;
    };
    iconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    active: BooleanConstructor;
    disabled: BooleanConstructor;
    block: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    variant: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    icon: {
        type: StringConstructor;
    };
    iconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    active: BooleanConstructor;
    disabled: BooleanConstructor;
    block: BooleanConstructor;
}>> & Readonly<{}>, {
    iconProps: Record<string, any>;
    disabled: boolean;
    block: boolean;
    variant: string;
    active: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
