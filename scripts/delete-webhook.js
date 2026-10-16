// Удаляет вебхук Telegram (полезно при откате к polling или отладке).
// Запуск:  node scripts/delete-webhook.js
// Требует BOT_TOKEN в .env или в переменных окружения.

import 'dotenv/config';

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  console.error('Critical Error: BOT_TOKEN is not defined! Add it to .env');
  process.exit(1);
}

const response = await fetch(`https://api.telegram.org/bot${TOKEN}/deleteWebhook`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ drop_pending_updates: true }),
});

const result = await response.json();

if (!result.ok) {
  console.error('Failed to delete webhook:', result.description || result);
  process.exit(1);
}

console.log('Webhook deleted. The bot will no longer receive updates via webhook.');
