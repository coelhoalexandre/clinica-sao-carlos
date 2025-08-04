import ChatEntity from '../Entity/ChatEntity.js';
import ChatModelInDatabaseInterface from '../Repository/ChatModelInDatabaseInterface.js';
import ChatRepositoryInterface from '../Repository/ChatRepositoryInterface.js';

export default class UpdateChatUseCase {
  constructor(private repository: ChatRepositoryInterface) {}

  async execute(chat: ChatEntity) {
    const chatHandled = this.handleChat(chat);

    await this.repository.update(chatHandled);
  }

  private handleChat(chat: ChatEntity): ChatModelInDatabaseInterface {
    return {
      id: chat.whatsAppId,
      client: chat.client,
      process: chat.process,
      partialClient: chat.partialClient
        ? {
            id: chat.partialClient.whatsAppId,
            fullName: chat.partialClient.fullName,
            password: chat.partialClient.password,
          }
        : null,
    };
  }
}
