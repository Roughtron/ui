import dayjs from 'dayjs';

export const format = 'YYYY-MM-DD HH:mm';
export const parseDateFormat = 'DD/MM/YYYY';
export const parseTimeFormat = 'HH:mm';
export const parseFormat = `${parseDateFormat} ${parseTimeFormat}`;
export const defaultTime = '00:00';

export const isValidDate = (date: string) => dayjs(date, parseDateFormat, true).isValid();
export const isValidTime = (time: string) => dayjs(time, parseTimeFormat, true).isValid();

export const getFormattedDate = ({ date, time }: { date: string, time: string }) => {
  return dayjs(`${date} ${time || defaultTime}`, parseFormat).format(format);
};

export const isBefore = (start: string, end: string) => dayjs(start).isBefore(dayjs(end));
