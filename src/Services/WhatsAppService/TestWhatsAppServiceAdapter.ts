import { Request, Response } from 'express';
import MessageInterface from '../MessageManager/MessageInterface';
import WhatsAppServiceAdapterInterface from './WhatsAppServiceAdapterInterface';

export default class TestWhatsAppServiceAdapter
  implements WhatsAppServiceAdapterInterface
{
  constructor(
    private readonly request: Request,
    private readonly response: Response
  ) {}

  getMessage(): MessageInterface {
    const body = this.request.body;

    const { message, whatsAppId } = body;

    if (!(message && whatsAppId))
      throw new Error(
        'Invalid input. The fields "message" and "whatsAppId" are required.'
      );

    return {
      body: message,
      whatsAppId,
    };
  }

  sendMessage(message: string): void {
    this.response.set('Content-Type', 'application/json');
    this.response.send(JSON.stringify({ message }));

    this.response.status(200).end();
  }
}
