import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 03 to 05: Sections 3, 4 and 5 of the Class 11 Chemistry
 * Master Reference's p-block chapter, word for word. The book runs the chapter
 * as one block of nine "Section N —" headings; the app makes each of Sections
 * 1–5 a topic (founder's decision, 2026-10-31). Topic 03, Important Compounds
 * of Boron and Aluminium (from the middle of p. 460 to the middle of p. 462),
 * Topic 04, Group 14: The Carbon Family (p. 462 to the top of p. 465), and
 * Topic 05, Important Compounds of Carbon and Silicon (p. 465 to the top of
 * p. 467), are each split at the book's own sub-headings; bold run-in heads
 * ("Bonding.", "Covalent radius", "Zeolites") stay bold leads inside their
 * part, and Section 4's text before its first sub-heading is "Introduction".
 * These pages print no figure and draw no structure. Hybrid and orbital labels
 * are upright (sp<sup>3</sup>, 2p), bonds use an en dash (B–H, C–C), and the
 * standard-state mark is ° as in Chapters 5 and 6.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 460–462 ─────────────────────────
  {
    n: '03',
    title: 'Important Compounds of Boron and Aluminium',
    kalam: 'Borax is boron’s single most important compound and its formula is deceptive.',
    blocks: [
      { t: 'part', title: 'Borax, Na2B4O7·10H2O' },
      {
        t: 'p',
        html: 'Borax is boron’s single most important compound and its formula is deceptive: it is not built from an isolated B<sub>4</sub>O<sub>7</sub><sup>2−</sup> unit. The correct structural anion is the tetranuclear [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup>, in which two boron atoms are trigonal-planar (sp<sup>2</sup>) and two are tetrahedral (sp<sup>3</sup>), so the accurate formula is written Na<sub>2</sub>[B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]·8H<sub>2</sub>O — this rewriting of the same overall composition is a favourite “which formula is correct” distractor. Borax dissolves in water to give an <b>alkaline</b> solution because it hydrolyses to boric acid and sodium hydroxide:<br>Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 7H<sub>2</sub>O → 2NaOH + 4H<sub>3</sub>BO<sub>3</sub>.',
      },
      {
        t: 'p',
        html: 'On strong heating, borax first loses its water of crystallisation and swells up, then melts to a clear liquid that solidifies on cooling into a transparent glass — the <b>borax bead</b>:<br>Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O →<sup>Δ</sup> Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> →<sup>Δ</sup> 2NaBO<sub>2</sub> (sodium metaborate) + B<sub>2</sub>O<sub>3</sub> (boric anhydride).',
      },
      {
        t: 'p',
        html: 'This borate glass dissolves transition-metal oxides to give characteristically coloured metaborates — heating borax with CoO on a platinum loop gives a blue Co(BO<sub>2</sub>)<sub>2</sub> bead — the classical <b>borax bead test</b> used to identify transition-metal ions by the colour of the bead.',
      },

      { t: 'part', title: 'Orthoboric acid, H3BO3' },
      {
        t: 'p',
        html: 'Boric acid is a soft, white, soapy-feeling crystalline solid, sparingly soluble in cold water but far more soluble in hot water. It has a <b>layer structure</b>: planar BO<sub>3</sub> units are linked into sheets by an extensive network of hydrogen bonds, which is exactly why it flakes and feels soapy — the sheets slide over one another as graphite’s layers do.',
      },
      {
        t: 'p',
        html: 'The fact examiners test most relentlessly is this: boric acid is <b>not</b> a protic (Brønsted) acid, and it is emphatically <b>not</b> tribasic despite having three O–H groups. It is a <b>weak, monobasic Lewis acid</b>. It does not ionise to release its own protons; instead the neutral, electron-deficient boron atom accepts a hydroxide ion supplied by a water molecule, and the proton that is “released” comes from that attacking water molecule, not from boric acid itself:<br>B(OH)<sub>3</sub> + 2H<sub>2</sub>O ⇌ [B(OH)<sub>4</sub>]<sup>−</sup> + H<sub>3</sub>O<sup>+</sup>.',
      },
      {
        t: 'p',
        html: 'Because only one such equilibrium proton is generated per formula unit, boric acid behaves as a monobasic acid in titration, with <i>n</i>-factor = 1 — never 3. It is too weak (p<i>K</i><sub>a</sub> ≈ 9.2) to titrate on its own; glycerol or mannitol is added first, which makes it a stronger monobasic acid with a sharp end point. On heating past about 370 K it loses water stepwise, first to metaboric acid and finally to boric oxide:<br>H<sub>3</sub>BO<sub>3</sub> →<sup>Δ</sup> HBO<sub>2</sub> →<sup>Δ</sup> B<sub>2</sub>O<sub>3</sub>.',
      },
      {
        t: 'p',
        html: 'Dilute boric acid solution is used medicinally as a mild antiseptic and eyewash.',
      },

      { t: 'part', title: 'Diborane, B2H6' },
      {
        t: 'p',
        html: 'Diborane is the simplest boron hydride and the gateway to an entire family of electron-deficient boranes. It can be made in several standard ways:<br>4BF<sub>3</sub> + 3LiAlH<sub>4</sub> → 2B<sub>2</sub>H<sub>6</sub> + 3LiF + 3AlF<sub>3</sub> (in diethyl ether),<br>2NaBH<sub>4</sub> + I<sub>2</sub> → B<sub>2</sub>H<sub>6</sub> + 2NaI + H<sub>2</sub> (convenient laboratory route),<br>2BF<sub>3</sub> + 6NaH →<sup>450 K</sup> B<sub>2</sub>H<sub>6</sub> + 6NaF (industrial route).',
      },
      {
        t: 'p',
        html: 'It is a colourless, highly toxic gas (b.p. 180 K) that ignites spontaneously in air, releasing an enormous amount of heat (Δ<sub>c</sub><i>H</i>° = −1976 kJ mol<sup>−1</sup>), and it is hydrolysed rapidly by water back to boric acid: B<sub>2</sub>H<sub>6</sub>(g) + 6H<sub>2</sub>O(l) → 2B(OH)<sub>3</sub>(aq) + 6H<sub>2</sub>(g).',
      },
      {
        t: 'p',
        html: '<b>Bonding.</b> Counting valence electrons in B<sub>2</sub>H<sub>6</sub>: each boron contributes 3 and each hydrogen contributes 1, for 2(3) + 6(1) = 12 valence electrons in total — only six electron pairs. A molecule with the connectivity of ethane, H<sub>3</sub>B–BH<sub>3</sub>, would need seven bonding pairs (six B–H plus one B–B), so diborane is short by exactly one pair: it is <b>electron-deficient</b>. Structurally the four terminal hydrogens and the two borons lie in one plane, while two “bridging” hydrogens sit one above and one below this plane, each bridging both boron atoms. The four terminal B–H bonds are ordinary two-centre, two-electron (2c–2e) bonds and use four of the six available electron pairs; the remaining two electron pairs are spread across the two B–H–B bridges, each bridge being a <b>three-centre, two-electron (3c–2e)</b> bond — colloquially a “banana bond” — in which a single pair of electrons is delocalised over one hydrogen 1s orbital and one sp<sup>3</sup> hybrid orbital from each boron simultaneously. Each boron is sp<sup>3</sup> hybridised, using three of its four hybrid orbitals, each holding one of its three electrons, for its two terminal B–H bonds and one bridge, and the fourth, empty hybrid orbital to complete the second bridge. Because a bridging B–H bond shares its electron pair over three atoms rather than two, it is longer and weaker than a terminal B–H bond — a distinction JEE Advanced likes to test by asking which type of bond breaks first on mild heating (the bridge bonds).',
      },
      {
        t: 'p',
        html: 'Diborane’s electron deficiency also makes it a strong Lewis acid at boron: it cleaves symmetrically with strong Lewis bases to give simple monomeric adducts, B<sub>2</sub>H<sub>6</sub> + 2NMe<sub>3</sub> → 2BH<sub>3</sub>·NMe<sub>3</sub>, and with CO similarly, B<sub>2</sub>H<sub>6</sub> + 2CO → 2BH<sub>3</sub>·CO. With ammonia the reaction is unusual: it first gives an ionic adduct [BH<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>[BH<sub>4</sub>]<sup>−</sup>, which on further heating loses H<sub>2</sub> and cyclises into <b>borazine</b>, B<sub>3</sub>N<sub>3</sub>H<sub>6</sub> — a six-membered ring of alternating B and N atoms, isoelectronic with benzene and nicknamed “inorganic benzene.”',
      },
      {
        t: 'p',
        html: 'Boron also forms the tetrahedral <b>hydridoborate (borohydride)</b> ion [BH<sub>4</sub>]<sup>−</sup>; the sodium and lithium salts NaBH<sub>4</sub> and LiBH<sub>4</sub> are prepared from the metal hydride and diborane in ether, 2MH + B<sub>2</sub>H<sub>6</sub> → 2M<sup>+</sup>[BH<sub>4</sub>]<sup>−</sup>, and both are widely used as mild, selective reducing agents in organic synthesis.',
      },

      { t: 'part', title: 'Uses of boron and aluminium compounds' },
      {
        t: 'p',
        html: 'Boron’s hardness, low density and high melting point make its fibres useful in bullet-resistant vests and lightweight aircraft composites; the <sup>10</sup>B isotope’s exceptional neutron-absorbing ability puts metal borides into reactor control rods and shielding. Borax and boric acid together are the basis of heat-resistant borosilicate glass (Pyrex) and glass wool, and borax additionally serves as a metal-soldering flux and a soap constituent. Aluminium’s combination of low density, high tensile strength and excellent electrical conductivity (on a weight basis, roughly twice that of copper) makes it central to aircraft, transmission cables, packaging foil, utensils and construction alloys.',
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 462–465 ─────────────────────────
  {
    n: '04',
    title: 'Group 14: The Carbon Family',
    kalam: 'Group 14 repeats every theme of group 13 one column further right, with the maximum oxidation state now +4.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Group 14 — carbon, silicon, germanium, tin, lead (and the synthetic flerovium) — repeats every theme of group 13 one column further right, with the maximum oxidation state now +4. Carbon and silicon are non-metals, germanium is a metalloid, and tin and lead are soft, low-melting metals; the group therefore crosses the full non-metal-to-metal spectrum exactly as group 13 does, just shifted down by one row of metallic onset.',
      },
      {
        t: 'p',
        html: '<b>Covalent radius</b> rises sharply from carbon (77 pm) to silicon (118 pm), then increases only slightly through germanium, tin and lead (122, 140, 146 pm) — the classic pattern produced once filled d (from Ge onward) and f (from Pb onward) subshells begin poorly shielding the nucleus.',
      },
      {
        t: 'p',
        html: '<b>Ionisation enthalpy</b> is higher across group 14 than the corresponding group 13 element in every row (a smaller, more tightly held p<sup>2</sup> configuration versus p<sup>1</sup>), and it falls down the group with the same kind of Si–Ge–Sn–Pb irregularity seen in group 13, for the identical reason — poor shielding by intervening d/f electrons partly cancels the expected fall, even producing a slight uptick from Sn to Pb.',
      },
      {
        t: 'p',
        html: '<b>Electronegativity</b> is slightly higher across group 14 than group 13 (smaller atoms), and is nearly constant from silicon through lead.',
      },
      {
        t: 'table',
        title: null,
        head: ['Element', 'C', 'Si', 'Ge', 'Sn', 'Pb'],
        rows: [
          ['Covalent radius / pm', '77', '118', '122', '140', '146'],
          ['Δ<sub>i</sub><i>H</i><sub>1</sub> / kJ mol<sup>−1</sup>', '1086', '786', '761', '708', '715'],
          ['Electronegativity', '2.5', '1.8', '1.8', '1.8', '1.9'],
        ],
      },

      { t: 'part', title: 'Oxidation states and the inert pair effect, again' },
      {
        t: 'p',
        html: 'Carbon and silicon overwhelmingly favour +4; carbon also shows negative oxidation states in its hydrides and organic compounds. Moving down the group the +2 state gains ground in the order Ge < Sn < Pb — the same inert-pair logic as group 13, now applied to a pair of s electrons that would need to unpair and promote to reach +4. Germanium forms mostly +4 compounds with only a few genuine +2 compounds; tin forms stable compounds in both states, with Sn(II) acting as a useful reducing agent (readily oxidised back to the more stable-for-the-period Sn(IV) by the very species it is reducing); lead reverses the top-of-the-group pattern entirely — Pb(II) is now the stable state and Pb(IV) is a strong oxidising agent. Concretely: PbCl<sub>2</sub> is a stable, isolable solid, while PbCl<sub>4</sub> is thermodynamically unstable and decomposes on warming to PbCl<sub>2</sub> and Cl<sub>2</sub> — the reverse of carbon and silicon, for which the group oxidation state +4 is the stable one. SnCl<sub>2</sub>, correspondingly, is a well-known reducing agent (it reduces Hg<sup>2+</sup> to Hg, for instance), while SnCl<sub>4</sub> is the group’s ordinary, stable tetravalent halide.',
      },
      {
        t: 'p',
        html: 'In the tetravalent state, carbon’s compounds (e.g. CCl<sub>4</sub>) are <b>electron-precise</b> — eight electrons, four bonding pairs, around the central atom — so they are neither electron donors nor acceptors and, critically, carbon cannot expand beyond four bonds. The heavier members, with accessible d orbitals, both expand their coordination number beyond four (giving species such as [SiF<sub>6</sub>]<sup>2−</sup>, [GeCl<sub>6</sub>]<sup>2−</sup>, [Sn(OH)<sub>6</sub>]<sup>2−</sup>, all sp<sup>3</sup>d<sup>2</sup> at the central atom) and readily hydrolyse their tetrahalides, because a lone pair from an attacking water molecule can first coordinate into an empty d orbital on the central atom before the halide leaves. SiCl<sub>4</sub> is hydrolysed rapidly by water for exactly this reason, while CCl<sub>4</sub> — with no d orbital to accept the incoming lone pair, and no other mechanistic pathway available — survives water indefinitely.',
      },
      {
        t: 'p',
        html: 'Halide reactivity has one further irregularity worth remembering: PbI<sub>4</sub> does not exist, because Pb(IV) is a strong enough oxidising agent to oxidise iodide ions to iodine, so PbI<sub>4</sub> would decompose at once to PbI<sub>2</sub> + I<sub>2</sub>. This is the inert pair effect (Pb(IV) is unstable relative to Pb(II)) blocking a specific halide rather than an oxidation state in general.',
      },

      { t: 'part', title: 'Catenation' },
      {
        t: 'p',
        html: 'Carbon’s outstanding structural property is <b>catenation</b> — the ability of atoms of the same element to link into extended chains and rings via strong homonuclear bonds. The tendency falls sharply down the group, tracking the E–E bond enthalpy:',
      },
      {
        t: 'table',
        title: null,
        head: ['Bond', 'C–C', 'Si–Si', 'Ge–Ge', 'Sn–Sn'],
        rows: [['Bond enthalpy / kJ mol<sup>−1</sup>', '348', '297', '260', '240']],
      },
      {
        t: 'p',
        html: 'giving the order C ≫ Si > Ge ≈ Sn ≫ Pb — lead shows essentially no catenation at all. Carbon’s exceptional bond strength, combined with its unique ability to form strong pπ–pπ multiple bonds to itself, is what makes its allotropes, and organic chemistry generally, possible in the first place.',
      },

      { t: 'part', title: 'Allotropes of carbon' },
      {
        t: 'p',
        html: '• <b>Diamond</b> is a rigid three-dimensional covalent network in which every carbon is sp<sup>3</sup> hybridised and tetrahedrally bonded to four neighbours, with a C–C bond length of 154 pm. Because breaking the lattice means breaking directional covalent bonds throughout the whole crystal, diamond is the hardest known natural substance and has an extremely high melting point — hardness here is a structural property, not a property of any single bond.<br>• <b>Graphite</b> is a layered structure: within each layer, carbon is sp<sup>2</sup> hybridised, forming three σ bonds to neighbouring carbons in a planar hexagonal sheet (C–C bond length 141.5 pm) while the fourth electron occupies a delocalised π system spread across the whole sheet. Layers are held together only by weak van der Waals forces (interlayer spacing 340 pm), so graphite cleaves easily between sheets, giving it its softness and lubricating property, while the delocalised electrons make it a good conductor along the layers (and a poor one perpendicular to them).<br>• <b>Fullerenes</b>, discovered in 1985 (Kroto, Smalley and Curl; Nobel Prize 1996), are cage molecules made by vaporising graphite in an inert atmosphere. The most abundant and best characterised is C<sub>60</sub>, Buckminsterfullerene, a soccer-ball-shaped cage of twenty six-membered rings and twelve five-membered rings, in which every five-membered ring is fused only to six-membered rings (never to another five-membered ring). All sixty carbons are equivalent, sp<sup>2</sup> hybridised, each forming three σ bonds with the remaining electron delocalised over the cage — this aromatic delocalisation is why the molecule is stable. Fullerenes are the <b>only pure, molecular allotrope of carbon</b>: unlike diamond or graphite, a C<sub>60</sub> molecule has no unsatisfied “dangling” bonds at its edges, because it has no edges.',
      },
      {
        t: 'p',
        html: 'Graphite is the thermodynamically most stable form of carbon and is therefore assigned Δ<sub>f</sub><i>H</i>° = 0 by convention; diamond (+1.90 kJ mol<sup>−1</sup>) and C<sub>60</sub> (≈ +2.3 × 10<sup>3</sup> kJ per mol) both lie above graphite in energy (for C<sub>60</sub> this is about +38 kJ per mole of carbon atoms) — diamond is metastable at ordinary conditions, not thermodynamically favoured; it simply converts back to graphite too slowly to notice.',
      },
    ],
  },

  // ───────────────────────── Topic 05 · pp. 465–467 ─────────────────────────
  {
    n: '05',
    title: 'Important Compounds of Carbon and Silicon',
    kalam: 'Silicones are organosilicon polymers built from the repeating unit (R2SiO)n, where R is typically methyl or phenyl.',
    blocks: [
      { t: 'part', title: 'Carbon monoxide' },
      {
        t: 'p',
        html: 'CO forms from carbon burnt in a limited supply of oxygen, 2C(s) + O<sub>2</sub>(g) →<sup>Δ</sup> 2CO(g); commercially it is generated as <b>water gas</b> (CO + H<sub>2</sub>, from steam passed over red-hot coke) or <b>producer gas</b> (CO + N<sub>2</sub>, using air instead of steam), both major industrial fuels. In the CO molecule, carbon and oxygen are joined by one σ and two π bonds, :C≡O:, and a lone pair sits on carbon; this lone pair lets CO act as a σ-donor ligand toward metals, forming metal carbonyls, and it is also, by the same donating ability, the source of CO’s extreme toxicity. CO binds the iron centre of haemoglobin to form <b>carboxyhaemoglobin</b>, a complex roughly 300 times more stable than the corresponding oxyhaemoglobin complex; because the binding is so much stronger and so much slower to reverse, haemoglobin tied up as carboxyhaemoglobin can no longer transport oxygen, and prolonged exposure is fatal even at fairly low atmospheric CO concentrations. CO is also a powerful reducing agent, reducing most metal oxides other than those of the alkali metals, alkaline earth metals and aluminium — the basis of its use in metallurgical extraction, e.g. Fe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) →<sup>Δ</sup> 2Fe(s) + 3CO<sub>2</sub>(g).',
      },

      { t: 'part', title: 'Carbon dioxide' },
      {
        t: 'p',
        html: 'CO<sub>2</sub> is obtained by complete combustion of carbon or carbon fuels, or in the laboratory from a carbonate and dilute acid, CaCO<sub>3</sub>(s) + 2HCl(aq) → CaCl<sub>2</sub>(aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l). In the molecule, carbon is sp hybridised: its two sp hybrid orbitals form the two σ bonds to oxygen, while its remaining two unhybridised p electrons form two pπ–pπ bonds, one to each oxygen. The result is a <b>linear</b> molecule with two equal C=O bonds (115 pm) and, by symmetry, zero net dipole moment — the two C=O dipoles cancel, and resonance shortens each C=O bond. CO<sub>2</sub> dissolves in water to give carbonic acid, a weak diprotic acid that ionises in two steps,<br>H<sub>2</sub>CO<sub>3</sub>(aq) + H<sub>2</sub>O(l) ⇌ HCO<sub>3</sub><sup>−</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq),<br>HCO<sub>3</sub><sup>−</sup>(aq) + H<sub>2</sub>O(l) ⇌ CO<sub>3</sub><sup>2−</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq),<br>and the H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>−</sup> pair is precisely the buffer system that holds human blood pH between about 7.26 and 7.42 (NCERT’s figure; the clinical normal range is 7.35–7.45). Unlike CO, CO<sub>2</sub> is not poisonous at normal concentrations, but rising atmospheric CO<sub>2</sub> from fossil-fuel combustion and limestone decomposition is a major driver of the <b>greenhouse effect</b>, trapping outgoing thermal radiation and raising average atmospheric temperature.',
      },

      { t: 'part', title: 'Silicon dioxide, SiO2' },
      {
        t: 'p',
        html: 'Silica occurs in several interconvertible crystalline forms (quartz, cristobalite, tridymite) and, unlike CO<sub>2</sub>, is a <b>giant covalent three-dimensional network</b>: every silicon atom is tetrahedrally bonded to four oxygen atoms, and every oxygen atom in turn bridges to a second silicon, so that the entire crystal is one continuous covalent molecule rather than a collection of discrete SiO<sub>2</sub> units. The reason silicon cannot mimic carbon dioxide’s small, double-bonded, molecular structure is the same size-and-orbital argument from Topic 01: effective pπ–pπ overlap needs compact, well-matched 2p orbitals on both atoms, and silicon’s much larger, more diffuse 3p orbitals overlap far too poorly with oxygen’s 2p orbital to sustain a Si=O double bond. Silicon therefore satisfies its four bonds to oxygen entirely through single σ bonds, and the only way to do that while giving every oxygen two bonds (its own valence requirement) is to link every SiO<sub>4</sub> tetrahedron to four neighbours by corner-sharing, producing the extended lattice.',
      },
      {
        t: 'p',
        html: 'Because Si–O bonds are individually very strong, silica resists attack by halogens, hydrogen, most acids and most metals, but it is attacked by hydrofluoric acid and by hot concentrated alkali:<br>SiO<sub>2</sub> + 4HF → SiF<sub>4</sub> + 2H<sub>2</sub>O,<br>SiO<sub>2</sub> + 2NaOH → Na<sub>2</sub>SiO<sub>3</sub> + H<sub>2</sub>O.',
      },
      {
        t: 'p',
        html: 'Quartz’s piezoelectric response underlies quartz clocks and radio-frequency devices; silica gel is a common drying agent and chromatographic support.',
      },

      { t: 'part', title: 'Silicones' },
      {
        t: 'p',
        html: 'Silicones are organosilicon polymers built from the repeating unit (R<sub>2</sub>SiO)<sub><i>n</i></sub>, where R is typically methyl or phenyl. They are made from alkyl- or aryl-substituted chlorosilanes R<sub><i>n</i></sub>SiCl<sub>4−<i>n</i></sub> — obtained by passing methyl chloride over silicon with a copper catalyst at 573 K — which are then hydrolysed and allowed to condense-polymerise; adding a small proportion of the monofunctional (CH<sub>3</sub>)<sub>3</sub>SiCl caps the growing chains and controls their length. Because the silicon backbone is entirely surrounded by non-polar alkyl or aryl groups, silicones are strongly <b>water-repellent (hydrophobic)</b>, and they combine this with high thermal stability, high dielectric strength and good chemical resistance, which is why they see service as electrical insulators, greases, sealants, water-proofing agents for fabrics, and — being biologically inert — in surgical and cosmetic implants.',
      },

      { t: 'part', title: 'Silicates and zeolites' },
      {
        t: 'p',
        html: 'Silicate minerals are built from the same SiO<sub>4</sub><sup>4−</sup> tetrahedral unit as silica itself, but instead of every corner being shared (as in neutral SiO<sub>2</sub>), silicate anions share only some of their oxygen corners with neighbouring tetrahedra, leaving the rest as terminal, negatively charged oxygens whose charge is balanced by metal cations. Sharing one, two, three or all four corners generates, respectively, discrete dimeric units, rings or extended chains, sheets, or (when every corner is shared) the fully three-dimensional, electrically neutral network of silica itself — so the degree of corner-sharing is a direct dial on both the silicate’s structure (chain, ring, sheet, framework) and its overall charge.',
      },
      {
        t: 'p',
        html: '<b>Zeolites</b> are a framework silicate variant in which some silicon atoms are replaced by aluminium; because aluminium carries one fewer positive charge than silicon, each substitution leaves the aluminosilicate framework with an extra unit of negative charge, balanced by cations such as Na<sup>+</sup>, K<sup>+</sup> or Ca<sup>2+</sup> sitting in the framework’s channels. These channels give zeolites a large internal surface area and a well-defined pore size, which is exploited industrially: zeolites catalyse the cracking and isomerisation of hydrocarbons in petroleum refining, and <b>ZSM-5</b>, a synthetic zeolite, is used to convert alcohols directly into gasoline-range hydrocarbons. Because the framework cations are exchangeable, hydrated zeolites are also used as ion-exchangers to soften hard water — displacing dissolved Ca<sup>2+</sup> and Mg<sup>2+</sup> with the zeolite’s own Na<sup>+</sup>.',
      },
    ],
  },
];
