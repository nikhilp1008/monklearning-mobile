/**
 * KEY POINTS for Chemistry Class 11, Chapter 3 (Classification of Elements
 * and Periodicity in Properties).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–C are 4–6; Additional
 * topic D, What JEE and NEET Actually Ask (the book's Addendum P), is 7.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key definitions and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's two mnemonics, word for word (quotation marks and labels dropped).
 * Additional topics: the addenda's methods and worked examples; Additional
 * topic D: its distribution and traps. Where the expert review corrected
 * the book (REVIEW-ch03: Ga ≥ Al for IE, the count before an IE jump is the
 * valence-electron count with + 10 for the p-block, no proper place for the
 * lanthanoids, the group oxidation state except O and F), the points follow
 * the corrected text.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Element
 * symbols, formulas and ions are upright (Na<sup>+</sup>, O<sup>2−</sup>),
 * and so are the book's stand-in symbols X, Y, Q, Z, E for an element.
 * Enthalpy symbols carry upright label subscripts, as the addenda print
 * them: Δ<sub>i</sub><i>H</i><sub>1</sub>, Δ<sub>eg</sub><i>H</i>. Other label
 * subscripts upright (<i>Z</i><sub>eff</sub>, <i>r</i><sub>cov</sub>,
 * <i>A</i><sub>middle</sub>); <i>σ</i> (the screening constant) italic.
 * Orbital and subshell labels upright, as in NCERT (2p<sup>3</sup>,
 * <i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup>, (<i>n</i> − 1)d,
 * [Ar]3d<sup>5</sup>4s<sup>1</sup>). Ranges use an en dash. IE, EGE and EN
 * are upright abbreviations, as printed.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Development of the Periodic Table & the Modern Periodic Law ──
  // pp. 119, 121, 125
  {
    topic: 0,
    kind: 'remember',
    q: 'The early classification attempts in order, each with its keyword and its limit?',
    a: 'Döbereiner’s triads (middle atomic mass ≈ mean of the other two, <i>A</i><sub>middle</sub> ≈ (<i>A</i><sub>first</sub> + <i>A</i><sub>last</sub>)/2) → de Chancourtois’ telluric helix → Newlands’ octaves (every 8th element repeats; fails after Ca) → Lothar Meyer’s atomic-volume curve → Mendeleev (gaps and atomic weight) → Moseley (atomic number)',
    why: 'Ca (40.1) and Ba (137.3) predict Sr ≈ (40.1 + 137.3)/2 = 88.7 u against the accepted 87.6 u, about 1.3% off: a valid triad. Many similar trios are not triads.',
    say: 'Dogs Chew Nice Leather Mats, Moseley (Döbereiner, de Chancourtois, Newlands, Lothar Meyer, Mendeleev, Moseley).',
  },
  // pp. 120, 125–126
  {
    topic: 0,
    kind: 'remember',
    q: 'Mendeleev’s table: its strengths and its weaknesses?',
    a: 'Strengths: he left gaps and predicted eka-elements (gallium and germanium), and corrected wrong atomic masses (beryllium). Weaknesses: anomalous pairs (Ar/K, Te/I, Co/Ni), an uncertain place for H, no separate place for isotopes, no proper place for the lanthanoids',
    why: 'Eka-silicon was predicted to form EO<sub>2</sub> and ECl<sub>4</sub>; germanium delivered exactly GeO<sub>2</sub> and GeCl<sub>4</sub>, with density and atomic mass close to prediction.',
    say: 'Argon’s King, Telling India, Cobalt’s Nice → Ar–K, Te–I, Co–Ni.',
  },
  // pp. 119, 121, 123, 125
  {
    topic: 0,
    kind: 'mixup',
    q: 'Which periodic law orders by atomic weight and which by atomic number, and why does it matter?',
    a: 'Mendeleev = weight, Modern (Moseley) = number <i>Z</i>. Chemistry follows the electron count, which <i>Z</i> fixes; weight also depends on the neutron count. Ordering by <i>Z</i> needs no swaps: Ar (18) before K (19), Te (52) before I (53), Co (27) before Ni (28)',
    why: 'Argon (39.95) is heavier than potassium (39.10) because natural argon is mostly mass number 40 and potassium 39: one proton fewer, more nucleons.',
    say: null,
  },
  // pp. 123, 125
  {
    topic: 0,
    kind: 'mistake',
    q: 'Newlands’ octaves held up to iron, and every three similar elements make a triad. True?',
    a: 'Neither: octaves broke down after calcium, and many similar trios fail the mean test. Both are historical clues with narrow validity, not universal laws',
    why: 'Nor are the anomalous pairs “Mendeleev’s mistakes”: they are evidence that atomic weight was the wrong variable; the neutron count explains the heavier-but-earlier ordering.',
    say: null,
  },
  // pp. 120, 123–125
  {
    topic: 0,
    kind: 'shortcut',
    q: 'The IUPAC temporary name and symbol for <i>Z</i> = 124? The fast way?',
    a: 'Read the digits left to right, one root each (0–9: nil, un, bi, tri, quad, pent, hex, sept, oct, enn), add -ium, take the first letters: 1-2-4 → unbiquadium, Ubq. Sanity check: a three-digit <i>Z</i> always gives a three-letter symbol',
    why: '105 → unnilpentium (Unp); 113 → ununtrium (Uut). Unununium would be 111, and pentnilnilium encodes 500, not 105.',
    say: null,
  },

  // ── Topic 02 · Periodic Trends in Physical Properties ──
  // pp. 128–129, 132, 134
  {
    topic: 1,
    kind: 'remember',
    q: 'Ionisation enthalpy: definition, trend, and the reversals?',
    a: 'Δ<sub>i</sub><i>H</i>: X(g) → X<sup>+</sup>(g) + e<sup>−</sup>, always positive, with Δ<sub>i</sub><i>H</i><sub>1</sub> < Δ<sub>i</sub><i>H</i><sub>2</sub> < …. It rises across a period and falls down a group, except Be > B (a filled, stable 2s<sup>2</sup>) and N > O (an exactly half-filled 2p<sup>3</sup>; O’s 2p<sup>4</sup> must pair an electron)',
    why: 'Period 2 in order: Li < B < Be < C < O < N < F < Ne. Period 3 repeats both reversals: Mg > Al and P > S.',
    say: 'Be Nice, Phosphorus Magnifies → the highs sit at Be, N (period 2) and Mg, P (period 3).',
  },
  // pp. 127–128, 134
  {
    topic: 1,
    kind: 'remember',
    q: 'The one engine behind every physical trend, and the order of the three atomic radii?',
    a: '<i>Z</i><sub>eff</sub> = <i>Z</i> − <i>σ</i> (<i>σ</i>: screening by inner electrons). Across a period <i>Z</i><sub>eff</sub> ↑, so size ↓, IE ↑, EGE more negative, EN ↑; down a group it all reverses. Radii: <i>r</i><sub>vdW</sub> > <i>r</i><sub>metallic</sub> > <i>r</i><sub>cov</sub>, with <i>r</i><sub>cov</sub> = ½<i>d</i><sub>A–A</sub>',
    why: 'Period 2 falls from Li 152 to F 64 pm; group 1 rises from Li 152 to Cs 262 pm. A cation is smaller than its atom (Na 186, Na<sup>+</sup> 95 pm), an anion larger (F 64, F<sup>−</sup> 136 pm).',
    say: null,
  },
  // pp. 128–130, 134, 153
  {
    topic: 1,
    kind: 'mixup',
    q: 'Fluorine or chlorine: which has the more negative electron gain enthalpy?',
    a: 'Chlorine (−349 against −328 kJ mol<sup>−1</sup>): an electron entering fluorine’s tiny, cramped 2p shell meets fierce electron–electron repulsion; chlorine’s <i>n</i> = 3 shell is roomier. Otherwise EGE grows more negative across a period, less negative down a group',
    why: 'Keep EGE (an energy, kJ mol<sup>−1</sup>) apart from electronegativity (a bonded atom’s pull on a shared pair, dimensionless): F still has the highest electronegativity, 4.0.',
    say: 'Cl out-grabs F — chlorine’s electron gain enthalpy is more negative than fluorine’s.',
  },
  // pp. 129–130, 132–134
  {
    topic: 1,
    kind: 'mistake',
    q: 'Al<sup>3+</sup>, Mg<sup>2+</sup>, Na<sup>+</sup>, F<sup>−</sup>, O<sup>2−</sup>: does the most highly charged ion come out largest?',
    a: 'No, smallest: all five have 10 electrons, so only nuclear charge matters and the higher <i>Z</i> pulls the same cloud tighter. Increasing radius: Al<sup>3+</sup> (13) < Mg<sup>2+</sup> (12) < Na<sup>+</sup> (11) < F<sup>−</sup> (9) < O<sup>2−</sup> (8)',
    why: 'Among N<sup>3−</sup>, O<sup>2−</sup>, F<sup>−</sup> and Na<sup>+</sup> the largest is N<sup>3−</sup> (<i>Z</i> = 7). Never order by group position or by the sign of the charge.',
    say: null,
  },
  // pp. 130, 132, 134, 145
  {
    topic: 1,
    kind: 'shortcut',
    q: 'The first four ionisation enthalpies of Q are 736, 1448, 7720, 10560 kJ mol<sup>−1</sup>. Its group? The fast way?',
    a: 'Find the biggest ratio jump: 1448 → 7720, more than fivefold, after two electrons. So 2 valence electrons, group 2, <i>n</i>s<sup>2</sup>, oxide QO. For any trend, trust the master arrow unless a flag applies: Be/Mg, N/P (IE), F vs Cl (EGE), Ga < Al (size)',
    why: 'Ga is slightly smaller than Al: the ten 3d electrons that first appear after Al screen poorly. In the p-block, add 10 to the count before the jump: three easy electrons mean group 13.',
    say: null,
  },

  // ── Topic 03 · Periodic Trends in Chemical Properties & Anomalous Behaviour ──
  // pp. 136–137, 141
  {
    topic: 2,
    kind: 'remember',
    q: 'Valence of a representative element, and how it runs across period 3 towards oxygen and towards hydrogen?',
    a: 'The number of valence electrons <i>N</i>, or 8 − <i>N</i>, whichever reaches the octet. Towards O it climbs 1 → 7 (Na<sub>2</sub>O, MgO, Al<sub>2</sub>O<sub>3</sub>, SiO<sub>2</sub>, P<sub>2</sub>O<sub>5</sub>, SO<sub>3</sub>, Cl<sub>2</sub>O<sub>7</sub>); towards H it rises 1 → 4, then falls to 1 (NaH, MgH<sub>2</sub>, AlH<sub>3</sub>, SiH<sub>4</sub>, PH<sub>3</sub>, H<sub>2</sub>S, HCl)',
    why: 'Oxygen lets an element show its full group oxidation state; past the middle, gaining electrons is cheaper, so the hydrogen valence counts the gap to eight.',
    say: null,
  },
  // pp. 135–137, 140–142
  {
    topic: 2,
    kind: 'remember',
    q: 'The maximum oxidation state of a p-block element, and how oxide character runs across a period?',
    a: 'Its total valence electrons (s + p), except for O and F, e.g. S +6; lower states differ by 2, the inert-pair effect stabilising the lower one down a group (Tl<sup>+</sup>, Pb<sup>2+</sup>). Oxides go basic (Na<sub>2</sub>O) → amphoteric (Al<sub>2</sub>O<sub>3</sub>) → acidic (Cl<sub>2</sub>O<sub>7</sub>) as metallic character falls',
    why: 'Oxidation state is signed, decided by electronegativity: O is −2 in Na<sub>2</sub>O but +2 in OF<sub>2</sub>. Reactivity is highest at both ends of a period, lowest in the centre.',
    say: null,
  },
  // pp. 135–138, 141–142
  {
    topic: 2,
    kind: 'mixup',
    q: 'Diagonal pairs: which are they, and how do they differ from group or period neighbours?',
    a: 'Li–Mg, Be–Al, B–Si: a period-2 element and its lower-right neighbour. Going down raises size, going right lowers it; the two nearly cancel, leaving similar ionic size and charge/radius ratio. Same-row (Na–Mg) and same-column (Li–Na) pairs are not diagonal',
    why: 'So Li is more like Mg than like Na: both form normal oxides, not peroxides like Na. Be and Al both form amphoteric, covalent-leaning compounds.',
    say: 'Little Maggie, Better Allies, Boron-Silicon → Li–Mg, Be–Al, B–Si.',
  },
  // pp. 135–136, 138, 140–142
  {
    topic: 2,
    kind: 'mistake',
    q: 'Phosphorus forms PCl<sub>5</sub>. Can nitrogen form NCl<sub>5</sub>, or oxygen show +6 as sulphur does in SF<sub>6</sub>?',
    a: 'No: period-2 atoms have only 2s and 2p, no valence d-orbitals, so they cannot expand the octet. Nitrogen’s maximum covalency is 4 (reached in NH<sub>4</sub><sup>+</sup> by donating its lone pair); oxygen typically tops out at +2 (OF<sub>2</sub>); fluorine shows only −1',
    why: 'Phosphorus and sulphur have empty 3d orbitals to take a promoted electron; chlorine, likewise, shows +1, +3, +5 and +7 besides −1.',
    say: 'No d, no expansion — N, O, F stay within the s–p octet.',
  },
  // pp. 138, 141
  {
    topic: 2,
    kind: 'shortcut',
    q: 'X is in group 2, Y in group 15. Formula of their compound? And the fast way through chemical-property questions?',
    a: 'Cross the valences: X<sup>2+</sup> and Y<sup>3−</sup> give X<sub>3</sub>Y<sub>2</sub> (2 × 3 = 3 × 2 = 6), not XY. Then two reflexes: “left gives, right grabs” (metallic, basic, reducing on the left; non-metallic, acidic, oxidising on the right) and “period 2 has no d”',
    why: 'For a diagonal partner, draw the little ↘ (down one, right one). <i>n</i>s<sup>2</sup><i>n</i>p<sup>4</sup> means group 16: −2 to +6, highest oxide ZO<sub>3</sub>, acidic like SO<sub>3</sub>.',
    say: null,
  },

  // ── Topic 04 · Electronic Configuration & the s, p, d, f Blocks ──
  // pp. 143, 145–146, 148–149
  {
    topic: 3,
    kind: 'remember',
    q: 'From an electronic configuration, how do you read the period, the block and the group?',
    a: 'Period = highest <i>n</i>; block = subshell of the last (differentiating) electron; group: s-block = number of <i>n</i>s electrons, p-block = 10 + (<i>n</i>s + <i>n</i>p electrons), d-block = (<i>n</i> − 1)d + <i>n</i>s electrons',
    why: '<i>Z</i> = 33, [Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup>: period 4, group 10 + 5 = 15, p-block (As). <i>Z</i> = 25, [Ar]3d<sup>5</sup>4s<sup>2</sup>: period 4, group 5 + 2 = 7, d-block (Mn).',
    say: null,
  },
  // pp. 144–145, 149–150
  {
    topic: 3,
    kind: 'remember',
    q: 'The four blocks: their groups and general valence configurations?',
    a: 's: groups 1–2, <i>n</i>s<sup>1–2</sup>. p: 13–18, <i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup>. d: 3–12, (<i>n</i> − 1)d<sup>1–10</sup><i>n</i>s<sup>0–2</sup>. f: placed below the table, (<i>n</i> − 2)f<sup>1–14</sup>',
    why: 'Block widths are the subshell capacities 2, 6, 10, 14, so the periods hold 2, 8, 8, 18, 18, 32, 32. Representative elements are the s- and p-blocks (groups 1, 2, 13–17).',
    say: '2-6-10-14 → s, p, d, f capacities, the source of the table’s 2/8/18/32 shape.',
  },
  // pp. 143, 145–146, 148, 150
  {
    topic: 3,
    kind: 'mixup',
    q: 'Helium is 1s<sup>2</sup>, an s-block configuration. Why is it in group 18, and where does hydrogen go?',
    a: 'Helium is placed by property, not configuration: its valence shell is full and it is chemically inert like the other noble gases. Hydrogen (1s<sup>1</sup>) sits in group 1 by configuration but is halogen-like too, one electron short of a stable shell: a convenience, not a perfect fit',
    why: 'Cr = [Ar]3d<sup>5</sup>4s<sup>1</sup> and Cu = [Ar]3d<sup>10</sup>4s<sup>1</sup> (half-filled and fully filled stability) still stay in the d-block: Cr is group 5 + 1 = 6.',
    say: null,
  },
  // pp. 144, 148–149
  {
    topic: 3,
    kind: 'mistake',
    q: 'Iron is [Ar]3d<sup>6</sup>4s<sup>2</sup>. Is it in period 3, group 6?',
    a: 'No: period 4 (the highest <i>n</i>, from 4s, not the shell of the d electrons) and group 6 + 2 = 8, because the <i>n</i>s electrons are added to the d count',
    why: 'Nor is every d-block element a true transition metal: that needs a partially filled d subshell, and Zn, Cd, Hg (d<sup>10</sup>) are excluded. Zinc’s 3d<sup>10</sup> stays full in Zn<sup>2+</sup> too.',
    say: null,
  },
  // pp. 146, 149
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Which is a representative element: <i>Z</i> = 24, 12, 26 or 29? The fast way?',
    a: 'Jump straight to the last subshell filled and ignore everything before it: <i>Z</i> = 12 is [Ne]3s<sup>2</sup>, s-block, representative; 24, 26 and 29 (Cr, Fe, Cu) are all 3d, transition. Keep the metalloid staircase as one zig-zag, B-Si-Ge-As-Sb-Te',
    why: 'Whenever Cr or Cu appears, reach first for the half-filled/filled exception. <i>Z</i> = 38 is [Kr]5s<sup>2</sup>: period 5, group 2, s-block, strontium.',
    say: 'Boys Should Get An Sb Telescope → B, Si, Ge, As, Sb, Te.',
  },

  // ── Additional A · The Fourth Kind of Oxide: Neutral Oxides and Counting Questions ──
  // pp. 151–152
  {
    topic: 4,
    kind: 'remember',
    q: 'The four classes of oxide, with examples?',
    a: 'Basic, reacting with acids only (Na<sub>2</sub>O, MgO, CaO); acidic, with bases only (Cl<sub>2</sub>O<sub>7</sub>, SO<sub>3</sub>, CO<sub>2</sub>); amphoteric, with both (Al<sub>2</sub>O<sub>3</sub>, As<sub>2</sub>O<sub>3</sub>, ZnO, BeO); neutral, with neither (CO, NO, N<sub>2</sub>O)',
    why: 'Al<sub>2</sub>O<sub>3</sub> + 6 HCl → 2 AlCl<sub>3</sub> + 3 H<sub>2</sub>O and Al<sub>2</sub>O<sub>3</sub> + 2 NaOH → 2 NaAlO<sub>2</sub> + H<sub>2</sub>O. Of Na<sub>2</sub>O, As<sub>2</sub>O<sub>3</sub>, N<sub>2</sub>O, NO and Cl<sub>2</sub>O<sub>7</sub> only As<sub>2</sub>O<sub>3</sub> is amphoteric: the NTA 2022 count.',
    say: null,
  },
  // p. 152
  {
    topic: 4,
    kind: 'remember',
    q: 'Order Na<sub>2</sub>O, MgO, Al<sub>2</sub>O<sub>3</sub>, K<sub>2</sub>O by basic character, and SiO<sub>2</sub>, GeO<sub>2</sub>, SnO<sub>2</sub>, PbO<sub>2</sub> by acidity?',
    a: 'Basic: Al<sub>2</sub>O<sub>3</sub> < MgO < Na<sub>2</sub>O < K<sub>2</sub>O (basic character falls across period 3 and rises down group 1). Acidic: SiO<sub>2</sub> > GeO<sub>2</sub> > SnO<sub>2</sub> > PbO<sub>2</sub> (metallic character grows down group 14)',
    why: 'Compare within the period first, then let the group trend promote potassium above sodium.',
    say: null,
  },

  // ── Additional B · Electron Gain Enthalpy: The Sign Discipline ──
  // pp. 153–154
  {
    topic: 5,
    kind: 'remember',
    q: 'Which electron additions are endothermic (positive Δ<sub>eg</sub><i>H</i>)?',
    a: 'Noble gases (the electron starts a new shell: He +48, Ne +116, Ar +96 kJ mol<sup>−1</sup>); Be and Mg (filled <i>n</i>s<sup>2</sup>, the electron must enter <i>n</i>p: positive or near zero); N (half-filled 2p<sup>3</sup>); and every second electron gain, such as O<sup>−</sup> + e<sup>−</sup> → O<sup>2−</sup>',
    why: 'P (3p<sup>3</sup> → 3p<sup>4</sup>) stays exothermic: its larger shell absorbs the repulsion. Of N, Li, Be, Mg, B, O<sup>−</sup> and P gaining an electron, only Li, B and P release energy: three.',
    say: null,
  },
  // pp. 153–155
  {
    topic: 5,
    kind: 'remember',
    q: 'O + e<sup>−</sup> → O<sup>−</sup> releases 141 kJ mol<sup>−1</sup>. Is the second electron gain more negative still?',
    a: 'No, it is positive: the incoming electron is repelled by an already negative ion, so Δ<sub>eg</sub><i>H</i><sub>2</sub> > 0 for every element, and O → O<sup>2−</sup> in the gas phase is endothermic overall',
    why: 'Ionic oxides still form: the lattice energy released as O<sup>2−</sup> packs with cations more than repays the cost. Magnitudes: O (−141) > C (−122) > B (−27) > N (near zero or positive).',
    say: null,
  },

  // ── Additional C · Reading Ionisation Data Across Elements ──
  // pp. 155–157
  {
    topic: 6,
    kind: 'remember',
    q: 'Δ<sub>i</sub><i>H</i><sub>1</sub>(Na) < Δ<sub>i</sub><i>H</i><sub>1</sub>(Mg). Why is Δ<sub>i</sub><i>H</i><sub>2</sub> the other way round?',
    a: 'Na<sup>+</sup> is a neon core, so sodium’s second electron is torn from a noble-gas shell, while Mg<sup>+</sup> still holds a loose 3s<sup>1</sup> electron. General rule: the (valence count + 1)-th ionisation enthalpy is the cliff, for any element',
    why: 'Likewise Δ<sub>i</sub><i>H</i><sub>2</sub>(K) > Δ<sub>i</sub><i>H</i><sub>2</sub>(Ca), K<sup>+</sup> being an argon core. Successive values 800, 2427, 3658, 25024, 32824 kJ mol<sup>−1</sup> jump about sevenfold after the third: group 13.',
    say: null,
  },
  // pp. 155–157
  {
    topic: 6,
    kind: 'remember',
    q: 'Order S<sup>2−</sup>, Cl<sup>−</sup>, Ar, K<sup>+</sup>, Ca<sup>2+</sup> by first ionisation enthalpy?',
    a: 'S<sup>2−</sup> < Cl<sup>−</sup> < Ar < K<sup>+</sup> < Ca<sup>2+</sup>: all have 18 electrons, and IE rises with nuclear charge (<i>Z</i> = 16 to 20), the same cloud ever more tightly held. Among anions, the more negative the ion, the lower its IE',
    why: 'Reading an IE/EGE table: a huge Δ<sub>i</sub><i>H</i><sub>2</sub>/Δ<sub>i</sub><i>H</i><sub>1</sub> ratio means one valence electron; a positive Δ<sub>eg</sub><i>H</i>, a noble gas; the most negative Δ<sub>eg</sub><i>H</i>, the most reactive non-metal; the smallest Δ<sub>i</sub><i>H</i><sub>1</sub>, the most reactive metal.',
    say: null,
  },

  // ── Additional D · What JEE and NEET Actually Ask ──
  // pp. 157–158
  {
    topic: 7,
    kind: 'remember',
    q: 'Where does the weight of this chapter’s exam questions fall?',
    a: 'Periodic trends (radius, IE, EGE, EN orders and anomalies) about 45%; chemical trends (oxides, oxidation states, diagonal relationship) about 25%; history, laws and nomenclature about 15%; position bookkeeping about 8%. Counting and multi-statement formats dominate',
    why: 'The same four anomalies come back again and again: Be/B, N/O, F/Cl EGE, Ga/Al size. And the exams have moved from naming trends to reading data tables.',
    say: null,
  },
  // pp. 158, 160–161
  {
    topic: 7,
    kind: 'mistake',
    q: 'Gallium is smaller than aluminium. Is that the inert pair effect, or the lanthanoid contraction?',
    a: 'Neither: the ten intervening 3d electrons shield poorly, so the group-13 radii run Ga < Al < In < Tl. The inert pair effect governs +1 versus +3 stability lower down; the lanthanoid contraction acts near In/Tl, after the 4f shell',
    why: 'Another trap: CO, NO and N<sub>2</sub>O are neutral oxides, neither acidic, basic nor amphoteric.',
    say: null,
  },
];
