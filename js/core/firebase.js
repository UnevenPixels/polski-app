// Firebase configuration and sync functionality
// Replace these values with your Firebase project config
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCgEfFEaumlX6DMPsl5EpAIPYe4rjWjG_c",
  authDomain: "polski-app.firebaseapp.com",
  projectId: "polski-app",
  storageBucket: "polski-app.firebasestorage.app",
  messagingSenderId: "156315529833",
  appId: "1:156315529833:web:f9e261e25996a3464fa8f8"
};

let app = null;
let db = null;
let auth = null;
let currentUser = null;
let syncEnabled = false;

// Dynamically load Firebase SDK
async function loadFirebaseSDK() {
  if (window.firebase) return;
  
  const scripts = [
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js'
  ];
  
  for (const src of scripts) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
}

// Initialize Firebase
export async function initFirebase() {
  if (app) return { app, db, auth };
  
  // Check if config is set
  if (FIREBASE_CONFIG.apiKey === "YOUR_API_KEY") {
    console.log('Firebase not configured. Running in offline mode.');
    return null;
  }
  
  try {
    await loadFirebaseSDK();
    
    app = firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    auth = firebase.auth();
    
    // Enable offline persistence
    await db.enablePersistence({ synchronizeTabs: true }).catch(err => {
      if (err.code !== 'failed-precondition' && err.code !== 'unimplemented') {
        console.warn('Firestore persistence error:', err);
      }
    });
    
    // Listen for auth state changes
    auth.onAuthStateChanged(user => {
      currentUser = user;
      if (user) {
        syncEnabled = true;
        console.log('Signed in as:', user.email || user.uid);
      } else {
        syncEnabled = false;
      }
    });
    
    return { app, db, auth };
  } catch (error) {
    console.error('Firebase init error:', error);
    return null;
  }
}

// Anonymous sign in (easiest for getting started)
export async function signInAnonymously() {
  if (!auth) await initFirebase();
  if (!auth) return null;
  
  try {
    const result = await auth.signInAnonymously();
    return result.user;
  } catch (error) {
    console.error('Anonymous sign in error:', error);
    return null;
  }
}

// Email sign in
export async function signInWithEmail(email, password) {
  if (!auth) await initFirebase();
  if (!auth) return null;
  
  // Validate password length
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  
  try {
    // Try signing in first
    const result = await auth.signInWithEmailAndPassword(email, password);
    return result.user;
  } catch (error) {
    // If user doesn't exist or credentials invalid, try creating account
    if (error.code === 'auth/user-not-found' || 
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/wrong-password') {
      try {
        const result = await auth.createUserWithEmailAndPassword(email, password);
        return result.user;
      } catch (createError) {
        // If account already exists, the password was just wrong
        if (createError.code === 'auth/email-already-in-use') {
          throw new Error('Incorrect password');
        }
        throw createError;
      }
    }
    throw error;
  }
}

// Sign out
export async function signOut() {
  if (!auth) return;
  await auth.signOut();
  currentUser = null;
  syncEnabled = false;
}

// Get current user
export function getCurrentUser() {
  return currentUser;
}

// Check if sync is enabled
export function isSyncEnabled() {
  return syncEnabled && currentUser !== null;
}

// Save progress to Firebase
export async function saveToCloud(progress) {
  if (!isSyncEnabled() || !db) return false;
  
  try {
    const docRef = db.collection('users').doc(currentUser.uid);
    await docRef.set({
      progress: progress,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      deviceInfo: navigator.userAgent
    }, { merge: true });
    
    console.log('Progress saved to cloud');
    return true;
  } catch (error) {
    console.error('Cloud save error:', error);
    return false;
  }
}

// Load progress from Firebase
export async function loadFromCloud() {
  if (!isSyncEnabled() || !db) return null;
  
  try {
    const docRef = db.collection('users').doc(currentUser.uid);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const data = doc.data();
      console.log('Progress loaded from cloud');
      return data.progress;
    }
    return null;
  } catch (error) {
    console.error('Cloud load error:', error);
    return null;
  }
}

// Save vocabulary to Firebase
export async function saveVocabularyToCloud(vocabulary) {
  if (!isSyncEnabled() || !db) return false;
  
  try {
    const batch = db.batch();
    const vocabRef = db.collection('users').doc(currentUser.uid).collection('vocabulary');
    
    for (const word of vocabulary) {
      batch.set(vocabRef.doc(word.word), word);
    }
    
    await batch.commit();
    return true;
  } catch (error) {
    console.error('Vocabulary cloud save error:', error);
    return false;
  }
}

