import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13, Topics 01–03, pp. 1139–1167 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's Subtopic 01
 * Measures of Dispersion and Mean Deviation (pp. 1139–1150), Subtopic 02
 * Variance and Standard Deviation (pp. 1151–1160) and Subtopic 03 Analysis of
 * Frequency Distributions & Advanced Problem Types (pp. 1161–1167). Each topic
 * opens with its "Exam Relevance:" box as a part of its own, then is split at
 * its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * Figures: 13.1 (caption p. 1139, drawn p. 1140) in Topic 01's Concept
 * intuition; 13.2 (caption p. 1143, drawn p. 1144) after Procedure (B); 13.3
 * (caption p. 1151, drawn p. 1152) in Topic 02's Concept intuition. No
 * unnumbered drawings. The frequency tables printed inside worked examples are
 * written as one labelled line per column. Every fraction is stacked (<frac>);
 * no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const n = '<i>n</i>';
const N = '<i>N</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const c = '<i>c</i>';
const h = '<i>h</i>';
const k = '<i>k</i>';
const w = '<i>w</i>';
const f = '<i>f</i>';
const A = '<i>A</i>';
const C = '<i>C</i>';
const M = '<i>M</i>';
const ELL = '<i>ℓ</i>';
const SIG = '<i>σ</i>';
const XB = '<i>x̄</i>';
const sq = (s: string) => `${s}<sup>2</sup>`;
const SIG2 = sq(SIG);
const XB2 = sq(XB);
const xi = '<i>x</i><sub><i>i</i></sub>';
const fi = '<i>f</i><sub><i>i</i></sub>';
const di = '<i>d</i><sub><i>i</i></sub>';
const XI2 = '<i>x</i><sub><i>i</i></sub><sup>2</sup>';
const DI2 = '<i>d</i><sub><i>i</i></sub><sup>2</sup>';
const FX = `${fi}${xi}`;
const FX2 = `${fi}${XI2}`;
const FD = `${fi}${di}`;
const FD2 = `${fi}${DI2}`;
const XMAX = '<i>x</i><sub>max</sub>';
const XMIN = '<i>x</i><sub>min</sub>';
const SUMN = '∑<sub><i>i</i>=1</sub><sup><i>n</i></sup>';
const SUMI = '∑<sub><i>i</i></sub>';
/** |x_i − c| */
const dev = (s: string) => `|\u2060${xi}${NB}−${NB}${s}|`;
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
const COMB = `${SIG2} = ${fr(`${n1}(${S1SQ} + ${D1SQ}) + ${n2}(${S2SQ} + ${D2SQ})`, `${n1} + ${n2}`)}`;
const CVF = `C.V. = ${fr(SIG, XB)} × 100`;
const COEFF_RANGE = fr(`${XMAX} − ${XMIN}`, `${XMAX} + ${XMIN}`);
const MEDIAN = `${M} = ${ELL} + (${fr(N, '2')} − ${C}) × ${fr(h, f)}`;
const SHORTCUT = `${SIG2} = ${fr('1', n)} ∑ ${XI2} − ${XB2}`;
const SDSTEP = `${SIG2} = ${sq(h)} [${fr(`∑ ${FD2}`, N)} − (${fr(`∑ ${FD}`, N)})<sup>2</sup>]`;
const MASTER2 = `∑ ${XI2} = ${n}(${SIG2} + ${XB2})`;
const xsup = (s: string) => `<i>x</i><sub><i>i</i></sub><sup>${s}</sup>`;
const AXB = `${xi} ↦ <i>ax</i><sub><i>i</i></sub> + ${b}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · pp. 1139–1150 ────────────────
  {
    n: '01',
    title: 'Measures of Dispersion and Mean Deviation',
    kalam: 'Dispersion is just a fair way of summarising “how far, on average, do the dots live from home?”',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Statistics carries roughly one guaranteed question in <b>CBSE Boards</b> (a 3–5 mark computation of mean deviation or variance from a frequency table) ${ESTIMATE}. In <b>JEE Main</b> it surfaces as a single quick MCQ, usually on mean deviation, variance, or the effect of a transformation on a measure of spread ${ESTIMATE}. <b>JEE Advanced</b> almost never asks mean deviation as a stand-alone numerical, but the idea that the median minimises absolute deviation shows up inside optimisation problems ${ESTIMATE}, so the concept matters more than the formula.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Imagine two vegetable vendors in your local mandi, Ramesh and Suresh. Over a week you note the price of one kilo of tomatoes at each stall. Ramesh quotes ₹28, ₹30, ₹29, ₹31, ₹30. Suresh quotes ₹14, ₹46, ₹12, ₹48, ₹28. Punch both into a calculator and you will find the same average: ₹29.6 each. Yet nobody would call these vendors equivalent. Ramesh is boringly reliable; Suresh is a gamble. The average, the centre of the data, has completely hidden the thing that actually distinguishes them: how scattered the prices are around that centre.',
      },
      {
        t: 'p',
        html: 'That scatter is what <b>dispersion</b> measures. Central tendency (mean, median, mode) tells you where a data set sits; dispersion tells you how tightly or loosely the observations huddle around that location. Two data sets can share a mean and look nothing alike, and the whole job of this topic is to attach a single number to “how spread out is this?”',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture each data set laid out as dots on a number line. Ramesh’s dots cluster into a tight little knot. Suresh’s dots fling themselves to the far corners. Dispersion is just a fair way of summarising “how far, on average, do the dots live from home?”',
      },
      { t: 'fig', id: 'm11-13-fig-13.1' },
      {
        t: 'p',
        html: 'There is a hierarchy of ways to capture this. The crudest is the <b>range</b>: just the gap between the largest and smallest observation. It is instant to compute and genuinely useful as a first glance (a weather report saying “today’s temperature ranged from 22°C to 41°C” tells you something real). But the range is a bit of a drama queen: it listens only to the two most extreme values and ignores everything in between. One freak observation and the range lies about the whole set.',
      },
      {
        t: 'p',
        html: 'A smarter idea is to measure, for every observation, how far it sits from a central value, and then average those distances. That is the <b>mean deviation</b>. The subtle move here is the word “distance.” A value sitting 5 units below the mean is just as “spread out” as one sitting 5 units above it, so we must throw away the signs and take <b>absolute values</b> of the deviations. If we did not, the deviations from the mean would politely cancel to exactly zero every single time (that is a defining property of the mean), and our spread measure would uselessly report 0 for every data set on earth.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Mean deviation has two honest weaknesses you should carry in your head. First, the absolute-value sign makes it mathematically clumsy: you cannot differentiate |<i>x</i>| cleanly at zero, so mean deviation refuses to slot into further algebra (this is precisely why the next topic abandons it in favour of variance and standard deviation, which square the deviations instead). Second, mean deviation is only as meaningful as the central value you anchor it to; the same data set has a different mean deviation about its mean than about its median. And as we will prove later, the deviation is genuinely smallest when taken about the <b>median</b>, a fact that quietly powers a lot of clever exam shortcuts.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Range</b> of a data set:' },
      {
        t: 'formula',
        kicker: 'Range',
        main: `Range = ${XMAX} − ${XMIN}`,
        legend: [`${XMAX} = the largest observation`, `${XMIN} = the smallest observation`],
        note: null,
      },
      {
        t: 'p',
        html: 'For a grouped (continuous) distribution, the range is taken as the upper boundary of the highest class minus the lower boundary of the lowest class.',
      },
      {
        t: 'p',
        html: '<b>Coefficient of range</b> (a unit-free way to compare spread across data sets of different scales):',
      },
      {
        t: 'formula',
        kicker: 'Coefficient of range',
        main: `Coefficient of range = ${COEFF_RANGE}`,
        legend: [`${XMAX} = the largest observation`, `${XMIN} = the smallest observation`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Mean deviation about a central value</b> ${a} (where ${a} is the mean ${XB}, the median ${M}, or the mode):<br><br>For ungrouped data <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, …, <i>x</i><sub><i>n</i></sub>:`,
      },
      {
        t: 'formula',
        kicker: 'Mean deviation (ungrouped data)',
        main: `M.D.(${a}) = ${fr('1', n)} ${SUMN} ${dev(a)}`,
        legend: [`${a} = the central value (mean, median or mode)`, `${xi} = the <i>i</i>-th observation`, `${n} = the number of observations`],
        note: null,
      },
      {
        t: 'p',
        html: `For a frequency distribution (discrete data, or continuous data using class mid-points ${xi}) with frequencies ${fi} and ${N} = ∑ ${fi}:`,
      },
      {
        t: 'formula',
        kicker: 'Mean deviation (frequency distribution)',
        main: `M.D.(${a}) = ${fr('1', N)} ${SUMN} ${fi}${NB}${dev(a)}`,
        legend: [`${a} = the central value (mean, median or mode)`, `${xi} = the <i>i</i>-th value (the class mid-point for continuous data)`, `${fi} = the frequency of ${xi}`, `${n} = the number of values or classes`, `${N} = the total frequency (∑ ${fi})`],
        note: null,
      },
      { t: 'p', html: '<b>Coefficient of mean deviation</b> (again, dimensionless):' },
      {
        t: 'formula',
        kicker: 'Coefficient of mean deviation',
        main: `Coefficient of M.D. = ${fr(`M.D.(${a})`, a)}`,
        legend: [`${a} = the central value (mean, median or mode)`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Key property (memorise this):</b><br>${SUMI} ${dev(a)} is minimum when ${a} = median ⇒ M.D. is least about the median.`,
      },
      {
        t: 'p',
        html: `<b>Symbol meanings:</b> ${xi} = the <i>i</i>-th observation; ${n} = number of observations (ungrouped); ${fi} = frequency of ${xi}; ${N} = ∑ ${fi} = total frequency; ${XB} = mean; ${M} = median.`,
      },
      {
        t: 'p',
        html: `<b>Units note (the statistics analogue of dimensional analysis):</b> Range and every mean deviation carry the <b>same units as the raw data</b>: if the observations are in rupees, marks, runs, or centimetres, so is the spread. The coefficient of range and the coefficient of mean deviation are <b>pure numbers (dimensionless)</b>, because they divide one same-unit quantity by another. A quick sanity check follows: when ${a} lies between the smallest and largest observations (as the mean, the median and the mode always do), each ${dev(a)} ≤ Range, so the mean deviation can never exceed the range. If your M.D. comes out larger than the range, you have made an arithmetic slip.`,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'Mean deviation is computed, not derived, so here is the rigorous step-by-step framework, with the reason behind each step.',
      },
      {
        t: 'proc',
        title: '(A) Mean deviation of ungrouped data about the mean',
        steps: [
          `<b>Find the mean</b> ${XB} = ${fr('1', n)} ∑ ${xi}. <b>Why:</b> this is the anchor: the central value all distances are measured from.`,
          `<b>Find each absolute deviation</b> ${dev(XB)}. <b>Why:</b> the absolute value converts a signed “how far above/below” into an unsigned “how far,” so that values on opposite sides of the mean reinforce rather than cancel.`,
          `<b>Sum the absolute deviations</b>, ∑ ${dev(XB)}. <b>Why:</b> we want total scatter before averaging it out.`,
          `<b>Divide by</b> ${n}<b>.</b> <b>Why:</b> averaging makes the measure comparable between data sets of different sizes: a data set of 100 points is not “more spread out” merely because it has more terms.`,
        ],
      },
      {
        t: 'p',
        html: `<b>(B) Mean deviation of ungrouped data about the median.</b> The procedure is identical, except Step 1 finds the <b>median</b> (sort the data, then take the middle value for odd ${n}, or the average of the two middle values for even ${n}). <b>Why bother?</b> Because the median minimises the total absolute deviation: measuring about it gives the smallest, most “honest” mean deviation the data can offer.`,
      },
      { t: 'fig', id: 'm11-13-fig-13.2' },
      {
        t: 'proc',
        title: '(C) Mean deviation of a frequency distribution',
        steps: [
          `For a <b>continuous</b> distribution, first replace each class by its <b>mid-point</b> ${xi} = ${fr('lower limit + upper limit', '2')}. <b>Why:</b> we need a single representative value per class to stand in for every observation in it. (For a discrete distribution, the ${xi} are already given.)`,
          `Compute the mean ${XB} = ${fr(`∑ ${FX}`, N)}, where ${N} = ∑ ${fi}.`,
          `Form the column ${dev(XB)}, then the column ${fi}${dev(XB)}. <b>Why the</b> ${fi} <b>weighting:</b> an observation that occurs ten times must contribute its distance ten times.`,
          `Mean deviation = ${fr(`∑ ${fi}${dev(XB)}`, N)}. <b>Critical:</b> divide by ${N} = ∑ ${fi}, <b>not</b> by the number of distinct classes.`,
        ],
      },
      {
        t: 'p',
        html: `When the central value is the <b>median</b> of grouped data, you cannot read it off directly: you must locate the median class first.`,
      },
      {
        t: 'proc',
        title: '(D) Mean deviation about the median of a continuous distribution',
        steps: [
          'Build the <b>cumulative frequency</b> (c.f.) column.',
          `The <b>median class</b> is the first class whose c.f. reaches ${fr(N, '2')}.`,
          `Compute the median by interpolation:<br>${MEDIAN},<br>where ${ELL} = lower boundary of the median class, ${C} = c.f. of the class just before it, ${f} = frequency of the median class, ${h} = its width. <b>Why interpolate:</b> we assume the observations are spread evenly across the median class and step in proportionally to reach the ${fr(N, '2')}-th value.`,
          `Then proceed exactly as in (C), using ${dev(M)} in place of ${dev(XB)}.`,
        ],
      },
      {
        t: 'formula',
        kicker: 'Median of grouped data',
        main: `${MEDIAN}<br>Median class: the first class whose c.f. reaches ${fr(N, '2')}`,
        legend: [`${ELL} = the lower boundary of the median class`, `${C} = the c.f. of the class just before it`, `${f} = the frequency of the median class`, `${h} = the width of the median class`, `${N} = the total frequency (∑ ${fi})`],
        note: null,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A student’s marks in five class tests (out of 40) are 32, 28, 36, 24, 30. Find the range and the mean deviation about the mean.',
        steps: [
          `<b>Given:</b> observations 32, 28, 36, 24, 30; ${n} = 5.`,
          `Range = ${XMAX} − ${XMIN} = 36 − 24 = <b>12</b> marks.`,
          `Mean: ${XB} = ${fr('32 + 28 + 36 + 24 + 30', '5')} = ${fr('150', '5')} = 30.`,
          `Absolute deviations: |32${NB}−${NB}30| = 2, |28${NB}−${NB}30| = 2, |36${NB}−${NB}30| = 6, |24${NB}−${NB}30| = 6, |30${NB}−${NB}30| = 0.`,
          `M.D.(${XB}) = ${fr('2 + 2 + 6 + 6 + 0', '5')} = ${fr('16', '5')} = <b>3.2</b> marks.`,
          '<b>Presentation check:</b> answer carries the unit “marks,” and 3.2 ≤ 12, so it is consistent with the range.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Speed / Shortcut',
        q: `In a football season a striker scored the following number of goals per match:<br>Goals ${xi}: 0, 1, 2, 3, 4<br>Matches ${fi}: 4, 6, 8, 5, 2<br>Find the mean deviation of the number of goals about the mean.`,
        steps: [
          `Work the table in one sweep. ${N} = 4 + 6 + 8 + 5 + 2 = 25.`,
          `∑ ${FX} = (0)(4) + (1)(6) + (2)(8) + (3)(5) + (4)(2)<br>= 0 + 6 + 16 + 15 + 8 = 45.`,
          `Mean ${XB} = ${fr('45', '25')} = 1.8.`,
          `∑ ${fi}${dev('1.8')} = 4(1.8) + 6(0.8) + 8(0.2) + 5(1.2) + 2(2.2)<br>= 7.2 + 4.8 + 1.6 + 6.0 + 4.4 = 24.0.`,
          `M.D. = ${fr('24.0', '25')} = <b>0.96</b> goals.`,
          `<b>The trap to dodge fast:</b> the table has five rows, and under time pressure students divide 24.0 by 5 and write 4.8. The divisor is ${N} = ∑ ${fi} = 25, the number of matches, not the number of distinct goal-counts. Train your eye to grab ${N} from the frequency column total, never from the row count.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Multi-concept',
        q: `A data set of monthly electricity bills (in ₹) has range 40 and mean deviation about the mean equal to 12. The provider revises every bill by the rule <i>y</i><sub><i>i</i></sub> = 3${xi} − 7 (a 3× tariff hike minus a ₹7 fixed rebate). Find the new range and the new mean deviation about the mean.`,
        steps: [
          `This links <b>dispersion</b> with the <b>behaviour of a measure under a linear transformation</b> ${AXB}.`,
          `A transformation shifts and scales. The shift (${b} = −7) moves every observation by the same amount, so all the gaps between observations are untouched: <b>adding a constant cannot change spread.</b> The scale factor (${a} = 3) stretches every gap by |${a}|. Both range and mean deviation are built purely out of gaps, so each is multiplied by |${a}| and is blind to ${b}:<br>Range<sub>new</sub> = |3| × 40 = <b>120</b>,<br>M.D.<sub>new</sub> = |3| × 12 = <b>36</b>.`,
          `(Had the rule been <i>y</i><sub><i>i</i></sub> = −3${xi} − 7, the answers would be identical: only |${a}| matters, because flipping a data set about a point does not change how spread out it is.)`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `For the observations 7, 11, 13, 16, 20, 24, consider the function <i>S</i>(${a}) = ${SUMI} ${dev(a)}. Prove that <i>S</i>(${a}) attains its minimum at the median, find the minimum value, and identify every value of ${a} that achieves it.`,
        steps: [
          `Sort (already sorted): 7, 11, 13, 16, 20, 24, with ${n} = 6 even.`,
          `<b>The pairing argument.</b> Pair the observations symmetrically from the outside in: (7,${NB}24), (11,${NB}20), (13,${NB}16). Take any point ${a} that lies <b>inside</b> an outer pair, say between 7 and 24. The sum of that pair’s two distances to ${a} is<br>|${a}${NB}−${NB}7| + |24${NB}−${NB}${a}| = (${a} − 7) + (24 − ${a}) = 17,<br>a constant: wherever ${a} sits between them, the two distances trade off exactly. The same holds for each pair, as long as ${a} lies inside all three, i.e. as long as ${a} ∈ [13,${NB}16], the innermost pair. Within that interval:<br><i>S</i>(${a}) = 17<sub>(7,${NB}24)</sub> + 9<sub>(11,${NB}20)</sub> + 3<sub>(13,${NB}16)</sub> = <b>29</b>.`,
          `The moment ${a} leaves [13,${NB}16], it falls outside the innermost pair, and that pair’s contribution starts to grow (a gain on one side no longer cancels), so <i>S</i>(${a}) strictly increases. Hence <i>S</i> is minimised, with value 29, for <b>every</b> ${a} ∈ [13,${NB}16]: the entire interval between the two middle observations. The conventional median ${M} = ${fr('13 + 16', '2')} = 14.5 sits in this interval, confirming M.D.(${M})<sub>min</sub> = ${fr('29', '6')} ≈ <b>4.83</b>.`,
          `<b>The deep takeaway:</b> the median minimises absolute deviation because of this outside-in cancellation. For an even-sized data set the minimiser is not a single point but the whole median interval: a subtlety worth a mark if an Advanced problem asks “for how many values of ${a}…” (answer: infinitely many).`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level: Continuous distribution, M.D. about mean',
        q: `The daily wages (in ₹) of 40 workers are distributed as below. Find the mean deviation about the mean.<br>Wages (₹): 100–200, 200–300, 300–400, 400–500, 500–600<br>Workers ${fi}: 6, 10, 14, 8, 2`,
        steps: [
          `Replace each class by its mid-point ${xi}, then build the table. ${N} = 40.`,
          `${xi}: 150, 250, 350, 450, 550<br>${fi}: 6, 10, 14, 8, 2 (total <b>40</b>)<br>${FX}: 900, 2500, 4900, 3600, 1100 (total <b>13000</b>)<br>${dev(XB)}: 175, 75, 25, 125, 225<br>${fi}${dev(XB)}: 1050, 750, 350, 1000, 450 (total <b>3600</b>)`,
          `${XB} = ${fr('13000', '40')} = 325. Then<br>M.D.(${XB}) = ${fr(`∑ ${fi}${dev(XB)}`, N)} = ${fr('3600', '40')} = <b>90</b>.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Continuous distribution, M.D. about median',
        q: `The marks of 40 students are grouped below. Find the mean deviation about the median.<br>Marks: 0–10, 10–20, 20–30, 30–40, 40–50<br>Students ${fi}: 7, 8, 10, 9, 6`,
        steps: [
          `<b>Step 1: locate the median class.</b> Cumulative frequencies: 7, 15, 25, 34, 40. Here ${fr(N, '2')} = 20; the first c.f. to reach 20 is 25, so the <b>median class is 20–30</b>.`,
          `<b>Step 2: interpolate the median.</b> With ${ELL} = 20, ${C} = 15 (c.f. before), ${f} = 10, ${h} = 10:<br>${M} = 20 + ${fr('20 − 15', '10')} × 10 = 20 + 5 = 25.`,
          `<b>Step 3: mean deviation about</b> ${M} = 25 (mid-points 5, 15, 25, 35, 45):<br>${xi}: 5, 15, 25, 35, 45<br>${fi}: 7, 8, 10, 9, 6 (total <b>40</b>)<br>${dev('25')}: 20, 10, 0, 10, 20<br>${fi}${dev('25')}: 140, 80, 0, 90, 120 (total <b>430</b>)`,
          `M.D.(${M}) = ${fr('430', '40')} = <b>10.75</b> marks.`,
          '<b>Watch-out:</b> the median of grouped data is <b>not</b> the middle mid-point: it must be interpolated through the median class, or every downstream number is wrong.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Find the range and the mean deviation about the mean of: 14, 18, 22, 26, 30.',
            a: 'Range = 16, M.D. = 4.8.',
          },
          {
            q: '<b>[JEE Main]</b> For the discrete distribution below, find the mean deviation about the mean. The values 5, 10, 15, 20, 25 have frequencies 3, 5, 8, 3, 1.',
            a: 'M.D. = 4.3.',
          },
          {
            q: '<b>[JEE Main]</b> Find the mean deviation about the median of: 8, 12, 15, 19, 24, 29, 33, 40.',
            a: 'Median = 21.5, M.D. = 9.',
          },
          {
            q: '<b>[JEE Main]</b> A data set has mean deviation about the mean = 7.5 and range = 25. Every observation is replaced by (value ×4 − 9). Find the new mean deviation and the new range.',
            a: 'New M.D. = 30, new range = 100 (the −9 has no effect).',
          },
          {
            q: `<b>[JEE Advanced]</b> For the observations 2, 5, 9, 14, 20, find the value(s) of ${a} that minimise ${SUMI} ${dev(a)}, and state the minimum value of the sum.`,
            a: `Minimum at ${a} = 9 (the median); minimum sum = 27.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Every observation in a data set is increased by 5. Which statement is correct?',
        opts: [
          {
            label: 'The range increases by 5',
            nudge: `<b>(A)</b> imagines “+5 on each value must add up”, but the range is a gap, ${XMAX} − ${XMIN}, and both ends move by the same 5.`,
          },
          { label: 'The range is unchanged', nudge: null },
          {
            label: 'The mean deviation increases by 5',
            nudge: `<b>(C)</b> imagines “+5 on each value must add up”, but the mean moves by 5 too, so every distance ${dev(XB)} is unchanged.`,
          },
          {
            label: 'The coefficient of range is unchanged',
            nudge: `<b>(D)</b> is the sneakiest: the coefficient of range = ${COEFF_RANGE} keeps the same numerator but a larger denominator after the shift, so it actually <b>does</b> change, making (D) false.`,
          },
        ],
        correct: 1,
        solution: `Adding a constant shifts ${XMAX} and ${XMIN} by the same 5, so their difference, the range, is untouched; the same translation-invariance leaves the mean deviation unchanged too.`,
      },
      {
        t: 'mcq',
        q: 'The mean deviation about the median of 4, 7, 9, 13, 16 is:',
        opts: [
          { label: '3.6', nudge: null },
          {
            label: '3.76',
            nudge: '<b>(B)</b> 3.76 is what you get if you absent-mindedly measure about the <b>mean</b> (9.8) when the question said median: the single most common error here.',
          },
          { label: '4.0', nudge: '<b>(C)</b> 4.0 is a rounding/arithmetic slip.' },
          { label: '18', nudge: `<b>(D)</b> 18 is the sum of deviations with the final division by ${n} forgotten.` },
        ],
        correct: 0,
        solution: `Median = 9; absolute deviations 5, 2, 0, 4, 7 sum to 18; M.D. = ${fr('18', '5')} = 3.6.`,
      },
      {
        t: 'mcq',
        q: `For the distribution ${xi} = 2, 4, 6 with ${fi} = 1, 2, 2, the mean deviation about the mean is:`,
        opts: [
          { label: '1.28', nudge: null },
          {
            label: '2.13',
            nudge: `<b>(B)</b> 2.13 divides 6.4 by <b>3</b> (the number of classes) instead of ${N} = 5: the frequency-divisor trap.`,
          },
          { label: '6.4', nudge: '<b>(C)</b> 6.4 skips the division entirely.' },
          { label: '1.6', nudge: `<b>(D)</b> 1.6 is a single deviation, |6${NB}−${NB}4.4| (the value 6), not the weighted average of all three; the largest deviation is 2.4.` },
        ],
        correct: 0,
        solution: `${N} = 5, ${XB} = ${fr('2 + 8 + 12', '5')} = 4.4; ∑ ${fi}${dev(XB)} = 1(2.4) + 2(0.4) + 2(1.6) = 6.4; M.D. = ${fr('6.4', '5')} = 1.28.`,
      },
      {
        t: 'mcq',
        q: 'The mean deviation of a data set is least when it is measured about the:',
        opts: [
          {
            label: 'mean',
            nudge: '<b>(A)</b> mean is the popular wrong answer, but the mean minimises the sum of squared deviations (variance), not absolute deviations.',
          },
          { label: 'median', nudge: null },
          { label: 'mode', nudge: '<b>(C)</b> mode minimises nothing of this kind.' },
          {
            label: 'range',
            nudge: '<b>(D)</b> range is a measure of spread, not a central value, so it cannot be a point we measure deviation about: a pure category error planted to catch panicked guessing.',
          },
        ],
        correct: 1,
        solution: `By the outside-in cancellation argument, ∑ ${dev(a)} is minimised at the median.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dropping the absolute-value sign.</b> Computing ∑(${xi} − ${XB}) without the modulus gives exactly 0 for every data set (deviations about the mean always cancel), and students then “conclude” M.D. = 0. The modulus is the whole point: it is the difference between measuring distance and measuring signed displacement.`,
          `<b>Dividing by the wrong count in frequency tables.</b> The divisor is always ${N} = ∑ ${fi} (total frequency), never the number of rows/classes. This single slip is the most frequent source of lost marks in Board answers.`,
          '<b>Using the mean when “least mean deviation” is asked.</b> If a question wants the smallest mean deviation, anchor to the <b>median</b>, not the mean. Reading the question for which central value is requested costs two seconds and saves the whole answer.',
          `<b>Believing a shift changes the spread.</b> Adding/subtracting a constant changes neither the range nor any mean deviation; multiplying scales both by |${a}|. Many transformation MCQs are built entirely around testing whether you know this.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + sanity):</b> For any transformation ${AXB}, immediately write Range and M.D. ↦ |${a}| × (old value) and ignore ${b}: no recomputation needed. And before you commit an answer, check that your mean deviation is <b>no larger than the range</b>; if it is larger, you have an arithmetic error upstream.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Dispersion</b> = how scattered the data is about its centre.',
            note: 'Order of refinement: Range → Mean Deviation → (next topic: Variance & SD).',
          },
          { f: `<b>Range</b> = ${XMAX} − ${XMIN}`, note: `<b>Coeff. of range</b> = ${COEFF_RANGE}.` },
          {
            f: '<b>Mean deviation</b>',
            note: `M.D.(${a}) = ${fr('1', n)} ∑ ${dev(a)} (ungrouped)<br>= ${fr('1', N)} ∑ ${fi}${dev(a)} (frequency, ${N} = ∑ ${fi}).`,
          },
          {
            f: '<b>Grouped median</b> (for M.D. about median)',
            note: `${MEDIAN} (median class = first with c.f. ≥ ${fr(N, '2')}); then take ${dev(M)}.`,
          },
          { f: '<b>M.D. is least about the MEDIAN</b>', note: 'mnemonic: <b>“Median Minimises Mean-deviation”</b> (the three M’s).' },
          {
            f: `<b>Transformation rule</b> ${AXB}`,
            note: `Range and M.D. both ↦ |${a}|× old; the +${b} does nothing. Mnemonic: <b>“Add doesn’t matter, Multiply scales.”</b>`,
          },
          {
            f: '<b>Units:</b> range and M.D. share the data’s units; coefficients are dimensionless.',
            note: 'Sanity check: M.D. ≤ Range (about the mean, the median or the mode).',
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 02 · pp. 1151–1160 ────────────────
  {
    n: '02',
    title: 'Variance and Standard Deviation',
    kalam: 'Variance σ² = the mean of the squared deviations from the mean.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the single most heavily examined corner of Statistics ${ESTIMATE}. <b>JEE Main</b> has carried a variance/SD question in nearly every recent paper, usually the shortcut formula, the transformation property, or combined variance ${ESTIMATE}. <b>CBSE Boards</b> reliably ask a 3–5 mark computation from a frequency table ${ESTIMATE}. <b>JEE Advanced</b> leans on the property-based results: combined variance of two groups, variance of the first ${n} natural numbers, or “minimum mean-square deviation” reasoning ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `In Topic 01 we learned to measure spread by averaging the distances of observations from a centre: the mean deviation. We were forced to wrap each deviation in absolute-value bars, otherwise the deviations about the mean cancel to zero. That worked, but the modulus sign is mathematically grumpy: |<i>x</i>| has a sharp corner at zero and refuses to cooperate with calculus or algebra. Statisticians wanted a spread measure that kills the signs <b>and</b> stays smooth enough to manipulate. Their trick: instead of taking the absolute value of each deviation, <b>square</b> it.`,
      },
      {
        t: 'p',
        html: `Squaring does three jobs at once. It throws away the sign (a square is never negative). It is perfectly smooth, no corners, so it slots into further mathematics effortlessly. And, crucially, it <b>punishes large deviations far more than small ones</b>: an observation sitting 2 units from the mean contributes 4, but one sitting 10 units away contributes 100, not 10. The average of these squared deviations is the <b>variance</b>, written ${SIG2}.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture each deviation from the mean as the side of a little square drawn on the number line. A point close to the mean draws a tiny square; a far-flung outlier draws an enormous one. Variance is the average area of all these squares. One distant outlier can blow up the average area dramatically, which is exactly the sensitivity we want when “how risky / how inconsistent is this?” is the real question.',
      },
      { t: 'fig', id: 'm11-13-fig-13.3' },
      {
        t: 'p',
        html: `There is one inconvenience. If the data is in marks, the squared deviations are in marks<sup>2</sup>, and so is the variance: an awkward unit nobody can interpret. The cure is simple: take the positive square root of the variance to drag the measure back into the original units. That square root is the <b>standard deviation,</b> ${SIG}, the single most-used measure of spread in all of statistics.`,
      },
      {
        t: 'p',
        html: 'A real-world payoff. Suppose two batsmen both average 45 runs. Batsman P scores 44, 46, 45, 43, 47: tight, dependable. Batsman Q scores 5, 90, 12, 88, 30: same average, wild swings. For a must-win final, you pick P, and the standard deviation is precisely the number that tells you P is the safer bet. Indian SIP investors use the very same idea: two mutual funds may report identical average returns, but the one with the lower standard deviation is the calmer ride.',
      },
      {
        t: 'p',
        html: 'But what if you want to compare the consistency of two things measured on different scales (say, the variability of students’ heights versus their weights, or two stocks priced very differently)? Standard deviation alone can’t, because it carries units. So we normalise it by the mean and express it as a percentage: the <b>coefficient of variation</b> (C.V.). Being a pure number, C.V. compares apples to oranges, and the rule is friendly: <b>lower C.V. means more consistent.</b>',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Variance is always measured about the mean (unlike mean deviation, which can sit on any central value), and that is not arbitrary: just as the median minimises absolute deviation (Topic 01), the <b>mean minimises the mean of squared deviations.</b> Variance is hypersensitive to outliers because of the squaring, so for skewed data it can overstate spread. And ${SIG2} is zero <b>only</b> when every single observation equals the mean: a perfectly flat data set.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `<b>Variance</b> ${SIG2} = the mean of the squared deviations from the mean. <b>Standard deviation</b> ${SIG} = +√${SIG2} (always the positive root).<br><br><b>Ungrouped data</b> <i>x</i><sub>1</sub>, …, <i>x</i><sub><i>n</i></sub> with mean ${XB}:`,
      },
      {
        t: 'formula',
        kicker: 'Variance (ungrouped data)',
        main: `${SIG2} = ${fr('1', n)} ${SUMN}(${xi} − ${XB})<sup>2</sup><br>⟺ ${SHORTCUT}`,
        legend: [`${SIG2} = the variance`, `${xi} = the observations`, `${n} = the number of observations`, `${XB} = the mean`],
        note: null,
      },
      {
        t: 'p',
        html: `The <b>shortcut form</b> is the workhorse: it avoids computing every deviation and is far faster when ${XB} is not a whole number.`,
      },
      {
        t: 'p',
        html: `<b>Frequency distribution</b> (${fi}, ${N} = ∑ ${fi}; for continuous data the ${xi} are class mid-points):`,
      },
      {
        t: 'formula',
        kicker: 'Variance (frequency distribution)',
        main: `${SIG2} = ${fr('1', N)} ∑ ${fi}(${xi} − ${XB})<sup>2</sup><br>= ${fr('1', N)} ∑ ${FX2} − (${fr('1', N)} ∑ ${FX})<sup>2</sup>`,
        legend: [`${fi} = frequency of ${xi}`, `${N} = total frequency (∑ ${fi})`, `${xi} = the values (class mid-points for grouped data)`, `${XB} = mean`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Step-deviation form</b> (for tidy hand computation; ${A} = assumed mean, ${h} = class width, ${di} = ${fr(`${xi} − ${A}`, h)}):`,
      },
      {
        t: 'formula',
        kicker: 'Variance by step deviations (grouped data)',
        main: `${SIG2} = ${sq(h)} [${fr('1', N)} ∑ ${FD2} − (${fr('1', N)} ∑ ${FD})<sup>2</sup>]<br>${SIG} = ${fr(h, N)} √(${N} ∑ ${FD2} − (∑ ${FD})<sup>2</sup>)`,
        legend: [`${A} = the assumed mean`, `${h} = the class width`, `${di} = the step deviation ${fr(`${xi} − ${A}`, h)}`, `${fi} = the class frequencies`, `${N} = the total frequency (∑ ${fi})`, `${SIG} = the standard deviation`],
        note: null,
      },
      { t: 'p', html: '<b>Coefficient of variation</b> (dimensionless, in %):' },
      { t: 'p', html: `${CVF}<br>(lower C.V. ⇒ more consistent)` },
      {
        t: 'p',
        html: `<b>Transformation rule</b> (for <i>y</i><sub><i>i</i></sub> = <i>ax</i><sub><i>i</i></sub> + ${b}): variance is <b>unaffected by the shift</b> ${b} and <b>scaled by</b> ${sq(a)}:`,
      },
      { t: 'p', html: `<i>σ</i><sub><i>y</i></sub><sup>2</sup> = ${sq(a)} <i>σ</i><sub><i>x</i></sub><sup>2</sup>, <i>σ</i><sub><i>y</i></sub> = |${a}| <i>σ</i><sub><i>x</i></sub>` },
      {
        t: 'p',
        html: `<b>Combined variance</b> of two groups (sizes ${n1}, ${n2}; means ${XB1}, ${XB2s}; variances ${S1SQ}, ${S2SQ}; combined mean ${XB}, with ${d1} = ${XB1} − ${XB}, ${d2} = ${XB2s} − ${XB}):`,
      },
      { t: 'p', html: COMB },
      {
        t: 'p',
        html: `<b>Standard result:</b> variance of the first ${n} natural numbers = ${fr(`${sq(n)} − 1`, '12')}.`,
      },
      {
        t: 'p',
        html: `<b>Symbol meanings:</b> ${SIG2} variance, ${SIG} SD, ${XB} mean, ${n} and ${N} counts, ${fi} frequencies, ${A} assumed mean, ${h} class width, ${di} step deviation.`,
      },
      {
        t: 'p',
        html: `<b>Units note (statistics analogue of dimensional analysis):</b> Standard deviation carries the <b>same units as the data</b>; <b>variance carries the squared units</b> (marks<sup>2</sup>, ₹<sup>2</sup>, cm<sup>2</sup>), which is the whole reason SD exists. The coefficient of variation is a <b>pure number</b> (a percentage). Sanity checks: ${SIG2} ≥ 0 always (a negative answer means you subtracted the shortcut terms in the wrong order), and ${SIG} can never exceed the range.`,
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: `<b>Derivation of the shortcut formula</b> ${SHORTCUT}.<br><br>Start from the definition and expand the square: the reason we expand is to separate the data-dependent sum ∑ ${XI2} from the constant mean, so we never have to compute individual deviations:<br>${SIG2} = ${fr('1', n)} ∑(${xi} − ${XB})<sup>2</sup><br>= ${fr('1', n)} ∑ (${XI2} − 2${XB}${xi} + ${XB2}).`,
      },
      {
        t: 'p',
        html: `Split the sum into three pieces (legal because summation distributes over addition):<br>${SIG2} = ${fr('1', n)} ∑ ${XI2} − ${fr(`2${XB}`, n)} ∑ ${xi} + ${fr('1', n)} ∑ ${XB2}.`,
      },
      {
        t: 'p',
        html: `Now use two facts. First, ${fr('1', n)} ∑ ${xi} = ${XB} by definition of the mean, so the middle term becomes −2${XB} · ${XB} = −2${XB2}. Second, ${XB2} is a constant, so ∑ ${XB2} = ${n}${XB2}, and the last term becomes ${XB2}. Hence<br>${SIG2} = ${fr('1', n)} ∑ ${XI2} − 2${XB2} + ${XB2}<br>= ${fr('1', n)} ∑ ${XI2} − ${XB2}. ■`,
      },
      {
        t: 'p',
        html: `<b>Why the mean minimises mean-square deviation.</b> In Topic 01 we proved the median minimises ∑ ${dev(a)}. The parallel result here: <i>g</i>(${a}) = ${fr('1', n)} ∑(${xi} − ${a})<sup>2</sup> is minimised at ${a} = ${XB}. Differentiate and set to zero:<br><i>g</i>′(${a}) = ${fr('1', n)} ∑ 2(${xi} − ${a})(−1)<br>= −${fr('2', n)} ∑(${xi} − ${a}) = 0<br>⇒ ∑ ${xi} = <i>na</i> ⇒ ${a} = ${XB}; and <i>g</i>″(${a}) = 2 > 0, so this is a minimum.<br>This is why variance is always anchored to the mean: no other anchor gives a smaller average squared spread.`,
      },
      {
        t: 'proc',
        title: 'Procedure: variance of a continuous frequency distribution (step-deviation method)',
        steps: [
          `Replace each class by its mid-point ${xi}. <b>Why:</b> one representative value per class.`,
          `Choose a convenient assumed mean ${A} (a central mid-point) and class width ${h}; compute ${di} = ${fr(`${xi} − ${A}`, h)}. <b>Why:</b> this shrinks the arithmetic to small integers, slashing error.`,
          `Build columns ${FD} and ${FD2}, then their totals.`,
          `Apply ${SDSTEP}, then ${SIG} = √${SIG2}. <b>Why the</b> ${sq(h)}<b>:</b> undoing the scaling by ${h} from step 2, and notice it is ${sq(h)}, not ${h}, exactly because variance scales by the square of any factor.`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The number of units a small shop sold on five days was 12, 15, 18, 21, 24. Find the variance and standard deviation.',
        steps: [
          `Mean: ${XB} = ${fr('12 + 15 + 18 + 21 + 24', '5')} = ${fr('90', '5')} = 18.`,
          'Deviations: −6, −3, 0, 3, 6; squared: 36, 9, 0, 9, 36; sum = 90.',
          `${SIG2} = ${fr('90', '5')} = <b>18</b> (units<sup>2</sup>),<br>${SIG} = √18 = 3√2 ≈ <b>4.24</b> units.`,
          '<b>Note the units:</b> variance in units<sup>2</sup>, SD in units, and 4.24 ≤ range (12), so it is consistent.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Transformation property',
        q: 'The variance of 20 observations is 5. Each observation is transformed by the rule (multiply by 3, then add 4). Find the new variance and the new standard deviation.',
        steps: [
          `The “+4” shifts all data equally and cannot change spread; the “×3” scales the spread. For variance the scale factor enters <b>squared</b>:<br><i>σ</i><sub>new</sub><sup>2</sup> = 3<sup>2</sup> × 5 = <b>45</b>,<br><i>σ</i><sub>new</sub> = |3| × √5 = 3√5 ≈ <b>6.71</b>.`,
          `<b>The signature trap:</b> students multiply the variance by 3 (giving 15) or square the SD’s factor wrongly. Lock it in: variance scales by ${sq(a)}, SD by |${a}|, and the additive constant does nothing. This single fact is the most common JEE Main statistics question ${ESTIMATE}.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Frequency distribution, shortcut',
        q: `Find the variance of the following distribution.<br>${xi}: 4, 8, 12, 16, 20<br>${fi}: 2, 5, 8, 3, 2`,
        steps: [
          `${N} = 20. Build the running totals: ∑ ${FX} = 8 + 40 + 96 + 48 + 40 = 232<br>⇒ ${XB} = ${fr('232', '20')} = 11.6.`,
          `∑ ${FX2} = 2(16) + 5(64) + 8(144) + 3(256) + 2(400)<br>= 32 + 320 + 1152 + 768 + 800 = 3072.`,
          `${SIG2} = ${fr(`∑ ${FX2}`, N)} − ${XB2}<br><br>= ${fr('3072', '20')} − (11.6)<sup>2</sup><br>= 153.6 − 134.56 = <b>19.04</b>,<br>${SIG} ≈ <b>4.36</b>.`,
          `The shortcut paid off: we never touched a single (${xi} − 11.6) deviation.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: Combined variance',
        q: 'Section A has 30 students with mean marks 60 and SD 8. Section B has 20 students with mean marks 70 and SD 6. Find the standard deviation of all 50 students combined.',
        steps: [
          'This is the classic “you cannot just average two SDs” problem: the gap between the group means adds its own spread.',
          `Combined mean: ${XB} = ${fr('30(60) + 20(70)', '50')} = ${fr('1800 + 1400', '50')} = 64.`,
          `Deviations of group means from the combined mean: ${d1} = 60 − 64 = −4, ${d2} = 70 − 64 = 6.`,
          `${COMB}<br><br>= ${fr('30(64 + 16) + 20(36 + 36)', '50')}<br><br>= ${fr('2400 + 1440', '50')} = 76.8.<br><br>${SIG} = √76.8 ≈ <b>8.76</b>.`,
          `Notice the combined SD (8.76) is larger than either group’s SD (8 and 6): the between-group terms ${D1SQ}, ${D2SQ} inflate it. A student who naively averages 8 and 6 to get 7 misses this entirely.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level: Continuous distribution, step-deviation method',
        q: `Find the variance and standard deviation of the marks of 30 students grouped below.<br>Marks: 0–20, 20–40, 40–60, 60–80, 80–100<br>Students ${fi}: 4, 6, 10, 7, 3`,
        steps: [
          `Take assumed mean ${A} = 50 (a central mid-point) and class width ${h} = 20, and code ${di} = ${fr(`${xi} − ${A}`, h)}. The coding turns large mid-points into the tiny integers −2, …, 2: far less error-prone.`,
          `${xi}: 10, 30, 50, 70, 90<br>${fi}: 4, 6, 10, 7, 3 (total <b>30</b>)<br>${di}: −2, −1, 0, 1, 2<br>${FD}: −8, −6, 0, 7, 6 (total <b>−1</b>)<br>${FD2}: 16, 6, 0, 7, 12 (total <b>41</b>)`,
          `Apply the step-deviation form (the ${sq(h)} undoes the coding: squared, because variance scales by the square of any factor):<br>${SDSTEP}<br><br>= 400 [${fr('41', '30')} − (${fr('−1', '30')})<sup>2</sup>]<br><br>= 400 [1.3667 − 0.0011] = <b>546.2</b>.`,
          `${SIG} = √546.2 ≈ <b>23.4</b> marks.`,
          `(Mean, as a bonus: ${XB} = ${A} + ${h} · ${fr(`∑ ${FD}`, N)} = 50 + 20(${fr('−1', '30')}) ≈ 49.3.) Note how small the correction term (${fr('−1', '30')})<sup>2</sup> is, but dropping it is still an error, and graders look for it.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Find the variance and standard deviation of: 5, 10, 15, 20, 25.',
            a: `${SIG2} = 50, ${SIG} = 5√2 ≈ 7.07.`,
          },
          {
            q: '<b>[JEE Main]</b> The variance of 15 observations is 12. If each observation is multiplied by 2 and then decreased by 5, find the new variance and new SD.',
            a: `New ${SIG2} = 48, new ${SIG} = 4√3 ≈ 6.93 (the −5 has no effect).`,
          },
          {
            q: '<b>[JEE Main]</b> Brand A bulbs: mean life 1200 h, SD 80 h. Brand B bulbs: mean life 1500 h, SD 90 h. Using the coefficient of variation, decide which brand is more consistent.',
            a: 'C.V.<sub><i>A</i></sub> = 6.67%, C.V.<sub><i>B</i></sub> = 6% ⇒ Brand <b>B</b> is more consistent.',
          },
          {
            q: `<b>[JEE Main]</b> Find the variance of the distribution: ${xi} = 1, 2, 3, 4, 5 with ${fi} = 4, 6, 8, 5, 2.`,
            a: `${SIG2} = 1.36.`,
          },
          {
            q: '<b>[JEE Advanced]</b> Find the variance and standard deviation of the first 10 natural numbers.',
            a: `${SIG2} = ${fr('10<sup>2</sup> − 1', '12')} = 8.25, ${SIG} ≈ 2.87.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The variance of a data set is 9. Each observation is changed to (value ×2 + 7). The new standard deviation is:',
        opts: [
          { label: '6', nudge: null },
          {
            label: '36',
            nudge: '<b>(B)</b> 36 is the new variance (2<sup>2</sup> × 9): the student answered the wrong quantity, forgetting the square root.',
          },
          { label: '13', nudge: '<b>(C)</b> 13 comes from 2 × 3 + 7: illegally adding the shift to a spread measure.' },
          { label: '3', nudge: '<b>(D)</b> 3 assumes nothing changes, forgetting the scale factor.' },
        ],
        correct: 0,
        solution: 'Original SD = √9 = 3. Under <i>y</i> = 2<i>x</i> + 7, the SD scales by |2| and ignores the +7: new SD = 2 × 3 = 6.',
      },
      {
        t: 'mcq',
        q: `Adding a fixed constant ${k} to every observation changes:`,
        opts: [
          { label: 'the mean only', nudge: null },
          { label: 'the variance only', nudge: '<b>(B)</b> is backwards: the shift moves the mean and leaves the variance alone.' },
          {
            label: 'both mean and variance',
            nudge: '<b>(C)</b> is the popular error: assuming “everything shifts, so spread shifts too,” confusing location with spread.',
          },
          { label: 'neither', nudge: '<b>(D)</b> forgets that the mean genuinely moves.' },
        ],
        correct: 0,
        solution: `A translation moves the centre (mean → mean + ${k}) but preserves every gap, so variance is unchanged.`,
      },
      {
        t: 'mcq',
        q: 'Two data sets have the same standard deviation, but set P has a larger mean than set Q. Which is more consistent?',
        opts: [
          { label: 'P', nudge: null },
          { label: 'Q', nudge: '<b>(B)</b> inverts the relationship.' },
          {
            label: 'Equally consistent',
            nudge: '<b>(C)</b> is the trap of equating consistency with SD alone, but identical SD on a larger mean is relatively tighter.',
          },
          { label: 'Cannot be determined', nudge: '<b>(D)</b> gives up despite sufficient information.' },
        ],
        correct: 0,
        solution: `Consistency is judged by C.V. = ${fr(SIG, XB)}. With equal ${SIG}, the larger mean gives the smaller C.V., so <b>P</b> is more consistent.`,
      },
      {
        t: 'mcq',
        q: `For a data set, ∑ ${xi} = 40, ∑ ${XI2} = 375, and ${n} = 5. The variance is:`,
        opts: [
          { label: '11', nudge: null },
          {
            label: '64',
            nudge: `<b>(B)</b> 64 is just ${XB2}, the term that should have been subtracted, reported alone.`,
          },
          {
            label: '75',
            nudge: `<b>(C)</b> 75 is ${fr(`∑ ${XI2}`, n)} with the student forgetting to subtract ${XB2}: stopping one step early.`,
          },
          { label: '36', nudge: '<b>(D)</b> 36 is a stray arithmetic distractor for panicked guessing.' },
        ],
        correct: 0,
        solution: `${XB} = ${fr('40', '5')} = 8; ${SIG2} = ${fr(`∑ ${XI2}`, n)} − ${XB2} = ${fr('375', '5')}${NB}−${NB}64 = 75 − 64 = 11.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing variance with standard deviation.</b> They differ by a square root and by units (marks<sup>2</sup> vs marks). Read the question: if it asks for SD and you stop at variance, you lose the mark even with correct work.',
          `<b>Mishandling the transformation rule.</b> Under <i>x</i> ↦ <i>ax</i> + ${b}: variance scales by ${sq(a)}, SD by |${a}|, and ${b} is irrelevant. The classic slip is scaling variance by ${a} (not ${sq(a)}) or letting the additive ${b} creep in.`,
          `<b>Stopping the shortcut formula early.</b> ${SHORTCUT}: students routinely forget the −${XB2}, or subtract ${XB} instead of ${XB2}. If your variance comes out negative, you have swapped the two terms.`,
          `<b>Averaging standard deviations of two groups.</b> Combined SD is <b>not</b> the average of the parts’ SDs; you must use the combined-variance formula, which adds the between-group terms ${D1SQ}, ${D2SQ}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + sanity):</b> Reach for ${SHORTCUT} whenever the mean isn’t a whole number: it sidesteps ugly decimal deviations. Two instant checks before committing: variance must be ≥ 0, and SD must be ≤ the range. For consistency comparisons, go straight to C.V. (lower wins) rather than comparing SDs that may sit on different means.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Variance</b>',
            note: `${SIG2} = ${fr('1', n)} ∑(${xi} − ${XB})<sup>2</sup> = ${fr('1', n)} ∑ ${XI2} − ${XB2}; <b>SD</b> ${SIG} = +√${SIG2}. Mnemonic: <b>“Square for Variance, Root for SD.”</b>`,
          },
          {
            f: '<b>Frequency form:</b>',
            note: `${SIG2} = ${fr('1', N)} ∑ ${FX2} − (${fr(`∑ ${FX}`, N)})<sup>2</sup>, ${N} = ∑ ${fi}.`,
          },
          {
            f: `<b>Transformation</b> <i>x</i> ↦ <i>ax</i> + ${b}:`,
            note: `${SIG2} ↦ ${sq(a)}${SIG2}, ${SIG} ↦ |${a}|${SIG}, ${b} does nothing. Mnemonic: <b>“Shift-proof, Scale-squared.”</b>`,
          },
          {
            f: '<b>Coefficient of variation</b>',
            note: `${CVF} (unit-free %); <b>lower C.V. = more consistent.</b>`,
          },
          {
            f: '<b>Combined variance:</b>',
            note: `${COMB}, ${di} = <i>x̄</i><sub><i>i</i></sub> − <i>x̄</i><sub>combined</sub>: never just average the SDs.`,
          },
          {
            f: '<b>Anchor fact:</b> the <b>mean</b> minimises mean-square deviation (cf. the <b>median</b> minimises mean absolute deviation).',
            note: `<b>Std result:</b> variance of first ${n} naturals = ${fr(`${sq(n)} − 1`, '12')}.`,
          },
          {
            f: '<b>Units:</b> variance in (data units)<sup>2</sup>, SD in data units, C.V. dimensionless.',
            note: `Sanity: ${SIG2} ≥ 0, ${SIG} ≤ range.`,
          },
        ],
        aids: [],
      },
    ],
  },

  // ──────────────── Topic 03 · pp. 1161–1167 ────────────────
  {
    n: '03',
    title: 'Analysis of Frequency Distributions & Advanced Problem Types',
    kalam: 'To compare fairly, you must measure spread relative to the size of what you’re measuring.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is where the chapter pays off. <b>CBSE Boards</b> love the coefficient-of-variation comparison (“which is more consistent?”) as a 4–5 mark question, and the correction problem (a misread observation) as a 3-mark twist ${ESTIMATE}. <b>JEE Main</b> turns the reverse problems, finding missing observations from a given mean and variance, into quick MCQs almost every year ${ESTIMATE}. <b>JEE Advanced</b> combines these ideas: merge two groups, then judge consistency by C.V. ${ESTIMATE}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'We can now measure spread (range, mean deviation, variance, standard deviation). The final question of the chapter is the practical one: <b>how do you compare the spread of two different groups?</b> A coach choosing between two batsmen, a buyer comparing two brands, an investor weighing two funds: all are asking “which one is steadier?”',
      },
      {
        t: 'p',
        html: `If the two groups have the <b>same mean</b>, the answer is easy: just compare standard deviations; the smaller ${SIG} is the steadier group. But life is rarely that tidy. Usually the two groups have different means, or even different units (comparing the variability of people’s heights against their weights, say). Standard deviation alone cannot referee that contest, because a spread of 5 kg around a mean of 60 kg is a very different relative wobble from a spread of 5 cm around a mean of 170 cm.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> a ₹10 swing matters enormously on a ₹50 item but is invisible on a ₹50,000 item. To compare fairly, you must measure spread relative to the size of what you’re measuring. That is exactly what the <b>coefficient of variation</b> does: it divides the standard deviation by the mean (and multiplies by 100 to make a percentage). Being a pure ratio, it strips away units and scale, so any two series (rupees vs runs, heights vs marks) can be compared on one level playing field. The verdict is always the same: <b>lower C.V. = more consistent; higher C.V. = more variable.</b>',
      },
      {
        t: 'p',
        html: `There is a second family of problems this chapter is famous for, and they run the machinery backwards. Instead of “here is the data, find the variance,” they ask “here is the mean and the variance: reconstruct the missing data,” or “an observation was recorded wrongly; repair the mean and standard deviation.” These reward you for understanding that the mean is built from ∑ ${xi} and the variance from ∑ ${XI2}, so if you can track how those two running totals change, you can solve almost anything.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> The coefficient of variation needs a <b>non-zero mean</b> (${XB}${NB}≠${NB}0); it is undefined otherwise, and becomes unstable and misleading when the mean is close to zero. It is also meant for <b>ratio data with a true zero</b> (heights, wages, marks); applying it to something like temperatures in °C, where zero is arbitrary, gives nonsense. And “more consistent” (lower C.V.) is not the same as “better”: a consistent low scorer is still a low scorer, so always read what the question actually rewards.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Coefficient of variation:</b>' },
      {
        t: 'formula',
        kicker: 'Coefficient of variation',
        main: `${CVF} (${XB}${NB}≠${NB}0)<br>lower C.V. ⇒ more consistent`,
        legend: [`${SIG} = the standard deviation`, `${XB} = the mean`],
        note: null,
      },
      { t: 'p', html: '<b>Reverse form</b> (recover the mean from a known C.V. and SD):' },
      {
        t: 'formula',
        kicker: 'Mean from the C.V. and the SD',
        main: `${XB} = ${fr(SIG, 'C.V.')} × 100`,
        legend: [`${SIG} = the standard deviation`, `${XB} = the mean`, 'C.V. = the coefficient of variation (in %)'],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Same-mean rule:</b> if ${XB1} = ${XB2s}, comparison by C.V. and comparison by ${SIG} give the same ranking, so just compare ${SIG} directly.`,
      },
      { t: 'p', html: '<b>Running-total identities</b> (the engine for reverse problems):' },
      {
        t: 'formula',
        kicker: 'Running-total identities',
        main: `${XB} = ${fr(`∑ ${xi}`, n)}<br>⇒ ∑ ${xi} = <i>nx̄</i><br>${SIG2} = ${fr(`∑ ${XI2}`, n)} − ${XB2}<br>⇒ ${MASTER2}`,
        legend: [`∑ ${xi} = the sum of the observations`, `∑ ${XI2} = the sum of their squares`, `${n} = the number of observations`, `${XB} = the mean`, `${SIG2} = the variance`],
        note: null,
      },
      { t: 'p', html: `<b>Correcting a misrecorded value</b> (wrong value ${w}, correct value ${c}):` },
      {
        t: 'formula',
        kicker: 'Correcting a misrecorded value',
        main: `∑ ${xsup('correct')} = ∑ ${xsup('wrong')} − ${w} + ${c}<br>∑ ${xsup('2 correct')} = ∑ ${xsup('2 wrong')} − ${sq(w)} + ${sq(c)}`,
        legend: [`${w} = the wrong (recorded) value`, `${c} = the correct value`],
        note: null,
      },
      {
        t: 'p',
        html: `then recompute ${XB} and ${SIG}. (If the value is omitted rather than replaced, drop −${w} and −${sq(w)} (only + ${c} and + ${sq(c)} remain) and increase ${n} by 1.)`,
      },
      { t: 'p', html: '<b>Combined mean & variance</b> of two groups (recap from Topic 02):' },
      {
        t: 'formula',
        kicker: 'Combined mean and variance of two groups',
        main: `${XB} = ${fr(`${n1}${XB1} + ${n2}${XB2s}`, `${n1} + ${n2}`)}<br>${COMB}<br>${di} = <i>x̄</i><sub><i>i</i></sub> − ${XB}`,
        legend: [`${n1}, ${n2} = sizes of the groups`, `${XB1}, ${XB2s} = means of the groups`, `${S1SQ}, ${S2SQ} = variances of the groups`, `${XB} = combined mean`, `${SIG2} = the combined variance`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Symbol meanings:</b> ${SIG} SD, ${XB} mean, ∑ ${xi} sum of observations, ∑ ${XI2} sum of squares, ${n} count.`,
      },
      {
        t: 'p',
        html: '<b>Units note:</b> C.V. is a <b>pure number (percentage)</b>: that unit-free quality is the whole point, since it lets quantities with different units be compared. The repaired mean and SD carry the <b>original data units</b>.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: '(A) Comparing two distributions for consistency',
        steps: [
          `Compute ${XB} and ${SIG} for each series.`,
          `If the means are equal, compare ${SIG} directly. Otherwise compute ${CVF} for each.`,
          'The series with the <b>smaller C.V. is more consistent/stable</b>; the larger C.V. is <b>more variable</b>. <b>Why divide by the mean:</b> it converts an absolute wobble into a relative one, so the comparison is fair across different scales.',
        ],
      },
      {
        t: 'proc',
        title: '(B) Finding missing observations from mean and variance',
        steps: [
          `Translate the given mean into ∑ ${xi} = <i>nx̄</i>: this gives one equation in the unknowns.`,
          `Translate the given variance into ∑(${xi} − ${XB})<sup>2</sup> = <i>nσ</i><sup>2</sup> (or use ${MASTER2}): a second equation.`,
          `Solve the two equations simultaneously. A neat shortcut for two unknowns ${a}, ${b}: from ${a} + ${b} (known) and (${a} − ${XB})<sup>2</sup> + (${b} − ${XB})<sup>2</sup> (known), use (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + 2<i>pq</i> to get the product, then solve the resulting quadratic. <b>Why two equations:</b> two unknowns need two independent constraints, and mean + variance supply exactly that.`,
        ],
      },
      {
        t: 'proc',
        title: '(C) Correcting a misrecorded observation',
        steps: [
          `Recover the wrong totals: ∑ ${xsup('wrong')} = <i>nx̄</i><sub>wrong</sub> and ∑ ${xsup('2 wrong')} = ${n}(<i>σ</i><sub>wrong</sub><sup>2</sup> + <i>x̄</i><sub>wrong</sub><sup>2</sup>).`,
          `Repair each total: subtract the wrong value’s contribution, add the correct one’s: for the mean use −${w} + ${c}, for the variance use −${sq(w)} + ${sq(c)}. <b>Why both totals:</b> the wrong value polluted <b>both</b> ∑ ${xi} (affecting the mean) and ∑ ${XI2} (affecting the variance), so both must be cleaned.`,
          `Recompute ${XB} and ${SIG} from the repaired totals (using the corrected ${n} if the value was omitted).`,
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level: Coefficient of variation',
        q: 'In a Twenty20 series, batsman Arjun averages 50 runs with a standard deviation of 10; batsman Vikram averages 40 runs with a standard deviation of 6. Who is the more consistent batsman? Who would you pick to chase a steep total?',
        steps: [
          `C.V.<sub>Arjun</sub> = ${fr('10', '50')} × 100 = 20%,<br><br>C.V.<sub>Vikram</sub> = ${fr('6', '40')} × 100 = 15%.`,
          'Vikram’s lower C.V. (15 %) makes him the <b>more consistent</b> scorer. But consistency isn’t everything: Arjun’s higher average (50 vs 40) makes him the better bet to chase a steep total, where raw run-scoring power matters more than steadiness. This split verdict is exactly what examiners test: “consistent” and “best” are different questions.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Missing observations',
        q: 'The mean of five observations is 6 and their variance is 6.8. If three of the observations are 2, 4, and 9, find the other two.',
        steps: [
          `Let the unknowns be ${a} and ${b}.`,
          `From the <b>mean</b>: 2 + 4 + 9 + ${a} + ${b} = 5 × 6 = 30 ⇒ ${a} + ${b} = 15.`,
          `From the <b>variance</b>: ∑(${xi} − 6)<sup>2</sup> = 5 × 6.8 = 34.`,
          `(2 − 6)<sup>2</sup> + (4 − 6)<sup>2</sup> + (9 − 6)<sup>2</sup> + (${a} − 6)<sup>2</sup> + (${b} − 6)<sup>2</sup> = 34<br>⇒ 16 + 4 + 9 + (${a} − 6)<sup>2</sup> + (${b} − 6)<sup>2</sup> = 34,<br>so (${a} − 6)<sup>2</sup> + (${b} − 6)<sup>2</sup> = 5. Put <i>p</i> = ${a} − 6, <i>q</i> = ${b} − 6; then <i>p</i> + <i>q</i> = 15 − 12 = 3 and <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> = 5. Since (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + 2<i>pq</i>, we get 9 = 5 + 2<i>pq</i> ⇒ <i>pq</i> = 2. So <i>p</i>, <i>q</i> are roots of <i>t</i><sup>2</sup> − 3<i>t</i> + 2 = 0, i.e. <i>t</i> = 1, 2. Therefore {${a},${NB}${b}} = {7,${NB}8}.`,
          `<b>Check:</b> the five observations 2, 4, 9, 7, 8 have mean ${fr('30', '5')} = 6 ✓ and variance ${fr('16 + 4 + 9 + 1 + 4', '5')} = ${fr('34', '5')} = 6.8 ✓`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level: Correcting an observation',
        q: 'The mean and standard deviation of 20 observations are found to be 30 and 5. On rechecking, an observation recorded as 50 is found to be wrong; its correct value is 30. Find the corrected mean and standard deviation.',
        steps: [
          `Recover the wrong totals:<br>∑ ${xsup('wrong')} = 20 × 30 = 600,<br>∑ ${xsup('2 wrong')} = 20(5<sup>2</sup> + 30<sup>2</sup>) = 20(25 + 900) = 18500.`,
          `Repair (wrong ${w} = 50, correct ${c} = 30):<br>∑ ${xsup('correct')} = 600 − 50 + 30 = 580,<br>∑ ${xsup('2 correct')} = 18500 − 2500 + 900 = 16900.`,
          `<i>x̄</i><sub>correct</sub> = ${fr('580', '20')} = <b>29</b>,<br><br>${SIG2} = ${fr('16900', '20')} − 29<sup>2</sup> = 845 − 841 = 4 ⇒ ${SIG} = <b>2</b>.`,
          'The single 4-standard-deviation outlier was doing almost all the work: repairing it collapses the SD from 5 to 2.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level: Combine, then compare',
        q: 'Group I has 40 students with mean score 60 and SD 8; Group II has 60 students with mean score 50 and SD 6. Pooling all 100 students, find the combined standard deviation and the combined coefficient of variation.',
        steps: [
          `Combined mean: ${XB} = ${fr('40(60) + 60(50)', '100')} = ${fr('2400 + 3000', '100')} = 54.`,
          `Group-mean deviations: ${d1} = 60 − 54 = 6, ${d2} = 50 − 54 = −4.`,
          `${SIG2} = ${fr('40(8<sup>2</sup> + 6<sup>2</sup>) + 60(6<sup>2</sup> + (−4)<sup>2</sup>)', '100')}<br><br>= ${fr('40(64 + 36) + 60(36 + 16)', '100')}<br><br>= ${fr('4000 + 3120', '100')} = 71.2,<br>so ${SIG} = √71.2 ≈ <b>8.44</b>, and<br><br>C.V. = ${fr('8.44', '54')} × 100 ≈ <b>15.6</b>%.`,
          `Note the combined SD (8.44) exceeds both group SDs (8 and 6): pooling groups with different means injects extra spread through the ${d1}, ${d2} terms, a fact a careless “average the SDs” approach would never reveal.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Firm A pays a mean monthly wage of ₹4500 with SD ₹360; Firm B pays a mean of ₹5000 with SD ₹450. Using C.V., decide which firm’s wages are more consistent.',
            a: 'C.V.<sub><i>A</i></sub> = 8%, C.V.<sub><i>B</i></sub> = 9% ⇒ Firm <b>A</b> is more consistent.',
          },
          {
            q: '<b>[JEE Main]</b> The mean of five observations is 4 and their variance is 5.2. Three observations are 1, 2, and 6. Find the other two.',
            a: 'The other two are <b>4 and 7</b>.',
          },
          {
            q: '<b>[JEE Main]</b> The mean and SD of 5 observations are 6 and 4. An observation recorded as 14 is found to be wrong; its correct value is 6. Find the corrected mean and SD.',
            a: 'Corrected mean = 4.4, corrected SD = 0.8.',
          },
          {
            q: '<b>[JEE Main]</b> Two groups of 50 students each have means 40 and 50, both with SD 5. Find the standard deviation of the combined group of 100.',
            a: 'Combined SD = √50 ≈ 7.07.',
          },
          {
            q: '<b>[JEE Advanced]</b> The coefficients of variation of two series are 25 % and 40 %, and their standard deviations are 5 and 8 respectively. Find their means and state which series is more variable.',
            a: 'Both means = 20; the second series (C.V. 40 %) is <b>more variable</b>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two data sets have the <b>same mean</b>. Set X has SD 4 and set Y has SD 6. Which is more consistent?',
        opts: [
          { label: 'X', nudge: null },
          { label: 'Y', nudge: '<b>(B)</b> inverts the rule.' },
          { label: 'Equally consistent', nudge: '<b>(C)</b> ignores the different SDs.' },
          {
            label: 'Cannot decide without the coefficient of variation',
            nudge: '<b>(D)</b> is the over-thinking trap: when means are equal, C.V. and SD rank the two series identically, so SD alone is sufficient.',
          },
        ],
        correct: 0,
        solution: 'With equal means, the smaller SD wins, so X is more consistent.',
      },
      {
        t: 'mcq',
        q: `Every observation in a series is multiplied by a positive constant ${k}. The coefficient of variation:`,
        opts: [
          {
            label: `becomes ${k}${NB}C.V.`,
            nudge: `<b>(A)</b> multiplies ${SIG} by ${k} but forgets that ${XB} is multiplied by ${k} too.`,
          },
          { label: 'is unchanged', nudge: null },
          {
            label: `becomes ${fr('C.V.', k)}`,
            nudge: `<b>(C)</b> multiplies ${XB} by ${k} but forgets that ${SIG} is multiplied by ${k} too.`,
          },
          {
            label: `becomes ${sq(k)}${NB}C.V.`,
            nudge: `<b>(D)</b> wrongly imports the ${sq(k)} rule for variance; C.V. uses SD, not variance.`,
          },
        ],
        correct: 1,
        solution: `Both ${SIG} and ${XB} scale by ${k}, so their ratio, and hence the C.V., is untouched.`,
      },
      {
        t: 'mcq',
        q: 'The coefficients of variation of series P and Q are 30 % and 25 % respectively. Which is more consistent?',
        opts: [
          { label: 'P', nudge: '<b>(A)</b> inverts “lower is more consistent.”' },
          { label: 'Q', nudge: null },
          { label: 'Equally consistent', nudge: '<b>(C)</b> ignores the different values.' },
          {
            label: 'Cannot say without the means',
            nudge: '<b>(D)</b> is the trap: C.V. has already normalised by the mean, so the comparison is direct; you do <b>not</b> need the means again.',
          },
        ],
        correct: 1,
        solution: 'Lower C.V. (25 %) means more consistent, so Q wins.',
      },
      {
        t: 'mcq',
        q: 'The mean of 10 observations is 25. A value recorded as 35 is later found to be wrong; its correct value is 15. The corrected mean is:',
        opts: [
          { label: '23', nudge: null },
          { label: '25', nudge: '<b>(B)</b> assumes the mean is unaffected.' },
          { label: '27', nudge: '<b>(C)</b> adds the difference instead of subtracting it (25 + 2).' },
          { label: '21', nudge: '<b>(D)</b> double-counts the correction.' },
        ],
        correct: 0,
        solution: `∑ ${xsup('wrong')} = 10 × 25 = 250; corrected sum = 250 − 35 + 15 = 230; corrected mean = ${fr('230', '10')} = 23. The safe move is always to adjust the sum, then re-divide.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Comparing different-mean series by SD instead of C.V.</b> A larger SD does <b>not</b> mean “more variable” if the means differ: you must normalise with the coefficient of variation. Only when the means are equal may you compare SDs directly.',
          `<b>Forgetting to repair ∑ ${XI2} in correction problems.</b> A wrong observation corrupts both the mean (via ∑ ${xi}) and the variance (via ∑ ${XI2}). Fixing only the mean is the most common half-mark loss.`,
          `<b>Feeding variance into the C.V. formula.</b> C.V. uses the standard deviation, not the variance: using ${SIG2} inflates the answer enormously.`,
          '<b>Reading “more consistent” as “better.”</b> Lower C.V. means steadier, not superior. Always answer the question actually asked (consistency vs. performance).',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + sanity):</b> For reverse problems, immediately write the two master totals ∑ ${xi} = <i>nx̄</i> and ${MASTER2}: every missing-observation or correction question is just bookkeeping on these two numbers. Sanity check: a corrected variance must stay ≥ 0; if it goes negative, you have mishandled ∑ ${XI2}. And recall C.V. is dimensionless: if your “C.V.” carries units, you divided by the wrong thing.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Coefficient of variation</b>',
            note: `${CVF} (${XB}${NB}≠${NB}0). <b>Lower C.V. = more consistent; higher = more variable.</b>`,
          },
          {
            f: '<b>Same mean?</b>',
            note: `Skip C.V.: just compare ${SIG} (same ranking). <b>Reverse:</b> ${XB} = ${fr(SIG, 'C.V.')} × 100.`,
          },
          { f: '<b>Master totals for reverse problems:</b>', note: `∑ ${xi} = <i>nx̄</i> and ${MASTER2}.` },
          {
            f: '<b>Correction:</b>',
            note: `∑ <i>x</i> → ∑ <i>x</i> − ${w} + ${c}, ∑ <i>x</i><sup>2</sup> → ∑ <i>x</i><sup>2</sup> − ${sq(w)} + ${sq(c)}, then recompute. (Omitted value: drop −${w}, −${sq(w)} and increase ${n} by 1.)`,
          },
          {
            f: `<b>Missing two obs</b> ${a}, ${b}<b>:</b>`,
            note: `use ${a} + ${b} and (${a} − ${XB})<sup>2</sup> + (${b} − ${XB})<sup>2</sup> with (<i>p</i> + <i>q</i>)<sup>2</sup> = <i>p</i><sup>2</sup> + <i>q</i><sup>2</sup> + 2<i>pq</i> → quadratic.`,
          },
          {
            f: '<b>Combined:</b>',
            note: `${COMB}, ${di} = <i>x̄</i><sub><i>i</i></sub> − ${XB}. Mnemonic: <b>“Normalise to compare (C.V.), bookkeep to reverse (sums).”</b>`,
          },
        ],
        aids: [],
      },
    ],
  },
];
