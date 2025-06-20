declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
        'append-label'?(_: {}): any;
        default?(_: {
            placeholder: string | null;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    htmlFor: {
        type: StringConstructor;
    };
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    required: BooleanConstructor;
    noLabel: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: null;
    };
    htmlFor: {
        type: StringConstructor;
    };
    mode: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    required: BooleanConstructor;
    noLabel: BooleanConstructor;
}>> & Readonly<{}>, {
    required: boolean;
    label: string;
    mode: string;
    noLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
