import { PropType } from 'vue';
import { FileInput } from '../types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<FileInput[]>;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    maxFiles: {
        type: NumberConstructor;
        default: number;
        validator: (v: number) => boolean;
    };
    maxFileSize: {
        type: NumberConstructor;
        default: number;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: FileInput[]) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<FileInput[]>;
        default: () => never[];
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    maxFiles: {
        type: NumberConstructor;
        default: number;
        validator: (v: number) => boolean;
    };
    maxFileSize: {
        type: NumberConstructor;
        default: number;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: FileInput[]) => any) | undefined;
}>, {
    name: string;
    modelValue: FileInput[];
    placeholder: string;
    maxFiles: number;
    maxFileSize: number;
    accept: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    input: HTMLInputElement;
}, HTMLSpanElement>;
export default _default;
