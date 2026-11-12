/**
 * KEY POINTS for Chemistry Class 12, Chapter 10 (Biomolecules).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–D are 4–7; Additional
 * topic E, the book's Summary Checklist, is 8 and has no points (as in
 * Amines); Additional topic F, What JEE and NEET Actually Ask (the book's
 * Addendum P), is 9. No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Definitions and Cheat Sheet Box.
 * Common mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip,
 * with a worked example or practice answer. `say`: the cheat sheet's first two
 * memory aids, word for word, in the Ch 1–4 form: no quotation marks, and a
 * label after " — " (the book's own gloss where it has one; these have none).
 * Topics 01–04 print three, three, four and three aids, so the chapter has
 * eight lines, all word for word; Topic 04's classes aid keeps the book's own
 * label-first form. Two are looser than the chemistry: sucrose is the lone
 * non-reducing sugar only among the named mono- and disaccharides, and n beads
 * give n − 1 knots for one linear chain; the point that carries each says so.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic F: its distribution and traps.
 *
 * Where the book's claim is looser than the chemistry, the point is true:
 * "only sucrose" non-reducing, scoped to the named mono- and disaccharides;
 * glucose's equilibrium rotation +52.5° throughout (NCERT's value; tables
 * give +52.7°); enzymes' optimum pH as NCERT's 5–7 with pepsin's pH 2 beside
 * it; amine hormones without the
 * book's "water-soluble" (thyroxine is lipid-soluble); fibrous proteins without
 * "keratin (hair, wool, silk)" (silk's protein is fibroin) and without the
 * fibrous/globular bond contrast; G–C pairs with three hydrogen bonds, never
 * "G=C"; n − 1 peptide bonds for a linear chain; denaturation's levels as the
 * secondary and tertiary structure, and the quaternary where there is one; no
 * unit for specific rotation; trypsin not named (it gives peptides, not amino
 * acids); the A–T/G–C hydrogen bonds as what holds the strands, without "only".
 *
 * A few points are narrower than the book's sentence, or complete it, in our
 * words: fructose a reducing sugar named alone, not "every monosaccharide";
 * the carbohydrate definition left out, the formula caveat kept; fructose's
 * furanose as the ring its C5–OH closes, not its only ring; invert sugar's
 * sign without the "sweet-right to sour-left" mnemonic (invert sugar is not
 * sour); basic amino acids by an extra basic group, the extra –NH₂ named for
 * lysine only; pI as the average of two pKa values for an amino acid with no
 * ionisable side chain; the anomeric effect without "glucose is unusual";
 * Schiff's failure without calling Tollens' reagent the stronger oxidant;
 * F's "a JEE Main 2022 question" as an unattributed cellulose item, and its
 * shares labelled the book's estimate.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. D and L plain
 * capitals, α and β upright (the addenda's spelled-out alpha and beta written
 * α and β), rotation signs (+) and (−) with a real minus, [α]<sub>D</sub> upright.
 * Formulas upright, bonds as en dashes (–CHO, –CO–NH–, C1–C4, A–T, G–C);
 * zwitter ion H<sub>3</sub>N<sup>+</sup>–CHR–COO<sup>−</sup>; primes U+2032 (1′, 5′,
 * 2′-OH); sequences keep their hyphens (5′-ATGCTTCA-3′); ratios with ∶. A value
 * is kept with its unit, and pH or pI with its value, by a no-break space.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Carbohydrates ──
  // pp. 481–482, 488
  {
    topic: 0,
    kind: 'remember',
    q: 'Which reagents build the open-chain structure of glucose, and what does each one prove?',
    a: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> fixes six carbons; where they sit is the unknown. Prolonged heating with HI gives n-hexane: the six carbons form an unbranched chain. Hydroxylamine gives an oxime and HCN a cyanohydrin: a >C=O group is present. Bromine water, a mild oxidant that attacks an aldehyde but not a ketone, gives gluconic acid, a six-carbon monocarboxylic acid: the carbonyl is an aldehydic –CHO at the chain end. Acetic anhydride gives a stable penta-acetate: five –OH groups, on five different carbons. Conc. HNO<sub>3</sub> turns glucose and gluconic acid into the same dicarboxylic acid, saccharic acid: the far end was a primary alcohol, –CH<sub>2</sub>OH. Assembled: CHO–(CHOH)<sub>4</sub>–CH<sub>2</sub>OH, which Fischer fixed as D-(+)-glucose',
    why: 'Yet glucose gives no Schiff’s test and no hydrogensulphite adduct with NaHSO<sub>3</sub>, its penta-acetate ignores hydroxylamine, and it crystallises in two forms, α (m.p. 419 K) and β (m.p. 423 K): the C5–OH adds across the –CHO, closing a cyclic hemiacetal.',
    say: null,
  },
  // pp. 479–481, 484, 488
  {
    topic: 0,
    kind: 'remember',
    q: 'How are carbohydrates classed, and which of sucrose, maltose and lactose reduce Tollens’ reagent?',
    a: 'By how many units hydrolysis releases. A monosaccharide cannot be hydrolysed into anything simpler (glucose, fructose, ribose); an oligosaccharide gives 2 to 10, most commonly a disaccharide giving two; a polysaccharide gives a large number and is not sweet (starch, cellulose, glycogen). A second label cuts across: a reducing sugar keeps a free carbonyl or hemiacetal end that reduces Tollens’ or Fehling’s reagent. Maltose, two α-D-glucose joined C1–C4, and lactose, β-D-galactose joined C1–C4 to β-D-glucose, each keep one end free and reduce; so does fructose, a free monosaccharide. Sucrose, α-D-glucose joined C1–C2 to β-D-fructose, locks both reducing ends in the bond and does not. Among the named mono- and disaccharides, sucrose is the only non-reducing one',
    why: 'The old formula C<sub><i>x</i></sub>(H<sub>2</sub>O)<sub><i>y</i></sub> is a hint, not a definition: acetic acid fits it as C<sub>2</sub>(H<sub>2</sub>O)<sub>2</sub> yet is no sugar, while rhamnose, C<sub>6</sub>H<sub>12</sub>O<sub>5</sub>, is a carbohydrate that does not.',
    say: 'Sucrose is the lone non-reducing famous sugar.',
  },
  // pp. 480–482, 487–488
  {
    topic: 0,
    kind: 'mixup',
    q: 'Pyranose or furanose, anomeric C1 or C2, α or β, D or (+): which is which for glucose and fructose?',
    a: 'Glucose is an aldohexose: its C5–OH adds to the C1 aldehyde, closing a six-membered pyranose ring, and C1, the old carbonyl carbon, becomes the anomeric carbon, a new chiral centre. Fructose is a ketohexose with its keto group at C2: its C5–OH adds to C2, closing a five-membered furanose ring, with C2 anomeric. The anomers α and β differ only in the –OH at the anomeric carbon, α down or right and β up or left; everything else is identical. D or L compares the configuration of the lowest asymmetric carbon, C5 in glucose, with glyceraldehyde: –OH on the right in the Fischer projection is D. (+) or (−) is the measured rotation of plane-polarised light. The two are independent: D-glucose is (+), D-fructose (−)',
    why: 'In glucose C5 is the carbon whose –OH closes the ring, not the new stereocentre, and C6, the terminal –CH<sub>2</sub>OH, is not even chiral: neither can be anomeric.',
    say: 'glucose Pyranose (6) / fructose Furanose (5).',
  },
  // pp. 481, 486–488
  {
    topic: 0,
    kind: 'mistake',
    q: 'Is cellulose simply unbranched starch?',
    a: 'No: both are glucose polymers, but the difference is α against β. Starch is α-D-glucose: amylose a linear C1–C4 chain, amylopectin a C1–C4 chain branched through C1–C6 links. Glycogen, the animal starch, is α-D-glucose too, C1–C4 with C1–C6 branches, highly branched. Cellulose is β-D-glucose joined C1–C4 in a linear chain. The β-linkage is why humans cannot digest cellulose but do digest α-linked starch: the α/β switch is the digestibility switch',
    why: 'In an MCQ, α-D-glucose with C1–C4 links describes amylose, not cellulose; C1–C6 branching belongs to amylopectin and glycogen; and cellulose contains no fructose.',
    say: null,
  },
  // pp. 480–481, 484, 487–488
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Sucrose is hydrolysed: what comes out, and which way does the mixture rotate light? The fast way?',
    a: 'Run two checks: which monosaccharides come out, and is any anomeric carbon left free? Then count carbons: a C<sub>12</sub> disaccharide yields exactly two C<sub>6</sub> units, never three. Sucrose, C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>, gives one glucose and one fructose; its C1–C2 bond, the one that made it non-reducing, is the bond hydrolysis breaks. For the sign, average the specific rotations of the equimolar mixture: ((+52.5°) + (−92.4°))/2 ≈ −20.0°. Sucrose, +66.5°, was dextrorotatory; the mixture is laevorotatory. The sign has inverted from (+) to (−), so the product is called invert sugar',
    why: 'Glucose is made this way, by boiling sucrose with dilute HCl or H<sub>2</sub>SO<sub>4</sub> in alcoholic solution, and commercially from starch, boiled with dilute H<sub>2</sub>SO<sub>4</sub> at about 393 K under 2–3 atm.',
    say: null,
  },

  // ── Topic 02 · Proteins & Amino Acids ──
  // pp. 489–490, 495, 497
  {
    topic: 1,
    kind: 'remember',
    q: 'Which amino acids build proteins, how are they classed, and which one is optically inactive?',
    a: 'Only α-amino acids, R–CH(NH<sub>2</sub>)–COOH, with the –NH<sub>2</sub> on the carbon next to the carboxyl; R, the side chain, makes one differ from another. The side chain decides acid or base: an extra –COOH makes an amino acid acidic (aspartic and glutamic acid), an extra basic group basic (lysine, with its extra –NH<sub>2</sub>; arginine; histidine), neither neutral (glycine, alanine). Essential amino acids cannot be synthesised by the body and must come from the diet (valine, leucine, lysine); non-essential ones the body makes. Glycine, R = H, has two identical H atoms on its α-carbon, so it is not asymmetric and is optically inactive; every other standard amino acid is chiral. Naturally occurring amino acids are L, a configuration that says nothing about the sign of rotation',
    why: 'L, like D, is fixed by correlation with glyceraldehyde: an L-amino acid has its amino group on the left in the Fischer projection.',
    say: 'side chain decides acid/base.',
  },
  // pp. 490–491, 497
  {
    topic: 1,
    kind: 'remember',
    q: 'What is a peptide bond, how many does a chain of <i>n</i> amino acids hold, and what holds each level of protein structure?',
    a: 'The amide –CO–NH–, formed when the –COOH of one amino acid condenses with the –NH<sub>2</sub> of the next and a water molecule leaves. A linear chain of <i>n</i> amino acids has <i>n</i> − 1 peptide bonds, and <i>n</i> − 1 waters leave as it forms. Names run from the N-terminal, free –NH<sub>2</sub>, on the left to the C-terminal, free –COOH, on the right: glycylalanine, Gly–Ala, is glycine’s carboxyl joined to alanine’s amino group. Primary structure, the sequence, is held by peptide (covalent) bonds; secondary, the α-helix or β-pleated sheet, by hydrogen bonds between backbone >C=O and N–H; tertiary, the overall fold into a fibrous or globular shape, by hydrogen bonds, disulphide, ionic and van der Waals forces; quaternary, the arrangement of several sub-units, by forces between them, as in haemoglobin’s four chains',
    why: 'The C–N peptide bond has about 40% double-bond character, the nitrogen lone pair delocalising onto the carbonyl, so each –CO–NH– unit is planar, trans favoured, with no free rotation about C–N.',
    say: '<i>n</i> beads → <i>n</i> − 1 knots.',
  },
  // pp. 489, 491–492, 496
  {
    topic: 1,
    kind: 'mixup',
    q: 'Zwitter ion, cation or anion: which form does an amino acid take, and which way does it move in an electric field?',
    a: 'In water the –COOH hands its proton to the –NH<sub>2</sub> on the same molecule, the carboxyl being a stronger acid than the protonated amino group: the zwitter ion H<sub>3</sub>N<sup>+</sup>–CHR–COO<sup>−</sup>, dipolar yet neutral overall, the main form at moderate pH. So amino acids are crystalline, high-melting, water-soluble, salt-like and amphoteric. With HCl the COO<sup>−</sup> accepts a proton and alanine becomes the cation CH<sub>3</sub>–CH(NH<sub>3</sub><sup>+</sup>)–COOH; with NaOH the NH<sub>3</sub><sup>+</sup> loses one, giving the anion CH<sub>3</sub>–CH(NH<sub>2</sub>)–COO<sup>−</sup>. At the isoelectric point the amino acid is predominantly the zwitter ion, carries no net charge and does not migrate; below that pH its net charge is positive and it moves to the cathode, above it negative, to the anode',
    why: 'The fully protonated cation is the form only in strongly acidic solution, and the fully deprotonated anion only in strongly basic solution.',
    say: null,
  },
  // pp. 489–490, 492, 496–497
  {
    topic: 1,
    kind: 'mistake',
    q: 'Does denaturation break a protein’s peptide bonds?',
    a: 'No: heat, a change of pH or alcohol disrupts only the weak bonds, mainly hydrogen bonds, that hold the shape. The protein unfolds and loses its biological activity: the helix or sheet unwinds and the tertiary fold collapses, and with them the quaternary assembly of a protein that has one. The primary structure, the covalent sequence, is untouched, and the change is usually irreversible: egg white setting solid on boiling, milk curdling into paneer. Cleaving peptide bonds is hydrolysis, a different process',
    why: 'Hydrogen bonds stabilise the secondary and tertiary shape but do not join the residues into the chain; the peptide bond does that.',
    say: null,
  },
  // pp. 492, 494–495, 497
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Glutamic acid, lysine and valine: acidic, basic or neutral? And a 146-residue chain: how many peptide bonds and waters? The fast way?',
    a: 'Ignore the backbone’s own –NH<sub>2</sub> and –COOH and read only the side chain: extra –COOH ⇒ acidic, extra –NH<sub>2</sub> ⇒ basic, neither ⇒ neutral. Glutamic acid, R = –CH<sub>2</sub>CH<sub>2</sub>COOH, is acidic; lysine, R = –(CH<sub>2</sub>)<sub>4</sub>NH<sub>2</sub>, basic; valine, R = –CH(CH<sub>3</sub>)<sub>2</sub>, neutral. For chain arithmetic lock in <i>n</i> − 1 for both bonds and water: a 146-residue chain has 145 peptide bonds, and 145 waters were eliminated. A linear pentapeptide has 4 bonds; its assembly releases 4 waters, and complete hydrolysis consumes 4 and gives back the 5 amino acids',
    why: 'Keep the bond map across biomolecules: glycosidic joins sugars, peptide joins amino acids, phosphodiester joins nucleotides; a mismatch is the most common MCQ trap.',
    say: null,
  },

  // ── Topic 03 · Enzymes, Vitamins & Nucleic Acids ──
  // pp. 498–500, 507
  {
    topic: 2,
    kind: 'remember',
    q: 'What is an enzyme, how is it named, and how does it act on its substrate?',
    a: 'A biocatalyst, almost always a globular protein, that speeds up a specific biochemical reaction and is regenerated unchanged; one enzyme molecule may transform about a million substrate molecules a minute. It is named after its substrate, maltose → maltase, urea → urease, or after its reaction, oxidation–reduction → oxidoreductase. Its fold creates the active site, a pocket shaped for one substrate: the lock-and-key picture, and the reason each enzyme is specific. The enzyme first holds the substrate in the right orientation by weak forces (hydrogen bonds, ionic, van der Waals, dipole–dipole), then side-chain groups attack it, a serine –OH for instance acting as a nucleophile. The activation energy is lowered and the rate soars. Each enzyme works within a narrow window of optimum temperature, about 298–310 K, and of pH (about 5–7 as NCERT gives it; pepsin works best near pH 2)',
    why: 'Pepsin turns proteins into peptides in the stomach and diastase turns starch into maltose; co-enzymes and activators, small non-protein helpers such as vitamin-derived molecules or the ions Na<sup>+</sup>, Mn<sup>2+</sup> and Cu<sup>2+</sup>, enhance the activity.',
    say: null,
  },
  // pp. 498–499, 505–507
  {
    topic: 2,
    kind: 'remember',
    q: 'Which vitamins are fat-soluble, which water-soluble, and which disease does each deficiency cause?',
    a: 'Vitamins are organic compounds needed in small amounts that the body mostly cannot make, so they come from the diet. Fat-soluble A, D, E and K are stored in the liver and adipose tissue, and an excess is harmful because they accumulate. Water-soluble B-group and C are excreted in urine and must be taken regularly; B<sub>12</sub> is the one that can be stored. Deficiencies: A, xerophthalmia and night blindness; B<sub>1</sub> (thiamine), beri-beri; B<sub>2</sub> (riboflavin), cheilosis; B<sub>6</sub> (pyridoxine), convulsions; B<sub>12</sub>, pernicious anaemia; C (ascorbic acid), scurvy; D, rickets and osteomalacia; E, RBC fragility and muscular weakness; K, increased blood-clotting time',
    why: 'A fat-soluble vitamin whose deficiency increases the blood-clotting time is K; B<sub>12</sub>, though storable, is water-soluble, and its deficiency causes pernicious anaemia.',
    say: 'ADEK = fat-soluble.',
  },
  // pp. 499–500, 502, 506–507
  {
    topic: 2,
    kind: 'mixup',
    q: 'Nucleoside or nucleotide, DNA or RNA: what does each contain?',
    a: 'Base + sugar is a nucleoside, the base joined at the sugar’s 1′ carbon: adenine + ribose → adenosine. Nucleoside + phosphate is a nucleotide, the phosphate at the 5′ carbon: adenosine + phosphate → adenylic acid. The phosphate is the whole difference, and the nucleotide is the true building block. Nucleotides join through phosphodiester bonds, phosphate bridging the 3′ carbon of one sugar to the 5′ of the next, into a polynucleotide, a nucleic acid. DNA has 2-deoxyribose, one oxygen fewer than ribose, and the bases A, G, C and T; it is a double helix and the store of heredity. RNA has ribose and A, G, C and U; it is single-stranded, may fold back on itself, and carries out protein synthesis as mRNA, tRNA and rRNA. Purines: A, G; pyrimidines: C, T, U',
    why: 'Asked which base is present in RNA but not in DNA, answer uracil; students who memorised “DNA has thymine” flip the logic and pick thymine, the base found only in DNA.',
    say: 'U is Unique to RNA.',
  },
  // pp. 498, 500, 505–506
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does an enzyme shift a reaction’s equilibrium toward the products?',
    a: 'No: it only lowers the activation energy and raises the rate. The products and the position of equilibrium are unchanged, and the enzyme emerges regenerated. Being a protein, it also has an optimum temperature: well above it the enzyme denatures, its fold and so its active site are destroyed, the substrate can no longer bind, and catalysis stops. So an enzyme active at 310 K loses almost all its activity at 350 K',
    why: 'Urease hydrolyses urea but no other amide: its active site fits only urea, so other amides cannot dock.',
    say: null,
  },
  // pp. 502, 504–506
  {
    topic: 2,
    kind: 'shortcut',
    q: 'One DNA strand has A 22, G 18, C 15 and T 25: what is on the partner strand, and how many base pairs are there? The fast way?',
    a: 'A pairs with T and G with C, so each base on one strand dictates its partner: the complementary strand has A 25, T 22, G 15, C 18. Each base on one strand pairs with exactly one on the other, so the base pairs equal the bases on one strand: 22 + 18 + 15 + 25 = 80. Check with complementarity: across the duplex total A = total T (47) and total G = total C (33); if the numbers break this, you have slipped. An A–T pair is held by two hydrogen bonds and a G–C pair by three, so of two duplexes of equal length the G–C-rich one needs the higher temperature to separate its strands',
    why: 'Pairing is specific because a purine pairs only with the pyrimidine of the right shape: A cannot bond G, nor C bond T, so the two strands are complementary, not identical.',
    say: null,
  },

  // ── Topic 04 · Hormones ──
  // pp. 508–509, 515
  {
    topic: 3,
    kind: 'remember',
    q: 'What is a hormone, and which gland makes insulin, glucagon, thyroxine and adrenaline?',
    a: 'A chemical messenger secreted by an endocrine (ductless) gland directly into the blood, which carries it to a distant target organ; there, in very small amounts, it regulates a specific process and keeps the body in homeostasis. Only cells with the matching receptor respond. The pancreas makes insulin, which lowers blood glucose (uptake by cells, storage as glycogen), its deficiency causing diabetes mellitus, and glucagon, which raises it by breaking glycogen down. The thyroid makes thyroxine (T<sub>4</sub>), which sets the basal metabolic rate: its deficiency causes hypothyroidism, and a lack of iodine goitre. The adrenal medulla makes adrenaline and noradrenaline, for fight-or-flight: heart rate and blood glucose up. The adrenal cortex makes cortisol, for stress and metabolism; the testes and ovaries make testosterone and estradiol',
    why: 'Excess and deficiency both cause disorders; at this level the syllabus asks only the elementary idea, classification, examples and functions, not the hormones’ structures.',
    say: 'insulin → glucose in.',
  },
  // pp. 509, 514–515
  {
    topic: 3,
    kind: 'remember',
    q: 'What are the three chemical classes of hormones, with examples of each?',
    a: 'Steroid hormones are derived from cholesterol and are lipid-soluble: testosterone and estradiol, the sex hormones, and cortisol. Polypeptide or protein hormones are chains of amino acids joined by peptide bonds and are water-soluble: insulin and glucagon. Amine hormones are derived from the amino acid tyrosine: adrenaline (epinephrine), noradrenaline, and thyroxine, an iodinated tyrosine derivative',
    why: 'Thyroxine needs iodine and is an amine hormone, a tyrosine derivative, not a steroid.',
    say: 'classes = Steroid–Polypeptide–Amine (SPA).',
  },
  // pp. 508, 510, 512, 514
  {
    topic: 3,
    kind: 'mixup',
    q: 'Hormone, enzyme or vitamin: how do the three differ?',
    a: 'By role, origin and where they act. A hormone is a chemical messenger that signals or regulates; it is made by endocrine glands in the body and acts far from where it is made, via the blood, in extremely small amounts. An enzyme is a biocatalyst that speeds up reactions; it is a protein made in the body, acts at the reaction site and is regenerated. A vitamin is an accessory dietary factor, often a coenzyme; it is mostly obtained from the diet and acts as a helper to enzymes. A hormone tells a process to happen, an enzyme makes it happen faster, and a vitamin often helps the enzyme do so',
    why: 'Of maltase, ascorbic acid, glucagon and pepsin, the hormone is glucagon: maltase and pepsin are enzymes, and ascorbic acid is vitamin C.',
    say: null,
  },
  // pp. 508, 510, 514
  {
    topic: 3,
    kind: 'mistake',
    q: 'Which of insulin and glucagon lowers blood glucose, and how do the two hold it steady?',
    a: 'Insulin lowers it: after a meal it moves glucose out of the blood into cells and stores it as glycogen. Glucagon raises it, breaking glycogen down when glucose falls too low. Reversing them is the most common error. The gland senses the level: if it rises too high, insulin is released, and as the level returns to normal its secretion falls, negative feedback; if it falls too low, glucagon is released. This antagonistic pair holds blood glucose within a narrow band, hormonal homeostasis',
    why: 'Adrenaline and cortisol both tend to raise glucose under stress, so they are not an antagonistic pair; insulin and glucagon are.',
    say: null,
  },
  // pp. 509, 512–514
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A patient from an iodine-poor region has an enlarged thyroid and a slow metabolism: which hormone, which class, and why the goitre? The fast way?',
    a: 'Use the chapter’s links, thyroxine ↔ tyrosine and insulin ↔ glycogen. Thyroxine (T<sub>4</sub>) contains iodine, so a dietary iodine shortage limits its synthesis. When circulating thyroxine is too low, the body keeps stimulating the thyroid to make more; unable to, the gland grows larger, the enlargement called goitre. Metabolism slows because thyroxine sets the basal metabolic rate. It is an amine hormone, a derivative of the amino acid tyrosine',
    why: 'Lock in two mini-lists: the three classes with one example each, steroid testosterone, polypeptide insulin and amine adrenaline, and the insulin–glucagon antagonism.',
    say: null,
  },

  // ── Additional A · Mutarotation, Quantified ──
  // pp. 516–518
  {
    topic: 4,
    kind: 'remember',
    q: 'What are the specific rotations of α- and β-D-glucose and of their equilibrium mixture, and what is its composition?',
    a: 'α-D-(+)-glucose, m.p. 419 K, crystallised from a concentrated solution at 303 K: [α]<sub>D</sub> = +112°. β-D-(+)-glucose, m.p. 423 K, from a hot saturated solution at 371 K: +19°. Dissolve either in water and the rotation drifts until it settles at the same value from either side, about +52.5°; this change on standing, one anomer converting into the other through the open-chain form, is mutarotation. The equilibrium rotation is the population-weighted average: with <i>x</i> the α fraction, 112<i>x</i> + 19(1 − <i>x</i>) = 52.5, so 93<i>x</i> = 33.5 and <i>x</i> ≈ 0.36. About 36% α and 64% β, with less than 0.5% open chain',
    why: 'From the β side, with <i>y</i> the β fraction, 19<i>y</i> + 112(1 − <i>y</i>) = 52.5 gives 93<i>y</i> = 59.5 and <i>y</i> ≈ 0.64: the trio +112°, +19°, +52.5° and the 36∶64 split check each other.',
    say: null,
  },
  // pp. 517–519
  {
    topic: 4,
    kind: 'remember',
    q: 'Why does β-D-glucose outnumber α at equilibrium, and why does glucose fail Schiff’s test yet reduce Tollens’ reagent?',
    a: 'In the chair form of β-D-glucopyranose every bulky substituent, the anomeric C1–OH included, is equatorial; in α the C1–OH is axial. The all-equatorial ring is the more stable, its steric gain outweighing the anomeric effect, which favours an axial anomeric OH, so β has the larger share. Both test results come from the same equilibrium: the free aldehyde in solution is too scarce for Schiff’s test, but Tollens’ reagent oxidises the trace of open chain, more ring opens to replace it (Le Chatelier), and the whole sample reacts. In the penta-acetate the acetylated anomeric oxygen cannot reopen, so no oxime forms',
    why: 'The anomers differ at the anomeric carbon C1, the former aldehyde carbon, not at C5: C5’s –OH closes the ring, and its configuration, which fixes the D-series, is the same in both.',
    say: null,
  },

  // ── Additional B · The Amino-Acid Roster and the Isoelectric Point ──
  // pp. 519–521
  {
    topic: 5,
    kind: 'remember',
    q: 'Which are the ten essential amino acids, and which one-letter codes trap students?',
    a: 'Val, Leu, Ile, Arg, Lys, Thr, Met, Phe, Trp and His: the body cannot synthesise them, so they must come from the diet. Fast lookups: sulphur-containing, cysteine and methionine only; aromatic, phenylalanine, tyrosine and tryptophan; acidic, aspartic and glutamic acid; basic, lysine, arginine and histidine; achiral, glycine; the imino acid, proline, its α-amino group secondary. Code traps: tryptophan W, not T, which is threonine; arginine R; lysine K, the letter before L, which leucine takes; phenylalanine F; aspartic acid D; glutamic acid E; tyrosine Y; glutamine Q; asparagine N',
    why: 'In V, K, W all three are essential; tyrosine is not, the body making it from phenylalanine, and none of Pro, Gly and Ala is essential.',
    say: null,
  },
  // pp. 520–521
  {
    topic: 5,
    kind: 'remember',
    q: 'At a given pH, which way does an amino acid migrate, and how is its pI estimated?',
    a: 'Compare the pH with the isoelectric point. At pH = pI the amino acid is a neutral zwitter ion and does not move in an electric field. Below its pI the medium is more acidic, its net charge positive, and it migrates to the cathode; above its pI it is an anion and migrates to the anode: pH below pI, positive, to the cathode. Rough pI values: acidic amino acids (Asp, Glu) near 3, neutral ones near 5–6, basic ones (His, Lys, Arg) near 7.5–11. For an amino acid with no ionisable side chain, pI is the average of its two p<i>K</i><sub>a</sub> values: glycine, (2.34 + 9.60)/2 = 5.97 ≈ 6.0',
    why: 'At pH 7.7, E (pI 3.2) and Y (pI 5.7) are anions and move to the anode, and K (pI 9.7) is a cation and moves to the cathode.',
    say: null,
  },

  // ── Additional C · Reducing Sugars: The Test-Driven Version ──
  // pp. 522–523
  {
    topic: 6,
    kind: 'remember',
    q: 'What does each of Tollens’ reagent, Fehling’s solution and bromine water report, and why does fructose reduce the first two?',
    a: 'Tollens’ reagent, ammoniacal silver nitrate, is reduced by a free carbonyl or hemiacetal to metallic silver, a silver mirror, which is why glucose is used in silvering mirrors; all monosaccharides respond, and of the common disaccharides maltose and lactose do and sucrose does not. Fehling’s or Benedict’s solution, alkaline Cu(II) tartrate or citrate, is reduced to a red-brown Cu<sub>2</sub>O precipitate, with the same scope. Bromine water, a mild oxidant, oxidises only the aldehyde group to a carboxylic acid: it is decolourised by aldoses, not by ketoses, so glucose gives gluconic acid and fructose does not react. Fructose, a ketose, still reduces Tollens’ and Fehling’s because both are alkaline: in base a ketose isomerises through an enediol to the aldose, which is then oxidised. Bromine water is neutral or acidic, so no isomerisation occurs',
    why: 'So bromine water distinguishes an aldose from a ketose; and glucose and mannose, which differ only at C2, are epimers, not anomers, which differ only at the anomeric carbon.',
    say: null,
  },
  // pp. 522–524
  {
    topic: 6,
    kind: 'remember',
    q: 'What is cellobiose, and how do you decide whether a sugar reduces Tollens’ reagent?',
    a: 'Partial hydrolysis of cellulose gives cellobiose, two D-glucose units joined by a β-1,4 glycosidic linkage. One anomeric carbon stays free, so it is reducing. It differs from maltose only in the linkage, β against α, which is why humans hydrolyse maltose but not cellobiose or cellulose: treat it as the β twin of maltose. The rule: a sugar reduces Tollens’ or Fehling’s if any anomeric carbon is free. Ask which monosaccharides hydrolysis releases, which carbons the glycosidic bond ties up, and whether any anomeric carbon is left free. Of cellobiose, lactose, maltose and sucrose, only sucrose, glucose C1 joined to fructose C2, has both anomeric carbons locked and is non-reducing',
    why: 'Hydrolysis of sucrose, the inversion, gives an equimolar mixture of D-glucose (+52.5°) and D-fructose (−92.4°); the strongly laevorotatory fructose outweighs glucose, so the mixture rotates to about −20°: invert sugar.',
    say: null,
  },

  // ── Additional D · Nucleic-Acid Arithmetic ──
  // pp. 524–525
  {
    topic: 7,
    kind: 'remember',
    q: 'A double-stranded DNA sample has 23% adenine: what are the other bases, and where does Chargaff’s rule not apply?',
    a: 'In any double-stranded DNA, complementarity forces %A = %T and %G = %C, with %A + %T + %G + %C = 100, so %A + %G = 50%: purines equal pyrimidines, and one percentage gives all four. With 23% A, T is 23%; the remaining 100 − 46 = 54 splits equally, G 27% and C 27%; purines A + G = 50%, pyrimidines T + C = 50%, a 1∶1 ratio. Likewise 18% guanine gives C 18% and A = T = 32%. The rule holds for double-stranded DNA only: a single strand, or single-stranded RNA, has no such constraint, so nothing forces A + G = U + C in RNA',
    why: 'To tell the sugars apart, look at the 2′ position: ribose carries –OH there and belongs to RNA; 2-deoxyribose carries –H, one oxygen fewer, and belongs to DNA.',
    say: null,
  },
  // pp. 524–525
  {
    topic: 7,
    kind: 'remember',
    q: 'How is the complementary strand of 5′-ATGCTTCA-3′ written, and how many hydrogen bonds hold a duplex?',
    a: 'DNA strands run antiparallel, so the complement of a strand written 5′ → 3′ runs 3′ → 5′ beneath it: pair A with T and G with C base by base, giving 3′-TACGAAGT-5′. If the complement must be written 5′ → 3′, reverse that string: 5′-TGAAGCAT-3′. The safe habit is to complement first, antiparallel, and reverse only if asked. An A–T pair contributes 2 hydrogen bonds and a G–C pair 3, so a duplex with <i>x</i> A–T and <i>y</i> G–C pairs carries 2<i>x</i> + 3<i>y</i> inter-strand hydrogen bonds. A duplex of 100 base pairs with 30 A–T pairs has 70 G–C pairs: 2 × 30 + 3 × 70 = 60 + 210 = 270. More GC, more hydrogen bonds, a higher melting temperature',
    why: 'The complement of 5′-GGCATTAC-3′ is 3′-CCGTAATG-5′; a second 100-pair duplex with 70 A–T pairs, 30% GC, melts lower than the first, 70% GC.',
    say: null,
  },

  // ── Additional F · What JEE and NEET Actually Ask ──
  // pp. 526–528
  {
    topic: 9,
    kind: 'remember',
    q: 'Which parts of Biomolecules come up most in JEE and NEET?',
    a: 'The book’s estimate from 49 past JEE Main and NEET questions, not official figures. Carbohydrates (linkages, reducing character, hydrolysis products, structure evidence), about 43%, 21 of 49; proteins and amino acids, about 33%, 16; nucleic acids, about 12%, 6; vitamins and enzymes, about 10%, 5; hormones, about 2%, 1. The chapter is largely recall-based, almost every item a single-step identification; what separates scores is precision on small distinctions: α against β, anomer against epimer, nucleoside against nucleotide, C1–C4 against C1–C2. Numerical items count residues first: a linear chain of <i>n</i> has <i>n</i> − 1 peptide bonds, and <i>n</i> different residues give <i>n</i>! sequences, so a pentapeptide of five different amino acids has 5! = 120',
    why: 'A polysaccharide with only β-glycosidic links that, boiled with dilute H<sub>2</sub>SO<sub>4</sub> at 393 K, gives a sugar oxidised by bromine water to gluconic acid is cellulose; the sugar is glucose.',
    say: null,
  },
  // pp. 527–529
  {
    topic: 9,
    kind: 'mistake',
    q: 'Which traps recur in Biomolecules questions?',
    a: 'Calling sugars that differ only at C2 anomers: they are epimers, and anomers differ only at the anomeric carbon, C1 for glucose, the chapter’s most punished confusion. Swapping α and β: cellulose is β, starch α, both chains C1–C4 (amylopectin adds C1–C6 branches). Rejecting “glucose and fructose are structural isomers”, which is true: the same molecular formula with different functional groups, functional isomerism. Missing uracil planted in a DNA list, or thymine offered as “present in RNA but not DNA”. Writing <i>n</i> for <i>n</i> − 1: a linear decapeptide needs 9 waters for complete hydrolysis, and a tetrapeptide has 3 peptide bonds. Calling epinephrine a steroid: it is an amine hormone, thyroxine is the iodinated tyrosine derivative, and steroids come from the adrenal cortex and gonads. Matching zymase with malt: zymase comes from yeast, and malt gives diastase',
    why: 'In a 50-base-pair duplex with 20% adenine, A = T = 20 of the 100 bases and G = C = 30, so 20 A–T and 30 G–C pairs hold 2 × 20 + 3 × 30 = 130 hydrogen bonds.',
    say: null,
  },
];
