import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional Topics C, D and E, word for word from the Class 12 Chemistry
 * Master Reference: C Hofmann Exhaustive Methylation and the Secondary-Amine Tests
 * Beyond NCERT (pp. 469–471; it opens on p. 469 after Addendum B's last answer, and
 * its answers end partway down p. 471) and D Synthesis Design with the Diazonium Wheel
 * (pp. 471–474; its answers end on p. 473), then the book's "Summary Checklist" (pp. 473–474,
 * after D's answers and before "Addendum P" on p. 474) as its own short Additional topic E,
 * as in Chemistry 11.
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. These pages print no drawing and no table. C's
 * three-step sequence and D's order-of-operations rules are procs under the book's bold
 * headings; D's reaction schemes stay on their own lines inside the example steps, with
 * a condition over an arrow in <sup> and one under it in <sub>. The book sets these
 * addenda's dashes as spaced hyphens (" - "); here they are the house dash (" — "),
 * group dashes are en-dash bonds (–NH<sub>2</sub>, –N(CH<sub>3</sub>)<sub>3</sub><sup>+</sup>), and
 * ranges take an en dash (273–278 K).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic C · pp. 469–471 ─────────────────────────
  {
    n: 'C',
    title: 'Hofmann Exhaustive Methylation and the Secondary-Amine Tests Beyond NCERT',
    extra: true,
    kalam: 'When two different β-carbons bear hydrogen, the least substituted alkene is usually the major product — the opposite of Saytzeff’s rule.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Two topics that JEE papers test have no counterpart in NCERT: the exhaustive-methylation-to-alkene sequence (asked twice, once with an ozonolysis structure proof), which the chapter states in one line of Topic 04 but never works, and Liebermann’s nitroso test for secondary amines, which it does not mention. Both are standard JEE material. This addendum supplies them, clearly flagged as beyond the CBSE/NEET core.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'The sequence converts an amine that has a β-hydrogen into an alkene and reveals the carbon skeleton attached to nitrogen:',
      },
      {
        t: 'proc',
        title: 'Hofmann exhaustive methylation (exhaustive alkylation)',
        steps: [
          '<b>Exhaustive methylation.</b> Treat the amine with excess CH<sub>3</sub>I until nitrogen can accept no more: RNH<sub>2</sub> → RNH(CH<sub>3</sub>) → RN(CH<sub>3</sub>)<sub>2</sub> → RN(CH<sub>3</sub>)<sub>3</sub><sup>+</sup>I<sup>−</sup>, a quaternary ammonium iodide.',
          '<b>Exchange to the hydroxide.</b> Moist Ag<sub>2</sub>O (or AgOH) swaps iodide for hydroxide: RN(CH<sub>3</sub>)<sub>3</sub><sup>+</sup>OH<sup>−</sup>.',
          '<b>Hofmann elimination.</b> Heating the quaternary ammonium hydroxide causes an E2 elimination: hydroxide removes a β-hydrogen and the trialkylammonium group leaves, giving an alkene plus trimethylamine and water.',
        ],
      },
      {
        t: 'p',
        html: '<b>Hofmann’s rule.</b> When two different β-carbons bear hydrogen, the <b>least substituted alkene is usually the major product</b> — the opposite of Saytzeff’s (Zaitsev’s) rule. Two effects favour it: the departing –N(CH<sub>3</sub>)<sub>3</sub><sup>+</sup> group is bulky, so the base reaches the less hindered β-hydrogen more easily; and the positively charged leaving group gives the transition state carbanion character, so the more acidic hydrogen on the less substituted β-carbon goes first. (A β-hydrogen whose loss gives a conjugated alkene, as in a 2-phenylethyl group, wins instead.) So 2-aminobutane after exhaustive methylation gives but-1-ene as the major alkene, not but-2-ene.',
      },
      {
        t: 'p',
        html: '<b>Why it is a structure tool.</b> The alkene’s identity tells you which carbons were attached to nitrogen; ozonolysis of the alkene then pins the skeleton down. This is how a typical JEE question works: an optically inactive amine A on exhaustive methylation gives an alkene B whose ozonolysis yields HCHO and CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO. The ozonolysis products reassemble to CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> (pent-1-ene), so nitrogen sat on C-1 or C-2; pentan-2-amine is chiral, so the optically inactive (achiral) A is pentan-1-amine.',
      },
      {
        t: 'p',
        html: '<b>Liebermann’s nitroso test (secondary amines).</b> A 2° amine + HNO<sub>2</sub> gives an N-nitrosamine (the yellow oil from the chapter). Warm that nitrosamine with phenol and concentrated H<sub>2</sub>SO<sub>4</sub>: a deep green or blue solution forms, turning red on dilution with water and <b>blue or violet on adding NaOH</b> (an indophenol dye forms). The colour sequence confirms a secondary amine — the test the chapter’s Hinsberg and carbylamine routes do not distinguish by colour. Primary aliphatic amines simply lose N<sub>2</sub>, and primary aromatic amines give diazonium salts; tertiary aliphatic amines form no nitrosamine, so they give no colour sequence.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'An optically inactive amine A (C<sub>5</sub>H<sub>13</sub>N) is exhaustively methylated with excess CH<sub>3</sub>I, treated with moist Ag<sub>2</sub>O, and heated. The alkene B so obtained on ozonolysis gives formaldehyde and butanal. Identify A and B.',
        steps: [
          'Ozonolysis cleaves C=C into two carbonyls: HCHO comes from a terminal =CH<sub>2</sub>, and CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO comes from CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH=. Rejoining gives CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>, pent-1-ene, as B. Hofmann elimination removes a β-hydrogen adjacent to the nitrogen-bearing carbon, so nitrogen sat on C-1 or C-2 of a straight five-carbon chain: pentan-1-amine or pentan-2-amine, which by Hofmann’s rule also gives mainly pent-1-ene. Pentan-2-amine has a stereogenic C-2, so “optically inactive” — read, as the question intends, as achiral — rules it out: A is pentan-1-amine, CH<sub>3</sub>(CH<sub>2</sub>)<sub>4</sub>NH<sub>2</sub>. (The other straight-chain candidate, 3-aminopentane, would give pent-2-ene, whose ozonolysis fragments are ethanal + propanal, not HCHO.)',
        ],
        ans: 'A = pentan-1-amine; B = pent-1-ene.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Predict the major alkene when butan-2-amine is subjected to exhaustive methylation, then moist Ag<sub>2</sub>O and heating, and justify the regiochemistry.',
        steps: [
          'Exhaustive methylation and moist Ag<sub>2</sub>O give the hydroxide [CH<sub>3</sub>CH(N(CH<sub>3</sub>)<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>]<sup>+</sup>OH<sup>−</sup>. Two β-carbons carry hydrogen: C-1 (a –CH<sub>3</sub>, three unhindered β-H) and C-3 (a –CH<sub>2</sub>–, two more hindered β-H). By Hofmann’s rule the base removes the least hindered hydrogen, so elimination runs toward C-1 and the major product is but-1-ene, CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub>; but-2-ene (the Saytzeff product) is minor. The bulky, positively charged –N(CH<sub>3</sub>)<sub>3</sub><sup>+</sup> leaving group, not product stability, controls the outcome.',
        ],
        ans: 'But-1-ene (major); but-2-ene (minor). Hofmann orientation: least substituted alkene.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'An amine reacts with HNO<sub>2</sub> to give a yellow oil; the oil warmed with phenol and concentrated H<sub>2</sub>SO<sub>4</sub> turns red on dilution and blue on adding NaOH. Classify the amine and identify it if its formula is C<sub>7</sub>H<sub>9</sub>N.',
        steps: [
          'Yellow oily N-nitrosamine with HNO<sub>2</sub> identifies a secondary amine; the colour sequence is Liebermann’s nitroso test confirming it. A C<sub>7</sub>H<sub>9</sub>N secondary amine is N-methylaniline, C<sub>6</sub>H<sub>5</sub>NHCH<sub>3</sub> (a 1° amine of this formula would be benzylamine, which evolves N<sub>2</sub>, or a toluidine, which gives a diazonium salt — neither gives a nitrosamine).',
        ],
        ans: 'Secondary amine; N-methylaniline.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Write the structures of all products when N,N,N-trimethyl​ethanaminium hydroxide is heated.',
            a: 'Ethene + trimethylamine + water: CH<sub>2</sub>=CH<sub>2</sub> + N(CH<sub>3</sub>)<sub>3</sub> + H<sub>2</sub>O.',
          },
          {
            q: '[JEE Main] An amine C<sub>4</sub>H<sub>11</sub>N on exhaustive methylation, moist Ag<sub>2</sub>O and heating gives only propene. Identify the amine. (Hint: two isomers fit — explain why.)',
            a: 'Propene can come only from a propyl group attached to nitrogen. The two C<sub>4</sub>H<sub>11</sub>N isomers carrying a propyl group are N-methyl​propan-1-amine and N-methyl​propan-2-amine (both 2°); exhaustive methylation quaternises the nitrogen, and Hofmann elimination on the propyl group gives propene in each case. (The four 1° isomers would give butenes or 2-methyl​propene.)',
          },
          {
            q: '[JEE Advanced] Why does exhaustive methylation of 2-aminopentane, followed by moist Ag<sub>2</sub>O and heat, give mainly pent-1-ene rather than the more stable pent-2-ene?',
            a: 'The –N(CH<sub>3</sub>)<sub>3</sub><sup>+</sup> leaving group is very bulky and positively charged; the transition state for removing the less hindered, more acidic terminal β-H (towards C-1) is lower in energy, so the least substituted alkene (pent-1-ene) dominates — Hofmann orientation, not Saytzeff.',
          },
          {
            q: '[NEET] Which test distinguishes a secondary amine from a primary amine by a colour sequence with phenol, concentrated H<sub>2</sub>SO<sub>4</sub> and NaOH?',
            a: 'Liebermann’s nitroso test: 2° amine gives nitrosamine then a red-to-blue colour sequence; a 1° amine would instead evolve N<sub>2</sub> (aliphatic) or form a diazonium salt (aromatic).',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic D · pp. 471–474 ─────────────────────────
  {
    n: 'D',
    title: 'Synthesis Design with the Diazonium Wheel',
    extra: true,
    kalam: 'What boards and JEE Main actually set is a sequence of conversions, and the skill is choosing the order of steps.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter supplies the wheel — every spoke from ArN<sub>2</sub><sup>+</sup> to ArCl, ArBr, ArCN, ArI, ArF, ArOH, ArH, ArNO<sub>2</sub> — and a few short conversions (aniline to fluorobenzene, iodobenzene and benzonitrile, and the showcase, aniline to 1,3,5-tribromo​benzene). What boards and JEE Main actually set is a sequence of conversions, and the skill is choosing the order of steps. This addendum is a design method plus drills.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Positional bookkeeping.</b> The diazonium group sits exactly where the –NH<sub>2</sub> sat, and whatever replaces it inherits that position. So before touching reagents, write the carbon that will bear the target group and ask: can an –NH<sub>2</sub> be planted there? If yes, the route is diazotise, then pick the spoke.',
      },
      {
        t: 'p',
        html: '<b>The removable-handle strategy.</b> –NH<sub>2</sub> is the strongest readily available ortho/para director. Use it to force a substitution pattern that direct electrophilic substitution cannot give, then remove it by diazotisation followed by H<sub>3</sub>PO<sub>2</sub> (deamination). The tell-tale sign you need this trick: the target has a substitution pattern that no plausible director would deliver — classically, a group meta to where a methyl or halogen sits, or a symmetric 1,3,5 pattern.',
      },
      {
        t: 'proc',
        title: 'Order-of-operations rules',
        steps: [
          'Reduce ArNO<sub>2</sub> → ArNH<sub>2</sub> first (Sn/HCl or Fe/HCl; never LiAlH<sub>4</sub>, which turns an aromatic nitro group into azo compounds), because the amine is the gateway to the wheel.',
          'Diazotise only when the ring carries no group that HNO<sub>2</sub> would attack — run diazotisation late.',
          'If the plan needs a nitrile, remember ArCN hydrolyses to ArCOOH (H<sub>3</sub>O<sup>+</sup>, heat) — the Sandmeyer cyanide spoke is the standard route to aromatic carboxylic acids of fixed position.',
          'Protect before aggressive substitution: acetylate –NH<sub>2</sub> to –NHCOCH<sub>3</sub> when you need a single bromine or a clean nitration.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE',
        q: 'Convert nitrobenzene into benzene.',
        steps: [
          'Reduce, diazotise, deaminate:<br>C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> →<sup>Sn/HCl</sup> C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> →<sup>NaNO₂/HCl</sup> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> →<sup>H₃PO₂</sup> C<sub>6</sub>H<sub>6</sub><br>(diazotisation at 273–278 K)',
        ],
        ans: 'Sn/HCl; then NaNO<sub>2</sub>/HCl at 273–278 K; then H<sub>3</sub>PO<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Convert aniline into benzoic acid.',
        steps: [
          'The carboxyl must sit where the amino group was, so plant –CN via the Sandmeyer spoke, then hydrolyse the nitrile:<br>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> →<sup>NaNO₂/HCl</sup> C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup> →<sup>CuCN/KCN</sup> C<sub>6</sub>H<sub>5</sub>CN →<sup>H₃O⁺, Δ</sup> C<sub>6</sub>H<sub>5</sub>COOH<br>(diazotisation at 273–278 K)',
        ],
        ans: 'Diazotise; CuCN/KCN (Sandmeyer) to benzonitrile; acidic hydrolysis to benzoic acid.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Convert p-toluidine (4-methylaniline) into m-bromotoluene.',
        steps: [
          'Direct bromination of toluene gives ortho/para products, with almost no meta — so a removable director is required. In p-toluidine the –NH<sub>2</sub> is para to –CH<sub>3</sub>; its ortho positions are meta to the methyl group. Protect the amine, brominate into the position ortho to –NHAc (hence meta to –CH<sub>3</sub>), restore the amine, then remove it:<br>p-CH<sub>3</sub>C<sub>6</sub>H<sub>4</sub>NH<sub>2</sub> →<sup>(CH₃CO)₂O</sup> p-CH<sub>3</sub>C<sub>6</sub>H<sub>4</sub>NHCOCH<sub>3</sub> →<sup>Br₂</sup> 2-Br-4-CH<sub>3</sub>C<sub>6</sub>H<sub>3</sub>NHCOCH<sub>3</sub><br>→<sup>H₃O⁺</sup> 2-Br-4-CH<sub>3</sub>C<sub>6</sub>H<sub>3</sub>NH<sub>2</sub> →<sup>NaNO₂/HCl</sup> 2-Br-4-CH<sub>3</sub>C<sub>6</sub>H<sub>3</sub>N<sub>2</sub><sup>+</sup>Cl<sup>−</sup><br>→<sup>H₃PO₂</sup> m-CH<sub>3</sub>C<sub>6</sub>H<sub>4</sub>Br<br>(diazotisation at 273–278 K)',
        ],
        ans: 'Acetylate; brominate (Br goes ortho to –NHAc, i.e. meta to –CH<sub>3</sub>); hydrolyse; diazotise; deaminate with H<sub>3</sub>PO<sub>2</sub>.',
      },
      {
        t: 'ex',
        tag: 'NEET/JEE Main',
        q: 'Convert aniline into 2,4,6-tribromophenol.',
        steps: [
          'Bromine water drives aniline to 2,4,6-tribromoaniline (see the chapter’s bromination of aniline); diazotise without disturbing the bromines; warm the salt with water to install –OH where –NH<sub>2</sub> stood:<br>aniline →<sup>Br₂(aq)</sup> 2,4,6-tribromoaniline →<sup>NaNO₂/HCl</sup> diazonium salt →<sup>warm H₂O</sup> 2,4,6-tribromophenol<br>(diazotisation at 273–278 K)',
        ],
        ans: 'Br<sub>2</sub> water; NaNO<sub>2</sub>/HCl at 273–278 K; warm aqueous hydrolysis.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Convert aniline into fluorobenzene. Name the reaction.',
            a: 'Diazotise (NaNO<sub>2</sub>/HCl, 273–278 K); treat with HBF<sub>4</sub> to precipitate benzene​diazonium fluoroborate; heat the dry salt: C<sub>6</sub>H<sub>5</sub>N<sub>2</sub><sup>+</sup>BF<sub>4</sub><sup>−</sup> → C<sub>6</sub>H<sub>5</sub>F + N<sub>2</sub> + BF<sub>3</sub>. Balz–Schiemann reaction.',
          },
          {
            q: '[JEE Main] Convert nitrobenzene into phenol, stating the reagent and temperature at each step.',
            a: 'Sn/HCl, warmed (reduction to aniline); NaNO<sub>2</sub> + dilute HCl at 273–278 K (diazotisation); warm the solution above 283 K (hydrolysis to phenol, N<sub>2</sub> evolved).',
          },
          {
            q: '[JEE Main] Convert p-toluidine into p-chlorotoluene.',
            a: 'Diazotise p-toluidine (NaNO<sub>2</sub>/HCl, 273–278 K), then CuCl/HCl (Sandmeyer): the diazonium group is replaced by Cl at the same position, giving 1-chloro-4-​methylbenzene.',
          },
          {
            q: '[JEE Advanced] Explain why the synthesis of m-chlorophenol is planned through aniline derivatives (diazonium route) rather than by direct chlorination of phenol.',
            a: 'Phenol’s –OH is ortho/para-directing, so direct chlorination cannot place Cl meta to –OH (meta product forms only in traces). The route therefore borrows the meta direction from –NO<sub>2</sub>: benzene → nitrobenzene → chlorinate to m-chloro​nitrobenzene (–NO<sub>2</sub> is meta-directing) → reduce (Sn/HCl) to m-chloroaniline → diazotise (NaNO<sub>2</sub>/HCl, 273–278 K) → warm aqueous hydrolysis to m-chlorophenol. The nitro group supplies the meta placement; the diazonium wheel converts it into –OH at the end.',
          },
        ],
      },
    ],
  },

  // ───────────────── Additional topic E (the book's Summary Checklist) · pp. 473–474 ─────────────────
  {
    n: 'E',
    title: 'Summary Checklist',
    extra: true,
    blocks: [
      { t: 'part', title: 'Summary Checklist' },
      {
        t: 'p',
        html: '• p<i>K</i><sub>a</sub>(conjugate acid) + p<i>K</i><sub>b</sub> = 14 (at 298 K); strongest base = largest conjugate-acid p<i>K</i><sub>a</sub> = smallest p<i>K</i><sub>b</sub>.<br>• Benzylamine (4.70) is basic like ammonia (4.75), not like aniline; aniline (9.38) is ~10<sup>6</sup> times weaker than methylamine.<br>• Ortho substituents weaken anilines beyond electronic prediction (steric/solvation); pyrrole-N (lone pair in sextet) is far less basic than pyridine-N (lone pair free).<br>• C<sub>4</sub>H<sub>11</sub>N: 8 isomers (4 primary, 3 secondary, 1 tertiary); butan-2-amine is the lone chiral one. Test counts: carbylamine, Hinsberg-soluble and N<sub>2</sub> with HNO<sub>2</sub> = 4 each; Hinsberg-insoluble and nitrosamine = 3 each; no reaction = 1.<br>• Exhaustive methylation (CH<sub>3</sub>I excess, moist Ag<sub>2</sub>O, heat) converts amines with a β-hydrogen to alkenes; Hofmann orientation usually gives the least substituted alkene; ozonolysis of that alkene reveals the original skeleton.<br>• Liebermann’s nitroso test: 2° amine → nitrosamine → phenol/conc. H<sub>2</sub>SO<sub>4</sub> → red on dilution, blue with NaOH.<br>• Synthesis design: plant –NH<sub>2</sub> where the target group must go; use it as a removable ortho/para handle; Sandmeyer CN spoke + hydrolysis = positioned –COOH; H<sub>3</sub>PO<sub>2</sub> removes the handle.',
      },
    ],
  },
];
