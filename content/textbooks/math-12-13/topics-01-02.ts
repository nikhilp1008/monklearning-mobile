import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 13 Probability, Topics 01–02, pp. 814–829 of the Class 12
 * Mathematics Master Reference (October 2026 edition), word for word.
 *   Topic 01 = Subtopic 01 "Conditional Probability & Independence"
 *              (pp. 814–821, below the chapter contents on p. 814),
 *   Topic 02 = Subtopic 02 "Total Probability & Bayes’ Theorem" (pp. 822–829).
 * The chapter's title page (p. 813) and contents (top of p. 814) are not
 * copied. Each topic opens with its "Exam Relevance:" box as a part of its
 * own, then is split at its Sections 1 to 8; the "Cheat Sheet Box" is the part
 * "Cheat sheet". "Sub-01" → "Topic 01". Figure 13.1 (caption p. 824, drawn
 * p. 825) stands where its caption is printed, after "The probability-tree
 * device" paragraph. No unnumbered drawings on pp. 814–829.
 * P(A | B) with the bar glued by no-break spaces; ∑, ∏ and ⋃ with their limits
 * as printed; the stacked binomial as <binom>. Every fraction is stacked
 * (<frac>), a fraction over a fraction written with ÷; no em dashes.
 * The expert reviews rm1213a and rm1213b are applied (fx1213): their
 * corrections change the printed words where listed in
 * reports-13/fx1213-applied.md.
 */
