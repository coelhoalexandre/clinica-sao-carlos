import ChatModelInDatabaseInterface from './ChatModelInDatabaseInterface';

export default interface ChatRepositoryInterface {
  save(chat: ChatModelInDatabaseInterface): Promise<void>;
  find(whatsAppId: string): Promise<ChatModelInDatabaseInterface | undefined>;
  update(chat: ChatModelInDatabaseInterface): Promise<void>;
}
