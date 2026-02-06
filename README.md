# Polski - Polish Language Learning App

A progressive web app for learning Polish with spaced repetition and gamification.

## Features

- **12 Lessons** covering A1-B1 Polish (from the "W rok po polsku" course)
- **Spaced Repetition** using SM-2 algorithm for vocabulary retention
- **Gamification** with XP, levels, streaks, and achievements
- **Offline-First** PWA that works without internet
- **Cloud Sync** via Firebase (optional)
- **Dark Mode** minimal interface

## Installing on Android

1. Open the app URL in Chrome on your Android device
2. Tap the menu (⋮) → **"Add to Home screen"** or **"Install app"**
3. The app installs as a PWA with full offline support

If you see an "Add to Home screen" banner at the bottom, just tap it.

## Running Locally

Since this uses ES modules, serve via HTTP (not file://):

```bash
# Python
cd polish-app
python3 -m http.server 8080

# Node.js
npx serve polish-app

# VS Code
Use "Live Server" extension
```

Then open http://localhost:8080

## Setting Up Firebase Cloud Sync

To enable cross-device sync:

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" → name it (e.g., "polski-app")
3. Disable Google Analytics (optional) → Create

### 2. Enable Authentication

1. Firebase Console → Build → Authentication
2. Click "Get started"
3. Enable **Email/Password** provider
4. (Optional) Enable **Anonymous** for device-only sync

### 3. Create Firestore Database

1. Firebase Console → Build → Firestore Database
2. Click "Create database"
3. Start in **production mode**
4. Choose a location close to you

### 4. Set Firestore Security Rules

In Firestore → Rules, replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /vocabulary/{wordId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

Click **Publish**.

### 5. Get Your Firebase Config

1. Firebase Console → Project Settings (gear icon)
2. Scroll to "Your apps" → Click web icon (`</>`)
3. Register app (name: "Polski Web")
4. Copy the `firebaseConfig` object

### 6. Update the App

Edit `js/core/firebase.js` and replace the placeholder config:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

### 7. Using Cloud Sync

1. Open the app → Settings tab
2. Enter email/password to create account or sign in
3. Your progress now syncs across all devices!

## Project Structure

```
polish-app/
├── index.html          # Main HTML shell
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── css/styles.css     # Dark theme styles
└── js/
    ├── app.js         # Main app controller
    ├── router.js      # Client-side routing
    ├── core/
    │   ├── storage.js   # IndexedDB wrapper
    │   ├── firebase.js  # Cloud sync
    │   ├── progress.js  # XP, levels, streaks
    │   ├── srs.js       # SM-2 algorithm
    │   └── sync.js      # Export/import
    ├── data/
    │   └── lessons.js   # All 12 lessons content
    ├── views/           # UI views
    └── exercises/       # Exercise types
```

## Content Source

Based on "W rok po polsku" (Polish in a Year) by Oscar E. Swan, University of Pittsburgh.

## Offline Support

The app works fully offline after first load:
- All lessons and vocabulary stored locally (IndexedDB)
- Service worker caches all assets
- Syncs with cloud when back online (if signed in)

## License

MIT
