import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 9, Additional topic F, word for word from the Class 12 Chemistry Master
 * Reference: the book's "Addendum P — What JEE & NEET Actually Ask" (pp. 474–477; it
 * opens partway down p. 474, after Addendum D's summary bullets), kept as the last
 * Additional topic. Page 478 is the title page of the next chapter.
 *
 * Parts are the book's own headings without their numbers ("1. The Distribution" →
 * "The Distribution"); the text before the first heading is the Introduction. The
 * distribution table (pp. 474–475, its head reprinted over the page turn) is a table
 * block, with one line before it saying the shares are the book's estimate. Each
 * archetype is one paragraph with its bold run-in lead; Archetype 1's "Worked
 * representative" is a worked example with that tag. The five traps are one mistakes
 * block. The graded practice set prints its answers in one block after the questions;
 * each is set here as that question's answer. As in Additional topics A and B, the
 * book's spaced hyphens (" - ") are the house dash (" — "), bonds are en dashes (N–H,
 * –CH<sub>2</sub>–) and ranges take an en dash (273–278 K). These pages print no
 * drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ─────────────── Additional topic F (the book's Addendum P) · pp. 474–477 ───────────────
  {
    n: 'F',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Amine class counts groups on nitrogen, not on carbon.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The analysis below surveys recent JEE Main and NEET questions on this chapter — single-correct and numerical items — and groups them by what they test. The percentages are approximate shares of the questions surveyed.',
      },

      { t: 'part', title: 'The Distribution' },
      { t: 'p', html: 'The shares below are the book’s estimate from past papers, not official figures.' },
      {
        t: 'table',
        title: null,
        head: ['Sub-topic', 'Approx. share', 'Typical form'],
        rows: [
          [
            'Distinguishing tests (carbylamine, Hinsberg, HNO<sub>2</sub>, mustard oil, Liebermann)',
            '~30%',
            '“which test / which amine” MCQ, match-the-column',
          ],
          ['Basicity ordering (aqueous, substituent effects, ring nitrogens)', '~20%', 'order the four structures'],
          [
            'Preparation routes and the carbon ledger (Gabriel, Hofmann bromamide, nitrile reduction, nitro reduction)',
            '~25%',
            'reagent selection, “which can/cannot be made”',
          ],
          ['Hofmann exhaustive methylation / Hofmann alkene', '~6%', 'structure proof via ozonolysis'],
          ['Diazonium chemistry', '~12%', 'identify A/B in a sequence; stoichiometry'],
          ['Isomer counting + test overlay (C<sub>4</sub>H<sub>11</sub>N)', '~6%', 'numerical answer-type'],
        ],
      },
      {
        t: 'p',
        html: 'Two practical conclusions. First, this is a <b>reaction-identification chapter</b>: by the book’s estimate, nearly one question in three is a distinguishing-test item. Second, numerical answer-type items (count isomers, count test-positive amines, molecular mass of a sequence product) are a JEE Main staple here — Addendum B’s enumeration table is built exactly for them.',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      {
        t: 'p',
        html: '<b>Archetype 1 — “Order the bases.”</b> Four structures, four orderings. Typical versions include pure aliphatic sets (answer follows the aqueous order 2° > 3° > 1° or 2° > 1° > 3° depending on alkyl group), mixed aryl/alkyl sets (benzylamine > ammonia > N-methylaniline > aniline), and a two-nitrogen heterocycle asking which N is protonated (the pyridine-type N, lone pair outside the sextet). Approach: classify each nitrogen (aliphatic / aniline-type / benzyl-type / ring-type), then apply Table 13.3 logic.',
      },
      {
        t: 'ex',
        tag: 'Worked representative',
        q: 'Order PhNH<sub>2</sub> (I), PhNHCH<sub>3</sub> (II), PhCH<sub>2</sub>NH<sub>2</sub> (III), NH<sub>3</sub> (IV).',
        steps: [
          'Benzylamine’s lone pair is insulated by –CH<sub>2</sub>–: strongest. N-methylaniline keeps the ring conjugation: weakest but one.',
        ],
        ans: 'III > IV > II > I.',
      },
      {
        t: 'p',
        html: '<b>Archetype 2 — “Which amine / which test.”</b> The stem describes test outcomes; you identify the amine, or vice versa. Typical stems: a Hinsberg product that is alkali-soluble ⇒ 1°; HNO<sub>2</sub> followed by the phenol/H<sub>2</sub>SO<sub>4</sub>/NaOH colour sequence ⇒ a 2° amine, aliphatic or aromatic (Liebermann; N-methylaniline is the usual example); a set of amines of which the Liebermann-positive ones must be picked. Approach: count N–H hydrogens, then match the observation vocabulary (foul smell = carbylamine = 1°; yellow oil = nitrosamine = 2°; alkali-soluble sulphonamide = 1°).',
      },
      {
        t: 'p',
        html: '<b>Archetype 3 — “Count and overlay.”</b> Numerical items: enumerate C<sub>4</sub>H<sub>11</sub>N, then count how many satisfy a test condition. A standard item has answer 3 (the secondary amines — Hinsberg product insoluble in alkali); another sums three test-counts over a list of amines. Approach: enumerate once (Addendum B), read off counts. Never enumerate under time pressure without the class-first method.',
      },
      {
        t: 'p',
        html: '<b>Archetype 4 — “Pick the preparation.”</b> “Which amine can be made by Hofmann bromamide but not Gabriel?” (aniline — Hofmann degrades benzamide, while Gabriel’s S<sub>N</sub>2 step fails on aryl halides.) “Best reagent for C<sub>2</sub>H<sub>5</sub>CN → CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>NH<sub>2</sub>?” (LiAlH<sub>4</sub>.) “Which cannot reduce nitrobenzene to aniline?” (Sn/NH<sub>4</sub>OH and Cu/HCl are both invalid — the textbook reductants are Sn/HCl, Fe/HCl, Zn/HCl, H<sub>2</sub>/Pd.) Approach: run the carbon ledger (halide via nitrile +1, the carbon coming in with KCN; same Gabriel/amide, −1 Hofmann bromamide), then check scope exclusions (no aryl halides in Gabriel; LiAlH<sub>4</sub> turns ArNO<sub>2</sub> into azo compounds, not the amine).',
      },
      {
        t: 'p',
        html: '<b>Archetype 5 — “Exhaustive methylation structure proof.”</b> Amine + excess CH<sub>3</sub>I, then AgOH, then heat → alkene; the alkene is identified by ozonolysis fragments (HCHO + butanal ⇒ pent-1-ene ⇒ nitrogen on C-1 or C-2 ⇒ the achiral one, pentan-1-amine). Approach: reassemble the alkene from ozonolysis products first; nitrogen sat on one of the two alkene carbons, and Hofmann’s rule and any chirality clue decide which. Fully covered in Addendum C.',
      },
      {
        t: 'p',
        html: '<b>Archetype 6 — “Complete the diazonium sequence.”</b> Identify A and B in aniline → (NaNO<sub>2</sub>/HCl, 273–278 K) → A → (HBF<sub>4</sub>, heat) → B (A = benzenediazonium chloride, B = fluorobenzene). Or: vigorous reduction of the diazonium salt with Zn/HCl returns aniline, whereas mild reductants (SnCl<sub>2</sub>/HCl, Na<sub>2</sub>SO<sub>3</sub>) stop at phenylhydrazine. Approach: name the spoke by its reagent; remember that the strength of the reductant decides whether ArN<sub>2</sub><sup>+</sup> stops at the hydrazine or returns the amine.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Gas-phase vs aqueous basicity, and physical-property statements judged against the wrong fact.</b> A common item asks for the statement that is not correct for primary aliphatic amines; the false statement is the intermolecular-association claim — 1° amines carry two N–H bonds and associate more strongly than 2° amines, so “1° associate less than 2°” is false. Note that its neighbour “1° amines are less basic than 2° in the gaseous phase” is true (gas phase follows +I: 3° > 2° > 1°). Fix the phase and the fact before judging each statement.',
          '<b>“tert-butylamine is tertiary.”</b> Amine class counts groups on nitrogen, not on carbon. Gabriel-synthesis option lists (methylamine yes, aniline no, dimethylamine no) punish the same sloppy classification.',
          '<b>Reductant exclusions.</b> Sn/NH<sub>4</sub>OH and Cu/HCl do not reduce nitrobenzene to aniline. The usual valid reductants: Sn/HCl, Fe/HCl, Zn/HCl, H<sub>2</sub>/Pd or Ni.',
          '<b>Gabriel scope.</b> Never “aniline by Gabriel” and never a 2° or 3° amine — phthalimide nitrogen carries one alkyl group, period.',
          '<b>Sequence-product bookkeeping.</b> Some items ask the molecular mass of the end product of a multi-step sequence (benzylamine C<sub>7</sub>H<sub>9</sub>N → carbylamine product C<sub>8</sub>H<sub>7</sub>N, mass 117). Track the formula, not just the name, through each step.',
        ],
      },

      { t: 'part', title: 'Graded Practice Set' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET-level] Which gives the carbylamine test: aniline, N-methylaniline, N,N-dimethyl​aniline, or benzamide?',
            a: 'Aniline — carbylamine needs a 1° amine with two replaceable N–H; N-methylaniline is 2°, N,N-dimethyl​aniline is 3°, benzamide is an amide.',
          },
          {
            q: '[NEET-level] The strongest base in aqueous solution among CH<sub>3</sub>NH<sub>2</sub>, (CH<sub>3</sub>)<sub>2</sub>NH, (CH<sub>3</sub>)<sub>3</sub>N, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> is?',
            a: '(CH<sub>3</sub>)<sub>2</sub>NH — aqueous order for methylamines is 2° > 1° > 3° > NH<sub>3</sub> ≫ aniline.',
          },
          {
            q: '[JEE Main-level] How many isomeric amines of C<sub>4</sub>H<sub>11</sub>N give a yellow oily product with nitrous acid?',
            a: 'Three — the secondary isomers N-methyl​propan-1-amine, N-methyl​propan-2-amine, N-ethyl​ethanamine give N-nitrosamines (yellow oils).',
          },
          {
            q: '[JEE Main-level] Butanamide + Br<sub>2</sub>/KOH gives which amine, and how does its carbon count compare with the amide’s?',
            a: 'Propan-1-amine (propylamine); one fewer carbon (4 → 3), the carbonyl carbon leaving as carbonate.',
          },
          {
            q: '[JEE Main-level] The conjugate acid of base X has p<i>K</i><sub>a</sub> = 9.25; that of base Y has p<i>K</i><sub>a</sub> = 10.66. Which base is stronger, and what is Y’s p<i>K</i><sub>b</sub>?',
            a: 'Y is stronger (larger conjugate-acid p<i>K</i><sub>a</sub>); p<i>K</i><sub>b</sub>(Y) = 14 − 10.66 = 3.34.',
          },
          {
            q: '[JEE Main-level] Identify A and B: aniline →<sup>NaNO₂/HCl</sup> A →<sup>CuCN/KCN</sup> B.<br>(first step at 273–278 K)',
            a: 'A = benzenediazonium chloride; B = benzonitrile (cyanobenzene).',
          },
          {
            q: '[JEE Main-level] An amine A (C<sub>3</sub>H<sub>9</sub>N) with Hinsberg’s reagent gives a product insoluble in KOH. Give the structure and IUPAC name of A.',
            a: 'Hinsberg product insoluble in alkali ⇒ 2°; the only 2° isomer of C<sub>3</sub>H<sub>9</sub>N is CH<sub>3</sub>NHCH<sub>2</sub>CH<sub>3</sub>, N-methyl​ethanamine.',
          },
          {
            q: '[JEE Advanced-level] An optically inactive amine (C<sub>5</sub>H<sub>13</sub>N) on exhaustive methylation (CH<sub>3</sub>I excess; moist Ag<sub>2</sub>O; heat) gives an alkene whose ozonolysis yields only formaldehyde and butanal. Identify the amine.',
            a: 'The ozonolysis fragments HCHO (from terminal =CH<sub>2</sub>) and CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CHO (from CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH=) reassemble to pent-1-ene, CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>. Hofmann elimination removes a β-hydrogen next to the carbon that bore nitrogen, so nitrogen sat on C-1 or C-2 of a straight five-carbon chain. Pentan-2-amine, which would also give mainly pent-1-ene (and some pent-2-ene, whose fragments are not formaldehyde and butanal), is chiral, so the optically inactive (achiral) amine is pentan-1-amine, CH<sub>3</sub>(CH<sub>2</sub>)<sub>4</sub>NH<sub>2</sub>.',
          },
          {
            q: '[JEE Advanced-level] Rank in decreasing basicity: pyrrole, pyridine, piperidine-type aliphatic amine, aniline — and justify the placement of the two heterocycles.',
            a: 'Piperidine-type aliphatic amine > pyridine > aniline > pyrrole. Pyridine’s lone pair is free (sp<sup>2</sup>, outside the sextet); pyrrole’s lone pair is part of the aromatic sextet, so protonation would destroy aromaticity.',
          },
          {
            q: '[JEE Main-level] Which reagent set does not convert nitrobenzene to aniline: (a) Sn/HCl, (b) Sn/NH<sub>4</sub>OH, (c) H<sub>2</sub>/Pd, (d) Fe/HCl? Strike out the invalid one.',
            a: 'Invalid: (b) Sn/NH<sub>4</sub>OH. Valid: Sn/HCl, H<sub>2</sub>/Pd, Fe/HCl.',
          },
        ],
      },

      { t: 'part', title: 'What the Chapter Under-Serves' },
      {
        t: 'p',
        html: 'The chapter covers the core reactions, though not Liebermann’s test or the reduction of a diazonium salt to phenylhydrazine (both used above), and three examinable skills are barely exercised in it: numerical isomer counting overlaid with test outcomes (only on C<sub>3</sub>H<sub>9</sub>N; Addendum B), p<i>K</i><sub>b</sub>/p<i>K</i><sub>a</sub> arithmetic (the chapter quotes p<i>K</i><sub>b</sub> values but never converts a p<i>K</i><sub>a</sub>; Addendum A), and the exhaustive-methylation structure proof that JEE Main has asked in two separate sessions (stated once in Topic 04, never worked; Addendum C). A student who has read only the chapter will recognise most facts in these questions but may still miss the counting and mechanism-assembly questions.',
      },
    ],
  },
];
