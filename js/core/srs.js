// --- Scheduler tuning constants ---------------------------------------------
// An SM-2 variant with Anki-inspired refinements: "Hard" preserves progress,
// every grade adjusts ease (so lapses actually penalize a card), leeches are
// flagged, and intervals get a small fuzz to avoid review pile-ups.
const MIN_EASE = 1.3;
const DEFAULT_EASE = 2.5;
const EASE_DELTA = { again: -0.20, hard: -0.15, good: 0, easy: 0.15 };
const HARD_INTERVAL_FACTOR = 1.2; // Hard grows the interval, but less than Good.
const EASY_BONUS = 1.3;           // Easy stretches the interval further than Good.
const EASY_FIRST_INTERVAL = 4;    // First-step interval when a new card is rated Easy.
const LEECH_THRESHOLD = 8;        // Lapses before a card is flagged as a leech.
const FUZZ_RATIO = 0.05;          // ±5% jitter applied to intervals >= FUZZ_MIN days.
const FUZZ_MIN = 4;

// Classify the incoming SM-2 quality (0=Again, 2=Hard, 4=Good, 5=Easy) into a grade.
function gradeFromQuality(quality) {
  if (quality < 2) return 'again';
  if (quality < 4) return 'hard';
  if (quality < 5) return 'good';
  return 'easy';
}

// Spread reviews out so cards graded together don't all come due on the same day.
function applyFuzz(interval) {
  if (interval < FUZZ_MIN) return interval;
  const jitter = Math.max(1, Math.round(interval * FUZZ_RATIO));
  const offset = Math.round((Math.random() * 2 - 1) * jitter); // -jitter..+jitter
  return Math.max(1, interval + offset);
}

export function calculateNextReview(card, quality) {
  const now = new Date();
  let { repetitions = 0, easeFactor = DEFAULT_EASE, interval = 0, lapses = 0 } = card;
  const grade = gradeFromQuality(quality);

  // Every grade nudges ease — failing or struggling makes a card show up more often.
  easeFactor = Math.max(MIN_EASE, easeFactor + EASE_DELTA[grade]);

  if (grade === 'again') {
    // Lapse: send the card back to relearning and remember that it failed.
    repetitions = 0;
    interval = 1;
    lapses += 1;
  } else if (grade === 'hard') {
    // Recalled with difficulty: keep progress, grow the interval only modestly.
    if (repetitions === 0) {
      interval = 1;
    } else {
      interval = Math.max(interval + 1, Math.round(interval * HARD_INTERVAL_FACTOR));
    }
    repetitions += 1;
  } else {
    // Good or Easy: standard SM-2 graduation.
    if (repetitions === 0) {
      interval = grade === 'easy' ? EASY_FIRST_INTERVAL : 1;
    } else if (repetitions === 1) {
      interval = grade === 'easy' ? Math.round(6 * EASY_BONUS) : 6;
    } else {
      interval = Math.round(interval * easeFactor * (grade === 'easy' ? EASY_BONUS : 1));
    }
    repetitions += 1;
  }

  interval = applyFuzz(Math.max(1, interval));

  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...card,
    repetitions,
    easeFactor,
    interval,
    lapses,
    leech: lapses >= LEECH_THRESHOLD,
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
    easeFactor: DEFAULT_EASE,
    interval: 0,
    lapses: 0,
    leech: false,
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
