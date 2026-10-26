import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Additional Topics, word for word from the Class 11 Chemistry
 * Master Reference: the shared opening of "Chapter 4: Chemical Bonding and
 * Molecular Structure — Additional Topics" (p. 199, set at the head of
 * Additional topic A's Introduction), then A The Electron-Count Lens
 * (pp. 199–202; its "Figure 1" of the two MO orderings, p. 201, is
 * c11-04-A-d1, its caption belongs to the diagram), B Counting Exercises
 * (pp. 202–204), C Dipole Moment as a Vector (pp. 204–206), D Resonance
 * Decides Bond Lengths (pp. 206–207; the N₂O resonance pair, p. 206, is
 * c11-04-D-d1), E Which Atomic Orbitals May Combine (pp. 207–208) and F,
 * the book's "Addendum P — What JEE and NEET Actually Ask" (pp. 209–212),
 * kept as the last Additional topic by Nikhil's decision.
 *
 * The book prints the addenda's practice answers together on pp. 208–209,
 * "Answers to Practice (Addenda A–E)", numbered on from 1 to 15 across the
 * addenda (A 1–4, B 5–7, C 8–10, D 11–13, E 14–15); each answer is set here
 * with its own question. Orbital and MO labels are upright (σ, π, 2p,
 * p with an italic axis subscript), though the book sets them in italic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 199–202 ─────────────────────────
  {
    n: 'A',
    title: 'The Electron-Count Lens: Bond Order, Length, Energy and Magnetism Without the Full Diagram',
    extra: true,
    kalam: 'In an exam you rarely need the diagram — you need four outputs: bond order, relative bond length, relative bond energy, magnetism.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has already taught you the four pillars — Lewis structures and formal charge, VSEPR and hybridisation, molecular orbital theory, and the coordinate/back-bonding refinements. What it could not do, for reasons of space, is drill the problems that examiners actually build on those pillars. Five such problem families recur year after year and deserve their own treatment. Addendum A turns MOT into an electron-counting lens so that any diatomic species — including the heteronuclear ones (CO, CN<sup>−</sup>) the chapter only touched — yields its bond order, length, energy and magnetism in seconds. Addendum B systematises the counting questions JEE Main loves: sigma/pi bond censuses, lone-pair arithmetic, coordinate-bond counts, and covalency. Addendum C makes the dipole moment quantitative — adding bond dipoles as vectors instead of merely deciding “polar or non-polar”. Addendum D uses resonance to rank bond lengths inside one ion, the carbonate/bicarbonate/nitrate family of questions that a single Lewis structure cannot answer. Addendum E closes two small but examinable gaps: which pairs of atomic orbitals may combine into molecular orbitals, and the F–F versus Cl–Cl bond-enthalpy anomaly. Every fact below is verifiable against NCERT Class 11 Chemistry, Chapter 4.',
      },

      { t: 'part', title: 'The method' },
      {
        t: 'p',
        html: 'The chapter taught you to build the full MO diagram and then count. In an exam you rarely need the diagram — you need four outputs: bond order, relative bond length, relative bond energy, magnetism. All four are fixed by two numbers alone:',
      },
      {
        t: 'formula',
        kicker: 'Bond order',
        main: 'BO = (<i>N</i><sub>b</sub> − <i>N</i><sub>a</sub>)/2',
        legend: [
          'BO = bond order',
          '<i>N</i><sub>b</sub> = number of electrons in bonding MOs',
          '<i>N</i><sub>a</sub> = number of electrons in antibonding MOs',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• higher BO ⇒ shorter bond, larger dissociation energy;<br>• any unpaired electron ⇒ paramagnetic; all paired ⇒ diamagnetic.',
      },
      {
        t: 'p',
        html: 'So the whole skill reduces to counting <i>N</i><sub>b</sub> and <i>N</i><sub>a</sub> correctly for any species, including heteronuclear ones. The bridge is isoelectronic reasoning, which NCERT itself sanctions: “Isoelectronic molecules and ions have identical bond orders; for example, F<sub>2</sub> and O<sub>2</sub><sup>2−</sup> have bond order 1. N<sub>2</sub>, CO and NO<sup>+</sup> have bond order 3.”',
      },
      {
        t: 'proc',
        title: 'Procedure — the four-step lens',
        steps: [
          '<b>Count total electrons.</b> Add atomic numbers; add one per negative charge, subtract one per positive charge. (CO: 6 + 8 = 14. CN<sup>−</sup>: 6 + 7 + 1 = 14. NO<sup>−</sup>: 7 + 8 + 1 = 16.)',
          '<b>Map to the homonuclear anchor</b> with the same electron count. A heteronuclear diatomic fills the same ordering pattern as its homonuclear isoelectronic partner (the energies shift, the sequence does not). So CO and CN<sup>−</sup> inherit the N<sub>2</sub> picture; NO<sup>−</sup> inherits the O<sub>2</sub> picture.',
          '<b>Read <i>N</i><sub>b</sub>, <i>N</i><sub>a</sub> from the anchor.</b> Memorise one column of pairs and the whole family is free:',
        ],
      },
      {
        t: 'table',
        title: null,
        head: ['Total e−', 'Anchors / members', 'Nb (bonding)', 'Na (antibonding)', 'BO', 'Magnetism'],
        rows: [
          ['10', 'B<sub>2</sub>', '6', '4', '1', 'paramagnetic (2 unpaired)'],
          ['12', 'C<sub>2</sub>', '8', '4', '2', 'diamagnetic'],
          ['13', 'N<sub>2</sub><sup>+</sup>, CN', '9', '4', '2.5', 'paramagnetic (1)'],
          ['14', 'N<sub>2</sub>, CO, CN<sup>−</sup>, NO<sup>+</sup>, C<sub>2</sub><sup>2−</sup>', '10', '4', '3', 'diamagnetic'],
          ['15', 'NO, N<sub>2</sub><sup>−</sup>, O<sub>2</sub><sup>+</sup>', '10', '5', '2.5', 'paramagnetic (1)'],
          ['16', 'O<sub>2</sub>, NO<sup>−</sup>', '10', '6', '2', 'paramagnetic (2)'],
          ['17', 'O<sub>2</sub><sup>−</sup> (superoxide)', '10', '7', '1.5', 'paramagnetic (1)'],
          ['18', 'O<sub>2</sub><sup>2−</sup> (peroxide), F<sub>2</sub>', '10', '8', '1', 'diamagnetic'],
        ],
      },
      {
        t: 'p',
        html: 'Counts from Li<sub>2</sub> (6 e<sup>−</sup>, BO 1) through Ne<sub>2</sub> (20 e<sup>−</sup>, BO 0, non-existent) complete the series; H<sub>2</sub><sup>+</sup> and He<sub>2</sub><sup>+</sup> (1 and 3 e<sup>−</sup>) both have BO 0.5 and are paramagnetic.',
      },
      {
        t: 'p',
        html: '<b>4. Adjust for added or removed electrons</b> without rebuilding anything: electrons beyond 14 go into the antibonding π* pair, so adding one electron to a 14-, 15-, 16- or 17-electron species drops BO by 0.5 and changes the unpaired count by one; removing one from a 15- to 18-electron species does the opposite. Below 14 electrons the same arithmetic holds with the bonding π2p/σ2p set: removing an electron from N<sub>2</sub> (BO 3) gives N<sub>2</sub><sup>+</sup> (BO 2.5, paramagnetic); adding one gives N<sub>2</sub><sup>−</sup> (BO 2.5, paramagnetic) — both weaken N<sub>2</sub>, but for different orbital reasons.',
      },
      {
        t: 'p',
        html: '<b>The one place the ordering choice still matters.</b> For species of 14 electrons or fewer the “up to N<sub>2</sub>” ordering (π2p below σ2p<sub><i>z</i></sub>) decides which orbital holds the last electrons and hence the magnetism of the light diatomics: C<sub>2</sub> fills π2p<sup>4</sup> completely and is diamagnetic — the ordering used for O<sub>2</sub> would wrongly predict two unpaired electrons. Bond orders are immune to the crossover; magnetism of the light diatomics is not. Rule of thumb: never export the O<sub>2</sub> ordering to anything with 14 or fewer electrons.',
      },
      { t: 'fig', id: 'c11-04-A-d1' },
      {
        t: 'p',
        html: '<b>HOMO and LUMO questions.</b> A new JEE Main habit is to ask for the highest occupied (HOMO) or lowest unoccupied (LUMO) molecular orbital rather than a bond order. Read them straight off the filled sequence:<br>• O<sub>2</sub> (16 e<sup>−</sup>): HOMO = the half-filled π*2p<sub><i>x</i></sub>, π*2p<sub><i>y</i></sub> pair (two electrons total, one in each); LUMO = σ*2p<sub><i>z</i></sub>.<br>• N<sub>2</sub> (14 e<sup>−</sup>): HOMO = σ2p<sub><i>z</i></sub>; LUMO = π*2p<sub><i>x</i></sub> = π*2p<sub><i>y</i></sub>.<br>• NO (15 e<sup>−</sup>): HOMO = π*2p (one electron); removing it gives NO<sup>+</sup>.',
      },

      { t: 'part', title: 'Worked micro-examples' },
      {
        t: 'ex',
        tag: 'bond-order census, JEE Main pattern',
        q: 'Rank NO<sup>+</sup>, NO and NO<sup>−</sup> in increasing bond length.',
        steps: [
          'Electron counts: 14, 15, 16. Bond orders: 3, 2.5, 2. Bond length falls as BO rises, so the answer is NO<sup>+</sup> < NO < NO<sup>−</sup>.',
          'No diagram was drawn; the whole solution is three counts.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'isoelectronic match',
        q: 'The acetylide ion C<sub>2</sub><sup>2−</sup> has the same bond order and magnetism as which of: O<sub>2</sub><sup>+</sup>, N<sub>2</sub><sup>+</sup>, NO<sup>+</sup>, O<sub>2</sub><sup>−</sup>?',
        steps: [
          'C<sub>2</sub><sup>2−</sup> has 2(4) + 2 = 10 valence electrons, i.e. 14 total: BO 3, diamagnetic. Scan the options by electron count: O<sub>2</sub><sup>+</sup> has 15 (BO 2.5), N<sub>2</sub><sup>+</sup> has 13 (BO 2.5), NO<sup>+</sup> has 14 (BO 3, diamagnetic), O<sub>2</sub><sup>−</sup> has 17 (BO 1.5).',
          'The counting takes five seconds once the table is internalised.',
        ],
        ans: 'NO<sup>+</sup>.',
      },
      {
        t: 'ex',
        tag: 'HOMO population',
        q: 'How many electrons occupy the HOMO of O<sub>2</sub>?',
        steps: [
          'The π*2p pair holds the last two electrons, one in each degenerate orbital (Hund’s rule). The HOMO is that degenerate pair, and the total number of electrons in it is 2.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Error patterns in this family' },
      {
        t: 'mistakes',
        items: [
          '<b>Wrong electron count for ions.</b> O<sub>2</sub><sup>2−</sup> has 18 electrons, not 16. Every missed charge shifts BO by 0.5 and changes the number of unpaired electrons by one, which can flip the magnetism.',
          '<b>Exporting the O<sub>2</sub> ordering to C<sub>2</sub> (or B<sub>2</sub>).</b> The crossover only shifts which orbital is labelled HOMO; but for magnetism of the light diatomics it is decisive. Use electron count ≤ 14 as the trigger for the “up to N<sub>2</sub>” scheme.',
          '<b>Assuming ionisation always weakens.</b> Removing a π* electron (O<sub>2</sub> → O<sub>2</sub><sup>+</sup>, NO → NO<sup>+</sup>) raises BO by 0.5 and shortens the bond. Always ask which orbital lost the electron.',
          '<b>Believing “paramagnetic” needs many unpaired electrons.</b> One suffices (NO, O<sub>2</sub><sup>−</sup>); the count of unpaired electrons — 1 vs 2 — is itself an exam discriminator between superoxide and oxygen.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Arrange O<sub>2</sub><sup>+</sup>, O<sub>2</sub>, O<sub>2</sub><sup>−</sup>, O<sub>2</sub><sup>2−</sup> in order of decreasing bond dissociation energy.',
            a: 'O<sub>2</sub><sup>+</sup> (2.5) > O<sub>2</sub> (2) > O<sub>2</sub><sup>−</sup> (1.5) > O<sub>2</sub><sup>2−</sup> (1); dissociation energy tracks bond order.',
          },
          {
            q: 'State the bond order and magnetic behaviour of CN<sup>−</sup> and of NO.',
            a: 'CN<sup>−</sup>: 14 e<sup>−</sup>, BO 3, diamagnetic. NO: 15 e<sup>−</sup>, BO 2.5, paramagnetic (one unpaired π* electron).',
          },
          {
            q: 'Which is diamagnetic: NO, CO, O<sub>2</sub><sup>−</sup>, O<sub>2</sub>?',
            a: 'CO (14 e<sup>−</sup>, all paired). NO, O<sub>2</sub><sup>−</sup>, O<sub>2</sub> are all paramagnetic.',
          },
          {
            q: 'Give the HOMO of N<sub>2</sub> and of O<sub>2</sub>, and the number of electrons in each.',
            a: 'N<sub>2</sub>: HOMO σ2p<sub><i>z</i></sub> with 2 electrons. O<sub>2</sub>: HOMO the degenerate π*2p<sub><i>x</i></sub>, π*2p<sub><i>y</i></sub> pair holding 2 electrons (one each).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 202–204 ─────────────────────────
  {
    n: 'B',
    title: 'Counting Exercises: Sigma/Pi Bonds, Lone Pairs, Coordinate Bonds, Covalency',
    extra: true,
    kalam: 'JEE Main has developed a fondness for one-line counting questions whose entire difficulty lies in disciplined bookkeeping.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'JEE Main has developed a fondness for one-line counting questions whose entire difficulty lies in disciplined bookkeeping. Four counts recur.',
      },

      { t: 'part', title: 'B.1 The sigma/pi census' },
      {
        t: 'p',
        html: '<b>Rules.</b> Every link between two atoms contributes exactly one σ bond; a double bond adds one π, a triple adds two. In a condensed organic formula, expand the carbon skeleton, then count C–H bonds by giving every carbon valence 4.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'Count σ and π bonds in hex-1-en-4-yne.',
        steps: [
          'Expand: CH<sub>2</sub>=CH–CH<sub>2</sub>–C≡C–CH<sub>3</sub>.<br>• σ framework C–C: five links (one each in the double and triple bonds) ⇒ 5.<br>• σ C–H: 2 + 1 + 2 + 0 + 0 + 3 = 8.<br>• π: one from C=C, two from C≡C ⇒ 3.',
          'The identical question with hex-1,3-dien-5-yne (CH<sub>2</sub>=CH–CH=CH–C≡CH) gives 11 σ and 4 π — note the method never changes, only the inventory.',
        ],
        ans: 'Total: 13 σ, 3 π.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'How many σ and π bonds in CO<sub>2</sub>?',
        steps: [
          'Two C=O double bonds: 2 σ, 2 π.',
          'In the carbonate ion CO<sub>3</sub><sup>2−</sup> as a resonance hybrid? Any single Lewis form shows 3 σ + 1 π; the hybrid delocalises that π bond over three positions, but the count question is always answered from one Lewis form: 3 σ, 1 π.',
        ],
        ans: '',
      },

      { t: 'part', title: 'B.2 Lone-pair arithmetic on a central atom' },
      {
        t: 'p',
        html: 'The chapter’s hybridisation formula doubles as a lone-pair counter. With <i>V</i> = valence electrons of the central atom, <i>M</i> = monovalent atoms attached, <i>C</i> = positive charge, <i>A</i> = negative charge:',
      },
      {
        t: 'formula',
        kicker: 'Lone-pair arithmetic on a central atom',
        main: '<i>H</i> = ½[<i>V</i> + <i>M</i> − <i>C</i> + <i>A</i>]<br>lone pairs = <i>H</i> − (σ bonds)',
        legend: [
          '<i>H</i> = hybridisation number',
          '<i>V</i> = valence electrons of the central atom',
          '<i>M</i> = monovalent atoms attached',
          '<i>C</i> = positive charge',
          '<i>A</i> = negative charge',
        ],
        note: null,
      },
      {
        t: 'ex',
        tag: '',
        q: 'Find the lone pairs on the central atoms of XeF<sub>3</sub><sup>+</sup>, SF<sub>3</sub><sup>+</sup>, CF<sub>3</sub><sup>+</sup> and I<sub>3</sub><sup>−</sup>, and their sum.',
        steps: [
          'XeF<sub>3</sub><sup>+</sup>: <i>H</i> = ½(8 + 3 − 1) = 5; σ bonds 3; lone pairs 2<br>SF<sub>3</sub><sup>+</sup>: <i>H</i> = ½(6 + 3 − 1) = 4; σ bonds 3; lone pairs 1<br>CF<sub>3</sub><sup>+</sup>: <i>H</i> = ½(4 + 3 − 1) = 3; σ bonds 3; lone pairs 0<br>I<sub>3</sub><sup>−</sup>: <i>H</i> = ½(7 + 2 + 1) = 5; σ bonds 2; lone pairs 3',
          '(The shapes follow free: XeF<sub>3</sub><sup>+</sup> T-shaped, SF<sub>3</sub><sup>+</sup> pyramidal, CF<sub>3</sub><sup>+</sup> trigonal planar, I<sub>3</sub><sup>−</sup> linear.)',
        ],
        ans: 'Sum = 2 + 1 + 0 + 3 = 6.',
      },

      { t: 'part', title: 'B.3 Coordinate-bond counts' },
      {
        t: 'p',
        html: 'A coordinate bond is identified by its origin (one atom donates both electrons), not by any lasting difference. Counting questions hinge on recognising donors and acceptors:<br>• NH<sub>4</sub><sup>+</sup>: exactly one (NH<sub>3</sub> → H<sup>+</sup>); after formation all four N–H bonds are equivalent.<br>• H<sub>3</sub>O<sup>+</sup>: one (H<sub>2</sub>O → H<sup>+</sup>).<br>• CO: one dative π bond (O → C: oxygen donates a lone pair into carbon’s vacant p orbital) accompanies the σ bond and one ordinary π bond, which is why CO is a superb ligand and why its dipole is small and C-end negative despite oxygen’s electronegativity.<br>• Al<sub>2</sub>Cl<sub>6</sub>: two bridging Cl→Al dative bonds.<br>• BF<sub>4</sub><sup>−</sup> forms from BF<sub>3</sub> + F<sup>−</sup>: one coordinate bond (F<sup>−</sup> → BF<sub>3</sub>), and the boron rehybridises sp<sup>2</sup> → sp<sup>3</sup>.',
      },

      { t: 'part', title: 'B.4 Covalency versus oxidation state' },
      {
        t: 'p',
        html: '<b>Covalency</b> is the number of covalent bonds an atom has formed in a given species; it is a count, not a charge. <b>Oxidation state</b> is the formal charge the atom would carry if every shared pair went to the more electronegative partner. They answer different questions and combine in exam arithmetic:',
      },
      {
        t: 'ex',
        tag: '',
        q: 'Sum of covalency and oxidation state of boron in BF<sub>4</sub><sup>−</sup>.',
        steps: [
          'Boron forms four B–F bonds: covalency = 4. With F at −1 and overall charge −1: <i>x</i> − 4 = −1 ⇒ <i>x</i> = +3.',
        ],
        ans: 'Sum = 4 + 3 = 7.',
      },

      { t: 'part', title: 'Error patterns in counting' },
      {
        t: 'mistakes',
        items: [
          'Counting the double bond as two σ bonds, or forgetting the C–H bonds in a condensed formula.',
          'Using the hybridisation formula with the wrong charge sign: subtract positive charge, add negative.',
          'Calling all four N–H bonds of NH<sub>4</sub><sup>+</sup> “different”; the dative origin is erased after formation.',
          'Mixing covalency (a count of bonds, e.g. 4 for B in BF<sub>4</sub><sup>−</sup>) with oxidation state (+3).',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Count σ and π bonds in: (a) CH<sub>3</sub>C≡CH, (b) COCl<sub>2</sub>, (c) HCN.',
            a: '(a) CH<sub>3</sub>C≡CH: 6 σ (2 C–C + 4 C–H), 2 π. (b) COCl<sub>2</sub>: 3 σ, 1 π. (c) HCN: 2 σ, 2 π.',
          },
          {
            q: 'Find lone pairs on the central atom of ClF<sub>3</sub>, XeF<sub>4</sub>, BrF<sub>5</sub>, XeF<sub>2</sub>.',
            a: 'ClF<sub>3</sub>: 2; XeF<sub>4</sub>: 2; BrF<sub>5</sub>: 1; XeF<sub>2</sub>: 3.',
          },
          {
            q: 'How many coordinate bonds are present in NH<sub>4</sub><sup>+</sup>, H<sub>3</sub>O<sup>+</sup> and Al<sub>2</sub>Cl<sub>6</sub> respectively?',
            a: 'NH<sub>4</sub><sup>+</sup>: 1; H<sub>3</sub>O<sup>+</sup>: 1; Al<sub>2</sub>Cl<sub>6</sub>: 2.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 204–206 ─────────────────────────
  {
    n: 'C',
    title: 'Dipole Moment as a Vector',
    extra: true,
    kalam: 'A species with identical terminal atoms is non-polar exactly when every bond dipole has an equal-and-opposite partner.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter taught you to decide “polar or non-polar” by symmetry. JEE Main regularly goes one step further and asks you to compute a resultant, so the vector arithmetic deserves its own drill.',
      },

      { t: 'part', title: 'The addition law' },
      {
        t: 'p',
        html: 'Two bond dipoles <i>μ</i><sub>1</sub>, <i>μ</i><sub>2</sub> meeting at angle <i>θ</i> give a resultant',
      },
      {
        t: 'formula',
        kicker: 'The addition law',
        main: '<i>μ</i><sub>R</sub> = √(<i>μ</i><sub>1</sub><sup>2</sup> + <i>μ</i><sub>2</sub><sup>2</sup> + 2<i>μ</i><sub>1</sub><i>μ</i><sub>2</sub> cos <i>θ</i>)',
        legend: [
          '<i>μ</i><sub>R</sub> = resultant dipole moment',
          '<i>μ</i><sub>1</sub> = first bond dipole',
          '<i>μ</i><sub>2</sub> = second bond dipole',
          '<i>θ</i> = angle between the two bond dipoles',
        ],
        note: null,
      },
      { t: 'p', html: 'For two equal bond dipoles this collapses to the workhorse form:' },
      {
        t: 'formula',
        kicker: 'Workhorse form for two equal bond dipoles',
        main: '<i>μ</i><sub>R</sub> = 2<i>μ</i><sub>b</sub> cos(<i>θ</i>/2)',
        legend: [
          '<i>μ</i><sub>R</sub> = resultant dipole moment',
          '<i>μ</i><sub>b</sub> = each of the two equal bond dipoles',
          '<i>θ</i> = angle between the two bond dipoles',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The convention that matters in multi-choice options: the dipole vector points from +<i>δ</i> to −<i>δ</i>, i.e. toward the more electronegative atom.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'The O–H bond dipole is about 1.51 D and the H–O–H angle is 104.5°. Estimate <i>μ</i>(H<sub>2</sub>O).',
        steps: [
          '<i>μ</i> = 2(1.51) cos 52.25° = 2(1.51)(0.612)',
          'This is NCERT’s tabulated value (Table 4.5: H<sub>2</sub>O 1.85 D) — the arithmetic and the data agree. Run it backwards in the exam: given <i>μ</i>(H<sub>2</sub>O) = 1.85 D, you recover <i>μ</i><sub>OH</sub> = 1.85/(2 cos 52.25°) ≈ 1.5 D.',
        ],
        ans: '≈ 1.85 D',
      },
      {
        t: 'ex',
        tag: '',
        q: 'Predict, without any numbers, the ordering <i>μ</i>: CHCl<sub>3</sub> vs CCl<sub>4</sub> vs CH<sub>2</sub>Cl<sub>2</sub>.',
        steps: [
          'CCl<sub>4</sub> is tetrahedral with four identical dipoles: exact cancellation, <i>μ</i> = 0. CHCl<sub>3</sub> has three C–Cl dipoles whose resultant is only one bond dipole’s worth (the small C–H dipole points the same way and adds a little); CH<sub>2</sub>Cl<sub>2</sub> has only two C–Cl dipoles meeting at ∼ 109.5°, whose resultant survives more strongly than in CHCl<sub>3</sub> where three dipoles oppose one another more completely.',
          'NCERT’s table gives CHCl<sub>3</sub> = 1.04 D and CCl<sub>4</sub> = 0; experimentally CH<sub>2</sub>Cl<sub>2</sub> (1.60 D) exceeds CHCl<sub>3</sub> — a result that surprises students who count “number of polar bonds” instead of summing vectors.',
        ],
        ans: '',
      },
      {
        t: 'p',
        html: '<b>The lone-pair dipole.</b> A lone pair on the central atom contributes its own dipole pointing away from the atom. This is the quantified version of the NH<sub>3</sub>/NF<sub>3</sub> contrast the chapter introduced: in NH<sub>3</sub> (<i>μ</i> = 1.47 D) the N–H bond dipoles point toward N, i.e. the same way as the lone-pair dipole, so they add; in NF<sub>3</sub> (<i>μ</i> = 0.23 D) the N–F dipoles point toward the fluorines, opposing the lone-pair dipole, and the near-cancellation leaves a small net moment. Same shape, same lone pair, a factor of six in <i>μ</i> — pure vector bookkeeping.',
      },

      { t: 'part', title: 'The polarity checklist for lone-pair geometries' },
      {
        t: 'p',
        html: 'Symmetry arguments extend cleanly to the VSEPR families. A species with identical terminal atoms is non-polar exactly when every bond dipole has an equal-and-opposite partner:',
      },
      {
        t: 'table',
        title: null,
        head: ['Shape', 'Example', 'μ = 0?'],
        rows: [
          ['Linear AB<sub>2</sub>', 'CO<sub>2</sub>, CS<sub>2</sub>, XeF<sub>2</sub> (3 lp equatorial)', 'yes'],
          ['Trigonal planar AB<sub>3</sub>', 'BF<sub>3</sub>, SO<sub>3</sub>', 'yes'],
          ['Tetrahedral AB<sub>4</sub>', 'CH<sub>4</sub>, CCl<sub>4</sub>', 'yes'],
          ['Trigonal bipyramidal AB<sub>5</sub>', 'PCl<sub>5</sub>, PF<sub>5</sub>', 'yes'],
          ['Octahedral AB<sub>6</sub>', 'SF<sub>6</sub>', 'yes'],
          ['Square planar AB<sub>4</sub> (2 lp axial)', 'XeF<sub>4</sub>', 'yes'],
          ['Bent AB<sub>2</sub>E / AB<sub>2</sub>E<sub>2</sub>', 'SO<sub>2</sub>, H<sub>2</sub>O', 'no — polar'],
          ['Pyramidal AB<sub>3</sub>E', 'NH<sub>3</sub>, PCl<sub>3</sub>', 'no — polar'],
          ['See-saw AB<sub>4</sub>E', 'SF<sub>4</sub>', 'no — polar'],
          ['T-shaped AB<sub>3</sub>E<sub>2</sub>', 'ClF<sub>3</sub>', 'no — polar'],
          ['Square pyramidal AB<sub>5</sub>E', 'BrF<sub>5</sub>', 'no — polar'],
        ],
      },
      {
        t: 'p',
        html: 'Note the fine print the exam exploits: “non-polar” requires identical terminal atoms and full cancellation — CHCl<sub>3</sub> breaks the first condition, SF<sub>4</sub> the second.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Given the H–S bond dipole and the near-90° angle of H<sub>2</sub>S, explain qualitatively why <i>μ</i>(H<sub>2</sub>S) = 0.95 D is smaller than <i>μ</i>(H<sub>2</sub>O) = 1.85 D even though both are bent.',
            a: 'In H<sub>2</sub>S the S–H bond dipole is much smaller than O–H (S is far less electronegative than O: ΔEN ≈ 0.4 against 1.4 on the NCERT scale). The narrower angle (∼ 92° vs 104.5°) by itself would raise cos(<i>θ</i>/2) slightly (0.69 vs 0.61), but this small gain is outweighed by the much smaller bond dipole, so <i>μ</i>(H<sub>2</sub>S) < <i>μ</i>(H<sub>2</sub>O).',
          },
          {
            q: 'Which of the following have zero dipole moment: AsF<sub>5</sub>, XeF<sub>4</sub>, SF<sub>4</sub>, BrF<sub>5</sub>, PCl<sub>5</sub>, ClF<sub>3</sub>?',
            a: 'AsF<sub>5</sub>, XeF<sub>4</sub>, PCl<sub>5</sub> are non-polar (symmetric shapes); SF<sub>4</sub>, BrF<sub>5</sub>, ClF<sub>3</sub> are polar.',
          },
          {
            q: 'The C=O bond dipole in CO<sub>2</sub> is large, yet <i>μ</i>(CO<sub>2</sub>) = 0. Reconcile, and state what happens to <i>μ</i> if the molecule is bent, as in SO<sub>2</sub>.',
            a: 'The two C=O dipoles are equal and exactly antiparallel in the linear molecule, so they cancel. Bending the molecule (SO<sub>2</sub>) leaves a nonzero resultant — SO<sub>2</sub> is polar.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 206–207 ─────────────────────────
  {
    n: 'D',
    title: 'Resonance Decides Bond Lengths: Ranking Real Bonds',
    extra: true,
    kalam: 'A single Lewis structure cannot answer the question “which bond in this ion is longest?” — resonance can.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'A single Lewis structure cannot answer the question “which bond in this ion is longest?” — resonance can. The method: write the contributing Lewis forms, assign formal charges, decide which forms dominate, average the bond orders, then rank lengths by the inverse rule (higher bond order ⇒ shorter bond).',
      },

      { t: 'part', title: 'The three canonical families' },
      {
        t: 'p',
        html: '<b>Carbonate vs bicarbonate.</b> In CO<sub>3</sub><sup>2−</sup> the double bond is shared equally among three positions (three equivalent forms), so every C–O bond has BO = 4/3 and all three lengths are equal. Bicarbonate breaks the symmetry: the proton pins one oxygen as C–OH forever, so the remaining two oxygens share the double bond between them. In HCO<sub>3</sub><sup>−</sup>:<br>• C–OH: always single, BO 1 ⇒ <b>longest</b>;<br>• the other two C–O: BO = (1 + 2)/2 = 1.5 each, equal and shorter.',
      },
      {
        t: 'p',
        html: 'So the three C–O lengths in HCO<sub>3</sub><sup>−</sup> satisfy <i>l</i>(C–OH) > <i>l</i>(C–O)<sub>resonant pair</sub>, with the two resonant bonds equal. The identical logic applied to nitric acid gives: in HNO<sub>3</sub> the N–OH bond is the longest, and the other two N–O bonds are equal (BO 1.5) — the same “one pinned, two shared” pattern.',
      },
      {
        t: 'p',
        html: '<b>N<sub>2</sub>O — choosing the dominant form by formal charge.</b> N<sub>2</sub>O (16 valence electrons, linear) has two serious candidates:',
      },
      { t: 'fig', id: 'c11-04-D-d1' },
      {
        t: 'p',
        html: 'Assign formal charges properly: in N=N=O the charges are (terminal N) −1, (central N) +1, (O) 0. In N≡N–O the charges are (terminal N) 0, (central N) +1, (O) −1. Both satisfy the “smallest formal charges” rule; the tie-breaker is the second rule — negative formal charge prefers the most electronegative atom. Oxygen is more electronegative than nitrogen, so N≡N<sup>+</sup>–O<sup>−</sup> dominates, predicting N–N shorter than N–O. Experiment agrees: the N–N distance (≈ 112 pm, near the N≡N value of 109 pm) is shorter than the N–O distance (≈ 119 pm). Two teaching points: the central atom is N (never O), because O as the centre would force larger charge separation; and resonance decides relative lengths even when no two forms are equivalent.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'In the bicarbonate ion the three C–O bonds are labelled <i>x</i> (C–OH), <i>y</i> and <i>z</i> (the resonant pair). Order the lengths.',
        steps: [
          '<i>x</i> > <i>y</i> = <i>z</i>: the pinned single bond is longest; the two resonance-averaged bonds (BO 1.5) are equal and shorter. Any option offering three distinct lengths is a distractor built on ignoring resonance.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Error patterns with resonance' },
      {
        t: 'mistakes',
        items: [
          'Averaging over the wrong set: in HCO<sub>3</sub><sup>−</sup> the double bond averages over <b>two</b> positions, not three — the C–OH oxygen is pinned.',
          'Picking N=N=O as the dominant N<sub>2</sub>O form because it “looks symmetric”: formal-charge placement on the more electronegative atom wins.',
          'Believing resonance is a rapid interconversion: the ion is a single hybrid; the two resonant C–O bonds are equal at every instant, which is precisely why “which is longer” questions have clean answers.',
        ],
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Rank the two kinds of N–O bond lengths in HNO<sub>3</sub> and justify by bond order.',
            a: 'N–OH is always single (BO 1, longest); the other two N–O bonds share the double bond (BO 1.5 each, equal and shorter).',
          },
          {
            q: 'Acetate ion CH<sub>3</sub>COO<sup>−</sup>: what are the two C–O bond orders and how do the lengths compare?',
            a: 'Each C–O has BO 1.5; the two C–O lengths are equal.',
          },
          {
            q: 'Why is N<sub>2</sub>O written N–N–O and not N–O–N?',
            a: 'A central O would force a bonding scheme with greater formal-charge separation and would place negative formal charge on N rather than O; the N–N–O skeleton keeps the dominant form N≡N<sup>+</sup>–O<sup>−</sup> with the negative charge on the most electronegative atom.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 207–208 ─────────────────────────
  {
    n: 'E',
    title: 'Which Atomic Orbitals May Combine; the F–F Bond-Enthalpy Anomaly',
    extra: true,
    kalam: 'Addendum E closes two small but examinable gaps: which pairs of atomic orbitals may combine into molecular orbitals, and the F–F versus Cl–Cl bond-enthalpy anomaly.',
    blocks: [
      { t: 'part', title: 'E.1 The symmetry gate for MO formation' },
      {
        t: 'p',
        html: 'NCERT’s three conditions for combining atomic orbitals — comparable energy, appreciable overlap, and the same symmetry about the internuclear axis — turn into a yes/no table once the axis is fixed. Take the internuclear axis as <i>z</i>:',
      },
      {
        t: 'table',
        title: null,
        head: ['Combination', 'Allowed?', 'MO type'],
        rows: [
          ['s + s', 'yes', 'σ'],
          ['s + p<sub><i>z</i></sub>', 'yes', 'σ'],
          ['p<sub><i>z</i></sub> + p<sub><i>z</i></sub>', 'yes', 'σ'],
          ['p<sub><i>x</i></sub> + p<sub><i>x</i></sub>, p<sub><i>y</i></sub> + p<sub><i>y</i></sub>', 'yes', 'π'],
          ['s + p<sub><i>x</i></sub> or s + p<sub><i>y</i></sub>', 'no', '—'],
          ['p<sub><i>z</i></sub> + p<sub><i>x</i></sub>', 'no', '—'],
          ['p<sub><i>x</i></sub> + p<sub><i>y</i></sub>', 'no', '—'],
        ],
      },
      {
        t: 'p',
        html: 'The reasoning is always the same picture: along <i>z</i>, an s orbital and a p<sub><i>x</i></sub> orbital have opposite symmetry — the positive lobe of p<sub><i>x</i></sub> overlaps one sign of s on one side and the negative lobe overlaps the other, so bonding and antibonding overlap cancel exactly; net overlap is zero and no MO forms. p<sub><i>x</i></sub> + p<sub><i>x</i></sub> both perpendicular to the axis reinforce sidewise and give a π MO.',
      },
      {
        t: 'ex',
        tag: '',
        q: 'Which of these lead to MOs (axis = <i>z</i>): (i) 2p<sub><i>z</i></sub> + 2p<sub><i>x</i></sub>, (ii) 2s + 2p<sub><i>x</i></sub>, (iii) 2s + 2p<sub><i>z</i></sub>?',
        steps: [
          '(i) no (p<sub><i>z</i></sub> is symmetric, p<sub><i>x</i></sub> antisymmetric about the axis); (ii) no (same mismatch); (iii) yes — a σ MO.',
        ],
        ans: 'Only (iii).',
      },

      { t: 'part', title: 'E.2 The F–F anomaly' },
      {
        t: 'p',
        html: 'NCERT’s own data set up the puzzle: the F–F bond (144 pm) is shorter than Cl–Cl (199 pm), and the rule “a shorter bond means a stronger bond” would predict F<sub>2</sub> to be the tougher molecule. The measured order runs the other way — Cl<sub>2</sub> (242 kJ mol<sup>−1</sup>) exceeds F<sub>2</sub> (≈ 159 kJ mol<sup>−1</sup>). The resolution is electronic crowding: fluorine is so small that the three lone pairs on each atom are forced into close contact, and lone-pair–lone-pair repulsion across the short bond weakens it. In chlorine the larger core keeps the lone pairs apart. So the rule “shorter bond ⇒ stronger bond” holds within a bond-order family, not across bonds between different atoms where lone-pair repulsion changes the picture. The same caution applies when comparing O–O against S–S single bonds.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'With the internuclear axis along <i>x</i>: classify p<sub><i>x</i></sub> + p<sub><i>x</i></sub>, p<sub><i>y</i></sub> + p<sub><i>y</i></sub>, s + p<sub><i>x</i></sub>, s + p<sub><i>y</i></sub> as σ/π/forbidden.',
            a: 'p<sub><i>x</i></sub> + p<sub><i>x</i></sub>: σ; p<sub><i>y</i></sub> + p<sub><i>y</i></sub>: π; s + p<sub><i>x</i></sub>: σ; s + p<sub><i>y</i></sub>: forbidden.',
          },
          {
            q: 'Explain why Cl<sub>2</sub> has a larger bond dissociation enthalpy than F<sub>2</sub> despite the longer bond.',
            a: 'F<sub>2</sub>’s small size forces the six lone pairs (three on each F) into strong mutual repulsion across the short bond, weakening it; Cl<sub>2</sub>’s longer bond (199 pm vs 144 pm) relieves that repulsion, so Cl–Cl (242 kJ mol<sup>−1</sup>) beats F–F (≈ 159 kJ mol<sup>−1</sup>).',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic F (the book's Addendum P) · pp. 209–212 ───────────────
  {
    n: 'F',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Based on an analysis of recent JEE Main papers (2021–2025), an NTA 2022 paper and NEET-pattern questions on this chapter, the weight falls roughly thus.',
    blocks: [
      { t: 'part', title: 'The distribution' },
      {
        t: 'p',
        html: 'Based on an analysis of recent JEE Main papers (2021–2025), an NTA 2022 paper and NEET-pattern questions on this chapter, the weight falls roughly thus:',
      },
      {
        t: 'table',
        title: null,
        head: ['Theme', 'Approx. share', 'Typical items'],
        rows: [
          [
            'MOT: bond order, magnetism, HOMO/LUMO, electron-count species (O<sub>2</sub> family, CN<sup>−</sup>, NO<sup>+</sup>, C<sub>2</sub><sup>2−</sup>)',
            '~30%',
            'O<sub>2</sub>/O<sub>2</sub><sup>+</sup>/O<sub>2</sub><sup>−</sup> energy order; longest bond among NO<sup>−</sup>/NO<sup>+</sup>/CN<sup>−</sup>; HOMO of O<sub>2</sub>; CN<sup>−</sup> BO; C<sub>2</sub><sup>2−</sup> match; paramagnetic sets',
          ],
          [
            'VSEPR shapes, hybridisation counts, bond-angle ordering',
            '~25%',
            'sp<sup>3</sup>d<sup>2</sup> census; max bond angle; XeF<sub>4</sub> shape; ClF<sub>3</sub> lone pairs; hybridisation match columns incl. complexes; hybridisation change BF<sub>3</sub> → BF<sub>4</sub><sup>−</sup>',
          ],
          ['Dipole moment and polarity', '~15%', 'NH<sub>3</sub> vs NF<sub>3</sub>; largest/smallest <i>μ</i> sets'],
          ['Sigma/pi and lone-pair counting', '~8%', 'hex-1-en-4-yne; hex-1,3-dien-5-yne; central-atom lone-pair sums'],
          [
            'Fajans/covalent character, formal charge, covalency, diborane, H-bonding',
            '~22%',
            'covalent-character factors; SCN<sup>−</sup> formal charge; BF<sub>4</sub><sup>−</sup> covalency; B<sub>2</sub>H<sub>6</sub> statements; H-bond census; bond-enthalpy orders',
          ],
        ],
      },
      {
        t: 'p',
        html: 'Two observations worth acting on. First, MOT questions are almost never “write the configuration” any more — they compress to an electron count plus one output (order, magnetism, HOMO), which is exactly the lens of Addendum A. Second, hybridisation questions increasingly arrive as match-the-column items mixing main-group molecules with complex ions ([Ni(CN)<sub>4</sub>]<sup>2−</sup>, [Fe(CN)<sub>6</sub>]<sup>4−</sup>); the steric-number method survives, but you must supply the d-orbital cases (dsp<sup>2</sup>, d<sup>2</sup>sp<sup>3</sup>, sp<sup>3</sup>d<sup>2</sup>) as memorised facts for the standard complexes.',
      },

      { t: 'part', title: 'The recurring archetypes' },
      {
        t: 'p',
        html: '<b>Archetype 1 — The O<sub>2</sub> family ordering.</b> “Among O<sub>2</sub>, O<sub>2</sub><sup>+</sup>, O<sub>2</sub><sup>−</sup>, the order of decreasing bond dissociation energy is…” Crack it with the lens: 15, 16, 17 electrons give BO 2.5, 2, 1.5, so O<sub>2</sub><sup>+</sup> > O<sub>2</sub> > O<sub>2</sub><sup>−</sup>. The distractor that catches most students is O<sub>2</sub> > O<sub>2</sub><sup>+</sup>, the reflex that “removing an electron weakens the bond.”',
      },
      {
        t: 'p',
        html: '<b>Archetype 2 — Isoelectronic match.</b> “The bond order and magnetic property of C<sub>2</sub><sup>2−</sup> are the same as…” Count electrons (14) and scan the options by count; only NO<sup>+</sup> has 14. No diagram, ten seconds.',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — NH<sub>3</sub> versus NF<sub>3</sub>.</b> It appears repeatedly in JEE Main papers, including a 2024 variant. The answer is always the vector story: lone-pair dipole reinforces in NH<sub>3</sub>, opposes in NF<sub>3</sub>. Learn the NCERT numbers (1.47 D vs 0.23 D) and the reasoning; the question never asks for the numbers, only for the why.',
      },
      {
        t: 'p',
        html: '<b>Archetype 4 — Hybridisation census.</b> “How many of PF<sub>5</sub>, BrF<sub>5</sub>, PCl<sub>3</sub>, SF<sub>6</sub> have sp<sup>3</sup>d<sup>2</sup>?” Compute <i>H</i> for each (BrF<sub>5</sub> and SF<sub>6</sub> qualify), then count. The trap is answering with a name instead of the count, or stopping at the first hit.',
      },
      {
        t: 'p',
        html: '<b>Archetype 5 — Bond-angle maximum.</b> “Which has the maximum bond angle: NH<sub>3</sub>, PH<sub>3</sub>, H<sub>2</sub>O, CH<sub>4</sub>?” Three-step filter: s-character first (an sp species beats everything sp<sup>3</sup>), then lone pairs, then central-atom electronegativity (Drago). CH<sub>4</sub> beats the lone-pair carriers; CS<sub>2</sub> (linear, 180°) beats BBr<sub>3</sub> (120°), SO<sub>2</sub> (∼ 119°) and SF<sub>4</sub>.',
      },
      {
        t: 'p',
        html: '<b>Archetype 6 — H-bond census.</b> “How many of NH<sub>3</sub>, CH<sub>4</sub>, H<sub>2</sub>O, HI, HF, HCOOH, B(OH)<sub>3</sub>, CH<sub>3</sub>COOH show hydrogen bonding?” Apply the FON donor test per molecule (HI fails — I is too large and not electronegative enough; CH<sub>4</sub> fails) and count: 6. The variant to watch is B(OH)<sub>3</sub>, whose O–H groups qualify even though the molecule is electron-deficient.',
      },

      { t: 'part', title: 'The traps' },
      {
        t: 'defgrid',
        title: 'Trap — correct resolution',
        rows: [
          {
            k: '“Removing an electron weakens the bond”',
            v: 'Removing from π* raises BO: O<sub>2</sub><sup>+</sup> and NO<sup>+</sup> are stronger than their parents',
          },
          {
            k: 'Using the O<sub>2</sub> MO ordering for C<sub>2</sub>/B<sub>2</sub>',
            v: '≤ 14 electrons ⇒ π2p below σ2p<sub><i>z</i></sub>; C<sub>2</sub> is diamagnetic',
          },
          {
            k: 'Polar bonds ⇒ polar molecule',
            v: 'Vector sum first: CCl<sub>4</sub>, BF<sub>3</sub>, CO<sub>2</sub>, XeF<sub>4</sub>, PCl<sub>5</sub>, SF<sub>6</sub> all have <i>μ</i> = 0',
          },
          {
            k: 'Electron-pair geometry named as shape',
            v: 'XeF<sub>4</sub> is octahedral in electron geometry, square planar in shape',
          },
          { k: 'Fajans reversed', v: 'Small/high-charge cation + large anion = covalent character' },
          {
            k: 'F<sub>2</sub> “must” be strongest (shortest bond)',
            v: 'Lone-pair repulsion: Cl<sub>2</sub> (242) > F<sub>2</sub> (≈ 159 kJ mol<sup>−1</sup>)',
          },
          {
            k: 'Confusing covalency with oxidation state',
            v: 'BF<sub>4</sub><sup>−</sup>: covalency 4, oxidation state +3',
          },
        ],
      },

      { t: 'part', title: 'A graded practice set' },
      {
        t: 'practice',
        items: [
          {
            q: '[recall] Which has the highest bond order: (a) O<sub>2</sub> (b) O<sub>2</sub><sup>−</sup> (c) O<sub>2</sub><sup>+</sup> (d) O<sub>2</sub><sup>2−</sup>?',
            a: '(c). Electron counts 16, 17, 15, 18 give BO 2, 1.5, 2.5, 1.',
          },
          {
            q: '[recall] The number of π bonds in CH<sub>2</sub>=CH–CH=CH<sub>2</sub> is (a) 1 (b) 2 (c) 3 (d) 4.',
            a: '(b) — one per double bond; the σ count would be 9.',
          },
          {
            q: '[application] CN<sup>−</sup> and NO<sup>+</sup> are both diamagnetic with BO 3. Without MOT, why must this be so?',
            a: 'Both have 14 electrons, isoelectronic with N<sub>2</sub>; NCERT’s isoelectronic rule fixes identical bond orders, and 14-electron filling pairs every electron.',
          },
          {
            q: '[application] XeF<sub>2</sub> is linear but its central atom is not sp hybridised. Explain, and give the hybridisation.',
            a: '<i>H</i> = ½(8 + 2) = 5 ⇒ sp<sup>3</sup>d; the three lone pairs occupy equatorial positions of the trigonal bipyramid, leaving F–Xe–F linear. Shape and hybridisation are read from different counts.',
          },
          {
            q: '[application] <i>μ</i>(NH<sub>3</sub>) = 1.47 D and <i>μ</i>(NF<sub>3</sub>) = 0.23 D. If F is more electronegative than H, why is NF<sub>3</sub>’s moment smaller?',
            a: 'In NH<sub>3</sub> the bond dipoles point toward N, aligned with the lone-pair dipole — they add. In NF<sub>3</sub> they point toward the F atoms, opposing the lone-pair dipole — near-cancellation.',
          },
          {
            q: '[analysis] Arrange CN<sup>−</sup>, NO<sup>−</sup>, NO<sup>+</sup>, O<sub>2</sub><sup>+</sup> in order of increasing bond length, using bond order as the guide.',
            a: 'BO by count: NO<sup>+</sup> (14 e<sup>−</sup>, BO 3) and CN<sup>−</sup> (14 e<sup>−</sup>, BO 3) have the highest bond order; O<sub>2</sub><sup>+</sup> (15 e<sup>−</sup>, BO 2.5) is lower; NO<sup>−</sup> (16 e<sup>−</sup>, BO 2) is lowest. So by bond order alone, {NO<sup>+</sup>, CN<sup>−</sup>} < O<sub>2</sub><sup>+</sup> < NO<sup>−</sup> in increasing bond length. Caution: bond order is a reliable guide to length only within a family of similar species (NO<sup>+</sup>, NO, NO<sup>−</sup>); across different atom pairs it is not. Measured lengths are NO<sup>+</sup> ≈ 106 pm, O<sub>2</sub><sup>+</sup> ≈ 112 pm, and CN<sup>−</sup> ≈ 117 pm, with NO<sup>−</sup> longer still, so the true order is NO<sup>+</sup> < O<sub>2</sub><sup>+</sup> < CN<sup>−</sup> < NO<sup>−</sup>: CN<sup>−</sup> has the higher bond order yet a longer bond than O<sub>2</sub><sup>+</sup>, because C and N are larger than O. Do not write an “=” sign between NO<sup>+</sup> and CN<sup>−</sup> unless the question asks only for bond order.',
          },
          {
            q: '[analysis] In HCO<sub>3</sub><sup>−</sup> the C–OH bond is 136 pm while the other two C–O bonds are both about 126 pm. Account for the pattern.',
            a: 'The proton pins one oxygen as a permanent single bond (BO 1); the other two oxygens share the double bond by resonance (BO 1.5 each), so they are equal and shorter.',
          },
          {
            q: '[analysis] Which orbital pairs can combine along the <i>z</i>-axis: 2s + 2p<sub><i>x</i></sub>; 2p<sub><i>z</i></sub> + 2p<sub><i>z</i></sub>; 2p<sub><i>y</i></sub> + 2p<sub><i>y</i></sub>?',
            a: '2p<sub><i>z</i></sub> + 2p<sub><i>z</i></sub> (σ) and 2p<sub><i>y</i></sub> + 2p<sub><i>y</i></sub> (π) qualify; 2s + 2p<sub><i>x</i></sub> fails the symmetry test — equal constructive and destructive overlap cancel.',
          },
          {
            q: '[synthesis] A student claims: “C<sub>2</sub> must be paramagnetic because its highest electrons occupy a degenerate π pair.” Find the flaw.',
            a: 'Degeneracy alone does not create unpaired electrons — filling does. C<sub>2</sub> (12 e<sup>−</sup>) fills π2p<sup>4</sup> completely, so both orbitals are full and every electron is paired: C<sub>2</sub> is diamagnetic. B<sub>2</sub> (10 e<sup>−</sup>, π2p<sup>2</sup>) is the paramagnetic one.',
          },
          {
            q: '[synthesis] For the species XeF<sub>3</sub><sup>+</sup>, SF<sub>3</sub><sup>+</sup>, CF<sub>3</sub><sup>+</sup>, I<sub>3</sub><sup>−</sup>: give the shape of each and the sum of lone pairs on the central atoms.',
            a: 'T-shaped (2 lp), pyramidal (1 lp), trigonal planar (0 lp), linear (3 lp); sum = 6.',
          },
        ],
      },
    ],
  },
];
