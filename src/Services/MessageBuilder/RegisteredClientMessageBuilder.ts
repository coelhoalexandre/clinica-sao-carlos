import ChatEntity from '../../modules/Chat/Entity/ChatEntity';
import OptionListInterface from '../../modules/Chat/ValueObjects/OptionList/OptionListInterface';
import MessageBuilderInterface from './MessageBuilderInterface';

export default class RegisteredClientMessageBuilder
  implements MessageBuilderInterface
{
  constructor(
    private readonly chat: ChatEntity,
    private readonly optionList: OptionListInterface,
    private readonly error: string | null
  ) {}

  build(): string {
    if (this.error) return this.error;

    return `Olá, ${
      this.chat.firstName
    }! Como cliente cadastrado da Clínica São Carlos, você possui as seguintes opções: (Digite e envie o número da opção escolhida)\n${this.optionList.convertToNumericMenu()}`;
  }
}
