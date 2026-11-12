import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 8, Topic 02, Aldehydes & Ketones — Chemical Reactions: pp. 378–386
 * of the Class 12 Chemistry Master Reference, word for word, split at its
 * Sections 1 to 8. Figure 8.3, the two reactive sites of an aldehyde (caption
 * p. 378, drawn p. 379), sits in "Concept intuition" after the back-counter
 * paragraph it illustrates; it is redrawn in lib/diagrams/chemistry-12-08.ts.
 * The book prints Section 3's parts in the order 3A, 3B, 3D, 3C; 3D is moved
 * after 3C so they read in order.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 378–386 ─────────────────────────
  {
    n: '02',
    title: 'Aldehydes & Ketones — Chemical Reactions',
    kalam: 'Master the two reactive sites of the carbonyl and almost every question becomes pattern-recognition.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the highest-yield topic in the entire chapter. CBSE Boards pull 3–5 marks every year from “complete the reaction / how will you convert / how will you distinguish” questions, with Cannizzaro, aldol and the iodoform test as perennial favourites. NEET almost always asks one quick identification question (iodoform-positive? Tollens’/Fehling’s distinction? Cannizzaro condition?). JEE Main sets multi-step “name the product” sequences, and JEE Advanced builds entire integer-answer questions around intramolecular aldol counting (Additional topic B) and reagent selectivity (Clemmensen vs Wolff–Kishner). Master the two reactive sites of the carbonyl and almost every question becomes pattern-recognition.',
      },
      {
        t: 'p',
        html: 'In Topic 01 we built the carbonyl group and found that its carbon is electron-poor (<i>δ</i>+, electrophilic) while its oxygen is electron-rich (<i>δ</i>−, nucleophilic). Every reaction in this topic is the carbonyl cashing in on that polarity. The key insight is that an aldehyde or ketone is not a one-trick molecule — it has <b>two distinct reactive sites</b>, and almost every named reaction you will meet is one of these two engines firing.',
      },
      {
        t: 'p',
        html: 'Think about it this way. Picture the carbonyl group as a small shop with two service counters. The <b>front counter is the carbonyl carbon itself</b> — electron-poor, so it attracts nucleophiles (electron-rich reagents). When a nucleophile walks up and donates its pair, the C=O double bond breaks open, the carbon flips from flat (sp<sup>2</sup>) to tetrahedral (sp<sup>3</sup>), and a new bond forms. This single move — <b>nucleophilic addition</b> — is the parent of cyanohydrin formation, bisulphite adducts, acetal formation, imine/oxime/hydrazone formation, Grignard addition and reduction. They look like a zoo of different reactions, but mechanistically they are siblings: a nucleophile attacking the front counter.',
      },
      {
        t: 'p',
        html: 'The <b>back counter is the α-carbon</b> — the carbon next door to the carbonyl. Its hydrogens (the α-hydrogens) are unusually acidic. Why? Because once a base plucks one off, the leftover negative charge is not stranded on carbon; it slides onto the electronegative oxygen through resonance, giving a stabilised <b>enolate</b> ion. That stabilisation is what makes the α-H “give up” relatively easily. The enolate is itself a nucleophile, so it can march over and attack the front counter of another carbonyl molecule — and that is exactly the <b>aldol reaction</b>. The same acidic α-H also drives the haloform reaction. So a second whole family of reactions lives entirely at the back counter.',
      },
      { t: 'fig', id: 'c12-08-fig-8.3' },
      {
        t: 'p',
        html: 'Two more themes thread through everything. First, <b>aldehyde vs ketone reactivity</b>: aldehydes are more reactive toward nucleophilic addition (less steric crowding, less electron donation onto the carbonyl carbon — the reasoning from Topic 01 carries straight over). Second, <b>the H on an aldehyde’s carbonyl carbon</b> makes aldehydes easy to oxidise to carboxylic acids, which is why aldehydes reduce mild reagents like Tollens’ and Fehling’s while ketones essentially do not. That single structural difference is the basis of nearly every “distinguish A from B” question.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> The α-H reactions need a genuine α-hydrogen: benzaldehyde, formaldehyde and trimethyl​acetaldehyde have none, so they cannot do aldol on their own — instead they take the Cannizzaro route under concentrated alkali. Conversely, an aldehyde with an α-H reacts by aldol far faster than by Cannizzaro, so it normally gives aldol, not Cannizzaro (2-methylpropanal, with a single hindered α-H, is the known exception: concentrated alkali gives it Cannizzaro products). Fehling’s solution is essentially an aliphatic-aldehyde test — aromatic aldehydes like benzaldehyde do not respond. And mild oxidants distinguish aldehydes from ketones precisely because ketones lack the carbonyl-H needed for easy oxidation.',
      },

      { t: 'part', title: 'Key reactions, reagents and definitions' },
      {
        t: 'p',
        html: '<b>A. Nucleophilic addition family</b> (nucleophile attacks the carbonyl carbon):',
      },
      {
        t: 'table',
        title: null,
        head: ['Reagent', 'Product', 'Notes'],
        rows: [
          ['HCN (base-catalysed)', 'cyanohydrin (α-hydroxy​nitrile)', 'CN<sup>−</sup> is the true nucleophile; useful synthetic intermediate'],
          [
            'NaHSO<sub>3</sub>',
            'bisulphite addition compound',
            'water-soluble crystalline solid; equilibrium lies right for aldehydes & unhindered aliphatic methyl ketones, left for most ketones (steric); regenerated by dilute acid/alkali ⇒ used to <b>purify/separate</b> aldehydes',
          ],
          ['RMgX (then H<sub>3</sub>O<sup>+</sup>)', 'alcohol', '1° from methanal, 2° from other aldehydes, 3° from ketones'],
          [
            'alcohol + dry HCl',
            'hemiacetal (1 equiv) → acetal (2 equiv)',
            'gem-dialkoxy; ketone + ethylene glycol → cyclic <b>ketal</b>; hydrolysed back by aqueous acid ⇒ <b>carbonyl protecting group</b>',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>B. Addition–elimination with ammonia derivatives</b> H<sub>2</sub>N–Z (acid-catalysed, optimum pH ≈ 3.5): the adduct loses water to give >C=N–Z.',
      },
      {
        t: 'table',
        title: null,
        head: ['Reagent (Z)', 'Product'],
        rows: [
          ['ammonia (–H)', 'imine'],
          ['primary amine (–R)', 'substituted imine (<b>Schiff’s base</b>)'],
          ['hydroxylamine (–OH)', 'oxime'],
          ['hydrazine (–NH<sub>2</sub>)', 'hydrazone'],
          ['phenylhydrazine (–NHC<sub>6</sub>H<sub>5</sub>)', 'phenylhydrazone'],
          ['2,4-dinitrophenyl​hydrazine (Brady’s)', '2,4-DNP derivative — yellow/orange/red solid, used to <b>characterise</b> aldehydes and ketones'],
          ['semicarbazide (–NHCONH<sub>2</sub>)', 'semicarbazone'],
        ],
      },
      {
        t: 'p',
        html: '<b>C. Reduction</b><br>• <b>To alcohols:</b> NaBH<sub>4</sub>, LiAlH<sub>4</sub>, or H<sub>2</sub>/Ni, Pt, Pd → aldehyde to 1° alcohol, ketone to 2° alcohol. <b>Selectivity:</b> LiAlH<sub>4</sub> also reduces esters/acid chlorides; NaBH<sub>4</sub> is milder (leaves esters and –NO<sub>2</sub> untouched); catalytic H<sub>2</sub> also reduces C=C.<br>• <b>To hydrocarbons</b> (>C=O → >CH<sub>2</sub>): <b>Clemmensen</b> (Zn–Hg/conc. HCl, acidic) and <b>Wolff–Kishner</b> (NH<sub>2</sub>NH<sub>2</sub>, then KOH/ethylene glycol, ≈ 180–200 °C, basic).',
      },
      {
        t: 'p',
        html: '<b>D. Oxidation</b> (under mild conditions only aldehydes are oxidised; ketones need vigorous conditions, which break a C–C bond):',
      },
      {
        t: 'table',
        title: null,
        head: ['Reagent', 'Observation', 'Detects'],
        rows: [
          ['Tollens’ reagent ([Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>, ammoniacal AgNO<sub>3</sub>)', 'silver mirror', 'aldehydes'],
          ['Fehling’s solution (alkaline Cu<sup>2+</sup> + Rochelle salt)', 'red-brown Cu<sub>2</sub>O ppt', 'aliphatic aldehydes (not benzaldehyde)'],
          ['acidified KMnO<sub>4</sub>/K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (strong)', 'RCHO → RCOOH', '—'],
        ],
      },
      {
        t: 'p',
        html: '<b>E. α-hydrogen reactions</b><br>• <b>Aldol condensation:</b> carbonyl with ≥ 1 α-H + dilute alkali → β-hydroxy aldehyde (<b>aldol</b>) / β-hydroxy ketone (<b>ketol</b>); on heating, loses water → <b>α,β-unsaturated carbonyl</b>.<br>• <b>Iodoform / haloform reaction:</b> a CH<sub>3</sub>CO– group joined to H, an alkyl or an aryl group (or a CH<sub>3</sub>CH(OH)– group, likewise joined, which is oxidisable to it) + X<sub>2</sub>/NaOH → CHX<sub>3</sub> (iodoform = yellow CHI<sub>3</sub>) + carboxylate. Notably, ethanol and ethanal also test positive (they carry, or oxidise to, the CH<sub>3</sub>CO– unit), which is why the test flags a substructure rather than a single compound. Acetic acid, its esters and its amide carry CH<sub>3</sub>CO– too, but do not give the test.',
      },
      {
        t: 'p',
        html: '<b>F. Cannizzaro reaction:</b> aldehyde with <b>no α-H</b> + conc. alkali → disproportionation: one molecule reduced to alcohol, another oxidised to carboxylate salt.',
      },
      {
        t: 'p',
        html: '<b>Reactivity (recap from Topic 01):</b> HCHO > CH<sub>3</sub>CHO > CH<sub>3</sub>COCH<sub>3</sub>; aldehyde > ketone; aliphatic > aromatic.',
      },

      { t: 'part', title: 'Key mechanisms and procedures' },
      {
        t: 'p',
        html: 'Three mechanisms unlock almost every reaction above. Learn the logic, not the arrows by rote.',
      },
      {
        t: 'proc',
        title: '3A. Nucleophilic addition (the master mechanism)',
        steps: [
          '<b>Attack.</b> A nucleophile Nu<sup>−</sup> approaches the carbonyl carbon roughly perpendicular to the plane of the sp<sup>2</sup> carbon and donates a lone pair into the π* of C=O. <b>Reasoning:</b> the carbon is the <i>δ</i>+ centre, so that is where electron-rich species go.',
          '<b>Rehybridisation.</b> As the new C–Nu bond forms, the carbon changes from sp<sup>2</sup> to sp<sup>3</sup> and the π electrons collapse onto oxygen, giving a tetrahedral <b>alkoxide</b> intermediate. <b>Reasoning:</b> oxygen is happy to hold the negative charge (electronegative).',
          '<b>Protonation.</b> The alkoxide grabs a proton from the medium to give the neutral product. <b>Net result:</b> Nu and H add across the C=O double bond.',
        ],
      },
      {
        t: 'formula',
        kicker: 'Nucleophilic addition (the master mechanism)',
        main: '>C=O →<sup>Nu⁻</sup> >C(Nu)–O<sup>−</sup> →<sup>H⁺</sup> >C(Nu)–OH',
        legend: [
          '>C=O = carbonyl group of an aldehyde or ketone',
          'Nu<sup>−</sup> = nucleophile (electron-rich reagent)',
          '>C(Nu)–O<sup>−</sup> = tetrahedral alkoxide intermediate',
          'H<sup>+</sup> = proton from the medium',
          '>C(Nu)–OH = neutral product, Nu and H added across C=O',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'For weak nucleophiles such as ammonia derivatives, a trace of acid first protonates the carbonyl oxygen, boosting the carbon’s electrophilicity so the weak nucleophile can attack — which is why those reactions run best around pH 3.5 (too acidic protonates the amine and kills it; too basic stops protonating the carbonyl).',
      },
      {
        t: 'p',
        html: '<b>A consequence worth seeing — acetals as a protecting group.</b> Acetal/ketal formation is reversible: an aldehyde plus two equivalents of alcohol (or one equivalent of a diol) under dry HCl gives the acetal, and aqueous acid hydrolyses it straight back to the carbonyl. Because the acetal is stable to base and to hydride reagents, chemists exploit it to “hide” a reactive aldehyde while they transform some other part of the molecule, then unmask it at the end. So a step that looks like an obscure addition is really a practical on/off switch for the carbonyl — and aldehydes, being more reactive, form acetals more readily than ketones, mirroring the general aldehyde > ketone reactivity order.',
      },
      {
        t: 'proc',
        title: '3B. Aldol condensation (base-catalysed)',
        steps: [
          '<b>Enolate formation.</b> A base removes an α-H to give a carbanion that is resonance-stabilised as the <b>enolate</b> (negative charge delocalised onto oxygen). <b>Reasoning:</b> this resonance is the whole reason α-H is acidic.',
          '<b>Carbon–carbon bond formation.</b> The enolate (a nucleophile) attacks the carbonyl carbon of a second molecule — this is just mechanism 3A with the enolate as Nu. A new C–C bond forms and an alkoxide results.',
          '<b>Protonation → aldol.</b> Protonation gives the β-hydroxy carbonyl compound (the aldol).',
          '<b>Dehydration → condensation.</b> On heating, the aldol loses water (the α,β double bond is conjugated with C=O, and that conjugation is the driving force) to give the <b>α,β-unsaturated carbonyl</b>.',
        ],
      },
      {
        t: 'p',
        html: '<b>Worked illustration (self-aldol of ethanal):</b> two molecules of CH<sub>3</sub>CHO give 3-hydroxybutanal, which on heating gives but-2-enal (crotonaldehyde):',
      },
      {
        t: 'formula',
        kicker: 'Self-aldol of ethanal',
        main: '2 CH<sub>3</sub>CHO →<sup>dil. NaOH</sup> CH<sub>3</sub>CH(OH)CH<sub>2</sub>CHO →<sup>Δ, −H₂O</sup> CH<sub>3</sub>CH=CHCHO',
        legend: [
          'CH<sub>3</sub>CHO = ethanal',
          'dil. NaOH = dilute alkali',
          'CH<sub>3</sub>CHOHCH<sub>2</sub>CHO = 3-hydroxybutanal, the aldol',
          'Δ, −H<sub>2</sub>O = heating, with loss of water',
          'CH<sub>3</sub>CH=CHCHO = but-2-enal (crotonaldehyde)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Cross aldol — why four products appear.</b> When two different carbonyl compounds that <b>both</b> carry α-H are mixed, either one can become the enolate (nucleophile) and either one can serve as the electrophile, so four combinations result. For a mix of ethanal and propanal the four are: ethanal-enolate + ethanal, ethanal-enolate + propanal, propanal-enolate + ethanal, and propanal-enolate + propanal — i.e. two self-products and two crossed products. That mixture is hard to separate, so unconstrained cross aldol is rarely useful synthetically. The reaction becomes clean and useful when one partner has <b>no α-H</b> (e.g. benzaldehyde or formaldehyde): that partner cannot form an enolate, so it is locked into the electrophile role, and only the α-H-bearing partner supplies the enolate. This collapses the four possibilities to one main cross product (the α-H partner’s own self-aldol still competes a little) — the basis of named variants like the benzaldehyde + ethanal route to cinnamaldehyde.',
      },
      {
        t: 'proc',
        title: '3C. Cannizzaro reaction (hydride-transfer disproportionation)',
        steps: [
          'Hydroxide adds to the carbonyl carbon of an aldehyde that has <b>no α-H</b>, giving a tetrahedral alkoxide (mechanism 3A with Nu = OH<sup>−</sup>).',
          'This intermediate transfers a <b>hydride ion</b> to the carbonyl carbon of a second aldehyde molecule.',
          'The donor becomes a <b>carboxylate</b> (oxidised); the acceptor becomes an <b>alkoxide</b> → <b>alcohol</b> (reduced). One reaction, opposite fates — hence self oxidation–reduction.',
        ],
      },
      {
        t: 'formula',
        kicker: 'Cannizzaro reaction',
        main: '2 HCHO + NaOH → CH<sub>3</sub>OH + HCOONa',
        legend: [
          'HCHO = methanal (formaldehyde), an aldehyde with no α-H',
          'NaOH = concentrated sodium hydroxide',
          'CH<sub>3</sub>OH = methanol, the reduced product (alcohol)',
          'HCOONa = sodium formate, the oxidised product (carboxylate salt)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The procedural decision tree for any “α-H present?” question: <b>α-H present</b> → aldol (and iodoform if it is a methyl ketone or ethanal); <b>no</b> α-H → Cannizzaro under concentrated alkali.',
      },
      {
        t: 'p',
        html: '<b>3D. Why aldehydes oxidise easily (and ketones resist)</b>',
      },
      {
        t: 'p',
        html: 'The “distinguish aldehyde from ketone” questions all rest on one structural fact carried over from Topic 01: the aldehyde carbonyl bears a <b>hydrogen</b>. Oxidation of an aldehyde to a carboxylic acid only requires that C–H bond to be replaced by a C–OH — a gentle, low-barrier change that even mild oxidants (Tollens’, Fehling’s, Benedict’s) can drive. A ketone has <b>no such H</b> on the carbonyl carbon; to oxidise it you must break a strong C–C bond, which mild reagents cannot do, so an ordinary ketone does not respond (α-hydroxy ketones such as fructose are the exception: they do reduce Tollens’ and Fehling’s). This is why the silver mirror (Tollens’) and the red-brown Cu<sub>2</sub>O precipitate (Fehling’s) are reliable aldehyde tests, and why a simple ketone leaves both reagents unchanged.',
      },
      {
        t: 'p',
        html: 'A related structural idea underlies the α-H chemistry: a carbonyl compound with α-H exists in equilibrium with a small amount of its <b>enol</b> form (keto–enol tautomerism). The enol/enolate is the reactive nucleophilic species in aldol and the entry point for halogenation in the iodoform reaction — so “has an α-H” is really shorthand for “can form an enol/enolate”.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level — Complete and explain the reactions',
        q: 'Predict the products when <b>butanal</b> reacts with: (i) Tollens’ reagent; (ii) dilute NaOH followed by heating; (iii) semicarbazide in weak acid.',
        steps: [
          '(i) Butanal is an aldehyde, so it reduces Tollens’ reagent to a silver mirror while being oxidised to <b>butanoic acid</b> (as the ammonium/sodium carboxylate):<br>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO → CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COO<sup>−</sup>, with Ag↓.<br>Balanced: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO + 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3OH<sup>−</sup> → CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COO<sup>−</sup> + 2Ag + 4NH<sub>3</sub> + 2H<sub>2</sub>O.',
          '(ii) Butanal has α-H, so it undergoes <b>aldol condensation</b>: two molecules give 2-ethyl-3-hydroxy​hexanal, which on heating dehydrates to <b>2-ethylhex-2-enal</b>.',
          '(iii) Nucleophilic addition–elimination with semicarbazide gives the <b>semicarbazone</b>:<br>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH=N–NHCONH<sub>2</sub> + H<sub>2</sub>O.',
          'Clean presentation — name the reaction type, then the named product — is what scores full marks.',
        ],
        ans: '(i) butanoic acid (as its carboxylate) and a silver mirror; (ii) 2-ethyl-3-hydroxy​hexanal, then 2-ethylhex-2-enal on heating; (iii) butanal semicarbazone, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH=N–NHCONH<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap — The iodoform / Tollens’ double filter',
        q: 'Which one of these gives <b>both</b> a positive iodoform test <b>and</b> a positive Tollens’ test?<br>(a) propan-2-one (b) ethanal (c) propan-1-ol (d) pentan-3-one',
        steps: [
          '<b>The trap.</b> Students remember “iodoform = methyl ketone” and stop, or “Tollens’ = aldehyde” and stop — but the question wants the intersection.',
          '<b>Mental shortcut.</b> Iodoform needs a CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– group joined to H, an alkyl or an aryl group; Tollens’ needs an aldehyde (the –CHO).',
          '(a) propanone: CH<sub>3</sub>CO– present → iodoform yes; but no –CHO → Tollens’ <b>no</b>.',
          '(b) ethanal CH<sub>3</sub>CHO: is CH<sub>3</sub>CO– joined to H → iodoform <b>yes</b>; it is an aldehyde → Tollens’ <b>yes</b>. ✓',
          '(c) propan-1-ol: neither → both no.',
          '(d) pentan-3-one: no methyl directly on carbonyl, no –CHO → both no.',
          'Ethanal is the classic “passes both filters” answer; recognise it on sight.',
        ],
        ans: '(b) ethanal',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Multi-step sequence with naming',
        q: 'Propan-2-one is treated with CH<sub>3</sub>MgBr followed by aqueous acid to give <b>X</b>. Separately, propanal is treated with dilute NaOH and heated to give <b>Y</b>. Identify and name X and Y, and state which reaction type each illustrates.',
        steps: [
          '<b>X:</b> Grignard reagents add to the carbonyl; a ketone gives a <b>tertiary alcohol</b>.<br>CH<sub>3</sub>COCH<sub>3</sub> + CH<sub>3</sub>MgBr → (after H<sub>3</sub>O<sup>+</sup>) (CH<sub>3</sub>)<sub>3</sub>C–OH = <b>2-methyl​propan-2-ol</b> (nucleophilic addition).<br>In full: (CH<sub>3</sub>)<sub>3</sub>C–OMgBr + H<sub>2</sub>O → (CH<sub>3</sub>)<sub>3</sub>C–OH + Mg(OH)Br.',
          '<b>Y:</b> propanal has α-H → <b>aldol condensation</b>. Two molecules give 3-hydroxy-2-methyl​pentanal, which dehydrates on heating to <b>2-methylpent-2-enal</b> (an α,β-unsaturated aldehyde).',
          'The exam links two mechanism families (carbonyl addition vs alpha-carbon enolate chemistry) in one question — recognise which site is reacting in each case.',
        ],
        ans: 'X = 2-methyl​propan-2-ol (Grignard addition, a nucleophilic addition); Y = 2-methylpent-2-enal (aldol condensation, through 3-hydroxy-2-methyl​pentanal).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Reagent selectivity under a sensitive group',
        q: 'A keto-ester, CH<sub>3</sub>CO–CH<sub>2</sub>CH<sub>2</sub>–COOC<sub>2</sub>H<sub>5</sub> (ethyl 4-oxopentanoate), must be converted so that the <b>ketone carbonyl becomes a –CH<sub>2</sub>– group while the ester survives intact.</b> Choose between Clemmensen and Wolff–Kishner, justify, and explain why ordinary LiAlH<sub>4</sub> is unsuitable.',
        steps: [
          'The target is >C=O → >CH<sub>2</sub> at the ketone only, leaving –COOC<sub>2</sub>H<sub>5</sub> untouched.',
          '<b>Why not LiAlH<sub>4</sub>:</b> it reduces the ketone only as far as an alcohol (not to CH<sub>2</sub>) <b>and</b> it attacks the ester, reducing it to a primary alcohol. Both outcomes are wrong.',
          '<b>Clemmensen (Zn–Hg/conc. HCl):</b> runs in acidic medium, but esters survive it: the ketone C=O is reduced to –CH<sub>2</sub>– and the –COOC<sub>2</sub>H<sub>5</sub> group is left untouched (levulinic acid gives valeric acid). Clemmensen is the right choice. (This is the exam convention: Clemmensen for base-sensitive groups, Wolff–Kishner for acid-sensitive ones. In practice, long heating in hot concentrated HCl can hydrolyse an ester too.)',
          '<b>Wolff–Kishner (NH<sub>2</sub>NH<sub>2</sub>, then KOH/glycol, hot):</b> runs in <b>basic</b> medium — but a base will saponify (hydrolyse) the ester, so Wolff–Kishner is unsuitable here.',
          '<b>The teaching point the examiner is testing:</b> always check whether the medium of a reduction (acidic Clemmensen vs basic Wolff–Kishner) is compatible with every other functional group in the molecule — the choice is dictated by what must survive, not just by what must change.',
        ],
        ans: 'Clemmensen reduction (Zn–Hg/conc. HCl). It reduces the ketone C=O to CH<sub>2</sub> while the ester survives, giving ethyl pentanoate, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>COOC<sub>2</sub>H<sub>5</sub>. Wolff–Kishner is ruled out because hot KOH saponifies the ester, and LiAlH<sub>4</sub> attacks both the ketone and the ester.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] How will you distinguish between pentan-2-one and pentan-3-one by a simple chemical test? Name the test and the positive observation.',
            a: 'Iodoform test (I<sub>2</sub>/NaOH): pentan-2-one (CH<sub>3</sub>CO–) gives yellow CHI<sub>3</sub>; pentan-3-one does not.',
          },
          {
            q: '[NEET] Which of the following will undergo Cannizzaro reaction: ethanal, benzaldehyde, 2,2-dimethyl​propanal, propanone?',
            a: 'Benzaldehyde and 2,2-dimethyl​propanal (both lack α-H). Ethanal has α-H, so it takes the aldol route instead; propanone is a ketone, and Cannizzaro is a reaction of aldehydes only.',
          },
          {
            q: '[JEE Main] Write the structures of the products and name the reaction when benzaldehyde reacts with ethanal in the presence of dilute NaOH, followed by heating.',
            a: 'Cross aldol with benzaldehyde as the electrophile (no α-H): the aldol C<sub>6</sub>H<sub>5</sub>CH(OH)CH<sub>2</sub>CHO (3-hydroxy-3-phenyl​propanal) loses water on heating to give C<sub>6</sub>H<sub>5</sub>CH=CHCHO, 3-phenylprop-2-enal (cinnamaldehyde); reaction = (crossed) aldol condensation.',
          },
          {
            q: '[JEE Main] Give the reagents to convert cyclohexanone into (i) cyclohexanol and (ii) cyclohexane, naming each reaction.',
            a: '(i) NaBH<sub>4</sub> (or LiAlH<sub>4</sub>, or H<sub>2</sub>/Ni) → cyclohexanol; (ii) Clemmensen (Zn–Hg/conc. HCl) or Wolff–Kishner (NH<sub>2</sub>NH<sub>2</sub>, KOH/glycol) → cyclohexane.',
          },
          {
            q: '[JEE Advanced] Compound A (C<sub>8</sub>H<sub>8</sub>O) gives a positive 2,4-DNP test, does not give Tollens’ test, but <b>does</b> give a positive iodoform test. On vigorous oxidation it gives benzoic acid. Identify A and justify each observation.',
            a: 'A = acetophenone, C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub>. 2,4-DNP positive (carbonyl present); Tollens’ negative (ketone, not aldehyde); iodoform positive (CH<sub>3</sub>CO– group); vigorous oxidation cleaves the methyl to give benzoic acid.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which reagent distinguishes an aldehyde from a ketone by forming a silver mirror?',
        opts: [
          { label: '2,4-DNP', nudge: '<b>(a)</b> 2,4-DNP reacts with both aldehydes and ketones, so it cannot distinguish them.' },
          { label: 'Tollens’ reagent', nudge: null },
          { label: 'NaHSO<sub>3</sub>', nudge: '<b>(c)</b> bisulphite adds to both aldehydes and many methyl ketones.' },
          { label: 'NaBH<sub>4</sub>', nudge: '<b>(d)</b> NaBH<sub>4</sub> reduces both — students pick it by confusing “reduction of the carbonyl” with “the carbonyl reducing a reagent”.' },
        ],
        correct: 1,
        solution: 'Tollens’ ([Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>) is reduced by aldehydes to metallic silver.',
      },
      {
        t: 'mcq',
        q: 'Which compound will <b>not</b> undergo aldol condensation?',
        opts: [
          { label: 'ethanal', nudge: '<b>(a)</b> ethanal has three α-H on its CH<sub>3</sub>.' },
          { label: 'propanone', nudge: '<b>(b)</b> propanone has six α-H.' },
          { label: 'benzaldehyde', nudge: null },
          {
            label: 'phenyl​acetaldehyde',
            nudge: '<b>(d)</b> phenyl​acetaldehyde, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO, has α-H on the CH<sub>2</sub> — a classic trap, because the phenyl group tempts students to treat it like benzaldehyde.',
          },
        ],
        correct: 2,
        solution: 'Benzaldehyde (C<sub>6</sub>H<sub>5</sub>CHO) has no α-hydrogen, so it cannot form an enolate.',
      },
      {
        t: 'mcq',
        q: 'In the Cannizzaro reaction of methanal with concentrated NaOH, the products are:',
        opts: [
          { label: 'methanol + sodium formate', nudge: null },
          { label: 'two molecules of methanol', nudge: '<b>(b)</b> two methanols would be reduction alone; Cannizzaro is oxidation and reduction together.' },
          { label: 'two molecules of sodium formate', nudge: '<b>(c)</b> two formates would be oxidation alone; Cannizzaro is oxidation and reduction together.' },
          { label: 'methane + sodium carbonate', nudge: '<b>(d)</b> invents products with the wrong oxidation states.' },
        ],
        correct: 0,
        solution: 'Disproportionation reduces one molecule to methanol and oxidises another to the formate (carboxylate) salt.',
      },
      {
        t: 'mcq',
        q: 'To reduce only the C=O of a ketone to CH<sub>2</sub> in a molecule that also contains an acid-sensitive group, the preferred reagent is:',
        opts: [
          { label: 'Zn–Hg/conc. HCl', nudge: '<b>(a)</b> Clemmensen is acidic — it would damage the acid-sensitive group.' },
          {
            label: 'LiAlH<sub>4</sub>',
            nudge: '<b>(b)</b> LiAlH<sub>4</sub> gives the alcohol, not CH<sub>2</sub>, so it does not perform the required deoxygenation at all. The trap is choosing a “more familiar” hydride reagent that solves the wrong problem.',
          },
          { label: 'NH<sub>2</sub>NH<sub>2</sub>, then KOH/glycol', nudge: null },
          {
            label: 'NaBH<sub>4</sub>',
            nudge: '<b>(d)</b> NaBH<sub>4</sub> likewise gives the alcohol, not CH<sub>2</sub>. The trap is choosing a “more familiar” hydride reagent that solves the wrong problem.',
          },
        ],
        correct: 2,
        solution: 'Wolff–Kishner. It runs in basic medium, sparing acid-sensitive groups.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Miscounting α-hydrogens.</b> Benzaldehyde has none (the H on –CHO is not an α-H); phenyl​acetaldehyde (C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CHO) has two. Decide aldol/Cannizzaro from the α-carbon, never from a quick glance at “has a benzene ring”.',
          '<b>Mixing up Cannizzaro and aldol.</b> No α-H + concentrated alkali → Cannizzaro; α-H present + dilute alkali → aldol. An aldehyde with α-H normally does <b>not</b> give Cannizzaro, because aldol is far faster (2-methylpropanal is the known exception).',
          '<b>Letting ketones “pass” Tollens’ or Fehling’s.</b> Mild oxidants are aldehyde tests; ordinary ketones give no silver mirror and no red-brown Cu<sub>2</sub>O (α-hydroxy ketones such as fructose are the exception). And remember Fehling’s is for aliphatic aldehydes — benzaldehyde does not respond.',
          '<b>“Reduces” vs “is reduced”.</b> An aldehyde reduces Tollens’ reagent (the aldehyde is oxidised, the silver is reduced). Reagents like NaBH<sub>4</sub>/LiAlH<sub>4</sub> reduce the carbonyl. Read the direction of electron flow before answering.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed & accuracy).</b> For any “which test / which reaction” question, run a 5-second checklist on the structure: Is there a –CHO? (Tollens’/Fehling’s, oxidation). Is there a CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– joined to H, alkyl or aryl? (iodoform). Is there an α-H? (aldol). No α-H on an aldehyde? (Cannizzaro under conc. alkali). For reductions to CH<sub>2</sub>, your decision is purely about medium compatibility: acid-sensitive groups → Wolff–Kishner (basic); base-sensitive groups → Clemmensen (acidic).',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two reactive sites',
            note: 'carbonyl <b>C</b> (nucleophilic addition) and the <b>α-C</b> (acidic α-H → enolate → aldol/haloform).',
          },
          {
            f: 'Nucleophilic addition',
            note: 'HCN→cyanohydrin; NaHSO<sub>3</sub>→bisulphite adduct (purification); RMgX→1°/2°/3° alcohol; alcohol/dry HCl→acetal (protecting group); H<sub>2</sub>N–Z→imine, Schiff’s base, oxime, hydrazone, 2,4-DNP derivative, semicarbazone.',
          },
          {
            f: 'Reduction',
            note: 'to alcohol — NaBH<sub>4</sub>/LiAlH<sub>4</sub>/H<sub>2</sub>; to CH<sub>2</sub> — <b>Clemmensen</b> (Zn–Hg/conc. HCl, acidic) or <b>Wolff–Kishner</b> (NH<sub>2</sub>NH<sub>2</sub>/KOH-glycol, basic).',
          },
          {
            f: 'Oxidation (mild: aldehydes only)',
            note: 'Tollens’ → silver mirror; Fehling’s → red-brown Cu<sub>2</sub>O (aliphatic only); strong KMnO<sub>4</sub>/K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> → carboxylic acid (a ketone only under vigorous conditions, cleaved to acids with fewer carbons).',
          },
          {
            f: 'α-H reactions',
            note: '<b>Aldol</b> (≥1 α-H, dilute alkali) → β-hydroxy carbonyl → Δ → α,β-unsaturated; <b>iodoform</b> (CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)– joined to H, alkyl or aryl; I<sub>2</sub>/NaOH) → yellow CHI<sub>3</sub>.',
          },
          {
            f: 'Cannizzaro (no α-H, conc. alkali)',
            note: 'disproportionation → alcohol + carboxylate.',
          },
        ],
        aids: [
          '“No alpha, no aldol → Cannizzaro calls.”',
          '“Tollens’ & Fehling’s test the H of CHO” (so ordinary ketones fail; α-hydroxy ketones such as fructose are the exception).',
          '“Acid → Clemmensen, Base → Wolff–Kishner” (pick by what must survive).',
          '“DNP for any carbonyl; silver mirror for aldehyde alone.” (Here “carbonyl” means an aldehyde or a ketone: acids, esters and amides give no DNP precipitate. Formic acid and α-hydroxy ketones also give the mirror.)',
        ],
      },
    ],
  },
];
