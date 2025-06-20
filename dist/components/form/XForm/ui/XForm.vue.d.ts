import { FormSubmitPayload, Actions } from '../types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        veeform: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                name: string;
                onSubmit: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>;
                as: string;
                initialValues: Record<string, any>;
                validateOnMount: boolean;
                validationSchema: Record<string, any>;
                initialErrors: Record<string, any>;
                initialTouched: Record<string, any>;
                onInvalidSubmit: import('vee-validate').InvalidSubmissionHandler;
                keepValues: boolean;
            }> & Omit<{
                readonly name: string;
                readonly as: string;
                readonly validateOnMount: boolean;
                readonly keepValues: boolean;
                readonly onSubmit?: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject, import('vee-validate').GenericObject, unknown> | undefined;
                readonly initialValues?: Record<string, any> | undefined;
                readonly validationSchema?: Record<string, any> | undefined;
                readonly initialErrors?: Record<string, any> | undefined;
                readonly initialTouched?: Record<string, any> | undefined;
                readonly onInvalidSubmit?: import('vee-validate').InvalidSubmissionHandler<import('vee-validate').GenericObject, import('vee-validate').GenericObject> | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
                as: {
                    type: import('vue').PropType<string>;
                    default: string;
                };
                validationSchema: {
                    type: ObjectConstructor;
                    default: any;
                };
                initialValues: {
                    type: ObjectConstructor;
                    default: any;
                };
                initialErrors: {
                    type: ObjectConstructor;
                    default: any;
                };
                initialTouched: {
                    type: ObjectConstructor;
                    default: any;
                };
                validateOnMount: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                onSubmit: {
                    type: import('vue').PropType<import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>>;
                    default: any;
                };
                onInvalidSubmit: {
                    type: import('vue').PropType<import('vee-validate').InvalidSubmissionHandler>;
                    default: any;
                };
                keepValues: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                name: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, "name" | "onSubmit" | "initialValues" | "as" | "validationSchema" | "initialErrors" | "initialTouched" | "validateOnMount" | "onInvalidSubmit" | "keepValues">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                as: {
                    type: import('vue').PropType<string>;
                    default: string;
                };
                validationSchema: {
                    type: ObjectConstructor;
                    default: any;
                };
                initialValues: {
                    type: ObjectConstructor;
                    default: any;
                };
                initialErrors: {
                    type: ObjectConstructor;
                    default: any;
                };
                initialTouched: {
                    type: ObjectConstructor;
                    default: any;
                };
                validateOnMount: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                onSubmit: {
                    type: import('vue').PropType<import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>>;
                    default: any;
                };
                onInvalidSubmit: {
                    type: import('vue').PropType<import('vee-validate').InvalidSubmissionHandler>;
                    default: any;
                };
                keepValues: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                name: {
                    type: StringConstructor;
                    default: string;
                };
            }>>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }> | import('vue').Slot<any> | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>[] | {
                default: () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                    [key: string]: any;
                }>[];
            }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
                name: string;
                onSubmit: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>;
                as: string;
                initialValues: Record<string, any>;
                validateOnMount: boolean;
                validationSchema: Record<string, any>;
                initialErrors: Record<string, any>;
                initialTouched: Record<string, any>;
                onInvalidSubmit: import('vee-validate').InvalidSubmissionHandler;
                keepValues: boolean;
            }, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            name: string;
            onSubmit: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>;
            as: string;
            initialValues: Record<string, any>;
            validateOnMount: boolean;
            validationSchema: Record<string, any>;
            initialErrors: Record<string, any>;
            initialTouched: Record<string, any>;
            onInvalidSubmit: import('vee-validate').InvalidSubmissionHandler;
            keepValues: boolean;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            as: {
                type: import('vue').PropType<string>;
                default: string;
            };
            validationSchema: {
                type: ObjectConstructor;
                default: any;
            };
            initialValues: {
                type: ObjectConstructor;
                default: any;
            };
            initialErrors: {
                type: ObjectConstructor;
                default: any;
            };
            initialTouched: {
                type: ObjectConstructor;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSubmit: {
                type: import('vue').PropType<import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>>;
                default: any;
            };
            onInvalidSubmit: {
                type: import('vue').PropType<import('vee-validate').InvalidSubmissionHandler>;
                default: any;
            };
            keepValues: {
                type: BooleanConstructor;
                default: boolean;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
        }>>, "name" | "onSubmit" | "initialValues" | "as" | "validationSchema" | "initialErrors" | "initialTouched" | "validateOnMount" | "onInvalidSubmit" | "keepValues"> & import('vue').ShallowUnwrapRef<() => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }> | import('vue').Slot<any> | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>[] | {
            default: () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>[];
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            setFieldError: import('vee-validate').FormContext["setFieldError"];
            setErrors: import('vee-validate').FormContext["setErrors"];
            setFieldValue: import('vee-validate').FormContext["setFieldValue"];
            setValues: import('vee-validate').FormContext["setValues"];
            setFieldTouched: import('vee-validate').FormContext["setFieldTouched"];
            setTouched: import('vee-validate').FormContext["setTouched"];
            resetForm: import('vee-validate').FormContext["resetForm"];
            resetField: import('vee-validate').FormContext["resetField"];
            validate: import('vee-validate').FormContext["validate"];
            validateField: import('vee-validate').FormContext["validateField"];
            getValues: import('vee-validate').FormSlotProps["getValues"];
            getMeta: import('vee-validate').FormSlotProps["getMeta"];
            getErrors: import('vee-validate').FormSlotProps["getErrors"];
            meta: import('vee-validate').FormSlotProps["meta"];
            values: import('vee-validate').FormSlotProps["values"];
            errors: import('vee-validate').FormSlotProps["errors"];
            $slots: {
                default: (arg: import('vee-validate').FormSlotProps) => import('vue').VNode[];
            };
        }) | null;
        form: HTMLFormElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{}, {
    submit: () => void;
    validate: () => Promise<any>;
    resetForm: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    submit: (model: FormSubmitPayload<any>, actions: Actions) => any;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onSubmit?: ((model: FormSubmitPayload<any>, actions: Actions) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    veeform: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            name: string;
            onSubmit: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>;
            as: string;
            initialValues: Record<string, any>;
            validateOnMount: boolean;
            validationSchema: Record<string, any>;
            initialErrors: Record<string, any>;
            initialTouched: Record<string, any>;
            onInvalidSubmit: import('vee-validate').InvalidSubmissionHandler;
            keepValues: boolean;
        }> & Omit<{
            readonly name: string;
            readonly as: string;
            readonly validateOnMount: boolean;
            readonly keepValues: boolean;
            readonly onSubmit?: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject, import('vee-validate').GenericObject, unknown> | undefined;
            readonly initialValues?: Record<string, any> | undefined;
            readonly validationSchema?: Record<string, any> | undefined;
            readonly initialErrors?: Record<string, any> | undefined;
            readonly initialTouched?: Record<string, any> | undefined;
            readonly onInvalidSubmit?: import('vee-validate').InvalidSubmissionHandler<import('vee-validate').GenericObject, import('vee-validate').GenericObject> | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            as: {
                type: import('vue').PropType<string>;
                default: string;
            };
            validationSchema: {
                type: ObjectConstructor;
                default: any;
            };
            initialValues: {
                type: ObjectConstructor;
                default: any;
            };
            initialErrors: {
                type: ObjectConstructor;
                default: any;
            };
            initialTouched: {
                type: ObjectConstructor;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSubmit: {
                type: import('vue').PropType<import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>>;
                default: any;
            };
            onInvalidSubmit: {
                type: import('vue').PropType<import('vee-validate').InvalidSubmissionHandler>;
                default: any;
            };
            keepValues: {
                type: BooleanConstructor;
                default: boolean;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
        }>>, "name" | "onSubmit" | "initialValues" | "as" | "validationSchema" | "initialErrors" | "initialTouched" | "validateOnMount" | "onInvalidSubmit" | "keepValues">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            as: {
                type: import('vue').PropType<string>;
                default: string;
            };
            validationSchema: {
                type: ObjectConstructor;
                default: any;
            };
            initialValues: {
                type: ObjectConstructor;
                default: any;
            };
            initialErrors: {
                type: ObjectConstructor;
                default: any;
            };
            initialTouched: {
                type: ObjectConstructor;
                default: any;
            };
            validateOnMount: {
                type: BooleanConstructor;
                default: boolean;
            };
            onSubmit: {
                type: import('vue').PropType<import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>>;
                default: any;
            };
            onInvalidSubmit: {
                type: import('vue').PropType<import('vee-validate').InvalidSubmissionHandler>;
                default: any;
            };
            keepValues: {
                type: BooleanConstructor;
                default: boolean;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
        }>>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }> | import('vue').Slot<any> | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>[] | {
            default: () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
                [key: string]: any;
            }>[];
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
            name: string;
            onSubmit: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>;
            as: string;
            initialValues: Record<string, any>;
            validateOnMount: boolean;
            validationSchema: Record<string, any>;
            initialErrors: Record<string, any>;
            initialTouched: Record<string, any>;
            onInvalidSubmit: import('vee-validate').InvalidSubmissionHandler;
            keepValues: boolean;
        }, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        name: string;
        onSubmit: import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>;
        as: string;
        initialValues: Record<string, any>;
        validateOnMount: boolean;
        validationSchema: Record<string, any>;
        initialErrors: Record<string, any>;
        initialTouched: Record<string, any>;
        onInvalidSubmit: import('vee-validate').InvalidSubmissionHandler;
        keepValues: boolean;
    }> & Omit<Readonly<import('vue').ExtractPropTypes<{
        as: {
            type: import('vue').PropType<string>;
            default: string;
        };
        validationSchema: {
            type: ObjectConstructor;
            default: any;
        };
        initialValues: {
            type: ObjectConstructor;
            default: any;
        };
        initialErrors: {
            type: ObjectConstructor;
            default: any;
        };
        initialTouched: {
            type: ObjectConstructor;
            default: any;
        };
        validateOnMount: {
            type: BooleanConstructor;
            default: boolean;
        };
        onSubmit: {
            type: import('vue').PropType<import('vee-validate').SubmissionHandler<import('vee-validate').GenericObject>>;
            default: any;
        };
        onInvalidSubmit: {
            type: import('vue').PropType<import('vee-validate').InvalidSubmissionHandler>;
            default: any;
        };
        keepValues: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
    }>>, "name" | "onSubmit" | "initialValues" | "as" | "validationSchema" | "initialErrors" | "initialTouched" | "validateOnMount" | "onInvalidSubmit" | "keepValues"> & import('vue').ShallowUnwrapRef<() => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }> | import('vue').Slot<any> | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>[] | {
        default: () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>[];
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        setFieldError: import('vee-validate').FormContext["setFieldError"];
        setErrors: import('vee-validate').FormContext["setErrors"];
        setFieldValue: import('vee-validate').FormContext["setFieldValue"];
        setValues: import('vee-validate').FormContext["setValues"];
        setFieldTouched: import('vee-validate').FormContext["setFieldTouched"];
        setTouched: import('vee-validate').FormContext["setTouched"];
        resetForm: import('vee-validate').FormContext["resetForm"];
        resetField: import('vee-validate').FormContext["resetField"];
        validate: import('vee-validate').FormContext["validate"];
        validateField: import('vee-validate').FormContext["validateField"];
        getValues: import('vee-validate').FormSlotProps["getValues"];
        getMeta: import('vee-validate').FormSlotProps["getMeta"];
        getErrors: import('vee-validate').FormSlotProps["getErrors"];
        meta: import('vee-validate').FormSlotProps["meta"];
        values: import('vee-validate').FormSlotProps["values"];
        errors: import('vee-validate').FormSlotProps["errors"];
        $slots: {
            default: (arg: import('vee-validate').FormSlotProps) => import('vue').VNode[];
        };
    }) | null;
    form: HTMLFormElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
