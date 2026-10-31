import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topic 06 "Worked examples & exam practice": pp. 467–474 of the
 * Class 11 Chemistry Master Reference, word for word. The book runs the
 * chapter as nine "Section N —" headings; by the founder's layout
 * (2026-10-31) its Sections 6 to 9 are this one topic, each its own part:
 * Worked Examples (pp. 467–469, seven examples), Practice Exercises
 * (pp. 470–471, each answer paired with its question), Common Pitfalls &
 * Pro-Tips (p. 472) and What JEE & NEET Actually Ask (pp. 473–474; the errata's
 * resolved item: the heading reads "Section 9", not "Addendum P"). These pages
 * draw nothing.
 *
 * Notation as in Chapters 4 and 8: hybrid and orbital labels upright
 * (sp<sup>3</sup>, 2p, 6s<sup>2</sup>, d orbitals), pπ–pπ, 2c–2e and 3c–2e
 * upright with an en dash (the book sets c, e, s, p, d in maths italic with a
 * hyphen); bonds with an en dash (B–H, O–H, E–E); the standard-state sign
 * written ° (<i>E</i>°, Δ<sub>f</sub><i>H</i>°) as in Chapters 6 and 7, where the
 * book prints a plimsoll; coefficients without the book's thin space (2Al).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 06 · pp. 467–474 ─────────────────────────
  {
    n: '06',
    title: 'Worked examples & exam practice',
    kalam:
      'Group 13/14 chemistry is tested almost entirely through a small, recurring set of concept checks rather than heavy calculation.',
    blocks: [
      // Section 6 — Worked Examples · pp. 467–469
      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Mass of boric acid from borax',
        q: '20.12 g of anhydrous borax, Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>, is treated with excess dilute HCl. Calculate the mass of orthoboric acid formed. (Na = 23, B = 10.8, O = 16, H = 1.)',
        steps: [
          'The relevant reaction is<br>Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 2HCl + 5H<sub>2</sub>O → 2NaCl + 4H<sub>3</sub>BO<sub>3</sub>.',
          'Molar mass of Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>: 2(23) + 4(10.8) + 7(16) = 46 + 43.2 + 112 = 201.2 g mol<sup>−1</sup>, so<br><i>n</i>(Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>) = 20.12/201.2 = 0.1000 mol.',
          'Each mole of borax gives 4 mol of boric acid: <i>n</i>(H<sub>3</sub>BO<sub>3</sub>) = 4 × 0.1000 = 0.400 mol. Molar mass of H<sub>3</sub>BO<sub>3</sub>: 3(1) + 10.8 + 3(16) = 3 + 10.8 + 48 = 61.8 g mol<sup>−1</sup>, so<br>mass = 0.400 × 61.8',
          'Nothing here uses boric acid’s Lewis-acid equilibrium — this reaction is ordinary metathesis stoichiometry; the equilibrium behaviour of H<sub>3</sub>BO<sub>3</sub> only shows up once it is dissolved and titrated, as in worked example 3.',
        ],
        ans: '24.72 g (24.7 g to three significant figures).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Electron count and bonding in diborane',
        q: 'Show that B<sub>2</sub>H<sub>6</sub> is electron-deficient relative to an ethane-like structure, and state how many 3c–2e bonds it contains.',
        steps: [
          'Total valence electrons: boron contributes 3 each and hydrogen 1 each, so 2(3) + 6(1) = 12 electrons, i.e. 6 electron pairs. An ethane-type skeleton H<sub>3</sub>B–BH<sub>3</sub> would require six terminal B–H bonds plus one B–B bond — seven 2c–2e bonds, i.e. 7 electron pairs, one more than diborane actually has. The molecule resolves this shortfall by using four of its six pairs for the four ordinary terminal B–H bonds (two per boron), and the remaining two pairs are each delocalised over a B–H–B three-centre unit — the two bridge bonds. Each boron is sp<sup>3</sup> hybridised, contributing one hybrid orbital to each of its two terminal bonds, one to each bridge, with all four hybrid orbitals used.',
          'The bridging B–H bonds are both longer and weaker than the terminal ones because each electron pair there is shared across three nuclei instead of two.',
        ],
        ans: '12 valence electrons (6 pairs); 4 terminal 2c–2e bonds plus 2 bridging 3c–2e (“banana”) bonds.',
      },
      {
        t: 'ex',
        tag: 'NEET — Boric acid as a monobasic Lewis acid',
        q: 'A 0.100 M aqueous solution of orthoboric acid is used in an acid-base titration against standard NaOH. What is the normality of the boric acid solution, and why is it not three times the molarity?',
        steps: [
          'Boric acid does not ionise as a Brønsted acid; it reacts with water as a Lewis acid,<br>B(OH)<sub>3</sub> + 2H<sub>2</sub>O ⇌ [B(OH)<sub>4</sub>]<sup>−</sup> + H<sub>3</sub>O<sup>+</sup>,<br>generating exactly one titratable proton per formula unit regardless of the three O–H groups present — those O–H hydrogens are not lost to the base at all; the acidic proton originates from the water molecule that boron’s empty orbital has captured. The <i>n</i>-factor for this reaction is therefore 1, so<br><i>N</i> = <i>n</i>-factor × <i>M</i> = 1 × 0.100',
          'Treating boric acid as tribasic (as its three hydroxyl groups might tempt you to) and writing <i>N</i> = 3 × 0.100 = 0.300 N is the single most common error associated with this compound. In practice glycerol or mannitol is added before titrating, because boric acid alone is too weak to give a sharp end point; the <i>n</i>-factor is still 1.',
        ],
        ans: '0.100 N.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Volume of hydrogen from aluminium and alkali',
        q: '5.40 g of aluminium reacts completely with excess hot aqueous NaOH. Calculate the volume of H<sub>2</sub> liberated at STP (273 K and 1 atm, 22.4 L per mole). (Al = 27.)',
        steps: [
          'The amphoteric reaction is<br>2Al(s) + 2NaOH(aq) + 6H<sub>2</sub>O(l) → 2Na[Al(OH)<sub>4</sub>](aq) + 3H<sub>2</sub>(g).',
          '<i>n</i>(Al) = 5.40/27 = 0.200 mol.',
          'From the equation, <i>n</i>(H<sub>2</sub>) = 3/2 × <i>n</i>(Al) = 3/2 × 0.200 = 0.300 mol.<br><i>V</i>(H<sub>2</sub>) = 0.300 × 22400 mL = 6720 mL',
          'The same 0.200 mol of aluminium, reacted instead with excess dilute HCl (2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>), gives an identical 3 ∶ 2 mole ratio of H<sub>2</sub> to Al and therefore the same 6.72 L — a direct numerical illustration of amphoterism: acid and base attack aluminium through different mechanisms but release hydrogen in the same stoichiometric ratio.',
        ],
        ans: '6.72 L.',
      },
      {
        t: 'ex',
        tag: 'JEE Main — Carbon monoxide reducing an oxide ore',
        q: 'What volume of CO gas, measured at STP (273 K and 1 atm, 22.4 L per mole), is required to completely reduce 32.0 g of Fe<sub>2</sub>O<sub>3</sub>? (Fe = 56, O = 16.)',
        steps: [
          'Fe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) → 2Fe(s) + 3CO<sub>2</sub>(g).',
          'Molar mass of Fe<sub>2</sub>O<sub>3</sub> = 2(56) + 3(16) = 112 + 48 = 160 g mol<sup>−1</sup>.',
          '<i>n</i>(Fe<sub>2</sub>O<sub>3</sub>) = 32.0/160 = 0.200 mol ⇒ <i>n</i>(CO) = 3 × 0.200 = 0.600 mol.<br><i>V</i>(CO) = 0.600 × 22400 mL = 13440 mL',
          'This is the same reducing role CO plays wherever it appears in metallurgy — its carbon (oxidation state +2) gives up two electrons to reach +4, ending up as CO<sub>2</sub> while the metal oxide is reduced to the free metal.',
        ],
        ans: '13.44 L (13.4 L to three significant figures).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced — Deducing the charge on a linked silicate ion',
        q: 'Two SiO<sub>4</sub> tetrahedra share exactly one corner oxygen atom. Deduce the formula and charge of the resulting silicate ion.',
        steps: [
          'Each isolated SiO<sub>4</sub><sup>4−</sup> tetrahedron has four oxygens, each carrying a formal charge of −1 (four such oxygens giving the ion’s total −4 charge). When two tetrahedra share one corner, that shared oxygen becomes a <b>bridging</b> oxygen bonded to both silicon atoms, satisfying both of its bonds and carrying no residual negative charge (much like the oxygen in an ether). Counting atoms: two silicons contribute 2 × 4 = 8 oxygen positions in total, but one oxygen is counted once, not twice, because it is shared, giving 8 − 1 = 7 distinct oxygen atoms overall — six of them terminal (non-bridging, charge −1 each) and one bridging (charge 0).<br>Total charge = 6 × (−1) + 1 × (0) = −6.',
          'The same corner-counting logic, applied to an infinite chain, sheet, or fully three-dimensional framework of shared tetrahedra, generates the chain-silicate unit (SiO<sub>3</sub><sup>2−</sup>)<sub><i>n</i></sub>, the sheet-silicate unit (Si<sub>2</sub>O<sub>5</sub><sup>2−</sup>)<sub><i>n</i></sub>, and, when every corner is shared, electrically neutral SiO<sub>2</sub> itself.',
        ],
        ans: 'Si<sub>2</sub>O<sub>7</sub><sup>6−</sup>, the pyrosilicate (disilicate) ion — the structural motif found in minerals such as thortveitite.',
      },
      {
        t: 'ex',
        tag: 'NEET — Explaining the stability of Tl+ over Tl3+',
        q: 'Given <i>E</i>°(Al<sup>3+</sup>/Al) = −1.66 V and <i>E</i>°(Tl<sup>3+</sup>/Tl<sup>+</sup>) = +1.25 V, comment on the relative ease of forming M<sup>3+</sup> ions for aluminium and thallium, and on which metal is the more electropositive.',
        steps: [
          'A large negative <i>E</i>° for Al<sup>3+</sup>/Al means aluminium loses electrons to form Al<sup>3+</sup> readily and spontaneously in solution — aluminium is a strongly electropositive metal that comfortably reaches its group oxidation state. Thallium’s strongly positive <i>E</i>° for the Tl<sup>3+</sup>/Tl<sup>+</sup> couple (+1.25 V) means that reduction of Tl<sup>3+</sup> to Tl<sup>+</sup> is favoured; equivalently, Tl<sup>3+</sup> is a poor species to form and, once formed, is a powerful oxidising agent that is readily reduced. This is the inert pair effect in numbers: the poorly shielded 6s<sup>2</sup> pair in thallium resists oxidation to the +3 state, so thallium is comparatively stable as Tl<sup>+</sup> rather than Tl<sup>3+</sup>. (Like for like with Al<sup>3+</sup>/Al, the couple is Tl<sup>3+</sup>/Tl, <i>E</i>° ≈ +0.72 V: still positive, so the conclusion is the same.)',
        ],
        ans: 'Aluminium forms Al<sup>3+</sup> far more readily than thallium forms Tl<sup>3+</sup>, and aluminium is therefore the more electropositive of the two metals in its group oxidation state — even though thallium sits lower in the group, where metallic character is usually expected to be strongest.',
      },

      // Section 7 — Practice Exercises · pp. 470–471 (answers paired with their questions)
      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Arrange BF<sub>3</sub>, BCl<sub>3</sub>, BBr<sub>3</sub> and BI<sub>3</sub> in increasing order of Lewis acid strength, and explain the reasoning in one line.',
            a: 'BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>. Back donation of a halogen lone pair into boron’s empty 2p orbital is strongest for the well-size-matched fluorine and weakens down the halogen group, so BF<sub>3</sub>’s electron deficiency is most “satisfied” already and it is the weakest Lewis acid of the four, despite fluorine being the most electronegative halogen.',
          },
          {
            q: '[JEE Main] Explain why PbCl<sub>2</sub> is a stable, isolable compound while PbCl<sub>4</sub> decomposes readily on heating, and why SnCl<sub>2</sub> is commonly used as a reducing agent.',
            a: 'The inert pair effect makes the 6s<sup>2</sup> electrons of lead reluctant to participate in bonding, so Pb(II) (leaving 6s<sup>2</sup> untouched) is the thermodynamically favoured state and Pb(IV) compounds are strong oxidants that revert to Pb(II). Sn(II), one row up where the inert pair effect is weaker, is comparatively easily oxidised to the more stable-for-that-period Sn(IV), which is exactly what makes it a good reducing agent toward other species.',
          },
          {
            q: '[JEE Main] Calculate the volume of H<sub>2</sub> gas liberated at STP (273 K and 1 atm, 22.4 L per mole) when 2.70 g of aluminium reacts completely with excess dilute HCl. (Al = 27.)',
            a: '2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>; <i>n</i>(Al) = 2.70/27 = 0.100 mol; <i>n</i>(H<sub>2</sub>) = (3/2)(0.100) = 0.150 mol; <i>V</i> = 0.150 × 22400 = 3360 mL = 3.36 L.',
          },
          {
            q: '[JEE Advanced] The B–F bond length in BF<sub>3</sub> is 130 pm, but in BF<sub>4</sub><sup>−</sup> it is 143 pm. Account for the difference in terms of hybridisation and π bonding.',
            a: 'BF<sub>3</sub> is trigonal planar, boron sp<sup>2</sup> hybridised with one empty 2p orbital available for pπ–pπ back donation from a fluorine lone pair, giving the B–F bond partial double-bond character and shortening it. In BF<sub>4</sub><sup>−</sup> boron is sp<sup>3</sup> hybridised with all four orbitals used in ordinary σ bonds and no empty orbital remaining, so no back bonding is possible and the bond is a normal, longer single bond.',
          },
          {
            q: '[NEET] SiCl<sub>4</sub> is readily hydrolysed by water, but CCl<sub>4</sub> is not, even though both are tetrahedral covalent tetrachlorides. Explain.',
            a: 'Silicon has accessible, empty 3d orbitals into which an incoming water molecule’s lone pair can coordinate before a chloride leaves, opening a low-energy hydrolysis pathway. Carbon, restricted to the <i>n</i> = 2 shell, has no such orbital available, so water cannot attack the electron-precise, sterically shielded carbon centre, and CCl<sub>4</sub> is kinetically inert to hydrolysis.',
          },
          {
            q: '[JEE Main] State the order of catenation tendency across C, Si, Ge, Sn and Pb, and name the single physical quantity that governs this order.',
            a: 'C ≫ Si > Ge ≈ Sn ≫ Pb (lead shows essentially none). The order is governed by the E–E bond enthalpy, which falls steadily down the group (348, 297, 260, 240 kJ mol<sup>−1</sup> for C, Si, Ge, Sn respectively).',
          },
          {
            q: '[NEET] State the hybridisation of carbon in (a) CO<sub>3</sub><sup>2−</sup>, (b) diamond, (c) graphite, and (d) CO<sub>2</sub>.',
            a: '(a) sp<sup>2</sup> (three σ bonds plus a delocalised π system across the three C–O bonds, as in the carbonate resonance structures); (b) sp<sup>3</sup> (tetrahedral network); (c) sp<sup>2</sup> (planar hexagonal sheets with a delocalised π system); (d) sp (linear, two σ and two π bonds).',
          },
          {
            q: '[JEE Main] What mass of CaCO<sub>3</sub> must be decomposed to produce 11.2 L of CO<sub>2</sub> measured at STP (273 K and 1 atm, 22.4 L per mole)? (Ca = 40, C = 12, O = 16.)',
            a: 'CaCO<sub>3</sub> → CaO + CO<sub>2</sub>; <i>n</i>(CO<sub>2</sub>) = 11.2/22.4 = 0.500 mol = <i>n</i>(CaCO<sub>3</sub>); mass = 0.500 × 100 = 50.0 g.',
          },
          {
            q: '[JEE Advanced] Anhydrous AlCl<sub>3</sub> exists as the dimer Al<sub>2</sub>Cl<sub>6</sub> in the vapour phase, yet dissolves in water to give hydrated Al<sup>3+</sup>(aq) and hydrolyses further to give an acidic solution. Explain both observations in terms of aluminium’s bonding.',
            a: 'In the vapour, each aluminium in monomeric AlCl<sub>3</sub> is short of an octet (six electrons around it), so two molecules dimerise, with a lone pair from a chlorine on each unit donating into the empty orbital on the aluminium of the other, forming two bridging Al–Cl–Al bonds and completing both octets — structurally analogous to the diborane bridge, but here using ordinary 2c–2e dative bonds rather than 3c–2e bonds. In water, aluminium’s empty 3d orbitals let it expand its coordination to six, giving the octahedral [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> ion; the high charge density of the small, triply charged Al<sup>3+</sup> centre then polarises the coordinated water molecules enough to release protons, making the solution acidic.',
          },
          {
            q: '[NEET] State one industrial use each of (a) silicones and (b) zeolites, and identify the structural feature of each material that makes that use possible.',
            a: '(a) Silicones are used as water-proofing agents/sealants because the silicon backbone is sheathed in non-polar alkyl or aryl groups, making the polymer strongly hydrophobic. (b) Zeolites (e.g. ZSM-5) are used as shape-selective cracking/isomerisation catalysts and as ion-exchangers for water softening, both made possible by their open, channelled aluminosilicate framework carrying exchangeable cations.',
          },
        ],
      },

      // Section 8 — Common Pitfalls & Pro-Tips · p. 472
      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Boric acid is monobasic, never tribasic.</b> All three O–H groups stay intact; the titratable proton is donated by an attacking water molecule after boron accepts its hydroxide, not by boric acid itself. Use <i>n</i>-factor = 1, always.',
          '<b>BF<sub>3</sub> is the weakest boron trihalide Lewis acid, not the strongest.</b> Electronegativity intuition says fluorine should make boron most electron-hungry; back bonding overrides that intuition specifically for BF<sub>3</sub>. The order BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub> is a memorised exception, not a derivation from electronegativity.',
          '<b>Inert pair effect stabilises the lower oxidation state as you go down a group</b>, not the higher one. Tl<sup>+</sup> is more stable than Tl<sup>3+</sup>; Pb<sup>2+</sup> is more stable than Pb<sup>4+</sup>. A frequent slip is to remember “inert pair effect” as a keyword without remembering which direction it points.',
          '<b>PbCl<sub>4</sub> is the oxidant; SnCl<sub>2</sub> is the reductant.</b> These two get swapped constantly under exam pressure because both involve group 14 chlorides in unusual states — anchor them to the inert pair rule: lead “wants” to be +2, so its +4 compound is unstable and oxidising; tin at +2 still “wants” to become the period’s more usual +4, so it reduces other species while doing so.',
          '<b>The diagonal relationship is B–Si, not B–Al.</b> Aluminium is boron’s group neighbour but has quite different chemistry (metallic, forms genuine Al<sup>3+</sup>, amphoteric oxide); it is silicon, one row down and one column right, that mirrors boron’s covalent, acidic network-oxide, volatile-hydride chemistry.',
          '<b>Maximum covalence 4 for B and C is about absent d orbitals, not about valence electron count.</b> Boron has only 3 valence electrons yet can still form four bonds (BF<sub>4</sub><sup>−</sup>) by using an empty orbital as an acceptor; the ceiling of 4 comes from having only four orbitals (2s, 2p<sub><i>x</i></sub>, 2p<sub><i>y</i></sub>, 2p<sub><i>z</i></sub>) total in the valence shell, not from the electron count.',
          '<b>SiO<sub>2</sub> is a network solid, not a small molecule like CO<sub>2</sub></b>, because effective pπ–pπ bonding needs compact, size-matched orbitals that silicon’s large 3p orbitals cannot provide with oxygen’s small 2p orbital — every Si–O bond in silica is a single bond, and the only way to satisfy both atoms’ valences with single bonds alone is corner-sharing into an infinite lattice.',
          '<b>Graphite, not diamond, is the reference state for carbon</b> (Δ<sub>f</sub><i>H</i>° = 0); diamond is metastable, higher in energy, and converts to graphite only immeasurably slowly at ordinary conditions — “hardest” does not mean “most stable.”',
          '<b>Amphoterism belongs to Al<sub>2</sub>O<sub>3</sub>/Ga<sub>2</sub>O<sub>3</sub>, not the whole group.</b> B<sub>2</sub>O<sub>3</sub> is purely acidic and In<sub>2</sub>O<sub>3</sub>/Tl<sub>2</sub>O<sub>3</sub> are purely basic — amphoteric character is a middle-of-the-group phenomenon, not a universal group-13 property.',
          '<b>Diborane’s bridge bonds, not its terminal bonds, are the unusual ones.</b> The four terminal B–H bonds are perfectly ordinary 2c–2e bonds; only the two B–H–B bridges are the exotic 3c–2e banana bonds, and they are the longer, weaker bonds in the molecule, not the shorter ones.',
        ],
      },

      // Section 9 — What JEE & NEET Actually Ask · pp. 473–474
      { t: 'part', title: 'What JEE and NEET actually ask' },
      {
        t: 'p',
        html: 'Across recent JEE Main, JEE Advanced and NEET papers, group 13/14 chemistry is tested almost entirely through a small, recurring set of concept checks rather than heavy calculation — the arithmetic that does appear is usually a single stoichiometry step layered on top of one of these concepts.',
      },
      {
        t: 'defgrid',
        title: 'Theme — Typical face of the question',
        rows: [
          { k: 'Inert pair effect', v: '“Which oxidation state is more stable for Tl/Pb?”; explain PbCl<sub>2</sub> vs PbCl<sub>4</sub> stability' },
          {
            k: 'Boric acid basicity',
            v: '“Is H<sub>3</sub>BO<sub>3</sub> a protic acid?”; its <i>n</i>-factor in a titration; product of B(OH)<sub>3</sub> + water',
          },
          { k: 'Diborane bonding', v: 'Number of 3c–2e bonds; hybridisation of B; which B–H bonds are longer' },
          { k: 'Catenation order', v: 'Rank C, Si, Ge, Sn, Pb; link the order to bond enthalpy' },
          {
            k: 'Allotrope properties',
            v: 'Hybridisation and conductivity of diamond vs graphite; why fullerene is the only molecular allotrope',
          },
          {
            k: 'Amphoterism of Al',
            v: 'Reactions of Al with both dilute acid and alkali; identify the complex ion formed in each',
          },
          {
            k: 'Silicones/zeolites',
            v: 'Identify the repeating unit / structural feature responsible for a named industrial use',
          },
          {
            k: 'BF<sub>3</sub> vs BCl<sub>3</sub> Lewis acidity',
            v: 'Rank the boron trihalides and justify with back bonding, not electronegativity',
          },
        ],
      },
      { t: 'p', html: '<b>Representative questions and answers</b>' },
      {
        t: 'practice',
        items: [
          {
            q: '“Why is Tl<sup>+</sup> more stable than Tl<sup>3+</sup> in aqueous solution?”',
            a: 'The poorly shielded 6s<sup>2</sup> pair in thallium resists oxidation to +3 (inert pair effect), so Tl<sup>3+</sup>, when formed, readily oxidises other species and is itself reduced back to Tl<sup>+</sup> (Tl<sup>3+</sup>/Tl<sup>+</sup> has a strongly positive <i>E</i>° = +1.25 V).',
          },
          {
            q: '“Is boric acid a protic acid? Explain.”',
            a: 'No. It is a Lewis acid; it accepts OH<sup>−</sup> from a water molecule, B(OH)<sub>3</sub> + 2H<sub>2</sub>O ⇌ [B(OH)<sub>4</sub>]<sup>−</sup> + H<sub>3</sub>O<sup>+</sup>, and behaves as a weak monobasic acid in titration.',
          },
          {
            q: '“How many three-centre two-electron bonds does diborane contain, and what is boron’s hybridisation?”',
            a: 'Two 3c–2e bridge bonds; each boron is sp<sup>3</sup> hybridised.',
          },
          {
            q: '“Arrange C, Si, Ge, Sn in decreasing order of catenation tendency.”',
            a: 'C ≫ Si > Ge ≈ Sn, governed by falling E–E bond enthalpy down the group.',
          },
          {
            q: '“Which allotrope of carbon conducts electricity, and why?”',
            a: 'Graphite, because each carbon is sp<sup>2</sup> hybridised with one electron left in a delocalised π system spread over the planar sheet, giving mobile charge carriers along the layer (diamond has no such delocalised electrons; it is an insulator).',
          },
          {
            q: '“Write the reactions that demonstrate the amphoteric nature of aluminium.”',
            a: '2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub> and 2Al + 2NaOH + 6H<sub>2</sub>O → 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub> — dissolution with evolution of hydrogen in both a strong acid and a strong base.',
          },
          {
            q: '“What structural feature makes silicones hydrophobic?”',
            a: 'The Si–O backbone is fully sheathed in non-polar alkyl/aryl side groups, which present a hydrocarbon-like, non-polar exterior to water.',
          },
          {
            q: '“Why is BCl<sub>3</sub> a stronger Lewis acid than BF<sub>3</sub> even though fluorine is more electronegative?”',
            a: 'Back donation of a fluorine lone pair into boron’s empty 2p orbital in BF<sub>3</sub> partially fills that orbital before any external base arrives, reducing boron’s residual electron-accepting ability; this back donation is much weaker for the larger, more diffuse chlorine orbital in BCl<sub>3</sub>, so more of boron’s electron deficiency is left “open” for an incoming Lewis base.',
          },
        ],
      },
      {
        t: 'p',
        html: 'The consistent examiner strategy across all eight themes is the same: state a plausible, intuitive rule (electronegativity should predict Lewis acidity; higher oxidation state should be more stable; more O–H groups should mean higher basicity) and then test whether you know the specific physical reason group 13/14 chemistry breaks that intuitive rule. Preparing this chapter well means being able to name the mechanism — back bonding, inert pair effect, absence of d orbitals, poor d/f-shielding — behind every one of these reversals, not just the reversed fact itself.',
      },
    ],
  },
];
