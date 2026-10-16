// Устанавливает вебхук Telegram на Vercel-эндпоинт.
// Запуск:  node scripts/set-webhook.js
// Требует BOT_TOKEN в .env (локально) или в переменных окружения.
//
// Telegram сам вызывает этот URL при каждом сообщении, поэтому localhost
// здесь не подходит — нужен публичный HTTPS-адрес (ваш домен Vercel).

import 'dotenv/config';

const TOKEN = process.env.BOT_TOKEN;
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://vibefinder.tech/api/webhook';

if (!TOKEN) {
  console.error('Critical Error: BOT_TOKEN is not defined! Add it to .env');
  process.exit(1);
}

const API = `https://api.telegram.org/bot${TOKEN}`;

async function call(method, body) {
  const response = await fetch(`${API}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {}),
  });
  return response.json();
}

const setResult = await call('setWebhook', {
  url: WEBHOOK_URL,
  allowed_updates: ['message', 'callback_query'],
  drop_pending_updates: true,
});

if (!setResult.ok) {
  console.error('Failed to set webhook:', setResult.description || setResult);
  process.exit(1);
}

console.log(`Webhook set to ${WEBHOOK_URL}`);

const info = await call('getWebhookInfo');
console.log('Webhook info:', JSON.stringify(info.result, null, 2));
