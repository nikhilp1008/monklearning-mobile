import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, the opening section (Subtopic 00) and Topics 01 to 04: pp. 346–380
 * of the Class 11 Chemistry Master Reference, word for word. The chapter’s
 * title page (p. 345) and contents (top of p. 346) are not copied. The opening
 * section, Foundations — Introduction, Structural Representation &
 * Classification (pp. 346–352), is the chapter’s “Start here” (n '00'); then
 * Topic 01, Hybridization & IUPAC Nomenclature (pp. 353–358), Topic 02,
 * Isomerism (pp. 359–365), Topic 03, Reaction Mechanisms — Fundamental
 * Concepts (pp. 366–373), and Topic 04, Purification, Qualitative &
 * Quantitative Analysis (pp. 374–380), each split at its Sections 1 to 8.
 * Figure 8.1 (cited p. 347, drawn p. 348) and Figure 8.2 (cited p. 367, drawn
 * p. 368) are redrawn in lib/diagrams/chemistry-11-08.ts; these pages draw no
 * other structure. Hybrid and orbital labels are upright (sp<sup>3</sup>, 2s,
 * 2p), as in the NCERT books; group bonds use an en dash (–OH, –CH<sub>2</sub>–).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Opening section · pp. 346–352 ─────────────────────────
  {
    n: '00',
    title: 'Foundations — Introduction, Structural Representation & Classification',
    kalam: 'Organic chemistry is, simply, the chemistry of carbon compounds.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the orientation layer of the chapter. CBSE Boards ask 1–2 mark items on functional groups, homologous series, and converting between structural formulae; NEET routinely tests classification and functional-group identification; JEE Main expects fluent reading of bond-line structures in every organic question. None of it is hard, but it is assumed everywhere — weak foundations here quietly cost marks across the whole of organic chemistry.',
      },
      {
        t: 'p',
        html: 'Organic chemistry is, simply, <b>the chemistry of carbon compounds</b>. The name is a historical fossil: chemists once believed these compounds could only be made inside living organisms by a mysterious “vital force.” That idea collapsed in 1828 when Friedrich Wöhler made <b>urea</b> — an unmistakably “organic” substance — in the lab from the purely inorganic ammonium cyanate. The wall between living and non-living chemistry came down, but the name “organic” stuck.',
      },
      {
        t: 'p',
        html: 'Why does one element get an entire branch of chemistry to itself? Because carbon is uniquely talented at building.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> carbon is the LEGO brick of the molecular world. A single brick is unremarkable, but its four connection points (carbon is <b>tetravalent</b> — it forms four bonds) and its willingness to clip onto other carbon bricks (a property called <b>catenation</b>) let it assemble into chains, branches, and rings of essentially unlimited size. Add the fact that carbon can form single, double, and triple bonds, link to many other elements (H, O, N, S, halogens), and produce isomers, and you get the millions of distinct organic compounds that make up fuels, plastics, medicines, and life itself.',
      },
      {
        t: 'p',
        html: 'So three foundational skills unlock the rest of the chapter:<br>1. <b>Drawing</b> a molecule efficiently (structural representation) — because writing out every atom is unworkable for big molecules.<br>2. <b>Classifying</b> it (open chain vs ring, which functional group) — because reactivity follows class, not individual molecule.<br>3. <b>Placing it in a family</b> (homologous series) — because members of a family behave predictably.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Carbon’s catenation is exceptional but not infinite in practice — very long unbranched chains become unstable or hard to isolate. And “organic” today simply means carbon-containing, with a few conventional exceptions (oxides of carbon, carbonates, carbides, and cyanides are treated as inorganic by tradition, not logic).',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: '<b>Why carbon is special (the four pillars):</b><br>• <b>Tetravalence:</b> four valence electrons → four covalent bonds, giving stable, three-dimensional frameworks.<br>• <b>Catenation:</b> carbon’s strong, similar-strength C–C bonds let it self-link into chains and rings far beyond any other element.<br>• <b>Multiple bonding & small size:</b> short, strong bonds and the ability to form π bonds (C=C, C≡C) add structural variety.<br>• <b>Isomerism:</b> the same atoms can be arranged many ways (covered fully in the Isomerism topic).',
      },
      {
        t: 'p',
        html: '<b>Structural representations</b> (four ways to draw the same molecule, e.g. propan-1-ol):<br>• <b>Complete (Lewis/dash) formula:</b> every atom and every bond shown explicitly. Clear but bulky.<br>• <b>Condensed formula:</b> bonds largely omitted; groups grouped, e.g. CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH or CH<sub>3</sub>(CH<sub>2</sub>)<sub>2</sub>OH.<br>• <b>Bond-line (zig-zag) formula:</b> the carbon skeleton is a zig-zag of lines; <b>each vertex and each line-end is a carbon</b>, <b>hydrogens on carbon are implied</b> (enough to complete tetravalence), and heteroatoms (O, N, halogens) and their H’s are written explicitly.<br>• <b>Three-dimensional (wedge–dash) formula:</b> a solid wedge points toward you, a hashed wedge points away, plain lines lie in the plane — used to show real spatial shape.',
      },
      { t: 'fig', id: 'c11-08-fig-8.1' },
      {
        t: 'table',
        title: 'Classification of organic compounds',
        head: ['Branch', 'Subdivision', 'Description / example'],
        rows: [
          ['Acyclic (open chain)', '—', 'straight or branched chains; e.g. butane, isobutane (“aliphatic”)'],
          ['Cyclic (closed ring)', '<b>Carbocyclic (homocyclic) → alicyclic</b>', 'rings of only carbon, non-aromatic; e.g. cyclohexane'],
          ['', '<b>Carbocyclic → aromatic (benzenoid)</b>', 'benzene ring systems; e.g. benzene, naphthalene'],
          ['', '<b>Heterocyclic</b>', 'ring contains at least one non-carbon atom; e.g. pyridine, furan'],
        ],
      },
      {
        t: 'def',
        term: 'Functional group',
        html: 'the atom or group of atoms that defines a molecule’s characteristic chemistry. Common groups:',
      },
      {
        t: 'table',
        title: null,
        head: ['Group', 'Formula', 'Class'],
        rows: [
          ['Hydroxyl', '–OH', 'alcohol'],
          ['Aldehyde', '–CHO', 'aldehyde'],
          ['Carbonyl', '>C=O', 'ketone'],
          ['Carboxyl', '–COOH', 'carboxylic acid'],
          ['Amino', '–NH<sub>2</sub>', 'amine'],
          ['Cyano', '–C≡N', 'nitrile'],
          ['Halo', '–X', 'haloalkane'],
        ],
      },
      {
        t: 'def',
        term: 'Homologous series',
        html: 'a family of compounds with the <b>same functional group and general formula</b>, where successive members differ by a –CH<sub>2</sub>– unit. Members are homologues. Characteristics: a common general formula (alkanes C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>, alkenes C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>, alkynes C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>), a steady <b>gradation in physical properties</b> (boiling point rises with chain length), and <b>similar chemical properties</b> (same functional group).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — convert a condensed formula to a bond-line structure',
        steps: [
          'Identify the longest carbon chain and draw it as a continuous zig-zag (each turn = one carbon).',
          'Do <b>not</b> draw C–H bonds or the H’s on carbon — they are understood.',
          'Write heteroatoms (O, N, halogens) explicitly, along with any H bonded to them (e.g., the H of –OH).',
          'Place branches as lines coming off the appropriate vertices. <b>Why:</b> the skeleton carries the information; suppressing the abundant, predictable C–H bonds makes large molecules readable at a glance.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — classify an unknown compound',
        steps: [
          'Is the carbon framework an <b>open chain</b> or a <b>closed ring</b>? → acyclic vs cyclic.',
          'If cyclic, does the ring contain only carbon (<b>carbocyclic</b>) or a heteroatom (<b>heterocyclic</b>)?',
          'If carbocyclic, is it <b>aromatic</b> (benzene-type) or <b>alicyclic</b> (non-aromatic ring)?',
          'Identify the <b>functional group(s)</b> present to name the class. <b>Why:</b> reactivity is governed first by class and functional group, so classification predicts chemistry before any reaction is written.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — recognise a homologous series',
        steps: [
          'Check that all candidate compounds share the <b>same functional group</b>.',
          'Verify each successive member differs by exactly CH<sub>2</sub>.',
          'Confirm they fit one general formula. <b>Why:</b> once a compound is placed in a series, its unknown properties can be interpolated from its neighbours.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the condensed and bond-line formulae for 2-methylbutane.',
        steps: [
          '<b>Skeleton:</b> a four-carbon chain with a methyl branch on C2.',
          '<b>Condensed:</b> CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>.',
          '<b>Bond-line:</b> a four-vertex zig-zag with one extra line (the methyl) coming off the second vertex; no H’s or C labels drawn.',
          '<b>Board habit:</b> state the longest chain first, then attach branches — this guarantees you capture all carbons before condensing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Classify pyridine, cyclohexane, and naphthalene.',
        steps: [
          '<b>Pyridine:</b> a six-membered ring containing one nitrogen → <b>heterocyclic</b> (and aromatic).',
          '<b>Cyclohexane:</b> a six-carbon ring, no double bonds → <b>carbocyclic, alicyclic</b>.',
          '<b>Naphthalene:</b> fused benzene rings, all carbon → <b>carbocyclic, aromatic (benzenoid)</b>.',
          '<b>Trap:</b> calling pyridine “aromatic carbocyclic.” It is aromatic, but the nitrogen in the ring makes it <b>heterocyclic</b> — the heteroatom classification takes precedence in the family tree.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A compound has the general formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O and reacts as a ketone. Identify its functional group, its homologous series’ general formula, and the next two higher homologues of the simplest ketone in the series.',
        steps: [
          '<b>Functional group:</b> carbonyl >C=O in a ketone (a ketone needs the carbonyl flanked by two carbons, so the smallest is propanone).',
          '<b>General formula for the ketone series:</b> C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O (matches the given).',
          '<b>Simplest ketone:</b> propanone C<sub>3</sub>H<sub>6</sub>O; next homologues: butanone C<sub>4</sub>H<sub>8</sub>O, then pentan-2-one C<sub>5</sub>H<sub>10</sub>O — each adds CH<sub>2</sub>.',
          '<b>Multi-concept link:</b> you connected a general formula, a functional group, and the +CH<sub>2</sub> homologue rule in one chain of reasoning — the standard JEE Main “family” question.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The bond-line structure below has six vertices arranged as a ring with a –OH drawn on one vertex and a double bond between two adjacent ring carbons. Determine the molecular formula and classify the compound fully.',
        steps: [
          'Six ring carbons (each vertex = C). One double bond inside the ring; one carbon bears –OH.',
          '<b>Hydrogens by tetravalence:</b> the two double-bonded carbons carry 1 H each; the carbon bearing the OH carries 1 H; the other three ring carbons carry 2 H each; the O–H adds 1: 2 + 1 + 6 + 1 = 10 H. Formula: C<sub>6</sub>H<sub>10</sub>O (cyclohex-2-en-1-ol).',
          '<b>Classification:</b> <b>cyclic</b> → <b>carbocyclic</b> → <b>alicyclic</b> (a non-aromatic ring, despite one C=C), bearing an <b>alcohol</b> functional group.',
          '<b>Rigor point:</b> a single C=C in a ring does <b>not</b> make it aromatic — aromaticity requires a fully conjugated, planar, (4<i>n</i> + 2) π ring. This is the classic “alicyclic vs aromatic” discrimination Advanced papers exploit.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the bond-line formula of CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH.',
            a: 'A four-vertex zig-zag with –OH written at the terminal vertex.',
          },
          {
            q: '[NEET] Name the functional group present in CH<sub>3</sub>COCH<sub>3</sub> and the class of compound.',
            a: 'Carbonyl >C=O; the compound is a ketone (propanone).',
          },
          {
            q: '[JEE Main] Give the general formula of the alkyne homologous series and write the third member.',
            a: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>−2</sub>; third member is but-1-yne C<sub>4</sub>H<sub>6</sub>.',
          },
          {
            q: '[JEE Main] Classify furan (a five-membered ring with one oxygen).',
            a: 'Cyclic → heterocyclic (and aromatic).',
          },
          {
            q: '[JEE Advanced] A homologous series has general formula C<sub><i>n</i></sub>H<sub>2<i>n</i>+1</sub>COOH. Write its first three members and state how the boiling points trend.',
            a: 'The series is the carboxylic acids: methanoic HCOOH, ethanoic CH<sub>3</sub>COOH, propanoic C<sub>2</sub>H<sub>5</sub>COOH; boiling points rise steadily with chain length.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a bond-line formula, a plain vertex with no label represents:',
        opts: [
          { label: 'a hydrogen atom', nudge: '<b>(a)</b> H atoms on carbon are precisely what is not drawn.' },
          { label: 'a carbon atom with its required H’s implied', nudge: null },
          { label: 'an oxygen atom', nudge: '<b>(c)</b> heteroatoms are always written explicitly, never left as bare vertices.' },
          { label: 'an empty position', nudge: '<b>(d)</b> there are no “empty” positions in a valid structure.' },
        ],
        correct: 1,
        solution: 'Vertices and line-ends are carbons; their hydrogens are understood from tetravalence.',
      },
      {
        t: 'mcq',
        q: 'Which property of carbon is <b>most</b> responsible for the huge number of organic compounds?',
        opts: [
          { label: 'high electronegativity', nudge: '<b>(a)</b> carbon’s electronegativity is moderate and not the cause.' },
          { label: 'catenation', nudge: null },
          { label: 'metallic character', nudge: '<b>(c)</b> carbon is non-metallic.' },
          { label: 'low ionisation energy', nudge: '<b>(d)</b> ionisation energy is not the driver of structural diversity.' },
        ],
        correct: 1,
        solution: 'Self-linking into chains and rings of any size multiplies the possible structures enormously.',
      },
      {
        t: 'mcq',
        q: 'Successive members of a homologous series differ by:',
        opts: [
          { label: 'CH<sub>3</sub>', nudge: '<b>(a)</b> a methyl differs by one C and three H, not the homologous increment.' },
          { label: 'CH<sub>2</sub>', nudge: null },
          { label: 'C<sub>2</sub>H<sub>4</sub>', nudge: '<b>(c)</b> that is two CH<sub>2</sub> units — the gap between alternate members.' },
          { label: 'H<sub>2</sub>', nudge: '<b>(d)</b> adding H<sub>2</sub> changes saturation, not chain length.' },
        ],
        correct: 1,
        solution: 'Each homologue adds one methylene (CH<sub>2</sub>) unit.',
      },
      {
        t: 'mcq',
        q: 'Tetrahydrofuran is a five-membered ring containing one oxygen. It is classified as:',
        opts: [
          { label: 'acyclic', nudge: '<b>(a)</b> it is a closed ring, not open chain.' },
          { label: 'carbocyclic alicyclic', nudge: '<b>(b)</b> the oxygen disqualifies “carbocyclic.”' },
          { label: 'heterocyclic', nudge: null },
          { label: 'aromatic carbocyclic', nudge: '<b>(d)</b> it is saturated and non-aromatic, and again not all-carbon.' },
        ],
        correct: 2,
        solution: 'A ring with a non-carbon atom (O) is heterocyclic.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Vertex = carbon.</b> Every unlabeled corner and free end in a bond-line drawing is a carbon with its H’s filled in automatically.',
          '<b>Heteroatoms are explicit.</b> O, N, and halogens — and the H’s attached to them — are always drawn; only C–H is suppressed.',
          '<b>Heteroatom beats aromatic in classification.</b> Pyridine is heterocyclic first, aromatic second.',
          '<b>CH<sub>2</sub> is the homologous increment,</b> and a lone ring double bond does not make a ring aromatic.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> To get a molecular formula from a bond-line drawing fast, count vertices/ends for carbons, then fill hydrogens by giving each carbon enough H to reach four bonds — never count H one by one across the whole structure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Organic chemistry = chemistry of carbon compounds', note: 'vitalism died with Wöhler’s urea synthesis (1828).' },
          { f: 'Carbon is special', note: 'tetravalence + catenation + multiple bonding + isomerism → millions of compounds.' },
          {
            f: 'Four representations',
            note: 'complete (Lewis) · condensed · bond-line (vertex = C, C–H implied, heteroatoms explicit) · 3D wedge-dash.',
          },
          {
            f: 'Classification',
            note: 'acyclic vs cyclic → (carbocyclic: alicyclic / aromatic) vs heterocyclic; then by functional group.',
          },
          {
            f: 'Homologous series',
            note: 'same functional group + general formula; members differ by CH<sub>2</sub>; gradation in physical, similarity in chemical properties.',
          },
        ],
        aids: ['“vertex and end are carbon, heteroatoms shout”', '“CH<sub>2</sub> climbs the family ladder.”'],
      },
    ],
  },

  // ───────────────────────── Topic 01 · pp. 353–358 ─────────────────────────
  {
    n: '01',
    title: 'Hybridization & IUPAC Nomenclature',
    kalam: 'There is exactly one correct IUPAC name per compound, and one structure per name.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Naming is the single most reliable scoring topic of this chapter — CBSE Boards almost always carry a 1–2 mark “name this / draw this” question, and JEE Main reliably places 1 nomenclature MCQ per paper. Hybridization of carbon shows up everywhere downstream (bond angles, acidity, geometry) and is a favourite NEET single-line question. JEE Advanced rarely asks naming directly but assumes it silently in every mechanism problem.',
      },
      {
        t: 'p',
        html: '<b>Hybridization — why carbon refuses to behave “on paper.”</b><br>On paper, a carbon atom has two electrons sitting in a spherical 2s orbital and two in dumbbell-shaped 2p orbitals. If carbon used those orbitals as-is, methane’s four C–H bonds would come in two different flavours and two different lengths. Experiment says otherwise: all four C–H bonds in CH<sub>4</sub> are identical, pointing to the corners of a perfect tetrahedron. Nature resolved the contradiction by mixing.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine a sabziwala with one large 5 kg bag of onions (s) and three identical 1 kg bags of potatoes (p). A customer wants four equal mixed bags. The only fair solution is to empty everything out and repack into four identical bags, each holding the same blend. Those four new bags are the <b>hybrid orbitals</b>. Mix one s with three p and you get four equal sp<sup>3</sup> orbitals; mix one s with two p and you get three sp<sup>2</sup> (the leftover p stays pure); mix one s with one p and you get two sp (two pure p left over).',
      },
      {
        t: 'p',
        html: 'The leftover pure p orbitals are what form the second and third bonds of double and triple bonds — the π <b>bonds</b>. So the rule of thumb writes itself: a carbon making only single bonds is sp<sup>3</sup> (tetrahedral, bond angle 109.5°); one double bond makes it sp<sup>2</sup> (trigonal planar, 120°); a triple bond or two cumulated double bonds make it sp (linear, 180°).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions:</b> this “count the bonds” shortcut works cleanly for carbon precisely because carbon in stable organic molecules carries no lone pairs. The moment you move to N, O, or charged carbon (carbocation, carbanion), you must count lone pairs too — the shortcut alone will mislead you.',
      },
      {
        t: 'p',
        html: '<b>Nomenclature — chemistry’s PIN code system.</b><br>Millions of organic compounds exist; “common names” like acetic acid or formaldehyde could never scale. The IUPAC system solves this the way Indian Railways assigns train numbers: every name is built from rules so strict that the structure can be read straight off the name, and the name can be reconstructed straight from the structure. There is exactly one correct IUPAC name per compound, and one structure per name.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> an IUPAC name is a postal address written backwards. You start from the most important landmark (the <b>principal functional group</b>, which becomes the suffix), then the locality (the <b>parent chain</b>), then the lane and house markers (<b>substituents</b> as prefixes), and finally the house numbers (<b>locants</b>) chosen to give the lowest set.',
      },
      {
        t: 'p',
        html: '<b>Limiting condition:</b> the rules assume a single longest chain can be unambiguously chosen and a single principal group identified. When two choices tie, IUPAC has explicit tie-breakers (lowest-locant set, then first point of difference, then alphabetical) — and those tie-breakers are exactly where exam marks are won and lost.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'table',
        title: 'Hybridization of carbon',
        head: ['Hybridization', 'Orbitals mixed', 'σ + π on C', 'Geometry', 'Bond angle', '%s-character', 'Typical centre'],
        rows: [
          ['sp<sup>3</sup>', '1s + 3p', '4σ, 0π', 'tetrahedral', '109.5°', '25%', 'alkane C, CH<sub>4</sub>'],
          ['sp<sup>2</sup>', '1s + 2p', '3σ, 1π', 'trigonal planar', '120°', '33.3%', 'alkene C, carbonyl C'],
          ['sp', '1s + 1p', '2σ, 2π', 'linear', '180°', '50%', 'alkyne C, nitrile C'],
        ],
      },
      {
        t: 'p',
        html: 'Trends that follow from %s-character (higher s = electrons held closer to nucleus):<br>• <b>Bond length / strength:</b> higher s-character → shorter, stronger σ bond. So sp C–H < sp<sup>2</sup> C–H < sp<sup>3</sup> C–H in length.<br>• <b>Acidity of terminal C–H:</b> sp C–H (in alkynes) is the most acidic, sp<sup>3</sup> the least.<br>• <b>Electronegativity of carbon:</b> sp > sp<sup>2</sup> > sp<sup>3</sup>.',
      },
      {
        t: 'p',
        html: '<b>Nomenclature anatomy.</b> A full IUPAC name reads:<br>locant-prefix (substituents) · root (C count) · unsaturation (-ane/-ene/-yne) · locant-suffix (principal group)',
      },
      {
        t: 'p',
        html: 'Carbon-count roots: 1 meth, 2 eth, 3 prop, 4 but, 5 pent, 6 hex, 7 hept, 8 oct, 9 non, 10 dec.',
      },
      {
        t: 'p',
        html: '<b>Seniority order for the principal characteristic group</b> (the one that becomes the suffix; everything below it in a given molecule is demoted to a prefix):<br>–COOH > –SO<sub>3</sub>H > (anhydride > ester > acyl halide > amide) > –CN > –CHO > >C=O > –OH > –NH<sub>2</sub>',
      },
      {
        t: 'table',
        title: 'Suffix vs. prefix forms of the common groups',
        head: ['Group', 'As principal (suffix)', 'As substituent (prefix)'],
        rows: [
          ['–COOH', '-oic acid', 'carboxy-'],
          ['–CHO', '-al', 'oxo- (in chain) / formyl- (off chain)'],
          ['>C=O', '-one', 'oxo-'],
          ['–OH', '-ol', 'hydroxy-'],
          ['–NH<sub>2</sub>', '-amine', 'amino-'],
          ['–C≡N', '-nitrile', 'cyano-'],
        ],
      },
      {
        t: 'p',
        html: 'Halogens (–F, –Cl, –Br, –I), –NO<sub>2</sub>, and alkyl/alkoxy groups are always prefixes (never the principal group).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — assigning hybridization to any carbon',
        steps: [
          'For a neutral carbon with <b>no lone pair</b>, simply count the number of σ bonds (a single bond is 1σ; a double bond is 1σ+1π; a triple bond is 1σ+2π). The σ-count is the steric number.',
          'Steric number 4 → sp<sup>3</sup>; 3 → sp<sup>2</sup>; 2 → sp.',
          '<b>Why this works:</b> hybrid orbitals only ever house σ bonds and lone pairs. π bonds always use leftover unhybridized p orbitals, so they never raise the steric number.',
          'For heteroatoms or charged centres, add lone pairs to the count (e.g., the carbon of a carbocation has 3σ + 0 lp → sp<sup>2</sup>; a carbanion has 3σ + 1 lp → sp<sup>3</sup>).',
        ],
      },
      {
        t: 'p',
        html: '<b>Worked logic — propyne, CH<sub>3</sub>–C≡CH:</b> C1 (methyl) has 4σ → sp<sup>3</sup>; C2 and C3 each have 2σ (one single, one triple-bond σ) → sp. The ≡ contributes two π bonds from pure p orbitals, which is why the C2–C3 region is linear.',
      },
      {
        t: 'proc',
        title: 'Procedure B — building an IUPAC name',
        steps: [
          '<b>Identify the principal functional group</b> using the seniority list. This decides the suffix and forces the chain to include that group’s carbon.',
          '<b>Select the parent chain:</b> the longest continuous chain that contains the principal group (and the maximum number of skeletal double/triple bonds, as a later tie-breaker). The longest chain is not always the one drawn horizontally — why: the name must capture the largest possible carbon framework so the structure is uniquely recoverable.',
          '<b>Number the chain</b> to give the lowest locant to the principal characteristic group first. If the group can sit at the same number from either end, fall to the lowest locant for the set of unsaturations, then for substituents. <b>Why:</b> a single deterministic tie-break chain guarantees one unique name.',
          '<b>Name substituents</b> as prefixes, each with its locant, arranged <b>alphabetically</b>. Multiplying prefixes (di, tri, tetra) and sec-/tert- are ignored when alphabetizing; iso, neo and cyclo count as part of the name (so isopropyl is filed under i, not p, and neopentyl under n, not p).',
          '<b>Resolve ties by first point of difference:</b> compare locant sets term by term; the set that is lower at the first point where they differ wins (e.g., {2,3,6} beats {2,4,5}).',
          '<b>Assemble:</b> prefixes (alphabetical, hyphenated locants) → root → unsaturation with locant → principal-group suffix with locant. Elide the terminal “e” of -ane/-ene/-yne before a suffix starting with a vowel (e.g., propan<b>e</b> + -ol → propan-1-ol; and but-2-en<b>e</b> + -ol → but-2-en-1-ol, the “e” being elided in both).',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Give the IUPAC name and state the hybridization of each carbon in CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CHO.',
        steps: [
          '<b>Principal group:</b> the molecule has –OH and –CHO. By seniority, –CHO (aldehyde) outranks –OH, so the suffix is <b>-al</b> and –OH is demoted to the prefix <b>hydroxy-</b>.',
          '<b>Parent chain:</b> 4 carbons including the –CHO carbon → butanal.',
          '<b>Numbering:</b> the aldehyde carbon is by definition C1 (an –CHO group is terminal), giving it locant 1. The –OH then sits on C3.',
          '<b>Name: 3-hydroxybutanal.</b>',
          '<b>Hybridization:</b> C1 (CHO) is sp<sup>2</sup> (one C=O); C2 (CH<sub>2</sub>) is sp<sup>3</sup>; C3 (CHOH) is sp<sup>3</sup>; C4 (CH<sub>3</sub>) is sp<sup>3</sup>.',
          '<b>Concluding note:</b> state the suffix group first, then demote the rest — this single habit prevents the most common board error of naming the compound as a “-ol.”',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In but-3-en-2-one (methyl vinyl ketone), CH<sub>2</sub>=CH–CO–CH<sub>3</sub>, how many carbons are sp<sup>2</sup> hybridized?',
        steps: [
          '<b>Speed method:</b> scan for double bonds. C=C contributes two sp<sup>2</sup> carbons; C=O contributes one more.',
          'C1 (CH<sub>3</sub>, 4σ) is sp<sup>3</sup>; C2 (C=O) is sp<sup>2</sup>; C3 (=CH) is sp<sup>2</sup>; C4 (=CH<sub>2</sub>) is sp<sup>2</sup>.',
          '<b>Trap:</b> students count the two alkene carbons and forget the carbonyl carbon is also sp<sup>2</sup>. The carbonyl is the most-missed sp<sup>2</sup> centre in NEET. Mental check: “every carbon touching a double bond — including C=O — is sp<sup>2</sup>.”',
        ],
        ans: '3.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Name CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–COOH and give the hybridization of C2.',
        steps: [
          '<b>Principal group:</b> –COOH → suffix <b>-oic acid</b>, and its carbon is C1.',
          '<b>Parent chain:</b> longest chain through –COOH is 4 carbons → butanoic acid backbone.',
          '<b>Unsaturation:</b> double bond between C3 and C4 → but-3-enoic acid.',
          '<b>Substituent:</b> methyl on C2 → 2-methyl.',
          '<b>Name: 2-methylbut-3-enoic acid.</b>',
          '<b>Hybridization of C2:</b> C2 bears the methyl, the H, the C1, and the C3 — all single bonds → 4σ → sp<sup>3</sup>. (C1 sp<sup>2</sup>, C3 sp<sup>2</sup>, C4 sp<sup>2</sup>.)',
          '<b>Multi-concept link:</b> you needed seniority (COOH demotes nothing here, but fixes C1), longest-chain selection through that group, lowest-locant numbering, and a hybridization count — the standard JEE Main “name + property” pairing.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A compound has the structure HC≡C–CH(OH)–COOH. Give its IUPAC name, the hybridization of every carbon, and explain the geometry around C3–C4.',
        steps: [
          '<b>Principal group:</b> –COOH outranks –OH → suffix <b>-oic acid</b>, carbon of –COOH is C1; –OH becomes <b>2-hydroxy-</b>.',
          '<b>Parent chain:</b> 4 carbons → but-…-oic acid; triple bond between C3 and C4 → <b>but-3-ynoic acid</b>.',
          '<b>Name: 2-hydroxybut-3-ynoic acid.</b>',
          '<b>Hybridization:</b> C1 (COOH, one C=O) → sp<sup>2</sup>; C2 (CHOH, 4σ) → sp<sup>3</sup>; C3 (≡C, 2σ) → sp; C4 (≡CH, 2σ) → sp.',
          '<b>Geometry around C3–C4:</b> both sp carbons are collinear with their attached atoms (H–C4≡C3–C2 lie on one straight line, bond angle 180°). The triple bond is one σ (from sp–sp overlap) plus two mutually perpendicular π bonds formed by the two unhybridized p orbitals on each carbon — a cylindrically symmetric electron cloud around the C≡C axis.',
          '<b>Rigor check:</b> the trap an Advanced paper sets here is tempting you to name it “but-1-ynoic acid” by numbering from the alkyne end. Seniority of –COOH forces C1 onto the acid carbon regardless of where the triple bond sits.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the IUPAC name of (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–OH.',
            a: '2-methylpropan-1-ol',
          },
          {
            q: '[NEET] How many sp hybridized carbons are present in CH<sub>2</sub>=C=CH<sub>2</sub> (propadiene)?',
            a: 'One (sp): only the central carbon.',
          },
          {
            q: '[JEE Main] Give the IUPAC name of CH<sub>3</sub>–CO–CH<sub>2</sub>–COOH.',
            a: '3-oxobutanoic acid',
          },
          {
            q: '[JEE Main] Arrange the C–H bonds of ethane, ethene, and ethyne in increasing order of bond length.',
            a: 'ethyne (sp) < ethene (sp<sup>2</sup>) < ethane (sp<sup>3</sup>)',
          },
          {
            q: '[JEE Advanced] A six-carbon open chain bears a methyl on one carbon and an ethyl on another; numbering from the left gives the substituent set {2,4} and from the right gives {3,5}. Which direction is correct, and write the full name if the ethyl is the one reached at position 4 from the left.',
            a: 'Number from the left (set {2,4} beats {3,5} at the first point of difference); name: 4-ethyl-2-methylhexane.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The IUPAC name of CH<sub>3</sub>–CH<sub>2</sub>–COOH is:',
        opts: [
          { label: 'propanoic acid', nudge: null },
          {
            label: 'ethanecarboxylic acid',
            nudge: '<b>(b)</b> treats –COOH as an external “carboxylic acid” substituent on a 2-carbon chain — a substitutive error; the COOH carbon must be counted in the parent chain.',
          },
          { label: 'ethanoic acid', nudge: '<b>(c)</b> counts only 2 carbons, forgetting the carbonyl carbon belongs to the chain.' },
          {
            label: 'propionic acid',
            nudge: '<b>(d)</b> is the common name (propionic acid), not the IUPAC name — the classic “common-vs-systematic” distractor.',
          },
        ],
        correct: 0,
        solution: 'Three carbons including the –COOH carbon → propan- + -oic acid.',
      },
      {
        t: 'mcq',
        q: 'The number of sp<sup>2</sup> carbons in benzaldehyde’s molecule (ring + CHO) is:',
        opts: [
          { label: '1', nudge: '<b>(a)</b> counts only the CHO carbon, ignoring the ring.' },
          {
            label: '6',
            nudge: '<b>(b)</b> counts the ring but forgets the carbonyl carbon — the same “carbonyl is sp<sup>2</sup>” miss as worked example 2.',
          },
          { label: '7', nudge: null },
          { label: '3', nudge: '<b>(d)</b> comes from wrongly treating alternate ring carbons as sp<sup>3</sup>.' },
        ],
        correct: 2,
        solution: 'All six ring carbons are sp<sup>2</sup> (each in the aromatic π system) and the aldehyde carbon (C=O) is also sp<sup>2</sup> → 7.',
      },
      {
        t: 'mcq',
        q: 'In which numbering rule does the set {2,7,8} win over {3,4,8}?',
        opts: [
          { label: 'lowest locant to principal group', nudge: '<b>(a)</b> would only apply to a single functional-group locant, not a substituent set.' },
          { label: 'first point of difference', nudge: null },
          { label: 'alphabetical priority', nudge: '<b>(c)</b> decides citation order in the name, not which numbering direction to keep.' },
          { label: 'maximum unsaturation', nudge: '<b>(d)</b> is a chain-selection rule, irrelevant to comparing two locant sets.' },
        ],
        correct: 1,
        solution: 'Compare term by term: 2 vs 3 — {2,…} is lower at the very first point, so it wins outright.',
      },
      {
        t: 'mcq',
        q: 'The central carbon of a carbocation (R<sub>3</sub>C<sup>+</sup>) is:',
        opts: [
          { label: 'sp<sup>3</sup>, tetrahedral', nudge: '<b>(a)</b> applies the neutral-carbon habit blindly, forgetting the missing bond/electron.' },
          { label: 'sp<sup>2</sup>, trigonal planar', nudge: null },
          { label: 'sp, linear', nudge: '<b>(c)</b> over-counts the electron deficiency as if it removed two bonds.' },
          { label: 'sp<sup>3</sup>, planar', nudge: '<b>(d)</b> mixes a correct shape word with the wrong hybridization label — a “half-remembered” trap.' },
        ],
        correct: 1,
        solution: 'Three σ bonds and no lone pair → steric number 3 → sp<sup>2</sup>, trigonal planar, with an empty unhybridized p orbital.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Naming the wrong group as the suffix.</b> When both –COOH and –OH appear, beginners name an “-ol.” Always run the seniority list first and demote everything below the winner to a prefix.',
          '<b>Missing the longest chain.</b> The longest chain may bend through what looks like a “branch.” Trace every path, not just the horizontal one.',
          '<b>Tie-break confusion.</b> Lowest-locant set is decided by first point of difference, <b>not</b> by the sum of the locants. {2,7,8} (sum 17) beats {3,4,8} (sum 15).',
          '<b>Forgetting the carbonyl is sp<sup>2</sup></b> and applying the neutral shortcut to charged carbons.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For hybridization, never draw orbitals — just count σ bonds (+ lone pairs). σ-count = 4, 3, 2 ⇒ sp<sup>3</sup>, sp<sup>2</sup>, sp. For naming, lock the suffix before you touch the chain; it fixes both the parent and C1 in one move and prevents 80% of locant errors.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Hybridization shortcut',
            note: 'σ-bonds (+ lone pairs) = 4 → sp<sup>3</sup> (109.5°), = 3 → sp<sup>2</sup> (120°), = 2 → sp (180°). π bonds never count.',
          },
          {
            f: '%s-character ↑ → bond shorter & stronger, C more electronegative, terminal C–H more acidic. Order sp > sp<sup>2</sup> > sp<sup>3</sup>.',
            note: '',
          },
          {
            f: 'Naming order',
            note: 'principal group (suffix) → longest chain through it → number for lowest locant to that group → substituents alphabetical as prefixes → assemble.',
          },
          { f: 'Seniority (suffix winner)', note: 'COOH > SO<sub>3</sub>H > ester > amide > CN > CHO > C=O > OH > NH<sub>2</sub>.' },
          { f: 'Tie-break', note: 'lowest-locant set by <b>first point of difference</b>, then alphabetical.' },
          { f: 'Alphabetizing', note: 'ignore di/tri/tetra and sec-/tert-; count cyclo- and iso-.' },
        ],
        aids: [
          '“Suffix first, chain next, number for the prize, prefix the rest” — and for charged carbon, “a missing bond drops you one rung up the hybrid ladder.”',
        ],
      },
    ],
  },
  // ───────────────────────── Topic 02 · pp. 359–365 ─────────────────────────
  {
    n: '02',
    title: 'Isomerism',
    kalam: 'Isomerism requires an identical molecular formula — different formulae means different compounds, not isomers.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Isomerism is a perennial cross-exam favourite. CBSE Boards ask 2–3 mark “draw the isomers / name the type” questions almost every year; NEET reliably places a one-line “which shows geometrical isomerism” or “which is optically active” item; JEE Main asks E/Z assignment and isomer-counting; JEE Advanced pushes into stereoisomer counts with meso forms. Master the relationships (not just the labels) and a whole family of questions opens up.',
      },
      {
        t: 'p',
        html: 'Two people can share the same Aadhaar-style data — same name, same age, same town — and still be entirely different individuals because of how their lives are arranged. <b>Isomers</b> are molecules in exactly that situation: same molecular formula (same atoms, same counts), yet different compounds with different properties, because the atoms are connected or arranged in space differently.',
      },
      {
        t: 'p',
        html: 'The textbook pair makes it vivid: C<sub>2</sub>H<sub>6</sub>O can be <b>ethanol</b> (a liquid boiling around 78 °C that reacts steadily with sodium, releasing hydrogen and forming C<sub>2</sub>H<sub>5</sub>ONa) or <b>dimethyl ether</b> (a gas boiling near −24 °C that ignores sodium completely). Same formula, wildly different molecules — and the difference is not a minor one of degree but of kind: one has an O–H bond a reactive metal can attack, the other does not. That gap is the whole reason isomerism matters; the molecular formula alone tells you almost nothing about how a substance behaves.',
      },
      {
        t: 'p',
        html: 'The number of possible isomers also balloons astonishingly fast with size. C<sub>4</sub>H<sub>10</sub> has just 2 isomers, but by C<sub>10</sub>H<sub>22</sub> there are 75, and the count runs into the billions for modestly larger alkanes. This combinatorial explosion is exactly why a systematic naming system (Topic 01) became unavoidable — and why being able to recognise which relationship two structures share is a core organic skill.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the same set of railway coaches. Reconnect them in a different order, or attach a coach to a different junction, and you have a structurally different train — that is <b>structural (constitutional) isomerism</b>, a difference in connectivity. Now keep the connectivity identical but flip which way a coach faces, and you have <b>stereoisomerism</b>, a difference in spatial arrangement with the bonds left untouched.',
      },
      {
        t: 'p',
        html: 'So the master split is just two questions asked in order:<br>1. Are the atoms connected the same way? If <b>no</b> → structural isomers.<br>2. If connectivity is the same, are they arranged differently in space? If <b>yes</b> → stereoisomers.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Isomerism requires an identical molecular formula — different formulae means different compounds, not isomers. Geometrical isomerism needs <b>restricted rotation</b> (a C=C or a ring) and two different groups on each restricted carbon — which is exactly why ethene and propene, despite having double bonds, show <b>no</b> geometrical isomerism. Optical isomerism needs a molecule that is <b>non-superimposable on its mirror image</b> (chirality), most commonly from a carbon bearing four different groups.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'def',
        term: 'Isomers',
        html: 'different compounds with the same molecular formula but different arrangements of atoms (term coined by Berzelius; Greek isos = equal, meros = parts). The two great branches:',
      },
      {
        t: 'p',
        html: '<b>A. Structural (constitutional) isomerism</b> — same formula, different connectivity. Six standard types:',
      },
      {
        t: 'table',
        title: null,
        head: ['Type', 'Difference lies in…', 'Illustrative pair (formula)'],
        rows: [
          ['Chain', 'carbon-skeleton branching', '<i>n</i>-butane vs 2-methylpropane (C<sub>4</sub>H<sub>10</sub>)'],
          ['Position', 'position of a group / multiple bond', 'but-1-ene vs but-2-ene (C<sub>4</sub>H<sub>8</sub>)'],
          ['Functional group', 'nature of the functional group', 'an alcohol vs an ether (C<sub>2</sub>H<sub>6</sub>O)'],
          [
            'Metamerism',
            'alkyl distribution either side of a divalent group (–O–, –S–, –NH–, –CO–)',
            'methoxypropane vs ethoxyethane (C<sub>4</sub>H<sub>10</sub>O)',
          ],
          ['Ring-chain', 'open chain vs closed ring', 'butene vs cyclobutane (C<sub>4</sub>H<sub>8</sub>)'],
          ['Tautomerism', 'dynamic equilibrium via a 1,3-shift of a mobile H', 'keto ⇌ enol'],
        ],
      },
      {
        t: 'p',
        html: 'A little more on each, since exam questions hinge on telling them apart:<br>• <b>Chain isomerism</b> changes the backbone. C<sub>4</sub>H<sub>10</sub> is either an unbranched four-carbon chain (<i>n</i>-butane) or a three-carbon chain with a methyl branch (2-methylpropane). Every homologous family shows it once the chain is long enough to branch.<br>• <b>Position isomerism</b> keeps the skeleton fixed and moves a substituent or a multiple bond along it — but-1-ene versus but-2-ene differ only in where the double bond sits.<br>• <b>Functional-group isomerism</b> swaps the functional group entirely for the same formula. The recurring pairs worth memorising: alcohols ↔ ethers (C<sub><i>n</i></sub>H<sub>2<i>n</i>+2</sub>O), aldehydes ↔ ketones (C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O), and carboxylic acids ↔ esters (C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O<sub>2</sub>).<br>• <b>Metamerism</b> is a narrower case: the same divalent linkage (–O–, –S–, –NH–, or –CO–) carries different alkyl groups on its two sides. Methoxypropane (CH<sub>3</sub>O–C<sub>3</sub>H<sub>7</sub>) and ethoxyethane (C<sub>2</sub>H<sub>5</sub>O–C<sub>2</sub>H<sub>5</sub>) are metamers — both C<sub>4</sub>H<sub>10</sub>O ethers, differing only in how the carbons are split around the oxygen.<br>• <b>Ring-chain isomerism</b> pits an open chain against a ring of the same formula: but-1-ene (open, one π bond) versus cyclobutane (ring, no π bond). Both have DoU = 1, but spend it differently.<br>• <b>Tautomerism</b> is dynamic, not static. A mobile hydrogen migrates back and forth (a 1,3-shift between a carbon and an adjacent oxygen or nitrogen), so the two forms exist in a real equilibrium rather than as two isolable substances. The keto–enol pair — a carbonyl form ⇌ its enol (C=C–OH) — is the central example; most simple carbonyls sit overwhelmingly on the keto side.',
      },
      {
        t: 'p',
        html: '<b>B. Stereoisomerism</b> — same connectivity, different spatial arrangement (called the configuration):<br>• <b>Geometrical (cis-trans / E-Z):</b> arises from restricted rotation about a C=C or ring. <b>cis</b> = like groups on the same side; <b>trans</b> = opposite sides. The unambiguous modern system is <b>E/Z</b> (German entgegen = opposite, zusammen = together), assigned by CIP priority.<br>• <b>Optical:</b> arises from <b>chirality</b> — a molecule non-superimposable on its mirror image, like left and right hands. A chiral substance rotates the plane of plane-polarised light: clockwise is <b>dextrorotatory</b> (+ or <i>d</i>), anticlockwise is <b>laevorotatory</b> (− or <i>l</i>). Key terms: <b>enantiomers</b> (a mirror-image pair — identical in melting point, boiling point, and reactivity toward ordinary reagents, differing only in the direction they rotate polarised light and in how they react with other chiral substances); <b>diastereomers</b> (stereoisomers that are not mirror images — they differ in ordinary physical properties too, and cis/trans pairs fall here); <b>racemic mixture</b> (a 1:1 enantiomer mix, optically inactive by external compensation because the two rotations cancel); <b>meso compound</b> (a molecule that contains stereocentres yet is achiral overall by internal compensation — one half cancels the other through an internal plane of symmetry).',
      },
      {
        t: 'p',
        html: 'A molecule is <b>achiral</b> (and so optically inactive) the moment it possesses any one of three symmetry elements: a <b>plane of symmetry</b>, a <b>centre of symmetry</b>, or an alternating axis of symmetry. The practical test that covers almost every Class-11/JEE case is the first one — if you can find a mirror plane that divides the molecule into two reflected halves, it cannot be optically active no matter how many stereocentres it carries (this is precisely what makes a meso compound inactive).',
      },
      {
        t: 'p',
        html: '<b>A note on configuration vs. conformation:</b> configurations (the cis/trans and <i>d</i>/<i>l</i> distinctions above) cannot be interconverted without breaking bonds. <b>Conformations</b> — the rotational arrangements about single bonds (staggered, eclipsed, and the chair/boat forms of rings) — interconvert freely by rotation and are treated as a separate JEE-Advanced topic; they are noted here only to keep the boundary clear.',
      },
      {
        t: 'formula',
        kicker: 'A useful counting tool — Degree of Unsaturation (DoU)',
        main: 'for C<sub><i>n</i></sub>H<sub><i>m</i></sub>O<sub><i>p</i></sub>N<sub><i>q</i></sub>:<br>DoU = (2<i>n</i> + 2 + <i>q</i> − <i>m</i>)/2',
        legend: ['<i>n</i> = number of C atoms', '<i>m</i> = number of H atoms', '<i>q</i> = number of N atoms'],
        note: null,
      },
      {
        t: 'p',
        html: 'Each ring or π bond contributes 1. DoU narrows down which isomer skeletons are even possible.',
      },
      {
        t: 'p',
        html: '<b>Maximum stereoisomers</b> from <i>n</i> stereocentres: up to 2<sup><i>n</i></sup>, reduced whenever internal symmetry creates meso forms.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — classify the relationship between two given structures',
        steps: [
          'Compare molecular formulae. <b>Different</b> → not isomers, stop. <b>Same</b> → continue.',
          'Compare connectivity (which atom is bonded to which). <b>Different connectivity</b> → structural isomers; then sub-classify by what differs (skeleton → chain; group/double-bond location → position; functional group → functional; alkyl split around a divalent group → metamerism; ring vs open → ring-chain).',
          '<b>Same connectivity</b> → stereoisomers. If they are non-superimposable mirror images → <b>enantiomers</b>; otherwise → <b>diastereomers</b> (this bucket includes cis/trans pairs). <b>Why this order:</b> connectivity is the coarser distinction; only after fixing it does the spatial question become meaningful.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — does an alkene show geometrical isomerism?',
        steps: [
          'Locate the C=C.',
          'On <b>each</b> doubly-bonded carbon, check the two attached groups. Geometrical isomerism exists <b>only if both carbons carry two different groups</b>.',
          'If either carbon bears two identical groups → no geometrical isomerism. <b>Why:</b> if a carbon has two identical groups, flipping them produces the same molecule, so there is nothing to distinguish cis from trans.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — assign E/Z (CIP priority)',
        steps: [
          'On each alkene carbon, rank the two groups by <b>atomic number of the first atom</b> (higher = higher priority); break ties at the next point of difference along the chain.',
          'If the two <b>higher-priority</b> groups lie on the <b>same</b> side → <b>Z</b>; on <b>opposite</b> sides → <b>E</b>. <b>Why:</b> E/Z removes the ambiguity of cis/trans when the four groups are all different and “same side as what?” becomes unclear.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D — test a molecule for chirality (optical activity)',
        steps: [
          'Look for a carbon bonded to <b>four different groups</b> (a stereocentre / asymmetric carbon).',
          'Check the whole molecule for any <b>plane of symmetry</b> or <b>centre of symmetry</b>. If a symmetry element makes the molecule superimposable on its mirror image, it is <b>achiral</b> (possibly <b>meso</b>, despite having stereocentres).',
          'A molecule that is chiral and has no such symmetry is <b>optically active</b>. <b>Why:</b> a single stereocentre guarantees chirality, but two or more can cancel internally — so the symmetry check is essential before declaring optical activity.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Draw and name all the chain isomers of C<sub>5</sub>H<sub>12</sub>, and state which type of isomerism relates them.',
        steps: [
          'DoU = (2 · 5 + 2 − 12)/2 = 0 → fully saturated, acyclic alkanes only.',
          'Three carbon skeletons are possible:<br>1. straight chain → <b>pentane</b><br>2. one branch → <b>2-methylbutane</b><br>3. two branches on one carbon → <b>2,2-dimethylpropane</b>',
          'They share the formula C<sub>5</sub>H<sub>12</sub> but differ in carbon-skeleton branching → <b>chain isomerism.</b>',
          '<b>Board habit:</b> lead with the DoU to prove no rings/double bonds are possible, then enumerate skeletons systematically (longest chain first, then shorten and branch).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of these shows geometrical isomerism: but-1-ene, but-2-ene, 2-methylbut-2-ene?',
        steps: [
          'Apply Procedure B — each doubly-bonded carbon must carry two different groups.',
          '<b>but-1-ene</b> (CH<sub>2</sub>=CH–CH<sub>2</sub>CH<sub>3</sub>): the terminal =CH<sub>2</sub> carbon has two identical H’s → <b>no</b>.',
          '<b>but-2-ene</b> (CH<sub>3</sub>–CH=CH–CH<sub>3</sub>): each carbon has one H and one CH<sub>3</sub> → <b>yes</b>.',
          '<b>2-methylbut-2-ene</b> ((CH<sub>3</sub>)<sub>2</sub>C=CH–CH<sub>3</sub>): one carbon bears two identical CH<sub>3</sub> groups → <b>no</b>.',
          '<b>Trap:</b> assuming “has a double bond” ⇒ “has geometrical isomers.” The terminal-alkene and the gem-dimethyl carbon both fail the two-different-groups test. Quick scan: any doubly-bonded carbon with a repeated group kills geometrical isomerism instantly.',
        ],
        ans: 'But-2-ene only.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Assign the E/Z descriptor to the alkene Br–CH=CH–Cl in which Br and Cl lie on opposite sides of the double bond.',
        steps: [
          'Left carbon: groups are Br and H → Br (<i>Z</i> = 35) outranks H. Higher priority = <b>Br</b>.',
          'Right carbon: groups are Cl and H → Cl (<i>Z</i> = 17) outranks H. Higher priority = <b>Cl</b>.',
          'The two higher-priority groups (Br, Cl) are on <b>opposite</b> sides → <b>E</b>.',
          '<b>Multi-concept link:</b> you combined the geometrical-isomerism test, CIP priority by atomic number, and IUPAC naming. Note cis/trans would be ambiguous here (cis to what?) — exactly why E/Z exists.',
        ],
        ans: '(E)-1-bromo-2-chloroethene.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'How many stereoisomers does 2,3-dichlorobutane, CH<sub>3</sub>–CHCl–CHCl–CH<sub>3</sub>, have? Identify them.',
        steps: [
          'Stereocentres: C2 and C3 each bear four different groups (H, Cl, CH<sub>3</sub>, and the rest of the chain) → <i>n</i> = 2, so naïvely up to 2<sup>2</sup> = 4.',
          'But the two stereocentres are <b>constitutionally identical</b> (each is –CHCl– flanked the same way), so internal symmetry intervenes.',
          'Enumerate: the (R,R) and (S,S) forms are non-superimposable mirror images → an <b>enantiomeric pair</b> (a d/l pair, optically active). The (R,S) form possesses an internal plane of symmetry → it is a <b>meso</b> compound, superimposable on its mirror image and <b>optically inactive</b>.',
          '<b>Rigor point:</b> 2<sup><i>n</i></sup> is only an upper bound. Whenever stereocentres are equivalent, look for a meso form before quoting the count — the same reason tartaric acid has three stereoisomers, not four.',
        ],
        ans: '3 stereoisomers — one pair of enantiomers (d and l) plus one meso form.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Identify the type of isomerism between propan-1-ol and methoxyethane (both C<sub>3</sub>H<sub>8</sub>O).',
            a: 'Functional group isomerism (an alcohol vs an ether).',
          },
          {
            q: '[NEET] Which exhibits geometrical isomerism: propene, pent-2-ene, or 2-methylprop-1-ene?',
            a: 'Pent-2-ene only.',
          },
          {
            q: '[JEE Main] Write the molecular formula C<sub>4</sub>H<sub>10</sub>O as a pair of metamers and name them.',
            a: 'Methoxypropane and ethoxyethane (diethyl ether) — alkyl groups distributed differently about the –O–.',
          },
          {
            q: '[JEE Main] Give the DoU of C<sub>6</sub>H<sub>6</sub> and state what structural features it implies.',
            a: 'DoU = 4 → four rings/π-bonds combined (consistent with benzene: one ring + three π bonds).',
          },
          {
            q: '[JEE Advanced] State the number of stereoisomers of 2,3-dibromopentane, CH<sub>3</sub>–CHBr–CHBr–CH<sub>2</sub>CH<sub>3</sub> and explain why it differs from the 2,3-dichlorobutane case.',
            a: 'Four stereoisomers (2<sup>2</sup>, two enantiomeric pairs). Unlike 2,3-dichlorobutane, the two stereocentres here are not equivalent (one side is methyl, the other ethyl), so no internal symmetry and no meso form arises.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The relationship between <i>n</i>-butane and 2-methylpropane is:',
        opts: [
          {
            label: 'position isomerism',
            nudge: '<b>(a)</b> would require relocating a group/double bond on a fixed skeleton — there is no such group here.',
          },
          { label: 'chain isomerism', nudge: null },
          { label: 'functional isomerism', nudge: '<b>(c)</b> needs different functional groups — both are alkanes.' },
          {
            label: 'metamerism',
            nudge: '<b>(d)</b> needs a divalent group (–O–, etc.) with redistributed alkyls — absent in a hydrocarbon.',
          },
        ],
        correct: 1,
        solution: 'Same formula C<sub>4</sub>H<sub>10</sub>, differing only in carbon-skeleton branching.',
      },
      {
        t: 'mcq',
        q: 'Which compound is optically active?',
        opts: [
          { label: '2-chloropropane', nudge: '<b>(a)</b> C2 bears two identical CH<sub>3</sub> groups → not a stereocentre.' },
          { label: '2-chlorobutane', nudge: null },
          { label: '1-chloropropane', nudge: '<b>(c)</b> the chlorinated carbon is a terminal –CH<sub>2</sub>Cl → two H’s, not chiral.' },
          { label: '2-chloro-2-methylpropane', nudge: '<b>(d)</b> the central carbon bears three identical CH<sub>3</sub> groups → achiral.' },
        ],
        correct: 1,
        solution: 'C2 bears H, Cl, CH<sub>3</sub>, and C<sub>2</sub>H<sub>5</sub> — four different groups → chiral.',
      },
      {
        t: 'mcq',
        q: 'A meso compound is best described as:',
        opts: [
          { label: 'optically active with one stereocentre', nudge: '<b>(a)</b> contradicts “meso,” which requires achirality.' },
          {
            label: 'a 1:1 mix of two enantiomers',
            nudge: '<b>(b)</b> describes a racemic mixture (external compensation), not a meso compound (internal compensation) — the classic trap.',
          },
          { label: 'achiral despite containing stereocentres', nudge: null },
          { label: 'a structural isomer of its enantiomer', nudge: '<b>(d)</b> confuses spatial isomerism with connectivity isomerism.' },
        ],
        correct: 2,
        solution: 'Internal symmetry (a plane of symmetry) cancels the rotation → achiral and optically inactive even though stereocentres are present.',
      },
      {
        t: 'mcq',
        q: 'Keto–enol tautomerism involves:',
        opts: [
          { label: 'rotation about a single bond', nudge: '<b>(a)</b> describes conformational change, not tautomerism.' },
          { label: 'a 1,3-migration of a mobile hydrogen', nudge: null },
          { label: 'breaking the C–C skeleton', nudge: '<b>(c)</b> the carbon skeleton stays intact; only an H and a π bond relocate.' },
          { label: 'reflection through a mirror plane', nudge: '<b>(d)</b> describes the relationship between enantiomers, not tautomers.' },
        ],
        correct: 1,
        solution: 'A mobile H shuttles (1,3-shift) between carbon and oxygen, interconverting keto and enol forms in dynamic equilibrium.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Spatial-before-connectivity.</b> Students jump to “cis/trans?” before confirming the two structures even have the same connectivity. Always run Procedure A in order.',
          '<b>“Double bond ⇒ geometrical isomers.”</b> Terminal alkenes and gem-disubstituted carbons fail the two-different-groups test.',
          '<b>Racemic vs meso.</b> Both are optically inactive, but a racemic mixture is two compounds (external compensation) while a meso compound is one (internal compensation).',
          '<b>Blind 2<sup><i>n</i></sup>.</b> Always inspect for equivalent stereocentres and meso forms before quoting the stereoisomer count.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For “which is optically active?”, don’t draw mirror images — just hunt for one carbon with four different groups, then do a 2-second symmetry check. For E/Z, remember priority is set by <b>atomic number</b>, not by how “big” a group looks — a single Br beats an entire alkyl chain.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Isomers',
            note: 'same molecular formula, different compound. Branch 1 — <b>structural</b> (different connectivity); Branch 2 — <b>stereo</b> (same connectivity, different space).',
          },
          { f: 'Structural types (6)', note: 'chain, position, functional, metamerism, ring-chain, tautomerism.' },
          {
            f: 'Geometrical isomerism needs',
            note: 'restricted rotation (C=C or ring) <b>and</b> two different groups on each restricted carbon. Ethene & propene show none.',
          },
          { f: 'E/Z by CIP', note: 'higher-priority groups same side → <b>Z</b>; opposite → <b>E</b>. Priority = atomic number.' },
          {
            f: 'Optical',
            note: 'chiral = non-superimposable on mirror image; <b>enantiomers</b> mirror pair, <b>diastereomers</b> non-mirror, <b>racemic</b> = external compensation, <b>meso</b> = internal compensation (achiral).',
          },
          {
            f: 'Counting',
            note: 'max stereoisomers = 2<sup><i>n</i></sup>, reduced by meso forms. DoU = (2<i>n</i> + 2 + <i>q</i> − <i>m</i>)/2.',
          },
        ],
        aids: [
          '“Connect first, then arrange” (classify order)',
          '“two different on each end” (geometrical)',
          '“Zame Zide = Z” (E/Z).',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 03 · pp. 366–373 ─────────────────────────
  {
    n: '03',
    title: 'Reaction Mechanisms — Fundamental Concepts',
    kalam: 'Get intermediates and reagent types right and the rest of organic chemistry becomes pattern recognition.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conceptual engine of the entire organic syllabus. CBSE Boards ask 1–2 mark items on bond fission and reagent types; NEET reliably places a “which carbocation/free radical is most stable” or “identify the nucleophile” question; JEE Main combines stability ordering with electronic effects every paper; JEE Advanced assumes all of it silently inside multi-step mechanisms. Get intermediates and reagent types right and the rest of organic chemistry becomes pattern recognition.',
      },
      {
        t: 'p',
        html: 'Every organic reaction is, at heart, a story about <b>bonds breaking and bonds forming</b>, and the whole drama turns on one question: when a bond breaks, who keeps the shared pair of electrons?',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine two friends who jointly own a single auto-rickshaw (the shared electron pair). When the partnership ends there are two civilised outcomes. Either they sell the auto and split the proceeds — <b>one electron to each</b> — which leaves two neutral but “incomplete” partners. Or one friend keeps the whole auto and the other walks away with nothing — <b>both electrons to one atom</b> — which leaves one richer (negative) and one poorer (positive). These two ways of dissolving the partnership are precisely <b>homolytic</b> and <b>heterolytic</b> bond fission, and they generate completely different kinds of reactive fragments.<br>• <b>Homolytic fission</b> (equal split): each atom takes one electron → two <b>free radicals</b>, each with an unpaired electron. This is favoured by nonpolar bonds and conditions like heat or UV light.<br>• <b>Heterolytic fission</b> (unequal split): the more electronegative atom grabs both electrons → a <b>carbanion</b> (carbon keeps the pair, becomes negative) or, far more commonly, a <b>carbocation</b> (carbon loses the pair, becomes positive). Favoured by polar bonds and polar solvents.',
      },
      {
        t: 'p',
        html: 'Once you have these reactive species, reactions are just electron-rich centres seeking electron-poor centres. A <b>nucleophile</b> (“nucleus-loving”) is electron-rich and donates a pair — a Lewis base. An <b>electrophile</b> (“electron-loving”) is electron-deficient and accepts a pair — a Lewis acid. Organic mechanisms are essentially choreographed handshakes between the two.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> “Who keeps the electrons” is decided by <b>electronegativity and the stability of the products</b>: a bond breaks the way that gives the more stable fragments. Homolysis dominates in the gas phase or nonpolar solvents (no charges to stabilise); heterolysis dominates in polar, ionising media. And the labels nucleophile/electrophile are about <b>electron density, not formal charge</b> — a neutral molecule with a lone pair (like NH<sub>3</sub> or H<sub>2</sub>O) is a perfectly good nucleophile, and a neutral electron-deficient molecule (like BF<sub>3</sub>) is a fine electrophile.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'table',
        title: 'Bond fission (two modes)',
        head: ['', 'Homolytic', 'Heterolytic'],
        rows: [
          ['Electron split', 'one each (symmetrical)', 'both to one atom'],
          ['Products', 'two free radicals (R<sup>•</sup>)', 'a cation + an anion (R<sup>+</sup>, R<sup>−</sup>)'],
          ['Curved-arrow type', 'single-barbed “fishhook”', 'double-barbed (full arrow)'],
          ['Favoured by', 'nonpolar bonds, heat/UV, peroxides', 'polar bonds, polar solvents'],
        ],
      },
      {
        t: 'table',
        title: 'Reactive intermediates',
        head: ['Intermediate', 'Charge / electrons', 'Hybridisation & shape', 'Nature'],
        rows: [
          ['Carbocation R<sub>3</sub>C<sup>+</sup>', '+, sextet (6 e)', 'sp<sup>2</sup>, trigonal planar, empty p', 'electron-deficient, electrophilic'],
          ['Carbanion R<sub>3</sub>C<sup>−</sup>', '−, octet + lone pair', 'sp<sup>3</sup>, pyramidal', 'electron-rich, nucleophilic'],
          ['Free radical R<sub>3</sub>C<sup>•</sup>', 'neutral, odd electron', '~sp<sup>2</sup>, near-planar', 'paramagnetic, short-lived, very reactive'],
          ['Carbene :CR<sub>2</sub>', 'neutral, sextet', 'divalent C', 'highly reactive (singlet/triplet)'],
        ],
      },
      { t: 'fig', id: 'c11-08-fig-8.2' },
      {
        t: 'p',
        html: '<b>Reagent types:</b><br>• <b>Nucleophiles</b> — electron-rich, lone-pair donors, Lewis bases. Examples: OH<sup>−</sup>, CN<sup>−</sup>, RO<sup>−</sup>, halide ions, and neutral NH<sub>3</sub>, H<sub>2</sub>O. They attack electron-poor (positive) centres.<br>• <b>Electrophiles</b> — electron-deficient, lone-pair acceptors, Lewis acids. Examples: H<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, BF<sub>3</sub>, AlCl<sub>3</sub>, SnCl<sub>4</sub>, and carbocations themselves. They attack electron-rich centres.',
      },
      {
        t: 'p',
        html: '<b>Electronic effects (the “why” behind stability and reactivity):</b><br>• <b>Inductive effect (I):</b> permanent, partial displacement of σ-electrons along a chain due to electronegativity difference; it <b>weakens rapidly with distance</b> (negligible beyond about three carbons). +I groups release electrons (alkyl groups, e.g. –CH<sub>3</sub>); −I groups withdraw them (halogens, –NO<sub>2</sub>, –COOH, –CN). This is why a chlorine two carbons away strengthens an acid less than one adjacent to it.<br>• <b>Resonance / mesomeric effect (M):</b> delocalisation of π or lone-pair electrons over several atoms; +M donates electron density into the conjugated system (–OH, –OR, –NH<sub>2</sub>), −M withdraws it (–NO<sub>2</sub>, –C=O, –CN). It is a permanent effect, operates only through conjugation, and is usually <b>stronger</b> than the inductive effect when both are present.<br>• <b>Electromeric effect (E):</b> a temporary, <b>complete</b> transfer of a π electron pair, occurring only <b>at the demand of an attacking reagent</b> and reversing the instant the reagent is removed — the hallmark distinguishing it from the always-on inductive and resonance effects.<br>• <b>Hyperconjugation:</b> delocalisation of σ(C–H) electrons of a carbon adjacent to an electron-deficient or unsaturated centre into the empty p orbital or π system (“no-bond resonance”). <b>More <i>α</i> C–H bonds → more stabilisation</b>, which is the quantitative basis of the alkyl stability orders below.',
      },
      {
        t: 'p',
        html: '<b>Stability orders that follow:</b><br>• <b>Carbocations:</b> 3° > 2° > 1° > methyl (more alkyl groups → more +I and more hyperconjugation). <b>Resonance trumps all</b> — allyl and benzyl cations are exceptionally stable.<br>• <b>Free radicals:</b> 3° > 2° > 1° > methyl (same hyperconjugation/+I logic).<br>• <b>Carbanions:</b> the reverse for alkyl systems — methyl > 1° > 2° > 3° (alkyl +I destabilises a negative centre); stabilised instead by −I and −M groups.',
      },
      {
        t: 'p',
        html: '<b>The four reaction types these intermediates drive.</b> Once you can identify intermediates and reagents, every organic transformation sorts into one of four families:<br>• <b>Substitution</b> — one atom or group replaces another. A nucleophile displacing a leaving group (nucleophilic substitution, as when OH<sup>−</sup> replaces Br<sup>−</sup> in an alkyl halide) or an electrophile replacing a hydrogen on an aromatic ring (electrophilic substitution) are the workhorse cases.<br>• <b>Addition</b> — two groups add across a multiple bond, which becomes saturated. Electron-rich C=C and C≡C bonds attract <b>electrophiles</b> (electrophilic addition); electron-poor C=O attracts <b>nucleophiles</b> (nucleophilic addition).<br>• <b>Elimination</b> — the reverse of addition: two groups are removed from adjacent carbons to create a multiple bond (for example, loss of H and a leaving group to form an alkene).<br>• <b>Rearrangement</b> — atoms reorganise within a molecule, classically a 1,2-shift that converts a less stable carbocation into a more stable one (the stability orders above are exactly what drive these shifts).',
      },
      {
        t: 'p',
        html: 'This is why intermediate stability matters so much: the reaction takes the path through the most stable intermediate, so predicting stability predicts the product.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — predict the fission mode and name the intermediates',
        steps: [
          'Identify the bond and its polarity. A <b>nonpolar</b> bond under heat/UV → <b>homolytic</b> → two <b>radicals</b>.',
          'A <b>polar</b> bond in a polar/ionising medium → <b>heterolytic</b>. The <b>more electronegative</b> atom keeps the electron pair.',
          'For a C–X bond (X more electronegative): X leaves with the pair as X<sup>−</sup>, leaving a <b>carbocation</b>. For a C–metal bond (metal less electronegative): carbon keeps the pair as a <b>carbanion</b>. <b>Why:</b> the products that form are the ones the bond polarity and product stability favour — you are predicting, not memorising.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — rank intermediate stability',
        steps: [
          'Count alkyl substituents on the charged/radical carbon (more = more +I and hyperconjugation → more stable cation/radical; less stable carbanion).',
          'Count the <i>α</i> C–H bonds available for hyperconjugation.',
          '<b>Check for resonance first</b> — any allylic/benzylic delocalisation overrides the alkyl ordering.',
          'Factor adjacent electron-withdrawing/donating groups (−I/−M stabilise carbanions and destabilise cations; +I/+M do the opposite). <b>Why:</b> resonance spreads charge over many atoms, which is far more stabilising than the local nudges of induction or hyperconjugation — hence “check resonance first.”',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — classify a reagent',
        steps: [
          'Does it have a lone pair / excess electron density / negative charge? → <b>nucleophile</b> (Lewis base).',
          'Does it have an empty orbital / electron deficiency / positive charge? → <b>electrophile</b> (Lewis acid).',
          'Ignore overall charge as the deciding factor — judge by electron density. NH<sub>3</sub> (neutral, lone pair) is a nucleophile; BF<sub>3</sub> (neutral, empty orbital on B) is an electrophile.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D — electron-pushing arrow conventions',
        steps: [
          'A <b>double-barbed curved arrow</b> shows the movement of an electron pair, always from electron-rich (tail) to electron-poor (head).',
          'A <b>single-barbed “fishhook”</b> shows the movement of a single electron, used for homolytic/radical steps. <b>Why:</b> arrows are the grammar of mechanisms — drawing them from the nucleophile/electron-source toward the electrophile keeps charge bookkeeping honest.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Show the products of (i) homolytic and (ii) heterolytic fission of the C–Br bond in bromomethane, CH<sub>3</sub>–Br, and name the carbon intermediate in each case.',
        steps: [
          '(i) <b>Homolytic:</b> the shared pair splits one-and-one →<br>CH<sub>3</sub>–Br → CH<sub>3</sub><sup>•</sup> + Br<sup>•</sup><br>The carbon species is a <b>methyl free radical</b> (neutral, one unpaired electron).',
          '(ii) <b>Heterolytic:</b> Br is more electronegative, so it leaves with both electrons →<br>CH<sub>3</sub>–Br → CH<sub>3</sub><sup>+</sup> + Br<sup>−</sup><br>The carbon species is a <b>methyl carbocation</b> (sp<sup>2</sup>, trigonal planar, electron-deficient).',
          '<b>Board habit:</b> state which atom keeps the electrons and why (electronegativity), then name the intermediate with its charge — markers are awarded for the reasoning, not just the products.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which is the most stable carbocation: methyl, tert-butyl (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>, allyl CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup>, or benzyl C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup>?',
        steps: [
          'Apply Procedure B — <b>check resonance first.</b> Both allyl and benzyl cations are resonance-stabilised; the benzyl cation delocalises the positive charge over the ring (multiple resonance structures), making it the most stable.',
          'tert-Butyl is the most stable purely alkyl cation (3°, lots of hyperconjugation) but has <b>no resonance</b>.',
          '<b>Trap:</b> reflexively picking the tertiary cation. Tertiary beats other non-resonance cations, but any allylic/benzylic delocalisation wins. Quick rule: resonance > hyperconjugation > induction.',
        ],
        ans: 'Benzyl.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Classify each as nucleophile or electrophile and justify: CN<sup>−</sup>, BF<sub>3</sub>, H<sub>2</sub>O, NO<sub>2</sub><sup>+</sup>.',
        steps: [
          'CN<sup>−</sup>: negative, lone pair on carbon → <b>nucleophile</b> (Lewis base).',
          'BF<sub>3</sub>: neutral but boron has only 6 electrons (empty orbital) → <b>electrophile</b> (Lewis acid).',
          'H<sub>2</sub>O: neutral, two lone pairs on O → <b>nucleophile</b>.',
          'NO<sub>2</sub><sup>+</sup>: positive, electron-deficient → <b>electrophile</b>.',
          '<b>Multi-concept link:</b> you applied the Lewis acid/base definition, lone-pair vs empty-orbital analysis, and the “charge is not the criterion” principle in one sweep — exactly the JEE Main reagent-classification format. Note H<sub>2</sub>O and BF<sub>3</sub> have the same (zero) net charge yet opposite roles.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Rank these benzylic cations in decreasing stability: benzyl (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup>), para-methoxybenzyl, and para-nitrobenzyl.',
        steps: [
          'All three are resonance-stabilised benzylic cations; the substituent on the ring decides the ordering by tuning the electron density at the cationic centre.',
          '<b>para-Methoxy</b> (–OCH<sub>3</sub>) is a strong +M donor: its lone pair delocalises into the ring and onto the positive carbon, <b>stabilising</b> the cation most. → most stable.',
          '<b>Unsubstituted benzyl</b> has no extra donor/acceptor → intermediate.',
          '<b>para-Nitro</b> (–NO<sub>2</sub>) is a strong −M/−I acceptor: it pulls electron density away from an already electron-poor centre, <b>destabilising</b> the cation. → least stable.',
          '<b>Order:</b> para-methoxybenzyl > benzyl > para-nitrobenzyl.',
          '<b>Rigor point:</b> with resonance already “on” for all three, the tie-break is the substituent’s mesomeric effect at the cationic site. A donor stabilises a cation; an acceptor destabilises it — and the para position lets resonance communicate directly with the charged carbon.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a nucleophile and an electrophile, giving one neutral example of each.',
            a: 'Nucleophile = electron-rich Lewis base (e.g., NH<sub>3</sub>); electrophile = electron-deficient Lewis acid (e.g., BF<sub>3</sub>).',
          },
          {
            q: '[NEET] What is the hybridisation and shape of a carbocation and of a carbanion?',
            a: 'Carbocation: sp<sup>2</sup>, trigonal planar. Carbanion: sp<sup>3</sup>, pyramidal.',
          },
          {
            q: '[JEE Main] Arrange in increasing order of stability: methyl, ethyl (1°), isopropyl (2°), and tert-butyl (3°) free radicals.',
            a: 'methyl < ethyl < isopropyl < tert-butyl (increasing with alkyl substitution).',
          },
          {
            q: '[JEE Main] Identify the type of bond fission and the intermediates when CH<sub>3</sub>–CH<sub>2</sub>–O–H loses H<sup>+</sup> from the O–H bond.',
            a: 'Heterolytic fission of the O–H bond → an alkoxide anion (CH<sub>3</sub>CH<sub>2</sub>O<sup>−</sup>) and H<sup>+</sup>.',
          },
          {
            q: '[JEE Advanced] Explain, using electronic effects, why the trichloromethyl carbanion CCl<sub>3</sub><sup>−</sup> is far more stable than the methyl carbanion CH<sub>3</sub><sup>−</sup>.',
            a: 'The three −I chlorine atoms withdraw electron density and disperse the negative charge (−I stabilises a carbanion), whereas in CH<sub>3</sub><sup>−</sup> there is no −I group to disperse the charge — so CCl<sub>3</sub><sup>−</sup> is much more stable.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Homolytic fission of a covalent bond produces:',
        opts: [
          { label: 'a cation and an anion', nudge: '<b>(a)</b> describes heterolytic fission — the classic mix-up.' },
          { label: 'two carbocations', nudge: '<b>(b)</b> would require both fragments to lose electrons, violating electron conservation.' },
          { label: 'two free radicals', nudge: null },
          { label: 'a carbene', nudge: '<b>(d)</b> carbenes arise from specific eliminations, not from simple homolysis.' },
        ],
        correct: 2,
        solution: 'Equal one-electron split leaves each fragment with an unpaired electron → free radicals.',
      },
      {
        t: 'mcq',
        q: 'The carbon bearing the positive charge in a carbocation is:',
        opts: [
          { label: 'sp<sup>3</sup> hybridised, tetrahedral', nudge: '<b>(a)</b> is the neutral-carbon default applied wrongly.' },
          { label: 'sp<sup>2</sup> hybridised, trigonal planar', nudge: null },
          { label: 'sp hybridised, linear', nudge: '<b>(c)</b> over-counts the electron deficiency.' },
          { label: 'sp<sup>3</sup>, pyramidal', nudge: '<b>(d)</b> describes the carbanion, not the carbocation — a frequent swap.' },
        ],
        correct: 1,
        solution: 'Three σ bonds, no lone pair → sp<sup>2</sup>, planar, with an empty p orbital.',
      },
      {
        t: 'mcq',
        q: 'Which species is <b>not</b> an electrophile?',
        opts: [
          { label: 'AlCl<sub>3</sub>', nudge: '<b>(a)</b>, <b>(b)</b> are electron-deficient Lewis acids (empty orbital on the central atom).' },
          { label: 'BF<sub>3</sub>', nudge: '<b>(a)</b>, <b>(b)</b> are electron-deficient Lewis acids (empty orbital on the central atom).' },
          { label: 'NH<sub>3</sub>', nudge: null },
          { label: 'NO<sub>2</sub><sup>+</sup>', nudge: '<b>(d)</b> is positively charged and electron-deficient → electrophile.' },
        ],
        correct: 2,
        solution: 'NH<sub>3</sub> has a lone pair and donates electrons → it is a nucleophile.',
      },
      {
        t: 'mcq',
        q: 'The most stable carbocation among the following is:',
        opts: [
          { label: 'CH<sub>3</sub><sup>+</sup>', nudge: '<b>(a)</b> methyl has no stabilising alkyl groups → least stable.' },
          { label: 'CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>', nudge: '<b>(b)</b>, <b>(c)</b> are stabilised but progressively less than tertiary.' },
          { label: '(CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup>', nudge: '<b>(b)</b>, <b>(c)</b> are stabilised but progressively less than tertiary.' },
          { label: '(CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>', nudge: null },
        ],
        correct: 3,
        solution: 'Tertiary: maximum +I and maximum hyperconjugation (<i>α</i> C–H bonds) → most dispersed charge. (No resonance-stabilised option is present here, so the alkyl ordering decides.)',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Fission product swap.</b> Homolytic → radicals; heterolytic → ion pair. Tie it to “equal split = neutral radicals.”',
          '<b>Cation vs carbanion geometry.</b> Carbocation is sp<sup>2</sup> planar (empty p); carbanion is sp<sup>3</sup> pyramidal (lone pair).',
          '<b>Charge is not the criterion.</b> Neutral NH<sub>3</sub>/H<sub>2</sub>O are nucleophiles; neutral BF<sub>3</sub> is an electrophile. Judge by electron density.',
          '<b>Forgetting resonance / inverting the carbanion order.</b> Allyl/benzyl beat tertiary; and carbanion stability runs opposite to carbocation stability for alkyl systems.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For any stability ranking, run the checklist in this fixed order — <b>resonance → hyperconjugation/+I → adjacent ±M/±I groups.</b> The first one that applies usually decides the answer, so you rarely need to weigh all of them.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Fission',
            note: 'homolytic = equal split → <b>radicals</b> (fishhook arrows); heterolytic = unequal split → <b>cation + anion</b> (full arrows).',
          },
          {
            f: 'Intermediates',
            note: 'carbocation sp<sup>2</sup> planar, electron-deficient; carbanion sp<sup>3</sup> pyramidal, electron-rich; free radical near-planar, paramagnetic.',
          },
          {
            f: 'Reagents',
            note: 'nucleophile = electron-rich Lewis base (donor); electrophile = electron-deficient Lewis acid (acceptor). Charge is not the test — electron density is.',
          },
          {
            f: 'Stability',
            note: 'carbocations & radicals 3° > 2° > 1° > Me; carbanions the <b>reverse</b>; <b>resonance (allyl/benzyl) overrides everything.</b>',
          },
          {
            f: 'Electronic effects',
            note: 'I (permanent, σ, fades with distance) · M (permanent, π/lone-pair delocalisation) · E (temporary, reagent-demanded) · hyperconjugation (more <i>α</i> C–H = more stable).',
          },
        ],
        aids: [
          '“Nu = electron-rich, E = electron-poor”',
          '“resonance beats hyperconjugation beats induction”',
          '“cation planar, anion pyramidal.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 04 · pp. 374–380 ─────────────────────────
  {
    n: '04',
    title: 'Purification, Qualitative & Quantitative Analysis',
    kalam: 'A freshly made organic compound is almost never pure — it comes mixed with unreacted starting materials, by-products, and solvents.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is among the most reliably scored parts of the chapter. NEET almost always asks one purification or analysis question (which technique, which test, or a quick estimation); CBSE Boards carry 2–3 mark items on Lassaigne’s test, Kjeldahl/Dumas principles, or a percentage-composition calculation; JEE Main sets numerical estimation problems. The concepts are finite and the numericals are formula-driven — high return for the effort.',
      },
      {
        t: 'p',
        html: 'A freshly made organic compound is almost never pure — it comes mixed with unreacted starting materials, by-products, and solvents. Before you can study or name it, you must do three things in sequence: <b>purify</b> it, find out <b>which elements</b> it contains (qualitative analysis), and then find out <b>how much</b> of each (quantitative analysis). Those three steps are this topic.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine sorting a sack of mixed grains. <b>Purification</b> is the sorting itself — and the trick is always to exploit a physical-property difference between the substance you want and everything else. If one grain floats and the rest sink, you separate by density; if one melts at a different temperature, you separate by heat. Every purification method below is just a clever choice of which physical-property difference to exploit:<br>• boiling point → <b>distillation</b><br>• solubility → <b>crystallisation</b> and <b>extraction</b><br>• tendency to vaporise directly from solid → <b>sublimation</b><br>• differing affinity for a surface → <b>chromatography</b>',
      },
      {
        t: 'p',
        html: 'Once pure, <b>qualitative analysis</b> asks “what’s in here?” — detecting carbon, hydrogen, nitrogen, sulphur, and halogens by converting them into recognisable inorganic substances and running colour/precipitate tests. Finally, <b>quantitative analysis</b> asks “how much?” — burning or reacting a weighed sample and weighing the products to back-calculate each element’s percentage.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Each purification method assumes a usable difference in the relevant property: distillation needs a meaningful boiling-point gap (or a column, if the gap is small); crystallisation needs the compound to be much more soluble hot than cold while impurities stay dissolved (or vice versa). Quantitative estimations assume the reaction goes to completion and the measured product is captured fully — incomplete combustion or loss of gas throws the percentages off.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'table',
        title: 'Purification methods (property exploited → typical use)',
        head: ['Method', 'Property exploited', 'Used for'],
        rows: [
          ['Sublimation', 'solid → vapour without melting', 'solids that sublime (camphor, naphthalene) amid non-volatile impurities'],
          ['Crystallisation', 'differential solubility (hot vs cold)', 'most organic solids; impurities stay in mother liquor'],
          ['Simple distillation', 'large boiling-point difference', 'two volatile liquids with well-separated b.p.'],
          ['Fractional distillation', 'small boiling-point difference', 'liquids with close b.p. (uses a fractionating column)'],
          ['Distillation under reduced pressure', 'lowers boiling point', 'high-boiling liquids that decompose on strong heating (glycerol)'],
          ['Steam distillation', 'steam-volatility + water-immiscibility', 'compounds volatile in steam and immiscible with water (aniline)'],
          ['Differential extraction', 'differential solubility in two immiscible solvents', 'a solute partitioned out of one solvent into another (separating funnel)'],
          ['Chromatography', 'differential adsorption / partition between phases', 'mixtures of similar compounds, even micro quantities'],
        ],
      },
      {
        t: 'p',
        html: '<b>Chromatography sub-types:</b> when the stationary phase is a <b>solid</b>, it is <b>adsorption chromatography</b> (column chromatography, thin-layer chromatography/TLC); when the stationary phase is a <b>liquid</b>, it is <b>partition chromatography</b> (paper chromatography). A component’s movement is reported as the <b>retardation factor</b>:',
      },
      {
        t: 'formula',
        kicker: 'Retardation factor',
        main: '<i>R</i><sub>f</sub> = (distance moved by the component)/(distance moved by the solvent front)',
        legend: ['<i>R</i><sub>f</sub> = retardation factor'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Qualitative analysis — detection of elements:</b><br>• <b>Carbon & hydrogen:</b> heat the compound with dry copper(II) oxide. Carbon → CO<sub>2</sub> (turns lime water milky); hydrogen → H<sub>2</sub>O (turns anhydrous CuSO<sub>4</sub> blue).<br>• <b>Nitrogen, sulphur, halogens (Lassaigne’s test):</b> fuse the compound with sodium metal to convert covalently bound elements into water-soluble ionic salts (the <b>sodium fusion extract</b>):<br>– N → NaCN; tested with FeSO<sub>4</sub> → <b>Prussian blue</b> (ferri-ferrocyanide).<br>– S → Na<sub>2</sub>S; tested with sodium nitroprusside → <b>violet</b>, or with lead acetate → <b>black</b> PbS.<br>– <b>Halogen</b> → NaX; acidify with dilute HNO<sub>3</sub>, add AgNO<sub>3</sub> → AgCl (white), AgBr (pale yellow), AgI (yellow).<br>– <b>N and S together</b> → NaSCN; with Fe<sup>3+</sup> → <b>blood-red</b> colour.',
      },
      {
        t: 'table',
        title: 'Quantitative analysis — estimation methods',
        head: ['Element', 'Method', 'Principle (what is weighed/measured)'],
        rows: [
          ['C & H', '<b>Liebig combustion</b>', 'burn in O<sub>2</sub>; weigh CO<sub>2</sub> and H<sub>2</sub>O'],
          ['N', '<b>Dumas</b>', 'combustion → N<sub>2</sub> gas collected over KOH; measure its volume'],
          [
            'N',
            '<b>Kjeldahl</b>',
            'digest with conc. H<sub>2</sub>SO<sub>4</sub> → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>; liberate NH<sub>3</sub> with NaOH; absorb in standard acid; titrate',
          ],
          ['Halogen', '<b>Carius</b>', 'heat with fuming HNO<sub>3</sub> + AgNO<sub>3</sub>; weigh AgX'],
          ['S', '<b>Carius (oxidation)</b>', 'oxidise to sulphate; precipitate and weigh BaSO<sub>4</sub>'],
        ],
      },
      {
        t: 'formula',
        kicker: 'Core estimation formulae',
        main: '%C = (12/44) × (<i>m</i><sub>CO₂</sub>/<i>w</i>) × 100<br>%H = (2/18) × (<i>m</i><sub>H₂O</sub>/<i>w</i>) × 100<br>%N (Kjeldahl) = (1.4 × <i>N</i><sub>acid</sub> × <i>V</i><sub>acid (mL)</sub>)/<i>w</i><br>%X (Carius) = (at. mass of X/mol. mass of AgX) × (<i>m</i><sub>AgX</sub>/<i>w</i>) × 100',
        legend: [
          '<i>w</i> = mass of compound',
          '<i>m</i><sub>CO₂</sub> = mass of CO<sub>2</sub> formed',
          '<i>m</i><sub>H₂O</sub> = mass of H<sub>2</sub>O formed',
          '<i>N</i><sub>acid</sub> = normality of the acid',
          '<i>V</i><sub>acid (mL)</sub> = volume of acid, in mL',
          '<i>m</i><sub>AgX</sub> = mass of AgX',
        ],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — choose a purification method',
        steps: [
          'Solid that vaporises directly? → <b>sublimation</b>.',
          'Solid otherwise? → <b>crystallisation</b> (find a solvent that dissolves it hot, not cold).',
          'Liquid, large b.p. gap from impurity? → <b>simple distillation</b>; small gap? → <b>fractional</b>.',
          'Liquid that decomposes near its b.p.? → <b>reduced-pressure distillation</b>.',
          'Steam-volatile, water-immiscible? → <b>steam distillation</b>.',
          'Closely similar components / tiny amounts? → <b>chromatography</b>. <b>Why:</b> the method must match the property that actually differs — picking distillation for a solid, or simple for a close-b.p. pair, simply fails.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Lassaigne’s test logic',
        steps: [
          'Fuse with sodium → convert covalent N, S, X into ionic CN<sup>−</sup>, S<sup>2−</sup>, X<sup>−</sup> (now water-extractable).',
          'Boil the fused mass with water and filter → the <b>sodium fusion extract</b>.',
          'Run the specific test for each suspected element on portions of the extract. <b>Why:</b> covalently bound elements give no ionic tests directly; sodium fusion liberates them as ions so classic precipitate/colour tests work.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — a Liebig (C & H) calculation',
        steps: [
          'Weigh the compound (<i>w</i>), burn it, and weigh the CO<sub>2</sub> and H<sub>2</sub>O absorbed.',
          'All carbon ends up in CO<sub>2</sub> (mass fraction of C in CO<sub>2</sub> is 12/44); all hydrogen in H<sub>2</sub>O (2/18).',
          'Apply the two formulae; oxygen (if present) is found <b>by difference</b> (100 − ∑ others). <b>Why:</b> combustion quantitatively transfers C and H into weighable products, so their masses report the original amounts.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D — a Kjeldahl (N) calculation',
        steps: [
          'The liberated NH<sub>3</sub> is absorbed in a known excess of standard acid; the <b>acid that reacts with ammonia</b> equals the ammonia (hence nitrogen) present.',
          'Each mole of N gives one mole of NH<sub>3</sub>, which neutralises one equivalent of acid; 14 g N per mole gives the 1.4 factor when volumes are in mL and concentration in normality. <b>Why:</b> titration converts an invisible amount of nitrogen into a precise, readable acid–base measurement.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Aniline is steam-volatile and immiscible with water but is contaminated with a non-volatile impurity. Which purification method is appropriate, and why?',
        steps: [
          'Aniline meets both conditions for <b>steam distillation</b>: it is appreciably volatile in steam and does not mix with water, while the impurity is non-volatile.',
          'In steam distillation, the combined vapour pressure of aniline and water reaches atmospheric pressure <b>below</b> aniline’s own boiling point, so aniline distils over with the steam at a gentler temperature, leaving the non-volatile impurity behind.',
          '<b>Board habit:</b> name the method and state the two physical conditions that justify it — examiners award the reasoning, not just the keyword.',
        ],
        ans: 'Steam distillation.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'In Lassaigne’s test, a compound’s sodium fusion extract gives a blood-red colour with ferric ions. The compound contains:',
        steps: [
          'Blood-red with Fe<sup>3+</sup> comes from thiocyanate (SCN<sup>−</sup>), which forms only when <b>both nitrogen and sulphur</b> are present together (they combine during fusion to give NaSCN).',
          '<b>Trap:</b> reading “red” as the iron(III) test for nitrogen alone. Nitrogen alone gives <b>Prussian blue</b>, not red; the blood-red is the combined N+S signature. Memorise: blue = N, red = N&S together.',
        ],
        ans: 'Both N and S.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '0.30 g of an organic compound on complete combustion gave 0.44 g of CO<sub>2</sub> and 0.18 g of H<sub>2</sub>O. Determine the percentages of carbon and hydrogen.',
        steps: [
          '%C = (12/44) × (0.44/0.30) × 100',
          '%H = (2/18) × (0.18/0.30) × 100',
          '(If oxygen were sought: 100 − 40.0 − 6.67 = 53.33% by difference.)',
          '<b>Multi-concept link:</b> this couples the mass-fraction idea (12/44, 2/18) with the “oxygen by difference” closure — the standard JEE Main estimation format.',
        ],
        ans: '%C = 40.0%; %H = 6.67%',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In a Dumas estimation, 0.28 g of a compound gave 50 mL of nitrogen collected over water at 300 K and 745 mm pressure. The aqueous tension at 300 K is 25 mm. Calculate the percentage of nitrogen.',
        steps: [
          '<b>Correct the pressure</b> for water vapour: <i>P</i><sub>dry</sub> = 745 − 25 = 720 mm.',
          '<b>Convert the volume to STP:</b><br><i>V</i><sub>STP</sub> = 50 × (720/760) × (273/300) = 43.1 mL',
          '<b>Moles of N<sub>2</sub></b> = 43.1/22400 = 1.924 × 10<sup>−3</sup>; moles of N = 3.85 × 10<sup>−3</sup>; mass of N = 3.85 × 10<sup>−3</sup> × 14 = 0.0539 g.',
          '%N = (0.0539/0.28) × 100',
          '<b>Rigor point:</b> the marks here hide in the <b>aqueous-tension correction</b> — forgetting to subtract 25 mm inflates the volume and the answer. Always reduce gas-over-water pressure before the STP conversion.',
        ],
        ans: '%N = 19.24%',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the purification technique used to separate glycerol, which decomposes at its boiling point.',
            a: 'Distillation under reduced pressure.',
          },
          {
            q: '[NEET] Which reagent confirms nitrogen in a sodium fusion extract, and what is the observation?',
            a: 'FeSO<sub>4</sub> (then warming and acidifying) → Prussian blue colour, confirming nitrogen.',
          },
          {
            q: '[JEE Main] 0.20 g of an organic compound gave 0.287 g of AgCl in a Carius estimation. Find the percentage of chlorine. (At. mass: Ag = 108, Cl = 35.5.)',
            a: '%Cl = (35.5/143.5) × (0.287/0.20) × 100 = 35.5%.',
          },
          {
            q: '[JEE Main] State which method estimates nitrogen by converting it to ammonium sulphate, and write the working formula for %N.',
            a: 'Kjeldahl’s method; %N = (1.4 × <i>N</i><sub>acid</sub> × <i>V</i><sub>acid (mL)</sub>)/<i>w</i>.',
          },
          {
            q: '[JEE Advanced] In a Kjeldahl estimation, the ammonia from 1.4 g of a compound neutralised exactly 30 mL of 0.5 N sulphuric acid. Calculate the percentage of nitrogen, and comment on why Kjeldahl fails for nitro and azo compounds.',
            a: '%N = (1.4 × 0.5 × 30)/1.4 = 15%. Kjeldahl fails for nitro/azo (and ring) nitrogen because that nitrogen is not converted quantitatively to ammonium sulphate during digestion.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The purification of a solid that is much more soluble in a hot solvent than a cold one is best done by:',
        opts: [
          { label: 'sublimation', nudge: '<b>(a)</b> suits only solids that vaporise directly.' },
          { label: 'crystallisation', nudge: null },
          { label: 'steam distillation', nudge: '<b>(c)</b>, <b>(d)</b> are liquid-separation techniques, irrelevant to a soluble solid.' },
          { label: 'fractional distillation', nudge: '<b>(c)</b>, <b>(d)</b> are liquid-separation techniques, irrelevant to a soluble solid.' },
        ],
        correct: 1,
        solution: 'Dissolving hot and cooling deposits pure crystals while impurities stay in the mother liquor.',
      },
      {
        t: 'mcq',
        q: 'In Lassaigne’s test, sodium is fused with the compound in order to:',
        opts: [
          { label: 'oxidise the elements', nudge: '<b>(a)</b> sodium is a reducing agent, not an oxidiser, here.' },
          { label: 'convert covalent elements into ionic salts', nudge: null },
          { label: 'remove carbon', nudge: '<b>(c)</b> carbon is detected separately, not removed.' },
          { label: 'lower the boiling point', nudge: '<b>(d)</b> boiling point is irrelevant to the fusion’s purpose.' },
        ],
        correct: 1,
        solution: 'Fusion converts covalently bound N, S, and X into water-soluble ionic salts so ionic tests become possible.',
      },
      {
        t: 'mcq',
        q: 'Halogens are estimated by:',
        opts: [
          { label: 'Kjeldahl’s method', nudge: '<b>(a)</b>, <b>(b)</b> estimate nitrogen.' },
          { label: 'Dumas method', nudge: '<b>(a)</b>, <b>(b)</b> estimate nitrogen.' },
          { label: 'Carius method', nudge: null },
          { label: 'Liebig combustion', nudge: '<b>(d)</b> estimates carbon and hydrogen.' },
        ],
        correct: 2,
        solution: 'The Carius method precipitates the halogen as silver halide, which is weighed.',
      },
      {
        t: 'mcq',
        q: 'In a CO<sub>2</sub>/H<sub>2</sub>O combustion estimation, the fraction 12/44 represents:',
        opts: [
          { label: 'the mass of carbon per unit mass of CO<sub>2</sub>', nudge: null },
          { label: 'the mass of CO<sub>2</sub> per unit carbon', nudge: '<b>(b)</b> is the inverse ratio.' },
          { label: 'the moles of CO<sub>2</sub>', nudge: '<b>(c)</b> the ratio is dimensionless mass-fraction, not a mole count.' },
          { label: 'the percentage of carbon', nudge: '<b>(d)</b> the percentage needs the further ×(1/<i>w</i>) × 100 factors.' },
        ],
        correct: 0,
        solution: 'Of every 44 mass units of CO<sub>2</sub>, 12 are carbon — so 12/44 converts CO<sub>2</sub> mass to carbon mass.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Method–property mismatch.</b> Match the technique to the property that actually differs: b.p. → distillation, solubility → crystallisation, sublimes → sublimation.',
          '<b>Blue vs blood-red.</b> Prussian blue = nitrogen; blood-red with Fe<sup>3+</sup> = nitrogen and sulphur together.',
          '<b>Method–element mismatch.</b> Carius → halogen/sulphur; Dumas & Kjeldahl → nitrogen; Liebig → C & H.',
          '<b>Aqueous-tension slip</b> and <b>oxygen by difference:</b> subtract water-vapour pressure for gas-over-water, and never estimate O directly — get it by difference.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> For estimation numericals, memorise the three mass-fractions — 12/44 (C from CO<sub>2</sub>), 2/18 (H from H<sub>2</sub>O), and the 1.4 Kjeldahl factor — and you can solve most percentage-composition problems in one line without re-deriving anything.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Purification = exploit a physical-property difference',
            note: 'sublimation (vaporises), crystallisation (solubility), distillation (b.p.; fractional for close b.p., reduced-pressure for decomposers, steam for steam-volatile + water-immiscible), extraction (partition), chromatography (adsorption/partition; <i>R</i><sub>f</sub>).',
          },
          {
            f: 'Detection',
            note: 'C/H → CO<sub>2</sub> + H<sub>2</sub>O (lime water, anhyd. CuSO<sub>4</sub>). Lassaigne sodium fusion → N (Prussian <b>blue</b>), S (violet/black PbS), X (AgX precipitate), <b>N+S (blood-red SCN)</b>.',
          },
          {
            f: 'Estimation',
            note: 'C/H Liebig · N Dumas (gas) or Kjeldahl (titration) · halogen/S Carius (AgX / BaSO<sub>4</sub>).',
          },
          {
            f: 'Formulae',
            note: '%C = (12/44) × <i>m</i>(CO<sub>2</sub>)/<i>w</i> × 100 · %H = (2/18) × <i>m</i>(H<sub>2</sub>O)/<i>w</i> × 100 · %N = 1.4 × <i>N</i> × <i>V</i>/<i>w</i> · oxygen <b>by difference.</b>',
          },
        ],
        aids: [
          '“blue is N, red is N&S”',
          '“Carius cuts halogens, Kjeldahl/Dumas net nitrogen”',
          '“correct for water before STP.”',
        ],
      },
    ],
  },
];
