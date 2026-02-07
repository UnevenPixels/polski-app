import { syncManager } from '../core/sync.js';
import { getProgress, ACHIEVEMENTS } from '../core/progress.js';
import { showToast } from '../app.js';
import { router } from '../router.js';
import { 
  initFirebase, 
  signInWithEmail, 
  signInAnonymously, 
  signOut, 
  getCurrentUser, 
  isSyncEnabled,
  syncWithCloud,
  loadFromCloud
} from '../core/firebase.js';
import { getAll, set, STORES } from '../core/storage.js';
import { 
  getReminderSettings, 
  enableReminders, 
  disableReminders, 
  updateReminderTime,
  canSendNotifications 
} from '../core/reminders.js';

export async function renderSettings() {
  const progress = await getProgress();
  await initFirebase();
  const user = getCurrentUser();
  const syncActive = isSyncEnabled();
  const reminderSettings = getReminderSettings();
  const notificationsSupported = 'Notification' in window;
  
  const container = document.createElement('div');
  container.className = 'settings-view';

  container.innerHTML = `
    <div class="card" id="stats-card" style="cursor: pointer;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Progress Charts</div>
          <div class="card-subtitle">View detailed stats and history</div>
        </div>
        <div style="font-size: 1.5rem;">📊</div>
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Daily Reminders
    </h3>

    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div>
          <div style="font-weight: 600;">Practice Reminders</div>
          <div style="font-size: 0.875rem; color: var(--text-secondary);">
            ${!notificationsSupported ? 'Not supported in this browser' : 
              reminderSettings.enabled ? 'Daily at ' + reminderSettings.time : 'Disabled'}
          </div>
        </div>
        <label class="toggle-switch">
          <input type="checkbox" id="reminder-toggle" 
            ${reminderSettings.enabled ? 'checked' : ''} 
            ${!notificationsSupported ? 'disabled' : ''}>
          <span class="toggle-slider"></span>
        </label>
      </div>
      ${notificationsSupported ? `
        <div id="reminder-time-section" style="display: ${reminderSettings.enabled ? 'block' : 'none'};">
          <label style="font-size: 0.875rem; color: var(--text-secondary); display: block; margin-bottom: 8px;">
            Reminder Time
          </label>
          <input type="time" id="reminder-time" value="${reminderSettings.time}"
            style="width: 100%; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary); font-size: 1rem;">
        </div>
      ` : ''}
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Cloud Sync
    </h3>

    <div class="card">
      <div class="card-title">Cloud Sync</div>
      <div id="sync-status" style="margin-top: 8px;">
        ${syncActive 
          ? `<div style="color: var(--success);">✓ Synced as ${user?.email || 'Anonymous User'}</div>`
          : `<div style="color: var(--text-secondary);">Not signed in. Progress stored locally.</div>`
        }
      </div>
      
      <div id="auth-section" style="margin-top: 16px;">
        ${syncActive ? `
          <button class="btn btn-secondary btn-full" id="sync-now-btn">
            🔄 Sync Now
          </button>
          <button class="btn btn-secondary btn-full" id="signout-btn" style="margin-top: 8px;">
            Sign Out
          </button>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <input type="email" id="email-input" placeholder="Email" class="input-field" style="padding: 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">
            <input type="password" id="password-input" placeholder="Password" class="input-field" style="padding: 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 8px; color: var(--text-primary);">
            <button class="btn btn-primary btn-full" id="signin-btn">
              Sign In / Create Account
            </button>
            <div style="text-align: center; color: var(--text-muted); font-size: 0.75rem;">or</div>
            <button class="btn btn-secondary btn-full" id="anon-signin-btn">
              Continue Without Account
            </button>
          </div>
        `}
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Manual Backup
    </h3>

    <div class="card">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <button class="btn btn-secondary btn-full" id="export-btn">
          📤 Export Progress
        </button>
        <button class="btn btn-secondary btn-full" id="import-btn">
          📥 Import Progress
        </button>
        <input type="file" id="import-file" accept=".json" style="display: none;">
      </div>
      <div style="margin-top: 12px; font-size: 0.75rem; color: var(--text-muted);">
        Export your progress as a JSON file for backup.
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Statistics
    </h3>

    <div class="card">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Level</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.level}</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Total XP</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.xp}</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Current Streak</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.streak} days</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Words Learned</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.stats.wordsLearned}</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Total Reviews</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.stats.totalReviews}</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Accuracy</div>
          <div style="font-size: 1.25rem; font-weight: 600;">
            ${progress.stats.totalReviews > 0 
              ? Math.round((progress.stats.correctAnswers / progress.stats.totalReviews) * 100) 
              : 0}%
          </div>
        </div>
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Achievements (${progress.achievements.length}/${Object.keys(ACHIEVEMENTS).length})
    </h3>

    <div style="display: flex; flex-direction: column; gap: 8px;">
      ${Object.entries(ACHIEVEMENTS).map(([id, ach]) => `
        <div class="achievement ${progress.achievements.includes(id) ? '' : 'locked'}">
          <div class="achievement-icon">${ach.icon}</div>
          <div class="achievement-info">
            <div class="achievement-name">${ach.name}</div>
            <div class="achievement-desc">${ach.desc}</div>
          </div>
          ${progress.achievements.includes(id) ? '<span style="color: var(--success);">✓</span>' : ''}
        </div>
      `).join('')}
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Danger Zone
    </h3>

    <div class="card" style="border-color: var(--error);">
      <button class="btn btn-error btn-full" id="reset-btn">
        🗑️ Reset All Progress
      </button>
      <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-muted);">
        This will delete all your progress. This action cannot be undone.
      </div>
    </div>

    <div style="margin-top: 24px; text-align: center; color: var(--text-muted); font-size: 0.75rem;">
      Polski v1.0.0
    </div>
  `;

  // Auth event handlers
  const signinBtn = container.querySelector('#signin-btn');
  const anonSigninBtn = container.querySelector('#anon-signin-btn');
  const signoutBtn = container.querySelector('#signout-btn');
  const syncNowBtn = container.querySelector('#sync-now-btn');

  if (signinBtn) {
    signinBtn.addEventListener('click', async () => {
      const email = container.querySelector('#email-input').value;
      const password = container.querySelector('#password-input').value;
      
      if (!email || !password) {
        showToast('Please enter email and password', 'error');
        return;
      }
      
      try {
        signinBtn.disabled = true;
        signinBtn.textContent = 'Signing in...';
        await signInWithEmail(email, password);
        showToast('Signed in! Syncing...', 'success');
        
        // Sync with cloud after sign in
        const localProgress = await getProgress();
        const localVocab = await getAll(STORES.vocabulary);
        const result = await syncWithCloud(localProgress, localVocab);
        
        // Save merged cloud data locally
        if (result.progress) {
          await set(STORES.progress, { ...result.progress, id: 'user-progress' });
        }
        
        showToast('Sync complete!', 'success');
        location.reload(); // Reload to refresh all cached data
      } catch (err) {
        showToast('Sign in failed: ' + err.message, 'error');
        signinBtn.disabled = false;
        signinBtn.textContent = 'Sign In / Create Account';
      }
    });
  }

  if (anonSigninBtn) {
    anonSigninBtn.addEventListener('click', async () => {
      try {
        anonSigninBtn.disabled = true;
        anonSigninBtn.textContent = 'Setting up...';
        await signInAnonymously();
        showToast('Anonymous sync enabled!', 'success');
        router.navigate('settings');
      } catch (err) {
        showToast('Failed: ' + err.message, 'error');
        anonSigninBtn.disabled = false;
        anonSigninBtn.textContent = 'Continue Without Account';
      }
    });
  }

  if (signoutBtn) {
    signoutBtn.addEventListener('click', async () => {
      await signOut();
      showToast('Signed out', 'success');
      router.navigate('settings');
    });
  }

  if (syncNowBtn) {
    syncNowBtn.addEventListener('click', async () => {
      try {
        syncNowBtn.disabled = true;
        syncNowBtn.textContent = '🔄 Syncing...';
        
        const localProgress = await getProgress();
        const localVocab = await getAll(STORES.vocabulary);
        const result = await syncWithCloud(localProgress, localVocab);
        
        // Update local with merged data
        await set(STORES.progress, { ...result.progress, id: 'user-progress' });
        
        showToast('Synced successfully!', 'success');
        router.navigate('settings');
      } catch (err) {
        showToast('Sync failed: ' + err.message, 'error');
        syncNowBtn.disabled = false;
        syncNowBtn.textContent = '🔄 Sync Now';
      }
    });
  }

  container.querySelector('#export-btn').addEventListener('click', async () => {
    try {
      await syncManager.downloadAsFile();
      showToast('Progress exported!', 'success');
    } catch (err) {
      showToast('Export failed', 'error');
      console.error(err);
    }
  });

  const importFile = container.querySelector('#import-file');
  container.querySelector('#import-btn').addEventListener('click', () => {
    importFile.click();
  });

  importFile.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      await syncManager.uploadFromFile(file);
      showToast('Progress imported!', 'success');
      router.navigate('home');
    } catch (err) {
      showToast('Import failed: ' + err.message, 'error');
      console.error(err);
    }
  });

  container.querySelector('#reset-btn').addEventListener('click', async () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      if (confirm('Really delete everything?')) {
        indexedDB.deleteDatabase('polski-db');
        location.reload();
      }
    }
  });

  container.querySelector('#stats-card').addEventListener('click', () => {
    router.navigate('stats', { title: 'Statistics' });
  });

  const reminderToggle = container.querySelector('#reminder-toggle');
  const reminderTimeInput = container.querySelector('#reminder-time');
  const reminderTimeSection = container.querySelector('#reminder-time-section');

  if (reminderToggle) {
    reminderToggle.addEventListener('change', async () => {
      if (reminderToggle.checked) {
        const time = reminderTimeInput?.value || '19:00';
        const result = await enableReminders(time);
        if (result.success) {
          showToast('Reminders enabled!', 'success');
          if (reminderTimeSection) reminderTimeSection.style.display = 'block';
        } else {
          reminderToggle.checked = false;
          if (result.reason === 'denied') {
            showToast('Notification permission denied', 'error');
          } else {
            showToast('Could not enable notifications', 'error');
          }
        }
      } else {
        disableReminders();
        if (reminderTimeSection) reminderTimeSection.style.display = 'none';
        showToast('Reminders disabled', 'success');
      }
    });
  }

  if (reminderTimeInput) {
    reminderTimeInput.addEventListener('change', () => {
      updateReminderTime(reminderTimeInput.value);
      showToast('Reminder time updated', 'success');
    });
  }

  return container;
}
