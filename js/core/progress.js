import { get, set, STORES } from './storage.js';

const PROGRESS_KEY = 'user-progress';

const DEFAULT_PROGRESS = {
  id: PROGRESS_KEY,
  xp: 0,
  level: 1,
  streak: 0,
  lastPractice: null,
  lessons: {},
  achievements: [],
  stats: {
    totalReviews: 0,
    correctAnswers: 0,
    lessonsCompleted: 0,
    wordsLearned: 0
  }
};

const XP_PER_LEVEL = [
  0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200,
  4000, 5000, 6200, 7600, 9200, 11000, 13000, 15500, 18500, 22000,
  26000, 30500, 35500, 41000, 47000, 53500, 60500, 68000, 76000, 84500,
  93500, 103000, 113000, 123500, 134500, 146000, 158000, 170500, 183500, 197000,
  211000, 225500, 240500, 256000, 272000, 288500, 305500, 323000, 341000, 360000
];

const ACHIEVEMENTS = {
  first_lesson: { name: 'First Steps', desc: 'Complete your first sub-lesson', icon: '🎯' },
  lesson_1_complete: { name: 'Lesson 1 Master', desc: 'Complete all of Lesson 1', icon: '📖' },
  words_50: { name: 'Vocabulary Builder', desc: 'Learn 50 words', icon: '📚' },
  words_100: { name: 'Word Collector', desc: 'Learn 100 words', icon: '🏆' },
  words_500: { name: 'Lexicon Legend', desc: 'Learn 500 words', icon: '👑' },
  streak_7: { name: 'Week Warrior', desc: '7 day streak', icon: '🔥' },
  streak_30: { name: 'Monthly Master', desc: '30 day streak', icon: '⚡' },
  perfect_lesson: { name: 'Perfectionist', desc: 'Get 100% on a lesson', icon: '✨' },
  review_100: { name: 'Dedicated Learner', desc: 'Complete 100 reviews', icon: '🎓' }
};

let cachedProgress = null;

export async function getProgress() {
  if (cachedProgress) return cachedProgress;
  
  let progress = await get(STORES.progress, PROGRESS_KEY);
  if (!progress) {
    progress = { ...DEFAULT_PROGRESS };
    await set(STORES.progress, progress);
  }
  cachedProgress = progress;
  return progress;
}

export async function updateProgress(updates) {
  const progress = await getProgress();
  const updated = { ...progress, ...updates };
  await set(STORES.progress, updated);
  cachedProgress = updated;
  return updated;
}

export async function addXP(amount) {
  const progress = await getProgress();
  const newXP = progress.xp + amount;
  let newLevel = progress.level;
  
  while (newLevel < XP_PER_LEVEL.length && newXP >= XP_PER_LEVEL[newLevel]) {
    newLevel++;
  }
  
  const leveledUp = newLevel > progress.level;
  
  await updateProgress({ xp: newXP, level: newLevel });
  
  return { xp: newXP, level: newLevel, leveledUp, xpGained: amount };
}

export async function updateStreak() {
  const progress = await getProgress();
  const today = new Date().toDateString();
  const lastPractice = progress.lastPractice ? new Date(progress.lastPractice).toDateString() : null;
  
  let newStreak = progress.streak;
  
  if (lastPractice === today) {
    return { streak: newStreak, updated: false };
  }
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (lastPractice === yesterday.toDateString()) {
    newStreak += 1;
  } else if (lastPractice !== today) {
    newStreak = 1;
  }
  
  await updateProgress({ streak: newStreak, lastPractice: new Date().toISOString() });
  
  if (newStreak === 7) await unlockAchievement('streak_7');
  if (newStreak === 30) await unlockAchievement('streak_30');
  
  return { streak: newStreak, updated: true };
}

export async function getLessonProgress(lessonId) {
  const progress = await getProgress();
  return progress.lessons[lessonId] || { completed: false, stars: 0, subLessons: {} };
}

export async function updateLessonProgress(lessonId, subLessonId, data) {
  const progress = await getProgress();
  const lessons = { ...progress.lessons };
  
  if (!lessons[lessonId]) {
    lessons[lessonId] = { completed: false, stars: 0, subLessons: {} };
  }
  
  lessons[lessonId].subLessons[subLessonId] = {
    ...lessons[lessonId].subLessons[subLessonId],
    ...data
  };
  
  const subLessonKeys = ['A', 'B', 'C', 'D', 'E'];
  const allCompleted = subLessonKeys.every(
    key => lessons[lessonId].subLessons[key]?.completed
  );
  
  if (allCompleted && !lessons[lessonId].completed) {
    lessons[lessonId].completed = true;
    
    const avgAccuracy = subLessonKeys.reduce((sum, key) => {
      return sum + (lessons[lessonId].subLessons[key]?.accuracy || 0);
    }, 0) / subLessonKeys.length;
    
    lessons[lessonId].stars = avgAccuracy >= 95 ? 3 : avgAccuracy >= 85 ? 2 : 1;
    
    const stats = { ...progress.stats, lessonsCompleted: progress.stats.lessonsCompleted + 1 };
    await updateProgress({ lessons, stats });
    
    if (lessonId === '1') await unlockAchievement('lesson_1_complete');
  } else {
    await updateProgress({ lessons });
  }
  
  return lessons[lessonId];
}

export async function unlockAchievement(achievementId) {
  const progress = await getProgress();
  
  if (progress.achievements.includes(achievementId)) {
    return false;
  }
  
  const achievements = [...progress.achievements, achievementId];
  await updateProgress({ achievements });
  
  return ACHIEVEMENTS[achievementId] || null;
}

export async function checkWordAchievements(wordCount) {
  if (wordCount >= 50) await unlockAchievement('words_50');
  if (wordCount >= 100) await unlockAchievement('words_100');
  if (wordCount >= 500) await unlockAchievement('words_500');
}

export async function incrementStats(key, amount = 1) {
  const progress = await getProgress();
  const stats = { ...progress.stats };
  stats[key] = (stats[key] || 0) + amount;
  await updateProgress({ stats });
  return stats;
}

export function getLevelProgress(xp, level) {
  const currentLevelXP = XP_PER_LEVEL[level - 1] || 0;
  const nextLevelXP = XP_PER_LEVEL[level] || XP_PER_LEVEL[XP_PER_LEVEL.length - 1];
  const progress = (xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
  return Math.min(1, Math.max(0, progress));
}

export function getXPToNextLevel(xp, level) {
  const nextLevelXP = XP_PER_LEVEL[level] || XP_PER_LEVEL[XP_PER_LEVEL.length - 1];
  return Math.max(0, nextLevelXP - xp);
}

export { ACHIEVEMENTS };
