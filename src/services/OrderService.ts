export class OrderService {
	constructor() {}

	async create(product: string, price: number, quantity: number): Promise<string> {
		return crypto.randomUUID();
	}
}
