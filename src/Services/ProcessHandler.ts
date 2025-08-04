import OptionListInterface from '../modules/Chat/ValueObjects/OptionList/OptionListInterface.js';
import ProcessManipulationError from '../ProcessManipulationError.js';

export default class ProcessHandler {
  constructor(private readonly optionList: OptionListInterface) {}

  handle(message: string): string | null {
    try {
      this.optionList.executeAction(message);
      return null;
    } catch (err) {
      if (err instanceof ProcessManipulationError) {
        return err.message;
      } else throw err;
    }
  }
}
