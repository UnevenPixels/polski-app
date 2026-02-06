import { router } from '../router.js';

export async function renderSounds() {
  const container = document.createElement('div');
  container.className = 'sounds-view';

  container.innerHTML = `
    <div class="card" style="margin-bottom: 16px;">
      <div class="card-title">Polish Alphabet</div>
      <div class="card-subtitle">33 letters including special characters</div>
      <div style="margin-top: 12px; font-size: 1.125rem; letter-spacing: 2px; line-height: 2;">
        A Ą B C Ć D E Ę F G H I J K L Ł M N Ń O Ó P R S Ś T U W Y Z Ź Ż
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Vowels
    </h3>
    
    <div class="card">
      <table class="grammar-table">
        <tr><th>Letter</th><th>Sound</th><th>Example</th></tr>
        <tr><td>a</td><td>like "a" in "father"</td><td>tak (yes)</td></tr>
        <tr><td>e</td><td>like "e" in "bed"</td><td>ten (this)</td></tr>
        <tr><td>i</td><td>like "ee" in "see"</td><td>i (and)</td></tr>
        <tr><td>o</td><td>like "o" in "lot"</td><td>to (this)</td></tr>
        <tr><td>u / ó</td><td>like "oo" in "boot"</td><td>tu (here)</td></tr>
        <tr><td>y</td><td>like "i" in "bit"</td><td>ty (you)</td></tr>
      </table>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Nasal Vowels
    </h3>
    
    <div class="card">
      <table class="grammar-table">
        <tr><th>Letter</th><th>Sound</th><th>Example</th></tr>
        <tr><td>ą</td><td>nasal "on/om"</td><td>są (they are)</td></tr>
        <tr><td>ę</td><td>nasal "en/em"</td><td>się (self)</td></tr>
      </table>
      <div style="margin-top: 12px; font-size: 0.875rem; color: var(--text-secondary);">
        Note: ę at word end is often pronounced like regular "e"
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Special Consonants
    </h3>
    
    <div class="card">
      <table class="grammar-table">
        <tr><th>Letter</th><th>Sound</th><th>Example</th></tr>
        <tr><td>ć / ci</td><td>soft "ch" (like "cheese")</td><td>być (to be)</td></tr>
        <tr><td>cz</td><td>hard "ch" (like "chalk")</td><td>czas (time)</td></tr>
        <tr><td>ś / si</td><td>soft "sh" (like "sheep")</td><td>się (self)</td></tr>
        <tr><td>sz</td><td>hard "sh" (like "shop")</td><td>szkoła (school)</td></tr>
        <tr><td>ź / zi</td><td>soft "zh"</td><td>źle (badly)</td></tr>
        <tr><td>ż / rz</td><td>hard "zh" (like "pleasure")</td><td>może (maybe)</td></tr>
        <tr><td>ń / ni</td><td>like "ny" in "canyon"</td><td>koń (horse)</td></tr>
        <tr><td>ł</td><td>like English "w"</td><td>mały (small)</td></tr>
        <tr><td>w</td><td>like English "v"</td><td>woda (water)</td></tr>
      </table>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Digraphs
    </h3>
    
    <div class="card">
      <table class="grammar-table">
        <tr><th>Letters</th><th>Sound</th><th>Example</th></tr>
        <tr><td>ch / h</td><td>raspy "h" (like "loch")</td><td>chleb (bread)</td></tr>
        <tr><td>dz</td><td>like "ds" in "odds"</td><td>bardzo (very)</td></tr>
        <tr><td>dź / dzi</td><td>soft "j" (like "jeans")</td><td>dźwięk (sound)</td></tr>
        <tr><td>dż</td><td>hard "j" (like "jam")</td><td>dżem (jam)</td></tr>
      </table>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Pronunciation Rules
    </h3>
    
    <div class="card">
      <div style="margin-bottom: 16px;">
        <strong style="color: var(--accent);">Word Stress</strong>
        <p style="color: var(--text-secondary); margin-top: 4px;">
          Stress falls on the second-to-last syllable (penultimate).
          <br>Example: war-<strong>SZA</strong>-wa, u-ni-wer-sy-<strong>TE</strong>-tu
        </p>
      </div>
      
      <div style="margin-bottom: 16px;">
        <strong style="color: var(--accent);">Final Devoicing</strong>
        <p style="color: var(--text-secondary); margin-top: 4px;">
          Voiced consonants become unvoiced at word end.
          <br>b→p, d→t, g→k, w→f, z→s, ż/rz→sz
          <br>Example: chleb sounds like "chlep"
        </p>
      </div>
      
      <div>
        <strong style="color: var(--accent);">Softening with "i"</strong>
        <p style="color: var(--text-secondary); margin-top: 4px;">
          The letter "i" after consonants makes them soft.
          <br>ci = ć, si = ś, zi = ź, ni = ń, dzi = dź
        </p>
      </div>
    </div>

    <h3 style="margin: 20px 0 12px; font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase;">
      Hard vs Soft Pairs
    </h3>
    
    <div class="card">
      <table class="grammar-table">
        <tr><th>Hard</th><th>Soft</th><th>Example</th></tr>
        <tr><td>c</td><td>ć (ci)</td><td>noc → nocy</td></tr>
        <tr><td>s</td><td>ś (si)</td><td>nos → nosie</td></tr>
        <tr><td>z</td><td>ź (zi)</td><td>wóz → wozie</td></tr>
        <tr><td>n</td><td>ń (ni)</td><td>pan → pani</td></tr>
        <tr><td>cz</td><td>ć (ci)</td><td>—</td></tr>
        <tr><td>sz</td><td>ś (si)</td><td>—</td></tr>
        <tr><td>ż/rz</td><td>ź (zi)</td><td>—</td></tr>
      </table>
    </div>

    <div style="margin-top: 24px;">
      <button class="btn btn-full" id="practice-btn">Practice Sounds</button>
    </div>
  `;

  container.querySelector('#practice-btn').addEventListener('click', () => {
    router.navigate('lessons', { title: 'Lessons' });
  });

  return container;
}
