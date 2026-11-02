import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 01 to 04: pp. 296–326 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s title page (p. 295) and contents
 * (top of p. 296) are not copied. Topic 01, Classical & Electronic Concepts
 * and Oxidation Numbers (starts under the contents on p. 296, ends p. 304),
 * Topic 02, Balancing Redox Equations (pp. 305–312), Topic 03, Redox
 * Titrations & Electrochemical Cells (pp. 313–319), and Topic 04, Types of
 * Redox Reactions & Redox in Action (pp. 320–326), are each split at their
 * Sections 1 to 8. The book’s “7.1” … “7.4” cross-references are rewritten to
 * the app’s Topic 01 … 04. Figures 7.1 (cited p. 299, drawn p. 300), 7.2
 * (cited p. 301, drawn p. 302), 7.3 (cited p. 309, drawn p. 310) and 7.4
 * (cited p. 316, drawn p. 317) each sit inside a worked example, so each is
 * that example’s `fig`; they are redrawn in lib/diagrams/chemistry-11-07.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 296–304 ─────────────────────────
  {
    n: '01',
    title: 'Classical & Electronic Concepts and Oxidation Numbers',
    kalam: 'There is no “giving” floating around without a “taker.”',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scorer. CBSE Boards ask 1–2 marks on assigning oxidation numbers and identifying oxidant/reductant. NEET reliably places 1 question (often “find the O.N.” or “which is a redox reaction”). JEE Main asks O.N. in peroxo/complex species; JEE Advanced exploits fractional/average O.N. and structure-based reasoning. Master this and the rest of the chapter (balancing, titrations, electrochemistry) becomes mechanical.',
      },
      {
        t: 'p',
        html: 'Imagine a busy <b>kirana shop</b> at the end of the day. The shopkeeper hands over a packet of dal to a customer and, in the very same motion, the customer’s cash lands in the shopkeeper’s drawer. You cannot have a sale without a purchase — the two events are a single, inseparable transaction. Chemical reactions called <b>redox reactions</b> work exactly like this: every time one species gives away something, another species takes it at the same instant. There is no “giving” floating around without a “taker.”',
      },
      {
        t: 'p',
        html: 'What is being handed over? Chemists have looked at this same transaction through <b>three different lenses</b>, each more powerful than the last.',
      },
      {
        t: 'p',
        html: '<b>Lens 1 — the classical (oxygen/hydrogen) view.</b> The oldest idea: oxidation is the <b>addition of oxygen</b> or <b>removal of hydrogen</b>, and reduction is the reverse. When magnesium burns, 2Mg + O<sub>2</sub> → 2MgO — magnesium has been oxidised because oxygen was added to it. When copper oxide is heated with coke, CuO + C → Cu + CO — the copper oxide has been reduced because oxygen was removed. This view is intuitive but narrow.',
      },
      {
        t: 'p',
        html: '<b>Lens 2 — the electronic view.</b> The classical view collapses the moment a reaction has no oxygen or hydrogen in it at all. Consider Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu. No oxygen, no hydrogen — yet chemically this feels like burning zinc. The deeper truth is <b>electron transfer</b>: zinc loses two electrons (oxidation), and the copper ion gains them (reduction). This is where the legendary mnemonic lives: <b>OIL RIG</b> — Oxidation Is Loss, Reduction Is Gain (of electrons).',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a game of kabaddi. The raider (the <b>reductant</b>) charges in and “loses” himself into enemy territory, while a defender (the <b>oxidant</b>) grabs him. The raider is oxidised (loses electrons); the defender is reduced (gains them). Crucially, the agent that causes the other to react ends up doing the opposite to itself — <b>an oxidising agent gets reduced, a reducing agent gets oxidised.</b> Generous donors get poorer; greedy grabbers get richer.',
      },
      {
        t: 'p',
        html: '<b>Lens 3 — the oxidation-number view.</b> Now comes the snag that forces us to invent something new. In a molecule like CO<sub>2</sub>, electrons are shared in covalent bonds, not fully transferred. So who “lost” and who “gained”? To keep a tidy ledger even when no clean transfer happens, chemists invented the <b>oxidation number (O.N.)</b>: a hypothetical charge an atom would carry <b>if every bonding pair were awarded entirely to the more electronegative atom.</b> It is book-keeping, not physical reality — but it is the single most useful tool in the whole chapter, because it lets us label oxidation and reduction in any reaction, ionic or covalent. In this language: <b>oxidation = increase in O.N.; reduction = decrease in O.N.</b>',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three cautions. (1) O.N. is not the real charge on an atom and not the same as valency — valency is a magnitude with no sign, while O.N. carries a sign and can even be fractional. (2) The “more electronegative atom takes the electrons” rule is an arbitrary convention; for a bond between two identical atoms (like the S–S bond in a polythionate), the pair is split equally, giving zero contribution. (3) A fractional O.N. is never a real per-atom charge — it is only an <b>average</b>, and the true picture is revealed only by the structure.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'There are no “formulas” in the algebraic sense here — the engine is one rule plus a set of conventions.',
      },
      {
        t: 'formula',
        kicker: 'The master relation (charge-balance rule)',
        main: '∑<sub>all atoms</sub> (O.N.) = net charge on the species',
        legend: ['O.N. = oxidation number'],
        note: null,
      },
      {
        t: 'p',
        html: 'For a neutral molecule the sum is 0; for an ion it equals the ionic charge.',
      },
      {
        t: 'p',
        html: '<b>Core definitions:</b><br>• <b>Oxidation:</b> addition of O / removal of H <b>/ loss of electrons / increase in O.N.</b><br>• <b>Reduction:</b> removal of O / addition of H / <b>gain of electrons / decrease in O.N.</b><br>• <b>Oxidising agent (oxidant):</b> a species that increases the O.N. of another; it is itself reduced (gains electrons). Examples: KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, O<sub>3</sub>, HNO<sub>3</sub>.<br>• <b>Reducing agent (reductant):</b> a species that decreases the O.N. of another; it is itself oxidised (loses electrons). Examples: active metals, H<sub>2</sub>S, I<sup>−</sup>.<br>• <b>Redox reaction:</b> any reaction in which the O.N. of at least one element changes.<br>• <b>Disproportionation:</b> a special redox in which the <b>same element in a single intermediate O.N.</b> is simultaneously oxidised and reduced (it needs an element that has a higher and a lower accessible state).',
      },
      {
        t: 'p',
        html: '<b>Units & nature of the quantity:</b> Oxidation number is <b>dimensionless</b> (a pure number with a sign). It has no SI unit. It may be positive, negative, zero, a whole number, or fractional.',
      },
      {
        t: 'p',
        html: '<b>Quick reference — usual O.N. values:</b> Group 1 metals = +1; Group 2 metals = +2; Al = +3; F = −1 (always); H = +1 (but −1 in metal hydrides); O = −2 (but −1 in peroxides, −½ in superoxides, +2 in OF<sub>2</sub>, +1 in O<sub>2</sub>F<sub>2</sub>).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic has no formal derivation, so here is the <b>rule set</b> and the <b>reasoning</b> behind each rule, followed by the master procedure.',
      },
      {
        t: 'proc',
        title: 'The assignment rules — and why they hold',
        steps: [
          '<b>Free element → O.N. = 0.</b> An uncombined atom has neither donated nor accepted anything, so by definition its ledger is balanced at zero. This holds no matter how big the molecule — sulphur in S<sub>8</sub>, phosphorus in P<sub>4</sub>, oxygen in O<sub>3</sub> are all 0.',
          '<b>Monatomic ion → O.N. = its charge.</b> Here the “hypothetical charge” is the real charge, because there is nothing to share with. Na<sup>+</sup> → +1, O<sup>2−</sup> → −2.',
          '<b>Fluorine is always −1 in compounds.</b> It is the most electronegative element in existence, so it always wins every bonding pair. No exceptions.',
          '<b>Oxygen is usually −2.</b> Reasoning: oxygen is second only to fluorine in electronegativity, so it normally takes the electrons. Exceptions arise only when oxygen is bonded to itself or to fluorine: in peroxides (O–O link, e.g. H<sub>2</sub>O<sub>2</sub>) each O is −1 because the shared O–O pair splits evenly; in superoxides (KO<sub>2</sub>) it is −½; bonded to fluorine (OF<sub>2</sub>) oxygen is forced positive, +2.',
          '<b>Hydrogen is usually +1.</b> It is less electronegative than most non-metals, so it loses its share. <b>Exception:</b> in <b>metal hydrides</b> (NaH, CaH<sub>2</sub>) the metal is even less electronegative, so hydrogen wins and becomes −1.',
          '<b>Charge-balance closes the system.</b> The signed O.N. values of all atoms must sum to the species’ charge (Rule from Key definitions and properties). This single equation is what lets you solve for any one unknown O.N.',
        ],
      },
      {
        t: 'proc',
        title: 'The master procedure (solve for an unknown O.N.)',
        steps: [
          '<b>Step 1 — Write the species and its net charge.</b> A neutral molecule sums to 0; an ion sums to its charge.',
          '<b>Step 2 — Plug in every known O.N.</b> using rules 1–5, multiplied by how many of each atom there are.',
          '<b>Step 3 — Let the unknown be <i>x</i></b> and write the charge-balance equation.',
          '<b>Step 4 — Solve algebraically.</b> Watch the signs — this is where most marks are lost.',
          '<b>Step 5 — Sanity-check against the structure</b> if the answer is fractional or unusually high. A fraction signals a <b>mixed/average</b> state; consult the bonding (peroxide links, coordinate bonds, S–S bonds) to recover the real per-atom values.',
        ],
      },
      {
        t: 'p',
        html: '<b>Worked logic on a peroxo trap (why structure matters):</b> For H<sub>2</sub>SO<sub>5</sub> (Caro’s acid), blindly using O = −2 for all five oxygens gives sulphur an impossible +8 (S can go no higher than +6). The structure reveals <b>one peroxide linkage</b> (two O at −1); using three O at −2 and two O at −1 returns the correct +6. The rule didn’t fail — the blanket assumption did.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Identify the substance oxidised, the substance reduced, the oxidant and the reductant in:<br>4Al(s) + 3MnO<sub>2</sub>(s) → 2Al<sub>2</sub>O<sub>3</sub>(s) + 3Mn(s)',
        steps: [
          '<b>Step 1 — Assign O.N.</b> In Al (free element): 0. In MnO<sub>2</sub>: O is −2, so <i>x</i> + 2(−2) = 0 ⇒ <i>x</i> = +4 for Mn. In Al<sub>2</sub>O<sub>3</sub>: O is −2, so 2<i>x</i> + 3(−2) = 0 ⇒ <i>x</i> = +3 for Al. In Mn (free element): 0.',
          '<b>Step 2 — Track the changes.</b><br>• Al: 0 → +3 — <b>increase</b> in O.N. ⇒ <b>oxidised</b>.<br>• Mn: +4 → 0 — <b>decrease</b> in O.N. ⇒ <b>reduced</b>.',
          '<b>Step 3 — Name the agents.</b> Aluminium drives the reduction of manganese, so <b>Al is the reducing agent</b>; MnO<sub>2</sub> drives the oxidation of aluminium, so <b>MnO<sub>2</sub> is the oxidising agent</b>.',
        ],
        ans: 'Al is oxidised (reductant); Mn (in MnO<sub>2</sub>) is reduced (MnO<sub>2</sub> is the oxidant).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Arrange in increasing oxidation state of chlorine: HCl, Cl<sub>2</sub>, HClO, HClO<sub>3</sub>, HClO<sub>4</sub>.',
        steps: [
          '<b>The trap:</b> students reflexively write “Cl = −1” everywhere. But the moment chlorine bonds to oxygen, it is forced <b>positive</b>.',
          '<b>Speed method — count the oxygens (each O drags Cl up by 2 after accounting for H):</b><br>• Cl<sub>2</sub>: free element ⇒ 0<br>• HCl: +1 + <i>x</i> = 0 ⇒ <i>x</i> = −1<br>• HClO: +1 + <i>x</i> − 2 = 0 ⇒ <i>x</i> = +1<br>• HClO<sub>3</sub>: +1 + <i>x</i> − 6 = 0 ⇒ <i>x</i> = +5<br>• HClO<sub>4</sub>: +1 + <i>x</i> − 8 = 0 ⇒ <i>x</i> = +7',
          '<b>Why it’s fast:</b> you never need full arithmetic — once you spot the rising oxygen count in the oxoacids, the order is fixed. <b>Two-second sanity check:</b> the free element (Cl<sub>2</sub>) must sit at exactly 0, between the negative hydride and the positive oxoacids.',
        ],
        ans: 'HCl(−1) < Cl<sub>2</sub>(0) < HClO(+1) < HClO<sub>3</sub>(+5) < HClO<sub>4</sub>(+7).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'c11-07-fig-7.1',
        q: 'A student calculates the oxidation number of chromium in chromium pentoxide, CrO<sub>5</sub>, as +10. Explain the error and find the correct value. Use this to predict whether CrO<sub>5</sub> can act as an oxidising agent. (This links O.N. assignment with the peroxide-structure concept and with redox-agent behaviour.)',
        steps: [
          '<b>The student’s error:</b> taking all five oxygens as −2 gives <i>x</i> + 5(−2) = 0 ⇒ <i>x</i> = +10. But the maximum possible O.N. of Cr is +6 (its group-based limit), so +10 is chemically impossible — a red flag that the oxygen-assignment is wrong.',
          '<b>Correct treatment:</b> CrO<sub>5</sub> has a <b>butterfly structure</b> with <b>two peroxide (O–O) linkages</b> (four oxygens at −1) and <b>one doubly-bonded oxo oxygen</b> at −2.<br><i>x</i> + 4(−1) + 1(−2) = 0 ⇒ <i>x</i> − 6 = 0',
          '<b>Redox prediction:</b> chromium sits at its <b>highest</b> accessible O.N. (+6). An atom already in its maximum state cannot be oxidised further — it can only be reduced. Therefore <b>CrO<sub>5</sub> acts only as an oxidising agent</b> (as far as chromium is concerned; its peroxide oxygens, at −1, can still be oxidised to O<sub>2</sub>).',
        ],
        ans: 'Correct O.N. of Cr = +6; the +10 error came from ignoring peroxide linkages. CrO<sub>5</sub> is an oxidant only.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'c11-07-fig-7.2',
        q: 'The oxidation number of sulphur in sodium tetrathionate, Na<sub>2</sub>S<sub>4</sub>O<sub>6</sub>, works out to +2.5 on average. Show how the structure resolves this into whole-number states for the individual sulphur atoms, and state the O.N. of each.',
        steps: [
          '<b>Step 1 — the average.</b> With Na = +1 and O = −2:<br>2(+1) + 4<i>x</i> + 6(−2) = 0 ⇒ 4<i>x</i> = +10 ⇒ <i>x</i> = +2.5<br>This fraction is a warning: +2.5 is not a real charge on any sulphur — it is an average of unequal atoms.',
          '<b>Step 2 — bring in the structure.</b> The tetrathionate ion is a <b>chain of four sulphurs</b>: two <b>terminal</b> S atoms, each bonded to three oxygens and one central S; and two <b>central</b> S atoms joined to each other and to the terminal S by <b>S–S bonds</b>.',
          '<b>Step 3 — apply the equal-split rule to S–S bonds.</b> In a bond between two identical atoms, the shared pair is divided equally, contributing <b>zero</b> to each. So:<br>• <b>Central S atoms:</b> they bond only to other sulphurs (S–S). With no electronegative partner to lose electrons to, each central S has <b>O.N.</b> = 0.<br>• <b>Terminal S atoms:</b> each is effectively like the sulphur in a sulphonate environment, bonded to three oxygens and one (neutral-contribution) sulphur. Solving for the terminal sulphur gives <b>O.N.</b> = +5 each.',
          '<b>Step 4 — verify the average.</b> (2(+5) + 2(0))/4 = +10/4 = +2.5 ✓ — consistent with Step 1.',
        ],
        ans: 'Two terminal sulphurs at +5 and two central sulphurs at 0; the +2.5 is merely their average, never a physical per-atom value.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Determine the oxidation number of manganese in KMnO<sub>4</sub> and in K<sub>2</sub>MnO<sub>4</sub>, and state which manganese species is in its higher oxidation state.',
            a: 'KMnO<sub>4</sub> = +7, K<sub>2</sub>MnO<sub>4</sub> = +6; Mn is higher in KMnO<sub>4</sub>.',
          },
          {
            q: '[NEET] In which of the following does nitrogen show its lowest oxidation number: NO<sub>2</sub>, N<sub>2</sub>O, NH<sub>3</sub>, HNO<sub>3</sub>?',
            a: 'NH<sub>3</sub> (−3).',
          },
          {
            q: '[JEE Main] Calculate the oxidation number of phosphorus in hypophosphorous acid H<sub>3</sub>PO<sub>2</sub> and in pyrophosphoric acid H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>.',
            a: 'H<sub>3</sub>PO<sub>2</sub> = +1; H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> = +5.',
          },
          {
            q: '[JEE Main] H<sub>2</sub>O<sub>2</sub> converts KIO<sub>4</sub> to KIO<sub>3</sub> in one reaction and reduces Cl<sub>2</sub> to Cl<sup>−</sup> while being converted to O<sub>2</sub> in another. State the role (oxidant/reductant) of H<sub>2</sub>O<sub>2</sub> in each.',
            a: 'With KIO<sub>4</sub>: reducing agent (it lowers I from +7 to +5); with Cl<sub>2</sub>: reducing agent (it is oxidised to O<sub>2</sub> while Cl<sub>2</sub> is reduced).',
          },
          {
            q: '[JEE Advanced] The thiosulphate ion S<sub>2</sub>O<sub>3</sub><sup>2−</sup> gives an average sulphur O.N. of +2. Using its structure (one S replaces a terminal O of sulphate via a coordinate-type linkage), assign the O.N. of the two non-equivalent sulphur atoms.',
            a: 'Central (sulphate-position) S = +6; the substituent (donor) S = −2; average = +2. (This treats the S–S link as coordinate, with both electrons on the outer S. By the equal-split rule of worked example 4 the same structure gives +5 and −1; the average is +2 either way.)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is NOT a redox reaction?',
        opts: [
          {
            label: '2H<sub>2</sub>S + SO<sub>2</sub> → 3S + 2H<sub>2</sub>O',
            nudge: '<b>(a)</b> S goes from −2 (in H<sub>2</sub>S) and +4 (in SO<sub>2</sub>) both to 0 — a redox (comproportionation), tempting because no metal is involved.',
          },
          { label: 'BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + 2NaCl', nudge: null },
          {
            label: 'Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>',
            nudge: '<b>(c)</b> Zn: 0 → +2, H: +1 → 0 — clearly redox; some skip it thinking “acid + metal is just displacement.”',
          },
          {
            label: '2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>',
            nudge: '<b>(d)</b> Cl: +5 → −1 and O: −2 → 0 — an intramolecular redox decomposition; students wrongly assume decompositions are never redox.',
          },
        ],
        correct: 1,
        solution: 'No element changes O.N. — Ba stays +2, Cl stays −1, Na stays +1, S stays +6, O stays −2. It is a double-displacement (precipitation), not redox.',
      },
      {
        t: 'mcq',
        q: 'The oxidation number of the named atom is correctly given in:',
        opts: [
          {
            label: 'S in Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> = +2 for both S',
            nudge: '<b>(a)</b> the average is +2, but the two sulphurs are non-equivalent (+6 and −2); “+2 for both” is the fractional-literal trap.',
          },
          {
            label: 'O in OF<sub>2</sub> = −2',
            nudge: '<b>(b)</b> bonded to fluorine, oxygen is forced positive (+2), not −2 — the most common oxygen exception missed.',
          },
          { label: 'H in CaH<sub>2</sub> = −1', nudge: null },
          {
            label: 'Cl in HClO<sub>4</sub> = −1',
            nudge: '<b>(d)</b> chlorine in an oxoacid is positive (+7), not −1; the “Cl is always −1” reflex.',
          },
        ],
        correct: 2,
        solution: 'In a metal hydride, the metal is less electronegative than H, so hydrogen is −1.',
      },
      {
        t: 'mcq',
        q: 'In which reaction does the species undergo disproportionation?',
        opts: [
          { label: 'Cl<sub>2</sub> + 2NaOH → NaCl + NaOCl + H<sub>2</sub>O', nudge: null },
          { label: 'Zn + CuSO<sub>4</sub> → ZnSO<sub>4</sub> + Cu', nudge: '<b>(b)</b> is a displacement (two different elements change).' },
          { label: 'MnO<sub>4</sub><sup>−</sup> + Fe<sup>2+</sup> → Mn<sup>2+</sup> + Fe<sup>3+</sup>', nudge: '<b>(c)</b> is an ordinary inter-species redox.' },
          { label: 'C + O<sub>2</sub> → CO<sub>2</sub>', nudge: '<b>(d)</b> is a combination redox.' },
        ],
        correct: 0,
        solution: 'Chlorine starts at 0 and ends up both at −1 (in NaCl) and +1 (in NaOCl) — the same element simultaneously oxidised and reduced. None involve one element splitting into a higher and lower state.',
      },
      {
        t: 'mcq',
        q: 'A species in which the central atom is already in its highest oxidation state can act:',
        opts: [
          { label: 'only as a reducing agent', nudge: '<b>(a)</b> reverses the logic.' },
          { label: 'only as an oxidising agent', nudge: null },
          {
            label: 'both as an oxidising and reducing agent',
            nudge: '<b>(c)</b> describes an intermediate state (like HNO<sub>2</sub>, N at +3), not a maximum one.',
          },
          { label: 'as neither', nudge: '<b>(d)</b> is wrong because reduction is always available.' },
        ],
        correct: 1,
        solution: 'At the maximum O.N. the atom cannot be oxidised further (no higher state to reach); it can only gain electrons and be reduced, hence oxidant only — e.g. S in H<sub>2</sub>SO<sub>4</sub> (+6), Mn in KMnO<sub>4</sub> (+7).',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Sign slips in the charge-balance equation.</b> Writing +1 + <i>x</i> − 6 = −1 and then “solving” to <i>x</i> = +6 instead of +4 is the single biggest source of lost marks.',
          '<b>Forgetting the oxygen and hydrogen exceptions.</b> Applying O = −2 inside H<sub>2</sub>O<sub>2</sub> or H = +1 inside NaH gives nonsense. Always scan the formula for peroxide/superoxide/fluoride/hydride flags first.',
          '<b>Reading a fractional O.N. as physical reality.</b> +2.5 in S<sub>4</sub>O<sub>6</sub><sup>2−</sup> is an average, not a charge any single S carries.',
          '<b>Confusing the agent with what happens to it.</b> The <b>oxidising agent is the one that gets reduced.</b> Students label the species that increases in O.N. as the oxidant — exactly backwards.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Don’t memorise O.N. tables — re-derive on the fly with the charge-balance rule, but <b>before</b> you compute, run a 3-second “exception sweep” of the formula for O–O, M–H, or O–F links. Then <b>sanity-check the answer against the element’s allowed range</b> (e.g. S never exceeds +6, N never exceeds +5). If your number busts the ceiling, you missed a peroxide linkage — go back to the structure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Three lenses (all equivalent)',
            note: 'Oxidation = add O / lose H <b>/ lose e<sup>−</sup> / ↑ O.N.</b> · Reduction = lose O / add H / <b>gain e<sup>−</sup> / ↓ O.N.</b>',
          },
          { f: 'Master rule', note: '∑(O.N.) = net charge (neutral ⇒ 0; ion ⇒ its charge).' },
          { f: 'Fixed values', note: 'Group 1 = +1 · Group 2 = +2 · Al = +3 · F = −1 (always).' },
          {
            f: 'Watch-list (exceptions)',
            note: 'O = −2 except peroxide −1, superoxide −½, OF<sub>2</sub> +2 · H = +1 except metal hydride −1.',
          },
          {
            f: 'Agents',
            note: 'Oxidant → <b>is reduced</b> (gains e<sup>−</sup>); Reductant → <b>is oxidised</b> (loses e<sup>−</sup>). Highest O.N. ⇒ oxidant only; lowest O.N. ⇒ reductant only; intermediate ⇒ can do both / disproportionate.',
          },
          {
            f: 'Fractional O.N. ⇒ <b>AVERAGE only</b>',
            note: 'split by structure (S–S and like–like bonds contribute 0).',
          },
        ],
        aids: [
          '<b>OIL RIG</b> (Oxidation Is Loss, Reduction Is Gain)',
          '<b>“LEO the lion says GER”</b> (Lose e<sup>−</sup> = Oxidation, Gain e<sup>−</sup> = Reduction)',
          '“The agent does the opposite to itself.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 305–312 ─────────────────────────
  {
    n: '02',
    title: 'Balancing Redox Equations',
    kalam: 'This single balance — electrons out = electrons in — is the heart of every balancing technique.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Near-certain marks. CBSE Boards ask a 3-mark “balance by the ion-electron / oxidation-number method.” NEET tests it indirectly through coefficients, products, or electrons-transferred. JEE Main asks for a specific coefficient or the number of electrons; JEE Advanced favours multi-step <b>basic-medium</b> balancing and disproportionation, and links the electron count to the n-factor used later in titrations.',
      },
      {
        t: 'p',
        html: 'Picture the credit ledger (“udhaar khata”) of a busy kirana shop. At the end of the month every rupee that went out as credit must be matched by a rupee that came in — the ledger has to tally on both sides, or the shopkeeper has made a mistake somewhere. A balanced chemical equation is exactly this ledger, except it must tally on <b>two</b> accounts at once: <b>mass</b> (every atom that disappears from the left must reappear on the right) and <b>charge</b> (the total electrical charge must be identical on both sides).',
      },
      {
        t: 'p',
        html: 'For ordinary reactions, balancing atoms is enough. Redox reactions add the second account, and that is what makes them feel harder. Here is the single idea that unlocks everything: <b>electrons are never created or destroyed in the reaction — every electron lost by the reducing agent is gained, in the very same instant, by the oxidising agent.</b> It is a perfectly closed transaction, like the kabaddi raider and defender from Topic 01: nobody loses a point that someone else doesn’t win.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a see-saw with electrons as the children sitting on it. The reductant’s side goes up (it has given children away — lost electrons, oxidation), and the oxidant’s side goes down (it has received them — gained electrons, reduction). The see-saw can only sit level when the <b>number of electrons given equals the number received.</b> This single balance — electrons out = electrons in — is the heart of every balancing technique.',
      },
      {
        t: 'p',
        html: 'Chemists use two bookkeeping systems to enforce this:<br>1. <b>The oxidation-number method</b> — track how much each element’s O.N. goes up and down, then scale the species so that the <b>total increase equals the total decrease.</b> It works directly on the molecular or skeletal equation.<br>2. <b>The half-reaction (ion-electron) method</b> — physically split the reaction into an <b>oxidation half</b> and a <b>reduction half</b>, balance each one completely (atoms and electrons), make the electron counts equal, then add them back together. The electrons cancel, leaving a balanced equation.',
      },
      {
        t: 'p',
        html: 'Both are correct and give the same answer; the half-reaction method is usually cleaner for aqueous ionic reactions, while the O.N. method is faster for molecular equations.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three things you must respect or the equation will refuse to balance: (1) <b>The medium matters.</b> In <b>acidic</b> solution you balance oxygen and hydrogen with H<sub>2</sub>O and H<sup>+</sup>; in <b>basic</b> solution you use H<sub>2</sub>O and OH<sup>−</sup>. Mixing them up is the single biggest source of errors. (2) <b>The half-reaction method assumes an ionic (aqueous) reaction</b>; if you are given a molecular equation, convert it to ionic form first (drop spectator ions), balance, then convert back. (3) <b>The product can change with the medium</b> — MnO<sub>4</sub><sup>−</sup> goes to Mn<sup>2+</sup> in acid (gaining 5 e<sup>−</sup>) but to MnO<sub>2</sub> in neutral/mildly basic solution (gaining 3 e<sup>−</sup>). You cannot balance until you know the correct products for that medium.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'There are no algebraic formulas here — two conservation laws govern everything:<br>Mass conservation: atoms of each element are equal on both sides<br>Charge conservation: ∑(charge)<sub>left</sub> = ∑(charge)<sub>right</sub>',
      },
      {
        t: 'p',
        html: 'And one operating principle:<br>electrons lost (oxidation) = electrons gained (reduction)',
      },
      {
        t: 'p',
        html: '<b>Definitions:</b><br>• <b>Half-reaction:</b> one “half” of the redox process written on its own — either the <b>oxidation half</b> (electrons appear on the product side) or the <b>reduction half</b> (electrons appear on the reactant side).<br>• <b>Skeletal (skeleton) equation:</b> the unbalanced reactant → product sketch you start from.<br>• <b>Spectator ions:</b> ions present but unchanged (e.g. K<sup>+</sup>, SO<sub>4</sub><sup>2−</sup> that don’t change O.N.); they are dropped in the ionic form and restored only when converting back to a molecular equation.<br>• <b>Electrons transferred (<i>n</i>):</b> the number of electrons exchanged per formula unit — equal to the total change in oxidation number. This same <i>n</i> becomes the <b>n-factor</b> in redox titrations.',
      },
      {
        t: 'p',
        html: '<b>Medium-dependent balancing tools:</b> acidic/neutral: O with H<sub>2</sub>O, H with H<sup>+</sup>; basic: O with H<sub>2</sub>O, H with OH<sup>−</sup>.',
      },
      {
        t: 'p',
        html: '<b>Useful rule (acidic, per excess O):</b> add one H<sub>2</sub>O to the deficient side and two H<sup>+</sup> to the other. <b>(Basic, per excess O):</b> add one H<sub>2</sub>O to the same side and two OH<sup>−</sup> to the other.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no derivation; there are two procedures. Learn both — examiners specify which to use.',
      },
      {
        t: 'proc',
        title: 'A. The Oxidation-Number Method',
        steps: [
          '<b>Step 1 — Assign O.N. to every atom</b> and identify which elements change. <b>Why:</b> you cannot balance electrons you haven’t located.',
          '<b>Step 2 — Find the increase and the decrease in O.N.</b> (per atom, then per molecule, accounting for subscripts). <b>Why:</b> the molecule may contain several atoms of the changing element, so the total change is what counts.',
          '<b>Step 3 — Make total increase = total decrease</b> by multiplying the oxidant and reductant by suitable integers. <b>Why:</b> this is the electron-balance principle in disguise — increase in O.N. is electrons lost, decrease is electrons gained.',
          '<b>Step 4 — Balance the remaining atoms by inspection</b>, leaving H and O for last.',
          '<b>Step 5 — Balance O and H using the medium rules</b>, then verify total charge. <b>Why:</b> charge is the final, independent check that the electron bookkeeping was correct.',
        ],
      },
      {
        t: 'proc',
        title: 'B. The Half-Reaction (Ion-Electron) Method',
        steps: [
          '<b>Step 1 — Write the skeletal equation in ionic form.</b> <b>Why:</b> spectator ions only clutter the electron accounting.',
          '<b>Step 2 — Split into oxidation and reduction half-reactions.</b> <b>Why:</b> isolating each half lets you balance electrons cleanly.',
          '<b>Step 3 — In each half, balance all atoms except O and H</b> using simple coefficients.',
          '<b>Step 4 — Balance O with H<sub>2</sub>O, then H with H<sup>+</sup></b> (acidic) <b>or OH<sup>−</sup></b> (basic). <b>Why:</b> water and the medium’s ions are the only “free” species available in solution.',
          '<b>Step 5 — Balance the charge in each half by adding electrons</b> to the more-positive side. The electrons you add are the n-factor of that half.',
          '<b>Step 6 — Multiply each half so electron counts match, add the halves, and cancel the electrons.</b> Do a final atom-and-charge check.',
        ],
      },
      {
        t: 'p',
        html: '<b>The basic-medium shortcut (worth memorising):</b> balance the whole thing as if it were <b>acidic</b> (using H<sup>+</sup>), and at the very end <b>add one OH<sup>−</sup> to both sides for every H<sup>+</sup> present.</b> The H<sup>+</sup> + OH<sup>−</sup> pairs collapse into H<sub>2</sub>O, and surplus waters cancel — leaving a correctly balanced basic equation without re-doing the work.',
      },
      {
        t: 'p',
        html: '<b>C. Converting the ionic equation back to molecular form</b><br>The ion-electron method always outputs an ionic equation, but Board questions often ask for the full molecular (formula-unit) equation. To restore it: <b>re-attach the spectator ions you dropped in Step 1</b>, in the same numbers, to both sides. For instance, the balanced ionic result H<sub>2</sub>S + 2Fe<sup>3+</sup> → 2H<sup>+</sup> + S + 2Fe<sup>2+</sup> comes from iron supplied as FeCl<sub>3</sub>. Putting the six spectator Cl<sup>−</sup> back gives the molecular equation H<sub>2</sub>S + 2FeCl<sub>3</sub> → 2HCl + S + 2FeCl<sub>2</sub>. <b>Why this is safe:</b> spectators never changed O.N. or count, so restoring them cannot disturb the mass or charge balance you have already verified — it simply re-dresses the bare ions in their original compounds.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Balance by the ion-electron method (acidic medium):<br>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + Sn<sup>2+</sup> → Cr<sup>3+</sup> + Sn<sup>4+</sup>',
        steps: [
          '<b>Reduction half (Cr: +6 → +3):</b><br>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O<br>(2 Cr balanced; 7 O balanced with 7 H<sub>2</sub>O; 14 H balanced with 14 H<sup>+</sup>; charge: left −2 + 14 − 6 = +6, right +6 ✓.)',
          '<b>Oxidation half (Sn: +2 → +4):</b><br>Sn<sup>2+</sup> → Sn<sup>4+</sup> + 2e<sup>−</sup>',
          '<b>Equalise electrons</b> (LCM of 6 and 2 is 6 — multiply the oxidation half by 3):<br>3Sn<sup>2+</sup> → 3Sn<sup>4+</sup> + 6e<sup>−</sup><br><b>Add and cancel electrons:</b>',
        ],
        ans: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 3Sn<sup>2+</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O + 3Sn<sup>4+</sup> (charge: left −2 + 14 + 6 = +18; right +6 + 12 = +18 ✓; atoms balance ✓)',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In the balanced equation for MnO<sub>4</sub><sup>−</sup> + C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → Mn<sup>2+</sup> + CO<sub>2</sub> (acidic), what is the coefficient of H<sup>+</sup>?',
        steps: [
          '<b>Don’t balance the whole thing — count electrons first.</b><br>• Mn: +7 → +2 ⇒ gains <b>5 e<sup>−</sup></b> per MnO<sub>4</sub><sup>−</sup>.<br>• C in C<sub>2</sub>O<sub>4</sub><sup>2−</sup>: each C +3 → +4, and there are 2 C ⇒ loses <b>2 e<sup>−</sup></b> per oxalate.<br>• LCM = 10 ⇒ <b>2</b> MnO<sub>4</sub><sup>−</sup> (10 e<sup>−</sup> gained) and <b>5</b> C<sub>2</sub>O<sub>4</sub><sup>2−</sup> (10 e<sup>−</sup> lost).',
          '2MnO<sub>4</sub><sup>−</sup> + 5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> + 16H<sup>+</sup> → 2Mn<sup>2+</sup> + 10CO<sub>2</sub> + 8H<sub>2</sub>O',
          '<b>Speed logic for H<sup>+</sup>:</b> total O on the left = 2(4) + 5(4) = 28; oxygen in 10 CO<sub>2</sub> accounts for 20, so the remaining 8 O go into 8 H<sub>2</sub>O.',
          '<b>The trap:</b> writing 5 oxalate → 5 CO<sub>2</sub> (it’s <b>10</b>, since each oxalate has 2 C), or counting oxalate as a 1-electron donor (it’s <b>2</b>).',
        ],
        ans: '16.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Balance in basic medium by the ion-electron method:<br>MnO<sub>4</sub><sup>−</sup> + I<sup>−</sup> → MnO<sub>2</sub> + I<sub>2</sub><br>(Combines O.N. change with basic-medium OH<sup>−</sup>/H<sub>2</sub>O balancing.)',
        steps: [
          '<b>Reduction half (Mn: +7 → +4, gains 3 e<sup>−</sup>), balanced for basic medium:</b><br>MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O + 3e<sup>−</sup> → MnO<sub>2</sub> + 4OH<sup>−</sup><br>(O: left 4 + 2 = 6, right 2 + 4 = 6 ✓; H: 4 = 4 ✓; charge: left −1 − 3 = −4, right −4 ✓.)',
          '<b>Oxidation half:</b><br>2I<sup>−</sup> → I<sub>2</sub> + 2e<sup>−</sup>',
          '<b>Equalise</b> (LCM of 3, 2 = 6): reduction ×2, oxidation ×3:<br>2MnO<sub>4</sub><sup>−</sup> + 4H<sub>2</sub>O + 6e<sup>−</sup> → 2MnO<sub>2</sub> + 8OH<sup>−</sup><br>6I<sup>−</sup> → 3I<sub>2</sub> + 6e<sup>−</sup><br><b>Add:</b>',
        ],
        ans: '2MnO<sub>4</sub><sup>−</sup> + 6I<sup>−</sup> + 4H<sub>2</sub>O → 2MnO<sub>2</sub> + 3I<sub>2</sub> + 8OH<sup>−</sup> (charge: left −2 − 6 = −8; right −8 ✓)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        fig: 'c11-07-fig-7.3',
        q: 'White phosphorus reacts with hot sodium hydroxide solution. Balance the ionic equation and explain the redox classification:<br>P<sub>4</sub> + OH<sup>−</sup> → PH<sub>3</sub> + H<sub>2</sub>PO<sub>2</sub><sup>−</sup>',
        steps: [
          '<b>Classify first.</b> Phosphorus in P<sub>4</sub> is <b>0</b>. In PH<sub>3</sub> it is −3 (reduced), and in hypophosphite H<sub>2</sub>PO<sub>2</sub><sup>−</sup> it is +1 (oxidised). The same element in a single starting state (0) ends up both higher and lower — this is a <b>disproportionation</b>.',
          '<b>Electron bookkeeping (per atom):</b> reduction needs 3 e<sup>−</sup> (0 → −3); oxidation releases 1 e<sup>−</sup> (0 → +1). To balance electrons, <b>1 P</b> must be reduced for every <b>3 P</b> oxidised. So out of the 4 P in P<sub>4</sub>: one goes to PH<sub>3</sub>, three go to H<sub>2</sub>PO<sub>2</sub><sup>−</sup>.<br>P<sub>4</sub> → PH<sub>3</sub> + 3 H<sub>2</sub>PO<sub>2</sub><sup>−</sup><br>(P: 4 = 1 + 3 ✓; electrons: 3 gained = 3 lost ✓.)',
          '<b>Now balance O, H, charge in basic medium.</b> Right side has 3 × 2 = 6 O (all in hypophosphite) and 3 + 6 = 9 H; charge −3. Supply O and H using OH<sup>−</sup> and H<sub>2</sub>O:',
        ],
        ans: 'P<sub>4</sub> + 3OH<sup>−</sup> + 3H<sub>2</sub>O → PH<sub>3</sub> + 3H<sub>2</sub>PO<sub>2</sub><sup>−</sup> (check: O — left 3 + 3 = 6, right 6 ✓; H — left 3 + 6 = 9, right 3 + 6 = 9 ✓; charge — left −3, right −3 ✓)',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Balance by the oxidation-number method (acidic): Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + Fe<sup>2+</sup> + H<sup>+</sup> → Cr<sup>3+</sup> + Fe<sup>3+</sup> + H<sub>2</sub>O.',
            a: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> → 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O.',
          },
          {
            q: '[NEET] How many electrons are transferred per mole of MnO<sub>4</sub><sup>−</sup> when it is reduced (i) in acidic medium and (ii) in neutral/mildly basic medium?',
            a: '(i) 5 mol e<sup>−</sup> (to Mn<sup>2+</sup>); (ii) 3 mol e<sup>−</sup> (to MnO<sub>2</sub>).',
          },
          {
            q: '[JEE Main] Balance by the ion-electron method (acidic): MnO<sub>4</sub><sup>−</sup> + H<sub>2</sub>O<sub>2</sub> → Mn<sup>2+</sup> + O<sub>2</sub>. What is the coefficient of H<sub>2</sub>O?',
            a: '2MnO<sub>4</sub><sup>−</sup> + 5H<sub>2</sub>O<sub>2</sub> + 6H<sup>+</sup> → 2Mn<sup>2+</sup> + 5O<sub>2</sub> + 8H<sub>2</sub>O; coefficient of H<sub>2</sub>O = 8.',
          },
          {
            q: '[JEE Main] Balance in basic medium: Cl<sub>2</sub> → Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup> (hot, concentrated alkali). State the ratio of Cl<sup>−</sup> to ClO<sub>3</sub><sup>−</sup>.',
            a: '3Cl<sub>2</sub> + 6OH<sup>−</sup> → 5Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O; ratio Cl<sup>−</sup> ∶ ClO<sub>3</sub><sup>−</sup> = 5 ∶ 1.',
          },
          {
            q: '[JEE Advanced] Balance in acidic medium: As<sub>2</sub>S<sub>3</sub> + NO<sub>3</sub><sup>−</sup> → AsO<sub>4</sub><sup>3−</sup> + SO<sub>4</sub><sup>2−</sup> + NO. (Two elements are oxidised simultaneously.)',
            a: '3As<sub>2</sub>S<sub>3</sub> + 28NO<sub>3</sub><sup>−</sup> + 4H<sub>2</sub>O → 6AsO<sub>4</sub><sup>3−</sup> + 9SO<sub>4</sub><sup>2−</sup> + 28NO + 8H<sup>+</sup> (28 e<sup>−</sup> lost per As<sub>2</sub>S<sub>3</sub>; 84 e<sup>−</sup> per 3 As<sub>2</sub>S<sub>3</sub>).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the balanced reaction MnO<sub>4</sub><sup>−</sup> + Fe<sup>2+</sup> + H<sup>+</sup> → Mn<sup>2+</sup> + Fe<sup>3+</sup> + H<sub>2</sub>O (acidic), the coefficients of Fe<sup>2+</sup> and H<sup>+</sup> are respectively:',
        opts: [
          { label: '5 and 8', nudge: null },
          { label: '5 and 4', nudge: '<b>(b)</b> right Fe but forgot that 4 O ⇒ 8 H<sup>+</sup> (used 4).' },
          { label: '1 and 8', nudge: '<b>(c)</b> treated Fe as a multi-electron donor.' },
          { label: '2 and 16', nudge: '<b>(d)</b> borrows the 2 and 16 of the permanganate–oxalate equation (worked example 2) — 2 is the MnO<sub>4</sub><sup>−</sup> coefficient there, not Fe<sup>2+</sup>; doubling this equation would give 10 and 16.' },
        ],
        correct: 0,
        solution: 'Mn gains 5 e<sup>−</sup> (+7 → +2); Fe loses 1 e<sup>−</sup> (+2 → +3), so 5 Fe<sup>2+</sup> per MnO<sub>4</sub><sup>−</sup>. Balancing O (4) gives 4 H<sub>2</sub>O, hence <b>8 H<sup>+</sup></b>: MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O.',
      },
      {
        t: 'mcq',
        q: 'The same oxidant MnO<sub>4</sub><sup>−</sup> accepts the largest number of electrons per mole in:',
        opts: [
          { label: 'strongly acidic medium', nudge: null },
          { label: 'neutral medium', nudge: '<b>(b)</b> in neutral medium MnO<sub>4</sub><sup>−</sup> stops at MnO<sub>2</sub> (+7 → +4), only 3 e<sup>−</sup>.' },
          { label: 'strongly basic medium', nudge: '<b>(c)</b> in strongly basic medium it stops at MnO<sub>4</sub><sup>2−</sup> (+7 → +6), only 1 e<sup>−</sup>.' },
          {
            label: 'electron count is medium-independent',
            nudge: '<b>(d)</b> the central misconception this question targets — products and electron counts do depend on medium.',
          },
        ],
        correct: 0,
        solution: 'In acid, MnO<sub>4</sub><sup>−</sup> → Mn<sup>2+</sup> (+7 → +2, <b>5 e<sup>−</sup></b>); neutral gives MnO<sub>2</sub> (3 e<sup>−</sup>); strong base gives MnO<sub>4</sub><sup>2−</sup> (1 e<sup>−</sup>).',
      },
      {
        t: 'mcq',
        q: 'When a redox equation is balanced in basic medium, the species used to balance hydrogen is:',
        opts: [
          {
            label: 'H<sup>+</sup> only',
            nudge: '<b>(a)</b> H<sup>+</sup> is the acidic-medium tool — free H<sup>+</sup> cannot persist in basic solution.',
          },
          { label: 'OH<sup>−</sup> and H<sub>2</sub>O', nudge: null },
          {
            label: 'H<sup>+</sup> and H<sub>2</sub>O',
            nudge: '<b>(c)</b> H<sup>+</sup> and H<sub>2</sub>O are the acidic-medium pair — using them in base is the most common balancing error.',
          },
          { label: 'H<sub>2</sub> gas', nudge: '<b>(d)</b> H<sub>2</sub> is a product only if hydrogen is itself reduced, not a balancing tool.' },
        ],
        correct: 1,
        solution: 'Free H<sup>+</sup> cannot persist in basic solution; hydrogen and oxygen are balanced with OH<sup>−</sup> and H<sub>2</sub>O.',
      },
      {
        t: 'mcq',
        q: 'Which reaction is a disproportionation?',
        opts: [
          { label: 'Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>', nudge: '<b>(a)</b> is displacement (two different halogens).' },
          { label: '3Cl<sub>2</sub> + 6OH<sup>−</sup> → 5Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O', nudge: null },
          { label: 'Zn + 2H<sup>+</sup> → Zn<sup>2+</sup> + H<sub>2</sub>', nudge: '<b>(c)</b> is metal–acid displacement.' },
          { label: 'Fe<sup>2+</sup> + Ce<sup>4+</sup> → Fe<sup>3+</sup> + Ce<sup>3+</sup>', nudge: '<b>(d)</b> is an ordinary inter-species electron transfer.' },
        ],
        correct: 1,
        solution: 'Chlorine (0) ends up both at −1 (in Cl<sup>−</sup>) and +5 (in ClO<sub>3</sub><sup>−</sup>) — same element, simultaneously oxidised and reduced. None involve one element splitting into a higher and a lower state.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Balancing atoms but forgetting charge.</b> An equation can have every atom matched and still be wrong — the charge must tally too. Always finish with a charge check; it catches almost every slip.',
          '<b>Using the wrong medium’s ions.</b> Putting H<sup>+</sup> into a basic-medium answer (or vice-versa) is the number-one examiner trap. Decide the medium before you balance H and O.',
          '<b>Adding half-reactions without equalising electrons.</b> If one half releases 3 e<sup>−</sup> and the other absorbs 2, you must scale to a common 6 before adding — otherwise electrons survive in the final equation.',
          '<b>Assuming a fixed product regardless of medium.</b> MnO<sub>4</sub><sup>−</sup> does not always become Mn<sup>2+</sup> — it depends on acidity. Wrong product ⇒ wrong electron count ⇒ everything downstream fails.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For “find the coefficient of X” questions, <b>never balance the whole equation.</b> Get the electron count from the O.N. changes, take the LCM to fix the two main reactants, then balance O with water and H with H<sup>+</sup>/OH<sup>−</sup> — the coefficient you want usually falls out in two lines. And for any basic-medium problem, <b>balance it as acidic first, then add OH<sup>−</sup> to both sides to mop up every H<sup>+</sup></b> — far fewer mistakes than balancing in base from scratch.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Two accounts must tally', note: 'atoms (mass) <b>and</b> charge. <b>Master principle:</b> electrons lost = electrons gained.' },
          {
            f: 'O.N. method',
            note: 'assign O.N. → find total ↑ and ↓ → make ↑ = ↓ → balance rest → balance O, H by medium → check charge.',
          },
          {
            f: 'Ion-electron method',
            note: 'ionic form → split into two halves → balance atoms (not O/H) → O with H<sub>2</sub>O, H with H<sup>+</sup>/OH<sup>−</sup> → balance charge with e<sup>−</sup> → equalise e<sup>−</sup> → add → check.',
          },
          { f: 'Medium tools', note: 'acidic/neutral → H<sub>2</sub>O, H<sup>+</sup> · basic → H<sub>2</sub>O, OH<sup>−</sup>.' },
          {
            f: 'Basic-medium shortcut',
            note: 'balance as acidic, then add one OH<sup>−</sup> to both sides per H<sup>+</sup>; pair them into H<sub>2</sub>O and cancel.',
          },
          {
            f: 'MnO<sub>4</sub><sup>−</sup> electron memory',
            note: '<b>A</b>cid → Mn<sup>2+</sup> (<b>5</b> e<sup>−</sup>) · <b>N</b>eutral → MnO<sub>2</sub> (<b>3</b> e<sup>−</sup>) · strong <b>B</b>ase → MnO<sub>4</sub><sup>2−</sup> (<b>1</b> e<sup>−</sup>).',
          },
          { f: '<b>Electrons transferred (<i>n</i>) here = the n-factor you’ll reuse in titrations.</b>', note: '' },
        ],
        aids: ['“5–3–1 as the base grows on.”'],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 313–319 ─────────────────────────
  {
    n: '03',
    title: 'Redox Titrations & Electrochemical Cells',
    kalam: 'Electrons always march through the external wire from anode to cathode — never through the solution.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> High-yield and quantitative. CBSE Boards ask redox-titration calculations (KMnO<sub>4</sub>/K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) and a qualitative cell/EMF question. NEET tests “strongest oxidant/reductant” from <i>E</i>° values and electron-flow direction. JEE Main asks <i>E</i>°<sub>cell</sub>, Δ<i>G</i>°, and titration stoichiometry; JEE Advanced links <i>E</i>° to equilibrium constants, Nernst-shifted potentials, and feasibility of disproportionation.',
      },
      {
        t: 'p',
        html: 'Topics 01 and 02 taught you to balance a redox reaction. This one is about two powerful things you can do with one: <b>measure</b> with it, and <b>harvest electricity</b> from it. Both rest on the same bedrock idea you already trust — electrons lost equal electrons gained — but they put it to work in two very different ways.',
      },
      {
        t: 'p',
        html: '<b>Face 1 — the redox titration (the chemical weighing-scale).</b> Think of a taraazu, the two-pan balance a sabziwala uses. You keep adding known weights to one pan until it exactly balances the unknown vegetables on the other. A redox titration is precisely this, but the “weights” are electrons. You run a known oxidant (say KMnO<sub>4</sub>) from a burette into an unknown reductant until <b>every electron the reductant can give has been taken</b> — the endpoint. At that instant the two sides have exchanged equal numbers of electrons, i.e. <b>equal equivalents</b>, and from that single equality you back-calculate the unknown concentration. The beauty of KMnO<sub>4</sub> is that it is self-indicating: the moment one drop goes unreacted, the solution turns permanent pink.',
      },
      {
        t: 'p',
        html: '<b>Face 2 — the electrochemical cell (the chemical waterfall).</b> A spontaneous redox reaction wants to push electrons from the reductant to the oxidant. If the two simply touch — drop a zinc rod into copper sulphate — the electrons jump directly and the energy escapes uselessly as heat. But if you <b>physically separate the two halves</b> into two beakers and force the electrons to travel through a wire to get across, you have captured that flow as <b>electric current</b>. That is a galvanic (voltaic) cell: like channelling a waterfall through a turbine instead of letting it crash on the rocks. The salt bridge is the quiet hero — it lets ions trickle across to keep each beaker electrically neutral, without which the electron flow would choke within seconds.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> In any galvanic cell, oxidation and reduction happen in different rooms. The room where electrons are released (oxidation) is the <b>anode</b>; the room where they are consumed (reduction) is the <b>cathode</b>. Electrons always march through the external wire from anode to cathode — never through the solution. Mnemonic: <b>An Ox</b> (Anode = Oxidation), <b>Red Cat</b> (Reduction = Cathode).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> (1) A titration needs a <b>sharp, detectable endpoint</b> and the right medium — famously, KMnO<sub>4</sub> titrations are done in <b>dilute H<sub>2</sub>SO<sub>4</sub>, never HCl</b>, because KMnO<sub>4</sub> would also oxidise the chloride, consuming extra titrant and ruining the result. (2) A galvanic cell only runs spontaneously when the cell reaction is downhill in energy — i.e. <i>E</i>°<sub>cell</sub> > 0 (equivalently Δ<i>G</i>° < 0); if you compute a negative EMF, the reaction runs the other way. (3) The clean <i>E</i>° values assume <b>standard conditions</b> (1 M ions, 1 bar gases, 298 K); change the concentrations and the actual EMF shifts — that correction is the Nernst equation.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      { t: 'p', html: '<b>Redox titrations:</b>' },
      {
        t: 'formula',
        kicker: '<i>n</i>-factor (of an oxidant or reductant)',
        main: 'number of electrons gained or lost per formula unit = (change in O.N. per atom) × (number of such atoms)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equivalents; Normality',
        main: 'Equivalents = moles × <i>n</i>-factor<br>Normality <i>N</i> = Molarity × <i>n</i>-factor',
        legend: ['<i>N</i> = normality'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Milliequivalents',
        main: 'meq = <i>N</i> × <i>V</i><sub>(mL)</sub> = <i>M</i> × <i>n</i> × <i>V</i><sub>(mL)</sub>',
        legend: [
          'meq = milliequivalents',
          '<i>N</i> = normality',
          '<i>V</i><sub>(mL)</sub> = volume in mL',
          '<i>M</i> = molarity',
          '<i>n</i> = <i>n</i>-factor',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Endpoint condition',
        main: 'equivalents<sub>oxidant</sub> = equivalents<sub>reductant</sub><br>(equivalently, meq<sub>ox</sub> = meq<sub>red</sub>)',
        legend: ['meq<sub>ox</sub>, meq<sub>red</sub> = milliequivalents of oxidant, of reductant'],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Reagent (acidic medium)', 'Half-change', 'n-factor'],
        rows: [
          ['MnO<sub>4</sub><sup>−</sup> → Mn<sup>2+</sup>', '+7 → +2', '5'],
          ['MnO<sub>4</sub><sup>−</sup> → MnO<sub>2</sub> (neutral)', '+7 → +4', '3'],
          ['Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> → 2Cr<sup>3+</sup>', '+6 → +3 (×2)', '6'],
          ['C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2CO<sub>2</sub>', '+3 → +4 (×2)', '2'],
          ['Fe<sup>2+</sup> → Fe<sup>3+</sup>', '+2 → +3', '1'],
        ],
      },
      { t: 'p', html: '<b>Electrochemical cells:</b>' },
      {
        t: 'def',
        term: 'Electrode potential (<i>E</i>)',
        html: 'the tendency of a half-cell to gain electrons (be reduced). The value at 1 M ions, 1 bar, 298 K is the <b>standard electrode potential</b> <i>E</i>° (reported, by IUPAC convention, as a <b>reduction</b> potential).',
      },
      {
        t: 'formula',
        kicker: 'Cell EMF',
        main: '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub>',
        legend: [
          '<i>E</i>°<sub>cell</sub> = standard cell EMF',
          '<i>E</i>°<sub>cathode</sub> = standard reduction potential of the cathode',
          '<i>E</i>°<sub>anode</sub> = standard reduction potential of the anode',
        ],
        note: '(both as standard reduction potentials)',
      },
      {
        t: 'def',
        term: 'Cell notation',
        html: 'anode | anode soln ‖ cathode soln | cathode (oxidation on the left).',
      },
      {
        t: 'formula',
        kicker: 'Free energy link',
        main: 'Δ<i>G</i> = −<i>nFE</i><br>Δ<i>G</i>° = −<i>nFE</i>°<sub>cell</sub>',
        legend: [
          'Δ<i>G</i> = free energy change',
          'Δ<i>G</i>° = standard free energy change',
          '<i>E</i> = cell EMF',
          '<i>E</i>°<sub>cell</sub> = standard cell EMF',
          '<i>F</i> = Faraday constant, 96500 C mol<sup>−1</sup>',
          '<i>n</i> = electrons transferred per cell reaction',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equilibrium constant',
        main: 'log <i>K</i> = <i>nE</i>°<sub>cell</sub>/0.0591 (at 298 K)',
        legend: [
          '<i>K</i> = equilibrium constant',
          '<i>n</i> = electrons transferred per cell reaction',
          '<i>E</i>°<sub>cell</sub> = standard cell EMF',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Nernst equation (298 K)',
        main: '<i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i>',
        legend: [
          '<i>E</i><sub>cell</sub> = cell EMF',
          '<i>E</i>°<sub>cell</sub> = standard cell EMF',
          '<i>n</i> = electrons transferred per cell reaction',
          '<i>Q</i> = the reaction quotient',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Units:</b> <i>E</i> in volts (V); <i>F</i> in C mol<sup>−1</sup>; <i>n</i> and <i>K</i> are dimensionless; equivalents are an amount (eq), like moles.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'A. Solving a Redox Titration',
        steps: [
          '<b>Step 1 — Identify each species’ n-factor</b> from its O.N. change in that medium. <b>Why:</b> the medium fixes the product (e.g. MnO<sub>4</sub><sup>−</sup> takes 5 e<sup>−</sup> in acid but 3 in neutral), and therefore the n-factor.',
          '<b>Step 2 — Write the endpoint balance:</b> meq<sub>ox</sub> = meq<sub>red</sub>, i.e. <i>M</i><sub>1</sub><i>n</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>n</i><sub>2</sub><i>V</i><sub>2</sub>. <b>Why:</b> at the endpoint, electrons given exactly equal electrons taken — equivalents must match, not moles.',
          '<b>Step 3 — Substitute the three known quantities and solve for the fourth.</b> Keep volumes in the same unit throughout.',
          '<b>Step 4 — Sanity-check</b> the magnitude (a stronger n-factor reagent needs proportionally less volume).',
        ],
      },
      {
        t: 'proc',
        title: 'B. Predicting / Building a Galvanic Cell',
        steps: [
          '<b>Step 1 — List both half-reactions as reductions with their <i>E</i>°.</b> <b>Why:</b> a common reference (reduction) lets you compare them fairly.',
          '<b>Step 2 — The half-cell with the higher <i>E</i>° becomes the cathode</b> (it has the stronger pull on electrons, so reduction wins there); the lower-<i>E</i>° half-cell becomes the anode (forced into oxidation; its <i>E</i>° is still entered as the reduction potential in Step 3). <b>Why:</b> electrons flow toward the species that craves them most.',
          '<b>Step 3 — Compute <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub>.</b> A positive value confirms the cell is spontaneous as written.',
          '<b>Step 4 — Determine <i>n</i></b> = total electrons exchanged in the balanced cell reaction (not per atom). <b>Why:</b> this is the most common slip — see worked example 3.',
          '<b>Step 5 — Link to energy/feasibility</b> via Δ<i>G</i>° = −<i>nFE</i>°<sub>cell</sub> and, if needed, <i>K</i> via log <i>K</i> = <i>nE</i>°<sub>cell</sub>/0.0591.',
        ],
      },
      {
        t: 'p',
        html: '<b>The activity-series feasibility shortcut:</b> arrange metals by <i>E</i>° (the electrochemical series). A metal will displace — i.e. reduce — the ion of any metal <b>below</b> it (more positive <i>E</i>°). This is why zinc (−0.76 V) displaces copper (+0.34 V) from solution, but a copper spoon left in zinc nitrate does nothing.',
      },
      {
        t: 'p',
        html: '<b>C. Why the two halves connect: <i>E</i>° chooses your titrant</b><br>The electrode-potential idea is not separate from titrations — it explains them. An oxidant can only titrate a reductant if its reduction potential is high enough to drive the reaction (<i>E</i>°<sub>cell</sub> > 0). That is precisely why MnO<sub>4</sub><sup>−</sup> (<i>E</i>° = +1.51 V) and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> (<i>E</i>° = +1.33 V) are the workhorse oxidising titrants: their potentials sit above almost every common reductant (Fe<sup>2+</sup> at +0.77 V, C<sub>2</sub>O<sub>4</sub><sup>2−</sup>, etc.), so the titration runs to completion. The same data also exposes the HCl problem from a potential angle: Cl<sub>2</sub>/Cl<sup>−</sup> sits at +1.36 V, below MnO<sub>4</sub><sup>−</sup> — so permanganate is strong enough to oxidise chloride too, which is why HCl interferes but the weaker dichromate (+1.33 V, just under Cl<sub>2</sub>) can tolerate it. So the choice of titrant and medium is just feasibility (<i>E</i>°) reasoning in disguise.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '20.0 mL of 0.10 M oxalic acid is titrated against 0.020 M KMnO<sub>4</sub> in dilute H<sub>2</sub>SO<sub>4</sub>. What volume of KMnO<sub>4</sub> is needed to reach the endpoint?',
        steps: [
          '<b>Step 1 — n-factors.</b> Oxalate C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2CO<sub>2</sub>: each C +3 → +4, two carbons ⇒ <i>n</i> = 2. Permanganate MnO<sub>4</sub><sup>−</sup> → Mn<sup>2+</sup> (+7 → +2) ⇒ <i>n</i> = 5.',
          '<b>Step 2 — endpoint balance</b> (meq<sub>ox</sub> = meq<sub>red</sub>):<br><i>M</i><sub>KMnO₄</sub> <i>n V</i><sub>KMnO₄</sub> = <i>M</i><sub>oxalic</sub> <i>n V</i><sub>oxalic</sub><br>(0.020)(5) <i>V</i> = (0.10)(2)(20.0)<br>0.10 <i>V</i> = 4.0',
          '(Note the self-indicating endpoint: the first excess drop turns the flask permanent pink.)',
        ],
        ans: '40.0 mL of KMnO<sub>4</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Given <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V, <i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V, <i>E</i>°(Zn<sup>2+</sup>/Zn) = −0.76 V. Without lengthy calculation, identify (i) the strongest reducing agent, and (ii) the metal-pair cell with the largest EMF.',
        steps: [
          '<b>The mental rules:</b><br>• Most positive <i>E</i>° ⇒ strongest <b>oxidising agent</b> (the ion) ⇒ here Ag<sup>+</sup>.<br>• Most negative <i>E</i>° ⇒ its metal is the strongest <b>reducing agent</b> ⇒ here <b>Zn</b>.<br>• Largest EMF ⇒ the pair with the <b>widest gap</b> in <i>E</i>° ⇒ Ag (top) with Zn (bottom): 0.80 − (−0.76) = 1.56 V, beating Zn–Cu (1.10 V).',
          '<b>The trap:</b> equating “most positive <i>E</i>°” with “best reducing agent.” It is the opposite — a high reduction potential means the species loves electrons (good oxidant), so it is a poor reducer.',
        ],
        ans: '(i) <b>Zn</b> is the strongest reducing agent; (ii) the <b>Zn–Ag</b> cell gives the largest EMF.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'c11-07-fig-7.4',
        q: 'For the cell Zn | Zn<sup>2+</sup>(1 M) ‖ Ag<sup>+</sup>(1 M) | Ag, calculate <i>E</i>°<sub>cell</sub> and Δ<i>G</i>°. Take <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V, <i>E</i>°(Zn<sup>2+</sup>/Zn) = −0.76 V, <i>F</i> = 96500 C mol<sup>−1</sup>. (Links electrode potential with thermodynamics.)',
        steps: [
          '<b>Cell reaction</b> (silver is reduced, zinc oxidised):<br>Zn + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag',
          '<b>EMF:</b><br><i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> = (+0.80) − (−0.76)',
          '<b>Electrons transferred:</b> although the silver half-reaction is written with 1 e<sup>−</sup>, the <b>balanced cell reaction reduces 2 Ag<sup>+</sup></b>, so <i>n</i> = 2 (not 1!).',
          '<b>Free energy:</b><br>Δ<i>G</i>° = −<i>nFE</i>°<sub>cell</sub> = −(2)(96500)(1.56) = −3.01 × 10<sup>5</sup> J',
        ],
        ans: '<i>E</i>°<sub>cell</sub> = 1.56 V, Δ<i>G</i>° ≈ −301 kJ (negative ⇒ spontaneous).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Will Cu<sup>+</sup> disproportionate in aqueous solution? Use the data to find <i>E</i>°<sub>cell</sub> and the equilibrium constant <i>K</i>.<br>Cu<sup>+</sup> + e<sup>−</sup> → Cu, <i>E</i>° = +0.52 V; Cu<sup>2+</sup> + e<sup>−</sup> → Cu<sup>+</sup>, <i>E</i>° = +0.16 V<br>(Links the disproportionation idea from Topics 01 and 02 to electrode potentials.)',
        steps: [
          '<b>Set up the disproportionation</b> 2Cu<sup>+</sup> → Cu + Cu<sup>2+</sup> as a cell: one Cu<sup>+</sup> is reduced to Cu (cathode), the other is oxidised to Cu<sup>2+</sup> (anode).<br>• Cathode (reduction): Cu<sup>+</sup>/Cu, <i>E</i>° = +0.52 V.<br>• Anode (oxidation): the Cu<sup>2+</sup>/Cu<sup>+</sup> couple, <i>E</i>° = +0.16 V.',
          '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> = 0.52 − 0.16 = +0.36 V<br>Since <i>E</i>°<sub>cell</sub> > 0, the disproportionation is <b>spontaneous</b> — Cu<sup>+</sup> is unstable in water.',
          '<b>Equilibrium constant</b> (here <i>n</i> = 1, one electron transferred overall):<br>log <i>K</i> = <i>nE</i>°<sub>cell</sub>/0.0591 = (1)(0.36)/0.0591 ≈ 6.09',
        ],
        ans: '<i>E</i>°<sub>cell</sub> = +0.36 V, <i>K</i> ≈ 1.2 × 10<sup>6</sup>. The large <i>K</i> confirms Cu<sup>+</sup> disproportionates almost completely — which is exactly why cuprous salts are rare in aqueous solution while Cu<sup>2+</sup> dominates.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] 25.0 mL of FeSO<sub>4</sub> solution required 20.0 mL of 0.020 M KMnO<sub>4</sub> in acidic medium for complete oxidation. Find the molarity of the FeSO<sub>4</sub>.',
            a: 'meq equal: <i>M</i>(1)(25.0) = (0.020)(5)(20.0) ⇒ <i>M</i><sub>FeSO₄</sub> = 0.080 M.',
          },
          {
            q: '[NEET] Given <i>E</i>°(Fe<sup>2+</sup>/Fe) = −0.44 V and <i>E</i>°(Cu<sup>2+</sup>/Cu) = +0.34 V, in the cell formed from these, which electrode is the cathode and in which direction do electrons flow in the wire?',
            a: 'Cu is the cathode (higher <i>E</i>°); electrons flow from Fe (anode) to Cu through the wire.',
          },
          {
            q: '[JEE Main] Calculate <i>E</i>°<sub>cell</sub> for Ni | Ni<sup>2+</sup> ‖ Ag<sup>+</sup> | Ag given <i>E</i>°(Ni<sup>2+</sup>/Ni) = −0.25 V, <i>E</i>°(Ag<sup>+</sup>/Ag) = +0.80 V, and state <i>n</i> for the cell reaction.',
            a: '<i>E</i>°<sub>cell</sub> = 0.80 − (−0.25) = 1.05 V; <i>n</i> = 2 (two Ag<sup>+</sup> reduced per Ni).',
          },
          {
            q: '[JEE Main] Why must a KMnO<sub>4</sub> titration be carried out in dilute H<sub>2</sub>SO<sub>4</sub> and not in HCl or HNO<sub>3</sub>? (Two-line reason.)',
            a: 'HCl’s Cl<sup>−</sup> would itself be oxidised by MnO<sub>4</sub><sup>−</sup>, consuming extra titrant (wrong result); HNO<sub>3</sub> is itself an oxidiser. Dilute H<sub>2</sub>SO<sub>4</sub> is non-interfering.',
          },
          {
            q: '[JEE Advanced] For Zn | Zn<sup>2+</sup>(0.1 M) ‖ Cu<sup>2+</sup>(0.01 M) | Cu with <i>E</i>°<sub>cell</sub> = 1.10 V, compute <i>E</i><sub>cell</sub> at 298 K.',
            a: '<i>Q</i> = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>] = 0.1/0.01 = 10; <i>E</i><sub>cell</sub> = 1.10 − (0.0591/2) log 10 = 1.10 − 0.0296 = 1.07 V.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the cell Zn | Zn<sup>2+</sup> ‖ Cu<sup>2+</sup> | Cu, the role of the salt bridge is to:',
        opts: [
          { label: 'carry electrons between the half-cells', nudge: '<b>(a)</b> electrons travel through the external wire, never the bridge.' },
          { label: 'maintain electrical neutrality of the two solutions', nudge: null },
          { label: 'speed up the electrode reactions', nudge: '<b>(c)</b> the bridge is electrically passive, not a catalyst.' },
          { label: 'increase the cell EMF', nudge: '<b>(d)</b> EMF is set by the electrodes’ <i>E</i>°, not the bridge.' },
        ],
        correct: 1,
        solution: 'As Zn<sup>2+</sup> builds up in the anode beaker and Cu<sup>2+</sup> depletes in the cathode beaker, the salt bridge’s ions migrate to cancel the charge imbalance, keeping current flowing.',
      },
      {
        t: 'mcq',
        q: 'The standard reduction potentials are Li<sup>+</sup>/Li = −3.05, Zn<sup>2+</sup>/Zn = −0.76, Cu<sup>2+</sup>/Cu = +0.34, Ag<sup>+</sup>/Ag = +0.80 V. The strongest oxidising agent is:',
        opts: [
          {
            label: 'Li<sup>+</sup>',
            nudge: '<b>(a)</b> Li<sup>+</sup> has the most negative <i>E</i>°, so it is the weakest oxidant (Li metal is the best reductant).',
          },
          { label: 'Zn<sup>2+</sup>', nudge: '<b>(b)</b> Zn<sup>2+</sup> (−0.76 V) is a weak oxidant — its <i>E</i>° is negative.' },
          { label: 'Cu<sup>2+</sup>', nudge: '<b>(c)</b> Cu<sup>2+</sup> (+0.34 V) is a moderate oxidant, but Ag<sup>+</sup> (+0.80 V) is higher.' },
          { label: 'Ag<sup>+</sup>', nudge: null },
        ],
        correct: 3,
        solution: 'The species with the most positive reduction potential most readily accepts electrons — it is the strongest oxidant. Ag<sup>+</sup> wins. The trap is reading “most negative” as “most reactive oxidiser.”',
      },
      {
        t: 'mcq',
        q: 'For a cell reaction with <i>n</i> = 2 and <i>E</i>°<sub>cell</sub> = +0.295 V at 298 K, Δ<i>G</i>° is approximately:',
        opts: [
          { label: '−57 kJ', nudge: null },
          { label: '−28.5 kJ', nudge: '<b>(b)</b> forgot the factor <i>n</i> = 2 (used <i>n</i> = 1).' },
          {
            label: '+57 kJ',
            nudge: '<b>(c)</b> right magnitude, wrong sign — a spontaneous cell (<i>E</i>° > 0) must give Δ<i>G</i>° < 0.',
          },
          { label: '−114 kJ', nudge: '<b>(d)</b> used <i>n</i> = 4 (doubled <i>n</i> again): −(4)(96500)(0.295) ≈ −114 kJ.' },
        ],
        correct: 0,
        solution: 'Δ<i>G</i>° = −<i>nFE</i>° = −(2)(96500)(0.295) = −56,935 J ≈ −57 kJ.',
      },
      {
        t: 'mcq',
        q: 'A KMnO<sub>4</sub> solution is being standardised. Which medium is correct?',
        opts: [
          { label: 'dilute HCl', nudge: '<b>(a)</b> Cl<sup>−</sup> is oxidised by MnO<sub>4</sub><sup>−</sup>, consuming extra titrant.' },
          { label: 'dilute H<sub>2</sub>SO<sub>4</sub>', nudge: null },
          {
            label: 'dilute HNO<sub>3</sub>',
            nudge: '<b>(c)</b> HNO<sub>3</sub> is itself an oxidising agent and can attack the reductant being measured.',
          },
          { label: 'any of these', nudge: '<b>(d)</b> wrong because two of the three media interfere.' },
        ],
        correct: 1,
        solution: 'Dilute H<sub>2</sub>SO<sub>4</sub> supplies the H<sup>+</sup> needed to reduce MnO<sub>4</sub><sup>−</sup> to Mn<sup>2+</sup> without interfering.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Equating moles instead of equivalents.</b> At the endpoint it is equivalents (moles × n-factor) that match, never raw moles. Forgetting the n-factor is the classic titration error.',
          '<b>Using the wrong n-factor for the medium.</b> MnO<sub>4</sub><sup>−</sup> is a 5-electron oxidant only in acid; in neutral/mild base it is a 3-electron oxidant (→ MnO<sub>2</sub>). Decide the medium first.',
          '<b>Mis-counting <i>n</i> in cell EMF.</b> <i>n</i> is the electrons in the <b>balanced cell reaction</b> — for Zn + 2Ag<sup>+</sup>, <i>n</i> = 2 even though the silver half is written with 1 e<sup>−</sup>.',
          '<b>Sign errors and the wrong electron path.</b> Always <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> (both as reduction potentials); and electrons travel through the wire (anode → cathode), not the bridge.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For titrations, write everything as <i>M n V</i> on each side and equate — the unknown pops out in one line, no balanced equation needed. For cells, <b>rank the <i>E</i>° values first</b>: higher = cathode, lower = anode, and the EMF is just the gap. A positive gap means “spontaneous as written”; a negative gap means you’ve drawn the cell backwards — swap the electrodes rather than redoing the algebra.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Titration endpoint',
            note: 'meq<sub>ox</sub> = meq<sub>red</sub> ⇒ <i>M</i><sub>1</sub><i>n</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>n</i><sub>2</sub><i>V</i><sub>2</sub> (equivalents, not moles).',
          },
          {
            f: 'n-factors (acid)',
            note: 'MnO<sub>4</sub><sup>−</sup> = 5 · Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> = 6 · C<sub>2</sub>O<sub>4</sub><sup>2−</sup> = 2 · Fe<sup>2+</sup> = 1. (MnO<sub>4</sub><sup>−</sup> neutral = 3.)',
          },
          {
            f: 'KMnO<sub>4</sub> rule',
            note: 'titrate in <b>dilute H<sub>2</sub>SO<sub>4</sub></b> — not HCl (oxidises Cl<sup>−</sup>) or HNO<sub>3</sub> (itself an oxidant). Self-indicating (pink endpoint).',
          },
          {
            f: 'EMF',
            note: '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub> (both reduction potentials); positive ⇒ spontaneous.',
          },
          {
            f: 'Energy & equilibrium',
            note: 'Δ<i>G</i>° = −<i>nFE</i>°<sub>cell</sub> · log <i>K</i> = <i>nE</i>°<sub>cell</sub>/0.0591 · <i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i> (298 K).',
          },
          {
            f: 'Activity series',
            note: 'higher (more negative <i>E</i>°) metal displaces the ion of a lower one — Zn displaces Cu<sup>2+</sup>; Cu cannot displace Zn<sup>2+</sup>.',
          },
          { f: '(Quantitative cell EMF/Nernst is developed fully in Class 12 Electrochemistry.)', note: '' },
        ],
        aids: ['<b>Electrode mnemonic: An Ox / Red Cat</b> — Anode = Oxidation, Reduction = Cathode. Electrons flow anode → cathode in the <b>wire</b>.'],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 320–326 ─────────────────────────
  {
    n: '04',
    title: 'Types of Redox Reactions & Redox in Action',
    kalam: 'Learning to spot the family on sight is what turns a scary-looking equation into a two-second classification.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A direct, high-frequency scorer. CBSE Boards ask “classify the following redox reactions” and 1-mark Stock-notation/disproportionation questions. NEET reliably tests reactivity-series displacement and “which is a disproportionation.” JEE Main asks classification combined with O.N. analysis; JEE Advanced favours borderline cases (intramolecular redox, comproportionation) and reactivity-series prediction.',
      },
      {
        t: 'p',
        html: 'You now know how electrons move in a redox reaction. This topic is about recognising the <b>shapes</b> these reactions come in — because almost every redox reaction you will ever meet falls into one of just <b>four families</b>. Learning to spot the family on sight is what turns a scary-looking equation into a two-second classification.',
      },
      {
        t: 'p',
        html: 'Think of it like recognising cricket shots. A cover drive, a pull, a sweep, a cut — once you know the four basic strokes, every shot a batsman plays is just a variation. Redox reactions are the same:<br>• <b>Combination</b> — two things join into one, and in doing so electrons shift. Magnesium meets oxygen and they fuse into MgO. (Two players run a single quick run together.)<br>• <b>Decomposition</b> — one thing splits into two or more, with electrons redistributing. Heated potassium chlorate breaks into KCl and oxygen. (The reverse stroke of combination.)<br>• <b>Displacement</b> — one species kicks out another and takes its place, because it wants the electrons more. Drop a zinc strip into blue copper sulphate and the zinc shoves copper out of solution, leaving the blue to fade. (A substitute fielder replacing a weaker one.)<br>• <b>Disproportionation</b> — the strangest and most beautiful: a single element, sitting at one middling oxidation state, <b>splits its own fate</b> — some atoms climb to a higher state while others fall to a lower one, in the very same reaction. (One player somehow both scores and gets out on the same ball.)',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> The deepest idea uniting displacement reactions is <b>competitive electron transfer</b> — a tug-of-war for electrons. When you place zinc in copper sulphate, you are really asking: “Who wants these electrons more, zinc or copper?” Copper wins, so copper ions grab zinc’s electrons and deposit as metal, while zinc dissolves. Rank every metal by how badly it wants to keep its electrons (i.e. how easily it gives them up) and you get the <b>reactivity (activity) series</b> — the master league-table that predicts the winner of any such contest before you even mix the chemicals.',
      },
      {
        t: 'p',
        html: 'This same competition runs in reverse for non-metals: a more reactive halogen displaces a less reactive one (Cl<sub>2</sub> frees Br<sub>2</sub> from a bromide), because chlorine’s pull on electrons beats bromine’s.',
      },
      {
        t: 'p',
        html: '<b>Where redox shows up in real life.</b> This is not abstract — redox runs the world around you. The rusting of an iron gate, the combustion in a scooter engine, the respiration keeping you alive, the bleaching of clothes, the battery in your phone, the extraction of aluminium from its ore, the antiseptic sting of KMnO<sub>4</sub> on a cut — every one of these is a redox reaction wearing everyday clothes.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Two cautions that examiners love. (1) <b>Not every combination or decomposition is a redox reaction.</b> CaO + CO<sub>2</sub> → CaCO<sub>3</sub> is a combination, but no oxidation number changes — so it is not redox. Always check for an O.N. change before classifying. (2) <b>Disproportionation needs an element in an intermediate oxidation state</b> — one with both a higher and a lower state available. An element already at its maximum (e.g. Mn in MnO<sub>4</sub><sup>−</sup>) or minimum cannot disproportionate.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'proc',
        title: 'The four types of redox reactions',
        steps: [
          '<b>Combination redox:</b> A + B → AB where at least one element changes O.N. (e.g. C + O<sub>2</sub> → CO<sub>2</sub>).',
          '<b>Decomposition redox:</b> AB → A + B with O.N. changes (e.g. 2H<sub>2</sub>O →<sup>electrolysis</sup> 2H<sub>2</sub> + O<sub>2</sub>). The reverse of combination.',
          '<b>Displacement redox:</b> A + BC → AC + B, where A displaces B. Two sub-types:<br>• <b>Metal displacement:</b> a more reactive metal displaces a less reactive metal’s ion (Zn + CuSO<sub>4</sub> → ZnSO<sub>4</sub> + Cu).<br>• <b>Non-metal displacement:</b> hydrogen displacement (active metal + water/acid → H<sub>2</sub>) and halogen displacement (more reactive halogen frees a less reactive one).',
          '<b>Disproportionation:</b> one element in a single intermediate O.N. is simultaneously oxidised and reduced (2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>; O goes −1 → −2 and 0).',
        ],
      },
      {
        t: 'p',
        html: '<b>Related definitions:</b><br>• <b>Comproportionation (the reverse of disproportionation):</b> two different O.N. states of the same element converge to a single intermediate state. Example: 2H<sub>2</sub>S + SO<sub>2</sub> → 3S + 2H<sub>2</sub>O (S at −2 and +4 both become 0).<br>• <b>Reactivity (activity) series:</b> metals arranged by decreasing ease of oxidation (decreasing reducing power); equivalently, by increasing standard reduction potential.<br>• <b>Stock notation:</b> the oxidation number of an element written as a <b>Roman numeral in parentheses</b> immediately after its name or symbol — e.g. iron(III), Fe(III), in Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>; copper(II) in CuSO<sub>4</sub>; manganese(VII) in KMnO<sub>4</sub>.',
      },
      {
        t: 'p',
        html: '<b>The reactivity series (high → low reactivity):</b><br>K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au<br>A metal <b>higher</b> in the series displaces the ion of any metal <b>lower</b> than it. Metals above (H) liberate H<sub>2</sub> from acids; those below it do not.',
      },
      {
        t: 'p',
        html: '<b>Halogen reactivity (displacing power):</b> F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Nature:</b> classification is qualitative (no units). Stock numerals are dimensionless O.N. values.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'A. How to classify a redox reaction (step-by-step)',
        steps: [
          '<b>Step 1 — Assign oxidation numbers</b> to every element on both sides. <b>Why:</b> classification depends entirely on which O.N.s change, not on how the equation looks.',
          '<b>Step 2 — Confirm it is redox at all.</b> If no O.N. changes, it is not a redox reaction (it may be acid–base, precipitation, or simple combination). <b>Why:</b> this single check kills the most common trap.',
          '<b>Step 3 — Count how many substances combine or split, and how many elements change state:</b><br>– Two reactants → one product, with O.N. change ⇒ <b>combination</b>.<br>– One reactant → two-or-more products, with O.N. change ⇒ <b>decomposition</b>.<br>– A free element displaces a combined one ⇒ <b>displacement</b> (then check metal vs non-metal).<br>– <b>The same element</b> ends in two different O.N.s, one higher and one lower than the start ⇒ <b>disproportionation</b>. The reverse (two states → one) ⇒ <b>comproportionation</b>.',
        ],
      },
      {
        t: 'proc',
        title: 'B. How to predict a displacement using the reactivity series',
        steps: [
          '<b>Step 1 — Locate both species in the series.</b> For metals use the activity series; for halogens use F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>.',
          '<b>Step 2 — The higher (more reactive) species displaces the lower one.</b> <b>Why:</b> the more reactive species gives up electrons more readily (metals) or grabs them more strongly (halogens), so it wins the competition.',
          '<b>Step 3 — If the added species is lower than the one in the compound, no reaction occurs.</b> A copper rod in ZnSO<sub>4</sub> does nothing — copper is below zinc.',
        ],
      },
      {
        t: 'proc',
        title: 'C. How to write Stock notation',
        steps: [
          '<b>Step 1 — Find the element’s O.N.</b> by the charge-balance rule from Topic 01.',
          '<b>Step 2 — Append the value as a Roman numeral in parentheses</b>, no space, no sign for positive values (the sign is implied positive). Example: in SnCl<sub>4</sub>, tin is +4 ⇒ <b>tin(IV) chloride</b>; in FeCl<sub>2</sub>, iron is +2 ⇒ <b>iron(II) chloride</b>.',
        ],
      },
      {
        t: 'p',
        html: '<b>D. The honest limits of the oxidation-number idea</b><br>The O.N. concept is a brilliant book-keeping tool, but it is a model, not reality — and a master student should know where it strains:<br>• O.N. is a <b>hypothetical</b> charge from an arbitrary electron-sharing convention; it is not the real charge on an atom.<br>• <b>Fractional/average O.N.</b> (e.g. +2.5 in S<sub>4</sub>O<sub>6</sub><sup>2−</sup>) describe no real atom — only structure reveals the true per-atom states.<br>• For many <b>organic</b> and chain compounds, assigning O.N. becomes ambiguous because of like-atom (C–C, O–O) bonds, where equal sharing hides the genuine electron distribution.<br>• O.N. is <b>not the same as valency</b> — valency is an unsigned bonding capacity; O.N. carries a sign and can differ in magnitude.',
      },
      {
        t: 'p',
        html: '<b>E. Redox in everyday life (the applications a master student should hold)</b><br>• <b>Corrosion (rusting):</b> iron is oxidised by atmospheric O<sub>2</sub> and moisture (Fe → Fe<sup>2+</sup> → hydrated Fe<sub>2</sub>O<sub>3</sub>). It is prevented by <b>galvanisation</b> (a sacrificial zinc coat that, being more reactive, oxidises instead of the iron) and by <b>cathodic protection</b>. Corrosion is unwanted redox; understanding the reactivity series is what lets us stop it.<br>• <b>Combustion & respiration:</b> burning fuels and cellular respiration are both oxidations of carbon compounds by O<sub>2</sub>, releasing energy — the same chemistry powering an engine and a living cell.<br>• <b>Electrochemical cells:</b> dry cells, lead-storage batteries, and fuel cells are controlled redox reactions packaged to deliver electricity (developed quantitatively in Topic 03 and Class 12).<br>• <b>Metallurgy:</b> most metals are extracted by <b>reduction</b> of their ores — e.g. iron oxide reduced by carbon monoxide in the blast furnace, and reactive metals like aluminium by electrolytic reduction.<br>• <b>Bleaching & disinfection:</b> chlorine and hydrogen peroxide bleach by oxidising coloured compounds; KMnO<sub>4</sub> and H<sub>2</sub>O<sub>2</sub> act as antiseptics by oxidising microbial matter.<br>• <b>Photography & electroplating:</b> photographic film relies on reduction of Ag<sup>+</sup> to metallic silver; electroplating deposits a metal by cathodic reduction. <b>Why this matters:</b> recognising the redox skeleton inside each of these turns “facts to memorise” into one idea applied many ways.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Classify each reaction, and state whether it is redox:<br>(i) 2KClO<sub>3</sub> →<sup>Δ</sup> 2KCl + 3O<sub>2</sub><br>(ii) CaO + CO<sub>2</sub> → CaCO<sub>3</sub><br>(iii) Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu',
        steps: [
          '(i) Cl: +5 → −1 (reduced); O: −2 → 0 (oxidised). One reactant → two products with O.N. change ⇒ <b>decomposition redox</b>.',
          '(ii) Ca stays +2, C stays +4, O stays −2 — no O.N. change. Combination, but <b>not redox</b>.',
          '(iii) Fe: 0 → +2 (oxidised); Cu: +2 → 0 (reduced); a free metal displaces a combined one ⇒ <b>metal-displacement redox</b>.',
        ],
        ans: '(i) decomposition (redox); (ii) combination (non-redox); (iii) displacement (redox).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which pair will react? (a) Cu + ZnSO<sub>4</sub> (b) Ag + CuSO<sub>4</sub> (c) Zn + FeSO<sub>4</sub> (d) Cu + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>',
        steps: [
          '<b>Mental rule:</b> a metal reacts only if it sits <b>above</b> the salt’s metal in the activity series.<br>• (a) Cu is below Zn — no reaction.<br>• (b) Ag is below Cu — no reaction.<br>• (c) <b>Zn is above Fe — reacts!</b> Zn + FeSO<sub>4</sub> → ZnSO<sub>4</sub> + Fe.<br>• (d) Cu is below Al — no reaction.',
          '<b>The trap:</b> candidates pick (a) or (b) because the metals “look reactive,” forgetting that direction matters — only a more reactive metal displaces a less reactive one, never the reverse.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For the reaction 3Cl<sub>2</sub> + 6NaOH → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O (hot, concentrated), classify it and prove your classification with oxidation numbers. Could the same element instead undergo comproportionation? (Combines classification with O.N. analysis.)',
        steps: [
          '<b>O.N. of chlorine:</b> in Cl<sub>2</sub> it is 0; in NaCl it is −1; in NaClO<sub>3</sub> it is +5. The <b>same element</b> (Cl) starts at one state (0) and ends both lower (−1) and higher (+5) ⇒ this is a <b>disproportionation</b>.',
          '<b>Electron check:</b> per the equation, 5 Cl atoms drop 0 → −1 (gain 5 e<sup>−</sup> total) and 1 Cl climbs 0 → +5 (lose 5 e<sup>−</sup>) — electrons balance, confirming a single element splitting both ways.',
          '<b>Comproportionation possibility:</b> yes, the reverse exists — e.g. 5Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup> + 6H<sup>+</sup> → 3Cl<sub>2</sub> + 3H<sub>2</sub>O, where chlorine at −1 and +5 <b>converge</b> to 0. Disproportionation and comproportionation are two directions of the same chemistry.',
        ],
        ans: 'Disproportionation; the reverse reaction is its comproportionation.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Ammonium dichromate decomposes on heating: (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> →<sup>Δ</sup> N<sub>2</sub> + Cr<sub>2</sub>O<sub>3</sub> + 4H<sub>2</sub>O. Classify this reaction precisely — is it a simple decomposition, a disproportionation, or something rarer? Justify with oxidation numbers.',
        steps: [
          '<b>Assign O.N.:</b> in (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, nitrogen is −3 and chromium is +6. In the products, N in N<sub>2</sub> is 0 and Cr in Cr<sub>2</sub>O<sub>3</sub> is +3.<br>• N: −3 → 0 — <b>oxidised</b> (loses electrons).<br>• Cr: +6 → +3 — <b>reduced</b> (gains electrons).',
          'Here the oxidant and reductant are <b>two different elements bound within the same compound</b> — the electron transfer happens inside one substance. This is a special case called an <b>intramolecular redox reaction</b> (a sub-class of decomposition redox). It is not disproportionation, because disproportionation requires <b>one</b> element splitting; here two distinct elements (N and Cr) change in opposite directions.',
        ],
        ans: 'It is an <b>intramolecular redox (decomposition) reaction</b> — N is oxidised and Cr is reduced within the same compound; distinct from disproportionation, which needs a single element.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Classify and state if redox: (i) N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>; (ii) AgNO<sub>3</sub> + NaCl → AgCl + NaNO<sub>3</sub>.',
            a: '(i) combination, <b>redox</b> (N 0 → −3, H 0 → +1); (ii) double displacement (precipitation), <b>not redox</b>.',
          },
          {
            q: '[NEET] Which reaction is a disproportionation? (a) Cu<sup>2+</sup> + Fe → Cu + Fe<sup>2+</sup> (b) 3Br<sub>2</sub> + 6OH<sup>−</sup> → 5Br<sup>−</sup> + BrO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O (c) H<sub>2</sub> + Cl<sub>2</sub> → 2HCl.',
            a: '(b) — Br at 0 goes to both −1 and +5.',
          },
          {
            q: '[JEE Main] Give the Stock notation (Roman-numeral) names for the metal in: (i) FeCl<sub>3</sub>; (ii) Cu<sub>2</sub>O; (iii) KMnO<sub>4</sub>.',
            a: '(i) iron(III) chloride; (ii) copper(I) oxide; (iii) potassium manganate(VII).',
          },
          {
            q: '[JEE Main] Using the reactivity series, predict whether each occurs: (i) Mg + ZnSO<sub>4</sub>; (ii) Cl<sub>2</sub> + NaF; (iii) Br<sub>2</sub> + KI.',
            a: '(i) yes (Mg above Zn); (ii) no (Cl<sub>2</sub> cannot displace the more reactive F); (iii) yes (Br<sub>2</sub> above I<sub>2</sub>, so it frees I<sub>2</sub> from iodide).',
          },
          {
            q: '[JEE Advanced] 2Cu<sup>+</sup> → Cu + Cu<sup>2+</sup> is observed in aqueous solution but 3Fe<sup>2+</sup> → Fe + 2Fe<sup>3+</sup> is not. Using the idea of intermediate oxidation states and the species’ stability, explain why one disproportionates and the other does not.',
            a: 'Cu<sup>+</sup> is an intermediate state with Cu<sup>2+</sup> and Cu both accessible, and the disproportionation is thermodynamically favourable (<i>E</i>°<sub>cell</sub> > 0, large <i>K</i> — see Topic 03), so Cu<sup>+</sup> is unstable in water. For iron, Fe<sup>2+</sup> is stable towards disproportionation: for 3Fe<sup>2+</sup> → Fe + 2Fe<sup>3+</sup>, <i>E</i>°<sub>cell</sub> = −0.44 − 0.77 = −1.21 V < 0, so it does not occur (the reverse, Fe + 2Fe<sup>3+</sup> → 3Fe<sup>2+</sup>, is spontaneous).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a redox reaction?',
        opts: [
          { label: 'BaCl<sub>2</sub> + H<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + 2HCl', nudge: '<b>(a)</b> precipitation, no O.N. change.' },
          {
            label: 'CaCO<sub>3</sub> →<sup>Δ</sup> CaO + CO<sub>2</sub>',
            nudge: '<b>(b)</b> decomposition but not redox (Ca, C, O all unchanged) — the classic trap that “all decompositions are redox.”',
          },
          { label: '2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>', nudge: null },
          { label: 'NaOH + HCl → NaCl + H<sub>2</sub>O', nudge: '<b>(d)</b> neutralisation, no O.N. change.' },
        ],
        correct: 2,
        solution: 'Na: 0 → +1 (oxidised); H: +1 → 0 (reduced) — a hydrogen-displacement redox.',
      },
      {
        t: 'mcq',
        q: 'The reaction 3MnO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2H<sub>2</sub>O is an example of:',
        opts: [
          { label: 'comproportionation', nudge: '<b>(a)</b> comproportionation is the reverse (two states → one).' },
          { label: 'disproportionation', nudge: null },
          { label: 'displacement', nudge: '<b>(c)</b> displacement needs one element to push another out of a compound; here only Mn changes, splitting both ways.' },
          { label: 'combination', nudge: '<b>(d)</b> combination joins reactants into one product; here one reactant gives three products.' },
        ],
        correct: 1,
        solution: 'Mn in MnO<sub>4</sub><sup>2−</sup> is +6; it goes to +7 (in MnO<sub>4</sub><sup>−</sup>) and to +4 (in MnO<sub>2</sub>) — one element, one state, splitting both ways.',
      },
      {
        t: 'mcq',
        q: 'The Stock-notation name of Fe<sub>3</sub>O<sub>4</sub> reflects that iron is present as:',
        opts: [
          { label: 'only Fe(II)', nudge: '<b>(a)</b> only Fe(II) would be FeO; it ignores the mixed nature (average +8/3).' },
          { label: 'only Fe(III)', nudge: '<b>(b)</b> only Fe(III) would be Fe<sub>2</sub>O<sub>3</sub>; it ignores the mixed nature.' },
          { label: 'both Fe(II) and Fe(III)', nudge: null },
          { label: 'Fe(0)', nudge: '<b>(d)</b> iron is not free metal here.' },
        ],
        correct: 2,
        solution: 'Fe<sub>3</sub>O<sub>4</sub> is a mixed oxide, FeO · Fe<sub>2</sub>O<sub>3</sub> — one Fe(II) and two Fe(III), giving the average +8/3. Stock notation honestly records both real states.',
      },
      {
        t: 'mcq',
        q: 'A metal X displaces Y from Y<sup>2+</sup> solution but cannot displace Z from Z<sup>2+</sup> solution. The correct order of reactivity is:',
        opts: [
          {
            label: 'Y > X > Z',
            nudge: '<b>(a)</b> puts Y above X (then X could not displace Y) and X above Z (then X would displace Z) — it breaks both facts.',
          },
          {
            label: 'X > Y > Z',
            nudge: '<b>(b)</b> puts X above Z, so X would displace Z — it breaks “X fails on Z”.',
          },
          { label: 'Z > X > Y', nudge: null },
          {
            label: 'X > Z > Y',
            nudge: '<b>(d)</b> also puts X above Z — it breaks “X fails on Z”.',
          },
        ],
        correct: 2,
        solution: 'X displaces Y ⇒ X is above Y. X cannot displace Z ⇒ Z is above X. So Z > X > Y.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming all combinations/decompositions are redox.</b> CaO + CO<sub>2</sub> and CaCO<sub>3</sub> → CaO + CO<sub>2</sub> involve no O.N. change. Always assign O.N. first.',
          '<b>Getting displacement direction backwards.</b> Only a more reactive species displaces a less reactive one — copper never displaces zinc. Check the series before predicting.',
          '<b>Calling a two-element reaction a disproportionation.</b> Disproportionation needs <b>one</b> element splitting into a higher and lower state. When two different elements move oppositely inside one compound (ammonium dichromate), it is intramolecular redox, not disproportionation.',
          '<b>Stock-notation slips.</b> Use Roman numerals in parentheses with no + sign — iron(III), not iron(+3) or iron(3).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> To classify fast, glance at the count of reactants/products first (2→1 combination, 1→many decomposition, element-swaps displacement), then confirm with a single O.N. check. For disproportionation, scan for <b>one element appearing in three different oxidation states across the equation</b> (its starting state plus a higher and a lower — one start, two ends; two starts and one end is comproportionation) — that pattern is the unmistakable fingerprint.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Four types (each must show an O.N. change to be redox)',
            note: '<b>Combination</b> A + B → AB · <b>Decomposition</b> AB → A + B · <b>Displacement</b> A + BC → AC + B · <b>Disproportionation</b> (one element → higher + lower).',
          },
          {
            f: 'Displacement sub-types',
            note: 'metal (Zn frees Cu) · hydrogen (active metal + acid/water → H<sub>2</sub>) · halogen (F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>).',
          },
          {
            f: 'Reactivity series',
            note: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au. Higher displaces lower; above H liberates H<sub>2</sub> from acids.',
          },
          {
            f: '<b>Disproportionation</b> needs an <b>intermediate</b> O.N. (a higher and lower state available). <b>Comproportionation</b> = the reverse (two states → one). <b>Intramolecular redox</b> = two different elements change inside one compound (≠ disproportionation).',
            note: '',
          },
          {
            f: 'Stock notation',
            note: 'O.N. as a Roman numeral in parentheses — iron(III), manganese(VII); Fe<sub>3</sub>O<sub>4</sub> = mixed Fe(II)/Fe(III).',
          },
          { f: 'O.N. limits', note: 'a model, not real charge; fractional O.N. is only an average; not equal to valency.' },
          {
            f: 'Redox in life',
            note: 'combustion, respiration, rusting (+prevention), batteries, bleaching, photography, metallurgy (ore reduction), electroplating, antiseptics.',
          },
        ],
        aids: ['“Count first, confirm with O.N.; one element, one start, two ends = disproportionation.”'],
      },
    ],
  },
];
