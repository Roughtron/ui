import { PropType } from 'vue';
import { Radio } from '../../XRadio';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: Radio;
            active: boolean;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    fields: {
        type: PropType<Radio[]>;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    variant: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    block: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    fields: {
        type: PropType<Radio[]>;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    variant: {
        type: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    block: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    block: boolean;
    variant: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
