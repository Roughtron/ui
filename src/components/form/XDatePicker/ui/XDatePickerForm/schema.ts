import { object, string } from 'yup';
import { isValidDate, isValidTime, getFormattedDate, isBefore } from '../shared';

export default object({
  startDate: string().test('is-valid-date', function(v = '') {
    if (!v && !this.parent.endDate) return true;

    if (!isValidDate(v)) return false;

    if (!this.parent.endDate) return true;

    const start = getFormattedDate({ date: v, time: this.parent.startTime });
    const end = getFormattedDate({ date: this.parent.endDate, time: this.parent.endTime || '23:59' });

    return isBefore(start, end);
  }),
  startTime: string().test('is-valid-time', function(v = '') {
    if (!v) return true;

    return isValidTime(v);
  }),
  endDate: string().test('is-valid-date', function(v = '') {
    if (!v && !this.parent.startDate) return true;

    if (!isValidDate(v)) return false;

    if (!this.parent.startDate) return true;

    const start = getFormattedDate({ date: this.parent.startDate, time: this.parent.startTime });
    const end = getFormattedDate({ date: v, time: this.parent.endTime || '23:59' });

    return isBefore(start, end);
  }),
  endTime: string().test('is-valid-time', function(v = '') {
    if (!v) return true;

    return isValidTime(v);
  }),
});