import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topic 03, Carboxylic Acids — Structure, Preparation & Properties:
 * pp. 387–394 of the Class 12 Chemistry Master Reference, word for word, split at
 * its Sections 1 to 8. Figure 8.4 (caption p. 387, drawn p. 388) sits in "Concept
 * intuition" after the paragraph on the carboxylate ion, where the book prints its
 * caption; it is redrawn in lib/diagrams/chemistry-12-08.ts. The book sets formulas
 * in maths italic; here species are upright, hybrid labels upright (sp<sup>2</sup>),
 * +I and −I upright, group bonds as en dashes (–NO<sub>2</sub>). "Sub-0N" is
 * "Topic 0N" and "sub-topic" is "topic".
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 03 · pp. 387–394 ─────────────────────────
  {
    n: '03',
    title: 'Carboxylic Acids — Structure, Preparation & Properties',
    kalam: 'If you understand why the carboxylate ion is so stable, most of this topic follows.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Carboxylic acids are a guaranteed scorer. CBSE Boards reliably ask an acidity-ordering question (with reasoning), a “convert / complete the reaction” prep question, and a “distinguish between these two” test. NEET pulls quick acidity rankings and the carbonate/bicarbonate identification. JEE Main sets multi-step synthesis chains (Grignard + CO<sub>2</sub>, alkylbenzene oxidation), and JEE Advanced probes the subtleties — how the position of an electron-withdrawing group changes acidity, and chemoselective reduction that must spare an ester or nitro group. If you understand why the carboxylate ion is so stable, most of this topic follows.',
      },
      {
        t: 'p',
        html: 'A carboxyl group, –COOH, looks like a mash-up of two groups you already know — a <b>carbonyl</b> (C=O) stuck onto a <b>hydroxyl</b> (–OH). The natural guess is that it should behave like an aldehyde/ketone at the carbonyl and like an alcohol at the –OH. The surprise — and the key to the whole topic — is that it behaves like <b>neither</b>. The two halves talk to each other through resonance, and the conversation changes both of them.',
      },
      {
        t: 'p',
        html: 'Think about it this way. The hydroxyl oxygen has lone pairs, and one of them is constantly being donated into the neighbouring carbonyl. That donation does two things. First, it feeds electron density into the carbonyl carbon, so the carboxyl carbon is <b>less electrophilic</b> than a plain carbonyl carbon — which is exactly why carboxylic acids do <b>not</b> undergo the simple nucleophilic addition (HCN, NaHSO<sub>3</sub>, etc.) that we saw aldehydes and ketones do so readily in Topic 02. Second, and more importantly, the same resonance makes the O–H hydrogen unusually easy to release as H<sup>+</sup>. Why? Because once the proton leaves, the resulting <b>carboxylate ion</b> spreads its negative charge equally over two oxygen atoms by resonance. The charge is not stuck in one place; it is shared by two of the most electronegative atoms in organic chemistry. A spread-out, stabilised anion is a happy anion, and a happy conjugate base means a willing acid.',
      },
      { t: 'fig', id: 'c12-08-fig-8.4' },
      {
        t: 'p',
        html: 'This is the single most exam-relevant idea in the topic, so compare it with phenol. A phenoxide ion also delocalises its charge, but onto ring carbon atoms — and carbon is far less electronegative than oxygen, and the resonance structures are not equivalent. So phenoxide is stabilised, but less effectively than carboxylate. That is why <b>carboxylic acids are stronger acids than phenols, which are in turn stronger than alcohols</b>. The whole acidity hierarchy is just “how well can the conjugate base hold the negative charge?”',
      },
      {
        t: 'p',
        html: 'Picture acidity like a relay team passing a hot potato (the negative charge). In a carboxylate, two strong, equally-able runners (the two oxygens) share it — comfortable. In a phenoxide, the potato gets passed to weaker runners (ring carbons) — less comfortable. In an alkoxide, there is essentially one runner and no sharing at all — least comfortable, weakest acid.',
      },
      {
        t: 'p',
        html: 'There is also a real-world fingerprint: carboxylic acids are <b>higher boiling</b> than alcohols, aldehydes and ketones of similar mass, because two molecules clasp together through a pair of hydrogen bonds to form a <b>dimer</b> that survives even into the vapour phase. The lower acids dissolve freely in water (hydrogen bonding) but solubility falls as the greasy hydrocarbon tail grows.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> Substituent effects on acidity work through induction, which <b>falls off sharply with distance</b> — a halogen on the α-carbon matters far more than the same halogen further down the chain. Direct attachment of a phenyl or vinyl group raises acidity (the sp<sup>2</sup> carbon is more electronegative) even though one might naively expect resonance to lower it. And the inductive logic assumes we are comparing the stabilities of conjugate bases — always reason about the anion, not the neutral acid.',
      },

      { t: 'part', title: 'Key definitions, data and reaction map' },
      {
        t: 'p',
        html: '<b>Functional group:</b> –COOH (carboxyl = carbonyl + hydroxyl). Aliphatic RCOOH or aromatic ArCOOH.',
      },
      {
        t: 'p',
        html: '<b>Structure facts:</b> the carboxyl carbon is sp<sup>2</sup>, bonds separated by ≈ 120°; resonance makes it <b>less electrophilic</b> than a carbonyl carbon (hence no simple nucleophilic addition).',
      },
      {
        t: 'p',
        html: '<b>Nomenclature:</b> IUPAC = alkane −e + <b>-oic acid</b>; the carboxyl carbon is <b>C-1</b>. Two groups at the ends of a chain → <b>-dioic acid</b>, keeping the alkane’s -e (hexanedioic acid); three groups, or groups on a ring → <b>-tricarboxylic</b> or <b>-dicarboxylic acid</b> (propane-1,2,3-​tricarboxylic acid, benzene-1,2-​dicarboxylic acid), positions by numerals. Common names end in <b>-ic acid</b> from Latin/Greek sources (formic = ant, acetic = vinegar, butyric = rancid butter).',
      },
      {
        t: 'table',
        title: null,
        head: ['Acid', 'pKa', 'Strength cue'],
        rows: [
          ['Trifluoro​acetic (CF<sub>3</sub>COOH, TFA)', '0.23', 'strongest common carboxylic acid'],
          ['Benzoic', '4.19', 'reference aromatic'],
          ['Acetic', '4.76', 'reference aliphatic'],
          ['Phenol', '10.0', '(for contrast — weaker)'],
          ['Ethanol', '15.9', '(for contrast — weakest)'],
        ],
      },
      {
        t: 'p',
        html: 'Lower p<i>K</i><sub>a</sub> = stronger acid. Carboxylic acids: weaker than mineral acids, <b>stronger than phenols and alcohols</b>.',
      },
      {
        t: 'formula',
        kicker: 'Substituent effect on acidity (increasing pull → increasing acidity)',
        main: 'Ph < I < Br < Cl < F < CN < NO<sub>2</sub> < CF<sub>3</sub>',
        legend: [
          'Ph = phenyl group',
          'I, Br, Cl, F = iodo, bromo, chloro and fluoro substituents',
          'CN = cyano group',
          'NO<sub>2</sub> = nitro group',
          'CF<sub>3</sub> = trifluoromethyl group',
          '< = gives a weaker acid than',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Aromatic ring: EWG (e.g. –NO<sub>2</sub>) raises acidity; EDG (e.g. –OCH<sub>3</sub>) lowers it — 4-nitro​benzoic (p<i>K</i><sub>a</sub> 3.41) > benzoic (4.19) > 4-methoxy​benzoic (4.46).',
      },
      {
        t: 'proc',
        title: 'Preparation map (6 routes)',
        steps: [
          '<b>1° alcohols & aldehydes</b> → oxidation (KMnO<sub>4</sub> neutral/acidic/alkaline, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, CrO<sub>3</sub>/Jones; aldehydes also by mild oxidants).',
          '<b>Alkylbenzenes</b> → vigorous oxidation (chromic acid / acidic or alkaline KMnO<sub>4</sub>); whole side chain → –COOH (a 1° or 2° alkyl group oxidises; a 3° one, whose benzylic carbon carries no H, does not). Suitable alkenes too.',
          '<b>Nitriles & amides</b> → hydrolysis (H<sup>+</sup> or OH<sup>−</sup>); nitrile → amide → acid (mild conditions stop at amide).',
          '<b>Grignard + CO<sub>2</sub></b> (dry ice) → RCOOMgX →<sup>H₃O⁺</sup> RCOOH — ascends the series by one carbon.',
          '<b>Acyl halides & anhydrides</b> → hydrolysis.',
          '<b>Esters</b> → acidic hydrolysis (acid directly) or basic hydrolysis/saponification (carboxylate, then acidify).',
        ],
      },
      {
        t: 'p',
        html: '<b>Reaction map:</b><br>• <b>O–H cleavage (acidity):</b> with active metals → H<sub>2</sub> + salt; with NaOH, Na<sub>2</sub>CO<sub>3</sub> or NaHCO<sub>3</sub> → salt (carbonate/bicarbonate also release CO<sub>2</sub>).<br>• <b>C–OH cleavage:</b> anhydride (Δ with H<sub>2</sub>SO<sub>4</sub> or P<sub>2</sub>O<sub>5</sub>); <b>esterification</b> (alcohol + conc. H<sub>2</sub>SO<sub>4</sub>/HCl); PCl<sub>5</sub>, PCl<sub>3</sub> or SOCl<sub>2</sub> → acyl chloride (SOCl<sub>2</sub> preferred); NH<sub>3</sub> → ammonium salt →<sup>Δ</sup> amide.<br>• <b>Other:</b> <b>reduction</b> (LiAlH<sub>4</sub> or diborane → 1° alcohol; NaBH<sub>4</sub> does <b>not</b> reduce –COOH); <b>decarboxylation</b> (Na salt + sodalime → alkane) and <b>Kolbe electrolysis</b>; <b>HVZ</b> α-halogenation (Cl<sub>2</sub> or Br<sub>2</sub>, red P).<br>• <b>Aromatic ring:</b> –COOH is deactivating + <b>meta-directing</b>; <b>no Friedel–Crafts</b>.',
      },

      { t: 'part', title: 'Key mechanisms and procedures' },
      {
        t: 'p',
        html: 'The reasoning is entirely about <b>conjugate-base stability</b> (recall the relay-team picture from Concept intuition).',
      },
      {
        t: 'proc',
        title: '3A. Why a carboxylic acid is acidic — and why substituents shift it',
        steps: [
          '<b>Baseline.</b> Loss of H<sup>+</sup> gives a carboxylate whose charge is shared by <b>two equivalent resonance structures</b> over two electronegative oxygens. This is far better stabilisation than a phenoxide (charge partly on ring carbons, non-equivalent structures) or an alkoxide (no delocalisation). Hence acetic acid ≫ phenol ≫ ethanol in acidity.',
          '<b>Electron-withdrawing groups (EWG) strengthen the acid.</b> An −I group (halogen, –NO<sub>2</sub>, –CN, –CF<sub>3</sub>) pulls electron density away from the carboxylate, helping spread the negative charge and stabilising the anion. More EWGs, or more electronegative ones, → stronger acid (trichloro​acetic > monochloro​acetic > acetic).',
          '<b>Distance matters.</b> Induction weakens rapidly along the chain, so a chlorine on the α-carbon strengthens the acid much more than the same chlorine two carbons away. Always check where the group sits, not just whether it is present.',
          '<b>Electron-donating groups (EDG) weaken the acid</b> by piling electron density onto an already-negative carboxylate, destabilising it.',
          '<b>Aromatic acids follow the same logic on the ring.</b> In benzoic acids, an electron-withdrawing substituent (e.g. –NO<sub>2</sub>) on the ring stabilises the carboxylate and raises acidity, while an electron-donating substituent (e.g. –OCH<sub>3</sub>) lowers it — hence 4-nitro​benzoic acid is stronger and 4-methoxy​benzoic acid weaker than benzoic acid itself. Note too that directly attaching a phenyl or vinyl group to the carboxyl raises acidity, because the sp<sup>2</sup> carbon it bonds to is more electronegative than an sp<sup>3</sup> alkyl carbon — a small twist that catches students who expect a benzene ring to always donate.',
        ],
      },
      {
        t: 'p',
        html: 'Carboxylic acids do not do simple nucleophilic addition (the carboxyl carbon is too weakly electrophilic); instead they undergo nucleophilic acyl <b>substitution</b>, where the –OH is converted into a leaving group.',
      },
      {
        t: 'proc',
        title: '3B. Esterification — nucleophilic acyl substitution (acid-catalysed)',
        steps: [
          '<b>Activation.</b> A proton from the acid catalyst protonates the carbonyl oxygen, boosting the electrophilicity of the carboxyl carbon.',
          '<b>Addition.</b> The alcohol oxygen (nucleophile) adds to that carbon, giving a tetrahedral intermediate.',
          '<b>Proton transfer.</b> A proton shifts so that the original –OH becomes –OH<sub>2</sub><sup>+</sup> — a far better leaving group.',
          '<b>Elimination.</b> Water leaves; loss of the catalytic proton gives the ester.',
        ],
      },
      {
        t: 'p',
        html: 'Because every step is reversible, the reaction is an <b>equilibrium</b> — driven forward by using excess alcohol or by removing water/ester as it forms (Le Chatelier).',
      },
      { t: 'p', html: '<b>3C. The preparation decision logic</b>' },
      {
        t: 'p',
        html: 'Match the starting material to the route, the same way we did for aldehyde/ketone prep in Topic 01:<br>• Need to <b>climb up one carbon</b> from an alkyl halide? Route through Grignard + CO<sub>2</sub> (or via the nitrile, then hydrolyse).<br>• Starting from a <b>1° alcohol or aldehyde</b>? Oxidise (and recall from Topic 02 that the aldehyde’s C–H makes this easy even with mild oxidants).<br>• Starting from an <b>aromatic side chain</b>? Vigorous oxidation cleaves the whole chain to –COOH, regardless of length — but a 3° benzylic carbon (no benzylic H) resists.<br>• Starting from an <b>acid derivative</b> (ester, amide, nitrile, acyl halide, anhydride)? Hydrolyse.',
      },
      { t: 'p', html: '<b>3D. The principal reactions, with their reasoning</b>' },
      {
        t: 'p',
        html: 'Most carboxylic-acid reactions are just the O–H or the C–OH bond being broken; knowing which bond tells you what to expect.',
      },
      {
        t: 'p',
        html: '• <b>Salt formation (O–H cleavage).</b> Active metals give hydrogen and a salt; alkalis give a salt and water; and even weak bases like carbonates and bicarbonates deprotonate them, releasing CO<sub>2</sub>, which ordinary phenols and alcohols cannot do. That last reaction is the standard laboratory <b>detection test</b> for a –COOH group and the clean way to tell an acid from a phenol. (Strictly, NaHCO<sub>3</sub> fizzes with any acid stronger than carbonic acid, p<i>K</i><sub>a</sub> about 6.4, so sulphonic acids and strongly acidic phenols such as picric acid and 2,4-​dinitrophenol fizz too.)<br>• <b>Anhydride formation (C–OH cleavage).</b> Heating with a dehydrating agent (H<sub>2</sub>SO<sub>4</sub> or P<sub>2</sub>O<sub>5</sub>) removes water between two acid molecules to give an anhydride.<br>• <b>Conversion to acyl chloride.</b> PCl<sub>5</sub>, PCl<sub>3</sub> or SOCl<sub>2</sub> replaces the –OH with –Cl. SOCl<sub>2</sub> is preferred because its by-products (SO<sub>2</sub> and HCl) are gases that simply escape, leaving a clean product.<br>• <b>Amide formation.</b> Ammonia first makes the ammonium salt; strong heating then drives off water to give the amide.<br>• <b>Reduction.</b> LiAlH<sub>4</sub> or diborane reduces the acid to a primary alcohol; NaBH<sub>4</sub> is too weak to touch the carboxyl group (the chemoselectivity point from worked example 4).<br>• <b>Decarboxylation and Kolbe electrolysis.</b> Heating the sodium salt with sodalime (NaOH:CaO, 3:1) expels CO<sub>2</sub> to give a hydrocarbon with one fewer carbon; electrolysis of an aqueous carboxylate salt (Kolbe) instead couples two alkyl fragments, giving a hydrocarbon with twice the alkyl carbons.<br>• <b>HVZ α-halogenation.</b> An acid with an α-hydrogen is halogenated at the α-carbon by Cl<sub>2</sub>/Br<sub>2</sub> in the presence of a little red phosphorus.<br>• <b>Aromatic ring.</b> Because –COOH withdraws electron density, it deactivates the ring and directs incoming electrophiles to the meta position, and the ring will not undergo Friedel–Crafts (the deactivated ring is unreactive and AlCl<sub>3</sub> binds to the carboxyl group).',
      },
      { t: 'p', html: '<b>3E. Physical properties — why the trends look the way they do</b>' },
      {
        t: 'p',
        html: 'Two structural facts explain the main physical trends. First, the –COOH group is an exceptional hydrogen-bond partner: two acid molecules clasp together through a pair of hydrogen bonds to form a stable <b>dimer</b> that persists even in the vapour phase or in non-polar solvents. This extensive association is why carboxylic acids <b>boil higher than alcohols, aldehydes and ketones of comparable molecular mass</b> — they effectively move around as doubled-up units. Second, the same –OH and C=O hydrogen-bond readily with water, so the lower acids (up to about four carbons) are freely <b>miscible with water</b>; as the greasy hydrocarbon tail lengthens, hydrophobic interactions win and solubility falls, until higher acids are essentially water-insoluble (benzoic acid, the simplest aromatic acid, is only sparingly soluble in cold water). Lower aliphatic acids are pungent liquids; higher ones are waxy, near-odourless solids.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Acidity ordering with reasoning',
        q: 'Arrange in <b>increasing</b> order of acid strength and justify: acetic acid, fluoroacetic acid, chloroacetic acid, propanoic acid.',
        steps: [
          'Reason about the conjugate base. Acid strength rises with electron-withdrawing power on the α-carbon and falls with electron-donating alkyl bulk.',
          'Propanoic acid (CH<sub>3</sub>CH<sub>2</sub>COOH): extra +I alkyl carbon destabilises the anion → <b>weakest</b>.',
          'Acetic acid (CH<sub>3</sub>COOH): one methyl, +I but less than propanoic’s ethyl → next.',
          'Chloroacetic acid (ClCH<sub>2</sub>COOH): Cl is −I, stabilises the anion → stronger.',
          'Fluoroacetic acid (FCH<sub>2</sub>COOH): F is the most electronegative halogen, strongest −I → <b>strongest</b>.',
          'State the principle (“electron-withdrawing groups stabilise the carboxylate and strengthen the acid”) to secure the reasoning mark.',
        ],
        ans: 'CH<sub>3</sub>CH<sub>2</sub>COOH < CH<sub>3</sub>COOH < ClCH<sub>2</sub>COOH < FCH<sub>2</sub>COOH',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — Distinguish an acid from a phenol',
        q: 'A quick test in the lab must tell apart benzoic acid and phenol. Name a single reagent that tells them apart, and say what is seen.',
        steps: [
          '<b>The trap.</b> Both are acidic and both react with NaOH, so NaOH cannot distinguish them. Students who reach for “litmus” or “NaOH” lose the mark.',
          '<b>Mental shortcut.</b> Carboxylic acids are strong enough to react with the weak base <b>sodium bicarbonate</b>, liberating CO<sub>2</sub>; phenols are too weak to do so.<br>C<sub>6</sub>H<sub>5</sub>COOH + NaHCO<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>COONa + H<sub>2</sub>O + CO<sub>2</sub>↑',
          'This bicarbonate test is the standard one-step discriminator, and the answer examiners expect. (Neutral FeCl<sub>3</sub>, violet with phenol, also tells them apart.)',
        ],
        ans: 'Add aqueous NaHCO<sub>3</sub> — <b>benzoic acid gives brisk effervescence (CO<sub>2</sub>); phenol does not.</b>',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Two-route synthesis + naming',
        q: 'Convert (i) bromoethane and (ii) toluene into the appropriate carboxylic acid, naming each product and the key reagent.',
        steps: [
          '(i) Bromoethane → <b>propanoic acid</b> by ascending the chain with Grignard + CO<sub>2</sub>:<br>CH<sub>3</sub>CH<sub>2</sub>Br →<sup>Mg/ether</sup> CH<sub>3</sub>CH<sub>2</sub>MgBr →<sup>(i) CO₂</sup> →<sup>(ii) H₃O⁺</sup> CH<sub>3</sub>CH<sub>2</sub>COOH',
          'The product has <b>one more carbon</b> than the halide — the signature of the CO<sub>2</sub> route. (Alternatively: CH<sub>3</sub>CH<sub>2</sub>Br →<sup>KCN</sup> CH<sub>3</sub>CH<sub>2</sub>CN →<sup>H₃O⁺</sup> propanoic acid.)',
          '(ii) Toluene → <b>benzoic acid</b> by vigorous side-chain oxidation:<br>C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub> → C<sub>6</sub>H<sub>5</sub>COOH<br>(KMnO<sub>4</sub>, KOH, Δ; then H<sub>3</sub>O<sup>+</sup>)',
          'The whole methyl side chain is oxidised to –COOH.',
          'The exam links route-selection (climb-a-carbon vs side-chain oxidation) to correct product naming.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Chemoselective reduction + positional acidity',
        q: 'A molecule contains <b>both</b> a carboxylic acid group and an ester group. You must reduce the <b>acid to a primary alcohol while leaving the ester intact</b>. Choose the reagent and justify. Then, separately, explain why 2-chloro​butanoic acid is a stronger acid than 4-chloro​butanoic acid.',
        steps: [
          '<b>Chemoselective reduction:</b> LiAlH<sub>4</sub> is too powerful — it reduces esters as well as acids, so it would destroy the ester. NaBH<sub>4</sub> is too weak — it does not reduce a carboxylic acid at all. The correct choice is <b>diborane (B<sub>2</sub>H<sub>6</sub>)</b>, which reduces the –COOH to a 1° alcohol but does <b>not</b> easily reduce esters (nor nitro or halo groups). So, of these three reagents, only diborane satisfies “reduce the acid, spare the ester.”',
          '<b>Positional acidity:</b> both acids have one chlorine exerting a −I effect, but the inductive effect <b>falls off steeply with distance</b> through the σ-framework. In 2-chloro​butanoic acid the chlorine sits on the α-carbon, right next to the carboxyl, so it strongly stabilises the carboxylate. In 4-chloro​butanoic acid the chlorine is three carbons away and its electron-withdrawing influence is largely attenuated before it reaches the carboxylate. Hence <b>2-chloro​butanoic acid is the stronger acid.</b>',
          'The examiner is testing two precise ideas at once: reagent chemoselectivity and the distance-dependence of induction.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Write the IUPAC names of (i) (CH<sub>3</sub>)<sub>2</sub>CHCOOH and (ii) HOOC–(CH<sub>2</sub>)<sub>4</sub>–COOH, and give one common name for each.',
            a: '(i) 2-methyl​propanoic acid (isobutyric acid); (ii) hexanedioic acid (adipic acid).',
          },
          {
            q: '[NEET] Which is the strongest acid: 4-nitro​benzoic acid, benzoic acid, 4-methoxy​benzoic acid, or 4-methyl​benzoic acid?',
            a: '4-nitro​benzoic acid (the –NO<sub>2</sub> EWG most stabilises the carboxylate; –OCH<sub>3</sub> and –CH<sub>3</sub> are EDGs that weaken it).',
          },
          {
            q: '[JEE Main] Give reagents to convert (i) butan-1-ol to butanoic acid and (ii) ethane​nitrile to ethanoic acid; name each reaction type.',
            a: '(i) acidified/alkaline KMnO<sub>4</sub> (or K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sup>+</sup>) — oxidation; (ii) hydrolysis with H<sup>+</sup> or OH<sup>−</sup> — nitrile hydrolysis.',
          },
          {
            q: '[JEE Main] How will you distinguish, by a single chemical test in each case: (i) benzoic acid and ethyl benzoate; (ii) acetic acid and phenol?',
            a: '(i) NaHCO<sub>3</sub> → benzoic acid effervesces (CO<sub>2</sub>), ester does not; (ii) NaHCO<sub>3</sub> → acetic acid effervesces, phenol does not.',
          },
          {
            q: '[JEE Advanced] Arrange in increasing acid strength and justify: FCH<sub>2</sub>COOH, ClCH<sub>2</sub>COOH, Cl<sub>2</sub>CHCOOH, Cl<sub>3</sub>CCOOH, CH<sub>3</sub>COOH.',
            a: 'CH<sub>3</sub>COOH < ClCH<sub>2</sub>COOH < FCH<sub>2</sub>COOH < Cl<sub>2</sub>CHCOOH < Cl<sub>3</sub>CCOOH (acidity rises with number and electronegativity of −I halogens on the α-carbon; F beats one Cl, but two/three Cl outweigh a single F).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Why are carboxylic acids stronger acids than phenols?',
        opts: [
          { label: 'the carboxyl O–H bond is weaker by mass', nudge: '<b>(a)</b> misattributes it to mass.' },
          {
            label: 'the carboxylate ion is stabilised by two equivalent resonance structures spreading charge over two oxygens',
            nudge: null,
          },
          { label: 'phenols have no O–H bond', nudge: '<b>(c)</b> is false — phenols do have O–H.' },
          {
            label: 'carboxylic acids are mineral acids',
            nudge: '<b>(d)</b> is false — carboxylic acids are weaker than mineral acids.',
          },
        ],
        correct: 1,
        solution: 'The carboxylate delocalises charge equally over two electronegative oxygens; the phenoxide spreads it onto less electronegative ring carbons in non-equivalent structures.',
      },
      {
        t: 'mcq',
        q: 'Which reagent reduces a carboxylic acid to a primary alcohol?',
        opts: [
          {
            label: 'NaBH<sub>4</sub>',
            nudge: '<b>(a)</b> NaBH<sub>4</sub> does <b>not</b> reduce the carboxyl group — a frequent trap.',
          },
          { label: 'LiAlH<sub>4</sub>', nudge: null },
          { label: 'Tollens’ reagent', nudge: '<b>(c)</b> Tollens’ oxidises aldehydes; it is not a reductant of acids.' },
          {
            label: 'H<sub>2</sub>/Pd-BaSO<sub>4</sub>',
            nudge: '<b>(d)</b> is Rosenmund’s catalyst for acyl chlorides → aldehydes.',
          },
        ],
        correct: 1,
        solution: 'LiAlH<sub>4</sub> (or diborane) reduces –COOH to RCH<sub>2</sub>OH.',
      },
      {
        t: 'mcq',
        q: 'Which acid is the <b>weakest</b>?',
        opts: [
          {
            label: 'FCH<sub>2</sub>COOH',
            nudge: '<b>(a)</b> Fluorine, the most electronegative halogen, pulls electrons (−I) and stabilises the anion: a much stronger acid.',
          },
          {
            label: 'ClCH<sub>2</sub>COOH',
            nudge: '<b>(b)</b> Chlorine is −I too, so chloroacetic acid is far stronger than propanoic acid.',
          },
          { label: 'CH<sub>3</sub>CH<sub>2</sub>COOH', nudge: null },
          {
            label: 'HCOOH',
            nudge: '<b>(d)</b> formic acid has only an H (no +I alkyl), so it is stronger than acetic/propanoic — students who assume “all small acids are weak” pick (d) wrongly.',
          },
        ],
        correct: 2,
        solution: 'Propanoic acid. Its alkyl chain is electron-donating (+I), destabilising the carboxylate.',
      },
      {
        t: 'mcq',
        q: 'The carboxyl group on a benzene ring is:',
        opts: [
          {
            label: 'activating and ortho/para-directing',
            nudge: '<b>(a)</b> is wrong on both counts: –COOH withdraws electrons, so it deactivates the ring and directs meta.',
          },
          { label: 'deactivating and meta-directing', nudge: null },
          {
            label: 'activating and meta-directing',
            nudge: '<b>(c)</b> has the direction right (meta) but wrongly calls –COOH activating; it deactivates the ring.',
          },
          {
            label: 'deactivating and ortho/para-directing',
            nudge: '<b>(d)</b> mixes up the directing pattern — an electron-withdrawing group such as –COOH is a meta-director (the halogens, deactivating yet ortho/para-directing, are the exception).',
          },
        ],
        correct: 1,
        solution: '–COOH withdraws electron density (deactivating) and directs electrophiles to the meta position; it also fails to undergo Friedel–Crafts.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Ignoring inductive distance.</b> A halogen on the α-carbon strengthens the acid far more than the same halogen further along the chain; never rank EWG effects without checking position.',
          '<b>Reasoning from the acid instead of the conjugate base.</b> Acidity is decided by how stable the anion is after H<sup>+</sup> leaves — argue from carboxylate stability, not from the neutral molecule.',
          '<b>Thinking NaBH<sub>4</sub> reduces –COOH.</b> It does not; use LiAlH<sub>4</sub> or diborane. And remember the chemoselectivity ladder: diborane spares esters/nitro/halo, LiAlH<sub>4</sub> does not.',
          '<b>Using NaOH to separate an acid from a phenol.</b> Both react with the strong base NaOH; the weak base NaHCO<sub>3</sub> reacts with the acid but not with an ordinary phenol, so it tells them apart (acid effervesces, phenol does not) and separates them.',
          '<b>Expecting nucleophilic addition.</b> Carboxylic acids resist the simple HCN/NaHSO<sub>3</sub> additions of aldehydes/ketones because resonance lowers the carboxyl carbon’s electrophilicity; they react by acyl substitution instead.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy).</b> For any acidity-ranking question, do a two-pass “conjugate-base audit”: (1) count and weight electron-withdrawing groups (raise acidity) versus electron-donating alkyl/EDG groups (lower it); (2) apply a distance penalty — α beats β beats γ. For “distinguish” questions involving an acid, the bicarbonate (CO<sub>2</sub>) test is almost always the intended one-step answer. For reductions, ask “must an ester/nitro survive?” — if yes, reach for <b>diborane</b>, not LiAlH<sub>4</sub>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Carboxyl –COOH',
            note: 'sp<sup>2</sup>, ≈ 120°; less electrophilic than a carbonyl (resonance) → <b>no nucleophilic addition</b>; acyl substitution at that carbon instead.',
          },
          {
            f: 'Acidity order',
            note: 'carboxylic acid > phenol > alcohol (carboxylate = two equivalent O-resonance structures). p<i>K</i><sub>a</sub> smaller = stronger; acetic 4.76, benzoic 4.19, TFA 0.23.',
          },
          {
            f: 'Substituent effect',
            note: 'Ph < I < Br < Cl < F < CN < NO<sub>2</sub> < CF<sub>3</sub> (increasing acidity); EWGs ↑, EDGs ↓; effect falls with <b>distance</b>.',
          },
          {
            f: 'Preparation',
            note: 'oxidise 1° alcohols/aldehydes; oxidise alkylbenzene side chains; hydrolyse nitriles/amides/esters/acyl halides/anhydrides; <b>Grignard + CO<sub>2</sub></b> (climbs one carbon).',
          },
          {
            f: 'Reactions',
            note: 'salts + CO<sub>2</sub> with carbonate/bicarbonate (ID test); anhydride; <b>esterification</b> (acyl substitution, reversible); SOCl<sub>2</sub> → acyl chloride; NH<sub>3</sub>, Δ → amide; <b>reduction</b> LiAlH<sub>4</sub>/diborane → 1° alcohol (NaBH<sub>4</sub> won’t); <b>decarboxylation</b> (sodalime) / <b>Kolbe</b>; <b>HVZ</b> α-halogenation. Aromatic ring: deactivating, <b>meta-directing, no Friedel–Crafts</b>.',
          },
        ],
        aids: [
          '“Two oxygens share the charge → carboxylate wins the acidity race.”',
          '“Bicarbonate fizzes for acids, not ordinary phenols.”',
          '“NaBH<sub>4</sub> skips the acid; LiAlH<sub>4</sub>/diborane do the job — diborane spares the ester.”',
          '“COOH is C-1, no locant needed.”',
        ],
      },
    ],
  },
];
