declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prepend?(_: {}): any;
        append?(_: {}): any;
        error?(_: {
            errorMessage: string | undefined;
        }): any;
    };
    refs: {
        input: HTMLInputElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
        validator: (v: boolean | string) => boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: StringConstructor;
        default: string;
    };
    appendIcon: {
        type: StringConstructor;
        default: string;
    };
    appendIconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    appendButton: {
        type: ObjectConstructor;
        default: null;
    };
    onAppendClick: FunctionConstructor;
    prepend: {
        type: StringConstructor;
        default: string;
    };
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    prependIconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    prependButton: {
        type: ObjectConstructor;
        default: null;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
    mask: {
        type: StringConstructor;
        default: string;
    };
    showError: {
        type: BooleanConstructor;
        default: boolean;
    };
    onPrependClick: FunctionConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    invisible: BooleanConstructor;
}>, {
    focus: () => void | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
        validator: (v: boolean | string) => boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    append: {
        type: StringConstructor;
        default: string;
    };
    appendIcon: {
        type: StringConstructor;
        default: string;
    };
    appendIconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    appendButton: {
        type: ObjectConstructor;
        default: null;
    };
    onAppendClick: FunctionConstructor;
    prepend: {
        type: StringConstructor;
        default: string;
    };
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    prependIconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    prependButton: {
        type: ObjectConstructor;
        default: null;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    modelModifiers: {
        type: ObjectConstructor;
        default: () => {};
    };
    mask: {
        type: StringConstructor;
        default: string;
    };
    showError: {
        type: BooleanConstructor;
        default: boolean;
    };
    onPrependClick: FunctionConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    invisible: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    color: string;
    size: string;
    type: string;
    mask: string;
    disabled: boolean;
    prepend: string;
    append: string;
    max: number;
    value: string | number;
    modelValue: string | number;
    prependIcon: string;
    prependIconProps: Record<string, any>;
    appendIcon: string;
    appendIconProps: Record<string, any>;
    rounded: string | boolean;
    appendButton: Record<string, any>;
    prependButton: Record<string, any>;
    min: number;
    modelModifiers: Record<string, any>;
    showError: boolean;
    readonly: boolean;
    invisible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    input: HTMLInputElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
