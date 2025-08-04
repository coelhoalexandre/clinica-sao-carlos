import DatabaseConnectionInterface from '../../../Database/DatabaseConnectionInterface';
import ClientModelInDatabaseInterface from './ClientModelInDatabaseInterface';
import ClientRepositoryInterface from './ClientRepositoryInterface';

export default class ClientRepositoryJSON implements ClientRepositoryInterface {
  private path = 'clients';
  constructor(private database: DatabaseConnectionInterface) {}

  async save(client: ClientModelInDatabaseInterface) {
    await this.database.post(`${this.path}`, client);
  }

  async find(whatsAppId: string) {
    return await this.database.get<ClientModelInDatabaseInterface | undefined>(
      `${this.path}/${whatsAppId}`
    );
  }
}
