import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 04, Aromatic Hydrocarbons: pp. 430–438 of the Class 11
 * Chemistry Master Reference, word for word, split at its Sections 1 to 8.
 * Figure 9.8 (benzene: Kekulé structures, hybrid, π cloud) and Figure 9.9 (the
 * EAS mechanism), both drawn on the figure page p. 433, are redrawn in
 * lib/diagrams/chemistry-11-09b.ts and placed beside the text they illustrate;
 * these pages draw no other structure. Group bonds use an en dash (–OH,
 * C<sub>6</sub>H<sub>5</sub>–); E, R and effect labels (−I, +R) are upright;
 * formulas inside an arrow condition use subscript digits (→<sup>anhyd. AlCl₃</sup>).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 430–438 ─────────────────────────
  {
    n: '04',
    title: 'Aromatic Hydrocarbons',
    kalam: 'Every important reaction of benzene shares one three-step mechanism.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Arenes are the highest-yield part of the chapter. CBSE Boards ask the benzene structure/resonance and a named electrophilic substitution (often nitration or Friedel–Crafts). NEET reliably tests aromaticity (Hückel’s rule), the directive influence of groups, and activating/deactivating order. JEE Main and Advanced lean heavily on the electrophilic substitution mechanism and on predicting orientation in substituted benzenes — chlorobenzene’s “deactivating yet o/p-directing” behaviour is a perennial favourite.',
      },
      {
        t: 'p',
        html: 'The word <b>aromatic</b> began as a description of smell — many of the first such compounds, like benzaldehyde (almonds) and toluene (balsam), were fragrant. But chemistry kept the word for a deeper reason: a special, almost stubborn <b>stability</b> that sets these ring compounds apart from ordinary unsaturated hydrocarbons. The flagship is <b>benzene</b>, C<sub>6</sub>H<sub>6</sub> — six carbons in a flat ring, each bonded to one hydrogen.',
      },
      {
        t: 'p',
        html: 'Look at that formula and your alkene instincts should rebel. C<sub>6</sub>H<sub>6</sub> is enormously hydrogen-poor; it looks like it should be packed with double bonds and should decolourise bromine water and Baeyer’s reagent on contact, the way every alkene and alkyne does. Yet benzene does almost none of this. It refuses to add bromine across a “double bond,” it survives Baeyer’s reagent, and instead of adding reagents it prefers to <b>substitute</b> — swapping a ring hydrogen for a new group while keeping the ring intact. Something is protecting that ring.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the six π electrons not as three fixed double bonds but as a single, continuous <b>doughnut of electron density</b> spread evenly above and below the flat ring. Each carbon is sp<sup>2</sup> hybridised, contributing one unhybridised p orbital perpendicular to the ring; all six overlap sideways into one delocalised cloud. Because the electrons are shared by all six carbons rather than pinned between two, the molecule is far more stable than any imaginary “cyclohexatriene” with alternating bonds would be. This extra stability is the <b>resonance energy</b> (about 150 kJ mol<sup>−1</sup> for benzene), and it is the single fact from which all of arene chemistry flows: reactions that would destroy the delocalised ring (addition) are resisted; reactions that preserve it (substitution) are favoured.',
      },
      {
        t: 'p',
        html: 'The historical clue was the bonds themselves. Kekulé first drew benzene as a ring with alternating single and double bonds, but experiment shows <b>all six carbon–carbon bonds are identical</b>, each 139 pm long — neatly between a single bond (154 pm) and a double bond (134 pm). There are no “real” double bonds to find; the true structure is a <b>resonance hybrid</b> of Kekulé’s two equivalent drawings, best represented by a hexagon with a circle inside.',
      },
      { t: 'fig', id: 'c11-09-fig-9.8' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Three guard-rails. First, “aromatic” is not just “has a ring with double bonds” — a compound is aromatic only if it is <b>cyclic, planar, fully conjugated, and contains (4<i>n</i> + 2) π electrons</b> (Hückel’s rule). Benzene satisfies it with <i>n</i> = 1 (6 π electrons). Second, benzene can be forced to undergo addition (hydrogenation, or chlorination in UV light), but only under vigorous conditions that overpower the aromatic stability. Third, the ordinary tests for unsaturation (bromine water, Baeyer’s reagent) <b>fail</b> for arenes — a key diagnostic that distinguishes benzene from alkenes and alkynes.',
      },

      { t: 'part', title: 'Key definitions, formulae and reactions' },
      {
        t: 'formula',
        kicker: 'General formula (benzene series)',
        main: 'C<sub><i>n</i></sub>H<sub>2<i>n</i>−6</sub>',
        legend: ['<i>n</i> = number of carbon atoms (<i>n</i> ≥ 6)'],
        note: 'Arene: an aromatic hydrocarbon. Benzene is C<sub>6</sub>H<sub>6</sub>.',
      },
      {
        t: 'def',
        term: 'Aromaticity (Hückel’s rule)',
        html: 'a species is aromatic if it is <b>cyclic, planar, fully conjugated</b>, and has (4<i>n</i> + 2) delocalised π electrons (<i>n</i> = 0, 1, 2, …). Benzene: 6 π electrons, <i>n</i> = 1.',
      },
      {
        t: 'def',
        term: 'Benzene geometry',
        html: 'planar, regular hexagon; each C is sp<sup>2</sup>; all C–C bonds equal at 139 pm; all bond angles 120°; six delocalised π electrons.',
      },
      {
        t: 'def',
        term: 'Resonance energy of benzene',
        html: '≈ 150 kJ mol<sup>−1</sup> — the stabilisation gained from delocalisation.',
      },
      {
        t: 'def',
        term: 'Characteristic reaction',
        html: '<b>electrophilic aromatic substitution (EAS)</b> — an electrophile E<sup>+</sup> replaces a ring H, preserving aromaticity.',
      },
      {
        t: 'p',
        html: '• <b>Activating, o/p-directing groups:</b> –OH, –NH<sub>2</sub>, –NHR, –OR, –NHCOCH<sub>3</sub>, –CH<sub>3</sub> (alkyl), –C<sub>6</sub>H<sub>5</sub> (electron-donating).<br>• <b>Deactivating, o/p-directing groups:</b> the halogens –F, –Cl, –Br, –I (the exception — they slow the ring but still send electrophiles to o/p).<br>• <b>Deactivating, m-directing groups:</b> –NO<sub>2</sub>, –CN, –CHO, –COR, –COOH, –COOR, –SO<sub>3</sub>H (electron-withdrawing).',
      },
      { t: 'p', html: 'The energy quantities here are in kJ mol<sup>−1</sup>.' },

      { t: 'part', title: 'Key procedures and mechanisms' },
      {
        t: 'p',
        html: '<b>3.0 Where arenes sit, and how we name them</b><br>Aromatic hydrocarbons are the third great family of the chapter, alongside the open-chain (aliphatic) alkanes/alkenes/alkynes and the ring (alicyclic) cycloalkanes. <b>Nomenclature</b> of benzene derivatives uses three styles: many keep trivial names (toluene for methylbenzene, aniline for aminobenzene, phenol for hydroxybenzene); disubstituted benzenes use the prefixes <b>ortho- (1,2), meta- (1,3), para- (1,4)</b>; and the ring as a substituent is the <b>phenyl</b> group (C<sub>6</sub>H<sub>5</sub>–). It is worth distinguishing <b>phenyl</b> (C<sub>6</sub>H<sub>5</sub>–, the ring attached directly) from <b>benzyl</b> (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>–, the ring plus a CH<sub>2</sub>), and the general term <b>aryl (Ar–)</b> for any aromatic group, because these names recur throughout organic chemistry.',
      },
      {
        t: 'p',
        html: 'Disubstituted benzenes also illustrate <b>positional isomerism</b>: the three dimethylbenzenes — ortho-, meta-, and para-xylene — have the same formula C<sub>8</sub>H<sub>10</sub> but differ only in the relative placement of the two methyl groups, and they have measurably different melting and boiling points. Recognising o/m/p relationships quickly is the same skill the directive-influence section will demand.',
      },
      {
        t: 'p',
        html: '<b>3.1 Preparing benzene — three laboratory routes</b><br><b>(a) Cyclic polymerisation of ethyne.</b> Three molecules of ethyne, passed through a red-hot iron tube at about 873 K, cyclise to benzene — the reaction forward-pointed from the alkynes topic (Topic 03).<br>3 HC≡CH →<sup>red-hot Fe tube, 873 K</sup> C<sub>6</sub>H<sub>6</sub>',
      },
      {
        t: 'p',
        html: '<b>(b) Decarboxylation of aromatic acids.</b> Heating the sodium salt of benzoic acid with soda lime strips the –COOH as carbonate, leaving benzene.<br>C<sub>6</sub>H<sub>5</sub>COONa + NaOH →<sup>CaO, Δ</sup> C<sub>6</sub>H<sub>6</sub> + Na<sub>2</sub>CO<sub>3</sub>',
      },
      {
        t: 'p',
        html: '<b>(c) Reduction of phenol.</b> Phenol vapours passed over heated zinc dust are reduced to benzene.<br>C<sub>6</sub>H<sub>5</sub>OH + Zn → C<sub>6</sub>H<sub>6</sub> + ZnO',
      },
      {
        t: 'p',
        html: '<b>3.1b Physical properties and the evidence for resonance energy</b><br>Benzene and its homologues are <b>non-polar</b> molecules: colourless liquids (or low-melting solids) with a characteristic aroma, <b>immiscible with water</b> but freely soluble in organic solvents, and <b>lighter than water</b>. Their most distinctive everyday signature is the <b>sooty, luminous flame</b> they give on burning — a direct consequence of a high carbon-to-hydrogen ratio that leaves unburnt carbon glowing in the flame. They are also <b>toxic</b>, a point returned to at the end of this topic.',
      },
      {
        t: 'p',
        html: 'How do we know the ring carries that extra stability? The cleanest evidence is the <b>heat of hydrogenation</b>. Adding hydrogen to cyclohexene (one double bond) releases about 120 kJ mol<sup>−1</sup>, so a hypothetical “cyclohexatriene” with three isolated double bonds should release roughly three times that, about 360 kJ mol<sup>−1</sup>. Benzene actually releases far less on full hydrogenation than this estimate — the shortfall, around 150 kJ mol<sup>−1</sup>, is precisely the <b>resonance (delocalisation) energy</b>: the energy benzene does not have to give up because it was extra-stable to begin with. The number measured this way matches the resonance energy quoted earlier and is the quantitative backbone of the whole “aromatic stability” idea.',
      },
      {
        t: 'p',
        html: '<b>3.2 The master reaction — electrophilic aromatic substitution (EAS)</b><br>Every important reaction of benzene shares one three-step mechanism. Learn it once and the individual reactions become variations on a theme.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — generate the electrophile E<sup>+</sup>.</b> A reagent plus a catalyst produces a strong electrophile (e.g. NO<sub>2</sub><sup>+</sup>, Cl<sup>+</sup>, R<sup>+</sup>, RCO<sup>+</sup>).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — form the arenium ion (sigma complex).</b> The π cloud attacks E<sup>+</sup>; one carbon becomes sp<sup>3</sup> and the positive charge is spread over the ortho and para carbons as a resonance-stabilised <b>arenium ion</b> (cyclohexadienyl cation). Aromaticity is temporarily lost — this is the slow, rate-determining step.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — restore aromaticity.</b> A base plucks the proton off the sp<sup>3</sup> carbon, the electrons fall back into the ring, and the aromatic sextet is regenerated, giving the substituted benzene. The ring “pays” to host the electrophile in step 2 and “recovers” its stability in step 3 — which is exactly why benzene substitutes rather than adds.',
      },
      { t: 'fig', id: 'c11-09-fig-9.9' },
      {
        t: 'p',
        html: '<b>3.3 The five electrophilic substitutions</b><br><b>Nitration.</b> Benzene + concentrated nitric acid in concentrated sulphuric acid at 323–333 K gives nitrobenzene; the electrophile is the <b>nitronium ion</b> NO<sub>2</sub><sup>+</sup> (formed as HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> ⇌ NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup>).<br>C<sub>6</sub>H<sub>6</sub> + HNO<sub>3</sub> →<sup>conc. H₂SO₄</sup> C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>Halogenation.</b> Benzene + Cl<sub>2</sub> (or Br<sub>2</sub>) with a <b>Lewis-acid catalyst</b> (anhydrous FeCl<sub>3</sub> or AlCl<sub>3</sub>) gives chlorobenzene; the catalyst polarises the halogen to deliver Cl<sup>+</sup>.<br>C<sub>6</sub>H<sub>6</sub> + Cl<sub>2</sub> →<sup>anhyd. FeCl₃</sup> C<sub>6</sub>H<sub>5</sub>Cl + HCl',
      },
      {
        t: 'p',
        html: '<b>Sulphonation.</b> Benzene heated with fuming sulphuric acid (oleum) gives benzenesulphonic acid; the electrophile is SO<sub>3</sub>. The reaction is notably <b>reversible</b>.<br>C<sub>6</sub>H<sub>6</sub> + H<sub>2</sub>SO<sub>4</sub>(oleum) ⇌ C<sub>6</sub>H<sub>5</sub>SO<sub>3</sub>H + H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>Friedel–Crafts alkylation.</b> Benzene + an alkyl halide with anhydrous AlCl<sub>3</sub> attaches an alkyl group; the electrophile is the <b>carbocation</b> R<sup>+</sup>.<br>C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>Cl →<sup>anhyd. AlCl₃</sup> C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> + HCl',
      },
      {
        t: 'p',
        html: '<b>Friedel–Crafts acylation.</b> Benzene + an acyl chloride with anhydrous AlCl<sub>3</sub> attaches an acyl group; the electrophile is the <b>acylium ion</b> RCO<sup>+</sup>.<br>C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl →<sup>anhyd. AlCl₃</sup> C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl',
      },
      {
        t: 'p',
        html: '<b>3.4 Addition and combustion (the aromaticity-breaking reactions)</b><br>Under forcing conditions benzene can be made to add, sacrificing aromaticity:<br>C<sub>6</sub>H<sub>6</sub> + 3H<sub>2</sub> →<sup>Ni, 473–523 K</sup> cyclohexane;<br>C<sub>6</sub>H<sub>6</sub> + 3Cl<sub>2</sub> →<sup>UV light</sup> C<sub>6</sub>H<sub>6</sub>Cl<sub>6</sub>',
      },
      {
        t: 'p',
        html: 'The second product, benzene hexachloride (BHC; its γ-isomer is gammexane, “lindane”), was once an insecticide. Benzene <b>burns with a sooty, luminous flame</b> because of its high carbon-to-hydrogen ratio — a quick visual hint (not proof) of an aromatic, since other carbon-rich compounds such as ethyne also burn smokily:<br>2 C<sub>6</sub>H<sub>6</sub> + 15 O<sub>2</sub> → 12 CO<sub>2</sub> + 6 H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>3.5 Directive influence — where does the next group go?</b><br>When benzene already carries a substituent, that group decides <b>both</b> how fast the ring reacts <b>and</b> where the next electrophile attaches. Two families:<br>• <b>Ortho/para-directing groups</b> push electron density into the ring, stabilising the arenium ion when attack is at the ortho and para positions. Most of them are <b>activating</b> (faster than benzene): –OH, –NH<sub>2</sub>, –OR, –CH<sub>3</sub> and other alkyls. The <b>halogens are the exception</b> — their strong −I effect makes them <b>deactivating</b> (slower than benzene), yet their lone-pair donation by resonance still steers the electrophile to o/p.<br>• <b>Meta-directing groups</b> pull electron density out of the ring, are <b>deactivating</b>, and leave the meta arenium ion the least destabilised: –NO<sub>2</sub>, –COOH, –CHO, –SO<sub>3</sub>H, –CN, etc.',
      },
      {
        t: 'p',
        html: 'The reasoning is always the arenium-ion stability: draw the resonance structures of the cation for o-, m-, and p-attack and see which positions let the substituent help (for donors) or least hurt (for acceptors). For an <b>electron-donating</b> group, attack at the ortho and para positions produces an arenium ion with a resonance contributor in which the positive charge sits on the carbon bearing the group — exactly where a lone pair or the electron-rich alkyl group can stabilise it; meta attack gets no such help, so o/p wins and the whole ring is activated. For an <b>electron-withdrawing</b> group, that same o/p contributor places positive charge on the carbon bearing the group, right next to the group’s electron-poor atom (the N of –NO<sub>2</sub>, the C of –COOH) — strongly destabilising — so the least-bad option is meta, and the ring is deactivated overall.',
      },
      {
        t: 'p',
        html: 'A practical footnote on <b>Friedel–Crafts reactions</b>: they fail on strongly <b>deactivated</b> rings (for example, nitrobenzene does not undergo Friedel–Crafts alkylation or acylation, because the ring is too electron-poor for the weak carbocation/acylium electrophile). Alkylation also suffers from two side problems — <b>polyalkylation</b> (the first alkyl group is activating, so the product reacts further) and <b>carbocation rearrangement</b> (a primary R<sup>+</sup> can shift to a more stable secondary/tertiary cation before attacking). Acylation avoids both: the acylium ion does not rearrange, and the ketone product is deactivated, so the reaction stops cleanly at mono-substitution.',
      },
      {
        t: 'p',
        html: '<b>3.6 Carcinogenicity and toxicity</b><br>This topic closes with a sober note. <b>Polynuclear aromatic hydrocarbons (PAHs)</b> — fused-ring aromatics such as benzo[a]pyrene — are produced whenever organic matter burns incompletely: in tobacco smoke, vehicle exhaust, coal soot, and char-grilled food. Many PAHs are <b>carcinogenic</b>: once absorbed, they are metabolised in the body into species that can damage DNA. Benzene itself is <b>toxic</b> and a recognised carcinogen with prolonged exposure. This is why benzene is handled with care in the laboratory and why incomplete-combustion sources are a public-health concern — a direct, real-world reason the aromatic ring matters beyond the exam hall.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the equation, conditions, and the active electrophile for the nitration of benzene, and name the product.',
        steps: [
          '<b>Reagents/conditions:</b> concentrated HNO<sub>3</sub> with concentrated H<sub>2</sub>SO<sub>4</sub> (the “nitrating mixture”) at 323–333 K.',
          '<b>Electrophile:</b> the <b>nitronium ion</b> NO<sub>2</sub><sup>+</sup>, generated by HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> ⇌ NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup>.',
          '<b>Equation:</b><br>C<sub>6</sub>H<sub>6</sub> + HNO<sub>3</sub> →<sup>conc. H₂SO₄, 323–333 K</sup> C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + H<sub>2</sub>O',
          '<b>Product:</b> <b>nitrobenzene</b>.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Toluene is nitrated. Which product(s) predominate — ortho/para or meta — and is toluene more or less reactive than benzene?',
        steps: [
          '<b>Speed approach.</b> Identify the substituent’s class without drawing mechanisms: –CH<sub>3</sub> is an <b>alkyl group</b> → <b>electron-donating</b> → <b>activating and ortho/para-directing.</b> So nitration of toluene is <b>faster than benzene</b> and gives mainly <b>o-nitrotoluene and p-nitrotoluene</b> (little meta).',
          '<b>Trap:</b> students lump every group together; the rule is “alkyl = activating, o/p,” opposite to –NO<sub>2</sub>.',
        ],
        ans: 'o/p products predominate; toluene is <b>more</b> reactive than benzene.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — multi-concept: directive influence + reactivity',
        q: 'Nitrobenzene is treated with a second round of conc. HNO<sub>3</sub>/conc. H<sub>2</sub>SO<sub>4</sub>. (i) Predict the position of the incoming nitro group. (ii) State whether nitrobenzene reacts faster or slower than benzene, and explain both answers with the nature of –NO<sub>2</sub>.',
        steps: [
          '(i) The –NO<sub>2</sub> group is strongly <b>electron-withdrawing</b>, hence <b>meta-directing</b>. The second nitro group enters the <b>meta</b> position, giving mainly <b>1,3-dinitrobenzene</b>.',
          '(ii) Because –NO<sub>2</sub> pulls electron density out of the ring, it <b>deactivates</b> the ring — nitrobenzene reacts <b>more slowly</b> than benzene (the second nitration needs harsher conditions).',
          'The single idea behind both parts is that –NO<sub>2</sub> destabilises the arenium ion most for o/p attack, so the electrophile is funnelled to meta and the whole ring is less nucleophilic.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Chlorobenzene undergoes electrophilic substitution <b>more slowly</b> than benzene, yet the products are predominantly <b>ortho and para</b>. Resolve this apparent contradiction.',
        steps: [
          'The chlorine substituent exerts <b>two opposing electronic effects</b>:',
          '1. A strong −I <b>(inductive) effect</b>: chlorine is electronegative and withdraws σ-electron density from the ring, destabilising the positively charged arenium ion in every position. This makes chlorobenzene <b>less reactive</b> than benzene — hence the slower rate and “deactivating” label.',
          '2. A +R <b>(resonance/mesomeric) effect</b>: chlorine’s lone pairs can be donated into the ring through π overlap. This donation specifically stabilises the arenium ion when the electrophile attacks <b>ortho or para</b>, because only for those positions can a resonance structure be drawn placing positive charge on the carbon bearing chlorine (where the lone pair quenches it). The inductive effect dominates the <b>rate</b> (overall deactivation), while the resonance effect controls the <b>orientation</b> (o/p stabilisation). The two operate on different things — speed versus position — so there is no real contradiction: chlorobenzene is a <b>deactivating, ortho/para-directing</b> substituent, the textbook exception.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Draw the two Kekulé structures of benzene and explain, in one or two lines, why the real molecule has six equal C–C bonds.',
            a: 'The two Kekulé forms are equivalent resonance contributors; the true structure is their hybrid (a delocalised π sextet), so every C–C bond is identical (139 pm).',
          },
          {
            q: '[NEET] State Hückel’s rule and use it to decide whether benzene (6 π electrons) is aromatic.',
            a: 'A cyclic, planar, fully conjugated species with (4<i>n</i> + 2) π electrons is aromatic; benzene has 6 = 4(1) + 2 π electrons → aromatic.',
          },
          {
            q: '[JEE Main] Write the reagents, catalyst, and electrophile for (i) Friedel–Crafts acylation and (ii) sulphonation of benzene, and name each product.',
            a: '(i) acyl chloride (CH<sub>3</sub>COCl) + anhyd. AlCl<sub>3</sub>; electrophile CH<sub>3</sub>CO<sup>+</sup> (acylium); product <b>acetophenone</b>; (ii) oleum/fuming H<sub>2</sub>SO<sub>4</sub>; electrophile SO<sub>3</sub>; product <b>benzenesulphonic acid</b>.',
          },
          {
            q: '[JEE Main] Classify –OH, –NO<sub>2</sub>, –Cl, and –COOH as activating/deactivating and o/p- or m-directing.',
            a: '–OH: activating, o/p; –NO<sub>2</sub>: deactivating, m; –Cl: deactivating, o/p; –COOH: deactivating, m.',
          },
          {
            q: '[JEE Advanced] Explain, using arenium-ion resonance structures, why –OH is both strongly activating and ortho/para-directing.',
            a: 'The –OH lone pair is donated into the ring; for o/p attack a resonance structure places the positive charge on the carbon bearing –OH, where oxygen’s lone pair neutralises it — a stabilisation unavailable for meta attack, so o/p is both favoured and accelerated.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Benzene preferentially undergoes substitution rather than addition because:',
        opts: [
          { label: 'it has no π electrons', nudge: '<b>(a)</b> benzene is rich in π electrons.' },
          { label: 'addition would destroy its aromatic stability', nudge: null },
          { label: 'it is saturated', nudge: '<b>(c)</b> it is unsaturated by formula.' },
          { label: 'substitution needs no catalyst', nudge: '<b>(d)</b> most EAS reactions do need a catalyst — irrelevant to the real reason.' },
        ],
        correct: 1,
        solution: 'Substitution preserves the delocalised aromatic sextet; addition would consume it and lose the ≈ 150 kJ mol<sup>−1</sup> resonance energy.',
      },
      {
        t: 'mcq',
        q: 'Which species is the electrophile in the nitration of benzene?',
        opts: [
          { label: 'HNO<sub>3</sub>', nudge: '<b>(a)</b> nitric acid must first be activated.' },
          { label: 'NO<sub>2</sub><sup>−</sup>', nudge: '<b>(b)</b> the nitrite anion is a nucleophile, not an electrophile — a sign error.' },
          { label: 'NO<sub>2</sub><sup>+</sup>', nudge: null },
          { label: 'NO', nudge: '<b>(d)</b> nitric oxide is not formed here.' },
        ],
        correct: 2,
        solution: 'The nitronium ion NO<sub>2</sub><sup>+</sup> is generated by protonation of nitric acid by sulphuric acid.',
      },
      {
        t: 'mcq',
        q: 'Which group is <b>deactivating but ortho/para-directing</b>?',
        opts: [
          { label: '–CH<sub>3</sub>', nudge: '<b>(a)</b> –CH<sub>3</sub> is an activating o/p-director (an electron-donating alkyl group).' },
          { label: '–NO<sub>2</sub>', nudge: '<b>(b)</b> is deactivating but <b>meta</b>-directing.' },
          { label: '–Cl', nudge: null },
          { label: '–NH<sub>2</sub>', nudge: '<b>(d)</b> –NH<sub>2</sub> is a strongly activating o/p-director (lone-pair donation into the ring).' },
        ],
        correct: 2,
        solution: 'Halogens deactivate via −I yet direct o/p via lone-pair resonance — the standard exception.',
      },
      {
        t: 'mcq',
        q: 'Which set satisfies Hückel’s rule for aromaticity in benzene?',
        opts: [
          { label: 'cyclic, planar, 4<i>n</i> π electrons', nudge: '<b>(a)</b> 4<i>n</i> is the anti-aromatic count.' },
          { label: 'cyclic, planar, conjugated, (4<i>n</i> + 2) π electrons', nudge: null },
          { label: 'acyclic, conjugated, 6 π electrons', nudge: '<b>(c)</b> aromaticity needs a <b>ring</b>.' },
          { label: 'planar, 8 π electrons', nudge: '<b>(d)</b> 8 = 4(2) is not of the form 4<i>n</i> + 2.' },
        ],
        correct: 1,
        solution: 'Aromaticity requires a cyclic, planar, fully conjugated system with (4<i>n</i> + 2) π electrons; benzene has 6.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Expecting benzene to decolourise bromine water.</b> It does not — aromaticity blocks ordinary addition. <b>Pro-Tip:</b> a compound that resists Br<sub>2</sub> water and Baeyer’s reagent but burns with a sooty flame is almost certainly aromatic.',
          '<b>Calling halogens activating because they are o/p-directing.</b> Halogens are the exception: <b>deactivating yet o/p-directing.</b> <b>Pro-Tip:</b> rate is set by the inductive effect (−I → slower), orientation by resonance (+R → o/p).',
          '<b>Applying (4<i>n</i> + 2) without checking the structure.</b> The electron count matters <b>only</b> for a cyclic, planar, fully conjugated system. <b>Pro-Tip:</b> check ring + planar + conjugation first, then count π electrons.',
          '<b>Naming the reagent instead of the electrophile.</b> The attacking species is NO<sub>2</sub><sup>+</sup>, Cl<sup>+</sup>, R<sup>+</sup>, or RCO<sup>+</sup> — not HNO<sub>3</sub> or Cl<sub>2</sub> themselves. <b>Pro-Tip:</b> always write the generated electrophile in mechanism answers.',
        ],
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Benzene',
            note: 'C<sub>6</sub>H<sub>6</sub>; planar regular hexagon, sp<sup>2</sup>, all C–C = 139 pm, 120°; <b>6 delocalised π electrons</b>; resonance energy ≈ 150 kJ mol<sup>−1</sup>.',
          },
          { f: 'Aromaticity (Hückel)', note: 'cyclic + planar + fully conjugated + (4<i>n</i> + 2) π electrons.' },
          {
            f: 'Make benzene',
            note: '3 C<sub>2</sub>H<sub>2</sub> →<sup>red-hot Fe</sup> C<sub>6</sub>H<sub>6</sub>; C<sub>6</sub>H<sub>5</sub>COONa + NaOH/CaO → C<sub>6</sub>H<sub>6</sub>; C<sub>6</sub>H<sub>5</sub>OH + Zn → C<sub>6</sub>H<sub>6</sub>.',
          },
          {
            f: 'EAS (3 steps)',
            note: 'generate E<sup>+</sup> → arenium ion (rate-determining, aromaticity lost) → lose H<sup>+</sup> (aromaticity restored). Reactions: <b>nitration</b> (NO<sub>2</sub><sup>+</sup>), <b>halogenation</b> (Cl<sup>+</sup>, Lewis acid), <b>sulphonation</b> (SO<sub>3</sub>, reversible), <b>Friedel–Crafts alkylation</b> (R<sup>+</sup>) and <b>acylation</b> (RCO<sup>+</sup>).',
          },
          { f: 'Addition (forcing)', note: '+3H<sub>2</sub>/Ni → cyclohexane; +3Cl<sub>2</sub>/UV → BHC. Burns with <b>sooty flame</b>.' },
          {
            f: 'Directors',
            note: 'o/p <b>activating</b> = –OH, –NH<sub>2</sub>, –OR, –CH<sub>3</sub>; o/p <b>deactivating</b> = halogens (exception); <b>meta deactivating</b> = –NO<sub>2</sub>, –COOH, –CHO, –SO<sub>3</sub>H, –CN.',
          },
          {
            f: 'Carcinogenicity',
            note: 'polynuclear aromatic hydrocarbons (PAHs, e.g. benzo[a]pyrene) from incomplete combustion of coal, tobacco, and fuels are carcinogenic; benzene itself is toxic.',
          },
        ],
        aids: [
          '“Aromatic Substitutes, never Adds”',
          '“Halogens deactivate but still point o/p”',
          '“4<i>n</i> + 2 = aromatic, 4<i>n</i> = anti-aromatic” (for a cyclic, planar, fully conjugated ring).',
        ],
      },
    ],
  },
];
