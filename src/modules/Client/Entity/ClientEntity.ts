import ClientModelInDatabaseInterface from '../Repository/ClientModelInDatabaseInterface';

export default class ClientEntity {
  public readonly whatsAppId: string;
  public readonly fullName: string;
  public readonly password: string;

  constructor({ id, fullName, password }: ClientModelInDatabaseInterface) {
    this.whatsAppId = id;
    this.fullName = fullName;
    this.password = password;
  }
}
