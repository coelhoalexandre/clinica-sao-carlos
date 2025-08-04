import ChatEntity from '../../Entity/ChatEntity.js';

export type OptionDetails = { chat: ChatEntity; message: string };
export type OptionActionType = (details: OptionDetails) => void;
