import { Kafka } from 'kafkajs';
import { OrderService } from '../OrderService';

export const CreateOrderService = (kafka: Kafka): OrderService => {
	return new OrderService(kafka);
};
