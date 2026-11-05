/**
 * KEY POINTS for Chemistry Class 12, Chapter 3 (Chemical Kinetics).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–D are 4–7; Additional
 * topic E, What JEE and NEET Actually Ask (the book's Addendum P), is 8. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Formulas / Definitions and Cheat
 * Sheet Box. Common mistakes: its Common Student Pitfalls. Exam shortcuts: its
 * Pro-Tip. `say`: the cheat sheet's first two memory aids, word for word, in
 * the Ch 1–4 form: no quotation marks, and a label after " — " (the book's own
 * gloss where it has one). Topic 01 prints one memory aid, so it has one line.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic E: its distribution, archetypes and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Species and
 * brackets upright: [R], [R]<sub>0</sub>, [A]. <i>k</i>, <i>k</i>′, <i>t</i>,
 * <i>t</i><sub>1/2</sub>, <i>E</i><sub>a</sub>, <i>A</i> (Arrhenius factor), <i>T</i>,
 * <i>R</i>, <i>P</i>, <i>Z</i><sub>AB</sub>, <i>x</i>, <i>n</i>, <i>p</i><sub>i</sub>,
 * <i>p</i><sub>t</sub>, <i>p</i><sub>A</sub>, <i>p</i><sub>∞</sub> italic; d, log and ln
 * upright. An exponent holding <i>E</i><sub>a</sub> is written exp(−<i>E</i><sub>a</sub>/<i>RT</i>),
 * as the topics write it. The book's values: <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>,
 * 2.303 with base-10 log, <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Rate of Reaction & Rate Law ──
  // pp. 102–103, 107, 109
  {
    topic: 0,
    kind: 'remember',
    q: 'N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>: how do you get one single number for the rate of reaction?',
    a: 'Divide each species’ rate by its stoichiometric coefficient: Rate = −d[N<sub>2</sub>]/d<i>t</i> = −(1/3) d[H<sub>2</sub>]/d<i>t</i> = +(1/2) d[NH<sub>3</sub>]/d<i>t</i>. A minus for a reactant keeps the rate positive. Average rate is taken over an interval Δ<i>t</i>; instantaneous rate comes from the slope of the tangent on a concentration–time curve',
    why: '4NH<sub>3</sub> + 5O<sub>2</sub> → 4NO + 6H<sub>2</sub>O with NO forming at 3.6 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>: Rate = 9.0 × 10<sup>−4</sup>, so O<sub>2</sub> disappears at 4.5 × 10<sup>−3</sup> and NH<sub>3</sub> at 3.6 × 10<sup>−3</sup> mol L<sup>−1</sup> s<sup>−1</sup>.',
    say: null,
  },
  // pp. 103–105, 110
  {
    topic: 0,
    kind: 'remember',
    q: 'The rate law, the order, and the units of <i>k</i> for each order?',
    a: 'Rate = <i>k</i>[A]<sup><i>x</i></sup>[B]<sup><i>y</i></sup>, with <i>x</i> and <i>y</i> found in the lab; order <i>n</i> = <i>x</i> + <i>y</i>. <i>k</i> is the rate when every reactant concentration equals unity: independent of concentration, dependent on temperature. [<i>k</i>] = mol<sup>1−<i>n</i></sup> L<sup><i>n</i>−1</sup> s<sup>−1</sup>: order 0, mol L<sup>−1</sup> s<sup>−1</sup>; order 1, s<sup>−1</sup>; order 2, L mol<sup>−1</sup> s<sup>−1</sup>; order 3, L<sup>2</sup> mol<sup>−2</sup> s<sup>−1</sup>',
    why: '2A + B → C with Rate = <i>k</i>[A][B]<sup>2</sup>: order 1 + 2 = 3, <i>k</i> in L<sup>2</sup> mol<sup>−2</sup> s<sup>−1</sup>; doubling [A] and tripling [B] makes the rate 2 × 9 = 18 times.',
    say: null,
  },
  // pp. 103–104, 109–110
  {
    topic: 0,
    kind: 'mixup',
    q: 'Order or molecularity: which can be zero, fractional or negative?',
    a: 'Order: it is experimental, may be 0, fractional or negative, and means something for any reaction. Molecularity is a counted whole number (1, 2, 3) of species in one elementary step: never zero, fractional or > 3, and defined for elementary reactions alone',
    why: 'An elementary 2A → products has Rate = <i>k</i>[A]<sup>2</sup>, order 2 and molecularity 2. Rate = <i>k</i>[A]<sup>3/2</sup>[B]<sup>−1</sup> cannot be elementary: a fractional and a negative exponent both signal a multi-step mechanism.',
    say: 'Order is observed, molecularity is mechanistic — fractions and negatives are flags for complexity.',
  },
  // pp. 105, 107–109
  {
    topic: 0,
    kind: 'mistake',
    q: 'A + A ⇌ A<sub>2</sub> (fast), then A<sub>2</sub> + B → A<sub>2</sub>B (slow). Is the rate law <i>k</i><sub>2</sub>[A<sub>2</sub>][B], overall order 2?',
    a: 'No: A<sub>2</sub> is an intermediate, so substitute it out with the fast equilibrium. <i>k</i><sub>1</sub>[A]<sup>2</sup> = <i>k</i><sub>−1</sub>[A<sub>2</sub>] gives Rate = (<i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub>)[A]<sup>2</sup>[B], overall order 3, while the slow step’s molecularity stays 2',
    why: 'Reading order off the balanced equation is the chapter’s most expensive mistake: the equation tells you stoichiometry, not kinetics. Only experiment (or an explicit “elementary” label) gives the rate law.',
    say: null,
  },
  // pp. 105, 107, 109
  {
    topic: 0,
    kind: 'shortcut',
    q: 'P + Q → R. [P], [Q] in mol L<sup>−1</sup> and initial rate in mol L<sup>−1</sup> s<sup>−1</sup>: 0.10, 0.10, 2.0 × 10<sup>−3</sup>; 0.20, 0.10, 4.0 × 10<sup>−3</sup>; 0.10, 0.30, 1.8 × 10<sup>−2</sup>. The overall order? The fast way?',
    a: 'Pick the rows where only one concentration moved and read the exponent off the rate ratio; never compute <i>k</i> first. [P] × 2, rate × 2: <i>x</i> = 1. [Q] × 3, rate × 9: 3<sup><i>y</i></sup> = 9, <i>y</i> = 2. Overall order = 1 + 2 = 3',
    why: 'The units of <i>k</i> are a free check on the order: computed order 2 but <i>k</i> came out in s<sup>−1</sup>? One of them is wrong.',
    say: null,
  },

  // ── Topic 02 · Integrated Rate Equations & Half-Life ──
  // pp. 112, 115, 118–119
  {
    topic: 1,
    kind: 'remember',
    q: 'First order: the integrated equation, its straight-line plots, its half-life and the units of <i>k</i>?',
    a: 'ln([R]<sub>0</sub>/[R]) = <i>kt</i>, so <i>k</i> = (2.303/<i>t</i>) log([R]<sub>0</sub>/[R]) and [R] = [R]<sub>0</sub> <i>e</i><sup>−<i>kt</i></sup>. Straight lines: ln[R] vs <i>t</i>, slope −<i>k</i>; log[R] vs <i>t</i>, slope −<i>k</i>/2.303. <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>, independent of [R]<sub>0</sub>. Units of <i>k</i>: s<sup>−1</sup>. 100% completion takes infinite time',
    why: '<i>k</i> = 2.31 × 10<sup>−3</sup> s<sup>−1</sup>: <i>t</i><sub>1/2</sub> = 0.693/(2.31 × 10<sup>−3</sup>) = 300 s, and 75% consumed is two halvings, 600 s.',
    say: 'First order forgets the start — <i>t</i><sub>1/2</sub> doesn’t care about [R]<sub>0</sub>.',
  },
  // pp. 111–112, 116, 118–119
  {
    topic: 1,
    kind: 'remember',
    q: 'Zero order: the integrated equation, its plot, its half-life, and why a reaction would ever ignore concentration?',
    a: '[R] = [R]<sub>0</sub> − <i>kt</i>: [R] vs <i>t</i> is a straight line, slope −<i>k</i>, intercept [R]<sub>0</sub>. <i>t</i><sub>1/2</sub> = [R]<sub>0</sub>/(2<i>k</i>), so <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>. Units of <i>k</i>: mol L<sup>−1</sup> s<sup>−1</sup>. Some other resource sets the pace (a fully saturated catalyst surface, a fixed light intensity), so it holds only over a finite window',
    why: '[A]<sub>0</sub> = 0.10 mol L<sup>−1</sup>, 40 min; 0.20 mol L<sup>−1</sup>, 80 min: the half-life tracks [A]<sub>0</sub>, so zero order, <i>k</i> = 0.10/(2 × 40) = 1.25 × 10<sup>−3</sup> mol L<sup>−1</sup> min<sup>−1</sup> (1.2 × 10<sup>−3</sup> mol L<sup>−1</sup> min<sup>−1</sup> to two significant figures).',
    say: 'Zero scales with zero-time start — zero-order <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>.',
  },
  // pp. 112, 117–119
  {
    topic: 1,
    kind: 'mixup',
    q: '[R]<sub>0</sub> is doubled: what happens to the half-life at zero, first and second order?',
    a: 'Zero order: it doubles (<i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub>). First order: unchanged. Second order: it halves (<i>t</i><sub>1/2</sub> = 1/(<i>k</i>[R]<sub>0</sub>)). In general <i>t</i><sub>1/2</sub> ∝ [R]<sub>0</sub><sup>1−<i>n</i></sup>. Swapping the first- and zero-order rules is the most common MCQ error here',
    why: 'A plot of log <i>t</i><sub>1/2</sub> vs log[R]<sub>0</sub> has slope 1 − <i>n</i>: a slope of −1 means second order.',
    say: null,
  },
  // pp. 112, 116–118
  {
    topic: 1,
    kind: 'mistake',
    q: 'First-order A(g) → 2B(g) + C(g), pure A at 0.50 atm, total pressure 0.80 atm after 20 min. Does 0.80 atm go into the first-order law?',
    a: 'No: the law needs the reactant’s own pressure, from the stoichiometric balance. <i>p</i><sub>t</sub> = 0.50 + 2<i>x</i> gives <i>x</i> = 0.15 atm and <i>p</i><sub>A</sub> = 0.35 atm, so <i>k</i> = (2.303/20) log(0.50/0.35) = 1.78 × 10<sup>−2</sup> min<sup>−1</sup> (1.8 × 10<sup>−2</sup> min<sup>−1</sup> to two significant figures) and <i>t</i><sub>1/2</sub> ≈ 38.9 min (39 min to two significant figures)',
    why: 'For A(g) → B(g) + C(g) the balance gives <i>p</i><sub>A</sub> = 2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>, so <i>k</i> = (2.303/<i>t</i>) log(<i>p</i><sub>i</sub>/(2<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)); forgetting the 2.303 with base-10 logs, or using it with natural logs, is a guaranteed-wrong answer.',
    say: null,
  },
  // pp. 116–118
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A first-order reaction is 75% complete in 60 minutes. The time for 93.75%? The fast way?',
    a: 'Translate the percentages into halvings before touching a calculator: 75% = 2 half-lives = 60 min, so <i>t</i><sub>1/2</sub> = 30 min; 93.75% = 4 half-lives = 120 min',
    why: 'The ladder: 50% → 1, 75% → 2, 87.5% → 3, 93.75% → 4, 99.9% → ≈ 10. Off the ladder, 25% in 20 min: <i>k</i> = (2.303/20) log(4/3) ≈ 1.44 × 10<sup>−2</sup> min<sup>−1</sup>, <i>t</i><sub>1/2</sub> ≈ 48.2 min, and 87.5% takes ≈ 144.6 min (≈ 1.4 × 10<sup>2</sup> min to two significant figures).',
    say: null,
  },

  // ── Topic 03 · Pseudo First Order Reactions ──
  // pp. 120–122, 126
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a pseudo first order reaction, what is its rate law, and which two examples are the classics?',
    a: 'Truly higher order, but observed order 1, because one reactant is in such large excess that its concentration stays effectively constant: Rate = <i>k</i>[A][B] becomes Rate = <i>k</i>′[A], with <i>k</i>′ = <i>k</i>[B]. Examples: ester hydrolysis CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O → CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH; inversion of cane sugar C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → glucose + fructose',
    why: '0.02 mol of ester in 20 mol of water: even at complete reaction water falls only to 19.98 mol, a change of 0.1%.',
    say: 'Excess hides in the constant — water disappears into <i>k</i>′.',
  },
  // pp. 121–123, 126
  {
    topic: 2,
    kind: 'remember',
    q: '<i>k</i>′ and the true <i>k</i>: their units, what each depends on, and how the first-order tools carry over?',
    a: '<i>k</i>′ = <i>k</i>[B], in s<sup>−1</sup>: it depends on the excess concentration and is independent of the limiting reactant. True <i>k</i> = <i>k</i>′/[B], in L mol<sup>−1</sup> s<sup>−1</sup>: <i>k</i>′ = 2.0 × 10<sup>−3</sup> s<sup>−1</sup> with water at 55.5 mol L<sup>−1</sup> gives <i>k</i> = 3.6 × 10<sup>−5</sup> L mol<sup>−1</sup> s<sup>−1</sup>. For A: <i>k</i>′ = (2.303/<i>t</i>) log([A]<sub>0</sub>/[A]), <i>t</i><sub>1/2</sub> = 0.693/<i>k</i>′',
    why: 'Followed through a property: ester by titrating the acid, <i>k</i>′ = (2.303/<i>t</i>) log((<i>V</i><sub>∞</sub> − <i>V</i><sub>0</sub>)/(<i>V</i><sub>∞</sub> − <i>V</i><sub>t</sub>)); sucrose by optical rotation, <i>k</i>′ = (2.303/<i>t</i>) log((<i>r</i><sub>0</sub> − <i>r</i><sub>∞</sub>)/(<i>r</i><sub>t</sub> − <i>r</i><sub>∞</sub>)).',
    say: null,
  },
  // pp. 121–123, 125–126
  {
    topic: 2,
    kind: 'mixup',
    q: 'Ester hydrolysis in water is pseudo first order. Its molecularity and its observed order?',
    a: 'Molecularity 2 as NCERT counts it: ester and water are the two reacting species. Observed order 1: water is folded into <i>k</i>′. Pseudo first order changes only the observed order; molecularity is unchanged, the cleanest real example of order ≠ molecularity',
    why: 'To tell it from a genuinely first-order reaction, vary the excess: only a pseudo first order <i>k</i>′ scales linearly with [B].',
    say: 'Pseudo = fake order, real molecularity.',
  },
  // pp. 121, 124–125
  {
    topic: 2,
    kind: 'mistake',
    q: 'A + B → products with B in large excess: the half-life of A is 46.2 s at [B] = 0.50 mol L<sup>−1</sup>. If [B] is doubled, are <i>k</i>′ and the half-life unchanged?',
    a: 'No: <i>k</i>′ = <i>k</i>[B] doubles and <i>t</i><sub>1/2</sub> = 0.693/(<i>k</i>[B]) halves. <i>k</i>′ is a composite, not a fundamental constant; only <i>k</i> is intrinsic. The half-life stays independent of [A]<sub>0</sub>',
    why: 'True <i>k</i> = 0.693/(0.50 × 46.2) = 3.0 × 10<sup>−2</sup> L mol<sup>−1</sup> s<sup>−1</sup>. The disguise holds only while the excess is barely consumed: deplete it appreciably and true second-order behaviour returns.',
    say: null,
  },
  // pp. 123–125
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A pseudo first order hydrolysis: the ester falls to one-fourth of its initial value in 80 minutes. <i>k</i>′? The fast way?',
    a: 'Mentally tag the excess species, fold it into <i>k</i>′, and reuse every first-order result unchanged. One-fourth remaining = 2 half-lives, so <i>t</i><sub>1/2</sub> = 40 min and <i>k</i>′ = 0.693/40 = 1.73 × 10<sup>−2</sup> min<sup>−1</sup> (1.7 × 10<sup>−2</sup> min<sup>−1</sup> to two significant figures)',
    why: 'Whenever a hydrolysis “in water” or an “acid-catalysed” reaction is described as first order, suspect pseudo first order. <i>k</i>′ = 4.62 × 10<sup>−3</sup> min<sup>−1</sup>: <i>t</i><sub>1/2</sub> = 150 min, and 90% takes 2.303/<i>k</i>′ ≈ 498 min.',
    say: null,
  },

  // ── Topic 04 · Collision Theory & Temperature Dependence ──
  // pp. 128, 130, 134
  {
    topic: 3,
    kind: 'remember',
    q: 'The Arrhenius equation, its straight-line plot, and its two-temperature form?',
    a: '<i>k</i> = <i>A</i> exp(−<i>E</i><sub>a</sub>/<i>RT</i>), so ln <i>k</i> = ln <i>A</i> − <i>E</i><sub>a</sub>/(<i>RT</i>) and log <i>k</i> = log <i>A</i> − <i>E</i><sub>a</sub>/(2.303<i>RT</i>). ln <i>k</i> vs 1/<i>T</i> is a straight line, slope −<i>E</i><sub>a</sub>/<i>R</i>, intercept ln <i>A</i>. Two temperatures: log(<i>k</i><sub>2</sub>/<i>k</i><sub>1</sub>) = (<i>E</i><sub>a</sub>/(2.303<i>R</i>)) [(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)], <i>R</i> = 8.314 J K<sup>−1</sup> mol<sup>−1</sup>',
    why: '3.0 × 10<sup>−4</sup> s<sup>−1</sup> at 300 K, 1.2 × 10<sup>−3</sup> s<sup>−1</sup> at 320 K: log 4 = 0.602, bracket 20/96000 = 2.083 × 10<sup>−4</sup> K<sup>−1</sup>, <i>E</i><sub>a</sub> = (2.303 × 8.314 × 0.602)/(2.083 × 10<sup>−4</sup>) ≈ 55.3 kJ mol<sup>−1</sup> (55 kJ mol<sup>−1</sup> to two significant figures).',
    say: null,
  },
  // pp. 127–129, 134
  {
    topic: 3,
    kind: 'remember',
    q: 'Collision theory: what makes a collision effective, and what is the rate expression for A + B → products?',
    a: 'Two filters: energy ≥ <i>E</i><sub>a</sub> and proper orientation; only collisions passing both produce product. Rate = <i>P</i> <i>Z</i><sub>AB</sub> exp(−<i>E</i><sub>a</sub>/<i>RT</i>): <i>Z</i><sub>AB</sub> = collision frequency, <i>P</i> ≤ 1 = steric factor, exp(−<i>E</i><sub>a</sub>/<i>RT</i>) = fraction of molecules with energy ≥ <i>E</i><sub>a</sub>. Comparing with Arrhenius, <i>A</i> = <i>P</i> <i>Z</i><sub>AB</sub>',
    why: 'Heating works so steeply because the Maxwell-Boltzmann peak flattens and shifts right with its area fixed, so the tail beyond <i>E</i><sub>a</sub> swells far faster than the average energy rises.',
    say: 'Energy AND aim — both criteria must be met for an effective collision.',
  },
  // pp. 128, 130, 133–134
  {
    topic: 3,
    kind: 'mixup',
    q: 'Threshold energy or activation energy: which is which on the energy profile, and how does Δ<i>H</i> follow?',
    a: 'Threshold energy is the total energy the activated complex sits at: Threshold = <i>E</i><sub>a</sub> + reactant energy. <i>E</i><sub>a</sub> is only the extra hump above the reactants. Δ<i>H</i> = <i>E</i><sub>a</sub>(forward) − <i>E</i><sub>a</sub>(reverse): products below reactants means <i>E</i><sub>a</sub>(forward) < <i>E</i><sub>a</sub>(reverse), exothermic',
    why: 'Exothermic A → B, <i>E</i><sub>a</sub>(forward) = 50 kJ mol<sup>−1</sup>, Δ<i>H</i> = −30 kJ mol<sup>−1</sup>: <i>E</i><sub>a</sub>(reverse) = 50 − (−30) = 80 kJ mol<sup>−1</sup>.',
    say: null,
  },
  // pp. 127, 130, 132, 134
  {
    topic: 3,
    kind: 'mistake',
    q: 'A catalyst lowers <i>E</i><sub>a</sub> from 90 to 60 kJ mol<sup>−1</sup> at 300 K. Does it also change Δ<i>H</i> or shift the equilibrium?',
    a: 'Neither. It routes the reaction through a different activated complex, lowering <i>E</i><sub>a</sub> for both directions equally; Δ<i>H</i>, <i>K</i><sub>eq</sub> and the equilibrium yield stay untouched. With <i>A</i> unchanged the rate constant rises by <i>e</i><sup>30000/(8.314 × 300)</sup> = <i>e</i><sup>12.03</sup> ≈ 1.7 × 10<sup>5</sup>',
    why: 'In the two-temperature form, <i>T</i><sub>2</sub> > <i>T</i><sub>1</sub> must give <i>k</i><sub>2</sub> > <i>k</i><sub>1</sub>: if <i>E</i><sub>a</sub> comes out negative, <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub> were swapped inside the bracket.',
    say: 'Catalyst cuts the climb, not the cliff — it lowers <i>E</i><sub>a</sub>, never Δ<i>H</i>.',
  },
  // pp. 127–128, 130, 132, 134
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A rate becomes 4 times faster from 27 °C to 47 °C, with a constant temperature coefficient. The factor from 27 °C to 57 °C? The fast way?',
    a: 'No Arrhenius: count the 10 °C intervals and raise the coefficient to that power. Two intervals give × 4, so the coefficient is √4 = 2; three intervals give 2<sup>3</sup> = 8. It is multiplicative, never additive: “6” is the trap. The coefficient <i>k</i><sub>(<i>t</i>+10)</sub>/<i>k</i><sub><i>t</i></sub> ≈ 2–3 is a rough generalisation, not a law',
    why: '<i>E</i><sub>a</sub> from a graph: the slope of ln <i>k</i> vs 1/<i>T</i> is −<i>E</i><sub>a</sub>/<i>R</i>, so −1.2 × 10<sup>4</sup> K gives (1.2 × 10<sup>4</sup>)(8.314) = 9.98 × 10<sup>4</sup> J mol<sup>−1</sup> (1.0 × 10<sup>5</sup> J mol<sup>−1</sup> to two significant figures); with log <i>k</i> the slope is −<i>E</i><sub>a</sub>/(2.303<i>R</i>).',
    say: null,
  },

  // ── Additional A · Second-Order Kinetics, Properly ──
  // pp. 136–137
  {
    topic: 4,
    kind: 'remember',
    q: 'Second order: the integrated equation, its straight line, its half-life and the units of <i>k</i>?',
    a: '−d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup> gives 1/[A] = 1/[A]<sub>0</sub> + <i>kt</i>. 1/[A] vs <i>t</i> is a straight line, slope +<i>k</i>, intercept 1/[A]<sub>0</sub>. <i>t</i><sub>1/2</sub> = 1/(<i>k</i>[A]<sub>0</sub>). Units of <i>k</i>: L mol<sup>−1</sup> s<sup>−1</sup>',
    why: '2A → A<sub>2</sub> with −d[A]/d<i>t</i> = <i>k</i>[A]<sup>2</sup>, <i>k</i> = 5.0 × 10<sup>−3</sup> L mol<sup>−1</sup> s<sup>−1</sup>, [A]<sub>0</sub> = 0.20 mol L<sup>−1</sup>: <i>t</i><sub>1/2</sub> = 1000 s; after 500 s, 1/[A] = 5.0 + 2.5 = 7.5, so [A] = 0.133 mol L<sup>−1</sup> (0.13 mol L<sup>−1</sup> to two significant figures).',
    say: null,
  },
  // pp. 136–137
  {
    topic: 4,
    kind: 'remember',
    q: 'How long do 75% and 87.5% conversion take at second order, and how do half-lives at two concentrations name the order?',
    a: '<i>t</i><sub>75%</sub> = 3 <i>t</i><sub>1/2</sub> and <i>t</i><sub>87.5%</sub> = 7 <i>t</i><sub>1/2</sub>: longer per halving, against first order’s constant rhythm. <i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub><sup>1−<i>n</i></sup>: doubled [A]<sub>0</sub> with doubled <i>t</i><sub>1/2</sub> means zero order; unchanged, first; halved, second; <i>t</i><sub>1/2</sub> quadrupled when [A]<sub>0</sub> halves, third (2<sup><i>n</i>−1</sup> = 4)',
    why: 'Second order works in reciprocal concentration: add <i>kt</i> to 1/[A]<sub>0</sub>, never subtract <i>kt</i> from [A]<sub>0</sub>, which is the zero-order move.',
    say: null,
  },

  // ── Additional B · Composite Rate Constants: Effective Ea, Parallel and Consecutive Reactions ──
  // pp. 138–139
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the activation energy of a composite rate constant, and can it be negative?',
    a: 'Powers and signs pass straight onto the activation energies. <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub>: <i>E</i><sub>a</sub> = <i>E</i><sub>a,1</sub> + <i>E</i><sub>a,2</sub> − <i>E</i><sub>a,−1</sub>. <i>k</i><sub>obs</sub> = (<i>k</i><sub>1</sub><i>k</i><sub>3</sub>)<sup>1/2</sup>: <i>E</i><sub>a</sub> = (<i>E</i><sub>a,1</sub> + <i>E</i><sub>a,3</sub>)/2. Because a reverse step subtracts, it can be negative: <i>E</i><sub>a,1</sub> = 30, <i>E</i><sub>a,2</sub> = 40 and <i>E</i><sub>a,−1</sub> = 100 kJ mol<sup>−1</sup> give −30 kJ mol<sup>−1</sup>',
    why: '<i>k</i> = (<i>k</i><sub>1</sub><i>k</i><sub>3</sub>)<sup>1/2</sup> with steps of 60, 30 and 10 kJ mol<sup>−1</sup>: <i>E</i><sub>a</sub> = (60 + 10)/2 = 35 kJ mol<sup>−1</sup>; <i>k</i><sub>2</sub>’s 30 is a designed distractor.',
    say: null,
  },
  // pp. 138–139
  {
    topic: 5,
    kind: 'remember',
    q: 'A decays by two first-order channels, A → B (<i>k</i><sub>1</sub>) and A → C (<i>k</i><sub>2</sub>): its half-life and the product ratio? And in a chain A → B → C?',
    a: '−d[A]/d<i>t</i> = (<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>)[A], so <i>t</i><sub>1/2</sub> = 0.693/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>). [B]/[C] = <i>k</i><sub>1</sub>/<i>k</i><sub>2</sub> at all times, fraction to B = <i>k</i><sub>1</sub>/(<i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>). In a chain the much slower step caps the whole: if <i>k</i><sub>2</sub> ≫ <i>k</i><sub>1</sub>, B barely accumulates and C appears at the pace of <i>k</i><sub>1</sub>',
    why: '<i>k</i><sub>1</sub> = 3.0 × 10<sup>−3</sup> s<sup>−1</sup>, <i>k</i><sub>2</sub> = 1.0 × 10<sup>−3</sup> s<sup>−1</sup>: <i>t</i><sub>1/2</sub> = 0.693/(4.0 × 10<sup>−3</sup>) = 173 s (1.7 × 10<sup>2</sup> s to two significant figures), and [B]/[C] = 3.',
    say: null,
  },

  // ── Additional C · Gas-Phase First Order: the p∞ Form ──
  // pp. 140–141
  {
    topic: 6,
    kind: 'remember',
    q: 'First-order A(g) → B(g) + C(g) from pure A: how is <i>k</i> written against the infinite-time pressure?',
    a: 'At completion every mole of A has become two moles of gas: <i>p</i><sub>∞</sub> = 2<i>p</i><sub>i</sub>. <i>p</i><sub>t</sub> = <i>p</i><sub>i</sub> + <i>x</i>, so <i>p</i><sub>A</sub> = <i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>, and <i>k</i> = (1/<i>t</i>) ln(<i>p</i><sub>i</sub>/<i>p</i><sub>A</sub>) = (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/(2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>))). Reach for <i>p</i><sub>i</sub> when the start is given, for <i>p</i><sub>∞</sub> when the completion pressure is',
    why: 'The wrong options: (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)) drops the factor of 2; (1/<i>t</i>) ln(<i>p</i><sub>∞</sub>/<i>p</i><sub>t</sub>) puts total pressure in place of reactant pressure.',
    say: null,
  },
  // pp. 140–141
  {
    topic: 6,
    kind: 'remember',
    q: 'For other gas mole counts, how do you get the reactant’s pressure, and when is no table needed?',
    a: 'Write the stoichiometric pressure table, express <i>p</i><sub>t</sub> through <i>x</i>, recover the reactant. 2N<sub>2</sub>O<sub>5</sub> → 4NO<sub>2</sub> + O<sub>2</sub>: <i>p</i><sub>∞</sub> = (5/2)<i>p</i><sub>i</sub>, the N<sub>2</sub>O<sub>5</sub> pressure = (1/3)(5<i>p</i><sub>i</sub> − 2<i>p</i><sub>t</sub>). X(g) → 2Y(g) + Z(g): <i>p</i><sub>∞</sub> = 3<i>p</i><sub>i</sub>, <i>p</i><sub>X</sub> = (3<i>p</i><sub>i</sub> − <i>p</i><sub>t</sub>)/2 = (<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>)/2. For the reactant alone, first order needs no table: <i>p</i><sub>A</sub> = <i>p</i><sub>i</sub><i>e</i><sup>−<i>kt</i></sup>',
    why: 'N<sub>2</sub>O<sub>5</sub> at 100 atm, <i>k</i> = 3.38 × 10<sup>−5</sup> s<sup>−1</sup> for its own loss, after 20 min: 100 × <i>e</i><sup>−0.0406</sup> = 100 × 0.960 = 96 atm.',
    say: null,
  },

  // ── Additional D · The Mechanisms NCERT Actually Names ──
  // pp. 141–142
  {
    topic: 7,
    kind: 'remember',
    q: 'The peroxide–iodide reaction: its rate law, its two steps and its intermediate?',
    a: '2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>, catalysed by iodide in alkaline medium, with Rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]. (1) H<sub>2</sub>O<sub>2</sub> + I<sup>−</sup> → H<sub>2</sub>O + IO<sup>−</sup> (slow); (2) H<sub>2</sub>O<sub>2</sub> + IO<sup>−</sup> → H<sub>2</sub>O + I<sup>−</sup> + O<sub>2</sub> (fast). The slow step sets the rate law; the intermediate IO<sup>−</sup> never appears in the balanced reaction',
    why: 'NCERT’s caution: KClO<sub>3</sub> + 6FeSO<sub>4</sub> + 3H<sub>2</sub>SO<sub>4</sub> → KCl + 3Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>O seems to be of tenth order but is experimentally second order. Named zero-order reactions: HI on gold, NH<sub>3</sub> on platinum at high pressure.',
    say: null,
  },
  // pp. 142–143
  {
    topic: 7,
    kind: 'remember',
    q: 'O<sub>3</sub> ⇌ O<sub>2</sub> + O (fast), O + O<sub>3</sub> → 2O<sub>2</sub> (slow): the rate law, the overall order, and what it predicts?',
    a: 'With <i>k</i><sub>1</sub>, <i>k</i><sub>−1</sub> for the fast equilibrium and <i>k</i><sub>2</sub> for the slow step: Rate = <i>k</i><sub>2</sub>[O][O<sub>3</sub>], with [O] = (<i>k</i><sub>1</sub>/<i>k</i><sub>−1</sub>)[O<sub>3</sub>]/[O<sub>2</sub>] from the fast equilibrium, so Rate = (<i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub>)[O<sub>3</sub>]<sup>2</sup>[O<sub>2</sub>]<sup>−1</sup>. Second order in ozone, order −1 in oxygen, overall order 1. The product oxygen retards the reaction: doubling [O<sub>2</sub>] at fixed [O<sub>3</sub>] halves the rate',
    why: 'The same route for A<sub>2</sub> + B<sub>2</sub> → 2AB via A<sub>2</sub> ⇌ 2A (fast), A + B<sub>2</sub> → AB + B (slow), A + B → AB (fast): Rate = <i>k</i><sub>2</sub><i>K</i><sup>1/2</sup>[A<sub>2</sub>]<sup>1/2</sup>[B<sub>2</sub>], overall order 1.5 (<i>k</i><sub>2</sub> for the slow step, <i>K</i> for the fast equilibrium).',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 143–145
  {
    topic: 8,
    kind: 'remember',
    q: 'Which parts of Chemical Kinetics carry the most weight in JEE and NEET?',
    a: 'Integrated rate laws, half-lives and first-order numerics about 37%; Arrhenius, activation energy, catalysts and collision theory about 28%; rate law, order, molecularity, initial-rate tables and units of <i>k</i> about 23%; mechanisms about 7%; pseudo first order about 5%. The mix is stable, with 2025 adding two new shapes: the effective <i>E</i><sub>a</sub> of a composite constant and the <i>p</i><sub>∞</sub> first-order form',
    why: 'A recurring shape, zero-order interval timing: <i>t</i><sub>1/2</sub> = 1 h at 2.0 mol L<sup>−1</sup> gives <i>k</i> = [A]<sub>0</sub>/(2<i>t</i><sub>1/2</sub>) = 1.0 mol L<sup>−1</sup> h<sup>−1</sup>, so 0.50 → 0.25 mol L<sup>−1</sup> takes 0.25 h = 15 min.',
    say: null,
  },
  // pp. 145–146
  {
    topic: 8,
    kind: 'mistake',
    q: 'Which traps recur in Chemical Kinetics questions?',
    a: 'Thinking the true <i>k</i> depends on concentration (for a given reaction it varies with temperature and catalyst; only a pseudo first order <i>k</i>′ carries the excess concentration); saying <i>k</i> falls with <i>T</i> for exothermic reactions (for an elementary step it rises for both; only the equilibrium constant distinguishes them); a catalyst that “shifts equilibrium” (Δ<i>H</i>, <i>K</i><sub>eq</sub> and the equilibrium yield are untouched); “rate always increases with concentration” (false at zero order); order read off the equation (KClO<sub>3</sub>: apparent 10th, actual 2nd); total pressure in the rate law; half-life rules swapped',
    why: 'Units of <i>k</i> betray the order: <i>k</i> = 6 × 10<sup>−5</sup> s<sup>−1</sup> means first order, so a rate of 2.4 × 10<sup>−5</sup> mol L<sup>−1</sup> s<sup>−1</sup> gives [N<sub>2</sub>O<sub>5</sub>] = rate/<i>k</i> = 0.4 mol L<sup>−1</sup>.',
    say: null,
  },
];
