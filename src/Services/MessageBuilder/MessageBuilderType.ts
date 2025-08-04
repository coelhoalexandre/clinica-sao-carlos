import { ProcessType } from '../../modules/Chat/ValueObjects/Process/ProcessType';

export type MessageBuilderType = Exclude<ProcessType, 'FIRST_MESSAGE'>;

const mappedMessageBuilderType: Record<MessageBuilderType, null> = {
  UNREGISTERED_CLIENT: null,
  REGISTERED_CLIENT: null,
  REGISTER_NAME: null,
  REGISTER_PASSWORD: null,
};

export const messageBuilderList = Object.keys(mappedMessageBuilderType);
