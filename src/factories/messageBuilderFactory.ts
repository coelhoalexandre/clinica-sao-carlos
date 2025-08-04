import ChatEntity from '../modules/Chat/Entity/ChatEntity.js';
import OptionListInterface from '../modules/Chat/ValueObjects/OptionList/OptionListInterface.js';
import { ProcessType } from '../modules/Chat/ValueObjects/Process/ProcessType.js';
import MessageBuilderInterface from '../Services/MessageBuilder/MessageBuilderInterface.js';
import {
  messageBuilderList,
  MessageBuilderType,
} from '../Services/MessageBuilder/MessageBuilderType.js';
import UnregisteredClientMessageBuilder from '../Services/MessageBuilder/UnregisteredClientMessageBuilder.js';
import optionListFactory from './optionListFactory.js';
import RegisterNameMessageBuilder from '../Services/MessageBuilder/RegisterNameMessageBuilder.js';
import RegisterPasswordMessageBuilder from '../Services/MessageBuilder/RegisterPasswordMessageBuilder.js';
import RegisteredClientMessageBuilder from '../Services/MessageBuilder/RegisteredClientMessageBuilder.js';

interface DetailsMessageBuilderInterface {
  chat: ChatEntity;
  optionList: OptionListInterface;
  error: string | null;
}

const messageBuilders: Record<
  MessageBuilderType,
  (
    detailsMessageBuilder: DetailsMessageBuilderInterface
  ) => MessageBuilderInterface
> = {
  UNREGISTERED_CLIENT: ({ optionList, error }) =>
    new UnregisteredClientMessageBuilder(optionList, error),
  REGISTERED_CLIENT: ({ chat, optionList, error }) =>
    new RegisteredClientMessageBuilder(chat, optionList, error),
  REGISTER_NAME: () => new RegisterNameMessageBuilder(),
  REGISTER_PASSWORD: ({ chat }) => new RegisterPasswordMessageBuilder(chat),
};

const messageBuilderFactory = (chat: ChatEntity, error: string | null) => {
  isValidType(chat.process);
  const getMessageBuilder = messageBuilders[chat.process as MessageBuilderType];

  const optionList = optionListFactory(chat);

  return getMessageBuilder({ chat, optionList, error });
};

const isValidType = (process: ProcessType) => {
  const isValid = messageBuilderList.includes(process);

  if (!isValid) throw new Error('Invalid Message Builder Type');

  return isValid;
};
export default messageBuilderFactory;
