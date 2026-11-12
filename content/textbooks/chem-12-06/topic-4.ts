import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Topic 04, The Complete Reaction Map: pp. 286–294 of the Class 12
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8. Its
 * Section 3 keeps the book's lettered sub-sections A to D as bold leads. Figure
 * 6.6 (caption p. 289, drawn p. 290) follows sub-section C's equation, where the
 * book's caption stands; it is redrawn in lib/diagrams/chemistry-12-06.ts. The
 * book's "Sub-topic 02" is "Topic 02" here.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 286–294 ─────────────────────────
  {
    n: '04',
    title: 'The Complete Reaction Map (Substitution Products, Ambident Nucleophiles & Haloarene Reactions)',
    kalam: 'This topic answers the practical question that exams actually ask: what do you get, and with which reagent?',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the conversion-and-reagent backbone of the chapter. CBSE Boards build their multi-step “how would you convert X to Y” questions almost entirely from the substitution product map. NEET and JEE Main reliably test the ambident-nucleophile pair (KCN vs AgCN, KNO<sub>2</sub> vs AgNO<sub>2</sub>) and the o/p-directing-but-deactivating nature of halogen. JEE Advanced reaches for the benzyne (cine-substitution) mechanism and Dow’s process. Master this topic and you can answer almost any “name the product/reagent” question in the chapter.',
      },
      {
        t: 'p',
        html: 'By now you know how a haloalkane reacts (S<sub>N</sub>1/S<sub>N</sub>2, elimination, metals) and why aryl halides resist. This topic answers the practical question that exams actually ask: <b>what do you get, and with which reagent?</b>',
      },
      {
        t: 'p',
        html: 'Here is the unifying picture. The electron-poor carbon of R–X is like a <b>universal docking port</b>. Plug in a different electron-rich partner (nucleophile) and you pop out a different functional group — swap the halide for –OH and you have an alcohol; for –OR′ an ether; for –CN a nitrile; for –NH<sub>2</sub> an amine. The haloalkane is therefore the great <b>synthetic hub</b> of organic chemistry: it is the single most convenient launch point for building almost every other functional group. Memorising the docking options is the syllabus here.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture R–X as a mobile phone with one charging port. Different cables (nucleophiles) plugged into that one port let the phone do completely different jobs. Most cables have a single obvious plug. But a few special cables — the <b>ambident nucleophiles</b> — have two different plugs on the business end (for example CN<sup>−</sup> can connect through carbon or through nitrogen). Which plug goes in depends on the “socket conditions,” and in our chemistry the deciding factor turns out to be the <b>metal counter-ion</b> of the reagent. That single idea explains the famous KCN-versus-AgCN puzzle.',
      },
      {
        t: 'p',
        html: 'For <b>aryl halides</b> the port is jammed shut (resonance welds the C–X bond), so an unactivated ring needs one of two special tricks: either <b>force</b> the substitution under brutal conditions (Dow’s process) or <b>rip a benzyne intermediate</b> into existence with a ferociously strong base. (A ring activated by electron-withdrawing groups has an easier route, addition–elimination.) Meanwhile the ring itself stays open for electrophilic business, where the halogen quietly steers incoming groups to the ortho/para seats even while slowing the whole reaction down.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions:</b> The substitution product map assumes an sp<sup>3</sup> (alkyl) halide reacting under conditions that favour substitution over elimination — pair a bulky strong base with a 3° halide and you will get an alkene, not the substitution product, however tempting the map looks. The ambident counter-ion rule is a strong tendency, not an inviolable law. And the benzyne pathway needs an extremely strong base (e.g. NaNH<sub>2</sub>); ordinary hydroxide will not trigger it under ordinary conditions.',
      },

      { t: 'part', title: 'Key definitions and the substitution product map' },
      {
        t: 'p',
        html: '<b>Nucleophilic substitution product map (alkyl halides, R–X).</b> Choose the reagent, get the product:<br>• <b>Alcohol:</b> R–X + aq. KOH/NaOH → R–OH<br>• <b>Ether (Williamson synthesis):</b> R–X + Na–O–R′ → R–O–R′<br>• <b>Ester:</b> R–X + R′COOAg → R′COO–R<br>• <b>Iodide (Finkelstein):</b> R–X + NaI →<sup>dry acetone</sup> R–I<br>• <b>Nitrile / alkyl cyanide:</b> R–X + KCN → R–CN (C-attack)<br>• <b>Isocyanide / alkyl isocyanide:</b> R–X + AgCN → R–NC (N-attack)<br>• <b>Nitrite (ester of nitrous acid):</b> R–X + KNO<sub>2</sub> → R–O–N=O (O-attack)<br>• <b>Nitroalkane:</b> R–X + AgNO<sub>2</sub> → R–NO<sub>2</sub> (N-attack)<br>• <b>Amine (progressive):</b> R–X + NH<sub>3</sub> → R–NH<sub>2</sub> →<sup>R–X</sup> R<sub>2</sub>NH →<sup>R–X</sup> R<sub>3</sub>N →<sup>R–X</sup> R<sub>4</sub>N<sup>+</sup>X<sup>−</sup><br>• <b>Thiol / thioether:</b> R–X + KSH → R–SH; with NaSR′ → R–S–R′<br>• <b>Higher alkyne:</b> R–X + R′C≡C–Na → R′C≡C–R',
      },
      {
        t: 'p',
        html: '<b>Reduction of haloalkanes:</b> R–X → R–H<br>with Zn/HCl, or LiAlH<sub>4</sub>, or H<sub>2</sub>/Pd (the halogen is replaced by hydrogen, giving the parent alkane).',
      },
      {
        t: 'def',
        term: 'Ambident nucleophile',
        html: 'a nucleophile that can attack through <b>either of two different atoms</b>, giving two different products. The two classic pairs:<br>• <b>Cyanide CN<sup>−</sup>:</b> carbon or nitrogen.<br>• <b>Nitrite NO<sub>2</sub><sup>−</sup>:</b> oxygen or nitrogen.',
      },
      {
        t: 'def',
        term: 'The counter-ion rule (key definition)',
        html: 'with the <b>ionic potassium</b> reagent the nucleophile attacks through its carbon (CN<sup>−</sup>) or oxygen (NO<sub>2</sub><sup>−</sup>); with the <b>covalent silver</b> reagent it attacks through nitrogen. Hence:<br>KCN → R–CN (nitrile)<br>AgCN → R–NC (isocyanide)<br>KNO<sub>2</sub> → R–ONO (nitrite)<br>AgNO<sub>2</sub> → R–NO<sub>2</sub> (nitroalkane)',
      },

      { t: 'part', title: 'Key mechanisms (haloarenes)' },
      {
        t: 'p',
        html: 'Aryl halides need their own playbook. There are three ways to bring about nucleophilic substitution, and a separate electrophilic story.',
      },
      {
        t: 'p',
        html: '<b>A. Nucleophilic substitution by addition–elimination (activated rings)</b><br>When strong electron-withdrawing groups sit ortho/para to the halogen, the nucleophile adds first (forming a resonance-stabilised carbanion) and the halide leaves second — the mechanism developed in Topic 02. The more o/p-EWGs, the faster.',
      },
      {
        t: 'p',
        html: '<b>B. Dow’s process (the industrial route to phenol)</b><br>An unactivated aryl halide will still undergo substitution if the conditions are violent enough:<br>C<sub>6</sub>H<sub>5</sub>Cl + NaOH →<sup>623 K, 300 atm</sup> C<sub>6</sub>H<sub>5</sub>ONa →<sup>H⁺</sup> C<sub>6</sub>H<sub>5</sub>OH<br>Balanced, the first step is C<sub>6</sub>H<sub>5</sub>Cl + 2NaOH → C<sub>6</sub>H<sub>5</sub>ONa + NaCl + H<sub>2</sub>O.<br>The brutal temperature and pressure are exactly what the strong C–X bond of a haloarene demands. (Exams treat this as forced substitution. <sup>14</sup>C labelling shows that at these temperatures much of the reaction in fact goes through benzyne, giving both ipso and cine phenol.)',
      },
      {
        t: 'p',
        html: '<b>C. The benzyne (elimination–addition) mechanism</b><br>With an extremely strong base such as sodamide (NaNH<sub>2</sub>) in liquid ammonia, chlorobenzene reacts by a completely different route. First the base removes a hydrogen ortho to the halogen and the halide leaves, generating a highly reactive <b>benzyne</b> (dehydrobenzene) with a strained extra bond across two ring carbons; then the nucleophile adds across that bond:<br>C<sub>6</sub>H<sub>5</sub>Cl →<sup>NaNH₂</sup> [benzyne] →<sup>NH₃</sup> C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>',
      },
      { t: 'fig', id: 'c12-06-fig-6.6' },
      {
        t: 'p',
        html: '<b>The fingerprint — cine substitution:</b> because the nucleophile can add to either end of the benzyne bond, a substituted substrate gives a mixture of positions. For example, p-chlorotoluene with NaNH<sub>2</sub> yields both m- and p-toluidine — a tell-tale that the benzyne route, not direct displacement, was operating.',
      },
      {
        t: 'p',
        html: '<b>D. Electrophilic substitution of haloarenes</b><br>The ring is still aromatic, so it undergoes the usual electrophilic reactions — but the halogen is <b>deactivating</b> (its −I effect withdraws electron density, slowing the ring) yet <b>ortho/para-directing</b> (its lone-pair +R effect feeds electron density specifically to the o/p positions). So products are slower to form than for benzene but land at o/p, usually mainly p, because the o-position is more crowded:<br>• <b>Halogenation:</b> with Cl<sub>2</sub> over anhydrous FeCl<sub>3</sub> (or AlCl<sub>3</sub>) → o- and p-dichlorobenzene.<br>• <b>Nitration:</b> with conc. HNO<sub>3</sub> and H<sub>2</sub>SO<sub>4</sub> → o- and p-nitro​chloro​benzene.<br>• <b>Sulphonation:</b> with conc. H<sub>2</sub>SO<sub>4</sub> → the o- and p-isomers of chloro​benzene​sulphonic acid.<br>• <b>Friedel–Crafts</b> (alkylation or acylation): with CH<sub>3</sub>Cl or CH<sub>3</sub>COCl over anhydrous AlCl<sub>3</sub> → o- and p-products.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Starting from bromoethane, give reagents to obtain (a) ethanol, (b) ethyl methyl ether, (c) propanenitrile, (d) ethanamine.',
        steps: [
          'Read each target off the product map:',
          '(a) <b>ethanol</b> — warm with aqueous KOH: C<sub>2</sub>H<sub>5</sub>Br + aq. KOH → C<sub>2</sub>H<sub>5</sub>OH.',
          '(b) <b>ethyl methyl ether</b> — Williamson synthesis with sodium methoxide: C<sub>2</sub>H<sub>5</sub>Br + CH<sub>3</sub>ONa → C<sub>2</sub>H<sub>5</sub>OCH<sub>3</sub>.',
          '(c) <b>propanenitrile</b> — KCN (C-attack adds one carbon): C<sub>2</sub>H<sub>5</sub>Br + KCN → C<sub>2</sub>H<sub>5</sub>CN.',
          '(d) <b>ethanamine</b> — excess ammonia: C<sub>2</sub>H<sub>5</sub>Br + NH<sub>3</sub> (excess) → C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub>.',
        ],
        ans: '(a) aq. KOH; (b) CH<sub>3</sub>ONa; (c) KCN; (d) excess NH<sub>3</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Bromoethane is treated separately with (i) KCN and (ii) AgCN. Name the two products.',
        steps: [
          '<b>The trap & the shortcut.</b> Don’t overthink — apply the counter-ion rule directly. <b>K</b>CN (ionic) → attack through <b>C</b>arbon → <b>nitrile</b>. <b>Ag</b>CN (covalent) → attack through <b>N</b>itrogen → <b>isocyanide</b>.',
          '(i) C<sub>2</sub>H<sub>5</sub>CN — <b>propanenitrile (ethyl cyanide)</b>.',
          '(ii) C<sub>2</sub>H<sub>5</sub>NC — <b>ethyl isocyanide (ethyl carbylamine)</b>.',
          '(<b>Memory hook:</b> “silver = nitrogen.”)',
        ],
        ans: '(i) propanenitrile; (ii) ethyl isocyanide.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: '1-bromopropane is treated with AgNO<sub>2</sub>, and separately with KNO<sub>2</sub>. Identify both products, then state which product on reduction gives a primary amine.',
        steps: [
          '<b>Ambident nitrite, counter-ion rule:</b> AgNO<sub>2</sub> (covalent) → <b>N-attack</b> → <b>1-nitropropane</b> (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NO<sub>2</sub>). KNO<sub>2</sub> (ionic) → <b>O-attack</b> → <b>propyl nitrite</b> (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>O–N=O).',
          '<b>Reduction:</b> a <b>nitroalkane</b> reduces to a primary amine (R–NO<sub>2</sub> →<sup>[H]</sup> R–NH<sub>2</sub>), whereas an alkyl nitrite does not give the amine this way. So the AgNO<sub>2</sub> product (1-nitropropane) reduces to <b>propan-1-amine</b>.',
        ],
        ans: 'AgNO<sub>2</sub> → 1-nitropropane; KNO<sub>2</sub> → propyl nitrite; the nitroalkane reduces to propan-1-amine.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'p-chlorotoluene is treated with sodamide (NaNH<sub>2</sub>) in liquid ammonia and gives a mixture of two isomeric toluidines. Identify them, name the mechanism, and explain why a mixture (rather than a single product) results.',
        steps: [
          '<b>Mechanism:</b> sodamide is strong enough to trigger the <b>benzyne (elimination–addition)</b> route, not direct displacement. The base removes a hydrogen ortho to the chlorine, chlorine leaves, and a benzyne (with a strained extra bond between the carbon that bore Cl and its neighbour) forms.',
          '<b>Why a mixture:</b> the amide nucleophile (NH<sub>2</sub><sup>−</sup>) can add to <b>either</b> carbon of that benzyne bond. Adding to the original C–Cl carbon gives <b>p-toluidine</b>; adding to the adjacent carbon gives <b>m-toluidine</b>. The m-toluidine, with the new group on the carbon next to the one that held the chlorine, is the <b>cine substitution</b> product — the signature of a benzyne intermediate.',
        ],
        ans: 'm-toluidine and p-toluidine, via the benzyne (elimination–addition) mechanism; the nucleophile can attach at either end of the benzyne bond, and attachment at the neighbouring carbon is cine substitution (m-toluidine).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Convert chloroethane into (i) ethanol, (ii) ethyl ethanoate (an ester), (iii) ethanethiol — give the reagent for each.',
            a: '(i) aq. KOH; (ii) CH<sub>3</sub>COOAg (silver ethanoate); (iii) KSH.',
          },
          {
            q: '[NEET] Which reagent converts bromomethane into methyl isocyanide: KCN, AgCN, NH<sub>3</sub>, or NaNO<sub>2</sub>?',
            a: '<b>AgCN</b> (covalent silver → N-attack → isocyanide).',
          },
          {
            q: '[JEE Main] Name the industrial process and conditions used to make phenol from chlorobenzene, and write the equation.',
            a: '<b>Dow’s process</b>, 623 K, 300 atm: C<sub>6</sub>H<sub>5</sub>Cl + 2NaOH → C<sub>6</sub>H<sub>5</sub>ONa + NaCl + H<sub>2</sub>O, then C<sub>6</sub>H<sub>5</sub>ONa →<sup>H⁺</sup> C<sub>6</sub>H<sub>5</sub>OH.',
          },
          {
            q: '[JEE Main] Chlorobenzene undergoes nitration far more slowly than benzene, yet gives mainly ortho and para products. Explain both observations in one sentence each.',
            a: '<b>Slow:</b> the halogen’s −I effect deactivates (withdraws electron density from) the ring; <b>o/p:</b> its lone-pair +R effect releases electron density specifically to the ortho/para carbons.',
          },
          {
            q: '[JEE Advanced] Explain, using a labelled benzyne intermediate, why chlorobenzene carrying a <sup>14</sup>C label at the C–Cl carbon, treated with NaNH<sub>2</sub>, yields aniline with the label distributed over two ring positions.',
            a: 'The benzyne bond forms between the labelled carbon and its neighbour; NH<sub>2</sub><sup>−</sup> adds to either carbon of that symmetric bond. In about half the aniline, NH<sub>2</sub> sits on the labelled carbon; in the other half it sits on the neighbour (cine substitution), so the label is one carbon away.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The reaction of an alkyl halide with AgNO<sub>2</sub> gives mainly:',
        opts: [
          { label: 'an alkyl nitrite', nudge: '<b>(a)</b> the nitrite (R–ONO) is the potassium-salt (O-attack) product — the classic ambident swap.' },
          { label: 'a nitroalkane', nudge: null },
          { label: 'an amine', nudge: '<b>(c)</b> amines come from NH<sub>3</sub>, not nitrite.' },
          { label: 'an alcohol', nudge: '<b>(d)</b> alcohols come from aqueous alkali.' },
        ],
        correct: 1,
        solution: 'Covalent silver nitrite directs attack through nitrogen → nitroalkane (R–NO<sub>2</sub>). This is clearest with a primary halide; a tertiary halide gives mostly the nitrite or an alkene, which is why the rule is a strong tendency.',
      },
      {
        t: 'mcq',
        q: 'Williamson synthesis is used to prepare:',
        opts: [
          { label: 'amines', nudge: '<b>(a)</b> uses NH<sub>3</sub> — different reagent, different product.' },
          { label: 'ethers', nudge: null },
          { label: 'nitriles', nudge: '<b>(c)</b> uses KCN — different reagent, different product.' },
          { label: 'thiols', nudge: '<b>(d)</b> uses KSH — different reagent, different product.' },
        ],
        correct: 1,
        solution: 'An alkyl halide with a sodium alkoxide (R–X + NaOR′) gives an ether by S<sub>N</sub>2.',
      },
      {
        t: 'mcq',
        q: 'Chlorobenzene is converted to phenol industrially by:',
        opts: [
          { label: 'reaction with aqueous KOH at room temperature', nudge: '<b>(a)</b> room-temperature hydroxide does not touch an unactivated haloarene.' },
          { label: 'Dow’s process (NaOH, 623 K, 300 atm)', nudge: null },
          { label: 'the Finkelstein reaction', nudge: '<b>(c)</b> Finkelstein swaps halogens on alkyl halides.' },
          { label: 'Friedel–Crafts acylation', nudge: '<b>(d)</b> acylation adds an acyl group, it does not make phenol.' },
        ],
        correct: 1,
        solution: 'The strong aryl C–Cl bond requires the forcing conditions of Dow’s process.',
      },
      {
        t: 'mcq',
        q: 'The formation of both m- and p-toluidine from p-chlorotoluene and NaNH<sub>2</sub> is evidence for:',
        opts: [
          { label: 'the S<sub>N</sub>1 mechanism', nudge: '<b>(a)</b> aryl halides do not undergo S<sub>N</sub>1.' },
          { label: 'the S<sub>N</sub>2 mechanism', nudge: '<b>(b)</b> aryl halides do not undergo S<sub>N</sub>2.' },
          { label: 'the addition–elimination mechanism', nudge: '<b>(c)</b> addition–elimination keeps the nucleophile at the same carbon (no scrambling), so it cannot explain the m-isomer.' },
          { label: 'the benzyne (elimination–addition) mechanism', nudge: null },
        ],
        correct: 3,
        solution: 'A position-scrambled product mixture, containing the cine product, is the hallmark of a benzyne intermediate.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Swapping the ambident products.</b> Lock it in: <b>K</b>CN → <b>C</b>arbon → nitrile; <b>Ag</b>CN → <b>N</b>itrogen → isocyanide. Likewise KNO<sub>2</sub> → O → nitrite; AgNO<sub>2</sub> → N → nitroalkane.',
          '<b>Confusing the nitrite ester with the nitroalkane.</b> R–O–N=O (alkyl nitrite) reduces to an alcohol, R–OH; R–NO<sub>2</sub> (nitroalkane) reduces to a primary amine. Only the nitroalkane is the amine precursor.',
          '<b>Expecting aryl halides to react like alkyl halides with mild nucleophiles.</b> Unactivated ones need Dow-level force or a benzyne-forming base; ordinary aqueous KOH at room temperature does nothing. (Electron-withdrawing groups at o/p open the easier addition–elimination route.)',
          '<b>Calling halogen an activating group because it is o/p-directing.</b> Halogens are deactivating (overall −I) yet o/p-directing (lone-pair +R). The two are not contradictory — speed and orientation are set by different effects.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy):</b> For “name the product” questions, run the reagent through one mental filter: which atom of the nucleophile actually attacks? For ordinary nucleophiles it is obvious; for the two ambident pairs use the <b>“silver = nitrogen”</b> shortcut and you will never miss the isocyanide/nitroalkane trap. For haloarene questions, first ask “is the ring activated (o/p-EWG), forced (Dow), or attacked by a super-base (benzyne)?” — that one triage picks the mechanism instantly.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Substitution product map (R–X →)',
            note: 'aq. KOH → alcohol; NaOR′ → ether (Williamson); R′COOAg → ester; NaI/acetone → iodide; KCN → nitrile; AgCN → isocyanide; KNO<sub>2</sub> → nitrite; AgNO<sub>2</sub> → nitroalkane; NH<sub>3</sub> → amine (→ 2°, 3°, 4°); KSH → thiol; R′C≡CNa → higher alkyne.',
          },
          {
            f: 'Reduction',
            note: 'R–X → R–H, with Zn/HCl, LiAlH<sub>4</sub> or H<sub>2</sub>/Pd.',
          },
          {
            f: 'Ambident rule (“silver = nitrogen”)',
            note: 'KCN → R–CN, AgCN → R–NC; KNO<sub>2</sub> → R–ONO, AgNO<sub>2</sub> → R–NO<sub>2</sub>.',
          },
          {
            f: 'Haloarene nucleophilic substitution (NAS)',
            note: 'activated (o/p-EWG) → addition–elimination; unactivated industrial → <b>Dow’s process</b> (NaOH, 623 K, 300 atm → phenol); super-base (NaNH<sub>2</sub>) → <b>benzyne</b>, which can give <b>cine substitution</b> (p-chlorotoluene: m-toluidine beside p-toluidine).',
          },
          {
            f: 'Haloarene electrophilic substitution (EAS)',
            note: 'halogen is <b>deactivating but o/p-directing</b>; gives o/p products in halogenation, nitration, sulphonation, Friedel–Crafts.',
          },
        ],
        aids: [
          'R–X is the synthetic hub — pick the nucleophile, get the group; for the two ambident pairs, “silver = nitrogen.”',
        ],
      },
    ],
  },
];
