import { type ISchema, type InferType } from 'yup';
import { type FormActions, type FormContext } from 'vee-validate';

export type Model<T extends ISchema<any>> = InferType<T>;

export type FormSubmitPayload<T> = Record<keyof T, T[keyof T]>;

export type Actions = FormActions<FormContext<any>>;
