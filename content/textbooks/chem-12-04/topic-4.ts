import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 04, Capstone Reference: pp. 173–178 of the Class 12 Chemistry
 * Master Reference, word for word, split at its Sections 1 to 8. It has no figure.
 * The book's "subtopics" are "topics" here and its "Sub-01" to "Sub-04" are "Topic 01"
 * to "Topic 04". The two electrode-potential tables keep the book's layout, couples
 * across the top; the app stacks a table on a phone, so they need no reshaping.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 173–178 ─────────────────────────
  {
    n: '04',
    title: 'Capstone Reference — Electrode Potentials, Reactivity, Ion Colours, Series Comparison & Applications',
    kalam: 'A standard electrode potential E° tells you how badly a species “wants” to be reduced.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Pure marks. CBSE Boards routinely ask “why is Cr<sup>2+</sup> reducing but Mn<sup>3+</sup> oxidising,” a 3-mark first-vs-second-vs-third-series comparison, or an applications/catalyst question. NEET loves “identify the coloured/colourless ion” and “which liberates H<sub>2</sub> from acid.” JEE Main/Advanced press on the electrode-potential energy analysis (Δ<sub>a</sub><i>H</i> + Δ<sub>i</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i>).',
      },
      {
        t: 'p',
        html: 'The three earlier topics built the why of the transition metals — variable oxidation states, colour, magnetism, the contraction. This capstone is the reference desk: the hard numbers and side-by-side comparisons a student must have at their fingertips to actually answer exam questions. Three threads tie it together.',
      },
      {
        t: 'p',
        html: '<b>Thread 1 — the electrode potential is a single number that summarises reactivity.</b> A standard electrode potential <i>E</i>° tells you how badly a species “wants” to be reduced. A very negative <i>E</i>°(M<sup>2+</sup>/M) means the metal would rather stay oxidised — it is reactive and a good reducing agent. A positive value (copper) means the metal clings to its electrons — it is “noble.” Think of <i>E</i>° as a cricket batting average for electron-hunger: one number that lets you rank the whole team at a glance.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> When we move from the M<sup>2+</sup>/M couple to the M<sup>3+</sup>/M<sup>2+</sup> couple, we are asking a different question: “given the ion already exists as M<sup>2+</sup>, how willing is it to give up one more electron?” The answer depends largely on the configurations involved. If M<sup>3+</sup> reaches a stable d<sup>3</sup> or d<sup>5</sup>, the ion wants to get there, so M<sup>2+</sup> is easily oxidised (a reducing agent). If forming M<sup>3+</sup> would mean abandoning a stable d<sup>5</sup> in M<sup>2+</sup>, the ion resists — so M<sup>3+</sup> is a hungry oxidiser desperate to fall back. This idea explains Cr, Mn and Fe in the M<sup>3+</sup>/M<sup>2+</sup> table; Co needs a different reason.',
      },
      {
        t: 'p',
        html: '<b>Thread 2 — colour is a fingerprint.</b> Every hydrated 3d ion has a near-signature colour, set by the d–d transitions it can make in its water surroundings, not simply by its unpaired count: Ti<sup>3+</sup> and Cu<sup>2+</sup> each have one unpaired electron, yet one is purple and the other blue. Knowing the table lets you identify an ion or rule out a distractor instantly.',
      },
      {
        t: 'p',
        html: '<b>Thread 3 — the three series are a family with a twist.</b> Going down a group (3d → 4d → 5d) you would expect steady size growth, but the lanthanoid contraction (Topic 03) flattens the 4d→5d step, making the second and third series uncannily alike while the first series stands apart.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b> Electrode-potential reasoning assumes aqueous, standard conditions; <i>E</i>° values carry irregularities (from competing atomisation, ionisation and hydration energies) and should be read as trends, not smooth curves. Colours are for the common hydrated (aqua) ions — the same metal in a different ligand field can look different (see Coordination Compounds). And “reactivity” here means electropositive/redox reactivity, not kinetic rate.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'For M(s) → M<sup><i>n</i>+</sup>(aq), the overall <i>E</i>° is fixed by the sum of three energy terms: Δ<sub>a</sub><i>H</i> (atomisation) + Δ<sub>i</sub><i>H</i> (ionisation) + Δ<sub>hyd</sub><i>H</i> (hydration).',
      },
      {
        t: 'p',
        html: 'An <i>E</i>° becomes favourable (more negative for M<sup>2+</sup>/M) when low atomisation + low ionisation energies are well repaid by a large (exothermic) hydration energy.',
      },
      {
        t: 'p',
        html: '<b><i>E</i>°(M<sup>2+</sup>/M) across the 3d series (V):</b>',
      },
      {
        t: 'table',
        title: null,
        head: [
          'Couple',
          'Ti<sup>2+</sup>/Ti',
          'V<sup>2+</sup>/V',
          'Cr<sup>2+</sup>/Cr',
          'Mn<sup>2+</sup>/Mn',
          'Fe<sup>2+</sup>/Fe',
          'Co<sup>2+</sup>/Co',
          'Ni<sup>2+</sup>/Ni',
          'Cu<sup>2+</sup>/Cu',
          'Zn<sup>2+</sup>/Zn',
        ],
        rows: [['<i>E</i>°', '−1.63', '−1.18', '−0.90', '−1.18', '−0.44', '−0.28', '−0.25', '<b>+0.34</b>', '−0.76']],
      },
      {
        t: 'p',
        html: 'The values are mostly negative (these metals displace H<sub>2</sub> from acids) but <b>trend irregularly</b>. Copper alone is positive (noble); Mn and Zn are more negative than the smooth trend predicts, reflecting the stability of Mn<sup>2+</sup> (d<sup>5</sup>) and Zn<sup>2+</sup> (d<sup>10</sup>), and Ni is too, because of the very negative hydration enthalpy of Ni<sup>2+</sup>.',
      },
      {
        t: 'p',
        html: '<b><i>E</i>°(M<sup>3+</sup>/M<sup>2+</sup>) — the couple that decides oxidising/reducing behaviour (V):</b>',
      },
      {
        t: 'table',
        title: null,
        head: [
          'Couple',
          'Ti<sup>3+</sup>/Ti<sup>2+</sup>',
          'V<sup>3+</sup>/V<sup>2+</sup>',
          'Cr<sup>3+</sup>/Cr<sup>2+</sup>',
          'Mn<sup>3+</sup>/Mn<sup>2+</sup>',
          'Fe<sup>3+</sup>/Fe<sup>2+</sup>',
          'Co<sup>3+</sup>/Co<sup>2+</sup>',
        ],
        rows: [['<i>E</i>°', '−0.37', '−0.26', '<b>−0.41</b>', '<b>+1.57</b>', '+0.77', '<b>+1.97</b>']],
      },
      {
        t: 'p',
        html: '• <b>Cr<sup>3+</sup>/Cr<sup>2+</sup> = −0.41 V</b> (negative) ⇒ Cr<sup>2+</sup> is a <b>reducing agent</b> (it is readily oxidised to the stable d<sup>3</sup> Cr<sup>3+</sup>).<br>• <b>Mn<sup>3+</sup>/Mn<sup>2+</sup> = +1.57 V</b> and <b>Co<sup>3+</sup>/Co<sup>2+</sup> = +1.97 V</b> (large positive) ⇒ Mn<sup>3+</sup> and Co<sup>3+</sup> are <b>strong oxidising agents</b> (they fall readily to the stable d<sup>5</sup> Mn<sup>2+</sup> and to Co<sup>2+</sup>).<br>• <b>Fe<sup>3+</sup>/Fe<sup>2+</sup> = +0.77 V</b> (moderate) ⇒ Fe<sup>3+</sup> (d<sup>5</sup>) is comparatively stable, only a mild oxidiser.',
      },
      {
        t: 'p',
        html: '<b>Colours of common hydrated 3d ions</b> (a memorise-cold reference):',
      },
      {
        t: 'table',
        title: null,
        head: ['Ion', 'Config', 'Unpaired e<sup>−</sup>', 'μ<sub>s</sub> (BM)', 'Colour'],
        rows: [
          ['Sc<sup>3+</sup>', '3d<sup>0</sup>', '0', '0', 'colourless'],
          ['Ti<sup>3+</sup>', '3d<sup>1</sup>', '1', '1.73', 'purple'],
          ['V<sup>3+</sup>', '3d<sup>2</sup>', '2', '2.83', 'green'],
          ['Cr<sup>3+</sup>', '3d<sup>3</sup>', '3', '3.87', 'violet (green as formed from dichromate in acid, where sulphate or chloride replaces some water)'],
          ['Mn<sup>2+</sup>', '3d<sup>5</sup>', '5', '5.92', 'pale pink'],
          ['Fe<sup>2+</sup>', '3d<sup>6</sup>', '4', '4.90', 'pale green'],
          ['Fe<sup>3+</sup>', '3d<sup>5</sup>', '5', '5.92', 'yellow'],
          ['Co<sup>2+</sup>', '3d<sup>7</sup>', '3', '3.87', 'pink'],
          ['Ni<sup>2+</sup>', '3d<sup>8</sup>', '2', '2.83', 'green'],
          ['Cu<sup>2+</sup>', '3d<sup>9</sup>', '1', '1.73', 'blue'],
          ['Zn<sup>2+</sup>', '3d<sup>10</sup>', '0', '0', 'colourless'],
        ],
      },
      {
        t: 'p',
        html: '<b>Chemical reactivity with acids (consolidating NCERT 8.3.8).</b> (Section numbers such as this one, here and in the Additional topics, are from the earlier NCERT edition, where The d- and f-Block Elements was Unit 8; the current NCERT Class 12 book numbers the chapter Unit 4.) Reactivity broadly <b>decreases from Sc to Cu</b> across the 3d series (electropositive character falls as <i>E</i>° becomes less negative). In practice:<br>• Metals with negative <i>E</i>°(M<sup>2+</sup>/M) — most of the series — <b>dissolve in dilute non-oxidising acids</b> (HCl, dil. H<sub>2</sub>SO<sub>4</sub>), liberating H<sub>2</sub>: e.g. Fe + 2H<sup>+</sup> → Fe<sup>2+</sup> + H<sub>2</sub>.<br>• <b>Copper is the exception:</b> with a positive <i>E</i>° it does <b>not</b> liberate H<sub>2</sub> from dilute HCl/H<sub>2</sub>SO<sub>4</sub>. It dissolves only in oxidising acids such as HNO<sub>3</sub>, where the anion (not H<sup>+</sup>) does the oxidising: 3Cu + 8HNO<sub>3</sub>(dil.) → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O.<br>• The heavier metals such as Pt and Au are the most “noble” of all and resist even single mineral acids.',
      },
      {
        t: 'p',
        html: '<b>Oxides and halides — how oxidation state controls them (consolidating NCERT 8.4.1).</b><br>• <b>The highest oxide oxidation state matches the group number</b> up to manganese (Sc<sub>2</sub>O<sub>3</sub>, TiO<sub>2</sub>, V<sub>2</sub>O<sub>5</sub>, CrO<sub>3</sub>, Mn<sub>2</sub>O<sub>7</sub>); it falls off thereafter.<br>• <b>Acidic character of an oxide rises with the metal’s oxidation state:</b> low states give basic oxides, intermediate amphoteric, the highest acidic (for Mn: MnO basic → Mn<sub>2</sub>O<sub>3</sub>, MnO<sub>2</sub> amphoteric → Mn<sub>2</sub>O<sub>7</sub> acidic). The acidic high-state oxides dissolve in alkali to give oxoanions (chromate, permanganate).<br>• <b>Oxygen and fluorine stabilise the highest oxidation states</b> (their small size and high electronegativity, and for oxygen the ability to form multiple bonds), which is why the top states appear in oxides and fluorides — e.g. OsO<sub>4</sub> (+8), MnO<sub>4</sub><sup>−</sup> (+7), CrO<sub>3</sub> (+6).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Reading an electrode-potential value into a reactivity statement',
        steps: [
          'Sign first: <b>negative <i>E</i>°(M<sup>2+</sup>/M) → metal above hydrogen → reacts with dilute acid, liberating H<sub>2</sub></b>; positive → noble, no H<sub>2</sub>.',
          'Magnitude: more negative → more reactive/stronger reducing agent.',
          'For the M<sup>3+</sup>/M<sup>2+</sup> couple: positive and large → M<sup>3+</sup> is a strong oxidiser; negative → M<sup>2+</sup> is a reducing agent.',
        ],
      },
      {
        t: 'p',
        html: 'To predict from configuration alone, ask “does the redox step reach or abandon a stable d<sup>3</sup>/d<sup>5</sup>/d<sup>10</sup>?”',
      },
      {
        t: 'proc',
        title: 'Procedure B — Predicting whether a 3d ion is oxidising or reducing from configuration alone',
        steps: [
          'Cr<sup>2+</sup> (d<sup>4</sup>) → Cr<sup>3+</sup> (d<sup>3</sup>): reaches stable d<sup>3</sup> ⇒ Cr<sup>2+</sup> reducing.',
          'Mn<sup>3+</sup> (d<sup>4</sup>) → Mn<sup>2+</sup> (d<sup>5</sup>): reaches stable d<sup>5</sup> ⇒ Mn<sup>3+</sup> oxidising.',
          'Fe<sup>2+</sup> (d<sup>6</sup>) → Fe<sup>3+</sup> (d<sup>5</sup>): reaches stable d<sup>5</sup> ⇒ Fe<sup>2+</sup> mildly reducing; Fe<sup>3+</sup> stable.',
          'Co<sup>3+</sup> (d<sup>6</sup>) → Co<sup>2+</sup> (d<sup>7</sup>): strongly oxidising in aqueous medium (large <i>E</i>°, from cobalt’s high third ionisation enthalpy, not from reaching a stable shell).',
        ],
      },
      {
        t: 'table',
        title: 'Procedure C — Comparing the three transition series (the standard 3-marker)',
        head: ['Property', '1st series (3d)', '2nd (4d)', '3rd (5d)'],
        rows: [
          ['Atomic/ionic size', 'smallest', 'larger', '≈ <b>2nd</b> (lanthanoid contraction)'],
          ['Ionisation enthalpy', 'lower', 'similar to the 1st', '<b>highest</b>'],
          ['Higher oxidation states', 'less stable', 'more stable', '<b>most stable</b> (e.g., W, Re, Os)'],
          ['Melting/boiling pt, density', 'lower', 'higher', '<b>highest</b> (densest: Os, Ir)'],
          ['Reactivity', 'most reactive', 'less', '<b>least</b> (noble: Pt, Au, Ir)'],
          ['Tendency to form complexes/M–M bonds', 'lower', 'higher', 'highest'],
        ],
      },
      {
        t: 'p',
        html: 'The headline: <b>the 2nd and 3rd series resemble each other far more than either resembles the 1st</b>, the direct fingerprint of the lanthanoid contraction.',
      },
      {
        t: 'p',
        html: '<b>Applications of d- and f-block elements (consolidated).</b><br>• <b>Alloy steels:</b> Fe alloyed with Cr, Mn, Ni, V, W, Co for stainless/tool/structural steels — the single most important use.<br>• <b>Catalysts:</b> Fe (Haber, NH<sub>3</sub>); V<sub>2</sub>O<sub>5</sub> (Contact, H<sub>2</sub>SO<sub>4</sub>); Ni (hydrogenation of oils → vanaspati); PdCl<sub>2</sub> (Wacker, ethene → ethanal); TiCl<sub>4</sub>/Al(C<sub>2</sub>H<sub>5</sub>)<sub>3</sub> (Ziegler–Natta, polyethene); MnO<sub>2</sub> (decomposition of KClO<sub>3</sub> and H<sub>2</sub>O<sub>2</sub>); Pt/Pd in catalytic converters.<br>• <b>Photography:</b> light-sensitive AgBr in films/plates.<br>• <b>Compounds:</b> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> and KMnO<sub>4</sub> as oxidants and volumetric reagents (Topic 02).<br>• <b>f-block:</b> mischmetall (flints, alloys), lanthanoid oxides as TV/X-ray phosphors and cracking catalysts (Topic 03); Th/U/Pu as nuclear fuels.',
      },
      {
        t: 'p',
        html: '<b>How the whole chapter connects (capstone synthesis).</b> Every property in this chapter traces to one structural fact: <b>partly filled, energetically accessible (<i>n</i> − 1)d or (<i>n</i> − 2)f orbitals.</b> Those orbitals give the d-block its variable oxidation states, colour, magnetism, catalysis and complexes (Topic 01); they leave Cr<sup>+6</sup> and Mn<sup>+7</sup> (d<sup>0</sup>) powerful oxidants in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> and KMnO<sub>4</sub> (Topic 02); their poor self-shielding drives the lanthanoid and actinoid contractions that fix f-block size, basicity and the second-vs-third-series resemblance (Topic 03); and the stability of the half-filled d<sup>5</sup> and empty/filled d<sup>0</sup>/d<sup>10</sup> (and f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup>) shells governs the electrode potentials, ion colours and oxidation-state choices catalogued here (Topic 04). Master that one organising idea — what the inner electrons are doing — and the entire chapter becomes a single, predictable story rather than a list to memorise, and almost any exam question can be reasoned out from first principles.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Giving reasons, state which is a better reducing agent: Cr<sup>2+</sup> or Fe<sup>2+</sup>.',
        steps: [
          'A reducing agent is itself oxidised; the easier the M<sup>2+</sup> → M<sup>3+</sup> step, the stronger the reductant. Compare the products:',
          'Cr<sup>2+</sup> (d<sup>4</sup>) → Cr<sup>3+</sup> (d<sup>3</sup>): reaches the extra-stable half-filled-t<sub>2g</sub> d<sup>3</sup> — strongly favoured.',
          'Fe<sup>2+</sup> (d<sup>6</sup>) → Fe<sup>3+</sup> (d<sup>5</sup>): also reaches a stable d<sup>5</sup>, but the driving force is smaller (reflected in <i>E</i>°: Cr<sup>3+</sup>/Cr<sup>2+</sup> = −0.41 V vs Fe<sup>3+</sup>/Fe<sup>2+</sup> = +0.77 V). Since the Cr couple is far more negative,',
        ],
        ans: 'Cr<sup>2+</sup> is the stronger reducing agent.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which aqueous ion is <b>colourless</b>? Ti<sup>3+</sup>, Cu<sup>2+</sup>, Sc<sup>3+</sup>, Ni<sup>2+</sup>',
        steps: [
          '<b>The fast way.</b> For simple hydrated ions, colourless ⇔ d<sup>0</sup> or d<sup>10</sup>:<br>• Ti<sup>3+</sup> (d<sup>1</sup>) coloured; Cu<sup>2+</sup> (d<sup>9</sup>) coloured; Ni<sup>2+</sup> (d<sup>8</sup>) coloured.<br>• Sc<sup>3+</sup> (d<sup>0</sup>) → <b>colourless</b> ✓.',
          '<b>Speed rule:</b> among simple hydrated ions, scan for the d<sup>0</sup>/d<sup>10</sup> ion (Sc<sup>3+</sup>, Ti<sup>4+</sup>, Zn<sup>2+</sup>, Cu<sup>+</sup>) — that is always the colourless one.',
        ],
        ans: 'Sc<sup>3+</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (multi-concept: E° energy analysis + reactivity)',
        q: 'Despite copper lying near the end of the 3d series, it does not liberate hydrogen from dilute HCl, whereas zinc does. Explain in terms of the energy terms governing <i>E</i>°(M<sup>2+</sup>/M).',
        steps: [
          'For a metal to displace H<sub>2</sub>, <i>E</i>°(M<sup>2+</sup>/M) must be negative.',
          '<i>E</i>°(Zn<sup>2+</sup>/Zn) = −0.76 V (negative) — Zn reacts, releasing H<sub>2</sub>.',
          '<i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V (positive) — Cu does not.',
          '<b>Why Cu is positive:</b> the total of copper’s atomisation and ionisation enthalpies is the largest in the series (339 + 745 + 1958 = 3042 kJ mol<sup>−1</sup>, driven by its very high second ionisation enthalpy), and this is <b>not</b> sufficiently compensated by its hydration enthalpy. Energetically, copper prefers to remain as the metal, so the Cu<sup>2+</sup>/Cu couple is non-spontaneous toward H<sub>2</sub> release.',
        ],
        ans: 'Zn (negative <i>E</i>°) liberates H<sub>2</sub>; Cu (positive <i>E</i>°, due to unrepaid high Δ<sub>a</sub><i>H</i> + Δ<sub>i</sub><i>H</i>) does not.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Account for the order of <i>E</i>°(M<sup>3+</sup>/M<sup>2+</sup>): Cr (−0.41) < Fe (+0.77) < Mn (+1.57) < Co (+1.97), in terms of the configurations of the ions involved.',
        steps: [
          'Read each couple by what the M<sup>3+</sup> product is:',
          '<b>Cr<sup>3+</sup> (d<sup>3</sup>)</b> is extra-stable (half-filled t<sub>2g</sub>); Cr<sup>2+</sup> readily gives up an electron to reach it → the couple is the least favourable toward reduction (most negative) → Cr<sup>2+</sup> reducing.',
          '<b>Fe<sup>3+</sup> (d<sup>5</sup>)</b> is half-filled-stable; Fe<sup>2+</sup> → Fe<sup>3+</sup> is favourable, so Fe<sup>3+</sup> is only a moderate oxidiser (+0.77).',
          '<b>Mn<sup>3+</sup> (d<sup>4</sup>)</b> is not specially stable, and forming Mn<sup>2+</sup> reaches the very stable d<sup>5</sup> — so Mn<sup>3+</sup> is strongly driven to be reduced (+1.57).',
          '<b>Co<sup>3+</sup> (d<sup>6</sup>)</b> → Co<sup>2+</sup> (d<sup>7</sup>): the highest value (+1.97), and no specially stable shell is reached. The cause is cobalt’s large third ionisation enthalpy: Co<sup>3+</sup> is costly to form, so it releases a great deal of energy on taking an electron back. The large hydration enthalpy of the small, highly charged Co<sup>3+</sup> works the other way, stabilising Co<sup>3+</sup>, but does not make up that cost.',
          'The trend is therefore <b>not</b> monotonic with atomic number — it follows the third ionisation enthalpy, shaped by the stability of the d<sup><i>n</i></sup> configurations, and partly offset by the hydration of the highly charged M<sup>3+</sup>. The same half-filled-shell logic that runs through ionisation enthalpy explains Cr, Mn and Fe here.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is <i>E</i>°(Mn<sup>3+</sup>/Mn<sup>2+</sup>) much larger (more positive) than <i>E</i>°(Cr<sup>3+</sup>/Cr<sup>2+</sup>)?',
            a: 'Forming Mn<sup>2+</sup> (d<sup>5</sup>) from Mn<sup>3+</sup> reaches a stable half-filled shell (strongly favoured → high positive <i>E</i>°); forming Cr<sup>2+</sup> from Cr<sup>3+</sup> would destroy the stable d<sup>3</sup> (disfavoured → negative <i>E</i>°).',
          },
          {
            q: '[NEET] Which of these hydrated ions is pink: Cu<sup>2+</sup>, Co<sup>2+</sup>, Ni<sup>2+</sup>, Sc<sup>3+</sup>?',
            a: 'Co<sup>2+</sup>.',
          },
          {
            q: '[JEE Main] Arrange the atomic radii of the elements of group 6 — Cr, Mo, W — in increasing order and justify.',
            a: 'Cr < Mo ≈ W — Cr (3d) is smallest; Mo (4d) and W (5d) are nearly equal because the lanthanoid contraction cancels the expected W increase.',
          },
          {
            q: '[JEE Main] Name the catalyst used in (i) the Haber process, (ii) the Contact process, (iii) hydrogenation of vegetable oils.',
            a: '(i) Fe, (ii) V<sub>2</sub>O<sub>5</sub>, (iii) Ni.',
          },
          {
            q: '[JEE Advanced] Explain, using the three governing energy terms, why <i>E</i>°(M<sup>2+</sup>/M) values of the 3d series do not change smoothly across the period.',
            a: 'The three terms (Δ<sub>a</sub><i>H</i>, Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub>, Δ<sub>hyd</sub><i>H</i>) vary irregularly and partly cancel; spikes in stability (e.g., Mn<sup>2+</sup> d<sup>5</sup>, Zn<sup>2+</sup> d<sup>10</sup>), the very negative hydration enthalpy of Ni<sup>2+</sup> and Cu’s poorly-repaid atomisation/ionisation produce the non-smooth pattern.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which ion acts as a reducing agent in aqueous solution?',
        opts: [
          { label: 'Mn<sup>3+</sup>', nudge: '<b>(a)</b> Mn<sup>3+</sup> has a large positive couple → it is a strong oxidiser, the opposite.' },
          { label: 'Co<sup>3+</sup>', nudge: '<b>(b)</b> Co<sup>3+</sup> has a large positive couple → it is a strong oxidiser, the opposite.' },
          { label: 'Cr<sup>2+</sup>', nudge: null },
          { label: 'Fe<sup>3+</sup>', nudge: '<b>(d)</b> Fe<sup>3+</sup> (d<sup>5</sup>) is a stable, mild oxidiser, not a reductant.' },
        ],
        correct: 2,
        solution: '<i>E</i>°(Cr<sup>3+</sup>/Cr<sup>2+</sup>) is negative, so Cr<sup>2+</sup> is readily oxidised to the stable d<sup>3</sup> Cr<sup>3+</sup> — it reduces other species.',
      },
      {
        t: 'mcq',
        q: 'The pair of colourless ions is:',
        opts: [
          { label: 'Ti<sup>3+</sup> and Cu<sup>2+</sup>', nudge: '<b>(a)</b> both ions are partly filled (coloured).' },
          { label: 'Sc<sup>3+</sup> and Zn<sup>2+</sup>', nudge: null },
          { label: 'Fe<sup>2+</sup> and Ni<sup>2+</sup>', nudge: '<b>(c)</b> both ions are partly filled (coloured).' },
          { label: 'Mn<sup>2+</sup> and Co<sup>2+</sup>', nudge: '<b>(d)</b> both ions are partly filled (coloured).' },
        ],
        correct: 1,
        solution: 'Sc<sup>3+</sup> (d<sup>0</sup>) and Zn<sup>2+</sup> (d<sup>10</sup>) lack a partly-filled d-subshell → colourless. Students who forget that d<sup>0</sup> and d<sup>10</sup> are both colourless mis-pick here.',
      },
      {
        t: 'mcq',
        q: 'Across the transition series, the second and third members of a group have nearly equal atomic radii because of:',
        opts: [
          { label: 'increasing nuclear charge', nudge: '<b>(a)</b> is a general effect that does not explain the specific 2nd ≈ 3rd equality.' },
          { label: 'the lanthanoid contraction', nudge: null },
          { label: 'd-orbital shielding', nudge: '<b>(c)</b> is a general effect that does not explain the specific 2nd ≈ 3rd equality.' },
          { label: 'equal numbers of shells', nudge: '<b>(d)</b> is false (the third series has an extra shell).' },
        ],
        correct: 1,
        solution: 'The contraction across the intervening 4f series cancels the expected 4d→5d size increase.',
      },
      {
        t: 'mcq',
        q: 'The catalyst used in the Contact process for manufacturing sulphuric acid is:',
        opts: [
          { label: 'Fe', nudge: '<b>(a)</b> Fe is the Haber catalyst.' },
          { label: 'Ni', nudge: '<b>(b)</b> Ni is for hydrogenation.' },
          { label: 'V<sub>2</sub>O<sub>5</sub>', nudge: null },
          { label: 'PdCl<sub>2</sub>', nudge: '<b>(d)</b> PdCl<sub>2</sub> is the Wacker catalyst.' },
        ],
        correct: 2,
        solution: 'Each distractor is a real transition-metal catalyst for a different process — the trap rewards precise process–catalyst pairing.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing the two electrode-potential couples.</b> M<sup>2+</sup>/M tells you reactivity toward acids; M<sup>3+</sup>/M<sup>2+</sup> tells you oxidising/reducing behaviour of the ions. Don’t mix them.',
          '<b>Reading <i>E</i>° signs backwards.</b> Negative M<sup>3+</sup>/M<sup>2+</sup> ⇒ the +2 ion is the reducing agent; large positive ⇒ the +3 ion is the oxidiser.',
          '<b>Forgetting d<sup>10</sup> is colourless too.</b> Among simple hydrated ions, only d<sup>0</sup> and d<sup>10</sup> are colourless; everything in between is coloured.',
          '<b>Pairing the wrong catalyst to a process.</b> Lock in Haber–Fe, Contact–V<sub>2</sub>O<sub>5</sub>, hydrogenation–Ni, Wacker–PdCl<sub>2</sub>, polyethene–Ziegler–Natta(Ti).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For Mn and Cr in an M<sup>3+</sup>/M<sup>2+</sup> question, read the configuration before the numbers. Ask “does the reduction reach a stable d<sup>5</sup>?” If yes, the +3 ion is a strong oxidiser (Mn<sup>3+</sup>→d<sup>5</sup>); if the reduction would destroy a stable shell, the +2 ion is the reducer (Cr<sup>2+</sup>→d<sup>3</sup>). For V and Co, learn the values from the table.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<i>E</i>° governed by',
            note: 'Δ<sub>a</sub><i>H</i> + Δ<sub>i</sub><i>H</i> + Δ<sub>hyd</sub><i>H</i>. Negative M<sup>2+</sup>/M ⇒ displaces H<sub>2</sub> (Cu is the lone positive exception, +0.34 V).',
          },
          {
            f: 'M<sup>3+</sup>/M<sup>2+</sup> key values',
            note: 'Cr (−0.41, Cr<sup>2+</sup> reducing), Fe (+0.77, mild), Mn (+1.57, strong oxidiser), Co (+1.97, strongest) — Cr, Mn and Fe set by reaching/abandoning d<sup>3</sup>/d<sup>5</sup>; Co by its high third ionisation enthalpy.',
          },
          {
            f: 'Colour rule',
            note: 'Hydrated ions: d<sup>0</sup>/d<sup>10</sup> colourless; partly filled coloured. Signatures: Ti<sup>3+</sup> purple, V<sup>3+</sup>/Ni<sup>2+</sup> green, Cr<sup>3+</sup> violet, Mn<sup>2+</sup> pale pink, Fe<sup>3+</sup> yellow, Co<sup>2+</sup> pink, Cu<sup>2+</sup> blue.',
          },
          {
            f: 'Series comparison',
            note: '1st series smallest/most reactive/lower OS; 2nd ≈ 3rd in size (lanthanoid contraction); 3rd highest IE; more stable high OS, denser, more noble.',
          },
          {
            f: 'Catalysts',
            note: 'Haber → Fe; Contact → V<sub>2</sub>O<sub>5</sub>; hydrogenation → Ni; Wacker → PdCl<sub>2</sub>; polyethene → Ziegler–Natta (Ti). Photography uses AgBr, which is light-sensitive, not a catalyst.',
          },
        ],
        aids: [
          '“Cr<sup>2+</sup> reduces, Mn<sup>3+</sup>/Co<sup>3+</sup> oxidise” — the two ends of the M<sup>3+</sup>/M<sup>2+</sup> table.',
        ],
      },
    ],
  },
];
