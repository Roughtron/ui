export declare enum SearchMode {
    LINE_CONTAINS = "Line contains",
    LINE_CONTAINS_REGEX_MATCH = "Line contains regex match"
}
export interface Search {
    search: string;
    mode?: SearchMode;
}
