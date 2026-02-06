import { grammar } from '../data/grammar.js';
import { vocabulary } from '../data/vocabulary.js';

let currentTab = 'grammar';

export async function renderReference() {
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
      renderContent(container);
    });
  });

  const searchInput = container.querySelector('#search-input');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    renderTabContent(container.querySelector('#reference-content'), query);
  });

  renderTabContent(container.querySelector('#reference-content'), '');
}

function renderTabContent(contentEl, query) {
  switch (currentTab) {
    case 'grammar':
      renderGrammarTab(contentEl, query);
      break;
    case 'vocabulary':
      renderVocabularyTab(contentEl, query);
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
        <p><strong>Masculine:</strong> Usually ends in a consonant (dom, stół, pies)</p>
        <p><strong>Feminine:</strong> Usually ends in -a (kobieta, szkoła, lampa)</p>
        <p><strong>Neuter:</strong> Ends in -o, -e, -ę, -um (okno, morze, imię, muzeum)</p>
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
      title: 'Formal Address',
      content: `
        <p><strong>Pan</strong> (Sir/Mr.) - used with 3rd person singular verb</p>
        <p><strong>Pani</strong> (Madam/Ms.) - used with 3rd person singular verb</p>
        <p><strong>Państwo</strong> (Ladies and Gentlemen) - used with 3rd person plural verb</p>
        <p>Example: "Jak się pan ma?" (How are you, sir?)</p>
      `
    },
    {
      title: 'Być (To Be)',
      content: `
        <table class="grammar-table">
          <tr><th>Person</th><th>Present</th><th>Future</th></tr>
          <tr><td>ja</td><td>jestem</td><td>będę</td></tr>
          <tr><td>ty</td><td>jesteś</td><td>będziesz</td></tr>
          <tr><td>on/ona/ono</td><td>jest</td><td>będzie</td></tr>
          <tr><td>my</td><td>jesteśmy</td><td>będziemy</td></tr>
          <tr><td>wy</td><td>jesteście</td><td>będziecie</td></tr>
          <tr><td>oni/one</td><td>są</td><td>będą</td></tr>
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

function renderVocabularyTab(contentEl, query) {
  const words = Object.entries(vocabulary).slice(0, 100);

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

  let html = '<div class="card">';
  filtered.slice(0, 50).forEach(([word, data]) => {
    html += `
      <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border);">
        <div>
          <span style="font-weight: 600;">${word}</span>
          ${data.gender ? `<span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 8px;">${data.gender}</span>` : ''}
        </div>
        <span style="color: var(--text-secondary);">${data.meaning}</span>
      </div>
    `;
  });
  html += '</div>';

  if (filtered.length > 50) {
    html += `<div style="text-align: center; color: var(--text-muted); margin-top: 12px;">Showing 50 of ${filtered.length} results</div>`;
  }

  contentEl.innerHTML = html;
}

function renderCasesTab(contentEl, query) {
  const cases = [
    { name: 'Nominative (Mianownik)', question: 'Kto? Co?', use: 'Subject of sentence', example: 'To jest dom.' },
    { name: 'Genitive (Dopełniacz)', question: 'Kogo? Czego?', use: 'Possession, negation, quantities', example: 'Nie mam czasu.' },
    { name: 'Dative (Celownik)', question: 'Komu? Czemu?', use: 'Indirect object', example: 'Daję ci książkę.' },
    { name: 'Accusative (Biernik)', question: 'Kogo? Co?', use: 'Direct object', example: 'Widzę dom.' },
    { name: 'Instrumental (Narzędnik)', question: 'Z kim? Z czym?', use: 'Means, predicate nouns', example: 'Jadę autobusem.' },
    { name: 'Locative (Miejscownik)', question: 'O kim? O czym?', use: 'After w, na, o, przy', example: 'Jestem w domu.' },
    { name: 'Vocative (Wołacz)', question: '—', use: 'Direct address', example: 'Panie profesorze!' }
  ];

  const filtered = query
    ? cases.filter(c => c.name.toLowerCase().includes(query) || c.use.toLowerCase().includes(query))
    : cases;

  let html = '';
  filtered.forEach(c => {
    html += `
      <div class="card" style="margin-bottom: 12px;">
        <div class="grammar-title">${c.name}</div>
        <div style="margin-bottom: 8px;"><strong>Question:</strong> ${c.question}</div>
        <div style="margin-bottom: 8px;"><strong>Use:</strong> ${c.use}</div>
        <div style="font-style: italic; color: var(--text-secondary);">${c.example}</div>
      </div>
    `;
  });

  contentEl.innerHTML = html || '<div class="empty-state"><div class="empty-title">No results found</div></div>';
}

function renderVerbsTab(contentEl, query) {
  const verbGroups = [
    {
      title: 'Group 1 (-ę, -esz)',
      verbs: ['pisać (piszę, piszesz)', 'brać (biorę, bierzesz)', 'iść (idę, idziesz)']
    },
    {
      title: 'Group 2 (-ę, -isz/-ysz)',
      verbs: ['robić (robię, robisz)', 'mówić (mówię, mówisz)', 'lubić (lubię, lubisz)']
    },
    {
      title: 'Group 3 (-am, -asz)',
      verbs: ['czytać (czytam, czytasz)', 'mieć (mam, masz)', 'pytać (pytam, pytasz)']
    },
    {
      title: 'Group 4 (-em, -esz)',
      verbs: ['umieć (umiem, umiesz)', 'rozumieć (rozumiem, rozumiesz)', 'jeść (jem, jesz)']
    }
  ];

  const filtered = query
    ? verbGroups.filter(g => 
        g.title.toLowerCase().includes(query) || 
        g.verbs.some(v => v.toLowerCase().includes(query))
      )
    : verbGroups;

  let html = '';
  filtered.forEach(group => {
    html += `
      <div class="grammar-section">
        <div class="grammar-title">${group.title}</div>
        <div class="card">
          <ul style="margin: 0; padding-left: 20px;">
            ${group.verbs.map(v => `<li style="margin-bottom: 4px;">${v}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  contentEl.innerHTML = html || '<div class="empty-state"><div class="empty-title">No results found</div></div>';
}
