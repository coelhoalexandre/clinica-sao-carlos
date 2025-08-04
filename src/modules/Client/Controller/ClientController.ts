import ClientEntity from '../Entity/ClientEntity';
import FindClientUseCase from '../UseCases/FindClientUseCase';
import SaveClientUseCase from '../UseCases/SaveClientUseCase';

export default class ClientController {
  constructor(
    private findClientUseCase: FindClientUseCase,
    private saveClientUseCase: SaveClientUseCase
  ) {}

  async save(client: ClientEntity) {
    await this.saveClientUseCase.execute(client);
  }

  async find(whatsAppId: string) {
    const client = await this.findClientUseCase.execute(whatsAppId);
    return client;
  }
}
