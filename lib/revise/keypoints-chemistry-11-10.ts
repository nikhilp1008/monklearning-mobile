/**
 * KEY POINTS for Chemistry Class 11, Chapter 10 (The p-Block Elements,
 * Groups 13 and 14).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–05 (the book's Sections 1–5) are 0–4; Topic 06, Worked
 * examples & exam practice (Sections 6–9), is 5, with three points from its
 * worked examples and Common Pitfalls; Additional topics A–I are 6–14;
 * Additional topic J, the Summary Checklist, is 15 (no points); Additional
 * topic K, What JEE and NEET Actually Ask (the book's Addendum P), is 16. No
 * point refers to another topic by number.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * The book runs this chapter as one block: Sections 1–5 have no Key
 * Definitions, Cheat Sheet or Pro-Tips of their own. So Remember comes from
 * each section's text; Don't mix up and Common mistakes from that section
 * and the chapter's Common Pitfalls & Pro-Tips that belong to it; Exam
 * shortcuts from the section's quick rules. The chapter prints no memory
 * aids, so `say` is null throughout and the chapter has no memory lines.
 * Additional topics: the addenda's methods, worked examples and practice
 * answers. Additional topic K: its question modes and traps. Every volume
 * at STP uses the book's 22.4 L mol<sup>−1</sup>.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. Formulas,
 * ions and states upright; charges digit first with a real minus
 * ([B(OH)<sub>4</sub>]<sup>−</sup>, CO<sub>3</sub><sup>2−</sup>); hydrates with a
 * middle dot (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O).
 * Orbital and hybrid labels upright (<i>n</i>s<sup>2</sup><i>n</i>p<sup>1</sup>,
 * 2p, sp<sup>3</sup>d<sup>2</sup>, pπ–pπ); bond labels 2c–2e and 3c–2e
 * upright. Roman numerals for oxidation states in Pb(IV), Sn(II); M<sup>I</sup>,
 * M<sup>III</sup> upright. Δ<sub>i</sub><i>H</i><sub>1</sub>,
 * Δ<sub>f</sub><i>H</i>°, Δ<sub>r</sub><i>H</i>°, <i>E</i>°, <i>n</i>,
 * <i>s</i>, <i>M</i> italic; p<i>K</i><sub>a</sub> with an upright p.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · General Introduction to the p-Block ──
  // pp. 456–457
  {
    topic: 0,
    kind: 'remember',
    q: 'The p-block: valence configurations, group oxidation states, and the inert pair effect?',
    a: '<i>n</i>s<sup>2</sup><i>n</i>p<sup>1–6</sup> (He 1s<sup>2</sup>): group 13 <i>n</i>s<sup>2</sup><i>n</i>p<sup>1</sup>, group 14 <i>n</i>s<sup>2</sup><i>n</i>p<sup>2</sup>. Group oxidation state +3 and +4, plus a second state two units lower (+1, +2) that becomes more stable down the group: the <i>n</i>s<sup>2</sup> pair grows reluctant to bond, because poor d and f shielding raises its effective nuclear charge and promoting it costs more than the bonds repay',
    why: 'So Tl is more stable as Tl<sup>+</sup> than as Tl<sup>3+</sup>, and Pb as Pb<sup>2+</sup> than as Pb<sup>4+</sup>.',
    say: null,
  },
  // p. 457
  {
    topic: 0,
    kind: 'remember',
    q: 'Why is the first member (B, C) so different, and what are the classic proofs?',
    a: 'Small size (high ionisation enthalpy and electronegativity) and no d orbitals: only 2s and three 2p, so covalence stops at 4. B forms only [BF<sub>4</sub>]<sup>−</sup>, Al forms [AlF<sub>6</sub>]<sup>3−</sup>; Si forms [SiF<sub>6</sub>]<sup>2−</sup>, C cannot form [CF<sub>6</sub>]<sup>2−</sup>. Compact 2p orbitals also give strong pπ–pπ multiple bonds (C=C, C≡C, C=O), which heavier members barely form',
    why: 'That is why CO<sub>2</sub> is a small, discrete molecule while SiO<sub>2</sub> is a giant covalent solid.',
    say: null,
  },
  // pp. 457, 472
  {
    topic: 0,
    kind: 'mixup',
    q: 'Boron’s diagonal partner: aluminium or silicon?',
    a: 'Silicon, one row down and one column right: both form only covalent compounds, acidic glass-forming oxides (B<sub>2</sub>O<sub>3</sub>, SiO<sub>2</sub>), volatile hydrides that catch fire in air, and complex fluoro-anions. Aluminium, boron’s group neighbour, is a metal with a genuine Al<sup>3+</sup> ion and an amphoteric oxide',
    why: 'One step down and one step right nearly cancels the change in size and electronegativity: the same logic links Li to Mg and Be to Al.',
    say: null,
  },
  // pp. 456–457, 459, 472
  {
    topic: 0,
    kind: 'mistake',
    q: 'Does the inert pair effect stabilise the higher oxidation state as you go down a group?',
    a: 'No, the lower one: Tl<sup>+</sup> is more stable than Tl<sup>3+</sup>, Pb<sup>2+</sup> than Pb<sup>4+</sup>. It is an energy argument about the rising cost of unpairing the <i>n</i>s<sup>2</sup> pair, not about atoms “wanting” a full outer shell',
    why: 'For the lighter members the group state is the more stable one: boron and aluminium show essentially only +3.',
    say: null,
  },
  // pp. 457, 472
  {
    topic: 0,
    kind: 'shortcut',
    q: 'Group 13 oxides: acidic, amphoteric or basic? The fast way?',
    a: 'Metallic character rises down the group, so the oxides go from acidic to basic: B<sub>2</sub>O<sub>3</sub> acidic; Al<sub>2</sub>O<sub>3</sub> and Ga<sub>2</sub>O<sub>3</sub> amphoteric; In<sub>2</sub>O<sub>3</sub> and Tl<sub>2</sub>O<sub>3</sub> basic. Amphoterism belongs to the middle of the group, not to all of group 13',
    why: 'The heaviest member of every p-block group is its most metallic: B is a non-metal (strictly a metalloid), Tl a soft metal; C and Si are non-metals, Sn and Pb metals.',
    say: null,
  },

  // ── Topic 02 · Group 13: The Boron Family ──
  // pp. 458–459
  {
    topic: 1,
    kind: 'remember',
    q: 'Group 13: ionisation enthalpy and electronegativity trends, and why boron forms no B<sup>3+</sup>?',
    a: 'Δ<sub>i</sub><i>H</i><sub>1</sub> (kJ mol<sup>−1</sup>): B 801, Al 577, Ga 579, In 558, Tl 589, falling from B to Al and then irregular (poor d and f shielding). Electronegativity falls from B (2.0) to Al (1.5), then creeps up to Tl (1.8). Boron’s first three ionisation enthalpies add up to so much that B<sup>3+</sup> never forms, so its compounds are covalent; Al<sup>3+</sup> is common',
    why: 'Boron melts at 2453 K (a strong covalent lattice); gallium melts at 303 K but boils at 2676 K, which suits high-temperature thermometry.',
    say: null,
  },
  // p. 460
  {
    topic: 1,
    kind: 'remember',
    q: 'What does aluminium do with dilute HCl, hot NaOH and concentrated HNO<sub>3</sub>?',
    a: 'It dissolves in both the acid and the alkali, releasing H<sub>2</sub> (amphoterism): 2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>; 2Al + 2NaOH + 6H<sub>2</sub>O → 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>. Concentrated HNO<sub>3</sub> leaves it alone: a thin, tight oxide film passivates the metal. Boron reacts with neither acid nor alkali, even at moderate temperatures',
    why: 'Anhydrous AlCl<sub>3</sub> reaches an octet by dimerising to Al<sub>2</sub>Cl<sub>6</sub> through two chlorine bridges; in acidified water it gives octahedral [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> (sp<sup>3</sup>d<sup>2</sup>).',
    say: null,
  },
  // pp. 459, 472
  {
    topic: 1,
    kind: 'mixup',
    q: 'BF<sub>3</sub> or BI<sub>3</sub>: which is the stronger Lewis acid?',
    a: 'BI<sub>3</sub>: BF<sub>3</sub> < BCl<sub>3</sub> < BBr<sub>3</sub> < BI<sub>3</sub>, the opposite of what electronegativity suggests. A halogen lone pair back-donates into boron’s empty 2p orbital (pπ–pπ back bonding), most of all for F, whose 2p orbital matches boron’s in size; so BF<sub>3</sub>’s electron deficiency is already partly satisfied',
    why: 'The sign of it: B–F is 130 pm in planar sp<sup>2</sup> BF<sub>3</sub> but 143 pm in tetrahedral sp<sup>3</sup> [BF<sub>4</sub>]<sup>−</sup>, where no empty orbital is left.',
    say: null,
  },
  // pp. 458–459
  {
    topic: 1,
    kind: 'mistake',
    q: 'Atomic radius rises down a group. So is gallium larger than aluminium?',
    a: 'No: Ga (135 pm) is smaller than Al (143 pm). The ten 3d electrons that appear between Al and Ga shield the nucleus poorly, so gallium’s valence electrons feel an unexpectedly strong pull',
    why: 'The same poor d (and, for Tl, f) shielding breaks the ionisation-enthalpy trend between Al and Ga and between In and Tl.',
    say: null,
  },
  // p. 459
  {
    topic: 1,
    kind: 'shortcut',
    q: 'Which oxidation states does each group 13 element show, at a glance?',
    a: 'B and Al: essentially only +3. From Ga on: +1 and +3, the +1 state gaining stability down to Tl, where it dominates and Tl<sup>3+</sup> is a powerful oxidising agent (it takes two electrons to fall back to Tl<sup>+</sup>)',
    why: '+1 compounds are more ionic than +3 ones: the small, highly charged M<sup>3+</sup> polarises anions, while M<sup>+</sup> behaves like an alkali-metal cation.',
    say: null,
  },

  // ── Topic 03 · Important Compounds of Boron and Aluminium ──
  // pp. 460–462
  {
    topic: 2,
    kind: 'remember',
    q: 'Borax in water, and borax on strong heating?',
    a: 'In water it hydrolyses, so the solution is alkaline: Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 7H<sub>2</sub>O → 2NaOH + 4H<sub>3</sub>BO<sub>3</sub>. Heated, it loses its water of crystallisation and swells, then melts to a clear glass: Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> → 2NaBO<sub>2</sub> + B<sub>2</sub>O<sub>3</sub> (sodium metaborate + boric anhydride)',
    why: 'The glass dissolves transition-metal oxides as coloured metaborates, the borax bead test: CoO gives a blue Co(BO<sub>2</sub>)<sub>2</sub> bead.',
    say: null,
  },
  // pp. 461–462
  {
    topic: 2,
    kind: 'remember',
    q: 'Diborane: how is it made, and what does it do in air, in water and with ammonia?',
    a: '4BF<sub>3</sub> + 3LiAlH<sub>4</sub> → 2B<sub>2</sub>H<sub>6</sub> + 3LiF + 3AlF<sub>3</sub> (in ether); 2NaBH<sub>4</sub> + I<sub>2</sub> → B<sub>2</sub>H<sub>6</sub> + 2NaI + H<sub>2</sub> (laboratory); 2BF<sub>3</sub> + 6NaH → B<sub>2</sub>H<sub>6</sub> + 6NaF at 450 K (industrial). A colourless, highly toxic gas (b.p. 180 K) that catches fire in air; water gives B(OH)<sub>3</sub> and H<sub>2</sub>; ammonia gives [BH<sub>2</sub>(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>[BH<sub>4</sub>]<sup>−</sup>, which on heating becomes borazine, B<sub>3</sub>N<sub>3</sub>H<sub>6</sub>, “inorganic benzene”',
    why: 'Strong Lewis bases split it evenly into adducts: B<sub>2</sub>H<sub>6</sub> + 2NMe<sub>3</sub> → 2BH<sub>3</sub>·NMe<sub>3</sub>.',
    say: null,
  },
  // p. 461
  {
    topic: 2,
    kind: 'mixup',
    q: 'Boric acid: a protic (Brønsted) acid or a Lewis acid?',
    a: 'A weak, monobasic Lewis acid. It does not release its own protons: boron accepts OH<sup>−</sup> from a water molecule, B(OH)<sub>3</sub> + 2H<sub>2</sub>O ⇌ [B(OH)<sub>4</sub>]<sup>−</sup> + H<sub>3</sub>O<sup>+</sup>, and the proton comes from that water. One proton per formula unit, so <i>n</i>-factor 1, never 3 (it is titrated with glycerol or mannitol added)',
    why: 'Planar BO<sub>3</sub> units hydrogen-bonded into sheets make it flaky and soapy; past about 370 K, H<sub>3</sub>BO<sub>3</sub> → HBO<sub>2</sub> → B<sub>2</sub>O<sub>3</sub>.',
    say: null,
  },
  // pp. 460, 501
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is borax built from B<sub>4</sub>O<sub>7</sub><sup>2−</sup> units?',
    a: 'No: its anion is [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup>, with two trigonal-planar (sp<sup>2</sup>) and two tetrahedral (sp<sup>3</sup>) borons. So borax is correctly Na<sub>2</sub>[B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]·8H<sub>2</sub>O, the same composition as Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O written properly',
    why: 'This rewriting is a favourite “which formula is correct” distractor.',
    say: null,
  },
  // pp. 461–462, 467–468
  {
    topic: 2,
    kind: 'shortcut',
    q: 'The bonds in diborane, counted fast?',
    a: 'Electrons first: 2(3) + 6(1) = 12, six pairs; an ethane-like H<sub>3</sub>B–BH<sub>3</sub> would need seven, so diborane is electron-deficient. Four pairs make the four terminal B–H (2c–2e); the other two make the two B–H–B bridges (3c–2e, “banana” bonds). Each boron sp<sup>3</sup>',
    why: 'The bridges are the unusual bonds and the longer, weaker ones, so they break first on mild heating; the two B and four terminal H lie in one plane, one bridging H above it and one below.',
    say: null,
  },

  // ── Topic 04 · Group 14: The Carbon Family ──
  // p. 463
  {
    topic: 3,
    kind: 'remember',
    q: 'Group 14: radius, ionisation enthalpy and electronegativity trends?',
    a: 'Covalent radius jumps from C (77 pm) to Si (118 pm), then creeps: Ge 122, Sn 140, Pb 146 pm (filled d and f subshells shield poorly). Δ<sub>i</sub><i>H</i><sub>1</sub> (kJ mol<sup>−1</sup>): C 1086, Si 786, Ge 761, Sn 708, Pb 715, higher than group 13 in every row, with a slight rise from Sn to Pb. Electronegativity C 2.5, then nearly constant: Si, Ge, Sn 1.8, Pb 1.9',
    why: 'C and Si are non-metals, Ge a metalloid, Sn and Pb soft, low-melting metals.',
    say: null,
  },
  // pp. 464–465, 472
  {
    topic: 3,
    kind: 'remember',
    q: 'Diamond, graphite and C<sub>60</sub>: hybridisation and structure, and which is the most stable?',
    a: 'Diamond: sp<sup>3</sup>, a rigid 3D tetrahedral network, C–C 154 pm, the hardest natural substance. Graphite: sp<sup>2</sup> hexagonal sheets (C–C 141.5 pm) 340 pm apart, held by van der Waals forces: soft, and it conducts along the layers. C<sub>60</sub>: an sp<sup>2</sup> cage of twenty six-membered and twelve five-membered rings. Graphite is the most stable form (Δ<sub>f</sub><i>H</i>° = 0); diamond lies +1.90 kJ mol<sup>−1</sup> above it',
    why: 'Diamond is only metastable: it turns back into graphite too slowly to notice, so “hardest” does not mean “most stable”.',
    say: null,
  },
  // pp. 463, 472
  {
    topic: 3,
    kind: 'mixup',
    q: 'SnCl<sub>2</sub> or PbCl<sub>4</sub>: which is the oxidising agent?',
    a: 'PbCl<sub>4</sub>: lead prefers +2, so Pb(IV) is unstable and oxidising; PbCl<sub>4</sub> decomposes on warming to PbCl<sub>2</sub> and Cl<sub>2</sub>. SnCl<sub>2</sub> is the reducing agent: Sn(II) goes over to the more stable Sn(IV), reducing Hg<sup>2+</sup> to Hg, for instance',
    why: 'The +2 state gains ground down the group, Ge < Sn < Pb: germanium is mostly +4, tin stable in both, lead stable as Pb(II). SnCl<sub>4</sub> is the ordinary, stable tetrahalide.',
    say: null,
  },
  // pp. 463–464, 471
  {
    topic: 3,
    kind: 'mistake',
    q: 'SiCl<sub>4</sub> is hydrolysed rapidly by water. Is CCl<sub>4</sub>?',
    a: 'No: carbon has no d orbital to take the water’s lone pair and cannot go beyond four bonds, so CCl<sub>4</sub> survives water. Silicon takes the lone pair into an empty 3d orbital before Cl<sup>−</sup> leaves; the heavier members likewise reach six-coordinate [SiF<sub>6</sub>]<sup>2−</sup>, [GeCl<sub>6</sub>]<sup>2−</sup>, [Sn(OH)<sub>6</sub>]<sup>2−</sup> (sp<sup>3</sup>d<sup>2</sup>)',
    why: 'PbI<sub>4</sub> does not exist: Pb(IV) oxidises iodide to iodine, so it would fall apart to PbI<sub>2</sub> + I<sub>2</sub>.',
    say: null,
  },
  // pp. 464, 471
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Catenation down group 14, ranked in one line, and what sets the order?',
    a: 'C ≫ Si > Ge ≈ Sn ≫ Pb (lead essentially none), set by the E–E bond enthalpy: C–C 348, Si–Si 297, Ge–Ge 260, Sn–Sn 240 kJ mol<sup>−1</sup>',
    why: 'Carbon adds strong pπ–pπ multiple bonds to itself, which makes its allotropes, and organic chemistry, possible.',
    say: null,
  },

  // ── Topic 05 · Important Compounds of Carbon and Silicon ──
  // p. 465
  {
    topic: 4,
    kind: 'remember',
    q: 'CO and CO<sub>2</sub>: how are they bonded, and how do they behave?',
    a: 'CO: one σ and two π bonds, :C≡O:, with a lone pair on carbon; from carbon burnt in limited oxygen, commercially as water gas (CO + H<sub>2</sub>) and producer gas (CO + N<sub>2</sub>). CO<sub>2</sub>: carbon sp, two σ and two pπ–pπ bonds, linear, two equal C=O bonds of 115 pm and zero dipole; in water it gives carbonic acid, a weak diprotic acid',
    why: 'The H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>−</sup> pair is the buffer that holds blood pH between about 7.26 and 7.42 (NCERT’s figure; the clinical normal range is 7.35–7.45).',
    say: null,
  },
  // pp. 466–467
  {
    topic: 4,
    kind: 'remember',
    q: 'Silicones: the repeating unit, how they are made, and why they repel water?',
    a: '(R<sub>2</sub>SiO)<sub><i>n</i></sub>, R usually methyl or phenyl. Chlorosilanes R<sub><i>n</i></sub>SiCl<sub>4−<i>n</i></sub> (from methyl chloride over silicon with a copper catalyst at 573 K) are hydrolysed and condense into polymers; a little (CH<sub>3</sub>)<sub>3</sub>SiCl caps the chains. Non-polar groups sheath the backbone: water-repellent, heat-stable, good insulators, biologically inert',
    why: 'Zeolites: Al replaces some Si in the framework, each swap adding one negative charge, balanced by exchangeable Na<sup>+</sup>, K<sup>+</sup> or Ca<sup>2+</sup>: catalysts for cracking (ZSM-5 turns alcohols into gasoline-range hydrocarbons) and water softeners.',
    say: null,
  },
  // pp. 466, 472
  {
    topic: 4,
    kind: 'mixup',
    q: 'CO<sub>2</sub> is a small molecule. Why is SiO<sub>2</sub> a giant solid?',
    a: 'Silicon’s large, diffuse 3p orbitals overlap too poorly with oxygen’s 2p to make Si=O, so silicon uses only single σ bonds. Giving every oxygen two bonds with single bonds alone means every SiO<sub>4</sub> tetrahedron shares all four corners: one continuous covalent network',
    why: 'Its strong Si–O bonds resist most acids, but HF and hot alkali attack it: SiO<sub>2</sub> + 4HF → SiF<sub>4</sub> + 2H<sub>2</sub>O; SiO<sub>2</sub> + 2NaOH → Na<sub>2</sub>SiO<sub>3</sub> + H<sub>2</sub>O.',
    say: null,
  },
  // p. 465
  {
    topic: 4,
    kind: 'mistake',
    q: 'CO and CO<sub>2</sub>: are both poisonous?',
    a: 'No, only CO. Its carbon lone pair binds the iron of haemoglobin as carboxyhaemoglobin, about 300 times more stable than oxyhaemoglobin, so the blood can no longer carry oxygen. CO<sub>2</sub> is not poisonous at normal concentrations; its harm is the greenhouse effect',
    why: 'The same lone pair makes CO a σ-donor to metals (metal carbonyls) and a strong reducing agent: Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub>.',
    say: null,
  },
  // pp. 466, 469
  {
    topic: 4,
    kind: 'shortcut',
    q: 'Silicates: how does corner-sharing set the structure and the charge?',
    a: 'All are built from the SiO<sub>4</sub><sup>4−</sup> tetrahedron. Sharing one, two, three or all four corners gives dimers, rings or chains, sheets, then neutral SiO<sub>2</sub>. A shared (bridging) oxygen carries no charge; each unshared corner is a terminal O<sup>−</sup>, so more sharing, less charge',
    why: 'Two tetrahedra sharing one corner: 7 oxygens, six of them terminal, so Si<sub>2</sub>O<sub>7</sub><sup>6−</sup>; a chain is (SiO<sub>3</sub><sup>2−</sup>)<sub><i>n</i></sub>, a sheet (Si<sub>2</sub>O<sub>5</sub><sup>2−</sup>)<sub><i>n</i></sub>.',
    say: null,
  },

  // ── Topic 06 · Worked examples & exam practice ──
  // pp. 468, 472
  {
    topic: 5,
    kind: 'mistake',
    q: '0.100 M boric acid (with glycerol added) is titrated against NaOH. Is its normality 0.300 N?',
    a: 'No, 0.100 N. Boric acid gives exactly one titratable proton per formula unit (from the water whose OH<sup>−</sup> boron captures), so <i>n</i>-factor = 1, always. Its three O–H groups stay intact',
    why: 'Writing <i>N</i> = 3 × 0.100 = 0.300 N is the single most common error with this compound.',
    say: null,
  },
  // pp. 467–469
  {
    topic: 5,
    kind: 'remember',
    q: 'At STP (22.4 L mol<sup>−1</sup>), how much H<sub>2</sub> do 5.40 g of aluminium give with hot NaOH, and how much CO reduces 32.0 g of Fe<sub>2</sub>O<sub>3</sub>?',
    a: 'Al: 0.200 mol gives 3/2 × 0.200 = 0.300 mol H<sub>2</sub>, 6.72 L; excess dilute HCl gives the same 3 : 2 ratio and the same 6.72 L. Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub>: 0.200 mol needs 0.600 mol CO, 13.44 L (13.4 L to 3 s.f.)',
    why: 'Borax with HCl: Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub> + 2HCl + 5H<sub>2</sub>O → 2NaCl + 4H<sub>3</sub>BO<sub>3</sub>, so 20.12 g (0.1000 mol) gives 0.400 mol, 24.72 g (24.7 g to 3 s.f.) of boric acid.',
    say: null,
  },
  // pp. 472, 474
  {
    topic: 5,
    kind: 'mistake',
    q: 'Boron and carbon stop at four bonds. Is that because of how few valence electrons they have?',
    a: 'No: the second shell has only four orbitals (2s, 2p<sub><i>x</i></sub>, 2p<sub><i>y</i></sub>, 2p<sub><i>z</i></sub>) and no d orbitals. Boron, with only 3 valence electrons, still makes four bonds in [BF<sub>4</sub>]<sup>−</sup> by using its empty orbital as an acceptor',
    why: 'Examiners state an intuitive rule (electronegativity sets Lewis acidity; the higher state is the more stable; more O–H groups, more protons) and test whether you know why groups 13 and 14 break it.',
    say: null,
  },

  // ── Additional A · The Numbers Behind the Group 13 and 14 Trends ──
  // pp. 475–476
  {
    topic: 6,
    kind: 'remember',
    q: 'Group 13: the sums Δ<sub>i</sub><i>H</i><sub>1</sub> + Δ<sub>i</sub><i>H</i><sub>2</sub> + Δ<sub>i</sub><i>H</i><sub>3</sub>, and what they show?',
    a: 'B 6887, Al 5137, Ga 5520, In 5082, Tl 5437 kJ mol<sup>−1</sup>. Boron’s is 1750 more than aluminium’s, more than any lattice or hydration enthalpy of B<sup>3+</sup> could repay, so boron stays covalent. The zigzag (rises from Al to Ga and from In to Tl) marks the poorly shielding 3d<sup>10</sup> and 4f<sup>14</sup>5d<sup>10</sup> cores',
    why: 'The gallium anomaly is in the atomic radius only: Ga (135 pm) < Al (143 pm), yet Ga<sup>3+</sup> (62.0 pm) > Al<sup>3+</sup> (53.5 pm), since Ga<sup>3+</sup> keeps one more complete shell.',
    say: null,
  },
  // pp. 477–478
  {
    topic: 6,
    kind: 'mistake',
    q: 'The compound GaCl<sub>2</sub> is diamagnetic. Is gallium in the +2 state?',
    a: 'No: it is Ga<sup>+</sup>[GaCl<sub>4</sub>]<sup>−</sup>, one Ga(I) (4s<sup>2</sup>, paired) and one Ga(III); only the average is +2. A real Ga<sup>2+</sup> (4s<sup>1</sup>) would be paramagnetic',
    why: 'Thallium’s couples are easily confused: <i>E</i>°(Tl<sup>+</sup>/Tl) = −0.34 V, <i>E</i>°(Tl<sup>3+</sup>/Tl<sup>+</sup>) ≈ +1.25 V, <i>E</i>°(Tl<sup>3+</sup>/Tl) ≈ +0.72 V; check which couple a quoted value means.',
    say: null,
  },

  // ── Additional B · Boron’s Anomalies and the Diagonal Relationship, Tabulated ──
  // pp. 478–480
  {
    topic: 7,
    kind: 'remember',
    q: 'Boron against aluminium: ion, covalence, trichloride, hydride, oxide?',
    a: 'Boron: no M<sup>3+</sup> ion; maximum covalence 4 ([BF<sub>4</sub>]<sup>−</sup>); monomeric BCl<sub>3</sub>; volatile boranes (B<sub>2</sub>H<sub>6</sub>); acidic B<sub>2</sub>O<sub>3</sub>; no reaction with acids or alkalis. Aluminium: common Al<sup>3+</sup>; covalence 6 ([AlF<sub>6</sub>]<sup>3−</sup>); dimeric Al<sub>2</sub>Cl<sub>6</sub>; polymeric solid (AlH<sub>3</sub>)<sub><i>n</i></sub>; amphoteric Al<sub>2</sub>O<sub>3</sub>; dissolves in both, giving H<sub>2</sub>',
    why: 'BCl<sub>3</sub> stays a monomer because back donation from chlorine relieves boron’s shortage and the small boron atom cannot hold four chlorines; aluminium uses chlorine bridges instead.',
    say: null,
  },
  // pp. 479–480
  {
    topic: 7,
    kind: 'remember',
    q: 'Sodium metaborate, nominally NaBO<sub>2</sub>, is a ring of three BO<sub>3</sub> triangles. Its charge, and its bridging oxygens?',
    a: '[B<sub>3</sub>O<sub>6</sub>]<sup>3−</sup>: each triangle shares two corners, so three bridging oxygens and three terminal O<sup>−</sup>; check 3(+3) + 6(−2) = −3. A ring of four such triangles is [B<sub>4</sub>O<sub>8</sub>]<sup>4−</sup>',
    why: 'BCl<sub>3</sub> is electron-deficient (six electrons on boron) and a Lewis acid; SiCl<sub>4</sub> is electron-precise (eight), not electron-deficient.',
    say: null,
  },

  // ── Additional C · Boron Compounds in Depth: Borax, Boric Acid, the Trihalides and Diborane ──
  // pp. 481–482, 484
  {
    topic: 8,
    kind: 'remember',
    q: 'Borax titrated with HCl: what ratio, which indicator, and what volume of 0.100 M HCl for 1.906 g of Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O?',
    a: 'In water [B<sub>4</sub>O<sub>5</sub>(OH)<sub>4</sub>]<sup>2−</sup> + 5H<sub>2</sub>O ⇌ 2B(OH)<sub>3</sub> + 2[B(OH)<sub>4</sub>]<sup>−</sup>, and only [B(OH)<sub>4</sub>]<sup>−</sup> takes up acid: 1 mol borax : 2 mol HCl, with methyl orange. <i>M</i> = 381.2, so 0.00500 mol needs 0.0100 mol HCl: 100 mL',
    why: 'A borax bead that is blue in both the oxidising and the reducing flame is cobalt: CoO + B<sub>2</sub>O<sub>3</sub> → Co(BO<sub>2</sub>)<sub>2</sub>.',
    say: null,
  },
  // pp. 482, 484–485
  {
    topic: 8,
    kind: 'remember',
    q: 'Why is mannitol added before boric acid is titrated with NaOH?',
    a: 'Alone, boric acid is too weak (p<i>K</i><sub>a</sub> ≈ 9.2) for a sharp end point. A cis-diol (glycerol, mannitol, sugars) holds the borate as a stable chelate, B(OH)<sub>3</sub> + 2H<sub>2</sub>L → [BL<sub>2</sub>]<sup>−</sup> + H<sup>+</sup> + 3H<sub>2</sub>O, driving the ionisation to completion: it then titrates as a strong monobasic acid (<i>n</i>-factor 1) with phenolphthalein',
    why: '25.0 mL of 0.200 M boric acid with excess mannitol: 5.00 × 10<sup>−3</sup> mol, so 50.0 mL of 0.100 M NaOH.',
    say: null,
  },

  // ── Additional D · Aluminium: Oxide, Hydroxide, Chloride and Alums ──
  // p. 485
  {
    topic: 9,
    kind: 'remember',
    q: 'Show that Al<sub>2</sub>O<sub>3</sub> and Al(OH)<sub>3</sub> are amphoteric. What brings the hydroxide back down?',
    a: 'With acid: Al<sub>2</sub>O<sub>3</sub> + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>O; Al(OH)<sub>3</sub> + 3HCl → AlCl<sub>3</sub> + 3H<sub>2</sub>O. With alkali: Al<sub>2</sub>O<sub>3</sub> + 2NaOH + 3H<sub>2</sub>O → 2Na[Al(OH)<sub>4</sub>]; Al(OH)<sub>3</sub> + NaOH → Na[Al(OH)<sub>4</sub>] (tetrahedral [Al(OH)<sub>4</sub>]<sup>−</sup>). CO<sub>2</sub>, or boiling with NH<sub>4</sub>Cl, reprecipitates Al(OH)<sub>3</sub>',
    why: 'That is how strong alkali separates aluminium from iron in bauxite: Al<sub>2</sub>O<sub>3</sub> dissolves as aluminate, while Fe<sub>2</sub>O<sub>3</sub>, not amphoteric, stays behind.',
    say: null,
  },
  // pp. 486–487
  {
    topic: 9,
    kind: 'remember',
    q: 'Alums: the general formula, which ions, and what potash alum shows in water?',
    a: 'M<sup>I</sup><sub>2</sub>SO<sub>4</sub>·M<sup>III</sup><sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>·24H<sub>2</sub>O, or M<sup>I</sup>M<sup>III</sup>(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O: M<sup>I</sup> is Na<sup>+</sup>, K<sup>+</sup> or NH<sub>4</sub><sup>+</sup> (lithium sulphate is not known to form one), M<sup>III</sup> is Al<sup>3+</sup>, Fe<sup>3+</sup> or Cr<sup>3+</sup>. A double salt splits into its ions, so potash alum solution gives the tests of K<sup>+</sup>, Al<sup>3+</sup> and SO<sub>4</sub><sup>2−</sup>, and is acidic',
    why: '47.4 g of KAl(SO<sub>4</sub>)<sub>2</sub>·12H<sub>2</sub>O (<i>M</i> = 474) with excess BaCl<sub>2</sub> gives 0.200 mol BaSO<sub>4</sub>, 46.6 g.',
    say: null,
  },

  // ── Additional E · Allotropes of Carbon: Structure to Property ──
  // p. 489
  {
    topic: 10,
    kind: 'remember',
    q: 'C<sub>60</sub>: how many σ bonds, π bonds, pentagons and hexagons?',
    a: 'Each carbon makes three σ bonds and has one π electron: 60 × 3/2 = 90 σ, 60/2 = 30 π (30 double bonds, 138.3 pm, and 60 single, 143.5 pm). Every fullerene has 12 pentagons; C<sub><i>n</i></sub> has <i>n</i>/2 − 10 hexagons: 20 for C<sub>60</sub>, 25 for C<sub>70</sub>',
    why: 'Euler check for C<sub>60</sub>: 60 vertices − 90 edges + 32 faces = 2, as for any closed polyhedron.',
    say: null,
  },
  // pp. 487–490
  {
    topic: 10,
    kind: 'mixup',
    q: 'Diamond or graphite: which conducts, which is denser, which is more stable?',
    a: 'Graphite conducts, along the layers only (one delocalised π electron per sp<sup>2</sup> carbon); diamond has all four electrons in localised σ bonds and does not. Diamond is denser (3.51 against 2.22 g cm<sup>−3</sup>; graphite’s layers are 340 pm apart), yet graphite is more stable: C(graphite) → C(diamond), Δ<sub>r</sub><i>H</i>° ≈ +1.9 kJ mol<sup>−1</sup>',
    why: 'So burning diamond releases slightly more heat than graphite: −393.5 − 1.9 = −395.4 kJ mol<sup>−1</sup>.',
    say: null,
  },

  // ── Additional F · Carbon Monoxide, Carbon Dioxide and the Carbonates ──
  // p. 490
  {
    topic: 11,
    kind: 'remember',
    q: 'CO and CO<sub>2</sub> in the laboratory, and the order of C–O bond lengths?',
    a: 'CO: formic acid with conc. H<sub>2</sub>SO<sub>4</sub> at 373 K, HCOOH → CO + H<sub>2</sub>O. CO<sub>2</sub>: CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O. CO is neutral, CO<sub>2</sub> acidic. Bond length follows bond order: CO (3) < CO<sub>2</sub> (2) < CO<sub>3</sub><sup>2−</sup> (4/3)',
    why: 'CO + ½O<sub>2</sub> → CO<sub>2</sub>: Δ<sub>r</sub><i>H</i>° = −393.5 − (−110.5) = −283.0 kJ mol<sup>−1</sup>, which is why water gas and producer gas are fuels.',
    say: null,
  },
  // p. 491
  {
    topic: 11,
    kind: 'mixup',
    q: 'Carbonate or hydrogencarbonate: how do you tell them apart?',
    a: 'Cold MgSO<sub>4</sub> solution: a carbonate gives white MgCO<sub>3</sub> at once; a hydrogencarbonate gives a precipitate only on heating (Mg(HCO<sub>3</sub>)<sub>2</sub> is soluble in the cold). Alkali-metal carbonates are stable to heat (except Li<sub>2</sub>CO<sub>3</sub>), but 2NaHCO<sub>3</sub> → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O + CO<sub>2</sub>. Both fizz with dilute acid',
    why: 'Lime water turns milky with CO<sub>2</sub> (CaCO<sub>3</sub>) and clears with excess, as soluble Ca(HCO<sub>3</sub>)<sub>2</sub> forms.',
    say: null,
  },

  // ── Additional G · Silicon: Silica, Silicates, Silicones and Zeolites ──
  // pp. 492–493
  {
    topic: 12,
    kind: 'remember',
    q: 'The silicate corner-counting rule, and the anions it gives?',
    a: 'A tetrahedron sharing <i>s</i> corners: formula unit SiO<sub>4−<i>s</i>/2</sub>, charge per Si −(4 − <i>s</i>). <i>s</i> = 0: SiO<sub>4</sub><sup>4−</sup>. 1: Si<sub>2</sub>O<sub>7</sub><sup>6−</sup>. 2: rings and single chains, (SiO<sub>3</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup> (Si<sub>3</sub>O<sub>9</sub><sup>6−</sup>). 2 and 3: double chains, (Si<sub>4</sub>O<sub>11</sub>)<sub><i>n</i></sub><sup>6<i>n</i>−</sup>. 3: sheets, (Si<sub>2</sub>O<sub>5</sub>)<sub><i>n</i></sub><sup>2<i>n</i>−</sup>. 4: neutral SiO<sub>2</sub>',
    why: 'Each Al<sup>3+</sup> for Si<sup>4+</sup> adds one negative charge: one Si in four replaced gives [AlSi<sub>3</sub>O<sub>8</sub>]<sup>−</sup>, one in two [Al<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>]<sup>2−</sup>.',
    say: null,
  },
  // pp. 494–495
  {
    topic: 12,
    kind: 'remember',
    q: 'Silicones: what does each chlorosilane do, and how long is the average chain from 98 mol (CH<sub>3</sub>)<sub>2</sub>SiCl<sub>2</sub> with 2 mol (CH<sub>3</sub>)<sub>3</sub>SiCl?',
    a: '(CH<sub>3</sub>)<sub>3</sub>SiCl (one Si–Cl) caps a chain end; (CH<sub>3</sub>)<sub>2</sub>SiCl<sub>2</sub> (two) builds linear [(CH<sub>3</sub>)<sub>2</sub>SiO]<sub><i>n</i></sub>; CH<sub>3</sub>SiCl<sub>3</sub> (three) cross-links; SiCl<sub>4</sub> (four) gives a silica-like network. 2 mol of caps end 1 mol of chains: 98 units per chain',
    why: 'Each Si–Cl bond gives one HCl on hydrolysis: 98 × 2 + 2 × 1 = 198 mol HCl.',
    say: null,
  },

  // ── Additional H · Tin and Lead: Compounds the Papers Name ──
  // pp. 495–497
  {
    topic: 13,
    kind: 'remember',
    q: 'SnCl<sub>2</sub> as a reducing agent: what does it do to HgCl<sub>2</sub>, and to what else?',
    a: '2HgCl<sub>2</sub> + SnCl<sub>2</sub> → Hg<sub>2</sub>Cl<sub>2</sub>↓ (white) + SnCl<sub>4</sub>; with excess SnCl<sub>2</sub>, Hg<sub>2</sub>Cl<sub>2</sub> + SnCl<sub>2</sub> → 2Hg (grey) + SnCl<sub>4</sub>. It also reduces FeCl<sub>3</sub> to FeCl<sub>2</sub>, CuCl<sub>2</sub> to CuCl, I<sub>2</sub> to HI (with HCl), and nitrobenzene to aniline',
    why: 'Overall HgCl<sub>2</sub> + SnCl<sub>2</sub> → Hg + SnCl<sub>4</sub> is 1 : 1, so 0.100 mol HgCl<sub>2</sub> needs 19.0 g of SnCl<sub>2</sub> (<i>M</i> = 190).',
    say: null,
  },
  // pp. 496–497
  {
    topic: 13,
    kind: 'remember',
    q: 'Red lead, Pb<sub>3</sub>O<sub>4</sub>: what is it, and what do nitric acid and hot concentrated HCl do to it?',
    a: '2PbO·PbO<sub>2</sub>: two Pb(II) and one Pb(IV), average +8/3. Nitric acid dissolves the PbO part and leaves brown PbO<sub>2</sub>: Pb<sub>3</sub>O<sub>4</sub> + 4HNO<sub>3</sub> → 2Pb(NO<sub>3</sub>)<sub>2</sub> + PbO<sub>2</sub>↓ + 2H<sub>2</sub>O. Hot concentrated HCl is oxidised: Pb<sub>3</sub>O<sub>4</sub> + 8HCl → 3PbCl<sub>2</sub> + 4H<sub>2</sub>O + Cl<sub>2</sub>',
    why: 'Lead dissolves readily in dilute HNO<sub>3</sub> (lead nitrate is soluble) but hardly in dilute HCl or H<sub>2</sub>SO<sub>4</sub>, which coat it with insoluble PbCl<sub>2</sub> or PbSO<sub>4</sub>.',
    say: null,
  },

  // ── Additional I · Which Is Stronger, Which Is More Stable: The Reasoning Rules ──
  // pp. 498–499
  {
    topic: 14,
    kind: 'remember',
    q: 'Oxide character in groups 13 and 14: the rule and the cases?',
    a: 'Higher oxidation state, more acidic; down a group, more basic. B<sub>2</sub>O<sub>3</sub> acidic; Al<sub>2</sub>O<sub>3</sub>, Ga<sub>2</sub>O<sub>3</sub> amphoteric; In<sub>2</sub>O<sub>3</sub>, Tl<sub>2</sub>O<sub>3</sub> basic. CO<sub>2</sub>, SiO<sub>2</sub>, GeO<sub>2</sub> acidic; SnO<sub>2</sub>, PbO<sub>2</sub> amphoteric. CO neutral; GeO acidic; SnO, PbO amphoteric',
    why: 'So of Na<sub>2</sub>O, NiO, CaO and SnO, the most acidic is SnO: the other three are basic.',
    say: null,
  },
  // p. 498
  {
    topic: 14,
    kind: 'mixup',
    q: 'Al<sup>3+</sup> with NaOH and with aqueous ammonia: does the precipitate dissolve in excess?',
    a: 'With NaOH, the white gelatinous precipitate dissolves in excess (aluminate); with aqueous ammonia, the white precipitate does not. Heated on charcoal with Co(NO<sub>3</sub>)<sub>2</sub>, Al<sup>3+</sup> leaves a blue residue (Thenard’s blue)',
    why: 'Pb<sup>2+</sup>: dilute HCl gives white PbCl<sub>2</sub>, soluble in hot water; then iodide gives yellow PbI<sub>2</sub>, chromate yellow PbCrO<sub>4</sub>, H<sub>2</sub>S black PbS.',
    say: null,
  },

  // ── Additional K · What JEE and NEET Actually Ask ──
  // p. 500
  {
    topic: 16,
    kind: 'remember',
    q: 'In what forms are groups 13 and 14 tested?',
    a: 'Usually one idea per question: recall with a reason; compare and rank (Lewis acidity, oxide character, bond length, stability); count (bonds in diborane or C<sub>60</sub>, the charge on a silicate); identify (a precipitate, a bead colour, a flame); one-step stoichiometry on a named reaction; and statement pairs that hide one inverted clause. Name the rule first',
    why: 'Each “why does X not exist” has a one-line cause: [BF<sub>6</sub>]<sup>3−</sup> and [CF<sub>6</sub>]<sup>2−</sup>, no d orbitals; PbI<sub>4</sub>, the inert pair; GaCl<sub>2</sub>, really Ga<sup>+</sup>[GaCl<sub>4</sub>]<sup>−</sup>.',
    say: null,
  },
  // pp. 500–502
  {
    topic: 16,
    kind: 'mistake',
    q: 'Which traps recur in group 13 and 14 questions?',
    a: 'Boric acid taken as tribasic (it is monobasic, <i>n</i>-factor 1, even with a cis-diol); the inert pair effect read backwards (it stabilises the lower state: Pb(IV) oxidises, Sn(II) reduces); Lewis acidity ranked by electronegativity (BF<sub>3</sub> is the weakest boron halide acid); the borax anion written as B<sub>4</sub>O<sub>7</sub><sup>2−</sup>; lime water that “does not clear” (excess CO<sub>2</sub> gives soluble Ca(HCO<sub>3</sub>)<sub>2</sub>)',
    why: 'Borax takes two moles of HCl, not four: 25.0 mL of 0.100 M HCl reacts with 1.25 × 10<sup>−3</sup> mol, 0.477 g, of Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O.',
    say: null,
  },
];
