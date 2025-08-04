import ChatEntity from '../Entity/ChatEntity.js';
import ChatRepositoryInterface from '../Repository/ChatRepositoryInterface';

export default class FindChatUseCase {
  constructor(private repository: ChatRepositoryInterface) {}

  async execute(whatsAppId: string) {
    const chat = await this.repository.find(whatsAppId);
    return chat && new ChatEntity(chat);
  }
}
