// Вопросы опроса и варианты ответов.
// Русский текст здесь используется и как ключ локализации (см. js/i18n/index.js),
// поэтому формулировки должны совпадать с ключами в переводческом словаре.

export const questions = [
  {
    text: 'Какое у тебя настроение прямо сейчас?',
    options: [
      { label: 'Спокойно', value: { cosmos: 2, solar: 0, neon: 1, forest: 2 } },
      { label: 'Тревожно', value: { cosmos: 0, solar: 1, neon: 2, forest: 0 } },
      { label: 'Энергично', value: { cosmos: 0, solar: 3, neon: 1, forest: 0 } },
      { label: 'Хочу отдохнуть', value: { cosmos: 3, solar: 1, neon: 0, forest: 3 } },
    ],
  },
  {
    text: 'Какая энергия ближе к тебе?',
    options: [
      { label: 'Лёгкая и мягкая', value: { cosmos: 3, solar: 0, neon: 1, forest: 3 } },
      { label: 'Жаркая и активная', value: { cosmos: 0, solar: 3, neon: 1, forest: 0 } },
      { label: 'Ночные импульсы', value: { cosmos: 0, solar: 1, neon: 3, forest: 0 } },
      { label: 'Хочется перезагрузки', value: { cosmos: 2, solar: 1, neon: 0, forest: 2 } },
    ],
  },
  {
    text: 'Что хочется сделать прямо сейчас?',
    options: [
      { label: 'Побыть в тишине', value: { cosmos: 3, solar: 0, neon: 0, forest: 3 } },
      { label: 'Создать волну', value: { cosmos: 1, solar: 2, neon: 2, forest: 0 } },
      { label: 'Погрузиться в ритм', value: { cosmos: 0, solar: 1, neon: 3, forest: 0 } },
      { label: 'Сделать паузу и восстановиться', value: { cosmos: 2, solar: 1, neon: 0, forest: 3 } },
    ],
  },
  {
    text: 'Какой тип общения тебя сейчас тянет?',
    options: [
      { label: 'Тихий и уютный', value: { cosmos: 3, solar: 0, neon: 1, forest: 3 } },
      { label: 'Весёлый и живой', value: { cosmos: 1, solar: 3, neon: 1, forest: 0 } },
      { label: 'Креативный и яркий', value: { cosmos: 0, solar: 2, neon: 3, forest: 0 } },
      { label: 'В одиночестве', value: { cosmos: 2, solar: 0, neon: 1, forest: 2 } },
    ],
  },
  {
    text: 'Что лучше всего подходит под твой ритм?',
    options: [
      { label: 'Медленные мысли', value: { cosmos: 3, solar: 0, neon: 0, forest: 3 } },
      { label: 'Движение и свет', value: { cosmos: 0, solar: 3, neon: 1, forest: 0 } },
      { label: 'Неоновая энергия', value: { cosmos: 0, solar: 1, neon: 3, forest: 0 } },
      { label: 'Тихая перезагрузка', value: { cosmos: 2, solar: 0, neon: 0, forest: 3 } },
    ],
  },
  {
    text: 'В каком месте мысли становятся твоими?',
    options: [
      { label: 'На пустой ночной улице', value: {} },
      { label: 'У окна, пока идёт дождь', value: {} },
      { label: 'В мастерской с музыкой и красками', value: {} },
      { label: 'На солнечной тропе среди деревьев', value: {} },
    ],
  },
  {
    text: 'Какой темп сегодня ощущается правильным?',
    options: [
      { label: 'Медленно, как ровное дыхание', value: {} },
      { label: 'Спокойно, но с искрой любопытства', value: {} },
      { label: 'Быстро и без плана', value: {} },
      { label: 'Игриво, чтобы хотелось улыбаться', value: {} },
    ],
  },
  {
    text: 'Кого бы ты позвал разделить этот момент?',
    options: [
      { label: 'Никого — хочется личного пространства', value: {} },
      { label: 'Одного близкого человека', value: {} },
      { label: 'Всех, кто готов на спонтанность', value: {} },
      { label: 'Себя — на прогулку без маршрута', value: {} },
    ],
  },
  {
    text: 'Какой кадр хочется оставить перед глазами?',
    options: [
      { label: 'Неон в отражении мокрого асфальта', value: {} },
      { label: 'Туманное утро и мягкие оттенки', value: {} },
      { label: 'Пиксельный закат и яркие контуры', value: {} },
      { label: 'Тёплая комната в свете лампы', value: {} },
    ],
  },
  {
    text: 'Что было бы приятнее сделать прямо сейчас?',
    options: [
      { label: 'Исследовать тайное место', value: {} },
      { label: 'Что-нибудь нарисовать или придумать', value: {} },
      { label: 'Сыграть короткий аркадный раунд', value: {} },
      { label: 'Устроиться поудобнее и ничего не спешить', value: {} },
    ],
  },
];