// Load vocabulary from Firebase
export async function loadVocabularyFromCloud() {
  if (!isSyncEnabled() || !db) return null;
  
  try {
    const vocabRef = db.collection('users').doc(currentUser.uid).collection('vocabulary');
    const snapshot = await vocabRef.get();
    
    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Vocabulary cloud load error:', error);
    return null;
  }
}

// Sync local data with cloud (merge strategy: cloud wins for conflicts)
export async function syncWithCloud(localProgress, localVocabulary) {
  if (!isSyncEnabled()) return { progress: localProgress, vocabulary: localVocabulary };
  
  try {
    // Load cloud data
    const cloudProgress = await loadFromCloud();
    const cloudVocabulary = await loadVocabularyFromCloud();
    
    let mergedProgress = localProgress;
    let mergedVocabulary = localVocabulary;
    
    // Merge progress (take higher values)
    if (cloudProgress) {
      mergedProgress = mergeProgress(localProgress, cloudProgress);
    }
    
    // Merge vocabulary (take better SRS data)
    if (cloudVocabulary && cloudVocabulary.length > 0) {
      mergedVocabulary = mergeVocabulary(localVocabulary, cloudVocabulary);
    }
    
    // Save merged data back to cloud
    await saveToCloud(mergedProgress);
    if (mergedVocabulary.length > 0) {
      await saveVocabularyToCloud(mergedVocabulary);
    }
    
    return { progress: mergedProgress, vocabulary: mergedVocabulary };
  } catch (error) {
    console.error('Sync error:', error);
    return { progress: localProgress, vocabulary: localVocabulary };
  }
}

// Merge two progress objects (take higher/better values)
function mergeProgress(local, cloud) {
  const merged = { ...local };
  
  // Take higher XP
  merged.xp = Math.max(local.xp || 0, cloud.xp || 0);
  merged.level = Math.max(local.level || 1, cloud.level || 1);
  merged.streak = Math.max(local.streak || 0, cloud.streak || 0);
  
  // Merge achievements (union)
  const achievements = new Set([...(local.achievements || []), ...(cloud.achievements || [])]);
  merged.achievements = [...achievements];
  
  // Merge stats (take higher values)
  merged.stats = {
    totalReviews: Math.max(local.stats?.totalReviews || 0, cloud.stats?.totalReviews || 0),
    correctAnswers: Math.max(local.stats?.correctAnswers || 0, cloud.stats?.correctAnswers || 0),
    lessonsCompleted: Math.max(local.stats?.lessonsCompleted || 0, cloud.stats?.lessonsCompleted || 0),
    wordsLearned: Math.max(local.stats?.wordsLearned || 0, cloud.stats?.wordsLearned || 0)
  };
  
  // Merge lessons (take completed state if either is completed)
  merged.lessons = { ...local.lessons };
  for (const [lessonId, cloudLesson] of Object.entries(cloud.lessons || {})) {
    if (!merged.lessons[lessonId]) {
      merged.lessons[lessonId] = cloudLesson;
    } else {
      merged.lessons[lessonId].completed = merged.lessons[lessonId].completed || cloudLesson.completed;
      merged.lessons[lessonId].stars = Math.max(merged.lessons[lessonId].stars || 0, cloudLesson.stars || 0);
      
      // Merge sub-lessons
      for (const [subId, cloudSub] of Object.entries(cloudLesson.subLessons || {})) {
        if (!merged.lessons[lessonId].subLessons[subId]) {
          merged.lessons[lessonId].subLessons[subId] = cloudSub;
        } else {
          const localSub = merged.lessons[lessonId].subLessons[subId];
          merged.lessons[lessonId].subLessons[subId] = {
            completed: localSub.completed || cloudSub.completed,
            accuracy: Math.max(localSub.accuracy || 0, cloudSub.accuracy || 0)
          };
        }
      }
    }
  }
  
  // Take most recent lastPractice
  if (cloud.lastPractice && (!local.lastPractice || new Date(cloud.lastPractice) > new Date(local.lastPractice))) {
    merged.lastPractice = cloud.lastPractice;
  }
  
  return merged;
}

// Merge vocabulary (take better SRS interval)
function mergeVocabulary(local, cloud) {
  const vocabMap = new Map();
  
  // Add all local words
  for (const word of local) {
    vocabMap.set(word.word, word);
  }
  
  // Merge with cloud (take higher interval = better learned)
  for (const cloudWord of cloud) {
    const localWord = vocabMap.get(cloudWord.word);
    if (!localWord) {
      vocabMap.set(cloudWord.word, cloudWord);
    } else {
      // Take the one with higher interval (better learned)
      if ((cloudWord.interval || 0) > (localWord.interval || 0)) {
        vocabMap.set(cloudWord.word, cloudWord);
      }
    }
  }
  
  return [...vocabMap.values()];
}

export { FIREBASE_CONFIG };
