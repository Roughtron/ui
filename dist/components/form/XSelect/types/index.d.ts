export type SimpleOption = string;
export interface Option {
    [key: string]: any;
}
export type OptionItem = Option | string | number;
export type Options = OptionItem[];
