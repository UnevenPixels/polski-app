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
import { renderListening } from './views/listening.js';
import { renderScenarios } from './views/scenarios.js';
import { renderDrills } from './views/drills.js';
import { renderPractice } from './views/practice.js';
import { renderVerbs } from './views/verbs.js';
import { initTTS, isMuted, toggleMute } from './core/tts.js';
import { initReminders } from './core/reminders.js';
import { initSyncQueue, onQueueChange, getQueueSize } from './core/sync-queue.js';

async function init() {
  await initDB();
  initTTS();
  initReminders();
  initSyncQueue();

  router.register('home', renderHome);
  router.register('lessons', renderLessons);
  router.register('lessonDetail', renderLessonDetail);
  router.register('lesson', renderLesson);
  router.register('review', renderReview);
  router.register('reference', renderReference);
  router.register('sounds', renderSounds);
  router.register('settings', renderSettings);
  router.register('stats', renderStats);
  router.register('listening', renderListening);
  router.register('scenarios', renderScenarios);
  router.register('drills', renderDrills);
  router.register('practice', renderPractice);
  router.register('verbs', renderVerbs);

  setupNavigation();
  setupBackButton();
  setupMuteButton();
  setupSyncIndicator();

  await updateHeaderStats();
  await router.navigate('home');

  registerServiceWorker();
}

function setupSyncIndicator() {
  const indicator = document.getElementById('sync-status');
  if (!indicator) return;
  
  const update = ({ size, isDraining, online }) => {
    if (!online) {
      indicator.classList.remove('hidden');
      indicator.textContent = '☁️⚡';
      indicator.title = 'Offline — changes saved locally';
      indicator.style.color = 'var(--warning)';
    } else if (size > 0 || isDraining) {
      indicator.classList.remove('hidden');
      indicator.textContent = isDraining ? '↻' : `↑${size}`;
      indicator.title = isDraining ? 'Syncing...' : `${size} changes pending`;
      indicator.style.color = 'var(--text-secondary)';
    } else {
      indicator.classList.add('hidden');
    }
  };
  
  onQueueChange(update);
  
  // Initial state
  getQueueSize().then(size => {
    update({ size, isDraining: false, online: navigator.onLine });
  });
  
  window.addEventListener('online', () => {
    getQueueSize().then(size => update({ size, isDraining: false, online: true }));
  });
  window.addEventListener('offline', () => {
    update({ size: 0, isDraining: false, online: false });
  });
}

function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      const titles = {
        home: 'Polski',
        lessons: 'Lessons',
        review: 'Review',
        practice: 'Practice',
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
  if (!('serviceWorker' in navigator)) return;
  
  navigator.serviceWorker.register('./sw.js')
    .then(reg => {
      console.log('SW registered');
      
      // Check for updates periodically (when app is foregrounded)
      setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000); // hourly
      
      // Check on visibility change (mobile resume)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          reg.update().catch(() => {});
        }
      });
      
      // Listen for new SW
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available - activate immediately
            newWorker.postMessage({ type: 'skip-waiting' });
          }
        });
      });
    })
    .catch(err => console.log('SW registration failed:', err));
  
  // Reload once when the new SW takes over
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

document.addEventListener('DOMContentLoaded', init);
