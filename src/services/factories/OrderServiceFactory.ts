import { OrderService } from '../OrderService';

export const CreateOrderService = (): OrderService => {
	return new OrderService();
};
