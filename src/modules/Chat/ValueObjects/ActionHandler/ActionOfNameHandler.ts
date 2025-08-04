import ProcessManipulationError from '../../../../ProcessManipulationError.js';
import ActionHandlerInterface, { HandleObject } from './ActionHandlerInterface';

export default class ActionOfNameHandler implements ActionHandlerInterface {
  public handle({ optionList, message }: HandleObject): number {
    const optionNames = optionList.listNames();

    const index = optionNames.indexOf(message);

    if (index === -1)
      throw new ProcessManipulationError(
        `A palavra "${message}" não está na lista de opções. A lista de opções é:\n${optionList.convertToNumericMenu()}`
      );

    return index;
  }
}
