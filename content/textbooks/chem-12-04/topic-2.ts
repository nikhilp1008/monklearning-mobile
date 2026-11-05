import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 4, Topic 02, Potassium Dichromate & Potassium Permanganate: pp. 157–164
 * of the Class 12 Chemistry Master Reference, word for word, split at its
 * Sections 1 to 8. Figure 4.2 (caption first on p. 158, drawn p. 159) is placed
 * after the "Structures" list; it is redrawn in lib/diagrams/chemistry-12-04.ts.
 * The book's "previous subtopic" is "Topic 01" here. The neutral permanganate
 * couple in Procedure C is the errata's (+0.59 V), which the page already shows.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 02 · pp. 157–164 ─────────────────────────
  {
    n: '02',
    title: 'Potassium Dichromate (K₂Cr₂O₇) & Potassium Permanganate (KMnO₄)',
    kalam: 'A metal stuck at its top oxidation state has nowhere to go but down: it is “maximally hungry” for electrons.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Among the highest-yield topics in the chapter. CBSE Boards almost always carry a 3–5 mark question on preparation or on writing ionic equations for oxidising action. NEET favours colour-change and pH-dependent-product MCQs. JEE Main/Advanced lean on equivalent-mass (n-factor) reasoning and on balancing redox equations across different media.',
      },
      {
        t: 'p',
        html: 'Every Indian household first-aid box has a little bottle of lal dawai — the dark-purple crystals of <b>potassium permanganate</b> used to disinfect water and wash vegetables. And if you have ever seen old footage of a traffic policeman’s breathalyser, the orange tube that turned green was <b>potassium dichromate</b> at work. These two salts are the celebrity oxidising agents of inorganic chemistry, and understanding why they are such aggressive electron-grabbers is the whole game.',
      },
      {
        t: 'p',
        html: 'Recall from Topic 01 that a transition metal’s <b>highest oxidation state usually equals its group number</b>. Chromium sits in group 6 and manganese in group 7 — so in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> the chromium is at its absolute maximum, +6, and in KMnO<sub>4</sub> the manganese is at its maximum, +7. A metal stuck at its top oxidation state has nowhere to go but down: it is “maximally hungry” for electrons. That hunger is exactly what an oxidising agent is — a species desperate to grab electrons from something else, getting <b>reduced</b> in the process while oxidising its victim.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine a strict exam invigilator (the oxidising agent) who confiscates phones (electrons) from students (the reducing agents). Cr<sup>+6</sup> confiscates and settles down comfortably at Cr<sup>+3</sup> — and as it does, the solution swings from <b>orange to green</b>. Mn<sup>+7</sup> confiscates and, in acidic surroundings, drops all the way to nearly colourless Mn<sup>+2</sup> — the <b>purple simply vanishes</b>. The colour change is the redox reaction made visible, which is why KMnO<sub>4</sub> can act as its own indicator in titrations: the moment there is no reductant left, the next drop leaves a lasting pink.',
      },
      {
        t: 'p',
        html: 'There is a deeper subtlety. How far manganese falls depends on the <b>medium</b>. In strong acid it grabs 5 electrons and lands at Mn<sup>2+</sup>; in neutral or faintly alkaline solution it grabs only 3 and stops at brown MnO<sub>2</sub>; in strongly alkaline solution it grabs just 1 and rests at green MnO<sub>4</sub><sup>2−</sup>. Same invigilator, different rulebook depending on the room.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• <b>Choice of acid matters.</b> You must acidify KMnO<sub>4</sub> with dilute sulphuric acid, never with HCl. HCl is itself oxidisable: permanganate would waste itself oxidising Cl<sup>−</sup> to Cl<sub>2</sub>, corrupting any quantitative result.<br>• <b>Stability differs sharply.</b> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is stable, can be weighed accurately, and is a <b>primary standard</b>. KMnO<sub>4</sub> slowly decomposes (light-sensitive), cannot be weighed for direct standard use, and is therefore a <b>secondary standard</b> that must be standardised before titration.<br>• <b>Kinetics, not just thermodynamics.</b> A favourable electrode potential does not guarantee a fast reaction — e.g., permanganate should oxidise water but does so immeasurably slowly unless warmed or catalysed.<br>• <b>Which oxidant, and when?</b> Permanganate is the stronger oxidant (<i>E</i>° = +1.51 V against dichromate’s +1.33 V) and conveniently acts as its own indicator, so it suits many titrations. Yet for the most accurate work chemists often reach for dichromate instead: it can be weighed directly as a primary standard, its solutions keep indefinitely, and — unlike permanganate — it tolerates hydrochloric acid, since its lower potential does not appreciably oxidise chloride. The “better” reagent therefore depends on whether you prize raw oxidising strength or analytical reliability.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: '<b>Oxidation states.</b> In K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, Cr = +6; in KMnO<sub>4</sub>, Mn = +7. Both are the respective group-number maxima.',
      },
      {
        t: 'p',
        html: '<b>Structures.</b><br>• <b>Chromate</b>, CrO<sub>4</sub><sup>2−</sup>: a single regular <b>tetrahedron</b>.<br>• <b>Dichromate</b>, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>: <b>two CrO<sub>4</sub> tetrahedra sharing one corner oxygen</b>, with a bent Cr–O–Cr bridge of about 126°.<br>• <b>Manganate</b> (MnO<sub>4</sub><sup>2−</sup>) and <b>permanganate</b> (MnO<sub>4</sub><sup>−</sup>): both <b>tetrahedral</b>; the π-bonding arises from overlap of oxygen p-orbitals with manganese d-orbitals.',
      },
      { t: 'fig', id: 'c12-04-fig-4.2' },
      {
        t: 'defgrid',
        title: 'Colours (memorise — most MCQs hinge on these)',
        rows: [
          { k: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>', v: 'orange' },
          { k: 'CrO<sub>4</sub><sup>2−</sup>', v: 'yellow' },
          { k: 'Cr<sup>3+</sup>', v: 'green as formed here (the pure aqua ion is violet)' },
          { k: 'MnO<sub>4</sub><sup>−</sup>', v: 'purple' },
          { k: 'MnO<sub>4</sub><sup>2−</sup>', v: 'green' },
          { k: 'Mn<sup>2+</sup>', v: 'very pale pink, nearly colourless when dilute' },
          { k: 'MnO<sub>2</sub>', v: 'brown' },
        ],
      },
      {
        t: 'p',
        html: '<b>Magnetism & the colour origin.</b> Manganate MnO<sub>4</sub><sup>2−</sup> has Mn as d<sup>1</sup> → one unpaired electron → <b>paramagnetic</b>. Permanganate MnO<sub>4</sub><sup>−</sup> has Mn as d<sup>0</sup> → <b>diamagnetic</b>. Crucially, since permanganate is d<sup>0</sup>, its intense colour <b>cannot</b> come from a d–d transition (there are no d-electrons to promote) — it arises from a <b>ligand-to-metal charge-transfer (LMCT)</b> band, oxygen → manganese. The same is true for CrO<sub>4</sub><sup>2−</sup>/Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> (Cr is d<sup>0</sup>).',
      },
      {
        t: 'formula',
        kicker: 'Standard reduction potentials (acidic medium)',
        main: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>/Cr<sup>3+</sup>: <i>E</i>° = +1.33 V<br>MnO<sub>4</sub><sup>−</sup>/Mn<sup>2+</sup>: <i>E</i>° = +1.51 V',
        legend: ['<i>E</i>° = standard reduction potential'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Equivalent mass (n-factor) — the workhorse of JEE numericals',
        main: 'Eq. mass = (Molar mass)/<i>n</i>',
        legend: ['Eq. mass = equivalent mass', '<i>n</i> = electrons gained per formula unit'],
        note: null,
      },
      {
        t: 'p',
        html: '• K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (acidic, <i>n</i> = 6): 294/6 = 49.<br>• KMnO<sub>4</sub> (acidic, <i>n</i> = 5): 158/5 = 31.6; (neutral/faintly alkaline, <i>n</i> = 3): 158/3 = 52.7; (strongly alkaline, <i>n</i> = 1): 158.',
      },
      {
        t: 'p',
        html: '<b>Thermal decomposition.</b> Both salts release O<sub>2</sub> on strong heating:<br>2 KMnO<sub>4</sub> →<sup>~513 K</sup> K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub><br>4 K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> →<sup>Δ</sup> 4 K<sub>2</sub>CrO<sub>4</sub> + 2 Cr<sub>2</sub>O<sub>3</sub> + 3 O<sub>2</sub><br>Permanganate’s ready decomposition (accelerated by light) is precisely why it fails as a primary standard.',
      },
      {
        t: 'p',
        html: '<b>Laboratory preparation of KMnO<sub>4</sub>.</b> A manganese(II) salt is oxidised by peroxodisulphate:<br>2 Mn<sup>2+</sup> + 5 S<sub>2</sub>O<sub>8</sub><sup>2−</sup> + 8 H<sub>2</sub>O → 2 MnO<sub>4</sub><sup>−</sup> + 10 SO<sub>4</sub><sup>2−</sup> + 16 H<sup>+</sup>',
      },
      {
        t: 'p',
        html: '<b>Action of concentrated H<sub>2</sub>SO<sub>4</sub> on dichromate.</b> Cold concentrated acid precipitates red chromium(VI) oxide (chromic anhydride):<br>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 2 H<sub>2</sub>SO<sub>4</sub>(conc.) → 2 CrO<sub>3</sub> + 2 KHSO<sub>4</sub> + H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: '<b>Uses.</b> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>: volumetric primary standard (estimating Fe<sup>2+</sup>, iodides, tin(II)), chrome tanning of leather, dyeing and calico printing, manufacture of chrome pigments (chrome yellow, chrome red), chromic-acid glassware cleaner, and the classic breath-alcohol test. KMnO<sub>4</sub>: oxidant in preparative organic chemistry, volumetric estimation of Fe<sup>2+</sup>/oxalate/H<sub>2</sub>O<sub>2</sub>, bleaching of wool, cotton and silk, decolourising oils, and as the household antiseptic and water disinfectant lal dawai.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Manufacture of K₂Cr₂O₇ from chromite ore (FeCr₂O₄)',
        steps: [
          '<b>Oxidative alkali fusion</b> of powdered chromite with sodium carbonate in free access of air gives yellow sodium chromate:<br>4 FeCr<sub>2</sub>O<sub>4</sub> + 8 Na<sub>2</sub>CO<sub>3</sub> + 7 O<sub>2</sub> → 8 Na<sub>2</sub>CrO<sub>4</sub> + 2 Fe<sub>2</sub>O<sub>3</sub> + 8 CO<sub>2</sub><br>The insoluble Fe<sub>2</sub>O<sub>3</sub> is filtered off, separating the soluble chromate.',
          '<b>Acidification</b> of the chromate converts it to orange sodium dichromate:<br>2 Na<sub>2</sub>CrO<sub>4</sub> + 2 H<sup>+</sup> → Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 2 Na<sup>+</sup> + H<sub>2</sub>O',
          '<b>Conversion to the potassium salt</b> by treating with KCl:<br>Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 2 KCl → K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 2 NaCl<br><b>Why KCl, and why this works:</b> sodium dichromate is deliquescent and far more soluble than the potassium salt, so on cooling the hot solution the <b>less-soluble K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> crystallises out</b> as orange crystals while NaCl stays in solution — a neat solubility-driven separation.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Preparation of KMnO₄ from pyrolusite (MnO₂)',
        steps: [
          '<b>Alkaline oxidative fusion</b> of MnO<sub>2</sub> with KOH and an oxidant (air or KNO<sub>3</sub>) gives the dark-green manganate:<br>2 MnO<sub>2</sub> + 4 KOH + O<sub>2</sub> → 2 K<sub>2</sub>MnO<sub>4</sub> + 2 H<sub>2</sub>O',
          '<b>Oxidation of manganate(VI) to permanganate(VII).</b> Commercially this is done by <b>electrolytic oxidation</b> in alkaline solution; in the lab the manganate simply <b>disproportionates</b> in neutral or acidic medium:<br>3 MnO<sub>4</sub><sup>2−</sup> + 4 H<sup>+</sup> → 2 MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2 H<sub>2</sub>O<br><b>Reasoning:</b> Mn(VI) is unstable relative to Mn(VII) and Mn(IV), so a single oxidation state splits into one higher and one lower — a textbook disproportionation.',
        ],
      },
      {
        t: 'p',
        html: '<b>Procedure C — The “5–3–1” medium rule for permanganate’s oxidising half-reactions.</b> The single most exam-relevant pattern. As the medium becomes less acidic, manganese accepts fewer electrons and stops at a higher oxidation state:',
      },
      {
        t: 'formula',
        kicker: 'The “5–3–1” medium rule',
        main: 'Acidic: MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O (<i>E</i>° = +1.51 V)<br>Neutral / faintly alkaline: MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O + 3e<sup>−</sup> → MnO<sub>2</sub> + 4OH<sup>−</sup> (<i>E</i>° = +0.59 V)<br>Strongly alkaline: MnO<sub>4</sub><sup>−</sup> + e<sup>−</sup> → MnO<sub>4</sub><sup>2−</sup> (<i>E</i>° = +0.56 V)',
        legend: ['<i>E</i>° = standard reduction potential'],
        note: null,
      },
      {
        t: 'p',
        html: 'The electron counts 5, 3, 1 are exactly the n-factors used in the equivalent-mass calculations in Key definitions and properties.',
      },
      {
        t: 'p',
        html: '<b>Procedure D — The chromate ⇌ dichromate pH equilibrium.</b> In aqueous solution the two ions interconvert without any change in chromium’s oxidation state (Cr stays +6):<br>2 CrO<sub>4</sub><sup>2−</sup> + 2H<sup>+</sup> ⇌ Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + H<sub>2</sub>O (yellow ⇌ orange)<br>Add acid (raise [H<sup>+</sup>]) and the equilibrium shifts right to orange dichromate; add base and it shifts left to yellow chromate. A handy lab cue is the colour itself: orange in clearly acidic solution, yellow in alkaline solution.',
      },
      {
        t: 'p',
        html: '<b>Procedure E — The canonical oxidising reactions to memorise.</b> Build any full equation by picking the medium-appropriate metal half-reaction, scaling the reductant half-reaction so electrons cancel, then adding. Acidified dichromate (Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O) oxidises iodide, sulphide and tin(II):<br>6 I<sup>−</sup> → 3 I<sub>2</sub> + 6e<sup>−</sup> ; 3 H<sub>2</sub>S → 6H<sup>+</sup> + 3 S + 6e<sup>−</sup> ; 3 Sn<sup>2+</sup> → 3 Sn<sup>4+</sup> + 6e<sup>−</sup>',
      },
      {
        t: 'p',
        html: 'Acidified permanganate (MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O) oxidises oxalate and nitrite:<br>2 MnO<sub>4</sub><sup>−</sup> + 5 C<sub>2</sub>O<sub>4</sub><sup>2−</sup> + 16H<sup>+</sup> → 2 Mn<sup>2+</sup> + 10 CO<sub>2</sub> + 8H<sub>2</sub>O<br>2 MnO<sub>4</sub><sup>−</sup> + 5 NO<sub>2</sub><sup>−</sup> + 6H<sup>+</sup> → 2 Mn<sup>2+</sup> + 5 NO<sub>3</sub><sup>−</sup> + 3H<sub>2</sub>O',
      },
      {
        t: 'p',
        html: 'The oxalate titration is <b>autocatalytic</b>: the Mn<sup>2+</sup> it generates accelerates further oxidation, so a warm permanganate–oxalate titration begins sluggishly and then speeds up — a frequent point of confusion at the burette.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Write the balanced ionic equation for the reaction of acidified potassium dichromate with iron(II) sulphate solution, and state the colour change observed.',
        steps: [
          'Reduction half-reaction (dichromate in acid):<br>Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6e<sup>−</sup> → 2Cr<sup>3+</sup> + 7H<sub>2</sub>O',
          'Oxidation half-reaction (iron(II) → iron(III), ×6 to balance electrons):<br>6 Fe<sup>2+</sup> → 6 Fe<sup>3+</sup> + 6e<sup>−</sup>',
          'Adding the two half-reactions:',
        ],
        ans: 'Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14H<sup>+</sup> + 6 Fe<sup>2+</sup> → 2 Cr<sup>3+</sup> + 6 Fe<sup>3+</sup> + 7H<sub>2</sub>O; colour change: orange (Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>) to green (Cr<sup>3+</sup>).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A purple solution of KMnO<sub>4</sub> is added drop-wise to a neutral solution of a reducing agent. The product manganese species and the colour of the resulting precipitate are:<br>(a) Mn<sup>2+</sup>, nearly colourless (b) MnO<sub>2</sub>, brown (c) MnO<sub>4</sub><sup>2−</sup>, green (d) Mn<sub>2</sub>O<sub>3</sub>, black',
        steps: [
          '<b>The fast way.</b> Don’t balance anything — recall the <b>5–3–1 rule</b> and read off the medium. The keyword is <b>neutral</b>:<br>• acidic → Mn<sup>2+</sup> (nearly colourless) — that’s option (a), the trap for students who reflexively assume acidic.<br>• <b>neutral/faintly alkaline → MnO<sub>2</sub> (brown precipitate) ✓</b> — option (b).<br>• strongly alkaline → MnO<sub>4</sub><sup>2−</sup> (green) — option (c).',
          '<b>Speed rule:</b> the medium word in the question is the whole answer — match it to 5-acid-Mn<sup>2+</sup> / 3-neutral-or-faintly-alkaline-MnO<sub>2</sub> / 1-strong-base-MnO<sub>4</sub><sup>2−</sup>.',
        ],
        ans: '(b).',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (multi-concept: redox + equivalent concept)',
        q: '0.49 g of pure K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is dissolved in dilute H<sub>2</sub>SO<sub>4</sub> and used to oxidise Fe<sup>2+</sup> ions completely. How many moles of Fe<sup>2+</sup> are oxidised? (Molar mass of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = 294 g mol<sup>−1</sup>.)',
        steps: [
          'Moles of dichromate: 0.49/294 = 1.67 × 10<sup>−3</sup> mol.',
          'From the balanced equation in worked example 1, <b>1 mole Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> oxidises 6 moles Fe<sup>2+</sup></b> (the n-factor of dichromate is 6, matching one electron per Fe<sup>2+</sup>).',
          'Moles of Fe<sup>2+</sup> oxidised:<br>1.67 × 10<sup>−3</sup> × 6',
          '<b>Cross-check via equivalents:</b> equivalents of dichromate = 0.49/49 = 0.010 eq, which must equal equivalents of Fe<sup>2+</sup> (<i>n</i> = 1), giving 0.010 mol — consistent.',
        ],
        ans: '1.0 × 10<sup>−2</sup> mol of Fe<sup>2+</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Permanganate oxidises iodide differently depending on the medium. Write balanced equations for KMnO<sub>4</sub> reacting with KI in (a) acidic and (b) neutral/faintly alkaline medium, and explain why the iodine-containing products differ.',
        steps: [
          '<b>(a) Acidic medium</b> — Mn falls to Mn<sup>2+</sup> (<i>n</i> = 5); iodide is oxidised only as far as I<sub>2</sub>:<br>2 MnO<sub>4</sub><sup>−</sup> + 10 I<sup>−</sup> + 16H<sup>+</sup> → 2 Mn<sup>2+</sup> + 5 I<sub>2</sub> + 8H<sub>2</sub>O',
          '<b>(b) Neutral/faintly alkaline medium</b> — Mn falls only to MnO<sub>2</sub> (<i>n</i> = 3); here iodide is driven on to <b>iodate</b>:<br>2 MnO<sub>4</sub><sup>−</sup> + H<sub>2</sub>O + I<sup>−</sup> → 2 MnO<sub>2</sub> + 2OH<sup>−</sup> + IO<sub>3</sub><sup>−</sup>',
          '<b>Why the difference?</b> In strong acid, I<sub>2</sub> is stable, so iodide is oxidised only as far as I<sub>2</sub>. In neutral or faintly alkaline solution (the reaction itself makes OH<sup>−</sup>), molecular I<sub>2</sub> does not last: it disproportionates to I<sup>−</sup> and IO<sub>3</sub><sup>−</sup>, and the I<sup>−</sup> is oxidised again, so the net product is iodate, IO<sub>3</sub><sup>−</sup> (iodine +5). The lesson: in permanganate chemistry, <b>the medium controls both the manganese product and how far the reductant is oxidised.</b>',
          '<b>Do not confuse this with a balancing exercise.</b> Chemistry 11, Redox Reactions, balances MnO<sub>4</sub><sup>−</sup> + I<sup>−</sup> → MnO<sub>2</sub> + I<sub>2</sub> in basic medium because that question names I<sub>2</sub> as the product. Balance the products a question gives. If you must predict the product in neutral or faintly alkaline solution, write iodate, as above.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe, with balanced equations, the preparation of potassium permanganate from pyrolusite ore. Name the colour of the intermediate manganate.',
            a: '2MnO<sub>2</sub> + 4KOH + O<sub>2</sub> → 2K<sub>2</sub>MnO<sub>4</sub> + 2H<sub>2</sub>O, then electrolytic oxidation, or disproportionation: 3MnO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2MnO<sub>4</sub><sup>−</sup> + MnO<sub>2</sub> + 2H<sub>2</sub>O; intermediate manganate is dark green.',
          },
          {
            q: '[NEET] What is observed when SO<sub>2</sub> gas is passed through an acidified solution of potassium dichromate, and what does it confirm about SO<sub>2</sub>?',
            a: 'The orange solution turns green (Cr<sup>3+</sup>), confirming SO<sub>2</sub> is a reducing agent: Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 3SO<sub>2</sub> + 2H<sup>+</sup> → 2Cr<sup>3+</sup> + 3SO<sub>4</sub><sup>2−</sup> + H<sub>2</sub>O.',
          },
          {
            q: '[JEE Main] Calculate the equivalent mass of KMnO<sub>4</sub> when it acts as an oxidising agent in (i) acidic and (ii) strongly alkaline medium. (<i>M</i> = 158.)',
            a: '(i) 158/5 = 31.6; (ii) 158/1 = 158.',
          },
          {
            q: '[JEE Main] Why is potassium dichromate used as a primary standard in volumetric analysis whereas potassium permanganate is not?',
            a: 'Dichromate is stable, non-deliquescent and can be weighed accurately; permanganate decomposes (light-sensitive) and must be standardised, hence a secondary standard.',
          },
          {
            q: '[JEE Advanced] When solid K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is warmed with concentrated H<sub>2</sub>SO<sub>4</sub> and a soluble chloride, deep-red vapours are evolved. Identify the vapours, write the balanced equation, and state what test this constitutes.',
            a: 'Deep-red chromyl chloride CrO<sub>2</sub>Cl<sub>2</sub>; K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 4KCl + 6H<sub>2</sub>SO<sub>4</sub> → 2CrO<sub>2</sub>Cl<sub>2</sub> + 6KHSO<sub>4</sub> + 3H<sub>2</sub>O — the chromyl chloride test for chloride ion.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The intense purple colour of the permanganate ion MnO<sub>4</sub><sup>−</sup> is due to:',
        opts: [
          { label: 'a d–d transition', nudge: '<b>(a)</b> is the standard trap — students over-apply the “colour from d–d transitions” rule learned for ordinary transition-metal ions, forgetting d<sup>0</sup> has no d-electrons.' },
          { label: 'the presence of unpaired d-electrons', nudge: '<b>(b)</b> is the standard trap — students over-apply the “colour from d–d transitions” rule learned for ordinary transition-metal ions, forgetting d<sup>0</sup> has no d-electrons.' },
          { label: 'a ligand-to-metal charge-transfer transition', nudge: null },
          { label: 'paramagnetism of Mn<sup>7+</sup>', nudge: '<b>(d)</b> is wrong twice over: MnO<sub>4</sub><sup>−</sup> is diamagnetic, and paramagnetism does not produce colour.' },
        ],
        correct: 2,
        solution: 'Mn in MnO<sub>4</sub><sup>−</sup> is d<sup>0</sup>, so there are no d-electrons to undergo a d–d transition; the colour comes from charge transfer (oxygen → manganese).',
      },
      {
        t: 'mcq',
        q: 'HCl is not used to acidify KMnO<sub>4</sub> in titrations because:',
        opts: [
          { label: 'HCl reacts with Mn<sup>2+</sup>', nudge: '<b>(a)</b> is irrelevant.' },
          { label: 'KMnO<sub>4</sub> oxidises Cl<sup>−</sup> to Cl<sub>2</sub>, consuming extra oxidant', nudge: null },
          { label: 'HCl is a weak acid', nudge: '<b>(c)</b> HCl is a strong acid, and acid strength is not the issue.' },
          { label: 'KMnO<sub>4</sub> is reduced by HCl to MnO<sub>2</sub>', nudge: '<b>(d)</b> names the wrong product: in acid, permanganate is reduced to Mn<sup>2+</sup>, not MnO<sub>2</sub>.' },
        ],
        correct: 1,
        solution: 'Permanganate oxidises chloride to chlorine, so part of the oxidant is wasted on HCl rather than the analyte, giving erroneous results — hence dilute H<sub>2</sub>SO<sub>4</sub> is used.',
      },
      {
        t: 'mcq',
        q: 'The equivalent mass of K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> acting as an oxidant in acidic medium is (<i>M</i> = 294):',
        opts: [
          { label: '294', nudge: '<b>(a)</b> 294 forgets to divide by the n-factor entirely.' },
          { label: '147', nudge: '<b>(b)</b> 147 uses <i>n</i> = 2, the number of Cr atoms (or the ion’s charge), instead of the electrons gained — a common slip.' },
          { label: '49', nudge: null },
          { label: '98', nudge: '<b>(d)</b> 98 uses <i>n</i> = 3, the change of only one Cr.' },
        ],
        correct: 2,
        solution: 'In acid, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> gains 6 electrons (2 Cr<sup>6+</sup> → 2 Cr<sup>3+</sup>), so <i>n</i> = 6 and Eq = 294/6 = 49.',
      },
      {
        t: 'mcq',
        q: 'When CO<sub>2</sub> is bubbled into a green solution of potassium manganate (K<sub>2</sub>MnO<sub>4</sub>), the solution turns purple and a brown solid forms. The purple species and brown solid are respectively:',
        opts: [
          { label: 'KMnO<sub>4</sub> and MnO<sub>2</sub>', nudge: null },
          { label: 'MnO<sub>2</sub> and KMnO<sub>4</sub>', nudge: '<b>(b)</b> swaps the two products.' },
          { label: 'Mn<sup>2+</sup> and MnO<sub>2</sub>', nudge: '<b>(c)</b> wrongly takes Mn all the way to Mn<sup>2+</sup> — but disproportionation of Mn(VI) gives Mn(VII) and Mn(IV), not Mn(II).' },
          { label: 'KMnO<sub>4</sub> and Mn<sub>2</sub>O<sub>3</sub>', nudge: '<b>(d)</b> names a non-product.' },
        ],
        correct: 0,
        solution: 'CO<sub>2</sub> makes the solution slightly acidic, triggering disproportionation of manganate: 3MnO<sub>4</sub><sup>2−</sup> + 4H<sup>+</sup> → 2MnO<sub>4</sub><sup>−</sup> (purple) + MnO<sub>2</sub> (brown) + 2H<sub>2</sub>O.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Acidifying KMnO<sub>4</sub> with HCl.</b> Always dilute H<sub>2</sub>SO<sub>4</sub>. HCl gets oxidised to Cl<sub>2</sub> and ruins quantitative work.',
          '<b>Writing one fixed permanganate product.</b> The manganese product depends on the medium — apply the 5–3–1 rule every time.',
          '<b>Calling the permanganate/dichromate colour a d–d transition.</b> Both centres are d<sup>0</sup>; the colour is charge transfer (LMCT).',
          '<b>Wrong n-factor in equivalent-mass problems.</b> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> is <i>n</i> = 6 (not 2 or 3); KMnO<sub>4</sub> is <i>n</i> = 5 in acid, 3 in neutral or faintly alkaline solution, 1 in strongly alkaline solution. Mixing these up is the single biggest source of lost marks in volumetric numericals.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> Lock in two mnemonics. For permanganate electrons by medium, <b>“5–3–1 = Acid-Neutral-Base”</b> (strong→weak hold on electrons). (Base here means strongly alkaline; faintly alkaline counts with neutral.) For dichromate’s pH colour, <b>“acid → orange, base → yellow”</b> (think: a baseball is yellow-ish). And for any K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> redox sum, remember its n-factor 6 first — most JEE numericals collapse once you fix the n-factor.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> prep',
            note: 'chromite →<sup>Na₂CO₃, O₂</sup> Na<sub>2</sub>CrO<sub>4</sub> →<sup>H⁺</sup> Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> →<sup>KCl</sup> K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (less soluble → crystallises).',
          },
          {
            f: 'KMnO<sub>4</sub> prep',
            note: 'MnO<sub>2</sub> →<sup>KOH, O₂</sup> green K<sub>2</sub>MnO<sub>4</sub> → (disproportionation / electrolytic oxidation) → purple KMnO<sub>4</sub>.',
          },
          {
            f: 'Structures',
            note: 'CrO<sub>4</sub><sup>2−</sup> tetrahedral; Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> = two tetrahedra sharing a corner, Cr–O–Cr ≈ 126°; MnO<sub>4</sub><sup>−</sup>/MnO<sub>4</sub><sup>2−</sup> tetrahedral.',
          },
          {
            f: '5–3–1 rule',
            note: 'Acid: MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O; neutral or faintly alkaline: MnO<sub>4</sub><sup>−</sup> + 2H<sub>2</sub>O + 3e<sup>−</sup> → MnO<sub>2</sub> + 4OH<sup>−</sup>; strongly alkaline: MnO<sub>4</sub><sup>−</sup> + e<sup>−</sup> → MnO<sub>4</sub><sup>2−</sup>.',
          },
          {
            f: 'Equivalent masses',
            note: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = 294/6 = 49; KMnO<sub>4</sub> = 158/5 = 31.6 (acid).',
          },
          {
            f: 'Colour origin',
            note: 'MnO<sub>4</sub><sup>−</sup> and Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> both d<sup>0</sup> → charge-transfer (LMCT), not d–d. MnO<sub>4</sub><sup>2−</sup> paramagnetic (d<sup>1</sup>), MnO<sub>4</sub><sup>−</sup> diamagnetic (d<sup>0</sup>).',
          },
          {
            f: 'Standard',
            note: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> = primary; KMnO<sub>4</sub> = secondary. Acidify with dil. H<sub>2</sub>SO<sub>4</sub>, never HCl.',
          },
          {
            f: 'Chromyl chloride test',
            note: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 4KCl + 6H<sub>2</sub>SO<sub>4</sub> → 2CrO<sub>2</sub>Cl<sub>2</sub> (deep red) + 6KHSO<sub>4</sub> + 3H<sub>2</sub>O.',
          },
        ],
        aids: [],
      },
    ],
  },
];
