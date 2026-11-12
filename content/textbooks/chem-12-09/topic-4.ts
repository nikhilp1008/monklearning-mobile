import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Topic 04, Master Revision & Reaction Compendium: pp. 458–462 of
 * the Class 12 Chemistry Master Reference (book 9.4), word for word. By the
 * founder's decision (DECISIONS-C12 item 35) it is an ordinary topic: its
 * sections 9.4.1 to 9.4.9 are the parts, the "Purpose:" box opens the first
 * part, every book table is a table block, and "One-line chapter spine" closes
 * the last part. It has no worked examples, practice or MCQs; its "High-Yield
 * Exam Traps — Master List" is a mistakes list. The book's "Chapter 9" is
 * written as the chapter's name (the shelf numbers it 10), and its "Subtopics
 * 9.1–9.3" as Topics 01–03.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 458–462 ─────────────────────────
  {
    n: '04',
    title: 'Master Revision & Reaction Compendium',
    kalam: 'Everything in the Amines chapter on one desk.',
    blocks: [
      { t: 'part', title: 'Preparation of amines — complete compendium' },
      {
        t: 'p',
        html: '<b>Purpose:</b> Everything in the Amines chapter on one desk. Topics 01–03 teach; this topic consolidates — every preparation, every reaction, the full 1°/2°/3° test matrix, the basicity rules, the diazonium wheel, the JEE-Advanced layer, and the trap list — and adds a few exam facts the first three topics do not teach: Hofmann exhaustive methylation and elimination (in full in Additional topic C), the β-naphthol dye test, the nitrite salt and green p-nitroso solid that 3° amines give with nitrous acid, and methyl orange. Revise from here.',
      },
      {
        t: 'table',
        title: null,
        head: ['Method', 'Reagent(s)', 'Conversion', 'Carbon change', 'Key restriction / note'],
        rows: [
          ['Ammonolysis', 'NH<sub>3</sub> (excess), Δ', 'R–X → R–NH<sub>2</sub> (+ 2°, 3°, 4°)', 'same', 'gives a mixture; R–I > R–Br > R–Cl; not for pure 1°'],
          ['Reduction of nitrile', 'LiAlH<sub>4</sub>, H<sub>2</sub>/Ni or Na/EtOH', 'R–CN → R–CH<sub>2</sub>NH<sub>2</sub> (1°)', 'same C as the nitrile; <b>+1 C</b> over its R–X', '“ascent of the series”'],
          ['Reduction of amide', 'LiAlH<sub>4</sub>', 'R–CONH<sub>2</sub> → R–CH<sub>2</sub>NH<sub>2</sub>', 'same', 'N-substituted amide → 2°/3°'],
          ['Reduction of nitro', 'Sn/HCl, Fe/HCl, H<sub>2</sub>/Pd', 'Ar–NO<sub>2</sub> → Ar–NH<sub>2</sub>', 'same', 'route to aniline; Sn/HCl and Fe/HCl work in acidic medium'],
          [
            'Reductive amination',
            'carbonyl + NH<sub>3</sub>/amine, H<sub>2</sub>/Ni (or NaBH<sub>3</sub>CN)',
            'R<sub>2</sub>C=O → amine',
            'same',
            'reaches <b>1°, 2° or 3°</b> by choice of N partner',
          ],
          [
            'Gabriel synthesis',
            'K-phthalimide, R–X, then hydrolysis / N<sub>2</sub>H<sub>4</sub>',
            'R–X → R–NH<sub>2</sub> (<b>1° only</b>)',
            'same',
            '<b>aryl & 3° fail</b> (need S<sub>N</sub>2)',
          ],
          ['Hofmann bromamide', 'Br<sub>2</sub> + 4 KOH', 'R–CONH<sub>2</sub> → R–NH<sub>2</sub>', '<b>−1 C</b>', 'retention of config; via isocyanate'],
          [
            '(JEE) Curtius, Schmidt, Ritter',
            'NaN<sub>3</sub>/HN<sub>3</sub>; alkene + nitrile/H<sub>2</sub>SO<sub>4</sub>',
            'acid/alkene → amine',
            'varies',
            '<b>Ritter</b> (then amide hydrolysis) = best for 3°-alkyl 1° amine',
          ],
        ],
      },
      {
        t: 'p',
        html: '<b>Carbon-count rule (memorise):</b> halide via nitrile <b>+1</b>, amide <b>same</b>, Gabriel <b>same</b>, Hofmann bromamide <b>−1</b>.',
      },

      { t: 'part', title: 'Reactions of amines — complete compendium' },
      {
        t: 'table',
        title: null,
        head: ['Reaction', 'Reagent', '1° amine', '2° amine', '3° amine'],
        rows: [
          ['Salt formation', 'dil. HCl', 'salt', 'salt', 'salt'],
          ['Alkylation', 'R′–X', '→ 2° → 3° → 4°', '→ 3° → 4°', '→ 4° (quaternary)'],
          ['Acylation', 'RCOCl/anhydride + pyridine', 'N-alkyl amide', 'N,N-dialkyl amide', '<b>no reaction</b>'],
          ['Carbylamine', 'CHCl<sub>3</sub> + alc. KOH', '<b>isocyanide (foul) ✓</b>', 'no', 'no'],
          [
            'Nitrous acid',
            'NaNO<sub>2</sub> + dil. HCl',
            'aliph → alcohol + N<sub>2</sub>; arom → diazonium (273–278 K)',
            'N-nitrosamine (yellow oil)',
            'aliph → nitrite salt; arom → p-nitroso',
          ],
          ['Hinsberg', 'C<sub>6</sub>H<sub>5</sub>SO<sub>2</sub>Cl', 'sulphonamide, <b>alkali-soluble</b>', 'sulphonamide, <b>alkali-insoluble</b>', '<b>no reaction</b>'],
          ['Mustard-oil test', 'CS<sub>2</sub>, then HgCl<sub>2</sub>', '<b>isothiocyanate (mustard smell) ✓</b> if aliphatic; aniline gives diphenylthiourea', 'dithiocarbamate (no smell)', 'no reaction'],
        ],
      },
      {
        t: 'p',
        html: 'Aromatic amines additionally undergo <b>electrophilic substitution</b> (see the aromatic-amine part below) and <b>diazotisation</b> (1° aromatic).',
      },

      { t: 'part', title: 'Distinguishing 1°, 2° and 3° amines — test matrix' },
      {
        t: 'table',
        title: null,
        head: ['Test', '1° aliphatic', '1° aromatic', '2° (any)', '3° (any)'],
        rows: [
          [
            'Nitrous acid',
            'N<sub>2</sub> + alcohol (brisk effervescence, clear)',
            'comparatively stable diazonium (cold); gives dye with alkaline β-naphthol',
            'yellow oily nitrosamine',
            'aliph: nitrite; arom: green p-nitroso solid',
          ],
          ['Carbylamine', 'foul isocyanide ✓', 'foul isocyanide ✓', '—', '—'],
          ['Hinsberg', 'clear solution (alkali-soluble)', 'clear solution', 'insoluble precipitate', 'no reaction (amine layer remains)'],
          ['Mustard oil (CS<sub>2</sub>)', 'mustard smell ✓', 'not the usual test (aniline gives diphenylthiourea)', 'no smell', 'no reaction'],
        ],
      },
      {
        t: 'p',
        html: '<b>Fastest read:</b> count the <b>N–H</b> hydrogens — two ⇒ carbylamine ✓ (and mustard ✓ if aliphatic) and alkali-soluble Hinsberg; one ⇒ alkali-insoluble Hinsberg, no carbylamine; zero ⇒ no carbylamine, Hinsberg or mustard-oil reaction (nitrous acid still reacts: a nitrite salt, or a ring p-nitroso compound if aromatic).',
      },

      { t: 'part', title: 'Basicity — master rules and orders' },
      {
        t: 'p',
        html: '• <b>Measure:</b> smaller p<i>K</i><sub>b</sub> ⇒ stronger base. p<i>K</i><sub>b</sub>: aniline 9.38 > NH<sub>3</sub> 4.75 > aliphatic amines 3.00–4.22, so basicity runs aliphatic > NH<sub>3</sub> > aniline.<br>• <b>Gas phase (pure +I):</b> 3° > 2° > 1° > NH<sub>3</sub>.<br>• <b>Aqueous, methyl:</b> (CH<sub>3</sub>)<sub>2</sub>NH > CH<sub>3</sub>NH<sub>2</sub> > (CH<sub>3</sub>)<sub>3</sub>N > NH<sub>3</sub>.<br>• <b>Aqueous, ethyl:</b> (C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>NH > (C<sub>2</sub>H<sub>5</sub>)<sub>3</sub>N > C<sub>2</sub>H<sub>5</sub>NH<sub>2</sub> > NH<sub>3</sub>.<br>• <b>Family rule:</b> aliphatic amine > NH<sub>3</sub> > arylamine.<br>• <b>Three competing factors in water:</b> +I (raises), <b>cation solvation</b> (more N–H ⇒ more stable cation ⇒ stronger), <b>steric</b> (bulk lowers). Their balance makes <b>2°</b> usually most basic in water.<br>• <b>Aryl substituents:</b> EDG (–OCH<sub>3</sub>, –CH<sub>3</sub>, –NH<sub>2</sub>) at para <b>raise</b> (at ortho even –CH<sub>3</sub> lowers it, the ortho effect: o-toluidine 9.56); EWG (–NO<sub>2</sub>, –COOH, –SO<sub>3</sub>H, –X) <b>lower</b> basicity.<br>• <b>Why aniline is weak:</b> lone pair delocalised into the ring (resonance) — not an inductive effect.<br>• <b>Amides are ~neutral:</b> the N lone pair is tied to the carbonyl.<br>• (JEE) <b>Guanidine</b> is an exceptionally strong neutral base — its conjugate acid is resonance-stabilised over three nitrogens.',
      },

      { t: 'part', title: 'Aromatic amine — special behaviour and the diazonium gateway' },
      {
        t: 'p',
        html: '• <b>Weaker base</b> than ammonia (resonance, above).<br>• <b>Very reactive in EAS</b> (–NH<sub>2</sub> strongly activating, o/p-directing) — so:<br>  – Br<sub>2</sub>(aq) → 2,4,6-tribromoaniline instantly; <b>protect as acetanilide</b> for a mono-product.<br>  – Nitration in strong acid gives much meta (the –NH<sub>2</sub> is protonated to –NH<sub>3</sub><sup>+</sup>, a meta director); use acetanilide route for p-nitroaniline.<br>  – conc. H<sub>2</sub>SO<sub>4</sub>, heat → sulphanilic acid (zwitterion).<br>• <b>Friedel–Crafts fails on aniline:</b> AlCl<sub>3</sub> bonds the N lone pair → deactivated, meta-directing adduct.<br>• <b>Diazotisation</b> (1° aromatic + HNO<sub>2</sub>, 273–278 K) opens the whole substitution menu below.',
      },

      { t: 'part', title: 'Diazonium reaction wheel and aniline roadmap' },
      {
        t: 'table',
        title: null,
        head: ['Want this group', 'Reagent on C₆H₅N₂⁺Cl⁻', 'Name'],
        rows: [
          ['–Cl / –Br (chloro, bromo)', 'CuCl/HCl or CuBr/HBr', 'Sandmeyer'],
          ['–Cl / –Br (chloro, bromo)', 'Cu powder + HX', 'Gattermann'],
          ['–CN (cyano)', 'CuCN/KCN', 'Sandmeyer'],
          ['–I (iodo)', 'KI, warm (no Cu)', '—'],
          ['–F (fluoro)', 'HBF<sub>4</sub>, then heat', 'Balz–Schiemann'],
          ['–OH (hydroxy)', 'warm H<sub>2</sub>O (>283 K)', 'hydrolysis'],
          ['–H (hydrogen)', 'H<sub>3</sub>PO<sub>2</sub> or EtOH', 'deamination'],
          ['–NO<sub>2</sub> (nitro)', 'NaNO<sub>2</sub>/Cu (via fluoroborate)', '—'],
          ['–N=N–Ar′ (azo)', 'phenol (pH 9–10) / aniline (pH 4–5)', 'coupling (azo dye)'],
        ],
      },
      {
        t: 'p',
        html: '<b>Coupling note:</b> diazonium is a weak electrophile — couples only with activated rings (phenol, amines), at para. Products are <b>azo dyes</b> (e.g. p-hydroxyazobenzene; <b>methyl orange</b> is an azo dye used as an acid–base indicator).',
      },
      {
        t: 'p',
        html: '<b>Aniline roadmap:</b> aniline → benzenediazonium chloride (NaNO<sub>2</sub>/HCl, 273–278 K) → {chloro-, bromo-, iodo-, fluoro-, cyano-, hydroxy-(phenol), nitro-benzene; benzene (deamination); azo dyes}. This is the standard route to Ar–F, Ar–I, Ar–CN and to substitution patterns set by a removable –NH<sub>2</sub> handle.',
      },

      { t: 'part', title: 'Beyond the core — JEE-Advanced layer (consolidated)' },
      {
        t: 'p',
        html: '• <b>Hofmann exhaustive methylation & elimination:</b> excess CH<sub>3</sub>I converts any amine to a <b>quaternary ammonium iodide</b>; with moist Ag<sub>2</sub>O (→ hydroxide) and heat, if a β-hydrogen is present, it undergoes <b>Hofmann elimination</b> to give, usually, the <b>less-substituted (Hofmann) alkene</b> — the anti-Saytzeff outcome. (Additional topic C teaches it in full.)<br>• <b>Extra preparations:</b> Curtius (acyl azide → isocyanate → amine), Schmidt (RCOOH + HN<sub>3</sub>), Ritter (3°-alkyl amide, hydrolysed to the 3°-alkyl 1° amine), Leuckart and Borch/NaBH<sub>3</sub>CN (reductive amination variants).<br>• <b>Diazonium extras:</b> Gomberg (biaryl), and the mechanistic split — <b>Sandmeyer is radical</b> (Cu redox), <b>Balz–Schiemann is ionic</b> (aryl cation).<br>• <b>Basicity edge cases:</b> guanidine/amidine super-bases; rigid caged amines (quinuclidine) cannot invert; Bredt’s-rule bridgeheads cannot delocalise their lone pair.<br>• <b>Mustard-oil test</b> (in the reactions table above) for 1° aliphatic amines.',
      },

      { t: 'part', title: 'High-yield exam traps — master list' },
      {
        t: 'mistakes',
        items: [
          'Classify amines by <b>groups on N</b>, not by the carbon (tert-butylamine is <b>1°</b>).',
          '<b>Gas-phase ≠ aqueous</b> basicity order — never quote 3° > 2° > 1° for solution.',
          'Aniline’s low basicity is <b>resonance</b>, not induction.',
          '<b>Protect aniline</b> (acetanilide) before bromination/nitration; direct routes over-substitute / give meta.',
          '<b>3° amines</b> give <b>no</b> acylation, <b>no</b> Hinsberg product, <b>no</b> carbylamine, <b>no</b> mustard oil (no N–H / wrong class).',
          '<b>Carbon counts:</b> halide via nitrile +1, amide same, Gabriel same, Hofmann −1.',
          '<b>Gabriel fails</b> for aryl and 3°-alkyl amines (needs S<sub>N</sub>2).',
          '<b>LiAlH<sub>4</sub></b> does not cleanly reduce aromatic –NO<sub>2</sub> to –NH<sub>2</sub> (it gives azo compounds).',
          '<b>Diazonium:</b> keep at 273–278 K; warming → phenol; dry salt explosive.',
          '<b>Sandmeyer = Cu(I) salt; Gattermann = Cu powder + HX;</b> iodide needs no Cu; fluoride needs HBF<sub>4</sub>.',
          '<b>Coupling</b> needs an activated ring <b>and</b> the right pH (phenol mild alkali, amine mild acid).',
          '<b>Friedel–Crafts fails on aniline</b> (AlCl<sub>3</sub> binds N).',
          '<b>Diazonium salts give a negative Lassaigne’s test</b> (lose N<sub>2</sub> before fusion).',
        ],
      },

      { t: 'part', title: 'Conditions and numbers — quick reference' },
      {
        t: 'p',
        html: '• Diazotisation / arenediazonium stability: <b>273–278 K</b> (0–5 °C).<br>• Diazonium → phenol on warming: <b>> 283 K</b>.<br>• Aniline → sulphanilic acid (“baking”): ≈ <b>453–473 K</b>.<br>• Coupling pH: <b>phenol 9–10</b> (alkaline), <b>aniline 4–5</b> (acidic).<br>• Stoichiometry: Hofmann bromamide needs <b>4 KOH</b>; carbylamine needs <b>3 KOH</b> (3 KCl + 3 H<sub>2</sub>O).<br>• Reactivity in ammonolysis: R–I > R–Br > R–Cl.',
      },
      {
        t: 'p',
        html: '<b>One-line chapter spine:</b> Amines = substituted ammonia (classify by N) → made by reduction/Gabriel/Hofmann (mind the carbon count) → react as bases and nucleophiles (tests sort 1°/2°/3°) → aromatic amines go through diazonium, the gateway to the whole benzene-substitution menu and to azo dyes.',
      },
    ],
  },
];
