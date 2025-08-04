import ChatEntity from '../Entity/ChatEntity.js';
import ChatModelInDatabaseInterface from '../Repository/ChatModelInDatabaseInterface';
import ChatRepositoryInterface from '../Repository/ChatRepositoryInterface';

export default class SaveChatUseCase {
  constructor(private repository: ChatRepositoryInterface) {}

  async execute(chat: ChatEntity) {
    const chatHandled = this.handleChat(chat);
    await this.repository.save(chatHandled);
  }

  private handleChat(chat: ChatEntity): ChatModelInDatabaseInterface {
    return {
      id: chat.whatsAppId,
      client: chat.client,
      partialClient: chat.partialClient,
      process: chat.process,
    };
  }
}
