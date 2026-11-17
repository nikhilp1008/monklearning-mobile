/**
 * KEY POINTS for Biology Class 11, Chapter 12 (Respiration in Plants).
 *
 * Written for test mode, in the form of the Chapter 1 file: every point is a
 * question to answer in your head, then the answer and at most one more line.
 * Four kinds, each a section on the screen: Remember (two a topic), Don't mix
 * up, Common mistakes and Exam shortcuts (one each); an Additional topic has
 * two points for its central results. Memory lines are a fifth, short section
 * of their own, read rather than tested: the first two of each topic.
 *
 * `topic`: Topics 00 to 03 are 0 to 3; Additional topics A to E are 4 to 8; F
 * (What NEET Actually Asks, the book's Addendum P) is 9. No point refers to
 * another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key terms,
 * tables and Cheat sheet. Common mistakes: its Common student pitfalls. Exam
 * shortcuts: its Pro-Tip, with a worked example or practice answer. `say`: the
 * cheat sheet's first two memory aids, word for word, in the Chapter 1 form: no
 * quotation marks and no markup (the colon that follows the closing quotation
 * mark is kept; the bold lettering of the capitals is lost, the capitals
 * themselves are kept). Each of the four topics prints three aids; the first
 * two are used, so the chapter has eight lines. Topic 02's aids sit in one
 * "Memory aids:" line; the label is dropped and its first two bullets are
 * used. Additional topics: the methods, worked examples and practice answers;
 * F: its distribution, traps and habits.
 *
 * ATP counts: every figure is the chapter's idealised one (NADH gives 3 ATP,
 * FADH2 gives 2 ATP, one ATP for the Krebs step the book calls GTP), and each
 * point says so. Net 38 per glucose is the idealised total with every NADH
 * worth 3 ATP (direct 4, from 10 NADH 30, from 2 FADH2 4); 36 is the total
 * when the two glycolytic NADH are ferried by the glycerol-3-phosphate
 * shuttle at 2 ATP each. Where a point gives 36 or 38 it says which.
 *
 * Where the book's claim is looser or wrong, the point is true, and follows the
 * chapter text as it stands:
 * - "every fuel funnels to acetyl CoA" is not repeated: fatty acids give acetyl
 *   CoA, glycerol enters glycolysis, and amino acids enter as pyruvate, acetyl
 *   CoA or Krebs intermediates (the chapter's own table); acetyl CoA is the
 *   main junction, not the only door;
 * - RQ "decided by one thing" is worded "set mainly by how much oxygen the fuel
 *   already holds compared with its carbon and hydrogen"; the weighted average
 *   of a mixture is weighted by the amount of each fuel oxidised (a mole ratio),
 *   not by mass; the table row "0.7 to 0.9, fat or protein" is not used, and
 *   0.85 is "a mixture of fat and carbohydrate, or protein (0.8 to 0.9)";
 * - "tricarboxylic = three carboxyl groups" is not repeated: the three names
 *   are given as names of one pathway, citric acid being the first product;
 * - the CAM malic acid "respired overnight" is not repeated: organic acids give
 *   RQ above 1 because they hold much oxygen already (malic 4/3, tartaric 8/5,
 *   oxalic 4), which is all the chapter's arithmetic needs;
 * - GTP versus ATP: the point says one ATP (GTP in the book, counted as 1 ATP)
 *   is made directly at succinyl-CoA to succinate; no point says which nucleotide
 *   a given organism forms;
 * - succinate dehydrogenase is "the Krebs enzyme in the inner membrane (Complex
 *   II)", the others the chapter names being matrix enzymes; the book's "the
 *   only enzyme not in the matrix" is not repeated as a universal claim;
 * - the lactic-acid "cramps" claim is not repeated: lactic acid builds up and
 *   the muscle tires; the lactic route makes no CO2;
 * - "every living cell runs the same glycolysis" is worded "in the cytoplasm,
 *   with or without oxygen"; the ten-step count and "blocking hexokinase halts
 *   the pathway" are not used; PFK is the pacemaker, hexokinase the first step;
 * - the glycerol-3-phosphate shuttle is given with its ATP yield (2 per NADH)
 *   and not with the book's "important in muscle and brain"; the book's Example A.3
 *   muscle value is read as "up to 38 (36 if the shuttle carries the glycolytic
 *   NADH)", without "and brain";
 * - plants "are not motile and keep no body heat" is not repeated: plants have a
 *   lower oxygen demand than animals and much of a woody plant is dead;
 *   "each part is independent" is worded "little gas moves between organs",
 *   with aerenchyma as the exception that pipes oxygen down to flooded roots;
 * - the daytime net CO2 uptake holds when photosynthesis outpaces respiration,
 *   as in a brightly lit leaf, and the point says so;
 * - castor seed is not named with tripalmitin: the chapter's example is "a
 *   fat, tripalmitin", and the point says 409 ATP per tripalmitin (idealised);
 *   "the most efficient form of stored energy" is worded "more than twice the
 *   energy per gram";
 * - AOX is "a branch found in plants (and some fungi and protists)", and "induced under stress such as" the four conditions listed, not
 *   "always induced by stress"; the standard chain is "Complexes I to IV with ATP synthase
 *   as Complex V", and AOX is said to bypass Complexes III and IV;
 * - superlatives ("the single most repeated error", "the exam's favourite
 *   fact", "relentlessly") are dropped or worded "a classic trap"; exam shares
 *   are the book's estimate from past papers, not official figures (the four
 *   ranges do not add to 100%, so no point adds them), with no years.
 *
 * Notes kept where a point uses the name: voodoo lily <i>Sauromatum guttatum</i>
 * (also written <i>S. venosum</i>). A book title is plain text. Scientific
 * names are in <i>.
 *
 * Markup is the chapter's own: <i> for scientific names, <sub> and <sup> for
 * formulas and ions, <frac> for a fraction (every RQ is stacked), no em dash.
 * A value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 00 · Do Plants Breathe? Gaseous Exchange in Plants ──
  // pp. 707–709, 712
  {
    topic: 0,
    kind: 'remember',
    q: 'Why do plants need no lungs or gills?',
    a: 'Four things together: each part largely manages its own gas exchange, so not much gas is shipped from one organ to distant tissues; the cells that respire most lie at or near the surface, so diffusion distances are short; loosely packed parenchyma leaves continuous intercellular air spaces, a built-in ventilation network joined to the stomata and lenticels; and a plant has a lower oxygen demand than an animal, since many of its cells are slow and much of a woody plant is dead tissue. So gas exchange is by diffusion, cell by cell, with no breathing movement',
    why: 'Plants need no organs, but they do need an unbroken diffusion path to air.',
    say: 'Low demand, short distance: the whole reason plants skip lungs.',
  },
  // pp. 707–708, 710, 712
  {
    topic: 0,
    kind: 'remember',
    q: 'Through which routes do leaves, bark and roots exchange gases, and what keeps a waterlogged root supplied?',
    a: 'Leaves and young green stems: stomata, pores bounded by guard cells. Woody stems and older roots: lenticels, lens-shaped openings in the bark that ventilate a surface that is otherwise corky and sealed. Roots: the root surface and root hairs, in contact with the soil air between soil particles. In waterlogged soil the soil air is replaced by water, and plants such as rice use aerenchyma, tissue with large continuous air channels that pipe oxygen from the shoot down to the submerged root',
    why: 'Most mesophytes lack that continuous internal air column, so their roots struggle when soil air is displaced.',
    say: 'Stomata–Lenticel–Soil: leaf, bark, root, in that order.',
  },
  // pp. 709, 712
  {
    topic: 0,
    kind: 'mixup',
    q: 'Respiration or photosynthesis: which runs in every cell and when, and what gas exchange does a leaf show by day and by night?',
    a: 'Respiration runs in every living cell, green or not (roots, seeds, petals), continuously, day and night, because every living cell needs a steady ATP supply. Photosynthesis runs only in green, chlorophyll-containing cells and only in light. So a root tip respires but never photosynthesises, and a sprouting potato in a dark store keeps taking in O<sub>2</sub> and giving out CO<sub>2</sub>. In a brightly lit leaf, where photosynthesis outpaces respiration, there is a net uptake of CO<sub>2</sub> and a net release of O<sub>2</sub>; at night only respiration runs, so O<sub>2</sub> goes in and CO<sub>2</sub> comes out',
    why: 'Anchor: all cells and all the time for respiration, green cells and light only for photosynthesis.',
    say: null,
  },
  // pp. 709, 711
  {
    topic: 0,
    kind: 'mistake',
    q: 'What is wrong with “plants breathe in CO<sub>2</sub> and breathe out O<sub>2</sub>”, and how do breathing, respiration and burning differ?',
    a: 'That sentence describes only daytime photosynthesis; respiration never stops, and at night the plant takes in O<sub>2</sub> and gives out CO<sub>2</sub>. Breathing, or gaseous exchange, is the physical swap of gases; respiration is the biochemical release of energy. Respiration is also not burning: both oxidise glucose and release CO<sub>2</sub>, water and energy, but combustion dumps the energy at once as heat and light, while respiration releases it gradually, in small enzyme-controlled steps, trapping much of it in ATP',
    why: 'Do not look for a plant circulation for oxygen: the short diffusion paths make one unnecessary.',
    say: null,
  },
  // pp. 710–711
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A question asks why a plant part has no respiratory organ, or why a thick trunk does not suffocate: what is the quick answer?',
    a: 'Give the pair low demand and short distance, then name the air route for the organ in question: stomata for leaves, lenticels for bark, soil air for roots. For a bulky trunk, add that most of the interior of a mature trunk is dead, non-respiring tissue, and the living cells near the surface and in the rays are served by lenticels and the intercellular spaces, so the assertion that the trunk does not suffocate is true and the reason explains it',
    why: 'The assertion-reason trap is to call the assertion false because the inside seems far from air: the inner wood is not even alive.',
    say: null,
  },

  // ── Topic 01 · Glycolysis & Fermentation ──
  // pp. 713–715, 717, 720
  {
    topic: 1,
    kind: 'remember',
    q: 'What is glycolysis, where does it happen, and what is its balance sheet per glucose?',
    a: 'The EMP pathway (Embden, Meyerhof, Parnas): the partial oxidation of one glucose into two pyruvic acid, in the cytoplasm, so even a cell without mitochondria can do it, and it runs with or without oxygen. ATP invested: 2 (hexokinase and phosphofructokinase). ATP produced, gross: 4, by substrate-level phosphorylation at 1,3-BPGA → 3-PGA and PEP → pyruvate, each twice. Net ATP: 4 − 2 = 2. NADH: 2, made at the one oxidation step, glyceraldehyde-3-phosphate → 1,3-BPGA (PGAL dehydrogenase). Pyruvate: 2',
    why: 'Fermentation adds no ATP to this net 2.',
    say: 'Invest 2, earn 4, keep 2: the ATP balance in a nutshell.',
  },
  // pp. 714–716, 720
  {
    topic: 1,
    kind: 'remember',
    q: 'Which enzymes of glycolysis must you place, and which is the pacemaker?',
    a: 'Hexokinase: step 1, glucose → glucose-6-phosphate, using ATP. Phosphofructokinase (PFK): step 3, fructose-6-phosphate → fructose-1,6-bisphosphate, the second ATP; it is the committed, irreversible, rate-limiting step, the pacemaker. Aldolase: splits the 6-carbon sugar into two 3-carbon trioses, and triose phosphate isomerase turns DHAP into a second G3P, so everything after is done twice per glucose. PGAL dehydrogenase: the oxidation step that makes NADH. Enolase: removes water from 2-phosphoglycerate to give PEP. Pyruvate kinase: the final ATP-forming step',
    why: 'Hexokinase is the first enzyme but not the pacemaker: do not equate first with controlling.',
    say: 'PFK Paces: Phosphofructokinase is the Pacemaker.',
  },
  // pp. 714–715, 717–720
  {
    topic: 1,
    kind: 'mixup',
    q: 'Alcoholic or lactic fermentation: which releases CO<sub>2</sub>, where is NAD<sup>+</sup> regenerated, and what does fermentation gain?',
    a: 'Without oxygen the cell needs NAD<sup>+</sup> back so that glycolysis can go on, and pyruvate becomes the hydrogen acceptor. Alcoholic (yeast): pyruvate is decarboxylated to acetaldehyde, which releases CO<sub>2</sub>, and acetaldehyde is reduced to ethanol; that reduction is the step that turns NADH back into NAD<sup>+</sup>. Lactic (muscle, some bacteria): pyruvate is reduced directly to lactic acid by lactate dehydrogenase; there is no decarboxylation, so no CO<sub>2</sub>. Either way the net stays at 2 ATP per glucose, less than 7% of the energy of glucose. With oxygen present, pyruvate instead enters the mitochondrion for the aerobic route',
    why: 'In a sealed yeast culture the CO<sub>2</sub> keeps coming; in a working muscle the lactic route gives lactic acid and none.',
    say: null,
  },
  // p. 719
  {
    topic: 1,
    kind: 'mistake',
    q: 'A student writes that glycolysis gives a net gain of 4 ATP: what is the error?',
    a: '4 is the gross ATP produced; the net is 4 − 2 = 2, because the 2 ATP invested at hexokinase and phosphofructokinase must be subtracted. Always subtract the 2 invested. The same slip appears as “produces 4 ATP net per glucose” in an option',
    why: 'A related slip is to think glycolysis needs oxygen or is blocked by it: it needs none and runs either way; only fermentation is strictly anaerobic.',
    say: null,
  },
  // pp. 717, 719–720
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Any “how many?” question on glycolysis: what one number do you anchor to?',
    a: '2. Net ATP 2, NADH 2, pyruvate 2, trioses 2, ATP invested at 2 steps, ATP harvested at 2 steps, and ×2 trioses gives 4 gross. Almost every glycolysis numerical falls out of that pattern. Where NADH forms: the dehydrogenase step only, the G3P → 1,3-BPGA oxidation, run twice (2 NADH), not PEP → pyruvate, which makes ATP',
    why: 'You rarely need the full chain under time pressure.',
    say: null,
  },

  // ── Topic 02 · TCA Cycle & ETS ──
  // pp. 721–723, 729
  {
    topic: 2,
    kind: 'remember',
    q: 'What does one turn of the Krebs cycle start with and give, and which step makes the direct ATP?',
    a: 'It runs in the mitochondrial matrix after the link reaction (pyruvate + CoA + NAD<sup>+</sup> → acetyl CoA + CO<sub>2</sub> + NADH, by the pyruvate dehydrogenase complex). Acetyl CoA (2 C) joins oxaloacetate (4 C) to give citric acid (6 C), and the cycle runs citrate, isocitrate, α-ketoglutarate, succinyl-CoA, succinate, fumarate, malate, back to OAA. Per turn: 2 CO<sub>2</sub> (at isocitrate → α-ketoglutarate and α-ketoglutarate → succinyl-CoA), 3 NADH, 1 FADH<sub>2</sub> and 1 ATP, made directly at succinyl-CoA → succinate (the book counts it as GTP, equal to 1 ATP). Per glucose the cycle turns twice: 4 CO<sub>2</sub>, 6 NADH, 2 FADH<sub>2</sub>, 2 ATP',
    why: 'The partner of acetyl CoA is oxaloacetate, not pyruvic acid; OAA is regenerated, never consumed.',
    say: 'Can I Keep Selling Sea Food Money?: Citrate, Isocitrate, α-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate (→ OAA).',
  },
  // pp. 722–723, 725–726, 729
  {
    topic: 2,
    kind: 'remember',
    q: 'How does the electron transport system make ATP, and what is its idealised yield?',
    a: 'On the inner mitochondrial membrane: Complex I (NADH dehydrogenase), II (succinate dehydrogenase), III (cytochrome bc<sub>1</sub>), IV (cytochrome c oxidase, with Fe and Cu) and V (ATP synthase). NADH → I → ubiquinone → III → cytochrome c → IV → O<sub>2</sub>; FADH<sub>2</sub> enters at II. Electron flow pumps H<sup>+</sup> from the matrix into the intermembrane space, and the protons return through ATP synthase, which makes ATP (chemiosmosis). O<sub>2</sub> is the terminal acceptor and forms H<sub>2</sub>O; without it the chain jams. Idealised yield: each NADH 3 ATP, each FADH<sub>2</sub> 2 ATP, theoretical values and not exact measurements',
    why: 'FADH<sub>2</sub> enters after Complex I, so it feeds fewer proton pumps.',
    say: '3 minus 2 = the FADH2 gap: NADH gives 3, FADH2 gives 2, because FADH2 enters one pump later.',
  },
  // pp. 722–723, 728–729
  {
    topic: 2,
    kind: 'mixup',
    q: 'Cytoplasm, matrix or inner membrane: where do glycolysis, the Krebs enzymes and the ETS sit, and which Krebs enzyme is on the membrane?',
    a: 'Glycolysis: cytoplasm. Link reaction and the Krebs cycle: mitochondrial matrix. ETS complexes and ATP synthase: inner mitochondrial membrane. The Krebs enzyme on the membrane is succinate dehydrogenase, which converts succinate → fumarate, makes FADH<sub>2</sub> and is itself Complex II of the ETS; the Krebs enzymes the chapter names besides it (citrate synthase, aconitase, and the dehydrogenases for isocitrate, α-ketoglutarate and malate) are matrix enzymes',
    why: 'An option that puts the ETS in the matrix, or succinate dehydrogenase there with the rest, loses easy marks.',
    say: null,
  },
  // pp. 727–728
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does the Krebs cycle make most of the ATP of respiration?',
    a: 'No. It makes only 1 ATP per turn directly; its real product is the loaded carriers NADH and FADH<sub>2</sub>, and the bulk of the ATP is made later in the ETS by oxidative phosphorylation. For example, the carriers of the two turns from one glucose, 6 NADH and 2 FADH<sub>2</sub>, give (6 × 3) + (2 × 2) = 18 + 4 = 22 ATP through the ETS (idealised yield)',
    why: 'Keep NADH, not NADPH, in the Krebs cycle and ETS: they use NAD<sup>+</sup> and NADH.',
    say: null,
  },
  // pp. 725–727, 729
  {
    topic: 2,
    kind: 'shortcut',
    q: 'What two anchors answer most Krebs and ETS questions?',
    a: 'Per turn, “two CO<sub>2</sub> out, three NADH out, one FADH<sub>2</sub> out, one ATP out”, doubled per glucose; and for the ETS, NADH = 3 and FADH<sub>2</sub> = 2, because FADH<sub>2</sub> enters one pump later. Worked check: if Complex IV is blocked, O<sub>2</sub> consumption stops, the proton gradient collapses and ATP synthesis ceases, and NADH and FADH<sub>2</sub> cannot be reoxidised, so the Krebs cycle stalls',
    why: 'Cyanide is the Complex IV poison that does exactly this.',
    say: null,
  },

  // ── Topic 03 · Amphibolic Pathway & RQ ──
  // pp. 731–732, 737
  {
    topic: 3,
    kind: 'remember',
    q: 'What is the respiratory quotient, and what are its values for the main substrates?',
    a: 'RQ = <frac><num>volume of CO<sub>2</sub> evolved</num><den>volume of O<sub>2</sub> consumed</den></frac>, a pure ratio with no unit. Carbohydrate (glucose) = 1. Protein about 0.8–0.9. Fat about 0.7 (tripalmitin). Organic acids above 1 (malic 1.33, oxalic 4). Anaerobic respiration or fermentation: ∞, since CO<sub>2</sub> is released and no O<sub>2</sub> is consumed. These are values for one pure fuel; a living tissue burns a mixture, so a measured RQ is evidence of the dominant substrate, not proof of a single one',
    why: 'An oilseed can show an RQ that drifts upward over days as it turns fat into sugars and respires those.',
    say: 'Fat is Lean on oxygen → RQ Low (0.7); Acids are rich → RQ High (> 1).',
  },
  // pp. 731–732, 734–735
  {
    topic: 3,
    kind: 'remember',
    q: 'How do you get an RQ from an equation, and why do glucose, fat and organic acid differ?',
    a: 'Read CO<sub>2</sub> produced and O<sub>2</sub> consumed from the balanced equation and divide. Glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O: RQ = <frac><num>6</num><den>6</den></frac> = 1. Tripalmitin, 2 C<sub>51</sub>H<sub>98</sub>O<sub>6</sub> + 145 O<sub>2</sub> → 102 CO<sub>2</sub> + 98 H<sub>2</sub>O: RQ = <frac><num>102</num><den>145</den></frac> = 0.703 ≈ 0.7. The value is set mainly by how much oxygen the fuel already holds compared with its carbon and hydrogen: a fat is oxygen-poor and needs extra O<sub>2</sub>, so RQ is below 1; an organic acid is oxygen-rich and needs little, so RQ is above 1. With no O<sub>2</sub> used the denominator is 0 and RQ is infinite',
    why: 'The fuel sets the value, not the organ: starchy seeds (wheat, rice) are near 1, oily seeds (castor, mustard, groundnut) are below 1.',
    say: 'No O2, infinite RQ: anaerobic respiration divides by zero.',
  },
  // pp. 730–732, 735–736
  {
    topic: 3,
    kind: 'mixup',
    q: 'What does “amphibolic” mean, and what does it not mean?',
    a: 'Amphibolic: the pathway serves both catabolism (breakdown, energy release) and anabolism (synthesis). Intermediates are drawn off while others are broken down: acetyl CoA for fatty acids, α-ketoglutarate and oxaloacetate for amino acids by transamination, and every withdrawal must be balanced by replenishment. It also takes other fuels: glycerol enters glycolysis, fatty acids give acetyl CoA (β-oxidation), and amino acids enter, after deamination, as pyruvate, acetyl CoA or Krebs intermediates. It does not mean “found in both plants and animals”',
    why: 'Amphi means both: breakdown and build-up on one pathway.',
    say: null,
  },
  // pp. 732–734, 736
  {
    topic: 3,
    kind: 'mistake',
    q: 'How is the net 38 ATP per glucose built, and why is treating it as exact a mistake?',
    a: 'Idealised balance sheet per glucose: glycolysis 2 ATP, 2 NADH; link reaction 2 NADH; Krebs cycle (two turns) 2 ATP, 6 NADH, 2 FADH<sub>2</sub>; totals 4 ATP, 10 NADH, 2 FADH<sub>2</sub>. Convert at the ETS: 10 × 3 = 30 and 2 × 2 = 4, so 34, plus 4 direct = 38 ATP, about 40% efficiency. If the glycolytic NADH are ferried in by a shuttle worth only 2 ATP each, the total is about 36. 38 is a ceiling: it assumes a single orderly sequence, no intermediate withdrawn, glucose the only substrate, and glycolytic NADH delivered intact',
    why: 'Intermediate withdrawal and shuttle costs mean real yields are lower, about 36 or less.',
    say: null,
  },
  // pp. 734, 736
  {
    topic: 3,
    kind: 'shortcut',
    q: 'The RQ of a germinating castor seed, relative to 1, without any calculation?',
    a: 'Below 1, about 0.7. Oil is a fat, an oxygen-poor and highly reduced molecule, so oxidising it takes extra O<sub>2</sub> from outside and O<sub>2</sub> consumed exceeds CO<sub>2</sub> released. The one-glance rule replaces the table: oxygen-poor fuel (fat), RQ below 1; balanced fuel (carbohydrate), RQ = 1; oxygen-rich fuel (organic acid), RQ above 1; no O<sub>2</sub> used (anaerobic), RQ = ∞',
    why: 'Do not answer “a seed, so RQ = 1”: that holds only for starchy seeds.',
    say: null,
  },

  // ── Additional topic A · ATP Accounting & The Mitochondrial Shuttle Problem ──
  // pp. 739–740, 742
  {
    topic: 4,
    kind: 'remember',
    q: 'How is the idealised 38 ATP per glucose summed from its sources?',
    a: 'Direct ATP: 2 (glycolysis, net) + 2 (Krebs, two turns) = 4. NADH: 2 from glycolysis, 2 from the link reaction, 6 from the Krebs cycle, 10 in all, at 3 ATP each = 30. FADH<sub>2</sub>: 2 from the Krebs cycle at 2 ATP each = 4. So 2 + 2 + 6 + 6 + 18 + 4 = 38 ATP, the idealised total in which every NADH, the glycolytic pair included, is worth 3 ATP. Modern measurements give about 2.5 ATP per NADH and 1.5 per FADH<sub>2</sub>, so about 30 to 32 ATP per glucose; exam answers use the idealised 38',
    why: 'Four of the 38 come directly and 34 from oxidative phosphorylation.',
    say: null,
  },
  // pp. 739–741
  {
    topic: 4,
    kind: 'remember',
    q: 'Why can cytoplasmic NADH yield fewer ATP than matrix NADH, and what is the total then?',
    a: 'The inner mitochondrial membrane is impermeable to NADH, so the NADH made in glycolysis is carried in by a shuttle. The malate-aspartate shuttle delivers to matrix NAD<sup>+</sup> (NADH again), so each cytoplasmic NADH keeps 3 ATP. The glycerol-3-phosphate shuttle delivers to FADH<sub>2</sub> in the membrane, which passes electrons in at ubiquinone, so each is worth 2 ATP. If both glycolytic NADH use it: 4 + 24 + 4 + 4 = 36 ATP (cytoplasmic NADH 2 × 2, eight matrix NADH 8 × 3, FADH<sub>2</sub> 2 × 2, direct ATP 4)',
    why: 'The shuttle type, not the ETS machinery, sets the yield.',
    say: null,
  },

  // ── Additional topic B · Carbon Tracking Through the Respiratory Pathway ──
  // pp. 742–744
  {
    topic: 5,
    kind: 'remember',
    q: 'Which carbons of glucose leave as CO<sub>2</sub> first, and where does a label at C<sub>3</sub> go?',
    a: 'Aldolase splits fructose-1,6-bisphosphate between C<sub>3</sub> and C<sub>4</sub>. The aldehyde carbon of each G3P (C<sub>3</sub> in one half, C<sub>4</sub> in the other) is the one oxidised, and it becomes the carboxyl carbon of pyruvate. The link reaction removes each pyruvate’s carboxyl carbon, so the first two CO<sub>2</sub> are C<sub>3</sub> and C<sub>4</sub> of glucose. The acetyl CoA made carries C<sub>1</sub> and C<sub>2</sub> (one pyruvate) or C<sub>6</sub> and C<sub>5</sub> (the other). A <sup>14</sup>C label at C<sub>3</sub> therefore leaves in the link reaction and never reaches the Krebs cycle. CO<sub>2</sub> per glucose: 2 in the link reaction, 4 in the Krebs cycle',
    why: 'Carbon 6 becomes the methyl carbon of pyruvate and acetyl CoA, so a label there goes into the Krebs cycle.',
    say: null,
  },
  // pp. 742–745
  {
    topic: 5,
    kind: 'remember',
    q: 'Do the CO<sub>2</sub> molecules of a Krebs turn come from the acetyl group that just entered?',
    a: 'No. The two CO<sub>2</sub> of a turn, at isocitrate → α-ketoglutarate and α-ketoglutarate → succinyl-CoA, come from the oxaloacetate-derived part of citrate, not from the acetyl group that entered in that turn. Because succinate is symmetrical, the acetyl-derived carbons are scrambled between positions and are lost as CO<sub>2</sub> only in later turns. Over the long run the cycle is balanced: two carbons enter as acetyl CoA and two leave as CO<sub>2</sub> per turn',
    why: 'A standard NEET trap: isotope experiments with labelled acetyl show no labelled CO<sub>2</sub> in that turn.',
    say: null,
  },

  // ── Additional topic C · RQ Calculations: Substrate Identification & Mixed Fuels ──
  // pp. 745–747
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you identify the substrate from an RQ, and what are the RQs of malic and tartaric acid?',
    a: 'Exactly 1.0: carbohydrate, since the oxygen in the molecule balances the CO<sub>2</sub> produced. Below 1, about 0.7: fat, oxygen-poor and needing extra O<sub>2</sub>. Above 1: organic acid, oxygen-rich and needing little O<sub>2</sub>. Infinite: anaerobic respiration or fermentation, O<sub>2</sub> consumed 0. Malic acid: C<sub>4</sub>H<sub>6</sub>O<sub>5</sub> + 3 O<sub>2</sub> → 4 CO<sub>2</sub> + 3 H<sub>2</sub>O, RQ = <frac><num>4</num><den>3</den></frac> ≈ 1.33. Tartaric acid: 2 C<sub>4</sub>H<sub>6</sub>O<sub>6</sub> + 5 O<sub>2</sub> → 8 CO<sub>2</sub> + 6 H<sub>2</sub>O (oxygen: 12 + 10 = 22 on the left, 16 + 6 = 22 on the right), RQ = <frac><num>8</num><den>5</den></frac> = 1.6',
    why: 'If an equation is not balanced, balance it first: carbons, then hydrogens, then oxygens.',
    say: null,
  },
  // pp. 745–747
  {
    topic: 6,
    kind: 'remember',
    q: 'What does an RQ between the standard values, such as 0.85, tell you?',
    a: 'A mixture of fuels: a measured RQ lies between the pure values, nearer 0.7 for mostly fat and nearer 1.0 for mostly carbohydrate. 0.85 could be fat and carbohydrate oxidised in comparable amounts, or protein (about 0.8–0.9), though proteins are not usually a plant’s main fuel; a pure carbohydrate gives 1.0 and a pure fat about 0.7. The average is weighted by the O<sub>2</sub> each fuel consumes: RQ = <frac><num>total CO<sub>2</sub></num><den>total O<sub>2</sub></den></frac>. RQ is a mole ratio, so equal masses of fat and carbohydrate are not equal proportions and need not give exactly 0.85. A germinating oilseed starts near 0.7 and drifts toward 1.0 as the stored fat is converted to sugars and respired',
    why: 'A single pure substrate always gives its own fixed value; an in-between value means a blend.',
    say: null,
  },

  // ── Additional topic D · Plant-Specific Respiration: The Alternative Oxidase Pathway ──
  // pp. 748–749
  {
    topic: 7,
    kind: 'remember',
    q: 'What is the alternative oxidase pathway, and how does it differ from the standard ETS?',
    a: 'A branch of the electron transport chain found in plants (and some fungi and protists): a cyanide-resistant terminal oxidase (AOX), encoded by nuclear genes and located in the inner mitochondrial membrane. Electrons enter at Complex I or II, go to ubiquinone and then to AOX, which reduces O<sub>2</sub> to H<sub>2</sub>O, bypassing Complexes III and IV. Only Complex I pumps H<sup>+</sup> (the standard chain pumps at I, III and IV), so the yield is about 1 ATP per NADH instead of 3 if NADH is the donor. It is induced under stress such as low temperature, reactive oxygen species, pathogen attack or drought, as an overflow route for electrons',
    why: 'The cell trades efficiency for survival; the standard pathway is cyanide-sensitive.',
    say: null,
  },
  // pp. 749–750
  {
    topic: 7,
    kind: 'remember',
    q: 'How does the alternative oxidase produce heat in the voodoo lily, and does it change the RQ?',
    a: 'Because AOX bypasses two proton-pumping complexes, much of the energy that would be stored in ATP is released as heat; thermogenic spadices such as that of the voodoo lily <i>Sauromatum guttatum</i> (also written <i>S. venosum</i>) run hot, with salicylic acid, the “calorigen”, among the signals. The warmth volatilises scent that attracts pollinators (beetles and flies) and gives a warmer setting for pollination in the cold. AOX reduces O<sub>2</sub> to H<sub>2</sub>O with the same stoichiometry as the standard oxidase, so it changes the route and the ATP yield but not the ratio of O<sub>2</sub> used to CO<sub>2</sub> released',
    why: 'An RQ difference between two tissues therefore points to a difference in substrate, not to AOX.',
    say: null,
  },

  // ── Additional topic E · Integrated Numerical Problems ──
  // pp. 751–752, 754
  {
    topic: 8,
    kind: 'remember',
    q: 'How many ATP does one tripalmitin molecule give on complete oxidation, and how does that compare with glucose?',
    a: 'Idealised count (NADH 3, FADH<sub>2</sub> 2, the Krebs step counted as 1 ATP, 2 ATP to activate each fatty acid). One palmitic acid: β-oxidation, 7 rounds, gives 7 NADH, 7 FADH<sub>2</sub> and 8 acetyl CoA; the 8 acetyl CoA give 24 NADH, 8 FADH<sub>2</sub>, 8 ATP. Carriers 31 NADH × 3 = 93 and 15 FADH<sub>2</sub> × 2 = 30, plus 8 direct, minus 2 for activation: 129 ATP. Three chains: 387. The glycerol adds about 22 (6 NADH × 3 = 18, 1 FADH<sub>2</sub> × 2 = 2, net direct ATP 2). Total about 409 ATP against 38 for glucose, about 8 ATP per carbon of a palmitic acid chain against about 6 for glucose',
    why: 'Per gram, fat stores about 9 kcal against about 4 for carbohydrate, more than twice the energy, which is why seeds store lipids.',
    say: null,
  },
  // pp. 752–754
  {
    topic: 8,
    kind: 'remember',
    q: 'What does withdrawing α-ketoglutarate for amino acid synthesis cost in ATP, and why is 38 itself uncertain?',
    a: 'Everything downstream of α-ketoglutarate in that turn is lost: α-ketoglutarate → succinyl-CoA 1 NADH (3 ATP), succinyl-CoA → succinate 1 ATP, succinate → fumarate 1 FADH<sub>2</sub> (2 ATP), malate → oxaloacetate 1 NADH (3 ATP): 3 + 1 + 2 + 3 = 9 ATP at least per α-ketoglutarate withdrawn (idealised yields), and no oxaloacetate is regenerated from it. The 38 ATP figure assumes pure glucose and no withdrawals; real yields also depend on shuttle efficiency and proton leaks, so ATP yield deviates from theory more than an RQ, which is a measured gas ratio',
    why: 'Real cells compensate with reactions that replenish cycle intermediates.',
    say: null,
  },

  // ── Additional topic F · What NEET Actually Asks ──
  // p. 755
  {
    topic: 9,
    kind: 'remember',
    q: 'How does the book weight the four zones of this chapter in NEET, and how reliable is that?',
    a: 'The book’s estimate from past papers, not official figures: glycolysis and fermentation about 30–35%, the TCA cycle and ETS about 30–35%, RQ and the amphibolic pathway about 15–20%, gaseous exchange in plants about 10–15%. Glycolysis and the Krebs cycle with the ETS together are roughly 60–70% of the questions on the chapter, so they deserve the most revision time (the ranges do not add to 100%), while gaseous exchange is mostly asked as assertion-reason',
    why: 'Indicative only: the ranges are the book’s reading of recent papers.',
    say: null,
  },
  // pp. 760, 764
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which distractors does the book list as classic traps, and which three habits win marks?',
    a: 'Traps: glycolysis requires oxygen (it runs with or without it); 4 ATP net (4 is gross, 2 is net); CO<sub>2</sub> released in lactic fermentation (only the alcoholic route releases it); the ETS in the matrix (it is on the inner membrane); O<sub>2</sub> as the final electron donor (it is the terminal acceptor); all seeds RQ = 1 (the substrate sets it); amphibolic as occurring in plants and animals (it means catabolic and anabolic); hexokinase as the pacemaker (PFK is). Habits: always subtract the 2 ATP invested; place succinate dehydrogenase on the inner membrane as Complex II; and keep fermentation apart from anaerobic respiration, which in some bacteria runs an ETS with an inorganic acceptor such as nitrate or sulphate',
    why: 'Read every option: one wrong pairing disqualifies a whole match-the-column choice.',
    say: null,
  },
];
