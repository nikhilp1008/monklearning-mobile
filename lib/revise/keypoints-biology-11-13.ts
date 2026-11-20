/**
 * KEY POINTS for Biology Class 11, Chapter 13 (Plant Growth and Development).
 *
 * Written for test mode, in the form of the Chapter 1 file: every point is a
 * question to answer in your head, then the answer and at most one more line.
 * Four kinds, each a section on the screen: Remember (two a topic), Don't mix
 * up, Common mistakes and Exam shortcuts (one each); an Additional topic has
 * two points for its central results, except the last (What NEET Actually
 * Asks), which has one Remember and one Common mistakes. Memory lines are a
 * fifth, short section of their own, read rather than tested: the first two
 * of each topic.
 *
 * `topic`: Topics 01 to 03 are 0 to 2; Additional topics A to E are 3 to 7;
 * F (the book's Addendum P, What NEET Actually Asks) is 8. No point refers to
 * another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book) as it
 * stands; the page (the bottom folio) is above each point. Remember: the
 * topic's definitions, processes and Cheat sheet. Common mistakes: its Common
 * student pitfalls (or the Traps). Exam shortcuts: its Pro-Tip, with a worked
 * example or practice answer. `say`: the cheat sheet's first memory aids,
 * word for word, in the Chemistry form: no quotation marks and no markup, the
 * label ("Order mnemonic:", "Mnemonic:") turned into the arrow form. Topic 01
 * prints two aids and Topic 03 one aid that holds two lines (the SDP phrase,
 * then the light clock and cold clock pair), used as its two lines; Topic 02
 * prints one line that holds two mnemonics (promoters, inhibitors), used as
 * its two lines; so the chapter has six lines. The Additional topics have
 * none.
 *
 * Where the book's claim is looser or wrong, the point is true, and does not
 * repeat the claim:
 * - relative growth rate: the chapter's RGR formula (final minus initial size
 *   over initial size times time, times 100%) is the average relative rate over
 *   the interval; the exact rate is r in the exponential law (the efficiency
 *   index), and the two agree only for a small change (the chapter says so in
 *   the Additional topic on quantitative growth analysis). The points call the
 *   first the average (ratio form) and r the exact rate; "RGR is dimensionless"
 *   is not repeated (r carries time to the power minus one, as that topic says);
 * - the growth curve: geometric growth is exponential (J-shaped while resources
 *   are unlimited) and it is limited resources that flatten the whole-life
 *   curve into the S-shaped sigmoid; "geometric growth gives a sigmoid curve"
 *   is not claimed, and arithmetic growth gives a straight line;
 * - "an animal grows all over and then stops", "animal growth is determinate
 *   and diffuse" and "these factories never permanently retire" are not
 *   repeated: the points say plant growth is open, indeterminate, intrinsic
 *   and localized at meristems, and that leaves, flowers and fruits are
 *   determinate;
 * - the hormones: dormancy is broken by gibberellin (and by ethylene) and
 *   enforced by ABA, and flowering is not attributed to auxins or cytokinins;
 *   stomatal closure is ABA's alone (ethylene is not named for it); abscission
 *   is the ethylene job of the exam, with auxin preventing it in young leaves
 *   and fruits, and ABA's headline jobs are dormancy and stomatal closure;
 *   "the ratio, not the absolute amounts, decides" and "the bigger partner
 *   wins" are not repeated: the auxin to cytokinin point says what a given
 *   ratio favours in a callus and that the question states the ratio; the
 *   "Indole = natural; the rest are lab-made" mnemonic is not used, the natural
 *   and the synthetic auxins are listed instead; cytokinin is not called
 *   basic; "Gibberella fujikuroi" is used as the chapter prints it (now often
 *   Fusarium fujikuroi);
 * - a rosette plant that fails to bolt is not given as a gibberellin deficiency
 *   without the word genetic; "2,4-D is the most frequently tested herbicide",
 *   "the single most repeated concept" and similar superlatives are dropped;
 * - photoperiodism: SDP and LDP are said to flower when the day is shorter or
 *   longer than the plant's own critical length (the chapter's "only when" is
 *   true for the plants that need the signal, so the points say a long night
 *   brings an SDP to flower and a short night an LDP); the example lists keep
 *   to spinach, radish, lettuce and Hyoscyamus niger for LDP, since wheat,
 *   sugar beet and barley appear in the chapter under both flowering needs and
 *   varieties differ; Dahlia and wild kidney bean are left out (not NCERT); day
 *   length is not called a signal that "never lies"; "if a question mentions
 *   cold or winter it is vernalisation, full stop" is not repeated; vernalisation
 *   is said to be reversed by heat given soon after the cold; the claim of
 *   improved cold and disease resistance is not used; a defoliated plant "cannot
 *   respond to the photoperiod" (the book's "cannot flower under any
 *   photoperiod" ignores day-neutral plants); the day-neutral plants flower in
 *   essentially any photoperiod, not "all";
 * - dormancy: the ABA to GA balance is described as the chapter's account of the
 *   switch (GA converts a dormant seed to an active one, ABA maintains dormancy),
 *   not as a rule that fixes every case; the ABI-proteins sentence is not used;
 *   afterripening is given as the loss of dormancy in dry storage, with the
 *   book's falling ABA and rising GA to ABA ratio named as the book's
 *   explanation; "seasonal dormancy", the hot-water soaking as a scarification
 *   and the Lathyrus example are not used (Canavalia stands for the hard coat);
 * - phytochrome: Pr, Pfr, their wavelengths, the reversibility and the canopy
 *   are used; the sentence that Pfr promotes flowering in long-day plants and
 *   inhibits it in short-day plants is not used, nor is dark reversion given as
 *   the plant's night-length timer; under a canopy it is the low Pfr to Pr ratio
 *   that triggers elongation, as the chapter says;
 * - nastic movements: the table's "Tropism: slow, growth-based" is not used;
 *   a tropism's direction is set by the stimulus, a nastic movement's is not,
 *   and the point does not say that seismonasty has no circadian rhythm, only
 *   that touch (an electrical signal) triggers it and that it takes 1 to 2
 *   seconds; the speculative functions of sleep movements are given as the
 *   book's "may";
 * - What NEET Actually Asks: the shares are the book's estimate from past
 *   papers, not official figures, with no years and no counts; the statement
 *   that one idea or one hormone "decides more marks" is not repeated.
 *
 * Markup is the chapter's own: <i> for scientific names (the whole binomial in
 * one <i>) and for variables (L, W, r, t, e), <sub> and <sup>, <frac> for a
 * fraction, no em dash. A value is kept with its unit, and a range with an en
 * dash. In the growth-rate formulas W1 is the initial and W2 the final size,
 * as the chapter prints them; in the exponential law W0 is the initial and W1
 * the final size.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Growth Phases & Differentiation ──
  // pp. 766–767
  {
    topic: 0,
    kind: 'remember',
    q: 'What is growth in a plant, and why is plant growth called open, indeterminate, intrinsic and localized?',
    a: 'Growth is a permanent, irreversible increase in the size of an organ, a part or even a single cell, riding on metabolism at the expense of energy. A balloon that gets bigger and shrinks when the air is let out has not grown. Plants keep small pockets of dividing cells, the meristems, at the tips of roots and shoots and in rings inside the stem. So plant growth is open (it can keep going), indeterminate (there is no fixed final size), intrinsic (driven from within) and localized (restricted to the meristems). Development is growth plus differentiation, every change from seed germination to senescence',
    why: 'Indeterminate is the general rule, not a law: leaves, flowers and fruits have determinate growth and stop at a set size.',
    say: null,
  },
  // pp. 768–770, 774
  {
    topic: 0,
    kind: 'remember',
    q: 'In what order does a cell go through its life, and what do the three zones of a root tip show?',
    a: 'Cell division, then enlargement, then differentiation, then maturation, then senescence. A cell cannot specialise before it exists, and cannot age before it has matured. Walking back from the root tip you pass the meristematic zone (small cells, dense protoplasm, thin primary walls, dividing constantly), the elongation zone (cells enlarge and vacuolate; most visible lengthening happens here) and the maturation zone (cells reach final size, modify their walls and differentiate). Distance from the tip is a timeline of the cell’s life. Growth needs water, oxygen, nutrients and an optimum temperature',
    why: 'NEET scrambles the chain, usually by swapping differentiation and maturation or by putting senescence too early.',
    say: 'order → Di-El-Di-Ma-Se (Division, Elongation, Differentiation, Maturation, Senescence).',
  },
  // pp. 768, 770–771, 774
  {
    topic: 0,
    kind: 'mixup',
    q: 'Differentiation, dedifferentiation or redifferentiation: which direction is each?',
    a: 'Differentiation: a meristem-derived cell commits to a function by changing its wall and protoplasm; a tracheary element loses its protoplasm and builds a strong lignified secondary wall. Dedifferentiation: a living, mature cell that had stopped dividing regains the capacity to divide, as mature parenchyma between vascular bundles forms the interfascicular cambium, and mature cells form the cork cambium (phellogen). Redifferentiation: the products of those meristems divide, then again lose the capacity to divide and mature into secondary xylem, secondary phloem, cork (phellem) and secondary cortex (phelloderm). The cambium is born by dedifferentiation and yields tissues by redifferentiation',
    why: 'A tracheary element is a product of differentiation even though it ends up dead, because of the permanent structural change it undergoes.',
    say: 'direction → DE = Division Enabled; RE = Retired (division ends) again.',
  },
  // pp. 767, 770, 772, 774
  {
    topic: 0,
    kind: 'mistake',
    q: 'Two leaves add the same length: did they grow equally, and what separates AGR from RGR?',
    a: 'Not relative to their size. The absolute growth rate is <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den><i>t</i><sub>2</sub> − <i>t</i><sub>1</sub></den></frac>, the total increase per unit time. The relative growth rate in the chapter’s ratio form is <frac><num><i>W</i><sub>2</sub> − <i>W</i><sub>1</sub></num><den><i>W</i><sub>1</sub> (<i>t</i><sub>2</sub> − <i>t</i><sub>1</sub>)</den></frac> × 100%, the increase per unit initial size, here the average over the interval. Leaf P grows from 4 cm to 8 cm and leaf Q from 40 cm to 44 cm: both AGR = 4, but RGR = <frac><num>4</num><den>4</den></frac> × 100 = 100% for P and <frac><num>4</num><den>40</den></frac> × 100 = 10% for Q. A bamboo internode of 3.0 cm that reaches 11.0 cm in 4 days has AGR = <frac><num>8.0</num><den>4</den></frac> = 2.0 cm day<sup>−1</sup> and RGR = <frac><num>8.0</num><den>3.0 × 4</den></frac> × 100 ≈ 66.7% per day. The exact relative rate is <i>r</i> in <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rt</i></sup>, the efficiency index',
    why: 'With equal AGR, the organ that starts smaller always has the higher RGR, so you can decide before touching a calculator.',
    say: null,
  },
  // pp. 767–769, 772–773
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A stem says only one daughter cell keeps dividing: which growth pattern and which graph?',
    a: 'Count the daughters that keep dividing. Only one, the other matures: the dividing population stays constant, so size rises by a fixed amount each cycle, arithmetic growth, <i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>, and the graph is a straight line. A root 6 cm long that elongates 1.5 cm each day for 5 days is 6 + 1.5 × 5 = 13.5 cm. Both daughters: the dividing population doubles each cycle, geometric (exponential) growth, <i>W</i><sub>1</sub> = <i>W</i><sub>0</sub><i>e</i><sup><i>rt</i></sup>, with <i>e</i> ≈ 2.718. Resources run short, so over a whole life the curve flattens into the S-shaped sigmoid with a lag phase, a log phase, a phase of diminishing growth and a stationary phase',
    why: 'Arithmetic growth is linear, never sigmoid: the wrong option pairs the right pattern with the wrong graph.',
    say: null,
  },

  // ── Topic 02 · Plant Growth Regulators ──
  // pp. 775–778, 782
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the five plant growth regulators chemically, and which are promoters and which inhibitors?',
    a: 'Plant growth regulators work in trace amounts and have no common formula. Natural auxins, IAA and IBA, are indole compounds; the synthetic ones are NAA, 2,4-D and 2,4,5-T. Gibberellins are terpenes, the most studied being GA<sub>3</sub>, and are acidic. Cytokinins are adenine (purine) derivatives: natural zeatin from maize kernels and coconut milk, synthetic kinetin, isolated by Miller and Skoog from autoclaved herring-sperm DNA. Abscisic acid is a carotenoid derivative and acidic. Ethylene, C<sub>2</sub>H<sub>4</sub>, is a gas made from the amino acid methionine and supplied as ethephon. The promoters are auxins, gibberellins and cytokinins; the inhibitors are ABA, and ethylene in its inhibitory roles',
    why: 'IAA and IBA are the natural pair that examiners list as synthetic; NAA, 2,4-D and 2,4,5-T are the synthetic ones.',
    say: 'promoters → A-G-C go (Auxin, Gibberellin, Cytokinin).',
  },
  // pp. 776–778
  {
    topic: 1,
    kind: 'remember',
    q: 'What does each of the five regulators do?',
    a: 'Auxin: cell elongation, apical dominance, rooting of stem cuttings, prevents abscission of young leaves and fruits, parthenocarpy (dilute IAA or IBA in tomato), xylem differentiation, phototropism; 2,4-D is a weedicide against broad-leaved dicots. Gibberellin: internode elongation and bolting, converts genetic dwarfs to tall, breaks seed and bud dormancy, induces α-amylase in germinating cereal grains; larger grape stalks and fruit, more sugarcane. Cytokinin: cell division, overcomes apical dominance, delays leaf senescence (the Richmond–Lang effect). Ethylene: fruit ripening, senescence and abscission, breaks dormancy, root hairs, pineapple flowering, female flowers in cucurbits, fruit thinning. ABA: dormancy and stomatal closure under water stress, the antagonist of gibberellin',
    why: 'Ethylene is the rule-breaker: it ripens fruit and flowers pineapple yet drives senescence and abscission, so it is not a pure inhibitor.',
    say: 'inhibitors → ABA & Ethylene halt.',
  },
  // pp. 778–779, 781
  {
    topic: 1,
    kind: 'mixup',
    q: 'Which callus ratio gives roots and which gives shoots?',
    a: 'In a mass of undifferentiated cells, a high auxin to cytokinin ratio favours root differentiation, a high cytokinin to auxin ratio favours shoot differentiation, and a balanced ratio keeps the callus dividing without organising. The two hormones act antagonistically on the same programme, so the cell reads their relative levels. A callus on a cytokinin to auxin ratio of 20 ∶ 1 forms shoots. Read the ratio the question states, in the order it states it: 2 ∶ 1 of auxin to cytokinin is not the same as 1 ∶ 2',
    why: 'Roots with auxin-high, shoots with cytokinin-high: reversing the pair is the usual lost mark.',
    say: null,
  },
  // pp. 778, 781, 812
  {
    topic: 1,
    kind: 'mistake',
    q: 'Does abscisic acid cause abscission?',
    a: 'Not as its headline job, despite the name. ABA’s headline roles are dormancy and stomatal closure. Abscission of leaves and flowers is the ethylene job in the exam, and ethylene also promotes senescence; auxin prevents the abscission of young leaves and fruits but promotes the fall of older ones. Gibberellin, not ABA, breaks seed and bud dormancy, and ABA enforces it',
    why: 'The name suggests abscission; the hormone to quote for it is ethylene.',
    say: null,
  },
  // pp. 779–780, 782
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you pick the right hormone fast?',
    a: 'Run a two-second category check on the clue: growth and elongation points to a promoter (auxin, gibberellin, cytokinin), stopping, stress or ageing to an inhibitor (ABA, ethylene). That removes two or three options before you read them. Then match the job: parthenocarpy in tomato is auxin (dilute IAA or IBA), ripening of stored mangoes is ethylene (ethephon), breaking the dormancy of a freshly harvested seed is gibberellin. A gaseous hormone made from methionine is ethylene alone. Bioassays: auxin by the <i>Avena</i> coleoptile curvature test, gibberellin by dwarf pea or dwarf corn elongation, cytokinin by the cell-division or callus test',
    why: 'The category check only narrows the field: ethylene is a promoter in ripening and an inhibitor in senescence, so state the role, not just the label.',
    say: null,
  },

  // ── Topic 03 · Photoperiodism & Vernalisation ──
  // pp. 784–785
  {
    topic: 2,
    kind: 'remember',
    q: 'What are short-day, long-day and day-neutral plants, and why is each called what it is?',
    a: 'Photoperiodism is the response of plants to the relative lengths of the light and dark periods, particularly in the induction of flowering. A short-day plant flowers when the day is shorter than its own critical day length, which means the continuous dark period exceeds a critical minimum, so it is a long-night plant: chrysanthemum, <i>Xanthium</i>, rice, soybean, Maryland Mammoth tobacco. A long-day plant flowers when the day is longer than its critical length, a short-night plant: spinach, radish, lettuce, <i>Hyoscyamus niger</i>. A day-neutral plant flowers in essentially any photoperiod: tomato, cucumber, sunflower, cotton, maize',
    why: 'The dark period is what the plant measures, so translate short-day into long-night and long-day into short-night before answering.',
    say: 'SDP = Sleeps in Darkness Plenty (needs long nights).',
  },
  // pp. 784, 787–788, 790
  {
    topic: 2,
    kind: 'remember',
    q: 'What is vernalisation, and what is devernalisation?',
    a: 'Vernalisation is the dependence of flowering on a period of low temperature: the promotion of flowering by cold. Winter varieties of wheat, rye and barley, sown in autumn, stay vegetative through winter and flower in summer; spring-sown, they refuse to flower unless given an artificial cold treatment. Biennials such as sugar beet, cabbage and carrot need it too. Cold is perceived chiefly at the shoot apical meristem and other dividing cells, and in cereals the embryo of the germinating seed can be vernalised. It is timing insurance: it stops flowering too early, in mid-winter. Devernalisation is the cancelling of the effect by a higher temperature soon after the cold',
    why: 'Vernalisation promotes flowering through cold; it is not an inhibition by cold.',
    say: 'clocks → photoperiod = light clock, vernalisation = cold clock.',
  },
  // pp. 784–785, 789
  {
    topic: 2,
    kind: 'mixup',
    q: 'Which organ perceives the photoperiod, and where do the flowers form?',
    a: 'The leaf perceives it, through its pigment phytochrome, and even one leaf under the right photoperiod is enough. Under an inductive photoperiod the leaf makes the hypothesised flowering signal, florigen, which is transported to the shoot apical meristem, where it converts the vegetative meristem into a floral one. So the apex is where flowers form, not where light is perceived. A plant with all its leaves removed cannot respond to the photoperiod, because step one is impossible and no florigen is made',
    why: 'In an assertion-reason item, “the shoot apex perceives the photoperiod” is the false reason.',
    say: null,
  },
  // pp. 783–785, 788
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does a short-day plant need few hours of light?',
    a: 'No. “Short” and “long” are relative to each plant’s own critical day length, not absolute hours, and it is the dark period that counts. Apply the rule: flowering needs the day shorter than critical, so short-day (long-night); longer than critical, long-day (short-night); irrelevant, day-neutral. Two species with the same 13-hour critical day length can behave oppositely: at 14 hours only the long-day plant flowers, at 12 hours only the short-day plant',
    why: 'A so-called short-day plant can flower under a longer day than some long-day plants need.',
    say: null,
  },
  // pp. 785–786, 788–789
  {
    topic: 2,
    kind: 'shortcut',
    q: 'How do you decide whether a plant flowers under a given light and dark cycle?',
    a: 'Ignore the light hours first. Ask whether the continuous dark period was long enough (short-day plant) or short enough (long-day plant), then check for a night break: a single flash flips the answer. In the night-break experiment, a short-day plant given 8 h light and 16 h dark flowers; given 16 h light and 8 h dark it does not; given 8 h light, then dark broken at the 16 h mark by a 1 h flash, it does not flower, because the flash resets the measurement of continuous darkness. The long-day plant does the opposite in the same three cycles: it does not flower, then flowers, then flowers. The continuous dark period, not the total light, is decisive',
    why: 'A night break prevents flowering in a short-day plant and can induce it in a long-day plant; a day-neutral plant ignores it.',
    say: null,
  },

  // ── Additional A · Quantitative Growth Analysis: Solving for Time and Comparing RGR ──
  // pp. 791–793
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you solve growth equations for time, and what is the doubling time?',
    a: 'Arithmetic growth: from <i>L</i><sub><i>t</i></sub> = <i>L</i><sub>0</sub> + <i>rt</i>, <i>t</i> = <frac><num><i>L</i><sub><i>t</i></sub> − <i>L</i><sub>0</sub></num><den><i>r</i></den></frac>; a bamboo shoot of 5.0 cm elongating 1.8 cm day<sup>−1</sup> reaches 50.0 cm in <frac><num>45.0</num><den>1.8</den></frac> = 25 days. Exponential growth: setting <i>W</i><sub>1</sub> = 2<i>W</i><sub>0</sub> gives the doubling time <i>t</i><sub>d</sub> = <frac><num>ln 2</num><den><i>r</i></den></frac> = <frac><num>0.693</num><den><i>r</i></den></frac>, which depends only on <i>r</i>, not on <i>W</i><sub>0</sub>; and the time to a target is <i>t</i> = <frac><num>1</num><den><i>r</i></den></frac> ln(<frac><num><i>W</i><sub>1</sub></num><den><i>W</i><sub>0</sub></den></frac>). With <i>r</i> = 0.1 day<sup>−1</sup>, the mass doubles in <frac><num>0.693</num><den>0.1</den></frac> ≈ 7 days and becomes 10 times in 10 × 2.303 ≈ 23 days',
    why: 'For <i>r</i> = 0.05 day<sup>−1</sup>, a rise from 100 g to 800 g is 3 doublings, 3 × 14 = 42 days; the formula gives 41.58.',
    say: null,
  },
  // pp. 792–794
  {
    topic: 3,
    kind: 'remember',
    q: 'Which form of relative growth rate do you use, and what are the units of r?',
    a: 'The logarithmic form <frac><num>ln <i>W</i><sub>1</sub> − ln <i>W</i><sub>0</sub></num><den>Δ<i>t</i></den></frac> is the exact relative rate <i>r</i> for exponential growth. The ratio form <frac><num><i>W</i><sub>1</sub> − <i>W</i><sub>0</sub></num><den><i>W</i><sub>0</sub> Δ<i>t</i></den></frac> × 100 used in the chapter is the average relative rate over the interval, and agrees with the logarithmic form only approximately, when the change is small. For two measurements use the ratio form; use ln when the problem gives an exponential law or asks for <i>r</i>, a doubling time or a target time. Leaf X, 2.0 cm to 5.0 cm in 5 days, has <frac><num>3.0</num><den>2.0 × 5</den></frac> × 100 = 30% per 5 days, which is 6% day<sup>−1</sup>; leaf Y, 8.0 cm to 11.0 cm, has 7.5% per 5 days, which is 1.5% day<sup>−1</sup>: four times slower relative to size in the ratio form (the logarithmic form gives a smaller gap, but the same ranking). The <i>r</i> of arithmetic growth is in cm day<sup>−1</sup>; the <i>r</i> of exponential growth is in time<sup>−1</sup>, so that <i>rt</i> is dimensionless',
    why: 'For <i>W</i> = 5<i>e</i><sup>0.1<i>t</i></sup> g the RGR is 0.1 × 100 = 10% per day, constant.',
    say: null,
  },

  // ── Additional B · Seed Dormancy: Types, Hormonal Mechanism, and Breaking Methods ──
  // pp. 794–795
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the types of seed dormancy, and which method breaks each?',
    a: 'Classify by the cause, not the hormone. Physical: a hard, impermeable seed coat blocks water and gas, as in <i>Canavalia</i> and some chickpea; broken by scarification, mechanical (scrape or nick the coat) or chemical (concentrated H<sub>2</sub>SO<sub>4</sub>). Physiological: internal inhibitors, mainly ABA, prevent germination even with water and oxygen, as in many temperate seeds that need winter cold; broken by stratification, cold moist conditions for weeks (apple and pear), or by GA<sub>3</sub> to overcome the ABA block. Morphological: the embryo is underdeveloped at seed shed, as in <i>Ginkgo</i> and some orchids. Combined: both physical and physiological barriers. Some seeds, such as lettuce, need red light (the Pfr form of phytochrome)',
    why: 'Physical dormancy is a barrier problem; physiological dormancy is a hormone-balance problem.',
    say: null,
  },
  // pp. 795–797
  {
    topic: 4,
    kind: 'remember',
    q: 'How do gibberellin and abscisic acid switch a cereal seed from dormant to germinating?',
    a: 'The dry seed holds high ABA, which maintains dormancy and suppresses metabolism. On water uptake ABA falls and, if conditions are favourable, gibberellin synthesis starts. In a cereal the embryo makes GA, which diffuses to the aleurone layer and triggers transcription of the genes for α-amylase and other hydrolytic enzymes. α-Amylase breaks the stored starch into sugars, the embryo is fed and the radicle protrudes. ABA opposes this by blocking GA signalling at the aleurone layer, so α-amylase is not made. GA converts the seed from dormant to active; ABA maintains or re-establishes dormancy. GA<sub>3</sub> is used commercially to speed up malting of barley in brewing',
    why: 'Afterripening is the loss of dormancy during dry storage; the book explains it by ABA falling and the GA to ABA ratio rising.',
    say: null,
  },

  // ── Additional C · PGR Signal Transduction: How Each Regulator Acts ──
  // pp. 798–799
  {
    topic: 5,
    kind: 'remember',
    q: 'What is the sequence of gibberellin action in a germinating cereal grain?',
    a: 'The embryo of the imbibed grain releases GA<sub>3</sub> into the endosperm; it binds to GA receptors in the aleurone layer cells; this activates transcription of the genes for α-amylase and other hydrolytic enzymes; α-amylase is secreted into the starchy endosperm; starch becomes maltose and then glucose; glucose fuels the embryo and the radicle protrudes. As an ordering item: embryo releases GA<sub>3</sub>, GA<sub>3</sub> binds the aleurone receptors, α-amylase breaks starch, sugars nourish the embryo, the radicle protrudes. The tissue is the aleurone layer and the enzyme is α-amylase',
    why: 'Gibberellin is the hormone that induces α-amylase in the aleurone layer; ABA blocks this step and keeps the seed dormant.',
    say: null,
  },
  // pp. 799–800
  {
    topic: 5,
    kind: 'remember',
    q: 'How does abscisic acid close the stomata in a drought?',
    a: 'Drought stress sends an ABA signal from the roots to the leaves, and ABA accumulates in the guard cells. It binds to ABA receptors in the guard cells. Anion channels open, so Cl<sup>−</sup> and malate<sup>2−</sup> leave, and the H<sup>+</sup>-ATPase is inhibited, so the membrane depolarises. K<sup>+</sup> channels open and K<sup>+</sup> leaves. With the ions gone, the water potential inside the guard cells rises (becomes less negative) and is higher than outside, so water leaves by osmosis. The guard cells become flaccid and the stomatal pore closes',
    why: 'With ABA synthesis blocked in a drought-stressed plant, the stomata stay open and water is lost faster.',
    say: null,
  },

  // ── Additional D · Phytochrome: The Pr/Pfr Mechanism and Photoperiodic Timekeeping ──
  // pp. 801–802
  {
    topic: 6,
    kind: 'remember',
    q: 'What are the two forms of phytochrome, and which one is active?',
    a: 'Pr (Phytochrome Red) is the inactive form; it absorbs red light (maximum about 660 nm) and converts to Pfr. Pfr (Phytochrome Far-red) is the biologically active, signalling form; it absorbs far-red light (maximum about 730 nm) and reverts to Pr, and it also reverts slowly in darkness (dark reversion). Sunlight has more red than far-red, so daylight shifts the balance toward Pfr. Pfr triggers germination in some species (lettuce, <i>Arabidopsis</i>), de-etiolation (chlorophyll synthesis, chloroplast development, inhibition of stem elongation, opening of cotyledons) and flowering responses. Pr maintains seed dormancy in light-sensitive seeds; where Pfr is absent, as in darkness, the seedling stays etiolated (pale and elongated)',
    why: 'Under a leaf canopy it is the low Pfr to Pr ratio, not Pfr, that triggers the stem and petiole elongation of shade avoidance.',
    say: null,
  },
  // pp. 801–803
  {
    topic: 6,
    kind: 'remember',
    q: 'What does red and far-red light do to lettuce seeds, and why does the last treatment win?',
    a: 'Red light gives high Pfr and high germination; far-red gives low Pfr (mostly Pr) and low germination; red then far-red gives mostly Pr and low germination, since the far-red converts Pfr back; far-red then red gives high Pfr and high germination. The final light treatment sets the Pfr to Pr ratio, and so decides the outcome: Pfr promotes germination, Pr maintains dormancy. A seed under a dense canopy germinates poorly because the canopy absorbs red and transmits far-red, giving a low red to far-red ratio (about 0.1) that keeps phytochrome as Pr; open sky has a high ratio (about 1.1 to 1.2) and gives Pfr',
    why: 'The seed reads the quality of the light, not just the presence of light.',
    say: null,
  },

  // ── Additional E · Nastic Movements: The Unexplored Half of Plant Mobility ──
  // pp. 804–805
  {
    topic: 7,
    kind: 'remember',
    q: 'How do you tell a tropism from a nastic movement?',
    a: 'In a tropism the response is toward or away from the stimulus, so the direction of the stimulus sets the direction of the response: phototropism, gravitropism, hydrotropism, thigmotropism. A nastic movement is a response that occurs regardless of the direction from which the stimulus arrives: nyctinasty, seismonasty, thermonasty, photonasty. Tulip flowers open in warmth and close in cold, a thermonasty, because the direction of the temperature change does not set the direction of the movement. Some flowers (morning glory, poppy) open in light and close in darkness, a photonasty. A coleoptile bending toward light is a tropism; <i>Oxalis</i> leaves open at noon and closed at midnight from any direction of light, a nastic movement',
    why: 'If the response direction depends on where the stimulus comes from, it is a tropism.',
    say: null,
  },
  // pp. 805–807
  {
    topic: 7,
    kind: 'remember',
    q: 'What drives nyctinasty and seismonasty, and how do they differ?',
    a: 'Nyctinasty, the sleep movement of mimosa, beans and <i>Oxalis</i>, raises the leaves at dawn and lowers them at dusk, in a rhythm that continues in constant darkness, because the circadian clock drives it and light only entrains the clock. Water moves between the flexor and extensor cells of the pulvinus, the joint-like swelling at the leaf base, changing turgor. Seismonasty is the touch response of <i>Mimosa pudica</i>: touch generates an electrical signal (an action potential) that spreads to other leaves in a wave; at the pulvinus K<sup>+</sup> and Cl<sup>−</sup> leave the motor cells in the lower half of the pulvinus, water follows by osmosis, the cells lose turgor and the leaf droops and the leaflets fold in 1 to 2 seconds. Both are turgor changes at the pulvinus, not growth',
    why: 'A plant that keeps its daily leaf movements for 48 hours in constant darkness shows a clock-driven movement, nyctinasty.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 808–812
  {
    topic: 8,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and which question shapes return?',
    a: 'The book’s estimate from past papers, not official figures: Plant Growth Regulators carry the heaviest emphasis, with ethylene and the auxin to cytokinin ratio favourites; Photoperiodism & Vernalisation is moderate, a recurring fact or night-break item; Growth Phases & Differentiation is lighter, but its questions are often high-difficulty assertion-reason items. Treat this as a guide to what to revise first, not a count of past questions. Six shapes return: hormone to function (promoter or inhibitor first, then which one); the auxin to cytokinin ratio in a callus; statement counting (judge each statement alone); match the column (start from unique identifiers such as zeatin or ethephon); assertion-reason (judge A and R separately); and photoperiodic classification with the night break',
    why: 'Night-break check: Maryland Mammoth tobacco, a short-day plant with a critical dark period of 10 hours, does not flower on 16 hours light and 8 hours dark, since 8 is below 10.',
    say: null,
  },
  // pp. 812–813
  {
    topic: 8,
    kind: 'mistake',
    q: 'Which wrong options keep recurring in this chapter?',
    a: 'The book’s estimate from past papers, not official figures. Auxin causes fruit ripening: ethylene does. Natural against synthetic auxin: IBA is natural, 2,4-D synthetic. Cytokinin promotes apical dominance: it overcomes it, auxin enforces it. ABA causes abscission: ethylene drives abscission, and ABA’s headline roles are dormancy and stomatal closure. Short-day means few hours of light: the label is relative to the plant’s own critical value, and the dark period matters. The shoot apex perceives photoperiod: leaves perceive it, the apex responds. Vernalisation is inhibition by cold: it is promotion of flowering by cold. Day-neutral plants do not flower: they flower in essentially any photoperiod. Arithmetic growth is sigmoid: it is a straight line, and geometric growth is exponential and flattens into the S-shaped sigmoid. Ethylene is purely an inhibitor: it promotes ripening, root hairs and pineapple flowering',
    why: 'In an assertion-reason item an R that names the wrong site, hormone or direction is false, however familiar it sounds.',
    say: null,
  },
];
