// Vibe Finder — Telegram bot (Vercel Serverless Webhook).
// ВАЖНО: в stateless-архитектуре нельзя держать глобальные промисы между
// вызовами. Поэтому здесь нет bot.on('message')/processUpdate и нет
// глобального pendingSend — мы напрямую await-им сетевую отправку,
// чтобы Vercel удерживал контейнер до фактической доставки в Telegram.

import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL || 'https://vibefinder.tech';

// Создаётся один раз на инстанс контейнера; polling выключен — обновления
// приходят только через HTTP-вебхук.
const bot = TOKEN ? new TelegramBot(TOKEN, { polling: false }) : null;

const START_KEYBOARD = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Open Vibe Finder', web_app: { url: WEB_APP_URL } }],
    ],
  },
};

const WELCOME_TEXT =
  'Добро пожаловать в Vibe Finder ✨\n\n' +
  'Найдём твоё текущее настроение и атмосферу, которая подстроится под тебя.\n' +
  'Ответь на несколько коротких вопросов — и открой своё вайб-пространство.';

const FALLBACK_TEXT = 'Нажми «Open Vibe Finder», чтобы открыть приложение и найти свой вайб.';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(200).send('Vibe Finder Bot Endpoint is active.');
  }

  if (!bot) {
    console.error('CRITICAL: BOT_TOKEN is empty on Vercel Environment variables.');
    return response.status(200).send('Missing Token Configuration');
  }

  const update = request.body || {};
  const message = update.message || update.edited_message;

  if (!message || !message.text) {
    return response.status(200).send('No text payload provided');
  }

  const chatId = message.chat.id;
  const text = message.text.trim();

  try {
    if (text === '/start' || text.startsWith('/start')) {
      await bot.sendMessage(chatId, WELCOME_TEXT, START_KEYBOARD);
    } else {
      await bot.sendMessage(chatId, FALLBACK_TEXT, START_KEYBOARD);
    }
  } catch (error) {
    console.error('Telegram Serverless Delivery Failure:', error.message);
  }

  return response.status(200).send('OK');
}
