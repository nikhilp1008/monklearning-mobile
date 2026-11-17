import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topics 08–09: the book's Unit 8 (pp. 734–741) and the
 * supplement's Unit 9 (pp. 742–758) of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word.
 * Topic 08's numbered sections ("1. Exam Relevance" … "8. Common Pitfalls,
 * Pro-Tips & Cheat Sheet") are its parts, Section 8 split into "Common
 * pitfalls and pro-tips" and "Cheat sheet". The supplement's heading
 * (p. 742) is not copied; its
 * two opening paragraphs open Topic 09's Exam relevance part, before the box
 * text. Topic 09 uses the "Section N: …" form; its cheat sheet runs onto the
 * top of p. 758 (the rows from "Drawdown balance" and the Triggers line),
 * where Addendum A then starts.
 * Figures: 8.8 (caption p. 735, drawn p. 736) at the end of Topic 08's Concept
 * intuition; 8.9 (caption p. 743, drawn p. 744) at the end of Topic 09's
 * Concept intuition; 8.10 (caption p. 745, drawn p. 746) after the table of
 * growth situations, where its caption is printed. No unnumbered drawings.
 * Every fraction is stacked (<frac>); no em dashes.
 */
const fr = (n: string, d: string) => `<frac><num>${n}</num><den>${d}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;

const a = I('a');
const i = I('i');
const k = I('k');
const l = I('l');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const M = I('M');
const N = I('N');
const P = I('P');
const Q = I('Q');
const R = I('R');
const S = I('S');
const T = I('T');
const V = I('V');
const AL = I('al');
const RHO = I('ρ');

const tr = sb('t', r);
const Vr = sb('V', r);
const V1 = sb('V', '1');
const V2 = sb('V', '2');
const V3 = sb('V', '3');
const Vn = sb('V', n);
const V0 = sb('V', '0');
const Vr1 = `<i>V</i><sub><i>r</i>+1</sub>`;
const Vrm1 = `<i>V</i><sub><i>r</i>−1</sub>`;
const Vn1 = `<i>V</i><sub><i>n</i>+1</sub>`;
const Sn = sb('S', n);
const Sinf = `<i>S</i><sub>∞</sub>`;
const A0 = sb('A', '0');
const A1 = sb('A', '1');
const A2 = sb('A', '2');
const An = sb('A', n);
const Ak = sb('A', k);
const Akm1 = `<i>A</i><sub><i>k</i>−1</sub>`;
const Bn = sb('B', n);
const B20 = sb('B', '20');
const B21 = sb('B', '21');
const N0 = sb('N', '0');
const ak = sb('a', k);
const an = sb('a', n);
const ank = `<i>a</i><sub><i>n</i>+1−<i>k</i></sub>`;
const LOG10 = 'log<sub>10</sub>';

const SR = SUM(`${r}=1`, n);
const SK = SUM(`${k}=1`, n);
const PK = `∏<sub>${k}=1</sub><sup>${n}</sup>`;
const SQ = (s: string) => `√(${s})`;
const RR = `√${r}`;
const RR1 = SQ(`${r} + 1`);
const RN1 = SQ(`${n} + 1`);
const HALF = fr('1', '2');

// Unit 8 fractions
const F_R_R1 = fr('1', `${r}(${r} + 1)`);
const F_R_R1_R2 = fr('1', `${r}(${r} + 1)(${r} + 2)`);
const F_2R = fr('1', `(2${r} − 1)(2${r} + 1)`);
const F_SURD = fr('1', `${RR} + ${RR1}`);
const PF1 = `${fr('1', r)} − ${fr('1', `${r} + 1`)}`;
const N_N1 = fr(n, `${n} + 1`);
const N_N3 = fr(`${n}(${n} + 3)`, `4(${n} + 1)(${n} + 2)`);
const N_2N1 = fr(n, `2${n} + 1`);
const VN_FORM = fr(`${n}(${n} + 1)(${n} + 2) ⋯ (${n} + ${k})`, `${k} + 1`);
const VN_LHS = `${r}(${r} + 1) ⋯ (${r} + ${k} − 1)`;
const F_6 = fr(`2${r} + 1`, `${r}<sup>2</sup>(${r} + 1)<sup>2</sup>`);
const FACT_R = fr(r, `(${r} + 1)!`);

// Unit 9 pieces
const R100 = fr(R, '100');
const ONE_R100 = `(1 + ${R100})`;
const AMT = `${P}${ONE_R100}<sup>${n}</sup>`;
const GROW_N = `(1 + ${i})<sup>${n}</sup>`;
const ANNUITY = fr(`${GROW_N} − 1`, i);
const P_EXP = `${a}<sup>${n}</sup> ${r}<sup>${n}(${n}−1)/2</sup>`;
const AL_N2 = `(${AL})<sup>${n}/2</sup>`;
const IDENT = `${P}<sup>2</sup>${R}<sup>${n}</sup> = ${S}<sup>${n}</sup>`;
const S_R = fr(S, R);
const SR_N = `(${S_R})<sup>${n}</sup>`;
const A2RN1 = `${a}<sup>2</sup>${r}<sup>${n}−1</sup>`;
const ARN1 = `<i>ar</i><sup>${n}−1</sup>`;
const XYZ = `${x}<sup>${q}−${r}</sup> ${y}<sup>${r}−${p}</sup> ${z}<sup>${p}−${q}</sup> = 1`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 08 · pp. 734–741 ────────────────
  {
    n: '08',
    title: 'Telescoping Series & Partial Fractions',
    kalam: 'The core idea: rewrite each term as a difference of consecutive quantities so that almost everything cancels.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This topic covers the summation techniques for series whose general term is <b>not</b> a polynomial in ${n} (fractions, factorials, surds), where the special-series formulas of Topic 07 don’t apply. The core idea: rewrite each term as a <b>difference of consecutive quantities</b> so that almost everything cancels.<br>• <b>CBSE Boards:</b> ∑ ${F_R_R1}-type sums appear in some boards and in the NCERT miscellaneous exercise.<br>• <b>JEE Main:</b> A reliable topic ${ESTIMATE}: sums like ∑ ${F_R_R1_R2}, ∑ ${F_SURD}, and the ${Vn} method for products of AP terms.<br>• <b>JEE Advanced:</b> Telescoping is a frequent “trick” step inside harder problems ${ESTIMATE}, and the ${Vn} method generalises the special-series results. Recognising a telescoping structure is a high-value skill.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'A telescoping sum works like a <b>collapsing telescope</b> (or a stack of nested folding cups): each term cancels part of the next, so that when you add everything up, only a few pieces at the very start and the very end survive (with a shift of one, just the first and the last); all the middle collapses to nothing.',
      },
      {
        t: 'p',
        html: `The trick is to rewrite each term as a <b>difference of two consecutive “things.”</b> If you can write<br>${tr} = ${Vr} − ${Vr1} (or ${Vrm1} − ${Vr}),<br>then<br>${SR} ${tr}<br>= (${V1} − ${V2}) + (${V2} − ${V3})<br>+ ⋯ + (${Vn} − ${Vn1})<br>= ${V1} − ${Vn1},<br>because every interior ${V} appears once with a + and once with a −. The whole sum reduces to <b>just the endpoints.</b>`,
      },
      {
        t: 'p',
        html: 'The everyday picture: think of a <b>relay race where each runner hands off exactly what they received</b>: only the starting baton and the final finish-line position matter; everything passed in between cancels out in the bookkeeping.',
      },
      {
        t: 'p',
        html: `For fractional terms, the tool that produces the difference-form is <b>partial fractions</b>: ${F_R_R1} = ${PF1}. For products of consecutive integers, the tool is the <b>${Vn} method</b>: append one more factor and divide by the count, mirroring how integration raises a power. For surds, <b>rationalising</b> turns ${F_SURD} into the difference ${RR1} − ${RR}.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.8' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Telescoping principle',
        main: `${tr} = ${Vr} − ${Vr1}<br>⟹ ${SR} ${tr} = ${V1} − ${Vn1}`,
        legend: [`${tr} = the ${r}th term`, `${Vr} = the quantity whose difference is ${tr}`, `${n} = the number of terms`],
        note: null,
      },
      { t: 'p', html: '<b>Standard partial-fraction results</b> (memorise the first; derive the rest):' },
      {
        t: 'formula',
        kicker: 'Standard partial-fraction results',
        main: [
          `${SR} ${F_R_R1} = 1 − ${fr('1', `${n} + 1`)} = ${N_N1}`,
          `${SR} ${F_R_R1_R2}<br>= ${HALF}[${fr('1', '1 · 2')} − ${fr('1', `(${n} + 1)(${n} + 2)`)}]<br>= ${N_N3}`,
          `${SR} ${F_2R}<br>= ${HALF}[1 − ${fr('1', `2${n} + 1`)}] = ${N_2N1}`,
        ].join('<br>'),
        legend: [`${r} = the index of summation`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>The ${Vn} method (products of consecutive AP terms).</b> To sum ∑ ${tr} where ${tr} = ${r}(${r} + 1)(${r} + 2) ⋯ (${k} consecutive factors), append the next factor, divide by ${k} + 1 times the common difference, and subtract the same expression at ${r} = 0 (it is 0 when the first factor is ${r}). For consecutive integers (CD = 1):`,
      },
      {
        t: 'formula',
        kicker: 'The <i>V</i><sub><i>n</i></sub> method (consecutive integers)',
        main: `${SR} ${VN_LHS}<br>= ${VN_FORM}`,
        legend: [`${r} = the index of summation`, `${k} = the number of consecutive factors (consecutive integers from ${r})`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: `e.g. ∑ ${r}(${r} + 1) = ${fr(`${n}(${n} + 1)(${n} + 2)`, '3')} and ∑ ${r}(${r} + 1)(${r} + 2) = ${fr(`${n}(${n} + 1)(${n} + 2)(${n} + 3)`, '4')}.`,
      },
      { t: 'p', html: '<b>Factorial and surd telescopers:</b>' },
      {
        t: 'formula',
        kicker: 'Factorial and surd telescopers',
        main: `${SR} ${r} · ${r}! = (${n} + 1)! − 1<br>${SR} ${F_SURD} = ${RN1} − 1`,
        legend: [`${r} = the index of summation`, `${n} = the number of terms`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Validity / scope conditions:</b><br>1. <b>The term must factor into a genuine difference of consecutive quantities.</b> Not every fraction telescopes: only those whose partial-fraction pieces line up with a shift of one (or a fixed shift).<br>2. <b>Watch the constant multiplier.</b><br>For ${F_R_R1_R2}<br><br>the difference-form carries a ${HALF};<br><br>for ${F_2R}<br><br>it carries ${HALF} from the ${HALF}(${fr('1', `2${r} − 1`)} − ${fr('1', `2${r} + 1`)}) split.<br>Track it.<br>3. <b>Identify the surviving endpoints carefully</b>: for ${tr} = ${Vr} − ${Vr1} they are ${V1} − ${Vn1}, not ${V0} − ${Vn} (for ${tr} = ${Vr} − ${Vrm1}, as in Derivation 3, they are ${Vn} − ${V0}); off-by-one here is the main error.`,
      },

      { t: 'part', title: 'Theorem proofs and key derivations' },
      {
        t: 'p',
        html: `<b>Derivation 1: ∑ ${F_R_R1} by partial fractions.</b> ${F_R_R1} = ${PF1}. Summing for ${r} = 1, …, ${n}:<br>(${fr('1', '1')} − ${fr('1', '2')}) + (${fr('1', '2')} − ${fr('1', '3')})<br>+ ⋯ + (${fr('1', n)} − ${fr('1', `${n} + 1`)})<br>= 1 − ${fr('1', `${n} + 1`)} = ${N_N1}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: ∑ ${F_R_R1_R2}.</b> Use<br>${F_R_R1_R2}<br>= ${HALF}[${F_R_R1} − ${fr('1', `(${r} + 1)(${r} + 2)`)}].<br>The bracket telescopes:<br>∑ = ${HALF}[${fr('1', '1 · 2')} − ${fr('1', `(${n} + 1)(${n} + 2)`)}]<br>= ${N_N3}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: the ${Vn} method for ∑ ${r}(${r} + 1).</b> Take ${Vr} = ${r}(${r} + 1)(${r} + 2). Then<br>${Vr} − ${Vrm1}<br>= ${r}(${r} + 1)(${r} + 2) − (${r} − 1)${r}(${r} + 1)<br>= ${r}(${r} + 1)[(${r} + 2) − (${r} − 1)]<br>= 3${r}(${r} + 1).<br>So ${r}(${r} + 1) = ${fr('1', '3')}(${Vr} − ${Vrm1}), and the sum telescopes to ${fr('1', '3')}(${Vn} − ${V0}) = ${fr('1', '3')}${n}(${n} + 1)(${n} + 2). ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 4: ∑ ${r} · ${r}!.</b> Note ${r} · ${r}! = (${r} + 1)! − ${r}! (since (${r} + 1)! = (${r} + 1) ${r}! = ${r} · ${r}! + ${r}!). Summing telescopes to (${n} + 1)! − 1! = (${n} + 1)! − 1. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 5: surd telescoper.</b> Rationalise:<br>${F_SURD}<br>= ${fr(`${RR1} − ${RR}`, `(${RR1})<sup>2</sup> − (${RR})<sup>2</sup>`)}<br>= ${RR1} − ${RR}.<br>Summing telescopes to ${RN1} − 1. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      { t: 'p', html: 'Ladder: CBSE Board → JEE Main → JEE Advanced. (Standard curriculum problems.)' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: `Find ${SR} ${F_R_R1} and hence its value as ${n} → ∞.`,
        steps: [
          `By Derivation 1, ${Sn} = ${N_N1}. As ${n} → ∞, ${Sn} → 1. (So ${fr('1', '1 · 2')} + ${fr('1', '2 · 3')} + ⋯ = 1 exactly.)`,
        ],
        ans: `${Sn} = ${N_N1}; the infinite sum is 1`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Sum ${fr('1', '1 · 4')} + ${fr('1', '4 · 7')} + ${fr('1', '7 · 10')} + … to ${n} terms.`,
        steps: [
          `General term<br>${tr} = ${fr('1', `(3${r} − 2)(3${r} + 1)`)}<br>= ${fr('1', '3')}[${fr('1', `3${r} − 2`)} − ${fr('1', `3${r} + 1`)}].<br>Telescoping:`,
          `${Sn} = ${fr('1', '3')}[1 − ${fr('1', `3${n} + 1`)}]`,
        ],
        ans: `${Sn} = ${fr(n, `3${n} + 1`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: `Find ${SR} ${r}(${r} + 1)(${r} + 2).`,
        steps: [
          `By the ${Vn} method (${k} = 3 factors; divide by 4), ${fr(`${n}(${n} + 1)(${n} + 2)(${n} + 3)`, '4')}.`,
          `(Verify ${n} = 1: 1 · 2 · 3 = 6 = ${fr('1 · 2 · 3 · 4', '4')} ✓.)`,
        ],
        ans: fr(`${n}(${n} + 1)(${n} + 2)(${n} + 3)`, '4'),
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Evaluate ${SR} ${FACT_R}.`,
        steps: [
          `Write<br>${FACT_R} = ${fr(`(${r} + 1) − 1`, `(${r} + 1)!`)}<br>= ${fr('1', `${r}!`)} − ${fr('1', `(${r} + 1)!`)}.<br>Telescoping:`,
          `${Sn} = ${fr('1', '1!')} − ${fr('1', `(${n} + 1)!`)} = 1 − ${fr('1', `(${n} + 1)!`)}.`,
          `${Sinf} = 1.`,
        ],
        ans: `${Sn} = 1 − ${fr('1', `(${n} + 1)!`)}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Sum ${SR} ${F_SURD}, then evaluate for ${n} = 99.`,
        steps: [
          `By Derivation 5, each term equals ${RR1} − ${RR}, so ${Sn} = ${RN1} − 1. For ${n} = 99: <i>S</i><sub>99</sub> = √100 − 1 = 9.`,
          'Rationalising converted a sum of awkward fractions into a clean telescoper.',
        ],
        ans: '9',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: `Find ${SR} ${F_6}.`,
        steps: [
          `Notice ${F_6} = ${fr('1', `${r}<sup>2</sup>`)} − ${fr('1', `(${r} + 1)<sup>2</sup>`)} (since (${r} + 1)<sup>2</sup> − ${r}<sup>2</sup> = 2${r} + 1). Telescoping:`,
          `${Sn} = 1 − ${fr('1', `(${n} + 1)<sup>2</sup>`)} = ${fr(`${n}(${n} + 2)`, `(${n} + 1)<sup>2</sup>`)}.`,
          `${Sinf} = 1.`,
        ],
        ans: `${Sn} = ${fr(`${n}(${n} + 2)`, `(${n} + 1)<sup>2</sup>`)}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>(Board)</b> Sum ${fr('1', '2 · 3')} + ${fr('1', '3 · 4')} + … to ${n} terms.`,
            a: `${HALF} − ${fr('1', `${n} + 2`)} = ${fr(n, `2(${n} + 2)`)}`,
          },
          { q: `<b>(Main)</b> Sum ${SR} ${F_2R}.`, a: N_2N1 },
          { q: `<b>(Main)</b> Find ${SR} ${r} · ${r}!.`, a: `(${n} + 1)! − 1` },
          {
            q: `<b>(Adv)</b> Sum ${SR} ${F_R_R1_R2} and its value as ${n} → ∞.`,
            a: `${N_N3}, → ${fr('1', '4')}`,
          },
          {
            q: `<b>(Adv)</b> Evaluate ${SR} ${fr(r, `(2${r} − 1)(2${r} + 1)(2${r} + 3)`)}; hint: partial fractions into a telescoper.`,
            a: `${fr(`${n}(${n} + 1)`, `2(2${n} + 1)(2${n} + 3)`)}, since<br><br>${fr(r, `(2${r} − 1)(2${r} + 1)(2${r} + 3)`)}<br><br>= ${fr('1', '16')}[${fr('1', `2${r} − 1`)} − ${fr('1', `2${r} + 1`)}]<br><br>+ ${fr('3', '16')}[${fr('1', `2${r} + 1`)} − ${fr('1', `2${r} + 3`)}].`,
          },
        ],
      },

      { t: 'part', title: 'MCQ with distractor analysis' },
      {
        t: 'mcq',
        q: `${SR} ${F_R_R1} equals:`,
        opts: [
          { label: fr('1', `${n}(${n} + 1)`), nudge: '<b>(A)</b> is the last term, not the sum.' },
          { label: N_N1, nudge: null },
          { label: fr(`${n} + 1`, n), nudge: '<b>(C)</b> inverts the answer.' },
          {
            label: `1 + ${fr('1', `${n} + 1`)}`,
            nudge: '<b>(D)</b> adds instead of subtracts the endpoint (the classic sign slip).',
          },
        ],
        correct: 1,
        solution: `1 − ${fr('1', `${n} + 1`)} = ${N_N1}. Tests the telescoping result and endpoint handling.`,
      },
      {
        t: 'mcq',
        q: `To sum ∑ ${F_R_R1}, the correct first step is:`,
        opts: [
          {
            label: `apply ∑${n}<sup>2</sup> formula`,
            nudge: '<b>(A)</b> (a classic term-recognition failure) applies a polynomial formula to a fraction.',
          },
          { label: `write ${PF1}`, nudge: null },
          {
            label: 'use the GP sum',
            nudge: `<b>(C)</b> The GP sum needs a constant ratio, but ${fr('1', '2')}, ${fr('1', '6')}, ${fr('1', '12')} have ratios ${fr('1', '3')} and then ${HALF}.`,
          },
          {
            label: 'use the AGP method',
            nudge: `<b>(D)</b> The AGP method needs (linear) × (geometric) terms, and ${F_R_R1} has no geometric factor.`,
          },
        ],
        correct: 1,
        solution: 'Partial fractions create the telescoper. Tests technique selection: the complement of Topic 07.',
      },
      {
        t: 'mcq',
        q: `${SR} ${F_SURD} equals:`,
        opts: [
          { label: `√${n} − 1`, nudge: '<b>(A)</b> is an off-by-one endpoint slip.' },
          { label: `${RN1} − 1`, nudge: null },
          { label: `${RN1} + 1`, nudge: '<b>(C)</b> wrong sign on the endpoint.' },
          {
            label: `1 − ${fr('1', RN1)}`,
            nudge: `<b>(D)</b> copies the shape of ∑ ${F_R_R1} = 1 − ${fr('1', `${n} + 1`)}; rationalising gives ${RR1} − ${RR}, a difference of surds, not of reciprocals.`,
          },
        ],
        correct: 1,
        solution: `Rationalising gives ${RR1} − ${RR}, telescoping to ${RN1} − 1. Tests the surd telescoper.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Never reaching a difference:</b> Failing to rewrite ${tr} as a difference (trying to brute-force or apply polynomial ∑ formulas to a fraction/surd). The dominant error.`,
          `<b>Endpoint sign or count:</b> Off-by-one or wrong sign on the surviving endpoints (${V1} − ${Vn1}).`,
          `<b>Dropping the multiplier:</b> Dropping the ${HALF} (or ${fr('1', k)}) constant that the difference-form carries.`,
          `<b>Wrong divisor:</b> Using the wrong divisor in the ${Vn} method (divide by ${k} + 1 for ${k} factors, × the common difference).`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips:</b><br>• For a <b>fraction</b>, try partial fractions and look for a consecutive-shift difference.<br>• For a <b>product of consecutive terms</b>, use the ${Vn} method (append a factor, divide by count +1).<br>• For <b>factorials</b>, look for ${tr} = <i>f</i>(${r} + 1) − <i>f</i>(${r}) with <i>f</i> a factorial expression.<br>• For <b>surds in a denominator</b>, rationalise: it almost always telescopes.<br>• After telescoping with a shift of one, the answer is just (first surviving term) − (last surviving term); with a shift of <i>s</i>, <i>s</i> terms survive at each end.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: `∑ ${F_R_R1}`, note: `${PF1} = ${N_N1}` },
          { f: `∑ ${F_R_R1_R2}`, note: `<br>${N_N3}` },
          { f: `∑ ${F_2R}`, note: `<br>${N_2N1}` },
          { f: `∑ ${VN_LHS}`, note: `${VN_FORM} (${Vn} method)` },
          { f: `∑ ${r} · ${r}!`, note: `(${n} + 1)! − 1` },
          { f: `∑ ${F_SURD}`, note: `${RN1} − 1` },
          { f: `∑ ${F_6}`, note: `<br>1 − ${fr('1', `(${n} + 1)<sup>2</sup>`)}` },
          { f: 'Telescoping principle', note: `${tr} = ${Vr} − ${Vr1} ⇒ ∑ = ${V1} − ${Vn1}` },
        ],
        aids: [],
      },
      {
        t: 'p',
        html: '<b>One-liner:</b> rewrite each term as a difference of consecutive things; the middle collapses, only the ends survive.',
      },
    ],
  },

  // ──────────────── Topic 09 · pp. 742–758 ────────────────
  {
    n: '09',
    title: 'Growth, Decay and the Product of a GP',
    kalam: 'A quantity that changes by a fixed percentage each period is a GP, not an AP.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This supplement adds worked treatments of compound growth and decay, the product of the terms of a GP, and further summation techniques. It is organised as one new full-spine unit, Topic 09 (Growth, Decay and the Product of a GP), followed by Additional topics A to E, each of which extends the topic named in its heading.<br><br>Notation continues from Topics 01–08 throughout: ${a} is a first term, ${r} a common ratio, <i>d</i> a common difference, ${an} (or <i>t</i><sub><i>n</i></sub>) an ${n}th term, ${Sn} the sum of ${n} terms, and ${A}, <i>G</i>, <i>H</i> the arithmetic, geometric and harmonic means.`,
      },
      {
        t: 'p',
        html: `This topic delivers the two GP items that CBSE and JEE ask for and that Topics 01–08 do not work. CBSE Boards set a compound-growth word problem (interest, depreciation, population, bacterial doubling, instalment savings) as a reliable 5-mark question ${ESTIMATE}, and the formula ${A} = ${AMT} is directly askable. JEE Main draws on the same growth models in disguised form and, separately, on the product of the terms of a GP: the relation ${IDENT} linking the sum, the product and the sum of reciprocals is an NCERT miscellaneous-exercise result that reappears as a one-line JEE Main question almost every cycle ${ESTIMATE}. JEE Advanced pushes the growth models into loan-repayment and drawdown problems where a GP sum sits inside a recurrence, and pushes the product identity into problems where the product is the only accessible quantity. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>A quantity that changes by a fixed percentage each period is a GP, not an AP.</b> That single sentence is the whole of the first half of this topic, and it is the sentence students skip.',
      },
      {
        t: 'p',
        html: 'Think about it this way. Your father pays a fixed Rs 2,000 every month into a recurring deposit. The amount he has paid in grows by the same Rs 2,000 each month: an AP, Topic 02. But a fixed deposit of Rs 2,000 left alone at 8% per annum grows by 8% <b>of whatever is currently there</b>, which is a bigger rupee amount every year: Rs 160 in year one, Rs 172.80 in year two, Rs 186.62 in year three. Equal steps make an AP. Equal factors make a GP. Interest, inflation, depreciation, population, bacterial cultures and radioactive decay are all quoted as percentages, so they are all GPs.',
      },
      {
        t: 'p',
        html: `The bridge to Topic 03 is mechanical. If a quantity is ${P} now and grows by ${R}% per period, then after one period it is ${P}${ONE_R100}, after two periods ${P}${ONE_R100}<sup>2</sup>, and so on. The successive values ${P}, ${P}(1 + ${i}), ${P}(1 + ${i})<sup>2</sup>, … with ${i} = ${R100} form a GP with first term ${P} and common ratio 1 + ${i}, and every formula from Topic 03 becomes available at once. Decay is the same statement with ${r} = 1 − ${R100} < 1: a bike losing 20% of its value each year has ${r} = 0.8, and the shrinking GP of Topic 03 is exactly a depreciation schedule.`,
      },
      {
        t: 'p',
        html: '<b>Where the model fails, and it fails in exactly one place:</b> the percentage must be applied to the current value, not to the original one. If a machine loses “20% of its original cost” every year, the losses are equal rupee amounts and the values form an AP: that is straight-line depreciation and the GP formula is wrong for it. Read the sentence, not the number. The words “on the reducing balance”, “of its value at the beginning of the year”, or “compounded” all signal a GP. The words “of the original cost” signal an AP.',
      },
      {
        t: 'p',
        html: `<b>The second half of this topic is about a quantity you have been computing term by term without ever naming it: the product.</b> In Topic 03 you met the product of ${n} inserted GMs. That was a special case of a completely general fact. Line up a GP and pair the terms from the outside in: first with last, second with second-last, and so on. Every such pair has the same product ${a} · ${l}, because as you move one step in from the left you multiply by ${r} and as you move one step in from the right you divide by ${r}. This is the multiplicative twin of Gauss’s reversal trick from Topic 02, where every outside-in pair of an AP has the same sum. <b>In an AP, outside-in pairs share a sum; in a GP, outside-in pairs share a product.</b> Gauss’s observation gives ${Sn} = ${fr(n, '2')}(${a} + ${l}); this one gives ${P} = ${AL_N2}.`,
      },
      {
        t: 'p',
        html: `Once you see that, the celebrated identity ${IDENT} stops being a formula to memorise. The sum-of-reciprocals ${R} belongs to the GP of reciprocals, whose first and last terms are ${fr('1', a)} and ${fr('1', l)}. Dividing ${S} by ${R} therefore cancels everything except ${AL}, and ${AL} is precisely the quantity that ${P} is built from.`,
      },
      { t: 'fig', id: 'm11-08-fig-8.9' },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Compound growth and decay</b><br><br>Let ${P} be the initial (principal) value, ${R} the rate per cent per period, ${i} = ${R100} the rate as a decimal, and ${n} the number of complete periods:`,
      },
      {
        t: 'formula',
        kicker: 'Compound growth and decay',
        main: `${A} = ${AMT}<br>CI = ${A} − ${P}<br>= ${P}[${ONE_R100}<sup>${n}</sup> − 1]<br>Decay: ${A} = ${P}(1 − ${R100})<sup>${n}</sup>`,
        legend: [
          `${P} = the initial (principal) value`,
          `${R} = the rate per cent per period (for decay, 1 − ${R100} replaces 1 + ${R100})`,
          `${n} = the number of complete periods`,
          `${A} = the amount (value) after ${n} periods`,
          'CI = the compound interest earned',
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${A}: the amount (value) after ${n} periods.<br>• CI: the compound interest earned, i.e. the growth alone.<br>• The successive amounts ${P}, ${P}(1 + ${i}), ${P}(1 + ${i})<sup>2</sup>, … form a GP with first term ${P} and common ratio 1 + ${i}.`,
      },
      {
        t: 'p',
        html: `Validity: the rate must apply to the current value each period, and ${n} counts <b>complete</b> compounding periods. If ${n} is not a whole number of periods the formula is an approximation, and this topic does not use that case.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Situation', `Common ratio ${r}`, `Value after ${n} periods`],
        rows: [
          [`Compound interest at ${R}% per annum, compounded annually`, `1 + ${R100}`, AMT],
          [
            `Compounded ${k} times a year, ${n} years`,
            `1 + ${fr(R, `100${k}`)}`,
            `${P}(1 + ${fr(R, `100${k}`)})<sup><i>nk</i></sup>`,
          ],
          [
            `Depreciation at ${R}% per annum on the reducing balance`,
            `1 − ${R100}`,
            `${P}(1 − ${R100})<sup>${n}</sup>`,
          ],
          [`Population / bacteria growing at ${R}% per period`, `1 + ${R100}`, `${N0}${ONE_R100}<sup>${n}</sup>`],
          [`Quantity doubling every ${T} units of time, elapsed time ${t}`, '2 per doubling', `${N0} 2<sup>${t}/${T}</sup>`],
          [`Half-life ${T}, elapsed time ${t}`, `${HALF} per half-life`, `${N0}(${HALF})<sup>${t}/${T}</sup>`],
        ],
      },
      { t: 'fig', id: 'm11-08-fig-8.10' },
      {
        t: 'p',
        html: `Note the contrast with <b>simple interest</b>, which is an AP: <i>A</i><sub>SI</sub> = ${P}(1 + ${fr(`<i>nR</i>`, '100')}), growing by the equal step ${fr('<i>PR</i>', '100')} each period. Simple interest follows the AP model of Topic 02; compound interest follows the GP model of Topic 03. Deciding which one a question means is worth more marks than any algebra in this topic.`,
      },
      {
        t: 'p',
        html: `<b>Instalment sums (SIP / annuity)</b><br><br>Suppose a fixed amount ${Q} is deposited once per period for ${n} periods at rate ${i} per period, compounded once per period. The deposits have been in the account for different lengths of time, so the maturity values form a GP.`,
      },
      {
        t: 'formula',
        kicker: 'Instalment sums (SIP / annuity)',
        main: `Deposits at the <b>end</b> of each period:<br>${M} = ${Q} ${ANNUITY}<br>Deposits at the <b>beginning</b> of each period:<br>${M} = ${Q}(1 + ${i}) ${ANNUITY}`,
        legend: [
          `${Q} = the fixed amount deposited each period`,
          `${i} = the rate per period (as a decimal, not 0)`,
          `${n} = the number of periods`,
          `${M} = the total accumulated after the ${n}th period`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${M}: the total accumulated immediately after the ${n}th period ends.<br>• The two differ by exactly one extra period of interest on every deposit, hence the single factor (1 + ${i}).<br><br>Validity: ${i} ≠ 0; for ${i} = 0 the total is simply <i>nQ</i>.`,
      },
      {
        t: 'p',
        html: `<b>Product of the terms of a GP</b><br><br>Let <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, …, ${an} be a GP with first term ${a}, common ratio ${r} and last term ${l} = ${ARN1}. Write<br>${S} = ${SK} ${ak},<br>${P} = ${PK} ${ak},<br>${R} = ${SK} ${fr('1', ak)}.`,
      },
      {
        t: 'formula',
        kicker: 'Product of the terms of a GP',
        main: `${P} = ${P_EXP} = ${AL_N2}<br>${S_R} = ${AL} = ${A2RN1}<br>${IDENT}`,
        legend: [
          `${S} = the sum of the ${n} terms`,
          `${P} = their product (the (${AL})<sup>${n}/2</sup> form for positive terms)`,
          `${R} = the sum of their reciprocals (not 0 when dividing ${S} by ${R})`,
          `${a} = the first term`,
          `${r} = the common ratio`,
          `${l} = the last term`,
          `${n} = the number of terms`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${S}: sum of the ${n} terms; ${P}: their product; ${R}: the sum of their reciprocals.<br>• ${AL}: the product of the first and last terms, the constant shared by every outside-in pair.`,
      },
      {
        t: 'p',
        html: `Validity and reading conditions:<br>1. Every term is non-zero and ${r} ≠ 0, as always for a GP (Topic 03). Then ${R} is defined and ${P} ≠ 0. ${S_R} = ${AL} also needs ${R} ≠ 0: for 1, −1, 1, −1 (${r} = −1, ${n} even) ${S} = ${R} = 0, although ${IDENT} still holds (0 = 0).<br>2. ${P} = ${AL_N2} carries a square root when ${n} is odd. For a GP of <b>positive</b> terms this is unambiguous. For a GP whose terms are not all positive (${r} < 0 or ${a} < 0), use ${P} = ${P_EXP}, which is always exact and always signed correctly.<br>3. ${IDENT} holds for every GP, including ${r} = 1 (then ${S} = <i>na</i>, ${P} = ${a}<sup>${n}</sup>, ${R} = ${fr(n, a)}, and both sides equal ${n}<sup>${n}</sup>${a}<sup>${n}</sup>). It is one of the few GP identities with no case split.<br>4. ${P}<sup>2</sup> = ${SR_N} determines ${P} only up to sign. If the question says “positive terms”, take the positive root; otherwise you must determine the sign separately.`,
      },
      {
        t: 'p',
        html: `<b>A companion result on general terms</b><br><br>If ${x}, ${y}, ${z} are the ${p}th, ${q}th and ${r}th terms of a GP, then`,
      },
      {
        t: 'formula',
        kicker: `The ${p}th, ${q}th and ${r}th terms of a GP`,
        main: XYZ,
        legend: [`${x}, ${y}, ${z} = the ${p}th, ${q}th and ${r}th terms`, `${p}, ${q}, ${r} = their positions in the GP`],
        note: null,
      },
      {
        t: 'p',
        html: `This is the multiplicative image of the AP result of Topic 02 and is proved the same way, by writing ${x} = ${a}${RHO}<sup>${p}−1</sup>, ${y} = ${a}${RHO}<sup>${q}−1</sup>, ${z} = ${a}${RHO}<sup>${r}−1</sup> and checking that both exponents collapse to zero.`,
      },

      { t: 'part', title: 'CBSE board derivations and key procedures' },
      {
        t: 'p',
        html: `<b>Derivation 1: the compound-growth formula ${A} = ${P}${GROW_N}</b><br><br><b>Step 1.</b> Let ${A0} = ${P} be the value at the start, and let the value grow by ${R}% of its current size each period, with ${i} = ${R100}. (This is the modelling assumption; everything else is algebra.)<br><br><b>Step 2.</b> In one period the value gains <i>i</i>${A0}, so ${A1} = ${A0} + <i>i</i>${A0} = ${A0}(1 + ${i}). (Growth is proportional to the current value.)<br><br><b>Step 3.</b> The same argument applied to ${A1} gives ${A2} = ${A1}(1 + ${i}), and in general ${Ak} = ${Akm1}(1 + ${i}) for every ${k} ≥ 1. (The rate does not change from period to period.)<br><br><b>Step 4.</b> Hence ${fr(Ak, Akm1)} = 1 + ${i} is constant, which is exactly the definition of a GP with common ratio 1 + ${i} (Topic 03’s Key formulas and definitions part).<br><br><b>Step 5.</b> By the ${n}th-term formula ${an} = ${ARN1} with ${a} = ${A0} = ${P} and ${r} = 1 + ${i}, the value after ${n} periods (which is the (${n} + 1)th term of the sequence ${A0}, ${A1}, ${A2}, …) is<br>${An} = ${P}${GROW_N} = ${AMT}. ■<br><br><b>Step 6.</b> For decay at ${R}% per period, replace the gain <i>i</i>${Akm1} by a loss, giving ${r} = 1 − ${R100} and ${An} = ${P}(1 − ${R100})<sup>${n}</sup>. Since 0 < ${r} < 1, this is a shrinking GP: ${An} → 0, yet every ${An} = <i>Pr</i><sup>${n}</sup> > 0, which is why depreciation never reaches zero in finite time. ■`,
      },
      {
        t: 'p',
        html: `<b>Index warning, and it costs marks.</b> The sequence of values starts at ${A0} = ${P}. The value after ${n} periods is ${An}, which is the (${n} + 1)th term of that sequence. Any time a question is phrased in terms of “the ${n}th term”, recount from the start.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: the instalment (SIP) sum</b><br><br><b>Step 1.</b> Suppose ${Q} is deposited at the <b>end</b> of each of ${n} periods, at rate ${i} per period. (Set the timing convention first; everything hinges on it.)<br><br><b>Step 2.</b> The deposit made at the end of period ${k} sits in the account for ${n} − ${k} further periods, so at the end of period ${n} it is worth ${Q}(1 + ${i})<sup>${n}−${k}</sup>. (Derivation 1 applied to that one deposit.)<br><br><b>Step 3.</b> Summing over ${k} = 1, 2, …, ${n} gives<br>${M} = ${Q}[(1 + ${i})<sup>${n}−1</sup> + (1 + ${i})<sup>${n}−2</sup> + ⋯ + (1 + ${i}) + 1],<br>a GP with first term 1, common ratio 1 + ${i} and ${n} terms. (Read the bracket right-to-left.)<br><br><b>Step 4.</b> By the Topic 03 sum formula with ${r} = 1 + ${i} ≠ 1,<br>${M} = ${Q} ${fr(`${GROW_N} − 1`, `(1 + ${i}) − 1`)} = ${Q} ${ANNUITY}. ■<br><br><b>Step 5.</b> If instead each deposit is made at the <b>beginning</b> of its period, every deposit earns one extra period of interest, so multiply throughout by (1 + ${i}):<br>${M} = ${Q}(1 + ${i}) ${ANNUITY}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: the product of ${n} terms of a GP</b><br><br><b>Step 1.</b> Write the terms as ${a}, <i>ar</i>, <i>ar</i><sup>2</sup>, …, ${ARN1}. (Standard form, Topic 03.)<br><br><b>Step 2.</b> Multiply them:<br>${P} = ${a} · <i>ar</i> · <i>ar</i><sup>2</sup> ⋯ ${ARN1}<br>= ${a}<sup>${n}</sup> ${r}<sup>0+1+2+⋯+(${n}−1)</sup>.<br>(Collect the ${n} copies of ${a} and add the exponents of ${r}.)<br><br><b>Step 3.</b> The exponent is the sum of the first ${n} − 1 natural numbers together with 0, i.e. ${fr(`(${n} − 1)${n}`, '2')} by Topic 07. Hence<br>${P} = ${P_EXP}.<br><br><b>Step 4.</b> Since ${l} = ${ARN1}, we have ${AL} = ${A2RN1}, and therefore<br>${AL_N2} = (${A2RN1})<sup>${n}/2</sup><br>= ${P_EXP} = ${P} (always for even ${n}; for odd ${n} when the terms are positive, as in Validity and reading condition 2). ■<br><br><b>Step 5 (the pairing reading).</b> Equivalently, ${ak} · ${ank} = <i>ar</i><sup>${k}−1</sup> · <i>ar</i><sup>${n}−${k}</sup> = ${A2RN1} = ${AL} for every ${k}. Multiplying the ${n} terms in outside-in pairs therefore multiplies ${fr(n, '2')} copies of ${AL}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 4: the identity ${IDENT}</b><br><br><b>Step 1.</b> The reciprocals ${fr('1', a)}, ${fr('1', '<i>ar</i>')}, …, ${fr('1', ARN1)} themselves form a GP, with first term ${fr('1', a)} and common ratio ${fr('1', r)}. (Reciprocating a GP gives a GP: the analogue of the reciprocation move of Topic 04.)<br><br><b>Step 2.</b> For ${r} ≠ 1, by the Topic 03 sum formula,<br>${S} = ${a} ${fr(`${r}<sup>${n}</sup> − 1`, `${r} − 1`)},<br>${R} = ${fr('1', a)} · ${fr(`1 − ${r}<sup>−${n}</sup>`, `1 − ${r}<sup>−1</sup>`)}<br>= ${fr(`${r}<sup>${n}</sup> − 1`, `${ARN1}(${r} − 1)`)}.<br><br><b>Step 3.</b> Divide (for ${R} ≠ 0). The bracket ${fr(`${r}<sup>${n}</sup> − 1`, `${r} − 1`)} is common to both and cancels:<br>${S_R} = ${a} · ${ARN1} = ${A2RN1} = ${AL}.<br>(This is the structural heart of the identity: ${S} and ${R} differ only by the factor ${AL}.)<br><br><b>Step 4.</b> By Derivation 3, ${P} = ${AL_N2}, so ${P}<sup>2</sup> = (${AL})<sup>${n}</sup>. Substituting ${AL} = ${S_R},<br>${P}<sup>2</sup> = ${SR_N} ⟹ ${IDENT}. ■<br><br><b>Step 5 (the case ${r} = 1).</b> Then ${S} = <i>na</i>, ${P} = ${a}<sup>${n}</sup> and ${R} = ${fr(n, a)}, so<br>${P}<sup>2</sup>${R}<sup>${n}</sup> = ${a}<sup>2${n}</sup> · ${fr(`${n}<sup>${n}</sup>`, `${a}<sup>${n}</sup>`)} = (<i>na</i>)<sup>${n}</sup> = ${S}<sup>${n}</sup>.<br>The identity survives. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure A: solving a compound-growth or depreciation word problem',
        steps: [
          '<b>Identify the base of the percentage.</b> “On the reducing balance”, “of its value at the beginning of the year”, “compounded” ⇒ GP. “Of the original cost”, “simple interest” ⇒ AP. <b>Why:</b> this single reading decides which formula is legal; nothing later can repair a wrong choice.',
          `<b>Write down ${P}, ${r} and ${n} explicitly, with units.</b> For growth ${r} = 1 + ${R100}; for decay ${r} = 1 − ${R100}; for ${k} compoundings a year over ${y} years, ${r} = 1 + ${fr(R, `100${k}`)} and ${n} = <i>ky</i>. <b>Why:</b> a wrong ${n}, or a rate not divided by the compounding frequency, is where most marks are lost here.`,
          `<b>Count periods from the start, not from the first term.</b> The value after ${n} periods is <i>Pr</i><sup>${n}</sup>, with exponent ${n}, not ${n} − 1. <b>Why:</b> the ${n}th-term formula ${ARN1} tempts you to subtract one; here the first term is the value at time zero.`,
          `<b>Convert the percentage to a clean fraction before powering.</b> 8% ⇒ ${fr('27', '25')}, 20% decay ⇒ ${fr('4', '5')}, 10% ⇒ ${fr('11', '10')}. <b>Why:</b> board problems are engineered so that the fraction cancels the principal exactly, turning a calculator problem into mental arithmetic.`,
          `<b>If the unknown is ${n}, take logarithms and then round upward.</b> From ${r}<sup>${n}</sup> > ${k} with ${r} > 1 (or ${r}<sup>${n}</sup> < ${k} with 0 < ${r} < 1, where dividing by the negative log ${r} flips the sign) you get ${n} > ${fr(`log ${k}`, `log ${r}`)}, and since ${n} counts whole periods, the answer is the next integer above. <b>Why:</b> rounding a value like 6.57 down to 6 is the standard trap; at ${n} = 6 the condition is not yet met.`,
          `<b>Answer the question that was asked.</b> “Find the compound interest” wants ${A} − ${P}, not ${A}. <b>Why:</b> a correct ${A} with the subtraction missing scores zero on the final mark.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B: using S, P and R',
        steps: [
          `<b>Check that the question hands you two of the three quantities ${S}, ${P}, ${R} and asks for the third.</b> That signature is the whole trigger for this identity. <b>Why:</b> if you are given ${a} and ${r} instead, computing directly is faster than invoking the identity.`,
          `<b>Compute ${AL} = ${S_R} first.</b> It is the single most useful intermediate, and it is often all you need. <b>Why:</b> it converts two given sums into one product, killing both unknowns ${a} and ${r} at once.`,
          `<b>Raise to the power ${fr(n, '2')}:</b> ${P} = ±${AL_N2}. <b>Why:</b> this is Derivation 3, and it avoids ever solving for ${a} and ${r} separately.`,
          `<b>Fix the sign.</b> If the terms are stated to be positive, take the + sign. Otherwise decide the sign from ${P} = ${P_EXP}. <b>Why:</b> ${P}<sup>2</sup> = ${SR_N} is a squared statement and cannot see sign.`,
          `<b>Sanity-check on a small explicit GP.</b> If your ${n} is 3 or 4, reconstruct one candidate GP and verify ${S} and ${R} directly. <b>Why:</b> it costs fifteen seconds and catches an exponent slip, the commonest error with this method.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A machine is bought for Rs 15,625.<br>(a) Its value depreciates at 20% per annum on the reducing balance. Find its value at the end of 5 years.<br>(b) The buyer instead invests the same Rs 15,625 at 8% per annum compound interest, compounded annually. Find the amount and the compound interest after 3 years.',
        steps: [
          `<b>(a)</b> The phrase “on the reducing balance” fixes the model as a GP (Procedure A, step 1). Here ${P} = 15625, ${R} = 20 so<br>${r} = 1 − ${fr('20', '100')} = ${fr('4', '5')}, ${n} = 5.<br>Value = 15625(${fr('4', '5')})<sup>5</sup> = 15625 · ${fr('1024', '3125')}.`,
          `Now 15625 = 5<sup>6</sup> and 3125 = 5<sup>5</sup>, so ${fr('15625', '3125')} = 5 and<br>Value = 5 × 1024 = <b>Rs 5,120</b>.`,
          `<b>(b)</b> Now ${r} = 1 + ${fr('8', '100')} = ${fr('27', '25')} and ${n} = 3, so<br>${A} = 15625(${fr('27', '25')})<sup>3</sup><br>= 15625 · ${fr('19683', '15625')} = <b>Rs 19,683</b>,<br>because 15625 = 25<sup>3</sup> exactly. The compound interest is the growth alone (Procedure A, step 6):<br>CI = ${A} − ${P} = 19683 − 15625 = <b>Rs 4,058</b>.`,
          '<b>Check.</b> Year by year at 8%: 15625 → 16875 → 18225 → 19683. Each step multiplies by 1.08, and the third value agrees.',
        ],
        ans: '(a) Rs 5,120; (b) amount Rs 19,683, compound interest Rs 4,058',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The sum of four terms of a GP of positive numbers is 30 and the sum of their reciprocals is ${fr('15', '16')}. Find the product of the four terms.`,
        steps: [
          `The question hands over ${S} and ${R} and asks for ${P}: the signature of Procedure B.<br>${S} = 30, ${R} = ${fr('15', '16')}, ${n} = 4.`,
          `Step 2 of Procedure B: compute the product of the first and last terms,<br>${AL} = ${S_R} = ${fr('30', fr('15', '16'))} = 30 × ${fr('16', '15')} = 32.`,
          `Step 3: since ${P} = ${AL_N2} with ${n} = 4,<br>${P} = 32<sup>4/2</sup> = 32<sup>2</sup> = <b>1024</b>.`,
          'The terms are positive, so the positive root is the right one (step 4).',
          `<b>Check by reconstruction (step 5).</b> With ${AL} = 32 and ${S} = 30, one candidate is ${a} = 2, ${l} = 16, i.e. ${r} = 2: the GP is 2, 4, 8, 16. Then ${S} = 30 and ${R} = ${fr('1', '2')} + ${fr('1', '4')} + ${fr('1', '8')} + ${fr('1', '16')} = ${fr('15', '16')}, both as given, and the product is 2 · 4 · 8 · 16 = 1024.`,
          `Notice that the identity delivered the answer without ever solving for ${a} and ${r}. That is the point of it.`,
        ],
        ans: `${P} = 1024`,
      },
      {
        t: 'ex',
        tag: 'JEE Main: Speed Trap',
        q: 'A man deposits Rs 10,000 at the <b>beginning</b> of each year for 3 years in a bank paying 10% per annum compounded annually. Find the amount standing to his credit at the end of the third year.',
        steps: [
          `<b>The trap: the timing of the last deposit.</b> The seductive answer is<br>${M} = 10000 ${fr('(1.1)<sup>3</sup> − 1', '0.1')} = 10000 × ${fr('0.331', '0.1')}<br>= <b>Rs 33,100</b>: wrong.`,
          'That is the standard annuity formula, and it is the formula for deposits made at the <b>end</b> of each year. Under that convention the third deposit is made at the very last instant and earns nothing at all, which is why the bracket bottoms out at 1. Here the deposits are made at the beginning of each year, so even the last one earns a full year of interest. Every deposit has been in the account one year longer than the formula assumes.',
          `<b>Correct solution.</b> The deposit made at the beginning of year ${k} has been invested for 4 − ${k} years by the end of year 3, so (deposit; years invested; maturity value):<br>• Beginning of year 1; 3; 10000(1.1)<sup>3</sup> = 13310<br>• Beginning of year 2; 2; 10000(1.1)<sup>2</sup> = 12100<br>• Beginning of year 3; 1; 10000(1.1)<sup>1</sup> = 11000`,
          `These maturity values form a GP with ${a} = 11000, ${r} = 1.1, ${n} = 3 (read the column upward). Hence<br>${M} = 11000 ${fr('(1.1)<sup>3</sup> − 1', '1.1 − 1')} = 11000 × ${fr('0.331', '0.1')}<br>= 11000 × 3.31 = <b>Rs 36,410</b>.`,
          `Equivalently, by Derivation 2,<br>${M} = ${Q}(1 + ${i}) ${ANNUITY}<br>= 10000 × 1.1 × 3.31 = 36410.`,
          '<b>How to never fall for it.</b> The two answers differ by exactly the factor 1.1: 33100 × 1.1 = 36410. Before you write anything, ask one question: does the last deposit earn any interest? If yes, deposits are at the beginning and the extra factor (1 + <i>i</i>) is required. If no, deposits are at the end and it is not.',
        ],
        ans: 'Rs 36,410',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A retired teacher deposits Rs 1,00,000 in a scheme paying 8% per annum compounded annually. At the end of each year, immediately after the interest is credited, she withdraws Rs 10,000. Let ${Bn} be the balance immediately after the ${n}th withdrawal.<br>(a) Find a closed form for ${Bn}.<br>(b) Determine the first year in which the fund cannot meet the full withdrawal, and find the size of that final withdrawal.<br>(Use ${LOG10} 2 = 0.3010, ${LOG10} 1.08 = 0.0334, and (1.08)<sup>20</sup> = 4.661.)`,
        steps: [
          '<b>(a)</b> Track the two flows separately and subtract: the standard decomposition for a drawdown problem.',
          `The original principal, left undisturbed, grows to 100000(1.08)<sup>${n}</sup> after ${n} years (Derivation 1).`,
          `The withdrawal made at the end of year ${k} removes Rs 10,000 from the fund; had it stayed, it would have grown for a further ${n} − ${k} years to 10000(1.08)<sup>${n}−${k}</sup>. So the total shortfall caused by the ${n} withdrawals, measured at the end of year ${n}, is<br>10000 ${SK}(1.08)<sup>${n}−${k}</sup><br>= 10000[(1.08)<sup>${n}−1</sup> + ⋯ + 1.08 + 1]<br>= 10000 ${fr(`(1.08)<sup>${n}</sup> − 1`, '0.08')},<br>a GP sum with ${n} terms, first term 1 and ratio 1.08. Since ${fr('10000', '0.08')} = 125000, this equals 125000[(1.08)<sup>${n}</sup> − 1]. Therefore<br>${Bn} = 100000(1.08)<sup>${n}</sup> − 125000[(1.08)<sup>${n}</sup> − 1]<br>= 125000 − 25000 (1.08)<sup>${n}</sup>.`,
          `<b>Reading the answer.</b> The constant 125000 = ${fr('10000', '0.08')} is the break-even corpus: at exactly Rs 1,25,000 the annual interest is exactly Rs 10,000 and the fund would last forever. She started Rs 25,000 short of it, and that shortfall itself compounds at 8%, which is why ${Bn} falls, slowly at first, then fast.`,
          `<b>(b)</b> The fund fails when ${Bn} ≤ 0, i.e.<br>25000 (1.08)<sup>${n}</sup> ≥ 125000 ⟺ (1.08)<sup>${n}</sup> ≥ 5.<br>Taking logarithms to base 10, and using ${LOG10} 5 = 1 − ${LOG10} 2 = 0.6990,<br>${n} ≥ ${fr(`${LOG10} 5`, `${LOG10} 1.08`)} = ${fr('0.6990', '0.0334')} ≈ 20.93.`,
          `Since ${n} counts whole years, ${B20} > 0 and ${B21} < 0. <b>The withdrawal at the end of year 21 is the one that cannot be met in full.</b>`,
          `Its size: with (1.08)<sup>20</sup> = 4.661,<br>${B20} = 125000 − 25000(4.661)<br>= 125000 − 116525 = Rs 8,475 (approximately).`,
          'During year 21 this grows to 8475 × 1.08 ≈ Rs 9,153, and that is all there is. So the final withdrawal is about <b>Rs 9,150</b> instead of Rs 10,000, and the fund closes at the end of the 21st year.',
          `<b>Why rounding up was mandatory.</b> The inequality gave ${n} ≥ 20.93. Truncating to ${n} = 20 would report failure in year 20, but ${B20} is comfortably positive. Whenever a growth or decay inequality is solved for a period count, the answer is the next integer up (Procedure A, step 5).`,
        ],
        ans: `(a) ${Bn} = 125000 − 25000 (1.08)<sup>${n}</sup>; (b) year 21, final withdrawal about Rs 9,150`,
      },

      { t: 'part', title: 'Practice exercises' },
      { t: 'p', html: 'Answers are given below; work the solutions yourself.' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>(Board)</b> A car bought for Rs 6,25,000 depreciates at 20% per annum on the reducing balance. Find its value at the end of 4 years.',
            a: 'Rs 2,56,000.',
          },
          {
            q: '<b>(Board)</b> Find the amount and the compound interest on Rs 6,250 invested for 3 years at 8% per annum compounded annually.',
            a: 'Amount Rs 7,873.20; compound interest Rs 1,623.20.',
          },
          {
            q: '<b>(Board)</b> A bacterial culture doubles every 3 hours. If it starts with 500 bacteria, how many are present after 24 hours?',
            a: '500 × 2<sup>8</sup> = 1,28,000 bacteria.',
          },
          {
            q: `<b>(Main)</b> The population of a town was 20,000 in the year 2020 and grows at 5% per annum. In which calendar year will the population first exceed 30,000? (Take ${LOG10} 1.5 = 0.1761, ${LOG10} 1.05 = 0.0212.)`,
            a: `2029. (Requires ${n} > ${fr('0.1761', '0.0212')} ≈ 8.31, so ${n} = 9; the value at ${n} = 8 is about 29,549, still below 30,000.)`,
          },
          {
            q: '<b>(Main)</b> A man deposits Rs 5,000 at the end of each year for 10 years at 10% per annum compounded annually. Find the amount at the end of the tenth year. (Take (1.1)<sup>10</sup> = 2.59374.)',
            a: `Rs 79,687. (From ${M} = 5000 ${fr('(1.1)<sup>10</sup> − 1', '0.1')} = 5000 × 15.9374; the exact value is Rs 79,687.12.)`,
          },
          {
            q: `<b>(Main)</b> The sum of three positive numbers in GP is 21 and the sum of their reciprocals is ${fr('7', '12')}. Find their product, and then the numbers themselves.`,
            a: 'Product = 216; the numbers are 3, 6, 12 (in either order).',
          },
          {
            q: '<b>(Adv)</b> A machine depreciates at 10% per annum on the reducing balance. If its value at the end of 5 years is Rs 1,18,098, find its original cost.',
            a: 'Rs 2,00,000.',
          },
          {
            q: `<b>(Adv)</b> If ${x}, ${y}, ${z} are respectively the ${p}th, ${q}th and ${r}th terms of a GP, prove that ${XYZ}.`,
            a: `Identity. (Write ${x} = ${a}${RHO}<sup>${p}−1</sup> etc.; the exponent of ${a} is (${q} − ${r}) + (${r} − ${p}) + (${p} − ${q}) = 0 and the exponent of ${RHO} is (${p} − 1)(${q} − ${r}) + (${q} − 1)(${r} − ${p}) + (${r} − 1)(${p} − ${q}) = 0.)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The amount obtained by investing Rs 8,000 for 2 years at 5% per annum compounded annually is:',
        opts: [
          {
            label: 'Rs 8,800',
            nudge: '<b>(A)</b> Rs 8,800 is the simple interest answer, 8000 + 2 × 400: the student applied the 5% to the original principal both years, which is the AP model, not the GP model. This is the single most common error in the topic and Procedure A step 1 exists to prevent it.',
          },
          { label: 'Rs 8,820', nudge: null },
          {
            label: 'Rs 8,810',
            nudge: '<b>(C)</b> Rs 8,810 matches neither model: simple interest gives 8000 + 400 + 400 = 8,800 and compound interest 8000 + 400 + 420 = 8,820. The second year’s interest is 5% of 8,400, which is 420.',
          },
          {
            label: 'Rs 9,000',
            nudge: '<b>(D)</b> Rs 9,000 is a rounding-to-a-nice-number guess with no derivation behind it.',
          },
        ],
        correct: 1,
        solution: `${A} = 8000(1.05)<sup>2</sup> = 8000 × 1.1025 = 8820.`,
      },
      {
        t: 'mcq',
        q: 'A GP of positive terms has first term 2, last term 162 and exactly 5 terms. The product of the terms is:',
        opts: [
          { label: '18<sup>5</sup>', nudge: null },
          {
            label: '18<sup>4</sup>',
            nudge: `<b>(B)</b> 18<sup>4</sup> comes from pairing the terms outside-in and forgetting that with ${n} odd there is an unpaired middle term left over: two pairs give 324<sup>2</sup> = 18<sup>4</sup>, and the middle term 18 is dropped. This is precisely why the exponent is ${fr(n, '2')} and not ⌊${fr(n, '2')}⌋.`,
          },
          {
            label: '324<sup>5</sup>',
            nudge: `<b>(C)</b> 324<sup>5</sup> comes from writing ${P} = (${AL})<sup>${n}</sup> instead of ${AL_N2}: each pair counted twice.`,
          },
          {
            label: '242',
            nudge: `<b>(D)</b> 242 is the sum <i>S</i><sub>5</sub> = 2 · ${fr('3<sup>5</sup> − 1', '3 − 1')}, chosen by a student who read “product” but reached for the sum formula out of habit.`,
          },
        ],
        correct: 0,
        solution: `${AL} = 2 × 162 = 324 and ${n} = 5, so ${P} = ${AL_N2} = 324<sup>5/2</sup> = (18<sup>2</sup>)<sup>5/2</sup> = 18<sup>5</sup> = 1,889,568. Direct check: ${r}<sup>4</sup> = ${fr(l, a)} = 81 gives ${r} = 3, and 2 · 6 · 18 · 54 · 162 = 1,889,568.`,
      },
      {
        t: 'mcq',
        q: `If ${S}, ${P} and ${R} denote respectively the sum, the product and the sum of the reciprocals of ${n} terms of a GP, then ${P}<sup>2</sup> equals:`,
        opts: [
          { label: SR_N, nudge: null },
          {
            label: `(${fr(R, S)})<sup>${n}</sup>`,
            nudge: `<b>(B)</b> inverts the ratio: the student remembers that ${S} and ${R} appear as a quotient but not which way up. The fix is structural, not mnemonic: ${S_R} = ${AL}, a product of terms, and ${P} is built out of products, so ${S} must sit on top.`,
          },
          {
            label: `(<i>SR</i>)<sup>${n}</sup>`,
            nudge: `<b>(C)</b> mis-remembers ${IDENT} as a symmetric product ${P}<sup>2</sup> = (<i>SR</i>)<sup>${n}</sup>.`,
          },
          {
            label: `${S}<sup>${n}</sup>${R}`,
            nudge: `<b>(D)</b> leaves ${R} unpowered, giving ${S}<sup>${n}</sup>${R}.`,
          },
        ],
        correct: 0,
        solution: `From ${IDENT}, dividing by ${R}<sup>${n}</sup> gives ${P}<sup>2</sup> = ${SR_N}. A student who tests the identity on the three-term GP 1, 2, 4 (${S} = 7, ${P} = 8, ${R} = ${fr('7', '4')}) sees at once that (${S_R})<sup>3</sup> = 4<sup>3</sup> = 64 = ${P}<sup>2</sup>, while (<i>SR</i>)<sup>3</sup> ≈ 1838 and ${S}<sup>3</sup>${R} = 600.25 both fail.`,
      },
      {
        t: 'mcq',
        q: `The value of a machine depreciates at 10% per annum on the reducing balance. After how many complete years does its value first fall below half its original value? (Take ${LOG10} 2 = 0.3010, ${LOG10} 3 = 0.4771.)`,
        opts: [
          {
            label: '6',
            nudge: `<b>(A)</b> 6 is the answer of a student who computed 6.57 correctly and then truncated instead of rounding up: at ${n} = 6 the machine still holds 53.1% of its value, so the condition is not met. “First falls below” counts always round up.`,
          },
          { label: '7', nudge: null },
          { label: '5', nudge: '<b>(C)</b> 5 stops too early: (0.9)<sup>5</sup> = 0.59049, so after 5 years the machine still holds about 59% of its value.' },
          {
            label: '10',
            nudge: '<b>(D)</b> 10 is pure linear thinking: “10% a year, so it is all gone in 10 years”, which would be true for straight-line depreciation on the original cost but is never true on a reducing balance; a shrinking GP never reaches zero.',
          },
        ],
        correct: 1,
        solution: `Require (0.9)<sup>${n}</sup> < 0.5. Taking logarithms, ${n} ${LOG10} 0.9 < ${LOG10} 0.5; both logarithms are negative, so the inequality flips on division:<br>${n} > ${fr(`${LOG10} 2`, `−${LOG10} 0.9`)} = ${fr('0.3010', '0.0458')} ≈ 6.57.<br>Hence ${n} = 7. Confirming: (0.9)<sup>6</sup> = 0.5314 > 0.5 but (0.9)<sup>7</sup> = 0.4783 < 0.5.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Applying the percentage to the original value.</b> “Depreciates by 20% of its value each year” is a GP with ${r} = 0.8; “depreciates by 20% of its original cost each year” is an AP with <i>d</i> = −0.2${P}. <b>Correction:</b> locate the base of the percentage in the sentence before you touch a formula.`,
          `<b>Simple interest treated as compound, or the reverse.</b> Simple interest is an AP, ${A} = ${P}(1 + ${fr('<i>nR</i>', '100')}); compound interest is a GP, ${A} = ${AMT}. <b>Correction:</b> the word “compounded” (or “on the amount”) is the switch.`,
          `<b>Forgetting to divide the rate by the compounding frequency.</b> At 12% per annum compounded quarterly over 2 years, ${r} = 1.03 and ${n} = 8, not ${r} = 1.12 and ${n} = 2. <b>Correction:</b> rate per period and number of periods must be quoted in the same unit.`,
          `<b>The off-by-one in the exponent.</b> The value after ${n} periods is <i>Pr</i><sup>${n}</sup>. Writing <i>Pr</i><sup>${n}−1</sup> imports the ${n}th-term formula into a place where the first term sits at time zero. <b>Correction:</b> count the number of multiplications, not the number of terms.`,
          `<b>Using the end-of-period annuity formula for beginning-of-period deposits.</b> The two differ by the factor (1 + ${i}). <b>Correction:</b> ask whether the final deposit earns any interest.`,
          `<b>Truncating instead of rounding up when solving for ${n}.</b> From ${r}<sup>${n}</sup> > ${k} (growth, ${r} > 1) or ${r}<sup>${n}</sup> < ${k} (decay, 0 < ${r} < 1) the answer is the smallest integer strictly above ${fr(`log ${k}`, `log ${r}`)}. <b>Correction:</b> after rounding, substitute the integer back and confirm that the inequality holds.`,
          `<b>Writing ${P} = ${AL_N2} for a GP whose terms are not all positive and losing the sign.</b> The formula ${P} = ${P_EXP} is always exact; the pairing form is safe only for positive terms. <b>Correction:</b> for a signed GP, use the exponent form.`,
          `<b>Reading ${P}<sup>2</sup> = ${SR_N} as determining ${P}.</b> It determines |${P}|. <b>Correction:</b> fix the sign from the positivity of the terms or from ${P_EXP}.`,
          '<b>Reporting the amount when the compound interest was asked for.</b> <b>Correction:</b> reread the last line of the question before writing the final answer.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tips.</b><br>• Convert the rate to an exact fraction before powering: 8% → ${fr('27', '25')}, 10% → ${fr('11', '10')}, 20% decay → ${fr('4', '5')}, 25% → ${fr('5', '4')}. Board principals such as 15,625 or 6,25,000 are chosen so the denominator cancels exactly and no decimals appear (6,250 at 8% for 3 years still gives Rs 7,873.20).<br>• Memorise (1.1)<sup>10</sup> = 2.5937, (1.08)<sup>10</sup> = 2.1589 and the doubling rule of thumb “72 divided by the rate gives the doubling time in years”: the last is only a check, never a proof, but it catches order-of-magnitude errors instantly.<br>• The moment a question gives you two of {${S}, ${P}, ${R}} for a GP, stop looking for ${a} and ${r}. Compute ${AL} = ${S_R} and finish in one line.<br>• ${AL} = ${S_R} is worth more than the full identity. It converts “sum and sum of reciprocals” into “product of the extremes”, which is the quantity that both the product formula and the GM condition are built on.<br>• For any drawdown or loan problem, compute the break-even corpus ${fr('annual withdrawal', i)} first. It tells you immediately whether the fund is sustainable, and, for withdrawals at the end of each period (after the interest), the closed form is ${Bn} = <i>C</i> − (<i>C</i> − ${P})(1 + ${i})<sup>${n}</sup> where <i>C</i> is that corpus.<br>• Logs turn every “after how many periods” question into a one-line division, exactly as the GP-to-AP log bridge of Topic 03 predicts.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Formula', 'Condition'],
        rows: [
          ['Compound amount', `${A} = ${AMT}`, `rate on current value, ${n} whole periods`],
          ['Compound interest', `CI = ${A} − ${P}`, ''],
          [
            `Compounded ${k} times a year, ${y} years`,
            `${A} = ${P}(1 + ${fr(R, `100${k}`)})<sup><i>ky</i></sup>`,
            'rate and periods in the same unit',
          ],
          ['Depreciation (reducing balance)', `<i>V</i> = ${P}(1 − ${R100})<sup>${n}</sup>`, `0 < ${r} < 1, never reaches 0`],
          [
            'Simple interest (contrast: this is an AP)',
            `${A} = ${P}(1 + ${fr('<i>nR</i>', '100')})`,
            'rate on original value',
          ],
          [
            `Doubling every ${T} / half-life ${T}`,
            `${N} = ${N0}2<sup>${t}/${T}</sup><br>${N} = ${N0}2<sup>−${t}/${T}</sup>`,
            `${t}, ${T} in the same unit`,
          ],
          ['Instalments at end of each period', `${M} = ${Q} ${ANNUITY}`, `${i} ≠ 0`],
          ['Instalments at start of each period', `${M} = ${Q}(1 + ${i}) ${ANNUITY}`, 'one extra period of interest'],
          [
            'Drawdown balance',
            `${Bn} = <i>C</i> − (<i>C</i> − ${P})(1 + ${i})<sup>${n}</sup>,<br><i>C</i> = ${fr('withdrawal', i)}`,
            'withdrawal at period end',
          ],
          [`Product of ${n} GP terms`, `${P} = ${P_EXP}<br>= ${AL_N2}`, `${AL_N2} form for positive terms`],
          ['Outside-in pairing', `${ak} ${ank} = ${AL} for every ${k}`, 'GP'],
          ['Sum over sum-of-reciprocals', `${S_R} = ${AL} = ${A2RN1}`, `no term zero, ${R} ≠ 0`],
          ['The identity', `${IDENT}, i.e.<br>${P}<sup>2</sup> = ${SR_N}`, `every GP, including ${r} = 1`],
          [`Terms of a GP at positions ${p}, ${q}, ${r}`, XYZ, ''],
        ],
      },
      {
        t: 'p',
        html: `<b>Triggers.</b> “Compounded / reducing balance / of its current value” ⇒ GP. “Of the original cost / simple interest” ⇒ AP. “After how many years” ⇒ take logs, round <b>up</b>. Two of {${S}, ${P}, ${R}} given ⇒ compute ${AL} = ${S_R} first.`,
      },
    ],
  },
];
