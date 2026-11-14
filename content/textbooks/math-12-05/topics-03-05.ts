import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topics 03–05, pp. 323–338 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's numbered parts
 * "3. The Chain Rule — Derivatives of Composite Functions" (pp. 323–327),
 * "4. Implicit Differentiation" (pp. 328–332) and "5. Derivatives of Inverse
 * Trigonometric Functions" (pp. 333–338); Part 6 starts on p. 339. Each topic
 * opens with its "Exam Relevance:" box as a part of its own, then is split at
 * its Sections 1 to 8, titled from their own names; the "Cheat Sheet Box" is
 * the part "Cheat sheet". No figures and no unnumbered drawings on these pages.
 * Every fraction is stacked (<frac>); d upright in d<i>y</i>/d<i>x</i>; no em
 * dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const y = '<i>y</i>';
const u = '<i>u</i>';
const v = '<i>v</i>';
const n = '<i>n</i>';
const a = '<i>a</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const h = '<i>h</i>';
const th = '<i>θ</i>';
const XY = '<i>xy</i>';
const X2 = `${x}<sup>2</sup>`;
const X3 = `${x}<sup>3</sup>`;
const Y2 = `${y}<sup>2</sup>`;
const Y3 = `${y}<sup>3</sup>`;
/** |x|, the U+2060 keeping the opening bar with its letter. */
const ABSX = `|\u2060${x}|`;
const XPOS = `${x}${NB}>${NB}0`;
const XNEG = `${x}${NB}<${NB}0`;

/** d/dx, d upright. */
const D = fr('d', `d${x}`);
const DYDX = fr(`d${y}`, `d${x}`);
const DYDU = fr(`d${y}`, `d${u}`);
const DUDX = fr(`d${u}`, `d${x}`);
const D2Y = fr(`d<sup>2</sup>${y}`, `d${x}<sup>2</sup>`);
const CHAIN = `${DYDX} = ${DYDU} · ${DUDX}`;
const GX = `${g}(${x})`;
const FGHX = `${f}(${g}(${h}(${x})))`;
const EXT = `${f}′(${g}(${h}(${x}))) · ${g}′(${h}(${x})) · ${h}′(${x})`;

const inv = (fn: string) => `${fn}<sup>−1</sup>`;
const SIN = inv('sin');
const COS = inv('cos');
const TAN = inv('tan');
const COT = inv('cot');
const SEC = inv('sec');
const CSC = inv('csc');
/** An inverse function (or a trig function) and its argument, glued: sin⁻¹ x. */
const of = (F: string, arg: string) => `${F}${NB}${arg}`;

const P2 = fr('π', '2');
const P4 = fr('π', '4');
const H = fr('1', '2');
const IR2 = fr('1', '√2');
const X_2 = fr(x, '2');
const TH_2 = fr(th, '2');
/** An interval, its comma glued: [a, b]. */
const iv = (lo: string, hi: string, o = '[', c = ']') => `${o}${lo},${NB}${hi}${c}`;
const SINB = iv(`−${P2}`, P2);
const TANB = iv(`−${P2}`, P2, '(', ')');

