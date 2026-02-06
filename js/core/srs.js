export function calculateNextReview(card, quality) {
  const now = new Date();
  let { repetitions = 0, easeFactor = 2.5, interval = 0 } = card;

  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    
    repetitions += 1;
  }

  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...card,
    repetitions,
    easeFactor,
    interval,
    nextReview: nextReview.toISOString(),
    lastReview: now.toISOString()
  };
}

export function createVocabularyCard(word, meaning, lesson, extra = {}) {
  const now = new Date().toISOString();
  return {
    word,
    meaning,
    lesson,
    repetitions: 0,
    easeFactor: 2.5,
    interval: 0,
    nextReview: now,
    lastReview: null,
    created: now,
    ...extra
  };
}

export function getQualityLabel(quality) {
  const labels = {
    1: 'Again',
    2: 'Hard',
    3: 'Good',
    4: 'Easy'
  };
  return labels[quality] || '';
}

export function mapQualityToSM2(quality) {
  const mapping = { 1: 0, 2: 2, 3: 4, 4: 5 };
  return mapping[quality] ?? 3;
}

export function isDue(card) {
  if (!card.nextReview) return true;
  return new Date(card.nextReview) <= new Date();
}

export function getIntervalText(days) {
  if (days === 0) return 'Now';
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  if (days < 30) return `${Math.round(days / 7)} weeks`;
  if (days < 365) return `${Math.round(days / 30)} months`;
  return `${Math.round(days / 365)} years`;
}
