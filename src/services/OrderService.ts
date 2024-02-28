import { Producer, Kafka } from 'kafkajs';

export class OrderService {
	#producer: Producer;

	constructor(kafka: Kafka) {
		this.#producer = kafka.producer();
	}

	async create(value: string): Promise<string> {
		try {
			console.log('Connecting to kafka...');
			await this.#producer.connect();
			console.log('Connected to kafka!');

			const key = crypto.randomUUID();

			const result = await this.#producer.send({
				topic: 'Orders',
				messages: [
					{
						key,
						value,
					},
				],
			});

			console.log(`Sent order successfully! ${JSON.stringify(result)}`);

			await this.#producer.disconnect();

			return key;
		} catch (exception) {
			return `There was an error: ${(exception as Error).message}`;
		}
	}
}
