import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 2, Topics 01–02, pp. 127–147 of the Class 12 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's numbered parts
 * "1 Principal Value Branches" (pp. 127–137) and "2 Self-Map Identities
 * (Reciprocal, Negative-Argument, Complementary)" (pp. 138–147); Part 3 starts
 * on p. 148. p. 126 (title and contents) is not copied; p. 127's "How to use
 * this guide" box opens Topic 01's "Exam relevance" part (decision 3). Each
 * topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its sections 1.1–1.8 / 2.1–2.8, titled from their own names.
 * The book never calls its figures in the text; each `fig` stands where its
 * caption is printed: 2.1 (caption p. 128, drawn p. 129) at the end of Topic
 * 01's Concept intuition; 2.2 (caption p. 131, drawn p. 132) after the
 * "Worked through once" paragraph; 2.3 (caption p. 136, drawn p. 137) after
 * the cheat sheet; 2.4 (caption p. 139, drawn p. 140) at the end of Topic 02's
 * Concept intuition; 2.5 (caption p. 142, drawn p. 143) after Derivation 4;
 * 2.6 (caption p. 146, drawn p. 147) after the cheat sheet. No unnumbered
 * drawings. Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const x = '<i>x</i>';
const y = '<i>y</i>';
const t = '<i>t</i>';
const th = '<i>θ</i>';
const f = '<i>f</i>';
const D = '<i>D</i>';
const B = '<i>B</i>';
/** |x|, the U+2060 keeping the opening bar with its letter. */
const ABSX = `|⁠${x}|`;
const ABSX_GE1 = `${ABSX}${NB}≥${NB}1`;
const ABSX_LT1 = `${ABSX}${NB}<${NB}1`;
const XPOS = `${x}${NB}>${NB}0`;
const XNEG = `${x}${NB}<${NB}0`;

const inv = (fn: string) => `${fn}<sup>−1</sup>`;
const SIN = inv('sin');
const COS = inv('cos');
const TAN = inv('tan');
const COT = inv('cot');
const SEC = inv('sec');
const CSC = inv('cosec');
/** An inverse function and its argument, glued: sin⁻¹ x. */
const of = (F: string, arg: string) => `${F}${NB}${arg}`;
const FINV = `${f}<sup>−1</sup>`;
const FFT = `${FINV}(${f}(${th}))`;
const FFX = `${FINV}(${f}(${x}))`;

const P2 = fr('π', '2');
const P3 = fr('π', '3');
const P4 = fr('π', '4');
const P6 = fr('π', '6');
const P2_3 = fr('2π', '3');
const P3_2 = fr('3π', '2');
const P3_4 = fr('3π', '4');
const P5_6 = fr('5π', '6');
const P7_6 = fr('7π', '6');
const P13_6 = fr('13π', '6');
const H = fr('1', '2');
const R3_2 = fr('√3', '2');
const INVX = fr('1', x);
const IR3 = fr('1', '√3');

