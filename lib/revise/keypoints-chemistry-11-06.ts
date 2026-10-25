/**
 * KEY POINTS for Chemistry Class 11, Chapter 6 (Equilibrium).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: the app's topics follow the book's page order, so Topic 01 (book
 * Sub-01) is 0, Topic 02 (Sub-04) is 1, Topic 03 (Sub-05) is 2, Topic 04
 * (Sub-02) is 3 and Topic 05 (Sub-03) is 4; Additional topics A–D are 5–8;
 * Additional topic E, What JEE and NEET Actually Ask (the book's Addendum P),
 * is 9. No point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key Formulas & Definitions and Cheat Sheet Box. Common
 * mistakes: its Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`:
 * the cheat sheet's first two memory aids, word for word, with the book's
 * quotation marks and its label after them. Additional topics: the addenda's
 * methods, worked examples and the "Answers to Practice (Addenda A–D)"
 * (pp. 290–291), each answer with its own addendum (1–3 A, 4–6 B, 7–8 C,
 * 9–10 D). Additional topic E: its distribution and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas and
 * ions upright (H<sub>3</sub>O<sup>+</sup>, CrO<sub>4</sub><sup>2−</sup>); ⇌ for
 * every equilibrium the book prints with a double arrow. Equilibrium
 * constants italic with upright label subscripts (<i>K</i><sub>c</sub>,
 * <i>K</i><sub>p</sub>, <i>K</i><sub>a</sub>, <i>K</i><sub>a1</sub>,
 * <i>K</i><sub>w</sub>, <i>K</i><sub>sp</sub>, <i>K</i><sub>h</sub>,
 * <i>Q</i><sub>c</sub>, <i>Q</i><sub>p</sub>), and the book's reaction labels
 * <i>K</i><sub>P</sub>, <i>K</i><sub>Q</sub>, <i>K</i><sub>R</sub> upright too;
 * pH, pOH, p<i>K</i><sub>a</sub> with an upright p. Δ<i>n</i> as Topic 01
 * prints it, Δ<i>n</i><sub>gas</sub> as Topic 03 prints it. <i>α</i>, <i>h</i>,
 * <i>s</i>, <i>c</i>, <i>P</i>, <i>R</i>, <i>T</i> italic.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Physical & Chemical Equilibrium — The Equilibrium Constants Kc and Kp ──
  // pp. 253, 255–256, 259
  {
    topic: 0,
    kind: 'remember',
    q: '<i>K</i><sub>c</sub>, <i>K</i><sub>p</sub>, the link between them and their units, for <i>a</i>A + <i>b</i>B ⇌ <i>c</i>C + <i>d</i>D?',
    a: '<i>K</i><sub>c</sub> = [C]<sup><i>c</i></sup>[D]<sup><i>d</i></sup>/[A]<sup><i>a</i></sup>[B]<sup><i>b</i></sup>, equilibrium concentrations only, pure solids and liquids omitted. <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub>(<i>RT</i>)<sup>Δ<i>n</i></sup>, Δ<i>n</i> = gaseous product moles − gaseous reactant moles, <i>R</i> = 0.0821 L atm mol<sup>−1</sup> K<sup>−1</sup>. Units: [<i>K</i><sub>c</sub>] = (mol L<sup>−1</sup>)<sup>Δ<i>n</i></sup>, [<i>K</i><sub>p</sub>] = (atm)<sup>Δ<i>n</i></sup>',
    why: 'A 2 L vessel holds 1.0 mol N<sub>2</sub>, 2.0 mol H<sub>2</sub>, 0.80 mol NH<sub>3</sub> at equilibrium: <i>K</i><sub>c</sub> = (0.40)<sup>2</sup>/(0.50)(1.0)<sup>3</sup> = 0.32 mol<sup>−2</sup> L<sup>2</sup> (Δ<i>n</i> = −2).',
    say: null,
  },
  // pp. 256–258, 259
  {
    topic: 0,
    kind: 'remember',
    q: 'The four rules for manipulating <i>K</i>?',
    a: 'Reverse the reaction → 1/<i>K</i>; multiply all coefficients by <i>n</i> → <i>K</i><sup><i>n</i></sup>; divide them by <i>n</i> → <i>K</i><sup>1/<i>n</i></sup>; add two reactions → <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub>',
    why: 'C(s) + CO<sub>2</sub> ⇌ 2CO (<i>K</i><sub>1</sub> = 0.50) plus twice the reverse of COCl<sub>2</sub> ⇌ CO + Cl<sub>2</sub> (<i>K</i><sub>2</sub> = 0.10) gives C(s) + CO<sub>2</sub> + 2Cl<sub>2</sub> ⇌ 2COCl<sub>2</sub>: <i>K</i> = <i>K</i><sub>1</sub>/<i>K</i><sub>2</sub><sup>2</sup> = 0.50/0.01 = 50.',
    say: '“Reverse Inverts, Multiply Powers, Add Multiplies” for the four toolkit rules.',
  },
  // pp. 255–256, 258–259
  {
    topic: 0,
    kind: 'mixup',
    q: '<i>K</i> or <i>Q</i>: how do they differ, and how does comparing them give the direction?',
    a: 'Same algebraic form, but <i>K</i> uses equilibrium concentrations and <i>Q</i> those at any instant. <i>Q</i> < <i>K</i>: too few products, the reaction runs forward; <i>Q</i> > <i>K</i>: too many products, it runs backward; <i>Q</i> = <i>K</i>: at equilibrium',
    why: '2SO<sub>2</sub> + O<sub>2</sub> ⇌ 2SO<sub>3</sub>, <i>K</i><sub>c</sub> = 10, with [SO<sub>2</sub>] = [O<sub>2</sub>] = 0.10 M and [SO<sub>3</sub>] = 0.20 M: <i>Q</i><sub>c</sub> = 0.04/0.001 = 40 > 10, so it runs backward.',
    say: '“Q low, go; Q high, bye” for direction.',
  },
  // pp. 256, 258–259
  {
    topic: 0,
    kind: 'mistake',
    q: 'Do pressure, concentration, an inert gas or a catalyst change the value of <i>K</i>?',
    a: 'No: only temperature changes <i>K</i>. The others can shift the position of equilibrium but leave the constant alone; a catalyst only changes how fast equilibrium is reached',
    why: 'Pure solids and liquids stay out of both <i>K</i> and Δ<i>n</i>: CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g) has <i>K</i><sub>p</sub> = the pressure of CO<sub>2</sub> only; C(s) + CO<sub>2</sub>(g) ⇌ 2CO(g) has Δ<i>n</i> = 2 − 1 = +1.',
    say: null,
  },
  // pp. 257, 259
  {
    topic: 0,
    kind: 'shortcut',
    q: 'At 717 K, <i>K</i><sub>c</sub> = 49 for H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). <i>K</i><sub>p</sub>? The fast way?',
    a: 'Compute Δ<i>n</i> before any arithmetic: 2 − 2 = 0, so (<i>RT</i>)<sup>0</sup> = 1 and <i>K</i><sub>p</sub> = <i>K</i><sub>c</sub> = 49. For a single reactant → two gaseous products, recall <i>K</i><sub>p</sub> = <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>) instead of rebuilding the ICE table',
    why: 'PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub> with <i>α</i> = 0.50 at <i>P</i> = 1.5 atm: <i>K</i><sub>p</sub> = (0.25)(1.5)/0.75 = 0.50 atm.',
    say: null,
  },

  // ── Topic 02 · Equilibrium Constant, Reaction Quotient & Gibbs Energy ──
  // pp. 260–262, 264
  {
    topic: 1,
    kind: 'remember',
    q: 'How does Δ<i>G</i>° fix <i>K</i>?',
    a: 'Δ<i>G</i> = Δ<i>G</i>° + <i>RT</i> ln <i>Q</i>; at equilibrium Δ<i>G</i> = 0 and <i>Q</i> = <i>K</i>, so Δ<i>G</i>° = −<i>RT</i> ln <i>K</i> = −2.303 <i>RT</i> log <i>K</i> and <i>K</i> = <i>e</i><sup>−Δ<i>G</i>°/<i>RT</i></sup>. Δ<i>G</i>° < 0 ⇒ <i>K</i> > 1 (products favoured); = 0 ⇒ <i>K</i> = 1; > 0 ⇒ <i>K</i> < 1 (reactants favoured)',
    why: 'Δ<i>G</i>° = −11.4 kJ mol<sup>−1</sup> at 298 K: ln <i>K</i> = 11400/(8.314 × 298) = 11400/2477.6 = 4.60, <i>K</i> = <i>e</i><sup>4.60</sup> ≈ 100.',
    say: '“negative G, big K” (spontaneous → products).',
  },
  // pp. 261–262, 264
  {
    topic: 1,
    kind: 'remember',
    q: 'How does <i>K</i> change with temperature (van’t Hoff)?',
    a: 'ln(<i>K</i><sub>2</sub>/<i>K</i><sub>1</sub>) = −(Δ<i>H</i>°/<i>R</i>)(1/<i>T</i><sub>2</sub> − 1/<i>T</i><sub>1</sub>), from ln <i>K</i> = −Δ<i>H</i>°/<i>RT</i> + Δ<i>S</i>°/<i>R</i>. <i>K</i> rising with <i>T</i> means endothermic; <i>K</i> falling with <i>T</i>, exothermic',
    why: '<i>K</i> = 1.0 × 10<sup>−4</sup> at 300 K and 1.0 × 10<sup>−3</sup> at 320 K: 1/300 − 1/320 = 2.08 × 10<sup>−4</sup> K<sup>−1</sup>, Δ<i>H</i>° = 8.314 × 2.303/(2.08 × 10<sup>−4</sup>) ≈ +92 kJ mol<sup>−1</sup>, endothermic.',
    say: '“hotter helps the endo” (<i>K</i> up with <i>T</i> ⟹ endothermic).',
  },
  // pp. 260–261, 264
  {
    topic: 1,
    kind: 'mixup',
    q: 'Δ<i>G</i> or Δ<i>G</i>°: which one fixes <i>K</i>, and which one the direction right now?',
    a: 'Δ<i>G</i>° is a fixed number for the reaction at a given temperature, everything in its standard state: it locates the valley floor and fixes <i>K</i>. Δ<i>G</i> depends on <i>Q</i>, the current composition: Δ<i>G</i> = <i>RT</i> ln(<i>Q</i>/<i>K</i>), negative (forward) when <i>Q</i> < <i>K</i>. Only Δ<i>G</i>° goes into −<i>RT</i> ln <i>K</i>',
    why: 'The <i>Q</i>-versus-<i>K</i> test and the sign of Δ<i>G</i> are the same statement in two languages.',
    say: null,
  },
  // pp. 262, 264
  {
    topic: 1,
    kind: 'mistake',
    q: '<i>K</i> = 10 at 300 K. Is Δ<i>G</i>° = −8.314 × 300 × log 10 = −2.49 kJ mol<sup>−1</sup>?',
    a: 'No: that mixes ln and log. Use −<i>RT</i> ln <i>K</i> or −2.303 <i>RT</i> log <i>K</i>, never −<i>RT</i> log <i>K</i>: Δ<i>G</i>° = −2.303 × 8.314 × 300 × 1 = −5744 J mol<sup>−1</sup> ≈ −5.74 kJ mol<sup>−1</sup>',
    why: 'Also convert Δ<i>G</i>° to joules before dividing by <i>R</i> = 8.314 J mol<sup>−1</sup> K<sup>−1</sup>, or ln <i>K</i> comes out 1000 times too small; and a negative <i>K</i> always means an algebra or sign error.',
    say: null,
  },
  // pp. 262–264
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Rank by increasing <i>K</i>: P (Δ<i>G</i>° = +20 kJ mol<sup>−1</sup>), Q (Δ<i>G</i>° = 0), R (Δ<i>G</i>° = −20 kJ mol<sup>−1</sup>). The fast way?',
    a: 'Read the sign of Δ<i>G</i>° first and place <i>K</i> relative to 1 before any arithmetic: more negative Δ<i>G</i>° means larger <i>K</i>, so P < Q < R, with <i>K</i><sub>P</sub> < 1, <i>K</i><sub>Q</sub> = 1, <i>K</i><sub>R</sub> > 1',
    why: 'For tidy numbers use the base-10 form: Δ<i>G</i>° = −19.15 kJ mol<sup>−1</sup> at 500 K with 2.303<i>R</i> = 19.15 gives log <i>K</i> = 19150/(19.15 × 500) = 2.0, so <i>K</i> = 100.',
    say: null,
  },

  // ── Topic 03 · Le Chatelier’s Principle & Factors Affecting Equilibria ──
  // pp. 265–267, 269
  {
    topic: 2,
    kind: 'remember',
    q: 'Le Chatelier’s principle, and which disturbances change <i>K</i>?',
    a: 'A system at equilibrium, disturbed by a change in concentration, pressure or temperature, shifts in the direction that partially undoes the change. Adding a reactant (or removing a product) shifts it forward; raising pressure shifts it toward fewer gas moles (no effect if Δ<i>n</i><sub>gas</sub> = 0). Only temperature changes <i>K</i>: heating raises <i>K</i> for an endothermic reaction and lowers it for an exothermic one',
    why: 'N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, Δ<i>H</i> < 0: raising pressure (4 → 2 mol) and adding N<sub>2</sub> shift it forward; raising <i>T</i> shifts it backward and lowers <i>K</i>.',
    say: '“system fights the change”',
  },
  // pp. 267, 269
  {
    topic: 2,
    kind: 'remember',
    q: 'The conditions of the Haber and Contact processes, and why the temperature is a compromise?',
    a: 'Haber, N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), Δ<i>H</i> = −92.4 kJ mol<sup>−1</sup>: ∼200 atm, ∼700 K, finely divided iron with K<sub>2</sub>O/Al<sub>2</sub>O<sub>3</sub> promoters, NH<sub>3</sub> removed by liquefaction. Contact, 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g), Δ<i>H</i> = −197 kJ mol<sup>−1</sup>: ∼720 K, V<sub>2</sub>O<sub>5</sub>, excess air, 1–2 atm already enough',
    why: 'Both are exothermic with fewer product gas moles, so high pressure and low temperature favour the yield; but low temperature makes the reaction unworkably slow, so a moderate one is chosen.',
    say: '“fewer moles win under pressure”',
  },
  // pp. 266–267, 269
  {
    topic: 2,
    kind: 'mixup',
    q: 'Argon is added to PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g) (a) at constant volume, (b) at constant pressure. The shift?',
    a: '(a) No shift: the total pressure rises but each reacting gas’s partial pressure and concentration are unchanged, so <i>Q</i> is unchanged. (b) Forward, toward more gas moles: the volume must expand, diluting the reacting gases, exactly as a pressure decrease would',
    why: 'Inert gas at constant <i>V</i> = nothing; at constant <i>P</i> = behaves like dilution. Always check which one is held fixed.',
    say: null,
  },
  // pp. 265, 267–269
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does a catalyst raise the equilibrium yield, or <i>K</i>?',
    a: 'Neither: it lowers the activation energy of the forward and reverse reactions equally, so equilibrium arrives faster but its position and constant are unchanged. A catalyst cannot improve the yield, only the speed of reaching it',
    why: 'Two more slips: applying a pressure shift when Δ<i>n</i><sub>gas</sub> = 0 (H<sub>2</sub> + I<sub>2</sub> ⇌ 2HI is pressure-insensitive), and saying <i>K</i> is unchanged by temperature.',
    say: null,
  },
  // pp. 267–269
  {
    topic: 2,
    kind: 'shortcut',
    q: 'For 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g) (Δ<i>H</i> < 0), which raise the yield: high pressure, high temperature, a catalyst, excess O<sub>2</sub>? The fast way?',
    a: 'Write heat as a product (exothermic) and treat temperature like a concentration change; glance at Δ<i>n</i><sub>gas</sub> for pressure; separate the yield levers from the rate-only catalyst. Only high pressure (3 → 2) and excess O<sub>2</sub> raise the yield; high temperature lowers it, and the catalyst only speeds things up',
    why: 'Quantitatively, for PCl<sub>5</sub> dissociation <i>α</i> = √(<i>K</i><sub>p</sub>/(<i>P</i> + <i>K</i><sub>p</sub>)) falls as <i>P</i> rises, as Le Chatelier predicts.',
    say: null,
  },

  // ── Topic 04 · Ionic Equilibrium — Acid–Base Concepts, pH, Dissociation & the Common-Ion Effect ──
  // pp. 270, 277
  {
    topic: 3,
    kind: 'remember',
    q: 'The three definitions of an acid and a base, from narrowest to widest?',
    a: 'Arrhenius: an acid releases H<sup>+</sup> in water, a base OH<sup>−</sup>. Brønsted–Lowry: an acid is a proton donor, a base a proton acceptor; conjugate pairs differ by exactly one H<sup>+</sup>. Lewis: an acid is an electron-pair acceptor, a base an electron-pair donor, which is why BF<sub>3</sub>, with no proton at all, is an acid',
    why: 'HCl + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + Cl<sup>−</sup>: acid, base, conjugate acid, conjugate base. Water is a base here and an acid with ammonia: amphoteric.',
    say: '“Arrhenius → Brønsted → Lewis” (narrow to wide).',
  },
  // pp. 271–273, 275, 277
  {
    topic: 3,
    kind: 'remember',
    q: 'Degree of ionisation, [H<sup>+</sup>] and pH of a weak acid (Ostwald’s dilution law)?',
    a: '<i>K</i><sub>a</sub> = <i>cα</i><sup>2</sup>/(1 − <i>α</i>) ≈ <i>cα</i><sup>2</sup>, so <i>α</i> = √(<i>K</i><sub>a</sub>/<i>c</i>) and [H<sup>+</sup>] = <i>cα</i> = √(<i>K</i><sub>a</sub><i>c</i>), valid while <i>α</i> < 5%; <i>α</i> ∝ 1/√<i>c</i>, so dilution raises it. 0.10 M acetic acid (<i>K</i><sub>a</sub> = 1.8 × 10<sup>−5</sup>): <i>α</i> = 1.34 × 10<sup>−2</sup>, [H<sup>+</sup>] = 1.34 × 10<sup>−3</sup> M, pH = 2.87',
    why: 'Make it also 0.10 M in acetate and [H<sup>+</sup>] = <i>K</i><sub>a</sub> = 1.8 × 10<sup>−5</sup> M, pH = p<i>K</i><sub>a</sub> = 4.74: the common ion suppresses ionisation about 74-fold.',
    say: '“Add a proton for the Acid” (conjugate acid = +H<sup>+</sup>).',
  },
  // pp. 271–272, 275–277
  {
    topic: 3,
    kind: 'mixup',
    q: 'The conjugate base of H<sub>2</sub>PO<sub>4</sub><sup>−</sup>, and how are a conjugate pair’s constants linked?',
    a: 'HPO<sub>4</sub><sup>2−</sup>: a conjugate base has one H<sup>+</sup> removed; H<sub>3</sub>PO<sub>4</sub> (one added) is its conjugate acid, and PO<sub>4</sub><sup>3−</sup> removes two. For the pair, <i>K</i><sub>a</sub> × <i>K</i><sub>b</sub> = <i>K</i><sub>w</sub> and p<i>K</i><sub>a</sub> + p<i>K</i><sub>b</sub> = 14 at 298 K: divide, never multiply, when converting',
    why: '<i>K</i><sub>a</sub>(HCN) = 4.9 × 10<sup>−10</sup>: <i>K</i><sub>b</sub>(CN<sup>−</sup>) = 10<sup>−14</sup>/(4.9 × 10<sup>−10</sup>) = 2.0 × 10<sup>−5</sup>. The stronger the acid, the weaker its conjugate base.',
    say: null,
  },
  // pp. 274, 276
  {
    topic: 3,
    kind: 'mistake',
    q: 'The pH of 1.0 × 10<sup>−8</sup> M HCl: is it 8?',
    a: 'No: an acid cannot give a basic solution. At this dilution water’s own H<sup>+</sup> (∼10<sup>−7</sup> M) dominates: [H<sup>+</sup>]<sup>2</sup> − (10<sup>−8</sup>)[H<sup>+</sup>] − 10<sup>−14</sup> = 0 gives [H<sup>+</sup>] = 1.05 × 10<sup>−7</sup> M, pH ≈ 6.98, just under 7. Below about 10<sup>−6</sup> M, always include water’s contribution',
    why: 'And keep the stoichiometric factor of a strong polyprotic acid: 0.005 M H<sub>2</sub>SO<sub>4</sub> gives [H<sup>+</sup>] = 0.010 M, pH 2.0.',
    say: null,
  },
  // pp. 275–276
  {
    topic: 3,
    kind: 'shortcut',
    q: '[H<sup>+</sup>] = 4.0 × 10<sup>−5</sup> M. pH and pOH? The fast way?',
    a: 'For [H<sup>+</sup>] = <i>m</i> × 10<sup>−<i>n</i></sup>, pH = <i>n</i> − log <i>m</i>: 5 − 0.60 = 4.40, so pOH = 14 − 4.40 = 9.60. Likewise 2 × 10<sup>−3</sup> M gives 3 − 0.30 = 2.70',
    why: 'Sanity-check every answer: acid ⇒ pH < 7, base ⇒ pH > 7, and dilution nudges pH toward 7 but never across it. Lean on p<i>K</i><sub>a</sub> + p<i>K</i><sub>b</sub> = 14 to skip a full conversion.',
    say: null,
  },

  // ── Topic 05 · Buffers, Solubility Product (Ksp) & Salt Hydrolysis ──
  // pp. 278–279, 281–283
  {
    topic: 4,
    kind: 'remember',
    q: 'Is the solution of each kind of salt acidic, basic or neutral, and what is its pH?',
    a: 'The solution takes the side of the stronger parent. Strong acid + strong base: neutral, pH 7. Weak acid + strong base: basic, <i>K</i><sub>h</sub> = <i>K</i><sub>w</sub>/<i>K</i><sub>a</sub>, pH = 7 + ½(p<i>K</i><sub>a</sub> + log <i>c</i>). Strong acid + weak base: acidic, pH = 7 − ½(p<i>K</i><sub>b</sub> + log <i>c</i>). Weak acid + weak base: depends, pH = 7 + ½(p<i>K</i><sub>a</sub> − p<i>K</i><sub>b</sub>), independent of <i>c</i>',
    why: '0.10 M sodium acetate: <i>K</i><sub>h</sub> = 10<sup>−14</sup>/(1.8 × 10<sup>−5</sup>) = 5.6 × 10<sup>−10</sup>, [OH<sup>−</sup>] = √(<i>K</i><sub>h</sub><i>c</i>) = 7.5 × 10<sup>−6</sup> M, pOH 5.13, pH 8.87; check: 7 + ½(4.74 − 1) = 8.87.',
    say: '“salt sides with the strong parent” for hydrolysis nature.',
  },
  // pp. 279–281, 283
  {
    topic: 4,
    kind: 'remember',
    q: '<i>K</i><sub>sp</sub> in terms of the molar solubility <i>s</i>, and the precipitation criterion?',
    a: 'AB (AgCl, BaSO<sub>4</sub>): <i>K</i><sub>sp</sub> = <i>s</i><sup>2</sup>; AB<sub>2</sub> or A<sub>2</sub>B (CaF<sub>2</sub>, Ag<sub>2</sub>CrO<sub>4</sub>): 4<i>s</i><sup>3</sup>; AB<sub>3</sub> or A<sub>3</sub>B (Fe(OH)<sub>3</sub>): 27<i>s</i><sup>4</sup>. The coefficient enters twice, as a multiplier (2<i>s</i>) and as an exponent. Ionic product <i>Q</i> > <i>K</i><sub>sp</sub>: precipitate; = <i>K</i><sub>sp</sub>: just saturated; < <i>K</i><sub>sp</sub>: unsaturated',
    why: 'Ag<sub>2</sub>CrO<sub>4</sub>, <i>K</i><sub>sp</sub> = 1.1 × 10<sup>−12</sup>: <i>s</i> = (<i>K</i><sub>sp</sub>/4)<sup>1/3</sup> = (2.75 × 10<sup>−13</sup>)<sup>1/3</sup> ≈ 6.5 × 10<sup>−5</sup> M, not √<i>K</i><sub>sp</sub> ≈ 1.0 × 10<sup>−6</sup> M.',
    say: '“read the subscripts before the root” for <i>K</i><sub>sp</sub>.',
  },
  // p. 280
  {
    topic: 4,
    kind: 'mixup',
    q: 'Ag<sup>+</sup> is added drop by drop to 0.010 M Cl<sup>−</sup> and 0.010 M CrO<sub>4</sub><sup>2−</sup>. Which precipitates first, and what decides it?',
    a: 'The concentration of added ion each salt needs, not the <i>K</i><sub>sp</sub> values. AgCl (<i>K</i><sub>sp</sub> = 1.8 × 10<sup>−10</sup>) needs [Ag<sup>+</sup>] = 1.8 × 10<sup>−8</sup> M; Ag<sub>2</sub>CrO<sub>4</sub> (1.1 × 10<sup>−12</sup>) needs √(<i>K</i><sub>sp</sub>/[CrO<sub>4</sub><sup>2−</sup>]) ≈ 1.0 × 10<sup>−5</sup> M. AgCl precipitates first',
    why: 'The chromate stays in solution until almost all the chloride is gone, which is why red Ag<sub>2</sub>CrO<sub>4</sub> signals the end of chloride in a Mohr titration.',
    say: null,
  },
  // pp. 282–283
  {
    topic: 4,
    kind: 'mistake',
    q: 'Equal volumes of 0.020 M BaCl<sub>2</sub> and 0.020 M Na<sub>2</sub>SO<sub>4</sub> are mixed. Is <i>Q</i> = (0.020)<sup>2</sup>?',
    a: 'No: when equal volumes are combined, every concentration halves before you compute <i>Q</i>. [Ba<sup>2+</sup>] = [SO<sub>4</sub><sup>2−</sup>] = 0.010 M, <i>Q</i> = 1.0 × 10<sup>−4</sup> ≫ <i>K</i><sub>sp</sub> = 1.1 × 10<sup>−10</sup>: BaSO<sub>4</sub> precipitates',
    why: 'Two more slips: assuming every salt solution is neutral (only strong-acid + strong-base salts are), and plugging absolute amounts into Henderson’s equation when only the ratio [salt]/[acid] matters.',
    say: null,
  },
  // pp. 279, 281, 283
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A buffer is 0.10 M NH<sub>3</sub> and 0.10 M NH<sub>4</sub>Cl (<i>K</i><sub>b</sub> = 1.8 × 10<sup>−5</sup>). Its pH? The fast way?',
    a: 'Equal amounts: pOH = p<i>K</i><sub>b</sub> + log 1 = 4.74, so pH = 9.26. Remember pH = p<i>K</i><sub>a</sub> at half-equivalence, where buffer capacity is greatest, and that dilution barely moves buffer pH. Range ≈ p<i>K</i><sub>a</sub> ± 1',
    why: 'Add 0.01 mol HCl to 1 L of it: pOH = 4.74 + log(0.11/0.09) = 4.83, pH 9.17. The same acid in pure water would swing the pH from 7 to 2.',
    say: null,
  },

  // ── Additional A · The Polyprotic Toolkit ──
  // pp. 284–285, 290–291
  {
    topic: 5,
    kind: 'remember',
    q: 'The pH of an amphiprotic salt such as NaHCO<sub>3</sub>, and why not for H<sub>2</sub>CO<sub>3</sub> itself?',
    a: 'pH = ½(p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>), to this approximation independent of the salt’s concentration: NaHCO<sub>3</sub> ½(6.37 + 10.25) = 8.31, mildly alkaline; NaH<sub>2</sub>PO<sub>4</sub> ½(2.12 + 7.21) = 4.7, acidic; Na<sub>2</sub>HPO<sub>4</sub> ½(7.21 + 12.38) ≈ 9.8, alkaline. The formula is for the salt; a polyprotic acid’s own pH comes from <i>K</i><sub>a1</sub> alone',
    why: 'Steps fall off (H<sub>3</sub>PO<sub>4</sub>: 7.5 × 10<sup>−3</sup>, 6.2 × 10<sup>−8</sup>, 4.2 × 10<sup>−13</sup>). For 0.1 M H<sub>3</sub>PO<sub>4</sub> about a quarter ionises, so solve the quadratic: <i>x</i> = 0.0239 M, pH 1.62, not the square-root formula’s 1.56.',
    say: null,
  },
  // pp. 284–285, 290
  {
    topic: 5,
    kind: 'remember',
    q: '0.1 M H<sub>2</sub>S (<i>K</i><sub>a1</sub> = 9.1 × 10<sup>−8</sup>, <i>K</i><sub>a2</sub> = 1.2 × 10<sup>−13</sup>): [S<sup>2−</sup>] in water, and in 0.1 M HCl?',
    a: 'In water [H<sup>+</sup>] ≈ √(<i>K</i><sub>a1</sub><i>c</i>) = 9.5 × 10<sup>−5</sup> M and [S<sup>2−</sup>] ≈ <i>K</i><sub>a2</sub> = 1.2 × 10<sup>−13</sup> M. With 0.1 M HCl use the summed equilibrium (<i>K</i> = <i>K</i><sub>a1</sub><i>K</i><sub>a2</sub>): [S<sup>2−</sup>] = <i>K</i><sub>a1</sub><i>K</i><sub>a2</sub>[H<sub>2</sub>S]/[H<sup>+</sup>]<sup>2</sup> ≈ 1.1 × 10<sup>−19</sup> M, a millionfold drop',
    why: '[S<sup>2−</sup>] scales as 1/[H<sup>+</sup>]<sup>2</sup> (at pH 2, 1.1 × 10<sup>−17</sup> M): why group II sulfides precipitate in acid and group IV need an alkaline medium.',
    say: null,
  },

  // ── Additional B · Titration Thinking ──
  // pp. 286–287, 291
  {
    topic: 6,
    kind: 'remember',
    q: '0.1 M acid titrated with 0.1 M NaOH: the landmarks for HCl and for acetic acid (<i>K</i><sub>a</sub> = 1.74 × 10<sup>−5</sup>)?',
    a: 'HCl: starts at pH 1.0, equivalence at 7. Acetic acid: starts at ½(4.76 + 1) = 2.88; half-equivalence pH = p<i>K</i><sub>a</sub> = 4.76 (a buffer zone, gentle slope); equivalence 7 + ½(4.76 − 1.30) = 8.7, above 7 because acetate hydrolyses. Beyond equivalence both are set by excess OH<sup>−</sup>',
    why: 'Indicator: its range must sit on the vertical jump, so phenolphthalein (8–10) for weak acid–strong base, methyl orange for strong acid–weak base, either for strong–strong. A weak base mirrors it: starts below 13, equivalence below 7.',
    say: null,
  },
  // pp. 287–288, 291
  {
    topic: 6,
    kind: 'remember',
    q: '10 mL of 0.1 M HCl is added to 10 mL of 0.1 M NH<sub>3</sub>. What results, and its pH?',
    a: 'Stoichiometry first, equilibrium second: 1 mmol H<sup>+</sup> against 1 mmol NH<sub>3</sub> gives exactly 1 mmol NH<sub>4</sub>Cl in 20 mL, <i>c</i> = 0.05 M, a salt of weak base and strong acid: pH = 7 − ½(4.74 − 1.30) = 5.28. With NaOH it would be NaCl, pH 7; with CH<sub>3</sub>COOH, sodium acetate, above 7',
    why: 'Excess strong species: divide by the total volume (2 mmol OH<sup>−</sup> against 1 mmol H<sup>+</sup> in 30 mL leaves 0.033 M OH<sup>−</sup>, pH 12.52). 1 mmol NaOH with 2 mmol CH<sub>3</sub>COOH half-neutralises it: a buffer, pH = p<i>K</i><sub>a</sub> = 4.76.',
    say: null,
  },

  // ── Additional C · Precipitation Decisions ──
  // pp. 288, 291
  {
    topic: 7,
    kind: 'remember',
    q: 'Equal volumes of 2.0 × 10<sup>−4</sup> M AgNO<sub>3</sub> and 2.0 × 10<sup>−4</sup> M NaCl are mixed. Does AgCl (<i>K</i><sub>sp</sub> = 1.8 × 10<sup>−10</sup>) precipitate?',
    a: 'Halve first: [Ag<sup>+</sup>] = [Cl<sup>−</sup>] = 1.0 × 10<sup>−4</sup> M, <i>Q</i><sub>sp</sub> = 1.0 × 10<sup>−8</sup> > 1.8 × 10<sup>−10</sup>: yes. From 2.0 × 10<sup>−5</sup> M stocks, <i>Q</i><sub>sp</sub> = 1.0 × 10<sup>−10</sup> < <i>K</i><sub>sp</sub>: nothing forms, though forgetting to halve gives 4 × 10<sup>−10</sup> and a precipitate that never appears',
    why: 'BaSO<sub>4</sub> from 2 × 10<sup>−5</sup> M stocks: 1 × 10<sup>−5</sup> M each, <i>Q</i><sub>sp</sub> = 1 × 10<sup>−10</sup> < 1.1 × 10<sup>−10</sup>, barely no precipitate.',
    say: null,
  },
  // pp. 289, 291
  {
    topic: 7,
    kind: 'remember',
    q: 'Ag<sub>2</sub>CrO<sub>4</sub> has the smaller <i>K</i><sub>sp</sub> (1.1 × 10<sup>−12</sup> against AgCl’s 1.8 × 10<sup>−10</sup>). Is it the less soluble, and does it precipitate first from 0.1 M Cl<sup>−</sup> and CrO<sub>4</sub><sup>2−</sup>?',
    a: 'No on both counts: compare <i>s</i> or the required concentration, never raw <i>K</i><sub>sp</sub> across salt types. <i>s</i>(AgCl) = √(1.8 × 10<sup>−10</sup>) = 1.3 × 10<sup>−5</sup>, <i>s</i>(Ag<sub>2</sub>CrO<sub>4</sub>) = (1.1 × 10<sup>−12</sup>/4)<sup>1/3</sup> = 6.5 × 10<sup>−5</sup> M. AgCl needs [Ag<sup>+</sup>] = 1.8 × 10<sup>−9</sup> M, Ag<sub>2</sub>CrO<sub>4</sub> 3.3 × 10<sup>−6</sup> M: AgCl first, by three orders of magnitude',
    why: 'Ca(OH)<sub>2</sub> (<i>K</i><sub>sp</sub> = 5.5 × 10<sup>−6</sup>): <i>s</i> = (5.5 × 10<sup>−6</sup>/4)<sup>1/3</sup> = 1.1 × 10<sup>−2</sup> M; AgBr (5.0 × 10<sup>−13</sup>): <i>s</i> = 7.1 × 10<sup>−7</sup> M.',
    say: null,
  },

  // ── Additional D · Le Chatelier, Quantified ──
  // pp. 289–291
  {
    topic: 8,
    kind: 'remember',
    q: 'PCl<sub>5</sub> ⇌ PCl<sub>3</sub> + Cl<sub>2</sub> at equilibrium (<i>K</i><sub>p</sub> = 0.50 atm, each partial pressure 0.50 atm). Inert gas is added at constant total pressure until the volume doubles. Which way does it shift?',
    a: 'Every reacting partial pressure halves to 0.25 atm, so <i>Q</i><sub>p</sub> = (0.25)(0.25)/0.25 = 0.25 atm < <i>K</i><sub>p</sub> = 0.50 atm: forward, toward more gas moles. At constant volume no partial pressure changes: no shift',
    why: 'N<sub>2</sub>O<sub>4</sub> ⇌ 2NO<sub>2</sub> at constant pressure: dilution lowers both partial pressures in the same ratio, and the squared numerator of <i>Q</i><sub>p</sub> falls faster, so <i>Q</i><sub>p</sub> < <i>K</i><sub>p</sub>: toward NO<sub>2</sub>.',
    say: null,
  },
  // pp. 290–291
  {
    topic: 8,
    kind: 'remember',
    q: 'How does the degree of dissociation of PCl<sub>5</sub> (<i>K</i><sub>p</sub> = 0.50 atm) depend on the total pressure?',
    a: 'From <i>K</i><sub>p</sub> = <i>α</i><sup>2</sup><i>P</i>/(1 − <i>α</i><sup>2</sup>): <i>α</i> = √(<i>K</i><sub>p</sub>/(<i>K</i><sub>p</sub> + <i>P</i>)), falling as <i>P</i> rises. <i>P</i> = 1 atm: √(0.5/1.5) = 0.58; 2 atm: √(0.5/2.5) = 0.45; 4 atm: √(0.5/4.5) = 0.33. Compression suppresses dissociation',
    why: 'For combined disturbances ask separately: does <i>K</i> change (only with temperature)? Which way does <i>Q</i> move? The catalyst enters neither ledger.',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 291–292
  {
    topic: 9,
    kind: 'remember',
    q: 'Where does the weight of this chapter’s exam questions fall?',
    a: 'pH of mixed solutions ~20%; <i>K</i><sub>sp</sub>, solubility and precipitation ~20%; <i>K</i><sub>c</sub>/<i>K</i><sub>p</sub>, <i>Q</i> vs <i>K</i>, combined equilibria ~15%; salt hydrolysis and qualitative analysis ~13%; buffers ~12%; Le Chatelier ~12%; titration curves ~8%. The centre of gravity is ionic: roughly two-thirds sit on pH, buffers, <i>K</i><sub>sp</sub> and hydrolysis',
    why: 'Many items are now numerical-answer, JEE Main’s newer format, which punishes approximate methods that MCQs used to forgive.',
    say: null,
  },
  // pp. 292–293
  {
    topic: 9,
    kind: 'mistake',
    q: 'Is pH 7 neutral at every temperature?',
    a: 'No: neutral means [H<sup>+</sup>] = [OH<sup>−</sup>]. The dissociation of water is endothermic, so heating raises <i>K</i><sub>w</sub> and neutral water at high <i>T</i> has pH < 7, yet stays neutral',
    why: 'More traps: not every equivalence point is 7 (weak acid–strong base lands above, weak base–strong acid below); <i>Q</i> > <i>K</i> drives the reaction backward; ½(p<i>K</i><sub>a1</sub> + p<i>K</i><sub>a2</sub>) is for the amphiprotic salt, not H<sub>2</sub>CO<sub>3</sub> itself.',
    say: null,
  },
];
