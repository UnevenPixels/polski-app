import { getProgress, getLevelProgress } from '../core/progress.js';
import { getDueVocabulary, STORES } from '../core/storage.js';
import { router } from '../router.js';
import { lessons } from '../data/lessons.js';

export async function renderHome() {
  const progress = await getProgress();
  const dueCards = await getDueVocabulary(100);
  const dueCount = dueCards.length;

  const currentLesson = findCurrentLesson(progress);
  const levelProgress = getLevelProgress(progress.xp, progress.level);

  const container = document.createElement('div');
  container.className = 'home-view';

  container.innerHTML = `
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-value">${progress.level}</div>
        <div class="stat-label">Level</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${progress.streak}</div>
        <div class="stat-label">Day Streak</div>
      </div>
      <div class="stat-item">
        <div class="stat-value">${progress.stats.wordsLearned}</div>
        <div class="stat-label">Words</div>
      </div>
    </div>

    <div class="card">
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span>Level ${progress.level}</span>
        <span style="color: var(--text-secondary)">${progress.xp} XP</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${levelProgress * 100}%"></div>
      </div>
    </div>

    ${currentLesson ? `
      <div class="card" id="continue-card" style="cursor: pointer;">
        <div class="card-title">Continue Learning</div>
        <div style="display: flex; align-items: center; gap: 12px; margin-top: 12px;">
          <div class="lesson-number">${currentLesson.lessonNum}</div>
          <div>
            <div style="font-weight: 600;">${currentLesson.title}</div>
            <div class="card-subtitle">Unit ${currentLesson.lessonNum}.${currentLesson.subLesson}</div>
          </div>
        </div>
      </div>
    ` : `
      <div class="card" id="start-card" style="cursor: pointer;">
        <div class="card-title">Start Learning</div>
        <div class="card-subtitle">Begin your Polish journey with Lesson 1</div>
      </div>
    `}

    ${dueCount > 0 ? `
      <div class="card" id="review-card" style="cursor: pointer; border-color: var(--warning);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div class="card-title">Reviews Due</div>
            <div class="card-subtitle">${dueCount} cards ready for review</div>
          </div>
          <div style="font-size: 2rem;">🔄</div>
        </div>
      </div>
    ` : ''}

    <div class="card" id="sounds-card" style="cursor: pointer;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">Polish Sounds</div>
          <div class="card-subtitle">Master pronunciation basics</div>
        </div>
        <div style="font-size: 1.5rem;">🔊</div>
      </div>
    </div>

    <h3 style="margin: 24px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">Quick Stats</h3>
    <div class="card">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Total Reviews</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.stats.totalReviews}</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Accuracy</div>
          <div style="font-size: 1.25rem; font-weight: 600;">
            ${progress.stats.totalReviews > 0 
              ? Math.round((progress.stats.correctAnswers / progress.stats.totalReviews) * 100) 
              : 0}%
          </div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Lessons Done</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.stats.lessonsCompleted}</div>
        </div>
        <div>
          <div style="color: var(--text-secondary); font-size: 0.875rem;">Achievements</div>
          <div style="font-size: 1.25rem; font-weight: 600;">${progress.achievements.length}</div>
        </div>
      </div>
    </div>
  `;

  const continueCard = container.querySelector('#continue-card');
  if (continueCard) {
    continueCard.addEventListener('click', () => {
      router.navigate('lesson', {
        lessonId: currentLesson.lessonNum,
        subLessonId: currentLesson.subLesson,
        title: `Lesson ${currentLesson.lessonNum}.${currentLesson.subLesson}`
      });
    });
  }

  const startCard = container.querySelector('#start-card');
  if (startCard) {
    startCard.addEventListener('click', () => {
      router.navigate('lesson', { lessonId: '1', subLessonId: 'A', title: 'Lesson 1.A' });
    });
  }

  const reviewCard = container.querySelector('#review-card');
  if (reviewCard) {
    reviewCard.addEventListener('click', () => {
      router.navigate('review', { title: 'Review' });
    });
  }

  const soundsCard = container.querySelector('#sounds-card');
  if (soundsCard) {
    soundsCard.addEventListener('click', () => {
      router.navigate('sounds', { title: 'Polish Sounds' });
    });
  }

  return container;
}

function findCurrentLesson(progress) {
  const subLessons = ['A', 'B', 'C', 'D', 'E'];

  for (let i = 1; i <= 12; i++) {
    const lessonProgress = progress.lessons[i.toString()];

    if (!lessonProgress) {
      const lesson = lessons[i.toString()];
      return {
        lessonNum: i.toString(),
        subLesson: 'A',
        title: lesson?.title || `Lesson ${i}`
      };
    }

    for (const sub of subLessons) {
      if (!lessonProgress.subLessons[sub]?.completed) {
        const lesson = lessons[i.toString()];
        return {
          lessonNum: i.toString(),
          subLesson: sub,
          title: lesson?.title || `Lesson ${i}`
        };
      }
    }
  }

  return null;
}
