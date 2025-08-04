import http from 'http';
import DatabaseConnectionInterface from './DatabaseConnectionInterface';

export default class JSONDatabase implements DatabaseConnectionInterface {
  constructor(private port: number) {}

  public async post<T>(path: string, body: T) {
    const data = JSON.stringify(body);
    const options = {
      port: this.port,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    return new Promise<void>((resolve, reject) => {
      const req = http.request(
        `http://localhost:${this.port}/${path}`,
        options,
        (res) => {
          res.on('data', () => {});
          res.on('end', () => resolve());
        }
      );

      req.on('error', (error) => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  }

  public async get<T>(path: string) {
    const options = {
      port: this.port,
      method: 'GET',
    };

    return new Promise<T | undefined>((resolve, reject) => {
      let data = '';
      const req = http.request(
        `http://localhost:${this.port}/${path}`,
        options,
        (res) => {
          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            try {
              if (data === 'Not Found') {
                resolve(undefined);
                return;
              }
              resolve(JSON.parse(data));
            } catch (err) {
              reject(err);
            }
          });
        }
      );
      req.on('error', (erro) => {
        console.error(erro);
      });

      req.end();
    });
  }

  public async put<T>(path: string, body: T) {
    const data = JSON.stringify(body);
    const options = {
      port: this.port,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    return new Promise<void>((resolve, reject) => {
      const req = http.request(
        `http://localhost:${this.port}/${path}`,
        options,
        (res) => {
          res.on('data', () => {});
          res.on('end', () => resolve());
        }
      );

      req.on('error', (error) => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  }
}
