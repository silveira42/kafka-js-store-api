import { Config } from '../../../app';
import { Hono } from 'hono';
import { orderRouter } from './order';

export const v1Router = (services: Config['services']) => {
	const hono = new Hono<{}>();

	// Default index routes
	hono.get('/', (c) => c.json({ message: 'Welcome home!' }, 200));
	hono.notFound((c) => c.json({ message: 'Endpoint Not Found' }, 404));

	// App routes
	hono.route('/order', orderRouter(services));

	return hono;
};
