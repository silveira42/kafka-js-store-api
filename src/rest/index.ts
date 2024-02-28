import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { Config } from '../app';
import { v1Router } from './v1/routes';

const app = new Hono();

export const restService = (config: Config) => {
	// App routes
	app.use('/*', cors());

	app.get('/', (c) => c.json({ message: 'Welcome home!' }, 200));
	app.get('/hellothere', (c) => c.json({ message: 'General Keboni!' }, 200));
	app.notFound((c) => c.json({ message: 'Endpoint Not Found' }, 404));

	app.route('/api/v1', v1Router(config.services));

	serve({
		fetch: app.fetch,
		port: config.port,
	});

	console.log(`App serving on http://0.0.0.0:${config.port}/`);
};

export default app;
