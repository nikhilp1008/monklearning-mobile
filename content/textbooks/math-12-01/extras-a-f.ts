import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional topics A–F, pp. 102–118 of the Class 12 Mathematics
 * Master Reference (October 2026 edition), word for word: the "Chapter 1:
 * Relations and Functions — Additional Topics" part's Addenda A to F, with the
 * book's letters. Its heading is not copied; its p. 102 opening paragraph is the
 * first paragraph of A's "Introduction". Each addendum's opening text is its
 * "Introduction" part, then its own headings: Method, the run of "Example X.N"
 * worked examples (one part, "Worked examples"), and "Practice — Addendum X"
 * ("Practice", answers set against their questions). The book's example numbers
 * in running text are reworded to what the reader shows ("this topic’s second
 * worked example"); the method labels A1 … F4 are kept. Piecewise definitions
 * (the book's brace) are written one line per piece. Fractions inside a
 * fraction's numerator (D.3, F.1, F practice 3) are written with ÷. No drawings
 * on these pages. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar. */
const WJ = '⁠';
/** Two line breaks: keeps two stacked fractions off neighbouring lines. */
const BB = '<br><br>';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const e = I('e');
const f = I('f');
const g = I('g');
const i = I('i');
const j = I('j');
const k = I('k');
const m = I('m');
const n = I('n');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const E = I('E');
const H = I('H');
const R = I('R');
const S = I('S');
const T = I('T');
const Id = I('I');
const sg = I('σ');

const sub = (s: string, u: string) => `${s}<sub>${u}</sub>`;
const sup = (s: string, u: string) => `${s}<sup>${u}</sup>`;
const abs = (s: string) => `|${WJ}${s}|`;
/** A short relation kept on one line. */
const rl = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** A short pair or interval kept on one line. */
const pr = (p: string, q: string) => `(${p},${NB}${q})`;
const iv = (o: string, p: string, q: string, cl: string) => `${o}${p},${NB}${q}${cl}`;
/** f ∘ g, kept on one line. */
const o = (u: string, v: string) => `${u}${NB}∘${NB}${v}`;
const of = (s: string, arg: string) => `${s}(${arg})`;
const inv = (s: string) => `${s}<sup>−1</sup>`;

const fx = of(f, x);
const gx = of(g, x);
const fi = inv(f);
const gof = o(g, f);
const fog = o(f, g);
const x2 = sup(x, '2');
const t2 = sup(t, '2');
const ex = sup(e, x);
const x0 = sub(x, '0');
const x1 = sub(x, '1');
const xx2 = sub(x, '2');
const Ci = sub(C, i);
const C1 = sub(C, '1');
const C2 = sub(C, '2');
const Eb = sub(E, b);
const Bn = (s: string) => sub(B, s);
const Snk = (p: string, q: string) => `${S}(${p}, ${q})`;
const it = (s: string) => sup(f, s);
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const HALF = fr('1', '2');
const T2 = fr(T, '2');
const R0 = iv('(', '0', '∞', ')');
const dom = (s: string) => `Dom(${s})`;
const rng = (s: string) => `Range(${s})`;
const PIECE = (lhs: string, rule: string, cond: string) => `${lhs} = ${rule},${NB}${NB}${cond}`;
/** The fraction (1 + f)/(1 − f) of Additional D. */
const RECUR = (s: string) => fr(`1 + ${s}`, `1 − ${s}`);
const XM = fr(`${x} − 1`, `${x} + 1`);
const XP = fr(`1 + ${x}`, `1 − ${x}`);
const XQ = fr(`${x} + 1`, `${x} − 1`);
const DER = (s: string) => `!${s}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 102–104 ────────────────
  {
    n: 'A',
    title: 'Equivalence Classes: The Two Proofs and the Completion Problem',
    extra: true,
    kalam: 'Nothing here is new theory; every method is a definition you already own, applied one layer deeper.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `The chapter gave you the vocabulary (relations, equivalence, injective/surjective/bijective), the machinery (composition, inverse, domain–range, symmetry, periodicity, functional equations), and a solid stock of board-level and JEE Main-level technique. Six examinable patterns are still standing outside. Additional topic A proves the two structural facts about equivalence classes the chapter asserts without proof, and solves the “complete the relation” family those facts unlock. Additional topic B proves the composition transfer laws, exposes their false converses, and shows how to run a composite backwards. Additional topic C handles inverses on restricted domains: the maximal-interval and piecewise-inverse patterns the chapter’s swap-and-solve barely touches. Additional topic D builds the pipeline from symmetry axes to periods and extracts periods hidden inside functional equations, a JEE Advanced signature. Additional topic E derives the counting formulas the chapter merely quotes: surjections, derangements, and Bell numbers by hand. Additional topic F treats iterates ${f} ∘ ${f} ∘ ⋯ ∘ ${f}, where a function cycles and powers of it collapse modulo the cycle length. Nothing here is new theory; every method is a definition you already own, applied one layer deeper.`,
      },
      {
        t: 'p',
        html: `Topic 01 defines [${a}] and states that the distinct classes partition ${A}. Both halves of that statement are provable in four lines each, and JEE Advanced regularly tests exactly these facts ${ESTIMATE}, or the consequence that matters more practically: given an arbitrary relation ${R}, find the smallest equivalence relation containing it.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>A1: Distinct classes are disjoint.</b> Suppose ${c} ∈ [${a}] ∩ [${b}]. Then ${I('cRa')} and ${I('cRb')}. Take any ${x} ∈ [${a}], so ${I('xRa')}. By symmetry ${I('aRc')}, so transitivity gives ${I('xRc')}, and with ${I('cRb')} transitivity gives ${I('xRb')}, i.e. ${x} ∈ [${b}]. Hence [${a}] ⊆ [${b}]; swapping the roles of ${a} and ${b} gives [${b}] ⊆ [${a}]. Therefore<br>[${a}] ∩ [${b}] ≠ ∅ ⟹ [${a}] = [${b}].<br>So two classes are either identical or disjoint: never partially overlapping.`,
      },
      {
        t: 'p',
        html: `<b>A2: The classes cover ${A}.</b> Reflexivity gives ${I('aRa')}, so ${a} ∈ [${a}] for every ${a} ∈ ${A}. Hence ⋃<sub>${a}</sub>[${a}] = ${A}.<br>Together A1 and A2 say the distinct classes form a partition of ${A}.`,
      },
      {
        t: 'p',
        html: `<b>A3: Characterisation of membership.</b><br>${I('xRy')} ⟺ [${x}] = [${y}].<br><b>Forward:</b> ${y} ∈ [${x}], so [${x}] ∩ [${y}] ≠ ∅, and A1 forces equality. <b>Backward:</b> ${x} ∈ [${x}] = [${y}] means ${I('xRy')}.`,
      },
      {
        t: 'p',
        html: `<b>A4: Every partition comes from an equivalence relation.</b> Given a partition ${sub(A, '1')}, ${sub(A, '2')}, …, ${sub(A, k)} of ${A}, define<br>${I('xRy')} ⟺ ${x} and ${y} lie in the same block ${sub(A, i)}.<br>Reflexive: ${x} lies in some block. Symmetric: “same block” reads the same both ways. Transitive: ${y} lies in a unique block (blocks are disjoint), so ${x},${NB}${y} in one block and ${y},${NB}${z} in one block forces all three into the same block. So ${R} is an equivalence relation, and its classes are precisely the blocks.`,
      },
      {
        t: 'p',
        html: `Given ${R} on a finite ${A}, the smallest equivalence relation containing ${R} is built like this:`,
      },
      {
        t: 'proc',
        title: 'A5: The completion problem',
        steps: [
          `Draw an undirected graph on ${A}: join ${a} to ${b} whenever ${pr(a, b)} ∈ ${R} with ${rl(a, '≠', b)}. Loops are irrelevant.`,
          `Find the connected components ${C1}, ${C2}, …`,
          `The answer is ⋃<sub>${i}</sub>(${Ci} × ${Ci}): every element relates to everything in its own component and nothing outside.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Why this is forced:</b> any equivalence relation containing ${R} must contain ${pr(a, b)} whenever ${a} and ${b} are joined by a chain of ${R}-pairs (symmetry walks the chain backwards, transitivity collapses it), so it must contain each ${Ci} × ${Ci}. And A4 shows the union really is an equivalence relation. Nothing smaller survives; nothing larger is needed.`,
      },
      { t: 'p', html: '<b>Counting:</b> the number of pairs to add is:' },
      {
        t: 'formula',
        kicker: 'Pairs to add to make R an equivalence relation',
        main: `∑<sub>${i}</sub> ${abs(Ci)}<sup>2</sup> − ${abs(R)}`,
        legend: [`${Ci} = a connected component of the graph (an isolated element is a component of size 1)`, `${abs(R)} = the number of pairs already in ${R}`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: `On ${A} = {1, 2, 3, 4}, let ${R} = {${pr('1', '2')}, ${pr('2', '3')}, ${pr('4', '4')}}. Find the minimum number of ordered pairs that must be added to make ${R} an equivalence relation, and write down the resulting relation.`,
        steps: [
          `The graph joins 1–2–3 in one chain; 4 is isolated (its loop ${pr('4', '4')} creates no edge). Components: ${C1} = {1, 2, 3}, ${C2} = {4}.`,
          `The completed relation is ${C1} × ${C1} ∪ ${C2} × ${C2}: nine pairs inside {1, 2, 3} plus the single pair ${pr('4', '4')}, ten pairs in all. Already present: ${pr('1', '2')}, ${pr('2', '3')}, ${pr('4', '4')}. So we add<br>∑${abs(Ci)}<sup>2</sup> − ${abs(R)} = (9 + 1) − 3 = 7 pairs,<br>namely ${pr('1', '1')}, ${pr('2', '2')}, ${pr('3', '3')}, ${pr('2', '1')}, ${pr('1', '3')}, ${pr('3', '1')}, ${pr('3', '2')}.`,
          `<b>Check.</b> The result is {1, 2, 3} × {1, 2, 3} ∪ {${pr('4', '4')}}: reflexive (every element paired with itself), symmetric (full products are symmetric), transitive (products are transitive). It contains ${R}. And it must be smallest: any equivalence relation containing ${pr('1', '2')} and ${pr('2', '3')} is forced by symmetry and transitivity to contain all nine pairs on {1, 2, 3}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: '(a) Show that the number of equivalence relations on a 4-element set is 15, by counting partitions directly. (b) How many of these place 1 and 2 in the same class? How many place them in different classes?',
        steps: [
          `<b>(a)</b> By A1–A4, equivalence relations on ${A} correspond one-to-one with partitions of ${A}. Count partitions of {1, 2, 3, 4} by the number of blocks:<br>• <b>4 blocks:</b> all singletons, 1 way.<br>• <b>3 blocks:</b> exactly one block is a pair; choose it: ${bn('4', '2')} = 6 ways.<br>• <b>2 blocks:</b> sizes 1 + 3 or 2 + 2. For 1 + 3: choose the singleton, 4 ways. For 2 + 2: choose one block, ${fr(bn('4', '2'), '2')} = 3 ways (dividing by 2 because choosing either block names the same partition). Total 7.<br>• <b>1 block:</b> 1 way.${BB}1 + 6 + 7 + 1 = 15 = ${Bn('4')}. ✓`,
          `<b>(b)</b> Equivalence relations with 1 and 2 in the same class correspond to partitions of the three-object collection {{1, 2}, 3, 4}, of which there are ${Bn('3')} = 5. So:<br>same class: 5, different classes: 15 − 5 = 10.`,
          '<b>Check.</b> Listing the five “same-class” partitions: {1, 2} | {3} | {4}; {1, 2, 3} | {4}; {1, 2, 4} | {3}; {1, 2} | {3, 4}; {1, 2, 3, 4}. Five, as claimed.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `On ${A} = {1, 2, 3}, ${R} = {${pr('1', '2')}, ${pr('2', '1')}, ${pr('1', '3')}}. Find the minimum number of pairs to add to make ${R} an equivalence relation.`,
            a: 'One component of size 3, so the completion is all 9 pairs; 9 − 3 = 6 pairs to add.',
          },
          {
            q: `Prove: if ${R} is an equivalence relation on ${A} and ${I('xRy')}, then [${x}] = [${y}].`,
            a: `${y} ∈ [${x}] gives [${x}] ∩ [${y}] ≠ ∅, so A1 forces [${x}] = [${y}].`,
          },
          {
            q: 'How many equivalence relations on {1, 2, 3, 4} have [1] = {1, 2}?',
            a: `The rest {3, 4} may be partitioned freely: ${Bn('2')} = 2 ways (together or separate).`,
          },
          {
            q: 'Write out the equivalence relation arising from the partition {{1, 4}, {2, 3}}.',
            a: `{${pr('1', '1')}, ${pr('4', '4')}, ${pr('1', '4')}, ${pr('4', '1')}, ${pr('2', '2')}, ${pr('3', '3')}, ${pr('2', '3')}, ${pr('3', '2')}}: eight pairs.`,
          },
          {
            q: `Find the smallest equivalence relation on {1, 2, 3, 4} containing {${pr('1', '2')}, ${pr('3', '4')}}, and state how many pairs it has.`,
            a: '{1, 2} × {1, 2} ∪ {3, 4} × {3, 4}: eight pairs.',
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 105–107 ────────────────
  {
    n: 'B',
    title: 'Composition: Transfer Laws, False Converses, and Running Composites Backwards',
    extra: true,
    kalam: 'Always filter by f(x) ∈ Dom(g); never shortcut.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 03 lists the inheritance facts (“${gof} injective/surjective when both are”) and the partial converses, without proof. JEE Advanced tests those facts, sets counterexamples killing the converses, and asks for two skills the chapter skips: computing the domain of a composite properly, and recovering ${f} from a formula for ${fog}.`,
      },

      { t: 'part', title: 'Method' },
      { t: 'p', html: '<b>B1: Transfer laws (with proofs).</b>' },
      {
        t: 'p',
        html: `<b>If ${gof} is injective, then ${f} is injective.</b> Suppose ${of(f, x1)} = ${of(f, xx2)}. Applying ${g} to both sides,<br>${g}(${of(f, x1)}) = ${g}(${of(f, xx2)}),<br>i.e. (${gof})(${x1}) = (${gof})(${xx2}).<br>Injectivity of ${gof} forces ${x1} = ${xx2}. Done. Notice the proof never uses any property of ${g} beyond being a function.`,
      },
      {
        t: 'p',
        html: `<b>If ${gof} is surjective, then ${g} is surjective.</b> Take any ${y} in the codomain of ${g}. Surjectivity of ${gof} supplies ${x} with (${gof})(${x}) = ${y}, i.e. ${g}(${fx}) = ${y}. The element ${fx} lies in the intermediate set, so ${y} has a preimage under ${g}. Done.`,
      },
      { t: 'p', html: '<b>B2: The false converses (memorise these counterexamples).</b>' },
      {
        t: 'p',
        html: `<b>${gof} injective does not force ${g} injective.</b> Let ${f} : ℝ → ℝ, ${fx} = ${ex}, and let ${of(g, t)} = ${t} for ${rl(t, '>', '0')} while ${of(g, t)} = 1 − ${t} for ${rl(t, '≤', '0')}. Then ${gof} = ${ex} is injective, but ${of(g, '0')} = 1 = ${of(g, '1')}, so ${g} is not. The failure of ${g} happens entirely off the range of ${f}, where ${gof} cannot see it.`,
      },
      {
        t: 'p',
        html: `<b>${gof} surjective does not force ${f} surjective.</b> With the same ${fx} = ${ex} (which misses every negative number) and ${of(g, t)} = ln${NB}${t} for ${rl(t, '>', '0')}, ${of(g, t)} = 0 for ${rl(t, '≤', '0')}, the composite is ${g}(${fx}) = ${x}, onto all of ℝ, while ${f} is not onto. The surjectivity of the composite is manufactured by ${g} alone.`,
      },
      { t: 'p', html: '<b>B3: Domain of a composite.</b>' },
      {
        t: 'formula',
        kicker: 'Domain of a composite',
        main: `${dom(gof)} = {${x} ∈ ${dom(f)} ∶ ${fx} ∈ ${dom(g)}}`,
        legend: [`${f} = the inner function`, `${g} = the outer function`],
        note: null,
      },
      {
        t: 'p',
        html: `Procedure: start inside ${dom(f)}, then impose the condition that the output ${fx} is a legal input for ${g}. This is <b>not</b> the intersection ${dom(f)} ∩ ${dom(g)}: see this topic’s second worked example.`,
      },
      {
        t: 'p',
        html: `<b>B4: Recovering ${f} from ${fog}.</b> If (${fog})(${x}) = ${of(H, x)} and ${g} is a formula you recognise, substitute ${t} = ${gx}, solve for ${x} in terms of ${t}, and rewrite ${H}:<br>${of(f, t)} = ${H}(${of(x, t)}).<br>This is the ${y}-method of Topic 04 run on symbols instead of values.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `True or false: if ${gof} is injective, then ${g} is injective on the range of ${f}.`,
        steps: [
          `True, and worth separating from B2’s false converse. Take two outputs ${of(f, x1)} and ${of(f, xx2)} in ${rng(f)} with ${g}(${of(f, x1)}) = ${g}(${of(f, xx2)}). That says (${gof})(${x1}) = (${gof})(${xx2}), so injectivity of ${gof} gives ${x1} = ${xx2}, and hence ${of(f, x1)} = ${of(f, xx2)}. So ${g} is injective when restricted to inputs that actually arise from ${f}. The counterexample in B2 works only because ${g} misbehaves at inputs (0, in that example) that ${f} never produces.`,
          `<b>Exam takeaway:</b> the phrase “on the range of ${f}” is what makes the statement true.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${f} : ${R0} → ℝ, ${fx} = ln${NB}${x}, and ${g} : ℝ → ℝ, ${of(g, t)} = ${t2} − 2${t}. Find ${dom(gof)}, decide whether ${gof} is one-one, and find its range.`,
        steps: [
          `<b>Domain.</b> ${dom(f)} = ${R0}, and ${fx} = ln${NB}${x} is always a legal real input for ${g}. So<br>${dom(gof)} = ${R0}.`,
          `<b>Contrast:</b> ${dom(f)} ∩ ${dom(g)} = ${R0} ∩ ℝ = ${R0}: here they coincide, but had ${g} been ${of(g, t)} = log(${t} − 1), the composite would demand ln${NB}${x} > 1, i.e. ${rl(x, '>', e)}, a strictly smaller set than the intersection. Always filter by ${fx} ∈ ${dom(g)}; never shortcut.`,
          `<b>One-one?</b> Substitute ${t} = ln${NB}${x}. As ${x} runs over ${R0}, ${t} runs over all of ℝ, and<br>(${gof})(${x}) = (ln${NB}${x})<sup>2</sup> − 2${NB}ln${NB}${x} = ${t2} − 2${t}.<br>But ${t2} − 2${t} takes the same value at ${rl(t, '=', '0')} and ${rl(t, '=', '2')}: correspondingly ${rl(x, '=', '1')} and ${x} = ${sup(e, '2')} both give (${gof})(${x}) = 0. Many-one.`,
          `<b>Range.</b> Complete the square:<br>${t2} − 2${t} = (${t} − 1)<sup>2</sup> − 1 ≥ −1,<br>with equality at ${rl(t, '=', '1')}, i.e. ${rl(x, '=', e)}. Since ${t} ranges over all of ℝ, every value in ${iv('[', '−1', '∞', ')')} occurs:<br>${rng(gof)} = ${iv('[', '−1', '∞', ')')}.`,
          `<b>Check.</b> (${gof})(${e}) = 1 − 2 = −1, the minimum, attained. (${gof})(1) = 0 = (${gof})(${sup(e, '2')}), confirming many-one concretely.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Given (${fog})(${x}) = ${x2} + 6${x} + 7 where ${gx} = ${x} + 3, find ${fx}.`,
        steps: [
          `Put ${t} = ${gx} = ${x} + 3, so ${x} = ${t} − 3. Then<br>${of(f, t)} = (${t} − 3)<sup>2</sup> + 6(${t} − 3) + 7<br>= ${t2} − 6${t} + 9 + 6${t} − 18 + 7 = ${t2} − 2.`,
          `So ${fx} = ${x2} − 2.`,
          `<b>Check.</b> ${f}(${gx}) = (${x} + 3)<sup>2</sup> − 2 = ${x2} + 6${x} + 7. ✓`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `${fx} = √${x}, ${gx} = ${x2} − 3. Find ${dom(gof)} and ${dom(fog)}.`,
            a: `${dom(gof)} = ${iv('[', '0', '∞', ')')} (every √${x} is legal for ${g}); ${dom(fog)} = {${x} ∶ ${x2} − 3 ≥ 0}<br>= ${iv('(', '−∞', '−√3', ']')} ∪ ${iv('[', '√3', '∞', ')')}.`,
          },
          {
            q: `Construct functions ${f},${NB}${g} with ${gof} onto but ${f} not onto.`,
            a: `${fx} = ${ex} from ℝ to ℝ; ${of(g, t)} = ln${NB}${t} for ${rl(t, '>', '0')} and ${of(g, t)} = 0 for ${rl(t, '≤', '0')}; then ${gof} = ${x} is onto while ${f} misses all negatives.`,
          },
          {
            q: `Given ${of(f, `${x} + 2`)} = ${x2} + 4${x} + 1 for all real ${x}, find ${fx}.`,
            a: `Put ${t} = ${x} + 2: ${of(f, t)} = (${t} − 2)<sup>2</sup> + 4(${t} − 2) + 1 = ${t2} − 3.`,
          },
          {
            q: `True or false: ${gof} injective ⟹ ${f} injective.`,
            a: 'True, proved in B1.',
          },
          {
            q: `For ${fx} = ${x2} and ${gx} = 2${x} + 1 on ℝ, solve (${fog})(${x}) = (${gof})(${x}).`,
            a: `(2${x} + 1)<sup>2</sup> = 2${x2} + 1 gives 2${x2} + 4${x} = 0, so ${rl(x, '=', '0')} or ${rl(x, '=', '−2')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 107–110 ────────────────
  {
    n: 'C',
    title: 'Inverses on Restricted Domains',
    extra: true,
    kalam: 'Swap-and-solve presupposes a bijection.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Swap-and-solve presupposes a bijection. Most functions you meet are not bijective on their natural domain, but almost all become bijective on the right piece. CBSE asks for the inverse of a quadratic on a chosen branch; JEE Main asks which maximal intervals support an inverse; JEE Advanced asks you to find the inverse of a piecewise function or of something like ${sup('2', x)} + ${sup('2', `−${x}`)}, where choosing the correct root of a quadratic is the whole game.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>C1: The restriction principle.</b> If ${f} is strictly monotonic on an interval ${I('I')}, then ${f} : ${I('I')} → ${of(f, I('I'))} is bijective, hence invertible. For the standard functions of this course, the maximal such intervals end at turning points (where ${f}′ changes sign: ${f}′(${x}) = 0, or a corner where ${f}′ does not exist) or at breaks in the formula.`,
      },
      {
        t: 'proc',
        title: 'C2: Procedure for a maximal-interval inverse',
        steps: [
          'Locate turning points / breaks; they cut the domain into monotonic branches.',
          `Compute each branch’s image ${of(f, I('I'))}: that becomes the codomain, and later the domain of that branch’s inverse.`,
          `Invert branch by branch with swap-and-solve. Where a quadratic appears, you will get two roots; the branch condition (${x} ≥ vertex or ${x} ≤ vertex) selects the sign of the square root.`,
        ],
      },
      {
        t: 'p',
        html: `<b>C3: Piecewise inverses.</b> For<br>${PIECE(fx, `${sub(f, '1')}(${x})`, `${x} ∈ ${sub(I('I'), '1')}`)}<br>${PIECE(fx, `${sub(f, '2')}(${x})`, `${x} ∈ ${sub(I('I'), '2')}`)}<br>⋮<br>invert each piece separately. The domain of ${fi} is the union of the piece-images ${sub(f, i)}(${sub(I('I'), i)}). Sanity check: if two piece-images overlap, some output has two preimages and ${f} was never one-one: once each piece is one-one on its own interval, the overlap test is the injectivity test.`,
      },
      {
        t: 'p',
        html: `<b>C4: Graph check.</b> ${fi} is the reflection of ${f} in the line ${rl(y, '=', x)}: increasing stays increasing, and each branch’s endpoints swap coordinates.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: `Find the maximal intervals on which ${fx} = ${x2} − 4${x} + 5 is invertible, and find ${fi} on each.`,
        steps: [
          `Complete the square: ${fx} = (${x} − 2)<sup>2</sup> + 1. Single turning point at ${rl(x, '=', '2')}, value 1. Branches:<br>${iv('(', '−∞', '2', ']')} ⟶ ${iv('[', '1', '∞', ')')},<br>${iv('[', '2', '∞', ')')} ⟶ ${iv('[', '1', '∞', ')')},<br>both strictly monotonic (down then up), both onto ${iv('[', '1', '∞', ')')}. These are the maximal intervals.`,
          `Invert on the right branch, where ${rl(x, '≥', '2')}:<br>${y} = (${x} − 2)<sup>2</sup> + 1 ⟹ (${x} − 2)<sup>2</sup> = ${y} − 1<br>⟹ ${x} = 2 + √(${y} − 1),<br>taking the + root because ${rl(x, '≥', '2')}. So<br>${of(fi, x)} = 2 + √(${x} − 1), ${x} ∈ ${iv('[', '1', '∞', ')')}.`,
          `The left branch gives ${of(fi, x)} = 2 − √(${x} − 1) on the same domain.`,
          `<b>Check.</b> ${of(f, '4')} = 5 and ${of(fi, '5')} = 2 + 2 = 4. ✓ The vertex value 1 maps to ${rl(x, '=', '2')} under both inverses, as the reflection picture demands.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Invert the piecewise function<br>${PIECE(fx, x, rl(x, '≤', '1'))}<br>${PIECE(fx, x2, `1 < ${rl(x, '≤', '2')}`)}<br>${PIECE(fx, `2${x}`, rl(x, '>', '2'))}`,
        steps: [
          `<b>First confirm it is invertible.</b> Piece-images:<br>${iv('(', '−∞', '1', ']')}, ${iv('(', '1', '4', ']')}, ${iv('(', '4', '∞', ')')}.<br>They are pairwise disjoint and cover ℝ, so ${f} is one-one with range ℝ. (Had the middle piece been ${x2} − 1 on 1 < ${rl(x, '≤', '2')}, its image ${iv('(', '0', '3', ']')} would overlap ${iv('(', '−∞', '1', ']')} in ${iv('(', '0', '1', ']')}, and ${f} would fail injectivity before any inversion.)`,
          `<b>Invert piece by piece.</b> Each piece is simple: ${x} ↦ ${x} is self-inverse; ${x} ↦ ${x2} on ${rl(x, '>', '1')} inverts to +√${x}; ${x} ↦ 2${x} inverts to ${fr(x, '2')}. Matching domains to the piece-images:<br>${PIECE(of(fi, x), x, rl(x, '≤', '1'))}<br>${PIECE(of(fi, x), `√${x}`, `1 < ${rl(x, '≤', '4')}`)}<br>${PIECE(of(fi, x), fr(x, '2'), rl(x, '>', '4'))}`,
          `<b>Check.</b> ${of(f, '1.5')} = 2.25 and ${of(fi, '2.25')} = 1.5. ✓ ${of(f, '3')} = 6 and ${of(fi, '6')} = 3. ✓ The breakpoints 1 and 4 of ${fi} are the images of the breakpoints 1 and 2 of ${f}: the domain–range swap in action.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Show that ${fx} = ${sup('2', x)} + ${sup('2', `−${x}`)} is a bijection from ${iv('[', '0', '∞', ')')} onto its image, find the image, and find ${fi}.`,
        steps: [
          `<b>Monotonicity.</b> ${f} is even, so it cannot be one-one on ℝ; but on ${iv('[', '0', '∞', ')')},<br>${f}′(${x}) = (ln${NB}2)(${sup('2', x)} − ${sup('2', `−${x}`)}) ≥ 0,<br>with equality only at ${rl(x, '=', '0')}. So ${f} is strictly increasing on ${iv('[', '0', '∞', ')')}: one-one there.`,
          `<b>Image.</b> ${of(f, '0')} = 2, and ${fx} → ∞ as ${x} → ∞; by strict increase the image is exactly ${iv('[', '2', '∞', ')')}.`,
          `<b>Inverse.</b> Write ${t} = ${sup('2', x)}, so ${rl(t, '≥', '1')} and ${y} = ${t} + ${fr('1', t)}. Clearing the fraction:<br>${t2} − ${I('yt')} + 1 = 0 ⟹ ${t} = ${fr(`${y} ± √(${sup(y, '2')} − 4)`, '2')}.${BB}The two roots multiply to 1 (product of roots), so exactly one of them is ≥ 1, except at ${rl(y, '=', '2')} where both equal 1. Since ${rl(t, '≥', '1')}, take the + root:<br>${sup('2', x)} = ${fr(`${y} + √(${sup(y, '2')} − 4)`, '2')}${BB}⟹ ${of(fi, x)} = log<sub>2</sub>(${fr(`${x} + √(${x2} − 4)`, '2')}), ${x} ∈ ${iv('[', '2', '∞', ')')}.`,
          `<b>Check.</b> ${of(fi, '2')} = log<sub>2</sub>(1) = 0 = ${fi}(${of(f, '0')}). ✓ As ${x} → ∞ the inverse grows like log<sub>2</sub>${NB}${x}, consistent with ${f} growing exponentially.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the maximal intervals of invertibility of ${fx} = |${WJ}${x} − 1| + 2, and ${fi} on each.`,
            a: `Vertex at ${pr('1', '2')}; branches ${iv('(', '−∞', '1', ']')} and ${iv('[', '1', '∞', ')')}, both onto ${iv('[', '2', '∞', ')')}; on ${iv('(', '−∞', '1', ']')} the function is ${fx} = 3 − ${x}, so ${of(fi, x)} = 3 − ${x}; on ${iv('[', '1', '∞', ')')} it is ${fx} = ${x} + 1, so ${of(fi, x)} = ${x} − 1; both inverses are defined on ${iv('[', '2', '∞', ')')}. (Check: ${of(f, '0')} = 3 and 3 − 3 = 0; ${of(f, '4')} = 5 and 5 − 1 = 4.)`,
          },
          {
            q: `Is ${fx} = ${x2} − 2${x} one-one on ${iv('[', '−1', '2', ']')}? Find an inverse on a maximal subinterval, with its domain.`,
            a: `No: ${f} falls on ${iv('[', '−1', '1', ']')} (from 3 to −1) and rises on ${iv('[', '1', '2', ']')} (from −1 to 0). On ${iv('[', '1', '2', ']')} the image is ${iv('[', '−1', '0', ']')} and ${of(fi, x)} = 1 + √(${x} + 1).`,
          },
          {
            q: `Invert ${fx} = ${x2} for 0 ≤ ${rl(x, '≤', '1')} and ${fx} = 2${x} − 1 for 1 < ${rl(x, '≤', '2')}, after confirming invertibility.`,
            a: `Images ${iv('[', '0', '1', ']')} and ${iv('(', '1', '3', ']')} are disjoint, so ${f} is one-one with range ${iv('[', '0', '3', ']')}; ${of(fi, x)} = √${x} on ${iv('[', '0', '1', ']')} and ${of(fi, x)} = ${fr(`${x} + 1`, '2')} on ${iv('(', '1', '3', ']')}.`,
          },
          {
            q: `Show ${fx} = ${fr(x, `1 + |${WJ}${x}|`)} is a bijection ℝ → ${iv('(', '−1', '1', ')')} and find ${fi}.`,
            a: `For ${rl(x, '≥', '0')}, ${y} = ${fr(x, `1 + ${x}`)} gives ${x} = ${fr(y, `1 − ${y}`)};${BB}for ${rl(x, '<', '0')}, ${x} = ${fr(y, `1 + ${y}`)};${BB}combining, ${of(fi, x)} = ${fr(x, `1 − |${WJ}${x}|`)} on ${iv('(', '−1', '1', ')')};${BB}${f} is continuous and strictly increasing with limits ±1, hence onto ${iv('(', '−1', '1', ')')}.`,
          },
          {
            q: `How many real solutions does ${sup(x, '3')} − 3${x} = 1 have?`,
            a: `Three: ${gx} = ${sup(x, '3')} − 3${x} has local maximum 2 at ${rl(x, '=', '−1')} and local minimum −2 at ${rl(x, '=', '1')}, so the line ${rl(y, '=', '1')} cuts the curve once on each of ${iv('(', '−∞', '−1', ')')}, ${iv('(', '−1', '1', ')')}, ${iv('(', '1', '∞', ')')}.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 110–113 ────────────────
  {
    n: 'D',
    title: 'From Symmetry Axes to Periods; Periods Hidden in Functional Equations',
    extra: true,
    kalam: 'Compose the recurrence with itself until the value returns.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topic 06 finds periods of formulas: read off the pieces, scale, take LCM. JEE Advanced prefers functions described only by rules, and two rule-patterns dominate ${ESTIMATE}. First: two symmetry axes force a period. Second: a first-order recurrence like ${of(f, `${x} + ${a}`)} = ${RECUR(fx)} hides a period you must dig out by composing the recurrence with itself.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>D1: Axis of symmetry.</b> The statement “${of(f, `${a} + ${x}`)} = ${of(f, `${a} − ${x}`)} for all ${x}” says the graph is mirror-symmetric about the vertical line ${rl(x, '=', a)}. Equivalently,<br>${of(f, `2${a} − ${x}`)} = ${fx} for all ${x}.<br>(Evenness is the special case ${rl(a, '=', '0')}.)`,
      },
      {
        t: 'p',
        html: `<b>D2: Two axes force a period.</b> Suppose ${of(f, `2${a} − ${x}`)} = ${fx} and ${of(f, `2${b} − ${x}`)} = ${fx} with ${rl(a, '≠', b)}. Replace ${x} by 2${a} − ${x} throughout the second identity:<br>${of(f, `2${b} − (2${a} − ${x})`)} = ${of(f, `2${a} − ${x}`)} = ${fx},<br>that is,<br>${of(f, `${x} + 2(${b} − ${a})`)} = ${fx} for all ${x}.<br>So ${f} is periodic with period 2|${WJ}${b} − ${a}|.`,
      },
      {
        t: 'formula',
        kicker: 'Two axes of symmetry force a period',
        main: `${f}(2${a} − ${x}) = ${fx} and ${f}(2${b} − ${x}) = ${fx}<br>⟹ ${f}(${x} + 2(${b} − ${a})) = ${fx}`,
        legend: [`${a}, ${b} = the two axes, ${a} ≠ ${b}`, `2${abs(`${b} − ${a}`)} = a period of ${f}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>D3: Corollaries.</b><br>• ${f} even <b>and</b> ${of(f, `2${a} − ${x}`)} = ${fx} ⟹ period 2${a} for ${rl(a, '≠', '0')} (axes at 0 and ${a}).<br>• ${f} has period ${T} and axis ${rl(x, '=', a)} ⟹ it also has axis ${x} = ${a} + ${T2}: indeed, using the axis at ${a} with offset ${T2} + ${x},${BB}${of(f, `${a} + ${T2} + ${x}`)} = ${of(f, `${a} − ${T2} − ${x}`)}${BB}= ${of(f, `${a} + ${T2} − ${x}`)},${BB}where the last step shifts by the period ${T}. So axes come in families spaced ${T2} apart.`,
      },
      {
        t: 'p',
        html: '<b>D4: Periods from recurrences.</b> Compose the recurrence with itself until the value returns. The three stock patterns:',
      },
      {
        t: 'table',
        title: null,
        head: ['Recurrence', 'Apply twice', 'Period'],
        rows: [
          [
            `${of(f, `${x} + ${a}`)} = −${fx}`,
            `${of(f, `${x} + 2${a}`)} = −${of(f, `${x} + ${a}`)} = ${fx}`,
            `2${a}`,
          ],
          [
            `${of(f, `${x} + ${a}`)} = ${fr('1', fx)}`,
            `${of(f, `${x} + 2${a}`)} = ${fr('1', of(f, `${x} + ${a}`))} = ${fx}`,
            `2${a}`,
          ],
          [
            `${of(f, `${x} + ${a}`)} = 1 − ${fx}`,
            `${of(f, `${x} + 2${a}`)} = 1 − (1 − ${fx}) = ${fx}`,
            `2${a}`,
          ],
        ],
      },
      {
        t: 'p',
        html: `and the deeper one, worked in this topic’s third worked example:<br>${of(f, `${x} + ${a}`)} = ${RECUR(fx)} ⟹ period 4${a}.`,
      },
      {
        t: 'p',
        html: `<b>Caveat carried over from Topic 06:</b> the period found is the fundamental one only if ${f} is not constant and no smaller shift works; always test divisors when the problem demands the fundamental period.`,
      },
      {
        t: 'p',
        html: '<b>D5: Two incommensurable periods.</b> If a (continuous) function has two periods whose ratio is irrational, it is constant: its values repeat on a dense set of shifts, and continuity spreads the constancy everywhere. This is the rigidity lying behind the “irrational ratio ⇒ not periodic” warning of Topic 06.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `${f} satisfies ${of(f, `2 + ${x}`)} = ${of(f, `2 − ${x}`)} and ${of(f, `4 + ${x}`)} = ${of(f, `4 − ${x}`)} for all real ${x}. Show that ${f} is periodic and find a period.`,
        steps: [
          `Axes at ${rl(a, '=', '2')} and ${rl(b, '=', '4')}. By D2,<br>${of(f, `${x} + 2(4 − 2)`)} = ${of(f, `${x} + 4`)} = ${fx},<br>so ${f} is periodic with period 4. Directly: the first identity says ${of(f, `4 − ${x}`)} = ${fx} (rewriting the second axis as ${of(f, `8 − ${x}`)} = ${fx}, then substituting ${x} → 4 − ${x} gives ${of(f, `4 + ${x}`)} = ${of(f, `4 − ${x}`)} = ${fx}: the same conclusion).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${f} : ℝ → ℝ satisfies ${of(f, `${x} + 3`)} = 1 − ${fx} for all ${x}, and ${f} is not constant. Show that 6 is a period of ${f} but 3 is not.`,
        steps: [
          `Compose the recurrence with itself:<br>${of(f, `${x} + 6`)} = 1 − ${of(f, `${x} + 3`)}<br>= 1 − (1 − ${fx}) = ${fx}.`,
          `So 6 is a period. Is 3 also a period? If ${of(f, `${x} + 3`)} = ${fx} held, the recurrence would give ${fx} = 1 − ${fx}, i.e. ${f} ≡ ${HALF}, excluded. So 3 is <b>not</b> a period.`,
          `<b>What this does not tell you.</b> The recurrence guarantees the period 6 and rules out 3, but it does not by itself fix the fundamental period. If ${f} has a smallest positive period ${T}, then ${T} divides 6, say ${T} = ${fr('6', k)}, and 3 = ${fr(k, '2')}${NB}${T} must not be a multiple of ${T}, so ${k} is odd. Both ${rl(k, '=', '1')} and ${rl(k, '=', '3')} occur:${BB}• ${fx} = ${HALF} + ${HALF} sin${NB}${fr(`π${x}`, '3')} satisfies${BB}${of(f, `${x} + 3`)} = ${HALF} − ${HALF} sin${NB}${fr(`π${x}`, '3')} = 1 − ${fx}${BB}and has fundamental period 6.<br>• ${fx} = sin<sup>2</sup>${NB}${fr(`π${x}`, '2')} satisfies ${of(f, `${x} + 3`)} = cos<sup>2</sup>${NB}${fr(`π${x}`, '2')} = 1 − ${fx} and has fundamental period 2.`,
          `<b>Exam takeaway:</b> from a bare recurrence you can claim “6 is a period and 3 is not”. A question that asks for the fundamental period must give you an explicit ${f}.`,
          `<b>Check.</b> Any ${f} built by choosing values freely on ${iv('[', '0', '3', ')')} and extending by ${of(f, `${x} + 3`)} = 1 − ${fx} satisfies the recurrence and repeats every 6 units, while ${of(f, `${x} + 3`)} ≠ ${fx} wherever ${fx} ≠ ${HALF}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${f} satisfies ${of(f, `${x} + 1`)} = ${RECUR(fx)} for all ${x} (where defined), and ${of(f, '2')} = 3. Find ${of(f, '2025')}.`,
        steps: [
          `Compose the recurrence twice. First,<br>${of(f, `${x} + 2`)} = ${RECUR(of(f, `${x} + 1`))}${BB}= (1 + ${RECUR(f)})${BB}÷ (1 − ${RECUR(f)})${BB}= ${fr(`(1 − ${f}) + (1 + ${f})`, `1 − ${f}`)}${BB}÷ ${fr(`(1 − ${f}) − (1 + ${f})`, `1 − ${f}`)}${BB}= ${fr('2', `−2${f}`)} = −${fr('1', fx)},<br>where ${f} abbreviates ${fx}.`,
          `Applying the same step again:<br>${of(f, `${x} + 4`)} = −${fr('1', of(f, `${x} + 2`))} = −${fr('1', `−${fr('1', fx)}`)} = ${fx}.`,
          `So ${f} has period 4, and ${of(f, `${x} + ${n}`)} depends only on ${n} mod 4 (for integer ${n}). Now<br>2025 = 2 + 2023, 2023 = 4 × 505 + 3,<br>so<br>${of(f, '2025')} = ${of(f, '2 + 3')} = ${of(f, '5')} = ${of(f, '1 + 4')} = ${of(f, '1')}.`,
          `Finally recover ${of(f, '1')} from the given value: with ${rl(x, '=', '1')},<br>3 = ${of(f, '2')} = ${RECUR(of(f, '1'))}${BB}⟹ 3 − 3${of(f, '1')} = 1 + ${of(f, '1')} ⟹ ${of(f, '1')} = ${HALF}.`,
          `<b>Check.</b> Run forward from ${of(f, '2')} = 3: ${of(f, '3')} = ${RECUR(of(f, '2'))} = ${fr('4', '−2')} = −2, matching ${of(f, '3')} = ${of(f, '1 + 2')} = −${fr('1', of(f, '1'))} = −2;${BB}then ${of(f, '4')} = ${of(f, '2 + 2')} = −${fr('1', of(f, '2'))} = −${fr('1', '3')}, and ${of(f, '5')} = ${of(f, '1 + 4')} = ${of(f, '1')} = ${HALF}.${BB}Since 2025 = 5 + 4 × 505, this confirms ${of(f, '2025')} = ${of(f, '5')} = ${HALF}. ✓`,
        ],
        ans: `${of(f, '2025')} = ${HALF}`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `${of(f, `1 + ${x}`)} = ${of(f, `1 − ${x}`)} and ${of(f, `3 + ${x}`)} = ${of(f, `3 − ${x}`)} for all ${x}. Find a period of ${f}.`,
            a: 'Axes at 1 and 3: period 2|3 − 1| = 4.',
          },
          {
            q: `${of(f, `${x} + 2`)} = −${fx} for all ${x} and ${of(f, '0')} = 1. Find ${of(f, '10')}.`,
            a: `${of(f, `${x} + 4`)} = ${fx}, and 10 ≡ 2 (mod 4), so ${of(f, '10')} = ${of(f, '2')} = −${of(f, '0')} = −1.`,
          },
          {
            q: `Show that ${of(f, `${x} + ${a}`)} = ${fr('1', fx)} (with ${f} nowhere 0) forces period 2${a}.`,
            a: `${of(f, `${x} + 2${a}`)} = ${fr('1', of(f, `${x} + ${a}`))} = ${fx}.`,
          },
          {
            q: `${f} is odd and has period ${T}. Show that ${of(f, T2)} = 0.`,
            a: `${of(f, T2)} = ${of(f, `${T2} − ${T}`)}${BB}= ${of(f, `−${T2}`)} = −${of(f, T2)},${BB}using oddness; hence 2${of(f, T2)} = 0.`,
          },
          {
            q: `Show that ${of(f, `${x} + 2`)} = ${fx} + 3 cannot hold for any periodic continuous ${f}.`,
            a: `Iterating gives ${of(f, `${x} + 2${n}`)} = ${fx} + 3${n}, unbounded along ${x}, ${x} + 2, ${x} + 4, …; a periodic function repeats its values, so a continuous periodic function is bounded on ℝ (it is bounded on one closed period): contradiction.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic E · pp. 113–116 ────────────────
  {
    n: 'E',
    title: 'Counting Maps: Surjections Derived, Derangements, and Bell Numbers by Hand',
    extra: true,
    kalam: 'A derangement of {1, …, n} is a bijection σ with σ(i) ≠ i for every i.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topics 01 and 02 quote two formulas, the surjection count and the Bell numbers, and say nothing about fixed-point-free bijections at all. JEE Main expects you to evaluate these fluently; JEE Advanced expects you to know why they hold, because the inclusion–exclusion engine behind them recurs in disguise across combinatorics. Here is the engine, run three times.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>E1: Inclusion–exclusion, stated for functions.</b> Let ${A} have ${n} elements and ${B} have ${m}. For each ${b} ∈ ${B}, let ${Eb} be the set of functions ${A} → ${B} that <b>miss</b> ${b}. The onto functions are those in none of the ${Eb}. Functions missing every target in a fixed set ${S} (with ${abs(S)} = ${k}) map into the remaining ${m} − ${k} targets arbitrarily:<br>${abs(`⋂<sub>${b}∈${S}</sub> ${Eb}`)} = (${m} − ${k})<sup>${n}</sup>.<br>There are ${bn(m, k)} such sets ${S}, so inclusion–exclusion gives:`,
      },
      {
        t: 'formula',
        kicker: 'Onto functions',
        main: `onto(${n}, ${m}) = ${SUM(`${k}=0`, m)}(−1)<sup>${k}</sup>${bn(m, k)}(${m} − ${k})<sup>${n}</sup>`,
        legend: [`${n} = the number of elements of ${A}`, `${m} = the number of elements of ${B}`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why each function is counted correctly:</b> a function whose image misses exactly ${j} targets is counted once for each ${S} contained in those ${j} targets, with signs: a total of ${SUM(`${k}=0`, j)}(−1)<sup>${k}</sup>${bn(j, k)} = (1 − 1)<sup>${j}</sup>, which is 1 if ${rl(j, '=', '0')} and 0 otherwise. Only fully-surjective functions survive.`,
      },
      {
        t: 'p',
        html: `<b>Numerical anchor:</b> ${n} = ${m} = 3 gives 27 − 3${NB}·${NB}8 + 3${NB}·${NB}1 − 0 = 6 = 3!, as it must be (onto between equal finite sets means bijective).`,
      },
      {
        t: 'p',
        html: `<b>E2: Derangements.</b> A derangement of {1, …, ${n}} is a bijection ${sg} with ${sg}(${i}) ≠ ${i} for every ${i}. Run the same engine with ${sub(E, i)} = “bijections fixing ${i}”. Bijections fixing all of a fixed ${k}-set exist in (${n} − ${k})! ways, so:`,
      },
      {
        t: 'formula',
        kicker: 'Derangements',
        main: `${DER(n)} = ${SUM(`${k}=0`, n)}(−1)<sup>${k}</sup>${bn(n, k)}(${n} − ${k})!<br>= ${n}! ${SUM(`${k}=0`, n)}${fr(`(−1)<sup>${k}</sup>`, `${k}!`)}`,
        legend: [`${DER(n)} = the number of derangements of ${n} objects`],
        note: null,
      },
      {
        t: 'p',
        html: `Values to memorise:<br>${DER('1')} = 0, ${DER('2')} = 1, ${DER('3')} = 2, ${DER('4')} = 9, ${DER('5')} = 44.`,
      },
      {
        t: 'p',
        html: `<b>E3: Stirling numbers and Bell numbers by hand.</b> Let ${Snk(n, k)} be the number of partitions of an ${n}-set into exactly ${k} blocks; then the number of equivalence relations is ${Bn(n)} = ∑<sub>${k}</sub>${NB}${Snk(n, k)}. The recurrence<br>${Snk(n, k)} = ${k}${NB}${Snk(`${n} − 1`, k)} + ${Snk(`${n} − 1`, `${k} − 1`)}<br>comes from watching element ${n}: either it sits <b>alone</b> in its block (partition the other ${n} − 1 elements into ${k} − 1 blocks) or it joins an existing block (partition the others into ${k} blocks, then choose which of the ${k} blocks receives ${n}). Both moves are reversible.`,
      },
      {
        t: 'p',
        html: `Small rows (derived, not memorised):<br>• ${Snk('4', '1')} = 1; ${Snk('4', '4')} = 1.<br>• ${Snk('4', '2')} = 2<sup>3</sup> − 1 = 7: element 1’s block is {1} ∪ ${T} where ${T} is any proper subset (possibly empty) of the other three elements.<br>• ${Snk('4', '3')} = ${bn('4', '2')} = 6: exactly one block is a pair.<br>• ${Snk('5', '2')} = 2<sup>4</sup> − 1 = 15; ${Snk('5', '3')} = 3${NB}${Snk('4', '3')} + ${Snk('4', '2')} = 18 + 7 = 25.`,
      },
      {
        t: 'p',
        html: `Bell numbers via the block of element ${n} + 1: if it contains ${k} of the other ${n} elements, choose them in ${bn(n, k)} ways and partition the remaining ${n} − ${k} in ${Bn(`${n}−${k}`)} ways:`,
      },
      {
        t: 'formula',
        kicker: 'Bell numbers by recurrence',
        main: `${Bn(`${n}+1`)} = ${SUM(`${k}=0`, n)}${bn(n, k)}${Bn(`${n}−${k}`)}`,
        legend: [`${Bn(n)} = the number of equivalence relations on an ${n}-set`, `${Bn('0')} = 1 (the empty set has one partition)`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the number of onto functions from {1, 2, …, 6} to {${a}, ${b}, ${c}}.`,
        steps: [
          `Apply E1 with ${rl(n, '=', '6')}, ${rl(m, '=', '3')}:<br>3<sup>6</sup> − ${bn('3', '1')}2<sup>6</sup> + ${bn('3', '2')}1<sup>6</sup> − ${bn('3', '3')}0<sup>6</sup><br>= 729 − 192 + 3 − 0 = 540.`,
          `<b>Check.</b> Count by occupancy pattern instead (every letter used at least once). Pattern (4, 1, 1):<br>3 × ${fr('6!', '4!')} = 90.${BB}Pattern (3, 2, 1):<br>3! × ${fr('6!', '3! 2!')} = 360.${BB}Pattern (2, 2, 2):<br>${fr('6!', '2! 2! 2!')} = 90.${BB}Total 90 + 360 + 90 = 540. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `How many bijections ${sg} of {1, 2, 3, 4, 5} satisfy ${sg}(${i}) ≠ ${i} for every ${i}? What is the probability that a random bijection is such a derangement?`,
        steps: [
          `By E2 with ${rl(n, '=', '5')}:<br>${DER('5')} = 5!(1 − 1 + ${fr('1', '2')} − ${fr('1', '6')} + ${fr('1', '24')} − ${fr('1', '120')})${BB}= 120 − 120 + 60 − 20 + 5 − 1 = 44.`,
          'Read the expansion term by term: fix nobody (120), penalise each single fixed point (−5 × 24), refund each pair (+10 × 6), re-penalise each triple (−10 × 2), refund each quadruple (+5 × 1), re-penalise the identity (−1).',
          `Probability:<br>${fr(DER('5'), '5!')} = ${fr('44', '120')} = ${fr('11', '30')}.`,
          `<b>Check.</b> ${DER('4')} = 24 − 24 + 12 − 4 + 1 = 9 ✓, and the recurrence ${DER(n)} = (${n} − 1)(!(${n} − 1) + !(${n} − 2)) gives ${DER('5')} = 4(9 + 2) = 44 ✓: two independent routes, one answer.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'How many equivalence relations on a 5-element set have exactly two classes? Exactly three classes?',
        steps: [
          `<b>Exactly two classes:</b> ${Snk('5', '2')} = 2<sup>4</sup> − 1 = 15: element 1’s block is {1} ∪ ${T} with ${T} any proper subset (possibly empty) of the other four elements.`,
          `<b>Exactly three classes:</b> via the recurrence,<br>${Snk('5', '3')} = 3${NB}${Snk('4', '3')} + ${Snk('4', '2')} = 3(6) + 7 = 25.`,
          `<b>Check.</b> Direct count for ${Snk('5', '3')}: block-size patterns 3 + 1 + 1 and 2 + 2 + 1. For 3 + 1 + 1: choose the triple, ${bn('5', '3')} = 10. For 2 + 2 + 1: choose the singleton (5 ways), then pair up the remaining four (3 ways): 15. Total 10 + 15 = 25 ✓.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the number of onto functions from a 4-element set to a 2-element set.',
            a: '2<sup>4</sup> − 2 = 14.',
          },
          {
            q: 'How many functions from a 5-element set to itself are onto?',
            a: 'Onto with equal sizes means bijective: 5! = 120.',
          },
          {
            q: 'How many bijections of a 4-element set have exactly one fixed point?',
            a: `Choose the fixed point (4 ways) and derange the rest: 4 × ${DER('3')} = 4 × 2 = 8.`,
          },
          {
            q: 'How many equivalence relations does a 4-element set have in total, and how many of them have exactly two classes?',
            a: `${Bn('4')} = 1 + 7 + 6 + 1 = 15; exactly two classes: ${Snk('4', '2')} = 7.`,
          },
          {
            q: 'Three distinct balls are placed into three distinct boxes, each box non-empty. In how many ways?',
            a: 'Onto functions from a 3-set to a 3-set: 3! = 6.',
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic F · pp. 116–118 ────────────────
  {
    n: 'F',
    title: 'Iterates and Cycles',
    extra: true,
    kalam: 'Compose a function with itself and a new phenomenon appears: the iterates can cycle.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Almost everything in Topic 03 composes two different functions. Compose a function with itself and a new phenomenon appears: the iterates can cycle. If ${it(k)}(${x0}) = ${x0} for some ${k}, then ${it(n)}(${x0}) depends only on ${n} mod ${k}, and JEE exploits this relentlessly ${ESTIMATE}, asking for ${it('2023')}(${x}) where brute force is hopeless and modular arithmetic is everything.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `<b>F1: Notation and the exponent law.</b> Define ${it('2')} = ${o(f, f)}, ${it('3')} = ${o(f, it('2'))}, and so on; ${it('0')} is the identity. Associativity of composition gives<br>${o(it(m), it(n))} = ${it(`${m}+${n}`)},<br>so iterates behave like powers of a number, provided you never leave the domain. Track poles: each application forbids the inputs where any intermediate denominator vanishes.`,
      },
      {
        t: 'p',
        html: `<b>F2: Cycle detection.</b> Compute ${of(f, x0)}, ${it('2')}(${x0}), ${it('3')}(${x0}), … until a value repeats. If ${it(k)}(${x0}) = ${x0} (and no smaller positive power returns), the orbit of ${x0} is a ${k}-cycle, and<br>${it(n)}(${x0}) = ${it(`${n} mod ${k}`)}(${x0}).<br>For a formula valid for all ${x}, aim to prove ${it(k)} = ${Id} as an identity; then ${it(n)} = ${it(`${n} mod ${k}`)} holds everywhere.`,
      },
      {
        t: 'p',
        html: `<b>F3: Linear fractional functions are the natural habitat.</b> For ${fx} = ${fr(`${I('ax')} + ${b}`, `${I('cx')} + ${d}`)}, each iterate is again linear fractional, and when such a function cycles in an exam problem the order is tiny: typically 2, 3, or 4. Compute ${it('2')}, then ${it('3')}, and stop the moment you hit ${x}.`,
      },
      {
        t: 'p',
        html: `<b>F4: Involutions.</b> A function with ${it('2')} = ${Id} is its own inverse. Among linear functions ${fx} = ${I('mx')} + ${c}:<br>${it('2')}(${x}) = ${sup(m, '2')}${x} + ${c}(${m} + 1) = ${x}<br>⟹ ${sup(m, '2')} = 1 and ${c}(${m} + 1) = 0,<br>giving exactly ${fx} = ${x} (from ${rl(m, '=', '1')}) or ${fx} = ${c} − ${x} (from ${rl(m, '=', '−1')}, any ${c}). So the only linear involutions are the identity and the reflections.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Let ${fx} = ${XM}, defined wherever the iterates make sense. Find ${it('2024')}(${x}) and ${it('2023')}(${x}).`,
        steps: [
          `Compute upward.<br>${it('2')}(${x}) = (${XM} − 1)${BB}÷ (${XM} + 1)${BB}= ${fr('−2', `${x} + 1`)} ÷ ${fr(`2${x}`, `${x} + 1`)} = −${fr('1', x)}.`,
          `${it('3')}(${x}) = ${f}(−${fr('1', x)})${BB}= (−${fr('1', x)} − 1) ÷ (−${fr('1', x)} + 1)${BB}= ${fr(`−(1 + ${x})`, `${x} − 1`)} = ${XP}.`,
          `${it('4')}(${x}) = ${f}(${XP})${BB}= (${XP} − 1) ÷ (${XP} + 1)${BB}= ${fr(`2${x}`, `1 − ${x}`)} ÷ ${fr('2', `1 − ${x}`)} = ${x}.`,
          `So ${it('4')} = ${Id}: order 4. Reduce the exponents modulo 4:<br>2024 = 4 × 506 ⟹ ${it('2024')}(${x}) = ${x},<br>2023 = 4 × 505 + 3 ⟹ ${it('2023')}(${x}) = ${it('3')}(${x}) = ${XP}.`,
          `<b>Check.</b> ${it('2023')}(${x}) = (${o(it('2020'), it('3'))})(${x}) = (${o(Id, it('3'))})(${x}), using 2020 = 4 × 505. ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Let ${fx} = ${fr('1', `1 − ${x}`)}, ${rl(x, '≠', '1')}. Find the smallest ${k} with ${it(k)} = ${Id}, and evaluate ${it('100')}(${x}).`,
        steps: [
          `${it('2')}(${x}) = ${fr('1', `1 − ${fr('1', `1 − ${x}`)}`)} = ${fr('1', fr(`(1 − ${x}) − 1`, `1 − ${x}`))}${BB}= ${fr(`1 − ${x}`, `−${x}`)} = ${fr(`${x} − 1`, x)} = 1 − ${fr('1', x)}.`,
          `${it('3')}(${x}) = ${f}(1 − ${fr('1', x)})${BB}= ${fr('1', `1 − (1 − ${fr('1', x)})`)} = ${fr('1', fr('1', x))} = ${x}.`,
          `Order 3. Since 100 = 3 × 33 + 1,<br>${it('100')}(${x}) = ${fx} = ${fr('1', `1 − ${x}`)}.`,
          `<b>Check.</b> The orbit of ${rl(x, '=', '3')} reads 3 ↦ −${HALF} ↦ ${fr('2', '3')} ↦ 3: a genuine 3-cycle, confirming ${rl(k, '=', '3')} on a concrete value. Note the moving exclusions: ${f} forbids ${rl(x, '=', '1')}; ${it('2')} additionally forbids ${rl(x, '=', '0')}; the identity ${it('3')} = ${Id} holds wherever the journey is defined.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Find all linear functions ${fx} = ${I('mx')} + ${c} on ℝ satisfying ${f}(${fx}) = ${x} for all ${x}.`,
        steps: [
          `Compute the iterate:<br>${f}(${fx}) = ${m}(${I('mx')} + ${c}) + ${c} = ${sup(m, '2')}${x} + ${c}(${m} + 1).`,
          `Setting this equal to ${x} identically and comparing coefficients:<br>${sup(m, '2')} = 1, ${c}(${m} + 1) = 0.`,
          `Case ${rl(m, '=', '1')}: the second equation forces ${rl(c, '=', '0')}, giving ${fx} = ${x}. Case ${rl(m, '=', '−1')}: the second equation holds for every ${c}, giving ${fx} = ${c} − ${x}. So the complete list is<br>${fx} = ${x} or ${fx} = ${c} − ${x}, ${c} ∈ ℝ.`,
          `<b>Check.</b> ${fx} = 5 − ${x}: ${f}(${fx}) = 5 − (5 − ${x}) = ${x} ✓. And geometrically both families are exactly the lines that are mapped to themselves when reflected in ${rl(y, '=', x)}: a function whose graph is its own mirror image in ${rl(y, '=', x)} is its own inverse, which is what an involution means.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: `For ${fx} = 2 − ${x}, find ${it(n)}(${x}) for every positive integer ${n}.`,
            a: `${it('2')}(${x}) = ${x}, so ${it(n)}(${x}) = ${x} for even ${n} and ${it(n)}(${x}) = 2 − ${x} for odd ${n}.`,
          },
          {
            q: `For ${fx} = ${fr('1', x)}, ${rl(x, '≠', '0')}, find ${it('57')}(${x}).`,
            a: `${it('2')} = ${Id}, and 57 is odd, so ${it('57')}(${x}) = ${fr('1', x)}.`,
          },
          {
            q: `Show that ${fx} = ${XQ}, ${rl(x, '≠', '1')}, is an involution.`,
            a: `${it('2')}(${x}) = (${XQ} + 1)${BB}÷ (${XQ} − 1)${BB}= ${fr(`2${x}`, `${x} − 1`)} ÷ ${fr('2', `${x} − 1`)} = ${x}.`,
          },
          {
            q: `Find all linear ${f} with ${o(f, f)} = ${Id} without using F4, by arguing geometrically about slopes.`,
            a: `A linear involution is its own inverse, so its graph is its own reflection in ${rl(y, '=', x)}; the only lines invariant under reflection in ${rl(y, '=', x)} are ${rl(y, '=', x)} itself (slope 1) and lines perpendicular to it (slope −1), giving ${fx} = ${x} and ${fx} = ${c} − ${x}.`,
          },
          {
            q: `${it('3')} = ${Id} as an identity, ${of(f, '1')} = 2 and ${of(f, '2')} = 3. Find ${of(f, '3')} and ${f}(${f}(${of(f, '7')})).`,
            a: `${of(f, '3')} = ${f}(${of(f, '2')}) = ${it('3')}(1) = 1; and ${f}(${f}(${of(f, '7')})) = ${it('3')}(7) = 7.`,
          },
        ],
      },
    ],
  },
];
