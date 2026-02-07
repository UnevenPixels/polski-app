import { router } from '../router.js';
import { lessons } from '../data/lessons.js';
import { addXP, updateStreak, updateLessonProgress, unlockAchievement, incrementStats } from '../core/progress.js';
import { set, STORES } from '../core/storage.js';
import { createVocabularyCard } from '../core/srs.js';
import { showToast, updateHeaderStats } from '../app.js';
import { speak, speakWithCallback, isMuted } from '../core/tts.js';

let currentExerciseIndex = 0;
let exercises = [];
let correctCount = 0;
let totalCount = 0;

export async function renderLesson(params) {
  const { lessonId, subLessonId } = params;
  const lesson = lessons[lessonId];

  if (!lesson || !lesson.subLessons[subLessonId]) {
    return '<div class="empty-state"><div class="empty-title">Lesson not found</div></div>';
  }

  const subLesson = lesson.subLessons[subLessonId];
  currentExerciseIndex = 0;
  correctCount = 0;
  exercises = generateExercises(subLesson, lessonId, subLessonId);
  totalCount = exercises.length;

  const container = document.createElement('div');
  container.className = 'exercise-container';

  await renderCurrentExercise(container, lessonId, subLessonId);

  return container;
}

function generateExercises(subLesson, lessonId, subLessonId) {
  const exerciseList = [];

  if (subLesson.dialogue) {
    exerciseList.push({
      type: 'dialogue',
      data: subLesson.dialogue
    });
  }

  if (subLesson.vocabulary) {
    subLesson.vocabulary.slice(0, 5).forEach(vocab => {
      exerciseList.push({
        type: 'vocab-intro',
        data: vocab
      });
    });

    subLesson.vocabulary.slice(0, 5).forEach(vocab => {
      exerciseList.push({
        type: 'translate-to-english',
        data: vocab,
        prompt: vocab.word,
        answer: vocab.meaning,
        options: generateOptions(vocab.meaning, subLesson.vocabulary.map(v => v.meaning))
      });
    });

    subLesson.vocabulary.slice(0, 3).forEach(vocab => {
      exerciseList.push({
        type: 'translate-to-polish',
        data: vocab,
        prompt: vocab.meaning,
        answer: vocab.word,
        options: generateOptions(vocab.word, subLesson.vocabulary.map(v => v.word))
      });
    });

    // Add typing exercises for reinforcement
    subLesson.vocabulary.slice(0, 3).forEach(vocab => {
      exerciseList.push({
        type: 'type-polish',
        data: vocab,
        prompt: vocab.meaning,
        answer: vocab.word
      });
    });
  }

  if (subLesson.grammar && subLesson.exercises) {
    subLesson.exercises.forEach(ex => {
      exerciseList.push(ex);
    });
  }

  if (exerciseList.length === 0) {
    exerciseList.push({
      type: 'complete',
      data: { message: 'This lesson is under construction!' }
    });
  }

  return exerciseList;
}

function generateOptions(correct, pool) {
  const options = [correct];
  const others = pool.filter(p => p !== correct);

  while (options.length < 4 && others.length > 0) {
    const idx = Math.floor(Math.random() * others.length);
    options.push(others.splice(idx, 1)[0]);
  }

  return shuffleArray(options);
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function renderCurrentExercise(container, lessonId, subLessonId) {
  if (currentExerciseIndex >= exercises.length) {
    await completeLesson(container, lessonId, subLessonId);
    return;
  }

  const exercise = exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex) / totalCount) * 100;

  container.innerHTML = `
    <div class="exercise-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 0.875rem; color: var(--text-secondary);">
        <span>${currentExerciseIndex + 1} / ${totalCount}</span>
        <span>${correctCount} correct</span>
      </div>
    </div>
    <div class="exercise-content" id="exercise-content"></div>
  `;

  const contentEl = container.querySelector('#exercise-content');

  switch (exercise.type) {
    case 'dialogue':
      renderDialogue(contentEl, exercise.data, container, lessonId, subLessonId);
      break;
    case 'vocab-intro':
      renderVocabIntro(contentEl, exercise.data, container, lessonId, subLessonId);
      break;
    case 'translate-to-english':
    case 'translate-to-polish':
      renderMultipleChoice(contentEl, exercise, container, lessonId, subLessonId);
      break;
    case 'fill-blank':
      renderFillBlank(contentEl, exercise, container, lessonId, subLessonId);
      break;
    case 'type-polish':
      renderTypePolish(contentEl, exercise, container, lessonId, subLessonId);
      break;
    case 'gender-match':
      renderGenderMatch(contentEl, exercise, container, lessonId, subLessonId);
      break;
    case 'complete':
      renderComplete(contentEl, exercise.data, container, lessonId, subLessonId);
      break;
    default:
      renderMultipleChoice(contentEl, exercise, container, lessonId, subLessonId);
  }
}

