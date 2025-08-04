import ClientEntity from '../Entity/ClientEntity';
import ClientModelInDatabaseInterface from '../Repository/ClientModelInDatabaseInterface';
import ClientRepositoryInterface from '../Repository/ClientRepositoryInterface';

export default class SaveClientUseCase {
  constructor(private repository: ClientRepositoryInterface) {}

  async execute(client: ClientEntity) {
    const clientHandled = this.handleClient(client);

    await this.repository.save(clientHandled);
  }

  private handleClient(client: ClientEntity): ClientModelInDatabaseInterface {
    return {
      id: client.whatsAppId,
      fullName: client.fullName,
      password: client.password,
    };
  }
}
