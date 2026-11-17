/**
 * KEY POINTS for Mathematics Class 12, Chapter 13 (Probability).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–04 each have five Remember points and one of each other kind;
 * Additional topics A–E have two Remember points and one of each other kind;
 * Additional P, the past-paper analysis, has five points (three archetypes as
 * Remember and Exam shortcuts, two traps): 62 points in all. Memory lines
 * are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3 (the chapter's Subtopics 01–04; Topic 04
 * also holds the Master Formula Sheet); Additional topics A–E are 4–8
 * (Addenda A–E) and Additional P is 9 (Addendum P, What JEE Actually Asks).
 * No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, theorems and its Cheat sheet. Common mistakes: its Common
 * pitfalls and its MCQ traps (A–E, which print neither: the slips their
 * worked examples and practice answers warn about; P: its traps). Exam
 * shortcuts: its Pro-Tips, Speed Traps and worked examples. `say`: the
 * book's own memory aids, word for word without their quotation marks, the
 * "Mnemonic:" label or the gloss after them (labels that are part of the aid,
 * "Table trick:", "Recognise it:", "Sanity check:", are kept). Topics 01–03
 * print two aids each and Topic 04 three; all are used, the first two of
 * each topic as its memory lines, and Topic 04's "Sanity check" on a later
 * `say`, which is not shown: nine in all, eight of them memory lines. A–E
 * and P print no aids, so each has two of the book's own one-line sentences
 * (A: "This is inclusion–exclusion: count singly, correct the double-counted
 * overlaps, restore the triple-counted core." and "Individual probabilities
 * are often decoys.", cut and capitalised; B: "Mutual independence means all
 * four hold; pairwise independence means only the first three are
 * guaranteed." and "The failure mode is invisible to intuition.", cut and
 * capitalised; C: "Evidence compounds, and base rates never stop
 * mattering.", cut and capitalised, and "Build the altered composition first;
 * everything else is stock Bayes."; D: "Linearity needs no independence.",
 * cut, and "Squares erase signs.", cut and capitalised; E: "The expected
 * waiting time is the reciprocal of the success probability.", cut, and "The
 * first roller holds a real edge.", cut; P: "Posteriors must sum to 1." and
 * "Always ask first whether the trials are independent with a constant
 * p."): twelve more, all memory lines.
 *
 * Where the book's wording could be read too widely, the point states the
 * exact version: "a negative variance means a dropped μ² square" (Cheat
 * sheet, Pro-Tip) is one slip among others, so the point says only that a
 * negative variance signals an arithmetic slip, as the topic's Limiting
 * conditions do; the mode is ⌊(n + 1)p⌋ when (n + 1)p is not an integer,
 * and when it is an integer both (n + 1)p − 1 and (n + 1)p are modes (the
 * book's "integer(s)"); a set of causes whose probabilities add to 1 is a
 * partition only if they are also disjoint. The Exam relevance claims, the
 * past-paper distribution and its counts, the CBSE, NCERT and syllabus
 * remarks, the difficulty tags and the paper names in P are left out.
 *
 * Markup is the chapter's own: <i> for every variable, event and constant
 * letter, P(E | F) with no-break spaces round the bar, ⁿCᵣ written
 * <sup>n</sup>C<sub>r</sub> as Topic 04 writes it, Var upright, − (U+2212)
 * for minus. Every fraction is stacked, <frac><num>…</num><den>…</den></frac>,
 * and never a fraction inside a fraction; no em dashes; and always a space
 * after "<", so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = '\u00a0';
/** A word joiner: no break here, and no space. */
const WJ = '\u2060';
const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sup = (base: string, s: string) => `${base}<sup>${s}</sup>`;
const sq = (s: string) => sup(s, '2');
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;

const a = I('a');
const b = I('b');
const i = I('i');
const j = I('j');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const Ev = I('E');
const F = I('F');
const G = I('G');
const P = I('P');
const X = I('X');
const Y = I('Y');
const MU = I('μ');
const SG = I('σ');

const pr = (s: string) => `${P}(${s})`;
const cp = (u: string, v: string) => `${P}(${u}${NB}|${NB}${v})`;
const cap = (...xs: string[]) => xs.join(`${NB}∩${NB}`);
const cup = (...xs: string[]) => xs.join(`${NB}∪${NB}`);
const EX = (s: string) => `${Ev}(${s})`;
const VAR = (s: string) => `Var(${s})`;
const NC = (top: string, bot: string) => `<sup>${top}</sup>${C}<sub>${bot}</sub>`;
const PX = (v: string) => pr(rel(X, '=', v));
const fp = (t: string, bt: string, e: string) => `(${fr(t, bt)})<sup>${e}</sup>`;

