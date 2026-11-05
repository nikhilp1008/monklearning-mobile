import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 04, Bonding in Metal Carbonyls: pp. 219–224 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8. These
 * pages hold no figure and no drawing. The book's "Sub-01", "Sub-02", "Sub-03" and
 * "Sub-06" are "Topic 01", "Topic 02", "Topic 03" and "Topic 06" here. Procedures A
 * and B run their numbered steps on in one item in the book; here each is its own
 * step. The book's "where Z is …" sentence under the EAN rule is the formula's legend.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 219–224 ─────────────────────────
  {
    n: '04',
    title: 'Bonding in Metal Carbonyls',
    kalam: 'Imagine two neighbours who help each other so that the more one gives, the more the other gives back — a virtuous circle.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A compact, high-yield topic. CBSE Boards ask a 2–3 mark “discuss the nature of bonding in metal carbonyls” or a structure question. NEET occasionally tests a carbonyl structure or the oxidation state of the metal (often zero). JEE Main and Advanced lean on synergic (back-)bonding reasoning, the EAN / 18-electron rule, and the distinction between terminal and bridging carbonyls.',
      },
      {
        t: 'p',
        html: 'We have met dozens of ligands so far — water, ammonia, chloride, cyanide. Carbon monoxide, CO, is a ligand too, but a peculiarly interesting one, and the complexes it forms with metals — the <b>metal carbonyls</b> — are special enough to get their own topic. A <b>homoleptic carbonyl</b> is a compound in which a transition metal is bonded to carbon monoxide and nothing else: tetracarbonylnickel(0), [Ni(CO)<sub>4</sub>], is the classic example.',
      },
      {
        t: 'p',
        html: 'The first surprising thing is the oxidation state. In [Ni(CO)<sub>4</sub>] the nickel is in the <b>zero</b> oxidation state — it has not lost any electrons at all. How can a neutral metal atom hold ligands together? The answer is the heart of this topic: a two-way, mutually reinforcing bond called <b>synergic bonding</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine two neighbours who help each other so that the more one gives, the more the other gives back — a virtuous circle. That is exactly the metal–CO relationship. There are two flows of electron density, in opposite directions:<br>1. <b>Ligand → metal (the σ bond).</b> The carbon atom of CO has a lone pair, and it donates this pair into an empty orbital on the metal. This is an ordinary coordinate (dative) σ bond, just like any Lewis base → Lewis acid donation (Topic 01).<br>2. <b>Metal → ligand (the π back-bond).</b> Now the metal, which has filled d-orbitals (it is electron-rich, being in a low oxidation state), pushes some of that electron density back into an empty <b>antibonding</b> π* orbital of the CO molecule.',
      },
      {
        t: 'p',
        html: 'Here is the “synergic” magic: the σ donation pumps electron density onto the metal, which makes the metal even more eager to relieve that build-up by π back-donation; and the π back-donation drains the metal, which makes it a better σ acceptor. Each flow strengthens the other — they are synergic (working together) — and the net result is a metal–carbon bond far stronger than a plain dative bond, which is what holds these zero-oxidation-state compounds together. Without the back-bond, CO’s weak σ donation alone could not hold a neutral metal to a neutral CO molecule strongly enough; the back-bond is what makes metal carbonyls stable.',
      },
      {
        t: 'p',
        html: 'This same chemistry has a sobering real-world face. The iron at the centre of haemoglobin (Topic 06) binds oxygen reversibly, but it binds <b>carbon monoxide</b> through exactly the synergic mechanism described here — and far more strongly, because Fe→CO back-donation is so favourable. That is why CO is poisonous: it clamps onto the haemoglobin iron hundreds of times more tightly than O<sub>2</sub> and lets go only slowly, blocking the site oxygen should occupy. The abstract “synergic bond” is, in that setting, a matter of life and death.',
      },
      {
        t: 'p',
        html: 'There is a beautiful, measurable consequence. The electron density that the metal pushes into CO goes into an antibonding orbital of the C–O bond. Putting electron density into an antibonding orbital <b>weakens</b> the C–O bond — its bond order drops a little below the triple bond of free CO. So in a metal carbonyl the <b>M–C bond gets stronger (gains π/double-bond character) while the C–O bond gets weaker (lengthens)</b>. This is confirmed experimentally: the C–O infrared stretching frequency in a carbonyl is lower than in free CO, and the more electron-rich the metal, the lower it falls.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• Synergic bonding needs a metal that is <b>electron-rich</b> — in a low or zero oxidation state with filled d-orbitals to back-donate. This is why carbonyls feature metals in unusually low oxidation states.<br>• CO is a <b>weak σ donor but a strong π acceptor</b>; it is the π-accepting ability that makes the bond strong, not the σ donation alone. Ligands without empty π* orbitals (like NH<sub>3</sub>) cannot do this.<br>• The picture assumes the relevant CO antibonding orbital is energetically accessible to the metal d-electrons; for very high oxidation-state metals (electron-poor), back-bonding is weak and stable carbonyls do not form.',
      },
      {
        t: 'p',
        html: '<b>Why CO is built for this job.</b> It helps to see why carbon monoxide is the perfect synergic ligand, and the answer lies in its molecular orbitals. The highest occupied orbital of CO is a σ orbital concentrated on the <b>carbon</b> atom — this is the lone pair that does the forward σ donation, and it is why CO binds through carbon, not oxygen, in carbonyls at this level. Just above it sit empty π* (antibonding) orbitals, low enough in energy to accept electron density from the metal. So a single small molecule offers, side by side, a ready σ donor and a ready π acceptor — exactly the two ingredients synergic bonding needs. This combination is also why CO sits at the very top of the spectrochemical series (Topic 03): π-accepting ligands produce the largest crystal-field splitting.',
      },

      { t: 'part', title: 'Key facts, structures and the EAN rule' },
      { t: 'p', html: '<b>Classification of carbonyls</b>' },
      {
        t: 'def',
        term: 'Homoleptic vs heteroleptic',
        html: 'only CO ligands (e.g. [Ni(CO)<sub>4</sub>]) vs CO together with other ligands (e.g. [Mn(CO)<sub>5</sub>Cl], [Co(CO)<sub>3</sub>(NO)]). (NO counts 3 electrons as a neutral ligand: 27 + 6 + 3 = 36.)',
      },
      {
        t: 'def',
        term: 'Mononuclear vs polynuclear',
        html: 'one metal centre (e.g. [Fe(CO)<sub>5</sub>], [Cr(CO)<sub>6</sub>]) vs two or more (e.g. [Mn<sub>2</sub>(CO)<sub>10</sub>], [Co<sub>2</sub>(CO)<sub>8</sub>], [Fe<sub>2</sub>(CO)<sub>9</sub>]). Polynuclear carbonyls form when a single metal cannot reach the noble-gas count alone (Mn and Co, with an odd number of electrons) and so shares a metal–metal bond and/or bridging CO with a partner; a metal that can reach it alone may form them too ([Fe(CO)<sub>5</sub>] and [Fe<sub>2</sub>(CO)<sub>9</sub>] both reach 36).',
      },
      {
        t: 'def',
        term: 'Terminal vs bridging CO',
        html: 'a CO bound to one metal (terminal) vs a CO that bridges two metals (μ-CO). Mononuclear carbonyls have only terminal CO; some polynuclear ones (e.g. [Co<sub>2</sub>(CO)<sub>8</sub>], [Fe<sub>2</sub>(CO)<sub>9</sub>]) have both.',
      },
      {
        t: 'table',
        title: 'Structures of common carbonyls (metal in the 0 oxidation state in all five)',
        head: ['Carbonyl', 'IUPAC name', 'Geometry', 'Hybridisation', 'Special feature'],
        rows: [
          ['[Ni(CO)<sub>4</sub>]', 'tetracarbonylnickel(0)', 'tetrahedral', 'sp<sup>3</sup>', 'mononuclear'],
          ['[Fe(CO)<sub>5</sub>]', 'pentacarbonyliron(0)', 'trigonal bipyramidal', 'dsp<sup>3</sup>', 'mononuclear'],
          ['[Cr(CO)<sub>6</sub>]', 'hexacarbonylchromium(0)', 'octahedral', 'd<sup>2</sup>sp<sup>3</sup>', 'mononuclear'],
          ['[Mn<sub>2</sub>(CO)<sub>10</sub>]', 'decacarbonyldimanganese(0)', 'two square-pyramidal Mn(CO)<sub>5</sub> units', '—', 'joined by a <b>Mn–Mn bond</b>, no bridging CO'],
          ['[Co<sub>2</sub>(CO)<sub>8</sub>]', 'octacarbonyldicobalt(0)', '—', '—', '<b>Co–Co bond</b> plus two <b>bridging</b> CO groups'],
        ],
      },
      {
        t: 'p',
        html: '<b>The bonding, in one line:</b> the M–C bond has both <b>σ character</b> (ligand → metal lone-pair donation) and <b>π character</b> (metal → ligand back-donation), and this synergic combination provides the stability of metal carbonyls.',
      },
      { t: 'p', html: '<b>The EAN rule (Effective Atomic Number)</b>' },
      {
        t: 'p',
        html: 'Sidgwick’s rule says a stable carbonyl tends to have the metal achieve the electron count of the next noble gas (for the first transition series, that of krypton, 36) — equivalently, an <b>18-electron</b> valence shell.',
      },
      {
        t: 'formula',
        kicker: 'The EAN rule (Effective Atomic Number)',
        main: 'EAN = <i>Z</i> − (oxidation state) + 2 × (CO per metal) (+ 1 per M–M bond)',
        legend: [
          'EAN = effective atomic number',
          '<i>Z</i> = the metal’s atomic number',
          'CO per metal = total CO ÷ number of metals, so a bridging CO gives 1 electron to each metal it spans',
          '2 = electrons donated by each CO',
          'M–M = metal–metal bond, contributes 1 electron to each metal',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A bridging CO still donates two electrons, one to each metal it spans. Per Co in [Co<sub>2</sub>(CO)<sub>8</sub>], with three terminal and two bridging CO: 27 + 6 + 2 + 1 = 36, the same as 27 + 8 + 1 in the table below. Per Fe in [Fe<sub>2</sub>(CO)<sub>9</sub>], with three terminal and three bridging CO: 26 + 6 + 3 + 1 = 36. In a heteroleptic carbonyl any other two-electron donor counts like a CO: [Mn(CO)<sub>5</sub>Cl] gives 25 − 1 + 2(6) = 36.',
      },
      {
        t: 'p',
        html: 'The rule is a useful guide rather than an absolute law — for example, [V(CO)<sub>6</sub>] has a 17-electron count (one short of 36) and is a stable, isolable exception, though it is easily reduced to the 18-electron [V(CO)<sub>6</sub>]<sup>−</sup>.',
      },
      {
        t: 'p',
        html: '<b>CO belongs to a family — the π-acid (π-acceptor) ligands.</b> The synergic mechanism is not unique to CO; any ligand that is both a σ donor and has empty π* (or empty d) orbitals to accept back-donation behaves the same way. This family — <b>CO, CN<sup>−</sup>, NO, PF<sub>3</sub> and phosphines PR<sub>3</sub></b> — are called π-acid or π-acceptor ligands, and they all sit at the strong-field end of the spectrochemical series (Topic 03’s series lists only CN<sup>−</sup> and CO of these). Their shared signature is metal → ligand back-donation that strengthens the M–ligand bond while weakening an internal bond of the ligand.',
      },
      {
        t: 'p',
        html: '<b>Terminal vs bridging — telling them apart.</b> Because a bridging CO (μ-CO) is shared between two metals, its C–O bond is weakened more than a terminal CO’s, so a bridging carbonyl shows a <b>lower</b> C–O infrared stretching frequency than a terminal one. This is how chemists distinguish the two experimentally — and why [Co<sub>2</sub>(CO)<sub>8</sub>] (with bridges) and [Mn<sub>2</sub>(CO)<sub>10</sub>] (without) have characteristically different infrared spectra.',
      },
      {
        t: 'p',
        html: '<b>The numbers behind the evidence.</b> The C–O stretching frequency is the single most informative measurement on a carbonyl. Free CO absorbs near 2143 cm<sup>−1</sup>; a <b>terminal</b> M–CO typically falls to roughly 2000 cm<sup>−1</sup>, and a <b>bridging</b> μ-CO drops further, to around 1800 cm<sup>−1</sup>. The steady fall — free > terminal > bridging — is the direct fingerprint of increasing back-donation into the C–O antibonding orbital, and it tracks how electron-rich the metal is: the more negative the metal centre, the lower the frequency. A few more carbonyls worth knowing are the heteroleptic [Mn(CO)<sub>5</sub>Cl] (CO together with a chloride), and <b>iron enneacarbonyl</b> [Fe<sub>2</sub>(CO)<sub>9</sub>], a polynuclear carbonyl with an Fe–Fe bond and three bridging CO groups — a vivid case of bridging carbonyls.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Explain synergic bonding (the exam favourite)',
        steps: [
          'State the σ donation: the carbon lone pair of CO enters an empty metal orbital → coordinate σ bond, ligand to metal.',
          'State the π back-donation: a filled metal d-orbital donates density into the empty antibonding π* orbital of CO → π bond, metal to ligand.',
          'State the synergy: each flow reinforces the other, strengthening the M–C bond.',
          'State the consequence: M–C gains double-bond character (shortens), C–O bond order falls (lengthens; lower IR frequency). <b>Why:</b> examiners award marks for both directions and the word “synergic” — leaving out the back-bond loses most of the marks.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Apply the EAN rule',
        steps: [
          'Write the metal’s atomic number <i>Z</i>.',
          'Subtract its oxidation state (zero for most carbonyls).',
          'Add 2 × (CO per metal; a bridging CO gives 1 electron to each metal it spans).',
          'Add 1 for each metal–metal bond.',
          'Check the total against the noble-gas number (36 for the first series). <b>Why:</b> the rule predicts how many carbonyls a metal will bind and rationalises why polynuclear carbonyls and M–M bonds form (to make up the electron count).',
        ],
      },
      { t: 'p', html: 'Worked across the common carbonyls the pattern is striking:' },
      {
        t: 'table',
        title: null,
        head: ['Carbonyl', '<i>Z</i>', '2×CO', 'M–M', 'EAN'],
        rows: [
          ['[Ni(CO)<sub>4</sub>]', '28', '+8', '—', '36'],
          ['[Fe(CO)<sub>5</sub>]', '26', '+10', '—', '36'],
          ['[Cr(CO)<sub>6</sub>]', '24', '+12', '—', '36'],
          ['[Mn<sub>2</sub>(CO)<sub>10</sub>] (per Mn)', '25', '+10', '+1', '36'],
          ['[Co<sub>2</sub>(CO)<sub>8</sub>] (per Co)', '27', '+8', '+1', '36'],
        ],
      },
      {
        t: 'p',
        html: 'Every one lands on 36 — the krypton count — which is exactly why these particular formulae are the stable ones.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Decide structure from coordination number.</b> Count the donor atoms (Topic 01) → coordination number → geometry: 4 → tetrahedral (sp<sup>3</sup>), 5 → trigonal bipyramidal (dsp<sup>3</sup>), 6 → octahedral (d<sup>2</sup>sp<sup>3</sup>). For polynuclear carbonyls, check whether the EAN shortfall is made up by a metal–metal bond and/or bridging CO groups. <b>Why:</b> the geometry follows directly from the hybridisation the metal adopts to host the carbonyls.',
      },
      {
        t: 'p',
        html: '<b>Preparation (in brief).</b> Some carbonyls form by direct combination of the finely divided metal with CO (e.g. Ni + 4 CO → [Ni(CO)<sub>4</sub>]); others are made by reductive carbonylation of a metal salt under CO pressure.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Describe the nature of the metal–carbon bond in [Ni(CO)<sub>4</sub>] and state the oxidation state and geometry of nickel.',
        steps: [
          'Oxidation state of Ni: CO is neutral, the complex is neutral, so Ni is in the <b>0</b> oxidation state.',
          'Geometry: CN = 4 with sp<sup>3</sup> hybridisation → <b>tetrahedral</b>.',
          'Bonding: each M–C bond is <b>synergic</b> — a σ bond formed by donation of the carbon lone pair of CO into an empty Ni orbital (ligand → metal), reinforced by a π back-bond formed by donation of filled Ni d-electron density into the empty antibonding π* orbital of CO (metal → ligand). The two donations strengthen each other, which is why a zero-oxidation-state metal forms a stable compound.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'What is the EAN of iron in [Fe(CO)<sub>5</sub>], and what does it tell you? (Atomic number of Fe = 26.)',
        steps: [
          '<b>Speed logic:</b> EAN = <i>Z</i> − ON + 2(CO count) = 26 − 0 + 2(5) = 26 + 10.',
          '36 is the atomic number of <b>krypton</b> — iron has attained a noble-gas (18-electron) configuration, so [Fe(CO)<sub>5</sub>] is stable and iron binds exactly five CO ligands.',
          '<b>Trap to avoid:</b> forgetting that each CO donates <b>two</b> electrons (counting 5 instead of 10), or subtracting an oxidation state that is actually zero. The “×2 per CO” is where most marks are lost.',
        ],
        ans: 'EAN = 36.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (EAN + structure)',
        q: 'Verify the EAN rule for [Cr(CO)<sub>6</sub>] and predict its geometry and hybridisation. (Atomic number of Cr = 24.)',
        steps: [
          'EAN = 24 − 0 + 2(6) = 24 + 12 = 36 → krypton configuration, 18-electron, stable.',
          'Six donor atoms → CN = 6 → octahedral geometry, d<sup>2</sup>sp<sup>3</sup> hybridisation. Chromium binds exactly six CO ligands precisely because that is the number needed to reach the 36-electron count.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (polynuclear, M–M bond)',
        q: 'Using the EAN rule, explain why manganese forms the dinuclear carbonyl [Mn<sub>2</sub>(CO)<sub>10</sub>] rather than a mononuclear Mn(CO)<sub><i>x</i></sub>. (Atomic number of Mn = 25.)',
        steps: [
          'For one Mn with <i>n</i> terminal CO: EAN = 25 + 2<i>n</i>. To reach 36 we would need 2<i>n</i> = 11, i.e. <i>n</i> = 5.5 — impossible (CO ligands come in whole numbers).',
          'With <b>five</b> CO, EAN = 25 + 10 = 35, one electron short of krypton. Mn solves this by forming a <b>Mn–Mn bond</b> with a second Mn(CO)<sub>5</sub> unit: the shared bond contributes one electron to each manganese, giving EAN = 35 + 1 = 36.',
          'Hence the stable species is [Mn<sub>2</sub>(CO)<sub>10</sub>] — two square-pyramidal Mn(CO)<sub>5</sub> units joined by a metal–metal bond, with no bridging CO. The odd electron count of a Mn(CO)<sub>5</sub> fragment is exactly why dimerisation occurs.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw the structure of [Fe(CO)<sub>5</sub>] and state the hybridisation of iron.',
            a: 'Trigonal bipyramidal: Fe at the centre, three CO in a plane at 120° to one another, one CO above and one below that plane, each bound through carbon. Hybridisation dsp<sup>3</sup>.',
          },
          {
            q: '[NEET] What is the oxidation state of the metal in [Cr(CO)<sub>6</sub>] and in [Co<sub>2</sub>(CO)<sub>8</sub>]?',
            a: 'Both have the metal in the <b>0</b> oxidation state.',
          },
          {
            q: '[JEE Main] Calculate the EAN of nickel in [Ni(CO)<sub>4</sub>] (<i>Z</i> of Ni = 28) and comment.',
            a: 'EAN = 28 − 0 + 2(4) = 36 (krypton); stable 18-electron complex.',
          },
          {
            q: '[JEE Main] Distinguish between terminal and bridging carbonyl groups, and name a carbonyl that contains bridging CO.',
            a: 'Terminal CO binds one metal; bridging (μ-CO) spans two; [Co<sub>2</sub>(CO)<sub>8</sub>] contains bridging CO.',
          },
          {
            q: '[JEE Advanced] Explain, using both the synergic-bonding picture and the IR evidence, why the C–O stretching frequency in [Ni(CO)<sub>4</sub>] is lower than in free CO.',
            a: 'Metal → π*(CO) back-donation populates a C–O antibonding orbital, lowering the C–O bond order and hence the stretching frequency.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In metal carbonyls, the metal–carbon bond:',
        opts: [
          { label: 'is a pure σ bond', nudge: '<b>(a)</b> ignores the back-bond that actually gives the stability — the most common half-answer.' },
          { label: 'is a pure ionic bond', nudge: '<b>(b)</b> carbonyls are covalent, not ionic.' },
          { label: 'has both σ and π character (synergic)', nudge: null },
          { label: 'is a pure π bond', nudge: '<b>(d)</b> there is no σ-free bonding here.' },
        ],
        correct: 2,
        solution: 'Ligand → metal σ donation plus metal → ligand π back-donation, mutually reinforcing.',
      },
      {
        t: 'mcq',
        q: 'The oxidation state of nickel in [Ni(CO)<sub>4</sub>] is:',
        opts: [
          { label: '+2', nudge: '<b>(a)</b> is nickel’s common oxidation state in its salts; it does not apply here, because CO and the complex are both neutral.' },
          { label: '+4', nudge: '<b>(b)</b> comes from wrongly giving each CO a charge of −1.' },
          { label: '0', nudge: null },
          { label: '−1', nudge: '<b>(d)</b> a negative oxidation state would need an anionic complex; here both CO and the complex are neutral.' },
        ],
        correct: 2,
        solution: 'CO is a neutral ligand and the complex is neutral, so Ni is in the zero oxidation state.',
      },
      {
        t: 'mcq',
        q: 'As a result of synergic bonding, compared with free CO the carbonyl shows:',
        opts: [
          { label: 'shorter C–O bond, higher IR frequency', nudge: '<b>(a)</b> is exactly backwards.' },
          { label: 'longer C–O bond, lower IR frequency', nudge: null },
          { label: 'no change', nudge: '<b>(c)</b> ignores the back-donation: electron density entering the π* orbital must change the C–O bond.' },
          { label: 'shorter M–C and longer C–O are impossible together', nudge: '<b>(d)</b> the two changes are not only possible but are the signature of back-bonding.' },
        ],
        correct: 1,
        solution: 'Back-donation into the π* orbital lowers the C–O bond order → longer C–O, lower stretching frequency.',
      },
      {
        t: 'mcq',
        q: 'Which carbonyl contains a metal–metal bond but <b>no</b> bridging CO?',
        opts: [
          { label: '[Ni(CO)<sub>4</sub>]', nudge: '<b>(a)</b> is mononuclear with no M–M bond.' },
          { label: '[Cr(CO)<sub>6</sub>]', nudge: '<b>(b)</b> is mononuclear with no M–M bond.' },
          { label: '[Co<sub>2</sub>(CO)<sub>8</sub>]', nudge: '<b>(c)</b> [Co<sub>2</sub>(CO)<sub>8</sub>] has a Co–Co bond and bridging CO — the classic distractor.' },
          { label: '[Mn<sub>2</sub>(CO)<sub>10</sub>]', nudge: null },
        ],
        correct: 3,
        solution: '[Mn<sub>2</sub>(CO)<sub>10</sub>] is two Mn(CO)<sub>5</sub> units joined only by a Mn–Mn bond.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Describing only the σ donation.</b> The defining feature of carbonyl bonding is the back-bond; an answer without metal → π*(CO) donation and the word “synergic” loses most marks.',
          '<b>Assigning the metal a non-zero oxidation state.</b> CO is neutral, so in a neutral homoleptic carbonyl the metal is in the 0 oxidation state.',
          '<b>Counting one electron per CO in EAN.</b> Each CO donates a lone pair — two electrons (a bridging CO splits its two, one to each metal). And remember the +1 per metal–metal bond for polynuclear carbonyls.',
          '<b>Confusing terminal and bridging CO.</b> [Mn<sub>2</sub>(CO)<sub>10</sub>] has no bridging CO; [Co<sub>2</sub>(CO)<sub>8</sub>] does. Don’t assume every polynuclear carbonyl is bridged.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for a first-row carbonyl, the reasoning chain is oxidation state (usually 0) → count CO → EAN = <i>Z</i> − ON + 2(CO) → compare with 36 → if one short, expect a M–M bond ([V(CO)<sub>6</sub>], left at 35, is the stable exception). Heavier metals aim for their own noble gas: [Mo(CO)<sub>6</sub>] reaches 54 and [W(CO)<sub>6</sub>] reaches 86. That single chain answers oxidation-state, stability, and nuclearity questions at once. For bonding descriptions, always write the two arrows explicitly: “C→M (σ)” and “M→π*CO (π)”.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Metal carbonyl',
            note: 'transition metal + CO, metal usually in the <b>0</b> oxidation state; homoleptic = CO only.',
          },
          {
            f: 'Synergic bond',
            note: 'ligand → metal σ (CO lone pair into empty metal orbital) <b>+</b> metal → ligand π (metal d into empty π* of CO); the two reinforce each other → strong M–C bond.',
          },
          {
            f: 'Evidence',
            note: 'back-donation lowers C–O bond order → <b>longer C–O, lower IR stretching frequency</b>; M–C gains π character.',
          },
          {
            f: 'Structures',
            note: 'Ni(CO)<sub>4</sub> tetrahedral (sp<sup>3</sup>); Fe(CO)<sub>5</sub> trigonal bipyramidal (dsp<sup>3</sup>); Cr(CO)<sub>6</sub> octahedral (d<sup>2</sup>sp<sup>3</sup>); Mn<sub>2</sub>(CO)<sub>10</sub> Mn–Mn bond, no bridge; Co<sub>2</sub>(CO)<sub>8</sub> Co–Co bond <b>+</b> two bridging CO.',
          },
          {
            f: 'EAN = <i>Z</i> − ON + 2(CO per metal) (+1 per M–M bond)',
            note: 'stable when = 36 (Kr) / 18 electrons.',
          },
          {
            f: 'Mond process',
            note: 'impure Ni → Ni(CO)<sub>4</sub> (volatile) → decomposed → pure Ni (a purification application).',
          },
        ],
        aids: [
          '“Give and take, both ways” — σ forward, π back; that is synergic.',
          '“Back-bond weakens C–O” — antibonding gets partly filled, so C–O lengthens and its IR frequency drops.',
          '“Aim for 36” — first-row carbonyls chase the krypton count; one short → usually a metal–metal bond.',
        ],
      },
    ],
  },
];
