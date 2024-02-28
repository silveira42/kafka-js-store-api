import { object, string, InferType, number } from 'yup';

export const orderCreateSchema = object({
	product: string().required(),
	price: number().required(),
	quantity: number().required(),
});

export type orderCreateType = InferType<typeof orderCreateSchema>;
