import ClientEntity from '../Entity/ClientEntity.js';
import ClientRepositoryInterface from '../Repository/ClientRepositoryInterface';

export default class FindClientUseCase {
  constructor(private repository: ClientRepositoryInterface) {}

  async execute(whatsAppId: string) {
    const client = await this.repository.find(whatsAppId);
    return client && new ClientEntity(client);
  }
}
