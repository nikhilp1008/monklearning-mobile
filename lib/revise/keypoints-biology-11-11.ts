/**
 * KEY POINTS for Biology Class 11, Chapter 11 (Photosynthesis in Higher Plants).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to F are 4 to 9;
 * G (the Summary Cheat Sheet) is 10 and has no points; H (What NEET Actually
 * Asks) is 11. No point refers to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key
 * definitions and Cheat sheet. Common mistakes: its Common student pitfalls.
 * Exam shortcuts: its Pro-Tip, with a worked example or practice answer. `say`:
 * the cheat sheet's first two memory aids, word for word, in the Chapter 1
 * form: no quotation marks and no bold. Each of Topics 01 to 04 prints three or
 * four aids and the first two are used; Topic 01's second aid is the book's
 * own colour line for the four chromatogram bands (the table beside it gives
 * "bright or blue-green" for chlorophyll a; the point's answer uses the table).
 * Additional topics: the addenda's counting rules, shuttles, pathways,
 * definitions and worked examples; H: its distribution, archetypes and traps.
 *
 * Where the book's claim is looser or wrong, the point is true, and follows
 * the chapter text as it stands, never repeating the error:
 * - the Calvin cycle's overall equation is not written out as the book prints
 *   it (6 CO2 + 18 ATP + 12 NADPH → glucose + 18 ADP + 12 NADP+, unbalanced
 *   for H and O); the points give the counts (3 ATP and 2 NADPH per CO2, 18
 *   and 12 per glucose, 6 turns) and, in Additional A, the form with 12 H+
 *   and 6 H2O, balanced for C, H and O, the ATP side being schematic;
 * - CAM is not called "a C4 variant": it is a separate, related pathway that
 *   separates the two fixation steps in time, not space (night and day);
 * - photorespiration is "suppressed" or "negligible" in C4 plants, never "absent"
 *   or "does not occur", and C4 plants still run the Calvin cycle in the
 *   bundle sheath; the book's Topic 04 practice and cheat sheet that say
 *   "absent" are not repeated;
 * - photorespiration is described as yielding no sugar and making no ATP or
 *   NADPH (no synthesis of any of them, with carbon lost as CO2), not as
 *   something that "uses nothing";
 * - C4 plants are said to do better "in hot, bright, water-limited" conditions
 *   (and no better in cool, CO2-rich ones), not to "out-yield C3" without
 *   conditions, and no point calls C4 quantum yield "higher";
 * - the aspartate shuttle is not tied to "dicots" and PEP-CK is not given a
 *   plant group: three decarboxylation types exist (NADP-ME, NAD-ME, PEP-CK),
 *   and only the malate (NADP-malic enzyme) shuttle is used in the points, with
 *   maize, sugarcane and sorghum;
 * - the Hill reaction is given as: isolated chloroplasts, light and an artificial
 *   electron acceptor evolve O2 without the Calvin cycle, so the light reaction
 *   (water oxidation and electron transport) is a property of the thylakoid; it
 *   is not presented as the proof that O2 comes from water, and no point says
 *   that no O2 would appear otherwise;
 * - the compensation point is net CO2 exchange of zero; the book's two
 *   definitions (respiration only; respiration plus photorespiration) are
 *   joined by saying the C3 leaf's loss includes photorespiration;
 * - unsupported lines are left out: "doubles every 10 °C", "C3 cereals dominate
 *   temperate regions", Portulaca switching to CAM, the 20 to 30 % carbon loss
 *   is given as the book's figure for a C3 leaf in bright light with low CO2,
 *   the 10 to 20 times bundle-sheath CO2 is not used, and the light saturation
 *   values (500 to 800 against over 1000) are not quoted;
 * - the book's "the only pigment that drives the light reaction" is worded as
 *   the chief pigment at the reaction centre, the accessory pigments funnelling
 *   energy to it; Engelmann's result is a chlorophyll absorption peak, so the
 *   first action spectrum is credited to him without a claim about chlorophyll a;
 * - superlatives and frequencies ("the most punished", "the single most
 *   common", "reliably", "almost every year") are not repeated; the exam
 *   shares in H are the book's estimate from past papers, not official
 *   figures, and the "questions per paper" counts are not used; no years.
 *
 * Markup is the chapter's own: <i> for scientific names and the variable n,
 * <sub> and <sup> in formulas, <frac> for a fraction (the CO2 over O2 ratio),
 * no em dash. A value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Foundations, Early Experiments & Photosynthetic Pigments ──
  // pp. 647–649, 651
  {
    topic: 0,
    kind: 'remember',
    q: 'Who did what: Priestley, Ingenhousz, Sachs, Engelmann and van Niel?',
    a: 'Priestley: a mint sprig restored air in which a candle had burnt out, so plants restore what breathing and burning remove. Ingenhousz: this works only in sunlight and only in the green parts, shown by oxygen bubbles around a submerged plant. Sachs: the green parts make glucose, stored as starch in the chloroplasts, which is the basis of the iodine starch test. Engelmann: the first action spectrum, from the alga <i>Cladophora</i>, a prism and aerobic bacteria that gathered in the blue and red regions. Van Niel: studying sulphur bacteria, which use H<sub>2</sub>S and release sulphur, he proposed that the O<sub>2</sub> of green plants comes from water',
    why: 'Pin Engelmann (action spectrum) and van Niel (O<sub>2</sub> from water) first; the other three then sort by elimination.',
    say: 'Pigs In Sachs’s Engine, Never CO<sub>2</sub>: Priestley, Ingenhousz, Sachs, Engelmann, Niel (in order); Never CO<sub>2</sub> = O<sub>2</sub> comes from water.',
  },
  // pp. 645–647, 651
  {
    topic: 0,
    kind: 'remember',
    q: 'In what order do the leaf pigments run on a chromatogram, and what do the accessory pigments do?',
    a: 'Paper chromatography resolves four bands, because the pigments travel at different rates by solubility and adsorption: chlorophyll a (bright or blue-green), chlorophyll b (yellow-green), xanthophylls (yellow) and carotenoids (yellow to yellow-orange). Chlorophyll a is the chief pigment, the one at the reaction centre of both photosystems. The accessory pigments, chlorophyll b, xanthophylls and carotenoids, widen the range of wavelengths the plant can harvest, funnel the energy to chlorophyll a and protect it from photo-oxidation',
    why: 'Chlorophyll a absorbs most in the blue (about 430 nm) and red (about 660 nm) regions and least in green.',
    say: 'a-b-X-C → blue-green → yellow-green → yellow → yellow-orange: chromatogram colours of chl a, chl b, Xanthophyll, Carotenoid.',
  },
  // pp. 645–646, 651
  {
    topic: 0,
    kind: 'mixup',
    q: 'Absorption spectrum or action spectrum: which graph is which, and why are leaves green?',
    a: 'The absorption spectrum plots how much light a pigment absorbs at each wavelength; the action spectrum plots how fast photosynthesis itself runs at each wavelength. They overlap closely, since both peak in blue and red, and that agreement is what points to chlorophyll a as the main pigment, but they are different graphs. Leaves look green because green is the light least absorbed and so reflected: chlorophyll reflects green and absorbs blue and red, not the reverse',
    why: 'Absorption is what the pigment soaks up; action is how fast photosynthesis runs.',
    say: null,
  },
  // pp. 644, 649, 651
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does the O<sub>2</sub> a plant releases come from CO<sub>2</sub>, and how does the overall equation show it?',
    a: 'No, it comes from water. The equation is 6 CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O: 12 water molecules go in and 6 come out, written that way because the released O<sub>2</sub> originates from the water. The equation is balanced, and it is a net summary that hides dozens of real steps. Van Niel generalised photosynthesis as a light-driven splitting of a hydrogen donor, 2 H<sub>2</sub>A + CO<sub>2</sub> → 2 A + CH<sub>2</sub>O + H<sub>2</sub>O, and in green plants the donor is water',
    why: 'Green and purple sulphur bacteria use H<sub>2</sub>S instead of water, so they liberate sulphur, not oxygen.',
    say: null,
  },
  // pp. 643–644, 649, 651
  {
    topic: 0,
    kind: 'shortcut',
    q: 'What does the half-leaf experiment prove, and how do you make a scientist-matching question quick?',
    a: 'Cover part of a leaf so light cannot reach it, or seal part in a tube with KOH to absorb CO<sub>2</sub>, leave it in sunlight and test with iodine: only the part that received light (or CO<sub>2</sub>) turns blue-black, because only it made starch, and a variegated leaf shows chlorophyll is needed too. So light, CO<sub>2</sub> and chlorophyll are each shown to be essential; water is the fourth requirement but is not tested here. For matching, lock the two distinctive pairs first, Engelmann with the action spectrum and van Niel with water as the source of O<sub>2</sub>, and the rest follow by elimination',
    why: 'Priestley is restored air, Ingenhousz is light plus green parts, Sachs is glucose stored as starch.',
    say: null,
  },

  // ── Topic 02 · Light Reaction & Photophosphorylation ──
  // pp. 654–656, 661–662
  {
    topic: 1,
    kind: 'remember',
    q: 'Where does the light reaction happen, and what does each photosystem do?',
    a: 'On the thylakoid membranes (grana), banking energy as ATP and NADPH with O<sub>2</sub> as the by-product. Each photosystem is a light harvesting complex, hundreds of pigments acting as an antenna, plus one reaction-centre chlorophyll a. Photosystem II has P680 (absorption maximum about 680 nm) and splits water, releasing O<sub>2</sub>. Photosystem I has P700 (about 700 nm) and hands the energised electron on to NADP<sup>+</sup>, making NADPH. The electron route is water → PS II → PS I → NADP<sup>+</sup>, an open chain, hence non-cyclic',
    why: 'The Calvin cycle is not here: it runs in the stroma.',
    say: 'Water → II → I → NADP: fixes both the order and every photosystem’s job.',
  },
  // pp. 656–657
  {
    topic: 1,
    kind: 'remember',
    q: 'What are the steps of the Z-scheme, from the antenna to NADPH?',
    a: 'Photons reach the antenna of PS II and the energy is funnelled to P680, which ejects a high-energy electron to a primary acceptor. Water is split to refill it: 2 H<sub>2</sub>O → 4 H<sup>+</sup> + 4 <i>e</i><sup>−</sup> + O<sub>2</sub>, with the protons dumped inside the thylakoid lumen and the O<sub>2</sub> released. The electron slides downhill through plastoquinone, a cytochrome complex and plastocyanin, and the energy released builds ATP. Plastocyanin gives it to P700, a second photon re-excites it, and it passes via ferredoxin to NADP<sup>+</sup> reductase, which reduces NADP<sup>+</sup> to NADPH',
    why: 'Plotted on the redox scale the up-down-up path looks like a Z.',
    say: null,
  },
  // pp. 654, 658–659, 661
  {
    topic: 1,
    kind: 'mixup',
    q: 'Cyclic or non-cyclic photophosphorylation: which photosystems, and what is made?',
    a: 'Non-cyclic uses PS I and PS II, splits water, releases O<sub>2</sub>, makes NADPH and ATP, and runs mainly in the grana thylakoids. Cyclic uses PS I only: the electron leaves P700, passes through the carriers and returns to P700, in a closed loop, mainly in the stromal lamellae, with no water split, no O<sub>2</sub> and no NADPH, so ATP is its only product. The plant runs it when it has plenty of NADPH but still needs ATP. Photophosphorylation, ATP synthesis from ADP and P<sub>i</sub> using light, and the cyclic and non-cyclic distinction are credited to Arnon',
    why: 'If a question removes PS II, you are in cyclic, ATP-only territory.',
    say: 'Cyclic = Coin-only: cyclic flow makes only ATP (the coin), no NADPH, no oxygen.',
  },
  // pp. 653, 661
  {
    topic: 1,
    kind: 'mistake',
    q: 'Which photosystem splits water and which reduces NADP<sup>+</sup>?',
    a: 'PS II splits water and PS I reduces NADP<sup>+</sup>. The slip is to reverse them because PS I sounds first. In the electron’s journey PS II acts first even though it has the higher number: it sends electrons to PS I, which only receives them. Also, cyclic flow makes no oxygen, since no water is split in it, and the NADPH comes from PS I, not PS II',
    why: 'Number against order: the higher-numbered photosystem acts first.',
    say: null,
  },
  // pp. 661
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you answer “what does each photosystem do” without recalling a table?',
    a: 'Lock one anchor line and derive the rest: water → II → I → NADP<sup>+</sup>. It tells you PS II handles water and O<sub>2</sub>, PS I handles NADPH, and the flow is non-cyclic, open-ended. If a question removes PS II, the electrons can only loop around PS I, giving ATP with no NADPH and no O<sub>2</sub>',
    why: 'Remember the sites too: the light reaction on the thylakoid membrane, the Calvin cycle in the stroma.',
    say: null,
  },

  // ── Topic 03 · Chemiosmotic Hypothesis & The Calvin Cycle ──
  // pp. 666–668, 671
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the three phases of the Calvin cycle, and what does each spend?',
    a: 'Carboxylation, reduction, regeneration, in that fixed order. In carboxylation RuBisCO attaches CO<sub>2</sub> to the 5-carbon acceptor RuBP, and the unstable 6-carbon intermediate splits into two 3-PGA, the first stable product: no ATP or NADPH is spent. In reduction each 3-PGA is energised by ATP and reduced by NADPH to PGAL (triose phosphate): 2 ATP and 2 NADPH per CO<sub>2</sub>. In regeneration most of the triose phosphate is rearranged to reform RuBP, using 1 ATP per CO<sub>2</sub>. The cycle runs in the stroma',
    why: 'Only the middle phase spends NADPH.',
    say: 'Catch, Cook, Rebuild: the three Calvin phases in order.',
  },
  // pp. 663, 666–667, 670–671
  {
    topic: 2,
    kind: 'remember',
    q: 'How many ATP and NADPH does the Calvin cycle need per CO<sub>2</sub> and per glucose?',
    a: 'Per turn, one CO<sub>2</sub> fixed: 3 ATP and 2 NADPH (2 ATP and 2 NADPH in reduction, plus 1 ATP in regeneration). One glucose takes 6 turns, fixing 6 CO<sub>2</sub>, so 18 ATP and 12 NADPH. Every numeric is this pair times a number: 50 glucose need 18 × 50 = 900 ATP and 12 × 50 = 600 NADPH',
    why: 'ATP is always the larger number.',
    say: '18 before 12: ATP (18) always exceeds NADPH (12) per glucose.',
  },
  // pp. 663–666, 669–671
  {
    topic: 2,
    kind: 'mixup',
    q: 'Where do protons pile up in chemiosmosis, and what do F<sub>0</sub> and F<sub>1</sub> do?',
    a: 'H<sup>+</sup> is high in the thylakoid lumen and low in the stroma; the energy is stored in this gradient. Three things build it: water splitting on the lumen side, a hydrogen carrier (plastoquinone) ferrying H<sup>+</sup> from the stroma to the lumen as electrons move, and NADP<sup>+</sup> reduction in the stroma using up a stromal H<sup>+</sup>. The protons flow back down their gradient, lumen to stroma, only through ATP synthase: F<sub>0</sub> is the channel in the membrane and F<sub>1</sub> is the head facing the stroma that joins ADP and P<sub>i</sub> into ATP',
    why: 'Thylakoids made acidic inside (about pH 4) and put in an alkaline bath (about pH 8) in the dark still make ATP: the energy is in the gradient, not in light directly.',
    say: null,
  },
  // pp. 663, 667, 670
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does the “dark reaction” need darkness, and which is the acceptor and which the first product?',
    a: 'No. The Calvin cycle is light-independent in that it does not use photons directly; it runs in daylight but depends on the ATP and NADPH from the light reaction, so it stalls in prolonged darkness. The acceptor is RuBP (5 carbons) and the first stable product is 3-PGA (3 carbons); the reduced product is PGAL. Melvin Calvin established that PGA is the first product, and the stroma isolated from chloroplasts can fix CO<sub>2</sub> if given ATP and NADPH',
    why: 'Do not mix 3-PGA of the Calvin cycle with the OAA of the C<sub>4</sub> pathway.',
    say: null,
  },
  // pp. 667, 670–671
  {
    topic: 2,
    kind: 'shortcut',
    q: 'What is the quickest way through a Calvin numerical?',
    a: 'Convert whatever is given into CO<sub>2</sub> fixed or glucose made, then scale one anchor pair: 18 ATP and 12 NADPH per glucose, or 3 ATP and 2 NADPH per CO<sub>2</sub>. Do not count per turn under time pressure. The map Catch, Cook, Rebuild also tells you which phase spends what: carboxylation spends nothing, reduction spends ATP and NADPH, regeneration spends ATP only',
    why: 'Reversing to 12 and 18 is the classic exam error.',
    say: null,
  },

  // ── Topic 04 · C4 Pathway, Photorespiration & Factors Affecting Photosynthesis ──
  // pp. 672–675, 680
  {
    topic: 3,
    kind: 'remember',
    q: 'How does the C<sub>4</sub> (Hatch–Slack) pathway work, and which cell does what?',
    a: 'In mesophyll cells PEP carboxylase attaches CO<sub>2</sub> to the 3-carbon acceptor PEP, giving the 4-carbon OAA, the first stable product. PEP carboxylase has high affinity for CO<sub>2</sub> (as HCO<sub>3</sub><sup>−</sup>) and no oxygenase activity. OAA becomes a stable 4-carbon acid, commonly malic acid, and moves through plasmodesmata into the bundle-sheath cells, where it is decarboxylated, releasing a burst of CO<sub>2</sub> around RuBisCO for the ordinary Calvin cycle. The leftover pyruvate returns to the mesophyll and is regenerated to PEP at the cost of ATP. The diagnostic anatomy is Kranz: a wreath of bundle-sheath cells around each vein',
    why: 'Examples are maize, sugarcane and sorghum; C<sub>3</sub> plants such as rice and wheat lack Kranz anatomy.',
    say: 'PEP loads, RuBisCO reaps: mesophyll PEPcase captures CO<sub>2</sub>; bundle-sheath RuBisCO uses it.',
  },
  // pp. 672–676, 680
  {
    topic: 3,
    kind: 'remember',
    q: 'What is photorespiration, and why is it called wasteful?',
    a: 'RuBisCO cannot tell CO<sub>2</sub> from O<sub>2</sub> reliably, and the relative concentrations decide which it binds. When the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio is low (stomata closed on a hot, bright day), it acts as an oxygenase and puts O<sub>2</sub> on RuBP, giving one 3-PGA and one 2-carbon phosphoglycolate. The glycolate (hence the C<sub>2</sub> cycle) goes from the chloroplast to the peroxisome and then the mitochondrion, where CO<sub>2</sub> is released. It needs light and green cells, takes up O<sub>2</sub> and gives off CO<sub>2</sub>, and there is no synthesis of sugar, ATP or NADPH (the pathway itself uses ATP), so usable carbon is lost and the efficiency of C<sub>3</sub> photosynthesis falls',
    why: 'RuBisCO is the most abundant enzyme on Earth and does have the greater affinity for CO<sub>2</sub>; it is the ratio that tips it.',
    say: null,
  },
  // pp. 673, 675, 680
  {
    topic: 3,
    kind: 'mixup',
    q: 'What does the name C<sub>3</sub> or C<sub>4</sub> count: the acceptor or the first product?',
    a: 'The first product’s carbon count. C<sub>3</sub>: acceptor RuBP (5C), first stable product 3-PGA (3C), enzyme RuBisCO, mesophyll only. C<sub>4</sub>: acceptor PEP (3C), first stable product OAA (4C), primary enzyme PEP carboxylase, mesophyll and bundle sheath. Reversing the enzyme and the cell is the classic error: PEP carboxylase in the mesophyll, RuBisCO in the bundle sheath',
    why: 'The acceptors are 5 and 3 carbons, the products 3 and 4: the names follow the products.',
    say: '4 = OAA, 3 = PGA: C<sub>4</sub>’s first product OAA has 4 carbons; C<sub>3</sub>’s PGA has 3.',
  },
  // pp. 672–676, 680
  {
    topic: 3,
    kind: 'mistake',
    q: 'Do C<sub>4</sub> plants have no photorespiration and skip the Calvin cycle?',
    a: 'Neither. Photorespiration is suppressed or negligible in C<sub>4</sub> plants, not switched off: the bundle sheath keeps the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio around RuBisCO high, so the oxygenase reaction barely fires. And C<sub>4</sub> plants do run the Calvin cycle: RuBisCO and RuBP still operate, tucked inside the bundle sheath at high CO<sub>2</sub>. The price is extra ATP for the pump, and the gain shows mainly in hot, bright, water-limited climates; in cool, CO<sub>2</sub>-rich conditions C<sub>4</sub> has no edge',
    why: 'Photorespiration is also not “respiration in light”: it is RuBisCO’s oxygenase side reaction and makes no ATP.',
    say: null,
  },
  // pp. 676–677, 680
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you read a limiting-factor question using Blackman’s law?',
    a: 'The rate is set by the factor nearest its minimum, like a thali line moving at the speed of its slowest dish. Raise that factor and the rate climbs until another becomes limiting; raising any other factor changes nothing. So a light curve that plateaus means a non-light factor, usually CO<sub>2</sub>, has taken over. Water works indirectly: under water stress stomata close and cut the CO<sub>2</sub> supply. In the monsoon, dim cloudy skies make light the limiting factor for rice',
    why: 'External factors: light, CO<sub>2</sub>, temperature, water; internal: chlorophyll, number and age of leaves.',
    say: null,
  },

  // ── Additional A · ATP and NADPH Stoichiometry: The Quantitative Calvin Cycle ──
  // pp. 681–682
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you count ATP and NADPH for a worded Calvin-cycle problem?',
    a: 'Per CO<sub>2</sub> fixed (one turn): carboxylation none, reduction 2 ATP and 2 NADPH, regeneration 1 ATP, so 3 ATP and 2 NADPH, a ratio of 3 ∶ 2. Per glucose, 6 turns: 18 ATP and 12 NADPH, 18 ∶ 12. Extract the number of CO<sub>2</sub> fixed or glucose made, and scale: 120 CO<sub>2</sub> need 360 ATP and 240 NADPH, 10 glucose are 60 turns, so 180 ATP (and 120 NADPH), and 54 ATP means 54 ÷ 3 = 18 turns, 18 CO<sub>2</sub>',
    why: 'If glucose is given, multiply by 6 first to get CO<sub>2</sub> equivalents.',
    say: null,
  },
  // pp. 681–682
  {
    topic: 4,
    kind: 'remember',
    q: 'What is the atom-balanced Calvin equation, and how many photons do the NADPH need?',
    a: 'Atom-balanced for C, H and O: 6 CO<sub>2</sub> + 18 ATP + 12 NADPH + 12 H<sup>+</sup> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 18 ADP + 12 NADP<sup>+</sup> + 18 P<sub>i</sub> + 6 H<sub>2</sub>O; the ATP side is schematic, and the shorter form without the H<sup>+</sup> and H<sub>2</sub>O is the one to quote for counts. NADPH comes from non-cyclic flow: reducing NADP<sup>+</sup> takes 2 electrons, each lifted once at PS II and once at PS I, so one NADPH needs 2 photons at PS I and 4 in all, and 12 NADPH need 24 photons at PS I and 48 in all',
    why: 'The 12 NADPH and 12 H<sup>+</sup> supply the 24 hydrogens of glucose (12) and the 6 H<sub>2</sub>O (12).',
    say: null,
  },

  // ── Additional B · The C4 Pathway in Detail: Shuttles, CAM, and Why C4 Is Not One Thing ──
  // pp. 683–685
  {
    topic: 5,
    kind: 'remember',
    q: 'How do the malate shuttle and CAM each concentrate CO<sub>2</sub> around RuBisCO?',
    a: 'In the malate (NADP-malic enzyme) shuttle, OAA is converted to malate, which goes to the bundle sheath, where malic enzyme decarboxylates it to CO<sub>2</sub> and pyruvate in the bundle-sheath chloroplast; pyruvate returns to the mesophyll. Maize, sugarcane and sorghum are of this kind. CAM (Crassulacean Acid Metabolism; <i>Kalanchoe</i>, <i>Opuntia</i>, pineapple) keeps stomata shut by day and applies the same idea across time in one cell: at night PEP carboxylase fixes CO<sub>2</sub> into OAA and malate, stored in the vacuoles, and by day the malate is decarboxylated and RuBisCO fixes the CO<sub>2</sub> in the Calvin cycle',
    why: 'C<sub>4</sub> separates the steps in space, mesophyll and bundle sheath, working at the same time; CAM separates them in time, night and day.',
    say: null,
  },
  // pp. 684–685
  {
    topic: 5,
    kind: 'mixup',
    q: 'What does the C<sub>4</sub> pump cost in ATP, and does PEP carboxylase itself need ATP?',
    a: 'C<sub>3</sub> spends 3 ATP per CO<sub>2</sub> fixed, 18 per glucose. C<sub>4</sub> spends the same 3 in the Calvin cycle in the bundle sheath plus 2 ATP-equivalents to regenerate PEP from pyruvate in the mesophyll (pyruvate–phosphate dikinase splits ATP into AMP and PP<sub>i</sub>, and the AMP needs a second ATP), so 5 ATP per CO<sub>2</sub>, and 30 per glucose: 12 extra, with 2 NADPH per CO<sub>2</sub> as in C<sub>3</sub>. PEP carboxylase needs no ATP; it adds CO<sub>2</sub>, as HCO<sub>3</sub><sup>−</sup>, to PEP',
    why: 'In hot, bright, dry conditions the saved photorespiration more than repays the extra 12 ATP per glucose.',
    say: null,
  },

  // ── Additional C · Photorespiration: The Three-Organelle Journey and Its Cost ──
  // pp. 686–687
  {
    topic: 6,
    kind: 'remember',
    q: 'Follow photorespiration through the organelles: where is CO<sub>2</sub> lost?',
    a: 'Chloroplast: RuBisCO as oxygenase makes phosphoglycolate (2C) and 3-PGA (3C); the phosphoglycolate becomes glycolate and goes to the peroxisome. Peroxisome: glycolate is oxidised to glyoxylate, giving H<sub>2</sub>O<sub>2</sub> that catalase breaks down, and each glyoxylate takes an amino group from glutamate to become glycine. Mitochondrion: two glycine form one serine, releasing CO<sub>2</sub> and NH<sub>3</sub>; this is where fixed carbon is lost. Serine goes back to the peroxisome, where it becomes glycerate, which returns to the chloroplast and enters the Calvin cycle as 3-PGA. Net: two oxygenation events give 1 CO<sub>2</sub>, and the nitrogen in the NH<sub>3</sub> must be re-incorporated at a cost in ATP',
    why: 'The book gives 20 to 30 % of newly fixed carbon lost by a C<sub>3</sub> leaf in bright light with low CO<sub>2</sub>.',
    say: null,
  },
  // pp. 687–688
  {
    topic: 6,
    kind: 'mistake',
    q: 'Why is photorespiration small in C<sub>4</sub> plants: is it that PEP carboxylase has no oxygenase activity?',
    a: 'No: that is true but is not the explanation. Photorespiration is small because the bundle sheath keeps the <frac><num>CO<sub>2</sub></num><den>O<sub>2</sub></den></frac> ratio high around RuBisCO, so the oxygenase reaction is unlikely: it is suppressed, not absent. The oxygenase reaction becomes important when that ratio is low, and C<sub>4</sub> plants engineer a CO<sub>2</sub> excess where C<sub>3</sub> plants do not',
    why: 'In an assertion-reason item, “PEP carboxylase has no oxygenase activity” as the reason is true but does not explain the assertion.',
    say: null,
  },

  // ── Additional D · C3, C4, and CAM: A Systematic Comparison with Environmental Context ──
  // pp. 688–690
  {
    topic: 7,
    kind: 'remember',
    q: 'Which crops and temperatures go with C<sub>3</sub>, C<sub>4</sub> and CAM?',
    a: 'C<sub>3</sub> has an optimum of 20–25 °C: wheat, gram, groundnut, soybean, mustard and sunflower. C<sub>4</sub> has an optimum of 30–45 °C: maize, sugarcane, sorghum, bajra, amaranth. CAM: <i>Kalanchoe</i>, <i>Opuntia</i>, pineapple. Photorespiration rises with temperature in C<sub>3</sub> plants, while in C<sub>4</sub> plants it is suppressed, so higher temperature favours them by speeding the PEP carboxylase reaction. That is why cool-season wheat suits the Punjab winter and warm-season maize its summer',
    why: 'If you know the C<sub>4</sub> and CAM examples, most other crops NEET mentions are C<sub>3</sub>.',
    say: null,
  },
  // pp. 689–690
  {
    topic: 7,
    kind: 'mixup',
    q: 'What is the CO<sub>2</sub> compensation point, and why is it near zero in C<sub>4</sub> plants?',
    a: 'It is the ambient CO<sub>2</sub> concentration at which net CO<sub>2</sub> exchange is zero: photosynthetic uptake exactly balances the CO<sub>2</sub> released (in a C<sub>3</sub> leaf by respiration and photorespiration). C<sub>3</sub> plants have a higher value, about 50 ppm, because photorespiration loses fixed carbon even at moderate CO<sub>2</sub>. C<sub>4</sub> plants have about 5–10 ppm, near zero, because photorespiration is suppressed, so they keep a net carbon gain at very low CO<sub>2</sub>',
    why: 'The reason is suppressed photorespiration, not fewer stomata or slower respiration.',
    say: null,
  },

  // ── Additional E · The Hill Reaction: Light, Water, and an Electron Acceptor ──
  // pp. 690–691
  {
    topic: 8,
    kind: 'remember',
    q: 'What is the Hill reaction, and what does it show about the light reaction?',
    a: 'Robert Hill showed in 1937 that isolated chloroplasts in the light, given an artificial electron acceptor (a Hill reagent), evolve O<sub>2</sub> while the acceptor is reduced. No Calvin cycle is needed, so water splitting and electron transport are properties of the thylakoid membrane, which places water photolysis at the start of non-cyclic flow. With DCPIP: 2 H<sub>2</sub>O + 2 DCPIP (oxidised, blue) → O<sub>2</sub> + 2 DCPIPH<sub>2</sub> (reduced, colourless)',
    why: 'Any oxidising agent that accepts electrons from the chain can act: DCPIP or ferricyanide, [Fe(CN)<sub>6</sub>]<sup>3−</sup>.',
    say: null,
  },
  // pp. 691–692
  {
    topic: 8,
    kind: 'remember',
    q: 'How is the Hill reaction measured, and how many DCPIP are reduced per O<sub>2</sub>?',
    a: 'Two water molecules supply 4 electrons and release 1 O<sub>2</sub>: 2 H<sub>2</sub>O → O<sub>2</sub> + 4 H<sup>+</sup> + 4 <i>e</i><sup>−</sup>. Each DCPIP accepts 2 electrons, so two DCPIP are reduced per O<sub>2</sub> evolved. DCPIP is the standard laboratory reagent because it is blue when oxidised and colourless when reduced: the rate of decolourisation, or the fall in absorbance at 600 nm, measures the rate of electron transport, as does the O<sub>2</sub> collected',
    why: 'RuBP is a Calvin-cycle substrate and O<sub>2</sub> is the product, so neither is a Hill reagent; NADP<sup>+</sup> is the natural acceptor, not an artificial one.',
    say: null,
  },

  // ── Additional F · Blackman’s Law in Application: Compensation Points, Limiting-Factor Graphs, and Field Scenarios ──
  // pp. 692–693
  {
    topic: 9,
    kind: 'remember',
    q: 'What are the light compensation point and the light saturation point?',
    a: 'The light compensation point is the light intensity at which photosynthetic CO<sub>2</sub> uptake equals respiratory CO<sub>2</sub> release, so net photosynthesis is zero. Below it the plant loses carbon; at it the plant is exactly breaking even; above it the plant gains carbon. The light saturation point is the intensity beyond which the rate stops increasing even if light rises further, because another factor (CO<sub>2</sub>, temperature or enzymes) now limits',
    why: 'A leaf held exactly at its light compensation point has zero net CO<sub>2</sub> exchange.',
    say: null,
  },
  // pp. 693–694
  {
    topic: 9,
    kind: 'shortcut',
    q: 'How do you name the limiting factor when a rate has stopped rising?',
    a: 'Rule out each factor the question calls adequate. Wheat at its optimum temperature, with plenty of water, in normal air, plateaus above light saturation: light is not limiting, so CO<sub>2</sub> is. In the sealed greenhouse CO<sub>2</sub> is used up and caps the rate. In the monsoon, light falls below the saturation point and is limiting, so raising CO<sub>2</sub> does not help. Water limits indirectly: water stress makes roots release abscisic acid (ABA), the guard cells lose turgor and close the stomata, CO<sub>2</sub> entry falls and so does photosynthesis',
    why: 'Raise the limiting factor only until a new bottleneck takes over.',
    say: null,
  },

  // ── Additional H · What NEET Actually Asks ──
  // pp. 695–700
  {
    topic: 11,
    kind: 'remember',
    q: 'Which parts of the chapter does NEET ask most, and what are the five question shapes?',
    a: 'The book’s own estimate, not official figures, and indicative only: the light reaction and photophosphorylation 5 out of 5; the Calvin cycle with chemiosmosis, and C<sub>4</sub> with photorespiration, 4 out of 5 each; early experiments and pigments 3 out of 5; factors affecting photosynthesis 2 out of 5. The five shapes: which statement is incorrect; scientist and contribution matching; Calvin stoichiometry; C<sub>3</sub> against C<sub>4</sub> pairing; assertion-reason',
    why: 'Evaluate A and R separately; only if both are true ask whether R explains A.',
    say: null,
  },
  // pp. 700–701, 705
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which traps does the chapter’s question set keep using?',
    a: 'O<sub>2</sub> from CO<sub>2</sub> (it comes from water; 12 H<sub>2</sub>O in, 6 out). PS I and PS II jobs reversed. ATP and NADPH inverted (18 ∶ 12 per glucose, 3 ∶ 2 per CO<sub>2</sub>, never 2 ∶ 3). C<sub>3</sub> and C<sub>4</sub> named for the first product’s carbon count, not the acceptor’s. The Calvin cycle placed in the grana instead of the stroma. Cyclic flow said to make O<sub>2</sub>. Absorption and action spectra confused, or “chlorophyll absorbs green so leaves look green”, which is backwards. And H<sup>+</sup> piles up in the lumen, not the stroma',
    why: 'In a sealed bright greenhouse CO<sub>2</sub> runs out first, so light or water cannot raise the rate.',
    say: null,
  },
];
