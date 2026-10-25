import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Topics 03 and 04: pp. 135–150 of the Class 11 Chemistry Master
 * Reference, word for word: Periodic Trends in Chemical Properties & Anomalous
 * Behaviour (pp. 135–142) and Electronic Configuration & the s, p, d, f Blocks
 * (pp. 143–150), each split at its Sections 1 to 8. Figure 3.3 (p. 139) and
 * Figure 3.4 (p. 147) sit where the text cites them, at the end of each
 * topic's Section 3. Orbital and subshell labels are set upright (1s, 3d,
 * ns, (n − 1)d with the n italic), as NCERT does; the book sets them in maths
 * italic. Ranges in configurations use en dashes (ns¹–²), per the errata.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 135–142 ─────────────────────────
  {
    n: '03',
    title: 'Periodic Trends in Chemical Properties & Anomalous Behaviour',
    kalam: 'Move left to right and elements shift from metallic (electron-givers, basic oxides) through metalloids to non-metallic (electron-grabbers, acidic oxides).',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> CBSE Boards reliably ask 2–3 marks on predicting formulae/oxidation states from group position, or on the diagonal relationship. NEET tests 1 MCQ most years (diagonal pairs, “which shows variable valence”). JEE Main combines oxidation-state range with oxide acid–base character; JEE Advanced probes why nitrogen and fluorine cannot expand their valence shell — the d-orbital reasoning that underlies all second-period anomalies.',
      },
      {
        t: 'p',
        html: 'In Topic 02 we tracked the physical trends — size, ionisation energy, electron gain enthalpy, electronegativity. This topic asks the payoff question: <b>how do those physical trends translate into how an element actually reacts and combines?</b> The bridge between the two is one idea you have already met — every chemical property is just the <b>valence-shell electronic configuration</b> wearing a different costume.',
      },
      {
        t: 'p',
        html: 'Think of an element’s outer electrons as the cash a shopkeeper keeps in the front drawer. The <b>valence</b> (combining capacity) is how many “deals” that cash can fund. A group-1 metal carries a single loose note (<i>n</i>s<sup>1</sup>) — it hands it over instantly and becomes +1. A group-17 element is one note short of a full drawer (<i>n</i>s<sup>2</sup><i>n</i>p<sup>5</sup>) — it grabs one and becomes −1. The drawer fills up steadily across a period, so the combining capacity rises and then falls in a predictable rhythm.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a tug-of-war tournament across a period. On the far left stand the alkali metals — desperate to let go of their single rope-end (lose an electron), so they are wildly reactive as reducing agents. On the far right stand the halogens — desperate to grab a rope (gain an electron), so they are wildly reactive as oxidising agents. In the middle (carbon, silicon) sit the balanced players who neither give nor grab easily — the least reactive of the lot. So <b>chemical reactivity is high at both ends of a period and lowest in the centre</b>, exactly mirroring the ionisation-energy and electron-gain-enthalpy extremes from Topic 02.',
      },
      {
        t: 'p',
        html: 'A second pattern governs what kind of compound forms. Move left to right and elements shift from <b>metallic</b> (electron-givers, basic oxides) through <b>metalloids</b> to <b>non-metallic</b> (electron-grabbers, acidic oxides). Sodium’s oxide Na<sub>2</sub>O is strongly basic; chlorine’s oxide Cl<sub>2</sub>O<sub>7</sub> is strongly acidic; aluminium’s sits in between as amphoteric.',
      },
      {
        t: 'p',
        html: '<b>The anomalies.</b> Two kinds of “rule-breaking” matter here:<br>• <b>The second-period elements (Li, Be, B, C, N, O, F)</b> behave oddly compared with the rest of their groups, because they are unusually small, have a high charge-to-radius ratio, and — crucially — have <b>no d-orbitals</b> in their valence shell. With nowhere to promote electrons, they cannot expand their octet: nitrogen can never form NCl<sub>5</sub>, fluorine shows only the −1 state.<br>• <b>The diagonal relationship:</b> a second-period element resembles the element one step down and one step to the right — lithium behaves like magnesium, beryllium like aluminium — because moving down (size up) and across (size down) roughly cancel, leaving similar size and charge/radius ratio.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The simple “valence = group electrons or eight minus that” rule is for <b>representative (s/p-block)</b> elements. Transition metals show variable valence (using (<i>n</i> − 1)d electrons too), and that variability is a Class-12 story.<br>• “Oxidation state” and “valence” overlap loosely but are not identical — oxidation state is a signed charge assigned on electronegativity grounds, while valence is an unsigned combining number.<br>• Anomalous-behaviour reasoning here is held at the Ch03 level (size, charge density, d-orbital availability). Deeper group-specific traits belong to the p-block units of Class 12.',
      },

      { t: 'part', title: 'Key definitions, trends and data tables' },
      {
        t: 'formula',
        kicker: 'Valence (combining capacity)',
        main: 'For representative elements:<br>Valence = (number of valence electrons) or (8 − number of valence electrons)',
        legend: ['whichever the element uses to reach a noble-gas octet'],
        note: null,
      },
      {
        t: 'p',
        html: 'Group number (for s/p block, old A-convention) equals the number of valence electrons.',
      },
      {
        t: 'table',
        title: 'Valence across a period (period-3 example)',
        head: ['Group', '1', '2', '13', '14', '15', '16', '17'],
        rows: [
          ['Element', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'],
          ['Valence (w.r.t. O)', '1', '2', '3', '4', '5', '6', '7'],
          ['Oxide', 'Na<sub>2</sub>O', 'MgO', 'Al<sub>2</sub>O<sub>3</sub>', 'SiO<sub>2</sub>', 'P<sub>2</sub>O<sub>5</sub>', 'SO<sub>3</sub>', 'Cl<sub>2</sub>O<sub>7</sub>'],
          ['Valence (w.r.t. H)', '1', '2', '3', '4', '3', '2', '1'],
          ['Hydride', 'NaH', 'MgH<sub>2</sub>', 'AlH<sub>3</sub>', 'SiH<sub>4</sub>', 'PH<sub>3</sub>', 'H<sub>2</sub>S', 'HCl'],
        ],
      },
      {
        t: 'p',
        html: 'So on the <b>oxygen scale</b> valence climbs 1 → 7; on the <b>hydrogen scale</b> it rises 1 → 4 then falls 4 → 1.',
      },
      {
        t: 'def',
        term: 'Oxidation state',
        html: 'The charge an atom appears to have when shared electrons are assigned to the more electronegative atom. Example: in OF<sub>2</sub>, fluorine (most electronegative) takes the electrons → F is −1, O is +2; but in Na<sub>2</sub>O, oxygen is more electronegative than Na → O is −2, Na is +1.',
      },
      {
        t: 'table',
        title: 'Group oxidation states (general)',
        head: ['Group', '1', '2', '13', '14', '15', '16', '17'],
        rows: [
          [
            'Config',
            '<i>n</i>s<sup>1</sup>',
            '<i>n</i>s<sup>2</sup>',
            '<i>n</i>s<sup>2</sup><i>n</i>p<sup>1</sup>',
            '<i>n</i>s<sup>2</sup><i>n</i>p<sup>2</sup>',
            '<i>n</i>s<sup>2</sup><i>n</i>p<sup>3</sup>',
            '<i>n</i>s<sup>2</sup><i>n</i>p<sup>4</sup>',
            '<i>n</i>s<sup>2</sup><i>n</i>p<sup>5</sup>',
          ],
          ['Common O.S.', '+1', '+2', '+3, +1', '+4, +2', '−3, +3, +5', '−2, +4, +6', '−1, +1, +3, +5, +7'],
        ],
      },
      {
        t: 'p',
        html: 'The <b>maximum (group) oxidation state</b> of a p-block element equals its total valence electrons; lower states often differ in steps of two (the <b>inert-pair effect</b> stabilises the lower state down a group, e.g. Tl<sup>+</sup>, Pb<sup>2+</sup>).',
      },
      {
        t: 'p',
        html: '<b>Metallic vs non-metallic character.</b> Across a period: metallic ↓, non-metallic ↑ (Na, Mg metals → Al metalloid-ish → Si … Cl non-metals). Down a group: metallic ↑. Oxide character follows: <b>basic (left) → amphoteric (middle) → acidic (right)</b>.',
      },
      {
        t: 'def',
        term: 'Diagonal relationship',
        html: 'The first member of groups 1 and 2 (Li, Be) resembles the second member of the next group (Mg, Al respectively), owing to similar <b>ionic size</b> and <b>charge/radius ratio</b>. Classic pairs: <b>Li–Mg, Be–Al, B–Si</b>.',
      },
      {
        t: 'p',
        html: '<b>Anomalous second-period factors.</b> Small size, high charge/radius ratio, high electronegativity, and <b>absence of d-orbitals</b> in the valence shell (so the octet cannot be expanded). Consequences: restricted covalency (N maximum covalency 4, never pentavalent; F shows only −1).',
      },

      { t: 'part', title: 'Trend logic and reasoning framework' },
      { t: 'p', html: '(No formal derivation; what earns marks is the chain of reasoning.)' },
      {
        t: 'p',
        html: '<b>3.1 — Why valence rises then falls</b><br>An element combines to reach a noble-gas octet by whichever route is cheaper. On the left, atoms have few valence electrons and lose them — valence = electron count (1, 2, 3…). Past the middle, gaining electrons to complete the octet is cheaper, so valence-with-hydrogen counts the gap to eight (8 − <i>N</i>): 4, 3, 2, 1. The oxygen scale keeps climbing to 7 because oxygen lets an element display its full group (maximum) oxidation state.',
      },
      {
        t: 'proc',
        title: '3.2 — Assigning an oxidation state (procedure)',
        steps: [
          'Identify the more electronegative atom in each bond (recall the Topic 02 trend: EN rises up-and-right).',
          'Assign the shared pair to that atom; the other atom carries the positive count.',
          'Free elements are 0; the sum of oxidation states equals the overall charge. This is why the same element (oxygen) is −2 with sodium but +2 with fluorine — the partner’s electronegativity decides the sign.',
        ],
      },
      {
        t: 'p',
        html: '<b>3.3 — Why reactivity peaks at the extremes</b><br>Chain it from Topic 02: low ionisation enthalpy on the far left ⇒ electrons given up easily ⇒ violent metallic/reducing reactivity. Most negative electron gain enthalpy on the far right ⇒ electrons grabbed avidly ⇒ violent non-metallic/oxidising reactivity. The centre has neither extreme, so it is least reactive. Metallic character (electropositivity) therefore falls across a period and rises down a group, dragging oxide character from basic to acidic with it.',
      },
      {
        t: 'p',
        html: '<b>3.4 — The diagonal relationship reasoning</b><br>Going down a group, atomic/ionic size increases; going across to the right, it decreases. For the first two short-period elements these two shifts nearly cancel between an element and its lower-right neighbour, leaving <b>comparable size and charge/radius ratio</b>. Since charge density largely dictates chemistry (polarising power, bonding type), Li ends up chemically more like Mg than like Na, and Be more like Al than like Mg. e.g. both Li and Mg form normal oxides (not peroxides like Na), and both Be and Al form amphoteric, covalent-leaning compounds.',
      },
      {
        t: 'p',
        html: '<b>3.5 — Why second-period elements break the rules</b><br>Two grounded levers:<br>• <b>Smallness + high charge density</b> (chained from Topic 02 size trend): the first element of each group holds and polarises electrons far more strongly than its heavier group-mates, so its compounds lean covalent and its behaviour drifts toward the diagonal neighbour.<br>• <b>No valence d-orbitals:</b> elements of period 2 have only 2s and 2p available. There is no low-lying d sub-shell to promote an electron into, so they <b>cannot expand their octet</b>. Nitrogen therefore tops out at a covalency of 4 and never forms NCl<sub>5</sub> (whereas phosphorus, with empty 3d orbitals, forms PCl<sub>5</sub>). Fluorine, lacking d-orbitals and being the most electronegative, shows only the −1 state, while chlorine and below can reach +7 by using d-orbitals.',
      },
      { t: 'fig', id: 'c11-03-fig-3.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Element X belongs to group 2 and element Y to group 15 of the periodic table. (a) Predict the formula of the compound formed between X and Y. (b) State the oxidation state of each in that compound.',
        steps: [
          '<b>(a)</b> Group 2 ⇒ X reaches the octet by losing 2 electrons (valence 2, forms X<sup>2+</sup>). Group 15 ⇒ Y reaches the octet by gaining 3 electrons (valence 3, forms Y<sup>3−</sup>). Cross-balancing the charges (2 × 3 = 3 × 2 = 6): formula <b>X<sub>3</sub>Y<sub>2</sub></b>.',
          '<b>(b)</b> Oxidation state of X = +2; oxidation state of Y = −3.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following pairs exhibits a diagonal relationship: (1) Na–Mg, (2) Be–Al, (3) Li–Na, (4) B–C?',
        steps: [
          '<b>Speed approach.</b> Don’t analyse all four — recall the rule: diagonal = first element of a group resembling the lower-right neighbour.<br>• Na–Mg: same period, not diagonal.<br>• <b>Be–Al:</b> Be (group 2, period 2) ↔ Al (group 13, period 3) — one down, one right. ✓<br>• Li–Na: same group.<br>• B–C: same period.',
          'The trap options are all “same row” or “same column” pairs, which look related but are not the diagonal pattern.',
        ],
        ans: '(2) Be–Al.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: oxidation states + oxide character',
        q: 'An element Z has valence-shell configuration <i>n</i>s<sup>2</sup><i>n</i>p<sup>4</sup>. (a) To which group does it belong? (b) Give its minimum and maximum (group) oxidation states. (c) Predict the formula and acid–base nature of its highest oxide.',
        steps: [
          '<b>(a)</b> <i>n</i>s<sup>2</sup><i>n</i>p<sup>4</sup> ⇒ 6 valence electrons ⇒ <b>Group 16</b>.',
          '<b>(b)</b> Minimum oxidation state: gain 2 electrons to complete the octet ⇒ −2. Maximum (group) oxidation state = total valence electrons ⇒ +6.',
          '<b>(c)</b> In the +6 state the highest oxide is ZO<sub>3</sub>. Group 16 lies on the right of the table (non-metallic), so its highest oxide is <b>acidic</b> (e.g. analogous to SO<sub>3</sub>, which gives H<sub>2</sub>SO<sub>4</sub> with water).',
          'This stitches three skills: configuration → group, oxidation-state range, and the metallic/non-metallic → oxide-character link.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Phosphorus forms PCl<sub>5</sub>, but nitrogen — directly above it in group 15 — does not form NCl<sub>5</sub>. (a) Explain this difference rigorously in terms of orbital availability. (b) State nitrogen’s maximum covalency and the reasoning. (c) Predict, with justification, whether oxygen can show a +6 state analogous to sulphur’s in SF<sub>6</sub>.',
        steps: [
          '<b>(a)</b> To form five bonds, an atom must unpair its <i>n</i>s<sup>2</sup> electrons and promote one into an empty valence orbital, giving five singly-occupied orbitals. Phosphorus ([Ne]3s<sup>2</sup>3p<sup>3</sup>) has empty, low-lying <b>3d orbitals</b> to receive the promoted electron, so it reaches five unpaired electrons and forms PCl<sub>5</sub>. Nitrogen ([He]2s<sup>2</sup>2p<sup>3</sup>) has <b>no 2d orbitals</b> — the next available sub-shell (3s) is far too high in energy. With no way to expand beyond four orbitals (2s + 2p), nitrogen cannot form five bonds; NCl<sub>5</sub> does not exist.',
          '<b>(b)</b> Nitrogen’s maximum covalency is <b>4</b> (one 2s + three 2p orbitals). It can reach 4 (e.g. in NH<sub>4</sub><sup>+</sup>) by donating its lone pair, but never higher.',
          '<b>(c)</b> No — oxygen, like nitrogen, is a second-period element with only 2s and 2p orbitals and <b>no 2d orbitals</b>, so it cannot promote electrons to host six bonds. It cannot form OF<sub>6</sub> or show +6 the way sulphur (with empty 3d orbitals) does in SF<sub>6</sub>. Oxygen’s typical maximum is +2 (as in OF<sub>2</sub>).',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define oxidation state. Why does oxygen show −2 in Na<sub>2</sub>O but +2 in OF<sub>2</sub>?',
            a: 'Charge assigned to an atom on electronegativity grounds; O is more electronegative than Na (so −2) but less electronegative than F (so +2).',
          },
          {
            q: '[NEET] Which element resembles aluminium most closely on account of the diagonal relationship?',
            a: '<b>Beryllium</b> (Be–Al diagonal relationship).',
          },
          {
            q: '[JEE Main] Write the formulae of the highest oxide and the common hydride of the group-15 element of period 3, and state the valence shown in each.',
            a: 'Highest oxide P<sub>2</sub>O<sub>5</sub> (valence 5, w.r.t. O); common hydride PH<sub>3</sub> (valence 3, w.r.t. H).',
          },
          {
            q: '[JEE Main] Arrange Na<sub>2</sub>O, Al<sub>2</sub>O<sub>3</sub>, SO<sub>3</sub> in increasing order of acidic character, with reasoning.',
            a: 'Na<sub>2</sub>O < Al<sub>2</sub>O<sub>3</sub> < SO<sub>3</sub> — acidic character rises left → right across the period as metallic character falls (basic → amphoteric → acidic).',
          },
          {
            q: '[JEE Advanced] Explain why fluorine exhibits only the −1 oxidation state whereas chlorine exhibits −1, +1, +3, +5 and +7.',
            a: 'F has no valence d-orbitals and is the most electronegative element, so it cannot be promoted to higher states and is never positive — only −1. Cl has empty 3d orbitals, allowing promotion to give +1, +3, +5, +7 in addition to −1.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The maximum (group) oxidation state of a p-block element equals:',
        opts: [
          {
            label: 'eight minus its valence electrons',
            nudge: '<b>(a)</b> gives the negative/anionic valence, not the maximum positive state — a frequent swap.',
          },
          { label: 'the total number of its valence electrons', nudge: null },
          { label: 'the number of p-electrons only', nudge: '<b>(c)</b> ignores the <i>n</i>s<sup>2</sup> pair.' },
          { label: 'its period number', nudge: '<b>(d)</b> period number sets the principal shell, not the oxidation state.' },
        ],
        correct: 1,
        solution: 'The group state uses all the s and p valence electrons (e.g. S in +6 uses all six).',
      },
      {
        t: 'mcq',
        q: 'Lithium resembles magnesium more than it resembles sodium because:',
        opts: [
          { label: 'they have the same electronegativity exactly', nudge: '<b>(a)</b> “exactly equal” is false — they are merely similar.' },
          { label: 'of similar ionic size and charge/radius ratio (diagonal relationship)', nudge: null },
          { label: 'both are in the same group', nudge: '<b>(c)</b> Li and Mg are in different groups (1 and 2).' },
          { label: 'both are non-metals', nudge: '<b>(d)</b> both are metals, not non-metals.' },
        ],
        correct: 1,
        solution: 'The down-and-across cancellation gives Li and Mg comparable charge density.',
      },
      {
        t: 'mcq',
        q: 'Across period 3 (Na → Cl), which change is correct?',
        opts: [
          {
            label: 'metallic character increases, oxides become more basic',
            nudge: '<b>(a)</b> reverses the metallic trend; <b>(c)</b> mismatches a falling metallic character with “more basic” (contradiction); <b>(d)</b> ignores the well-known oxide gradation.',
          },
          { label: 'metallic character decreases, oxides become more acidic', nudge: null },
          {
            label: 'metallic character decreases, oxides become more basic',
            nudge: '<b>(a)</b> reverses the metallic trend; <b>(c)</b> mismatches a falling metallic character with “more basic” (contradiction); <b>(d)</b> ignores the well-known oxide gradation.',
          },
          {
            label: 'no change in oxide character',
            nudge: '<b>(a)</b> reverses the metallic trend; <b>(c)</b> mismatches a falling metallic character with “more basic” (contradiction); <b>(d)</b> ignores the well-known oxide gradation.',
          },
        ],
        correct: 1,
        solution: 'Electropositivity falls left → right, so oxides shift basic (Na<sub>2</sub>O) → acidic (Cl<sub>2</sub>O<sub>7</sub>).',
      },
      {
        t: 'mcq',
        q: 'Nitrogen does not form NCl<sub>5</sub> because:',
        opts: [
          {
            label: 'chlorine is too electronegative',
            nudge: '<b>(a)</b> chlorine’s electronegativity doesn’t forbid NCl<sub>5</sub> (it forms PCl<sub>5</sub> readily).',
          },
          { label: 'nitrogen has no d-orbitals in its valence shell to expand its octet', nudge: null },
          {
            label: 'nitrogen is a non-metal',
            nudge: '<b>(c)</b> being a non-metal doesn’t prevent five bonds (P is also a non-metal and forms PCl<sub>5</sub>).',
          },
          {
            label: 'NCl<sub>5</sub> is thermodynamically unstable only',
            nudge: '<b>(d)</b> the true barrier is orbital availability, not just thermodynamics — this distractor catches students who memorise “unstable” without the cause.',
          },
        ],
        correct: 1,
        solution: 'Without 2d orbitals, nitrogen cannot promote an electron to make five bonds.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Formula crossover slips.</b> When combining ions, cross the valences to balance charge (group-2 + group-15 ⇒ X<sub>3</sub>Y<sub>2</sub>, not XY).',
          '<b>Confusing diagonal pairs with group/period neighbours.</b> Diagonal = first element ↔ lower-right neighbour (Li–Mg, Be–Al, B–Si). Same-row and same-column pairs are not it.',
          '<b>Mis-counting the maximum oxidation state.</b> The group state uses all valence electrons (s + p), not 8 − <i>N</i>.',
          '<b>Granting octet expansion to period-2 atoms.</b> N, O, F have <b>no d-orbitals</b> — they can never expand the octet. Pentavalent N or hexavalent O simply do not exist.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Reduce chemical-property questions to two reflexes. First, <b>“left gives, right grabs”</b> — metallic/basic/reducing on the left, non-metallic/acidic/oxidising on the right, reactivity peaking at both ends. Second, the <b>“period-2 has no d”</b> flag — whenever a question pushes N, O, or F toward a high covalency or expanded octet, the answer is “impossible, no d-orbitals.” For diagonal questions, just draw the little ↘ shape (down-one, right-one) and read off the partner.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Valence (representative elements)',
            note: '<i>N</i> or 8 − <i>N</i> (whichever reaches the octet); group number = valence electrons. O-scale valence climbs 1 → 7; H-scale 1 → 4 → 1.',
          },
          {
            f: 'Oxide progression (period 3)',
            note: 'Na<sub>2</sub>O (basic) → Al<sub>2</sub>O<sub>3</sub> (amphoteric) → Cl<sub>2</sub>O<sub>7</sub> (acidic).',
          },
          {
            f: 'Oxidation state',
            note: 'signed charge by electronegativity; max (p-block) = total valence e<sup>−</sup>; lower states differ by 2 (inert-pair effect down a group).',
          },
          {
            f: 'Reactivity',
            note: 'highest at both period extremes, lowest in the centre; metallic/electropositive ↓ across a period, ↑ down a group.',
          },
          { f: 'Diagonal relationship', note: 'Li–Mg, Be–Al, B–Si (similar size & charge/radius ratio).' },
          {
            f: 'Period-2 anomaly',
            note: 'small, high charge density, <b>no d-orbitals</b> ⇒ cannot expand octet (N max covalency 4, never NCl<sub>5</sub>; F only −1).',
          },
        ],
        aids: [
          '<b>Mnemonic for diagonal pairs:</b> “Little Maggie, Better Allies, Boron-Silicon” → <b>Li–Mg, Be–Al, B–Si.</b>',
          '<b>Mnemonic for the period-2 rule:</b> “No d, no expansion” — N, O, F stay within the s–p octet.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 143–150 ─────────────────────────
  {
    n: '04',
    title: 'Electronic Configuration & the s, p, d, f Blocks',
    kalam: 'The table is not an arbitrary filing cabinet; it is a map of how electrons fill orbitals.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Foundational and very frequently tested. CBSE Boards ask 1–3 marks on identifying period/group/block from atomic number or naming the block of an element. NEET asks 1–2 MCQs yearly (representative vs transition, block identification). JEE Main routinely gives an atomic number and demands period + group + block in one shot; JEE Advanced probes the anomalous configurations (Cr, Cu) and edge cases (He, Zn) that test whether you truly understand why the blocks exist.',
      },
      {
        t: 'p',
        html: 'Everything you learned in the last three topics — the table’s history, the size trends, the reactivity patterns — all of it rests on one quiet fact: <b>an element’s position in the periodic table is simply a picture of its electronic configuration.</b> The table is not an arbitrary filing cabinet; it is a map of how electrons fill orbitals. Once you see that, you never have to memorise where an element sits — you can derive it.',
      },
      {
        t: 'p',
        html: 'Think of the periodic table as a giant multi-storey housing colony. Each <b>floor is a period</b>, and the floor number tells you the outermost shell (<i>n</i>) the residents live on. As you build the colony from the ground up, electrons move in one at a time, always taking the lowest-energy room available (the Aufbau principle from your atomic-structure chapter). The type of room the newest electron checks into — an s, p, d, or f room — decides which <b>block</b> (wing of the building) the element belongs to.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a long apartment corridor on each floor. The first two doors on the left are the <b>s-rooms</b> (the s-block). At the far right are six doors, the <b>p-rooms</b> (the p-block). Starting from the fourth floor, a set of ten extra rooms appears tucked into the middle of the corridor — the <b>d-rooms</b> (the d-block, the transition metals), and they actually belong to the floor below in numbering ((<i>n</i> − 1)d). From the sixth floor onward, fourteen more rooms are hidden in a basement annexe — the <b>f-rooms</b> (the f-block, the inner-transition metals), pulled out and printed separately at the bottom of the table so the chart stays a sensible width.',
      },
      {
        t: 'p',
        html: 'So the “shape” of the periodic table — 2 columns, then a gap, then 10, then 6 — is just the seating capacity of the s (2), d (10), and p (6) subshells, with the f (14) annexe below.',
      },
      {
        t: 'p',
        html: 'Two organising ideas fall straight out of this:<br>• <b>Period number = the highest principal quantum number (<i>n</i>) in the configuration.</b> Sodium (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>) has its outer electron in shell 3 → period 3.<br>• <b>Block = the subshell that receives the last (differentiating) electron.</b> Last electron in s → s-block; in p → p-block; in (<i>n</i> − 1)d → d-block; in (<i>n</i> − 2)f → f-block.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• The neat “last electron decides the block” rule assumes the simple Aufbau filling order. A few elements (chromium, copper, and several heavy ones) have <b>anomalous configurations</b> driven by the extra stability of half-filled and fully filled subshells — these are predictable exceptions, not failures (Key procedures and logical framework).<br>• <b>Helium</b> is the famous outlier: its configuration is 1s<sup>2</sup> (an s-block look), yet it is placed in <b>group 18</b> with the noble gases because chemically it behaves like one. Position can follow properties over raw configuration.<br>• <b>Hydrogen</b> (1s<sup>1</sup>) refuses to settle — it resembles both the alkali metals (one valence electron) and the halogens (one electron short of a stable shell), so its placement in group 1 is a convenience, not a perfect fit.',
      },

      { t: 'part', title: 'Key definitions, trends and data tables' },
      {
        t: 'def',
        term: 'Period',
        html: 'A horizontal row; the period number equals the outermost principal quantum number <i>n</i>. There are <b>7</b> periods, holding 2, 8, 8, 18, 18, 32, 32 elements respectively (set by the order in which s, p, d, f subshells fill).',
      },
      {
        t: 'def',
        term: 'Group',
        html: 'A vertical column (IUPAC <b>1–18</b>); members share a similar valence-shell configuration and hence similar chemistry.',
      },
      {
        t: 'def',
        term: 'Block',
        html: 'The region named after the subshell receiving the differentiating electron.',
      },
      {
        t: 'table',
        title: 'The four blocks at a glance',
        head: ['Block', 'Groups', 'General valence configuration', 'Differentiating electron', 'Character'],
        rows: [
          ['s', '1, 2', '<i>n</i>s<sup>1–2</sup>', '<i>n</i>s', 'Reactive metals; soft; strong reducing agents'],
          ['p', '13–18', '<i>n</i>s<sup>2</sup> <i>n</i>p<sup>1–6</sup>', '<i>n</i>p', 'Metals, metalloids, non-metals & noble gases'],
          ['d', '3–12', '(<i>n</i> − 1)d<sup>1–10</sup> <i>n</i>s<sup>0–2</sup>', '(<i>n</i> − 1)d', 'Transition metals; variable O.S.; coloured ions'],
          [
            'f',
            '(placed below)',
            '(<i>n</i> − 2)f<sup>1–14</sup> (<i>n</i> − 1)d<sup>0–1</sup> <i>n</i>s<sup>2</sup>',
            '(<i>n</i> − 2)f',
            'Inner-transition metals (lanthanoids, actinoids)',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Types of elements (by chemistry):</b><br>• <b>Representative / main-group / normal elements</b> — the s- and p-block together (groups 1, 2 and 13–17). Their last electron enters the outermost shell.<br>• <b>Noble gases</b> — group 18; completely filled valence shells (<i>n</i>s<sup>2</sup><i>n</i>p<sup>6</sup>, except He 1s<sup>2</sup>); chemically inert.<br>• <b>Transition elements</b> — the d-block (groups 3–12). Strict definition: an element (or its stable ion) with a <b>partially filled d-subshell</b>. By this strict rule, Zn, Cd, Hg (d<sup>10</sup>) are not true transition metals.<br>• <b>Inner-transition elements</b> — the f-block: <b>lanthanoids</b> (Ce–Lu, filling 4f) and <b>actinoids</b> (Th–Lr, filling 5f).',
      },
      {
        t: 'p',
        html: '<b>What makes each block behave the way it does.</b><br>• The <b>s-block</b> metals hold one or two loosely bound outer electrons, giving them the lowest ionisation enthalpies in their periods; they are powerful reducing agents, form predominantly ionic compounds, and show a single fixed oxidation state (+1 or +2). Their oxides and hydroxides are strongly basic.<br>• The <b>p-block</b> is the only block that spans metals, metalloids, non-metals and the noble gases, so it shows the widest variety of chemistry of any block. Its elements display multiple oxidation states that differ in steps of two (the group state and group −2, via the inert-pair effect lower down), and their oxide character shifts from basic through amphoteric to acidic across each period.<br>• The <b>d-block</b> (transition) metals draw on both their (<i>n</i> − 1)d and <i>n</i>s electrons for bonding, which is the source of their hallmark traits: <b>variable oxidation states</b>, <b>coloured ions</b> (arising from d–d electronic transitions), <b>paramagnetism</b> (unpaired d electrons), a strong tendency to form <b>coordination complexes</b>, and widespread use as <b>catalysts</b>.<br>• The <b>f-block</b> (inner-transition) metals bury their differentiating electron two shells deep in (<i>n</i> − 2)f, so the outermost shells stay almost unchanged across a series. As a result the lanthanoids behave remarkably alike (predominantly +3), and their steady size decrease — the lanthanoid contraction — quietly shapes the chemistry of the heavier elements that follow them.',
      },
      {
        t: 'p',
        html: '<b>Noble gases (group 18)</b> deserve a separate note: a completely filled valence shell (<i>n</i>s<sup>2</sup><i>n</i>p<sup>6</sup>, with He being 1s<sup>2</sup>) gives them the highest ionisation enthalpies in their periods and essentially no tendency to gain, lose, or share electrons — hence their near-total chemical inertness and their use as inert atmospheres.',
      },
      {
        t: 'p',
        html: '<b>Metals, non-metals, metalloids.</b><br>• <b>Metals</b> (~80% of elements) occupy the left, centre and lower-right of the table.<br>• <b>Non-metals</b> sit at the upper-right of the p-block.<br>• <b>Metalloids</b> lie along the diagonal “staircase”: <b>B, Si, Ge, As, Sb, Te</b> (and sometimes Po, At) — properties intermediate between metals and non-metals.<br>• Metallic character <b>increases down a group</b> and <b>decreases across a period</b> (chained from the Topic 02 size/ionisation trends).',
      },
      {
        t: 'p',
        html: '<b>Old vs IUPAC numbering.</b> The modern IUPAC scheme labels groups <b>1–18</b> left to right, replacing the older, ambiguous A/B (CAS) system (IA, IIA … VIIIA, IB … plus VIII), in which the same letter could mean different columns in different conventions.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: '(No formal derivation; these are the placement procedures examiners reward.)' },
      {
        t: 'proc',
        title: '3.1 — From atomic number to period, block and group',
        steps: [
          '<b>Write the electronic configuration</b> using the Aufbau order (1s 2s 2p 3s 3p 4s 3d 4p …).',
          '<b>Period</b> = the largest principal quantum number <i>n</i> that appears in the configuration.',
          '<b>Block</b> = the subshell of the last electron added (s, p, (<i>n</i> − 1)d, or (<i>n</i> − 2)f).',
          '<b>Group</b> — use the block-specific rule:<br>• <b>s-block:</b> group = number of <i>n</i>s electrons (1 or 2).<br>• <b>p-block:</b> group = 10 + (number of valence <i>n</i>s + <i>n</i>p electrons).<br>• <b>d-block:</b> group = (number of (<i>n</i> − 1)d electrons) + (number of <i>n</i>s electrons).',
        ],
      },
      {
        t: 'p',
        html: '<b>Why these work:</b> the group number ultimately counts the electrons available for bonding. For s/p elements that is just the outer-shell electrons (shifted by 10 for the p-block because groups 3–12 sit in between); for d-block elements both the (<i>n</i> − 1)d and <i>n</i>s electrons participate, so both are counted.',
      },
      {
        t: 'p',
        html: '<b>3.2 — Why the table has its shape</b><br>The width of each block equals the capacity of its subshell: s holds 2 (2 columns), p holds 6 (6 columns), d holds 10 (10 columns), f holds 14 (printed as a 14-wide annexe). The d-block first appears in period 4 because the 3d subshell only begins filling after 4s; the f-block first appears in period 6 because 4f fills after 6s and 5d begin. This filling order is why periods lengthen as 2, 8, 8, 18, 18, 32, 32.',
      },
      {
        t: 'p',
        html: '<b>3.3 — The anomalous configurations (half-filled / fully filled stability)</b><br>A few d-block elements deviate from naïve Aufbau because <b>exactly half-filled (d<sup>5</sup>) and completely filled (d<sup>10</sup>) subshells are extra stable</b> (symmetry + minimum electron–electron repulsion + exchange energy):<br>• <b>Chromium:</b> expected [Ar] 3d<sup>4</sup> 4s<sup>2</sup>, actual [Ar] 3d<sup>5</sup> 4s<sup>1</sup> — one 4s electron shifts to 3d to reach the stable d<sup>5</sup>.<br>• <b>Copper:</b> expected [Ar] 3d<sup>9</sup> 4s<sup>2</sup>, actual [Ar] 3d<sup>10</sup> 4s<sup>1</sup> — to reach the stable d<sup>10</sup>. These do not change the block (still d-block) but matter when you compute the group or predict ionisation behaviour.',
      },
      {
        t: 'p',
        html: '<b>3.4 — Placing the awkward cases</b><br>• <b>Hydrogen:</b> 1s<sup>1</sup> → put in group 1 by configuration, but flag its halogen-like side.<br>• <b>Helium:</b> 1s<sup>2</sup> → s-block by configuration, but placed in <b>group 18</b> because its full valence shell makes it a noble gas. Properties win.',
      },
      { t: 'fig', id: 'c11-03-fig-3.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'An element has atomic number 38. Write its electronic configuration and state its (a) period, (b) group, and (c) block.',
        steps: [
          'Configuration: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup>, i.e. [Kr] 5s<sup>2</sup>.',
          '<b>(a) Period:</b> highest <i>n</i> = 5 ⇒ <b>period 5</b>.',
          '<b>(b) Group:</b> last electron entered 5s; group = number of <i>n</i>s electrons = 2 ⇒ <b>group 2.</b>',
          '<b>(c) Block:</b> 5s ⇒ <b>s-block</b> (an alkaline earth metal — this is strontium).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following is a representative element?<br>(a) <i>Z</i> = 24 (b) <i>Z</i> = 12 (c) <i>Z</i> = 26 (d) <i>Z</i> = 29',
        steps: [
          '<b>Speed approach.</b> Representative = s- or p-block (groups 1, 2, 13–17). Don’t write full configurations — just locate each.<br>• <i>Z</i> = 12 (Mg): [Ne]3s<sup>2</sup> → <b>s-block, representative.</b> ✓<br>• <i>Z</i> = 24 (Cr), <i>Z</i> = 26 (Fe), <i>Z</i> = 29 (Cu): all in the 3d series → <b>d-block, transition.</b>',
          'The three traps are all transition metals; students who forget that “representative” excludes the d-block fall for them.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: configuration + group rule + property',
        q: 'For the element with <i>Z</i> = 25: (a) write its configuration, (b) determine period, block and group, (c) predict one characteristic chemical property of its block.',
        steps: [
          '<b>(a)</b> <i>Z</i> = 25: [Ar] 3d<sup>5</sup> 4s<sup>2</sup>.',
          '<b>(b) Period:</b> highest <i>n</i> = 4 ⇒ <b>period 4</b>. <b>Block:</b> last electron in 3d ⇒ <b>d-block</b>. <b>Group:</b> (<i>n</i> − 1)d + <i>n</i>s = 5 + 2 = 7 ⇒ <b>group 7</b>.',
          '<b>(c)</b> As a transition (d-block) metal it shows <b>variable oxidation states</b> (here, from +2 up to +7, using both 3d and 4s electrons), and typically forms coloured compounds — this element is manganese.',
          'This stitches three skills: configuration, the d-block group rule, and block-to-property inference.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An element X has the ground-state configuration [Ar] 3d<sup>5</sup> 4s<sup>1</sup>. (a) Identify why this differs from the naïvely expected configuration. (b) Determine its group and block. (c) Is X a representative or a transition element? Justify using the strict definition.',
        steps: [
          '<b>(a)</b> Naïve Aufbau predicts [Ar] 3d<sup>4</sup> 4s<sup>2</sup>. The actual [Ar] 3d<sup>5</sup> 4s<sup>1</sup> arises because an <b>exactly half-filled</b> 3d<sup>5</sup> subshell is extra-stable (symmetrical distribution, maximum exchange energy, minimum repulsion). Promoting one 4s electron into 3d buys that stability — this is chromium (<i>Z</i> = 24).',
          '<b>(b)</b> Highest <i>n</i> = 4 ⇒ period 4; last electron in 3d ⇒ <b>d-block</b>; group = (<i>n</i> − 1)d + <i>n</i>s = 5 + 1 = 6 ⇒ <b>group 6</b>.',
          '<b>(c)</b> X is a <b>transition element</b>: the strict definition requires a partially filled d-subshell in the atom or a stable ion, and chromium has 3d<sup>5</sup> (partially filled) — it qualifies. (Contrast with zinc, 3d<sup>10</sup>4s<sup>2</sup>, whose d-subshell is full in the atom and in Zn<sup>2+</sup>, so zinc is not a true transition metal despite sitting in the d-block.)',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define the term “block” of the periodic table. Give the general valence-shell configuration of the s- and p-blocks.',
            a: 'Region named after the subshell receiving the last electron; s-block <i>n</i>s<sup>1–2</sup>, p-block <i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup>.',
          },
          {
            q: '[NEET] Which block contains elements that are all metals and show variable oxidation states and coloured ions?',
            a: 'The <b>d-block</b> (transition metals).',
          },
          {
            q: '[JEE Main] An element has <i>Z</i> = 33. Determine its period, group and block, and state whether it is a metal, non-metal or metalloid.',
            a: '<i>Z</i> = 33 (As): [Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup> → period 4, group = 10 + 5 = 15, <b>p-block</b>; it is a <b>metalloid</b>.',
          },
          {
            q: '[JEE Main] Write the group number of an element whose valence-shell configuration is 3d<sup>8</sup> 4s<sup>2</sup>, and name its block.',
            a: 'Group = 8 + 2 = 10; <b>d-block</b>.',
          },
          {
            q: '[JEE Advanced] Helium has the configuration 1s<sup>2</sup>, identical in type to the s-block metals, yet it is placed in group 18. Explain the reasoning, and state which principle (configuration vs property) governs the placement.',
            a: 'Helium’s valence shell is completely filled and it is chemically inert like the other noble gases, so it is grouped by <b>property</b> (group 18) rather than by its bare 1s<sup>2</sup> configuration. Property governs the placement.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The block of an element is decided by:',
        opts: [
          { label: 'the total number of electrons', nudge: '<b>(a)</b> total electrons gives <i>Z</i>, not the block.' },
          { label: 'the subshell into which the last (differentiating) electron enters', nudge: null },
          { label: 'the period number', nudge: '<b>(c)</b> the period comes from <i>n</i>, a separate quantity.' },
          { label: 'the number of valence electrons only', nudge: '<b>(d)</b> valence-electron count helps fix the group, not the block.' },
        ],
        correct: 1,
        solution: 'The block is named after the subshell receiving the differentiating electron.',
      },
      {
        t: 'mcq',
        q: 'Which set consists only of representative elements?',
        opts: [
          { label: 'Na, Mg, Al', nudge: null },
          {
            label: 'Fe, Co, Ni',
            nudge: '<b>(b)</b>, <b>(d)</b> are d-block transition metals; <b>(c)</b> are f-block inner-transition metals — none are “representative.”',
          },
          {
            label: 'Ce, Th, U',
            nudge: '<b>(b)</b>, <b>(d)</b> are d-block transition metals; <b>(c)</b> are f-block inner-transition metals — none are “representative.”',
          },
          {
            label: 'Sc, Ti, V',
            nudge: '<b>(b)</b>, <b>(d)</b> are d-block transition metals; <b>(c)</b> are f-block inner-transition metals — none are “representative.”',
          },
        ],
        correct: 0,
        solution: 'Na (gp 1), Mg (gp 2), Al (gp 13) are all s-/p-block.',
      },
      {
        t: 'mcq',
        q: 'The general valence-shell configuration of the d-block elements is:',
        opts: [
          {
            label: '<i>n</i>s<sup>1–2</sup>',
            nudge: '<b>(a)</b> is the s-block; <b>(b)</b> is the p-block; <b>(d)</b> is the f-block — classic “match the block to its config” distractors.',
          },
          {
            label: '<i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup>',
            nudge: '<b>(a)</b> is the s-block; <b>(b)</b> is the p-block; <b>(d)</b> is the f-block — classic “match the block to its config” distractors.',
          },
          { label: '(<i>n</i> − 1)d<sup>1–10</sup> <i>n</i>s<sup>0–2</sup>', nudge: null },
          {
            label: '(<i>n</i> − 2)f<sup>1–14</sup>',
            nudge: '<b>(a)</b> is the s-block; <b>(b)</b> is the p-block; <b>(d)</b> is the f-block — classic “match the block to its config” distractors.',
          },
        ],
        correct: 2,
        solution: 'Transition metals fill the (<i>n</i> − 1)d subshell while the <i>n</i>s may hold 0–2 electrons.',
      },
      {
        t: 'mcq',
        q: 'Zinc ([Ar]3d<sup>10</sup>4s<sup>2</sup>) is often not classified as a true transition element because:',
        opts: [
          {
            label: 'it is not a metal',
            nudge: '<b>(a)</b> false — zinc is a metal; <b>(c)</b> false — zinc is in the d-block by position; <b>(d)</b> false — it has 4s<sup>2</sup>. Each distractor misremembers a piece of the definition.',
          },
          { label: 'its d-subshell is completely filled in the atom and in its common +2 ion', nudge: null },
          {
            label: 'it lies in the s-block',
            nudge: '<b>(a)</b> false — zinc is a metal; <b>(c)</b> false — zinc is in the d-block by position; <b>(d)</b> false — it has 4s<sup>2</sup>. Each distractor misremembers a piece of the definition.',
          },
          {
            label: 'it has no 4s electrons',
            nudge: '<b>(a)</b> false — zinc is a metal; <b>(c)</b> false — zinc is in the d-block by position; <b>(d)</b> false — it has 4s<sup>2</sup>. Each distractor misremembers a piece of the definition.',
          },
        ],
        correct: 1,
        solution: 'The strict definition needs a partially filled d-subshell; zinc’s 3d<sup>10</sup> stays full even in Zn<sup>2+</sup>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Reading the period from the wrong shell.</b> The period is the highest <i>n</i> in the configuration, not the shell of the last-filled d or f electron. For [Ar]3d<sup>6</sup>4s<sup>2</sup> (Fe) the period is <b>4</b> (from 4s), not 3.',
          '<b>Counting the d-block group wrong.</b> Group = (<i>n</i> − 1)d + <i>n</i>s electrons — you must add the <i>n</i>s electrons, not just count the d electrons.',
          '<b>Calling every d-block element a “transition metal.”</b> Strictly, Zn, Cd, Hg (d<sup>10</sup>) are excluded.',
          '<b>Treating He as s-block by configuration.</b> Its 1s<sup>2</sup> looks s-block, but it is placed in group 18 by property. Don’t let the bare configuration mislead you.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “find the block” question, jump straight to the <b>last subshell filled</b> — ignore everything before it. For the group, use the quick map: s-block → count <i>n</i>s; p-block → 10+ (outer s + p); d-block → (<i>n</i> − 1)d + <i>n</i>s. And keep the staircase memorised as a single zig-zag — <b>B-Si-Ge-As-Sb-Te</b> — so metalloid questions are instant. Whenever Cr or Cu appears, reach reflexively for the half-filled/filled exception before writing the configuration.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: '<b>Period</b> = highest principal quantum number <i>n</i>. <b>Block</b> = subshell of the last (differentiating) electron.',
            note: '',
          },
          {
            f: 'Blocks',
            note: 's (<i>n</i>s<sup>1–2</sup>, gps 1–2) · p (<i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup>, gps 13–18) · d ((<i>n</i> − 1)d<sup>1–10</sup><i>n</i>s<sup>0–2</sup>, gps 3–12) · f ((<i>n</i> − 2)f<sup>1–14</sup>, below table).',
          },
          { f: 'Group rules', note: 's → <i>n</i>s count; p → 10+ (outer s + p); d → (<i>n</i> − 1)d + <i>n</i>s.' },
          {
            f: 'Types',
            note: 'representative (s + p) · noble gases (gp 18) · transition (d) · inner-transition (f). Strict transition needs a partially filled d (so Zn, Cd, Hg are excluded).',
          },
          { f: 'Metalloid staircase', note: 'B, Si, Ge, As, Sb, Te. Metallic character ↑ down a group, ↓ across a period.' },
          {
            f: 'Anomalies',
            note: 'Cr = [Ar]3d<sup>5</sup>4s<sup>1</sup>, Cu = [Ar]3d<sup>10</sup>4s<sup>1</sup> (half-/fully-filled stability). He = 1s<sup>2</sup> but placed in group 18 by property; H is ambiguous (group 1, halogen-like too).',
          },
        ],
        aids: [
          '<b>Mnemonic for the metalloid staircase:</b> “Boys Should Get An Sb Telescope” → <b>B, Si, Ge, As, Sb, Te.</b>',
          '<b>Mnemonic for the block widths:</b> “2-6-10-14” → s, p, d, f capacities, the source of the table’s 2/8/18/32 shape.',
        ],
      },
    ],
  },
];
