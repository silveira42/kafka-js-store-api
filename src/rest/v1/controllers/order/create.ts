import { Context } from 'hono';
import { OrderService } from '../../../../services/OrderService';
import { orderCreateSchema, orderCreateType } from '../../schemas/order/create';

export const create = (orderService: OrderService) => async (c: Context) => {
	try {
		const body: orderCreateType = await orderCreateSchema.validate(await c.req.json());

		const uid = await orderService.create(body.product, body.price, body.quantity);

		return c.json({ orderId: uid }, 200);
	} catch (error) {
		return c.json({ error: (error as Error).message }, 500);
	}
};
