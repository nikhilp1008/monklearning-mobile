/* Monk Learning — Snap It Out solution screen (6B)
   Renders the parsed questions and their step-by-step working.
   Replace SNAP_QUESTIONS with the payload your solver returns. */

const SNAP_QUESTIONS = [
  {
    id: 'Q1',
    text: 'A new unit of length α is defined as the distance light travels in vacuum in 1 s. If light takes 6 min 40 s to travel from Venus to Earth, find that distance in units of α.',
    steps: [
      { title: 'Convert the time to seconds', lines: [
        ['text', 'Given the time light takes to cover the distance:'],
        ['math', 't = 6 min 40 s'],
        ['math', '= (6 × 60 + 40) s'],
        ['math', '= 400 s']
      ]},
      { title: 'Define the new unit of length', lines: [
        ['text', 'Let c be the speed of light in vacuum. By definition, one α is the distance light travels in 1 s.'],
        ['math', '1 α = c × 1 s']
      ]},
      { title: 'Calculate the distance', lines: [
        ['text', 'The distance d between Venus and Earth is:'],
        ['math', 'd = speed × time'],
        ['math', 'd = c × 400 s = 400 × (c × 1 s)'],
        ['math', '∴ d = 400 α']
      ]}
    ],
    answer: 'd = 400 α'
  },
  {
    id: 'Q2',
    text: 'Consider the equation H = x^p · ε^q · E^r / t^s, where H is magnetic field, E is electric field, ε is permittivity, x is distance and t is time. Find p, q, r and s.',
    steps: [
      { title: 'Write the dimensional formulas', lines: [
        ['text', 'Dimensions of each quantity in the relation:'],
        ['math', '[x] = [L]      [t] = [T]'],
        ['math', '[E] = [M L T⁻³ A⁻¹]'],
        ['math', '[ε] = [M⁻¹ L⁻³ T⁴ A²]'],
        ['math', '[H] = [L⁻¹ A]']
      ]},
      { title: 'Substitute into the equation', lines: [
        ['text', 'Substituting the dimensions into the given relation:'],
        ['math', '[L⁻¹A] = [L]^p [M⁻¹L⁻³T⁴A²]^q [M L T⁻³A⁻¹]^r ÷ [T]^s']
      ]},
      { title: 'Compare the exponents', lines: [
        ['text', 'Matching powers of M, L, T and A on both sides:'],
        ['math', 'M:  −q + r = 0'],
        ['math', 'L:  p − 3q + r = −1'],
        ['math', 'T:  4q − 3r − s = 0'],
        ['math', 'A:  2q − r = 1']
      ]},
      { title: 'Solve for the exponents', lines: [
        ['text', 'From the M equation, q = r. Using that in the A equation:'],
        ['math', '2q − q = 1 ⟹ q = 1, so r = 1'],
        ['text', 'Substituting q = 1, r = 1 into the L and T equations:'],
        ['math', 'p − 3(1) + 1 = −1 ⟹ p = 1'],
        ['math', '4(1) − 3(1) − s = 0 ⟹ s = 1']
      ]}
    ],
    answer: 'p = 1, q = 1, r = 1, s = 1'
  },
  {
    id: 'Q3',
    text: 'The percentage error in the calculated volume of a sphere, if there is a 2% error in its diameter measurement, is ____.',
    steps: [
      { title: 'Write the volume in terms of the diameter', lines: [
        ['text', 'Only the diameter is measured, so express V using d:'],
        ['math', 'V = (4/3) π (d/2)³ = (π/6) d³']
      ]},
      { title: 'Relate the errors', lines: [
        ['text', 'V depends on the cube of d, so the fractional error triples:'],
        ['math', 'ΔV/V = 3 × (Δd/d)']
      ]},
      { title: 'Put in the numbers', lines: [
        ['text', 'The diameter carries a 2% error:'],
        ['math', 'ΔV/V = 3 × 2% = 6%']
      ]}
    ],
    answer: '6%'
  }
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderSolution(root, questions, startIndex) {
  const chipRow = root.querySelector('[data-chips]');
  const scroll = root.querySelector('[data-scroll]');
  const questionEl = root.querySelector('[data-question]');
  let index = startIndex || 0;

  chipRow.textContent = '';
  questions.forEach(function (q, i) {
    const chip = el('button', 'solution__chip', q.id);
    chip.type = 'button';
    chip.setAttribute('role', 'tab');
    chip.addEventListener('click', function () { show(i); });
    chipRow.appendChild(chip);
  });

  function show(i) {
    index = i;
    const q = questions[i];

    Array.prototype.forEach.call(chipRow.children, function (chip, n) {
      chip.setAttribute('aria-selected', n === i ? 'true' : 'false');
    });

    questionEl.textContent = q.text;

    const steps = el('div', 'solution__steps');
    q.steps.forEach(function (st, n) {
      const step = el('div', 'solution__step');
      const num = el('span', 'solution__num', n + 1 < 10 ? '0' + (n + 1) : String(n + 1));
      step.appendChild(num);
      step.appendChild(el('p', 'solution__step-title', st.title));
      st.lines.forEach(function (line) {
        step.appendChild(el('p', line[0] === 'math' ? 'solution__math' : 'solution__text', line[1]));
      });
      steps.appendChild(step);
    });

    const final = el('div', 'solution__step solution__final');
    final.appendChild(el('span', 'solution__num', '✓'));
    final.appendChild(el('p', 'solution__final-label', 'Final answer'));
    final.appendChild(el('p', 'solution__answer', q.answer));
    final.appendChild(el('p', 'solution__meta', q.steps.length + ' steps · swipe up for the next question'));
    steps.appendChild(final);

    const old = scroll.querySelector('.solution__steps');
    if (old) old.remove();
    scroll.appendChild(steps);
    scroll.scrollTop = 0;
  }

  show(index);
  return { show: show, current: function () { return index; } };
}

if (typeof module !== 'undefined') module.exports = { SNAP_QUESTIONS, renderSolution };
