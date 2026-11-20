import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13 Probability, Additional topics A–E, pp. 849–865 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word: the
 * "Chapter 13: Probability — Additional Topics" part's Addenda A to E, with the
 * book's letters. Its heading is not copied; its p. 849 opening paragraph is the
 * first paragraph of A's "Introduction". Each addendum's opening text is its
 * "Introduction" part, then its own headings as parts ("Method", the run of
 * "Example X.N" worked examples as one part "Worked examples", and "Practice —
 * Addendum X" as "Practice", answers set against their questions). The
 * "Closing note on scope" printed after E's answers (p. 865) is E's last part.
 * Addendum P starts on p. 866 (not here). "Subtopics 01–04" → "Topics 01–04",
 * "Addendum X" → "Additional topic X", the book's example numbers in running
 * text → what the reader shows. No drawings on these pages (every vector path
 * is a rule, a fraction bar, a radical or the table rules on p. 850). The
 * underbrace on p. 856 is a bracketed note. P(A | B) with the bar glued by
 * no-break spaces; E(X) italic E, Var and Cov upright; the stacked binomial as
 * <binom>. Every fraction is stacked (<frac>), a fraction over a fraction
 * written with ÷; no em dashes.
 * The expert reviews rm1213a and rm1213b are applied (fx1213): their
 * corrections change the printed words where listed in
 * reports-13/fx1213-applied.md.
 */
const fr = (u: string, v: string) => `<frac><num>${u}</num><den>${v}</den></frac>`;
const bn = (u: string, v: string) => `<binom><num>${u}</num><den>${v}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const R = I('R');
const S = I('S');
const T = I('T');
const W = I('W');
const X = I('X');
const Y = I('Y');
const Z = I('Z');
const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const g = I('g');
const i = I('i');
const j = I('j');
const k = I('k');
const l = I('ℓ');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const y = I('y');
const P = I('P');
const MU = I('μ');

/** P(…) */
const pr = (s: string) => `${P}(${s})`;
/** P(a | b), the bar kept with both sides. */
const cp = (u: string, v: string) => `${P}(${u}${NB}|${NB}${v})`;
const cap = (...xs: string[]) => xs.join(`${NB}∩${NB}`);
const cup = (...xs: string[]) => xs.join(`${NB}∪${NB}`);
const sb = (v: string, s: string) => `${v}${WJ}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const rel = (u: string, op: string, v: string) => `${u}${NB}${op}${NB}${v}`;
const set = (...xs: string[]) => `{${xs.join(`,${NB}`)}}`;
/** E(…), the expectation (italic E, as printed). */
const EX = (s: string) => `${I('E')}(${s})`;
const VAR = (s: string) => `Var(${s})`;
const COV = (s: string) => `Cov(${s})`;
const abs = (s: string) => `|${WJ}${s}|`;

const HALF = fr('1', '2');
const THIRD = fr('1', '3');
const QUARTER = fr('1', '4');
const EIGHTH = fr('1', '8');
const SIXTH = fr('1', '6');
const F56 = fr('5', '6');

const S1 = sb(S, '1');
const S2 = sb(S, '2');
const S3 = sb(S, '3');
const ABC = cap(A, B, C);
const AuBuC = cup(A, B, C);
const PABC = pr(ABC);
const PAB = pr(cap(A, B));
const PBC = pr(cap(B, C));
const PCA = pr(cap(C, A));
const PAPBPC = `${pr(A)}${pr(B)}${pr(C)}`;

const HH = I('HH');
const HT = I('HT');
const TH = I('TH');
const TT = I('TT');

const Ei = sb(I('E'), i);
const Ej = sb(I('E'), j);
const A1 = sb(A, '1');
const A2 = sb(A, '2');
const A12 = cap(A1, A2);
const SUMj = `∑<sub>${j}</sub>`;
const DP = `${D}′`;
const TB = sb(T, 'B');
const TR = sb(T, 'R');

const xi = sb(x, i);
const yj = sb(y, j);
const pij = sb(p, `${i}${j}`);
const SUMi = `∑<sub>${i}</sub>`;
const DSUM = `${SUMi}${NB}${SUMj}`;
const PXi = pr(rel(X, '=', xi));
const PYj = pr(rel(Y, '=', yj));
const MX = sb(MU, X);
const MY = sb(MU, Y);
const MX2 = `${MU}<sup>2</sup><sub>${X}</sub>`;
const MY2 = `${MU}<sup>2</sup><sub>${Y}</sub>`;
const IA = sb(I('I'), A);
const IA2 = `${I('I')}<sup>2</sup><sub>${A}</sub>`;
const Ik = sb(I('I'), k);
const Il = sb(I('I'), l);
const In = sb(I('I'), n);
const I1 = sb(I('I'), '1');
const I2 = sb(I('I'), '2');
const I10 = sb(I('I'), '10');
const SUMk = `∑<sub>${k}=1</sub><sup>∞</sup>`;

/** q^(k−1) p, the waiting-time probability. */
const GEO = `${q}<sup>${k}−1</sup>${p}`;
const RAT = `(1${NB}−${NB}${a})${WJ}(1${NB}−${NB}${b})`;
const AW = `${P}(${A}${NB}wins)`;
const BW = `${P}(${B}${NB}wins)`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 849–853 ────────────────
  {
    n: 'A',
    title: 'Three Events: Unions, Exactly-k, and Inclusion–Exclusion',
    extra: true,
    kalam: 'This is inclusion–exclusion: count singly, correct the double-counted overlaps, restore the triple-counted core.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01–04 carried you from conditioning through Bayes to the Binomial, and every CBSE template in them is complete. Five JEE patterns, though, live just past the last page. Additional topic A extends every “at least/exactly” identity from two events to three, because inclusion–exclusion questions routinely name three events ${ESTIMATE} while the chapter’s toolkit stops at two. Additional topic B settles the one warning the chapter issues but never demonstrates: pairwise independence that fails the triple-product test, including how to build such examples and how to survive the cubic equations they generate. Additional topic C chains Bayes across stages (today’s posterior is tomorrow’s prior) and handles the transfer-of-balls family the Boards love ${ESTIMATE}. Additional topic D pushes expectation past ${a}${X}${NB}+${NB}${b} to sums, products and the indicator-variable trick that computes hard expectations in one line. Additional topic E treats waiting-time and turn-taking problems, which are pure infinite-series probability and appear in JEE Main nearly every year ${ESTIMATE}. Nothing below introduces new theory: each section is the multiplication theorem, the partition idea or the distribution machinery you already own, applied one layer deeper.`,
      },
      {
        t: 'p',
        html: `The chapter gives ${pr(cup(A, B))} and the “exactly one of two” formula, then jumps straight to products over independent triples. But JEE Main and Advanced constantly pose ${ESTIMATE}: three events, possibly dependent, find the probability that exactly one occurs, or exactly two, or none. Four summary quantities do all of it.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Step 1: The three-event union.</b> Apply the two-event addition law twice. Write<br>${pr(AuBuC)}${NB}= ${P}(${A}${NB}∪${NB}(${cup(B, C)}))<br>= ${pr(A)}${NB}+ ${pr(cup(B, C))}${NB}− ${P}(${A}${NB}∩${NB}(${cup(B, C)})).`,
      },
      {
        t: 'p',
        html: `Now expand each piece. The distributive law gives ${A}${NB}∩${NB}(${cup(B, C)})${NB}= (${cap(A, B)})${NB}∪${NB}(${cap(A, C)}), so by the two-event law,<br>${P}(${A}${NB}∩${NB}(${cup(B, C)}))<br>= ${PAB}${NB}+ ${pr(cap(A, C))}${NB}− ${PABC},<br>and expanding ${pr(cup(B, C))} the same way and substituting:<br>${pr(AuBuC)}${NB}= ${S1}${NB}−${NB}${S2}${NB}+ ${S3},<br>where<br>${S1}${NB}=${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}+ ${pr(C)},<br>${S2}${NB}= ${PAB}${NB}+ ${PBC}${NB}+ ${PCA},<br>${S3}${NB}= ${PABC}.`,
      },
      {
        t: 'p',
        html: 'This is inclusion–exclusion: count singly, correct the double-counted overlaps, restore the triple-counted core.',
      },
      {
        t: 'formula',
        kicker: 'Three-event union (inclusion–exclusion)',
        main: `${pr(AuBuC)} = ${S1} − ${S2} + ${S3}`,
        legend: [
          `${S1}${NB}=${NB}sum of the single probabilities, ${pr(A)}${NB}+ ${pr(B)}${NB}+ ${pr(C)}`,
          `${S2}${NB}=${NB}sum of the pairwise overlaps, ${PAB}${NB}+ ${PBC}${NB}+ ${PCA}`,
          `${S3}${NB}=${NB}the triple overlap, ${PABC}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Step 2: The exactly-${k} identities.</b> Every outcome belongs to exactly one of four disjoint classes: it lies in exactly one, two, or three of the events, or in none. Count how many times each class is tallied by ${S1}, ${S2}, ${S3}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Outcome lies in', `Tally in ${S1}`, `Tally in ${S2}`, `Tally in ${S3}`],
        rows: [
          ['exactly one event', '1', '0', '0'],
          ['exactly two events', '2', '1', '0'],
          ['exactly three events', '3', '3', '1'],
        ],
      },
      {
        t: 'p',
        html: `Any expression ${sb(c, '1')}${S1}${NB}+${NB}${sb(c, '2')}${S2}${NB}+${NB}${sb(c, '3')}${S3} therefore assigns each class the weight read off the row. Choosing coefficients that isolate a class gives:`,
      },
      {
        t: 'formula',
        kicker: 'Exactly-<i>k</i> identities for three events',
        main: `${pr(`at${NB}least${NB}one`)} = ${S1} − ${S2} + ${S3}<br>${pr('none')} = 1 − ${S1} + ${S2} − ${S3}<br>${pr(`exactly${NB}one`)} = ${S1} − 2${S2} + 3${S3}<br>${pr('exactly two')} = ${S2} − 3${S3}<br>${pr(`at${NB}least${NB}two`)} = ${S2} − 2${S3}`,
        legend: [
          `${S1}${NB}=${NB}sum of the single probabilities`,
          `${S2}${NB}=${NB}sum of the pairwise overlaps`,
          `${S3}${NB}=${NB}the triple overlap, ${PABC}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Check each against the table. For instance, ${S1}${NB}−${NB}2${S2}${NB}+${NB}3${S3} gives weights 1${NB}−${NB}0${NB}+${NB}0, 2${NB}−${NB}2${NB}+${NB}0, 3${NB}−${NB}6${NB}+${NB}3: exactly the classes 1, 0, 0, precisely “exactly one.”`,
      },
      {
        t: 'p',
        html: `<b>Step 3: Consistency check (free marks).</b> The classes are disjoint and exhaustive, so always confirm<br>${pr(`exactly${NB}one`)}${NB}+ ${pr('exactly two')}${NB}+<br>${pr('all three')}${NB}+${NB}${pr('none')}${NB}=${NB}1.<br>If your four answers fail this, the error is structural, not cosmetic: usually a wrong sign on ${S3}.`,
      },
      {
        t: 'p',
        html: `<b>Independent shortcut.</b> When ${A}, ${B}, ${C} are mutually independent, ${S2} and ${S3} factorise into products, and “exactly ${k}” can also be computed term by term, e.g.<br>${pr(`exactly${NB}one`)}${NB}=${NB}${p}${q}′${r}′${NB}+ ${p}′${q}${r}′${NB}+ ${p}′${q}′${r},<br>with ${p}${NB}=${NB}${pr(A)}, ${q}${NB}=${NB}${pr(B)}, ${r}${NB}=${NB}${pr(C)}, ${p}′${NB}=${NB}1${NB}−${NB}${p} and so on. Both routes must agree; use the shorter.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Shooters ${A}, ${B}, ${C} fire independently at a target with hit probabilities ${HALF}, ${THIRD}, ${QUARTER}. Find the probability that (i) at least one hits, (ii) exactly one hits, (iii) exactly two hit.`,
        steps: [
          `Here ${rel(p, '=', HALF)}, ${rel(q, '=', THIRD)}, ${rel(r, '=', QUARTER)}, and independence lets every intersection factorise:<br>${PAB}${NB}=${NB}${SIXTH},${NB}${NB}${PBC}${NB}=${NB}${fr('1', '12')},<br>${PCA}${NB}=${NB}${EIGHTH},${NB}${NB}${PABC}${NB}=${NB}${fr('1', '24')}.`,
          `So ${S1}${NB}=${NB}${HALF}${NB}+${NB}${THIRD}${NB}+${NB}${QUARTER}${NB}=${NB}${fr('13', '12')},<br>${S2}${NB}=${NB}${SIXTH}${NB}+${NB}${fr('1', '12')}${NB}+${NB}${EIGHTH}${NB}=${NB}${fr('3', '8')},<br>${S3}${NB}=${NB}${fr('1', '24')}.`,
          `(i)${NB}${pr(`at${NB}least${NB}one`)}${NB}= ${fr('13', '12')}${NB}− ${fr('3', '8')}${NB}+${NB}${fr('1', '24')}${NB}= ${fr('26 − 9 + 1', '24')}${NB}=${NB}${fr('3', '4')}.<br>Equivalently by the complement rule: 1${NB}−${NB}${HALF}${NB}·${NB}${fr('2', '3')}${NB}·${NB}${fr('3', '4')}${NB}=${NB}1${NB}−${NB}${QUARTER}${NB}=${NB}${fr('3', '4')}. Agreement noted.`,
          `(ii)${NB}${pr(`exactly${NB}one`)}${NB}=${NB}${fr('13', '12')}${NB}− 2${NB}·${NB}${fr('3', '8')}${NB}+${NB}3${NB}·${NB}${fr('1', '24')}<br>= ${fr('26 − 18 + 3', '24')}${NB}=${NB}${fr('11', '24')}.`,
          `(iii)${NB}${pr(`exactly${NB}two`)}${NB}=${NB}${fr('3', '8')}${NB}− 3${NB}·${NB}${fr('1', '24')}${NB}=${NB}${fr('9 − 3', '24')}${NB}=${NB}${QUARTER}.`,
          `<b>Check.</b> Exactly three${NB}=${NB}${fr('1', '24')}, none${NB}=${NB}${QUARTER},${NB}and<br>${fr('11', '24')}${NB}+${NB}${fr('6', '24')}${NB}+${NB}${fr('1', '24')}${NB}+${NB}${fr('6', '24')}${NB}= ${fr('24', '24')}${NB}=${NB}1.<br>The decomposition closes, so the answers${NB}stand.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `For three events ${A}, ${B}, ${C} you are told ${pr(AuBuC)}${NB}=${NB}${fr('3', '4')}, ${pr(`exactly${NB}one${NB}occurs`)}${NB}= ${fr('11', '24')} and ${pr(`exactly${NB}two${NB}occur`)}${NB}=${NB}${QUARTER}. Find ${pr('all three')} and ${pr('none')}, and show that the data force ${PABC}${NB}=${NB}${fr('1', '24')} without ever knowing ${pr(A)}, ${pr(B)}, ${pr(C)} individually.`,
        steps: [
          `The four classes partition ${S}, so immediately<br>${pr('none')}${NB}=${NB}1${NB}− ${fr('3', '4')}${NB}=${NB}${QUARTER},${NB}and<br>${pr('all three')}${NB}= ${pr(`at${NB}least${NB}one`)}${NB}− ${pr(`exactly${NB}one`)}${NB}− ${pr('exactly two')}.`,
          `Since “at least one” excludes only “none”:<br>${pr('all three')}${NB}=${NB}${fr('3', '4')}${NB}− ${fr('11', '24')}${NB}−${NB}${QUARTER}${NB}= ${fr('18 − 11 − 6', '24')}${NB}=${NB}${fr('1', '24')}.`,
          `To see why no individual ${pr(A)} is needed, translate the givens into the ${S}-language. We know ${S1}${NB}−${NB}${S2}${NB}+${NB}${S3}${NB}=${NB}${fr('3', '4')} and ${S1}${NB}−${NB}2${S2}${NB}+${NB}3${S3}${NB}=${NB}${fr('11', '24')} and ${S2}${NB}−${NB}3${S3}${NB}=${NB}${QUARTER}. Three linear equations in the three unknowns ${S1}, ${S2}, ${S3} determine them completely: from the third, ${S2}${NB}=${NB}${QUARTER}${NB}+${NB}3${S3}; substitute into the first:<br>${S1}${NB}−${NB}${QUARTER}${NB}−${NB}3${S3}${NB}+${NB}${S3}${NB}= ${fr('3', '4')} ⟹ ${S1}${NB}−${NB}2${S3}${NB}=${NB}1.`,
          `Substitute both into the second:<br>1${NB}+${NB}2${S3}${NB}−${NB}2${NB}·${NB}${QUARTER}${NB}− 6${S3}${NB}+${NB}3${S3}${NB}=${NB}${fr('11', '24')}${NB}⟹<br>${HALF}${NB}−${NB}${S3}${NB}=${NB}${fr('11', '24')}${NB}⟹ ${S3}${NB}=${NB}${fr('1', '24')}.`,
          `So ${PABC}${NB}=${NB}${fr('1', '24')}, ${S2}${NB}=${NB}${QUARTER}${NB}+${NB}${EIGHTH}${NB}=${NB}${fr('3', '8')}, ${S1}${NB}=${NB}1${NB}+${NB}${fr('2', '24')}${NB}=${NB}${fr('13', '12')}.`,
          `<b>Check.</b> Run the forward formulas: at${NB}least${NB}one${NB}=${NB}${fr('13', '12')}${NB}−${NB}${fr('3', '8')}${NB}+${NB}${fr('1', '24')}${NB}= ${fr('26 − 9 + 1', '24')}${NB}=${NB}${fr('3', '4')}; exactly${NB}one${NB}=${NB}${fr('13', '12')}${NB}−${NB}${fr('3', '4')}${NB}+ ${EIGHTH}${NB}= ${fr('26 − 18 + 3', '24')}${NB}=${NB}${fr('11', '24')}; exactly${NB}two${NB}=${NB}${fr('3', '8')}${NB}−${NB}${EIGHTH}${NB}=${NB}${QUARTER}. All three givens reproduced. The moral: the ${S}-variables carry all the information the exam needs; individual probabilities are often decoys.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Given ${pr(A)}${NB}=${NB}0.4, ${pr(B)}${NB}=${NB}0.5, ${pr(C)}${NB}=${NB}0.3, ${PAB}${NB}=${NB}0.2, ${PBC}${NB}=${NB}0.15, ${pr(cap(A, C))}${NB}=${NB}0.12, ${PABC}${NB}=${NB}0.08, find ${pr(AuBuC)}, ${pr(`exactly${NB}one`)} and ${pr('none')}.`,
            a: `${S1}${NB}=${NB}1.2, ${S2}${NB}=${NB}0.47, ${S3}${NB}=${NB}0.08; union${NB}=${NB}0.81, exactly${NB}one${NB}=${NB}1.2${NB}−${NB}0.94${NB}+${NB}0.24${NB}=${NB}0.50, none${NB}=${NB}0.19; check 0.50${NB}+${NB}0.23${NB}+${NB}0.08${NB}+${NB}0.19${NB}=${NB}1.`,
          },
          {
            q: `[JEE Main] ${A}, ${B}, ${C} are mutually independent, each with probability ${THIRD}. Find ${pr(`exactly${NB}one`)} and ${pr(`at${NB}least${NB}one`)}.`,
            a: `${S2}${NB}=${NB}3${NB}·${NB}${fr('1', '9')}${NB}=${NB}${THIRD}, ${S3}${NB}=${NB}${fr('1', '27')}; exactly${NB}one${NB}=${NB}1${NB}−${NB}${fr('2', '3')}${NB}+${NB}${fr('1', '9')}${NB}=${NB}${fr('4', '9')}; at${NB}least${NB}one${NB}=${NB}1${NB}−${NB}(${fr('2', '3')})<sup>3</sup>${NB}=${NB}${fr('19', '27')}.`,
          },
          {
            q: `[JEE Main] Three students attempt a problem independently with success probabilities ${HALF}, ${THIRD}, ${QUARTER}. Find the probability that exactly two succeed.`,
            a: `${HALF}${NB}·${NB}${THIRD}${NB}·${NB}${fr('3', '4')}${NB}+${NB}${HALF}${NB}·${NB}${fr('2', '3')}${NB}·${NB}${QUARTER}${NB}+ ${HALF}${NB}·${NB}${THIRD}${NB}·${NB}${QUARTER}${NB}= ${fr('3 + 2 + 1', '24')}${NB}=${NB}${QUARTER}.`,
          },
          {
            q: `[JEE Main] A fair die is rolled once. ${A}: even number; ${B}: multiple of 3; ${C}: prime number. Verify ${pr(AuBuC)}${NB}=${NB}${F56} using inclusion–exclusion.`,
            a: `${S1}${NB}=${NB}${HALF}${NB}+${NB}${THIRD}${NB}+${NB}${HALF}${NB}=${NB}${fr('4', '3')}; pairwise intersections are {6}, {2}, {3}, each ${SIXTH}, so ${S2}${NB}=${NB}${HALF}, ${S3}${NB}=${NB}0; union${NB}=${NB}${fr('4', '3')}${NB}−${NB}${HALF}${NB}=${NB}${F56}, matching the direct count ${set('2', '3', '4', '5', '6')}.`,
          },
          {
            q: `[JEE Advanced] Three events satisfy ${pr(A)}${NB}=${NB}${pr(B)}${NB}=${NB}${pr(C)}${NB}=${NB}${HALF}, each pairwise intersection equals ${THIRD}, and ${PABC}${NB}=${NB}${QUARTER}. Find ${pr(`exactly${NB}one`)} and ${pr('none')}, and verify your answers close the partition.`,
            a: `${S1}${NB}=${NB}${fr('3', '2')}, ${S2}${NB}=${NB}1, ${S3}${NB}=${NB}${QUARTER}; exactly${NB}one${NB}=${NB}${fr('3', '2')}${NB}−${NB}2${NB}+${NB}${fr('3', '4')}${NB}=${NB}${QUARTER}; none${NB}=${NB}1${NB}−${NB}${fr('3', '2')}${NB}+${NB}1${NB}−${NB}${QUARTER}${NB}=${NB}${QUARTER}; partition closes since exactly two${NB}=${NB}${QUARTER} and triple${NB}=${NB}${QUARTER}.`,
          },
          {
            q: `[JEE Advanced] Express ${pr('exactly two')} in terms of ${pr(`at${NB}least${NB}two`)} and ${S3} alone.`,
            a: `Since at least two${NB}=${NB}${S2}${NB}−${NB}2${S3} and exactly two${NB}=${NB}${S2}${NB}−${NB}3${S3}, we get exactly two${NB}= ${pr(`at${NB}least${NB}two`)}${NB}−${NB}${S3}, i.e. subtract the all-three case from the at-least-two case.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic B · pp. 853–855 ────────────────
  {
    n: 'B',
    title: 'Pairwise but Not Mutual Independence: Building It, Breaking It',
    extra: true,
    kalam: 'Mutual independence means all four hold; pairwise independence means only the first three are guaranteed.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter states the rule (three pairs checking out does not make three mutually independent events) and tags the pitfall. JEE Advanced examines it in two ways: verify or refute mutual independence from data, and solve for parameters when “exactly ${k}” information is given. You need to have seen a working counterexample at least once, because the failure mode is invisible to intuition.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The verification protocol.</b> To decide whether ${A}, ${B}, ${C} are mutually independent, run all four tests:<br>1. ${PAB}${NB}= ${pr(A)}${pr(B)};<br>2. ${PBC}${NB}= ${pr(B)}${pr(C)};<br>3. ${PCA}${NB}= ${pr(C)}${pr(A)};<br>4. ${PABC}${NB}= ${PAPBPC}.`,
      },
      {
        t: 'p',
        html: 'Mutual independence means all four hold; pairwise independence means only the first three are guaranteed. Test 4 is where constructed examples fail.',
      },
      {
        t: 'p',
        html: '<b>Why pairwise can pass while 4 fails: the mechanism.</b> The pair conditions only constrain probabilities of two-fold overlaps. The triple overlap is a separate cell of the Venn diagram, and nothing in tests 1–3 reaches into it. So one is free to design events whose overlaps look independent in pairs but whose centre cell has been emptied or enlarged.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: the canonical construction',
        q: `Two fair coins are tossed. Let ${A}${NB}=${NB}“the first coin shows heads,” ${B}${NB}=${NB}“the second coin shows heads,” ${C}${NB}=${NB}“the two coins disagree.” Show that ${A}, ${B}, ${C} are pairwise independent but not mutually${NB}independent.`,
        steps: [
          `Sample space: ${set(HH, HT, TH, TT)}, each outcome ${QUARTER}. Then<br>${A}${NB}= ${set(HH, HT)},${NB}${NB}${B}${NB}= ${set(HH, TH)},${NB}${NB}${C}${NB}= ${set(HT, TH)},<br>so ${pr(A)}${NB}=${NB}${pr(B)}${NB}=${NB}${pr(C)}${NB}=${NB}${HALF}. Now the three pairs:<br>${PAB}${NB}=${NB}${pr(HH)}${NB}= ${QUARTER}${NB}=${NB}${HALF}${NB}·${NB}${HALF}.${NB}✓<br>${PBC}${NB}=${NB}${pr(TH)}${NB}=${NB}${QUARTER}${NB}= ${pr(B)}${pr(C)}.${NB}✓<br>${PCA}${NB}=${NB}${pr(HT)}${NB}=${NB}${QUARTER}${NB}= ${pr(C)}${pr(A)}.${NB}✓`,
          `Pairwise independence confirmed. But the triple intersection:<br>${ABC}${NB}= {${HH}}${NB}∩${NB}${set(HT, TH)}${NB}=${NB}∅<br>⟹ ${PABC}${NB}=${NB}0,${NB}while<br>${PAPBPC}${NB}= (${HALF})<sup>3</sup>${NB}=${NB}${EIGHTH}${NB}≠${NB}0.`,
          `Test 4 fails: the events are <b>not</b> mutually independent. Read the mechanism off the geometry: each pair meets in exactly one outcome (${HH}, ${TH}, ${HT} respectively, a quarter each, as independence demands), but the three pair-overlaps are three different outcomes, leaving the centre cell empty.`,
          `Consequence worth quoting in an answer: knowing ${A} and ${B} both occurred pins the outcome to ${HH}, which rules out ${C}, so ${C}’s occurrence is strongly (negatively) dependent on the pair, even though it is independent of each member alone.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: recovering a parameter from a cubic',
        q: `Events ${A}, ${B}, ${C} are mutually independent, each occurring with the same probability ${p}, where 0${NB}<${NB}${p}${NB}<${NB}1. The probability that exactly one of them occurs is ${fr('48', '125')}. Find ${p}.`,
        steps: [
          `By the identity of Additional topic A applied to independent events, or directly by summing the three disjoint patterns:<br>${pr(`exactly${NB}one`)}${NB}= 3${p}(1${NB}−${NB}${p})<sup>2</sup>.`,
          `Set this equal to ${fr('48', '125')} and clear denominators. Dividing both sides by 3:<br>${p}(1${NB}−${NB}${p})<sup>2</sup>${NB}=${NB}${fr('16', '125')}.<br>Expanding ${p}${NB}−${NB}2${sq(p)}${NB}+${NB}${p}<sup>3</sup>${NB}=${NB}${fr('16', '125')} and multiplying through by 125:<br>125${p}<sup>3</sup>${NB}−${NB}250${sq(p)}${NB}+${NB}125${p}${NB}− 16${NB}=${NB}0.`,
          `Test the natural candidate ${rel(p, '=', fr('1', '5'))}:<br>125${NB}·${NB}${fr('1', '125')}${NB}−${NB}250${NB}·${NB}${fr('1', '25')}${NB}+ 125${NB}·${NB}${fr('1', '5')}${NB}−${NB}16<br>= 1${NB}−${NB}10${NB}+${NB}25${NB}−${NB}16${NB}=${NB}0.${NB}✓`,
          `Factor out (5${p}${NB}−${NB}1). Synthetic division of 125${p}<sup>3</sup>${NB}−${NB}250${sq(p)}${NB}+${NB}125${p}${NB}−${NB}16 by ${p}${NB}−${NB}${fr('1', '5')} gives quotient 125${sq(p)}${NB}−${NB}225${p}${NB}+${NB}80,${NB}so<br>125${p}<sup>3</sup>${NB}−${NB}250${sq(p)}${NB}+${NB}125${p}${NB}− 16<br>= (5${p}${NB}−${NB}1)(25${sq(p)}${NB}−${NB}45${p}${NB}+${NB}16).`,
          `For the quadratic, the discriminant is (−45)<sup>2</sup>${NB}−${NB}4${NB}·${NB}25${NB}·${NB}16${NB}= 2025${NB}−${NB}1600${NB}=${NB}425, not a perfect square, with roots approximately 0.488 and 1.312. The second exceeds 1, hence inadmissible. The smaller root${NB}≈${NB}0.488 lies in (0,${NB}1), so test it in the original equation, using (0.512)<sup>2</sup>${NB}=${NB}0.262144:<br>3(0.488)(0.262144)${NB}≈${NB}0.38378${NB}≈ ${fr('48', '125')}${NB}=${NB}0.384.`,
          `The quadratic root therefore satisfies the equation as well, so ${p} is <b>not unique</b>: ${rel(p, '=', fr('1', '5'))} and ${p}${NB}= ${fr('45 − √425', '50')} both work. This is the mark-winning observation. The function ${f}(${p})${NB}=${NB}3${p}(1${NB}−${NB}${p})<sup>2</sup> rises from 0 at ${rel(p, '=', '0')}, peaks at ${rel(p, '=', THIRD)}, and falls to 0 at ${rel(p, '=', '1')}; a horizontal line below the peak cuts it twice. Unless the problem pins down which side of the peak you are on, report <b>both</b> roots, discarding only those outside (0,${NB}1).`,
          `<b>Check.</b> For ${rel(p, '=', fr('1', '5'))}: exactly${NB}one${NB}= 3${NB}·${NB}${fr('1', '5')}${NB}·${NB}(${fr('4', '5')})<sup>2</sup>${NB}= ${fr('48', '125')}, as demanded; and exactly${NB}two${NB}=${NB}3${NB}·${NB}${fr('1', '25')}${NB}·${NB}${fr('4', '5')}${NB}=${NB}${fr('12', '125')}, triple${NB}=${NB}${fr('1', '125')}, none${NB}=${NB}${fr('64', '125')}, and ${fr('48 + 12 + 1 + 64', '125')}${NB}=${NB}1. Partition closes.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[JEE Advanced] On the sample space ${set(HH, HT, TH, TT)} let ${A}${NB}=${NB}“first toss heads,” ${B}${NB}=${NB}“second toss heads,” ${C}${NB}=${NB}“an odd number of heads.” Show all three pairs are independent but ${A}, ${B}, ${C} are not mutually${NB}independent.`,
            a: `${C}${NB}= ${set(HT, TH)}, ${pr(C)}${NB}=${NB}${HALF}; ${cap(A, C)}${NB}=${NB}{${HT}}, ${cap(B, C)}${NB}=${NB}{${TH}}, both ${QUARTER}${NB}= ${P}(·)${P}(·), and ${cap(A, B)}${NB}=${NB}{${HH}} likewise; but ${ABC}${NB}=${NB}∅ while ${PAPBPC}${NB}=${NB}${EIGHTH}: not mutual.`,
          },
          {
            q: `[JEE Main] ${pr(A)}${NB}=${NB}${pr(B)}${NB}=${NB}${pr(C)}${NB}=${NB}${THIRD}, the three events are pairwise independent, and ${PABC}${NB}=${NB}0. Find ${pr(`exactly${NB}one`)} and ${pr(`at${NB}least${NB}one`)}.`,
            a: `${S2}${NB}=${NB}3${NB}·${NB}${fr('1', '9')}${NB}=${NB}${THIRD}, ${S3}${NB}=${NB}0; exactly${NB}one${NB}=${NB}1${NB}−${NB}${fr('2', '3')}${NB}=${NB}${THIRD}; at${NB}least${NB}one${NB}=${NB}1${NB}−${NB}${THIRD}${NB}+${NB}0${NB}=${NB}${fr('2', '3')}.`,
          },
          {
            q: `[JEE Advanced] Mutually independent events each with probability ${p} satisfy ${pr('exactly two')}${NB}=${NB}${fr('12', '125')}. Find all admissible values of ${p}.`,
            a: `${pr('exactly two')}${NB}=${NB}3${sq(p)}(1${NB}− ${p})${NB}=${NB}${fr('12', '125')} gives, after dividing by 3, ${sq(p)}(1${NB}−${NB}${p})${NB}=${NB}${fr('4', '125')}. Expand: 125${sq(p)}${NB}−${NB}125${p}<sup>3</sup>${NB}=${NB}4, i.e. 125${p}<sup>3</sup>${NB}−${NB}125${sq(p)}${NB}+${NB}4${NB}=${NB}0; ${rel(p, '=', fr('1', '5'))}: 1${NB}−${NB}5${NB}+${NB}4${NB}=${NB}0${NB}✓ (and indeed ${sq(p)}(1${NB}−${NB}${p})${NB}=${NB}${fr('1', '25')}${NB}·${NB}${fr('4', '5')}${NB}=${NB}${fr('4', '125')}). Factorising gives (5${p}${NB}−${NB}1)(25${sq(p)}${NB}−${NB}20${p}${NB}−${NB}4)${NB}=${NB}0; the quadratic has discriminant 400${NB}+${NB}400${NB}=${NB}800, roots ${fr('20 ± √800', '50')}${NB}=${NB}${fr('2 ± 2√2', '5')}, of which ${fr('2 + 2√2', '5')}${NB}≈${NB}0.97 lies in (0,${NB}1) and ${fr('2 − 2√2', '5')}${NB}<${NB}0 does not. So ${rel(p, '=', fr('1', '5'))} or ${p}${NB}=${NB}${fr('2 + 2√2', '5')}. Check the latter numerically: √2${NB}≈${NB}1.41421, ${p}${NB}≈${NB}0.96569, 1${NB}−${NB}${p}${NB}≈${NB}0.03431, and 3${sq(p)}(1${NB}−${NB}${p})${NB}≈ 3(0.93256)(0.03431)${NB}≈${NB}0.0960${NB}=${NB}${fr('12', '125')}${NB}✓. Both are admissible.`,
          },
          {
            q: '[Conceptual, Advanced] Can three mutually exclusive events with positive probabilities be pairwise independent?',
            a: `No: mutual exclusivity forces ${PAB}${NB}=${NB}0 while pairwise independence demands ${pr(A)}${pr(B)}${NB}>${NB}0.`,
          },
          {
            q: `[JEE Advanced] ${A}, ${B}, ${C} are independent, ${pr(A)}${NB}=${NB}${HALF}, ${pr(B)}${NB}=${NB}${THIRD}, ${pr(C)}${NB}=${NB}${QUARTER}. Given that exactly two of them occurred, find the${NB}probability that ${A} was among them.`,
            a: `${pr('exactly two')}${NB}=${NB}${QUARTER} (Additional topic A, first worked example, (iii)); the cases containing ${A}: “${A}, ${B} not ${C}” and “${A}, ${C} not ${B}”, totalling<br>${HALF}${NB}·${NB}${THIRD}${NB}·${NB}${fr('3', '4')}${NB}+<br>${HALF}${NB}·${NB}${fr('2', '3')}${NB}·${NB}${QUARTER}<br>= ${EIGHTH}${NB}+${NB}${fr('1', '12')}${NB}=${NB}${fr('5', '24')};<br>conditional${NB}probability${NB}= ${fr('5', '24')}${NB}·${NB}4${NB}=${NB}${F56}.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic C · pp. 856–858 ────────────────
  {
    n: 'C',
    title: 'Chained Bayes: Staged Evidence and Transfer Experiments',
    extra: true,
    kalam: 'Build the altered composition first; everything else is stock Bayes.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s Pro-Tip says “today’s posterior becomes tomorrow’s prior,” and then stops. JEE Main and Advanced both examine exactly that move, in two costumes: repeated tests on one hidden cause, and the transfer problem where one random act rewrites the likelihoods before the next observation. Here is the engine, proved, then both costumes worn.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>The chaining rule.</b> Let {${sb(I('E'), '1')}, …, ${sb(I('E'), n)}} be a partition of causes, and suppose two pieces of evidence ${A1} then ${A2} arrive, with ${A1} and ${A2} independent given the cause. Claim:<br>${cp(Ei, A12)}<br>= ${fr(`${pr(Ei)}${NB}${cp(A1, Ei)}${NB}${cp(A2, Ei)}`, `${SUMj}${NB}${pr(Ej)}${NB}${cp(A1, Ej)}${NB}${cp(A2, Ej)}`)}.`,
      },
      {
        t: 'formula',
        kicker: 'The chaining rule (two pieces of evidence)',
        main: `${cp(Ei, A12)}<br>= ${fr(`${pr(Ei)}${NB}${cp(A1, Ei)}${NB}${cp(A2, Ei)}`, `${SUMj}${NB}${pr(Ej)}${NB}${cp(A1, Ej)}${NB}${cp(A2, Ej)}`)}`,
        legend: [
          `${Ei}${NB}=${NB}the causes, a partition`,
          `${A1}, ${A2}${NB}=${NB}the two pieces of evidence, independent given the cause`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> By Bayes with the compound evidence ${A12} treated as a single observation, the denominator is Total Probability for ${A12}:<br>${pr(A12)}${NB}= ${SUMj}${NB}${pr(Ej)}${NB}${cp(A12, Ej)}.<br>Given cause ${Ej}, the two observations are independent, so ${cp(A12, Ej)}${NB}= ${cp(A1, Ej)}${cp(A2, Ej)}, giving the displayed fraction. To see it equals the chained route, note the numerator factors:<br>${pr(Ei)}${NB}${cp(A1, Ei)}${NB}${cp(A2, Ei)}<br>= ${pr(Ei)}${NB}${cp(A1, Ei)}${NB}·${NB}${cp(A2, Ei)}<br>(${pr(Ei)}${NB}${cp(A1, Ei)}: the unnormalised posterior),<br>and dividing by ${pr(A1)}${NB}= ${SUMj}${NB}${pr(Ej)}${cp(A1, Ej)} produces ${cp(Ei, A1)}${NB}·${NB}${cp(A2, Ei)}: posterior times fresh likelihood. So running Bayes twice, feeding the first posterior back as the second prior, lands on the same answer as one grand Bayes.${NB}■`,
      },
      {
        t: 'p',
        html: '<b>Transfer problems.</b> When a ball moves between containers before the observed draw, the “cause” is the transferred ball’s colour and the “likelihood” is the draw probability computed from the altered composition. Build the altered composition first; everything else is stock Bayes.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A disease affects 1% of a population. A test detects a carrier with probability 0.9 and clears a healthy person with probability 0.95. A patient tests positive twice, the two readings being independent given carrier status. Find the probability the patient is a carrier.',
        steps: [
          `<b>Stage one.</b> Prior ${pr(D)}${NB}=${NB}0.01, ${pr(DP)}${NB}=${NB}0.99; likelihoods ${cp('+', D)}${NB}=${NB}0.9, ${cp('+', DP)}${NB}=${NB}0.05. Total probability of one positive:<br>${pr('+')}${NB}=${NB}0.01(0.9)${NB}+ 0.99(0.05)<br>= 0.009${NB}+${NB}0.0495${NB}=${NB}0.0585,<br>so the first posterior is<br>${cp(D, '+')}${NB}= ${fr('0.009', '0.0585')}${NB}=${NB}${fr('90', '585')}${NB}=${NB}${fr('2', '13')}${NB}≈${NB}0.154.`,
          `<b>Stage two.</b> Feed ${pr(D)}${NB}=${NB}${fr('2', '13')}, ${pr(DP)}${NB}=${NB}${fr('11', '13')} back in with the same likelihoods:<br>${cp(D, '++')}<br>= ${fr('2(0.9)', '2(0.9) + 11(0.05)')}<br>= ${fr('1.8', '1.8 + 0.55')}${NB}=${NB}${fr('180', '235')}${NB}= ${fr('36', '47')}${NB}≈${NB}0.766.`,
          `<b>Cross-check by the one-shot rule.</b> Directly from the claim:<br>${pr('++')}${NB}=${NB}0.01(0.9)<sup>2</sup>${NB}+ 0.99(0.05)<sup>2</sup><br>= 0.0081${NB}+ 0.002475${NB}=${NB}0.010575,<br>${cp(D, '++')}${NB}= ${fr('0.0081', '0.010575')}${NB}= ${fr('8100', '10575')}${NB}=${NB}${fr('36', '47')}.${NB}✓`,
          'Same answer, two routes. Notice the story the numbers tell: one positive barely lifts a 1% prior to 15%, but a second positive leaps to 77%; evidence compounds, and base rates never stop mattering.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Bag I holds 3 red and 4 black balls; Bag II holds 5 red and 3 black. One ball is moved at random from Bag I to Bag II, stirred in, and then one ball is drawn from Bag II. It is red. Find the probability that the transferred ball was black.',
        steps: [
          `Causes: ${TB}${NB}=${NB}“black transferred” with prior ${fr('4', '7')}; ${TR}${NB}=${NB}“red transferred” with prior ${fr('3', '7')}. Evidence: ${R}${NB}=${NB}“drawn ball red.” Compute each likelihood from the altered Bag II:<br>• If black moved: Bag II becomes 5 red, 4 black (nine balls), so ${cp(R, TB)}${NB}=${NB}${fr('5', '9')}.<br>• If red moved: Bag II becomes 6 red, 3 black (nine balls), so ${cp(R, TR)}${NB}=${NB}${fr('6', '9')}${NB}=${NB}${fr('2', '3')}.`,
          `Total probability of drawing red:<br>${pr(R)}${NB}=${NB}${fr('4', '7')}${NB}·${NB}${fr('5', '9')}${NB}+${NB}${fr('3', '7')}${NB}·${NB}${fr('2', '3')}${NB}= ${fr('20', '63')}${NB}+${NB}${fr('18', '63')}${NB}=${NB}${fr('38', '63')}.`,
          `Bayes:<br>${cp(TB, R)}${NB}=${NB}${fr('20', '63')}${NB}·${NB}${fr('63', '38')}${NB}=${NB}${fr('20', '38')}${NB}=${NB}${fr('10', '19')}.`,
          `<b>Sanity checks:</b> compare the posterior ${fr('10', '19')}${NB}≈${NB}0.526 with the prior ${fr('4', '7')}${NB}≈${NB}0.571. The posterior is slightly below the prior, which is correct: a black transferred ball dilutes the red fraction of Bag II, so drawing red is mild evidence against a black transfer. Any answer above ${fr('4', '7')} signals a reversed likelihood. Also verify completeness: ${cp(TR, R)}${NB}=${NB}${fr('18', '38')}${NB}=${NB}${fr('9', '19')}, and ${fr('10', '19')}${NB}+${NB}${fr('9', '19')}${NB}=${NB}1. Posteriors close.`,
        ],
        ans: fr('10', '19'),
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] With the setup of this topic’s first worked example, find the probability the patient is a carrier after one positive and then one negative test (independent readings).',
            a: `After stage one the prior is ${fr('2', '13')}; likelihoods for negative: ${cp('−', D)}${NB}=${NB}0.1, ${cp('−', DP)}${NB}=${NB}0.95; posterior${NB}= ${fr('0.2', '0.2 + 10.45')}${NB}=${NB}${fr('2', '106.5')}${NB}= ${fr('4', '213')}${NB}≈${NB}0.019: one clean reading almost resets the damage.`,
          },
          {
            q: '[JEE Main] Bag I holds 4 white and 2 black; Bag II holds 1 white and 5 black. A ball moves from I to II, then one ball is drawn from II and is white. Find the probability the moved ball was white.',
            a: `Likelihoods: if white moved, II has 2W,5B, ${pr(W)}${NB}=${NB}${fr('2', '7')}; if black moved, 1W,6B, ${pr(W)}${NB}=${NB}${fr('1', '7')}. The moved ball is white with probability ${fr('4', '6')}${NB}=${NB}${fr('2', '3')} and black with probability ${THIRD}. Total${NB}=${NB}${fr('2', '3')}${NB}·${NB}${fr('2', '7')}${NB}+${NB}${THIRD}${NB}·${NB}${fr('1', '7')}${NB}=${NB}${fr('5', '21')}; posterior white${NB}=${NB}${fr('4', '21')}${NB}·${NB}${fr('21', '5')}${NB}=${NB}${fr('4', '5')}.`,
          },
          {
            q: '[JEE Advanced] Urn A holds 2 red, 3 blue; Urn B holds 4 red, 1 blue. An urn is chosen at random, one ball is drawn and <b>not replaced</b>, and it is red. A second ball is then drawn from the same urn and is also red. Find the probability the urn was B.',
            a: `Likelihood of two reds from A: ${fr('2', '5')}${NB}·${NB}${QUARTER}${NB}=${NB}${fr('1', '10')}; from B: ${fr('4', '5')}${NB}·${NB}${fr('3', '4')}${NB}=${NB}${fr('3', '5')}. Total${NB}=${NB}${HALF}(${fr('1', '10')}${NB}+${NB}${fr('3', '5')})${NB}=${NB}${fr('7', '20')}; posterior B${NB}=${NB}${fr('3', '10')}${NB}·${NB}${fr('20', '7')}${NB}=${NB}${fr('6', '7')}.`,
          },
          {
            q: '[JEE Advanced] For the test of this topic’s first worked example (sensitivity 0.9, specificity 0.95) and a 1% base rate, explain why two positive results\u00a0cannot push the posterior to 0.99.',
            a: `Work in odds. The prior odds of carrier to healthy are ${fr('0.01', '0.99')}${NB}=${NB}${fr('1', '99')}, and each positive reading multiplies the odds by the likelihood ratio ${fr('0.9', '0.05')}${NB}=${NB}18. After two positives the odds are ${fr('1', '99')}${NB}·${NB}18<sup>2</sup>${NB}=${NB}${fr('324', '99')}${NB}≈${NB}3.3, i.e.<br>${cp(D, `+${WJ}+`)}${NB}=${NB}${fr('324', '423')}${NB}=${NB}${fr('36', '47')}${NB}≈${NB}0.766${NB}<${NB}0.99. Reaching 0.99 would need posterior odds of 99, which this test cannot supply from a<br>${fr('1', '99')} prior in two readings: the healthy pool is 99 times larger, and each healthy person still has probability (0.05)<sup>2</sup> of producing two false positives.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic D · pp. 858–862 ────────────────
  {
    n: 'D',
    title: 'Expectation Beyond aX + b: Sums, Products, and Indicator Variables',
    extra: true,
    kalam: 'Whatever the number of letters, the expected number of correct placements is exactly 1: the surprise that makes this a favourite.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter proves ${EX(`${a}${X} + ${b}`)} and ${VAR(`${a}${X} + ${b}`)} and stops. JEE asks about ${EX(`${X} + ${Y}`)}, ${VAR(`${X} − ${Y}`)}, and ${EX(`${X}${Y}`)}, and, at Advanced level, expects the indicator trick that computes apparently brutal expectations in one line. Everything below follows from one definition.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Joint expectation.</b> For discrete ${X}, ${Y} taking values ${xi}, ${yj} with joint probabilities ${pij}${NB}=${NB}${P}(${X}${NB}=${NB}${xi},${NB}${Y}${NB}=${NB}${yj}), define<br>${I('E')}[${g}(${X},${NB}${Y})]${NB}= ${DSUM}${NB}${g}(${xi},${NB}${yj})${NB}${pij}.`,
      },
      {
        t: 'p',
        html: `<b>Result 1: linearity (always true).</b> Take ${g}(${X},${NB}${Y})${NB}=${NB}${X}${NB}+${NB}${Y}:<br>${EX(`${X} + ${Y}`)}${NB}= ${DSUM}${NB}(${xi}${NB}+${NB}${yj})${pij}<br>= ${DSUM}${NB}${xi}${pij}${NB}+ ${DSUM}${NB}${yj}${pij}.<br>In the first double sum, sum over ${j} first: ${SUMj}${NB}${pij}${NB}= ${PXi}, so the first term collapses to ${SUMi}${NB}${xi}${PXi}${NB}=${NB}${EX(X)}; symmetrically the second is ${EX(Y)}. Hence<br>${EX(`${X} + ${Y}`)}${NB}=${NB}${EX(X)}${NB}+ ${EX(Y)},<br>with no independence needed, and, with ${EX(`−${Y}`)}${NB}=${NB}−${EX(Y)} from the chapter’s ${EX(`${a}${X} + ${b}`)} rule, gives ${EX(`${X} − ${Y}`)}${NB}=${NB}${EX(X)}${NB}−${NB}${EX(Y)}; iterating gives sums of any length.`,
      },
      {
        t: 'formula',
        kicker: 'Linearity of expectation',
        main: `${EX(`${X} + ${Y}`)} = ${EX(X)} + ${EX(Y)}`,
        legend: [`${X}, ${Y}${NB}=${NB}any two discrete random variables (no independence needed)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Result 2: products under independence.</b> Independence means the joint pmf factorises: ${pij}${NB}= ${PXi}${NB}${PYj}. Then<br>${EX(`${X}${Y}`)}${NB}= ${DSUM}${NB}${xi}${yj}${NB}${PXi}${PYj}<br>= (${SUMi}${NB}${xi}${PXi})(${SUMj}${NB}${yj}${PYj})<br>= ${EX(X)}${NB}${EX(Y)},<br>because the double sum separates into an outer factor depending only on ${i} and an inner factor depending only on ${j}. Without independence this separation is illegal: that is the whole content of the hypothesis.`,
      },
      {
        t: 'p',
        html: `<b>Result 3: variance of a sum.</b> Write ${MX}${NB}=${NB}${EX(X)}, ${MY}${NB}=${NB}${EX(Y)}. Using Result 1 on ${I('E')}[(${X}${NB}+ ${Y})<sup>2</sup>]:<br>${I('E')}[(${X}${NB}+${NB}${Y})<sup>2</sup>]${NB}=${NB}${EX(sq(X))}${NB}+ 2${EX(`${X}${Y}`)}${NB}+ ${EX(sq(Y))},<br>while (${MX}${NB}+${NB}${MY})<sup>2</sup>${NB}=${NB}${MX2}${NB}+${NB}2${MX}${MY}${NB}+ ${MY2}. Subtracting:<br>${VAR(`${X} + ${Y}`)}${NB}= ${VAR(X)}${NB}+${NB}${VAR(Y)}${NB}+<br>2[${EX(`${X}${Y}`)}${NB}−${NB}${MX}${MY}].<br>The bracket defines the covariance ${COV(`${X},${NB}${Y}`)}, measuring shared drift. Under independence, Result 2 kills it:<br>${VAR(`${X} ± ${Y}`)}${NB}=${NB}${VAR(X)}${NB}+ ${VAR(Y)}.<br>The minus sign changes nothing: spread adds either way, since ${VAR(`−${Y}`)}${NB}= (−1)<sup>2</sup>${NB}${VAR(Y)}.`,
      },
      {
        t: 'formula',
        kicker: 'Variance of a sum',
        main: `${VAR(`${X} + ${Y}`)} = ${VAR(X)} + ${VAR(Y)} +<br>2[${EX(`${X}${Y}`)}${NB}−${NB}${MX}${MY}]`,
        legend: [
          `${X}, ${Y}${NB}=${NB}any two discrete random variables`,
          `${MX}, ${MY}${NB}=${NB}the means, ${EX(X)} and ${EX(Y)}`,
        ],
        note: `The bracket defines the covariance ${COV(`${X},${NB}${Y}`)}.`,
      },
      {
        t: 'formula',
        kicker: 'Independent random variables',
        main: `${EX(`${X}${Y}`)} = ${EX(X)}${NB}${EX(Y)}<br>${VAR(`${X} ± ${Y}`)} = ${VAR(X)} + ${VAR(Y)}`,
        legend: [`${X}, ${Y}${NB}= independent discrete random variables`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Result 4: indicator variables.</b> For any event ${A}, define ${IA}${NB}=${NB}1 on ${A} and 0 off it. Then ${IA2}${NB}=${NB}${IA}, so<br>${EX(IA)}${NB}=${NB}1${NB}·${NB}${pr(A)}${NB}+${NB}0${NB}= ${pr(A)},<br>${VAR(IA)}${NB}=${NB}${EX(IA2)}${NB}− ${pr(A)}<sup>2</sup>${NB}=${NB}${pr(A)}(1${NB}− ${pr(A)}).<br>The technique: any count ${X} of “how many of certain things happened” can be written ${X}${NB}=${NB}${I1}${NB}+${NB}${I2}${NB}+${NB}⋯${NB}+${NB}${In}, one indicator per thing, and Result 1 computes ${EX(X)} as a sum of probabilities: no distribution table required.`,
      },
      {
        t: 'formula',
        kicker: 'Indicator variable',
        main: `${EX(IA)} = ${pr(A)}<br>${VAR(IA)} = ${pr(A)}(1 − ${pr(A)})`,
        legend: [`${IA}${NB}=${NB}1 on the event ${A} and 0 off it`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Independent random variables ${X} and ${Y} have ${EX(X)}${NB}=${NB}4, ${EX(Y)}${NB}=${NB}3, ${VAR(X)}${NB}=${NB}2, ${VAR(Y)}${NB}=${NB}5. Find ${EX(`2${X} − 3${Y} + 1`)} and ${VAR(`2${X} − 3${Y} + 1`)}.`,
        steps: [
          `Expectation, using Result 1 twice:<br>${EX(`2${X} − 3${Y} + 1`)}${NB}= 2${EX(X)}${NB}−${NB}3${EX(Y)}${NB}+${NB}1<br>= 8${NB}−${NB}9${NB}+${NB}1${NB}=${NB}0.`,
          `Variance, using Result 3 with the scaling rule ${VAR(`${c}${Z}`)}${NB}= ${sq(c)}${NB}${VAR(Z)} from the chapter:<br>${VAR(`2${X} − 3${Y} + 1`)}${NB}= 4${NB}${VAR(X)}${NB}+ 9${NB}${VAR(Y)}<br>= 8${NB}+${NB}45${NB}=${NB}53.`,
          `The constant 1 drops out of the variance, and the coefficient of ${Y} being negative costs nothing: squares erase signs.`,
        ],
        ans: '0 and 53',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${n} letters and their ${n} addressed envelopes are matched at random, one letter per envelope. Let ${X} be the number of letters placed in the correct envelope. Show that ${EX(X)}${NB}=${NB}1 for every ${n}, and show further that ${VAR(X)}${NB}=${NB}1 for ${rel(n, '≥', '2')}.`,
        steps: [
          `Writing the distribution of ${X} directly is hopeless: the probabilities involve derangement counts. The indicator route bypasses it entirely.`,
          `Let ${Ik} indicate “letter ${k} lands in envelope ${k},” so ${X}${NB}=${NB}${I1}${NB}+${NB}⋯${NB}+${NB}${In}. By symmetry of a random matching, letter ${k} is equally likely to land in any of the ${n} envelopes, hence<br>${pr(rel(Ik, '=', '1'))}${NB}=${NB}${fr('1', n)} ⟹ ${EX(Ik)}${NB}=${NB}${fr('1', n)}.<br>Linearity needs no independence:<br>${EX(X)}${NB}= ∑<sub>${k}=1</sub><sup>${n}</sup>${NB}${EX(Ik)}${NB}=${NB}${n}${NB}·${NB}${fr('1', n)}${NB}=${NB}1.<br>Whatever the number of letters, the expected number of correct placements is exactly 1: the surprise that makes this a favourite.`,
          `For the variance, Result 3 in general form applies, with covariance corrections since the indicators are dependent:<br>${VAR(X)}${NB}= ∑<sub>${k}</sub>${NB}${VAR(Ik)}${NB}+ 2${NB}∑<sub>${k}<${l}</sub>${NB}${COV(`${Ik},${NB}${Il}`)}.`,
          `Each variance term is ${fr('1', n)}(1${NB}−${NB}${fr('1', n)}), contributing ${n}${NB}·${NB}${fr('1', n)}(1${NB}−${NB}${fr('1', n)})${NB}=${NB}1${NB}−${NB}${fr('1', n)} overall. For a cross term, ${EX(`${Ik}${Il}`)} is the probability that letters ${k} and ${l} both land correctly: fix those two envelopes, then the remaining ${n}${NB}−${NB}2 letters scatter freely, giving<br>${EX(`${Ik}${Il}`)}${NB}= ${pr('both correct')}<br>= ${fr(`(${n} − 2)!`, `${n}!`)}${NB}= ${fr('1', `${n}(${n} − 1)`)},<br>so${NB}${COV(`${Ik},${NB}${Il}`)}${NB}= ${fr('1', `${n}(${n} − 1)`)}${NB}−${NB}${fr('1', sq(n))}<br>= ${fr(`${n} − (${n} − 1)`, `${sq(n)}(${n} − 1)`)}${NB}= ${fr('1', `${sq(n)}(${n} − 1)`)}.`,
          `There are ${bn(n, '2')}${NB}= ${fr(`${n}(${n} − 1)`, '2')} pairs, so the correction term is<br>2${NB}·${NB}${fr(`${n}(${n} − 1)`, '2')}${NB}·${NB}${fr('1', `${sq(n)}(${n} − 1)`)}${NB}=${NB}${fr('1', n)}.<br>Adding:<br>${VAR(X)}${NB}=${NB}(1${NB}− ${fr('1', n)})${NB}+${NB}${fr('1', n)}${NB}=${NB}1.`,
          `Both mean and variance equal 1, independent of ${n} (for ${rel(n, '≥', '2')}; when ${rel(n, '=', '1')} the single letter is always right, so ${X}${NB}=${NB}1 and ${VAR(X)}${NB}=${NB}0). <b>Check for ${rel(n, '=', '2')}:</b> the two matchings give ${rel(X, '=', '2')} or ${rel(X, '=', '0')} with probability ${HALF} each, so ${EX(X)}${NB}=${NB}1 and ${VAR(X)}${NB}=${NB}${EX(sq(X))}${NB}−${NB}1${NB}=${NB}2${NB}−${NB}1${NB}= 1${NB}✓. The general result agrees with the smallest case.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[JEE Main] Independent ${X}, ${Y} with ${EX(X)}${NB}=${NB}5, ${EX(Y)}${NB}=${NB}2, ${VAR(X)}${NB}=${NB}3, ${VAR(Y)}${NB}=${NB}4. Find ${EX(`3${X} + 2${Y}`)} and ${VAR(`3${X} + 2${Y}`)}.`,
            a: `${I('E')}${NB}=${NB}15${NB}+${NB}4${NB}=${NB}19; Var${NB}=${NB}9${NB}·${NB}3${NB}+${NB}4${NB}·${NB}4${NB}=${NB}27${NB}+ 16${NB}=${NB}43.`,
          },
          {
            q: `[JEE Main] If ${VAR(X)}${NB}=${NB}${VAR(Y)}${NB}=${NB}1 and ${X}, ${Y} are independent, find ${VAR(`${X} − ${Y}`)} and ${VAR(`${X} + ${Y}`)}. Comment.`,
            a: `Both equal 2: ${VAR(`${X} − ${Y}`)}${NB}=${NB}1${NB}+${NB}1 since the sign dies in the square; a difference of two unit-variance independents spreads exactly as much as their sum.`,
          },
          {
            q: '[JEE Main] A fair coin is tossed 10 times. Using indicators, find the expected number of heads and the variance, and reconcile with the Binomial formulas.',
            a: `${X}${NB}=${NB}${I1}${NB}+${NB}⋯${NB}+${NB}${I10}, each ${EX(Ik)}${NB}=${NB}${HALF}, ${VAR(Ik)}${NB}=${NB}${QUARTER}, and the indicators are independent; so ${EX(X)}${NB}=${NB}5, ${VAR(X)}${NB}=${NB}10${NB}·${NB}${QUARTER}${NB}=${NB}${fr('5', '2')}, matching ${I('np')}${NB}=${NB}10${NB}·${NB}${HALF} and ${I('npq')}${NB}=${NB}10${NB}·${NB}${HALF}${NB}·${NB}${HALF}. The Binomial formulas are this indicator computation done once and for all.`,
          },
          {
            q: `[JEE Advanced] ${X}, ${Y} are independent, ${EX(X)}${NB}=${NB}${EX(Y)}${NB}=${NB}2, ${VAR(X)}${NB}=${NB}1, ${VAR(Y)}${NB}=${NB}4. Find ${EX(`${X}${Y}`)} and ${VAR(`${X}${Y}`)}.`,
            a: `${EX(`${X}${Y}`)}${NB}= ${EX(X)}${EX(Y)}${NB}=${NB}4. For the variance, independence also gives ${EX(`${sq(X)}${sq(Y)}`)}${NB}= ${EX(sq(X))}${EX(sq(Y))}${NB}=${NB}5${NB}·${NB}8${NB}=${NB}40, so ${VAR(`${X}${Y}`)}${NB}=${NB}40${NB}−${NB}16${NB}=${NB}24. (Note: ${VAR(`${X}${Y}`)}${NB}≠ ${VAR(X)}${NB}${VAR(Y)}, a favourite distractor.)`,
          },
          {
            q: `[JEE Advanced] In the letters-and-envelopes setting with ${rel(n, '=', '4')}, list the possible values of ${X} and explain why ${X}${NB}=${NB}${n}${NB}−${NB}1 is impossible for ${rel(n, '≥', '1')}.`,
            a: `Values 0, 1, 2, 4. ${rel(X, '=', '3')} is impossible: if exactly three letters sit correctly, the fourth letter faces the only remaining envelope, which must then be its own, forcing ${rel(X, '=', '4')}. Generally ${P}(${X}${NB}=${NB}${n}${NB}−${NB}1)${NB}=${NB}0, a fact that survives in every derangement argument.`,
          },
        ],
      },
    ],
  },
  // ──────────────── Additional topic E · pp. 862–865 ────────────────
  {
    n: 'E',
    title: 'Waiting Times and Turn-Taking: Probability by Infinite Series',
    extra: true,
    kalam: 'The expected waiting time is the reciprocal of the success probability.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `“When does the first success happen?” and “who wins if we alternate?” are not Binomial questions: the number of trials is unbounded, so there is no fixed ${n}. They are geometric-series questions, and JEE Main sets them nearly every year ${ESTIMATE} under the guise of games, queues and repeated attempts. CBSE rarely asks them ${ESTIMATE}; treat this as the JEE-facing capstone.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>Setup.</b> Repeat a Bernoulli trial (success probability ${p}, failure ${q}${NB}=${NB}1${NB}−${NB}${p}) until the first success. Let ${X} be the trial index of that first success. For ${rel(X, '=', k)}, the first ${k}${NB}−${NB}1 trials fail and trial ${k} succeeds; independence multiplies:<br>${pr(rel(X, '=', k))}${NB}= ${GEO},${NB}${NB}${k}${NB}=${NB}1, 2, 3, …`,
      },
      {
        t: 'p',
        html: `<b>Validity: the series sums to 1.</b> This is a geometric series with first term ${p} and common ratio ${q}, where 0${NB}<${NB}${q}${NB}<${NB}1:<br>${SUMk}${NB}${GEO}${NB}=${NB}${p}(1${NB}+${NB}${q}${NB}+ ${sq(q)}${NB}+${NB}⋯)<br>= ${fr(p, `1 − ${q}`)}${NB}=${NB}${fr(p, p)}${NB}=${NB}1.${NB}✓<br>So the probabilities genuinely form a distribution on infinitely many values: the infinite analogue of the ∑${NB}${sb(p, i)}${NB}=${NB}1 check.`,
      },
      {
        t: 'p',
        html: `<b>Mean: an arithmetico-geometric series.</b> We need the auxiliary identity<br>${SUMk}${NB}${k}${NB}${r}<sup>${k}−1</sup>${NB}= ${fr('1', `(1 − ${r})<sup>2</sup>`)},<br>which follows by differentiating the geometric sum ∑<sub>${k}=0</sub><sup>∞</sup>${NB}${r}<sup>${k}</sup>${NB}=${NB}${fr('1', `1 − ${r}`)} term by term (legitimate for ${abs(r)}${NB}<${NB}1). Then<br>${EX(X)}${NB}= ${SUMk}${NB}${k}${NB}${GEO}${NB}=${NB}${p}${NB}·${NB}${fr('1', `(1 − ${q})<sup>2</sup>`)}${NB}= ${fr(p, sq(p))}${NB}=${NB}${fr('1', p)}.<br>The expected waiting time is the reciprocal of the success probability: wait 6 rolls for a six (${rel(p, '=', SIXTH)}), 4 tosses for a head with a coin landing heads a quarter of the time.`,
      },
      {
        t: 'p',
        html: `<b>Variance.</b> Split ${sq(k)}${NB}=${NB}${k}(${k}${NB}−${NB}1)${NB}+${NB}${k}. Differentiating the geometric sum twice gives<br>${SUMk}${NB}${k}(${k}${NB}−${NB}1)${NB}${r}<sup>${k}−1</sup>${NB}= ${fr(`2${r}`, `(1 − ${r})<sup>3</sup>`)},<br>so<br>${EX(sq(X))}${NB}= ${p}[${fr(`2${q}`, `(1 − ${q})<sup>3</sup>`)}${NB}+ ${fr('1', `(1 − ${q})<sup>2</sup>`)}]<br>= ${p}[${fr(`2${q}`, `${p}<sup>3</sup>`)}${NB}+${NB}${fr('1', sq(p))}]${NB}=${NB}${fr(`2${q}`, sq(p))}${NB}+ ${fr('1', p)}.<br>Therefore<br>${VAR(X)}${NB}=${NB}${fr(`2${q}`, sq(p))}${NB}+ ${fr('1', p)}${NB}−${NB}${fr('1', sq(p))}${NB}= ${fr(`2${q} + ${p} − 1`, sq(p))}<br>= ${fr(`2${q} − ${q}`, sq(p))}${NB}= ${fr(q, sq(p))},<br>using ${p}${NB}−${NB}1${NB}=${NB}−${q} in the last step. Record: mean ${fr('1', p)}, variance ${fr(q, sq(p))}.`,
      },
      {
        t: 'formula',
        kicker: 'Waiting time for the first success',
        main: `${pr(rel(X, '=', k))} = ${GEO},${NB}${NB}${k} = 1, 2, 3, …<br>${pr(rel(X, '>', k))} = ${q}<sup>${k}</sup><br>${EX(X)} = ${fr('1', p)}<br>${VAR(X)} = ${fr(q, sq(p))}`,
        legend: [
          `${X}${NB}=${NB}the trial index of the first success`,
          `${p}${NB}=${NB}success probability of each trial`,
          `${q}${NB}=${NB}failure probability, 1${NB}−${NB}${p}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Turn-taking games.</b> Players ${A} and ${B} alternate attempts, ${A} first; each attempt of ${A} succeeds with probability ${a}, of ${B} with probability ${b} (independent across attempts). The first success wins. Condition on round structure: ${A} wins on his ${m}-th attempt exactly when the previous ${m}${NB}−${NB}1 rounds were all failures and that attempt succeeds, an event of probability<br>[${RAT}]<sup>${m}−1</sup>${NB}${a}.<br>Summing the geometric progression with ratio ${r}${NB}= ${RAT}:<br>${AW}${NB}= ${a}(1${NB}+${NB}${r}${NB}+${NB}${sq(r)}${NB}+${NB}⋯)${NB}= ${fr(a, `1 − ${RAT}`)},<br>and since someone eventually wins (the complementary series for ${B} completes the sum to 1),<br>${BW}${NB}= ${fr(`(1 − ${a})${NB}${b}`, `1 − ${RAT}`)}.<br>First-mover advantage is visible in the formula: ${A}’s numerator carries no failure factor, ${B}’s carries (1${NB}−${NB}${a}).`,
      },
      {
        t: 'formula',
        kicker: 'Turn-taking game (<i>A</i> first)',
        main: `${AW} = ${fr(a, `1 − ${RAT}`)}<br>${BW} = ${fr(`(1 − ${a})${NB}${b}`, `1 − ${RAT}`)}`,
        legend: [
          `${a}${NB}= probability that an attempt of ${A} succeeds`,
          `${b}${NB}= probability that an attempt of ${B} succeeds`,
        ],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A fair die is rolled repeatedly until a six appears. Find (i) the probability the first six appears on the 4th roll, (ii) the expected number of rolls, (iii) the probability that the first six appears after the 3rd roll.',
        steps: [
          `Here ${rel(p, '=', SIXTH)}, ${rel(q, '=', F56)}.`,
          `(i)${NB}${pr(rel(X, '=', '4'))}${NB}=${NB}(${F56})<sup>3</sup>${NB}·${NB}${SIXTH}${NB}=${NB}${fr('125', '1296')}.`,
          `(ii)${NB}${EX(X)}${NB}=${NB}${fr('1', p)}${NB}=${NB}6 rolls.`,
          `(iii) “After the 3rd” is the complement of “on roll 1, 2, or 3”:<br>${pr(rel(X, '>', '3'))}${NB}=${NB}1${NB}−${NB}[${SIXTH}${NB}+${NB}${F56}${NB}·${NB}${SIXTH}${NB}+ (${F56})<sup>2</sup>${NB}·${NB}${SIXTH}]<br>= 1${NB}−${NB}${SIXTH}[1${NB}+${NB}${F56}${NB}+ ${fr('25', '36')}].<br>The bracket is a finite geometric sum, ${fr('36 + 30 + 25', '36')}${NB}=${NB}${fr('91', '36')}, so<br>${pr(rel(X, '>', '3'))}${NB}=${NB}1${NB}−${NB}${fr('91', '216')}${NB}=${NB}${fr('125', '216')}.`,
          `<b>Cross-check:</b> ${pr(rel(X, '>', '3'))}${NB}=${NB}${q}<sup>3</sup> directly (surviving three failures) and (${F56})<sup>3</sup>${NB}=${NB}${fr('125', '216')}${NB}✓. In general ${pr(rel(X, '>', k))}${NB}=${NB}${q}<sup>${k}</sup>; memorise this one-liner, it answers most “after how many” phrasings instantly.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${A} and ${B} take turns rolling a fair die, ${A} first; the first to roll a six wins the game. Find the probability that ${A} wins, and the expected duration of the game measured in total rolls.`,
        steps: [
          `With ${a}${NB}=${NB}${b}${NB}=${NB}${SIXTH}, the round-failure ratio is<br>${r}${NB}= ${RAT}${NB}=${NB}${F56}${NB}·${NB}${F56}${NB}=${NB}${fr('25', '36')},${NB}so<br>${AW}${NB}=${NB}${SIXTH}${NB}·${NB}${fr('36', '36 − 25')}<br>= ${SIXTH}${NB}·${NB}${fr('36', '11')}${NB}=${NB}${fr('6', '11')},${NB}and<br>${BW}${NB}=${NB}(${F56}${NB}·${NB}${SIXTH})${NB}·${NB}${fr('36', '11')}${NB}=${NB}${fr('5', '11')},<br>${fr('6', '11')}${NB}+${NB}${fr('5', '11')}${NB}=${NB}1.${NB}✓`,
          `The first roller holds a real edge: ${fr('6', '11')}${NB}≈${NB}0.545 against a fair-looking setup.`,
          `For the duration ${T} (total rolls by both players until the game ends), note each roll independently ends the game with probability ${SIXTH}: whoever rolls, a six terminates play. So ${T} is itself a waiting time with ${rel(p, '=', SIXTH)},${NB}and<br>${EX(T)}${NB}=${NB}6 rolls.`,
          `<b>Cross-check on the win split.</b> Condition on the first roll: with probability ${SIXTH}, ${A} wins immediately; otherwise (probability ${F56}) the game restarts with roles swapped, so<br>${AW}${NB}=${NB}${SIXTH}${NB}+ ${F56}${NB}${BW},<br>${AW}${NB}+ ${BW}${NB}=${NB}1.<br>Solving: ${AW}${NB}=${NB}${SIXTH}${NB}+ ${F56}(1${NB}−${NB}${AW}), giving ${fr('11', '6')}${NB}${AW}${NB}=${NB}1, so ${AW}${NB}=${NB}${fr('6', '11')}${NB}✓: the recursive route, useful when the series is awkward to spot.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `[JEE Main] A biased coin with ${pr('head')}${NB}=${NB}${THIRD} is tossed until the first head. Find the probability that the first head occurs on the fifth toss, and the expected number of tosses.`,
            a: `${P}${NB}=${NB}(${fr('2', '3')})<sup>4</sup>${NB}·${NB}${THIRD}${NB}=${NB}${fr('16', '243')}; ${EX(X)}${NB}=${NB}3.`,
          },
          {
            q: '[JEE Main] Cards are drawn one at a time <b>with replacement</b> from a deck until the first ace appears. Find the expected number of draws.',
            a: `${p}${NB}=${NB}${fr('4', '52')}${NB}=${NB}${fr('1', '13')}; expectation 13 draws.`,
          },
          {
            q: `[JEE Advanced] ${A} and ${B} alternately toss a biased coin with ${pr('head')}${NB}=${NB}${QUARTER}, ${A} first; first head wins. Find each player’s winning probability.`,
            a: `Ratio ${r}${NB}=${NB}${fr('3', '4')}${NB}·${NB}${fr('3', '4')}${NB}=${NB}${fr('9', '16')}; ${AW}${NB}=${NB}${QUARTER}${NB}·${NB}${fr('16', '16 − 9')}${NB}=${NB}${QUARTER}${NB}·${NB}${fr('16', '7')}${NB}=${NB}${fr('4', '7')}; ${BW}${NB}=${NB}(${fr('3', '4')}${NB}·${NB}${QUARTER})${NB}·${NB}${fr('16', '7')}${NB}=${NB}${fr('3', '7')}.`,
          },
          {
            q: '[JEE Advanced] In the game of this topic’s second worked example, find the probability that the game ends on an odd-numbered roll.',
            a: `Rolls ending the game are independent trials with ${rel(p, '=', SIXTH)}; ${P}(${T} odd)${NB}= ∑<sub>${m}≥0</sub>${NB}${pr(rel(T, '=', `2${m} + 1`))}${NB}= ∑<sub>${m}</sub>${NB}(${F56})<sup>2${m}</sup>${NB}${SIXTH}${NB}=${NB}${SIXTH}${NB}·${NB}${fr('36', '36 − 25')}${NB}=${NB}${fr('6', '11')}, the same series as ${AW}, which is no coincidence: ${A} wins exactly when the terminating roll is odd-numbered.`,
          },
          {
            q: `[JEE Advanced] For a waiting time with success probability ${rel(p, '=', HALF)}, compute ${VAR(X)} and verify ${pr(rel(X, '>', k))}${NB}=${NB}${q}<sup>${k}</sup> at ${rel(k, '=', '2')} by direct summation.`,
            a: `Var${NB}=${NB}${fr(q, sq(p))}${NB}=${NB}${HALF}${NB}·${NB}4${NB}=${NB}2. Check: ${pr(rel(X, '>', '2'))}${NB}=${NB}(${HALF})<sup>2</sup>${NB}=${NB}${QUARTER}; directly, ${pr(rel(X, '=', '3'))}${NB}+ ${pr(rel(X, '=', '4'))}${NB}+${NB}⋯${NB}=${NB}${EIGHTH}${NB}+${NB}${fr('1', '16')}${NB}+ ⋯${NB}=${NB}${EIGHTH}${NB}·${NB}${fr('2', '2 − 1')}${NB}=${NB}${QUARTER}${NB}✓.`,
          },
        ],
      },

      { t: 'part', title: 'Closing note on scope' },
      {
        t: 'p',
        html: `Additional topics A, C and E go partly beyond the NCERT text, and JEE questions draw on all three ${ESTIMATE}; Additional topics B and D deepen material the chapter touches but does not develop. If time is short before Boards, prioritise A (the exactly-${k} table appears in disguise even in CBSE three-shooter problems) and the transfer case of C; leave the variance of the geometric distribution (E) for the JEE-only pass.`,
      },
    ],
  },
];
