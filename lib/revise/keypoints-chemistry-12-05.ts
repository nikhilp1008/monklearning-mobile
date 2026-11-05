/**
 * KEY POINTS for Chemistry Class 12, Chapter 5 (Coordination Compounds).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–06 are 0–5; Additional topics A–D are 6–9; Additional
 * topic E, What JEE and NEET Actually Ask (the book's Addendum P), is 10. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page (the bottom folio) is
 * above each point. Remember: the topic's Key Formulas / Definitions and Cheat
 * Sheet Box. Common mistakes: its Common Student Pitfalls. Exam shortcuts: its
 * Pro-Tip. `say`: the cheat sheet's first two memory aids, word for word, in
 * the Ch 1–4 form: no quotation marks, and a label after " — " (the book's own
 * gloss where it has one). Six are not word for word, because the aid as
 * printed misleads: Topic 01's second says "either donor", not "both ends";
 * Topic 03's first adds "Brothers", the word for Br its sentence
 * mnemonic lacked; Topic 03's second adds "for octahedral d<sup>4</sup>–d<sup>7</sup>" to its
 * bracket; Topic 05's second ends on Factor 3's words, "an equivalent number of
 * comparable monodentate ligands", not "a larger number"; Topic 04's second says
 * "partly filled", not "filled"; Topic 06's second says "of the two isomers, only
 * the cis is the drug", not "only cisplatin is the drug".
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic E: its distribution, archetypes and traps.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Complexes in
 * square brackets, species upright: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>, K<sub>4</sub>[Fe(CN)<sub>6</sub>]. Ligand abbreviations
 * upright: en, ox, EDTA, gly. Type formulas upright: Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>, [M(AA)<sub>2</sub>X<sub>2</sub>]. cis, trans, fac,
 * mer, d, l upright. d-counts, levels and hybrids upright: d<sup>6</sup>, t<sub>2g</sub><sup>6</sup> e<sub>g</sub><sup>0</sup>, e<sup>4</sup> t<sub>2</sub><sup>4</sup>, d<sup>2</sup>sp<sup>3</sup>.
 * Δ<sub>o</sub>, Δ<sub>t</sub> upright, <i>P</i> italic, CFSE upright, <i>n</i><sub>t2g</sub> flat as Topic 03 prints it.
 * μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM. <i>K</i>, <i>K</i><sub>f</sub>, log <i>K</i> italic <i>K</i>; β upright. σ, π, π*, μ-CO upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Werner’s Theory, Ligands & Nomenclature ──
  // pp. 197–198, 202–203
  {
    topic: 0,
    kind: 'remember',
    q: 'Werner’s primary and secondary valences: what are they in modern words?',
    a: 'Primary valence is the oxidation number. Secondary valence is the coordination number: a fixed number of positions immediately around the metal, pointing in definite directions, which gives the complex its shape. The square bracket is the fence: what is inside travels as one unit, and the counter ions outside are free in solution',
    why: 'For [Cr(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub> the primary and secondary valences are 3 and 6, in that order.',
    say: null,
  },
  // pp. 199–203
  {
    topic: 0,
    kind: 'remember',
    q: 'How do you get the metal’s oxidation number and its coordination number?',
    a: '(charge on complex ion) = (ON of metal) + ∑(charges on ligands), with neutral ligands such as NH<sub>3</sub>, H<sub>2</sub>O and CO contributing 0. CN = ∑(number of ligands × denticity), counting σ-donor atoms only: three oxalates give CN 6, not 3, and counter ions and π bonds do not count',
    why: 'K[Co(en)(C<sub>2</sub>O<sub>4</sub>)<sub>2</sub>]: <i>x</i> + 0 + 2(−2) = −1, so Co is +3; CN = 1 × 2 + 2 × 2 = 6.',
    say: 'Count atoms, not arms — CN is donor atoms, so each chelate arm is counted separately.',
  },
  // pp. 198–199, 202–203
  {
    topic: 0,
    kind: 'mixup',
    q: 'Ambidentate or didentate: what is the difference?',
    a: 'Ambidentate: two different possible donor atoms, binding a metal through either one: NO<sub>2</sub><sup>−</sup> (N or O), SCN<sup>−</sup> (S or N). Didentate: two donor atoms binding the same metal together, closing a ring: en, oxalate. The test is whether the two donors bind at once',
    why: 'Past two comes polydentate: EDTA<sup>4−</sup> is hexadentate, with 2 N + 4 O donor atoms.',
    say: 'Ambi = either donor — an ambidentate ligand can attach through either of two different atoms, one at a time: NO<sub>2</sub><sup>−</sup> (N or O), SCN<sup>−</sup> (S or N).',
  },
  // pp. 200, 202
  {
    topic: 0,
    kind: 'mistake',
    q: 'Naming a complex: is “diaqua” alphabetised under d?',
    a: 'No: under a, for aqua; the multiplier is ignored. Use di, tri, tetra for simple ligands, and bis, tris, tetrakis when the ligand name already contains a multiplier or is itself complex, as in bis(ethane-1,2-diamine). An anionic complex takes -ate and sometimes a Latin stem: ferrate, cuprate, argentate, plumbate, stannate, aurate',
    why: 'K<sub>3</sub>[Fe(CN)<sub>6</sub>]: <i>x</i> + 6(−1) = −3, so Fe is +3: potassium hexacyanidoferrate(III).',
    say: null,
  },
  // pp. 200, 202
  {
    topic: 0,
    kind: 'shortcut',
    q: '1 mol of CoCl<sub>3</sub>·5NH<sub>3</sub> gives 2 mol of AgCl with excess AgNO<sub>3</sub>. Its coordination formula? The fast way?',
    a: 'Read the precipitate before writing any structure: moles of AgCl = ionisable chlorides outside the bracket. So 2 Cl<sup>−</sup> sit outside, and the remaining Cl<sup>−</sup> and all five NH<sub>3</sub> are inside: [Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub>, CN = 5 + 1 = 6',
    why: 'Sanity check on any oxidation number: rebuild the complex-ion charge from it. +3 + (−1) = +2, which the two Cl<sup>−</sup> outside balance.',
    say: null,
  },

  // ── Topic 02 · Isomerism in Coordination Compounds ──
  // pp. 204–205, 212
  {
    topic: 1,
    kind: 'remember',
    q: 'The two families of isomers, and the types in each?',
    a: 'Structural, different bonds: ionisation (a ligand and a counter ion swap), solvate or hydrate (water as ligand or as water of crystallisation), linkage (an ambidentate ligand bound through a different donor atom), coordination (ligands redistributed between a complex cation and a complex anion). Stereo, same bonds but a different arrangement in space: geometrical (cis–trans, fac–mer) and optical (non-superimposable mirror images)',
    why: '[Co(NH<sub>3</sub>)<sub>5</sub>(SO<sub>4</sub>)]Br frees Br<sup>−</sup> (test with AgNO<sub>3</sub>) and [Co(NH<sub>3</sub>)<sub>5</sub>Br]SO<sub>4</sub> frees SO<sub>4</sub><sup>2−</sup> (test with BaCl<sub>2</sub>): ionisation isomers.',
    say: null,
  },
  // pp. 205–206, 209, 212
  {
    topic: 1,
    kind: 'remember',
    q: 'Which skeletons show geometrical isomerism, and how many isomers do they give?',
    a: 'Square planar: Ma<sub>2</sub>b<sub>2</sub>, Ma<sub>2</sub>bc and M(AB)<sub>2</sub> give 2 each, Mabcd gives 3; Ma<sub>4</sub>, Ma<sub>3</sub>b and Mab<sub>3</sub> give none. Octahedral: Ma<sub>4</sub>b<sub>2</sub>, Ma<sub>4</sub>bc and Ma<sub>3</sub>b<sub>3</sub> (fac, mer) give 2 each, Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub> gives 5; Ma<sub>6</sub> and Ma<sub>5</sub>b give none. Tetrahedral: none',
    why: 'Mabcd: fix a in one corner and ask which of b, c, d sits opposite it. Three choices, three isomers.',
    say: 'Tetrahedral has no cis — every corner is a neighbour.',
  },
  // pp. 206, 209, 211–212
  {
    topic: 1,
    kind: 'mixup',
    q: 'cis or trans [M(AA)<sub>2</sub>X<sub>2</sub>]: which is chiral, and how many stereoisomers are there?',
    a: 'cis is chiral, a d/l pair; trans keeps a mirror plane and is one achiral structure: 1 + 2 = 3 stereoisomers. Compare [M(AA)<sub>3</sub>] with en or ox: one arrangement, chiral, so 2. Enumerate the geometrical isomers first, then test each for chirality',
    why: 'cis-[Co(en)<sub>2</sub>Cl<sub>2</sub>]<sup>+</sup> is optically active and the trans form is not. [Co(en)<sub>2</sub>(NH<sub>3</sub>)Cl]<sup>2+</sup>, type [M(AA)<sub>2</sub>bc], counts the same way: 3.',
    say: 'cis can be chiral, trans cannot (for [M(AA)<sub>2</sub>X<sub>2</sub>]).',
  },
  // pp. 205, 209, 211
  {
    topic: 1,
    kind: 'mistake',
    q: 'Does tetrahedral [Zn(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] show cis and trans forms, as Ma<sub>2</sub>b<sub>2</sub> might suggest?',
    a: 'No: in a tetrahedron every position is adjacent to every other, so there is no cis or trans. Ma<sub>2</sub>b<sub>2</sub> shows them only if it is square planar, so check the geometry first',
    why: 'Square planar [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] does: the cis form, cisplatin, is an anticancer drug and the trans form is clinically useless.',
    say: null,
  },
  // pp. 207, 209, 211
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Which of [Fe(ox)<sub>3</sub>]<sup>3−</sup>, trans-[Fe(ox)<sub>2</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>−</sup>, [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup> and square planar [Ni(CN)<sub>4</sub>]<sup>2−</sup> is optically active? The fast way?',
    a: 'Hunt for a plane of symmetry before drawing anything. Ma<sub>6</sub> and the symmetric square planar ion carry obvious planes, and the trans form keeps a mirror plane. Only the tris-chelate [Fe(ox)<sub>3</sub>]<sup>3−</sup> has none',
    why: 'For a count, lock the geometrical isomers first, then add a d/l pair for each chiral one: Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub> has 5, of which only the all-cis form is chiral, so 4 + 2 = 6 stereoisomers.',
    say: null,
  },

  // ── Topic 03 · Bonding in Coordination Compounds (VBT & CFT) ──
  // pp. 213–216
  {
    topic: 2,
    kind: 'remember',
    q: 'The octahedral splitting: the two sets, their energies and the CFSE formula?',
    a: 'Three orbitals aimed between the axes drop into t<sub>2g</sub>, at −0.4 Δ<sub>o</sub>; two aimed along the axes rise into e<sub>g</sub>, at +0.6 Δ<sub>o</sub>; the average energy is unchanged. CFSE = (−0.4 <i>n</i><sub>t2g</sub> + 0.6 <i>n</i><sub>eg</sub>) Δ<sub>o</sub>, plus <i>mP</i> when the question supplies a pairing energy, with <i>m</i> the number of extra electron pairs against the free ion',
    why: 'High-spin d<sup>6</sup>, t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup>: −1.6 + 1.2 = −0.4 Δ<sub>o</sub>. Low-spin d<sup>6</sup>, t<sub>2g</sub><sup>6</sup>: −2.4 Δ<sub>o</sub>, before the two extra pairs.',
    say: null,
  },
  // pp. 215–218
  {
    topic: 2,
    kind: 'remember',
    q: 'The spectrochemical series, and what decides high or low spin?',
    a: 'Weak to strong, found by experiment: I<sup>−</sup> < Br<sup>−</sup> < Cl<sup>−</sup> < F<sup>−</sup> < OH<sup>−</sup> < C<sub>2</sub>O<sub>4</sub><sup>2−</sup> < H<sub>2</sub>O < NH<sub>3</sub> < en < NO<sub>2</sub><sup>−</sup> < CN<sup>−</sup> < CO. Δ<sub>o</sub> > <i>P</i> gives low spin, Δ<sub>o</sub> < <i>P</i> gives high spin. Only octahedral d<sup>4</sup>–d<sup>7</sup> ions have this choice at all',
    why: 'Octahedral d<sup>4</sup> with Δ<sub>o</sub> = 12,000 cm<sup>−1</sup> and <i>P</i> = 21,000 cm<sup>−1</sup>: high spin, t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>1</sup>, <i>n</i> = 4, μ<sub>s</sub> = √(4(6)) = 4.90 BM.',
    say: 'Spectrochemical (weak → strong): I Br Cl F OH ox — water — NH<sub>3</sub> en NO<sub>2</sub> CN CO → If Brothers Could Find Our Hidden Oxen Wandering, Nobody’d Envy No Cunning Cow.',
  },
  // pp. 213–216, 218
  {
    topic: 2,
    kind: 'mixup',
    q: 'Inner orbital or outer orbital: the hybridisation, and the spin it goes with?',
    a: 'Inner orbital uses (<i>n</i> − 1)d: d<sup>2</sup>sp<sup>3</sup>. Outer orbital uses <i>n</i>d: sp<sup>3</sup>d<sup>2</sup>. In octahedral d<sup>4</sup>–d<sup>7</sup>, where there is a spin choice, inner goes with low spin and outer with high spin. With d<sup>3</sup> there is nothing to pair: [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> is d<sup>2</sup>sp<sup>3</sup> with <i>n</i> = 3, 3.87 BM',
    why: 'At CN 4: [Ni(CN)<sub>4</sub>]<sup>2−</sup> is dsp<sup>2</sup>, square planar, diamagnetic; [NiCl<sub>4</sub>]<sup>2−</sup> is sp<sup>3</sup>, tetrahedral, with 2 unpaired electrons.',
    say: 'Inner = low spin, Outer = high spin (the VBT–CFT dictionary, for octahedral d<sup>4</sup>–d<sup>7</sup>).',
  },
  // pp. 215, 217–218
  {
    topic: 2,
    kind: 'mistake',
    q: 'Does a larger Δ<sub>o</sub> mean a longer absorbed wavelength?',
    a: 'No: Δ<sub>o</sub> = <i>hc</i>/<i>λ</i>, so a larger gap means higher energy and a shorter absorbed wavelength. Strong-field complexes absorb short-<i>λ</i> light. The observed colour is the complement of the absorbed colour',
    why: 'Among [Co(CN)<sub>6</sub>]<sup>3−</sup>, [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>, [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> and [CoF<sub>6</sub>]<sup>3−</sup>, the fluoride absorbs the longest wavelength: F<sup>−</sup> is the weakest field there.',
    say: null,
  },
  // pp. 214, 216–218
  {
    topic: 2,
    kind: 'shortcut',
    q: 'Which has the highest spin-only moment: [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, [Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> or [Ni(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>? The fast way?',
    a: 'Lock the chain: oxidation number → d<sup><i>n</i></sup> → ligand field → high or low spin → unpaired count. These four aqua ions do no extra pairing, so d<sup>5</sup>, d<sup>6</sup>, d<sup>7</sup>, d<sup>8</sup> give 5, 4, 3, 2 unpaired. [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>: √35 = 5.92 BM',
    why: 'μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM: <i>n</i> = 1, 2, 3, 4, 5 gives 1.73, 2.83, 3.87, 4.90, 5.92 BM.',
    say: null,
  },

  // ── Topic 04 · Bonding in Metal Carbonyls ──
  // pp. 219–220, 224
  {
    topic: 3,
    kind: 'remember',
    q: 'Synergic bonding in a metal carbonyl: the two flows of electron density, and what it needs?',
    a: 'σ, ligand to metal: the carbon lone pair of CO enters an empty metal orbital. π back-donation, metal to ligand: filled metal d density enters the empty antibonding π* of CO. Each flow reinforces the other, giving an M–C bond far stronger than a plain dative bond. It needs an electron-rich metal, in a low or zero oxidation state; ligands without empty π* orbitals, like NH<sub>3</sub>, cannot do it',
    why: 'CO’s highest occupied orbital is a σ orbital concentrated on carbon, the pair it donates; just above it sit the empty π* orbitals.',
    say: 'Give and take, both ways — σ forward, π back; that is synergic.',
  },
  // pp. 220–222, 224
  {
    topic: 3,
    kind: 'remember',
    q: 'The five common carbonyls: their geometry and hybridisation, and what joins the two dimers?',
    a: '[Ni(CO)<sub>4</sub>] tetrahedral, sp<sup>3</sup>. [Fe(CO)<sub>5</sub>] trigonal bipyramidal, dsp<sup>3</sup>. [Cr(CO)<sub>6</sub>] octahedral, d<sup>2</sup>sp<sup>3</sup>. [Mn<sub>2</sub>(CO)<sub>10</sub>]: two square-pyramidal Mn(CO)<sub>5</sub> units joined by a Mn–Mn bond, no bridging CO. [Co<sub>2</sub>(CO)<sub>8</sub>]: a Co–Co bond plus two bridging CO. The metal is in the 0 oxidation state in all five',
    why: 'Iron enneacarbonyl, [Fe<sub>2</sub>(CO)<sub>9</sub>], has an Fe–Fe bond and three bridging CO.',
    say: null,
  },
  // pp. 219, 221, 224
  {
    topic: 3,
    kind: 'mixup',
    q: 'In a carbonyl compared with free CO, which bond gets stronger: M–C or C–O?',
    a: 'M–C: it gains π character and shortens. C–O weakens: back-donation goes into its antibonding orbital, so its bond order falls below the triple bond, it lengthens and its IR stretching frequency drops',
    why: 'In cm<sup>−1</sup>: free CO near 2143, terminal M–CO roughly 2000, bridging μ-CO around 1800.',
    say: 'Back-bond weakens C–O — antibonding gets partly filled, so C–O lengthens and its IR frequency drops.',
  },
  // pp. 220–221, 224, 246
  {
    topic: 3,
    kind: 'mistake',
    q: 'In an EAN count, is each CO worth one electron, and what does a bridging CO give?',
    a: 'No: each CO donates its lone pair, 2 electrons, so EAN = <i>Z</i> − (oxidation state) + 2 × (CO per metal), + 1 per M–M bond. A bridging CO still gives 2, but to the pair: 1 to each metal it spans',
    why: 'Per Co in [Co<sub>2</sub>(CO)<sub>8</sub>], three terminal and two bridging CO: 27 + 6 + 2 + 1 = 36, the krypton count.',
    say: null,
  },
  // pp. 220–222, 224
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Why does manganese form [Mn<sub>2</sub>(CO)<sub>10</sub>] rather than a mononuclear carbonyl? The fast way?',
    a: 'Run the chain for a first-row carbonyl: oxidation state → count CO → EAN → compare with 36. One Mn would need 25 + 2<i>n</i> = 36, <i>n</i> = 5.5: impossible. Five CO give 35, and a Mn–Mn bond adds 1 to each Mn: 36',
    why: 'One short does not always dimerise: [V(CO)<sub>6</sub>], 23 + 12 = 35, is a stable 17-electron exception, easily reduced to the 18-electron [V(CO)<sub>6</sub>]<sup>−</sup>.',
    say: null,
  },

  // ── Topic 05 · Stability of Coordination Compounds ──
  // pp. 225–226, 228, 230
  {
    topic: 4,
    kind: 'remember',
    q: 'The overall and stepwise stability constants: the definition, and how are they related?',
    a: 'For M + <i>n</i>L ⇌ ML<sub><i>n</i></sub>, β = [ML<sub><i>n</i></sub>]/([M][L]<sup><i>n</i></sup>); a larger β means a more stable complex, and the instability constant is 1/β. β = <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub> × ⋯ × <i>K</i><sub><i>n</i></sub>, so log β = ∑ log <i>K</i><sub><i>i</i></sub>. Successive stepwise constants normally decrease',
    why: 'log <i>K</i> = 4.0, 3.2, 2.5, 1.8: log β = 11.5, β = 10<sup>11.5</sup> ≈ 3.2 × 10<sup>11</sup>.',
    say: 'Logs add, constants multiply — log β = ∑ log <i>K</i><sub><i>i</i></sub>.',
  },
  // pp. 226–227, 230
  {
    topic: 4,
    kind: 'remember',
    q: 'What raises the stability of a complex?',
    a: 'As general trends: higher charge density on the metal ion; a ligand that donates its lone pair better to that metal (NH<sub>3</sub> binds Cu<sup>2+</sup> more strongly than H<sub>2</sub>O); and the chelate effect, a chelating ligand beating an equivalent number of comparable monodentate ligands because releasing small molecules raises the entropy. For high-spin octahedral first-row M<sup>2+</sup> with a given ligand, the Irving–Williams series: Mn<sup>2+</sup> < Fe<sup>2+</sup> < Co<sup>2+</sup> < Ni<sup>2+</sup> < Cu<sup>2+</sup> > Zn<sup>2+</sup>',
    why: 'A closed ring of donor atoms, a macrocycle such as a porphyrin, is more stable still than an open-chain chelate of the same denticity.',
    say: 'Claws beat crowds — a chelate (en, ox, EDTA) outranks an equivalent number of comparable monodentate ligands.',
  },
  // pp. 225, 229–230
  {
    topic: 4,
    kind: 'mixup',
    q: 'Thermodynamic or kinetic stability: what does each ask, and does one fix the other?',
    a: 'Thermodynamic: how far the equilibrium lies, which <i>K</i><sub>f</sub> measures. Kinetic: how fast the ligands exchange, labile if fast, inert if slow. They are independent, so a large <i>K</i><sub>f</sub> does not guarantee an inert complex, and <i>K</i><sub>f</sub> says nothing about rate',
    why: '[Ni(CN)<sub>4</sub>]<sup>2−</sup> is thermodynamically very stable yet labile, exchanging cyanide within minutes; [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> is inert, surviving for days even in acid.',
    say: null,
  },
  // pp. 226–229
  {
    topic: 4,
    kind: 'mistake',
    q: 'Four NH<sub>3</sub> against two en on Cu<sup>2+</sup>: does the larger head-count give the more stable complex?',
    a: 'No: both offer four N donors, and the two en add chelate rings and the entropy gain. log <i>K</i> = 20.0 for [Cu(en)<sub>2</sub>]<sup>2+</sup> against 13.0 for [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>. Compare like with like: one en brings only two donors, and [Cu(en)]<sup>2+</sup>, at 10.7, sits below [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>',
    why: 'Nor does higher denticity settle it: [Cu(EDTA)]<sup>2−</sup>, with hexadentate EDTA, is 18.8, below [Cu(en)<sub>2</sub>]<sup>2+</sup> at 20.0.',
    say: null,
  },
  // pp. 228–229
  {
    topic: 4,
    kind: 'shortcut',
    q: '[Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> has β = 1.0 × 10<sup>9</sup>. With 0.10 M complex and 1.0 M free NH<sub>3</sub> at equilibrium, what is free [Zn<sup>2+</sup>]? The fast way?',
    a: 'Rearrange β and work in powers of ten: [Zn<sup>2+</sup>] = 0.10/((1.0 × 10<sup>9</sup>)(1.0)<sup>4</sup>) = 1.0 × 10<sup>−10</sup> M. Almost all the zinc is locked up in the complex, the idea behind masking',
    why: 'From stepwise data, add the logs and convert only at the very end: 5.1 + 4.0 + 3.0 = 12.1, so β ≈ 1.3 × 10<sup>12</sup>.',
    say: null,
  },

  // ── Topic 06 · Importance & Applications of Coordination Compounds ──
  // pp. 231–232, 234, 236
  {
    topic: 5,
    kind: 'remember',
    q: 'Chlorophyll, haemoglobin and vitamin B<sub>12</sub>: which metal, held how, doing what?',
    a: 'Chlorophyll: magnesium in a nitrogen-donor, porphyrin-like ring; captures light for photosynthesis. Haemoglobin: iron(II) in a flat heme (porphyrin) ring of four N donors, a protein supplying the fifth bond and the sixth position free to grip O<sub>2</sub> reversibly; transports oxygen. Vitamin B<sub>12</sub> (cyanocobalamin): cobalt in a ring related to the porphyrins; the anti-pernicious-anaemia factor',
    why: 'Carbon monoxide is poisonous because it binds that same iron site far more strongly than O<sub>2</sub>, shutting the courier down.',
    say: 'Magnesium leaf, Iron blood, Cobalt vitamin, Rhodium catalyst.',
  },
  // pp. 232, 235–236
  {
    topic: 5,
    kind: 'remember',
    q: 'Which complexes and chelates do medicine and analysis rely on?',
    a: 'Cancer: cisplatin, cis-[Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]. Chelate therapy: D-penicillamine for copper, desferrioxime B for iron, EDTA for lead poisoning. Analysis: disodium EDTA for water hardness, through stable 1:1 complexes with Ca<sup>2+</sup> and Mg<sup>2+</sup>; dimethylglyoxime for Ni<sup>2+</sup>, rosy-red; [Fe(H<sub>2</sub>O)<sub>5</sub>(NO)]<sup>2+</sup> in the brown-ring test for nitrate',
    why: 'Only the cis isomer works: its two chlorides sit side by side, so it can bind adjacent positions on DNA, a two-point attachment the trans isomer cannot make.',
    say: 'cis works, trans shirks — of the two isomers, only the cis is the drug.',
  },
  // pp. 232–234, 236
  {
    topic: 5,
    kind: 'mixup',
    q: 'Cyanide or thiosulphate: which silver complex belongs to which process?',
    a: 'Extraction of Ag and Au: leached, with air as the oxidant, as the soluble cyanide complexes [Ag(CN)<sub>2</sub>]<sup>−</sup> and [Au(CN)<sub>2</sub>]<sup>−</sup>, then recovered by displacement with zinc. Electroplating: those same cyanide complexes. Photographic fixing: hypo, sodium thiosulphate, which dissolves unexposed AgBr as [Ag(S<sub>2</sub>O<sub>3</sub>)<sub>2</sub>]<sup>3−</sup>',
    why: 'The recovery: 2[Au(CN)<sub>2</sub>]<sup>−</sup> + Zn → [Zn(CN)<sub>4</sub>]<sup>2−</sup> + 2Au. Nickel goes another way, the Mond process: volatile [Ni(CO)<sub>4</sub>] is decomposed on heating to pure Ni and CO.',
    say: null,
  },
  // pp. 232, 234–236
  {
    topic: 5,
    kind: 'mistake',
    q: 'Is vitamin B<sub>12</sub> built on iron, and Wilkinson’s catalyst on platinum?',
    a: 'No: blood is iron and the vitamin is cobalt, the most common swap, and Wilkinson’s catalyst is rhodium. Fix them as a set: chlorophyll = Mg, haemoglobin = Fe, vitamin B<sub>12</sub> = Co, Wilkinson’s catalyst = Rh',
    why: 'Zinc is in some enzymes, carboxypeptidase A and carbonic anhydrase, not in haemoglobin.',
    say: null,
  },
  // pp. 232–233, 235–236
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Why is a complex bath preferred for electroplating silver? The fast way?',
    a: 'Anchor every application to one idea, control of the metal through stable complex formation. Biology and chelate therapy: chelate-effect stability. Extraction and electroplating: make a soluble complex, then release the metal in a controlled way. Analysis: sharp 1:1 EDTA stoichiometry. Here [Ag(CN)<sub>2</sub>]<sup>−</sup> releases Ag<sup>+</sup> slowly and steadily: a fine, even, adherent deposit',
    why: 'Stability is tuned, not simply maximised: a chelating drug must bind the toxic metal more strongly than the body’s own ligands, without stripping out essential metals.',
    say: null,
  },

  // ── Additional A · Nomenclature Drills: The Cases the Chapter Stops Short Of ──
  // pp. 237–238
  {
    topic: 6,
    kind: 'remember',
    q: 'How do you name a salt whose two ions are both complexes, and an ambidentate ligand?',
    a: 'Cation first, anion second, with the anionic complex’s metal taking -ate: [Ag(NH<sub>3</sub>)<sub>2</sub>][Ag(CN)<sub>2</sub>] is diamminesilver(I) dicyanidoargentate(I). An ambidentate ligand is named by the donor atom actually used: nitrito-N or nitrito-O, thiocyanato-S or thiocyanato-N',
    why: '[Pt(NH<sub>3</sub>)<sub>2</sub>Cl(NO<sub>2</sub>)] is diammine\u200bchlorido\u200bnitrito-N-platinum(II): the “N” is part of the answer, since nitrito-N and nitrito-O are different compounds.',
    say: null,
  },
  // pp. 237–239
  {
    topic: 6,
    kind: 'remember',
    q: 'Does the name of a complex salt state how many counter ions it has?',
    a: 'Never: [Co(en)<sub>3</sub>]<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> is tris(ethane-1,2-diamine)\u200bcobalt(III) sulphate. Rebuild the counts from the Roman numeral: Co(III) with neutral en is a +3 cation, so 2 cations balance 3 sulphates. Alphabetise ligands ignoring the multiplicative prefixes, and use chlorido, not chloro',
    why: 'K<sub>2</sub>[PtCl<sub>6</sub>]: <i>x</i> + 6(−1) = −2 gives <i>x</i> = +4, so potassium hexachloridoplatinate(IV), not hexachloroplatinate(VI).',
    say: null,
  },

  // ── Additional B · Isomer Counting: Beyond cis and trans ──
  // pp. 240–241
  {
    topic: 7,
    kind: 'remember',
    q: 'Octahedral Ma<sub>2</sub>b<sub>2</sub>c<sub>2</sub>: how many geometrical isomers and stereoisomers, and how do you count them?',
    a: 'Fix the two a ligands. a trans to a: 2 isomers (b trans to b with c trans to c, or b cis to b with c cis to c). a cis to a: 3 (b trans only, c trans only, or all-cis). That is 5 geometrical; only the all-cis form lacks a symmetry plane, so 4 + 2 = 6 stereoisomers',
    why: 'Total stereoisomers = achiral count + 2 × chiral count. [M(AA)bcde]: 6 geometrical, all chiral, 12. Mabcdef: 15 geometrical, all chiral, 30.',
    say: null,
  },
  // pp. 240–242
  {
    topic: 7,
    kind: 'remember',
    q: '[M(AB)<sub>3</sub>] with an unsymmetrical bidentate such as glycinate: how many isomers, against Ma<sub>3</sub>b<sub>3</sub> and [M(AA)<sub>3</sub>]?',
    a: '[M(AB)<sub>3</sub>]: fac and mer, both chiral, 4 stereoisomers. Ma<sub>3</sub>b<sub>3</sub>: fac and mer, both achiral, 2. [M(AA)<sub>3</sub>] with en or ox: one arrangement, chiral, 2. So “fac and mer are achiral” belongs to Ma<sub>3</sub>b<sub>3</sub>, not to every fac/mer pair',
    why: 'Each sits in a different category: [Cr(H<sub>2</sub>O)<sub>3</sub>(NH<sub>3</sub>)<sub>3</sub>]<sup>3+</sup> is geometrical only, [Cr(en)<sub>3</sub>]<sup>3+</sup> optical only, [Cr(gly)<sub>3</sub>] both.',
    say: null,
  },

  // ── Additional C · CFT Arithmetic: Tetrahedral Fields, Pairing Energies, and the Colour Table ──
  // pp. 243, 245
  {
    topic: 8,
    kind: 'remember',
    q: 'The tetrahedral field: its levels, its energies and its CFSE?',
    a: 'Inverted: e below at −0.6 Δ<sub>t</sub>, t<sub>2</sub> above at +0.4 Δ<sub>t</sub>, with no g subscripts because there is no centre of symmetry. CFSE = (−0.6 <i>n</i><sub>e</sub> + 0.4 <i>n</i><sub>t2</sub>) Δ<sub>t</sub>. For the same metal, ligands and distance Δ<sub>t</sub> = (4/9)Δ<sub>o</sub>, usually too small to exceed the pairing energy, so pairing is hardly ever forced and tetrahedral complexes are essentially always high spin',
    why: 'd<sup>8</sup> [NiCl<sub>4</sub>]<sup>2−</sup>: e<sup>4</sup> t<sub>2</sub><sup>4</sup>, CFSE = (−2.4 + 1.6) Δ<sub>t</sub> = −0.8 Δ<sub>t</sub>.',
    say: null,
  },
  // pp. 243–245
  {
    topic: 8,
    kind: 'remember',
    q: 'For [Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, Δ<sub>o</sub> = 15,800 cm<sup>−1</sup> and <i>P</i> = 28,000 cm<sup>−1</sup>. The configuration, the unpaired electrons and the CFSE?',
    a: 'Mn<sup>3+</sup> is d<sup>4</sup> and Δ<sub>o</sub> < <i>P</i>, so high spin: t<sub>2g</sub><sup>3</sup> e<sub>g</sub><sup>1</sup>, 4 unpaired, 4.90 BM. CFSE = −0.6 Δ<sub>o</sub> = −9,480 cm<sup>−1</sup>, with no <i>P</i> term, as there are no extra pairs against the free ion. Low-spin d<sup>4</sup> would be t<sub>2g</sub><sup>4</sup>, −1.6 Δ<sub>o</sub> + <i>P</i>, 2 unpaired',
    why: 'Light measures Δ<sub>o</sub>, not CFSE: the absorbed photon pays for exactly one Δ<sub>o</sub>. [Ti(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> at 498 nm: Δ<sub>o</sub> = <i>N</i><sub>A</sub><i>hc</i>/<i>λ</i> ≈ 240 kJ mol<sup>−1</sup>.',
    say: null,
  },

  // ── Additional D · The Werner Crossovers: Counting Ions, Waters, and Electrons ──
  // pp. 246–247
  {
    topic: 9,
    kind: 'remember',
    q: 'What do moles of AgCl and “1:2 electrolyte” each tell you about a complex?',
    a: 'Moles of AgCl = moles of Cl<sup>−</sup> outside the bracket: 3 mol per mole of CoCl<sub>3</sub>·6NH<sub>3</sub> gives [Co(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub>, and 2 mol per mole of CoCl<sub>3</sub>·5NH<sub>3</sub> gives [CoCl(NH<sub>3</sub>)<sub>5</sub>]Cl<sub>2</sub>. “1:2 electrolyte” means 1 cation + 2 anions, so with Cl<sup>−</sup> outside the complex cation is +2, and “1:3” means +3. Read the charge, then the oxidation state',
    why: 'FeCl<sub>3</sub>·4H<sub>2</sub>O·NH<sub>3</sub> as a 1:2 electrolyte: [FeCl(NH<sub>3</sub>)(H<sub>2</sub>O)<sub>4</sub>]Cl<sub>2</sub>, <i>x</i> + (−1) = +2, so Fe = +3, CN = 6.',
    say: null,
  },
  // pp. 246–248
  {
    topic: 9,
    kind: 'remember',
    q: 'How many waters of CuSO<sub>4</sub>·5H<sub>2</sub>O are coordinated, and what does [Co<sub>2</sub>(CO)<sub>8</sub>] contain?',
    a: 'Four waters are coordinated to Cu<sup>2+</sup>, and the fifth is hydrogen-bonded to sulphate, so it needs stronger heating to leave. [Co<sub>2</sub>(CO)<sub>8</sub>]: one Co–Co bond, two bridging CO and six terminal CO',
    why: 'EAN per Co: 27 − 0 + 2<i>n</i> + 1 = 36 needs <i>n</i> = 4 CO per cobalt, 8 in total. [Mn<sub>2</sub>(CO)<sub>10</sub>] has its Mn–Mn bond and no bridging CO.',
    say: null,
  },

  // ── Additional E · What JEE and NEET Actually Ask ──
  // pp. 248–249
  {
    topic: 10,
    kind: 'remember',
    q: 'Which parts of Coordination Compounds carry the most weight in JEE and NEET?',
    a: 'An estimate, not official figures: VBT, CFT and magnetism (hybridisation, geometry and unpaired-count combos, CFSE numericals) about 35%; isomerism about 30%; Werner, ligands and nomenclature about 20%; carbonyls and EAN about 10%; stability and applications about 5%',
    why: 'A recurring shape: [Ni(CO)<sub>4</sub>], [Ni(CN)<sub>4</sub>]<sup>2−</sup> and [NiCl<sub>4</sub>]<sup>2−</sup> are tetrahedral, square planar and tetrahedral, and only [NiCl<sub>4</sub>]<sup>2−</sup> is both tetrahedral and paramagnetic.',
    say: null,
  },
  // pp. 249–250
  {
    topic: 10,
    kind: 'mistake',
    q: 'Which traps recur in coordination-compound questions?',
    a: 'cis and trans for a tetrahedral Ma<sub>2</sub>b<sub>2</sub> ([Zn(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>] is the stock distractor); chirality for trans-[M(AA)<sub>2</sub>X<sub>2</sub>] (cis only); ligands counted instead of donor atoms ([Cr(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup> is CN 6, not 3); Δ<sub>o</sub> taken from the observed colour, not the absorbed one; t<sub>2g</sub>, e<sub>g</sub> and the octahedral energies used for a tetrahedron; “VBT can distinguish strong from weak ligands” (it cannot); one electron per CO, a forgotten M–M bond, or a non-zero oxidation state in a neutral homoleptic carbonyl',
    why: 'Unsymmetrical does not mean chiral: square planar [Pt(gly)<sub>2</sub>] has two geometrical isomers, cis and trans, and neither is optically active, because the molecular plane is a mirror plane.',
    say: null,
  },
];
