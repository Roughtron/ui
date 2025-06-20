import { EmptyObject, Nullable } from '../../../../types/shared.types';
export declare enum DatepickerUnit {
    MINUTE = "minute",
    HOUR = "hour",
    DAY = "day",
    TODAY = "today",
    YESTERDAY = "yesterday",
    BEFORE_YESTERDAY = "before-yesterday",
    WEEK = "week",
    MONTH = "month",
    RANGE = "range",
    ALL_TIME = "all-time"
}
export type DatepickerOption = {
    id: number;
    title: string;
    value: number;
    unit: DatepickerUnit;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
} | EmptyObject;
export interface EntityTimeline {
    start: string;
    end: Nullable<string>;
}
