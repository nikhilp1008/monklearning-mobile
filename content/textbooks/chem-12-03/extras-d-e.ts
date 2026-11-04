import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional Topics D and E, word for word from the Class 12 Chemistry
 * Master Reference: D The Mechanisms NCERT Actually Names (pp. 141–143; everything
 * above its heading on p. 141 belongs to C) and E, the book's "Addendum P — What
 * JEE & NEET Actually Ask" (pp. 143–146), kept as the last Additional topic.
 *
 * Each addendum prints its answers inside its practice questions as "(Answer: …)";
 * each answer is set here as that question's answer. Generic species (A, B, A2, B2,
 * AB) are upright like real ones, though the book slants them. These pages print
 * no drawing and no formula card.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic D · pp. 141–143 ─────────────────────────
  {
    n: 'D',
    title: 'The Mechanisms NCERT Actually Names',
    extra: true,
    kalam: 'Two morals exams draw: the slow step sets the rate law, and an intermediate never appears in the balanced reaction.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter teaches mechanism handling through a synthetic dimerisation example. NCERT itself teaches the same lesson through a named reaction, peroxide–iodide, and JEE mechanism items also draw on the ozone pre-equilibrium. Learn both.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Peroxide–iodide (NCERT’s mechanism example).</b> The decomposition of hydrogen peroxide, catalysed by iodide in alkaline medium,<br>2H<sub>2</sub>O<sub>2</sub> →<sup>I⁻, alkaline</sup> 2H<sub>2</sub>O + O<sub>2</sub><br>is experimentally first order in both H<sub>2</sub>O<sub>2</sub> and I<sup>−</sup>: Rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]. NCERT’s two-step account: (1) H<sub>2</sub>O<sub>2</sub> + I<sup>−</sup> → H<sub>2</sub>O + IO<sup>−</sup> (slow); (2) H<sub>2</sub>O<sub>2</sub> + IO<sup>−</sup> → H<sub>2</sub>O + I<sup>−</sup> + O<sub>2</sub> (fast). The species IO<sup>−</sup> is an intermediate — formed and consumed inside the mechanism, absent from the overall equation. The first step is rate-determining, which is why the experimental order matches its molecularity. Two morals exams draw: the slow step sets the rate law, and an intermediate never appears in the balanced reaction.',
      },
      {
        t: 'p',
        html: '<b>Ozone decomposition (the pre-equilibrium classic).</b> For 2O<sub>3</sub> → 3O<sub>2</sub> with the mechanism<br>O<sub>3</sub> ⇌<sup><i>k</i>₁</sup><sub><i>k</i>₋₁</sub> O<sub>2</sub> + O (fast),<br>O + O<sub>3</sub> →<sup><i>k</i>₂</sup> 2O<sub>2</sub> (slow)<br>the slow step gives Rate = <i>k</i><sub>2</sub>[O][O<sub>3</sub>], and the fast equilibrium gives [O] = (<i>k</i><sub>1</sub>/<i>k</i><sub>−1</sub>)[O<sub>3</sub>]/[O<sub>2</sub>]. Substituting:<br>Rate = (<i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub>)([O<sub>3</sub>]<sup>2</sup>/[O<sub>2</sub>]) = <i>k</i><sub>obs</sub>[O<sub>3</sub>]<sup>2</sup>[O<sub>2</sub>]<sup>−1</sup><br>Second order in ozone, order −1 in oxygen, overall order 1. The product oxygen retards the reaction — the signature prediction, and exactly the statement pair JEE set from it (overall order 1; increasing [O<sub>2</sub>] decreases the rate).',
      },
      {
        t: 'p',
        html: '<b>Apparent versus true order (NCERT’s caution).</b> KClO<sub>3</sub> + 6FeSO<sub>4</sub> + 3H<sub>2</sub>SO<sub>4</sub> → KCl + 3Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub>O seems to be of tenth order from its stoichiometry but is experimentally second order — the permanent warning that the balanced equation is bookkeeping, not kinetics.',
      },
      {
        t: 'p',
        html: '<b>NCERT’s named zero-order reactions.</b> Thermal decomposition of HI on a gold surface, and decomposition of NH<sub>3</sub> on platinum at high pressure — both run at a rate fixed by the saturated catalyst surface, independent of concentration. Quote these when a board question demands an example.',
      },
      {
        t: 'p',
        html: '<b>The catalyst — the intermediate-complex picture.</b> A catalyst participates by forming an unstable intermediate complex with the reactants, which decomposes to products and regenerates the catalyst (the intermediate-complex theory); a small amount catalyses a large amount of reactant, and the catalyst does not change the equilibrium constant. Strictly, a substance that decreases the rate is an inhibitor (a “negative catalyst”), not a catalyst in the usual sense.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main archetype — The ozone mechanism, statement by statement',
        q: 'For the ozone mechanism in Method, judge: (P) the overall order is 3/2; (Q) the overall order is 1; (R) increasing [O<sub>2</sub>] decreases the rate; (S) decreasing [O<sub>3</sub>] increases the rate.',
        steps: [
          'From Rate = <i>k</i><sub>obs</sub>[O<sub>3</sub>]<sup>2</sup>[O<sub>2</sub>]<sup>−1</sup>: the overall order is 2 − 1 = 1, so (Q) true, (P) false; [O<sub>2</sub>] sits in the denominator, so raising it cuts the rate — (R) true; decreasing [O<sub>3</sub>] lowers the rate (order +2), so (S) is false.',
          'The derivation, not memory of the exponents, is what survives a re-lettered exam item.',
        ],
        ans: 'Correct pair: (Q) and (R).',
      },
      {
        t: 'ex',
        tag: 'JEE Main 2025 archetype — Fractional order from a dissociation equilibrium',
        q: 'For A<sub>2</sub> + B<sub>2</sub> → 2AB via A<sub>2</sub> ⇌ 2A (fast), A + B<sub>2</sub> → AB + B (slow), A + B → AB (fast), find the rate law and overall order.',
        steps: [
          'Slow step (rate constant <i>k</i><sub>2</sub>): Rate = <i>k</i><sub>2</sub>[A][B<sub>2</sub>]. From the fast equilibrium (equilibrium constant <i>K</i>), [A] = (<i>K</i>[A<sub>2</sub>])<sup>1/2</sup>, so<br>Rate = <i>k</i><sub>2</sub><i>K</i><sup>1/2</sup>[A<sub>2</sub>]<sup>1/2</sup>[B<sub>2</sub>]',
          'A fractional order is the mechanism’s fingerprint: here the half-integer order comes from the dissociative pre-equilibrium A<sub>2</sub> ⇌ 2A. Other complex mechanisms, such as chain reactions, can also give fractional orders.',
        ],
        ans: 'Overall order = 1/2 + 1 = 1.5.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Name the intermediate in the iodide-catalysed decomposition of H<sub>2</sub>O<sub>2</sub>, write the mechanism, and state the experimental rate law.',
            a: 'IO<sup>−</sup>; (1) H<sub>2</sub>O<sub>2</sub> + I<sup>−</sup> → H<sub>2</sub>O + IO<sup>−</sup> (slow), (2) H<sub>2</sub>O<sub>2</sub> + IO<sup>−</sup> → H<sub>2</sub>O + I<sup>−</sup> + O<sub>2</sub> (fast); Rate = <i>k</i>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>].',
          },
          {
            q: '[NEET] The reaction KClO<sub>3</sub> + 6FeSO<sub>4</sub> + 3H<sub>2</sub>SO<sub>4</sub> → ⋯ appears tenth-order from stoichiometry. What is its actual order and the moral?',
            a: 'Second order — order is experimental; stoichiometric coefficients do not give the rate law for a complex reaction.',
          },
          {
            q: '[JEE Main] Give one NCERT example of a zero-order reaction and explain the physical reason.',
            a: 'HI decomposition on a gold surface (or NH<sub>3</sub> on Pt at high pressure); the catalyst surface is saturated, so rate is independent of bulk concentration.',
          },
          {
            q: '[JEE Advanced] For the ozone mechanism, derive what happens to the rate if [O<sub>2</sub>] is doubled at fixed [O<sub>3</sub>].',
            a: 'Rate ∝ [O<sub>2</sub>]<sup>−1</sup>, so it halves — the fast equilibrium shifts left, starving the slow step of O atoms.',
          },
        ],
      },
    ],
  },

  // ─────────────── Additional topic E (the book's Addendum P) · pp. 143–146 ───────────────
  {
    n: 'E',
    title: 'What JEE and NEET Actually Ask',
    extra: true,
    kalam: 'Integrated rate laws and first-order numericals are the largest block: more than one recent question in three belongs there.',
    blocks: [
      { t: 'part', title: 'The Distribution' },
      {
        t: 'p',
        html: 'Questions on this chapter fall into five sub-topics, in roughly the following proportions. Integrated rate laws and first-order numericals are the largest block: more than one recent question in three belongs there.',
      },
      {
        t: 'table',
        title: null,
        head: ['Sub-topic', 'Approximate share', 'Typical ask'],
        rows: [
          [
            'Integrated rate laws, half-lives and first-order numerics (incl. order from <i>t</i><sub>1/2</sub>, gas-phase)',
            '~37%',
            'Time for a stated fraction of completion; order from half-life data; <i>k</i> from total-pressure data',
          ],
          [
            'Arrhenius equation, activation energy, catalysts and collision theory',
            '~28%',
            '<i>E</i><sub>a</sub> from two temperatures or a ln <i>k</i> vs 1/<i>T</i> slope; effect of a catalyst; collision-theory statements',
          ],
          [
            'Rate law, order, molecularity, initial-rate tables, units of <i>k</i>',
            '~23%',
            'Order from an initial-rate table; units of <i>k</i>; order versus molecularity',
          ],
          ['Mechanisms (rate law from a proposed mechanism)', '~7%', 'Slow step plus fast equilibrium; overall order'],
          ['Pseudo first order', '~5%', 'Identify the pseudo order; extract <i>k</i> from <i>k</i>′'],
        ],
      },
      {
        t: 'p',
        html: 'These questions span JEE Main 2021–2025 and NEET sittings; the mix is stable, with 2025 adding the two new shapes that Additional topics B and C close (effective <i>E</i><sub>a</sub> of a composite constant; the <i>p</i><sub>∞</sub> first-order form).',
      },

      { t: 'part', title: 'The Recurring Archetypes' },
      { t: 'p', html: '<b>Archetype 1 — “The completion-percentage ladder”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A first-order reaction is <i>x</i>% complete in time <i>t</i><sub>1</sub>; find the time for <i>y</i>%.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Fractions in the same units cancel <i>k</i>: <i>t</i> ∝ ln(1/(1 − <i>f</i>)), where <i>f</i> is the fraction completed. Representative: 60% decomposition in 540 s, find the 90% time. <i>t</i><sub>90</sub>/<i>t</i><sub>60</sub> = ln 10/ln(1/0.4) = 2.303/0.916 = 2.51, so <i>t</i><sub>90</sub> = 540 × 2.51 ≈ 1355 s (1.36 × 10<sup>3</sup> s to three significant figures). Where the percentages sit on the powers-of-two ladder (75%, 87.5%, 93.75%), count half-lives instead; 99.9% is close to it, at ≈ 10 half-lives.',
      },
      { t: 'p', html: '<b>Archetype 2 — “Order from half-life behaviour”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> <i>t</i><sub>1/2</sub> given at two starting concentrations or pressures; name the order.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> <i>t</i><sub>1/2</sub> ∝ [A]<sub>0</sub><sup>1−<i>n</i></sup>. Unchanged ⇒ first order; proportional ⇒ zero order; inverse ⇒ second; quadruples when concentration halves ⇒ third (the second worked example of Additional topic A). Never read order from one half-life alone; always compare two, and when data and a quoted answer seem to disagree, trust the proportionality.',
      },
      { t: 'p', html: '<b>Archetype 3 — “Arrhenius, forward and backward”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Two (<i>k</i>, <i>T</i>) pairs, or a ln <i>k</i> vs 1/<i>T</i> slope; find <i>E</i><sub>a</sub> or a rate constant at a new temperature.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> log(<i>k</i><sub>2</sub>/<i>k</i><sub>1</sub>) = (<i>E</i><sub>a</sub>/(2.303<i>R</i>))[(<i>T</i><sub>2</sub> − <i>T</i><sub>1</sub>)/(<i>T</i><sub>1</sub><i>T</i><sub>2</sub>)]; slope of log <i>k</i> vs 1/<i>T</i> is −<i>E</i><sub>a</sub>/(2.303<i>R</i>). Representative: <i>k</i> = 1.0 × 10<sup>−3</sup> s<sup>−1</sup> at 300 K, <i>E</i><sub>a</sub> = 11.488 kJ mol<sup>−1</sup>; at 200 K, log(<i>k</i><sub>200</sub>/<i>k</i><sub>300</sub>) = (11488/(2.303 × 8.314))[−100/60000] = −1.00, so <i>k</i><sub>200</sub> = 1.0 × 10<sup>−4</sup> s<sup>−1</sup>. Sign check: cooling must shrink <i>k</i>.',
      },
      { t: 'p', html: '<b>Archetype 4 — “Rate law from a proposed mechanism”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> A fast equilibrium plus a slow step; derive the rate law and order.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Write the slow step, then eliminate the intermediate with the equilibrium. The ozone mechanism (order 1, [O<sub>2</sub>]<sup>−1</sup>) and the A<sub>2</sub> ⇌ 2A dissociation (order 1.5) are the two live specimens — the first and second worked examples of Additional topic D. Also judge mechanisms by whether their derived law matches the given one, not by intuition.',
      },
      { t: 'p', html: '<b>Archetype 5 — “Zero-order interval timing”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Given one half-life at a stated [A]<sub>0</sub>, find the time between two other concentrations.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Zero order means constant rate: <i>k</i> = [A]<sub>0</sub>/(2<i>t</i><sub>1/2</sub>), then <i>t</i> = Δ[A]/<i>k</i>. From <i>t</i><sub>1/2</sub> = 1 h at 2.0 mol L<sup>−1</sup>: <i>k</i> = 1.0 mol L<sup>−1</sup> h<sup>−1</sup>, and 0.50 → 0.25 mol L<sup>−1</sup> takes 0.25 h = 15 min.',
      },
      { t: 'p', html: '<b>Archetype 6 — “Gas-phase first order in its two guises”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> Total-pressure data at constant volume; the correct expression for <i>k</i> or a reactant pressure.',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Recover <i>p</i><sub>A</sub> from the stoichiometric table before touching the rate law; use <i>p</i><sub>∞</sub> = 2<i>p</i><sub>i</sub> (for A → B + C) to toggle between the chapter’s <i>p</i><sub>i</sub> form and the <i>p</i><sub>∞</sub> form (the first worked example of Additional topic C). For the reactant pressure alone, <i>p</i><sub>A</sub> = <i>p</i><sub>i</sub><i>e</i><sup>−<i>kt</i></sup> needs no table at all (the second worked example of Additional topic C: 96 atm).',
      },
      { t: 'p', html: '<b>Archetype 7 — “Effective activation energy of a composite constant”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> <i>k</i> given as a product/quotient/power of step constants with their <i>E</i><sub>a</sub> values; find the overall <i>E</i><sub>a</sub> (JEE Main 2025).',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> Exponents and signs pass straight onto the activation energies (the first and second worked examples of Additional topic B). A step absent from the composite contributes nothing.',
      },
      { t: 'p', html: '<b>Archetype 8 — “Units of <i>k</i> betray the order”</b>' },
      {
        t: 'p',
        html: '<b>What it looks like:</b> <i>k</i> quoted with units and a rate; find a concentration or the order (for example <i>k</i> = 6 × 10<sup>−5</sup> s<sup>−1</sup> and rate 2.4 × 10<sup>−5</sup> mol L<sup>−1</sup> s<sup>−1</sup> for N<sub>2</sub>O<sub>5</sub>).',
      },
      {
        t: 'p',
        html: '<b>Approach:</b> s<sup>−1</sup> means first order, so [N<sub>2</sub>O<sub>5</sub>] = rate/<i>k</i> = 0.4 mol L<sup>−1</sup>. The general map: mol L<sup>−1</sup> s<sup>−1</sup> ⇒ 0; s<sup>−1</sup> ⇒ 1; L mol<sup>−1</sup> s<sup>−1</sup> ⇒ 2.',
      },

      { t: 'part', title: 'The Traps' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking <i>k</i> depends on concentration.</b> Changing a reactant concentration changes the rate (except at zero order), never the true rate constant. A pseudo first order <i>k</i>′ = <i>k</i>[B] does change with the excess concentration, but only because it carries [B]; <i>k</i> itself stays fixed. For a given reaction, <i>k</i> varies only with temperature (and catalyst).',
          '<b>Exothermic-versus-endothermic confusion.</b> The rate constant of an elementary step rises with temperature for both; only the equilibrium constant distinguishes them. A statement claiming that <i>k</i> falls with <i>T</i> for exothermic reactions is the false option such items hide.',
          '<b>Catalyst overreach.</b> A catalyst lowers <i>E</i><sub>a</sub> for both directions equally; Δ<i>H</i>, <i>K</i><sub>eq</sub> and the yield are untouched. “Shifts equilibrium” is the perennial distractor.',
          '<b>“Rate always increases with concentration.”</b> False at zero order — that qualifier is precisely what the statement item tests.',
          '<b>Order read off the equation.</b> Stoichiometry can be trusted to give order only for an elementary step (a complex reaction may match its coefficients by chance, but only experiment can show that); NCERT’s own KClO<sub>3</sub> example (apparent 10th, actual 2nd) exists to break this habit.',
          '<b>Total pressure in the rate law.</b> The first-order law wants the reactant’s partial pressure, recovered from the stoichiometric table — never the manometer reading directly.',
          '<b>Half-life rules swapped.</b> First order: independent of [A]<sub>0</sub>. Zero order: proportional. Second order: inverse. One anchor each: radioactive decay; saturated catalyst surface; dimerisation.',
        ],
      },

      { t: 'part', title: 'A Graded Practice Set' },
      { t: 'p', html: '<b>Level 1 — Direct recall</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'Define order and molecularity, and state why the latter can never be zero or fractional.',
            a: 'Order — sum of exponents in the experimental rate law; molecularity — number of species colliding in one elementary step, a counted whole number.',
          },
          {
            q: 'A reaction’s <i>k</i> has units L mol<sup>−1</sup> s<sup>−1</sup>. State its order and its linear plot.',
            a: 'Second order; 1/[A] vs <i>t</i>.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 2 — Applied</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'A first-order reaction is 75% complete in 60 min. Find the time for 93.75% completion.',
            a: 'Two half-lives = 60 min so <i>t</i><sub>1/2</sub> = 30 min; 93.75% = four half-lives = 120 min.',
          },
          {
            q: 'The rate constant doubles from 300 K to 310 K. Estimate <i>E</i><sub>a</sub>.',
            a: 'log 2 = (<i>E</i><sub>a</sub>/(2.303 × 8.314)) × (10/(300 × 310)), giving <i>E</i><sub>a</sub> ≈ 53.6 kJ mol<sup>−1</sup>.',
          },
          {
            q: 'For parallel first-order channels A → B (<i>k</i><sub>1</sub>) and A → C (<i>k</i><sub>2</sub>) with <i>k</i><sub>1</sub> = 2<i>k</i><sub>2</sub>, find the product ratio and the overall order of disappearance of A.',
            a: '[B]/[C] = 2; first order, with <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub> + <i>k</i><sub>2</sub>.',
          },
        ],
      },
      { t: 'p', html: '<b>Level 3 — Multi-step</b>' },
      {
        t: 'practice',
        items: [
          {
            q: 'A second-order reaction with <i>k</i> = 0.25 L mol<sup>−1</sup> min<sup>−1</sup> starts at [A]<sub>0</sub> = 0.10 M. Find <i>t</i><sub>1/2</sub> and the time for 87.5% conversion.',
            a: '40 min; 7 × 40 = 280 min.',
          },
          {
            q: 'A mechanism gives <i>k</i><sub>obs</sub> = <i>k</i><sub>1</sub><i>k</i><sub>2</sub>/<i>k</i><sub>−1</sub> with step activation energies 60, 50 and 30 kJ mol<sup>−1</sup> (<i>E</i><sub>a,1</sub>, <i>E</i><sub>a,2</sub>, <i>E</i><sub>a,−1</sub> respectively). Find the effective <i>E</i><sub>a</sub>.',
            a: '60 + 50 − 30 = 80 kJ mol<sup>−1</sup>.',
          },
          {
            q: 'For the first-order reaction A(g) → B(g) + C(g) started with pure A at 0.5 atm, write <i>k</i> using the infinite-time pressure and evaluate it if <i>p</i><sub>∞</sub> = 1.0 atm and <i>p</i><sub>t</sub> = 0.7 atm at <i>t</i> = 50 s.',
            a: '<i>k</i> = (1/<i>t</i>) ln[<i>p</i><sub>∞</sub>/(2(<i>p</i><sub>∞</sub> − <i>p</i><sub>t</sub>))] = (1/50) ln(1.0/0.6) = 1.0 × 10<sup>−2</sup> s<sup>−1</sup>.',
          },
          {
            q: 'For the ozone mechanism O<sub>3</sub> ⇌ O<sub>2</sub> + O (fast), O + O<sub>3</sub> → 2O<sub>2</sub> (slow), state the overall order and the effect of doubling [O<sub>2</sub>].',
            a: 'Overall order 1; rate halves, since Rate ∝ [O<sub>2</sub>]<sup>−1</sup>.',
          },
          {
            q: 'Substances A and B decay by first-order kinetics, A with <i>t</i><sub>1/2</sub> = 15 min and B with <i>t</i><sub>1/2</sub> = 5 min; initially [B]<sub>0</sub> = 4[A]<sub>0</sub>. When are the concentrations equal?',
            a: '15 min — 2<sup>2<i>t</i>/15</sup> = 4 gives <i>t</i> = 15.',
          },
        ],
      },
    ],
  },
];
