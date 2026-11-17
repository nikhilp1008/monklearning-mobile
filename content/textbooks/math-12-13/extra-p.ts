import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13 Probability, Additional topic P, pp. 866–875 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word: the book's
 * "Addendum P — What JEE Actually Asks", kept with the book's letter as the
 * chapter's last additional topic (decision 2). It opens at the top of p. 866
 * (Addendum E ends at the foot of p. 865 with its "Closing note on scope") and
 * ends at the foot of p. 875; the errata start on p. 876. The book prints no
 * opening paragraph: its numbered headings "1. The Distribution of Questions
 * Across Subtopics" … "5. Two Skills to Practise Beyond the Standard Formulas"
 * are the parts, without their numbers, in sentence case ("Subtopics" →
 * "topics"). The distribution table is a table block; its "Recent sessions"
 * column is now "Papers cited", the count of the sessions it names, by exam
 * (decisions 6, 8, 11; every paper named is from 2013 on). Each archetype 1–6 is
 * a worked example tagged with its heading (the em dash a colon): its "What it
 * looks like / Method" text and its worked example are the question, the
 * "Solution" the steps, its "Answer:" the answer box. The traps table (# and
 * Description, pp. 871–872) is one mistakes block, as the other P files write
 * their traps; the graded practice set 1–10 is one practice block, each
 * question's "Solution" its answer. Exam years, months and dates are dropped
 * from every tag ("JEE Main 2020 Sep. 02" → "JEE Main"; "JEE 2005" and "JEE
 * 1988 / 2011" → "JEE"), and every share or frequency of past questions carries
 * the estimate label; italic words in print are plain here. These pages print
 * no drawing and no formula card (vector shapes: only the rules between
 * sections, the table rules, fraction bars and binomial brackets).
 * P(A | B) with the bar glued by no-break spaces; ∩ and ∪ glued; ⊥ (U+22A5)
 * for independence, the sign the rest of the chapter uses; the stacked binomial as <binom>; X ∼ B(n, p) with
 * U+223C; Var upright. Every fraction is stacked (<frac>), a fraction over a
 * fraction written with ÷; no em dashes.
 * The expert reviews rm1213a and rm1213b are applied (fx1213): their
 * corrections change the printed words where listed in
 * reports-13/fx1213-applied.md.
 */
const fr = (a: string | number, b: string | number) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const binom = (a: string | number, b: string | number) => `<binom><num>${a}</num><den>${b}</den></binom>`;
/** ⁿCᵣ written inline, for a binomial inside a fraction (no stack in a stack). */
const nCr = (a: string | number, b: string | number) => `<sup>${a}</sup>C<sub>${b}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening bar, so the bar never ends a line. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const E = I('E');
const F = I('F');
const H = I('H');
const K = I('K');
const P = I('P');
const T = I('T');
const W = I('W');
const X = I('X');
const a = I('a');
const b = I('b');
const c = I('c');
const i = I('i');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const mu = I('μ');
const sig = I('σ');

/** P(…) */
const pr = (s: string) => `${P}(${s})`;
/** P(a | b), the bar kept with both sides. */
const cp = (u: string, v: string) => `${P}(${u}${NB}|${NB}${v})`;
const cap = (...xs: string[]) => xs.join(`${NB}∩${NB}`);
const cup = (...xs: string[]) => xs.join(`${NB}∪${NB}`);
const perp = (u: string, v: string) => `${u}${NB}⊥${NB}${v}`;
const sb = (v: string, s: string) => `${v}${WJ}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const rel = (l: string, op: string, rt: string) => `${l}${NB}${op}${NB}${rt}`;
const pair = (u: string | number, v: string | number) => `(${u},${NB}${v})`;
/** |…|, the opening bar kept with what follows. */
const card = (s: string) => `|${WJ}${s}|`;

const AP = `${A}′`;
const BP = `${B}′`;
const DP = `${D}′`;
const AnB = cap(A, B);
const AuB = cup(A, B);
const T1 = sb(T, '1');
const T2 = sb(T, '2');
const E1 = sb(E, '1');
const E2 = sb(E, '2');
const E3 = sb(E, '3');
const Ei = sb(E, i);
const G1 = sb(I('G'), '1');
const R1 = sb(I('R'), '1');
const R2 = sb(I('R'), '2');
const U1 = sb(I('U'), '1');
const U2 = sb(I('U'), '2');
const S = I('S');
const R = I('R');
const xi = sb(x, i);
const pI = sb(p, i);
const xi2 = `${x}<sub>${i}</sub>${WJ}<sup>2</sup>`;
const SUMP = `∑${NB}${pI}`;
const EX = `${E}(${X})`;
const EX2 = `${E}(${sq(X)})`;
const SIG2 = sq(sig);
const QP = I('qp');
const HALF = fr(1, 2);
const QUARTER = fr(1, 4);
const SIXTH = fr(1, 6);
const THIRD = fr(1, 3);
/** Pₖ for a sequence of events or numbers: p₁, S₁, … */
const ps = (v: string, s: string | number) => sb(v, String(s));
const K2 = sq(K);
const P1 = `${P}(1)`;
const P2 = `${P}(2)`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic P (the book's Addendum P) · pp. 866–875 ────────────────
  {
    n: 'P',
    title: 'What JEE Actually Asks',
    extra: true,
    blocks: [
      { t: 'part', title: 'The distribution of questions across topics' },
      {
        t: 'p',
        html: `Across four decades of JEE papers (the earlier JEE papers, then JEE Main and JEE Advanced), previous-year questions on this chapter fall into the four topics below. The table shows how heavily each topic is examined ${ESTIMATE} and, for the recent papers, how many of them it appeared in.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Topic', 'Chapter Name', 'How often examined', 'Papers cited'],
        rows: [
          ['<b>01</b>', 'Conditional Probability & Independence', '<b>Very frequent</b>, nearly every year', '12 (Main 6, Adv 6)'],
          ['<b>02</b>', 'Total Probability & Bayes’ Theorem', '<b>Frequent</b>', '4 (Main 3, Adv 1)'],
          ['<b>03</b>', 'Random Variables & Distributions', '<b>Regular</b>', '5 (Main 2, Adv 3)'],
          ['<b>04</b>', 'Bernoulli Trials & Binomial Distribution', '<b>Very frequent</b>', '6 (Main 3, Adv 3)'],
        ],
      },
      {
        t: 'p',
        html: `<b>Key observation:</b><br>Topic 01 (Conditional Probability & Independence) and Topic 04 (Binomial) are the two most heavily examined ${ESTIMATE}. Topic 02 (Bayes) is the favourite for multi-step questions in JEE Advanced and for long-answer questions in CBSE Boards ${ESTIMATE}. Topic 03 (Random Variables) appears regularly as a short-answer or integer-type question ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Recurring archetypes' },
      {
        t: 'p',
        html: 'Six question “shapes” reappear persistently. For each we give the visual/verbal signature, the core method, and a fully worked example.',
      },
      {
        t: 'ex',
        tag: 'Archetype 1: Bayes’ Theorem with Base-Rate Neglect',
        q: `<b>What it looks like:</b> A two-stage experiment: a “cause” is chosen from a partition (boxes, machines, factories, diseases), then an “effect” is observed. The question asks for the posterior probability of a particular cause given the effect. The trap is to quote the likelihood (effect-given-cause) instead of the${NB}posterior.<br><b>Method:</b><br>1. Identify the partition {${Ei}} (causes) and the observed event ${A} (effect).<br>2. Write priors ${pr(Ei)} and likelihoods ${cp(A, Ei)}.<br>3. Compute ${pr(A)}${NB}= ∑<sub>${i}</sub>${NB}${pr(Ei)}${cp(A, Ei)} (Total Probability).<br>4. Apply Bayes: ${cp(Ei, A)}${NB}= ${fr(`${pr(Ei)}${cp(A, Ei)}`, pr(A))}.<br>5. <b>Sanity check:</b> Posteriors must sum to${NB}1.<br><b>Worked Example (JEE Advanced)</b><br>A factory has two plants ${T1} and ${T2}. ${T1} produces 20% of computers, ${T2} produces 80%. Overall 7% are defective.<br>${cp('defective', T1)}${NB}= 10${NB}${cp('defective', T2)}.<br>A randomly selected computer is <b>not</b> defective. Find the probability it came from ${T2}.`,
        steps: [
          `Let ${D}${NB}= “defective”, ${T1}, ${T2} the plants.<br>${rel(pr(T1), '=', '0.2')}, ${rel(pr(T2), '=', '0.8')}, ${rel(pr(D), '=', '0.07')}.<br>Let ${cp(D, T2)}${NB}=${NB}${x}; then ${cp(D, T1)}${NB}=${NB}10${x}.`,
          `Total Probability:<br>${pr(D)}${NB}= ${pr(T1)}${cp(D, T1)}${NB}+ ${pr(T2)}${cp(D, T2)}<br>= 0.2(10${x})${NB}+${NB}0.8${x}${NB}=${NB}2.8${x}${NB}=${NB}0.07${NB}⇒ ${rel(x, '=', '0.025')}.<br>Hence ${cp(D, T1)}${NB}=${NB}0.25, ${cp(D, T2)}${NB}=${NB}0.025.`,
          `We need ${cp(T2, DP)}:<br>${cp(DP, T1)}${NB}=${NB}0.75, ${cp(DP, T2)}${NB}=${NB}0.975.<br>${pr(DP)}${NB}= ${pr(T1)}${cp(DP, T1)}${NB}+ ${pr(T2)}${cp(DP, T2)}<br>= 0.2${NB}×${NB}0.75${NB}+${NB}0.8${NB}×${NB}0.975${NB}= 0.15${NB}+${NB}0.78${NB}=${NB}0.93.`,
          `${cp(T2, DP)}${NB}= ${fr(`${pr(T2)}${cp(DP, T2)}`, pr(DP))}<br>= ${fr('0.8 × 0.975', '0.93')}${NB}=${NB}${fr('0.78', '0.93')}.`,
        ],
        ans: `${fr(26, 31)}.`,
      },
      {
        t: 'ex',
        tag: 'Archetype 2: Independence vs. Mutual Exclusivity & Complement Independence',
        q: `<b>What it looks like:</b> Given probabilities of events ${A}, ${B} (and sometimes ${C}), decide whether they are independent, mutually exclusive, both, or${NB}neither. A classic variant asks which of ${AP}, ${B} or ${A}, ${BP} or ${AP}, ${BP} are guaranteed independent when ${A}, ${B} are${NB}independent.<br><b>Method:</b><br>• Compute ${pr(AnB)} via addition theorem: ${pr(AnB)}${NB}=${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}− ${pr(AuB)}.<br>• <b>Independence test:</b> ${pr(AnB)}${NB}= ${pr(A)}${pr(B)}?<br>• <b>Mutual exclusivity test:</b> ${pr(AnB)}${NB}=${NB}0? (If both probabilities${NB}>${NB}0, they <b>cannot</b> be both independent and mutually exclusive.)<br>• <b>Complement rule:</b> If ${perp(A, B)}, then ${perp(A, BP)}, ${perp(AP, B)}, ${perp(AP, BP)} (prove via ${pr(cap(A, BP))}${NB}=${NB}${pr(A)}${NB}− ${pr(AnB)}${NB}= ${pr(A)}${WJ}(1${NB}−${NB}${pr(B)})).<br><b>Worked Example (JEE Main)</b><br>Two fair dice ${A}, ${B}. ${E1}: die ${A} shows 4; ${E2}: die ${B} shows 2; ${E3}: sum is odd.<br>Which statement is <b>NOT</b> true?<br>(a) ${E1} and ${E3}${NB}independent.<br>(b) ${E1}, ${E2}, ${E3} mutually${NB}independent.<br>(c) ${E1} and ${E2}${NB}independent.<br>(d) ${E2} and ${E3}${NB}independent.`,
        steps: [
          `${pr(E1)}${NB}=${NB}${SIXTH}, ${pr(E2)}${NB}=${NB}${SIXTH}, ${pr(E3)}${NB}=${NB}${HALF}.`,
          `${cap(E1, E3)}: ${rel(A, '=', '4')} and sum odd${NB}⇒${NB}${B}${NB}odd.<br>${P}${NB}=${NB}${SIXTH}${NB}⋅${NB}${fr(3, 6)}${NB}=${NB}${fr(1, 12)}${NB}= ${pr(E1)}${pr(E3)}${NB}→${NB}independent.`,
          `${cap(E2, E3)}: ${rel(B, '=', '2')} and sum odd${NB}⇒${NB}${A}${NB}odd.<br>${P}${NB}=${NB}${SIXTH}${NB}⋅${NB}${fr(3, 6)}${NB}=${NB}${fr(1, 12)}${NB}= ${pr(E2)}${pr(E3)}${NB}→${NB}independent.`,
          `${cap(E1, E2)}: different dice${NB}→${NB}independent.`,
          `<b>Mutual independence?</b> Need ${pr(cap(E1, E2, E3))}${NB}= ${pr(E1)}${pr(E2)}${pr(E3)}.<br>${cap(E1, E2, E3)}: ${rel(A, '=', '4')}, ${rel(B, '=', '2')}, sum${NB}=${NB}6 (even)${NB}→ impossible, probability 0.<br>But${NB}${pr(E1)}${pr(E2)}${pr(E3)}${NB}=${NB}${SIXTH}${NB}⋅${NB}${SIXTH}${NB}⋅${NB}${HALF}${NB}= ${fr(1, 72)}${NB}≠${NB}0.<br>Hence ${E1}, ${E2}, ${E3} are <b>not</b> mutually${NB}independent.`,
        ],
        ans: '(b) is the false statement.',
      },
      {
        t: 'ex',
        tag: 'Archetype 3: Binomial Distribution: Parameter Recovery & “At Least One” via Complement',
        q: `<b>What it looks like:</b> Either (i) given mean ${mu}${NB}=${NB}${I('np')} and variance ${SIG2}${NB}=${NB}${I('npq')}, find ${n}, ${p} and then a specific probability; or (ii) “at least one success in ${n} trials” where summing ${pr(rel(X, '=', '1'))}${NB}+${NB}⋯${NB}+ ${pr(rel(X, '=', n))} directly is a trap: use 1${NB}−${NB}${pr(rel(X, '=', '0'))}.<br><b>Method:</b><br>• ${mu}${NB}=${NB}${I('np')}, ${SIG2}${NB}=${NB}${I('npq')}${NB}⇒${NB}${q}${NB}=${NB}${fr(SIG2, mu)}, ${p}${NB}=${NB}1${NB}−${NB}${q}, ${n}${NB}=${NB}${fr(mu, p)}.<br>• ${pr(rel(X, '≥', '1'))}${NB}=${NB}1${NB}−${NB}${q}<sup>${n}</sup>.<br>• For “exactly ${r}”: ${pr(rel(X, '=', r))}${NB}= ${binom(n, r)}${p}<sup>${r}</sup>${q}<sup>${n}−${r}</sup>.<br><b>Worked Example (JEE Main)</b><br>In a workshop, five machines each have probability ${QUARTER} of being out of service on a day. If the probability that at most two machines are out of service is ${fr(k, 512)}, find ${k}.`,
        steps: [
          `${X}${NB}∼${NB}${B}(5,${NB}${QUARTER}), ${q}${NB}=${NB}${fr(3, 4)}.<br>${pr(rel(X, '≤', '2'))}${NB}=${NB}${pr('0')}${NB}+${NB}${P1}${NB}+ ${P2}`,
          `${pr('0')}${NB}= ${binom(5, 0)}(${QUARTER})<sup>0</sup>(${fr(3, 4)})<sup>5</sup>${NB}=${NB}${fr(243, 1024)}`,
          `${P1}${NB}= ${binom(5, 1)}(${QUARTER})<sup>1</sup>(${fr(3, 4)})<sup>4</sup>${NB}=${NB}5${NB}⋅${NB}${QUARTER}${NB}⋅${NB}${fr(81, 256)}${NB}= ${fr(405, 1024)}`,
          `${P2}${NB}= ${binom(5, 2)}(${QUARTER})<sup>2</sup>(${fr(3, 4)})<sup>3</sup>${NB}=${NB}10${NB}⋅${NB}${fr(1, 16)}${NB}⋅${NB}${fr(27, 64)}${NB}= ${fr(270, 1024)}`,
          `Sum${NB}= ${fr('243 + 405 + 270', 1024)}${NB}= ${fr(918, 1024)}${NB}=${NB}${fr(459, 512)}.`,
        ],
        ans: '459.',
      },
      {
        t: 'ex',
        tag: 'Archetype 4: Conditional Probability in Sequential Draws Without Replacement',
        q: `<b>What it looks like:</b> Balls are drawn sequentially without replacement; a condition is given on early draws (or a transfer occurs), and we need a probability for a later draw. The sample space shrinks at each step.<br><b>Method:</b><br>• Use the chain rule / multiplication theorem: ${pr(cap(E1, E2, '⋯'))}${NB}= ${pr(E1)}${cp(E2, E1)}${NB}⋯<br>• For “given that …”, restrict to the reduced sample space after the conditioning event.<br><b>Worked Example (JEE Main)</b><br>An urn contains 5 red and 2 green balls. A ball is drawn at random. If it is green, a red ball is added; if it is red, a green ball is added. The original ball is <b>not</b> returned. Now a second ball is drawn. Find the probability the second ball is red.`,
        steps: [
          `Let ${G1}, ${R1} be first draw events; ${R2}${NB}=${NB}second ball red.<br>${pr(G1)}${NB}=${NB}${fr(2, 7)}, ${pr(R1)}${NB}=${NB}${fr(5, 7)}.`,
          `If ${G1}: green removed, red added${NB}→${NB}urn has 6 red, 1 green. ${cp(R2, G1)}${NB}=${NB}${fr(6, 7)}.`,
          `If ${R1}: red removed, green added${NB}→${NB}urn has 4 red, 3 green. ${cp(R2, R1)}${NB}=${NB}${fr(4, 7)}.`,
          `By Total Probability:<br>${pr(R2)}${NB}= ${pr(G1)}${cp(R2, G1)}${NB}+ ${pr(R1)}${cp(R2, R1)}<br>= ${fr(2, 7)}${NB}⋅${NB}${fr(6, 7)}${NB}+${NB}${fr(5, 7)}${NB}⋅${NB}${fr(4, 7)}${NB}=${NB}${fr(12, 49)}${NB}+ ${fr(20, 49)}.`,
        ],
        ans: `${fr(32, 49)}.`,
      },
      {
        t: 'ex',
        tag: 'Archetype 5: Random Variables: Constructing the Distribution, Mean, Variance, Linear Transforms',
        q: `<b>What it looks like:</b> A random variable ${X} is defined by a formula (e.g., ${pr(rel(X, '=', x))}${NB}=${NB}${I('kx')}) or by a physical experiment (drawing cards, tossing coins). You must build the probability table, find ${k} from ${SUMP}${NB}=${NB}1, then compute ${EX}, ${EX2}, Var(${X}), and often ${E}(${a}${X}${NB}+${NB}${b}), Var(${a}${X}${NB}+ ${b}).<br><b>Method:</b><br>• List all possible values ${xi} and their probabilities ${pI} (using counting or given${NB}formula).<br>• Verify ${SUMP}${NB}=${NB}1.<br>• Use a 4-column table: ${xi}, ${pI}, ${xi}${pI}, ${xi2}${pI}. Sum third column${NB}→${NB}${EX}; fourth${NB}→${NB}${EX2}.<br>• Var(${X})${NB}=${NB}${EX2}${NB}−${NB}[${EX}]<sup>2</sup>.<br>• Linear rules: ${E}(${a}${X}${NB}+${NB}${b})${NB}=${NB}${a}${EX}${NB}+${NB}${b}; Var(${a}${X}${NB}+${NB}${b})${NB}= ${sq(a)}Var(${X}).<br><b>Worked Example (JEE Main)</b><br>Random variable ${X} takes values 1, 2, 3, 4, 5 with probabilities ${K2}, 2${K}, ${K}, 2${K}, 5${K2}.<br>Find ${pr(rel(X, '>', '2'))}.`,
        steps: [
          `${SUMP}${NB}=${NB}${K2}${NB}+${NB}2${K}${NB}+${NB}${K}${NB}+${NB}2${K}${NB}+ 5${K2}${NB}=${NB}6${K2}${NB}+${NB}5${K}${NB}=${NB}1<br>⇒ 6${K2}${NB}+${NB}5${K}${NB}−${NB}1${NB}=${NB}0${NB}⇒ (6${K}${NB}−${NB}1)${WJ}(${K}${NB}+${NB}1)${NB}=${NB}0${NB}⇒${NB}${K}${NB}=${NB}${SIXTH} (${rel(K, '=', '−1')} rejected).`,
          `Probabilities: ${ps(p, 1)}${NB}=${NB}${fr(1, 36)}, ${ps(p, 2)}${NB}=${NB}${THIRD}, ${ps(p, 3)}${NB}=${NB}${SIXTH}, ${ps(p, 4)}${NB}=${NB}${THIRD}, ${ps(p, 5)}${NB}=${NB}${fr(5, 36)}.`,
          `${pr(rel(X, '>', '2'))}${NB}=${NB}${ps(p, 3)}${NB}+${NB}${ps(p, 4)}${NB}+${NB}${ps(p, 5)}${NB}= ${SIXTH}${NB}+${NB}${THIRD}${NB}+${NB}${fr(5, 36)}${NB}=${NB}${fr('6 + 12 + 5', 36)}.`,
        ],
        ans: `${fr(23, 36)}.`,
      },
      {
        t: 'ex',
        tag: 'Archetype 6: Geometric / Negative Binomial: Waiting for the r-th Success',
        q: `<b>What it looks like:</b> Trials continue until a certain number of successes occur. “A throws a die until a 6 appears”, “draw cards with replacement until second ace”, “toss a coin until two heads”, etc.<br><b>Method:</b><br>• <b>Geometric (${rel(r, '=', '1')}):</b><br>${P}(first success${NB}on${NB}trial${NB}${n})${NB}=${NB}${q}<sup>${n}−1</sup>${p}.<br>• <b>Negative Binomial (${rel(r, '≥', '2')}):</b><br>${P}(${r}-th success${NB}on${NB}trial${NB}${n})${NB}= ${binom(`${n}−1`, `${r}−1`)}${p}<sup>${r}</sup>${q}<sup>${n}−${r}</sup>.<br>• For “success occurs on an even trial”, sum the geometric series: ∑<sub>${k}=1</sub><sup>∞</sup>${NB}${q}<sup>2${k}−1</sup>${p}${NB}= ${fr(QP, `1 − ${sq(q)}`)}.<br><b>Worked Example (JEE)</b><br>A fair die is thrown until a 1 appears. Find the probability that 1 comes on an <b>even</b> number of trials.`,
        steps: [
          `${p}${NB}=${NB}${SIXTH}, ${q}${NB}=${NB}${fr(5, 6)}.`,
          `Required probability${NB}=${NB}${QP}${NB}+${NB}${q}<sup>3</sup>${p}${NB}+ ${q}<sup>5</sup>${p}${NB}+${NB}⋯${NB}=${NB}${QP}(1${NB}+${NB}${sq(q)}${NB}+${NB}${q}<sup>4</sup>${NB}+ ⋯)<br>= ${fr(QP, `1 − ${sq(q)}`)}${NB}=${NB}(${fr(5, 6)}${NB}⋅${NB}${SIXTH})${NB}⋅${NB}${fr(36, '36 − 25')}${NB}=${NB}${fr(5, 36)}${NB}⋅${NB}${fr(36, 11)}.`,
        ],
        ans: `${fr(5, 11)}.`,
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'p',
        html: 'The following mistake patterns are explicitly engineered into JEE distractors. They come from the pitfalls flagged in this chapter and from common JEE distractor patterns.',
      },
      {
        t: 'mistakes',
        items: [
          `Treating “independent” and “mutually exclusive” as synonyms. For ${pr(A)}, ${rel(pr(B), '>', '0')} they are <b>opposites</b>: mutually exclusive${NB}⇒ ${pr(AnB)}${NB}=${NB}0, independent${NB}⇒ ${pr(AnB)}${NB}= ${pr(A)}${pr(B)}${NB}>${NB}0.`,
          `Swapping ${cp(A, B)} and ${cp(B, A)}. The denominator changes from ${pr(B)} to ${pr(A)}.`,
          `Assuming pairwise independence of three events implies mutual independence. The triple product ${pr(cap(A, B, C))}${NB}= ${pr(A)}${pr(B)}${pr(C)} must be checked separately.`,
          `<b>Base-rate neglect.</b> Quoting the likelihood ${cp('effect', 'cause')} as the posterior ${cp('cause', 'effect')}. The classic “95% accurate test” trap.`,
          `Dividing by a single ${pr(Ei)}${cp(A, Ei)} instead of the full sum ${pr(A)}.`,
          `Using “causes” that are not disjoint or not exhaustive. If ∑${NB}${pr(Ei)}${NB}≠${NB}1, they are not a partition and Total Probability fails; a sum of 1 alone does not prove a partition (check that the causes are disjoint).`,
          `Applying the binomial formula to draws <b>without replacement</b> (where ${p} shifts and trials are dependent).`,
          `Swapping exponents: writing ${p}<sup>${n}−${r}</sup>${q}<sup>${r}</sup> instead of ${p}<sup>${r}</sup>${q}<sup>${n}−${r}</sup>.`,
          `Believing variance can exceed the mean for a binomial. Since ${rel(q, '<', '1')} (that is, ${rel(p, '>', '0')}), ${SIG2}${NB}=${NB}${I('npq')}${NB}<${NB}${I('np')}${NB}=${NB}${mu} always. Inconsistent data${NB}→ non-binomial or error.`,
          `Summing ${pr(rel(X, '=', r))} for ${rel(r, '=', k)} to ${n} instead of using the complement 1${NB}−${NB}${pr(rel(X, '<', k))}.`,
          `Computing plain average ${fr(`∑${NB}${xi}`, n)} instead of ∑${NB}${xi}${pI}.`,
          `Forgetting to square the mean: Var${NB}=${NB}${EX2}${NB}−${NB}${EX} instead of ${EX2}${NB}−${NB}[${EX}]<sup>2</sup>.`,
          `Not checking ${SUMP}${NB}=${NB}1 when a distribution contains an unknown constant ${k}; accepting a ${k} that yields negative probabilities.`,
          'Ignoring the given condition and computing an unconditional probability (e.g., “at least one girl” vs “elder is a girl”).',
        ],
      },

      { t: 'part', title: 'Graded practice set' },
      { t: 'p', html: 'The following 10 questions are self-contained and arranged in ascending difficulty.' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>(Basic Conditional): JEE Main style</b><br>A fair die is rolled twice. Given that the sum of the two rolls is a multiple of 4, find the probability that the score 4 appears at least\u00a0once.',
            a: `Sample space: 36 ordered pairs.<br>${F}${NB}=${NB}sum multiple of 4: sums {4, 8, 12}.<br>${F}${NB}= {${pair(1, 3)}, ${pair(2, 2)}, ${pair(3, 1)}, ${pair(2, 6)}, ${pair(3, 5)}, ${pair(4, 4)}, ${pair(5, 3)}, ${pair(6, 2)}, ${pair(6, 6)}}${NB}→${NB}9 outcomes.<br>${E}${NB}=${NB}at least one 4: {${pair(4, 1)}, ${pair(4, 2)}, ${pair(4, 3)}, ${pair(4, 4)}, ${pair(4, 5)}, ${pair(4, 6)}, ${pair(1, 4)}, ${pair(2, 4)}, ${pair(3, 4)}, ${pair(5, 4)}, ${pair(6, 4)}}${NB}→${NB}11 outcomes.<br>${cap(E, F)}${NB}= {${pair(4, 4)}} only.<br>${cp(E, F)}${NB}= ${fr(card(cap(E, F)), card(F))}${NB}=${NB}${fr(1, 9)}.<br><b>Answer:</b> ${fr(1, 9)}.`,
          },
          {
            q: `<b>(Independence Check): JEE Main style</b><br>For events ${A}, ${B}: ${rel(pr(A), '=', '0.5')}, ${rel(pr(B), '=', '0.4')}, ${rel(pr(AuB), '=', '0.7')}. Determine whether ${A}, ${B} are independent, mutually exclusive, both, or${NB}neither.`,
            a: `${pr(AnB)}${NB}=${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}− ${pr(AuB)}${NB}=${NB}0.5${NB}+${NB}0.4${NB}−${NB}0.7${NB}=${NB}0.2.<br>${pr(A)}${pr(B)}${NB}=${NB}0.5${NB}×${NB}0.4${NB}=${NB}0.2.<br>Since ${pr(AnB)}${NB}= ${pr(A)}${pr(B)}, ${A}, ${B} are${NB}<b>independent</b>.<br>Mutually exclusive would require ${pr(AnB)}${NB}=${NB}0, but it is 0.2${NB}≠ 0.<br><b>Answer:</b> Independent only.`,
          },
          {
            q: '<b>(Bayes with Two Causes): JEE Main style</b><br>Box I has cards numbered 1–30; Box II has cards 31–50. A box is chosen at random, a card is drawn and found to be a <b>non-prime</b> number. Find the probability the card came from Box I.',
            a: `Primes in 1 … 30: 10${NB}→ non-primes${NB}20.<br>Primes in 31 … 50: 5${NB}→ non-primes${NB}15.<br>Priors: ${P}(Box I)${NB}=${NB}${P}(Box II)${NB}=${NB}${HALF}.<br>Likelihoods: ${cp('non-prime', 'I')}${NB}=${NB}${fr(20, 30)}${NB}=${NB}${fr(2, 3)};<br>${cp('non-prime', 'II')}${NB}= ${fr(15, 20)}${NB}=${NB}${fr(3, 4)}.<br>${P}(non-prime)${NB}=${NB}${HALF}${NB}⋅${NB}${fr(2, 3)}${NB}+ ${HALF}${NB}⋅${NB}${fr(3, 4)}${NB}=${NB}${THIRD}${NB}+${NB}${fr(3, 8)}${NB}=${NB}${fr(17, 24)}.<br>${cp('I', 'non-prime')}${NB}= (${HALF}${NB}⋅${NB}${fr(2, 3)})${NB}⋅${NB}${fr(24, 17)}${NB}=${NB}${THIRD}${NB}⋅${NB}${fr(24, 17)}${NB}=${NB}${fr(8, 17)}.<br><b>Answer:</b> ${fr(8, 17)}.`,
          },
          {
            q: `<b>(Binomial: Parameter Recovery): JEE Main style</b><br>A random variable ${X}${NB}∼${NB}${B}(${n},${NB}${p}) has mean 8 and variance 4. Find ${n}, ${p} and ${pr(rel(X, '≤', '2'))}.`,
            a: `${I('np')}${NB}=${NB}8, ${I('npq')}${NB}=${NB}4${NB}⇒${NB}${q}${NB}=${NB}${fr(4, 8)}${NB}=${NB}${HALF}, ${p}${NB}=${NB}${HALF}, ${rel(n, '=', '16')}.<br>${pr(rel(X, '≤', '2'))}${NB}= ∑<sub>${r}=0</sub><sup>2</sup>${NB}${binom(16, r)}(${HALF})<sup>16</sup><br>= ${fr(`${nCr(16, 0)} + ${nCr(16, 1)} + ${nCr(16, 2)}`, '2<sup>16</sup>')}<br>= ${fr('1 + 16 + 120', 65536)}${NB}=${NB}${fr(137, 65536)}.<br><b>Answer:</b> ${rel(n, '=', '16')}, ${p}${NB}=${NB}${HALF}, ${pr(rel(X, '≤', '2'))}${NB}=${NB}${fr(137, 65536)}.`,
          },
          {
            q: '<b>(Sequential Without Replacement): JEE Main style</b><br>An urn contains 5 red and 2 green balls. A ball is drawn. If it is green, a red ball is added; if red, a green ball is added. The first ball is <b>not</b> returned. A second ball is drawn. Find the probability the second ball is red.',
            a: `Identical to Archetype 4 worked example.<br>${P}(2nd red)${NB}=${NB}${fr(32, 49)}.<br><b>Answer:</b> ${fr(32, 49)}.`,
          },
          {
            q: `<b>(Random Variable: Formula-Defined Distribution): JEE Main style</b><br>${X} takes values 1, 2, 3, 4, 5 with ${pr(rel(X, '=', x))}${NB}=${NB}${c}${sq(x)}. Find ${c} and ${pr(rel(X, '≥', '4'))}.`,
            a: `∑<sub>${x}=1</sub><sup>5</sup>${NB}${c}${sq(x)}${NB}=${NB}${c}(1${NB}+${NB}4${NB}+${NB}9${NB}+${NB}16${NB}+${NB}25)<br>= 55${c}${NB}=${NB}1${NB}⇒ ${c}${NB}=${NB}${fr(1, 55)}.<br>${pr(rel(X, '≥', '4'))}${NB}=${NB}${pr('4')}${NB}+${NB}${pr('5')}<br>= ${fr(16, 55)}${NB}+${NB}${fr(25, 55)}${NB}=${NB}${fr(41, 55)}.<br><b>Answer:</b> ${c}${NB}=${NB}${fr(1, 55)}, ${pr(rel(X, '≥', '4'))}${NB}=${NB}${fr(41, 55)}.`,
          },
          {
            q: '<b>(Geometric Series: Even-Trial Success): JEE style</b><br>A fair coin is tossed until the first head appears. Find the probability that the first head occurs on an <b>even</b>-numbered toss.',
            a: `${p}${NB}=${NB}${HALF}, ${q}${NB}=${NB}${HALF}.<br>${P}(even trial)${NB}=${NB}${QP}${NB}+${NB}${q}<sup>3</sup>${p}${NB}+${NB}${q}<sup>5</sup>${p}${NB}+ ⋯${NB}= ${fr(QP, `1 − ${sq(q)}`)}<br>= ${QUARTER}${NB}⋅${NB}${fr(4, '4 − 1')}${NB}=${NB}${THIRD}.<br><b>Answer:</b> ${THIRD}.`,
          },
          {
            q: `<b>(Total Probability${NB}+${NB}Bayes: Two-Stage Urn): JEE style</b><br>Urn ${U1} has 3 white, 2 red balls. Urn ${U2} has 1 white ball. A fair coin is tossed. If heads, one ball is drawn from ${U1} and put into ${U2}; if tails, two balls are drawn from ${U1} and put into ${U2}. Then one ball is drawn from ${U2}.<br>(a) Find the probability the drawn ball is white.<br>(b) Given the drawn ball is white, find the probability the coin showed heads.`,
            a: `<b>Case H (heads, prob ${HALF}):</b> Transfer 1 ball from ${U1} (3W,${NB}2R).<br>${P}(transfer W)${NB}=${NB}${fr(3, 5)}, then ${U2} has 2W${NB}→ ${P}(${W}${NB}|${NB}${H}, trans W)${NB}=${NB}1.<br>${P}(transfer R)${NB}=${NB}${fr(2, 5)}, then ${U2} has 1W, 1R${NB}→ ${P}(${W}${NB}|${NB}${H}, trans R)${NB}=${NB}${HALF}.<br>${cp(W, H)}${NB}=${NB}${fr(3, 5)}${NB}⋅${NB}1${NB}+${NB}${fr(2, 5)}${NB}⋅${NB}${HALF}${NB}=${NB}${fr(4, 5)}.<br><b>Case T (tails, prob ${HALF}):</b> Transfer 2 balls from${NB}${U1}.<br>Possibilities:<br>2W (${fr(nCr(3, 2), nCr(5, 2))}${NB}=${NB}${fr(3, 10)}),<br><br>1W1R (${fr(`${nCr(3, 1)}${NB}${nCr(2, 1)}`, 10)}${NB}=${NB}${fr(6, 10)}),<br>2R (${fr(1, 10)}).<br>${U2} initially 1W. After transfer:<br>2W${NB}→${NB}3W${NB}→${NB}${pr(W)}${NB}=${NB}1;<br>1W1R${NB}→${NB}2W, 1R${NB}→${NB}${pr(W)}${NB}=${NB}${fr(2, 3)};<br>2R${NB}→${NB}1W, 2R${NB}→${NB}${pr(W)}${NB}=${NB}${THIRD}.<br>${cp(W, T)}${NB}=${NB}${fr(3, 10)}${NB}⋅${NB}1${NB}+ ${fr(6, 10)}${NB}⋅${NB}${fr(2, 3)}${NB}+${NB}${fr(1, 10)}${NB}⋅${NB}${THIRD}<br>= ${fr(3, 10)}${NB}+${NB}${fr(12, 30)}${NB}+${NB}${fr(1, 30)}${NB}= ${fr('9 + 12 + 1', 30)}${NB}=${NB}${fr(22, 30)}${NB}=${NB}${fr(11, 15)}.<br><b>Total Probability:</b><br>${pr(W)}${NB}=${NB}${HALF}${NB}⋅${NB}${fr(4, 5)}${NB}+ ${HALF}${NB}⋅${NB}${fr(11, 15)}${NB}=${NB}${fr(2, 5)}${NB}+${NB}${fr(11, 30)}${NB}= ${fr('12 + 11', 30)}${NB}=${NB}${fr(23, 30)}.<br><b>Bayes for (b):</b><br>${cp(H, W)}${NB}= ${fr(`${pr(H)}${cp(W, H)}`, pr(W))}<br>= (${HALF}${NB}⋅${NB}${fr(4, 5)})${NB}⋅${NB}${fr(30, 23)}${NB}=${NB}${fr(2, 5)}${NB}⋅${NB}${fr(30, 23)}${NB}=${NB}${fr(12, 23)}.<br><b>Answers:</b> (a) ${fr(23, 30)}; (b) ${fr(12, 23)}.`,
          },
          {
            q: `<b>(Combinatorial Conditional: Derangements): JEE Advanced style</b><br>Five students ${ps(S, 1)}, … , ${ps(S, 5)} are randomly allotted five seats ${ps(R, 1)}, … , ${ps(R, 5)} (initially ${sb(S, i)} gets ${sb(R, i)}). Find the probability that ${ps(S, 1)} gets ${ps(R, 1)} and <b>none</b> of ${ps(S, 2)}, ${ps(S, 3)}, ${ps(S, 4)}, ${ps(S, 5)} get their own seats.`,
            a: `Total permutations: 5!${NB}=${NB}120.<br>Fix ${ps(S, 1)}${NB}→${NB}${ps(R, 1)}. The remaining 4 students must be <b>deranged</b> (no fixed points).<br>Number of derangements of 4: !${WJ}4${NB}=${NB}4!${WJ}(1${NB}−${NB}${fr(1, '1!')}${NB}+${NB}${fr(1, '2!')}${NB}− ${fr(1, '3!')}${NB}+${NB}${fr(1, '4!')})<br>= 24(1${NB}−${NB}1${NB}+${NB}${HALF}${NB}−${NB}${SIXTH}${NB}+${NB}${fr(1, 24)})${NB}=${NB}9.<br>${P}${NB}=${NB}${fr(9, 120)}${NB}=${NB}${fr(3, 40)}.<br><b>Answer:</b> ${fr(3, 40)}.`,
          },
          {
            q: '<b>(Advanced Conditional Probability: Geometric Race): JEE Advanced style</b><br>Two fair dice are rolled repeatedly until the sum is either a <b>prime</b> or a <b>perfect square</b>. Given that a perfect square appears <b>before</b> any prime, find the probability that this perfect square is <b>odd</b> (i.e., 9).',
            a: `Prime sums: 2, 3, 5, 7, 11${NB}→${NB}15 outcomes.<br>Perfect squares: 4, 9${NB}→${NB}4: 3 outcomes; 9: 4 outcomes. Total square outcomes${NB}=${NB}7.<br>The process stops at the first roll that is either prime or square. The conditional probability that the stopping square is 9 given that a square occurred before a prime is simply the proportion of 9 among all squares:<br>${P}(square${NB}is${NB}9 | square before${NB}prime)<br>= ${fr('ways for 9', 'ways for 4 + ways for 9')}${NB}= ${fr(4, '3 + 4')}${NB}=${NB}${fr(4, 7)}.<br>(The geometric “race” between prime and square cancels out because the relative odds are the same on every roll.)<br><b>Answer:</b> ${fr(4, 7)}.`,
          },
        ],
      },

      { t: 'part', title: 'Two skills to practise beyond the standard formulas' },
      {
        t: 'p',
        html: 'The standard formulas and theorems of this chapter are necessary but not sufficient. Two JEE skills deserve extra practice:',
      },
      {
        t: 'p',
        html: `1. <b>Recognising when a problem is not binomial.</b> Many JEE questions look binomial (fixed ${n}, two outcomes) but are actually hypergeometric (draws without replacement) or need a chain of conditional probabilities ${ESTIMATE}. Always ask first whether the trials are independent with a constant ${p}.`,
      },
      {
        t: 'p',
        html: `2. <b>Manipulating conditional probability algebraically.</b> By definition ${cp(A, B)}${NB}= ${fr(pr(AnB), pr(B))}, but JEE Advanced often requires deriving inequalities such as ${cp(A, B)}${NB}≥ ${fr(`${pr(A)} + ${pr(B)} − 1`, pr(B))} (from${NB}${pr(AnB)}${NB}≥${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}−${NB}1), or handling chained conditioning ${cp(E1, cap(E2, E3))} without a ready-made formula ${ESTIMATE}. Practise turning English statements into set-algebra identities and simplifying them.`,
      },
    ],
  },
];
