import { router } from './router.js';
import { initDB } from './core/storage.js';
import { getProgress } from './core/progress.js';
import { renderHome } from './views/home.js';
import { renderLessons, renderLessonDetail } from './views/lessons.js';
import { renderLesson } from './views/lesson.js';
import { renderReview } from './views/review.js';
import { renderReference } from './views/reference.js';
import { renderSounds } from './views/sounds.js';
import { renderSettings } from './views/settings.js';
import { renderStats } from './views/stats.js';
import { initTTS, isMuted, toggleMute } from './core/tts.js';
import { initReminders } from './core/reminders.js';

async function init() {
  await initDB();
  initTTS();
  initReminders();

  router.register('home', renderHome);
  router.register('lessons', renderLessons);
  router.register('lessonDetail', renderLessonDetail);
  router.register('lesson', renderLesson);
  router.register('review', renderReview);
  router.register('reference', renderReference);
  router.register('sounds', renderSounds);
  router.register('settings', renderSettings);
  router.register('stats', renderStats);

  setupNavigation();
  setupBackButton();
  setupMuteButton();

  await updateHeaderStats();
  await router.navigate('home');

  registerServiceWorker();
}

function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      const titles = {
        home: 'Polski',
        lessons: 'Lessons',
        review: 'Review',
        reference: 'Reference',
        settings: 'Settings'
      };
      router.navigate(view, { title: titles[view] });
    });
  });
}

function setupBackButton() {
  document.getElementById('back-btn').addEventListener('click', () => {
    router.back();
  });
}

function setupMuteButton() {
  document.getElementById('mute-btn').addEventListener('click', () => {
    handleMuteToggle();
  });
  updateMuteButton();
}

export async function updateHeaderStats() {
  const progress = await getProgress();
  document.getElementById('streak-display').textContent = `🔥 ${progress.streak}`;
  document.getElementById('xp-display').textContent = `✦ ${progress.xp}`;
  updateMuteButton();
}

function updateMuteButton() {
  const btn = document.getElementById('mute-btn');
  if (btn) {
    btn.textContent = isMuted() ? '🔇' : '🔊';
    btn.title = isMuted() ? 'Sound off' : 'Sound on';
  }
}

export function handleMuteToggle() {
  toggleMute();
  updateMuteButton();
}

export function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `visible ${type}`;
  
  setTimeout(() => {
    toast.className = 'hidden';
  }, 3000);
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed:', err));
  }
}

document.addEventListener('DOMContentLoaded', init);
