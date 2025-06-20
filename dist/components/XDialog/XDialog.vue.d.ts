declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        description?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
        cancel?(_: {}): any;
        submit?(_: {}): any;
        'extra-footer'?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    onCancel: FunctionConstructor;
    onSubmit: FunctionConstructor;
    title: StringConstructor;
    description: StringConstructor;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    cancelDisabled: BooleanConstructor;
    cancelProps: ObjectConstructor;
    submitText: {
        type: StringConstructor;
        default: string;
    };
    submitDisabled: BooleanConstructor;
    submitProps: ObjectConstructor;
    centerTitle: BooleanConstructor;
    persistent: BooleanConstructor;
    noActions: BooleanConstructor;
    noCancel: BooleanConstructor;
    noSubmit: BooleanConstructor;
    loading: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    testId: {
        type: StringConstructor;
        default: null;
    };
    isPromo: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    cancel: () => any;
    close: () => any;
    submit: () => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    onCancel: FunctionConstructor;
    onSubmit: FunctionConstructor;
    title: StringConstructor;
    description: StringConstructor;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    cancelDisabled: BooleanConstructor;
    cancelProps: ObjectConstructor;
    submitText: {
        type: StringConstructor;
        default: string;
    };
    submitDisabled: BooleanConstructor;
    submitProps: ObjectConstructor;
    centerTitle: BooleanConstructor;
    persistent: BooleanConstructor;
    noActions: BooleanConstructor;
    noCancel: BooleanConstructor;
    noSubmit: BooleanConstructor;
    loading: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    testId: {
        type: StringConstructor;
        default: null;
    };
    isPromo: BooleanConstructor;
}>> & Readonly<{
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    onSubmit?: (() => any) | undefined;
}>, {
    size: string;
    loading: boolean;
    cancelText: string;
    cancelDisabled: boolean;
    submitText: string;
    submitDisabled: boolean;
    centerTitle: boolean;
    persistent: boolean;
    noActions: boolean;
    noCancel: boolean;
    noSubmit: boolean;
    testId: string;
    isPromo: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