/** An interval, its comma glued: [a, b]. */
const iv = (a: string, b: string, o = '[', c = ']') => `${o}${a},${NB}${b}${c}`;
const SINB = iv(`−${P2}`, P2);
const TANB = iv(`−${P2}`, P2, '(', ')');
const COSB = iv('0', 'π');
const COTB = iv('0', 'π', '(', ')');
const M11 = iv('−1', '1');
const SECB = `${COSB} − {${P2}}`;
const CSCB = `${SINB} − {0}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 127–137 ────────────────
  {
    n: '01',
    title: 'Principal Value Branches',
    kalam: 'The branch is a cage, and the answer can never escape it.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: '<b>How to use this guide.</b> This covers Chapter 2 end to end in four topics, building in order: <b>(1) Principal Value Branches</b>: the domains, ranges and how to read a principal value; <b>(2) Self-Map Identities</b>: reciprocal, negative-argument and complementary laws; <b>(3) Combination Identities</b>: sums, differences and multiple angles; <b>(4) Graphs, Composite Evaluation & Simplification</b>: the visual and computational toolkit. Each topic follows the same eight-section rhythm, from intuition through worked examples to a final cheat sheet.',
      },
      {
        t: 'p',
        html: `This is the foundation slab the whole chapter stands on: get the branches wrong here and every property, every ${SIN}(sin${NB}${x}) simplification, and every integral substitution downstream collapses. <b>CBSE Boards</b> asks “find the principal value” as a guaranteed 1–2 mark question every single year ${ESTIMATE}. <b>CUET</b> weaponises the branches into lightning “which of these is the principal value branch of ${of(SEC, x)}?” one-liners: pure recall, pure speed. <b>JEE Main</b> lives on the ${FFX} range-folding trap (e.g. ${SIN}(sin${NB}${P2_3})), where the wrong answer is the obvious one. <b>JEE Advanced</b> stacks domains, exclusions, and piecewise behaviour into multi-step expressions. If you treat ${of(SIN, x)} as “just undo the sine,” you will lose marks you didn’t know were on the table. This topic teaches you to think in branches.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Start with a problem that sounds trivial and isn’t: <b>“Which angle has a sine of ${H}?”</b>`,
      },
      {
        t: 'p',
        html: `Your first instinct says 30°, i.e. ${P6}. But 150° also works. So does 390°, and 510°, and −330°, and infinitely many more. The sine function takes many different angles to the same value: it is <b>many-to-one</b>. And that is fatal for inversion, because an inverse function must give back <b>exactly one</b> answer. A machine that, fed ${H}, spits out “${P6} or ${P5_6} or ${P13_6} or…” is not a function at all.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way.</b> Picture the platform of a busy railway junction where several trains pull in showing the same destination board. If a passenger asks “which train do I take for Delhi?” and four trains all say Delhi, the question has no single answer, unless the station designates one official train for that route. Inverse trigonometry does exactly this: out of the infinitely many angles sharing a given sine, mathematics <b>designates one official angle</b> as the answer. The rule that picks the official angle is the <b>principal value branch</b>.',
      },
      {
        t: 'p',
        html: `How do we pick? We <b>shrink the domain of the original trig function</b> down to a stretch on which it is one-to-one (each output used exactly once) and on which it still sweeps through its entire range. For sine, the agreed stretch is ${SINB}: across it, sine climbs steadily from −1 to +1, hitting every value in between exactly once. Now the question “which angle has sine ${H}?” has a unique honest answer: ${P6}. The interval ${SINB} is the <b>principal value branch of</b> ${SIN}, the official platform.`,
      },
      {
        t: 'p',
        html: `Two things are worth internalising right now:<br>1. <b>The branch is a choice, but a fixed one.</b> We could have chosen another one-to-one stretch (there are infinitely many), and indeed one may take a non-principal branch of ${COS}, such as ${iv('2π', '3π')}. Those are valid for defining “an” inverse, but the world has agreed on <b>one</b> canonical branch per function so that “${of(SIN, H)}” means the same thing in Wichita and in Kota. Memorising the canonical branches is non-negotiable.<br>2. <b>The output of an inverse trig function is an angle, and it is trapped inside its branch: always.</b> This single sentence is the source of nearly every mark gained or lost in this chapter. If you ever produce ${SIN}(something) = ${P2_3}, you have already made an error, because ${P2_3} = 120° lies outside ${SINB}. The branch is a cage, and the answer can never escape it.`,
      },
      {
        t: 'p',
        html: 'The six trig functions each get their own designated cage. Sine and tangent (odd, symmetric about the origin) get branches centred on 0. Cosine and cotangent (whose natural one-to-one stretch starts at 0) get branches running from 0 up to π. Secant and cosecant, the reciprocal misfits, inherit the cosine and sine branches respectively, minus one forbidden point where the reciprocal blows up. The next two sections make all of this precise.',
      },
      { t: 'fig', id: 'm12-02-fig-2.1' },

      { t: 'part', title: 'Key definitions, branches and validity conditions' },
      {
        t: 'p',
        html: `<b>Locked notation (chapter-wide: used in every topic of Chapter 02):</b><br>• ${of(SIN, x)}, ${of(COS, x)}, ${of(TAN, x)}, ${of(COT, x)}, ${of(SEC, x)}, ${of(CSC, x)} denote the <b>inverse functions</b>. These equal arcsin${NB}${x} etc.; this chapter uses the ${SIN} form throughout (NCERT convention).<br>• <b>Critical:</b> ${of(SIN, x)} ≠ (sin${NB}${x})<sup>−1</sup> = ${fr('1', `sin${NB}${x}`)} = cosec${NB}${x}. The “−1” is an inverse-function marker, <b>not</b> an exponent. Locked once here; never re-explained.<br>• ${x} = the argument fed to the inverse function (a pure number). ${y} = the principal value it returns (an angle in radians).<br>• ${D} = domain (allowed inputs ${x}). ${B} = <b>principal value branch</b> = the range of the inverse = the cage the output angle lives in.`,
      },
      {
        t: 'p',
        html: `<b>The master table.</b> For each function, ${y} = ${FINV}(${x}) means “${y} is the unique angle in the branch ${B} whose ${f} equals ${x}.”`,
      },
      {
        t: 'table',
        title: null,
        head: ['Function', 'Domain <i>D</i> (allowed <i>x</i>)', 'Principal value branch <i>B</i> (the cage for <i>y</i>)'],
        rows: [
          [of(SIN, x), M11, SINB],
          [of(COS, x), M11, COSB],
          [of(TAN, x), `ℝ = ${iv('−∞', '∞', '(', ')')}`, TANB],
          [of(COT, x), `ℝ = ${iv('−∞', '∞', '(', ')')}`, COTB],
          [of(SEC, x), `ℝ − ${iv('−1', '1', '(', ')')}, i.e. ${ABSX_GE1}`, SECB],
          [of(CSC, x), `ℝ − ${iv('−1', '1', '(', ')')}, i.e. ${ABSX_GE1}`, CSCB],
        ],
      },
      {
        t: 'formula',
        kicker: 'Principal value branches',
        main: `${of(SIN, x)} ∈ ${SINB}, ${x} ∈ ${M11}<br>${of(COS, x)} ∈ ${COSB}, ${x} ∈ ${M11}<br>${of(TAN, x)} ∈ ${TANB}, ${x} ∈ ℝ<br>${of(COT, x)} ∈ ${COTB}, ${x} ∈ ℝ<br>${of(SEC, x)} ∈ ${SECB}, ${ABSX_GE1}<br>${of(CSC, x)} ∈ ${CSCB}, ${ABSX_GE1}`,
        legend: [`${x} = the argument, in the domain written after the comma`, 'each interval = the principal value branch, the range of the inverse function'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity conditions: a “unit check.”</b> Physics gives you dimensional analysis; inverse trig gives you two free sanity checks on every answer:<br>1. <b>Domain check (before you start):</b> Is ${x} a legal input? ${SIN}(2) and ${COS}(−3) <b>do not exist</b>: |⁠${x}| > 1 is outside ${M11}.${NB}${SEC}(0.5) and ${CSC}(${H}) <b>do not exist</b>: ${ABSX_LT1} is forbidden for sec/cosec. If ${x} is illegal, the answer is “undefined,” full stop.<br>2. <b>Branch check (after you finish):</b> Does your output angle ${y} lie inside ${B}? If ${COS}(anything) comes out negative, or ${SIN}(anything) comes out bigger than ${P2}, you have made an error: guaranteed, no second-guessing.`,
      },
      {
        t: 'p',
        html: `<b>Three structural patterns</b> worth seeing in the table so you never rote-memorise blind:<br>• <b>Odd-function pair</b> {sin, tan} → branches centred on 0: ${SINB} and ${TANB}. (Tan’s is open: tan is undefined at ±${P2}.)<br>• <b>“Starts at 0” pair</b> {cos, cot} → branches ${COSB} and ${COTB}. (Cot’s is open: cot is undefined at 0 and π.)<br>• <b>Reciprocal pair</b> {sec, cosec} → borrow the cos/sin branches, then delete the one point where the reciprocal explodes: ${SEC} drops ${P2} (where cos = 0); ${CSC} drops 0 (where sin = 0). Their domains exclude ${iv('−1', '1', '(', ')')} because a reciprocal can never land strictly between −1 and 1.`,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: `Unlike a pure plug-in topic, the branches are justified, and the most examined skill (collapsing ${FFT}) is a procedure you can derive once and reuse forever.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 1: Why ${SINB} is forced for ${SIN} (and the general selection rule).</b><br>To invert sine we need a stretch of the ${x}-axis satisfying <b>two</b> demands simultaneously:<br>• <b>(D1) One-to-one:</b> sine must be strictly monotonic there, so each output is used once.<br>• <b>(D2) Onto the full range:</b> the stretch must produce every value in ${M11}, or the inverse won’t be defined for some legal inputs.`,
      },
      {
        t: 'p',
        html: `On ${SINB}, sine increases strictly from sin(−${P2}) = −1 to sin(${P2}) = 1, satisfying both (D1) and (D2). It is also the stretch closest to the origin, which is why convention crowns it principal. The identical reasoning gives every other branch: pick the origin-nearest stretch on which the function is strictly monotonic and sweeps its whole range. For cosine that stretch is ${COSB} (strictly decreasing from +1 to −1); for tangent it is the open ${TANB}, and so on. This is why the branches are not arbitrary: each is a full monotonic window, placed at or next to 0.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: Why ${SEC} excludes exactly ${P2}.</b><br>sec${NB}${th} = ${fr('1', `cos${NB}${th}`)}. Borrow cosine’s branch ${COSB}. At ${th} = ${P2}, cos${NB}${P2} = 0, so sec${NB}${P2} = ${fr('1', '0')} is <b>undefined</b>: no input ${x} can ever map there. Delete that single point: ${B}<sub>sec<sup>−1</sup></sub> = ${SECB}. Identically, ${CSC} borrows sine’s branch and deletes 0 (where sin${NB}0 = 0).`,
      },
      {
        t: 'p',
        html: `<b>Procedure (the high-yield one): evaluating ${FFT} by range-folding.</b><br>The identity ${SIN}(sin${NB}${th}) = ${th} holds <b>only if ${th} already lives in the branch</b> ${SINB}. When ${th} is outside, you must fold it back into the branch using a trig identity that preserves the function’s value. Standard fold-backs:`,
      },
      {
        t: 'formula',
        kicker: 'Standard fold-backs',
        main: `sin(π − ${th}) = sin${NB}${th}<br>cos(2π − ${th}) = cos(−${th}) = cos${NB}${th}<br>tan(${th} ± π) = tan${NB}${th}`,
        legend: [`${th} = the inner angle`],
        note: null,
      },
      {
        t: 'proc',
        title: 'The three-step recipe',
        steps: [
          'Read the <b>branch</b> of the outer inverse function.',
          'Using a value-preserving identity, replace the inner angle by an <b>equivalent angle that sits inside that branch</b>.',
          'The inverse then returns that in-branch angle directly.',
        ],
      },
      {
        t: 'p',
        html: `<b>Worked through once:</b> evaluate ${COS}(cos${NB}${P7_6}). Outer branch is ${COSB}. The angle ${P7_6} = 210° ∉ ${COSB}. Fold: cos${NB}${P7_6} = cos(2π − ${P7_6}) = cos${NB}${P5_6}, and ${P5_6} = 150° ∈ ${COSB}. Therefore ${COS}(cos${NB}${P7_6}) = ${P5_6}, <b>not</b> ${P7_6}. Master this and you have neutralised the single most common JEE Main inverse-trig trap ${ESTIMATE}.`,
      },
      { t: 'fig', id: 'm12-02-fig-2.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Find the principal values of (a) ${SIN}(−${H}), (b) ${COS}(${R3_2}), (c) ${TAN}(1).`,
        steps: [
          'In each case, find the angle inside the branch whose trig value matches.',
          `(a) Need ${y} ∈ ${SINB} with sin${NB}${y} = −${H}. Since sin(−${P6}) = −${H} and −${P6} ∈ ${SINB}:<br>${SIN}(−${H}) = −${P6}.`,
          `(b) Need ${y} ∈ ${COSB} with cos${NB}${y} = ${R3_2}. Since cos${NB}${P6} = ${R3_2} and ${P6} ∈ ${COSB}:<br>${COS}(${R3_2}) = ${P6}.`,
          `(c) Need ${y} ∈ ${TANB} with tan${NB}${y} = 1. Since tan${NB}${P4} = 1:<br>${TAN}(1) = ${P4}.`,
          '(Branch check: every answer sits inside its cage. ✓)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: `Which of the following is the principal value branch of ${of(CSC, x)}? (a) ${TANB} (b) ${SECB} (c) ${CSCB} (d) ${SINB}`,
        steps: [
          `<b>Fast solution.</b> ${CSC} borrows sine’s branch ${SINB} and deletes the forbidden point where sin = 0, namely 0. Scan for the option that is sine’s branch minus a point → <b>(c)</b>.`,
          `<b>Speed tip:</b> (a) is tan’s branch (open, wrong shape); (b) is sec’s branch (cosine-based, deletes ${P2}); (d) forgot to delete 0. The deleted point is the tell.`,
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Evaluate (a) ${SIN}(sin${NB}${P2_3}), (b) ${COS}(cos${NB}${P7_6}), (c) ${COS}[cos(−680°)].`,
        steps: [
          'Apply the range-folding recipe from the Derivations and key procedures part.',
          `(a) Branch ${SINB}. Now ${P2_3} = 120° ∉ branch. Fold with sin(π − ${th}) = sin${NB}${th}:<br>sin${NB}${P2_3} = sin(π − ${P2_3}) = sin${NB}${P3}, ${P3} ∈ ${SINB}<br>⇒ ${SIN}(sin${NB}${P2_3}) = ${P3}.`,
          `(b) Branch ${COSB}. Already done in the Derivations and key procedures part: ${COS}(cos${NB}${P7_6}) = ${P5_6}.`,
          `(c) Branch ${COSB}. Cosine is even, so cos(−680°) = cos(680°). Reduce: 680° = 720° − 40° ⇒ cos${NB}680° = cos(−40°) = cos${NB}40°, and 40° ∈ ${iv('0', '180°')}. Hence<br>${COS}[cos(−680°)] = 40° = ${fr('2π', '9')}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `(a) Evaluate ${TAN}(tan${NB}${P3_4}). (b) Express ${f}(${x}) = ${SIN}(sin${NB}${x}) as a simple expression for all ${x} ∈ ${iv(P2, P3_2)}. (c) Does ${SEC}(${H}) exist? Justify.`,
        steps: [
          `(a) Branch ${TANB}. Now ${P3_4} = 135° ∉ branch. Fold with tan(${th} − π) = tan${NB}${th}:<br>tan${NB}${P3_4} = tan(${P3_4} − π) = tan(−${P4}), −${P4} ∈ ${TANB}<br>⇒ ${TAN}(tan${NB}${P3_4}) = −${P4}.`,
          `(b) For ${x} ∈ ${iv(P2, P3_2)}, the angle ${x} lies outside ${SINB}, so we fold using sin${NB}${x} = sin(π − ${x}), and crucially (π − ${x}) does land inside the branch for this whole interval. Check the endpoints: at ${x} = ${P2}, π − ${x} = ${P2} ✓; at ${x} = ${P3_2}, π − ${x} = −${P2} ✓; and π − ${x} runs monotonically through ${SINB} in between. Therefore<br>${SIN}(sin${NB}${x}) = π − ${x} for all ${x} ∈ ${iv(P2, P3_2)}.`,
          `(c) <b>Domain check first.</b> ${SEC} requires ${ABSX_GE1}, but |⁠${H}| = ${H} < 1. So ${H} is not a legal input: ${SEC}(${H}) <b>does not exist</b>. (There is no real angle whose secant equals ${H}, since |⁠sec${NB}${th}| ≥ 1 always.)`,
        ],
        ans: `(b) ${SIN}(sin${NB}${x}) = π − ${x} for all ${x} ∈ ${iv(P2, P3_2)}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the principal values of (a) ${COS}(−${H}), (b) ${TAN}(−√3), (c) ${CSC}(2).`,
            a: `(a) ${P2_3}; (b) −${P3}; (c) ${P6}.`,
          },
          {
            q: `<b>[CUET]</b> State (one line each) the principal value branch of ${of(SEC, x)} and of ${of(COT, x)}, and the domain of ${of(SIN, x)}.`,
            a: `${SEC}: ${SECB}. ${COT}: ${COTB}. Domain of ${of(SIN, x)}: ${M11}.`,
          },
          {
            q: `<b>[JEE Main]</b> Evaluate ${COS}(cos${NB}${P13_6}) and ${TAN}(tan${NB}${P5_6}).`,
            a: `cos${NB}${P13_6} = cos(2π + ${P6}) = cos${NB}${P6}, and ${P6} ∈ ${COSB} ⇒ ${P6}.<br>tan${NB}${P5_6} = tan(${P5_6} − π) = tan(−${P6}), and −${P6} ∈ ${TANB} ⇒ −${P6}.`,
          },
          {
            q: `<b>[JEE Main]</b> For how many integer values of ${x} is ${of(SIN, x)} defined? List them.`,
            a: `${of(SIN, x)} needs ${x} ∈ ${M11}; the integers are −1, 0, 1 → <b>three</b> values.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Simplify ${SIN}(sin${NB}${x}) for ${x} ∈ ${iv(P3_2, '2π')}, and evaluate ${COS}[cos(−3)] (here −3 is in radians; recall π ≈ 3.14159).`,
            a: `For ${x} ∈ ${iv(P3_2, '2π')}: fold with sin${NB}${x} = sin(${x} − 2π), giving ${SIN}(sin${NB}${x}) = ${x} − 2π (since ${x} − 2π ∈ ${iv(`−${P2}`, '0')} ⊂ branch). For ${COS}[cos(−3)]: cos even ⇒ cos(−3) = cos${NB}3, and 3 ∈ ${COSB} (as 3 < π), so the answer is 3.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `Which of the following is the principal value branch of ${of(COS, x)}?`,
        opts: [
          {
            label: SINB,
            nudge: `<b>Trap (a):</b> that is the branch of ${SIN}; the sin and cos branches have different shapes.`,
          },
          {
            label: COTB,
            nudge: `<b>Trap (b):</b> cosine’s branch is closed; ${COS}(±1) = 0, π are real values, so the endpoints must be included.`,
          },
          { label: COSB, nudge: null },
          {
            label: `${COTB} − {${P2}}`,
            nudge: `<b>Trap (d):</b> deleting ${P2} is a ${SEC} move, illegitimate for ${COS}.`,
          },
        ],
        correct: 2,
        solution: `Cosine is one-to-one and onto ${M11} on the closed interval ${COSB}.`,
      },
      {
        t: 'mcq',
        q: `Which value can <b>never</b> be the output of ${of(SIN, x)}?`,
        opts: [
          {
            label: `−${P2}`,
            nudge: `<b>Traps (a) and (c):</b> ±${P2} are the legitimate endpoints (${SIN}(±1)): students who think the branch is open wrongly reject them.`,
          },
          { label: '0', nudge: null },
          {
            label: P2,
            nudge: `<b>Traps (a) and (c):</b> ±${P2} are the legitimate endpoints (${SIN}(±1)): students who think the branch is open wrongly reject them.`,
          },
          { label: P2_3, nudge: null },
        ],
        correct: 3,
        solution: `${SIN} is caged in ${SINB}; ${P2_3} = 120° is outside it.`,
      },
      {
        t: 'mcq',
        q: `${SIN}(sin${NB}${P2_3}) =`,
        opts: [
          {
            label: P2_3,
            nudge: `<b>Trap (a):</b> the headline trap: applying ${SIN}(sin${NB}${th}) = ${th} blindly when ${th} is outside the branch.`,
          },
          { label: P3, nudge: null },
          {
            label: `−${P3}`,
            nudge: `<b>Trap (c):</b> folded with the wrong sign (used ${th} − π instead of π − ${th}).`,
          },
          { label: P6, nudge: `<b>Trap (d):</b> confused sin${NB}${P2_3} = ${R3_2} with ${H}.` },
        ],
        correct: 1,
        solution: `Fold: sin${NB}${P2_3} = sin${NB}${P3}, and ${P3} ∈ branch.`,
      },
      {
        t: 'mcq',
        q: `The number of real values of ${x} for which ${of(SEC, x)} is <b>not</b> defined, among ${x} ∈ {−2, −${H}, 0, ${fr('3', '4')}, 3}, is:`,
        opts: [
          {
            label: '1',
            nudge: `<b>Trap (a):</b> catching only one illegal input: two of −${H}, 0, ${fr('3', '4')} missed.`,
          },
          {
            label: '2',
            nudge: `<b>Trap (b):</b> forgetting that 0 also fails ${ABSX_GE1}, or missing one of the fractions.`,
          },
          { label: '3', nudge: null },
          {
            label: '0',
            nudge: `<b>Trap (d):</b> treating ${SEC} as defined for every real input (as ${TAN} is), so no listed value looks illegal.`,
          },
        ],
        correct: 2,
        solution: `${SEC} needs ${ABSX_GE1}. Illegal inputs: −${H}, 0, ${fr('3', '4')} (all with ${ABSX_LT1}) → <b>three</b>.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reading ${of(SIN, x)} as ${fr('1', `sin${NB}${x}`)}.</b> The “−1” marks the inverse function, not a reciprocal power. ${of(SIN, x)} is an angle; ${fr('1', `sin${NB}${x}`)} = cosec${NB}${x} is a ratio. These are different objects with different units of meaning. (Want the reciprocal? Write (sin${NB}${x})<sup>−1</sup>.)`,
          `<b>Answering outside the branch: the range-folding failure.</b> Writing ${SIN}(sin${NB}${P2_3}) = ${P2_3} or ${COS}(cos${NB}${P7_6}) = ${P7_6}. The identity ${FFT} = ${th} holds <b>only when ${th} is already in the branch</b>. Always: check the branch first, fold if needed.`,
          `<b>Domain blindness.</b> ${SIN}(2), ${COS}(−1.5), ${SEC}(0.7), ${CSC}(0): all <b>undefined</b>. Run the domain check before computing anything; an “answer” to an undefined expression scores zero.`,
          `<b>Sec/cosec branch confusion.</b> The trickiest cages. ${SEC} is cosine-based, deletes ${P2}. ${CSC} is sine-based, deletes 0. Mixing them up (or forgetting the deletion) is a classic CUET banana-skin.`,
          `<b>Mode mismatch.</b> Principal values are stated in <b>radians</b> in higher exams. Don’t leave a board answer as 30° when the marking key wants ${P6} (or vice versa: read the question).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> For any ${FFT} question, run the same two-second ritual every time: <b>(1) write the branch, (2) ask “is ${th} in it?”, (3) if not, fold.</b> That ritual converts the single highest-frequency JEE Main trap in this chapter ${ESTIMATE} into a guaranteed mark. Pair it with the free branch-check on your final answer and you become almost impossible to trick here.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: ['<i>f</i><sup>−1</sup>', 'Domain', 'Branch (cage for the answer)'],
        rows: [
          [SIN, M11, SINB],
          [COS, M11, COSB],
          [TAN, 'ℝ', TANB],
          [COT, 'ℝ', COTB],
          [SEC, ABSX_GE1, SECB],
          [CSC, ABSX_GE1, CSCB],
        ],
      },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Output is always an angle, always trapped in the branch.</b> Outside the branch ⇒ error.', note: '' },
          {
            f: 'Fold-backs',
            note: `sin(π − ${th}) = sin${NB}${th}; cos(2π − ${th}) = cos${NB}${th} (cos is even); tan(${th} ± π) = tan${NB}${th}.`,
          },
          { f: `${FFT} = ${th} <b>only if ${th} is in the branch</b>`, note: 'else fold first.' },
          { f: `<b>${of(SIN, x)} ≠ ${fr('1', `sin${NB}${x}`)}.</b> The “−1” is inverse, not power.`, note: '' },
        ],
        aids: [
          '“Sin & tan hug zero; cos & cot climb to pi.”: branch shapes.',
          '“Sec drops half-pi, cosec drops zero.”: the deleted points.',
          `“Check the cage, fold the angle.”: the universal ${FFT} ritual.`,
        ],
      },
      { t: 'fig', id: 'm12-02-fig-2.3' },
    ],
  },

  // ──────────────── Topic 02 · pp. 138–147 ────────────────
  {
    n: '02',
    title: 'Self-Map Identities (Reciprocal, Negative-Argument, Complementary)',
    kalam: 'Master the pattern behind the six identities and you stop memorising and start deriving.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `These are the “first-move” identities: the conversions you reach for before the heavy machinery in Topic 03. <b>CBSE Boards</b> uses them constantly inside evaluate/prove questions, and the complementary law ${of(SIN, x)} + ${of(COS, x)} = ${P2} is a perennial 1–2 marker ${ESTIMATE}. <b>CUET</b> turns them into instant value-traps: ${COT}(−√3) = ? catches anyone who guesses “−${P6}.” <b>JEE Main</b> drops them verbatim: the NCERT problem ${TAN}${NB}√3 − ${COT}(−√3) has appeared as an objective question, and the only way to get it right is the π− form. <b>JEE Advanced</b> exploits the one structural fault line in this whole set: <b>three of these functions flip sign, three reflect about ${P2} (the π− form)</b>, and the sign of ${x} silently changes which identity applies (the ${TAN}(${INVX}) trap). Master the pattern behind the six identities and you stop memorising and start deriving.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 01 you learned that each inverse trig function lives in a cage: its principal value branch. This topic is about what happens when you <b>feed the cage a transformed input</b>: a reciprocal ${INVX}, a negation −${x}, or when you <b>pair two cages together</b>. The remarkable fact is that these transformations don’t produce messy new angles: they produce the same family of angles, shifted or reflected in one of exactly two ways.`,
      },
      {
        t: 'p',
        html: `Think about it this way. Recall the single most useful pattern from Topic 01: the six functions split by the shape of their branch.<br>• <b>Sine, tangent, cosecant</b> have branches <b>centred on</b> 0: symmetric about the origin (${SINB} and friends).<br>• <b>Cosine, secant, cotangent</b> have branches <b>running from</b> 0 <b>up to</b> π: sitting entirely on the positive side.`,
      },
      {
        t: 'p',
        html: `That one geometric difference dictates everything in this topic. A branch symmetric about the origin can absorb a sign flip and stay inside itself: negate the input, negate the answer. So ${SIN}, ${TAN}, ${CSC} are <b>odd</b>: ${FINV}(−${x}) = −${FINV}(${x}). But a branch trapped on ${COSB} cannot go negative; a negative answer would jump out of the cage. So when you negate the input, the answer instead <b>reflects across the midpoint</b> ${P2}, i.e. ${FINV}(−${x}) = π − ${FINV}(${x}). That’s why ${COS}, ${SEC}, ${COT} are the <b>π− functions</b>, not odd ones.`,
      },
      {
        t: 'p',
        html: `Here is the intuition picture, in Indian-classroom terms. Imagine a row of students standing on a number line, and “negate the input” is the instruction “now stand at your mirror position.” If your allowed standing zone straddles zero (sine’s branch), your mirror image is still inside the zone: you just swap to the other side, sign flipped. But if your allowed zone is the stretch from the wall at 0 to the wall at π (cosine’s branch), your mirror image would land behind the wall at 0: illegal. So instead you reflect about the centre of the room, ${P2}, landing at π− your original spot, still legally inside. <b>Same instruction, two different legal responses, decided entirely by where your room sits.</b>`,
      },
      {
        t: 'p',
        html: `The <b>complementary</b> identities (${of(SIN, x)} + ${of(COS, x)} = ${P2}, etc.) come from the oldest trig fact of all: a sine and a cosine of complementary angles are equal (sin${NB}${th} = cos(${P2} − ${th})). Inverted, that says the two angles must add to ${P2}. The <b>reciprocal</b> identities (${of(SIN, INVX)} = ${of(CSC, x)}, etc.) are even more direct: cosec is the reciprocal of sin, so inverting a reciprocal returns the reciprocal function, with a domain caveat we’ll pin down.`,
      },
      {
        t: 'p',
        html: `None of this needs memorisation if you hold one sentence: <b>odd for the zero-centred trio, π− for the ${COSB} trio.</b> Everything in Topic 02 is that sentence, written out.`,
      },
      { t: 'fig', id: 'm12-02-fig-2.4' },

      { t: 'part', title: 'Key identities, definitions and validity conditions' },
      {
        t: 'p',
        html: `Notation is inherited from Topic 01 and fixed chapter-wide: ${x} = argument, ${y} = principal value, ${D} = domain, ${B} = branch; “−1” is the inverse marker, never a reciprocal exponent. Not re-explained here.`,
      },
      {
        t: 'p',
        html: '<b>Family 1: Reciprocal identities</b> (turn a function into its co-named partner):',
      },
      {
        t: 'formula',
        kicker: 'Reciprocal identities',
        main: `${of(SIN, INVX)} = ${of(CSC, x)}, ${of(COS, INVX)} = ${of(SEC, x)} (${ABSX_GE1})<br>${of(TAN, INVX)} = ${of(COT, x)} (${XPOS})<br>${of(TAN, INVX)} = ${of(COT, x)} − π (${XNEG})`,
        legend: [`${x} = the argument`],
        note: null,
      },
      {
        t: 'p',
        html: `Validity is the whole game here. The first two require ${ABSX_GE1}, because ${INVX} must land in ${M11} for ${SIN} / ${COS} to accept it, which forces ${ABSX_GE1}. The ${of(TAN, INVX)} = ${of(COT, x)} identity holds <b>only for</b> ${XPOS}; for ${XNEG} it acquires a −π correction (derived in the Derivations from the branch structure part, and a favourite JEE trap).`,
      },
      {
        t: 'p',
        html: '<b>Family 2: Negative-argument identities.</b> Split exactly along the branch-shape line:',
      },
      {
        t: 'table',
        title: null,
        head: ['Odd (zero-centred branch)', 'π− (branch on [0, π])'],
        rows: [
          [
            `${SIN}(−${x}) = −${of(SIN, x)}, ${x} ∈ ${M11}`,
            `${COS}(−${x}) = π − ${of(COS, x)}, ${x} ∈ ${M11}`,
          ],
          [`${TAN}(−${x}) = −${of(TAN, x)}, ${x} ∈ ℝ`, `${COT}(−${x}) = π − ${of(COT, x)}, ${x} ∈ ℝ`],
          [`${CSC}(−${x}) = −${of(CSC, x)}, ${ABSX_GE1}`, `${SEC}(−${x}) = π − ${of(SEC, x)}, ${ABSX_GE1}`],
        ],
      },
      {
        t: 'formula',
        kicker: 'Negative arguments',
        main: `${SIN}(−${x}) = −${of(SIN, x)}, ${TAN}(−${x}) = −${of(TAN, x)}, ${CSC}(−${x}) = −${of(CSC, x)}<br>${COS}(−${x}) = π − ${of(COS, x)}, ${SEC}(−${x}) = π − ${of(SEC, x)}, ${COT}(−${x}) = π − ${of(COT, x)}`,
        legend: [`${x} = the argument, in each function’s domain`],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Family 3: Complementary identities</b> (each pair sums to the right angle):',
      },
      {
        t: 'formula',
        kicker: 'Complementary identities',
        main: `${of(SIN, x)} + ${of(COS, x)} = ${P2} (${x} ∈ ${M11})<br>${of(TAN, x)} + ${of(COT, x)} = ${P2} (${x} ∈ ℝ)<br>${of(CSC, x)} + ${of(SEC, x)} = ${P2} (${ABSX_GE1})`,
        legend: [`${x} = the argument`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity conditions: a “unit check.”</b> Two reflexes carry over from Topic 01 and earn marks here:<br>1. <b>Domain gate.</b> Every identity above is annotated with the ${x}-values where it is legal. Apply ${of(SIN, x)} + ${of(COS, x)} = ${P2} at ${x} = 2 and you’ve written nonsense: neither term exists.<br>2. <b>Branch sanity.</b> After applying a π− identity, the answer must still sit in ${COSB}. If ${COS}(−${x}) comes out negative, you used the odd form by mistake.`,
      },
      {
        t: 'p',
        html: `<b>The one structural rule</b> that generates the entire negative-argument table: odd ⇔ zero-centred branch (sin, tan, cosec); π− ⇔ ${COSB} branch (cos, sec, cot). Memorise the rule, not the six rows.`,
      },

      { t: 'part', title: 'Derivations from the branch structure' },
      {
        t: 'p',
        html: 'Every identity above is forced by the branch geometry: none is arbitrary. Deriving them once removes the need to memorise, and (more importantly) shows you why the sign-flip-vs-π-reflect split exists.',
      },
      {
        t: 'p',
        html: `<b>Derivation 1: The odd identity ${SIN}(−${x}) = −${of(SIN, x)}.</b> Let ${of(SIN, x)} = ${y}, so sin${NB}${y} = ${x} with ${y} ∈ ${SINB}. Then sin(−${y}) = −sin${NB}${y} = −${x}, and crucially −${y} is <b>still inside</b> ${SINB} (the branch is symmetric about 0). So −${y} qualifies as the principal value of ${SIN}(−${x}):<br>${SIN}(−${x}) = −${y} = −${of(SIN, x)}.<br><br>The same argument runs verbatim for ${TAN} and ${CSC}, because their branches are also symmetric about 0. That symmetry is the entire reason they’re odd.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: The π− identity ${COS}(−${x}) = π − ${of(COS, x)}.</b> Let ${of(COS, x)} = ${y}, so cos${NB}${y} = ${x} with ${y} ∈ ${COSB}. Now try the naive “negate the answer”: −${y} would have cos(−${y}) = ${x}, not −${x}, and anyway −${y} ∉ ${COSB}: illegal. Instead use cos(π − ${y}) = −cos${NB}${y} = −${x}, and check the cage: ${y} ∈ ${COSB} ⇒ π − ${y} ∈ ${COSB}, <b>legal</b>. So π − ${y} is the principal value of ${COS}(−${x}):<br>${COS}(−${x}) = π − ${y} = π − ${of(COS, x)}.<br><br>Identical logic gives the ${SEC} and ${COT} versions. The ${COSB} cage is what blocks the sign flip and forces the reflection through ${P2}.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: The complementary identity ${of(SIN, x)} + ${of(COS, x)} = ${P2}.</b> Let ${of(SIN, x)} = ${y}, so sin${NB}${y} = ${x}, ${y} ∈ ${SINB}. The co-relation cos(${P2} − ${y}) = sin${NB}${y} = ${x} holds, and we must check ${P2} − ${y} lies in cosine’s cage ${COSB}: since ${y} ∈ ${SINB}, indeed ${P2} − ${y} ∈ ${COSB}, legal. Hence ${of(COS, x)} = ${P2} − ${y}, i.e.<br>${of(SIN, x)} + ${of(COS, x)} = ${y} + (${P2} − ${y}) = ${P2}.<br><br>The branch check is not a formality: it’s exactly what makes the complementary partner’s angle land in the right cage.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 4: Why ${of(TAN, INVX)} = ${of(COT, x)} needs ${XPOS} (the sign trap).</b> Let ${of(COT, x)} = ${y}, so cot${NB}${y} = ${x} with ${y} ∈ ${COTB}, hence tan${NB}${y} = ${INVX}.<br>• <b>If ${XPOS}:</b> then ${y} ∈ ${iv('0', P2, '(', ')')}, which is inside ${TAN}’s cage ${TANB}. So ${of(TAN, INVX)} = ${y} = ${of(COT, x)}. ✓<br>• <b>If ${XNEG}:</b> then ${y} ∈ ${iv(P2, 'π', '(', ')')}, which is <b>outside</b> ${TAN}’s cage. The principal value of ${of(TAN, INVX)} is the in-cage angle ${y} − π. So ${of(TAN, INVX)} = ${y} − π = ${of(COT, x)} − π.<br><br>That single sign-dependent jump is the highest-value trap in this topic: see the fourth worked example.`,
      },
      { t: 'fig', id: 'm12-02-fig-2.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `Evaluate using identities: (a) ${SIN}(−${H}), (b) ${COS}(−${R3_2}), (c) verify ${of(SIN, H)} + ${of(COS, H)} = ${P2}.`,
        steps: [
          `(a) Odd identity: ${SIN}(−${H}) = −${of(SIN, H)} = −${P6}.`,
          `(b) π− identity (cosine is not odd):<br>${COS}(−${R3_2}) = π − ${of(COS, R3_2)}<br>= π − ${P6} = ${P5_6}.`,
          `(Branch check: ${P5_6} ∈ ${COSB} ✓. Writing −${P6} here would be the classic error.)`,
          `(c) ${of(SIN, H)} = ${P6}, ${of(COS, H)} = ${P3}; sum = ${P6} + ${P3} = ${P6} + ${fr('2π', '6')} = ${fr('3π', '6')} = ${P2} ✓.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / Speed Trap',
        q: `${COT}(−√3) equals: (a) −${P6} (b) ${P6} (c) ${P5_6} (d) ${P2_3}`,
        steps: [
          `<b>Fast solution.</b> ${COT} is a <b>π− function</b> (its branch is ${COTB}, never negative). So<br>${COT}(−√3) = π − ${COT}${NB}√3 = π − ${P6} = ${P5_6}.`,
          `<b>Speed tip:</b> the instant you see ${COT}, ${COS}, or ${SEC} of a <b>negative</b> argument, your hand should write “π−” before computing anything. Trap (a) is the odd-function reflex; (b) ignores the negative entirely.`,
        ],
        ans: '(c)',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `Find the value of ${TAN}(√3) − ${COT}(−√3).`,
        steps: [
          `(This is a standard NCERT objective question (Ex 2.2 in the pre-2023 edition): exactly the kind JEE Main lifts.)<br>${TAN}${NB}√3 = ${P3}.`,
          `For the second term, apply the π− identity:<br>${COT}(−√3) = π − ${COT}${NB}√3 = π − ${P6} = ${P5_6}.`,
          `Therefore<br>${TAN}${NB}√3 − ${COT}(−√3) = ${P3} − ${P5_6}<br>= ${fr('2π', '6')} − ${P5_6} = −${fr('3π', '6')} = −${P2}.`,
          `(The trap answer ${P2} comes from wrongly treating ${COT} as odd: taking ${COT}(−√3) = −${P6} gives ${P3} − (−${P6}) = ${P2}. The correct value is −${P2}.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Simplify ${f}(${x}) = ${of(TAN, x)} + ${of(TAN, INVX)} for all real ${x}${NB}≠${NB}0, stating the answer piecewise.`,
        steps: [
          `Use the reciprocal identity of the Derivations from the branch structure part, which is sign-sensitive, together with the complementary identity ${of(TAN, x)} + ${of(COT, x)} = ${P2}.`,
          `<b>Case ${XPOS}:</b> here ${of(TAN, INVX)} = ${of(COT, x)}, so<br>${f}(${x}) = ${of(TAN, x)} + ${of(COT, x)} = ${P2}.`,
          `<b>Case ${XNEG}:</b> here ${of(TAN, INVX)} = ${of(COT, x)} − π, so<br>${f}(${x}) = ${of(TAN, x)} + ${of(COT, x)} − π<br>= ${P2} − π = −${P2}.`,
          `<b>Sanity check at ${x} = 1:</b> ${TAN}${NB}1 + ${TAN}${NB}1 = ${P4} + ${P4} = ${P2} ✓. At ${x} = −1: −${P4} − ${P4} = −${P2} ✓. The whole difficulty of this “famous” result is the single −π that the reciprocal identity hides for ${XNEG}.`,
        ],
        ans: `${of(TAN, x)} + ${of(TAN, INVX)} =<br>${P2}, ${XPOS}<br>−${P2}, ${XNEG}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Evaluate (a) ${TAN}(−1), (b) ${SEC}(−2), (c) ${of(SIN, x)} + ${of(COS, x)} where ${x} = −${R3_2}.`,
            a: `(a) −${P4} (odd). (b) π − ${SEC}${NB}2 = π − ${P3} = ${P2_3} (π− form). (c) ${P2} (complementary law holds for all ${x} ∈ ${M11}, sign of ${x} irrelevant).`,
          },
          {
            q: `<b>[CUET]</b> State the principal value of ${COS}(−${H}) and of ${CSC}(−2), in one line each, naming the identity used.`,
            a: `${COS}(−${H}) = π − ${P3} = ${P2_3} (π− identity).<br>${CSC}(−2) = −${CSC}${NB}2 = −${P6} (odd identity).`,
          },
          {
            q: `<b>[JEE Main]</b> Find the value of ${SEC}(−${x}) + ${CSC}(−${x}) for ${ABSX_GE1} (use the negative-argument and complementary identities).`,
            a: `${SEC}(−${x}) + ${CSC}(−${x})<br>= (π − ${of(SEC, x)}) + (−${of(CSC, x)})<br>= π − (${of(SEC, x)} + ${of(CSC, x)})<br>= π − ${P2} = ${P2}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find ${TAN}(tan${NB}${P3_4}) + ${COT}(cot${NB}${P3_4}). (Hint: fold into branches first (Topic 01), then read off.)`,
            a: `tan${NB}${P3_4} = −1 ⇒ ${TAN}(−1) = −${P4}; cot${NB}${P3_4} = −1 ⇒ ${COT}(−1) = π − ${P4} = ${P3_4}. Sum = −${P4} + ${P3_4} = ${P2}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> If ${of(SIN, x)} + ${of(SIN, y)} = ${P2}, express ${of(COS, x)} in terms of ${y}, and hence find a relation between ${x} and ${y} free of inverse functions.`,
            a: `${of(SIN, y)} = ${P2} − ${of(SIN, x)} = ${of(COS, x)} (complementary), so ${of(COS, x)} = ${of(SIN, y)} ⇒ ${x} = cos(${of(SIN, y)}) = √(1 − ${y}<sup>2</sup>). Relation: ${x}<sup>2</sup> + ${y}<sup>2</sup> = 1 (with ${x}${NB}≥${NB}0 and ${y}${NB}≥${NB}0).`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `Which of the following is <b>odd</b>, i.e. satisfies ${FINV}(−${x}) = −${FINV}(${x})?`,
        opts: [
          {
            label: of(COS, x),
            nudge: '<b>Traps (a),(b),(d):</b> the “all six are odd” reflex: the single most common error in this entire topic.',
          },
          {
            label: of(COT, x),
            nudge: '<b>Traps (a),(b),(d):</b> the “all six are odd” reflex: the single most common error in this entire topic.',
          },
          { label: of(TAN, x), nudge: null },
          {
            label: of(SEC, x),
            nudge: '<b>Traps (a),(b),(d):</b> the “all six are odd” reflex: the single most common error in this entire topic.',
          },
        ],
        correct: 2,
        solution: `Odd ⇔ zero-centred branch ⇔ {${SIN}, ${TAN}, ${CSC}}. The other three (${COS}, ${COT}, ${SEC}) have ${COSB} branches and obey the π− rule.`,
      },
      {
        t: 'mcq',
        q: `${SIN}(−${R3_2}) + ${COS}(−${R3_2}) =`,
        opts: [
          { label: '0', nudge: '<b>Trap (a):</b> assuming the negatives cancel.' },
          { label: P2, nudge: null },
          { label: 'π', nudge: '<b>Trap (c):</b> computing each term and mis-adding.' },
          { label: `−${P2}`, nudge: `<b>(d)</b> treats ${COS} as odd as well: −${P3} + (−${P6}) = −${P2}.` },
        ],
        correct: 1,
        solution: `The complementary identity ${of(SIN, x)} + ${of(COS, x)} = ${P2} holds for <b>every</b> ${x} ∈ ${M11}: the negative sign of ${x} does not matter. (= −${P3} + ${P5_6} = ${P2} if you compute the long way.)`,
      },
      {
        t: 'mcq',
        q: `${TAN}(${IR3}) + ${COT}(${IR3}) =`,
        opts: [
          { label: P3, nudge: `<b>(a)</b> ${P3} is only the second term, ${COT}(${IR3}) = ${P3}.` },
          {
            label: P2_3,
            nudge: `<b>(b)</b> ${P2_3} doubles the second term (${P3} + ${P3}); the first term is ${TAN}(${IR3}) = ${P6}, and ${P6} + ${P3} = ${P2}.`,
          },
          { label: P2, nudge: null },
          {
            label: P5_6,
            nudge: `<b>(d)</b> ${P5_6} = π − ${P6} uses a π− reflection that does not apply: the argument ${IR3} is positive.`,
          },
        ],
        correct: 2,
        solution: `Direct complementary law ${of(TAN, t)} + ${of(COT, t)} = ${P2} with ${t} = ${IR3}.`,
      },
      {
        t: 'mcq',
        q: `For ${XNEG}, ${TAN}(${INVX}) equals:`,
        opts: [
          {
            label: of(COT, x),
            nudge: `<b>Trap (a):</b> applying the ${XPOS} identity blindly: the headline JEE trap of this topic.`,
          },
          { label: `${of(COT, x)} − π`, nudge: null },
          {
            label: `π − ${of(COT, x)}`,
            nudge: `<b>(c)</b> is the negative-argument form for ${COT}(−${x}), not the reciprocal identity.`,
          },
          {
            label: `−${of(COT, x)}`,
            nudge: `<b>(d)</b> treats the identity as odd; for ${XNEG}, −${of(COT, x)} lies in ${iv('−π', `−${P2}`, '(', ')')}, outside the ${TAN} cage.`,
          },
        ],
        correct: 1,
        solution: `The reciprocal identity ${of(TAN, INVX)} = ${of(COT, x)} is valid <b>only for</b> ${XPOS}; for ${XNEG} the ${TAN} cage forces a −π shift (the Derivations from the branch structure part, Derivation 4).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>“All six identities are odd.”</b> The cardinal sin. Only ${SIN}, ${TAN}, ${CSC} flip sign. ${COS}, ${SEC}, ${COT} use π−. Anchor it to the branch: a ${COSB} cage can never output a negative angle, so it cannot be odd.`,
          `<b>Reciprocal identity sign-blindness.</b> ${of(TAN, INVX)} = ${of(COT, x)} holds for ${XPOS} only. For ${XNEG}, subtract π. Always check the sign of ${x} before quoting this one.`,
          `<b>Ignoring domain gates.</b> ${of(SIN, x)} + ${of(COS, x)} = ${P2} requires ${x} ∈ ${M11}; the reciprocal identities ${of(SIN, INVX)} = ${of(CSC, x)} require ${ABSX_GE1}. Quoting an identity outside its legal domain is an automatic zero, however clean the algebra looks.`,
          `<b>Forgetting the complementary law is sign-agnostic.</b> ${of(SIN, x)} + ${of(COS, x)} = ${P2} for all legal ${x}, positive or negative: students sometimes “correct” it for negative ${x} and break a correct answer.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Build one reflex: <b>negative argument + a {cos, sec, cot} function ⇒ write “π−” first, evaluate second.</b> This converts the highest-frequency CUET/JEE-Main value-trap in the topic ${ESTIMATE} into an automatic correct answer. Pair it with the Topic 01 branch-check on every final value and the negative-argument family becomes free marks.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Reciprocal</b> (needs the right domain):', note: '' },
          { f: `${of(SIN, INVX)} = ${of(CSC, x)}, ${of(COS, INVX)} = ${of(SEC, x)} (${ABSX_GE1})`, note: '' },
          { f: `${of(TAN, INVX)} = ${of(COT, x)} (${XPOS})`, note: `for ${XNEG} it’s ${of(COT, x)} − π.` },
          { f: '<b>Negative argument</b>, split by branch shape:', note: '' },
          {
            f: '<b>ODD</b> (zero-centred)',
            note: `${SIN}(−${x}) = −${of(SIN, x)}; ${TAN}(−${x}) = −${of(TAN, x)}; ${CSC}(−${x}) = −${of(CSC, x)}.`,
          },
          {
            f: `π− (${COSB} branch)`,
            note: `${COS}(−${x}) = π − ${of(COS, x)}; ${SEC}(−${x}) = π − ${of(SEC, x)}; ${COT}(−${x}) = π − ${of(COT, x)}.`,
          },
          { f: `<b>Complementary</b> (each pair → ${P2}, any legal ${x}):`, note: '' },
          {
            f: `${of(SIN, x)} + ${of(COS, x)} = ${P2} (${ABSX}${NB}≤${NB}1); ${of(TAN, x)} + ${of(COT, x)} = ${P2} (${x} ∈ ℝ); ${of(CSC, x)} + ${of(SEC, x)} = ${P2} (${ABSX_GE1}).`,
            note: '',
          },
        ],
        aids: [
          '“Sin, tan, cosec flip the sign; cos, sec, cot reflect to π minus.”: extends Topic 01’s “sin & tan hug zero; cos & cot climb to pi.”',
          `“Reciprocal only goes co-, and tan↔cot only when ${x} is positive.”`,
          '“Co-pair adds to ninety.”: the complementary right angle.',
        ],
      },
      { t: 'fig', id: 'm12-02-fig-2.6' },
    ],
  },
];
