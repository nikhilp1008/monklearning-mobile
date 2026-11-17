/**
 * KEY POINTS for Mathematics Class 11, Chapter 14 (Probability).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 and Additional topics A–D each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the algebra of events, the complement pair, the
 * tree and the event counts, with two Don't mix ups and two Common mistakes;
 * Topic 02, the axioms, the valid-assignment test, the derived results and
 * the equally-likely theorem, with two Common mistakes; Topic 03, the counting
 * formula, groups, the complement, three-event addition, exactly one, odds and
 * empirical probability; Additional C, two Don't mix ups and two Common
 * mistakes; Additional D, three Common mistakes): 65 points in all. Memory
 * lines are a fifth, short section of their own, read rather than tested: the
 * first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the main chapter's Subtopics 01–03);
 * Additional topics A–D are 3–6 (A–B the supplement's Addenda 14.1–14.2, C–D
 * the Additional Topics part's Addenda 14.3–14.4). No point refers to another
 * topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, formulas, derivations and procedures, and its Cheat sheet.
 * Common mistakes: its Common pitfalls and its MCQ traps (A–D, which have no
 * MCQs: their Pitfalls, Speed Traps and warnings). Exam shortcuts: its
 * Pro-Tips, Speed tips and Speed Trap solutions, with a worked example or
 * practice answer. `say`: the book's own mnemonics, word for word without
 * their quotation marks and their glosses, from each cheat sheet's Memory aids
 * (Topics 01–03: ten, every one the book prints). A–D print no mnemonics (B's
 * and D's cheat sheets have empty Memory aids), so each has the book's own
 * one-line sentences instead (A: the pitfall "Fill the constrained position
 * first." and "Count, do not multiply probabilities."; B: "A bigger heap
 * cannot hold less sand." and the see-saw sentence "Every unit of probability
 * you push into the overlap comes straight out of the union."; C: "Pick
 * first, then place.", cut at its semicolon, and "Read the experiment, not the
 * objects."; D: "Intersections get counted, never multiplied." and "Know which
 * direction is the cheap one."): eighteen in all, fourteen of them memory
 * lines.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: {A, A′} "always a partition" (A ∩ A′ = φ and A ∪ A′ = S always
 * hold; a partition into two non-empty pieces needs A neither φ nor S); an
 * ordered two-stage outcome written in braces as a set ({H, 4}; it is the
 * ordered pair (H, 4)); "the only check is whether the value lies in [0, 1]"
 * (a valid assignment also needs the values to add to 1); "odds are ratios of
 * positive integers" (both numbers are positive only for an event neither
 * impossible nor sure); the complement turning a union into "a single easy
 * product or count" (a count: the chapter multiplies no probabilities);
 * Boole's "equality holds exactly when" the events are pairwise mutually
 * exclusive (stated one way: equality when they are); the Bonferroni floor
 * "negative" when P(A) + P(B) ≤ 1 (zero at equality); nCr(n − r)! counting
 * "at least r" (with multiplicity: an arrangement with s ≥ r correct is
 * counted sCr times); and the warning that quotes the "at least one" Pro-Tip
 * as 1 − (chance of none) to the number of trials (that wording is not the
 * Pro-Tip now printed, 1 − kⁿ over sⁿ, a count; the point states the product
 * form only as the independence formula it is). Topic 01 MCQ Q3's trap (c),
 * whose label ("removed only the empty event") does not fit its arithmetic
 * (16 − 4 removes the simple events), is stated as the arithmetic. The "n(S)
 * and n(A) are natural numbers" note (n(φ) = 0), the biased-coin practice
 * answer that multiplies probabilities, the Euclid remark, the Exam relevance
 * and exam-frequency claims, and the Class 12, NCERT, CBSE and syllabus
 * remarks are left out.
 *
 * Markup is the chapter's own: variables italic, the empty set φ (as the book
 * prints it), ⁿCᵣ and ⁿPᵣ as <sup>n</sup><i>C</i><sub>r</sub>, odds with ∶
 * (U+2236), subscripts as <sub>; − (U+2212) for minus; every fraction stacked,
 * <frac><num>…</num><den>…</den></frac>, and never a fraction inside a
 * numerator; no em dashes; and always a space after "<" (as the book prints
 * it), so it is never read as a tag. Exam-frequency claims would keep the
 * label "(the book's estimate from past papers, not official figures)"; none
 * of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const EMPTY = 'φ';
const A = I('A');
const B = I('B');
const C = I('C');
const E = I('E');
const H = I('H');
const S = I('S');
const X = I('X');
const a = I('a');
const b = I('b');
const c = I('c');
const e = I('e');
const k = I('k');
const m = I('m');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const s = I('s');
const AP = `${A}′`;
const BP = `${B}′`;
const EP = `${E}′`;
const pr = (t: string) => `<i>P</i>(${t})`;
const nn = (t: string) => `<i>n</i>(${t})`;
const AuB = `${A} ∪ ${B}`;
const AnB = `${A} ∩ ${B}`;
const BnC = `${B} ∩ ${C}`;
const CnA = `${C} ∩ ${A}`;
const AuBuC = `${A} ∪ ${B} ∪ ${C}`;
const AnBnC = `${A} ∩ ${B} ∩ ${C}`;
const PA = pr(A);
const PB = pr(B);
const SUMAB = `${PA} + ${PB}`;
const BONF = `${SUMAB} − 1`;
const ADD = `${pr(AuB)} = ${SUMAB} − ${pr(AnB)}`;
const NC = (x: string, y: string) => `<sup>${x}</sup><i>C</i><sub>${y}</sub>`;
const NP = (x: string, y: string) => `<sup>${x}</sup><i>P</i><sub>${y}</sub>`;
const nCr = NC(n, r);
const nPr = NP(n, r);
const nCk = NC(n, k);
const NE_NS = fr(nn(E), nn(S));
const NA_NS = fr(nn(A), nn(S));
const RATIO = (x: string, y: string) => `${x}${NB}∶${NB}${y}`;
const pair = (x: string, y: string) => `(${x},${NB}${y})`;
const As = (t: string) => `${A}<sub>${t}</sub>`;
const A1 = As('1');
const A2 = As('2');
const An = As(n);
const Dm = (t: string) => `<i>D</i><sub>${t}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const NEG = (x: string) => `(−1)<sup>${x}</sup>`;
const F = (x: string) => fr('1', `${x}!`);
const KNSN = fr(`${k}<sup><i>n</i></sup>`, `${s}<sup><i>n</i></sup>`);
const EINV = `1 − ${e}<sup>−1</sup>`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Sample Space and Events ──
  // pp. 1189, 1195
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a random experiment, and what are its sample space and its events?',
    a: `An action whose result cannot be predicted with certainty, but whose possible results can be listed in advance. Each result is an outcome (a sample point); the set of all outcomes is the sample space ${S}; an event is any subset of ${S}, ${E} ⊆ ${S}. ${E} occurs exactly when the actual outcome <i>ω</i> ∈ ${E}`,
    why: `One die: ${S} = {1, 2, 3, 4, 5, 6} and “even” = {2, 4, 6}; a roll of 4 makes it occur, a roll of 3 does not.`,
    say: null,
  },
  // pp. 1189, 1190, 1195
  {
    topic: 0,
    kind: 'remember',
    q: 'What are the impossible, sure, simple and compound events, and how does an event differ from an outcome?',
    a: `The impossible event is ${EMPTY} (no outcome makes it occur), the sure event is ${S} itself. A simple (elementary) event holds exactly one sample point, a compound event more than one; a sample space of ${n} outcomes has exactly ${n} simple events. An outcome is a single point of ${S}; an event is a set of points (one, many or none)`,
    why: '“The die shows a 7” is the impossible event; “the die shows a number from 1 to 6” is the sure event.',
    say: null,
  },
  // pp. 1190, 1195
  {
    topic: 0,
    kind: 'remember',
    q: 'How are “not A”, “A or B”, “A and B” and “A but not B” written as sets?',
    a: `${AP} = ${S} − ${A}, the complement; ${AuB}, “or”: at least one occurs; ${AnB}, “and”: both occur simultaneously; ${A} − ${B} = ${A} ∩ ${BP}, “${A} but not ${B}”`,
    why: `A spinner numbered 1 to 8, ${A} = multiples of 3 = {3, 6}, ${B} = greater than 5 = {6, 7, 8}: ${AnB} = {6} ≠ ${EMPTY}.`,
    say: null,
  },
  // pp. 1190, 1191, 1195
  {
    topic: 0,
    kind: 'remember',
    q: 'What do mutually exclusive, exhaustive and partition mean?',
    a: `Mutually exclusive (disjoint): ${AnB} = ${EMPTY}, the events cannot occur together. Exhaustive: ${E}<sub>1</sub> ∪ ⋯ ∪ ${E}<sub><i>n</i></sub> = ${S}, at least one must occur. A partition is both at once: ${E}<sub><i>i</i></sub> ∩ ${E}<sub><i>j</i></sub> = ${EMPTY} for <i>i</i>${NB}≠${NB}<i>j</i> and the union is ${S}, so exactly one occurs, always. Neither condition alone is enough`,
    why: '“The sum is 7” and “the sum is at least 11” on two dice are mutually exclusive: every pair in the first sums to 7, and the smallest sum in the second is 11.',
    say: 'Exclusive = Empty intersection.',
  },
  // pp. 1192, 1194, 1195
  {
    topic: 0,
    kind: 'remember',
    q: 'How do an event A and its complement A′ fit together?',
    a: `For every event, ${A} ∩ ${AP} = ${EMPTY} and ${A} ∪ ${AP} = ${S}: mutually exclusive and exhaustive, the union fills and the intersection empties. When ${A} is neither ${EMPTY} nor ${S}, {${A}, ${AP}} is a partition of ${S} into two non-empty pieces`,
    why: `${A} ∪ ${AP} = ${EMPTY} and ${A} ∩ ${AP} = ${S} swap the roles of ∪ and ∩: union fills, intersection empties, not the reverse.`,
    say: 'Union fills, intersection empties.',
  },
  // pp. 1189, 1191, 1193
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you build the sample space of a multi-stage experiment?',
    a: `Decide what is recorded on each trial, then draw a tree: a branch for stage 1, sub-branches for stage 2, each root-to-leaf path one ordered outcome, so nothing is missed or counted twice. Ordered stages give ordered pairs such as ${pair(H, '4')}, never sets: collapsing order destroys outcomes. Without replacement removes the repeats and shrinks ${S}. Check: ${k} independent stages of <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, … outcomes give ${nn(S)} = <i>m</i><sub>1</sub> × <i>m</i><sub>2</sub> × ⋯`,
    why: `A coin, then a die: ${nn(S)} = 2 × 6 = 12, and “head and a prime” = {${pair(H, '2')}, ${pair(H, '3')}, ${pair(H, '5')}}.`,
    say: null,
  },
  // pp. 1192–1193, 1195
  {
    topic: 0,
    kind: 'remember',
    q: 'A sample space has n outcomes. How many events, simple events and compound events are there?',
    a: `2<sup><i>n</i></sup> events (every subset, ${EMPTY} and ${S} included), ${n} simple ones, and 2<sup><i>n</i></sup> − ${n} − 1 compound ones: remove the ${n} singletons and the empty event`,
    why: `Unordered pairs of disjoint non-empty events: put each outcome in “only ${A}”, “only ${B}” or “neither” (3<sup><i>n</i></sup> ways), remove those leaving ${A} or ${B} empty, then halve: ${fr(`3<sup><i>n</i></sup> − 2<sup><i>n</i>+1</sup> + 1`, '2')}.`,
    say: null,
  },
  // pp. 1193, 1194
  {
    topic: 0,
    kind: 'mixup',
    q: 'Mutually exclusive or exhaustive: does one imply the other?',
    a: `No: they are separate conditions, so test ${AnB} and ${AuB} separately. {1} and {2} on a die are mutually exclusive but nowhere near exhaustive; {1, 2, 3} and {3, 4, 5, 6} are exhaustive but not mutually exclusive, since both hold 3`,
    why: 'For that last pair, “mutually exclusive and exhaustive” is the classic reflex of assuming exhaustive ⇒ mutually exclusive too.',
    say: null,
  },
  // pp. 1191, 1193, 1195
  {
    topic: 0,
    kind: 'mixup',
    q: 'At least one, exactly one, at most one: the same event?',
    a: `No: three different subsets of the same ${S}, and examiners weaponise the difference. Read the quantifier word before you scan ${S}`,
    why: `Three coins: “exactly two heads” = {${I('HHT')}, ${I('HTH')}, ${I('THH')}}, “at most one head” = {${I('HTT')}, ${I('THT')}, ${I('TTH')}, ${I('TTT')}}, and the two are mutually exclusive.`,
    say: 'At-least / exactly / at-most = three different subsets. Never blur them.',
  },
  // p. 1194
  {
    topic: 0,
    kind: 'mistake',
    q: 'A coin is tossed twice. Are there 4, 12 or 16 compound events?',
    a: `None of these: 11. ${nn(S)} = 4 gives 2<sup>4</sup> = 16 events; remove the 4 simple events and the 1 impossible event. 4 counts only the simple events, 16 all events, and 12 removes the simple events but forgets ${EMPTY}`,
    why: `“Compound” means more than one point: it excludes the singletons and ${EMPTY}.`,
    say: null,
  },
  // p. 1194
  {
    topic: 0,
    kind: 'mistake',
    q: 'Getting a 4 on a die: an outcome or an event, and how is “the event” written?',
    a: `“Getting a 4” is an outcome <i>ω</i>; an event is a set, so write {4}, not 4, even for one element. The other listed slips: assuming mutually exclusive ⇒ exhaustive, a sample space mis-built by forgetting “without replacement” or collapsing ordered pairs, and treating mutually exclusive as independent (mutually exclusive is a statement about the sets, ${AnB} = ${EMPTY})`,
    why: `If ${A} ⊆ ${B}, then ${AnB} = ${A}: ${B} confuses it with the union, and ${EMPTY} assumes two named events are disjoint.`,
    say: null,
  },
  // pp. 1192, 1194
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Which of four pairs of events is mutually exclusive, fast?',
    a: 'Do not compute the full intersections: hunt for one outcome sitting in both events. Find one ⇒ not mutually exclusive, stop; find none after scanning ⇒ mutually exclusive',
    why: 'One card: the King of Hearts kills “King” and “Heart”, every Queen is a face card, the 2 of Spades is even and black; only “Spade” and “red” share no card.',
    say: null,
  },

  // ── Topic 02 · Probability of Events and the Axiomatic Approach ──
  // pp. 1197, 1198
  {
    topic: 1,
    kind: 'remember',
    q: 'Why does the classical definition need replacing, and what does the axiomatic approach do instead?',
    a: `${NE_NS} works only when every outcome is equally likely, fails with infinitely many outcomes, and is circular, since “equally likely” already means “equally probable”. Kolmogorov (1933) listed the rules any probability must obey and accepted anything obeying them: like one kilogram of sand spread over the outcomes, none negative, an event’s probability being the sand on its outcomes`,
    why: 'A tossed drawing pin has two outcomes, point-up and point-down, but they are not equally likely, so “one out of two” is nonsense.',
    say: null,
  },
  // pp. 1197, 1198, 1204
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the three axioms of probability, and where do they hold?',
    a: `For a finite sample space ${S} and events ${A}, ${B}: ${PA} ≥ 0; ${pr(S)} = 1; ${AnB} = ${EMPTY} ⇒ ${pr(AuB)} = ${SUMAB}. Additivity is guaranteed only for mutually exclusive events. ${NE_NS} is not an axiom: it is the special case of equally likely outcomes`,
    why: `On sample points: each ${pr('<i>ω</i><sub><i>i</i></sub>')} ≥ 0, the total is 1, and ${pr(E)} is the sum of ${pr('<i>ω</i><sub><i>i</i></sub>')} over the points of ${E}.`,
    say: null,
  },
  // pp. 1198, 1201, 1204
  {
    topic: 1,
    kind: 'remember',
    q: 'How do you check that given numbers form a valid probability assignment?',
    a: 'Two checks, nothing else: every value is ≥ 0, and the values over the whole sample space add to 1. Each value lying in [0, 1] is not enough on its own',
    why: 'On four points, 0.1, 0.2, 0.3, 0.4 is valid; 0.3 four times sums to 1.2, and 0.5, 0.2, −0.1, 0.4 holds a negative value.',
    say: 'No negatives, totals one.',
  },
  // pp. 1199, 1204
  {
    topic: 1,
    kind: 'remember',
    q: 'What follows at once from the axioms for φ, for the complement and for the range?',
    a: `${pr(EMPTY)} = 0, since ${S} and ${EMPTY} are disjoint with union ${S}. ${pr(AP)} = 1 − ${PA}, since ${A} and ${AP} are disjoint with union ${S}. 0 ≤ ${PA} ≤ 1: the lower bound is the first axiom, the upper one ${PA} = 1 − ${pr(AP)} with ${pr(AP)} ≥ 0`,
    why: 'Whenever “at least one” is hard, compute “none” and subtract it from 1.',
    say: 'At least one ⇒ flip to none.',
  },
  // pp. 1199, 1204
  {
    topic: 1,
    kind: 'remember',
    q: 'How is the general addition rule derived from the axioms?',
    a: `Carve the union into disjoint slabs: ${AuB} = ${A} ∪ (${B} − ${A}) gives ${pr(AuB)} = ${PA} + ${pr(`${B} − ${A}`)}, and ${B} = (${AnB}) ∪ (${B} − ${A}) gives ${pr(`${B} − ${A}`)} = ${PB} − ${pr(AnB)}. So ${ADD}: ${SUMAB} counts the overlap twice`,
    why: `For mutually exclusive events ${pr(AnB)} = 0, and the rule collapses back to the additivity axiom.`,
    say: 'Or = Add, And = subtract once.',
  },
  // pp. 1198, 1202, 1204
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the probabilities of “A but not B”, “exactly one of A, B” and “neither”?',
    a: `${pr(`${A} − ${B}`)} = ${PA} − ${pr(AnB)}; exactly one: ${SUMAB} − 2${pr(AnB)}; neither: ${pr(`${AP} ∩ ${BP}`)} = 1 − ${pr(AuB)}, by De Morgan`,
    why: `${PA} = 0.6, ${PB} = 0.5, ${pr(AnB)} = 0.3: the union is 0.8, exactly one 0.5, neither 0.2.`,
    say: null,
  },
  // p. 1201
  {
    topic: 1,
    kind: 'remember',
    q: 'Where does P(A) = n(A) over n(S) come from?',
    a: `It is a theorem, not a definition: if all ${nn(S)} outcomes are equally likely, each gets the same ${p}, and ${nn(S)} · ${p} = 1 gives ${p} = ${fr('1', nn(S))}; summing over the ${nn(A)} points of ${A} gives ${NA_NS}. It holds only under the equally-likely assumption`,
    why: `4 red, 5 green and 3 blue marbles: ${pr('red')} = ${fr('4', '12')} = ${fr('1', '3')}.`,
    say: null,
  },
  // pp. 1202, 1204
  {
    topic: 1,
    kind: 'mixup',
    q: `A die is loaded so that each face’s probability is proportional to its number. Is P(prime) = ${fr('3', '6')}?`,
    a: `No: ${NA_NS} holds only for equally likely outcomes. Go back to the axioms: ${pr(k)} = <i>ck</i>, 21${c} = 1, so ${c} = ${fr('1', '21')}, and ${pr('prime')} = ${fr('2 + 3 + 5', '21')} = ${fr('10', '21')}`,
    why: `“Even or greater than 4”: ${fr('12', '21')} + ${fr('11', '21')} − ${fr('6', '21')} = ${fr('17', '21')}, the sand on {2, 4, 5, 6}.`,
    say: null,
  },
  // pp. 1203, 1204
  {
    topic: 1,
    kind: 'mistake',
    q: `${PA} = 0.5, ${PB} = 0.4, ${pr(AnB)} = 0.2. Is ${pr(`${AP} ∩ ${BP}`)} = 0.1?`,
    a: `No: 0.3. ${pr(AuB)} = 0.5 + 0.4 − 0.2 = 0.7, and “neither” is its complement. 0.1 forgets to add back the overlap, 0.7 stops before the complement, 0.9 does neither. The other listed slips: ${NA_NS} on a loaded experiment, dropping −${pr(AnB)} for overlapping events, and multiplying probabilities in an addition-rule problem`,
    why: `Mutually exclusive ${A}, ${B} with ${PA} = 0.6 and ${pr(AuB)} = 0.9 give ${PB} = 0.3; 0.4 confuses the union with the complement.`,
    say: null,
  },
  // pp. 1203, 1204
  {
    topic: 1,
    kind: 'mistake',
    q: 'P(A) = 0.7 and P(B) = 0.5. Can A and B be mutually exclusive?',
    a: `No: mutually exclusive needs ${SUMAB} ≤ 1, and 0.7 + 0.5 = 1.2 > 1. A probability outside [0, 1] is always an error: use the range as a free check on every answer`,
    why: `${PA} = 0.45 forces ${pr(AP)} = 0.55, so ${pr(AP)} = 0.45 is impossible.`,
    say: null,
  },
  // pp. 1203, 1204
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A question says “at least one”, or “not”. What do you reach for first?',
    a: `The complement: ${pr('at least one')} = 1 − ${pr('none')} almost always turns a messy union into a single easy count, the highest-leverage one-liner in the chapter`,
    why: `One card from 52: ${pr('not a face card')} = 1 − ${fr('12', '52')} = ${fr('10', '13')}.`,
    say: null,
  },

  // ── Topic 03 · Computing Probabilities: Combinatorial Methods, Multi-Event Addition & Odds ──
  // pp. 1207, 1208, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'How is a probability computed by counting, and when does order matter?',
    a: `For equally likely outcomes ${pr(E)} = ${NE_NS}: count, do not list. Unordered selections (hands, committees, groups of balls) use ${nCr} = ${fr(`${n}!`, `${r}! (${n} − ${r})!`)}; arrangements (queues, ranked positions) use ${nPr} = ${fr(`${n}!`, `(${n} − ${r})!`)}. Count ${nn(E)} and ${nn(S)} the same way, both ordered or both unordered, and the ratio is right either way`,
    why: `5 white and 4 black balls, two drawn together: ${nn(S)} = ${NC('9', '2')} = 36, so ${pr('both white')} = ${fr(NC('5', '2'), '36')} = ${fr('5', '18')}.`,
    say: null,
  },
  // pp. 1209, 1210, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you count an “and” condition across separate groups?',
    a: `Multiply the per-group counts: choosing ${I('i')} of ${m} men and ${I('j')} of ${I('w')} women gives ${NC(m, I('i'))} × ${NC(I('w'), I('j'))} favourable selections. Then divide by ${nn(S)} and check that the result lies in [0, 1]`,
    why: `A committee of 4 from 5 men and 6 women, exactly 2 men: ${fr(`${NC('5', '2')} × ${NC('6', '2')}`, NC('11', '4'))} = ${fr('150', '330')} = ${fr('5', '11')}.`,
    say: 'And across groups ⇒ multiply.',
  },
  // pp. 1207, 1209, 1210, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'How is “at least one” found by counting?',
    a: `Write its complement, “none at all”, count it (usually one clean case), then ${pr('at least one')} = 1 − ${pr('none')}. “At least one ace” is four messy cases; “no ace” is one`,
    why: `The same committee, at least 1 woman: ${pr('no woman')} = ${fr(NC('5', '4'), NC('11', '4'))} = ${fr('1', '66')}, so the answer is ${fr('65', '66')}.`,
    say: 'At least ⇒ flip to none.',
  },
  // pp. 1208, 1209, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the addition theorem for three events, and why the signs?',
    a: `${pr(AuBuC)} = ${PA} + ${PB} + ${pr(C)} − ${pr(AnB)} − ${pr(BnC)} − ${pr(CnA)} + ${pr(AnBnC)}. Adding the singles overcounts every pairwise overlap once; subtracting the pairs then removes the triple overlap too many times; adding it back once repairs the count`,
    why: 'Three newspapers: 0.5 + 0.4 + 0.3 − 0.2 − 0.15 − 0.1 + 0.05 = 0.80 read at least one.',
    say: 'In-out-in.',
  },
  // pp. 1208, 1210, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the probabilities of exactly one of A, B, and of exactly one of A, B, C?',
    a: `${SUMAB} − 2${pr(AnB)} for two; for three, [${PA} + ${PB} + ${pr(C)}] − 2[${pr(AnB)} + ${pr(BnC)} + ${pr(CnA)}] + 3${pr(AnBnC)}`,
    why: 'The newspapers: 1.2 − 2(0.45) + 3(0.05) = 0.45, below the 0.80 for at least one; the gap 0.35 reads two or more.',
    say: null,
  },
  // pp. 1208, 1209, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'What are odds, and how do they convert to and from probability?',
    a: `Odds in favour of ${E} = ${RATIO(nn(E), nn(EP))}, favourable to unfavourable equally likely outcomes; odds against = ${RATIO(nn(EP), nn(E))}. In favour ${RATIO(a, b)} ⇒ ${pr(E)} = ${fr(a, `${a} + ${b}`)}; against ${RATIO(a, b)} ⇒ ${pr(E)} = ${fr(b, `${a} + ${b}`)}; ${pr(E)} = ${fr(p, q)}, reduced, ⇒ odds in favour ${RATIO(p, `(${q} − ${p})`)}. Both numbers are positive when the event is neither impossible nor sure`,
    why: `Odds in favour of rain ${RATIO('2', '3')}: ${pr('rain')} = ${fr('2', '5')} and ${pr('no rain')} = ${fr('3', '5')}.`,
    say: 'Against puts the event second.',
  },
  // pp. 1208, 1213
  {
    topic: 2,
    kind: 'remember',
    q: 'When is empirical probability used instead of counting?',
    a: `When outcomes cannot be assumed equally likely or counted (will this newborn calf survive?): ${pr(E)} ≈ ${fr(I('f'), I('N'))}, the relative frequency of ${E} over ${I('N')} trials, which stabilises as the trials grow large. The counting formula itself always assumes equally likely outcomes: “fair”, “unbiased”, “at random”`,
    why: `For a loaded die or a weighted draw ${NE_NS} fails, and you fall back to the axioms.`,
    say: null,
  },
  // pp. 1210, 1212, 1213
  {
    topic: 2,
    kind: 'mixup',
    q: 'Odds 3 ∶ 2 in favour: is the probability 3 over 2, and what changes for “against”?',
    a: `Odds are not a probability: in favour ${RATIO(a, b)} means ${fr(a, `${a} + ${b}`)}, so ${RATIO('3', '2')} gives ${fr('3', '5')}. “Against” flips which number is the event’s: the favourable count is the second number`,
    why: `Odds against a horse ${RATIO('5', '2')}: ${pr('win')} = ${fr('2', '7')}; ${fr('5', '7')} grabs the first number.`,
    say: null,
  },
  // pp. 1211, 1212
  {
    topic: 2,
    kind: 'mistake',
    q: `Two fair dice: is P(at least one six) = ${fr('1', '6')} + ${fr('1', '6')} = ${fr('1', '3')}?`,
    a: `No: ${fr('11', '36')}. Adding counts the outcome ${pair('6', '6')} twice. Complement: 25 of the 36 pairs have no six, so 1 − ${fr('25', '36')}; ${fr('25', '36')} itself stops at ${pr('no six')}. The other listed slips: ${nPr} on top with ${nCr} below, brute-forcing “at least one” case by case, and stopping after subtracting the pairs, the +${pr(AnBnC)} forgotten`,
    why: `A sum of 8 on two dice is ${fr('5', '36')}: ${pair('2', '6')}, ${pair('3', '5')}, ${pair('4', '4')}, ${pair('5', '3')}, ${pair('6', '2')}; ${fr('1', '9')} forgets one ordered pair.`,
    say: null,
  },
  // pp. 1211, 1212
  {
    topic: 2,
    kind: 'shortcut',
    q: 'At least one hit in n repeated draws from one equally likely sample space: the fast count?',
    a: `If ${k} of the ${s} outcomes of a single draw avoid the target, ${pr('at least one')} = 1 − ${KNSN}: count the outcomes with none. A counting shortcut, not a rule for multiplying probabilities of different events`,
    why: `Three coins: one of the 8 triples, ${I('TTT')}, has no head, so ${pr('at least one head')} = 1 − ${fr('1', '8')} = ${fr('7', '8')}.`,
    say: null,
  },

  // ── Additional topic A · Probability with Permutation Counts ──
  // pp. 1215, 1216
  {
    topic: 3,
    kind: 'remember',
    q: 'In an ordered-counting probability, what is one outcome, and how are n(S) and n(E) counted?',
    a: `One complete arrangement: one specific number, word-arrangement or line-up. ${r} places from ${n} distinct objects, no repetition: ${nPr} = ${fr(`${n}!`, `(${n} − ${r})!`)}; all ${n} objects in a row with ${p}<sub>1</sub>, ${p}<sub>2</sub>, … identical ones: ${fr(`${n}!`, `${p}<sub>1</sub>! ${p}<sub>2</sub>! ⋯`)}; a leading-zero ban: subtract the arrangements starting with 0, or fill the leading place first. Count ${nn(E)} the same way, constrained positions first, splitting into cases when two conditions collide on one digit`,
    why: `Four-digit numbers from 1 to 7, no digit repeated: ${nn(S)} = ${NP('7', '4')} = 840; even means a units digit 2, 4 or 6, then ${NP('6', '3')} = 120, so ${fr('360', '840')} = ${fr('3', '7')}.`,
    say: 'Fill the constrained position first.',
  },
  // pp. 1216, 1218
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you count arrangements with “no two X together”?',
    a: `The gap method: arrange the non-${X} objects first, then put the ${X}’s into distinct gaps chosen from the (number of non-${X} + 1) available. Separate gaps make adjacency impossible by construction, so nothing has to be subtracted`,
    why: `ASSASSIN: A, A, I, N in ${fr('4!', '2!')} = 12 ways, 5 gaps, ${NC('5', '4')} = 5 choices for the identical S’s: ${fr('60', '840')} = ${fr('1', '14')}.`,
    say: null,
  },
  // pp. 1219, 1220
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you count arrangements with identical objects all together?',
    a: 'Glue them into one block and arrange the block with the rest. Identical objects have no internal arrangements, so the block contributes a factor of 1',
    why: `ASSASSIN, all four S’s together: ${fr('5!', '2!')} = 60 of the 840, so ${fr('1', '14')}; multiplying by 4! would give ${fr('24', '14')} > 1.`,
    say: null,
  },
  // pp. 1219, 1220
  {
    topic: 3,
    kind: 'mixup',
    q: '“All together” and “no two together”: are they complements?',
    a: `Only for exactly two objects. With three or more they leave a large middle ground, so ${pr('no two together')} ≠ 1 − ${pr('all together')}`,
    why: `ASSASSIN: each is ${fr('1', '14')}, together ${fr('1', '7')} < 1; the other ${fr('6', '7')} are the partly clumped arrangements.`,
    say: null,
  },
  // pp. 1216, 1219
  {
    topic: 3,
    kind: 'mistake',
    q: 'Can n(S) be counted with combinations while n(E) is counted as arrangements?',
    a: `No: both must be counted in the same currency, both ordered or both unordered. Mixing them is the most expensive error here, because the answer still looks like a probability`,
    why: `Using ${NC('7', '4')} = 35 for the four-digit numbers while counting ${nn(E)} as ordered arrangements gives a “probability” above 1.`,
    say: null,
  },
  // pp. 1218, 1220
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is P(even and greater than 4000) = P(even) × P(greater than 4000)?',
    a: `No: ${fr('3', '7')} × ${fr('4', '7')} = ${fr('12', '49')} ≈ 0.2449, but the joint count gives ${fr('200', '840')} = ${fr('5', '21')} ≈ 0.2381, because the two conditions compete for the digits 4 and 6. Never convert an “and” condition into a product of probabilities: count the joint arrangements`,
    why: `Split on the units digit: 2 leaves four thousands digits, 4 and 6 leave three each; (4 + 3 + 3) × ${NP('5', '2')} = 200.`,
    say: 'Count, do not multiply probabilities.',
  },
  // pp. 1216, 1218
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Four-digit numbers from 1 to 7, no digit repeated: P(even) and P(divisible by 5) in one line?',
    a: `Symmetry: every digit is equally likely to land in the units place. Three of the seven digits are even, so ${fr('3', '7')}; only 5 makes the number divisible by 5, so ${fr('1', '7')}`,
    why: `By counting: 3 × ${NP('6', '3')} = 360 and 1 × ${NP('6', '3')} = 120, over ${NP('7', '4')} = 840.`,
    say: null,
  },

  // ── Additional topic B · Inequality Bounds from the Axioms ──
  // pp. 1220, 1225
  {
    topic: 4,
    kind: 'remember',
    q: 'What is monotonicity, and why does it hold?',
    a: `If ${A} ⊆ ${B} then ${PA} ≤ ${PB}: ${B} = ${A} ∪ (${B} − ${A}) with the pieces disjoint, so ${PB} = ${PA} + ${pr(`${B} − ${A}`)}, and the last term is ≥ 0. The implication runs one way only: ${PA} ≤ ${PB} does not imply ${A} ⊆ ${B}`,
    why: `${A} ⊆ ${B} with ${PA} = 0.35 and ${PB} = 0.62: ${pr(AnB)} = 0.35, ${pr(AuB)} = 0.62 and ${pr(`${B} − ${A}`)} = 0.27.`,
    say: 'A bigger heap cannot hold less sand.',
  },
  // pp. 1220, 1221, 1225
  {
    topic: 4,
    kind: 'remember',
    q: 'What do Boole’s and Bonferroni’s inequalities say?',
    a: `Boole: ${pr(AuB)} ≤ ${SUMAB}, since ${pr(AnB)} ≥ 0; for ${A1}, …, ${An}, the union’s probability is at most the sum of theirs, with equality when they are pairwise mutually exclusive. Bonferroni: ${pr(AnB)} ≥ ${BONF}, since ${pr(AuB)} ≤ 1; for ${n} events, the intersection’s probability is at least the sum of theirs minus (${n} − 1)`,
    why: `Three events of probability 0.75 each: their common intersection has probability at least 3 × 0.75 − 2 = 0.25.`,
    say: null,
  },
  // pp. 1221, 1225
  {
    topic: 4,
    kind: 'remember',
    q: 'Given only P(A) and P(B), what are the four bounds?',
    a: `max(0, ${BONF}) ≤ ${pr(AnB)} ≤ min(${PA}, ${PB}), and max(${PA}, ${PB}) ≤ ${pr(AuB)} ≤ min(1, ${SUMAB}). Every endpoint is attained in a suitable sample space, so “greatest” and “least” questions have the endpoints as their answers`,
    why: `${PA} = 0.4, ${PB} = 0.75: the intersection runs over [0.15, 0.4], the union over [0.75, 1].`,
    say: null,
  },
  // pp. 1221, 1223, 1225
  {
    topic: 4,
    kind: 'remember',
    q: 'What ties the bounds on the union to the bounds on the intersection?',
    a: `The see-saw identity ${pr(AuB)} + ${pr(AnB)} = ${SUMAB}, a constant: every unit of probability pushed into the overlap comes straight out of the union. Subtract the intersection’s interval from ${SUMAB} and reverse the endpoints`,
    why: `${PA} = 0.6, ${PB} = 0.8: the intersection lies in [0.4, 0.6], so the union lies in [1.4 − 0.6, 1.4 − 0.4] = [0.8, 1].`,
    say: 'Every unit of probability you push into the overlap comes straight out of the union.',
  },
  // pp. 1221, 1223, 1226
  {
    topic: 4,
    kind: 'mixup',
    q: 'Maximum overlap or minimum overlap: how do the two events sit?',
    a: `Maximum: the smaller event lies entirely inside the larger (${A} ⊆ ${B} or ${B} ⊆ ${A}). Minimum: the events pushed as far apart as the sample space allows, mutually exclusive when ${SUMAB} ≤ 1, otherwise overlapping by exactly ${BONF} and covering all of ${S}`,
    why: `${S} = {1, …, 10}, each outcome 0.1: ${A} = {1, …, 6} inside ${B} = {1, …, 8} overlaps by 0.6; with ${B} = {3, …, 10} the forced overlap is 0.4 and the union is ${S}.`,
    say: null,
  },
  // pp. 1224, 1226
  {
    topic: 4,
    kind: 'mistake',
    q: 'A report gives P(A) = 0.8, P(B) = 0.7 and P(A ∩ B) = 0.4. Since 0.4 ≤ 0.7, is the data consistent?',
    a: `No: the upper bound holds, but Bonferroni’s floor is 0.8 + 0.7 − 1 = 0.5 and 0.4 is below it; ${pr(AuB)} would be 1.1 > 1. Check both ends: reject if ${pr(AnB)} < ${BONF}, or ${pr(AnB)} > min(${PA}, ${PB}), or ${pr(AuB)} > 1`,
    why: `Whenever ${SUMAB} > 1 the events are forced to overlap.`,
    say: null,
  },
  // pp. 1223, 1224, 1225
  {
    topic: 4,
    kind: 'mistake',
    q: 'When P(A) + P(B) ≤ 1, what is the least possible P(A ∩ B)?',
    a: `0, attained by making ${A} and ${B} mutually exclusive: ${BONF} is then negative, or zero when the sum is exactly 1, and never beats 0. That is why the floor is max(0, ⋅). Likewise Boole’s ${SUMAB} can exceed 1: always cap the union at 1`,
    why: `${PA} = 0.6, ${PB} = 0.8: Boole gives ${pr(AuB)} ≤ 1.4, which says nothing; the ceiling 1 is the binding constraint.`,
    say: null,
  },
  // pp. 1224, 1225
  {
    topic: 4,
    kind: 'shortcut',
    q: 'You have the interval for P(A ∩ B). How do you get the one for P(A ∪ B) at once?',
    a: `[${SUMAB} − upper, ${SUMAB} − lower], capped at 1: one identity, two answers. And before computing anything, discard options that break 0 ≤ <i>P</i> ≤ 1, ${pr(AnB)} ≤ min(${PA}, ${PB}) or ${pr(AuB)} ≥ max(${PA}, ${PB})`,
    why: `${PA} = 0.4, ${PB} = 0.75: 1.15 minus [0.15, 0.4] gives [0.75, 1].`,
    say: null,
  },

  // ── Additional topic C · Selection and Arrangement in the Same Problem ──
  // pp. 1228, 1229, 1236
  {
    topic: 5,
    kind: 'remember',
    q: 'One outcome is a selection and an arrangement at once. How is n(S) counted?',
    a: `Split the outcome into its two acts, which objects and then in what order, and multiply: ${nn(S)} = ${nCr} × ${r}!, with ${fr(`${r}!`, `${p}<sub>1</sub>! ${p}<sub>2</sub>! ⋯`)} in place of ${r}! when the chosen objects are not all distinct. For distinct objects, cross-check with the free identity ${nCr} × ${r}! = ${nPr}`,
    why: `A team of 4 from 9, given four distinct posts: ${NC('9', '4')} × 4! = 126 × 24 = 3024 = ${NP('9', '4')}.`,
    say: 'Pick first, then place.',
  },
  // pp. 1228, 1229, 1230, 1232
  {
    topic: 5,
    kind: 'remember',
    q: 'Where does each condition of the event go?',
    a: 'Selection conditions (“exactly two girls”) at stage one, position conditions (“the captain is a girl”) at stage two: apply each at its own stage and multiply. They multiply because they act on different stages of one outcome, not because of any independence argument',
    why: `5 boys and 4 girls, exactly two girls and a girl captain: ${NC('4', '2')} × ${NC('5', '2')} = 60 teams, 2 choices of captain, 3! for the other posts: ${fr('720', '3024')} = ${fr('5', '21')}.`,
    say: null,
  },
  // pp. 1228, 1230, 1236
  {
    topic: 5,
    kind: 'remember',
    q: 'When does the arrangement factor cancel?',
    a: `When the event never mentions the positions: every arrangement of a favourable selection is favourable, ${r}! sits in ${nn(E)} and ${nn(S)} alike, and the pure-selection model with ${nCr} throughout gives the same answer`,
    why: `Exactly two girls: ${fr(`${NC('4', '2')} × ${NC('5', '2')}`, NC('9', '4'))} = ${fr('60', '126')} = ${fr('10', '21')}, the same as ${fr('1440', '3024')}.`,
    say: null,
  },
  // pp. 1228, 1230, 1236
  {
    topic: 5,
    kind: 'remember',
    q: 'How do repeated objects in the pool, or repetition allowed, change the count?',
    a: `Repeated objects in the pool: the selection splits into cases by how many repeats are taken, each with its own arrangement factor (3! against ${fr('3!', '2!')} for three letters). Repetition allowed: the arrangement stage is ${n}<sup><i>r</i></sup>, not ${nPr}, a different sample space`,
    why: `Three-letter words from MATHEMATICS: all different ${NC('8', '3')} × 3! = 336, one letter doubled 3 × 7 × 3 = 63, so 399 words, and ${fr('336', '399')} = ${fr('16', '19')} have three different letters.`,
    say: null,
  },
  // pp. 1229, 1231, 1232, 1236
  {
    topic: 5,
    kind: 'mixup',
    q: '“A word chosen at random from the list” or “letter-tiles drawn at random from a bag”?',
    a: 'Different experiments with different correct answers when letters repeat: drawing tiles does not make the distinct words equally likely, so tile-sequences are counted top and bottom. The question’s wording decides which experiment you are in',
    why: `MATHEMATICS: ${fr('16', '19')} for a listed word, ${fr('828', '990')} = ${fr('46', '55')} for three tiles laid in a row; ${I('MAT')} arises from 8 tile-sequences, ${I('HEI')} from 1.`,
    say: 'Read the experiment, not the objects.',
  },
  // pp. 1231, 1232, 1236
  {
    topic: 5,
    kind: 'mixup',
    q: 'A glued block of objects: does it carry an internal r!?',
    a: `Only if its objects are distinct: distinct objects glued together carry ${r}!, identical ones carry 1. The rule is about the objects, not the gluing`,
    why: `Three different mathematics books kept together on a shelf of five: 12 selections × 3! × 3! = 432 of ${NP('7', '5')} = 2520, so ${fr('6', '35')}.`,
    say: null,
  },
  // pp. 1230, 1231, 1232
  {
    topic: 5,
    kind: 'mistake',
    q: `Three-letter words from MATHEMATICS, all letters different: is it 336 over ${NP('11', '3')} = 990?`,
    a: `No: that ${fr('56', '165')} answers no question. 990 counts tile-sequences (the two M tiles as different objects), 336 counts words (the two M tiles as one symbol): a mixed currency. Likewise keeping the factor ${r}! in ${nn(S)} while forgetting it in ${nn(E)} is wrong`,
    why: `Words: ${fr('336', '399')}; tiles: ${fr('828', '990')}.`,
    say: null,
  },
  // pp. 1231, 1232
  {
    topic: 5,
    kind: 'mistake',
    q: 'Four-digit numbers greater than 5000 from 0, 1, 3, 5, 7, repetition allowed: is n(S) = 2 × 5³ = 250?',
    a: `No: 249, because 5000 itself is not greater than 5000; 5000 is also one of the 100 numbers ending in 0 or 5, leaving 99. So ${fr('99', '249')} = ${fr('33', '83')}. Without repetition 5000 never arises: ${fr('18', '48')} = ${fr('3', '8')}`,
    why: `Repetition allowed changes the sample space, not just the answer: 5<sup>4</sup> and ${NP('5', '4')} are different denominators.`,
    say: null,
  },
  // pp. 1230, 1232
  {
    topic: 5,
    kind: 'shortcut',
    q: `P(exactly two girls in the team) = ${fr('10', '21')}. P(exactly two girls and a girl captain) in one step?`,
    a: `Symmetry: a team’s 4! role-sheets put each member in the captain’s chair equally often, and 2 of its 4 members are girls, so exactly half: ${fr('1', '2')} × ${fr('10', '21')} = ${fr('5', '21')}. A counting argument about 4! orderings, not a product of two probabilities`,
    why: `Before building the bigger sample space, check whether the roles cancel: then ${nCr} alone suffices.`,
    say: null,
  },

  // ── Additional topic D · The Matching Problem, and Inclusion–Exclusion Past Three Events ──
  // pp. 1232, 1233, 1237
  {
    topic: 6,
    kind: 'remember',
    q: 'What is inclusion–exclusion for n events, and why does it hold?',
    a: `The probability of the union of ${A1}, …, ${An} is the sum of the single probabilities, minus the sum over pairs of their intersections, plus the sum over triples, and so on: every ${k}-fold intersection carries the sign ${NEG(`${k}+1`)}, the last term ${NEG(`${n}+1`)}${NB}${pr(`${A1} ∩ ⋯ ∩ ${An}`)}. It follows by induction from the two-event addition rule alone, with ${B} = ${A1} ∪ ⋯ ∪ ${As(`${n}−1`)}: no new axioms`,
    why: `Divisible by 2, 3, 5 or 7, among 1 to 1000: 1175 − 478 + 79 − 4 = 772, so ${fr('772', '1000')} = ${fr('193', '250')}.`,
    say: 'Intersections get counted, never multiplied.',
  },
  // pp. 1233, 1237
  {
    topic: 6,
    kind: 'remember',
    q: 'n letters go at random into n addressed envelopes. What is P(at least one in its own envelope)?',
    a: `${SUM(`${k}=1`, n)} ${fr(NEG(`${k}+1`), `${k}!`)} = 1 − ${F('2')} + ${F('3')} − ⋯ + ${fr(NEG(`${n}+1`), `${n}!`)}, and ${pr('no match')} = ${SUM(`${k}=0`, n)} ${fr(NEG(k), `${k}!`)}. Any ${k} chosen letters correct leave (${n} − ${k})! arrangements, and ${nCk} · ${fr(`(${n} − ${k})!`, `${n}!`)} = ${F(k)}`,
    why: `Four letters: 1 − ${F('2')} + ${F('3')} − ${F('4')} = ${fr('5', '8')}, so ${fr('3', '8')} have no match: 9 of the 24.`,
    say: null,
  },
  // pp. 1235, 1237
  {
    topic: 6,
    kind: 'remember',
    q: 'Which derangement numbers are worth memorising, and how many arrangements have exactly r correct?',
    a: `${Dm('2')} = 1, ${Dm('3')} = 2, ${Dm('4')} = 9, ${Dm('5')} = 44, where ${Dm(m)} counts the match-free arrangements of ${m} letters. Exactly ${r} correct: choose the ${r} in ${nCr} ways and derange the rest, ${nCr}${NB}${Dm(`<i>n</i>−<i>r</i>`)} arrangements, over ${n}!. As ${n} grows, ${pr('at least one match')} → ${EINV} ≈ 0.632`,
    why: `Five letters: exactly one correct is ${fr('5 × 9', '120')} = ${fr('3', '8')}, exactly two ${fr('10 × 2', '120')} = ${fr('1', '6')}.`,
    say: null,
  },
  // pp. 1235, 1236
  {
    topic: 6,
    kind: 'mixup',
    q: '“Exactly r correct” or “at least r correct”: which count?',
    a: `Exactly ${r}: ${nCr}${NB}${Dm(`<i>n</i>−<i>r</i>`)}, the derangement factor forcing the rest all wrong. ${nCr}(${n} − ${r})! is not “exactly”: it counts arrangements with at least ${r} correct with multiplicity, an arrangement with ${s} ≥ ${r} correct being counted ${NC(s, r)} times`,
    why: `For ${n} = 5 the exactly-${r} counts are 44, 45, 20, 10, 0, 1, adding to 120; four correct forces the fifth.`,
    say: null,
  },
  // pp. 1233, 1234, 1236
  {
    topic: 6,
    kind: 'mistake',
    q: `Four letters: is P(letters 1 and 2 both correct) = ${fr('1', '4')} × ${fr('1', '4')}?`,
    a: `No: ${fr('2!', '4!')} = ${fr('1', '12')}, not ${fr('1', '16')}. The two events are not independent, so a multiplication shortcut gives a wrong answer; the intersections in inclusion–exclusion must be counted`,
    why: `${pr(A1)} = ${pr(A2)} = ${fr('3!', '4!')} = ${fr('1', '4')}, yet only 2 of the 24 arrangements fix both letters.`,
    say: null,
  },
  // pp. 1212, 1236
  {
    topic: 6,
    kind: 'mistake',
    q: 'Is P(at least one) = 1 − (chance of none) to the power of the number of trials a safe rule?',
    a: `No: that product form is the independence formula, true only for independent trials such as repeated tosses of a coin or throws of a die, and false for dependent ones like the matching problem. Where it seems to work here it is really a count in a product sample space: 1 − ${KNSN}, with ${k} of the ${s} equally likely outcomes of one draw avoiding the target. In this chapter, count: do not multiply probabilities of events`,
    why: `Two dice: ${pr('no six')} = ${fr('25', '36')} because 25 of the 36 equally likely ordered pairs avoid a six.`,
    say: null,
  },
  // p. 1236
  {
    topic: 6,
    kind: 'mistake',
    q: 'At least one letter in its own envelope: count “none” first, as usual?',
    a: '“None” is not one clean case here: “no letter correct” is itself the hard count. Inclusion–exclusion gives “at least one”, and the complement then gives “none” for free',
    why: `Four letters: 1 − ${fr('5', '8')} = ${fr('3', '8')}, the 9 derangements among the 24.`,
    say: 'Know which direction is the cheap one.',
  },
  // pp. 1235, 1236
  {
    topic: 6,
    kind: 'shortcut',
    q: 'A matching-problem MCQ with many letters: how many terms do you need?',
    a: `Very few: the ${k}-th term is ${F(k)}, so by ${k} = 5 you are adding ${fr('1', '120')}. Five terms pin the answer within 1% of ${EINV} ≈ 0.632 (three give 0.667, within about 6%), usually enough to eliminate three options`,
    why: `${n} = 3, 4, 5 give ${fr('2', '3')}, ${fr('5', '8')}, ${fr('19', '30')}: they barely move, and with 100 letters the answer is still about 0.632.`,
    say: null,
  },
];
