import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 03–05, pp. 402–418 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Subtopic 03:
 * Maxima and Minima" (pp. 402–411), then its "Appendix A: Tangents and Normals
 * (…)" (pp. 412–415) and "Appendix B: Approximations and Differentials (…)"
 * (pp. 416–418), numbered on as Topics 04 and 05 (their letters would clash with
 * the addenda's); the Additional Topics part starts on p. 419. Topic 03 opens
 * with its "Exam Relevance:" box as a part of its own, then is split at its
 * Sections 1 to 8, titled from their own names ("Cheat Sheet Box" is the part
 * "Cheat sheet"). The appendices are split at their own run-in headings, their
 * "Cheat Sheet:" box the part "Cheat sheet". Figures 6.5 (p. 405), 6.6 (p. 408,
 * on Example 4) and 6.7 (p. 414, on Appendix A's Example 3). d upright in
 * d<i>y</i>/d<i>x</i>; every fraction stacked (<frac>); a fraction inside a
 * fraction's numerator or denominator written with ÷; no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const f = I('f');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const r = I('r');
const x = I('x');
const y = I('y');
const R = I('R');
const V = I('V');
const th = I('θ');

const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
const rel = (l: string, op: string, rr: string) => `${l}${NB}${op}${NB}${rr}`;
/** Intervals and pairs, the comma glued. */
const CI = (lo: string, hi: string) => `[${lo},${NB}${hi}]`;
const OI = (lo: string, hi: string) => `(${lo},${NB}${hi})`;
const AB = CI(a, b);
const OAB = OI(a, b);

const fp = `${f}′`;
const fpp = `${f}″`;
const fx = `${f}(${x})`;
const fc = `${f}(${c})`;
const fpx = `${fp}(${x})`;
const fppx = `${fpp}(${x})`;
const fpc = `${fp}(${c})`;
const fppc = `${fpp}(${c})`;
const X2 = sq(x);
const X3 = cube(x);
const X4 = `${x}<sup>4</sup>`;
const R2 = sq(R);
const R3 = cube(R);
const H2 = sq(h);
const NBHD = OI(`${c} − ${h}`, `${c} + ${h}`);

/** d/dx, d upright. */
const DYDX = fr(`d${y}`, `d${x}`);
const DXDY = fr(`d${x}`, `d${y}`);
const DY = `d${y}`;
const DX = `d${x}`;
const DYY = fr(DY, y);
const DXX = fr(DX, x);
const Dx = `Δ${x}`;
const Dy = `Δ${y}`;

const P2 = fr('π', '2');
const P4 = fr('π', '4');
const HALF = fr('1', '2');
const R3_ = '√3';
const VMAX = `${V}<sub>max</sub>`;

const x0 = `${x}<sub>0</sub>`;
const y0 = `${y}<sub>0</sub>`;
const P0 = OI(x0, y0);
const m1 = `${m}<sub>1</sub>`;
const m2 = `${m}<sub>2</sub>`;
const fpx0 = `${fp}(${x0})`;
const INV_M = fr('1', m);
const ANGLE = abs(fr(`${m1} − ${m2}`, `1 + ${m1}${m2}`));
const TANGENT = `${y} − ${y0} = ${m}(${x} − ${x0})`;
const NORMAL = `${y} − ${y0} = −${INV_M}(${x} − ${x0})`;
const LINAPP = `${f}(${x} + ${Dx}) ≈ ${fx} + ${fpx}${NB}${Dx}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 402–411 ────────────────
  {
    n: '03',
    title: 'Maxima and Minima',
    kalam: 'A local maximum is a hilltop: higher than everything immediately around it, even if a taller peak sits 50 km down the road.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `One of the highest-yield subtopics in the chapter. CBSE Boards reliably carry a 3–5 mark optimization word problem (the famous “open box,” “least material,” or “largest area” question) plus a short local-extremum problem ${ESTIMATE}. JEE Main asks 2–3 questions yearly ${ESTIMATE}: local extrema, absolute extrema on an interval, or a parameter condition. JEE Advanced uses it for tough constrained-optimization and geometry problems.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Think of a road trip across the Western Ghats. As you drive, your altitude rises and falls: peaks (hilltops) and troughs (valleys) all along the way. A <b>local maximum</b> is a hilltop: higher than everything immediately around it, even if a taller peak sits 50 km down the road. A <b>local minimum</b> is a valley floor: lower than its immediate surroundings. The tallest point on your entire journey is the <b>absolute (global) maximum</b>, and the lowest point overall is the <b>absolute minimum</b>. That single distinction, “tallest nearby” versus “tallest overall”, is the heart of this topic.',
      },
      {
        t: 'p',
        html: `Now bring in the derivative. At the exact instant you crest a hilltop, the road is momentarily <b>flat</b>: your slope is zero. Same at the bottom of a valley. So at a smooth peak or trough, ${fpx}${NB}=${NB}0. These flat spots, together with any points where the road suddenly kinks (slope undefined), are the <b>critical points</b>: the only candidates for local extrema.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the derivative is a direction sign. Approaching a hilltop you’re going up (${rel(fp, '>', '0')}); just past it you’re going down (${rel(fp, '<', '0')}). The slope <b>flips from + to −</b>. At a valley it flips the other way, <b>− to +</b>. That flip is what actually certifies a peak or trough: this is the <b>First Derivative Test</b>. Alternatively, at a hilltop the road is curving downward (concave down, ${rel(fpp, '<', '0')}); at a valley it curves upward (${rel(fpp, '>', '0')}). Reading the curvature is the <b>Second Derivative Test</b>.`,
      },
      {
        t: 'p',
        html: `But here’s the trap that catches students every exam: <b>a flat spot is not always a peak or a valley.</b> Consider ${fx} = ${X3}. At ${x}${NB}=${NB}0 the slope is zero, the road goes flat for an instant, yet you keep climbing right through it. The slope is + before and + after; it never flipped. That point is a <b>point of inflection</b>, not an extremum. So ${fpc}${NB}=${NB}0 is necessary but not sufficient for a local extremum.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & caveats:</b><br>1. <b>Critical point ≠ extremum.</b> You must confirm a sign-flip (first test) or a non-zero second derivative (second test). A bare ${fpc}${NB}=${NB}0 proves nothing.<br>2. <b>The second-derivative test can be silent.</b> If ${fppc}${NB}=${NB}0, the test is inconclusive: fall back to the first-derivative test. (E.g. ${X4} at the origin: ${fpp}(0)${NB}=${NB}0, yet it is clearly a minimum.)<br>3. <b>Local and absolute are different questions.</b> On a closed interval ${AB}, the absolute extremum may sit at an <b>endpoint</b>, where the derivative need not be zero at all.<br>4. <b>Endpoints and corners host extrema too.</b> Non-differentiable points (like the vertex of ${abs(x)}) can be minima: always include them among the critical points.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Local maximum / minimum.</b> A point ${c} in the interior of the domain of ${f} is a point of<br>local maximum if ∃${NB}${h}${NB}>${NB}0 such that ${fc} ≥ ${fx} ∀${x} ∈ ${NBHD},<br>local minimum if ∃${NB}${h}${NB}>${NB}0 such that ${fc} ≤ ${fx} ∀${x} ∈ ${NBHD}.<br>The corresponding ${fc} is the local maximum / minimum <b>value</b>.`,
      },
      {
        t: 'p',
        html: `<b>Absolute (global) extremum on ${AB}.</b><br>${f} has absolute maximum at ${c} ⟺ ${fx} ≤ ${fc} ∀${x} ∈ ${AB},<br>${f} has absolute minimum at ${d} ⟺ ${fx} ≥ ${f}(${d}) ∀${x} ∈ ${AB}.`,
      },
      {
        t: 'p',
        html: `<b>Critical point.</b> A point ${c} in the domain of ${f} where ${fpc}${NB}=${NB}0 <b>or</b> ${fpc} does not exist.`,
      },
      {
        t: 'p',
        html: `<b>First Derivative Test.</b> Let ${c} be a critical point of a continuous ${f}. As ${x} increases through ${c}:`,
      },
      {
        t: 'formula',
        kicker: 'First Derivative Test',
        main: `${fp} ∶ (+) → (−) ⇒ ${c} is a local maximum<br>${fp} ∶ (−) → (+) ⇒ ${c} is a local minimum<br>${fp} does not change sign<br>⇒ no extremum at ${c}`,
        legend: [`${c} = candidate point (a critical point of a continuous ${f})`, `${fpx} = first derivative (slope)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Second Derivative Test.</b> Let ${f} be twice differentiable at ${c} with ${fpc}${NB}=${NB}0. Then`,
      },
      {
        t: 'formula',
        kicker: 'Second Derivative Test',
        main: `${fppc} < 0 ⇒ local maximum at ${c}<br>${fppc} > 0 ⇒ local minimum at ${c}<br>${fppc} = 0 ⇒ test fails (revert to First Derivative Test)`,
        legend: [`${c} = candidate point (where ${fpc}${NB}=${NB}0)`, `${fppx} = second derivative (curvature)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Symbols.</b> ${f}: the function; ${c}, ${d}: candidate points; ${fpx}: first derivative (slope); ${fppx}: second derivative (curvature); ${h}: a small positive radius; ${AB}: closed interval of interest. (Pure-mathematical quantities: no SI units, unless a problem attaches physical meaning such as a volume in cm<sup>3</sup>.)`,
      },
      {
        t: 'p',
        html: `<b>Conditions of applicability.</b> The second test requires ${fpc}${NB}=${NB}0 and ${f} twice differentiable at ${c} (so it classifies interior smooth turning points only); the first test needs only a critical point of a continuous ${f}, so it also handles corners such as the vertex of ${abs(x)}. Neither test sees endpoints: for absolute extrema on ${AB} you must use the working rule below.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'CBSE does not require a formal proof of these tests (the rigorous argument leans on the Mean Value Theorem of Chapter 5, Topic 07, which the rationalised NCERT book and the current CBSE syllabus no longer include; JEE Advanced still uses it). What is examined is fluent application. Three procedures cover almost every question.',
      },
      {
        t: 'proc',
        title: 'A) Finding local extrema (Second Derivative Test: fastest when f″ is easy)',
        steps: [
          `<b>Differentiate and find critical points.</b> Solve ${fpx}${NB}=${NB}0; also note where ${fp} is undefined. <b>Why:</b> extrema can only occur where the slope vanishes or breaks.`,
          `<b>Compute ${fpp} at each critical point.</b> <b>Why:</b> curvature instantly classifies a smooth turning point: concave down is a peak, concave up is a trough.`,
          `<b>Classify.</b> ${fppc} < 0 ⇒ max; ${fppc} > 0 ⇒ min; ${fppc} = 0 ⇒ inconclusive, switch to the sign-change (first) test. <b>Why:</b> a vanishing second derivative gives no curvature information.`,
          `<b>Report the value.</b> Substitute ${c} back into ${f} to state the extremum value, not just its location.`,
        ],
      },
      { t: 'fig', id: 'm12-06-fig-6.5' },
      {
        t: 'proc',
        title: 'B) Finding absolute extrema on a closed interval [a, b] (Working Rule)',
        steps: [
          `<b>Find all critical points of ${f} that lie inside ${OAB}.</b> <b>Why:</b> interior peaks/troughs are candidates.`,
          `<b>Evaluate ${f} at every critical point AND at both endpoints ${a} and ${b}.</b> <b>Why:</b> on a closed interval the global extreme can sit at an endpoint even when the slope there is non-zero: this is the step most students forget.`,
          '<b>Compare the list.</b> The largest value is the absolute maximum; the smallest is the absolute minimum. <b>Why:</b> the global extreme is simply the winner of a finite shortlist.',
        ],
      },
      {
        t: 'proc',
        title: 'C) Optimization word problems (the application form of B/A)',
        steps: [
          '<b>Name variables and write the quantity to optimize as a function of one variable</b>, using any constraint to eliminate the others. <b>Why:</b> calculus tools act on a single-variable function.',
          '<b>State the feasible domain</b> (lengths positive, etc.). <b>Why:</b> it tells you which critical roots to keep and whether endpoints matter.',
          `<b>Differentiate, solve ${fp}${NB}=${NB}0, and reject roots outside the domain.</b> <b>Why:</b> a root giving a negative or zero dimension is physically meaningless.`,
          '<b>Confirm max vs. min</b> (second-derivative or sign test) and answer the question actually asked (often a value, not the variable).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the local maximum and local minimum values of ${fx} = 2${X3} − 15${X2} + 36${x} + 10.`,
        steps: [
          `${fpx} = 6${X2} − 30${x} + 36<br>= 6(${x} − 2)(${x} − 3) ⇒ critical points ${x} = 2,${NB}3.<br>${fppx} = 12${x} − 30.`,
          `At ${x}${NB}=${NB}2: ${fpp}(2) = −6 < 0 ⇒ <b>local maximum</b>, value ${f}(2) = 16 − 60 + 72 + 10 = 38.`,
          `At ${x}${NB}=${NB}3: ${fpp}(3) = 6 > 0 ⇒ <b>local minimum</b>, value ${f}(3) = 54 − 135 + 108 + 10 = 37.`,
        ],
        ans: `Local maximum value 38 at ${x}${NB}=${NB}2; local minimum value 37 at ${x}${NB}=${NB}3.`,
      },
      {
        t: 'ex',
        tag: 'CBSE Boards HOTS / Application',
        q: `A square sheet of tin of side 18 cm has a small square of side ${x} cut from each corner; the flaps are folded up to form an open box. Find ${x} that maximizes the volume.`,
        steps: [
          `After cutting, the base is (18 − 2${x}) by (18 − 2${x}) and the height is ${x}, so<br>${V}(${x}) = ${x}(18 − 2${x})<sup>2</sup>, feasible domain 0${NB}<${NB}${x}${NB}<${NB}9.`,
          `Differentiate (product rule):<br>${V}′(${x}) = (18 − 2${x})<sup>2</sup> + ${x} · 2(18 − 2${x})(−2)<br>= (18 − 2${x})[(18 − 2${x}) − 4${x}]<br>= (18 − 2${x})(18 − 6${x}).`,
          `Set ${V}′(${x}) = 0: ${x}${NB}=${NB}9 (<b>rejected</b>: it lies on the boundary and gives ${V}${NB}=${NB}0) or ${x}${NB}=${NB}3.`,
          `<b>Check:</b> for ${x} just below 3, ${V}′${NB}>${NB}0; just above 3, ${V}′${NB}<${NB}0, so ${V} has a <b>maximum</b> at ${x}${NB}=${NB}3.`,
          `${V}(3) = 3(18 − 6)<sup>2</sup> = 3(12)<sup>2</sup> = 432 cm<sup>3</sup>.`,
          `(The marks-losing step is keeping ${x}${NB}=${NB}9; always test feasibility.)`,
        ],
        ans: `Cut ${x}${NB}=${NB}3 cm squares; maximum volume 432 cm<sup>3</sup>.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the absolute maximum and minimum values of ${fx} = 3${X4} − 8${X3} + 12${X2} − 48${x} + 25 on ${CI('0', '3')}.`,
        steps: [
          `${fpx} = 12${X3} − 24${X2} + 24${x} − 48<br>= 12(${X3} − 2${X2} + 2${x} − 4)<br>= 12(${x} − 2)(${X2} + 2).`,
          `Since ${X2} + 2 > 0 always, the only critical point is ${x}${NB}=${NB}2, which lies in ${OI('0', '3')}. Apply the working rule: evaluate at the critical point <b>and</b> both endpoints:<br>${f}(0) = 25,<br>${f}(2) = 48 − 64 + 48 − 96 + 25 = −39,<br>${f}(3) = 243 − 216 + 108 − 144 + 25 = 16.`,
        ],
        ans: `Absolute maximum = 25 at ${x}${NB}=${NB}0 (an endpoint!); absolute minimum = −39 at ${x}${NB}=${NB}2.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm12-06-fig-6.6',
        q: `Find the height of the cylinder of greatest volume that can be inscribed in a sphere of radius ${R}, and find that maximum volume.`,
        steps: [
          `Let the cylinder have base radius ${r} and height ${h}. Its axis passes through the sphere’s centre, so the half-height and radius satisfy<br>${sq(r)} + (${fr(h, '2')})<sup>2</sup> = ${R2} ⇒ ${sq(r)} = ${R2} − ${fr(H2, '4')}.`,
          `Volume as a single-variable function of ${h} (feasible domain 0${NB}<${NB}${h}${NB}<${NB}2${R}):<br>${V}(${h}) = π${sq(r)}${h} = π(${R2} − ${fr(H2, '4')})${h}<br>= π(${R2}${h} − ${fr(cube(h), '4')}).`,
          `${V}′(${h}) = π(${R2} − ${fr(`3${H2}`, '4')}) = 0<br>⇒ ${H2} = ${fr(`4${R2}`, '3')} ⇒ ${h} = ${fr(`2${R}`, R3_)}.`,
          `<b>Curvature check:</b> ${V}″(${h}) = π(−${fr(`3${h}`, '2')}) < 0, confirming a <b>maximum</b>. Then<br>${VMAX} = π(${R2} · ${fr(`2${R}`, R3_)} − ${fr('1', '4')} · ${fr(`8${R3}`, `3${R3_}`)})<br>= π(${fr(`2${R3}`, R3_)} − ${fr(`2${R3}`, `3${R3_}`)})<br>= ${fr(`4π${R3}`, `3${R3_}`)} = ${fr(`4${R3_}π${R3}`, '9')}.`,
        ],
        ans: `Height ${h} = ${fr(`2${R}`, R3_)}, maximum volume ${fr(`4π${R3}`, `3${R3_}`)}.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the local maximum and minimum values of ${fx} = ${X3} − 6${X2} + 9${x} + 15.`,
            a: `Local max 19 at ${x}${NB}=${NB}1, local min 15 at ${x}${NB}=${NB}3.`,
          },
          {
            q: `<b>[CBSE]</b> Find the absolute maximum and minimum values of ${fx} = ${X3} − 3${x} on ${CI('0', '2')}.`,
            a: `Abs max 2 at ${x}${NB}=${NB}2, abs min −2 at ${x}${NB}=${NB}1.`,
          },
          {
            q: `<b>[JEE Main]</b> If ${fx} = ${X3} + ${a}${X2} + ${b}${x} + ${c} has local extrema at ${x}${NB}=${NB}1 and ${x}${NB}=${NB}2, find ${a} and ${b}.`,
            a: `${a} = −${fr('9', '2')}, ${b} = 6.`,
          },
          {
            q: '<b>[JEE Main]</b> Two positive numbers have sum 24. Find them so that the product of one number and the square of the other is maximum.',
            a: '8 and 16 (with 16<sup>2</sup>).',
          },
          {
            q: `<b>[JEE Advanced]</b> Show that the right circular cone of greatest volume inscribed in a sphere of radius ${R} has height ${fr(`4${R}`, '3')}, and find its maximum volume.`,
            a: `${h} = ${fr(`4${R}`, '3')}, ${VMAX} = ${fr(`32π${R3}`, '81')}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The function ${fx} = ${X3} − 3${X2} + 3${x} + 7 has:`,
        opts: [
          {
            label: `a local maximum at ${x}${NB}=${NB}1`,
            nudge: `<b>(A)</b>/<b>(B)</b> trap students who see ${fp}(1)${NB}=${NB}0 and assume an extremum without testing the sign flip.`,
          },
          {
            label: `a local minimum at ${x}${NB}=${NB}1`,
            nudge: `<b>(A)</b>/<b>(B)</b> trap students who see ${fp}(1)${NB}=${NB}0 and assume an extremum without testing the sign flip.`,
          },
          { label: 'neither a maximum nor a minimum', nudge: null },
          { label: 'both, at different points', nudge: '<b>(D)</b> ignores that there is only one critical point.' },
        ],
        correct: 2,
        solution: `${fpx} = 3${X2} − 6${x} + 3 = 3(${x} − 1)<sup>2</sup> ≥ 0, so ${fp} touches zero at ${x}${NB}=${NB}1 but never changes sign: a point of inflection, no extremum.`,
      },
      {
        t: 'mcq',
        q: `The absolute maximum value of ${fx} = sin${NB}${x} + cos${NB}${x} on ${CI('0', P2)} is:`,
        opts: [
          { label: '1', nudge: '<b>(A)</b> is the endpoint value, picked by students who skip the interior critical point.' },
          { label: '√2', nudge: null },
          { label: '2', nudge: '<b>(C)</b> wrongly adds the separate maxima of sin and cos.' },
          { label: fr('1', '√2'), nudge: `<b>(D)</b> confuses the value with sin${NB}${P4}.` },
        ],
        correct: 1,
        solution: `${fpx} = cos${NB}${x} − sin${NB}${x} = 0 ⇒ ${x} = ${P4}; ${f}(${P4}) = √2, while ${f}(0) = ${f}(${P2}) = 1. So the max is √2.`,
      },
      {
        t: 'mcq',
        q: `For ${fx} = ${X4}, at ${x}${NB}=${NB}0 the Second Derivative Test:`,
        opts: [
          {
            label: 'gives a local maximum',
            nudge: '<b>(A)</b>/<b>(B)</b> assume the second test gives an answer when it is silent.',
          },
          {
            label: 'gives a local minimum',
            nudge: '<b>(A)</b>/<b>(B)</b> assume the second test gives an answer when it is silent.',
          },
          { label: `fails, but ${x}${NB}=${NB}0 is a local minimum`, nudge: null },
          {
            label: 'fails, so no extremum exists',
            nudge: '<b>(D)</b> is the classic error: “test fails” is read as “no extremum,” but the first test still settles it.',
          },
        ],
        correct: 2,
        solution: `${fp}(0) = 0 and ${fpp}(0) = 0, so the second test is inconclusive; the first test shows ${fp} goes − to +, a local minimum.`,
      },
      {
        t: 'mcq',
        q: `If ${fx} = ${X3} − 3${k}${x} has a local minimum at ${x}${NB}=${NB}2, then ${k} =`,
        opts: [
          { label: '2', nudge: `<b>(A)</b> comes from solving ${x}${NB}=${NB}${k} instead of ${X2}${NB}=${NB}${k}.` },
          { label: '4', nudge: null },
          { label: '−4', nudge: '<b>(C)</b> flips a sign.' },
          { label: fr('4', '3'), nudge: `<b>(D)</b> sets ${f}(2)${NB}=${NB}0 instead of ${fp}(2)${NB}=${NB}0: 8 − 6${k} = 0.` },
        ],
        correct: 1,
        solution: `${fpx} = 3${X2} − 3${k} = 0 at ${x}${NB}=${NB}2 ⇒ ${k} = 4; then ${fpp}(2) = 12 > 0 confirms a minimum.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Calling every critical point an extremum.</b> ${fpc}${NB}=${NB}0 is only a candidate. Always finish with a sign-flip or curvature check: the inflection point of ${X3} is the standard trap.`,
          `<b>Quitting when the second-derivative test fails.</b> ${fppc}${NB}=${NB}0 means “inconclusive,” not “no extremum.” Go back to the first-derivative test; never write “no maximum/minimum” from a failed second test.`,
          `<b>Forgetting the endpoints in absolute-extrema problems.</b> On ${AB} the global extreme often lives at an endpoint. Evaluate ${f} at the endpoints and the critical points, then compare.`,
          '<b>Keeping infeasible roots in optimization.</b> A root giving a negative length or zero volume must be discarded. State the feasible domain first so the rejection is automatic.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Pick your test to match the function. Polynomials with a clean second derivative → Second Derivative Test (one substitution per point). Functions where ${fpp} is messy, or where ${fppc}${NB}=${NB}0, or with non-differentiable corners → First Derivative Test via a sign chart. In optimization, <b>always answer the exact question</b>: examiners often want the maximum value or a dimension, not the variable you solved for.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `<b>Critical points:</b> ${fpc}${NB}=${NB}0 <b>or</b> ${fp} undefined. Only candidates for local extrema.`,
            note: '',
          },
          {
            f: `<b>First Derivative Test:</b> ${fp} flips + → − = local <b>max</b>; − → + = local <b>min</b>; no flip = no extremum.`,
            note: '',
          },
          {
            f: `<b>Second Derivative Test:</b> ${fpc}${NB}=${NB}0, then ${fppc} < 0 = max, ${fppc} > 0 = min, ${fppc} = 0 = <b>fails</b> → use first test.`,
            note: '',
          },
          {
            f: `<b>Absolute extrema on ${AB}:</b> compare ${f} at all interior critical points <b>and</b> both endpoints; biggest = abs max, smallest = abs min.`,
            note: '',
          },
          {
            f: `<b>Optimization:</b> one-variable objective via the constraint → set ${fp}${NB}=${NB}0 → reject infeasible roots → confirm max/min → answer what’s asked.`,
            note: '',
          },
          {
            f: `<b>Trap:</b> ${fpc}${NB}=${NB}0 alone proves nothing (see ${X3}); a “failed” second test still has an answer (see ${X4}).`,
            note: '',
          },
        ],
        aids: [`<b>“Frown for max, smile for min”:</b> concave down (${rel(fpp, '<', '0')}) is a peak; concave up (${rel(fpp, '>', '0')}) is a valley.`],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 412–415 (the book's Appendix A) ────────────────
  {
    n: '04',
    title: 'Tangents and Normals (JEE-relevant: outside current CBSE board syllabus)',
    kalam: 'The tangent to a curve at a point is the straight line that just “kisses” the curve there.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Removed from CBSE Boards in the NCERT rationalisation, but a steady source of JEE Main questions ${ESTIMATE} and a building block for JEE Advanced calculus/geometry. Include in study if you are preparing for JEE; a board-only student may skip this topic.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `The tangent to a curve at a point is the straight line that just “kisses” the curve there: the line whose slope matches the curve’s slope at that exact point. Since the derivative is the slope, the tangent’s slope at ${P0} is simply ${fpx0}. The <b>normal</b> is the line perpendicular to the tangent at the same point: picture the tangent as the road and the normal as the signpost standing at right angles to it.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> every smooth point on a curve has two natural lines through it: one going along the curve (tangent) and one cutting across it (normal). Perpendicular slopes multiply to −1, so once you know the tangent slope ${m}, the normal slope is −${INV_M}: flip and negate.`,
      },
      {
        t: 'p',
        html: `<b>Caveats:</b> if ${fpx0}${NB}=${NB}0 the tangent is <b>horizontal</b> (slope 0) and the normal is vertical; if the tangent is <b>vertical</b> (${fpx0} infinite, e.g. ${DXDY}${NB}=${NB}0) the normal is horizontal. Always confirm the point actually lies on the curve before writing the line.`,
      },

      { t: 'part', title: 'Key formulas and results' },
      { t: 'p', html: `At a point ${P0} on ${y} = ${fx}, with ${m} = ${fpx0}:` },
      {
        t: 'formula',
        kicker: 'Tangent and normal',
        main: `Tangent: ${TANGENT}<br>Normal: ${NORMAL} (${m}${NB}≠${NB}0)`,
        legend: [`${m} = tangent slope, ${fpx0}`, `${P0} = point of contact (it satisfies the curve’s equation)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Special cases.</b> Horizontal tangent when ${m}${NB}=${NB}0: line ${y} = ${y0}. Vertical tangent when ${DYDX} is infinite: line ${x} = ${x0} (then the normal is ${y} = ${y0}).`,
      },
      {
        t: 'p',
        html: `<b>Angle of intersection of two curves.</b> If their tangents at a common point have slopes ${m1}, ${m2},`,
      },
      {
        t: 'formula',
        kicker: 'Angle of intersection of two curves',
        main: `tan${NB}${th} = ${ANGLE}`,
        legend: [`${m1}, ${m2} = slopes of the tangents at the common point`, `${th} = angle between curves`],
        note: null,
      },
      {
        t: 'p',
        html: `The curves are <b>orthogonal</b> (cut at right angles) if ${m1}${m2}${NB}=${NB}−1, and <b>touch</b> (tangentially meet) if ${m1}${NB}=${NB}${m2}.`,
      },
      {
        t: 'p',
        html: `<b>Symbols.</b> ${m}: tangent slope = ${fpx0}; ${P0}: point of contact, which must satisfy the curve’s equation; ${th}: angle between curves.`,
      },

      { t: 'part', title: 'Key procedure' },
      {
        t: 'proc',
        title: 'Key procedure',
        steps: [
          '<b>Confirm the point</b> lies on the curve (it must satisfy the equation).',
          `<b>Find</b> ${m} = ${fpx0} by differentiating and substituting.`,
          `<b>Write the tangent</b> via point-slope; for the <b>normal</b> use slope −${INV_M}.`,
          `<b>For special tangents</b> (“parallel to a line,” “perpendicular to a line”): set ${m} equal to the line’s slope (parallel) or to −${fr('1', '(line slope)')} (perpendicular), solve for the point.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find the equations of the tangent and normal to ${y} = ${X2} − 3${x} + 2 at the point ${OI('2', '0')}.`,
        steps: [
          `<b>Check:</b> 2<sup>2</sup> − 3(2) + 2 = 0 ✓. Differentiate: ${DYDX} = 2${x} − 3, so ${m} = 2(2) − 3 = 1.`,
          `<b>Tangent:</b> ${y} − 0 = 1(${x} − 2) ⇒ ${y} = ${x} − 2.`,
          `<b>Normal:</b> slope −1, so ${y} − 0 = −1(${x} − 2) ⇒ ${y} = −${x} + 2.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `At which points on ${y} = ${X3} − 11${x} + 5 is the tangent parallel to the line ${y} = ${x} − 11?`,
        steps: [
          `Parallel means slope 1. ${DYDX} = 3${X2} − 11 = 1 ⇒ ${X2} = 4 ⇒ ${x} = ±2.`,
          `At ${x}${NB}=${NB}2, ${y} = 8 − 22 + 5 = −9; at ${x}${NB}=${NB}−2, ${y} = −8 + 22 + 5 = 19. Points: ${OI('2', '−9')} and ${OI('−2', '19')}.`,
          `(At ${OI('2', '−9')} the tangent coincides with the given line; at ${OI('−2', '19')} it is ${y} = ${x} + 21.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        fig: 'm12-06-fig-6.7',
        q: `Show that the curves ${y} = ${X2} and ${x} = ${sq(y)} intersect at ${OI('1', '1')}, and find the angle between them there.`,
        steps: [
          `Both pass through ${OI('1', '1')}. For ${y} = ${X2}: ${m1} = 2${x} = 2. For ${x} = ${sq(y)}, i.e. ${y} = √${x}: ${m2} = ${fr('1', `2√${x}`)} = ${HALF}. Then<br>tan${NB}${th} = ${abs(`(2 − ${HALF}) ÷ (1 + 2 · ${HALF})`)}<br>= ${abs(`${fr('3', '2')} ÷ 2`)} = ${fr('3', '4')}<br>⇒ ${th} = tan<sup>−1</sup>${NB}${fr('3', '4')} ≈ 36.9°.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice and pitfalls' },
      {
        t: 'practice',
        items: [
          { q: `(i) Tangent to ${y} = sin${NB}${x} at ${x}${NB}=${NB}0.`, a: `(i) ${y} = ${x}.` },
          { q: `(ii) Normal to ${y} = ${fr('1', x)} at ${OI('1', '1')}.`, a: `(ii) ${y} = ${x}.` },
          {
            q: `(iii) Points on ${y} = ${X3} where the tangent is parallel to ${y} = 12${x} + 7.`,
            a: `(iii) ${OI('2', '8')} and ${OI('−2', '−8')}.`,
          },
        ],
      },
      {
        t: 'protip',
        html: `<b>Pitfalls & Pro-Tips:</b> (1) Don’t forget to verify the point is on the curve. (2) Normal slope is −${INV_M}, flip and negate: a missed sign is the most common error. (3) For “tangent perpendicular to a line,” set ${m} · (line slope) = −1, not equal. (4) When ${m}${NB}=${NB}0, write the horizontal/vertical lines directly rather than dividing by zero.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `Tangent slope = ${fpx0}`, note: '' },
          { f: `tangent ${TANGENT}`, note: '' },
          { f: `normal ${NORMAL}`, note: '' },
          { f: `angle tan${NB}${th} = ${ANGLE}`, note: '' },
          { f: `orthogonal ⟺ ${m1}${m2}${NB}=${NB}−1.`, note: '' },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 416–418 (the book's Appendix B) ────────────────
  {
    n: '05',
    title: 'Approximations and Differentials (JEE-relevant: outside current CBSE board syllabus)',
    kalam: 'Near a point, a smooth curve and its tangent line are almost indistinguishable.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: 'The NCERT section on approximations (Section 6.5 of the older book) was removed from CBSE Boards, but linear approximation and error estimation remain standard JEE Main material and a useful tool throughout physics. Include if preparing for JEE.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Near a point, a smooth curve and its tangent line are almost indistinguishable. So if you know a function’s value and slope at a convenient point, you can estimate its value a tiny step away by walking along the tangent instead of the curve. That is <b>linear approximation</b>: trading a hard exact value (like √25.3) for an easy nearby one (like √25 = 5) plus a small correction.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the derivative converts a small input nudge ${DX} into an output nudge ${DY} = ${fpx}${NB}${DX}. For small nudges the true change ${Dy} is very close to ${DY}, so ${LINAPP}. The smaller the step, the better the estimate.`,
      },
      {
        t: 'p',
        html: `<b>Caveats:</b> the approximation is only good for <b>small</b> ${Dx}, and you should pick a base point ${x} where ${fx} and ${fpx} are easy and close to the target. Trig approximations require ${x} in <b>radians</b>.`,
      },

      { t: 'part', title: 'Key formulas and results' },
      { t: 'p', html: `<b>Differential:</b> for ${y} = ${fx},` },
      {
        t: 'formula',
        kicker: 'Differential',
        main: `${DY} = ${fpx}${NB}${DX}<br>${Dy} ≈ ${DY} for small ${Dx}`,
        legend: [
          `${DX} = small change in input (${Dx})`,
          `${DY} = differential (estimated change in output)`,
          `${Dy} = true change`,
        ],
        note: null,
      },
      { t: 'p', html: '<b>Linear approximation:</b>' },
      {
        t: 'formula',
        kicker: 'Linear approximation',
        main: `${LINAPP}`,
        legend: [`${x} = the base point`, `${Dx} = small change in input`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Error estimation.</b> If ${x} is measured with a small error ${Dx} (so ${DX} = ${Dx}):`,
      },
      {
        t: 'formula',
        kicker: 'Error estimation',
        main: `absolute error in ${y} ≈ ${abs(DY)} = ${abs(fpx)}${NB}${abs(DX)}<br>relative error ≈ ${abs(fr(DY, y))}<br>percentage error ≈ ${abs(fr(DY, y))} × 100`,
        legend: [`${DX} = the error in ${x} (${Dx})`, `${DY} = differential (estimated change in output)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Symbols.</b> ${DX} = ${Dx}: small change in input; ${DY}: differential (estimated change in output); ${Dy}: true change. The method needs ${f} differentiable at the base point and ${Dx} small.`,
      },

      { t: 'part', title: 'Key procedure' },
      {
        t: 'proc',
        title: 'Key procedure',
        steps: [
          `<b>Identify the target</b> ${f}(${x} + ${Dx}) and choose a nearby base ${x} where ${fx} is exact and easy.`,
          `<b>Set</b> ${Dx} = <b>target</b> − <b>base</b> (watch the sign).`,
          `<b>Compute</b> ${fpx} at the base.`,
          `<b>Combine:</b> ${LINAPP}.`,
          `<b>For errors:</b> use ${DY} = ${fpx}${NB}${DX}; divide by ${y} for relative/percentage error.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Approximate √25.3.',
        steps: [
          `Take ${fx} = √${x}, base ${x}${NB}=${NB}25, ${Dx} = 0.3. Then ${f}(25) = 5 and ${fpx} = ${fr('1', `2√${x}`)} ⇒ ${fp}(25) = ${fr('1', '10')}.<br>√25.3 ≈ 5 + ${fr('1', '10')}(0.3) = 5 + 0.03 = 5.03.`,
          '(True value ≈ 5.0299: excellent.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Approximate (1.97)<sup>6</sup>: estimate to a sensible accuracy. (Take ${fx} = ${x}<sup>6</sup>.)`,
        steps: [
          `Base ${x}${NB}=${NB}2, ${Dx} = −0.03. ${f}(2) = 64, ${fpx} = 6${x}<sup>5</sup> ⇒ ${fp}(2) = 6(32) = 192.<br>(1.97)<sup>6</sup> ≈ 64 + 192(−0.03) = 64 − 5.76 = 58.24.`,
          '(True value ≈ 58.45: the tangent line runs below a curve that bends upward, so the estimate is slightly low.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'The radius of a sphere is measured as 9 cm with a possible error of 0.03 cm. Estimate the maximum percentage error in the computed volume.',
        steps: [
          `${V} = ${fr('4', '3')}π${cube(r)} ⇒ d${V} = 4π${sq(r)}${NB}d${r}. The <b>relative</b> error:<br>${fr(`d${V}`, V)} = 4π${sq(r)}${NB}d${r} ÷ (${fr('4', '3')}π${cube(r)})<br>= 3${NB}${fr(`d${r}`, r)} = 3 · ${fr('0.03', '9')} = 0.01.`,
          `So the percentage error in volume ≈ 1%. (Note the clean shortcut: for ${V} ∝ ${cube(r)}, the relative error in ${V} is three times that in ${r}.)`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice and pitfalls' },
      {
        t: 'practice',
        items: [
          { q: '(i) Approximate <sup>3</sup>√27.1.', a: '(i) ≈ 3.0037.' },
          { q: `(ii) Approximate sin${NB}31° (use 30°, in radians).`, a: '(ii) ≈ 0.5151.' },
          {
            q: '(iii) The side of a square is measured with 2% error; find the approximate percentage error in its area.',
            a: '(iii) ≈ 4%.',
          },
        ],
      },
      {
        t: 'protip',
        html: `<b>Pitfalls & Pro-Tips:</b> (1) Choose the base point close to the target and easy to evaluate: a poor base ruins the estimate. (2) Mind the sign of ${Dx} (e.g. 1.97 → ${Dx} = −0.03). (3) Distinguish absolute error (${abs(DY)}) from relative/percentage error (${abs(fr(DY, y))}). (4) For powers, the shortcut ${DYY} = ${n}${NB}${DXX} (when ${y} = ${x}<sup><i>n</i></sup>) saves time. (5) Trig: convert degrees to radians first.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `${DY} = ${fpx}${NB}${DX}`, note: '' },
          { f: LINAPP, note: '' },
          { f: `relative error ${DYY}`, note: '' },
          { f: `for ${y} = ${x}<sup><i>n</i></sup>, ${DYY} = ${n}${NB}${DXX}.`, note: '' },
        ],
        aids: [],
      },
    ],
  },
];
