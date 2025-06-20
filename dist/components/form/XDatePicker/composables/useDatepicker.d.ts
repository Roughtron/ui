import { DatepickerOption, EntityTimeline } from '../types';
import { Nullable } from '../../../../types/shared.types';
declare const _default: () => {
    getDateTimeRange: (selectedDate: DatepickerOption, entityTimeline?: EntityTimeline) => {
        dateTimeFromUtc: Nullable<string>;
        dateTimeToUtc: Nullable<string>;
    };
};
export default _default;
