import { grammar } from '../data/grammar.js';
import { vocabulary } from '../data/vocabulary.js';

let currentTab = 'grammar';
let vocabDisplayCount = 50;

export async function renderReference() {
  vocabDisplayCount = 50;
  const container = document.createElement('div');
  container.className = 'reference-view';

  renderContent(container);
  return container;
}

function renderContent(container) {
  container.innerHTML = `
    <div class="reference-search">
      <input type="text" class="exercise-input" id="search-input" placeholder="Search grammar or vocabulary...">
    </div>

    <div class="reference-tabs">
      <button class="reference-tab ${currentTab === 'grammar' ? 'active' : ''}" data-tab="grammar">Grammar</button>
      <button class="reference-tab ${currentTab === 'vocabulary' ? 'active' : ''}" data-tab="vocabulary">Vocabulary</button>
      <button class="reference-tab ${currentTab === 'cases' ? 'active' : ''}" data-tab="cases">Cases</button>
      <button class="reference-tab ${currentTab === 'verbs' ? 'active' : ''}" data-tab="verbs">Verbs</button>
    </div>

    <div id="reference-content"></div>
  `;

  container.querySelectorAll('.reference-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      currentTab = tab.dataset.tab;
      vocabDisplayCount = 50;
      renderContent(container);
    });
  });

  const searchInput = container.querySelector('#search-input');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    vocabDisplayCount = 50;
    renderTabContent(container.querySelector('#reference-content'), query, container);
  });

  renderTabContent(container.querySelector('#reference-content'), '', container);
}

function renderTabContent(contentEl, query, container) {
  switch (currentTab) {
    case 'grammar':
      renderGrammarTab(contentEl, query);
      break;
    case 'vocabulary':
      renderVocabularyTab(contentEl, query, container);
      break;
    case 'cases':
      renderCasesTab(contentEl, query);
      break;
    case 'verbs':
      renderVerbsTab(contentEl, query);
      break;
  }
}