function renderDialogue(contentEl, dialogue, container, lessonId, subLessonId) {
  let html = `
    <div class="exercise-prompt">Study this dialogue</div>
    <div class="dialogue-controls">
      <button class="btn btn-secondary btn-sm" id="play-all-btn">🔊 Play All</button>
    </div>
    <div class="dialogue-container">
  `;

  dialogue.lines.forEach((line, idx) => {
    html += `
      <div class="dialogue-line">
        <div class="dialogue-speaker">${line.speaker}:</div>
        <div class="dialogue-content">
          <div class="dialogue-text">
            <span>${line.polish}</span>
            <button class="speak-btn" data-text="${line.polish.replace(/"/g, '&quot;')}" title="Listen">🔊</button>
          </div>
          <div class="dialogue-translation">${line.english}</div>
        </div>
      </div>
    `;
  });

  html += `
    </div>
    <div class="exercise-actions">
      <button class="btn btn-full btn-lg" id="continue-btn">Continue</button>
    </div>
  `;

  contentEl.innerHTML = html;

  // Individual speak buttons
  contentEl.querySelectorAll('.speak-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak(btn.dataset.text);
    });
  });

  // Play all dialogue
  contentEl.querySelector('#play-all-btn').addEventListener('click', () => {
    const lines = dialogue.lines.map(l => l.polish);
    let idx = 0;
    
    const playNext = () => {
      if (idx < lines.length) {
        speakWithCallback(lines[idx], () => {
          idx++;
          setTimeout(playNext, 300);
        }, 0.85);
      }
    };
    playNext();
  });

  contentEl.querySelector('#continue-btn').addEventListener('click', () => {
    currentExerciseIndex++;
    renderCurrentExercise(container, lessonId, subLessonId);
  });
}

function renderVocabIntro(contentEl, vocab, container, lessonId, subLessonId) {
  contentEl.innerHTML = `
    <div class="exercise-prompt">New Word</div>
    <div class="flashcard vocab-card" style="cursor: default;">
      <div class="flashcard-word">
        ${vocab.word}
        <button class="speak-btn speak-btn-lg" data-text="${vocab.word}" title="Listen">🔊</button>
      </div>
      ${vocab.gender ? `<div class="flashcard-info" style="margin-bottom: 12px;">${vocab.gender}</div>` : ''}
      <div class="flashcard-meaning">${vocab.meaning}</div>
      ${vocab.example ? `<div style="margin-top: 16px; font-size: 0.875rem; color: var(--text-secondary); font-style: italic;">"${vocab.example}"</div>` : ''}
    </div>
    <div class="exercise-actions">
      <button class="btn btn-full btn-lg" id="continue-btn">Got it!</button>
    </div>
  `;

  // Speak button
  contentEl.querySelector('.speak-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    speak(vocab.word);
  });

  contentEl.querySelector('#continue-btn').addEventListener('click', async () => {
    const card = createVocabularyCard(vocab.word, vocab.meaning, `${lessonId}.${subLessonId}`, {
      gender: vocab.gender,
      example: vocab.example
    });
    await set(STORES.vocabulary, card);

    currentExerciseIndex++;
    renderCurrentExercise(container, lessonId, subLessonId);
  });
}

function renderMultipleChoice(contentEl, exercise, container, lessonId, subLessonId) {
  const promptLabel = exercise.type === 'translate-to-english' 
    ? 'What does this mean?' 
    : 'How do you say this in Polish?';

  let html = `
    <div class="exercise-hint">${promptLabel}</div>
    <div class="exercise-prompt">${exercise.prompt}</div>
    <div class="exercise-options">
  `;

  exercise.options.forEach((option, idx) => {
    html += `<button class="option-btn" data-option="${idx}" data-value="${option}">${option}</button>`;
  });

  html += `
    </div>
    <div class="exercise-actions">
      <div class="exercise-feedback hidden" id="feedback"></div>
      <button class="btn btn-full btn-lg hidden" id="continue-btn">Continue</button>
    </div>
  `;

  contentEl.innerHTML = html;

  let answered = false;

  contentEl.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (answered) return;
      answered = true;

      const selected = btn.dataset.value;
      const isCorrect = selected === exercise.answer;

      btn.classList.add(isCorrect ? 'correct' : 'incorrect');

      if (!isCorrect) {
        contentEl.querySelector(`[data-value="${exercise.answer}"]`).classList.add('correct');
      }

      const feedback = contentEl.querySelector('#feedback');
      feedback.classList.remove('hidden');
      feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
      feedback.textContent = isCorrect ? 'Correct!' : `Correct answer: ${exercise.answer}`;

      if (isCorrect) {
        correctCount++;
        await addXP(10);
        updateHeaderStats();
      }

      await incrementStats('totalReviews');
      if (isCorrect) await incrementStats('correctAnswers');

      const continueBtn = contentEl.querySelector('#continue-btn');
      continueBtn.classList.remove('hidden');
      continueBtn.addEventListener('click', () => {
        currentExerciseIndex++;
        renderCurrentExercise(container, lessonId, subLessonId);
      });
    });
  });
}

