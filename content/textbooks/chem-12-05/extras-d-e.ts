import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional Topics D and E, word for word from the Class 12 Chemistry
 * Master Reference: D The Werner Crossovers (pp. 246–248; its answers and common errors
 * end at the top of p. 248) and E, the book's "Addendum P – What JEE & NEET Actually
 * Ask" (pp. 248–250), kept as the last Additional topic. Page 251 is the title page of
 * the next chapter.
 *
 * Each addendum prints its answers after its practice questions; each answer is set
 * here with its own question. These pages print no drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 246–248 ─────────────────────────
  {
    n: 'D',
    title: 'The Werner Crossovers: Counting Ions, Waters, and Electrons',
    extra: true,
    kalam: 'The final drill set converts Werner’s primary/secondary valence into arithmetic.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The final drill set converts Werner’s primary/secondary valence into arithmetic: moles of AgCl, electrolyte type, waters inside vs outside the sphere, and EAN bookkeeping in carbonyls. These are the favourite “numerical value” disguises in past papers.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'Four ledgers',
        steps: [
          '<b>Ionisable-ion ledger.</b> Moles of AgCl = moles of Cl<sup>−</sup> OUTSIDE the bracket. A cation exchanger holds back a complex cation and lets its counter anions through.',
          '<b>Electrolyte ledger.</b> “1:2 electrolyte” means 1 cation + 2 anions in solution, so with singly charged anions (Cl<sup>−</sup>, NO<sub>3</sub><sup>−</sup>) the complex cation carries +2; “1:3” means +3. Read the charge, then the oxidation state.',
          '<b>Water ledger.</b> In hydrates, waters inside the bracket are ligands; waters after a dot in a coordination formula, as in [CrCl<sub>2</sub>(H<sub>2</sub>O)<sub>4</sub>]Cl·2H<sub>2</sub>O, are lattice water. A bare composition formula such as CuSO<sub>4</sub>·5H<sub>2</sub>O does not say where its waters sit. Copper sulphate pentahydrate is the flagship: <b>four</b> waters are coordinated to Cu<sup>2+</sup> and the <b>fifth is hydrogen-bonded</b> (to sulphate) – which is why four waters leave easily and the fifth needs stronger heating.',
          '<b>Electron ledger (EAN).</b> EAN = <i>Z</i> − ON + 2 × (CO per metal), plus 1 per M–M bond; stable first-row carbonyls usually land on 36 (Kr) – [V(CO)<sub>6</sub>], at 35, is the exception. Each CO donates 2 electrons; a bridging CO gives 1 electron to each metal it spans; a metal–metal bond adds 1 to each metal.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A solution containing 2.675 g of CoCl<sub>3</sub>·6NH<sub>3</sub> (molar mass 267.5 g mol<sup>−1</sup>) is passed through a cation exchanger. The eluted chloride, treated with excess AgNO<sub>3</sub>, gives 4.305 g of AgCl (molar mass 143.5 g mol<sup>−1</sup>). Write the formula of the complex.',
        steps: [
          'Moles of complex = 2.675/267.5 = 0.0100 mol. Moles of AgCl = 4.305/143.5 = 0.0300 mol.',
          'Ratio 3 ionisable Cl<sup>−</sup> per formula unit → all three chlorides sit OUTSIDE the sphere, and all six NH<sub>3</sub> inside: [Co(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub>. (Co is +3, CN 6.)',
          'The same logic on CoCl<sub>3</sub>·5NH<sub>3</sub> giving 2 mol AgCl per mole forces [CoCl(NH<sub>3</sub>)<sub>5</sub>]Cl<sub>2</sub>, and on CoCl<sub>3</sub>·4NH<sub>3</sub> giving 1 mol, [CoCl<sub>2</sub>(NH<sub>3</sub>)<sub>4</sub>]Cl – one precipitate number fixes the entire structure.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A complex of composition FeCl<sub>3</sub>·4H<sub>2</sub>O·NH<sub>3</sub> shows conductivity corresponding to a 1:2 electrolyte. What is the oxidation state of iron, and what is the coordination formula?',
        steps: [
          '1:2 electrolyte → 1 cation + 2 anions → the complex cation is +2, with 2 Cl<sup>−</sup> outside and the remaining 1 Cl<sup>−</sup>, 4 H<sub>2</sub>O and 1 NH<sub>3</sub> inside: [FeCl(NH<sub>3</sub>)(H<sub>2</sub>O)<sub>4</sub>]Cl<sub>2</sub>.',
          'Charge balance: <i>x</i> + (−1) + 0 + 0 = +2, so',
        ],
        ans: 'Fe = +3. CN = 6.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In [Co<sub>2</sub>(CO)<sub>8</sub>], count the Co–Co bonds (X) and terminal CO ligands (Y), and give X + Y.',
        steps: [
          'EAN per Co: 27 − 0 + 2<i>n</i> + 1 = 36 (the +1 is the Co–Co bond) needs <i>n</i> = 4 CO per cobalt, 8 in total, consistent with the formula.',
          'The EAN count alone does not fix the bridges (eight terminal CO would also give 36). The known solid structure has <b>one Co–Co bond</b> (X = 1), <b>two bridging</b> CO, and the remaining <b>six</b> CO <b>terminal</b> (Y = 6).',
          '(A recent JEE Main paper asked exactly this.)',
        ],
        ans: 'X + Y = 7.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>, β = 1.0 × 10<sup>9</sup>. In a solution with [Zn(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>] = 0.10 M and free [NH<sub>3</sub>] = 0.50 M, estimate free [Zn<sup>2+</sup>], and state what this means for a precipitation test that needs free Zn<sup>2+</sup>.',
        steps: [
          '[Zn<sup>2+</sup>] = [Zn(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>]/(β [NH<sub>3</sub>]<sup>4</sup>) = 0.10/((1.0 × 10<sup>9</sup>)(0.50)<sup>4</sup>) = 0.10/(6.25 × 10<sup>7</sup>)',
          'Essentially no free Zn<sup>2+</sup> remains: a large stability constant throttles the free-ion concentration, so a test that needs more free ion than this fails – the quantitative meaning of “masking”. (A test with a very insoluble product can still work: ZnS still precipitates from ammoniacal solution.)',
        ],
        ans: '1.6 × 10<sup>−9</sup> M.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] CuSO<sub>4</sub>·5H<sub>2</sub>O: how many waters are coordinated and how many hydrogen-bonded?',
            a: 'Four coordinated to Cu<sup>2+</sup>, one hydrogen-bonded (to sulphate) – the fifth water is the stubborn one on heating.',
          },
          {
            q: '[NEET] 1 mol of [Cr(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]Cl gives how many moles of AgCl with excess AgNO<sub>3</sub>?',
            a: '1 mol (only the Cl<sup>−</sup> outside the bracket is ionisable).',
          },
          {
            q: '[JEE Main] Verify EAN = 36 for [Fe(CO)<sub>5</sub>] and find <i>x</i> in Co<sub>2</sub>(CO)<sub><i>x</i></sub> given one Co–Co bond and EAN obedience.',
            a: 'EAN = 26 + 10 = 36. For Co<sub>2</sub>(CO)<sub><i>x</i></sub>: per Co, 27 + (<i>x</i>/2) × 2 + 1 = 36 gives <i>x</i> = 8 – Co<sub>2</sub>(CO)<sub>8</sub>.',
          },
          {
            q: '[JEE Main] A complex CoCl<sub>3</sub>·5NH<sub>3</sub> gives 2 mol AgCl per mole with AgNO<sub>3</sub>. Write its formula and the electrolyte type.',
            a: '[CoCl(NH<sub>3</sub>)<sub>5</sub>]Cl<sub>2</sub>; a 1:2 electrolyte.',
          },
          {
            q: '[JEE Advanced] [V(CO)<sub>6</sub>] has EAN 35. Predict its behaviour toward a one-electron reducing agent, and name the product’s electron count.',
            a: 'It is one electron short of krypton, so it is readily reduced to [V(CO)<sub>6</sub>]<sup>−</sup>, an 18-electron (EAN 36) anion.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Counting lattice water as coordinated (and vice versa); reading “1:2 electrolyte” as a charge of +1; forgetting the +1 per M–M bond in EAN; counting 1 electron per CO; assuming every polynuclear carbonyl is bridged (Mn<sub>2</sub>(CO)<sub>10</sub> has NO bridging CO – only the Mn–Mn bond).',
      },
    ],
  },

  // ─────────────── Additional topic E (the book's Addendum P) · pp. 248–250 ───────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'One complex, five slots to fill: oxidation state → d-count → field strength → hybridisation → unpaired electrons.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: '<b>How to read this addendum.</b> The patterns below are drawn from recent JEE Main, JEE Advanced and NEET papers.',
      },

      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: 'A rough estimate of how the chapter’s questions divide; no official figures exist.',
      },
      {
        t: 'table',
        title: null,
        head: ['Territory', 'Rough share', 'Typical demand'],
        rows: [
          ['VBT / CFT / magnetism', '35%', 'hybridisation + geometry + unpaired count combos; CFSE numerics'],
          ['Isomerism', '30%', 'type identification; stereoisomer counts (numerical)'],
          [
            'Werner, ligands, nomenclature',
            '20%',
            'primary/secondary valence; ambidentate; AgNO<sub>3</sub>/conductivity stoichiometry',
          ],
          ['Carbonyls & EAN', '10%', 'synergic bonding statements; structures; EAN arithmetic'],
          ['Stability & applications', '5%', 'β and free-ion concentration; DMG-Ni, EDTA, cisplatin'],
        ],
      },
      {
        t: 'p',
        html: 'Concrete examples: a recent JEE Main paper asked the Ni-DMG bright-red precipitate (reagent and cation) and the Co<sub>2</sub>(CO)<sub>8</sub> X + Y = 7 numerical; recent papers have also set a 1:2-electrolyte oxidation-state question and a tetrahedral/paramagnetic identification.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>1. The hybridisation-geometry-magnetism combo.</b> One complex, five slots to fill: oxidation state → d-count → field strength → hybridisation → unpaired electrons. Worked shape:',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The geometries of [Ni(CO)<sub>4</sub>], [Ni(CN)<sub>4</sub>]<sup>2−</sup> and [NiCl<sub>4</sub>]<sup>2−</sup> are respectively:<br>(a) sq. planar, sq. planar, tetrahedral<br>(b) tetrahedral, tetrahedral, sq. planar<br>(c) tetrahedral, sq. planar, tetrahedral<br>(d) tetrahedral, sq. planar, sq. planar.',
        steps: [
          '<b>Verified solution.</b> [Ni(CO)<sub>4</sub>]: Ni(0), d<sup>10</sup>, sp<sup>3</sup> tetrahedral (diamagnetic).',
          '[Ni(CN)<sub>4</sub>]<sup>2−</sup>: Ni<sup>2+</sup> d<sup>8</sup>, strong-field CN<sup>−</sup> pairs electrons, dsp<sup>2</sup> square planar (diamagnetic).',
          '[NiCl<sub>4</sub>]<sup>2−</sup>: d<sup>8</sup> with weak-field Cl<sup>−</sup>, sp<sup>3</sup> tetrahedral, 2 unpaired, paramagnetic.',
          'The same trio also appears as “which is tetrahedral AND paramagnetic” – [NiCl<sub>4</sub>]<sup>2−</sup> alone qualifies.',
        ],
        ans: '(c).',
      },
      {
        t: 'p',
        html: '<b>2. The CFSE numerical.</b> Direct tariff questions (−0.4 Δ<sub>o</sub> for HS d<sup>6</sup>), tetrahedral variants (−0.8 Δ<sub>t</sub> for K<sub>2</sub>[NiCl<sub>4</sub>]), pairing-energy cases (Mn<sup>3+</sup>, CFSE magnitude 9,480 cm<sup>−1</sup>), and the reverse puzzle (CFSE −1.2 Δ<sub>o</sub> + paramagnetic → d<sup>3</sup> or d<sup>8</sup>). Approach: d-count → high/low spin → occupancies → tariff. All worked in Addendum C.',
      },
      {
        t: 'p',
        html: '<b>3. The isomer-count numerical.</b> Square-planar Mabcd = 3 (a real JEE Main item); octahedral [Co(en)ClBrI(NH<sub>3</sub>)] = 6 geometrical isomers, each chiral (a JEE Main-style numerical); “how many of these complexes exist as d and l” (count the chiral ones: cis-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>, [Cr(en)<sub>3</sub>]<sup>3+</sup>, [Cr(ox)<sub>3</sub>]<sup>3−</sup>, cis-[Co(en)<sub>2</sub>ClBr]<sup>+</sup> – never trans-[M(AA)<sub>2</sub>X<sub>2</sub>], never the fac or mer of Ma<sub>3</sub>b<sub>3</sub>). Approach: Pass 2 then Pass 3 of Addendum B.',
      },
      {
        t: 'p',
        html: '<b>4. The match-list isomerism sort.</b> Four complexes, five isomerism types. The usual best match: [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]Cl → geometrical; [Co(en)<sub>3</sub>]Cl<sub>3</sub> → optical; [Co(en)<sub>2</sub>(NO<sub>2</sub>)Cl]SCN → linkage (and ionisation, since SCN<sup>−</sup>/Cl<sup>−</sup> can swap); [Cu(NH<sub>3</sub>)<sub>4</sub>][PtCl<sub>4</sub>] → coordination. Identify what changed between the pair, and the type names itself.',
      },
      {
        t: 'p',
        html: '<b>5. The Werner stoichiometry.</b> AgCl moles → outside chlorides → formula (the first worked example of Additional topic D); electrolyte ratio → complex charge → oxidation state (the second worked example of Additional topic D); “primary and secondary valence of Cu in [Cu(NH<sub>3</sub>)<sub>4</sub>]Cl<sub>2</sub>” (2 and 4). One number, one deduction.',
      },
      {
        t: 'p',
        html: '<b>6. The synergic-bonding statement set.</b> All four statements are true: the M–C bond has both σ and π character; the σ bond is C(lone pair) → M; the π bond is filled metal d → empty π*(CO); the two reinforce (synergic). Consequences asked as a second question: back-donation lengthens C–O and drops its IR frequency; better σ-donor phosphines (PMe<sub>3</sub> > PClMe<sub>2</sub> > PMeCl<sub>2</sub> > PCl<sub>3</sub>) enrich the metal and strengthen back-bonding, lengthening C–O further.',
      },

      { t: 'part', title: 'The traps these papers are built on' },
      {
        t: 'mistakes',
        items: [
          '<b>Tetrahedral has no cis/trans.</b> Every Ma<sub>2</sub>b<sub>2</sub> formula “looks like” cisplatin until you check the geometry; [Zn(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] is the stock distractor.',
          '<b>cis only.</b> For [M(AA)<sub>2</sub>X<sub>2</sub>], chirality belongs to the cis form alone; trans keeps its mirror plane. Fac and mer of Ma<sub>3</sub>b<sub>3</sub> are both achiral (those of [M(AB)<sub>3</sub>] are both chiral).',
          '<b>Donor atoms, not ligands.</b> [Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> has CN 6, not 3.',
          '<b>Complement inversion.</b> A violet complex such as [Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> absorbs yellow light; Δ<sub>o</sub> comes from the absorbed wavelength. A past “incorrect statement” item is built on exactly this slip.',
          '<b>The “g” pedantry and the tariff swap.</b> Tetrahedral levels are e and t<sub>2</sub> (no g), and the per-electron tariff inverts (−0.6 for e, +0.4 for t<sub>2</sub>).',
          '<b>VBT’s limits, quoted as capabilities.</b> “VBT can distinguish strong from weak ligands” is the INCORRECT statement – CFT makes that distinction, through the size of Δ<sub>o</sub>; VBT also fails colour, quantitative magnetism, and the tetrahedral/square-planar prediction.',
          '<b>EAN slips.</b> One electron per CO, forgetting the M–M bond’s +1, or assigning the metal a non-zero oxidation state in a neutral homoleptic carbonyl.',
        ],
      },

      { t: 'part', title: 'Graded practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[Board] Using VBT, account for [Ni(CN)<sub>4</sub>]<sup>2−</sup> being diamagnetic and square planar while [NiCl<sub>4</sub>]<sup>2−</sup> is paramagnetic and tetrahedral.',
            a: 'CN<sup>−</sup> strong field pairs d<sup>8</sup> → dsp<sup>2</sup>, square planar, 0 unpaired; Cl<sup>−</sup> weak field → sp<sup>3</sup>, tetrahedral, 2 unpaired.',
          },
          {
            q: '[NEET] The coordination number and oxidation number of Cr in K<sub>3</sub>[Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>] are:<br>(a) 3, +3<br>(b) 6, +3<br>(c) 6, +6<br>(d) 3, +6.',
            a: '(b).',
          },
          {
            q: '[NEET] Which is an ambidentate ligand: C<sub>2</sub>O<sub>4</sub><sup>2−</sup>, en, NO<sub>2</sub><sup>−</sup>, NH<sub>3</sub>?',
            a: 'NO<sub>2</sub><sup>−</sup> (N or O).',
          },
          {
            q: '[JEE Main] The CFSE of [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> (ignore pairing) and of K<sub>2</sub>[NiCl<sub>4</sub>] are respectively:<br>(a) −0.4 Δ<sub>o</sub>, −0.8 Δ<sub>t</sub><br>(b) −0.4 Δ<sub>o</sub>, −1.2 Δ<sub>t</sub><br>(c) −2.4 Δ<sub>o</sub>, −1.2 Δ<sub>t</sub><br>(d) −0.6 Δ<sub>o</sub>, −0.8 Δ<sub>t</sub>.',
            a: '(a).',
          },
          {
            q: '[JEE Main] A complex MCl<sub>3</sub>·4NH<sub>3</sub> gives 1 mol AgCl per mole with AgNO<sub>3</sub>. Write the formula, and state CN and ON of M.',
            a: '[M(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]Cl; CN 6; ON +3.',
          },
          {
            q: '[JEE Main] How many geometrical isomers exist for [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] (square planar) and for [Co(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>] (octahedral)? State which, if either, is optically active.',
            a: '2 (cis/trans) and 2 (fac/mer); none optically active.',
          },
          {
            q: '[JEE Main] [CoF<sub>6</sub>]<sup>3−</sup> is high spin while [Co(CN)<sub>6</sub>]<sup>3−</sup> is low spin. Both are octahedral Co(III), d<sup>6</sup>. Give configurations, unpaired counts, and magnetic moments.',
            a: 'HS: t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup>, 4 unpaired, 4.90 BM; LS: t<sub>2g</sub><sup>6</sup>, 0 unpaired, 0 BM.',
          },
          {
            q: '[JEE Main] In [Co<sub>2</sub>(CO)<sub>8</sub>], state the number of bridging CO groups and the feature distinguishing it from [Mn<sub>2</sub>(CO)<sub>10</sub>].',
            a: 'Two bridging CO (plus a Co–Co bond); [Mn<sub>2</sub>(CO)<sub>10</sub>] has NO bridges, only the Mn–Mn bond.',
          },
          {
            q: '[JEE Advanced] A d<sup>6</sup> octahedral complex absorbs at 500 nm; <i>P</i> = 19,000 cm<sup>−1</sup>. Determine spin state, μ<sub>s</sub>, and observed colour.',
            a: 'Δ<sub>o</sub> = 1/<i>λ</i> = 20,000 cm<sup>−1</sup> > <i>P</i> → low spin t<sub>2g</sub><sup>6</sup>, μ<sub>s</sub> = 0 (diamagnetic); 500 nm is blue-green, so the complex appears red.',
          },
          {
            q: '[JEE Advanced] Count all stereoisomers of [Pt(gly)<sub>2</sub>] (square planar, gly = NH<sub>2</sub>CH<sub>2</sub>COO<sup>−</sup>, unsymmetrical bidentate).',
            a: 'Two geometrical isomers – cis (the two N donors adjacent) and trans (opposite); NEITHER is optically active, because the plane of a square-planar molecule is itself a mirror plane. (Optical activity in square-planar complexes needs a chiral ligand, not merely an unsymmetrical one.)',
          },
        ],
      },
    ],
  },
];
