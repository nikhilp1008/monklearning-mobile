import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Additional topics A–C, pp. 1168–1187 of the Class 11 Mathematics
 * Master Reference (October 2026 edition), word for word (decision 40): the
 * supplement's Addenda 13.1 "Mean Deviation about the Median of a Discrete
 * Frequency Distribution" (pp. 1168–1173) and 13.2 "Variance of Ungrouped Data
 * about an Assumed Mean" (pp. 1174–1179), and the Additional Topics part's
 * Addendum 13.3 "Inclusive (Discontinuous) Class Intervals and True Class
 * Boundaries" (pp. 1180–1187), lettered A–C. The supplement's p. 1168 opening
 * is A's "Introduction"; the Additional Topics part's p. 1180 opening is C's.
 * 13.2's "Bonus: Variance of an Arithmetic Progression" (pp. 1178–1179) is a
 * part of B, and the supplement's closing "Cheat Sheet Box" (p. 1179) is B's
 * last part. Figures: 13.4 (caption p. 1169, drawn p. 1170) after Procedure
 * (C2); 13.5 (caption p. 1175, drawn p. 1176) after the companion rule; the
 * book's "Figure 1" of 13.3 (p. 1183) is m11-13-C-d1, after Procedure (F).
 * The frequency tables inside worked examples and practice questions are
 * written as labelled lines, one line per row or column, as printed. Every
 * fraction is stacked (<frac>); no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
