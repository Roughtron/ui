import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { DatepickerUnit, type DatepickerOption, type EntityTimeline } from '../types';
import { type Nullable } from '@/types/shared.types';

dayjs.extend(utc);

export default () => {
  const getDateTimeRange = (selectedDate: DatepickerOption, entityTimeline?: EntityTimeline) => {
    const format = 'DD/MM/YYYY HH:mm';
    const { end: finishedAt } = entityTimeline ?? {};
    const computedNow = finishedAt ? dayjs.utc(finishedAt) : dayjs.utc().local();
    const now = dayjs.utc().local();
    const { startDate, startTime, endDate, endTime } = selectedDate;
    let dateTimeFromUtc: Nullable<string> = null;
    let dateTimeToUtc: Nullable<string> = null;
    let previous;
    let previousWeek;
    let previousMonth;
    let previousDay;

    switch (selectedDate.unit) {
      case DatepickerUnit.RANGE:
        dateTimeFromUtc = dayjs(`${startDate} ${startTime}`, format).toISOString();
        dateTimeToUtc = dayjs(`${endDate} ${endTime}`, format).toISOString();
        break;

      case DatepickerUnit.WEEK:
        previousWeek = now.startOf(DatepickerUnit.WEEK).subtract(selectedDate.value, DatepickerUnit.WEEK);

        dateTimeFromUtc = previousWeek.toISOString();
        dateTimeToUtc = selectedDate.value
          ? previousWeek.endOf(DatepickerUnit.WEEK).toISOString()
          : now.toISOString();
        break;

      case DatepickerUnit.MONTH:
        previousMonth = now.startOf(DatepickerUnit.MONTH).subtract(selectedDate.value, DatepickerUnit.MONTH);

        dateTimeFromUtc = previousMonth.toISOString();
        dateTimeToUtc = selectedDate.value
          ? previousMonth.endOf(DatepickerUnit.MONTH).toISOString()
          : now.toISOString();
        break;

      case DatepickerUnit.HOUR:
      case DatepickerUnit.MINUTE:
        dateTimeFromUtc = computedNow.subtract(selectedDate.value, selectedDate.unit).toISOString();
        dateTimeToUtc = computedNow.toISOString();
        break;

      case DatepickerUnit.DAY:
        previousDay = computedNow.subtract(selectedDate.value, DatepickerUnit.DAY);

        dateTimeFromUtc = previousDay.toISOString();
        dateTimeToUtc = computedNow.toISOString();
        break;

      case DatepickerUnit.TODAY:
      case DatepickerUnit.YESTERDAY:
      case DatepickerUnit.BEFORE_YESTERDAY:
        previous = now.subtract(selectedDate.value, DatepickerUnit.DAY);

        dateTimeFromUtc = previous.startOf(DatepickerUnit.DAY).toISOString();
        dateTimeToUtc = previous.endOf(DatepickerUnit.DAY).toISOString();
        break;

      case DatepickerUnit.ALL_TIME:
        dateTimeFromUtc = null;
        dateTimeToUtc = null;
        break;
    }

    return { dateTimeFromUtc, dateTimeToUtc };
  };

  return { getDateTimeRange };
};
