/* Monk Learning — class board pages (Notes / Sessions)
   renderBoard(root, board, options) builds the page from one content object.
   options: { mode: 'note' | 'session', daysLeft: 7, onSave: fn } */

const TORQUE_BOARD = {
  topic: 'Rotational Motion · torque',
  subject: 'Physics',
  sections: [
    {
      id: 'idea', chip: 'Idea', label: 'THE IDEA',
      blocks: [
        { type: 'text', markable: true, text: 'A force pointing straight at the hinge cannot turn anything. Only the part of the force perpendicular to the rod does the turning — and the further from the hinge it acts, the more it turns.' },
        { type: 'hand', text: 'far from the hinge + perpendicular = biggest turn' }
      ]
    },
    {
      id: 'deriv', chip: 'Derivation', label: 'DERIVING τ = r F sin θ',
      blocks: [
        { type: 'steps', steps: [
          { title: 'Split the force', lines: [
            ['text', 'Resolve F into a part along the rod and a part across it.'],
            ['math', 'F∥ = F cos θ'],
            ['math', 'F⊥ = F sin θ']
          ]},
          { title: 'Only the perpendicular part turns', lines: [
            ['text', 'The component along the rod pushes into the hinge. It does no turning at all.'],
            ['math', 'τ = r F⊥']
          ]},
          { title: 'Put it together', lines: [
            ['result', 'τ = r F sin θ'],
            ['note', 'θ is measured between the rod and the force, not from the vertical.']
          ]}
        ]}
      ]
    },
    {
      id: 'diagram', chip: 'Diagram', label: 'DIAGRAM',
      blocks: [
        { type: 'svg', svg: `<svg viewBox="0 0 300 150" width="100%" height="168" role="img" aria-label="A rod hinged at the left, with force F acting at the far end at angle theta to the rod">
  <line x1="36" y1="105" x2="215" y2="105" stroke="#1C1A16" stroke-width="2.5" stroke-linecap="round"></line>
  <circle cx="36" cy="105" r="6" fill="#1C1A16"></circle>
  <line x1="28" y1="113" x2="44" y2="113" stroke="#1C1A16" stroke-width="1.5"></line>
  <line x1="215" y1="105" x2="285" y2="65" stroke="#B08420" stroke-width="2.5" stroke-linecap="round"></line>
  <polyline points="271,66 285,65 277,76" fill="none" stroke="#B08420" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline>
  <path d="M 245 105 A 30 30 0 0 0 241 90" fill="none" stroke="#B08420" stroke-width="1.6"></path>
  <line x1="36" y1="128" x2="215" y2="128" stroke="rgba(28,26,22,.45)" stroke-width="1" stroke-dasharray="4 4"></line>
  <line x1="36" y1="123" x2="36" y2="133" stroke="rgba(28,26,22,.45)" stroke-width="1"></line>
  <line x1="215" y1="123" x2="215" y2="133" stroke="rgba(28,26,22,.45)" stroke-width="1"></line>
  <text x="120" y="145" font-family="'Bricolage Grotesque',sans-serif" font-size="14" font-weight="700" fill="#4A463D">r</text>
  <text x="290" y="58" font-family="'Bricolage Grotesque',sans-serif" font-size="15" font-weight="700" fill="#B08420" text-anchor="end">F</text>
  <text x="252" y="96" font-family="'Bricolage Grotesque',sans-serif" font-size="14" font-weight="700" fill="#B08420">θ</text>
  <text x="20" y="92" font-family="'Bricolage Grotesque',sans-serif" font-size="12" font-weight="600" fill="#8A8478">hinge</text>
</svg>` },
        { type: 'caption', text: 'Force F acts at the far end, a distance r from the hinge, at angle θ to the rod. Only the part across the rod turns it.' }
      ]
    },
    {
      id: 'example', chip: 'Example', label: 'WORKED IN CLASS',
      blocks: [
        { type: 'problem',
          text: 'A 2 m rod is hinged at one end. A 10 N force acts at the far end at 30° to the rod. Find the torque about the hinge.',
          work: ['τ = r F sin θ', '= 2 × 10 × sin 30°', '= 2 × 10 × 0.5'],
          answer: 'τ = 10 N·m' }
      ]
    },
    {
      id: 'asked', chip: 'You asked', label: 'YOU ASKED',
      blocks: [
        { type: 'qa', items: [
          { q: 'why sin and not cos?', a: 'Because θ sits between the rod and the force. Sine picks out the part across the rod, which is the only part that turns it.', markable: true },
          { q: 'does torque have a direction?', a: 'Yes — it is a vector along the axis. Curl your right hand the way the rod turns and your thumb points along τ.' }
        ]},
        { type: 'foot', text: 'Tap any line to highlight it' }
      ]
    }
  ]
};

function make(tag, className, text) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (text != null) n.textContent = text;
  return n;
}

function markable(node) {
  node.dataset.mark = 'off';
  node.addEventListener('click', function () {
    node.dataset.mark = node.dataset.mark === 'on' ? 'off' : 'on';
  });
  return node;
}

