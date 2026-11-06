import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 01, Werner's Theory, Ligands & Nomenclature: pp. 197–203 of
 * the Class 12 Chemistry Master Reference, word for word, split at its Sections
 * 1 to 8. No figure and no drawing on these pages. The book's "sub-topic" is
 * "topic" here and its "Sub-02" is "Topic 02". Procedures B and C run their
 * numbered steps on in one item in the book; here each is its own step.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 197–203 ─────────────────────────
  {
    n: '01',
    title: 'Werner’s Theory, Ligands & Nomenclature',
    kalam: 'Two independent measurements, one conclusion — there really are two zones around the metal.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the foundation of the entire chapter and is near-guaranteed to appear. CBSE Boards ask 1–2 mark definitions (ligand, denticity, ambidentate) and frequent 2–3 mark IUPAC naming/formula questions. NEET reliably places 1 question on ligand type or coordination number. JEE Main tests naming and oxidation-number bookkeeping; JEE Advanced builds counter-ion reasoning and flexidentate reasoning (a ligand using fewer donor atoms than it has, such as sulphate binding through one O in the last worked example) on top of it. Get this right and the rest of the chapter has somewhere to stand.',
      },
      {
        t: 'p',
        html: 'Picture a busy Indian wedding. The groom sits at the centre on the stage. Immediately around him is a tight inner circle — close family who are physically attached to the event, seated in a fixed arrangement that does not change through the evening. Far outside, in the parking area, are the well-wishers who came, dropped a gift, and left; they are associated with the wedding but not bound to it, and they drift in and out freely.',
      },
      {
        t: 'p',
        html: 'A coordination compound is built exactly like this. At the centre sits a metal atom or ion. Locked around it, in a fixed number and a definite geometry, is the <b>inner circle of ligands</b>. Floating outside, free to wander off the moment you dissolve the compound in water, are the <b>counter ions</b>. The genius of Alfred Werner (1866–1919, Nobel Prize 1913) was to realise — back in the 1890s — that a metal satisfies two different kinds of demand at once.',
      },
      {
        t: 'p',
        html: 'Werner proposed that a metal has a <b>primary valence</b>, which is normally ionisable — what we now simply call its <b>oxidation number</b> — and is satisfied by negative ions, usually sitting outside the inner circle. Separately, it has a <b>secondary valence</b>, a fixed number of positions immediately around the metal that must be filled, by neutral molecules or negative ions, and which point in definite directions in space, giving the complex its shape. The secondary valence is what we now call the <b>coordination number</b>. An anion inside can serve both at once: in [Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub> the inner chloride counts towards both valences, in [CoCl<sub>3</sub>(NH<sub>3</sub>)<sub>3</sub>] all three chlorides do, and in K<sub>4</sub>[Fe(CN)<sub>6</sub>] two of the six cyanides satisfy iron’s +2, while the K<sup>+</sup> outside only balances the anion’s charge.',
      },
      {
        t: 'p',
        html: 'How did anyone know there were two kinds of attachment? The evidence is beautiful and entirely experimental. Take a series of cobalt–ammonia chlorides of the same metal but different ammonia content. Dissolve each in water, add silver nitrate, and count how many chloride ions instantly fall out as silver chloride. You find that some chlorides precipitate at once while others stubbornly refuse — even though chemically they are “the same” element. The chlorides that precipitate are the free, ionisable counter ions (primary valence). The ones that do not precipitate are locked into the inner circle and are simply not available. As the ammonia content of this series falls from six down to four, the count of chlorides that precipitate instantly drops in lockstep from three to one — a clean, repeatable pattern. Molar conductivity tells the same story: the more free ions a solution releases, the better it conducts. Two independent measurements, one conclusion — there really are two zones around the metal.',
      },
      {
        t: 'p',
        html: 'It helps to pin down what a coordination compound is not. Dissolve potash alum, K<sub>2</sub>SO<sub>4</sub>·Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·24H<sub>2</sub>O, or Mohr’s salt, FeSO<sub>4</sub>·(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>·6H<sub>2</sub>O, in water and it disintegrates completely into all its simple ions — K<sup>+</sup>, Al<sup>3+</sup>, Fe<sup>2+</sup>, NH<sub>4</sub><sup>+</sup>, SO<sub>4</sub><sup>2−</sup> — each giving its ordinary chemical test. These are <b>double salts</b>: tidy crystals in the solid state that lose their separate identity the instant they dissolve. A genuine <b>coordination compound</b> such as potassium ferrocyanide, K<sub>4</sub>[Fe(CN)<sub>6</sub>], refuses to do this — in solution it releases K<sup>+</sup> but keeps the [Fe(CN)<sub>6</sub>]<sup>4−</sup> unit intact, so it gives no free Fe<sup>2+</sup> and no free CN<sup>−</sup> test. That surviving inner unit is exactly the coordination sphere earning its keep; the difference between “falls apart into everything” and “keeps a piece together” is the difference between a double salt and a complex.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the square bracket in a formula like K<sub>4</sub>[Fe(CN)<sub>6</sub>] is a fence. Whatever is inside the fence is the coordination sphere — bonded, directional, and it travels as one unit. Whatever is written outside is a counter ion — ionisable and on its own in solution. The instant you can “see” that fence, half of coordination chemistry stops being memorisation and becomes bookkeeping.',
      },
      {
        t: 'p',
        html: 'The pieces inside the fence are <b>ligands</b> — ions or molecules that donate a pair of electrons, usually a lone pair, to the metal. In Lewis terms the ligand is the <b>base</b> (electron-pair donor) and the central metal ion is the <b>acid</b> (electron-pair acceptor). Transition metals are especially good acceptors because they have low-lying vacant d-orbitals waiting to receive those pairs; they are not the only acceptors, as Zn<sup>2+</sup> (d<sup>10</sup>) and Al<sup>3+</sup> in the practice below show.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> This whole picture has boundaries worth stating early:<br>• At this level a species can be a ligand only if it actually has a lone pair to donate. NH<sub>4</sub><sup>+</sup> cannot be a ligand — nitrogen’s lone pair is already used up holding the fourth hydrogen. (Beyond this level, a π bond can donate too: ethene in Zeise’s salt, [PtCl<sub>3</sub>(C<sub>2</sub>H<sub>4</sub>)]<sup>−</sup>.)<br>• Coordination number counts <b>σ (sigma) donor atoms only</b>. If a ligand also forms a π bond back to the metal, that π interaction is not counted toward the coordination number.<br>• Werner’s primary/secondary valence model brilliantly predicts how many ions ionise and the shape, but it says nothing about why a particular geometry is chosen or why complexes are coloured or magnetic — that needs bonding theories (Valence Bond and Crystal Field), which come in later topics.',
      },

      { t: 'part', title: 'Key terms, relations and conventions' },
      {
        t: 'p',
        html: 'The genuine quantitative tools here are the two relations below, plus precise definitions.',
      },
      { t: 'p', html: '<b>Core definitions</b>' },
      {
        t: 'def',
        term: 'Coordination entity',
        html: 'a central metal atom/ion bonded to a fixed number of ions or molecules, e.g. [CoCl<sub>3</sub>(NH<sub>3</sub>)<sub>3</sub>].',
      },
      {
        t: 'def',
        term: 'Central atom/ion',
        html: 'the atom/ion to which ligands are bound in a definite geometry; acts as a <b>Lewis acid</b>.',
      },
      {
        t: 'def',
        term: 'Ligand',
        html: 'an ion/molecule bound to the central atom; a <b>Lewis base</b> that donates through a <b>donor atom</b>.',
      },
      {
        t: 'def',
        term: 'Denticity',
        html: 'the number of donor atoms a single ligand uses to bind one metal.<br>• <b>Unidentate (monodentate)</b> — one donor atom: Cl<sup>−</sup>, H<sub>2</sub>O, NH<sub>3</sub>, CN<sup>−</sup>.<br>• <b>Didentate (bidentate)</b> — two donor atoms: ethane-1,2-diamine (en), oxalate (C<sub>2</sub>O<sub>4</sub><sup>2−</sup>), glycinate.<br>• <b>Polydentate</b> — several: diethylenetriamine (dien, 3); triethylenetetramine (trien, 4); <b>EDTA<sup>4−</sup></b> is hexadentate (2 N + 4 O donor atoms).<br>• <b>Ambidentate</b> — has two <b>different</b> possible donor atoms but binds a given metal through only one at a time: NO<sub>2</sub><sup>−</sup> (through N = nitrito-N, older “nitro”; through O = nitrito-O; current IUPAC writes nitrito-κN, nitrito-κO); SCN<sup>−</sup> (through S = thiocyanato-S; through N = thiocyanato-N, older “isothiocyanato”). A bridging SCN<sup>−</sup> between two metals, M–SCN–M′, uses one end per metal.',
      },
      {
        t: 'def',
        term: 'Chelate ligand',
        html: 'a di-/polydentate ligand that grips the metal at two or more points, closing a ring (the word comes from the Greek chele, a crab’s claw). Such complexes are <b>more stable</b> than comparable ones built from separate unidentate ligands — the <b>chelate effect</b> — and <b>five- and six-membered rings are the most stable</b>. This is precisely why ethane-1,2-diamine (which closes a five-membered ring with the metal) and oxalate are such effective chelators, while a ligand that would have to close a three- or four-membered ring chelates poorly. (The quantitative comparison of stabilities belongs to a later topic; here only the qualitative rule is needed.)',
      },
      {
        t: 'def',
        term: 'Coordination number (CN)',
        html: 'number of σ-donor atoms directly bonded to the metal. Common values: 2, 4, 6.',
      },
      {
        t: 'def',
        term: 'Coordination sphere',
        html: 'the central atom + attached ligands, written inside square brackets; ionisable groups written outside are <b>counter ions</b>.',
      },
      {
        t: 'def',
        term: 'Coordination polyhedron',
        html: 'the spatial arrangement of donor atoms. The commonest are <b>octahedral</b> (CN 6, e.g. [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>), <b>tetrahedral</b> and <b>square planar</b> (both CN 4 — e.g. [Ni(CO)<sub>4</sub>] is tetrahedral while [PtCl<sub>4</sub>]<sup>2−</sup> is square planar), and <b>linear</b> (CN 2). Note that one coordination number can give more than one shape, so geometry must be stated in its own right, not simply read off from the CN.',
      },
      {
        t: 'def',
        term: 'Oxidation number (ON) of the central atom',
        html: 'the charge the metal would carry if every ligand were removed with its shared electron pair; written as a Roman numeral, e.g. Cu(I).',
      },
      {
        t: 'def',
        term: 'Homoleptic complex',
        html: 'metal bound to only one kind of donor group, e.g. [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>. <b>Heteroleptic:</b> more than one kind, e.g. [Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]<sup>+</sup>.',
      },
      {
        t: 'formula',
        kicker: 'Relation 1 — charge balance / oxidation number',
        main: '(charge on complex ion) = (ON of central metal) + ∑(charges on ligands)',
        legend: ['ON = oxidation number of the central atom', '∑ = sum over all the ligands'],
        note: null,
      },
      {
        t: 'p',
        html: 'Rearranged, this is your everyday tool for finding the metal’s oxidation state.',
      },
      {
        t: 'formula',
        kicker: 'Relation 2 — coordination number',
        main: 'CN = ∑(number of ligands × denticity of each)',
        legend: ['CN = coordination number', '∑ = sum over all the kinds of ligand'],
        note: null,
      },
      {
        t: 'p',
        html: 'So two oxalate ions (each didentate) contribute 2 × 2 = 4 to the CN, not 2.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'No algebraic derivation exists for this topic; what you need are four clean procedures. Each is given with the reasoning, not just the rule.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Find the oxidation number of the central metal',
        steps: [
          'Identify what is inside the bracket (coordination sphere) and what is the counter ion outside. <b>Why:</b> only the inside contributes to the metal’s ON via shared pairs; the counter ion fixes the total charge on the complex ion.',
          'Assign each ligand its known charge (neutral ligands like NH<sub>3</sub>, H<sub>2</sub>O, CO contribute 0; anionic ligands like Cl<sup>−</sup>, CN<sup>−</sup>, C<sub>2</sub>O<sub>4</sub><sup>2−</sup> contribute their charge).',
          'Apply Relation 1 and solve for the metal. <b>Why:</b> the complex ion’s overall charge is just an algebraic sum, so the metal’s ON is whatever makes the books balance.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Write the formula from a name',
        steps: [
          'Central atom symbol first.',
          'Ligands next, <b>alphabetically</b> by the first letter of each ligand’s formula or abbreviation (current IUPAC ignores charge; the older convention listed anionic → neutral → cationic). So the strict form is [CoCl(NH<sub>3</sub>)<sub>5</sub>]<sup>2+</sup>, Cl before N. Many books, exam papers, NCERT’s own pages and this chapter still write neutral ligands first, [Co(NH<sub>3</sub>)<sub>5</sub>Cl]<sup>2+</sup>; both mean the same complex. Asked to write a formula from a name, use the alphabetical order; reading one, do not let the order throw you. (A name sorts by the ligand’s name, a formula by its symbol, so the two orders can differ: ammine before chlorido, but Cl before NH<sub>3</sub>.)',
          'Enclose the whole entity in [ ]; put polyatomic ligands and abbreviations in ( ).',
          'No spaces inside the sphere.',
          'Write any net charge as a right superscript outside the bracket. <b>Why:</b> a single agreed order makes a formula unambiguous, which is the entire point of nomenclature.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — Write the IUPAC name from a formula',
        steps: [
          '<b>Cation first</b>, anion second — whether or not the complex is the cation.',
          'Within the complex, name <b>ligands alphabetically before the metal</b> (this reverses the formula-writing order).',
          'Anionic ligand names end in <b>-o</b> (chlorido, cyanido, oxalato); key neutral ligands have special names — <b>aqua</b> (H<sub>2</sub>O), <b>ammine</b> (NH<sub>3</sub>), <b>carbonyl</b> (CO), <b>nitrosyl</b> (NO).',
          'Use <b>di, tri, tetra</b> for simple ligands; switch to <b>bis, tris, tetrakis</b> when the ligand name already contains a multiplier or is itself complex (e.g. bis(ethane-1,2-diamine)).',
          'State the metal’s oxidation state as a Roman numeral in parentheses.',
          'If the complex ion is an <b>anion</b>, the metal name takes the suffix <b>-ate</b> (-ium drops: chromium → chromate, aluminium → aluminate), and sometimes a Latin stem. <b>Why:</b> alphabetical ligand order plus the -ate marker lets a reader reconstruct charge and connectivity from the name alone.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure D — Classify a ligand’s denticity.</b> Count the donor atoms that can simultaneously reach the metal. One → unidentate. Two → didentate. Two different donor atoms but only one used at a time → <b>ambidentate</b> (do not confuse with didentate). Several, wrapping into a ring → chelating/polydentate. <b>Why:</b> denticity feeds straight into the CN count (Relation 2) and into stability arguments.',
      },
      {
        t: 'p',
        html: '<b>Latin / special metal stems for anionic complexes (memorise):</b> iron → <b>ferrate</b>, copper → <b>cuprate</b>, silver → <b>argentate</b>, lead → <b>plumbate</b>, tin → <b>stannate</b>, gold → <b>aurate</b>.',
      },
      {
        t: 'p',
        html: '<b>Procedure C in one line:</b> for K<sub>3</sub>[Fe(CN)<sub>6</sub>] — cation potassium first; six cyanido ligands → “hexacyanido”; complex ion is an anion so iron takes its Latin stem and the -ate suffix; Fe is +3 (since <i>x</i> + 6(−1) = −3). Reading off: <b>potassium hexacyanidoferrate(III)</b>. Every rule that applies fired once.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Name the compound [Cr(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]Cl, and state the oxidation number and coordination number of chromium.',
        steps: [
          '<b>Given:</b> complex with 4 ammine + 2 chlorido inside the sphere, one chloride outside.',
          'Counter ion outside = 1 Cl<sup>−</sup>, so the complex ion carries charge +1.',
          'Apply Relation 1: <i>x</i> + 4(0) + 2(−1) = +1 ⇒ <i>x</i> − 2 = +1 ⇒ <i>x</i> = +3.',
          'CN = 4 + 2 = 6 (all unidentate).',
          'Naming (Procedure C): ligands alphabetically — <b>a</b>mmine before <b>c</b>hlorido; metal is in a cation so named as the element with Roman numeral.',
        ],
        ans: 'Tetraammine\u200bdichlorido\u200bchromium(III) chloride.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A cobalt(III) chloride–ammonia solid has composition CoCl<sub>3</sub>·5NH<sub>3</sub>. When 1 mol is treated with excess AgNO<sub>3</sub>, exactly 2 mol of AgCl precipitate. Write its coordination formula and give the coordination number.',
        steps: [
          '<b>Speed logic:</b> moles of AgCl = moles of ionisable chloride = chloride sitting outside the bracket. Here that is 2.',
          'So 2 Cl<sup>−</sup> are counter ions; the remaining 1 Cl<sup>−</sup> plus all 5 NH<sub>3</sub> are inside.',
          '<b>Trap to avoid:</b> the lazy reflex is “the formula has 3 Cl, so 3 mol AgCl.” Wrong — only the outside chlorides ionise. Equally, students forget the one chloride that is inside and report CN = 5. Read the precipitate count first; it tells you the fence position instantly.',
        ],
        ans: '[Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub>; CN = 5 + 1 = 6.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (denticity + oxidation number + anionic naming)',
        q: 'Determine the coordination number and oxidation state of cobalt in K[Co(en)(C<sub>2</sub>O<sub>4</sub>)<sub>2</sub>], and write its IUPAC name.',
        steps: [
          'Ligands inside: one <b>en</b> (neutral, didentate) and two <b>oxalate</b> ions (−2 each, didentate).',
          'One K<sup>+</sup> outside, so the complex ion is −1.',
          'ON of Co (Relation 1): <i>x</i> + (0) + 2(−2) = −1 ⇒ <i>x</i> − 4 = −1 ⇒ <i>x</i> = +3.',
          'CN (Relation 2): en contributes 1 × 2 = 2; oxalate contributes 2 × 2 = 4; total = 6.',
          'Naming: anionic complex → metal becomes <b>cobaltate(III)</b>; ligands alphabetical — ethane-1,2-diamine (<b>e</b>) before oxalato (<b>o</b>); two oxalato → <b>di</b>oxalato (simple multiplier, alphabetised under “o”).',
        ],
        ans: 'Potassium (ethane-1,2-diamine)\u200bdioxalato\u200bcobaltate(III).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (counter-ion reasoning)',
        q: 'Two crystalline solids A and B share the composition Cr(H<sub>2</sub>O)<sub>5</sub>(SO<sub>4</sub>)Br. With AgNO<sub>3</sub>: A gives a pale-yellow precipitate, B gives none. With BaCl<sub>2</sub>: A gives no precipitate, B gives a white one. Assign the coordination formula, oxidation number and CN for each, reasoning from Werner’s primary/secondary valence.',
        steps: [
          'A pale-yellow precipitate with AgNO<sub>3</sub> is <b>AgBr</b> ⇒ in A, <b>bromide is the ionisable counter ion</b> (primary valence), so sulphate must be locked inside the coordination sphere.',
          '<b>A:</b> [Cr(H<sub>2</sub>O)<sub>5</sub>(SO<sub>4</sub>)]Br. Complex ion charge = +1 (one Br<sup>−</sup> outside). ON: <i>x</i> + 5(0) + (−2) = +1 ⇒ <i>x</i> = +3. CN = 5 + 1 = 6 (all five waters coordinated; sulphate unidentate here).',
          'A white precipitate with BaCl<sub>2</sub> is <b>BaSO<sub>4</sub></b> ⇒ in B, <b>sulphate is the ionisable counter ion</b>, so bromide is coordinated inside.',
          '<b>B:</b> [Cr(H<sub>2</sub>O)<sub>5</sub>Br]SO<sub>4</sub>. Complex ion charge = +2 (one SO<sub>4</sub><sup>2−</sup> outside). ON: <i>x</i> + 5(0) + (−1) = +2 ⇒ <i>x</i> = +3. CN = 5 + 1 = 6.',
          '<b>Conclusion:</b> both are chromium(III), CN 6 — identical composition, identical metal state, yet they precipitate different ions because a different group occupies the inner sphere. This is pure Werner: what ionises depends on which side of the fence it sits. (The formal name for the relationship between A and B — sharing a formula but swapping a coordinated group with a counter ion — is introduced in Topic 02; here we deduced it from first principles using only counter-ion logic.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the terms unidentate, didentate, and ambidentate ligand, giving one example of each.',
            a: 'Unidentate: binds through one donor atom, e.g. NH<sub>3</sub>. Didentate: binds through two donor atoms at once, e.g. ethane-1,2-diamine (en). Ambidentate: has two different possible donor atoms and binds a given metal through one of them, e.g. NO<sub>2</sub><sup>−</sup> (N or O).',
          },
          {
            q: '[NEET] A solid PtCl<sub>4</sub>·2NH<sub>3</sub> gives no precipitate with AgNO<sub>3</sub> and is a non-electrolyte. Write its coordination formula and the coordination number of platinum.',
            a: '[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>4</sub>], CN = 6.',
          },
          {
            q: '[JEE Main] Find the oxidation number and coordination number of the central metal in (i) [Ni(en)<sub>3</sub>]<sup>2+</sup> and (ii) Na<sub>3</sub>[Al(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>].',
            a: '(i) Ni = +2, CN = 6; (ii) Al = +3, CN = 6.',
          },
          {
            q: '[JEE Main] Write the IUPAC name of (i) [Co(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]Cl<sub>3</sub> and (ii) K<sub>2</sub>[Zn(OH)<sub>4</sub>].',
            a: '(i) tetraammine\u200bdiaqua\u200bcobalt(III) chloride; (ii) potassium tetrahydroxidozincate(II).',
          },
          {
            q: '[JEE Advanced] EDTA<sup>4−</sup> usually binds as a hexadentate ligand. In a complex [M(EDTA)]<sup>−</sup> where EDTA is fully deprotonated and behaves hexadentate, deduce the oxidation number and coordination number of M, and explain why, if M is limited to coordination number 6, no additional water can enter the coordination sphere.',
            a: 'M = +3, CN = 6; EDTA already occupies all six positions, so the metal’s secondary valence is fully satisfied — no vacancy remains for water. (This holds for ions limited to CN 6, such as Co<sup>3+</sup>; a larger ion can go further: [Fe(EDTA)(H<sub>2</sub>O)]<sup>−</sup> is seven-coordinate.)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The coordination number of the central metal in [Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> is:',
        opts: [
          { label: '3', nudge: '<b>(a)</b> 3 — the classic error of counting ligands instead of donor atoms; tempting because you see three oxalate units.' },
          { label: '4', nudge: '<b>(b)</b> 4 — random recall of “the common CN is 4”; ignores the actual count.' },
          { label: '6', nudge: null },
          { label: '9', nudge: '<b>(d)</b> 9 — multiplying 3 × 3 by misreading oxalate as tridentate.' },
        ],
        correct: 2,
        solution: 'Oxalate is didentate, so three oxalates supply 3 × 2 = 6 donor atoms.',
      },
      {
        t: 'mcq',
        q: 'Which of the following is an <b>ambidentate</b> ligand?',
        opts: [
          { label: 'ethane-1,2-diamine', nudge: '<b>(a)</b> is didentate/chelating — the standard trap is confusing “two donor atoms used together” (didentate) with “two different donor atoms used one at a time” (ambidentate). en uses both its donor atoms simultaneously, so it is not ambidentate.' },
          { label: 'oxalate', nudge: '<b>(b)</b> is didentate/chelating — the standard trap is confusing “two donor atoms used together” (didentate) with “two different donor atoms used one at a time” (ambidentate). Oxalate uses both its donor atoms simultaneously, so it is not ambidentate.' },
          { label: 'thiocyanate SCN<sup>−</sup>', nudge: null },
          { label: 'ammine', nudge: '<b>(d)</b> ammine is unidentate (single N donor).' },
        ],
        correct: 2,
        solution: 'SCN<sup>−</sup> has two different donor atoms (S and N) and binds through one at a time.',
      },
      {
        t: 'mcq',
        q: 'The correctly written formula for <b>potassium tetracyanidonickelate(II)</b> is:',
        opts: [
          { label: 'K<sub>2</sub>[Ni(CN)<sub>4</sub>]', nudge: null },
          { label: '[Ni(CN)<sub>4</sub>]K<sub>2</sub>', nudge: '<b>(b)</b> puts the cation after the complex — violates “cation first.”' },
          { label: 'K<sub>2</sub>[NiC<sub>4</sub>N<sub>4</sub>]', nudge: '<b>(c)</b> breaks the cyanide group into loose atoms.' },
          { label: 'Ni[K<sub>2</sub>(CN)<sub>4</sub>]', nudge: '<b>(d)</b> places potassium inside the bracket, treating the counter ion as a ligand.' },
        ],
        correct: 0,
        solution: 'Cation written first; coordination sphere in brackets; cyanide as (CN). Ni is +2, four CN<sup>−</sup> give −4, net −2, balanced by 2K<sup>+</sup>.',
      },
      {
        t: 'mcq',
        q: 'For [Cr(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub>, the primary valence and secondary valence of chromium are respectively:',
        opts: [
          { label: '3 and 6', nudge: null },
          { label: '6 and 3', nudge: '<b>(b)</b> swaps the two — the most common slip.' },
          { label: '3 and 3', nudge: '<b>(c)</b> comes from forcing both valences to be equal, which is not how Werner’s model works.' },
          { label: '6 and 6', nudge: '<b>(d)</b> comes from forcing both valences to be equal, which is not how Werner’s model works.' },
        ],
        correct: 0,
        solution: 'Primary valence = ionisable charge = oxidation number = +3 (three Cl<sup>−</sup> counter ions). Secondary valence = coordination number = 6 (six ammine donors).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Counting ligands, not donor atoms, for CN.</b> With chelating ligands (en, oxalate, EDTA) you must multiply by denticity. Three oxalates give CN 6, not 3.',
          '<b>Letting counter ions or π bonds into the CN.</b> Only σ-donor atoms inside the bracket count. The chloride written outside the bracket contributes to oxidation number, never to CN.',
          '<b>Confusing ambidentate with didentate.</b> Ambidentate (NO<sub>2</sub><sup>−</sup>, SCN<sup>−</sup>) offers a choice of donor atom and uses one; didentate (en, ox) uses both at once.',
          '<b>Naming slips:</b> alphabetising by the multiplier (write “diaqua” but alphabetise under “a” for aqua), forgetting <b>bis/tris</b> for complex ligand names, and forgetting the <b>-ate</b> suffix (and Latin stems like ferrate, cuprate, argentate, plumbate, stannate) for anionic complexes.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for any “AgNO<sub>3</sub> → <i>n</i> mol AgCl” problem, do not write structures first. The number of moles of precipitate equals the number of ionisable chlorides sitting outside the bracket — read that number, place those ions outside, and everything else (plus the metal) goes inside. (The exception is water of crystallisation, written after a dot, as in [Cr(H<sub>2</sub>O)<sub>5</sub>Cl]Cl<sub>2</sub>·H<sub>2</sub>O in Topic 02.) One line of reasoning replaces a paragraph of guessing. A fast sanity check on any oxidation number: rebuild the complex-ion charge from your answer; if it doesn’t match the counter-ion charge, you dropped a sign on a ligand.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'The fence',
            note: 'square bracket separates the <b>coordination sphere</b> (bonded, directional, travels as one unit) from <b>counter ions</b> (ionisable, free in solution).',
          },
          {
            f: 'Werner in modern words',
            note: 'primary valence = <b>oxidation number</b> (normally ionisable, satisfied by negative ions: counter ions, or anions inside the sphere); secondary valence = <b>coordination number</b> (fixed, directional, sets geometry; satisfied by neutral molecules or anions).',
          },
          {
            f: 'Charge balance',
            note: '(complex ion charge) = (metal ON) + ∑(ligand charges).',
          },
          {
            f: 'Coordination number',
            note: 'CN = ∑(no. of ligands × denticity) — count donor atoms, not ligands.',
          },
          {
            f: 'Ligand types',
            note: 'unidentate (1) · didentate (2, e.g. en, ox) · polydentate (EDTA = hexadentate) · <b>ambidentate</b> = two different donor atoms, one used at a time (NO<sub>2</sub><sup>−</sup>, SCN<sup>−</sup>).',
          },
          {
            f: 'Naming order',
            note: 'write central-atom-first, ligands alphabetical by symbol (many books print neutral ligands first); name cation-first, ligands alphabetical before metal; anionic ligands → <b>-o</b>; anionic complex → metal <b>-ate</b>.',
          },
        ],
        aids: [
          '“Count atoms, not arms” — CN is donor atoms, so each chelate arm is counted separately.',
          '“Ambi = either donor” — an ambidentate ligand can attach through either of two different atoms, one at a time: NO<sub>2</sub><sup>−</sup> (N or O), SCN<sup>−</sup> (S or N).',
          '<b>Latin anion stems:</b> <b>Fe</b>rrate, <b>Cu</b>prate, <b>Ag</b> → argentate, <b>Pb</b> → plumbate, <b>Sn</b> → stannate and <b>Au</b> → aurate (“the six that switch languages when they go negative”).',
          '“AgCl tells you the outside; the metal lives inside.”',
        ],
      },
    ],
  },
];