const R1MX2 = `√(1${NB}−${NB}${X2})`;
const R1PX2 = `√(1${NB}+${NB}${X2})`;
const RX2M1 = `√(${X2}${NB}−${NB}1)`;
const F2X_1M = fr(`2${x}`, `1 − ${X2}`);
const F2X_1P = fr(`2${x}`, `1 + ${X2}`);
const F1M_1P = fr(`1 − ${X2}`, `1 + ${X2}`);
const F1_1P = fr('1', `1 + ${X2}`);
const F2_1P = fr('2', `1 + ${X2}`);
const F1_R1M = fr('1', R1MX2);
const F1_ASEC = fr('1', `${ABSX}${RX2M1}`);
const COSTH = `cos${NB}${th}`;
const SINTH = `sin${NB}${th}`;
const TANTH = `tan${NB}${th}`;
const TAN2TH = `tan${NB}2${th}`;
/** e raised to a run, e upright. */
const ex = (p: string) => `e<sup>${p}</sup>`;
const EX2 = ex(`${x}²`);

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 323–327 ────────────────
  {
    n: '03',
    title: 'The Chain Rule: Derivatives of Composite Functions',
    kalam: 'The chain rule tells you how stacked operations combine, and the cleanest picture is meshing gears.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'Arguably the most-used rule in the entire chapter: implicit, inverse-trig, logarithmic and parametric differentiation all lean on it. <b>CBSE Boards</b> test composite functions directly (2–4 marks). <b>JEE Main/Advanced</b> nest several layers and combine the chain rule with product/quotient rules under time pressure. (NEET does not test mathematics.)',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `A <b>composite function</b> is a function inside another function: a function of a function. For example ${y} = sin(${X2}) is “square it, then take the sine.” Here you can’t just reach for a single standard derivative, because two operations are stacked.`,
      },
      {
        t: 'p',
        html: `The <b>chain rule</b> tells you how stacked operations combine, and the cleanest picture is <b>meshing gears</b>. Imagine three shafts linked by gears: turning ${x} drives an intermediate shaft ${u}, which in turn drives the output ${y}. If the ${u}-shaft spins 3 times for each turn of ${x}, and the ${y}-shaft spins 5 times for each turn of ${u}, then ${y} spins 5 × 3 = 15 times per turn of ${x}. <b>Rates multiply along the chain:</b><br>${CHAIN}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> to differentiate a composite, peel it like an onion from the outside in. Differentiate the <b>outer</b> function while keeping the inner part untouched, then <b>multiply</b> by the derivative of the inner part. For ${y} = sin(${X2}): the outer is sin(·), whose derivative is cos(·), evaluated at the inner ${X2}, that’s cos(${X2}); then multiply by the inner derivative ${D}(${X2}) = 2${x}. So ${y}′ = cos(${X2}) · 2${x} = 2${x}${NB}cos(${X2}).`,
      },
      {
        t: 'p',
        html: `That final “multiply by the derivative of the inside” is the entire trick, and forgetting it is the number-one chain-rule error. Writing ${D}${NB}sin(${X2}) = cos(${X2}) (and stopping) is wrong; you owe the extra factor 2${x}.`,
      },
      {
        t: 'p',
        html: `For deeper nesting, the chain simply gets longer. For ${y} = ${FGHX}, you peel three layers:<br>${DYDX} = ${EXT}.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> The chain rule requires the inner function ${g} to be differentiable at ${x} <b>and</b> the outer function ${f} to be differentiable at ${GX}. If either link is non-differentiable (a corner, a point outside the domain), the rule does not apply there: e.g. √${u} is not differentiable at ${u} = 0, so ${y} = √(${GX}) needs care wherever ${GX} = 0.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Chain rule (two links):</b> if ${y} = ${f}(${u}) and ${u} = ${GX}, both differentiable, then:`,
      },
      {
        t: 'formula',
        kicker: 'Chain rule (two links)',
        main: `${CHAIN} = ${f}′(${GX}) · ${g}′(${x})`,
        legend: [`${y} = the output, ${f}(${u})`, `${u} = the inner function, ${GX}`],
        note: null,
      },
      { t: 'p', html: `<b>Extended chain (three or more links):</b> for ${y} = ${FGHX},` },
      {
        t: 'formula',
        kicker: 'Extended chain (three or more links)',
        main: `${DYDX} = ${EXT}`,
        legend: [`${y} = the output, ${FGHX}`, `${h} = the innermost function`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Common composite patterns</b> (each is “outer derivative × inner derivative”):',
      },
      {
        t: 'formula',
        kicker: 'Common composite patterns',
        main: `${D}[${GX}]<sup><i>n</i></sup> = ${n}[${GX}]<sup><i>n</i>−1</sup>${g}′(${x})<br>${D}${NB}sin${NB}${GX} = cos${NB}${GX} · ${g}′(${x})<br>${D}${NB}${ex(GX)} = ${ex(GX)}${g}′(${x})<br>${D}${NB}ln${NB}${GX} = ${fr(`${g}′(${x})`, GX)}`,
        legend: [`${GX} = the inner (“inside”) function`, `${g}′(${x}) = its derivative (the factor students forget)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity:</b> ${g} differentiable at ${x}, and ${f} differentiable at ${u} = ${GX}.`,
      },

      { t: 'part', title: 'Key derivation and procedure' },
      {
        t: 'p',
        html: `<b>Why the chain rule works (intuitive derivation)</b><br>Let ${u} = ${GX}, and suppose ${g} is differentiable at ${x} (so a small change Δ${x} produces a small change Δ${u}), and ${f} is differentiable at ${u}. The change in ${y} relative to ${x} can be written, for Δ${u}${NB}≠${NB}0, by inserting Δ${u} top and bottom:<br>${fr(`Δ${y}`, `Δ${x}`)} = ${fr(`Δ${y}`, `Δ${u}`)} · ${fr(`Δ${u}`, `Δ${x}`)}.`,
      },
      {
        t: 'p',
        html: `<b>Why this is legitimate:</b> we are multiplying by ${fr(`Δ${u}`, `Δ${u}`)} = 1, just regrouped. As Δ${x} → 0, differentiability of ${g} forces Δ${u} → 0 too, so ${fr(`Δ${y}`, `Δ${u}`)} → ${f}′(${u}) and ${fr(`Δ${u}`, `Δ${x}`)} → ${g}′(${x}). Taking the limit:<br>${DYDX} = ${f}′(${u}) · ${g}′(${x}) = ${f}′(${GX})${NB}${g}′(${x}). ■`,
      },
      {
        t: 'p',
        html: `(A fully rigorous proof handles the Δ${u} = 0 case separately, but the rate-multiplying idea is exactly this.)`,
      },
      {
        t: 'proc',
        title: 'Procedure: differentiating a composite',
        steps: [
          '<b>Identify the layers:</b> name the outer function and the inner function(s). Ask “what is done last?”; that’s the outermost layer.',
          '<b>Differentiate the outer</b>, leaving the inner unchanged inside it.',
          '<b>Multiply</b> by the derivative of the inner (and keep going for deeper nesting).',
          '<b>Simplify.</b> A neat check: every layer you peel must contribute exactly one factor.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Differentiate ${y} = (3${X2} + 5)<sup>4</sup>.`,
        steps: [
          `Outer: (·)<sup>4</sup>; inner: 3${X2} + 5.`,
          `${y}′ = 4(3${X2} + 5)<sup>3</sup> · ${D}(3${X2} + 5)<br>= 4(3${X2} + 5)<sup>3</sup> · 6${x}`,
        ],
        ans: `24${x}(3${X2} + 5)<sup>3</sup>`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Differentiate ${y} = sin(cos(${X2})).`,
        steps: [
          `Three layers (peel outside-in): outer sin(·), middle cos(·), inner ${X2}.`,
          `${y}′ = cos(cos(${X2})) · (−sin(${X2})) · 2${x}<br>= −2${x}${NB}sin(${X2})${NB}cos(cos(${X2})).`,
          'Each layer contributed exactly one factor: that’s your completeness check.',
        ],
        ans: `−2${x}${NB}sin(${X2})${NB}cos(cos(${X2}))`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Trap',
        q: `A student differentiates ${y} = ${ex(`3${x}`)} and writes ${y}′ = ${ex(`3${x}`)}. What’s missing?`,
        steps: [
          `<b>The trap.</b> The student treated ${ex(`3${x}`)} like the plain ${ex(x)} (whose derivative is itself) and <b>forgot the inner derivative</b>. The inside is 3${x}, whose derivative is 3.`,
          `<b>The fix.</b><br>${y}′ = ${ex(`3${x}`)} · ${D}(3${x}) = 3${ex(`3${x}`)}.`,
          'This “forgot to multiply by the inside” error is the most common chain-rule mistake.',
          '<b>Speed habit:</b> after writing the outer derivative, immediately ask “times the derivative of the inside?”, and don’t move on until you’ve written that factor.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Differentiate ${y} = ${X2}${R1PX2} and simplify.`,
        steps: [
          `This combines the <b>product rule</b> with the <b>chain rule</b>. Let ${u} = ${X2} and ${v} = ${R1PX2} = (1 + ${X2})<sup>1/2</sup>.`,
          `${v}′ = ${H}(1 + ${X2})<sup>−1/2</sup> · 2${x} = ${fr(x, R1PX2)} (chain rule on ${v}).`,
          `Now the product rule:<br>${y}′ = ${u}′${v} + ${u}${v}′<br>= 2${x}${R1PX2} + ${X2} · ${fr(x, R1PX2)}<br>= 2${x}${R1PX2} + ${fr(X3, R1PX2)}.`,
          `Put over a common denominator ${R1PX2}:<br>${y}′ = ${fr(`2${x}(1 + ${X2}) + ${X3}`, R1PX2)}`,
        ],
        ans: `${fr(`2${x} + 3${X3}`, R1PX2)} = ${fr(`${x}(2 + 3${X2})`, R1PX2)}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Differentiate ${y} = cos(5${x} − 2).`, a: `−5${NB}sin(5${x} − 2)` },
          { q: `<b>[CBSE]</b> Differentiate ${y} = (${X3} + 1)<sup>7</sup>.`, a: `21${X2}(${X3} + 1)<sup>6</sup>` },
          { q: `<b>[JEE Main]</b> Differentiate ${y} = ln(sin${NB}${x}).`, a: `cot${NB}${x}` },
          { q: `<b>[JEE Main]</b> Differentiate ${y} = ${ex(`√${x}`)}.`, a: fr(ex(`√${x}`), `2√${x}`) },
          {
            q: `<b>[JEE Advanced]</b> Differentiate ${y} = tan<sup>3</sup>(2${x}) (i.e. [tan(2${x})]<sup>3</sup>).`,
            a: `6${NB}tan<sup>2</sup>(2${x})${NB}sec<sup>2</sup>(2${x})`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${D}${NB}sin(2${x}) =`,
        opts: [
          { label: `cos(2${x})`, nudge: '<b>(a)</b> forgets the inner factor 2: the signature chain-rule slip.' },
          { label: `2${NB}cos(2${x})`, nudge: null },
          { label: `2${NB}sin(2${x})`, nudge: '<b>(c)</b> differentiates the wrong outer (sin → sin).' },
          { label: `cos${NB}${x}`, nudge: '<b>(d)</b> ignores the inner entirely.' },
        ],
        correct: 1,
        solution: `Outer derivative cos(2${x}) times inner derivative 2.`,
      },
      {
        t: 'mcq',
        q: `If ${y} = (1 + ${X2})<sup>10</sup>, then ${y}′ at ${x} = 1 is:`,
        opts: [
          { label: '10(2)<sup>9</sup>', nudge: `<b>(a)</b> drops the inner factor 2${x}.` },
          { label: '20(2)<sup>9</sup>', nudge: null },
          { label: '(2)<sup>10</sup>', nudge: '<b>(c)</b>/<b>(d)</b> mishandle the power-rule exponent.' },
          { label: '10(2)<sup>10</sup>', nudge: '<b>(c)</b>/<b>(d)</b> mishandle the power-rule exponent.' },
        ],
        correct: 1,
        solution: `${y}′ = 10(1 + ${X2})<sup>9</sup> · 2${x} = 20${x}(1 + ${X2})<sup>9</sup>; at ${x} = 1: 20 · 2<sup>9</sup>.`,
      },
      {
        t: 'mcq',
        q: `${D}${NB}${EX2} =`,
        opts: [
          { label: EX2, nudge: '<b>(a)</b> forgets the inner derivative.' },
          { label: `2${x}${NB}${EX2}`, nudge: null },
          { label: `${X2}${ex(`${x}²−1`)}`, nudge: '<b>(c)</b> wrongly applies the power rule to an exponential.' },
          { label: `2${x}${NB}${ex(`2${x}`)}`, nudge: '<b>(d)</b> mangles the exponent.' },
        ],
        correct: 1,
        solution: `${EX2} · ${D}(${X2}) = 2${x}${NB}${EX2}.`,
      },
      {
        t: 'mcq',
        q: `${D}${NB}ln(cos${NB}${x}) =`,
        opts: [
          { label: fr('1', `cos${NB}${x}`), nudge: `<b>(a)</b> forgets the inner derivative −sin${NB}${x}.` },
          { label: `−tan${NB}${x}`, nudge: null },
          { label: `tan${NB}${x}`, nudge: `<b>(c)</b> drops the minus sign from ${D}${NB}cos${NB}${x}.` },
          { label: `−${fr('1', `cos${NB}${x}`)}`, nudge: `<b>(d)</b> keeps the inner reciprocal but no sin${NB}${x}.` },
        ],
        correct: 1,
        solution: `${fr('1', `cos${NB}${x}`)} · (−sin${NB}${x}) = −tan${NB}${x}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting the inner derivative.</b> Writing ${D}${NB}sin(2${x}) = cos(2${x}) without the ×2. Every peeled layer owes a factor.`,
          '<b>Differentiating the inside too early.</b> Keep the inner function intact inside the outer derivative; only its separate derivative becomes a multiplying factor.',
          '<b>Losing a layer in deep nesting.</b> For triple composites, you need exactly three factors; count them.',
          '<b>Mixing chain with product/quotient.</b> When a composite sits inside a product, apply the product rule first, using the chain rule to differentiate the composite factor.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Say the recipe out loud: “derivative of the outside, times derivative of the inside.” For each layer you strip, immediately append its factor before doing anything else; this mechanical rhythm eliminates the dropped-inner-factor error almost entirely.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Two links:</b> ${CHAIN}`, note: 'rates multiply along the chain.' },
          {
            f: `<b>Patterns:</b> [${g}]<sup><i>n</i></sup> → ${n}[${g}]<sup><i>n</i>−1</sup>${g}′; sin${NB}${g} → cos${NB}${g} · ${g}′; ${ex(g)} → ${ex(g)}${g}′; ln${NB}${g} → ${fr(`${g}′`, g)}.`,
            note: '',
          },
          { f: '<b>Deep nesting:</b> one factor per layer', note: 'count your factors as a completeness check.' },
          { f: `<b>Biggest trap:</b> never forget the ×${g}′(${x}) (the derivative of the inside).`, note: '' },
        ],
        aids: ['“Outside-in, and don’t forget the inside.”'],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 328–332 ────────────────
  {
    n: '04',
    title: 'Implicit Differentiation',
    kalam: 'The whole technique is really just the chain rule worn as a disguise.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A guaranteed scorer. <b>CBSE Boards</b> regularly ask for ${DYDX} of an implicit relation like ${X2} + ${Y2} = ${a}<sup>2</sup> or sin(${XY}) = ${x} (2–4 marks) ${ESTIMATE}. <b>JEE Main/Advanced</b> push into implicit second derivatives and curve-tangent problems. The whole technique is really just the chain rule worn as a disguise. (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `So far, ${y} has always been served up neatly as ${y} = (some expression in ${x}): what we call an <b>explicit</b> function. But many curves refuse to cooperate. Take the circle ${X2} + ${Y2} = 25. Here ${y} is tangled up with ${x} in one equation, not isolated on its own. We could try to solve for ${y} = ±√(25${NB}−${NB}${X2}), but that’s clumsy and splits the curve into two pieces. There’s a far slicker way: <b>implicit differentiation.</b>`,
      },
      {
        t: 'p',
        html: `The core idea is a small but powerful mental shift: even though ${y} isn’t written as a formula in ${x}, it is secretly a function of ${x} along the curve. So we treat ${y} as a hidden function of ${x} and differentiate the entire equation, both sides, with respect to ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> whenever you differentiate a term containing ${y}, remember that ${y} is itself a function of ${x}, so the <b>chain rule</b> kicks in and tacks on a ${DYDX}. For instance, ${D}(${Y2}) = 2${y} · ${DYDX}, exactly as ${D}(box)<sup>2</sup> = 2(box) · (box)′ where the box is ${y}. A pure-${x} term like ${X2} differentiates normally to 2${x}; a ${y}-term always drags along its ${DYDX}. Once you’ve differentiated everything, you simply collect all the ${DYDX} terms on one side and solve for it algebraically.`,
      },
      {
        t: 'p',
        html: `For the circle ${X2} + ${Y2} = 25:<br>2${x} + 2${y}${DYDX} = 0 ⟹ ${DYDX} = −${fr(x, y)}.`,
      },
      {
        t: 'p',
        html: `Notice the answer involves both ${x} and ${y}: that’s normal and fine for implicit curves; it tells you the slope at any point (${x},${NB}${y}) on the circle.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Implicit differentiation assumes that near the point of interest the relation genuinely defines ${y} as a differentiable function of ${x} (true wherever the curve is smooth and not vertical). Where the tangent is vertical (e.g. the points (±5,${NB}0) on the circle, where ${y} = 0 makes ${DYDX} = −${fr(x, y)} blow up), ${DYDX} does not exist, and that’s the formula honestly reporting a vertical tangent.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>The governing principle:</b> differentiate both sides w.r.t. ${x}, applying the chain rule to every ${y}-term:`,
      },
      {
        t: 'formula',
        kicker: `Implicit differentiation of ${y}-terms`,
        main: `${D}[${y}<sup><i>n</i></sup>] = ${n}${y}<sup><i>n</i>−1</sup>${DYDX}<br>${D}[${f}(${y})] = ${f}′(${y})${DYDX}`,
        legend: [`${y} = a hidden function of ${x}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Mixed ${XY}-terms need the product rule too</b> (since both factors depend on ${x}):`,
      },
      {
        t: 'formula',
        kicker: 'Mixed <i>xy</i>-terms',
        main: `${D}(${XY}) = 1 · ${y} + ${x} · ${DYDX} = ${y} + ${x}${DYDX}`,
        legend: [`${y} = a hidden function of ${x}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>General template.</b> For a relation <i>F</i>(${x},${NB}${y}) = 0: 1. differentiate term by term w.r.t. ${x} (chain rule on ${y}-terms, product rule on mixed terms); 2. gather every ${DYDX} on one side; 3. factor and solve: ${DYDX} = (expression in ${x} and ${y}).<br>• ${DYDX}: the slope, generally a function of both ${x} and ${y}.`,
      },
      {
        t: 'p',
        html: `<b>Validity:</b> the relation must define ${y} as a differentiable function of ${x} locally (fails at vertical-tangent / singular points).`,
      },

      { t: 'part', title: 'Key procedure and derivation' },
      {
        t: 'p',
        html: `<b>Why each ${y}-term carries a ${DYDX}</b><br>A term like ${Y3} is really [${y}(${x})]<sup>3</sup>: a composite, with ${y}(${x}) as the inner function. By the chain rule,<br>${D}[${y}(${x})]<sup>3</sup> = 3[${y}(${x})]<sup>2</sup> · ${D}[${y}(${x})]<br>= 3${Y2}${DYDX}.`,
      },
      {
        t: 'p',
        html: `There is nothing new here beyond the chain rule: the only mental effort is remembering that ${y} is a function of ${x}, so it contributes its own derivative factor. Forgetting that factor is the entire failure mode of the topic.`,
      },
      {
        t: 'proc',
        title: 'Procedure: finding dy/dx implicitly',
        steps: [
          `Differentiate <b>both sides</b> of the equation w.r.t. ${x}.`,
          `For pure-${x} terms, differentiate as usual. For ${y}-terms, apply the chain rule (append ${DYDX}). For products like ${XY} or ${X2}${Y3}, apply the product rule.`,
          `Collect all terms containing ${DYDX} on the left; move everything else right.`,
          `Factor out ${DYDX} and divide to isolate it.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure: implicit second derivative</b><br>Differentiate the first implicit derivative again w.r.t. ${x} (chain/quotient rules as needed), then substitute the expression for ${DYDX} to write ${D2Y} in terms of ${x} and ${y}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find ${DYDX} if ${X2} + ${Y2} = ${a}<sup>2</sup>.`,
        steps: [`Differentiate both sides w.r.t. ${x} (chain rule on ${Y2}):<br>2${x} + 2${y}${DYDX} = 0`],
        ans: `${DYDX} = −${fr(x, y)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find ${DYDX} if ${X3} + ${Y3} = 3<i>axy</i> (the folium of Descartes).`,
        steps: [
          `Differentiate, using the chain rule on ${Y3} and the product rule on ${XY}:<br>3${X2} + 3${Y2}${DYDX} = 3${a}(${y} + ${x}${DYDX}).`,
          `Divide by 3 and gather ${DYDX} terms:<br>${X2} + ${Y2}${DYDX} = <i>ay</i> + <i>ax</i>${DYDX}<br>⟹ ${DYDX}(${Y2} − <i>ax</i>) = <i>ay</i> − ${X2}.`,
        ],
        ans: `${DYDX} = ${fr(`<i>ay</i> − ${X2}`, `${Y2} − <i>ax</i>`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Trap',
        q: `A student differentiates ${X2} + ${Y2} = 1 and writes 2${x} + 2${y} = 0. What went wrong?`,
        steps: [
          `<b>The trap.</b> The student differentiated ${Y2} as if ${y} were a constant, getting 2${y} instead of 2${y}${DYDX}. They <b>forgot that ${y} is a function of ${x}</b>: the defining sin of implicit differentiation. Their “answer” 2${x} + 2${y} = 0 isn’t even a derivative; it has no ${DYDX} in it.`,
          `<b>The fix.</b><br>2${x} + 2${y}${DYDX} = 0 ⟹ ${DYDX} = −${fr(x, y)}.`,
          `<b>Speed habit:</b> scan your differentiated equation: if it contains a ${y}-term but no ${DYDX}, you’ve dropped a chain-rule factor. Every differentiated ${y}-term must carry one.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `If ${X2} + ${Y2} = 1, find ${D2Y} in terms of ${y}.`,
        steps: [
          `From Example 1 (with ${a} = 1), the first derivative is ${DYDX} = −${fr(x, y)}. Differentiate again w.r.t. ${x} using the <b>quotient rule</b> (and remembering ${D}${y} = ${DYDX}):<br>${D2Y} = −[(1) · ${y} − ${x} · ${DYDX}] ÷ ${Y2}<br>= −[${y} − ${x}(−${fr(x, y)})] ÷ ${Y2}<br>= −(${y} + ${fr(X2, y)}) ÷ ${Y2}<br>= −${fr(`${Y2} + ${X2}`, Y3)}.`,
          `Finally use the original relation ${X2} + ${Y2} = 1:<br>${D2Y} = −${fr('1', Y3)}.`,
          `A beautiful collapse: the constraint lets the messy expression reduce to a clean −${fr('1', Y3)}.`,
        ],
        ans: `${D2Y} = −${fr('1', Y3)}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Find ${DYDX} if ${XY} = 1.`, a: `−${fr(y, x)} (or −${fr('1', X2)})` },
          { q: `<b>[CBSE]</b> Find ${DYDX} if ${X2} − ${XY} + ${Y2} = 7.`, a: fr(`${y} − 2${x}`, `2${y} − ${x}`) },
          { q: `<b>[JEE Main]</b> Find ${DYDX} if sin(${XY}) = ${x}.`, a: fr(`1 − ${y}${NB}cos(${XY})`, `${x}${NB}cos(${XY})`) },
          { q: `<b>[JEE Main]</b> Find ${DYDX} if ${y} = ${x}${NB}sin${NB}${y}.`, a: fr(`sin${NB}${y}`, `1 − ${x}${NB}cos${NB}${y}`) },
          {
            q: `<b>[JEE Advanced]</b> If ${x}√(1${NB}+${NB}${y}) + ${y}√(1${NB}+${NB}${x}) = 0 (with ${x}${NB}≠${NB}${y}), show that ${DYDX} = −${fr('1', `(1 + ${x})<sup>2</sup>`)}.`,
            a: `shown: squaring/simplifying the relation gives ${y} = −${fr(x, `1 + ${x}`)}, whose derivative is −${fr('1', `(1 + ${x})<sup>2</sup>`)}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For ${X2} + ${Y2} = 4, ${DYDX} =`,
        opts: [
          { label: `−${fr(x, y)}`, nudge: null },
          { label: `−${fr(y, x)}`, nudge: '<b>(b)</b>/<b>(c)</b> are sign/variable swaps.' },
          { label: fr(x, y), nudge: '<b>(b)</b>/<b>(c)</b> are sign/variable swaps.' },
          { label: `−${x}`, nudge: `<b>(d)</b> differentiates ${Y2} as 2${DYDX}, losing the ${y} (the chain-rule result is 2${y}${DYDX}).` },
        ],
        correct: 0,
        solution: `2${x} + 2${y}${DYDX} = 0 ⇒ ${DYDX} = −${fr(x, y)}.`,
      },
      {
        t: 'mcq',
        q: `When differentiating ${XY} with respect to ${x}, you get:`,
        opts: [
          { label: DYDX, nudge: `<b>(a)</b> loses the ${x}-factor entirely.` },
          { label: y, nudge: '<b>(b)</b> forgets the product rule’s second term.' },
          { label: `${y} + ${x}${DYDX}`, nudge: null },
          { label: `${x}${DYDX}`, nudge: '<b>(d)</b> forgets the first.' },
        ],
        correct: 2,
        solution: `Product rule: ${D}(${XY}) = 1 · ${y} + ${x} · ${DYDX}.`,
      },
      {
        t: 'mcq',
        q: `A student’s implicit derivative contains a ${y}-term but no ${DYDX} anywhere. This means:`,
        opts: [
          {
            label: 'the answer is correct',
            nudge: `<b>(a)</b> a correct implicit derivative carries a ${DYDX} on every differentiated ${y}-term; one with none is a slip, not a right answer.`,
          },
          { label: 'a chain-rule factor was dropped', nudge: null },
          {
            label: `${y} is constant`,
            nudge: `<b>(c)</b> ${y} varies with ${x} along the curve; treating it as constant is the very error that drops the factor.`,
          },
          {
            label: 'the curve is a line',
            nudge: `<b>(d)</b> the shape of the curve has nothing to do with it: even for a line, a differentiated ${y}-term carries ${DYDX}.`,
          },
        ],
        correct: 1,
        solution: `Every differentiated ${y}-term must carry a ${DYDX}; its absence signals a dropped chain factor: the hallmark implicit error.`,
      },
      {
        t: 'mcq',
        q: `For sin${NB}${y} = ${x}, ${DYDX} =`,
        opts: [
          { label: `cos${NB}${y}`, nudge: `<b>(a)</b> forgets to solve for ${DYDX}.` },
          { label: fr('1', `cos${NB}${y}`), nudge: null },
          { label: `−${fr('1', `cos${NB}${y}`)}`, nudge: '<b>(c)</b> invents a sign.' },
          { label: `sec${NB}${y}${NB}tan${NB}${y}`, nudge: '<b>(d)</b> is unrelated.' },
        ],
        correct: 1,
        solution: `Differentiate: cos${NB}${y}${NB}${DYDX} = 1 ⇒ ${DYDX} = ${fr('1', `cos${NB}${y}`)} (this is exactly how ${D}${NB}${of(SIN, x)} = ${F1_R1M} is derived).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forgetting the ${DYDX} on ${y}-terms.</b> The defining error. ${D}(${Y2}) = 2${y}${DYDX}, never just 2${y}.`,
          `<b>Forgetting the product rule on mixed terms.</b> ${D}(${XY}) = ${y} + ${x}${DYDX}, not ${DYDX} alone.`,
          `<b>Trying to pre-solve for ${y}.</b> Usually unnecessary and messy; differentiate the relation as it stands.`,
          `<b>Second-derivative shortcuts.</b> When finding ${D2Y}, you must substitute the first ${DYDX} back in, and may use the original relation to simplify.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Treat every ${y} as if it wore a little “(${x})” label: ${y} is ${y}(${x}). Then implicit differentiation is just the chain rule, and the ${DYDX} factors appear automatically. Final answers naturally involve both ${x} and ${y}; that’s expected, not a mistake.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `<b>Mindset:</b> ${y} is secretly ${y}(${x}); differentiate the whole equation w.r.t. ${x}.`, note: '' },
          { f: `<b>Every ${y}-term gets a ${DYDX}:</b> ${D}(${y}<sup><i>n</i></sup>) = ${n}${y}<sup><i>n</i>−1</sup>${DYDX}.`, note: '' },
          { f: `<b>Mixed terms use the product rule:</b> ${D}(${XY}) = ${y} + ${x}${DYDX}.`, note: '' },
          { f: `<b>Then</b> collect ${DYDX} terms, factor, and solve. Answer may involve ${x} and ${y}.`, note: '' },
          { f: `<b>Sanity check:</b> a differentiated ${y}-term with no ${DYDX} = dropped chain factor.`, note: '' },
        ],
        aids: [`“It’s just the chain rule in disguise: every ${y} owes a ${DYDX}.”`],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 333–338 ────────────────
  {
    n: '05',
    title: 'Derivatives of Inverse Trigonometric Functions',
    kalam: 'The secret is to simplify first using a trigonometric substitution, then differentiate the simple result.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `One of the highest-yield areas of the chapter, especially for JEE ${ESTIMATE}. <b>CBSE Boards</b> ask direct derivatives and one “simplify-by-substitution” problem (3–4 marks) ${ESTIMATE}. <b>JEE Main/Advanced</b> love the substitution problems where a fearsome-looking inverse-trig expression collapses to something trivial, if you know the trick (and respect the domain). (NEET does not test mathematics.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `An inverse trigonometric function answers the question “which angle gives this ratio?”: ${of(SIN, x)} is “the angle whose sine is ${x}.” To differentiate these, we don’t need new magic; we use <b>implicit differentiation</b>, which you’ve just met. If ${y} = ${of(SIN, x)}, then sin${NB}${y} = ${x}; differentiate both sides and solve for ${DYDX}. Out pops ${F1_R1M}. Every inverse-trig derivative is born this way.`,
      },
      {
        t: 'p',
        html: `But the real exam drama lies elsewhere. Examiners adore expressions like<br>${y} = ${TAN}(${F2X_1M}) or ${y} = ${SIN}(2${x}${R1MX2}),<br>which look monstrous to differentiate head-on. The secret is to <b>simplify first using a trigonometric substitution</b>, then differentiate the simple result.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> these expressions are double-angle formulas in disguise. If you let ${x} = ${TANTH}, then ${F2X_1M} = ${fr(`2${NB}${TANTH}`, `1 − tan<sup>2</sup>${NB}${th}`)} = ${TAN2TH}. So<br>${TAN}(${F2X_1M}) = ${TAN}(${TAN2TH})<br>= 2${th} = 2${NB}${of(TAN, x)},<br>and differentiating 2${NB}${of(TAN, x)} is a one-liner: ${F2_1P}. The brutal-looking problem melts away. The art is recognising which substitution unlocks the double-angle pattern: ${x} = ${TANTH} for ${fr(`2${x}`, `1 ∓ ${X2}`)} and ${F1M_1P} forms; ${x} = ${SINTH} (or ${COSTH}) for ${R1MX2} forms.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions (read carefully: this is the exam trap).</b> The identity ${TAN}(${TAN2TH}) = 2${th} is only valid when 2${th} lies in the principal range of ${TAN}, i.e. ${TANB}. Outside that, ${TAN}(${TAN2TH}) ≠ 2${th}: it differs by a constant on each piece. So these simplifications are <b>piecewise</b>, valid only on a restricted range of ${x}. For differentiation this usually doesn’t change the derivative within a valid interval (a constant has zero derivative), but you must state the range, and at the breakpoints the function can be non-differentiable. Also note ${D}${NB}${of(SEC, x)} and ${D}${NB}${of(CSC, x)} carry an ${ABSX} (domain ${ABSX}${NB}>${NB}1).`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>The six standard inverse-trig derivatives:</b>' },
      {
        t: 'formula',
        kicker: 'The six standard inverse-trig derivatives',
        main: `${D}${NB}${of(SIN, x)} = ${F1_R1M} (${ABSX}${NB}<${NB}1)<br>${D}${NB}${of(COS, x)} = ${fr('−1', R1MX2)} (${ABSX}${NB}<${NB}1)<br>${D}${NB}${of(TAN, x)} = ${F1_1P}<br>${D}${NB}${of(COT, x)} = ${fr('−1', `1 + ${X2}`)}<br>${D}${NB}${of(SEC, x)} = ${F1_ASEC} (${ABSX}${NB}>${NB}1)<br>${D}${NB}${of(CSC, x)} = ${fr('−1', `${ABSX}${RX2M1}`)} (${ABSX}${NB}>${NB}1)`,
        legend: [`${x} = the argument, in the domain shown in brackets`],
        note: null,
      },
      { t: 'p', html: '<b>Key substitution identities</b> (each on its valid range):' },
      {
        t: 'formula',
        kicker: 'Key substitution identities',
        main: `2${NB}${of(TAN, x)} = ${TAN}${NB}${F2X_1M} (${ABSX}${NB}<${NB}1)<br>2${NB}${of(TAN, x)} = ${SIN}${NB}${F2X_1P} (${ABSX}${NB}≤${NB}1)<br>2${NB}${of(TAN, x)} = ${COS}${NB}${F1M_1P} (${x}${NB}≥${NB}0)<br>2${NB}${of(SIN, x)} = ${SIN}(2${x}${R1MX2}) (${ABSX}${NB}≤${NB}${IR2})<br>3${NB}${of(SIN, x)} = ${SIN}(3${x} − 4${X3}) (${ABSX}${NB}≤${NB}${H})`,
        legend: [`${x} = the argument, in the range shown in brackets`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Useful substitutions:</b> ${x} = ${TANTH} (for 1 ± ${X2}, ${F2X_1M} patterns); ${x} = ${SINTH} or ${COSTH} (for ${R1MX2} patterns); ${x} = sec${NB}${th} (for ${RX2M1}).`,
      },
      {
        t: 'p',
        html: `<b>Note:</b> the cofunction pairs differ only in sign: ${COS}, ${COT}, ${CSC} carry the minus.`,
      },

      { t: 'part', title: 'Key derivations and procedure' },
      {
        t: 'p',
        html: `<b>Derivation: ${D}${NB}${of(TAN, x)} = ${F1_1P}</b><br>Let ${y} = ${of(TAN, x)}, so tan${NB}${y} = ${x}.<br>Differentiate both sides w.r.t.${NB}${x} (implicit + chain rule on tan${NB}${y}):<br>sec<sup>2</sup>${NB}${y}${NB}${DYDX} = 1 ⟹ ${DYDX} = ${fr('1', `sec<sup>2</sup>${NB}${y}`)}<br>= ${fr('1', `1 + tan<sup>2</sup>${NB}${y}`)} = ${F1_1P}. ■`,
      },
      {
        t: 'p',
        html: `<b>Why the last step works:</b> sec<sup>2</sup>${NB}${y} = 1 + tan<sup>2</sup>${NB}${y}, and tan${NB}${y} = ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation: ${D}${NB}${of(SIN, x)} = ${F1_R1M}</b><br>Let ${y} = ${of(SIN, x)}, so sin${NB}${y} = ${x}, with ${y} ∈ ${SINB}. Differentiate:<br>cos${NB}${y}${NB}${DYDX} = 1 ⟹ ${DYDX} = ${fr('1', `cos${NB}${y}`)}<br>= ${fr('1', `√(1 − sin<sup>2</sup>${NB}${y})`)} = ${F1_R1M}.<br>We take +√ because cos${NB}${y}${NB}≥${NB}0 on the principal range. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: the substitution method',
        steps: [
          `<b>Spot the pattern.</b> Recognise a double/triple-angle disguise (${F2X_1M}, 2${x}${R1MX2}, ${F1M_1P}, 3${x} − 4${X3}, …).`,
          `<b>Substitute</b> the matching trig form (${x} = ${TANTH}, ${SINTH}, …), so ${th} = ${of(TAN, x)} (etc.).`,
          `<b>Collapse</b> the inner expression to a single trig of a multiple angle, then cancel the inverse: ${TAN}(${TAN2TH}) = 2${th} (within range).`,
          `<b>Back-substitute</b> ${th} and differentiate the now-simple expression. State the valid range of ${x}.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Differentiate ${y} = ${TAN}(2${x}).`,
        steps: [`Chain rule with inner 2${x}:<br>${y}′ = ${fr('1', '1 + (2<i>x</i>)<sup>2</sup>')} · ${D}(2${x})`],
        ans: `${y}′ = ${fr('2', `1 + 4${X2}`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Differentiate ${y} = ${TAN}(${F2X_1M}) for −1${NB}<${NB}${x}${NB}<${NB}1.`,
        steps: [
          `Differentiating head-on is painful. <b>Substitute</b> ${x} = ${TANTH}, so ${th} = ${of(TAN, x)} and ${th} ∈ ${iv(`−${P4}`, P4, '(', ')')} for this range of ${x}. Then<br>${F2X_1M} = ${fr(`2${NB}${TANTH}`, `1 − tan<sup>2</sup>${NB}${th}`)} = ${TAN2TH}<br>⟹ ${y} = ${TAN}(${TAN2TH}) = 2${th} = 2${NB}${of(TAN, x)}.`,
          `(2${th} ∈ ${TANB}, so the cancellation is valid.) Now differentiate the simple form:<br>${y}′ = 2 · ${F1_1P}`,
        ],
        ans: F2_1P,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Trap',
        q: `Differentiate ${y} = ${SIN}(2${x}${R1MX2}), and state where your answer is valid.`,
        steps: [
          `<b>Substitute</b> ${x} = ${SINTH}, so ${th} = ${of(SIN, x)}. Then 2${x}${R1MX2} = 2${NB}${SINTH}${NB}${COSTH} = sin${NB}2${th}, giving ${y} = ${SIN}(sin${NB}2${th}) = 2${th} = 2${NB}${of(SIN, x)}, hence<br>${y}′ = ${fr('2', R1MX2)}.`,
          `<b>The trap.</b> The identity holds <b>only for</b> −${IR2}${NB}≤${NB}${x}${NB}≤${NB}${IR2} (where 2${th} ∈ ${SINB}, the principal range of ${SIN}), so ${y}′ = ${fr('2', R1MX2)} only for ${ABSX}${NB}<${NB}${IR2}. For ${IR2}${NB}<${NB}${x}${NB}≤${NB}1 the identity becomes ${y} = π − 2${NB}${of(SIN, x)}, and for −1${NB}≤${NB}${x}${NB}<${NB}−${IR2} it becomes ${y} = −π − 2${NB}${of(SIN, x)}; on both, ${y}′ = −${fr('2', R1MX2)} (for ${ABSX}${NB}<${NB}1): opposite sign! At ${x} = ±${IR2} the pieces meet at a corner. A student who writes a single formula for all ${x} is wrong on the outer parts of the domain.`,
          '<b>Lesson:</b> with inverse-trig substitutions, always check whether the multiple angle stays inside the principal range; the simplification (and even the sign of the derivative) is piecewise.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Differentiate ${y} = ${TAN}(${fr(`${R1PX2} − 1`, x)}).`,
        steps: [
          `<b>Substitute</b> ${x} = ${TANTH}, so ${R1PX2} = sec${NB}${th} and ${th} = ${of(TAN, x)}:<br>${fr(`${R1PX2} − 1`, x)} = ${fr(`sec${NB}${th} − 1`, TANTH)}<br>= (${fr('1', COSTH)} − 1) ÷ ${fr(SINTH, COSTH)}<br>= ${fr(`1 − ${COSTH}`, SINTH)}.`,
          `Use the half-angle identities 1 − ${COSTH} = 2${NB}sin<sup>2</sup>${NB}${TH_2} and ${SINTH} = 2${NB}sin${NB}${TH_2}${NB}cos${NB}${TH_2}:<br>${fr(`1 − ${COSTH}`, SINTH)} = 2${NB}sin<sup>2</sup>${NB}${TH_2} ÷ [2${NB}sin${NB}${TH_2}${NB}cos${NB}${TH_2}]<br>= tan${NB}${TH_2}.`,
          `Therefore ${y} = ${TAN}(tan${NB}${TH_2}) = ${TH_2} = ${H}${NB}${of(TAN, x)}, and<br>${y}′ = ${H} · ${F1_1P} = ${fr('1', `2(1 + ${X2})`)}.`,
          'A genuinely intimidating expression reduced to a clean half: the payoff of the substitution method.',
        ],
        ans: fr('1', `2(1 + ${X2})`),
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `<b>[CBSE]</b> Differentiate ${y} = ${COS}(3${x}).`, a: fr('−3', `√(1${NB}−${NB}9${X2})`) },
          { q: `<b>[CBSE]</b> Differentiate ${y} = ${SIN}(${X2}).`, a: fr(`2${x}`, `√(1${NB}−${NB}${x}<sup>4</sup>)`) },
          {
            q: `<b>[JEE Main]</b> Differentiate ${y} = ${SIN}(${F2X_1P}) for −1${NB}<${NB}${x}${NB}<${NB}1.`,
            a: `${F2_1P} (substitute ${x} = ${TANTH}; = 2${NB}${of(TAN, x)} here)`,
          },
          {
            q: `<b>[JEE Main]</b> Differentiate ${y} = ${TAN}(${fr(`cos${NB}${x}`, `1 + sin${NB}${x}`)}).`,
            a: `−${H} (write ${TAN}(tan(${P4} − ${X_2})) = ${P4} − ${X_2} on −${P2}${NB}<${NB}${x}${NB}<${NB}${fr('3π', '2')}; elsewhere it differs by a multiple of π, with the same derivative)`,
          },
          {
            q: `<b>[JEE Advanced]</b> Differentiate ${y} = ${COS}(${F1M_1P}) for ${XPOS}, and comment on ${XNEG}.`,
            a: `${F2_1P} for ${XPOS} (it equals 2${NB}${of(TAN, x)}); for ${XNEG} it equals −2${NB}${of(TAN, x)}, so ${y}′ = −${F2_1P}: sign flips.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${D}${NB}${of(SIN, x)} =`,
        opts: [
          { label: F1_1P, nudge: `<b>(a)</b> is ${D}${NB}${of(TAN, x)}.` },
          { label: F1_R1M, nudge: null },
          { label: fr('−1', R1MX2), nudge: `<b>(c)</b> is ${D}${NB}${of(COS, x)}.` },
          { label: fr('−1', `1 + ${X2}`), nudge: `<b>(d)</b> is ${D}${NB}${of(COT, x)}.` },
        ],
        correct: 1,
        solution: `Standard result (derived via sin${NB}${y} = ${x}). Table confusion is the trap.`,
      },
      {
        t: 'mcq',
        q: `${D}${NB}${TAN}(${F2X_1M}) for ${ABSX}${NB}<${NB}1 equals:`,
        opts: [
          { label: fr('2', `1 − ${X2}`), nudge: '<b>(a)</b>/<b>(d)</b> come from grinding the quotient rule and slipping.' },
          { label: F2_1P, nudge: null },
          { label: F1_1P, nudge: '<b>(c)</b> forgets the factor 2.' },
          { label: fr('2', `(1 − ${X2})<sup>2</sup>`), nudge: '<b>(a)</b>/<b>(d)</b> come from grinding the quotient rule and slipping.' },
        ],
        correct: 1,
        solution: `The expression is 2${NB}${of(TAN, x)}, so the derivative is ${F2_1P}.`,
      },
      {
        t: 'mcq',
        q: `The simplification ${SIN}(2${x}${R1MX2}) = 2${NB}${of(SIN, x)} holds for:`,
        opts: [
          {
            label: `all ${x} ∈ ${iv('−1', '1')}`,
            nudge: '<b>(a)</b> ignores the principal-range restriction: the classic over-extension trap.',
          },
          { label: `${x} ∈ ${iv(`−${IR2}`, IR2)}`, nudge: null },
          {
            label: `${x}${NB}≥${NB}0 only`,
            nudge: `<b>(c)</b> the identity also holds for negative ${x} down to −${IR2}; the sign of ${x} is not the condition.`,
          },
          {
            label: `${x} ∈ ${iv('−1', '1', '(', ')')} except 0`,
            nudge: `<b>(d)</b> it fails for ${IR2}${NB}<${NB}${ABSX}${NB}<${NB}1, and ${x} = 0 is no exception (both sides are 0 there).`,
          },
        ],
        correct: 1,
        solution: `It needs 2${th} = 2${NB}${of(SIN, x)} to stay in ${SINB}, i.e. ${of(SIN, x)} ∈ ${iv(`−${P4}`, P4)}, i.e. ${ABSX}${NB}≤${NB}${IR2}.`,
      },
      {
        t: 'mcq',
        q: `${D}${NB}${of(SEC, x)} =`,
        opts: [
          { label: fr('1', `${x}${RX2M1}`), nudge: `<b>(a)</b> drops the absolute value: a real error for ${x}${NB}<${NB}−1.` },
          { label: F1_ASEC, nudge: null },
          { label: fr('1', RX2M1), nudge: `<b>(c)</b> drops the ${x}-factor.` },
          { label: fr('1', `${ABSX}${R1MX2}`), nudge: '<b>(d)</b> has the wrong radicand.' },
        ],
        correct: 1,
        solution: `The ${ABSX} is essential (domain ${ABSX}${NB}>${NB}1).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Ignoring principal-range domains.</b> Writing one simplified formula for all ${x}. These identities (and sometimes the derivative’s sign) are piecewise: check where the multiple angle stays in range.`,
          `<b>Table sign mix-ups.</b> ${COS}, ${COT}, ${CSC} carry minus signs; pairing them wrong with ${SIN}, ${TAN}, ${SEC} is common.`,
          `<b>Dropping ${ABSX} in ${SEC}, ${CSC}.</b> It matters for ${x}${NB}<${NB}−1.`,
          `<b>Brute-forcing instead of substituting.</b> Grinding the quotient/chain rule on ${F2X_1M} wastes time and invites algebra errors; substitution is far safer.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Train your eye to spot double-angle disguises: ${F2X_1P} and ${F1M_1P} scream “${x} = ${TANTH}”; 2${x}${R1MX2} screams “${x} = ${SINTH}”; ${RX2M1} screams “${x} = sec${NB}${th}”. Recognising the pattern turns a 5-minute grind into a 30-second answer, but always finish by stating the valid range.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `${D}${NB}${of(SIN, x)} = ${F1_R1M},<br>${D}${NB}${of(TAN, x)} = ${F1_1P},<br>${D}${NB}${of(SEC, x)} = ${F1_ASEC}.`,
            note: '',
          },
          { f: `<b>Cofunctions (</b>${COS}, ${COT}, ${CSC}<b>) =</b> same magnitude, <b>minus</b> sign.`, note: '' },
          {
            f: `<b>Substitution patterns:</b> ${F2X_1M}, ${F1M_1P} ⇒ ${x} = ${TANTH}; 2${x}${R1MX2} ⇒ ${x} = ${SINTH}; ${RX2M1} ⇒ ${x} = sec${NB}${th}.`,
            note: '',
          },
          {
            f: `<b>Golden identities:</b> 2${NB}${of(TAN, x)} = ${TAN}${NB}${F2X_1M}<br>= ${SIN}${NB}${F2X_1P}<br>= ${COS}${NB}${F1M_1P} (all three together for 0${NB}≤${NB}${x}${NB}<${NB}1).`,
            note: '',
          },
          { f: '<b>Always state the valid range</b>', note: 'the simplification (and derivative sign) is piecewise.' },
        ],
        aids: ['“Substitute, collapse the double angle, then differentiate, and mind the range.”'],
      },
    ],
  },
];
