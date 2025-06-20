export declare const useReactiveArrayModel: <T>(modelValue: T[], emit: (e: "update:modelValue", ...args: any[]) => void) => import('vue').Reactive<T[]>;
export declare const useReactiveObjectModel: <T extends Record<string, any>>(modelValue: T, emit: (e: "update:modelValue", ...args: any[]) => void) => import('vue').Reactive<T>;
