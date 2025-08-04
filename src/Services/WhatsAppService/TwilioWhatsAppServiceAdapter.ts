import { Request, Response } from 'express';
import WhatsAppServiceAdapterInterface from './WhatsAppServiceAdapterInterface';
import MessageInterface from '../MessageManager/MessageInterface';
import MessagingResponse from 'twilio/lib/twiml/MessagingResponse.js';

export default class TwilioWhatsAppServiceAdapter
  implements WhatsAppServiceAdapterInterface
{
  private twiml = new MessagingResponse();

  constructor(
    private readonly request: Request,
    private readonly response: Response
  ) {}

  public getMessage(): MessageInterface {
    const incomingMsg = this.request.body.Body;
    const waId = this.request.body.WaId;

    return { body: incomingMsg, whatsAppId: waId };
  }

  public sendMessage(message: string): void {
    this.twiml.message(message);

    this.response.set('Content-Type', 'text/xml');
    this.response.send(this.twiml.toString());

    this.response.status(200).end();
  }
}
