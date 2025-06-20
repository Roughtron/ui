import { PropType } from 'vue';
import { DatepickerOption } from '../../types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<DatepickerOption>;
        default: () => {};
    };
    options: {
        type: PropType<DatepickerOption[]>;
        default: () => never[];
    };
    isWide: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:model-value": (value: DatepickerOption) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        type: PropType<DatepickerOption>;
        default: () => {};
    };
    options: {
        type: PropType<DatepickerOption[]>;
        default: () => never[];
    };
    isWide: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:model-value"?: ((value: DatepickerOption) => any) | undefined;
}>, {
    modelValue: DatepickerOption;
    options: DatepickerOption[];
    isWide: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
