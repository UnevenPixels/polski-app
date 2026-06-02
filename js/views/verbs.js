import { router } from '../router.js';
import { getVerbs, getVerb, getConjugationCardSeeds, TENSES } from '../data/verbs.js';
import { speak } from '../core/tts.js';
import { addXP, incrementStats } from '../core/progress.js';
import { showToast, updateHeaderStats } from '../app.js';
import { get, set, STORES } from '../core/storage.js';
import { createVocabularyCard } from '../core/srs.js';

export async function renderVerbs(params = {}) {
  if (params.verbId) {
    return renderVerbDetail(params.verbId);
  }
  return renderVerbList();
}

function groupLabel(verb) {
  return verb.irregular || verb.group === 'irregular' ? 'irregular' : `group ${verb.group}`;
}

function renderVerbList() {
  const container = document.createElement('div');
  container.className = 'verbs-view';

  const verbs = getVerbs();

  let html = `
    <div class="card" style="background: var(--bg-tertiary); border-color: var(--accent);">
      <div class="card-title">🔤 Verbs & Conjugation</div>
      <div class="card-subtitle" style="margin-top: 8px;">
        ${verbs.length} essential verbs with present, past, future and imperative forms. Tap one to study its conjugations, then quiz yourself.
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">
      Verbs
    </h3>
  `;

  verbs.forEach(verb => {
    html += `
      <div class="card verb-item" data-id="${verb.id}" style="cursor: pointer;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="flex: 1;">
            <div style="font-weight: 600;">${verb.infinitive}
              <span style="color: var(--text-muted); font-weight: 400; font-size: 0.875rem;">— ${verb.meaning}</span>
            </div>
            <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 4px;">
              ${verb.aspect} · ${groupLabel(verb)}${verb.aspectPartner ? ` · pf. ${verb.aspectPartner}` : ''}
            </div>
          </div>
          <div style="color: var(--text-muted);">→</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.verb-item').forEach(item => {
    item.addEventListener('click', () => {
      router.navigate('verbs', { verbId: item.dataset.id, title: 'Verb' });
    });
  });

  return container;
}

function renderVerbDetail(verbId) {
  const verb = getVerb(verbId);
  const container = document.createElement('div');
  container.className = 'verb-detail-view';

  if (!verb) {
    container.innerHTML = '<div class="empty-state"><div class="empty-title">Verb not found</div></div>';
    return container;
  }

  const state = { mode: 'study', quiz: null };

  function render() {
    if (state.mode === 'quiz') {
      renderQuiz();
    } else {
      renderStudy();
    }
  }

  function tenseTablesHtml() {
    return TENSES.map(t => {
      const forms = verb[t.id];
      if (!forms) return '';
      const rows = t.persons.map(person => {
        const form = forms[person];
        if (!form) return '';
        return `
          <tr>
            <td>${person}</td>
            <td>
              <span style="font-weight: 500;">${form}</span>
              <button class="speak-btn" data-text="${form.replace(/"/g, '&quot;')}" title="Listen" style="margin-left: 6px;">🔊</button>
            </td>
          </tr>
        `;
      }).join('');
      return `
        <div style="margin: 16px 0 8px;"><strong>${t.label}</strong>
          <span style="color: var(--text-muted); font-weight: 400;">(${t.polish})</span>
        </div>
        <table class="grammar-table">${rows}</table>
      `;
    }).join('');
  }

  function renderStudy() {
    container.innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-size: 1.5rem; font-weight: 700;">
              ${verb.infinitive}
              <button class="speak-btn speak-btn-lg" id="speak-inf" title="Listen">🔊</button>
            </div>
            <div style="color: var(--text-secondary); margin-top: 4px;">${verb.meaning}</div>
            <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 6px;">
              ${verb.aspect} · ${groupLabel(verb)}${verb.aspectPartner ? ` · pf. ${verb.aspectPartner}` : ''}
            </div>
          </div>
        </div>
        ${verb.example ? `
          <div style="margin-top: 12px; font-style: italic; color: var(--text-secondary);">
            "${verb.example.polish}" — ${verb.example.english}
          </div>
        ` : ''}
      </div>

      <div class="card">
        ${tenseTablesHtml()}
      </div>

      <button class="btn btn-secondary btn-full" id="add-review-btn" style="margin-top: 16px;">
        ➕ Add to Review
      </button>
      <button class="btn btn-primary btn-full" id="quiz-btn" style="margin-top: 8px;">
        Quiz Me
      </button>
      <button class="btn-link" id="back-list-btn" style="display: block; margin: 12px auto 0; background: none; border: none; color: var(--accent); cursor: pointer; padding: 8px;">
        ← All verbs
      </button>
    `;

    container.querySelector('#speak-inf').addEventListener('click', () => speak(verb.infinitive));

    container.querySelectorAll('.speak-btn').forEach(btn => {
      if (btn.id === 'speak-inf') return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speak(btn.dataset.text);
      });
    });

    container.querySelector('#add-review-btn').addEventListener('click', async (e) => {
      e.target.disabled = true;
      const added = await seedReviewCards(verb);
      if (added > 0) {
        showToast(`Added ${added} conjugation${added === 1 ? '' : 's'} to review`, 'success');
      } else {
        showToast('Already in your review deck', 'info');
      }
    });

    container.querySelector('#quiz-btn').addEventListener('click', () => {
      state.mode = 'quiz';
      state.quiz = buildQuiz(verb);
      render();
    });

    container.querySelector('#back-list-btn').addEventListener('click', () => {
      router.navigate('verbs', { title: 'Verbs' });
    });
  }

  function renderQuiz() {
    const quiz = state.quiz;

    if (quiz.done) {
      const accuracy = quiz.total > 0 ? Math.round((quiz.correct / quiz.total) * 100) : 0;
      container.innerHTML = `
        <div class="card" style="border-color: var(--success); text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 12px;">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
          <div class="card-title" style="font-size: 1.25rem;">Quiz Complete!</div>
          <div style="font-size: 2rem; font-weight: 700; color: ${accuracy >= 80 ? 'var(--success)' : accuracy >= 60 ? 'var(--warning)' : 'var(--error)'}; margin-top: 16px;">
            ${accuracy}%
          </div>
          <div style="color: var(--text-secondary); margin-top: 4px;">
            ${quiz.correct} / ${quiz.total} correct
          </div>
        </div>
        <button class="btn btn-primary btn-full" id="study-again-btn" style="margin-top: 16px;">Back to ${verb.infinitive}</button>
        <button class="btn btn-secondary btn-full" id="retry-quiz-btn" style="margin-top: 8px;">Quiz Again</button>
      `;

      container.querySelector('#study-again-btn').addEventListener('click', () => {
        state.mode = 'study';
        render();
      });
      container.querySelector('#retry-quiz-btn').addEventListener('click', () => {
        state.quiz = buildQuiz(verb);
        render();
      });
      return;
    }

    const q = quiz.questions[quiz.index];

    container.innerHTML = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="font-weight: 600;">🔤 ${verb.infinitive} — Quiz</div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">
            ${quiz.index + 1} / ${quiz.questions.length}
          </div>
        </div>
        <div class="progress-bar" style="margin-top: 8px;">
          <div class="progress-fill" style="width: ${(quiz.index / quiz.questions.length) * 100}%"></div>
        </div>
      </div>

      <div class="card" style="text-align: center; padding: 24px;">
        <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 8px;">
          ${q.tenseLabel}
        </div>
        <div style="font-size: 1.25rem; font-weight: 600;">
          ${verb.infinitive} → <span style="color: var(--accent);">${q.person}</span>
        </div>
      </div>

      <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
        ${q.options.map(opt => `
          <button class="btn btn-secondary quiz-option" data-answer="${opt.replace(/"/g, '&quot;')}" style="text-align: left; justify-content: flex-start;">
            ${opt}
          </button>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.dataset.answer;
        const isCorrect = chosen === q.form;

        quiz.total++;
        if (isCorrect) quiz.correct++;

        incrementStats('totalReviews', 1);
        if (isCorrect) incrementStats('correctAnswers', 1);

        container.querySelectorAll('.quiz-option').forEach(b => {
          b.disabled = true;
          if (b.dataset.answer === q.form) {
            b.style.background = 'var(--success)';
            b.style.color = 'white';
          } else if (b === btn && !isCorrect) {
            b.style.background = 'var(--error)';
            b.style.color = 'white';
          }
        });

        speak(q.form);

        setTimeout(async () => {
          if (quiz.index === quiz.questions.length - 1) {
            quiz.done = true;
            const xp = quiz.correct * 2;
            if (xp > 0) {
              await addXP(xp);
              await updateHeaderStats();
            }
          } else {
            quiz.index++;
          }
          render();
        }, 1000);
      });
    });
  }

  render();
  return container;
}

// Build a multiple-choice quiz from a verb's conjugation forms.
function buildQuiz(verb) {
  const pool = [];
  TENSES.forEach(t => {
    const forms = verb[t.id];
    if (!forms) return;
    t.persons.forEach(person => {
      if (forms[person]) {
        pool.push({ person, tenseLabel: t.label, form: forms[person] });
      }
    });
  });

  const allForms = [...new Set(pool.map(p => p.form))];
  const shuffled = shuffle(pool);
  const questions = shuffled.slice(0, Math.min(8, shuffled.length)).map(item => {
    const distractors = shuffle(allForms.filter(f => f !== item.form)).slice(0, 3);
    const options = shuffle([item.form, ...distractors]);
    return { ...item, options };
  });

  return { questions, index: 0, correct: 0, total: 0, done: false };
}

// Seed SRS conjugation cards for a verb. Skips forms already in the deck so
// existing review progress is preserved. Returns the number of new cards added.
async function seedReviewCards(verb) {
  const seeds = getConjugationCardSeeds(verb);
  let added = 0;
  for (const seed of seeds) {
    const existing = await get(STORES.vocabulary, seed.key);
    if (existing) continue;
    const card = createVocabularyCard(seed.key, seed.form, null, {
      type: 'conjugation',
      infinitive: seed.infinitive,
      verbMeaning: seed.meaning,
      tense: seed.tense,
      person: seed.person,
      form: seed.form
    });
    await set(STORES.vocabulary, card);
    added++;
  }
  return added;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
