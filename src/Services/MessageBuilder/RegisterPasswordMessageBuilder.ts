import ChatEntity from '../../modules/Chat/Entity/ChatEntity';
import MessageBuilderInterface from './MessageBuilderInterface';

export default class RegisterPasswordMessageBuilder
  implements MessageBuilderInterface
{
  constructor(private readonly chat: ChatEntity) {}

  build(): string {
    return `Ótimo! Agora precisamos de uma senha, ${this.chat.partialClient?.fullName}. Essa senha vai servir para provar no local que foi você que agendou e também caso deseja acessar seus dados em outros números. Digite uma senha segura: `;
  }
}
