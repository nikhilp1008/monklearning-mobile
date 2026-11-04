import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 03, The f-Block — Lanthanoids and Actinoids: pp. 165–172 of the
 * Class 12 Chemistry Master Reference, word for word, split at its Sections 1 to 8.
 * Figure 4.3 (caption first on p. 166, drawn p. 167) is placed where the caption
 * first stands, after the "Lanthanoid contraction" paragraph; it is redrawn in
 * lib/diagrams/chemistry-12-04.ts. The book's "the trends subtopic" and "Sub-01" are
 * "Topic 01" here, its "Section 2" is the part's name and its "subtopic" is "topic".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 165–172 ─────────────────────────
  {
    n: '03',
    title: 'The f-Block — Lanthanoids and Actinoids',
    kalam: 'The actinoids are the f-block’s wilder cousins.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A dependable 2–4 marks. CBSE Boards almost always ask “what is lanthanoid contraction and its consequences” or a comparison of lanthanoids with actinoids. NEET favours colour/configuration/oxidation-state MCQs. JEE Main/Advanced probe the cause of the contraction, the stability of off-+3 states (Ce<sup>4+</sup>, Eu<sup>2+</sup>), and why actinoids show a far wider oxidation-state range.',
      },
      {
        t: 'p',
        html: 'Open any periodic table and you will see two lonely rows floating below the main body, as if someone tore them off and pinned them at the bottom. Those are the <b>f-block</b> — the lanthanoids and the actinoids. They are not really exiles: they genuinely belong in <b>group 3, periods 6 and 7</b>. But inserting all fourteen of each in-line would stretch the table absurdly wide (like trying to fit an entire wedding baraat through a single doorway), so we pull them out as a footnote panel. This is purely a matter of drawing convenience; chemically they sit right after lanthanum and actinium.',
      },
      {
        t: 'p',
        html: 'What defines them is where the newest electron goes. In the d-block the last electron enters the (<i>n</i> − 1)d orbitals — the penultimate shell. In the f-block it goes one level deeper, into the <b>(<i>n</i> − 2)f orbitals</b>: 4f for the lanthanoids, 5f for the actinoids. Picture a bank where the d-block keeps its cash in a back drawer but the f-block locks it in an inner vault. Electrons buried that deep barely participate in chemistry — they are shielded from the outside world by the 5s, 5p (and 6s) electrons sitting above them. This single fact explains the f-block’s defining personality: <b>all fourteen lanthanoids behave almost identically</b>, overwhelmingly showing the <b>+3 oxidation state</b>, and they are notoriously difficult to separate from one another. In fact they are so chemically alike that for most industrial purposes they are not separated at all but used as a ready-made mixture — which is precisely why a blended alloy such as mischmetall is far cheaper and more common than any single pure rare-earth metal, and why their commercial extraction historically demanded tedious fractional methods.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine those fourteen 4f electrons boarding the inner berths of a train one at a time as we move from cerium to lutetium. Each new passenger is a poor bodyguard — an f-electron shields the others from the nucleus very ineffectively. So with every boarding, the conductor (the rising nuclear charge) tightens his grip and pulls the whole carriage inward a little more. Each tug is tiny, but across fourteen elements it accumulates into a steady shrinkage of atomic and ionic size — the <b>lanthanoid contraction</b>. The pay-off is dramatic and shows up one row below: the contraction almost exactly cancels the size increase expected for the third transition series, leaving pairs like <b>zirconium and hafnium with virtually identical radii</b> (160 pm vs 159 pm) — which is why they occur together in nature and are a nightmare to separate. (We met this consequence from the d-block side in Topic 01; here we see its origin.)',
      },
      {
        t: 'p',
        html: 'The actinoids are the f-block’s wilder cousins. Their 5f orbitals are <b>less deeply buried</b> than the lanthanoids’ 4f, so 5f electrons can take part in bonding. The result: a <b>much wider range of oxidation states</b> (Th through Np climb to +4, +5, +6, +7), genuine complex chemistry — and the complication that all actinoids are <b>radioactive</b>, several existing only as man-made traces. Their study therefore leans heavily on the handful of naturally abundant members, chiefly thorium and uranium, the only ones found in workable quantities in nature.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>Colour needs a partly filled f-subshell.</b> f–f transitions colour most Ln<sup>3+</sup> ions, but the f<sup>0</sup>, f<sup>7</sup> and f<sup>14</sup> ions (La<sup>3+</sup>, Gd<sup>3+</sup>, Lu<sup>3+</sup>) are colourless.<br>• <b>“+3 only” is a strong rule, not an absolute one.</b> Off-+3 states appear most readily when they let an ion reach the extra-stable f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> — e.g. Ce<sup>4+</sup> (f<sup>0</sup>) and Eu<sup>2+</sup> (f<sup>7</sup>) — though not only then (Sm<sup>2+</sup>; Pr<sup>4+</sup> and Nd<sup>4+</sup> in oxides).<br>• <b>The spin-only formula fails for lanthanoids</b> (unlike the d-block) — see Key definitions and properties.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'General electronic configuration (f-block)',
        main: '(<i>n</i> − 2)f<sup>1–14</sup> (<i>n</i> − 1)d<sup>0–1</sup> <i>n</i>s<sup>2</sup>',
        legend: [
          '<i>n</i> = number of the outermost shell',
          'f, d, s = subshells, with each superscript the number of electrons in it',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• <b>Lanthanoids (4f series):</b> Ce (<i>Z</i> = 58) → Lu (<i>Z</i> = 71).<br>• <b>Actinoids (5f series):</b> Th (<i>Z</i> = 90) → Lr (<i>Z</i> = 103).<br>• <b>La</b> (<i>Z</i> = 57) <b>and Ac</b> (<i>Z</i> = 89) <b>are formally d-block</b> elements but are studied with their respective series owing to close resemblance.',
      },
      {
        t: 'p',
        html: '<b>Tripositive ion rule.</b> The most stable oxidation state, +3, gives the clean series Ln<sup>3+</sup> = 4f<sup><i>n</i></sup> (<i>n</i> = 1 to 14 from Ce<sup>3+</sup> to Lu<sup>3+</sup>; La, so close in behaviour that the symbol Ln usually includes it, gives La<sup>3+</sup> = 4f<sup>0</sup>). Anomalies in the neutral-atom configurations trace to the stability of empty (f<sup>0</sup>), half-filled (f<sup>7</sup>) and fully-filled (f<sup>14</sup>) subshells — e.g. Gd = [Xe]4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup>.',
      },
      {
        t: 'p',
        html: '<b>Lanthanoid contraction.</b> The steady decrease in atomic and (especially regular) Ln<sup>3+</sup> ionic radii from La to Lu, caused by the <b>imperfect shielding of one 4f electron by another</b> as nuclear charge rises. (The decrease is regular for the Ln<sup>3+</sup> ions but only roughly so for the neutral atoms.) Historically the lanthanoids were misleadingly named the rare earths, although most are not actually rare; promethium is the lone genuinely scarce member, existing only as an artificial radioactive element.',
      },
      { t: 'fig', id: 'c12-04-fig-4.3' },
      {
        t: 'p',
        html: '<b>Magnetism — a key contrast with the d-block.</b> For d-block ions the spin-only formula μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM works because the orbital contribution is “quenched.” For <b>lanthanoid Ln<sup>3+</sup> ions it does not</b>: the 4f orbitals are so well shielded that orbital angular momentum is not quenched, and spin–orbit coupling matters. Observed moments instead follow:',
      },
      {
        t: 'formula',
        kicker: 'Landé (total angular momentum) expression',
        main: 'μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)) BM',
        legend: [
          'μ = observed magnetic moment of a lanthanoid ion',
          '<i>g</i> = Landé factor',
          '<i>J</i> = total angular momentum quantum number',
          'BM = Bohr magneton',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'La<sup>3+</sup> (4f<sup>0</sup>) and Lu<sup>3+</sup> (4f<sup>14</sup>) are diamagnetic; all other Ln<sup>3+</sup> are paramagnetic.',
      },
      {
        t: 'p',
        html: '<b>Other core properties.</b><br>• <b>Colour:</b> the colours of Ln<sup>3+</sup> ions arise from <b>f–f transitions</b> (an electron promoted between the split 4f levels by absorbing visible light). Because the 4f orbitals are shielded, these absorption bands are characteristically <b>sharp and narrow</b>, unlike the broad d–d bands of transition-metal ions. Ions with the same number of unpaired 4f electrons tend to share a colour; the f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> ions are colourless (as are Ce<sup>3+</sup> (4f<sup>1</sup>) and Yb<sup>3+</sup> (4f<sup>13</sup>), absorbing outside the visible region).<br>• <b>Standard potential:</b> <i>E</i>°(Ln<sup>3+</sup>/Ln) ≈ −2.2 to −2.4 V (Eu, about −2.0 V, is the exception) — strongly negative, so lanthanoids are highly electropositive, reactive metals and <b>strong reducing agents</b>; the value becomes slightly less negative from La to Lu.<br>• <b>Physical:</b> soft, malleable, silvery metals; good conductors of heat and electricity; densities generally rise across the series (~6.8–9.7 g cm<sup>−3</sup>), with Eu and Yb breaking the rise.',
      },
      {
        t: 'p',
        html: '<b>Chemical reactivity of the lanthanoid metals.</b> The earliest members are about as reactive as calcium, the behaviour tempering to aluminium-like as the series proceeds. The characteristic reactions are:<br>• with <b>water and dilute acids</b> → liberate H<sub>2</sub>, forming Ln<sup>3+</sup>;<br>• on heating in <b>oxygen</b> → sesquioxides Ln<sub>2</sub>O<sub>3</sub>; the corresponding hydroxides Ln(OH)<sub>3</sub> are definite, strongly basic compounds (basic like the alkaline-earth hydroxides, not merely hydrated oxides);<br>• with <b>hydrogen</b> (gentle heating) → hydrides; with <b>carbon</b> → carbides Ln<sub>3</sub>C, Ln<sub>2</sub>C<sub>3</sub> and LnC<sub>2</sub>;<br>• with <b>nitrogen</b> → nitrides; with <b>sulphur</b> → Ln<sub>2</sub>S<sub>3</sub>; with <b>halogens</b> → trihalides LnX<sub>3</sub>.',
      },
      {
        t: 'p',
        html: 'The metals tarnish readily in moist air, which is why they are almost always handled and deployed as alloys rather than in the pure state.',
      },
      {
        t: 'p',
        html: '<b>Uses.</b> Lanthanoids are used overwhelmingly as alloys and mixed compounds: <b>mischmetall</b> (~95% lanthanoid metal + ~5% iron, with traces of S, C, Ca and Al) is blended into Mg-based alloys for <b>lighter flints and tracer-bullet/shell</b> material; <b>mixed lanthanoid oxides</b> catalyse <b>petroleum cracking</b>; individual oxides have their own uses: CeO<sub>2</sub> polishes optical glass, La<sub>2</sub>O<sub>3</sub> goes into high-refractive-index optical glass, and ThO<sub>2</sub> with a little CeO<sub>2</sub> forms incandescent gas mantles; <b>ceric sulphate</b> is a standard volumetric oxidant; and several lanthanoid oxides act as <b>phosphors</b> in television and X-ray screens.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Writing f-block configurations and predicting anomalies',
        steps: [
          'Start from the noble-gas core ([Xe] for lanthanoids, [Rn] for actinoids) and the baseline <i>n</i>s<sup>2</sup>.',
          'Fill the inner f orbitals one at a time; expect (<i>n</i> − 2)f<sup><i>x</i></sup> (<i>n</i> − 1)d<sup>0</sup> <i>n</i>s<sup>2</sup>, but check the f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> “stability magnets.”',
          '<b>Worked logic:</b> La gives one d electron ([Xe]5d<sup>1</sup>6s<sup>2</sup>); at Gd the half-filled f<sup>7</sup> is so stable that the extra electron sits in 5d rather than pairing in 4f: [Xe]4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup>. The same stability drives Ce<sup>4+</sup> and Eu<sup>2+</sup> (below).',
          'For an ion, remove 6s first, then 5d, then 4f — giving the clean Ln<sup>3+</sup> = 4f<sup><i>n</i></sup> result.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — The lanthanoid-contraction reasoning chain',
        steps: [
          'Each added 4f electron shields the nucleus <b>poorly</b> (diffuse, inner f orbitals).',
          'Effective nuclear charge therefore creeps up across the series → atomic and Ln<sup>3+</sup> radii decrease steadily.',
          '<b>Consequences to recite:</b><br>(i) <b>Third ≈ second transition series.</b> The accumulated contraction cancels the expected size jump, so Zr ≈ Hf, Nb ≈ Ta, Mo ≈ W — explaining their paired occurrence and difficult separation (this links back to the d-block radii trend of Topic 01).<br>(ii) <b>Hydroxide basicity falls.</b> As Ln<sup>3+</sup> shrinks, the M–OH bond gains covalent character, so basic strength decreases: La(OH)<sub>3</sub> is the most basic, Lu(OH)<sub>3</sub> the least.<br>(iii) <b>Density rises</b> across the series (shrinking radius with rising mass), Eu and Yb apart.<br>(iv) <b>Irregular third ionisation enthalpies.</b> The third ionisation enthalpies of <b>La, Gd and Lu are abnormally low</b>, because removing the third electron from these particular elements leaves behind the specially stable empty (f<sup>0</sup>), half-filled (f<sup>7</sup>) and fully-filled (f<sup>14</sup>) cores respectively. The same stability magnets that fix the colours, magnetic moments and off-+3 oxidation states therefore also sculpt the ionisation-enthalpy pattern — a single principle threading the whole topic.',
        ],
      },
      {
        t: 'p',
        html: 'To predict these, ask: “Can losing/gaining one electron from the +3 ion reach f<sup>0</sup>, f<sup>7</sup> or f<sup>14</sup>?”',
      },
      {
        t: 'proc',
        title: 'Procedure C — Predicting off-+3 oxidation states',
        steps: [
          '<b>+4 (oxidising, reverts to +3):</b> Ce<sup>4+</sup> reaches f<sup>0</sup> (<i>E</i>°(Ce<sup>4+</sup>/Ce<sup>3+</sup>) = +1.74 V, a strong oxidant); Tb<sup>4+</sup> reaches f<sup>7</sup>. (Pr, Nd, Dy show +4 only in oxides.)',
          '<b>+2 (reducing, reverts to +3):</b> Eu<sup>2+</sup> reaches f<sup>7</sup>; Yb<sup>2+</sup> reaches f<sup>14</sup>; Sm behaves like Eu.',
          '<b>Rule of thumb:</b> states above +3 are oxidising, states below +3 are reducing — both relax back toward the dominant +3.',
        ],
      },
      {
        t: 'table',
        title: 'Procedure D — Comparing lanthanoids with actinoids (the standard CBSE 3-marker)',
        head: ['Feature', 'Lanthanoids (4f)', 'Actinoids (5f)'],
        rows: [
          ['Inner orbital', '4f, deeply buried', '5f, less buried → can bond'],
          ['Oxidation states', 'mainly +3 (few +2, +4)', 'wide range, up to +7 (Th–Np)'],
          ['Contraction', 'regular, smaller per step', 'greater per step (poorer 5f shielding)'],
          ['Complexes', 'weaker (no 4f bonding)', 'stronger (use 5f + 6d)'],
          ['Radioactivity', 'only Pm', 'all are radioactive'],
          ['Magnetism', 'follows <i>g</i>√(<i>J</i>(<i>J</i> + 1))', 'more complex'],
        ],
      },
      {
        t: 'p',
        html: 'Read the table as one story: both series are inner-transition metals dominated by the +3 state and shaped by an f-orbital contraction, yet the depth of the f orbitals sets them apart. The lanthanoids’ 4f orbitals are chemically sealed off, so the series is almost monotonous — fourteen near-twins distinguished only by subtle size changes. The actinoids’ 5f orbitals lie shallow enough to enter bonding, which buys them variable oxidation states and stronger complexes, but also a steeper contraction (because 5f shields even more poorly than 4f). Their radioactivity is a separate, nuclear matter, unrelated to the f electrons. In short, how deeply the f electrons are buried is the master variable behind the chemical rows of this comparison.',
      },
      {
        t: 'p',
        html: '<b>Actinoids in practice.</b> Because every actinoid is radioactive and most members beyond uranium are man-made (<b>transuranic</b>), the later ones obtainable only in nanogram amounts, their chemistry is genuinely difficult to study — and a clean lanthanoid-like resemblance does not emerge until the second half of the series. The few abundant members carry the applications: <b>thorium</b> is bred into fissile <sup>233</sup>U for reactors and its salts have medicinal uses; <sup>235</sup>U is the classic nuclear fuel (and uranium salts impart a green colour to glass); <sup>239</sup>Pu, obtained from <sup>238</sup>U, is itself a nuclear fuel.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Europium (<i>Z</i> = 63) is a lanthanoid. Write the electronic configuration of the neutral atom, and predict — with reason — any oxidation state it commonly shows besides +3.',
        steps: [
          'Configuration: Eu = [Xe]4f<sup>7</sup>6s<sup>2</sup> (the 4f<sup>7</sup> half-filled subshell is reached early and is extra-stable).',
          'Removing the two 6s electrons gives Eu<sup>2+</sup> = [Xe]4f<sup>7</sup> — a <b>stable half-filled</b> f<sup>7</sup> ion.',
          'Therefore Eu commonly shows +2 in addition to the characteristic +3. The f<sup>7</sup> explains why Eu<sup>2+</sup> forms; but +3 is still the more stable state in water, so Eu<sup>2+</sup> acts as a strong <b>reducing agent</b>, changing to Eu<sup>3+</sup>.',
        ],
        ans: 'Eu = [Xe]4f<sup>7</sup>6s<sup>2</sup>; shows +2 (stable f<sup>7</sup>), a reducing state.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following tripositive lanthanoid ions is <b>coloured</b> in aqueous solution?<br>La<sup>3+</sup>, Gd<sup>3+</sup>, Nd<sup>3+</sup>, Lu<sup>3+</sup>',
        steps: [
          '<b>The fast way.</b> Colour needs a partly filled 4f subshell. Tag each by its f-count and instantly bin the “magic” f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> as colourless:<br>• La<sup>3+</sup>: 4f<sup>0</sup> → colourless.<br>• Gd<sup>3+</sup>: 4f<sup>7</sup> → colourless.<br>• Lu<sup>3+</sup>: 4f<sup>14</sup> → colourless.<br>• Nd<sup>3+</sup>: 4f<sup>3</sup> → <b>partly filled</b> → <b>coloured</b> ✓ (lilac).',
          '<b>Speed rule:</b> in any lanthanoid colour MCQ, eliminate every f<sup>0</sup>, f<sup>7</sup> and f<sup>14</sup> ion (La<sup>3+</sup>, Gd<sup>3+</sup>, Lu<sup>3+</sup>) on sight, and remember that Ce<sup>3+</sup> and Yb<sup>3+</sup> are colourless too; an in-between ion other than these survives.',
        ],
        ans: 'Nd<sup>3+</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (multi-concept: configuration + magnetism)',
        q: 'Of the ions La<sup>3+</sup>, Gd<sup>3+</sup> and Lu<sup>3+</sup>, identify which are diamagnetic and which is the most strongly paramagnetic. Explain why spin-only values fail for most lanthanoid ions and comment on Gd<sup>3+</sup>.',
        steps: [
          'La<sup>3+</sup> = 4f<sup>0</sup> → no unpaired electrons → <b>diamagnetic</b>.',
          'Lu<sup>3+</sup> = 4f<sup>14</sup> → fully filled → <b>diamagnetic</b>.',
          'Gd<sup>3+</sup> = 4f<sup>7</sup> → seven unpaired electrons → <b>most strongly paramagnetic</b> of the three.',
          '<b>Why spin-only fails:</b> for lanthanoid Ln<sup>3+</sup> ions the deeply shielded 4f orbitals retain unquenched orbital angular momentum, so the moment must include the orbital term via μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)). (Gd<sup>3+</sup> is a special case: its half-filled f<sup>7</sup> has <i>L</i> = 0, and <i>L</i> = 0 makes spin-only and the <i>J</i>-formula give the same value, near 7.9 BM — but for most other Ln<sup>3+</sup> the two differ markedly.)',
        ],
        ans: 'La<sup>3+</sup> and Lu<sup>3+</sup> diamagnetic; Gd<sup>3+</sup> most paramagnetic; orbital contribution makes spin-only unreliable for lanthanoids.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Explain why the actinoids exhibit a far wider range of oxidation states than the lanthanoids, and why the maximum oxidation state rises across the early actinoids (Th → Np) but then falls for the later members, which revert to +3.',
        steps: [
          '<b>Wider range — the energetics.</b> In the lanthanoids the 4f orbitals lie deep below the valence level, energetically isolated, so only the three outermost electrons are chemically accessible → almost exclusively +3. In the actinoids the <b>5f, 6d and 7s levels are of comparable energy</b> and the 5f orbitals are less buried; electrons from all three can be removed with similar ease, opening many oxidation states (+3 up to +7).',
          '<b>Rise then fall.</b> Early in the series (Th, Pa, U, Np) the 5f electrons are only loosely bound and readily participate, so the maximum state climbs: Th(+4) → Pa(+5) → U(+6) → Np(+7). As atomic number increases further, the rising nuclear charge <b>pulls the 5f electrons progressively inward</b> (the actinoid contraction, steeper than the lanthanoid one because 5f shielding is even poorer). Once the 5f electrons sink and become core-like, they can no longer be removed for high oxidation states, so the later actinoids fall back to the lanthanoid-like, stable +3.',
          '<b>Synthesis:</b> the same variable — how strongly the 5f electrons are held — explains both facts. Loosely held early (⇒ high, variable states); tightly held late (⇒ mostly +3). The increasing 5f binding across the series is the through-line.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] What is lanthanoid contraction? State any two of its consequences.',
            a: 'Steady decrease in atomic/Ln<sup>3+</sup> ionic radii from La to Lu due to imperfect 4f–4f shielding; consequences include Zr ≈ Hf radii (difficult separation) and decreasing hydroxide basicity (La(OH)<sub>3</sub> most, Lu(OH)<sub>3</sub> least).',
          },
          {
            q: '[NEET] Which one of the following Ln<sup>3+</sup> ions is colourless: Pr<sup>3+</sup>, Eu<sup>3+</sup>, Gd<sup>3+</sup>, Ho<sup>3+</sup>?',
            a: 'Gd<sup>3+</sup> (4f<sup>7</sup>, colourless).',
          },
          {
            q: '[JEE Main] Write the electronic configuration of Ce<sup>3+</sup> and Ce<sup>4+</sup>, and explain why cerium readily shows the +4 state.',
            a: 'Ce<sup>3+</sup> = [Xe]4f<sup>1</sup>, Ce<sup>4+</sup> = [Xe]4f<sup>0</sup>; the +4 state is favoured because it attains the stable empty-f (f<sup>0</sup>) noble-gas-like configuration (though Ce<sup>4+</sup> is itself a strong oxidant reverting to +3).',
          },
          {
            q: '[JEE Main] Name the alloy “mischmetall,” state its approximate composition, and give one use.',
            a: '~95% lanthanoid metal + ~5% iron with traces of S, C, Ca, Al; used in Mg-based alloys for tracer bullets/lighter flints.',
          },
          {
            q: '[JEE Advanced] Account for the observation that Eu<sup>2+</sup> is a strong reducing agent whereas Ce<sup>4+</sup> is a strong oxidising agent, despite both being “off-+3” states of lanthanoids.',
            a: 'Eu<sup>2+</sup> has stable f<sup>7</sup> and is oxidised back to +3 (reducing agent); Ce<sup>4+</sup> has stable f<sup>0</sup> and is reduced back to +3 (oxidising agent) — both relax toward the dominant +3 from opposite sides.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Lanthanoid contraction is caused by:',
        opts: [
          { label: 'appreciable shielding of outer electrons by 4f electrons', nudge: '<b>(a)</b> is the exact opposite (the shielding is poor, not appreciable) — the classic inversion trap.' },
          { label: 'imperfect shielding of one 4f electron by another as nuclear charge increases', nudge: null },
          { label: 'the same effective nuclear charge from Ce to Lu', nudge: '<b>(c)</b> would predict no size change at all.' },
          { label: 'shielding by 5d electrons', nudge: '<b>(d)</b> misattributes the cause to 5d electrons, which are not the ones being progressively added.' },
        ],
        correct: 1,
        solution: 'Each 4f electron shields the next poorly, so effective nuclear charge rises across the series and radii shrink steadily.',
      },
      {
        t: 'mcq',
        q: 'Which Ln<sup>3+</sup> ion is expected to be diamagnetic?',
        opts: [
          { label: 'Ce<sup>3+</sup>', nudge: '<b>(a)</b> Ce<sup>3+</sup> = 4f<sup>1</sup> has unpaired f-electrons → paramagnetic.' },
          { label: 'Eu<sup>3+</sup>', nudge: '<b>(b)</b> Eu<sup>3+</sup> = 4f<sup>6</sup> has unpaired f-electrons → paramagnetic.' },
          { label: 'Lu<sup>3+</sup>', nudge: null },
          { label: 'Sm<sup>3+</sup>', nudge: '<b>(d)</b> Sm<sup>3+</sup> = 4f<sup>5</sup> has unpaired f-electrons → paramagnetic.' },
        ],
        correct: 2,
        solution: 'Lu<sup>3+</sup> = 4f<sup>14</sup> — fully filled, no unpaired electrons → diamagnetic. Students who pick <b>(a)</b>, <b>(b)</b> or <b>(d)</b> forget that only f<sup>0</sup> (La<sup>3+</sup>) and f<sup>14</sup> (Lu<sup>3+</sup>) give zero unpaired electrons.',
      },
      {
        t: 'mcq',
        q: 'The actinoids exhibit more oxidation states than the lanthanoids mainly because:',
        opts: [
          { label: 'the 5f orbitals are more buried than the 4f orbitals', nudge: '<b>(a)</b> reverses reality — 5f is less buried than 4f.' },
          { label: '5f, 6d and 7s levels are of comparable energy, allowing more electrons to participate', nudge: null },
          { label: 'actinoids are more reactive', nudge: '<b>(c)</b> confuses reactivity with oxidation-state variety.' },
          { label: '4f and 5f orbitals are equally shielded', nudge: '<b>(d)</b> is false and irrelevant to the count of accessible states.' },
        ],
        correct: 1,
        solution: 'Comparable 5f/6d/7s energies (and less-buried 5f) let electrons from several sub-levels enter bonding, opening states up to +7.',
      },
      {
        t: 'mcq',
        q: 'A well-known alloy of lanthanoid metals used in lighter flints and tracer bullets is:',
        opts: [
          { label: 'bronze', nudge: '<b>(a)</b> bronze is Cu–Sn; it contains no lanthanoids.' },
          { label: 'mischmetall', nudge: null },
          { label: 'stainless steel', nudge: '<b>(c)</b> stainless steel is Fe–Cr–Ni; it contains no lanthanoids.' },
          { label: 'duralumin', nudge: '<b>(d)</b> duralumin is an Al alloy; it contains no lanthanoids.' },
        ],
        correct: 1,
        solution: 'Mischmetall (~95% lanthanoid metal + ~5% Fe with traces of S, C, Ca, Al). These distractors test whether the alloy’s composition, not just its name, is known.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Applying the spin-only formula to lanthanoids.</b> It works for d-block ions but <b>not</b> for Ln<sup>3+</sup> — their unquenched orbital momentum requires μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)).',
          '<b>Stating the contraction cause backwards.</b> It is the imperfect/poor shielding by 4f electrons, not “appreciable shielding.” The poor shielding is the whole point.',
          '<b>Assuming every lanthanoid ion is +3, coloured and paramagnetic.</b> Off-+3 states (Ce<sup>4+</sup>, Eu<sup>2+</sup>) exist for f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> reasons. Among Ln<sup>3+</sup> ions those same configurations are colourless (only f<sup>0</sup> and f<sup>14</sup> are also diamagnetic); aqueous Ce<sup>4+</sup> is the exception to remember, f<sup>0</sup> but yellow-orange from charge transfer.',
          '<b>Forgetting La and Ac are d-block.</b> They are grouped with the f-block by resemblance but their differentiating electron is in d, not f.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Build everything on the f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> <b>stability magnets</b>. They predict (i) which ions are colourless (La<sup>3+</sup>, Gd<sup>3+</sup>, Lu<sup>3+</sup>), (ii) the main off-+3 states (Ce<sup>4+</sup>→f<sup>0</sup>, Eu<sup>2+</sup>→f<sup>7</sup>, Yb<sup>2+</sup>→f<sup>14</sup>), and (iii) whether that off-state is oxidising (above +3) or reducing (below +3). One idea, three exam answers.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'f-block config',
            note: '(<i>n</i> − 2)f<sup>1–14</sup> (<i>n</i> − 1)d<sup>0–1</sup> <i>n</i>s<sup>2</sup>. Lanthanoids 4f (Ce 58–Lu 71); actinoids 5f (Th 90–Lr 103). La, Ac are d-block.',
          },
          {
            f: 'Dominant state +3',
            note: 'Ln<sup>3+</sup> = 4f<sup><i>n</i></sup>. Off-+3 from f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup>: Ce<sup>4+</sup> (f<sup>0</sup>, oxidising), Eu<sup>2+</sup>/Yb<sup>2+</sup> (f<sup>7</sup>/f<sup>14</sup>, reducing).',
          },
          {
            f: 'Lanthanoid contraction',
            note: 'steady radius decrease (La→Lu) from poor 4f shielding ⇒ Zr ≈ Hf, density generally rises, La(OH)<sub>3</sub> most basic → Lu(OH)<sub>3</sub> least.',
          },
          {
            f: 'Colour',
            note: 'f–f transitions; Ln<sup>3+</sup> with f<sup>0</sup>/f<sup>7</sup>/f<sup>14</sup> colourless. <b>Magnetism:</b> use μ = <i>g</i>√(<i>J</i>(<i>J</i> + 1)), not spin-only; La<sup>3+</sup>, Lu<sup>3+</sup> diamagnetic.',
          },
          {
            f: '<i>E</i>°(Ln<sup>3+</sup>/Ln) ≈ −2.2 to −2.4 V',
            note: '→ strong reducing, electropositive metals.',
          },
          {
            f: 'Actinoids vs lanthanoids',
            note: 'wider OS (up to +7, Th–Np), greater contraction, stronger complexes (5f + 6d), all radioactive.',
          },
          {
            f: 'Uses',
            note: 'mischmetall (~95% Ln + ~5% Fe) for flints/bullets; Ln oxides as TV phosphors and petroleum-cracking catalysts.',
          },
        ],
        aids: [
          '“LA-GD-LU are colourless” (f<sup>0</sup>, f<sup>7</sup>, f<sup>14</sup>); only LA, LU diamagnetic.',
        ],
      },
    ],
  },
];
