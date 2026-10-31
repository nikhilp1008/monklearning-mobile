import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topics 01 and 02: pp. 456–460 of the Class 11 Chemistry Master
 * Reference, word for word. The chapter’s opening paragraph (p. 456, before
 * Section 1) is the first part of Topic 01, “Introduction”. Topic 01 is the
 * book’s Section 1, General Introduction to the p-Block (pp. 456–457); Topic 02
 * is Section 2, Group 13: The Boron Family (pp. 458–460, ending before
 * Section 3 on p. 460).
 *
 * Parts: a section’s top-level headings. Section 1 has no display headings, so
 * its bold run-in heads (“Oxidation states.”, “Metallic character.”,
 * “Anomalous behaviour of the first member.”) are its parts, and its unheaded
 * first paragraph joins the chapter opening in “Introduction”. Section 2 has
 * display headings (“Oxidation states and the inert pair effect”, “Lewis
 * acidity of the trihalides”, “Reactivity”), which are its parts; the text
 * before the first one is “Introduction”, and its run-in heads (“Atomic
 * radius.” …) stay bold leads. These pages draw no figure or structure.
 * Orbital and hybrid labels are upright (2p, sp<sup>3</sup>d<sup>2</sup>), as in
 * the NCERT books; <i>n</i> in <i>n</i>s<sup>2</sup><i>n</i>p<sup>1</sup> is italic.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · Section 1 · pp. 456–457 ─────────────────────────
  {
    n: '01',
    title: 'General Introduction to the p-Block',
    kalam: 'In a p-block atom the last electron enters an outer p orbital.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The p-block is where the periodic table stops behaving predictably. Groups 1 and 2 hand you clean, monotonic trends — everything gets bigger and more metallic as you go down. The p-block instead delivers non-metals, metalloids and metals sitting inside the same group, oxidation states that flip in relative stability as you descend, and a first member (boron, carbon) that behaves like a different element entirely from the rest of its family. Groups 13 and 14 are where JEE and NEET extract the maximum number of “exceptions” per page: the inert pair effect, the anomalous behaviour of the second-period element, the diagonal relationship, and a set of named compounds — borax, diborane, boric acid, silicones, zeolites — each with its own structural quirk. None of this is arbitrary; every exception traces back to two physical causes — the small size and absent d-orbitals of the second-period element, and the poor shielding offered by filled d and f subshells lower down the group — and once you internalise those two causes, the “exceptions” stop being a list to memorise and become predictions you can derive. This chapter builds the general framework first, applies it to boron and aluminium, works through their signature compounds, repeats the exercise for the carbon family, and closes with the compounds and materials (CO, CO<sub>2</sub>, silica, silicones, zeolites) that JEE and NEET draw questions from most often.',
      },
      {
        t: 'p',
        html: 'In a p-block atom the last electron enters an outer p orbital. Since a set of p orbitals holds a maximum of six electrons, there are exactly six p-block groups, numbered 13 to 18, headed by boron, carbon, nitrogen, oxygen, fluorine and helium. Every member of a group shares the same valence-shell configuration <i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup> (helium is the sole exception, with 1s<sup>2</sup>), so group 13 is <i>n</i>s<sup>2</sup><i>n</i>p<sup>1</sup> and group 14 is <i>n</i>s<sup>2</sup><i>n</i>p<sup>2</sup>. What differs from element to element is the inner core — the electrons underneath the valence shell — and it is this inner core, not the valence configuration, that is responsible for almost every irregularity you will meet in this chapter.',
      },

      { t: 'part', title: 'Oxidation states' },
      {
        t: 'p',
        html: 'The maximum oxidation state a p-block element can show equals its total number of valence electrons, so group 13’s group oxidation state is +3 and group 14’s is +4. Alongside this group oxidation state, p-block elements frequently show a second state that is two units lower — +1 for group 13, +2 for group 14. For the lighter members of a group the group oxidation state is the more stable one; moving down the group, the state two units lower becomes progressively more stable. This swing is the <b>inert pair effect</b>: the valence <i>n</i>s<sup>2</sup> electron pair becomes increasingly reluctant to take part in bonding as you descend a group, because the effective nuclear charge experienced by these s electrons rises (poorly shielded by intervening d and, lower still, f electrons) while the energy separation between the <i>n</i>s and <i>n</i>p subshells widens, so promoting an s electron into bonding costs more than it recovers in bond energy. In group 13 this means Tl is more stable as Tl<sup>+</sup> than as Tl<sup>3+</sup>; in group 14 it means Pb is more stable as Pb<sup>2+</sup> than as Pb<sup>4+</sup>. Do not mistake this for a statement about atoms “wanting” a full outer shell — it is a purely energetic argument about the changing cost of unpairing and hybridising the <i>n</i>s<sup>2</sup> pair.',
      },

      { t: 'part', title: 'Metallic character' },
      {
        t: 'p',
        html: 'Apart from hydrogen, non-metals and metalloids occur only in the p-block; the heaviest member of every p-block group is its most metallic member, and non-metallic character falls steadily down each group. This is why boron is a non-metal (metalloid, strictly) while thallium is essentially a soft, low-melting metal, and why carbon and silicon are non-metals while tin and lead are metals. The same trend explains oxide character: non-metal oxides are acidic or neutral, metal oxides are basic, and the elements in between give amphoteric oxides — B<sub>2</sub>O<sub>3</sub> is acidic, Al<sub>2</sub>O<sub>3</sub> and Ga<sub>2</sub>O<sub>3</sub> are amphoteric, In<sub>2</sub>O<sub>3</sub> and Tl<sub>2</sub>O<sub>3</sub> are basic.',
      },

      { t: 'part', title: 'Anomalous behaviour of the first member' },
      {
        t: 'p',
        html: 'The lightest element of every p-block group differs sharply from the rest of its family, for two compounding reasons. First, size: boron and carbon are far smaller than aluminium and silicon, so their ionisation enthalpies and electronegativities are anomalously high. Second, and decisive in the p-block, is the <b>absence of d orbitals in the valence shell of the second period</b>. Boron (2s<sup>2</sup>2p<sup>1</sup>) and carbon (2s<sup>2</sup>2p<sup>2</sup>) have only one s and three p orbitals available for bonding — four orbitals in total — which caps their <b>maximum covalence at 4</b>. From the third period onward, empty <i>n</i>d orbitals lie energetically close to the valence shell and can be pressed into service, so aluminium, silicon and their heavier congeners can expand their covalence beyond four. Boron forms only [BF<sub>4</sub>]<sup>−</sup>; aluminium forms [AlF<sub>6</sub>]<sup>3−</sup>. Silicon forms the octahedral [SiF<sub>6</sub>]<sup>2−</sup> ion, but carbon cannot form an analogous [CF<sub>6</sub>]<sup>2−</sup> — this single fact (tested constantly) is the cleanest illustration of the rule.',
      },
      {
        t: 'p',
        html: 'The same size-and-orbital argument governs π-bonding. Second-period elements, with compact 2p orbitals, form effective pπ–pπ multiple bonds to themselves and to other small, electronegative atoms — C=C, C≡C, C=O, N≡N. Heavier p-block elements can form π bonds only by using diffuse d orbitals (dπ–pπ or dπ–dπ), and because d orbitals sit higher in energy and overlap poorly, these bonds contribute far less stabilisation than second-period pπ–pπ bonding. This is precisely why carbon shows a rich chemistry of multiple bonds and silicon essentially does not, and it underlies why SiO<sub>2</sub> is a giant covalent solid while CO<sub>2</sub> is a small, discrete molecule (Topic 05).',
      },
      {
        t: 'p',
        html: 'Finally, a <b>diagonal relationship</b> links boron to silicon (not to aluminium): both form only covalent compounds, both give acidic, network-forming oxides (B<sub>2</sub>O<sub>3</sub>, SiO<sub>2</sub>) that combine with basic oxides to form glasses, both give hydrides that are volatile and spontaneously flammable in air, and both form complex fluoro-anions. Diagonal relationships arise because moving one step down and one step right nearly cancels the change in size and electronegativity, leaving genuinely similar chemistry — the same logic that links lithium to magnesium and beryllium to aluminium.',
      },
    ],
  },

  // ───────────────────────── Topic 02 · Section 2 · pp. 458–460 ─────────────────────────
  {
    n: '02',
    title: 'Group 13: The Boron Family',
    kalam: 'Group 13 contains boron, aluminium, gallium, indium, thallium and the synthetic, short-lived nihonium (not examined).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Group 13 contains boron, aluminium, gallium, indium, thallium and the synthetic, short-lived nihonium (not examined). It is the group where the “metal or non-metal” question is answered differently at every row: boron is a non-metal (hard, black, extremely high melting solid), aluminium is a reactive, electropositive metal that nonetheless shares real chemical similarities with boron, and gallium, indium and thallium are essentially ordinary post-transition metals.',
      },
      {
        t: 'p',
        html: '<b>Electronic configuration and its consequence.</b> The valence configuration is <i>n</i>s<sup>2</sup><i>n</i>p<sup>1</sup> throughout, but the inner core varies: boron and aluminium sit on a noble-gas core; gallium and indium carry ten additional d electrons in the shell below; thallium carries fourteen f electrons on top of ten d electrons. Filled d and f subshells shield the nucleus poorly, so the effective nuclear charge felt by the valence electrons rises faster than simple shell-counting would predict.',
      },
      {
        t: 'p',
        html: '<b>Atomic radius.</b> Radius should increase steadily down a group as shells are added, and it mostly does — but gallium is the outlier: Ga (135 pm) is smaller than Al (143 pm). The ten d electrons that appear for the first time between aluminium and gallium screen the nuclear charge poorly, so the effective pull on gallium’s valence electrons is unexpectedly strong, contracting its radius below aluminium’s. This single anomaly — poor d-block shielding — recurs across the entire p-block and is worth memorising as a standalone fact.',
      },
      {
        t: 'p',
        html: '<b>Ionisation enthalpy.</b> Within any one element Δ<sub>i</sub><i>H</i><sub>1</sub> < Δ<sub>i</sub><i>H</i><sub>2</sub> < Δ<sub>i</sub><i>H</i><sub>3</sub> as expected, but the group-wise trend is not smooth: it falls from B to Al (larger atom, easier to ionise) but then shows discontinuities between Al–Ga and In–Tl, again traceable to the poor shielding of the intervening d (and, for thallium, f) electrons, which keeps the effective nuclear charge — and hence the ionisation enthalpy — higher than a naive “size increases, IE decreases” rule would predict. The sum of boron’s first three ionisation enthalpies is so large that boron essentially never forms a simple B<sup>3+</sup> ion; its compounds are covalent. Aluminium’s corresponding sum drops enough that Al<sup>3+</sup> is a genuine, common species, and aluminium behaves as a strongly electropositive metal.',
      },
      {
        t: 'p',
        html: '<b>Electronegativity</b> falls from boron to aluminium and then creeps back up slightly toward thallium — an unusual non-monotonic trend, again a size artefact.',
      },
      {
        t: 'p',
        html: '<b>Physical properties.</b> Boron’s atoms are locked into an unusually strong covalent lattice, giving it an exceptionally high melting point (2453 K) alongside extreme hardness; the rest of the group are comparatively soft, low-melting metals with good electrical conductivity. Gallium is the standout: its melting point (303 K) is barely above room temperature, so it can turn liquid held in the hand, while its boiling point (2676 K) is very high — the combination makes gallium useful in high-temperature thermometry. Density rises steadily down the group.',
      },
      {
        t: 'p',
        html: 'A compact snapshot of the trend data (radius in pm, first ionisation enthalpy in kJ per mole, electronegativity on the Pauling scale, melting point in K):',
      },
      {
        t: 'table',
        title: null,
        head: ['Element', 'B', 'Al', 'Ga', 'In', 'Tl'],
        rows: [
          ['Atomic radius / pm', '85','143', '135', '167', '170'],
          ['Δ<sub>i</sub><i>H</i><sub>1</sub> / kJ mol<sup>−1</sup>', '801', '577', '579', '558', '589'],
          ['Electronegativity', '2.0', '1.5', '1.6', '1.7', '1.8'],
          ['Melting point / K', '2453', '933', '303', '430', '576'],
        ],
      },

      { t: 'part', title: 'Oxidation states and the inert pair effect' },
      {
        t: 'p',
        html: 'Boron and aluminium show essentially only +3. From gallium onward, both +1 and +3 are seen, and the relative stability of +1 <b>increases</b> down the sequence Al < Ga < In < Tl, so that in thallium the +1 state is dominant and Tl<sup>3+</sup> is a powerful oxidising agent (it readily grabs two electrons to fall back to the more stable Tl<sup>+</sup>). Compounds in the +1 state are more ionic than the corresponding +3 compounds, exactly as energetics predicts — the smaller, higher-charge-density M<sup>3+</sup> ion polarises anions and covalent character rises, while M<sup>+</sup> behaves like a typical alkali-metal-sized cation.',
      },

      { t: 'part', title: 'Lewis acidity of the trihalides' },
      {
        t: 'p',
        html: 'In the +3 state, the central atom in MX<sub>3</sub> has only three bonding pairs and an empty p orbital — six electrons total around the metal, not eight. Such <b>electron-deficient</b> species act as Lewis acids, accepting a lone pair from a donor to reach an octet: BCl<sub>3</sub> readily forms an adduct with ammonia, Cl<sub>3</sub>B←NH<sub>3</sub>. Across the group, the tendency to act as a Lewis acid falls as the central atom grows larger, because a bigger, more diffuse empty orbital overlaps less effectively with an incoming lone pair.',
      },
      {
        t: 'p',
        html: 'Within boron’s own trihalides, however, a second, opposing effect appears and produces one of the most heavily tested reversals in the chapter. Each halogen has a lone pair that can donate into boron’s empty 2p orbital (pπ–pπ back bonding), which partially satisfies boron’s electron deficiency before any Lewis base arrives and so <b>reduces</b> its willingness to accept one. This back donation is most effective for fluorine, whose 2p orbital is almost the same size as boron’s, and becomes progressively weaker for Cl, Br, I as their orbitals grow larger and more diffuse and overlap with boron’s small 2p orbital worsens. The net order of Lewis acid strength among the boron trihalides is therefore<br>BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>,<br>the opposite of what electronegativity alone would suggest — F is the most electronegative halogen and would be expected to make boron the most electron-hungry, but back bonding dominates the trend instead. A direct structural signature of this back bonding: the B–F bond in planar, sp<sup>2</sup> BF<sub>3</sub> (130 pm) is noticeably shorter than in tetrahedral, sp<sup>3</sup> BF<sub>4</sub><sup>−</sup> (143 pm), because only BF<sub>3</sub> has an empty orbital available to accept back donation and pick up partial double-bond character.',
      },

      { t: 'part', title: 'Reactivity' },
      {
        t: 'p',
        html: '• <b>Towards air.</b> Crystalline boron is unreactive; amorphous boron and aluminium burn to give B<sub>2</sub>O<sub>3</sub> and Al<sub>2</sub>O<sub>3</sub>, and both form nitrides with N<sub>2</sub> at high temperature. Aluminium’s oxide forms as a thin, tenacious surface film that passivates the metal against further attack — the reason aluminium survives in air and in concentrated HNO<sub>3</sub>, which would otherwise dissolve it.',
      },
      {
        t: 'p',
        html: '• <b>Towards acids and alkalis.</b> Boron does not react with either, even at moderate temperatures. Aluminium is <b>amphoteric</b>: it dissolves in dilute HCl,<br>2Al(s) + 6HCl(aq) → 2AlCl<sub>3</sub>(aq) + 3H<sub>2</sub>(g),<br>and equally dissolves in hot aqueous alkali, both times liberating H<sub>2</sub>:<br>2Al(s) + 2NaOH(aq) + 6H<sub>2</sub>O(l) → 2Na[Al(OH)<sub>4</sub>](aq) + 3H<sub>2</sub>(g).<br>This dual reactivity — dissolving in both acid and base — is the textbook definition of amphoterism and is the reason aluminium vessels are unsuitable for storing either dilute strong acids or strong alkalis, and why aluminium turnings mixed with dilute NaOH can be used to clear a clogged drain.',
      },
      {
        t: 'p',
        html: '• <b>Towards halogens.</b> All members form trihalides, 2M + 3X<sub>2</sub> → 2MX<sub>3</sub> (thallium is the exception with iodine, which gives TlI rather than a thallium(III) iodide — the compound TlI<sub>3</sub> is Tl<sup>+</sup>I<sub>3</sub><sup>−</sup> — a direct consequence of the inert pair effect favouring Tl<sup>+</sup>). Anhydrous AlCl<sub>3</sub> achieves an octet at aluminium by dimerising through chlorine bridges, Al<sub>2</sub>Cl<sub>6</sub>, in which two bridging chlorines each donate a lone pair into an empty orbital on the neighbouring aluminium.',
      },
      {
        t: 'p',
        html: 'In aqueous solution the trihalides hydrolyse: AlCl<sub>3</sub> gives the tetrahedral [Al(OH)<sub>4</sub>]<sup>−</sup> ion in base or, in acidified water, the octahedral aqua ion [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, whose hybridisation is sp<sup>3</sup>d<sup>2</sup> (made possible only because aluminium, unlike boron, has accessible 3d orbitals). Anhydrous AlCl<sub>3</sub> fumes visibly in moist air because atmospheric moisture hydrolyses it, liberating HCl gas that appears as a white mist.',
      },
    ],
  },
];
