import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, the four Additional Topics, word for word from the Class 11
 * Physics Master Reference, pages 982 to 996: the addenda's shared opening
 * (p. 982, set at the head of Addendum A), then A Power and Energy in a
 * Travelling Wave on a String (pp. 982 to 985), B Reflection and Transmission
 * at a Junction of Two Strings (pp. 986 to 989), C The Wave Equation, General
 * Solution, and Non-Sinusoidal Pulses (pp. 989 to 992) and D Longitudinal
 * Standing Waves: Rods, End Correction, and Pressure–Displacement Duality
 * (pp. 993 to 996). Each addendum prints its own practice problems and
 * answers, which are its Practice part. The addenda print no drawings; D's
 * rod table is a table block. C's second worked example carries one diagram
 * of our own (p11-14-C-d1).
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Power and Energy in a Travelling Wave on a String',
    extra: true,
    kalam:
      'Kinetic and potential energy densities are equal at every point and every instant.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you the sinusoidal toolkit: <i>y</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i> + <i>φ</i>), <i>v</i> = √(<i>T</i>/<i>μ</i>), standing-wave boundary conditions, beat frequency, and the Doppler formulas for sound and light. Four JEE Advanced patterns live one step past where the chapter stops.<br><br>Addendum A derives the energy and power a travelling wave carries — the chapter quotes particle velocity but never uses it to reach the ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>v</i> result that every “energy in a string” problem expects.<br><br>Addendum B solves the two-string junction: a wave hits a change in <i>μ</i>, and you need the reflected and transmitted amplitudes and energy fractions — the chapter only does fixed and free ends, which are the <i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub> → ∞ and <i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub> → 0 limits of the same algebra.<br><br>Addendum C derives the wave equation ∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> = <i>v</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup> from Newton’s second law, writes the general solution <i>f</i>(<i>x</i> − <i>vt</i>) + <i>g</i>(<i>x</i> + <i>vt</i>), and shows how a non-sinusoidal pulse splits — the chapter only ever writes the harmonic ansatz.<br><br>Addendum D completes the acoustics side: longitudinal standing waves in rods (free–free, fixed–free), the pressure–displacement node/antinode swap, and where the open-end correction <i>e</i> ≈ 0.6 <i>r</i> comes from — the chapter states the correction but never explains it.<br><br>Numbering continues from the chapter’s Topic 04. Nothing here is new physics; every method is the chapter’s Newton’s laws, superposition, or boundary conditions applied one dimension deeper.',
      },
      {
        t: 'p',
        html: 'The chapter gives particle velocity <i>v</i><sub><i>p</i></sub> = ∂<i>y</i>/∂<i>t</i> = <i>Aω</i> cos(<i>ωt</i> − <i>kx</i>) and states (<i>v</i><sub><i>p</i></sub>)<sub>max</sub> = <i>Aω</i>. It never asks: how much energy crosses a point per second? JEE Advanced asks exactly that — average power, instantaneous power, energy density, and the equipartition between kinetic and potential energy in a sine wave. The derivation is a three-line integral that every strong student must be able to reproduce on a blank sheet.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>1. Kinetic energy in a micro-element.</b><br>A string element of length d<i>x</i> has mass d<i>m</i> = <i>μ</i> d<i>x</i>. Its transverse speed is <i>v</i><sub><i>p</i></sub> = ∂<i>y</i>/∂<i>t</i>.<br>d<i>K</i> = ½(<i>μ</i> d<i>x</i>)(∂<i>y</i>/∂<i>t</i>)<sup>2</sup>',
      },
      {
        t: 'p',
        html: '<b>2. Potential energy in the same element.</b><br>The element is stretched from length d<i>x</i> to d<i>s</i> = √(1 + (∂<i>y</i>/∂<i>x</i>)<sup>2</sup>) d<i>x</i> ≈ [1 + ½(∂<i>y</i>/∂<i>x</i>)<sup>2</sup>] d<i>x</i>.<br>The work done against the tension is <i>T</i>(d<i>s</i> − d<i>x</i>) = ½<i>T</i>(∂<i>y</i>/∂<i>x</i>)<sup>2</sup> d<i>x</i>. This is the elastic potential energy:<br>d<i>U</i> = ½<i>T</i>(∂<i>y</i>/∂<i>x</i>)<sup>2</sup> d<i>x</i>',
      },
      {
        t: 'p',
        html: '<b>3. Use the travelling-wave relation.</b><br>For any wave of the form <i>y</i>(<i>x</i>, <i>t</i>) = <i>f</i>(<i>x</i> − <i>vt</i>) or <i>g</i>(<i>x</i> + <i>vt</i>), the chain rule gives ∂<i>y</i>/∂<i>t</i> = ∓<i>v</i> ∂<i>y</i>/∂<i>x</i>.<br>With <i>v</i> = √(<i>T</i>/<i>μ</i>) ⇒ <i>T</i> = <i>μv</i><sup>2</sup>, the potential energy density becomes<br>d<i>U</i>/d<i>x</i> = ½<i>μv</i><sup>2</sup>(∂<i>y</i>/∂<i>x</i>)<sup>2</sup> = ½<i>μ</i>(∂<i>y</i>/∂<i>t</i>)<sup>2</sup> = d<i>K</i>/d<i>x</i><br><b>Kinetic and potential energy densities are equal at every point and every instant</b> — this is the equipartition result for a travelling wave on a string.',
      },
      {
        t: 'p',
        html: '<b>4. Average power transmitted.</b><br>Instantaneous power = energy density × wave speed:<br><i>P</i>(<i>x</i>, <i>t</i>) = (d<i>K</i>/d<i>x</i> + d<i>U</i>/d<i>x</i>)<i>v</i> = <i>μ</i>(∂<i>y</i>/∂<i>t</i>)<sup>2</sup><i>v</i><br>For a harmonic wave <i>y</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i> + <i>φ</i>):<br>∂<i>y</i>/∂<i>t</i> = <i>Aω</i> cos(<i>ωt</i> − <i>kx</i> + <i>φ</i>)<br><i>P</i>(<i>x</i>, <i>t</i>) = <i>μA</i><sup>2</sup><i>ω</i><sup>2</sup><i>v</i> cos<sup>2</sup>(<i>ωt</i> − <i>kx</i> + <i>φ</i>)<br>Average over one period, using ⟨cos<sup>2</sup>(<i>ωt</i> − <i>kx</i> + <i>φ</i>)⟩ = ½:<br><i>P</i><sub>avg</sub> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>v</i><br><b>Units check:</b> <i>μ</i> [kg m<sup>−1</sup>] · <i>ω</i><sup>2</sup> [s<sup>−2</sup>] · <i>A</i><sup>2</sup> [m<sup>2</sup>] · <i>v</i> [m s<sup>−1</sup>] = kg m<sup>2</sup> s<sup>−3</sup> = W.',
      },
      {
        t: 'p',
        html: '<b>5. Total energy in one wavelength.</b><br>Average energy per unit length: ⟨d<i>E</i>/d<i>x</i>⟩ = <i>P</i><sub>avg</sub>/<i>v</i> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup>.<br>Energy in one wavelength <i>λ</i>:<br><i>E</i><sub><i>λ</i></sub> = ⟨d<i>E</i>/d<i>x</i>⟩<i>λ</i> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>λ</i> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup>(2π/<i>k</i>) = π<i>μω</i><sup>2</sup><i>A</i><sup>2</sup>/<i>k</i><br>Using <i>ω</i> = <i>vk</i>: <i>E</i><sub><i>λ</i></sub> = π<i>μvωA</i><sup>2</sup>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A steel wire (<i>μ</i> = 0.02 kg m<sup>−1</sup>) carries a harmonic wave of amplitude 2 mm, frequency 50 Hz, and wave speed 100 m s<sup>−1</sup>. Find (a) the average power transmitted and (b) the energy contained in a 1 m length of the wire.',
        steps: [
          '<b>Given:</b> <i>μ</i> = 0.02 kg m<sup>−1</sup>, <i>A</i> = 2 × 10<sup>−3</sup> m, <i>f</i> = 50 Hz, <i>v</i> = 100 m s<sup>−1</sup>.<br><i>ω</i> = 2π<i>f</i> = 100π rad s<sup>−1</sup>.',
          '<b>(a) Average power:</b><br><i>P</i><sub>avg</sub> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>v</i><br>= ½(0.02)(100π)<sup>2</sup>(2 × 10<sup>−3</sup>)<sup>2</sup>(100)<br>= 0.01 × 10<sup>4</sup>π<sup>2</sup> × 4 × 10<sup>−6</sup> × 100<br>= 0.01 × 10<sup>4</sup> × 4 × 10<sup>−4</sup> × π<sup>2</sup><br>= 0.04π<sup>2</sup> ≈ 0.395 W',
          '<b>(b) Energy in 1 m:</b><br>Average energy per metre = <i>P</i><sub>avg</sub>/<i>v</i> = 0.395/100 = 3.95 × 10<sup>−3</sup> J m<sup>−1</sup>, so a 1 m length holds 3.95 × 10<sup>−3</sup> J.',
          '<b>Check:</b> ⟨d<i>E</i>/d<i>x</i>⟩ = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup> = 0.5 × 0.02 × (100π)<sup>2</sup> × (2 × 10<sup>−3</sup>)<sup>2</sup> = 3.95 × 10<sup>−3</sup> J m<sup>−1</sup>.',
        ],
        ans: '(a) 0.395 W, (b) 3.95 × 10<sup>−3</sup> J.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A sinusoidal wave on a string (<i>μ</i> = 0.1 kg m<sup>−1</sup>, <i>T</i> = 10 N) has amplitude 5 mm. The average power transmitted is 2 W. Find the frequency of the wave.',
        steps: [
          '<b>Given:</b> <i>μ</i> = 0.1 kg m<sup>−1</sup>, <i>T</i> = 10 N, <i>A</i> = 5 × 10<sup>−3</sup> m, <i>P</i><sub>avg</sub> = 2 W.<br>Wave speed: <i>v</i> = √(<i>T</i>/<i>μ</i>) = √(10/0.1) = 10 m s<sup>−1</sup>.',
          '<i>P</i><sub>avg</sub> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>v</i> ⟹ <i>ω</i><sup>2</sup> = 2<i>P</i><sub>avg</sub>/(<i>μA</i><sup>2</sup><i>v</i>)<br><i>ω</i><sup>2</sup> = (2 × 2)/(0.1 × (5 × 10<sup>−3</sup>)<sup>2</sup> × 10)<br>= 4/(0.1 × 25 × 10<sup>−6</sup> × 10)<br>= 4/(25 × 10<sup>−6</sup>) = 1.6 × 10<sup>5</sup> rad<sup>2</sup> s<sup>−2</sup><br><i>ω</i> = 400 rad s<sup>−1</sup><br><i>f</i> = <i>ω</i>/(2π) = 400/(2π)',
        ],
        ans: '<i>f</i> ≈ 63.7 Hz.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A uniform rope of mass <i>M</i> and length <i>L</i> hangs vertically. A harmonic wave of amplitude <i>A</i> and frequency <i>f</i> is generated at the bottom. Assuming no reflection and no dissipation, find how the amplitude of the wave depends on the height <i>x</i> measured from the bottom.',
        steps: [
          '<b>Insight:</b> Power is conserved along the rope (no reflection, no loss). But <i>v</i>(<i>x</i>) changes with <i>x</i>.<br>Linear density <i>μ</i> = <i>M</i>/<i>L</i> (constant). Tension at height <i>x</i>: <i>T</i>(<i>x</i>) = (<i>Mx</i>/<i>L</i>)<i>g</i> = <i>μxg</i>.',
          'Wave speed: <i>v</i>(<i>x</i>) = √(<i>T</i>/<i>μ</i>) = √(<i>gx</i>).<br>Power conservation: <i>P</i>(<i>x</i>) = ½<i>μω</i><sup>2</sup><i>A</i>(<i>x</i>)<sup>2</sup><i>v</i>(<i>x</i>) = constant = <i>P</i><sub>0</sub>.<br>At the very bottom (<i>x</i> → 0) the tension vanishes, so the model breaks down; instead, match to the input amplitude <i>A</i><sub>0</sub> at some small height <i>x</i><sub>0</sub>. But the scaling with <i>x</i> is what JEE asks for:<br><i>A</i>(<i>x</i>)<sup>2</sup><i>v</i>(<i>x</i>) = const ⟹ <i>A</i>(<i>x</i>) ∝ <i>v</i>(<i>x</i>)<sup>−1/2</sup> ∝ <i>x</i><sup>−1/4</sup>',
          '(If the wave were generated at the top and travelled down, <i>x</i> would decrease along the path and the amplitude would grow as <i>x</i><sup>−1/4</sup>.)',
          '<b>Check:</b> As <i>x</i> increases, the tension and the wave speed both increase. For constant power (<i>A</i><sup>2</sup><i>v</i> = const) the amplitude must therefore fall. A wave climbing the rope shrinks in amplitude; one travelling down toward the free end grows.',
        ],
        ans: 'The amplitude <b>decreases</b> as the wave climbs: <i>A</i>(<i>x</i>) = <i>A</i><sub>0</sub>(<i>x</i><sub>0</sub>/<i>x</i>)<sup>1/4</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A string (<i>μ</i> = 0.05 kg m<sup>−1</sup>, <i>T</i> = 20 N) carries a wave <i>y</i> = 0.01 sin(20π<i>t</i> − π<i>x</i>) (SI units). Find the average power transmitted.',
            a: '<i>v</i> = √(20/0.05) = 20 m s<sup>−1</sup>, <i>ω</i> = 20π, <i>k</i> = π, <i>A</i> = 0.01 m. <i>P</i> = ½(0.05)(20π)<sup>2</sup>(0.01)<sup>2</sup>(20) = 0.02π<sup>2</sup> ≈ 0.197 W.',
          },
          {
            q: 'The average power in a wave is 10 W. If the amplitude is doubled and the frequency is halved (<i>μ</i>, <i>T</i> unchanged), what is the new average power?',
            a: '<i>P</i> ∝ <i>A</i><sup>2</sup><i>ω</i><sup>2</sup>. New <i>A</i>′ = 2<i>A</i>, <i>ω</i>′ = <i>ω</i>/2 ⇒ <i>P</i>′ = <i>P</i> × 4 × ¼ = <i>P</i> = 10 W.',
          },
          {
            q: 'Show that for a travelling wave on a string, the instantaneous kinetic energy density equals the instantaneous potential energy density at every point.',
            a: 'Shown in Method steps 1–3; uses ∂<i>y</i>/∂<i>t</i> = ∓<i>v</i> ∂<i>y</i>/∂<i>x</i> and <i>T</i> = <i>μv</i><sup>2</sup>.',
          },
          {
            q: 'A pulse of total energy <i>E</i><sub>0</sub> travels on a string. The string is joined to a second string of twice the linear density (same tension). Find the energy transmitted into the second string. (Use Addendum B’s transmission coefficient.)',
            a: 'From Addendum B: <i>T</i><sub><i>E</i></sub> = 4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup>. Here <i>Z</i><sub>2</sub> = √2 <i>Z</i><sub>1</sub> ⇒ <i>T</i><sub><i>E</i></sub> = 4√2/(1 + √2)<sup>2</sup> ≈ 0.971. Transmitted energy ≈ 0.971 <i>E</i><sub>0</sub>.',
          },
          {
            q: 'A rope of mass 2 kg and length 10 m hangs vertically. A 100 Hz wave of amplitude 1 cm is sent up from the bottom, measured at a height <i>x</i><sub>0</sub> = 1 m above the bottom. Estimate the amplitude at the top. (Use <i>g</i> = 10 m s<sup>−2</sup>.)',
            a: '<i>A</i> ∝ <i>x</i><sup>−1/4</sup>, so <i>A</i>(10)/<i>A</i>(1) = (10/1)<sup>−1/4</sup> ≈ 0.56. Amplitude at the top ≈ 0.56 cm (a decrease). The model is valid only if the wavelength is much smaller than the length scale over which <i>v</i> varies.',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'Reflection and Transmission at a Junction of Two Strings',
    extra: true,
    kalam:
      'JEE Advanced asks for the general case: two strings of different linear densities μ₁, μ₂ joined under the same tension T.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter treats reflection at a fixed end (<i>Z</i><sub>2</sub> → ∞) and a free end (<i>Z</i><sub>2</sub> → 0). JEE Advanced asks for the general case: two strings of different linear densities <i>μ</i><sub>1</sub>, <i>μ</i><sub>2</sub> joined under the same tension <i>T</i>. You need the amplitude reflection coefficient <i>R</i>, the amplitude transmission coefficient <i>T</i><sub><i>A</i></sub>, and the energy transmission coefficient <i>T</i><sub><i>E</i></sub>. The algebra is identical to the electromagnetic wave and transmission-line problem — impedance <i>Z</i> = √(<i>Tμ</i>) plays the role of the refractive index.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>1. Define impedances.</b><br>For a string, the characteristic impedance is <i>Z</i> = √(<i>Tμ</i>) [kg s<sup>−1</sup>].<br>Wave speed <i>v</i> = √(<i>T</i>/<i>μ</i>) = <i>T</i>/<i>Z</i>.',
      },
      {
        t: 'p',
        html: '<b>2. Boundary conditions at the junction (<i>x</i> = 0).</b><br>Let the incident wave be <i>y</i><sub><i>i</i></sub> = <i>A</i><sub><i>i</i></sub> sin(<i>ωt</i> − <i>k</i><sub>1</sub><i>x</i>) (travelling +<i>x</i> in string 1).<br>Reflected wave: <i>y</i><sub><i>r</i></sub> = <i>A</i><sub><i>r</i></sub> sin(<i>ωt</i> + <i>k</i><sub>1</sub><i>x</i> + <i>φ</i><sub><i>r</i></sub>).<br>Transmitted wave: <i>y</i><sub><i>t</i></sub> = <i>A</i><sub><i>t</i></sub> sin(<i>ωt</i> − <i>k</i><sub>2</sub><i>x</i> + <i>φ</i><sub><i>t</i></sub>).<br>Continuity of displacement: <i>y</i><sub><i>i</i></sub>(0) + <i>y</i><sub><i>r</i></sub>(0) = <i>y</i><sub><i>t</i></sub>(0) for all <i>t</i>.<br>Continuity of transverse force (slope): <i>T</i> ∂<i>y</i><sub><i>i</i></sub>/∂<i>x</i>|<sub>0</sub> + <i>T</i> ∂<i>y</i><sub><i>r</i></sub>/∂<i>x</i>|<sub>0</sub> = <i>T</i> ∂<i>y</i><sub><i>t</i></sub>/∂<i>x</i>|<sub>0</sub> (the tension <i>T</i> is the same on both sides).',
      },
      {
        t: 'p',
        html: '<b>3. Solve for coefficients</b> (take <i>φ</i><sub><i>r</i></sub> = <i>φ</i><sub><i>t</i></sub> = 0 or π, absorbed into the sign of the amplitude).<br>Displacement: <i>A</i><sub><i>i</i></sub> + <i>A</i><sub><i>r</i></sub> = <i>A</i><sub><i>t</i></sub>.<br>Slope: −<i>k</i><sub>1</sub><i>A</i><sub><i>i</i></sub> + <i>k</i><sub>1</sub><i>A</i><sub><i>r</i></sub> = −<i>k</i><sub>2</sub><i>A</i><sub><i>t</i></sub> ⇒ −<i>A</i><sub><i>i</i></sub>/<i>v</i><sub>1</sub> + <i>A</i><sub><i>r</i></sub>/<i>v</i><sub>1</sub> = −<i>A</i><sub><i>t</i></sub>/<i>v</i><sub>2</sub>.<br>Multiply the slope equation by <i>T</i> (since <i>T</i>/<i>v</i> = <i>Z</i>): −<i>Z</i><sub>1</sub><i>A</i><sub><i>i</i></sub> + <i>Z</i><sub>1</sub><i>A</i><sub><i>r</i></sub> = −<i>Z</i><sub>2</sub><i>A</i><sub><i>t</i></sub>.<br>Solve the two linear equations:<br><i>A</i><sub><i>r</i></sub> = [(<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)]<i>A</i><sub><i>i</i></sub><br><i>A</i><sub><i>t</i></sub> = [2<i>Z</i><sub>1</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)]<i>A</i><sub><i>i</i></sub><br><b>Amplitude reflection coefficient:</b> <i>R</i> = <i>A</i><sub><i>r</i></sub>/<i>A</i><sub><i>i</i></sub> = (<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>).<br><b>Amplitude transmission coefficient:</b> <i>T</i><sub><i>A</i></sub> = <i>A</i><sub><i>t</i></sub>/<i>A</i><sub><i>i</i></sub> = 2<i>Z</i><sub>1</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>).',
      },
      {
        t: 'p',
        html: '<b>4. Energy (power) coefficients.</b><br>Power ∝ <i>ZA</i><sup>2</sup>, since <i>P</i> = ½<i>μω</i><sup>2</sup><i>A</i><sup>2</sup><i>v</i> = ½<i>Zω</i><sup>2</sup><i>A</i><sup>2</sup>.<br>Reflected power fraction: <i>R</i><sub><i>E</i></sub> = (<i>A</i><sub><i>r</i></sub>/<i>A</i><sub><i>i</i></sub>)<sup>2</sup> = <i>R</i><sup>2</sup>.<br>Transmitted power fraction: <i>T</i><sub><i>E</i></sub> = (<i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub>)(<i>A</i><sub><i>t</i></sub>/<i>A</i><sub><i>i</i></sub>)<sup>2</sup> = (<i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub>)<i>T</i><sub><i>A</i></sub><sup>2</sup>.<br>Substitute <i>T</i><sub><i>A</i></sub>:<br><i>T</i><sub><i>E</i></sub> = (<i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub>)(2<i>Z</i><sub>1</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>))<sup>2</sup> = 4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup><br><b>Check:</b> <i>R</i><sub><i>E</i></sub> + <i>T</i><sub><i>E</i></sub> = (<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)<sup>2</sup>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup> + 4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup> = 1.',
      },
      {
        t: 'p',
        html: '<b>5. Limiting cases (the chapter’s fixed and free ends).</b><br>Fixed end: string 2 is rigid ⇒ <i>Z</i><sub>2</sub> → ∞ ⇒ <i>R</i> → −1 (phase reversal), <i>T</i><sub><i>A</i></sub> → 0.<br>Free end: string 2 massless ⇒ <i>Z</i><sub>2</sub> → 0 ⇒ <i>R</i> → +1 (no phase reversal), <i>T</i><sub><i>A</i></sub> → 2.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two strings of linear densities <i>μ</i><sub>1</sub> = 0.01 kg m<sup>−1</sup> and <i>μ</i><sub>2</sub> = 0.04 kg m<sup>−1</sup> are joined under tension 16 N. A wave of amplitude 3 mm is incident from string 1. Find the amplitudes of the reflected and transmitted waves.',
        steps: [
          '<b>Given:</b> <i>μ</i><sub>1</sub> = 0.01 kg m<sup>−1</sup>, <i>μ</i><sub>2</sub> = 0.04 kg m<sup>−1</sup>, <i>T</i> = 16 N, <i>A</i><sub><i>i</i></sub> = 3 × 10<sup>−3</sup> m.',
          '<i>Z</i><sub>1</sub> = √(<i>Tμ</i><sub>1</sub>) = √(16 × 0.01) = 0.4 kg s<sup>−1</sup><br><i>Z</i><sub>2</sub> = √(<i>Tμ</i><sub>2</sub>) = √(16 × 0.04) = 0.8 kg s<sup>−1</sup><br><i>R</i> = (0.4 − 0.8)/(0.4 + 0.8) = −0.4/1.2 = −⅓<br><i>A</i><sub><i>r</i></sub> = <i>RA</i><sub><i>i</i></sub> = −⅓ × 3 mm = −1 mm   (phase reversal)<br><i>T</i><sub><i>A</i></sub> = (2 × 0.4)/1.2 = ⅔<br><i>A</i><sub><i>t</i></sub> = <i>T</i><sub><i>A</i></sub><i>A</i><sub><i>i</i></sub> = ⅔ × 3 mm = 2 mm',
        ],
        ans: 'Reflected amplitude = 1 mm (inverted), transmitted amplitude = 2 mm.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In the setup of worked example 1, what fraction of the incident power is transmitted into string 2?',
        steps: [
          '<b>Method 1 (direct formula):</b><br><i>T</i><sub><i>E</i></sub> = 4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup> = (4 × 0.4 × 0.8)/(1.2)<sup>2</sup> = 1.28/1.44 = 8/9 ≈ 88.9%',
          '<b>Method 2 (via amplitudes):</b><br>Incident power ∝ <i>Z</i><sub>1</sub><i>A</i><sub><i>i</i></sub><sup>2</sup>. Transmitted power ∝ <i>Z</i><sub>2</sub><i>A</i><sub><i>t</i></sub><sup>2</sup>.<br><i>P</i><sub><i>t</i></sub>/<i>P</i><sub><i>i</i></sub> = (<i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub>)(<i>A</i><sub><i>t</i></sub>/<i>A</i><sub><i>i</i></sub>)<sup>2</sup> = (0.8/0.4) × (2/3)<sup>2</sup> = 2 × 4/9',
        ],
        ans: '8/9 of the incident power.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A pulse of total energy <i>E</i><sub>0</sub> and arbitrary shape travels on string 1 (impedance <i>Z</i><sub>1</sub>) toward a junction with string 2 (impedance <i>Z</i><sub>2</sub>). The pulse is much longer than the junction region. Find the energies of the reflected and transmitted pulses.',
        steps: [
          '<b>Insight:</b> For a pulse, superposition holds at every instant, and the boundary conditions are linear and instantaneous. The coefficients derived for harmonic waves depend only on <i>Z</i><sub>1</sub> and <i>Z</i><sub>2</sub>, not on <i>ω</i> or the pulse shape (non-dispersive medium). Therefore the entire pulse is split with the same amplitude coefficients <i>R</i> and <i>T</i><sub><i>A</i></sub>.',
          'For a travelling wave the power carried is <i>P</i> = <i>Z</i>(∂<i>y</i>/∂<i>t</i>)<sup>2</sup>, so the energy of a pulse passing a point is <i>Z</i> ∫(∂<i>y</i>/∂<i>t</i>)<sup>2</sup> d<i>t</i>. The pulse shape in time is preserved (only scaled), so the energy fractions are exactly the harmonic-wave power fractions:<br><i>E</i><sub><i>r</i></sub> = <i>R</i><sub><i>E</i></sub><i>E</i><sub>0</sub> = ((<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>))<sup>2</sup><i>E</i><sub>0</sub><br><i>E</i><sub><i>t</i></sub> = <i>T</i><sub><i>E</i></sub><i>E</i><sub>0</sub> = [4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup>]<i>E</i><sub>0</sub>',
          '<b>Check:</b> If <i>Z</i><sub>2</sub> = 2<i>Z</i><sub>1</sub> (as in worked example 1), <i>E</i><sub><i>r</i></sub> = (1/3)<sup>2</sup><i>E</i><sub>0</sub> = <i>E</i><sub>0</sub>/9 and <i>E</i><sub><i>t</i></sub> = 8<i>E</i><sub>0</sub>/9. Sum = <i>E</i><sub>0</sub>.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A wave travels from a string (<i>μ</i> = 0.02 kg m<sup>−1</sup>) to a heavier string (<i>μ</i> = 0.18 kg m<sup>−1</sup>) under the same tension 50 N. Find the amplitude reflection coefficient and state whether the reflected pulse is inverted.',
            a: '<i>Z</i><sub>1</sub> = √(50 × 0.02) = 1, <i>Z</i><sub>2</sub> = √(50 × 0.18) = 3 (in kg s<sup>−1</sup>). <i>R</i> = (1 − 3)/(1 + 3) = −0.5. The reflected pulse is inverted (negative sign).',
          },
          {
            q: 'For what ratio <i>μ</i><sub>2</sub>/<i>μ</i><sub>1</sub> is the transmitted power exactly 50%?',
            a: '<i>T</i><sub><i>E</i></sub> = 4<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup> = ½ ⇒ (<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)<sup>2</sup> = 8<i>Z</i><sub>1</sub><i>Z</i><sub>2</sub> ⇒ <i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub> = 3 ± 2√2. Since <i>Z</i> ∝ √<i>μ</i>, <i>μ</i><sub>2</sub>/<i>μ</i><sub>1</sub> = (3 ± 2√2)<sup>2</sup> = 17 ± 12√2.',
          },
          {
            q: 'A pulse approaches a junction from the heavier string side (<i>Z</i><sub>2</sub> > <i>Z</i><sub>1</sub>). Is the reflected pulse inverted? What about the transmitted pulse?',
            a: 'Incident from the heavy side: the incident string has impedance <i>Z</i><sub>2</sub> and the transmitting string has <i>Z</i><sub>1</sub>, so <i>R</i> = (<i>Z</i><sub>2</sub> − <i>Z</i><sub>1</sub>)/(<i>Z</i><sub>2</sub> + <i>Z</i><sub>1</sub>) > 0 ⇒ the reflected pulse is not inverted. The transmitted pulse is never inverted (<i>T</i><sub><i>A</i></sub> > 0 always).',
          },
          {
            q: 'Three strings of impedances <i>Z</i><sub>1</sub>, <i>Z</i><sub>2</sub>, <i>Z</i><sub>3</sub> are joined in series. A wave is incident from string 1. Write the condition on <i>Z</i><sub>2</sub> for zero reflection (impedance matching).',
            a: 'Zero reflection requires <i>Z</i><sub>2</sub> = √(<i>Z</i><sub>1</sub><i>Z</i><sub>3</sub>) (together with a layer thickness of an odd number of quarter-wavelengths in string 2). Here only the impedance condition is asked: <i>Z</i><sub>2</sub> = √(<i>Z</i><sub>1</sub><i>Z</i><sub>3</sub>).',
          },
          {
            q: 'A wave on string 1 (<i>μ</i><sub>1</sub>) hits string 2 (<i>μ</i><sub>2</sub>). The transmitted wave then hits string 3 (again <i>μ</i><sub>1</sub>) after a distance <i>L</i> in string 2. If the round-trip phase in string 2 is 2<i>k</i><sub>2</sub><i>L</i> = π, find the net reflection coefficient back into string 1. (This is a Fabry–Pérot interferometer for strings.)',
            a: 'Multiple reflections in layer 2 give <i>R</i><sub>net</sub> = (<i>R</i><sub>12</sub> + <i>R</i><sub>23</sub><i>e</i><sup>2<i>ik</i>₂<i>L</i></sup>)/(1 + <i>R</i><sub>12</sub><i>R</i><sub>23</sub><i>e</i><sup>2<i>ik</i>₂<i>L</i></sup>). With <i>Z</i><sub>3</sub> = <i>Z</i><sub>1</sub>, <i>R</i><sub>23</sub> = −<i>R</i><sub>12</sub>, and the phase factor is <i>e</i><sup><i>i</i>π</sup> = −1. Writing <i>R</i> = <i>R</i><sub>12</sub> = (<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>):<br><i>R</i><sub>net</sub> = (<i>R</i> + (−<i>R</i>)(−1))/(1 + <i>R</i>(−<i>R</i>)(−1)) = 2<i>R</i>/(1 + <i>R</i><sup>2</sup>).',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'The Wave Equation, General Solution, and Non-Sinusoidal Pulses',
    extra: true,
    kalam: 'The initial profile splits into two half-amplitude copies travelling in opposite directions.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter assumes the sinusoidal form <i>y</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i> + <i>φ</i>). JEE Advanced often gives a pulse shape (triangle, Gaussian, half-sine) and asks for the transverse velocity, the shape at a later time, or the energy. This requires the <b>wave equation</b> and its <b>general solution</b> <i>y</i>(<i>x</i>, <i>t</i>) = <i>f</i>(<i>x</i> − <i>vt</i>) + <i>g</i>(<i>x</i> + <i>vt</i>). We derive the PDE from a free-body analysis like the one in the speed derivation, then show how any initial profile splits into two half-amplitude pulses travelling in opposite directions.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>1. Derive the wave equation (1-D transverse string).</b><br>Consider a small element between <i>x</i> and <i>x</i> + Δ<i>x</i>. Its mass is <i>μ</i> Δ<i>x</i>.<br>Net transverse force: <i>T</i> sin <i>θ</i>(<i>x</i> + Δ<i>x</i>) − <i>T</i> sin <i>θ</i>(<i>x</i>) ≈ <i>T</i>[tan <i>θ</i>(<i>x</i> + Δ<i>x</i>) − tan <i>θ</i>(<i>x</i>)] (small angles).<br>But tan <i>θ</i> = ∂<i>y</i>/∂<i>x</i>. So the net force is <i>T</i>[∂<i>y</i>/∂<i>x</i>|<sub><i>x</i>+Δ<i>x</i></sub> − ∂<i>y</i>/∂<i>x</i>|<sub><i>x</i></sub>] ≈ <i>T</i>(∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup>)Δ<i>x</i>.<br>Newton’s second law:<br><i>μ</i>Δ<i>x</i> ∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> = <i>T</i>(∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup>)Δ<i>x</i><br>∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> = (<i>T</i>/<i>μ</i>) ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup> = <i>v</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup><br><b>Units:</b> ∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> [m s<sup>−2</sup>]; <i>v</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup> [(m<sup>2</sup> s<sup>−2</sup>)(m<sup>−1</sup>)] = m s<sup>−2</sup>.',
      },
      {
        t: 'p',
        html: '<b>2. General solution.</b><br>Change variables: <i>ξ</i> = <i>x</i> − <i>vt</i>, <i>η</i> = <i>x</i> + <i>vt</i>.<br>∂/∂<i>x</i> = ∂/∂<i>ξ</i> + ∂/∂<i>η</i>,   ∂/∂<i>t</i> = −<i>v</i> ∂/∂<i>ξ</i> + <i>v</i> ∂/∂<i>η</i>.<br>∂<sup>2</sup>/∂<i>t</i><sup>2</sup> = <i>v</i><sup>2</sup>(∂<sup>2</sup>/∂<i>ξ</i><sup>2</sup> − 2 ∂<sup>2</sup>/(∂<i>ξ</i> ∂<i>η</i>) + ∂<sup>2</sup>/∂<i>η</i><sup>2</sup>).<br>∂<sup>2</sup>/∂<i>x</i><sup>2</sup> = ∂<sup>2</sup>/∂<i>ξ</i><sup>2</sup> + 2 ∂<sup>2</sup>/(∂<i>ξ</i> ∂<i>η</i>) + ∂<sup>2</sup>/∂<i>η</i><sup>2</sup>.<br>The wave equation becomes:<br><i>v</i><sup>2</sup>(∂<sup>2</sup><i>y</i>/∂<i>ξ</i><sup>2</sup> − 2 ∂<sup>2</sup><i>y</i>/(∂<i>ξ</i>∂<i>η</i>) + ∂<sup>2</sup><i>y</i>/∂<i>η</i><sup>2</sup>) = <i>v</i><sup>2</sup>(∂<sup>2</sup><i>y</i>/∂<i>ξ</i><sup>2</sup> + 2 ∂<sup>2</sup><i>y</i>/(∂<i>ξ</i>∂<i>η</i>) + ∂<sup>2</sup><i>y</i>/∂<i>η</i><sup>2</sup>)<br>Cancel the ∂<sup>2</sup>/∂<i>ξ</i><sup>2</sup>, ∂<sup>2</sup>/∂<i>η</i><sup>2</sup> terms: −4<i>v</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/(∂<i>ξ</i> ∂<i>η</i>) = 0 ⇒ ∂<sup>2</sup><i>y</i>/(∂<i>ξ</i> ∂<i>η</i>) = 0.<br>Integrate: ∂<i>y</i>/∂<i>ξ</i> = <i>F</i>′(<i>ξ</i>) ⇒ <i>y</i> = <i>F</i>(<i>ξ</i>) + <i>G</i>(<i>η</i>).<br><i>y</i>(<i>x</i>, <i>t</i>) = <i>f</i>(<i>x</i> − <i>vt</i>) + <i>g</i>(<i>x</i> + <i>vt</i>)<br><i>f</i> is a right-moving wave, <i>g</i> is a left-moving wave. Any twice-differentiable functions will do.',
      },
      {
        t: 'p',
        html: '<b>3. Initial value problem (d’Alembert’s solution).</b><br>Given <i>y</i>(<i>x</i>, 0) = <i>φ</i>(<i>x</i>) and ∂<i>y</i>/∂<i>t</i> (<i>x</i>, 0) = <i>ψ</i>(<i>x</i>).<br><i>y</i>(<i>x</i>, 0) = <i>f</i>(<i>x</i>) + <i>g</i>(<i>x</i>) = <i>φ</i>(<i>x</i>)<br>(∂<i>y</i>/∂<i>t</i>)(<i>x</i>, 0) = −<i>vf</i>′(<i>x</i>) + <i>vg</i>′(<i>x</i>) = <i>ψ</i>(<i>x</i>)<br>Integrate the second: −<i>vf</i>(<i>x</i>) + <i>vg</i>(<i>x</i>) = ∫<sub>0</sub><sup><i>x</i></sup> <i>ψ</i>(<i>s</i>) d<i>s</i> + <i>C</i>.<br>Solve for <i>f</i> and <i>g</i>:<br><i>f</i>(<i>x</i>) = ½<i>φ</i>(<i>x</i>) − (1/(2<i>v</i>)) ∫<sub>0</sub><sup><i>x</i></sup> <i>ψ</i>(<i>s</i>) d<i>s</i> − <i>C</i>/(2<i>v</i>)<br><i>g</i>(<i>x</i>) = ½<i>φ</i>(<i>x</i>) + (1/(2<i>v</i>)) ∫<sub>0</sub><sup><i>x</i></sup> <i>ψ</i>(<i>s</i>) d<i>s</i> + <i>C</i>/(2<i>v</i>)<br>Solution (the constant <i>C</i> cancels):<br><i>y</i>(<i>x</i>, <i>t</i>) = ½[<i>φ</i>(<i>x</i> − <i>vt</i>) + <i>φ</i>(<i>x</i> + <i>vt</i>)] + (1/(2<i>v</i>)) ∫<sub><i>x</i>−<i>vt</i></sub><sup><i>x</i>+<i>vt</i></sup> <i>ψ</i>(<i>s</i>) d<i>s</i>',
      },
      {
        t: 'p',
        html: '<b>4. Special case: string initially at rest (<i>ψ</i> = 0), plucked into shape <i>φ</i>(<i>x</i>).</b><br><i>y</i>(<i>x</i>, <i>t</i>) = ½<i>φ</i>(<i>x</i> − <i>vt</i>) + ½<i>φ</i>(<i>x</i> + <i>vt</i>)<br>The initial profile splits into two half-amplitude copies travelling in opposite directions. This is the standard way to handle non-sinusoidal pulses in JEE.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A string lies along the <i>x</i>-axis. At <i>t</i> = 0 it is given the shape <i>y</i>(<i>x</i>, 0) = <i>A</i> exp(−<i>x</i><sup>2</sup>/<i>a</i><sup>2</sup>) and released from rest. The wave speed is <i>v</i> = 10 m s<sup>−1</sup>. Write the displacement <i>y</i>(<i>x</i>, <i>t</i>) for all <i>t</i>.',
        steps: [
          '<b>Given:</b> <i>φ</i>(<i>x</i>) = <i>A</i> <i>e</i><sup>−<i>x</i><sup>2</sup>/<i>a</i><sup>2</sup></sup>, <i>ψ</i>(<i>x</i>) = 0.<br>Using d’Alembert for <i>ψ</i> = 0:<br><i>y</i>(<i>x</i>, <i>t</i>) = ½<i>A</i>[<i>e</i><sup>−(<i>x</i>−<i>vt</i>)<sup>2</sup>/<i>a</i><sup>2</sup></sup> + <i>e</i><sup>−(<i>x</i>+<i>vt</i>)<sup>2</sup>/<i>a</i><sup>2</sup></sup>]',
          '<b>Interpretation:</b> The Gaussian splits into two Gaussians of half the amplitude, moving right and left.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        fig: 'p11-14-C-d1',
        q: 'A triangular pulse <i>y</i>(<i>x</i>, 0) = <i>A</i>(1 − |<i>x</i>|/<i>L</i>) for |<i>x</i>| ≤ <i>L</i>, zero elsewhere, is at rest on a string (<i>v</i> = 20 m s<sup>−1</sup>). Sketch the pulse at <i>t</i> = <i>L</i>/(2<i>v</i>) and <i>t</i> = <i>L</i>/<i>v</i>.',
        steps: [
          '<b>Analysis:</b> The pulse splits into two half-height triangles moving at ±<i>v</i>.',
          'At <i>t</i> = 0: peak <i>A</i> at <i>x</i> = 0, base from −<i>L</i> to +<i>L</i>.',
          'At <i>t</i> = <i>L</i>/(2<i>v</i>): the right-moving half has its peak at <i>x</i> = <i>vt</i> = <i>L</i>/2, height <i>A</i>/2; the left-moving half has its peak at <i>x</i> = −<i>L</i>/2, height <i>A</i>/2. They overlap for −<i>L</i>/2 ≤ <i>x</i> ≤ <i>L</i>/2. There each triangle contributes a linearly varying height, (<i>A</i>/2)(½ ± <i>x</i>/<i>L</i>), and the two add to a constant: the overlap region is a <b>flat top of height</b> <i>A</i>/2. Outside the overlap the profile slopes down in a straight line from <i>A</i>/2 to zero at <i>x</i> = ±3<i>L</i>/2.',
          'At <i>t</i> = <i>L</i>/<i>v</i>: the peaks are at <i>x</i> = ±<i>L</i>, height <i>A</i>/2. The triangles no longer overlap (they touch only at <i>x</i> = 0, where both are zero). Two separate triangles of height <i>A</i>/2.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'An infinite string (<i>μ</i> = 0.01 kg m<sup>−1</sup>, <i>T</i> = 1 N) is initially at rest. At <i>t</i> = 0, a transverse impulse gives every particle a velocity <i>v</i><sub><i>p</i></sub>(<i>x</i>, 0) = <i>v</i><sub>0</sub> exp(−<i>x</i><sup>2</sup>/<i>b</i><sup>2</sup>). Find the subsequent displacement <i>y</i>(<i>x</i>, <i>t</i>) and the total energy imparted to the string.',
        steps: [
          '<b>Given:</b> <i>ψ</i>(<i>x</i>) = <i>v</i><sub>0</sub> <i>e</i><sup>−<i>x</i><sup>2</sup>/<i>b</i><sup>2</sup></sup>, <i>φ</i>(<i>x</i>) = 0. <i>v</i> = √(<i>T</i>/<i>μ</i>) = √(1/0.01) = 10 m s<sup>−1</sup>.<br>Use d’Alembert with <i>φ</i> = 0:<br><i>y</i>(<i>x</i>, <i>t</i>) = (1/(2<i>v</i>)) ∫<sub><i>x</i>−<i>vt</i></sub><sup><i>x</i>+<i>vt</i></sup> <i>v</i><sub>0</sub> <i>e</i><sup>−<i>s</i><sup>2</sup>/<i>b</i><sup>2</sup></sup> d<i>s</i> = (<i>v</i><sub>0</sub>/(2<i>v</i>)) ∫<sub><i>x</i>−<i>vt</i></sub><sup><i>x</i>+<i>vt</i></sup> <i>e</i><sup>−<i>s</i><sup>2</sup>/<i>b</i><sup>2</sup></sup> d<i>s</i><br>This is the integral of a Gaussian (an error function).',
          'Total energy = total initial kinetic energy (since the initial potential energy is zero for a flat string):<br><i>E</i> = ∫<sub>−∞</sub><sup>∞</sup> ½<i>μ</i> <i>ψ</i>(<i>x</i>)<sup>2</sup> d<i>x</i> = ½<i>μv</i><sub>0</sub><sup>2</sup> ∫<sub>−∞</sub><sup>∞</sup> <i>e</i><sup>−2<i>x</i><sup>2</sup>/<i>b</i><sup>2</sup></sup> d<i>x</i><br>Gaussian integral: ∫<sub>−∞</sub><sup>∞</sup> <i>e</i><sup>−<i>αx</i><sup>2</sup></sup> d<i>x</i> = √(π/<i>α</i>). Here <i>α</i> = 2/<i>b</i><sup>2</sup>.<br><i>E</i> = ½<i>μv</i><sub>0</sub><sup>2</sup>√(π/(2/<i>b</i><sup>2</sup>)) = ½<i>μv</i><sub>0</sub><sup>2</sup><i>b</i>√(π/2)',
          '<b>Units:</b> <i>μ</i> [kg m<sup>−1</sup>] · <i>v</i><sub>0</sub><sup>2</sup> [m<sup>2</sup> s<sup>−2</sup>] · <i>b</i> [m] = kg m<sup>2</sup> s<sup>−2</sup> = J.',
        ],
        // The book prints no answer line here; the results are in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Derive the 1-D wave equation for longitudinal waves in a rod (Young’s modulus <i>Y</i>, density <i>ρ</i>). Show that <i>v</i> = √(<i>Y</i>/<i>ρ</i>).',
            a: 'Net force on an element of the rod = <i>YA</i>(∂<sup>2</sup><i>ξ</i>/∂<i>x</i><sup>2</sup>)Δ<i>x</i>, mass = <i>ρA</i> Δ<i>x</i> ⇒ ∂<sup>2</sup><i>ξ</i>/∂<i>t</i><sup>2</sup> = (<i>Y</i>/<i>ρ</i>) ∂<sup>2</sup><i>ξ</i>/∂<i>x</i><sup>2</sup>, so <i>v</i> = √(<i>Y</i>/<i>ρ</i>).',
          },
          {
            q: 'A string (<i>v</i> = 5 m s<sup>−1</sup>) has initial displacement <i>y</i>(<i>x</i>, 0) = sin(π<i>x</i>/<i>L</i>) for 0 ≤ <i>x</i> ≤ <i>L</i>, zero elsewhere, and zero initial velocity. Write <i>y</i>(<i>x</i>, <i>t</i>) using d’Alembert.',
            a: '<i>y</i>(<i>x</i>, <i>t</i>) = ½[sin(π(<i>x</i> − 5<i>t</i>)/<i>L</i>) + sin(π(<i>x</i> + 5<i>t</i>)/<i>L</i>)], where each term is nonzero only when its argument <i>x</i> ∓ 5<i>t</i> lies in [0, <i>L</i>].',
          },
          {
            q: 'Show that for any solution of the wave equation, the quantity ∂<i>y</i>/∂<i>t</i> ± <i>v</i> ∂<i>y</i>/∂<i>x</i> is constant along the characteristics <i>x</i> ± <i>vt</i> = const. (These are the Riemann invariants.)',
            a: 'With <i>y</i> = <i>f</i>(<i>x</i> − <i>vt</i>) + <i>g</i>(<i>x</i> + <i>vt</i>): ∂<i>y</i>/∂<i>t</i> + <i>v</i> ∂<i>y</i>/∂<i>x</i> = 2<i>v</i> <i>g</i>′(<i>x</i> + <i>vt</i>), constant along <i>x</i> + <i>vt</i> = const; and ∂<i>y</i>/∂<i>t</i> − <i>v</i> ∂<i>y</i>/∂<i>x</i> = −2<i>v</i> <i>f</i>′(<i>x</i> − <i>vt</i>), constant along <i>x</i> − <i>vt</i> = const.<br>Alternatively: along <i>x</i> ± <i>vt</i> = const, d<i>x</i>/d<i>t</i> = ∓<i>v</i>, so d/d<i>t</i> = ∂/∂<i>t</i> ∓ <i>v</i> ∂/∂<i>x</i>. Applying this to ∂<i>y</i>/∂<i>t</i> ± <i>v</i> ∂<i>y</i>/∂<i>x</i> gives ∂<sup>2</sup><i>y</i>/∂<i>t</i><sup>2</sup> − <i>v</i><sup>2</sup> ∂<sup>2</sup><i>y</i>/∂<i>x</i><sup>2</sup> = 0 by the wave equation.',
          },
          {
            q: 'A pulse <i>f</i> travels right on string 1 (<i>Z</i><sub>1</sub>) toward a junction with string 2 (<i>Z</i><sub>2</sub>). Using the general solution form, derive the reflected pulse shape in string 1 and the transmitted pulse shape in string 2. Show they are scaled versions of <i>f</i>.',
            a: 'At the junction (<i>x</i> = 0) write the three waveforms as functions of time: incident <i>F</i>(<i>t</i>) = <i>f</i>(−<i>v</i><sub>1</sub><i>t</i>), reflected <i>G</i>(<i>t</i>) = <i>g</i>(<i>v</i><sub>1</sub><i>t</i>), transmitted <i>H</i>(<i>t</i>) = <i>h</i>(−<i>v</i><sub>2</sub><i>t</i>).<br>Displacement continuity: <i>F</i> + <i>G</i> = <i>H</i>.<br>Slope continuity: <i>f</i>′ + <i>g</i>′ = <i>h</i>′. Since <i>F</i>′ = −<i>v</i><sub>1</sub><i>f</i>′, <i>G</i>′ = <i>v</i><sub>1</sub><i>g</i>′, <i>H</i>′ = −<i>v</i><sub>2</sub><i>h</i>′, this reads −<i>F</i>′ + <i>G</i>′ = −(<i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>)<i>H</i>′. Integrating, −<i>F</i> + <i>G</i> = −(<i>v</i><sub>1</sub>/<i>v</i><sub>2</sub>)<i>H</i> = −(<i>Z</i><sub>2</sub>/<i>Z</i><sub>1</sub>)<i>H</i>.<br>Solving with <i>F</i> + <i>G</i> = <i>H</i>: <i>G</i> = [(<i>Z</i><sub>1</sub> − <i>Z</i><sub>2</sub>)/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)]<i>F</i> and <i>H</i> = [2<i>Z</i><sub>1</sub>/(<i>Z</i><sub>1</sub> + <i>Z</i><sub>2</sub>)]<i>F</i>. So the reflected and transmitted shapes are the incident shape scaled by <i>R</i> and <i>T</i><sub><i>A</i></sub> (in time the shapes are identical apart from these factors; along the string, the transmitted pulse’s length is stretched by the factor <i>v</i><sub>2</sub>/<i>v</i><sub>1</sub>).',
          },
          {
            q: 'A string fixed at both ends (<i>L</i> = 1 m, <i>v</i> = 100 m s<sup>−1</sup>) is plucked at the centre into a triangle of height 0.01 m. Estimate the time for each half-pulse to travel to its end, reflect, and return to the centre. What is the shape at that instant?',
            a: 'Time for a half-pulse to reach an end: 0.5/100 = 0.005 s. Round trip back to the centre: 0.01 s. At that instant the two reflected (inverted) half-height pulses meet at the centre and add to an inverted triangle of the full height 0.01 m, that is, <i>y</i>(<i>x</i>, <i>T</i>/2) = −<i>y</i>(<i>x</i>, 0).',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Longitudinal Standing Waves: Rods, End Correction, and Pressure–Displacement Duality',
    extra: true,
    kalam:
      'This addendum unifies the boundary conditions through displacement and stress, and explains where the open-end correction e ≈ 0.6 r comes from.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter does standing waves on strings (transverse) and in air columns (longitudinal) but treats them as separate formula lists. JEE Advanced mixes them: a rod clamped at the centre, an open pipe where the end correction matters, or a question asking for the pressure node when the displacement antinode is given. This addendum unifies the boundary conditions through displacement and stress, and explains where the open-end correction <i>e</i> ≈ 0.6 <i>r</i> comes from.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>1. Longitudinal wave variables.</b><br>Displacement <i>ξ</i>(<i>x</i>, <i>t</i>) of a fluid or rod element from equilibrium.<br>Strain = ∂<i>ξ</i>/∂<i>x</i>. Stress = <i>Y</i> × strain (rod, Young’s modulus <i>Y</i>) or −<i>B</i> × strain (gas, bulk modulus <i>B</i>).<br>Pressure variation in a gas: Δ<i>p</i> = −<i>B</i> ∂<i>ξ</i>/∂<i>x</i>. In a rod, force = <i>YA</i> ∂<i>ξ</i>/∂<i>x</i>.<br>Wave equation: ∂<sup>2</sup><i>ξ</i>/∂<i>t</i><sup>2</sup> = <i>v</i><sup>2</sup> ∂<sup>2</sup><i>ξ</i>/∂<i>x</i><sup>2</sup>, with <i>v</i> = √(<i>Y</i>/<i>ρ</i>) (rod) or <i>v</i> = √(<i>B</i>/<i>ρ</i>) (gas).',
      },
      {
        t: 'p',
        html: '<b>2. Boundary conditions — the unified rule.</b><br>At any boundary, two things must match: displacement <i>ξ</i> and stress (force or pressure).<br>• <b>Fixed end / closed pipe end:</b> <i>ξ</i> = 0 (displacement node). Stress is free ⇒ pressure antinode (Δ<i>p</i> maximum).<br>• <b>Free end / open pipe end:</b> stress = 0 ⇒ ∂<i>ξ</i>/∂<i>x</i> = 0 (strain node). Displacement is free ⇒ displacement antinode. Pressure node (Δ<i>p</i> = 0).',
      },
      {
        t: 'p',
        html: '<b>3. Standing wave solutions.</b><br><i>ξ</i>(<i>x</i>, <i>t</i>) = 2<i>A</i> cos(<i>ωt</i>) sin(<i>kx</i>) (node at <i>x</i> = 0) or 2<i>A</i> cos(<i>ωt</i>) cos(<i>kx</i>) (antinode at <i>x</i> = 0).<br>Pressure: Δ<i>p</i> = −<i>B</i> ∂<i>ξ</i>/∂<i>x</i> ∝ −cos(<i>kx</i>) or sin(<i>kx</i>). <b>Displacement node ⇔ pressure antinode</b>, and vice versa.',
      },
      { t: 'p', html: '<b>4. Rods — exact analogies to pipes.</b>' },
      {
        t: 'table',
        title: null,
        head: ['Rod boundary', 'Displacement', 'Stress / force', 'Harmonics'],
        rows: [
          ['Fixed–Fixed', 'Node–Node', 'Antinode–Antinode', '<i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>)<br>(<i>n</i> = 1, 2, 3, …)'],
          ['Free–Free', 'Antinode–Antinode', 'Node–Node', '<i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>)<br>(<i>n</i> = 1, 2, 3, …)'],
          ['Fixed–Free', 'Node–Antinode', 'Antinode–Node', '<i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>)<br>(odd harmonics only)'],
        ],
      },
      {
        t: 'p',
        html: '<b>5. End correction for an open pipe.</b><br>The air just outside an open end is also set in motion, so the effective acoustic length of the pipe is a little more than its geometric length. A simple estimate is due to Rayleigh. Model the mouth of the pipe of radius <i>r</i> as a piston moving with the air in the tube, set in a large flat flange. The air outside flows into the half-space in front of it and carries kinetic energy ½<i>m</i><sub>eff</sub><i>u</i><sup>2</sup>, where <i>u</i> is the piston speed and the effective (added) mass is<br><i>m</i><sub>eff</sub> = (8/3)<i>ρr</i><sup>3</sup><br>(evaluating the flow integral is beyond the syllabus; quote the result).<br>This mass behaves like an extra plug of air in the tube, of cross-section π<i>r</i><sup>2</sup> and length <i>e</i>:<br><i>ρ</i>π<i>r</i><sup>2</sup><i>e</i> = (8/3)<i>ρr</i><sup>3</sup> ⟹ <i>e</i> = (8/(3π))<i>r</i> ≈ 0.85 <i>r</i>   (flanged pipe)<br>The exact flanged value is <i>e</i> = 0.82 <i>r</i>. A pipe with <b>no flange</b> lets the flow spread out more freely, so less air is dragged along, and the exact solution (Levine and Schwinger, 1948) gives the smaller value<br><i>e</i> = 0.6133 <i>r</i> ≈ 0.6 <i>r</i>   (unflanged pipe)<br>This unflanged value is the one the chapter and JEE use. You are expected to know <i>e</i> ≈ 0.6 <i>r</i> and apply it; the derivation is not examinable, but the concept (effective length > geometric length) is.',
      },
      {
        t: 'p',
        html: '<b>Effective length formulas:</b><br>• Open pipe (two open ends): <i>L</i><sub>eff</sub> = <i>L</i> + 2<i>e</i> = <i>L</i> + 1.2 <i>r</i>.<br>• Closed pipe (one open end): <i>L</i><sub>eff</sub> = <i>L</i> + <i>e</i> = <i>L</i> + 0.6 <i>r</i>.<br>Resonance frequencies use <i>L</i><sub>eff</sub>.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A rod of length 1 m, density 8000 kg m<sup>−3</sup>, Young’s modulus 2 × 10<sup>11</sup> Pa is clamped at its centre. Find the fundamental frequency of longitudinal vibration.',
        steps: [
          '<b>Given:</b> <i>L</i> = 1 m. Clamped at the centre ⇒ two Fixed–Free segments of length <i>L</i><sub>seg</sub> = <i>L</i>/2 = 0.5 m.<br>Wave speed: <i>v</i> = √(<i>Y</i>/<i>ρ</i>) = √(2 × 10<sup>11</sup>/8000) = √(2.5 × 10<sup>7</sup>) = 5000 m s<sup>−1</sup>.<br>For a Fixed–Free rod the fundamental is <i>f</i><sub>1</sub> = <i>v</i>/(4<i>L</i><sub>seg</sub>) = 5000/(4 × 0.5) = 2500 Hz.',
        ],
        ans: '2.5 kHz.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An open organ pipe of length 0.48 m and inner radius 2 cm resonates at its fundamental with a tuning fork of frequency 340 Hz. The speed of sound in air is 340 m s<sup>−1</sup>. Find the end correction <i>e</i> and compare it with 0.6 <i>r</i>.',
        steps: [
          '<b>Given:</b> <i>L</i> = 0.48 m, <i>r</i> = 0.02 m, <i>f</i><sub>1</sub> = 340 Hz, <i>v</i> = 340 m s<sup>−1</sup>.<br>Fundamental of an open pipe with end correction: <i>f</i><sub>1</sub> = <i>v</i>/(2(<i>L</i> + 2<i>e</i>)).<br>340 = 340/(2(0.48 + 2<i>e</i>)) ⟹ 0.48 + 2<i>e</i> = 0.5 ⟹ 2<i>e</i> = 0.02 ⟹ <i>e</i> = 0.01 m = 1 cm',
          'The theoretical value is 0.6 <i>r</i> = 0.6 × 0.02 = 0.012 m = 1.2 cm — close.',
        ],
        ans: '<i>e</i> = 1 cm.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A closed organ pipe of length <i>L</i> = 0.8 m and radius <i>r</i> = 0.015 m is sounded. The speed of sound is 330 m s<sup>−1</sup>. (a) Find the fundamental frequency including the end correction. (b) The pipe is now opened at the closed end. Find the new fundamental frequency. (c) The sound in the pipe is a standing wave made of two travelling waves. For each travelling wave, what is the ratio of pressure amplitude to displacement amplitude?',
        steps: [
          '<b>(a) Closed pipe (one open end):</b><br><i>L</i><sub>eff</sub> = <i>L</i> + <i>e</i> = 0.8 + 0.6 × 0.015 = 0.8 + 0.009 = 0.809 m.<br><i>f</i><sub>1</sub> = <i>v</i>/(4<i>L</i><sub>eff</sub>) = 330/(4 × 0.809) = 330/3.236 ≈ 102.0 Hz.',
          '<b>(b) Open pipe (two open ends):</b><br><i>L</i><sub>eff</sub> = <i>L</i> + 2<i>e</i> = 0.8 + 0.018 = 0.818 m.<br><i>f</i>′<sub>1</sub> = <i>v</i>/(2<i>L</i><sub>eff</sub>) = 330/(2 × 0.818) = 330/1.636 ≈ 201.7 Hz.<br>Ratio <i>f</i>′<sub>1</sub>/<i>f</i><sub>1</sub> ≈ 1.98 ≈ 2 (as expected, about an octave higher).',
          '<b>(c) Pressure–displacement relation for a travelling wave:</b><br>Δ<i>p</i> = −<i>B</i> ∂<i>ξ</i>/∂<i>x</i>. For a right-travelling wave <i>ξ</i> = <i>A</i> sin(<i>ωt</i> − <i>kx</i>): ∂<i>ξ</i>/∂<i>x</i> = −<i>kA</i> cos(<i>ωt</i> − <i>kx</i>).<br>Δ<i>p</i> = <i>BkA</i> cos(<i>ωt</i> − <i>kx</i>) = <i>ρv</i><sup>2</sup>(<i>ω</i>/<i>v</i>)<i>A</i> cos(<i>ωt</i> − <i>kx</i>) = <i>ρvωA</i> cos(<i>ωt</i> − <i>kx</i>).<br>Amplitude ratio for each travelling wave: |Δ<i>p</i>|<sub>max</sub>/|<i>ξ</i>|<sub>max</sub> = <i>ρvω</i> = 2π<i>ρvf</i>.<br>(For the standing wave the ratio depends on position: at a displacement antinode such as an open end, Δ<i>p</i> = 0.)',
        ],
        ans: '(a) 102 Hz, (b) 202 Hz, (c) <i>ρvω</i> = 2π<i>ρvf</i>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A steel rod (<i>Y</i> = 2 × 10<sup>11</sup> Pa, <i>ρ</i> = 7800 kg m<sup>−3</sup>) of length 2 m is free at both ends. Find the frequency of the first overtone.',
            a: '<i>v</i> = √(<i>Y</i>/<i>ρ</i>) = √(2 × 10<sup>11</sup>/7800) ≈ 5064 m s<sup>−1</sup>. Free–free: <i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>). Fundamental = 5064/4 ≈ 1266 Hz. First overtone = second harmonic ≈ 2532 Hz.',
          },
          {
            q: 'An open pipe of length 0.6 m and radius 0.02 m has its fundamental at 280 Hz. The speed of sound is 340 m s<sup>−1</sup>. Find the experimental end correction and compare it with 0.6 <i>r</i>.',
            a: '<i>f</i><sub>1</sub> = <i>v</i>/(2(<i>L</i> + 2<i>e</i>)) ⇒ 280 = 340/(2(0.6 + 2<i>e</i>)) ⇒ 0.6 + 2<i>e</i> = 340/560 = 0.6071 ⇒ 2<i>e</i> = 0.0071 ⇒ <i>e</i> ≈ 0.0036 m = 3.6 mm. Theory: 0.6 <i>r</i> = 12 mm. The two differ because <i>e</i> is extremely sensitive to the measured frequency (a 1 Hz change in <i>f</i><sub>1</sub> shifts <i>e</i> by about 1 mm; <i>f</i><sub>1</sub> ≈ 272 Hz would match 0.6 <i>r</i>).',
          },
          {
            q: 'In a standing sound wave in a closed pipe, the displacement amplitude at the antinode is 0.1 mm. The frequency is 500 Hz. Find the pressure amplitude at the closed end. (<i>ρ</i> = 1.2 kg m<sup>−3</sup>, <i>v</i> = 340 m s<sup>−1</sup>.)',
            a: 'At the closed end: displacement node, pressure antinode. With antinode displacement amplitude <i>A</i>, Δ<i>p</i><sub>max</sub> = <i>ρvωA</i> = 1.2 × 340 × (1000π) × 10<sup>−4</sup> = 1.2 × 340 × 0.314 ≈ 128 Pa.',
          },
          {
            q: 'A pipe closed at one end shows resonance at 300 Hz and 500 Hz (no other resonances between them). Find the fundamental and the length (ignore end correction; speed of sound = 340 m s<sup>−1</sup>).',
            a: 'A closed pipe has only odd harmonics: 300 = (2<i>n</i> − 1)<i>f</i><sub>1</sub>, 500 = (2<i>m</i> − 1)<i>f</i><sub>1</sub>. The difference is 200 = 2(<i>m</i> − <i>n</i>)<i>f</i><sub>1</sub>. With no resonance in between, <i>m</i> = <i>n</i> + 1, so 200 = 2<i>f</i><sub>1</sub> ⇒ <i>f</i><sub>1</sub> = 100 Hz.<br><b>Check:</b> 300 = 3 × 100, 500 = 5 × 100. <i>L</i> = <i>v</i>/(4<i>f</i><sub>1</sub>) = 340/400 = 0.85 m.',
          },
          {
            q: 'The acoustic impedance of an unflanged pipe at its open end has a resistive part (radiation resistance) and a reactive part (the end-correction mass). Its low-frequency approximation (quoted; the derivation is beyond the syllabus) is <i>Z</i><sub>rad</sub> ≈ (<i>ρv</i>/(π<i>r</i><sup>2</sup>))[(<i>kr</i>)<sup>2</sup>/4 + <i>i</i> 0.61 <i>kr</i>] for <i>kr</i> ≪ 1. Identify which part is the radiation resistance and which gives the end correction.',
            a: 'For an unflanged pipe, <i>Z</i><sub>rad</sub> ≈ (<i>ρv</i>/(π<i>r</i><sup>2</sup>))[(<i>kr</i>)<sup>2</sup>/4 + <i>i</i> 0.61 <i>kr</i>] for <i>kr</i> ≪ 1. The real part is the radiation resistance, which grows as <i>ω</i><sup>2</sup> (energy leaving as sound). The imaginary part is the mass reactance of an air plug of length <i>e</i> = 0.61 <i>r</i>, which is the end correction. (For a flanged pipe the corresponding result is [(<i>kr</i>)<sup>2</sup>/2 + <i>i</i>(8/(3π))<i>kr</i>], giving <i>e</i> = 0.85 <i>r</i>.)',
          },
        ],
      },
    ],
  },
];
