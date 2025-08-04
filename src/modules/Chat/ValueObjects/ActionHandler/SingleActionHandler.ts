import ActionHandlerInterface, { HandleObject } from './ActionHandlerInterface';

export default class SingleActionHandler implements ActionHandlerInterface {
  public handle({ optionList }: HandleObject): number {
    if (optionList.length > 1 || optionList.length < 1) {
      throw new Error(
        'There is no single action. There are either more actions or none at all.'
      );
    }

    return 0;
  }
}
