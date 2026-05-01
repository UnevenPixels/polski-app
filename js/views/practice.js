import { router } from '../router.js';
import { getTopics, getTopic, getAllFrequencyWords } from '../data/frequency-vocab.js';
import { speak } from '../core/tts.js';
import { addXP } from '../core/progress.js';
import { showToast, updateHeaderStats } from '../app.js';
import { incrementStats } from '../core/progress.js';

export async function renderPractice(params = {}) {
  if (params.mode === 'vocab' && params.topicId) {
    return renderVocabTopic(params.topicId);
  }
  if (params.mode === 'vocab') {
    return renderVocabHub();
  }
  return renderPracticeHub();
}

function renderPracticeHub() {
  const container = document.createElement('div');
  container.className = 'practice-view';

  container.innerHTML = `
    <div class="card" style="background: var(--bg-tertiary); border-color: var(--accent);">
      <div class="card-title">🎓 Practice Hub</div>
      <div class="card-subtitle" style="margin-top: 8px;">
        Active skill-building beyond the lessons. Pick a mode to train.
      </div>
    </div>

    <div class="card practice-card" data-target="listening" style="cursor: pointer; margin-top: 16px;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <div style="font-size: 2rem;">🎧</div>
        <div style="flex: 1;">
          <div style="font-weight: 600;">Listening Practice</div>
          <div class="card-subtitle">Audio + comprehension questions</div>
        </div>
        <div style="color: var(--text-muted);">→</div>
      </div>
    </div>

    <div class="card practice-card" data-target="scenarios" style="cursor: pointer;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <div style="font-size: 2rem;">💬</div>
        <div style="flex: 1;">
          <div style="font-weight: 600;">Real-World Scenarios</div>
          <div class="card-subtitle">Branching dialogues for cafes, hotels, doctors...</div>
        </div>
        <div style="color: var(--text-muted);">→</div>
      </div>
    </div>

    <div class="card practice-card" data-target="drills" style="cursor: pointer;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <div style="font-size: 2rem;">⚡</div>
        <div style="flex: 1;">
          <div style="font-weight: 600;">Grammar Drills</div>
          <div class="card-subtitle">Cases, aspect, agreement — fast practice</div>
        </div>
        <div style="color: var(--text-muted);">→</div>
      </div>
    </div>

    <div class="card practice-card" data-target="vocab" style="cursor: pointer;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <div style="font-size: 2rem;">📚</div>
        <div style="flex: 1;">
          <div style="font-weight: 600;">Vocabulary Builder</div>
          <div class="card-subtitle">Topic-based word lists for fluency</div>
        </div>
        <div style="color: var(--text-muted);">→</div>
      </div>
    </div>
  `;

  container.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      if (target === 'vocab') {
        router.navigate('practice', { mode: 'vocab', title: 'Vocabulary' });
      } else {
        const titles = {
          listening: 'Listening Practice',
          scenarios: 'Scenarios',
          drills: 'Drills'
        };
        router.navigate(target, { title: titles[target] });
      }
    });
  });

  return container;
}

