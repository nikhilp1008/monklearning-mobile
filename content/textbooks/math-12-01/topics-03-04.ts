import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 03–04, pp. 65–81 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 03
 * Composition and Inverse of Functions (pp. 65–74) and Subtopic 04 Domain and
 * Range of Real Functions (pp. 75–81). Each topic opens with its "Exam
 * Relevance:" box as a part of its own (Topic 03's italic note after the box,
 * "This subtopic covers two tightly linked ideas …", closes that part), then is
 * split at its Sections 1 to 8. Figure 1.5 (caption p. 66, drawn p. 67) stands
 * where its caption is printed, after the socks-and-shoes paragraph. No
 * unnumbered drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const f = I('f');
const g = I('g');
const h = I('h');
const x = I('x');
const y = I('y');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const P = I('P');
const Q = I('Q');
const S = I('S');
/** f ∘ g, kept on one line. */
const o = (u: string, v: string) => `${u}${NB}∘${NB}${v}`;
const inv = (s: string) => `${s}<sup>−1</sup>`;
const fi = inv(f);
const gi = inv(g);
const fog = o(f, g);
const gof = o(g, f);
const fx = `${f}(${x})`;
const gx = `${g}(${x})`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const x2 = sq(x);
const id = (s: string) => `${I('I')}<sub>${s}</sub>`;
const IA = id(A);
const IB = id(B);
const IC = id(C);
const cube = (s: string) => `(${s})<sup>1/3</sup>`;
const minus = (s: string) => `ℝ${NB}∖${NB}{${s}}`;
const ge0 = (s: string) => `${s}${NB}≥${NB}0`;
const AXB = fr(`${a}${x} + ${b}`, `${c}${x} + ${d}`);
const AC = fr(a, c);
const C_AD = `${c}${NB}≠${NB}0, ${I('ad')}${NB}≠${NB}${I('bc')}`;
const THIRD = fr('1', '3');
const HALF = fr('1', '2');
const RANGE_X = fr(x, `1 + ${x2}`);
const LOGARG = fr(`${x} − 2`, `${x} + 1`);
const X33 = fr(`${x} − 3`, '2');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · pp. 65–74 ────────────────
  {
    n: '03',
    title: 'Composition and Inverse of Functions',
    kalam: 'Composition and inverse meet right here: the inverse is defined as the thing that composes with f to give “do nothing.”',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A high-yield pairing. CBSE Boards routinely ask a 3–4 mark “find ${fog} and ${gof}” or “find ${fi} and verify it” question ${ESTIMATE}. JEE Main carries 1–2 MCQs on composite evaluation, the order-reversal law, or finding an inverse ${ESTIMATE}. JEE Advanced builds multi-composition fixed-point problems and inverse-of-restricted-domain problems (often multi-correct). CUET tests direct computation of composites and inverses. (Not in NEET: no mathematics section.)`,
      },
      {
        t: 'p',
        html: 'This topic covers two tightly linked ideas: <b>03a Composition</b> (chaining functions) and <b>03b Inverse</b> (undoing a function). They are coupled because an inverse is precisely the function that “undoes” the original under composition.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>03a Composition: functions in series</b><br>Imagine a two-stage water system at home: first an RO purifier, then a chiller. Pour in tap water, the purifier cleans it, and its output immediately feeds the chiller, which cools it. The whole assembly (tap water in, cold clean water out) is a <b>composition</b> of two machines.',
      },
      {
        t: 'p',
        html: `That is exactly what function composition is. Given ${f} and ${g}, the composite ${gof} means: run ${f} first, then feed its output into ${g}. In symbols,<br>(${gof})(${x}) = ${g}(${fx}).`,
      },
      {
        t: 'p',
        html: `The single most important habit to build: <b>the innermost function acts first.</b> In ${gof}, even though ${g} is written on the left, it is ${f} that touches ${x} first. Reading right-to-left (“${g} after ${f}”) keeps you safe.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Composition is a relay race. Runner ${f} runs the first leg and hands the baton (its output) to runner ${g}. If you swap who runs first, you usually get a different race, which is why <b>composition is not commutative</b>: in general ${gof}${NB}≠${NB}${fog}. (It is associative, though: chaining three machines ${h}${NB}∘${NB}(${gof}) gives the same result as (${o(h, g)})${NB}∘${NB}${f}: the grouping doesn’t matter, only the order.)`,
      },
      {
        t: 'p',
        html: `<b>Limiting condition for 03a:</b> the chain only makes sense if the baton can actually be passed: the <b>range of the inner function must lie inside the domain of the outer function</b>. If ${f} outputs a negative number but ${g} only accepts positives, the handoff fails and ${gof} is undefined there.`,
      },
      {
        t: 'p',
        html: `<b>03b Inverse: the undo button</b><br>Now picture pressing <b>Ctrl+Z</b>. Whatever the last action did, undo reverses it perfectly, landing you back exactly where you started. An <b>inverse function</b> ${fi} is the Ctrl+Z of ${f}: if ${f} sends ${a} to ${b}, then ${fi} sends ${b} straight back to ${a}. Formally, ${fi} is the function that satisfies<br>${o(fi, f)} = ${I('I')} and ${o(f, fi)} = ${I('I')},<br>where ${I('I')} is the identity (the “do nothing” function). Composition and inverse meet right here: the inverse is defined as the thing that composes with ${f} to give “do nothing.”`,
      },
      {
        t: 'p',
        html: `But here is the catch that makes or breaks the whole idea: <b>not every function has an inverse.</b> For the undo to work, ${f} must be <b>bijective</b>: one-one and onto. Why? If ${f} were many-one (say both 2 and −2 map to 4 under squaring), then ${fi}(4) wouldn’t know whether to return 2 or −2: the undo is ambiguous. And if ${f} weren’t onto, some target would have no input to return to. So:<br>${f} is invertible ⟺ ${f} is bijective.`,
      },
      {
        t: 'p',
        html: 'This is the bridge straight from Topic 02: every bijection you classified there is exactly a function you can now invert.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> To get dressed you put on socks, then shoes. To undo it, you must take off shoes first, then socks: the reverse order. That’s the famous <b>socks-and-shoes rule</b>: (${gof})<sup>−1</sup> = ${o(fi, gi)}. You undo a chain by undoing each step in reverse order.`,
      },
      { t: 'fig', id: 'm12-01-fig-1.5' },
      {
        t: 'p',
        html: `<b>Limiting condition for 03b:</b> an inverse exists only over a domain/codomain where ${f} is bijective. A non-bijective function can still be inverted, but only after you <b>restrict</b> it (e.g. ${x2} has no inverse on ℝ, but ${x2} : [0, ∞) → [0, ∞) does, and its inverse is √${x}).`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `Let ${f} : ${A} → ${B}, ${g} : ${B} → ${C}, ${h} : ${C} → ${D} be functions, and ${IA} the identity on ${A}.<br><br><b>03a Composition</b>`,
      },
      {
        t: 'formula',
        kicker: 'Composition',
        main: `(${gof})(${x}) = ${g}(${fx})<br>Needs: Range(${f}) ⊆ Dom(${g})`,
        legend: [
          `${f} = a function from ${A} to ${B}`,
          `${g} = a function from ${B} to ${C}`,
          `${gof} = the composite of ${g} with ${f}, from ${A} to ${C}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Properties:<br>• <b>Not commutative:</b> in general ${gof}${NB}≠${NB}${fog}.<br>• <b>Associative:</b> ${h}${NB}∘${NB}(${gof}) = (${o(h, g)})${NB}∘${NB}${f}.<br>• <b>Identity:</b> ${o(f, IA)} = ${f} = ${o(IB, f)}.<br>• <b>Inheritance:</b> if ${f},${NB}${g} are both injective then ${gof} is injective; both surjective ⇒ ${gof} surjective; both bijective ⇒ ${gof} bijective.<br>• <b>Partial converse:</b> if ${gof} is injective then ${f} is injective; if ${gof} is surjective then ${g} is surjective.`,
      },
      { t: 'p', html: '<b>03b Inverse</b>' },
      {
        t: 'formula',
        kicker: 'Inverse',
        main: `${fi} exists ⟺ ${f} is bijective<br>${o(fi, f)} = ${IA}<br>${o(f, fi)} = ${IB}<br>Dom(${fi}) = Range(${f})`,
        legend: [`${fi} = the inverse of ${f}`, `${IA} = the identity on ${A}`, `${IB} = the identity on ${B}`],
        note: null,
      },
      {
        t: 'p',
        html: `Properties:<br>• <b>Uniqueness:</b> if an inverse exists, it is unique.<br>• <b>Self-undoing:</b> (${fi})<sup>−1</sup> = ${f}.<br>• <b>Order reversal (socks-and-shoes):</b> (${gof})<sup>−1</sup> = ${o(fi, gi)}.<br>• <b>Domain–range swap:</b> Dom(${fi}) = Range(${f}) and Range(${fi}) = Dom(${f}).<br>• <b>Caution:</b> ${fi}(${x}) ≠ ${fr('1', fx)}. The superscript −1 here means inverse function, <b>not</b> reciprocal.`,
      },
      {
        t: 'p',
        html: `<b>Counting note</b> (links to Topic 02): the number of invertible functions from a set to itself with ${n} elements equals the number of bijections, ${n}!.`,
      },
      {
        t: 'p',
        html: `<b>Notation lock (carried forward):</b> ${f}, ${g}, ${h} functions; ∘ composition; ${IA} identity on ${A}; ${fi} inverse. Innermost-first reading convention fixed throughout.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: `<b>Procedure A: Computing a composite ${gof}.</b> Substitute the entire formula of ${f} into every occurrence of the variable in ${g}. <b>Reasoning:</b> ${g} receives ${fx} as its raw input, so wherever ${g}’s rule says “input,” write “${fx}.” Then simplify. Always confirm the handoff condition Range(${f}) ⊆ Dom(${g}).`,
      },
      {
        t: 'proc',
        title: 'Procedure B: Finding an inverse (swap-and-solve)',
        steps: [
          '<b>Check bijectivity first</b>: no inverse exists otherwise (restrict the domain/codomain if needed).',
          `Write ${y} = ${fx}.`,
          `<b>Solve for</b> ${x} in terms of ${y}.`,
          `<b>Swap symbols:</b> replace ${y} by ${x} to express ${fi}(${x}).`,
          `State the domain of ${fi} (= range of ${f}).`,
        ],
      },
      {
        t: 'p',
        html: `<b>Reasoning:</b> step 3 literally reverses the input–output relationship; step 4 is just cosmetic, renaming the free variable so the answer reads as a function of ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Procedure C: Verifying a claimed inverse.</b> Confirm <b>both</b> ${f}(${gx}) = ${x} and ${g}(${fx}) = ${x}. <b>Why both:</b> one equation alone only guarantees a one-sided inverse; a genuine two-sided inverse needs both compositions to collapse to the identity.`,
      },
      {
        t: 'p',
        html: `<b>Derivation: the order-reversal law (${gof})<sup>−1</sup>${NB}=${NB}${o(fi, gi)}.</b>`,
      },
      {
        t: 'p',
        html: `<b>Setup:</b> let ${f} : ${A} → ${B} and ${g} : ${B} → ${C} both be bijective, so ${gof} : ${A} → ${C} is bijective and therefore invertible. We claim its inverse is ${o(fi, gi)}. To prove a function is the inverse of ${gof}, it suffices to show it composes with ${gof} to give the identity on both sides.`,
      },
      {
        t: 'p',
        html: `Compose in one direction:<br>(${o(fi, gi)})${NB}∘${NB}(${gof}).<br>Using associativity to regroup,<br>= ${fi}${NB}∘${NB}(${o(gi, g)})${NB}∘${NB}${f}<br>= ${fi}${NB}∘${NB}${IB}${NB}∘${NB}${f}.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning:</b> the inner pair ${o(gi, g)} collapses to the identity ${IB} (that’s what an inverse does). The identity then disappears under composition:<br>= ${o(fi, f)} = ${IA}.`,
      },
      {
        t: 'p',
        html: `An identical argument in the other direction gives (${gof})${NB}∘${NB}(${o(fi, gi)}) = ${IC}. Since ${o(fi, gi)} composes with ${gof} to give the identity on both sides, and inverses are unique, we conclude<br>(${gof})<sup>−1</sup> = ${o(fi, gi)}. ■`,
      },
      {
        t: 'p',
        html: `<b>Physical meaning:</b> to undo “do ${f} then ${g},” you must undo ${g} first and ${f} last: socks and shoes.`,
      },
      {
        t: 'formula',
        kicker: 'Inverse of a composite (socks and shoes)',
        main: `(${gof})<sup>−1</sup> = ${o(fi, gi)}`,
        legend: [`${f}, ${g} = bijections, ${f} applied first`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (Composition)',
        q: `Let ${f},${NB}${g} : ℝ → ℝ be ${fx} = 3${x} + 1 and ${gx} = ${x2} − 2. Find ${fog} and ${gof}, and hence show ${fog}${NB}≠${NB}${gof}.`,
        steps: [
          `<b>${fog}:</b> feed ${gx} into ${f}:<br>(${fog})(${x}) = ${f}(${gx}) = 3(${x2} − 2) + 1<br>= 3${x2} − 6 + 1 = 3${x2} − 5.`,
          `<b>${gof}:</b> feed ${fx} into ${g}:<br>(${gof})(${x}) = ${g}(${fx}) = (3${x} + 1)<sup>2</sup> − 2<br>= 9${x2} + 6${x} + 1 − 2 = 9${x2} + 6${x} − 1.`,
          `Since 3${x2} − 5 ≠ 9${x2} + 6${x} − 1 (check ${x} = 2: ${fog} gives 7, ${gof} gives 47), we have ${fog}${NB}≠${NB}${gof}. <b>Composition is not commutative.</b>`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (Inverse)',
        q: `(a) Find ${fi} for ${fx} = 7 − 3${x} using the “undo in reverse” method. (b) Which of ${p}(${x}) = ${fr('1', x)}, ${q}(${x}) = 2${x}, ${r}(${x}) = ${x} + 5 is its own inverse?`,
        steps: [
          `<b>(a) Undo in reverse.</b> ${f} does two things to ${x}: multiply by −3, then add 7. To undo, reverse the order and the operations: subtract 7, then divide by −3:<br>${fi}(${x}) = ${fr(`${x} − 7`, '−3')} = ${fr(`7 − ${x}`, '3')}.`,
          `<b>Trap to avoid:</b> ${fi}(${x}) ≠ ${fr('1', `7 − 3${x}`)}. The reciprocal is not the inverse.`,
          `<b>(b)</b> A function is its own inverse (an involution) when applying it twice returns ${x}. Test by composing:<br>• ${p}(${p}(${x})) = ${fr('1', fr('1', x))} = ${x} ✓: ${p}(${x}) = ${fr('1', x)} <b>is its own inverse.</b><br>• ${q}(${q}(${x})) = 2(2${x}) = 4${x} ≠ ${x} ✗.<br>• ${r}(${r}(${x})) = (${x} + 5) + 5 = ${x} + 10 ≠ ${x} ✗.`,
          `<b>Speed lesson:</b> to invert a linear function, peel operations off in reverse; to spot a self-inverse, compose it with itself and look for ${x}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Inverse of a rational function)',
        q: `Let ${f} : ${minus('3')} → ${minus('2')} be defined by ${fx} = ${fr(`2${x} − 1`, `${x} − 3`)}. Find ${fi}(${x}) and state its domain.`,
        steps: [
          `<b>Bijectivity (link to Topic 02):</b> this Möbius-type map is one-one and onto between the stated sets, so ${fi} exists. Now swap-and-solve.`,
          `Set ${y} = ${fr(`2${x} − 1`, `${x} − 3`)} and clear the fraction:<br>${y}(${x} − 3) = 2${x} − 1<br>⟹ ${I('yx')} − 3${y} = 2${x} − 1<br>⟹ ${x}(${y} − 2) = 3${y} − 1.<br><br>∴ ${x} = ${fr(`3${y} − 1`, `${y} − 2`)}.`,
          `Swap ${y} → ${x}:<br>${fi}(${x}) = ${fr(`3${x} − 1`, `${x} − 2`)}, domain ${minus('2')}.`,
          `<b>Sanity check:</b> Dom(${fi}) = ${minus('2')} = Range(${f}), and Range(${fi}) = ${minus('3')} = Dom(${f}): the domain–range swap holds, confirming the answer.`,
        ],
        ans: `${fi}(${x}) = ${fr(`3${x} − 1`, `${x} − 2`)}, domain ${minus('2')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (Composition + Inverse fused)',
        q: `Let ${f},${NB}${g} : ℝ → ℝ be ${fx} = ${x}<sup>3</sup> + 2 and ${gx} = 2${x} − 1. Find (${gof})<sup>−1</sup>(${x}) two independent ways (directly, and via the order-reversal law) and confirm they agree.`,
        steps: [
          `<b>Way 1: direct.</b> First build the composite:<br>(${gof})(${x}) = ${g}(${fx}) = 2(${x}<sup>3</sup> + 2) − 1 = 2${x}<sup>3</sup> + 3.`,
          `Invert it: set ${y} = 2${x}<sup>3</sup> + 3<br>⇒ ${x}<sup>3</sup> = ${fr(`${y} − 3`, '2')}<br><br>⇒ ${x} = ${cube(fr(`${y} − 3`, '2'))}. So<br><br>(${gof})<sup>−1</sup>(${x}) = ${cube(X33)}.`,
          `<b>Way 2: order-reversal law.</b> Find each inverse separately (here (·)<sup>1/3</sup> means the real cube root):<br>${fi}(${x}) = ${cube(`${x} − 2`)},<br>${gi}(${x}) = ${fr(`${x} + 1`, '2')}.`,
          `Then (${gof})<sup>−1</sup> = ${o(fi, gi)} (socks-and-shoes), so<br>(${o(fi, gi)})(${x}) = ${fi}(${fr(`${x} + 1`, '2')})<br><br>= ${cube(`${fr(`${x} + 1`, '2')} − 2`)}<br><br>= ${cube(fr(`${x} + 1 − 4`, '2'))}<br><br>= ${cube(X33)}.`,
          `<b>Both methods give</b> ${cube(X33)}. ✓ The agreement is not a coincidence: it is the order-reversal law in action. <b>Deeper point:</b> note the order genuinely matters: computing ${o(gi, fi)} instead would give the wrong answer, because that tries to remove the socks before the shoes.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> For ${fx} = 2${x} + 1 and ${gx} = ${x2} on ℝ, find ${fog} and ${gof}.`,
            a: `(${fog})(${x}) = 2${x2} + 1; (${gof})(${x}) = (2${x} + 1)<sup>2</sup> = 4${x2} + 4${x} + 1.`,
          },
          {
            q: `<b>[CUET]</b> Find the inverse of ${f} : ℝ → ℝ, ${fx} = ${fr(`${x} − 5`, '4')}.`,
            a: `${fi}(${x}) = 4${x} + 5.`,
          },
          {
            q: `<b>[JEE Main]</b> Let ${f} : ℝ → ℝ, ${fx} = ${x}<sup>3</sup> − 4. Find ${fi}(${x}).`,
            a: `${fi}(${x}) = ${cube(`${x} + 4`)}.`,
          },
          {
            q: `<b>[JEE Main]</b> If ${f} and ${g} are invertible with ${fx} = 2${x} + 3 and ${gx} = ${x} − 1, find (${gof})<sup>−1</sup>(${x}).`,
            a: `(${gof})(${x}) = 2${x} + 2, so (${gof})<sup>−1</sup>(${x}) = ${fr(`${x} − 2`, '2')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find all real ${a} for which ${fx} = ${fr(`${a}${x} + 1`, `${x} − ${a}`)} (on a suitable domain) satisfies (${o(f, f)})(${x}) = ${x} for all ${x} in its domain.`,
            a: `Every real ${a}: ${f} is an involution for all ${a} (since ${f}(${fx}) = ${x} identically); the map is self-inverse.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${fx} = 3${x2} − 5 and ${gx} = ${fr(x, `${x2} + 1`)}, then (${gof})(${x}) equals:`,
        opts: [
          { label: fr(`3${x2} − 5`, `9${x}<sup>4</sup> − 30${x2} + 26`), nudge: null },
          {
            label: fr(`3${x2} − 5`, `9${x}<sup>4</sup> + 6${x2} + 26`),
            nudge: `<b>(b)</b> mis-expands (3${x2} − 5)<sup>2</sup>: its cross term is −30${x2}, not +6${x2}.`,
          },
          {
            label: fr(`3${x2}`, `2${x2} + 4`),
            nudge: `<b>(c)</b> has the wrong numerator (3${x2} instead of 3${x2} − 5) and a corrupted denominator.`,
          },
          {
            label: fr(`3${x2}`, `9${x}<sup>4</sup> − 30${x2} + 2`),
            nudge: `<b>(d)</b> has the wrong numerator (3${x2} instead of 3${x2} − 5) and a corrupted denominator.`,
          },
        ],
        correct: 0,
        solution: `Feed ${fx} = 3${x2} − 5 into ${g}: numerator = 3${x2} − 5; denominator = (3${x2} − 5)<sup>2</sup> + 1 = 9${x}<sup>4</sup> − 30${x2} + 25 + 1 = 9${x}<sup>4</sup> − 30${x2} + 26.`,
      },
      {
        t: 'mcq',
        q: `If ${f} : ${A} → ${B} and ${g} : ${B} → ${C} are bijections, then (${gof})<sup>−1</sup> is:`,
        opts: [
          { label: o(fi, gi), nudge: null },
          {
            label: o(gi, fi),
            nudge: '<b>(b)</b> keeps the same order: the most common error; it tries to remove socks before shoes.',
          },
          { label: fog, nudge: '<b>(c)</b> confuses the inverse with the composite itself.' },
          { label: gof, nudge: '<b>(d)</b> confuses the inverse with the composite itself.' },
        ],
        correct: 0,
        solution: 'The order-reversal (socks-and-shoes) law: undo the last-applied function first.',
      },
      {
        t: 'mcq',
        q: 'Which function ℤ → ℤ is invertible?',
        opts: [
          {
            label: `${fx} = ${x2}`,
            nudge: `<b>(a)</b> is many-one (${x} and −${x} share an image): not one-one, so not invertible.`,
          },
          { label: `${fx} = ${x} + 2`, nudge: null },
          {
            label: `${fx} = |${x}|`,
            nudge: `<b>(c)</b> |${x}| is both many-one and not onto (negatives never hit).`,
          },
          {
            label: `${fx} = ${x2} + 1`,
            nudge: `<b>(d)</b> is many-one (${x} and −${x} share an image): not one-one, so not invertible.`,
          },
        ],
        correct: 1,
        solution: `${fx} = ${x} + 2 is a bijection on ℤ (one-one and onto), so it has an inverse, ${fi}(${x}) = ${x} − 2. Invertible ⟺ bijective: the link from Topic 02.`,
      },
      {
        t: 'mcq',
        q: `For ${f} : ℝ → ℝ, ${fx} = 4${x} − 9, the value of ${fi}(3) is:`,
        opts: [
          {
            label: THIRD,
            nudge: `<b>(a)</b> is ${fr('1', `${f}(3)`)} = ${THIRD}, the reciprocal trap ${fi} ≠ ${fr('1', f)}.`,
          },
          { label: '3', nudge: null },
          {
            label: `−${fr('3', '2')}`,
            nudge: `<b>(c)</b> uses ${fr(`${x} − 9`, '4')} instead of ${fr(`${x} + 9`, '4')} and gets −${fr('3', '2')}.`,
          },
          { label: 'cannot be found', nudge: '<b>(d)</b> wrongly assumes a linear function isn’t invertible.' },
        ],
        correct: 1,
        solution: `${fi}(${x}) = ${fr(`${x} + 9`, '4')}, so ${fi}(3) = ${fr('12', '4')} = 3. (Check: ${f}(3) = 4(3) − 9 = 3 ✓.)`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Treating composition as commutative.</b> ${fog} and ${gof} are almost always different. Always respect the order, and read <b>innermost-first</b>: in ${gof}, ${f} touches ${x} first.`,
          `<b>The reciprocal trap.</b> ${fi}(${x}) is the inverse function, <b>never</b> ${fr('1', fx)}. The same superscript means two different things on functions vs numbers: keep them apart.`,
          `<b>Inverting a non-bijective function.</b> No inverse exists unless ${f} is one-one and onto. If it isn’t, you must <b>restrict</b> the domain/codomain first (e.g. ${x2} needs ${ge0(x)} and the codomain [0, ∞) to give √${x}).`,
          `<b>Keeping the same order when inverting a composite.</b> (${gof})<sup>−1</sup> = ${o(fi, gi)}, <b>not</b> ${o(gi, fi)}: reverse the order (socks and shoes).`,
          `<b>Forgetting the domain–range swap.</b> When you write ${fi}, its domain is the range of ${f}; always state it.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> To find a linear/rational inverse fast, use <b>swap-and-solve</b> (${y} = ${fx}, solve for ${x}, rename). To verify any claimed inverse in seconds, just check that ${f}(${fi}(${x})) = ${x}: if it collapses to ${x}, you’re done. And to evaluate ${fi}(${c}) without finding the whole inverse, simply <b>solve</b> ${fx} = ${c} for ${x}: that single value is ${fi}(${c}).`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>03a Composition</b>', note: '' },
          {
            f: `(${gof})(${x}) = ${g}(${fx})`,
            note: `<b>innermost (${f}) acts first</b>. Needs Range(${f}) ⊆ Dom(${g}).`,
          },
          {
            f: `<b>Not commutative</b> (${gof}${NB}≠${NB}${fog}) but <b>associative</b> (${h}${NB}∘${NB}(${gof}) = (${o(h, g)})${NB}∘${NB}${f}).`,
            note: '',
          },
          { f: `Both injective/surjective/bijective ⇒ so is ${gof}.`, note: '' },
          { f: '<b>03b Inverse</b>', note: '' },
          {
            f: `Exists ⟺ ${f} is <b>bijective</b>. Defined by ${o(fi, f)} = ${I('I')} = ${o(f, fi)}.`,
            note: '',
          },
          {
            f: '<b>Find it</b>',
            note: `${y} = ${fx} → solve for ${x} → swap ${x} ↔ ${y}. Domain of ${fi} = range of ${f}.`,
          },
          { f: `(${fi})<sup>−1</sup> = ${f}; (${gof})<sup>−1</sup> = ${o(fi, gi)} (reverse order).`, note: '' },
          { f: `${fi}(${x}) ≠ ${fr('1', fx)}.`, note: '' },
        ],
        aids: [
          '“<b>Socks and shoes</b>” ⇒ undo in reverse order.',
          `“<b>Inverse undoes</b>, reciprocal divides”: keep ${fi} and ${fr('1', f)} apart.`,
          '“<b>Innermost first</b>” for reading composites.',
          '“<b>No bijection, no inverse.</b>”',
        ],
      },
    ],
  },

  // ──────────────── Topic 04 · pp. 75–81 ────────────────
  {
    n: '04',
    title: 'Domain and Range of Real Functions',
    kalam: 'Every function is a machine, and two questions decide what it can do.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The workhorse skill of the whole chapter. JEE Main almost always has 1–2 questions that hinge on finding a domain or range ${ESTIMATE}. JEE Advanced embeds it inside logarithm/root nests and inequalities. CUET tests it directly. CBSE Boards use it implicitly whenever a function is defined. (Not in NEET: no mathematics section.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Every function is a machine, and two questions decide what it can do. <b>Which inputs is it allowed to accept?</b> That set is the <b>domain</b>. <b>Which outputs can it actually produce?</b> That set is the <b>range</b>. For real functions, both live inside the real numbers ℝ, and almost every domain question reduces to avoiding three “illegal moves” that mathematics forbids.',
      },
      {
        t: 'p',
        html: 'Think of it like a kitchen. The domain is the list of ingredients the recipe will accept; hand it something it can’t process and the machine jams. For algebraic, exponential and logarithmic formulas there are three jams to watch for (a log’s base must also be positive and ≠ 1, and inverse trigonometric functions add their own limits in Chapter 2):<br>1. <b>Division by zero.</b> Any denominator that becomes 0 is forbidden: the machine explodes there.<br>2. <b>Even root of a negative.</b> √negative is not real, so whatever sits under a square (or fourth, sixth, …) root must be ≥ 0.<br>3. <b>Logarithm of a non-positive number.</b> log only accepts strictly positive inputs, so the argument of any log must be > 0.',
      },
      {
        t: 'p',
        html: 'Find every place these three jams could occur, write down the condition that avoids each, and <b>intersect</b> all the conditions: that intersection is the domain.',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> The range is the harder twin. Domain is “what am I allowed to put in?”; range is “what can possibly come out?”, and you usually can’t just read it off. The reliable trick is to turn the question inside out: set ${y} = ${fx}, solve for ${x} in terms of ${y}, and then ask for which values of ${y} does a legal ${x} exist? Those ${y}-values are the range. You’re essentially asking the machine to run backwards and seeing which outputs have a valid source.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Unless told otherwise, the domain of a real function is taken to be the <b>largest</b> subset of ℝ on which the formula makes sense (the “natural domain”). The range depends on the domain: shrink the domain and the range can shrink too. And the range is not automatically the codomain; “${f} : ℝ → ℝ” only promises outputs land somewhere in ℝ, not that every real is hit.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `For ${f} : ${A} → ℝ, the <b>domain</b> is ${A} (all permissible inputs) and the <b>range</b> is {${fx} ∶ ${x} ∈ ${A}} ⊆ ℝ (all actual outputs).`,
      },
      {
        t: 'table',
        title: 'Domain rules (the constraint catalogue)',
        head: ['Form', 'Condition for x to be allowed'],
        rows: [
          [`Polynomial ${a}<sub>${n}</sub>${x}<sup>${n}</sup> + ⋯ + ${a}<sub>0</sub>`, 'all of ℝ'],
          [`Rational ${fr(`${P}(${x})`, `${Q}(${x})`)}`, `${Q}(${x})${NB}≠${NB}0`],
          [`Even root <sup>2${k}</sup>√${gx}`, ge0(gx)],
          [`In a denominator ${fr('1', `√${gx}`)}`, `${gx}${NB}>${NB}0 (strict)`],
          [`log<sub>${a}</sub>${NB}${gx}`, `${gx}${NB}>${NB}0, with ${a}${NB}>${NB}0, ${a}${NB}≠${NB}1`],
        ],
      },
      {
        t: 'p',
        html: 'When several appear together, <b>solve each constraint and intersect</b>.',
      },
      {
        t: 'p',
        html: `<b>Standard ranges (worth memorising)</b><br>${x2} : [0, ∞),<br>|${x}| : [0, ∞),<br>${fr('1', x)} : ${minus('0')},<br><i>e</i><sup>${x}</sup> : (0, ∞),<br>ln${NB}${x} : ℝ,<br>sin${NB}${x}, cos${NB}${x} : [−1, 1].`,
      },
      {
        t: 'p',
        html: `<b>Range techniques</b><br>• <b>${y}-method (invert):</b> write ${y} = ${fx}, solve for ${x}, demand ${x} be real and in the domain.<br>• <b>Rational ${AXB}:</b> range = ${minus(AC)} (${C_AD}; ${y} = ${AC} is never attained).<br>• <b>Discriminant method:</b> for ${y} = ${fr('quadratic', 'quadratic')}, cross-multiply into a quadratic in ${x} and force discriminant ≥ 0.<br>• <b>Boundedness / monotonicity:</b> use known bounds (sin, cos) or a strictly increasing/decreasing shape.`,
      },
      {
        t: 'formula',
        kicker: 'Range of a linear rational function',
        main: `Range of ${AXB} = ℝ${NB}∖${NB}{${AC}}`,
        legend: [`${a}, ${b}, ${c}, ${d} = constants with ${C_AD}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation lock (carried forward):</b> Dom(${f}), Range(${f}); intervals in standard bracket notation; ℝ${NB}∖${NB}${S} for exclusion.`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'p',
        html: '<b>Procedure A: Finding the domain.</b> (1) Scan the formula for every denominator, even root, and logarithm. (2) Write the condition each imposes (≠ 0, ≥ 0, > 0). (3) Solve each as an equation/inequality. (4) <b>Intersect</b> all solution sets. <b>Reasoning:</b> the function is defined only where all constraints hold simultaneously, and “simultaneously” means intersection.',
      },
      {
        t: 'p',
        html: `<b>Procedure B: Finding the range by the ${y}-method.</b> (1) Put ${y} = ${fx}. (2) Solve algebraically for ${x}. (3) Determine the ${y}-values for which that ${x} is real and lies in the domain. <b>Reasoning:</b> a value ${y}<sub>0</sub> is in the range exactly when some legal input maps to it, i.e. when solving ${fx} = ${y}<sub>0</sub> yields a valid ${x}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation: range of</b> ${fx} = ${fr(`${x2} − ${x} + 1`, `${x2} + ${x} + 1`)} <b>(the discriminant method).</b>`,
      },
      {
        t: 'p',
        html: `Note first the denominator never vanishes:<br>${x2} + ${x} + 1 = (${x} + ${HALF})<sup>2</sup> + ${fr('3', '4')} > 0,<br>so the domain is all of ℝ. Set ${y} = ${fx} and cross-multiply:<br>${y}(${x2} + ${x} + 1) = ${x2} − ${x} + 1<br>⟹ (${y} − 1)${x2} + (${y} + 1)${x} + (${y} − 1) = 0.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning:</b> this is a quadratic in ${x}; for a real input ${x} to exist, its discriminant must be ≥ 0:<br>(${y} + 1)<sup>2</sup> − 4(${y} − 1)(${y} − 1) ≥ 0<br>⟹ (${y} + 1)<sup>2</sup> − 4(${y} − 1)<sup>2</sup> ≥ 0.`,
      },
      {
        t: 'p',
        html: `Factor as a difference of squares:<br>[(${y} + 1) − 2(${y} − 1)][(${y} + 1) + 2(${y} − 1)] ≥ 0<br>⟹ (3 − ${y})(3${y} − 1) ≥ 0.`,
      },
      {
        t: 'p',
        html: `This holds for ${THIRD} ≤ ${y} ≤ 3. We must also check the case ${y} = 1 (where the quadratic degenerates to linear): then 2${x} = 0 ⇒ ${x} = 0, which is valid, and ${y} = 1 already lies in [${THIRD}, 3]. Therefore<br><br>Range(${f}) = [${THIRD}, 3]. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the domain of ${fx} = √(${x} − 3) + ${fr('1', `${x} − 5`)}.`,
        steps: [
          `Two constraints: the root needs ${x} − 3 ≥ 0 ⇒ ${x} ≥ 3; the denominator needs ${x} − 5 ≠ 0 ⇒ ${x} ≠ 5. Intersecting,<br>Dom(${f}) = [3, 5) ∪ (5, ∞).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `Find the domain of ${fx} = log(${x2} − 4).`,
        steps: [
          `<b>Speed:</b> only one constraint: the log argument must be positive: ${x2} − 4 > 0 ⇒ ${x2} > 4 ⇒ |${x}| > 2. Hence<br>Dom(${f}) = (−∞, −2) ∪ (2, ∞).`,
          `<b>Trap avoided:</b> writing ${ge0(`${x2} − 4`)} (that’s the rule for a root, not a log) would wrongly include ${x} = ±2, where log${NB}0 is undefined.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the range of ${fx} = ${RANGE_X}, ${x} ∈ ℝ.`,
        steps: [
          `Domain is ℝ (denominator 1 + ${x2} ≥ 1 > 0). Apply the ${y}-method:<br>${y} = ${RANGE_X}<br>⟹ ${y}(1 + ${x2}) = ${x}<br>⟹ ${I('yx')}<sup>2</sup> − ${x} + ${y} = 0.`,
          `For real ${x}, discriminant ≥ 0:<br>(−1)<sup>2</sup> − 4(${y})(${y}) ≥ 0<br>⟹ 1 − 4${y}<sup>2</sup> ≥ 0<br>⟹ ${y}<sup>2</sup> ≤ ${fr('1', '4')}<br><br>⟹ −${HALF} ≤ ${y} ≤ ${HALF}.`,
          `(The degenerate case ${y} = 0 gives ${x} = 0, valid.) Therefore<br>Range(${f}) = [−${HALF}, ${HALF}].`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find the domain of ${fx} = √(log<sub>1/2</sub>(${LOGARG})).`,
        steps: [
          `Two layered constraints. <b>(i)</b> The log argument must be positive: ${LOGARG} > 0, true for ${x} < −1 or ${x} > 2. <b>(ii)</b> The square root needs its content ≥ 0:<br><br>log<sub>1/2</sub>(${LOGARG}) ≥ 0.`,
          `Because the base ${HALF} < 1, the log is ≥ 0 exactly when its argument is ≤ 1:<br>${LOGARG} ≤ 1<br><br>⟹ ${LOGARG} − 1 ≤ 0<br><br>⟹ ${fr(`(${x} − 2) − (${x} + 1)`, `${x} + 1`)} ≤ 0<br><br>⟹ ${fr('−3', `${x} + 1`)} ≤ 0 ⟹ ${x} > −1`,
          `<b>Intersect (i) and (ii):</b> {${x} < −1 or ${x} > 2} ∩ {${x} > −1} = (2, ∞). Therefore<br>Dom(${f}) = (2, ∞).`,
          '<b>Key subtlety:</b> the inequality direction in step (ii) <b>flips</b> because the log base is less than 1: the most common place students lose this problem.',
        ],
        ans: `Dom(${f}) = (2, ∞)`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the domain of ${fx} = ${fr(`${x} + 1`, `${x2} − 9`)}.`,
            a: `${minus('−3, 3')}.`,
          },
          {
            q: `<b>[CUET]</b> Find the domain of ${fx} = √(4 − ${x2}).`,
            a: '[−2, 2].',
          },
          {
            q: `<b>[JEE Main]</b> Find the range of ${fx} = ${fr(`2${x} + 3`, `${x} − 1`)}, ${x}${NB}≠${NB}1.`,
            a: `${minus('2')} (rational ${AXB}, excluded value ${AC} = 2).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the domain of ${fx} = ${fr('1', `√(${x} − |${x}|)`)}.`,
            a: `∅: for all ${x}, ${x} − |${x}| ≤ 0, so √ in a denominator (needs > 0) is never defined; the domain is empty.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the range of ${fx} = ${fr(`${x2} + 2${x} + 3`, `${x2} + 2${x} + 2`)}.`,
            a: `Writing ${f} = 1 + ${fr('1', `(${x} + 1)<sup>2</sup> + 1`)}; since (${x} + 1)<sup>2</sup> + 1 ≥ 1, the added term lies in (0, 1], so range = (1, 2].`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The domain of ${fx} = √(${x} − 2) + √(6 − ${x}) is:`,
        opts: [
          { label: '[2, 6]', nudge: null },
          { label: '(2, 6)', nudge: '<b>(b)</b> wrongly uses strict inequalities (roots allow equality).' },
          { label: '(−∞, 2] ∪ [6, ∞)', nudge: `<b>(c)</b> reverses both inequalities (${x} ≤ 2 or ${x} ≥ 6) instead of intersecting ${x} ≥ 2 and ${x} ≤ 6.` },
          { label: 'ℝ', nudge: '<b>(d)</b> ignores the constraints entirely.' },
        ],
        correct: 0,
        solution: `Need ${x} − 2 ≥ 0 and 6 − ${x} ≥ 0, i.e. ${x} ≥ 2 <b>and</b> ${x} ≤ 6; intersect to [2, 6].`,
      },
      {
        t: 'mcq',
        q: `The range of ${fx} = ${fr('1', `2 − sin${NB}3${x}`)} is:`,
        opts: [
          { label: `[${THIRD}, 1]`, nudge: null },
          { label: '[−1, 1]', nudge: `<b>(b)</b> is the range of sin, not of ${f}.` },
          { label: `(${THIRD}, 1)`, nudge: '<b>(c)</b> wrongly opens the endpoints (the bounds are attained).' },
          { label: `[${THIRD}, ∞)`, nudge: '<b>(d)</b> forgets the denominator is bounded below by 1.' },
        ],
        correct: 0,
        solution: `Since sin${NB}3${x} ∈ [−1, 1], the denominator 2 − sin${NB}3${x} ∈ [1, 3], so its reciprocal ranges over [${THIRD}, 1].`,
      },
      {
        t: 'mcq',
        q: `The domain of ${fx} = log<sub>10</sub>(1 − ${x}) is:`,
        opts: [
          { label: `${x} > 1`, nudge: '<b>(a)</b> flips the inequality.' },
          { label: `${x} < 1`, nudge: null },
          {
            label: `${x} ≤ 1`,
            nudge: `<b>(c)</b> allows ${x} = 1 where the argument is 0 (log undefined).`,
          },
          { label: `${x} ≠ 1`, nudge: '<b>(d)</b> treats it like a denominator condition.' },
        ],
        correct: 1,
        solution: `Log argument > 0 ⇒ 1 − ${x} > 0 ⇒ ${x} < 1.`,
      },
      {
        t: 'mcq',
        q: `If ${fx} = ${fr(`${x} − 3`, `${x} + 3`)}, the value ${y} that is <b>not</b> in the range is:`,
        opts: [
          { label: '0', nudge: `<b>(a)</b> ${y} = 0 occurs at ${x} = 3.` },
          { label: '1', nudge: null },
          { label: '−1', nudge: `<b>(c)</b> ${y} = −1 occurs at ${x} = 0.` },
          {
            label: '3',
            nudge: `<b>(d)</b> ${y} = 3 is attainable (at ${x} = −6); students confuse the excluded input ${x} = −3 with the excluded output, and drop its sign.`,
          },
        ],
        correct: 1,
        solution: `For ${AXB} the excluded range value is ${AC} = ${fr('1', '1')} = 1.<br><br>(Solving ${y} = ${fr(`${x} − 3`, `${x} + 3`)} gives ${x} = ${fr(`3(1 + ${y})`, `1 − ${y}`)}, undefined at ${y} = 1.)`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing the root rule with the log rule.</b> Under a root: ≥ 0. Inside a log: strictly > 0. Mixing them adds or drops boundary points.',
          '<b>Union instead of intersection.</b> Multiple constraints must hold together: always intersect, never union.',
          `<b>Forgetting the inequality flip for log base < 1.</b> log<sub>1/2</sub>(<i>t</i>) ≥ 0 ⟺ 0 < <i>t</i> ≤ 1: the direction reverses.`,
          `<b>Calling the codomain the range.</b> “${f} : ℝ → ℝ” does not mean the range is ℝ; always compute the actual outputs.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> For a rational ${AXB}, the range is instantly ${minus(AC)} (${C_AD}): no algebra needed. For sin / cos, push the known bound [−1, 1] through the operations rather than inverting. And for ${fr('quadratic', 'quadratic')}, reach straight for the <b>discriminant method</b>.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Three domain jams</b>',
            note: 'denominator ≠ 0 · even root ≥ 0 · log argument > 0. Solve each, then <b>intersect</b>.',
          },
          { f: `${fr('1', `√${g}`)} needs ${g} > 0 (strict); plain √${g} needs ${ge0(g)}.`, note: '' },
          {
            f: `<b>Range by ${y}-method</b>`,
            note: `${y} = ${fx} → solve for ${x} → keep ${y} giving real, in-domain ${x}.`,
          },
          { f: `Rational ${AXB}`, note: `range = ${minus(AC)} (${C_AD}).` },
          { f: fr('quad', 'quad'), note: 'cross-multiply, force <b>discriminant</b> ≥ 0.' },
          {
            f: 'Standard ranges',
            note: `${x2}, |${x}| : [0, ∞) · <i>e</i><sup>${x}</sup> : (0, ∞) · ln${NB}${x} : ℝ · sin, cos : [−1, 1].`,
          },
        ],
        aids: [
          '“<b>Root non-negative, Log strictly positive, Denominator never zero.</b>”',
          '“Constraints <b>meet</b> (intersect), they don’t <b>mingle</b> (union).”',
          '“Base below one ⇒ <b>flip</b> the log inequality.”',
        ],
      },
    ],
  },
];
