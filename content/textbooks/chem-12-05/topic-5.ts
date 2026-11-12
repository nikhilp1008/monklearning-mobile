import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 5, Topic 05, Stability of Coordination Compounds: pp. 225–230 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1
 * to 8. These pages hold no figure and no drawing. The book's "Sub-01", "Sub-03"
 * and "Sub-06" are "Topic 01", "Topic 03" and "Topic 06" here, and its "Section 3"
 * is named. The book's italic K with an italic f is K with an upright label f,
 * and its formulas inside italic text are upright (errata, cosmetic).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 225–230 ─────────────────────────
  {
    n: '05',
    title: 'Stability of Coordination Compounds',
    kalam: 'A very stable complex is one that, once formed, has very little tendency to fall apart back into its pieces.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Short but exam-friendly. CBSE Boards ask a 1–2 mark definition of stability constant or a comparison of stabilities. NEET tests “which complex is most stable” from <i>K</i> values or ligand type. JEE Main and Advanced use stepwise and overall formation constants quantitatively and probe the factors (charge, ligand strength, chelate effect) that govern stability.',
      },
      {
        t: 'p',
        html: 'When you drop a metal salt into a solution of ligands, the complex that forms is not a permanent, unbreakable object — it sits in a <b>dynamic equilibrium</b> with the free metal ion and free ligands. “Stability” is simply a measure of how far that equilibrium lies towards the complex. A very stable complex is one that, once formed, has very little tendency to fall apart back into its pieces. The equilibrium is genuinely two-way: ligands are constantly arriving and leaving, but at any instant the proportion sitting as the complex is fixed by the balance of energies — and it is that proportion, not the constant traffic, that “stability” describes.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> it is like the balance in a tug-of-war between “stay together as a complex” and “break apart into free ions.” The <b>stability constant</b> (also called the <b>formation constant</b>), written <i>K</i><sub>f</sub> or β, is the scoreboard for that tug-of-war: a large <i>K</i><sub>f</sub> means the complex side wins decisively, a small <i>K</i><sub>f</sub> means the complex barely holds together. Because these constants span enormous ranges, we usually quote log <i>K</i> (or log β) — so a complex with log <i>K</i> = 27 is overwhelmingly more stable than one with log <i>K</i> = 9.',
      },
      {
        t: 'p',
        html: 'There is one more subtlety worth fixing early. A complex with many ligands is not built in a single step — the ligands add <b>one at a time</b>, each addition having its own little equilibrium and its own <b>stepwise stability constant</b> (<i>K</i><sub>1</sub>, <i>K</i><sub>2</sub>, …). The overall stability constant β is then the product of all these steps. So “how stable is the final complex?” is really the cumulative result of a staircase of equilibria.',
      },
      {
        t: 'p',
        html: 'It also matters what kind of stability we mean. <b>Thermodynamic stability</b> asks how far the equilibrium favours the complex (that is what <i>K</i><sub>f</sub> measures). <b>Kinetic stability</b> asks how fast the complex exchanges its ligands — a complex can be thermodynamically stable yet swap ligands rapidly (<b>labile</b>), or sluggishly (<b>inert</b>). The two ideas are independent, and exam questions sometimes test the difference. A classic illustration: [Ni(CN)<sub>4</sub>]<sup>2−</sup> is both thermodynamically very stable and labile (its cyanides exchange with labelled cyanide in solution within minutes), whereas [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> has a large β yet is thermodynamically unstable in acid (its ammonia would far rather be NH<sub>4</sub><sup>+</sup>), but is kinetically <b>inert</b> — it survives for days even in acid, because replacing its ammonia is slow. “Stable” and “unreactive” are simply not the same statement, and keeping them apart prevents a great deal of confusion.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <i>K</i><sub>f</sub> describes a position of equilibrium in solution; it says nothing directly about how fast the complex forms or dissociates (that is kinetic, not thermodynamic).<br>• Tabulated <i>K</i><sub>f</sub> values assume a fixed temperature, solvent and ionic strength; comparisons are only fair under the same conditions.<br>• A large <i>K</i><sub>f</sub> does not guarantee the complex is “inert” — thermodynamic and kinetic stability are separate properties.',
      },

      { t: 'part', title: 'Key definitions and relations' },
      {
        t: 'p',
        html: '(The quantitative tools of this topic.)',
      },
      {
        t: 'formula',
        kicker: 'Overall (cumulative) stability constant',
        main: 'For M + <i>n</i>L ⇌ ML<sub><i>n</i></sub>:<br>β = [ML<sub><i>n</i></sub>]/([M][L]<sup><i>n</i></sup>)',
        legend: [
          'β = overall stability constant',
          'M = central metal ion',
          'L = ligand',
          '<i>n</i> = number of ligands',
          '[ ] = equilibrium concentration',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A larger β (or log β) means a more stable complex. The <b>instability (dissociation) constant</b> is its reciprocal, 1/β.',
      },
      {
        t: 'formula',
        kicker: 'Stepwise stability constants',
        main: 'M + L ⇌ ML (<i>K</i><sub>1</sub>)<br>ML + L ⇌ ML<sub>2</sub> (<i>K</i><sub>2</sub>)<br>⋮<br>ML<sub><i>n</i>−1</sub> + L ⇌ ML<sub><i>n</i></sub> (<i>K</i><sub><i>n</i></sub>)',
        legend: [
          '<i>K</i><sub>1</sub>, <i>K</i><sub>2</sub>, …, <i>K</i><sub><i>n</i></sub> = stepwise stability constants',
          '<i>K</i><sub>1</sub> = [ML]/([M][L]), and likewise for each step',
          'M = central metal ion',
          'L = ligand',
          '<i>n</i> = number of ligands',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'The overall constant is the product of the stepwise constants',
        main: 'β = <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub> × ⋯ × <i>K</i><sub><i>n</i></sub><br>⇒ log β = log <i>K</i><sub>1</sub> + log <i>K</i><sub>2</sub> + ⋯ + log <i>K</i><sub><i>n</i></sub>',
        legend: [
          'β = overall stability constant',
          '<i>K</i><sub>1</sub>, <i>K</i><sub>2</sub>, …, <i>K</i><sub><i>n</i></sub> = stepwise stability constants',
          '<i>n</i> = number of ligands',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Successive stepwise constants normally decrease (<i>K</i><sub>1</sub> > <i>K</i><sub>2</sub> > ⋯ > <i>K</i><sub><i>n</i></sub>) because each added ligand finds fewer vacant sites and faces more crowding.',
      },
      {
        t: 'p',
        html: 'A stability constant is an equilibrium constant, so it is tied directly to the free-energy change of complex formation:',
      },
      {
        t: 'formula',
        kicker: 'The thermodynamic meaning of β',
        main: 'Δ<i>G</i>° = −<i>RT</i> ln β',
        legend: [
          'Δ<i>G</i>° = standard free-energy change of complex formation',
          '<i>R</i> = gas constant',
          '<i>T</i> = absolute temperature',
          'β = overall stability constant',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'A large β means a large negative Δ<i>G</i>° — the complex is thermodynamically downhill from the free ions. This is why log β is such a convenient currency: it is directly proportional to −Δ<i>G</i>° (Δ<i>G</i>° = −2.303<i>RT</i> log β), and the additivity log β = ∑ log <i>K</i><sub><i>i</i></sub> simply mirrors the fact that the free energies of the successive steps add.',
      },
      {
        t: 'p',
        html: 'Each log <i>K</i> below is for the whole equilibrium in its row, so it is an overall constant (log β).',
      },
      {
        t: 'table',
        title: 'A comparison (Cu²⁺ complexes, increasing log K)',
        head: ['Equilibrium', 'log <i>K</i>'],
        rows: [
          ['Cu<sup>2+</sup> + en ⇌ [Cu(en)]<sup>2+</sup>', '10.7'],
          ['Cu<sup>2+</sup> + 4NH<sub>3</sub> ⇌ [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>', '13.0'],
          ['Cu<sup>2+</sup> + EDTA<sup>4−</sup> ⇌ [Cu(EDTA)]<sup>2−</sup>', '18.8'],
          ['Cu<sup>2+</sup> + 2 en ⇌ [Cu(en)<sub>2</sub>]<sup>2+</sup>', '20.0'],
        ],
      },
      {
        t: 'p',
        html: 'Read the order with care, because the rows hold different numbers of ligands. The fair test, the one “Factors affecting stability — logical framework” uses, is the same donor atoms in the same number: [Cu(en)<sub>2</sub>]<sup>2+</sup> (20.0) against [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> (13.0), four N donors each. Chelating ligands (en, EDTA) give far more stable complexes than an equivalent number of comparable monodentate ligands such as NH<sub>3</sub>. [Cu(en)]<sup>2+</sup> sits lower only because its one en brings two N donors, not four. [Cu(EDTA)]<sup>2−</sup> (18.8) stands far above [Cu(en)]<sup>2+</sup>, the other complex with one ligand; it sits below [Cu(en)<sub>2</sub>]<sup>2+</sup> because EDTA gives Cu<sup>2+</sup> only two N donors beside its four O donors, and because a constant for one ligand and a constant for two are not strictly on the same scale.',
      },

      { t: 'part', title: 'Factors affecting stability — logical framework' },
      {
        t: 'p',
        html: 'No derivation exists here; the skill is knowing what raises or lowers <i>K</i><sub>f</sub> and why.',
      },
      {
        t: 'p',
        html: '<b>Factor 1 — Charge density on the central metal ion.</b> The higher the charge and the smaller the radius of the metal ion (i.e. the greater the charge density), the more strongly it binds ligands and the more stable the complex. <b>Why:</b> stronger electrostatic attraction to the ligand lone pairs. This is why a +3 ion generally forms more stable complexes than the same metal as +2 — for instance, iron(III) complexes are typically more stable than the corresponding iron(II) complexes with the same ligand, because Fe<sup>3+</sup> is smaller and more highly charged than Fe<sup>2+</sup>. (Typically, not always: with π-accepting ligands such as 1,10-phenanthroline the iron(II) complex is the more stable.)',
      },
      {
        t: 'p',
        html: '<b>Factor 2 — Nature of the ligand (basicity / field strength).</b> The better the ligand donates its lone pair to that metal, the more stable the complex. For most first-row ions this goes with higher basicity and a higher place in the spectrochemical series (Topic 03), and that is what exams expect when they compare ligands such as NH<sub>3</sub> and H<sub>2</sub>O. <b>Why:</b> a stronger metal–ligand interaction lies further toward the complex side. This is exactly why NH<sub>3</sub> (higher in the series) binds Cu<sup>2+</sup> more strongly than H<sub>2</sub>O does. The series itself ranks crystal-field splitting, not stability, so it is only a guide: with Hg<sup>2+</sup>, I<sup>−</sup>, at the weak end of the series, gives a far more stable complex than Cl<sup>−</sup>. As a rough rule the stability of a complex parallels the Lewis basicity of its ligand toward that particular metal, so a ligand that is a strong base toward a given metal will also form a stable complex with it.',
      },
      {
        t: 'p',
        html: '<b>Factor 3 — The chelate effect (the big one, for the same metal and comparable donors).</b> A chelating (polydentate) ligand forms a much more stable complex than an equivalent number of comparable monodentate ligands — note that [Cu(en)<sub>2</sub>]<sup>2+</sup> (log <i>K</i> = 20.0) is markedly more stable than [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> (log <i>K</i> = 13.0), even though en and NH<sub>3</sub> donate through the same kind of nitrogen atom. <b>Why:</b> releasing several small molecules when one chelate clamps on increases the disorder (entropy) of the system, which is thermodynamically favourable — the <b>chelate effect</b> introduced in Topic 01, now made quantitative. In free-energy terms, when one bidentate en displaces two monodentate water (or ammonia) molecules, the number of free particles in solution rises, so Δ<i>S</i>° is positive; with Δ<i>G</i>° = Δ<i>H</i>° − <i>T</i>Δ<i>S</i>°, that positive entropy term drives Δ<i>G</i>° more negative and β larger. Other things being equal, the larger the number of chelate rings, the bigger the effect — which is why hexadentate EDTA forms extraordinarily stable 1:1 complexes: on Cu<sup>2+</sup>, one en (one ring) gives log <i>K</i> = 10.7 and one EDTA (five rings) gives 18.8. With no numbers given, exams expect EDTA above en above NH<sub>3</sub>. Given numbers, use them: [Cu(en)<sub>2</sub>]<sup>2+</sup> (20.0) sits above [Cu(EDTA)]<sup>2−</sup> (18.8), so ring count alone does not settle a comparison.',
      },
      {
        t: 'p',
        html: '<b>Factor 4 — The Irving–Williams series.</b> For high-spin octahedral M<sup>2+</sup> ions of the first transition series with a given ligand, stability rises in the order Mn<sup>2+</sup> < Fe<sup>2+</sup> < Co<sup>2+</sup> < Ni<sup>2+</sup> < Cu<sup>2+</sup> > Zn<sup>2+</sup>, peaking at copper. <b>Why:</b> up to Ni<sup>2+</sup>, the ionic radius falls and crystal-field stabilisation (Topic 03) rises. The further step up at Cu<sup>2+</sup> comes from the distortion of its d<sup>9</sup> octahedron (the Jahn–Teller effect, beyond NCERT), which strengthens its four in-plane bonds. Zn<sup>2+</sup>, d<sup>10</sup>, has no crystal-field stabilisation.',
      },
      {
        t: 'p',
        html: '<b>Factor 5 — The macrocyclic effect.</b> A ligand that is not merely polydentate but a closed ring of donor atoms (a macrocycle, such as a porphyrin) forms complexes even more stable than an open-chain chelate of the same denticity. <b>Why:</b> the ligand is already preorganised into a cavity that fits the metal, so even less entropy and energy are spent on wrapping it up. This is exactly the structural trick nature uses in haemoglobin and chlorophyll (Topic 06), where the metal sits locked inside a porphyrin or porphyrin-like ring.',
      },
      {
        t: 'p',
        html: '<b>Procedure — comparing two complexes.</b> Find which factor differs: (i) metal charge density, if the ligands are the same; (ii) the ligand’s donor strength (its place in the spectrochemical series is a guide), if the metal is the same; (iii) whether either ligand is chelating. For the same metal and comparable donors, the chelate wins: the chelate effect is usually the largest single gain. <b>Why:</b> these are the same factors that move the formation equilibrium. They are trends, not a fixed ranking, so if measured values of log <i>K</i> are given, use those.',
      },
      {
        t: 'p',
        html: '<b>Where stability earns its keep.</b> A high stability constant does more than win comparison questions — it changes what a metal ion does. Because so little free metal ion is left in a stable complex (as worked example 4 will show, often 10<sup>−10</sup> M or less), the ion may no longer give its usual reactions: it may not precipitate (that depends on how small the salt’s solubility product is), and it may fail its qualitative-analysis test. This is the basis of <b>masking</b> in analytical chemistry — adding a ligand that locks up an interfering ion as a stable complex so it cannot interfere — and it is also why complexation is used to keep metal ions in solution in electroplating and extraction (Topic 06). Stability, in other words, is the quantitative lever behind most of the chapter’s applications.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Define the stability constant of a complex. For [Ag(CN)<sub>2</sub>]<sup>−</sup> with log β = 21, what does this value indicate?',
        steps: [
          'The <b>stability (formation) constant</b> β is the equilibrium constant for the formation of a complex from its central metal ion and ligands: for Ag<sup>+</sup> + 2CN<sup>−</sup> ⇌ [Ag(CN)<sub>2</sub>]<sup>−</sup>,<br>β = [Ag(CN)<sub>2</sub><sup>−</sup>]/([Ag<sup>+</sup>][CN<sup>−</sup>]<sup>2</sup>).',
          'log β = 21 means β = 10<sup>21</sup>, an enormous number — the equilibrium lies overwhelmingly toward the complex, so [Ag(CN)<sub>2</sub>]<sup>−</sup> is extremely stable and there is essentially no free Ag<sup>+</sup> left in solution. Equivalently, its <b>instability (dissociation) constant</b> is 1/β = 10<sup>−21</sup> — the complex dissociates only to a vanishing extent. This is precisely why silver can be held in solution as this complex during electroplating and extraction (Topic 06): the free-silver concentration is throttled down to a trickle.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Among [Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup>, [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> and [Cu(en)<sub>2</sub>]<sup>2+</sup>, which is the most stable?',
        steps: [
          '<b>Speed logic:</b> rank by ligand. Going H<sub>2</sub>O → NH<sub>3</sub> moves up the spectrochemical series (more stable); going NH<sub>3</sub> → en adds the <b>chelate effect</b> (more stable still).',
          'This is a ranking in words. The water complex has no number in the table above, because Cu<sup>2+</sup> in water is already aquated and its “formation” has no meaningful stability constant: NH<sub>3</sub> or en has to displace the water. (Cu<sup>2+</sup> in water is more fully written [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, with two longer bonds; [Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup> is the form exam questions use.)',
          '<b>Trap to avoid:</b> thinking “four NH<sub>3</sub> beats two en because four is more than two.” Denticity, not ligand count, is what matters: two bidentate en ligands clamp the metal in two chelate rings and the entropy gain makes the complex more stable than four separate ammonias.',
        ],
        ans: '[Cu(en)<sub>2</sub>]<sup>2+</sup> — the chelating ligand wins.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (stepwise → overall)',
        q: 'A metal M<sup>2+</sup> binds four ligands L with stepwise constants log <i>K</i><sub>1</sub> = 4.0, log <i>K</i><sub>2</sub> = 3.2, log <i>K</i><sub>3</sub> = 2.5, log <i>K</i><sub>4</sub> = 1.8. Find the overall log β for [ML<sub>4</sub>]<sup>2+</sup>.',
        steps: [
          'log β = log <i>K</i><sub>1</sub> + log <i>K</i><sub>2</sub> + log <i>K</i><sub>3</sub> + log <i>K</i><sub>4</sub> = 4.0 + 3.2 + 2.5 + 1.8.',
          'Note the stepwise values steadily decrease — each successive ligand binds a little less favourably than the last, as expected. The reasons are partly statistical (as sites fill, there are fewer vacant positions for the next ligand to attack and more occupied ones for it to leave from) and partly steric and electronic (each added ligand makes the centre slightly less inviting to the next). A reversal of this trend — a step where <i>K</i> suddenly rises — usually signals a structural change, such as a switch from octahedral to tetrahedral geometry partway through the series.',
        ],
        ans: 'log β = 11.5, so β = 10<sup>11.5</sup> ≈ 3.2 × 10<sup>11</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (free-ion concentration from β)',
        q: '[Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> has β = 1.0 × 10<sup>9</sup>. In a solution where [[Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>] = 0.10 M and free [NH<sub>3</sub>] = 1.0 M at equilibrium, estimate the concentration of free Zn<sup>2+</sup>.',
        steps: [
          'From β = [Zn(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>]/([Zn<sup>2+</sup>][NH<sub>3</sub>]<sup>4</sup>), rearrange:<br>[Zn<sup>2+</sup>] = [Zn(NH<sub>3</sub>)<sub>4</sub><sup>2+</sup>]/(β[NH<sub>3</sub>]<sup>4</sup>) = 0.10/((1.0 × 10<sup>9</sup>)(1.0)<sup>4</sup>).',
          'The free zinc-ion concentration is vanishingly small (10<sup>−10</sup> M) — a vivid illustration of what a large stability constant means: almost all the zinc is locked up in the complex. (This is exactly why complexation can stop a metal ion from giving its usual precipitation or qualitative-analysis tests.)',
        ],
        ans: '[Zn<sup>2+</sup>] = 1.0 × 10<sup>−10</sup> M.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is meant by the stepwise and overall stability constants of a complex? How are they related?',
            a: 'Stepwise = constant for each one-ligand-at-a-time addition; overall β = <i>K</i><sub>1</sub><i>K</i><sub>2</sub>⋯<i>K</i><sub><i>n</i></sub> (so log β = ∑ log <i>K</i><sub><i>i</i></sub>).',
          },
          {
            q: '[NEET] Arrange in increasing order of stability: [Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup>, [Cu(en)<sub>2</sub>]<sup>2+</sup>, [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>.',
            a: '[Cu(H<sub>2</sub>O)<sub>4</sub>]<sup>2+</sup> < [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> < [Cu(en)<sub>2</sub>]<sup>2+</sup>.',
          },
          {
            q: '[JEE Main] The stepwise constants for [ML<sub>3</sub>] are log <i>K</i><sub>1</sub> = 5.1, log <i>K</i><sub>2</sub> = 4.0, log <i>K</i><sub>3</sub> = 3.0. Calculate log β and β.',
            a: 'log β = 12.1, β ≈ 1.3 × 10<sup>12</sup>.',
          },
          {
            q: '[JEE Main] Explain, with the chelate effect, why [Ni(en)<sub>3</sub>]<sup>2+</sup> is more stable than [Ni(NH<sub>3</sub>)<sub>6</sub>]<sup>2+</sup>.',
            a: 'The ligand en is bidentate; three en form three chelate rings, and the entropy gain (chelate effect) makes the complex more stable than six separate NH<sub>3</sub>.',
          },
          {
            q: '[JEE Advanced] For [Ag(CN)<sub>2</sub>]<sup>−</sup>, β = 1.0 × 10<sup>21</sup>. If [[Ag(CN)<sub>2</sub>]<sup>−</sup>] = 0.05 M and free [CN<sup>−</sup>] = 0.10 M, estimate [Ag<sup>+</sup>].',
            a: '[Ag<sup>+</sup>] = 0.05/((1.0 × 10<sup>21</sup>)(0.10)<sup>2</sup>) = 5.0 × 10<sup>−21</sup> M (5 × 10<sup>−21</sup> M to one significant figure).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A large value of the stability constant of a complex indicates that:',
        opts: [
          { label: 'the complex dissociates readily', nudge: '<b>(a)</b> is the opposite.' },
          { label: 'the complex is highly stable and barely dissociates', nudge: null },
          { label: 'the complex forms slowly', nudge: '<b>(c)</b> confuses thermodynamic stability with kinetics — <i>K</i><sub>f</sub> says nothing about rate.' },
          { label: 'the metal ion is in a low oxidation state', nudge: '<b>(d)</b> is unrelated.' },
        ],
        correct: 1,
        solution: 'A large <i>K</i><sub>f</sub> means the equilibrium lies far toward the complex.',
      },
      {
        t: 'mcq',
        q: 'Which is the most stable complex?',
        opts: [
          { label: '[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>', nudge: '<b>(a)</b> uses a monodentate ligand. Picking (a) ignores the chelate advantage of oxalate.' },
          { label: '[FeCl<sub>6</sub>]<sup>3−</sup>', nudge: '<b>(b)</b> uses a monodentate ligand; with weak-field Cl<sup>−</sup> it is the least stable.' },
          { label: '[Fe(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup>', nudge: null },
          { label: '[Fe(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup>', nudge: '<b>(d)</b> uses a monodentate ligand. Picking (d) ignores the chelate advantage of oxalate. (In water, ammonia in fact precipitates Fe(OH)<sub>3</sub> from Fe<sup>3+</sup>.)' },
        ],
        correct: 2,
        solution: 'Oxalate is a chelating (bidentate) ligand, so the chelate effect makes the trioxalato complex the most stable.',
      },
      {
        t: 'mcq',
        q: 'The overall stability constant β of [ML<sub>2</sub>] is related to its stepwise constants by:',
        opts: [
          { label: 'β = <i>K</i><sub>1</sub> + <i>K</i><sub>2</sub>', nudge: '<b>(a)</b> wrongly adds the constants (true only for the logs).' },
          { label: 'β = <i>K</i><sub>1</sub> − <i>K</i><sub>2</sub>', nudge: '<b>(b)</b> has no basis.' },
          { label: 'β = <i>K</i><sub>1</sub> × <i>K</i><sub>2</sub>', nudge: null },
          { label: 'β = <i>K</i><sub>1</sub>/<i>K</i><sub>2</sub>', nudge: '<b>(d)</b> has no basis.' },
        ],
        correct: 2,
        solution: 'Overall β is the product of stepwise constants (so logarithms add).',
      },
      {
        t: 'mcq',
        q: 'Which statement about stability is correct?',
        opts: [
          { label: 'Thermodynamic and kinetic stability are the same thing', nudge: '<b>(a)</b> conflates the two.' },
          { label: 'A thermodynamically stable complex must be kinetically inert', nudge: '<b>(b)</b> conflates the two.' },
          { label: 'A complex can be thermodynamically stable yet kinetically labile', nudge: null },
          { label: 'Stability constant measures the rate of complex formation', nudge: '<b>(d)</b> misreads <i>K</i><sub>f</sub> as a rate constant.' },
        ],
        correct: 2,
        solution: '“How far” (thermodynamic, <i>K</i><sub>f</sub>) and “how fast” (kinetic, labile/inert) are independent properties.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Adding stepwise constants instead of multiplying.</b> Overall β = <i>K</i><sub>1</sub><i>K</i><sub>2</sub>⋯<i>K</i><sub><i>n</i></sub>; it is the logarithms that add. Mixing these up gives wildly wrong magnitudes.',
          '<b>Ranking stability by ligand count.</b> Two chelating en ligands beat four monodentate NH<sub>3</sub> — with the same four N donors, the chelate effect, not the head-count, decides stability.',
          '<b>Confusing thermodynamic with kinetic stability.</b> <i>K</i><sub>f</sub> measures how far the equilibrium lies, not how fast ligands exchange. “Stable” (large <i>K</i><sub>f</sub>) is not the same as “inert” (slow exchange).',
          '<b>Mixing up stability and instability constants.</b> The instability (dissociation) constant is 1/β; a large stability constant means a small instability constant.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> for “which is most stable?” with no numbers given, look for a chelate first: among complexes of the same metal, the chelate is the answer exams expect. If there is none, compare metal charge density (same ligand) or ligand donor strength (same metal; spectrochemical series, Topic 03). Given numbers, use the numbers, because they can overturn the rule of thumb: [Fe(CN)<sub>6</sub>]<sup>3−</sup>, log β about 42, is far more stable than the chelate [Fe(C<sub>2</sub>O<sub>4</sub>)<sub>3</sub>]<sup>3−</sup>, log β about 20. For numbers, work in logarithms: add the log <i>K</i><sub><i>i</i></sub> to get log β, and only convert to β at the very end.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Stability (formation) constant',
            note: 'β = [ML<sub><i>n</i></sub>]/([M][L]<sup><i>n</i></sup>); larger β (or log β) → more stable. Instability constant = 1/β.',
          },
          {
            f: 'Stepwise → overall',
            note: 'β = <i>K</i><sub>1</sub><i>K</i><sub>2</sub>⋯<i>K</i><sub><i>n</i></sub>, so log β = ∑ log <i>K</i><sub><i>i</i></sub>; successive <i>K</i><sub><i>i</i></sub> decrease.',
          },
          {
            f: 'Factors raising stability',
            note: 'higher metal charge density; a better donor to that metal (usually more basic, stronger-field; the series is a guide); <b>chelation</b> (entropy-driven chelate effect — the largest gain for the same metal and comparable donors).',
          },
          {
            f: 'Irving–Williams (M<sup>2+</sup>, first row)',
            note: 'Mn < Fe < Co < Ni < Cu > Zn.',
          },
          {
            f: 'Two stabilities',
            note: 'thermodynamic (how far, <i>K</i><sub>f</sub>) vs kinetic (how fast — labile/inert); they are independent.',
          },
        ],
        aids: [
          '“Logs add, constants multiply” — log β = ∑ log <i>K</i><sub><i>i</i></sub>.',
          '“Claws beat crowds” — a chelate (en, ox, EDTA) outranks an equivalent number of comparable monodentate ligands.',
          '“Far is not fast” — large <i>K</i><sub>f</sub> (thermodynamic) ≠ slow exchange (kinetic); a complex can be stable yet labile.',
        ],
      },
    ],
  },
];
