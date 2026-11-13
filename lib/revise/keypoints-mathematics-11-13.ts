/**
 * KEY POINTS for Mathematics Class 11, Chapter 13 (Statistics).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember, Don't mix up, Common mistakes and Exam shortcuts.
 * Topics 01–03 and Additional topics A–C each have two or more Remember
 * points, at least one of each other kind and one Exam shortcut; the long
 * ones carry more (Topic 01, the median's minimising property and the grouped
 * median, with two Common mistakes and two Exam shortcuts; Topic 02, the
 * shortcut formula, the step-deviation form, combined variance and the
 * minimising mean; Topic 03, the running totals, missing observations and the
 * correction procedure, with two Common mistakes; Additional A, the even-N
 * branch, with two Common mistakes; Additional B, the AP variance, with two
 * Common mistakes; Additional C, the median shift, with two Common mistakes
 * and two Exam shortcuts): 51 points in all. Memory lines are a fifth, short
 * section of their own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 01–03 are 0–2 (the main chapter's Subtopics 01–03);
 * Additional topics A–C are 3–5 (the supplement's Addenda 13.1–13.2 and the
 * Additional Topics part's Addendum 13.3). No point refers to another topic
 * by number.
 *
 * Every fact is from the Master Reference book (the October 2026 edition); the
 * page (the bottom folio) is above each point. Remember: the topic's key
 * definitions, formulas, derivations and procedures, and its Cheat sheet.
 * Common mistakes: its Common pitfalls and its MCQ traps (A–C, which have no
 * MCQs: their Pitfalls and worked examples). Exam shortcuts: its Pro-Tips and
 * Speed / Shortcut solutions, with a worked example or practice answer.
 * `say`: the book's own mnemonics, word for word without their quotation
 * marks and their bracketed glosses (Topic 01: "Median Minimises
 * Mean-deviation" and "Add doesn't matter, Multiply scales."; Topic 02:
 * "Square for Variance, Root for SD." and "Shift-proof, Scale-squared.";
 * Topic 03: "Normalise to compare (C.V.), bookkeep to reverse (sums)."; C's
 * Memory aid "Stretch the edges, not the centre.": every one the book
 * prints). Topic 03 and A–C print fewer than two, so each takes the book's
 * own one-line sentences (Topic 03: "The safe move is always to adjust the
 * sum, then re-divide."; A: "The median is a positional statistic on all N
 * observations, not on the k distinct values." and its Pitfall heading
 * "Divide by N, not k."; B: "The identity is exact, not approximate." and the
 * second half of "Memorise the pair together: the mean feels both a and b;
 * …", cut at its colon and capitalised; C: "The correction leaves every class
 * mid-point unchanged."): twelve in all, every one a memory line.
 *
 * Where the book over-states a rule, the point states it only with its true
 * condition: "M.D. ≤ Range, always" (when the central value lies between the
 * smallest and largest observations, as the mean, the median and the mode
 * always do); Additional B's "σ = |a|σₓ … a negative multiplier still
 * increases spread" (it is σ_y = |a|σₓ, and the spread shrinks when |a| < 1,
 * whatever the sign); Additional A's "coincidence of that symmetric table"
 * (only the value list is evenly spread, the frequencies 3, 5, 8, 4, 5 are
 * not symmetric); "ratio data with a true zero (heights, wages, marks)" (marks
 * left out); and Additional C's gap test "upper limit of a class minus lower
 * limit of the next", which gives −g (the point takes the lower limit of the
 * next class minus the upper limit of the previous one, the book's own
 * definition of g). The book's exam-frequency and board-marking claims, the
 * syllabus and NCERT remarks, and the claims about Chapter 13 as a whole are
 * left out.
 *
 * Markup is the chapter's own: variables italic, the mean x̄ (x with U+0304),
 * subscripts as <sub>; − (U+2212) for minus; every fraction stacked,
 * <frac><num>…</num><den>…</den></frac>, and never a fraction inside a
 * numerator (the grouped median is written ℓ + (N over 2 − C) × h over f, and
 * Additional C's position fraction t is named in words); no em dashes; and
 * always a space after "<" (as the book prints it), so it is never read as a
 * tag. Exam-frequency claims would keep the label "(the book's estimate from
 * past papers, not official figures)"; none of these points makes one.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

const fr = (t: string, b: string) => `<frac><num>${t}</num><den>${b}</den></frac>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const NB = ' ';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const d = '<i>d</i>';
const f = '<i>f</i>';
const g = '<i>g</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const l = '<i>l</i>';
const n = '<i>n</i>';
const t = '<i>t</i>';
const u = '<i>u</i>';
const w = '<i>w</i>';
const x = '<i>x</i>';
const y = '<i>y</i>';
const A = '<i>A</i>';
const C = '<i>C</i>';
const M = '<i>M</i>';
const N = '<i>N</i>';
const ELL = '<i>ℓ</i>';
const SIG = '<i>σ</i>';
const SIG2 = sq(SIG);
const XB = '<i>x̄</i>';
const XB2 = sq(XB);
const YB = '<i>ȳ</i>';
const DB = '<i>d̄</i>';
const xi = '<i>x</i><sub><i>i</i></sub>';
const fi = '<i>f</i><sub><i>i</i></sub>';
const di = '<i>d</i><sub><i>i</i></sub>';
const XI2 = '<i>x</i><sub><i>i</i></sub><sup>2</sup>';
const XMAX = '<i>x</i><sub>max</sub>';
const XMIN = '<i>x</i><sub>min</sub>';
const SX = `${SIG}<sub><i>x</i></sub>`;
const SY = `${SIG}<sub><i>y</i></sub>`;
const SX2 = `${SIG}<sub><i>x</i></sub><sup>2</sup>`;
const SY2 = `${SIG}<sub><i>y</i></sub><sup>2</sup>`;
const n1 = '<i>n</i><sub>1</sub>';
const n2 = '<i>n</i><sub>2</sub>';
const d1 = '<i>d</i><sub>1</sub>';
const d2 = '<i>d</i><sub>2</sub>';
const XB1 = '<i>x̄</i><sub>1</sub>';
const XB2s = '<i>x̄</i><sub>2</sub>';
const S1SQ = '<i>σ</i><sub>1</sub><sup>2</sup>';
const S2SQ = '<i>σ</i><sub>2</sub><sup>2</sup>';
const D1SQ = '<i>d</i><sub>1</sub><sup>2</sup>';
const D2SQ = '<i>d</i><sub>2</sub><sup>2</sup>';
const HALF = fr('1', '2');
const N2 = fr(N, '2');
const N12 = fr(`${N} + 1`, '2');
/** |x_i − s| */
const dev = (s: string) => `|${xi} − ${s}|`;
const MDF = (s: string) => `${fr('1', N)} ∑ ${fi}${dev(s)}`;
const COEFF_RANGE = fr(`${XMAX} − ${XMIN}`, `${XMAX} + ${XMIN}`);
const CVF = `C.V. = ${fr(SIG, XB)} × 100`;
/** The grouped median, with no fraction inside a numerator. */
const MEDIAN = `${M} = ${ELL} + (${N2} − ${C}) × ${fr(h, f)}`;
const COMB = `${SIG2} = ${fr(`${n1}(${S1SQ} + ${D1SQ}) + ${n2}(${S2SQ} + ${D2SQ})`, `${n1} + ${n2}`)}`;
const MASTER = `∑ ${XI2} = ${n}(${SIG2} + ${XB2})`;
const NX = '<i>nx̄</i>';
const DEVA = (s: string) => `∑(${xi} − ${s})`;
const DEVA2 = (s: string) => `∑(${xi} − ${s})<sup>2</sup>`;
const A1 = '<i>A</i><sub>1</sub>';
const A2 = '<i>A</i><sub>2</sub>';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Measures of Dispersion and Mean Deviation ──
  // pp. 1139, 1141, 1150
  {
    topic: 0,
    kind: 'remember',
    q: 'What does dispersion measure, and what are the range and the coefficient of range?',
    a: `How tightly or loosely the observations huddle around their centre: two data sets can share a mean and look nothing alike. The range, ${XMAX} − ${XMIN}, is the crudest measure: it listens only to the two extremes, so one freak value makes it lie (for grouped data, the upper boundary of the highest class minus the lower boundary of the lowest). The coefficient of range, ${COEFF_RANGE}, is a unit-free way to compare spread`,
    why: 'Ramesh’s tomato prices ₹28, ₹30, ₹29, ₹31, ₹30 and Suresh’s ₹14, ₹46, ₹12, ₹48, ₹28 both average ₹29.6, yet their ranges are 3 and 36.',
    say: null,
  },
  // pp. 1139, 1141, 1142
  {
    topic: 0,
    kind: 'remember',
    q: 'What is the mean deviation about a central value a, for a list and for a frequency table?',
    a: `The average distance from ${a} (the mean, the median or the mode): M.D.(${a}) = ${fr('1', n)} ∑ ${dev(a)} for ${n} observations, and M.D.(${a}) = ${MDF(a)} with ${N} = ∑ ${fi} for a frequency table (class mid-points as the ${xi} for continuous data). The coefficient of M.D. is ${fr(`M.D.(${a})`, a)}, a pure number; M.D. itself carries the data’s units`,
    why: `The absolute value is the whole point: without it the deviations from the mean cancel to exactly 0 for every data set.`,
    say: null,
  },
  // pp. 1142, 1146, 1150
  {
    topic: 0,
    kind: 'remember',
    q: 'About which central value is the mean deviation least, and why?',
    a: `About the median: ∑ ${dev(a)} is minimum when ${a} is the median. Pair the observations from the outside in: wherever ${a} sits between a pair, its two distances add up to the pair’s gap, so an ${a} inside every pair (inside the innermost one) gives the least sum, and outside it the sum strictly increases. For an even count, every ${a} between the two middle observations gives the same minimum`,
    why: `7, 11, 13, 16, 20, 24: ∑ ${dev(a)} = 17 + 9 + 3 = 29 for every ${a} in [13,${NB}16], so M.D.(${M}) = ${fr('29', '6')} ≈ 4.83.`,
    say: 'Median Minimises Mean-deviation',
  },
  // pp. 1143, 1147, 1150
  {
    topic: 0,
    kind: 'remember',
    q: 'How is the median of a continuous frequency distribution found, for the M.D. about the median?',
    a: `Build the c.f. column; the median class is the first class whose c.f. reaches ${N2}. Then interpolate, ${MEDIAN}, with ${ELL} the lower boundary of the median class, ${C} the c.f. of the class just before it, ${f} its frequency and ${h} its width: the observations are assumed spread evenly across the class. Then form ${dev(M)} with the class mid-points`,
    why: `Marks 0–10, …, 40–50 with frequencies 7, 8, 10, 9, 6: the c.f. 25 is the first to reach 20, so ${M} = 20 + ${fr('20 − 15', '10')} × 10 = 25 and M.D.(${M}) = ${fr('430', '40')} = 10.75.`,
    say: null,
  },
  // pp. 1148, 1149
  {
    topic: 0,
    kind: 'mixup',
    q: 'Mean or median: which one minimises which sum of deviations?',
    a: `The median minimises the sum of absolute deviations, ∑ ${dev(a)}; the mean minimises the sum of squared deviations, ∑(${xi} − ${a})<sup>2</sup>. So “least mean deviation” means anchoring at the median; the mode minimises nothing of this kind, and the range is not a central value at all`,
    why: `For 4, 7, 9, 13, 16 the M.D. about the median 9 is ${fr('18', '5')} = 3.6; measuring about the mean 9.8 gives 3.76.`,
    say: null,
  },
  // pp. 1145, 1149
  {
    topic: 0,
    kind: 'mistake',
    q: `Goals 0, 1, 2, 3, 4 in 4, 6, 8, 5, 2 matches give ∑ ${fi}${dev(XB)} = 24.0. Is the M.D. ${fr('24.0', '5')} = 4.8?`,
    a: `No: 0.96. The divisor is ${N} = ∑ ${fi} = 25, the number of matches, never the number of rows. The other listed slips: dropping the modulus (∑(${xi} − ${XB}) is 0 for every data set), and anchoring at the mean when the least mean deviation is asked`,
    why: `${XB} = ${fr('45', '25')} = 1.8, and an observation that occurs ten times must contribute its distance ten times.`,
    say: null,
  },
  // p. 1148
  {
    topic: 0,
    kind: 'mistake',
    q: 'Every observation is increased by 5. Is the coefficient of range unchanged, like the range?',
    a: `No. The range and every mean deviation are unchanged, since a uniform shift preserves every gap (neither “increases by 5”); but the coefficient of range ${COEFF_RANGE} keeps its numerator and gets a larger denominator, so it changes`,
    why: `The shift moves ${XMAX} and ${XMIN} by the same 5, so their difference is untouched while their sum grows by 10.`,
    say: null,
  },
  // pp. 1145, 1148, 1149, 1150
  {
    topic: 0,
    kind: 'shortcut',
    q: `Range 40 and M.D. 12; every value becomes 3${xi} − 7. The new range and M.D. at once?`,
    a: `120 and 36. Under ${xi} ↦ <i>ax</i><sub><i>i</i></sub> + ${b}, the range and the M.D. are both multiplied by |${a}| and ignore ${b}: the shift moves every observation equally, and both measures are built only from gaps. For −3${xi} − 7 the answers are the same, since only |${a}| matters`,
    why: 'Value × 4 − 9 on M.D. 7.5 and range 25 gives 30 and 100: the −9 has no effect.',
    say: 'Add doesn’t matter, Multiply scales.',
  },
  // pp. 1142, 1143, 1149, 1150
  {
    topic: 0,
    kind: 'shortcut',
    q: 'What quick check catches an arithmetic slip in a mean deviation?',
    a: `M.D. ≤ Range, whenever the central value lies between the smallest and largest observations, as the mean, the median and the mode always do: each ${dev(a)} is then at most the range. An M.D. larger than the range means a slip upstream; the answer also carries the data’s units`,
    why: `Test marks 32, 28, 36, 24, 30: range 12 and M.D.(${XB}) = ${fr('16', '5')} = 3.2 marks, and 3.2 ≤ 12.`,
    say: null,
  },

  // ── Topic 02 · Variance and Standard Deviation ──
  // pp. 1151, 1153, 1155
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the variance and the standard deviation, and why square the deviations?',
    a: `${SIG2} = ${fr('1', n)} ∑(${xi} − ${XB})<sup>2</sup>, the mean of the squared deviations from the mean; ${SIG} = +√${SIG2}, always the positive root. Squaring throws away the sign, stays smooth (no corner like |${x}|) and punishes large deviations far more than small ones. The variance carries squared units (marks<sup>2</sup>), so the root brings the measure back to the data’s units`,
    why: `12, 15, 18, 21, 24: deviations −6, −3, 0, 3, 6 give ${SIG2} = ${fr('90', '5')} = 18 and ${SIG} = 3√2 ≈ 4.24.`,
    say: 'Square for Variance, Root for SD.',
  },
  // pp. 1153, 1154, 1156
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the shortcut formula for the variance, and how does it follow from the definition?',
    a: `${SIG2} = ${fr('1', n)} ∑ ${XI2} − ${XB2}. Expand (${xi} − ${XB})<sup>2</sup> = ${XI2} − 2${XB}${xi} + ${XB2} and split the sum: ${fr('1', n)} ∑ ${xi} = ${XB} turns the middle term into −2${XB2}, and ∑ ${XB2} = ${n}${XB2} makes the last ${XB2}. For a frequency table, ${SIG2} = ${fr('1', N)} ∑ ${fi}${XI2} − (${fr('1', N)} ∑ ${fi}${xi})<sup>2</sup>`,
    why: `It is fastest when ${XB} is not a whole number: ${xi} = 4, 8, 12, 16, 20 with ${fi} = 2, 5, 8, 3, 2 gives ${fr('3072', '20')} − 11.6<sup>2</sup> = 19.04, without one deviation.`,
    say: null,
  },
  // pp. 1153, 1155, 1157
  {
    topic: 1,
    kind: 'remember',
    q: 'What is the step-deviation form, and why does h enter squared?',
    a: `With an assumed mean ${A}, class width ${h} and ${di} = ${fr(`${xi} − ${A}`, h)}: ${SIG2} = ${sq(h)}[${fr('1', N)} ∑ ${fi}${di}<sup>2</sup> − (${fr('1', N)} ∑ ${fi}${di})<sup>2</sup>]. The coding shrinks the arithmetic to small integers; ${sq(h)} undoes the scaling by ${h}, squared because variance scales by the square of any factor`,
    why: `Marks 0–20, …, 80–100 with ${A} = 50, ${h} = 20: 400[${fr('41', '30')} − (${fr('−1', '30')})<sup>2</sup>] = 546.2, ${SIG} ≈ 23.4; the tiny correction term still must not be dropped.`,
    say: null,
  },
  // pp. 1154, 1155, 1159
  {
    topic: 1,
    kind: 'remember',
    q: 'How do the variance and the SD change when every value x becomes ax + b?',
    a: `${SY2} = ${sq(a)}${SX2} and ${SY} = |${a}|${SX}: the shift ${b} moves every value equally and changes no gap, and the scale enters the variance squared. The mean does move: adding ${k} to every value adds ${k} to the mean and leaves the variance unchanged`,
    why: `Variance 5, each value ×3 then +4: new variance 3<sup>2</sup> × 5 = 45 and new SD 3√5 ≈ 6.71.`,
    say: 'Shift-proof, Scale-squared.',
  },
  // pp. 1154, 1156
  {
    topic: 1,
    kind: 'remember',
    q: 'How is the variance of two groups put together?',
    a: `${COMB}, with ${d1} = ${XB1} − ${XB}, ${d2} = ${XB2s} − ${XB} and ${XB} the combined mean. The ${D1SQ}, ${D2SQ} terms are the spread between the group means, which is why the combined SD can exceed both groups’ SDs`,
    why: `30 students with mean 60, SD 8 and 20 with mean 70, SD 6: ${XB} = 64, ${SIG2} = ${fr('2400 + 1440', '50')} = 76.8, ${SIG} ≈ 8.76.`,
    say: null,
  },
  // pp. 1153, 1154, 1155, 1157
  {
    topic: 1,
    kind: 'remember',
    q: 'Why is variance always measured about the mean, and when is it zero?',
    a: `The mean minimises the mean of squared deviations: <i>g</i>(${a}) = ${fr('1', n)} ∑(${xi} − ${a})<sup>2</sup> has <i>g</i>′(${a}) = −${fr('2', n)} ∑(${xi} − ${a}), which is 0 exactly at ${a} = ${XB}. ${SIG2} is zero only when every observation equals the mean. A standard result: the variance of the first ${n} natural numbers is ${fr(`${sq(n)} − 1`, '12')}`,
    why: `First 10 natural numbers: ${fr('10<sup>2</sup> − 1', '12')} = 8.25, ${SIG} ≈ 2.87.`,
    say: null,
  },
  // pp. 1158, 1159
  {
    topic: 1,
    kind: 'mixup',
    q: 'The variance is 9 and each value becomes 2x + 7. Is the new SD 36, 13 or 6?',
    a: `6: the SD is √9 = 3, scaled by |2|, and the +7 does nothing. 36 is the new variance (2<sup>2</sup> × 9), the wrong quantity; 13 adds the shift to a spread measure. Variance and SD differ by a square root and by units: stopping at the variance when the SD is asked loses the mark`,
    why: 'Read the question for which one it wants: the variance in (data units)<sup>2</sup>, the SD in data units.',
    say: null,
  },
  // pp. 1155, 1156, 1159
  {
    topic: 1,
    kind: 'mistake',
    q: 'Group SDs 8 and 6: is the combined SD their average, 7?',
    a: `No: 8.76, for 30 students at mean 60 and 20 at mean 70. A combined SD is never just the average of the parts’ SDs; the combined-variance formula adds the between-group terms ${D1SQ}, ${D2SQ}. The other listed slips: scaling the variance by ${a} instead of ${sq(a)}, forgetting the −${XB2} of the shortcut, and stopping at the variance`,
    why: `${d1} = 60 − 64 = −4 and ${d2} = 70 − 64 = 6 put 30(64 + 16) + 20(36 + 36) in the numerator, not 30(64) + 20(36).`,
    say: null,
  },
  // pp. 1154, 1158, 1159
  {
    topic: 1,
    kind: 'shortcut',
    q: `∑ ${xi} = 40, ∑ ${XI2} = 375 and ${n} = 5. The variance in one line?`,
    a: `${fr('375', '5')} − 8<sup>2</sup> = 75 − 64 = 11: given the two sums, go straight to ${SIG2} = ${fr(`∑ ${XI2}`, n)} − ${XB2}. Two instant checks before committing: ${SIG2} ≥ 0 (a negative value means the two terms were subtracted in the wrong order) and ${SIG} ≤ the range`,
    why: `75 forgets to subtract ${XB2}; 64 reports ${XB2} alone.`,
    say: null,
  },

  // ── Topic 03 · Analysis of Frequency Distributions and Advanced Problem Types ──
  // pp. 1161, 1162, 1167
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the coefficient of variation, and when may it be used?',
    a: `${CVF}, the SD as a percentage of the mean: a pure number, so series in different units or on different scales compare directly; lower C.V. means more consistent, higher more variable. It needs ${XB}${NB}≠${NB}0, misleads when the mean is close to zero, and suits quantities measured from a true zero (heights, wages), not temperatures in °C`,
    why: 'A ₹10 swing matters enormously on a ₹50 item but is invisible on a ₹50,000 item.',
    say: 'Normalise to compare (C.V.), bookkeep to reverse (sums).',
  },
  // pp. 1162, 1165, 1167
  {
    topic: 2,
    kind: 'remember',
    q: 'When can two SDs be compared directly, and how is a mean recovered from a C.V.?',
    a: `When the means are equal: then the C.V. and ${SIG} give the same ranking, so compare ${SIG}. Otherwise compute each C.V. Reverse form: ${XB} = ${fr(SIG, 'C.V.')} × 100`,
    why: 'C.V. 25 % with SD 5 and C.V. 40 % with SD 8: both means are 20, and the second series is more variable.',
    say: null,
  },
  // pp. 1161, 1162, 1167
  {
    topic: 2,
    kind: 'remember',
    q: 'Which two totals drive every reverse problem?',
    a: `∑ ${xi} = ${NX} and ${MASTER}, from ${XB} = ${fr(`∑ ${xi}`, n)} and ${SIG2} = ${fr(`∑ ${XI2}`, n)} − ${XB2}. The mean is built from ∑ ${xi} and the variance from ∑ ${XI2}: track how those two totals change and the missing-observation and correction problems become bookkeeping`,
    why: `Mean 30 and SD 5 for 20 observations: ∑ ${xi} = 600 and ∑ ${XI2} = 20(25 + 900) = 18500.`,
    say: null,
  },
  // pp. 1163, 1164
  {
    topic: 2,
    kind: 'remember',
    q: 'The mean and the variance are given, and two observations are missing. How are they found?',
    a: `The mean gives ${a} + ${b}; the variance gives (${a} − ${XB})<sup>2</sup> + (${b} − ${XB})<sup>2</sup>: two equations for two unknowns. With <i>p</i> = ${a} − ${XB} and <i>q</i> = ${b} − ${XB}, (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + 2<i>pq</i> gives the product, and a quadratic gives both`,
    why: `Mean 6, variance 6.8, three values 2, 4, 9: ${a} + ${b} = 15, <i>p</i> + <i>q</i> = 3 and <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> = 5, so <i>pq</i> = 2, <i>p</i> and <i>q</i> are 1 and 2, and the values are 7 and 8.`,
    say: null,
  },
  // pp. 1162, 1163, 1164
  {
    topic: 2,
    kind: 'remember',
    q: 'How are the mean and the SD corrected when an observation was recorded wrongly?',
    a: `Recover the wrong totals ∑ ${xi} = ${NX} and ${MASTER}; repair both, −${w} + ${c} in the first and −${sq(w)} + ${sq(c)} in the second (${w} the wrong value, ${c} the correct one); then recompute ${XB} and ${SIG}. If a value was omitted rather than replaced, only + ${c} and + ${sq(c)} remain, and ${n} increases by 1`,
    why: `20 observations, mean 30, SD 5, with 50 recorded for 30: the totals become 580 and 18500 − 2500 + 900 = 16900, so ${XB} = 29 and ${SIG2} = 845 − 841 = 4, ${SIG} = 2.`,
    say: null,
  },
  // pp. 1162, 1163, 1166
  {
    topic: 2,
    kind: 'mixup',
    q: 'More consistent, or better?',
    a: 'Not the same: lower C.V. means steadier, not superior; a consistent low scorer is still a low scorer. Answer the question actually asked, consistency or performance',
    why: 'Arjun averages 50 runs with SD 10 (C.V. 20 %), Vikram 40 with SD 6 (15 %): Vikram is more consistent, Arjun the better bet to chase a steep total.',
    say: null,
  },
  // pp. 1157, 1166
  {
    topic: 2,
    kind: 'mistake',
    q: 'Two series with different means: does the larger SD mean the more variable series?',
    a: `Not necessarily: normalise with the C.V.; only when the means are equal may the SDs be compared directly. The other listed slips: repairing only ∑ ${xi} in a correction problem (a wrong value corrupts ∑ ${XI2} too), and feeding the variance into the C.V. formula, which uses the SD`,
    why: 'Bulbs A: mean 1200 h, SD 80 h; bulbs B: mean 1500 h, SD 90 h. C.V. 6.67 % against 6 %, so B is more consistent despite its larger SD.',
    say: null,
  },
  // p. 1166
  {
    topic: 2,
    kind: 'mistake',
    q: `Every observation is multiplied by a positive constant ${k}. Does the C.V. become ${k}${NB}C.V. or ${sq(k)}${NB}C.V.?`,
    a: `Neither: it is unchanged. ${SIG} and ${XB} both scale by ${k}, so their ratio does not move. ${k}${NB}C.V. or ${fr('C.V.', k)} tracks only the numerator or only the denominator; ${sq(k)}${NB}C.V. imports the variance’s ${sq(k)} rule, but the C.V. uses the SD`,
    why: 'The C.V. is dimensionless: if a “C.V.” carries units, the wrong thing was divided.',
    say: null,
  },
  // pp. 1166, 1167
  {
    topic: 2,
    kind: 'shortcut',
    q: 'The mean of 10 observations is 25, and a value recorded as 35 should be 15. The corrected mean at once?',
    a: `23: adjust the sum, then re-divide. 10 × 25 = 250, 250 − 35 + 15 = 230 and ${fr('230', '10')} = 23. For every reverse problem write ∑ ${xi} = ${NX} and ${MASTER} first; a corrected variance must stay ≥ 0`,
    why: '25 assumes the mean is unaffected; 27 adds the difference instead of subtracting it.',
    say: 'The safe move is always to adjust the sum, then re-divide.',
  },

  // ── Additional topic A · Mean Deviation about the Median of a Discrete Frequency Distribution ──
  // pp. 1169, 1171, 1179
  {
    topic: 3,
    kind: 'remember',
    q: 'How is the median of a discrete frequency distribution found?',
    a: `By position, never by formula: sort the ${xi}, build the c.f. column (it gives the serial positions each value occupies) and set ${N} = ∑ ${fi}. ${N} odd: the (${N12})-th observation, the first ${xi} whose c.f. is ≥${NB}${N12}. ${N} even: the mean of the (${N2})-th and (${N2} + 1)-th observations. The median is always a data value or the midpoint of two adjacent ones`,
    why: `Days absent 4, 6, 8, 10, 12 for 3, 5, 8, 4, 5 students: c.f. 3, 8, 16, 20, 25, and the 13th observation is in positions 9 to 16, so ${M} = 8.`,
    say: `The median is a positional statistic on all ${N} observations, not on the ${k} distinct values.`,
  },
  // pp. 1169, 1172
  {
    topic: 3,
    kind: 'remember',
    q: 'N is even. When must two different values be averaged?',
    a: `When some c.f. equals ${N2} exactly: then the ${N2}-th and (${N2} + 1)-th observations are different values. If the c.f. leaps straight past ${N2} (the previous c.f. below it, this one above), both middle observations are the same ${xi}, and that is the median`,
    why: `${xi} = 5, 10, 15, 20, 25 with ${fi} = 4, 6, 5, 9, 6: the c.f. 15 equals ${N2}, so ${M} = ${fr('15 + 20', '2')} = 17.5.`,
    say: null,
  },
  // pp. 1169, 1171
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the mean deviation about the median of a discrete distribution, and what checks it?',
    a: `M.D.(${M}) = ${MDF(M)}, its coefficient ${fr(`M.D.(${M})`, M)}. Checks: M.D.(${M}) ≤ M.D.(${XB}), since the median minimises ∑ ${fi}${dev(a)}; M.D.(${M}) ≤ Range, since every ${dev(M)} is at most the range; and the units are the data’s`,
    why: `The absences give M.D.(${M}) = ${fr('50', '25')} = 2 days, against 2.0672 days about ${XB} = 8.24; the coefficient is ${fr('2', '8')} = 0.25.`,
    say: null,
  },
  // p. 1173
  {
    topic: 3,
    kind: 'mixup',
    q: 'Is the median the middle of the list of distinct values?',
    a: `No: it is the middle of all ${N} observations, so the frequencies decide it. In the absences table the middle of 4, 6, 8, 10, 12 is also 8, but only by coincidence: the values are evenly spread, the frequencies 3, 5, 8, 4, 5 are not symmetric`,
    why: `For ${xi} = 5, 10, 15, 20, 25 with ${fi} = 4, 6, 5, 9, 6 the middle of the value list is 15, while the true median is 17.5.`,
    say: null,
  },
  // pp. 1168, 1173
  {
    topic: 3,
    kind: 'mistake',
    q: `Can the grouped formula ${MEDIAN} give the median of a discrete table?`,
    a: `No: a discrete table has no class boundaries ${ELL} and no width ${h}, so the formula is not merely inaccurate there, it is undefined. Read the median off the c.f. column; and once the question says “about the median”, the mean is irrelevant`,
    why: 'There is no interpolation in a discrete distribution: the c.f. column is a positional index into the sorted data.',
    say: null,
  },
  // pp. 1169, 1173
  {
    topic: 3,
    kind: 'mistake',
    q: 'For the even table with N = 30, is the M.D. about the median 175 divided by 5, that is 35?',
    a: `No: ${fr('175', '30')} = ${fr('35', '6')} ≈ 5.83. Divide by ${N} = ∑ ${fi}, never by ${k}, the number of distinct values: 35 is larger than the whole range of 20, which the range check catches instantly`,
    why: `Here ${N} = 30 observations and ${k} = 5 distinct values.`,
    say: `Divide by ${N}, not ${k}.`,
  },
  // p. 1172
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A c.f. equals N/2 exactly. Does the choice of median between the two middle values change the M.D.?',
    a: `No: with exactly ${N2} observations at or below the lower middle value and ${N2} at or above the upper one, ∑ ${fi}${dev(a)} is the same for every ${a} between them (moving ${a} up raises half the distances and lowers the other half equally). The conventional midpoint costs nothing`,
    why: `For the table with c.f. 15 = ${N2}: at ${a} = 15 the sum is 40 + 30 + 0 + 45 + 60 = 175, as at 17.5.`,
    say: null,
  },

  // ── Additional topic B · Variance of Ungrouped Data about an Assumed Mean ──
  // pp. 1174, 1175, 1179
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the assumed-mean identity for ungrouped data?',
    a: `For any real constant ${A}: ${XB} = ${A} + ${fr('1', n)} ${DEVA(A)} and ${SIG2} = ${fr('1', n)} ${DEVA2(A)} − (${XB} − ${A})<sup>2</sup>. ${A} need not be near the data, a data value or the mean: choose whatever makes the arithmetic clean. ${A} = 0 gives the shortcut ${fr('1', n)} ∑ ${XI2} − ${XB2}; ${A} = ${XB} gives the definition`,
    why: `${n} = 9, ${DEVA('5')} = 9 and ${DEVA2('5')} = 45: ${XB} = 5 + 1 = 6 and ${SIG2} = 5 − 1 = 4, so ${SIG} = 2.`,
    say: 'The identity is exact, not approximate.',
  },
  // pp. 1174, 1175
  {
    topic: 4,
    kind: 'remember',
    q: 'Why does the identity hold?',
    a: `With ${di} = ${xi} − ${A}, a change of origin with no scaling: averaging gives ${XB} = ${DB} + ${A}, and ${xi} − ${XB} = ${di} − ${DB}, so the deviations from the mean, and with them the variance, are untouched by the shift. The ordinary shortcut on the ${di} then gives ${SIG2} = ${fr('1', n)} ∑ ${di}<sup>2</sup> − ${DB}<sup>2</sup>, with ${DB} = ${XB} − ${A}`,
    why: `The frequency version is the same with ${fi} weights and ${N} = ∑ ${fi}; with ${di} = ${fr(`${xi} − ${A}`, h)} and ${sq(h)} pulled out it is the step-deviation form.`,
    say: null,
  },
  // p. 1175
  {
    topic: 4,
    kind: 'remember',
    q: 'What do the mean and the variance do under y = ax + b?',
    a: `${YB} = <i>a</i>${XB} + ${b}, ${SY2} = ${sq(a)}${SX2} and ${SY} = |${a}|${SX}: memorise the pair together`,
    why: `${DEVA('50')} = −100 and ${DEVA2('50')} = 10000 for 100 values: ${XB} = 49 and ${SIG2} = 99; for 3${xi} + 7, ${YB} = 154 and the variance is 891.`,
    say: `The mean feels both ${a} and ${b}; the variance feels only ${a}, and feels it squared.`,
  },
  // pp. 1178, 1179
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the variance of an arithmetic progression of n terms?',
    a: `${fr(`${sq(d)}(${sq(n)} − 1)`, '12')}, ${d} the common difference. For 1, 2, …, ${n}: ${XB} = ${fr(`${n} + 1`, '2')} and ∑ ${XI2} = ${fr(`${n}(${n} + 1)(2${n} + 1)`, '6')} give ${fr(`${sq(n)} − 1`, '12')}; the AP ${a}, ${a} + ${d}, … is the image (${a} − ${d}) + ${d}${NB}<i>i</i> of that list, so the shift adds nothing and ${d} enters squared. The first ${n} even numbers and the first ${n} odd numbers both give ${fr(`${sq(n)} − 1`, '3')}`,
    why: `First 10 odd numbers: ${fr('4(100 − 1)', '12')} = 33, and directly ${fr('330', '10')} = 33.`,
    say: null,
  },
  // p. 1178
  {
    topic: 4,
    kind: 'mixup',
    q: 'The square of the sum, or the sum of the squares: which is the correction term?',
    a: `The correction is ${DB}<sup>2</sup> = (${fr('1', n)} ${DEVA(A)})<sup>2</sup>: divide, then square. (${DEVA(A)})<sup>2</sup> and ${DEVA2(A)} are different numbers`,
    why: `With ${DEVA('5')} = 9 and ${DEVA2('5')} = 45, the first is 81 and the second 45.`,
    say: null,
  },
  // pp. 1176, 1178
  {
    topic: 4,
    kind: 'mistake',
    q: `${n} = 9, ${DEVA('5')} = 9 and ${DEVA2('5')} = 45. Is ${SIG2} = ${fr('45', '9')} = 5?`,
    a: `No: 4. ${fr('1', n)} ${DEVA2(A)} is the mean square deviation about ${A}, and it overstates the variance unless ${A} = ${XB}; skipping the correction (${XB} − ${A})<sup>2</sup> = 1 is the most common wrong answer, and exactly what a distractor offers`,
    why: 'A negative variance means the terms were subtracted in the wrong order, or the first-order sum was squared where the second-order one was needed.',
    say: null,
  },
  // pp. 1145, 1178
  {
    topic: 4,
    kind: 'mistake',
    q: `Under ${y} = <i>ax</i> + ${b} with ${a} negative, is ${SY} = ${a}${SX}?`,
    a: `No: ${SY} = |${a}|${SX}, the positive root. A negative multiplier never makes the spread negative: the spread grows when |${a}|${NB}>${NB}1 and shrinks when |${a}|${NB}< 1, whatever the sign of ${a}`,
    why: `For −3${xi} − 7 the spread is exactly that of 3${xi} − 7: only |${a}| matters.`,
    say: null,
  },
  // pp. 1175, 1177, 1179
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Two deviation sums about different points, and n unknown: how is n found?',
    a: `Subtract them: ${DEVA(A1)} − ${DEVA(A2)} = (${A2} − ${A1})${n}, since every term contributes the same constant; the data cancel and only ${n} is left. Then run the identity as usual`,
    why: `${DEVA('2')} = 10 and ${DEVA('5')} = −5: 15 = 3${n}, ${n} = 5, ${XB} = 2 + 2 = 4 and, with ${DEVA2('2')} = 60, ${SIG2} = 12 − 4 = 8.`,
    say: null,
  },

  // ── Additional topic C · Inclusive (Discontinuous) Class Intervals and True Class Boundaries ──
  // pp. 1180, 1181, 1187
  {
    topic: 5,
    kind: 'remember',
    q: 'What is an inclusive class table, and what are its true class boundaries?',
    a: `Classes with gaps between them (16–20, 21–25, 26–30), both limits belonging to the class, because the variable was recorded in whole units while the quantity is continuous. With the gap ${g} = (lower limit of a class) − (upper limit of the previous class) and ${c} = ${fr(g, '2')}: lower boundary = lower limit − ${c}, upper boundary = upper limit + ${c}. The gap must be the same between every adjacent pair`,
    why: 'Ages 16–20 become 15.5–20.5: someone 20 years and 7 months old is recorded as 20, so the class really runs up to 20.5.',
    say: 'Stretch the edges, not the centre.',
  },
  // pp. 1181, 1185, 1187
  {
    topic: 5,
    kind: 'remember',
    q: 'Which quantities does the boundary correction leave unchanged, and why?',
    a: `Every class mid-point: ${fr(`(${l} − ${c}) + (${u} + ${c})`, '2')} = ${fr(`${l} + ${u}`, '2')}, the −${c} and the +${c} cancelling. So the mean, the variance, the SD, the C.V. and the mean deviation about the mean, all built from mid-points, are identical with or without the correction`,
    why: `Scores 1–10, …, 41–50 with frequencies 4, 10, 20, 12, 4: ${XB} = ${fr('1295', '50')} = 25.9 and ${SIG2} = 107.84 on either convention.`,
    say: 'The correction leaves every class mid-point unchanged.',
  },
  // pp. 1181, 1182, 1185, 1187
  {
    topic: 5,
    kind: 'remember',
    q: 'What does the correction change?',
    a: `The range, defined on boundaries: (<i>u</i><sub><i>k</i></sub> + ${c}) − (<i>l</i><sub>1</sub> − ${c}) = <i>u</i><sub><i>k</i></sub> − <i>l</i><sub>1</sub> + 2${c}. And the interpolated median, since ${ELL} drops by ${c} and the width grows from ${u} − ${l} to ${u} − ${l} + 2${c}; hence also the mean deviation about the median. The median class itself never moves: no frequency is touched`,
    why: `Classes 10–19, …, 50–59: range 59.5 − 9.5 = 50, width 10 and ${M} = 29.5 + ${fr('20 − 14', '15')} × 10 = 33.5.`,
    say: null,
  },
  // pp. 1182, 1184, 1187
  {
    topic: 5,
    kind: 'remember',
    q: 'How far does the correction move the median?',
    a: `${M} − ${M}<sub>naive</sub> = 2${c}(${t} − ${HALF}), with ${t} the position fraction inside the median class: zero exactly when ${t} = ${HALF} (the median at the class centre, the invariant mid-point), and never more than ${c} in size. Small, but for ${g} = 1 enough to separate two printed options`,
    why: `Ages 16–20, …, 51–55: ${t} = ${fr('50 − 37', '26')} = ${HALF}, so ignoring the correction also gives 38, by luck only.`,
    say: null,
  },
  // pp. 1181, 1186
  {
    topic: 5,
    kind: 'mixup',
    q: 'Is the correction factor always 0.5?',
    a: `No: ${c} = ${fr(g, '2')}, half the measured gap. Whole-number data gives ${g} = 1 and ${c} = 0.5; data recorded to one decimal place gives ${g} = 0.1 and ${c} = 0.05`,
    why: '40.0–44.9, 45.0–49.9, 50.0–54.9 become 39.95–44.95, 44.95–49.95, 49.95–54.95, each of width 5.',
    say: null,
  },
  // pp. 1184, 1187
  {
    topic: 5,
    kind: 'mistake',
    q: `Printed median class 36–40, true 35.5–40.5: is it enough to drop ${ELL} to 35.5 and keep ${h} = 4?`,
    a: `No: ${h} grows too, to ${u} − ${l} + 2${c} = 5, because the class was stretched at both ends. Half the correction can be worse than none, since it breaks the ${t} = ${HALF} coincidence. The other listed slips: “correcting” the mid-points, recomputing the mean and variance “to be safe”, and thinking the median class moves`,
    why: `With ${ELL} = 35.5 and ${h} = 5, ${M} = 35.5 + ${fr('13', '26')} × 5 = 38 years.`,
    say: null,
  },
  // pp. 1182, 1186
  {
    topic: 5,
    kind: 'mistake',
    q: 'Classes 0–10, 10–20, 20–30: subtract 0.5 from each lower limit?',
    a: `No: the table is already continuous (${g} = 0), and the “correction” produces overlapping classes and a wrong median. Test first: the lower limit of a class minus the upper limit of the previous one is the gap ${g}; zero means do nothing`,
    why: 'Running the correction on an already-continuous table manufactures a wrong answer out of a right table.',
    say: null,
  },
  // pp. 1182, 1186, 1187
  {
    topic: 5,
    kind: 'shortcut',
    q: 'An inclusive table, and a question on the mean, variance, SD or C.V.: correct the boundaries?',
    a: `No: build the mid-points ${fr(`<i>l</i><sub><i>i</i></sub> + <i>u</i><sub><i>i</i></sub>`, '2')} straight from the printed limits and proceed as for any frequency table; the same for the mean deviation about the mean. Correct only for the median, the mean deviation about the median and the range, the only quantities in this chapter that read boundaries`,
    why: 'Diameters 33–36, …, 49–52: mid-points 34.5, 38.5, …, 50.5 either way, a mean of 43.5 mm and an SD of about 5.55 mm.',
    say: null,
  },
  // pp. 1182, 1185
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Treating the printed limits as boundaries gives 25.95; the corrected median is 26. How do you check the gap at once?',
    a: `With the shift formula: ${t} = ${fr('11', '20')} and ${c} = 0.5 give 2(0.5)(${fr('11', '20')} − ${HALF}) = ${fr('1', '20')} = 0.05, and 26 − 25.95 = 0.05. The naive 25.95 and M.D. 7.762 are exactly the distractors printed beside 26 and 7.78`,
    why: 'The mean, 25.9, is the same on either convention: a mean or variance that changes under the correction is an arithmetic error.',
    say: null,
  },
];
