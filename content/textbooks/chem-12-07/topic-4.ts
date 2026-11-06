import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topic 04, Some Commercially Important Alcohols: pp. 340–343 of the
 * Class 12 Chemistry Master Reference, word for word. It has no "Section N:"
 * numbering, so its parts are its own headings: Overview, Methanol, Ethanol,
 * Grades and Special Forms of Ethanol, Worked Examples, Crack the MCQ, Common
 * Student Pitfalls & Pro-Tips, Cheat Sheet Box. No figure, and no practice
 * exercises in the book.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 340–343 ─────────────────────────
  {
    n: '04',
    title: 'Some Commercially Important Alcohols',
    kalam: 'Of all the alcohols, two matter most to industry and daily life: methanol (CH₃OH) and ethanol (C₂H₅OH).',
    blocks: [
      { t: 'part', title: 'Overview' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A small but reliable mark-earner. CBSE Boards ask 1–2 mark questions on the fermentation of sugar to ethanol, on what denatured/power alcohol is, and on why methanol is poisonous. NEET occasionally tests “wood spirit,” the enzymes invertase/zymase, or methanol toxicity in a one-line MCQ. JEE rarely asks it directly, but the syngas route to methanol and the rectified/absolute-alcohol distinction occasionally appear. It is pure recall, so a few clean facts lock the marks.',
      },
      {
        t: 'p',
        html: 'Of all the alcohols, two matter most to industry and daily life: <b>methanol</b> (CH<sub>3</sub>OH) and <b>ethanol</b> (C<sub>2</sub>H<sub>5</sub>OH). They sit at the top of the homologous series, are made on a massive scale, and could hardly be more different in their effect on the human body — ethanol is the alcohol of beverages, while a small dose of methanol can blind or kill. This topic is about how each is manufactured, what it is used for, and the special forms of ethanol (rectified spirit, absolute alcohol, denatured alcohol, power alcohol) that exam questions love.',
      },

      { t: 'part', title: 'Methanol (CH₃OH)' },
      {
        t: 'p',
        html: '<b>Names.</b> Methanol is also called <b>methyl alcohol</b> or <b>“wood spirit,”</b> the last name a relic of its original manufacture by the <b>destructive distillation of wood</b>.',
      },
      {
        t: 'p',
        html: '<b>Modern preparation.</b> Industrially, methanol is now made by the <b>catalytic hydrogenation of carbon monoxide</b> (from water gas / syngas):',
      },
      {
        t: 'formula',
        kicker: 'Catalytic hydrogenation of carbon monoxide',
        main: 'CO + 2H<sub>2</sub> →<sup>ZnO–Cr₂O₃</sup> CH<sub>3</sub>OH<br>(573–673 K, 200–300 atm)',
        legend: [
          'CO = carbon monoxide',
          'H<sub>2</sub> = hydrogen',
          'ZnO–Cr<sub>2</sub>O<sub>3</sub> = zinc oxide–chromium oxide catalyst',
          'CH<sub>3</sub>OH = methanol',
          '573–673 K = temperature',
          '200–300 atm = pressure',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'The zinc oxide–chromium oxide catalyst, high pressure, and moderate temperature give a clean, high-yield process.',
      },
      {
        t: 'p',
        html: '<b>Physical nature.</b> A colourless, volatile liquid (b.p. ≈ 337 K), completely miscible with water.',
      },
      {
        t: 'p',
        html: '<b>Uses.</b> As a <b>solvent</b> for paints, varnishes, and shellac; as an <b>antifreeze</b> in radiators; as a <b>fuel</b> and fuel additive; and as a feedstock for making <b>formaldehyde</b> (and hence plastics).',
      },
      {
        t: 'p',
        html: '<b>Toxicity — the exam point.</b> Methanol is highly poisonous. Inside the body it is oxidised to <b>formaldehyde and then formic acid</b>, which attack the <b>optic nerve and retina</b> — even a small ingested quantity can cause <b>blindness</b>, and a larger dose is <b>fatal</b>. This is exactly why ethanol meant for industry is “denatured” with methanol (below): to make it undrinkable. The antidote, dilute ethanol given intravenously, is in Additional topic G.',
      },

      { t: 'part', title: 'Ethanol (C₂H₅OH)' },
      {
        t: 'p',
        html: '<b>Names.</b> Ethanol is also called <b>ethyl alcohol</b> or <b>“grain alcohol”</b> — and it is the “alcohol” of all alcoholic drinks.',
      },
      {
        t: 'p',
        html: '<b>Preparation 1 — fermentation (the classic route).</b> Ethanol is obtained on a large scale by the <b>fermentation of sugars</b> present in molasses (cane sugar) or in starchy grains. Yeast supplies the enzymes that do the work in two steps: (Starch from grains is first broken down to sugars by other enzymes, diastase and maltase; the two steps below start from cane sugar, sucrose.)<br>• <b>Invertase</b> hydrolyses sucrose to glucose and fructose:',
      },
      {
        t: 'formula',
        kicker: 'Fermentation step 1 (invertase)',
        main: 'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O →<sup>invertase</sup> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>',
        legend: [
          'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> = sucrose',
          'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = glucose and fructose, one of each (isomers)',
        ],
        note: null,
      },
      {
        t: 'p',
        html: '• <b>Zymase</b> then converts the hexose sugar to ethanol and carbon dioxide:',
      },
      {
        t: 'formula',
        kicker: 'Fermentation step 2 (zymase)',
        main: 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> →<sup>zymase</sup> 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub>',
        legend: [
          'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = hexose sugar',
          'C<sub>2</sub>H<sub>5</sub>OH = ethanol',
          'CO<sub>2</sub> = carbon dioxide',
        ],
        note: null,
      },
      {
        t: 'p',
        html: 'Fermentation is carried out in the <b>near-absence of air</b> (anaerobic) at about <b>303 K</b>; if air is admitted, the ethanol is instead oxidised to ethanoic acid (vinegar).',
      },
      {
        t: 'p',
        html: '<b>Preparation 2 — industrial hydration of ethene.</b> Ethanol is also made by the <b>acid-catalysed hydration of ethene</b> (the addition of water across the double bond, as in Topic 01’s acid-catalysed hydration; ethene is symmetrical, so Markovnikov’s rule has no choice to make here) — the dominant petrochemical route.',
      },
      {
        t: 'p',
        html: '<b>Physical nature.</b> A colourless liquid (b.p. ≈ 351 K), miscible with water in all proportions; it boils higher than its isomeric ether because of hydrogen bonding.',
      },
      {
        t: 'p',
        html: '<b>Uses.</b> In <b>alcoholic beverages</b>; as a <b>solvent</b> in pharmacy, perfumery, and industry; as an <b>antiseptic</b> (about 70% ethanol is most effective for disinfecting skin); as a <b>fuel</b> (blended with petrol — see power alcohol); and as a starting material for many organic chemicals.',
      },
      {
        t: 'p',
        html: '<b>Physiological action.</b> Ethanol is a <b>central-nervous-system depressant</b>. In moderate amounts it causes the familiar intoxication; in excess it impairs judgement and coordination and can be dangerous. Unlike methanol, ordinary ethanol is not acutely poisonous in small quantities — but ethanol contaminated with methanol (illicit liquor) is deadly.',
      },

      { t: 'part', title: 'Grades and special forms of ethanol' },
      {
        t: 'p',
        html: 'These four terms are frequently confused and frequently tested — keep them distinct:',
      },
      {
        t: 'def',
        term: 'Rectified spirit',
        html: 'the <b>~95.5% ethanol / 4.5% water</b> mixture (by mass) obtained by fractional distillation of fermented liquor. It cannot be concentrated further by ordinary distillation because it forms a <b>constant-boiling (azeotropic) mixture</b> with water. (Measured exactly, the azeotrope is 95.6% ethanol by mass, about 97% by volume; the Solutions chapter gives NCERT’s rounded “about 95% by volume”. Exam questions use 95.5% or 95%.)',
      },
      {
        t: 'def',
        term: 'Absolute alcohol',
        html: 'essentially <b>100% ethanol</b>, made by removing the residual water from rectified spirit, e.g. by treatment with <b>quicklime (CaO)</b> or by <b>azeotropic distillation with benzene</b>.',
      },
      {
        t: 'def',
        term: 'Denatured alcohol (methylated spirit)',
        html: 'ethanol made <b>unfit for drinking</b> by adding poisonous/foul substances such as <b>methanol</b>, with <b>pyridine</b> and a <b>dye</b> (often a blue or purple colour) to mark it. It is denatured so that industrial ethanol can be sold cheaply without the heavy excise duty levied on drinkable alcohol, while deterring its misuse as a beverage. NCERT’s own sentence names <b>copper sulphate</b> (to give it a colour) and <b>pyridine</b> (a foul-smelling liquid); the exam-safe answer is colour (copper sulphate or a dye), foul smell (pyridine) and poison (methanol).',
      },
      {
        t: 'def',
        term: 'Power alcohol',
        html: 'ethanol <b>blended with petrol</b> (typically with a small percentage of benzene as a co-solvent) and used as a motor fuel. Modern petrol–ethanol blends (“gasohol”) are the same idea: ethanol stretches the fuel supply and raises the octane rating.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board',
        q: 'Write the two enzyme-catalysed steps in the fermentation of cane sugar to ethanol, naming the enzyme in each.',
        steps: [
          '<b>Step 1 (invertase):</b> C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (sucrose → glucose + fructose).',
          '<b>Step 2 (zymase):</b> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> (hexose → ethanol + carbon dioxide). Fermentation is anaerobic, ~303 K.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Which statement is correct: (i) wood spirit is ethanol; (ii) methanol causes blindness; (iii) absolute alcohol is 95.5% ethanol?',
        steps: [
          '“Wood spirit” is <b>methanol</b>, not ethanol, so (i) is false. 95.5% ethanol is <b>rectified spirit</b>, not absolute alcohol (which is ~100%), so (iii) is false. Methanol’s oxidation to formic acid damages the optic nerve, so (ii) is true.',
        ],
        ans: 'Only <b>(ii)</b> is correct.',
      },
      {
        t: 'ex',
        tag: 'JEE Main',
        q: 'Why can rectified spirit not be converted to absolute alcohol by simple fractional distillation, and how is the conversion actually achieved?',
        steps: [
          'Ethanol and water form a <b>constant-boiling azeotrope at ~95.5% ethanol</b>, so distillation cannot enrich the mixture past that composition (the vapour has the same composition as the liquid at the azeotrope).',
          'The water is therefore removed <b>chemically or azeotropically</b> — e.g. by refluxing over <b>quicklime (CaO)</b> and distilling, or by <b>azeotropic distillation with benzene</b>, to give absolute (≈100%) alcohol.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The catalyst used in the industrial preparation of methanol from carbon monoxide and hydrogen is:',
        opts: [
          { label: 'Ni', nudge: '<b>(a)</b> Ni is for hydrogenation of unsaturation.' },
          { label: 'ZnO–Cr<sub>2</sub>O<sub>3</sub>', nudge: null },
          { label: 'anhydrous AlCl<sub>3</sub>', nudge: '<b>(c)</b> AlCl<sub>3</sub> is a Friedel–Crafts catalyst.' },
          { label: 'V<sub>2</sub>O<sub>5</sub>', nudge: '<b>(d)</b> V<sub>2</sub>O<sub>5</sub> is the contact-process (SO<sub>2</sub> → SO<sub>3</sub>) catalyst.' },
        ],
        correct: 1,
        solution: 'The CO + 2H<sub>2</sub> → CH<sub>3</sub>OH process runs over a <b>ZnO–Cr<sub>2</sub>O<sub>3</sub></b> catalyst at high pressure.',
      },
      {
        t: 'mcq',
        q: 'Denatured alcohol is ethanol made unfit for drinking by adding:',
        opts: [
          { label: 'common salt', nudge: '<b>(a)</b> would not render it poisonous or undrinkable in the intended sense.' },
          { label: 'sugar', nudge: '<b>(b)</b> would not render it poisonous or undrinkable in the intended sense.' },
          { label: 'methanol and pyridine', nudge: null },
          { label: 'acetic acid', nudge: '<b>(d)</b> would not render it poisonous or undrinkable in the intended sense.' },
        ],
        correct: 2,
        solution: 'Methanol (poisonous) plus pyridine and a dye denature ethanol so it can be sold for industry without the excise duty on drinkable alcohol, and is not drunk. NCERT’s recipe is copper sulphate and pyridine; if an option names those, it is the answer.',
      },
      {
        t: 'mcq',
        q: '“Power alcohol” refers to:',
        opts: [
          { label: 'absolute alcohol', nudge: '<b>(a)</b> is ~100% ethanol — not a fuel blend.' },
          { label: 'rectified spirit', nudge: '<b>(b)</b> is the 95.5% azeotrope — not a fuel blend.' },
          { label: 'ethanol blended with petrol as fuel', nudge: null },
          { label: '70% ethanol used as antiseptic', nudge: '<b>(d)</b> is the antiseptic concentration — not a fuel blend.' },
        ],
        correct: 2,
        solution: 'Power alcohol is the petrol–ethanol motor-fuel blend.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Calling “wood spirit” ethanol.</b> Wood spirit is <b>methanol</b> (from destructive distillation of wood).',
          '<b>Confusing rectified spirit with absolute alcohol.</b> Rectified spirit is the <b>95.5%</b> azeotrope; absolute alcohol is <b>~100%</b>.',
          '<b>Thinking absolute alcohol is reachable by ordinary distillation.</b> The ethanol–water azeotrope blocks it; you need CaO or benzene azeotropic distillation.',
          '<b>Mixing up the two fermentation enzymes.</b> Invertase splits sucrose; zymase makes ethanol.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (recall).</b> Anchor each fact to a one-word hook: wood → methanol, grain → ethanol, 95.5% → rectified, 100% → absolute, poison-added → denatured, petrol-blend → power. For toxicity, remember methanol is oxidised to <b>formic acid → optic-nerve damage → blindness</b>.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Methanol (wood spirit)',
            note: 'CO + 2H<sub>2</sub> → CH<sub>3</sub>OH (ZnO–Cr<sub>2</sub>O<sub>3</sub>, high P); solvent, fuel, antifreeze, formaldehyde feedstock; poisonous → blindness (oxidised to formic acid).',
          },
          {
            f: 'Ethanol (grain alcohol)',
            note: 'fermentation — sucrose →<sup>invertase</sup> glucose + fructose; each hexose →<sup>zymase</sup> 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> (anaerobic, ~303 K); also acid hydration of ethene; CNS depressant.',
          },
          { f: 'Rectified spirit', note: '~95.5% ethanol, the azeotrope with water.' },
          { f: 'Absolute alcohol', note: '~100% ethanol; the water is removed with CaO, or by azeotropic distillation with benzene.' },
          { f: 'Denatured alcohol', note: 'ethanol + methanol + pyridine + dye or copper sulphate (undrinkable; free of the duty on drinkable alcohol).' },
          { f: 'Power alcohol', note: 'ethanol–petrol fuel blend (gasohol).' },
        ],
        aids: ['wood/grain, 95.5/100, poison/petrol — six terms, three contrasting pairs.'],
      },
    ],
  },
];
