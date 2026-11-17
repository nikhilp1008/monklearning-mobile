import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 12, Topic 07: Limits of Sequences, pp. 1124–1137 of the Class 11
 * Mathematics Master Reference (October 2026 edition), word for word: the
 * "Additional Topics" part's Subtopic 07. The part's heading "Chapter 12: Limits
 * and Derivatives — Additional Topics" (p. 1124) is not copied; its opening
 * paragraphs and table open the Exam relevance part, before the box text. The
 * topic is then split at its Sections 1 to 8; the "Cheat Sheet Box" is the part
 * "Cheat sheet" (its box title "LIMITS OF SEQUENCES" is not copied).
 * The book's one drawing, its own "Figure 1" (the car and the train, p. 1126), is
 * the unnumbered drawing m11-12-07-d1, placed where its caption is printed, at
 * the end of "Concept intuition".
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (p: string, q: string) => `<frac><num>${p}</num><den>${q}</den></frac>`;
const lim = (s: string) => `lim<sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = ' ';

const n = '<i>n</i>';
const k = '<i>k</i>';
const x = '<i>x</i>';
const a = '<i>a</i>';
const e = '<i>e</i>';
const f = '<i>f</i>';
const t = '<i>t</i>';
const L = '<i>L</i>';
const M = '<i>M</i>';
const N = '<i>N</i>';
const A = (s: string) => `<i>a</i><sub>${s}</sub>`;
const AN = A(n);
const AN1 = A(`${n}+1`);
const BN = `<i>b</i><sub>${n}</sub>`;
const CN = `<i>c</i><sub>${n}</sub>`;
const SN = `<i>S</i><sub>${n}</sub>`;
const AN2 = `${AN}<sup>2</sup>`;
const AN12 = `${AN1}<sup>2</sup>`;
const NINF = `${n}→∞`;
const XINF = `${x}→∞`;
const LN = lim(NINF);
const LX = lim(XINF);
const N2 = `${n}<sup>2</sup>`;
const N3 = `${n}<sup>3</sup>`;
const N4 = `${n}<sup>4</sup>`;
const NK = `${n}<sup><i>k</i></sup>`;
const AP = `${a}<sup><i>n</i></sup>`;
const NN = `${n}<sup><i>n</i></sup>`;
const R1N = '<sup>1/<i>n</i></sup>';
const RT = (s: string) => `√(${s})`;
const FX = `${f}(${x})`;
const FN = `${f}(${n})`;
const SINPX = `sin(π${x})`;
const SINNP = `sin(${n}π)`;
const MINUS1N = '(−1)<sup><i>n</i></sup>';
const HALF = fr('1', '2');
const THIRD = fr('1', '3');
const QUARTER = fr('1', '4');
const ONE_N = fr('1', n);
const ONE_E = fr('1', e);
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const SK = SUM(`${k}=1`, n);
const T1 = `${n}(${n} + 1)`;
const S1F = fr(T1, '2');
const S2F = fr(`${n}(${n} + 1)(2${n} + 1)`, '6');
const S3F = `[${fr(T1, '2')}]<sup>2</sup>`;
const GROWTH = `ln ${n} ≪${NB}${NK} ≪${NB}${AP} ≪${NB}${n}! ≪${NB}${NN}`;
const GROWTHC = `(${k}${NB}>${NB}0,${NB}${a}${NB}>${NB}1)`;
const NFACT = `(${n}!)${R1N}`;
const SQ2 = `1<sup>2</sup> + 2<sup>2</sup> + ⋯ + ${N2}`;
const SQ3 = `1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ⋯ + ${N2}`;
const SUM235 = `(2<sup><i>n</i></sup> + 3<sup><i>n</i></sup> + 5<sup><i>n</i></sup>)${R1N}`;
const MAXB = `(${A('1')}<sup><i>n</i></sup> + ${A('2')}<sup><i>n</i></sup> + ⋯ + ${A('<i>m</i>')}<sup><i>n</i></sup>)${R1N}`;
const RN = (s: string) => RT(`${N2} + ${s}`);
const BOUNDLO = fr(n, RN(n));
const BOUNDHI = fr(n, RN('1'));
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 07 · pp. 1124–1137 ────────────────
  {
    n: '07',
    title: 'Limits of Sequences',
    kalam: 'A sequence limit can exist where the corresponding function limit does not.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topics 01–06 and Additional topics A and B between them cover this chapter’s function-limit and derivative machinery. This part adds one topic that completes the picture, and it is a structural one rather than a new technique.`,
      },
      {
        t: 'p',
        html: `Every limit in the chapter so far has been the limit of a <b>function of a real variable</b>: ${x} slides continuously toward ${a}, or continuously out to ±∞, and existence is settled by comparing two sides. Nowhere does the chapter treat the limit of a <b>sequence</b>: the behaviour of an ${n}-th term as ${n} → ∞ through the integers 1, 2, 3, … only. NCERT does not treat it (its Sandwich Theorem is stated for real functions ${FX} ≤ <i>g</i>(${x}) ≤ <i>h</i>(${x}) on a common domain, with ${x} → ${a}), yet JEE draws on it steadily: sum-form and recursive-sequence questions built on it are standing JEE Advanced items ${ESTIMATE}. The chapter also already quotes ${LN} (1 + ${ONE_N})<sup><i>n</i></sup> = ${e} in Topic 02’s formula table without ever saying what an ${n} → ∞ limit is.`,
      },
      { t: 'p', html: 'This part therefore adds one full topic, continuing the chapter’s topic numbering.' },
      {
        t: 'table',
        title: null,
        head: ['Item', 'Topic', 'Read after'],
        rows: [['Topic 07', 'Limits of Sequences', 'Topic 02 (junctions), Topic 05 (limits at infinity), Topic 06 (advanced techniques)']],
      },
      {
        t: 'p',
        html: `CBSE Boards do not test sequence limits under Chapter 12, but they do test the idea in disguise through the infinite-GP sum of Chapter 8, and a ∑-form limit is no harder than a 2–3 mark Boards question. JEE Main asks one question most sessions ${ESTIMATE}: usually a ∑-form limit resolved by the Chapter 8 summation formulas, or an ${n}-th root of a sum of powers. JEE Advanced pushes into recursively defined sequences (where you must prove convergence before you solve for the limit), the Sandwich Theorem applied to a sum whose number of terms grows, and assertion–reason questions built on the one-way bridge between function limits and sequence limits. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Every limit you have met so far has been a limit of a function of a continuous variable. When you write ${LX} ${FX}, the variable ${x} sweeps through every real number on its way out: it slides. When you write ${lim(`${x}→2`)} ${FX}, ${x} can creep in from the left or from the right, and the whole existence question is whether those two approaches agree.`,
      },
      {
        t: 'p',
        html: `A sequence behaves differently, and the difference is the entire point of this topic. A sequence ${AN} is a function whose input is restricted to the natural numbers. As ${n} grows, it does not slide: <b>it hops</b>. There is no value between ${n} = 7 and ${n} = 8, so there is no “left side” and no “right side”, and there is no finite point to approach at all. The only question a sequence limit can ever ask is: as you go far enough out along the list, do the terms settle onto a single number?`,
      },
      {
        t: 'p',
        html: `Think about it this way… picture the Delhi Metro’s Yellow Line. A car on the road above can stop anywhere at all: outside a shop, mid-block, at a signal. That is ${x}. The train below can only ever be at a station: Kashmere Gate, Chandni Chowk, Chawri Bazar. That is ${n}. Now suppose the stations are getting closer and closer together as you head south, converging on some final terminus. The train never stops between stations, and it approaches the terminus only from one direction, but it still has a perfectly definite destination. <b>A sequence limit is a destination approached by hopping, in one direction only (${n} only increases).</b>`,
      },
      {
        t: 'p',
        html: `This has a consequence that JEE loves. Because the train visits only the stations, it can miss trouble that the car drives straight through. Take ${FX} = ${SINPX}. The car sees ${f} swinging between −1 and +1 forever, so ${LX}${NB}${SINPX} does not exist. But the train stops only at integers, and ${SINNP} = 0 for every integer ${n}, so the sequence ${AN} = ${SINNP} is the constant sequence 0, 0, 0, … and ${LN}${NB}${AN} = 0 without any drama at all. <b>A sequence limit can exist where the corresponding function limit does not.</b>`,
      },
      {
        t: 'p',
        html: `The implication runs one way only, and this is the single most examinable sentence in the topic:<br>${LX} ${FX} = ${L}${NB}${NB}⟹${NB}${NB}${LN} ${FN} = ${L},<br>but the converse is false.`,
      },
      {
        t: 'p',
        html: `That one-way arrow is what licenses everything else. It is the reason you may attack<br>${LN} ${fr(`2${N2} + 3${n} + 1`, `5${N2} − ${n}`)}<br>with the degree rule from Topic 05 without inventing any new machinery: the function version has the limit ${fr('2', '5')}, so the sequence version inherits it. Almost every routine sequence limit is a function limit in disguise, and the bridge theorem is the disguise remover.`,
      },
      { t: 'p', html: '<b>Limiting conditions and assumptions, where the idea breaks down:</b>' },
      {
        t: 'p',
        html: `1. <b>There is no LHL and no RHL.</b> Do not import the two-sided existence test from Topic 01. For a sequence the index has only one direction of approach, ${n} → ∞ (the terms themselves may still land from either side, as ${fr(MINUS1N, n)} → 0 does). Existence means the terms settle; failure means they diverge to ±∞ or oscillate.`,
      },
      {
        t: 'p',
        html: '2. <b>The bridge theorem is one-way.</b> From a function limit you may deduce the sequence limit. From a sequence limit you may deduce <b>nothing</b> about the function limit. Every assertion–reason question in this family lives on that asymmetry.',
      },
      {
        t: 'p',
        html: `3. <b>A term-by-term limit is illegal when the number of terms grows.</b> The algebra of limits from Topic 01 splits a sum of a fixed number of pieces. In ${AN} = ${SK} <i>c</i><sub><i>n</i>,<i>k</i></sub> the count of pieces is itself ${n}, so the rule does not apply: each term may tend to 0 while the sum tends to something else entirely.`,
      },
      {
        t: 'p',
        html: `4. <b>A recursion’s fixed point is not automatically its limit.</b> Solving ${L} = ${f}(${L}) tells you what the limit must be if one exists. It says nothing about whether one exists. Applied to a divergent sequence it returns a confident, completely wrong number.`,
      },
      {
        t: 'p',
        html: `5. <b>Oscillation without growth still kills the limit.</b> ${AN} = ${MINUS1N} stays bounded between −1 and 1 forever and never settles, so it has no limit, exactly as sin ${fr('1', x)} has none at 0 in Topic 01.`,
      },
      { t: 'fig', id: 'm11-12-07-d1' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: '<b>Note:</b> every quantity here is a pure number, so there are no units or dimensions to track. The payload of this section is four things: the definition and the bridge theorem, the Sandwich Theorem in its sequence form, the standard sequence-limit table with its growth ordering, and the three summation formulas from Chapter 8 that ∑-form limits run on.',
      },
      {
        t: 'p',
        html: `<b>Definition.</b> A sequence is a function ${a} ∶ ℕ → ℝ, written ${AN}. We say ${LN} ${AN} = ${L} if the terms ${AN} become and remain arbitrarily close to ${L} for all sufficiently large ${n}. The sequence is then called <b>convergent</b>. If ${AN} grows without bound in one direction it <b>diverges</b> to +∞ or −∞; if it does neither it <b>oscillates</b> (this includes ${MINUS1N}, which stays bounded, and ${AP} for ${a}${NB}<${NB}−1, whose terms alternate in sign while their size grows). In all of these cases the limit does not exist.`,
      },
      {
        t: 'p',
        html: `• ${n} = the index, a positive integer, ${n} → ∞ by jumps;<br>• ${AN} = the ${n}-th term;<br>• ${L} = the (finite) limit value.`,
      },
      {
        t: 'p',
        html: `<b>The bridge theorem (function limits transfer to sequences).</b> If ${f} is defined for all large real ${x} and ${LX} ${FX} = ${L}, then the sequence ${AN} = ${FN} satisfies ${LN}${NB}${AN} = ${L}. The converse is false; the standing counterexample is ${FX} = ${SINPX}, for which ${LN}${NB}${FN} = 0 while ${LX} ${FX} does not exist.`,
      },
      {
        t: 'p',
        html: `<b>Algebra of sequence limits.</b> If lim ${AN} = ${L} and lim ${BN} = ${M}, both finite, then lim(${AN} ± ${BN}) = ${L} ± ${M}, lim(<i>k</i>${NB}${AN}) = <i>kL</i>, lim(${AN}${BN}) = <i>LM</i>, and lim ${fr(AN, BN)} = ${fr(L, M)} provided ${M}${NB}≠${NB}0. These are the Topic 01 rules unchanged, <b>but they split a sum of a fixed number of sequences only.</b>`,
      },
      {
        t: 'p',
        html: `<b>Sandwich (Squeeze) Theorem for sequences.</b> If ${AN} ≤ ${BN} ≤ ${CN} for all ${n}${NB}≥${NB}${N} (some fixed ${N}; the first few terms are irrelevant), and ${LN}${NB}${AN} = ${LN}${NB}${CN} = ${L}, then ${LN}${NB}${BN} = ${L}.`,
      },
      {
        t: 'p',
        html: `<b>Corollary (bounded × null).</b> If |${AN}| ≤ ${M} for all ${n} (bounded) and ${LN}${NB}${BN} = 0 (null), then ${LN}${NB}${AN}${BN} = 0. This settles ${fr(`sin ${n}`, n)} → 0 and ${fr(MINUS1N, n)} → 0 on sight.`,
      },
      {
        t: 'p',
        html: '<b>Monotone convergence theorem.</b> A sequence that is increasing and bounded above converges; a sequence that is decreasing and bounded below converges. This is the theorem that supplies the missing existence half of a recursion problem.',
      },
      {
        t: 'table',
        title: 'Standard sequence limits: the table to memorise.',
        head: ['Sequence', 'Limit', 'Conditions'],
        rows: [
          [fr('1', NK), '0', `${k} > 0`],
          [`${a}${R1N}`, '1', `${a} > 0`],
          [`${n}${R1N}`, '1', '–'],
          [AP, '0', `|${a}| < 1`],
          [AP, '+∞ (diverges)', `${a} > 1`],
          [AP, 'no limit (oscillates, sign alternates)', `${a} ≤ −1`],
          [`(1 + ${fr(a, n)})<sup><i>n</i></sup>`, `${e}<sup><i>a</i></sup>`, `${a} ∈ ℝ`],
          [fr(`ln ${n}`, NK), '0', `${k} > 0`],
          [fr(NK, AP), '0', `${a} > 1, any fixed ${k}`],
          [fr(AP, `${n}!`), '0', `any fixed ${a}`],
          [fr(NFACT, n), ONE_E, '– (Advanced)'],
        ],
      },
      { t: 'p', html: `<b>The growth ordering</b> (each beats everything to its left as ${n} → ∞):` },
      {
        t: 'formula',
        kicker: 'The growth ordering',
        main: `${GROWTH}${NB}${NB}${GROWTHC}`,
        legend: [`${n} = the integer index (${n} → ∞)`, `${k} = a fixed positive power`, `${a} = a fixed base greater than 1`],
        note: null,
      },
      {
        t: 'p',
        html: `Any ratio in which a later item sits in the denominator tends to 0. That single line disposes of the whole ${fr(`${n}<sup>100</sup>`, `2<sup><i>n</i></sup>`)}, ${fr(`2<sup><i>n</i></sup>`, `${n}!`)}, ${fr(`ln ${n}`, n)} family without any work.`,
      },
      { t: 'p', html: '<b>Chapter 8 summation formulas (chained in, not re-derived), the engine of ∑-form limits:</b>' },
      {
        t: 'formula',
        kicker: 'Summation formulas (from Chapter 8)',
        main: `${SK} ${k} = ${S1F}<br>${SK} ${k}<sup>2</sup> = ${S2F}<br>${SK} ${k}<sup>3</sup> = ${S3F}`,
        legend: [`${n} = the number of terms (the upper limit)`, `${k} = the summation index`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>The ratio-to-root rule (JEE Advanced).</b> If ${AN}${NB}>${NB}0 and ${LN} ${fr(AN1, AN)} = ℓ, then ${LN} ${AN}${R1N} = ℓ as well. This converts an intractable ${n}-th root into an easy ratio.`,
      },
      {
        t: 'p',
        html: `<b>Variable glossary:</b> ${n} = the integer index (${n} → ∞); ${k} = the summation index; ${AN}, ${BN}, ${CN} = sequences; ${L}, ${M} = finite limit values; ${N} = the index past which an inequality is required to hold; ℓ = the ratio limit in the ratio-to-root rule.`,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      { t: 'p', html: '<b>Derivation: why the bridge theorem holds, and why its converse fails</b>' },
      {
        t: 'p',
        html: `1. Suppose ${LX} ${FX} = ${L}. By definition, for any tolerance <i>ε</i> > 0 there is a cut-off <i>X</i> such that |${FX} − ${L}| < <i>ε</i> for <b>every</b> real ${x} > <i>X</i>. <b>Reason:</b> this is what a limit at infinity asserts.`,
      },
      {
        t: 'p',
        html: `2. The integers ${n} with ${n} > <i>X</i> are among those real ${x}. <b>Reason:</b> ℕ ⊂ ℝ: the stations lie on the road.`,
      },
      {
        t: 'p',
        html: `3. Therefore |${FN} − ${L}| < <i>ε</i> for all integers ${n} > <i>X</i>, which says exactly that the sequence ${FN} has limit ${L} as ${n} → ∞. <b>Reason:</b> the sequence definition is the function definition restricted to integer inputs.`,
      },
      {
        t: 'p',
        html: `4. The converse fails because step 2 cannot be reversed: knowing ${f} is well behaved at the stations says nothing about its behaviour between them. ${FX} = ${SINPX} is the proof: it vanishes at every integer and reaches ±1 at every half-integer.`,
      },
      {
        t: 'p',
        html: 'The practical reading of this derivation: <b>a sequence limit is never harder than the corresponding function limit, and is sometimes easier.</b> So your first move on any routine sequence limit is to treat <i>n</i> as a continuous variable and reach for Topic 05.',
      },
      { t: 'p', html: '<b>Derivation: why a term-by-term limit fails on a growing sum</b>' },
      { t: 'p', html: `Consider ${SN} = ${ONE_N} + ${ONE_N} + ⋯ + ${ONE_N} (${n} terms).` },
      { t: 'p', html: `1. Each individual term tends to 0 as ${n} → ∞. <b>Reason:</b> ${ONE_N} → 0.` },
      {
        t: 'p',
        html: `2. If the algebra of limits applied, the sum of ${n} things each tending to 0 would tend to 0. But ${SN} = ${n} · ${ONE_N} = 1 for every ${n}, so ${SN} → 1. <b>Reason:</b> direct computation.`,
      },
      {
        t: 'p',
        html: `3. The rule lim(<i>u</i><sub><i>n</i></sub> + <i>v</i><sub><i>n</i></sub>) = lim <i>u</i><sub><i>n</i></sub> + lim <i>v</i><sub><i>n</i></sub> is proved for <b>two</b> sequences, and extends by induction to any <b>fixed</b> number. Induction gives you the result for 2, 3, 4, … terms; it never gives you the result for “${n} terms, where ${n} is the same ${n} that is going to infinity”. <b>Reason:</b> the induction has no step that reaches a moving target.`,
      },
      {
        t: 'p',
        html: `4. Therefore a sum whose length grows with ${n} must be handled whole: either summed in closed form (Chapter 8), or trapped between two bounds (Sandwich).`,
      },
      {
        t: 'proc',
        title: 'Procedure A: routine sequence limits, cross the bridge',
        steps: [
          `Check whether the expression is an ordinary algebraic function of ${n} with no greatest-integer brackets ⌊ · ⌋, no ${MINUS1N} and no factorials. <b>Why:</b> those are the cases the bridge theorem hands you free.`,
          `Replace ${n} by a continuous ${x} and evaluate ${LX} using the Topic 05 toolkit: the degree rule, divide-by-highest-power, or the conjugate trick for ∞ − ∞.`,
          'Transfer the answer back to the sequence by the bridge theorem. <b>Why:</b> the arrow runs in the direction you need.',
          'Do <b>not</b> attempt the reverse. If the function version has no limit, you have learned nothing about the sequence and must go back to a direct argument.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: ∑-form limits, sum first, then take the limit',
        steps: [
          `Write the sum with an explicit index, ${AN} = ${SK}(expression in ${k} and ${n}), and confirm the number of terms grows with ${n}. <b>Why:</b> this is the flag that forbids term-by-term limits.`,
          `Pull every factor that does not involve ${k} outside the summation sign. <b>Why:</b> as far as ∑<sub><i>k</i></sub> is concerned, ${n} is a constant.`,
          `Apply the Chapter 8 formulas for ∑${NB}${k}, ∑${NB}${k}<sup>2</sup>, ∑${NB}${k}<sup>3</sup> to obtain a closed-form rational function of ${n}. <b>Why:</b> a closed form has a fixed number of terms, so the ordinary rules apply again.`,
          `Now take ${n} → ∞ with the degree rule from Topic 05. <b>Why:</b> the problem has become a Procedure A problem.`,
          `Sanity check: a sum of ${n} terms each of rough size ${n}<sup>−<i>p</i></sup> should land near ${n}<sup>1−<i>p</i></sup>. <b>Why:</b> it catches an off-by-one-degree slip instantly.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C: ∑-form limits that will not sum, use the Sandwich',
        steps: [
          'Confirm that the summand cannot be summed in closed form. <b>Why:</b> Procedure B is always preferable when it is available.',
          `Over the range ${k} = 1 to ${k} = ${n}, find the <b>largest</b> and the <b>smallest</b> value the summand can take. Usually the summand is monotone in ${k}, so these occur at ${k} = ${n} and ${k} = 1. <b>Why:</b> replacing every term by the smallest gives a valid lower bound; by the largest, a valid upper bound.`,
          `Write ${n} · (smallest term) ≤ ${AN} ≤ ${n} · (largest term). <b>Why:</b> there are exactly ${n} terms, so both bounds are one multiplication.`,
          'Take the limit of both bounds. If they agree, that common value is the answer. <b>Why:</b> Sandwich Theorem for sequences.',
          'If they disagree, the bounds were too crude: tighten them or split the sum.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D: recursive sequences, prove convergence, then solve',
        steps: [
          `Compute ${A('1')}, ${A('2')}, ${A('3')} numerically. <b>Why:</b> three terms reveal whether the sequence is climbing, falling or oscillating, and that decides the whole argument.`,
          `<b>Prove monotonicity</b> by induction: show ${AN1} > ${AN} for all ${n} (increasing) or ${AN1} < ${AN} for all ${n} (decreasing).`,
          `<b>Prove boundedness</b> by induction: exhibit a bound <i>B</i> with ${AN} < <i>B</i> for all ${n} (if increasing) or ${AN} > <i>B</i> (if decreasing). <b>Why:</b> steps 2 and 3 together invoke the monotone convergence theorem, which is what establishes that the limit exists.`,
          `<b>Only now</b> set ${L} = lim ${AN}. Since ${AN1} is the same sequence with its first term removed, lim ${AN1} = ${L} too, so passing to the limit in the recursion gives an equation in ${L}.`,
          'Solve it and <b>discard the roots the sequence cannot reach</b>: a sequence of positive terms cannot converge to a negative number, and an increasing sequence cannot converge below its first term.',
          'Verify the surviving root against the numerical terms from step 1.',
        ],
      },
      {
        t: 'p',
        html: `<b>Why step 3 is not optional.</b> Take ${A('1')} = 1 and ${AN1} = 2${AN} + 1. Passing to the limit blindly gives ${L} = 2${L} + 1, hence ${L} = −1: a clean, definite, entirely fictitious answer. The actual terms are 1, 3, 7, 15, 31, …; at ${n} = 26 the term is already 67,108,863 and climbing. The sequence is increasing and <b>unbounded</b>, so no limit exists and there was never anything for ${L} to name. The fixed-point equation answers “what would the limit be?”, never “is there one?”.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate<br>${LN} ${fr(SQ3, N3)}.`,
        steps: [
          `<b>Step 1: Recognise the shape.</b> The numerator is a sum whose <b>number of terms grows with ${n}</b>. So you may not send each term to its own limit; you must sum first. This is Procedure B.`,
          `<b>Step 2: Sum in closed form</b> using the Chapter 8 result<br>${SK} ${k}<sup>2</sup> = ${S2F}:<br>${fr(SQ2, N3)}<br>= ${fr(`${n}(${n} + 1)(2${n} + 1)`, `6${N3}`)}.`,
          `<b>Step 3: Now it is an ordinary limit at infinity.</b> Expand the numerator: ${n}(${n} + 1)(2${n} + 1) = 2${N3} + 3${N2} + ${n}. So the expression is<br>${fr(`2${N3} + 3${N2} + ${n}`, `6${N3}`)}<br><br>= ${THIRD} + ${fr('1', `2${n}`)} + ${fr('1', `6${N2}`)}.`,
          `<b>Step 4: Send ${n} → ∞.</b> Every ${fr('1', NK)} → 0 (Topic 05), leaving<br>${LN} ${fr(SQ2, N3)} = ${THIRD}.`,
          `<b>Presentation note:</b> write the summation formula down as a separate line before substituting. Boards award a method mark for quoting it correctly, and the equal-degree ratio ${fr('2', '6')} = ${THIRD} is then visible in one glance.`,
        ],
        ans: THIRD,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate ${LN} ${SUM235}.`,
        steps: [
          `<b>Step 1: Diagnose.</b> The bracket tends to ∞ and the exponent tends to 0, so this is an ∞<sup>0</sup> form: indeterminate, and none of the Topic 02 junctions touches it. But notice what happens far out: 5<sup><i>n</i></sup> utterly dominates 3<sup><i>n</i></sup> and 2<sup><i>n</i></sup>, so the bracket is “5<sup><i>n</i></sup> plus smaller stuff”, and the ${n}-th root of 5<sup><i>n</i></sup> is 5. That intuition is right, and the Sandwich Theorem turns it into a proof.`,
          `<b>Step 2: Build the two bounds.</b> The largest of the three powers is 5<sup><i>n</i></sup>. Dropping the other two can only decrease the bracket, and replacing all three by the largest can only increase it:<br>5<sup><i>n</i></sup> ≤ 2<sup><i>n</i></sup> + 3<sup><i>n</i></sup> + 5<sup><i>n</i></sup> ≤ 3 · 5<sup><i>n</i></sup>.`,
          `<b>Step 3: Take the ${n}-th root.</b> The map ${t} ↦ ${t}${R1N} is increasing on ${t} > 0, so the inequalities survive intact:<br>5 ≤ ${SUM235} ≤ 3${R1N} · 5.`,
          `<b>Step 4: Squeeze.</b> The left bound is the constant 5. For the right bound, the standard limit ${a}${R1N} → 1 with ${a} = 3 gives 3${R1N} · 5 → 1 · 5 = 5. Both bounds tend to 5, so<br>${LN} ${SUM235} = 5.`,
          `<b>The general rule worth carrying:</b> for positive constants,<br>${MAXB} → max{${A('1')}, …, ${A('<i>m</i>')}}.<br>The largest base swallows the rest. There is nothing to compute: read off the maximum.`,
        ],
        ans: '5',
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: `Evaluate ${LN} (${fr('1', RN('1'))} + ${fr('1', RN('2'))} + ⋯ + ${fr('1', RN(n))}).`,
        steps: [
          `<b>The trap: taking the limit term by term.</b> Each single term looks harmless: ${fr('1', RN(k))} → 0 as ${n} → ∞, for every fixed ${k}. So the seductive reasoning runs: “a sum of terms that all tend to zero must tend to zero”, and the seductive wrong answer is 0.`,
          `<b>Why it fails.</b> The sum does not have a fixed number of terms. It has ${n} of them, and ${n} is the very quantity going to infinity. Each term is roughly ${ONE_N}, and there are ${n} of them, so the total is roughly ${n} · ${ONE_N} = 1, not 0. The algebra of limits was never licensed here (the Derivations and key procedures part’s derivation), and this is exactly the situation Procedure C exists for.`,
          `<b>Step 1: Bound the summand.</b> For ${k} running from 1 to ${n}, the denominator ${RN(k)} is smallest at ${k} = 1 and largest at ${k} = ${n}. So each term satisfies<br>${fr('1', RN(n))} ≤ ${fr('1', RN(k))}<br><br>≤ ${fr('1', RN('1'))}.`,
          `<b>Step 2: Multiply by the number of terms.</b> There are exactly ${n} terms, so summing the inequality gives<br>${BOUNDLO} ≤ ${SN} ≤ ${BOUNDHI}.`,
          `<b>Step 3: Take the limit of each bound</b> by dividing inside the root by ${N2} (note ${n} > 0, so ${RT(N2)} = ${n} with no sign worry):<br>${BOUNDLO} = ${fr('1', RT(`1 + ${ONE_N}`))} ⟶ 1,<br><br>${BOUNDHI} = ${fr('1', RT(`1 + ${fr('1', N2)}`))} ⟶ 1.`,
          `<b>Step 4: Squeeze.</b><br>${LN} ${SN} = 1.`,
          `<b>Numerical sanity check:</b> at ${n} = 10 the bounds are 0.9535 and 0.9950 with <i>S</i><sub>10</sub> = 0.9739; at ${n} = 10<sup>4</sup> they are 0.99995 and 1 − 5 × 10<sup>−9</sup> with <i>S</i><sub>10⁴</sub> = 0.999975. The bracket closes on 1, exactly as the algebra says, and nowhere near the trap’s answer of 0.`,
        ],
        ans: '1',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `The sequence {${AN}} is defined by ${A('1')} = 1 and ${AN1} = ${RT(`2 + ${AN}`)} for ${n}${NB}≥${NB}1. Show that {${AN}} converges and find its limit.`,
        steps: [
          '<b>The subtlety:</b> the question says <b>“show that it converges and find”</b>, not merely “find”. The two halves need different arguments, and a solution that only produces the number scores roughly half the marks. Existence comes from monotone convergence; the value comes from the fixed-point equation. In that order.',
          `<b>Step 1: Look at the first few terms.</b> ${A('1')} = 1, ${A('2')} = √3 ≈ 1.7321, ${A('3')} = ${RT('2 + √3')} ≈ 1.9319. The sequence is climbing and appears to be levelling off below 2. That suggests: increasing, bounded above by 2.`,
          `<b>Step 2: Prove ${AN} < 2 for all ${n}, by induction.</b> Base: ${A('1')} = 1 < 2. Step: assume ${AN} < 2. Then 2 + ${AN} < 4, so ${AN1} = ${RT(`2 + ${AN}`)} < √4 = 2. Hence ${AN} < 2 for every ${n}, so the sequence is <b>bounded above</b>.`,
          `<b>Step 3: Prove the sequence is increasing.</b> All terms are positive, so comparing ${AN1} with ${AN} is the same as comparing their squares:<br>${AN12} − ${AN2} = (2 + ${AN}) − ${AN2}<br>= −(${AN2} − ${AN} − 2)<br>= −(${AN} − 2)(${AN} + 1).`,
          `By Step 2, ${AN} − 2 < 0; and ${AN} + 1 > 0 since every term is positive. The product of a negative and a positive is negative, so −(${AN} − 2)(${AN} + 1) > 0. Hence ${AN12} > ${AN2}, and since both are positive, ${AN1} > ${AN}. The sequence is <b>increasing</b>.`,
          `<b>Step 4: Invoke the theorem.</b> Increasing and bounded above, so by the monotone convergence theorem {${AN}} <b>converges</b>. Call the limit ${L}. Existence is now established, and only now may we hunt for the value.`,
          `<b>Step 5: Pass to the limit in the recursion.</b> The sequence {${AN1}} is {${AN}} with its first term deleted, so it has the same limit ${L}. Taking ${n} → ∞ on both sides of ${AN12} = 2 + ${AN}:<br>${L}<sup>2</sup> = 2 + ${L}<br>⟹ ${L}<sup>2</sup> − ${L} − 2 = 0<br>⟹ (${L} − 2)(${L} + 1) = 0<br>⟹ ${L} = 2 or ${L} = −1.`,
          `<b>Step 6: Discard the impossible root.</b> Every ${AN} is positive and the sequence is increasing from ${A('1')} = 1, so its limit cannot be −1. Therefore<br>${LN} ${AN} = 2.`,
          `<b>Deep point.</b> Compare this with the cautionary recursion ${AN1} = 2${AN} + 1 from Procedure D, where the identical Step 5 produced ${L} = −1 and the identical Step 6 would have had nothing to say, because Step 2 (the bound) fails there, and Step 4 with it: that sequence is increasing but <b>unbounded</b>, so no limit exists at all. The fixed-point equation is a perfectly obedient machine that answers whatever you ask it. It is your job to have earned the right to ask.`,
        ],
        ans: '2',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Evaluate<br>${LN} ${fr(`1 + 2 + 3 + ⋯ + ${n}`, N2)}.`, a: HALF },
          { q: `[CBSE] Evaluate<br>${LN} ${fr(`2${N2} + 3${n} + 1`, `5${N2} − ${n}`)}.`, a: fr('2', '5') },
          { q: `[JEE Main] Evaluate<br>${LN} ${fr(`1<sup>3</sup> + 2<sup>3</sup> + ⋯ + ${N3}`, N4)}.`, a: QUARTER },
          { q: `[JEE Main] Evaluate ${LN} (5<sup><i>n</i></sup> + 7<sup><i>n</i></sup>)${R1N}.`, a: '7' },
          {
            q: `[JEE Main] Evaluate ${LN} ${fr(`sin ${n}`, n)}, ${n} ∈ ℕ, and state which theorem you used.`,
            a: `0, by the bounded × null corollary of the Sandwich Theorem (|sin ${n}| ≤ 1 and ${ONE_N} → 0)`,
          },
          { q: `[JEE Main] Evaluate ${LN} (1 + ${fr('3', n)})<sup>2<i>n</i></sup>.`, a: `${e}<sup>6</sup>` },
          {
            q: `[JEE Advanced] The sequence {${AN}} has ${A('1')} = 6 and ${AN1} = ${RT(`6 + ${AN}`)}. Prove that it converges and find the limit. (Note that here the sequence is decreasing; adapt the fourth worked example’s argument.)`,
            a: `Decreasing and bounded below by 3, so it converges; ${L}<sup>2</sup> = 6 + ${L} gives ${L} = 3 or ${L} = −2, and the terms are positive, so ${L} = 3`,
          },
          {
            q: `[JEE Advanced] Evaluate ${LN} ${fr(NFACT, n)} using the ratio-to-root rule on ${AN} = ${fr(`${n}!`, NN)}.`,
            a: `${ONE_E} (the ratio is ${fr(AN1, AN)} = ${fr('1', `(1 + ${ONE_N})<sup><i>n</i></sup>`)} → ${ONE_E})`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `Consider the two statements <i>P</i> ∶ ${LX}${NB}${SINPX} exists, and <i>Q</i> ∶ ${LN}${NB}${SINNP} exists, ${n} ∈ ℕ. Then`,
        opts: [
          {
            label: 'both <i>P</i> and <i>Q</i> are true',
            nudge: '<b>(A)</b> the student assumes any expression built from sin has the same behaviour in both settings, and never notices that restricting the input to integers can remove an oscillation entirely.',
          },
          { label: '<i>P</i> is false, <i>Q</i> is true', nudge: null },
          {
            label: '<i>P</i> is true, <i>Q</i> is false',
            nudge: '<b>(C)</b> the arrow is remembered backwards. The bridge theorem says function limit ⇒ sequence limit; this option asserts the reverse implication, which is exactly the false one.',
          },
          {
            label: 'both are false',
            nudge: `<b>(D)</b> the student sees sin of something growing without bound and reflexively answers “oscillates, no limit” for both, without evaluating ${SINNP} at a single integer. One substitution, ${n} = 1, would have settled it.`,
          },
        ],
        correct: 1,
        solution: `As a function of a real variable, ${SINPX} oscillates between −1 and +1 forever (at ${x} = ${HALF}, ${fr('3', '2')}, ${fr('5', '2')} it takes the values 1, −1, 1), so <i>P</i> is false. As a sequence, ${SINNP} = 0 for <b>every</b> integer ${n}, so the sequence is identically 0 and <i>Q</i> is true with limit 0.`,
      },
      {
        t: 'mcq',
        q: `${LN} ${fr(`${n}<sup>100</sup>`, `2<sup><i>n</i></sup>`)} equals`,
        opts: [
          {
            label: '+∞',
            nudge: `<b>(A)</b> the student compares the two at small ${n}, where ${n}<sup>100</sup> is astronomically bigger, and extrapolates. The crossover is late but it is inevitable: the exponent 100 is fixed while the exponent ${n} keeps growing.`,
          },
          {
            label: '1',
            nudge: `<b>(B)</b> a vague “both go to infinity, so the ratio is 1”: the ${fr('∞', '∞')} fallacy from Topic 05, which the chapter already flags as indeterminate.`,
          },
          { label: '0', nudge: null },
          {
            label: 'does not exist',
            nudge: '<b>(D)</b> confusing “the limit is not a nice number” with “there is no limit”. The limit is a perfectly ordinary 0.',
          },
        ],
        correct: 2,
        solution: `By the growth ordering ${NK} ≪ ${AP} for ${a}${NB}>${NB}1, an exponential beats any fixed power, however large the power. At ${n} = 10<sup>4</sup> the ratio is already about 5 × 10<sup>−2611</sup>.`,
      },
      {
        t: 'mcq',
        q: `A sequence satisfies ${A('1')} = 1 and ${AN1} = 2${AN} + 1. A student writes: “Let ${L} = lim ${AN}. Then ${L} = 2${L} + 1, so ${L} = −1.” The student’s conclusion is`,
        opts: [
          {
            label: 'correct',
            nudge: '<b>(A)</b> accepts the algebra without ever checking the hypothesis. Every term of the sequence is positive and growing, so a limit of −1 should have set off an alarm on inspection alone.',
          },
          { label: 'wrong, because the sequence diverges to +∞ and the fixed-point step assumed a finite limit that does not exist', nudge: null },
          {
            label: `wrong, because the correct fixed point is ${L} = 1`,
            nudge: `<b>(C)</b> an arithmetic slip in solving ${L} = 2${L} + 1; but the deeper error is the same as (A), since no root of that equation is the limit.`,
          },
          {
            label: 'correct in magnitude but wrong in sign; the limit is +1',
            nudge: '<b>(D)</b> patches the sign to make the answer look plausible against the positive terms, which treats a structural failure as a computational one.',
          },
        ],
        correct: 1,
        solution: `The terms are 1, 3, 7, 15, 31, …: increasing and unbounded (indeed ${AN} = 2<sup><i>n</i></sup> − 1), so the sequence diverges. Writing ${L} = lim ${AN} presupposes a finite limit; with no such ${L} in existence, the equation ${L} = 2${L} + 1 is about nothing at all. Its root is an artefact.`,
      },
      {
        t: 'mcq',
        q: `${LN} (${fr('1', `${n} + 1`)} + ${fr('1', `${n} + 2`)} + ⋯ + ${fr('1', `${n} + ${n}`)}) is`,
        opts: [
          {
            label: '0',
            nudge: '<b>(A)</b> the trap of the third worked example once more: every term tends to 0, so the sum “must” too. The number of terms grows, so the rule does not apply.',
          },
          { label: `a finite number strictly between ${HALF} and 1`, nudge: null },
          {
            label: '1',
            nudge: `<b>(C)</b> the student computes the upper bound ${fr(n, `${n} + 1`)} → 1 and stops there, reporting a bound as though it were the limit. An upper bound is an upper bound; it is the answer only when the lower bound agrees, and here it does not.`,
          },
          {
            label: '+∞',
            nudge: `<b>(D)</b> reasoning that a sum with ever more terms must blow up. It would, if the terms did not shrink; here ${n} terms of size about ${ONE_N} balance exactly.`,
          },
        ],
        correct: 1,
        solution: `Bound as in Procedure C: each of the ${n} terms lies between ${fr('1', `2${n}`)} and ${fr('1', `${n} + 1`)}, so the sum lies between ${n} · ${fr('1', `2${n}`)} = ${HALF} and ${fr(n, `${n} + 1`)} < 1. The sum grows with ${n} (each step adds ${fr('1', `2${n} + 1`)} − ${fr('1', `2${n} + 2`)}, which is positive) and stays below 1, so a limit ${L} exists, and the Sandwich gives only ${HALF} ≤ ${L} ≤ 1: the two bounds do not meet, so they trap ${L} in an interval without fixing it. That already rules out (A) and (D).<br><br>To settle the exact value, write the sum as<br>${ONE_N} ${SK} ${fr('1', `1 + ${fr(k, n)}`)},<br>a Riemann sum (Class 12 integration) whose limit is<br>∫<sub>0</sub><sup>1</sup> ${fr('<i>dx</i>', `1 + ${x}`)} = ln 2 ≈ 0.693.<br>Since ${HALF} < ln 2 < 1, the limit lies strictly between ${HALF} and 1, which is (B).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Importing LHL and RHL into a sequence problem.</b> A sequence has no left side. Writing “${lim(`${n}→3<sup>−</sup>`)} ${AN}” is meaningless: there are no indices between 2 and 3. <b>Correction:</b> the only sequence limit is ${n} → ∞, and it is one-directional.`,
          `<b>Running the bridge theorem backwards.</b> From “${AN} = ${FN} converges” you may conclude nothing whatsoever about ${LX}${NB}${FX}. <b>Correction:</b> memorise the direction with its counterexample attached: ${SINPX} at the integers.`,
          `<b>Taking a term-by-term limit on a sum of ${n} terms.</b> The single most punished error in this family. <b>Correction:</b> count the terms. If the count involves ${n}, you must either sum in closed form (Procedure B) or sandwich the whole thing (Procedure C).`,
          `<b>Solving ${L} = ${f}(${L}) without proving convergence.</b> <b>Correction:</b> the fixed-point equation is step 4 of Procedure D, never step 1. Monotone plus bounded comes first; only then does ${L} denote anything.`,
          `<b>Keeping every root of the fixed-point equation.</b> ${L}<sup>2</sup> = 2 + ${L} has roots 2 and −1, but a sequence of positive increasing terms cannot land on −1. <b>Correction:</b> filter the roots against the sign and monotonicity you already established.`,
          `<b>Reporting a bound as the limit.</b> Having sandwiched ${AN} between ${BN} and ${CN}, the answer is the common limit, and only if the two agree. <b>Correction:</b> always compute both bounds’ limits and check that they coincide before writing a value.`,
          `<b>Mis-ordering the growth hierarchy.</b> Students routinely believe ${n}! beats ${NN}, or that a large fixed power like ${n}<sup>100</sup> beats 2<sup><i>n</i></sup>. <b>Correction:</b> commit ${GROWTH} to memory as a single line, left to right.`,
          `<b>Assuming a bounded sequence must converge.</b> ${MINUS1N} is bounded and has no limit. <b>Correction:</b> bounded is only half the monotone convergence theorem; monotone is the other half, and you need both.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed and accuracy).</b> Build a three-way triage. Ask first: is this just a function limit wearing an ${n}? If the expression is plain algebra in ${n}, cross the bridge and use the Topic 05 degree rule: most JEE Main sequence questions die in one line here ${ESTIMATE}. Ask second: is it a sum whose length grows? Then it is Procedure B if the Chapter 8 formulas apply, Procedure C if they do not. Ask third: is it defined recursively? Then it is Procedure D, and your first pen stroke is “${A('1')} =, ${A('2')} =, ${A('3')} =”: three numbers tell you which way it is heading and hand you the bound to prove. And for anything with an ${n}-th root of a sum of powers, do not compute at all: write down the largest base.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: `${AN} is a function on ℕ. ${n} → ∞ <b>only</b>: no finite approach point, no LHL, no RHL. Convergent / divergent to ±∞ / oscillating.`,
          },
          {
            f: 'Bridge theorem (one-way)',
            note: `${LX} ${FX} = ${L} ⇒ ${LN} ${FN} = ${L}. <b>Converse false</b>, counterexample ${FX} = ${SINPX}: ${lim(n)} ${FN} = 0 but ${lim(x)} ${FX} does not exist.`,
          },
          {
            f: 'Sandwich for sequences',
            note: `${AN} ≤ ${BN} ≤ ${CN} for all ${n}${NB}≥${NB}${N}, with ${AN}, ${CN} → ${L} ⇒ ${BN} → ${L}.`,
          },
          {
            f: 'Bounded × null',
            note: `|${AN}| ≤ ${M} and ${BN} → 0 ⇒ ${AN}${BN} → 0. Kills ${fr(`sin ${n}`, n)}, ${fr(MINUS1N, n)} on sight.`,
          },
          {
            f: 'Monotone convergence',
            note: 'increasing + bounded above ⇒ converges; decreasing + bounded below ⇒ converges.',
          },
          {
            f: 'Standard limits',
            note: `${a}${R1N} → 1 (${a}${NB}>${NB}0); ${n}${R1N} → 1; ${AP} → 0 for |${a}|${NB}<${NB}1, → ∞ for ${a}${NB}>${NB}1, oscillates for ${a}${NB}≤${NB}−1;<br>(1 + ${fr(a, n)})<sup><i>n</i></sup> → ${e}<sup><i>a</i></sup>; ${fr(NFACT, n)} → ${ONE_E}.`,
          },
          {
            f: 'Growth ordering',
            note: `${GROWTH} ${GROWTHC}. Later item in the denominator ⇒ limit 0.`,
          },
          {
            f: 'Max-base rule',
            note: `(${A('1')}<sup><i>n</i></sup> + ⋯ + ${A('<i>m</i>')}<sup><i>n</i></sup>)${R1N} → max{${A('<i>i</i>')}} for positive ${A('<i>i</i>')}.`,
          },
          {
            f: 'Ratio-to-root',
            note: `${AN}${NB}>${NB}0 and ${fr(AN1, AN)} → ℓ ⇒ ${AN}${R1N} → ℓ.`,
          },
          {
            f: '∑-form',
            note: `sum first with<br>∑${NB}${k} = ${S1F},<br><br>∑${NB}${k}<sup>2</sup> = ${S2F},<br><br>∑${NB}${k}<sup>3</sup> = ${S3F},<br><b>then</b> take the limit. Standard results:<br>${fr(`∑${NB}${k}`, N2)} → ${HALF}, ${fr(`∑${NB}${k}<sup>2</sup>`, N3)} → ${THIRD}, ${fr(`∑${NB}${k}<sup>3</sup>`, N4)} → ${QUARTER}.`,
          },
          {
            f: 'Recursion order',
            note: `monotone → bounded → monotone convergence theorem → ${L} = ${f}(${L}) → discard impossible roots. Never the fixed point first.`,
          },
        ],
        aids: [
          '“The car slides, the train hops.” (function variable versus sequence index)',
          '“Function to sequence, one way only.” (the bridge theorem and its false converse)',
          '“Count the terms before you split the sum.” (no term-by-term limit when the count grows)',
          `“Log, power, exponential, factorial, ${n}-to-the-${n}.” (the growth ordering, left to right)`,
          '“Biggest base wins the root.” (the max-base rule)',
          '“Prove it lands before you say where.” (convergence before the fixed point)',
        ],
      },
    ],
  },
];
