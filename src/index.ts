import express from 'express';
import bodyParser from 'body-parser';

import TwilioWhatsAppServiceAdapter from './Services/WhatsAppService/TwilioWhatsAppServiceAdapter.js';
import MessageManager from './Services/MessageManager/MessageManager.js';
import TestWhatsAppServiceAdapter from './Services/WhatsAppService/TestWhatsAppServiceAdapter.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook', async (req, res) => {
  const whatsAppServiceAdapter = new TwilioWhatsAppServiceAdapter(req, res);

  const messageManager = new MessageManager(whatsAppServiceAdapter);
  await messageManager.manage();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
