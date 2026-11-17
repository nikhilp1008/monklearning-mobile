/**
 * KEY POINTS for Biology Class 11, Chapter 9 (Biomolecules).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01 to 04 are 0 to 3; Additional topics A to D are 4 to 7;
 * E (Summary Checklist) is 8 and has no points; F (What NEET Actually Asks,
 * the book's Addendum P) is 9. No point refers to another topic by number.
 *
 * Every fact is from the chapter text (the Master Reference book); the page
 * (the bottom folio) is above each point. Remember: the topic's Key
 * definitions and Cheat sheet. Common mistakes: its Common student pitfalls.
 * Exam shortcuts: its Pro-Tip, with a worked example or practice answer.
 * `say`: the cheat sheet's first memory aids, word for word, in the Chapter 1
 * form: no quotation marks and no markup. Topic 01's cheat sheet prints three
 * aids, Topic 02's three, Topic 03's five, Topic 04's three; the first two of
 * each are used (Topic 02 and 03 both open with the nucleotide aid, so it is
 * given twice). In Topic 02 the nucleotide point comes before the glycine one
 * in the list so the memory lines keep the book's order. Additional topics:
 * the methods, worked examples and practice answers (A: the Michaelis-Menten
 * and Lineweaver-Burk results, with the book's worked numbers, recomputed and
 * correct); F: its distribution, archetypes and traps.
 *
 * Where the book's claim is looser or wrong, the point is written so that it
 * stays true:
 * - cellulose: the chapter lists it among secondary polymeric substances
 *   (Topic 01) yet sets it among primary structural carbohydrates in its own
 *   MCQs (Topics 01 and 02) and Additional topic F; no point classifies it as
 *   primary or secondary, and the secondary examples used are rubber, gums and
 *   resins, with the alkaloids, pigments, drugs and toxins;
 * - the macromolecule cut-off: the micromolecule range is about 18-800 Da;
 *   macromolecules are far larger, generally 10,000 Da and above (NCERT), and
 *   the book's working cut-off of about 1000 Da is a convenience; the band
 *   between 800 and 1000 Da is not assigned, and no lipid weight is quoted;
 *   lipids are small molecules trapped in the acid-insoluble fraction as
 *   membrane vesicles, not true macromolecules;
 * - essential fatty acids are left out (the book lists linoleic, linolenic and
 *   arachidonic; arachidonic is only conditionally essential);
 * - amino-acid classes: only the clear members are used (glutamic and
 *   aspartic acid acidic; lysine, arginine and histidine basic; glycine,
 *   alanine and valine neutral; tryptophan, tyrosine and phenylalanine
 *   aromatic); the groups overlap (tyrosine is also polar; histidine’s extra
 *   nitrogen is in a ring), so no point asks which single class a borderline
 *   residue belongs to;
 * - glycine is "the lone achiral amino acid" among the 20 standard amino
 *   acids, not "every other amino acid" in general;
 * - glutamate: the collection point of amino-group nitrogen (most amino acids
 *   pass it to alpha-ketoglutarate, the acceptor, forming glutamate), not a
 *   primary donor in transamination itself; the book's D.1 wording is not
 *   repeated;
 * - cholesterol is the characteristic sterol of animal membranes (plants use
 *   phytosterols); "absent from plant membranes" and "the liver is the sole
 *   site of the urea cycle" are not repeated;
 * - fat-soluble vitamins travel with the lipids in tissue analysis, not in the
 *   acid-soluble pool; the B6 deficiency signs (convulsions in infants,
 *   peripheral neuropathy, sideroblastic anaemia, as in Chemistry 12) are not
 *   quoted; only the clear vitamin and disease pairs are used;
 * - DNA is double-stranded and RNA mostly single-stranded (a statement for
 *   cells; some viruses differ); "the primary sequence alone dictates the
 *   fold" is not repeated; ligases are said to use energy, usually from ATP
 *   (bacterial DNA ligase uses NAD+); an enzyme on its own cannot make an
 *   unfavourable reaction occur (coupling to ATP hydrolysis is another matter);
 *   "every time", "the single most common" and "answers a large share" are
 *   not repeated;
 * - temperature optimum is 37 °C for human enzymes (the worked example's 40 °C
 *   peak is not used); the six IUB classes (OTHLIL) are the book's scheme; IUBMB added a seventh, translocases, in 2018;
 * - FAD is both: a coenzyme when loosely bound, the prosthetic group in
 *   succinate dehydrogenase, as the book words it; NAD+ is the coenzyme
 *   example and haem the prosthetic-group example;
 * - exam shares (F) are the book's estimate from past papers, not official
 *   figures; no year and no "every" is quoted.
 *
 * Markup is the chapter's own: <i> for the variables v, S, I, K and V (labels
 * m, max, i upright in <sub>), <frac> for a fraction, <sub> and <sup>, no em
 * dash. A value is kept with its unit, and a range with an en dash.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Foundations: Chemical Analysis, Metabolites & Biomacromolecules ──
  // pp. 534–536, 540–541
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you separate the acid-soluble and acid-insoluble fractions of a tissue, and what does each hold?',
    a: 'Grind living tissue with trichloroacetic acid (Cl<sub>3</sub>CCOOH) into a slurry and strain it through cheesecloth or cotton. The filtrate is the acid-soluble pool: the micromolecules (amino acids, sugars, nucleotides, vitamins, organic acids, ions), roughly 18–800 Da. The retentate is the acid-insoluble fraction: the macromolecules (proteins, nucleic acids, polysaccharides) and, as a special case, the lipids, which are small molecules trapped there as membrane vesicles. Macromolecules are far larger, generally 10,000 Da and above (NCERT); the book’s working cut-off of about 1000 Da is a convenience, and the ranges are rough figures. To find the inorganic part, burn the tissue: the ash holds the minerals',
    why: 'Proteins, nucleic acids and polysaccharides are polymers of repeating units (amino acids, nucleotides, monosaccharides); lipids are not.',
    say: 'soluble = small, insoluble = big',
  },
  // pp. 534–535, 540–541
  {
    topic: 0,
    kind: 'remember',
    q: 'What separates a primary from a secondary metabolite?',
    a: 'A primary metabolite has a clear role in normal physiology and growth: amino acids, sugars, nucleotides, organic acids, lipids. A secondary metabolite, found mainly in plants, fungi and microbes, has no direct role in core metabolism but real ecological and commercial value: alkaloids (morphine, codeine, quinine), pigments (carotenoids, anthocyanins), terpenoids and essential oils (lemongrass oil), drugs (vinblastine, curcumin), toxins and lectins (abrin, ricin, concanavalin A), and polymers such as rubber, gums and resins',
    why: 'Secondary does not mean useless: it is dispensable to the cell’s core metabolism, yet many drugs, dyes, spices and rubber come from it.',
    say: null,
  },
  // pp. 534–536, 540–541
  {
    topic: 0,
    kind: 'mixup',
    q: 'Lipids are small, so why are they in the acid-insoluble fraction, and are they polymers?',
    a: 'Each lipid molecule is small, so by size it would be acid-soluble. But in the cell lipids assemble into membranes and droplets or vesicles; when tissue is ground these form large aggregates that are trapped in the cloth with the true macromolecules. So lipids are found with the macromolecules by behaviour, not by size, and they are not polymers: they lack the repeating monomer units of proteins, nucleic acids and polysaccharides',
    why: 'In an assertion-reason item, “lipids are found in the acid-insoluble fraction though their molecular weight is low” is true, and “lipids are polymers of fatty acids and glycerol” is the false reason.',
    say: 'lipids: small molecules in big company',
  },
  // pp. 536, 540–541
  {
    topic: 0,
    kind: 'mistake',
    q: 'Which component makes up most of a cell, and what are the average figures?',
    a: 'Water: it is the most abundant component, about 70–90% of a cell by mass, then proteins 10–15%, nucleic acids 5–7%, carbohydrates about 3%, lipids about 2% and inorganic ions about 1%. By element, oxygen, carbon, hydrogen and nitrogen dominate, and carbon and hydrogen are far more abundant in living organisms than in the Earth’s crust',
    why: 'These are averages, not constants: they shift with cell type, age and conditions. All life is built from the same toolkit (the same amino acids, sugars and nucleotides); only the proportions and sequences differ.',
    say: null,
  },
  // pp. 540–541
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Micromolecule or macromolecule, acid-soluble or acid-insoluble: what one question settles it?',
    a: 'Ask whether it is a single small unit (a sugar, an amino acid, a nucleotide) or a long chain or a membrane. A single unit is an acid-soluble micromolecule; a chain or a membrane is acid-insoluble. Glucose, alanine and a nucleotide are acid-soluble; a lipid is the classic small molecule found in the acid-insoluble fraction',
    why: 'The lipid exception is the main one to memorise against this rule. For primary against secondary: alanine and glucose are primary, morphine and rubber are secondary.',
    say: null,
  },

  // ── Topic 02 · Carbohydrates, Lipids & Amino Acids ──
  // pp. 544, 546–547, 550
  {
    topic: 1,
    kind: 'remember',
    q: 'How are carbohydrates classified, and which are storage and which structural?',
    a: 'Carbohydrates are polyhydroxy aldehydes or ketones, classed by hydrolysis. Monosaccharides cannot be hydrolysed further: glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, is an aldohexose, fructose a ketohexose, ribose and deoxyribose pentoses. Disaccharides are two sugars joined by a glycosidic bond: sucrose is glucose + fructose, maltose glucose + glucose, lactose glucose + galactose. Polysaccharides: starch (plant storage), glycogen (animal storage, branched, in liver and muscle), cellulose (structural, plant cell wall, an unbranched β-glucose polymer), inulin (a fructose polymer) and chitin (structural, nitrogen-containing, in arthropod exoskeletons and fungal walls)',
    why: 'A sugar with a free aldehyde or ketone group is reducing (glucose, fructose, maltose, lactose); sucrose, with both groups locked in its glycosidic bond, is non-reducing.',
    say: null,
  },
  // pp. 544, 550
  {
    topic: 1,
    kind: 'mistake',
    q: 'Nucleoside or nucleotide: which one carries the phosphate?',
    a: 'A nucleoside is a base + a sugar. A nucleotide is a base + a sugar + a phosphate. The nucleotide is the one with the phosphate',
    why: 'The one added phosphate is the whole difference, and it is easy to swap the two words under pressure.',
    say: 'nucleoTide = phosphaTe',
  },
  // pp. 544–546, 548–550
  {
    topic: 1,
    kind: 'remember',
    q: 'What four groups sit on an amino acid’s α-carbon, and why is glycine the one achiral standard amino acid?',
    a: 'The central α-carbon carries a carboxyl (–COOH), an amino group (–NH<sub>2</sub>), a hydrogen and a variable R-group that sets the identity. Chirality needs four different groups on that carbon. Glycine’s R-group is only H, so its α-carbon holds two H atoms and is not chiral: glycine is the lone achiral standard amino acid, the smallest and simplest. Every other standard amino acid has a non-H side chain and is chiral',
    why: 'At physiological pH a neutral amino acid is a dipolar ion (zwitterion), –NH<sub>3</sub><sup>+</sup> and –COO<sup>−</sup> together with net charge zero, which is why it dissolves in water and acts as a buffer; acidic and basic amino acids carry an overall charge at that pH.',
    say: 'Glycine = no handedness',
  },
  // pp. 545, 548, 550
  {
    topic: 1,
    kind: 'mixup',
    q: 'Which bond joins sugars, which joins amino acids, which joins glycerol to fatty acids, and what do all three share?',
    a: 'Sugars: the glycosidic bond. Amino acids: the peptide bond, –CO–NH–. Glycerol and a fatty acid: the ester bond, –CO–O–. All three form by removing water (dehydration or condensation) and are reversed by adding water, as in digestion. A triglyceride is glycerol with three fatty acids on its three –OH groups',
    why: 'A phospholipid is glycerol + two fatty acids + a phosphate group (usually carrying a small polar group, such as choline in lecithin): amphipathic, a water-loving head with water-fearing tails, so it forms bilayers (lecithin is the classic example).',
    say: null,
  },
  // pp. 545, 547, 550
  {
    topic: 1,
    kind: 'shortcut',
    q: 'How do you identify a molecule fast: sugar, fat or amino acid?',
    a: 'Sort by category before names. Ask three questions in order: is it a sugar, a fat or an amino acid? Storage or structural? Primary or secondary metabolite? Three quick filters leave one option in most items',
    why: 'For a fat add one check: a C=C double bond makes the fatty acid unsaturated, kinked and loosely packed, so usually liquid (oils); none means saturated, usually solid (ghee, butter), with coconut oil the plant exception.',
    say: null,
  },

  // ── Topic 03 · Proteins, Nucleic Acids & Structure ──
  // pp. 552–553, 555, 558
  {
    topic: 2,
    kind: 'remember',
    q: 'What are the four levels of protein structure, and what holds each?',
    a: 'Primary: the sequence of amino acids, held by covalent peptide bonds. Secondary: local regular folding of the backbone, held by hydrogen bonds, as the right-handed α-helix or the β-pleated sheet. Tertiary: the overall 3-D shape of one chain, held by H-bonds, ionic bonds, disulfide bridges and hydrophobic interactions. Quaternary: two or more folded chains as one unit, as in haemoglobin (two α and two β subunits), held mainly by non-covalent interactions. A single-chain protein stops at tertiary',
    why: 'Fibrous proteins (keratin, collagen, silk fibroin) are thread-like, insoluble and structural; globular proteins (enzymes, haemoglobin, antibodies) are compact, soluble and functional.',
    say: null,
  },
  // pp. 552–553, 556, 558
  {
    topic: 2,
    kind: 'remember',
    q: 'What is a nucleotide, and how do DNA and RNA differ?',
    a: 'A nucleotide is a nitrogenous base + a pentose sugar + a phosphate group; a nucleoside lacks the phosphate. Nucleotides join by phosphodiester bonds, formed by removing water, into a sugar–phosphate backbone with the bases sticking out. DNA has deoxyribose, is usually double-stranded and uses thymine; RNA has ribose, is mostly single-stranded and uses uracil',
    why: 'In DNA, A pairs with T by two H-bonds and G with C by three; the two strands run antiparallel, backbones outside, paired bases inside.',
    say: 'nucleoTide = phosphaTe',
  },
  // pp. 552–553, 556–558
  {
    topic: 2,
    kind: 'mixup',
    q: 'Purine or pyrimidine: which bases are which?',
    a: 'Count the rings. The purines, adenine (A) and guanine (G), are double-ring. The pyrimidines, cytosine (C), thymine (T) and uracil (U), are single-ring. A purine always pairs with a pyrimidine (A with T, G with C), which keeps every rung of the DNA ladder the same width',
    why: 'T belongs to DNA and U replaces it in RNA.',
    say: 'PURe As Gold = purines A, G',
  },
  // pp. 553–555, 557–558
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does boiling or acid break a protein’s peptide bonds?',
    a: 'No. Heat, extreme pH and strong agents break the weak bonds (hydrogen, ionic, hydrophobic) that hold the secondary, tertiary and quaternary levels. The covalent peptide bonds usually survive, so denaturation destroys the shape, not the sequence: the primary structure stays intact and the function is lost',
    why: 'Boiled egg white sets solid because its folds are destroyed. In an assertion-reason item, “heat breaks the peptide bonds” is the false reason.',
    say: null,
  },
  // pp. 553–554, 557–558
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which DNA sample is more stable or harder to melt?',
    a: 'Do not calculate; count hydrogen bonds. G≡C has three, A=T has two. More G–C means more H-bonds, more stability and a higher temperature to separate the strands. The sample that separates at the higher temperature is the richer in G–C',
    why: 'The two strands are complementary, not identical: where one has A the other has T, where one has G the other has C.',
    say: null,
  },

  // ── Topic 04 · Enzymes ──
  // pp. 559–561, 563, 567
  {
    topic: 3,
    kind: 'remember',
    q: 'What does an enzyme do, and how does the active site work?',
    a: 'An enzyme is a biocatalyst, mostly protein (ribozymes are catalytic RNA), that speeds a specific reaction by lowering its activation energy, <i>E</i><sub>a</sub>, without being consumed. The substrate binds the active site to form the enzyme–substrate (ES) complex: E + S ⇌ ES → EP → E + P (EP is the enzyme–product complex, formed before the product is released). The enzyme stabilises the transition state; the energy levels of reactants and products are unchanged. Lock-and-key (Fischer) treats the site as rigid; induced fit (Koshland) as flexible, the more accurate modern view',
    why: 'A competitive inhibitor mimics the substrate and sits in the active site (malonate against succinate on succinate dehydrogenase), and more substrate reverses it; a non-competitive one binds elsewhere and is not reversed by more substrate.',
    say: null,
  },
  // pp. 561–563, 566–567
  {
    topic: 3,
    kind: 'remember',
    q: 'What do the temperature, pH and substrate-concentration curves look like?',
    a: 'Temperature: activity rises to an optimum, about 37 °C for human enzymes, then falls sharply as heat denatures the protein, a skewed bell. pH: each enzyme has its own optimum (salivary amylase about 6.8, pepsin about 2, pancreatic trypsin about 8). Substrate concentration: the rate rises steeply, then plateaus at <i>V</i><sub>max</sub> once every active site is busy',
    why: 'The far side of the temperature curve is a crash, not a dip: a heat-denatured enzyme usually does not recover on cooling.',
    say: null,
  },
  // pp. 560, 565–567
  {
    topic: 3,
    kind: 'mixup',
    q: 'Coenzyme, prosthetic group, apoenzyme, holoenzyme: which is which?',
    a: 'A cofactor is the non-protein part. A coenzyme is loosely bound, organic and often vitamin-derived (NAD<sup>+</sup> from niacin); a prosthetic group is organic and tightly or permanently bound (haem; FAD in succinate dehydrogenase); a metal ion is an inorganic cofactor (Zn<sup>2+</sup> in carboxypeptidase, Mg<sup>2+</sup>). FAD is a coenzyme when loosely bound, but a prosthetic group in succinate dehydrogenase. The apoenzyme is the inactive protein part alone; apoenzyme + cofactor = the active holoenzyme',
    why: 'Apo = absent (inactive), holo = whole (active).',
    say: 'Co-enzyme casual, Prosthetic permanent',
  },
  // pp. 559–560, 565–567
  {
    topic: 3,
    kind: 'mistake',
    q: 'Does an enzyme shift the equilibrium or raise the yield?',
    a: 'No. An enzyme lowers the barrier for the forward and the reverse reaction equally: it changes the rate, never the equilibrium position, only the time taken. It leaves Δ<i>G</i> untouched, so on its own it cannot make a thermodynamically unfavourable reaction occur',
    why: 'The false statement in an enzyme item is often “shifts the equilibrium” or “increases the yield”; enzymes are not consumed, but heat or extreme pH denatures them.',
    say: 'catalyst = route-finder, not bulldozer (no equilibrium shift)',
  },
  // pp. 560–561, 563–564, 567
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you name the enzyme class fastest?',
    a: 'Key off the verb in the reaction. The six IUB classes (OTHLIL): Oxidoreductases (redox), Transferases (move a group), Hydrolases (cut with water), Lyases (add or remove groups to form or at a double bond, not by hydrolysis), Isomerases (rearrange), Ligases (join two molecules, using energy, usually from ATP)',
    why: 'Worked cases: breaking a peptide bond with water is a hydrolase; moving a phosphate from ATP to glucose is a transferase; stitching two DNA fragments with ATP is a ligase.',
    say: null,
  },

  // ── Additional A · Enzyme Kinetics: Michaelis-Menten Framework ──
  // pp. 568–569
  {
    topic: 4,
    kind: 'remember',
    q: 'What do the Michaelis–Menten equation, <i>K</i><sub>m</sub> and <i>V</i><sub>max</sub> say, and what does the Lineweaver–Burk plot give?',
    a: 'For one substrate, with <i>v</i> the initial velocity, <i>v</i> = <frac><num><i>V</i><sub>max</sub> [<i>S</i>]</num><den><i>K</i><sub>m</sub> + [<i>S</i>]</den></frac>. <i>V</i><sub>max</sub> is the velocity with every active site occupied, reached only asymptotically. <i>K</i><sub>m</sub> is the substrate concentration at which <i>v</i> = <frac><num><i>V</i><sub>max</sub></num><den>2</den></frac>; a low <i>K</i><sub>m</sub> usually means tight binding. The reciprocal form is a straight line: <frac><num>1</num><den><i>v</i></den></frac> = <frac><num><i>K</i><sub>m</sub></num><den><i>V</i><sub>max</sub></den></frac> · <frac><num>1</num><den>[<i>S</i>]</den></frac> + <frac><num>1</num><den><i>V</i><sub>max</sub></den></frac>, with slope <frac><num><i>K</i><sub>m</sub></num><den><i>V</i><sub>max</sub></den></frac>, <i>y</i>-intercept <frac><num>1</num><den><i>V</i><sub>max</sub></den></frac> and <i>x</i>-intercept −<frac><num>1</num><den><i>K</i><sub>m</sub></den></frac>',
    why: 'Worked data: a <i>y</i>-intercept of 0.02 gives <i>V</i><sub>max</sub> = <frac><num>1</num><den>0.02</den></frac> = 50 μM min<sup>−1</sup>, and a slope of 0.4 min gives <i>K</i><sub>m</sub> = 0.4 × 50 = 20 μM; check: at <frac><num><i>V</i><sub>max</sub></num><den>2</den></frac> = 25 μM min<sup>−1</sup> the table gives [<i>S</i>] = 20 μM.',
    say: null,
  },
  // pp. 569–570
  {
    topic: 4,
    kind: 'remember',
    q: 'How do competitive and non-competitive inhibitors change <i>V</i><sub>max</sub> and <i>K</i><sub>m</sub>?',
    a: 'For pure inhibition of each kind: competitive (the active site): <i>V</i><sub>max</sub> unchanged, <i>K</i><sub>m</sub><sup>app</sup> = <i>K</i><sub>m</sub>(1 + <frac><num>[<i>I</i>]</num><den><i>K</i><sub>i</sub></den></frac>) increases, and excess substrate reverses it; on a Lineweaver–Burk plot the lines meet on the <i>y</i>-axis (same <frac><num>1</num><den><i>V</i><sub>max</sub></den></frac>). Non-competitive (a different, allosteric site): <i>V</i><sub>max</sub><sup>app</sup> = <frac><num><i>V</i><sub>max</sub></num><den>1 + <frac><num>[<i>I</i>]</num><den><i>K</i><sub>i</sub></den></frac></den></frac> decreases, <i>K</i><sub>m</sub> unchanged, and excess substrate does not reverse it',
    why: 'Checks: if <i>K</i><sub>m</sub><sup>app</sup> doubles, 1 + <frac><num>[<i>I</i>]</num><den><i>K</i><sub>i</sub></den></frac> = 2 and [<i>I</i>] = <i>K</i><sub>i</sub>; if <i>V</i><sub>max</sub> falls to 60%, 1 + <frac><num>[<i>I</i>]</num><den><i>K</i><sub>i</sub></den></frac> = <frac><num>1</num><den>0.6</den></frac> ≈ 1.667. For pure non-competitive inhibition the lines share the <i>x</i>-intercept.',
    say: null,
  },

  // ── Additional B · Vitamins: Solubility Classification ──
  // pp. 571–573
  {
    topic: 5,
    kind: 'remember',
    q: 'How do water-soluble and fat-soluble vitamins differ?',
    a: 'Water-soluble (the B-complex and vitamin C): absorbed directly into the portal circulation, not stored in bulk (B<sub>12</sub> is the exception, the liver holds a store), the excess leaves in urine so regular intake is needed, the B-complex vitamins act as coenzyme precursors, and deficiency signs appear in weeks to months. Fat-soluble (A, D, E, K): not water-soluble, so they travel with the lipids; absorbed with dietary fat (bile salts and chylomicrons), stored in liver and adipose tissue, so they can accumulate and cause toxicity',
    why: 'Fat malabsorption therefore threatens all four fat-soluble vitamins, vitamin K among them; vitamin A can reach toxic levels (hypervitaminosis A).',
    say: null,
  },
  // pp. 572–573
  {
    topic: 5,
    kind: 'remember',
    q: 'Which coenzymes come from which vitamins, and which deficiency disease goes with which vitamin?',
    a: 'B<sub>1</sub> (thiamine) gives TPP; B<sub>2</sub> (riboflavin) gives FAD and FMN; B<sub>3</sub> (niacin) gives NAD<sup>+</sup> and NADP<sup>+</sup>; B<sub>6</sub> (pyridoxine) gives pyridoxal phosphate, used in transamination; folate gives tetrahydrofolate; pantothenic acid gives coenzyme A. Deficiency: B<sub>1</sub> beriberi, B<sub>3</sub> pellagra, B<sub>12</sub> megaloblastic anaemia (pernicious anaemia when intrinsic factor is missing), C scurvy, A night blindness, D rickets in children and osteomalacia in adults, K prolonged bleeding',
    why: 'Vitamin B<sub>12</sub> is made only by microorganisms and reaches us in animal foods, so a strict vegan needs a supplement or fortified food.',
    say: null,
  },

  // ── Additional C · Biochemical Tests for Biomolecule Identification ──
  // pp. 574–575, 577
  {
    topic: 6,
    kind: 'remember',
    q: 'What do the Molisch, Benedict’s and iodine tests detect, and what is a positive result?',
    a: 'Molisch (α-naphthol, then conc. H<sub>2</sub>SO<sub>4</sub> run down the side): any carbohydrate, a violet ring at the interface. Benedict’s (alkaline CuSO<sub>4</sub>, boiled): reducing sugars (glucose, fructose, maltose, lactose), green to yellow to orange to a brick-red Cu<sub>2</sub>O precipitate; sucrose is negative unless first hydrolysed with acid to glucose + fructose. Iodine (KI<sub>3</sub>): starch, a blue-black colour, because iodine fits the helical cavities of amylose; cellulose, with its β-1,4 chains, gives none',
    why: 'A sample positive to Molisch and iodine but negative to Benedict’s is starch.',
    say: null,
  },
  // pp. 575–577
  {
    topic: 6,
    kind: 'remember',
    q: 'What do the Biuret and Sudan III tests detect, and why does glycine give a negative Biuret test?',
    a: 'Biuret (dilute CuSO<sub>4</sub> in NaOH): peptide bonds, so proteins, a violet-purple colour; at least two peptide bonds are needed. Free amino acids such as glycine have no peptide bond and are negative: the test detects peptide bonds, not amino groups. Sudan III (in ethanol): lipids, red-orange staining of the droplets, because the dye is fat-soluble and dissolves in the hydrophobic phase',
    why: 'A sample giving Molisch, Biuret and Sudan III positives holds a carbohydrate, a protein and a lipid.',
    say: null,
  },

  // ── Additional D · Cholesterol Structure and Amino Acid Metabolism ──
  // pp. 578–579
  {
    topic: 7,
    kind: 'remember',
    q: 'What is cholesterol, and what does it do in a membrane?',
    a: 'A tetracyclic sterol: four fused rings (three six-membered and one five-membered), a C3 hydroxyl (the only polar part), a short non-polar tail at C17 and one C5=C6 double bond; formula C<sub>27</sub>H<sub>46</sub>O. It is the characteristic sterol of animal membranes (plant membranes carry mainly phytosterols, with only traces of cholesterol), set between the phospholipid chains with its hydroxyl toward the aqueous surface. At high temperature it decreases fluidity by restricting chain movement; at low temperature it prevents tight packing and keeps the membrane fluid, a fluidity buffer',
    why: 'It is also the parent of the steroid hormones (cortisol, aldosterone, testosterone, oestradiol) and bile salts; vitamin D<sub>3</sub> is formed in skin by UV action on 7-dehydrocholesterol, a sterol of the same pathway. Cholesterol is built from acetyl-CoA, not from amino acids.',
    say: null,
  },
  // pp. 579–581
  {
    topic: 7,
    kind: 'remember',
    q: 'How does amino-acid nitrogen reach urea?',
    a: 'Transamination: a reversible transfer of an α-amino group from an amino acid to an α-keto acid, by a transaminase with pyridoxal phosphate (from vitamin B<sub>6</sub>); ALT links alanine with pyruvate, AST aspartate with oxaloacetate. Most amino acids pass their nitrogen to α-ketoglutarate, so glutamate is the central collection point. Glutamate dehydrogenase (mitochondrial, in liver) then deaminates it: glutamate + NAD<sup>+</sup> + H<sub>2</sub>O → α-ketoglutarate + NH<sub>3</sub> + NADH + H<sup>+</sup>. The toxic ammonia enters the urea cycle in the liver: five steps, carbamoyl phosphate synthetase I and ornithine transcarbamylase in the mitochondria, then argininosuccinate synthetase, argininosuccinate lyase and arginase in the cytosol, with ornithine regenerated',
    why: 'The cycle costs 3 ATP (4 high-energy phosphate bonds), and the two nitrogens in urea come from NH<sub>3</sub> and from aspartate. In transamination α-ketoglutarate is the acceptor; glutamate is where the nitrogen is collected.',
    say: null,
  },

  // ── Additional F · What NEET Actually Asks ──
  // pp. 583–586, 587–590
  {
    topic: 9,
    kind: 'remember',
    q: 'How does the book say NEET asks this chapter, and what are the six question shapes?',
    a: 'The book’s estimate from past papers, not official figures: about 2–3 questions a paper, in five clusters: enzymes (<i>K</i><sub>m</sub>, <i>V</i><sub>max</sub>, holoenzyme and apoenzyme, ribozymes, inhibition), amino acids and proteins, lipids and carbohydrates, nucleic acids and nucleotides, and analysis of tissue composition. The six shapes: fact or definition recall, find the incorrect statement, assertion-reason, match the column, identify a structure (a peptide bond joins a carbonyl carbon to an amino nitrogen), and which set lists only secondary metabolites',
    why: 'In assertion-reason: is A true, is R true, does R directly explain A? Both true without that explanation is option (b).',
    say: null,
  },
  // pp. 586–590
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which traps does the book say recur in this chapter?',
    a: 'Calling lipids polymers or true macromolecules: they are small molecules found in the acid-insoluble fraction because they are trapped as membrane vesicles. Swapping apoenzyme (inactive protein) and holoenzyme (active whole). Saying an enzyme shifts the equilibrium. Swapping competitive (the active site) and non-competitive (elsewhere) inhibition. Calling lysine neutral: lysine and arginine are basic. Calling chitin a storage polysaccharide: it is structural and nitrogen-containing, a polymer of N-acetylglucosamine',
    why: 'Check against the graded set: glycine, serine and tyrosine are non-essential, so “the diet must contain them” is false; of glycine, histidine, arginine and glutamine, arginine is the most basic.',
    say: null,
  },
];
