import DatabaseConnectionInterface from '../../../Database/DatabaseConnectionInterface';
import ChatModelInDatabaseInterface from './ChatModelInDatabaseInterface';
import ChatRepositoryInterface from './ChatRepositoryInterface';

export default class ChatRepositoryJSON implements ChatRepositoryInterface {
  private path = 'chats';
  constructor(private database: DatabaseConnectionInterface) {}

  async save(client: ChatModelInDatabaseInterface) {
    await this.database.post(`${this.path}`, client);
  }

  async find(whatsAppId: string) {
    return await this.database.get<ChatModelInDatabaseInterface | undefined>(
      `${this.path}/${whatsAppId}`
    );
  }

  async update(chat: ChatModelInDatabaseInterface): Promise<void> {
    await this.database.put(`${this.path}/${chat.id}`, chat);
  }
}