function renderGrammarTab(contentEl, query) {
  let html = '';

  const sections = [
    {
      title: 'Noun Gender',
      content: `
        <p><strong>Masculine:</strong> Usually ends in a consonant</p>
        <p style="color: var(--text-secondary); margin-left: 16px;">Examples: ${grammar.nounEndings.masculine.examples.join(', ')}</p>
        <p><strong>Feminine:</strong> ${grammar.nounEndings.feminine.description}</p>
        <p style="color: var(--text-secondary); margin-left: 16px;">Examples: ${grammar.nounEndings.feminine.examples.join(', ')}</p>
        <p><strong>Neuter:</strong> ${grammar.nounEndings.neuter.description}</p>
        <p style="color: var(--text-secondary); margin-left: 16px;">Examples: ${grammar.nounEndings.neuter.examples.join(', ')}</p>
      `
    },
    {
      title: 'Personal Pronouns',
      content: `
        <table class="grammar-table">
          <tr><th>Person</th><th>Singular</th><th>Plural</th></tr>
          <tr><td>1st</td><td>ja (I)</td><td>my (we)</td></tr>
          <tr><td>2nd</td><td>ty (you)</td><td>wy (you)</td></tr>
          <tr><td>3rd m.</td><td>on (he)</td><td>oni (they)</td></tr>
          <tr><td>3rd f.</td><td>ona (she)</td><td>one (they)</td></tr>
          <tr><td>3rd n.</td><td>ono (it)</td><td>one (they)</td></tr>
        </table>
      `
    },
    {
      title: 'Pronoun Cases',
      content: `
        <div style="margin-bottom: 12px;"><strong>Accusative:</strong></div>
        <table class="grammar-table">
          <tr><td>mnie</td><td>cię/ciebie</td><td>go/jego</td><td>ją</td></tr>
          <tr><td>nas</td><td>was</td><td colspan="2">ich</td></tr>
        </table>
        <div style="margin: 12px 0;"><strong>Genitive:</strong></div>
        <table class="grammar-table">
          <tr><td>mnie</td><td>cię/ciebie</td><td>go/jego</td><td>jej</td></tr>
          <tr><td>nas</td><td>was</td><td colspan="2">ich</td></tr>
        </table>
        <div style="margin: 12px 0;"><strong>Dative:</strong></div>
        <table class="grammar-table">
          <tr><td>mi/mnie</td><td>ci/tobie</td><td>mu/jemu</td><td>jej</td></tr>
          <tr><td>nam</td><td>wam</td><td colspan="2">im</td></tr>
        </table>
      `
    },
    {
      title: 'Possessive Pronouns',
      content: `
        <table class="grammar-table">
          <tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th></tr>
          <tr><td>my</td><td>mój</td><td>moja</td><td>moje</td></tr>
          <tr><td>your (sg)</td><td>twój</td><td>twoja</td><td>twoje</td></tr>
          <tr><td>our</td><td>nasz</td><td>nasza</td><td>nasze</td></tr>
          <tr><td>your (pl)</td><td>wasz</td><td>wasza</td><td>wasze</td></tr>
        </table>
        <p style="margin-top: 12px; color: var(--text-secondary);">
          <strong>jego</strong> (his), <strong>jej</strong> (her), <strong>ich</strong> (their) don't change
        </p>
      `
    },
    {
      title: 'Demonstratives',
      content: `
        <table class="grammar-table">
          <tr><th></th><th>Near (this)</th><th>Far (that)</th></tr>
          <tr><td>Masc.</td><td>ten</td><td>tamten</td></tr>
          <tr><td>Fem.</td><td>ta</td><td>tamta</td></tr>
          <tr><td>Neut.</td><td>to</td><td>tamto</td></tr>
          <tr><td>Plural (m-pers)</td><td>ci</td><td>tamci</td></tr>
          <tr><td>Plural (other)</td><td>te</td><td>tamte</td></tr>
        </table>
      `
    },
    {
      title: 'Formal Address',
      content: `
        <p><strong>Pan</strong> (Sir/Mr.) - used with 3rd person singular verb</p>
        <p><strong>Pani</strong> (Madam/Ms.) - used with 3rd person singular verb</p>
        <p><strong>Państwo</strong> (Ladies and Gentlemen) - used with 3rd person plural verb</p>
        <p style="margin-top: 8px; font-style: italic; color: var(--text-secondary);">
          "Jak się pan ma?" (How are you, sir?)
        </p>
      `
    },
    {
      title: 'Numbers (Cardinal)',
      content: `
        <table class="grammar-table">
          <tr><td>0 - zero</td><td>1 - jeden</td><td>2 - dwa</td><td>3 - trzy</td></tr>
          <tr><td>4 - cztery</td><td>5 - pięć</td><td>6 - sześć</td><td>7 - siedem</td></tr>
          <tr><td>8 - osiem</td><td>9 - dziewięć</td><td>10 - dziesięć</td><td>11 - jedenaście</td></tr>
          <tr><td>12 - dwanaście</td><td>20 - dwadzieścia</td><td>30 - trzydzieści</td><td>100 - sto</td></tr>
        </table>
      `
    },
    {
      title: 'Numbers (Ordinal)',
      content: `
        <table class="grammar-table">
          <tr><td>1st - pierwszy</td><td>2nd - drugi</td><td>3rd - trzeci</td></tr>
          <tr><td>4th - czwarty</td><td>5th - piąty</td><td>6th - szósty</td></tr>
          <tr><td>7th - siódmy</td><td>8th - ósmy</td><td>9th - dziewiąty</td></tr>
          <tr><td colspan="3">10th - dziesiąty</td></tr>
        </table>
      `
    },
    {
      title: 'Days of the Week',
      content: `
        <table class="grammar-table">
          ${grammar.daysOfWeek.map(d => `<tr><td>${d.polish}</td><td>${d.english}</td></tr>`).join('')}
        </table>
      `
    },
    {
      title: 'Months',
      content: `
        <table class="grammar-table">
          ${grammar.months.map(m => `<tr><td>${m.polish}</td><td>${m.english}</td></tr>`).join('')}
        </table>
      `
    }
  ];

  const filtered = query 
    ? sections.filter(s => s.title.toLowerCase().includes(query) || s.content.toLowerCase().includes(query))
    : sections;

  if (filtered.length === 0) {
    html = '<div class="empty-state"><div class="empty-title">No results found</div></div>';
  } else {
    filtered.forEach(section => {
      html += `
        <div class="grammar-section">
          <div class="grammar-title">${section.title}</div>
          <div class="card">${section.content}</div>
        </div>
      `;
    });
  }

  contentEl.innerHTML = html;
}

