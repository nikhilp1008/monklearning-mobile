import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topics 01–02, pp. 384–401 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 01
 * Rate of Change of Quantities (heading and Exam Relevance box under the
 * contents on p. 384, text pp. 384–392) and Subtopic 02 Monotonicity:
 * Increasing and Decreasing Functions (pp. 393–401). The chapter's title and
 * contents (pp. 383–384) are not copied. Each topic opens with its "Exam
 * Relevance:" box as a part of its own, then is split at its Sections 1 to 8;
 * the "Cheat Sheet Box" is the part "Cheat sheet".
 * Figures (each caption printed in the text, the drawing a page later on a
 * "CHAPTER 6 · FIGURES" page): 6.1 (caption p. 387, drawn p. 388) and 6.2
 * (p. 389, drawn p. 390) on Topic 01's second and fourth worked examples;
 * 6.3 (p. 395, drawn p. 396) after Step 4 of Topic 02's procedure; 6.4
 * (p. 398, drawn p. 399) on Topic 02's fourth worked example. No unnumbered
 * drawings. d/dx with an upright d, π upright, log upright. Every fraction is
 * stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const n = I('n');
const r = I('r');
const t = I('t');
const x = I('x');
const y = I('y');
const A = I('A');
const C = I('C');
const Q = I('Q');
const S = I('S');
const V = I('V');
const II = I('I');
const ell = I('ℓ');

const sq = (s: string) => `${s}<sup>2</sup>`;
const cube = (s: string) => `${s}<sup>3</sup>`;
const rel = (l: string, op: string, rr: string) => `${l}${NB}${op}${NB}${rr}`;
const CI = (lo: string, hi: string) => `[${lo},${NB}${hi}]`;
const OI = (lo: string, hi: string) => `(${lo},${NB}${hi})`;
/** dP/dQ with an upright d. */
const dd = (p: string, q: string) => fr(`d${p}`, `d${q}`);

const DYDX = dd(y, x);
const DADT = dd(A, t);
const DADR = dd(A, r);
const DRDT = dd(r, t);
const DXDT = dd(x, t);
const DYDT = dd(y, t);
const DVDT = dd(V, t);
const DVDR = dd(V, r);
const DSDT = dd(S, t);
const DCDT = dd(C, t);
const DHDT = dd(h, t);
const DQDT = dd(Q, t);
const DQDX = dd(Q, x);