const AP = `${A}′`;
const BP = `${B}′`;
const EP = `${Ev}′`;
const Ei = sb(Ev, i);
const Ej = sb(Ev, j);
const A1 = sb(A, '1');
const A2 = sb(A, '2');
const An = sb(A, n);
const S1 = sb(I('S'), '1');
const S2 = sb(I('S'), '2');
const S3 = sb(I('S'), '3');
const SUMJ = `∑<sub>${j}</sub>`;
const XI = sb(x, i);
const PI = sb(p, i);
const XI2 = `${x}<sub>${i}</sub>${WJ}<sup>2</sup>`;
const X2 = sq(X);
const EXX = EX(X);
const EX2 = EX(X2);
const VX = VAR(X);
const EX_SQ = `[${EXX}]<sup>2</sup>`;
const NP = I('np');
const NPQ = I('npq');
const N1P = `(${n} + 1)${p}`;
const PRQ = `${sup(p, r)}${sup(q, `${n}−${r}`)}`;
const PNRQR = `${sup(p, `${n}−${r}`)}${sup(q, r)}`;
const HALF = fr('1', '2');
const QUARTER = fr('1', '4');
const EIGHTH = fr('1', '8');
const SIXTH = fr('1', '6');

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Conditional Probability & Independence ──
  // pp. 814–815, 817, 821
  {
    topic: 0,
    kind: 'remember',
    q: `What is ${cp(Ev, F)}, and what must hold?`,
    a: `${cp(Ev, F)} = ${fr(pr(cap(Ev, F)), pr(F))}, with ${pr(F)} > 0: shrink the sample space to ${F}, then count the part of ${Ev} inside it`,
    why: `Two dice, ${F}: the first roll is above 3 (18 outcomes), ${Ev}: the sum is 9. Only (4, 5), (5, 4), (6, 3) are in both, so ${fr('3', '18')} = ${SIXTH}.`,
    say: 'Given shrinks, Independent ignores, Exclusive forbids.',
  },
  // pp. 815–817, 821
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the multiplication theorem and the chain rule for three events?',
    a: `${pr(cap(Ev, F))} = ${pr(F)}${NB}${cp(Ev, F)} = ${pr(Ev)}${NB}${cp(F, Ev)}, and ${pr(cap(Ev, F, G))} = ${pr(Ev)}${NB}${cp(F, Ev)}${NB}${cp(G, cap(Ev, F))}`,
    why: `7 boys and 5 girls, three picked without replacement, all girls: ${fr('5', '12')} × ${fr('4', '11')} × ${fr('3', '10')} = ${fr('1', '22')}.`,
    say: null,
  },
  // pp. 815–816, 820–821
  {
    topic: 0,
    kind: 'remember',
    q: `When are ${Ev} and ${F} independent?`,
    a: `When ${pr(cap(Ev, F))} = ${pr(Ev)}${pr(F)}, or equally ${cp(Ev, F)} = ${pr(Ev)}. The product form is the working definition: it never divides, so it holds even when a probability is 0`,
    why: `For three events the pairs are not enough: ${pr(cap(A, B, C))} = ${pr(A)}${pr(B)}${pr(C)} must hold too.`,
    say: null,
  },
  // pp. 816–818, 821
  {
    topic: 0,
    kind: 'remember',
    q: `If ${A} and ${B} are independent, which pairs of complements are?`,
    a: `All three: ${A} and ${BP}, ${AP} and ${B}, ${AP} and ${BP}. ${pr(cap(A, BP))} = ${pr(A)} − ${pr(A)}${pr(B)} = ${pr(A)}${pr(BP)}`,
    why: `So “neither” factorises: ${pr(cap(AP, BP))} = (1 − ${pr(A)})(1 − ${pr(B)}).`,
    say: null,
  },
  // pp. 815, 817–818, 821
  {
    topic: 0,
    kind: 'remember',
    q: `The probability that at least one of ${n} independent events occurs?`,
    a: `1 − (1 − ${pr(A1)})(1 − ${pr(A2)})…(1 − ${pr(An)}): the complement of “none occurs”, which factorises. Never expand the union`,
    why: `Three independent events, each ${QUARTER}: 1 − ${fp('3', '4', '3')} = ${fr('37', '64')}.`,
    say: null,
  },
  // pp. 815, 817, 820
  {
    topic: 0,
    kind: 'mixup',
    q: 'Can two events with positive probabilities be both mutually exclusive and independent?',
    a: `No: mutually exclusive means ${pr(cap(A, B))} = 0, independent means ${pr(cap(A, B))} = ${pr(A)}${pr(B)} > 0. Mutually exclusive events are strongly dependent: one forbids the other`,
    why: `Get ${pr(cap(A, B))} = ${pr(A)} + ${pr(B)} − ${pr(cup(A, B))} first: 0.5 + 0.4 − 0.7 = 0.2 = 0.5 × 0.4, so independent only.`,
    say: null,
  },
  // pp. 819–821
  {
    topic: 0,
    kind: 'mistake',
    q: `Independent ${A}, ${B} with ${rel(pr(A), '=', p)}, ${rel(pr(B), '=', q)}: is ${P}(exactly one) = ${p} + ${q} − ${I('pq')}?`,
    a: `No: that is ${pr(cup(A, B))}, at least one. Exactly one = ${p}(1 − ${q}) + (1 − ${p})${q} = ${p} + ${q} − 2${I('pq')}`,
    why: `“Exactly one” excludes the overlap from both directions.`,
    say: `The 2 × ${I('pq')} trap: “exactly one” subtracts the overlap twice; “at least one” subtracts it once.`,
  },
  // pp. 818, 821
  {
    topic: 0,
    kind: 'shortcut',
    q: `${A}, ${B} independent; ${P}(both) = ${EIGHTH}, ${P}(neither) = ${fr('3', '8')}. ${pr(A)}, ${pr(B)}?`,
    a: `${HALF} and ${QUARTER}: with ${a} = ${pr(A)}, ${b} = ${pr(B)}, ${I('ab')} = ${EIGHTH} and (1 − ${a})(1 − ${b}) = ${fr('3', '8')} give ${a} + ${b} = ${fr('3', '4')}: the roots of 8${sq(I('t'))} − 6${I('t')} + 1 = 0`,
    why: `Then ${P}(exactly one) = ${a} + ${b} − 2${I('ab')} = ${HALF}, and ${EIGHTH} + ${HALF} + ${fr('3', '8')} = 1 checks.`,
    say: null,
  },

  // ── Topic 02 · Total Probability & Bayes’ Theorem ──
  // pp. 823–824, 826, 829
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the theorem of total probability?',
    a: `For a partition ${sb(Ev, '1')}, …, ${sb(Ev, n)} of the sample space (disjoint, exhaustive, each ${pr(Ej)} > 0), ${pr(A)} = ${SUMJ}${NB}${pr(Ej)}${NB}${cp(A, Ej)}: each cause’s likelihood weighted by its prior, then added`,
    why: `Bags of 4 red, 6 blue and 7 red, 3 blue, one chosen at random: ${P}(red) = ${HALF} · ${fr('4', '10')} + ${HALF} · ${fr('7', '10')} = ${fr('11', '20')}.`,
    say: 'Total adds the causes; Bayes blames one cause.',
  },
  // pp. 823–824, 826, 829
  {
    topic: 1,
    kind: 'remember',
    q: 'What is Bayes’ theorem?',
    a: `${cp(Ei, A)} = ${fr(`${pr(Ei)}${NB}${cp(A, Ei)}`, `${SUMJ}${NB}${pr(Ej)}${NB}${cp(A, Ej)}`)}: posterior = prior × likelihood ÷ the total probability of the evidence`,
    why: `The same bags, a red ball drawn: ${P}(bag I | red) = ${fr('4', '20')} · ${fr('20', '11')} = ${fr('4', '11')}.`,
    say: null,
  },
  // pp. 822, 824, 826
  {
    topic: 1,
    kind: 'remember',
    q: 'Why is Bayes’ theorem called inverse probability?',
    a: `Total probability reasons forwards, cause → effect. Bayes runs backwards, from the observed effect to the hidden cause: it turns ${cp(A, Ei)} into ${cp(Ei, A)}`,
    why: `On the tree, each path to ${A} has probability ${pr(Ei)}${NB}${cp(A, Ei)}; ${pr(A)} is their sum, and a posterior is one path over that sum.`,
    say: null,
  },
  // p. 823
  {
    topic: 1,
    kind: 'remember',
    q: `Bayes with only two causes, ${Ev} and ${EP}?`,
    a: `${cp(Ev, A)} = ${fr(`${pr(Ev)}${NB}${cp(A, Ev)}`, `${pr(Ev)}${NB}${cp(A, Ev)} + ${pr(EP)}${NB}${cp(A, EP)}`)}: the disease-test and single-bag template`,
    why: `2% carriers, 95% detected, 10% of non-carriers flagged: ${fr('0.019', '0.019 + 0.098')} ≈ 0.162 for a positive.`,
    say: null,
  },
  // pp. 822–823, 828–829
  {
    topic: 1,
    kind: 'remember',
    q: 'What must the posteriors over a partition add up to?',
    a: `1: ${rel(`∑<sub>${i}</sub>${NB}${cp(Ei, A)}`, '=', '1')}. A free check, and a way to the last posterior: 0.5 and 0.3 leave 0.2`,
    why: 'Posteriors that do not sum to 1 mean a non-partition or a wrong denominator: re-examine the cases.',
    say: null,
  },
  // pp. 828–829
  {
    topic: 1,
    kind: 'mixup',
    q: 'Is the denominator of Bayes’ theorem 1, or one likelihood?',
    a: `Neither: it is ${pr(A)}, the full sum ${SUMJ}${NB}${pr(Ej)}${NB}${cp(A, Ej)}. The posteriors sum to 1; the denominator is generally less than 1`,
    why: `Dividing by a single ${pr(Ej)}${NB}${cp(A, Ej)} skips the other causes.`,
    say: null,
  },
  // pp. 828–829
  {
    topic: 1,
    kind: 'mistake',
    q: 'A disease has 1% prevalence; a test is 99% sensitive and 99% specific. A positive patient has it with probability 99%?',
    a: `No, 50%: ${P}(+) = 0.0099 + 0.0099 = 0.0198, and 0.0099 ÷ 0.0198 = 0.5. Quoting the sensitivity is base-rate neglect`,
    why: 'The test’s accuracy is a likelihood, not the probability that you have the disease.',
    say: null,
  },
  // pp. 827, 829
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Lines making 60%, 25%, 15% of output have defect rates 2%, 4%, 8%. Which line most likely made a defective item?',
    a: `${sb(I('L'), '1')} and ${sb(I('L'), '3')}, tied at ${fr('6', '17')} each (${sb(I('L'), '2')}: ${fr('5', '17')}): the products 0.012, 0.010, 0.012 over their sum 0.034`,
    why: 'One row per cause: prior, likelihood, product. The products’ sum is the denominator, and the posteriors must add to 1.',
    say: `Table trick: prior × likelihood per row ⇒ column sum = ${pr(A)} ⇒ each posterior = row ÷ sum.`,
  },

  // ── Topic 03 · Random Variables & Distributions ──
  // pp. 830–831, 834, 837
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a random variable, and when is a probability distribution valid?',
    a: `A real-valued function ${X}${NB}∶${NB}${I('S')} → ℝ on the sample space. A table of values ${XI} and probabilities ${PI} is valid if and only if every ${PI} ≥ 0 and ∑${PI} = 1`,
    why: `Heads in three tosses: 0, 1, 2, 3 with ${EIGHTH}, ${fr('3', '8')}, ${fr('3', '8')}, ${EIGHTH}, which add to 1.`,
    say: null,
  },
  // pp. 830–831, 837
  {
    topic: 2,
    kind: 'remember',
    q: `What is the mean of ${X}?`,
    a: `${MU} = ${EXX} = ∑${XI}${PI}: a probability-weighted average, the balance point. It need not be a value ${X} takes`,
    why: `90% of tickets win ₹10 and 10% win ₹100: 0.9(10) + 0.1(100) = ₹19, not the plain average ₹55.`,
    say: 'Weight then sum for the mean; square-mean-out for the variance.',
  },
  // pp. 831, 833–834, 837
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the variance and the standard deviation?',
    a: `${sq(SG)} = ${VX} = ${Ev}[(${X} − ${MU})<sup>2</sup>] = ${EX2} − ${EX_SQ}, with ${EX2} = ∑${XI2}${PI}; ${SG} = √${VX}`,
    why: `${X}${NB}∶${NB}{1, 2, 3} with 0.2, 0.5, 0.3: ${MU} = 2.1, ${EX2} = 4.9, so the variance is 4.9 − 4.41 = 0.49 and ${SG} = 0.7.`,
    say: null,
  },
  // pp. 831, 834–835, 837
  {
    topic: 2,
    kind: 'remember',
    q: `What are ${EX(`${a}${X} + ${b}`)} and ${VAR(`${a}${X} + ${b}`)}?`,
    a: `${a}${NB}${EXX} + ${b} and ${sq(a)}${NB}${VX}: the shift ${b} moves the mean but never the spread, and the scale ${a} enters the variance squared`,
    why: `${EXX} = 3, ${VX} = 1, ${Y} = 2${X} − 1: ${EX(Y)} = 5 and ${VAR(Y)} = 4, with no new table.`,
    say: null,
  },
  // pp. 833, 835, 837
  {
    topic: 2,
    kind: 'remember',
    q: 'How is an unknown constant in a distribution found?',
    a: `Impose ∑${PI} = 1 and solve; then check every probability lies in [0, 1], rejecting a value that makes one negative`,
    why: `${PX(x)} = ${k}${x} for ${x} = 1, 2, 3, 4: 10${k} = 1, so ${k} = ${fr('1', '10')}.`,
    say: null,
  },
  // pp. 836–837
  {
    topic: 2,
    kind: 'mixup',
    q: `${EXX} = 2 and ${EX2} = 6. Is the standard deviation 2?`,
    a: `No, √2: 2 = 6 − 4 is the variance, and the standard deviation is its square root`,
    why: `${SG} has the units of ${X}; ${sq(SG)} has squared units.`,
    say: null,
  },
  // pp. 831, 836–837
  {
    topic: 2,
    kind: 'mistake',
    q: `Is ${VX} = ${EX2} − ${EXX}?`,
    a: `No: the subtracted term is the mean squared, ${EX2} − ${EX_SQ}`,
    why: 'A variance is never negative: a negative one signals an arithmetic slip.',
    say: null,
  },
  // pp. 833, 837
  {
    topic: 2,
    kind: 'shortcut',
    q: 'The fastest layout for a mean and a variance?',
    a: `One table with columns ${XI}, ${PI}, ${XI}${PI}, ${XI2}${PI}: the third column sums to ${EXX}, the fourth to ${EX2}, then ${VX} = ${EX2} − ${EX_SQ} in one line`,
    why: `${X}${NB}∶${NB}{2, 4, 6} with 0.5, 0.3, 0.2: sums 3.4 and 14.0, so the variance is 14.0 − 11.56 = 2.44.`,
    say: `Table trick: columns ${XI} ∣ ${PI} ∣ ${XI}${PI} ∣ ${XI2}${PI}: third column sum = ${EXX}, fourth column sum = ${EX2}, and the ${PI} column must total 1 as a built-in validity check.`,
  },

  // ── Topic 04 · Bernoulli Trials & Binomial Distribution ──
  // pp. 839–841, 844
  {
    topic: 3,
    kind: 'remember',
    q: `${PX(r)} for ${X} ∼ ${I('B')}(${n},${NB}${p})?`,
    a: `${NC(n, r)}${NB}${PRQ}, ${r} = 0, 1, …, ${n}, ${q} = 1 − ${p}: ${NC(n, r)} places the successes, ${sup(p, r)} makes them happen, ${sup(q, `${n}−${r}`)} the failures`,
    why: `Exactly 2 sixes in 5 rolls: ${NC('5', '2')}${fp('1', '6', '2')}${fp('5', '6', '3')} = ${fr('625', '3888')}.`,
    say: `Choose the successes, power up ${p}; power down with ${q} for the rest.`,
  },
  // pp. 838–839, 843–844
  {
    topic: 3,
    kind: 'remember',
    q: 'When does a count of successes follow the binomial distribution?',
    a: `In Bernoulli trials: a fixed, finite number ${n}; independent trials; two outcomes each; the same success probability ${p} on every trial`,
    why: `Drawing without replacement changes ${p} and makes the draws dependent: not binomial. With replacement, it is.`,
    say: `Recognise it: fixed number of identical, independent yes/no trials with the same ${p}; if drawing without replacement, it is not binomial.`,
  },
  // pp. 838–839, 841–842, 844
  {
    topic: 3,
    kind: 'remember',
    q: 'The mean, variance and standard deviation of a binomial distribution?',
    a: `${NP}, ${NPQ} and √(${NPQ}). The variance is always less than the mean, since ${q} < 1`,
    why: `10 items, each defective with probability 0.05: mean 0.5, variance 0.475.`,
    say: null,
  },
  // pp. 839, 842, 844
  {
    topic: 3,
    kind: 'remember',
    q: 'The most probable number of successes, the mode?',
    a: `An integer ${r} with ${N1P} − 1 ≤ ${r} ≤ ${N1P}: ⌊${N1P}⌋ when ${N1P} is not an integer; when it is, both ${N1P} − 1 and ${N1P}`,
    why: `${rel(n, '=', '6')}, ${rel(p, '=', '0.8')}: ${N1P} = 5.6, so the mode is 5, though the mean is 4.8.`,
    say: null,
  },
  // pp. 839–840, 844
  {
    topic: 3,
    kind: 'remember',
    q: 'Why do the binomial probabilities add up to 1?',
    a: `They are the ${n} + 1 terms of (${q} + ${p})<sup>${n}</sup> = 1<sup>${n}</sup> = 1: hence the name`,
    why: `The distribution is symmetric exactly when ${rel(p, '=', HALF)}; ${p} and 1 − ${p} give mirror images.`,
    say: `Sanity check: probabilities are terms of (${q} + ${p})<sup>${n}</sup>, so they must sum to 1; and the peak (mode) sits near the mean ${NP}.`,
  },
  // pp. 840, 842–843
  {
    topic: 3,
    kind: 'mixup',
    q: `Is ${PX(r)} = ${NC(n, r)}${NB}${PNRQR}?`,
    a: `No: the exponents are swapped. The successes carry ${p} to the power ${r}; the failures carry ${q} to the power ${n} − ${r}`,
    why: 'Name the success explicitly before writing anything.',
    say: null,
  },
  // pp. 842–843
  {
    topic: 3,
    kind: 'mistake',
    q: `A binomial variable has mean 4 and variance 5. Its ${n} and ${p}?`,
    a: `None: ${NPQ} < ${NP} always, since ${q} < 1. A “binomial” with variance above the mean is inconsistent or not binomial`,
    why: `Variance equal to the mean would need ${rel(q, '=', '1')}, that is ${rel(p, '=', '0')}.`,
    say: null,
  },
  // pp. 841, 843–844
  {
    topic: 3,
    kind: 'shortcut',
    q: `A binomial variable has mean 4 and variance 2. Its ${n} and ${p}?`,
    a: `Divide first: ${q} = ${fr('2', '4')} = ${HALF}, so ${rel(p, '=', HALF)} and ${rel(n, '=', fr('4', p))} = 8`,
    why: `And “at least one” is one line: ${P}(${rel(X, '≥', '1')}) = 1 − ${sup(q, n)}, never a sum of ${n} terms.`,
    say: null,
  },

  // ── Additional A · Three Events: Unions, Exactly-k, and Inclusion–Exclusion ──
  // pp. 849–850
  {
    topic: 4,
    kind: 'remember',
    q: `What is ${pr(cup(A, B, C))}?`,
    a: `${S1} − ${S2} + ${S3}: ${S1} the sum of the three probabilities, ${S2} the sum of the three pairwise overlaps, ${S3} = ${pr(cap(A, B, C))}`,
    why: 'It is the two-event addition law applied twice.',
    say: 'This is inclusion–exclusion: count singly, correct the double-counted overlaps, restore the triple-counted core.',
  },
  // pp. 850–851
  {
    topic: 4,
    kind: 'remember',
    q: `${P}(exactly one), ${P}(exactly two) and ${P}(none) for three events?`,
    a: `Exactly one = ${S1} − 2${S2} + 3${S3}; exactly two = ${S2} − 3${S3}; none = 1 − ${S1} + ${S2} − ${S3}`,
    why: 'Check: exactly one + exactly two + all three + none = 1.',
    say: null,
  },
  // pp. 850, 852
  {
    topic: 4,
    kind: 'mixup',
    q: `Is ${P}(exactly two) the same as ${P}(at least two)?`,
    a: `No: at least two = ${S2} − 2${S3}, exactly two = ${S2} − 3${S3}. Exactly two is at least two minus the all-three case`,
    why: `An outcome in all three events is counted 3 times in ${S2}, once in ${S3}.`,
    say: null,
  },
  // p. 850
  {
    topic: 4,
    kind: 'mistake',
    q: `Is ${P}(exactly one) = ${S1} − 2${S2} + ${S3}?`,
    a: `No: + 3${S3}. An outcome in all three is tallied 3 times in ${S1} and 3 in ${S2}, so ${S1} − 2${S2} gives it 3 − 6 = −3, and 3${S3} brings it to 0`,
    why: `The four classes must add to 1: a wrong sign or coefficient on ${S3} shows up there.`,
    say: null,
  },
  // pp. 851–852
  {
    topic: 4,
    kind: 'shortcut',
    q: `${P}(at least one) = ${fr('3', '4')}, ${P}(exactly one) = ${fr('11', '24')}, ${P}(exactly two) = ${QUARTER}. ${P}(all three)?`,
    a: `${fr('3', '4')} − ${fr('11', '24')} − ${QUARTER} = ${fr('1', '24')}: “at least one” is exactly one, exactly two or all three`,
    why: `No single ${pr(A)} is needed; ${P}(none) = 1 − ${fr('3', '4')} = ${QUARTER}.`,
    say: 'Individual probabilities are often decoys.',
  },

  // ── Additional B · Pairwise but Not Mutual Independence ──
  // p. 853
  {
    topic: 5,
    kind: 'remember',
    q: `What does mutual independence of ${A}, ${B}, ${C} take?`,
    a: `All four tests: the three pair products ${pr(cap(A, B))} = ${pr(A)}${pr(B)} and so on, and ${pr(cap(A, B, C))} = ${pr(A)}${pr(B)}${pr(C)}`,
    why: 'Pairwise independence guarantees only the first three; constructed examples fail the fourth.',
    say: 'Mutual independence means all four hold; pairwise independence means only the first three are guaranteed.',
  },
  // pp. 853–854
  {
    topic: 5,
    kind: 'remember',
    q: `Two fair coins: ${A} first is heads, ${B} second is heads, ${C} they disagree. Mutually independent?`,
    a: `No. Each pair meets in one outcome, ${QUARTER} = ${HALF} · ${HALF}, so they are pairwise independent; but ${cap(A, B, C)} = ∅, while ${pr(A)}${pr(B)}${pr(C)} = ${EIGHTH}`,
    why: 'The pair tests never reach the triple overlap, a separate cell that can be emptied.',
    say: 'The failure mode is invisible to intuition.',
  },
  // p. 855
  {
    topic: 5,
    kind: 'mixup',
    q: 'Can three mutually exclusive events with positive probabilities be pairwise independent?',
    a: `No: exclusivity forces ${rel(pr(cap(A, B)), '=', '0')}, while independence demands ${pr(A)}${pr(B)} > 0`,
    why: null,
    say: null,
  },
  // pp. 854–855
  {
    topic: 5,
    kind: 'mistake',
    q: `Independent ${A}, ${B}, ${C}, each with probability ${p} in (0, 1); exactly one occurs with probability ${fr('48', '125')}. Is ${p} = ${fr('1', '5')} the answer?`,
    a: `Not the only one: 3${p}(1 − ${p})<sup>2</sup> = ${fr('48', '125')} also has ${rel(p, '=', fr('45 − √425', '50'))} ≈ 0.488 in (0, 1). Report both`,
    why: `3${p}(1 − ${p})<sup>2</sup> peaks at ${rel(p, '=', fr('1', '3'))}, so a level below the peak is met twice.`,
    say: null,
  },
  // pp. 854–855
  {
    topic: 5,
    kind: 'shortcut',
    q: `Three independent events, each with probability ${p}: ${P}(exactly one), ${P}(exactly two)?`,
    a: `3${p}(1 − ${p})<sup>2</sup> and 3${sq(p)}(1 − ${p}): three disjoint patterns, each a product`,
    why: `${rel(p, '=', fr('1', '5'))}: ${fr('48', '125')} and ${fr('12', '125')}; with ${fr('1', '125')} and ${fr('64', '125')} they close to 1.`,
    say: null,
  },

  // ── Additional C · Chained Bayes: Staged Evidence and Transfer Experiments ──
  // pp. 856–857
  {
    topic: 6,
    kind: 'remember',
    q: 'How is a second piece of evidence handled?',
    a: `Today’s posterior becomes tomorrow’s prior: run Bayes again with the new likelihoods. It equals one Bayes on ${cap(A1, A2)}, when the two are independent given the cause`,
    why: `1% prior, detection 0.9, false positives 0.05: one positive gives ${fr('2', '13')}, two give ${fr('36', '47')} ≈ 0.766, by either route.`,
    say: 'Evidence compounds, and base rates never stop mattering.',
  },
  // pp. 856–857
  {
    topic: 6,
    kind: 'remember',
    q: 'In a transfer problem, what are the causes and the likelihoods?',
    a: 'The cause is the transferred ball’s colour, with its prior from the first bag; the likelihood is the draw probability from the second bag’s altered composition',
    why: `Bag I 3 red, 4 black; bag II 5 red, 3 black; one ball moved, then red drawn: ${P}(black moved) = ${fr('20', '63')} · ${fr('63', '38')} = ${fr('10', '19')}.`,
    say: 'Build the altered composition first; everything else is stock Bayes.',
  },
  // p. 858
  {
    topic: 6,
    kind: 'mixup',
    q: `Urns ${A} (2 red, 3 blue) and ${B} (4 red, 1 blue); two reds drawn from one, without replacement. Is the likelihood from ${A} ${fp('2', '5', '2')}?`,
    a: `No: ${fr('2', '5')} · ${QUARTER} = ${fr('1', '10')}, since the first red is not replaced; from ${B}, ${fr('4', '5')} · ${fr('3', '4')} = ${fr('3', '5')}, and ${P}(${B}) becomes ${fr('6', '7')}`,
    why: 'Without replacement, the second likelihood comes from the depleted urn.',
    say: null,
  },
  // pp. 857–858
  {
    topic: 6,
    kind: 'mistake',
    q: `In that transfer, red is drawn. Should ${P}(black moved) rise above its prior ${fr('4', '7')}?`,
    a: `No: it falls slightly, to ${fr('10', '19')}. A black ball dilutes bag II’s red, so a red draw is mild evidence against it`,
    why: `An answer above ${fr('4', '7')} signals a reversed likelihood.`,
    say: null,
  },
  // p. 858
  {
    topic: 6,
    kind: 'shortcut',
    q: `A 1% prior, detection 0.9, false positives 0.05: the chance of the condition after two positive readings, fast?`,
    a: `Work in odds: the prior odds ${fr('1', '99')} are multiplied by the likelihood ratio ${fr('0.9', '0.05')} = 18 per positive, giving ${fr('324', '99')}, so ${cp(D, '++')} = ${fr('324', '423')} = ${fr('36', '47')}`,
    why: 'Reaching 0.99 would need posterior odds of 99.',
    say: null,
  },

  // ── Additional D · Expectation Beyond aX + b ──
  // pp. 859–860
  {
    topic: 7,
    kind: 'remember',
    q: `What is ${EX(`${X} + ${Y}`)}?`,
    a: `${EXX} + ${EX(Y)}, for any two random variables: no independence needed`,
    why: `${EX(`2${X} − 3${Y} + 1`)} = 2${EXX} − 3${EX(Y)} + 1.`,
    say: 'Linearity needs no independence.',
  },
  // pp. 859–860
  {
    topic: 7,
    kind: 'remember',
    q: `What are ${EX(I('XY'))} and ${VAR(`${X} ± ${Y}`)}?`,
    a: `For independent ${X}, ${Y}: ${EXX}${EX(Y)} and ${VX} + ${VAR(Y)}. In general ${VAR(`${X} + ${Y}`)} = ${VX} + ${VAR(Y)} + 2[${EX(I('XY'))} − ${sb(MU, X)}${sb(MU, Y)}], the bracket being the covariance`,
    why: `Independent, variances 2 and 5: ${VAR(`2${X} − 3${Y} + 1`)} = 4 · 2 + 9 · 5 = 53.`,
    say: 'Squares erase signs.',
  },
  // p. 861
  {
    topic: 7,
    kind: 'mixup',
    q: `Independent ${X}, ${Y}: is ${VAR(`${X} − ${Y}`)} = ${VX} − ${VAR(Y)}?`,
    a: `No: ${VX} + ${VAR(Y)}, since ${VAR(`−${Y}`)} = (−1)<sup>2</sup>${VAR(Y)}`,
    why: 'With unit variances, the difference spreads exactly as much as the sum: 2.',
    say: null,
  },
  // pp. 861–862
  {
    topic: 7,
    kind: 'mistake',
    q: `Independent ${X}, ${Y}: is ${VAR(I('XY'))} = ${VX}${NB}${VAR(Y)}?`,
    a: `No: ${VAR(I('XY'))} = ${EX(X2)}${EX(sq(Y))} − [${EXX}${EX(Y)}]<sup>2</sup>`,
    why: `Means 2 and 2, variances 1 and 4: 5 · 8 − 16 = 24, not 4.`,
    say: null,
  },
  // pp. 859–860
  {
    topic: 7,
    kind: 'shortcut',
    q: `${n} letters put into their ${n} envelopes at random: the expected number in the right envelope?`,
    a: `1, for every ${n}: ${X} = ${sb(I('I'), '1')} + ⋯ + ${sb(I('I'), n)}, each ${EX(sb(I('I'), k))} = ${fr('1', n)}`,
    why: `An indicator has ${EX(sb(I('I'), A))} = ${pr(A)}: a count’s mean is a sum of probabilities, no table needed.`,
    say: null,
  },

  // ── Additional E · Waiting Times and Turn-Taking ──
  // pp. 862–863
  {
    topic: 8,
    kind: 'remember',
    q: `Trials repeated until the first success, ${X} its trial number: ${PX(k)}, ${EXX}, ${VX}?`,
    a: `${PX(k)} = ${sup(q, `${k}−1`)}${p}, ${k} = 1, 2, 3, …; ${EXX} = ${fr('1', p)}; ${VX} = ${fr(q, sq(p))}`,
    why: 'A fair die rolled until a six: 6 rolls on average.',
    say: 'The expected waiting time is the reciprocal of the success probability.',
  },
  // p. 863
  {
    topic: 8,
    kind: 'remember',
    q: `${A} and ${B} alternate, ${A} first, succeeding with probabilities ${a} and ${b}; the first success wins. ${P}(${A} wins)?`,
    a: `${fr(a, `1 − (1 − ${a})(1 − ${b})`)}, and ${P}(${B} wins) = ${fr(`(1 − ${a})${b}`, `1 − (1 − ${a})(1 − ${b})`)}`,
    why: `(1 − ${a})(1 − ${b}), one full round of failures, is the ratio of the geometric series.`,
    say: 'The first roller holds a real edge.',
  },
  // p. 862
  {
    topic: 8,
    kind: 'mixup',
    q: 'Is the number of trials until the first success binomial?',
    a: `No: there is no fixed ${n}, since the trials are unbounded. It is a geometric-series question`,
    why: `The probabilities still sum to 1: ${fr(p, `1 − ${q}`)} = 1.`,
    say: null,
  },
  // p. 864
  {
    topic: 8,
    kind: 'mistake',
    q: `${A} and ${B} take turns rolling a fair die, ${A} first; the first six wins. Even chances?`,
    a: `No: ${A} wins with ${fr('6', '11')}, ${B} with ${fr('5', '11')}. ${A}’s numerator carries no failure factor`,
    why: `${SIXTH} · ${fr('36', '36 − 25')} = ${fr('6', '11')}.`,
    say: null,
  },
  // p. 864
  {
    topic: 8,
    kind: 'shortcut',
    q: `The probability that the first success comes after trial ${k}?`,
    a: `${pr(rel(X, '>', k))} = ${sup(q, k)}: the first ${k} trials all fail`,
    why: `First six after the 3rd roll: ${fp('5', '6', '3')} = ${fr('125', '216')}, no sum needed.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // pp. 866–867
  {
    topic: 9,
    kind: 'shortcut',
    q: `Plants ${sb(I('T'), '1')}, ${sb(I('T'), '2')} make 20%, 80%; 7% of output is defective, and ${sb(I('T'), '1')}’s defect rate is 10 times ${sb(I('T'), '2')}’s. A sound item came from ${sb(I('T'), '2')} with probability?`,
    a: `${fr('26', '31')}: 0.2(10${x}) + 0.8${x} = 0.07 gives ${x} = 0.025, so 0.8 × 0.975 = 0.78 over ${P}(sound) = 0.93`,
    why: 'An unknown likelihood comes from total probability first.',
    say: 'Posteriors must sum to 1.',
  },
  // pp. 867–868
  {
    topic: 9,
    kind: 'remember',
    q: `Two dice: ${sb(Ev, '1')} the first shows 4, ${sb(Ev, '2')} the second shows 2, ${sb(Ev, '3')} the sum is odd. Mutually independent?`,
    a: `No: each pair is independent, but all three together are impossible (the sum would be 6), and 0 ≠ ${SIXTH} · ${SIXTH} · ${HALF} = ${fr('1', '72')}`,
    why: null,
    say: null,
  },
  // pp. 868–869, 875
  {
    topic: 9,
    kind: 'shortcut',
    q: `Five machines, each out of service with probability ${QUARTER}; ${P}(at most two out) = ${fr(k, '512')}: ${k}?`,
    a: `459: ${fr('243 + 405 + 270', '1024')} = ${fr('459', '512')}, with ${X} ∼ ${I('B')}(5,${NB}${QUARTER})`,
    why: 'The machines are independent with a constant chance: binomial.',
    say: `Always ask first whether the trials are independent with a constant ${p}.`,
  },
  // p. 871
  {
    topic: 9,
    kind: 'mistake',
    q: 'Causes whose probabilities add to 1: a partition?',
    a: 'Not necessarily: they must also be disjoint. A sum other than 1 rules a partition out; a sum of 1 alone does not prove one',
    why: 'Total probability fails on a non-partition.',
    say: null,
  },
  // pp. 871–872
  {
    topic: 9,
    kind: 'mistake',
    q: 'Two dice; given the sum is a multiple of 4, the probability that a 4 appears?',
    a: `${fr('1', '9')}: of the 9 outcomes with sum 4, 8 or 12, only (4, 4) shows a 4. ${fr('11', '36')} ignores the condition`,
    why: 'The given information defines the problem: never revert to the unconditional probability.',
    say: null,
  },
];
