import { lessons } from '../data/lessons.js';
import { getQuestionsForDialogue, getAvailableDialogues } from '../data/listening.js';
import { speak, speakWithCallback, stopSpeaking, isMuted } from '../core/tts.js';
import { addXP, updateStreak, incrementStats } from '../core/progress.js';
import { router } from '../router.js';
import { showToast, updateHeaderStats } from '../app.js';

export async function renderListening(params = {}) {
  if (params.lessonId && params.subLessonId) {
    return renderListeningExercise(params.lessonId, params.subLessonId);
  }
  return renderListeningHub();
}

function renderListeningHub() {
  const container = document.createElement('div');
  container.className = 'listening-view';

  const available = getAvailableDialogues();
  
  let html = `
    <div class="card" style="background: var(--bg-tertiary); border-color: var(--accent);">
      <div class="card-title">🎧 Listening Practice</div>
      <div class="card-subtitle" style="margin-top: 8px;">
        Hear the dialogue at natural speed and answer comprehension questions. Train your ear for real Polish.
      </div>
    </div>
    
    <h3 style="margin: 20px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">
      Available Dialogues
    </h3>
  `;

  if (isMuted()) {
    html += `
      <div class="card" style="border-color: var(--warning); margin-bottom: 16px;">
        <div style="color: var(--warning); font-weight: 600; margin-bottom: 4px;">🔇 Sound is muted</div>
        <div style="color: var(--text-secondary); font-size: 0.875rem;">
          Tap the speaker icon in the header to enable audio.
        </div>
      </div>
    `;
  }

  available.forEach(({ lessonId, subLessonId }) => {
    const lesson = lessons[lessonId];
    const sub = lesson?.subLessons?.[subLessonId];
    if (!sub) return;
    
    html += `
      <div class="card listening-item" data-lesson="${lessonId}" data-sublesson="${subLessonId}" style="cursor: pointer;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${lesson.title} ${lessonId}.${subLessonId}</div>
            <div class="card-subtitle">${sub.title}</div>
          </div>
          <div style="font-size: 1.5rem;">🎧</div>
        </div>
      </div>
    `;
  });

  if (available.length === 0) {
    html += '<div class="empty-state"><div class="empty-title">No listening exercises available yet</div></div>';
  }

  container.innerHTML = html;

  container.querySelectorAll('.listening-item').forEach(item => {
    item.addEventListener('click', () => {
      const lessonId = item.dataset.lesson;
      const subLessonId = item.dataset.sublesson;
      router.navigate('listening', { 
        lessonId, 
        subLessonId, 
        title: `Listening ${lessonId}.${subLessonId}` 
      });
    });
  });

  return container;
}

