import MessageInterface from '../MessageManager/MessageInterface';

export default interface WhatsAppServiceAdapterInterface {
  getMessage(): MessageInterface;
  sendMessage(message: string): void;
}
