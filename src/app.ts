import { start } from './rest/starter';
import { OrderService } from './services/OrderService';
import { CreateOrderService } from './services/factories/OrderServiceFactory';

export interface Config {
	port: number;
	services: {
		OrderService: OrderService;
	};
}

(async () => {
	const config: Config = {
		port: Number(process.env.PORT) || 3000,
		services: {
			OrderService: CreateOrderService(),
		},
	};

	start(config);
})();
