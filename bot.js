// Vibe Finder — Telegram bot.
// Отвечает на /start приветствием в «космическом» настроении Vibe Finder
// и показывает кнопку, открывающую https://vibefinder.tech как Telegram Web App.

import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
  console.error('Critical Error: BOT_TOKEN environment variable is not defined!');
  process.exit(1);
}

const WEB_APP_URL = process.env.WEB_APP_URL || 'https://vibefinder.tech';

const bot = new TelegramBot(TOKEN, { polling: true });

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

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  try {
    await bot.sendMessage(chatId, WELCOME_TEXT, START_KEYBOARD);
  } catch (error) {
    console.error('Failed to send welcome message:', error.message);
  }
});

// Дружелюбный ответ на любой другой текст.
bot.on('message', async (msg) => {
  if (!msg.text || msg.text.startsWith('/')) return;
  try {
    await bot.sendMessage(
      msg.chat.id,
      'Нажми «Open Vibe Finder», чтобы открыть приложение и найти свой вайб.',
      START_KEYBOARD,
    );
  } catch (error) {
    console.error('Failed to send fallback message:', error.message);
  }
});

bot.on('polling_error', (error) => {
  console.error('Telegram polling error:', error.message);
});

console.log('Vibe Finder bot is running...');
