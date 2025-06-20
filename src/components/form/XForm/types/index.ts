import { type ISchema, type InferType } from 'yup';
import { type FormActions as FormActionsVeeValidate, type FormContext } from 'vee-validate';

export type Model<T extends ISchema<any>> = InferType<T>;

export type FormSubmitPayload<T> = Record<keyof T, T[keyof T]>;

export type FormActions = FormActionsVeeValidate<FormContext<any>>;
