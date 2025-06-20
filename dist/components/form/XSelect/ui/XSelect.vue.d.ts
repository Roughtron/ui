import { PropType } from 'vue';
import { default as VueMultiselect } from 'vue-multiselect';
import { SimpleOption, Option, Options } from '../types';
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: PropType<SimpleOption> | PropType<Options> | PropType<Option> | PropType<number> | null;
        default: string;
    };
    options: {
        type: PropType<Options>;
        default: () => never[];
    };
    size: {
        value: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    color: {
        value: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
    };
    trackBy: {
        type: StringConstructor;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: BooleanConstructor;
    preselectFirst: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    prependIconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    optionPrependIcon: {
        type: FunctionConstructor;
    };
    optionAppendIcon: (StringConstructor | FunctionConstructor)[];
    optionAppendIconProps: ObjectConstructor;
    tagsColor: {
        type: StringConstructor;
    };
    passed: {
        type: BooleanConstructor;
        default: boolean;
    };
    failed: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeListBtnAction: {
        type: StringConstructor;
        default: null;
    };
    beforeListBtnIcon: {
        type: StringConstructor;
        default: null;
    };
    beforeListBtnText: {
        type: StringConstructor;
        default: string;
    };
    beforeListBtnTestId: {
        type: StringConstructor;
        default: string;
    };
    openDirection: {
        type: StringConstructor;
        default: null;
        validator: (v: string) => boolean;
    };
    markSelectedOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    groupValues: {
        type: StringConstructor;
        default: string;
    };
    groupLabel: {
        type: StringConstructor;
        default: string;
    };
    groupSelect: BooleanConstructor;
    flex: BooleanConstructor;
    flexWidth: {
        type: StringConstructor;
        default: string;
    };
    rounded: BooleanConstructor;
    showNoResults: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: (val: Option) => any;
    input: (val: Options | null) => any;
    "update:modelValue": (val: string | number | (string | number)[]) => any;
    "search-change": (val: string) => any;
    open: (val: Option) => any;
    "options-end": () => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: PropType<SimpleOption> | PropType<Options> | PropType<Option> | PropType<number> | null;
        default: string;
    };
    options: {
        type: PropType<Options>;
        default: () => never[];
    };
    size: {
        value: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    color: {
        value: StringConstructor;
        default: string;
        validator: (v: string) => boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
    };
    trackBy: {
        type: StringConstructor;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: BooleanConstructor;
    preselectFirst: BooleanConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    prependIcon: {
        type: StringConstructor;
        default: string;
    };
    prependIconProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    optionPrependIcon: {
        type: FunctionConstructor;
    };
    optionAppendIcon: (StringConstructor | FunctionConstructor)[];
    optionAppendIconProps: ObjectConstructor;
    tagsColor: {
        type: StringConstructor;
    };
    passed: {
        type: BooleanConstructor;
        default: boolean;
    };
    failed: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeListBtnAction: {
        type: StringConstructor;
        default: null;
    };
    beforeListBtnIcon: {
        type: StringConstructor;
        default: null;
    };
    beforeListBtnText: {
        type: StringConstructor;
        default: string;
    };
    beforeListBtnTestId: {
        type: StringConstructor;
        default: string;
    };
    openDirection: {
        type: StringConstructor;
        default: null;
        validator: (v: string) => boolean;
    };
    markSelectedOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    groupValues: {
        type: StringConstructor;
        default: string;
    };
    groupLabel: {
        type: StringConstructor;
        default: string;
    };
    groupSelect: BooleanConstructor;
    flex: BooleanConstructor;
    flexWidth: {
        type: StringConstructor;
        default: string;
    };
    rounded: BooleanConstructor;
    showNoResults: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((val: Option) => any) | undefined;
    onInput?: ((val: Options | null) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string | number | (string | number)[]) => any) | undefined;
    "onSearch-change"?: ((val: string) => any) | undefined;
    onOpen?: ((val: Option) => any) | undefined;
    "onOptions-end"?: (() => any) | undefined;
}>, {
    color: string;
    size: string;
    disabled: boolean;
    modelValue: string | number | Option | Options;
    prependIcon: string;
    prependIconProps: Record<string, any>;
    markSelectedOption: boolean;
    rounded: boolean;
    flex: boolean;
    searchable: boolean;
    preselectFirst: boolean;
    groupSelect: boolean;
    options: Options;
    multiple: boolean;
    limit: number;
    clearable: boolean;
    passed: boolean;
    failed: boolean;
    beforeListBtnAction: string;
    beforeListBtnIcon: string;
    beforeListBtnText: string;
    beforeListBtnTestId: string;
    openDirection: string;
    groupValues: string;
    groupLabel: string;
    flexWidth: string;
    showNoResults: boolean;
}, {}, {}, {
    observeVisibility: DirectiveOptions;
}, string, import('vue').ComponentProvideOptions, true, {
    select: VueMultiselect | null;
}, any>, {
    'single-label'?(_: {
        label: any;
        option: any;
    }): any;
    selection?(_: {
        selectedOptionsCount: number;
    }): any;
    beforeList?(_: {}): any;
    'list-option'?(_: {
        label: any;
        option: any;
    }): any;
    error?(_: {
        errorMessage: string | undefined;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