const fx = `${f}(${x})`;
const fp = `${f}′`;
const fpx = `${f}′(${x})`;
const gx = `${g}(${x})`;
const gp = `${g}′`;
const gpx = `${g}′(${x})`;
const hx = `${h}(${x})`;
const hpx = `${h}′(${x})`;
const x1 = `${x}<sub>1</sub>`;
const x2 = `${x}<sub>2</sub>`;
const fx1 = `${f}(${x1})`;
const fx2 = `${f}(${x2})`;
const AB = CI(a, b);
const OAB = OI(a, b);
const PI2 = fr('π', '2');
const OPEN_PI2 = OI('0', PI2);
const HALF_OPEN_PI2 = `[0,${NB}${PI2})`;
const ONE_X = fr('1', x);
const sin = (s: string) => `sin${NB}${s}`;
const cos = (s: string) => `cos${NB}${s}`;
const tan = (s: string) => `tan${NB}${s}`;
const sec2 = (s: string) => `sec<sup>2</sup>${NB}${s}`;
const cos2 = (s: string) => `cos<sup>2</sup>${NB}${s}`;
const log = (s: string) => `log(${s})`;
const PIR2 = `π${sq(r)}`;
const CM2 = 'cm<sup>2</sup>/s';
const CM3 = 'cm<sup>3</sup>/s';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 384–392 ────────────────
  {
    n: '01',
    title: 'Rate of Change of Quantities',
    kalam: 'The derivative you learned as “slope of a curve” has a second, equally important identity: it is a rate of change.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A dependable CBSE Boards question: a 2–3 mark related-rates problem (expanding circle, sliding ladder, inflating balloon, filling cone) appears almost every year ${ESTIMATE}. JEE Main carries 1 question regularly ${ESTIMATE}; JEE Advanced folds it into multi-step geometry. It is also the conceptual launch-pad for the whole chapter, since “derivative = rate of change” underpins everything that follows.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `The derivative you learned as “slope of a curve” has a second, equally important identity: it is a <b>rate of change</b>. When a quantity ${y} depends on a quantity ${x}, the derivative ${DYDX} tells you how fast ${y} changes per unit change in ${x}. If ${DYDX}${NB}=${NB}4, then near that instant ${y} grows four units for every one-unit rise in ${x}.`,
      },
      {
        t: 'p',
        html: 'Most real situations, though, change with <b>time</b>. Think of a stone dropped into a still pond near Varanasi’s ghats. A circular ripple spreads outward; its radius grows, and so does the area it encloses. Two things are changing at once, and they are linked: the area depends on the radius, and the radius depends on time. That linkage is the entire subject of <b>related rates</b>.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> the chain rule is the bridge between the rates. Since area depends on radius and radius depends on time,<br>${DADT} = ${DADR} · ${DRDT}.`,
      },
      {
        t: 'p',
        html: 'Read it aloud: “how fast the area changes” equals “how much area changes per unit radius” times “how fast the radius changes.” You are passing the rate through the geometry. Once you can write the quantity you care about as a function of another quantity whose rate you know, the chain rule does the rest.',
      },
      {
        t: 'p',
        html: `A crucial distinction: <b>average</b> rate of change of ${y} over an interval is ${fr(`Δ${y}`, `Δ${x}`)} (a ratio of finite changes), while the <b>instantaneous</b> rate is the limit, ${DYDX}. Exam problems almost always ask for the instantaneous rate at a particular moment: for example, “how fast is the area increasing <b>when the radius is 10 cm</b>.” That little clause is your signal to differentiate first and substitute the value afterwards.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & caveats:</b><br>1. <b>Differentiate with respect to the right variable.</b> In related-rates problems everything is changing with time ${t}, so you differentiate the geometric relation with respect to ${t}, not with respect to a length.<br>2. <b>Substitute numbers only after differentiating.</b> If you plug “${r}${NB}=${NB}10” into the formula before differentiating, the radius becomes a constant and its rate vanishes. Differentiate symbolically, then substitute.<br>3. <b>A decreasing quantity has a negative rate.</b> Water draining, a shadow shortening, a ladder-top falling: each carries a minus sign. Keep it.<br>4. <b>Units travel with the rate.</b> A length rate is in cm/s, an area rate in ${CM2}, a volume rate in ${CM3}. Mismatched units signal a slipped step.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Rate of change (one variable).</b> If ${y} = ${fx}, the rate of change of ${y} with respect to ${x} is`,
      },
      {
        t: 'formula',
        kicker: 'Rate of change (one variable)',
        main: `${DYDX} = ${fpx}`,
        legend: [`${y} = the quantity (${y} = ${fx})`, `${x} = the quantity ${y} depends on`],
        note: null,
      },
      {
        t: 'p',
        html: `The value ${DYDX}|<sub>${x}=${a}</sub> is the instantaneous rate at ${x} = ${a}.`,
      },
      {
        t: 'p',
        html: `<b>Related rates (chain rule in time).</b> If a quantity ${Q} depends on ${x}, and ${x} varies with time,`,
      },
      {
        t: 'formula',
        kicker: 'Related rates (chain rule in time)',
        main: `${DQDT} = ${DQDX} · ${DXDT}`,
        legend: [`${Q} = a quantity depending on ${x}`, `${x} = a quantity varying with time`, `${t} = time`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Standard geometric rate relations</b> (differentiated with respect to ${t}):`,
      },
      {
        t: 'table',
        title: null,
        head: ['Shape / quantity', 'Relation', 'Rate form'],
        rows: [
          ['Circle, area', `${A} = ${PIR2}`, `${DADT} = 2π${r}${NB}${DRDT}`],
          ['Circle, circumference', `${C} = 2π${r}`, `${DCDT} = 2π${NB}${DRDT}`],
          ['Sphere, volume', `${V} = ${fr('4', '3')}π${cube(r)}`, `${DVDT} = 4π${sq(r)}${NB}${DRDT}`],
          ['Sphere, surface area', `${S} = 4π${sq(r)}`, `${DSDT} = 8π${r}${NB}${DRDT}`],
          ['Cube, volume', `${V} = ${cube(x)}`, `${DVDT} = 3${sq(x)}${NB}${DXDT}`],
          ['Cone, volume', `${V} = ${fr('1', '3')}π${sq(r)}${h}`, `differentiate using the ${r}–${h} constraint`],
        ],
      },
      {
        t: 'p',
        html: `<b>Symbols.</b> ${t}: time; ${r}, ${x}, ${h}: varying lengths; ${A}, ${S}: areas; ${V}: volume; ${C}: circumference; a prime or ${fr('d', `d${t}`)} denotes a time rate. <b>Units</b> are physical here: lengths in cm, time in s, so rates carry cm/s, ${CM2}, or ${CM3} as appropriate.`,
      },
      {
        t: 'p',
        html: '<b>Conditions of applicability.</b> The chain-rule bridge needs each quantity to be a differentiable function of the next; in related-rates problems you must first reduce the figure to a <b>single</b> independent variable using the given geometric constraint before differentiating.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no theorem to prove here: the skill is a disciplined <b>procedure</b> for related rates. Five steps handle essentially every problem.',
      },
      {
        t: 'p',
        html: `<b>Step 1: List what is given and what is wanted, as rates.</b> Translate the words: “increasing at 3 cm/s” means ${DRDT}${NB}=${NB}3; “how fast is the area changing” means find ${DADT}. <b>Why:</b> naming the rates fixes the target and prevents confusing a length with its rate.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: Write a relation connecting the quantities.</b> Use the geometry/physics of the situation (${A} = ${PIR2}, ${sq(x)} + ${sq(y)} = ${sq(ell)}, etc.). <b>Why:</b> the relation is the structural link the chain rule will act on.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: Eliminate extra variables using any constraint.</b> If a cone keeps ${r}${NB}=${NB}${fr(h, '2')}, substitute so the volume depends on ${h} alone. <b>Why:</b> differentiation in time needs one driving variable, or you’ll be left with an unknown extra rate.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: Differentiate the whole relation with respect to ${t}.</b> Treat every varying length as a function of ${t} and apply the chain rule. <b>Why:</b> this produces the equation linking the known rate to the unknown rate. Do this <b>before</b> putting in any numbers.`,
      },
      {
        t: 'p',
        html: '<b>Step 5: Substitute the instantaneous values and solve.</b> Now plug in the moment’s data and isolate the wanted rate; attach the correct units and sign. <b>Why:</b> the rate equation is general; the numbers specialise it to the instant asked about.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The radius of a circular oil slick on water is increasing at 3 cm/s. Find the rate at which its area is increasing when the radius is 10 cm.',
        steps: [
          `Given ${DRDT} = 3 cm/s; want ${DADT} at ${r} = 10 cm. Relation ${A} = ${PIR2}.`,
          `Differentiate with respect to ${t}:<br>${DADT} = 2π${r}${NB}${DRDT} = 2π(10)(3)<br>= 60π ${CM2} ≈ 188.5 ${CM2}.`,
        ],
        ans: `The area is increasing at 60π ${CM2}.`,
      },
      {
        t: 'ex',
        tag: 'CBSE Boards HOTS / Application',
        fig: 'm12-06-fig-6.1',
        q: 'A 13 m ladder leans against a vertical wall. Its foot is pulled away from the wall at 2 m/s. How fast is the top sliding down when the foot is 5 m from the wall?',
        steps: [
          `Let ${x} = distance of foot from wall, ${y} = height of top. By Pythagoras, ${sq(x)} + ${sq(y)} = 13<sup>2</sup> = 169. Given ${DXDT} = 2 m/s.`,
          `When ${x} = 5: ${y} = √(169 − 25) = 12 m.`,
          `Differentiate the relation with respect to ${t}:<br>2${x}${DXDT} + 2${y}${DYDT} = 0<br>⇒ ${DYDT} = −${fr(x, y)}${NB}${DXDT} = −${fr('5', '12')}(2) = −${fr('5', '6')} m/s.`,
          `The negative sign means the top is <b>falling</b>: it slides down at ${fr('5', '6')} m/s ≈ 0.83 m/s. (Dropping that minus sign is the usual lost mark.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `A spherical balloon is inflated so that its volume increases at 100 ${CM3}. When the radius is 5 cm, find (a) the rate of increase of the radius and (b) the rate of increase of the surface area.`,
        steps: [
          `Given ${DVDT} = 100 ${CM3}, ${r} = 5 cm.`,
          `(a) ${V} = ${fr('4', '3')}π${cube(r)} ⇒ ${DVDT} = 4π${sq(r)}${NB}${DRDT}, so<br>${DRDT} = ${fr('100', '4π(5)<sup>2</sup>')} = ${fr('100', '100π')} = ${fr('1', 'π')} cm/s.`,
          `(b) ${S} = 4π${sq(r)} ⇒ ${DSDT} = 8π${r}${NB}${DRDT}<br>= 8π(5)(${fr('1', 'π')}) = 40 ${CM2}.`,
        ],
        ans: `Radius grows at ${fr('1', 'π')} cm/s; surface area grows at 40 ${CM2}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm12-06-fig-6.2',
        q: `Water is poured into an inverted right circular cone (vertex down) at 8 ${CM3}. The cone’s radius is always half its depth of water. Find how fast the water level rises when the depth is 4 cm.`,
        steps: [
          `Let ${h} = water depth, ${r} = surface radius. The constraint is ${r}${NB}=${NB}${fr(h, '2')}. Volume of water:<br>${V} = ${fr('1', '3')}π${sq(r)}${h} = ${fr('1', '3')}π(${fr(h, '2')})<sup>2</sup>${h}<br>= ${fr(`π${cube(h)}`, '12')}.`,
          `Differentiate with respect to ${t} (note: reduce to ${h} first, then differentiate):<br>${DVDT} = ${fr('π', '12')} · 3${sq(h)}${NB}${DHDT} = ${fr(`π${sq(h)}`, '4')}${NB}${DHDT}.`,
          `Set ${DVDT} = 8 and ${h} = 4:<br>8 = ${fr('π(4)<sup>2</sup>', '4')}${NB}${DHDT} = 4π${NB}${DHDT}<br>⇒ ${DHDT} = ${fr('8', '4π')} = ${fr('2', 'π')} cm/s ≈ 0.64 cm/s.`,
        ],
        ans: `The water level rises at ${fr('2', 'π')} cm/s.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> The edge of a cube is increasing at 2 cm/s. Find the rate of increase of its volume when the edge is 8 cm.',
            a: `384 ${CM3}.`,
          },
          {
            q: `<b>[CBSE]</b> The area of a circle increases at 12π ${CM2}. Find the rate of increase of its radius when the radius is 6 cm.`,
            a: '1 cm/s.',
          },
          {
            q: `<b>[JEE Main]</b> Sand falling from a chute forms a conical pile whose height always equals its base radius. If sand falls at 12 ${CM3}, how fast is the height rising when it is 4 cm?`,
            a: `${fr('3', '4π')} cm/s.`,
          },
          {
            q: '<b>[JEE Main]</b> A 10 m ladder’s top slides down a wall at 1 m/s. How fast is its foot moving away when the foot is 6 m from the wall?',
            a: `${fr('4', '3')} m/s.`,
          },
          {
            q: '<b>[JEE Advanced]</b> A man 2 m tall walks away from an 8 m lamp-post at 1.5 m/s. Find how fast (a) his shadow lengthens and (b) the tip of his shadow moves.',
            a: '(a) 0.5 m/s, (b) 2 m/s.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The radius of a circle increases at 0.7 cm/s. The rate of increase of its circumference is:',
        opts: [
          { label: '0.7π cm/s', nudge: '<b>(A)</b> forgets the factor 2.' },
          { label: '1.4π cm/s', nudge: null },
          { label: '1.4 cm/s', nudge: '<b>(C)</b>/<b>(D)</b> drop the π, confusing circumference with a linear rate.' },
          { label: '0.7 cm/s', nudge: '<b>(C)</b>/<b>(D)</b> drop the π, confusing circumference with a linear rate.' },
        ],
        correct: 1,
        solution: `${C} = 2π${r} ⇒ ${DCDT} = 2π${NB}${DRDT} = 2π(0.7) = 1.4π.`,
      },
      {
        t: 'mcq',
        q: 'A balloon’s volume increases at a constant rate. As it grows, the rate at which its radius increases:',
        opts: [
          { label: 'stays constant', nudge: '<b>(A)</b> assumes the rates track linearly.' },
          { label: 'increases', nudge: '<b>(B)</b> reverses the dependence.' },
          { label: 'decreases', nudge: null },
          { label: 'is zero', nudge: '<b>(D)</b> confuses “slower” with “stopped.”' },
        ],
        correct: 2,
        solution: `From ${DVDT} = 4π${sq(r)}${NB}${DRDT}, a fixed ${DVDT} gives ${DRDT} = ${fr('1', `4π${sq(r)}`)}${NB}${DVDT}, which shrinks as ${r} grows.`,
      },
      {
        t: 'mcq',
        q: `For ${y} = ${cube(x)} − 6${sq(x)}, the rate of change of ${y} with respect to ${x} is zero at:`,
        opts: [
          { label: `${x} = 0 only`, nudge: '<b>(A)</b>/<b>(B)</b> keep only one root.' },
          { label: `${x} = 4 only`, nudge: '<b>(A)</b>/<b>(B)</b> keep only one root.' },
          { label: `${x} = 0 and ${x} = 4`, nudge: null },
          { label: `${x} = 2`, nudge: '<b>(D)</b> mistakenly halves the second root.' },
        ],
        correct: 2,
        solution: `${DYDX} = 3${sq(x)} − 12${x} = 3${x}(${x} − 4) = 0 at ${x} = 0, 4.`,
      },
      {
        t: 'mcq',
        q: 'A ladder slides down a wall, its foot pulled away at a constant speed. At the instant the foot is far from the wall and the top is near the ground, the top is moving:',
        opts: [
          { label: 'slowly', nudge: '<b>(A)</b> reverses it.' },
          { label: 'very fast', nudge: null },
          { label: 'at the same speed as the foot', nudge: '<b>(C)</b> ignores the geometry.' },
          { label: 'upward', nudge: '<b>(D)</b> has the wrong sign.' },
        ],
        correct: 1,
        solution: `From ${DYDT} = −${fr(x, y)}${NB}${DXDT}, as ${y} → 0 the factor ${fr(x, y)} blows up, so the top’s speed grows without bound.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Substituting before differentiating.</b> Plugging the instantaneous value into the formula first turns a variable into a constant and kills its rate. Always differentiate symbolically, then substitute.',
          `<b>Differentiating with respect to a length instead of time.</b> The driver is ${t}; every varying length is a function of ${t}, so the chain rule must produce ${DRDT} terms.`,
          '<b>Losing the sign.</b> Draining tanks, falling ladder-tops, and shrinking shadows have negative rates. State and keep the minus.',
          `<b>Not reducing to one variable.</b> Forgetting the geometric constraint (like ${r}${NB}=${NB}${fr(h, '2')} for a cone) leaves an extra unknown rate and a stuck problem.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Underline the phrase “<b>at the instant when…</b>”: it marks exactly where the numbers go (last), and signals you want the instantaneous rate. For spheres, remember ${DVDT} = (surface area) × ${DRDT}, a neat sanity check since ${DVDR} = 4π${sq(r)} = ${S}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Derivative = rate</b>',
            note: `${DYDX} = ${fpx} is how fast ${y} changes per unit ${x}; evaluate at the given point for the instantaneous rate.`,
          },
          { f: '<b>Related rates bridge</b>', note: `${DQDT} = ${DQDX} · ${DXDT} (chain rule in time).` },
          {
            f: '<b>Method</b>',
            note: `name rates → write relation → eliminate extra variables → differentiate w.r.t. ${t} → substitute last.`,
          },
          {
            f: '<b>Key results</b>',
            note: `${DADT} = 2π${r}${NB}${r}′;<br>${DVDT} = 4π${sq(r)}${r}′ (sphere);<br>${DSDT} = 8π${r}${NB}${r}′;<br>${DVDT} = 3${sq(x)}${x}′ (cube).`,
          },
          { f: '<b>Signs & units</b>', note: `decreasing ⇒ negative rate; carry cm/s, ${CM2}, ${CM3} correctly.` },
        ],
        aids: ['“Differentiate first, plug in last.”'],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 393–401 ────────────────
  {
    n: '02',
    title: 'Monotonicity: Increasing and Decreasing Functions',
    kalam: 'The sign of the gradient, not its size, decides whether you’re going up or down.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A guaranteed scorer. CBSE Boards almost always carry a 3-mark “find the intervals in which ${f} is strictly increasing/decreasing” question, plus a HOTS-style inequality or “show ${f} is increasing on ℝ” proof ${ESTIMATE}. JEE Main puts 1–2 questions yearly ${ESTIMATE}: usually a parameter-range or a “which of these is monotonic” MCQ. JEE Advanced rarely asks it directly ${ESTIMATE} but uses monotonicity as the engine for proving inequalities and counting roots.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Picture the Nifty 50 chart on a trading day. From 9:15 to 11:00 the line climbs steadily; you’d say the index is <b>increasing</b>. After lunch it slides downhill till close; now it’s <b>decreasing</b>. Nobody needs the exact values to say this: the direction of travel is enough. Monotonicity is exactly this idea made precise: over a stretch of its domain, is the function climbing, falling, or flat?',
      },
      {
        t: 'p',
        html: `Now connect it to the derivative. The derivative ${fpx} is the <b>slope</b> of the curve at ${x}, and slope is direction of travel. Walk left-to-right along the graph:<br>• Where the path tilts <b>uphill</b>, the slope is positive, ${rel(fpx, '>', '0')}, and the function is <b>increasing</b>.<br>• Where the path tilts <b>downhill</b>, the slope is negative, ${rel(fpx, '<', '0')}, and the function is <b>decreasing</b>.<br>• Where the path is momentarily <b>flat</b>, ${rel(fpx, '=', '0')}.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> imagine driving up a ghat road. Your altitude is ${fx} and the road’s gradient is ${fpx}. As long as the gradient sign stays positive, you keep gaining altitude: it doesn’t matter whether the climb is steep or gentle. The sign of the gradient, not its size, decides whether you’re going up or down. That single insight (<b>sign of ${fp} controls direction of ${f}</b>) is the whole topic.`,
      },
      {
        t: 'p',
        html: `A subtle but exam-critical point lives at the flat spots. Consider ${fx} = ${cube(x)}. At ${x} = 0 the slope is exactly zero, yet the curve never stops rising: it’s strictly increasing across all of ℝ. So a momentary ${rel(fpx, '=', '0')} at an <b>isolated</b> point does not break increasing behaviour. It’s like the car cresting a tiny level patch mid-climb: instantaneously flat, still going up overall.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & caveats</b>, where the naïve “look at ${fp}” reasoning can betray you:<br>1. <b>Increasing is an interval property, not a point property.</b> You can only call ${f} increasing on an interval, never “at a point.”<br>2. <b>Disconnected domains don’t merge.</b> ${fx} = ${ONE_X} is decreasing on ${OI('−∞', '0')} and on ${OI('0', '∞')}, but it is <b>not</b> decreasing on the union: ${f}(−1) = −1 is less than ${f}(1) = 1. The gap at ${x} = 0 matters.<br>3. ${rel(fpx, '>', '0')} <b>is sufficient but not necessary</b> for strict increase (recall ${cube(x)}). The honest statement is “${rel(fpx, '≥', '0')}, with equality only at isolated points.”<br>4. The clean theorem needs ${f} <b>continuous on the closed interval and differentiable on the open interval</b>: don’t apply it blindly across points where ${f} or ${fp} fails to exist.`,
      },

      { t: 'part', title: 'Key formulas, theorems and definitions' },
      {
        t: 'p',
        html: `<b>Definitions.</b> Let ${II} be an interval contained in the domain of ${f}. For all ${x1}, ${x2} ∈ ${II}:`,
      },
      {
        t: 'formula',
        kicker: 'Increasing and decreasing on an interval (definitions)',
        main: `${f} is increasing on ${II} ⟺ (${x1} < ${x2} ⇒ ${fx1} ≤ ${fx2})<br>${f} is strictly increasing on ${II} ⟺ (${x1} < ${x2} ⇒ ${fx1} < ${fx2})<br>${f} is decreasing on ${II} ⟺ (${x1} < ${x2} ⇒ ${fx1} ≥ ${fx2})<br>${f} is strictly decreasing on ${II} ⟺ (${x1} < ${x2} ⇒ ${fx1} > ${fx2})`,
        legend: [`${II} = an interval in the domain of ${f}`, `${x1}, ${x2} = any two points of ${II}`],
        note: null,
      },
      {
        t: 'p',
        html: `A function that is (strictly) increasing or (strictly) decreasing on ${II} is called <b>monotonic</b> on ${II}.`,
      },
      {
        t: 'p',
        html: `<b>The Monotonicity Theorem (first-derivative criterion).</b> Let ${f} be continuous on ${AB} and differentiable on ${OAB}. Then on ${OAB}:`,
      },
      {
        t: 'formula',
        kicker: 'The Monotonicity Theorem (first-derivative criterion)',
        main: `${rel(fpx, '>', '0')} for all ${x} ∈ ${OAB} ⇒ ${f} is strictly increasing on ${AB}<br>${rel(fpx, '<', '0')} for all ${x} ∈ ${OAB} ⇒ ${f} is strictly decreasing on ${AB}<br>${rel(fpx, '=', '0')} for all ${x} ∈ ${OAB} ⇒ ${f} is constant on ${AB}`,
        legend: [`${f} = the function (continuous on ${AB}, differentiable on ${OAB})`, `${fpx} = the derivative (slope)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Sharper version (the one that handles ${cube(x)}):</b>`,
      },
      {
        t: 'formula',
        kicker: `Strictly increasing despite isolated zeros of ${f}′`,
        main: `${rel(fpx, '≥', '0')} on ${OAB},<br>with ${rel(fpx, '=', '0')} only at finitely many isolated points<br>⇒ ${f} is strictly increasing on ${AB}`,
        legend: [`${fpx} = the derivative (slope)`, `${AB} = the interval of interest`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Symbols.</b> ${f}: the function; ${II}, ${AB}: the interval of interest; ${fpx} = ${fr('d', `d${x}`)}${fx}: the derivative (slope); ${x1}, ${x2}: any two points of ${II}. (All quantities here are pure-mathematical: no SI units apply.)`,
      },
      {
        t: 'p',
        html: `<b>Conditions of applicability (read before every problem):</b><br>• ${f} must be <b>continuous on the closed interval</b>, <b>differentiable on the open interval</b>.<br>• The theorem gives conclusions on a <b>single interval</b>; never staple two disjoint intervals into one.<br>• ${rel(fpx, '>', '0')} is <b>sufficient, not necessary</b>, for strict increase.<br>• Conversely, if ${f} is differentiable and strictly increasing on ${II}, then ${rel(fpx, '≥', '0')} on ${II} (not necessarily >${NB}0).`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `CBSE does not require a formal proof of the monotonicity theorem: the rigorous argument runs through Lagrange’s Mean Value Theorem (Chapter 5, Topic 07), which the rationalised NCERT book and the current CBSE syllabus no longer include; JEE Advanced still uses it. (For the curious / JEE crowd: MVT gives ${fx2} − ${fx1} = ${f}′(${c})(${x2} − ${x1}) for some ${c} between them; if ${rel(`${f}′(${c})`, '>', '0')} and ${rel(x2, '>', x1)} the right side is positive, forcing ${rel(fx2, '>', fx1)}. That’s the proof in one line.) What you are expected to master is the <b>procedure</b> for extracting intervals. Here is the reliable five-step algorithm.`,
      },
      {
        t: 'p',
        html: `<b>Step 1: Fix the domain.</b> Identify where ${f} is defined. Points excluded from the domain (e.g. ${x} = 0 for ${ONE_X}, or where a log or √ argument fails) will break the number line into separate intervals you must never merge. <b>Why:</b> monotonicity is an interval property; a hole in the domain can flip the comparison.`,
      },
      {
        t: 'p',
        html: `<b>Step 2: Differentiate.</b> Compute ${fpx} and simplify it into <b>fully factored form</b>, e.g. ${fpx} = 6(${x} − 1)(${x} − 2). <b>Why:</b> factored form lets you read off sign changes instantly; expanded form hides them.`,
      },
      {
        t: 'p',
        html: `<b>Step 3: Find the critical points.</b> Solve ${rel(fpx, '=', '0')}, and also note any ${x} where ${fpx} does not exist. These are the only places the sign of ${fp} can switch. <b>Why:</b> a continuous expression keeps one sign between consecutive zeros, so the zeros partition the line.`,
      },
      {
        t: 'p',
        html: `<b>Step 4: Build a sign chart.</b> Mark the critical points (and domain breaks) on a number line; test the sign of ${fp} in each resulting interval by plugging in one convenient point. <b>Why:</b> one test point certifies the sign for the whole sub-interval.`,
      },
      { t: 'fig', id: 'm12-06-fig-6.3' },
      {
        t: 'p',
        html: `<b>Step 5: Translate signs to conclusions.</b> Positive ${fp} → strictly increasing on that interval; negative → strictly decreasing. State intervals cleanly (closed at the critical points is acceptable when ${f} is continuous there). <b>Why:</b> this is the answer the marker is looking for, and including the endpoint is valid because ${f} is continuous there, and the theorem (continuous on the closed interval, ${rel(fp, '>', '0')} inside) then gives strict monotonicity on the closed interval.`,
      },
      {
        t: 'p',
        html: `<b>For “prove ${f} is increasing on ℝ” questions:</b> skip the chart; just show ${rel(fpx, '≥', '0')} for every real ${x} (often by completing the square or bounding a trig term), and note any isolated zeros don’t matter.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the intervals in which ${fx} = 2${cube(x)} − 9${sq(x)} + 12${x} + 5 is strictly increasing and strictly decreasing.`,
        steps: [
          `<b>Given:</b> ${fx} = 2${cube(x)} − 9${sq(x)} + 12${x} + 5, domain ℝ.`,
          `Differentiate:<br>${fpx} = 6${sq(x)} − 18${x} + 12<br>= 6(${sq(x)} − 3${x} + 2)<br>= 6(${x} − 1)(${x} − 2).`,
          `Critical points: ${rel(fpx, '=', '0')} ⇒ ${x} = 1, 2. These split ℝ into ${OI('−∞', '1')}, ${OI('1', '2')}, ${OI('2', '∞')}.`,
          `Sign test: at ${x} = 0, ${fp} = 6(−1)(−2) = 12${NB}>${NB}0;<br>at ${x} = 1.5, ${fp} = 6(0.5)(−0.5) = −1.5${NB}<${NB}0;<br>at ${x} = 3, ${fp} = 6(2)(1) = 12${NB}>${NB}0.`,
          `<b>Conclusion:</b> ${f} is strictly increasing on (−∞,${NB}1] and on [2,${NB}∞), and strictly decreasing on ${CI('1', '2')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Boards HOTS / Application',
        q: `Prove that ${x} > ${log(`1 + ${x}`)} for all ${rel(x, '>', '0')}.`,
        steps: [
          'This is a monotonicity proof, the favourite HOTS pattern. Build an auxiliary function whose sign you want to pin down.',
          `Let ${gx} = ${x} − ${log(`1 + ${x}`)} on [0,${NB}∞). Then<br>${gpx} = 1 − ${fr('1', `1 + ${x}`)}<br>= ${fr(`(1 + ${x}) − 1`, `1 + ${x}`)} = ${fr(x, `1 + ${x}`)}.`,
          `For ${rel(x, '>', '0')}, both numerator and denominator are positive, so ${rel(gpx, '>', '0')}. Hence ${g} is <b>strictly increasing on</b> [0,${NB}∞).`,
          `Therefore, for any ${rel(x, '>', '0')},<br>${gx} > ${g}(0) = 0 − log(1) = 0<br>⇒ ${x} − ${log(`1 + ${x}`)} > 0<br>⇒ ${x} > ${log(`1 + ${x}`)}. ■`,
          `<b>The “verify it strictly” step students drop:</b> you must state ${g} is strictly increasing <b>and</b> evaluate at the anchor ${g}(0) = 0: the inequality is the gap between ${gx} and that anchor.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find all real values of ${k} for which ${fx} = ${cube(x)} + ${k}${sq(x)} + 3${x} + 7 is strictly increasing on ℝ.`,
        steps: [
          'This fuses monotonicity with the discriminant condition for a quadratic: two ideas in one.',
          `${fpx} = 3${sq(x)} + 2${k}${x} + 3.`,
          `For ${f} strictly increasing on <b>all</b> of ℝ, we need ${rel(fpx, '≥', '0')} for every ${x} (with at most isolated zeros). Since ${fp} is an upward parabola (leading coefficient 3${NB}>${NB}0), it stays ≥${NB}0 everywhere precisely when its discriminant is ≤${NB}0:<br>Δ = (2${k})<sup>2</sup> − 4(3)(3) = 4${sq(k)} − 36 ≤ 0<br>⇒ ${sq(k)} ≤ 9 ⇒ −3 ≤ ${k} ≤ 3.`,
          `At ${k} = ±3, Δ = 0, so ${fp} touches zero at a single point and is positive elsewhere, still strictly increasing.`,
        ],
        ans: `${k} ∈ ${CI('−3', '3')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'm12-06-fig-6.4',
        q: `Show that 2${NB}${sin(x)} + ${tan(x)} > 3${x} for all ${x} ∈ ${OPEN_PI2}.`,
        steps: [
          `Let ${hx} = 2${NB}${sin(x)} + ${tan(x)} − 3${x} on ${HALF_OPEN_PI2}, with ${h}(0) = 0. Then<br>${hpx} = 2${NB}${cos(x)} + ${sec2(x)} − 3.`,
          `We claim ${rel(hpx, '>', '0')} on ${OPEN_PI2}. Apply AM–GM to the three positive numbers ${cos(x)}, ${cos(x)}, ${sec2(x)}:<br>${fr(`${cos(x)} + ${cos(x)} + ${sec2(x)}`, '3')}<br>≥ <sup>3</sup>√(${cos(x)} · ${cos(x)} · ${sec2(x)})<br>= <sup>3</sup>√(${cos2(x)} · ${fr('1', cos2(x))}) = 1,<br>so 2${NB}${cos(x)} + ${sec2(x)} ≥ 3, hence ${rel(hpx, '≥', '0')}. Equality in AM–GM needs ${cos(x)} = ${sec2(x)}, i.e. cos<sup>3</sup>${NB}${x} = 1, i.e. ${x} = 0, which is excluded. Thus ${rel(hpx, '>', '0')} strictly on ${OPEN_PI2}.`,
          `So ${h} is strictly increasing there, giving ${hx} > ${h}(0) = 0, i.e.<br>2${NB}${sin(x)} + ${tan(x)} > 3${x} for all ${x} ∈ ${OPEN_PI2}. ■`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the intervals in which ${fx} = ${cube(x)} − 12${x} + 1 is strictly increasing and strictly decreasing.`,
            a: `Increasing on (−∞,${NB}−2] and on [2,${NB}∞), decreasing on ${CI('−2', '2')}.`,
          },
          {
            q: `<b>[CBSE]</b> Show that ${fx} = ${cube(x)} + 3${sq(x)} + 6${x} − 11 is strictly increasing on ℝ.`,
            a: `${fpx} = 3(${x} + 1)<sup>2</sup> + 3 > 0 for all ${x}.`,
          },
          {
            q: `<b>[JEE Main]</b> Determine the interval(s) on which ${fx} = ${x}(${x} − 4)<sup>2</sup> is decreasing.`,
            a: `Decreasing on ${CI(fr('4', '3'), '4')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find all ${a} for which ${fx} = ${I('ax')} − ${sin(x)} is increasing for every real ${x}.`,
            a: `${rel(a, '≥', '1')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Prove that ${tan(x)} > ${x} + ${fr(cube(x), '3')} for all ${x} ∈ ${OPEN_PI2}.`,
            a: `Let ${gx} = ${tan(x)} − ${x} − ${fr(cube(x), '3')}; show<br>${gpx} = tan<sup>2</sup>${NB}${x} − ${sq(x)}<br>= (${tan(x)} − ${x})(${tan(x)} + ${x}) > 0.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The function ${fx} = 2${cube(x)} + 9${sq(x)} + 12${x} − 4 is decreasing on:`,
        opts: [
          {
            label: `(−∞,${NB}−2]`,
            nudge: `<b>(A)</b> and <b>(C)</b> are the increasing intervals: a student who confuses “${rel(fp, '<', '0')} between roots” with “outside roots” flips these.`,
          },
          { label: CI('−2', '−1'), nudge: null },
          {
            label: `[−1,${NB}∞)`,
            nudge: `<b>(A)</b> and <b>(C)</b> are the increasing intervals: a student who confuses “${rel(fp, '<', '0')} between roots” with “outside roots” flips these.`,
          },
          { label: CI('−1', '1'), nudge: `<b>(D)</b> comes from misfactoring or testing the wrong sign at ${x} = 0.` },
        ],
        correct: 1,
        solution: `${fpx} = 6${sq(x)} + 18${x} + 12 = 6(${x} + 1)(${x} + 2), which is negative only between its roots, i.e. on ${OI('−2', '−1')}.`,
      },
      {
        t: 'mcq',
        q: 'Which of the following is strictly increasing on ℝ?',
        opts: [
          { label: `${fx} = ${x} − ${sin(x)}`, nudge: null },
          { label: `${fx} = ${cos(x)}`, nudge: '<b>(B)</b> oscillates.' },
          { label: `${fx} = ${sq(x)}`, nudge: `<b>(C)</b> decreases on ${OI('−∞', '0')}.` },
          {
            label: `${fx} = ${ONE_X}`,
            nudge: '<b>(D)</b> isn’t even defined on all of ℝ, and is decreasing on each piece: the classic “disconnected domain” trap.',
          },
        ],
        correct: 0,
        solution: `${fpx} = 1 − ${cos(x)} ≥ 0, zero only at isolated points ${x} = 2${n}π: strictly increasing.`,
      },
      {
        t: 'mcq',
        q: `${fx} = ${x}(${x} − 3)<sup>2</sup> is decreasing for ${x} ∈:`,
        opts: [
          { label: OI('1', '3'), nudge: null },
          { label: OI('−∞', '1'), nudge: '<b>(B)</b> and <b>(C)</b> are increasing regions.' },
          { label: OI('3', '∞'), nudge: '<b>(B)</b> and <b>(C)</b> are increasing regions.' },
          {
            label: OI('0', '3'),
            nudge: `<b>(D)</b> keeps only the term ${x} · 2(${x} − 3) (forgets the product rule), whose roots are 0 and 3.`,
          },
        ],
        correct: 0,
        solution: `${fpx} = (${x} − 3)<sup>2</sup> + ${x} · 2(${x} − 3)<br>= (${x} − 3)(3${x} − 3) = 3(${x} − 3)(${x} − 1),<br>negative on ${OI('1', '3')}.`,
      },
      {
        t: 'mcq',
        q: `If ${fx} = ${cube(x)} + ${b}${sq(x)} + 3${x} + 5 is strictly increasing on ℝ, then ${b} lies in:`,
        opts: [
          {
            label: OI('−3', '3'),
            nudge: `<b>(A)</b> is the trap for students who write the discriminant condition as strict (<${NB}0) and exclude the endpoints, but Δ = 0 still gives strict increase via an isolated zero.`,
          },
          { label: CI('−3', '3'), nudge: null },
          { label: `(−∞,${NB}−3] ∪ [3,${NB}∞)`, nudge: '<b>(C)</b> inverts the inequality.' },
          { label: 'ℝ', nudge: '<b>(D)</b> ignores the constraint entirely.' },
        ],
        correct: 1,
        solution: `Need ${fpx} = 3${sq(x)} + 2${b}${x} + 3 ≥ 0 for all ${x}<br>⇒ Δ = 4${sq(b)} − 36 ≤ 0 ⇒ ${b} ∈ ${CI('−3', '3')}.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Merging disjoint intervals.</b> Writing “${ONE_X} is decreasing on ℝ ∖ {0}” as a single decreasing claim. Each side is decreasing; the union is not. Always split at domain breaks.`,
          `<b>Demanding ${rel(fp, '>', '0')} when ≥${NB}0 suffices.</b> Rejecting ${cube(x)} or ${x} − ${sin(x)} as “not strictly increasing” because ${rel(fp, '=', '0')} somewhere. Isolated zeros are fine: say so explicitly to bag the mark.`,
          `<b>Sign-chart slips.</b> Testing only one point, or losing a factor’s sign. Always factor ${fp} fully and test every sub-interval.`,
          `<b>Endpoint paranoia.</b> Worrying whether to write ( ) or [ ] at critical points. When ${f} is continuous there, closed brackets are accepted for strict monotonicity in CBSE.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For “prove increasing on ℝ,” don’t draw a chart: just bound ${fp}. Complete the square (3${sq(x)} + 2${b}${x} + 3), or use −1 ≤ ${cos(x)} ≤ 1, to show ${rel(fp, '≥', '0')} in one move. For MCQs, factor ${fp} and read the sign of the middle interval first: when the roots of ${fp} are simple, it instantly fixes the whole pattern by alternation.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Sign rule</b>',
            note: `${rel(fpx, '>', '0')} ⇒ strictly increasing; ${rel(fpx, '<', '0')} ⇒ strictly decreasing; ${rel(fpx, '=', '0')} ∀${x} ⇒ constant.`,
          },
          { f: '<b>Sharper</b>', note: `${rel(fpx, '≥', '0')} with isolated zeros ⇒ still strictly increasing (think ${cube(x)}).` },
          {
            f: '<b>Method</b>',
            note: `domain → differentiate → factor ${fp} → critical points (${rel(fp, '=', '0')} or undefined) → sign chart → translate.`,
          },
          {
            f: '<b>Increasing-on-ℝ trick</b>',
            note: `show ${rel(fpx, '≥', '0')} for all ${x} (complete the square / bound trig). Quadratic ${fp}: need discriminant ≤${NB}0.`,
          },
          { f: '<b>Inequality proofs</b>', note: `define ${g} = LHS − RHS, show ${gp} has fixed sign, anchor at a known point.` },
          { f: '<b>Trap</b>', note: 'never merge monotonic intervals across a domain gap.' },
        ],
        aids: ['<b>“Slope says go”:</b> positive slope, function goes up; negative slope, function goes down.'],
      },
    ],
  },
];
