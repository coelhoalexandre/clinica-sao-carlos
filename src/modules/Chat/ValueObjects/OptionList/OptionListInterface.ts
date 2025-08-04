import OptionObjectInterface from '../Option/OptionObjectInterface';

export default interface OptionListInterface {
  get length(): number;
  add(...options: OptionObjectInterface[]): number;
  listNames(): (string | null)[];
  executeAction(message: string): void;
  convertToNumericMenu(): string;
}
