import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional Topics A and B, word for word from the Class 12 Chemistry
 * Master Reference: the shared opening of "Chapter 9: Amines — Additional Topics"
 * (p. 463, set at the head of Additional topic A's Introduction), then A Basicity as
 * a Number: pKb Arithmetic and the Conjugate-Acid Bridge (pp. 463–466) and B Counting
 * Amine Isomers: The C₄H₁₁N Drill (pp. 466–469; its last answer ends on p. 469, where
 * Addendum C begins).
 *
 * Each addendum prints its answers in one block after its practice questions; each is
 * set here as that question's answer. The book's unnumbered Figure 1 (p. 464, the
 * aqueous pKb values of NCERT Table 13.3) is c12-09-A-d1, after the three lessons it
 * illustrates, where the book prints it (the text never names it). B's primary-amine
 * table (p. 467) and its test table (pp. 467–468, its head reprinted over the page
 * turn) are table blocks. The book sets these addenda's dashes as spaced hyphens
 * (" - "); here they are the house dash (" — "), group dashes are en-dash bonds
 * (–NH<sub>2</sub>, N–H), and ranges take an en dash (3–4).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 463–466 ─────────────────────────
  {
    n: 'A',
    title: 'Basicity as a Number: pKb Arithmetic and the Conjugate-Acid Bridge',
    extra: true,
    kalam: '“Arylamines are weaker bases” is a million-fold statement, not a marginal one.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter builds the complete working kit: nomenclature and classification by nitrogen substitution, the preparation routes with their carbon ledger (halide via nitrile +1, the carbon coming in with KCN; amide same, Gabriel same, Hofmann bromamide −1), aqueous basicity logic, the carbylamine/Hinsberg/nitrous-acid distinguishing tests, and the diazonium replacement wheel. Four examinable patterns still stand outside the chapter’s door. Addendum A turns basicity from a qualitative order into a number game — p<i>K</i><sub>b</sub> arithmetic, the conjugate-acid p<i>K</i><sub>a</sub> conversion, and the two JEE-Advanced edge cases (the ortho effect and lone pairs locked inside aromatic rings) that JEE and NEET papers keep returning to. Addendum B supplies a skill the chapter meets only on the small formula C<sub>3</sub>H<sub>9</sub>N: systematic enumeration of amine isomers, run on the classic formula C<sub>4</sub>H<sub>11</sub>N, and welded to the identification tests so a single enumeration answers five different MCQ shapes. Addendum C works through Hofmann exhaustive methylation — the exhaustive-alkylation-to-alkene sequence that appears in JEE papers but not in NCERT, and that the chapter states in a single line of Topic 04 without working it — together with Liebermann’s nitroso test for secondary amines, which the chapter does not mention. Addendum D converts the diazonium wheel from a reagent map into a synthesis-design method, with graded multi-step conversions. Additional topic F then surveys recent JEE and NEET papers and shows exactly what they ask.',
      },
      {
        t: 'p',
        html: 'The chapter fixes the orders (gas phase 3° > 2° > 1° > NH<sub>3</sub>; aqueous methyl (CH<sub>3</sub>)<sub>2</sub>NH > CH<sub>3</sub>NH<sub>2</sub> > (CH<sub>3</sub>)<sub>3</sub>N > NH<sub>3</sub>) and quotes NCERT Table 13.3. What it does not do is calculate with those numbers — it quotes p<i>K</i><sub>b</sub> values only to confirm an order and never converts a conjugate-acid p<i>K</i><sub>a</sub>: JEE Main regularly hands you p<i>K</i><sub>b</sub> or p<i>K</i><sub>a</sub> values and asks for the order, or vice versa, and NEET asks which of a list is “more basic than aniline.” This addendum supplies the arithmetic.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>The two scales and the bridge.</b> Basicity is measured by<br><i>K</i><sub>b</sub> = ([RNH<sub>3</sub><sup>+</sup>][OH<sup>−</sup>])/[RNH<sub>2</sub>]<br>p<i>K</i><sub>b</sub> = −log <i>K</i><sub>b</sub><br>Larger <i>K</i><sub>b</sub> (smaller p<i>K</i><sub>b</sub>) means a stronger base. The same information is often quoted as the p<i>K</i><sub>a</sub> of the conjugate acid RNH<sub>3</sub><sup>+</sup>. The two are locked together at 298 K by the ionic product of water:',
      },
      {
        t: 'formula',
        kicker: 'The conjugate-acid bridge',
        main: 'p<i>K</i><sub>a</sub>(RNH<sub>3</sub><sup>+</sup>) + p<i>K</i><sub>b</sub>(RNH<sub>2</sub>) = p<i>K</i><sub>w</sub> = 14',
        legend: [
          'p<i>K</i><sub>a</sub>(RNH<sub>3</sub><sup>+</sup>) = p<i>K</i><sub>a</sub> of the conjugate acid',
          'p<i>K</i><sub>b</sub>(RNH<sub>2</sub>) = p<i>K</i><sub>b</sub> of the amine',
          'p<i>K</i><sub>w</sub> = negative logarithm of the ionic product of water, 14 at 298 K',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'So a strong base has a small p<i>K</i><sub>b</sub> and therefore a <b>large</b> conjugate-acid p<i>K</i><sub>a</sub>. When a question gives you p<i>K</i><sub>a</sub> values of conjugate acids, the strongest base is the one with the <b>largest</b> p<i>K</i><sub>a</sub> — the direction is reversed relative to p<i>K</i><sub>b</sub>, and that reversal is the trap the question is built around.',
      },
      {
        t: 'p',
        html: '<b>Reading NCERT Table 13.3 quantitatively.</b> The table gives, in aqueous solution: methanamine 3.38, ethanamine 3.29, N-methyl​methanamine 3.27, N-ethyl​ethanamine 3.00, N,N-dimethyl​methanamine 4.22, N,N-diethyl​ethanamine 3.25, ammonia 4.75, benzenamine (aniline) 9.38, phenyl​methanamine (benzylamine) 4.70, N-methylaniline 9.30, N,N-dimethyl​aniline 8.92. Three quantitative lessons fall out:<br>1. The gap between an aliphatic amine (p<i>K</i><sub>b</sub> ≈ 3) and aniline (p<i>K</i><sub>b</sub> = 9.38) is about six log units — aniline’s <i>K</i><sub>b</sub> is roughly 10<sup>−6</sup> times methylamine’s. “Arylamines are weaker bases” is a million-fold statement, not a marginal one.<br>2. Benzylamine (4.70) is basic like ammonia, not like aniline. The –CH<sub>2</sub>– spacer insulates the nitrogen lone pair from the ring: no resonance into benzene, so the lone pair stays available. Never classify C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>NH<sub>2</sub> as an “aromatic (weak) base” — it is an aryl-substituted <b>aliphatic</b> amine.<br>3. N,N-dimethyl​aniline (8.92) is more basic than aniline (9.38): the two methyl groups add +I push on the nitrogen, and the lone pair is still ring-conjugated either way.',
      },
      { t: 'fig', id: 'c12-09-A-d1' },
      {
        t: 'p',
        html: '<b>Edge case 1 — the ortho effect (JEE Advanced).</b> For substituted anilines the chapter’s rule is: electron-releasing groups raise basicity, electron-withdrawing groups lower it. The exception an ortho substituent introduces: an ortho group — even an electron-releasing one like –OCH<sub>3</sub> — crowds the –NH<sub>2</sub> and its protonated form, hindering both the approach of the proton and the solvation of the cation. The result is that <b>ortho-substituted anilines are weaker bases than their para isomers almost regardless of the substituent’s electronic nature</b>. Rank para isomers by electronics; demote any ortho isomer on steric grounds. (Beyond CBSE/NEET core.)',
      },
      {
        t: 'p',
        html: '<b>Edge case 2 — lone pairs inside aromatic rings (JEE Advanced).</b> When nitrogen itself sits in an aromatic ring, ask one question: is the lone pair part of the aromatic sextet?<br>• <b>Pyrrole-type nitrogen (N–H in a five-membered aromatic ring):</b> the lone pair is the sextet’s contribution from nitrogen. Protonating it would destroy aromaticity, so pyrrole is an extremely weak base — weaker even than aniline.<br>• <b>Pyridine-type nitrogen (=N– in an aromatic ring, as in six-membered pyridine):</b> the lone pair sits in an sp<sup>2</sup> orbital in the plane of the ring, outside the sextet. It is available (though held in an sp<sup>2</sup> orbital, so less basic than an sp<sup>3</sup> amine nitrogen), so pyridine is a respectable base — more basic than aniline, less basic than aliphatic amines.',
      },
      {
        t: 'p',
        html: 'Overall: pyrrole < aniline < pyridine < aliphatic amine. In a molecule containing both kinds (imidazole has one pyrrole-N and one pyridine-N), protonation occurs at the pyridine-type nitrogen — the one whose lone pair is not needed for aromaticity.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main — Ranking from conjugate-acid pKa values',
        q: 'The p<i>K</i><sub>a</sub> values of the conjugate acids of four bases are: P 10.6, Q 4.6, R 9.2, S 3.2. Arrange the bases in decreasing order of basic strength.',
        steps: [
          'The conjugate-acid p<i>K</i><sub>a</sub> and the base’s own p<i>K</i><sub>b</sub> sum to 14, so the strongest base has the largest conjugate-acid p<i>K</i><sub>a</sub>. Directly: P (10.6) > R (9.2) > Q (4.6) > S (3.2). In p<i>K</i><sub>b</sub> terms P, Q, R, S are 3.4, 9.4, 4.8 and 10.8 respectively — P is an aliphatic-amine-strength base, Q is aniline-strength, S is weaker still (an arylamine carrying an electron-withdrawing group, such as a chloroaniline).',
        ],
        ans: 'P > R > Q > S.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'How many times more basic is benzylamine than aniline?',
        steps: [
          'From Table 13.3, p<i>K</i><sub>b</sub>(benzylamine) = 4.70 and p<i>K</i><sub>b</sub>(aniline) = 9.38.<br><i>K</i><sub>b</sub>(benzylamine)/<i>K</i><sub>b</sub>(aniline) = 10<sup>9.38−4.70</sup> = 10<sup>4.68</sup> ≈ 5 × 10<sup>4</sup>',
          'The structural reason: in benzylamine the –CH<sub>2</sub>– group breaks the conjugation between the nitrogen lone pair and the ring, so the lone pair stays on nitrogen and behaves like that of an ordinary aliphatic amine; in aniline the lone pair is delocalised into the ring.',
        ],
        ans: 'About 5 × 10<sup>4</sup> times (≈ 10<sup>4.7</sup>).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced',
        q: 'Imidazole carries two nitrogens: N-1 bears an N–H (pyrrole-type) and N-3 is a bare =N– (pyridine-type). Which is protonated first by HCl, and why?',
        steps: [
          'Protonation must not destroy the aromatic sextet. The N-1 lone pair is part of the six-π aromatic system; tying it up with a proton would de-aromatise the ring — prohibitively costly. The N-3 lone pair lies in an in-plane sp<sup>2</sup> orbital and plays no role in aromaticity; it accepts the proton freely. Hence N-3 is protonated first. This is the general rule: in a ring with two nitrogens, the pyridine-type nitrogen is the basic site.',
        ],
        ans: 'N-3 (the pyridine-type nitrogen), because its lone pair is not involved in maintaining aromaticity.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] The conjugate acid of an amine has p<i>K</i><sub>a</sub> = 10.64. What is the p<i>K</i><sub>b</sub> of the amine, and is it an aliphatic amine or an arylamine?',
            a: 'p<i>K</i><sub>b</sub> = 14 − 10.64 = 3.36 — inside the aliphatic range (3.00–4.22 in NCERT’s table) and far from the arylamines (8.92–9.38), so an aliphatic amine. (It lies close to methylamine’s 3.38, but the data cannot name the amine.)',
          },
          {
            q: '[JEE Main] Given p<i>K</i><sub>b</sub> values: o-toluidine 9.56, m-toluidine 9.28, p-toluidine 8.90. Rank the three toluidines in basic strength and explain why the ortho isomer breaks the electronic expectation.',
            a: 'p-Toluidine > m-toluidine > o-toluidine (smaller p<i>K</i><sub>b</sub> = stronger base). The electron-releasing –CH<sub>3</sub> raises basicity most at para; at ortho, crowding around –NH<sub>2</sub> hinders solvation of the cation and outweighs the electronic gain — the ortho effect.',
          },
          {
            q: '[JEE Main] Arrange in decreasing basicity: pyrrole, aniline, pyridine, ethanamine.',
            a: 'Ethanamine > pyridine > aniline > pyrrole. (Pyridine’s lone pair is free but on an sp<sup>2</sup> ring nitrogen; pyrrole’s lone pair is locked into the aromatic sextet.)',
          },
          {
            q: '[CBSE] Aniline has p<i>K</i><sub>b</sub> = 9.38 while cyclohexanamine has p<i>K</i><sub>b</sub> ≈ 3.3. Compute the ratio of their <i>K</i><sub>b</sub> values and give the structural reason for the difference.',
            a: 'Ratio = 10<sup>9.38−3.3</sup> = 10<sup>6.08</sup> ≈ 10<sup>6</sup>; aniline’s lone pair is delocalised into the benzene ring, cyclohexanamine’s is localised on nitrogen.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 466–469 ─────────────────────────
  {
    n: 'B',
    title: 'Counting Amine Isomers: The C₄H₁₁N Drill',
    extra: true,
    kalam: 'Enumeration is a method, not a memory job; this addendum makes it one.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter enumerates C<sub>3</sub>H<sub>9</sub>N (four isomers) in Topic 01, in its opening section and again in a practice answer, and says only that C<sub>4</sub>H<sub>11</sub>N has eight. Examiners prefer C<sub>4</sub>H<sub>11</sub>N — eight isomers — and then layer an identification test on top (“how many give a Hinsberg product insoluble in alkali?”). Enumeration is a method, not a memory job; this addendum makes it one.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Step 1 — fix the degrees of unsaturation.</b> For C<sub>4</sub>H<sub>11</sub>N: a saturated acyclic amine of formula C<sub><i>n</i></sub>H<sub>2<i>n</i>+3</sub>N; C<sub>4</sub>H<sub>11</sub>N fits exactly, so every isomer is saturated and acyclic — no rings, no double bonds to chase.',
      },
      { t: 'p', html: '<b>Step 2 — enumerate by class, skeleton first.</b>' },
      {
        t: 'p',
        html: '<b>Primary amines (one C on N):</b> put –NH<sub>2</sub> on each distinct position of each butane skeleton.',
      },
      {
        t: 'table',
        title: null,
        head: ['Skeleton', 'Distinct positions', '1° amine'],
        rows: [
          ['n-butane', 'C1 (terminal)', 'butan-1-amine'],
          ['n-butane', 'C2 (internal)', 'butan-2-amine'],
          ['2-methylpropane', 'terminal –CH<sub>3</sub>', '2-methyl​propan-1-amine'],
          ['2-methylpropane', 'central C–H', '2-methyl​propan-2-amine'],
        ],
      },
      { t: 'p', html: 'Four primary amines.' },
      {
        t: 'p',
        html: '<b>Secondary amines (two C on N):</b> split the four carbons as 3 + 1 or 2 + 2.<br>• 3 + 1: N–CH<sub>3</sub> with a propyl group on the other side. The propyl group has two forms: n-propyl gives N-methyl​propan-1-amine; isopropyl gives N-methyl​propan-2-amine.<br>• 2 + 2: N-ethyl​ethanamine.',
      },
      { t: 'p', html: 'Three secondary amines.' },
      {
        t: 'p',
        html: '<b>Tertiary amines (three C on N):</b> the only split is 2 + 1 + 1: N,N-dimethyl​ethanamine. One tertiary amine.',
      },
      { t: 'p', html: '<b>Total: 4 + 3 + 1 = 8 structural isomers.</b>' },
      {
        t: 'p',
        html: '<b>Step 3 — label the isomerism types.</b> Butan-1-amine vs 2-methyl​propan-1-amine: chain isomerism. Butan-1-amine vs butan-2-amine: position isomerism. Butan-1-amine vs N-methyl​propan-1-amine: functional isomerism (different class of amine). N-methyl​propan-1-amine vs N-ethyl​ethanamine: metamerism (same class, different alkyl groups flanking nitrogen).',
      },
      {
        t: 'p',
        html: '<b>Step 4 — overlay the tests.</b> Once the list exists, every “how many…” question is a lookup:',
      },
      {
        t: 'table',
        title: null,
        head: ['Test', 'Positive for', 'Count in C₄H₁₁N'],
        rows: [
          ['Carbylamine (CHCl<sub>3</sub> + alc. KOH)', '1° only', '4'],
          ['Hinsberg product soluble in alkali', '1° only', '4'],
          ['Hinsberg product insoluble in alkali', '2° only', '3'],
          ['No Hinsberg reaction', '3° only', '1'],
          ['HNO<sub>2</sub>: N<sub>2</sub> evolved, alcohol formed', '1° only', '4'],
          ['HNO<sub>2</sub>: yellow oily nitrosamine', '2° only', '3'],
          ['Mustard-oil smell (CS<sub>2</sub>, then HgCl<sub>2</sub>)', '1° aliphatic only', '4'],
        ],
      },
      {
        t: 'p',
        html: '<b>Chirality check.</b> Butan-2-amine, CH<sub>3</sub>CH<sub>2</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>, carries a stereogenic carbon — it is the only isomer of C<sub>4</sub>H<sub>11</sub>N that can be optically active. JEE has asked exactly this.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'How many structural isomers of C<sub>4</sub>H<sub>11</sub>N react with benzene​sulphonyl chloride to give a product that is insoluble in alkali?',
        steps: [
          'Hinsberg product insoluble in alkali means no acidic N–H remains in the sulphonamide, which identifies a <b>secondary</b> amine (chapter logic: 1° gives alkali-soluble, 2° gives alkali-insoluble, 3° does not react). From the enumeration, the secondary amines are N-methyl​propan-1-amine, N-methyl​propan-2-amine and N-ethyl​ethanamine.',
        ],
        ans: '3.',
      },
      {
        t: 'ex',
        tag: 'NEET',
        q: 'An optically active amine A (C<sub>4</sub>H<sub>11</sub>N) gives a foul-smelling product with CHCl<sub>3</sub> and alcoholic KOH. Identify A.',
        steps: [
          'Carbylamine-positive means primary. Of the four primary isomers, only butan-2-amine has a stereogenic carbon (C-2 bears H, CH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>, NH<sub>2</sub> — four different groups). Butan-1-amine, 2-methyl​propan-1-amine and 2-methyl​propan-2-amine are all achiral.',
        ],
        ans: 'Butan-2-amine (sec-butylamine), CH<sub>3</sub>CH<sub>2</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] How many structural isomers of C<sub>3</sub>H<sub>9</sub>N are secondary amines? Name them.',
            a: 'One: N-methyl​ethanamine, CH<sub>3</sub>NHCH<sub>2</sub>CH<sub>3</sub>.',
          },
          {
            q: '[JEE Main] How many isomeric amines of C<sub>4</sub>H<sub>11</sub>N evolve nitrogen gas with nitrous acid?',
            a: 'Four — all four primary isomers (1° aliphatic amines give alcohol + quantitative N<sub>2</sub> with HNO<sub>2</sub>).',
          },
          {
            q: '[JEE Main] Identify a pair of metamers among the isomers of C<sub>4</sub>H<sub>11</sub>N and a pair showing position isomerism.',
            a: 'Metamers: N-methyl​propan-1-amine and N-ethyl​ethanamine (N-methyl​propan-2-amine and N-ethyl​ethanamine are metamers too). Position isomers: butan-1-amine and butan-2-amine (also 2-methyl​propan-1-amine and 2-methyl​propan-2-amine, and N-methyl​propan-1-amine and N-methyl​propan-2-amine).',
          },
          {
            q: '[JEE Advanced] An amine of formula C<sub>4</sub>H<sub>11</sub>N does not react with benzene​sulphonyl chloride but dissolves in dilute HCl. Give its structure and IUPAC name.',
            a: 'No Hinsberg reaction means 3°; basic (HCl-soluble) confirms an amine. Structure (CH<sub>3</sub>)<sub>2</sub>NCH<sub>2</sub>CH<sub>3</sub>: N,N-dimethyl​ethanamine.',
          },
        ],
      },
    ],
  },
];