const sb = (b: string, s: string) => `<i>${b}</i><sub>${s}</sub>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const C = I('C');
const M = I('M');
const N = I('N');
const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const g = I('g');
const h = I('h');
const k = I('k');
const l = I('l');
const n = I('n');
const t = I('t');
const u = I('u');
const F = I('f');
const ELL = I('ℓ');
const xi = sb('x', I('i'));
const fi = sb('f', I('i'));
const di = sb('d', I('i'));
const yi = sb('y', I('i'));
const XB = I('x̄');
const DB = I('d̄');
const YB = I('ȳ');
const S = I('σ');
const S2 = `${S}<sup>2</sup>`;
const sig = (s: string) => `${S}<sub>${s}</sub>`;
const sig2 = (s: string) => `${S}<sub>${s}</sub><sup>2</sup>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const SUMN = `∑<sub>${I('i')}=1</sub><sup>${n}</sup>`;
const XI2 = `${xi}<sup>2</sup>`;
const DI2 = `${di}<sup>2</sup>`;
const MD = (s: string) => `M.D.(${s})`;
const MDM = MD(M);
const MDX = MD(XB);
const ABS = (s: string) => `|\u2060${xi}${NB}−${NB}${s}|`;
const FABS = (s: string) => `${fi}\u2060|\u2060${xi}${NB}−${NB}${s}|`;
const NAIVE = `${M}<sub>naive</sub>`;
const HALF = fr('1', '2');
const INV = (s: string) => fr('1', s);
const N2 = fr(N, '2');
const N12 = fr(`${N} + 1`, '2');
/** The book's position fraction (N/2 − C)/f (p. 1182), written as the single fraction it equals. */
const TFR = fr(`${N} − 2${C}`, `2${F}`);
/** The grouped median, written as Topic 01's MEDIAN: ℓ + (N/2 − C) × h/f, with no fraction inside a numerator. */
const MED = `${M} = ${ELL} + (${N2} − ${C}) × ${fr(h, F)}`;
const SHIFT = `${M} − ${NAIVE} = 2${c}${NB}(${t} − ${HALF})`;
const DEV = (s: string) => `∑(${xi} − ${s})`;
const DEV2 = (s: string) => `∑(${xi} − ${s})<sup>2</sup>`;
const SX = `∑${xi}`;
const SX2 = `∑${XI2}`;
const SF = `∑${fi}`;
const NSUMF = `${N} = ${SF}`;

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 1168–1173 ────────────────
  {
    n: 'A',
    title: 'Mean Deviation about the Median of a Discrete Frequency Distribution',
    extra: true,
    kalam: 'The median is a positional statistic on all N observations, not on the k distinct values.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Additional topics A and B plug two holes that Chapter 13 leaves open. The first is a CBSE-examinable case that falls between Procedure (C) and Procedure (D) of Topic 01: the <b>median of a discrete frequency distribution</b>, which is read off a cumulative frequency column and never interpolated. The second is a JEE Main phrasing that the chapter only ever shows you in grouped-data costume: the <b>assumed-mean variance identity for raw ungrouped data</b>. Both are short, both are mechanical once seen, and both cost marks when met cold.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the exact case NCERT devotes a worked example and several Exercise 13.1 items to, and CBSE Class 11 papers ask it directly as a 3–4 mark numerical ${ESTIMATE}. It sits in the blind spot between the two cases Topic 01 already covers: you know how to find the median of an ungrouped list (sort and take the middle), and you know how to interpolate the median of a continuous distribution. A discrete frequency table needs neither: no sorting beyond what the table already gives, and absolutely no interpolation. JEE Main occasionally uses it as a one-step MCQ ${ESTIMATE}; the real risk is a Boards student importing the grouped-data formula<br>${MED}<br>into a table that has no classes and therefore no ${h}.`,
      },

      { t: 'part', title: 'The method' },
      {
        t: 'p',
        html: `You are given distinct values ${sb('x', '1')} < ${sb('x', '2')} < ⋯ < ${sb('x', k)} with frequencies ${sb('f', '1')}, ${sb('f', '2')}, …, ${sb('f', k)}, and ${NSUMF}.`,
      },
      {
        t: 'proc',
        title: 'Procedure (C2): Mean deviation about the median of a discrete frequency distribution',
        steps: [
          `<b>Check that the ${xi} are in ascending order.</b> If the table is printed out of order, reorder it first, carrying each frequency with its value. <b>Why:</b> a cumulative frequency column is meaningless unless the values it accumulates over are sorted.`,
          `<b>Build the cumulative frequency (c.f.) column.</b> The c.f. against ${xi} is ${sb('f', '1')} + ${sb('f', '2')} + ⋯ + ${fi}. <b>Why:</b> the c.f. tells you the <b>serial positions</b> the value ${xi} occupies in the sorted list of all ${N} observations. If the c.f. jumps from 12 to 17 at ${xi}, then ${xi} is the 13th, 14th, 15th, 16th and 17th observation.`,
          `<b>Locate the median by position, not by formula.</b><br><b>${N} odd.</b> Median: the (${N12})-th observation. How to read it off: the first ${xi} whose c.f. is ≥${NB}${N12}.<br><br><b>${N} even.</b> Median: the mean of the (${N2})-th and (${N2} + 1)-th observations. How to read it off: read both positions off the c.f. column and average the two values.<br><br><b>Why:</b> the median is defined as the middle observation of the sorted data, and the c.f. column is a positional index into that sorted data. <b>There is no interpolation here</b>: the median of a discrete distribution is always either a data value or the midpoint of two adjacent data values.`,
          `<b>Watch the one subtle sub-case.</b> When ${N} is even, if some c.f. is exactly equal to ${N2}, then the ${N2}-th and (${N2} + 1)-th observations are <b>different</b> values and you must genuinely average them. If instead the c.f. leaps straight past ${N2} (previous c.f. below ${N2}, this one above), both middle observations are the same ${xi} and the median is simply ${xi}. Most textbook tables are of the second kind, which is why students never notice the rule has two branches.`,
          `<b>Form the columns ${ABS(M)} and then ${FABS(M)}.</b> <b>Why the weighting:</b> a value occurring ${fi} times must contribute its distance ${fi} times.`,
          `<b>Divide by ${N}:</b><br>${MDM} = ${INV(N)}${NB}∑<sub>${I('i')}=1</sub><sup>${k}</sup>${NB}${FABS(M)}<br>Divide by ${NSUMF}, <b>never</b> by ${k}, the number of distinct values.`,
          `<b>If asked, report the coefficient:</b><br>Coefficient of ${MDM} = ${fr(MDM, M)}<br>a pure number, useful for comparing spread across data sets measured in different units.`,
        ],
      },
      {
        t: 'formula',
        kicker: 'Median of a discrete frequency distribution',
        main: `${N} odd: ${M} = the (${N12})-th observation<br>${N} even: ${M} = the mean of the (${N2})-th and (${N2} + 1)-th observations`,
        legend: [`${N} = the total frequency (∑ ${fi})`, `${M} = the median (read off the c.f. column)`],
        note: null,
      },
      { t: 'fig', id: 'm11-13-fig-13.4' },
      {
        t: 'p',
        html: `<b>Sanity checks before you write the final answer.</b><br>• ${MDM} ≤ ${MDX} always, because the median minimises ${SF}|${xi}${NB}−${NB}${a}| (proved in Topic 01). If your M.D. about the median comes out larger than the M.D. about the mean, you have made a slip.<br>• ${MDM} ≤ Range, since every ${ABS(M)} is at most the range.<br>• The answer carries the same units as the data.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'S1: CBSE Board Level',
        q: `A school records the number of days each of 25 students was absent in a term:<br>Days absent ${xi}: 4, 6, 8, 10, 12<br>Number of students ${fi}: 3, 5, 8, 4, 5<br>Find the mean deviation about the median, and its coefficient.`,
        steps: [
          `The values are already in ascending order. Build the cumulative frequency column.<br>${xi}: 4, 6, 8, 10, 12<br>${fi}: 3, 5, 8, 4, 5; total ${N} = 25<br>c.f.: 3, 8, 16, 20, 25<br>Positions occupied: 1–3, 4–8, 9–16, 17–20, 21–25<br>${ABS(M)}: 4, 2, 0, 2, 4<br>${FABS(M)}: 12, 10, 0, 8, 20; total 50`,
          `Here ${N} = 25 is <b>odd</b>, so the median is the<br>${N12} = ${fr('26', '2')} = 13th<br>observation. Running down the c.f. column, the first entry reaching 13 is 16, against ${I('x')} = 8, and indeed ${I('x')} = 8 occupies positions 9 through 16, which contains position 13. Hence<br>${M} = 8 days.`,
          `Now complete the last two columns (already filled above) and divide:<br>${MDM} = ${fr(`∑${FABS(M)}`, N)} = ${fr('50', '25')} = 2 days.<br><br>Coefficient of ${MDM} = ${fr('2', '8')} = 0.25.`,
          `<b>Verification by the minimisation property.</b> Let us confirm the answer is smaller than the mean deviation about the mean.<br>∑${fi}${xi} = 4(3) + 6(5) + 8(8) + 10(4) + 12(5)<br>= 12 + 30 + 64 + 40 + 60 = 206,<br><br>${XB} = ${fr('206', '25')} = 8.24.`,
          `∑${fi}|${xi}${NB}−${NB}8.24|<br>= 3(4.24) + 5(2.24) + 8(0.24) + 4(1.76) + 5(3.76)<br>= 12.72 + 11.2 + 1.92 + 7.04 + 18.8 = 51.68,<br>so<br>${MDX} = ${fr('51.68', '25')} = 2.0672 days.<br>As promised, 2 ≤ 2.0672: the median gives the tighter measure. Also 2 ≤ Range = 12 − 4 = 8.`,
        ],
        ans: `${MDM} = 2 days; Coefficient of ${MDM} = 0.25`,
      },
      {
        t: 'ex',
        tag: 'S2: JEE Main Level: the even-N branch',
        q: `Find the mean deviation about the median for the distribution<br>${xi}: 5, 10, 15, 20, 25<br>${fi}: 4, 6, 5, 9, 6`,
        steps: [
          `${N} = 4 + 6 + 5 + 9 + 6 = 30 (even), ${N2} = 15.<br>${xi}: 5, 10, 15, 20, 25<br>${fi}: 4, 6, 5, 9, 6<br>c.f.: 4, 10, 15, 24, 30<br>Positions occupied: 1–4, 5–10, 11–15, 16–24, 25–30`,
          `This is the sub-case Step 4 warned about: a cumulative frequency is <b>exactly</b> ${N2} = 15. So the two middle observations are genuinely different values: the 15th observation is 15 (the last position in that block) and the 16th observation is 20 (the first position in the next block). Therefore<br>${M} = ${fr('15 + 20', '2')} = 17.5.`,
          `Now the deviation columns:<br>${xi}: 5, 10, 15, 20, 25<br>${fi}: 4, 6, 5, 9, 6; total 30<br>${ABS('17.5')}: 12.5, 7.5, 2.5, 2.5, 7.5<br>${FABS('17.5')}: 50, 45, 12.5, 22.5, 45; total 175`,
          `${MDM} = ${fr('175', '30')} = ${fr('35', '6')} ≈ 5.83,<br><br>Coefficient of M.D. = ${fr('35', '6 × 17.5')}<br><br>= ${fr('35', '105')} = ${fr('1', '3')}.`,
          `<b>Verification.</b> In this configuration exactly 15 observations lie at or below 15 and exactly 15 lie at or above 20, so the sum ${SF}|${xi}${NB}−${NB}${a}| is constant for every ${a} between 15 and 20: moving ${a} up by a little increases 15 distances and decreases 15 distances, and the two effects cancel exactly. Test it at ${a} = 15:<br>4(10) + 6(5) + 5(0) + 9(5) + 6(10)<br>= 40 + 30 + 0 + 45 + 60 = 175,<br>the same total. So the answer ${fr('175', '30')} is stable, and choosing the conventional midpoint 17.5 costs nothing.`,
        ],
        ans: `${MDM} = ${fr('35', '6')} ≈ 5.83; Coefficient of M.D. = ${fr('1', '3')}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `Find the mean deviation about the median, and the coefficient of mean deviation about the median, for:<br>${xi}: 3, 5, 7, 9, 11<br>${fi}: 2, 4, 6, 5, 3`,
            a: `${N} = 20; the 10th and 11th observations both equal 7, so ${M} = 7; ∑${FABS(M)} = 38;<br>${MDM} = ${fr('38', '20')} = 1.9;<br>coefficient = ${fr('1.9', '7')} ≈ 0.271.`,
          },
          {
            q: `The daily wages (in hundreds of rupees) of 30 workers at a site are distributed as below. Find the mean deviation about the median, and its coefficient.<br>${xi}: 10, 15, 20, 25, 30, 35<br>${fi}: 3, 5, 8, 6, 4, 4`,
            a: `${N} = 30; the 15th and 16th observations both equal 20 (that value occupies positions 9–16), so ${M} = 20; ∑${FABS(M)} = 185;<br>${MDM} = ${fr('185', '30')} = ${fr('37', '6')} ≈ 6.17 hundred rupees;<br>coefficient = ${fr('37', '6 × 20')} ≈ 0.308.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          `<b>Do not interpolate.</b> The formula<br>${MED}<br>belongs to continuous data. A discrete table has no class boundaries ${ELL} and no width ${h}, so the formula is not merely inaccurate here: it is undefined. Read the median off the c.f. column instead.`,
          `<b>Do not average the ${xi} column to get the median.</b> The median is a positional statistic on all ${N} observations, not on the ${k} distinct values. In Example S1 the “middle” of the value list 4, 6, 8, 10, 12 happens also to be 8, which is a coincidence (the values are evenly spaced about 8, but the frequencies 3, 5, 8, 4, 5 are not symmetric); in Example S2 the middle of the value list is 15 while the true median is 17.5.`,
          `<b>Divide by ${N}, not ${k}.</b> In Example S2, dividing 175 by 5 instead of 30 gives 35: an answer larger than the entire range of 20, which the range sanity check catches instantly.`,
          '<b>Do not compute the mean first out of habit.</b> Once the question says “about the median,” the mean is irrelevant and computing it wastes ninety seconds you do not have.',
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 1174–1179 ────────────────
  {
    n: 'B',
    title: 'Variance of Ungrouped Data about an Assumed Mean',
    extra: true,
    kalam: 'The identity is exact, not approximate.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `JEE Main asks this in a very specific costume: it hands you ${DEV(A)} and ${DEV2(A)} for some convenient number ${A}, and asks for the mean, the variance or the standard deviation. It is a one-line question if you know the identity and a five-minute reconstruction if you do not. Topic 02 already gives you the machinery in its grouped, step-deviation form; what follows is the same identity stripped of classes and class widths, which is the form the raw-data question actually needs. CBSE Boards uses the shortcut version (${A} = 0) routinely ${ESTIMATE}; JEE Advanced folds it into transformation and combined-variance problems.`,
      },

      { t: 'part', title: 'The method' },
      {
        t: 'p',
        html: `<b>The identity.</b> For observations ${sb('x', '1')}, ${sb('x', '2')}, …, ${sb('x', n)} and <b>any</b> real constant ${A} whatsoever:`,
      },
      {
        t: 'formula',
        kicker: 'Assumed-mean identity (ungrouped data)',
        main: `${XB} = ${A} + ${INV(n)}${NB}${SUMN}(${xi} − ${A})<br>${S2} = ${INV(n)}${NB}${SUMN}(${xi} − ${A})<sup>2</sup> − (${XB} − ${A})<sup>2</sup><br>= ${INV(n)}${NB}${SUMN}(${xi} − ${A})<sup>2</sup> − [${INV(n)}${NB}${SUMN}(${xi} − ${A})]<sup>2</sup>`,
        legend: [
          `${A} = the assumed mean (any real constant)`,
          `${n} = the number of observations`,
          `${xi} = the observations`,
          `${XB} = the mean of the observations`,
          `${S2} = the variance of the original data`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `• ${A} is the <b>assumed mean</b> (also called the reference point or working origin). It is a number you choose, or a number the question chooses for you. It need not be near the data, need not be a data value, and need not be the actual mean.<br>• ${n} is the number of observations; ${S2} is the variance of the original data ${xi}; ${S} = +√${S2}.<br>• <b>Validity:</b> unrestricted. This holds for every ${A} ∈ ℝ and every finite data set.<br>• Putting ${A} = 0 recovers the familiar shortcut<br>${S2} = ${INV(n)}${NB}${SX2} − ${sq(XB)}.<br>Putting ${A} = ${XB} recovers the definition<br>${S2} = ${INV(n)}${NB}∑(${xi} − ${XB})<sup>2</sup>.<br>Those two are not different formulas: they are the two ends of one identity.<br>• The frequency-distribution version is identical with ${fi} weights and ${NSUMF}:<br>${S2} = ${INV(N)}${NB}∑${fi}(${xi} − ${A})<sup>2</sup><br>− [${INV(N)}${NB}∑${fi}(${xi} − ${A})]<sup>2</sup><br>and the step-deviation form in Topic 02 is just this with<br>${di} = ${fr(`${xi} − ${A}`, h)}<br>and the ${sq(h)} pulled back out.`,
      },

      { t: 'part', title: 'Derivation' },
      {
        t: 'p',
        html: `Write ${di} = ${xi} − ${A}, so ${xi} = ${di} + ${A}. This is a <b>change of origin</b>: a shift by the constant ${A}, with no scaling.<br><br>Averaging both sides of ${xi} = ${di} + ${A} over ${I('i')} gives ${XB} = ${DB} + ${A}, i.e. ${DB} = ${XB} − ${A}. That is the mean statement.<br><br>For the variance, note that ${xi} − ${XB} = (${di}${NB}+${NB}${A}) − (${DB}${NB}+${NB}${A}) = ${di} − ${DB}: <b>the deviations from the mean are untouched by the shift.</b> Hence<br>${sig2(I('x'))} = ${INV(n)}${NB}∑(${xi} − ${XB})<sup>2</sup><br><br>= ${INV(n)}${NB}∑(${di} − ${DB})<sup>2</sup> = ${sig2(I('d'))},<br>which is exactly the ${a} = 1, ${b} = −${A} case of the transformation rule ${sig2(I('y'))} = ${sq(a)}${sig2(I('x'))} already in Topic 02. Now apply the ordinary shortcut formula to the ${di}:<br>${sig2(I('d'))} = ${INV(n)}${NB}∑${DI2} − ${sq(DB)}.<br>Substituting ${di} = ${xi} − ${A} and ${DB} = ${XB} − ${A}:<br>${S2} = ${INV(n)}${NB}${DEV2(A)} − (${XB} − ${A})<sup>2</sup>.${NB}${NB}■`,
      },
      {
        t: 'p',
        html: `<b>The companion rule you also need.</b> For a general linear transformation ${yi} = <i>ax</i><sub><i>i</i></sub> + ${b}:`,
      },
      {
        t: 'formula',
        kicker: `Mean and variance under ${yi}${NB}=${NB}<i>ax</i><sub><i>i</i></sub>${NB}+${NB}${b}`,
        main: `${YB} = <i>a</i>${XB} + ${b}<br>${sig2(I('y'))} = ${sq(a)}${sig2(I('x'))}<br>${sig(I('y'))} = |${a}|${NB}${sig(I('x'))}`,
        legend: [
          `${a}, ${b} = the constants of the transformation`,
          `${XB}, ${YB} = the means of the ${I('x')}- and ${I('y')}-data`,
          `${sig(I('x'))}, ${sig(I('y'))} = their standard deviations`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Topic 02 states the variance half of this but leaves the mean half scattered through solutions. Memorise the pair together: <b>the mean feels both ${a} and ${b}; the variance feels only ${a}, and feels it squared.</b>`,
      },
      { t: 'fig', id: 'm11-13-fig-13.5' },

      { t: 'part', title: 'Procedure (E): reading off mean and variance from deviation sums' },
      {
        t: 'proc',
        title: 'Procedure (E)',
        steps: [
          `<b>Read ${n} and ${A} off the question.</b> ${A} is the number being subtracted inside the brackets. If two different reference points appear, see Example S4.`,
          `<b>Compute ${DB} = ${INV(n)}${NB}${DEV(A)}, then ${XB} = ${A} + ${DB}.</b> <b>Why first:</b> the variance formula needs ${XB} − ${A} = ${DB}, so this step is not optional bookkeeping.`,
          `<b>Compute ${S2} = ${INV(n)}${NB}${DEV2(A)} − ${sq(DB)}.</b> <b>Why subtract:</b> the first term measures spread about ${A}, which is generally not the mean; the correction ${sq(DB)} removes the extra distance introduced by anchoring at the wrong point.`,
          `<b>Take the positive square root for ${S}, and check ${S2} ≥ 0.</b> A negative variance means you either subtracted in the wrong order or squared ${DEV(A)} where you needed ${DEV2(A)}.`,
          `<b>Apply transformation rules last</b>, if the question asks about ${yi} = <i>ax</i><sub><i>i</i></sub> + ${b}.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'S3: JEE Main Level: the standard phrasing',
        q: `For a set of 9 observations ${sb('x', '1')}, ${sb('x', '2')}, …, ${sb('x', '9')} it is given that<br>∑<sub>${I('i')}=1</sub><sup>9</sup>(${xi} − 5) = 9<br>and<br>∑<sub>${I('i')}=1</sub><sup>9</sup>(${xi} − 5)<sup>2</sup> = 45.<br>Find the mean and the standard deviation of the observations.`,
        steps: [
          `Here ${n} = 9 and ${A} = 5.`,
          `<b>Mean.</b> ${DB} = ${INV('9')}${NB}${DEV('5')} = ${fr('9', '9')} = 1, so<br>${XB} = ${A} + ${DB} = 5 + 1 = 6.`,
          `<b>Variance.</b><br>${S2} = ${INV('9')}${NB}${DEV2('5')} − (${XB} − 5)<sup>2</sup><br><br>= ${fr('45', '9')} − (1)<sup>2</sup> = 5 − 1 = 4.`,
          `<b>Standard deviation.</b> ${S} = +√4 = 2.`,
          `<b>Verification by a second route.</b> Expand the two given sums in terms of ${SX} and ${SX2} and redo the calculation from the ${A} = 0 shortcut.<br>${DEV('5')} = ${SX} − 45 = 9<br>⟹ ${SX} = 54 ⟹ ${XB} = ${fr('54', '9')} = 6. ✓<br><br>${DEV2('5')} = ${SX2} − 10${SX} + 25(9)<br>= ${SX2} − 540 + 225 = 45<br>⟹ ${SX2} = 360.<br><br>${S2} = ${fr(SX2, n)} − ${sq(XB)} = ${fr('360', '9')} − 36<br>= 40 − 36 = 4. ✓`,
          `Both routes give ${S} = 2. Note how much longer the second route is: that is precisely why the identity is worth memorising.`,
        ],
        ans: `${XB} = 6; ${S} = 2`,
      },
      {
        t: 'ex',
        tag: 'S4: JEE Main Level: two reference points, n unknown',
        q: `For a data set ${sb('x', '1')}, …, ${sb('x', n)} it is given that<br>${DEV('2')} = 10,<br>${DEV('5')} = −5,<br>${DEV2('2')} = 60.<br>Find ${n}, the mean, and the standard deviation.`,
        steps: [
          `<b>Step 1: extract ${n} from the two first-order sums.</b> Subtract the second equation from the first. Each term contributes (${xi} − 2) − (${xi} − 5) = 3, and there are ${n} terms:<br>${DEV('2')} − ${DEV('5')} = 3${n}<br>⟹ 10 − (−5) = 3${n} ⟹ 15 = 3${n} ⟹ ${n} = 5.<br><b>This is the trick the question is built around:</b> the difference of two deviation sums taken about different points kills the data entirely and leaves only ${n}.`,
          `<b>Step 2: mean.</b> With ${A} = 2 and ${n} = 5: ${DB} = ${fr('10', '5')} = 2, so<br>${XB} = 2 + 2 = 4.`,
          `<b>Step 3: variance.</b><br>${S2} = ${INV('5')}${NB}${DEV2('2')} − (${XB} − 2)<sup>2</sup><br><br>= ${fr('60', '5')} − (2)<sup>2</sup> = 12 − 4 = 8,<br>${S} = 2√2 ≈ 2.83.`,
          `<b>Verification.</b> Check the second given sum against the answer:<br>${DEV('5')} = ${SX} − 5${n} = 20 − 25 = −5. ✓<br>And through the ${A} = 0 route:<br>${DEV2('2')} = ${SX2} − 4${SX} + 4${n}<br>= ${SX2} − 80 + 20 = 60,<br>so ${SX2} = 120 and<br>${S2} = ${fr('120', '5')} − 4<sup>2</sup> = 24 − 16 = 8. ✓`,
        ],
        ans: `${n} = 5; ${XB} = 4; ${S} = 2√2 ≈ 2.83`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `For 20 observations, ${DEV('8')} = 40 and ${DEV2('8')} = 500. Find the mean and the standard deviation.`,
            a: `${XB} = 8 + ${fr('40', '20')} = 10;<br>${S2} = ${fr('500', '20')} − 2<sup>2</sup> = 25 − 4 = 21;<br>${S} = √21 ≈ 4.58.`,
          },
          {
            q: `For 100 observations, ${DEV('50')} = −100 and ${DEV2('50')} = 10000. Find the mean and variance of the ${xi}, and then the mean and variance of ${yi} = 3${xi} + 7.`,
            a: `${XB} = 50 + ${fr('−100', '100')} = 49;<br>${sig2(I('x'))} = ${fr('10000', '100')} − (−1)<sup>2</sup> = 100 − 1 = 99.<br>For ${I('y')}: ${YB} = 3(49) + 7 = 154 and ${sig2(I('y'))} = 3<sup>2</sup>(99) = 891, so ${sig(I('y'))} = 3√99 = 9√11 ≈ 29.85.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          `<b>(${DEV(A)})<sup>2</sup> ≠ ${DEV2(A)}.</b> In Example S3 the first is 81 and the second is 45. The correction term in the identity is<br>${sq(DB)} = (${INV(n)}${NB}${DEV(A)})<sup>2</sup>,<br>i.e. you divide before squaring.`,
          `<b>Do not skip the correction when ${DB}${NB}≠${NB}0.</b> Reporting ${S2} = ${fr('45', '9')} = 5 in Example S3 is the single most common wrong answer, and it is exactly what a distractor option will offer. The term ${INV(n)}${NB}${DEV2(A)} is the mean square deviation about ${A}, and it always <b>overstates</b> the variance unless ${A} = ${XB}.`,
          `<b>The identity is exact, not approximate.</b> There is no requirement that ${A} be close to the data. Choose whatever makes the arithmetic clean.`,
          `<b>Standard deviation is the positive root.</b> ${sig(I('y'))} = |${a}|${sig(I('x'))} under ${I('y')} = <i>ax</i> + ${b}, not <i>a</i>${sig(I('x'))}: a negative multiplier never makes the spread negative (${a} = −2 doubles it, ${a} = −0.5 halves it).`,
        ],
      },

      { t: 'part', title: 'Bonus: variance of an arithmetic progression' },
      {
        t: 'p',
        html: `Chapter 13 states, without proof, that the variance of the first ${n} natural numbers is ${fr(`${sq(n)} − 1`, '12')}. Here is the proof, and the one-line generalisation JEE Main actually asks for.`,
      },
      {
        t: 'p',
        html: `<b>Derivation.</b> For ${xi} = 1, 2, …, ${n}: ${XB} = ${fr(`${n} + 1`, '2')} and ${SX2}${NB}= ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')}. So<br>${S2} = ${INV(n)} ⋅ ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')} − (${fr(`${n} + 1`, '2')})<sup>2</sup><br><br>= ${fr(`(${n} + 1)(2${n} + 1)`, '6')} − ${fr(`(${n} + 1)<sup>2</sup>`, '4')}<br><br>= ${fr(`(${n} + 1)(${n} − 1)`, '12')} = ${fr(`${sq(n)} − 1`, '12')}`,
      },
      {
        t: 'p',
        html: `<b>Generalisation.</b> An arithmetic progression ${a}, ${a} + ${d}, ${a} + 2${d}, …, ${a} + (${n} − 1)${d} is the linear image ${xi} = (${a} − ${d}) + ${d}${NB}${I('i')} of the list ${I('i')} = 1, 2, …, ${n}. By the transformation rule (a shift leaves the variance unchanged; a multiplier enters squared), the shift (${a} − ${d}) contributes nothing and the multiplier ${d} contributes ${sq(d)}:`,
      },
      {
        t: 'formula',
        kicker: 'Variance of an arithmetic progression',
        main: `${sig2('AP')} = ${fr(`${sq(d)}(${sq(n)} − 1)`, '12')}`,
        legend: [`${d} = the common difference`, `${n} = the number of terms`, `${sig2('AP')} = the variance of the terms`],
        note: null,
      },
      {
        t: 'p',
        html: `• First ${n} even numbers 2, 4, …, 2${n}: ${d} = 2 ⇒ ${S2} = ${fr(`4(${sq(n)} − 1)`, '12')} = ${fr(`${sq(n)} − 1`, '3')}.<br>• First ${n} odd numbers 1, 3, …, 2${n} − 1: also ${d} = 2 ⇒ ${S2} = ${fr(`${sq(n)} − 1`, '3')}. The two lists differ by a shift of 1, and a shift cannot change variance.`,
      },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the variance of the first 10 odd natural numbers.',
            a: `${d} = 2, ${n} = 10, so ${S2} = ${fr('4(100 − 1)', '12')} = 33.<br>(Direct check: mean = 10; deviations ±1, ±3, ±5, ±7, ±9; ∑(${xi} − ${XB})<sup>2</sup> = 2(1 + 9 + 25 + 49 + 81) = 330; ${fr('330', '10')} = 33.)`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Median of a discrete frequency distribution (no interpolation, ever)', note: '' },
          { f: `Sort the ${xi}, build the c.f. column, set ${NSUMF}.`, note: '' },
          { f: `${N} odd ⇒ ${M} = the ${N12}-th observation = the first ${xi} with c.f. ≥${NB}${N12}.`, note: '' },
          {
            f: `${N} even ⇒ ${M} = mean of the ${N2}-th and (${N2} + 1)-th observations. If a c.f. equals ${N2} exactly, these are two different values: average them.`,
            note: '',
          },
          { f: `${MDM} = ${fr(`∑${FABS(M)}`, N)}; coefficient = ${fr(MDM, M)}.`, note: '' },
          { f: 'Checks', note: `${MDM} ≤ ${MDX}; M.D. ≤ Range; units match the data.` },
          {
            f: `Assumed-mean identity (any ${A}, ungrouped)`,
            note: `${XB} = ${A} + ${INV(n)}${NB}${DEV(A)},<br>${S2} = ${INV(n)}${NB}${DEV2(A)} − (${XB} − ${A})<sup>2</sup>`,
          },
          {
            f: `${A} = 0 gives ${S2} = ${INV(n)}${NB}${SX2} − ${sq(XB)}. Frequency version: replace ${INV(n)}${NB}∑ by ${INV(N)}${NB}∑${fi}.`,
            note: '',
          },
          {
            f: `Two reference points, ${n} unknown`,
            note: `${DEV(sb('A', '1'))} − ${DEV(sb('A', '2'))} = (${sb('A', '2')} − ${sb('A', '1')})${n}.`,
          },
          {
            f: `Transformation pair for ${yi} = <i>ax</i><sub><i>i</i></sub> + ${b}`,
            note: `${YB} = <i>a</i>${XB} + ${b}, ${sig2(I('y'))} = ${sq(a)}${sig2(I('x'))}, ${sig(I('y'))} = |${a}|${sig(I('x'))}.`,
          },
          {
            f: 'Standard variances',
            note: `first ${n} naturals ${fr(`${sq(n)} − 1`, '12')}; AP with common difference ${d}: ${fr(`${sq(d)}(${sq(n)} − 1)`, '12')}; first ${n} evens or first ${n} odds: ${fr(`${sq(n)} − 1`, '3')}.`,
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 1180–1187 ────────────────
  {
    n: 'C',
    title: 'Inclusive (Discontinuous) Class Intervals and True Class Boundaries',
    extra: true,
    kalam: 'The correction leaves every class mid-point unchanged.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every grouped table in Chapter 13 is exclusive (continuous), so the chapter never has to say what to do when the class limits have gaps between them. NCERT does put such tables in front of you, twice, but only as a bracketed hint at the end of a question, with no explanation anywhere in the running text. This section supplies the explanation, and proves the one thing about it that is genuinely non-obvious: the correction changes far less than students fear, and exactly one thing more than they expect.',
      },
      {
        t: 'p',
        html: `<b>Related topics.</b> The combined variance of two groups with different means is developed in Topic 02’s Key formulas and definitions part (with ${sb('d', '1')}, ${sb('d', '2')} defined) and used in Topic 02’s fourth worked example and Topic 03’s fourth worked example. Weighted mean and weighted variance with arbitrary (non-frequency) weights lie outside the Class 11 syllabus for all three exams; only the frequency-weighted forms in the chapter are examined.`,
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `NCERT plants this twice as a bare bracketed hint and never explains it in the body: Exercise 13.1 Q12 (ages given as 16–20, 21–25, …, with the instruction to subtract 0.5 from each lower limit and add 0.5 to each upper limit) and Exercise 13.2 Q10 (circle diameters 33–36, 37–40, …, with the same instruction). CBSE Boards can wrap any 3–5 mark dispersion question in an inclusive table, because ages, marks, wages, and counts are naturally recorded as whole numbers. JEE Main uses it as a silent trap inside a median or mean-deviation MCQ ${ESTIMATE}: the distractor is precisely the answer you get by treating the printed limits as boundaries. Chapter 13 assumes throughout that limits are boundaries: Topic 01 Procedure (C) reads the mid-point as<br>${fr('lower limit + upper limit', '2')}<br>(harmless, as shown below), and Procedure (D) asks you for “the lower boundary of the median class” without ever telling you how to obtain a boundary when the table has gaps in it. JEE Advanced does not test the bookkeeping, but it will happily hand you an inclusive table inside a longer problem and expect you not to stumble.`,
      },

      { t: 'part', title: 'The method' },
      {
        t: 'p',
        html: '<b>Two kinds of grouped table.</b> A continuous (or exclusive) distribution has no gaps: each class ends exactly where the next begins, as in 0–10, 10–20, 20–30. Every table in Chapter 13 is of this kind. An <b>inclusive</b> (or discontinuous) distribution leaves a gap, as in 16–20, 21–25, 26–30. The name says what it means: in an inclusive class 16–20, both endpoints belong to the class, so a person aged exactly 20 is counted there and a person aged exactly 21 is counted in the next class. Nothing is lost: the gap exists only because the variable was recorded in whole years, while the underlying quantity (age) is continuous. Somebody who has lived 20 years and 7 months is recorded as 20 and sits in the first class, and the class therefore really runs up to 20.5.',
      },
      {
        t: 'p',
        html: `<b>The correction factor.</b> Let<br>${g} = (lower limit of a class) − (upper limit of the previous class)<br>be the gap, and set the correction factor<br>${c} = ${fr(g, '2')}.<br>Then the <b>true class boundaries</b> are<br>lower boundary = lower limit − ${c},<br>upper boundary = upper limit + ${c}.`,
      },
      {
        t: 'p',
        html: `For whole-number data the gap is ${g} = 1 and ${c} = 0.5, which is the 0.5 in NCERT’s hint. For data recorded to one decimal place (weights as 40.0–44.9, 45.0–49.9) the gap is ${g} = 0.1 and ${c} = 0.05, giving boundaries 39.95–44.95, 44.95–49.95. The rule is ${fr(g, '2')}, never a hard-coded 0.5.`,
      },
      {
        t: 'formula',
        kicker: 'True class boundaries',
        main: `${c} = ${fr(g, '2')}<br>Lower boundary = ${l} − ${c}<br>Upper boundary = ${u} + ${c}<br>Range = ${sb('u', k)} − ${sb('l', '1')} + 2${c}`,
        legend: [
          `${g} = the gap between adjacent classes`,
          `${c} = the correction factor`,
          `${l}, ${u} = the printed lower and upper limits of a class`,
          `${sb('l', '1')}, ${sb('u', k)} = the lowest and the highest printed limits`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Validity.</b> The gap must be the same between every adjacent pair of classes; if a table has unequal gaps it is malformed, not a candidate for this correction. The boundaries produced are continuous by construction (each upper boundary equals the next lower boundary), which is exactly the state Chapter 13’s procedures assume.',
      },
      {
        t: 'p',
        html: '<b>What the correction changes, and what it does not.</b> This is the part worth memorising, because it collapses most of the work.',
      },
      {
        t: 'p',
        html: `<b>Mid-point invariance.</b> The correction leaves every class mid-point unchanged. For a class with limits ${l} and ${u}, the corrected mid-point is<br>${fr(`(${l} − ${c}) + (${u} + ${c})`, '2')} = ${fr(`${l} + ${u}`, '2')},<br>since the −${c} and the +${c} cancel. The class is stretched by ${c} at each end, symmetrically, so its centre does not move.`,
      },
      {
        t: 'p',
        html: 'Every quantity Chapter 13 builds out of mid-points is therefore untouched: the <b>mean</b>, the <b>variance</b>, the <b>standard deviation</b>, the <b>coefficient of variation</b>, and the <b>mean deviation about the mean</b> are all identical whether you correct the boundaries or not. If a question on an inclusive table asks for any of those, you may ignore the correction entirely.',
      },
      {
        t: 'p',
        html: `Two things do change. The first is the <b>range</b>, which is defined on boundaries:<br>Range = (${sb('u', k)} + ${c}) − (${sb('l', '1')} − ${c})<br>= ${sb('u', k)} − ${sb('l', '1')} + 2${c}.`,
      },
      {
        t: 'p',
        html: `The second, and the one that costs marks, is the <b>interpolated median</b>, because the median formula<br>${MED}<br>reads both the lower boundary ${ELL} and the width ${h} off the class, and the correction moves ${ELL} down by ${c} while stretching ${h} from ${u} − ${l} to ${u} − ${l} + 2${c}. Since the median moves, so does the <b>mean deviation about the median</b>.`,
      },
      {
        t: 'p',
        html: `<b>How far the median moves.</b> Write<br>${t} = ${TFR}<br>for the position fraction inside the median class. Uncorrected you would compute ${NAIVE}${NB}= ${l} + ${t}(${u}${NB}−${NB}${l}); corrected you get ${M} = (${l}${NB}−${NB}${c}) + ${t}${NB}(${u}${NB}−${NB}${l}${NB}+${NB}2${c}). Subtracting,<br>${SHIFT}.`,
      },
      {
        t: 'formula',
        kicker: 'Shift of the interpolated median',
        main: SHIFT,
        legend: [
          `${M} = the median from the true boundaries`,
          `${NAIVE} = the median from the printed limits`,
          `${t} = the position fraction inside the median class (${TFR})`,
          `${c} = the correction factor`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `Read what this says. The error is proportional to how far ${t} sits from the middle of the class. If ${t} = ${HALF} exactly (the median lands dead centre in its class), the two routes agree and the correction costs nothing, because a median at the centre of the class is the mid-point, and mid-points are invariant. Otherwise the two answers differ, and the error is bounded by ${c} in either direction. It is small, but it is real, and for ${g} = 1 it is enough to separate two printed options.`,
      },
      {
        t: 'proc',
        title: 'Procedure (F): handling an inclusive distribution',
        steps: [
          'Check whether the table is inclusive at all. Compare the upper limit of any class with the lower limit of the next. Equal means the table is already continuous: do nothing. A gap means you must decide whether you need the correction. <b>Why first:</b> running the correction on an already-continuous table is a way to manufacture a wrong answer out of a right table.',
          `Read what the question asks for. If it wants the mean, the variance, the standard deviation, the coefficient of variation, or the mean deviation about the <b>mean</b>, stop: mid-points are invariant, so build the table straight from<br>${xi} = ${fr(`${sb('l', I('i'))} + ${sb('u', I('i'))}`, '2')}<br>and proceed exactly as in Topic 01 Procedure (C) or Topic 02. <b>Why:</b> you are being asked for a quantity that cannot feel the correction.`,
          `If the question wants the <b>median</b>, the mean deviation about the median, or the <b>range</b>, compute ${g} from any adjacent pair and set ${c} = ${fr(g, '2')}. <b>Why:</b> in this chapter, these three are the only quantities that read boundaries rather than centres.`,
          `Rewrite the class column with boundaries ${sb('l', I('i'))} − ${c} and ${sb('u', I('i'))} + ${c}. Confirm the new upper boundary of each class equals the new lower boundary of the next; if it does not, you mis-measured ${g}. <b>Why:</b> that equality is the whole point of the correction, and it is a free self-check.`,
          `Build the cumulative frequency column and locate the median class as usual (first class whose c.f. reaches ${N2}). Note that the correction never moves the median class, only the numbers inside it, because it does not touch any frequency.`,
          `Interpolate with the corrected ${ELL} and the corrected ${h} = ${u} − ${l} + 2${c}. Then form ${ABS(M)} and ${FABS(M)} using the <b>uncorrected</b> mid-points, and divide by ${N}.`,
        ],
      },
      { t: 'fig', id: 'm11-13-C-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'S5: CBSE Board Level: the NCERT case',
        q: 'The ages of 100 persons are distributed as below. Calculate the mean deviation about the median age.<br>Age (years): 16–20, 21–25, 26–30, 31–35, 36–40, 41–45, 46–50, 51–55<br>Number of persons: 5, 6, 12, 14, 26, 12, 16, 9',
        steps: [
          `<b>Step 1: spot the gaps.</b> The upper limit 20 is followed by the lower limit 21, so ${g} = 1 and ${c} = 0.5. The question asks for the mean deviation about the <b>median</b>, so the correction is required.`,
          `<b>Step 2: corrected boundaries.</b> 15.5–20.5, 20.5–25.5, 25.5–30.5, 30.5–35.5, 35.5–40.5, 40.5–45.5, 45.5–50.5, 50.5–55.5. Each upper boundary now equals the next lower boundary, and every class has width ${h} = 5 (not 4, which is what the printed limits suggest).`,
          `<b>Step 3: mid-points and cumulative frequencies.</b> The mid-points are unchanged by the correction: 18, 23, 28, 33, 38, 43, 48, 53.<br>${xi}: 18, 23, 28, 33, 38, 43, 48, 53<br>${fi}: 5, 6, 12, 14, 26, 12, 16, 9<br>c.f.: 5, 11, 23, 37, 63, 75, 91, 100`,
          `<b>Step 4: median.</b> ${N} = 100, so ${N2} = 50. The first c.f. to reach 50 is 63, so the median class is the one with mid-point 38, i.e. boundaries 35.5–40.5. With ${ELL} = 35.5, ${C} = 37, ${F} = 26, ${h} = 5:<br>${M} = 35.5 + ${fr('50 − 37', '26')} × 5<br><br>= 35.5 + ${fr('13', '26')} × 5<br><br>= 35.5 + 2.5 = 38 years.`,
          `<b>Step 5: mean deviation.</b><br>${xi}: 18, 23, 28, 33, 38, 43, 48, 53<br>${fi}: 5, 6, 12, 14, 26, 12, 16, 9; total 100<br>${ABS('38')}: 20, 15, 10, 5, 0, 5, 10, 15<br>${FABS('38')}: 100, 90, 120, 70, 0, 60, 160, 135; total 735<br><br>${MDM} = ${fr('735', '100')} = 7.35 years.`,
          `<b>A word of warning about this particular table.</b> Here<br>${t} = ${fr('50 − 37', '26')} = ${HALF}<br>exactly, so by the shift formula<br>${SHIFT} = 0:<br>a student who ignored the correction and used ${ELL} = 36, ${h} = 4 would have got<br>36 + ${HALF}(4) = 38<br>as well, and would have scored full marks by luck. Do not learn the wrong lesson from that. It happened only because the median landed at the dead centre of its class, where the median coincides with the invariant mid-point 38. Example S6 shows what happens when it does not.`,
        ],
        ans: `${MDM} = 7.35 years`,
      },
      {
        t: 'ex',
        tag: 'S6: JEE Main Level: where the trap actually fires',
        q: 'For the following distribution of scores, find the median and the mean deviation about the median.<br>Score: 1–10, 11–20, 21–30, 31–40, 41–50<br>Frequency: 4, 10, 20, 12, 4',
        steps: [
          `${g} = 11 − 10 = 1, so ${c} = 0.5 and the boundaries are 0.5–10.5, 10.5–20.5, 20.5–30.5, 30.5–40.5, 40.5–50.5, each of width ${h} = 10.`,
          'Mid-points (unchanged): 5.5, 15.5, 25.5, 35.5, 45.5. Cumulative frequencies: 4, 14, 34, 46, 50.',
          `${N} = 50, so ${N2} = 25; the first c.f. to reach 25 is 34, giving the median class 20.5–30.5. With ${ELL} = 20.5, ${C} = 14, ${F} = 20, ${h} = 10:<br>${M} = 20.5 + ${fr('25 − 14', '20')} × 10<br><br>= 20.5 + ${fr('11', '20')} × 10<br><br>= 20.5 + 5.5 = 26.`,
          `${xi}: 5.5, 15.5, 25.5, 35.5, 45.5<br>${fi}: 4, 10, 20, 12, 4; total 50<br>${ABS('26')}: 20.5, 10.5, 0.5, 9.5, 19.5<br>${FABS('26')}: 82, 105, 10, 114, 78; total 389<br><br>${MDM} = ${fr('389', '50')} = 7.78.`,
          `<b>The seductive wrong answer.</b> Treat the printed limits as boundaries (${ELL} = 21, ${h} = 9) and you get<br>${NAIVE} = 21 + ${fr('11', '20')} × 9<br>= 21 + 4.95 = 25.95,<br><br>M.D. = ${fr('388.1', '50')} = 7.762,<br>and 25.95 and 7.762 are exactly the distractors a paper-setter prints alongside 26 and 7.78. Check the discrepancy against the shift formula: ${t} = ${fr('11', '20')}, so<br><br>${M} − ${NAIVE} = 2(0.5)${NB}(${fr('11', '20')} − ${HALF})<br>= ${fr('1', '20')} = 0.05,<br>and indeed 26 − 25.95 = 0.05. Note also that the naive route did not even use a self-consistent table: its five classes of width 9 with gaps between them account for only 45 of every 50 units of the score axis, so it is measuring the median against a ruler with pieces missing.`,
          `<b>The cross-check that costs nothing.</b> For the mean of this distribution,<br>∑${fi}${xi} = 4(5.5) + 10(15.5) + 20(25.5)<br>+ 12(35.5) + 4(45.5) = 1295,<br>so<br>${XB} = ${fr('1295', '50')} = 25.9,<br>and this value is the same on either convention, because it is built only from mid-points. So is the variance, ${S2} = 107.84. If you ever find your mean or variance changing when you apply the boundary correction, you have made an arithmetic error: the correction cannot touch them.`,
        ],
        ans: `${M} = 26; ${MDM} = 7.78`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: 'For the distribution below, find (i) the range, (ii) the median, and (iii) the mean deviation about the median.<br>Class: 10–19, 20–29, 30–39, 40–49, 50–59<br>Frequency: 5, 9, 15, 8, 3',
            a: `${c} = 0.5; boundaries 9.5–19.5, …, 49.5–59.5, each of width 10.<br>(i) Range = 59.5 − 9.5 = 50.<br>(ii) ${N} = 40, c.f. = 5, 14, 29, 37, 40; median class 29.5–39.5;<br>${M} = 29.5 + ${fr('20 − 14', '15')} × 10 = 33.5.<br>(iii) ∑${FABS(M)} = 342, so ${MDM} = ${fr('342', '40')} = 8.55. (Ignoring the correction gives ${M} = 33.6 and M.D. = 8.52: both wrong.)`,
          },
          {
            q: 'For the same distribution as Exercise 1, find the mean and the variance, and state in one line why the boundary correction was irrelevant to this question.',
            a: `Mid-points 14.5, 24.5, 34.5, 44.5, 54.5;<br>${XB} = ${fr('1330', '40')} = 33.25;<br>${S2} = ${fr('1935', '16')} = 120.9375.<br>The correction stretches each class symmetrically, so no mid-point moves, and both quantities are built only from mid-points.`,
          },
          {
            q: 'The diameters (in mm) of circles in a design are distributed as below. Find the mean diameter and the standard deviation.<br>Diameter: 33–36, 37–40, 41–44, 45–48, 49–52<br>Number of circles: 15, 17, 21, 22, 25',
            a: `${XB} = 43.5 mm, ${S2} = 30.84 mm<sup>2</sup>, ${S} ≈ 5.55 mm. NCERT’s hint tells you to convert to 32.5–36.5, 36.5–40.5, and so on; do it if you like, but for the mean and the standard deviation it changes nothing, since the mid-points 34.5, 38.5, 42.5, 46.5, 50.5 are the same either way.<br>(Had the question asked for the median, it would have mattered: 43${fr('13', '14')} ≈ 43.93 with the correction against 43${fr('4', '7')} ≈ 43.57 without.)`,
          },
          {
            q: 'Weights are recorded to the nearest tenth of a kilogram in the classes 40.0–44.9, 45.0–49.9, 50.0–54.9. Write down the correction factor and the true class boundaries.',
            a: `${g} = 45.0 − 44.9 = 0.1, so ${c} = 0.05; boundaries 39.95–44.95, 44.95–49.95, 49.95–54.95, each of width 5. The correction is ${fr(g, '2')}, not a reflexive 0.5.`,
          },
        ],
      },

      { t: 'part', title: 'Pitfalls' },
      {
        t: 'mistakes',
        items: [
          `<b>Hard-coding 0.5.</b> The correction factor is half the gap, ${c} = ${fr(g, '2')}. Whole-number data happens to give ${c} = 0.5, which is all NCERT’s two hints ever show you, so students memorise the number instead of the rule and then subtract 0.5 from a table recorded to one decimal place. Measure the gap first, every time.`,
          `<b>“Correcting” a table that is already continuous.</b> Classes 0–10, 10–20, 20–30 have ${g} = 0 and need nothing. Subtracting 0.5 anyway produces overlapping classes and a wrong median. The test is one subtraction: the lower limit of a class minus the upper limit of the previous one.`,
          `<b>Applying the correction to the mid-points.</b> The correction moves the limits; the mid-point is their average and does not move. Writing<br>${xi} = ${fr('15.5 + 20.5', '2')} = 18<br>is right, and so is<br>${xi} = ${fr('16 + 20', '2')} = 18,<br>but a student who “corrects” the mid-point itself to 17.5 or 18.5 has invented a shift out of nothing and will corrupt the mean, the variance, and the mean deviation all at once.`,
          `<b>Forgetting that ${h} grows too.</b> The commonest half-correction is to drop ${ELL} from 36 to 35.5 and leave ${h} at 4. The class was stretched at both ends, so ${h} goes from ${u} − ${l} to ${u} − ${l} + 2${c}: from 4 to 5 for whole-number ages. Half the correction can be worse than none, because it breaks the ${t} = ${HALF} coincidence that would otherwise have saved you.`,
          '<b>Recomputing the mean and variance “to be safe”.</b> They cannot change. Spending three minutes re-deriving them under corrected boundaries in a Boards paper is three minutes gone for an identical number.',
          `<b>Thinking the median class moves.</b> It cannot: the correction touches no frequency, so the cumulative frequency column and the class that first reaches ${N2} are exactly as before. Only ${ELL} and ${h} inside that class change.`,
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Inclusive (discontinuous) classes: rapid recall', note: '' },
          { f: 'Spot it', note: `upper limit of a class ≠ lower limit of the next. Gap ${g}; correction factor ${c} = ${fr(g, '2')}.` },
          {
            f: 'Fix it',
            note: `lower boundary${NB}=${NB}${l}${NB}−${NB}${c}, upper boundary${NB}=${NB}${u}${NB}+${NB}${c}; new width ${h} = ${u} − ${l} + 2${c}. Check: each upper boundary must equal the next lower boundary.`,
          },
          {
            f: `Unchanged by the correction (mid-points are invariant, ${fr(`(${l} − ${c}) + (${u} + ${c})`, '2')} = ${fr(`${l} + ${u}`, '2')})`,
            note: 'mean, variance, standard deviation, C.V., mean deviation about the <b>mean</b>. Do not recompute them.',
          },
          {
            f: 'Changed by the correction',
            note: `range = ${sb('u', k)} − ${sb('l', '1')} + 2${c}; the interpolated <b>median</b>, hence the mean deviation about the median.`,
          },
          {
            f: 'Size of the median shift',
            note: `with ${t} = ${TFR},<br>${SHIFT},<br>zero exactly when ${t} = ${HALF} (median at the class centre), and never more than ${c} in magnitude.`,
          },
          { f: 'The median class never moves', note: 'no frequency is touched.' },
        ],
        aids: ['“Stretch the edges, not the centre.”'],
      },
    ],
  },
];
