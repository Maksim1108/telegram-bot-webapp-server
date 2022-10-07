require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {

    await bot.sendMessage(chatId, "Нажми", {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Button', web_app: { url: process.env.WEB_URL } }]
        ],
      }
    });

  } else {
    bot.sendMessage(chatId, 'На данном этапе я воспринимаю только команду /start');
  }
});
