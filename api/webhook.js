// Vibe Finder — Telegram bot (Vercel Serverless Webhook).
// Раньше бот работал на long polling, но локальные ISP-блоки Telegram API
// вызывали EFATAL: AggregateError. Теперь он принимает обновления вебхуком
// прямо на инфраструктуре Vercel.

import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL || 'https://vibefinder.tech';

// Бот без polling: обновления приходят через processUpdate.
const bot = TOKEN ? new TelegramBot(TOKEN, { polling: false }) : null;

// Приветствие в атмосфере приложения.
const WELCOME_TEXT = [
  'Добро пожаловать в Vibe Finder ✨',
  '',
  'Найдём твоё текущее настроение и атмосферу, которая подстроится под тебя.',
  'Ответь на несколько коротких вопросов — и открой своё вайб-пространство.',
].join('\n');

// Кнопка запускает сайт прямо внутри Telegram.
const START_KEYBOARD = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Open Vibe Finder',
          web_app: { url: WEB_APP_URL },
        },
      ],
    ],
  },
};

// Промис последней отправки, чтобы дождаться её до ответа Telegram.
let pendingSend = Promise.resolve();
const track = (promise) => {
  pendingSend = promise;
};

if (bot) {
  bot.onText(/\/start/, (msg) => {
    track(
      bot
        .sendMessage(msg.chat.id, WELCOME_TEXT, START_KEYBOARD)
        .catch((error) => console.error('Failed to send welcome message:', error.message)),
    );
  });

  // Дружелюбный ответ на любой другой текст.
  bot.on('message', (msg) => {
    if (!msg.text || msg.text.startsWith('/')) return;
    track(
      bot
        .sendMessage(
          msg.chat.id,
          'Нажми «Open Vibe Finder», чтобы открыть приложение и найти свой вайб.',
          START_KEYBOARD,
        )
        .catch((error) => console.error('Failed to send fallback message:', error.message)),
    );
  });
}

// Vercel Serverless handler.
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(200).send('Vibe Finder bot webhook is alive');
    return;
  }

  if (!bot) {
    console.error('BOT_TOKEN is not configured in environment variables.');
    response.status(200).send('OK');
    return;
  }

  try {
    // processUpdate emits listeners synchronously, so `pendingSend` is set
    // before it returns — we then await the actual network send.
    bot.processUpdate(request.body);
    await pendingSend;
  } catch (error) {
    console.error('Webhook processing error:', error.message);
  }

  response.status(200).send('OK');
}
