import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Additional Topics A, B and C, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 5: Coordination Compounds —
 * Additional Topics" (p. 237, set at the head of Additional topic A's Introduction),
 * then A Nomenclature Drills: The Cases the Chapter Stops Short Of (pp. 237–239),
 * B Isomer Counting: Beyond cis and trans (pp. 239–242) and C CFT Arithmetic:
 * Tetrahedral Fields, Pairing Energies, and the Colour Table (pp. 242–246; its fifth
 * practice question, answers and Common errors are at the top of p. 246, where
 * Addendum D begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each
 * is set here as that question's answer. The heading "The reference table, extended"
 * stands at the foot of p. 240 and its table at the top of p. 241 (the errata's
 * cosmetic note): they are together here. The note in the table's first column head
 * is a line before the table. The legends of the two formula blocks are ours, in the
 * words of Topic 03 and of the surrounding text. The book's unnumbered Figure 1
 * (p. 243) is c12-05-C-d1. Its a, b, c in type formulas are upright here, as species.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 237–239 ─────────────────────────
  {
    n: 'A',
    title: 'Nomenclature Drills: The Cases the Chapter Stops Short Of',
    extra: true,
    kalam: 'Cation first, anion second – whichever the complex is.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This addendum goes beyond the textbook examples at the four places where JEE and NEET spend their marks: naming (salts whose cation AND anion are both complexes, ambidentate ligand names), isomer counting beyond cis/trans (the octahedral Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub> family, unsymmetrical bidentates), CFT arithmetic in the tetrahedral field and with pairing energies supplied, and the quantitative Werner crossovers (AgNO<sub>3</sub> counting, conductivity, hydrate waters, EAN bookkeeping). Addendum A drills nomenclature. Addendum B drills isomer counting. Addendum C drills CFT numbers. Addendum D drills the crossovers. Additional topic E turns previous-year JEE and NEET papers into patterns and practice.',
      },
      {
        t: 'p',
        html: 'Most of the chemistry below can be checked against NCERT Class 12 Chemistry Part 1, Unit 9. (Unit 9 is the earlier NCERT edition’s number; the current NCERT Class 12 book numbers Coordination Compounds Unit 5.) The tetrahedral CFSE arithmetic, the larger isomer counts and the EAN ledger go beyond NCERT.',
      },
      {
        t: 'p',
        html: 'The chapter’s Procedure C handles routine naming, and Topics 01 and 02 give the ambidentate names. The papers push further: salts built from two complex ions, the donor-atom label inside the name, and the small conventions students violate without noticing.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The full checklist, in order',
        steps: [
          '<b>Cation first, anion second</b> – whichever the complex is. If BOTH ions are complexes, name the cationic complex fully, then the anionic complex (its metal takes the -ate suffix).',
          '<b>Ligands alphabetical</b> before the metal, ignoring the multiplicative prefixes (di, tri, bis, tris – never alphabetised). The 2004 IUPAC convention alphabetises by ligand name irrespective of charge.',
          '<b>Anionic ligand names end in -o</b> (chlorido, cyanido, oxalato, sulphato, carbonato, nitrato); neutral ligands keep their molecule name except aqua (H<sub>2</sub>O), ammine (NH<sub>3</sub>), carbonyl (CO), nitrosyl (NO).',
          '<b>bis/tris/tetrakis</b> when the ligand name already contains a numeral or is composite: bis(ethane-1,2-diamine), bis(triphenylphosphine).',
          '<b>Ambidentate ligands are named by the donor atom actually used</b>: –NO<sub>2</sub> bound through N is “nitrito-N” (older texts: “nitro”); bound through O it is “nitrito-O”. –SCN bound through S is “thiocyanato-S”, through N is “thiocyanato-N”.',
          '<b>Metal name</b>: element name in a cationic or neutral complex; -ate (with Latin stems ferrate, cuprate, argentate, aurate, plumbate, stannate) in an anionic complex. Oxidation state as a Roman numeral.',
          '<b>Never state the number of counter ions in the name</b> – [Co(en)<sub>3</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> is “tris(ethane-1,2-diamine)\u200bcobalt(III) sulphate”, with no hint that two cations and three anions sit in the formula unit. Charge balance is worked out silently from the Roman numeral.',
        ],
      },

      { t: 'part', title: 'The drills that actually appear' },
      {
        t: 'p',
        html: '<b>Both ions complex.</b> [Ag(NH<sub>3</sub>)<sub>2</sub>][Ag(CN)<sub>2</sub>] is diamminesilver(I) dicyanidoargentate(I): the cationic silver is named as “silver”, the anionic one takes the Latin stem “argentate”. Likewise [Pt(NH<sub>3</sub>)<sub>4</sub>][PtCl<sub>4</sub>] is tetraammineplatinum(II) tetrachloridoplatinate(II). Every rule fires twice.',
      },
      {
        t: 'p',
        html: '<b>Ambidentate in the name.</b> [Pt(NH<sub>3</sub>)<sub>2</sub>Cl(NO<sub>2</sub>)] is diammine\u200bchlorido\u200bnitrito-N-platinum(II) – the “N” in the name is part of the answer, not decoration; nitrito-N and nitrito-O are different compounds (linkage isomers, see Topic 02). Hg[Co(SCN)<sub>4</sub>] is mercury(II) tetrathiocyanato-S-cobaltate(II): the anion is [Co(SCN)<sub>4</sub>]<sup>2−</sup>, so <i>x</i> + 4(−1) = −2 gives Co = +2, and one Hg balances it as Hg<sup>2+</sup>. Charge balance alone fixes only the sum (Hg + Co = +4): the −2 on the anion is the known chemistry of this compound, so it must be given or known. Some NCERT-based answer keys print mercury(I) …cobaltate(III), which also adds up; the real compound holds Hg<sup>2+</sup> and Co<sup>2+</sup>.',
      },
      {
        t: 'p',
        html: '<b>Hidden polydentate anions.</b> [Co(NH<sub>3</sub>)<sub>5</sub>(CO<sub>3</sub>)]Cl is pentaamminecarbonatocobalt(III) chloride. Carbonate here is written after ammine (a before c), and the coordination number is 7 only if carbonate chelates – as written with CN 6 intended, it binds as a unidentate carbonato ligand. The name tells you nothing about denticity; the context does.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the IUPAC names of (i) K<sub>3</sub>[Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>] and (ii) [CoCl<sub>2</sub>(en)<sub>2</sub>]Cl.',
        steps: [
          '(i) Cation potassium first; three oxalato ligands (simple anion, so “trioxalato”); complex is an anion, so chromate; Cr: <i>x</i> + 3(−2) = −3 gives <i>x</i> = +3.',
          '(ii) Cationic complex; ligands alphabetical – chlorido (c) before ethane-1,2-diamine (e); two composite ligands take “bis”; Co: <i>x</i> + 2(−1) = +1 gives <i>x</i> = +3.',
        ],
        ans: '(i) Potassium trioxalatochromate(III); (ii) Dichlorido\u200bbis(ethane-1,2-diamine)\u200bcobalt(III) chloride.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The correct formula for tris(ethane-1,2-diamine)\u200bcobalt(III) sulphate is: (a) [Co(en)<sub>2</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> (b) [Co(en)<sub>2</sub>SO<sub>4</sub>] (c) [Co(en)<sub>3</sub>]SO<sub>4</sub> (d) [Co(en)<sub>3</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.',
        steps: [
          '<b>The fast way.</b> “Tris” fixes three en on one cobalt. Co(III) with neutral en gives a +3 complex cation, which needs 1.5 sulphates – so the formula unit must double: 2 complex cations, 3 sulphates.',
          'The distractors test exactly rule 7: the name never counts counter ions, so you must rebuild them from charge balance.',
        ],
        ans: '(d) [Co(en)<sub>3</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Name [Cr(NH<sub>3</sub>)<sub>3</sub>(H<sub>2</sub>O)<sub>3</sub>]Cl<sub>3</sub> and state its coordination number and the electrolyte type it forms in solution.',
        steps: [
          'Ligands alphabetical: ammine before aqua; all neutral; complex charge +3 balances three Cl<sup>−</sup>.',
          'Name: <b>triamminetriaquachromium(III) chloride</b>. CN = 6.',
          'In solution it gives 1 cation + 3 anions – a 1:3 electrolyte, which is how conductivity questions will phrase it.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A student names K<sub>2</sub>[PtCl<sub>6</sub>] as “potassium hexachloroplatinate(VI)”. Find and correct every error.',
        steps: [
          'Two errors. (i) Oxidation state: <i>x</i> + 6(−1) = −2 gives <i>x</i> = +4, not +6 – the charge on the complex ion is −2 because TWO potassium ions balance it.',
          '(ii) The anionic ligand name takes the -ido form: chlorido, not chloro (2004 IUPAC convention, which NCERT adopts).',
          'The rest of the student’s name is fine: an anionic complex correctly uses platinate. Correct name:',
        ],
        ans: 'Potassium hexachloridoplatinate(IV).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name (i) [Co(NH<sub>3</sub>)<sub>5</sub>(CO<sub>3</sub>)]Cl and (ii) [NiCl<sub>2</sub>(PPh<sub>3</sub>)<sub>2</sub>].',
            a: '(i) pentaamminecarbonatocobalt(III) chloride; (ii) dichlorido\u200bbis(triphenylphosphine)\u200bnickel(II).',
          },
          {
            q: '[NEET] Name the linkage-isomer pair [Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>2</sub>)]Cl<sub>2</sub> and [Co(NH<sub>3</sub>)<sub>5</sub>(ONO)]Cl<sub>2</sub>.',
            a: 'Pentaamminenitrito-N-cobalt(III) chloride and pentaamminenitrito-O-cobalt(III) chloride.',
          },
          {
            q: '[JEE Main] Write the formula of (a) tetraammineaquachloridocobalt(III) chloride, (b) potassium tetrahydroxidozincate(II), (c) dichlorido\u200bbis(ethane-1,2-diamine)\u200bcobalt(III) ion.',
            a: '(a) [Co(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)Cl]Cl<sub>2</sub>; (b) K<sub>2</sub>[Zn(OH)<sub>4</sub>]; (c) [CoCl<sub>2</sub>(en)<sub>2</sub>]<sup>+</sup>.',
          },
          {
            q: '[JEE Main] Name [Pt(NH<sub>3</sub>)<sub>4</sub>][PtCl<sub>4</sub>] and state the oxidation state of platinum in each ion.',
            a: 'Tetraammineplatinum(II) tetrachloridoplatinate(II); Pt is +2 in both.',
          },
          {
            q: '[JEE Advanced] Hg[Co(SCN)<sub>4</sub>] is named mercury(II) tetrathiocyanato-S-cobaltate(II). Find the oxidation states of Hg and Co, and say what the “S” certifies.',
            a: 'The anion is [Co(SCN)<sub>4</sub>]<sup>2−</sup>, so Co = +2 and the single Hg is +2; the “S” says the name takes thiocyanate as bound through sulphur – the linkage choice, which changes the compound. (In the real solid each thiocyanate bridges, N to Co and S to Hg, so the “S” here is the exam’s convention rather than the structure.)',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Alphabetising under the multiplier (“diaqua” sorted under d); writing “bis” for simple ligands (“bischlorido” is wrong – dichlorido); dropping -ate for anionic complexes; using chloro/fluoro instead of the -ido forms; stating counter-ion counts in the name; forgetting that nitrito-N and nitrito-O are different substances, not spelling variants.',
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 239–242 ─────────────────────────
  {
    n: 'B',
    title: 'Isomer Counting: Beyond cis and trans',
    extra: true,
    kalam: 'This addendum supplies the counting technology and the two flagship enumerations.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches the decision procedures and works the standard cases. JEE Main’s numerical section asks for counts – total stereoisomers of formulas one notch harder than the examples. This addendum supplies the counting technology and the two flagship enumerations.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'proc',
        title: 'The three-pass count',
        steps: [
          '<b>Pass 1 – geometry.</b> CN 6 octahedral, CN 4 square planar or tetrahedral (check ligand strength and metal: d<sup>8</sup> strong field goes square planar). Tetrahedral has no cis/trans, so Pass 2 is empty; a tetrahedral Mabcd is still chiral (a d/l pair).',
          '<b>Pass 2 – geometrical isomers.</b> Enumerate by fixing the trans pairs (for octahedral) or the opposite pairs (for square planar). Identical-ligand trans relationships are the invariant that separates arrangements.',
          '<b>Pass 3 – optical layer.</b> Test each geometrical isomer for a plane or centre of symmetry. Each chiral structure doubles into a d/l pair. Total stereoisomers = achiral count + 2 × (chiral count).',
        ],
      },

      { t: 'part', title: 'Flagship 1 – octahedral Ma₂b₂c₂ (5 geometrical, 6 stereoisomers)' },
      {
        t: 'p',
        html: 'This is the count the papers recycle ([Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>Br<sub>2</sub>]-type), and it repays doing properly. Label the three trans axes of the octahedron and ask, for the two a ligands: are they trans or cis?<br>• <b>a trans-a.</b> The remaining four sites form a square; place b,b and c,c on it: either b trans-b (forcing c trans-c) or b cis-b (forcing c cis-c). That is 2 isomers.<br>• <b>a cis-a.</b> Now the remaining pairs: b trans-b only; c trans-c only; or neither pair trans (all-cis). That is 3 more isomers.',
      },
      {
        t: 'p',
        html: 'Total geometrical: 2 + 3 = 5. Chirality: only the all-cis form (no trans pair of identical ligands) lacks a symmetry plane – it exists as a d/l pair. <b>Total stereoisomers = 4 achiral + 2 = 6.</b> An answer of “three” has stopped too early: the two cases give 2 + 3.',
      },

      { t: 'part', title: 'Flagship 2 – [M(AB)₃], an unsymmetrical bidentate' },
      {
        t: 'p',
        html: 'Glycinato (NH<sub>2</sub>CH<sub>2</sub>COO<sup>−</sup>, donor atoms N and O, different ends) is the standard AB ligand. In [M(gly)<sub>3</sub>] the three N ends can sit on one face (fac) or around a meridian (mer) – two geometrical isomers, exactly as in Ma<sub>3</sub>b<sub>3</sub>. The fac form is chiral (three identical propeller blades, no mirror plane); the mer form is also chiral (the mixed N/O arrangement destroys the meridian plane). Standard result for [M(AB)<sub>3</sub>]: <b>2 geometrical isomers, both optically active – 4 stereoisomers in total.</b> Contrast with the symmetrical [M(AA)<sub>3</sub>] (en, ox): one arrangement, chiral, 2 stereoisomers.',
      },

      { t: 'part', title: 'The reference table, extended' },
      { t: 'p', html: 'Octahedral unless noted.' },
      {
        t: 'table',
        title: null,
        head: ['Formula', 'Geometrical', 'Optically active', 'Total stereo'],
        rows: [
          ['Ma<sub>4</sub>b<sub>2</sub>', '2 (cis, trans)', 'neither', '2'],
          ['Ma<sub>3</sub>b<sub>3</sub>', '2 (fac, mer)', 'neither', '2'],
          ['Ma<sub>4</sub>bc', '2', 'neither', '2'],
          ['[M(AA)<sub>3</sub>]', '1', 'yes (d/l)', '2'],
          ['[M(AA)<sub>2</sub>b<sub>2</sub>]', '2', 'cis only', '3'],
          ['[M(AA)<sub>2</sub>bc]', '2', 'cis only', '3'],
          ['Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>', '5', 'all-cis only', '6'],
          ['[M(AB)<sub>3</sub>]', '2', 'both', '4'],
          ['[M(AA)bcde]', '6', 'all 6', '12'],
          ['Mabcd (square planar)', '3', 'none', '3'],
          ['Mabcdef', '15', 'all 15', '30'],
        ],
      },
      {
        t: 'p',
        html: 'The last row is a JEE Advanced curiosity: six different monodentate ligands on an octahedron give 15 geometrical arrangements, every one chiral. The 15 is quick to see: the six ligands form three trans pairs, in 5 × 3 × 1 = 15 ways. Square-planar Mabcd (fix a, choose which of b/c/d sits opposite: 3 ways) with achiral ligands never shows optical activity because the molecular plane is a mirror plane.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A square planar complex [Rh(py)(H<sub>2</sub>O)(F)(NO<sub>3</sub>)] has how many geometrical isomers?',
        steps: [
          'Four different monodentate ligands, Mabcd. Fix py; the ligand trans to it can be H<sub>2</sub>O, F, or NO<sub>3</sub> – 3 arrangements. The molecular plane kills optical activity.',
        ],
        ans: '3.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Count the geometrical isomers of the octahedral complex [Co(en)ClBrI(NH<sub>3</sub>)], and state how many are chiral.',
        steps: [
          'ON: <i>x</i> + 3(−1) = 0 gives Co = +3 (the complex is neutral); CN = 2 + 1 + 1 + 1 + 1 = 6, octahedral, skeleton [M(AA)bcde].',
          'Put the en span on one edge of the octahedron (all edges are equivalent). The four remaining sites contain exactly ONE trans pair; choose which two of the four monodentates occupy it (6 ways, giving <b>6 geometrical isomers</b>); the remaining two monodentates can then be placed on the last two sites in 2 ways, and these two placements are mirror images. So the total is 6 × 2 = 12 stereoisomers.',
          'Every one of the six lacks any symmetry plane (all four monodentates are different), so each is chiral – 6 enantiomeric pairs, i.e. 12 stereoisomers if d and l are counted separately.',
          'A question asking for geometrical isomers wants <b>6</b>, counting each enantiomeric pair as one geometrical form; one asking for stereoisomers wants 12 – know both numbers and read the question’s wording.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'For each of [Cr(H<sub>2</sub>O)<sub>3</sub>(NH<sub>3</sub>)<sub>3</sub>]<sup>3+</sup>, [Cr(en)<sub>3</sub>]<sup>3+</sup>, [Cr(gly)<sub>3</sub>], state which of geometrical and optical isomerism it exhibits.',
        steps: [
          '[Cr(H<sub>2</sub>O)<sub>3</sub>(NH<sub>3</sub>)<sub>3</sub>]<sup>3+</sup> is Ma<sub>3</sub>b<sub>3</sub>: fac and mer – geometrical only (both achiral).',
          '[Cr(en)<sub>3</sub>]<sup>3+</sup> is [M(AA)<sub>3</sub>]: one arrangement, chiral – optical only.',
          '[Cr(gly)<sub>3</sub>] is [M(AB)<sub>3</sub>]: fac and mer, both chiral – <b>geometrical AND optical</b>.',
          'The trio is a favourite “respectively” MCQ precisely because each member sits in a different category.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw the fac and mer isomers of [Co(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>] and state why neither is optically active.',
            a: 'Fac: three NH<sub>3</sub> on one triangular face; mer: three NH<sub>3</sub> around a meridian. Each retains a mirror plane, so both are achiral.',
          },
          {
            q: '[NEET] Which shows optical isomerism: trans-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>, cis-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>, [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup>, [Pt(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>?',
            a: 'cis-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup> only.',
          },
          {
            q: '[JEE Main] How many geometrical isomers has octahedral [Co(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>Br<sub>2</sub>]<sup>−</sup>? How many of them are chiral?',
            a: '5 geometrical; 1 chiral (the all-cis form, existing as d/l).',
          },
          {
            q: '[JEE Main] The square planar complex [Pt(NH<sub>3</sub>)(py)(Cl)(Br)] can exist as how many geometrical isomers?',
            a: '3.',
          },
          {
            q: '[JEE Advanced] [M(AA)<sub>2</sub>X<sub>2</sub>] gives 3 stereoisomers while Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub> gives 6. Explain the difference in one sentence each.',
            a: '[M(AA)<sub>2</sub>X<sub>2</sub>]: the chelate rings fix four positions, leaving only cis/trans for the X pair, and only cis is chiral (1 + 2 = 3). Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>: three independent ligand pairs give 5 geometrical arrangements, of which the all-cis one is chiral (4 + 2 = 6).',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Stopping the Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub> count at 3 (the full count is 5 geometrical, 6 with the d/l pair); calling the fac and mer of Ma<sub>3</sub>b<sub>3</sub> optically active; awarding optical activity to square-planar Mabcd; forgetting to double chiral geometrical isomers when the question asks “stereoisomers”; counting linkage/ionisation isomers into a stereoisomer total (structural isomers are a separate ledger).',
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 242–246 ─────────────────────────
  {
    n: 'C',
    title: 'CFT Arithmetic: Tetrahedral Fields, Pairing Energies, and the Colour Table',
    extra: true,
    kalam: 'Because Δt is so small, pairing is hardly ever forced: tetrahedral complexes are essentially always high spin.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter establishes the octahedral machinery and states the tetrahedral inversion and Δ<sub>t</sub> = (4/9)Δ<sub>o</sub> without computing with them. Previous-year papers go further: tetrahedral CFSE values, pairing-energy comparisons in wavenumbers, and Δ<sub>o</sub>-to-wavelength conversions, which Topic 03 begins. This addendum makes those computations routine.',
      },

      { t: 'part', title: 'The tetrahedral field, quantified' },
      {
        t: 'p',
        html: 'In a tetrahedral field the splitting inverts: the e set (d<sub><i>x</i>²−<i>y</i>²</sub>, d<sub><i>z</i>²</sub>, pointing between the ligand directions) lies BELOW, and the t<sub>2</sub> set (d<sub><i>xy</i></sub>, d<sub><i>yz</i></sub>, d<sub><i>xz</i></sub>) lies ABOVE.',
      },
      {
        t: 'proc',
        title: 'Two consequences',
        steps: [
          '<b>No g subscripts.</b> The tetrahedron has no centre of symmetry, so the levels are e and t<sub>2</sub>, never e<sub>g</sub>/t<sub>2g</sub>.',
          '<b>Barycentric energies flip sign</b>: e at −0.6 Δ<sub>t</sub>, t<sub>2</sub> at +0.4 Δ<sub>t</sub>, with Δ<sub>t</sub> = (4/9)Δ<sub>o</sub> for the same metal, ligands and distance. Because Δ<sub>t</sub> is so small, pairing is hardly ever forced: tetrahedral complexes are essentially always high spin.',
        ],
      },
      { t: 'p', html: 'So the tetrahedral CFSE formula is' },
      {
        t: 'formula',
        kicker: 'The tetrahedral CFSE formula',
        main: 'CFSE = (−0.6 <i>n</i><sub>e</sub> + 0.4 <i>n</i><sub>t2</sub>) Δ<sub>t</sub>',
        legend: [
          'CFSE = crystal field stabilisation energy',
          '<i>n</i><sub>e</sub> = electron occupancy of e',
          '<i>n</i><sub>t2</sub> = electron occupancy of t<sub>2</sub>',
          'Δ<sub>t</sub> = crystal field splitting energy, tetrahedral',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Fill by Hund’s rule with no pairing choice. For d<sup>8</sup> ([NiCl<sub>4</sub>]<sup>2−</sup>): e<sup>4</sup> t<sub>2</sub><sup>4</sup>, CFSE = (−2.4 + 1.6) Δ<sub>t</sub> = −0.8 Δ<sub>t</sub> – a value JEE Main has asked verbatim.',
      },
      { t: 'fig', id: 'c12-05-C-d1' },

      { t: 'part', title: 'Pairing-energy arithmetic' },
      {
        t: 'p',
        html: 'The high/low-spin choice exists only for octahedral d<sup>4</sup>–d<sup>7</sup>, and only by comparing Δ<sub>o</sub> with <i>P</i>:<br>• d<sup>4</sup>, <b>high spin</b> (Δ<sub>o</sub> < <i>P</i>): t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>1</sup>, CFSE = −0.6 Δ<sub>o</sub>, 4 unpaired.<br>• d<sup>4</sup>, <b>low spin</b> (Δ<sub>o</sub> > <i>P</i>): t<sub>2g</sub><sup>4</sup>, CFSE = −1.6 Δ<sub>o</sub> + <i>P</i>, 2 unpaired.',
      },
      {
        t: 'p',
        html: 'A typical pattern: give <i>P</i> = 28,000 cm<sup>−1</sup> and Δ<sub>o</sub> = 15,800 cm<sup>−1</sup> for [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, ask for CFSE. Since Δ<sub>o</sub> < <i>P</i>, high spin; CFSE = −0.6 × 15,800 = −9,480 cm<sup>−1</sup>, magnitude 9,480 cm<sup>−1</sup>. The question asks only for the crystal-field term – do not add <i>P</i> in a high-spin case (there are no extra pairs relative to the free ion). (These are exercise values: the measured Δ<sub>o</sub> of this ion is quoted near 21,000 cm<sup>−1</sup>, still below <i>P</i>, so the reasoning holds.)',
      },

      { t: 'part', title: 'Δo ↔ wavelength ↔ colour' },
      {
        t: 'p',
        html: 'One relation runs the whole family: the absorbed photon pays for exactly one Δ<sub>o</sub>:',
      },
      {
        t: 'formula',
        kicker: 'The absorbed photon pays for exactly one Δ<sub>o</sub>',
        main: 'Δ<sub>o</sub> = <i>E</i> = <i>hc</i>/<i>λ</i> (per ion)<br>Δ<sub>o</sub> = <i>N</i><sub>A</sub><i>hc</i>/<i>λ</i> (per mole)',
        legend: [
          'Δ<sub>o</sub> = crystal field splitting energy, octahedral',
          '<i>E</i> = energy of the absorbed photon',
          '<i>h</i> = Planck’s constant',
          '<i>c</i> = speed of light',
          '<i>λ</i> = wavelength of the absorbed light',
          '<i>N</i><sub>A</sub> = number of entities in one mole',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Worked on NCERT’s own datum: [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> absorbs at 498 nm. Per mole:<br>Δ<sub>o</sub> = (6.022 × 10<sup>23</sup>)(6.626 × 10<sup>−34</sup>)(3.0 × 10<sup>8</sup>)/(498 × 10<sup>−9</sup>) ≈ 2.40 × 10<sup>5</sup> J mol<sup>−1</sup> (2.4 × 10<sup>5</sup> to two significant figures, as <i>c</i> is given to two) = 240 kJ mol<sup>−1</sup>',
      },
      {
        t: 'p',
        html: 'The observed colour is the complement of the absorbed colour. NCERT’s table is worth internalising as six rows:',
      },
      {
        t: 'table',
        title: null,
        head: ['Complex', 'Absorbed (nm)', 'Absorbed colour', 'Observed colour'],
        rows: [
          ['[CoCl(NH<sub>3</sub>)<sub>5</sub>]<sup>2+</sup>', '535', 'yellow', 'violet'],
          ['[Co(NH<sub>3</sub>)<sub>5</sub>(H<sub>2</sub>O)]<sup>3+</sup>', '500', 'blue-green', 'red'],
          ['[Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>', '475', 'blue', 'yellow-orange'],
          ['[Co(CN)<sub>6</sub>]<sup>3−</sup>', '310', 'UV', 'pale yellow'],
          ['[Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup>', '600', 'red', 'blue'],
          ['[Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>', '498', 'blue-green', 'violet'],
        ],
      },
      {
        t: 'p',
        html: 'Two companion facts, both NCERT and both examined: <b>removing the ligand removes the colour</b> – anhydrous CuSO<sub>4</sub> is white while CuSO<sub>4</sub>·5H<sub>2</sub>O is blue, and heating [Ti(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> free of water renders it colourless, because without a ligand field there is no splitting and no d–d transition, as NCERT puts it (anhydrous CuSO<sub>4</sub> in fact still has sulphate oxygens around Cu<sup>2+</sup>; their much weaker field moves the absorption out of the visible, so the solid is white). And <b>stronger field means shorter wavelength</b>: as en progressively replaces water on [Ni(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, the colour walks green → pale blue → blue/purple → violet, tracking the growing Δ<sub>o</sub> up the spectrochemical series.',
      },

      { t: 'part', title: 'The spectrochemical series, NCERT’s longer list' },
      {
        t: 'p',
        html: 'NCERT’s experimental ordering (weak → strong):<br>I<sup>−</sup> < Br<sup>−</sup> < SCN<sup>−</sup> < Cl<sup>−</sup> < S<sup>2−</sup> < F<sup>−</sup> < OH<sup>−</sup> < C<sub>2</sub>O<sub>4</sub><sup>2−</sup><br>< H<sub>2</sub>O < NCS<sup>−</sup> < edta<sup>4−</sup> < NH<sub>3</sub> < en < CN<sup>−</sup> < CO<br>NO<sub>2</sub><sup>−</sup>, absent from NCERT’s list, sits between en and CN<sup>−</sup>, as in Topic 03.',
      },
      {
        t: 'p',
        html: 'The examinable embarrassments of CFT are built into this list: a pure point-charge model predicts the anionic ligands should split most, yet I<sup>−</sup>, Br<sup>−</sup>, Cl<sup>−</sup>, F<sup>−</sup> sit at the weak end – the series is experimental, and explaining it needs ligand-field/MO theory (π-acceptors like CO at the top, π-donors like the halides at the bottom). State that plainly when asked for CFT’s limitations.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The CFSE of K<sub>2</sub>[NiCl<sub>4</sub>] (tetrahedral) is: (a) −0.4 Δ<sub>o</sub> (b) −0.8 Δ<sub>t</sub> (c) −1.2 Δ<sub>t</sub> (d) −2.4 Δ<sub>o</sub>.',
        steps: [
          '<b>The fast way.</b> Ni<sup>2+</sup> = d<sup>8</sup>; tetrahedral filling e<sup>4</sup> t<sub>2</sub><sup>4</sup> (no pairing choice). CFSE = (−0.6 × 4 + 0.4 × 4) Δ<sub>t</sub> = −0.8 Δ<sub>t</sub>.',
          'The distractors borrow numbers from the octahedral tariff (−1.2 is octahedral d<sup>8</sup>, here written in Δ<sub>t</sub>; −0.4 and −2.4 are octahedral d<sup>6</sup>) – the question tests whether you noticed the geometry AND the inverted tariff.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An octahedral complex [ML<sub>6</sub>] has CFSE = −1.2 Δ<sub>o</sub> and is paramagnetic. Which d-counts are consistent?',
        steps: [
          'Let <i>a</i> electrons sit in t<sub>2g</sub> and <i>b</i> in e<sub>g</sub>. Solve −0.4<i>a</i> + 0.6<i>b</i> = −1.2 with <i>a</i> + <i>b</i> = <i>n</i>, <i>a</i> ≤ 6, <i>b</i> ≤ 4.',
          'Integer solutions: (<i>a</i>, <i>b</i>) = (3, 0) → d<sup>3</sup>, and (<i>a</i>, <i>b</i>) = (6, 2) → d<sup>8</sup>.',
          'Both configurations carry unpaired electrons, so both fit “paramagnetic”.',
          'If the question also demanded diamagnetic, no d-count would fit: d<sup>3</sup> and d<sup>8</sup> are both paramagnetic, and low-spin d<sup>6</sup>, although diamagnetic, has CFSE −2.4 Δ<sub>o</sub> (not −1.2 Δ<sub>o</sub>).',
        ],
        ans: 'd<sup>3</sup> or d<sup>8</sup> (e.g. Cr<sup>3+</sup> with H<sub>2</sub>O, or Ni<sup>2+</sup> with NH<sub>3</sub>).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, Δ<sub>o</sub> = 15,800 cm<sup>−1</sup> and <i>P</i> = 28,000 cm<sup>−1</sup>. Find the configuration, the number of unpaired electrons, and the CFSE in cm<sup>−1</sup>.',
        steps: [
          'Mn<sup>3+</sup> = d<sup>4</sup>. Δ<sub>o</sub> < <i>P</i>, so high spin: t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>1</sup>, 4 unpaired, μ<sub>s</sub> = √(4 × 6) = 4.90 BM.',
          'CFSE = −0.6 Δ<sub>o</sub> = −9,480 cm<sup>−1</sup>.',
          'No pairing-energy term, because the high-spin d<sup>4</sup> arrangement has exactly the same number of pairs as the free ion.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Two complexes [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> (violet) and [Cr(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub> (yellow) are given. A student writes: “Δ<sub>o</sub> values are calculated from the energies of violet and yellow light respectively.” Correct the statement, and rank the two Δ<sub>o</sub>.',
        steps: [
          'The error is using the observed colour in the energy calculation. A complex absorbs the COMPLEMENT of what you see: the violet complex absorbs yellow light, the yellow complex absorbs violet light.',
          'So Δ<sub>o</sub>([Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>) corresponds to yellow (lower energy) and Δ<sub>o</sub>([Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>) to violet (higher energy): Δ<sub>o</sub>(H<sub>2</sub>O) < Δ<sub>o</sub>(NH<sub>3</sub>) – exactly the spectrochemical order.',
          'Both are d<sup>3</sup>, paramagnetic with 3 unpaired electrons.',
          'The one-line lesson: energies are computed from absorbed light, never from transmitted light.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why are low-spin tetrahedral complexes essentially unknown?',
            a: 'Δ<sub>t</sub> = (4/9)Δ<sub>o</sub> is usually too small to exceed the pairing energy, so pairing is hardly ever forced; tetrahedral complexes are essentially always high spin.',
          },
          {
            q: '[NEET] The d-orbital configuration of tetrahedral [NiCl<sub>4</sub>]<sup>2−</sup> is: (a) e<sup>4</sup> t<sub>2</sub><sup>4</sup> (b) t<sub>2g</sub><sup>6</sup> e<sub>g</sub><sup>2</sup> (c) e<sup>3</sup> t<sub>2</sub><sup>5</sup> (d) t<sub>2</sub><sup>6</sup> e<sup>2</sup>.',
            a: '(a) – and note no g subscripts in a tetrahedron.',
          },
          {
            q: '[JEE Main] Compute the CFSE (in Δ<sub>o</sub>) for high-spin d<sup>5</sup> and for low-spin d<sup>6</sup> (ignore pairing corrections).',
            a: 'HS d<sup>5</sup> (t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>2</sup>): 0.0 Δ<sub>o</sub>; LS d<sup>6</sup> (t<sub>2g</sub><sup>6</sup>): −2.4 Δ<sub>o</sub>.',
          },
          {
            q: '[JEE Main] A complex absorbs at 600 nm. Using <i>h</i> = 6.4 × 10<sup>−34</sup> J s, <i>c</i> = 3.0 × 10<sup>8</sup> m s<sup>−1</sup>, <i>N</i><sub>A</sub> = 6.0 × 10<sup>23</sup> mol<sup>−1</sup>, estimate Δ<sub>o</sub> in kJ mol<sup>−1</sup> and state the observed colour.',
            a: 'Δ<sub>o</sub> = <i>N</i><sub>A</sub><i>hc</i>/<i>λ</i> = (6.0 × 10<sup>23</sup> × 6.4 × 10<sup>−34</sup> × 3 × 10<sup>8</sup>)/(600 × 10<sup>−9</sup>) ≈ 192 kJ mol<sup>−1</sup> (1.9 × 10<sup>2</sup> to two significant figures); absorbed 600 nm is orange-red, so the complex appears blue (as for [Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup> in the table above).',
          },
          {
            q: '[JEE Advanced] [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> is paramagnetic with 4 unpaired electrons; [Fe(CN)<sub>6</sub>]<sup>4−</sup> is diamagnetic. Compute both CFSE values and explain which complex is more stabilised by the field, including the pairing-energy caveat.',
            a: 'HS d<sup>6</sup>: −0.4 Δ<sub>o</sub>, with the aqua complex’s Δ<sub>o</sub>; LS d<sup>6</sup>: −2.4 Δ<sub>o</sub> + 2<i>P</i>, with the cyano complex’s much larger Δ<sub>o</sub>. The cyano complex has the far more negative crystal-field term, but an honest comparison of total stability must charge the two extra electron pairs against it – the field stabilisation still wins, which is why the low-spin form exists at all.',
          },
        ],
      },
      {
        t: 'p',
        html: '<b>Common errors.</b> Using the octahedral tariff (−0.4 and +0.6) in a tetrahedron (it is −0.6 and +0.4); writing t<sub>2g</sub>/e<sub>g</sub> for tetrahedral complexes; adding <i>P</i> in high-spin cases; computing wavelength from the observed colour instead of the absorbed one; treating “CFSE = −1.2 Δ<sub>o</sub>” as unique to one d-count (d<sup>3</sup> and d<sup>8</sup> share it).',
      },
    ],
  },
];
