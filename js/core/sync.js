import { getAll, set, STORES, initDB } from './storage.js';

const SYNC_VERSION = 1;

export class SyncManager {
  constructor(adapter = null) {
    this.adapter = adapter;
    this.lastSync = null;
  }

  setAdapter(adapter) {
    this.adapter = adapter;
  }

  async exportData() {
    await initDB();
    
    const progress = await getAll(STORES.progress);
    const vocabulary = await getAll(STORES.vocabulary);
    
    return {
      version: SYNC_VERSION,
      exportedAt: new Date().toISOString(),
      data: {
        progress,
        vocabulary
      }
    };
  }

  async importData(backup) {
    if (!backup || !backup.data) {
      throw new Error('Invalid backup format');
    }

    if (backup.version > SYNC_VERSION) {
      throw new Error('Backup is from a newer version of the app');
    }

    await initDB();

    if (backup.data.progress) {
      for (const item of backup.data.progress) {
        await set(STORES.progress, item);
      }
    }

    if (backup.data.vocabulary) {
      for (const item of backup.data.vocabulary) {
        await set(STORES.vocabulary, item);
      }
    }

    return true;
  }

  async mergeData(remoteData) {
    const localData = await this.exportData();
    
    const merged = {
      version: SYNC_VERSION,
      exportedAt: new Date().toISOString(),
      data: {
        progress: this.mergeProgress(localData.data.progress, remoteData.data.progress),
        vocabulary: this.mergeVocabulary(localData.data.vocabulary, remoteData.data.vocabulary)
      }
    };

    await this.importData(merged);
    return merged;
  }

  mergeProgress(local, remote) {
    const localMap = new Map(local.map(p => [p.id, p]));
    const remoteMap = new Map(remote.map(p => [p.id, p]));
    
    const merged = new Map();

    for (const [id, localItem] of localMap) {
      const remoteItem = remoteMap.get(id);
      if (!remoteItem) {
        merged.set(id, localItem);
      } else {
        merged.set(id, this.mergeProgressItem(localItem, remoteItem));
      }
    }

    for (const [id, remoteItem] of remoteMap) {
      if (!merged.has(id)) {
        merged.set(id, remoteItem);
      }
    }

    return Array.from(merged.values());
  }

  mergeProgressItem(local, remote) {
    return {
      ...local,
      xp: Math.max(local.xp || 0, remote.xp || 0),
      level: Math.max(local.level || 1, remote.level || 1),
      streak: Math.max(local.streak || 0, remote.streak || 0),
      lastPractice: this.laterDate(local.lastPractice, remote.lastPractice),
      lessons: this.mergeLessons(local.lessons || {}, remote.lessons || {}),
      achievements: [...new Set([...(local.achievements || []), ...(remote.achievements || [])])],
      stats: this.mergeStats(local.stats || {}, remote.stats || {})
    };
  }

  mergeLessons(local, remote) {
    const merged = { ...local };
    
    for (const [lessonId, remoteLesson] of Object.entries(remote)) {
      if (!merged[lessonId]) {
        merged[lessonId] = remoteLesson;
      } else {
        merged[lessonId] = {
          completed: merged[lessonId].completed || remoteLesson.completed,
          stars: Math.max(merged[lessonId].stars || 0, remoteLesson.stars || 0),
          subLessons: this.mergeSubLessons(
            merged[lessonId].subLessons || {},
            remoteLesson.subLessons || {}
          )
        };
      }
    }
    
    return merged;
  }

  mergeSubLessons(local, remote) {
    const merged = { ...local };
    
    for (const [subId, remoteSub] of Object.entries(remote)) {
      if (!merged[subId]) {
        merged[subId] = remoteSub;
      } else {
        merged[subId] = {
          completed: merged[subId].completed || remoteSub.completed,
          accuracy: Math.max(merged[subId].accuracy || 0, remoteSub.accuracy || 0),
          completedAt: this.laterDate(merged[subId].completedAt, remoteSub.completedAt)
        };
      }
    }
    
    return merged;
  }

  mergeStats(local, remote) {
    return {
      totalReviews: Math.max(local.totalReviews || 0, remote.totalReviews || 0),
      correctAnswers: Math.max(local.correctAnswers || 0, remote.correctAnswers || 0),
      lessonsCompleted: Math.max(local.lessonsCompleted || 0, remote.lessonsCompleted || 0),
      wordsLearned: Math.max(local.wordsLearned || 0, remote.wordsLearned || 0)
    };
  }

  mergeVocabulary(local, remote) {
    const localMap = new Map(local.map(v => [v.word, v]));
    const remoteMap = new Map(remote.map(v => [v.word, v]));
    
    const merged = new Map();

    for (const [word, localCard] of localMap) {
      const remoteCard = remoteMap.get(word);
      if (!remoteCard) {
        merged.set(word, localCard);
      } else {
        merged.set(word, this.mergeVocabCard(localCard, remoteCard));
      }
    }

    for (const [word, remoteCard] of remoteMap) {
      if (!merged.has(word)) {
        merged.set(word, remoteCard);
      }
    }

    return Array.from(merged.values());
  }

  mergeVocabCard(local, remote) {
    const localLast = new Date(local.lastReview || 0);
    const remoteLast = new Date(remote.lastReview || 0);
    
    if (remoteLast > localLast) {
      return remote;
    }
    return local;
  }

  laterDate(a, b) {
    if (!a) return b;
    if (!b) return a;
    return new Date(a) > new Date(b) ? a : b;
  }

  downloadAsFile() {
    return this.exportData().then(data => {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `polski-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  async uploadFromFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);
          await this.importData(data);
          resolve(true);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
}

export class CloudSyncAdapter {
  constructor(config) {
    this.config = config;
    this.userId = null;
  }

  async authenticate() {
    throw new Error('authenticate() must be implemented by subclass');
  }

  async push(data) {
    throw new Error('push() must be implemented by subclass');
  }

  async pull() {
    throw new Error('pull() must be implemented by subclass');
  }

  async getLastSyncTime() {
    throw new Error('getLastSyncTime() must be implemented by subclass');
  }
}

export const syncManager = new SyncManager();
