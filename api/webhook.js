// Vibe Finder — Telegram bot (Vercel Serverless Webhook).
// ВАЖНО: в stateless-архитектуре нельзя держать глобальные промисы или
// запускать polling между вызовами. Здесь НЕТ bot.startPolling(), НЕТ
// bot.on('message') — обновления приходят строго через HTTP-вебхук.
// Мы отвечаем Vercel-у 200 немедленно (чтобы функция не была убита по
// таймауту), а отправку в Telegram выполняем внутри try-catch.

import TelegramBot from 'node-telegram-bot-api';

const WEB_APP_URL = process.env.WEB_APP_URL || 'https://vibefinder.tech';

const WEB_APP_KEYBOARD = {
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

const FALLBACK_TEXT =
  'Нажми «Open Vibe Finder», чтобы открыть приложение и найти свой вайб.';

export default async function handler(request, response) {
  // 1. Игнорируем все не-POST запросы (health-check, GET и т.п.).
  if (request.method !== 'POST') return response.status(200).send('OK');

  // 2. Мгновенно подтверждаем запрос для Vercel, чтобы serverless-функцию
  //    не убили по таймауту, пока мы ждём доставку сообщения в Telegram.
  response.status(200).json({ status: 'ok' });

  // 3. Вся тяжёлая логика изолирована в robust try-catch.
  try {
    const token = process.env.BOT_TOKEN;
    if (!token) {
      console.error(
        'CRITICAL: BOT_TOKEN отсутствует в переменных окружения. ' +
          'Задайте его в Vercel Environment Variables — токен в коде не хранится.'
      );
      return;
    }

    // Клиент создаётся строго в stateless-режиме: polling выключен.
    const bot = new TelegramBot(token, { polling: false });

    const update = request.body || {};
    const message = update.message || update.edited_message;

    if (!message || !message.text) {
      return;
    }

    const chatId = message.chat.id;
    const text = message.text.trim();

    const options = WEB_APP_KEYBOARD;

    if (text === '/start' || text.startsWith('/start')) {
      await bot.sendMessage(chatId, WELCOME_TEXT, options);
    } else {
      await bot.sendMessage(chatId, FALLBACK_TEXT, options);
    }
  } catch (error) {
    console.error('Telegram Serverless Delivery Failure:', error.message);
  }
}
