import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 10, Topic 02, Proteins & Amino Acids: pp. 489–497 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8.
 * Figure 10.3, peptide-bond formation (caption p. 492, drawn p. 493), sits in
 * "Key procedures and logical framework" after Part B, where the book prints
 * its caption; it is redrawn in lib/diagrams/chemistry-12-10.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 489–497 ─────────────────────────
  {
    n: '02',
    title: 'Proteins & Amino Acids',
    kalam: 'Think of the twenty standard amino acids as the letters of an alphabet.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dependable, high-yield topic. CBSE Boards regularly set 1–3 mark questions on the zwitter ion / amphoteric behaviour, peptide linkage, the four levels of protein structure, and denaturation. NEET asks 1–2 questions almost every year (often on bonds stabilising the α-helix, essential vs. non-essential amino acids, or denaturation). JEE Main typically frames a peptide-bond-counting or amino-acid-classification item, and JEE Advanced can build a peptide-sequencing, isoelectric-charge, or peptide-bond-geometry puzzle.',
      },
      {
        t: 'p',
        html: 'Think of the twenty standard amino acids as the letters of an alphabet. Just as the same handful of Devanagari aksharas, ka, ma and la, can be strung into “kamal” or “malak” — the same letters, a different order, a different word — the cell strings amino acids into chains where the <b>sequence is everything</b>. Rearrange the order and you don’t get a slightly different protein; you get a different protein with a different job. That single idea — sequence determines identity — is the spine of this whole topic.',
      },
      {
        t: 'p',
        html: 'Start with the brick itself. An <b>amino acid</b> is a small molecule that carries two opposite-natured groups on the same carbon skeleton: an acidic <b>carboxyl group (–COOH)</b> and a basic <b>amino group (–NH<sub>2</sub>)</b>. When the amino group sits on the carbon right next to the carboxyl carbon (the α-carbon), it is an <b>α-amino acid</b> — and these are the only ones you get when a protein is hydrolysed. The general shape is<br>R–CH(NH<sub>2</sub>)–COOH<br>where <b>R</b> is the side chain that makes one amino acid differ from another.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> because an amino acid carries both an acid and a base in one body, it behaves like a trader in a mandi who is simultaneously a buyer and a seller. In water the carboxyl group hands its proton over to the amino group on the same molecule, producing a <b>zwitter ion</b> — a dipolar species H<sub>3</sub>N<sup>+</sup>–CHR–COO<sup>−</sup> that carries a positive and a negative charge at once yet is electrically neutral overall. This internal acid-base deal is why amino acids are crystalline, high-melting, water-soluble solids that behave like salts rather than like ordinary amines or carboxylic acids, and it is why they are <b>amphoteric</b> — they neutralise both added acid and added base.',
      },
      {
        t: 'p',
        html: 'Now join the bricks. Exactly as two sugars clasp hands through a glycosidic linkage (losing a water molecule) back in carbohydrates, two amino acids clasp hands through a <b>peptide bond</b>: the –COOH of one and the –NH<sub>2</sub> of the next combine, a water molecule is squeezed out, and an amide bridge –CO–NH– ties them. Two units make a <b>dipeptide</b>, three a tripeptide, and a long chain of more than a hundred (molecular mass above ~10,000 u) is a <b>protein</b>.',
      },
      {
        t: 'p',
        html: 'A protein, though, is not just a floppy string. <b>Think about it this way:</b> a freshly ironed, perfectly folded saree has a precise, functional shape; the cloth (the amino-acid sequence) is fixed, but the folding is what lets it be worn. Proteins fold into specific shapes — coiled springs (α-helix) and folded fans (β-pleated sheet) — held by hydrogen bonds. Throw that saree into boiling water and it crumples: the cloth is unchanged but the useful shape is gone. That crumpling is <b>denaturation</b> — heat or pH change snaps the hydrogen bonds, the protein unfolds, and it loses its biological activity (a boiled egg white setting solid, milk curdling into paneer).',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b><br>• <b>Only α-amino acids</b> build proteins; β-, γ-, δ-amino acids exist but are not protein building blocks.<br>• <b>Glycine is the lone optically inactive exception</b> — its α-carbon carries two identical H atoms (R = H), so it is not asymmetric. Every other standard amino acid is chiral.<br>• <b>D/L is configuration, not rotation direction</b> — naturally occurring amino acids are <b>L</b>, but that label says nothing about whether they rotate light + or −.<br>• Denaturation destroys <b>secondary and tertiary</b> structure (NCERT’s answer; a protein with quaternary structure loses that too) but leaves the <b>primary</b> sequence intact, and is usually irreversible.',
      },

      { t: 'part', title: 'Key definitions and classifications' },
      {
        t: 'p',
        html: 'Proteins carry no dimensional formulae; the “key quantities” here are definitions, the structural hierarchy, and the diagnostic classifications exams test.',
      },
      {
        t: 'formula',
        kicker: 'The amino-acid skeleton',
        main: 'General α-amino acid: R–CH(NH<sub>2</sub>)–COOH<br>Zwitter ion: R–CH(NH<sub>3</sub><sup>+</sup>)–COO<sup>−</sup>',
        legend: ['R = side chain that makes one amino acid differ from another'],
        note: null,
      },
      {
        t: 'table',
        title: 'Classification of amino acids (three independent axes)',
        head: ['Axis', 'Categories', 'Rule / examples'],
        rows: [
          ['Position of –NH<sub>2</sub>', 'α, β, γ, δ ...', 'distance of amino group from carboxyl; <b>only</b> α in proteins'],
          [
            'Acid–base nature of R',
            'acidic / basic / neutral',
            'more –COOH → acidic (aspartic, glutamic); more –NH<sub>2</sub> → basic (lysine, arginine, histidine: NCERT’s rule; strictly an extra basic nitrogen group — lysine’s –NH<sub>2</sub>, arginine’s guanidino, histidine’s imidazole); equal → neutral (glycine, alanine)',
          ],
          [
            'Dietary need',
            'essential / non-essential',
            'essential = cannot be synthesised by the body, must come from diet (e.g. valine, leucine, lysine); non-essential = body makes them',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>The peptide bond and chain length:</b><br>• Peptide linkage = amide –CO–NH– formed by condensation (loss of H<sub>2</sub>O).',
      },
      {
        t: 'formula',
        kicker: 'The peptide bond and chain length',
        main: 'For a linear chain of <i>n</i> amino acids:<br>number of peptide bonds = <i>n</i> − 1<br>water molecules eliminated on formation = <i>n</i> − 1',
        legend: ['<i>n</i> = number of amino acids in the chain'],
        note: null,
      },
      {
        t: 'p',
        html: '• Naming runs N-terminal (free –NH<sub>2</sub>) on the <b>left</b> to C-terminal (free –COOH) on the <b>right</b>; e.g. <b>glycylalanine (Gly–Ala)</b> = carboxyl of glycine joined to amino of alanine.<br>• Length labels: oligopeptide (2–9), polypeptide (~10–100), <b>protein</b> (>100 residues, <i>M</i> ≳ 10,000 u). Insulin (51 residues in two chains of 21 and 30, so 49 peptide bonds) is counted a protein because it has a definite conformation.',
      },
      {
        t: 'table',
        title: 'The four levels of protein structure',
        head: ['Level', 'What it describes', 'Held / defined by'],
        rows: [
          ['Primary', 'the sequence of amino acids', 'peptide (covalent) bonds'],
          ['Secondary', 'local shape: <b>α-helix</b> or <b>β-pleated sheet</b>', 'hydrogen bonds between backbone >C=O and –N–H'],
          ['Tertiary', 'overall 3-D folding into fibrous or globular form', 'H-bonds, disulphide, ionic, van der Waals'],
          ['Quaternary', 'arrangement of several polypeptide sub-units', 'inter-subunit forces (e.g. haemoglobin’s 4 chains)'],
        ],
      },
      {
        t: 'table',
        title: 'Fibrous vs. globular proteins',
        head: ['', 'Fibrous', 'Globular'],
        rows: [
          ['Chain arrangement', 'parallel chains, fibre-like', 'chains coiled into a sphere'],
          ['Bonds', 'hydrogen + disulphide', 'H-bonds, disulphide (insulin has three), ionic, van der Waals'],
          ['Water solubility', 'insoluble', 'soluble'],
          ['Examples', 'keratin (hair, wool, silk: NCERT’s list; silk’s protein is strictly fibroin), myosin, collagen', 'insulin, albumin, haemoglobin'],
        ],
      },
      {
        t: 'def',
        term: 'Isoelectric point (extension of zwitter ion behaviour)',
        html: 'the specific pH at which an amino acid exists predominantly as the neutral zwitter ion, carries <b>no net charge</b>, and therefore does <b>not migrate</b> toward either electrode in an electric field. Below this pH it gains net positive charge (migrates to cathode); above it, net negative charge (migrates to anode).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no single derivation here, but there is a tight logical scaffold worth reproducing in full-mark answers: why the zwitter ion forms, how the peptide chain assembles, and why the four structural levels are layered the way they are.',
      },
      {
        t: 'proc',
        title: 'Part A — Why an amino acid becomes a zwitter ion (acid-base reasoning)',
        steps: [
          'The molecule contains a proton donor (–COOH) and a proton acceptor (–NH<sub>2</sub>) on the same skeleton.',
          'The carboxyl group is a stronger acid than the protonated amino group is — so on energetic grounds the proton prefers to sit on nitrogen.',
          'The –COOH therefore transfers its H<sup>+</sup> <b>intramolecularly</b> to –NH<sub>2</sub>, giving COO<sup>−</sup> and NH<sub>3</sub><sup>+</sup>.',
          'The result is a dipolar ion: neutral overall, but salt-like in its physical behaviour (high melting point, water solubility) and <b>amphoteric</b> — add acid and the COO<sup>−</sup> accepts a proton; add base and the NH<sub>3</sub><sup>+</sup> donates one. This same logic, pushed to “at what pH is net charge zero?”, defines the isoelectric point.',
        ],
      },
      {
        t: 'proc',
        title: 'Part B — How the peptide chain is built (condensation logic)',
        steps: [
          'Align two amino acids head-to-tail: the –COOH of the first beside the –NH<sub>2</sub> of the second.',
          'The nitrogen’s lone pair attacks the carbonyl carbon; a molecule of water leaves; an amide –CO–NH– remains. This is exactly the “handshake-​with-​a-​dropped-​water-​droplet” we met for the glycosidic linkage in carbohydrates — same condensation idea, different functional groups.',
          'Repeat at the new free –COOH end to add a third residue, and so on, always growing N-terminal → C-terminal.',
          '<b>Key structural consequence:</b> the peptide bond has roughly <b>40% double-bond character</b> because the nitrogen lone pair delocalises onto the carbonyl. That partial double bond <b>locks all the atoms of the –CO–NH– unit into one plane and forbids free rotation about the C–N bond</b>, with the trans arrangement favoured. This planarity is precisely what makes regular folding (helices and sheets) geometrically possible.',
        ],
      },
      { t: 'fig', id: 'c12-10-fig-10.3' },
      { t: 'p', html: '<b>Part C — Why four structural levels, in order of increasing complexity.</b>' },
      {
        t: 'p',
        html: '• <b>Primary</b> fixes which residues and in what order — the one-dimensional information. Change one residue and the protein’s identity changes.<br>• <b>Secondary</b> is the first folding response: the planar peptide units hydrogen-bond in regular patterns. In the <b>α-helix</b>, the chain twists into a right-handed screw and the >C=O of each residue hydrogen-bonds to the –N–H of a residue one turn further along (an intrachain bond). In the <b>β-pleated sheet</b>, extended chains lie side by side and hydrogen-bond between chains, looking like the pleats of drapery.<br>• <b>Tertiary</b> packs that secondary structure into a compact 3-D shape (fibrous rod or globular ball), stabilised by the longer-range bonds; this is the <b>native</b> state — energetically most stable for that sequence.<br>• <b>Quaternary</b> assembles several folded chains into one functional unit (haemoglobin’s four chains).<br>• <b>Denaturation</b> then reads cleanly: disrupt the weak bonds (heat, pH, alcohol) and levels 2–4 collapse while level 1 survives — the protein unfolds and dies functionally, as in a boiled egg.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Explain why an amino acid such as alanine (a) behaves like a salt rather than like an ordinary amine or acid, and (b) reacts with both HCl and NaOH. Support your answer with the relevant ionic forms.',
        steps: [
          '<b>(a) Salt-like behaviour.</b> Alanine carries an acidic –COOH and a basic –NH<sub>2</sub> on the same molecule. In aqueous solution the carboxyl donates its proton to the amino group internally, giving the dipolar <b>zwitter ion</b>:<br>CH<sub>3</sub>–CH(NH<sub>3</sub><sup>+</sup>)–COO<sup>−</sup><br>Because the molecule now consists of full positive and negative charges (an internal salt), it shows the high melting point and water solubility characteristic of ionic salts rather than the volatility of a simple amine or acid.',
          '<b>(b) Reaction with both acid and base (amphoterism).</b><br>• With <b>HCl</b>, the COO<sup>−</sup> end accepts a proton: CH<sub>3</sub>–CH(NH<sub>3</sub><sup>+</sup>)–COOH (now a cation).<br>• With <b>NaOH</b>, the NH<sub>3</sub><sup>+</sup> end loses a proton: CH<sub>3</sub>–CH(NH<sub>2</sub>)–COO<sup>−</sup> (now an anion).',
        ],
        ans: 'The simultaneous presence of acidic and basic groups (zwitter ion formation) makes alanine salt-like and amphoteric.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Classify each as acidic, basic or neutral by inspection only: (i) glutamic acid (R = –CH<sub>2</sub>CH<sub>2</sub>COOH), (ii) lysine (R = –(CH<sub>2</sub>)<sub>4</sub>NH<sub>2</sub>), (iii) valine (R = –CH(CH<sub>3</sub>)<sub>2</sub>).',
        steps: [
          '<b>The trap:</b> students try to recall lists by rote and slip up; the fast route is to count functional groups, ignoring the backbone’s own one –NH<sub>2</sub> and one –COOH.',
          '<b>Fast reasoning — compare the extra groups hidden in R:</b><br>• (i) <b>Glutamic acid:</b> R adds an extra –COOH → carboxyls outnumber aminos → <b>acidic.</b><br>• (ii) <b>Lysine:</b> R adds an extra –NH<sub>2</sub> → aminos outnumber carboxyls → <b>basic.</b><br>• (iii) <b>Valine:</b> R is a plain hydrocarbon, no extra acidic/basic group → equal count → <b>neutral.</b>',
          '<b>Shortcut:</b> read only the side chain — “extra COOH ⇒ acidic, extra NH<sub>2</sub> ⇒ basic, neither ⇒ neutral.” It collapses a memorised list into a two-second count.',
        ],
        ans: '(i) acidic, (ii) basic, (iii) neutral.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A linear pentapeptide is built from five amino-acid residues. (i) How many peptide bonds does it contain? (ii) How many water molecules are released when it is assembled from its free amino acids? (iii) On complete hydrolysis, how many water molecules are consumed, and how many free amino acids are regenerated? This links the <b>peptide-bond-counting rule</b> with the <b>condensation/hydrolysis mass balance</b>.',
        steps: [
          'Use the chain rule “for <i>n</i> residues, bonds = <i>n</i> − 1,” and the fact that each bond formed releases one water and each bond hydrolysed consumes one water.',
          '(i) <i>n</i> = 5 ⇒ peptide bonds = 5 − 1 = <b>4</b>.',
          '(ii) Each of the 4 bonds is formed by a condensation that ejects one H<sub>2</sub>O, so <b>4</b> water molecules are released on assembly.',
          '(iii) Hydrolysis is the exact reverse: breaking all 4 bonds <b>consumes 4 water molecules</b> and regenerates the <b>5 free amino acids</b>.',
          '<b>Sanity check (mass balance):</b> 5 residues →<sup>−4 H₂O</sup> pentapeptide →<sup>+4 H₂O</sup> 5 amino acids — water out on assembly equals water in on hydrolysis, as it must.',
        ],
        ans: '(i) 4 peptide bonds; (ii) 4 water released; (iii) 4 water consumed, 5 amino acids regenerated.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A tripeptide is to be made using three <b>different</b> amino acids X, Y and Z. (i) If each amino acid must be used exactly once, how many distinct tripeptide sequences are possible? (ii) If repetition were allowed (any of the three at each of the three positions), how many sequences would be possible? (iii) Explain, using the bonding nature of the peptide linkage, why a peptide’s backbone is restricted to a roughly planar, trans arrangement rather than rotating freely — and connect this to why “sequence” (primary structure) is biologically decisive.',
        steps: [
          '<b>(i) Each used once — a permutation of 3 distinct items in 3 ordered positions:</b><br>3! = 3 × 2 × 1 = <b>6</b> sequences (e.g. XYZ, XZY, YXZ, YZX, ZXY, ZYX).',
          'The directionality matters: a peptide read N→C as X-Y-Z is a different molecule from Z-Y-X, because the two ends (free –NH<sub>2</sub> vs free –COOH) are not interchangeable.',
          '<b>(ii) Repetition allowed — 3 independent choices at each of 3 positions:</b><br>3<sup>3</sup> = <b>27</b> sequences.',
          '<b>(iii) Backbone restriction.</b> The peptide bond is not a pure single bond: the nitrogen lone pair delocalises onto the carbonyl, giving the C–N link about <b>40% double-bond character</b>. A (partial) double bond cannot rotate freely, so all the atoms of each O=C–N–H unit are held <b>coplanar</b>, and steric factors make the <b>trans</b> geometry preferred. Free rotation survives only at the α-carbons (the φ/ψ angles), not across the amide itself.',
          '<b>Connection to primary structure.</b> Because each amide plane is rigid, the only way a chain can adopt different overall shapes is through the limited rotations at the α-carbons — and which rotations are favourable is dictated by the side chains, i.e. by the <b>sequence</b>. So the one-dimensional order of residues (primary structure) deterministically channels the achievable three-dimensional folds (secondary/tertiary), which is exactly why a single change in sequence can abolish a protein’s function.',
        ],
        ans: '(i) 6; (ii) 27; (iii) partial double-bond character forces planar, trans, non-rotating amide units, so the sequence governs the foldable shape and hence the biology.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define (i) peptide linkage, (ii) denaturation of a protein. State which levels of protein structure are destroyed during denaturation.',
            a: '(i) the amide bond –CO–NH– joining the –COOH of one amino acid to the –NH<sub>2</sub> of the next, formed with loss of water; (ii) loss of a protein’s native 3-D shape (and biological activity) on heating/pH change as hydrogen bonds break; <b>secondary and tertiary</b> structures are destroyed (and the quaternary, in a protein that has one), <b>primary</b> remains intact.',
          },
          {
            q: '[NEET] Which type of interaction is mainly responsible for stabilising the α-helical secondary structure of a protein?',
            a: 'Intramolecular hydrogen bonds between the backbone >C=O of one residue and the –N–H of a residue in the adjacent turn of the helix.',
          },
          {
            q: '[JEE Main] A protein chain contains 146 amino-acid residues. How many peptide bonds are present, and how many water molecules were eliminated during its synthesis from free amino acids?',
            a: 'Peptide bonds = 146 − 1 = 145; water molecules eliminated = 145.',
          },
          {
            q: '[JEE Main] Distinguish fibrous from globular proteins on the basis of chain arrangement, water solubility, and one example of each.',
            a: 'Fibrous — parallel chains, water-insoluble, e.g. keratin; globular — chains coiled into a sphere, water-soluble, e.g. insulin.',
          },
          {
            q: '[JEE Advanced] Glycine is the only standard amino acid that is optically inactive, whereas alanine is optically active. (i) Explain the difference in terms of the α-carbon. (ii) State what the L-designation of naturally occurring amino acids refers to, and whether it predicts the sign of optical rotation.',
            a: '(i) In glycine R = H, so the α-carbon carries two identical H atoms and is <b>not asymmetric</b> → optically inactive; in alanine R = CH<sub>3</sub>, the α-carbon bears four different groups → chiral → optically active. (ii) L refers to the <b>configuration</b> of the α-carbon (amino group on the left in the Fischer projection, by correlation with L-glyceraldehyde); it is a configurational label and does <b>not</b> predict the direction (+/−) of optical rotation.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In aqueous solution at moderate pH, an α-amino acid exists predominantly as:',
        opts: [
          {
            label: 'a neutral molecule R–CH(NH<sub>2</sub>)–COOH',
            nudge: '<b>(a)</b> ignores the intramolecular acid-base reaction that actually occurs in water — a common oversight from drawing the “textbook” neutral form.',
          },
          { label: 'a dipolar zwitter ion R–CH(NH<sub>3</sub><sup>+</sup>)–COO<sup>−</sup>', nudge: null },
          {
            label: 'a fully protonated cation',
            nudge: '<b>(c)</b> is the form only in strongly acidic solution (well below the isoelectric point, below p<i>K</i><sub>a1</sub> ≈ 2); choosing it means fixing on one pH extreme.',
          },
          {
            label: 'a fully deprotonated anion',
            nudge: '<b>(d)</b> is the form only in strongly basic solution (well above the isoelectric point, above p<i>K</i><sub>a2</sub> ≈ 9–10); the mirror-image error of <b>(c)</b>.',
          },
        ],
        correct: 1,
        solution: 'The internal proton transfer from –COOH to –NH<sub>2</sub> gives the dipolar zwitter ion, accounting for the salt-like, amphoteric behaviour.',
      },
      {
        t: 'mcq',
        q: 'The bond responsible for holding two amino-acid units together in a protein is:',
        opts: [
          {
            label: 'a glycosidic linkage',
            nudge: '<b>(a)</b> is the linkage in <b>carbohydrates</b> — a tempting trap because both are condensation bonds, but glycosidic joins sugars, not amino acids.',
          },
          { label: 'a phosphodiester linkage', nudge: '<b>(b)</b> is the backbone linkage in <b>nucleic acids</b>, not proteins.' },
          { label: 'a peptide (amide) linkage', nudge: null },
          {
            label: 'a hydrogen bond',
            nudge: '<b>(d)</b> hydrogen bonds stabilise the secondary/tertiary shape but do not join the residues into the chain itself; picking it confuses what builds the chain with what folds it.',
          },
        ],
        correct: 2,
        solution: 'Amino acids are joined by the amide –CO–NH– peptide bond formed by condensation.',
      },
      {
        t: 'mcq',
        q: 'During denaturation of a protein:',
        opts: [
          {
            label: 'the primary structure is destroyed while the secondary remains',
            nudge: '<b>(a)</b> inverts the truth; the primary structure is the robust one, not the fragile one.',
          },
          { label: 'the secondary and tertiary structures are destroyed while the primary remains intact', nudge: null },
          {
            label: 'peptide bonds are hydrolysed',
            nudge: '<b>(c)</b> overstates the damage: denaturation does <b>not</b> cleave peptide bonds (that would be hydrolysis, a different process).',
          },
          {
            label: 'the amino-acid sequence is scrambled',
            nudge: '<b>(d)</b> is impossible without breaking covalent bonds; the sequence cannot “scramble” during ordinary denaturation.',
          },
        ],
        correct: 1,
        solution: 'Heat or pH change breaks the weak (mainly hydrogen) bonds, unfolding the helix/sheet and collapsing tertiary folding, but the covalent peptide backbone — the primary sequence — survives.',
      },
      {
        t: 'mcq',
        q: 'Which statement about amino-acid optical activity is correct?',
        opts: [
          {
            label: 'All twenty standard amino acids are optically active.',
            nudge: '<b>(a)</b> forgets the single glycine exception — a classic “all/none” overgeneralisation.',
          },
          { label: 'Glycine is optically inactive because its α-carbon is not asymmetric.', nudge: null },
          {
            label: 'Naturally occurring amino acids are of the D-configuration.',
            nudge: '<b>(c)</b> reverses reality: naturally occurring amino acids are <b>L</b>, not D.',
          },
          {
            label: 'The L-designation means the amino acid is laevorotatory.',
            nudge: '<b>(d)</b> conflates configuration with rotation; L is a configurational label and does not fix the (+/−) sign — the very distinction examiners love to probe.',
          },
        ],
        correct: 1,
        solution: 'Glycine’s side chain is H, so its α-carbon holds two identical H atoms, is not a stereocentre, and the molecule is achiral.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>equating L/D with the rotation sign.</b> L (or D) describes the configuration of the α-carbon relative to glyceraldehyde; it says nothing about whether the molecule is (+) or (−). Naturally occurring amino acids are L regardless of their rotation direction.',
          '<b>calling every amino acid chiral.</b> Glycine (R = H) has a non-asymmetric α-carbon and is optically inactive. It is the standard exception examiners test.',
          '<b>thinking denaturation breaks peptide bonds / destroys the sequence.</b> It disrupts only the weak bonds that hold the shape (secondary, tertiary, quaternary). The primary covalent sequence is untouched — boiling an egg doesn’t hydrolyse its proteins, it just unfolds them.',
          '<b>miscounting peptide bonds and waters.</b> For <i>n</i> residues in one linear chain there are exactly <i>n</i> − 1 peptide bonds and <i>n</i> − 1 waters released (or consumed on hydrolysis). Students often write <i>n</i>.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for “acidic / basic / neutral,” ignore the backbone and read only the <b>side chain</b> — extra –COOH ⇒ acidic, extra –NH<sub>2</sub> ⇒ basic, neither ⇒ neutral. For chain arithmetic, lock in the <b>“<i>n</i> − 1” rule</b> for both bonds and water. And remember the bond map across Biomolecules: <b>glycosidic</b> joins sugars, <b>peptide</b> joins amino acids, <b>phosphodiester</b> joins nucleotides — a single mismatch is the most common MCQ trap.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Amino acid',
            note: 'R–CH(NH<sub>2</sub>)–COOH; only <b>α-amino acids</b> build proteins; ~20 standard, essential (diet) vs non-essential (body-made).',
          },
          {
            f: 'Zwitter ion',
            note: 'R–CH(NH<sub>3</sub><sup>+</sup>)–COO<sup>−</sup> — dipolar, neutral, salt-like, <b>amphoteric</b>; net charge zero at the <b>isoelectric point</b>.',
          },
          {
            f: 'Optical activity',
            note: 'α-carbon chiral ⇒ optically active; <b>glycine</b> (R = H) is the inactive exception; natural amino acids are <b>L</b> (configuration ≠ rotation sign).',
          },
          {
            f: 'Peptide bond',
            note: 'amide –CO–NH– by condensation (–H<sub>2</sub>O); ~40% double-bond character ⇒ planar, trans, no free rotation. For <i>n</i> residues: <i>n</i> − 1 <b>bonds</b>, <i>n</i> − 1 <b>waters</b>.',
          },
          {
            f: 'Four structure levels',
            note: 'Primary (sequence, peptide bonds) → Secondary (<b>α-helix / β-pleated sheet</b>, H-bonds) → Tertiary (3-D fold; fibrous or globular) → Quaternary (sub-unit assembly, e.g. haemoglobin).',
          },
          {
            f: '<b>Fibrous</b> (parallel, insoluble; keratin, myosin) vs <b>Globular</b> (coiled, soluble; insulin, albumin). <b>Denaturation</b> kills 2°/3°/4°, spares 1° (boiled egg, curdled milk).',
            note: '',
          },
        ],
        aids: [
          '“side chain decides acid/base”',
          '“<i>n</i> beads → <i>n</i> − 1 knots”',
          '“glycosidic–peptide–phosphodiester = sugar–protein–nucleic acid.”',
        ],
      },
    ],
  },
];
