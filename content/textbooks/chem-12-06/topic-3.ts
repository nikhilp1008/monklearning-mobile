import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 03, Polyhalogen Compounds: pp. 276–285 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8. Its
 * Section 3 keeps the book's lettered sub-sections A to D as bold leads. Figure
 * 6.5 (caption p. 279, drawn p. 280) follows sub-section D's equation, where the
 * book's caption stands; it is redrawn in lib/diagrams/chemistry-12-06.ts. The
 * book's "Section 3" is named by its part here. "Distinguishing iodoform from
 * chloroform" follows the errata in full (the page prints only its first sentence),
 * with one exam line of ours added.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 276–285 ─────────────────────────
  {
    n: '03',
    title: 'Polyhalogen Compounds',
    kalam: 'Polyhalogen compounds are simply molecules carrying more than one halogen — two, three, or four.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is a high-return, low-effort block — almost pure recall. CBSE Boards love the chloroform-storage question and the carbylamine test (1–2 marks). NEET regularly asks “which compound gives the iodoform test” and one-line uses of freons/DDT. JEE Main occasionally slots in an identification or a phosgene-formation reasoning MCQ. The environmental angle (ozone depletion, DDT persistence) also turns up in assertion–reason form.',
      },
      {
        t: 'p',
        html: 'So far we have treated halogen as a single passenger boarding a hydrocarbon. <b>Polyhalogen compounds</b> are simply molecules carrying more than one halogen — two, three, or four. That extra halogen baggage changes the personality of the molecule completely: pile on enough electronegative, heavy halogen atoms and you get dense, often non-flammable, frequently volatile liquids that turn out to be enormously useful as solvents, refrigerants, anaesthetics, antiseptics, and insecticides — and, as we have painfully learned, enormously damaging to the environment.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the halogens as salt in cooking. One pinch (a monohalide) seasons a dish subtly. Keep adding spoonful after spoonful (di-, tri-, tetra-halide) and the dish’s character is dominated entirely by the salt — you are no longer tasting the vegetable at all. In the same way, carbon tetrachloride (CCl<sub>4</sub>) behaves almost nothing like methane; its four chlorines make it a dense, non-flammable solvent. The number and identity of the halogens, not the carbon skeleton, dictate the behaviour.',
      },
      {
        t: 'p',
        html: 'The naming follows the count. Replace three hydrogens of methane and you get the <b>haloforms</b>: CHCl<sub>3</sub> (chloroform), CHBr<sub>3</sub> (bromoform), CHI<sub>3</sub> (iodoform). Replace all four and you reach CCl<sub>4</sub> (carbon tetrachloride). Beyond these simple haloforms you meet mixed halogen frameworks such as the <b>freons</b> (chlorofluorocarbons), where chlorine and fluorine share the same small carbon, and the famous insecticide <b>DDT</b>, a sprawling chlorinated aromatic.',
      },
      {
        t: 'p',
        html: 'Here is the recurring tension that ties this whole topic together: the same properties that make these compounds useful make them dangerous. Chemical inertness makes freons safe refrigerants — but that inertness lets them survive all the way to the stratosphere. Stability and fat-solubility make DDT a long-lasting insecticide — but the same traits let it accumulate in animal tissue and climb the food chain. Volatility and a sweet smell made chloroform a convenient early anaesthetic — but it slowly oxidises in air to a deadly gas. Usefulness and hazard are two faces of one coin.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b> “Useful” is always context-dependent and time-bound. Chloroform as an anaesthetic, CCl<sub>4</sub> in fire extinguishers, DDT in agriculture, and freons in refrigerators were once standard — and have since been restricted or banned as their toxicity and environmental persistence became clear. So treat every “use” in this topic as paired with a “but”: the exam reward sits exactly at that pairing (use and its associated hazard). Also note that the iodoform reaction is used here as a test (diagnostic), and it works only on compounds with the right group, so it is not a general preparation route — do not over-generalise it.',
      },

      { t: 'part', title: 'Key compounds, uses and hazards' },
      {
        t: 'p',
        html: '<b>Dichloromethane (methylene chloride), CH<sub>2</sub>Cl<sub>2</sub>.</b> A widely used solvent — as a paint remover, an aerosol propellant, a process solvent in drug manufacture, and a metal-cleaning/finishing agent. <b>Hazard:</b> harms the human central nervous system; even low airborne levels can impair hearing and vision, and higher levels cause nausea and loss of consciousness.',
      },
      {
        t: 'p',
        html: '<b>Chloroform (trichloromethane), CHCl<sub>3</sub>.</b> A colourless, volatile, sweet-smelling liquid. <b>Uses:</b> an excellent solvent for fats, waxes, rubber, resins, and iodine; a feedstock for chloretone (a drug) and chloropicrin (an insecticide); formerly an anaesthetic (now abandoned because it damages the liver and central nervous system). <b>Hazard:</b> on exposure to light and air it is slowly oxidised to <b>phosgene</b> (carbonyl chloride, COCl<sub>2</sub>), a highly poisonous gas — which dictates how it must be stored (see Key procedures and logical framework).',
      },
      {
        t: 'p',
        html: '<b>Iodoform (triiodomethane), CHI<sub>3</sub>.</b> A yellow crystalline solid with a sharp, characteristic (objectionable) smell. <b>Use:</b> formerly an antiseptic — and crucially, its antiseptic action is due to the <b>free iodine it liberates on contact with skin</b>, not to the iodoform molecule itself. It has since been replaced by less odorous antiseptics. It also underpins the diagnostic <b>iodoform test</b> (Key procedures and logical framework).',
      },
      {
        t: 'p',
        html: '<b>Carbon tetrachloride (tetrachloromethane), CCl<sub>4</sub>.</b> A dense, non-flammable liquid. <b>Uses:</b> a solvent and degreasing agent; once used in fire extinguishers (the “Pyrene” type), because its heavy vapour blankets and smothers a flame. <b>Hazard:</b> toxic, causing liver damage like chloroform; and in a fire’s heat it can itself form phosgene, making it dangerous in poorly ventilated spaces. Released into the air, it also rises to the stratosphere and depletes the ozone layer.',
      },
      {
        t: 'p',
        html: '<b>Freons (chlorofluorocarbons, CFCs).</b> Extremely stable, non-toxic, non-corrosive, easily liquefiable gases — ideal <b>refrigerants</b> and <b>aerosol propellants</b>. <b>Hazard:</b> their very stability is the problem — they persist long enough to reach the stratosphere, where they contribute to <b>depletion of the ozone layer</b>.',
      },
      {
        t: 'p',
        html: '<b>DDT (p,p′-dichloro​diphenyl​trichloro​ethane).</b> One of the first and most powerful synthetic insecticides. <b>Hazard:</b> it is not readily biodegradable; ingested at a steady rate, it <b>builds up within an animal over time</b> (bioaccumulation) and climbs the food chain. Its use was banned in the United States in 1973, though it remains in use in some parts of the world (notably against malarial mosquitoes).',
      },
      {
        t: 'p',
        html: '<b>Fully fluorinated compounds</b> are even being investigated as potential <b>blood substitutes</b> in surgery — a reminder that organohalogen chemistry keeps finding new frontiers.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There are no formal derivations here; the high-value content is a set of <b>named tests, a storage rule, and a few diagnostic reactions</b>, each with a clear “why.”',
      },
      {
        t: 'p',
        html: '<b>A. Why chloroform is stored in dark, full bottles</b><br>Chloroform’s danger is slow air-and-light oxidation to phosgene:<br>2 CHCl<sub>3</sub> + O<sub>2</sub> →<sup>light</sup> 2 COCl<sub>2</sub> + 2 HCl<br>The procedure to prevent this follows directly from the hazard, step by step: (i) keep it in <b>dark-coloured (amber) bottles</b> to cut out light, which drives the oxidation; (ii) <b>fill the bottles to the brim</b> so almost no air (oxygen) remains above the liquid; (iii) add a <b>small amount of ethanol</b>, which both slows the oxidation and converts any phosgene that does form into a harmless product (diethyl carbonate). The first two steps remove what the oxidation needs, light and oxygen; the third restrains it and destroys any phosgene that still forms.',
      },
      {
        t: 'p',
        html: '<b>B. The carbylamine (isocyanide) test</b><br>When chloroform is warmed with a <b>primary amine</b> in the presence of alcoholic KOH, it forms an <b>isocyanide (carbylamine)</b> with a powerfully offensive smell:<br>R–NH<sub>2</sub> + CHCl<sub>3</sub> + 3KOH →<sup>Δ</sup> R–NC + 3KCl + 3H<sub>2</sub>O<br>This serves two purposes — it is the standard <b>test for primary amines</b>, and equally a <b>test for chloroform</b>. The reactive species generated from chloroform is dichlorocarbene (next point).',
      },
      {
        t: 'p',
        html: '<b>C. Dichlorocarbene by α-elimination</b><br>Chloroform loses HCl from the <b>same carbon</b> (α-elimination) under base to give the electron-deficient intermediate <b>dichlorocarbene</b>:<br>CHCl<sub>3</sub> + KOH (alc.) → :CCl<sub>2</sub> + KCl + H<sub>2</sub>O<br>This :CCl<sub>2</sub> is the reactive intermediate behind both the carbylamine reaction and the Reimer–Tiemann reaction.',
      },
      {
        t: 'p',
        html: '<b>D. The iodoform test</b><br>Compounds bearing a CH<sub>3</sub>CO– group joined to H, an alkyl or an aryl group (acetaldehyde, methyl ketones) — or a CH<sub>3</sub>CH(OH)– group, likewise joined, that can be oxidised to it (ethanol, propan-2-ol) — give a <b>yellow precipitate of iodoform</b> when treated with iodine and alkali:<br>CH<sub>3</sub>CO–R →<sup>I₂, NaOH</sup> CHI<sub>3</sub> ↓ (yellow) + RCOO<sup>−</sup><br>In full: CH<sub>3</sub>COR + 3I<sub>2</sub> + 4NaOH → CHI<sub>3</sub> + RCOONa + 3NaI + 3H<sub>2</sub>O.<br>Acetic acid, its esters and its amide carry CH<sub>3</sub>CO– too, but do not give the test.',
      },
      { t: 'fig', id: 'c12-06-fig-6.5' },
      {
        t: 'p',
        html: '<b>Distinguishing iodoform from chloroform:</b> iodoform is a yellow solid (m.p. 119 °C) with a characteristic smell; chloroform is a colourless liquid (b.p. 61 °C). Iodoform is covalent and does not ionise in aqueous silver nitrate, so a precipitate with AgNO<sub>3</sub> is not a reliable test. A further confirmatory reaction: iodoform heated with <b>silver powder</b> gives <b>acetylene</b> (C<sub>2</sub>H<sub>2</sub>). Chloroform gives acetylene the same way, so this confirms a haloform but does not tell the two apart. (Some exam questions say iodoform gives yellow AgI on heating with alcoholic AgNO<sub>3</sub> while chloroform does not, because the C–I bond is weak. Give that answer if asked; physical state is still the reliable way to tell them apart.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'What poisonous compound forms when chloroform is left in a half-empty, clear glass bottle exposed to sunlight? Write the equation and state the three precautions taken during storage to prevent it.',
        steps: [
          '<b>Reaction:</b> light and atmospheric oxygen slowly oxidise chloroform to <b>phosgene</b> (COCl<sub>2</sub>):<br>2 CHCl<sub>3</sub> + O<sub>2</sub> →<sup>light</sup> 2 COCl<sub>2</sub> + 2 HCl',
          '<b>Precautions (the first two remove what the reaction needs; the third restrains it and destroys its product):</b> (i) store in <b>dark/amber bottles</b> (excludes light); (ii) <b>fill to the brim</b> (excludes air/oxygen); (iii) add a <b>little ethanol</b> (slows oxidation and destroys any phosgene formed).',
        ],
        ans: 'Phosgene, COCl<sub>2</sub>; stored in full, dark bottles with a trace of ethanol.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these gives a positive iodoform test: methanol, ethanol, propan-1-ol, propan-2-ol?',
        steps: [
          '<b>The trap & the shortcut.</b> Don’t write any equations. Just scan each structure for the <b>CH<sub>3</sub>CH(OH)–</b> signature (a methyl group and a hydrogen on the carbinol carbon). Ethanol (CH<sub>3</sub>CH<sub>2</sub>OH — methyl on the carbinol carbon ✓) and propan-2-ol (CH<sub>3</sub>CH(OH)CH<sub>3</sub> — methyl on the carbinol carbon ✓) qualify. Methanol has no such carbon, and propan-1-ol’s carbinol carbon carries no methyl — both fail. (2-Methylpropan-2-ol has methyl groups there but no hydrogen, so it fails too.)',
          '<b>Speed rule:</b> a positive iodoform test needs a CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– unit joined to H, an alkyl or an aryl group.',
        ],
        ans: 'Ethanol and propan-2-ol.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Identify products A and B, and name each reaction:<br>(a) aniline + CHCl<sub>3</sub> + alcoholic KOH, warmed → <b>A</b><br>(b) propan-2-ol + I<sub>2</sub> + NaOH → <b>B</b> (a yellow solid)',
        steps: [
          '(a) Chloroform with a <b>primary amine</b> and alcoholic KOH gives the foul-smelling <b>isocyanide</b> — this is the <b>carbylamine test</b>:<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + CHCl<sub>3</sub> + 3KOH →<sup>Δ</sup> C<sub>6</sub>H<sub>5</sub>NC + 3KCl + 3H<sub>2</sub>O',
          '(b) Propan-2-ol carries the CH<sub>3</sub>CH(OH)– unit, so the <b>iodoform test</b> gives a yellow precipitate.',
        ],
        ans: 'A = phenyl isocyanide, C<sub>6</sub>H<sub>5</sub>NC (carbylamine reaction); B = iodoform, CHI<sub>3</sub> (iodoform test).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A school chemistry lab once kept both an old carbon-tetrachloride fire extinguisher and a bottle of chloroform. Explain, with reactions, why both can become sources of the same toxic gas, and why this makes a CCl<sub>4</sub> extinguisher dangerous in a small, closed room.',
        steps: [
          'The common villain is <b>phosgene, COCl<sub>2</sub></b>. <b>Chloroform route:</b> slow oxidation in light and air, 2 CHCl<sub>3</sub> + O<sub>2</sub> →<sup>light</sup> 2 COCl<sub>2</sub> + 2 HCl. <b>Carbon tetrachloride route:</b> although CCl<sub>4</sub> smothers flames usefully (dense, non-flammable vapour blanketing the fire), at the <b>high temperature of a fire and in the presence of moisture/oxygen it is itself converted to phosgene</b>: CCl<sub>4</sub> + H<sub>2</sub>O → COCl<sub>2</sub> + 2 HCl, or 2 CCl<sub>4</sub> + O<sub>2</sub> → 2 COCl<sub>2</sub> + 2 Cl<sub>2</sub>. In an open space the gas disperses, but in a <b>small, closed, poorly ventilated room</b> the phosgene concentration builds to dangerous levels — so the very tool meant to save you can poison you.',
          '(This pairing of “useful but hazardous” is the conceptual thread the question rewards.)',
        ],
        ans: 'Both can generate phosgene (COCl<sub>2</sub>) — chloroform by slow air-oxidation, CCl<sub>4</sub> thermally during firefighting — making the CCl<sub>4</sub> extinguisher hazardous in confined, unventilated spaces.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Give the IUPAC names of chloroform and iodoform, and state one use of each.',
            a: 'Trichloromethane (solvent for fats/resins; once an anaesthetic) and triiodomethane (formerly an antiseptic).',
          },
          {
            q: '[NEET] The antiseptic action of iodoform is due to: (state the actual active species).',
            a: 'The <b>free iodine (I<sub>2</sub>)</b> liberated on contact with skin, not iodoform itself.',
          },
          {
            q: '[JEE Main] Name the gas formed when chloroform is exposed to air and light, and write the balanced equation.',
            a: 'Phosgene, COCl<sub>2</sub>; 2 CHCl<sub>3</sub> + O<sub>2</sub> →<sup>light</sup> 2 COCl<sub>2</sub> + 2 HCl.',
          },
          {
            q: '[JEE Main] Which polyhalogen compounds are associated with (i) ozone-layer depletion and (ii) bioaccumulation in animals? Name the class/compound in each case.',
            a: '(i) Freons/CFCs → ozone depletion; (ii) DDT → bioaccumulation.',
          },
          {
            q: '[JEE Advanced] Explain why freons are considered “safe” inside a refrigerator yet “hazardous” for the planet, using the single property that is responsible for both.',
            a: 'Their extreme <b>chemical stability/inertness</b> makes them non-toxic and non-corrosive in use, but the same inertness lets them survive long enough to reach the stratosphere and damage ozone.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A positive iodoform test would be given by:',
        opts: [
          { label: 'methanol', nudge: '<b>(a)</b> methanol has no such carbon.' },
          { label: 'ethanol', nudge: null },
          { label: 'propan-1-ol', nudge: '<b>(c)</b> propan-1-ol’s carbinol carbon bears no methyl group, so it fails — a classic trap for students who assume “any alcohol works.”' },
          { label: 'diethyl ether', nudge: '<b>(d)</b> an ether has no carbinol/acetyl carbon at all.' },
        ],
        correct: 1,
        solution: 'Ethanol has the CH<sub>3</sub>CH(OH)– unit that the test detects.',
      },
      {
        t: 'mcq',
        q: 'Chloroform is stored in dark bottles filled to the brim primarily to prevent its conversion into:',
        opts: [
          { label: 'carbon tetrachloride', nudge: '<b>(a)</b> CCl<sub>4</sub> is not formed by storage oxidation.' },
          { label: 'phosgene', nudge: null },
          { label: 'dichloromethane', nudge: '<b>(c)</b> CH<sub>2</sub>Cl<sub>2</sub> is not formed by storage oxidation.' },
          { label: 'carbylamine', nudge: '<b>(d)</b> carbylamine is a reaction product with amines, not a storage hazard — choosing it confuses two different chloroform reactions.' },
        ],
        correct: 1,
        solution: 'Light and air oxidise chloroform to poisonous phosgene; darkness and a full bottle remove the light and oxygen it needs.',
      },
      {
        t: 'mcq',
        q: 'The environmental concern most directly associated with freons is:',
        opts: [
          { label: 'bioaccumulation in fish', nudge: '<b>(a)</b> describes DDT, not freons — a deliberate cross-trap.' },
          { label: 'acid rain', nudge: '<b>(b)</b> acid rain is tied to sulphur/nitrogen oxides.' },
          { label: 'depletion of the ozone layer', nudge: null },
          { label: 'eutrophication', nudge: '<b>(d)</b> eutrophication relates to nutrient runoff, unrelated here.' },
        ],
        correct: 2,
        solution: 'CFCs are stable enough to reach the stratosphere and deplete ozone.',
      },
      {
        t: 'mcq',
        q: 'Which statement about polyhalogen compounds is <b>incorrect</b>?',
        opts: [
          { label: 'Iodoform’s antiseptic action is due to liberated iodine', nudge: '<b>(a)</b> is true, so a student who misreads “incorrect” as “correct” will be tripped by this true distractor.' },
          { label: 'CCl<sub>4</sub> was used in fire extinguishers', nudge: '<b>(b)</b> is true, so a student who misreads “incorrect” as “correct” will be tripped by this true distractor.' },
          { label: 'DDT is readily biodegradable', nudge: null },
          { label: 'Chloroform was once used as an anaesthetic', nudge: '<b>(d)</b> is true, so a student who misreads “incorrect” as “correct” will be tripped by this true distractor.' },
        ],
        correct: 2,
        solution: '<b>(c) is the incorrect statement.</b> DDT is <b>not</b> readily biodegradable — its persistence and bioaccumulation are exactly why it was banned.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Crediting iodoform itself for the antiseptic action.</b> It is the <b>free iodine</b> released that disinfects, not the iodoform molecule.',
          '<b>Assuming “all alcohols give the iodoform test.”</b> Only those with a CH<sub>3</sub>CH(OH)– (or CH<sub>3</sub>CO–) unit do — ethanol and propan-2-ol yes; methanol and propan-1-ol no.',
          '<b>Confusing the chloroform storage hazard with its reactions.</b> Storage → slow oxidation to <b>phosgene</b>; the carbylamine/dichlorocarbene reactions are separate base-mediated processes.',
          '<b>Swapping the two environmental villains.</b> Freons/CFCs → ozone depletion; DDT → bioaccumulation/persistence. Examiners deliberately cross-pair them.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (recall speed):</b> Anchor each compound to a single “use ↔ hazard” pair and memorise the pair as a unit — chloroform: solvent/anaesthetic ↔ phosgene; CCl<sub>4</sub>: fire extinguisher ↔ phosgene + liver damage; freon: refrigerant ↔ ozone; DDT: insecticide ↔ bioaccumulation; DCM (dichloromethane): paint remover ↔ CNS harm; iodoform: antiseptic ↔ (active species is I<sub>2</sub>). In MCQs the wrong option is often the mismatched half of another compound’s pair.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Haloforms',
            note: 'CHCl<sub>3</sub> (chloroform), CHBr<sub>3</sub> (bromoform), CHI<sub>3</sub> (iodoform). Tetra: CCl<sub>4</sub> (carbon tetrachloride).',
          },
          {
            f: 'Chloroform',
            note: 'sweet colourless liquid; solvent + ex-anaesthetic; <b>light + air → phosgene COCl<sub>2</sub></b> ⇒ store in dark, brim-full bottles + a little ethanol. Reactions: carbylamine test (1° amine + alc. KOH → isocyanide), α-elimination → dichlorocarbene :CCl<sub>2</sub>.',
          },
          {
            f: 'Iodoform',
            note: 'yellow solid; antiseptic via <b>liberated I<sub>2</sub></b>; <b>iodoform test</b> positive for CH<sub>3</sub>CO–, CH<sub>3</sub>CH(OH)– groups joined to H, alkyl or aryl (yellow CHI<sub>3</sub> ↓); AgNO<sub>3</sub> is not a reliable test (covalent, does not ionise in aqueous solution); with Ag powder → acetylene (so does chloroform).',
          },
          {
            f: 'CCl<sub>4</sub>',
            note: 'non-flammable solvent + ex-fire-extinguisher (Pyrene); toxic (liver), can form phosgene in fires; also depletes ozone.',
          },
          {
            f: 'Freons (CFCs)',
            note: 'stable refrigerants/propellants ↔ <b>ozone-layer depletion</b>.',
          },
          {
            f: 'DDT',
            note: 'potent insecticide ↔ <b>not readily biodegradable, bioaccumulates</b>; banned in the US (1973).',
          },
        ],
        aids: [
          'Every polyhalogen compound = “a useful tool with a dark side” — learn the use and its paired hazard together.',
        ],
      },
    ],
  },
];
