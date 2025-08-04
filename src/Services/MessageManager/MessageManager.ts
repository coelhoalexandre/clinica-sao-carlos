import WhatsAppServiceAdapterInterface from '../WhatsAppService/WhatsAppServiceAdapterInterface';
import chatControllerFactory from '../../factories/chatControllerFactory.js';
import ChatEntity from '../../modules/Chat/Entity/ChatEntity.js';
import clientControllerFactory from '../../factories/clientControllerFactory.js';
import messageBuilderFactory from '../../factories/messageBuilderFactory.js';
import optionListFactory from '../../factories/optionListFactory.js';
import ProcessHandler from '../ProcessHandler.js';

export default class MessageManager {
  constructor(
    private readonly whatsAppServiceAdapter: WhatsAppServiceAdapterInterface
  ) {}

  public async manage(): Promise<void> {
    const { whatsAppId, body } = this.whatsAppServiceAdapter.getMessage();

    const chatController = chatControllerFactory();
    const chatFound = await chatController.find(whatsAppId);
    const chat = chatFound || new ChatEntity({ id: whatsAppId });
    const hasClient = !!chat.client;

    const optionList = optionListFactory(chat);
    const processHandler = new ProcessHandler(optionList);
    const error = processHandler.handle(body);

    const messageBuilder = messageBuilderFactory(chat, error);
    const message = messageBuilder.build();

    this.whatsAppServiceAdapter.sendMessage(message);

    if (chatFound) await chatController.update(chat);
    else await chatController.save(chat);

    const clientController = clientControllerFactory();
    if (!hasClient && chat.client) await clientController.save(chat.client);
  }
}
