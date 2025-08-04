import ChatEntity from '../Entity/ChatEntity';
import FindChatUseCase from '../UseCases/FindChatUseCase';
import SaveChatUseCase from '../UseCases/SaveChatUseCase';
import UpdateChatUseCase from '../UseCases/UpdateChatUseCase';

export default class ChatController {
  constructor(
    private findChatUseCase: FindChatUseCase,
    private saveChatUseCase: SaveChatUseCase,
    private updateChatUseCase: UpdateChatUseCase
  ) {}

  async save(chat: ChatEntity) {
    await this.saveChatUseCase.execute(chat);
  }

  async find(whatsAppId: string) {
    const chat = await this.findChatUseCase.execute(whatsAppId);
    return chat;
  }

  async update(chat: ChatEntity) {
    await this.updateChatUseCase.execute(chat);
  }
}
