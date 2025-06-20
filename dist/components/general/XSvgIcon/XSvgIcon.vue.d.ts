import { PropType } from 'vue';
import { CssSize } from '../../../types/shared.types';
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
        type: PropType<CssSize>;
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
        type: PropType<CssSize>;
        default: string;
    };
}>> & Readonly<{}>, {
    color: string;
    size: CssSize;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGSVGElement>;
export default _default;
