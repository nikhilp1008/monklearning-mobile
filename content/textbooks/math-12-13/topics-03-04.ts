import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13 Probability, Topics 03–04, pp. 830–848 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *   Topic 03 = Subtopic 03 "Random Variables & Distributions" (pp. 830–837),
 *   Topic 04 = Subtopic 04 "Bernoulli Trials & Binomial Distribution"
 *              (pp. 838–845), then the book's "Master Formula Sheet & Revision
 *              Capstone" (pp. 846–848, a revision summary of the whole
 *              chapter), kept as the topic's last five parts.
 * Each topic opens with its "Exam Relevance:" box as a part of its own, then is
 * split at its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat
 * sheet". "Sub-01/03/04" → "Topic 01/03/04". Figure 13.2 (caption p. 831,
 * drawn p. 832) is placed where its caption stands; Figure 13.3 (caption
 * p. 844, drawn p. 845) follows Topic 04's fourth worked example, which it
 * draws (review rm1213a F3). No unnumbered drawings on pp. 830–848.
 * Probability distributions are table blocks. ⁿCᵣ with an italic C, as the
 * page sets it; the stacked binomial coefficient as <binom>. Every fraction is
 * stacked (<frac>); no em dashes.
 * The expert reviews rm1213a and rm1213b are applied (fx1213): their
 * corrections change the printed words where listed in
 * reports-13/fx1213-applied.md.
 */
