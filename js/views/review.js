import { getDueVocabulary, set, STORES } from '../core/storage.js';
import { calculateNextReview, mapQualityToSM2, getIntervalText } from '../core/srs.js';
import { addXP, updateStreak, incrementStats } from '../core/progress.js';
import { router } from '../router.js';
import { updateHeaderStats } from '../app.js';

let cards = [];
let currentIndex = 0;
let reviewedCount = 0;

export async function renderReview() {
  cards = await getDueVocabulary(20);
  currentIndex = 0;
  reviewedCount = 0;

  const container = document.createElement('div');
  container.className = 'review-view';

  if (cards.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">✨</div>
        <div class="empty-title">All caught up!</div>
        <div style="color: var(--text-secondary);">No cards due for review right now.</div>
        <button class="btn" style="margin-top: 24px;" id="back-btn">Back to Home</button>
      </div>
    `;

    container.querySelector('#back-btn').addEventListener('click', () => {
      router.navigate('home');
    });

    return container;
  }

  renderCard(container);
  return container;
}

function renderCard(container) {
  if (currentIndex >= cards.length) {
    renderComplete(container);
    return;
  }

  const card = cards[currentIndex];
  const remaining = cards.length - currentIndex;

  container.innerHTML = `
    <div class="exercise-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${(currentIndex / cards.length) * 100}%"></div>
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 0.875rem; color: var(--text-secondary);">
        <span>${remaining} remaining</span>
        <span>${reviewedCount} reviewed</span>
      </div>
    </div>

    <div class="flashcard" id="flashcard">
      <div id="card-front">
        <div class="flashcard-word">${card.word}</div>
        ${card.gender ? `<div class="flashcard-info">${card.gender}</div>` : ''}
        <div style="margin-top: 24px; font-size: 0.875rem; color: var(--text-muted);">Tap to reveal</div>
      </div>
      <div id="card-back" class="hidden">
        <div class="flashcard-word">${card.word}</div>
        <div class="flashcard-meaning" style="margin-top: 12px;">${card.meaning}</div>
        ${card.example ? `<div style="margin-top: 16px; font-size: 0.875rem; color: var(--text-secondary); font-style: italic;">"${card.example}"</div>` : ''}
      </div>
    </div>

    <div id="rating-area" class="hidden">
      <div style="text-align: center; margin-bottom: 12px; color: var(--text-secondary); font-size: 0.875rem;">
        How well did you remember?
      </div>
      <div class="rating-buttons">
        <button class="btn rating-btn" data-rating="1">Again</button>
        <button class="btn rating-btn" data-rating="2">Hard</button>
        <button class="btn rating-btn" data-rating="3">Good</button>
        <button class="btn rating-btn" data-rating="4">Easy</button>
      </div>
    </div>
  `;

  const flashcard = container.querySelector('#flashcard');
  const cardFront = container.querySelector('#card-front');
  const cardBack = container.querySelector('#card-back');
  const ratingArea = container.querySelector('#rating-area');

  flashcard.addEventListener('click', () => {
    cardFront.classList.add('hidden');
    cardBack.classList.remove('hidden');
    ratingArea.classList.remove('hidden');
  });

  container.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const quality = parseInt(btn.dataset.rating);
      const sm2Quality = mapQualityToSM2(quality);

      const updatedCard = calculateNextReview(card, sm2Quality);
      await set(STORES.vocabulary, updatedCard);

      await incrementStats('totalReviews');
      if (quality >= 3) {
        await incrementStats('correctAnswers');
        await addXP(5);
      }

      reviewedCount++;
      currentIndex++;
      updateHeaderStats();
      renderCard(container);
    });
  });
}

async function renderComplete(container) {
  await updateStreak();
  const xpEarned = reviewedCount * 5;

  container.innerHTML = `
    <div style="text-align: center; padding-top: 48px;">
      <div style="font-size: 4rem; margin-bottom: 16px;">🎯</div>
      <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 8px;">Review Complete!</div>
      <div style="color: var(--text-secondary); margin-bottom: 24px;">
        You reviewed ${reviewedCount} cards
      </div>
      
      <div class="card" style="text-align: left; margin-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span>Cards Reviewed</span>
          <span style="font-weight: 600;">${reviewedCount}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>XP Earned</span>
          <span style="font-weight: 600; color: var(--accent);">+${xpEarned}</span>
        </div>
      </div>

      <button class="btn btn-full btn-lg" id="done-btn">Done</button>
    </div>
  `;

  container.querySelector('#done-btn').addEventListener('click', () => {
    router.navigate('home');
  });
}