function renderVocabHub() {
  const container = document.createElement('div');
  container.className = 'vocab-hub';

  const topics = getTopics();
  const totalWords = topics.reduce((sum, t) => sum + t.count, 0);

  let html = `
    <div class="card" style="background: var(--bg-tertiary); border-color: var(--accent);">
      <div class="card-title">📚 Topic Vocabulary</div>
      <div class="card-subtitle" style="margin-top: 8px;">
        ${totalWords} additional words organized by topic for conversational fluency.
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">
      Topics
    </h3>
  `;

  topics.forEach(t => {
    html += `
      <div class="card vocab-topic" data-id="${t.id}" style="cursor: pointer;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="font-size: 2rem;">${t.icon}</div>
          <div style="flex: 1;">
            <div style="font-weight: 600;">${t.title}</div>
            <div class="card-subtitle">${t.titlePl}</div>
          </div>
          <div style="color: var(--text-muted); font-size: 0.875rem;">${t.count} words</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.vocab-topic').forEach(item => {
    item.addEventListener('click', () => {
      router.navigate('practice', { 
        mode: 'vocab', 
        topicId: item.dataset.id, 
        title: 'Vocabulary' 
      });
    });
  });

  return container;
}

function renderVocabTopic(topicId) {
  const topic = getTopic(topicId);
  const container = document.createElement('div');
  container.className = 'vocab-topic-view';

  if (!topic) {
    container.innerHTML = '<div class="empty-state"><div class="empty-title">Topic not found</div></div>';
    return container;
  }

  // Card-based study mode: front (Polish) → back (English)
  const state = {
    mode: 'study', // 'study' or 'quiz'
    index: 0,
    revealed: false,
    quizCorrect: 0,
    quizTotal: 0,
    quizDone: false
  };

  function render() {
    if (state.mode === 'study') {
      renderStudy();
    } else {
      renderQuiz();
    }
  }

  function renderStudy() {
    const word = topic.words[state.index];
    
    container.innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${topic.icon} ${topic.title}</div>
            <div style="color: var(--text-secondary); font-size: 0.875rem;">${topic.titlePl}</div>
          </div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">
            ${state.index + 1} / ${topic.words.length}
          </div>
        </div>
      </div>

      <div class="card" style="text-align: center; padding: 32px 16px; cursor: pointer;" id="flip-card">
        <div style="font-size: 1.75rem; font-weight: 600; margin-bottom: 8px;">
          ${word.polish}
          <button class="speak-btn speak-btn-lg" id="speak-btn" title="Speak">🔊</button>
        </div>
        ${word.gender && word.gender !== 'phrase' ? `
          <div style="color: var(--accent); font-size: 0.875rem; margin-bottom: 16px;">${word.gender}</div>
        ` : '<div style="height: 12px;"></div>'}
        ${state.revealed ? `
          <div style="font-size: 1.25rem; color: var(--text-secondary); margin-top: 16px;">
            ${word.english}
          </div>
        ` : `
          <div style="color: var(--text-muted); font-size: 0.875rem; margin-top: 16px;">
            Tap to reveal translation
          </div>
        `}
      </div>

      <div style="display: flex; gap: 8px; margin-top: 16px;">
        <button class="btn btn-secondary" id="prev-btn" style="flex: 1;" ${state.index === 0 ? 'disabled' : ''}>
          ← Previous
        </button>
        <button class="btn btn-primary" id="next-btn" style="flex: 1;">
          ${state.index === topic.words.length - 1 ? 'Quiz Me!' : 'Next →'}
        </button>
      </div>

      <div style="margin-top: 12px; text-align: center;">
        <button class="btn-link" id="quiz-now-btn" style="background: none; border: none; color: var(--accent); cursor: pointer; padding: 8px;">
          Skip to Quiz
        </button>
      </div>
    `;

    container.querySelector('#flip-card').addEventListener('click', () => {
      state.revealed = !state.revealed;
      render();
    });

    container.querySelector('#speak-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      speak(word.polish);
    });

    container.querySelector('#prev-btn').addEventListener('click', () => {
      if (state.index > 0) {
        state.index--;
        state.revealed = false;
        render();
      }
    });

    container.querySelector('#next-btn').addEventListener('click', () => {
      if (state.index === topic.words.length - 1) {
        state.mode = 'quiz';
        state.index = 0;
        state.quizCorrect = 0;
        state.quizTotal = 0;
      } else {
        state.index++;
        state.revealed = false;
      }
      render();
    });

    container.querySelector('#quiz-now-btn').addEventListener('click', () => {
      state.mode = 'quiz';
      state.index = 0;
      state.quizCorrect = 0;
      state.quizTotal = 0;
      render();
    });

    if (!state.revealed) {
      setTimeout(() => speak(word.polish), 100);
    }
  }

  function renderQuiz() {
    if (state.quizDone) {
      const accuracy = state.quizTotal > 0 ? Math.round((state.quizCorrect / state.quizTotal) * 100) : 0;
      container.innerHTML = `
        <div class="card" style="border-color: var(--success); text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 12px;">${accuracy >= 80 ? '🎉' : '👍'}</div>
          <div class="card-title" style="font-size: 1.25rem;">Quiz Complete!</div>
          <div style="font-size: 2rem; font-weight: 700; color: ${accuracy >= 80 ? 'var(--success)' : 'var(--warning)'}; margin-top: 16px;">
            ${accuracy}%
          </div>
          <div style="color: var(--text-secondary); margin-top: 4px;">
            ${state.quizCorrect} / ${state.quizTotal} correct
          </div>
        </div>
        <button class="btn btn-primary btn-full" id="done-btn" style="margin-top: 16px;">Done</button>
        <button class="btn btn-secondary btn-full" id="study-btn" style="margin-top: 8px;">Study Again</button>
      `;
      
      container.querySelector('#done-btn').addEventListener('click', async () => {
        const xp = state.quizCorrect * 2;
        if (xp > 0) {
          await addXP(xp);
          await updateHeaderStats();
          showToast(`+${xp} XP`, 'success');
        }
        router.navigate('practice', { mode: 'vocab', title: 'Vocabulary' });
      });
      
      container.querySelector('#study-btn').addEventListener('click', () => {
        state.mode = 'study';
        state.index = 0;
        state.revealed = false;
        state.quizDone = false;
        render();
      });
      return;
    }

    const word = topic.words[state.index];
    
    // Generate 4 options: 1 correct + 3 random distractors from same topic
    const distractors = topic.words
      .filter(w => w.polish !== word.polish)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.english);
    
    const options = [word.english, ...distractors].sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 600;">${topic.icon} Quiz</div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">
            ${state.index + 1} / ${topic.words.length}
          </div>
        </div>
        <div class="progress-bar" style="margin-top: 8px;">
          <div class="progress-fill" style="width: ${(state.index / topic.words.length) * 100}%"></div>
        </div>
      </div>

      <div class="card" style="text-align: center; padding: 24px;">
        <div style="font-size: 1.5rem; font-weight: 600;">
          ${word.polish}
          <button class="speak-btn speak-btn-lg" id="speak-quiz-btn" title="Speak">🔊</button>
        </div>
      </div>

      <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
        ${options.map(opt => `
          <button class="btn btn-secondary quiz-option" data-answer="${opt}" style="text-align: left; justify-content: flex-start;">
            ${opt}
          </button>
        `).join('')}
      </div>
    `;

    container.querySelector('#speak-quiz-btn').addEventListener('click', () => speak(word.polish));

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.dataset.answer;
        const isCorrect = chosen === word.english;
        
        state.quizTotal++;
        if (isCorrect) state.quizCorrect++;
        
        incrementStats('totalReviews', 1);
        if (isCorrect) incrementStats('correctAnswers', 1);

        // Visual feedback
        container.querySelectorAll('.quiz-option').forEach(b => {
          b.disabled = true;
          if (b.dataset.answer === word.english) {
            b.style.background = 'var(--success)';
            b.style.color = 'white';
          } else if (b === btn && !isCorrect) {
            b.style.background = 'var(--error)';
            b.style.color = 'white';
          }
        });

        setTimeout(() => {
          if (state.index === topic.words.length - 1) {
            state.quizDone = true;
          } else {
            state.index++;
          }
          render();
        }, 1000);
      });
    });
  }

  render();
  return container;
}
