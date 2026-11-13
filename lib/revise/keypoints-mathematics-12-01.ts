/**
 * KEY POINTS for Mathematics Class 12, Chapter 1 (Relations and Functions).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–07 each have four or more Remember points (Topic 02, with its
 * tests, counts and polynomial facts, has six), at least one of each other
 * kind and one Exam shortcut (Topics 01, 02 and 04 carry two Common
 * mistakes); Additional topics A–F have two or three Remember points and one
 * of each other kind; Additional P, the past-paper analysis, has five points
 * (three archetypes as Remember and Exam shortcuts, two traps): 95 points in
 * all. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–07 are 0–6 (the chapter's Subtopics 01–07); Additional
 * topics A–F are 7–12 (Addenda A–F) and Additional P is 13 (Addendum P,
 * What JEE Actually Asks). No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, procedures, derivations and its Cheat sheet. Common mistakes:
 * its Common student pitfalls and its MCQ traps (A–F, which print neither:
 * the slips their worked examples and practice answers warn about; P: its
 * traps). Exam shortcuts: its Pro-Tip, Speed Trap and worked examples. `say`:
 * the book's own memory aids, word for word without their quotation marks
 * (Topics 01–07 print three, three, four, three, three, four and three:
 * twenty-two are here, fourteen of them shown as memory lines; the
 * twenty-third, Topic 06's "Irrational ratio ⇒ not periodic.", over-states,
 * see below). A–F and P
 * print no aids, so each has two of the book's own one-line sentences (A:
 * "Two classes are either identical or disjoint: never partially
 * overlapping." with its opening "So" dropped, and "Nothing smaller survives;
 * nothing larger is needed."; B: "The surjectivity of the composite is
 * manufactured by g alone." and "Always filter by f(x) ∈ Dom(g); never
 * shortcut."; C: "The overlap test is the injectivity test." and "Choosing
 * the correct root of a quadratic is the whole game.", each cut from its
 * sentence and capitalised; D: "Compose the recurrence with itself until the
 * value returns." and "Axes come in families spaced T/2 apart.", its "So"
 * dropped; E: "Only fully-surjective functions survive." and "Two independent
 * routes, one answer.", capitalised; F: "Compute f², then f³, and stop the
 * moment you hit x." and "Iterates behave like powers of a number, provided
 * you never leave the domain.", cut from its sentence; P: "Always test
 * well-definedness before one-one/onto." and "Distractor options are built
 * from the discarded branch."): thirty-six in all, twenty-eight of them
 * memory lines.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: the iterates of a linear fractional function having orders
 * "typically 2, 3, or 4" (the point says only: compute f², f³, … until x
 * returns; most such functions never cycle); the sum of two periodic
 * functions with an irrational ratio of periods being "not periodic" (the
 * point says there is no common period, so the LCM rule gives nothing, and
 * states the rigid fact for continuous functions: two periods of irrational
 * ratio force a constant); the pairs-to-add count ∑|Cᵢ|² − |R| (an isolated
 * element is a component of size 1); and the Bell recurrence, quoted only
 * through the Stirling numbers, since the chapter never defines the B₀ it
 * needs. The Exam relevance and exam-frequency claims, the past-paper
 * distribution and its shares, the years of the iterates and recurrence
 * examples (the points use f¹⁰⁰ and the book's own values), the CBSE, NCERT
 * and syllabus remarks, and the sidenote on older floor conventions are left
 * out.
 *
 * Markup is the chapter's own: <i> for every variable, set, relation and
 * function letter, ∶ in set-builder, − (U+2212) for minus, ∘ for composition,
 * <sup>−1</sup> for an inverse, [x] for the greatest integer and {x} for the
 * fractional part, the number sets ℕ ℤ ℝ upright, Dom and Range upright, the
 * empty set ∅ and ∖ for set difference as the chapter prints them. Every
 * fraction is stacked, <frac><num>…</num><den>…</den></frac>, and never a
 * fraction inside a numerator, except inside a raised exponent
 * (2^(n(n+1)/2), (x)^(1/3)) or a base (log with base 1/2), which keeps its
 * slash as the chapter writes it; a binomial coefficient is
 * <binom><num>m</num><den>k</den></binom>; no em dashes; and always a space
 * after "<", so it is never read as a tag.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const bn = (t: string, b: string) => `<binom><num>${t}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
const NB = ' ';
const A = I('A');
const B = I('B');
const C = I('C');
const R = I('R');
const P = I('P');
const S = I('S');
const T = I('T');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const f = I('f');
const g = I('g');
const h = I('h');
const k = I('k');
const m = I('m');
const n = I('n');
const t = I('t');
const x = I('x');
const y = I('y');
const sub = (s: string, u: string) => `${s}<sub>${u}</sub>`;
const sup = (s: string, u: string) => `${s}<sup>${u}</sup>`;
const sq = (s: string) => sup(s, '2');
const x2 = sq(x);
const x1 = sub(x, '1');
const xx2 = sub(x, '2');
const of = (F: string, s: string) => `${F}(${s})`;
const fx = of(f, x);
const gx = of(g, x);
const fmx = of(f, `−${x}`);
const fx1 = of(f, x1);
const fx2 = of(f, xx2);
const o = (u: string, v: string) => `${u}${NB}∘${NB}${v}`;
const inv = (s: string) => `${s}<sup>−1</sup>`;
const fi = inv(f);
const gi = inv(g);
const gof = o(g, f);
const fog = o(f, g);
const IA = sub(I('I'), A);
const IB = sub(I('I'), B);
const pair = (p: string, q: string) => `(${p},${NB}${q})`;
const AxA = `${A} × ${A}`;
const aRb = I('aRb');
const xRa = I('xRa');
const xRy = I('xRy');
const Bn = (s: string) => sub(B, s);
const NP = (p: string, q: string) => `<sup>${p}</sup>${P}<sub>${q}</sub>`;
const ONTO = `∑<sub>${k}=0</sub><sup>${m}</sup>(−1)<sup>${k}</sup>${bn(m, k)}(${m} − ${k})<sup>${n}</sup>`;
const RANGE = (s: string) => `Range(${s})`;
const DOM = (s: string) => `Dom(${s})`;
const HALF = fr('1', '2');
const ONE_X = fr('1', x);
const fl = (s: string) => `[${s}]`;
const fp = (s: string) => `{${s}}`;
const sinx = `sin${NB}${x}`;
const cosx = `cos${NB}${x}`;
const T1 = sub(T, '1');
const T2 = sub(T, '2');
const Ci = sub(C, I('i'));
const DER = (s: string) => `!${s}`;

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Types of Relations ──
  // pp. 45–46, 54
  {
    topic: 0,
    kind: 'remember',
    q: `What is a relation on a set ${A}, and what are the empty, universal and identity relations?`,
    a: `A relation ${R} on ${A} is any subset of ${AxA}: a chosen set of ordered pairs, with ${aRb} meaning ${pair(a, b)} ∈ ${R}. The extremes: the empty (void) relation ${R} = ∅ connects nothing, the universal relation ${R} = ${AxA} connects everything, and the identity relation ${IA} = {${pair(a, a)} ∶ ${a} ∈ ${A}} connects every element only to itself`,
    why: '“Is the same person as” is an identity relation: everyone is connected to themselves and to no one else.',
    say: null,
  },
  // pp. 45–46, 54
  {
    topic: 0,
    kind: 'remember',
    q: 'What do reflexive, symmetric, transitive and antisymmetric mean?',
    a: `Reflexive: ${pair(a, a)} ∈ ${R} for every ${a} ∈ ${A}, a self-loop on everyone. Symmetric: ${pair(a, b)} ∈ ${R} ⟹ ${pair(b, a)} ∈ ${R}, a two-way street. Transitive: ${pair(a, b)} ∈ ${R} and ${pair(b, c)} ∈ ${R} ⟹ ${pair(a, c)} ∈ ${R}, every chain has its shortcut. Antisymmetric: ${pair(a, b)} ∈ ${R} and ${pair(b, a)} ∈ ${R} ⟹ ${a} = ${b}. The traits are defined only for a relation on a single set`,
    why: '“Lives in the same city as” has all three traits; “is a friend of” is symmetric but not transitive: your friend’s friend need not be your friend.',
    say: 'Same–Mirror–Chain = Reflexive–Symmetric–Transitive.',
  },
  // pp. 45–47, 54
  {
    topic: 0,
    kind: 'remember',
    q: 'What is an equivalence relation, and what does it do to the set?',
    a: `A relation that is reflexive, symmetric and transitive. It sorts ${A} into disjoint buckets, the equivalence classes [${a}] = {${x} ∈ ${A} ∶ ${xRa}}: the distinct classes are mutually disjoint and their union is ${A}, so they partition ${A}`,
    why: '“Can reach by any sequence of trains” is an equivalence relation on stations; each class is a group of mutually reachable stations.',
    say: 'R + S + T = Rest easy, it’s an Equivalence.',
  },
  // pp. 46, 48–49, 54
  {
    topic: 0,
    kind: 'remember',
    q: `For |${A}| = ${n}, how many relations, reflexive relations, symmetric relations and equivalence relations are there on ${A}?`,
    a: `All relations: 2<sup>${n}<sup>2</sup></sup>, since each of the ${n}<sup>2</sup> pairs of ${AxA} is independently in or out. Reflexive: 2<sup>${n}<sup>2</sup>−${n}</sup>, the ${n} self-pairs being forced in. Symmetric: 2<sup>${n}(${n}+1)/2</sup>. Equivalence relations: ${Bn(n)}, the ${n}-th Bell number (1, 2, 5, 15, 52, …). Relations from ${A} to ${B} with |${B}| = ${m}: 2<sup>${m}${n}</sup>`,
    why: 'On a 3-element set: 2<sup>9</sup> = 512 relations, 2<sup>6</sup> = 64 reflexive ones and 5 equivalence relations, of which 2 contain the pair (1, 2).',
    say: null,
  },
  // p. 48
  {
    topic: 0,
    kind: 'remember',
    q: `How do you prove that ${aRb} ⟺ (${a} − ${b}) is divisible by ${n} is an equivalence relation on ℤ?`,
    a: `Reflexive: ${a} − ${a} = 0 = ${n} · 0. Symmetric: ${a} − ${b} = ${n}${k} gives ${b} − ${a} = ${n}(−${k}). Transitive: ${a} − ${b} = ${n}${sub(k, '1')} and ${b} − ${c} = ${n}${sub(k, '2')} add to ${a} − ${c} = ${n}(${sub(k, '1')} + ${sub(k, '2')}), the middle term ${b} cancelling. Its classes are the residue classes [0], [1], …, [${n} − 1], which partition ℤ into exactly ${n} buckets`,
    why: `Of ${a} ≤ ${b}, ${a} < ${b}, |${a}| = ${b} and “${a} − ${b} divisible by 3” on ℤ, only the last is an equivalence relation: congruence modulo 3.`,
    say: null,
  },
  // pp. 52–54
  {
    topic: 0,
    kind: 'mixup',
    q: 'Symmetric and antisymmetric: opposites?',
    a: `No. A relation can be both (the identity relation), neither, or one without the other, and “not symmetric” does not imply “antisymmetric”. ≤ on ℤ is reflexive, transitive and antisymmetric: a partial order, the classic look-alike of an equivalence relation`,
    why: `Perpendicularity of lines is symmetric only: no line is perpendicular to itself, and ${sub(I('ℓ'), '1')} ⊥ ${sub(I('ℓ'), '2')}, ${sub(I('ℓ'), '2')} ⊥ ${sub(I('ℓ'), '3')} give ${sub(I('ℓ'), '1')} ∥ ${sub(I('ℓ'), '3')}; parallelism is its equivalence cousin.`,
    say: null,
  },
  // pp. 50, 52–54
  {
    topic: 0,
    kind: 'mistake',
    q: 'The empty relation on a non-empty set: which properties does it have?',
    a: 'Symmetric and transitive, vacuously: with no pair present the “if” is never triggered, so no counterexample can exist. Not reflexive, since every self-pair is missing. “Empty, so no properties” is the most popular wrong answer, and “an equivalence relation” forgets reflexivity',
    why: 'On {<i>x</i>, <i>y</i>} the empty relation is symmetric and transitive but not reflexive.',
    say: 'Empty relation = Symmetric & Transitive for free, never Reflexive.',
  },
  // pp. 45, 49, 53
  {
    topic: 0,
    kind: 'mistake',
    q: `A relation contains some self-pairs ${pair(a, a)}. Is it reflexive?`,
    a: `Only if ${pair(a, a)} ∈ ${R} for every element of ${A}: finding a few self-pairs and stopping is the commonest slip. And the property depends on the set: the same list of pairs can be reflexive on ${A} and fail on a larger set, whose new elements bring new self-loops to satisfy, so always state the set`,
    why: 'On {1, 2, 3, 4}, {(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1), (3, 4)} is reflexive and transitive, but (4, 3) is missing, so it is not symmetric.',
    say: null,
  },
  // pp. 48, 50, 53
  {
    topic: 0,
    kind: 'shortcut',
    q: 'What is the fastest way to classify a relation, or to count relations of a type?',
    a: `Test reflexive first: it is the cheapest check, and one missing ${pair(a, a)} kills equivalence at once. For symmetric and transitive, hunt for one counterexample instead of verifying every pair. For counts, memorise the three exponents: relations ${n}<sup>2</sup>, reflexive ${n}<sup>2</sup> − ${n}, symmetric ${fr(`${n}(${n} + 1)`, '2')}`,
    why: 'On {1, 2, 3}, {(1, 2), (2, 3), (1, 3)}: (1, 1) is absent, so no equivalence; (2, 1) is absent, so not symmetric; the one chain gives (1, 3), which is present: transitive only.',
    say: null,
  },

  // ── Topic 02 · Types of Functions ──
  // pp. 55–56, 64
  {
    topic: 1,
    kind: 'remember',
    q: 'What is a function, and when is it one-one or many-one?',
    a: `${f} : ${A} → ${B} gives each input exactly one output, never zero and never two: ${A} is the domain, ${B} the codomain. One-one (injective): ${fx1} = ${fx2} ⟹ ${x1} = ${xx2}, so different inputs give different outputs, as with Aadhaar numbers. Many-one: some ${x1} ≠ ${xx2} share an output; suspect it whenever you see a ± symmetry or an even power`,
    why: 'Squaring is many-one: +2 and −2 both map to 4.',
    say: 'ONE-one ⇒ different stay different; ONTO ⇒ nothing left out.',
  },
  // pp. 55–57, 64
  {
    topic: 1,
    kind: 'remember',
    q: 'When is a function onto, into or bijective?',
    a: `Onto (surjective): every ${y} ∈ ${B} has some ${x} ∈ ${A} with ${fx} = ${y}, i.e. ${RANGE(f)} = ${B}, nothing left out. Into: ${RANGE(f)} ⊊ ${B}, some codomain elements never reached. Bijective: one-one and onto, a flawless pairing; the bijections are precisely the invertible functions`,
    why: `${f} : ℝ → ℝ, ${fx} = ${x2} is into: no negative number is ever an output.`,
    say: 'Bijective ⇒ both ⇒ invertiBle.',
  },
  // pp. 56, 60, 64
  {
    topic: 1,
    kind: 'remember',
    q: 'The same rule on different sets: can its type change?',
    a: `Yes: the type depends entirely on the declared domain and codomain. ${x2} is into as ℝ → ℝ, onto as ℝ → [0,${NB}∞), and bijective as [0,${NB}∞) → [0,${NB}∞). “Is this function onto?” is an incomplete question until ${B} is fixed`,
    why: `${x2} + 1 is many-one into as ℝ → ℝ but many-one onto as ℝ → [1,${NB}∞): the one-one verdict never changed.`,
    say: 'Type depends on both domain and codomain: change the set, change the answer.',
  },
  // pp. 58–59
  {
    topic: 1,
    kind: 'remember',
    q: 'How do you test a function for one-one and for onto?',
    a: `One-one: assume ${fx1} = ${fx2} and force ${x1} = ${xx2}; or show ${I('f′')} keeps one sign, so ${f} is strictly monotonic; or use the horizontal-line test. Onto: solve ${y} = ${fx} for ${x} and ask whether every ${y} ∈ ${B} has an admissible ${x} in ${A}; equivalently compare ${RANGE(f)} with ${B}`,
    why: `For ${fx} = ${fr(`${x} + 3`, `${x} − 2`)} from ℝ${NB}∖${NB}{2} to ℝ${NB}∖${NB}{1}: ${x} = ${fr(`2${y} + 3`, `${y} − 1`)} exists for every ${y} ≠ 1, and it is never 2, which would need 3 = −2.`,
    say: null,
  },
  // pp. 56–58, 60, 64
  {
    topic: 1,
    kind: 'remember',
    q: `For |${A}| = ${n} and |${B}| = ${m}, how many functions ${A} → ${B} are there, and how many one-one, onto and bijective ones?`,
    a: `All functions: ${m}<sup>${n}</sup>. One-one: ${NP(m, n)} = ${fr(`${m}!`, `(${m} − ${n})!`)}, only if ${m} ≥ ${n}. Onto: ${ONTO}, only if ${n} ≥ ${m}. Bijective: ${n}!, only if ${m} = ${n}. A one-one map from a finite set to itself is automatically bijective, and vice versa`,
    why: `${I('X')} with 4 elements and ${I('Y')} with 5: 5<sup>4</sup> = 625 functions ${I('X')} → ${I('Y')}, ${NP('5', '4')} = 120 one-one ones, and 240 onto functions ${I('Y')} → ${I('X')}.`,
    say: null,
  },
  // pp. 58, 61, 64
  {
    topic: 1,
    kind: 'remember',
    q: 'Which real polynomials ℝ → ℝ are onto, and what makes a function one-one at a glance?',
    a: `Odd degree ⇒ onto: it is continuous and runs from −∞ to +∞, so it takes every value. Even degree ⇒ into, never onto ℝ. Strictly monotonic ⇒ one-one`,
    why: `${x}<sup>3</sup> − 3${x} is onto but many-one (${of(f, '0')} = ${of(f, '√3')} = 0); restricted to [1,${NB}∞) → [−2,${NB}∞) it is a bijection.`,
    say: null,
  },
  // pp. 63–64
  {
    topic: 1,
    kind: 'mixup',
    q: 'An into function: is it a valid function?',
    a: 'Yes: into simply means not onto. Do not confuse it with “not a function”, a rule that gives some input no output or two; check that the rule is a function first, then classify it',
    why: `Asked which of ${x2}, ${x}<sup>3</sup>, ${e}<sup>${x}</sup> and ${sinx} is a bijection ℝ → ℝ, ${e}<sup>${x}</sup> tempts most: it is one-one but into, with range (0,${NB}∞). Only ${x}<sup>3</sup> works.`,
    say: null,
  },
  // pp. 63–64
  {
    topic: 1,
    kind: 'mistake',
    q: 'From a 3-element set to a 2-element set: how many functions, and how many one-one functions?',
    a: `2<sup>3</sup> = 8 functions, each of the 3 inputs choosing one of 2 images (6 multiplies instead of exponentiating; 9 swaps base and exponent). One-one: none, since the domain is bigger than the codomain. Using ${m}<sup>${n}</sup> for one-one (it is ${NP(m, n)}) and ignoring feasibility are the counting blunders`,
    why: `Likewise no onto function exists when the codomain is bigger, ${m} > ${n}.`,
    say: null,
  },
  // pp. 63–64
  {
    topic: 1,
    kind: 'mistake',
    q: `${f} : ℕ → ℕ, ${of(f, n)} = ${n} + 1: is it bijective?`,
    a: `No: one-one but not onto. 1 ∈ ℕ has no preimage, since it would need ${n} = 0 ∉ ℕ; on ℤ the same shift would be bijective. The other listed slips: declaring “onto” without stating the codomain, and forgetting that even powers, |${x}| and trigonometric functions are many-one`,
    why: `${x2} − 4${x} + 5 = (${x} − 2)<sup>2</sup> + 1 on ℝ is many-one and into: its range is [1,${NB}∞), and ${of(f, '1')} = ${of(f, '3')} = 2.`,
    say: null,
  },
  // pp. 61, 64
  {
    topic: 1,
    kind: 'shortcut',
    q: 'What are the fastest checks for one-one and onto?',
    a: `For a differentiable ${f}, check monotonicity first: if ${I('f′')} keeps one sign, ${f} is one-one, no algebra. For real polynomials, odd degree ⇒ onto and even degree ⇒ into. The pigeonhole check: |${A}| > |${B}| makes one-one impossible, |${A}| < |${B}| makes onto impossible`,
    why: `${x}<sup>3</sup> + 1: ${I('f′')}(${x}) = 3${x2} ≥ 0, zero only at a point, so it is strictly increasing; it has odd degree, so it is onto: bijective.`,
    say: null,
  },

  // ── Topic 03 · Composition and Inverse of Functions ──
  // pp. 65–68, 73–74
  {
    topic: 2,
    kind: 'remember',
    q: `What is ${gof}, and when is it defined?`,
    a: `(${gof})(${x}) = ${g}(${fx}): ${f} acts first and hands its output to ${g}; read right to left, innermost first. It needs ${RANGE(f)} ⊆ ${DOM(g)}, so the handoff can happen. Composition is not commutative (${gof} ≠ ${fog} in general) but it is associative: ${o(h, `(${gof})`)} = ${o(`(${o(h, g)})`, f)}`,
    why: `${fx} = 3${x} + 1 and ${gx} = ${x2} − 2: ${fog} = 3${x2} − 5 but ${gof} = 9${x2} + 6${x} − 1; at ${x} = 2 they give 7 and 47.`,
    say: 'Innermost first for reading composites.',
  },
  // pp. 66–68, 74
  {
    topic: 2,
    kind: 'remember',
    q: `When does ${f} have an inverse, and what are its properties?`,
    a: `${fi} exists ⟺ ${f} is bijective, and it is defined by ${o(fi, f)} = ${IA} and ${o(f, fi)} = ${IB}. It is unique; (${fi})<sup>−1</sup> = ${f}; ${DOM(fi)} = ${RANGE(f)} and ${RANGE(fi)} = ${DOM(f)}. A many-one ${f} makes the undo ambiguous, and a non-onto ${f} leaves targets with nothing to return to`,
    why: `${x2} has no inverse on ℝ (should ${fi}(4) be 2 or −2?), but on [0,${NB}∞) it inverts to √${x}.`,
    say: 'No bijection, no inverse.',
  },
  // pp. 68–70, 74
  {
    topic: 2,
    kind: 'remember',
    q: 'How do you find an inverse, and how do you verify one?',
    a: `Swap-and-solve: check bijectivity first (restricting if needed), write ${y} = ${fx}, solve for ${x} in terms of ${y}, swap ${y} → ${x} to get ${fi}(${x}), and state its domain, the range of ${f}. To verify a claimed inverse ${g}, check both ${f}(${gx}) = ${x} and ${g}(${fx}) = ${x}: one alone guarantees only a one-sided inverse`,
    why: `${fx} = ${fr(`2${x} − 1`, `${x} − 3`)} from ℝ${NB}∖${NB}{3} to ℝ${NB}∖${NB}{2} gives ${fi}(${x}) = ${fr(`3${x} − 1`, `${x} − 2`)}, domain ℝ${NB}∖${NB}{2}.`,
    say: null,
  },
  // pp. 66, 69, 74
  {
    topic: 2,
    kind: 'remember',
    q: `What is (${gof})<sup>−1</sup>, and why?`,
    a: `${o(fi, gi)}: undo the last-applied function first. Proof: (${o(fi, gi)}) ∘ (${gof}) = ${o(o(fi, `(${o(gi, g)})`), f)} = ${o(o(fi, IB), f)} = ${IA}, the same holds the other way round, and inverses are unique`,
    why: 'Socks then shoes to dress; shoes first, then socks, to undress.',
    say: 'Socks and shoes ⇒ undo in reverse order.',
  },
  // p. 68
  {
    topic: 2,
    kind: 'remember',
    q: `Which properties does ${gof} inherit from ${f} and ${g}, and what does ${gof} say about them?`,
    a: `Both injective ⇒ ${gof} injective; both surjective ⇒ surjective; both bijective ⇒ bijective. Partial converse: ${gof} injective ⇒ ${f} injective; ${gof} surjective ⇒ ${g} surjective`,
    why: `The invertible functions from an ${n}-element set to itself are its bijections: ${n}! of them.`,
    say: null,
  },
  // pp. 68, 72–74
  {
    topic: 2,
    kind: 'mixup',
    q: `Is ${fi}(${x}) the same as ${fr('1', fx)}?`,
    a: `No: ${fi} is the inverse function, never the reciprocal ${fr('1', fx)}. The same superscript −1 means two different things on functions and on numbers`,
    why: `${fx} = 4${x} − 9: ${fi}(3) = 3, since ${of(f, '3')} = 3; ${fr('1', of(f, '3'))} = ${fr('1', '3')} is the reciprocal trap.`,
    say: `Inverse undoes, reciprocal divides: keep ${fi} and ${fr('1', f)} apart.`,
  },
  // pp. 71–73
  {
    topic: 2,
    kind: 'mistake',
    q: `If ${f} and ${g} are bijections, is (${gof})<sup>−1</sup> = ${o(gi, fi)}?`,
    a: `No: ${o(fi, gi)}. Keeping the same order is the most common error: it tries to remove the socks before the shoes. The other listed slips: treating composition as commutative, inverting a non-bijective function without restricting it, and forgetting that the domain of ${fi} is the range of ${f}`,
    why: `${fx} = ${x}<sup>3</sup> + 2 and ${gx} = 2${x} − 1: (${gof})<sup>−1</sup>(${x}) = (${fr(`${x} − 3`, '2')})<sup>1/3</sup>, found directly and again as ${fi}(${gi}(${x})).`,
    say: null,
  },
  // pp. 70, 73
  {
    topic: 2,
    kind: 'shortcut',
    q: `What are the fastest ways to find ${fi}, to check it, and to get a single value ${fi}(${c})?`,
    a: `For linear and rational functions, swap-and-solve, or peel the operations off in reverse. To verify, check that ${f}(${fi}(${x})) collapses to ${x}. For one value ${fi}(${c}), just solve ${fx} = ${c}. To spot a self-inverse, compose the function with itself and look for ${x}`,
    why: `${fx} = 7 − 3${x} multiplies by −3, then adds 7; undoing it subtracts 7, then divides by −3: ${fi}(${x}) = ${fr(`7 − ${x}`, '3')}. And ${ONE_X} is its own inverse.`,
    say: null,
  },

  // ── Topic 04 · Domain and Range of Real Functions ──
  // pp. 75–76, 80
  {
    topic: 3,
    kind: 'remember',
    q: 'Where can a real function fail to be defined, and how do you find its domain?',
    a: 'Three illegal moves: a denominator equal to 0, an even root of a negative number, a logarithm of a non-positive number. Write the condition each imposes (≠ 0, ≥ 0, > 0), solve each, and intersect: the function exists only where all hold together. Unless told otherwise the domain is the natural domain, the largest subset of ℝ on which the formula makes sense',
    why: `√(${x} − 3) + ${fr('1', `${x} − 5`)}: ${x} ≥ 3 and ${x} ≠ 5, so the domain is [3,${NB}5) ∪ (5,${NB}∞).`,
    say: 'Root non-negative, Log strictly positive, Denominator never zero.',
  },
  // pp. 76, 80
  {
    topic: 3,
    kind: 'remember',
    q: `What does each form demand of ${x}?`,
    a: `A polynomial: nothing, all of ℝ. ${fr(of(P, x), of(I('Q'), x))}: ${of(I('Q'), x)} ≠ 0. An even root of ${gx}: ${gx} ≥ 0, but ${gx} > 0, strictly, when the root sits in a denominator. log<sub>${a}</sub>${NB}${gx}: ${gx} > 0, with the base ${a} > 0, ${a} ≠ 1`,
    why: `${fr('1', `√(${x} − |${x}|)`)} has an empty domain: ${x} − |${x}| ≤ 0 for every ${x}, and a root in a denominator needs > 0.`,
    say: 'Constraints meet (intersect), they don’t mingle (union).',
  },
  // pp. 75, 76–77, 80
  {
    topic: 3,
    kind: 'remember',
    q: `How do you find a range by the ${y}-method?`,
    a: `Put ${y} = ${fx}, solve for ${x} in terms of ${y}, and keep the values of ${y} for which that ${x} is real and lies in the domain: the machine run backwards. The range depends on the domain, and it is not automatically the codomain`,
    why: `${y} = ${fr(x, `1 + ${x2}`)} gives ${y}${x2} − ${x} + ${y} = 0; a real ${x} needs 1 − 4${sq(y)} ≥ 0, so the range is [−${HALF},${NB}${HALF}].`,
    say: null,
  },
  // pp. 76–77, 80
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you find the range of a quadratic over a quadratic?',
    a: `Cross-multiply into a quadratic in ${x} and force its discriminant ≥ 0; then check on its own the value of ${y} that makes the ${x2} coefficient vanish, where the equation is only linear`,
    why: `${fr(`${x2} − ${x} + 1`, `${x2} + ${x} + 1`)}: (${y} − 1)${x2} + (${y} + 1)${x} + (${y} − 1) = 0, and the discriminant gives (3 − ${y})(3${y} − 1) ≥ 0, range [${fr('1', '3')},${NB}3]; ${y} = 1 gives ${x} = 0, already inside.`,
    say: null,
  },
  // pp. 76, 79–80
  {
    topic: 3,
    kind: 'remember',
    q: `What are the standard ranges, and the range of ${fr(`${a}${x} + ${b}`, `${c}${x} + ${d}`)}?`,
    a: `${x2} and |${x}|: [0,${NB}∞); ${ONE_X}: ℝ${NB}∖${NB}{0}; ${e}<sup>${x}</sup>: (0,${NB}∞); ln${NB}${x}: ℝ; ${sinx} and ${cosx}: [−1,${NB}1]. ${fr(`${a}${x} + ${b}`, `${c}${x} + ${d}`)} has range ℝ${NB}∖${NB}{${fr(a, c)}} when ${c} ≠ 0 and ${I('ad')} ≠ ${I('bc')}: the value ${fr(a, c)} is never attained`,
    why: `${fr(`2${x} + 3`, `${x} − 1`)} has range ℝ${NB}∖${NB}{2}.`,
    say: null,
  },
  // pp. 77, 79–80
  {
    topic: 3,
    kind: 'mixup',
    q: `Domain of log(${x2} − 4): is the condition ${x2} − 4 ≥ 0?`,
    a: `No: inside a log the argument must be strictly > 0; ≥ 0 is the rule under a root. ${x2} − 4 > 0 gives (−∞,${NB}−2) ∪ (2,${NB}∞), while ≥ 0 would wrongly include ±2, where log 0 is undefined`,
    why: `log<sub>10</sub>(1 − ${x}) needs 1 − ${x} > 0: ${x} < 1, not ${x} ≤ 1.`,
    say: null,
  },
  // pp. 78, 80
  {
    topic: 3,
    kind: 'mistake',
    q: `Is log<sub>1/2</sub>${NB}${t} ≥ 0 the same as ${t} ≥ 1?`,
    a: `No: for a base below 1 the inequality flips, so log<sub>1/2</sub>${NB}${t} ≥ 0 ⟺ 0 < ${t} ≤ 1. Missing the flip is where most students lose such a problem`,
    why: `√(log<sub>1/2</sub>(${fr(`${x} − 2`, `${x} + 1`)})) needs the argument > 0 (${x} < −1 or ${x} > 2) and ≤ 1 (${x} > −1): the domain is (2,${NB}∞).`,
    say: 'Base below one ⇒ flip the log inequality.',
  },
  // pp. 79–80
  {
    topic: 3,
    kind: 'mistake',
    q: `What is the domain of √(${x} − 2) + √(6 − ${x})?`,
    a: `[2,${NB}6]: intersect ${x} ≥ 2 and ${x} ≤ 6. (2,${NB}6) wrongly uses strict inequalities, though roots allow equality; (−∞,${NB}2] ∪ [6,${NB}∞) takes the union instead of the intersection. And never call the codomain the range: “${f} : ℝ → ℝ” does not mean every real is hit`,
    why: `${fr('1', `2 − sin${NB}3${x}`)} has range [${fr('1', '3')},${NB}1]: the denominator lies in [1,${NB}3], and both bounds are attained.`,
    say: null,
  },
  // pp. 79–80
  {
    topic: 3,
    kind: 'shortcut',
    q: 'What are the fastest routes to a range?',
    a: `For ${fr(`${a}${x} + ${b}`, `${c}${x} + ${d}`)}, the range is at once ℝ${NB}∖${NB}{${fr(a, c)}}, no algebra; for sin and cos, push the bound [−1,${NB}1] through the operations rather than inverting; for a quadratic over a quadratic, go straight to the discriminant`,
    why: `${fr(`${x} − 3`, `${x} + 3`)} never takes the value ${fr('1', '1')} = 1; it takes 0 (at ${x} = 3), −1 (at ${x} = 0) and 3.`,
    say: null,
  },

  // ── Topic 05 · Standard Real Functions and Their Graphs ──
  // pp. 82–84, 88
  {
    topic: 4,
    kind: 'remember',
    q: `What do |${x}| and sgn(${x}) do, and what are their ranges?`,
    a: `|${x}| = ${x} for ${x} ≥ 0 and −${x} otherwise: the distance from zero, a V on the origin, range [0,${NB}∞). sgn(${x}) = ${fr(x, `|${x}|`)} for ${x} ≠ 0 and 0 at ${x} = 0: it keeps only the sign, range {−1, 0, 1}. Identities: |${x}|<sup>2</sup> = ${x2}, |${I('xy')}| = |${x}| |${y}|, ||${x}| − |${y}|| ≤ |${x} ± ${y}| ≤ |${x}| + |${y}|, and sgn(${x}) · |${x}| = ${x}`,
    why: `2 + sgn(${x}) has range {1, 2, 3}, a three-value set, not the interval [1,${NB}3].`,
    say: null,
  },
  // pp. 82, 84–85, 88
  {
    topic: 4,
    kind: 'remember',
    q: `What are ${fl(x)} and ${fp(x)}?`,
    a: `${fl(x)} is the greatest integer ≤ ${x}: it rounds down, negatives too, so ${fl('−2.3')} = −3; its range is ℤ, with ${x} − 1 < ${fl(x)} ≤ ${x} and ${fl(`${x} + ${n}`)} = ${fl(x)} + ${n} for an integer ${n}. ${fp(x)} = ${x} − ${fl(x)} lies in [0,${NB}1), a sawtooth of period 1. Both jump at every integer, and ${fl(x)} + ${fl(`−${x}`)} is 0 on ℤ and −1 off it`,
    why: `${fl(x)} = 3 means ${x} ∈ [3,${NB}4), an interval, not the single value 3.`,
    say: 'Floor falls (rounds down, negatives too).',
  },
  // pp. 82–84, 87–88
  {
    topic: 4,
    kind: 'remember',
    q: `What are the domains and ranges of ${a}<sup>${x}</sup> and log<sub>${a}</sub>${NB}${x}?`,
    a: `${a}<sup>${x}</sup> (${a} > 0, ${a} ≠ 1): domain ℝ, range (0,${NB}∞), never 0 and never touching the ${x}-axis. log<sub>${a}</sub>${NB}${x}, its inverse: domain (0,${NB}∞), range ℝ. log<sub>${a}</sub>(${I('xy')}) = log<sub>${a}</sub>${NB}${x} + log<sub>${a}</sub>${NB}${y}, log<sub>${a}</sub>${NB}${x} = ${fr(`log<sub>${b}</sub>${NB}${x}`, `log<sub>${b}</sub>${NB}${a}`)}, and ${a}<sup>log<sub>${a}</sub>${NB}${x}</sup> = ${x}`,
    why: `log<sub>2</sub>(log<sub>3</sub>${NB}${x}) needs log<sub>3</sub>${NB}${x} > 0, so ${x} > 3<sup>0</sup> = 1, which already gives ${x} > 0.`,
    say: 'Log lives on the positive side; exp stays above the axis.',
  },
  // p. 84
  {
    topic: 4,
    kind: 'remember',
    q: 'In what order do you build a graph from a base graph?',
    a: `Horizontal shift ${of(f, `${x} − ${h}`)}, then the stretch ${a}${fx}, then a reflection, −${fx} in the ${x}-axis or ${fmx} in the ${y}-axis, and last the vertical shift ${fx} + ${k}`,
    why: `${y} = |${x} − 2| + 1 is the V of |${x}| slid right by 2 and lifted by 1: vertex (2, 1), minimum value 1.`,
    say: null,
  },
  // pp. 84, 87–88
  {
    topic: 4,
    kind: 'mixup',
    q: `${y} = |${fx}| and ${y} = ${of(f, `|${x}|`)}: the same graph?`,
    a: `No. ${y} = |${fx}| flips everything below the ${x}-axis upward; ${y} = ${of(f, `|${x}|`)} keeps the half ${x} ≥ 0 and mirrors it to the left, so the graph becomes symmetric about the ${y}-axis. Different operations, different graphs`,
    why: `Reflection in ${y} = ${x} is neither of them: it is the inverse-function reflection.`,
    say: `|${f}| flips, ${of(f, `|${x}|`)} mirrors.`,
  },
  // pp. 85, 87–88
  {
    topic: 4,
    kind: 'mistake',
    q: `Is ${fl('−3.7')} + ${fl('3.7')} = 0?`,
    a: `No: −1, since ${fl('−3.7')} = −4 and ${fl('3.7')} = 3. 0 assumes ${fl(`−${x}`)} = −${fl(x)}, false off the integers. The other listed slips: ${fl('−2.3')} = −2, treating the discrete ranges of sgn and ${fl(x)} as intervals, and forgetting that log needs ${x} > 0 while ${a}<sup>${x}</sup> > 0 always`,
    why: `${fl('−0.5')} = −1 and ${fp('−0.5')} = 0.5.`,
    say: null,
  },
  // pp. 86, 88
  {
    topic: 4,
    kind: 'shortcut',
    q: 'How do you crack a floor or fractional-part problem?',
    a: `Split at once into “${x} an integer” and “${x} not an integer”: almost every such problem opens that way. For an equation of ${fp(x)} against a line, sketch the sawtooth and count the crossings`,
    why: `${fl(x)} + ${fp(`−${x}`)}: for ${x} ∈ ℤ it is ${x}; otherwise, with ${x} = ${n} + ${I('r')}, it is ${n} + 1 − ${I('r')} ∈ (${n},${NB}${n} + 1), so the range is all of ℝ.`,
    say: null,
  },

  // ── Topic 06 · Even, Odd, and Periodic Functions ──
  // pp. 90–91, 93, 95
  {
    topic: 5,
    kind: 'remember',
    q: 'What are even and odd functions?',
    a: `Even: ${fmx} = ${fx}, mirror symmetry about the ${y}-axis (${x2}, |${x}|, ${cosx}, constants). Odd: ${fmx} = −${fx}, symmetry about the origin (${x}, ${x}<sup>3</sup>, ${sinx}, sgn${NB}${x}, tan${NB}${x}). Both need a domain symmetric about 0. An odd function defined at 0 has ${of(f, '0')} = 0, since ${of(f, '0')} = −${of(f, '0')}`,
    why: `Most functions are neither: ${x} + ${x2} gives −${x} + ${x2}, which is neither of ±(${x} + ${x2}).`,
    say: 'Even = mirror, Odd = origin.',
  },
  // pp. 91–92, 95
  {
    topic: 5,
    kind: 'remember',
    q: `How do evenness and oddness combine, and how does any ${f} split into the two?`,
    a: `even ± even = even; odd ± odd = odd; even × even = even; odd × odd = even, the two sign flips cancelling; even × odd = odd. On a domain symmetric about 0, ${fx} = ${fr(`${fx} + ${fmx}`, '2')} + ${fr(`${fx} − ${fmx}`, '2')}: an even part plus an odd part, uniquely`,
    why: `${e}<sup>${x}</sup> = cosh${NB}${x} + sinh${NB}${x}: cosh${NB}${x} = ${fr(`${e}<sup>${x}</sup> + ${e}<sup>−${x}</sup>`, '2')} is its even part, sinh${NB}${x} = ${fr(`${e}<sup>${x}</sup> − ${e}<sup>−${x}</sup>`, '2')} its odd part.`,
    say: 'Only-even-powers ⇒ even; only-odd-powers ⇒ odd.',
  },
  // pp. 90–91, 93, 95
  {
    topic: 5,
    kind: 'remember',
    q: 'What is a period, and what are the standard periods?',
    a: `${f}(${x} + ${T}) = ${fx} for every ${x}; the fundamental period is the smallest such ${T} > 0. ${sinx}, ${cosx}: 2π; tan${NB}${x}, cot${NB}${x}: π; |${sinx}|, |${cosx}|: π; ${fp(x)}: 1. A constant function satisfies the rule for every ${T}: periodic, but with no fundamental period`,
    why: `sin<sup>2</sup>${NB}${x} = ${fr(`1 − cos${NB}2${x}`, '2')} has period π, not 2π.`,
    say: null,
  },
  // pp. 91–93, 95
  {
    topic: 5,
    kind: 'remember',
    q: `What is the period of ${of(f, `${a}${x} + ${b}`)}, and of a sum of periodic functions?`,
    a: `${of(f, `${a}${x} + ${b}`)} has period ${fr(T, `|${a}|`)} when ${f} has period ${T}. ${f} ± ${g}, with periods ${T1} and ${T2}, has the period LCM(${T1}, ${T2}) provided ${fr(T1, T2)} is rational; then test whether a smaller value also works, especially after a modulus. With an irrational ratio there is no common period`,
    why: `sin${NB}3${x} + cos${NB}2${x}: periods ${fr('2π', '3')} and π, fundamental period 2π.`,
    say: 'Modulus may halve the period.',
  },
  // pp. 92–93
  {
    topic: 5,
    kind: 'mixup',
    q: `Is ${x}|${x}| even, because of the modulus?`,
    a: `No: odd. |${x}| is even, the lone factor ${x} is odd, and odd × even = odd. Likewise ${x}${NB}cos${NB}${x} is odd, and it is not periodic: the growing factor ${x} breaks the repetition`,
    why: `Of ${sinx}, ${x}|${x}|, ${cosx} + ${x2} and ${x}<sup>3</sup>, only ${cosx} + ${x2} is even.`,
    say: null,
  },
  // pp. 92–94
  {
    topic: 5,
    kind: 'mistake',
    q: `Is the fundamental period of |${sinx}| + |${cosx}| equal to π?`,
    a: `No: ${fr('π', '2')}. π is a period, but a shift by ${fr('π', '2')} swaps sine and cosine up to sign and the moduli erase the sign, so ${f}(${x} + ${fr('π', '2')}) = ${fx}. A modulus can shrink the period: always test the half-period after one. The partner slip: odd × odd is even, not odd`,
    why: `Adding ${fp(x)}, of period 1, leaves no common period: the ratio of ${fr('π', '2')} to 1 is irrational.`,
    say: null,
  },
  // pp. 93–95
  {
    topic: 5,
    kind: 'shortcut',
    q: 'How do you classify a polynomial, or find a period, fast?',
    a: `A polynomial is even if and only if it has only even powers, and odd if and only if it has only odd powers (no constant): read it off. For periods, turn powers of sin and cos into double angles first. And an odd function forces ${of(f, '0')} = 0: a free check`,
    why: `${x}<sup>3</sup> + ${x2} + ${x} + 1 has even part ${x2} + 1 and odd part ${x}<sup>3</sup> + ${x}.`,
    say: null,
  },

  // ── Topic 07 · Algebra of Functions and Functional Equations ──
  // pp. 95–96, 101
  {
    topic: 6,
    kind: 'remember',
    q: `How are ${f} ± ${g}, ${I('fg')} and ${fr(f, g)} defined, and on what domain?`,
    a: `Point by point: (${f} ± ${g})(${x}) = ${fx} ± ${gx}, (${I('fg')})(${x}) = ${fx}${NB}${gx}, (${fr(f, g)})(${x}) = ${fr(fx, gx)}. ${f} ± ${g} and ${I('fg')} live on ${sub(I('D'), f)} ∩ ${sub(I('D'), g)}; ${fr(f, g)} on that overlap with the zeros of ${g} deleted`,
    why: `${fx} = ${ONE_X} and ${gx} = √${x}: ${f} · ${g} needs ${x} ≥ 0 and ${x} ≠ 0, so ${x} > 0.`,
    say: 'Combinations live on the overlap.',
  },
  // pp. 96, 99, 101
  {
    topic: 6,
    kind: 'remember',
    q: 'Which functions solve the standard functional equations?',
    a: `The regular solutions: ${f}(${x} + ${y}) = ${fx} + ${of(f, y)} (Cauchy) gives ${k}${x}; ${f}(${x} + ${y}) = ${fx}${of(f, y)} gives ${a}<sup>${x}</sup>; ${f}(${I('xy')}) = ${fx} + ${of(f, y)} gives ${k}${NB}log${NB}${x}; ${f}(${I('xy')}) = ${fx}${of(f, y)} gives ${x}<sup>${n}</sup>; ${fx}${of(f, ONE_X)} = ${fx} + ${of(f, ONE_X)} gives 1 ± ${x}<sup>${n}</sup>`,
    why: `${f}(${x} + ${y}) = ${fx}${of(f, y)} with ${of(f, '1')} = 3: ${fx} = 3<sup>${x}</sup> and ${of(f, '3')} = 27, not 3${of(f, '1')} = 9.`,
    say: 'Sum→sum: line. Sum→product: exp. Product→sum: log. Product→product: power.',
  },
  // pp. 96–97, 101
  {
    topic: 6,
    kind: 'remember',
    q: `How do you solve an equation linking ${fx} with ${of(f, ONE_X)} or ${of(f, `1 − ${x}`)}?`,
    a: `Substitute special values for anchors (${x} = ${y} = 0 for ${of(f, '0')}, ${x} = ${y} = 1 for ${of(f, '1')}); replace ${x} by ${ONE_X} or 1 − ${x} to get a partner equation; treat the pair as simultaneous linear equations and eliminate; verify by back-substitution`,
    why: `${fx} + 2${of(f, ONE_X)} = 3${x} and its partner ${of(f, ONE_X)} + 2${fx} = ${fr('3', x)} give 3${fx} = ${fr('6', x)} − 3${x}, so ${fx} = ${fr('2', x)} − ${x}.`,
    say: 'One equation, two unknowns ⇒ substitute to get a twin.',
  },
  // p. 97
  {
    topic: 6,
    kind: 'remember',
    q: `Why does ${of(f, `${x} + ${y}`)} = ${fx} + ${of(f, y)} give ${fx} = ${k}${x}?`,
    a: `${x} = ${y} = 0 gives ${of(f, '0')} = 0. With ${k} = ${of(f, '1')}, additivity gives ${of(f, `${n}${x}`)} = ${n}${fx} and ${of(f, n)} = ${n}${k}; then ${of(f, fr(x, n))} = ${fr('1', n)}${fx}, so ${of(f, fr(I('p'), I('q')))} = ${fr(I('p'), I('q'))}${k} for every rational. Assuming ${f} is continuous, ${fx} = ${k}${x} for every real ${x}`,
    why: `With ${of(f, '1')} = 5, ${fx} = 5${x} and ${of(f, '4')} = 20.`,
    say: null,
  },
  // pp. 99–100
  {
    topic: 6,
    kind: 'mixup',
    q: `${of(f, I('xy'))} = ${fx} + ${of(f, y)}: is ${f} of the form ${k}${x}, ${x}<sup>${n}</sup>, ${k}${NB}log${NB}${x} or ${a}<sup>${x}</sup>?`,
    a: `${k}${NB}log${NB}${x}: turning products into sums is the defining property of the logarithm. Sum to sum is linear (${k}${x}), sum to product exponential (${a}<sup>${x}</sup>), product to sum logarithmic, product to product a power (${x}<sup>${n}</sup>): read the structure before solving`,
    why: `${f}(${I('xy')}) = ${fx}${of(f, y)} with ${of(f, '2')} = 4 gives ${fx} = ${x2}, so ${of(f, '8')} = 64.`,
    say: null,
  },
  // pp. 99–100
  {
    topic: 6,
    kind: 'mistake',
    q: `If 2${fx} + ${fmx} = 3${x} + 9 for all real ${x}, is ${of(f, '2')} = 15?`,
    a: `No: 9. The partner equation 2${fmx} + ${fx} = −3${x} + 9 and elimination give ${fx} = 3${x} + 3. 15 reads ${fx} = 3${x} + 9 directly, ignoring ${fmx}; 5 collapses 2${fx} + ${fmx} to 3${fx}; −3 is ${of(f, '−2')}. Never skip the second substitution, and state the continuity assumption behind a unique answer`,
    why: `Check: 2${of(f, '2')} + ${of(f, '−2')} = 18 − 3 = 15 = 3(2) + 9.`,
    say: null,
  },
  // pp. 98, 100
  {
    topic: 6,
    kind: 'shortcut',
    q: 'Which partner substitution do you reach for?',
    a: `Recognise the five standard patterns on sight first. For the elimination type, the partner is almost always ${x} → ${ONE_X} (when ${ONE_X} appears) or ${x} → 1 − ${x} (when 1 − ${x} appears). Always plug the answer back: it catches sign slips`,
    why: `2${fx} + ${of(f, `1 − ${x}`)} = ${x2}: with ${x} → 1 − ${x}, 3${fx} = 2${x2} − (1 − ${x})<sup>2</sup> = ${x2} + 2${x} − 1.`,
    say: null,
  },

  // ── Additional A · Equivalence Classes: The Two Proofs and the Completion Problem ──
  // pp. 102–103
  {
    topic: 7,
    kind: 'remember',
    q: 'Why do the classes of an equivalence relation partition the set?',
    a: `Disjoint: if ${c} ∈ [${a}] ∩ [${b}], symmetry and transitivity carry every ${x} ∈ [${a}] into [${b}] and back, so [${a}] = [${b}]: two classes are identical or disjoint. Cover: reflexivity puts ${a} in [${a}]. Hence ${xRy} ⟺ [${x}] = [${y}]. Conversely, “${x} and ${y} lie in the same block” makes any partition an equivalence relation whose classes are the blocks`,
    why: `The partition {{1, 4}, {2, 3}} gives the relation {(1, 1), (4, 4), (1, 4), (4, 1), (2, 2), (3, 3), (2, 3), (3, 2)}: eight pairs.`,
    say: 'Two classes are either identical or disjoint: never partially overlapping.',
  },
  // pp. 102–103
  {
    topic: 7,
    kind: 'remember',
    q: `How do you find the smallest equivalence relation containing a given ${R} on a finite set?`,
    a: `Draw an undirected graph, joining ${a} and ${b} whenever ${pair(a, b)} ∈ ${R} with ${a} ≠ ${b} (loops are irrelevant); find its connected components ${sub(C, '1')}, ${sub(C, '2')}, …; the answer is the union of the ${Ci} × ${Ci}. Pairs to add: ∑|${Ci}|<sup>2</sup> − |${R}|, an isolated element being a component of size 1`,
    why: `{(1, 2), (2, 3), (4, 4)} on {1, 2, 3, 4}: components {1, 2, 3} and {4}, so (9 + 1) − 3 = 7 pairs to add.`,
    say: 'Nothing smaller survives; nothing larger is needed.',
  },
  // p. 103
  {
    topic: 7,
    kind: 'mixup',
    q: 'Partitions of {1, 2, 3, 4} into two blocks of two: 6 or 3?',
    a: `3: choose one block in ${bn('4', '2')} = 6 ways, then divide by 2, since choosing either block names the same partition. With 1 + 3 splits (4) the two-block partitions number 7`,
    why: `So the partitions of {1, 2, 3, 4} number 1 + 6 + 7 + 1 = 15 = ${Bn('4')}: four, three, two and one blocks.`,
    say: null,
  },
  // pp. 50, 104
  {
    topic: 7,
    kind: 'mistake',
    q: `On {1, 2, 3}, ${R} = {(1, 2), (2, 1), (1, 3)}. Is adding the missing reverses and self-loops enough?`,
    a: `No: the chain 2–1–3 makes one component of size 3, so the completion is all 9 pairs and 9 − 3 = 6 pairs must be added, (2, 3) and (3, 2) among them. The opposite slip over-merges: adding pairs no chain forces joins classes that should stay apart`,
    why: '{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)} is already an equivalence relation: 0 pairs to add.',
    say: null,
  },
  // pp. 103–104
  {
    topic: 7,
    kind: 'shortcut',
    q: 'How many equivalence relations on {1, 2, 3, 4} put 1 and 2 in the same class?',
    a: `5: treat {1, 2} as one object and partition {{1, 2}, 3, 4}, in ${Bn('3')} = 5 ways. So 15 − 5 = 10 put them in different classes`,
    why: `[1] = {1, 2} exactly leaves {3, 4} to partition freely: ${Bn('2')} = 2 ways.`,
    say: null,
  },

  // ── Additional B · Composition: Transfer Laws, False Converses, Running Composites Backwards ──
  // p. 105
  {
    topic: 8,
    kind: 'remember',
    q: `If ${gof} is injective, what follows? And if ${gof} is surjective?`,
    a: `${gof} injective ⇒ ${f} injective: apply ${g} to ${fx1} = ${fx2} and use the injectivity of ${gof}; the proof uses nothing about ${g} beyond its being a function. ${gof} surjective ⇒ ${g} surjective: each ${y} = ${g}(${fx}) has the preimage ${fx} under ${g}`,
    why: `More precisely, ${gof} injective makes ${g} injective on the range of ${f}, the inputs that actually arise from ${f}.`,
    say: `The surjectivity of the composite is manufactured by ${g} alone.`,
  },
  // pp. 105–106
  {
    topic: 8,
    kind: 'remember',
    q: `What is the domain of ${gof}?`,
    a: `${DOM(gof)} = {${x} ∈ ${DOM(f)} ∶ ${fx} ∈ ${DOM(g)}}: start inside ${DOM(f)}, then demand that ${fx} is a legal input for ${g}. It is not ${DOM(f)} ∩ ${DOM(g)}`,
    why: `${fx} = ln${NB}${x} and ${of(g, t)} = log(${t} − 1): the composite needs ln${NB}${x} > 1, i.e. ${x} > ${e}, smaller than (0,${NB}∞).`,
    say: `Always filter by ${fx} ∈ ${DOM(g)}; never shortcut.`,
  },
  // pp. 105–107
  {
    topic: 8,
    kind: 'remember',
    q: `Given (${fog})(${x}) and ${g}, how do you recover ${f}?`,
    a: `Put ${t} = ${gx}, solve for ${x} in terms of ${t}, and rewrite the given formula in ${t}: the y-method run on symbols instead of values`,
    why: `(${fog})(${x}) = ${x2} + 6${x} + 7 with ${gx} = ${x} + 3: ${x} = ${t} − 3 gives ${of(f, t)} = ${t}<sup>2</sup> − 2.`,
    say: null,
  },
  // pp. 105, 107
  {
    topic: 8,
    kind: 'mixup',
    q: `${gof} injective: must ${g} be injective? ${gof} surjective: must ${f} be surjective?`,
    a: `No to both. ${fx} = ${e}<sup>${x}</sup> with ${of(g, t)} = ${t} for ${t} > 0 and 1 − ${t} for ${t} ≤ 0 gives ${gof} = ${e}<sup>${x}</sup>, injective, yet ${of(g, '0')} = ${of(g, '1')} = 1. The same ${f} with ${of(g, t)} = ln${NB}${t} for ${t} > 0 and 0 for ${t} ≤ 0 gives ${gof} = ${x}, onto, while ${f} misses every negative number`,
    why: `${g} misbehaves only off the range of ${f}, where ${gof} cannot see it.`,
    say: null,
  },
  // p. 107
  {
    topic: 8,
    kind: 'mistake',
    q: `${fx} = √${x}, ${gx} = ${x2} − 3. Is ${DOM(fog)} the intersection of the two domains?`,
    a: `No: it is {${x} ∶ ${x2} − 3 ≥ 0} = (−∞,${NB}−√3] ∪ [√3,${NB}∞), the inputs whose ${gx} is legal for √. The intersection [0,${NB}∞) ∩ ℝ would keep 0, where √(−3) fails. ${DOM(gof)} = [0,${NB}∞), since every √${x} is legal for ${g}`,
    why: `Check composites by the rule, not by eye: for ${fx} = ${x2} and ${gx} = 2${x} + 1, (${fog})(${x}) = (${gof})(${x}) only at ${x} = 0 and ${x} = −2.`,
    say: null,
  },
  // p. 106
  {
    topic: 8,
    kind: 'shortcut',
    q: `${fx} = ln${NB}${x} on (0,${NB}∞), ${of(g, t)} = ${t}<sup>2</sup> − 2${t}. How do you classify ${gof} and find its range fast?`,
    a: `Substitute ${t} = ln${NB}${x}, which runs over all of ℝ: (${gof})(${x}) = ${t}<sup>2</sup> − 2${t} = (${t} − 1)<sup>2</sup> − 1. Equal at ${t} = 0 and ${t} = 2 (${x} = 1 and ${x} = ${e}<sup>2</sup>): many-one. Minimum −1 at ${t} = 1 (${x} = ${e}): range [−1,${NB}∞)`,
    why: `(${gof})(1) = 0 = (${gof})(${e}<sup>2</sup>) confirms many-one concretely.`,
    say: null,
  },

  // ── Additional C · Inverses on Restricted Domains ──
  // pp. 107–108
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you invert a function that is not bijective on its natural domain?',
    a: `Restrict it: a function strictly monotonic on an interval ${I('I')} is a bijection ${I('I')} → ${of(f, I('I'))}. Cut the domain at the turning points (${I('f′')}(${x}) = 0) and breaks into monotonic branches, take each branch’s image as its codomain (the domain of that branch’s inverse), and invert branch by branch; the branch condition picks the sign of a square root`,
    why: `${x2} − 4${x} + 5 = (${x} − 2)<sup>2</sup> + 1: on [2,${NB}∞), ${fi}(${x}) = 2 + √(${x} − 1); on (−∞,${NB}2], 2 − √(${x} − 1); both on [1,${NB}∞).`,
    say: 'Choosing the correct root of a quadratic is the whole game.',
  },
  // pp. 107–108
  {
    topic: 9,
    kind: 'remember',
    q: 'How do you invert a piecewise function?',
    a: `Invert each piece separately; the domain of ${fi} is the union of the piece-images, and the breakpoints of ${fi} are the images of those of ${f}. If two piece-images overlap, some output has two preimages and ${f} was never one-one. ${fi} is the reflection of ${f} in the line ${y} = ${x}`,
    why: `${x} for ${x} ≤ 1, ${x2} on (1,${NB}2], 2${x} for ${x} > 2: images (−∞,${NB}1], (1,${NB}4], (4,${NB}∞), disjoint, so ${fi} is ${x}, √${x} and ${fr(x, '2')} on them.`,
    say: 'The overlap test is the injectivity test.',
  },
  // p. 109
  {
    topic: 9,
    kind: 'mixup',
    q: `Inverting 2<sup>${x}</sup> + 2<sup>−${x}</sup> on [0,${NB}∞): which root of ${t}<sup>2</sup> − ${y}${t} + 1 = 0 is 2<sup>${x}</sup>?`,
    a: `The + root: the two roots multiply to 1, so exactly one is ≥ 1 (both are 1 at ${y} = 2), and ${t} = 2<sup>${x}</sup> ≥ 1 on [0,${NB}∞). So ${fi}(${x}) = log<sub>2</sub>(${fr(`${x} + √(${x2} − 4)`, '2')}) on [2,${NB}∞)`,
    why: `${of(f, '0')} = 2 and ${fi}(2) = log<sub>2</sub>${NB}1 = 0.`,
    say: null,
  },
  // p. 109
  {
    topic: 9,
    kind: 'mistake',
    q: `Is ${fx} = ${x2} − 2${x} one-one on [−1,${NB}2]?`,
    a: `No: it falls on [−1,${NB}1] (from 3 to −1) and rises on [1,${NB}2] (from −1 to 0). On the subinterval [1,${NB}2] the image is [−1,${NB}0] and ${fi}(${x}) = 1 + √(${x} + 1)`,
    why: `Similarly |${x} − 1| + 2 inverts as 3 − ${x} on (−∞,${NB}1] and ${x} − 1 on [1,${NB}∞), both inverses defined on [2,${NB}∞).`,
    say: null,
  },
  // p. 109
  {
    topic: 9,
    kind: 'shortcut',
    q: `How many real solutions does ${x}<sup>3</sup> − 3${x} = 1 have, fast?`,
    a: `Three: ${x}<sup>3</sup> − 3${x} has a local maximum 2 at ${x} = −1 and a local minimum −2 at ${x} = 1, so the line ${y} = 1 cuts it once on each monotonic branch`,
    why: `The branches (−∞,${NB}−1), (−1,${NB}1), (1,${NB}∞) are exactly the intervals on which the cubic is invertible.`,
    say: null,
  },

  // ── Additional D · From Symmetry Axes to Periods; Periods Hidden in Functional Equations ──
  // p. 110
  {
    topic: 10,
    kind: 'remember',
    q: `What does ${of(f, `${a} + ${x}`)} = ${of(f, `${a} − ${x}`)} say, and what do two such axes force?`,
    a: `Mirror symmetry about the line ${x} = ${a}, equivalently ${of(f, `2${a} − ${x}`)} = ${fx} (evenness is ${a} = 0). Two axes ${x} = ${a} and ${x} = ${b}, ${a} ≠ ${b}, force the period 2|${b} − ${a}|: ${of(f, `${x} + 2(${b} − ${a})`)} = ${fx}. And a period ${T} with an axis at ${a} gives an axis at ${a} + ${fr(T, '2')} too`,
    why: `Axes at 2 and 4 give period 4; an even function with an axis at ${x} = ${a} has period 2${a}.`,
    say: `Axes come in families spaced ${fr(T, '2')} apart.`,
  },
  // p. 111
  {
    topic: 10,
    kind: 'remember',
    q: 'Which recurrences hide which periods?',
    a: `Compose the recurrence with itself until the value returns: ${of(f, `${x} + ${a}`)} = −${fx}, ${fr('1', fx)} or 1 − ${fx} each give period 2${a}; ${of(f, `${x} + ${a}`)} = ${fr(`1 + ${fx}`, `1 − ${fx}`)} gives ${of(f, `${x} + 2${a}`)} = −${fr('1', fx)} and period 4${a}`,
    why: `${of(f, `${x} + 2`)} = −${fx} with ${of(f, '0')} = 1: period 4, so ${of(f, '10')} = ${of(f, '2')} = −1.`,
    say: 'Compose the recurrence with itself until the value returns.',
  },
  // p. 111
  {
    topic: 10,
    kind: 'remember',
    q: 'What can a continuous function with two periods of irrational ratio be?',
    a: 'Only constant: its values repeat on a dense set of shifts, and continuity spreads the constancy everywhere. This is the rigidity behind “irrational ratio ⇒ not periodic”',
    why: `Likewise no continuous periodic ${f} has ${of(f, `${x} + 2`)} = ${fx} + 3: ${of(f, `${x} + 2${n}`)} = ${fx} + 3${n} is unbounded, but a continuous periodic function is bounded.`,
    say: null,
  },
  // p. 112
  {
    topic: 10,
    kind: 'mixup',
    q: `${of(f, `${x} + 3`)} = 1 − ${fx} with ${f} not constant: is 6 the fundamental period?`,
    a: `Not necessarily. 6 is a period, and 3 is not (it would force ${f} ≡ ${HALF}), but the bare recurrence does not fix the fundamental period: ${HALF} + ${HALF}${NB}sin${NB}${fr(`π${x}`, '3')} has fundamental period 6, sin<sup>2</sup>${NB}${fr(`π${x}`, '2')} has 2. A question asking for the fundamental period must give an explicit ${f}`,
    why: `Any fundamental period ${T} divides 6, with 6 = ${k}${T} for an odd ${k}.`,
    say: null,
  },
  // pp. 111–112
  {
    topic: 10,
    kind: 'mistake',
    q: `${of(f, `${x} + 1`)} = ${fr(`1 + ${fx}`, `1 − ${fx}`)}: is the period 2?`,
    a: `No: composing once gives ${of(f, `${x} + 2`)} = −${fr('1', fx)}, not ${fx}; composing again gives ${of(f, `${x} + 4`)} = ${fx}: period 4. Stopping one step early is the slip`,
    why: `${of(f, '2')} = 3 gives ${of(f, '1')} = ${HALF}, ${of(f, '3')} = −2, ${of(f, '4')} = −${fr('1', '3')}, ${of(f, '5')} = ${HALF}: the cycle closes after four steps.`,
    say: null,
  },
  // pp. 110, 113
  {
    topic: 10,
    kind: 'shortcut',
    q: `${f} is odd with period ${T}. What is ${of(f, fr(T, '2'))}, fast?`,
    a: `0: ${of(f, fr(T, '2'))} = ${of(f, `${fr(T, '2')} − ${T}`)} = ${of(f, `−${fr(T, '2')}`)} = −${of(f, fr(T, '2'))}`,
    why: `In the same spirit, ${of(f, `1 + ${x}`)} = ${of(f, `1 − ${x}`)} and ${of(f, `3 + ${x}`)} = ${of(f, `3 − ${x}`)} give the period 2|3 − 1| = 4 at sight.`,
    say: null,
  },

  // ── Additional E · Counting Maps: Surjections, Derangements, Bell Numbers ──
  // pp. 113–114
  {
    topic: 11,
    kind: 'remember',
    q: 'Where does the onto count come from?',
    a: `Inclusion–exclusion over the targets: the functions missing every target of a fixed ${k}-set map into the other ${m} − ${k} in (${m} − ${k})<sup>${n}</sup> ways, and there are ${bn(m, k)} such sets, so onto(${n}, ${m}) = ${ONTO}. A function missing exactly ${I('j')} targets is counted (1 − 1)<sup>${I('j')}</sup> times: once if ${I('j')} = 0, otherwise not at all`,
    why: `${n} = ${m} = 3: 27 − 3 · 8 + 3 · 1 − 0 = 6 = 3!, as onto between equal finite sets means bijective.`,
    say: 'Only fully-surjective functions survive.',
  },
  // pp. 114–115
  {
    topic: 11,
    kind: 'remember',
    q: `How many bijections of ${n} objects fix no object?`,
    a: `${DER(n)} = ∑<sub>${k}=0</sub><sup>${n}</sup>(−1)<sup>${k}</sup>${bn(n, k)}(${n} − ${k})! = ${n}!${NB}∑<sub>${k}=0</sub><sup>${n}</sup>${fr(`(−1)<sup>${k}</sup>`, `${k}!`)}: the same engine, with “fixes ${I('i')}” as the bad event. ${DER('1')} = 0, ${DER('2')} = 1, ${DER('3')} = 2, ${DER('4')} = 9, ${DER('5')} = 44`,
    why: `A random bijection of 5 objects is a derangement with probability ${fr('44', '120')} = ${fr('11', '30')}; and ${DER(n)} = (${n} − 1)(${DER(`(${n} − 1)`)} + ${DER(`(${n} − 2)`)}) gives ${DER('5')} = 4(9 + 2).`,
    say: 'Two independent routes, one answer.',
  },
  // pp. 114–115
  {
    topic: 11,
    kind: 'remember',
    q: `How are the Stirling numbers ${S}(${n}, ${k}) built, and how do they give the Bell numbers?`,
    a: `${S}(${n}, ${k}), the partitions of an ${n}-set into exactly ${k} blocks, obey ${S}(${n}, ${k}) = ${k}${NB}${S}(${n} − 1, ${k}) + ${S}(${n} − 1, ${k} − 1): element ${n} either joins one of ${k} blocks or sits alone. The equivalence relations number ${Bn(n)} = ∑<sub>${k}</sub>${NB}${S}(${n}, ${k})`,
    why: `${S}(5, 3) = 3${NB}${S}(4, 3) + ${S}(4, 2) = 18 + 7 = 25: the equivalence relations on 5 elements with exactly three classes.`,
    say: null,
  },
  // p. 116
  {
    topic: 11,
    kind: 'mixup',
    q: 'Equivalence relations on a 4-element set with exactly two classes, and in all: the same count?',
    a: `No: exactly two classes, ${S}(4, 2) = 2<sup>3</sup> − 1 = 7 (element 1’s block is {1} with any proper subset of the other three); in all, ${Bn('4')} = 1 + 7 + 6 + 1 = 15`,
    why: `${S}(4, 3) = ${bn('4', '2')} = 6: exactly one block is a pair.`,
    say: null,
  },
  // p. 114
  {
    topic: 11,
    kind: 'mistake',
    q: 'Derangements of 5: is it 120 − 5 × 24 = 0?',
    a: `No: 44. Subtracting each single fixed point (−5 × 24) removes the bijections with two fixed points twice, so each pair is refunded (+10 × 6), each triple re-penalised (−10 × 2), each quadruple refunded (+5 × 1) and the identity re-penalised (−1): 120 − 120 + 60 − 20 + 5 − 1 = 44`,
    why: `Bijections of 4 objects with exactly one fixed point: choose it (4 ways) and derange the rest, 4 × ${DER('3')} = 8.`,
    say: null,
  },
  // p. 115
  {
    topic: 11,
    kind: 'shortcut',
    q: 'How do you check an onto count independently?',
    a: `Count by occupancy pattern, every target used at least once. Onto from 6 objects to 3 letters: pattern (4, 1, 1) gives 3 × ${fr('6!', '4!')} = 90, (3, 2, 1) gives 3! × ${fr('6!', '3! 2!')} = 360, (2, 2, 2) gives ${fr('6!', '2! 2! 2!')} = 90: 540, matching 729 − 192 + 3 − 0`,
    why: 'Onto between equal sizes is bijective: three distinct balls into three distinct boxes, none empty, in 3! = 6 ways.',
    say: null,
  },

  // ── Additional F · Iterates and Cycles ──
  // p. 116
  {
    topic: 12,
    kind: 'remember',
    q: `What are iterates, and how does a cycle shrink ${sup(f, n)}?`,
    a: `${sup(f, '2')} = ${o(f, f)}, ${sup(f, '3')} = ${o(f, sup(f, '2'))}, and ${sup(f, '0')} is the identity; associativity gives ${o(sup(f, m), sup(f, n))} = ${sup(f, `${m}+${n}`)}, as long as you never leave the domain (each step forbids the poles of every intermediate denominator). If ${sup(f, k)} = ${I('I')} as an identity, then ${sup(f, n)} = ${sup(f, `${n} mod ${k}`)}`,
    why: `${fx} = ${fr('1', `1 − ${x}`)}: ${sup(f, '2')}(${x}) = 1 − ${ONE_X} and ${sup(f, '3')}(${x}) = ${x}, so ${sup(f, '100')} = ${f}, since 100 = 3 × 33 + 1.`,
    say: `Compute ${sup(f, '2')}, then ${sup(f, '3')}, and stop the moment you hit ${x}.`,
  },
  // pp. 116–117
  {
    topic: 12,
    kind: 'remember',
    q: 'Which linear functions are their own inverses?',
    a: `${sup(f, '2')} = ${I('I')} makes ${f} its own inverse, an involution. For ${fx} = ${m}${x} + ${c}, ${sup(f, '2')}(${x}) = ${sup(m, '2')}${x} + ${c}(${m} + 1) = ${x} forces ${sup(m, '2')} = 1 and ${c}(${m} + 1) = 0: ${fx} = ${x}, or ${fx} = ${c} − ${x} for any ${c}, the reflections`,
    why: `${fx} = 5 − ${x}: ${f}(${fx}) = 5 − (5 − ${x}) = ${x}; ${ONE_X} and ${fr(`${x} + 1`, `${x} − 1`)} are involutions too.`,
    say: 'Iterates behave like powers of a number, provided you never leave the domain.',
  },
  // p. 118
  {
    topic: 12,
    kind: 'mixup',
    q: `${fx} = ${fr('1', `1 − ${x}`)} has ${sup(f, '3')} = ${I('I')}. Does ${sup(f, '3')}(${x}) = ${x} hold for every real ${x}?`,
    a: `Only where the journey is defined: ${f} forbids ${x} = 1, and ${sup(f, '2')} also forbids ${x} = 0. The identity holds wherever every intermediate step exists`,
    why: `The orbit of 3 is 3 ↦ −${HALF} ↦ ${fr('2', '3')} ↦ 3: a genuine 3-cycle.`,
    say: null,
  },
  // p. 118
  {
    topic: 12,
    kind: 'mistake',
    q: `${fx} = 2 − ${x}: is ${sup(f, n)}(${x}) = 2 − ${x} for every ${n}?`,
    a: `No: ${sup(f, '2')}(${x}) = ${x}, so ${sup(f, n)}(${x}) = ${x} for even ${n} and 2 − ${x} for odd ${n}. Reduce the exponent modulo the order before you answer`,
    why: `For ${fx} = ${ONE_X}, ${sup(f, '2')} = ${I('I')}, so ${sup(f, '57')}(${x}) = ${ONE_X}: 57 is odd.`,
    say: null,
  },
  // p. 118
  {
    topic: 12,
    kind: 'shortcut',
    q: `${sup(f, '3')} = ${I('I')}, ${of(f, '1')} = 2 and ${of(f, '2')} = 3. Find ${of(f, '3')} and ${f}(${f}(${of(f, '7')})) fast.`,
    a: `${of(f, '3')} = ${f}(${of(f, '2')}) = ${sup(f, '3')}(1) = 1, and ${f}(${f}(${of(f, '7')})) = ${sup(f, '3')}(7) = 7, without knowing ${of(f, '7')}`,
    why: `An order-4 example: ${fr(`${x} − 1`, `${x} + 1`)} gives ${sup(f, '2')} = −${ONE_X}, ${sup(f, '3')} = ${fr(`1 + ${x}`, `1 − ${x}`)} and ${sup(f, '4')} = ${I('I')}.`,
    say: null,
  },

  // ── Additional P · What JEE Actually Asks ──
  // p. 120
  {
    topic: 13,
    kind: 'shortcut',
    q: `Is ${fx} = 2${x} + ${sinx} one-one and onto ℝ → ℝ? The fast route?`,
    a: `Both. ${I('f′')}(${x}) = 2 + ${cosx} lies in [1,${NB}3], so ${f} is strictly increasing: one-one. 2${x} dominates the bounded ${sinx}, so ${fx} → ±∞ as ${x} → ±∞, and continuity (the intermediate value theorem) gives every real value: onto`,
    why: `On a closed interval, compare the range with the codomain instead: 2${x}<sup>3</sup> − 15${x2} + 36${x} + 1 on [0,${NB}3] → [1,${NB}29] has ${of(f, '0')} = 1, ${of(f, '2')} = 29, ${of(f, '3')} = 28: onto, but not monotonic, so many-one.`,
    say: null,
  },
  // p. 124
  {
    topic: 13,
    kind: 'shortcut',
    q: `${A} has 7 elements, ${B} = {${sub(y, '1')}, ${sub(y, '2')}, ${sub(y, '3')}}. How many onto ${f} : ${A} → ${B} send exactly three elements to ${sub(y, '2')}?`,
    a: `490: choose the three preimages of ${sub(y, '2')} in ${bn('7', '3')} = 35 ways, then the other four must hit both ${sub(y, '1')} and ${sub(y, '3')}: 2<sup>4</sup> − 2 = 14 ways. Fix the constrained part first, then count the rest, subtracting the maps that miss a target`,
    why: 'Onto from {1, 2, 3, 4} to {1, 2}: 2<sup>4</sup> = 16 functions minus the two constant ones, 14.',
    say: null,
  },
  // pp. 121–122, 124
  {
    topic: 13,
    kind: 'remember',
    q: `${f} : [1,${NB}∞) → [2,${NB}∞), ${fx} = ${x} + ${ONE_X}. Which root gives ${fi}?`,
    a: `${y} = ${x} + ${ONE_X} gives ${x2} − ${y}${x} + 1 = 0, so ${x} = ${fr(`${y} ± √(${sq(y)} − 4)`, '2')}. The roots multiply to 1, so the minus-root is below 1 for ${y} > 2 and violates ${x} ≥ 1: ${fi}(${x}) = ${fr(`${x} + √(${x2} − 4)`, '2')} on [2,${NB}∞). The stated domain exists precisely to discard one branch`,
    why: `Check: the minus-root equals ${fr('2', `${y} + √(${sq(y)} − 4)`)}, below 1 for every ${y} > 2.`,
    say: 'Distractor options are built from the discarded branch.',
  },
  // p. 122
  {
    topic: 13,
    kind: 'mistake',
    q: `Asked to classify ${f} : (0,${NB}∞) → (0,${NB}∞), ${fx} = ln${NB}${x}, what do students miss?`,
    a: `That it is not a function into (0,${NB}∞) at all: ${of(f, '1')} = 0 ∉ (0,${NB}∞). Test well-definedness before one-one and onto. The partner trap is a missed transitivity chain: for ${x} = ${y} or ${x} = 3${y} on ℕ, (9, 3) and (3, 1) force (9, 1), which fails, so the relation is reflexive only`,
    why: `That relation is ${x2} − 4${I('xy')} + 3${sq(y)} = 0, i.e. (${x} − ${y})(${x} − 3${y}) = 0: (3, 1) is in it but (1, 3) is not.`,
    say: 'Always test well-definedness before one-one/onto.',
  },
  // pp. 122–124
  {
    topic: 13,
    kind: 'mistake',
    q: `What is the domain of log<sub>(1 − ${x})</sub>(${x} + 2)?`,
    a: `(−2,${NB}1)${NB}∖${NB}{0}: the argument needs ${x} + 2 > 0, the base needs 1 − ${x} > 0 and 1 − ${x} ≠ 1. Forgetting the base ≠ 1 is the designed trap; floor questions likewise exploit ${fl('−2.3')} = −3 and 0 ≤ ${fp(x)} < 1`,
    why: `4${fp(x)} = ${x} + ${fl(x)} gives ${fp(x)} = ${fr('2', '3')}${fl(x)}, and 0 ≤ ${fp(x)} < 1 leaves ${fl(x)} ∈ {0, 1}: ${x} = 0 or ${fr('5', '3')}.`,
    say: null,
  },
];
