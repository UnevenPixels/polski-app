import { scenarios, getScenarioList } from '../data/scenarios.js';
import { speak, stopSpeaking, isMuted } from '../core/tts.js';
import { addXP, updateStreak, incrementStats } from '../core/progress.js';
import { router } from '../router.js';
import { showToast, updateHeaderStats } from '../app.js';

export async function renderScenarios(params = {}) {
  if (params.scenarioId) {
    return renderScenarioPlay(params.scenarioId);
  }
  return renderScenariosList();
}

function renderScenariosList() {
  const container = document.createElement('div');
  container.className = 'scenarios-view';

  const list = getScenarioList();

  let html = `
    <div class="card" style="background: var(--bg-tertiary); border-color: var(--accent);">
      <div class="card-title">💬 Real-World Scenarios</div>
      <div class="card-subtitle" style="margin-top: 8px;">
        Practice conversations you'll actually have. Each scenario branches based on your choices.
      </div>
    </div>
    
    <h3 style="margin: 20px 0 12px; color: var(--text-secondary); font-size: 0.875rem; text-transform: uppercase;">
      Available Scenarios
    </h3>
  `;

  list.forEach(s => {
    const stars = '★'.repeat(s.difficulty) + '☆'.repeat(3 - s.difficulty);
    html += `
      <div class="card scenario-item" data-id="${s.id}" style="cursor: pointer;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="font-size: 2rem;">${s.icon}</div>
          <div style="flex: 1;">
            <div style="font-weight: 600;">${s.title}</div>
            <div class="card-subtitle">${s.description}</div>
            <div style="color: var(--warning); font-size: 0.75rem; margin-top: 4px;">${stars}</div>
          </div>
          <div style="color: var(--text-muted);">→</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.scenario-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const s = scenarios[id];
      router.navigate('scenarios', {
        scenarioId: id,
        title: s.title
      });
    });
  });

  return container;
}

function renderScenarioPlay(scenarioId) {
  const scenario = scenarios[scenarioId];
  const container = document.createElement('div');
  container.className = 'scenario-play';

  if (!scenario) {
    container.innerHTML = '<div class="empty-state"><div class="empty-title">Scenario not found</div></div>';
    return container;
  }

  const state = {
    currentNodeId: scenario.startNode,
    history: [],
    completed: false
  };

  function render() {
    const node = scenario.nodes[state.currentNodeId];
    
    let html = `
      <div class="card" style="margin-bottom: 16px;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="font-size: 2rem;">${scenario.icon}</div>
          <div>
            <div style="font-weight: 600;">${scenario.title}</div>
            <div class="card-subtitle">${scenario.description}</div>
          </div>
        </div>
      </div>
    `;

    // Show conversation history
    state.history.forEach(turn => {
      if (turn.type === 'npc') {
        html += `
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <div style="width: 32px; height: 32px; background: var(--bg-tertiary); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${scenario.icon}</div>
            <div class="card" style="flex: 1; background: var(--bg-secondary); margin-bottom: 0;">
              <div style="color: var(--accent); font-size: 0.75rem; margin-bottom: 4px;">${turn.npc}</div>
              <div style="font-weight: 500;">
                ${turn.polish}
                <button class="speak-btn" data-text="${turn.polish.replace(/"/g, '&quot;')}" title="Speak">🔊</button>
              </div>
              <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 4px;">${turn.english}</div>
            </div>
          </div>
        `;
      } else {
        html += `
          <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-direction: row-reverse;">
            <div style="width: 32px; height: 32px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">🧑</div>
            <div class="card" style="flex: 1; background: var(--bg-tertiary); margin-bottom: 0; border-color: var(--accent);">
              <div style="font-weight: 500;">${turn.polish}</div>
              <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 4px;">${turn.english}</div>
            </div>
          </div>
        `;
      }
    });

    if (state.completed) {
      html += `
        <div class="card" style="border-color: var(--success); margin-top: 16px;">
          <div class="card-title" style="color: var(--success);">✓ Scenario Complete!</div>
          <div style="margin-top: 8px;">Great practice! You earned XP for completing this scenario.</div>
          <button class="btn btn-primary btn-full" id="finish-btn" style="margin-top: 16px;">
            Done
          </button>
          <button class="btn btn-secondary btn-full" id="retry-btn" style="margin-top: 8px;">
            Try Again
          </button>
        </div>
      `;
    } else if (node) {
      // Add NPC line to render (auto)
      const npcAlreadyShown = state.history.some(h => 
        h.type === 'npc' && h.nodeId === state.currentNodeId
      );
      
      if (!npcAlreadyShown) {
        html += `
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <div style="width: 32px; height: 32px; background: var(--bg-tertiary); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${scenario.icon}</div>
            <div class="card animate-in" style="flex: 1; background: var(--bg-secondary); margin-bottom: 0;">
              <div style="color: var(--accent); font-size: 0.75rem; margin-bottom: 4px;">${node.npc}</div>
              <div style="font-weight: 500;">
                ${node.polish}
                <button class="speak-btn" data-text="${node.polish.replace(/"/g, '&quot;')}" title="Speak">🔊</button>
              </div>
              <div style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 4px;">${node.english}</div>
            </div>
          </div>
        `;
      }

      html += `
        <div style="margin-top: 16px;">
          <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 8px;">Your response:</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${node.options.map((opt, i) => `
              <button class="btn btn-secondary scenario-option" data-idx="${i}" style="text-align: left; justify-content: flex-start; flex-direction: column; align-items: flex-start; padding: 12px;">
                <div style="font-weight: 500;">${opt.polish}</div>
                <div style="color: var(--text-muted); font-size: 0.875rem; margin-top: 2px;">${opt.english}</div>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
    attachHandlers();
    
    // Auto-speak the new NPC line
    const node2 = scenario.nodes[state.currentNodeId];
    if (node2 && !state.completed && !isMuted()) {
      const npcAlreadyShown = state.history.some(h => 
        h.type === 'npc' && h.nodeId === state.currentNodeId
      );
      if (!npcAlreadyShown) {
        setTimeout(() => speak(node2.polish), 200);
        state.history.push({ 
          type: 'npc', 
          npc: node2.npc, 
          polish: node2.polish, 
          english: node2.english,
          nodeId: state.currentNodeId
        });
      }
    } else if (node2 && !state.completed) {
      // Still record history even if muted
      const npcAlreadyShown = state.history.some(h => 
        h.type === 'npc' && h.nodeId === state.currentNodeId
      );
      if (!npcAlreadyShown) {
        state.history.push({ 
          type: 'npc', 
          npc: node2.npc, 
          polish: node2.polish, 
          english: node2.english,
          nodeId: state.currentNodeId
        });
      }
    }

    // Scroll to bottom
    const main = document.getElementById('main-content');
    if (main) main.scrollTop = main.scrollHeight;
  }

  function attachHandlers() {
    container.querySelectorAll('.speak-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.text;
        speak(text);
      });
    });

    container.querySelectorAll('.scenario-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        const node = scenario.nodes[state.currentNodeId];
        const option = node.options[idx];
        
        state.history.push({
          type: 'user',
          polish: option.polish,
          english: option.english
        });

        incrementStats('totalReviews', 1);
        incrementStats('correctAnswers', 1);

        if (option.next === 'end') {
          state.completed = true;
          finishScenario();
        } else {
          state.currentNodeId = option.next;
        }
        render();
      });
    });

    const finishBtn = container.querySelector('#finish-btn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        stopSpeaking();
        router.navigate('scenarios', { title: 'Scenarios' });
      });
    }
    
    const retryBtn = container.querySelector('#retry-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        state.currentNodeId = scenario.startNode;
        state.history = [];
        state.completed = false;
        render();
      });
    }
  }

  async function finishScenario() {
    const xp = 10 + (scenario.difficulty * 5);
    await addXP(xp);
    await updateStreak();
    await updateHeaderStats();
    showToast(`+${xp} XP — Scenario complete!`, 'success');
  }

  render();

  return container;
}
