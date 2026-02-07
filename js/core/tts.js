// Text-to-Speech for Polish pronunciation
let polishVoice = null;
let muted = false;

// Initialize and find Polish voice
export function initTTS() {
  if (!('speechSynthesis' in window)) {
    console.warn('TTS not supported');
    return false;
  }

  const loadVoices = () => {
    const voices = speechSynthesis.getVoices();
    // Try to find a Polish voice
    polishVoice = voices.find(v => v.lang.startsWith('pl')) || 
                  voices.find(v => v.lang === 'pl-PL') ||
                  null;
    
    if (polishVoice) {
      console.log('Polish voice found:', polishVoice.name);
    } else {
      console.log('No Polish voice, using default');
    }
  };

  // Voices may load async
  if (speechSynthesis.getVoices().length > 0) {
    loadVoices();
  } else {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Load mute preference
  muted = localStorage.getItem('tts-muted') === 'true';

  return true;
}

// Speak Polish text
export function speak(text, rate = 0.9) {
  if (muted || !('speechSynthesis' in window)) return;

  // Cancel any ongoing speech
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pl-PL';
  utterance.rate = rate;
  utterance.pitch = 1;

  if (polishVoice) {
    utterance.voice = polishVoice;
  }

  speechSynthesis.speak(utterance);
}

// Speak with callback when done
export function speakWithCallback(text, onEnd, rate = 0.9) {
  if (muted || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pl-PL';
  utterance.rate = rate;
  utterance.pitch = 1;

  if (polishVoice) {
    utterance.voice = polishVoice;
  }

  utterance.onend = onEnd;
  utterance.onerror = onEnd;

  speechSynthesis.speak(utterance);
}

// Stop speaking
export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
}

// Mute controls
export function isMuted() {
  return muted;
}

export function setMuted(value) {
  muted = value;
  localStorage.setItem('tts-muted', value.toString());
  if (muted) {
    stopSpeaking();
  }
}

export function toggleMute() {
  setMuted(!muted);
  return muted;
}

// Check if TTS is available
export function isTTSAvailable() {
  return 'speechSynthesis' in window;
}
