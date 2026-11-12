import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 01 and 02: pp. 8–18 of the Class 12 Chemistry Master
 * Reference, word for word. The chapter's title page (p. 7) and contents (top
 * of p. 8) are not copied. Topic 01, Types of Solutions (starts under the
 * contents on p. 8, ends p. 12), and Topic 02, Expressing the Concentration of
 * Solutions (pp. 13–18), are each split at their Sections 1 to 8. These pages
 * print no drawings. In Topic 02 M is molarity, as a variable in italics, and
 * M with subscript 1 or 2 is a molar mass, except in the dilution relation,
 * where the book uses the same letters for molarities.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 8–12 ─────────────────────────
  {
    n: '01',
    title: 'Types of Solutions',
    kalam: 'Here is the idea that organises everything: a solute and a solvent can each independently be a gas, a liquid, or a solid.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A foundational, high-frequency 1-mark topic. CBSE Boards routinely ask matching / assertion-reason / MCQ items that test classifying a given solution (soda water, brass, amalgam, air). NEET occasionally lifts a “type of solution” MCQ. JEE rarely asks it directly but assumes the vocabulary everywhere else in the chapter.',
      },
      {
        t: 'p',
        html: 'Open your kitchen and you are surrounded by solutions. Stir sugar into water for nimbu paani and it vanishes — you cannot see separate sugar grains, and every sip tastes equally sweet. That uniformity is the defining feature of a <b>solution</b>: a homogeneous mixture of two or more components whose composition and properties are the same throughout. “Homogeneous” is the key word — it is a single phase, with the dissolved particles smaller than about a nanometre, far too small to see, settle, or scatter light.',
      },
      {
        t: 'p',
        html: 'Every solution has two roles. The <b>solvent</b> is usually the component present in the larger amount, and it decides the physical state of the solution — if the solvent is liquid, the solution is liquid. The <b>solute</b> is whatever is dissolved in it (there can be more than one). When there are just two components, we call it a <b>binary solution</b>, which is what this whole chapter focuses on.',
      },
      {
        t: 'p',
        html: 'Here is the idea that organises everything: a solute and a solvent can each independently be a gas, a liquid, or a solid. That gives three families of solutions named after the solvent’s state — <b>gaseous, liquid, and solid solutions</b> — and within each family, the solute can be in any of the three states. Air is a gas dissolved in a gas; soda water is a gas dissolved in a liquid; brass is a solid dissolved in a solid.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture a 3-by-3 grid. Down one side, the state of the solute (gas / liquid / solid); across the top, the state of the solvent (gas / liquid / solid). Every real-world solution drops neatly into one of those nine cells. Salt water sits in “solid solute, liquid solvent”; a dental amalgam sits in “liquid solute (mercury), solid solvent (silver/tin)”; hydrogen stored in palladium sits in “gas solute, solid solvent.” Learning to place a solution in its cell is the entire skill this topic tests.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• A true solution is <b>homogeneous and single-phase</b>, with particle size below ~1 nm. If the particles are larger and scatter light (1–1000 nm) it is a <b>colloid</b>; if they settle out, it is a <b>suspension</b> — neither is a true solution.<br>• The “solvent = larger amount” rule is the usual guide, but when one component is a liquid and the other a gas or solid, the <b>liquid is conventionally taken as the solvent</b> regardless of amount. The exception is an amalgam: the solid metal is taken as the solvent and mercury as the solute.<br>• A component must actually dissolve (stay within its solubility limit) for a homogeneous solution to form; beyond saturation, excess solute simply remains undissolved.',
      },

      { t: 'part', title: 'Key definitions and classification' },
      {
        t: 'p',
        html: 'This is a qualitative, classification topic, so there are no formulas, SI units, or dimensional formulae here — the “core quantities” are the definitions and the nine-fold scheme.',
      },
      { t: 'p', html: '<b>Core definitions.</b>' },
      { t: 'def', term: 'Solution', html: 'a homogeneous mixture of two or more components, uniform in composition and properties.' },
      { t: 'def', term: 'Solvent', html: 'usually the component present in the larger amount; determines the physical state of the solution.' },
      { t: 'def', term: 'Solute', html: 'a component present in smaller amount, dissolved in the solvent.' },
      { t: 'def', term: 'Binary solution', html: 'a solution of exactly two components.' },
      { t: 'def', term: 'Aqueous / non-aqueous solution', html: 'solvent is water / solvent is something other than water.' },
      { t: 'def', term: 'Dilute / concentrated', html: 'relatively little solute / relatively much solute (qualitative terms).' },
      {
        t: 'def',
        term: 'Saturated / unsaturated / supersaturated',
        html: 'holds the maximum solute possible at that temperature / can hold more / metastably holds more than the maximum.',
      },
      {
        t: 'table',
        title: 'The nine types of solution (named by solvent state, then solute state)',
        head: ['Solution family', 'Solute state', 'Solvent state', 'Example'],
        rows: [
          ['Gaseous', 'gas', 'gas', 'air (mixture of O<sub>2</sub>, N<sub>2</sub>)'],
          ['Gaseous', 'liquid', 'gas', 'water vapour / chloroform vapour in air'],
          ['Gaseous', 'solid', 'gas', 'iodine vapour or camphor in nitrogen gas'],
          ['Liquid', 'gas', 'liquid', 'oxygen / CO<sub>2</sub> dissolved in water (soda water)'],
          ['Liquid', 'liquid', 'liquid', 'ethanol in water'],
          ['Liquid', 'solid', 'liquid', 'glucose or common salt in water'],
          ['Solid', 'gas', 'solid', 'hydrogen absorbed/dissolved in palladium'],
          ['Solid', 'liquid', 'solid', 'amalgam (mercury in a metal, e.g. dental amalgam)'],
          ['Solid', 'solid', 'solid', 'alloys — brass (Cu + Zn), German silver (Cu + Zn + Ni)'],
        ],
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: 'There is no derivation here; the skill is a clean classification procedure.' },
      {
        t: 'proc',
        title: 'Identifying solvent and solute',
        steps: [
          'If the components are in <b>different physical states</b>, take the one that keeps its state in the final solution as the solvent — usually the liquid (salt water → water is solvent; a gas dissolved in water → water is solvent) or the solid (an amalgam or hydrogen in palladium → the metal is solvent).',
          'If both are in the <b>same state</b>, the one present in the <b>larger amount</b> is the solvent (in a 30% ethanol–water mix, water is the solvent; in an alloy, the major metal is the solvent).',
          'The solvent fixes the physical state of the whole solution.',
        ],
      },
      {
        t: 'proc',
        title: 'Classifying any solution — step by step',
        steps: [
          'Identify the physical state of the <b>solute</b>.',
          'Identify the physical state of the <b>solvent</b>.',
          'Read off the cell in the nine-type table: “solute-state in solvent-state.”',
          'Name the family by the solvent (solid solvent → solid solution, etc.).',
        ],
      },
      {
        t: 'p',
        html: '<b>Distinguishing a true solution from a colloid or suspension.</b><br>• <b>True solution:</b> particle size < 1 nm, transparent, does not scatter light, never settles, passes through filter paper.<br>• <b>Colloid:</b> 1–1000 nm, scatters light (the beam becomes visible), does not settle quickly.<br>• <b>Suspension:</b> > 1000 nm, visibly cloudy, settles on standing. Only the first is a “solution” in the sense of this chapter.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Classify each of the following by the type of solution it represents (state the solute and solvent states): (a) soda water, (b) brass, (c) a sodium amalgam, (d) the air we breathe.',
        steps: [
          '(a) Soda water — CO<sub>2</sub> <b>gas</b> dissolved in liquid <b>water</b> → gas in liquid (a liquid solution).',
          '(b) Brass — <b>solid</b> zinc dissolved in <b>solid</b> copper → solid in solid (a solid solution / alloy).',
          '(c) Sodium amalgam — liquid <b>mercury</b> combined with <b>solid</b> sodium; the metal framework is solid, so → liquid in solid (a solid solution).',
          '(d) Air — <b>gas</b> (O<sub>2</sub>, etc.) in <b>gas</b> (mainly N<sub>2</sub>) → gas in gas (a gaseous solution).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '“German silver” is an example of which type of solution?<br>(a) liquid in solid (b) solid in liquid (c) solid in solid (d) liquid in liquid',
        steps: [
          '<b>Speed approach.</b> The trap is the name: German silver contains <b>no silver at all</b> — it is an alloy of copper, zinc and nickel, all solids. An alloy is a solid-in-solid solution.',
          '<b>Elimination tip:</b> any alloy (brass, bronze, steel, German silver) is solid-in-solid; the moment you see “alloy,” the answer is locked.',
        ],
        ans: '(c).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'Camphor slowly disappears from a sealed jar of nitrogen gas, tinting the gas with its smell, while no liquid forms. Identify the type of solution and justify which component is the solvent.',
        steps: [
          'Camphor (a <b>solid</b>) sublimes and disperses uniformly into <b>nitrogen gas</b>. The final homogeneous phase is a gas, so the gas is the solvent and camphor is the solute → a <b>solid-in-gas (gaseous) solution</b>. The solvent is nitrogen because it determines the physical state of the mixture (gaseous) and is present in vast excess.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A jeweller melts gold with a small amount of copper and lets it solidify into 22-carat gold. A chemistry student insists this is “just a compound of gold and copper.” Explain, using the definition of a solution, why the solidified alloy is better described as a solid solution than a compound, and identify solute and solvent.',
        steps: [
          'A <b>compound</b> has a fixed stoichiometric ratio and distinct, new chemical identity; an <b>alloy</b> like 22-carat gold can be made over a range of compositions (14-carat, 18-carat, 22-carat) with the metals retaining their own chemistry — copper atoms simply occupy sites within the gold lattice. Because it is a <b>homogeneous, single-phase mixture of variable composition</b> with no new compound formed, it satisfies the definition of a solution. Gold is present in the larger amount and sets the solid framework, so <b>gold is the solvent and copper the solute</b> → a <b>solid-in-solid solution</b>. This variable-composition test is exactly what separates a solid solution from a true compound.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define a solution. Distinguish between a solvent and a solute, and state which determines the physical state of the solution.',
            a: 'A solution is a homogeneous mixture of two or more components, uniform in composition and properties. The solvent is usually the component present in the larger amount; the solute is present in smaller amount and is dissolved in it. The solvent determines the physical state of the solution.',
          },
          {
            q: '[NEET] Hydrogen gas stored inside palladium metal is an example of which type of solution?',
            a: 'Gas in solid — a solid solution.',
          },
          {
            q: '[JEE Main] Classify: (i) sea water, (ii) bronze, (iii) a carbonated cold drink, (iv) tincture of iodine (iodine in alcohol).',
            a: 'Solid-in-liquid; solid-in-solid; gas-in-liquid; solid-in-liquid.',
          },
          {
            q: '[JEE Main] A mixture appears cloudy, scatters a torch beam, and slowly settles on standing. Is it a true solution? Justify.',
            a: 'No — light scattering and settling indicate a colloid/suspension, not a true solution.',
          },
          {
            q: '[JEE Advanced] Explain why, in a solution of a small amount of water in a large amount of ethanol, ethanol is regarded as the solvent, whereas in dilute aqueous ethanol, water is the solvent.',
            a: 'When both are liquids, the component in larger amount is taken as solvent; the role swaps with composition.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> a true solution?',
        opts: [
          { label: 'sugar in water', nudge: '<b>(a)</b> is a homogeneous true solution (liquid).' },
          { label: 'air', nudge: '<b>(b)</b> is a homogeneous true solution (gaseous).' },
          { label: 'muddy river water', nudge: null },
          { label: 'brass', nudge: '<b>(d)</b> is a homogeneous true solution (solid).' },
        ],
        correct: 2,
        solution: 'Muddy water is a <b>suspension</b> — large particles that settle and scatter light.',
      },
      {
        t: 'mcq',
        q: 'In a solution of iodine dissolved in carbon tetrachloride, the solvent is:',
        opts: [
          { label: 'iodine', nudge: '<b>(a)</b> reverses the roles.' },
          { label: 'carbon tetrachloride', nudge: null },
          { label: 'both', nudge: '<b>(c)</b> fails: here CCl<sub>4</sub> is the solvent and iodine the solute; they do not share the role.' },
          { label: 'neither', nudge: '<b>(d)</b> fails: every solution has a solvent; here it is the liquid CCl<sub>4</sub>.' },
        ],
        correct: 1,
        solution: 'CCl<sub>4</sub> is the liquid present in larger amount and sets the physical state → solvent; iodine (solid) is the solute.',
      },
      {
        t: 'mcq',
        q: 'A dental amalgam is best classified as:',
        opts: [
          { label: 'liquid in liquid', nudge: '<b>(a)</b> fails: the metal framework is solid, so the solvent is not a liquid.' },
          { label: 'liquid in solid', nudge: null },
          { label: 'solid in liquid', nudge: '<b>(c)</b> inverts which component is the framework.' },
          { label: 'gas in solid', nudge: '<b>(d)</b> fails: mercury, the solute, is a liquid; no gas is involved.' },
        ],
        correct: 1,
        solution: 'Mercury (liquid) dispersed within a solid metal matrix → liquid-in-solid (solid solution).',
      },
      {
        t: 'mcq',
        q: 'Which statement about solutions is correct?',
        opts: [
          { label: 'The solvent is always water.', nudge: '<b>(a)</b> is false (alloys, air have non-water solvents).' },
          {
            label: 'The solvent is always the component in the larger amount, even across different states.',
            nudge: '<b>(b)</b> is false — when states differ, the liquid (or solid framework) is taken as solvent regardless of amount.',
          },
          { label: 'The solvent determines the physical state of the solution.', nudge: null },
          { label: 'A solution can be heterogeneous.', nudge: '<b>(d)</b> is false — a solution is by definition homogeneous.' },
        ],
        correct: 2,
        solution: 'The solvent’s state fixes the solution’s state.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Assuming the solvent is always water (or always the liquid).</b> Air, brass, and amalgams have gas and solid solvents. Identify the framework/major component first.',
          '<b>Falling for “German silver” / “brass.”</b> German silver has no silver; brass and bronze are alloys = solid-in-solid solutions, not compounds.',
          '<b>Calling colloids or suspensions “solutions.”</b> If it scatters light or settles, it is not a true solution.',
          '<b>Mis-pairing states.</b> Always state solute-in-solvent in that order before naming the family.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> for any “type of solution” MCQ, lock the <b>solvent’s physical state</b> first (that names the family — solid/liquid/gaseous solution), then the solute’s state. Two quick reads, no calculation. Memorise the four classics: air = gas-gas, soda = gas-liquid, alloy = solid-solid, amalgam = liquid-solid.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Solution', note: 'homogeneous, single-phase mixture; particles < 1 nm.' },
          { f: 'Solvent = larger amount / sets physical state; solute = dissolved component. When states differ, the one that keeps its state is the solvent: usually the liquid; in an amalgam, the solid metal.', note: '' },
          {
            f: 'Nine types by (solute, solvent) state',
            note: 'anchor examples: air (gas-gas), soda water (gas-liquid), salt water (solid-liquid), H<sub>2</sub> in Pd (gas-solid), amalgam (liquid-solid), brass / German silver (solid-solid).',
          },
          { f: 'German silver = Cu + Zn + Ni (no silver); brass = Cu + Zn', note: 'both solid solutions.' },
          { f: 'True solution vs colloid vs suspension', note: '< 1 nm (clear) / 1–1000 nm (scatters light) / > 1000 nm (settles).' },
        ],
        aids: ['“name it by where it lives” — the solvent’s state names the solution family.'],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 13–18 ─────────────────────────
  {
    n: '02',
    title: 'Expressing the Concentration of Solutions',
    kalam: 'Mass-based measures are temperature-proof; volume-based ones are not.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the highest-yield numerical topics of the whole chapter. CBSE Boards ask a 2–3 mark concentration or interconversion numerical almost every year (the 68% HNO<sub>3</sub> and 10% glucose problems are perennial). NEET favours quick ppm / mole-fraction MCQs. JEE Main poses molarity↔molality interconversions using density. It is also the prerequisite: <b>molality</b> powers the boiling-point and freezing-point formulas and <b>mole fraction</b> powers Raoult’s and Henry’s laws.',
      },
      {
        t: 'p',
        html: 'Saying a cup of chai is “sweet” is useless to the next person making it — they need a number: how much sugar per how much chai. <b>Concentration</b> is exactly that number: a precise statement of how much solute sits in a given amount of solvent or solution. Chemists keep several different measures because different situations make different ones convenient — some are easy to weigh out, some are easy to pour, and some stay reliable when the temperature changes.',
      },
      {
        t: 'p',
        html: 'That last point hides the single most important idea in this topic. Measures built on <b>mass or moles</b> — mass percentage, mole fraction, and <b>molality</b> — never change when you heat or cool the solution, because mass and number of particles do not change with temperature. But a measure built on <b>volume</b> — <b>molarity</b> — does change with temperature, because liquids expand when heated, so the same moles now sit in a larger volume and the molarity drops. Mass-based measures are temperature-proof; volume-based ones are not.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine you define chai strength two ways. “Two spoons of sugar per 250 mL cup” is a volume recipe — on a hot day the chai expands a little, so the same two spoons sit in slightly more than 250 mL and the strength per cup shifts. “Two spoons per 200 g of milk” is a mass recipe — 200 g is 200 g whether hot or cold, so the strength is locked. Molarity is the first kind; molality, mole fraction and mass % are the second kind. That is why precise lab work that must survive temperature changes (like colligative-property measurements) is built on <b>molality</b>, not molarity.',
      },
      {
        t: 'p',
        html: 'The mole concept sits underneath all of this. Whether you express things as a fraction, a percentage, or a “per litre” figure, you are ultimately counting particles — and to count them from a measured mass you always go through the molar mass.',
      },
      {
        t: 'p',
        html: 'Each measure earns its place in practice. <b>Molarity</b> is the lab favourite because volumes are quick to dispense with a pipette or burette — but it must be quoted at a stated temperature. <b>Molality</b> is chosen wherever temperature must not interfere, which is precisely why the boiling-point and freezing-point formulas are written in molality. <b>Mole fraction</b> is the natural language of vapour pressure and gas laws (Raoult’s and Henry’s), since those depend on the fraction of molecules of each kind. <b>Mass percentage and ppm</b> dominate commercial and environmental labelling — concentrated sulphuric acid is sold as “98% w/w”, and water-quality limits for fluoride or lead are quoted in ppm. Picking the right measure for the situation is half the skill.',
      },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b><br>• <b>Molarity is temperature-dependent</b>; molality, mole fraction and mass % are temperature-independent. Quote temperature only where molarity is involved.<br>• Converting between a volume-based measure (molarity) and a mass-based one (molality, mass %) <b>requires the density</b> of the solution — you cannot do it without that bridge.<br>• Dilute-solution approximations (e.g. mole fraction of solute ≈ <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub>) hold only when the solute amount is small compared with the solvent.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Mass percentage (w/w)',
        main: 'mass % = (mass of solute)/(mass of solution) × 100',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Volume percentage (v/v)',
        main: 'vol % = (volume of solute)/(volume of solution) × 100',
        legend: [],
        note: null,
      },
      { t: 'def', term: 'Mass-by-volume percentage (w/v)', html: 'mass of solute (g) per 100 mL of solution.' },
      {
        t: 'formula',
        kicker: 'Parts per million (ppm)',
        main: 'for very dilute solutions:<br>ppm = (mass of solute)/(mass of solution) × 10<sup>6</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mole fraction',
        main: '<i>x</i><sub>A</sub> = <i>n</i><sub>A</sub>/(<i>n</i><sub>A</sub> + <i>n</i><sub>B</sub>)<br><i>x</i><sub>A</sub> + <i>x</i><sub>B</sub> = 1',
        legend: ['<i>x</i><sub>A</sub>, <i>x</i><sub>B</sub> = mole fractions of A and B', '<i>n</i><sub>A</sub>, <i>n</i><sub>B</sub> = moles of A and B'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Molarity (<i>M</i>)',
        main: '<i>M</i> = <i>n</i><sub>solute</sub>/(<i>V</i><sub>solution</sub> (in L))',
        legend: [
          '<i>M</i> = moles of solute per litre of <b>solution</b>',
          '<i>n</i><sub>solute</sub> = moles of solute',
          '<i>V</i><sub>solution</sub> = volume of solution',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Molality (<i>m</i>)',
        main: '<i>m</i> = <i>n</i><sub>solute</sub>/(<i>w</i><sub>solvent</sub> (in kg))',
        legend: [
          '<i>m</i> = moles of solute per kilogram of <b>solvent</b>',
          '<i>n</i><sub>solute</sub> = moles of solute',
          '<i>w</i><sub>solvent</sub> = mass of solvent',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Key interconversions',
        main: 'mass % → molarity: <i>M</i> = (10 × (mass %) × <i>d</i>)/<i>M</i><sub>2</sub><br>molarity → molality: <i>m</i> = (1000 <i>M</i>)/(1000 <i>d</i> − <i>M</i> <i>M</i><sub>2</sub>)<br>molality → mole fraction: <i>x</i><sub>solute</sub> = <i>m</i>/(<i>m</i> + 1000/<i>M</i><sub>1</sub>)<br>molality → molarity: <i>M</i> = (<i>m</i> <i>d</i> × 1000)/(1000 + <i>m</i> <i>M</i><sub>2</sub>)<br>mass % → molality: <i>m</i> = ((mass %) × 1000)/((100 − mass %) × <i>M</i><sub>2</sub>)',
        legend: [
          '<i>d</i> = solution density in g mL<sup>−1</sup>',
          '<i>M</i><sub>2</sub> = molar mass of solute',
          '<i>M</i><sub>1</sub> = molar mass of solvent',
          '<i>M</i> = molarity',
          '<i>m</i> = molality',
          '<i>x</i><sub>solute</sub> = mole fraction of solute',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Other useful measures.</b> Strength is grams of solute per litre of solution (g L<sup>−1</sup>), related to molarity by strength = <i>M</i> × <i>M</i><sub>2</sub>. ppm comes in three bases — mass/mass, mass/volume, and volume/volume — all multiplying the relevant fraction by 10<sup>6</sup>; for even more dilute systems (e.g. pollutants), parts per billion (ppb) uses 10<sup>9</sup>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Quantity', 'Symbol', 'SI / common Unit', 'Dimensional Formula', 'Temp-dependent?'],
        rows: [
          ['Molarity', '<i>M</i>', 'mol L<sup>−1</sup>', '[N L<sup>−3</sup>]', '<b>Yes</b>'],
          ['Molality', '<i>m</i>', 'mol kg<sup>−1</sup>', '[N M<sup>−1</sup>]', 'No'],
          ['Mole fraction', '<i>x</i>', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]', 'No'],
          ['Mass %', '—', 'dimensionless', '[M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]', 'No'],
        ],
      },
      {
        t: 'p',
        html: '(Normality — gram-equivalents of solute per litre of solution — is now de-emphasised in the rationalised syllabus and is included only for completeness.)',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Why molarity depends on temperature (the reasoning, not just the rule)',
        steps: [
          '<i>M</i> = <i>n</i><sub>solute</sub>/<i>V</i><sub>solution</sub>. The numerator (moles) is fixed.',
          'On heating, the solution <b>expands</b>, so <i>V</i><sub>solution</sub> increases.',
          'A larger denominator with a fixed numerator means <i>M</i> <b>decreases</b>. Hence molarity falls as temperature rises. Molality (<i>n</i>/mass) has no volume in it, so it is immune.',
        ],
      },
      { t: 'p', html: 'Start from the most convenient anchor — “in 100 g of solution”:' },
      {
        t: 'proc',
        title: 'The master interconversion chain (mass % + density → everything)',
        steps: [
          'From <b>mass %</b>, read off grams of solute and grams of solution directly (e.g. 20% ⇒ 20 g solute in 100 g solution; solvent = 80 g).',
          'Convert solute grams → moles using <i>M</i><sub>2</sub>.',
          'For <b>molarity</b>, find the solution’s volume from density: <i>V</i> = (mass of solution)/<i>d</i>, then <i>M</i> = moles/<i>V</i> (L).',
          'For <b>molality</b>, use solvent mass: <i>m</i> = moles/<i>w</i><sub>solvent</sub> (kg).',
          'For <b>mole fraction</b>, convert solvent grams → moles too and take the ratio.',
        ],
      },
      {
        t: 'p',
        html: '<b>Why density is the indispensable bridge.</b> Mass-based measures know nothing about volume, and molarity is all about volume. The only quantity that converts mass ↔ volume is <b>density</b> (<i>d</i> = mass/volume). Without it, molarity and molality simply cannot be related.',
      },
      {
        t: 'p',
        html: '<b>The master chain, worked symbolically.</b> Suppose a solution is <i>P</i>% (w/w), density <i>d</i> g mL<sup>−1</sup>, solute molar mass <i>M</i><sub>2</sub>, solvent molar mass <i>M</i><sub>1</sub>. Anchor on 100 g of solution:<br>• solute = <i>P</i> g = <i>P</i>/<i>M</i><sub>2</sub> mol; solvent = (100 − <i>P</i>) g.<br>• <b>molality</b> = (<i>P</i>/<i>M</i><sub>2</sub>)/((100 − <i>P</i>)/1000) = 1000<i>P</i>/((100 − <i>P</i>)<i>M</i><sub>2</sub>).<br>• volume of solution = 100/<i>d</i> mL = 100/(1000 <i>d</i>) L, so <b>molarity</b> = (<i>P</i>/<i>M</i><sub>2</sub>)/(100/(1000<i>d</i>)) = 10<i>Pd</i>/<i>M</i><sub>2</sub>.<br>• moles of solvent = (100 − <i>P</i>)/<i>M</i><sub>1</sub>, so <b>mole fraction of solute</b> = (<i>P</i>/<i>M</i><sub>2</sub>)/(<i>P</i>/<i>M</i><sub>2</sub> + (100 − <i>P</i>)/<i>M</i><sub>1</sub>).',
      },
      { t: 'p', html: 'Every interconversion formula above is just this one chain rearranged — memorise the chain, not the formulas.' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: '4.0 g of sodium hydroxide (NaOH, molar mass 40 g mol<sup>−1</sup>) is dissolved in water to make 200 mL of solution. Calculate the molarity.',
        steps: [
          'Moles of NaOH = 4.0/40 = 0.10 mol. Volume of solution = 200 mL = 0.200 L.',
          '<i>M</i> = <i>n</i>/<i>V</i> = 0.10/0.200 =',
        ],
        ans: '0.50 mol L<sup>−1</sup>',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: '36 g of glucose (molar mass 180 g mol<sup>−1</sup>) is dissolved in 162 g of water (molar mass 18 g mol<sup>−1</sup>). The mole fraction of glucose is approximately:<br>(a) 0.18 (b) 0.022 (c) 0.10 (d) 0.20',
        steps: [
          '<b>Speed approach.</b> The trap is to use masses in the ratio. Mole fraction needs <b>moles</b>. Glucose: 36/180 = 0.20 mol; water: 162/18 = 9.0 mol.<br><i>x</i><sub>glucose</sub> = 0.20/(0.20 + 9.0) = 0.20/9.2 ≈ 0.022',
          'Option (a), 0.18, is the mass-ratio trap (36/198); option (d), 0.20, is the moles of glucose, not a fraction. Discard both on sight.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A 15% (w/w) aqueous solution of urea (molar mass 60 g mol<sup>−1</sup>) has a density of 1.05 g mL<sup>−1</sup>. Calculate (i) its molarity and (ii) its molality.',
        steps: [
          'This links mass % with both volume- and mass-based measures — anchor on 100 g of solution.',
          'In 100 g solution: urea = 15 g = 15/60 = 0.25 mol; water = 85 g = 0.085 kg.',
          '(i) Volume of solution = (100 g)/(1.05 g mL<sup>−1</sup>) = 95.24 mL = 0.09524 L.<br><i>M</i> = 0.25/0.09524',
          '(ii) Molality uses solvent mass:<br><i>m</i> = 0.25/0.085',
          'Note molality > molarity here — typical for aqueous solutions, since the solvent mass (0.085 kg) is smaller in number than the solution volume (0.095 L).',
        ],
        ans: '(i) <i>M</i> ≈ 2.63 mol L<sup>−1</sup> (2.6 to two significant figures); (ii) <i>m</i> ≈ 2.94 mol kg<sup>−1</sup> (2.9 to two significant figures)',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Concentrated sulphuric acid is 98% (w/w) with density 1.84 g mL<sup>−1</sup> (H<sub>2</sub>SO<sub>4</sub> molar mass 98 g mol<sup>−1</sup>). (i) Find its molarity. (ii) What volume of this concentrated acid is required to prepare 1.0 L of 0.50 M sulphuric acid?',
        steps: [
          'The key insight: compute the stock molarity from mass % + density, then use the dilution relation <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub> (here <i>M</i><sub>1</sub>, <i>M</i><sub>2</sub> are the molarities before and after dilution, not molar masses).',
          '(i) Using <i>M</i> = (10 × (mass %) × <i>d</i>)/<i>M</i><sub>2</sub>:<br><i>M</i> = (10 × 98 × 1.84)/98 = 10 × 1.84',
          '(ii) Dilution (moles of acid conserved): <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub><br>18.4 × <i>V</i><sub>1</sub> = 0.50 × 1000 mL ⇒ <i>V</i><sub>1</sub> = 500/18.4',
          'So about 27 mL of concentrated acid, carefully added to water and made up to 1 L, gives the required solution. (Always acid into water, never the reverse.)',
        ],
        ans: '(i) <i>M</i> = 18.4 mol L<sup>−1</sup>; (ii) <i>V</i><sub>1</sub> ≈ 27.2 mL',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Define molarity and molality, and state which of the two changes with temperature and why.',
            a: 'Molarity is moles of solute per litre of solution; molality is moles of solute per kilogram of solvent. Molarity changes with temperature: on heating the solution expands, so the same moles sit in a larger volume and molarity falls. Molality has no volume in it, so it does not change.',
          },
          {
            q: '[NEET] Calculate the ppm of a solute when 2 mg of it is dissolved in 1 kg of solution.',
            a: '2 ppm.',
          },
          {
            q: '[JEE Main] A 10% (w/w) aqueous solution of cane sugar (molar mass 342 g mol<sup>−1</sup>) has density 1.04 g mL<sup>−1</sup>. Find its molarity.',
            a: '≈ 0.304 mol L<sup>−1</sup> (0.30 to two significant figures).',
          },
          {
            q: '[JEE Main] Find the molality of a solution containing 0.5 mol of solute in 250 g of solvent.',
            a: '2.0 mol kg<sup>−1</sup>.',
          },
          {
            q: '[JEE Advanced] A solution is 2.0 m in a non-volatile solute and has a density of 1.10 g mL<sup>−1</sup>; the solute’s molar mass is 60 g mol<sup>−1</sup>. Calculate its molarity.',
            a: '≈ 1.96 mol L<sup>−1</sup> (2.0 to two significant figures); use <i>m</i> = (1000 <i>M</i>)/(1000 <i>d</i> − <i>M</i> <i>M</i><sub>2</sub>) rearranged, or build from 1 kg solvent.',
          },
          {
            q: '[JEE Main] Commercial concentrated hydrochloric acid is 37% (w/w) with density 1.19 g mL<sup>−1</sup> (HCl molar mass 36.5 g mol<sup>−1</sup>). Find its molarity.',
            a: '≈ 12.1 mol L<sup>−1</sup> (12 to two significant figures).',
          },
          {
            q: '[JEE Advanced] A 20% (w/w) aqueous solution of a solute (molar mass 40 g mol<sup>−1</sup>) is given. Find the mole fraction of the solute.',
            a: '≈ 0.101 (0.10 to two significant figures); in 100 g, solute = 0.5 mol, water = 80/18 = 4.44 mol.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which concentration term is <b>independent</b> of temperature?',
        opts: [
          {
            label: 'molarity',
            nudge: '<b>(a)</b> involves volume, which expands with temperature. Choosing it is the classic error.',
          },
          { label: 'molality', nudge: null },
          { label: 'mass/volume %', nudge: '<b>(c)</b> involves volume, which expands with temperature.' },
          { label: 'normality', nudge: '<b>(d)</b> involves volume, which expands with temperature.' },
        ],
        correct: 1,
        solution: 'Molality is moles per kg of solvent — no volume, so temperature cannot change it.',
      },
      {
        t: 'mcq',
        q: 'Molality is defined as moles of solute per:',
        opts: [
          { label: 'litre of solution', nudge: '<b>(a)</b> is molarity (and uses solution, not solvent).' },
          { label: 'litre of solvent', nudge: '<b>(b)</b> fails: molality counts the solvent by mass, in kilograms, not by volume.' },
          { label: 'kilogram of solvent', nudge: null },
          { label: 'kilogram of solution', nudge: '<b>(d)</b> uses solution mass — a frequent slip.' },
        ],
        correct: 2,
        solution: 'Per <b>kilogram of solvent</b>.',
      },
      {
        t: 'mcq',
        q: 'To convert molarity into molality, you additionally need:',
        opts: [
          { label: 'the temperature', nudge: '<b>(a)</b> fails: temperature alone does not link volume to mass; density does.' },
          { label: 'the density of the solution', nudge: null },
          { label: 'the boiling point', nudge: '<b>(c)</b> fails: the boiling point plays no part in converting one concentration measure into another.' },
          { label: 'nothing else', nudge: '<b>(d)</b> ignores that the two measures live in different “currencies” (volume vs mass).' },
        ],
        correct: 1,
        solution: 'Density bridges the solution’s volume (molarity) and its mass (molality). The solute’s molar mass is also used, to turn its moles into grams, but of these options only density is needed.',
      },
      {
        t: 'mcq',
        q: 'A 0.1 mole-fraction solute solution is prepared. Which statement is true?',
        opts: [
          { label: 'The mole fractions of solute and solvent sum to more than 1.', nudge: '<b>(a)</b> violates <i>x</i><sub>A</sub> + <i>x</i><sub>B</sub> = 1.' },
          { label: 'The solvent mole fraction is 0.9.', nudge: null },
          { label: 'Mole fraction has units of mol L<sup>−1</sup>.', nudge: '<b>(c)</b> mole fraction is dimensionless.' },
          { label: 'Mole fraction depends on temperature.', nudge: '<b>(d)</b> it is mass/mole-based, hence temperature-independent.' },
        ],
        correct: 1,
        solution: 'Mole fractions sum to 1, so <i>x</i><sub>solvent</sub> = 1 − 0.1 = 0.9.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking molarity is temperature-proof.</b> It is not — volume expands, so molarity falls on heating. Only mass/mole-based measures are temperature-independent.',
          '<b>Solvent vs solution.</b> Molality uses mass of <b>solvent</b>; molarity uses volume of <b>solution</b>; mass % uses mass of <b>solution</b>. Write down which one before substituting.',
          '<b>Forgetting density.</b> Any molarity↔molality (or %↔molarity) conversion needs the density.',
          '<b>Mole fraction from masses.</b> Always convert to moles first; never ratio raw masses.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed):</b> for any interconversion, <b>anchor on “100 g of solution”</b> when given mass % — solute grams, solvent grams, and (via density) volume all fall out immediately. For dilution problems, skip re-deriving anything and use <i>M</i><sub>1</sub><i>V</i><sub>1</sub> = <i>M</i><sub>2</sub><i>V</i><sub>2</sub> (molarities before and after dilution).',
      },
      {
        t: 'protip',
        html: '<b>Sanity check:</b> for dilute aqueous solutions, molality and molarity are numerically close (both near the same value) because 1 L of dilute solution ≈ 1 kg of water; a large gap between them signals an arithmetic slip.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Mass % = (mass solute)/(mass solution) × 100; ppm = (mass solute)/(mass solution) × 10<sup>6</sup>.', note: '' },
          { f: 'Mole fraction <i>x</i><sub>A</sub> = <i>n</i><sub>A</sub>/(<i>n</i><sub>A</sub> + <i>n</i><sub>B</sub>), ∑ <i>x</i> = 1 (use moles, not masses).', note: '' },
          { f: 'Molarity <i>M</i> = (mol solute)/(L solution)', note: '<b>temperature-dependent</b>.' },
          { f: 'Molality <i>m</i> = (mol solute)/(kg solvent)', note: '<b>temperature-independent</b>.' },
          {
            f: 'Interconvert',
            note: '<i>M</i> = (10 (mass%) <i>d</i>)/<i>M</i><sub>2</sub>; <i>m</i> = (1000 <i>M</i>)/(1000 <i>d</i> − <i>M</i> <i>M</i><sub>2</sub>) — <b>density is the bridge</b>.',
          },
          {
            f: 'Feeds forward',
            note: 'molality → boiling-point elevation and freezing-point depression (Topic 05); mole fraction → Raoult’s & Henry’s laws (Topics 04 and 03).',
          },
        ],
        aids: ['“<b>m</b>olality = <b>m</b>ass of solvent (temp-proof); <b>M</b>olarity = volu<b>M</b>e of solution (temp-shy).”'],
      },
    ],
  },
];
