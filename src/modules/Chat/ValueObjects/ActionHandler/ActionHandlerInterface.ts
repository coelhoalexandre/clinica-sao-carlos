import OptionListInterface from '../OptionList/OptionListInterface';

export interface HandleObject {
  optionList: OptionListInterface;
  message: string;
}

export default interface ActionHandlerInterface {
  handle(handleObject: HandleObject): number;
}
