import { PropType } from 'vue';
import { TXCssSize } from '../../types/shared.types';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<TXCssSize>;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<TXCssSize>;
        default: string;
    };
}>> & Readonly<{}>, {
    color: string;
    size: TXCssSize;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGSVGElement>;
export default _default;
