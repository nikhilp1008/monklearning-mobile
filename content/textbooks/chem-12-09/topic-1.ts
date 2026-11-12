import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 01, Nomenclature, Classification & Preparation: pp. 428–438
 * of the Class 12 Chemistry Master Reference, word for word, split at its
 * sections 9.1.1 to 9.1.8. The chapter title on p. 428 is not copied.
 * Figure 9.1, the pyramidal amine (caption p. 429, drawn p. 430), sits in
 * "Concept intuition" after the geometry paragraph, where the book prints its
 * caption; Figure 9.2, the Gabriel synthesis, and Figure 9.3, Hofmann bromamide
 * degradation (captions p. 433, drawn p. 434), sit after 3.5 and 3.6, which they
 * show. All three are redrawn in lib/diagrams/chemistry-12-09.ts. The book sets
 * sp³ and some formulas in maths italic; here species and hybrid labels are
 * upright (sp<sup>3</sup>), and the locants N-, o-, sec-, tert- are upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 428–438 ─────────────────────────
  {
    n: '01',
    title: 'Nomenclature, Classification & Preparation',
    kalam: 'That single idea — amines are substituted ammonia — quietly explains almost everything in this chapter.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Classification and IUPAC naming are near-guaranteed 1-mark CBSE and NEET assertion/MCQ items. Preparation routes (Gabriel, Hofmann bromamide, reduction of nitriles/amides/nitro) are heavily tested in CBSE 2–3 mark conversions and NEET single-statement MCQs, and form the backbone of JEE Main multi-step synthesis and JEE Advanced mechanism/stereochemistry problems.',
      },
      {
        t: 'p',
        html: 'Think of ammonia, NH<sub>3</sub>, as the parent. It has a nitrogen wearing three hydrogen “arms” and holding one lone pair close to its chest. An <b>amine</b> is simply ammonia after a chemist has swapped one, two, or three of those hydrogen arms for carbon-bearing groups (alkyl or aryl). That single idea — amines are substituted ammonia — quietly explains almost everything in this chapter.',
      },
      {
        t: 'p',
        html: 'Picture a small autorickshaw stand. Ammonia is an empty rickshaw with three seats (the three H’s) and a driver who never leaves (the lone pair). Replace one passenger seat with a paying customer (an alkyl group) and you get a <b>primary (1°) amine</b>, R–NH<sub>2</sub>. Two paying customers gives a <b>secondary (2°) amine</b>, R<sub>2</sub>NH. Three gives a <b>tertiary (3°) amine</b>, R<sub>3</sub>N. Squeeze in a fourth where the driver used to sit — now the lone pair itself is “sold” into a bond — and the rickshaw carries a permanent positive fare: a <b>quaternary ammonium ion</b>, R<sub>4</sub>N<sup>+</sup>.',
      },
      {
        t: 'p',
        html: '<b>Here is the single most important warning of the whole topic.</b> We classify amines by how many carbon groups sit on the nitrogen — <b>never</b> by the carbon that carries the nitrogen. This is the opposite of how we classify alcohols and alkyl halides. tert-Butylamine, (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub>, sounds tertiary, and the carbon bearing the –NH<sub>2</sub> is a tertiary carbon — yet the amine is <b>primary</b>, because only one carbon group touches the nitrogen.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the nitrogen is the accountant, and it only counts what is directly attached to itself. What the rest of the molecule is doing further down the chain is none of its business.',
      },
      {
        t: 'p',
        html: 'Amines also come in two families by neighbourhood. If no carbon attached to nitrogen is part of an aromatic ring, it is an <b>aliphatic amine</b> (ethanamine; also cyclohexanamine, and benzylamine, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>NH<sub>2</sub>, whose nitrogen is off the ring). If the nitrogen sits directly on a benzene ring, it is an <b>aromatic amine</b> or <b>arylamine</b> (aniline, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>).',
      },
      {
        t: 'p',
        html: 'Because the same handful of carbons can be parcelled out around nitrogen in several ways, amines are a playground for <b>isomerism</b>, and exam-setters love it. A single molecular formula can hide:<br>• <b>Chain isomers</b> — same class, different carbon skeleton (e.g. butan-1-amine vs 2-methyl​propan-1-amine).<br>• <b>Position isomers</b> — same skeleton, nitrogen on a different carbon (butan-1-amine vs butan-2-amine).<br>• <b>Metamers</b> — same class, different alkyl groups on N (e.g. CH<sub>3</sub>NHC<sub>3</sub>H<sub>7</sub> vs C<sub>2</sub>H<sub>5</sub>NHC<sub>2</sub>H<sub>5</sub>). Functional isomers differ in class, and C<sub>4</sub>H<sub>11</sub>N alone gives eight isomeric amines spread across 1°, 2° and 3°. For the smaller C<sub>3</sub>H<sub>9</sub>N there are four — two primary (propan-1-amine, propan-2-amine), one secondary (N-methyl​ethanamine) and one tertiary (N,N-dimethyl​methanamine). Notice you cannot build a <b>quaternary</b> salt from C<sub>3</sub>H<sub>9</sub>N: that needs four carbon groups, so a minimum of four carbons.',
      },
      {
        t: 'p',
        html: 'Geometrically, the nitrogen of an amine is sp<sup>3</sup> <b>hybridised</b> and <b>pyramidal</b>, exactly like ammonia: three bonds form the base of a tripod and the lone pair points up out of the apex. The bond angles are close to tetrahedral: NCERT gives 108° for trimethylamine, the value in the figure below, slightly compressed by the bulky lone pair. (Measured in the gas phase, trimethylamine’s C–N–C is nearer 111°, its three methyl groups crowding each other, while ammonia’s H–N–H is 107°. Write 108° in an exam.) In <b>arylamines</b> the lone pair sits one bond away from the aromatic ring and can drift into conjugation with it — a fact we will lean on heavily when we reach basicity and reactions, but which here simply explains why aniline behaves as its own naming category.',
      },
      { t: 'fig', id: 'c12-09-fig-9.1' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> A subtle consequence: a tertiary amine with three different groups, R<sub>1</sub>R<sub>2</sub>R<sub>3</sub>N, looks like it should be chiral (four different “things” around N if we count the lone pair). In practice it <b>cannot be resolved into enantiomers</b>, because the molecule rapidly turns itself inside-out like an umbrella in a storm — the lone pair and the three bonds flip through a planar transition state. This is <b>nitrogen inversion</b> (also called pyramidal inversion or “flipping”), and it interconverts the two mirror images millions of times a second at room temperature. So treat amine nitrogen as configurationally unstable unless it is locked (quaternised or held in a rigid ring).',
      },

      { t: 'part', title: 'Key definitions, structures and reagents' },
      { t: 'p', html: '<b>Classification by substitution on nitrogen:</b>' },
      {
        t: 'table',
        title: null,
        head: ['Class', 'General formula', 'Defined by'],
        rows: [
          ['Primary (1°)', 'R–NH<sub>2</sub>', '1 carbon group on N'],
          ['Secondary (2°)', 'R<sub>2</sub>NH', '2 carbon groups on N'],
          ['Tertiary (3°)', 'R<sub>3</sub>N', '3 carbon groups on N'],
          ['Quaternary ammonium', 'R<sub>4</sub>N<sup>+</sup>X<sup>−</sup>', '4 carbon groups on N, formally charged'],
        ],
      },
      { t: 'p', html: '<b>Nomenclature rules.</b>' },
      {
        t: 'p',
        html: '<b>Common system:</b> name the alkyl group(s) on N alphabetically, then add the suffix -amine as <b>one word</b>. Use di-/tri- for identical groups: CH<sub>3</sub>NH<sub>2</sub> = methylamine; (CH<sub>3</sub>)<sub>2</sub>NH = dimethylamine; CH<sub>3</sub>CH<sub>2</sub>NHCH<sub>3</sub> = ethylmethylamine.',
      },
      {
        t: 'p',
        html: '<b>IUPAC system (alkanamine):</b> drop the terminal -e of the parent alkane and add -amine, with a locant for the nitrogen-bearing carbon. For 2° and 3° amines, the longest chain is the parent; other groups on nitrogen take <b>N-</b> locant prefixes.<br>• CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub> → ethanamine<br>• CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> → propan-1-amine<br>• (CH<sub>3</sub>)<sub>2</sub>CHNH<sub>2</sub> → propan-2-amine<br>• CH<sub>3</sub>NHCH<sub>2</sub>CH<sub>3</sub> → N-methyl​ethanamine<br>• (CH<sub>3</sub>)<sub>3</sub>N → N,N-dimethyl​methanamine<br>• Diamines retain the -e: H<sub>2</sub>N(CH<sub>2</sub>)<sub>6</sub>NH<sub>2</sub> → hexane-1,6-diamine',
      },
      {
        t: 'p',
        html: '<b>Arylamines:</b> C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> is named <b>aniline</b> (a retained IUPAC name) or benzenamine; substituted rings build on it, e.g. 2-methylaniline (o-toluidine), 4-bromoaniline, N,N-dimethylaniline.',
      },
      { t: 'p', html: '<b>Key preparation reagents at a glance</b> (full logic in Key procedures and mechanisms):' },
      {
        t: 'table',
        title: null,
        head: ['Reagent / route', 'Converts', 'Gives'],
        rows: [
          ['NH<sub>3</sub> (excess), Δ', 'R–X', '1° amine (major) + mixture'],
          ['LiAlH<sub>4</sub> or H<sub>2</sub>/Ni', 'R–C≡N', '1° amine (same C as the nitrile; +1 C over its R–X)'],
          ['LiAlH<sub>4</sub>', 'R–CONH<sub>2</sub>', '1° amine (same C)'],
          ['H<sub>2</sub>/Pd, Sn/HCl, Fe/HCl', 'Ar–NO<sub>2</sub>', 'Ar–NH<sub>2</sub>'],
          ['NH<sub>3</sub> + H<sub>2</sub>/Ni', 'aldehyde/ketone', 'amine (reductive amination)'],
          ['Potassium phthalimide, then hydrolysis', 'R–X', '1° amine only (same C)'],
          ['Br<sub>2</sub> + 4 KOH', 'R–CONH<sub>2</sub>', '1° amine (−1 C)'],
        ],
      },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'proc',
        title: '3.1 Procedure — naming an amine',
        steps: [
          '<b>Find the parent.</b> Pick the longest carbon chain (or largest ring) directly bonded to nitrogen. That chain’s alkane name, with -e → -amine, is the spine.',
          '<b>Number to give nitrogen the lowest locant</b>, then write it (e.g. propan-<b>1</b>-amine vs propan-<b>2</b>-amine).',
          '<b>Name remaining groups on nitrogen</b> as substituents with an <b>N-</b> locant prefix, listed alphabetically (e.g. N-ethyl-N-methyl…).',
          '<b>Check the class</b> by counting carbon groups on N — independently of the name.',
        ],
      },
      { t: 'p', html: '<b>3.2 Ammonolysis of alkyl halides</b>' },
      {
        t: 'p',
        html: 'A nucleophilic substitution: the nitrogen lone pair of NH<sub>3</sub> attacks the carbon of R–X, displacing halide. The snag is that the 1° amine just formed is also a nucleophile, so it attacks more R–X, giving 2°, then 3°, then the quaternary salt — a cocktail that is hard to separate. Using a <b>large excess of ammonia</b> statistically favours the 1° product. Reactivity follows leaving-group ability: R–I > R–Br > R–Cl. The amine is freed from its ammonium salt by a strong base.',
      },
      {
        t: 'formula',
        kicker: 'Ammonolysis of alkyl halides',
        main: 'R–X + 2 NH<sub>3</sub> → R–NH<sub>2</sub> + NH<sub>4</sub>X<br>R–NH<sub>2</sub> →<sup>R–X</sup> R<sub>2</sub>NH →<sup>R–X</sup> R<sub>3</sub>N →<sup>R–X</sup> R<sub>4</sub>N<sup>+</sup>X<sup>−</sup>',
        legend: [
          'R–X = alkyl halide',
          'NH<sub>3</sub> = ammonia, used in large excess',
          'R–NH<sub>2</sub> = 1° amine',
          'NH<sub>4</sub>X = ammonium halide (the excess NH<sub>3</sub> takes up the HX)',
          'R<sub>2</sub>NH = 2° amine',
          'R<sub>3</sub>N = 3° amine',
          'R<sub>4</sub>N<sup>+</sup>X<sup>−</sup> = quaternary ammonium salt',
        ],
        note: 'Each further step releases HX, which ends as a salt; a large excess of NH<sub>3</sub> keeps the reaction mostly at the first line.',
      },
      {
        t: 'p',
        html: 'The amine first appears as its ammonium salt, R–NH<sub>3</sub><sup>+</sup>X<sup>−</sup>; a strong base such as NaOH then liberates the free amine: R–NH<sub>3</sub><sup>+</sup>X<sup>−</sup> + OH<sup>−</sup> → R–NH<sub>2</sub> + H<sub>2</sub>O + X<sup>−</sup>. Because the four products differ in volatility and basicity, separation is tedious — which is precisely why the cleaner Gabriel route (3.5) was invented when a pure 1° amine is wanted.',
      },
      { t: 'p', html: '<b>3.3 Reduction of nitriles and amides — the carbon-count story</b>' },
      {
        t: 'p',
        html: '• <b>Nitriles</b>: R–C≡N + 4[H] → R–CH<sub>2</sub>–NH<sub>2</sub>. The nitrile carbon survives, so the amine has <b>one more carbon</b> than the alkyl halide that made the nitrile — this is the classic <b>“ascent of the series.”</b> For example, CH<sub>3</sub>CN →<sup>LiAlH₄</sup> CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub> (ethanenitrile → ethanamine). Catalytic hydrogenation (H<sub>2</sub>/Ni) or Na/alcohol also work; with H<sub>2</sub>/Ni, though, amine already formed can add to the imine intermediate and give some 2° amine, so LiAlH<sub>4</sub> is cleaner.<br>• <b>Amides</b>: R–CONH<sub>2</sub> →<sup>LiAlH₄</sup> R–CH<sub>2</sub>–NH<sub>2</sub>. The carbonyl carbon is reduced to CH<sub>2</sub> but <b>stays in the molecule</b>, so the carbon count is <b>unchanged</b>, e.g. CH<sub>3</sub>CONH<sub>2</sub> → CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub> (acetamide → ethanamine, both 2 C). N-substituted amides reduce to the corresponding 2° or 3° amines, making this a flexible route to all three classes.',
      },
      { t: 'p', html: '<b>3.4 Reduction of nitro compounds</b>' },
      {
        t: 'p',
        html: 'Aromatic nitro compounds reduce cleanly to arylamines. In acidic media (Sn/HCl, Fe/HCl) or by catalytic hydrogenation (H<sub>2</sub>/Pd), Ar–NO<sub>2</sub> → Ar–NH<sub>2</sub> — the standard industrial and laboratory route to <b>aniline</b> from nitrobenzene, C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> →<sup>Sn/HCl</sup> C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>. Iron scrap with a little HCl is economical because the FeCl<sub>2</sub> formed is hydrolysed to regenerate HCl, so only a catalytic amount is needed. The reduction proceeds through nitroso (Ar–NO) and N-aryl​hydroxylamine (Ar–NHOH; from nitrobenzene, N-phenyl​hydroxylamine) stages; in acidic medium it runs all the way to the amine, but selective reagents in neutral/basic media can be used to stop at intermediates — a subtlety more relevant when chemoselectivity matters.',
      },
      {
        t: 'p',
        html: 'A three-step sequence whose whole purpose is to deliver a <b>pure primary amine</b> with no 2°/3° contamination.',
      },
      {
        t: 'proc',
        title: '3.5 Gabriel phthalimide synthesis — clean 1° amines',
        steps: [
          'Phthalimide + alcoholic KOH → <b>potassium phthalimide</b> (the N–H is acidic because the resulting anion is resonance-stabilised by two flanking carbonyls).',
          'The phthalimide anion does an S<sub>N</sub>2 displacement on R–X → <b>N-alkyl​phthalimide</b>. Crucially, the nitrogen now has no remaining acidic hydrogen, so it cannot alkylate again — that is why the product is exclusively primary.',
          'Hydrolysis (alkaline, as in NCERT, or acidic) — or <b>hydrazinolysis</b> with NH<sub>2</sub>NH<sub>2</sub> when hydrolysis is sluggish — releases the <b>1° amine</b> plus phthalic acid (or phthalhydrazide). Alkali gives the free amine and the phthalate salt; acid gives the amine as its ammonium salt, freed with base. Carbon count equals that of R–X.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why aniline fails:</b> step 2 needs an S<sub>N</sub>2 reaction. <b>Aryl halides do not undergo S<sub>N</sub>2</b>, so aromatic primary amines like aniline <b>cannot</b> be made this way. By the same logic, <b>3°-alkyl halides fail</b> (they eliminate rather than substitute).',
      },
      { t: 'fig', id: 'c12-09-fig-9.2' },
      { t: 'p', html: '<b>3.6 Hofmann bromamide degradation — the carbon-losing rearrangement</b>' },
      { t: 'p', html: 'An <b>amide</b> is converted to a 1° amine with <b>one fewer carbon</b>:' },
      {
        t: 'formula',
        kicker: 'Hofmann bromamide degradation',
        main: 'R–CONH<sub>2</sub> + Br<sub>2</sub> + 4 KOH → R–NH<sub>2</sub> + K<sub>2</sub>CO<sub>3</sub> + 2 KBr + 2 H<sub>2</sub>O',
        legend: [
          'R–CONH<sub>2</sub> = amide',
          'Br<sub>2</sub> = bromine',
          'KOH = potassium hydroxide',
          'R–NH<sub>2</sub> = 1° amine, one carbon fewer than the amide',
          'K<sub>2</sub>CO<sub>3</sub> = carbonate carrying the lost carbonyl carbon',
          'KBr = potassium bromide',
          'H<sub>2</sub>O = water',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Mechanistically: base-promoted bromination gives an <b>N-bromoamide</b>; deprotonation and loss of bromide generate an electron-deficient nitrogen, and the <b>R group migrates from the carbonyl carbon to nitrogen</b> in a concerted step, turning the old carbonyl carbon into the centre of an <b>isocyanate</b>, R–N=C=O. Hydrolysis of the isocyanate liberates the amine and CO<sub>2</sub> (captured as carbonate). Because migration is <b>intramolecular and concerted</b>, a chiral migrating carbon moves with <b>retention of configuration</b>. The lost carbon (the old carbonyl C) is why the amine is one carbon shorter than the amide.',
      },
      { t: 'fig', id: 'c12-09-fig-9.3' },
      { t: 'p', html: '<b>3.7 Reductive amination (brief)</b>' },
      {
        t: 'p',
        html: 'Aldehydes and ketones condense with ammonia to an <b>imine</b> (Schiff base), which is reduced in situ to the amine:',
      },
      {
        t: 'formula',
        kicker: 'Reductive amination',
        main: 'R–CHO + NH<sub>3</sub> → R–CH=NH + H<sub>2</sub>O<br>R–CH=NH + H<sub>2</sub> →<sup>Ni</sup> R–CH<sub>2</sub>–NH<sub>2</sub>',
        legend: [
          'R–CHO = aldehyde',
          'NH<sub>3</sub> = ammonia',
          'R–CH=NH = imine (Schiff base)',
          'H<sub>2</sub>O = water, lost as the imine forms',
          'H<sub>2</sub> = hydrogen',
          'Ni = nickel catalyst',
          'R–CH<sub>2</sub>–NH<sub>2</sub> = 1° amine',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The carbonyl fragment’s carbons are preserved. Substituting a <b>1° amine</b> for ammonia gives a 2° amine, and a <b>2° amine</b> gives a 3° amine — so reductive amination is the most general carbonyl-to-amine method, reaching every class by choosing the nitrogen partner. (In the lab, NaBH<sub>3</sub>CN is the selective reductant of choice for this step — the JEE-Advanced “Borch” variant.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Prepare butan-1-amine from 1-bromobutane by Gabriel phthalimide synthesis. Write all three steps and name the by-product.',
        steps: [
          '<b>Step 1:</b> Phthalimide →<sup>KOH (alc.)</sup> potassium phthalimide.',
          '<b>Step 2:</b> Potassium phthalimide + CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>–Br →<sup>SN2</sup> N-butyl​phthalimide + KBr.',
          '<b>Step 3:</b> N-butyl​phthalimide →<sup>H₃O⁺, Δ</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>–NH<sub>2</sub> (butan-1-amine) + <b>phthalic acid</b> (by-product). Acid leaves the amine as its ammonium salt, freed by a final basification; NCERT’s alkaline hydrolysis gives the free amine and sodium phthalate.',
          'The carbon count of the amine equals that of the halide (4 C), confirming Gabriel preserves carbons.',
        ],
        ans: 'Phthalimide → potassium phthalimide (KOH, alc.) → N-butyl​phthalimide (1-bromobutane, S<sub>N</sub>2) → butan-1-amine (hydrolysis); by-product phthalic acid (as sodium phthalate if the hydrolysis is alkaline).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these can be made by Gabriel synthesis: (i) benzylamine, (ii) aniline, (iii) tert-butylamine, (iv) propan-1-amine?',
        steps: [
          '<b>Speed reasoning.</b> Gabriel’s decisive step is an S<sub>N</sub>2 on R–X. Strike out anything that can’t do S<sub>N</sub>2: <b>aniline</b> needs an aryl halide (✗), <b>tert-butylamine</b> needs a 3° halide (✗, eliminates). What remains — <b>benzylamine</b> (a 1° benzylic halide, superb S<sub>N</sub>2 substrate) and <b>propan-1-amine</b> (a 1° halide) — both work.',
          '<b>Trap:</b> the “aromatic 1° amines can be prepared by Gabriel” assertion is a perennial false statement — never tick it.',
        ],
        ans: '(i) and (iv).',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'From propan-1-ol, devise routes to (a) butan-1-amine and (b) propan-1-amine, and state which route changes the carbon count.',
        steps: [
          '(a) <b>Ascent (+1 C):</b> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH →<sup>PBr₃</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br →<sup>KCN</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CN →<sup>LiAlH₄</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> (butan-1-amine, 4 C). The <b>KCN step adds the carbon</b>; the nitrile reduction keeps it.',
          '(b) <b>Same C:</b> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>Br →<sup>Gabriel</sup> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub> (propan-1-amine, 3 C). Carbon count unchanged.',
          'This is the heart of JEE Main amine problems: choose the route by the <b>carbon bookkeeping</b> — halide via nitrile +1, Gabriel same, Hofmann −1.',
        ],
        ans: '(a) PBr<sub>3</sub>, then KCN, then LiAlH<sub>4</sub>: butan-1-amine (4 C), the route that changes the carbon count (+1, at the KCN step); (b) PBr<sub>3</sub>, then Gabriel: propan-1-amine (3 C), count unchanged.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Design a synthesis of (<i>S</i>)-butan-2-amine from (<i>S</i>)-2-methyl​butanoic acid, preserving the stereocentre. Justify the stereochemical outcome mechanistically, and name one alternative method that would give a <b>same-carbon</b> amine instead.',
        steps: [
          '(<i>S</i>)-2-methyl​butanoic acid is CH<sub>3</sub>CH<sub>2</sub>C<sup>∗</sup>H(CH<sub>3</sub>)COOH (5 C; stereocentre marked ∗).',
          'Route via <b>Hofmann bromamide</b> (−1 C):<br>...COOH →<sup>NH₃, Δ</sup> ...CONH<sub>2</sub> →<sup>Br₂, 4KOH</sup> CH<sub>3</sub>CH<sub>2</sub>C<sup>∗</sup>H(CH<sub>3</sub>)–NH<sub>2</sub>',
          'The product is <b>butan-2-amine</b> (4 C): the carbonyl carbon is expelled and the sec-butyl group migrates intact.',
          '<b>Stereochemistry.</b> The migrating carbon is the stereocentre. Hofmann migration (C→N) is <b>intramolecular and concerted</b>, so the migrating group never fully detaches and its spatial arrangement is preserved — <b>retention of configuration</b>. (The CIP descriptor may or may not change because the substituent priorities change when –CONH<sub>2</sub> becomes –NH<sub>2</sub>, but the spatial configuration is retained.)',
          '<b>Same-carbon alternative.</b> LiAlH<sub>4</sub> reduction of the amide gives 2-methyl​butan-1-amine, CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>NH<sub>2</sub> (5 C); the stereocentre is untouched, (<i>S</i>) retained. Curtius (R–COCl → RCON<sub>3</sub> → Δ → R–NCO → amine) is a −1 C route, like Hofmann. (Curtius/Schmidt/Ritter are JEE-Advanced extensions, not CBSE/NEET syllabus.)',
        ],
        ans: 'NH<sub>3</sub> and heat to the amide, then Br<sub>2</sub> and 4 KOH (Hofmann): (<i>S</i>)-butan-2-amine, with retention because the migration is intramolecular and concerted; the same-carbon alternative is LiAlH<sub>4</sub> reduction of the amide, giving (<i>S</i>)-2-methyl​butan-1-amine.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Give the IUPAC name and class of (CH<sub>3</sub>)<sub>2</sub>CH–NH–CH<sub>3</sub>.',
            a: 'N-methyl​propan-2-amine; secondary (2°).',
          },
          {
            q: '[NEET] How many structural-isomeric amines (all classes) have the molecular formula C<sub>3</sub>H<sub>9</sub>N? Classify each.',
            a: 'Four — propan-1-amine (1°), propan-2-amine (1°), N-methyl​ethanamine (2°), N,N-dimethyl​methanamine (3°).',
          },
          {
            q: '[JEE Main] Write the equation for converting benzamide to its degradation amine, and state how many carbons the product has relative to benzamide.',
            a: 'C<sub>6</sub>H<sub>5</sub>CONH<sub>2</sub> + Br<sub>2</sub> + 4 KOH → C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + K<sub>2</sub>CO<sub>3</sub> + 2 KBr + 2 H<sub>2</sub>O; aniline has <b>one fewer carbon</b> (7 C → 6 C).',
          },
          {
            q: '[JEE Main] Among R–I, R–Br, R–Cl reacting with NH<sub>3</sub>, which reacts fastest, and what single experimental change pushes the product mixture toward the 1° amine?',
            a: 'R–I fastest (best leaving group); use a <b>large excess of NH<sub>3</sub></b>.',
          },
          {
            q: '[JEE Advanced] A student wants pure 2-phenyl​ethan-1-amine. Explain why Gabriel synthesis succeeds for this target but fails if the target were aniline.',
            a: 'The 2-phenylethyl halide undergoes S<sub>N</sub>2 with phthalimide anion; an aryl halide cannot do S<sub>N</sub>2, so aniline is inaccessible by this route.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'tert-Butylamine, (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub>, is classified as:',
        opts: [
          { label: 'primary', nudge: null },
          { label: 'secondary', nudge: '<b>(b)</b> would need two C on N.' },
          {
            label: 'tertiary',
            nudge: '<b>(c)</b> is the trap: students transfer the alcohol/halide rule (classify by the carbon) — but amines are classified by groups on nitrogen.',
          },
          { label: 'quaternary', nudge: '<b>(d)</b> would need four C and a positive charge.' },
        ],
        correct: 0,
        solution: 'Only <b>one</b> carbon group is bonded to nitrogen → primary.',
      },
      {
        t: 'mcq',
        q: 'Which preparation gives a primary amine with <b>one fewer carbon</b> than the starting material?',
        opts: [
          { label: 'reduction of a nitrile', nudge: '<b>(a)</b> keeps the count: the nitrile carbon becomes the CH<sub>2</sub>NH<sub>2</sub>, so the amine has as many carbons as the nitrile (one more than the halide the nitrile was made from), not one fewer.' },
          { label: 'Gabriel synthesis', nudge: '<b>(b)</b> preserves carbon count (phthalimide S<sub>N</sub>2 keeps all of R).' },
          { label: 'Hofmann bromamide degradation', nudge: null },
          {
            label: 'reductive amination',
            nudge: '<b>(d)</b> preserves the carbonyl fragment’s carbons.',
          },
        ],
        correct: 2,
        solution: 'The carbonyl carbon leaves as carbonate, so the amine is one carbon shorter. Picking (a), (b) or (d) means confusing the carbon-bookkeeping rules.',
      },
      {
        t: 'mcq',
        q: 'The IUPAC name of (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–NH<sub>2</sub> is:',
        opts: [
          { label: 'isobutylamine', nudge: '<b>(a)</b> is the common name, not IUPAC.' },
          { label: '2-methyl​propan-1-amine', nudge: null },
          { label: '2-methyl​propan-2-amine', nudge: '<b>(c)</b> puts the amine on C-2, which is wrong — the –NH<sub>2</sub> is on a terminal carbon.' },
          { label: 'butan-1-amine', nudge: '<b>(d)</b> misreads the branched skeleton as a straight four-carbon chain.' },
        ],
        correct: 1,
        solution: 'Longest chain bearing N is propan-1-amine; a methyl sits on C-2.',
      },
      {
        t: 'mcq',
        q: '(JEE-Advanced extension) The best method to prepare tert-butylamine, (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub>, is:',
        opts: [
          { label: 'Gabriel phthalimide synthesis', nudge: '<b>(a)</b> fails: Gabriel needs S<sub>N</sub>2, impossible on a 3° halide.' },
          { label: 'ammonolysis of tert-butyl bromide', nudge: '<b>(b)</b> fails: 3° halides undergo <b>elimination</b> with the basic NH<sub>3</sub>, not clean substitution.' },
          { label: 'the Ritter reaction', nudge: null },
          {
            label: 'reduction of (CH<sub>3</sub>)<sub>3</sub>C–CN',
            nudge: '<b>(d)</b> fails: reduction of (CH<sub>3</sub>)<sub>3</sub>C–CN gives neopentylamine, (CH<sub>3</sub>)<sub>3</sub>C–CH<sub>2</sub>NH<sub>2</sub> (one extra carbon), not tert-butylamine, so <b>(c)</b> wins.',
          },
        ],
        correct: 2,
        solution: 'The Ritter reaction (3° alcohol/alkene + nitrile/HCN + conc. H<sub>2</sub>SO<sub>4</sub>) makes the C–N bond at a <b>tertiary alkyl</b> centre via a stable carbocation — exactly the case other methods choke on. It gives an N-tert-alkyl amide (with HCN, (CH<sub>3</sub>)<sub>3</sub>C–NHCHO), whose hydrolysis releases the 1° amine. (Beyond CBSE/NEET.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Classifying by the wrong atom.</b> Counting the carbon that holds nitrogen (alcohol-style) instead of the groups on nitrogen. tert-Butylamine is <b>primary</b>.',
          '<b>Carbon-count amnesia.</b> Forgetting that the halide → nitrile → amine route is +1 C (the carbon comes in with KCN; the reduction keeps it), Gabriel is <b>same</b> C, and Hofmann bromamide is −1 C. Most “convert A to B” errors trace here.',
          '<b>Aniline by Gabriel.</b> Believing aromatic 1° amines can be made by Gabriel. Aryl halides cannot do S<sub>N</sub>2 — the route dies at step 2.',
          '<b>Wrong reductant for Ar–NO<sub>2</sub>.</b> Reaching for LiAlH<sub>4</sub> on an aromatic nitro group; it does not deliver the amine cleanly (it tends to give azo compounds). Use H<sub>2</sub>/Pd or Sn/HCl.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip.</b> Tattoo this carbon ledger above your desk: <b>halide via nitrile +1, amide same, Gabriel same, Hofmann −1.</b> Before writing any multi-step amine synthesis, count the target’s carbons first and work backwards — the carbon-count rule alone eliminates most wrong routes in seconds.',
      },
      {
        t: 'p',
        html: '<b>Beyond syllabus (JEE-Adv only):</b> Curtius, Schmidt, Ritter, Leuckart and Borch (NaBH<sub>3</sub>CN) reactions extend the toolkit; the Ritter reaction, followed by hydrolysis of its amide, is the method of choice for a 1° amine on a tertiary-alkyl centre.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Amine = substituted ammonia',
            note: 'Class = number of C-groups <b>on N</b>: RNH<sub>2</sub> (1°), R<sub>2</sub>NH (2°), R<sub>3</sub>N (3°), R<sub>4</sub>N<sup>+</sup> (quaternary). Not the carbon that bears N.',
          },
          {
            f: 'Geometry',
            note: 'sp<sup>3</sup>, pyramidal, lone pair on N; rapid <b>nitrogen inversion</b> prevents resolution of R<sub>1</sub>R<sub>2</sub>R<sub>3</sub>N.',
          },
          {
            f: 'IUPAC',
            note: 'alkane minus -e, plus -amine, lowest N-locant; extra N-groups as <b>N-</b> prefixes; aniline retained for C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>.',
          },
          {
            f: 'Carbon ledger',
            note: 'halide →<sup>KCN</sup> nitrile →<sup>[H]</sup> amine <b>+1 C</b> (the C enters with KCN); amide →<sup>LiAlH₄</sup> <b>same</b>; Gabriel <b>same</b>; <b>Hofmann Br<sub>2</sub>/KOH → −1 C</b>.',
          },
          {
            f: 'Gabriel',
            note: 'pure <b>1° only</b>; <b>no aryl, no 3°</b> (needs S<sub>N</sub>2).',
          },
          {
            f: 'Hofmann',
            note: 'RCONH<sub>2</sub> + Br<sub>2</sub> + 4 KOH → RNH<sub>2</sub> + K<sub>2</sub>CO<sub>3</sub> + 2 KBr + 2 H<sub>2</sub>O; intramolecular migration, <b>retention</b> of configuration.',
          },
        ],
        aids: [
          '“G-A-S, H-M”: <b>G</b>abriel keeps carbons, <b>A</b>scent (nitriles) adds one, <b>S</b>ame for amides, <b>H</b>ofMann minus one. (The added carbon comes in with KCN, R–X → R–CN; the reduction then keeps it.)',
        ],
      },
    ],
  },
];
