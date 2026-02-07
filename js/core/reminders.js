const REMINDER_KEY = 'reminder-settings';

let reminderInterval = null;

export function getDefaultSettings() {
  return {
    enabled: false,
    time: '19:00',
    lastNotified: null
  };
}

export function getReminderSettings() {
  const stored = localStorage.getItem(REMINDER_KEY);
  return stored ? JSON.parse(stored) : getDefaultSettings();
}

export function saveReminderSettings(settings) {
  localStorage.setItem(REMINDER_KEY, JSON.stringify(settings));
}

export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    return 'unsupported';
  }
  
  if (Notification.permission === 'granted') {
    return 'granted';
  }
  
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission;
  }
  
  return Notification.permission;
}

export function canSendNotifications() {
  return 'Notification' in window && Notification.permission === 'granted';
}

export function scheduleReminders() {
  if (reminderInterval) {
    clearInterval(reminderInterval);
  }
  
  const settings = getReminderSettings();
  if (!settings.enabled || !canSendNotifications()) {
    return;
  }
  
  reminderInterval = setInterval(() => {
    checkAndNotify();
  }, 60000);
  
  checkAndNotify();
}

function checkAndNotify() {
  const settings = getReminderSettings();
  if (!settings.enabled) return;
  
  const now = new Date();
  const today = now.toDateString();
  
  if (settings.lastNotified === today) {
    return;
  }
  
  const [targetHour, targetMinute] = settings.time.split(':').map(Number);
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  if (currentHour === targetHour && currentMinute >= targetMinute && currentMinute < targetMinute + 5) {
    sendReminder();
    saveReminderSettings({ ...settings, lastNotified: today });
  }
}

function sendReminder() {
  if (!canSendNotifications()) return;
  
  const messages = [
    "Time to practice Polish! 🇵🇱",
    "Keep your streak alive! 🔥",
    "A few minutes of Polish makes a difference!",
    "Don't forget your Polish lesson today!",
    "Cześć! Ready to learn some Polish?"
  ];
  
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  const notification = new Notification('Polski', {
    body: message,
    icon: './assets/icons/icon-192.png',
    badge: './assets/icons/icon-192.png',
    tag: 'daily-reminder',
    renotify: false
  });
  
  notification.onclick = () => {
    window.focus();
    notification.close();
  };
}

export async function enableReminders(time = '19:00') {
  const permission = await requestNotificationPermission();
  
  if (permission !== 'granted') {
    return { success: false, reason: permission };
  }
  
  saveReminderSettings({
    enabled: true,
    time,
    lastNotified: null
  });
  
  scheduleReminders();
  
  return { success: true };
}

export function disableReminders() {
  saveReminderSettings({
    ...getReminderSettings(),
    enabled: false
  });
  
  if (reminderInterval) {
    clearInterval(reminderInterval);
    reminderInterval = null;
  }
}

export function updateReminderTime(time) {
  const settings = getReminderSettings();
  saveReminderSettings({ ...settings, time });
  scheduleReminders();
}

export function initReminders() {
  scheduleReminders();
}