const fr = (u: string, v: string) => `<frac><num>${u}</num><den>${v}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner: no break here, and no space. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const a = I('a');
const b = I('b');
const c = I('c');
const i = I('i');
const k = I('k');
const n = I('n');
const p = I('p');
const q = I('q');
const r = I('r');
const x = I('x');
const S = I('S');
const X = I('X');
const Y = I('Y');
const j = I('j');
const A = I('A');
const B = I('B');
/** The event C (named apart from the italic C of ⁿCᵣ). */
const Cv = I('C');
const AnB = `${A}${NB}∩${NB}${B}`;
const Ei = `${I('E')}<sub>${i}</sub>`;
const Ej = `${I('E')}<sub>${j}</sub>`;
const MU = I('μ');
const SG = I('σ');

const sq = (h: string) => `${h}<sup>2</sup>`;
const rel = (l: string, op: string, rr: string) => `${l}${NB}${op}${NB}${rr}`;
const pr = (s: string) => `${I('P')}(${s})`;
const PX = (v: string) => pr(rel(X, '=', v));
const E = (s: string) => `${I('E')}(${s})`;
const VAR = (s: string) => `Var(${s})`;
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const SET = (...xs: string[]) => `{${xs.join(`,${NB}`)}}`;
/** ⁿCᵣ, with the C italic as the page sets it. */
const NC = (top: string, bot: string) => `<sup>${top}</sup>${I('C')}<sub>${bot}</sub>`;
/** The stacked binomial coefficient, as printed. */
const BI = (top: string, bot: string) => `<binom><num>${top}</num><den>${bot}</den></binom>`;
const pw = (base: string, e: string) => `${base}<sup>${e}</sup>`;
/** A bracketed fraction raised to a power: (1/6)². */
const FP = (u: string, v: string, e: string) => `(${fr(u, v)})<sup>${e}</sup>`;

const XI = `${x}<sub>${i}</sub>`;
const PI = `${p}<sub>${i}</sub>`;
const XI2 = `${x}<sub>${i}</sub>${WJ}<sup>2</sup>`;
const X2 = sq(X);
const MU2 = sq(MU);
const SG2 = sq(SG);
const EX = E(X);
const EX2 = E(X2);
const VX = VAR(X);
const EX_SQ = `[${EX}]<sup>2</sup>`;
const SUMN = SUM(`${i}=1`, n);
const SUMR = (lo: string) => SUM(`${r}=${lo}`, n);
const SUM_PI = `∑${PI}`;
const SUM_XP = `∑${XI}${PI}`;
const SUM_X2P = `∑${XI2}${PI}`;
const AXB = `${a}${X}${NB}+${NB}${b}`;
const nCr = NC(n, r);
/** pʳqⁿ⁻ʳ. */
const PRQ = `${pw(p, r)}${pw(q, `${n}−${r}`)}`;
const BINOM_PMF = `${PX(r)}${NB}= ${nCr}${NB}${PRQ}`;
const NPQ = I('npq');
const NP = I('np');
const QN = pw(q, n);
const BNP = `${I('B')}(${n},${NB}${p})`;
const N1P = `(${n}${NB}+${NB}1)${p}`;
const MODE_BAND = `${N1P}${NB}−${NB}1${NB}≤${NB}${r}${NB}≤ ${N1P}`;
const HALF = fr('1', '2');
const QUART = fr('1', '4');
const RATIO = `${fr(PX(r), PX(`${r} − 1`))}${NB}= ${fr(`(${n} − ${r} + 1)${p}`, `${r}${q}`)}`;

export const TOPICS: Topic[] = [
  // ──────────────── Topic 03 · Subtopic 03 · pp. 830–837 ────────────────
  {
    n: '03',
    title: 'Random Variables & Distributions',
    kalam: 'Probabilities are the weights; ignore them and the mean is meaningless.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `A guaranteed scorer. CBSE Boards almost always carry a 3–5 mark question asking you to build a probability distribution and compute its mean ${ESTIMATE}; older papers also asked for the variance, which the rationalised NCERT book and the current CBSE syllabus no longer include (as far as we know). JEE Main reliably places one direct question on expectation or variance ${ESTIMATE}. JEE Advanced raises the bar with formula-defined distributions, linear transformations of a random variable, and expectation arguments that need genuine reasoning. Master this and the Binomial distribution (Topic 04) becomes almost free.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Watch one over of a T20 match and ask a simple question: how many runs came off it? The answer is a single number (0, maybe 6, maybe an unlikely 36) and which number you get depends on how the six balls played out. You have quietly done something profound: you took a messy, unpredictable real-world experiment (an over of cricket) and boiled each possible outcome down to <b>one real number</b>. That mapping, “outcome${NB}→ number”, is exactly what a <b>random variable</b> is. Formally it is a function whose input is an outcome of the experiment and whose output is a real number, written ${X}. The runs-per-over is a random variable; so is “number of heads in three coin tosses,” “number of customers at a chai stall in an hour,” or “number of defective bulbs in a packet of ten.”`,
      },
      {
        t: 'p',
        html: `Once we have a random variable, the natural next question is: how are its values distributed? List every value ${X} can take alongside the probability of each, and you get the <b>probability distribution</b>: the complete fingerprint of the random variable. It is just a two-row table: the values on top, their probabilities below. Two iron rules govern it: every probability sits between 0 and 1, and they must <b>add up to exactly</b> 1, because on any single run of the experiment something must happen.`,
      },
      {
        t: 'p',
        html: `It helps to notice how many everyday quantities are random variables in disguise. The number of sixes when you roll two dice (0, 1, or 2); the number of defective phones in a carton of twenty; the number of auto-rickshaws that pass a junction in a minute; the number of correct answers a student gets by pure guessing on a test: each assigns a clean integer to an unpredictable situation. Because the possible values can be listed one by one, these are <b>discrete</b> random variables, and listing them is always the first move: you cannot build a distribution until you know exactly which values are on the table.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> A probability distribution is like the published scorecard of all possible results before the match: it tells you not just what can happen but how likely each result is. But a full table can be bulky, so we summarise it with two single numbers. The first is the <b>mean</b> (also called <b>expectation</b>, ${EX}): the long-run average value if you repeated the experiment thousands of times. It is not a plain average of the listed values; it is a <b>probability-weighted</b> average, so values that occur more often pull the mean toward themselves. Picture the distribution as weights placed on a ruler at each value; the mean is the exact point where the ruler balances.`,
      },
      {
        t: 'p',
        html: `The second summary number measures <b>consistency</b>: the <b>variance</b> ${SG2} and its square root the <b>standard deviation</b> ${SG}. Here cricket gives the perfect analogy. Two batsmen can have the same batting average (same mean) yet feel completely different: one grinds out 40 every innings, the other alternates between a golden duck and a blazing century. Same mean, wildly different spread. Variance captures that spread: it is the average squared distance of the values from the mean. A small variance means a dependable, predictable random variable; a large variance means a volatile one.`,
      },
      {
        t: 'p',
        html: `A quick feel for why the mean must be weighted: imagine a lucky-dip at a school fair where 90% of tickets win ₹10 and only 10% win ₹100. A naive “average of the prizes” would say ${fr('10 + 100', '2')}${NB}=${NB}₹55, but almost nobody wins ₹100, so that figure is wildly optimistic. The honest expected prize weights each value by how often it occurs: 0.9(10)${NB}+ 0.1(100)${NB}=${NB}9${NB}+${NB}10${NB}=${NB}₹19. That ₹19 is the mean, and it is exactly what a fair ticket price would be in the long run. Probabilities are the weights; ignore them and the mean is meaningless.`,
      },
      { t: 'fig', id: 'm12-13-fig-13.2' },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Everything here is for a <b>discrete</b> random variable: one taking a finite (or listable) set of values, which is all that the syllabus requires. The distribution is only valid if the probabilities are non-negative and sum to 1; if your table breaks either rule, you have made an error upstream. The mean can be a value the variable never actually takes (1.5 heads is impossible, yet it is the mean of three tosses); that is fine, the mean is a balance point, not an outcome. Finally, variance is always ≥${NB}0; a negative variance is an instant signal of an arithmetic slip.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Random variable.</b> A real-valued function ${X}${NB}∶${NB}${S}${NB}→${NB}ℝ defined on the sample space ${S} of a random experiment. We deal only with <b>discrete</b> random variables here.`,
      },
      { t: 'p', html: '<b>Probability distribution.</b> The system of values and probabilities' },
      {
        t: 'table',
        title: null,
        // Three names for two columns: the reader labels a value with its column name only when a
        // table has more than two, and this one needs P(X) beside each p (Android check of Ch 13).
        head: [X, pr(X), ''],
        rows: [
          [rel(X, '=', `${x}<sub>1</sub>`), `${p}<sub>1</sub>`],
          [rel(X, '=', `${x}<sub>2</sub>`), `${p}<sub>2</sub>`],
          [rel(X, '=', '⋯'), '⋯'],
          [rel(X, '=', `${x}<sub>${n}</sub>`), `${p}<sub>${n}</sub>`],
        ],
      },
      {
        t: 'p',
        html: `where ${rel(PI, '≥', '0')} for all ${i} and ${SUMN}${NB}${PI}${NB}=${NB}1.`,
      },
      {
        t: 'formula',
        kicker: 'Mean / Expectation',
        main: `${MU} = ${EX} = ${SUMN}${NB}${XI}${NB}${PI}`,
        legend: [`${XI}${NB}=${NB}the values of ${X}`, `${PI}${NB}=${NB}the probability ${PX(XI)}`, `${n}${NB}=${NB}the number of values`],
        note: null,
      },
      {
        t: 'p',
        html: 'The expectation is the value you would converge to if you averaged the outcomes over a very large number of repetitions of the experiment; it is a single number summarising the “centre” of the whole distribution, and it need not equal any value the variable can actually take.',
      },
      { t: 'p', html: `<b>Expectation of ${X2}</b> (needed for variance):` },
      {
        t: 'formula',
        kicker: `Expectation of ${X2}`,
        main: `${EX2} = ${SUMN}${NB}${XI2}${NB}${PI}`,
        legend: [`${XI}${NB}=${NB}the values of ${X}`, `${PI}${NB}=${NB}the probability ${PX(XI)}`],
        note: null,
      },
      { t: 'p', html: '<b>Variance</b> (two equivalent forms):' },
      {
        t: 'formula',
        kicker: 'Variance',
        main: `${SG2} = ${VX} = ${I('E')}[(${X} − ${MU})<sup>2</sup>]<br>= ${SUMN}(${XI} − ${MU})<sup>2</sup>${PI}<br>= ${EX2} − ${EX_SQ} (computational form)`,
        legend: [`${MU}${NB}=${NB}the mean ${EX}`, `${XI}${NB}=${NB}the values of ${X}`, `${PI}${NB}=${NB}the probability ${PX(XI)}`],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Standard deviation',
        main: `${SG} = √${VX} = √(${EX2} − ${MU2})`,
        legend: [`${MU}${NB}=${NB}the mean ${EX}`],
        note: null,
      },
      { t: 'p', html: '<b>Linear transformation properties</b> (heavily used in JEE):' },
      {
        t: 'formula',
        kicker: 'Linear transformation properties',
        main: `${E(AXB)} = ${a}${NB}${EX} + ${b}<br>${VAR(AXB)} = ${sq(a)}${NB}${VX}`,
        legend: [`${a}${NB}=${NB}the scale factor`, `${b}${NB}=${NB}the constant shift`],
        note: null,
      },
      {
        t: 'p',
        html: `Note the constant ${b} shifts the mean but <b>never</b> affects the variance (sliding all data sideways changes the average, not the spread), and the scale factor ${a} enters variance <b>squared</b>.`,
      },
      {
        t: 'p',
        html: `<b>Notation & nature.</b> ${XI} are the values, ${PI}${NB}= ${PX(XI)}; ${MU}, ${SG} carry the same units as ${X} while ${SG2} carries squared units; all probabilities are dimensionless numbers in [0,${NB}1].`,
      },

      { t: 'part', title: 'Key procedures and derivations' },
      {
        t: 'proc',
        title: 'Procedure A: Building a probability distribution',
        steps: [
          'Identify the random variable and list <b>every</b> value it can take.',
          'For each value, compute its probability using counting, conditional probability, or the multiplication theorem (Topic 01).',
          `<b>Validate:</b> confirm ${SUM_PI}${NB}=${NB}1. If it doesn’t, a value is missing or a probability is wrong: fix before proceeding.`,
        ],
      },
      {
        t: 'p',
        html: `<b>Procedure B: Finding an unknown constant ${k}.</b> When a distribution is given in terms of ${k}, impose ${SUM_PI}${NB}=${NB}1 and solve the resulting equation for ${k}. Then check that every resulting probability lies in [0,${NB}1]: a value of ${k} that produces a negative probability must be rejected.`,
      },
      {
        t: 'p',
        html: `<b>Derivation: the computational form of variance.</b> <b>Claim:</b> ${VX}${NB}=${NB}${EX2}${NB}− ${EX_SQ}.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning.</b> Start from the definition and expand the square inside the expectation:<br>${VX}${NB}=${NB}${I('E')}[(${X}${NB}− ${MU})<sup>2</sup>]<br>= ${I('E')}[${X2}${NB}−${NB}2${MU}${X}${NB}+${NB}${MU2}].`,
      },
      {
        t: 'p',
        html: `Expectation distributes across a sum (it is just a weighted sum), and constants pull out:<br>= ${EX2}${NB}−${NB}2${MU}${NB}${EX}${NB}+${NB}${MU2}.`,
      },
      {
        t: 'p',
        html: `Now use ${EX}${NB}=${NB}${MU}:<br>= ${EX2}${NB}−${NB}2${MU}${NB}·${NB}${MU}${NB}+${NB}${MU2}<br>= ${EX2}${NB}−${NB}2${MU2}${NB}+${NB}${MU2}${NB}=${NB}${EX2}${NB}− ${MU2}. ■`,
      },
      {
        t: 'p',
        html: `<b>Why this matters:</b> the definition ∑(${XI}${NB}−${NB}${MU})<sup>2</sup>${PI} forces you to subtract ${MU} from every value first (tedious, error-prone with decimals). The computational form lets you accumulate ${SUM_XP} and ${SUM_X2P} in a single table pass, then combine at the end: far faster and far less prone to slips.`,
      },
      {
        t: 'p',
        html: `<b>Procedure C: the four-column table (the method to use every time).</b> Set up four columns: ${XI}, ${PI}, ${XI}${PI}, and ${XI2}${PI}. Fill one row per value, then sum the last two columns. As a worked illustration, take ${X}${NB}∶${NB}${SET('2', '4', '6')} with ${I('P')}${NB}∶${NB}${SET('0.5', '0.3', '0.2')}:`,
      },
      {
        t: 'table',
        title: null,
        head: [XI, PI, `${XI}${PI}`, `${XI2}${PI}`],
        rows: [
          ['2', '0.5', '1.0', '2.0'],
          ['4', '0.3', '1.2', '4.8'],
          ['6', '0.2', '1.2', '7.2'],
          ['sum', '1.0', '3.4', '14.0'],
        ],
      },
      {
        t: 'p',
        html: `The third-column total is ${EX}${NB}=${NB}3.4; the fourth-column total is ${EX2}${NB}=${NB}14.0; hence<br>${VX}${NB}=${NB}14.0${NB}− (3.4)<sup>2</sup>${NB}=${NB}14.0${NB}−${NB}11.56${NB}=${NB}2.44.<br>Notice the ${PI} column summing to 1 doubles as your validity check before you even reach the mean. This layout converts any mean/variance question into mechanical arithmetic and is exactly what earns full method marks in Boards.`,
      },
      {
        t: 'p',
        html: `<b>Derivation: variance under a linear shift.</b> <b>Claim:</b> ${VAR(AXB)}${NB}= ${sq(a)}${NB}${VX}. Let ${Y}${NB}=${NB}${AXB}. Then ${E(Y)}${NB}=${NB}${a}${EX}${NB}+${NB}${b}${NB}=${NB}${a}${MU}${NB}+${NB}${b}, so<br>${VAR(Y)}${NB}=${NB}${I('E')}[(${Y}${NB}− ${E(Y)})<sup>2</sup>]<br>= ${I('E')}[(${a}${X}${NB}+${NB}${b}${NB}−${NB}${a}${MU}${NB}−${NB}${b})<sup>2</sup>]<br>= ${I('E')}[${sq(a)}(${X}${NB}−${NB}${MU})<sup>2</sup>]${NB}= ${sq(a)}${NB}${VX}.<br>The +${b} cancels itself out, confirming that a pure shift leaves spread untouched. ■`,
      },
      {
        t: 'p',
        html: `<b>Why squaring?</b> A natural first attempt at “spread” would be the average signed deviation ∑(${XI}${NB}−${NB}${MU})${PI}, but this is always exactly 0, because the positive deviations above the mean perfectly cancel the negative ones below it (that is literally what makes ${MU} the balance point). Squaring each deviation kills the sign so nothing cancels, and it also penalises far-flung values more heavily than near ones: a value twice as far from the mean contributes four times as much to the variance. This is precisely why an erratic batsman’s occasional duck-and-century swings inflate variance so dramatically: the big deviations dominate once squared. Taking the square root at the end (to get ${SG}) simply returns us to the original units of ${X}.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A fair coin is tossed three times. Let ${X} be the number of heads. Find the probability distribution of ${X}, its mean, and its variance.`,
        steps: [
          `${X} can be 0, 1, 2, 3. With 8 equally likely outcomes:<br>${PX('0')}${NB}=${NB}${fr('1', '8')}, ${PX('1')}${NB}=${NB}${fr('3', '8')},<br>${PX('2')}${NB}=${NB}${fr('3', '8')}, ${PX('3')}${NB}=${NB}${fr('1', '8')}.`,
          `<b>Check:</b> ${fr('1', '8')}${NB}+${NB}${fr('3', '8')}${NB}+${NB}${fr('3', '8')}${NB}+${NB}${fr('1', '8')}${NB}=${NB}1.${NB}✓`,
          `${MU}${NB}=${NB}${EX}${NB}=${NB}0${NB}·${NB}${fr('1', '8')}${NB}+${NB}1${NB}·${NB}${fr('3', '8')}${NB}+ 2${NB}·${NB}${fr('3', '8')}${NB}+${NB}3${NB}·${NB}${fr('1', '8')}<br>= ${fr('0 + 3 + 6 + 3', '8')}${NB}=${NB}${fr('12', '8')}${NB}=${NB}${fr('3', '2')}.`,
          `${EX2}${NB}=${NB}0${NB}·${NB}${fr('1', '8')}${NB}+${NB}1${NB}·${NB}${fr('3', '8')}${NB}+ 4${NB}·${NB}${fr('3', '8')}${NB}+${NB}9${NB}·${NB}${fr('1', '8')}<br>= ${fr('0 + 3 + 12 + 9', '8')}${NB}=${NB}${fr('24', '8')}${NB}=${NB}3.`,
          `${VX}${NB}=${NB}${EX2}${NB}−${NB}${MU2}${NB}=${NB}3${NB}− ${FP('3', '2', '2')}<br>= 3${NB}−${NB}${fr('9', '4')}${NB}=${NB}${fr('3', '4')}.`,
          `<b>Cross-check via the deviation form:</b><br>∑(${XI}${NB}−${NB}${fr('3', '2')})<sup>2</sup>${PI}<br>= (${fr('9', '4')})${NB}·${NB}${fr('1', '8')}${NB}+${NB}(${QUART})${NB}·${NB}${fr('3', '8')}${NB}+<br>(${QUART})${NB}·${NB}${fr('3', '8')}${NB}+${NB}(${fr('9', '4')})${NB}·${NB}${fr('1', '8')}<br>= ${fr('9', '32')}${NB}+${NB}${fr('3', '32')}${NB}+${NB}${fr('3', '32')}${NB}+${NB}${fr('9', '32')}<br>= ${fr('24', '32')}${NB}=${NB}${fr('3', '4')},<br>agreeing with the computational form. Note the mean 1.5 is not a value ${X} ever takes, which is perfectly normal: it is the long-run average number of heads per three tosses.`,
        ],
        ans: `Mean${NB}=${NB}${fr('3', '2')}, variance${NB}=${NB}${fr('3', '4')} (so${NB}${SG}${NB}=${NB}${fr('√3', '2')}${NB}≈${NB}0.87).`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `For the distribution ${X}${NB}∶${NB}${SET('1', '2', '3')} with ${pr(X)}${NB}∶${NB}${SET('0.2', '0.5', '0.3')}, find the variance.`,
        steps: [
          `<b>Speed solution.</b> The trap is to compute ∑(${XI}${NB}−${NB}${MU})<sup>2</sup>${PI} with decimals: slow and slip-prone. Instead run one table pass for ${MU} and ${EX2}:<br>${MU}${NB}=${NB}1(0.2)${NB}+${NB}2(0.5)${NB}+ 3(0.3)<br>= 0.2${NB}+${NB}1.0${NB}+${NB}0.9${NB}=${NB}2.1,<br>${EX2}${NB}=${NB}1(0.2)${NB}+ 4(0.5)${NB}+${NB}9(0.3)<br>= 0.2${NB}+${NB}2.0${NB}+${NB}2.7${NB}=${NB}4.9,<br>${VX}${NB}=${NB}4.9${NB}−${NB}(2.1)<sup>2</sup>${NB}= 4.9${NB}−${NB}4.41${NB}=${NB}0.49.`,
          `The long route gives the same 0.49 but takes three subtractions and three squarings of awkward decimals: the computational form is the speed play. In a timed paper, computing ${MU} and ${EX2} in a single sweep of the table and subtracting once at the end is consistently the fastest reliable method, and it scales painlessly to distributions with five or six values where the deviation form becomes a decimal minefield.`,
        ],
        ans: `0.49 (so${NB}${SG}${NB}=${NB}0.7).`,
      },
      {
        t: 'ex',
        tag: 'JEE Main, Multi-concept: distribution + combinatorics',
        q: `Two cards are drawn together (without replacement) from a well-shuffled standard deck of 52. Let ${X} be the number of aces drawn. Find the probability distribution and the mean.`,
        steps: [
          `${X}${NB}∈ ${SET('0', '1', '2')}; total ways${NB}=${NB}${BI('52', '2')}${NB}=${NB}1326. There are 4 aces and 48 non-aces.`,
          `${PX('0')}${NB}=${NB}${fr(NC('48', '2'), NC('52', '2'))}<br>= ${fr('1128', '1326')}${NB}=${NB}${fr('188', '221')},<br>${PX('1')}${NB}= ${fr(`${NC('4', '1')}${NB}${NC('48', '1')}`, '1326')}<br>= ${fr('192', '1326')}${NB}=${NB}${fr('32', '221')},<br>${PX('2')}${NB}=${NB}${fr(NC('4', '2'), '1326')}<br>= ${fr('6', '1326')}${NB}=${NB}${fr('1', '221')}.`,
          `<b>Check:</b> ${fr('188 + 32 + 1', '221')}${NB}=${NB}${fr('221', '221')}${NB}=${NB}1.${NB}✓`,
          `${EX}${NB}=${NB}0${NB}·${NB}${fr('188', '221')}${NB}+${NB}1${NB}·${NB}${fr('32', '221')}${NB}+ 2${NB}·${NB}${fr('1', '221')}<br>= ${fr('34', '221')}${NB}=${NB}${fr('2', '13')}.`,
          `(Sanity: each card is an ace with chance ${fr('4', '52')}${NB}=${NB}${fr('1', '13')}, and the mean count over two cards is 2${NB}·${NB}${fr('1', '13')}${NB}=${NB}${fr('2', '13')}: matches.)`,
        ],
        ans: `Distribution as above; mean${NB}=${NB}${fr('2', '13')}${NB}≈${NB}0.154.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A discrete random variable ${X} takes values 1, 2, 3, 4 with ${PX(x)}${NB}=${NB}${k}${x} for a constant ${k}. (i) Find ${k}. (ii) Find ${EX} and ${VX}. (iii) If ${Y}${NB}=${NB}2${X}${NB}−${NB}1, find ${E(Y)} and ${VAR(Y)} without rebuilding a table.`,
        steps: [
          `(i) ${SUM_PI}${NB}=${NB}${k}(1${NB}+${NB}2${NB}+${NB}3${NB}+${NB}4)${NB}= 10${k}${NB}=${NB}1${NB}⇒${NB}${k}${NB}=${NB}${fr('1', '10')}. (All four probabilities ${fr('1', '10')}, ${fr('2', '10')}, ${fr('3', '10')}, ${fr('4', '10')} lie in [0,${NB}1].${NB}✓)`,
          `(ii) ${EX}${NB}=${NB}${SUM_XP}${NB}= ${fr('1 · 1 + 2 · 2 + 3 · 3 + 4 · 4', '10')}<br>= ${fr('1 + 4 + 9 + 16', '10')}${NB}=${NB}${fr('30', '10')}${NB}=${NB}3.<br>${EX2}${NB}= ${fr(`${sq('1')} · 1 + ${sq('2')} · 2 + ${sq('3')} · 3 + ${sq('4')} · 4`, '10')}<br>= ${fr('1 + 8 + 27 + 64', '10')}${NB}=${NB}${fr('100', '10')}${NB}=${NB}10.<br>${VX}${NB}=${NB}10${NB}−${NB}${sq('3')}${NB}=${NB}1.`,
          `(iii) Use the linear-transformation rules (no new table needed):<br>${E(Y)}${NB}=${NB}2${EX}${NB}−${NB}1${NB}= 2(3)${NB}−${NB}1${NB}=${NB}5,<br>${VAR(Y)}${NB}= ${sq('2')}${NB}${VX}${NB}=${NB}4(1)${NB}=${NB}4.`,
          `<b>Reading the result:</b> doubling ${X} (the factor ${rel(a, '=', '2')}) quadrupled the spread, while the −1 shift moved the mean but left the variance alone: a concrete demonstration of why the scale factor enters variance as ${sq(a)} and the additive constant drops out entirely. Recognising this lets you transform a random variable’s summary statistics in your head, skipping a full second table.`,
        ],
        ans: `${k}${NB}=${NB}${fr('1', '10')}; ${EX}${NB}=${NB}3, ${VX}${NB}=${NB}1; ${E(Y)}${NB}=${NB}5, ${VAR(Y)}${NB}=${NB}4.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Two fair dice are rolled. Let ${X} be the number of dice showing a six. Find the probability distribution of ${X} and its mean.`,
            a: `${pr('0')}${NB}=${NB}${fr('25', '36')}, ${pr('1')}${NB}=${NB}${fr('10', '36')}, ${pr('2')}${NB}=${NB}${fr('1', '36')}; mean${NB}=${NB}${fr('1', '3')}`,
          },
          {
            q: `<b>[JEE Main]</b> A distribution is ${X}${NB}∶${NB}${SET('0', '1', '2', '3')} with ${pr(X)}${NB}∶${NB}${SET('0.1', '0.3', '0.4', '0.2')}. Find ${EX} and ${VX}.`,
            a: `${EX}${NB}=${NB}1.7, ${VX}${NB}=${NB}0.81`,
          },
          {
            q: `<b>[JEE Main]</b> For ${X} taking values 1, 2, 3, 4, 5 with ${PX(x)}${NB}=${NB}${c}${sq(x)}, find ${c} and ${pr(rel(X, '≥', '4'))}.`,
            a: `${c}${NB}=${NB}${fr('1', '55')}, ${pr(rel(X, '≥', '4'))}${NB}=${NB}${fr('41', '55')}`,
          },
          {
            q: `<b>[JEE Advanced]</b> A random variable ${X} has ${EX}${NB}=${NB}4 and ${VX}${NB}=${NB}9. Find ${EX2}, and find ${E(`3${X} + 2`)} and ${VAR(`3${X} + 2`)}.`,
            a: `${EX2}${NB}=${NB}25, ${E(`3${X} + 2`)}${NB}=${NB}14, ${VAR(`3${X} + 2`)}${NB}=${NB}81`,
          },
          {
            q: `<b>[JEE Advanced]</b> Three balls are drawn together from a bag containing 4 red and 6 white balls. Let ${X} be the number of red balls drawn. Find the probability distribution and the mean of ${X}.`,
            a: `${pr('0')}${NB}=${NB}${fr('1', '6')}, ${pr('1')}${NB}=${NB}${fr('1', '2')}, ${pr('2')}${NB}=${NB}${fr('3', '10')}, ${pr('3')}${NB}=${NB}${fr('1', '30')}; mean${NB}=${NB}${fr('6', '5')}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For the distribution ${X}${NB}∶${NB}${SET('1', '3', '5')} with ${pr(X)}${NB}∶${NB}${SET('0.3', '0.4', k)}, the value of ${k} and ${EX} are:`,
        opts: [
          { label: `${rel(k, '=', '0.3')}, ${EX}${NB}=${NB}3.0`, nudge: null },
          { label: `${rel(k, '=', '0.4')}, ${EX}${NB}=${NB}3.0`, nudge: `<b>(b)</b>: ${rel(k, '=', '0.4')} makes the probabilities add to 1.1, so it is not a distribution (and it would give ${EX}${NB}=${NB}3.5, not 3.0).` },
          { label: `${rel(k, '=', '0.3')}, ${EX}${NB}=${NB}2.9`, nudge: '<b>(c)</b> slips in the weighted sum.' },
          {
            label: `${rel(k, '=', '0.7')}, ${EX}${NB}=${NB}3.2`,
            nudge: `<b>(d)</b> takes ${rel(k, '=', '0.7')}, forgetting the existing 0.4 already accounts for part of the total.`,
          },
        ],
        correct: 0,
        solution: `Pin ${k} from the sum-to-one rule first: 0.3${NB}+${NB}0.4${NB}+${NB}${k}${NB}=${NB}1${NB}⇒ ${rel(k, '=', '0.3')}. Then<br>${EX}${NB}=${NB}1(0.3)${NB}+${NB}3(0.4)${NB}+ 5(0.3)<br>= 0.3${NB}+${NB}1.2${NB}+${NB}1.5${NB}=${NB}3.0.<br>The discipline: solve for ${k} from ${SUM_PI}${NB}=${NB}1 before touching the mean.`,
      },
      {
        t: 'mcq',
        q: `If ${VX}${NB}=${NB}5, then ${VAR(`2${X} + 7`)} is:`,
        opts: [
          { label: '5', nudge: '<b>(a)</b> forgets the scale factor entirely.' },
          { label: '10', nudge: `<b>(b)</b> multiplies by 2 instead of ${sq('2')}.` },
          { label: '17', nudge: '<b>(c)</b> 17\u00a0=\u00a02\u00a0×\u00a05\u00a0+\u00a07: treats the variance like the mean (scales by 2 and adds the 7).' },
          { label: '20', nudge: null },
        ],
        correct: 3,
        solution: `${VAR(`2${X} + 7`)}${NB}= ${sq('2')}${NB}${VX}${NB}=${NB}4${NB}×${NB}5${NB}=${NB}20. The constant +7 shifts the mean but leaves spread untouched: the most-tested fact here.`,
      },
      {
        t: 'mcq',
        q: `The mean of a random variable that takes value ${XI} with probability ${PI} is:`,
        opts: [
          {
            label: fr(`∑${XI}`, n),
            nudge: '<b>(a)</b> is the plain arithmetic average: the single most common conceptual error, ignoring that values occur with different probabilities.',
          },
          { label: SUM_XP, nudge: null },
          { label: SUM_PI, nudge: '<b>(c)</b> equals 1 (the total probability).' },
          { label: SUM_X2P, nudge: `<b>(d)</b> is ${EX2}, used in variance, not the mean.` },
        ],
        correct: 1,
        solution: `The mean is the probability-weighted sum ${SUM_XP}.`,
      },
      {
        t: 'mcq',
        q: `For a random variable ${X}, ${EX}${NB}=${NB}2 and ${EX2}${NB}=${NB}6. The standard deviation of ${X} is:`,
        opts: [
          { label: '4', nudge: '<b>(a)</b> squares the mean and stops.' },
          { label: '2', nudge: '<b>(b)</b> reports the variance as the SD (forgot the square root).' },
          { label: '√2', nudge: null },
          { label: '6', nudge: `<b>(d)</b> quotes ${EX2} directly.` },
        ],
        correct: 2,
        solution: `${VX}${NB}=${NB}${EX2}${NB}−${NB}${EX_SQ}${NB}= 6${NB}−${NB}4${NB}=${NB}2, so ${SG}${NB}=${NB}√2. SD is always the square root of variance.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Plain average instead of weighted.</b> Computing ${fr(`∑${XI}`, n)} rather than ${SUM_XP}. The mean must weight each value by its probability.`,
          `<b>Forgetting to square the mean in variance.</b> Writing Var${NB}=${NB}${EX2}${NB}−${NB}${EX} instead of ${EX2}${NB}− ${EX_SQ}. The subtracted term is the mean <b>squared</b>.`,
          `<b>Confusing variance with standard deviation.</b> Reporting ${SG2} when ${SG} is asked (or vice versa). SD is the square root of variance and carries the same units as ${X}.`,
          `<b>Skipping the sum-to-one check.</b> Not validating ${SUM_PI}${NB}=${NB}1, or accepting a value of ${k} that yields a negative probability.`,
          `<b>Mishandling formula-defined distributions.</b> When ${PX(x)} is given as a formula like ${k}${x} or ${c}${sq(x)}, students sometimes plug in values without first finding the constant, or forget to verify the formula returns valid probabilities across the whole range. Always solve ${SUM_PI}${NB}=${NB}1 for the constant, then confirm each resulting probability is non-negative and at most 1 before using the distribution.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Lay every distribution problem out as a table with columns ${XI}, ${PI}, ${XI}${PI}, ${XI2}${PI}. Summing the third column gives ${EX}; summing the fourth gives ${EX2}; then Var${NB}=${NB}${EX2}${NB}−${NB}${EX_SQ} in one final line. This single-pass table is faster and far safer than the deviation formula, and it makes a full Board solution look organised and complete. Quick sanity check: variance can never be negative; if it comes out negative, you have most likely dropped the square on ${MU}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Random variable</b>', note: `a rule assigning a real number to each outcome, ${X}${NB}∶${NB}${S}${NB}→${NB}ℝ.` },
          { f: '<b>Distribution valid if and only if</b>', note: `every ${rel(PI, '≥', '0')} <b>and</b> ${SUM_PI}${NB}=${NB}1.` },
          { f: '<b>Mean (expectation)</b>', note: `${MU}${NB}=${NB}${EX}${NB}=${NB}${SUM_XP} (probability-weighted, not plain average).` },
          { f: `<b>Variance</b>: ${SG2}${NB}=${NB}${EX2}${NB}−${NB}${MU2}${NB}=${NB}${SUM_X2P}${NB}− ${MU2}.`, note: `<b>SD:</b> ${SG}${NB}=${NB}√${SG2}.` },
          { f: '<b>Linear rules</b>', note: `${E(AXB)}${NB}=${NB}${a}${EX}${NB}+${NB}${b}; ${VAR(AXB)}${NB}= ${sq(a)}${NB}${VX} (the${NB}+${b} does not affect variance).` },
          { f: `<b>Variance${NB}≥${NB}0 always</b>`, note: `a negative answer usually means a dropped ${MU2} square.` },
        ],
        aids: [
          '<b>Mnemonic:</b> “Weight then sum for the mean; square-mean-out for the variance.”',
          `<b>Table trick:</b> columns ${XI} ∣ ${PI} ∣ ${XI}${PI} ∣ ${XI2}${PI}: third column sum${NB}=${NB}${EX}, fourth column sum${NB}=${NB}${EX2}, and the ${PI} column must total 1 as a built-in validity check.`,
        ],
      },
    ],
  },
  // ──────────────── Topic 04 · Subtopic 04 · pp. 838–848 ────────────────
  {
    n: '04',
    title: 'Bernoulli Trials & Binomial Distribution',
    kalam: 'A binomial is completely determined by just two numbers, n and p, so two facts (mean and variance) are exactly enough to pin it down.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `The grand finale of the chapter. Older CBSE papers almost always carried a 5–6 mark question on the binomial distribution ${ESTIMATE}, typically “find the probability of exactly/at least ${r} successes” or “given mean and variance, find ${n} and ${p}”; the rationalised NCERT book and the current CBSE syllabus no longer include Bernoulli trials and the binomial distribution (as far as we know). JEE Main places one direct question most years ${ESTIMATE}; JEE Advanced layers in the mode, “at least one” via the complement, and parameter-recovery from mean and variance. It rests entirely on independence (Topic 01) and the distribution machinery (Topic 03).`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Think of a penalty shootout. Each kick has just two outcomes (goal or miss) and a striker of fixed quality converts with some steady probability, say 0.8, on every attempt. A single such two-outcome attempt, with a fixed success probability, is a <b>Bernoulli trial</b>: the atom of this whole topic. One coin toss, one bulb tested for defect, one student passing or failing, one archer’s single arrow: each is a Bernoulli trial the moment we agree to call one result “success” and the other “failure.” The word “success” is just a label for the outcome we are counting; it need not be anything good, so “drawing a defective item” is perfectly valid as a success when defectives are what we want to count.`,
      },
      {
        t: 'p',
        html: `Now repeat the kick ${n} times under identical conditions and ask the natural question: how many goals? That count (the number of successes in ${n} independent, identical Bernoulli trials) is a random variable, and its distribution is the <b>binomial distribution</b>. It is the single most important named distribution in school probability because so many real situations fit its mould: defectives in a carton, sixes in a string of dice rolls, correct answers from pure guessing, rainy days in a week.`,
      },
      {
        t: 'p',
        html: `To make the pattern unmistakable, notice what all these share. A quality inspector checking 20 phones, each independently defective with the same small probability, is counting binomial successes. A cricketer facing 6 identical deliveries and either scoring a boundary or not on each is generating a binomial count. A student blindly guessing all 10 questions of a four-option test is running 10 identical trials with success probability ${QUART}. The surface stories differ wildly, but strip them down and each is “count the successes in ${n} fixed, independent, equal-probability yes/no trials”, and that single skeleton is what the binomial distribution describes.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Picture flipping a bent coin, bent so it lands heads (success) with probability ${p} and tails (failure) with probability ${q}${NB}=${NB}1${NB}−${NB}${p}, exactly ${n} times. The binomial distribution answers “what’s the chance of getting exactly ${r} heads?” To get ${r} successes you must (i) pick which ${r} of the ${n} trials succeed, and (ii) have those succeed while the rest fail. Step (i) can happen in ${nCr} ways; step (ii) carries probability ${PRQ} for each such way because the trials are independent. Multiply and you have the famous formula ${BINOM_PMF}.`,
      },
      {
        t: 'p',
        html: `Four conditions must hold for trials to be <b>Bernoulli</b>, and hence for the count to be binomial: there is a <b>finite, fixed</b> number of trials ${n}; the trials are <b>independent</b>; each trial has exactly <b>two outcomes</b> (success/failure); and the success probability ${p} stays <b>constant</b> across trials. Strip away any one of these and the binomial formula no longer applies.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> The independence and constant-${p} requirements are where most real problems get disqualified. The classic violation is <b>drawing without replacement</b>: pull cards one by one and the composition of the deck changes, so ${p} shifts trial to trial and the draws are dependent: not binomial. (Replace the card each time and it becomes binomial.) Also note an identity worth carrying: for a binomial variable, the variance ${NPQ} is <b>always strictly less than</b> the mean ${NP}, because ${rel(q, '<', '1')}. If a problem ever hands you a “binomial” with variance larger than the mean, the data is inconsistent: a favourite trap.`,
      },
      {
        t: 'p',
        html: `It also helps to picture the shape of the distribution. When ${rel(p, '=', '0.5')} the binomial is perfectly <b>symmetric</b>: successes and failures are equally likely, so the bar chart is a mirror image about its centre (think of counting heads in fair-coin tosses). When ${rel(p, '>', '0.5')} the distribution leans toward higher counts (left-skewed), and when ${rel(p, '<', '0.5')} it leans toward lower counts (right-skewed). The peak sits at the <b>mode</b>, near ${NP}, and as ${n} grows the whole shape becomes smoother and more bell-like. Carrying this mental picture lets you sanity-check answers: a computed probability that puts the peak far from ${NP} is almost certainly an arithmetic error.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Bernoulli trial.</b> A single trial with exactly two outcomes: success (probability ${p}) and failure (probability ${q}${NB}=${NB}1${NB}−${NB}${p}). A sequence of trials is Bernoulli if: (i) ${n} is finite and fixed, (ii) trials are independent, (iii) each has two outcomes, (iv) ${p} is constant.`,
      },
      {
        t: 'p',
        html: `<b>Binomial distribution.</b> If ${X} counts the successes in ${n} Bernoulli trials, then ${X} follows a binomial distribution with parameters ${n} and ${p}, written ${X}${NB}∼${NB}${BNP}, with`,
      },
      {
        t: 'formula',
        kicker: 'Binomial distribution',
        main: `${BINOM_PMF}<br>${r} = 0, 1, 2, …, ${n}<br>${q} = 1 − ${p}`,
        legend: [
          `${X}${NB}=${NB}the binomial random variable`,
          `${n}${NB}=${NB}number of trials`,
          `${p}${NB}=${NB}success probability`,
          `${q}${NB}=${NB}failure probability`,
          `${r}${NB}=${NB}number of successes`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The ${n}${NB}+${NB}1 probabilities are precisely the successive terms of the expansion of (${q}${NB}+${NB}${p})<sup>${n}</sup>, which is why they automatically sum to 1.`,
      },
      {
        t: 'formula',
        kicker: 'Mean, variance and standard deviation',
        main: `Mean (expectation): ${MU} = ${EX} = ${NP}<br>Variance: ${SG2} = ${VX} = ${NPQ}<br>Standard deviation: ${SG} = √(${NPQ})`,
        legend: [`${n}${NB}=${NB}number of trials`, `${p}${NB}=${NB}success probability`, `${q}${NB}=${NB}failure probability`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Mode</b> (the most probable number of successes): the integer(s) ${r} satisfying`,
      },
      {
        t: 'formula',
        kicker: 'Mode',
        main: MODE_BAND,
        legend: [`${r}${NB}=${NB}the most probable number of successes (an integer)`, `${n}, ${p}${NB}=${NB}the number of trials and the success probability`],
        note: null,
      },
      {
        t: 'p',
        html: `When ${N1P} is not an integer, the mode is the single value ⌊${N1P}⌋.`,
      },
      {
        t: 'p',
        html: `<b>Key relationships & notation.</b> ${n}${NB}=${NB}number of trials, ${p}${NB}=${NB}success probability, ${q}${NB}=${NB}1${NB}−${NB}${p}${NB}=${NB}failure probability, ${r}${NB}=${NB}number of successes, ${X}${NB}=${NB}the binomial random variable. Always 0${NB}<${NB}${p}${NB}<${NB}1 in a genuine problem; all probabilities are dimensionless and lie in [0,${NB}1]; and ${SG2}${NB}=${NB}${NPQ}${NB}<${NB}${NP}${NB}=${NB}${MU} always.`,
      },
      {
        t: 'p',
        html: `<b>A few structural facts worth remembering.</b> A binomial variable on ${n} trials has exactly ${n}${NB}+${NB}1 possible values (0 through ${n}), so its distribution always has ${n}${NB}+${NB}1 entries. The distribution is <b>symmetric</b> precisely when ${p}${NB}=${NB}${HALF} (then ${PX(r)}${NB}= ${PX(`${n} − ${r}`)}), and increasingly skewed as ${p} moves away from ${HALF}. Two binomials with the same ${n} but success probabilities ${p} and 1${NB}−${NB}${p} are mirror images of each other. These facts let you predict the answer’s shape before computing and catch gross errors at a glance.`,
      },

      { t: 'part', title: 'Theorems and derivations' },
      { t: 'p', html: 'Before any formula, run a four-point check and extract the parameters:' },
      {
        t: 'proc',
        title: 'Procedure: recognising and setting up a binomial problem',
        steps: [
          '<b>Two outcomes?</b> Define clearly what counts as “success.” (In “exactly 2 sixes,” success\u00a0=\u00a0rolling a six.)',
          `<b>Fixed ${n}?</b> Identify the number of trials.`,
          `<b>Independent with constant ${p}?</b> Confirm the trials don’t influence each other and ${p} doesn’t drift (the with-replacement test).`,
          `<b>Extract ${p}, then ${q}${NB}=${NB}1${NB}−${NB}${p}, ${n}, and the target</b> ${r} (or range of ${r}), and only then substitute into ${nCr}${NB}${PRQ}.`,
        ],
      },
      {
        t: 'p',
        html: `Skipping step 1, being sloppy about which outcome is “success”, is what leads to swapping ${p} and ${q} later. Naming success explicitly up front prevents the single most common binomial error.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 1: the binomial formula.</b> <b>Setup:</b> ${n} independent Bernoulli trials, each success with probability ${p}, failure with ${q}${NB}=${NB}1${NB}−${NB}${p}. We want ${PX(r)}, the probability of exactly ${r} successes.`,
      },
      {
        t: 'p',
        html: `Fix one specific pattern of ${r} successes and ${n}${NB}−${NB}${r} failures, say successes on the first ${r} trials and failures on the rest. Because the trials are independent, the probability of that exact sequence is the product<br>${p}${NB}·${NB}${p} ⋯ ${p}${NB}${NB}${q}${NB}·${NB}${q} ⋯ ${q}${NB}= ${PRQ}<br>(${r} factors ${p}, ${n}${NB}−${NB}${r} factors ${q}).`,
      },
      {
        t: 'p',
        html: `Crucially, every arrangement of ${r} successes among the ${n} trials carries the <b>same</b> probability ${PRQ}: only the order differs. The number of distinct arrangements is the number of ways to choose which ${r} trials are the successes, namely ${nCr}. Since these arrangements are mutually exclusive, we add their equal probabilities:<br>${BINOM_PMF}. ■`,
      },
      {
        t: 'p',
        html: `Notice how the formula splits cleanly into three meaningful pieces: ${nCr} (the number of ways the successes can be positioned), ${pw(p, r)} (the successes happening), and ${pw(q, `${n}−${r}`)} (the failures happening). Reading it this way, rather than memorising it as a symbol blob, makes it almost impossible to misplace the exponents.`,
      },
      {
        t: 'p',
        html: `<b>Check: probabilities sum to 1.</b> By the Binomial Theorem,<br>${SUMR('0')}${NB}${PX(r)}${NB}= ${SUMR('0')}${NB}${nCr}${NB}${PRQ}<br>= (${q}${NB}+${NB}${p})<sup>${n}</sup>${NB}=${NB}1<sup>${n}</sup>${NB}=${NB}1.${NB}✓`,
      },
      {
        t: 'p',
        html: `This is the reason the distribution is named “binomial”: its probabilities are the binomial expansion of (${q}${NB}+${NB}${p})<sup>${n}</sup>.`,
      },
      {
        t: 'p',
        html: `<b>Derivation 2: mean${NB}=${NB}${NP}.</b><br>${EX}${NB}= ${SUMR('0')}${NB}${r}${NB}${nCr}${NB}${PRQ}.`,
      },
      {
        t: 'p',
        html: `The ${rel(r, '=', '0')} term vanishes. Use the identity ${r}${NB}·${NB}${nCr}${NB}=${NB}${n}${NB}·${NB}${NC(`${n}−1`, `${r}−1`)}:<br>${EX}${NB}= ${SUMR('1')}${NB}${n}${NB}${NC(`${n}−1`, `${r}−1`)}${NB}${PRQ}<br>= ${NP}${SUMR('1')}${NB}${NC(`${n}−1`, `${r}−1`)}${NB}${pw(p, `${r}−1`)}${pw(q, `${n}−${r}`)}.`,
      },
      {
        t: 'p',
        html: `Substitute ${k}${NB}=${NB}${r}${NB}−${NB}1; the sum becomes<br>${SUM(`${k}=0`, `${n}−1`)}${NB}${NC(`${n}−1`, k)}${NB}${pw(p, k)}${pw(q, `(${n}−1)−${k}`)}${NB}= (${q}${NB}+${NB}${p})<sup>${n}−1</sup>${NB}=${NB}1.<br>Hence ${EX}${NB}=${NB}${NP}. ■`,
      },
      {
        t: 'p',
        html: `<b>Derivation 3: variance${NB}=${NB}${NPQ} (sketch).</b> Compute ${I('E')}[${X}(${X}${NB}−${NB}1)]${NB}=${NB}∑${r}(${r}${NB}−${NB}1)${NB}${nCr}${NB}${PRQ}${NB}=${NB}${n}(${n}${NB}−${NB}1)${sq(p)} by the same index-shift twice. Then<br>${VX}${NB}=${NB}${I('E')}[${X}(${X}${NB}−${NB}1)]${NB}+ ${EX}${NB}− ${EX_SQ}<br>= ${n}(${n}${NB}−${NB}1)${sq(p)}${NB}+${NB}${NP}${NB}−${NB}(${NP})<sup>2</sup><br>= ${NP}${NB}−${NB}${n}${sq(p)}${NB}=${NB}${NP}(1${NB}−${NB}${p})${NB}= ${NPQ}. ■`,
      },
      {
        t: 'p',
        html: `The takeaway: mean and variance of a binomial are read off instantly from ${n} and ${p}, no distribution table needed.`,
      },
      {
        t: 'p',
        html: `<b>A concrete check.</b> Take the tiny case ${I('B')}(2,${NB}${HALF}): two fair-coin tosses, ${X}${NB}=${NB}number of heads. The distribution is ${pr('0')}${NB}=${NB}${QUART}, ${pr('1')}${NB}=${NB}${HALF}, ${pr('2')}${NB}=${NB}${QUART}. Computing directly from Topic 03’s definitions:<br>${EX}${NB}=${NB}0(${QUART})${NB}+ 1(${HALF})${NB}+${NB}2(${QUART})${NB}=${NB}1,<br>which matches ${NP}${NB}=${NB}2${NB}·${NB}${HALF}${NB}=${NB}1. And<br>${EX2}${NB}=${NB}0(${QUART})${NB}+${NB}1(${HALF})${NB}+ 4(${QUART})${NB}=${NB}${fr('3', '2')},<br>so ${VX}${NB}=${NB}${fr('3', '2')}${NB}−${NB}1<sup>2</sup>${NB}=${NB}${HALF}, matching<br>${NPQ}${NB}=${NB}2${NB}·${NB}${HALF}${NB}·${NB}${HALF}${NB}=${NB}${HALF}.`,
      },
      {
        t: 'p',
        html: `The general formulas ${NP} and ${NPQ} agree exactly with the first-principles computation: reassuring confirmation that the shortcuts are not magic, just the table calculation done once and for all.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (older papers)',
        q: 'A fair die is rolled 5 times. Find the probability of getting exactly 2 sixes.',
        steps: [
          `Each roll is a Bernoulli trial: “six”${NB}=${NB}success with ${p}${NB}=${NB}${fr('1', '6')}, so ${q}${NB}=${NB}${fr('5', '6')}; ${rel(n, '=', '5')}, ${rel(r, '=', '2')}.`,
          `${PX('2')}${NB}= ${NC('5', '2')}${NB}${FP('1', '6', '2')}${FP('5', '6', '3')}<br>= 10${NB}·${NB}${fr('1', '36')}${NB}·${NB}${fr('125', '216')}<br>= ${fr('1250', '7776')}${NB}=${NB}${fr('625', '3888')}${NB}≈${NB}0.161.`,
          `<b>Follow-up (at most one six):</b><br>${pr(rel(X, '≤', '1'))}${NB}=${NB}${pr('0')}${NB}+ ${pr('1')}<br>= ${FP('5', '6', '5')}${NB}+ ${NC('5', '1')}${NB}(${fr('1', '6')})${FP('5', '6', '4')}<br>= ${fr('3125', '7776')}${NB}+ ${fr('5 · 625', '7776')}<br>= ${fr('3125 + 3125', '7776')}${NB}= ${fr('6250', '7776')}${NB}≈${NB}0.804.<br>Listing values 0, 1, …, 5 and computing the few you need was the standard Board layout.`,
        ],
        ans: `${fr('625', '3888')}${NB}≈${NB}0.161.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: 'In a production run, 5% of items are defective. A random sample of 10 items is taken. Find the probability that at least one is defective, and state the mean and variance of the number of defectives.',
        steps: [
          '<b>Speed solution.</b> “At least one” is the complement of “none”: never sum ten terms.',
          `${pr(rel(X, '≥', '1'))}${NB}=${NB}1${NB}− ${PX('0')}<br>= 1${NB}− ${NC('10', '0')}(0.05)<sup>0</sup>(0.95)<sup>10</sup><br>= 1${NB}− (0.95)<sup>10</sup>${NB}≈${NB}1${NB}−${NB}0.599${NB}=${NB}0.401.`,
          `Mean${NB}=${NB}${NP}${NB}= 10(0.05)${NB}=${NB}0.5; variance${NB}=${NB}${NPQ}${NB}= 10(0.05)${WJ}(0.95)${NB}=${NB}0.475.`,
          `<b>The trap:</b> computing ${pr('1')}${NB}+${NB}${pr('2')}${NB}+${NB}⋯${NB}+${NB}${pr('10')} wastes minutes and invites slips: the complement is one line. (Note variance 0.475${NB}<${NB}mean 0.5, as it must.) The result is also a useful reality check on intuition: even with only a 5% defect rate, inspecting ten items gives roughly a 40% chance of catching at least one defective; small per-item risks accumulate surprisingly fast over many trials.`,
        ],
        ans: `${pr(rel(X, '≥', '1'))}${NB}≈${NB}0.401; mean 0.5, variance 0.475.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main, Multi-concept: parameter recovery + binomial',
        q: `The mean and variance of a binomial variable ${X} are 4 and 2 respectively. Find ${n}, ${p}, and ${PX('2')}.`,
        steps: [
          `A binomial is completely determined by just two numbers, ${n} and ${p}, so two facts (mean and variance) are exactly enough to pin it down. From ${NP}${NB}=${NB}4 and ${NPQ}${NB}=${NB}2, divide:<br>${q}${NB}=${NB}${fr(NPQ, NP)}${NB}=${NB}${fr('2', '4')}${NB}=${NB}${HALF}${NB}⇒ ${p}${NB}=${NB}1${NB}−${NB}${q}${NB}=${NB}${HALF}.`,
          `Then ${NP}${NB}=${NB}4${NB}⇒${NB}${n}${NB}=${NB}${fr('4', p)}${NB}=${NB}8. So ${X}${NB}∼${NB}${I('B')}(8,${NB}${HALF})${NB}and<br>${PX('2')}${NB}= ${NC('8', '2')}${NB}${FP('1', '2', '2')}${FP('1', '2', '6')}<br>= ${NC('8', '2')}${NB}${FP('1', '2', '8')}${NB}=${NB}${fr('28', '256')}${NB}=${NB}${fr('7', '64')}${NB}≈${NB}0.109.`,
          `(<b>Cross-check:</b> variance${NB}=${NB}${NPQ}${NB}=${NB}8${NB}·${NB}${HALF}${NB}·${NB}${HALF}${NB}= 2 and mean${NB}=${NB}${NP}${NB}=${NB}4, matching the given data, and confirming variance${NB}<${NB}mean as required.)`,
        ],
        ans: `${rel(n, '=', '8')}, ${p}${NB}=${NB}${HALF}, ${PX('2')}${NB}=${NB}${fr('7', '64')}.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An archer hits the bull’s-eye with probability 0.8 on each shot and fires 6 independent shots. Find the most probable number of bull’s-eyes (the mode) and the probability of achieving it.',
        steps: [
          `Here ${rel(n, '=', '6')}, ${rel(p, '=', '0.8')}, so ${N1P}${NB}=${NB}7(0.8)${NB}=${NB}5.6, which is not an integer. The mode is therefore<br>${r}${NB}= ⌊${N1P}⌋${NB}=${NB}⌊5.6⌋${NB}= 5<br>(since 4.6${NB}≤${NB}${r}${NB}≤${NB}5.6${NB}⇒${NB}${rel(r, '=', '5')}).`,
          `${PX('5')}${NB}= ${NC('6', '5')}(0.8)<sup>5</sup>(0.2)<sup>1</sup><br>= 6${NB}(0.32768)${WJ}(0.2)${NB}= 0.393216${NB}≈${NB}0.393.`,
          `<b>Insight:</b> the mean is ${NP}${NB}=${NB}4.8, yet the single most likely count is 5: mean and mode need not coincide, and the mode formula pins the peak of the distribution directly. <b>Where the mode formula comes from:</b> the ratio of consecutive probabilities is<br>${RATIO};<br>the probabilities keep rising while this ratio exceeds 1 and start falling once it drops below 1. Requiring ${PX(r)}${NB}≥ ${PX(`${r} − 1`)} (the ratio at ${r} at least 1) and ${PX(`${r} + 1`)}${NB}≤ ${PX(r)} (the ratio at ${r}${NB}+${NB}1 at most 1) gives exactly the band ${MODE_BAND}, so the peak sits at the largest ${r} for which the climb is still happening.`,
        ],
        ans: 'Most probable number of hits\u00a0=\u00a05, with probability\u00a0≈\u00a00.393.',
      },
      { t: 'fig', id: 'm12-13-fig-13.3' },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE, older papers]</b> A fair coin is tossed 6 times. Find the probability of getting exactly 4 heads.',
            a: fr('15', '64'),
          },
          {
            q: `<b>[JEE Main]</b> The probability that a marksman hits a target is ${fr('1', '3')}. If he fires 5 shots, find the probability that he hits the target at least once.`,
            a: `1${NB}−${NB}${FP('2', '3', '5')}${NB}=${NB}${fr('211', '243')}`,
          },
          {
            q: `<b>[JEE Main]</b> The mean and variance of a binomial distribution are 2 and ${fr('4', '3')}. Find ${n} and ${p}.`,
            a: `${rel(n, '=', '6')}, ${p}${NB}=${NB}${fr('1', '3')}`,
          },
          {
            q: '<b>[JEE Advanced]</b> A fair coin is tossed 8 times. Find the most probable number of heads and its probability.',
            a: `mode${NB}=${NB}4, probability ${fr('35', '128')}`,
          },
          {
            q: '<b>[JEE Advanced]</b> A multiple-choice test has 10 questions, each with 4 options. A student guesses every answer. Find the probability of getting exactly 3 correct.',
            a: `${NC('10', '3')}${NB}${FP('1', '4', '3')}${FP('3', '4', '7')}${NB}= ${fr('262440', '1048576')}${NB}≈${NB}0.250`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `For a binomial distribution with 0${NB}<${NB}${p}${NB}<${NB}1, the variance is always:`,
        opts: [
          {
            label: 'greater than the mean',
            nudge: `<b>(a)</b>: impossible for a binomial: variance${NB}=${NB}${NPQ}${NB}=${NB}mean${NB}×${NB}${q}, and ${rel(q, '<', '1')}.`,
          },
          { label: 'less than the mean', nudge: null },
          {
            label: 'equal to the mean',
            nudge: `<b>(c)</b>: variance${NB}=${NB}mean is the Poisson distribution’s property; for a binomial it would need ${rel(q, '=', '1')}, i.e. ${rel(p, '=', '0')}.`,
          },
          { label: 'unrelated to the mean', nudge: `<b>(d)</b> ignores that both are built from the same ${n}, ${p}.` },
        ],
        correct: 1,
        solution: `Variance${NB}=${NB}${NPQ} and mean${NB}=${NB}${NP}; since ${q}${NB}=${NB}1${NB}−${NB}${p}${NB}<${NB}1, we have ${NPQ}${NB}<${NB}${NP}. This single fact (variance${NB}<${NB}mean for a binomial) instantly flags inconsistent data.`,
      },
      {
        t: 'mcq',
        q: `If ${X}${NB}∼${NB}${BNP}, then ${PX(r)} equals:`,
        opts: [
          { label: `${nCr}${NB}${PRQ}`, nudge: null },
          {
            label: `${nCr}${NB}${pw(p, `${n}−${r}`)}${pw(q, r)}`,
            nudge: `<b>(b)</b> swaps the exponents of ${p} and ${q}: the most common slip.`,
          },
          { label: PRQ, nudge: '<b>(c)</b> drops the combinatorial factor, counting only one arrangement.' },
          {
            label: `${nCr}${NB}${pw(p, r)}${pw(q, r)}`,
            nudge: `<b>(d)</b> uses the wrong total exponent (${r}${NB}+${NB}${r}${NB}≠${NB}${n}).`,
          },
        ],
        correct: 0,
        solution: `Successes carry ${p} (power ${r}), failures carry ${q} (power ${n}${NB}−${NB}${r}), and ${nCr} counts the arrangements.`,
      },
      {
        t: 'mcq',
        q: 'A fair coin is tossed 4 times. The probability of getting at least 3 heads is:',
        opts: [
          { label: fr('1', '16'), nudge: `<b>(a)</b> counts only ${PX('4')}.` },
          { label: fr('5', '16'), nudge: null },
          { label: QUART, nudge: `<b>(c)</b> ${QUART}${NB}=${NB}${fr('4', '16')} is ${PX('3')} alone: it reads “at least 3” as “exactly 3” and forgets ${PX('4')}.` },
          { label: fr('11', '16'), nudge: `<b>(d)</b> computes the complement ${pr(rel(X, '≤', '2'))} by mistake.` },
        ],
        correct: 1,
        solution: `${pr(rel(X, '≥', '3'))}${NB}=${NB}${pr('3')}${NB}+${NB}${pr('4')}<br>= ${NC('4', '3')}${NB}${FP('1', '2', '4')}${NB}+ ${NC('4', '4')}${NB}${FP('1', '2', '4')}<br>= ${fr('4 + 1', '16')}${NB}=${NB}${fr('5', '16')}.`,
      },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> a binomial experiment?',
        opts: [
          {
            label: 'Tossing a coin 20 times and counting heads',
            nudge: `<b>(a)</b>: 20 fixed, independent tosses, each head or not, with ${p}${NB}=${NB}${HALF} every time: binomial.`,
          },
          {
            label: 'Rolling a die 10 times and counting sixes',
            nudge: `<b>(b)</b>: 10 independent rolls, success${NB}=${NB}a six, ${p}${NB}=${NB}${fr('1', '6')} on every roll: binomial.`,
          },
          { label: 'Drawing 5 cards one by one <b>without replacement</b> and counting aces', nudge: null },
          {
            label: 'Testing 8 bulbs (each independently defective with probability 0.1) and counting defectives',
            nudge: `<b>(d)</b>: 8 bulbs, each independently defective with the same ${p}${NB}=${NB}0.1: binomial.`,
          },
        ],
        correct: 2,
        solution: `Without replacement, the success probability changes after each draw and the draws are dependent, violating constant-${p} and independence, so it is not binomial. This tests the four Bernoulli conditions directly.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Forcing binomial onto dependent trials.</b> Applying the formula to draws without replacement. There ${p} shifts each trial; it is not binomial.`,
          `<b>Swapping ${p} and ${q} (or ${r} and ${n}${NB}−${NB}${r}).</b> Writing ${pw(p, `${n}−${r}`)}${pw(q, r)} instead of ${PRQ}. Successes get ${p} raised to ${r}; failures get ${q} raised to ${n}${NB}−${NB}${r}.`,
          `<b>Believing variance can exceed mean.</b> For a binomial, ${NPQ}${NB}<${NB}${NP} always. A “binomial” with variance${NB}>${NB}mean signals an inconsistent or non-binomial setup.`,
          `<b>The long road to “at least one.”</b> Summing every term from 1 to ${n} instead of using ${pr(rel(X, '≥', '1'))}${NB}=${NB}1${NB}−${NB}${QN}.`,
          `<b>Dropping or miscounting the ${nCr} factor.</b> Writing just ${PRQ} forgets that there are many orders in which the ${r} successes can occur; each contributes equally, and ${nCr} counts them. Equally, miscomputing ${nCr} (e.g., using ${nCr}${NB}=${NB}${fr(`${n}!`, `${r}!`)} without the (${n}${NB}−${NB}${r})!) corrupts the answer. Always include the combinatorial factor and evaluate it carefully.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Any “at least”/“at most” question should trigger the complement reflex: ${pr(rel(X, '≥', '1'))}${NB}=${NB}1${NB}− ${PX('0')} and ${pr(rel(X, '≥', k))}${NB}=${NB}1${NB}− ∑<sub>${r}<${k}</sub>${NB}${PX(r)}, choosing whichever side has fewer terms. And for “mean & variance given, find ${n}, ${p},” always divide variance by mean first to get ${q} in one step (${q}${NB}=${NB}${fr(NPQ, NP)}), then ${p}${NB}=${NB}1${NB}−${NB}${q} and ${n}${NB}=${NB}${fr('mean', p)}. These two reflexes cover the bulk of exam binomial questions. A third time-saver: when you need several consecutive probabilities, compute ${PX('0')} once and then walk up using the ratio<br>${RATIO}:<br>each successive probability is the previous one times a simple factor, far quicker than recomputing ${nCr}${NB}${PRQ} from scratch every time.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Bernoulli trial</b>', note: `one trial, two outcomes, success prob ${p}, failure ${q}${NB}=${NB}1${NB}−${NB}${p}.` },
          { f: '<b>Binomial conditions</b>', note: `fixed ${n} • independent trials • two outcomes • constant ${p}.` },
          { f: '<b>Distribution</b>', note: `${X}${NB}∼${NB}${BNP}, ${BINOM_PMF}, ${r}${NB}=${NB}0,${NB}…,${NB}${n}.` },
          {
            f: `<b>Mean</b>${NB}=${NB}${NP}${NB}• <b>Variance</b>${NB}=${NB}${NPQ}${NB}• <b>SD</b>${NB}=${NB}√(${NPQ})${NB}• always <b>variance</b>${NB}<${NB}<b>mean</b>.`,
            note: '',
          },
          { f: '<b>Mode</b>', note: `integer ${r} with ${MODE_BAND}.` },
          { f: '<b>“At least one”</b>', note: `${pr(rel(X, '≥', '1'))}${NB}=${NB}1${NB}−${NB}${QN} (use the complement).` },
          { f: '<b>Recover parameters</b>', note: `${q}${NB}=${NB}${fr('variance', 'mean')}, then ${p}${NB}=${NB}1${NB}−${NB}${q}, ${n}${NB}=${NB}${fr('mean', p)}.` },
        ],
        aids: [
          `<b>Mnemonic:</b> “Choose the successes, power up ${p}; power down with ${q} for the rest.”`,
          `<b>Recognise it:</b> fixed number of identical, independent yes/no trials with the same ${p}; if drawing without replacement, it is <b>not</b> binomial.`,
          `<b>Sanity check:</b> probabilities are terms of (${q}${NB}+${NB}${p})<sup>${n}</sup>, so they must sum to 1; and the peak (mode) sits near the mean ${NP}.`,
        ],
      },

      // The book's "Master Formula Sheet & Revision Capstone", pp. 846–848, a revision summary of the whole chapter.
      { t: 'part', title: 'Master formula sheet and revision capstone' },
      {
        t: 'p',
        html: 'This final section pulls the entire chapter into one place. If you have studied Topics 01 to 04, use this as your night-before-exam single-page memory and as a map of how the ideas connect.',
      },
      {
        t: 'p',
        html: `<b>How the Chapter Fits Together</b><br>Every idea in this chapter grows from one seed, <b>conditional probability</b>, and branches outward:`,
      },
      {
        t: 'p',
        html: `• <b>Conditional probability</b> ${pr(`${A}${NB}|${NB}${B}`)} asks “how likely is ${A} once ${B} is known?”: it shrinks the sample space to ${B}.`,
      },
      {
        t: 'p',
        html: `• From it comes the <b>multiplication theorem</b> (${pr(AnB)}${NB}= ${pr(B)}${pr(`${A}${NB}|${NB}${B}`)}), and the special case where knowledge changes nothing: <b>independence</b> (${pr(AnB)}${NB}= ${pr(A)}${pr(B)}).`,
      },
      {
        t: 'p',
        html: `• Stack several mutually exclusive causes and the multiplication theorem becomes the <b>Theorem of Total Probability</b> (forward: cause${NB}→ effect).`,
      },
      {
        t: 'p',
        html: `• Invert that direction (effect back to cause) and you get <b>Bayes’ Theorem</b> (the denominator of Bayes is Total Probability).`,
      },
      {
        t: 'p',
        html: `• Attach a number to each outcome and you have a <b>random variable</b>, summarised by its <b>mean</b> and <b>variance</b>.`,
      },
      {
        t: 'p',
        html: `• Count successes in ${n} independent, identical two-outcome trials and that random variable follows the <b>Binomial distribution</b>: independence (from Topic 01) is what makes it work.`,
      },
      {
        t: 'p',
        html: 'So the through-line is: condition\u00a0→ multiply\u00a0→ (independence / total probability)\u00a0→\u00a0invert (Bayes)\u00a0→\u00a0random variable\u00a0→ binomial.',
      },

      { t: 'part', title: 'Complete formula inventory' },
      {
        t: 'p',
        html: `<b>Conditional probability & independence (Topic 01)</b><br>${pr(`${A}${NB}|${NB}${B}`)}${NB}= ${fr(pr(AnB), pr(B))}, ${pr(B)}${NB}≠${NB}0<br>${pr(AnB)}${NB}= ${pr(A)}${pr(`${B}${NB}|${NB}${A}`)}${NB}= ${pr(B)}${pr(`${A}${NB}|${NB}${B}`)}<br>Chain rule: ${pr(`${A} ∩ ${B} ∩ ${Cv}`)}${NB}= ${pr(A)}${pr(`${B}${NB}|${NB}${A}`)}${pr(`${Cv}${NB}|${NB}${AnB}`)}<br>Independent ⟺ ${pr(AnB)}${NB}= ${pr(A)}${pr(B)};<br>${A} ⊥ ${B}${NB}⇒${NB}${A} ⊥ ${B}′, ${A}′ ⊥ ${B}, ${A}′ ⊥ ${B}′<br>Exactly one of ${A}, ${B}: ${pr(A)}${NB}+${NB}${pr(B)}${NB}− 2${pr(AnB)}<br>At least one: ${pr(`${A}${NB}∪${NB}${B}`)}${NB}=${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}− ${pr(AnB)}<br>At least one of ${n} independent events: 1${NB}−${NB}∏<sub>${i}=1</sub><sup>${n}</sup>${NB}(1${NB}−${NB}${pr(`${A}<sub>${i}</sub>`)})`,
      },
      {
        t: 'p',
        html: `<b>Total probability & Bayes (Topic 02)</b><br>Total Probability: ${pr(A)}${NB}= ∑<sub>${j}</sub>${NB}${pr(Ej)}${NB}${pr(`${A}${NB}|${NB}${Ej}`)} ({${Ej}} a partition)<br>Bayes: ${pr(`${Ei}${NB}|${NB}${A}`)}${NB}= ${fr(`${pr(Ei)}${NB}${pr(`${A}${NB}|${NB}${Ei}`)}`, `∑<sub>${j}</sub>${NB}${pr(Ej)}${NB}${pr(`${A}${NB}|${NB}${Ej}`)}`)}<br>= ${fr('prior × likelihood', `${I('P')}(evidence)`)}<br>∑<sub>${i}</sub>${NB}${pr(`${Ei}${NB}|${NB}${A}`)}${NB}= 1`,
      },
      {
        t: 'p',
        html: `<b>Random variables (Topic 03)</b><br>Valid distribution: ${rel(PI, '≥', '0')}, ∑<sub>${i}</sub>${NB}${PI}${NB}=${NB}1;<br>Mean ${MU}${NB}=${NB}${EX}${NB}= ∑<sub>${i}</sub>${NB}${XI}${PI}<br>Variance ${SG2}${NB}=${NB}${EX2}${NB}−${NB}${MU2}${NB}= ∑<sub>${i}</sub>${NB}${XI2}${PI}${NB}−${NB}${MU2};<br>SD ${SG}${NB}= √${SG2}<br>${E(AXB)}${NB}=${NB}${a}${EX}${NB}+ ${b};<br>${VAR(AXB)}${NB}= ${sq(a)}${NB}${VX}`,
      },
      {
        t: 'p',
        html: `<b>Binomial distribution (Topic 04)</b><br>${X}${NB}∼${NB}${BNP}: ${BINOM_PMF},<br>${q}${NB}= 1${NB}−${NB}${p}, ${r}${NB}=${NB}0, 1, …, ${n}<br>Mean${NB}=${NB}${NP}; Variance${NB}=${NB}${NPQ} (< mean); SD${NB}= √(${NPQ})<br>Mode: ${MODE_BAND};<br>${pr(rel(X, '≥', '1'))}${NB}= 1${NB}− ${QN}<br>Recover parameters: ${q}${NB}=${NB}${fr('variance', 'mean')}, ${p}${NB}=${NB}1${NB}−${NB}${q}, ${n}${NB}=${NB}${fr('mean', p)}`,
      },

      { t: 'part', title: 'Three distinctions that decide most questions' },
      {
        t: 'p',
        html: `• <b>Mutually exclusive vs independent.</b> Mutually exclusive: ${pr(AnB)}${NB}=${NB}0 (one forbids the other). Independent: ${pr(AnB)}${NB}= ${pr(A)}${pr(B)} (one ignores the other). For positive probabilities they can never hold together.`,
      },
      {
        t: 'p',
        html: `• <b>Total Probability vs Bayes.</b> Total Probability runs forward (you know causes, predict the effect). Bayes runs backward (you observe the effect, infer the cause). Bayes uses Total Probability as its denominator.`,
      },
      {
        t: 'p',
        html: `• <b>With vs without replacement.</b> With replacement${NB}⇒ independent, constant ${p}${NB}⇒ binomial applies. Without replacement${NB}⇒ dependent, shifting ${p}${NB}⇒${NB}use conditional probability / counting, <b>not</b> the binomial formula.`,
      },

      { t: 'part', title: 'Master pitfall index' },
      {
        t: 'defgrid',
        title: 'Pitfall number and the error',
        rows: [
          { k: '1.', v: 'Treating independent and mutually exclusive as the same' },
          { k: '2.', v: `Swapping ${pr(`${A}${NB}|${NB}${B}`)} with ${pr(`${B}${NB}|${NB}${A}`)}` },
          { k: '3.', v: 'Assuming pairwise independence implies mutual independence' },
          { k: '4.', v: 'Base-rate neglect: quoting the likelihood as the posterior' },
          { k: '5.', v: `Dividing by one term instead of the full ${pr(A)}` },
          { k: '6.', v: 'Using causes that aren’t disjoint and exhaustive' },
          { k: '7.', v: 'Plain average instead of probability-weighted mean' },
          { k: '8.', v: `Forgetting to square ${MU} in ${EX2}${NB}−${NB}${MU2}` },
          { k: '9.', v: 'Confusing variance with standard deviation' },
          { k: '10.', v: 'Forcing binomial onto without-replacement (dependent) trials' },
          { k: '11.', v: `Swapping the exponents of ${p} and ${q}` },
          { k: '12.', v: `Believing variance can exceed the mean (it can’t: ${NPQ}${NB}<${NB}${NP})` },
          { k: '13.', v: `Summing all terms instead of 1${NB}−${NB}${QN} for “at least one”` },
          { k: '14.', v: 'Ignoring the given condition (reverting to the unconditional probability)' },
          { k: '15.', v: `Inverting ${pr(`${A}${NB}|${NB}${Ei}`)} and ${pr(`${Ei}${NB}|${NB}${A}`)} carelessly` },
          { k: '16.', v: `Skipping the check that ${SUM_PI}${NB}=${NB}1` },
          { k: '17.', v: 'Using a formula-defined distribution without first solving for the constant' },
          { k: '18.', v: `Dropping or miscounting the ${nCr} factor` },
        ],
      },

      { t: 'part', title: 'Exam weightage snapshot' },
      {
        t: 'p',
        html: `• <b>CBSE Boards:</b>${NB}Bayes’ Theorem (a long answer or a case study, 4–5 marks) is near-certain; conditional probability / independence and the mean of a random variable appear as 2–4 mark items ${ESTIMATE}.${NB}The binomial distribution and the variance of a random variable were 5–6 mark and 2–4 mark items in older papers; the rationalised NCERT book and the current CBSE syllabus no longer include them (as far as we know).`,
      },
      {
        t: 'p',
        html: `• <b>JEE Main:</b> typically 1 question, most often independence, Bayes, or a binomial computation ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `• <b>JEE Advanced:</b> higher-rigour variants: independence of complements, “exactly one,” base-rate Bayes surprises, binomial mode, and parameter recovery from mean and variance.`,
      },
      {
        t: 'p',
        html: '<b>One-line chapter mantra:</b> Condition to shrink the world, multiply to combine, check independence, add causes for Total Probability, invert for Bayes, then count successes for the Binomial.',
      },
    ],
  },
];
