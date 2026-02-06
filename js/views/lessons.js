import { getProgress, getLessonProgress } from '../core/progress.js';
import { router } from '../router.js';
import { lessons } from '../data/lessons.js';

export async function renderLessons() {
  const progress = await getProgress();

  const container = document.createElement('div');
  container.className = 'lessons-view';

  const lessonKeys = Object.keys(lessons).sort((a, b) => parseInt(a) - parseInt(b));

  let html = '<div class="lesson-list">';

  for (const lessonId of lessonKeys) {
    const lesson = lessons[lessonId];
    const lessonProgress = progress.lessons[lessonId] || { completed: false, stars: 0, subLessons: {} };

    const completedCount = Object.values(lessonProgress.subLessons).filter(s => s.completed).length;
    const stars = '★'.repeat(lessonProgress.stars) + '☆'.repeat(3 - lessonProgress.stars);

    html += `
      <div class="lesson-item ${lessonProgress.completed ? 'completed' : ''}" 
           data-lesson="${lessonId}">
        <div class="lesson-number">${lessonProgress.completed ? '✓' : lessonId}</div>
        <div class="lesson-info">
          <div class="lesson-title">${lesson.title}</div>
          <div class="lesson-desc">${lesson.description}</div>
        </div>
        <div style="text-align: right;">
          ${lessonProgress.completed 
            ? `<div class="lesson-stars">${stars}</div>` 
            : `<div style="font-size: 0.75rem; color: var(--text-secondary)">${completedCount}/5</div>`
          }
        </div>
      </div>
    `;
  }

  html += '</div>';
  container.innerHTML = html;

  container.querySelectorAll('.lesson-item').forEach(item => {
    item.addEventListener('click', () => {
      const lessonId = item.dataset.lesson;
      router.navigate('lessonDetail', { lessonId, title: `Lesson ${lessonId}` });
    });
  });

  return container;
}

export async function renderLessonDetail(params) {
  const { lessonId } = params;
  const lesson = lessons[lessonId];
  const progress = await getProgress();
  const lessonProgress = progress.lessons[lessonId] || { subLessons: {} };

  if (!lesson) {
    return '<div class="empty-state"><div class="empty-title">Lesson not found</div></div>';
  }

  const container = document.createElement('div');
  container.className = 'lesson-detail-view';

  const subLessons = ['A', 'B', 'C', 'D', 'E'];

  let html = `
    <div class="card" style="margin-bottom: 16px;">
      <div class="card-title">${lesson.title}</div>
      <div class="card-subtitle">${lesson.description}</div>
    </div>

    <h3 style="margin-bottom: 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Sub-lessons
    </h3>

    <div class="sublesson-list">
  `;

  for (let i = 0; i < subLessons.length; i++) {
    const sub = subLessons[i];
    const subProgress = lessonProgress.subLessons[sub] || {};
    const subLesson = lesson.subLessons[sub];

    const prevCompleted = i === 0 || lessonProgress.subLessons[subLessons[i - 1]]?.completed;
    const isCurrent = prevCompleted && !subProgress.completed;

    html += `
      <div class="sublesson-item ${subProgress.completed ? 'completed' : ''} ${isCurrent ? 'current' : ''}"
           data-sublesson="${sub}">
        <div class="sublesson-letter">${subProgress.completed ? '✓' : sub}</div>
        <div class="sublesson-title">${subLesson?.title || `Part ${sub}`}</div>
        ${subProgress.accuracy ? `<div style="color: var(--text-secondary); font-size: 0.875rem;">${subProgress.accuracy}%</div>` : ''}
      </div>
    `;
  }

  html += '</div>';

  if (lesson.grammar && lesson.grammar.length > 0) {
    html += `
      <h3 style="margin: 24px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
        Grammar Topics
      </h3>
      <div class="card">
        <ul style="margin: 0; padding-left: 20px; color: var(--text-secondary);">
          ${lesson.grammar.map(g => `<li style="margin-bottom: 4px;">${g}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  container.innerHTML = html;

  container.querySelectorAll('.sublesson-item').forEach(item => {
    item.addEventListener('click', () => {
      const subLessonId = item.dataset.sublesson;
      router.navigate('lesson', {
        lessonId,
        subLessonId,
        title: `Lesson ${lessonId}.${subLessonId}`
      });
    });
  });

  return container;
}
