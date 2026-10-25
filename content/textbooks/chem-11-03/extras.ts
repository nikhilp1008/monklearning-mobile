import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional Topics A to D, word for word from the Class 11
 * Chemistry Master Reference: the shared opening of "Chapter 3: Classification
 * of Elements and Periodicity in Properties — Additional Topics" (p. 151, set
 * at the head of Additional topic A's Introduction), then A The Fourth Kind of
 * Oxide (pp. 151–152), B Electron Gain Enthalpy: The Sign Discipline
 * (pp. 153–155; its practice answers run onto the top of p. 155), C Reading
 * Ionisation Data Across Elements (pp. 155–157) and D, the book's "Addendum
 * P — What JEE and NEET Actually Ask" (pp. 157–162), kept as the last
 * Additional topic by Nikhil's decision. Each addendum prints its own practice
 * problems and answers, which are its Practice part; D's graded practice set
 * (P1 to P11) is split at the book's Level headings. These pages print no
 * drawings: A's classification, C.1's data and D's distribution are tables
 * (C.1's table sits inside a worked example, so its rows are written as lines
 * of the question). Orbital and subshell labels are upright (NCERT), though
 * the book sets them in italic. The book's thin space between a coefficient
 * and its formula ("2 NaOH") is kept.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 151–152 ─────────────────────────
  {
    n: 'A',
    title: 'The Fourth Kind of Oxide: Neutral Oxides and Counting Questions',
    extra: true,
    kalam: 'Neutral oxides have no acidic or basic properties.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers the table’s history and IUPAC nomenclature, the full trend machinery (radius, ionisation enthalpy, electron gain enthalpy, electronegativity) with its celebrated reversals, chemical periodicity with the diagonal relationship, and the block-placement procedures. Three examinable patterns still sit outside it. Addendum A completes the oxide story: the chapter teaches basic/amphoteric/acidic but never names the <b>neutral oxides</b> (CO, NO, N<sub>2</sub>O) — yet NTA’s own 2022 paper asks you to count amphoteric oxides from a list that contains two neutral ones. Addendum B fixes the <b>sign discipline of electron gain enthalpy</b> — which species have positive values, why the second electron gain is always endothermic, and how to count exothermic additions — the statement items that exams build on this topic live here. Addendum C extends the chapter’s successive-IE “jump” idea <b>across elements</b>: why the second IE of an alkali metal dwarfs that of its alkaline-earth neighbour, and how IE/EGE data tables are read to identify elements. Additional topic D maps previous-year JEE and NEET questions onto the chapter.',
      },
      {
        t: 'p',
        html: 'The chapter’s oxide progression runs basic → amphoteric → acidic across a period. NCERT’s full sentence, however, has a fourth category: oxides of elements in the centre are “amphoteric (e.g., Al<sub>2</sub>O<sub>3</sub>, As<sub>2</sub>O<sub>3</sub>) <b>or neutral (e.g., CO, NO,</b> N<sub>2</sub>O<b>)</b>” — neutral oxides have no acidic or basic properties. Exams exploit the omission by mixing neutral oxides into classification and counting questions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'table',
        title: 'The complete classification',
        head: ['Class', 'Behaviour with acid / base', 'Examples'],
        rows: [
          ['Basic', 'react with acids only', 'Na<sub>2</sub>O, MgO, CaO'],
          ['Acidic', 'react with bases only', 'Cl<sub>2</sub>O<sub>7</sub>, SO<sub>3</sub>, CO<sub>2</sub>'],
          ['Amphoteric', 'react with both', 'Al<sub>2</sub>O<sub>3</sub>, As<sub>2</sub>O<sub>3</sub>, ZnO, BeO'],
          ['Neutral', 'react with neither', 'CO, NO, N<sub>2</sub>O'],
        ],
      },
      {
        t: 'p',
        html: '<b>Memory hooks.</b> The neutral trio are all low-oxidation-state non-metal oxides — carbon monoxide, nitric oxide, nitrous oxide. Amphoteric oxides belong to Be, Al and a few other metals (for example Zn), or to metalloids themselves (As). Basic oxides come from the left of the table, acidic from the right — the chapter’s master arrow.',
      },
      {
        t: 'p',
        html: '<b>Quick tests the exams assume.</b> Na<sub>2</sub>O + H<sub>2</sub>O → 2 NaOH (strong base — basic oxide); Cl<sub>2</sub>O<sub>7</sub> + H<sub>2</sub>O → 2 HClO<sub>4</sub> (strong acid — acidic oxide). An amphoteric oxide shows both faces: Al<sub>2</sub>O<sub>3</sub> + 6 HCl → 2 AlCl<sub>3</sub> + 3 H<sub>2</sub>O and Al<sub>2</sub>O<sub>3</sub> + 2 NaOH → 2 NaAlO<sub>2</sub> + H<sub>2</sub>O. A neutral oxide does none of these.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NTA JEE Main 2022 — Counting amphoteric oxides',
        q: 'Given the oxides Na<sub>2</sub>O, As<sub>2</sub>O<sub>3</sub>, N<sub>2</sub>O, NO and Cl<sub>2</sub>O<sub>7</sub>, how many are amphoteric?',
        steps: [
          'Classify each: Na<sub>2</sub>O — basic (alkali metal, extreme left). As<sub>2</sub>O<sub>3</sub> — amphoteric (NCERT’s own example; arsenic is a metalloid). N<sub>2</sub>O — neutral. NO — neutral. Cl<sub>2</sub>O<sub>7</sub> — acidic (extreme right, highest oxide of a halogen).',
          'The question is engineered so that students who never learned the neutral class force N<sub>2</sub>O and NO into “amphoteric” and answer 3; students who memorise “only Al<sub>2</sub>O<sub>3</sub> is amphoteric” answer 0. The NCERT list is the whole defence.',
        ],
        ans: 'Exactly one — As<sub>2</sub>O<sub>3</sub>, matching the official NTA key.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Ordering by oxide character',
        q: 'Arrange Na<sub>2</sub>O, MgO, Al<sub>2</sub>O<sub>3</sub>, K<sub>2</sub>O in increasing order of basic character.',
        steps: [
          'Two moves from the master arrow. Across period 3, basic character falls left to right: Na<sub>2</sub>O > MgO > Al<sub>2</sub>O<sub>3</sub> (amphoteric). Down group 1 it rises: K<sub>2</sub>O > Na<sub>2</sub>O.',
          'The chain rule: compare within the period first, then let the group trend promote potassium above sodium.',
        ],
        ans: 'Al<sub>2</sub>O<sub>3</sub> < MgO < Na<sub>2</sub>O < K<sub>2</sub>O — a JEE Main item with this answer.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Show by a reaction with water that Na<sub>2</sub>O is basic and Cl<sub>2</sub>O<sub>7</sub> is acidic.',
            a: 'Na<sub>2</sub>O + H<sub>2</sub>O → 2 NaOH (turns red litmus blue); Cl<sub>2</sub>O<sub>7</sub> + H<sub>2</sub>O → 2 HClO<sub>4</sub> (turns blue litmus red).',
          },
          {
            q: '[NEET] Which of the following is a neutral oxide: (a) CO (b) CO<sub>2</sub> (c) SO<sub>2</sub> (d) CaO?',
            a: '(a) — CO is neutral; CO<sub>2</sub> and SO<sub>2</sub> are acidic, CaO basic.',
          },
          {
            q: '[JEE Main] The most acidic oxide among SnO<sub>2</sub>, PbO<sub>2</sub>, GeO<sub>2</sub>, SiO<sub>2</sub> is (a) SnO<sub>2</sub> (b) PbO<sub>2</sub> (c) GeO<sub>2</sub> (d) SiO<sub>2</sub>.',
            a: '(d) — down group 14 metallic character grows, so oxide acidity falls: SiO<sub>2</sub> > GeO<sub>2</sub> > SnO<sub>2</sub> > PbO<sub>2</sub> in acidic strength.',
          },
          {
            q: '[JEE Advanced] How many of the following oxides are amphoteric: BeO, Al<sub>2</sub>O<sub>3</sub>, CO, ZnO, N<sub>2</sub>O, CaO?',
            a: 'Three — BeO, Al<sub>2</sub>O<sub>3</sub>, ZnO (CO and N<sub>2</sub>O are neutral, CaO basic).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 153–155 ─────────────────────────
  {
    n: 'B',
    title: 'Electron Gain Enthalpy: The Sign Discipline',
    extra: true,
    kalam: 'The second electron gain is always endothermic.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches the EGE trend (more negative across a period, less negative down a group) and the F-versus-Cl anomaly. What it does not drill is the sign bookkeeping: which atoms actually have <b>positive</b> (endothermic) electron gain enthalpies, and why attaching a second electron always costs energy. NEET and JEE Main statement items are built exactly on this.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Rule 1 — Most first electron gains are exothermic.</b> Adding an electron to a neutral atom usually releases energy: Δ<sub>eg</sub><i>H</i> < 0. The halogens top the table (Cl −349, F −328 kJ mol<sup>−1</sup> — NCERT’s values, with Cl more negative than F by the small-shell-repulsion anomaly the chapter explains).',
      },
      {
        t: 'p',
        html: '<b>Rule 2 — Filled and half-filled subshells refuse the electron.</b> Atoms with a completed subshell have positive Δ<sub>eg</sub><i>H</i> — the incoming electron must enter a higher-energy orbital, so energy must be supplied:<br>• <b>Noble gases</b> (<i>n</i>s<sup>2</sup><i>n</i>p<sup>6</sup>): the new electron starts a brand-new shell (<i>n</i> + 1). NCERT’s Table 3.7 values are all positive: He +48, Ne +116, Ar +96 kJ mol<sup>−1</sup>.<br>• <b>Be, Mg</b> (<i>n</i>s<sup>2</sup> filled): the electron must enter the higher-energy <i>n</i>p subshell — positive or near zero, endothermic.<br>• <b>N</b> (2s<sup>2</sup>2p<sup>3</sup>, exactly half-filled): the new electron must pair up inside the stable 2p<sup>3</sup> set — positive (endothermic), in contrast to phosphorus (3p<sup>3</sup> → 3p<sup>4</sup>), whose larger shell absorbs the repulsion and stays exothermic.',
      },
      {
        t: 'p',
        html: '<b>Rule 3 — The second electron gain is always endothermic.</b> O<sup>−</sup>(g) + e<sup>−</sup> → O<sup>2−</sup>(g) requires energy: the incoming electron is repelled by an already negative ion. So Δ<sub>eg</sub><i>H</i><sub>2</sub> > 0 for every element, even though O + e<sup>−</sup> → O<sup>−</sup> releases 141 kJ mol<sup>−1</sup>. Overall O → O<sup>2−</sup> in the gas phase is endothermic; oxide formation is driven by lattice energy, not by the atom’s appetite for a second electron.',
      },
      {
        t: 'p',
        html: '<b>Counting exothermic additions</b> (a favourite exam format): go species by species, apply Rules 1–3, and count. There is no shortcut — but there are only three flags to check: is the atom a noble gas? Does it have a filled <i>n</i>s<sup>2</sup> or half-filled <i>n</i>p<sup>3</sup> subshell? Is the target anion already negative?',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Count the exothermic additions',
        q: 'How many of the following are exothermic? (A) N + e<sup>−</sup> → N<sup>−</sup>; (B) Li + e<sup>−</sup> → Li<sup>−</sup>; (C) Be + e<sup>−</sup> → Be<sup>−</sup>; (D) Mg + e<sup>−</sup> → Mg<sup>−</sup>; (E) B + e<sup>−</sup> → B<sup>−</sup>; (F) O<sup>−</sup> + e<sup>−</sup> → O<sup>2−</sup>; (G) P + e<sup>−</sup> → P<sup>−</sup> (all species gaseous).',
        steps: [
          'Apply the flags:<br>• (A) N: half-filled 2p<sup>3</sup> — endothermic.<br>• (B) Li: 2s<sup>1</sup> → 2s<sup>2</sup>, completes a subshell — exothermic (−60 kJ mol<sup>−1</sup>).<br>• (C) Be: 2s<sup>2</sup> filled, electron forced into 2p — endothermic.<br>• (D) Mg: 3s<sup>2</sup> filled — endothermic.<br>• (E) B: 2p<sup>1</sup> → 2p<sup>2</sup>, ordinary period-2 metalloid side — exothermic.<br>• (F) O<sup>−</sup>: second electron onto an anion — endothermic (Rule 3).<br>• (G) P: 3p<sup>3</sup> → 3p<sup>4</sup> in a roomy shell — exothermic.',
          'The two most-missed flags are N (half-filled, endothermic) and O<sup>−</sup> (Rule 3).',
        ],
        ans: 'Three — (B), (E), (G), giving 3 as the answer.',
      },
      {
        t: 'ex',
        tag: 'JEE Main assertion–reason — N versus P',
        q: 'Assertion: the electron gain enthalpy of N is positive while that of P is negative. Reason: nitrogen’s smaller atomic size concentrates electron–electron repulsion, so the additional electron is not accepted easily.',
        steps: [
          'Both parts hold and the reason is the right one. Nitrogen’s 2p<sup>3</sup> half-filled configuration is compact and stable; forcing a fourth electron into a paired 2p orbital of the tiny <i>n</i> = 2 shell costs energy. Phosphorus offers the larger 3p subshell, where the incoming electron pairs with much milder repulsion, so P releases energy (Δ<sub>eg</sub><i>H</i> < 0).',
          'The alternative “both true but unrelated” fails because size and subshell stability are precisely the mechanism.',
        ],
        ans: 'Both true, and the reason correctly explains the assertion — a JEE Main 2025 item.',
      },
      {
        t: 'ex',
        tag: 'CBSE/NCERT exercise — The second electron gain of oxygen',
        q: 'Would you expect the second electron gain enthalpy of oxygen to be positive, more negative, or less negative than the first? Justify.',
        steps: [
          'The first gain (O + e<sup>−</sup> → O<sup>−</sup>, −141 kJ mol<sup>−1</sup>) is exothermic because the neutral atom attracts the electron. The second gain starts from an anion: O<sup>−</sup> + e<sup>−</sup> → O<sup>2−</sup> pits the incoming electron against the Coulomb repulsion of an already negative species, so energy must be supplied — Δ<sub>eg</sub><i>H</i><sub>2</sub> > 0.',
          '(This is a standard NCERT exercise question, and it is the seed of the lattice-energy story you will meet in ionic bonding.)',
        ],
        ans: 'Positive — always, for every element’s second electron gain.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why do noble gases have large positive electron gain enthalpies?',
            a: 'The added electron must enter the next higher principal shell (<i>n</i> + 1), far from the nucleus and well shielded — an unstable, high-energy configuration, so energy is absorbed, not released (He +48, Ne +116 kJ mol<sup>−1</sup>).',
          },
          {
            q: '[NEET] Which has the most negative electron gain enthalpy: S, Cl, F, P?',
            a: 'Cl — across period 3 the pull strengthens P < S < Cl, and Cl beats F by the small-shell-repulsion anomaly.',
          },
          {
            q: '[JEE Main] Correct order of electron gain enthalpy magnitudes (most exothermic first): (a) O > B > C > N (b) O > C > B > N (c) O > C > N > B (d) O > N > C > B.',
            a: '(b): O (−141) > C (−122) > B (−27) > N (near zero/positive) — a JEE Main item; the trap is ranking N by electronegativity rather than by its half-filled refusal.',
          },
          {
            q: '[JEE Advanced] Overall formation of O<sup>2−</sup>(g) from O(g) is endothermic, yet ionic oxides are common. Resolve the paradox in one sentence, and identify which single step is endothermic.',
            a: 'The lattice energy released when O<sup>2−</sup> packs into the crystal with cations more than repays the gas-phase cost; the endothermic step is O<sup>−</sup> + e<sup>−</sup> → O<sup>2−</sup>.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 155–157 ─────────────────────────
  {
    n: 'C',
    title: 'Reading Ionisation Data Across Elements',
    extra: true,
    kalam: 'The (valence count + 1)-th ionisation enthalpy is the cliff, for any element.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches the successive-IE jump for one element (the jump after <i>n</i> easy electrons means <i>n</i> valence electrons). Two further reading skills appear constantly in exams: comparing a given successive IE <b>between neighbouring elements</b>, and identifying elements from a table of Δ<sub>i</sub><i>H</i><sub>1</sub>, Δ<sub>i</sub><i>H</i><sub>2</sub> and Δ<sub>eg</sub><i>H</i> values.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Cross-element successive-IE comparisons.</b> The golden pair is an alkali metal and the alkaline earth next to it:<br>• Δ<sub>i</sub><i>H</i><sub>1</sub>: Na (3s<sup>1</sup>, loose) < Mg (3s<sup>2</sup>, filled subshell, higher <i>Z</i>) — the normal period trend, with the filled-subshell bonus on top.<br>• Δ<sub>i</sub><i>H</i><sub>2</sub>: Na ≫ Mg. Na<sup>+</sup> is a neon core — the second electron must be torn from a noble-gas configuration — while Mg<sup>+</sup> still holds a loose 3s<sup>1</sup> electron that leaves cheaply.',
      },
      {
        t: 'p',
        html: 'The same logic runs one period down: Δ<sub>i</sub><i>H</i><sub>2</sub> of K exceeds Δ<sub>i</sub><i>H</i><sub>2</sub> of Ca (K<sup>+</sup> is an argon core), even though Δ<sub>i</sub><i>H</i><sub>2</sub>(Ca) > Δ<sub>i</sub><i>H</i><sub>1</sub>(Ca), as always. General rule: <b>the (valence count + 1)-th ionisation enthalpy is the cliff</b>, for any element.',
      },
      {
        t: 'p',
        html: '<b>Isoelectronic ions and IE.</b> For species with the same electron count, more nuclear charge means a tighter grip and a higher ionisation enthalpy — so Cl<sup>−</sup> (18 electrons, <i>Z</i> = 17) is harder to ionise than S<sup>2−</sup> (18 electrons, <i>Z</i> = 16). Among anions, the more negative the ion, the lower its IE.',
      },
      {
        t: 'p',
        html: '<b>Reading a data table</b> (the NCERT data-table pattern). Given Δ<sub>i</sub><i>H</i><sub>1</sub>, Δ<sub>i</sub><i>H</i><sub>2</sub>, Δ<sub>eg</sub><i>H</i> for several elements: the huge Δ<sub>i</sub><i>H</i><sub>2</sub>/Δ<sub>i</sub><i>H</i><sub>1</sub> ratio flags the valence count (ratio ≫ 1 means one valence electron); a positive Δ<sub>eg</sub><i>H</i> flags a noble gas; the most negative Δ<sub>eg</sub><i>H</i> flags the most reactive non-metal (halogen); the smallest Δ<sub>i</sub><i>H</i><sub>1</sub> flags the most reactive metal.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NCERT data-table pattern — Identify the elements',
        q: 'First and second ionisation enthalpies and electron gain enthalpies (all kJ mol<sup>−1</sup>) are given for six elements:<br>• I: Δ<sub>i</sub><i>H</i><sub>1</sub> = 520, Δ<sub>i</sub><i>H</i><sub>2</sub> = 7300, Δ<sub>eg</sub><i>H</i> = −60<br>• II: Δ<sub>i</sub><i>H</i><sub>1</sub> = 419, Δ<sub>i</sub><i>H</i><sub>2</sub> = 3051, Δ<sub>eg</sub><i>H</i> = −48<br>• III: Δ<sub>i</sub><i>H</i><sub>1</sub> = 1681, Δ<sub>i</sub><i>H</i><sub>2</sub> = 3374, Δ<sub>eg</sub><i>H</i> = −328<br>• IV: Δ<sub>i</sub><i>H</i><sub>1</sub> = 1008, Δ<sub>i</sub><i>H</i><sub>2</sub> = 1846, Δ<sub>eg</sub><i>H</i> = −295<br>• V: Δ<sub>i</sub><i>H</i><sub>1</sub> = 2372, Δ<sub>i</sub><i>H</i><sub>2</sub> = 5251, Δ<sub>eg</sub><i>H</i> = +48<br>• VI: Δ<sub>i</sub><i>H</i><sub>1</sub> = 738, Δ<sub>i</sub><i>H</i><sub>2</sub> = 1451, Δ<sub>eg</sub><i>H</i> = −40<br>Identify (a) the least reactive element, (b) the most reactive metal, (c) the most reactive non-metal, (d) the least reactive non-metal, (e) the metal forming a stable binary halide MX<sub>2</sub>.',
        steps: [
          'Read the flags:<br>• V: positive Δ<sub>eg</sub><i>H</i> (+48) and the highest Δ<sub>i</sub><i>H</i><sub>1</sub> — a noble gas (Δ<sub>i</sub><i>H</i><sub>2</sub>/Δ<sub>i</sub><i>H</i><sub>1</sub> = 5251/2372 ≈ 2.2, small, because both electrons come from the same filled 1s shell; the highest Δ<sub>i</sub><i>H</i><sub>1</sub> and the positive Δ<sub>eg</sub><i>H</i> identify the noble gas). (a) = V.<br>• II: smallest Δ<sub>i</sub><i>H</i><sub>1</sub> (419) with the huge jump at Δ<sub>i</sub><i>H</i><sub>2</sub> (3051) — one valence electron, the most reactive metal. (b) = II.<br>• III: most negative Δ<sub>eg</sub><i>H</i> (−328) and a high Δ<sub>i</sub><i>H</i><sub>1</sub> — a halogen, the most reactive non-metal. (c) = III.<br>• IV: non-metallic but milder (Δ<sub>eg</sub><i>H</i> = −295, Δ<sub>i</sub><i>H</i><sub>1</sub> = 1008) — a heavier halogen. (d) = IV.<br>• VI: Δ<sub>i</sub><i>H</i><sub>1</sub> and Δ<sub>i</sub><i>H</i><sub>2</sub> both modest (738, 1451; ratio only about 2) — the second electron still leaves easily, so there are at least two valence electrons: an alkaline earth metal (magnesium) forming MX<sub>2</sub>. (e) = VI. (NCERT’s table prints −40 for magnesium; the measured value is close to zero or slightly positive, as Additional topic B says. Nothing here depends on it.)',
          '(I is the lighter alkali metal; note its Δ<sub>i</sub><i>H</i><sub>2</sub> = 7300 dwarfs VI’s 1451 — the alkali-plus-ion is a noble-gas core, exactly the cross-element rule.)',
          'One table, five deductions — and every deduction is one of the four flags.',
        ],
        ans: '(a) V, (b) II, (c) III, (d) IV, (e) VI.',
      },
      {
        t: 'ex',
        tag: 'JEE Main statement analysis — Successive IEs of K and Ca',
        q: 'True or false: “The 2nd ionisation energy of Ca is greater than its 1st ionisation energy but lower than the 2nd ionisation energy of K.”',
        steps: [
          'Two clauses, both checkable by the rule. Clause 1: Δ<sub>i</sub><i>H</i><sub>2</sub> > Δ<sub>i</sub><i>H</i><sub>1</sub> for Ca — always true, the second electron leaves from a positive ion. Clause 2: K<sup>+</sup> has the argon configuration, so potassium’s second ionisation tears into a noble-gas core (element II’s 3051 kJ mol<sup>−1</sup>, potassium, in the table of worked example 1), while Ca<sup>+</sup> still holds a loose 4s<sup>1</sup> electron — so Δ<sub>i</sub><i>H</i><sub>2</sub>(K) > Δ<sub>i</sub><i>H</i><sub>2</sub>(Ca).',
          '(The item appears inside a multi-statement JEE Main question; the natural reflex “Ca is to the right, so all its IEs exceed K’s” is exactly what it punishes: that reflex works for Δ<sub>i</sub><i>H</i><sub>1</sub> but fails at Δ<sub>i</sub><i>H</i><sub>2</sub>, where shell structure takes over.)',
        ],
        ans: 'True — both clauses hold.',
      },
      {
        t: 'ex',
        tag: 'NEET assertion–reason — IE of isoelectronic anions',
        q: 'Assertion: Cl<sup>−</sup> has lower ionisation energy than S<sup>2−</sup>. Reason: in isoelectronic ions, the greater the negative charge, the lesser the ionisation energy.',
        steps: [
          'Both are isoelectronic (18 electrons, argon-like). Cl<sup>−</sup> has <i>Z</i> = 17 protons gripping the cloud; S<sup>2−</sup> has only 16 and carries twice the extra electron repulsion — so S<sup>2−</sup> lets go of an electron more easily. The assertion (“Cl<sup>−</sup> lower”) is therefore <b>incorrect</b>; the reason (higher negative charge ⇒ lower IE) is <b>correct</b> as a general rule — and indeed predicts S<sup>2−</sup> < Cl<sup>−</sup>.',
          'The designed confusion is between “more protons, tighter hold” (correct) and “negative ion, loosely held” (true only when comparing anions with each other at fixed electron count).',
        ],
        ans: 'A incorrect, R correct.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Explain why Δ<sub>i</sub><i>H</i><sub>2</sub> of sodium is much greater than Δ<sub>i</sub><i>H</i><sub>2</sub> of magnesium, even though Δ<sub>i</sub><i>H</i><sub>1</sub> of magnesium exceeds that of sodium.',
            a: 'Mg’s first electron leaves a filled 3s<sup>2</sup> (stable, higher <i>Z</i>) so Δ<sub>i</sub><i>H</i><sub>1</sub>(Mg) > Δ<sub>i</sub><i>H</i><sub>1</sub>(Na); but Na<sup>+</sup> is the neon core, so sodium’s second electron comes from a noble-gas shell — Δ<sub>i</sub><i>H</i><sub>2</sub>(Na) ≫ Δ<sub>i</sub><i>H</i><sub>2</sub>(Mg), where Mg<sup>+</sup> still has a loose 3s<sup>1</sup> electron.',
          },
          {
            q: '[NEET] Two elements have the configurations I: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup> and II: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>. The correct relation between their first ionisation enthalpies is (a) equal (b) I > II (c) I < II (d) I ≥ 2(II).',
            a: '(b): I is N (2p<sup>3</sup> half-filled, extra stable), II is O (2p<sup>4</sup>, pairing repulsion) — the chapter’s N > O reversal.',
          },
          {
            q: '[JEE Main 2025 pattern] The five successive ionisation enthalpies of an element are 800, 2427, 3658, 25024 and 32824 kJ mol<sup>−1</sup>. Predict its group.',
            a: 'The cliff sits between the third and fourth values (3658 → 25024, roughly sevenfold), so three electrons are “easy”: 3 valence electrons, <b>group 13</b>.',
          },
          {
            q: '[JEE Advanced] Arrange in increasing order of first ionisation enthalpy, with one-line reasons: S<sup>2−</sup>, Cl<sup>−</sup>, Ar, K<sup>+</sup>, Ca<sup>2+</sup>.',
            a: 'All are isoelectronic (18 electrons); IE rises with nuclear charge: S<sup>2−</sup> < Cl<sup>−</sup> < Ar < K<sup>+</sup> < Ca<sup>2+</sup> (<i>Z</i> = 16, 17, 18, 19, 20 — same cloud, ever tighter grip).',
          },
        ],
      },
    ],
  },

  // ───────────── Additional topic D · pp. 157–162 (the book's "Addendum P") ─────────────
  {
    n: 'D',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Previous-year questions on this chapter are dominated by trends.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Previous-year questions on this chapter are dominated by trends. The approximate split:',
      },
      {
        t: 'table',
        title: null,
        head: ['Pile', 'Share of questions', 'Typical face'],
        rows: [
          ['Periodic trends: radius, IE, EGE, EN orders & anomalies', 'about 45%', 'order-the-property, anomaly reasons, successive-IE jumps, isoelectronic comparisons'],
          ['Chemical trends: oxides, oxidation states, diagonal relationship', 'about 25%', 'oxide acidity orders, neutral/amphoteric counting, diagonal pairs and their property statements, group oxidation states'],
          ['History, laws & nomenclature', 'about 15%', 'anomalous pairs (Te–I), Newlands’ failure, Moseley, IUPAC names for <i>Z</i> > 100, eka-elements'],
          ['Position bookkeeping', 'about 8%', 'group/period from <i>Z</i> (including <i>Z</i> = 70, 87, 119), same-group pairs, representative vs transition'],
          ['Other', 'about 7%', '—'],
        ],
      },
      {
        t: 'p',
        html: 'Three patterns stand out. First, <b>trend-ordering with anomalies is the centre of gravity</b> — nearly half the questions — and it recurs at JEE Main sessions from 2021 to 2025 as well as in NEET; the same four anomalies (Be/B, N/O, F/Cl EGE, Ga/Al size) come up again and again. Second, <b>the exams have moved from naming trends to reading data</b>: successive-IE tables (JEE Main 2025’s five-value group-identification item), IE/EGE value tables, and radius percentages between ions. Third, the two NTA 2022 questions we draw on are statement-counting items (count the amphoteric oxides; pick the correct Li/Mg property statements) — counting and multi-statement formats dominate the real paper.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1 — Order the property, flag the anomaly</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> “Increasing order of atomic radii of group-13 elements”, “correct IE order among C, N, O, F”, “which electronegativity order is incorrect”.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Apply the master arrow (across a period: size down, IE up, EN up; down a group: reverse), then run the chapter’s exception flags: Be > B and N > O for IE; Cl > F for EGE; Ga < Al for radius; B > Al < Ga irregularity for group-13 IE. If an option violates an unflagged trend, it is the answer to “incorrect order” questions.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Increasing atomic radii of group 13 (asked in JEE Main more than once):',
        steps: [
          'gallium is smaller than aluminium (its ten new 3d electrons shield poorly), so the order is Ga < Al < In < Tl (option (b) of the Level 2 practice item on group-13 radii). Every other option assumes smooth growth down the group.',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 2 — Successive-IE data: jumps and cross-element cliffs</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Five successive IE values — name the group; or statements comparing Δ<sub>i</sub><i>H</i><sub>2</sub> across Na/Mg, K/Ca, or isoelectronic anions.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Find the multiplicative cliff; the number of values before it is the valence count. For cross-element items, Addendum C’s rule: the (valence + 1)-th IE is the cliff for each element separately.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '800, 2427, 3658, 25024, 32824 kJ mol<sup>−1</sup> (JEE Main 2025):',
        steps: [
          'the cliff is at the fourth value, so three valence electrons, group 13. The first and second worked examples of Additional topic C cover the cross-element forms.',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 3 — EGE sign statements and counts</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Assertion–reason on N (positive) vs P (negative); “how many of these electron additions are exothermic”; “which has the most negative EGE” with F placed beside Cl.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Addendum B’s three flags: noble gas? filled <i>n</i>s<sup>2</sup>/half-filled <i>n</i>p<sup>3</sup>? anion gaining a second electron? Then the F < Cl anomaly for rankings.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The first worked example of Additional topic B is a typical counting item: three exothermic additions (Li, B, P) out of seven.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 4 — Oxide character, including the neutral class</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Order basic character (Al<sub>2</sub>O<sub>3</sub> < MgO < Na<sub>2</sub>O < K<sub>2</sub>O); most acidic of group-14 dioxides (SiO<sub>2</sub>); count amphoteric oxides from a list seeded with neutral ones.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Addendum A’s four-class table. The counting items are pure NCERT-list recall — As<sub>2</sub>O<sub>3</sub> amphoteric; N<sub>2</sub>O, NO neutral.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The first worked example of Additional topic A is the NTA 2022 original: one amphoteric oxide among five.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 5 — History and nomenclature one-liners</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Which pair is anomalous (Te–I); why Newlands failed (pattern broke after calcium); the modern law’s basis (atomic number, Moseley); IUPAC name for <i>Z</i> = 105 (unnilpentium) or <i>Z</i> = 119 (Uue); atomic number from the name (ununbium = 112, ununquadium = 114); eka-aluminium/eka-boron arithmetic.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> The digit roots (nil-un-bi-tri-quad-pent-hex-sept-oct-enn) read left to right, plus -ium; the symbol is the initials. For the history items, the reasons matter more than the names — NEET frames them as “failed primarily because”.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: '<i>Z</i> = 105:',
        steps: [
          'digits 1, 0, 5 → un + nil + pent + ium = <b>unnilpentium</b> (symbol Unp). The distractors test order reversal (“pentnil…”) and wrong roots (“unnilbi…” would be 102, “unbi…” would be 12).',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>Archetype 6 — Diagonal relationship, from pairs to properties</b>' },
      {
        t: 'p',
        html: '<b>Shape.</b> Identify the diagonal pair (Be–Al among same-row/same-column decoys); the configuration of the diagonal partner of a given element; the NTA 2022 property-level item on Li and Mg.',
      },
      {
        t: 'p',
        html: '<b>Approach.</b> Diagonal = down one, right one (Li–Mg, Be–Al, B–Si); the cause is comparable size and charge/radius ratio, which gives both compounds covalent leanings. Hence the property facts: LiCl and MgCl<sub>2</sub> are covalent enough to dissolve in ethanol; LiF’s high lattice enthalpy makes it the least soluble alkali fluoride; Li and Mg oxides do not progress to superoxides with excess oxygen.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'The NTA 2022 item:',
        steps: [
          '“Both LiCl and MgCl<sub>2</sub> are soluble in ethanol” (correct — covalent character) and “LiF is less soluble than other alkali fluorides” (correct) are the right pair; the superoxide and Li<sub>2</sub>O-solubility statements are false.',
        ],
        ans: '(A) and (C) only.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>EGE sign confusion.</b> “More negative” means more exothermic; noble gases are positive; the second electron gain is always positive. Three sign facts, endlessly recombined.',
          '<b>Misattributing the Ga anomaly.</b> The Al/Ga step is poor shielding by the intervening 3d<sup>10</sup> electrons — not the inert pair effect (that governs +1 vs +3 stability lower down) and not lanthanoid contraction (that acts near In/Tl, after the 4f shell). Exam distractors offer both wrong causes.',
          '<b>Reading the IE cliff one step early.</b> The number of valence electrons equals the count of values before the jump, not the jump’s index; then convert to a group (3 valence electrons in the p-block means group 13).',
          '<b>“IE always increases across a period.”</b> False at exactly two period-2 points (Be > B, N > O) and their period-3 echoes (Mg > Al, P > S); statement items rely on you forgetting.',
          '<b>Neutral oxides don’t exist in most students’ tables.</b> CO, NO, N<sub>2</sub>O are neither acidic nor basic — and are not amphoteric either, which is the whole NTA 2022 counting trap.',
          '<b>Electronegativity carries no unit</b>; IE and EGE are kJ mol<sup>−1</sup>. A one-liner exams ask outright.',
          '<b>Isoelectronic logic backwards.</b> Same electrons: higher <i>Z</i> is smaller and holds electrons tighter (higher IE). Among anions, more negative charge means looser hold — S<sup>2−</sup> ionises before Cl<sup>−</sup>.',
          '<b>Diagonal is not the same as neighbour.</b> Same-group (Li–Na) and same-period (Na–Mg) pairs are the standard decoys in every diagonal question.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: '<b>Level 1 — Direct Recall</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Mendeleev reordered which anomalous pair against atomic-weight sequence: (a) Na–K (b) Te–I (c) Li–Na (d) F–Cl?',
            a: '(b). Tellurium (127.6) is heavier than iodine (126.9), yet Te must sit before I to keep I with the halogens — the defect Moseley’s atomic-number law later healed.',
          },
          {
            q: 'The fundamental property organising the modern periodic table is (a) atomic mass (b) atomic number (c) atomic radius (d) atomic volume.',
            a: '(b) — Moseley’s periodic law: properties are a periodic function of atomic number.',
          },
          {
            q: 'The IUPAC symbol of the element with <i>Z</i> = 119 is (a) Uun (b) Nne (c) Uue (d) Une.',
            a: '(c): 1, 1, 9 → un-un-enn → ununennium, symbol Uue.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 2 — Applied Understanding</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'The increasing order of atomic radii of group-13 elements is (a) Al < Ga < In < Tl (b) Ga < Al < In < Tl (c) Al < In < Ga < Tl (d) Al < Ga < Tl < In.',
            a: '(b). Poor 3d<sup>10</sup> shielding contracts Ga below Al; thereafter the group resumes growth.',
          },
          {
            q: 'The property with no unit is (a) ionisation enthalpy (b) electron gain enthalpy (c) electronegativity (d) lattice enthalpy.',
            a: '(c). Electronegativity is a relative, dimensionless scale number; the rest are energies in kJ mol<sup>−1</sup>.',
          },
          {
            q: 'Which set of elements all have electronegativity greater than carbon (2.55): (a) Cl, Br, I, S (b) I, S, P, As (c) Br, I, S, P (d) I, P, As, Si?',
            a: '(a). Read off the revised Pauling values: Cl 3.16, Br 2.96, I 2.66, S 2.58 — all four sit above carbon’s 2.55. Every other set contains at least one member below carbon (P 2.19, As 2.18, Si 1.90). The ladder to memorise: F 3.98 > O 3.44 > Cl 3.16 > N 3.04 > Br 2.96 > I 2.66 > S 2.58 > C 2.55 > H 2.20 ≈ P 2.19 ≈ As 2.18 > B 2.04 > Si 1.90. The trap is assuming electronegativity falls so fast down group 17 that I must be below C — it does not (though on the rounded one-decimal table I and C tie at 2.5).',
          },
          {
            q: 'The number of amphoteric oxides among Na<sub>2</sub>O, As<sub>2</sub>O<sub>3</sub>, N<sub>2</sub>O, NO, Cl<sub>2</sub>O<sub>7</sub> is (a) 0 (b) 1 (c) 2 (d) 3.',
            a: '(b) — only As<sub>2</sub>O<sub>3</sub>; NTA 2022.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 3 — Multi-step Reasoning</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'The successive ionisation enthalpies of an element are 800, 2427, 3658, 25024, 32824 kJ mol<sup>−1</sup>. Predict the group.',
            a: 'The cliff follows the third value (3658 → 25024), so three valence electrons: group 13. (The element is boron — the values are its real data.)',
          },
          {
            q: 'How many of these gaseous additions are exothermic: N + e<sup>−</sup>, Li + e<sup>−</sup>, Be + e<sup>−</sup>, Mg + e<sup>−</sup>, B + e<sup>−</sup>, O<sup>−</sup> + e<sup>−</sup>, P + e<sup>−</sup>?',
            a: 'Three — Li, B and P (the first worked example of Additional topic B). N refuses (half-filled), Be and Mg refuse (filled <i>n</i>s<sup>2</sup>), and O<sup>−</sup> repels the second electron.',
          },
          {
            q: 'An element E has Δ<sub>i</sub><i>H</i><sub>1</sub> = 374 kJ mol<sup>−1</sup> and reacts with elements A, B, C, D whose electron gain enthalpies are −328, −349, −325, −295 kJ mol<sup>−1</sup>. Order the products EA, EB, EC, ED by ionic character.',
            a: 'The EGE values identify A, B, C, D as F, Cl, Br, I. The ionic character of an E–X bond follows the electronegativity difference (and the lattice energy), which is largest for the fluoride: EA > EB > EC > ED, as with CsF > CsCl > CsBr > CsI. A shortcut that ranks only by the magnitude of the electron gain enthalpy (B 349 > A 328 > C 325 > D 295) would give EB > EA > EC > ED, but that merely reflects the F-versus-Cl anomaly in EGE and not the strength of ionic bonding. Use it only if the question explicitly asks you to order by the energy released on electron gain.',
          },
          {
            q: 'Given the oxides SnO<sub>2</sub>, PbO<sub>2</sub>, GeO<sub>2</sub>, SiO<sub>2</sub>, identify the most acidic and justify by trend.',
            a: 'SiO<sub>2</sub>. Down group 14 metallic character rises, so oxide acidity falls; the topmost dioxide is the most acidic.',
          },
        ],
      },

      { t: 'part', title: 'What the Chapter Text Under-Serves' },
      {
        t: 'p',
        html: 'The chapter’s trend machinery is complete, but three exam surfaces are left to the reader: the <b>neutral-oxide class</b> (named in NCERT’s own sentence on oxide character, absent from the chapter, and the pivot of an actual NTA counting question); the <b>sign discipline of electron gain enthalpy</b> (positive values for filled/half-filled subshells and noble gases, the always-endothermic second gain) which exams test almost exclusively as statement items; and the <b>cross-element reading of successive ionisation data</b> (the Na/Mg and K/Ca second-IE cliffs, and full IE/EGE table interpretation of the NCERT-exercise kind), which the chapter’s single-element jump rule does not cover.',
      },
    ],
  },
];