function renderListeningExercise(lessonId, subLessonId) {
  const lesson = lessons[lessonId];
  const sub = lesson?.subLessons?.[subLessonId];
  const questions = getQuestionsForDialogue(lessonId, subLessonId);

  const container = document.createElement('div');
  container.className = 'listening-exercise';

  if (!sub || !questions) {
    container.innerHTML = '<div class="empty-state"><div class="empty-title">Exercise not found</div></div>';
    return container;
  }

  const state = {
    currentQuestion: 0,
    answers: [],
    revealed: false,
    playing: false
  };

  function render() {
    const q = questions[state.currentQuestion];
    const isLast = state.currentQuestion === questions.length - 1;
    const allAnswered = state.answers.length === questions.length;
    
    let html = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="color: var(--text-secondary); font-size: 0.875rem;">
            ${lesson.title} ${lessonId}.${subLessonId}
          </div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">
            ${state.currentQuestion + 1} / ${questions.length}
          </div>
        </div>
        <div style="font-weight: 600;">${sub.title}</div>
        <div class="card-subtitle">${sub.dialogue.context}</div>
      </div>

      <div class="listen-controls card">
        <div style="text-align: center; margin-bottom: 12px; color: var(--text-secondary); font-size: 0.875rem;">
          🎧 Listen carefully — text is hidden
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-primary" id="play-btn" style="flex: 1;">
            ▶ Play Dialogue
          </button>
          <button class="btn btn-secondary" id="play-slow-btn">
            🐢 Slow
          </button>
        </div>
        <button class="btn btn-secondary btn-full" id="reveal-btn" style="margin-top: 8px;">
          ${state.revealed ? '🙈 Hide Text' : '👁 Show Text'}
        </button>
      </div>
    `;

    if (state.revealed) {
      html += `
        <div class="card">
          <div class="card-title">Dialogue</div>
          ${sub.dialogue.lines.map(line => `
            <div style="margin: 8px 0; padding: 8px 0; border-bottom: 1px solid var(--border);">
              <div style="color: var(--accent); font-size: 0.875rem;">${line.speaker}</div>
              <div style="font-weight: 500;">${line.polish}</div>
              <div style="color: var(--text-secondary); font-size: 0.875rem;">${line.english}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (!allAnswered) {
      html += `
        <div class="card" style="margin-top: 16px;">
          <div style="font-weight: 600; margin-bottom: 12px;">${q.question}</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${q.options.map((opt, i) => `
              <button class="btn btn-secondary listen-option" data-option="${i}" style="text-align: left; justify-content: flex-start;">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      const correct = state.answers.filter(a => a.correct).length;
      html += `
        <div class="card" style="margin-top: 16px; border-color: var(--success);">
          <div class="card-title" style="color: var(--success);">✓ Complete!</div>
          <div style="margin: 8px 0; font-size: 1.125rem;">
            ${correct} / ${questions.length} correct
          </div>
          <div style="margin-top: 12px;">
            ${state.answers.map((a, i) => `
              <div style="padding: 8px 0; border-bottom: 1px solid var(--border);">
                <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 4px;">
                  Q${i + 1}: ${questions[i].question}
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: ${a.correct ? 'var(--success)' : 'var(--error)'};">
                    ${a.correct ? '✓' : '✗'}
                  </span>
                  <span>Your answer: ${a.chosen}</span>
                </div>
                ${!a.correct ? `<div style="color: var(--success); font-size: 0.875rem; margin-top: 4px;">Correct: ${questions[i].answer}</div>` : ''}
              </div>
            `).join('')}
          </div>
          <button class="btn btn-primary btn-full" id="finish-btn" style="margin-top: 16px;">
            Continue
          </button>
          <button class="btn btn-secondary btn-full" id="retry-btn" style="margin-top: 8px;">
            Try Again
          </button>
        </div>
      `;
    }

    container.innerHTML = html;
    attachHandlers();
  }

  function attachHandlers() {
    const playBtn = container.querySelector('#play-btn');
    const playSlowBtn = container.querySelector('#play-slow-btn');
    const revealBtn = container.querySelector('#reveal-btn');
    const finishBtn = container.querySelector('#finish-btn');
    const retryBtn = container.querySelector('#retry-btn');

    if (playBtn) {
      playBtn.addEventListener('click', () => playDialogue(1.0));
    }
    if (playSlowBtn) {
      playSlowBtn.addEventListener('click', () => playDialogue(0.7));
    }
    if (revealBtn) {
      revealBtn.addEventListener('click', () => {
        state.revealed = !state.revealed;
        render();
      });
    }
    if (finishBtn) {
      finishBtn.addEventListener('click', async () => {
        const correct = state.answers.filter(a => a.correct).length;
        const xpGained = correct * 5;
        if (xpGained > 0) {
          await addXP(xpGained);
          await updateStreak();
          await updateHeaderStats();
          showToast(`+${xpGained} XP`, 'success');
        }
        router.navigate('listening', { title: 'Listening' });
      });
    }
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        state.currentQuestion = 0;
        state.answers = [];
        state.revealed = false;
        render();
      });
    }

    container.querySelectorAll('.listen-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.option);
        const chosen = questions[state.currentQuestion].options[idx];
        const correct = chosen === questions[state.currentQuestion].answer;
        
        state.answers.push({ chosen, correct });
        incrementStats('totalReviews', 1);
        if (correct) incrementStats('correctAnswers', 1);
        
        if (state.currentQuestion < questions.length - 1) {
          state.currentQuestion++;
        }
        render();
      });
    });
  }

  function playDialogue(rate) {
    if (isMuted()) {
      showToast('Sound is muted. Tap 🔇 in header to enable.', 'error');
      return;
    }
    stopSpeaking();
    
    const lines = sub.dialogue.lines;
    let i = 0;
    
    const playNext = () => {
      if (i >= lines.length) {
        state.playing = false;
        return;
      }
      const line = lines[i];
      i++;
      speakWithCallback(line.polish, () => {
        setTimeout(playNext, 400);
      }, rate);
    };
    
    state.playing = true;
    playNext();
  }

  render();
  
  // Auto-play on first load
  setTimeout(() => playDialogue(1.0), 300);

  return container;
}
