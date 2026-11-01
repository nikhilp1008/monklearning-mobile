import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Additional Topics, word for word from the Class 11 Chemistry
 * Master Reference: the shared opening of "Chapter 7: Redox Reactions —
 * Additional Topics" (p. 327, set at the head of Additional topic A's
 * Introduction), then A Reading the Standard Electrode Potential Table
 * (pp. 327–331; its "Figure 1" ladder, p. 329, is c11-07-A-d1, the caption
 * belonging to the diagram), B Which Species Can Disproportionate? The
 * Three-State Rule (pp. 331–333), C Combined n-Factors: Salts Oxidised in Two
 * Places (pp. 333–334), D Iodometry: The Iodine–Thiosulphate Chain
 * (pp. 335–336), E Inside the Permanganate Titration: Lab Facts the Papers
 * Probe (pp. 336–338), F High-Electron Half-Reactions (pp. 338–339), G the
 * book's Summary Checklist (p. 339, kept as its own short Additional topic by
 * Nikhil's decision) and H, the book's "Addendum P — What JEE and NEET
 * Actually Ask" (pp. 340–344), kept as the last Additional topic.
 *
 * Each addendum prints its own practice answers under "Answers:"; each answer
 * is set here with its own question. The book's "NCERT Table 8.1" and "NCERT
 * Problem 8.5" are the old edition's numbers (errata, Remaining known issue):
 * they are copied as printed, with one bracketed note after the first citation.
 *
 * Expert review (rc7b, Oct 31, approved by Nikhil): book errors corrected and
 * false "the chapter does not cover" claims reworded against Topics 01–04 as
 * built; new sentences (B's floor test, C practice 3's medium, F.1's
 * real-alkali note, the named reaction in H archetype 3, the E.1 answer's
 * reason) are ours, not the book's.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 327–331 ─────────────────────────
  {
    n: 'A',
    title: 'Reading the Standard Electrode Potential Table',
    extra: true,
    kalam: 'Every tabulated value is a reduction potential — the oxidised form plus electrons on the left.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter has given you the three lenses on redox, the oxidation-number rules with their peroxide and hydride exceptions, both balancing methods, the four reaction types, and the working machinery of titrations and cells. Six examinable patterns still stand open. NCERT’s Table 8.1 of standard electrode potentials is a ranking instrument the chapter uses only in fragments — Addendum A makes you fluent in it, including the hydrogen-electrode convention that gives every value its meaning. (In the current NCERT edition redox is Chapter 7, so this table and problem are numbered 7.x; find them by title.) Addendum B answers the question the papers ask every year — which species can disproportionate — with NCERT’s own three-state rule, its oxoanion ladder, and an electrode-potential proof. Addendum C handles salts that are oxidised in two places at once (ferrous oxalate is the recurring case) and mixtures of them. Addendum D builds the iodometric titration chain (I<sub>2</sub> versus thiosulphate) that the chapter never sets up but exam papers assume. Addendum E collects the laboratory facts of permanganate titrations — heating, autocatalysis, primary standards — that appear as statement-verification questions. Addendum F drills the high-electron half-reactions (nitrate to ammonium is eight electrons) behind the coefficient-difference questions. Most of this goes beyond the chapter; where a section revisits a chapter result (the Cu<sup>+</sup> disproportionation, the halogen order), it turns it into a drill.',
      },
      {
        t: 'p',
        html: 'The chapter taught you to compute <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> from two given values. What it did not give you is the table itself as a thinking tool — where the zero sits and what a negative value means. Topic 03 gave the rule for reading oxidising and reducing strength from <i>E</i>° values; here you apply it to a whole list. NCERT’s Table 8.1 is the source; exam questions quote fragments of it and expect instant ranking.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The reference point.</b> Every standard electrode potential is measured against the <b>standard hydrogen electrode (SHE)</b>: the couple 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>, fixed by convention at exactly 0.00 V. Standard conditions are unit concentration (1 M) for dissolved species, 1 bar pressure for any gas, and 298 K. Every tabulated value is a <b>reduction</b> potential — the oxidised form plus electrons on the left.',
      },
      {
        t: 'p',
        html: '<b>What the sign means (NCERT’s own statement):</b><br>• A <b>negative</b> <i>E</i>° means the redox couple is a <b>stronger reducing agent</b> than the H<sup>+</sup>/H<sub>2</sub> couple — it pushes electrons onto H<sup>+</sup>, so the metal, lying below H<sup>+</sup>/H<sub>2</sub> on the ladder, dissolves in acid.<br>• A <b>positive</b> <i>E</i>° means the couple is a <b>weaker reducing agent</b> than H<sup>+</sup>/H<sub>2</sub> — the oxidised form of the couple grabs electrons even from H<sub>2</sub>.',
      },
      {
        t: 'defgrid',
        title: 'The ladder (selected values from NCERT Table 8.1, 298 K): Half-reaction (reduction) — E° / V',
        rows: [
          { k: 'F<sub>2</sub> + 2e<sup>−</sup> → 2F<sup>−</sup>', v: '+2.87' },
          { k: 'MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O', v: '+1.51' },
          { k: 'Cl<sub>2</sub> + 2e<sup>−</sup> → 2Cl<sup>−</sup>', v: '+1.36' },
          { k: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O', v: '+1.33' },
          { k: 'Ag<sup>+</sup> + e<sup>−</sup> → Ag', v: '+0.80' },
          { k: 'Fe<sup>3+</sup> + e<sup>−</sup> → Fe<sup>2+</sup>', v: '+0.77' },
          { k: 'I<sub>2</sub> + 2e<sup>−</sup> → 2I<sup>−</sup>', v: '+0.54' },
          { k: 'Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu', v: '+0.34' },
          { k: '2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>', v: '0.00' },
          { k: 'Ni<sup>2+</sup> + 2e<sup>−</sup> → Ni', v: '−0.25' },
          { k: 'Fe<sup>2+</sup> + 2e<sup>−</sup> → Fe', v: '−0.44' },
          { k: 'Zn<sup>2+</sup> + 2e<sup>−</sup> → Zn', v: '−0.76' },
          { k: 'Al<sup>3+</sup> + 3e<sup>−</sup> → Al', v: '−1.66' },
          { k: 'Mg<sup>2+</sup> + 2e<sup>−</sup> → Mg', v: '−2.36' },
          { k: 'Na<sup>+</sup> + e<sup>−</sup> → Na', v: '−2.71' },
          { k: 'Li<sup>+</sup> + e<sup>−</sup> → Li', v: '−3.05' },
        ],
      },
      {
        t: 'p',
        html: 'Read it with two arrows in your head: <b>oxidising strength increases upward</b> (the species on the left, F<sub>2</sub> at the top, is the hungriest electron-grabber), and <b>reducing strength increases downward</b> (Li metal at the bottom gives up electrons most eagerly).',
      },
      { t: 'fig', id: 'c11-07-A-d1' },
      { t: 'p', html: 'Given any two couples from the table:' },
      {
        t: 'proc',
        title: 'The three-question drill',
        steps: [
          '<b>Which direction is spontaneous?</b> The higher couple runs as written (reduction, at the cathode); the lower couple is driven backwards (oxidation, at the anode).',
          '<b>What is the EMF?</b> <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> — the vertical gap on the ladder. Positive gap, spontaneous.',
          '<b>Who oxidises whom?</b> The oxidised form of the higher couple oxidises the reduced form of the lower couple. The reverse never happens on its own.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Ranking from the table',
        q: 'From <i>E</i>° values I<sub>2</sub>/I<sup>−</sup> = +0.54 V, Fe<sup>3+</sup>/Fe<sup>2+</sup> = +0.77 V, Br<sub>2</sub>/Br<sup>−</sup> = +1.09 V, Cl<sub>2</sub>/Cl<sup>−</sup> = +1.36 V: (i) arrange the left-hand species in increasing oxidising power; (ii) state which of these can oxidise Fe<sup>2+</sup> to Fe<sup>3+</sup>.',
        steps: [
          'Oxidising power follows the size of the reduction potential: I<sub>2</sub>(0.54) < Fe<sup>3+</sup>(0.77) < Br<sub>2</sub>(1.09) < Cl<sub>2</sub>(1.36).',
          'For (ii), only a couple above Fe<sup>3+</sup>/Fe<sup>2+</sup> on the ladder can oxidise Fe<sup>2+</sup>: check the gaps — Br<sub>2</sub>: 1.09 − 0.77 = +0.32 V (spontaneous); Cl<sub>2</sub>: 1.36 − 0.77 = +0.59 V (spontaneous); I<sub>2</sub>: 0.54 − 0.77 = −0.23 V (fails).',
        ],
        ans: '(i) I<sub>2</sub> < Fe<sup>3+</sup> < Br<sub>2</sub> < Cl<sub>2</sub>; (ii) Br<sub>2</sub> and Cl<sub>2</sub> only — iodine cannot oxidise Fe<sup>2+</sup> (which is exactly why the iodometric chain of Addendum D works: I<sub>2</sub> is mild enough to sit between couples).',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Which metals liberate hydrogen from acid?',
        q: 'Using the table, predict which of Cu, Ni, Zn liberate H<sub>2</sub> from dilute H<sub>2</sub>SO<sub>4</sub>, with the cell EMF in each case.',
        steps: [
          'The cell is M + 2H<sup>+</sup> → M<sup>2+</sup> + H<sub>2</sub>, so <i>E</i>°<sub>cell</sub> = <i>E</i>°(H<sup>+</sup>/H<sub>2</sub>) − <i>E</i>°(M<sup>2+</sup>/M) = 0.00 − <i>E</i>°(M<sup>2+</sup>/M).',
          '• Zn: 0.00 − (−0.76) = +0.76 V — spontaneous.<br>• Ni: 0.00 − (−0.25) = +0.25 V — spontaneous.<br>• Cu: 0.00 − (+0.34) = −0.34 V — not spontaneous.',
        ],
        ans: 'Zn and Ni liberate hydrogen; copper does not. The one-line rule: <b>only metals with negative <i>E</i>° (below hydrogen on the ladder) dissolve in dilute acid with H<sub>2</sub> evolution.</b>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Spontaneity of a halogen displacement',
        q: 'Will bromine oxidise iodide when bromine water is added to KI? Will iodine displace bromine from KBr? Decide both from the table.',
        steps: [
          'Couples: Br<sub>2</sub>/Br<sup>−</sup> = +1.09 V and I<sub>2</sub>/I<sup>−</sup> = +0.54 V. For Br<sub>2</sub> + 2I<sup>−</sup> → 2Br<sup>−</sup> + I<sub>2</sub>: <i>E</i>°<sub>cell</sub> = 1.09 − 0.54 = +0.55 V — yes, bromine oxidises iodide and is itself consumed (the orange of bromine gives way to the deeper brown of the liberated iodine).',
          'For the reverse, I<sub>2</sub> + 2Br<sup>−</sup>: <i>E</i>°<sub>cell</sub> = 0.54 − 1.09 = −0.55 V — no reaction. This is the table’s version of the halogen reactivity order F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>.',
        ],
        ans: 'Bromine displaces iodine from iodide (yes); iodine cannot displace bromine from bromide (no).',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] From the ladder, name the strongest oxidising agent and the strongest reducing agent among: MnO<sub>4</sub><sup>−</sup>, Fe<sup>3+</sup>, Na, Zn.',
            a: 'Oxidising agent: MnO<sub>4</sub><sup>−</sup> (+1.51 V, highest); reducing agent: Na (−2.71 V, lowest).',
          },
          {
            q: '[CBSE] Explain, with an <i>E</i>°<sub>cell</sub> value, why a copper vessel cannot be used to store 1 M AgNO<sub>3</sub> solution. (<i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V, <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V.)',
            a: 'Cu + 2Ag<sup>+</sup> → Cu<sup>2+</sup> + 2Ag: <i>E</i>°<sub>cell</sub> = 0.80 − 0.34 = +0.46 V > 0 — copper dissolves and silver plates out, so the vessel is attacked.',
          },
          {
            q: '[JEE Main] Three metals X, Y, Z have <i>E</i>°(X<sup>2+</sup>/X) = −2.36 V, <i>E</i>°(Y<sup>2+</sup>/Y) = +0.34 V, <i>E</i>°(Z<sup>2+</sup>/Z) = −0.44 V. Which pairs give a spontaneous displacement, and which metal has the largest EMF when coupled with a hydrogen electrode?',
            a: 'X displaces Y and Z (X lowest); Z displaces Y only; largest gap with hydrogen is X: 0.00 − (−2.36) = 2.36 V.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 331–333 ─────────────────────────
  {
    n: 'B',
    title: 'Which Species Can Disproportionate? The Three-State Rule',
    extra: true,
    kalam: 'The papers also ask the forward question — “which of these four species can disproportionate?” — with no equation given.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gave you the intermediate-state rule (Topics 01 and 04) and one electrode-potential test (Cu<sup>+</sup>, Topic 03). The papers also ask the forward question — “which of these four species can disproportionate?” — with no equation given. NCERT states the governing rule in one sentence: a disproportionating element must be able to exist in <b>at least three oxidation states</b>, and in the reactant it must sit in an <b>intermediate</b> one, with both a higher and a lower state available as products.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1 — Find the element’s oxidation state in the candidate species. Step 2 — Ask: does a higher accessible state exist? Does a lower accessible state exist?</b> Both must answer yes. <b>Step 3 — The ceiling test:</b> if the element is already at its maximum (Cl in ClO<sub>4</sub><sup>−</sup> at +7, Mn in MnO<sub>4</sub><sup>−</sup> at +7, S in H<sub>2</sub>SO<sub>4</sub> at +6, N in HNO<sub>3</sub> at +5), it can only come down — no disproportionation. <b>Step 4 — The floor test:</b> an element already at its minimum (Cl in Cl<sup>−</sup> at −1, S in H<sub>2</sub>S at −2, N in NH<sub>3</sub> at −3) can only go up — no disproportionation; and an element with no accessible positive states (fluorine) can never be oxidised, so it cannot disproportionate either.',
      },
      {
        t: 'p',
        html: '<b>NCERT’s oxoanion ladder (Problem 8.5, worked in full).</b> Chlorine’s oxoanions are the canonical exam case. Three of the four disproportionate; the equations are:<br>3ClO<sup>−</sup> → 2Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup><br>6ClO<sub>2</sub><sup>−</sup> → 4ClO<sub>3</sub><sup>−</sup> + 2Cl<sup>−</sup><br>4ClO<sub>3</sub><sup>−</sup> → Cl<sup>−</sup> + 3ClO<sub>4</sub><sup>−</sup><br>(read: chlorine goes +1 → −1 and +5; +3 → +5 and −1; +5 → −1 and +7, respectively)',
      },
      {
        t: 'p',
        html: 'But ClO<sub>4</sub><sup>−</sup> does <b>not</b> disproportionate: chlorine is at +7, its highest state. Verify the electron bookkeeping on the first equation: two Cl atoms gain 2 e<sup>−</sup> each (+1 → −1), one Cl loses 4 e<sup>−</sup> (+1 → +5); 4 = 4.',
      },
      {
        t: 'p',
        html: '<b>The fluorine exception.</b> The other halogens disproportionate in alkali. Cl<sub>2</sub> in cold dilute alkali gives hypochlorite — the household-bleach reaction. Br<sub>2</sub> gives hypobromite only near 0 °C (otherwise bromate), and I<sub>2</sub> goes straight to iodate even in the cold, because hypoiodite is unstable; in hot alkali all three give the halate. The chlorine case:<br>Cl<sub>2</sub> + 2OH<sup>−</sup> → ClO<sup>−</sup> + Cl<sup>−</sup> + H<sub>2</sub>O<br>Fluorine deviates: 2F<sub>2</sub> + 2OH<sup>−</sup> → 2F<sup>−</sup> + OF<sub>2</sub> + H<sub>2</sub>O. Fluorine, the most electronegative element, has <b>no positive oxidation state</b>, so it can only be reduced here (to F<sup>−</sup>) while oxygen is oxidised — an ordinary redox, not a disproportionation of fluorine.',
      },
      {
        t: 'p',
        html: '<b>Proving feasibility with electrode potentials.</b> “Can X disproportionate?” is answerable quantitatively: build the disproportionation as a cell. One X is reduced (cathode), the other is oxidised (anode); if <i>E</i>°<sub>cell</sub> > 0 the split is spontaneous. Hydrogen peroxide, straight from NCERT’s table:<br>• Cathode: H<sub>2</sub>O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → 2H<sub>2</sub>O, <i>E</i>° = +1.78 V<br>• Anode (reversed): H<sub>2</sub>O<sub>2</sub> → O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup>, couple <i>E</i>° = +0.68 V<br><i>E</i>°<sub>cell</sub> = 1.78 − 0.68 = +1.10 V > 0<br>so 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> is spontaneous — peroxide is thermodynamically unstable toward its own disproportionation (it is only kinetically slow, which is why it keeps in bottles).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Spotting the non-disproportionator',
        q: 'Which of the following does not undergo disproportionation: (a) ClO<sup>−</sup> (b) ClO<sub>2</sub><sup>−</sup> (c) ClO<sub>3</sub><sup>−</sup> (d) ClO<sub>4</sub><sup>−</sup>?',
        steps: [
          'Chlorine states: +1, +3, +5, +7 respectively. The first three are intermediate — room above and below. ClO<sub>4</sub><sup>−</sup> has Cl at +7, the ceiling: no higher state exists, so simultaneous oxidation is impossible.',
        ],
        ans: '(d). This is NCERT Problem 8.5 in its exam form.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Sorting candidates',
        q: 'From HNO<sub>2</sub>, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, pick all that can act both as oxidising and reducing agent, and identify which can additionally disproportionate.',
        steps: [
          'Central-atom states: N in HNO<sub>2</sub> is +3 (between −3 and +5 — intermediate); N in HNO<sub>3</sub> is +5 (ceiling — oxidant only); S in H<sub>2</sub>SO<sub>3</sub> is +4 (between −2 and +6 — intermediate); P in H<sub>3</sub>PO<sub>4</sub> is +5 (ceiling — cannot be oxidised). Intermediate-state species answer “both oxidant and reductant.”',
          'For disproportionation, ask further whether the element can climb and fall from that state within one reaction: HNO<sub>2</sub> (to HNO<sub>3</sub> and NO/N<sub>2</sub>O) and H<sub>2</sub>SO<sub>3</sub>/its salts (to sulphate and S/S<sup>2−</sup>) both qualify.',
        ],
        ans: 'Both roles: HNO<sub>2</sub> and H<sub>2</sub>SO<sub>3</sub>; these two can also disproportionate. HNO<sub>3</sub> is an oxidant only; H<sub>3</sub>PO<sub>4</sub> (P at its +5 ceiling) cannot act as a reducing agent.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — The electrode-potential verdict for Cu(I)',
        q: 'Using <i>E</i>°(Cu<sup>+</sup>/Cu) = +0.52 V and <i>E</i>°(Cu<sup>2+</sup>/Cu<sup>+</sup>) = +0.16 V, show that Cu<sup>+</sup> disproportionates in water and state why cuprous salts are rare in aqueous solution.',
        steps: [
          'Build 2Cu<sup>+</sup> → Cu + Cu<sup>2+</sup> as a cell: reduction of Cu<sup>+</sup> to Cu at the cathode (+0.52 V), oxidation of Cu<sup>+</sup> to Cu<sup>2+</sup> at the anode (couple +0.16 V). <i>E</i>°<sub>cell</sub> = 0.52 − 0.16 = +0.36 V > 0 — spontaneous.',
          'With <i>n</i> = 1: log <i>K</i> = (1)(0.36)/0.0591 ≈ 6.1, so <i>K</i> ≈ 10<sup>6</sup> — the disproportionation runs essentially to completion.',
        ],
        ans: '<i>E</i>°<sub>cell</sub> = +0.36 V and <i>K</i> ≈ 10<sup>6</sup>; Cu<sup>+</sup> is unstable in water, so solution chemistry of copper is dominated by Cu<sup>2+</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which can disproportionate: (a) MnO<sub>4</sub><sup>−</sup> (b) MnO<sub>4</sub><sup>2−</sup> (c) F<sub>2</sub> (d) S<sub>8</sub>?',
            a: '(b) — Mn at +6 sits between +7 and +4 (e.g. 3MnO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2H<sub>2</sub>O) — and (d) — S at 0 splits to −2 and +2 in alkali: S<sub>8</sub> + 12OH<sup>−</sup> → 4S<sup>2−</sup> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> + 6H<sub>2</sub>O. (a) is at the +7 ceiling; (c) has no positive state.',
          },
          {
            q: '[CBSE] Balance and classify: NO<sub>2</sub> + OH<sup>−</sup> → NO<sub>2</sub><sup>−</sup> + NO<sub>3</sub><sup>−</sup>.',
            a: '2NO<sub>2</sub> + 2OH<sup>−</sup> → NO<sub>2</sub><sup>−</sup> + NO<sub>3</sub><sup>−</sup> + H<sub>2</sub>O; N goes +4 → +3 and +5 — disproportionation.',
          },
          {
            q: '[JEE Main] Explain in two lines why fluorine never shows disproportionation, using oxidation states.',
            a: 'Disproportionation needs the element to be oxidised in part of itself; fluorine, being the most electronegative element, exhibits only 0 and −1, so no positive state exists for it to be oxidised into.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 333–334 ─────────────────────────
  {
    n: 'C',
    title: 'Combined n-Factors: Salts Oxidised in Two Places',
    extra: true,
    kalam: 'The rule: the n-factor of a salt is the sum of the electron contributions of every oxidisable (or reducible) part of its formula unit.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter defines the n-factor for one species changing one oxidation state. Exam papers repeatedly use salts in which <b>two parts of the same formula unit are oxidised together</b> — the classic case being ferrous oxalate, FeC<sub>2</sub>O<sub>4</sub>. Miss the second contribution and the answer is off by a factor of three (or of 1.5).',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The rule:</b> the n-factor of a salt is the <b>sum of the electron contributions of every oxidisable (or reducible) part</b> of its formula unit.<br>• FeC<sub>2</sub>O<sub>4</sub> in acid: Fe<sup>2+</sup> → Fe<sup>3+</sup> gives 1 e<sup>−</sup>; C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2CO<sub>2</sub> gives 2 e<sup>−</sup> (each C, +3 → +4). Combined <i>n</i> = 3.<br>• Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub> in acid: the iron is already +3 (nothing to give); three oxalates at 2 e<sup>−</sup> each give <i>n</i> = 6.<br>• FeSO<sub>4</sub>: only Fe<sup>2+</sup> reacts, <i>n</i> = 1. Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: nothing oxidisable, <i>n</i> = 0.',
      },
      {
        t: 'p',
        html: 'Then run the usual endpoint balance, meq<sub>oxidant</sub> = meq<sub>reductant</sub>, with the combined n-factor in place.',
      },
      {
        t: 'p',
        html: '<b>The mixture extension:</b> when a mixture of salts is oxidised, total equivalents consumed = sum of (moles × n-factor) over the components that actually react. Species already in their highest state contribute zero — they are ballast.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Ferrous oxalate versus permanganate',
        q: 'What volume of 0.1 M KMnO<sub>4</sub> is required to oxidise 144 mg of FeC<sub>2</sub>O<sub>4</sub> completely in acidic medium? (Molar mass of FeC<sub>2</sub>O<sub>4</sub> = 144 g mol<sup>−1</sup>.)',
        steps: [
          'Moles of FeC<sub>2</sub>O<sub>4</sub>: 0.144/144 = 1.0 × 10<sup>−3</sup> mol. Combined n-factor: 3, so equivalents = 3.0 × 10<sup>−3</sup> eq = 3.0 meq.',
          'Permanganate in acid: <i>n</i> = 5, so <i>N</i> = 0.1 × 5 = 0.5 N. Volume: <i>V</i> = meq/<i>N</i> = 3.0/0.5',
        ],
        ans: '6.0 mL. The trap answer is 2 mL (counting only the iron) or 4 mL (counting only the oxalate) — both distractors exist because one contribution was dropped.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — The four-salt mixture',
        q: 'A mixture contains one mole each of FeC<sub>2</sub>O<sub>4</sub>, Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>, FeSO<sub>4</sub> and Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>. How many moles of KMnO<sub>4</sub> oxidise it completely in acidic medium?',
        steps: [
          'Equivalents contributed per mole of each salt: FeC<sub>2</sub>O<sub>4</sub>: 1 + 2 = 3; Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>: 0 + 6 = 6 (iron already +3); FeSO<sub>4</sub>: 1; Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: 0 (both parts fully oxidised). Total = 3 + 6 + 1 + 0 = 10 eq.',
          'Permanganate takes 5 e<sup>−</sup> per formula unit in acid, so moles of KMnO<sub>4</sub> = 10/5',
        ],
        ans: '2 mol. The counting error to avoid: assuming every iron atom in the mixture gets oxidised — the ferric salts contribute nothing through their iron.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Mohr’s salt mixture',
        q: '4 mol of a mixture of Mohr’s salt, FeSO<sub>4</sub> · (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> · 6H<sub>2</sub>O, and Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> requires 500 mL of 1 M K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> for complete oxidation in acid. Find the mole percent of Mohr’s salt.',
        steps: [
          'Only the Fe<sup>2+</sup> of Mohr’s salt is oxidised (<i>n</i> = 1); Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> is already ferric.',
          'Equivalents of dichromate: 0.500 L × 1 M × 6 = 3.0 eq, so Mohr’s salt = 3.0 mol. Mole percent = 3.0/4.0 × 100',
        ],
        ans: '75 mol%.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] State the n-factor of FeC<sub>2</sub>O<sub>4</sub> and of K<sub>4</sub>[Fe(CN)<sub>6</sub>] when each is fully oxidised in acid (iron to Fe<sup>3+</sup>, oxalate to CO<sub>2</sub>, cyanide ignored).',
            a: 'FeC<sub>2</sub>O<sub>4</sub>: <i>n</i> = 3; K<sub>4</sub>[Fe(CN)<sub>6</sub>]: <i>n</i> = 1 (only Fe<sup>2+</sup> → Fe<sup>3+</sup>).',
          },
          {
            q: '[JEE Main] 10 mmol of FeC<sub>2</sub>O<sub>4</sub> is titrated with 0.05 M KMnO<sub>4</sub> in acid. Find the titre volume.',
            a: 'meq = 10 × 3 = 30; <i>N</i> = 0.05 × 5 = 0.25 N; <i>V</i> = 30/0.25 = 120 mL.',
          },
          {
            q: '[JEE Main] 10 mL of a KMnO<sub>4</sub> solution oxidises 50 mL of 1 N I<sup>−</sup> solution. What mass of anhydrous oxalic acid can 100 mL of the same KMnO<sub>4</sub> solution oxidise? (Oxalic acid = 90 g mol<sup>−1</sup>.) (Both reactions in acidic medium.)',
            a: '10 mL of MnO<sub>4</sub><sup>−</sup> solution ≡ 50 meq, so 100 mL ≡ 500 meq; oxalic acid equivalent mass = 90/2 = 45; mass = 0.500 × 45 = 22.5 g.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 335–336 ─────────────────────────
  {
    n: 'D',
    title: 'Iodometry: The Iodine–Thiosulphate Chain',
    extra: true,
    kalam: 'The chain rule: equivalents are conserved at every link.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter’s titration toolbox has permanganate and dichromate as direct titrants. A whole second family appears in the papers: <b>iodometric</b> titrations, where the analyte never touches the burette. Instead, it oxidises iodide to iodine, and the liberated iodine is measured with sodium thiosulphate. The chapter never sets this chain up; exam papers assume it.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'formula',
        kicker: 'The two anchor half-reactions',
        main: 'I<sub>2</sub> + 2e<sup>−</sup> → 2I<sup>−</sup><br><i>n</i>(I<sub>2</sub>) = 2<br>2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2e<sup>−</sup><br><i>n</i>(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = 1<br>I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>',
        legend: [
          '<i>n</i>(I<sub>2</sub>) = n-factor of iodine',
          '<i>n</i>(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = n-factor of thiosulphate',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Thiosulphate is oxidised to <b>tetrathionate</b>; each thiosulphate gives up exactly one electron. The titration reaction is:<br>I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>',
      },
      {
        t: 'p',
        html: '<b>The liberation step.</b> The analyte, a mild-to-strong oxidant, releases iodine from excess acidified KI:<br>• H<sub>2</sub>O<sub>2</sub> + 2I<sup>−</sup> + 2H<sup>+</sup> → I<sub>2</sub> + 2H<sub>2</sub>O — here H<sub>2</sub>O<sub>2</sub> acts only as the <b>oxidant</b> (<i>n</i> = 2), unlike its disproportionation, where it is both oxidant and reductant.<br>• Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 6I<sup>−</sup> + 14H<sup>+</sup> → 2Cr<sup>3+</sup> + 3I<sub>2</sub> + 7H<sub>2</sub>O — one mole of dichromate liberates <b>3 mol</b> of iodine (6 e<sup>−</sup> in, 3 × 2 e<sup>−</sup> stored in I<sub>2</sub>).<br>• 2Cu<sup>2+</sup> + 4I<sup>−</sup> → Cu<sub>2</sub>I<sub>2</sub>(s) + I<sub>2</sub> — copper(II) is reduced to copper(I) iodide; this is how copper ores are assayed.',
      },
      {
        t: 'p',
        html: '<b>The chain rule:</b> equivalents are conserved at every link. meq<sub>analyte</sub> = meq<sub>I₂ liberated</sub> = meq<sub>thiosulphate</sub>. You never need the balanced equations once you trust the equivalents — but you must get each n-factor right: I<sub>2</sub> is a 2-electron species, thiosulphate a 1-electron species.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Hydrogen peroxide by iodometry',
        q: '25 mL of an H<sub>2</sub>O<sub>2</sub> solution is added to excess acidified KI. The liberated iodine requires 40 mL of 0.1 N sodium thiosulphate. If the normality of the H<sub>2</sub>O<sub>2</sub> solution is <i>x</i>, find 100<i>x</i>.',
        steps: [
          'meq of thiosulphate = 40 × 0.1 = 4.0 meq = meq of I<sub>2</sub> = meq of H<sub>2</sub>O<sub>2</sub> in 25 mL. So <i>N</i>(H<sub>2</sub>O<sub>2</sub>) = 4.0/25 = 0.16 N',
        ],
        ans: '100<i>x</i> = 16. Note that no balanced equation was needed — the chain rule carried everything.',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Dichromate liberating iodine',
        q: 'One mole of acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> reacts with sufficient KI. How many moles of I<sub>2</sub> are liberated?',
        steps: [
          'Dichromate’s n-factor is 6 (Cr: +6 → +3, two Cr atoms); iodine stores 2 e<sup>−</sup> per molecule. So 6 eq of oxidising power produce 6/2',
        ],
        ans: '3 mol.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Pyrolusite assay',
        q: 'A 2.0 g pyrolusite sample (containing MnO<sub>2</sub>) is treated with concentrated HCl; the chlorine evolved is passed into excess KI, and the liberated iodine needs 60.0 mL of 0.1 M Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>. Find the percentage of MnO<sub>2</sub> in the sample. (Mn = 55.)',
        steps: [
          'The chain: MnO<sub>2</sub> + 4HCl → MnCl<sub>2</sub> + Cl<sub>2</sub> + 2H<sub>2</sub>O, then Cl<sub>2</sub> + 2I<sup>−</sup> → I<sub>2</sub> + 2Cl<sup>−</sup>, then iodine titrated.',
          'meq of thiosulphate = 60.0 × 0.1 = 6.0 meq = meq of MnO<sub>2</sub> (<i>n</i> = 2, Mn +4 → +2). Moles of MnO<sub>2</sub> = 6.0/2 = 3.0 mmol; mass = 0.0030 × 87 = 0.261 g. Percentage = 0.261/2.0 × 100',
        ],
        ans: '≈ 13% MnO<sub>2</sub>. Three reactions, one equivalents chain — this is the archetype of every indirect assay.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] State the n-factor of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> and of I<sub>2</sub> in their mutual titration, and the oxidation number change of sulphur (average) in going from thiosulphate to tetrathionate.',
            a: '<i>n</i>(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = 1; <i>n</i>(I<sub>2</sub>) = 2; average S goes +2 → +2.5.',
          },
          {
            q: '[JEE Main] 0.01 mol of acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is treated with excess KI; the liberated iodine is titrated with 0.5 M Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>. Find the volume required.',
            a: 'meq dichromate = 0.01 × 6 × 1000 = 60 meq; thiosulphate <i>n</i> = 1, so <i>V</i> = 60/0.5 = 120 mL.',
          },
          {
            q: '[JEE Main] Excess KI is added to 25 mL of a CuSO<sub>4</sub> solution; the liberated iodine needs 20 mL of 0.1 N thiosulphate. Find the molarity of the CuSO<sub>4</sub>.',
            a: 'Cu<sup>2+</sup> has <i>n</i> = 1 here (Cu<sup>2+</sup> → Cu<sup>+</sup>); meq = 20 × 0.1 = 2.0 meq in 25 mL, so <i>M</i> = 2.0/25 = 0.08 M.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic E · pp. 336–338 ─────────────────────────
  {
    n: 'E',
    title: 'Inside the Permanganate Titration: Lab Facts the Papers Probe',
    extra: true,
    kalam: 'Four further laboratory facts recur as statement-verification questions; none appears in the chapter.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter covers which acid to use (dilute H<sub>2</sub>SO<sub>4</sub>, never HCl or HNO<sub>3</sub>) and the self-indicating endpoint. Four further laboratory facts recur as statement-verification questions; none appears in the chapter.',
      },

      { t: 'part', title: 'Method — the four facts' },
      {
        t: 'p',
        html: '1. <b>The oxalic acid titration is run hot.</b> At room temperature the reaction between MnO<sub>4</sub><sup>−</sup> and oxalate is slow; the flask is heated to about 60 °C before the first addition. (Overheating is avoided — oxalic acid decomposes.)<br>2. <b>The reaction is autocatalytic.</b> The product Mn<sup>2+</sup> catalyses further reduction of permanganate, so after the first slow drops the titration accelerates on its own. This is why “heat initially, then titrate steadily” is the standard instruction.<br>3. <b>Ferrous ammonium sulphate (FAS, Mohr’s salt) titrations are run cold.</b> Heating would accelerate aerial oxidation of Fe<sup>2+</sup> to Fe<sup>3+</sup>, consuming analyte before the titrant reaches it and falsifying the result.<br>4. KMnO<sub>4</sub> <b>is not a primary standard.</b> It always carries traces of MnO<sub>2</sub> and decomposes in light and water, so it must be standardised against a true primary standard — oxalic acid or Mohr’s salt are the usual choices.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Statement Level',
        q: 'Statement I: In the oxalic acid vs KMnO<sub>4</sub> titration (dilute H<sub>2</sub>SO<sub>4</sub> present), the solution is heated to about 60 °C only at the start, but no heating is needed in the FAS vs KMnO<sub>4</sub> titration. Statement II: In the oxalic acid titration, Mn<sup>2+</sup> formed initially catalyses the further reaction; in the FAS titration, heating would oxidise Fe<sup>2+</sup> by air and introduce error. Assess both.',
        steps: [
          'Statement I matches facts 1 and 3 — true. Statement II matches facts 2 and 3 — true, and it correctly explains why each practice is followed.',
        ],
        ans: 'Both statements are true, and Statement II is the correct explanation of Statement I: autocatalysis is why heating is needed only at the start, and air oxidation of Fe<sup>2+</sup> is why the FAS titration is not heated.',
      },
      {
        t: 'ex',
        tag: 'NEET Level — Counting true statements',
        q: 'How many of these are correct? (i) KMnO<sub>4</sub> acts as its own indicator. (ii) In permanganate titrations HCl and HNO<sub>3</sub> are avoided; dilute H<sub>2</sub>SO<sub>4</sub> is used for acidification. (iii) Oxalic acid and Mohr’s salt can serve as primary standards, but KMnO<sub>4</sub> cannot. (iv) In the I<sub>2</sub>–thiosulphate titration the oxidising agent is I<sub>2</sub>.',
        steps: [
          '(i) True — the first excess drop colours the flask pink. (ii) True — HCl is oxidised by permanganate; HNO<sub>3</sub> is itself an oxidant. (iii) True — fact 4 above. (iv) True — iodine takes electrons from thiosulphate (I: 0 → −1).',
        ],
        ans: 'All four are correct.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Why is the oxalic acid–permanganate flask heated before titration but not boiled during it?',
            a: 'Heating to ∼ 60 °C overcomes the slow initial kinetics (after which Mn<sup>2+</sup> autocatalysis takes over); boiling would decompose oxalic acid and give a false titre.',
          },
          {
            q: '[NEET] True or false: KMnO<sub>4</sub> can be used as a primary standard because its solutions are stable indefinitely.',
            a: 'False — KMnO<sub>4</sub> contains MnO<sub>2</sub> traces and decomposes in light/water; it must be standardised (e.g. against oxalic acid).',
          },
          {
            q: '[JEE Main] A student titrates FAS against KMnO<sub>4</sub> after warming the FAS flask to 60 °C. Will the reported iron content be high, low, or unaffected? Explain.',
            a: 'Low — warming accelerates air oxidation of Fe<sup>2+</sup> to Fe<sup>3+</sup>, so less Fe<sup>2+</sup> remains to consume permanganate; the titre falls and the calculated iron content is under-reported.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 338–339 ─────────────────────────
  {
    n: 'F',
    title: 'High-Electron Half-Reactions',
    extra: true,
    kalam: 'Most half-reactions you balance move one to six electrons.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Most half-reactions you balance move one to six electrons. A small set moves seven or eight, and the papers turn them into “find the coefficient (or coefficient difference)” questions. The champion is nitrate reduced all the way to ammonium in basic medium.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Build it exactly as the chapter’s ion-electron method prescribes — balance O with H<sub>2</sub>O, H with the medium’s ions, charge with electrons:<br>NO<sub>3</sub><sup>−</sup> + 7H<sub>2</sub>O + 8e<sup>−</sup> → NH<sub>4</sub><sup>+</sup> + 10OH<sup>−</sup>',
      },
      {
        t: 'p',
        html: 'Check: N balanced; O: 3 + 7 = 10 on both sides; H: 14 = 4 + 10; charge: −1 − 8 = −9 left, +1 − 10 = −9 right. The nitrogen falls from +5 to −3 — an <b>8-electron</b> reduction, one of the largest single-species changes in the Class 11 repertoire. (For contrast, the acid-medium nitrate reductions: NO<sub>3</sub><sup>−</sup> → NO is 3 e<sup>−</sup> with dilute acid, as in Topic 02’s As<sub>2</sub>S<sub>3</sub> balance; NO<sub>3</sub><sup>−</sup> → NO<sub>2</sub> is 1 e<sup>−</sup> with concentrated acid.)',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Numerical Level — The zinc–nitrate question',
        q: 'The reaction NO<sub>3</sub><sup>−</sup> + Zn → Zn<sup>2+</sup> + NH<sub>4</sub><sup>+</sup> occurs in basic medium. When balanced with the smallest whole-number coefficients, find the difference between the coefficients of OH<sup>−</sup> and Zn.',
        steps: [
          'Oxidation half: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>; scale by 4 to match 8 e<sup>−</sup>: 4Zn → 4Zn<sup>2+</sup> + 8e<sup>−</sup>. Add to the reduction half above:<br>4Zn + NO<sub>3</sub><sup>−</sup> + 7H<sub>2</sub>O → 4Zn<sup>2+</sup> + NH<sub>4</sub><sup>+</sup> + 10OH<sup>−</sup>',
          'Coefficients: OH<sup>−</sup> = 10, Zn = 4. Difference = 10 − 4',
        ],
        ans: '6. The trap is forgetting that the question wants a difference, or stopping at the half-reaction’s 8 electrons without completing the molecular balance. (The papers treat this as formal balancing; in real alkali the products are NH<sub>3</sub> and zincate, [Zn(OH)<sub>4</sub>]<sup>2−</sup>.)',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Copper and concentrated nitric acid',
        q: 'Balance in acidic medium: Cu + NO<sub>3</sub><sup>−</sup> → Cu<sup>2+</sup> + NO<sub>2</sub>, and state the coefficient of H<sup>+</sup>.',
        steps: [
          'Reduction: NO<sub>3</sub><sup>−</sup> + 2H<sup>+</sup> + e<sup>−</sup> → NO<sub>2</sub> + H<sub>2</sub>O (N: +5 → +4, 1 e<sup>−</sup>). Oxidation: Cu → Cu<sup>2+</sup> + 2e<sup>−</sup>. Double the reduction half and add:<br>Cu + 2NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> → Cu<sup>2+</sup> + 2NO<sub>2</sub> + 2H<sub>2</sub>O',
        ],
        ans: 'coefficient of H<sup>+</sup> = 4.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] How many electrons does one NO<sub>3</sub><sup>−</sup> ion accept when reduced to NH<sub>4</sub><sup>+</sup> in basic medium? To NO in acidic medium?',
            a: '8 e<sup>−</sup>; 3 e<sup>−</sup>.',
          },
          {
            q: '[JEE Main] Balance: MnO<sub>4</sub><sup>−</sup> + S<sup>2−</sup> → MnO<sub>2</sub> + S in basic medium, and give the coefficient of H<sub>2</sub>O.',
            a: '2MnO<sub>4</sub><sup>−</sup> + 3S<sup>2−</sup> + 4H<sub>2</sub>O → 2MnO<sub>2</sub> + 3S + 8OH<sup>−</sup>; coefficient of H<sub>2</sub>O = 4.',
          },
          {
            q: '[JEE Advanced] In the balanced basic-medium equation Cl<sub>2</sub> → Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup>, find the difference between the coefficients of Cl<sup>−</sup> and H<sub>2</sub>O.',
            a: '3Cl<sub>2</sub> + 6OH<sup>−</sup> → 5Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O; difference = 5 − 3 = 2.',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic G (the book's Summary Checklist) · p. 339 ───────────────
  {
    n: 'G',
    title: 'Summary Checklist',
    extra: true,
    kalam: 'Before the exam, verify you can answer yes to each of the following.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'Before the exam, verify you can answer yes to each of the following:' },

      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: '1. Can you place any two couples from NCERT Table 8.1 on the ladder and immediately state the spontaneous direction, the EMF, and who oxidises whom?<br>2. Can you state what a negative <i>E</i>° means relative to the hydrogen electrode, and use it to predict which metals dissolve in dilute acid?<br>3. Can you decide in ten seconds whether a species can disproportionate (intermediate state, room above and below), and write the three oxoanion disproportionation equations?<br>4. Can you prove a disproportionation is spontaneous using two <i>E</i>° values (<i>E</i>°<sub>cell</sub> > 0)?<br>5. Can you assign combined n-factors — FeC<sub>2</sub>O<sub>4</sub> = 3, Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub> = 6 — and total the equivalents of a mixture?<br>6. Can you run the iodometric chain (analyte → liberated I<sub>2</sub> → thiosulphate) with the right n-factor at each link (I<sub>2</sub> = 2, S<sub>2</sub>O<sub>3</sub><sup>2−</sup> = 1)?<br>7. Can you state the four permanganate lab facts (heat oxalic to ∼ 60 °C, Mn<sup>2+</sup> autocatalysis, FAS kept cold, KMnO<sub>4</sub> not a primary standard)?<br>8. Can you build the 8-electron NO<sub>3</sub><sup>−</sup> → NH<sub>4</sub><sup>+</sup> half-reaction in basic medium and extract coefficient differences from the balanced equation?',
      },
    ],
  },

  // ─────────────── Additional topic H (the book's Addendum P) · pp. 340–344 ───────────────
  {
    n: 'H',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Past JEE Main questions (2020–2025) and NEET-style items on this chapter fall into six clear territories.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Past JEE Main questions (2020–2025) and NEET-style items on this chapter fall into six clear territories.',
      },
      {
        t: 'table',
        title: null,
        head: ['Sub-topic', 'Typical question forms', 'Weight'],
        rows: [
          [
            'Oxidation numbers: assign, order, exceptions',
            'Nitrogen oxides, polythionic acids, the brown-ring complex, peroxides and superoxides',
            '<b>Highest</b>',
          ],
          [
            'Oxidant/reductant identification and capability (both roles, oxidant only)',
            'Oxoacids and hydrides at intermediate versus maximum oxidation states',
            '<b>High</b>',
          ],
          [
            'Balancing: coefficients, electron counts, medium',
            'Coefficients of Fe<sup>2+</sup> and H<sup>+</sup>, OH<sup>−</sup> minus Zn, equivalents per mole of oxidant',
            '<b>High</b>',
          ],
          [
            'Titration arithmetic (direct, mixture, iodometric)',
            'Oxalic acid versus permanganate, ferrous oxalate, salt mixtures, peroxide and dichromate by iodometry',
            '<b>Highest</b>',
          ],
          [
            'Disproportionation and classification',
            'Chlorine oxoanions, which species can disproportionate, reaction-type identification',
            '<b>Moderate</b>',
          ],
          [
            'Cells, EMF, strongest oxidant, lab statements',
            'Strongest oxidising or reducing agent, salt-bridge role, heating and primary-standard statements',
            '<b>Moderate</b>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for you:</b> the single most-marked skill is arithmetic with equivalents — n-factors, mixtures, and iodometric chains — followed closely by oxidation-number fluency. Pure conceptual questions (strongest oxidant, salt-bridge role, disproportionation definition) are short and frequent; they reward drilled instant answers, not long reasoning.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. “Find the oxidation number / arrange in order”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A lone species or a list — NO, N<sub>2</sub>O, NO<sub>2</sub>, N<sub>2</sub>O<sub>3</sub>; S in polythionic acids; Fe in the brown-ring complex (answer +1, with NO as NO<sup>+</sup>).',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> charge-balance with the exception sweep first. For ordering questions, compute all values — never guess from the formula shapes. The nitrogen oxides run +1, +2, +3, +4 in exactly the order N<sub>2</sub>O < NO < N<sub>2</sub>O<sub>3</sub> < NO<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'O.N. of N: N<sub>2</sub>O: 2<i>x</i> − 2 = 0 ⇒ <i>x</i> = +1; NO: <i>x</i> = +2; N<sub>2</sub>O<sub>3</sub>: 2<i>x</i> − 6 = 0 ⇒ <i>x</i> = +3; NO<sub>2</sub>: <i>x</i> = +4.',
        steps: ['Increasing order: N<sub>2</sub>O < NO < N<sub>2</sub>O<sub>3</sub> < NO<sub>2</sub>.'],
        ans: '',
      },
      { t: 'p', html: '<b>2. “Which can act as both oxidising and reducing agent?”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Four oxoacids or hydrides — HNO<sub>2</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>2</sub>O<sub>2</sub>; or “can act only as oxidising agent”.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> the central atom must be in an <b>intermediate</b> oxidation state. H<sub>3</sub>PO<sub>4</sub> (P at +5, the ceiling) is the standard answer to “cannot do both”; HNO<sub>3</sub> (N at +5) is the standard answer to “oxidant only.” H<sub>2</sub>O<sub>2</sub>, HNO<sub>2</sub>, SO<sub>2</sub>, H<sub>2</sub>SO<sub>3</sub> are the standard “both” answers.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'HNO<sub>3</sub>: N = +5, maximum — cannot be oxidised further, so it can only accept electrons: <b>only an oxidising agent</b>.',
        steps: [
          'H<sub>3</sub>PO<sub>3</sub> (P +3), H<sub>2</sub>SO<sub>3</sub> (S +4), H<sub>2</sub>O<sub>2</sub> (O −1) all sit at intermediate states and do both.',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>3. “Coefficient / electron count without full balancing”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “In the balanced reaction of MnO<sub>4</sub><sup>−</sup> with Fe<sup>2+</sup> in acid, the coefficients of Fe<sup>2+</sup> and H<sup>+</sup> are” (answer: 5 and 8); “difference of coefficients of OH<sup>−</sup> and Zn” (answer: 6); “equivalents per mole of MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> in the ratio” (answer: 5 : 6); “relation among a, b, c, x, y, z”.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> electron count first, LCM second, water and H<sup>+</sup>/OH<sup>−</sup> last. Never balance the whole equation when one coefficient is wanted.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'For <i>a</i>Fe<sup>2+</sup> + <i>b</i>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + <i>c</i>H<sup>+</sup> → <i>x</i>Fe<sup>3+</sup> + <i>y</i>Cr<sup>3+</sup> + <i>z</i>H<sub>2</sub>O, the balanced form is 6, 1, 14, 6, 2, 7.',
        steps: [
          'Then <i>a</i> = <i>x</i> (6 = 6), <i>z</i> = 7<i>b</i> (7 = 7), <i>c</i> = 2<i>z</i> (14 = 14), so all three relations hold.',
        ],
        ans: '',
      },
      { t: 'p', html: '<b>4. Titration arithmetic — direct, mixture, and iodometric</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Volumes and normalities with an n-factor buried in the chemistry — oxalic vs permanganate (62.5 mL; 0.1264 g per 100 mL), ferrous oxalate (6 mL), the four-salt mixture (2 mol), peroxide by iodometry (100<i>x</i> = 16), dichromate liberating iodine (3 mol).',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> one line — meq<sub>ox</sub> = meq<sub>red</sub> — with correct n-factors. For mixtures, sum equivalents per component. For iodometry, the chain rule of Addendum D.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: '25 mL of 0.1 M KMnO<sub>4</sub> in acid carries 25 × 0.1 × 5 = 12.5 meq; 0.1 M oxalic acid is 0.2 N; <i>V</i> = 12.5/0.2 = 62.5 mL.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>5. Statement verification on lab practice and oxidation-state facts</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two-statement and count-the-correct-statements formats: heating practice, self-indicator, primary standards, hydrogen’s states in hydrides, oxygen’s ceiling at +2.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> these are pure fact checks against Addendum E and the chapter’s exception list. Mark each statement true/false on its own before reading the options.',
      },
      {
        t: 'ex',
        tag: 'Worked example (assertion–reason)',
        q: 'A: oxygen shows at most +2 (in OF<sub>2</sub>) — true. R: oxygen is the most electronegative element of group 16 — true.',
        steps: [
          'But R does not explain A: oxygen can take a positive oxidation number only when bonded to the one element more electronegative than itself, fluorine — hence +2 in OF<sub>2</sub> is its maximum. Being the most electronegative element of group 16 says nothing about that, so R is true but not the correct explanation of A.',
        ],
        ans: '',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Trap 1: Reading a fractional oxidation state as per-atom truth.</b> Polythionic acids and tetrathionate-type species give fractional averages (+2.5 for S<sub>4</sub>O<sub>6</sub><sup>2−</sup>); the real per-atom values are whole numbers (+5, 0, 0, +5). Common wrong options such as “+6 only” or “+5 only” are both wrong because the sulphurs are non-equivalent.',
          '<b>Trap 2: Dropping one oxidation contribution in a dual-site salt.</b> FeC<sub>2</sub>O<sub>4</sub> needs 3 equivalents per mole, not 1 (iron) or 2 (oxalate). Questions on ferrous oxalate and on salt mixtures are built on this; so is the ferric-oxalate contrast (Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>: iron contributes nothing, <i>n</i> = 6 from oxalate alone).',
          '<b>Trap 3: Swapping the iodometric n-factors.</b> I<sub>2</sub> is a 2-electron species; thiosulphate is 1-electron. Inverting them doubles or halves every iodometric answer. Anchor: 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> per I<sub>2</sub>.',
          '<b>Trap 4: Treating permanganate’s electron count as fixed.</b> 5 in acid (Mn<sup>2+</sup>), 3 in neutral or weakly alkaline (MnO<sub>2</sub>), 1 in strong base (MnO<sub>4</sub><sup>2−</sup>). Questions test exactly this: “change in oxidation of Mn is 3” tells you the medium was neutral or weakly alkaline.',
          '<b>Trap 5: Inverting the potential–strength link.</b> Most positive <i>E</i>° = strongest <b>oxidising</b> agent (the ion); most negative = strongest <b>reducing</b> agent (the metal). Exam questions hand you the reversed distractor both ways.',
          '<b>Trap 6: Hydrogen is +1 “always.”</b> In metal hydrides (NaH, CaH<sub>2</sub>) hydrogen is −1 as the hydride ion H<sup>−</sup> — one question tests three true statements together with a false fourth (“hydrogen is always less electronegative than metals” — false; at 2.20, hydrogen exceeds most metals).',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The oxidation number of Fe in [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]SO<sub>4</sub> (brown-ring complex, NO present as NO<sup>+</sup>) is: (a) +2 (b) +1 (c) +3 (d) +4.',
            a: '(b). The complex cation carries +2 (sulphate is −2); water is neutral and NO contributes +1, so Fe = +1.',
          },
          {
            q: '[Easy] In the titration of I<sub>2</sub> with Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>, the product containing sulphur is: (a) SO<sub>2</sub> (b) Na<sub>2</sub>SO<sub>4</sub> (c) Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub> (d) H<sub>2</sub>S.',
            a: '(c). Thiosulphate is oxidised to tetrathionate, S<sub>4</sub>O<sub>6</sub><sup>2−</sup> — the signature of the iodometric endpoint.',
          },
          {
            q: '[Easy] Given <i>E</i>°(Li<sup>+</sup>/Li) = −3.05 V and <i>E</i>°(F<sub>2</sub>/F<sup>−</sup>) = +2.87 V, the strongest reducing agent is: (a) Li<sup>+</sup> (b) Li (c) F<sub>2</sub> (d) F<sup>−</sup>.',
            a: '(b). The most negative reduction potential belongs to the couple whose reduced form most readily donates electrons — lithium metal.',
          },
          {
            q: '[Moderate] 20 mL of 0.02 M oxalic acid is titrated with KMnO<sub>4</sub> in hot acidic medium; the endpoint comes at 20 mL. The strength of the KMnO<sub>4</sub> solution in g per 100 mL is: (a) 0.1264 (b) 1.264 (c) 0.08 (d) 0.008.',
            a: '(a). meq oxalic = 20 × 0.02 × 2 = 0.8 meq; <i>N</i>(KMnO<sub>4</sub>) = 0.8/20 = 0.04 N, <i>M</i> = 0.008 M; per 100 mL: 0.008 × 158 × 0.1 = 0.1264 g.',
          },
          {
            q: '[Moderate] Which species does not disproportionate? (a) ClO<sup>−</sup> (b) ClO<sub>2</sub><sup>−</sup> (c) ClO<sub>3</sub><sup>−</sup> (d) ClO<sub>4</sub><sup>−</sup>.',
            a: '(d). Cl in ClO<sub>4</sub><sup>−</sup> is at +7, its maximum — no higher state available (NCERT Problem 8.5).',
          },
          {
            q: '[Moderate] One mole of acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> with excess KI liberates how many moles of I<sub>2</sub>? (a) 6 (b) 1 (c) 7 (d) 3.',
            a: '(d). 6 equivalents of oxidising power ÷ 2 electrons per I<sub>2</sub> = 3 mol.',
          },
          {
            q: '[Moderate] Statement I: In oxalic acid vs KMnO<sub>4</sub>, the flask is heated to ∼ 60 °C only initially. Statement II: The Mn<sup>2+</sup> produced acts as an autocatalyst. (a) Both true, II explains I (b) Both true, II does not explain I (c) I true, II false (d) I false, II true.',
            a: '(a). Heating is needed only to start the slow reaction; once Mn<sup>2+</sup> accumulates it catalyses the rest — precisely why prolonged heating is unnecessary.',
          },
          {
            q: '[Hard] What volume of 0.1 M KMnO<sub>4</sub> oxidises 144 mg of FeC<sub>2</sub>O<sub>4</sub> (<i>M</i> = 144) in acidic medium? (a) 2 mL (b) 4 mL (c) 6 mL (d) 8 mL.',
            a: '(c). 1 mmol of FeC<sub>2</sub>O<sub>4</sub> gives 3 meq (Fe: 1, oxalate: 2); permanganate is 0.5 N; <i>V</i> = 3/0.5 = 6 mL.',
          },
          {
            q: '[Hard] For NO<sub>3</sub><sup>−</sup> + Zn → Zn<sup>2+</sup> + NH<sub>4</sub><sup>+</sup> in basic medium (smallest whole-number coefficients), the difference between the coefficients of OH<sup>−</sup> and Zn is: (a) 4 (b) 6 (c) 8 (d) 10.',
            a: '(b). 4Zn + NO<sub>3</sub><sup>−</sup> + 7H<sub>2</sub>O → 4Zn<sup>2+</sup> + NH<sub>4</sub><sup>+</sup> + 10OH<sup>−</sup>; 10 − 4 = 6.',
          },
          {
            q: '[Hard] The equivalent ratio of MnO<sub>4</sub><sup>−</sup> to Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> per mole in acidic medium is: (a) 1 : 1 (b) 1 : 5 (c) 5 : 6 (d) 6 : 1.',
            a: '(c). Permanganate accepts 5 e<sup>−</sup> (Mn<sup>2+</sup>); dichromate accepts 6 (2 × +6 → +3). Equivalents per mole: 5 and 6.',
          },
          {
            q: '[Hard] How many statements are correct? (i) KMnO<sub>4</sub> is self-indicating. (ii) HCl is avoided in permanganate titrations because Cl<sup>−</sup> is oxidised. (iii) Oxalic acid can be a primary standard; KMnO<sub>4</sub> cannot. (iv) The oxalic acid titration is started hot. (a) 2 (b) 3 (c) 4 (d) 1.',
            a: '(c). All four are correct — see Addendum E.',
          },
          {
            q: '[Hard] 25 mL of H<sub>2</sub>O<sub>2</sub> solution with excess acidified KI liberates iodine that needs 40 mL of 0.1 N thiosulphate. The normality of the peroxide is: (a) 0.16 N (b) 0.08 N (c) 0.32 N (d) 0.04 N.',
            a: '(a). meq = 4.0 in 25 mL; <i>N</i> = 4.0/25 = 0.16 N.',
          },
        ],
      },

      { t: 'part', title: 'Gaps This Addendum Closes' },
      {
        t: 'p',
        html: 'Three skills that the papers assume are absent from, or only touched lightly in, the main chapter: the standard electrode potential table as a ranking and feasibility instrument (NCERT Table 8.1 with its hydrogen-electrode convention); the iodometric titration family — thiosulphate, liberated iodine, and the assays built on it — which appears in papers as routine arithmetic; and the laboratory conditions of permanganate titrations (heating, autocatalysis, primary-standard status) that statement-verification questions test verbatim. Addenda A, D, and E above close exactly these gaps.',
      },
    ],
  },
];
