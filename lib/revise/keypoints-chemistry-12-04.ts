/**
 * KEY POINTS for Chemistry Class 12, Chapter 4 (The d- and f-Block Elements).
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
 * gloss where it has one). Topics 01, 03 and 04 print one memory aid each, so
 * each has one line. Topic 02's cheat sheet prints none, so its two lines are
 * the two mnemonics of its Pro-Tip.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic E: its distribution, archetypes and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Orbital labels,
 * configurations and species upright: 3d<sup>5</sup>, [Ar]3d<sup>5</sup>4s<sup>1</sup>, f<sup>7</sup>, M<sup>2+</sup>,
 * Ln<sup>3+</sup>; <i>n</i> italic where it is a variable: (<i>n</i> − 1)d, <i>n</i>s. <i>E</i>° with the
 * couple glued: <i>E</i>°(Mn<sup>3+</sup>/Mn<sup>2+</sup>). Δ<sub>a</sub><i>H</i>, Δ<sub>i</sub><i>H</i><sub>1</sub>, Δ<sub>hyd</sub><i>H</i>: <i>H</i> italic, labels
 * upright. μ upright: μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM, μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)) BM. n-factor upright
 * as a word, <i>n</i> = 6 italic as a value. A table's values carry the unit once, in front.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · d-Block Properties & Trends ──
  // pp. 148–149, 155–156
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a transition element, what is its general configuration, and what are the two 3d anomalies?',
    a: 'One with an incomplete d-subshell in its neutral atom or in one of its common ions: (<i>n</i> − 1)d<sup>1–10</sup> <i>n</i>s<sup>0,1,2</sup>. Cr = [Ar]3d<sup>5</sup>4s<sup>1</sup> and Cu = [Ar]3d<sup>10</sup>4s<sup>1</sup>, from the extra stability of half-filled and fully filled subshells. Zn, Cd and Hg are not true transition metals: 3d<sup>10</sup> (or 4d<sup>10</sup>, 5d<sup>10</sup>) in the atom and in their usual +2 ions',
    why: 'Cu passes because its common ion Cu<sup>2+</sup> is d<sup>9</sup>; Zn fails because Zn and Zn<sup>2+</sup> are both d<sup>10</sup>.',
    say: 'VOCCI for the superpowers: Variable OS, Optical colour, Catalysis, Complexes, Interstitial/alloys.',
  },
  // pp. 149–150, 153
  {
    topic: 0,
    kind: 'remember',
    q: 'The spin-only magnetic moment: its formula, whose electrons you count, and the ladder of values?',
    a: 'μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM, with <i>n</i> the unpaired electrons of the ion, not the atom. <i>n</i> = 1, 2, 3, 4, 5 gives 1.73, 2.83, 3.87, 4.90, 5.92 BM. Fill the five d-orbitals by Hund’s rule, maximising unpaired spins',
    why: '<i>Z</i> = 23 as M<sup>3+</sup>: V<sup>3+</sup> = [Ar]3d<sup>2</sup>, <i>n</i> = 2, √8 = 2.83 BM. Backwards: 4.90 BM for a 3d M<sup>2+</sup> ion gives <i>n</i> = 4 and 3d<sup>6</sup> (taking <i>Z</i> > 24, since Cr<sup>2+</sup> also has four), so Fe<sup>2+</sup>.',
    say: null,
  },
  // pp. 149, 155–156
  {
    topic: 0,
    kind: 'mixup',
    q: 'Down a group, do heavier members favour higher or lower oxidation states, and is the d-block like the p-block?',
    a: 'Higher, and unlike the p-block: heavier d-block members (4d, 5d) favour higher oxidation states, so Mo(VI) and W(VI) are more stable than Cr(VI). That is the opposite of the p-block’s inert-pair behaviour',
    why: 'Across the 3d series the highest state equals the group number up to manganese: Sc +3, Ti +4, V +5, Cr +6, Mn +7. Beyond Mn it falls off sharply.',
    say: null,
  },
  // pp. 150, 154–155
  {
    topic: 0,
    kind: 'mistake',
    q: 'Fe = [Ar]3d<sup>6</sup>4s<sup>2</sup>. Is Fe<sup>2+</sup> 3d<sup>4</sup>4s<sup>2</sup>?',
    a: 'No: strip the <i>n</i>s electrons first, then (<i>n</i> − 1)d, so Fe<sup>2+</sup> = [Ar]3d<sup>6</sup>. Once the 3d and 4s levels are occupied the 3d orbitals drop below 4s in energy, so the 4s electrons leave first. Getting this wrong corrupts every magnetic-moment and colour answer',
    why: 'Mn<sup>2+</sup> = [Ar]3d<sup>5</sup>, five unpaired, √35 = 5.92 BM; taking d-electrons first gives 3d<sup>3</sup>4s<sup>2</sup>, <i>n</i> = 3 and the wrong 3.87 BM.',
    say: null,
  },
  // pp. 153–155, 158
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Which of the hydrated ions Sc<sup>3+</sup>, Ti<sup>4+</sup>, Cu<sup>2+</sup>, Zn<sup>2+</sup> is coloured? The fast way?',
    a: 'Compute nothing: tag each as d<sup>0</sup>, d<sup>10</sup> or in between, and only the partly filled ion can have a d–d transition. Sc<sup>3+</sup> and Ti<sup>4+</sup> are d<sup>0</sup>, Zn<sup>2+</sup> is d<sup>10</sup>: colourless. Cu<sup>2+</sup> is d<sup>9</sup>: blue. The filter is for simple hydrated ions: MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> are d<sup>0</sup> and coloured by charge transfer',
    why: 'Among Ti<sup>4+</sup>, V<sup>2+</sup>, Cu<sup>+</sup>, Sc<sup>3+</sup> it picks V<sup>2+</sup> (3d<sup>3</sup>); the rest are d<sup>0</sup> or d<sup>10</sup>.',
    say: null,
  },

  // ── Topic 02 · Potassium Dichromate & Potassium Permanganate ──
  // pp. 158, 160–161, 164
  {
    topic: 1,
    kind: 'remember',
    q: 'Permanganate’s three half-reactions by medium, with their <i>E</i>° and n-factors?',
    a: 'Acidic, <i>n</i> = 5: MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O, +1.51 V. Neutral or faintly alkaline, <i>n</i> = 3: MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O + 3e<sup>−</sup> → MnO<sub>2</sub> + 4OH<sup>−</sup>, +0.59 V. Strongly alkaline, <i>n</i> = 1: MnO<sub>4</sub><sup>−</sup> + e<sup>−</sup> → MnO<sub>4</sub><sup>2−</sup>, +0.56 V',
    why: 'Equivalent mass of KMnO<sub>4</sub> (<i>M</i> = 158) = 158/<i>n</i>: 31.6 acidic, 52.7 neutral or faintly alkaline, 158 strongly alkaline.',
    say: '5–3–1 = Acid-Neutral-Base — permanganate electrons by medium (strong→weak hold on electrons).',
  },
  // pp. 158, 161–162, 164
  {
    topic: 1,
    kind: 'remember',
    q: 'Dichromate: its half-reaction, its n-factor, its equilibrium with chromate and its structure?',
    a: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O, +1.33 V, <i>n</i> = 6, equivalent mass 294/6 = 49. 2CrO<sub>4</sub><sup>2−</sup> + 2H<sup>+</sup> ⇌ Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + H<sub>2</sub>O: acid shifts it right to orange, base left to yellow, with Cr at +6 throughout. Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> is two CrO<sub>4</sub> tetrahedra sharing one corner oxygen, Cr–O–Cr about 126°',
    why: 'With iron(II): Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6Fe<sup>2+</sup> → 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O, orange to the green of the Cr<sup>3+</sup> formed here (the table of hydrated ions lists Cr<sup>3+</sup> as violet).',
    say: 'acid → orange, base → yellow — dichromate’s pH colour (think: a baseball is yellow-ish).',
  },
  // pp. 158, 160, 163
  {
    topic: 1,
    kind: 'mixup',
    q: 'Manganate or permanganate: the colour, the state of Mn, the d-count and the magnetism?',
    a: 'Manganate MnO<sub>4</sub><sup>2−</sup>: green, Mn +6, d<sup>1</sup>, one unpaired electron, paramagnetic. Permanganate MnO<sub>4</sub><sup>−</sup>: purple, Mn +7, d<sup>0</sup>, diamagnetic. Both tetrahedral. With no d-electrons to promote, permanganate’s colour is ligand-to-metal charge transfer, oxygen → manganese, never d–d',
    why: 'CO<sub>2</sub> through green manganate makes it slightly acidic and it disproportionates: 3MnO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2MnO<sub>4</sub><sup>−</sup> (purple) + MnO<sub>2</sub> (brown) + 2H<sub>2</sub>O.',
    say: null,
  },
  // pp. 157–158, 160, 163–164
  {
    topic: 1,
    kind: 'mistake',
    q: 'Can a KMnO<sub>4</sub> titration be acidified with HCl?',
    a: 'No: always dilute H<sub>2</sub>SO<sub>4</sub>. Permanganate oxidises Cl<sup>−</sup> to Cl<sub>2</sub>, wasting itself and corrupting any quantitative result. Dichromate tolerates HCl: its lower potential (+1.33 V against +1.51 V) does not appreciably oxidise chloride',
    why: 'KMnO<sub>4</sub> also fails as a primary standard: it slowly decomposes, faster in light, and must be standardised. K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is stable, non-deliquescent (Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is deliquescent) and can be weighed accurately.',
    say: null,
  },
  // pp. 158, 162, 164
  {
    topic: 1,
    kind: 'shortcut',
    q: '0.49 g of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (<i>M</i> = 294) in dilute H<sub>2</sub>SO<sub>4</sub> oxidises Fe<sup>2+</sup> completely. How many moles of Fe<sup>2+</sup>? The fast way?',
    a: 'Fix the n-factor first and the sum collapses. <i>n</i> = 6 gives equivalent mass 49, so 0.49/49 = 0.010 eq, which equals the equivalents of Fe<sup>2+</sup> (<i>n</i> = 1): 1.0 × 10<sup>−2</sup> mol',
    why: 'In a product question the medium word is the whole answer: KMnO<sub>4</sub> in neutral solution gives brown MnO<sub>2</sub>, not Mn<sup>2+</sup> (acidic) or green MnO<sub>4</sub><sup>2−</sup> (strongly alkaline).',
    say: null,
  },

  // ── Topic 03 · The f-Block — Lanthanoids and Actinoids ──
  // pp. 165–166, 168, 171
  {
    topic: 2,
    kind: 'remember',
    q: 'What is the lanthanoid contraction, what causes it, and what are its consequences?',
    a: 'The steady decrease in atomic and Ln<sup>3+</sup> radii from La to Lu, regular for the ions and only roughly so for the atoms, caused by the imperfect shielding of one 4f electron by another as nuclear charge rises. Consequences: Zr ≈ Hf (160 and 159 pm), Nb ≈ Ta, Mo ≈ W, hence paired occurrence and difficult separation; hydroxide basicity falls, La(OH)<sub>3</sub> most basic, Lu(OH)<sub>3</sub> least',
    why: 'As Ln<sup>3+</sup> shrinks the M–OH bond gains covalent character, which is why basic strength falls. The cause is poor shielding, never “appreciable shielding”.',
    say: null,
  },
  // pp. 166, 169
  {
    topic: 2,
    kind: 'remember',
    q: 'The f-block: its general configuration, its dominant oxidation state and its off-+3 states?',
    a: '(<i>n</i> − 2)f<sup>1–14</sup> (<i>n</i> − 1)d<sup>0–1</sup> <i>n</i>s<sup>2</sup>: lanthanoids Ce (<i>Z</i> = 58) to Lu (71), actinoids Th (90) to Lr (103); La and Ac are formally d-block. +3 dominates the lanthanoids. Above +3 is oxidising: Ce<sup>4+</sup> (f<sup>0</sup>, <i>E</i>°(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = +1.74 V), Tb<sup>4+</sup> (f<sup>7</sup>). Below +3 is reducing: Eu<sup>2+</sup> (f<sup>7</sup>), Yb<sup>2+</sup> (f<sup>14</sup>). Both relax back toward +3',
    why: 'Eu (<i>Z</i> = 63) = [Xe]4f<sup>7</sup>6s<sup>2</sup>; removing the two 6s electrons gives the half-filled Eu<sup>2+</sup> = [Xe]4f<sup>7</sup>, a strong reducing agent that changes to Eu<sup>3+</sup>.',
    say: null,
  },
  // pp. 169–171
  {
    topic: 2,
    kind: 'mixup',
    q: 'Lanthanoids or actinoids: which has the wider oxidation states, the greater contraction per step and the stronger complexes, and which are radioactive?',
    a: 'Actinoids, on all counts. 5f is less buried than 4f and 5f, 6d and 7s are of comparable energy, so states run up to +7 (Th +4, Pa +5, U +6, Np +7); poorer 5f shielding gives the greater contraction per step; complexes use 5f + 6d; all are radioactive. Lanthanoids: mainly +3 (few +2, +4), weaker complexes, and only Pm is radioactive',
    why: 'The later actinoids fall back to +3: rising nuclear charge pulls the 5f electrons inward until they are core-like and can no longer be removed for high oxidation states.',
    say: null,
  },
  // pp. 166, 170–172
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does the spin-only formula give the magnetic moments of Ln<sup>3+</sup> ions?',
    a: 'No: the 4f orbitals are so well shielded that orbital angular momentum is not quenched, so use μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)) BM. Gd<sup>3+</sup> is the special case: its f<sup>7</sup> has <i>L</i> = 0, so the two formulas coincide near 7.9 BM',
    why: 'Colourless does not mean diamagnetic: La<sup>3+</sup> (f<sup>0</sup>) and Lu<sup>3+</sup> (f<sup>14</sup>) are diamagnetic, but Gd<sup>3+</sup> (f<sup>7</sup>) has seven unpaired electrons and is strongly paramagnetic.',
    say: null,
  },
  // pp. 166, 170, 172
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which of La<sup>3+</sup>, Gd<sup>3+</sup>, Nd<sup>3+</sup>, Lu<sup>3+</sup> is coloured in aqueous solution? The fast way?',
    a: 'Tag each by its f-count and bin f<sup>0</sup>, f<sup>7</sup> and f<sup>14</sup> on sight: La<sup>3+</sup> (4f<sup>0</sup>), Gd<sup>3+</sup> (4f<sup>7</sup>) and Lu<sup>3+</sup> (4f<sup>14</sup>) are colourless, leaving Nd<sup>3+</sup> (4f<sup>3</sup>), lilac. The filter only bins: Ce<sup>3+</sup> (4f<sup>1</sup>) and Yb<sup>3+</sup> (4f<sup>13</sup>) are in between and still colourless, absorbing outside the visible region',
    why: 'The colours come from f–f transitions, whose absorption bands are sharp and narrow, unlike the broad d–d bands of transition-metal ions.',
    say: 'LA-GD-LU are colourless (f<sup>0</sup>, f<sup>7</sup>, f<sup>14</sup>); only LA, LU diamagnetic.',
  },

  // ── Topic 04 · Capstone Reference — Electrode Potentials, Reactivity, Ion Colours, Series Comparison & Applications ──
  // pp. 174, 176
  {
    topic: 3,
    kind: 'remember',
    q: '<i>E</i>°(M<sup>2+</sup>/M) across the 3d series: the values, and what the sign tells you?',
    a: 'In volts: Ti −1.63, V −1.18, Cr −0.90, Mn −1.18, Fe −0.44, Co −0.28, Ni −0.25, Cu +0.34, Zn −0.76. Negative: the metal lies above hydrogen and liberates H<sub>2</sub> from dilute non-oxidising acids; more negative means a stronger reducing agent. Copper alone is positive: no H<sub>2</sub> from dilute HCl or H<sub>2</sub>SO<sub>4</sub>',
    why: 'Copper dissolves only in oxidising acids, where the anion does the oxidising: 3Cu + 8HNO<sub>3</sub>(dil.) → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO + 4H<sub>2</sub>O.',
    say: null,
  },
  // pp. 174, 176, 178
  {
    topic: 3,
    kind: 'remember',
    q: '<i>E</i>°(M<sup>3+</sup>/M<sup>2+</sup>) across the 3d series: the values, and which ions oxidise or reduce?',
    a: 'In volts: Ti −0.37, V −0.26, Cr −0.41, Mn +1.57, Fe +0.77, Co +1.97. Negative: the +2 ion is the reducing agent, as Cr<sup>2+</sup> going to the stable d<sup>3</sup> Cr<sup>3+</sup>. Large positive: the +3 ion is a strong oxidising agent, as Mn<sup>3+</sup> going to the stable d<sup>5</sup> Mn<sup>2+</sup>, and Co<sup>3+</sup>. Fe<sup>3+</sup> (d<sup>5</sup>) is comparatively stable, only a mild oxidiser',
    why: 'Cr<sup>2+</sup> is a better reducing agent than Fe<sup>2+</sup>: its couple is −0.41 V against +0.77 V.',
    say: 'Cr<sup>2+</sup> reduces, Mn<sup>3+</sup>/Co<sup>3+</sup> oxidise — the two ends of the M<sup>3+</sup>/M<sup>2+</sup> table.',
  },
  // pp. 174–175, 178
  {
    topic: 3,
    kind: 'mixup',
    q: '<i>E</i>°(M<sup>2+</sup>/M) or <i>E</i>°(M<sup>3+</sup>/M<sup>2+</sup>): which question does each couple answer?',
    a: 'M<sup>2+</sup>/M tells you the metal’s reactivity toward acids. M<sup>3+</sup>/M<sup>2+</sup> tells you the oxidising or reducing behaviour of the ions. They are different numbers for different questions, so don’t mix them',
    why: 'Iron shows both: −0.44 V, so Fe + 2H<sup>+</sup> → Fe<sup>2+</sup> + H<sub>2</sub>; +0.77 V, so Fe<sup>3+</sup> is only a mild oxidiser.',
    say: null,
  },
  // pp. 158, 174, 177–178
  {
    topic: 3,
    kind: 'mistake',
    q: 'Among the hydrated 3d ions, is d<sup>10</sup> the only colourless configuration?',
    a: 'No: d<sup>0</sup> is colourless too, Sc<sup>3+</sup> as well as Zn<sup>2+</sup>. The partly filled hydrated ions are coloured: Ti<sup>3+</sup> purple, V<sup>3+</sup> green, Cr<sup>3+</sup> violet, Mn<sup>2+</sup> pale pink, Fe<sup>2+</sup> pale green, Fe<sup>3+</sup> yellow, Co<sup>2+</sup> pink, Ni<sup>2+</sup> green, Cu<sup>2+</sup> blue',
    why: 'So the pair of colourless ions is Sc<sup>3+</sup> and Zn<sup>2+</sup>. The rule is for these hydrated ions: MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> are d<sup>0</sup> and coloured by charge transfer.',
    say: null,
  },
  // pp. 174, 177–178
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Why is <i>E</i>°(Mn<sup>3+</sup>/Mn<sup>2+</sup>) much more positive than <i>E</i>°(Cr<sup>3+</sup>/Cr<sup>2+</sup>)? The fast way?',
    a: 'Read the configuration before the numbers. Reducing Mn<sup>3+</sup> reaches the stable half-filled d<sup>5</sup>: strongly favoured, +1.57 V. Reducing Cr<sup>3+</sup> would destroy the stable d<sup>3</sup>: disfavoured, −0.41 V',
    why: 'Use it for these two: the order Cr (−0.41) < Fe (+0.77) < Mn (+1.57) < Co (+1.97) still needs the table, since Co<sup>2+</sup> (d<sup>7</sup>) is not a specially stable shell.',
    say: null,
  },

  // ── Additional A · The Complete Oxidation-State Map of the 3d Series ──
  // pp. 180, 182
  {
    topic: 4,
    kind: 'remember',
    q: 'Which oxidation states does each 3d element show, and why is the spread widest mid-series?',
    a: 'Sc +3; Ti +2 to +4; V +2 to +5; Cr +1 to +6; Mn +2 to +7; Fe +2, +3 (+4, +6); Co +2, +3 (+4); Ni +2 (+3, +4); Cu +1, +2; Zn +2. The extremes are impoverished for opposite reasons: Sc and Ti have too few electrons to lose or share; Cu and Zn have too many d-electrons, leaving fewer orbitals available to share',
    why: 'Oxygen beats fluorine at the top: the highest manganese fluoride is MnF<sub>4</sub> but the highest oxide is Mn<sub>2</sub>O<sub>7</sub> (+7), because oxygen forms multiple bonds to the metal.',
    say: null,
  },
  // pp. 181–182
  {
    topic: 4,
    kind: 'remember',
    q: 'Why is Cu(II) the stable state in water despite copper’s huge second ionisation enthalpy, and why is CuI<sub>2</sub> never isolated?',
    a: 'The hydration enthalpy of the small, doubly charged Cu<sup>2+</sup> is so much more negative than that of Cu<sup>+</sup> that it more than repays the second ionisation enthalpy, so 2Cu<sup>+</sup>(aq) → Cu<sup>2+</sup>(aq) + Cu(s). Cu<sup>2+</sup> oxidises iodide on contact: 2Cu<sup>2+</sup> + 4I<sup>−</sup> → Cu<sub>2</sub>I<sub>2</sub>(s) + I<sub>2</sub>; every other Cu(II) halide is known',
    why: 'Only aqueous Cu(I) collapses: solid CuCl is stable, since its lattice stabilises Cu(I) and no water is present.',
    say: null,
  },

  // ── Additional B · Reading the Energy Tables: Atomisation, Ionisation, Hydration, and E° ──
  // pp. 183–184, 186
  {
    topic: 5,
    kind: 'remember',
    q: 'The enthalpy input for M(s) → M<sup>2+</sup>(aq), and why is <i>E</i>°(Mn<sup>2+</sup>/Mn) (−1.18 V) more negative than <i>E</i>°(Cr<sup>2+</sup>/Cr) (−0.90 V)?',
    a: 'Δ<i>H</i> = Δ<sub>a</sub><i>H</i> + Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>hyd</sub><i>H</i>(M<sup>2+</sup>). In kJ mol<sup>−1</sup>, the first three: Mn 279 + 717 + 1509 = 2505; Cr 398 + 653 + 1592 = 2643. Mn is 138 cheaper: atomisation 119 and second ionisation 83 cheaper, first ionisation 64 dearer. With hydration comparable (Mn −1862, Cr −1925), Mn is the more easily oxidised',
    why: 'The sum of copper’s three terms is the largest in the table, 339 + 745 + 1958 = 3042 kJ mol<sup>−1</sup>, and hydration does not repay it: +0.34 V. Ni<sup>2+</sup>’s hydration enthalpy, among the most negative in the series (−2121 kJ mol<sup>−1</sup>), repays its ionisation cost unusually well, keeping <i>E</i>°(Ni<sup>2+</sup>/Ni) more negative than those costs alone predict.',
    say: null,
  },
  // pp. 183–185
  {
    topic: 5,
    kind: 'remember',
    q: 'Where do the second and third ionisation enthalpies break their trends, and what follows?',
    a: 'In kJ mol<sup>−1</sup>: Δ<sub>i</sub><i>H</i><sub>2</sub> spikes at Cr (1592) and Cu (1958): Cr<sup>+</sup> is 3d<sup>5</sup> and Cu<sup>+</sup> is 3d<sup>10</sup>, and both resist; Zn’s is lower (1734), because Zn<sup>+</sup> loses its lone 4s electron. Δ<sub>i</sub><i>H</i><sub>3</sub>: Fe 2957 < Mn 3248 < Cu 3554 < Zn 3833. Fe<sup>2+</sup> (3d<sup>6</sup>) reaches 3d<sup>5</sup>; Mn<sup>2+</sup> (3d<sup>5</sup>) must break it, which is why Mn<sup>3+</sup> is oxidising and Fe<sup>3+</sup> stable',
    why: 'In the same table V has the highest Δ<sub>a</sub><i>H</i> (515 kJ mol<sup>−1</sup>), so “the 3d metal with the highest enthalpy of atomisation” has a maximum oxidation state of +5; Zn, with no unpaired d-electrons, has the lowest (130 kJ mol<sup>−1</sup>).',
    say: null,
  },

  // ── Additional C · The Full Permanganate and Dichromate Bench ──
  // pp. 187–189
  {
    topic: 6,
    kind: 'remember',
    q: 'The n-factors for titration arithmetic, and the rule that uses them?',
    a: 'Equivalents of oxidant = equivalents of reductant. KMnO<sub>4</sub> 5, 3 or 1 by medium; K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> 6; Fe<sup>2+</sup> 1; C<sub>2</sub>O<sub>4</sub><sup>2−</sup> 2; S<sub>2</sub>O<sub>3</sub><sup>2−</sup> 8 (to sulphate). FeC<sub>2</sub>O<sub>4</sub> delivers both, 1 + 2 = 3 e<sup>−</sup> per formula unit: 0.1 mol MnO<sub>4</sub><sup>−</sup> in acid accepts 0.5 mol e<sup>−</sup>, enough for 0.5 mol Fe<sup>2+</sup> but only 0.5/3 = 0.1667 mol (0.167 mol to three significant figures) FeC<sub>2</sub>O<sub>4</sub>',
    why: '25.0 mL of H<sub>2</sub>O<sub>2</sub> against 20.0 mL of 0.02 M KMnO<sub>4</sub> in acid: 0.0200 L × 0.02 mol L<sup>−1</sup> × 5 = 2.0 × 10<sup>−3</sup> eq; H<sub>2</sub>O<sub>2</sub> has <i>n</i> = 2, so 1.0 × 10<sup>−3</sup> mol in 25.0 mL, 0.04 M.',
    say: null,
  },
  // pp. 187–188, 190
  {
    topic: 6,
    kind: 'remember',
    q: 'The permanganate–oxalate titration: its equation, its temperature, its catalyst, its indicator and its acid?',
    a: '5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> + 2MnO<sub>4</sub><sup>−</sup> + 16H<sup>+</sup> → 2Mn<sup>2+</sup> + 8H<sub>2</sub>O + 10CO<sub>2</sub>, run at about 333 K because it is slow when cold. The Mn<sup>2+</sup> produced is itself the catalyst: the first drops decolourise slowly, later drops instantly. No indicator: the first permanent pink excess is the endpoint. The acid must be dilute H<sub>2</sub>SO<sub>4</sub>: HCl is oxidised to Cl<sub>2</sub>, and HNO<sub>3</sub> is itself an oxidant',
    why: 'In weakly acidic or neutral solution the Mn<sup>2+</sup> formed meets excess permanganate: 2MnO<sub>4</sub><sup>−</sup> + 3Mn<sup>2+</sup> + 2H<sub>2</sub>O → 5MnO<sub>2</sub> + 4H<sup>+</sup>, and brown MnO<sub>2</sub> appears.',
    say: null,
  },

  // ── Additional D · The f-Block Fine Print ──
  // pp. 190, 192
  {
    topic: 7,
    kind: 'remember',
    q: 'Which lanthanoids break the smooth trends in radius and density, and why?',
    a: 'Eu and Yb. Metallic radii fall from 187 pm (La) to about 173 pm (Lu) and Ln<sup>3+</sup> radii from 103.2 pm to about 86 pm, but Eu’s metallic radius jumps to 199 pm. With the extra-stable 4f<sup>7</sup> (Eu) and 4f<sup>14</sup> (Yb) cores, these two bond through essentially only their two 6s electrons: larger and less dense than the trend',
    why: '<i>E</i>°(Ln<sup>3+</sup>/Ln) sits at −2.2 to −2.4 V with one exception: Eu, −2.0 V, reflecting the stabilisation of Eu<sup>2+</sup> (f<sup>7</sup>).',
    say: null,
  },
  // pp. 190–192
  {
    topic: 7,
    kind: 'remember',
    q: 'Lanthanoid ionisation enthalpies, and why are those of the early actinoids lower?',
    a: 'Lanthanoids: first about 600, second about 1200 kJ mol<sup>−1</sup>, comparable to calcium, which is why the early members are about as reactive as Ca; the third dips abnormally low at La, Gd and Lu, leaving f<sup>0</sup>, f<sup>7</sup> and f<sup>14</sup>. Early actinoids: 5f orbitals penetrate the inner core less, so 5f electrons are more effectively shielded and less firmly held, which also leaves them available for bonding',
    why: 'Actinoid configurations show the same f<sup>7</sup> pull: Am is [Rn]5f<sup>7</sup>7s<sup>2</sup>, Cm is [Rn]5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup>.',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 193–194
  {
    topic: 8,
    kind: 'remember',
    q: 'Which parts of The d- and f-Block Elements carry the most weight in JEE and NEET?',
    a: 'KMnO<sub>4</sub> and K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> chemistry (5–3–1 rule, n-factor, preparation chain, colours of products) about 25%; spin-only magnetic moment about 20%; the f-block (contraction, oxidation states, magnetism) about 20%; colour and colourless ions about 15%; oxidation states and trends about 12%; qualitative-analysis crossovers about 8%',
    why: 'A recurring shape, the moment ladder: free Ti<sup>3+</sup>, V<sup>2+</sup> and Sc<sup>3+</sup> are 3d<sup>1</sup>, 3d<sup>3</sup> and 3d<sup>0</sup>, so 1.73, 3.87 and 0 BM.',
    say: null,
  },
  // pp. 194–195
  {
    topic: 8,
    kind: 'mistake',
    q: 'Which traps recur in d- and f-block questions?',
    a: 'Calling the colour of an intensely coloured d<sup>0</sup> ion (MnO<sub>4</sub><sup>−</sup>, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>, CrO<sub>4</sub><sup>2−</sup>) d–d (it is charge transfer); “d<sup>4</sup> = reducing” (Cr<sup>2+</sup> reduces at −0.41 V, Mn<sup>3+</sup> oxidises at +1.57 V, both d<sup>4</sup>); the medium swapped (MnO<sub>2</sub> in neutral, MnO<sub>4</sub><sup>2−</sup> in strong alkali, Mn<sup>2+</sup> in acid); Cr<sub>2</sub>O<sub>3</sub> from cold conc. H<sub>2</sub>SO<sub>4</sub> on K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (it is red CrO<sub>3</sub>); La and Ac as f-block (d-block by configuration); Eu<sup>3+</sup> as the reducing off-state (it is Eu<sup>2+</sup>); denying Ce<sup>4+</sup> in aqueous solution',
    why: '<i>E</i>°(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = +1.74 V says Ce<sup>4+</sup> should oxidise water, but the reaction is kinetically negligible, so ceric solutions serve as volumetric oxidants (cerimetry).',
    say: null,
  },
];
