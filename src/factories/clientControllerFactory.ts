import JSONDatabase from '../Database/JSONDatabase.js';
import ClientController from '../modules/Client/Controller/ClientController.js';
import ClientRepositoryJSON from '../modules/Client/Repository/ClientRepositoryJSON.js';
import FindClientUseCase from '../modules/Client/UseCases/FindClientUseCase.js';
import SaveClientUseCase from '../modules/Client/UseCases/SaveClientUseCase.js';

const clientControllerFactory = () => {
  const database = new JSONDatabase(3001);
  const repository = new ClientRepositoryJSON(database);
  const findClientUseCase = new FindClientUseCase(repository);
  const saveClientUseCase = new SaveClientUseCase(repository);
  const clientController = new ClientController(
    findClientUseCase,
    saveClientUseCase
  );
  return clientController;
};

export default clientControllerFactory;
