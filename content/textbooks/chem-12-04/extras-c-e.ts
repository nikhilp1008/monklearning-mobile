import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Additional Topics C, D and E, word for word from the Class 12 Chemistry
 * Master Reference: C The Full Permanganate and Dichromate Bench (pp. 187–190; its
 * answers and common errors end on p. 190), D The f-Block Fine Print (pp. 190–193; its
 * common errors end at the top of p. 193) and E, the book's "Addendum P — What JEE &
 * NEET Actually Ask" (pp. 193–195), kept as the last Additional topic. Page 196 is the
 * title page of the next chapter.
 *
 * Each addendum prints its answers after its practice questions; each answer is set
 * here with its own question. These pages print no drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 187–190 ─────────────────────────
  {
    n: 'C',
    title: 'The Full Permanganate and Dichromate Bench',
    extra: true,
    kalam: 'This addendum completes the bench and drills the arithmetic.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter canonises the five headline reactions and the 5–3–1 rule. Previous-year papers, however, draw on NCERT’s complete list – sulphite, thiosulphate, the comproportionation with Mn<sup>2+</sup> – plus the working detail of the autocatalytic oxalate titration and quantitative titration arithmetic. This addendum completes the bench and drills the arithmetic.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The two-shelf balancing recipe',
        steps: [
          '<b>Pick the medium shelf first.</b> Acidic: MnO<sub>4</sub><sup>−</sup> takes 5 e<sup>−</sup> to Mn<sup>2+</sup>; dichromate takes 6 e<sup>−</sup> to 2 Cr<sup>3+</sup>. Neutral/faintly alkaline: MnO<sub>4</sub><sup>−</sup> takes 3 e<sup>−</sup> to brown MnO<sub>2</sub>. Strongly alkaline: MnO<sub>4</sub><sup>−</sup> takes 1 e<sup>−</sup> to green MnO<sub>4</sub><sup>2−</sup>.',
          '<b>Write the reductant’s half-reaction</b>, scale so electrons cancel, add, then check atoms and charge.',
          '<b>For arithmetic, work in equivalents</b>: equivalents of oxidant = equivalents of reductant; n-factors are KMnO<sub>4</sub> = 5/3/1 by medium, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = 6, Fe<sup>2+</sup> = 1, C<sub>2</sub>O<sub>4</sub><sup>2−</sup> = 2, S<sub>2</sub>O<sub>3</sub><sup>2−</sup> = 8 (when oxidised to sulphate).',
        ],
      },

      { t: 'part', title: 'The complete NCERT reaction set (beyond the chapter’s five)' },
      {
        t: 'p',
        html: 'Acidified permanganate additionally oxidises <b>sulphite to sulphate</b> and <b>sulphide (from H<sub>2</sub>S) to sulphur</b>:<br>5 SO<sub>3</sub><sup>2−</sup> + 2 MnO<sub>4</sub><sup>−</sup> + 6 H<sup>+</sup> → 2 Mn<sup>2+</sup> + 3 H<sub>2</sub>O + 5 SO<sub>4</sub><sup>2−</sup><br>5 S<sup>2−</sup> + 2 MnO<sub>4</sub><sup>−</sup> + 16 H<sup>+</sup> → 2 Mn<sup>2+</sup> + 8 H<sub>2</sub>O + 5 S',
      },
      {
        t: 'p',
        html: 'In neutral or faintly alkaline solution, two reactions matter beyond the iodide-to-iodate one the chapter prints:',
      },
      {
        t: 'p',
        html: '• <b>Thiosulphate is oxidised almost quantitatively to sulphate</b>:<br>8 MnO<sub>4</sub><sup>−</sup> + 3 S<sub>2</sub>O<sub>3</sub><sup>2−</sup> + H<sub>2</sub>O → 8 MnO<sub>2</sub> + 6 SO<sub>4</sub><sup>2−</sup> + 2 OH<sup>−</sup><br>Check the electron economy: each MnO<sub>4</sub><sup>−</sup> takes 3 e<sup>−</sup> (24 e<sup>−</sup> total); each S<sub>2</sub>O<sub>3</sub><sup>2−</sup> loses 8 e<sup>−</sup> (S: +2 → +6, two sulphurs). 3 × 8 = 24. Balanced.',
      },
      {
        t: 'p',
        html: '• <b>Comproportionation with</b> Mn<sup>2+</sup> – the opposite kind of step to the manganate disproportionation (two states meeting instead of one state splitting), and catalysed by ZnSO<sub>4</sub> or ZnO:<br>2 MnO<sub>4</sub><sup>−</sup> + 3 Mn<sup>2+</sup> + 2 H<sub>2</sub>O → 5 MnO<sub>2</sub> + 4 H<sup>+</sup><br>Mn(VII) and Mn(II) meet in the middle at Mn(IV). This is why permanganate titrations need enough acid: in weakly acidic or neutral solution the Mn<sup>2+</sup> formed meets excess MnO<sub>4</sub><sup>−</sup> and brown MnO<sub>2</sub> appears – and it is a standard “identify the product” item.',
      },

      { t: 'part', title: 'The oxalate titration – warm, slow-starting, self-catalysing' },
      {
        t: 'p',
        html: 'The chapter notes autocatalysis; here is the exam-ready version. The oxalate oxidation<br>5 C<sub>2</sub>O<sub>4</sub><sup>2−</sup> + 2 MnO<sub>4</sub><sup>−</sup> + 16 H<sup>+</sup> → 2 Mn<sup>2+</sup> + 8 H<sub>2</sub>O + 10 CO<sub>2</sub><br>is run at about 333 K (warm) because it is slow when cold. The Mn<sup>2+</sup> produced is itself the catalyst, so the first drops decolourise slowly and later drops instantly. KMnO<sub>4</sub> needs no indicator – the first permanent pink excess is the endpoint (a “self-indicator”). And the acid must be dilute H<sub>2</sub>SO<sub>4</sub>: HCl is oxidised to Cl<sub>2</sub> by permanganate (ruining the stoichiometry), and HNO<sub>3</sub> is itself an oxidant. Dichromate, by contrast, tolerates HCl because its lower potential does not appreciably oxidise chloride.',
      },

      { t: 'part', title: 'n-factor table for titration arithmetic' },
      {
        t: 'p',
        html: 'In the last column, <i>M</i> is the molar mass.',
      },
      {
        t: 'table',
        title: null,
        head: ['Species', 'Reaction (medium)', 'n-factor', 'Eq. mass'],
        rows: [
          ['KMnO<sub>4</sub>', '→ Mn<sup>2+</sup> (acid)', '5', '158/5 = 31.6'],
          ['KMnO<sub>4</sub>', '→ MnO<sub>2</sub> (neutral)', '3', '158/3 = 52.7'],
          ['KMnO<sub>4</sub>', '→ MnO<sub>4</sub><sup>2−</sup> (strong alkali)', '1', '158'],
          ['K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>', '→ 2 Cr<sup>3+</sup> (acid)', '6', '294/6 = 49'],
          ['Fe<sup>2+</sup>', '→ Fe<sup>3+</sup>', '1', '<i>M</i>'],
          ['H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> / C<sub>2</sub>O<sub>4</sub><sup>2−</sup>', '→ 2 CO<sub>2</sub>', '2', '<i>M</i>/2 (45 or 44)'],
          ['S<sub>2</sub>O<sub>3</sub><sup>2−</sup>', '→ 2 SO<sub>4</sub><sup>2−</sup>', '8', '<i>M</i>/8'],
          ['I<sup>−</sup>', '→ I<sub>2</sub> (acid, with MnO<sub>4</sub><sup>−</sup>)', '1', '<i>M</i>'],
          ['I<sup>−</sup>', '→ IO<sub>3</sub><sup>−</sup> (neutral, with MnO<sub>4</sub><sup>−</sup>)', '6', '<i>M</i>/6'],
        ],
      },
      {
        t: 'p',
        html: 'Note: equivalent mass of oxalate = molar mass/2 (two carbons each rise +3 → +4, one electron each). For the iodide pair the medium changes even the reductant’s n-factor: to iodate, iodine goes −1 → +5, a 6-electron climb. Medium controls both shelves.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the balanced ionic equation for the oxidation of sulphite (SO<sub>3</sub><sup>2−</sup>, as from sulphurous acid) by acidified KMnO<sub>4</sub>, and state the colour change.',
        steps: [
          'Acidic medium: MnO<sub>4</sub><sup>−</sup> + 8 H<sup>+</sup> + 5 e<sup>−</sup> → Mn<sup>2+</sup> + 4 H<sub>2</sub>O.',
          'Reductant: SO<sub>3</sub><sup>2−</sup> + H<sub>2</sub>O → SO<sub>4</sub><sup>2−</sup> + 2 H<sup>+</sup> + 2 e<sup>−</sup>.',
          'Scale 2 × (5 e<sup>−</sup>) and 5 × (2 e<sup>−</sup>), add:<br>2 MnO<sub>4</sub><sup>−</sup> + 5 SO<sub>3</sub><sup>2−</sup> + 6 H<sup>+</sup> → 2 Mn<sup>2+</sup> + 5 SO<sub>4</sub><sup>2−</sup> + 3 H<sub>2</sub>O',
          'Colour: purple to (nearly) colourless Mn<sup>2+</sup>.',
          'Charge check: left = (−2) + (−10) + (+6) = −6; right = (+4) + (−10) = −6. Atoms check. Balanced.',
          'If the question writes sulphurous acid as H<sub>2</sub>SO<sub>3</sub>, the same electrons give 2 MnO<sub>4</sub><sup>−</sup> + 5 H<sub>2</sub>SO<sub>3</sub> → 2 Mn<sup>2+</sup> + 5 SO<sub>4</sub><sup>2−</sup> + 4 H<sup>+</sup> + 3 H<sub>2</sub>O.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Statement 1: 0.1 mol of permanganate in acidic medium oxidises 0.5 mol of Fe<sup>2+</sup>. Statement 2: 0.1 mol of permanganate in acidic medium oxidises 0.166 mol of FeC<sub>2</sub>O<sub>4</sub> (ferrous oxalate). Assess both.',
        steps: [
          'Acid shelf: 1 mol MnO<sub>4</sub><sup>−</sup> accepts 5 mol e<sup>−</sup>, so 0.1 mol accepts 0.5 mol e<sup>−</sup>.',
          'Statement 1: Fe<sup>2+</sup> → Fe<sup>3+</sup> is 1 e<sup>−</sup> per ion, so 0.5 mol Fe<sup>2+</sup> – TRUE.',
          'Statement 2: FeC<sub>2</sub>O<sub>4</sub> delivers both Fe<sup>2+</sup> → Fe<sup>3+</sup> (1 e<sup>−</sup>) and C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2 CO<sub>2</sub> (2 e<sup>−</sup>) – 3 e<sup>−</sup> per formula unit. 0.5/3 = 0.1667 mol (0.167 mol to three significant figures; the statement’s 0.166 is this value cut short) – TRUE.',
          'The trap is reading FeC<sub>2</sub>O<sub>4</sub> as a 1-electron reductant; it is a double-barrelled one.',
        ],
        ans: 'Both statements correct.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '25.0 mL of a hydrogen peroxide solution required 20.0 mL of 0.02 M KMnO<sub>4</sub> in acid. Find the molarity of H<sub>2</sub>O<sub>2</sub>. (In acid: 2 MnO<sub>4</sub><sup>−</sup> + 5 H<sub>2</sub>O<sub>2</sub> + 6 H<sup>+</sup> → 2 Mn<sup>2+</sup> + 8 H<sub>2</sub>O + 5 O<sub>2</sub>; H<sub>2</sub>O<sub>2</sub> → O<sub>2</sub> is a 2-electron oxidation.)',
        steps: [
          'Equivalents of KMnO<sub>4</sub> = 0.0200 L × 0.02 mol L<sup>−1</sup> × 5 = 2.0 × 10<sup>−3</sup> eq.',
          'Equivalents of H<sub>2</sub>O<sub>2</sub> (<i>n</i> = 2): moles = 2.0 × 10<sup>−3</sup> / 2 = 1.0 × 10<sup>−3</sup> mol in 25.0 mL.',
          'Molarity = 1.0 × 10<sup>−3</sup> mol / 0.025 L',
          '(Sanity via the printed stoichiometry: 2 mol MnO<sub>4</sub><sup>−</sup> per 5 mol H<sub>2</sub>O<sub>2</sub>; 0.02 L × 0.02 mol L<sup>−1</sup> = 4 × 10<sup>−4</sup> mol MnO<sub>4</sub><sup>−</sup>, so H<sub>2</sub>O<sub>2</sub> = 4 × 10<sup>−4</sup> × 5/2 = 1.0 × 10<sup>−3</sup> mol. Same.)',
        ],
        ans: '0.04 M.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A reaction sequence runs: NaCl + K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + conc. H<sub>2</sub>SO<sub>4</sub> → (A) (deep-red vapours); A + NaOH → (B) (yellow solution); B + dil. H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O<sub>2</sub> → (C). Identify A, B, C.',
        steps: [
          'A is chromyl chloride, CrO<sub>2</sub>Cl<sub>2</sub> – the chromyl-chloride test for chloride (chromium at +6, two Cr=O and two Cr–Cl linkages).',
          'A with NaOH gives yellow sodium chromate, B = Na<sub>2</sub>CrO<sub>4</sub> (chromium still +6 – no redox yet).',
          'Acidifying B in the presence of H<sub>2</sub>O<sub>2</sub> gives the chromium peroxide species (CrO<sub>5</sub>, chromium still +6 with peroxo oxygens at −1) – the blue colour used as a confirmatory test, extractable into an organic layer.',
          'The lesson the sequence teaches: through all three steps chromium stays at +6 and no redox occurs; in CrO<sub>5</sub> four of the five oxygens are peroxo (−1) and one is oxo (−2).',
        ],
        ans: 'A = CrO<sub>2</sub>Cl<sub>2</sub>, B = Na<sub>2</sub>CrO<sub>4</sub>, C = CrO<sub>5</sub> (chromium peroxide, blue).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the equation for the reaction of KMnO<sub>4</sub> with ferrous sulphate in acidified solution.',
            a: 'MnO<sub>4</sub><sup>−</sup> + 5 Fe<sup>2+</sup> + 8 H<sup>+</sup> → Mn<sup>2+</sup> + 5 Fe<sup>3+</sup> + 4 H<sub>2</sub>O.',
          },
          {
            q: '[NEET] When MnO<sub>2</sub> is fused with KOH in air, a dark-green compound forms. On bubbling CO<sub>2</sub> through its solution, the colour changes to purple with a brown precipitate. Name all three manganese species.',
            a: 'Green K<sub>2</sub>MnO<sub>4</sub> (manganate, Mn(VI)) disproportionates in the faintly acidic CO<sub>2</sub> solution: 3 MnO<sub>4</sub><sup>2−</sup> + 4 H<sup>+</sup> → 2 MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2 H<sub>2</sub>O; species: K<sub>2</sub>MnO<sub>4</sub> (green), KMnO<sub>4</sub> (purple), MnO<sub>2</sub> (brown).',
          },
          {
            q: '[JEE Main] Calculate the equivalent mass of KMnO<sub>4</sub> in neutral medium and state how many moles of KI one mole of KMnO<sub>4</sub> oxidises in that medium (product: iodate).',
            a: 'Eq. mass = 158/3 = 52.7. In neutral medium MnO<sub>4</sub><sup>−</sup> takes 3 e<sup>−</sup>, and I<sup>−</sup> → IO<sub>3</sub><sup>−</sup> loses 6 e<sup>−</sup>, so 1 mol KMnO<sub>4</sub> oxidises 3/6 = 0.5 mol KI.',
          },
          {
            q: '[JEE Main] Why does a permanganate-oxalate titration start slowly and then accelerate, and why is no indicator added?',
            a: 'The reaction is slow when cold (hence warming to ~333 K), and the Mn<sup>2+</sup> product autocatalyses further reaction; KMnO<sub>4</sub> is its own indicator – the first persistent pink marks the endpoint.',
          },
          {
            q: '[JEE Advanced] In neutral medium, thiosulphate reduces permanganate to MnO<sub>2</sub>. How many moles of KMnO<sub>4</sub> are consumed per mole of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>?',
            a: 'Each S<sub>2</sub>O<sub>3</sub><sup>2−</sup> loses 8 e<sup>−</sup> (to 2 SO<sub>4</sub><sup>2−</sup>); each MnO<sub>4</sub><sup>−</sup> gains 3 e<sup>−</sup>. Moles of KMnO<sub>4</sub> per mole of thiosulphate = 8/3, matching the 8:3 equation.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Using <i>n</i> = 5 regardless of medium; counting one Cr in the dichromate n-factor (it is 6, two Cr each gaining 3 e<sup>−</sup>); forgetting FeC<sub>2</sub>O<sub>4</sub> or H<sub>2</sub>O<sub>2</sub> carry <i>n</i> > 1; acidifying with HCl or HNO<sub>3</sub>; assigning chromium a changed oxidation state in the chromyl-chloride sequence (it stays +6 throughout); claiming permanganate’s purple comes from a d–d transition (Mn is d<sup>0</sup> – the colour is ligand-to-metal charge transfer).',
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 190–193 ─────────────────────────
  {
    n: 'D',
    title: 'The f-Block Fine Print',
    extra: true,
    kalam: 'Examiners also ask for the small print: actual radii, the europium anomalies, ionisation-enthalpy ballparks, and actinoid specifics.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches the f-block through its organising ideas. Examiners also ask for the small print: actual radii, the europium anomalies, ionisation-enthalpy ballparks, and actinoid specifics. Collected here.',
      },

      { t: 'part', title: 'Lanthanoids – the numbers worth carrying' },
      {
        t: 'p',
        html: '• <b>Radii.</b> Metallic radii fall from 187 pm (La) to about 173 pm (Lu); Ln<sup>3+</sup> ionic radii fall smoothly from 103.2 pm (La<sup>3+</sup>) to about 86 pm at the end of the series (the values Figure 4.3 plots; NCERT’s table starts at 106 pm). The ionic decrease is regular; the atomic decrease is not.',
      },
      {
        t: 'p',
        html: '• <b>The Eu and Yb anomalies.</b> Europium’s metallic radius jumps to 199 pm (neighbours sit near 180 pm), and density and related properties break their smooth trend at Eu and Yb (occasionally also Sm and Tm). Reason: with the extra-stable half-filled (4f<sup>7</sup>, Eu) and filled (4f<sup>14</sup>, Yb) cores, these two contribute essentially only their two 6s electrons to metallic bonding – they behave as “divalent” metals in the lattice, larger and less dense than the trend.',
      },
      {
        t: 'p',
        html: '• <b>Ionisation enthalpies.</b> First IE ~ 600 kJ mol<sup>−1</sup>, second ~ 1200 kJ mol<sup>−1</sup> – comparable to calcium, which is why the early lanthanoids are about as reactive as Ca. The third IE dips abnormally low at La, Gd and Lu, because the third ionisation leaves behind f<sup>0</sup>, f<sup>7</sup> and f<sup>14</sup> respectively (the chapter’s “stability magnets”).',
      },
      {
        t: 'p',
        html: '• <i>E</i>°(Ln<sup>3+</sup>/Ln) sits at −2.2 to −2.4 V – with one exception: <b>Eu, −2.0 V</b>, reflecting the stabilisation of Eu<sup>2+</sup> (f<sup>7</sup>). NEET has asked exactly this exception.',
      },
      {
        t: 'p',
        html: '• <b>Ce(IV) the analytical oxidant.</b> <i>E</i>°(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = +1.74 V – thermodynamically Ce<sup>4+</sup> can oxidise water, but the reaction is so slow that Ce(IV) solutions are stable enough to use as volumetric oxidants (cerimetry). Kinetics rescuing a thermodynamically doomed reagent is a favourite assertion-reason frame.',
      },
      {
        t: 'p',
        html: '• <b>Off-+3 roster.</b> +4: Ce (solution and solids; a strong oxidant reverting to +3), and Pr, Nd, Tb, Dy in oxides MO<sub>2</sub> only – Tb(IV) is the f<sup>7</sup> oxidant. +2: Eu (f<sup>7</sup>), Yb (f<sup>14</sup>), and Sm behaves like Eu; all are strong reductants reverting to +3.',
      },

      { t: 'part', title: 'Actinoids – the details the chapter compresses' },
      {
        t: 'p',
        html: '• <b>Configurations.</b> 5f and 6d and 7s are of comparable energy; the irregularities again trace to f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> (e.g. Am is [Rn]5f<sup>7</sup>7s<sup>2</sup>, Cm is [Rn]5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup>). The 5f orbitals are less buried than 4f, so they bond far more.',
      },
      {
        t: 'p',
        html: '• <b>Actinoid contraction</b> exists and is greater per step than the lanthanoid contraction, because 5f electrons shield one another even more poorly than 4f.',
      },
      {
        t: 'p',
        html: '• <b>Oxidation states.</b> +3 general; the maximum climbs Th(+4) → Pa(+5) → U(+6) → Np(+7) and then declines, the later actinoids reverting to lanthanoid-like +3. The +3 and +4 ions tend to hydrolyse. Because the distribution is so uneven, NCERT finds it unsatisfactory to review actinoid chemistry in terms of oxidation states.',
      },
      {
        t: 'p',
        html: '• <b>Ionisation enthalpies of the early actinoids are lower than those of the early lanthanoids</b>: when 5f orbitals begin to fill they penetrate the inner core less, so 5f electrons are more effectively shielded and less firmly held – which is also why they are available for bonding.',
      },
      {
        t: 'p',
        html: '• <b>Radioactivity fine print.</b> The earlier actinoids have relatively long half-lives; the later members’ half-lives shrink to days and down to about 3 minutes for lawrencium (<i>Z</i> = 103); the late members could only ever be made in nanogram quantities. A lanthanoid-like family resemblance emerges only in the second half of the actinoid series.',
      },
      {
        t: 'p',
        html: '• <b>Chemical behaviour of the metals.</b> Highly reactive, especially finely divided; boiling water gives a mixture of oxide and hydride; HCl attacks all of them, but most are barely touched by HNO<sub>3</sub> (a protective oxide layer passivates them), and alkalies have no action.',
      },

      { t: 'part', title: 'The applications ledger (NCERT 8.7, consolidated)' },
      {
        t: 'p',
        html: 'The best single use of the lanthanoids is in alloy steels for plates and pipes; mischmetall (~95% lanthanoid metal, ~5% Fe, traces of S, C, Ca, Al) goes into Mg-based alloys for bullets, shells and lighter flints; mixed oxides catalyse petroleum cracking; individual oxides serve as phosphors. On the d-block side: TiO<sub>2</sub> for the pigment industry, MnO<sub>2</sub> in dry battery cells, Zn and Ni/Cd in batteries, Cu, Ag and Au the coinage metals (modern UK “copper” coins are copper-coated steel; many UK “silver” coins a Cu/Ni alloy); and the catalyst roster of the chapter (Fe–Haber, V<sub>2</sub>O<sub>5</sub>–Contact, Ni–hydrogenation). For the actinoids: Th (bred to fissile <sup>233</sup>U), U (<sup>235</sup>U) and Pu (<sup>239</sup>Pu) serve as nuclear fuels.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The INCORRECT statement is:<br>(a) first ionisation enthalpies of lanthanoids are around 600 kJ mol<sup>−1</sup>;<br>(b) both Np and Pu exhibit a maximum oxidation state of +7;<br>(c) the transition metal in the Ziegler–Natta catalyst is Ti;<br>(d) europium has the smallest atomic radius among the lanthanoids.',
        steps: [
          '<b>The fast way.</b> (a) is NCERT verbatim (~600 kJ mol<sup>−1</sup>).',
          '(b) Np reaches +7, and Pu is also listed up to +7 in NCERT’s actinoid oxidation-state table.',
          '(c) Ziegler–Natta = TiCl<sub>4</sub>/Al(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>, Ti is right.',
          '(d) Europium is the anomaly in the opposite direction – its radius (199 pm) is anomalously LARGE (the f<sup>7</sup> core keeps it quasi-divalent).',
        ],
        ans: '(d).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Explain: (i) <i>E</i>°(Eu<sup>3+</sup>/Eu) = −2.0 V, while its neighbours sit near −2.3 V; (ii) the third ionisation enthalpy of gadolinium is abnormally low.',
        steps: [
          '(i) Eu is uniquely willing to stop at +2 because Eu<sup>2+</sup> has the half-filled 4f<sup>7</sup> configuration; the couple is therefore less negative than the series norm.',
          '(ii) The third ionisation of Gd removes the electron after which the ion is Gd<sup>3+</sup> = 4f<sup>7</sup>, half-filled and extra-stable, so reaching it is unusually cheap.',
          'Both facts are the f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> magnet at work – the same magnet that fixes colours, magnetism and the off-+3 states.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is actinoid contraction, and why is it greater from element to element than the lanthanoid contraction?',
            a: 'The steady decrease of atomic/ionic radii from Ac/Th to Lr, caused by poor mutual shielding of 5f electrons; it exceeds the lanthanoid contraction because 5f electrons shield one another even more poorly than 4f electrons.',
          },
          {
            q: '[NEET] Which lanthanoid has <i>E</i>°(Ln<sup>3+</sup>/Ln) noticeably less negative than the −2.2 to −2.4 V norm, and why?',
            a: 'Eu (−2.0 V): Eu<sup>2+</sup> is stabilised by the half-filled 4f<sup>7</sup> configuration, so the third ionisation, out of that stable 4f<sup>7</sup>, is unusually costly and the couple is less negative than the norm.',
          },
          {
            q: '[JEE Main] Cerium(IV) is a strong oxidant yet is sold as a stable analytical reagent. Resolve the paradox.',
            a: '<i>E</i>°(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = +1.74 V says Ce<sup>4+</sup> should oxidise water, but the reaction is kinetically very slow, so aqueous Ce(IV) persists and serves as a volumetric oxidant (ceric sulphate).',
          },
          {
            q: '[JEE Main] Why do the early actinoids have lower ionisation enthalpies than the early lanthanoids?',
            a: 'The 5f orbitals penetrate the inner electron core less than 4f, so 5f electrons are better shielded from the nucleus and less firmly held – cheaper to remove, and readier to bond.',
          },
          {
            q: '[JEE Advanced] The metallic radius of Eu (199 pm) exceeds even lanthanum’s (187 pm). Explain, and predict qualitatively how the densities of Eu and Yb compare with their neighbours.',
            a: 'Eu’s 4f<sup>7</sup> half-filled core is so stable that the metal bonds through essentially only its two 6s electrons – weaker metallic bonding, larger radius. The same applies to Yb (4f<sup>14</sup>). Both are therefore anomalously large and less dense than their neighbours, breaking the smooth rise in density across the series.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Quoting the spin-only formula for Ln<sup>3+</sup> moments (use μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)); Gd<sup>3+</sup> is the exception that follows from <i>L</i> = 0: f<sup>7</sup> has <i>J</i> = <i>S</i> and <i>g</i> = 2, so both formulas give the same √63 ≈ 7.9 BM); stating the contraction cause as “good shielding”; calling La an f-block element by configuration (its differentiating electron is 5d – it is discussed with the lanthanoids only by resemblance); forgetting Pm is the lone synthetic/radioactive lanthanoid; assuming all actinoids behave identically (the lanthanoid-like pattern emerges only in the second half).',
      },
    ],
  },

  // ─────────────── Additional topic E (the book's Addendum P) · pp. 193–195 ───────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Approach: fix the medium, fix the n-factor, then arithmetic.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to read this addendum.</b> It summarises the pattern of questions asked on this chapter in previous JEE Main and NEET papers (including NTA JEE Main 2022 and 2025). Every question below has been re-solved from first principles; where a frequently circulated answer disagrees with NCERT, the NCERT-consistent answer is given.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: 'Across previous-year papers, the chapter’s six question territories take roughly these shares:',
      },
      {
        t: 'table',
        title: null,
        head: ['Territory', 'Approx. share', 'Typical demand'],
        rows: [
          [
            'KMnO<sub>4</sub> / K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> chemistry',
            '25%',
            '5–3–1 medium rule, n-factor, preparation chain, colour of products',
          ],
          ['Magnetic moment (spin-only)', '20%', 'compute μ from the ion, or back-solve the ion from μ'],
          [
            'Colour / colourless ions',
            '15%',
            'd<sup>0</sup>/d<sup>10</sup> filter, LMCT for MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>',
          ],
          ['f-block (contraction, OS, magnetism)', '20%', 'cause of contraction, Zr/Hf, Eu/Ce off-states, actinoid vs lanthanoid'],
          ['Oxidation states & trends', '12%', 'max OS = group number, melting-point dip at Mn, MO oxides'],
          [
            'Qualitative-analysis crossovers',
            '8%',
            'Cu<sup>2+</sup> tests, chromyl chloride, [Fe(CN)<sub>6</sub>]<sup>3−</sup>/[Fe(CN)<sub>6</sub>]<sup>4−</sup> complexes, thiosulphate',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Concrete citations: NTA JEE Main 2022 (24 June, Shift 1) asked the oxidation-state difference between chromate and dichromate (answer: 0 – Cr is +6 in both); JEE Main 2025 asked an atom-counting chromyl-chloride sequence, and several papers repeat “which Ln<sup>3+</sup> is diamagnetic”, “equivalent mass of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = 49”, and “mischmetall”.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>1. The magnetic-moment ladder, forwards and backwards.</b> “μ of Mn<sup>2+</sup>?”, “Cr<sup>3+</sup> moment = <i>z</i> × 10<sup>−1</sup> BM, find <i>z</i>” (3.87 BM = 38.7 × 10<sup>−1</sup> BM, so <i>z</i> is about 39), “highest moment among 3d<sup><i>n</i></sup> configs” (d<sup>5</sup>, 5.92), “match Co<sup>3+</sup>/Cr<sup>3+</sup>/Fe<sup>3+</sup>/Ni<sup>2+</sup> with √24/√15/√35/√8”. One worked shape:',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The spin-only moments of free Ti<sup>3+</sup>, V<sup>2+</sup> and Sc<sup>3+</sup> are respectively:<br>(a) 1.73, 0, 3.87<br>(b) 0, 3.87, 1.73<br>(c) 3.87, 1.73, 0<br>(d) 1.73, 3.87, 0.',
        steps: [
          'Ti<sup>3+</sup> = 3d<sup>1</sup> (<i>n</i> = 1, 1.73); V<sup>2+</sup> = 3d<sup>3</sup> (<i>n</i> = 3, 3.87); Sc<sup>3+</sup> = 3d<sup>0</sup> (<i>n</i> = 0, 0).',
          'The ladder 1.73/2.83/3.87/4.90/5.92 for <i>n</i> = 1–5 answers the whole family in seconds. Two refinements examiners like: observed moments can be quoted as ranges (Co<sup>2+</sup> “4.4–5.2 BM” – orbital contribution lifts real values above spin-only), and Gd<sup>3+</sup> (f<sup>7</sup>) at 7.9 BM, from <i>g</i>√(<i>J</i>(<i>J</i> + 1)) with <i>J</i> = 7/2, <i>g</i> = 2, which here equals the spin-only √(7 × 9) = √63 because <i>L</i> = 0. The d-block ladder stops at <i>n</i> = 5, so count the seven f-electrons.',
        ],
        ans: '(d).',
      },
      {
        t: 'p',
        html: '<b>2. The colour filter.</b> “Which pair is coloured AND paramagnetic?”, “which Ln<sup>3+</sup> is diamagnetic?”, “the colour of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is due to…”. The first falls to the d<sup>0</sup>/d<sup>10</sup> filter. The second falls to f<sup>0</sup>/f<sup>14</sup> only: f<sup>7</sup> (Gd<sup>3+</sup>) is colourless but strongly paramagnetic. The third has a fixed answer that papers repeat verbatim: <b>ligand-to-metal charge transfer</b> – both MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> are d<sup>0</sup>, so no d–d transition exists.',
      },
      {
        t: 'p',
        html: '<b>3. The n-factor / stoichiometry shell game.</b> Equivalent mass of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (49), the “0.1 mol MnO<sub>4</sub><sup>−</sup> oxidises 0.5 mol Fe<sup>2+</sup> and 0.166 mol FeC<sub>2</sub>O<sub>4</sub>” two-statement form (both true – see the second worked example of Additional topic C), and counting atoms or linkages in chromyl chloride (CrO<sub>2</sub>Cl<sub>2</sub>: two Cr=O and two Cr–Cl linkages; Cr at +6). Approach: fix the medium, fix the n-factor, then arithmetic.',
      },
      {
        t: 'p',
        html: '<b>4. “Give reasons” as assertion-reason.</b> Lanthanoid contraction causing Zr ≈ Hf radii (both true, R explains A); Ce<sup>4+</sup> (f<sup>0</sup>, so no f–f transitions) versus “+3 is the stable lanthanoid state” (both true, but R does not explain A); Cu<sup>2+</sup> more stable than Cu<sup>+</sup> in water because of hydration enthalpy (both true, R explains A). A three-step gate (test A alone, test R alone, test the link) resolves all of these.',
      },
      {
        t: 'p',
        html: '<b>5. The preparation chain with colours.</b> Chromite ore + Na<sub>2</sub>CO<sub>3</sub>/K<sub>2</sub>CO<sub>3</sub> + air → yellow chromate → acidify → orange dichromate; pyrolusite + KOH + O<sub>2</sub> → green manganate → disproportionation → purple permanganate. Papers ask the oxidation state of the metal in each anion (+6 in both chromate and dichromate; +6 in manganate, +7 in permanganate) and the “not obtained when KMnO<sub>4</sub> is heated at 513 K” variant (answer: MnO – the products are K<sub>2</sub>MnO<sub>4</sub>, MnO<sub>2</sub>, O<sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>6. The trend one-liners.</b> “Highest oxidation state in the 3d series” (Mn, +7); “metal with highest enthalpy of atomisation” (V → max OS +5); “inert pair effect is NOT shown by transition metals” (true – that is p-block); “all 3d metals except Sc form MO oxides” (NCERT’s own statement); “which M<sup>2+</sup> of the highest-melting 3d metal has moment ~5 BM” (melting points peak near V/Cr, V 2183 K and Cr 2180 K in Figure 4.1, and the “~5 BM” picks out Cr: Cr<sup>2+</sup> is d<sup>4</sup> with a spin-only moment of 4.90 BM, whereas V<sup>2+</sup> (d<sup>3</sup>) is 3.87 BM and Mn<sup>2+</sup> (d<sup>5</sup>, 5.92 BM) is the usual “highest moment” distractor – read the options).',
      },

      { t: 'part', title: 'The traps examiners rely on' },
      {
        t: 'mistakes',
        items: [
          '<b>The LMCT trap.</b> Any d<sup>0</sup> ion that is intensely coloured (MnO<sub>4</sub><sup>−</sup>, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, CrO<sub>4</sub><sup>2−</sup>) is coloured by charge transfer, never d–d. It is asked in at least three different ways.',
          '<b>The <i>E</i>° sign inversion.</b> Cr<sup>2+</sup> reducing (couple −0.41 V) vs Mn<sup>3+</sup> oxidising (+1.57 V): both are d<sup>4</sup>. Students who memorise “d<sup>4</sup> = reducing” lose the point.',
          '<b>The medium swap.</b> MnO<sub>2</sub> (brown) in neutral, MnO<sub>4</sub><sup>2−</sup> (green) in strong alkali, Mn<sup>2+</sup> (nearly colourless) in acid. One word in the stem is the whole question.',
          '<b>Two answers that are often misquoted.</b> Cold conc. H<sub>2</sub>SO<sub>4</sub> on K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> precipitates red CrO<sub>3</sub> (not Cr<sub>2</sub>O<sub>3</sub>). And a crystal-field splitting Δ<sub>o</sub> of 192 kJ mol<sup>−1</sup> (some questions call it “CFSE”) converts to an absorbed wavelength via <i>λ</i> = <i>hcN</i><sub>A</sub>/<i>E</i>, with <i>E</i> the energy per mole; with <i>E</i> = 192 × 10<sup>3</sup> J mol<sup>−1</sup>, <i>h</i> = 6.4 × 10<sup>−34</sup> J s, <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup> and <i>N</i><sub>A</sub> = 6 × 10<sup>23</sup> mol<sup>−1</sup> this gives <i>λ</i> ≈ 600 nm (not 240 nm) – carry the powers of ten carefully.',
          '<b>f-block identity traps.</b> Te is p-block (not d-block); La/Ac are d-block by configuration; Eu<sup>2+</sup> (not “Eu<sup>3+</sup>”) is the reducing off-state; Ce<sup>4+</sup> is known in aqueous solution (a statement denying this is a common “incorrect statement” option).',
        ],
      },

      { t: 'part', title: 'Graded practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why does zinc show only the +2 oxidation state?',
            a: '3d<sup>10</sup> full shell never participates.',
          },
          {
            q: '[NEET] Which is colourless: Cu<sup>2+</sup>, Lu<sup>3+</sup>, Cr<sup>3+</sup>, MnO<sub>4</sub><sup>−</sup>?',
            a: 'Lu<sup>3+</sup> (f<sup>14</sup>; MnO<sub>4</sub><sup>−</sup> is purple though d<sup>0</sup> – LMCT).',
          },
          {
            q: '[NEET] The spin-only magnetic moment of Fe<sup>2+</sup> (free ion) is closest to: 1.73, 3.87, 4.90, 5.92 BM.',
            a: '4.90 BM (<i>n</i> = 4).',
          },
          {
            q: '[JEE Main] 0.49 g K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> oxidises how many moles of Fe<sup>2+</sup> in acid? (<i>M</i> = 294.)',
            a: '0.49/294 = 1.67 × 10<sup>−3</sup> mol dichromate, <i>n</i> = 6 → 1.0 × 10<sup>−2</sup> mol Fe<sup>2+</sup>.',
          },
          {
            q: '[JEE Main] Write the products when CO<sub>2</sub> is passed through potassium manganate solution, with the balanced equation.',
            a: '3 MnO<sub>4</sub><sup>2−</sup> + 4 H<sup>+</sup> → 2 MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2 H<sub>2</sub>O (CO<sub>2</sub> supplies the acidity); purple KMnO<sub>4</sub> + brown MnO<sub>2</sub>.',
          },
          {
            q: '[JEE Main] Why is K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> and not KMnO<sub>4</sub> the primary standard of choice, and why does dichromate tolerate HCl when permanganate does not?',
            a: 'Dichromate is stable, weighable, non-deliquescent; its <i>E</i>° (+1.33 V) does not appreciably oxidise Cl<sup>−</sup>, whereas permanganate (+1.51 V) does – and KMnO<sub>4</sub> also decomposes in light.',
          },
          {
            q: '[JEE Main] <i>E</i>°(Cr<sup>3+</sup>/Cr<sup>2+</sup>) = −0.41 V and <i>E</i>°(Mn<sup>3+</sup>/Mn<sup>2+</sup>) = +1.57 V. Identify the strongest reducing and strongest oxidising species among Cr<sup>2+</sup>, Cr<sup>3+</sup>, Mn<sup>2+</sup>, Mn<sup>3+</sup> and justify from configuration.',
            a: 'Cr<sup>2+</sup> strongest reductant (reaches stable d<sup>3</sup>), Mn<sup>3+</sup> strongest oxidant (reaches stable d<sup>5</sup>).',
          },
          {
            q: '[JEE Main] The <i>E</i>° for Ce<sup>4+</sup>/Ce<sup>3+</sup> is +1.74 V. Predict what Ce<sup>4+</sup> should do to water, and explain why ceric solutions are nonetheless usable.',
            a: 'It should oxidise water; the reaction is kinetically negligible, so Ce(IV) persists in solution (cerimetry).',
          },
          {
            q: '[JEE Advanced] Compute the moles of KMnO<sub>4</sub> needed in acid to oxidise 0.1 mol of Fe<sup>2+</sup> and, separately, 0.1 mol of FeC<sub>2</sub>O<sub>4</sub>.',
            a: 'Fe<sup>2+</sup>: 0.02 mol (0.1 mol e<sup>−</sup> / 5); FeC<sub>2</sub>O<sub>4</sub>: 0.1 mol gives 0.3 mol e<sup>−</sup> → 0.06 mol KMnO<sub>4</sub>.',
          },
          {
            q: '[JEE Advanced] Explain why 4d and 5d members of a group (Zr/Hf, Nb/Ta) are chemically near-twins, and why this makes 5d metals the densest known.',
            a: 'The lanthanoid contraction cancels the expected size jump (Zr 160 pm ≈ Hf 159 pm), so pairs occur together, resist separation, and the small 5d atoms pack into exceptionally dense metals (Os, Ir).',
          },
        ],
      },
    ],
  },
];
