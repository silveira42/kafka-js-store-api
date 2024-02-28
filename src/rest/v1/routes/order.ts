import { Hono } from 'hono';
import { Config } from '../../../app';
import { create } from '../controllers/order/create';

export const orderRouter = (services: Config['services']) => {
	const hono = new Hono<{}>();

	hono.post('/', create(services.OrderService));

	return hono;
};
