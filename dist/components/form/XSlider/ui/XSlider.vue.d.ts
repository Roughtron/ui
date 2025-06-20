import { PropType } from 'vue';
import { SliderModel } from '../types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    unit: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<SliderModel>;
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
    prepends: {
        type: PropType<{
            from: string;
            to: string;
        }>;
        default: () => {
            from: string;
            to: string;
        };
    };
    readonly: BooleanConstructor;
    float: BooleanConstructor;
    disabled: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: SliderModel) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    unit: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<SliderModel>;
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
    prepends: {
        type: PropType<{
            from: string;
            to: string;
        }>;
        default: () => {
            from: string;
            to: string;
        };
    };
    readonly: BooleanConstructor;
    float: BooleanConstructor;
    disabled: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: SliderModel) => any) | undefined;
}>, {
    color: string;
    size: string;
    disabled: boolean;
    readonly: boolean;
    unit: string;
    prepends: {
        from: string;
        to: string;
    };
    float: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