function renderFillBlank(contentEl, exercise, container, lessonId, subLessonId) {
  contentEl.innerHTML = `
    <div class="exercise-hint">Fill in the blank</div>
    <div class="exercise-prompt">${exercise.prompt}</div>
    <input type="text" class="exercise-input" id="answer-input" placeholder="Type your answer..." autocomplete="off" autocapitalize="off">
    <div class="exercise-actions">
      <div class="exercise-feedback hidden" id="feedback"></div>
      <button class="btn btn-full btn-lg" id="check-btn">Check</button>
      <button class="btn btn-full btn-lg hidden" id="continue-btn">Continue</button>
    </div>
  `;

  const input = contentEl.querySelector('#answer-input');
  const checkBtn = contentEl.querySelector('#check-btn');
  const continueBtn = contentEl.querySelector('#continue-btn');
  const feedback = contentEl.querySelector('#feedback');

  const checkAnswer = async () => {
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = exercise.answer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;

    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    input.disabled = true;

    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = isCorrect ? 'Correct!' : `Correct answer: ${exercise.answer}`;

    if (isCorrect) {
      correctCount++;
      await addXP(10);
      updateHeaderStats();
    }

    await incrementStats('totalReviews');
    if (isCorrect) await incrementStats('correctAnswers');

    checkBtn.classList.add('hidden');
    continueBtn.classList.remove('hidden');
  };

  checkBtn.addEventListener('click', checkAnswer);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });

  continueBtn.addEventListener('click', () => {
    currentExerciseIndex++;
    renderCurrentExercise(container, lessonId, subLessonId);
  });

  input.focus();
}

function renderTypePolish(contentEl, exercise, container, lessonId, subLessonId) {
  const polishChars = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
  
  contentEl.innerHTML = `
    <div class="exercise-hint">Type the Polish word</div>
    <div class="exercise-prompt">${exercise.prompt}</div>
    <input type="text" class="exercise-input" id="answer-input" placeholder="Type in Polish..." autocomplete="off" autocapitalize="off" spellcheck="false">
    <div class="polish-keyboard" id="polish-keyboard">
      ${polishChars.map(char => `<button class="polish-char-btn" data-char="${char}">${char}</button>`).join('')}
    </div>
    <div class="exercise-actions">
      <div class="exercise-feedback hidden" id="feedback"></div>
      <button class="btn btn-full btn-lg" id="check-btn">Check</button>
      <button class="btn btn-full btn-lg hidden" id="continue-btn">Continue</button>
    </div>
  `;

  const input = contentEl.querySelector('#answer-input');
  const checkBtn = contentEl.querySelector('#check-btn');
  const continueBtn = contentEl.querySelector('#continue-btn');
  const feedback = contentEl.querySelector('#feedback');

  // Polish character buttons
  contentEl.querySelectorAll('.polish-char-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const char = btn.dataset.char;
      const start = input.selectionStart;
      const end = input.selectionEnd;
      input.value = input.value.substring(0, start) + char + input.value.substring(end);
      input.focus();
      input.selectionStart = input.selectionEnd = start + 1;
    });
  });

  const normalizePolish = (str) => {
    return str.trim().toLowerCase();
  };

  const checkAnswer = async () => {
    const userAnswer = normalizePolish(input.value);
    const correctAnswer = normalizePolish(exercise.answer);
    const isCorrect = userAnswer === correctAnswer;

    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    input.disabled = true;

    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = isCorrect ? 'Correct!' : `Correct answer: ${exercise.answer}`;

    if (isCorrect) {
      correctCount++;
      await addXP(15); // Typing gives more XP
      updateHeaderStats();
    }

    await incrementStats('totalReviews');
    if (isCorrect) await incrementStats('correctAnswers');

    checkBtn.classList.add('hidden');
    contentEl.querySelector('#polish-keyboard').classList.add('hidden');
    continueBtn.classList.remove('hidden');
  };

  checkBtn.addEventListener('click', checkAnswer);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });

  continueBtn.addEventListener('click', () => {
    currentExerciseIndex++;
    renderCurrentExercise(container, lessonId, subLessonId);
  });

  input.focus();
}

