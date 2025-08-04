import ProcessManipulationError from '../../../../ProcessManipulationError.js';
import ActionHandlerInterface, { HandleObject } from './ActionHandlerInterface';

export default class ActionOfIndexHandler implements ActionHandlerInterface {
  public handle({ optionList, message }: HandleObject): number {
    const index = Number(message) - 1;

    if (isNaN(index))
      throw new ProcessManipulationError(
        `Escolha um numero válido para a opção. As opções disponíveis são:\n${optionList.convertToNumericMenu()}`
      );

    if (index < 0 || index >= optionList.length)
      throw new ProcessManipulationError(
        `O número escolhido não é uma opção válida. As opções disponíveis são:\n${optionList.convertToNumericMenu()}`
      );

    return index;
  }
}
