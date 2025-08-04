# Chatbot Clinica São Carlos

## Iniciando

- Build: npm run build
- Banco de dados: npm run database
- Iniciar: npm start
- Por no ar: ngrok http 3000

##

- Criar módulo de Chat, armazenar dados de conversas no momento
- Tirar toda a responsabilidade de Cliente ter uma parte de registrado ou não, status e stage da conversa, repassar essa responsabilidade ao chat
- Avaliar se o ClientStatus e ClientStage se tornariam um Dominio proprio fora do Chat
- Avaliar sobre o desacoplamento do ClientStatus e ClientStage, melhorando no handleAction
- Avaliar sobre criar uma classe somente o o ClientAction
- Avaliar a troca do Stage por número ou algum tipo de classe melhorada

## Observação

- Caso seja necessário usar Serviço de WhatsApp que não seja por servidor, então teria que inverter o funcionamento do adaptador (Mas nem sei se seria um adaptador).
- Seria uma classe em que as de servidor teria toda lógica do express em uma função para ligar. E basicamente a lógica de lidar com a mensagem que seria injetada. Então caso seja um serviço que não seja baseado em enviar requisições, tipo um Event-Based, ainda funcionaria de forma desacoplada.
