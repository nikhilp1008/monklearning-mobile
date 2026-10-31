import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional Topics E to I, word for word from the Class 11
 * Chemistry Master Reference:
 * - E Counting Puzzles: Isomers, Hydrogenation Reversals, and Bond Tallies (pp. 447–448)
 * - F EAS Reactivity Rankings and the Order of Operations (pp. 448–450)
 * - G Terminal Alkynes: The Two Further Tests (pp. 450–451)
 * - H Summary Checklist (p. 451), kept as its own short Additional topic by
 *   Nikhil's decision, as in Chapters 7 and 8.
 * - I, the book's "Addendum P — What JEE and NEET Actually Ask"
 *   (pp. 452–455), kept as the last Additional topic.
 * Each addendum prints its practice answers right after its questions. Each
 * answer is set with its own question. These pages print no drawings.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic E · pp. 447–448 ─────────────────────────
  {
    n: 'E',
    title: 'Counting Puzzles: Isomers, Hydrogenation Reversals, and Bond Tallies',
    extra: true,
    kalam: 'A recurring JEE Main genre asks for a count — of aromatic isomers, of alkenes behind a given alkane, of σ and π bonds.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'A recurring JEE Main genre asks for a count — of aromatic isomers, of alkenes behind a given alkane, of σ and π bonds. The tools — counting distinct hydrogen environments (Topic 01) and the degree of unsaturation, DoU = (2 × carbons + 2 − hydrogens)/2 (first used in Additional topic B) — cover the ground; here they are assembled into the three exam shapes.',
      },

      { t: 'part', title: 'E1 — Aromatic isomers of a formula' },
      {
        t: 'p',
        html: 'For “substituted benzene derivatives of C<sub>8</sub>H<sub>10</sub>”: fix the ring (C<sub>6</sub>), then distribute the remaining two carbons. Either both go on as one ethyl (ethylbenzene, 1 structure) or as two methyls (ortho-, meta-, para-xylene, 3 structures). <b>Total: 4.</b> The method — partition the side-chain carbons, then enumerate positional isomers per partition — scales to any such formula.',
      },

      { t: 'part', title: 'E2 — “Which alkenes hydrogenate to this alkane?”' },
      {
        t: 'p',
        html: 'Reverse thinking: the alkane’s skeleton is fixed; a C=C can have existed between any two adjacent carbons that each bear at least one H in the alkane, with symmetry-equivalent positions counted once. For 2-methylbutane (isopentane), the distinct placements give: 2-methylbut-1-ene, 2-methylbut-2-ene, and 3-methylbut-1-ene — <b>3 alkenes</b>. Every C–C bond in 2-methylbutane joins two carbons that each carry hydrogen, and the three distinct bonds (CH<sub>3</sub>–CH, CH–CH<sub>2</sub>, CH<sub>2</sub>–CH<sub>3</sub>) give the three alkenes (the branch-methyl bond duplicates the first). A bond is ruled out only next to a quaternary carbon, which has no hydrogen, as in neopentane.',
      },

      { t: 'part', title: 'E3 — Bond tallies in fused aromatics' },
      {
        t: 'p',
        html: 'Count σ bonds as (C–C framework) + (C–H), and π bonds from the drawn Kekulé structure. Naphthalene, C<sub>10</sub>H<sub>8</sub>: 11 C–C σ bonds in the fused framework (each ring 6, sharing the fused edge: 6 + 6 − 1) plus 8 C–H = <b>19</b> σ; the five double bonds of any of its three Kekulé forms = <b>5</b> π. The count is invariant to which Kekulé form you draw — a good self-check.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — DoU-gated identification',
        q: 'A hydrocarbon X uses two moles of H<sub>2</sub> per mole on hydrogenation and has DoU = 3. What structural features must X have?',
        steps: [
          'Two moles of H<sub>2</sub> reduce exactly two π bonds (a triple bond would consume both by itself, or two double bonds); the remaining DoU of 1 is a ring (hydrogenation does not touch rings). So X = one ring + either two C=C or one C≡C. Ozonolysis products then decide between the alternatives (as in the first worked example of Additional topic B).',
        ],
        ans: 'One ring plus two degrees of hydrogenatable unsaturation (two C=C or one C≡C).',
      },
      {
        t: 'ex',
        tag: 'NEET Level — The C8H10 count',
        q: 'How many structural isomers of C<sub>8</sub>H<sub>10</sub> contain a benzene ring?',
        steps: ['As in E1: ethylbenzene + three xylenes.'],
        ans: '4.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] How many alkenes on catalytic hydrogenation give n-pentane? And 2,2-dimethylpropane (neopentane)?',
            a: 'n-Pentane: 2 structural alkenes (pent-1-ene, pent-2-ene); 3 if cis- and trans-pent-2-ene are counted separately. Neopentane: none — every C–C bond joins the quaternary centre (which carries no H) to a CH<sub>3</sub>, so no C=C can form.',
          },
          {
            q: '[JEE Main] Count the σ and π bonds in benzene, and state why the count does not depend on which Kekulé form you draw.',
            a: 'Benzene: 6σ(C–C) + 6σ(C–H) = 12 σ, 3 π; both Kekulé forms have the same bond multiplicities overall, so the tally is identical.',
          },
          {
            q: '[NEET] An alkane gives exactly one monochloro product. Its formula is C<sub>5</sub>H<sub>12</sub>. Identify it.',
            a: '2,2-dimethylpropane — all twelve H are equivalent primary H, so exactly one monochloro product.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic F · pp. 448–450 ─────────────────────────
  {
    n: 'F',
    title: 'EAS Reactivity Rankings and the Order of Operations',
    extra: true,
    kalam: 'The first group you install sets the compass for the second.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter classifies directors and explains the arenium-ion logic. Two applications are left for you to practise: ranking a set of rings by EAS rate, and sequencing two substitutions to reach a target isomer.',
      },

      { t: 'part', title: 'F1 — Ranking procedure' },
      {
        t: 'proc',
        title: 'Ranking procedure',
        steps: [
          'Classify every substituent on each ring: activator (+M donors: –OH, –NH<sub>2</sub>, –OR; weak activator: alkyl) or deactivator (−M acceptors: –NO<sub>2</sub>, –COOH, –CHO, –CN, –SO<sub>3</sub>H; weak deactivator: halogen).',
          'More/stronger donors ⇒ faster; more/stronger acceptors ⇒ slower. Two nitro groups beat one in deactivation; a nitro para to the point of comparison withdraws by resonance and hits harder than an inductive-only placement.',
        ],
      },
      {
        t: 'p',
        html: '<b>NCERT’s own drills, solved:</b><br>• Chlorobenzene vs 2,4-dinitrochlorobenzene vs p-nitrochlorobenzene: chlorobenzene > p-nitrochlorobenzene > 2,4-dinitrochlorobenzene (each additional –NO<sub>2</sub> deactivates further).<br>• Toluene vs p-CH<sub>3</sub>–C<sub>6</sub>H<sub>4</sub>–NO<sub>2</sub> vs p-O<sub>2</sub>N–C<sub>6</sub>H<sub>4</sub>–NO<sub>2</sub>: toluene > p-nitrotoluene > p-dinitrobenzene (donor ring fastest; acceptor-only ring slowest).<br>• Benzene, m-dinitrobenzene, toluene toward nitration: <b>toluene</b> most easily (alkyl-activated); m-dinitrobenzene slowest.',
      },

      { t: 'part', title: 'F2 — Order of operations in synthesis' },
      {
        t: 'p',
        html: 'The first group you install sets the compass for the second. To reach a target:<br>• <b>para</b> product (e.g. p-nitrobromobenzene from benzene): install the <b>o/p-director first</b> — brominate, then nitrate; bromine sends the incoming nitro para. (Nitrating first would force meta.)<br>• <b>meta</b> product (e.g. m-nitrochlorobenzene): install the <b>meta-director first</b> — nitrate, then halogenate.<br>• Friedel–Crafts last resort reminder: never plan a Friedel–Crafts step on a ring already carrying a strong deactivator (nitrobenzene refuses it) — and never plan nitration after a Friedel–Crafts alkylation if you want meta.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Rank the set',
        q: 'Arrange in decreasing reactivity toward EAS: benzene, chlorobenzene, phenol, nitrobenzene, toluene.',
        steps: [
          'Strong +M donor first (–OH in phenol), then weak donor (alkyl in toluene), then bare benzene, then weakly deactivated (halogen), then strongly deactivated (nitro).',
        ],
        ans: 'Phenol > toluene > benzene > chlorobenzene > nitrobenzene.',
      },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Sequence planning',
        q: 'Convert benzene into (i) p-nitrotoluene and (ii) m-nitrochlorobenzene, stating the order of steps and why.',
        steps: [
          '(i) The methyl is the o/p-director, so it must go in first: Friedel–Crafts alkylation (CH<sub>3</sub>Cl, anhyd. AlCl<sub>3</sub>) to toluene, then nitration — the para isomer is separated from the ortho by distillation. (ii) The nitro is the meta-director: nitrate first (conc. HNO<sub>3</sub>/conc. H<sub>2</sub>SO<sub>4</sub>), then chlorinate (Cl<sub>2</sub>, anhyd. FeCl<sub>3</sub>) — the chlorine enters meta to NO<sub>2</sub>.',
        ],
        ans: '(i) alkylate, then nitrate; (ii) nitrate, then chlorinate — the first-installed group directs the second.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Which undergoes nitration most easily: benzene, m-dinitrobenzene, or toluene? Why?',
            a: 'Toluene — the –CH<sub>3</sub> donates and stabilises the arenium ion; m-dinitrobenzene is slowest (two −M acceptors).',
          },
          {
            q: '[JEE Main] Arrange: chlorobenzene, 2,4-dinitrochlorobenzene, p-nitrochlorobenzene (decreasing EAS reactivity).',
            a: 'Chlorobenzene > p-nitrochlorobenzene > 2,4-dinitrochlorobenzene.',
          },
          {
            q: '[JEE Advanced] Why does the sequence “nitrate benzene, then Friedel–Crafts ethylate” fail?',
            a: 'Nitrobenzene is too deactivated for Friedel–Crafts (the weak carbocation electrophile cannot attack the electron-poor ring) — the sequence must be reversed.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic G · pp. 450–451 ─────────────────────────
  {
    n: 'G',
    title: 'Terminal Alkynes: The Two Further Tests',
    extra: true,
    kalam: 'A Grignard reagent is a carbanion equivalent — a strong base — so a terminal alkyne simply protonates it, releasing the Grignard’s alkane.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter establishes the acidity of the terminal ≡C–H and the Na/NaNH<sub>2</sub> acetylide reactions. Two reagent families built on the same acidity appear in the papers and deserve explicit statement.',
      },

      { t: 'part', title: 'G1 — Ammoniacal silver and copper solutions' },
      {
        t: 'p',
        html: 'A terminal alkyne’s acidic proton is displaced by soft heavy-metal cations, giving <b>characteristic precipitates</b> — the standard laboratory distinction of terminal alkynes from everything else (alkenes, alkanes, internal alkynes):<br>R–C≡C–H + [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> → R–C≡C–Ag↓ (white) + NH<sub>4</sub><sup>+</sup> + NH<sub>3</sub><br>R–C≡C–H + [Cu(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> → R–C≡C–Cu↓ (red) + NH<sub>4</sub><sup>+</sup> + NH<sub>3</sub>',
      },
      {
        t: 'p',
        html: 'So ammoniacal AgNO<sub>3</sub> distinguishes propyne from propene (white precipitate vs no reaction), and distinguishes but-1-yne from but-2-yne alongside the Na/NaNH<sub>2</sub> test of the chapter.',
      },

      { t: 'part', title: 'G2 — Grignard reagents report acidity quantitatively' },
      {
        t: 'p',
        html: 'A Grignard reagent is a carbanion equivalent — a strong base — so a terminal alkyne simply protonates it, releasing the Grignard’s alkane:<br>CH<sub>3</sub>–C≡C–H + CH<sub>3</sub>MgBr → CH<sub>3</sub>–C≡C–MgBr + CH<sub>4</sub>↑',
      },
      {
        t: 'p',
        html: 'One mole of a mono-terminal alkyne liberates exactly <b>one mole of methane</b> (22.4 L at the old STP, 22.7 L at the 1-bar STP) — an exact, countable assay of acidic hydrogens. Watch the stoichiometry on the sodium reaction for contrast: 2 RC≡CH + 2Na → 2 RC≡CNa + H<sub>2</sub>, so two moles of alkyne give one mole of H<sub>2</sub> — 0.1 mol of propyne (4.0 g) gives 0.05 mol H<sub>2</sub>, not “half a mole.”',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'NEET Level — Statement check',
        q: 'Statement I: 4 g of propyne with excess sodium liberates half a mole of H<sub>2</sub>. Statement II: One mole of propyne with excess CH<sub>3</sub>MgBr liberates 22.7 L of CH<sub>4</sub> at STP (1 bar, 273 K). Assess both.',
        steps: [
          'Propyne, C<sub>3</sub>H<sub>4</sub>, molar mass 40: 4 g = 0.1 mol. By the 2 ∶ 1 sodium stoichiometry, H<sub>2</sub> evolved = 0.05 mol — Statement I is <b>false</b> (it would need 0.5 mol). One mole of terminal alkyne protonates one mole of Grignard, releasing exactly 1 mol CH<sub>4</sub> = 22.7 L at the 1-bar STP — Statement II is <b>true</b>.',
        ],
        ans: 'I false, II true.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Give one reagent and its observation that distinguishes pent-1-yne from pent-2-yne.',
            a: 'Ammoniacal AgNO<sub>3</sub>: pent-1-yne gives a white precipitate (silver pentynide); pent-2-yne, no reaction. (Sodium metal, which liberates H<sub>2</sub> from pent-1-yne only, is equally acceptable.)',
          },
          {
            q: '[JEE Main] How many litres of CH<sub>4</sub> (1-bar STP) evolve when 0.2 mol of ethyne reacts with excess CH<sub>3</sub>MgBr? (Careful: ethyne has two terminal hydrogens.)',
            a: 'Ethyne has two acidic H, so 0.2 mol liberates 0.4 mol CH<sub>4</sub> = 0.4 × 22.7 = 9.08 L.',
          },
          {
            q: '[CBSE] Explain why internal alkynes give no precipitate with ammoniacal AgNO<sub>3</sub>.',
            a: 'Their triple bond carries no ≡C–H hydrogen; with no acidic proton to displace, no silver acetylide can form.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic H · p. 451 ─────────────────────────
  {
    n: 'H',
    title: 'Summary Checklist',
    extra: true,
    kalam: 'Before the exam, verify you can answer yes to each of the following.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      { t: 'p', html: 'Before the exam, verify you can answer yes to each of the following:' },

      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: '1. Can you run the three gates (cyclic-conjugated, planar, 4<i>n</i> + 2) and sort any ring or ion — cyclopropenyl cation, cyclopentadienyl anion/cation, tropylium, cyclobutadiene, cyclooctatetraene — into aromatic / anti-aromatic / non-aromatic with the reason?<br>2. Can you write the three ozonolysis products of o-xylene in their 3 ∶ 2 ∶ 1 ratio and state in one sentence why the mixture supports the Kekulé picture?<br>3. Can you rebuild any alkene from its ozonolysis fragments and name the diagnostic that a formaldehyde product carries (terminal =CH<sub>2</sub>)?<br>4. Can you rank alkenes by stability, name the Saytzeff rule, and predict both hydration regiochemistries (acid-catalysed vs hydroboration–oxidation)?<br>5. Can you compute product percentages from the 1 ∶ 82 ∶ 1600 bromination ratios and count exhaustive-substitution products (ethane gives 9)?<br>6. Can you count aromatic isomers (C<sub>8</sub>H<sub>10</sub> = 4), reverse-hydrogenation alkenes (isopentane = 3), and σ/π tallies (naphthalene = 19/5)?<br>7. Can you rank any set of substituted benzenes for EAS and plan a two-step synthesis in the right order (director first)?<br>8. Can you state the ammoniacal AgNO<sub>3</sub>/Cu<sub>2</sub>Cl<sub>2</sub> observations and the Grignard–methane stoichiometry for terminal alkynes?',
      },
    ],
  },

  // ─────────────── Additional topic I (the book's Addendum P) · pp. 452–455 ───────────────
  {
    n: 'I',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'In JEE Main and NEET-style question sets the four families are weighted roughly as follows.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'In JEE Main and NEET-style question sets the four families are weighted roughly as follows.',
      },
      {
        t: 'defgrid',
        title: 'Sub-topic — Weight',
        rows: [
          { k: 'Alkenes: addition, peroxide effect, ozonolysis, stability, hydration', v: '<b>Highest</b>' },
          { k: 'Alkanes: halogenation, conformations, preparations, counting', v: '<b>High</b>' },
          { k: 'Alkynes: acidity tests, hydration, reduction geometry', v: '<b>Moderate</b>' },
          { k: 'Aromatics: EAS, aromaticity, directive effects, counting', v: '<b>High</b>' },
        ],
      },
      {
        t: 'p',
        html: '<b>What this means for you:</b> alkenes dominate — and within alkenes, counting and regiochemistry dominate (how many products, which product major, Markovnikov or not). The aromatic questions are short and conceptual (electrophile identity, director class, Hückel conditions). The alkyne questions are nearly all acidity-driven tests. Alkane questions split between mechanism steps and counting/selectivity arithmetic.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>1. “Which product is major?” — regiochemistry under named conditions</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> HBr with/without peroxide, HX addition to alkynes, Lindlar vs Na/NH<sub>3</sub>, hydration products.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> name the condition first, then apply the matching rule: peroxide = anti-Markovnikov (HBr only); no peroxide = most stable carbocation (watch for rearrangement); Lindlar = cis, Na/liq. NH<sub>3</sub> = trans; alkyne hydration = carbonyl (ethyne gives the only aldehyde).',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'Propyne + 2 HBr, no peroxide:',
        steps: ['Each addition is Markovnikov, both Br landing on C2 ⇒'],
        ans: '2,2-dibromopropane (a gem-dihalide).',
      },
      { t: 'p', html: '<b>2. Counting: products, isomers, environments</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> bromo derivatives of ethane with excess Br<sub>2</sub> (9), monochloro derivatives of C<sub>4</sub>H<sub>10</sub> (4 structural; 5 if the two enantiomers of 2-chlorobutane are counted), aromatic isomers of C<sub>8</sub>H<sub>10</sub> (4), alkenes behind isopentane (3), σ/π in naphthalene (19/5).',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> the procedures of Addenda D and E — symmetry-collapse every enumeration, partition side-chain carbons for aromatics, and use DoU as a gate before counting.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'Substitution levels 1–6 on ethane give 1 + 2 + 2 + 2 + 1 + 1 = 9 distinct bromo derivatives.',
        steps: [],
        ans: '',
      },
      { t: 'p', html: '<b>3. The terminal-alkyne acidity family</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> distinguish but-1-yne/but-2-yne, propyne/propene, the ethyne hydration product, Grignard/sodium stoichiometry statements.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> one fact powers all of them — only ≡C–H is acidic. Na releases H<sub>2</sub> (NaNH<sub>2</sub> gives the same acetylide with NH<sub>3</sub>); ammoniacal AgNO<sub>3</sub> gives a white precipitate; CH<sub>3</sub>MgBr releases CH<sub>4</sub> (1 mol per acidic H).',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'Propyne (terminal) + ammoniacal AgNO<sub>3</sub> → white silver propynide precipitate; propene does not react.',
        steps: [],
        ans: 'Ammoniacal AgNO<sub>3</sub>.',
      },
      { t: 'p', html: '<b>4. Free-radical substitution: mechanism steps and selectivity numbers</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “ethane appears as by-product — which step?” (termination), ease order 3° > 2° > 1°, percentage yields from the 1 ∶ 82 ∶ 1600 ratios (96.47% 2-bromopropane), isobutane’s major product.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> mechanism answers are one-liners (two methyl radicals combining is a termination step); numerical answers are the weighted-share formula of Addendum D.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'Propane:',
        steps: ['2 × 82 = 164 vs 6 × 1 = 6; 164/170 = 96.47% for the secondary product.'],
        ans: '',
      },
      { t: 'p', html: '<b>5. Aromaticity and EAS one-liners</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> the Hückel condition set, the nitration electrophile (NO<sub>2</sub><sup>+</sup>), “deactivating but o/p-directing” (halogen), “why substitution not addition”, EAS reactivity rankings, o-xylene ozonolysis statements.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> all are chapter facts plus Addendum A/F procedure — no calculation, instant recall. For rankings, classify every substituent before ordering.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'Statement I: Ozonolysis of o-xylene gives three different products. Statement II: All three products contain an sp<sup>3</sup> carbon.',
        steps: [
          'o-Xylene ozonolysis gives glyoxal, methylglyoxal and dimethylglyoxal — three products, so Statement I is correct; but glyoxal contains no sp<sup>3</sup> carbon, so Statement II is incorrect.',
        ],
        ans: 'I correct, II incorrect.',
      },
      { t: 'p', html: '<b>6. Reverse-structure puzzles (ozonolysis and DoU)</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> “an alkene gives propanal and pentan-3-one — structure?” (NCERT-patterned; joining the carbonyl carbons gives CH<sub>3</sub>CH<sub>2</sub>CH=C(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>, 3 + 5 = 8 carbons: 3-ethylhex-3-ene), X (C<sub>6</sub>H<sub>8</sub>, 2 mol H<sub>2</sub>, ozonolysis) ⇒ cyclohexa-1,4-diene, formaldehyde as a product.',
      },
      {
        t: 'p',
        html: '<b>The crack:</b> Addendum B’s protocol — strip oxygens, join carbonyl carbons, tally carbons, and read diagnostics: formaldehyde ⇒ terminal =CH<sub>2</sub>; identical fragments ⇒ symmetric double bond; ring + 2π from DoU.',
      },
      {
        t: 'ex',
        tag: 'Worked example',
        q: 'DoU = 3; two π bonds consumed by hydrogenation, so one ring remains; two identical dialdehyde molecules force symmetric placement —',
        steps: [],
        ans: 'cyclohexa-1,4-diene.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'p',
        html: '<b>Trap 1: Applying the peroxide effect to HCl or HI.</b> The Kharasch reversal is HBr-only (H–Cl too strong to cleave homolytically; with HI the iodine radicals combine to I<sub>2</sub> instead of adding to the double bond). Options offering anti-Markovnikov products with HCl are bait.',
      },
      {
        t: 'p',
        html: '<b>Trap 2: Alkyne hydration stops at the enol — never.</b> The enol tautomerises; ethyne alone gives an aldehyde (acetaldehyde), every higher alkyne a ketone. An option such as “ethenol (vinyl alcohol)” is built for students who stopped one step early; “ethanol” and “ethane-1,2-diol” come from no step of the reaction.',
      },
      {
        t: 'p',
        html: '<b>Trap 3: Reading “ozonolysis gives formaldehyde” as a triple-bond signature.</b> Formaldehyde marks a terminal =CH<sub>2</sub> of an alkene (a terminal methylene), not an alkyne — alkyne ozonolysis yields carboxylic acids, not HCHO.',
      },
      {
        t: 'p',
        html: '<b>Trap 4: Calling any 4<i>n</i> ring “anti-aromatic”.</b> The 4<i>n</i> verdict needs planarity and full conjugation first: cyclooctatetraene (8π) is non-aromatic because it puckers; cyclopentadiene (4π) is non-aromatic because its sp<sup>3</sup> CH<sub>2</sub> breaks the loop. Only cyclobutadiene and the cyclopentadienyl cation among the common cases are truly anti-aromatic.',
      },
      {
        t: 'p',
        html: '<b>Trap 5: “More H on the alkene carbon” read backwards in Markovnikov.</b> The hydrogen of HX goes to the carbon richer in H (“the rich get richer”); the halide caps the more substituted carbon. Many distractors are the exact swap.',
      },
      {
        t: 'p',
        html: '<b>Trap 6: Statement hybrids with one false clause.</b> Two-statement questions often pair one textbook truth with a subtly inverted clause (alkene vs alkane stability; neopentane’s melting point is higher than n-pentane’s, but its boiling point is lower; “all three products contain sp<sup>3</sup> carbon”). Evaluate each statement alone before touching the options.',
      },

      { t: 'part', title: 'A Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[Easy] The electrophile in the nitration of benzene is: (a) HNO<sub>3</sub> (b) NO<sub>2</sub><sup>−</sup> (c) NO<sub>2</sub><sup>+</sup> (d) NO.',
            a: '(c). Conc. H<sub>2</sub>SO<sub>4</sub> protonates nitric acid to the nitronium ion NO<sub>2</sub><sup>+</sup>; the reagent is not itself the electrophile.',
          },
          {
            q: '[Easy] The reagent that distinguishes but-1-yne from but-2-yne is: (a) bromine water (b) cold dilute KMnO<sub>4</sub> (c) ammoniacal AgNO<sub>3</sub> (d) HCl.',
            a: '(c). Only the terminal alkyne has an acidic ≡C–H; it gives a white silver acetylide precipitate. (a) and (b) test unsaturation generally — both alkynes respond. (d) HCl adds to both alkynes with no visible change, so it cannot tell them apart.',
          },
          {
            q: '[Easy] Ethane on exhaustive bromination (excess Br<sub>2</sub>, diffused sunlight) gives how many distinct bromo derivatives? (a) 6 (b) 7 (c) 8 (d) 9.',
            a: '(d). 1 + 2 + 2 + 2 + 1 + 1 = 9 across the six substitution levels (Addendum D2).',
          },
          {
            q: '[Moderate] Reduction of hex-3-yne with H<sub>2</sub>/Lindlar’s catalyst gives predominantly: (a) n-hexane (b) trans-hex-3-ene (c) cis-hex-3-ene (d) a cis/trans mixture.',
            a: '(c). Lindlar’s poisoned palladium delivers syn addition of H<sub>2</sub> and stops at the alkene — the cis isomer.',
          },
          {
            q: '[Moderate] Which alkene gives the same alcohol by acid-catalysed hydration and by hydroboration–oxidation? (a) but-1-ene (b) propene (c) but-2-ene (d) 2-methylbut-2-ene.',
            a: '(c). But-2-ene is symmetrical about its double bond, so Markovnikov and anti-Markovnikov placements coincide (butan-2-ol).',
          },
          {
            q: '[Moderate] Which species is anti-aromatic? (a) cyclopropenyl cation (b) cyclopentadienyl anion (c) cyclobutadiene (d) cyclooctatetraene.',
            a: '(c). Cyclobutadiene is planar, fully conjugated, and has 4π electrons (4<i>n</i>). (a) and (b) are 4<i>n</i> + 2 aromatics; (d) is non-planar and merely non-aromatic.',
          },
          {
            q: '[Moderate] The major product of monobromination of isobutane is: (a) 1-bromo-2-methylpropane (b) 2-bromo-2-methylpropane (c) an equal mixture (d) 2-methylpropene.',
            a: '(b). With <i>r</i>(3°) = 1600 against nine 1° H at 1 each, the tertiary bromide is formed almost exclusively (the 1° share is about 0.56%).',
          },
          {
            q: '[Hard] Using 1° ∶ 2° ∶ 3° = 1 ∶ 82 ∶ 1600, the percentage of 2-bromopropane from propane monobromination is: (a) 82.00 (b) 96.47 (c) 50.00 (d) 73.33.',
            a: '(b). 164/(164 + 6) × 100 = 96.47%.',
          },
          {
            q: '[Hard] The number of structural isomers of C<sub>8</sub>H<sub>10</sub> containing a benzene ring is: (a) 3 (b) 4 (c) 5 (d) 6.',
            a: '(b). Ethylbenzene plus ortho-, meta-, and para-xylene.',
          },
          {
            q: '[Hard] Ozonolysis of 1,2-dimethylbenzene gives: (a) only glyoxal (b) only dimethylglyoxal (c) glyoxal, methylglyoxal and dimethylglyoxal in 3 ∶ 2 ∶ 1 (d) two products in equal amounts.',
            a: '(c). The two Kekulé forms cleave differently; the 3 ∶ 2 ∶ 1 trio is the classic evidence for the resonance-hybrid structure (an NCERT exercise).',
          },
          {
            q: '[Hard] Statement I: 4 g of propyne with excess Na liberates 0.5 mol H<sub>2</sub>. Statement II: 1 mol of propyne with excess CH<sub>3</sub>MgBr liberates 22.7 L of CH<sub>4</sub> at (1-bar) STP. (a) I true, II false (b) I false, II true (c) both true (d) both false.',
            a: '(b). 0.1 mol propyne gives 0.05 mol H<sub>2</sub> (2 ∶ 1 stoichiometry), so I is false; one acidic H per mole gives exactly 1 mol CH<sub>4</sub>, so II is true.',
          },
          {
            q: '[Hard] Decreasing reactivity toward EAS:<br>(a) toluene > benzene > chlorobenzene > nitrobenzene<br>(b) nitrobenzene > chlorobenzene > benzene > toluene<br>(c) benzene > toluene > chlorobenzene > nitrobenzene<br>(d) toluene > chlorobenzene > benzene > nitrobenzene',
            a: '(a). Alkyl activates; halogen weakly deactivates; nitro strongly deactivates.',
          },
        ],
      },

      { t: 'part', title: 'Where the Marks Sit' },
      {
        t: 'p',
        html: 'The chapter is strong on named reactions and qualitative rules, but examination marks often live in the quantified and extended versions: Hückel’s rule applied to non-benzenoid ions and rings, the o-xylene ozonolysis evidence for Kekulé, the 1 ∶ 82 ∶ 1600 selectivity arithmetic, the systematic counting of products and isomers under symmetry collapse (Topic 01 counts monochloro products; the addenda carry it to exhaustive substitution, aromatic isomers and bond tallies), and the two terminal-alkyne tests (ammoniacal silver/copper, Grignard methane) that sit one step beyond the sodium reaction the chapter teaches. Addenda A–G build exactly these.',
      },
    ],
  },
];
