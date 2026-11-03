import type { Topic } from '@/lib/textbooks';

/**
 * Physics Class 11, Chapter 1, Topics 01 to 03: pages 8 to 34 of the Drona
 * Class 11 Physics Master Reference, word for word.
 *
 * 01 Systems of Units and SI Units (pp. 8–16), 02 Dimensional Analysis and
 * Formulas (pp. 17–25), 03 Errors in Measurement (pp. 26–34). Each topic is cut
 * into parts at the book's own eight sections. The text is the book's; only
 * layout is changed (stacked fractions written on one line, page pointers such
 * as "(see next page)" dropped, the cheat-sheet box title and emoji left out),
 * and the three numbered figures are the redrawn ones in
 * lib/diagrams/physics-11-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────────── Topic 01 · pp. 8–16 ─────────────────────────────
  {
    n: '01',
    title: 'Systems of Units and SI Units',
    kalam: 'Every measurement in the universe is really a sentence with two words: a number and a unit.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> This subtopic shows up as 1 direct question in JEE Main most years (often unit-conversion or "which is a base unit" type) and underpins every dimensional-analysis problem in JEE Advanced. NEET asks it rarely and only at the definition level. CBSE Boards favour 1–2 mark short answers on base units, supplementary units, or the SI definitions.`,
      },
      {
        t: 'p',
        html: `Imagine you call up a friend in another city and tell him, "Yaar, I just bought a table that's five long." Five what? Five feet? Five metres? Five hand-spans? The number "five" by itself is useless — it tells him nothing until you attach a standard of comparison to it. That standard is what we call a <b>unit</b>. Every measurement in the universe is really a sentence with two words: a <b>number</b> and a <b>unit</b>. Drop either one and the sentence becomes nonsense.<br><br>Here's the deeper idea. When you measure something, you're secretly asking: "How many times does my chosen standard fit into this thing?" If your standard is the metre and the table swallows it three-and-a-half times, you say the table is 3.5 m. So a measurement is just a ratio — the size of the thing divided by the size of your reference. This immediately tells you something neat: if you switch to a smaller unit, the number gets bigger (more of the small unit fit in), and vice versa. A wall that is 3 m is also 300 cm — same wall, smaller unit, bigger number.<br><br>Now, we don't need a separate fundamental standard for everything. That would be chaos. Instead, scientists picked a small handful of quantities to act as the "founding members" — <b>base (fundamental) quantities</b> — and built everything else out of them. Length, mass, and time are the obvious three. Speed? That's just length per time. Force? Mass times length per time-squared. These built-from-base quantities are called <b>derived quantities</b>, and their units are <b>derived units</b>. It's like a language: a few root words (base units) combine to make an entire dictionary (derived units).<br><br>Over history, different groups of people chose different "founding members" and different sizes for them. The British used the <b>FPS system</b> (foot, pound, second). Scientists liked the <b>CGS system</b> (centimetre, gram, second). Engineers leaned on the <b>MKS system</b> (metre, kilogram, second). The problem? A pharma company in Pune, a NASA engineer, and a French physicist all measuring the same thing got three different numbers. So in 1960 the world finally agreed on one universal standard — the <b>Système International d'Unités</b>, or <b>SI</b> — an upgraded, "rationalised" MKS system with <b>seven base units</b> and <b>two supplementary units</b>. (The mole joined in 1971.)<br><br><b>Think about it this way...</b> picture the seven SI base units as the seven primary notes of Indian classical music — Sa, Re, Ga, Ma, Pa, Dha, Ni. Just seven notes, yet every raga, every Bollywood song, every symphony is built by combining them. Similarly, length, mass, time, electric current, temperature, amount of substance, and luminous intensity are the seven "notes" of physics, and every physical quantity — from the energy of a falling mango to the magnetic field of a galaxy — is a "song" composed from these seven.<br><br>One more practical wrinkle worth meeting now: even with a single agreed system, the same base quantity often needs differently-sized "rulers" for different jobs. You'd measure the distance between two cities in kilometres, the thickness of a hair in micrometres, the gap between atoms in angstroms, and the span of the solar system in astronomical units — yet all of these are length. SI handles this gracefully through <b>prefixes</b> (kilo-, milli-, nano-, and so on) and a handful of accepted <b>practical units</b>, so the scientist never has to write a number trailing twenty zeros. The base unit stays the metre; the prefixes are just convenient costumes it wears.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> A few quiet rules govern this whole system:<br>• The choice of base quantities is a matter of convention, not nature. There's nothing sacred about choosing length and time as fundamental — you could build a system where speed and time are fundamental and length becomes derived. SI's seven are simply the agreed-upon, practical choice.<br>• A good unit must be <b>well-defined, invariant (unchanging with time/place/temperature), reproducible anywhere, and imperishable.</b> This is exactly why, in 2019, the world abandoned the physical platinum cylinder that defined the kilogram — a lump of metal can get scratched or gain dust — and switched to definitions based on <b>fixed values of fundamental constants of nature</b>, which never change.<br>• <b>Supplementary units</b> (radian, steradian) are special: they are genuinely <b>dimensionless</b>, even though they describe angles. Don't treat them like ordinary base units.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'table',
        title: 'The seven SI base quantities, their units, symbols, and dimensional formulae',
        head: ['Base Quantity', 'Unit', 'Symbol', 'Dimensional Formula'],
        rows: [
          ['Length', 'metre', 'm', '[L]'],
          ['Mass', 'kilogram', 'kg', '[M]'],
          ['Time', 'second', 's', '[T]'],
          ['Electric current', 'ampere', 'A', '[A]'],
          ['Thermodynamic temperature', 'kelvin', 'K', '[K]'],
          ['Amount of substance', 'mole', 'mol', '[mol]'],
          ['Luminous intensity', 'candela', 'cd', '[cd]'],
        ],
      },
      { t: 'p', html: `<b>The two SI supplementary units:</b>` },
      {
        t: 'formula',
        kicker: 'Plane angle',
        // The space after "unit:" is a no-break space, so the Formula sheet does
        // not read "(unit" as the formula's label. It looks the same.
        main: `d<i>θ</i> = d<i>s</i>/<i>r</i> (unit: radian, rad)`,
        legend: [`d<i>s</i> = the arc length`, `<i>r</i> = the radius`],
        note: `Dimensionless: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].`,
      },
      {
        t: 'formula',
        kicker: 'Solid angle',
        main: `dΩ = d<i>A</i>/<i>r</i><sup>2</sup> (unit: steradian, sr)`,
        legend: [`d<i>A</i> = the area of the patch on a sphere`, `<i>r</i> = the radius`],
        note: `Dimensionless: [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].`,
      },
      {
        t: 'p',
        html: `<b>The seven defining constants of the SI (the basis of the 2019 redefinition).</b> Every base unit is now fixed by assigning an exact numerical value to a constant of nature:<br>• Speed of light in vacuum: <i>c</i> = 299792458 m s<sup>−1</sup> → defines the <b>metre</b><br>• Caesium hyperfine frequency: Δ<i>ν</i><sub>Cs</sub> = 9192631770 Hz → defines the <b>second</b><br>• Planck constant: <i>h</i> = 6.62607015 × 10<sup>−34</sup> J s → defines the <b>kilogram</b><br>• Elementary charge: <i>e</i> = 1.602176634 × 10<sup>−19</sup> C → defines the <b>ampere</b><br>• Boltzmann constant: <i>k</i><sub>B</sub> = 1.380649 × 10<sup>−23</sup> J K<sup>−1</sup> → defines the <b>kelvin</b><br>• Avogadro constant: <i>N</i><sub>A</sub> = 6.02214076 × 10<sup>23</sup> mol<sup>−1</sup> → defines the <b>mole</b><br>• Luminous efficacy: <i>K</i><sub>cd</sub> = 683 lm W<sup>−1</sup> → defines the <b>candela</b>`,
      },
      {
        t: 'p',
        html: `<b>Common derived units (built from the base seven).</b> A derived unit that is just a product/quotient of base units with no extra numerical factor is called <b>coherent</b> — and SI is deliberately built to be coherent, which is why conversions inside SI never need awkward constants. A few you must know cold:<br>• Force: newton, N = kg m s<sup>−2</sup>, dimension [M L T<sup>−2</sup>]<br>• Energy/work: joule, J = kg m<sup>2</sup> s<sup>−2</sup>, dimension [M L<sup>2</sup> T<sup>−2</sup>]<br>• Power: watt, W = kg m<sup>2</sup> s<sup>−3</sup>, dimension [M L<sup>2</sup> T<sup>−3</sup>]<br>• Pressure: pascal, Pa = kg m<sup>−1</sup> s<sup>−2</sup>, dimension [M L<sup>−1</sup> T<sup>−2</sup>]<br>• Charge: coulomb, C = A s, dimension [A T]`,
      },
      {
        t: 'p',
        html: `<b>SI prefixes.</b> Physical quantities span an enormous range — from the ∼ 10<sup>−15</sup> m size of a nucleus to the ∼ 10<sup>26</sup> m distance of a far quasar. Rather than drowning in zeros, SI uses standard decimal prefixes:`,
      },
      {
        // The book prints this as two side-by-side halves; read down the left
        // half, then down the right.
        t: 'table',
        title: null,
        head: ['Factor', 'Prefix', 'Symbol'],
        rows: [
          ['10<sup>12</sup>', 'tera', 'T'],
          ['10<sup>9</sup>', 'giga', 'G'],
          ['10<sup>6</sup>', 'mega', 'M'],
          ['10<sup>3</sup>', 'kilo', 'k'],
          ['10<sup>2</sup>', 'hecto', 'h'],
          ['10<sup>1</sup>', 'deca', 'da'],
          ['10<sup>−2</sup>', 'centi', 'c'],
          ['10<sup>−3</sup>', 'milli', 'm'],
          ['10<sup>−6</sup>', 'micro', 'μ'],
          ['10<sup>−9</sup>', 'nano', 'n'],
          ['10<sup>−12</sup>', 'pico', 'p'],
          ['10<sup>−15</sup>', 'femto', 'f'],
        ],
      },
      {
        t: 'p',
        html: `<b>Practical (non-SI but accepted) units.</b> For convenience, physics still uses some handy units alongside SI:<br>• Length: 1 angstrom = 1 Å = 10<sup>−10</sup> m (atomic sizes); 1 fermi = 1 fm = 10<sup>−15</sup> m (nuclear sizes); 1 astronomical unit = 1 AU ≈ 1.496 × 10<sup>11</sup> m (Earth–Sun distance); 1 light year ≈ 9.46 × 10<sup>15</sup> m; 1 parsec ≈ 3.08 × 10<sup>16</sup> m.<br>• Mass: 1 atomic mass unit = 1 u ≈ 1.66 × 10<sup>−27</sup> kg; 1 tonne = 10<sup>3</sup> kg; 1 quintal = 10<sup>2</sup> kg.<br>• Time: derived directly from the second (minute, hour, day) — but the second remains the SI base.`,
      },
      {
        t: 'p',
        html: `<b>The unit-conversion master relation.</b> The physical size of a quantity is fixed, so the product of its numerical value <i>n</i> and unit size <i>u</i> is a constant across systems:`,
      },
      {
        t: 'formula',
        kicker: 'The unit-conversion master relation',
        main: `<i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub><br>For a quantity with dimensional formula [M<sup><i>a</i></sup> L<sup><i>b</i></sup> T<sup><i>c</i></sup>]:<br><i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup><i>a</i></sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup><i>b</i></sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup><i>c</i></sup>`,
        legend: [],
        note: null,
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: `Since "Systems of Units and SI Units" has no formal physics derivation, here are the three logical procedures every student must own.`,
      },
      {
        t: 'proc',
        title: 'Procedure A — Expressing a derived unit in terms of base units.',
        steps: [
          `Start from the defining relation of the quantity. Example: pressure is force per area, <i>P</i> = <i>F</i>/<i>A</i>.`,
          `Write each piece in base units. Force (from <i>F</i> = <i>ma</i>) is kg × m s<sup>−2</sup> = kg m s<sup>−2</sup>, and area is m<sup>2</sup>. Why? Because every derived unit must ultimately trace back to the seven base units — that's the whole point of a coherent system.`,
          `Combine. (kg m s<sup>−2</sup>)/m<sup>2</sup> = kg m<sup>−1</sup> s<sup>−2</sup>. This is the pascal (Pa) in base units. The reasoning, not the memorised result, is what protects you when the quantity is unfamiliar — in an exam you will sometimes meet a quantity you have never seen, and this base-unit chain is the only safe way to handle it.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Converting a value between two systems.',
        steps: [
          `Find the dimensional formula of the quantity, [M<sup><i>a</i></sup> L<sup><i>b</i></sup> T<sup><i>c</i></sup>]. (This is the step students skip — and then get conversions wrong.)`,
          `Apply the master relation <i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup><i>a</i></sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup><i>b</i></sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup><i>c</i></sup>. Why raise to the powers? Because if length appears cubed in the quantity (like in volume or density), then the length-unit ratio must be cubed too — the dimension counts how many times that unit "participates."`,
          `Sanity check the direction. Converting to a smaller unit should give a larger number. If your answer breaks this, you've inverted a ratio.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — Building a "new system of units" (the trick behind redefinition).',
        steps: [
          `Identify which quantities are declared fundamental. In the real 2019 SI, fundamental constants (like <i>c</i>, <i>h</i>) are declared fixed.`,
          `Express the desired unit as a product of powers of the fundamentals, with unknown exponents.`,
          `Equate dimensions on both sides and solve for the exponents. This is dimensional bookkeeping — each of M, L, T gives one equation. The philosophy: if you anchor a few unchanging constants, every unit follows automatically and can be reproduced in any lab in the cosmos.`,
        ],
      },
      { t: 'fig', id: 'p11-01-fig-1.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `The universal gas constant <i>R</i> has the SI unit J mol<sup>−1</sup> K<sup>−1</sup>. Express this unit entirely in terms of the SI base units.`,
        steps: [
          `Given: unit of <i>R</i> is J mol<sup>−1</sup> K<sup>−1</sup>.`,
          `Step 1 — Break down the non-base unit (joule). Energy = work = force × distance, so<br>J = N × m = (kg m s<sup>−2</sup>) × m = kg m<sup>2</sup> s<sup>−2</sup>.`,
          `Step 2 — Substitute back.<br>unit of <i>R</i> = (kg m<sup>2</sup> s<sup>−2</sup>)/(mol · K) = kg m<sup>2</sup> s<sup>−2</sup> mol<sup>−1</sup> K<sup>−1</sup>.`,
        ],
        ans: `The SI base-unit form of the gas constant is kg m<sup>2</sup> s<sup>−2</sup> mol<sup>−1</sup> K<sup>−1</sup>. Notice how mole and kelvin survive as base units — they cannot be broken down further.`,
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: `Which one of the following is a <b>base (fundamental) quantity</b> in the SI system? (A) Electric charge (B) Force (C) Electric current (D) Energy`,
        steps: [
          `<b>The trap.</b> Electric charge feels like it should be fundamental — it's such a basic idea! Most students tick (A) on reflex. <b>Wrong.</b> In SI, the chosen electrical base quantity is <b>electric current</b>, not charge. Charge is derived: since current is charge per unit time, charge = current × time, giving the coulomb as C = A s.`,
          `<b>Fast elimination.</b> Force (kg m s<sup>−2</sup>) and energy (kg m<sup>2</sup> s<sup>−2</sup>) are visibly built from other units → derived. That leaves charge vs current. Recall the rule: SI picked current as base; everything electrical is derived from the ampere.`,
          `<b>Pitfall to remember:</b> "Fundamental in feeling" ≠ "fundamental in SI." The seven base quantities are a fixed, memorised list — don't reason from intuition here.`,
        ],
        ans: `(C) Electric current.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `A student measures the surface tension of a soap film as 36 dyne cm<sup>−1</sup> in the CGS system. Convert this value into SI units. (This combines two ideas: identifying the dimensional formula of surface tension, and applying the system-conversion relation.)`,
        steps: [
          `Step 1 — Dimensional formula of surface tension. Surface tension = force per unit length:<br>[Surface tension] = [M L T<sup>−2</sup>]/[L] = [M T<sup>−2</sup>], i.e., <i>a</i> = 1, <i>b</i> = 0, <i>c</i> = −2.`,
          `Step 2 — Apply the conversion relation. CGS: <i>M</i><sub>1</sub> = g, <i>L</i><sub>1</sub> = cm, <i>T</i><sub>1</sub> = s. SI: <i>M</i><sub>2</sub> = kg, <i>L</i><sub>2</sub> = m, <i>T</i><sub>2</sub> = s.<br><i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup>1</sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup>0</sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup>−2</sup> = 36 × (g/kg) × 1 × 1`,
          `Step 3 — Plug the ratio. Since 1 g = 10<sup>−3</sup> kg:<br><i>n</i><sub>2</sub> = 36 × 10<sup>−3</sup> = 0.036.`,
        ],
        ans: `Surface tension = 0.036 N m<sup>−1</sup>. Sanity check: the kilogram is a much bigger mass unit than the gram, so the number should shrink — and it did (36 → 0.036).`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Suppose we build a "natural" system of units in which the <b>speed of light</b> <i>c</i>, the <b>gravitational constant</b> <i>G</i>, and <b>Planck's constant</b> <i>h</i> are each taken as fundamental and set numerically equal to 1. Derive, using dimensional analysis, the expression for the <b>unit of length</b> in this system in terms of <i>c</i>, <i>G</i>, and <i>h</i>, and estimate its order of magnitude.`,
        steps: [
          `This mirrors exactly how the modern SI anchors units to constants of nature — here we anchor length to three constants.`,
          `Step 1 — Write length as a product of powers.<br><i>L</i> = <i>c</i><sup><i>x</i></sup> <i>G</i><sup><i>y</i></sup> <i>h</i><sup><i>z</i></sup>`,
          `Step 2 — Insert dimensional formulae.<br>[<i>c</i>] = [L T<sup>−1</sup>], [<i>G</i>] = [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>], [<i>h</i>] = [M L<sup>2</sup> T<sup>−1</sup>]<br>So:<br>[L<sup>1</sup>] = [L T<sup>−1</sup>]<sup><i>x</i></sup>[M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]<sup><i>y</i></sup>[M L<sup>2</sup> T<sup>−1</sup>]<sup><i>z</i></sup><br>[L] = [M<sup>−<i>y</i>+<i>z</i></sup> L<sup><i>x</i>+3<i>y</i>+2<i>z</i></sup> T<sup>−<i>x</i>−2<i>y</i>−<i>z</i></sup>]`,
          `Step 3 — Match exponents of M, L, T (this is the rigorous core).<br>M: −<i>y</i> + <i>z</i> = 0 ⇒ <i>z</i> = <i>y</i><br>T: −<i>x</i> − 2<i>y</i> − <i>z</i> = 0 ⇒ <i>x</i> = −2<i>y</i> − <i>z</i> = −3<i>y</i><br>L: <i>x</i> + 3<i>y</i> + 2<i>z</i> = 1 ⇒ −3<i>y</i> + 3<i>y</i> + 2<i>y</i> = 1 ⇒ <i>y</i> = ½<br>Hence <i>z</i> = ½ and <i>x</i> = −3/2.`,
          `Step 4 — Assemble the result.<br><i>L</i> = <i>c</i><sup>−3/2</sup> <i>G</i><sup>1/2</sup> <i>h</i><sup>1/2</sup> = √(<i>Gh</i>/<i>c</i><sup>3</sup>)`,
          `Step 5 — Order of magnitude. Using <i>G</i> ≈ 6.67 × 10<sup>−11</sup>, <i>h</i> ≈ 6.63 × 10<sup>−34</sup>, <i>c</i> ≈ 3 × 10<sup>8</sup> (all SI):<br><i>L</i> = √((6.67 × 10<sup>−11</sup>)(6.63 × 10<sup>−34</sup>)/(3 × 10<sup>8</sup>)<sup>3</sup>) ≈ √(1.64 × 10<sup>−69</sup>) ≈ 4 × 10<sup>−35</sup> m.`,
        ],
        ans: `the natural unit of length is √(<i>Gh</i>/<i>c</i><sup>3</sup>) ≈ 4 × 10<sup>−35</sup> m — of the order of the Planck length (≈ 1.6 × 10<sup>−35</sup> m, which uses <i>ħ</i> = <i>h</i>/2π), the scale at which gravity and quantum mechanics collide. This is the same logic the SI now uses: fix the constants, and every unit emerges automatically.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Express the SI unit of power (the watt) entirely in terms of base units.`,
            a: `kg m<sup>2</sup> s<sup>−3</sup>`,
          },
          {
            q: `[NEET] State the total number of base quantities and the number of supplementary units in the SI system.`,
            a: `7 base quantities; 2 supplementary units (radian, steradian)`,
          },
          {
            q: `[JEE Main] The density of a metal is 5 g cm<sup>−3</sup>. Convert this value into SI units (kg m<sup>−3</sup>).`,
            a: `5000 kg m<sup>−3</sup>`,
          },
          {
            q: `[JEE Main] In a new system of units, the unit of force is 1000 N, the unit of length is 100 m, and the unit of time is 10 s. Find the unit of mass in this system (in kg).`,
            a: `1000 kg (since mass unit = <i>F</i> · <i>T</i><sup>2</sup>/<i>L</i> = 1000 × 10<sup>2</sup>/100)`,
          },
          {
            q: `[JEE Advanced] If energy (<i>E</i>), velocity (<i>v</i>), and time (<i>T</i>) are chosen as the fundamental quantities, find the dimensions of <b>mass</b> and of <b>length</b> in terms of <i>E</i>, <i>v</i>, and <i>T</i>.`,
            a: `Mass = [<i>E</i> <i>v</i><sup>−2</sup>]; Length = [<i>v</i> <i>T</i>]`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `Which of the following is <b>NOT</b> an SI base unit?`,
        opts: [
          {
            label: 'mole',
            nudge: `(A) mole and (D) candela trap students who forget that "amount of substance" and "luminous intensity" made it onto the base list — both are legitimate base units.`,
          },
          {
            label: 'kelvin',
            nudge: `(B) kelvin is a base unit; students sometimes wrongly demote it because "temperature feels derived from energy," but SI defines it as base.`,
          },
          { label: 'coulomb', nudge: null },
          {
            label: 'candela',
            nudge: `(A) mole and (D) candela trap students who forget that "amount of substance" and "luminous intensity" made it onto the base list — both are legitimate base units.`,
          },
        ],
        correct: 2,
        solution: `The coulomb is a derived unit, C = A s, since the ampere (current) — not charge — is the electrical base unit.`,
      },
      {
        t: 'mcq',
        q: `The 2019 redefinition of the SI base units was based primarily on:`,
        opts: [
          {
            label: 'carefully preserved physical artifacts',
            nudge: `(A) describes the old kilogram (the platinum–iridium cylinder), which was abandoned precisely because artifacts degrade — a classic distractor.`,
          },
          { label: 'fixed numerical values of fundamental constants of nature', nudge: null },
          {
            label: 'properties of water at standard conditions',
            nudge: `(C) recalls the old Celsius/temperature and litre conventions tied to water — outdated.`,
          },
          {
            label: "fractions of the Earth's dimensions",
            nudge: `(D) recalls the original 1790s metre (one ten-millionth of the Earth's quadrant) — historically true but not the 2019 basis.`,
          },
        ],
        correct: 1,
        solution: `Every base unit is now fixed by assigning an exact value to a constant (<i>c</i>, <i>h</i>, <i>e</i>, etc.), making the units permanent and reproducible anywhere.`,
      },
      {
        t: 'mcq',
        q: `Plane angle and solid angle in the SI system are best described as:`,
        opts: [
          { label: 'base quantities with their own dimensions', nudge: `(A) wrongly promotes them to base quantities.` },
          {
            label: 'derived quantities with dimension [L]',
            nudge: `(B) and (D) fall for the illusion that "angle involves length/area, so it must carry length dimensions" — but the division by <i>r</i> or <i>r</i><sup>2</sup> kills every dimension.`,
          },
          { label: 'dimensionless supplementary units', nudge: null },
          {
            label: 'fundamental units with dimension [L<sup>2</sup>]',
            nudge: `(B) and (D) fall for the illusion that "angle involves length/area, so it must carry length dimensions" — but the division by <i>r</i> or <i>r</i><sup>2</sup> kills every dimension.`,
          },
        ],
        correct: 2,
        solution: `Radian (d<i>s</i>/<i>r</i>) and steradian (d<i>A</i>/<i>r</i><sup>2</sup>) are ratios of like quantities, so all dimensions cancel — they are dimensionless <b>supplementary</b> units.`,
      },
      {
        t: 'mcq',
        q: `When the same physical quantity is expressed in two different systems of units, the product (numerical value × size of the unit) is:`,
        opts: [
          { label: 'doubled', nudge: `(A) and (D) are nonsensical distractors for students guessing.` },
          { label: 'always constant', nudge: null },
          {
            label: 'dependent on the system chosen',
            nudge: `(C) is the subtle trap: the number and the unit each change with the system, which fools students into thinking the product changes too — but they change in exactly compensating ways.`,
          },
          { label: 'equal to zero', nudge: `(A) and (D) are nonsensical distractors for students guessing.` },
        ],
        correct: 1,
        solution: `The physical magnitude is fixed by nature, so <i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub> always holds — this single relation powers every conversion.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Calling charge, force, or energy "fundamental."</b> Only <b>electric current</b> is the electrical base quantity. Memorise the seven base quantities as a fixed list and never reason them out from intuition.`,
          `<b>Sloppy unit symbols.</b> It's "kg" not "Kg" or "kgs"; "K" for kelvin but "k" for the prefix kilo; "N" (capital symbol) but "newton" (lowercase name); "s" not "sec". Unit symbols never take a plural "s" and never a full stop (except at a sentence's end). Boards deduct marks for this.`,
          `<b>Forgetting the dimensional power in conversions.</b> Converting density ([M L<sup>−3</sup>]) means the length ratio must be <b>cubed</b>. Skipping the power is the #1 conversion error.`,
          `<b>Giving radian/steradian dimensions.</b> They are dimensionless. Treating them as length/area units corrupts later dimensional analysis.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed + accuracy):</b> For any conversion, write the dimensional formula first, then mechanically plug into <i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup><i>a</i></sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup><i>b</i></sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup><i>c</i></sup>. Finish with the direction check: smaller unit ⟹ bigger number. This one habit eliminates almost every conversion mistake in seconds.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'SI has 7 base units',
            note: `metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd).`,
          },
          {
            f: '2 supplementary units',
            note: `radian (rad) for plane angle, steradian (sr) for solid angle — both <b>dimensionless</b>.`,
          },
          {
            f: `Plane angle d<i>θ</i> = d<i>s</i>/<i>r</i>; Solid angle dΩ = d<i>A</i>/<i>r</i><sup>2</sup>.`,
            note: '',
          },
          {
            f: '2019 SI',
            note: `every base unit is fixed by a constant of nature (<i>c</i>, Δ<i>ν</i><sub>Cs</sub>, <i>h</i>, <i>e</i>, <i>k</i><sub>B</sub>, <i>N</i><sub>A</sub>, <i>K</i><sub>cd</sub>) — permanent, reproducible, artifact-free.`,
          },
          {
            f: 'Master conversion relation',
            note: `<i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub> ⇒ <i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup><i>a</i></sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup><i>b</i></sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup><i>c</i></sup>.`,
          },
          {
            f: 'Older systems',
            note: `FPS (foot-pound-second), CGS (cm-g-s), MKS (m-kg-s); SI is rationalised MKS.`,
          },
        ],
        aids: [
          `<b>Charge is NOT base</b> → "Current is king; charge is its child (C = A·s)."`,
          `<b>Conversion direction</b> → "Smaller unit, bigger number."`,
          `<b>Supplementary units</b> → "Angles are ratios, so they're dimension-less."`,
        ],
      },
    ],
  },

  // ───────────────────────────── Topic 02 · pp. 17–25 ─────────────────────────────
  {
    n: '02',
    title: 'Dimensional Analysis and Formulas',
    kalam:
      'Every physical quantity is, at heart, a blend of just a few "ingredients" — how much length is in it, how much mass, how much time, and so on.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> This is one of the highest-yield subtopics in the whole chapter. JEE Main almost always carries 1 question (checking a relation, deriving a formula, or unit conversion), and JEE Advanced loves it as a tool buried inside harder problems. NEET asks it occasionally as "match the dimensions." CBSE Boards typically set a 2–3 mark question on checking correctness or finding a dimensional formula.`,
      },
      {
        t: 'p',
        html: `Every physical quantity is, at heart, a blend of just a few "ingredients" — how much length is in it, how much mass, how much time, and so on. Think of it like a recipe. A samosa isn't a fundamental thing; it's potato + flour + spices in certain proportions. In exactly the same way, <b>speed</b> isn't fundamental — it's one part length, one part inverse-time (length ÷ time). <b>Force</b> is one part mass, one part length, two parts inverse-time. The list of "how many parts of each base ingredient" a quantity contains is called its <b>dimensions</b>, and writing it out compactly is its <b>dimensional formula</b>.<br><br>We use square brackets and the symbols M (mass), L (length), T (time), A (current), K (temperature) to record the recipe. Speed has dimensional formula [L T<sup>−1</sup>]. Force has [M L T<sup>−2</sup>]. The beauty is that this recipe is completely independent of units: whether you measure speed in m/s, km/h, or furlongs per fortnight, its dimensional formula is always [L T<sup>−1</sup>]. Dimensions capture the nature of a quantity, stripped of the accident of which ruler you happened to use.<br><br>Why does that unit-independence matter so much? Because it means dimensions describe something real and permanent about a quantity, while units are just our changeable labels. Two students in two countries using two unit systems will write different numbers for the same force, but they will write the same dimensional formula. This is why dimensions can act as a universal cross-check: they sit underneath all the bookkeeping of units, watching whether the physics makes sense. A handy consequence: any quantity that is a ratio of two similar things — strain (length/length), refractive index (speed/speed), relative density (density/density) — comes out <b>dimensionless</b>, with formula [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>], because the ingredients cancel perfectly.<br><br>Now here comes the single most powerful idea in this entire subtopic. <b>You can only add or compare things of the same nature.</b> You'd never say "3 kilograms plus 5 seconds" — it's gibberish. The same rule governs every equation in physics: <b>every term that is added, subtracted, or equated must have identical dimensions.</b> This is the <b>principle of homogeneity of dimensions</b>, and it's the engine behind everything we do here. It lets you (1) check whether an equation could be right, (2) derive unknown relationships, and (3) convert a quantity between unit systems — all without doing the underlying physics in detail.<br><br><b>Think about it this way...</b> imagine you're proofreading a friend's physics answer but you don't have time to redo the whole problem. You can still catch a blunder instantly: just check that the "recipe" on the left matches the "recipe" on the right. If your friend writes that pressure equals force times area, you check — pressure is [M L<sup>−1</sup> T<sup>−2</sup>] but force times area is [M L T<sup>−2</sup>][L<sup>2</sup>] = [M L<sup>3</sup> T<sup>−2</sup>]. Mismatch! You've caught the error in five seconds without knowing a thing about the actual scenario. Dimensional analysis is the physicist's spell-checker.<br><br>What makes this genuinely powerful — not just a classroom trick — is that the same check runs in reverse to predict physics you haven't been taught. If you know a quantity depends on a few others, demanding that the recipes balance often forces the relationship almost entirely into shape, leaving only an unknown number out front. Physicists have used exactly this reasoning to estimate everything from the energy released by an explosion to the speed of ripples on water, long before doing the full theory. So treat dimensions not as a chore but as a fast, surprisingly deep first weapon you reach for whenever a relation is unknown or a formula looks suspicious.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> This power comes with sharp boundaries you must respect, because examiners test them relentlessly:<br>• A dimensionally <b>correct</b> equation is <b>not guaranteed to be physically correct.</b> The method is blind to pure numbers — it cannot see the ½ in ½<i>mv</i><sup>2</sup> or the 2<i>π</i> in a pendulum's period. So <i>s</i> = <i>ut</i> + <i>at</i><sup>2</sup> (missing the ½) is dimensionally fine but physically wrong.<br>• It <b>cannot determine dimensionless constants</b> (½, 2<i>π</i>, coefficients).<br>• It <b>fails when a quantity depends on more than three</b> base-dimension variables, because we only have three equations (M, L, T) to solve.<br>• It <b>cannot handle equations with sums of terms</b> when deriving (e.g., it can't produce <i>ut</i> + ½<i>at</i><sup>2</sup> as a single dimensional expression).<br>• The <b>arguments of trigonometric, logarithmic, and exponential functions must be dimensionless</b> — sin(<i>θ</i>), <i>e</i><sup><i>x</i></sup>, ln(<i>y</i>) only make sense when <i>θ</i>, <i>x</i>, <i>y</i> carry no dimensions.<br>• It <b>cannot distinguish two quantities with the same dimensions</b> — work and torque are both [M L<sup>2</sup> T<sup>−2</sup>], yet they are physically very different.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Dimensional formula',
        html: `an expression showing which base quantities, and to what powers, make up a physical quantity. Written as [M<sup><i>a</i></sup> L<sup><i>b</i></sup> T<sup><i>c</i></sup> …], where <i>a</i>, <i>b</i>, <i>c</i> are the <b>dimensions</b> of the quantity in mass, length, and time.`,
      },
      {
        t: 'def',
        term: 'Dimensional equation',
        html: `the statement equating a physical quantity to its dimensional formula, e.g., [Force] = [M L T<sup>−2</sup>].`,
      },
      {
        t: 'table',
        title: 'Essential dimensional formulae to know by heart',
        head: ['Quantity', 'Relation', 'Dimensional Formula', 'SI Unit'],
        rows: [
          ['Velocity', 'displacement / time', '[M<sup>0</sup> L T<sup>−1</sup>]', 'm s<sup>−1</sup>'],
          ['Acceleration', 'velocity / time', '[M<sup>0</sup> L T<sup>−2</sup>]', 'm s<sup>−2</sup>'],
          ['Force', 'mass × acceleration', '[M L T<sup>−2</sup>]', 'N'],
          ['Work / Energy / Torque', 'force × distance', '[M L<sup>2</sup> T<sup>−2</sup>]', 'J'],
          ['Power', 'work / time', '[M L<sup>2</sup> T<sup>−3</sup>]', 'W'],
          ["Pressure / Stress / Young's modulus", 'force / area', '[M L<sup>−1</sup> T<sup>−2</sup>]', 'Pa'],
          ['Momentum / Impulse', 'mass × velocity', '[M L T<sup>−1</sup>]', 'kg m s<sup>−1</sup>'],
          ['Density', 'mass / volume', '[M L<sup>−3</sup>]', 'kg m<sup>−3</sup>'],
          ['Surface tension', 'force / length', '[M L<sup>0</sup> T<sup>−2</sup>]', 'N m<sup>−1</sup>'],
          ['Coefficient of viscosity', '—', '[M L<sup>−1</sup> T<sup>−1</sup>]', 'Pa s'],
          ["Planck's constant", 'energy / frequency', '[M L<sup>2</sup> T<sup>−1</sup>]', 'J s'],
          ['Gravitational constant <i>G</i>', '—', '[M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]', 'N m<sup>2</sup> kg<sup>−2</sup>'],
        ],
      },
      { t: 'p', html: `<b>Principle of homogeneity:</b> In any physically valid equation,` },
      {
        t: 'formula',
        kicker: 'Principle of homogeneity',
        main: `[Term<sub>1</sub>] = [Term<sub>2</sub>] = ⋯ = [Both sides]`,
        legend: [],
        note: `i.e., every additive term shares the same dimensional formula.`,
      },
      {
        t: 'def',
        term: 'Dimensionless quantities',
        html: `Pure numbers (<i>π</i>, 2), ratios of like quantities (strain, refractive index, relative density), and angles (radian, steradian) all have dimensional formula [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>].`,
      },

      { t: 'part', title: 'CBSE board derivations / key procedures' },
      {
        t: 'p',
        html: `<b>The logical foundation — why homogeneity must hold.</b> Consider any physical equation, say <i>A</i> = <i>B</i> + <i>C</i>. Each symbol represents a physical quantity with some dimensional formula. Suppose [<i>B</i>] ≠ [<i>C</i>]. Then we would be adding, for instance, a length to a time — which is meaningless, exactly as "2 metres + 3 seconds" is meaningless. Therefore, for the equation to have any physical sense, we must have [<i>B</i>] = [<i>C</i>], and since <i>A</i> equals their sum, [<i>A</i>] = [<i>B</i>] = [<i>C</i>]. This is the principle of homogeneity, and notice it is forced on us by the simple impossibility of adding unlike quantities — not an arbitrary rule.`,
      },
      {
        t: 'proc',
        title: 'Procedure 1 — Checking the correctness of an equation.',
        steps: [
          `Write the dimensional formula of the <b>left-hand side (LHS)</b>.`,
          `Write the dimensional formula of <b>each term</b> on the <b>right-hand side (RHS)</b> separately.`,
          `If LHS matches every RHS term, the equation is <b>dimensionally consistent</b> (and may be correct). If even one term differs, the equation is <b>definitely wrong</b>. Why "may"? Because dimensions can't see numerical factors — consistency is necessary but not sufficient.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure 2 — Deriving a relationship between quantities.',
        steps: [
          `Assume the unknown quantity is a product of powers of the quantities it depends on, times a dimensionless constant <i>C</i>: e.g., <i>Q</i> = <i>C</i> <i>x</i><sup><i>a</i></sup><i>y</i><sup><i>b</i></sup><i>z</i><sup><i>c</i></sup>.`,
          `Replace every symbol with its dimensional formula.`,
          `Apply homogeneity: equate the powers of M, L, and T on both sides — this gives you simultaneous equations.`,
          `Solve for <i>a</i>, <i>b</i>, <i>c</i> and substitute back. Why this works: if the relation is a single power-law product, its exponents are fully fixed by requiring dimensional balance. Remember: <i>C</i> stays unknown — the method is blind to it.`,
        ],
      },
      {
        t: 'proc',
        title: 'Procedure 3 — Converting a quantity between unit systems.',
        steps: [
          `Write the dimensional formula of the quantity, [M<sup><i>a</i></sup> L<sup><i>b</i></sup> T<sup><i>c</i></sup>].`,
          `Use the fact that the physical magnitude is fixed, so <i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub>, giving<br><i>n</i><sub>2</sub> = <i>n</i><sub>1</sub>(<i>M</i><sub>1</sub>/<i>M</i><sub>2</sub>)<sup><i>a</i></sup>(<i>L</i><sub>1</sub>/<i>L</i><sub>2</sub>)<sup><i>b</i></sup>(<i>T</i><sub>1</sub>/<i>T</i><sub>2</sub>)<sup><i>c</i></sup>.`,
          `Substitute the unit ratios and compute. Why the powers appear: each base unit "participates" as many times as its exponent in the dimensional formula, so its conversion ratio must be raised to that exponent.`,
        ],
      },
      {
        t: 'p',
        html: `Quick worked conversion — express 1 newton in dynes. Force has dimensions [M L T<sup>−2</sup>], so <i>a</i> = 1, <i>b</i> = 1, <i>c</i> = −2. Going from SI to CGS: <i>M</i><sub>1</sub>/<i>M</i><sub>2</sub> = kg/g = 10<sup>3</sup>, <i>L</i><sub>1</sub>/<i>L</i><sub>2</sub> = m/cm = 10<sup>2</sup>, <i>T</i><sub>1</sub>/<i>T</i><sub>2</sub> = s/s = 1:<br><i>n</i><sub>2</sub> = 1 × (10<sup>3</sup>)<sup>1</sup>(10<sup>2</sup>)<sup>1</sup>(1)<sup>−2</sup> = 10<sup>5</sup>.<br>So 1 N = 10<sup>5</sup> dyne — the same trick as in Subtopic 01, now seen as one of the three pillars of dimensional analysis.`,
      },
      {
        t: 'p',
        html: `<b>Worked derivation (pendulum period).</b> Let us derive how the time period <i>t</i> of a simple pendulum depends on its length <i>ℓ</i>, the bob's mass <i>m</i>, and gravity <i>g</i>. Assume:<br><i>t</i> = <i>C</i> <i>ℓ</i><sup><i>a</i></sup><i>m</i><sup><i>b</i></sup><i>g</i><sup><i>c</i></sup><br>Insert dimensions ([<i>t</i>] = [T], [<i>ℓ</i>] = [L], [<i>m</i>] = [M], [<i>g</i>] = [L T<sup>−2</sup>]):<br>[T] = [L]<sup><i>a</i></sup>[M]<sup><i>b</i></sup>[L T<sup>−2</sup>]<sup><i>c</i></sup> = [M<sup><i>b</i></sup> L<sup><i>a</i>+<i>c</i></sup> T<sup>−2<i>c</i></sup>]<br>Equate powers:<br>M: <i>b</i> = 0, T: −2<i>c</i> = 1 ⇒ <i>c</i> = −½, L: <i>a</i> + <i>c</i> = 0 ⇒ <i>a</i> = ½<br>Therefore:<br><i>t</i> = <i>C</i> <i>ℓ</i><sup>1/2</sup><i>g</i><sup>−1/2</sup> = <i>C</i>√(<i>ℓ</i>/<i>g</i>)<br>Two deep lessons fall out instantly: the period is <b>independent of the bob's mass</b> (<i>b</i> = 0), and it grows as √<i>ℓ</i>. The actual constant <i>C</i> = 2<i>π</i> — which dimensional analysis cannot give us. That gap is the method's signature limitation.`,
      },
      {
        t: 'p',
        html: `<b>A word on when the method breaks down.</b> Procedure 2 works cleanly only when the unknown depends on <b>three or fewer</b> quantities, because we get just three balancing equations (one each from M, L, T). Suppose the drag force on a sphere moving through air were assumed to depend on its radius, its speed, the air's density, and the air's viscosity — that is four unknowns but still only three equations. The system is then under-determined, and dimensional analysis alone cannot pin down a unique answer; we would have to bring in extra physical insight or experiment. Recognising when not to trust the tool is as important as knowing how to use it, and questions testing exactly this judgment appear in JEE Advanced.`,
      },
      { t: 'fig', id: 'p11-01-fig-1.2' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `A student writes the displacement of a particle as <i>s</i> = <i>ut</i> + ½<i>at</i><sup>3</sup>, where <i>u</i> is initial velocity, <i>a</i> is acceleration, and <i>t</i> is time. Check whether this equation is dimensionally correct.`,
        steps: [
          `Step 1 — LHS. Displacement: [<i>s</i>] = [L].`,
          `Step 2 — RHS term by term.<br>• First term: [<i>ut</i>] = [L T<sup>−1</sup>][T] = [L]. ✓ (matches LHS)<br>• Second term: [½<i>at</i><sup>3</sup>] = [L T<sup>−2</sup>][T<sup>3</sup>] = [L T]. ✗ (does <b>not</b> match [L])`,
          `Step 3 — Conclusion. Since the second term has dimensions [L T] while the LHS is [L], the principle of homogeneity is violated.`,
        ],
        ans: `The equation is <b>dimensionally incorrect</b>, so it cannot be physically correct. (The right term should be ½<i>at</i><sup>2</sup>.) This shows how a single dimensional check exposes the error without solving any motion.`,
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: `Which of the following pairs does <b>NOT</b> have the same dimensional formula? (A) Work and Torque (B) Impulse and Momentum (C) Pressure and Stress (D) Force and Surface Tension`,
        steps: [
          `<b>The trap.</b> Surface tension sounds like a force — students see "tension" and instantly pair it with force, ticking some other option. <b>Wrong.</b> Surface tension is force per unit length: [force]/[length] = [M L T<sup>−2</sup>]/[L] = [M T<sup>−2</sup>], whereas force is [M L T<sup>−2</sup>]. They differ by one power of length.`,
          `<b>Fast check of the others:</b> Work and torque are both [M L<sup>2</sup> T<sup>−2</sup>] ✓; impulse and momentum are both [M L T<sup>−1</sup>] ✓; pressure and stress are both [M L<sup>−1</sup> T<sup>−2</sup>] ✓.`,
          `<b>Pitfall to remember:</b> Never judge dimensions by a quantity's name. "Tension" in "surface tension" does not make it a force — always reduce to base dimensions.`,
        ],
        ans: `(D) Force and Surface Tension.`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The speed <i>v</i> of a transverse wave on a stretched string depends on the tension <i>T</i> in the string and the mass per unit length <i>μ</i> of the string. Using dimensional analysis, derive the formula for <i>v</i>. (This blends wave mechanics with dimensional reasoning.)`,
        steps: [
          `Step 1 — Assume a power-law form.<br><i>v</i> = <i>C</i> <i>T</i><sup><i>a</i></sup><i>μ</i><sup><i>b</i></sup>`,
          `Step 2 — Insert dimensions. [<i>v</i>] = [L T<sup>−1</sup>], [<i>T</i>] = [M L T<sup>−2</sup>] (tension is a force), [<i>μ</i>] = [M L<sup>−1</sup>]:<br>[L T<sup>−1</sup>] = [M L T<sup>−2</sup>]<sup><i>a</i></sup>[M L<sup>−1</sup>]<sup><i>b</i></sup> = [M<sup><i>a</i>+<i>b</i></sup> L<sup><i>a</i>−<i>b</i></sup> T<sup>−2<i>a</i></sup>]`,
          `Step 3 — Equate powers (homogeneity).<br>M: <i>a</i> + <i>b</i> = 0, T: −2<i>a</i> = −1 ⇒ <i>a</i> = ½, L: <i>a</i> − <i>b</i> = 1<br>From <i>a</i> = ½ and <i>a</i> + <i>b</i> = 0, we get <i>b</i> = −½ (and this satisfies <i>a</i> − <i>b</i> = 1 ✓).`,
          `Step 4 — Assemble.<br><i>v</i> = <i>C</i> <i>T</i><sup>1/2</sup><i>μ</i><sup>−1/2</sup> = <i>C</i>√(<i>T</i>/<i>μ</i>)`,
        ],
        ans: `<i>v</i> = <i>C</i>√(<i>T</i>/<i>μ</i>). The full physics gives <i>C</i> = 1, but dimensional analysis has already captured the entire structure — that wave speed rises with tension and falls with string heaviness — which is the examiner's real target.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `A self-gravitating spherical cloud of gas pulsates. Its natural frequency of oscillation <i>f</i> is expected to depend on its radius <i>R</i>, its mean density <i>ρ</i>, and the gravitational constant <i>G</i>. Use dimensional analysis to find how <i>f</i> depends on these quantities, and explain the striking result that emerges.`,
        steps: [
          `Step 1 — Assume the power-law.<br><i>f</i> = <i>C</i> <i>R</i><sup><i>a</i></sup><i>ρ</i><sup><i>b</i></sup><i>G</i><sup><i>c</i></sup>`,
          `Step 2 — Dimensions. [<i>f</i>] = [T<sup>−1</sup>], [<i>R</i>] = [L], [<i>ρ</i>] = [M L<sup>−3</sup>], [<i>G</i>] = [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]:<br>[M<sup>0</sup> L<sup>0</sup> T<sup>−1</sup>] = [L]<sup><i>a</i></sup>[M L<sup>−3</sup>]<sup><i>b</i></sup>[M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]<sup><i>c</i></sup> = [M<sup><i>b</i>−<i>c</i></sup> L<sup><i>a</i>−3<i>b</i>+3<i>c</i></sup> T<sup>−2<i>c</i></sup>]`,
          `Step 3 — Equate powers.<br>M: <i>b</i> − <i>c</i> = 0 ⇒ <i>b</i> = <i>c</i><br>T: −2<i>c</i> = −1 ⇒ <i>c</i> = ½, so <i>b</i> = ½<br>L: <i>a</i> − 3<i>b</i> + 3<i>c</i> = 0 ⇒ <i>a</i> − 3<i>b</i> + 3<i>b</i> = 0 ⇒ <i>a</i> = 0`,
          `Step 4 — Assemble.<br><i>f</i> = <i>C</i> <i>R</i><sup>0</sup><i>ρ</i><sup>1/2</sup><i>G</i><sup>1/2</sup> = <i>C</i>√(<i>Gρ</i>)`,
          `<b>Why this is "Advanced":</b> the insight is physical, not just algebraic. It tells us that the pulsation frequency of a self-gravitating body depends only on its density, not its size — a big star and a small star of the same density oscillate at the same rate. This √(<i>Gρ</i>) scaling is genuinely used by astrophysicists to estimate stellar pulsation timescales, and it falls out of pure dimensional reasoning.`,
        ],
        ans: `<i>f</i> = <i>C</i>√(<i>Gρ</i>) — and remarkably, <b>the radius <i>R</i> drops out entirely</b> (<i>a</i> = 0).`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] Find the dimensional formula of (a) coefficient of viscosity and (b) Planck's constant.`,
            a: `(a) [M L<sup>−1</sup> T<sup>−1</sup>] (b) [M L<sup>2</sup> T<sup>−1</sup>]`,
          },
          {
            q: `[NEET] Name a physical quantity whose dimensional formula is [M L<sup>2</sup> T<sup>−2</sup>].`,
            a: `Work / Energy / Torque (any one)`,
          },
          {
            q: `[JEE Main] The escape velocity <i>v</i><sub><i>e</i></sub> of a body from a planet depends on the acceleration due to gravity <i>g</i> at its surface and the planet's radius <i>R</i>. Derive the dependence of <i>v</i><sub><i>e</i></sub> on <i>g</i> and <i>R</i> using dimensional analysis.`,
            a: `<i>v</i><sub><i>e</i></sub> = <i>C</i>√(<i>gR</i>)`,
          },
          {
            q: `[JEE Main] Using dimensional analysis, convert 1 joule into ergs (the CGS unit of energy).`,
            a: `1 J = 10<sup>7</sup> erg`,
          },
          {
            q: `[JEE Advanced] The time period <i>t</i> of small oscillations of a liquid drop depends on its radius <i>r</i>, density <i>ρ</i>, and surface tension <i>S</i>. Use dimensional analysis to derive the form of <i>t</i>.`,
            a: `<i>t</i> = <i>C</i>√(<i>ρr</i><sup>3</sup>/<i>S</i>)`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The dimensional formula [M L<sup>−1</sup> T<sup>−2</sup>] corresponds to which of the following?`,
        opts: [
          {
            label: 'Force',
            nudge: `(A) Force is [M L T<sup>−2</sup>] — students who forget to divide by area pick this.`,
          },
          { label: 'Pressure', nudge: null },
          {
            label: 'Energy',
            nudge: `(C) Energy is [M L<sup>2</sup> T<sup>−2</sup>] — confused by the similar look of the symbols.`,
          },
          {
            label: 'Power',
            nudge: `(D) Power is [M L<sup>2</sup> T<sup>−3</sup>] — chosen by those who muddle the time exponents.`,
          },
        ],
        correct: 1,
        solution: `Pressure (also stress, Young's modulus, energy density) is force per area: [M L T<sup>−2</sup>]/[L<sup>2</sup>] = [M L<sup>−1</sup> T<sup>−2</sup>].`,
      },
      {
        t: 'mcq',
        q: `A given physical equation is found to be dimensionally correct. We can conclude that the equation:`,
        opts: [
          {
            label: 'is definitely physically correct',
            nudge: `(A) is the single most common conceptual error in the chapter — consistency does not prove correctness.`,
          },
          { label: 'may or may not be physically correct', nudge: null },
          { label: 'is definitely wrong', nudge: `(C) is the opposite mistake.` },
          {
            label: 'must contain a dimensionless constant',
            nudge: `(D) is a tempting-sounding statement but false; many correct equations (like <i>v</i> = <i>u</i> + <i>at</i>) have no separate dimensionless constant at all.`,
          },
        ],
        correct: 1,
        solution: `Dimensional correctness is necessary but not sufficient: a missing ½ or an extra dimensionally-identical term passes the check yet makes the equation wrong.`,
      },
      {
        t: 'mcq',
        q: `The principle of dimensional analysis <b>cannot</b> be used to:`,
        opts: [
          {
            label: 'check the correctness of an equation',
            nudge: `(A), (C), and (D) are precisely the three jobs dimensional analysis does perform, so a student who knows the applications eliminates them at once.`,
          },
          { label: 'determine the value of a dimensionless constant', nudge: null },
          {
            label: 'convert units between systems',
            nudge: `(A), (C), and (D) are precisely the three jobs dimensional analysis does perform, so a student who knows the applications eliminates them at once.`,
          },
          {
            label: 'find the dimensional formula of a derived quantity',
            nudge: `(A), (C), and (D) are precisely the three jobs dimensional analysis does perform, so a student who knows the applications eliminates them at once.`,
          },
        ],
        correct: 1,
        solution: `The method is fundamentally blind to pure numbers, so it can never deliver factors like ½ or 2<i>π</i> — this is its defining limitation.`,
      },
      {
        t: 'mcq',
        q: `Which of the following pairs has the <b>same</b> dimensional formula?`,
        opts: [
          {
            label: 'Work and Power',
            nudge: `(A) work [M L<sup>2</sup> T<sup>−2</sup>] vs power [M L<sup>2</sup> T<sup>−3</sup>] differ by a time.`,
          },
          { label: 'Impulse and Momentum', nudge: null },
          { label: 'Force and Pressure', nudge: `(C) force vs pressure differ by an area.` },
          { label: 'Energy and Force', nudge: `(D) energy vs force differ by a length.` },
        ],
        correct: 1,
        solution: `Impulse (= force × time = [M L T<sup>−1</sup>]) and momentum (= mass × velocity = [M L T<sup>−1</sup>]) match exactly — this equality is itself the impulse–momentum theorem in disguise. Each wrong option is a near-miss differing by one base quantity, the classic distractor design.`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Believing "dimensionally correct" means "correct."</b> It only means the equation survives a basic check. The real formula may differ by a numerical factor or contain extra same-dimension terms.`,
          `<b>Forgetting dimensionless constants exist.</b> When you derive a relation, always write the unknown constant <i>C</i> and state explicitly that dimensional analysis cannot evaluate it. Boards expect this caveat.`,
          `<b>Assuming equal dimensions ⟹ same quantity.</b> Work and torque, or energy and torque, share [M L<sup>2</sup> T<sup>−2</sup>] but are physically distinct. Dimensions cannot tell them apart.`,
          `<b>Putting dimensional quantities inside sin, ln, or <i>e</i><sup><i>x</i></sup>.</b> The argument of any trig/log/exponential function must be dimensionless. Spotting sin(<i>ωt</i>) tells you instantly that <i>ωt</i> has no dimensions, so [<i>ω</i>] = [T<sup>−1</sup>].`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> To find the dimensions of an unknown buried in a formula, use homogeneity directly: the unknown must make its term match the others (for added terms) or make a function's argument dimensionless. Example: in <i>y</i> = <i>A</i> sin(<i>kx</i> − <i>ωt</i>), instantly [<i>k</i>] = [L<sup>−1</sup>] and [<i>ω</i>] = [T<sup>−1</sup>] because <i>kx</i> and <i>ωt</i> must be pure numbers. This turns a scary expression into a two-second read.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: `Dimensional formula = the "recipe" [M<sup><i>a</i></sup> L<sup><i>b</i></sup> T<sup><i>c</i></sup>] of a quantity; unit-independent.`,
            note: '',
          },
          { f: 'Principle of homogeneity', note: `every added/equated term must have identical dimensions.` },
          {
            f: 'Three uses',
            note: `(1) check correctness, (2) derive power-law relations, (3) convert units via <i>n</i><sub>1</sub><i>u</i><sub>1</sub> = <i>n</i><sub>2</sub><i>u</i><sub>2</sub>.`,
          },
          {
            f: 'Cannot do',
            note: `find dimensionless constants (½, 2<i>π</i>); handle > 3 variables; produce sums of terms; distinguish same-dimension quantities (work vs torque).`,
          },
          {
            f: 'Golden rule',
            note: `dimensionally correct ⇏ physically correct; but dimensionally wrong ⇒ definitely wrong.`,
          },
          { f: 'Function rule', note: `arguments of sin, cos, ln, <i>e</i><sup><i>x</i></sup> are always dimensionless.` },
          {
            f: 'Must-know',
            note: `Energy/Work/Torque [M L<sup>2</sup> T<sup>−2</sup>]; Power [M L<sup>2</sup> T<sup>−3</sup>]; Pressure/Stress [M L<sup>−1</sup> T<sup>−2</sup>]; <i>G</i> is [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]; <i>h</i> is [M L<sup>2</sup> T<sup>−1</sup>].`,
          },
        ],
        aids: [
          `<b>"Same recipe, different dish"</b> → equal dimensions don't mean equal quantities (work vs torque).`,
          `<b>"Dimensions catch the liar, not the sloppy"</b> → they expose a wrong equation but miss a missing ½.`,
          `<b>"Inside sin, no dimension within."</b>`,
        ],
      },
    ],
  },

  // ───────────────────────────── Topic 03 · pp. 26–34 ─────────────────────────────
  {
    n: '03',
    title: 'Errors in Measurement',
    kalam: 'Mistakes can be eliminated; errors can only be estimated and reduced.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `<b>Exam Relevance:</b> This is a perennial scorer. JEE Main reliably carries 1–2 questions, almost always on combination/propagation of errors (finding the maximum percentage error in a derived quantity). JEE Advanced embeds error analysis inside experiment-based questions. NEET asks 1 question, usually conceptual (accuracy vs precision, or a quick percentage-error calculation). CBSE Boards set a 2–3 mark question on types of errors or computing mean/absolute/percentage error.`,
      },
      {
        t: 'p',
        html: `Picture yourself at a railway station, watching the big platform clock and timing how long a train takes to pull in. You press an imaginary stopwatch when the engine crosses the pole and stop it when the last coach clears. Did you press exactly at the right instants? Of course not — your thumb was a fraction early once, a fraction late the next. No matter how hard you try, your measurement carries a tiny, unavoidable "wrongness." That built-in wrongness is what we call <b>error</b>.<br><br>The very first thing to get straight — and students mix this up constantly — is that <b>error is not the same as a mistake.</b> Writing 7 × 8 = 54 is a mistake; you could have avoided it by being careful. But measuring a desk as 92.3 cm when its true length is 92.34 cm is not carelessness — it's the <b>limit of your instrument and senses.</b> Mistakes can be eliminated; errors can only be estimated and reduced. Accepting this is the whole spirit of experimental physics.`,
      },
      {
        t: 'p',
        html: `So where do errors sneak in? They come in three flavours that behave very differently:<br>• <b>Systematic errors</b> are the consistent, one-directional ones. Imagine a weighing scale that reads 20 g even with nothing on it. Every reading is now 20 g too high — same size, same sign, every single time. Zero errors in a screw gauge, a wrongly calibrated thermometer, a stopwatch that runs slow: all systematic. The good news is that because they're predictable, they can be identified and corrected.<br>• <b>Random errors</b> are the jittery, unpredictable ones — your thumb on the stopwatch, tiny fluctuations in temperature or voltage, slight changes in how you line up your eye. These scatter on both sides of the true value with no fixed pattern. You can't fix a single random error, but you can beat them down by taking many readings and averaging.<br>• <b>Gross errors</b> are plain human blunders — misreading 23 as 32, copying a wrong value, forgetting a unit. We don't model these mathematically; we simply stay alert.`,
      },
      {
        t: 'p',
        html: `There's also a special case worth naming: the <b>least-count error</b>, the smallest amount your instrument can resolve. A metre scale graduated in millimetres simply cannot tell you anything finer than a millimetre, so a single reading carries a least-count uncertainty.<br><br>How do we fight back against all this? Each error type has its own remedy, and matching the cure to the disease is half the skill. Systematic errors are defeated by better technique — checking and removing zero errors, calibrating against a trusted standard, correcting for known biases like temperature drift. Random errors are defeated by repetition — take many readings and average, because the scatter cancels. And least-count error is defeated by choosing a finer instrument: a screw gauge (least count 0.01 mm) beats a vernier (typically 0.1 mm), which beats a plain scale (1 mm). A thoughtful experimenter therefore doesn't just measure — they first ask, "Which kind of error dominates here, and what's the right weapon against it?"<br><br><b>Think about it this way...</b> an archer firing at a target makes the difference between two prized words crystal clear. If all her arrows land in a tight little cluster but off in the top corner, she is <b>precise</b> (arrows agree with each other) but <b>inaccurate</b> (they miss the bull's-eye) — that's systematic error. If her arrows are scattered all around the centre, some left, some right, she is <b>imprecise</b>, but their average may sit right on the bull's-eye — that's random error, which averaging can tame. Burn this picture in: <b>precision = agreement among readings; accuracy = closeness to the truth.</b> A measurement can have one without the other, and examiners adore probing this gap.`,
      },
      {
        t: 'p',
        html: `<b>Limiting Conditions & Assumptions.</b> A few quiet assumptions hold this topic together:<br>• We assume a <b>true value</b> exists even though we can never know it exactly; in practice we treat the <b>arithmetic mean</b> of many readings as our best stand-in. This works only for random errors. If a systematic error is present, the mean is shifted too — and averaging will <b>not</b> rescue you.<br>• The "least count" rule applies to a single reading where no repeated data exists.<br>• The combination-of-error formulas we will derive give the <b>maximum possible error</b> — a deliberately pessimistic, worst-case bound where all the individual errors conspire in the same unlucky direction. The typical error is usually smaller.`,
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: `Let <i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, …, <i>a</i><sub><i>n</i></sub> be <i>n</i> readings of the same quantity.`,
      },
      {
        t: 'formula',
        kicker: 'Mean (best estimate of true value)',
        main: `<i>a</i><sub>mean</sub> = (1/<i>n</i>) ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>a</i><sub><i>i</i></sub>`,
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Absolute error of the i-th reading',
        main: `Δ<i>a</i><sub><i>i</i></sub> = |<i>a</i><sub>mean</sub> − <i>a</i><sub><i>i</i></sub>|`,
        legend: [],
        note: `(same units as the quantity)`,
      },
      {
        t: 'formula',
        kicker: 'Mean absolute error',
        main: `Δ<i>a</i><sub>mean</sub> = (1/<i>n</i>) ∑<sub><i>i</i>=1</sub><sup><i>n</i></sup> Δ<i>a</i><sub><i>i</i></sub>`,
        legend: [],
        note: `Result reported as <i>a</i> = <i>a</i><sub>mean</sub> ± Δ<i>a</i><sub>mean</sub>.`,
      },
      {
        t: 'formula',
        kicker: 'Relative (fractional) error',
        main: `Relative error = Δ<i>a</i><sub>mean</sub>/<i>a</i><sub>mean</sub>`,
        legend: [],
        note: `dimensionless, [M<sup>0</sup> L<sup>0</sup> T<sup>0</sup>]`,
      },
      {
        t: 'formula',
        kicker: 'Percentage error',
        main: `<i>δa</i> = (Δ<i>a</i><sub>mean</sub>/<i>a</i><sub>mean</sub>) × 100%`,
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Least-count error (single reading)',
        main: `absolute error = 1 × (least count)`,
        legend: [],
        note: `unless otherwise stated.`,
      },
      {
        t: 'table',
        title: 'Combination of errors (the heart of exam questions)',
        head: ['Operation', 'Result', 'Rule for error'],
        rows: [
          ['Sum <i>x</i> = <i>a</i> + <i>b</i>', '—', 'Absolute errors add: Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>'],
          ['Difference <i>x</i> = <i>a</i> − <i>b</i>', '—', 'Absolute errors <b>still add</b>: Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>'],
          ['Product <i>x</i> = <i>ab</i>', '—', 'Relative errors add: Δ<i>x</i>/<i>x</i> = Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i>'],
          ['Quotient <i>x</i> = <i>a</i>/<i>b</i>', '—', 'Relative errors add: Δ<i>x</i>/<i>x</i> = Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i>'],
          [
            'Power <i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup><i>c</i><sup>−<i>r</i></sup>',
            '—',
            'Δ<i>x</i>/<i>x</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>',
          ],
        ],
      },
      {
        t: 'p',
        html: `Note the two "surprises" students forget: in a <b>difference</b>, the absolute errors add (not subtract), and in a <b>power</b>, the exponent multiplies the relative error (a square root contributes half).`,
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: `These three derivations are frequently asked for full marks. The single guiding idea is the <b>worst case</b>: we let every individual error push the result in the same direction so that the total error is as large as it can possibly be.`,
      },
      {
        t: 'p',
        html: `<b>Derivation A — Error in a sum (and difference).</b> Let <i>x</i> = <i>a</i> + <i>b</i>, where <i>a</i> and <i>b</i> carry absolute errors ±Δ<i>a</i> and ±Δ<i>b</i>. The measured extremes are (<i>a</i> ± Δ<i>a</i>) and (<i>b</i> ± Δ<i>b</i>), so<br><i>x</i> ± Δ<i>x</i> = (<i>a</i> ± Δ<i>a</i>) + (<i>b</i> ± Δ<i>b</i>) = (<i>a</i> + <i>b</i>) ± (Δ<i>a</i> + Δ<i>b</i>).<br>The largest the error can be occurs when both errors add with the same sign, giving<br>Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>.<br>Now the surprising part — the <b>difference</b> <i>x</i> = <i>a</i> − <i>b</i>:<br><i>x</i> ± Δ<i>x</i> = (<i>a</i> ± Δ<i>a</i>) − (<i>b</i> ± Δ<i>b</i>) = (<i>a</i> − <i>b</i>) ± Δ<i>a</i> ∓ Δ<i>b</i>.<br>Why do the errors still add? Because we must take the <b>worst case</b>: the maximum error happens when Δ<i>a</i> is positive while −(∓Δ<i>b</i>) also acts positively, i.e. the errors reinforce. So even for subtraction,<br>Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i>.<br>This has a sharp practical consequence: subtracting two nearly-equal numbers keeps the absolute error the same but shrinks the result, so the <b>percentage error explodes</b> — a trap we'll see in Example/Practice.`,
      },
      {
        t: 'p',
        html: `<b>Derivation B — Error in a product (and quotient).</b> Let <i>x</i> = <i>ab</i>. Then <i>x</i> ± Δ<i>x</i> = (<i>a</i> ± Δ<i>a</i>)(<i>b</i> ± Δ<i>b</i>). Expanding:<br><i>x</i> ± Δ<i>x</i> = <i>ab</i> ± <i>a</i> Δ<i>b</i> ± <i>b</i> Δ<i>a</i> ± Δ<i>a</i> Δ<i>b</i>.<br>Why drop the last term? Because Δ<i>a</i> Δ<i>b</i> is a product of two tiny quantities — negligibly small compared to the others. Dividing through by <i>x</i> = <i>ab</i>:<br>1 ± Δ<i>x</i>/<i>x</i> = 1 ± Δ<i>b</i>/<i>b</i> ± Δ<i>a</i>/<i>a</i>.<br>Taking the worst case (errors reinforcing):<br>Δ<i>x</i>/<i>x</i> = Δ<i>a</i>/<i>a</i> + Δ<i>b</i>/<i>b</i>.<br>A near-identical argument for <i>x</i> = <i>a</i>/<i>b</i> gives the same result — <b>relative errors add for both multiplication and division.</b>`,
      },
      {
        t: 'p',
        html: `<b>Derivation C — Error in a power.</b> Let <i>x</i> = <i>a</i><sup><i>p</i></sup>. Write it as a repeated product <i>x</i> = <i>a</i> · <i>a</i> ⋯ <i>a</i> (<i>p</i> times). By the product rule, the relative errors of all <i>p</i> identical factors add:<br>Δ<i>x</i>/<i>x</i> = Δ<i>a</i>/<i>a</i> + Δ<i>a</i>/<i>a</i> + ⋯ (<i>p</i> terms) = <i>p</i> Δ<i>a</i>/<i>a</i>.<br>So for a general expression <i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>:<br>Δ<i>x</i>/<i>x</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>.<br>The exponent multiplies the relative error — and a quantity in the denominator contributes with a <b>plus</b> sign (worst case again), never a minus.`,
      },
      {
        t: 'p',
        html: `<b>Putting the rules together — a quick illustration.</b> Suppose a rectangular metal plate has length <i>ℓ</i> = (16.30 ± 0.05) cm and breadth <i>b</i> = (13.80 ± 0.05) cm, and we want its area <i>A</i> = <i>ℓb</i> with uncertainty. Since area is a product, we add relative errors:<br>Δ<i>A</i>/<i>A</i> = Δ<i>ℓ</i>/<i>ℓ</i> + Δ<i>b</i>/<i>b</i> = 0.05/16.30 + 0.05/13.80 = 0.00307 + 0.00362 = 0.00669.<br>The area is <i>A</i> = 16.30 × 13.80 = 224.94 cm<sup>2</sup>, so the absolute uncertainty is Δ<i>A</i> = 0.00669 × 224.94 ≈ 1.5 cm<sup>2</sup>, giving <i>A</i> = (225 ± 2) cm<sup>2</sup> after sensible rounding. Notice how we moved fluidly between relative and absolute error — that fluency is exactly what the rules buy you.`,
      },
      { t: 'fig', id: 'p11-01-fig-1.3' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: `The time period of a simple pendulum is measured five times, giving:<br>2.56 s, 2.54 s, 2.59 s, 2.55 s, 2.51 s. Calculate the mean period, the mean absolute error, the relative error, and the percentage error, and express the result properly.`,
        steps: [
          `Given: five readings, <i>n</i> = 5.`,
          `Step 1 — Mean period.<br><i>T</i><sub>mean</sub> = (2.56 + 2.54 + 2.59 + 2.55 + 2.51)/5 = 12.75/5 = 2.55 s.`,
          `Step 2 — Absolute errors Δ<i>T</i><sub><i>i</i></sub> = |<i>T</i><sub>mean</sub> − <i>T</i><sub><i>i</i></sub>|:<br>0.01, 0.01, 0.04, 0.00, 0.04 (all in s).`,
          `Step 3 — Mean absolute error.<br>Δ<i>T</i><sub>mean</sub> = (0.01 + 0.01 + 0.04 + 0.00 + 0.04)/5 = 0.10/5 = 0.02 s.`,
          `Step 4 — Relative and percentage error.<br>Δ<i>T</i><sub>mean</sub>/<i>T</i><sub>mean</sub> = 0.02/2.55 = 0.0078, <i>δT</i> = 0.0078 × 100% ≈ 0.78%.`,
        ],
        ans: `<i>T</i> = (2.55 ± 0.02) s, with a percentage error of about 0.78%.`,
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: `A quantity is computed as <i>Z</i> = <i>A</i><sup>2</sup><i>B</i>/√<i>C</i>. The percentage errors in <i>A</i>, <i>B</i>, and <i>C</i> are 2%, 1%, and 8% respectively. Find the maximum percentage error in <i>Z</i>.`,
        steps: [
          `<b>The trap.</b> The lazy approach just adds 2 + 1 + 8 = 11% — <b>wrong</b> on two counts: it ignores the square on <i>A</i> and the square root on <i>C</i>.`,
          `<b>Fast solution (apply the power rule mentally).</b><br><i>δZ</i> = 2(<i>δA</i>) + 1(<i>δB</i>) + ½(<i>δC</i>) = 2(2%) + 1% + ½(8%) = 4% + 1% + 4% = 9%.`,
          `<b>Pitfall to remember:</b> Always attach the exponent. A square doubles a quantity's error contribution; a square root halves it. Forgetting this is the single most common NEET/JEE error-analysis slip.`,
        ],
        ans: `The lazy sum of 11% overshoots the true maximum of 9%, and that gap is the trap. The method is what matters: <b>multiply each percentage error by the power of its quantity</b> (√<i>C</i> = <i>C</i><sup>1/2</sup> contributes ½).`,
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: `The density of a small steel sphere is found from its mass and diameter. The mass is measured as <i>m</i> = (50.0 ± 0.1) g and the diameter as <i>d</i> = (2.00 ± 0.01) cm. Find the maximum percentage error in the calculated density. (This combines the geometry of a sphere's volume with error propagation.)`,
        steps: [
          `Step 1 — Set up the formula. Density <i>ρ</i> = <i>m</i>/<i>V</i>, and for a sphere <i>V</i> = (<i>π</i>/6)<i>d</i><sup>3</sup>, so<br><i>ρ</i> = 6<i>m</i>/(<i>πd</i><sup>3</sup>).`,
          `Step 2 — Identify the powers. <i>ρ</i> ∝ <i>m</i><sup>1</sup><i>d</i><sup>−3</sup> (the constant 6/<i>π</i> is exact and contributes no error).`,
          `Step 3 — Apply the power rule.<br>Δ<i>ρ</i>/<i>ρ</i> = 1 · Δ<i>m</i>/<i>m</i> + 3 · Δ<i>d</i>/<i>d</i>.`,
          `Step 4 — Substitute percentage errors.<br>Δ<i>m</i>/<i>m</i> = 0.1/50.0 = 0.2%, Δ<i>d</i>/<i>d</i> = 0.01/2.00 = 0.5%.<br><i>δρ</i> = 0.2% + 3(0.5%) = 0.2% + 1.5% = 1.7%.`,
        ],
        ans: `The maximum percentage error in the density is 1.7%. Notice how the diameter dominates the error budget — because it enters as a cube, its modest 0.5% becomes 1.5%. A clear lesson: in an experiment, measure the highest-power quantity most carefully.`,
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: `Two resistors, <i>R</i><sub>1</sub> = (100 ± 2) Ω and <i>R</i><sub>2</sub> = (200 ± 4) Ω, are connected in <b>parallel</b>. Find the equivalent resistance and its absolute error. (The simple product/quotient rule does not apply directly here — you must use calculus.)`,
        steps: [
          `Step 1 — Equivalent resistance. For parallel resistors,<br>1/<i>R</i> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub> ⇒ <i>R</i> = <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/(<i>R</i><sub>1</sub> + <i>R</i><sub>2</sub>) = (100)(200)/300 = 66.7 Ω.`,
          `Step 2 — Why not the quotient rule? Because <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub> appear in both numerator and denominator in a coupled way; blindly adding relative errors would double-count. The clean route is to <b>differentiate the reciprocal relation</b>, which separates the variables.`,
          `Step 3 — Differentiate 1/<i>R</i> = 1/<i>R</i><sub>1</sub> + 1/<i>R</i><sub>2</sub>. Treating each term:<br>−Δ<i>R</i>/<i>R</i><sup>2</sup> → Δ<i>R</i> = <i>R</i><sup>2</sup>(Δ<i>R</i><sub>1</sub>/<i>R</i><sub>1</sub><sup>2</sup> + Δ<i>R</i><sub>2</sub>/<i>R</i><sub>2</sub><sup>2</sup>),<br>taking magnitudes (worst case, all errors reinforcing).`,
          `Step 4 — Substitute.<br>Δ<i>R</i> = (66.7)<sup>2</sup>(2/(100)<sup>2</sup> + 4/(200)<sup>2</sup>) = 4448.9 (0.0002 + 0.0001) = 4448.9 × 0.0003 ≈ 1.3 Ω.`,
          `<b>Why this is "Advanced":</b> it forces you to recognise when the standard rules fail and to fall back on differentials. The relation Δ<i>R</i> = <i>R</i><sup>2</sup> ∑ Δ<i>R</i><sub><i>i</i></sub>/<i>R</i><sub><i>i</i></sub><sup>2</sup> is exactly how error propagates through any "reciprocals add" situation — parallel resistors, thin-lens combinations, capacitors in series — so this single technique unlocks a whole family of experiment questions.`,
        ],
        ans: `<i>R</i> = (66.7 ± 1.3) Ω.`,
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `[CBSE] The mass of an object is measured five times: 5.12 g, 5.16 g, 5.10 g, 5.14 g, 5.13 g. Find the mean mass, the mean absolute error, and the percentage error.`,
            a: `Mean = 5.13 g, mean absolute error = 0.016 g, <i>δ</i> ≈ 0.31%`,
          },
          {
            q: `[NEET] A quantity is given by <i>Z</i> = <i>A</i><sup>3</sup>/<i>B</i><sup>2</sup>. If the percentage errors in <i>A</i> and <i>B</i> are 1% and 2%, find the maximum percentage error in <i>Z</i>.`,
            a: `7% (from 3(1%) + 2(2%))`,
          },
          {
            q: `[JEE Main] In an experiment, resistance is found from <i>R</i> = <i>V</i>/<i>I</i>, with <i>V</i> = (8.0 ± 0.2) V and <i>I</i> = (2.0 ± 0.1) A. Find <i>R</i> and its maximum percentage error.`,
            a: `<i>R</i> = 4.0 Ω, <i>δR</i> = 7.5%`,
          },
          {
            q: `[JEE Main] A pendulum's period is found by timing 20 oscillations: total time <i>t</i> = (40.0 ± 0.1) s, length <i>L</i> = (80.0 ± 0.1) cm. Using <i>g</i> = 4<i>π</i><sup>2</sup><i>L</i>/<i>T</i><sup>2</sup>, find the maximum percentage error in <i>g</i>.`,
            a: `<i>δg</i> ≈ 0.63% (from <i>δL</i> + 2 <i>δT</i> = 0.125% + 2(0.25%))`,
          },
          {
            q: `[JEE Advanced] Two lengths are measured as <i>a</i> = (5.00 ± 0.02) cm and <i>b</i> = (4.00 ± 0.02) cm. Find the percentage error in the difference <i>x</i> = <i>a</i> − <i>b</i>, and comment on the result.`,
            a: `<i>x</i> = (1.00 ± 0.04) cm, <i>δx</i> = 4% — the percentage error is large because subtracting nearly-equal values shrinks the result while the absolute error stays fixed. <b>Avoid such subtractions in experiment design.</b>`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `Random errors in a measurement can be reduced by:`,
        opts: [
          {
            label: "correcting the instrument's zero error",
            nudge: `(A) zero-error correction and (C) recalibration tackle systematic errors, not random ones — the classic confusion this question targets.`,
          },
          { label: 'taking a large number of readings and averaging', nudge: null },
          {
            label: 'recalibrating the instrument against a standard',
            nudge: `(A) zero-error correction and (C) recalibration tackle systematic errors, not random ones — the classic confusion this question targets.`,
          },
          { label: 'using a clean formula', nudge: `(D) is irrelevant; a formula doesn't reduce measurement scatter.` },
        ],
        correct: 1,
        solution: `Random errors scatter both ways, so their average tends toward zero as readings pile up — averaging is the cure.`,
      },
      {
        t: 'mcq',
        q: `For a quantity <i>R</i> = <i>AB</i>/<i>C</i>, the maximum relative error in <i>R</i> equals:`,
        opts: [
          {
            label: 'the sum of the absolute errors in <i>A</i>, <i>B</i>, <i>C</i>',
            nudge: `(A) wrongly mixes absolute with relative — a dimensional impossibility.`,
          },
          { label: 'the sum of the relative errors in <i>A</i>, <i>B</i>, <i>C</i>', nudge: null },
          {
            label: 'the difference of the relative errors',
            nudge: `(C) is the seductive trap: students think the denominator should "subtract," but worst-case analysis forbids that.`,
          },
          {
            label: 'the product of the relative errors',
            nudge: `(D) confuses adding errors with multiplying quantities.`,
          },
        ],
        correct: 1,
        solution: `For products and quotients, relative errors add (worst case), with the denominator <i>C</i> contributing a <b>plus</b> sign too.`,
      },
      {
        t: 'mcq',
        q: `A measurement is described as having high precision but low accuracy. This most likely indicates:`,
        opts: [
          {
            label: 'large random error, small systematic error',
            nudge: `(A) describes the opposite (imprecise but possibly accurate on average).`,
          },
          { label: 'small random error, large systematic error', nudge: null },
          {
            label: 'both errors large',
            nudge: `(C) and (D) describe neither the "precise" nor the "inaccurate" half correctly.`,
          },
          {
            label: 'both errors negligible',
            nudge: `(C) and (D) describe neither the "precise" nor the "inaccurate" half correctly.`,
          },
        ],
        correct: 1,
        solution: `High precision means readings agree tightly (small random error); low accuracy means they sit far from the truth (large systematic error) — the clustered-but-off archer.`,
      },
      {
        t: 'mcq',
        q: `If a physical quantity is given by <i>Z</i> = <i>A</i><sup><i>n</i></sup>, the relative error in <i>Z</i> is:`,
        opts: [
          { label: 'equal to the relative error in <i>A</i>', nudge: `(A) forgets the exponent entirely.` },
          { label: '<i>n</i> times the relative error in <i>A</i>', nudge: null },
          {
            label: '1/<i>n</i> times the relative error in <i>A</i>',
            nudge: `(C) inverts it (a common slip for roots — but even a root, <i>n</i> = ½, follows rule B).`,
          },
          {
            label: '<i>n</i> times the absolute error in <i>A</i>',
            nudge: `(D) illegally mixes relative on one side with absolute on the other.`,
          },
        ],
        correct: 1,
        solution: `The power rule: an exponent multiplies the relative error, so Δ<i>Z</i>/<i>Z</i> = <i>n</i> (Δ<i>A</i>/<i>A</i>).`,
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Subtracting absolute errors in a difference.</b> For both <i>a</i> + <i>b</i> and <i>a</i> − <i>b</i>, the absolute errors <b>add</b>. The minus sign in the quantity never becomes a minus sign in the error — worst case always reinforces.`,
          `<b>Dropping the power factor.</b> A squared term contributes twice its relative error; a square root contributes half. This is the most frequent JEE/NEET mistake in this topic.`,
          `<b>Comparing absolute errors of different quantities.</b> "0.5 cm is worse than 0.1 s" is meaningless — different units. Convert to <b>percentage error</b> before judging precision.`,
          `<b>Believing averaging fixes everything.</b> Averaging crushes random error but is completely blind to systematic error. A precise but uncalibrated instrument gives a very repeatable wrong answer.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (speed):</b> For any "find the maximum percentage error" problem, never compute absolute errors first. Write the expression as a product of powers, then add percentage errors directly with their exponents: for <i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>, just say <i>δx</i> = <i>p</i> <i>δa</i> + <i>q</i> <i>δb</i> + <i>r</i> <i>δc</i> and plug the numbers. A three-minute calculation collapses to ten seconds. Reserve absolute errors only for sums/differences and for "reciprocals add" cases needing differentials. One more sanity habit: after computing a maximum percentage error, glance at which term contributed most — it is almost always the quantity with the highest power, and that tells you instantly where a real experiment should spend its care.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Error ≠ mistake. Errors are unavoidable; estimate and reduce, never eliminate.', note: '' },
          {
            f: 'Types',
            note: `Systematic (fixed sign, correctable, kills accuracy), Random (random sign, averaged away, kills precision), Gross (blunder), Least-count (1 × LC for a single reading).`,
          },
          {
            f: 'Precision = readings agree with each other; Accuracy = readings close to the true value.',
            note: '',
          },
          {
            f: 'Best estimate = mean',
            note: `<i>a</i><sub>mean</sub> = (1/<i>n</i>) ∑ <i>a</i><sub><i>i</i></sub>; <b>mean absolute error</b> Δ<i>a</i><sub>mean</sub> = (1/<i>n</i>) ∑ |Δ<i>a</i><sub><i>i</i></sub>|.`,
          },
          {
            f: `Relative error = Δ<i>a</i><sub>mean</sub>/<i>a</i><sub>mean</sub> (dimensionless); percentage = (Δ<i>a</i><sub>mean</sub>/<i>a</i><sub>mean</sub>) × 100%.`,
            note: '',
          },
          { f: 'Sum/Difference', note: `absolute errors <b>add</b> (Δ<i>x</i> = Δ<i>a</i> + Δ<i>b</i> for both).` },
          { f: 'Product/Quotient', note: `relative errors <b>add</b>.` },
          {
            f: `Power <i>x</i> = <i>a</i><sup><i>p</i></sup><i>b</i><sup><i>q</i></sup>/<i>c</i><sup><i>r</i></sup>`,
            note: `Δ<i>x</i>/<i>x</i> = <i>p</i> Δ<i>a</i>/<i>a</i> + <i>q</i> Δ<i>b</i>/<i>b</i> + <i>r</i> Δ<i>c</i>/<i>c</i>.`,
          },
          { f: 'All formulas give the worst-case maximum error.', note: '' },
        ],
        aids: [
          `<b>"Plus or minus, errors always add"</b> → even subtraction adds absolute errors.`,
          `<b>"Powers come down to multiply"</b> → exponent × relative error.`,
          `<b>"Average kills the random, calibration kills the systematic."</b>`,
          `<b>"Subtract close numbers → percentage error blows up."</b>`,
        ],
      },
    ],
  },
];
