export default interface DatabaseConnectionInterface {
  post<T>(path: string, body: T): Promise<void>;
  get<T>(path: string): Promise<T | undefined>;
  put<T>(path: string, body: T): Promise<void>;
}
