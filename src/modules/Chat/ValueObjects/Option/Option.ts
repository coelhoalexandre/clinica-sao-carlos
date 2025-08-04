import { OptionActionType, OptionDetails } from './OptionActionType';
import OptionObjectInterface from './OptionObjectInterface';

export default class Option {
  private readonly name?: string;
  private readonly action: OptionActionType;
  constructor({ name, action }: OptionObjectInterface) {
    this.name = name;
    this.action = action;
  }

  public toString(): string | null {
    return this.name || null;
  }

  public executeAction(details: OptionDetails) {
    this.action(details);
  }
}
