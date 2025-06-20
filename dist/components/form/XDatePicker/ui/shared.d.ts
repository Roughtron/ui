export declare const format = "YYYY-MM-DD HH:mm";
export declare const parseDateFormat = "DD/MM/YYYY";
export declare const parseTimeFormat = "HH:mm";
export declare const parseFormat = "DD/MM/YYYY HH:mm";
export declare const defaultTime = "00:00";
export declare const isValidDate: (date: string) => boolean;
export declare const isValidTime: (time: string) => boolean;
export declare const getFormattedDate: ({ date, time }: {
    date: string;
    time: string;
}) => string;
export declare const isBefore: (start: string, end: string) => boolean;
