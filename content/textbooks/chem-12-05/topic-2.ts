import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 02, Isomerism in Coordination Compounds: pp. 204–212 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. Figures 5.1 (caption p. 207, drawn p. 208) and 5.2 (caption p. 209, drawn
 * p. 210) sit inside worked examples 1 and 4; they are redrawn in
 * lib/diagrams/chemistry-12-05.ts. The book's "Sub-01" is "Topic 01" here. The
 * answer to practice question 4 is the errata's (five geometrical isomers, six
 * stereoisomers), which the page already shows.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 204–212 ─────────────────────────
  {
    n: '02',
    title: 'Isomerism in Coordination Compounds',
    kalam: 'Coordination compounds are unusually rich in isomerism because there are so many ways to rearrange the same parts around a metal centre.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial favourite and a heavy scorer. CBSE Boards ask to draw/name geometrical or optical isomers (2–3 marks) and to identify ionisation/linkage isomers. NEET reliably places one conceptual question (“which shows optical isomerism?”). JEE Main tests isomer counting and structural-type identification almost every year; JEE Advanced pushes into multi-isomer counting for unsymmetrical octahedral and polynuclear complexes.',
      },
      {
        t: 'p',
        html: 'Two cooks are handed the exact same ingredients — the same rice, the same spices, the same vegetables, in the same amounts. One makes a biryani; the other makes a pulao. Same shopping list, different dish, different taste. In chemistry this is exactly what <b>isomers</b> are: compounds with the same chemical formula but a different arrangement of atoms, and because the arrangement differs, so do their properties — colour, melting point, even chemical reactivity.',
      },
      {
        t: 'p',
        html: 'Coordination compounds are unusually rich in isomerism because there are so many ways to rearrange the same parts around a metal centre. The whole zoo splits cleanly into <b>two families</b>, and the single question that separates them is: did the bonds change, or only the positions in space?<br>• <b>Structural isomers</b> have different bonds — something that was inside the coordination sphere is now outside, or a ligand is attached through a different atom. The connectivity itself is different.<br>• <b>Stereoisomers</b> have the same bonds but a different arrangement in space. Nothing about what-is-bonded-to-what changes; only the geometry does.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture an octahedral metal with four identical ligands and two chloride ligands, [Ma<sub>4</sub>Cl<sub>2</sub>]. The two chlorides can sit next to each other (90° apart) like two friends sharing a bench — the <b>cis</b> isomer — or across the room from each other (180° apart) — the <b>trans</b> isomer. Same six ligands, same six bonds, but a different shape and often a strikingly different colour. That is <b>geometrical isomerism</b>. When the split is three-and-three rather than four-and-two, as in Ma<sub>3</sub>b<sub>3</sub>, the same idea gives the <b>facial</b> and <b>meridional</b> isomers — three like-ligands bunched on one face, or spread around the middle. The arrangement in space is everything.',
      },
      {
        t: 'p',
        html: 'Now hold up your two hands. They are mirror images, and no matter how you rotate one, you cannot lay it perfectly on top of the other — your right glove never fits your left hand. Certain complexes are built the same way: their mirror image is non-superimposable. These are <b>optical isomers</b> (enantiomers), and the two forms rotate plane-polarised light in opposite directions — one to the right (<b>dextro, d</b>), one to the left (<b>laevo, l</b>). The deep point is that a chiral complex is not “missing” anything compared with its mirror twin — both are perfectly valid molecules with the same bonds and the same internal distances; they are simply handed, like a pair of spiral staircases winding in opposite directions. This handedness is most common in octahedral complexes carrying three chelate rings, or two chelate rings in cis positions (Topic 01), because the rings then twist round the metal like the blades of a propeller, and no internal mirror can undo that. (With two rings trans, in one plane, there is no twist and a mirror plane remains.)',
      },
      {
        t: 'p',
        html: 'The structural family has its own four standard members, each tied to a concept from Topic 01:<br>• <b>Linkage isomerism</b> — an ambidentate ligand (Topic 01) binds through a different donor atom. The textbook case is the nitrite ligand: bound through nitrogen (–NO<sub>2</sub>, “nitrito-N”) it gives a yellow complex, while bound through oxygen (–ONO, “nitrito-O”) the very same formula gives a red one.<br>• <b>Ionisation isomerism</b> — a counter ion (Topic 01) and a coordinated ligand trade places, so the two isomers release different ions in solution. [Co(NH<sub>3</sub>)<sub>5</sub>(SO<sub>4</sub>)]Br frees Br<sup>−</sup> (testable with silver nitrate), while [Co(NH<sub>3</sub>)<sub>5</sub>Br]SO<sub>4</sub> frees SO<sub>4</sub><sup>2−</sup> (testable with barium chloride).<br>• <b>Solvate (hydrate) isomerism</b> — water sits inside the coordination sphere in one isomer and as water of crystallisation outside in the other. Chromium(III) chloride hexahydrate is the famous trio: [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> is violet, [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub>·H<sub>2</sub>O is grey-green, and [Cr(H<sub>2</sub>O)<sub>4</sub>Cl<sub>2</sub>]Cl·2H<sub>2</sub>O is dark green — same formula, three colours.<br>• <b>Coordination isomerism</b> — in a salt made of a complex cation and a complex anion, the ligands are distributed differently between the two metal centres, as in [Co(NH<sub>3</sub>)<sub>6</sub>][Cr(CN)<sub>6</sub>] versus [Cr(NH<sub>3</sub>)<sub>6</sub>][Co(CN)<sub>6</sub>].',
      },
      {
        t: 'p',
        html: 'These distinctions are not academic hair-splitting. The cis and trans geometrical isomers of [PtCl<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>] are a striking example: the cis form (cisplatin) is a front-line anticancer drug, while the trans form is clinically useless — same atoms, same bonds, opposite spatial arrangement, completely different biology. Knowing which isomer you have can matter enormously. Historically, it was Werner himself who first demonstrated optical activity in coordination compounds, resolving complexes into their d and l forms and thereby proving that his octahedral picture of the secondary valence (Topic 01) was geometrically real rather than a convenient bookkeeping device.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Isomerism rules are full of “only when” clauses worth fixing early:<br>• <b>Geometrical isomerism never occurs in tetrahedral complexes</b> — every position in a tetrahedron is adjacent to every other, so there is no “cis vs trans” distinction. It also does not occur in linear CN 2 or trigonal planar CN 3 complexes.<br>• A complex of type Ma<sub>6</sub> or Ma<sub>5</sub>b (octahedral) shows <b>no</b> geometrical isomerism — there is only one way to place a single odd ligand.<br>• <b>Optical activity requires the absence of a plane (or centre) of symmetry.</b> A molecule with a mirror plane is superimposable on its reflection and is optically inactive — which is why, for [M(AA)<sub>2</sub>X<sub>2</sub>] type complexes, the cis form can be chiral but the trans form (which keeps a symmetry plane) is not.',
      },

      { t: 'part', title: 'Key terms and classification' },
      {
        t: 'p',
        html: 'The working tools are the classification scheme and the symmetry/formula rules below.',
      },
      {
        t: 'p',
        html: '<b>The classification tree</b><br>• <b>Stereoisomerism</b> (same bonds, different spatial arrangement)<br>– <b>Geometrical (cis–trans, and fac–mer):</b> ligands occupy adjacent (cis) or opposite (trans) positions; for an Ma<sub>3</sub>b<sub>3</sub> octahedron, the three identical ligands lie on one triangular face (<b>facial, fac</b>) or around a meridian (<b>meridional, mer</b>).<br>– <b>Optical (enantiomerism):</b> non-superimposable mirror images that rotate plane-polarised light equally but oppositely (d and l). A <b>polarimeter</b> measures the direction and angle of rotation: the dextro (d, or +) form turns the plane clockwise, the laevo (l, or −) form anticlockwise by the same amount. An exactly 1:1 mixture of the two — a <b>racemic mixture</b> — produces zero net rotation because the two effects cancel, and separating it into the pure d and l forms is called <b>resolution</b>. Crucially, enantiomers are identical in ordinary physical properties (melting point, solubility) and differ only in their interaction with polarised light and with other chiral substances — which is why optical isomerism is so easy to overlook on paper.<br>• <b>Structural (constitutional) isomerism</b> (different bonds)<br>– <b>Ionisation:</b> coordinated group ⇄ counter ion (different ions released in solution).<br>– <b>Solvate / hydrate:</b> water as ligand vs water of crystallisation.<br>– <b>Linkage:</b> ambidentate ligand bound through a different donor atom.<br>– <b>Coordination:</b> ligand redistribution between a complex cation and a complex anion.<br>– <b>(JEE-only extras, not in the CBSE list):</b> <b>coordination-position isomerism</b> arises in polynuclear (two-metal) complexes when bridging or terminal ligands are positioned differently relative to the two metal centres; <b>ligand isomerism</b> arises when the ligand backbone itself is isomeric (e.g. a straight-chain vs branched diamine); and <b>polymerisation isomerism</b> describes complexes that share an empirical formula but differ in molecular size, such as [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] and [Pt(NH<sub>3</sub>)<sub>4</sub>][PtCl<sub>4</sub>].',
      },
      {
        t: 'p',
        html: '<b>Symmetry / formula rules (the part students lose marks on)</b><br>• <b>Square planar (CN 4)</b> shows geometrical isomerism for Ma<sub>2</sub>b<sub>2</sub>, Ma<sub>2</sub>bc, Mabcd (gives 3 isomers), and M(AB)<sub>2</sub> with unsymmetrical bidentate AB — but <b>not</b> for Ma<sub>4</sub>, Ma<sub>3</sub>b, or Mab<sub>3</sub>.<br>• <b>Tetrahedral (CN 4)</b> shows <b>no</b> geometrical isomerism.<br>• <b>Octahedral (CN 6)</b> shows geometrical isomerism for Ma<sub>4</sub>b<sub>2</sub>, Ma<sub>2</sub>b<sub>4</sub>, Ma<sub>4</sub>bc, Ma<sub>3</sub>b<sub>3</sub> (fac/mer), Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>, [M(AA)<sub>2</sub>X<sub>2</sub>] and [M(AA)<sub>2</sub>bc] — but <b>not</b> for Ma<sub>6</sub> or Ma<sub>5</sub>b.<br>• <b>Optical activity:</b> [M(AA)<sub>3</sub>] (tris-chelate) is <b>always</b> chiral; cis-[M(AA)<sub>2</sub>X<sub>2</sub>] is chiral while trans- is not; fac and mer isomers of Ma<sub>3</sub>b<sub>3</sub> are both optically inactive; square planar complexes are almost always optically inactive (they possess a symmetry plane).',
      },
      {
        t: 'p',
        html: '<b>Why these counts come out the way they do.</b> It is worth seeing the logic rather than memorising numbers. For an octahedral Ma<sub>3</sub>b<sub>3</sub>, the three identical “a” ligands can either cluster on one triangular face of the octahedron — the <b>facial (fac)</b> isomer — or string themselves around a meridian (an edge-to-edge arc passing through both poles) — the <b>meridional (mer)</b> isomer; there is no third way, so the count is exactly two, and both happen to carry a symmetry plane, making them optically inactive. For a square planar Mabcd (four different ligands), fix ligand “a” in one corner and ask which of the remaining three sits opposite it: b, c, or d — three distinct choices, hence exactly <b>three</b> geometrical isomers. And the reason trans-[M(AA)<sub>2</sub>X<sub>2</sub>] loses optical activity while the cis keeps it is purely geometric: placing the two X ligands opposite one another forces a mirror plane through the molecule, whereas the cis placement leaves the structure handed. Train yourself to reason from the placement, and you will never need to memorise an isomer-count table.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'No derivation exists for this topic; the skill is a set of decision procedures.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Decide whether a complex shows geometrical isomerism',
        steps: [
          'Find the geometry from the coordination number (Topic 01): CN 4 → tetrahedral or square planar; CN 6 → octahedral. <b>Why:</b> tetrahedral is ruled out immediately (no geometrical isomerism, GI), so geometry is the first gate — a Ma<sub>2</sub>b<sub>2</sub> that is tetrahedral shows nothing, while the identical formula as square planar shows cis and trans.',
          'Reduce the formula to its Ma<sub><i>x</i></sub>b<sub><i>y</i></sub> … skeleton.',
          'Check it against the allowed list (square planar Ma<sub>2</sub>b<sub>2</sub>, Ma<sub>2</sub>bc, Mabcd, M(AB)<sub>2</sub>; octahedral Ma<sub>4</sub>b<sub>2</sub>, Ma<sub>2</sub>b<sub>4</sub>, Ma<sub>4</sub>bc, Ma<sub>3</sub>b<sub>3</sub>, Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>, [M(AA)<sub>2</sub>X<sub>2</sub>], [M(AA)<sub>2</sub>bc], [M(AB)<sub>3</sub>], and any less symmetrical mix). <b>Why:</b> GI exists only when two or more distinguishable arrangements (adjacent vs opposite) are actually possible; a single odd ligand (Ma<sub>5</sub>b) or a fully symmetric set (Ma<sub>6</sub>) offers no such choice.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Decide whether a complex is optically active',
        steps: [
          'Draw the structure (or its skeleton).',
          'Look for an internal mirror plane or centre of symmetry.',
          'If none exists, the mirror image is non-superimposable → the complex is <b>chiral / optically active</b>; if a plane or centre exists, it is inactive. <b>Why:</b> optical activity is a pure symmetry question — the hand-and-glove test made rigorous. Shortcut: any [M(AA)<sub>3</sub>] tris-chelate is chiral; trans-[M(AA)<sub>2</sub>X<sub>2</sub>] and the fac and mer forms of Ma<sub>3</sub>b<sub>3</sub> are not. (With an unsymmetrical chelate, [M(AB)<sub>3</sub>], fac and mer are both chiral.)',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure C — Identify which structural isomerism a given pair shows.</b> Ask what differs between the two written formulae. If a ligand and a group outside the bracket have swapped → <b>ionisation</b> (and the two give different precipitation tests). If the difference is whether H<sub>2</sub>O is inside the bracket or written as ·<i>n</i>H<sub>2</sub>O → <b>solvate/hydrate</b>. If the same ambidentate ligand is written attached by a different atom (–NO<sub>2</sub> vs –ONO; –SCN vs –NCS) → <b>linkage</b>. If both isomers are cation+anion complexes with ligands shuffled between two metals → <b>coordination</b>. <b>Why:</b> each structural type is defined by what kind of bond changed, so naming the changed bond names the isomerism.',
      },
      {
        t: 'p',
        html: '<b>Procedure D — Count stereoisomers (the JEE skill).</b> Enumerate the geometrical isomers first (cis/trans, or fac/mer), then test each geometrical isomer separately for chirality and add a d/l pair wherever one is chiral. <b>Why:</b> optical isomers are layered on top of geometrical ones — a cis form may itself be a chiral pair while the trans form is a single achiral structure. As a concrete drill, take octahedral [M(AA)<sub>2</sub>X<sub>2</sub>]: there are two geometrical isomers, cis and trans. The trans has a mirror plane (one achiral structure); the cis has none (a d/l pair). Total = 1 + 2 = 3 stereoisomers. Now compare [M(AA)<sub>3</sub>]: there is only one geometrical arrangement, but it is chiral, so the count is 2 (a single d/l pair). Doing the geometrical layer before the optical layer is what stops you from either double-counting symmetric structures or quietly dropping a hidden enantiomer.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        fig: 'c12-05-fig-5.1',
        q: 'Draw and name the geometrical isomers of the octahedral ion [Cr(NH<sub>3</sub>)<sub>4</sub>Br<sub>2</sub>]<sup>+</sup>, and state the oxidation number of chromium.',
        steps: [
          'Geometry: CN = 6 → octahedral. Skeleton Ma<sub>4</sub>b<sub>2</sub> → geometrical isomerism is allowed.',
          'ON of Cr: <i>x</i> + 4(0) + 2(−1) = +1 ⇒ <i>x</i> = +3.',
          'The two bromido ligands can be <b>cis</b> (adjacent, 90°) or <b>trans</b> (opposite, 180°).',
          '<b>Names:</b> cis-tetraammine\u200bdibromido\u200bchromium(III) ion and trans-tetraammine\u200bdibromido\u200bchromium(III) ion. The cis isomer, with both bromides on one side, is polar (a non-zero dipole moment), while the symmetric trans isomer has its bond dipoles cancelling — a difference that shows up in solubility and often in colour, and is exactly the kind of distinction a board examiner expects you to mention alongside the drawing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which one of the following is optically active?<br>(a) [Fe(ox)<sub>3</sub>]<sup>3−</sup> (b) trans-[Fe(ox)<sub>2</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>−</sup> (c) [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> (d) square planar [Ni(CN)<sub>4</sub>]<sup>2−</sup> (ox = oxalate).',
        steps: [
          '<b>Speed logic:</b> optical activity = “no plane of symmetry.” Scan, don’t draw.<br>– (c) Ma<sub>6</sub> and (d) symmetric square planar both carry obvious symmetry planes → inactive.<br>– (b) the trans arrangement of the two water ligands sits on a mirror plane → inactive.<br>– (a) a <b>tris-chelate</b> [M(AA)<sub>3</sub>] has no symmetry plane — it is the propeller-shaped, always-chiral case.',
          '<b>Trap to avoid:</b> picking (b). Students remember “didentate ligands → optical activity” and stop reading the trans. Only the cis form of [M(AA)<sub>2</sub>X<sub>2</sub>] is chiral; the trans keeps a mirror plane. Read the cis/trans label before deciding.',
        ],
        ans: '(a).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (linkage isomerism + nomenclature + ambidentate, Topic 01)',
        q: 'The complex [Cr(NH<sub>3</sub>)<sub>5</sub>(SCN)]<sup>2+</sup> contains the ambidentate thiocyanate ligand. (i) Name the type of isomerism it can show and write the two isomers’ IUPAC names. (ii) Does it show geometrical isomerism? Justify.',
        steps: [
          '(i) SCN<sup>−</sup> is ambidentate (Topic 01): it can bind through <b>S</b> (thiocyanato-S) or through <b>N</b> (thiocyanato-N / isothiocyanato). The complex therefore shows <b>linkage isomerism</b>.',
          '<b>Names:</b> pentaammine\u200bthiocyanato-S-chromium(III) ion and pentaammine\u200bthiocyanato-N-chromium(III) ion.',
          '(ii) The skeleton is Ma<sub>5</sub>b (five NH<sub>3</sub> + one SCN). A single odd ligand on an octahedron has only one possible position relative to the rest, so <b>no geometrical isomerism</b> is possible.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (full stereoisomer count)',
        fig: 'c12-05-fig-5.2',
        q: 'How many stereoisomers exist for the octahedral cation [Co(en)<sub>2</sub>(NH<sub>3</sub>)Cl]<sup>2+</sup>? Classify each as optically active or inactive. (en = ethane-1,2-diamine, a symmetrical bidentate ligand.)',
        steps: [
          'ON check (Topic 01): <i>x</i> + 2(0) + 0 + (−1) = +2 ⇒ Co is +3; CN = 2(2) + 1 + 1 = 6, octahedral. Skeleton [M(AA)<sub>2</sub>bc].',
          '<b>Step 1 — geometrical isomers.</b> The two monodentate ligands NH<sub>3</sub> and Cl can be <b>cis</b> or <b>trans</b> to each other (the two en units span the remaining positions). That gives a cis and a trans geometrical isomer.',
          '<b>Step 2 — chirality of each.</b><br>– The <b>trans</b> isomer possesses a plane of symmetry → optically <b>inactive</b> (one structure).<br>– The <b>cis</b> isomer has no symmetry plane → <b>chiral</b>, existing as a non-superimposable d/l pair.',
          'This layering of optical isomers on top of the cis geometrical isomer is the standard Advanced trap.',
        ],
        ans: '3 stereoisomers — one trans (achiral) plus a cis enantiomeric pair (d and l).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define structural isomerism and stereoisomerism, and name the four types of structural isomerism shown by coordination compounds.',
            a: '(Structural = different bonds/connectivity; stereo = same bonds, different spatial arrangement; four structural types: ionisation, solvate/hydrate, linkage, coordination).',
          },
          {
            q: '[NEET] Which of the following will show linkage isomerism: [Co(NH<sub>3</sub>)<sub>5</sub>Cl]<sup>2+</sup>, [Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>2</sub>)]<sup>2+</sup>, [Cr(en)<sub>3</sub>]<sup>3+</sup>, [Ni(CO)<sub>4</sub>]?',
            a: '[Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>2</sub>)]<sup>2+</sup> (NO<sub>2</sub><sup>−</sup> is ambidentate).',
          },
          {
            q: '[JEE Main] State the relationship between the pair [Co(NH<sub>3</sub>)<sub>5</sub>(NO<sub>3</sub>)]SO<sub>4</sub> and [Co(NH<sub>3</sub>)<sub>5</sub>(SO<sub>4</sub>)]NO<sub>3</sub>, and explain how a simple test would distinguish them.',
            a: 'Ionisation isomers — the first releases SO<sub>4</sub><sup>2−</sup> (white precipitate with BaCl<sub>2</sub>), the second releases NO<sub>3</sub><sup>−</sup> (no precipitate with BaCl<sub>2</sub>).',
          },
          {
            q: '[JEE Main] How many geometrical isomers are possible for the octahedral complex [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>Br<sub>2</sub>], skeleton Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>?',
            a: 'Five geometrical isomers: the all-trans form, three forms in which only one like pair is trans, and the all-cis form (six stereoisomers; the all-cis form is chiral).',
          },
          {
            q: '[JEE Advanced] For the square planar complex [Pt(NH<sub>3</sub>)(py)(Cl)(Br)] (type Mabcd), determine the number of geometrical isomers and state whether any is optically active.',
            a: 'Three geometrical isomers; none is optically active (square planar Mabcd retains a symmetry plane).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which complex shows <b>geometrical</b> isomerism?',
        opts: [
          { label: 'tetrahedral [Zn(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]', nudge: '<b>(a)</b> tetrahedral geometry never shows geometrical isomerism — all vertices are mutually adjacent. This is the most common trap, because the formula Ma<sub>2</sub>b<sub>2</sub> looks like <b>(b)</b>.' },
          { label: 'square planar [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]', nudge: null },
          { label: '[Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>', nudge: '<b>(c)</b> Ma<sub>6</sub> — only one arrangement.' },
          { label: '[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>', nudge: '<b>(d)</b> CN 2 (linear) — no geometrical isomerism.' },
        ],
        correct: 1,
        solution: 'A square planar Ma<sub>2</sub>b<sub>2</sub> has distinct cis and trans arrangements.',
      },
      {
        t: 'mcq',
        q: 'The pair [Cr(H<sub>2</sub>O)<sub>6</sub>]Cl<sub>3</sub> and [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub>·H<sub>2</sub>O are:',
        opts: [
          { label: 'linkage isomers', nudge: '<b>(a)</b> requires an ambidentate ligand (none here).' },
          { label: 'ionisation isomers', nudge: '<b>(b)</b> ionisation isomerism is the tempting wrong choice because a chloride changes its status — but the defining feature here is the water shifting between ligand and lattice, which is specifically solvate isomerism.' },
          { label: 'solvate (hydrate) isomers', nudge: null },
          { label: 'coordination isomers', nudge: '<b>(d)</b> requires two complex ions.' },
        ],
        correct: 2,
        solution: 'Water has moved from inside the coordination sphere (a ligand) to outside it (water of crystallisation), while a chloride moved the other way.',
      },
      {
        t: 'mcq',
        q: 'Which complex is optically active?',
        opts: [
          { label: 'trans-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>', nudge: '<b>(a)</b> the trans isomer has a mirror plane → inactive. Choosing <b>(a)</b> is the classic cis/trans symmetry slip.' },
          { label: 'cis-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup>', nudge: null },
          { label: '[Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup>', nudge: '<b>(c)</b> is achiral (symmetry planes present).' },
          { label: '[Pt(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>', nudge: '<b>(d)</b> is achiral (symmetry planes present).' },
        ],
        correct: 1,
        solution: 'The cis arrangement has no plane of symmetry → chiral.',
      },
      {
        t: 'mcq',
        q: 'The number of geometrical isomers of [Co(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>] (octahedral, Ma<sub>3</sub>b<sub>3</sub>) is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> forgets that fac and mer are genuinely distinct arrangements.' },
          { label: '2', nudge: null },
          { label: '3', nudge: '<b>(c)</b> over-counts by treating it like Mabcd.' },
          { label: '4', nudge: '<b>(d)</b> over-counts by adding d/l pairs: fac and mer of Ma<sub>3</sub>b<sub>3</sub> each have a symmetry plane, and the question asks only for geometrical isomers.' },
        ],
        correct: 1,
        solution: 'Ma<sub>3</sub>b<sub>3</sub> gives the <b>facial</b> (three like-ligands on one face) and <b>meridional</b> (three around a meridian) isomers — two in total, both optically inactive.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Claiming geometrical isomerism for tetrahedral complexes.</b> An Ma<sub>2</sub>b<sub>2</sub> formula shows cis/trans only if square planar; in a tetrahedron every position is adjacent, so there is no cis/trans. Always check geometry first.',
          '<b>Assuming any didentate complex is optically active.</b> For [M(AA)<sub>2</sub>X<sub>2</sub>], only the cis isomer is chiral; the trans keeps a symmetry plane and is inactive. The presence of a chelate is not by itself proof of chirality.',
          '<b>Confusing ionisation with solvate isomerism.</b> Both involve a swap with the lattice, but ionisation swaps an ionic ligand with a counter ion (different ions in solution), while solvate moves a water ligand out to become water of crystallisation (another group, usually a counter ion, takes its place in the sphere). Identify the species that moved.',
          '<b>Counting geometrical isomers but forgetting the optical layer.</b> When asked for stereoisomers, test each geometrical isomer for chirality and add a d/l pair wherever the structure lacks a symmetry plane.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for “is it optically active?” never start by drawing — first hunt for a plane of symmetry. trans-anything across an axis, Ma<sub>6</sub>, Ma<sub>5</sub>b, fac and mer Ma<sub>3</sub>b<sub>3</sub>, and square planar are almost always inactive; a tris-chelate [M(AA)<sub>3</sub>] or a cis-[M(AA)<sub>2</sub>X<sub>2</sub>] is your active candidate. For isomer counting, lock the geometrical count first, then sprinkle optical pairs on top — that ordering prevents both double-counting and missed enantiomers. And in board answers, never just name cis/trans or d/l — draw the octahedron or square plane and place the ligands explicitly, because the marks live in the diagram, not the label.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two families',
            note: 'structural = different bonds (ionisation · solvate/hydrate · linkage · coordination); stereo = same bonds, different space (geometrical · optical).',
          },
          {
            f: 'Structural quick-ID',
            note: 'ligand ⇄ counter ion → ionisation; H<sub>2</sub>O ligand ⇄ water of crystallisation → solvate; ambidentate bound by a different atom → linkage; ligands shuffled between a complex cation and complex anion → coordination.',
          },
          {
            f: 'Geometrical isomerism',
            note: 'square planar Ma<sub>2</sub>b<sub>2</sub>, Ma<sub>2</sub>bc, Mabcd, M(AB)<sub>2</sub>; octahedral Ma<sub>4</sub>b<sub>2</sub>, Ma<sub>2</sub>b<sub>4</sub>, Ma<sub>4</sub>bc, Ma<sub>3</sub>b<sub>3</sub> (fac/mer), Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>, [M(AA)<sub>2</sub>X<sub>2</sub>], [M(AA)<sub>2</sub>bc]. <b>Never</b> tetrahedral, <b>never</b> CN 2/3, <b>never</b> Ma<sub>6</sub>/Ma<sub>5</sub>b.',
          },
          {
            f: 'Optical isomerism',
            note: 'chiral = no plane/centre of symmetry; [M(AA)<sub>3</sub>] always chiral; cis-[M(AA)<sub>2</sub>X<sub>2</sub>] chiral, trans not; fac & mer of Ma<sub>3</sub>b<sub>3</sub> both inactive ([M(AB)<sub>3</sub>]: both chiral).',
          },
          {
            f: 'd / l / racemic',
            note: 'rotate plane-polarised light right / left; 50:50 racemic mixture is optically inactive.',
          },
        ],
        aids: [
          '“Tetrahedral has no cis” — every corner is a neighbour.',
          '“cis can be chiral, trans cannot” (for [M(AA)<sub>2</sub>X<sub>2</sub>]).',
          '“fac and mer of Ma<sub>3</sub>b<sub>3</sub> are both achiral” ([M(AB)<sub>3</sub>]: both chiral).',
          '“Plane of symmetry kills optical activity” — find the plane before you draw.',
        ],
      },
    ],
  },
];
