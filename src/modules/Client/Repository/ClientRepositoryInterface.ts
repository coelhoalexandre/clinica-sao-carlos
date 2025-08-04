import ClientModelInDatabaseInterface from './ClientModelInDatabaseInterface';

export default interface ClientRepositoryInterface {
  save(client: ClientModelInDatabaseInterface): Promise<void>;
  find(whatsAppId: string): Promise<ClientModelInDatabaseInterface | undefined>;
}
