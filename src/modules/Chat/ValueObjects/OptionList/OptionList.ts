import ProcessManipulationError from '../../../../ProcessManipulationError.js';
import ChatEntity from '../../Entity/ChatEntity.js';
import Option from '../Option/Option.js';
import { OptionDetails } from '../Option/OptionActionType.js';
import OptionObjectInterface from '../Option/OptionObjectInterface.js';
import ActionHandlerInterface from '../ActionHandler/ActionHandlerInterface.js';
import OptionListInterface from './OptionListInterface.js';

export default class OptionList implements OptionListInterface {
  private readonly options: Option[] = [];

  constructor(
    private readonly chat: ChatEntity,
    private readonly actionHandler: ActionHandlerInterface,
    ...options: OptionObjectInterface[]
  ) {
    this.add(...options);
  }

  public add(...options: OptionObjectInterface[]) {
    const optionList = options.map((option) => new Option(option));

    return this.options.push(...optionList);
  }

  public get length(): number {
    return this.options.length;
  }

  public listNames(): (string | null)[] {
    return this.options.map((option) => option.toString());
  }

  public executeAction(message: string): void {
    const index = this.actionHandler.handle({ message, optionList: this });
    this.options[index].executeAction({ chat: this.chat, message });
  }

  public convertToNumericMenu(): string {
    const menu = this.options
      .map((option, index) => `\n[${index + 1}] - ${option.toString()}`)
      .join('');

    if (!menu) return '\nNão há opções.';

    return menu;
  }
}
