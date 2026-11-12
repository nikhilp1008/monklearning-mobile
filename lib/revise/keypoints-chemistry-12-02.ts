/**
 * KEY POINTS for Chemistry Class 12, Chapter 2 (Electrochemistry).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–04 are 0–3; Additional topics A–D are 4–7; Additional
 * topic E, What JEE and NEET Actually Ask (the book's Addendum P), is 8. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Formulas / Definitions and Cheat
 * Sheet Box. Common mistakes: its Common Student Pitfalls. Exam shortcuts: its
 * Pro-Tip. `say`: the cheat sheet's first two memory aids, word for word, in
 * the Ch 1–4 form: no quotation marks, and a label after " — " (the book's own
 * gloss where it has one). Topic 04, the book's Capstone, has no cheat sheet in
 * the app (its Part C is not copied), no pitfalls and no Pro-Tip: its points
 * come from Part A, its worked examples and MCQ, and the Part B tables, and it
 * has no memory lines. Additional topics: the addenda's methods, worked
 * examples and practice answers. Additional topic E: its distribution and
 * traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas, ions
 * and e<sup>−</sup> upright. <i>E</i>°, <i>E</i><sub>cell</sub>, <i>E</i>°<sub>cell</sub>,
 * Δ<sub>r</sub><i>G</i>°, <i>K</i><sub>c</sub>, <i>K</i><sub>a</sub>, <i>K</i><sub>sp</sub>,
 * <i>n</i>, <i>F</i>, <i>Q</i>, <i>R</i>, <i>G</i>, <i>G</i>*, <i>κ</i>, <i>α</i>, <i>c</i>,
 * <i>S</i>, <i>W</i>, <i>I</i>, <i>t</i>, <i>Z</i>, <i>M</i> (molar mass) italic.
 * Λ and ° upright: Λ<sub>m</sub>, Λ°<sub>m</sub>, Λ<sub>eq</sub>; <i>λ</i>° as printed.
 * Molar "0.10 M" upright. Cell notation with the book's bars, spaced:
 * Zn | Zn<sup>2+</sup> (0.10 M) ‖ Ag<sup>+</sup> (0.010 M) | Ag. State symbols upright.
 * The book's values: 0.0591 at 298 K; <i>F</i> = 96485 C mol<sup>−1</sup> where it
 * says so, otherwise 96500; gas volumes at 22400 mL mol<sup>−1</sup>.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Electrochemical Cells & Nernst Equation ──
  // pp. 59–60, 62, 64, 67
  {
    topic: 0,
    kind: 'remember',
    q: 'A galvanic cell: which electrode is which, how is it written, and how is <i>E</i>°<sub>cell</sub> found?',
    a: 'Anode = oxidation = −; cathode = reduction = +. Electrons flow anode → cathode through the wire; the salt bridge feeds anions toward the anode and cations toward the cathode. Notation: anode left, cathode right, | = phase boundary, ‖ = salt bridge. <i>E</i>°<sub>cell</sub> = <i>E</i>°<sub>cathode</sub> − <i>E</i>°<sub>anode</sub>, both as reduction potentials',
    why: 'Ag<sup>+</sup>/Ag +0.80 V with Ni<sup>2+</sup>/Ni −0.25 V: Ni(s) | Ni<sup>2+</sup>(aq) ‖ Ag<sup>+</sup>(aq) | Ag(s), Ni(s) + 2Ag<sup>+</sup>(aq) → Ni<sup>2+</sup>(aq) + 2Ag(s), <i>E</i>°<sub>cell</sub> = 0.80 − (−0.25) = 1.05 V.',
    say: 'An Ox, Red Cat — Anode = Oxidation, Reduction = Cathode.',
  },
  // pp. 60–61, 64, 67
  {
    topic: 0,
    kind: 'remember',
    q: 'The Nernst equation at 298 K, and its links to Gibbs energy and <i>K</i><sub>c</sub>?',
    a: '<i>E</i><sub>cell</sub> = <i>E</i>°<sub>cell</sub> − (0.0591/<i>n</i>) log <i>Q</i>, where 0.0591 = 2.303 × 8.314 × 298/96485. Δ<sub>r</sub><i>G</i> = −<i>nFE</i><sub>cell</sub>, Δ<sub>r</sub><i>G</i>° = −<i>nFE</i>°<sub>cell</sub>, log <i>K</i><sub>c</sub> = <i>nE</i>°<sub>cell</sub>/0.0591',
    why: 'Fe(s) + Cu<sup>2+</sup>(aq) → Fe<sup>2+</sup>(aq) + Cu(s): <i>E</i>°<sub>cell</sub> = 0.34 − (−0.44) = 0.78 V, <i>n</i> = 2; Δ<sub>r</sub><i>G</i>° = −(2)(96485)(0.78) ≈ −150.5 kJ mol<sup>−1</sup> (−1.5 × 10<sup>2</sup> kJ mol<sup>−1</sup> to two significant figures); log <i>K</i><sub>c</sub> = 2 × 0.78/0.0591 = 26.4, <i>K</i><sub>c</sub> ≈ 2.5 × 10<sup>26</sup>.',
    say: null,
  },
  // pp. 66, 67
  {
    topic: 0,
    kind: 'mixup',
    q: 'Is the anode negative or positive?',
    a: 'In a galvanic cell the anode is − and the cathode is +; in an electrolytic cell the signs flip. Mixing the two conventions costs easy marks',
    why: 'The Daniell cell against an opposing voltage: at exactly 1.10 V the current is zero; beyond it the cell becomes electrolytic, plating Zn and dissolving Cu.',
    say: 'FAT CAT — electrons Flow from Anode To CAThode, in both cell types.',
  },
  // pp. 65, 66, 67
  {
    topic: 0,
    kind: 'mistake',
    q: 'Zn | Zn<sup>2+</sup> (0.10 M) ‖ Ag<sup>+</sup> (0.010 M) | Ag, <i>E</i>°<sub>cell</sub> = 1.56 V: is the log term 0.0591 log (0.10/0.010)?',
    a: 'No: <i>n</i> = 2, so the constant is 0.0591/2 = 0.02955, and <i>Q</i> = [Zn<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup> = 0.10/(0.010)<sup>2</sup> = 1.0 × 10<sup>3</sup>. Pure metals never appear in <i>Q</i>. <i>E</i><sub>cell</sub> = 1.56 − 0.02955(3) = 1.47 V',
    why: 'A dead cell has <i>E</i><sub>cell</sub> = 0 and <i>Q</i> = <i>K</i><sub>c</sub>, not <i>E</i>°<sub>cell</sub> = 0: the standard emf is a fixed constant, nonzero except in a concentration cell.',
    say: null,
  },
  // pp. 64, 66
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Zn | Zn<sup>2+</sup> ‖ Cu<sup>2+</sup> | Cu: both concentrations are doubled. What happens to <i>E</i><sub>cell</sub>? The fast way?',
    a: 'Unchanged. Don’t compute, inspect <i>Q</i>: <i>Q</i> = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>] is a ratio, and doubling both leaves it untouched',
    why: 'Under standard conditions, a positive <i>E</i>°<sub>cell</sub> and a negative Δ<sub>r</sub><i>G</i>° always travel together: check one, you know the other.',
    say: null,
  },

  // ── Topic 02 · Conductance of Electrolytic Solutions ──
  // pp. 69–71, 74
  {
    topic: 1,
    kind: 'remember',
    q: 'The chain from resistance to molar conductivity, with units?',
    a: '<i>G</i> = 1/<i>R</i>, in S. <i>κ</i> = <i>G</i> × <i>l</i>/<i>A</i> = <i>G</i> × <i>G</i>*, with cell constant <i>G</i>* = <i>l</i>/<i>A</i> in cm<sup>−1</sup> and <i>κ</i> in S cm<sup>−1</sup> (SI S m<sup>−1</sup>). Λ<sub>m</sub> = <i>κ</i> × 1000/molarity, in S cm<sup>2</sup> mol<sup>−1</sup> (= 10<sup>−4</sup> S m<sup>2</sup> mol<sup>−1</sup>)',
    why: '0.050 M, 220 Ω, <i>G</i>* = 1.15 cm<sup>−1</sup>: <i>G</i> = 4.545 × 10<sup>−3</sup> S, <i>κ</i> = 5.23 × 10<sup>−3</sup> S cm<sup>−1</sup>, Λ<sub>m</sub> = 104.5 S cm<sup>2</sup> mol<sup>−1</sup> (1.0 × 10<sup>2</sup> S cm<sup>2</sup> mol<sup>−1</sup> to two significant figures).',
    say: null,
  },
  // pp. 69–71, 73, 74
  {
    topic: 1,
    kind: 'remember',
    q: 'Kohlrausch’s law, and what it gives for a weak acid and for a sparingly soluble salt?',
    a: 'Λ°<sub>m</sub> = <i>ν</i><sub>+</sub><i>λ</i>°<sub>+</sub> + <i>ν</i><sub>−</sub><i>λ</i>°<sub>−</sub>. Weak acid: Λ°<sub>m</sub>(HA) = Λ°<sub>m</sub>(HCl) + Λ°<sub>m</sub>(NaA) − Λ°<sub>m</sub>(NaCl), then <i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub> and <i>K</i><sub>a</sub> = <i>cα</i><sup>2</sup>/(1 − <i>α</i>). Sparingly soluble salt: take Λ<sub>m</sub> ≈ Λ°<sub>m</sub>, subtract water’s <i>κ</i>, <i>S</i> = <i>κ</i><sub>salt</sub> × 1000/Λ°<sub>m</sub>, and <i>K</i><sub>sp</sub> = <i>S</i><sup>2</sup> for 1:1',
    why: '0.0050 M weak acid, Λ<sub>m</sub> = 32 and Λ°<sub>m</sub> = 400 S cm<sup>2</sup> mol<sup>−1</sup>: <i>α</i> = 0.080, <i>K</i><sub>a</sub> ≈ 3.5 × 10<sup>−5</sup>.',
    say: null,
  },
  // pp. 71–74
  {
    topic: 1,
    kind: 'mixup',
    q: 'Diluting a strong electrolyte: which way do <i>κ</i> and Λ<sub>m</sub> go?',
    a: '<i>κ</i> falls: fewer charge-carriers per cm<sup>3</sup>. Λ<sub>m</sub> rises: it fixes the amount at one mole, and with neighbours farther apart interionic drag eases. They move in opposite directions; “both decrease” is the classic distractor',
    why: 'Strong: Λ<sub>m</sub> = Λ°<sub>m</sub> − <i>A</i>√<i>c</i>, a gentle rise that extrapolates to Λ°<sub>m</sub>. Weak: Λ<sub>m</sub> shoots up near <i>c</i> = 0, so it cannot be extrapolated; use Kohlrausch.',
    say: 'Dilute → kappa drops, lambda lifts — <i>κ</i> ↓, Λ<sub>m</sub> ↑ on dilution.',
  },
  // pp. 73–74
  {
    topic: 1,
    kind: 'mistake',
    q: '<i>κ</i> = 0.012 S cm<sup>−1</sup> at 0.10 M. Is Λ<sub>m</sub> = 0.12 S cm<sup>2</sup> mol<sup>−1</sup>?',
    a: 'No, that forgets the ×1000: Λ<sub>m</sub> = 0.012 × 1000/0.10 = 120 S cm<sup>2</sup> mol<sup>−1</sup>. The form <i>κ</i> × 1000/molarity holds only with <i>κ</i> in S cm<sup>−1</sup> and concentration in mol L<sup>−1</sup>',
    why: 'And <i>α</i> = Λ<sub>m</sub>/Λ°<sub>m</sub> is for weak electrolytes: strong ones are essentially fully dissociated, and their Λ<sub>m</sub> < Λ°<sub>m</sub> gap is due to interionic forces.',
    say: null,
  },
  // pp. 72, 74
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Λ°<sub>m</sub>: HCl 426, C<sub>2</sub>H<sub>5</sub>COONa 86, NaCl 126 S cm<sup>2</sup> mol<sup>−1</sup>. Λ°<sub>m</sub> of propanoic acid? The fast way?',
    a: 'Set up HA = HCl + NaA − NaCl and verify the spectator ions (Na<sup>+</sup>, Cl<sup>−</sup>) vanish: 426 + 86 − 126 = 386 S cm<sup>2</sup> mol<sup>−1</sup>',
    why: 'Sanity checks: expect Λ<sub>m</sub> of a few units to a few hundred S cm<sup>2</sup> mol<sup>−1</sup> (0.12 or 120000 signals a 1000-factor slip), and a weak acid’s <i>α</i> small (< 0.2 at ordinary concentrations).',
    say: null,
  },

  // ── Topic 03 · Electrolytic Cells, Electrolysis & Batteries/Corrosion ──
  // pp. 77, 80, 82, 84
  {
    topic: 2,
    kind: 'remember',
    q: 'An electrolytic cell’s polarity, and Faraday’s two laws?',
    a: 'An external source drives a non-spontaneous reaction: anode = +, cathode = −. First law: <i>W</i> = <i>ZIt</i> = <i>MIt</i>/(<i>nF</i>), with <i>Z</i> = <i>M</i>/(<i>nF</i>) = <i>E</i>/<i>F</i> the mass deposited by 1 coulomb. Second law: for the same charge in series, <i>W</i><sub>1</sub>/<i>W</i><sub>2</sub> = <i>E</i><sub>1</sub>/<i>E</i><sub>2</sub>, with <i>E</i> = <i>M</i>/<i>n</i>. 1 F = 96500 C = 1 mole of electrons = 1 equivalent',
    why: '2.0 A for 30 minutes through AgNO<sub>3</sub>: <i>Q</i> = 2.0 × 1800 = 3600 C, <i>W</i> = 108 × 3600/(1 × 96500) = 4.03 g (4.0 g to two significant figures).',
    say: 'PoSiTiVe = oxidation in electroLYsis — in an electroLYtic cell the + electrode is the anode (opposite to galvanic).',
  },
  // pp. 76–78, 80, 84
  {
    topic: 2,
    kind: 'remember',
    q: 'Primary cell, secondary cell, fuel cell: which is which, with the key reactions?',
    a: 'Primary (non-rechargeable): dry cell, ~1.5 V; mercury cell. Secondary (rechargeable): lead storage, Ni–Cd. Fuel cell (reactants supplied continuously from outside), H<sub>2</sub>–O<sub>2</sub>: anode 2H<sub>2</sub> + 4OH<sup>−</sup> → 4H<sub>2</sub>O + 4e<sup>−</sup>, cathode O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup>, overall 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O',
    why: 'Lead storage on discharge: Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> → 2PbSO<sub>4</sub> + 2H<sub>2</sub>O. Sulphuric acid is consumed and water formed, so the density falls; charging reverses the reaction.',
    say: null,
  },
  // pp. 80, 84
  {
    topic: 2,
    kind: 'mixup',
    q: 'A scratched zinc coating or a scratched tin coating on iron: which still protects it?',
    a: 'Zinc: it is more reactive (more negative potential), so it corrodes preferentially and the exposed iron survives. A scratched tin can rusts faster, because iron is now the anode',
    why: 'Rusting is a micro galvanic cell needing water + O<sub>2</sub>: anodic spot Fe → Fe<sup>2+</sup> + 2e<sup>−</sup>, cathodic spot O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O. Under a droplet the oxygen-starved centre is the anode, the rim the cathode.',
    say: null,
  },
  // pp. 76, 78, 83, 84
  {
    topic: 2,
    kind: 'mistake',
    q: 'Electrolysis of concentrated aqueous NaCl: Na at the cathode and O<sub>2</sub> at the anode?',
    a: 'Neither. Always include water: at the cathode H<sup>+</sup>/H<sub>2</sub> (0.00 V) beats Na<sup>+</sup>/Na (−2.71 V), so H<sub>2</sub>. At the anode water “should” oxidise (1.23 V vs 1.36 V for Cl<sup>−</sup>), but oxygen evolution is kinetically slow (overpotential), so Cl<sub>2</sub>. Molten NaCl has no water: Na and Cl<sub>2</sub>',
    why: 'In the numericals, <i>t</i> must be in seconds and <i>n</i> must not be dropped: 1.5 A for 20 minutes through molten CaCl<sub>2</sub>, <i>Q</i> = 1800 C, <i>W</i> = 40 × 1800/(2 × 96500) = 0.373 g (0.37 g to two significant figures).',
    say: null,
  },
  // pp. 82, 84
  {
    topic: 2,
    kind: 'shortcut',
    q: 'AgNO<sub>3</sub> solution and molten alumina in series: 1.08 g of Ag is deposited. How much Al? The fast way?',
    a: 'Think in equivalents, not coulombs: the same charge means the same number of equivalents in every cell. Ag: 1.08/108 = 0.010 equivalents. Al: equivalent weight 27/3 = 9, mass 0.010 × 9 = 0.090 g. No need to compute <i>Q</i>',
    why: 'For gas volumes the electron count per molecule (2 for H<sub>2</sub>, 4 for O<sub>2</sub>) is the whole game: 0.100 F gives 0.050 mol H<sub>2</sub> and 0.025 mol O<sub>2</sub>, 1120 and 560 mL at STP (22400 mL mol<sup>−1</sup>).',
    say: 'One mole e<sup>−</sup>, one equivalent, 96500 — for Faraday.',
  },

  // ── Topic 04 · Concentration Cells & Reference Tables ──
  // pp. 85–86
  {
    topic: 3,
    kind: 'remember',
    q: 'What is a concentration cell, and what is its emf?',
    a: 'Two identical electrodes in solutions of the same ion at different concentrations. The half-cells are chemically identical, so <i>E</i>°<sub>cell</sub> = 0 and the entire emf comes from the Nernst log term: <i>E</i><sub>cell</sub> = (0.0591/<i>n</i>) log (<i>c</i><sub>cathode</sub>/<i>c</i><sub>anode</sub>) at 298 K, with <i>c</i><sub>cathode</sub> > <i>c</i><sub>anode</sub> for a spontaneous cell',
    why: 'Zn | Zn<sup>2+</sup> (0.001 M) ‖ Zn<sup>2+</sup> (0.10 M) | Zn, <i>n</i> = 2: 0.02955 × log (100) = 0.02955 × 2 = 0.0591 V.',
    say: null,
  },
  // pp. 86–87
  {
    topic: 3,
    kind: 'remember',
    q: 'From the reference tables: the two ends of the electrode potential series, and the <i>λ</i>° values that stand out?',
    a: 'Strongest oxidising agent at the top, F<sub>2</sub> +2.87 V; strongest reducing agent at the bottom, Li −3.05 V. In between: Cl<sub>2</sub> +1.36, Ag<sup>+</sup> +0.80, Cu<sup>2+</sup> +0.34, H<sup>+</sup> 0.00, Zn<sup>2+</sup> −0.76, Al<sup>3+</sup> −1.66 V. <i>λ</i>° in S cm<sup>2</sup> mol<sup>−1</sup>: H<sup>+</sup> 349.6 and OH<sup>−</sup> 199.1 are anomalously high (Grotthuss “relay” conduction), against K<sup>+</sup> 73.5, Cl<sup>−</sup> 76.3, Na<sup>+</sup> 50.1',
    why: 'Products of electrolysis: aqueous CuSO<sub>4</sub> with Pt gives Cu and O<sub>2</sub>; with Cu electrodes Cu deposits and Cu dissolves (refining); aqueous CuCl<sub>2</sub> with Pt gives Cu and Cl<sub>2</sub>.',
    say: null,
  },
  // p. 85
  {
    topic: 3,
    kind: 'mixup',
    q: 'In the log term: <i>c</i><sub>anode</sub>/<i>c</i><sub>cathode</sub> or <i>c</i><sub>cathode</sub>/<i>c</i><sub>anode</sub>?',
    a: 'Both, with the sign to match. <i>Q</i> = <i>c</i><sub>anode</sub>/<i>c</i><sub>cathode</sub> goes in Nernst with its minus sign; turning the ratio over removes the minus: <i>E</i><sub>cell</sub> = 0 − (0.0591/<i>n</i>) log (<i>c</i><sub>1</sub>/<i>c</i><sub>2</sub>) = (0.0591/<i>n</i>) log (<i>c</i><sub>2</sub>/<i>c</i><sub>1</sub>)',
    why: 'Since <i>c</i><sub>2</sub> (cathode) > <i>c</i><sub>1</sub> (anode), the log is positive and <i>E</i><sub>cell</sub> > 0, as a spontaneous cell must be.',
    say: null,
  },
  // pp. 85–86
  {
    topic: 3,
    kind: 'mistake',
    q: 'In a concentration cell, is the electrode in the more concentrated solution the anode?',
    a: 'No, that reverses the roles, the commonest error. The concentrated side is the cathode: its surplus ions are reduced and plate out. The dilute side is the anode: it is oxidised, its rod dissolving to top up the ions',
    why: 'As the cell runs, the dilute side grows more concentrated and the other is diluted: the ratio → 1, the log → 0, and the cell dies when <i>c</i><sub>1</sub> = <i>c</i><sub>2</sub>.',
    say: null,
  },
  // p. 86
  {
    topic: 3,
    kind: 'shortcut',
    q: 'A copper concentration cell, <i>c</i><sub>cathode</sub> = 1.0 M, shows 0.0295 V at 298 K. <i>c</i><sub>anode</sub>? The fast way?',
    a: 'Only the log term is left, so divide the emf by 0.0591/<i>n</i>: with <i>n</i> = 2, log (1.0/<i>c</i><sub>anode</sub>) = 1.0, the ratio is 10, and <i>c</i><sub>anode</sub> = 0.10 M',
    why: 'Ag | Ag<sup>+</sup> (<i>x</i> M) ‖ Ag<sup>+</sup> (1.0 M) | Ag at 0.118 V, <i>n</i> = 1: 0.118 = 0.0591 log (1.0/<i>x</i>), so the log is 2 and <i>x</i> = 0.01 M.',
    say: null,
  },

  // ── Additional A · Combining Half-Cell Potentials: Add ΔG, Never E ──
  // pp. 89–90
  {
    topic: 4,
    kind: 'remember',
    q: 'How do you get <i>E</i>° of a half-reaction built from two others, and why not by subtracting?',
    a: '<i>E</i>° is intensive, Δ<sub>r</sub><i>G</i>° extensive. Write each as a reduction, compute Δ<sub>r</sub><i>G</i>°<sub><i>i</i></sub> = −<i>n</i><sub><i>i</i></sub><i>FE</i>°<sub><i>i</i></sub>, add or subtract these, and divide back: <i>E</i>° = −Δ<sub>r</sub><i>G</i>°<sub>target</sub>/(<i>n</i><sub>target</sub><i>F</i>). When the target is the sum of two reductions: <i>E</i>°<sub>target</sub> = (<i>n</i><sub>1</sub><i>E</i>°<sub>1</sub> + <i>n</i><sub>2</sub><i>E</i>°<sub>2</sub>)/(<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub>)',
    why: 'Cathode minus anode works only when the electrons cancel. Fe<sup>3+</sup>/Fe<sup>2+</sup> +0.77 V, Fe<sup>2+</sup>/Fe −0.44 V: <i>E</i>°(Fe<sup>3+</sup>/Fe) = (0.77 − 0.88)/3 = −0.04 V.',
    say: null,
  },
  // pp. 90–91
  {
    topic: 4,
    kind: 'remember',
    q: '<i>E</i>°(Sn<sup>2+</sup>/Sn) = −0.140 V and <i>E</i>°(Sn<sup>4+</sup>/Sn) = +0.010 V: what is <i>E</i>°(Sn<sup>4+</sup>/Sn<sup>2+</sup>)?',
    a: '+0.16 V. The target is [Sn<sup>4+</sup> + 4e<sup>−</sup> → Sn] minus [Sn<sup>2+</sup> + 2e<sup>−</sup> → Sn]: Δ<i>G</i>°<sub>target</sub> = −4<i>F</i>(0.010) − [−2<i>F</i>(−0.140)] = −0.320<i>F</i>, and <i>E</i>° = 0.320<i>F</i>/(2<i>F</i>). The naive 0.010 − (−0.140) = 0.15 V lands close only by accident',
    why: 'Three energy terms fix the standard electrode potential of a metal: sublimation of M(s), ionisation of M(g), hydration of M<sup>+</sup>(g).',
    say: null,
  },

  // ── Additional B · The Nernst Equation as a Measuring Instrument ──
  // pp. 91–92
  {
    topic: 5,
    kind: 'remember',
    q: 'How does an electrode potential shift when its ion is diluted tenfold, and with pH for a hydrogen electrode?',
    a: '<i>E</i> = <i>E</i>° + (0.0591/<i>n</i>) log[M<sup><i>n</i>+</sup>], so tenfold dilution lowers <i>E</i> by 0.0591/<i>n</i> volts: about 59 mV for <i>n</i> = 1, 30 mV for <i>n</i> = 2, 20 mV for <i>n</i> = 3. For Pt | H<sub>2</sub> (1 bar) | H<sup>+</sup>, <i>E</i> = −0.0591 pH against the SHE: every unit of pH costs 59 mV',
    why: 'Pt | H<sub>2</sub>(g) | H<sup>+</sup>(aq) ‖ Cu<sup>2+</sup> (0.01 M) | Cu(s) at 0.576 V, with 0.06 V for 2.303<i>RT</i>/<i>F</i>: 0.576 = 0.34 − 0.03 log ([H<sup>+</sup>]<sup>2</sup>/10<sup>−2</sup>), the log is −7.87 ≈ −8, so [H<sup>+</sup>] = 10<sup>−5</sup>, pH = 5.',
    say: null,
  },
  // pp. 91–92
  {
    topic: 5,
    kind: 'remember',
    q: 'How do cell potentials give <i>K</i><sub>sp</sub>, and Δ<sub>r</sub><i>S</i> and Δ<sub>r</sub><i>H</i>?',
    a: '<i>E</i>°(AgCl/Ag) = <i>E</i>°(Ag<sup>+</sup>/Ag) + 0.0591 log <i>K</i><sub>sp</sub>, so an emf table doubles as a <i>K</i><sub>sp</sub> table. Temperature coefficient: Δ<sub>r</sub><i>S</i> = <i>nF</i>(∂<i>E</i>/∂<i>T</i>)<sub><i>p</i></sub>, Δ<sub>r</sub><i>H</i> = −<i>nF</i>[<i>E</i> − <i>T</i>(∂<i>E</i>/∂<i>T</i>)<sub><i>p</i></sub>]',
    why: '+0.22 V and +0.80 V: log <i>K</i><sub>sp</sub> = (0.22 − 0.80)/0.0591 = −9.81, matching the accepted value near 10<sup>−10</sup>.',
    say: null,
  },

  // ── Additional C · Kohlrausch Beyond 1:1, Equivalent Conductance, and Why Ions Rank as They Do ──
  // pp. 93–94
  {
    topic: 6,
    kind: 'remember',
    q: 'Limiting molar conductivity of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> and Mohr’s salt, and how equivalent conductance converts?',
    a: 'Count every ion. Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: 2<i>λ</i>°(Al<sup>3+</sup>) + 3<i>λ</i>°(SO<sub>4</sub><sup>2−</sup>). Mohr’s salt, (NH<sub>4</sub>)<sub>2</sub>Fe(SO<sub>4</sub>)<sub>2</sub> · 6H<sub>2</sub>O: <i>λ</i>°(Fe<sup>2+</sup>) + 2<i>λ</i>°(NH<sub>4</sub><sup>+</sup>) + 2<i>λ</i>°(SO<sub>4</sub><sup>2−</sup>). Λ<sub>eq</sub> = <i>κ</i> × 1000/<i>N</i> and Λ<sub>m</sub> = <i>z</i> × Λ<sub>eq</sub>, with <i>z</i> the total positive charge per formula unit: BaSO<sub>4</sub> 2, Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> 6',
    why: 'Saturated BaSO<sub>4</sub>, Λ<sub>eq</sub> = 400 ohm<sup>−1</sup> cm<sup>2</sup> eq<sup>−1</sup>, <i>κ</i> = 8 × 10<sup>−5</sup> ohm<sup>−1</sup> cm<sup>−1</sup>: <i>N</i> = 2 × 10<sup>−4</sup> eq L<sup>−1</sup>, <i>S</i> = <i>N</i>/2 = 1 × 10<sup>−4</sup> mol L<sup>−1</sup>, <i>K</i><sub>sp</sub> = 1 × 10<sup>−8</sup>.',
    say: null,
  },
  // pp. 94–95
  {
    topic: 6,
    kind: 'remember',
    q: 'Rank H<sup>+</sup>, Ca<sup>2+</sup>, Mg<sup>2+</sup>, K<sup>+</sup>, Na<sup>+</sup>, Li<sup>+</sup> by limiting molar conductivity, and explain the order?',
    a: 'H<sup>+</sup> (349.6) > Ca<sup>2+</sup> (119.0) > Mg<sup>2+</sup> (106.0) > K<sup>+</sup> (73.5) > Na<sup>+</sup> (50.1) > Li<sup>+</sup> (38.7) S cm<sup>2</sup> mol<sup>−1</sup>. H<sup>+</sup> towers through the Grotthuss relay; divalent ions look fast partly because each carries two charges; among the alkali metals the smallest bare ion, Li<sup>+</sup>, is slowest because it drags the largest hydration shell',
    why: 'For a weak electrolyte too, on dilution <i>κ</i> falls while Λ<sub>m</sub> rises: options saying both increase or both decrease are wrong.',
    say: null,
  },

  // ── Additional D · Batteries and Corrosion: the NCERT Numbers the Chapter Skips ──
  // pp. 95–96
  {
    topic: 7,
    kind: 'remember',
    q: 'The battery fact-file: the number or signature of each cell?',
    a: 'Dry (Leclanché): nearly 1.5 V, Mn reduced from +4 to +3. Mercury: about 1.35 V and constant, because Zn(Hg) + HgO → ZnO + Hg involves no ion in solution; hearing aids, watches. Lead storage: 38% sulphuric acid. Ni–Cd: longer life than lead storage, Cd + 2Ni(OH)<sub>3</sub> → CdO + 2Ni(OH)<sub>2</sub> + H<sub>2</sub>O. H<sub>2</sub>–O<sub>2</sub> fuel cell: about 70% efficient against about 40% for thermal plants; its water went into the Apollo astronauts’ drinking supply',
    why: 'Lead storage on discharge: anode Pb + SO<sub>4</sub><sup>2−</sup> → PbSO<sub>4</sub> + 2e<sup>−</sup>; cathode PbO<sub>2</sub> + SO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> + 2e<sup>−</sup> → PbSO<sub>4</sub> + 2H<sub>2</sub>O.',
    say: null,
  },
  // pp. 96–97
  {
    topic: 7,
    kind: 'remember',
    q: 'After Fe → Fe<sup>2+</sup> + 2e<sup>−</sup>, how does the rusting stoichiometry finish, and is corrosion faster in acid or alkali?',
    a: 'The dissolved Fe<sup>2+</sup> is oxidised by air: 2Fe<sup>2+</sup>(aq) + 2H<sub>2</sub>O(l) + ½O<sub>2</sub>(g) → Fe<sub>2</sub>O<sub>3</sub>(s) + 4H<sup>+</sup>(aq), and the Fe<sub>2</sub>O<sub>3</sub> hydrates to rust, Fe<sub>2</sub>O<sub>3</sub>·<i>x</i>H<sub>2</sub>O. Faster in acid: the cathodic step O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → 2H<sub>2</sub>O consumes H<sup>+</sup>',
    why: 'Impurity spots or more-noble contact metals act as cathodes while the iron behaves as the anode.',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 97–98, 100
  {
    topic: 8,
    kind: 'remember',
    q: 'Which parts of Electrochemistry carry the most weight in JEE and NEET?',
    a: 'Cells, electrode potentials and Nernst applications about 38%; conductance and Kohlrausch about 30%; Faraday’s laws and products of electrolysis about 21%; batteries and corrosion about 10%. Nernst items increasingly end in a pH or concentration read-out rather than a bare emf; conductance items wrap the weak-electrolyte <i>α</i> or a <i>K</i><sub>sp</sub> inside the unit-conversion work',
    why: 'As voltage rises, metals plate in order of decreasing <i>E</i>°: from Cu(NO<sub>3</sub>)<sub>2</sub>, AgNO<sub>3</sub> and Mg(NO<sub>3</sub>)<sub>2</sub>, Ag first, then Cu; Mg<sup>2+</sup> never plates, and water is reduced to H<sub>2</sub> instead.',
    say: null,
  },
  // pp. 99–100
  {
    topic: 8,
    kind: 'mistake',
    q: 'Which traps recur in Electrochemistry questions?',
    a: 'Adding <i>E</i>° values when building a half-reaction from two others (combine through Δ<i>G</i>° with electron weighting); using [H<sup>+</sup>] once in Pt | H<sub>2</sub> | H<sup>+</sup> cells (it enters <i>Q</i> squared); the 1000 factor (it holds only with <i>κ</i> in S cm<sup>−1</sup>); thinking cell constant depends on the electrolyte (it is geometry); O<sub>2</sub> at the cathode from aqueous Na<sub>2</sub>SO<sub>4</sub> or Mg(NO<sub>3</sub>)<sub>2</sub> (it is H<sub>2</sub>); emf changing with cell size (it is intensive); <i>Z</i> confused with <i>M</i>/<i>n</i>',
    why: '3 A for 270 min through CuSO<sub>4</sub>, 15.0 g of Cu deposited: <i>Q</i> = 48600 C, theoretical mass 48600 × 63.5/(2 × 96500) = 16.0 g, efficiency 15.0/16.0 = 93.8%.',
    say: null,
  },
];
