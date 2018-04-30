const {token, chatId} = require('../../../config/telegram.json')
const {fromKoToEn, fromEnToKo} = require('../../../utils/translate')
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

function start() {
  // bot.onText(/\/echo (.+)/, (msg, match) => {
  //   // 'msg' is the received Message from Telegram
  //   // 'match' is the result of executing the regexp above on the text content
  //   // of the message
  //
  //   const chatId = msg.chat.id;
  //   const resp = match[1]; // the captured "whatever"
  //
  //   // send back the matched "whatever" to the chat
  //   bot.sendMessage(chatId, resp);
  // });

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    let originMsg = msg.text
    let translateEnMsg = await fromKoToEn(msg.text)
    let translateKoMsg = await fromEnToKo(msg.text)

    // fromEnToKo('한글')
    // send a message to the chat acknowledging receipt of their message
    let message = `원문(original): ${originMsg}\n영문(English): ${translateEnMsg} \n한글(Korea): ${translateKoMsg}`
    bot.sendMessage(chatId, message);
  });
}

function sendMessage(msg){
    bot.sendMessage(chatId, msg);
}

module.exports = {
    start:start,
    sendMessage:sendMessage
}