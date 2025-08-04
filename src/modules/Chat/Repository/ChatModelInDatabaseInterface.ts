import ClientEntity from '../../Client/Entity/ClientEntity';
import ClientModelInDatabaseInterface from '../../Client/Repository/ClientModelInDatabaseInterface';
import { ProcessType } from '../ValueObjects/Process/ProcessType';

export default interface ChatModelInDatabaseInterface {
  id: string;
  process?: ProcessType;
  client?: ClientEntity | null;
  partialClient?: Partial<ClientModelInDatabaseInterface> | null;
}
