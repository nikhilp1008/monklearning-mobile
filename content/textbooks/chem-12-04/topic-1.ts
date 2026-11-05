import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 01, d-Block Properties & Trends: pp. 148–156 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8.
 * Figure 4.1 (caption first on p. 151, drawn p. 152) is placed after Procedure B,
 * where the book first prints its caption; it is redrawn in
 * lib/diagrams/chemistry-12-04.ts. The book's "subtopic" is "topic" here.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 148–156 ─────────────────────────
  {
    n: '01',
    title: 'd-Block Properties & Trends',
    kalam: 'A transition element is one that has an incomplete d-subshell either in its neutral atom or in one of its common ions.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A perennial scoring zone. CBSE Boards lift 1–3 mark “give reasons” and 5-mark trend questions almost every year. NEET reliably asks 1–2 elimination MCQs on colour, magnetic moment, or oxidation state. JEE Main poses 1–2 numericals linking magnetic moment to configuration; JEE Advanced probes ionisation-enthalpy and electrode-potential reasoning at depth.',
      },
      {
        t: 'p',
        html: 'Picture the periodic table as a long-distance Indian Railways train. The <b>s-block</b> elements are the eager passengers crowding the doorways on the far left — reactive, always ready to give up a seat (electron). The <b>p-block</b> crowd sits on the far right, fussy and particular. Wedged in the <b>large middle section</b> are the d-block elements — the steady, dependable folks in the middle berths who don’t rush anywhere. Their chemistry is transitional: it bridges the gap between the pushy s-block and the choosy p-block. That is literally where the historical name “transition elements” came from.',
      },
      {
        t: 'p',
        html: 'What makes these middle-berth elements special is where their newest electrons go. In the d-block, electrons are added not to the outermost shell but to the <b>penultimate</b> (second-to-last) energy level — the (<i>n</i> − 1)d orbitals. Four horizontal rows result, the <b>3d, 4d, 5d and 6d series</b>, each beginning in Group 3.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a shopkeeper in a busy Chandni Chowk market who keeps a little cash drawer behind the front counter (that’s the inner (<i>n</i> − 1)d “drawer”), in addition to the coins in his pocket (the outer <i>n</i>s electrons). When a customer needs change, he can dip into both the pocket and the inner drawer, in many different combinations. A purely s-block shopkeeper only has pocket money — limited options. The d-block shopkeeper’s hidden inner drawer is exactly why these elements show <b>variable oxidation states</b>, form <b>coloured</b> compounds, behave as <b>catalysts</b>, and build <b>complexes</b> so readily. Every “superpower” of the transition metals traces back to those partly filled, energetically accessible d-orbitals sitting just below the surface.',
      },
      {
        t: 'p',
        html: 'This also explains the IUPAC definition: a <b>transition element is one that has an incomplete d-subshell either in its neutral atom or in one of its common ions</b>. The inner drawer must be partly open for the magic to work.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions — when the “transition” label fails.</b> Three elements sit in the d-block but are not true transition metals: <b>zinc, cadmium and mercury</b> (Group 12). Their inner drawer is permanently locked shut — they have a completely filled 3d<sup>10</sup> (or 4d<sup>10</sup>, 5d<sup>10</sup>) configuration in both the neutral atom and their usual +2 ions. With no partly filled d-subshell, they cannot perform the d-block tricks: their common compounds are <b>white/colourless</b>, <b>diamagnetic</b>, they show <b>essentially one oxidation state</b> (+2; mercury also forms +1 as Hg<sub>2</sub><sup>2+</sup>, still d<sup>10</sup>), and they are poor catalysts. We still study them alongside the transition metals because they are the natural end-members of each series, but the trends below carry the silent caveat: exclude Zn, Cd, Hg whenever the property depends on unpaired or removable d-electrons.',
      },
      {
        t: 'p',
        html: 'A second caveat: these trends describe the <b>3d (first) series</b> most cleanly. The 4d and 5d series behave differently in size and oxidation-state stability — heavier members favour higher oxidation states, the opposite of the inert-pair behaviour you learned in the p-block. And “reactive” is itself relative: most first-series metals are electropositive enough to dissolve in mineral acids, but a few (copper especially) are comparatively noble and resist them.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'formula',
        kicker: 'General electronic configuration',
        main: '(<i>n</i> − 1)d<sup>1–10</sup> <i>n</i>s<sup>0,1,2</sup>',
        legend: [
          '<i>n</i> = outermost principal quantum number (4 for the 3d series, 5 for 4d, and so on)',
          'd, s = subshells, with each superscript the number of electrons in it',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The two famous anomalies in the 3d series arise from the extra stability of half-filled and fully-filled subshells:<br>Cr (<i>Z</i> = 24) : [Ar] 3d<sup>5</sup>4s<sup>1</sup><br>Cu (<i>Z</i> = 29) : [Ar] 3d<sup>10</sup>4s<sup>1</sup>',
      },
      {
        t: 'p',
        html: '<b>Spin-only magnetic moment</b> — the one true formula of this topic:',
      },
      {
        t: 'formula',
        kicker: 'Spin-only magnetic moment',
        main: 'μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM',
        legend: [
          'μ<sub>s</sub> = spin-only magnetic moment',
          '<i>n</i> = number of unpaired electrons',
          'BM = Bohr magneton, where 1 BM = 9.274 × 10<sup>−24</sup> J T<sup>−1</sup> (equivalently A m<sup>2</sup>)',
        ],
        note: 'Dimensional formula of magnetic moment: [M<sup>0</sup> L<sup>2</sup> T<sup>0</sup> A<sup>1</sup>] (it is current × area).',
      },
      {
        t: 'p',
        html: '<b>Quick μ reference</b> (memorise these five — most numericals reduce to them):',
      },
      {
        t: 'table',
        title: null,
        head: ['Unpaired electrons <i>n</i>', 'μ<sub>s</sub> (BM)', 'Typical 3d ion'],
        rows: [
          ['1', '1.73', 'Ti<sup>3+</sup> (d<sup>1</sup>)'],
          ['2', '2.83', 'V<sup>3+</sup> (d<sup>2</sup>)'],
          ['3', '3.87', 'Cr<sup>3+</sup> (d<sup>3</sup>)'],
          ['4', '4.90', 'Fe<sup>2+</sup> (d<sup>6</sup>)'],
          ['5', '5.92', 'Mn<sup>2+</sup>, Fe<sup>3+</sup> (d<sup>5</sup>)'],
        ],
      },
      {
        t: 'p',
        html: '(√8 = 2.828, so 2.83 BM. NCERT’s table prints 2.84; an exam option may show either.)',
      },
      {
        t: 'p',
        html: '<b>Maximum oxidation state.</b> Up to manganese, the highest stable oxidation state equals the <b>sum of <i>n</i>s and (<i>n</i> − 1)d electrons</b>, and equals the group number: Sc(+3), Ti(+4), V(+5), Cr(+6), Mn(+7). Beyond Mn it falls off sharply.',
      },
      {
        t: 'p',
        html: '<b>Trends across the first (3d) series</b><br>• <b>Atomic & ionic radii:</b> radii decrease gradually from Sc toward the middle of the series (rising nuclear charge pulls electrons in), then stay almost constant and even rise slightly toward Cu–Zn (mounting d-electron repulsion offsets the nuclear pull). Down a group, 4d radii exceed 3d, but the 5d radii are <b>nearly equal to the 4d</b> values — the fingerprint of lanthanoid contraction.<br>• <b>Ionisation enthalpies:</b> rise gradually across the series — far more gently than across a typical s- or p-block period — because each added (<i>n</i> − 1)d electron shields the next reasonably well. This gentle rise is exactly why removing a variable number of d-electrons is not prohibitively costly, underwriting variable oxidation states.<br>• <b>Standard electrode potential <i>E</i>°(M<sup>2+</sup>/M):</b> mostly negative (these metals lie above hydrogen and displace H<sup>+</sup> from dilute acids), with <b>copper the noble exception</b> at <i>E</i>° = +0.34 V, so Cu does <b>not</b> liberate hydrogen from acids. The values do <b>not</b> change smoothly: Mn, Ni and Zn are more negative than expected — for Mn and Zn because of the stability of the resulting ion’s configuration, for Ni because of its very negative hydration enthalpy (worked out in Procedure D).<br>• <b>Oxides & oxoanions:</b> transition metals form oxides spanning the entire acidity range, governed by oxidation state — <b>low states give basic oxides, intermediate states amphoteric, and the highest states acidic.</b> For chromium: CrO (+2, basic) → Cr<sub>2</sub>O<sub>3</sub> (+3, amphoteric) → CrO<sub>3</sub> (+6, acidic). The highest oxidation state attained in an oxide equals the group number (up to Mn<sub>2</sub>O<sub>7</sub>). The acidic high-state oxides dissolve in alkali to give <b>oxometallic salts</b> — chromates, dichromates and permanganates.<br>• <b>Colour:</b> the characteristic colours of transition-metal ions arise from <b>d–d electronic transitions</b> — an electron jumps between the energy-split d-orbitals by absorbing a particular wavelength of visible light, and the complementary colour is transmitted to your eye. This needs a partly filled d-subshell, which is exactly why simple hydrated d<sup>0</sup> and d<sup>10</sup> ions are colourless. (Some d<sup>0</sup> species are intensely coloured all the same, such as MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>: that colour comes from charge transfer, not d–d, as Topic 02 explains.)',
      },
      {
        t: 'p',
        html: '<b>Key definitional terms</b>',
      },
      {
        t: 'def',
        term: 'Interstitial compound',
        html: 'a non-stoichiometric compound formed when small atoms (H, C, N, B) occupy the vacant interstitial holes of a metal lattice (e.g., TiC, Mn<sub>4</sub>N, VH<sub>0.56</sub>); these are hard, high-melting, retain metallic conductivity, and are chemically inert.',
      },
      {
        t: 'def',
        term: 'Alloy',
        html: 'a blend of metals whose atomic radii lie within about 15% of each other, so one can substitute for the other in the lattice — transition metals form them readily (steels, brass = Cu–Zn, bronze = Cu–Sn).',
      },
      {
        t: 'def',
        term: 'Complex formation',
        html: 'strongly favoured by transition-metal ions because of their small size, high ionic charge, and availability of vacant d-orbitals for accepting electron pairs from ligands.',
      },
      {
        t: 'def',
        term: 'Disproportionation',
        html: 'a single oxidation state becoming simultaneously oxidised and reduced, e.g., 3 Mn<sup>VI</sup>O<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2 Mn<sup>VII</sup>O<sub>4</sub><sup>−</sup> + Mn<sup>IV</sup>O<sub>2</sub> + 2H<sub>2</sub>O.',
      },
      {
        t: 'def',
        term: 'Lanthanoid contraction',
        html: 'the steady decrease in atomic/ionic radii across the 4f series, caused by the poor shielding of one 4f electron by another.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'No single algebraic derivation governs this topic; instead, master these five reasoning chains.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Calculating the spin-only magnetic moment',
        steps: [
          'Write the <b>ground-state configuration of the ion</b> (not the atom). Crucial rule: for transition-metal cations, <b>remove <i>n</i>s electrons first, then</b> (<i>n</i> − 1)d. So Fe = [Ar]3d<sup>6</sup>4s<sup>2</sup> ⇒ Fe<sup>2+</sup> = [Ar]3d<sup>6</sup> (not 3d<sup>4</sup>4s<sup>2</sup>).',
          'Distribute the d-electrons across the five d-orbitals using <b>Hund’s rule</b> (maximise unpaired spins).',
          'Count unpaired electrons <i>n</i>.',
          'Substitute into μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM and report with the unit.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why this order?</b> Once the 3d and 4s levels are occupied, the 3d orbitals drop below 4s in energy, so the 4s electrons — now the higher-energy, outermost ones — leave first on ionisation.',
      },
      {
        t: 'p',
        html: 'The high melting points of transition metals come from strong <b>interatomic metallic bonding</b>, and this bonding strengthens as more unpaired (<i>n</i> − 1)d electrons join the <i>n</i>s electrons in the metallic “electron sea.”',
      },
      {
        t: 'proc',
        title: 'Procedure B — Reasoning out the melting-point / enthalpy-of-atomisation trend',
        steps: [
          'Count unpaired d-electrons available for bonding.',
          'More unpaired electrons ⇒ stronger bonding ⇒ higher melting point.',
          'This predicts a <b>maximum near the middle</b> of each series (melting points around V/Cr in the 3d series, Mo and W in the heavier ones; in the 3d series the enthalpy of atomisation tops at V, Additional topic B), where the count of bonding-available unpaired electrons peaks.',
          'Predict the <b>anomalous dips:</b> Mn (3d<sup>5</sup>4s<sup>2</sup>) has an extra-stable half-filled core whose electrons resist participating in bonding, so its melting point dips below the trend; Zn, Cd, Hg (d<sup>10</sup>) contribute no d-electrons to bonding, so they are soft, volatile, and low-melting (Hg is liquid at room temperature).',
        ],
      },
      { t: 'fig', id: 'c12-04-fig-4.1' },
      {
        t: 'proc',
        title: 'Procedure C — The lanthanoid contraction logic chain (its effect on the d-block)',
        steps: [
          'Across the 4f series (Ce → Lu), each added electron enters an inner 4f orbital that shields the nuclear charge <b>poorly</b>.',
          'Effective nuclear charge therefore creeps up across the series, pulling the electron cloud inward — radii shrink steadily.',
          '<b>Consequence for the d-block:</b> the 14 lanthanoids are inserted between the 4d and 5d series. By the time we reach the 5d elements, this accumulated contraction almost exactly cancels the expected size increase from the extra shell.',
          '<b>Result:</b> 4d and 5d members of the same group have <b>nearly identical radii</b> (e.g., Zr ≈ Hf, Nb ≈ Ta), which is why Zr/Hf and Nb/Ta are notoriously hard to separate, and why the 5d metals are <b>exceptionally dense</b> (Os and Ir are the densest elements known).',
        ],
      },
      {
        t: 'p',
        html: '<i>E</i>°(M<sup>2+</sup>/M) is set by three energy terms read together: the enthalpy of atomisation, the sum of the first two ionisation enthalpies, and the hydration enthalpy of M<sup>2+</sup>.',
      },
      {
        t: 'proc',
        title: 'Procedure D — Reasoning out the electrode-potential irregularities',
        steps: [
          '<b>Copper is “noble” (positive <i>E</i>°)</b> because the total of its atomisation and ionisation enthalpies, the largest in the series and driven by its very high second ionisation enthalpy, is not repaid by hydration — energetically Cu prefers to remain the metal, so it cannot displace hydrogen from dilute acids.',
          '<b>Mn, Ni and Zn show abnormally negative <i>E</i>°</b>, for two different reasons. Forming Mn<sup>2+</sup> (3d<sup>5</sup>, half-filled) or Zn<sup>2+</sup> (3d<sup>10</sup>, filled) lands on an extra-stable configuration. Ni<sup>2+</sup> (3d<sup>8</sup>) has no such configuration: the very negative hydration enthalpy of Ni<sup>2+</sup> repays the cost of forming it. Either way the couple is more favourable than the smooth trend predicts.',
          '<b>Reading rule:</b> a more negative <i>E</i>° ⇒ the metal is more easily oxidised ⇒ the stronger reducing agent.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure E — Tracing a catalytic cycle (why variable oxidation states enable catalysis).</b> A transition-metal catalyst works by temporarily switching oxidation states to offer a lower-energy path. The classic case is iron(III) accelerating the otherwise sluggish iodide–persulphate reaction:<br>2 I<sup>−</sup> + S<sub>2</sub>O<sub>8</sub><sup>2−</sup> → I<sub>2</sub> + 2 SO<sub>4</sub><sup>2−</sup>',
      },
      {
        t: 'p',
        html: 'The catalyst splits this into two fast steps, shuttling between +3 and +2:<br>2 Fe<sup>3+</sup> + 2 I<sup>−</sup> → 2 Fe<sup>2+</sup> + I<sub>2</sub><br>2 Fe<sup>2+</sup> + S<sub>2</sub>O<sub>8</sub><sup>2−</sup> → 2 Fe<sup>3+</sup> + 2 SO<sub>4</sub><sup>2−</sup>',
      },
      {
        t: 'p',
        html: 'The iron is fully regenerated, so a trace suffices — the defining mark of a catalyst. The same oxidation-state-shuttle logic powers V<sub>2</sub>O<sub>5</sub> in the Contact process (V<sup>5+</sup> ⇌ V<sup>4+</sup>) and Pd in the Wacker process. Fe in the Haber process and Ni in hydrogenation work mainly at the metal surface, where d and s electrons bond to the reactant molecules and weaken their bonds. Biology uses these metals too: Fe in haemoglobin (an oxygen carrier), Co at the heart of vitamin B<sub>12</sub> (a cofactor), Fe–Mo in the enzyme nitrogenase.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A first-series transition-metal ion M<sup>3+</sup> has the atomic number <i>Z</i> = 23. Write the ground-state electronic configuration of M<sup>3+</sup> and calculate its spin-only magnetic moment.',
        steps: [
          'The element with <i>Z</i> = 23 is vanadium: V = [Ar] 3d<sup>3</sup>4s<sup>2</sup>.',
          'Forming M<sup>3+</sup> removes three electrons — <b>the two 4s first, then one 3d</b>:<br>V<sup>3+</sup> = [Ar] 3d<sup>2</sup>',
          'Number of unpaired electrons (Hund’s rule): <i>n</i> = 2.',
          'Spin-only magnetic moment:<br>μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) = √(2(2 + 2)) = √8',
        ],
        ans: 'V<sup>3+</sup> = [Ar]3d<sup>2</sup>, μ<sub>s</sub> = 2.83 BM.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which of the following hydrated ions is <b>coloured</b> in aqueous solution? Sc<sup>3+</sup>, Ti<sup>4+</sup>, Cu<sup>2+</sup>, Zn<sup>2+</sup>',
        steps: [
          '<b>The fast way — don’t compute anything.</b> Colour in transition-metal ions comes from <b>d–d transitions</b>, which require a <b>partly filled</b> d-subshell. So mentally tag each ion as d<sup>0</sup>, d<sup>10</sup>, or “in-between”:',
          'Sc<sup>3+</sup>: [Ar]3d<sup>0</sup> → empty → colourless.',
          'Ti<sup>4+</sup>: [Ar]3d<sup>0</sup> → empty → colourless.',
          'Zn<sup>2+</sup>: [Ar]3d<sup>10</sup> → full → colourless.',
          'Cu<sup>2+</sup>: [Ar]3d<sup>9</sup> → <b>partly filled</b> → <b>coloured</b> (blue). ✓',
          '<b>Speed rule:</b> in any “which is coloured” MCQ on simple hydrated ions, instantly eliminate every d<sup>0</sup> and d<sup>10</sup> ion — they are colourless. Only the partly filled one survives.',
        ],
        ans: 'Cu<sup>2+</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (multi-concept: magnetism + redox stability)',
        q: 'An aqueous M<sup>2+</sup> ion of a 3d-series metal shows a spin-only magnetic moment of 4.90 BM. Identify the metal, and state — with reason — whether its M<sup>2+</sup> ion is readily oxidised to M<sup>3+</sup> by air. (Take <i>Z</i> > 24: Cr<sup>2+</sup> is also high-spin with four unpaired electrons.)',
        steps: [
          '<b>Step 1 — back-out the unpaired count from μ:</b><br>4.90 = √(<i>n</i>(<i>n</i> + 2)) ⇒ <i>n</i>(<i>n</i> + 2) = 24 ⇒ <i>n</i> = 4.',
          '<b>Step 2 — find the configuration:</b> a M<sup>2+</sup> ion with 4 unpaired electrons is 3d<sup>6</sup> (configuration t<sub>2g</sub><sup>4</sup> e<sub>g</sub><sup>2</sup> in the high-spin aqueous case). Working back, M = [Ar]3d<sup>6</sup>4s<sup>2</sup>, so <i>Z</i> = 26 → <b>iron</b>.',
          '<b>Step 3 — link to redox stability:</b> Fe<sup>2+</sup> is 3d<sup>6</sup>; losing one more electron gives Fe<sup>3+</sup> = 3d<sup>5</sup>, a <b>half-filled, extra-stable</b> configuration. The drive to reach d<sup>5</sup> makes Fe<sup>2+</sup> readily oxidise to Fe<sup>3+</sup> in aerated water.',
        ],
        ans: 'The metal is <b>Fe</b>; Fe<sup>3+</sup> (3d<sup>5</sup>) is favoured by air oxidation because of half-filled stability.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Account, in terms of ionisation enthalpies, for the following observation: in aqueous acidic medium Mn<sup>3+</sup> is a powerful oxidising agent (readily reduced to Mn<sup>2+</sup>), whereas Fe<sup>3+</sup> is comparatively stable. Both ions belong to the 3d series and differ by only one atomic number.',
        steps: [
          'The relevant quantity is the <b>third ionisation enthalpy</b> Δ<sub>i</sub><i>H</i><sub>3</sub> — the energy to convert M<sup>2+</sup> → M<sup>3+</sup>.',
          'For manganese: Mn<sup>2+</sup> = 3d<sup>5</sup> is a <b>half-filled, highly stable</b> core. Removing a third electron means breaking that stable d<sup>5</sup> arrangement, so Δ<sub>i</sub><i>H</i><sub>3</sub>(Mn) is <b>abnormally large</b>. Energetically, Mn<sup>3+</sup> “wants” to fall back to Mn<sup>2+</sup> — hence it is a strong oxidiser.',
          'For iron: Fe<sup>2+</sup> = 3d<sup>6</sup>. Removing the third electron creates the stable half-filled Fe<sup>3+</sup> = 3d<sup>5</sup>. This costs comparatively little, so Δ<sub>i</sub><i>H</i><sub>3</sub>(Fe) is comparatively <b>small</b>, and Fe<sup>3+</sup> is stable.',
          'So the same half-filled-d<sup>5</sup> stability acts in opposite directions: it <b>resists</b> the formation of Mn<sup>3+</sup> (large Δ<sub>i</sub><i>H</i><sub>3</sub>) but <b>promotes</b> the formation of Fe<sup>3+</sup> (small Δ<sub>i</sub><i>H</i><sub>3</sub>). This single principle — extra stability of 3d<sup>5</sup> — reconciles both observations (Δ<sub>i</sub><i>H</i><sub>3</sub>: Mn 3248, Fe 2957 kJ mol<sup>−1</sup>), and is mirrored in their standard reduction potentials, <i>E</i>°(Mn<sup>3+</sup>/Mn<sup>2+</sup>) = +1.57 V against <i>E</i>°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = +0.77 V.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Give reasons: (i) Transition metals form a large number of interstitial compounds. (ii) The enthalpies of atomisation of transition metals are high.',
            a: '(i) Small H/C/N atoms occupy lattice holes — non-stoichiometric, hard, high-melting, chemically inert; (ii) strong metallic bonding from many unpaired (<i>n</i> − 1)d + <i>n</i>s electrons.',
          },
          {
            q: '[NEET] Among Ti<sup>4+</sup>, V<sup>2+</sup>, Cu<sup>+</sup>, Sc<sup>3+</sup>, which ion is expected to be coloured in aqueous solution?',
            a: 'V<sup>2+</sup> (it is 3d<sup>3</sup>, partly filled; the rest are d<sup>0</sup> or d<sup>10</sup>).',
          },
          {
            q: '[JEE Main] A divalent 3d-metal ion has a spin-only magnetic moment of 3.87 BM. Identify the ion (<i>Z</i> < 25) and write its configuration.',
            a: '3.87 BM ⇒ <i>n</i> = 3 ⇒ d<sup>3</sup> ⇒ V<sup>2+</sup> = [Ar]3d<sup>3</sup>.',
          },
          {
            q: '[JEE Main] Arrange CrO, Cr<sub>2</sub>O<sub>3</sub>, CrO<sub>3</sub> in increasing order of acidic character and justify the order in one line.',
            a: 'CrO < Cr<sub>2</sub>O<sub>3</sub> < CrO<sub>3</sub> (acidic character rises as oxidation state / oxygen content rises: basic → amphoteric → acidic).',
          },
          {
            q: '[JEE Advanced] Explain why the atomic radii of the 4d and 5d series elements of the same group (e.g., Zr and Hf) are almost identical, and name one practical consequence.',
            a: 'Lanthanoid contraction cancels the expected size increase from the added shell; consequence — Zr and Hf are extremely difficult to separate.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which one of the following is <b>not</b> regarded as a transition element?',
        opts: [
          { label: 'Cr', nudge: '<b>(a)</b> Cr 3d<sup>5</sup> obviously has a partly filled d-subshell — a distractor for students who forget the definition is about partly filled shells.' },
          { label: 'Fe', nudge: '<b>(b)</b> Fe 3d<sup>6</sup> obviously has a partly filled d-subshell — a distractor for students who forget the definition is about partly filled shells.' },
          { label: 'Zn', nudge: null },
          { label: 'Cu', nudge: '<b>(d)</b> <b>Cu</b> is the trap: students often pick Cu because its atom is 3d<sup>10</sup>4s<sup>1</sup>. But its common ion Cu<sup>2+</sup> is 3d<sup>9</sup> (incomplete), so Cu is a transition metal. Picking (d) means forgetting that the definition allows the incomplete shell to appear in either the atom or an ion.' },
        ],
        correct: 2,
        solution: 'Zinc is [Ar]3d<sup>10</sup>4s<sup>2</sup> and its only common ion Zn<sup>2+</sup> is 3d<sup>10</sup> — a completely filled d-subshell in both atom and ion, failing the IUPAC “incomplete d-subshell” test.',
      },
      {
        t: 'mcq',
        q: 'The spin-only magnetic moment of Mn<sup>2+</sup> (in BM) is approximately:',
        opts: [
          { label: '1.73', nudge: '<b>(a)</b> 1.73 corresponds to <i>n</i> = 1 — chosen if you wrongly write Mn<sup>2+</sup> as d<sup>1</sup>.' },
          { label: '3.87', nudge: '<b>(b)</b> 3.87 is <i>n</i> = 3 — chosen if you remove d-electrons before s and miscount.' },
          { label: '5.92', nudge: null },
          { label: '2.83', nudge: '<b>(d)</b> 2.83 is <i>n</i> = 2 — a careless Hund’s-rule slip.' },
        ],
        correct: 2,
        solution: 'Mn<sup>2+</sup> = [Ar]3d<sup>5</sup>, all five d-electrons unpaired, so μ<sub>s</sub> = √(5 × 7) = √35 = 5.92 BM.',
      },
      {
        t: 'mcq',
        q: 'In which pair are <b>both</b> members coloured in their common aqueous oxidation state?',
        opts: [
          { label: 'Sc<sup>3+</sup>, Ti<sup>4+</sup>', nudge: '<b>(a)</b> both d<sup>0</sup> → colourless.' },
          { label: 'Cu<sup>2+</sup>, Ni<sup>2+</sup>', nudge: null },
          { label: 'Zn<sup>2+</sup>, Cu<sup>+</sup>', nudge: '<b>(c)</b> both filled: Zn<sup>2+</sup> is d<sup>10</sup>, Cu<sup>+</sup> is d<sup>10</sup> → colourless.' },
          { label: 'Ti<sup>4+</sup>, Zn<sup>2+</sup>', nudge: '<b>(d)</b> d<sup>0</sup> and d<sup>10</sup> → colourless.' },
        ],
        correct: 1,
        solution: 'Cu<sup>2+</sup> (d<sup>9</sup>) and Ni<sup>2+</sup> (d<sup>8</sup>) are both partly filled → both coloured. Both members of each wrong pair are d<sup>0</sup> or d<sup>10</sup> — the give-away to eliminate.',
      },
      {
        t: 'mcq',
        q: 'The melting point of manganese (Mn) is lower than that of its neighbours chromium and iron mainly because:',
        opts: [
          { label: 'Mn has the highest atomic mass in the series', nudge: '<b>(a)</b> Atomic mass does not control melting point here, and Mn is not the heaviest anyway — distractor for those guessing by “heaviness.”' },
          { label: 'Mn has a stable half-filled 3d<sup>5</sup> configuration that resists metallic bonding', nudge: null },
          { label: 'Mn is radioactive', nudge: '<b>(c)</b> Mn is not radioactive — a confusion with the 6d/actinoid elements.' },
          { label: 'Mn has a completely filled d-subshell', nudge: '<b>(d)</b> Confuses Mn (d<sup>5</sup>) with the genuinely filled d<sup>10</sup> case of Zn — the Zn explanation misapplied.' },
        ],
        correct: 1,
        solution: 'The stable half-filled 3d<sup>5</sup> core holds its electrons tightly, so fewer participate in the interatomic metallic bonding, weakening the lattice and lowering the melting point.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Removing d-electrons before s when forming a cation.</b> Always strip <i>n</i>s electrons first. Fe<sup>2+</sup> is 3d<sup>6</sup>, never 3d<sup>4</sup>4s<sup>2</sup>. Getting this wrong corrupts every magnetic-moment and colour answer.',
          '<b>Calling Zn/Cd/Hg transition metals (or forgetting Cu/Sc edge cases).</b> Test against the ion: is there a partly filled d-subshell in the atom <b>or</b> a common ion? Zn fails (always d<sup>10</sup>); Cu passes (because Cu<sup>2+</sup> is d<sup>9</sup>); Sc passes too (its atom is 3d<sup>1</sup>, though Sc<sup>3+</sup> is d<sup>0</sup>).',
          '<b>Assuming every transition-metal compound is coloured and paramagnetic.</b> d<sup>0</sup> (Sc<sup>3+</sup>, Ti<sup>4+</sup>) and d<sup>10</sup> (Zn<sup>2+</sup>, Cu<sup>+</sup>) simple ions are colourless and diamagnetic.',
          '<b>Mixing up the heavy-member trend.</b> In the d-block, heavier members (4d, 5d) favour higher oxidation states — the <b>opposite</b> of the p-block inert-pair effect. Mo(VI) and W(VI) are more stable than Cr(VI).',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For a colour or magnetism MCQ on simple high-spin ions, first reduce each ion to a d<sup><i>x</i></sup> count. Then a one-second filter handles most options: <b>d<sup>0</sup> and d<sup>10</sup> ⇒ colourless and diamagnetic; everything in between ⇒ coloured and paramagnetic.</b> (Low-spin complexes can break the magnetism half: [Co(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup> is d<sup>6</sup> and diamagnetic. See the Coordination Compounds chapter.) And to back-solve μ → unpaired electrons, memorise the ladder 1.73, 2.83, 3.87, 4.90, 5.92 for <i>n</i> = 1, 2, 3, 4, 5 rather than re-squaring under the root each time.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Definition',
            note: 'transition element = incomplete (<i>n</i> − 1)d subshell in the atom <b>or</b> a common ion. General config (<i>n</i> − 1)d<sup>1–10</sup> <i>n</i>s<sup>0,1,2</sup>. <b>Zn, Cd, Hg are excluded</b> (always d<sup>10</sup>).',
          },
          {
            f: 'Anomalies (3d)',
            note: 'Cr = 3d<sup>5</sup>4s<sup>1</sup>, Cu = 3d<sup>10</sup>4s<sup>1</sup> (half/fully-filled stability).',
          },
          {
            f: 'Magnetic moment',
            note: 'μ<sub>s</sub> = √(<i>n</i>(<i>n</i> + 2)) BM; ladder → <i>n</i> = 1, 2, 3, 4, 5 ⇒ 1.73, 2.83, 3.87, 4.90, 5.92.',
          },
          {
            f: 'Max oxidation state = group number up to Mn (+7)',
            note: 'falls sharply after; heavier members favour higher OS (Mo, W > Cr).',
          },
          {
            f: 'Colour & paramagnetism',
            note: 'require a partly filled d-subshell (simple d<sup>0</sup>, d<sup>10</sup> ions = colourless, diamagnetic).',
          },
          {
            f: 'The “5 superpowers”',
            note: 'variable oxidation states, coloured ions, catalysis, complex formation, interstitial/alloy formation — all from accessible partly filled d-orbitals.',
          },
          {
            f: 'Lanthanoid contraction',
            note: '⇒ 4d ≈ 5d radii (Zr ≈ Hf), very dense 5d metals.',
          },
        ],
        aids: [
          '“VOCCI” for the superpowers: <b>V</b>ariable OS, <b>O</b>ptical colour, <b>C</b>atalysis, <b>C</b>omplexes, <b>I</b>nterstitial/alloys.',
        ],
      },
    ],
  },
];
