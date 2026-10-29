/**
 * KEY POINTS for Chemistry Class 11, Chapter 7 (Redox Reactions).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–F are 4–9; Additional
 * topic G, the Summary Checklist, is 10 (no points); Additional topic H, What
 * JEE and NEET Actually Ask (the book's Addendum P), is 11. No point refers to
 * another topic by number.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key Definitions / Key Formulas and Cheat Sheet Box.
 * Common mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip.
 * `say`: the cheat sheet's memory aids, word for word, in the Ch 1–4 form: no
 * quotation marks, and a label after " — " (Topics 02–04 print only one each).
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic H: its distribution and traps. No point cites the
 * book's old-edition NCERT numbering (Table 8.1, Problem 8.5).
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas,
 * ions and e<sup>−</sup> upright; oxidation numbers signed (+7, −1) with Roman
 * numerals in Stock names. <i>E</i>°, <i>E</i>°<sub>cell</sub>,
 * <i>E</i>°<sub>cathode</sub>, Δ<i>G</i>°, <i>n</i>, <i>F</i>, <i>K</i>, <i>Q</i>,
 * <i>M</i>, <i>N</i>, <i>V</i> italic; meq<sub>ox</sub>, meq<sub>red</sub> upright.
 * Cell notation Zn|Zn<sup>2+</sup>‖Cu<sup>2+</sup>|Cu. Generic letters in A + B → AB
 * upright. A condition over an arrow in <sup> after it (→<sup>Δ</sup>).
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Classical & Electronic Concepts and Oxidation Numbers ──
  // pp. 297, 299, 304
  {
    topic: 0,
    kind: 'remember',
    q: 'The master rule for oxidation numbers, and the usual values with their exceptions?',
    a: '∑(O.N.) = net charge on the species: 0 for a neutral molecule, the ionic charge for an ion. Group 1 = +1, Group 2 = +2, Al = +3, F = −1 (always). O = −2 except peroxides −1, superoxides −½, OF<sub>2</sub> +2 (O<sub>2</sub>F<sub>2</sub> +1); H = +1 except metal hydrides −1 (NaH, CaH<sub>2</sub>)',
    why: 'HClO<sub>4</sub>: +1 + <i>x</i> − 8 = 0, <i>x</i> = +7. In increasing O.N. of Cl: HCl (−1) < Cl<sub>2</sub> (0) < HClO (+1) < HClO<sub>3</sub> (+5) < HClO<sub>4</sub> (+7).',
    say: null,
  },
  // pp. 297, 303, 304
  {
    topic: 0,
    kind: 'remember',
    q: 'Oxidation and reduction through the three lenses, and which O.N. lets a species act as oxidant, reductant or both?',
    a: 'Oxidation = add O / lose H / lose e<sup>−</sup> / increase in O.N.; reduction = lose O / add H / gain e<sup>−</sup> / decrease in O.N. Highest O.N. ⇒ oxidant only; lowest O.N. ⇒ reductant only; intermediate ⇒ can do both or disproportionate',
    why: 'S in H<sub>2</sub>SO<sub>4</sub> (+6) and Mn in KMnO<sub>4</sub> (+7) are at their maximum, so oxidants only; HNO<sub>2</sub> (N at +3) can do both.',
    say: 'OIL RIG — Oxidation Is Loss, Reduction Is Gain.',
  },
  // pp. 297–299, 303, 304
  {
    topic: 0,
    kind: 'mixup',
    q: 'Oxidising agent or the species oxidised: which one is reduced?',
    a: 'The oxidising agent increases the O.N. of another species and is itself reduced (gains e<sup>−</sup>); the reducing agent is itself oxidised (loses e<sup>−</sup>). Labelling the species whose O.N. rises as the oxidant is exactly backwards',
    why: '4Al + 3MnO<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub> + 3Mn: Al 0 → +3 is oxidised, so Al is the reductant; Mn +4 → 0 is reduced, so MnO<sub>2</sub> is the oxidant.',
    say: 'LEO the lion says GER — Lose e<sup>−</sup> = Oxidation, Gain e<sup>−</sup> = Reduction.',
  },
  // pp. 299, 301, 303
  {
    topic: 0,
    kind: 'mistake',
    q: 'CrO<sub>5</sub>: is Cr +10, from <i>x</i> + 5(−2) = 0?',
    a: 'No: +10 busts chromium’s ceiling of +6, the sign of a missed peroxide. CrO<sub>5</sub> has two peroxide (O–O) links, four O at −1 and one oxo O at −2: <i>x</i> + 4(−1) + 1(−2) = 0, <i>x</i> = +6. At its maximum, CrO<sub>5</sub> is an oxidant only',
    why: 'Likewise O = −2 inside H<sub>2</sub>O<sub>2</sub> or H = +1 inside NaH gives nonsense, and a fractional O.N. is an average: +2.5 for S in S<sub>4</sub>O<sub>6</sub><sup>2−</sup> hides two S at +5 and two at 0.',
    say: null,
  },
  // pp. 297, 303–304
  {
    topic: 0,
    kind: 'shortcut',
    q: 'S in H<sub>2</sub>SO<sub>5</sub> (Caro’s acid)? The fast, safe way?',
    a: 'Before computing, run a 3-second exception sweep for O–O, M–H and O–F links; after, check the answer against the element’s allowed range (S never above +6, N never above +5). Blanket O = −2 gives S = +8; one peroxide link (two O at −1) and three O at −2 give +6',
    why: 'If your number busts the ceiling, you missed a peroxide linkage: go back to the structure.',
    say: null,
  },

  // ── Topic 02 · Balancing Redox Equations ──
  // pp. 306–307, 312
  {
    topic: 1,
    kind: 'remember',
    q: 'The ion-electron (half-reaction) method, step by step?',
    a: 'Ionic form → split into oxidation and reduction halves → balance atoms other than O and H → O with H<sub>2</sub>O, H with H<sup>+</sup> (acidic) or OH<sup>−</sup> (basic) → balance charge with e<sup>−</sup> on the more positive side → multiply so the electrons match, add, cancel → final atom-and-charge check',
    why: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O plus 3Sn<sup>2+</sup> → 3Sn<sup>4+</sup> + 6e<sup>−</sup> gives Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 3Sn<sup>2+</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O + 3Sn<sup>4+</sup>: charge +18 on both sides.',
    say: null,
  },
  // pp. 305–306, 308, 312
  {
    topic: 1,
    kind: 'remember',
    q: 'What must tally in every redox equation, and how many electrons does MnO<sub>4</sub><sup>−</sup> take in each medium?',
    a: 'Two accounts, atoms (mass) and charge, with electrons lost = electrons gained. The electrons transferred, <i>n</i>, equal the total change in O.N. and are the n-factor reused in titrations. MnO<sub>4</sub><sup>−</sup>: acid → Mn<sup>2+</sup> (5 e<sup>−</sup>), neutral → MnO<sub>2</sub> (3 e<sup>−</sup>), strong base → MnO<sub>4</sub><sup>2−</sup> (1 e<sup>−</sup>)',
    why: 'Basic medium: MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O + 3e<sup>−</sup> → MnO<sub>2</sub> + 4OH<sup>−</sup>; with 2I<sup>−</sup> → I<sub>2</sub> + 2e<sup>−</sup> this gives 2MnO<sub>4</sub><sup>−</sup> + 6I<sup>−</sup> + 4H<sub>2</sub>O → 2MnO<sub>2</sub> + 3I<sub>2</sub> + 8OH<sup>−</sup>, charge −8 on both sides.',
    say: '5–3–1 as the base grows on — MnO<sub>4</sub><sup>−</sup> takes 5 e<sup>−</sup> in acid, 3 in neutral, 1 in strong base.',
  },
  // pp. 306, 311
  {
    topic: 1,
    kind: 'mixup',
    q: 'Acidic or basic medium: which species balance O and H?',
    a: 'Acidic/neutral: O with H<sub>2</sub>O, H with H<sup>+</sup> (per excess O, one H<sub>2</sub>O to the deficient side and two H<sup>+</sup> to the other). Basic: O with H<sub>2</sub>O, H with OH<sup>−</sup> (per excess O, one H<sub>2</sub>O to the same side and two OH<sup>−</sup> to the other)',
    why: 'Free H<sup>+</sup> cannot persist in basic solution: putting H<sup>+</sup> into a basic-medium answer, or the reverse, is the number-one examiner trap.',
    say: null,
  },
  // pp. 308, 311
  {
    topic: 1,
    kind: 'mistake',
    q: 'Every atom is balanced. Is the equation right?',
    a: 'Not yet: the charge must tally too, and the two halves must carry equal electrons before they are added (3 e<sup>−</sup> and 2 e<sup>−</sup> scale to a common 6, or electrons survive in the answer). Nor is the product fixed: MnO<sub>4</sub><sup>−</sup> does not always become Mn<sup>2+</sup>, and a wrong product means a wrong electron count',
    why: 'MnO<sub>4</sub><sup>−</sup> + C<sub>2</sub>O<sub>4</sub><sup>2−</sup>: writing 5 oxalate → 5 CO<sub>2</sub> (it is 10) or counting oxalate as a 1-electron donor (it is 2) are the traps.',
    say: null,
  },
  // pp. 307–308, 311
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Coefficient of H<sup>+</sup> in MnO<sub>4</sub><sup>−</sup> + C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → Mn<sup>2+</sup> + CO<sub>2</sub> (acidic)? The fast way?',
    a: 'Never balance the whole equation: get the electron count from the O.N. changes (Mn gains 5, each oxalate loses 2), take the LCM, 10, to fix 2MnO<sub>4</sub><sup>−</sup> and 5C<sub>2</sub>O<sub>4</sub><sup>2−</sup>, then balance O with water: 28 O on the left, 20 in 10CO<sub>2</sub>, so 8H<sub>2</sub>O and 16H<sup>+</sup>',
    why: 'For any basic-medium problem, balance as acidic first, then add one OH<sup>−</sup> to both sides per H<sup>+</sup> and pair them into H<sub>2</sub>O.',
    say: null,
  },

  // ── Topic 03 · Redox Titrations & Electrochemical Cells ──
  // pp. 314–315, 319
  {
    topic: 2,
    kind: 'remember',
    q: 'n-factor, normality and the endpoint condition of a redox titration?',
    a: 'n-factor = electrons gained or lost per formula unit = (change in O.N. per atom) × (number of such atoms). Equivalents = moles × n-factor; <i>N</i> = molarity × n-factor; meq = <i>N</i> × <i>V</i>(mL). Endpoint: meq<sub>ox</sub> = meq<sub>red</sub>, <i>M</i><sub>1</sub><i>n</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>n</i><sub>2</sub><i>V</i><sub>2</sub>. In acid: MnO<sub>4</sub><sup>−</sup> 5, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> 6, C<sub>2</sub>O<sub>4</sub><sup>2−</sup> 2, Fe<sup>2+</sup> 1 (MnO<sub>4</sub><sup>−</sup> neutral 3)',
    why: '20.0 mL of 0.10 M oxalic acid against 0.020 M KMnO<sub>4</sub>: (0.020)(5)<i>V</i> = (0.10)(2)(20.0), <i>V</i> = 40.0 mL.',
    say: null,
  },
  // pp. 314, 318–319
  {
    topic: 2,
    kind: 'remember',
    q: '<i>E</i>°<sub>cell</sub>, Δ<i>G</i>°, <i>K</i> and the Nernst equation for a cell?',
    a: '<i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub>, both standard reduction potentials; positive ⇒ spontaneous. Δ<i>G</i>° = −<i>nFE</i>°<sub>cell</sub> (<i>F</i> = 96500 C mol<sup>−1</sup>, <i>n</i> = electrons per cell reaction); at 298 K, log <i>K</i> = <i>nE</i>°<sub>cell</sub>/0.0591 and <i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i>. Cell notation: anode | anode soln ‖ cathode soln | cathode',
    why: 'Zn|Zn<sup>2+</sup>(0.1 M)‖Cu<sup>2+</sup>(0.01 M)|Cu, <i>E</i>°<sub>cell</sub> = 1.10 V: <i>Q</i> = 10, <i>E</i><sub>cell</sub> = 1.10 − (0.0591/2) log 10 = 1.10 − 0.0296 = 1.07 V.',
    say: 'An Ox / Red Cat — Anode = Oxidation, Reduction = Cathode.',
  },
  // pp. 315–316, 318
  {
    topic: 2,
    kind: 'mixup',
    q: 'Most positive or most negative <i>E</i>°: which marks the strongest oxidising agent, which the strongest reducing agent?',
    a: 'Most positive <i>E</i>° ⇒ strongest oxidising agent, the ion (Ag<sup>+</sup>, +0.80 V); most negative <i>E</i>° ⇒ its metal is the strongest reducing agent (Zn, −0.76 V; Li, −3.05 V). A high reduction potential means the species loves electrons, so it is a poor reducer',
    why: 'The largest EMF comes from the widest gap: Ag with Zn, 0.80 − (−0.76) = 1.56 V, beating Zn–Cu (1.10 V).',
    say: null,
  },
  // pp. 316, 319
  {
    topic: 2,
    kind: 'mistake',
    q: 'Zn + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag, <i>E</i>°<sub>cell</sub> = 1.56 V. Is <i>n</i> = 1 in Δ<i>G</i>° = −<i>nFE</i>°<sub>cell</sub>, since the silver half is written with 1 e<sup>−</sup>?',
    a: 'No: <i>n</i> is the electrons in the balanced cell reaction, 2 here. Δ<i>G</i>° = −(2)(96500)(1.56) = −3.01 × 10<sup>5</sup> J ≈ −301 kJ',
    why: 'The classic titration slip is the same in spirit: equating moles instead of equivalents. And electrons travel through the wire (anode → cathode), never the salt bridge.',
    say: null,
  },
  // pp. 318–319
  {
    topic: 2,
    kind: 'shortcut',
    q: '25.0 mL of FeSO<sub>4</sub> needs 20.0 mL of 0.020 M KMnO<sub>4</sub> in acid. Molarity of FeSO<sub>4</sub>? The fast way?',
    a: 'Write <i>M</i> × <i>n</i> × <i>V</i> on each side and equate, no balanced equation needed: <i>M</i>(1)(25.0) = (0.020)(5)(20.0), so <i>M</i> = 0.080 M',
    why: 'For cells, rank the <i>E</i>° values first: higher = cathode, lower = anode, EMF = the gap. A negative gap means the cell is drawn backwards: swap the electrodes rather than redo the algebra.',
    say: null,
  },

  // ── Topic 04 · Types of Redox Reactions & Redox in Action ──
  // pp. 321, 325–326
  {
    topic: 3,
    kind: 'remember',
    q: 'The four types of redox reaction, and what each must show?',
    a: 'Combination A + B → AB, decomposition AB → A + B, displacement A + BC → AC + B (metal, hydrogen or halogen), and disproportionation (one element in an intermediate O.N. goes to a higher and a lower one). Each is redox only if an O.N. changes. Comproportionation is the reverse of disproportionation: two states → one',
    why: '2H<sub>2</sub>S + SO<sub>2</sub> → 3S + 2H<sub>2</sub>O is a comproportionation: S at −2 and +4 both become 0.',
    say: 'Count first, confirm with O.N.; one element in three states = disproportionation — classifying a redox reaction.',
  },
  // pp. 321–323, 325
  {
    topic: 3,
    kind: 'remember',
    q: 'The reactivity series, and what it predicts?',
    a: 'K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au: a metal higher in the series displaces the ion of any metal lower than it, and metals above (H) liberate H<sub>2</sub> from acids. Halogens: F<sub>2</sub> > Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>',
    why: 'Zn + FeSO<sub>4</sub> → ZnSO<sub>4</sub> + Fe reacts; Cu + ZnSO<sub>4</sub>, Ag + CuSO<sub>4</sub> and Cu + Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> do not.',
    say: null,
  },
  // pp. 323–325
  {
    topic: 3,
    kind: 'mixup',
    q: 'Disproportionation or intramolecular redox?',
    a: 'Disproportionation needs one element splitting into a higher and a lower state. When two different elements move oppositely inside one compound, it is intramolecular redox: (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> →<sup>Δ</sup> N<sub>2</sub> + Cr<sub>2</sub>O<sub>3</sub> + 4H<sub>2</sub>O has N −3 → 0 and Cr +6 → +3',
    why: '3Cl<sub>2</sub> + 6NaOH → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O (hot, concentrated) is a true disproportionation: 5 Cl go 0 → −1 (5 e<sup>−</sup> gained) and 1 Cl goes 0 → +5 (5 e<sup>−</sup> lost).',
    say: null,
  },
  // pp. 323, 325–326
  {
    topic: 3,
    kind: 'mistake',
    q: 'Is every combination or decomposition a redox reaction?',
    a: 'No: assign O.N. first. CaO + CO<sub>2</sub> → CaCO<sub>3</sub> and CaCO<sub>3</sub> → CaO + CO<sub>2</sub> involve no O.N. change (Ca +2, C +4, O −2 throughout), whereas 2KClO<sub>3</sub> →<sup>Δ</sup> 2KCl + 3O<sub>2</sub> is redox (Cl +5 → −1, O −2 → 0)',
    why: 'Stock notation: a Roman numeral in parentheses with no + sign, iron(III), not iron(+3) or iron(3); KMnO<sub>4</sub> is potassium manganate(VII); Fe<sub>3</sub>O<sub>4</sub> is mixed Fe(II)/Fe(III).',
    say: null,
  },
  // p. 325
  {
    topic: 3,
    kind: 'shortcut',
    q: 'How do you classify a redox reaction fast, and spot a disproportionation?',
    a: 'Glance at the count of reactants and products first (2 → 1 combination, 1 → many decomposition, element swaps displacement), then confirm with a single O.N. check. For disproportionation, scan for one element in three different oxidation states across the equation: its starting state plus a higher and a lower',
    why: '3MnO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2H<sub>2</sub>O: Mn at +6, +7 and +4, a disproportionation.',
    say: null,
  },

  // ── Additional A · Reading the Standard Electrode Potential Table ──
  // pp. 327–328, 330
  {
    topic: 4,
    kind: 'remember',
    q: 'On the table of standard electrode potentials, what does the sign of <i>E</i>° mean, and which way do oxidising and reducing strength run?',
    a: 'Every value is a reduction potential measured against the standard hydrogen electrode, 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>, fixed at 0.00 V (1 M, 1 atm, 298 K). Negative <i>E</i>°: a stronger reducing agent than H<sup>+</sup>/H<sub>2</sub>, so the metal dissolves in acid; positive: a weaker one. Oxidising strength rises up the table (F<sub>2</sub>, +2.87 V), reducing strength down it (Li, −3.05 V)',
    why: 'M + 2H<sup>+</sup> → M<sup>2+</sup> + H<sub>2</sub>, <i>E</i>°<sub>cell</sub> = 0.00 − <i>E</i>°(M<sup>2+</sup>/M): Zn +0.76 V and Ni +0.25 V liberate H<sub>2</sub>; Cu −0.34 V does not.',
    say: null,
  },
  // pp. 329–330
  {
    topic: 4,
    kind: 'remember',
    q: 'Given two couples, how do you settle the direction, the EMF and who oxidises whom?',
    a: 'The higher couple runs as written (reduction, at the cathode), the lower is driven backwards (oxidation, at the anode); <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub>, the vertical gap, positive for the spontaneous direction. The oxidised form of the higher couple oxidises the reduced form of the lower, never the reverse',
    why: 'Br<sub>2</sub> (+1.09 V) and Cl<sub>2</sub> (+1.36 V) oxidise Fe<sup>2+</sup> (Fe<sup>3+</sup>/Fe<sup>2+</sup> +0.77 V); I<sub>2</sub> (+0.54 V) cannot: 0.54 − 0.77 = −0.23 V.',
    say: null,
  },

  // ── Additional B · Which Species Can Disproportionate? The Three-State Rule ──
  // pp. 331–333
  {
    topic: 5,
    kind: 'remember',
    q: 'Which species can disproportionate?',
    a: 'The element must exist in at least three oxidation states and sit in an intermediate one in the reactant. At its maximum (Cl in ClO<sub>4</sub><sup>−</sup> +7, Mn in MnO<sub>4</sub><sup>−</sup> +7, S in H<sub>2</sub>SO<sub>4</sub> +6, N in HNO<sub>3</sub> +5) it can only come down; fluorine has no positive state, so it never disproportionates',
    why: '3ClO<sup>−</sup> → 2Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup>, 6ClO<sub>2</sub><sup>−</sup> → 4ClO<sub>3</sub><sup>−</sup> + 2Cl<sup>−</sup>, 4ClO<sub>3</sub><sup>−</sup> → Cl<sup>−</sup> + 3ClO<sub>4</sub><sup>−</sup>; ClO<sub>4</sub><sup>−</sup> does not. 2F<sub>2</sub> + 2OH<sup>−</sup> → 2F<sup>−</sup> + OF<sub>2</sub> + H<sub>2</sub>O is ordinary redox.',
    say: null,
  },
  // pp. 332–333
  {
    topic: 5,
    kind: 'remember',
    q: 'How do two <i>E</i>° values prove that a disproportionation is spontaneous?',
    a: 'Build it as a cell: one X reduced at the cathode, the other oxidised at the anode; <i>E</i>°<sub>cell</sub> > 0 means the split is spontaneous. 2Cu<sup>+</sup> → Cu + Cu<sup>2+</sup>: 0.52 − 0.16 = +0.36 V, log <i>K</i> = 0.36/0.0591 ≈ 6.1, <i>K</i> ≈ 10<sup>6</sup>, so Cu<sup>+</sup> is unstable in water and Cu<sup>2+</sup> dominates',
    why: 'H<sub>2</sub>O<sub>2</sub>: 1.78 − 0.68 = +1.10 V > 0, so 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub> is spontaneous; peroxide keeps in bottles only because the reaction is kinetically slow.',
    say: null,
  },

  // ── Additional C · Combined n-Factors: Salts Oxidised in Two Places ──
  // pp. 333–334
  {
    topic: 6,
    kind: 'remember',
    q: 'n-factor in acid of FeC<sub>2</sub>O<sub>4</sub>, Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>, FeSO<sub>4</sub> and Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?',
    a: 'Sum every oxidisable part of the formula unit. FeC<sub>2</sub>O<sub>4</sub>: Fe<sup>2+</sup> → Fe<sup>3+</sup> gives 1, C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2CO<sub>2</sub> gives 2, <i>n</i> = 3. Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>: iron already +3, three oxalates, <i>n</i> = 6. FeSO<sub>4</sub>: <i>n</i> = 1. Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: <i>n</i> = 0',
    why: '144 mg of FeC<sub>2</sub>O<sub>4</sub> (1.0 mmol, 3.0 meq) against 0.1 M KMnO<sub>4</sub> (0.5 N): <i>V</i> = 3.0/0.5 = 6.0 mL. 2 mL (iron only) and 4 mL (oxalate only) are the distractors.',
    say: null,
  },
  // p. 334
  {
    topic: 6,
    kind: 'remember',
    q: 'One mole each of FeC<sub>2</sub>O<sub>4</sub>, Fe<sub>2</sub>(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>, FeSO<sub>4</sub> and Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: how many moles of KMnO<sub>4</sub> oxidise the mixture in acid?',
    a: 'Total equivalents = Σ(moles × n-factor) over the parts that react: 3 + 6 + 1 + 0 = 10 eq; permanganate takes 5 e<sup>−</sup> per formula unit, so 10/5 = 2 mol. Species already in their highest state contribute nothing',
    why: '4 mol of a mixture of Mohr’s salt and Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> needing 500 mL of 1 M K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>: 0.500 × 1 × 6 = 3.0 eq = 3.0 mol of Mohr’s salt (<i>n</i> = 1), 75 mol%.',
    say: null,
  },

  // ── Additional D · Iodometry: The Iodine–Thiosulphate Chain ──
  // p. 335
  {
    topic: 7,
    kind: 'remember',
    q: 'The iodometric chain: the two anchor half-reactions, and the rule that carries the arithmetic?',
    a: 'I<sub>2</sub> + 2e<sup>−</sup> → 2I<sup>−</sup>, <i>n</i>(I<sub>2</sub>) = 2; 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2e<sup>−</sup>, <i>n</i>(S<sub>2</sub>O<sub>3</sub><sup>2−</sup>) = 1; titration I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>. Equivalents are conserved at every link: meq of analyte = meq of I<sub>2</sub> liberated = meq of thiosulphate',
    why: '25 mL of H<sub>2</sub>O<sub>2</sub> with excess acidified KI, the iodine needing 40 mL of 0.1 N thiosulphate: 4.0 meq, <i>N</i> = 4.0/25 = 0.16 N.',
    say: null,
  },
  // pp. 335–336
  {
    topic: 7,
    kind: 'remember',
    q: 'One mole of acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> with excess KI: how many moles of I<sub>2</sub>?',
    a: '3 mol: dichromate’s n-factor is 6 (two Cr, +6 → +3) and each I<sub>2</sub> stores 2 e<sup>−</sup>, as in Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 6I<sup>−</sup> + 14H<sup>+</sup> → 2Cr<sup>3+</sup> + 3I<sub>2</sub> + 7H<sub>2</sub>O',
    why: 'Cu<sup>2+</sup> has <i>n</i> = 1 here (2Cu<sup>2+</sup> + 4I<sup>−</sup> → Cu<sub>2</sub>I<sub>2</sub>(s) + I<sub>2</sub>): iodine from 25 mL of CuSO<sub>4</sub> needing 20 mL of 0.1 N thiosulphate gives 2.0/25 = 0.08 M.',
    say: null,
  },

  // ── Additional E · Inside the Permanganate Titration: Lab Facts the Papers Probe ──
  // pp. 336–337
  {
    topic: 8,
    kind: 'remember',
    q: 'The four laboratory facts of permanganate titrations?',
    a: 'The oxalic acid titration is run hot, about 60 °C, before the first addition (not boiled: oxalic acid decomposes); the reaction is autocatalytic, the Mn<sup>2+</sup> formed speeding it up; FAS (Mohr’s salt) titrations are run cold, since heat speeds aerial oxidation of Fe<sup>2+</sup>; KMnO<sub>4</sub> is not a primary standard (traces of MnO<sub>2</sub>, decomposes in light and water), so it is standardised against oxalic acid or Mohr’s salt',
    why: 'Acidify with dilute H<sub>2</sub>SO<sub>4</sub>, never HCl (Cl<sup>−</sup> is oxidised) or HNO<sub>3</sub> (itself an oxidant); KMnO<sub>4</sub> is its own indicator, the first excess drop turning the flask pink.',
    say: null,
  },
  // pp. 337–338
  {
    topic: 8,
    kind: 'remember',
    q: 'FAS is warmed to 60 °C, then titrated against KMnO<sub>4</sub>. Is the reported iron content high, low or unaffected?',
    a: 'Low: warming accelerates air oxidation of Fe<sup>2+</sup> to Fe<sup>3+</sup>, so less Fe<sup>2+</sup> remains to consume permanganate, the titre falls and the iron is under-reported',
    why: 'Oxalic acid against KMnO<sub>4</sub>: heating to about 60 °C starts the slow reaction, and the Mn<sup>2+</sup> produced, an autocatalyst, carries the rest; both statements are true and the second explains the first.',
    say: null,
  },

  // ── Additional F · High-Electron Half-Reactions ──
  // p. 338
  {
    topic: 9,
    kind: 'remember',
    q: 'NO<sub>3</sub><sup>−</sup> → NH<sub>4</sub><sup>+</sup> in basic medium: the balanced half-reaction and its electron count?',
    a: 'NO<sub>3</sub><sup>−</sup> + 7H<sub>2</sub>O + 8e<sup>−</sup> → NH<sub>4</sub><sup>+</sup> + 10OH<sup>−</sup> (charge −9 on both sides): N +5 → −3, an 8-electron reduction, the largest single-species drop in Class 11. For contrast, in acid NO<sub>3</sub><sup>−</sup> → NO takes 3 e<sup>−</sup> (dilute), NO<sub>3</sub><sup>−</sup> → NO<sub>2</sub> 1 e<sup>−</sup> (concentrated)',
    why: 'With 4Zn → 4Zn<sup>2+</sup> + 8e<sup>−</sup>: 4Zn + NO<sub>3</sub><sup>−</sup> + 7H<sub>2</sub>O → 4Zn<sup>2+</sup> + NH<sub>4</sub><sup>+</sup> + 10OH<sup>−</sup>; coefficient of OH<sup>−</sup> minus that of Zn = 10 − 4 = 6.',
    say: null,
  },
  // p. 339
  {
    topic: 9,
    kind: 'remember',
    q: 'MnO<sub>4</sub><sup>−</sup> + S<sup>2−</sup> → MnO<sub>2</sub> + S in basic medium: the coefficient of H<sub>2</sub>O?',
    a: '4: 2MnO<sub>4</sub><sup>−</sup> + 3S<sup>2−</sup> + 4H<sub>2</sub>O → 2MnO<sub>2</sub> + 3S + 8OH<sup>−</sup>, with Mn gaining 3 e<sup>−</sup> × 2 and S losing 2 e<sup>−</sup> × 3',
    why: 'Acidic: Cu + 2NO<sub>3</sub><sup>−</sup> + 4H<sup>+</sup> → Cu<sup>2+</sup> + 2NO<sub>2</sub> + 2H<sub>2</sub>O (H<sup>+</sup> 4). Basic: 3Cl<sub>2</sub> + 6OH<sup>−</sup> → 5Cl<sup>−</sup> + ClO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O (Cl<sup>−</sup> minus H<sub>2</sub>O = 2).',
    say: null,
  },

  // ── Additional H · What JEE and NEET Actually Ask ──
  // pp. 340–341, 343
  {
    topic: 11,
    kind: 'remember',
    q: 'What do JEE Main and NEET questions on redox reward most?',
    a: 'Arithmetic with equivalents (n-factors, mixtures, iodometric chains), followed closely by oxidation-number fluency. The short conceptual questions (strongest oxidant, salt-bridge role, disproportionation definition) are frequent and reward drilled instant answers. For a coefficient: electron count first, LCM second, water and H<sup>+</sup>/OH<sup>−</sup> last',
    why: 'Nitrogen oxides run N<sub>2</sub>O (+1) < NO (+2) < N<sub>2</sub>O<sub>3</sub> (+3) < NO<sub>2</sub> (+4); equivalents per mole of MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> in acid are 5 : 6.',
    say: null,
  },
  // p. 342
  {
    topic: 11,
    kind: 'mistake',
    q: 'Which six traps recur in redox questions?',
    a: 'Reading a fractional O.N. as per-atom truth (S<sub>4</sub>O<sub>6</sub><sup>2−</sup> is +5, 0, 0, +5); dropping one contribution in a dual-site salt (FeC<sub>2</sub>O<sub>4</sub> is 3, not 1 or 2); swapping the iodometric n-factors (I<sub>2</sub> 2, S<sub>2</sub>O<sub>3</sub><sup>2−</sup> 1); treating permanganate’s electron count as fixed (5, 3, 1); inverting the potential–strength link; hydrogen +1 always (it is −1 in NaH, CaH<sub>2</sub>)',
    why: 'Brown-ring complex [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]SO<sub>4</sub> with NO as NO<sup>+</sup>: the cation carries +2, water is neutral and NO contributes +1, so Fe = +1.',
    say: null,
  },
];
