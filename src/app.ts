import { Kafka } from 'kafkajs';
import { start } from './rest/starter';
import { OrderService } from './services/OrderService';
import { CreateOrderService } from './services/factories/OrderServiceFactory';
import 'dotenv/config';

export interface Config {
	port: number;
	services: {
		OrderService: OrderService;
	};
}

const kafka = new Kafka({
	clientId: process.env.KAFKA_CLIENT_ID,
	brokers: [process.env.KAFKA_HOST + ':' + process.env.KAFKA_PORT],
});

(async () => {
	const config: Config = {
		port: Number(process.env.PORT) || 3000,
		services: {
			OrderService: CreateOrderService(kafka),
		},
	};

	start(config);
})();