const fr = (p: string, q: string) => `<frac><num>${p}</num><den>${q}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner: no break here, and no space. */
const WJ = '\u2060';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const E = I('E');
const F = I('F');
const G = I('G');
const S = I('S');
const W = I('W');
const a = I('a');
const b = I('b');
const i = I('i');
const j = I('j');
const n = I('n');
const p = I('p');
const q = I('q');
const t = I('t');
const P = I('P');

/** P(…) */
const pr = (s: string) => `${P}(${s})`;
/** P(a | b), the bar kept with both sides. */
const cp = (x: string, y: string) => `${P}(${x}${NB}|${NB}${y})`;
const cap = (...xs: string[]) => xs.join(`${NB}∩${NB}`);
const cup = (...xs: string[]) => xs.join(`${NB}∪${NB}`);
const sb = (v: string, k: string) => `${v}<sub>${k}</sub>`;
const rel = (l: string, op: string, r: string) => `${l}${NB}${op}${NB}${r}`;
/** ⁿCᵣ written inline, so it can sit inside a fraction without stacking. */
const nCr = (x: string, y: string) => `<sup>${x}</sup>${I('C')}<sub>${y}</sub>`;
const set = (...xs: string[]) => `{${xs.join(`,${NB}`)}}`;
const pair = (x: string, y: string) => `(${x},${NB}${y})`;

const AP = `${A}′`;
const BP = `${B}′`;
const EP = `${E}′`;
const AnB = cap(A, B);
const AuB = cup(A, B);
const EnF = cap(E, F);
const PAnB = pr(AnB);
const PEnF = pr(EnF);
const PAPB = `${pr(A)}${pr(B)}`;
const EgF = cp(E, F);
const COND = fr(PEnF, pr(F));
const An = sb(A, n);
const Ai = sb(A, i);
const A1 = sb(A, '1');
const A2 = sb(A, '2');
const Ap = (k: string) => `${A}′<sub>${k}</sub>`;
const PROD = `∏<sub>${i}=1</sub><sup>${n}</sup>`;
const HALF = fr('1', '2');
const QUARTER = fr('1', '4');
const EIGHTH = fr('1', '8');

const Ei = sb(E, i);
const Ej = sb(E, j);
const E1 = sb(E, '1');
const E2 = sb(E, '2');
const E3 = sb(E, '3');
const En = sb(E, n);
const SUMJ = `∑<sub>${j}=1</sub><sup>${n}</sup>`;
const SUMj = `∑<sub>${j}</sub>`;
const SUMi = `∑<sub>${i}</sub>`;
const BIGU = `⋃<sub>${j}=1</sub><sup>${n}</sup>`;
/** P(Eⱼ) P(A | Eⱼ), one path of the tree. */
const PATHj = `${pr(Ej)}${NB}${cp(A, Ej)}`;
const PATHi = `${pr(Ei)}${NB}${cp(A, Ei)}`;
const TOTAL = `${SUMJ}${NB}${PATHj}`;
const BAYES = fr(PATHi, TOTAL);
const BAYES_SHORT = fr(`${pr(Ei)}${cp(A, Ei)}`, `${SUMj}${NB}${pr(Ej)}${cp(A, Ej)}`);
const L1 = sb(I('L'), '1');
const L2 = sb(I('L'), '2');
const L3 = sb(I('L'), '3');
const M1 = sb(I('M'), '1');
const M2 = sb(I('M'), '2');

export const TOPICS: Topic[] = [
  // ──────────────── Topic 01 · Subtopic 01 · pp. 814–821 ────────────────
  {
    n: '01',
    title: 'Conditional Probability & Independence',
    kalam: 'Two events are independent when the occurrence of one leaves the probability of the other completely unchanged.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the foundation stone of the entire chapter. CBSE Boards almost always carry a 2–3 mark question on conditional probability or an independence check ${ESTIMATE}, and the multiplication theorem feeds directly into Total Probability and Bayes’ Theorem later. JEE Main reliably places 1 question here every year ${ESTIMATE}, usually an independence trap or a “find ${cp(A, B)}” computation. JEE Advanced loves the deeper variants: independence of complements, “exactly one occurs,” and systems of equations built from ${PAnB} and ${pr(cap(AP, BP))}.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Imagine you are waiting on a Mumbai local platform. Ask a stranger, “What’s the chance the next train is going to Churchgate?”; you’d shrug and give some rough number based on how the lines are shared. But now suppose the announcement board lights up: “Slow line, Western Railway.” Suddenly your estimate sharpens. You haven’t changed the trains running; you’ve changed <b>what you know</b>. The fresh information has shrunk the world of possibilities down to a smaller, more relevant set, and the probability is recomputed inside that smaller world.`,
      },
      {
        t: 'p',
        html: `That is the whole soul of <b>conditional probability</b>. When we write ${EgF}, read as “probability of ${E} <b>given</b> ${F}”, we are asking: given that event ${F} has definitely happened, how likely is ${E} now? The condition ${F} is not a second event we are hoping for; it is a fact we have been handed. So we throw away every outcome where ${F} did <b>not</b> occur, and we treat ${F} itself as our brand-new sample space.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> Picture the full sample space as the entire crowd at a Diwali mela. Event ${F} is the group standing inside the food court. The moment someone tells you “the person we’re discussing is in the food court,” the rest of the mela becomes irrelevant. To find the chance that this person is also eating jalebi (event ${E}), you only count the jalebi-eaters who are inside the food court, divided by everyone in the food court, not by the whole mela. That is exactly<br>${EgF}${NB}= ${COND}.`,
      },
      {
        t: 'p',
        html: `The numerator is “in both ${E} and ${F},” the denominator is “in ${F}”: the reduced universe.`,
      },
      {
        t: 'p',
        html: `Now flip to the opposite idea. Sometimes new information is <b>useless</b>. If you toss a coin and then roll a die, knowing the coin showed heads tells you nothing about the die. The die “doesn’t care.” Two events are <b>independent</b> when the occurrence of one leaves the probability of the other completely unchanged: ${EgF}${NB}=${NB}${pr(E)}. The condition ${F} shrank the world, but ${E}’s share of that smaller world is identical to its share of the big world.`,
      },
      {
        t: 'p',
        html: `Here is where almost every student stumbles, so anchor it now: <b>independent is not the same as mutually exclusive.</b> Mutually exclusive events (${rel(AnB, '=', '∅')}, both with positive probability) are deadly rivals: if one happens, the other cannot. That is the strongest possible dependence, not independence! A batsman scoring a century and the same batsman getting out for a duck in the same innings are mutually exclusive; they are about as far from independent as two events can be.`,
      },
      {
        t: 'p',
        html: `A quick concrete feel for how much conditioning can move a number: suppose in a colony of 100 families, 30 own a car, 40 own a two-wheeler, and 12 own both. Pick a family at random: the bare chance it owns a car is ${fr('30', '100')}${NB}=${NB}0.30. But now you learn the family owns a two-wheeler. Your world shrinks from 100 families to those 40, and among them exactly 12 own a car, so the updated chance jumps to ${fr('12', '40')}${NB}=${NB}0.30, unchanged! Here car-ownership and two-wheeler-ownership happen to be independent. Change “both” to 18 instead of 12, and the conditional becomes ${fr('18', '40')}${NB}=${NB}0.45: the information now helps, signalling dependence. Same machinery, two different stories, decided entirely by the size of the overlap.`,
      },
      {
        t: 'p',
        html: `One more intuition that pays off in exams: <b>drawing “with replacement” creates independence; “without replacement” creates dependence.</b> If you draw a ball, note it, and put it back, the second draw faces the identical box: the first draw left no trace, so the draws are independent. If you keep the ball out, the box has changed; the second draw’s probabilities now depend on what the first draw removed. Whenever a problem says “without replacement,” your antenna for the multiplication theorem with conditionals (not the simple product) should go up.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> The conditional formula ${EgF}${NB}= ${COND} demands ${rel(pr(F), '>', '0')}: you cannot condition on something impossible. The independence test ${PEnF}${NB}= ${pr(E)}${pr(F)} is the safe, all-purpose definition because it never divides by anything and stays valid even when a probability is zero. Finally, beware: for three events, checking the pairs is <b>not</b> enough; true (mutual) independence needs the triple product condition too.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'Conditional probability',
        main: `${EgF} = ${COND},${NB}${NB}${rel(pr(F), '≠', '0')}`,
        legend: [`${E}, ${F}${NB}=${NB}events in the same sample${NB}space`, `${PEnF}${NB}=${NB}the probability both occur`],
        note: null,
      },
      {
        t: 'p',
        html: `Here ${E}, ${F} are events in the same sample space; ${PEnF} is the probability both occur. ${EgF} is a genuine probability, so 0${NB}≤ ${EgF}${NB}≤${NB}1.`,
      },
      {
        t: 'p',
        html: `<b>Properties of conditional probability</b> (for${NB}${rel(pr(F), '≠', '0')}):<br>• ${cp(S, F)}${NB}= ${cp(F, F)}${NB}=${NB}1<br>• ${P}[(${AuB})${NB}|${NB}${F}]${NB}= ${cp(A, F)}${NB}+ ${cp(B, F)}${NB}− ${P}[(${AnB})${NB}|${NB}${F}]<br>• ${cp(EP, F)}${NB}=${NB}1${NB}− ${EgF}`,
      },
      { t: 'p', html: '<b>Multiplication Theorem</b> (rearranging the definition):' },
      {
        t: 'formula',
        kicker: 'Multiplication Theorem',
        main: `${PEnF} = ${pr(F)}${NB}${EgF} = ${pr(E)}${NB}${cp(F, E)}`,
        legend: [`${E}, ${F}${NB}=${NB}events in the same sample${NB}space`],
        note: null,
      },
      { t: 'p', html: 'Chain rule for three events:' },
      {
        t: 'formula',
        kicker: 'Chain rule for three events',
        main: `${pr(cap(E, F, G))} = ${pr(E)}${NB}${cp(F, E)}${NB}${cp(G, EnF)}`,
        legend: [`${E}, ${F}, ${G}${NB}=${NB}events in the same sample${NB}space`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Independent Events.</b> ${E} and ${F} are independent if any one (hence all) of these hold:`,
      },
      {
        t: 'formula',
        kicker: 'Independent events (any one of these, hence all)',
        main: `${EgF} = ${pr(E)}<br>${cp(F, E)} = ${pr(F)}<br>${PEnF} = ${pr(E)}${NB}${pr(F)}`,
        legend: [`${E}, ${F}${NB}=${NB}events in the same sample${NB}space`],
        note: null,
      },
      { t: 'p', html: 'The product form is the working definition.' },
      {
        t: 'p',
        html: `<b>Mutual independence of three events</b> ${A}, ${B}, ${C} requires <b>all four</b>:`,
      },
      {
        t: 'formula',
        kicker: 'Mutual independence of three events',
        main: `${PAnB} = ${PAPB}<br>${pr(cap(B, C))} = ${pr(B)}${pr(C)}<br>${pr(cap(C, A))} = ${pr(C)}${pr(A)}<br>${pr(cap(A, B, C))} = ${pr(A)}${pr(B)}${pr(C)}`,
        legend: [`${A}, ${B}, ${C}${NB}=${NB}the three events`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${EP} (or ${E}<sup>${I('c')}</sup>) denotes the complement; ∩${NB}=${NB}“and”; ∪${NB}=${NB}“or”; ∅${NB}= impossible event. Probabilities are pure numbers (dimensionless), each lying in [0,${NB}1].`,
      },
      {
        t: 'p',
        html: `<b>“At least one” of ${n} independent events.</b> If ${A1}, ${A2}, …, ${An} are independent, the slick route to “at least one occurs” is through the complement “none occurs”:`,
      },
      {
        t: 'formula',
        kicker: `“At least one” of ${n} independent events`,
        main: `${P}(at least one)<br>= 1 − ${pr(cap(Ap('1'), Ap('2'), '⋯', Ap(n)))}<br>= 1 − ${pr(Ap('1'))}${pr(Ap('2'))} … ${pr(Ap(n))}`,
        legend: [`${A1}, …, ${An}${NB}= independent events`, `${Ap(i)}${NB}=${NB}the complement of ${Ai}`],
        note: null,
      },
      {
        t: 'p',
        html: 'This is one of the most-used results in the whole chapter: it converts an awkward union into a clean product.',
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1: The conditional probability formula (sample-space reduction).</b> <b>Claim:</b> If ${F} has occurred with ${rel(pr(F), '>', '0')}, then ${EgF}${NB}= ${COND}.`,
      },
      {
        t: 'p',
        html: `<b>Reasoning.</b> Consider equally likely outcomes for intuition. Knowing ${F} occurred means the effective sample space is no longer ${S} but ${F} alone: every outcome outside ${F} is now ruled out. Among the outcomes in ${F}, the ones that also make ${E} true are exactly those in ${EnF}. Hence<br>${EgF}${NB}= ${fr(`${I('n')}(${EnF})`, `${I('n')}(${F})`)}<br><br>= ${fr(`${I('n')}(${EnF})`, `${I('n')}(${S})`)}${NB}·${NB}${fr(`${I('n')}(${S})`, `${I('n')}(${F})`)}<br><br>= ${COND}.`,
      },
      {
        t: 'p',
        html: `Dividing numerator and denominator by ${I('n')}(${S}) is the crucial step: it converts raw counts into probabilities, so the result holds even when outcomes are not equally likely (take it as the definition there).${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Multiplication Theorem.</b> Directly from Theorem 1, multiply both sides by ${pr(F)}:<br>${PEnF}${NB}= ${pr(F)}${NB}${EgF}.`,
      },
      {
        t: 'p',
        html: `By symmetry (conditioning on ${E} instead), ${PEnF}${NB}= ${pr(E)}${NB}${cp(F, E)}. Both are the same quantity computed via two different “first events,” which is why either may be used depending on which conditional is easier to find.${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3: Independence is inherited by complements (CBSE favourite).</b> <b>Claim:</b> If ${A} and ${B} are independent, then ${A} and ${BP} are independent.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The event ${A} splits cleanly into the part inside ${B} and the part outside ${B}:<br>${pr(A)}${NB}= ${PAnB}${NB}+ ${pr(cap(A, BP))}.`,
      },
      {
        t: 'p',
        html: `Therefore<br>${pr(cap(A, BP))}${NB}=${NB}${pr(A)}${NB}− ${PAnB}<br>= ${pr(A)}${NB}− ${PAPB} (using independence of${NB}${A},${NB}${B})<br>= ${pr(A)}[1${NB}−${NB}${pr(B)}]${NB}= ${pr(A)}${NB}${pr(BP)}.`,
      },
      {
        t: 'p',
        html: `Since ${pr(cap(A, BP))}${NB}= ${pr(A)}${pr(BP)}, the events ${A} and ${BP} are independent.${NB}■`,
      },
      {
        t: 'p',
        html: `<b>Corollary.</b> Applying the theorem twice shows ${AP} and ${B} are independent, and ${AP} and ${BP} are independent. <b>Moral:</b> independence survives complementation in every combination, a fact JEE problems exploit constantly ${ESTIMATE}.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 4: Probability that at least one of ${n} independent events occurs.</b> <b>Claim:</b> If ${A1}, …, ${An} are independent, then ${pr(cup(A1, A2, '⋯', An))}${NB}=${NB}1${NB}− ${PROD}${NB}(1${NB}−${NB}${pr(Ai)}).`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The event “at least one occurs” is the complement of “none occurs”:<br>${pr(cup(A1, '⋯', An))}${NB}=${NB}1${NB}− ${P}((${cup(A1, '⋯', An)})′)<br>= 1${NB}− ${pr(cap(Ap('1'), Ap('2'), '⋯', Ap(n)))}.`,
      },
      {
        t: 'p',
        html: `The last step uses De Morgan’s law: the negation of “at least one happens” is “every one fails.” Now, since ${A1}, …, ${An} are independent, their complements ${Ap('1')}, …, ${Ap(n)} are also mutually independent (Theorem 3 generalised), so the joint probability factorises:<br>${pr(cap(Ap('1'), '⋯', Ap(n)))}${NB}= ${pr(Ap('1'))}${NB}${pr(Ap('2'))} … ${pr(Ap(n))}<br>= ${PROD}${NB}(1${NB}−${NB}${pr(Ai)}).`,
      },
      { t: 'p', html: 'Substituting back gives the claim.\u00a0■' },
      {
        t: 'p',
        html: 'This is the workhorse behind every “probability that the target is hit by at least one shooter” or “at least one machine fails” problem: never expand the union by inclusion–exclusion when the events are independent; complement and multiply instead.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A fair die is rolled twice. Let ${E} be the event “the sum of the two rolls is 9” and ${F} be the event “the first roll shows a number greater than 3.” Find ${EgF}.`,
        steps: [
          `Total outcomes: 36. Event ${F} (first roll${NB}∈ ${set('4', '5', '6')}): 3${NB}×${NB}6${NB}=${NB}18 outcomes, so ${pr(F)}${NB}=${NB}${fr('18', '36')}. Event ${EnF} (sum${NB}=${NB}9 <b>and</b> first roll${NB}>${NB}3): the pairs are ${pair('4', '5')}, ${pair('5', '4')}, ${pair('6', '3')}. Note ${pair('3', '6')} is rejected because the first roll 3 is not greater than 3. So 3 outcomes, ${PEnF}${NB}=${NB}${fr('3', '36')}.`,
          `${EgF}${NB}= ${COND}${NB}=${NB}${fr('3', '36')}${NB}·${NB}${fr('36', '18')}${NB}=${NB}${fr('3', '18')}`,
        ],
        ans: `${EgF}${NB}=${NB}${fr('1', '6')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `For two events ${A} and ${B}, you are told ${pr(A)}${NB}=${NB}0.5, ${pr(B)}${NB}=${NB}0.4 and ${pr(AuB)}${NB}=${NB}0.7. Are ${A} and ${B} independent, mutually exclusive, both, or neither?`,
        steps: [
          `<b>Speed solution.</b> Don’t panic-list cases: get ${PAnB} in one line via the addition theorem:<br>${PAnB}${NB}=${NB}${pr(A)}${NB}+ ${pr(B)}${NB}− ${pr(AuB)}<br>= 0.5${NB}+${NB}0.4${NB}−${NB}0.7${NB}=${NB}0.2.`,
          `Now test independence: ${PAPB}${NB}=${NB}0.5${NB}×${NB}0.4${NB}=${NB}0.2. Since ${PAnB}${NB}= ${PAPB}, they are <b>independent</b>. Mutually exclusive would need ${PAnB}${NB}=${NB}0, but it’s 0.2${NB}≠${NB}0, so <b>not</b> mutually exclusive.`,
          `<b>The trap:</b> students see “0.7” and a tidy setup and reflexively assume mutual exclusivity (which would have given ${pr(AuB)}${NB}=${NB}0.9). Always compute ${PAnB} first.`,
        ],
        ans: 'Independent only',
      },
      {
        t: 'ex',
        tag: 'JEE Main, Multi-concept: conditional probability + counting',
        q: 'A selection panel has 7 boys and 5 girls. Three members are picked one after another, without replacement. (i) Given that the first two picked are girls, find the probability the third pick is a boy. (ii) Find the probability that all three picks are girls.',
        steps: [
          `(i) After two girls are removed, 10 people remain, of whom 7 are boys. By the reduced-sample-space idea,<br>${P}(3rd${NB}is${NB}boy${NB}| first${NB}two${NB}are${NB}girls) =${NB}${fr('7', '10')}.`,
          `(ii) Use the chain rule (multiplication theorem for three events):<br>${pr(cap(sb(G, '1'), sb(G, '2'), sb(G, '3')))}<br>= ${pr(sb(G, '1'))}${NB}${cp(sb(G, '2'), sb(G, '1'))}${NB}${cp(sb(G, '3'), cap(sb(G, '1'), sb(G, '2')))}<br>= ${fr('5', '12')}${NB}×${NB}${fr('4', '11')}${NB}×${NB}${fr('3', '10')}${NB}=${NB}${fr('60', '1320')}`,
        ],
        ans: `(i) ${fr('7', '10')}, (ii) ${fr('1', '22')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `${A} and ${B} are independent events. The probability that <b>both</b> occur is ${EIGHTH}, and the probability that <b>neither</b> occurs is ${fr('3', '8')}. Find ${pr(A)} and ${pr(B)}, and also the probability that <b>exactly one</b> of them occurs.`,
        steps: [
          `Let ${pr(A)}${NB}=${NB}${a} and ${pr(B)}${NB}=${NB}${b}. Independence gives ${I('ab')}${NB}=${NB}${EIGHTH}. For “neither,” use that ${AP},${NB}${BP} are also independent (Theorem 3 corollary):<br>${pr(cap(AP, BP))}${NB}=${NB}(1${NB}− ${a})(1${NB}−${NB}${b})<br>= 1${NB}−${NB}${a}${NB}−${NB}${b}${NB}+${NB}${I('ab')}${NB}=${NB}${fr('3', '8')}.`,
          `Substitute ${I('ab')}${NB}=${NB}${EIGHTH}:<br>1${NB}−${NB}(${a}${NB}+${NB}${b})${NB}+${NB}${EIGHTH}${NB}= ${fr('3', '8')}<br>⇒ ${a}${NB}+${NB}${b}${NB}=${NB}1${NB}+${NB}${EIGHTH}${NB}−${NB}${fr('3', '8')}${NB}=${NB}${fr('3', '4')}.`,
          `So ${a}, ${b} are roots of ${t}<sup>2</sup>${NB}−${NB}${fr('3', '4')}${t}${NB}+${NB}${EIGHTH}${NB}=${NB}0, i.e. 8${t}<sup>2</sup>${NB}−${NB}6${t}${NB}+${NB}1${NB}=${NB}0:<br>${t}${NB}= ${fr('6 ± √(36 − 32)', '16')}${NB}= ${fr('6 ± 2', '16')}<br>⇒ ${t}${NB}=${NB}${HALF} or ${QUARTER}.`,
          `Hence {${pr(A)}, ${pr(B)}}${NB}=${NB}{${HALF}, ${QUARTER}}. “Exactly${NB}one${NB}occurs”${NB}= ${pr(A)}${NB}+${NB}${pr(B)}${NB}− 2${PAnB}<br>= ${fr('3', '4')}${NB}−${NB}2${NB}·${NB}${EIGHTH}${NB}=${NB}${fr('3', '4')}${NB}−${NB}${QUARTER}${NB}=${NB}${HALF}.`,
          `<b>Sanity check (do this in the exam too).</b> Both values lie in [0,${NB}1], as every probability must, so the answer is admissible. Notice also that the problem does <b>not</b> tell us which of ${A}, ${B} is the larger; the symmetric structure (${I('ab')} and ${a}${NB}+${NB}${b} are both symmetric in ${a}, ${b}) is why we get an unordered pair rather than a unique assignment. Finally, a consistency test:<br>${P}(both) + ${P}(exactly${NB}one)${NB}+<br>${P}(neither)<br>= ${EIGHTH}${NB}+${NB}${HALF}${NB}+${NB}${fr('3', '8')}${NB}=${NB}1,<br>confirming the three mutually exclusive cases (“both,” “exactly one,” “neither”) exhaust all possibilities. If that sum had not come to 1, an arithmetic slip would be hiding somewhere.`,
        ],
        ans: `{${pr(A)}, ${pr(B)}}${NB}=${NB}{${HALF}, ${QUARTER}}; ${P}(exactly one)${NB}=${NB}${HALF}`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Two fair dice are rolled. Let ${A}${NB}=${NB}“the sum is 7” and ${B}${NB}=${NB}“at least one die shows 2.” Find ${cp(A, B)}.`,
            a: fr('2', '11'),
          },
          {
            q: `<b>[JEE Main]</b> Given ${pr(A)}${NB}=${NB}0.6, ${pr(B)}${NB}=${NB}0.5 and ${PAnB}${NB}=${NB}0.3, determine whether ${A} and ${B} are independent, and find ${cp(A, B)} and ${cp(B, A)}.`,
            a: `Independent, since ${PAnB}${NB}=${NB}0.3${NB}=${NB}0.6${NB}×${NB}0.5${NB}= ${PAPB}; consequently ${cp(A, B)}${NB}=${NB}0.6${NB}=${NB}${pr(A)} and ${cp(B, A)}${NB}=${NB}0.5${NB}=${NB}${pr(B)}`,
          },
          {
            q: '<b>[JEE Main]</b> A box contains 6 green and 4 red marbles. Two are drawn one by one without replacement. Find the probability that both are red, and the probability that the second is green given the first was green.',
            a: `both red${NB}=${NB}${fr('2', '15')}, second green given first green${NB}=${NB}${fr('5', '9')}`,
          },
          {
            q: `<b>[JEE Advanced]</b> ${A} and ${B} are independent with ${pr(AuB)}${NB}=${NB}0.8 and ${pr(A)}${NB}=${NB}0.3. Find ${pr(B)}.`,
            a: `${pr(B)}${NB}=${NB}${fr('5', '7')}`,
          },
          {
            q: `<b>[JEE Advanced]</b> ${E1}, ${E2}, ${E3} are mutually independent, each with probability ${QUARTER}. Find the probability that (i) all three occur, (ii) at least one occurs, (iii) exactly one occurs.`,
            a: `(i)${NB}${fr('1', '64')}, (ii)${NB}1${NB}−${NB}(${fr('3', '4')})<sup>3</sup>${NB}=${NB}${fr('37', '64')}, (iii)${NB}3${NB}·${NB}${QUARTER}${NB}·${NB}(${fr('3', '4')})<sup>2</sup>${NB}=${NB}${fr('27', '64')}`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `If ${rel(pr(A), '>', '0')} and ${rel(pr(B), '>', '0')}, then ${A} and ${B} can be <b>both</b> mutually exclusive and independent.`,
        opts: [
          { label: 'Always true', nudge: `<b>(a)</b>: both at once force ${PAPB}${NB}=${NB}0, impossible when both probabilities are positive.` },
          { label: 'Always false', nudge: null },
          {
            label: `True only if ${rel(A, '=', B)}`,
            nudge: `<b>(c)</b>: if ${rel(A, '=', B)}, “mutually exclusive” means ${A}${NB}∩${NB}${A}${NB}=${NB}${A}${NB}=${NB}∅, so ${pr(A)}${NB}=${NB}0, which the stem rules out; equality of the events cannot rescue it.`,
          },
          {
            label: `True only if ${pr(A)}${NB}+${NB}${pr(B)}${NB}=${NB}1`,
            nudge: `<b>(d)</b>: the sum ${pr(A)}${NB}+${NB}${pr(B)} plays no part: the two conditions together force ${PAPB}${NB}=${NB}0, whatever the sum is.`,
          },
        ],
        correct: 1,
        solution: `Mutually exclusive means ${PAnB}${NB}=${NB}0; independent means ${PAnB}${NB}= ${PAPB}. Both at once forces ${PAPB}${NB}=${NB}0, impossible when both probabilities are positive.`,
      },
      {
        t: 'mcq',
        q: 'A family has two children. Given that at least one is a girl, the probability that both are girls is:',
        opts: [
          {
            label: HALF,
            nudge: `<b>(a)</b> ${HALF} comes from thinking “the other child is independently a girl with probability ${HALF}.” That answers “given the <b>elder</b> is a girl”; “at least one” does not say which child, so ${I('GB')} and ${I('BG')} both stay in the reduced sample space.`,
          },
          { label: fr('1', '3'), nudge: null },
          {
            label: QUARTER,
            nudge: `<b>(c)</b> ${QUARTER} is the <b>unconditional</b> ${pr(I('GG'))}: the classic error of ignoring the given information.`,
          },
          {
            label: fr('2', '3'),
            nudge: `<b>(d)</b> ${fr('2', '3')} is the chance that <b>exactly one</b> child is a girl, given at least one is (${I('GB')} or ${I('BG')} out of three cases): the complement of the right answer, not the probability asked for.`,
          },
        ],
        correct: 1,
        solution: `Sample space ${set(I('GG'), I('GB'), I('BG'), I('BB'))}. Condition “at least one girl” removes ${I('BB')}, leaving ${set(I('GG'), I('GB'), I('BG'))}: three equally likely cases. Only ${I('GG')} has both girls, so ${P}${NB}=${NB}${fr('1', '3')}.`,
      },
      {
        t: 'mcq',
        q: `If ${A} and ${B} are independent events, which of the following pairs is <b>not</b> guaranteed independent?`,
        opts: [
          {
            label: `${AP} and ${B}`,
            nudge: `<b>(a)</b>: ${AP} and ${B} are guaranteed independent (the corollary of Theorem 3); complementing one event does not break independence.`,
          },
          {
            label: `${A} and ${BP}`,
            nudge: `<b>(b)</b>: ${A} and ${BP} is exactly Theorem 3: ${pr(cap(A, BP))}${NB}= ${pr(A)}${pr(BP)}.`,
          },
          {
            label: `${AP} and ${BP}`,
            nudge: `<b>(c)</b>: ${AP} and ${BP} are independent too (apply Theorem 3 twice); complementing both events does not break it.`,
          },
          { label: 'None: all three pairs are independent', nudge: null },
        ],
        correct: 3,
        solution: `By Theorem 3 and its corollary, independence is inherited by every complement combination, so all three pairs are independent. The proof ${pr(cap(A, BP))}${NB}=${NB}${pr(A)}${NB}− ${PAPB}${NB}= ${pr(A)}${pr(BP)} settles it cleanly.`,
      },
      {
        t: 'mcq',
        q: `For independent events ${A}, ${B} with ${pr(A)}${NB}=${NB}${p}, ${pr(B)}${NB}=${NB}${q}, the probability that exactly one of them occurs is:`,
        opts: [
          { label: I('pq'), nudge: `<b>(a)</b> ${I('pq')} is “both occur.”` },
          { label: `${p}${NB}+${NB}${q}`, nudge: `<b>(b)</b> ${p}${NB}+${NB}${q} forgets to subtract any overlap.` },
          { label: `${p}${NB}+${NB}${q}${NB}−${NB}2${I('pq')}`, nudge: null },
          {
            label: `${p}${NB}+${NB}${q}${NB}−${NB}${I('pq')}`,
            nudge: `<b>(d)</b> ${p}${NB}+${NB}${q}${NB}−${NB}${I('pq')} is ${pr(AuB)}: “<b>at least</b> one,” which wrongly includes the both-occur case.`,
          },
        ],
        correct: 2,
        solution: `“Exactly one”${NB}= ${pr(cap(A, BP))}${NB}+ ${pr(cap(AP, B))}<br>= ${p}(1${NB}−${NB}${q})${NB}+${NB}(1${NB}−${NB}${p})${q}${NB}=${NB}${p}${NB}+ ${q}${NB}−${NB}2${I('pq')}.<br>The killer detail is the factor 2 on ${I('pq')}: you remove the intersection twice because “exactly one” excludes it from both directions.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing “mutually exclusive” with “independent.”</b> They are nearly opposite ideas. Mutually exclusive (with positive probabilities) means strongly dependent: one happening forbids the other.',
          `<b>Flipping the conditional.</b> ${cp(A, B)} and ${cp(B, A)} are generally different; their denominators (${pr(B)} vs ${pr(A)}) differ. For a vivid feel: the probability that a person carries an umbrella given it is raining is high, but the probability that it is raining given a person carries an umbrella can be much lower: same two events, two very different conditionals. Writing ${fr(PEnF, pr(E))} when you wanted ${EgF} is the most common slip.`,
          `<b>Pairwise${NB}≠${NB}mutual independence.</b> For three events, verifying the three pairs is not enough; the triple-product condition ${pr(cap(A, B, C))}${NB}= ${pr(A)}${pr(B)}${pr(C)} can still fail.`,
          '<b>Ignoring the given information.</b> In “given at least one girl,” reverting to the unconditional probability throws away the very condition that defines the problem.',
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Before classifying any pair, compute ${PAnB} in one line via the addition theorem, then run <b>two</b> one-second checks: “= 0?” (mutually exclusive) and “= ${PAPB}?” (independent). These two questions resolve almost every Board/JEE-Main classification problem instantly, and they can never both be “yes” unless a probability is zero.`,
      },
      {
        t: 'p',
        html: `<b>Phrase-to-symbol decoder.</b> Half the battle in this topic is translating exam English into set notation before touching any formula. Train your eye on these:`,
      },
      {
        t: 'p',
        html: `• “given that ${F} has occurred” / “if it is known that ${F}” / “when ${F} happens”${NB}→${NB}a conditional ${P}(${NB}·${NB}${WJ}|${NB}${F}): the denominator becomes ${pr(F)}.`,
      },
      {
        t: 'p',
        html: `• “both ${A} and ${B}”${NB}→ ${PAnB}.`,
      },
      {
        t: 'p',
        html: `• “${A} or ${B}” / “at least one of ${A}, ${B}”${NB}→ ${pr(AuB)}${NB}=${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}− ${PAnB}.`,
      },
      {
        t: 'p',
        html: `• “neither ${A} nor ${B}”${NB}→ ${pr(cap(AP, BP))}${NB}=${NB}1${NB}− ${pr(AuB)}.`,
      },
      {
        t: 'p',
        html: `• “exactly one of ${A}, ${B}”${NB}→${NB}${pr(A)}${NB}+${NB}${pr(B)}${NB}− 2${PAnB}.`,
      },
      {
        t: 'p',
        html: `• “at least one of ${n} independent events”${NB}→${NB}1${NB}−${NB}∏(1${NB}−${NB}${pr(Ai)}) (complement-and-multiply).`,
      },
      {
        t: 'p',
        html: 'Write the symbolic version in the margin first; nine times out of ten the formula to use then becomes obvious, and you avoid the silent misreadings that cost full marks in Boards and a clean shot in JEE.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Conditional</b>', note: `${EgF}${NB}= ${COND}, need ${rel(pr(F), '>', '0')}. (Shrink the world to ${F}, then count.)` },
          { f: '<b>Multiplication</b>', note: `${PEnF}${NB}= ${pr(E)}${cp(F, E)}${NB}= ${pr(F)}${EgF}.` },
          { f: '<b>Chain rule</b>', note: `${pr(cap(E, F, G))}${NB}= ${pr(E)}${NB}${cp(F, E)}${NB}${cp(G, EnF)}.` },
          { f: `<b>Independent</b>${NB}⇔ ${PEnF}${NB}= ${pr(E)}${pr(F)}${NB}⇔ ${EgF}${NB}=${NB}${pr(E)}.`, note: '' },
          { f: `<b>Mutually exclusive</b>${NB}⇔ ${PEnF}${NB}=${NB}0.`, note: '(Opposite of independent for positive probabilities.)' },
          { f: '<b>Complement rule</b>', note: `${A} ⊥ ${B}${NB}⇒${NB}${A} ⊥ ${BP}, ${AP} ⊥ ${B}, ${AP} ⊥ ${BP}.` },
          {
            f: `<b>Exactly one of ${A}, ${B}</b>`,
            note: `${pr(A)}${NB}+${NB}${pr(B)}${NB}− 2${PAnB}. <b>At least one:</b> ${pr(A)}${NB}+${NB}${pr(B)}${NB}− ${PAnB}.`,
          },
        ],
        aids: [
          '“Given shrinks, Independent ignores, Exclusive forbids.”',
          `<b>The 2${NB}×${NB}${I('pq')} trap:</b> “exactly one” subtracts the overlap <b>twice</b>; “at least one” subtracts it once.`,
        ],
      },
    ],
  },

  // ──────────────── Topic 02 · Subtopic 02 · pp. 822–829 ────────────────
  {
    n: '02',
    title: 'Total Probability & Bayes’ Theorem',
    kalam: 'Bayes is the bridge that flips the direction, and Total Probability is what builds its denominator.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `This is the single highest-yield idea in the chapter. CBSE Boards almost always carry a <b>dedicated question</b> on Bayes’ Theorem (the “two-bags,” “two-factories,” or “disease-test” template), a 5-mark long answer or a 4-mark case study in recent papers (6 marks in older ones) ${ESTIMATE}. JEE Main places one question here most years ${ESTIMATE}, often combined with counting. JEE Advanced raises the rigour: partition into three-plus cases, base-rate surprises, and Bayes layered on top of a transfer experiment. Total Probability is rarely asked alone ${ESTIMATE} but is the engine that makes Bayes work.`,
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Picture a famous mithai shop during Diwali that sources its kaju katli from three different suppliers. Supplier A sends 50% of the stock, B sends 30%, and C sends 20%. Each supplier occasionally sends a stale piece. If you walk in and pick a random box, what’s the chance you get a stale one? You can’t answer with any single supplier’s spoilage rate: the box could have come from any of them. You have to <b>weight each supplier’s spoilage rate by how much stock they contribute</b> and add it all up. That weighted sum is the <b>Theorem of Total Probability</b>: it stitches together several mutually exclusive “origin stories” into one overall probability.`,
      },
      {
        t: 'p',
        html: `For this to work, the origin stories must do two things: never overlap, and together cover every possibility. In maths we call such a family of events a <b>partition</b> of the sample space: the supplier set ${set(A, B, C)} is a partition because every box comes from exactly one supplier (disjoint) and some supplier (exhaustive). Total Probability then says: the chance of an effect (a stale piece) is the sum, over every cause, of (chance of that cause)${NB}×${NB}(chance of the effect given that cause).`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Total Probability reasons <b>forwards</b>: cause\u00a0→\u00a0effect. You know the suppliers and their spoilage rates, and you predict the chance of a stale piece. But the really interesting exam questions run the film <b>backwards</b>. You’ve already bitten into a stale piece; now, which supplier most likely sent it? That backward question, from observed effect to hidden cause, is exactly what <b>Bayes’ Theorem</b> answers. This is why Bayes is also called <b>inverse probability</b>: it inverts the direction of conditioning, turning “probability of effect given cause” into “probability of cause given effect.”',
      },
      {
        t: 'p',
        html: 'The trap your intuition sets here is <b>base-rate neglect</b>. Suppose supplier C has the worst spoilage rate but ships the least stock. When you bite a stale piece, your gut screams “C!”, but if C barely ships anything, the sheer volume from A can make A the more likely culprit even with a lower spoilage rate. Bayes forces you to respect both numbers: the <b>prior</b> (how much each supplier ships: the base rate) and the <b>likelihood</b> (each supplier’s spoilage rate). The output is the <b>posterior</b> (the updated chance for each supplier after seeing the stale piece). Forgetting the prior is the classic medical-test blunder: a test that is “95% accurate” for a rare disease can still leave a positive patient far more likely to be healthy than sick, simply because healthy people vastly outnumber sick ones.',
      },
      {
        t: 'p',
        html: 'A courtroom captures the spirit perfectly. Before any evidence, the judge holds a <b>prior</b> belief about each suspect (who had motive, who was nearby). A piece of evidence then arrives (a fingerprint, say) and each suspect has a <b>likelihood</b> of having left it. Bayes is the formal rule for updating belief: the suspect who best combines “was plausible to begin with” and “fits the evidence” becomes the most probable culprit. Crucially, a suspect with an airtight alibi (prior near zero) stays innocent no matter how well the evidence fits: exactly why Box B drops out in some problems. Email spam filters run this same loop millions of times a day: a prior chance a message is spam, updated by the likelihood of each word it contains.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions.</b> Both theorems require a genuine partition: the cases must be pairwise disjoint, exhaustive, and each must have <b>positive</b> probability (${rel(pr(Ei), '>', '0')}): you cannot condition on an impossible cause. If your “causes” overlap or leave gaps, the formulas silently give nonsense. And Bayes’ denominator is always the Total Probability of the observed effect, never a single likelihood. A practical consequence worth internalising: if you ever compute posteriors that fail to sum to 1, you have either used a non-partition or divided by the wrong denominator: the error is structural, not arithmetic, so re-examine your cases before re-checking your sums.`,
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `<b>Partition of a sample space.</b> Events ${E1},${NB}${E2},${NB}…,${NB}${En} partition the sample space ${S} if:`,
      },
      {
        t: 'p',
        html: `• ${rel(cap(Ei, Ej), '=', '∅')} for ${rel(i, '≠', j)} (pairwise disjoint),<br>${WJ}• ${cup(E1, E2, '⋯', En)}${NB}=${NB}${S} (exhaustive),<br>${WJ}• ${rel(pr(Ei), '>', '0')} for every ${i}.`,
      },
      {
        t: 'p',
        html: `<b>Theorem of Total Probability.</b> If {${E1}, …, ${En}} is a partition of ${S} and ${A} is any event, then`,
      },
      {
        t: 'formula',
        kicker: 'Theorem of Total Probability',
        main: `${pr(A)} = ${TOTAL}`,
        legend: [`${E1}, …, ${En}${NB}=${NB}a partition of ${S} (disjoint, exhaustive)`, `${pr(Ej)}${NB}=${NB}the prior of cause ${Ej}`, `${cp(A, Ej)}${NB}=${NB}the likelihood of the effect ${A} under that cause`],
        note: null,
      },
      {
        t: 'p',
        html: `Here ${pr(Ej)} is the <b>prior</b> of cause ${Ej}, and ${cp(A, Ej)} is the <b>likelihood</b> of the effect ${A} under that cause.`,
      },
      {
        t: 'p',
        html: `<b>Bayes’ Theorem.</b> With the same partition, for the observed event ${A} (with ${rel(pr(A), '>', '0')}), the posterior probability of cause ${Ei} is`,
      },
      {
        t: 'formula',
        kicker: 'Bayes’ Theorem',
        main: `${cp(Ei, A)} = ${BAYES}`,
        legend: [
          `${Ei}${NB}= hypotheses / causes (the partition)`,
          `${A}${NB}= evidence / observed effect`,
          `${pr(Ei)}${NB}=${NB}prior`,
          `${cp(A, Ei)}${NB}= likelihood`,
          `${cp(Ei, A)}${NB}= posterior`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The denominator is precisely ${pr(A)} from Total Probability. In words:<br>posterior${NB}= ${fr('prior × likelihood', 'total probability of the evidence')}.`,
      },
      {
        t: 'p',
        html: `<b>Terminology key.</b> ${Ei}${NB}= hypotheses / causes (the partition); ${A}${NB}= evidence / observed effect; ${pr(Ei)}${NB}=${NB}prior; ${cp(A, Ei)}${NB}= likelihood; ${cp(Ei, A)}${NB}= posterior. All are dimensionless numbers in [0,${NB}1], and the posteriors satisfy ${SUMi}${NB}${cp(Ei, A)}${NB}=${NB}1: a free consistency check.`,
      },
      {
        t: 'p',
        html: `<b>Two-hypothesis special case.</b> When there are just two causes (an event ${E} and its complement ${EP}), Bayes collapses to the form most common in Boards ${ESTIMATE}:`,
      },
      {
        t: 'formula',
        kicker: 'Two-hypothesis special case',
        main: `${cp(E, A)} = ${fr(`${pr(E)}${NB}${cp(A, E)}`, `${pr(E)}${NB}${cp(A, E)} + ${pr(EP)}${NB}${cp(A, EP)}`)}`,
        legend: [`${E}${NB}=${NB}an event (the first cause)`, `${EP}${NB}=${NB}its complement (the second cause)`, `${A}${NB}=${NB}the observed effect`],
        note: null,
      },
      {
        t: 'p',
        html: 'This is the disease-test and single-bag template; recognising it lets you write the answer in one line.',
      },

      { t: 'part', title: 'Theorems and proofs' },
      {
        t: 'p',
        html: `<b>Theorem 1: Theorem of Total Probability.</b> <b>Claim:</b> For a partition {${E1}, …, ${En}} of ${S} and any event ${A}, ${pr(A)}${NB}= ${SUMJ}${NB}${pr(Ej)}${cp(A, Ej)}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Because the ${Ej} are exhaustive (⋃<sub>${j}</sub>${NB}${Ej}${NB}=${NB}${S}), every outcome of ${A} falls into one of them. So we may slice ${A} along the partition:<br>${A}${NB}=${NB}${cap(A, S)}${NB}= ${A}${NB}∩${NB}(${BIGU}${NB}${Ej})<br>= ${BIGU}${NB}(${cap(A, Ej)}).`,
      },
      {
        t: 'p',
        html: `The pieces ${cap(A, Ej)} are pairwise disjoint, because the ${Ej} themselves are disjoint: if ${rel(cap(Ei, Ej), '=', '∅')}, then certainly (${cap(A, Ei)})${NB}∩${NB}(${cap(A, Ej)})${NB}=${NB}∅. For a disjoint union, probabilities simply add:<br>${pr(A)}${NB}= ${SUMJ}${NB}${pr(cap(A, Ej))}.`,
      },
      {
        t: 'p',
        html: `Finally, rewrite each piece using the multiplication theorem (from Topic 01), ${pr(cap(A, Ej))}${NB}= ${pr(Ej)}${cp(A, Ej)}:<br>${pr(A)}${NB}= ${TOTAL}.${NB}■`,
      },
      {
        t: 'p',
        html: `The two partition properties pull their weight in exactly two places: exhaustive lets us write ${A} as the union over all ${Ej}, and disjoint lets us add the probabilities without overlap corrections.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2: Bayes’ Theorem.</b> <b>Claim:</b> ${cp(Ei, A)}${NB}= ${BAYES_SHORT}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Start from the definition of conditional probability (Topic 01) applied to the cause we want:<br>${cp(Ei, A)}${NB}= ${fr(pr(cap(Ei, A)), pr(A))}.`,
      },
      {
        t: 'p',
        html: `For the <b>numerator</b>, use the multiplication theorem the convenient way round, conditioning on the cause, whose likelihood we actually know:<br>${pr(cap(Ei, A))}${NB}= ${PATHi}.`,
      },
      {
        t: 'p',
        html: `For the <b>denominator</b>, substitute Total Probability (Theorem 1):<br>${pr(A)}${NB}= ${TOTAL}.`,
      },
      { t: 'p', html: 'Putting the two together gives the result.\u00a0■' },
      {
        t: 'p',
        html: `The single most important key idea in this proof: we are handed the likelihoods ${cp(A, Ei)} (effect-given-cause) but we want the posteriors ${cp(Ei, A)} (cause-given-effect). Bayes is the bridge that flips the direction, and Total Probability is what builds its denominator.`,
      },
      {
        t: 'p',
        html: '<b>The probability-tree device (how to organise any Bayes problem).</b> Every Total-Probability/Bayes question can be drawn as a two-level tree, and the tree is the formula made visible.',
      },
      { t: 'fig', id: 'm12-13-fig-13.1' },
      {
        t: 'p',
        html: `To read the tree: each complete path from root to an “${A} occurs” leaf has probability equal to the <b>product of the labels along it</b>, that is ${pr(Ei)}${cp(A, Ei)}, the multiplication theorem in action. <b>Total Probability</b> is the sum of all such ${A}-paths. <b>Bayes</b> then asks: out of that total, what fraction travelled through cause ${Ei}? (which is that single path-product divided by the sum). Drawing the tree first turns even a messy three-cause Advanced problem into bookkeeping, and it makes the denominator impossible to get wrong because you literally add up the paths you drew.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Bag I contains 4 red and 6 blue balls; Bag II contains 7 red and 3 blue balls. A bag is chosen at random and one ball is drawn from it. The ball turns out to be <b>red</b>. Find the probability that it was drawn from Bag I.',
        steps: [
          `Let ${E1}, ${E2} be “Bag I chosen,” “Bag II chosen” (a partition), and ${A}${NB}=${NB}“red ball drawn.” Priors: ${pr(E1)}${NB}=${NB}${pr(E2)}${NB}=${NB}${HALF}. Likelihoods: ${cp(A, E1)}${NB}=${NB}${fr('4', '10')}, ${cp(A, E2)}${NB}=${NB}${fr('7', '10')}. Total probability of red:<br>${pr(A)}${NB}=${NB}${HALF}${NB}·${NB}${fr('4', '10')}${NB}+${NB}${HALF}${NB}·${NB}${fr('7', '10')}<br>= ${fr('4', '20')}${NB}+${NB}${fr('7', '20')}${NB}=${NB}${fr('11', '20')}.`,
          `By Bayes’ Theorem:<br>${cp(E1, A)}${NB}=${NB}(${HALF}${NB}·${NB}${fr('4', '10')})${NB}·${NB}${fr('20', '11')}<br>= ${fr('4', '20')}${NB}·${NB}${fr('20', '11')}${NB}=${NB}${fr('4', '11')}.`,
          `(Quick check: ${P}(Bag II${NB}|${NB}red)${NB}=${NB}${fr('7', '11')}, and ${fr('4', '11')}${NB}+${NB}${fr('7', '11')}${NB}=${NB}1: the posteriors over the two-bag partition sum to one, as they must.)`,
        ],
        ans: `${P}(Bag I${NB}|${NB}red)${NB}=${NB}${fr('4', '11')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Speed Trap',
        q: `In a large town, 2% of people carry a certain condition. A screening test correctly flags a carrier 95% of the time, but also wrongly flags a non-carrier 10% of the time. A randomly chosen person tests <b>positive</b>. Roughly what is the probability they actually carry the condition?<br>(a)${NB}95%${NB}${NB}(b)${NB}≈${NB}16%${NB}${NB}(c)${NB}≈${NB}50%${NB}${NB}(d)${NB}85%`,
        steps: [
          `<b>Speed solution.</b> Don’t reach for 95%: that’s the trap (it’s a likelihood, not a posterior). Set ${D}${NB}= carrier. Priors ${pr(D)}${NB}=${NB}0.02, ${pr(`${D}′`)}${NB}=${NB}0.98. Likelihoods ${cp('+', D)}${NB}=${NB}0.95, ${cp('+', `${D}′`)}${NB}=${NB}0.10.`,
          `${pr('+')}${NB}=${NB}0.02(0.95)${NB}+ 0.98(0.10)<br>= 0.019${NB}+${NB}0.098${NB}=${NB}0.117.<br>${cp(D, '+')}${NB}= ${fr('0.019', '0.117')}${NB}≈${NB}0.162.`,
          '<b>Why the trap works:</b> the test is “95% accurate,” so students pick (a). But carriers are rare, so the 0.098 flood of false positives from the huge non-carrier pool swamps the 0.019 of true positives. Base rate wins: the hallmark Bayes surprise.',
        ],
        ans: `(b)${NB}≈${NB}16%`,
      },
      {
        t: 'ex',
        tag: 'JEE Main, Multi-concept: Bayes + combinatorics',
        q: 'Three identical boxes are on a table. Box A holds 3 white and 2 black balls, Box B holds 1 white and 4 black, Box C holds 4 white and 1 black. A box is chosen at random and <b>two balls are drawn together</b> (without replacement): both turn out white. Find the probability the box chosen was C.',
        steps: [
          `Priors ${pr(A)}${NB}=${NB}${pr(B)}${NB}=${NB}${pr(C)}${NB}=${NB}${fr('1', '3')}. The effect ${W}${NB}=${NB}“both drawn balls white.” Compute each likelihood with combinations (link to P&C):<br>${cp(W, A)}${NB}=${NB}${fr(nCr('3', '2'), nCr('5', '2'))}${NB}=${NB}${fr('3', '10')},<br><br>${cp(W, B)}${NB}=${NB}${fr(nCr('1', '2'), nCr('5', '2'))}${NB}=${NB}0,<br><br>${cp(W, C)}${NB}=${NB}${fr(nCr('4', '2'), nCr('5', '2'))}${NB}=${NB}${fr('6', '10')}.`,
          `Total probability:<br>${pr(W)}${NB}=${NB}${fr('1', '3')}(${fr('3', '10')}${NB}+ 0${NB}+${NB}${fr('6', '10')})<br>= ${fr('1', '3')}${NB}·${NB}${fr('9', '10')}${NB}=${NB}${fr('3', '10')}.`,
          `Bayes for box C:<br>${cp(C, W)}${NB}=${NB}(${fr('1', '3')}${NB}·${NB}${fr('6', '10')})${NB}·${NB}${fr('10', '3')}<br>= ${fr('6', '30')}${NB}·${NB}${fr('30', '9')}${NB}=${NB}${fr('2', '3')}.`,
          `(and note ${cp(B, W)}${NB}=${NB}0: Box B can’t yield two whites at all).`,
        ],
        ans: `${P}(C${NB}|${NB}both white)${NB}=${NB}${fr('2', '3')}`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A workshop runs three production lines. Line ${L1} makes 60% of output with a 2% defect rate; ${L2} makes 25% with a 4% defect rate; ${L3} makes 15% with an 8% defect rate. A randomly selected item is found <b>defective</b>. (i) Find the posterior probability it came from each line. (ii) If quality control can re-inspect only one line’s process first, which line should it pick, and what does the answer reveal?`,
        steps: [
          `Causes ${L1}, ${L2}, ${L3} form a partition; effect ${D}${NB}= defective. Joint probabilities (prior${NB}×${NB}likelihood):<br>${pr(L1)}${cp(D, L1)}${NB}=${NB}0.60(0.02)${NB}=${NB}0.012,<br>${pr(L2)}${cp(D, L2)}${NB}=${NB}0.25(0.04)${NB}=${NB}0.010,<br>${pr(L3)}${cp(D, L3)}${NB}=${NB}0.15(0.08)${NB}=${NB}0.012.`,
          `Total probability of a defect:<br>${pr(D)}${NB}= 0.012 + 0.010${NB}+${NB}0.012${NB}=${NB}0.034.`,
          `Posteriors:<br>${cp(L1, D)}${NB}= ${fr('0.012', '0.034')}${NB}=${NB}${fr('6', '17')}${NB}≈${NB}0.353,<br>${cp(L2, D)}${NB}= ${fr('0.010', '0.034')}${NB}=${NB}${fr('5', '17')}${NB}≈${NB}0.294,<br>${cp(L3, D)}${NB}= ${fr('0.012', '0.034')}${NB}=${NB}${fr('6', '17')}${NB}≈${NB}0.353.`,
          `(Check: ${fr('6', '17')}${NB}+${NB}${fr('5', '17')}${NB}+${NB}${fr('6', '17')}${NB}=${NB}${fr('17', '17')}${NB}=${NB}1.${NB}✓)`,
          `(ii) ${L1} and ${L3} are <b>tied</b> as the most likely source (each ${fr('6', '17')}), so quality control can start with either of them, not with ${L2}. The insight: ${L3} is four times as defect-prone as ${L1}, yet contributes equal blame, because ${L1} produces four times the volume. High volume at low defect rate is just as guilty as low volume at high defect rate. QA should weigh both, not chase the scariest defect rate alone.`,
        ],
        ans: `(i) ${fr('6', '17')}, ${fr('5', '17')}, ${fr('6', '17')}; (ii) ${L1} or ${L3} (tied)`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '<b>[CBSE]</b> Urn X has 5 red and 5 green balls; Urn Y has 3 red and 7 green. An urn is picked at random and a ball drawn is found <b>green</b>. Find the probability it came from Urn X.',
            a: fr('5', '12'),
          },
          {
            q: `<b>[JEE Main]</b> A factory’s machines ${M1}, ${M2} produce 70% and 30% of bolts, with defect rates 3% and 5%. A bolt is defective. Find the probability it was made by ${M2}.`,
            a: `${fr('15', '36')}${NB}=${NB}${fr('5', '12')}`,
          },
          {
            q: `<b>[JEE Main]</b> Three coins sit in a drawer: one fair, one with two heads, one biased with ${P}(head)${NB}=${NB}${fr('3', '4')}. A coin is chosen at random and tossed once, showing a head. Find the probability it was the two-headed coin.`,
            a: fr('4', '9'),
          },
          {
            q: '<b>[JEE Advanced]</b> Box P has 2 white, 3 black; Box Q has 4 white, 1 black. A box is chosen at random and <b>two balls are drawn together</b>; both are white. Find the probability the box was Q.',
            a: fr('6', '7'),
          },
          {
            q: `<b>[JEE Advanced]</b> A student knows the answer to a multiple-choice question with probability ${fr('2', '3')}; otherwise they guess among 4 options. Given the answer was correct, find the probability the student actually knew it.`,
            a: fr('8', '9'),
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `In Bayes’ Theorem, the denominator ${SUMj}${NB}${pr(Ej)}${cp(A, Ej)} equals:`,
        opts: [
          {
            label: cp(A, Ei),
            nudge: '<b>(a)</b> is a single likelihood: picking it means forgetting to sum over all causes.',
          },
          { label: pr(cap(Ei, A)), nudge: '<b>(b)</b> is just the numerator term for one cause.' },
          { label: pr(A), nudge: null },
          {
            label: '1',
            nudge: `<b>(d)</b> tempts students who confuse “the posteriors sum to 1” with “the denominator is 1”; the posteriors sum to 1, the denominator is ${pr(A)}, generally less than 1.`,
          },
        ],
        correct: 2,
        solution: `The denominator is the Total Probability of the evidence ${A}, which by Theorem 1 is exactly ${pr(A)}.`,
      },
      {
        t: 'mcq',
        q: `A box has 4 red and 6 white balls. Two balls are drawn one by one <b>without replacement</b>. Given the second ball is red, which quantity gives ${P}(first${NB}red${NB}|${NB}second${NB}red) most directly?`,
        opts: [
          {
            label: 'Total Probability only',
            nudge: `<b>(a)</b> Total Probability alone gives ${P}(second red) but not the conditional on the first.`,
          },
          { label: 'Bayes’ Theorem', nudge: null },
          { label: 'Independence', nudge: '<b>(c)</b> fails because without replacement the draws are dependent.' },
          { label: 'Addition theorem', nudge: '<b>(d)</b> the addition theorem is for unions, irrelevant here.' },
        ],
        correct: 1,
        solution: 'We observe an effect (second red) and ask about an earlier cause (first red): a backward, inverse-probability question, so Bayes.',
      },
      {
        t: 'mcq',
        q: `For a partition {${E1}, ${E2}, ${E3}} and event ${A}, suppose ${cp(E1, A)}${NB}=${NB}0.5 and ${cp(E2, A)}${NB}=${NB}0.3. Then ${cp(E3, A)} equals:`,
        opts: [
          { label: '0.2', nudge: null },
          { label: '0.8', nudge: '<b>(b)</b> adds instead of subtracting.' },
          {
            label: 'cannot be determined',
            nudge: '<b>(c)</b> misses that the partition guarantees the sum-to-one property: no extra data needed.',
          },
          { label: '0', nudge: `<b>(d)</b> assumes ${E3} is impossible, unjustified.` },
        ],
        correct: 0,
        solution: `Posteriors over a partition sum to 1, so ${cp(E3, A)}${NB}=${NB}1${NB}−${NB}0.5${NB}−${NB}0.3${NB}=${NB}0.2.`,
      },
      {
        t: 'mcq',
        q: 'A test for a rare disease (1% prevalence) is 99% sensitive and 99% specific. A patient tests positive. The probability they have the disease is closest to:',
        opts: [
          { label: '99%', nudge: '<b>(a)</b> is base-rate neglect: quoting sensitivity as the answer.' },
          { label: '50%', nudge: null },
          { label: '1%', nudge: '<b>(c)</b> quotes the prior, ignoring the test result entirely.' },
          {
            label: '9%',
            nudge: `<b>(d)</b> 9% is what a 10% false-positive rate would give (${fr('0.0099', '0.0099 + 0.099')}${NB}≈${NB}0.09): it misreads “99% specific” as 90% specific. Here a healthy person tests positive only 1% of the time.`,
          },
        ],
        correct: 1,
        solution: `${pr('+')}${NB}=${NB}0.01(0.99)${NB}+ 0.99(0.01)<br>= 0.0099${NB}+${NB}0.0099${NB}=${NB}0.0198;<br>posterior${NB}= ${fr('0.0099', '0.0198')}${NB}=${NB}0.5.<br>The lesson: with a rare disease, even a very good test leaves a coin-flip after one positive.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Base-rate neglect.</b> Quoting the likelihood ${cp(A, Ei)} as if it were the posterior ${cp(Ei, A)}. The test’s accuracy is not the probability you have the disease.`,
          `<b>Inverting the conditional carelessly.</b> ${cp(A, Ei)} (given) and ${cp(Ei, A)} (wanted) point in opposite directions; swapping them skips Bayes entirely.`,
          `<b>A non-partition.</b> Using “causes” that overlap or don’t cover all cases. If ∑${NB}${pr(Ei)}${NB}≠${NB}1, you do <b>not</b> have a partition and Total Probability fails.`,
          `<b>Wrong denominator.</b> Dividing by a single ${pr(Ej)}${cp(A, Ej)} instead of the full sum ${pr(A)}.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip:</b> Build a tiny table: one row per cause, columns: prior, likelihood, product (prior${NB}×${NB}likelihood). The column of products, summed, is your denominator ${pr(A)}; each posterior is that row’s product divided by the column total. This table format makes the full long-answer Board solution almost mechanical and kills sign/placement errors. Final sanity check: the posteriors must add to${NB}1.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (Advanced):</b> When a problem gives evidence in stages (a second observation after the first), <b>today’s posterior becomes tomorrow’s prior</b>. Don’t restart from scratch; feed the updated probabilities back into Bayes for the next piece of evidence. This “chaining” is exactly how repeated draws or repeated test results are handled, and recognising it saves a full recomputation under exam time pressure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Partition</b>', note: `disjoint${NB}+ exhaustive${NB}+${NB}each ${rel(pr(Ei), '>', '0')}.` },
          { f: '<b>Total Probability (forward, cause→effect)</b>', note: `${pr(A)}${NB}= ${SUMj}${NB}${pr(Ej)}${cp(A, Ej)}.` },
          { f: '<b>Bayes (backward, effect→cause)</b>', note: `${cp(Ei, A)}${NB}= ${BAYES_SHORT}.` },
          { f: '<b>In words</b>', note: `posterior${NB}= ${fr('prior × likelihood', `${P}(evidence)`)}.` },
          { f: `<b>Denominator is always</b> ${pr(A)}`, note: 'the full sum, never one term.' },
          { f: '<b>Posteriors sum to 1</b>', note: `${SUMi}${NB}${cp(Ei, A)}${NB}=${NB}1: use it to self-check.` },
        ],
        aids: [
          '“Total adds the causes; Bayes blames one cause.” Inverse probability\u00a0= reasoning from effect back to cause.',
          `<b>Table trick:</b> prior${NB}×${NB}likelihood per row${NB}⇒${NB}column sum${NB}=${NB}${pr(A)}${NB}⇒${NB}each posterior${NB}=${NB}row ÷ sum.`,
        ],
      },
    ],
  },
];
