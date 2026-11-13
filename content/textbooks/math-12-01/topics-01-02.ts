import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 01–02, pp. 44–64 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 01
 * Types of Relations (heading and Exam Relevance box at the foot of p. 44,
 * text pp. 45–54) and Subtopic 02 Types of Functions (pp. 55–64). The
 * chapter's title and contents (pp. 43–44) are not copied. Each topic opens
 * with its "Exam Relevance:" box as a part of its own, then is split at its
 * Sections 1 to 8. The book never calls its figures in the text; each `fig`
 * stands where its caption is printed: 1.1 (caption p. 46, drawn p. 47) after
 * the "Think about it this way…" box; 1.2 (caption p. 51, drawn p. 52) after
 * Topic 01's fourth worked example; 1.3 (caption p. 56, drawn p. 57) after
 * Topic 02's "Think about it this way…" box; 1.4 (caption p. 61, drawn p. 62)
 * after Topic 02's fourth worked example. No unnumbered drawings.
 * ⁿPᵣ with an italic P, as the page sets it; the stacked binomial as <binom>.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const R = I('R');
const a = I('a');
const b = I('b');
const c = I('c');
const f = I('f');
const k = I('k');
const m = I('m');
const n = I('n');
const x = I('x');
const y = I('y');
const X = I('X');
const Y = I('Y');
const IA = `${I('I')}<sub>${A}</sub>`;
const R1 = `${R}<sub>1</sub>`;
const R2 = `${R}<sub>2</sub>`;
const x1 = `${x}<sub>1</sub>`;
const x2 = `${x}<sub>2</sub>`;
const k1 = `${k}<sub>1</sub>`;
const k2 = `${k}<sub>2</sub>`;
const fx = `${f}(${x})`;
const fx1 = `${f}(${x1})`;
const fx2 = `${f}(${x2})`;
const pair = (p: string, q: string) => `(${p},${NB}${q})`;
const AxA = `${A} × ${A}`;
const aRb = I('aRb');
const aRa = I('aRa');
const bRa = I('bRa');
const bRc = I('bRc');
const aRc = I('aRc');
const xRa = I('xRa');
/** 2 to the n², as printed. */
const ALL = `2<sup>${n}<sup>2</sup></sup>`;
const REFL = `2<sup>${n}<sup>2</sup>−${n}</sup>`;
const SYMM = `2<sup>${n}(${n}+1)/2</sup>`;
const BELL = (s: string) => `${B}<sub>${s}</sub>`;
const mPn = `<sup>${m}</sup>${I('P')}<sub>${n}</sub>`;
const NP = (p: string, q: string) => `<sup>${p}</sup>${I('P')}<sub>${q}</sub>`;
const ONTO_SUM = `∑<sub>${k}=0</sub><sup>${m}</sup>(−1)<sup>${k}</sup>${bn(m, k)}(${m} − ${k})<sup>${n}</sup>`;
const RANGE = (s: string) => `Range(${s})`;
const RR = 'ℝ → ℝ';
const fRR = `${f} : ${RR}`;
const INF = (s: string) => `[${s},${NB}∞)`;
const lin = (s: string) => `${I('ℓ')}<sub>${s}</sub>`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 44–54 ────────────────
  {
    n: '01',
    title: 'Types of Relations',
    kalam: 'A relation is just a rule that decides which pairs of things are “connected.”',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This topic is a guaranteed scorer. CBSE Boards almost always carry a 1-mark definition or a 3–5 mark “show that ${R} is an equivalence relation” proof ${ESTIMATE}. JEE Main asks 1 MCQ on classifying a given relation or counting relations ${ESTIMATE}, and JEE Advanced layers it with equivalence classes, partitions, and counting (multi-correct). CUET tests direct classification and definitions. (Not in NEET: the medical paper has no mathematics section.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Forget formulas for a minute. A <b>relation</b> is just a rule that decides which pairs of things are “connected.” That’s the whole idea.',
      },
      {
        t: 'p',
        html: `Picture every student in your coaching batch. Now draw an arrow from one student to another whenever the rule “sits in the same row as” is true. Some arrows appear, some don’t. That entire collection of arrows, that bundle of “who is connected to whom”, <b>is</b> the relation. Mathematically we don’t draw arrows forever; we just list the connected pairs as ordered pairs ${pair(a, b)}. So a relation ${R} on a set ${A} is nothing more grand than a <b>chosen subset of all possible ordered pairs</b> you could form from ${A}, i.e. a subset of ${AxA}.`,
      },
      {
        t: 'p',
        html: `Because ${R} is a choice of pairs, there are two boring extremes worth naming first. If you connect <b>nothing</b> to anything, you get the <b>empty (void) relation</b>, ${R} = ∅. If you connect <b>everything</b> to <b>everything</b>, you get the <b>universal relation</b>, ${R} = ${AxA}. And if you connect every element only to itself (like the rule “is the same person as”), you get the <b>identity relation</b>, ${IA}.`,
      },
      {
        t: 'p',
        html: 'The interesting relations live between these extremes, and we judge them by three “personality traits.”',
      },
      {
        t: 'p',
        html: '<b>Reflexive: the self-loop.</b> Does every element relate to itself? “Is in the same class as”: yes, you are obviously in the same class as yourself. Every person gets a little loop back to themselves. Miss even one self-loop and the relation is no longer reflexive.',
      },
      {
        t: 'p',
        html: `<b>Symmetric: the two-way street.</b> If ${a} is connected to ${b}, is ${b} automatically connected back to ${a}? “Is a neighbour of” is symmetric: if my house is next to yours, yours is next to mine. But “is the elder sibling of” is <b>not</b> symmetric: if Riya is Aman’s elder sibling, Aman is certainly not Riya’s elder sibling.`,
      },
      {
        t: 'p',
        html: `<b>Transitive: the shortcut / the chain.</b> If ${a} → ${b} and ${b} → ${c}, does the shortcut ${a} → ${c} exist? “Lives in the same city as” is transitive: if Priya and Arjun share a city, and Arjun and Sneha share a city, then Priya and Sneha share it too. But “is a friend of” is famously <b>not</b> transitive: your friend’s friend need not be your friend.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the Indian Railways network as a relation between stations. “Is directly connected by a train to” is symmetric (the same track runs both ways) but <b>not</b> transitive (Patna→Delhi and Delhi→Jaipur direct trains don’t guarantee a direct Patna→Jaipur train). Now change the rule to “can reach by any sequence of trains.” Suddenly it becomes transitive <b>and</b> symmetric <b>and</b> reflexive (you can trivially “reach” your own station). A relation that has all three traits at once is called an <b>equivalence relation</b>, and its superpower is that it neatly <b>sorts the whole set into disjoint buckets</b> (here: groups of mutually-reachable stations). Each bucket is an equivalence class.',
      },
      { t: 'fig', id: 'm12-01-fig-1.1' },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> These traits are only defined for a relation <b>on a single set</b> ${A} (from ${A} to itself): they make no sense for a relation between two different sets. Crucially, every trait is <b>relative to the underlying set</b>: a relation can be reflexive on ${A} but fail to be reflexive when you enlarge ${A}, because new elements bring new self-loops to satisfy. And beware the empty relation: it sneaks past your intuition (more on that in the pitfalls).`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `Let ${A} be a non-empty set, ${R} ⊆ ${AxA} a relation on ${A}, and ${a}, ${b}, ${c} ∈ ${A}. Write ${aRb} to mean ${pair(a, b)} ∈ ${R}.`,
      },
      {
        t: 'formula',
        kicker: 'Core definitions',
        main: `Empty / Void: ${R} = ∅<br>Universal: ${R} = ${AxA}<br>Identity: ${IA} = {${pair(a, a)} ∶ ${a} ∈ ${A}}<br>Reflexive: ${pair(a, a)} ∈ ${R} ∀${NB}${a} ∈ ${A}<br>Symmetric: ${pair(a, b)} ∈ ${R} ⟹ ${pair(b, a)} ∈ ${R}<br>Transitive: ${pair(a, b)} ∈ ${R} and ${pair(b, c)} ∈ ${R}<br>⟹ ${pair(a, c)} ∈ ${R}<br>Antisymmetric: ${pair(a, b)} ∈ ${R} and ${pair(b, a)} ∈ ${R}<br>⟹ ${a} = ${b}<br>Equivalence: ${R} is reflexive <b>and</b> symmetric <b>and</b> transitive`,
        legend: [
          `${A} = a non-empty set`,
          `${R} = a relation on ${A} (${R} ⊆ ${AxA})`,
          `${a}, ${b}, ${c} = elements of ${A}`,
          `${IA} = the identity relation on ${A}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Equivalence class.</b> If ${R} is an equivalence relation on ${A}, the class of ${a} is:`,
      },
      {
        t: 'formula',
        kicker: 'Equivalence class',
        main: `[${a}] = {${x} ∈ ${A} ∶ ${xRa}}`,
        legend: [`[${a}] = the equivalence class of ${a}`, `${R} = an equivalence relation on ${A}`, `${x} = an element of ${A}`],
        note: null,
      },
      {
        t: 'p',
        html: `The distinct classes are mutually disjoint and their union is ${A}: they <b>partition</b> ${A}.`,
      },
      {
        t: 'p',
        html: `<b>Counting properties.</b> For a set ${A} with |${A}| = ${n}:`,
      },
      {
        t: 'defgrid',
        title: 'Quantity: Count',
        rows: [
          { k: `Relations from ${A} to ${B} (with |${B}| = ${m})`, v: `2<sup>${m}${n}</sup>` },
          { k: `Relations on ${A}`, v: ALL },
          { k: `Reflexive relations on ${A}`, v: REFL },
          { k: `Symmetric relations on ${A}`, v: SYMM },
          { k: `Equivalence relations on ${A}`, v: `${BELL(n)} (the ${n}-th <b>Bell number</b>)` },
        ],
      },
      {
        t: 'p',
        html: `where the Bell numbers begin ${BELL('1')} = 1, ${BELL('2')} = 2, ${BELL('3')} = 5, ${BELL('4')} = 15, ${BELL('5')} = 52, …`,
      },
      {
        t: 'formula',
        kicker: `Counting relations on ${A}`,
        main: `Relations: ${ALL}<br>Reflexive: ${REFL}<br>Symmetric: ${SYMM}<br>Equivalence: ${BELL(n)}`,
        legend: [`${n} = |${A}|, the number of elements of ${A}`, `${BELL(n)} = the ${n}-th Bell number (1, 2, 5, 15, 52, …)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation lock (chapter-wide):</b> ${A}, ${B} for sets; ${R}, ${I('S')} for relations; ${a}, ${b}, ${c}, ${x}, ${y} for elements; ${n} = |${A}| for cardinality; [${a}] for an equivalence class; ℕ, ℤ, ℝ for the number systems. (These carry forward unchanged into Topics 02–04.)`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single “derivation” for this topic, so here is the working machinery: first the testing procedure, then a model proof, with the reasoning made explicit.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Classifying any relation R on A',
        steps: [
          `<b>Reflexive check (do this FIRST).</b> Scan the elements of ${A} one by one and confirm ${pair(a, a)} ∈ ${R} for every one. <b>Why first?</b> It is the cheapest test and the most common killer: a single missing self-loop instantly rules out reflexivity <b>and</b> equivalence, saving you from doing the harder checks.`,
          `<b>Symmetric check.</b> For each pair ${pair(a, b)} ∈ ${R} with ${a}${NB}≠${NB}${b}, confirm ${pair(b, a)} is also present. <b>Why this works:</b> symmetry is an “if-then,” so you only need to look at pairs that are actually in ${R}, and you only need <b>one</b> missing reverse pair to declare “not symmetric.” Hunt for a counterexample rather than verifying everything.`,
          `<b>Transitive check.</b> For every chain ${pair(a, b)} ∈ ${R} and ${pair(b, c)} ∈ ${R}, confirm the shortcut ${pair(a, c)} ∈ ${R}. <b>Reasoning:</b> again it is an “if-then,” so absent chains cost you nothing. One broken shortcut ends it.`,
          '<b>Conclude.</b> All three present ⇒ <b>equivalence</b>. Reflexive + transitive + antisymmetric ⇒ a partial order (good to recognise for JEE).',
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure B: Model proof that a relation is an equivalence relation.</b>`,
      },
      {
        t: 'p',
        html: `<b>Claim:</b> For a fixed positive integer ${n}, define ${R} on ℤ by<br>${aRb} ⟺ (${a} − ${b}) is divisible by ${n}.<br>Then ${R} is an equivalence relation. (This is “congruence modulo ${n},” the archetype of every equivalence relation you will meet.)`,
      },
      {
        t: 'p',
        html: `<b>Reflexive.</b> For any ${a} ∈ ℤ, ${a} − ${a} = 0 = ${n}${NB}·${NB}0, which is divisible by ${n}. <b>Physical reasoning:</b> zero is divisible by everything, so every integer trivially relates to itself. Hence ${aRa} for all ${a}. ✓`,
      },
      {
        t: 'p',
        html: `<b>Symmetric.</b> Suppose ${aRb}, so ${a} − ${b} = ${I('nk')} for some integer ${k}. Then<br>${b} − ${a} = −(${a} − ${b}) = ${n}(−${k}),<br>and since −${k} ∈ ℤ, (${b} − ${a}) is divisible by ${n}. <b>Reasoning:</b> divisibility is unaffected by a sign flip. Hence ${bRa}. ✓`,
      },
      {
        t: 'p',
        html: `<b>Transitive.</b> Suppose ${aRb} and ${bRc}, so ${a} − ${b} = ${n}${k1} and ${b} − ${c} = ${n}${k2} for integers ${k1}, ${k2}. Adding,<br>${a} − ${c} = (${a} − ${b}) + (${b} − ${c})<br>= ${n}${k1} + ${n}${k2} = ${n}(${k1} + ${k2}).<br><b>Reasoning:</b> the middle term ${b} cancels, and a sum of multiples of ${n} is again a multiple of ${n}. Since ${k1} + ${k2} ∈ ℤ, (${a} − ${c}) is divisible by ${n}, so ${aRc}. ✓`,
      },
      {
        t: 'p',
        html: `All three hold ⇒ ${R} is an equivalence relation. Its classes are the <b>residue classes</b> [0], [1], …, [${n} − 1], which partition ℤ into exactly ${n} buckets. ■`,
      },
      {
        t: 'p',
        html: `<b>Procedure C: Why ${ALL} relations exist (the counting logic).</b> A relation on ${A} is a subset of ${AxA}. The set ${AxA} has ${n} × ${n} = ${n}<sup>2</sup> ordered pairs, and each pair is independently either in or out of ${R}: two choices per pair. By the multiplication principle, the total number of subsets is ${ALL}. For <b>reflexive</b> relations, the ${n} self-pairs ${pair(a, a)} are forced in, leaving only ${n}<sup>2</sup> − ${n} free pairs, hence ${REFL}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Let ${A} = {1, 2, 3, 4} and ${R} as given below. Determine whether ${R} is reflexive, symmetric, and transitive.`,
        steps: [
          `<b>Given:</b> ${A} = {1, 2, 3, 4}; ${R} = {${pair('1', '1')}, ${pair('2', '2')}, ${pair('3', '3')}, ${pair('4', '4')}, ${pair('1', '2')}, ${pair('2', '1')}, ${pair('3', '4')}}.`,
          `<b>Reflexive:</b> We need ${pair(a, a)} ∈ ${R} for all ${a} ∈ ${A}. Present: ${pair('1', '1')}, ${pair('2', '2')}, ${pair('3', '3')}, ${pair('4', '4')}: all four. <b>Reflexive.</b> ✓`,
          `<b>Symmetric:</b> Look at the off-diagonal pairs. ${pair('1', '2')} ∈ ${R} and ${pair('2', '1')} ∈ ${R}: good. But ${pair('3', '4')} ∈ ${R} while ${pair('4', '3')} ∉ ${R}. One missing reverse is enough. <b>Not symmetric.</b> ✗`,
          `<b>Transitive:</b> Check every chain. ${pair('1', '2')}&${pair('2', '1')} ⇒ ${pair('1', '1')} ∈ ${R} ✓; ${pair('2', '1')}&${pair('1', '2')} ⇒ ${pair('2', '2')} ∈ ${R} ✓; ${pair('3', '3')}&${pair('3', '4')} ⇒ ${pair('3', '4')} ∈ ${R} ✓; ${pair('3', '4')}&${pair('4', '4')} ⇒ ${pair('3', '4')} ∈ ${R} ✓. Chains through a self-loop give back a pair already in ${R}. No chain is broken. <b>Transitive.</b> ✓`,
          `<b>Conclusion:</b> ${R} is <b>reflexive and transitive but not symmetric</b>, hence <b>not</b> an equivalence relation.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `On ${A} = {1, 2, 3} classify each, choosing the fastest route: (a) ${R1} = ∅; (b) ${R2} = {${pair('1', '2')}, ${pair('2', '3')}, ${pair('1', '3')}}.`,
        steps: [
          '<b>The speed mindset:</b> test reflexive first to kill equivalence, then hunt one counterexample.',
          `<b>(a) The empty-relation trap.</b> Reflexive? ${A} is non-empty, so we need ${pair('1', '1')}: absent. <b>Not reflexive.</b> Symmetric? Symmetry says “if ${pair(a, b)} ∈ ${R} then…”. Since there is no pair in ${R1} at all, the “if” is never triggered: there is <b>no counterexample possible</b>, so it is <b>vacuously symmetric</b>. Same logic: <b>vacuously transitive</b>. So ${R1} is <b>symmetric and transitive but not reflexive</b>: a favourite trick option.`,
          `<b>(b)</b> Reflexive? ${pair('1', '1')} ∉ ${R2}: out, equivalence dies instantly. Symmetric? ${pair('1', '2')} ∈ ${R2} but ${pair('2', '1')} ∉ ${R2}: <b>not symmetric</b>. Transitive? Only chain is ${pair('1', '2')}&${pair('2', '3')} ⇒ ${pair('1', '3')}, and ${pair('1', '3')} ∈ ${R2} ✓: <b>transitive</b>. So ${R2} is <b>transitive only</b>.`,
          '<b>Pitfall avoided:</b> never write “empty ⇒ no properties.” Emptiness grants symmetry and transitivity for free.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (classification + counting)',
        q: `Let ${A} = {1, 2, 3}. (a) How many relations can be defined on ${A}? (b) For ${R} = {${pair('1', '1')}, ${pair('2', '2')}, ${pair('3', '3')}, ${pair('1', '2')}, ${pair('2', '1')}}, find the minimum number of ordered pairs that must be added to make ${R} an equivalence relation. (c) How many equivalence relations on ${A} contain the pair ${pair('1', '2')}?`,
        steps: [
          `<b>(a)</b> Relations on ${A} number ${ALL} = 2<sup>3<sup>2</sup></sup> = 2<sup>9</sup> = 512.`,
          `<b>(b)</b> Test ${R} as it stands. Reflexive: ${pair('1', '1')}, ${pair('2', '2')}, ${pair('3', '3')} all present ✓. Symmetric: ${pair('1', '2')}&${pair('2', '1')} both present ✓. Transitive: ${pair('1', '2')}&${pair('2', '1')} ⇒ ${pair('1', '1')} ✓, ${pair('2', '1')}&${pair('1', '2')} ⇒ ${pair('2', '2')} ✓; the other chains run through a self-loop and give back a pair already in ${R}. ${R} <b>is already an equivalence relation</b>, so the answer is 0. (The trap is to “helpfully” add ${pair('2', '3')}, ${pair('3', '2')}, …: unnecessary, and it would over-merge the classes.)`,
          `<b>(c)</b> Equivalence relations on ${A} correspond one-to-one with <b>partitions</b> of ${A}, and there are ${BELL('3')} = 5 of them. Those containing ${pair('1', '2')} must place 1 and 2 in the same block: either {1, 2} | {3} or {1, 2, 3}. So 2 equivalence relations contain ${pair('1', '2')}.`,
        ],
        ans: '(a) 512; (b) 0; (c) 2',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Consider two relations on ℝ: ${a}${R1}${b} ⟺ |${a} − ${b}| ≤ 1, and ${a}${R2}${b} ⟺ (${a} − ${b}) ∈ ℤ. (i) Classify ${R1} fully. (ii) Prove ${R2} is an equivalence relation and describe its classes. (iii) How many distinct ${R2}-classes contain a representative in the interval [0,${NB}1)?`,
        steps: [
          `<b>(i) Classifying ${R1}.</b> Reflexive: |${a} − ${a}| = 0 ≤ 1 ✓. Symmetric: |${a} − ${b}| = |${b} − ${a}|, so |${a} − ${b}| ≤ 1 ⟺ |${b} − ${a}| ≤ 1 ✓. Transitive: try ${a} = 0, ${b} = 1, ${c} = 2. Then |0 − 1| = 1 ≤ 1 and |1 − 2| = 1 ≤ 1, but |0 − 2| = 2 ≰ 1. <b>Counterexample found: not transitive.</b> So ${R1} is <b>reflexive and symmetric but not transitive</b>, hence <b>not</b> an equivalence relation. (Moral: “closeness” relations almost always break transitivity, because small gaps accumulate.)`,
          `<b>(ii) ${R2} is an equivalence relation.</b> <b>Reflexive:</b> ${a} − ${a} = 0 ∈ ℤ ✓. <b>Symmetric:</b> if ${a} − ${b} ∈ ℤ then ${b} − ${a} = −(${a} − ${b}) ∈ ℤ ✓. <b>Transitive:</b> if ${a} − ${b} ∈ ℤ and ${b} − ${c} ∈ ℤ, then ${a} − ${c} = (${a} − ${b}) + (${b} − ${c}) ∈ ℤ (sum of integers) ✓. Therefore ${R2} is an equivalence relation. Two reals are related exactly when they have the <b>same fractional part</b>, so each class is<br>[${x}] = {${x} + ${k} ∶ ${k} ∈ ℤ},<br>a copy of the integers shifted by ${x}, e.g. [0.3] = {…, −1.7, −0.7, 0.3, 1.3, 2.3, …}.`,
          `<b>(iii)</b> Each class is uniquely labelled by its fractional part, which lives in [0,${NB}1), and every value of [0,${NB}1) gives a different class. So the number of distinct classes meeting [0,${NB}1) equals the number of points in [0,${NB}1): <b>uncountably infinitely many</b>.`,
        ],
        ans: '',
      },
      { t: 'fig', id: 'm12-01-fig-1.2' },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> On ${A} = {1, 2, 3}, classify ${R} = {${pair('1', '1')}, ${pair('2', '2')}, ${pair('3', '3')}, ${pair('1', '2')}, ${pair('2', '3')}, ${pair('1', '3')}} as reflexive / symmetric / transitive.`,
            a: 'Reflexive ✓, symmetric ✗, transitive ✓ (also antisymmetric).',
          },
          {
            q: `<b>[CUET]</b> State, with one-line reasons, which of reflexive, symmetric, transitive the empty relation on {${x}, ${y}} possesses.`,
            a: 'Symmetric ✓ and transitive ✓ (vacuously), reflexive ✗.',
          },
          {
            q: '<b>[JEE Main]</b> How many <b>reflexive</b> relations can be defined on a set with 3 elements?',
            a: `${REFL} = 2<sup>6</sup> = 64.`,
          },
          {
            q: `<b>[JEE Main]</b> On ℤ, define ${aRb} ⟺ ${a} + ${b} is even. Show ${R} is an equivalence relation and state how many equivalence classes it has.`,
            a: 'Equivalence; 2 classes (the even integers and the odd integers).',
          },
          {
            q: `<b>[JEE Advanced]</b> For ${A} = {1, 2, 3, 4}, find (a) the number of equivalence relations on ${A}, and (b) the number of symmetric relations on ${A}.`,
            a: `(a) ${BELL('4')} = 15; (b) ${SYMM} = 2<sup>10</sup> = 1024.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which relation on ℤ is an equivalence relation?',
        opts: [
          {
            label: `${aRb} ⟺ ${a} ≤ ${b}`,
            nudge: `<b>(a)</b> ≤ is reflexive and transitive but <b>antisymmetric, not symmetric</b> (2 ≤ 3 but 3 ≰ 2): it is a partial order, a classic look-alike.`,
          },
          { label: `${aRb} ⟺ (${a} − ${b}) is divisible by 3`, nudge: null },
          { label: `${aRb} ⟺ ${a} < ${b}`, nudge: `<b>(c)</b> < is not even reflexive (${a} < ${a} is false).` },
          {
            label: `${aRb} ⟺ |${a}| = ${b}`,
            nudge: '<b>(d)</b> fails reflexivity in general (|−2| = 2 ≠ −2) and symmetry; students pick it by pattern-matching “=” to “equivalence.”',
          },
        ],
        correct: 1,
        solution: `Divisibility-by-3 is the congruence relation: reflexive, symmetric, transitive (proved in the Key procedures and logical framework part with ${n} = 3).`,
      },
      {
        t: 'mcq',
        q: 'The empty relation on a non-empty set is:',
        opts: [
          { label: 'reflexive only', nudge: '<b>(a)</b> reverses the truth: it has no self-loops.' },
          { label: 'symmetric and transitive but not reflexive', nudge: null },
          { label: 'an equivalence relation', nudge: '<b>(c)</b> would need reflexivity.' },
          {
            label: 'none of the three properties',
            nudge: `<b>(d)</b> is the most popular wrong answer: students assume “nothing in ${R}” means “no properties,” forgetting vacuous truth.`,
          },
        ],
        correct: 1,
        solution: 'With no pairs present, the “if-then” conditions for symmetry and transitivity are <b>vacuously true</b>, but reflexivity demands self-pairs that are absent.',
      },
      {
        t: 'mcq',
        q: 'The number of reflexive relations on a set of 3 elements is:',
        opts: [
          { label: '64', nudge: null },
          { label: '512', nudge: '<b>(b)</b> = 2<sup>9</sup>, the count of all relations (ignoring the reflexive constraint).' },
          { label: '8', nudge: '<b>(c)</b> = 2<sup>3</sup> wrongly frees only the 3 self-pairs instead of fixing them.' },
          { label: '27', nudge: '<b>(d)</b> = 3<sup>3</sup> counts the functions from a 3-element set to itself, not relations.' },
        ],
        correct: 0,
        solution: 'Fix the 3 self-pairs and let the remaining 3<sup>2</sup> − 3 = 6 pairs be free: 2<sup>6</sup> = 64.',
      },
      {
        t: 'mcq',
        q: `On the set of all straight lines in a plane, define ${lin('1')}${R}${lin('2')} ⟺ ${lin('1')} ⊥ ${lin('2')}. Then ${R} is:`,
        opts: [
          { label: 'reflexive', nudge: '<b>(a)</b> a line is never perpendicular to itself, so not reflexive.' },
          { label: 'symmetric', nudge: null },
          {
            label: 'transitive',
            nudge: `<b>(c)</b> if ${lin('1')} ⊥ ${lin('2')} and ${lin('2')} ⊥ ${lin('3')}, then ${lin('1')} ∥ ${lin('3')} (not perpendicular): transitivity fails.`,
          },
          { label: 'an equivalence relation', nudge: '<b>(d)</b> needs all three.' },
        ],
        correct: 1,
        solution: `If ${lin('1')} ⊥ ${lin('2')} then ${lin('2')} ⊥ ${lin('1')}. The “⊥” relation is the textbook example of symmetric-only; the parallel relation “∥” (with every line counted as parallel to itself, as NCERT does) is the equivalence-relation cousin students often confuse it with.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>“Some self-loops” ≠ reflexive.</b> Reflexivity needs ${pair(a, a)} for <b>every</b> element of ${A}. Finding a few self-pairs and stopping is the single most common board-exam slip.`,
          '<b>The empty-relation blunder.</b> ∅ is <b>symmetric and transitive (vacuously)</b> but <b>not reflexive</b> on a non-empty set. Don’t write “empty, so no properties.”',
          '<b>Symmetric vs antisymmetric confusion.</b> These are not opposites. A relation can be both (e.g. identity), neither, or one without the other. “Not symmetric” does <b>not</b> imply “antisymmetric.”',
          `<b>Forgetting properties depend on the underlying set ${A}.</b> The same list of pairs can be reflexive on one set and not on a larger one: always state the set.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> To classify fast, <b>test reflexive first</b>: it’s the cheapest check and a single missing ${pair(a, a)} kills equivalence immediately. For symmetric and transitive, <b>hunt for one counterexample</b> instead of verifying every pair; you only need a single broken case to reject. For counting questions, memorise the three exponents: relations ${n}<sup>2</sup>, reflexive ${n}<sup>2</sup> − ${n}, symmetric ${fr(`${n}(${n} + 1)`, '2')}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `<b>Relation on ${A}</b>`,
            note: `any subset ${R} ⊆ ${AxA}. Extremes: Empty ∅, Universal ${AxA}, Identity ${IA} = {${pair(a, a)}}.`,
          },
          { f: '<b>Reflexive</b>', note: `${pair(a, a)} ∈ ${R} ∀${a}: self-loop on everyone.` },
          { f: '<b>Symmetric</b>', note: `${pair(a, b)} ∈ ${R} ⇒ ${pair(b, a)} ∈ ${R}: two-way street.` },
          { f: '<b>Transitive</b>', note: `${pair(a, b)}, ${pair(b, c)} ∈ ${R} ⇒ ${pair(a, c)} ∈ ${R}: chain has a shortcut.` },
          { f: '<b>Antisymmetric</b>', note: `${pair(a, b)}, ${pair(b, a)} ∈ ${R} ⇒ ${a} = ${b}.` },
          {
            f: `<b>Equivalence = R + S + T</b> ⇒ <b>partitions</b> ${A} into disjoint classes [${a}] = {${x} ∶ ${xRa}}.`,
            note: '',
          },
          {
            f: `<b>Counts (${n} = |${A}|)</b>`,
            note: `relations ${ALL} · reflexive ${REFL} · symmetric ${SYMM} · equivalence = ${BELL(n)} (1, 2, 5, 15, 52, …).`,
          },
        ],
        aids: [
          '“<b>S</b>ame–<b>M</b>irror–<b>C</b>hain” = Reflexive–Symmetric–Transitive.',
          '“<b>R + S + T = Rest</b> easy, it’s an <b>E</b>quivalence.”',
          'Empty relation = “<b>S</b>ymmetric & <b>T</b>ransitive for free, never <b>R</b>eflexive.”',
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 55–64 ────────────────
  {
    n: '02',
    title: 'Types of Functions',
    kalam: 'A function is a machine with one strict rule: feed it one input, and it returns exactly one output: never zero, never two.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A perennial heavyweight. CBSE Boards reliably ask a 3–5 mark “show that ${f} is bijective” proof (the NCERT favourite) ${ESTIMATE}. JEE Main carries 1–2 MCQs on classifying a function as injective/surjective/bijective or on <b>counting</b> functions of a given type ${ESTIMATE}. JEE Advanced layers it: counting one-one/onto functions, degree-parity arguments, and codomain manipulation (often multi-correct). CUET tests direct classification and counting. (Not in NEET: no mathematics section.)`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `A <b>function</b> is a machine with one strict rule: feed it one input, and it returns exactly one output: never zero, never two. A vending machine is the perfect picture. Press the button for cold coffee, and you get one cold coffee. The button can’t sometimes dispense nothing, and it can’t dispense two different drinks at once. Every button (input) is wired to exactly one slot (output). That wiring, the rule connecting inputs to outputs, is the function ${f} : ${A} → ${B}, where ${A} is the <b>domain</b> (all valid buttons) and ${B} is the <b>codomain</b> (all the slots the machine could in principle reach).`,
      },
      {
        t: 'p',
        html: 'Now, the types of functions are just answers to two simple questions about that wiring.',
      },
      {
        t: 'p',
        html: '<b>Question 1: Do different buttons ever give the same drink?</b>',
      },
      {
        t: 'p',
        html: 'If <b>no two different inputs ever share an output</b>, the function is <b>one-one</b> (or injective). Think of Aadhaar numbers: every citizen is assigned a distinct number; no two people share one. Different person in, different number out. The opposite case is <b>many-one</b>: two or more inputs collapse to the same output. The rule “the first letter of your name” is many-one: Aman, Anjali, and Arjun all map to ‘A’. So is squaring: both +2 and −2 map to 4. Whenever you see a ± symmetry or an even power, suspect many-one.',
      },
      {
        t: 'p',
        html: '<b>Question 2: Does every slot in the codomain actually get used?</b>',
      },
      {
        t: 'p',
        html: `If <b>every element of the codomain has at least one input pointing to it</b>, the function is <b>onto</b> (or surjective): nothing in ${B} is wasted. Picture a full Volvo bus where every single seat is occupied; no seat is left empty. The opposite is <b>into</b>: some codomain elements are never reached, empty seats remain. The squaring machine ${fRR}, ${fx} = ${x}<sup>2</sup> is into, because no negative number is ever an output; the entire negative half of the codomain sits empty.`,
      },
      {
        t: 'p',
        html: '<b>Putting them together.</b> A function that is <b>both one-one and onto</b> is <b>bijective</b>: a flawless one-to-one pairing where every input has its own private output and every output is claimed. This is like a perfect arranged-marriage register where every bride is matched to exactly one groom and nobody is left single on either side. Bijections are special because they can be <b>run backwards</b>: they are precisely the invertible functions (the subject of Topic 03).',
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Two graphical tests capture everything. Draw the graph and sweep a <b>horizontal line</b> across it: if the line ever cuts the curve at two or more points, two inputs share an output: not one-one. Separately, ask whether the curve’s <b>range fills the entire codomain</b>: if yes, it’s onto. A straight line ${y} = 2${x} − 7 passes both: every horizontal line hits it exactly once, and it climbs from −∞ to +∞. A parabola fails both.`,
      },
      { t: 'fig', id: 'm12-01-fig-1.3' },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> First, the thing must be a function before you classify it: each input needs exactly one output. Second, and this is the trap that catches most students: <b>the type depends entirely on the declared domain and codomain.</b> The very same rule changes character when you change the sets. ${fx} = ${x}<sup>2</sup> is into as ${RR}, but becomes <b>onto</b> as ℝ → ${INF('0')}, and <b>bijective</b> as ${INF('0')} → ${INF('0')}: same formula, three different answers. “Is this function onto?” is an incomplete question until ${B} is fixed. (This is the same condition-depends-on-the-underlying-set idea you met with reflexive relations in Topic 01.)`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `Let ${f} : ${A} → ${B} be a function, with ${a} ∈ ${A} having unique image ${f}(${a}) ∈ ${B}. Write ${n} = |${A}| (domain size) and ${m} = |${B}| (codomain size).`,
      },
      {
        t: 'formula',
        kicker: 'Injective, surjective and bijective',
        main: `Injective (one-one): ${fx1} = ${fx2} ⟹ ${x1} = ${x2}<br>(equivalently ${x1} ≠ ${x2} ⟹ ${fx1} ≠ ${fx2})<br>Surjective (onto): ∀${NB}${y} ∈ ${B}, ∃${NB}${x} ∈ ${A} with ${fx} = ${y}<br>⟺ ${RANGE(f)} = ${B}<br>Bijective: ${f} is injective <b>and</b> surjective<br>Many-one: ∃${NB}${x1} ≠ ${x2} with ${fx1} = ${fx2}<br>Into: ${RANGE(f)} ⊊ ${B}`,
        legend: [
          `${f} = a function from ${A} to ${B}`,
          `${A} = the domain`,
          `${B} = the codomain`,
          `${x1}, ${x2} = elements of ${A}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Special functions.</b> Identity ${IA}(${x}) = ${x} (always bijective). Constant ${fx} = ${c} for all ${x} (many-one whenever |${A}| > 1, and into whenever |${B}| > 1). Inclusion ${f}(${a}) = ${a} for ${A} ⊆ ${B} (injective, into if ${A} ≠ ${B}).`,
      },
      {
        t: 'p',
        html: `<b>Useful structural facts</b><br>• A polynomial ${fRR} of <b>odd</b> degree is <b>onto</b>; of <b>even</b> degree is <b>into</b> (never onto ℝ).<br>• A <b>strictly monotonic</b> function (always increasing or always decreasing) is <b>one-one</b>.<br>• An injective map from a <b>finite set to itself</b> is automatically <b>bijective</b> (and vice-versa).`,
      },
      {
        t: 'p',
        html: `<b>Counting properties</b> (the “formulas” of this topic). For ${f} : ${A} → ${B} with |${A}| = ${n}, |${B}| = ${m}:`,
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Count', 'Feasible only if'],
        rows: [
          [`All functions ${A} → ${B}`, `${m}<sup>${n}</sup>`, 'always'],
          ['Injective (one-one)', `${mPn} = ${fr(`${m}!`, `(${m} − ${n})!`)}`, `${m} ≥ ${n}`],
          ['Bijective', `${n}!`, `${m} = ${n}`],
          ['Surjective (onto)', ONTO_SUM, `${n} ≥ ${m}`],
          [`Injective ${A} → ${A} (self-map)`, `${n}!`, '– (equals bijective)'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Counting functions',
        main: `All functions ${A} → ${B}: ${m}<sup>${n}</sup><br>One-one (${m} ≥ ${n}): ${mPn} = ${fr(`${m}!`, `(${m} − ${n})!`)}<br>Bijective (${m} = ${n}): ${n}!`,
        legend: [`${n} = |${A}|, the size of the domain`, `${m} = |${B}|, the size of the codomain`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation lock (carried forward):</b> ${f}, ${I('g')} for functions; ${f} : ${A} → ${B}; Dom, Codom, Range; ${n} = |${A}|, ${m} = |${B}|; ${IA} for identity. These chain into Topics 03 (Composition) and 04 (Domain and Range) unchanged.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single derivation, so here is the working toolkit: first the tests, then a model bijectivity proof.',
      },
      {
        t: 'proc',
        title: 'Procedure A: Testing one-one (injectivity)',
        steps: [
          `<b>Algebraic</b> (the first of three routes; pick any)<b>:</b> assume ${fx1} = ${fx2} and try to force ${x1} = ${x2}. If you can, it’s one-one; if a step admits ${x1} ≠ ${x2} (e.g. ${x}<sub>1</sub><sup>2</sup> = ${x}<sub>2</sub><sup>2</sup> ⇒ ${x1} = ±${x2}), it’s many-one. <b>Why it works:</b> this is the definition applied directly.`,
          `<b>Calculus:</b> if ${f}′(${x}) > 0 everywhere on an interval (or < 0 everywhere), ${f} is strictly monotonic there, hence one-one. <b>Reasoning:</b> a strictly climbing graph can never revisit an output. (Fastest route for differentiable functions; the domain must have no gaps: ${fx} = ${x} − ${fr('1', x)} has ${f}′(${x}) > 0 on ℝ ∖ {0}, yet ${f}(−1) = ${f}(1) = 0.)`,
          '<b>Graphical:</b> the horizontal-line test.',
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure B: Testing onto (surjectivity).</b> Solve ${y} = ${fx} for ${x} in terms of ${y}, then ask: for every ${y} in the codomain ${B}, does a valid ${x} in the domain ${A} exist? If yes for all ${y} ∈ ${B}, it’s onto; if some ${y} yields no admissible ${x}, that ${y} is an empty seat and ${f} is into. Equivalently, compute ${RANGE(f)} and compare with ${B}.`,
      },
      {
        t: 'p',
        html: '<b>Procedure C: Model proof that a function is bijective.</b>',
      },
      {
        t: 'p',
        html: `<b>Claim:</b> ${f} : ℝ ∖ {2} → ℝ ∖ {1} defined by ${fx} = ${fr(`${x} + 3`, `${x} − 2`)} is bijective.`,
      },
      {
        t: 'p',
        html: `<b>Injective.</b> Suppose ${fx1} = ${fx2}:<br>${fr(`${x1} + 3`, `${x1} − 2`)} = ${fr(`${x2} + 3`, `${x2} − 2`)}<br>⟹ (${x1} + 3)(${x2} − 2) = (${x2} + 3)(${x1} − 2).<br>Expanding both sides,<br>${x1}${x2} − 2${x1} + 3${x2} − 6<br>= ${x1}${x2} − 2${x2} + 3${x1} − 6.<br><b>Reasoning:</b> the ${x1}${x2} and −6 terms cancel, leaving only the linear terms. Then −2${x1} + 3${x2} = −2${x2} + 3${x1}, i.e. 5${x2} = 5${x1}, so ${x1} = ${x2}. <b>Injective.</b> ✓`,
      },
      {
        t: 'p',
        html: `<b>Surjective.</b> Take any ${y} in the codomain and solve ${y} = ${fr(`${x} + 3`, `${x} − 2`)}:<br>${y}(${x} − 2) = ${x} + 3 ⟹ ${I('yx')} − 2${y} = ${x} + 3<br>⟹ ${x}(${y} − 1) = 2${y} + 3 ⟹ ${x} = ${fr(`2${y} + 3`, `${y} − 1`)}.<br><b>Reasoning:</b> this ${x} exists for every ${y} ≠ 1: exactly the codomain ℝ ∖ {1}. We must also confirm ${x} ≠ 2 (else ${x} leaves the domain): setting ${fr(`2${y} + 3`, `${y} − 1`)} = 2 gives 2${y} + 3 = 2${y} − 2, i.e. 3 = −2, impossible, so ${x} ≠ 2 always. Hence every ${y} has a valid preimage. <b>Surjective.</b> ✓`,
      },
      {
        t: 'p',
        html: `Both hold, so ${f} is <b>bijective</b>, and therefore invertible, with ${f}<sup>−1</sup>(${y}) = ${fr(`2${y} + 3`, `${y} − 1`)}. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Show that ${fRR} defined by ${fx} = 2${x} − 7 is a bijection.`,
        steps: [
          `<b>Given:</b> ${fx} = 2${x} − 7, domain and codomain ℝ.`,
          `<b>One-one:</b> Let ${fx1} = ${fx2}. Then 2${x1} − 7 = 2${x2} − 7 ⇒ 2${x1} = 2${x2} ⇒ ${x1} = ${x2}. Hence <b>one-one.</b> ✓`,
          `<b>Onto:</b> Let ${y} ∈ ℝ be arbitrary. Solve ${y} = 2${x} − 7 ⇒ ${x} = ${fr(`${y} + 7`, '2')}, which is a real number for every real ${y}, and ${f}(${fr(`${y} + 7`, '2')}) = ${y}. So every ${y} has a preimage in ℝ. Hence <b>onto.</b> ✓`,
          `<b>Conclusion:</b> ${f} is one-one and onto, therefore <b>bijective</b>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap',
        q: `Classify ${fx} = ${x}<sup>2</sup> + 1 in two cases: (a) ${fRR}; (b) ${f} : ℝ → ${INF('1')}. Use the fastest reasoning.`,
        steps: [
          '<b>Speed mindset:</b> spot the even power for one-one; read the codomain for onto.',
          `<b>One-one (same for both):</b> even power ⇒ ${f}(−${a}) = ${f}(${a}), e.g. ${f}(2) = ${f}(−2) = 5. Two inputs, one output: <b>many-one</b> instantly, no algebra needed.`,
          `<b>Onto:</b><br>• <b>(a) ${RR}:</b> outputs satisfy ${x}<sup>2</sup> + 1 ≥ 1, so Range = ${INF('1')} ⊊ ℝ. Negative numbers (and everything below 1) are never hit: <b>into</b>. So (a) is <b>many-one into</b>.<br>• <b>(b) ℝ → ${INF('1')}:</b> now Range = ${INF('1')} = codomain, so <b>onto</b>. So (b) is <b>many-one onto</b>.`,
          `<b>Lesson:</b> the one-one verdict never changed, but flipping the codomain flipped onto. Never declare “onto” without checking ${B}: the single most common speed-trap error.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (counting + inclusion–exclusion)',
        q: `Let ${X} have 4 elements and ${Y} have 5 elements. Find (a) the number of functions ${X} → ${Y}; (b) the number of one-one functions ${X} → ${Y}; (c) the number of onto functions ${Y} → ${X}.`,
        steps: [
          `<b>(a)</b> Each of the 4 elements of ${X} independently chooses one of 5 images: 5<sup>4</sup> = 625.`,
          `<b>(b)</b> One-one from ${X} (${n} = 4) to ${Y} (${m} = 5): feasible since ${m} ≥ ${n}.<br>${NP('5', '4')} = ${fr('5!', '(5 − 4)!')} = ${fr('120', '1')} = 120.`,
          `<b>(c)</b> Onto from ${Y} (${n} = 5) to ${X} (${m} = 4): feasible since ${n} ≥ ${m}. Apply inclusion–exclusion:<br>∑<sub>${k}=0</sub><sup>4</sup>(−1)<sup>${k}</sup>${bn('4', k)}(4 − ${k})<sup>5</sup><br>= 4<sup>5</sup> − ${bn('4', '1')}3<sup>5</sup> + ${bn('4', '2')}2<sup>5</sup> − ${bn('4', '3')}1<sup>5</sup><br>= 1024 − 4(243) + 6(32) − 4(1)<br>= 1024 − 972 + 192 − 4 = 240.`,
          '<b>Concept link:</b> function-counting rests on the multiplication principle, while onto-counting needs inclusion–exclusion to subtract off the maps that miss at least one target element.',
        ],
        ans: '(a) 625; (b) 120; (c) 240',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${fRR}, ${fx} = ${x}<sup>3</sup> − 3${x}. (i) Classify ${f} as one-one/many-one and into/onto, with reasoning. (ii) Find a maximal interval [${a},${NB}∞) and a codomain on which ${f} becomes a bijection.`,
        steps: [
          `<b>(i) Onto?</b> ${f} is an <b>odd-degree</b> polynomial, continuous, with ${fx} → +∞ as ${x} → +∞ and ${fx} → −∞ as ${x} → −∞. By the intermediate value theorem it attains every real value, so Range = ℝ: <b>onto.</b> ✓`,
          `<b>One-one?</b> ${f}′(${x}) = 3${x}<sup>2</sup> − 3 = 3(${x} − 1)(${x} + 1), which is zero at ${x} = ±1 and changes sign, so ${f} is <b>not monotonic</b>. Concretely, ${f}(0) = 0 and ${f}(√3) = 3√3 − 3√3 = 0, two inputs sharing the output 0. Hence <b>many-one.</b> ✗`,
          `So ${f} is <b>onto but not one-one</b> on ℝ.`,
          `<b>(ii) Making it bijective.</b> On ${INF('1')} we have ${f}′(${x}) = 3(${x}<sup>2</sup> − 1) ≥ 0, with equality only at ${x} = 1, so ${f} is strictly increasing there, hence one-one on ${INF('1')}. Its image is [${f}(1),${NB}∞) = [1 − 3,${NB}∞) = ${INF('−2')}. Therefore<br>${f} : ${INF('1')} → ${INF('−2')}, ${fx} = ${x}<sup>3</sup> − 3${x}<br>is <b>bijective</b>.`,
        ],
        ans: '',
      },
      { t: 'fig', id: 'm12-01-fig-1.4' },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Show that ${fRR}, ${fx} = 5${x} + 3 is a bijection.`,
            a: `Bijective (one-one: linear; onto: ${x} = ${fr(`${y} − 3`, '5')} ∈ ℝ).`,
          },
          {
            q: `<b>[CUET]</b> Classify ${fRR}, ${fx} = |${x}| as one-one/many-one and into/onto.`,
            a: `Many-one (|−${a}| = |${a}|) and into (range ${INF('0')} ≠ ℝ).`,
          },
          {
            q: '<b>[JEE Main]</b> Find the number of one-one functions from a set of 3 elements to a set of 5 elements.',
            a: `${NP('5', '3')} = 60.`,
          },
          {
            q: `<b>[JEE Main]</b> Classify ${fRR}, ${fx} = ${x}<sup>3</sup> + 1.`,
            a: `Bijective (odd-degree ⇒ onto; ${f}′(${x}) = 3${x}<sup>2</sup> ≥ 0, strictly increasing ⇒ one-one).`,
          },
          {
            q: '<b>[JEE Advanced]</b> Find the number of onto functions from a set of 5 elements to a set of 3 elements.',
            a: `3<sup>5</sup> − ${bn('3', '1')}2<sup>5</sup> + ${bn('3', '2')}1<sup>5</sup> = 243 − 96 + 3 = 150.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `${fRR}, ${fx} = ${x}<sup>2</sup> − 4${x} + 5. Then ${f} is:`,
        opts: [
          {
            label: 'one-one and onto',
            nudge: '<b>(a)</b> calls it one-one (and onto), but every parabola fails the horizontal-line test.',
          },
          {
            label: 'one-one and into',
            nudge: '<b>(b)</b> calls it one-one, but every parabola fails the horizontal-line test.',
          },
          {
            label: 'many-one and onto',
            nudge: '<b>(c)</b> calls it onto: students forget the codomain is all of ℝ while the range bottoms out at 1.',
          },
          { label: 'many-one and into', nudge: null },
        ],
        correct: 3,
        solution: `Completing the square, ${fx} = (${x} − 2)<sup>2</sup> + 1, a parabola with minimum value 1 at ${x} = 2. Range = ${INF('1')} ⊊ ℝ, so <b>into</b>; symmetry about ${x} = 2 (e.g. ${f}(1) = ${f}(3) = 2) makes it <b>many-one</b>.`,
      },
      {
        t: 'mcq',
        q: 'The total number of functions from a set of 3 elements to a set of 2 elements is:',
        opts: [
          { label: '6', nudge: '<b>(a)</b> = 3 × 2 multiplies instead of exponentiating.' },
          { label: '8', nudge: null },
          {
            label: '9',
            nudge: `<b>(c)</b> = 3<sup>2</sup> swaps base and exponent (a classic ${m}<sup>${n}</sup> vs ${n}<sup>${m}</sup> slip).`,
          },
          { label: '5', nudge: '<b>(d)</b> = 3 + 2, pure confusion.' },
        ],
        correct: 1,
        solution: 'Each of 3 inputs picks one of 2 images: 2<sup>3</sup> = 8.',
      },
      {
        t: 'mcq',
        q: `Which function ${fRR} is a bijection?`,
        opts: [
          { label: `${fx} = ${x}<sup>2</sup>`, nudge: `<b>(a)</b> ${x}<sup>2</sup> is many-one and into.` },
          { label: `${fx} = ${x}<sup>3</sup>`, nudge: null },
          {
            label: `${fx} = ${I('e')}<sup>${x}</sup>`,
            nudge: `<b>(c)</b> ${I('e')}<sup>${x}</sup> is one-one but <b>into</b> (range (0,${NB}∞), never reaching 0 or negatives): the most tempting wrong answer.`,
          },
          {
            label: `${fx} = sin${NB}${x}`,
            nudge: `<b>(d)</b> sin${NB}${x} is many-one (periodic) and into (range [−1,${NB}1]).`,
          },
        ],
        correct: 1,
        solution: `${fx} = ${x}<sup>3</sup> is strictly increasing (${f}′(${x}) = 3${x}<sup>2</sup> ≥ 0, zero only at a point) hence one-one, and odd-degree hence onto.`,
      },
      {
        t: 'mcq',
        q: `${f} : ℕ → ℕ defined by ${f}(${n}) = ${n} + 1 is:`,
        opts: [
          {
            label: 'bijective',
            nudge: '<b>(a)</b> would be correct on ℤ: students forget the domain is ℕ, where the “shift” leaves 1 uncovered.',
          },
          { label: 'one-one but not onto', nudge: null },
          { label: 'onto but not one-one', nudge: '<b>(c)</b>/<b>(d)</b> misread injectivity.' },
          { label: 'neither', nudge: '<b>(c)</b>/<b>(d)</b> misread injectivity.' },
        ],
        correct: 1,
        solution: `One-one: ${n}<sub>1</sub> + 1 = ${n}<sub>2</sub> + 1 ⇒ ${n}<sub>1</sub> = ${n}<sub>2</sub>. But 1 ∈ ℕ has <b>no preimage</b> (it would need ${n} = 0 ∉ ℕ), so not onto. This question is really testing domain awareness.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Declaring “onto” without stating the codomain.</b> “Onto” is meaningless until ${B} is fixed; you must compare ${RANGE(f)} with the given codomain, not with ℝ by reflex.`,
          `<b>Forgetting even powers, |${x}|, and trig functions are many-one.</b> The ± symmetry (or periodicity) silently kills injectivity; always check it before any algebra.`,
          '<b>Confusing “into” with “not a function.”</b> Into is a perfectly valid function type: it simply means not onto. Don’t reject the map.',
          `<b>Counting blunders.</b> Using ${m}<sup>${n}</sup> for one-one (it’s ${mPn}), or ignoring feasibility: there is <b>no</b> one-one function when the domain is bigger than the codomain (${n} > ${m}), and <b>no</b> onto function when the codomain is bigger (${m} > ${n}).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> For differentiable functions, check <b>monotonicity first</b>: if ${f}′ keeps one sign throughout an interval, ${f} is one-one there and you’re done, no algebra. For real polynomials ${RR}: <b>odd degree ⇒ onto, even degree ⇒ into</b> (never onto). And invoke the <b>pigeonhole</b> sanity check: if |${A}| > |${B}|, one-one is impossible; if |${A}| < |${B}|, onto is impossible.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Function</b>', note: `each input → exactly one output. Domain ${A}, codomain ${B}.` },
          {
            f: '<b>Injective (one-one)</b>',
            note: `${fx1} = ${fx2} ⇒ ${x1} = ${x2}. Test: horizontal line / strict monotonicity (${f}′ one sign on an interval).`,
          },
          { f: '<b>Surjective (onto)</b>', note: `${RANGE(f)} = ${B}: nothing left out.` },
          { f: '<b>Bijective = one-one + onto = invertible.</b>', note: '' },
          { f: '<b>Many-one / Into</b> = the negations.', note: '' },
          {
            f: `<b>Counts</b> (${n} = |${A}|, ${m} = |${B}|)`,
            note: `functions ${m}<sup>${n}</sup> · one-one ${mPn} (need ${m} ≥ ${n}) · onto ${ONTO_SUM} (need ${n} ≥ ${m}) · bijective ${n}! (need ${m} = ${n}).`,
          },
          { f: '<b>Odd-degree polynomial ⇒ onto; even-degree ⇒ into. Strictly monotonic ⇒ one-one.</b>', note: '' },
        ],
        aids: [
          '“<b>ONE</b>-one ⇒ different stay different; <b>ONTO</b> ⇒ nothing left out.”',
          '“<b>B</b>ijective ⇒ both ⇒ inverti<b>B</b>le.”',
          'Type depends on <b>both</b> domain and codomain: change the set, change the answer.',
        ],
      },
    ],
  },
];
