import { PropType } from 'vue';
interface ListItem {
    [key: string]: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            item: ListItem;
            index: number;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    value: null;
    items: PropType<ListItem[]>;
    itemText: FunctionConstructor;
    itemTextKey: StringConstructor;
    itemValue: FunctionConstructor;
    itemValueKey: StringConstructor;
    prependIcon: (StringConstructor | FunctionConstructor)[];
    prependIconKey: StringConstructor;
    prependIconProps: ObjectConstructor;
    appendIcon: (StringConstructor | FunctionConstructor)[];
    appendIconKey: StringConstructor;
    appendIconProps: ObjectConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    input: (val: ListItem | ListItem[]) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: null;
    items: PropType<ListItem[]>;
    itemText: FunctionConstructor;
    itemTextKey: StringConstructor;
    itemValue: FunctionConstructor;
    itemValueKey: StringConstructor;
    prependIcon: (StringConstructor | FunctionConstructor)[];
    prependIconKey: StringConstructor;
    prependIconProps: ObjectConstructor;
    appendIcon: (StringConstructor | FunctionConstructor)[];
    appendIconKey: StringConstructor;
    appendIconProps: ObjectConstructor;
}>> & Readonly<{
    onInput?: ((val: ListItem | ListItem[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