function renderVocabularyTab(contentEl, query, container) {
  const words = Object.entries(vocabulary);
  const totalCount = words.length;

  const filtered = query
    ? words.filter(([word, data]) => 
        word.toLowerCase().includes(query) || 
        data.meaning.toLowerCase().includes(query)
      )
    : words;

  if (filtered.length === 0) {
    contentEl.innerHTML = '<div class="empty-state"><div class="empty-title">No words found</div></div>';
    return;
  }

  const toShow = filtered.slice(0, vocabDisplayCount);
  const hasMore = filtered.length > vocabDisplayCount;

  let html = `
    <div style="margin-bottom: 12px; color: var(--text-secondary); font-size: 0.875rem;">
      ${query ? `Found ${filtered.length} words` : `${totalCount} words total`}
    </div>
    <div class="card" id="vocab-list">
  `;
  
  toShow.forEach(([word, data], idx) => {
    const isLast = idx === toShow.length - 1;
    html += `
      <div style="display: flex; justify-content: space-between; padding: 10px 0; ${isLast ? '' : 'border-bottom: 1px solid var(--border);'}">
        <div>
          <span style="font-weight: 600;">${word}</span>
          ${data.gender ? `<span style="color: var(--accent); font-size: 0.75rem; margin-left: 8px;">${data.gender}</span>` : ''}
          ${data.pos && !data.gender ? `<span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 8px;">${data.pos}</span>` : ''}
        </div>
        <span style="color: var(--text-secondary); text-align: right; max-width: 50%;">${data.meaning}</span>
      </div>
    `;
  });
  html += '</div>';

  if (hasMore) {
    html += `
      <button class="btn btn-secondary btn-full" id="load-more-vocab" style="margin-top: 16px;">
        Load more (${filtered.length - vocabDisplayCount} remaining)
      </button>
    `;
  }

  contentEl.innerHTML = html;

  const loadMoreBtn = contentEl.querySelector('#load-more-vocab');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      vocabDisplayCount += 50;
      renderVocabularyTab(contentEl, query, container);
    });
  }

  const mainContent = document.getElementById('main-content');
  if (mainContent && hasMore) {
    const handleScroll = () => {
      const scrollTop = mainContent.scrollTop;
      const scrollHeight = mainContent.scrollHeight;
      const clientHeight = mainContent.clientHeight;
      
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        mainContent.removeEventListener('scroll', handleScroll);
        vocabDisplayCount += 50;
        renderVocabularyTab(contentEl, query, container);
      }
    };
    mainContent.addEventListener('scroll', handleScroll);
  }
}

function renderCasesTab(contentEl, query) {
  const cases = grammar.cases;

  const filtered = query
    ? cases.filter(c => 
        c.name.toLowerCase().includes(query) || 
        c.polish.toLowerCase().includes(query) ||
        c.use.toLowerCase().includes(query)
      )
    : cases;

  let html = '';
  filtered.forEach(c => {
    html += `
      <div class="card" style="margin-bottom: 12px;">
        <div class="grammar-title">${c.name} (${c.polish})</div>
        <div style="margin-bottom: 8px;"><strong>Question:</strong> ${c.question}</div>
        <div style="margin-bottom: 8px;"><strong>Use:</strong> ${c.use}</div>
        <div style="font-style: italic; color: var(--text-secondary);">${c.example}</div>
      </div>
    `;
  });

  contentEl.innerHTML = html || '<div class="empty-state"><div class="empty-title">No results found</div></div>';
}

function renderVerbsTab(contentEl, query) {
  const verbs = Object.values(grammar.verbConjugations);
  
  const verbGroups = [
    {
      title: 'Conjugation Group 1 (-ę, -esz)',
      description: 'Verbs with alternating stems',
      examples: ['pisać (piszę, piszesz)', 'brać (biorę, bierzesz)', 'iść (idę, idziesz)']
    },
    {
      title: 'Conjugation Group 2 (-ę, -isz/-ysz)',
      description: 'Common pattern for -ić verbs',
      examples: ['robić (robię, robisz)', 'mówić (mówię, mówisz)', 'lubić (lubię, lubisz)']
    },
    {
      title: 'Conjugation Group 3 (-am, -asz)',
      description: 'Regular -ać verbs',
      examples: ['czytać (czytam, czytasz)', 'mieć (mam, masz)', 'pytać (pytam, pytasz)']
    },
    {
      title: 'Conjugation Group 4 (-em, -esz)',
      description: 'Verbs of knowing and eating',
      examples: ['umieć (umiem, umiesz)', 'rozumieć (rozumiem, rozumiesz)', 'jeść (jem, jesz)']
    }
  ];

  let html = '';

  verbs.forEach(verb => {
    const matchesQuery = !query || 
      verb.infinitive.toLowerCase().includes(query) ||
      verb.meaning.toLowerCase().includes(query);
    
    if (!matchesQuery) return;

    html += `
      <div class="grammar-section">
        <div class="grammar-title">${verb.infinitive} - ${verb.meaning}</div>
        <div class="card">
          <div style="margin-bottom: 12px;"><strong>Present tense:</strong></div>
          <table class="grammar-table">
            ${Object.entries(verb.present).map(([person, form]) => 
              `<tr><td>${person}</td><td>${form}</td></tr>`
            ).join('')}
          </table>
          ${verb.past ? `
            <div style="margin: 16px 0 12px;"><strong>Past tense:</strong></div>
            <table class="grammar-table">
              ${Object.entries(verb.past).map(([person, form]) => 
                `<tr><td>${person}</td><td>${form}</td></tr>`
              ).join('')}
            </table>
          ` : ''}
          ${verb.future ? `
            <div style="margin: 16px 0 12px;"><strong>Future tense:</strong></div>
            <table class="grammar-table">
              ${Object.entries(verb.future).map(([person, form]) => 
                `<tr><td>${person}</td><td>${form}</td></tr>`
              ).join('')}
            </table>
          ` : ''}
        </div>
      </div>
    `;
  });

  const filteredGroups = query
    ? verbGroups.filter(g => 
        g.title.toLowerCase().includes(query) || 
        g.examples.some(e => e.toLowerCase().includes(query))
      )
    : verbGroups;

  if (filteredGroups.length > 0) {
    html += '<div style="margin-top: 24px;"><div class="grammar-title" style="margin-bottom: 16px;">Conjugation Patterns</div></div>';
    filteredGroups.forEach(group => {
      html += `
        <div class="card" style="margin-bottom: 12px;">
          <div style="font-weight: 600; margin-bottom: 8px;">${group.title}</div>
          <div style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 8px;">${group.description}</div>
          <ul style="margin: 0; padding-left: 20px;">
            ${group.examples.map(v => `<li style="margin-bottom: 4px;">${v}</li>`).join('')}
          </ul>
        </div>
      `;
    });
  }

  contentEl.innerHTML = html || '<div class="empty-state"><div class="empty-title">No results found</div></div>';
}
