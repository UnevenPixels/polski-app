import { getDrillCategory, getCategoryList } from '../data/drills.js';
import { addXP, updateStreak, incrementStats } from '../core/progress.js';
import { router } from '../router.js';
import { showToast, updateHeaderStats } from '../app.js';

export async function renderDrills(params = {}) {
  if (params.categoryId) {
    return renderDrillSession(params.categoryId);
  }
  return renderDrillsList();
}

function renderDrillsList() {
  const container = document.createElement('div');
  container.className = 'drills-view';

  const categories = getCategoryList();

  let html = `
    <div class="card" style="background: var(--bg-tertiary); border-color: var(--accent);">
      <div class="card-title">⚡ Grammar Drills</div>
      <div class="card-subtitle" style="margin-top: 8px;">
        Rapid practice on cases, aspect, and adjective agreement. Build the muscle memory you need to speak fluently.
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">
      Drill Categories
    </h3>
  `;

  categories.forEach(cat => {
    html += `
      <div class="card drill-cat" data-id="${cat.id}" style="cursor: pointer;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="font-size: 2rem;">${cat.icon}</div>
          <div style="flex: 1;">
            <div style="font-weight: 600;">${cat.title} <span style="color: var(--text-muted); font-size: 0.875rem;">(${cat.titlePl})</span></div>
            <div class="card-subtitle">${cat.description}</div>
            <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 4px;">${cat.count} drills</div>
          </div>
          <div style="color: var(--text-muted);">→</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.drill-cat').forEach(item => {
    item.addEventListener('click', () => {
      router.navigate('drills', { 
        categoryId: item.dataset.id, 
        title: 'Drill Session' 
      });
    });
  });

  return container;
}

function renderDrillSession(categoryId) {
  const category = getDrillCategory(categoryId);
  const container = document.createElement('div');
  container.className = 'drill-session';

  if (!category) {
    container.innerHTML = '<div class="empty-state"><div class="empty-title">Category not found</div></div>';
    return container;
  }

  // Shuffle drills
  const drills = [...category.drills].sort(() => Math.random() - 0.5);
  
  const state = {
    index: 0,
    correct: 0,
    incorrect: 0,
    answered: false,
    userAnswer: '',
    isCorrect: false,
    sessionComplete: false,
    mistakes: []
  };

  function normalize(str) {
    return str.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function checkAnswer(input) {
    const drill = drills[state.index];
    const expected = normalize(drill.answer);
    const got = normalize(input);
    return got === expected;
  }

  function render() {
    if (state.sessionComplete) {
      renderComplete();
      return;
    }

    const drill = drills[state.index];
    const progress = ((state.index) / drills.length) * 100;

    container.innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div>
            <div style="font-weight: 600;">${category.icon} ${category.title}</div>
            <div style="color: var(--text-secondary); font-size: 0.875rem;">${category.titlePl}</div>
          </div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">
            ${state.index + 1} / ${drills.length}
          </div>
        </div>
        <div class="progress-bar" style="margin-bottom: 12px;">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div style="display: flex; gap: 16px; font-size: 0.875rem;">
          <span style="color: var(--success);">✓ ${state.correct}</span>
          <span style="color: var(--error);">✗ ${state.incorrect}</span>
        </div>
      </div>

      <div class="card">
        <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 8px;">Fill in the blank:</div>
        <div style="font-size: 1.25rem; font-weight: 500; margin-bottom: 8px;">${drill.prompt}</div>
        <div style="color: var(--text-secondary); font-size: 0.875rem; font-style: italic;">${drill.hint}</div>
      </div>

      <div class="card">
        <input type="text" id="drill-input" class="exercise-input" 
          placeholder="Type your answer..." 
          autocomplete="off" 
          autocapitalize="off"
          ${state.answered ? 'disabled' : ''}>
        
        <div class="polish-keyboard" style="margin-top: 12px;">
          ${['ą','ć','ę','ł','ń','ó','ś','ź','ż'].map(c => 
            `<button class="polish-char-btn" data-char="${c}">${c}</button>`
          ).join('')}
        </div>

        ${state.answered ? `
          <div style="margin-top: 16px; padding: 12px; border-radius: 8px; background: ${state.isCorrect ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'};">
            <div style="font-weight: 600; color: ${state.isCorrect ? 'var(--success)' : 'var(--error)'};">
              ${state.isCorrect ? '✓ Correct!' : '✗ Not quite'}
            </div>
            ${!state.isCorrect ? `
              <div style="margin-top: 4px;">Your answer: <span style="color: var(--error);">${state.userAnswer}</span></div>
              <div style="margin-top: 4px;">Correct: <span style="color: var(--success); font-weight: 500;">${drill.answer}</span></div>
            ` : ''}
            <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-secondary);">
              💡 ${drill.explanation}
            </div>
          </div>
          <button class="btn btn-primary btn-full" id="next-btn" style="margin-top: 12px;">
            ${state.index === drills.length - 1 ? 'Finish' : 'Next'}
          </button>
        ` : `
          <button class="btn btn-primary btn-full" id="check-btn" style="margin-top: 12px;">
            Check
          </button>
          <button class="btn btn-secondary btn-full" id="skip-btn" style="margin-top: 8px;">
            Skip
          </button>
        `}
      </div>
    `;

    attachHandlers();
    
    const input = container.querySelector('#drill-input');
    if (input && !state.answered) input.focus();
  }

  function renderComplete() {
    const total = drills.length;
    const accuracy = total > 0 ? Math.round((state.correct / total) * 100) : 0;

    container.innerHTML = `
      <div class="card" style="border-color: var(--success); text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 12px;">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
        <div class="card-title" style="font-size: 1.25rem;">Drill Complete!</div>
        <div style="margin-top: 16px;">
          <div style="font-size: 2rem; font-weight: 700; color: ${accuracy >= 80 ? 'var(--success)' : accuracy >= 60 ? 'var(--warning)' : 'var(--error)'};">
            ${accuracy}%
          </div>
          <div style="color: var(--text-secondary); margin-top: 4px;">
            ${state.correct} / ${total} correct
          </div>
        </div>
      </div>

      ${state.mistakes.length > 0 ? `
        <h3 style="margin: 20px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">
          Review Mistakes (${state.mistakes.length})
        </h3>
        ${state.mistakes.map(m => `
          <div class="card">
            <div style="font-weight: 500;">${m.prompt}</div>
            <div style="margin-top: 4px; color: var(--error); font-size: 0.875rem;">Your answer: ${m.userAnswer}</div>
            <div style="color: var(--success); font-size: 0.875rem;">Correct: ${m.answer}</div>
            <div style="color: var(--text-secondary); font-size: 0.75rem; margin-top: 4px;">💡 ${m.explanation}</div>
          </div>
        `).join('')}
      ` : ''}

      <button class="btn btn-primary btn-full" id="finish-btn" style="margin-top: 16px;">
        Done
      </button>
      <button class="btn btn-secondary btn-full" id="retry-btn" style="margin-top: 8px;">
        Drill Again
      </button>
    `;

    container.querySelector('#finish-btn').addEventListener('click', () => {
      router.navigate('drills', { title: 'Drills' });
    });

    container.querySelector('#retry-btn').addEventListener('click', () => {
      router.navigate('drills', { categoryId, title: 'Drill Session' });
    });
  }

  function attachHandlers() {
    const checkBtn = container.querySelector('#check-btn');
    const skipBtn = container.querySelector('#skip-btn');
    const nextBtn = container.querySelector('#next-btn');
    const input = container.querySelector('#drill-input');

    if (checkBtn) {
      checkBtn.addEventListener('click', () => submitAnswer());
    }
    
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        state.answered = true;
        state.isCorrect = false;
        state.userAnswer = '(skipped)';
        const drill = drills[state.index];
        state.incorrect++;
        state.mistakes.push({
          prompt: drill.prompt,
          userAnswer: '(skipped)',
          answer: drill.answer,
          explanation: drill.explanation
        });
        incrementStats('totalReviews', 1);
        render();
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitAnswer();
        }
      });
    }

    container.querySelectorAll('.polish-char-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!input || state.answered) return;
        const char = btn.dataset.char;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value = input.value.slice(0, start) + char + input.value.slice(end);
        input.setSelectionRange(start + 1, start + 1);
        input.focus();
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', async () => {
        if (state.index === drills.length - 1) {
          state.sessionComplete = true;
          await finishSession();
        } else {
          state.index++;
          state.answered = false;
          state.userAnswer = '';
          state.isCorrect = false;
        }
        render();
      });
    }
  }

  function submitAnswer() {
    const input = container.querySelector('#drill-input');
    if (!input) return;
    
    const value = input.value.trim();
    if (!value) return;

    state.userAnswer = value;
    state.isCorrect = checkAnswer(value);
    state.answered = true;

    incrementStats('totalReviews', 1);
    if (state.isCorrect) {
      state.correct++;
      incrementStats('correctAnswers', 1);
    } else {
      state.incorrect++;
      const drill = drills[state.index];
      state.mistakes.push({
        prompt: drill.prompt,
        userAnswer: value,
        answer: drill.answer,
        explanation: drill.explanation
      });
    }
    render();
  }

  async function finishSession() {
    const xp = state.correct * 3;
    if (xp > 0) {
      await addXP(xp);
      await updateStreak();
      await updateHeaderStats();
      showToast(`+${xp} XP — Drill complete!`, 'success');
    }
  }

  render();
  return container;
}
