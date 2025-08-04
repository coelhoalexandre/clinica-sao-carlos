import ChatEntity from '../modules/Chat/Entity/ChatEntity.js';
import ActionHandlerInterface from '../modules/Chat/ValueObjects/ActionHandler/ActionHandlerInterface.js';
import ActionOfIndexHandler from '../modules/Chat/ValueObjects/ActionHandler/ActionOfIndexHandler.js';
import SingleActionHandler from '../modules/Chat/ValueObjects/ActionHandler/SingleActionHandler.js';
import OptionObjectInterface from '../modules/Chat/ValueObjects/Option/OptionObjectInterface.js';
import OptionList from '../modules/Chat/ValueObjects/OptionList/OptionList.js';
import OptionListInterface from '../modules/Chat/ValueObjects/OptionList/OptionListInterface.js';
import { ProcessType } from '../modules/Chat/ValueObjects/Process/ProcessType.js';

const generateOptionList = (
  chat: ChatEntity,
  actionHandler: ActionHandlerInterface,
  ...options: OptionObjectInterface[]
) => new OptionList(chat, actionHandler, ...options);

const setOfOptionList: Record<
  ProcessType,
  (chat: ChatEntity) => OptionListInterface
> = {
  FIRST_MESSAGE: (chat: ChatEntity) =>
    generateOptionList(chat, new SingleActionHandler(), {
      action: ({ chat }) => {
        chat.changeProcess('UNREGISTERED_CLIENT');
      },
    }),
  UNREGISTERED_CLIENT: (chat: ChatEntity) =>
    generateOptionList(chat, new ActionOfIndexHandler(), {
      name: 'Cadastrar',
      action: ({ chat }) => {
        chat.updatePartialClient({ whatsAppId: chat.whatsAppId });
        chat.changeProcess('REGISTER_NAME');
      },
    }),
  REGISTERED_CLIENT: (chat: ChatEntity) =>
    generateOptionList(chat, new ActionOfIndexHandler()),
  REGISTER_NAME: (chat: ChatEntity) =>
    generateOptionList(chat, new SingleActionHandler(), {
      action: ({ chat, message }) => {
        chat.updatePartialClient({ fullName: message });
        chat.changeProcess('REGISTER_PASSWORD');
      },
    }),
  REGISTER_PASSWORD: (chat: ChatEntity) =>
    generateOptionList(chat, new SingleActionHandler(), {
      action: ({ chat, message }) => {
        chat.updatePartialClient({ password: message });
        chat.updateClient();
        chat.changeProcess('REGISTERED_CLIENT');
      },
    }),
};

const optionListFactory = (chat: ChatEntity): OptionListInterface => {
  const getOptionList = setOfOptionList[chat.process];

  if (typeof getOptionList !== 'function')
    throw new Error('Invalid Process Type');

  return getOptionList(chat);
};

export default optionListFactory;
