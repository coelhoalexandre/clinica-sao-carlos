import ClientEntity from '../../Client/Entity/ClientEntity.js';
import ChatModelInDatabaseInterface from '../Repository/ChatModelInDatabaseInterface.js';
import Process from '../ValueObjects/Process/Process.js';
import { ProcessType } from '../ValueObjects/Process/ProcessType.js';

export default class ChatEntity {
  public readonly whatsAppId: string;
  private _process: Process;
  private _client: ClientEntity | null;
  private _partialClient: Partial<ClientEntity> | null;

  constructor({
    id,
    process,
    client,
    partialClient,
  }: ChatModelInDatabaseInterface) {
    this.whatsAppId = id;
    this._process = new Process(process);
    this._client = client || null;
    this._partialClient = partialClient
      ? {
          whatsAppId: partialClient.id,
          fullName: partialClient.fullName,
          password: partialClient.password,
        }
      : null;
  }

  public get partialClient() {
    return this._partialClient;
  }

  public get client() {
    return this._client;
  }

  public get process(): ProcessType {
    return this._process.toString();
  }

  public get firstName(): string {
    if (!this._client) throw new Error('Client not exist');

    const match = this._client.fullName.match(/^\S+/);

    if (!match) throw new Error('first name capture failed');

    return match[0];
  }

  public updatePartialClient(partialClient: Partial<ClientEntity>) {
    const oldPartialClient = this._partialClient || {};
    const currentPartialClient = Object.assign(oldPartialClient, partialClient);
    this._partialClient = currentPartialClient;
  }

  public updateClient() {
    if (!this._partialClient) throw new Error('Partial Client not Exist');
    const { whatsAppId, fullName, password } = this._partialClient;

    if (!(whatsAppId && fullName && password))
      throw new Error('Partial Client incomplete');

    const client = new ClientEntity({ fullName, id: whatsAppId, password });
    this._client = client;
    this._partialClient = null;
  }

  public changeProcess(process: ProcessType) {
    this._process = new Process(process);
  }
}