function renderGenderMatch(contentEl, exercise, container, lessonId, subLessonId) {
  contentEl.innerHTML = `
    <div class="exercise-hint">Select the correct form</div>
    <div class="exercise-prompt">${exercise.prompt}</div>
    <div class="exercise-options">
      ${exercise.options.map((opt, idx) => 
        `<button class="option-btn" data-option="${idx}" data-value="${opt}">${opt}</button>`
      ).join('')}
    </div>
    <div class="exercise-actions">
      <div class="exercise-feedback hidden" id="feedback"></div>
      <button class="btn btn-full btn-lg hidden" id="continue-btn">Continue</button>
    </div>
  `;

  let answered = false;

  contentEl.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (answered) return;
      answered = true;

      const selected = btn.dataset.value;
      const isCorrect = selected === exercise.answer;

      btn.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) {
        contentEl.querySelector(`[data-value="${exercise.answer}"]`).classList.add('correct');
      }

      const feedback = contentEl.querySelector('#feedback');
      feedback.classList.remove('hidden');
      feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
      feedback.textContent = isCorrect ? 'Correct!' : `Correct answer: ${exercise.answer}`;

      if (isCorrect) {
        correctCount++;
        await addXP(10);
        updateHeaderStats();
      }

      await incrementStats('totalReviews');
      if (isCorrect) await incrementStats('correctAnswers');

      const continueBtn = contentEl.querySelector('#continue-btn');
      continueBtn.classList.remove('hidden');
      continueBtn.addEventListener('click', () => {
        currentExerciseIndex++;
        renderCurrentExercise(container, lessonId, subLessonId);
      });
    });
  });
}

function renderComplete(contentEl, data, container, lessonId, subLessonId) {
  contentEl.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">🚧</div>
      <div class="empty-title">${data.message}</div>
    </div>
    <div class="exercise-actions">
      <button class="btn btn-full btn-lg" id="continue-btn">Continue</button>
    </div>
  `;

  contentEl.querySelector('#continue-btn').addEventListener('click', () => {
    currentExerciseIndex++;
    renderCurrentExercise(container, lessonId, subLessonId);
  });
}

async function completeLesson(container, lessonId, subLessonId) {
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const xpEarned = 50 + correctCount * 5;

  await addXP(xpEarned);
  await updateStreak();
  await updateLessonProgress(lessonId, subLessonId, {
    completed: true,
    accuracy,
    completedAt: new Date().toISOString()
  });

  const achievement = await unlockAchievement('first_lesson');

  updateHeaderStats();

  let stars = 1;
  if (accuracy >= 95) stars = 3;
  else if (accuracy >= 85) stars = 2;

  container.innerHTML = `
    <div class="exercise-content" style="text-align: center; padding-top: 48px;">
      <div style="font-size: 4rem; margin-bottom: 16px;">🎉</div>
      <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 8px;">Lesson Complete!</div>
      <div style="color: var(--text-secondary); margin-bottom: 24px;">
        Lesson ${lessonId}.${subLessonId}
      </div>
      
      <div class="stats-grid" style="margin-bottom: 24px;">
        <div class="stat-item">
          <div class="stat-value">${accuracy}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-item">
          <div class="stat-value" style="color: var(--warning);">${'★'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
          <div class="stat-label">Stars</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">+${xpEarned}</div>
          <div class="stat-label">XP</div>
        </div>
      </div>

      ${achievement ? `
        <div class="achievement" style="margin-bottom: 24px;">
          <div class="achievement-icon">${achievement.icon}</div>
          <div class="achievement-info">
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
          </div>
        </div>
      ` : ''}

      <div class="exercise-actions">
        <button class="btn btn-full btn-lg" id="continue-btn">Continue</button>
      </div>
    </div>
  `;

  container.querySelector('#continue-btn').addEventListener('click', () => {
    const nextSubLesson = getNextSubLesson(subLessonId);
    if (nextSubLesson) {
      router.navigate('lesson', {
        lessonId,
        subLessonId: nextSubLesson,
        title: `Lesson ${lessonId}.${nextSubLesson}`
      });
    } else {
      const nextLessonId = (parseInt(lessonId) + 1).toString();
      if (lessons[nextLessonId]) {
        router.navigate('lessonDetail', { lessonId: nextLessonId, title: `Lesson ${nextLessonId}` });
      } else {
        router.navigate('home');
      }
    }
  });
}

function getNextSubLesson(current) {
  const order = ['A', 'B', 'C', 'D', 'E'];
  const idx = order.indexOf(current);
  return idx < order.length - 1 ? order[idx + 1] : null;
}