function renderBlock(block) {
  if (block.type === 'text') {
    const p = make('p', 'board__text', block.text);
    return block.markable ? markable(p) : p;
  }
  if (block.type === 'hand') return make('p', 'board__hand', block.text);
  if (block.type === 'caption') return make('p', 'board__caption', block.text);
  if (block.type === 'foot') return make('p', 'board__foot', block.text);

  if (block.type === 'svg') {
    const wrap = make('div');
    wrap.style.padding = '6px 0 4px';
    wrap.innerHTML = block.svg;
    return wrap;
  }

  if (block.type === 'steps') {
    const rail = make('div', 'board__rail');
    block.steps.forEach(function (st, i) {
      const step = make('div', 'board__step');
      step.appendChild(make('span', 'board__num', i + 1 < 10 ? '0' + (i + 1) : String(i + 1)));
      step.appendChild(make('p', 'board__step-title', st.title));
      st.lines.forEach(function (line) {
        const kind = line[0];
        if (kind === 'text') step.appendChild(markable(make('p', 'board__text', line[1])));
        else if (kind === 'note') step.appendChild(make('p', 'board__note', line[1]));
        else if (kind === 'result') step.appendChild(make('p', 'board__math board__math--result', line[1]));
        else step.appendChild(make('p', 'board__math', line[1]));
      });
      rail.appendChild(step);
    });
    return rail;
  }

  if (block.type === 'problem') {
    const wrap = make('div');
    wrap.appendChild(make('p', 'board__problem', block.text));
    const work = make('div', 'board__work');
    block.work.forEach(function (line) { work.appendChild(make('p', 'board__math', line)); });
    const row = make('div', 'board__answer-row');
    row.appendChild(make('span', 'board__tick', '✓'));
    row.appendChild(make('p', 'board__answer', block.answer));
    work.appendChild(row);
    wrap.appendChild(work);
    return wrap;
  }

  if (block.type === 'qa') {
    const wrap = make('div', 'board__qa');
    block.items.forEach(function (item) {
      const pair = make('div');
      pair.appendChild(make('p', 'board__q', item.q));
      const a = make('p', 'board__text', item.a);
      pair.appendChild(item.markable ? markable(a) : a);
      wrap.appendChild(pair);
    });
    return wrap;
  }

  return make('div');
}

function renderBoard(root, board, options) {
  const opts = options || {};
  const mode = opts.mode === 'session' ? 'session' : 'note';
  let saved = false;

  root.className = 'board board--' + mode;
  root.innerHTML = '';

  const status = make('div', 'board__status');
  status.appendChild(make('span', null, '9:41'));
  status.appendChild(make('span', null, '▮▮▮'));
  root.appendChild(status);

  const bar = make('div', 'board__bar');
  const back = make('button', 'board__back', '‹');
  back.type = 'button';
  back.setAttribute('aria-label', 'Back');
  bar.appendChild(back);
  const kicker = make('span', 'board__kicker', mode === 'session' ? 'SESSION · DELETES IN ' + (opts.daysLeft || 7) + ' DAYS' : '');
  bar.appendChild(kicker);
  root.appendChild(bar);

  const head = make('div', 'board__head');
  head.appendChild(make('h2', 'board__topic', board.topic));
  head.appendChild(make('p', 'board__subject', board.subject));

  let clockNum, clockCopy;
  if (mode === 'session') {
    const clock = make('div', 'board__clock');
    clockNum = make('span', 'board__clock-num', String(opts.daysLeft || 7));
    clockCopy = make('span', 'board__clock-copy', 'days left. Save it and this board stays with your notes.');
    clock.appendChild(clockNum);
    clock.appendChild(clockCopy);
    head.appendChild(clock);
  }
  root.appendChild(head);

  const chips = make('div', 'board__chips');
  chips.setAttribute('role', 'tablist');
  root.appendChild(chips);

  const scroll = make('div', 'board__scroll');
  root.appendChild(scroll);

  const anchors = {};
  board.sections.forEach(function (sec) {
    const node = make('div');
    node.appendChild(make('p', 'board__label', sec.label));
    sec.blocks.forEach(function (b) { node.appendChild(renderBlock(b)); });
    scroll.appendChild(node);
    anchors[sec.id] = node;

    const chip = make('button', 'board__chip', sec.chip);
    chip.type = 'button';
    chip.setAttribute('role', 'tab');
    chip.addEventListener('click', function () {
      Array.prototype.forEach.call(chips.children, function (c) { c.setAttribute('aria-selected', 'false'); });
      chip.setAttribute('aria-selected', 'true');
      scroll.scrollTop = node.offsetTop - scroll.offsetTop - 8;
    });
    chips.appendChild(chip);
  });
  if (chips.firstChild) chips.firstChild.setAttribute('aria-selected', 'true');

  if (mode === 'session') {
    const actions = make('div', 'board__actions');
    const primary = make('button', 'board__primary', 'Save to notes');
    primary.type = 'button';
    primary.addEventListener('click', function () {
      if (saved) return;
      saved = true;
      root.classList.add('board--saved');
      kicker.textContent = 'SAVED TO YOUR NOTES';
      clockNum.textContent = '∞';
      clockCopy.textContent = 'Kept for good. It now lives with your notes.';
      primary.textContent = 'Talk to Drona about this';
      if (opts.onSave) opts.onSave();
    });
    actions.appendChild(primary);
    root.appendChild(actions);
  }

  const home = make('div', 'board__home');
  home.appendChild(make('span'));
  root.appendChild(home);

  return { scroll: scroll, isSaved: function () { return saved; } };
}

if (typeof module !== 'undefined') module.exports = { TORQUE_BOARD, renderBoard };
