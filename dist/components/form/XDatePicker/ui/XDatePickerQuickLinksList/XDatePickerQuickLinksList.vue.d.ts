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
}>> & Readonly<{
    "onUpdate:model-value"?: ((value: DatepickerOption) => any) | undefined;
}>, {
    modelValue: DatepickerOption;
    options: DatepickerOption[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
