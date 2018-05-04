const {token, chatId} = require('../../../config/telegram.json')
const {makeMessage} = require('./makeMessage')

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

function start() {

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    let originMsg = msg.text;

    let message = await makeMessage(originMsg)
    bot.sendMessage(chatId, message);
  });
}

async function sendMessage({chatId, msg}){
    let message = await makeMessage(msg)
    console.log(message)
    bot.sendMessage(chatId, message);
}

module.exports = {
    start:start,
    sendMessage:sendMessage
}