import JSONDatabase from '../Database/JSONDatabase.js';
import ChatController from '../modules/Chat/Controller/ChatController.js';
import ChatRepositoryJSON from '../modules/Chat/Repository/ChatRepositoryJSON.js';
import FindChatUseCase from '../modules/Chat/UseCases/FindChatUseCase.js';
import SaveChatUseCase from '../modules/Chat/UseCases/SaveChatUseCase.js';
import UpdateChatUseCase from '../modules/Chat/UseCases/UpdateChatUseCase.js';

const chatControllerFactory = () => {
  const database = new JSONDatabase(3001);
  const repository = new ChatRepositoryJSON(database);
  const findChatUseCase = new FindChatUseCase(repository);
  const saveChatUseCase = new SaveChatUseCase(repository);
  const updateChatUseCase = new UpdateChatUseCase(repository);
  const chatController = new ChatController(
    findChatUseCase,
    saveChatUseCase,
    updateChatUseCase
  );
  return chatController;
};

export default chatControllerFactory;
