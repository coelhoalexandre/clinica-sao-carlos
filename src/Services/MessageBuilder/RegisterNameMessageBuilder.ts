import MessageBuilderInterface from './MessageBuilderInterface';

export default class RegisterNameMessageBuilder
  implements MessageBuilderInterface
{
  constructor() {}

  build(): string {
    return 'Vamos dar inicio ao proximo de registro, Diga seu Nome completo.';
  }
}
