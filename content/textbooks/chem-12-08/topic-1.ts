import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topic 01, Aldehydes & Ketones — Nomenclature, Structure &
 * Preparation: pp. 368–377 of the Class 12 Chemistry Master Reference, word for
 * word, split at its Sections 1 to 8. The title page (p. 367) and the contents
 * lines at the top of p. 368 are not copied. Figure 8.1 (caption p. 369, drawn
 * p. 370) sits in "Concept intuition" after the paragraph on the polarised C=O
 * bond, where the book prints its caption; Figure 8.2 (caption p. 371, drawn
 * p. 372) sits after "3A. Building the carbonyl’s electronic structure", whose
 * resonance step it shows. Both are redrawn in lib/diagrams/chemistry-12-08.ts.
 * The book sets formulas in maths italic; here species are upright, hybrid labels
 * upright (sp<sup>2</sup>), +I and −I upright, compound labels (A) upright.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 368–377 ─────────────────────────
  {
    n: '01',
    title: 'Aldehydes & Ketones — Nomenclature, Structure & Preparation',
    kalam: 'Master the carbonyl’s electronics here and the rest of the chapter becomes bookkeeping.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the gateway topic of the whole chapter and it pays off everywhere. CBSE Boards almost always carry a 1–2 mark IUPAC-naming or “complete the preparation” question, plus a frequent reasoning question on why aldehydes are more reactive than ketones. NEET leans on the reactivity order and on identifying products of named preparations (Rosenmund, Étard, ozonolysis). JEE Main routinely sets multi-step “name the product” sequences, and JEE Advanced loves selectivity puzzles (stop at the aldehyde, don’t over-reduce) and functional-isomer counting. Master the carbonyl’s electronics here and the rest of the chapter becomes bookkeeping.',
      },
      {
        t: 'p',
        html: 'Every compound in this chapter is built around one tiny, powerful unit: the <b>carbonyl group</b>, a carbon double-bonded to oxygen, written >C=O. When that carbon also carries at least one hydrogen, we call the molecule an <b>aldehyde</b> (R–CHO). When the carbonyl carbon is flanked by two carbon groups instead, we call it a <b>ketone</b> (R–CO–R′). That single structural difference — “is there an H sitting on the carbonyl carbon or not?” — drives almost everything else: how they are named, how they are made, and how reactive they are.',
      },
      {
        t: 'p',
        html: 'Think about it this way. Picture a busy Mumbai local-train doorway during rush hour. The doorway is the carbonyl carbon, and commuters trying to squeeze in are the incoming reagents. In an <b>aldehyde</b>, one side of the doorway is blocked by a single passenger (one alkyl group) while the other side is wide open (just a small hydrogen). In a <b>ketone</b>, both sides are blocked by passengers (two alkyl groups). New commuters obviously find it easier to push into the aldehyde doorway — and that is exactly why aldehydes are generally more reactive than ketones. The crowding picture is the steric part of the story.',
      },
      {
        t: 'p',
        html: 'There is a second, electronic reason hiding underneath. Oxygen is greedier for electrons than carbon (electronegativities roughly 3.5 versus 2.5), so the shared electrons of the C=O bond drift toward oxygen. The result is a permanently polarised bond: the carbonyl carbon wears a partial positive charge (<i>δ</i>+) and the oxygen a partial negative charge (<i>δ</i>−). So the carbonyl carbon behaves as an <b>electrophilic centre</b> (a Lewis acid, hungry for electrons) and the oxygen as a <b>nucleophilic centre</b> (a Lewis base). Now, alkyl groups gently push electron density toward the carbon (the +I effect), softening that <i>δ</i>+. A ketone has two such electron-pushers and an aldehyde only one, so the aldehyde’s carbon stays “hungrier” and more reactive. Steric crowding and electronics point the same way, which is why the conclusion is so reliable.',
      },
      { t: 'fig', id: 'c12-08-fig-8.1' },
      {
        t: 'p',
        html: 'It is worth seeing the family resemblance and the family quarrel. Both aldehydes and ketones share the same general formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O (for saturated, open-chain members) and the same reactive carbonyl, so they undergo broadly similar chemistry. But the hydrogen on an aldehyde’s carbonyl carbon is a structural handle that ketones simply do not have — and many of the reactions where the two families part ways trace back to that single H atom.',
      },
      {
        t: 'p',
        html: 'A nice everyday window into all this: nature uses these groups for fragrance and flavour. Vanillin (from vanilla pods) and cinnamaldehyde (from cinnamon bark) are aldehydes; camphor and carvone (spearmint, caraway) are ketones. The same carbonyl that makes these molecules chemically lively also makes them smell. Aldehydes tend to have sharper, more pungent odours; many ketones smell pleasantly sweet.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The “aldehyde > ketone” reactivity rule is a generalisation for nucleophilic addition and assumes ordinary alkyl substituents. It can flip when special groups intrude: a strongly electron-withdrawing group raises reactivity (trichloro​acetaldehyde, CCl<sub>3</sub>CHO, “chloral”, is more reactive than acetaldehyde because the three chlorines pull electron density away through their −I effect, exaggerating the <i>δ</i>+). Conversely, an aromatic ring lowers reactivity, because the ring donates electron density into the carbonyl by resonance — benzaldehyde is less reactive than propanal. So treat the rule as a strong default, not an unbreakable law, and always check what the substituents are doing to the carbonyl carbon’s positive charge.',
      },

      { t: 'part', title: 'Key formulas, definitions and notation' },
      { t: 'def', term: 'Carbonyl group', html: '>C=O — one σ bond and one π bond between carbon and oxygen.' },
      {
        t: 'formula',
        kicker: 'General molecular formula (saturated aliphatic)',
        main: 'C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O',
        legend: ['<i>n</i> = number of carbon atoms'],
        note: 'shared by aldehydes and ketones, which is why they are functional isomers of one another.',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol / value', 'Notes'],
        rows: [
          ['Carbonyl bond angle', '≈ 120°', 'trigonal planar, sp<sup>2</sup> carbon'],
          ['C=O bond length', '≈ 123 pm', 'shorter than C=C (≈ 134 pm)'],
          ['C=O bond energy', '≈ 745 kJ mol<sup>−1</sup>', 'stronger than C=C (≈ 611 kJ mol<sup>−1</sup>)'],
          ['Dipole moment', '≈ 2.3–2.9 D', 'e.g. methanal 2.33 D, acetone 2.88 D'],
        ],
      },
      {
        t: 'p',
        html: '<b>Functional groups & their suffixes/prefixes</b><br>• Aldehyde group: –CHO (the formyl or aldehydic group). IUPAC suffix <b>-al</b>; substituent/lower-priority prefix <b>oxo-</b> or <b>formyl-</b>; cyclic suffix <b>-carbaldehyde</b>.<br>• Keto group: >C=O flanked by two carbons (the oxo group). IUPAC suffix <b>-one</b>; lower-priority prefix <b>oxo-</b>.',
      },
      {
        t: 'p',
        html: '<b>IUPAC suffix priority (highest claims the principal-chain suffix):</b><br>carboxylic acid > ester > acid chloride > amide > nitrile > aldehyde > ketone > alcohol > amine',
      },
      {
        t: 'p',
        html: 'So in a molecule that has both a –CHO and an –OH, the aldehyde wins the suffix and the hydroxyl is demoted to a <b>hydroxy-</b> prefix; a ketone outranks an alcohol the same way.',
      },
      {
        t: 'formula',
        kicker: 'Reactivity order toward nucleophilic addition (the number to memorise)',
        main: 'HCHO > CH<sub>3</sub>CHO > CH<sub>3</sub>COCH<sub>3</sub>',
        legend: [
          'HCHO = methanal',
          'CH<sub>3</sub>CHO = ethanal',
          'CH<sub>3</sub>COCH<sub>3</sub> = propanone',
          '> = is more reactive toward nucleophilic addition than',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Aromatic series: C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO > C<sub>6</sub>H<sub>5</sub>CHO > C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> > C<sub>6</sub>H<sub>5</sub>COC<sub>6</sub>H<sub>5</sub>.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic has no single “derivation” to grind through; instead it has two procedural skills — <b>building the structure/bonding picture</b> and <b>naming systematically</b> — that you must be able to reproduce on demand.',
      },
      {
        t: 'proc',
        title: '3A. Building the carbonyl’s electronic structure (reasoning, step by step)',
        steps: [
          '<b>Hybridisation.</b> The carbonyl carbon forms three σ bonds (to oxygen and to two other atoms) and no lone pairs, so it needs three equivalent in-plane orbitals: it is sp<sup>2</sup> hybridised. <b>Why this matters:</b> three sp<sup>2</sup> orbitals point to the corners of a triangle, fixing the bond angles near 120° and forcing the carbonyl carbon and its three attached atoms into one plane.',
          '<b>The σ framework.</b> One sp<sup>2</sup> orbital of carbon overlaps head-on with an orbital of oxygen to make the C–O σ bond; the other two sp<sup>2</sup> orbitals make σ bonds to H/alkyl. <b>Why:</b> head-on overlap is strong and defines the molecular skeleton.',
          '<b>The π bond.</b> The leftover unhybridised p orbital on carbon overlaps sideways with a p orbital on oxygen, forming the π bond whose electron cloud sits above and below the molecular plane. <b>Why:</b> this is the “extra” bond that makes it a double bond and the site reagents will attack.',
          '<b>Polarisation.</b> Because oxygen is more electronegative, the π (and σ) electrons are pulled toward oxygen, giving C<sup><i>δ</i>+</sup>=O<sup><i>δ</i>−</sup>. <b>Why:</b> this sets up the electrophilic carbon / nucleophilic oxygen behaviour.',
          '<b>Resonance check.</b> The unusually high dipole moment cannot be explained by induction alone, so we write the carbonyl as a resonance hybrid of a neutral form and a dipolar (charge-separated) form:<br>>C=O ↔ >C<sup>+</sup>–O<sup>−</sup><br><b>Why:</b> the dipolar contributor explains the large dipole moment and confirms the carbon’s electrophilic character.',
        ],
      },
      { t: 'fig', id: 'c12-08-fig-8.2' },
      {
        t: 'proc',
        title: '3B. Naming an aldehyde or ketone (IUPAC, step by step)',
        steps: [
          '<b>Find the principal chain.</b> Choose the longest continuous carbon chain that contains the carbonyl carbon. For an aldehyde the –CHO carbon must be in the chain; for a ketone the >C=O carbon must be in the chain.',
          '<b>Pick the suffix.</b> Drop the terminal “-e” of the parent alkane and add <b>-al</b> (aldehyde) or <b>-one</b> (ketone): alkane → alkan<b>al</b> / alkan<b>one</b>.',
          '<b>Number for the lowest locant.</b><br>• <b>Aldehyde:</b> the –CHO carbon is, by definition, at the end, so it is <b>C-1</b> automatically — no locant is needed for the group itself.<br>• <b>Ketone:</b> number from the end <b>nearer the carbonyl</b> so the >C=O gets the lowest possible locant; show that locant (e.g. pentan-<b>2</b>-one).',
          '<b>Cyclic cases.</b> A –CHO on a ring uses the suffix <b>-carbaldehyde</b>, with the ring carbon bearing it numbered C-1 (cyclohexane​carbaldehyde). A ring ketone is named as cycloalkan<b>one</b> with the carbonyl carbon as C-1 (cyclohexanone).',
          '<b>Aromatic cases.</b> The simplest aryl aldehyde is benzene​carbaldehyde; the common name <b>benzaldehyde</b> is IUPAC-accepted. Others are named as substituted benzaldehydes (e.g. 4-nitro​benzaldehyde).',
          '<b>Add substituents alphabetically</b> with their locants as prefixes.',
        ],
      },
      {
        t: 'p',
        html: '<b>The parallel common-name logic</b> (still examinable): aldehyde common names come from the corresponding carboxylic acid by swapping “-ic acid” for “-aldehyde” (formaldehyde, acetaldehyde, propionaldehyde), with substituent positions flagged by Greek letters — α for the carbon next to –CHO, then β, γ. Ketone common names list the two attached groups alphabetically and add “ketone” (ethyl methyl ketone), with dimethyl ketone keeping the historical name <b>acetone</b>; aryl ketones use the acyl-prefix + “phenone” pattern (acetophenone, benzophenone).',
      },
      {
        t: 'p',
        html: '<b>A quick word on isomerism</b> (a structural consequence worth noting): aldehydes show chain isomerism among themselves and functional isomerism with ketones, cyclic ethers (oxiranes) and unsaturated alcohols, because all of these can share the formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O. For example, propanal, propanone and prop-2-en-1-ol are all C<sub>3</sub>H<sub>6</sub>O.',
      },
      { t: 'p', html: '<b>3C. The preparation framework (common routes first, then specific)</b>' },
      {
        t: 'p',
        html: 'The cleanest way to hold the preparation methods in memory is to split them into routes that make <b>both</b> families and routes that are <b>specific</b> to one — and, more importantly, to understand the reasoning that makes each route stop where it does.',
      },
      { t: 'p', html: '<b>Routes common to aldehydes and ketones.</b>' },
      {
        t: 'p',
        html: '1. <b>Oxidation of alcohols.</b> A primary alcohol oxidises to an aldehyde, a secondary alcohol to a ketone. <b>Reasoning:</b> oxidation removes hydrogen; a primary carbon (–CH<sub>2</sub>OH) has the right number of hydrogens to stop at –CHO, while a secondary carbon goes to >C=O. The catch is that a strong oxidant pushes the aldehyde onward to a carboxylic acid, so a mild oxidant (e.g. PCC) is used when the aldehyde is the target.',
      },
      {
        t: 'p',
        html: '2. <b>Catalytic dehydrogenation of alcohols.</b> Alcohol vapour passed over heated copper (≈ 573 K) loses H<sub>2</sub>: primary → aldehyde, secondary → ketone. <b>Reasoning:</b> this is oxidation without an oxidising agent — the metal simply strips H<sub>2</sub> — which makes it clean and industrially attractive for volatile alcohols.',
      },
      {
        t: 'p',
        html: '3. <b>Ozonolysis of alkenes</b> cleaves C=C to give two carbonyl fragments (aldehydes and/or ketones depending on substitution).',
      },
      {
        t: 'p',
        html: '4. <b>Hydration of alkynes</b> (H<sub>2</sub>O, H<sub>2</sub>SO<sub>4</sub>, HgSO<sub>4</sub>): the unstable enol formed rearranges to a carbonyl. <b>Reasoning to remember:</b> under these conditions ethyne is the single exception that yields an aldehyde (ethanal); every other alkyne yields a ketone.',
      },
      {
        t: 'p',
        html: '<b>Routes specific to aldehydes.</b> Each is engineered to avoid over-reduction:<br>• <b>Rosenmund reduction:</b> acyl chloride + H<sub>2</sub> over Pd/BaSO<sub>4</sub>. <b>Reasoning:</b> the catalyst is deliberately weakened: the BaSO<sub>4</sub> support (low in surface area) tames the palladium, and sulphur or quinoline, often added, poisons it further, so it is just active enough to reach the aldehyde and no further.<br>• <b>From nitriles:</b> the <b>Stephen reaction</b> (SnCl<sub>2</sub>/HCl, then hydrolysis) and <b>DIBAL-H</b> both stop at an imine that hydrolyses to the aldehyde.<br>• <b>From esters:</b> DIBAL-H at low temperature delivers a single hydride, giving the aldehyde on work-up.<br>• <b>Aromatic aldehydes from hydrocarbons:</b> the <b>Étard reaction</b> (CrO<sub>2</sub>Cl<sub>2</sub> on toluene, then hydrolysis), side-chain chlorination (Cl<sub>2</sub>/heat → benzal chloride → hydrolysis), and <b>Gattermann–Koch</b> (CO + HCl, anhydrous AlCl<sub>3</sub>/CuCl).',
      },
      {
        t: 'p',
        html: '<b>Routes specific to ketones.</b><br>• <b>Dialkylcadmium + acyl chloride:</b> 2 RCOCl + R′<sub>2</sub>Cd → 2 RCOR′ + CdCl<sub>2</sub>. <b>Reasoning:</b> cadmium reagents are mild enough to stop at the ketone, whereas a Grignard reagent would attack the ketone again and over-shoot to a tertiary alcohol.<br>• <b>Grignard + nitrile:</b> addition gives an imine salt that hydrolyses to a ketone.<br>• <b>Friedel–Crafts acylation:</b> an acyl chloride or anhydride with anhydrous AlCl<sub>3</sub> installs an acyl group on an aromatic ring (acetophenone, benzophenone).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Clean IUPAC naming',
        q: 'Give the IUPAC name of the compound (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CO–CH<sub>3</sub>.',
        steps: [
          '<b>Given:</b> a ketone (carbonyl flanked by two carbons).',
          '<b>Step 1 — principal chain:</b> the longest chain through the carbonyl is five carbons: CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CO–CH<sub>3</sub>. Parent = pentane.',
          '<b>Step 2 — suffix:</b> ketone ⇒ pentan-?-one.',
          '<b>Step 3 — numbering:</b> number from the end nearer the C=O. From the right, carbonyl is C-2; from the left it would be C-4. Choose <b>C-2</b>.',
          '<b>Step 4 — substituent:</b> a methyl branch sits on C-4.',
          '(Common name: isobutyl methyl ketone — useful to recognise, but the IUPAC name is what earns the mark.)',
        ],
        ans: '4-methyl​pentan-2-one',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Reactivity ordering',
        q: 'Arrange toward nucleophilic addition, most reactive first: ethanal, propanone, methanal, 2,2,2-​trichloroethanal (CCl<sub>3</sub>CHO).',
        steps: [
          '<b>The trap.</b> Students mechanically write “aldehyde before ketone” and stop — but one of these aldehydes is super-charged.',
          '<b>Mental shortcut.</b> Rank by how positive the carbonyl carbon is.',
          'CCl<sub>3</sub>CHO: three chlorines yank electrons away (−I), so the carbonyl carbon is the most electron-poor ⇒ most reactive.',
          'HCHO (methanal): zero electron-pushing alkyl groups ⇒ next.',
          'CH<sub>3</sub>CHO (ethanal): one +I methyl softens the charge ⇒ less.',
          'CH<sub>3</sub>COCH<sub>3</sub> (propanone): two +I methyls plus steric crowding ⇒ least.',
          'Solve it in your head in under ten seconds by counting electron-withdrawing versus electron-donating groups; never reach for a calculator here.',
        ],
        ans: 'CCl<sub>3</sub>CHO > HCHO > CH<sub>3</sub>CHO > CH<sub>3</sub>COCH<sub>3</sub>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Ozonolysis + naming + selective preparation',
        q: 'An alkene A (C<sub>5</sub>H<sub>10</sub>) on reductive ozonolysis gives propanal and ethanal. (i) Identify and name A. (ii) Name the two carbonyl products. (iii) Suggest how propanal could instead be made cleanly from a primary alcohol without over-oxidation.',
        steps: [
          '<b>(i)</b> Reductive ozonolysis cleaves C=C and caps each carbon with =O. Re-joining the two fragments at their carbonyl carbons reconstructs the alkene:<br>CH<sub>3</sub>CH<sub>2</sub>CH (from propanal) = CH (from ethanal) CH<sub>3</sub>',
          'So A = CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>3</sub>, i.e. <b>pent-2-ene</b> (C<sub>5</sub>H<sub>10</sub> ✓).',
          '<b>(ii)</b> The products are <b>propanal</b> (CH<sub>3</sub>CH<sub>2</sub>CHO) and <b>ethanal</b> (CH<sub>3</sub>CHO).',
          '<b>(iii)</b> Oxidising propan-1-ol with a strong oxidant would run on to propanoic acid. To stop at the aldehyde, use a mild, controlled oxidant (e.g. pyridinium chlorochromate, PCC) or <b>catalytic dehydrogenation</b> of the alcohol vapour over heated copper at ≈ 573 K:<br>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH →<sup>Cu</sup><sub>573 K</sub> CH<sub>3</sub>CH<sub>2</sub>CHO + H<sub>2</sub>',
          'The exam tests three linked ideas at once: cleave-and-recombine logic, naming, and oxidation-state control in preparation.',
        ],
        ans: '(i) A = pent-2-ene, CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>3</sub>; (ii) propanal and ethanal; (iii) oxidise propan-1-ol with a mild oxidant such as PCC, or pass its vapour over copper at 573 K.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Selectivity: stop at the aldehyde',
        q: 'You are given (a) pentanenitrile CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>CN and (b) ethyl benzoate C<sub>6</sub>H<sub>5</sub>COOC<sub>2</sub>H<sub>5</sub>. For each, choose a reagent that converts it to the corresponding <b>aldehyde</b> in one operation, and justify why a “stronger” hydride would fail. Then state which of the two product aldehydes is more reactive toward nucleophilic addition, with reasoning.',
        steps: [
          'The shared danger is over-reduction: LiAlH<sub>4</sub> would drive both substrates all the way to the primary <b>alcohol</b> (or, for the nitrile, to the amine), erasing the aldehyde. The fix is a bulky, low-temperature, single-delivery hydride — <b>diisobutyl​aluminium hydride (DIBAL-H)</b> at low temperature — which delivers one hydride and stops at a stable intermediate that only collapses to the aldehyde on aqueous work-up.',
          '(a) Nitrile → imine → (hydrolysis) <b>pentanal</b>:<br>CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>CN →<sup>(i) DIBAL-H</sup><sub>low <i>T</i></sub> →<sup>(ii) H₂O</sup> CH<sub>3</sub>(CH<sub>2</sub>)<sub>3</sub>CHO',
          '(The classical Stephen route, SnCl<sub>2</sub>/HCl then hydrolysis, achieves the same nitrile → aldehyde conversion.)',
          '(b) Ester → <b>benzaldehyde</b>:<br>C<sub>6</sub>H<sub>5</sub>COOC<sub>2</sub>H<sub>5</sub> →<sup>(i) DIBAL-H</sup><sub>low <i>T</i></sub> →<sup>(ii) H₂O</sup> C<sub>6</sub>H<sub>5</sub>CHO',
          '<b>Why a stronger hydride fails:</b> LiAlH<sub>4</sub> supplies hydride fast and repeatedly, so the aldehyde formed is reduced again before it can escape — selectivity is lost. DIBAL-H’s bulk and the cold conditions trap the reaction at the one-addition stage.',
          '<b>Reactivity comparison:</b> the products are <b>pentanal</b> (aliphatic) and <b>benzaldehyde</b> (aromatic). The benzene ring donates electron density into the carbonyl by resonance, reducing the <i>δ</i>+ on the carbonyl carbon, so <b>pentanal is more reactive</b> toward nucleophiles than benzaldehyde. The rigour here is recognising that reagent selectivity, not just “reduction,” is the examiner’s target.',
        ],
        ans: 'DIBAL-H at low temperature, then H<sub>2</sub>O, for both (the Stephen reaction also serves the nitrile), giving pentanal and benzaldehyde; LiAlH<sub>4</sub> would over-reduce to the alcohol. Pentanal is the more reactive.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the IUPAC name of CH<sub>3</sub>–CH=CH–CHO and draw the structure of 3-methylbutanal.',
            a: 'But-2-enal; structure (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub>–CHO.',
          },
          {
            q: '[NEET] Identify the most reactive species toward nucleophilic addition among: benzaldehyde, propanal, propanone, acetophenone.',
            a: 'Propanal.',
          },
          {
            q: '[JEE Main] Toluene is converted to benzaldehyde. Write the reagents for (i) the Étard reaction and (ii) the side-chain chlorination route, and name the intermediate in (ii).',
            a: '(i) chromyl chloride CrO<sub>2</sub>Cl<sub>2</sub> (then hydrolysis); (ii) Cl<sub>2</sub>/heat or <i>hν</i> giving benzal chloride C<sub>6</sub>H<sub>5</sub>CHCl<sub>2</sub>, then hydrolysis.',
          },
          {
            q: '[JEE Main] Give the products and name them when but-2-yne undergoes hydration (H<sub>2</sub>O, H<sub>2</sub>SO<sub>4</sub>, HgSO<sub>4</sub>), and contrast with the product from ethyne under the same conditions.',
            a: 'But-2-yne → butan-2-one (a ketone); ethyne is the lone exception, giving ethanal (an aldehyde).',
          },
          {
            q: '[JEE Advanced] A compound C<sub>4</sub>H<sub>8</sub>O is a carbonyl compound that gives a positive test for a methyl-ketone substructure. Identify it, give its IUPAC name, and list its two open-chain carbonyl functional isomers of formula C<sub>4</sub>H<sub>8</sub>O.',
            a: 'Butan-2-one (CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub>); functional isomers C<sub>4</sub>H<sub>8</sub>O: butanal (CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO) and 2-methylpropanal ((CH<sub>3</sub>)<sub>2</sub>CHCHO). (The methyl-ketone test is the iodoform test, Topic 02.)',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The correct IUPAC name of (CH<sub>3</sub>)<sub>3</sub>C–CHO is:',
        opts: [
          { label: '2,2-​dimethylpropanal', nudge: null },
          { label: 'trimethyl​acetaldehyde', nudge: '<b>(b)</b> is the common name, not IUPAC.' },
          { label: 'tert-butanal', nudge: '<b>(c)</b> mixes a common-name prefix (tert-) with an IUPAC suffix and ignores the chain: the longest chain through –CHO has three carbons, not the four that “butanal” claims.' },
          {
            label: '2,2-​dimethylpropan-1-al',
            nudge: '<b>(d)</b> is a classic trap — the –CHO carbon is always C-1, so adding the redundant locant “-1-al” is wrong; the locant is omitted.',
          },
        ],
        correct: 0,
        solution: 'The longest chain containing –CHO is three carbons (propanal) with two methyls on C-2.',
      },
      {
        t: 'mcq',
        q: 'Which conversion is achieved by the Rosenmund reduction?',
        opts: [
          { label: 'ketone → secondary alcohol', nudge: '<b>(a)</b> is ordinary catalytic hydrogenation.' },
          { label: 'acyl chloride → aldehyde', nudge: null },
          { label: 'nitrile → aldehyde', nudge: '<b>(c)</b> is the Stephen reaction (or DIBAL-H).' },
          {
            label: 'ester → aldehyde',
            nudge: '<b>(d)</b> is the DIBAL-H reduction of esters — students who memorise “Pd/BaSO<sub>4</sub> = makes aldehydes” without the substrate get trapped here.',
          },
        ],
        correct: 1,
        solution: 'Rosenmund reduces an acid chloride with H<sub>2</sub> over Pd/BaSO<sub>4</sub> (a poisoned catalyst) and stops at the aldehyde.',
      },
      {
        t: 'mcq',
        q: 'Aldehydes are generally more reactive than ketones toward nucleophilic addition because, in ketones, the two alkyl groups:',
        opts: [
          { label: 'increase the positive charge on carbonyl carbon and add steric strain', nudge: '<b>(a)</b> reverses the electronic effect.' },
          { label: 'decrease the positive charge on carbonyl carbon and add steric hindrance', nudge: null },
          { label: 'only add steric hindrance with no electronic effect', nudge: '<b>(c)</b> ignores the electronic contribution (the +I effect of the two alkyl groups).' },
          {
            label: 'make the carbonyl oxygen more electrophilic',
            nudge: '<b>(d)</b> confuses the roles — oxygen is the nucleophilic, not electrophilic, centre.',
          },
        ],
        correct: 1,
        solution: 'Two +I alkyl groups push electron density onto the carbonyl carbon, lowering its <i>δ</i>+ (electronic) while also crowding the approach of the nucleophile (steric).',
      },
      {
        t: 'mcq',
        q: 'Which single compound is not a functional isomer of the other three?',
        opts: [
          {
            label: 'propanal',
            nudge: '<b>(a)</b> propanal, CH<sub>3</sub>CH<sub>2</sub>CHO, is C<sub>3</sub>H<sub>6</sub>O, a functional isomer of (b) and (c).',
          },
          {
            label: 'propanone',
            nudge: '<b>(b)</b> propanone, CH<sub>3</sub>COCH<sub>3</sub>, is C<sub>3</sub>H<sub>6</sub>O, a functional isomer of (a) and (c).',
          },
          {
            label: 'prop-2-en-1-ol',
            nudge: '<b>(c)</b> prop-2-en-1-ol, CH<sub>2</sub>=CHCH<sub>2</sub>OH, is C<sub>3</sub>H<sub>6</sub>O too, an unsaturated-alcohol isomer of (a) and (b).',
          },
          { label: 'ethoxyethane', nudge: null },
        ],
        correct: 3,
        solution: 'Ethoxyethane is C<sub>4</sub>H<sub>10</sub>O — a different molecular formula entirely, so it cannot be an isomer. The trap is that an unsaturated alcohol (prop-2-en-1-ol) and a cyclic ether (methyloxirane) really are C<sub>3</sub>H<sub>6</sub>O isomers, so a quick glance at “ether” tempts a wrong inclusion; always confirm the molecular formula before declaring isomerism.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Putting a number on the aldehyde group.</b> Writing “propan-1-al” or “butan-1-al” is wrong: the –CHO carbon is necessarily terminal and is C-1 by definition, so the locant is dropped.',
          '<b>Numbering a ketone from the wrong end.</b> Always number to give the carbonyl the lowest locant — pentan-2-one, never pentan-4-one. Check both ends before committing.',
          '<b>Applying “aldehyde > ketone” mechanically.</b> The rule assumes ordinary alkyl substituents. Chloral (CCl<sub>3</sub>CHO, −I groups) outranks ordinary aldehydes, and aromatic aldehydes/ketones are de-activated by ring resonance. Decide reactivity by reasoning about the carbonyl carbon’s <i>δ</i>+, not by reflex.',
          '<b>Mismatching a named reaction to its substrate.</b> Rosenmund needs an acyl chloride; Stephen and DIBAL-H act on nitriles; Étard and Gattermann–Koch make aromatic aldehydes; dialkylcadmium makes ketones from acyl chlorides. Memorise the substrate, not just the name.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy).</b> For reactivity questions, do a 5-second “charge audit”: count electron-withdrawing groups (they raise reactivity) versus electron-donating alkyl/aryl-resonance groups (they lower it) on the carbonyl carbon, and rank. For preparation questions where the answer must be an aldehyde, your safety reflex is “use a gentle, selective reagent” — Rosenmund’s poisoned catalyst or DIBAL-H at low temperature — because the examiner is almost always testing whether you can avoid over-reduction.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Carbonyl >C=O',
            note: 'sp<sup>2</sup> carbon, trigonal planar, ≈ 120°; C=O shorter (123 pm) and stronger (745 kJ mol<sup>−1</sup>) than C=C.',
          },
          {
            f: 'Polarity',
            note: 'C<sup><i>δ</i>+</sup>=O<sup><i>δ</i>−</sup>, resonance hybrid >C=O ↔ >C<sup>+</sup>–O<sup>−</sup>, dipole ≈ 2.3–2.9 D. Carbon = electrophilic (Lewis acid); oxygen = nucleophilic (Lewis base).',
          },
          {
            f: 'General formula C<sub><i>n</i></sub>H<sub>2<i>n</i></sub>O',
            note: '(saturated aliphatic; an aldehyde and a ketone with the same number of carbons are functional isomers).',
          },
          {
            f: 'Naming',
            note: 'alkane −e + <b>-al</b> (aldehyde, –CHO is always C-1, no locant) <b>/ -one</b> (ketone, lowest locant to C=O); ring-CHO → <b>-carbaldehyde</b>; aryl → benzaldehyde. Suffix priority: acid > ester > … > <b>aldehyde > ketone</b> > alcohol.',
          },
          {
            f: 'Reactivity (Nu addition)',
            note: 'CCl<sub>3</sub>CHO > HCHO > CH<sub>3</sub>CHO > CH<sub>3</sub>COCH<sub>3</sub>; aldehyde > ketone; aliphatic > aromatic.',
          },
          {
            f: 'Preparation: both',
            note: 'oxidation/dehydrogenation of alcohols (1° → aldehyde, 2° → ketone); ozonolysis of alkenes; hydration of alkynes (H<sub>2</sub>O, H<sub>2</sub>SO<sub>4</sub>, HgSO<sub>4</sub>; ethyne is the lone aldehyde exception).',
          },
          {
            f: 'Preparation: aldehydes',
            note: 'Rosenmund (acyl chloride, H<sub>2</sub>, Pd/BaSO<sub>4</sub>); Stephen or DIBAL-H (nitriles); DIBAL-H (esters); from toluene: Étard (CrO<sub>2</sub>Cl<sub>2</sub>) or side-chain Cl<sub>2</sub>, then hydrolysis; from benzene: Gattermann–Koch (CO, HCl).',
          },
          {
            f: 'Preparation: ketones',
            note: 'dialkylcadmium + acyl chloride; Grignard + nitrile; Friedel–Crafts acylation (aryl ketones).',
          },
        ],
        aids: [
          '“CHO is always Number One” (no locant on aldehydes).',
          '“Rose-A-C” — <b>Rose</b>nmund acts on <b>A</b>cyl <b>C</b>hloride to give an aldehyde.',
          '“Gentle reagent = aldehyde survives” (Rosenmund’s poison, DIBAL-H cold).',
        ],
      },
    ],
  },
];
