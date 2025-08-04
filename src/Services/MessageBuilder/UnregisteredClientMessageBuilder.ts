import OptionListInterface from '../../modules/Chat/ValueObjects/OptionList/OptionListInterface';
import MessageBuilderInterface from './MessageBuilderInterface';

export default class UnregisteredClientMessageBuilder
  implements MessageBuilderInterface
{
  constructor(
    private readonly optionList: OptionListInterface,
    private readonly error: string | null
  ) {}

  build(): string {
    if (this.error) return this.error;

    return `Olá! Você está entrando em contato com a Clínica São Carlos. O que deseja? (Digite e envie o número da ação escolhida)\n${this.optionList.convertToNumericMenu()}`;
  }
}
