import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7's four Additional Topics, word for word from the Master Reference
 * book, pages 528 to 544: the addenda's shared opening (p. 528, set at the
 * head of Addendum A), A Potentials You Can Finally Derive, Not Just Quote
 * (pp. 528 to 533), B One Equation for Every Elliptical Orbit: Vis-Viva
 * (pp. 533 to 536), C Planets That Are Not Uniform: Fields from Piecewise and
 * Graded Density (pp. 536 to 540) and D Off the Axes: Arcs at Their Centres,
 * and Tunnels That Miss the Centre (pp. 540 to 544), with the book's closing
 * note (p. 544) at the end of D. No drawings in these pages.
 */
export const TOPICS: Topic[] = [
  {
    n: 'A',
    title: 'Potentials You Can Finally Derive, Not Just Quote',
    extra: true,
    kalam: 'Quoting them is worth one mark; deriving them is worth five.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter taught you the law, the fields of the standard bodies, the variation of <i>g</i>, the potential-energy machinery, the satellite results, and the two-body reduction — and it taught them well. Four examinable patterns are nevertheless still standing outside. Addendum A builds the potentials the chapter states but never derives: the constant interior potential of a shell, the −3<i>GM</i>/(2<i>R</i>) at a sphere’s centre, and the self-energy −3<i>GM</i><sup>2</sup>/(5<i>R</i>) — all three are board and JEE derivation favourites. Addendum B packages the elliptical-orbit calculation the chapter redoes from scratch in every example into one reusable tool, the vis-viva equation. Addendum C breaks the chapter’s silent assumption of uniform density, which is exactly where JEE sets its interior-field problems. Addendum D leaves the symmetry axes: the field of an arc at its centre, and the chord-tunnel theorem that upgrades the chapter’s through-the-centre tunnel to every straight tunnel.<br><br>Nothing here is new theory. Every result is Newton’s law plus integration, run one layer deeper or one symmetry short of the cases the chapter chose.',
      },
      {
        t: 'p',
        html: 'The chapter hands you three results with no derivation: <i>V</i> = −<i>GM</i>/<i>R</i> (a constant) inside a shell, <i>V</i><sub>centre</sub> = −3<i>GM</i>/(2<i>R</i>) for a solid sphere, and <i>U</i><sub>self</sub> = −3<i>GM</i><sup>2</sup>/(5<i>R</i>). CBSE asks for the first two as derivations; JEE Advanced asks for all three embedded in larger problems. Quoting them is worth one mark; deriving them is worth five.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Everything runs on one signed quantity. Define <i>E</i><sub><i>r</i></sub> as the <b>radial component</b> of the field, positive outward. Then<br><i>E</i><sub><i>r</i></sub> = −d<i>V</i>/d<i>r</i>,   <i>V</i>(<i>b</i>) − <i>V</i>(<i>a</i>) = −∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>E</i><sub><i>r</i></sub> d<i>r</i>.',
      },
      {
        t: 'p',
        html: '• <i>E</i><sub><i>r</i></sub> — signed field component, in N/kg; <i>V</i> — potential, in J/kg; <i>r</i> — distance from the centre, in m.<br>• <b>Sign discipline:</b> for attracting matter, <i>E</i><sub><i>r</i></sub> ≤ 0 everywhere: <i>E</i><sub><i>r</i></sub> < 0 outside any body and inside a solid body, while <i>E</i><sub><i>r</i></sub> = 0 inside a hollow shell. If you insert a magnitude where a signed component belongs, the sign of your answer flips silently. Most lost marks in this topic are exactly this error.',
      },
      { t: 'p', html: 'Two engines, chosen by what you already know:' },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Engine 1 — integrate a known field.</b> If <i>E</i><sub><i>r</i></sub>(<i>r</i>) is known on an interval, integrate it. Used for the solid sphere’s interior below.',
          '<b>Engine 2 — integrate contributions directly.</b> If the field is not yet known, add up −<i>G</i> d<i>m</i>/<i>ℓ</i> over mass elements, where <i>ℓ</i> is the element-to-point distance. Used for the shell below.',
        ],
      },
      {
        t: 'p',
        html: 'Every derived formula must pass two checks before you trust it: <b>continuity</b> of <i>V</i> across any boundary, and <i>E</i><sub><i>r</i></sub> = −d<i>V</i>/d<i>r</i> recovering the known field.',
      },

      { t: 'part', title: 'Derivation 1 — Potential of a uniform shell, inside and outside in one integral' },
      {
        t: 'p',
        html: 'Shell of mass <i>M</i>, radius <i>R</i>, surface density <i>σ</i> = <i>M</i>/(4π<i>R</i><sup>2</sup>) (units kg/m<sup>2</sup>). Point <i>P</i> at distance <i>r</i> from the centre. Cut the shell into rings at polar angle <i>θ</i>, width <i>R</i> d<i>θ</i>. Each ring has<br>d<i>A</i> = (2π<i>R</i> sin <i>θ</i>)(<i>R</i> d<i>θ</i>),   d<i>m</i> = <i>σ</i> d<i>A</i> = (<i>M</i>/2) sin <i>θ</i> d<i>θ</i>.',
      },
      {
        t: 'p',
        html: 'Every element of the ring is at the same distance <i>ℓ</i> from <i>P</i>, where by the cosine rule in the triangle centre–element–<i>P</i>,<br><i>ℓ</i> = √(<i>R</i><sup>2</sup> + <i>r</i><sup>2</sup> − 2<i>Rr</i> cos <i>θ</i>).',
      },
      {
        t: 'p',
        html: 'Potential is a scalar, so elements add without any vector resolution:<br><i>V</i> = −<i>G</i> ∫ d<i>m</i>/<i>ℓ</i> = −(<i>GM</i>/2) ∫<sub>0</sub><sup>π</sup> sin <i>θ</i> d<i>θ</i>/√(<i>R</i><sup>2</sup> + <i>r</i><sup>2</sup> − 2<i>Rr</i> cos <i>θ</i>).',
      },
      {
        t: 'p',
        html: 'Substitute <i>u</i> = cos <i>θ</i>, so d<i>u</i> = −sin <i>θ</i> d<i>θ</i>, and the <i>θ</i>-limits 0 → π become <i>u</i>-limits 1 → −1:<br><i>V</i> = −(<i>GM</i>/2) ∫<sub>−1</sub><sup>1</sup> d<i>u</i>/√(<i>R</i><sup>2</sup> + <i>r</i><sup>2</sup> − 2<i>Rru</i>).',
      },
      {
        t: 'p',
        html: 'The antiderivative is −(1/(<i>Rr</i>))√(<i>R</i><sup>2</sup> + <i>r</i><sup>2</sup> − 2<i>Rru</i>), so<br>∫<sub>−1</sub><sup>1</sup> d<i>u</i>/<i>ℓ</i> = −(1/(<i>Rr</i>))[(<i>R</i> − <i>r</i>) − (<i>R</i> + <i>r</i>)] = 2/<i>R</i>,   <i>r</i> < <i>R</i>,<br>using √((<i>R</i> − <i>r</i>)<sup>2</sup>) = <i>R</i> − <i>r</i> because <i>r</i> < <i>R</i>. Therefore<br><i>V</i><sub>inside</sub> = −(<i>GM</i>/2) · 2/<i>R</i> = −<i>GM</i>/<i>R</i>,   constant, for <i>r</i> < <i>R</i>.',
      },
      {
        t: 'p',
        html: 'Repeat with <i>r</i> > <i>R</i>, where √((<i>R</i> − <i>r</i>)<sup>2</sup>) = <i>r</i> − <i>R</i>:<br>∫<sub>−1</sub><sup>1</sup> d<i>u</i>/<i>ℓ</i> = −(1/(<i>Rr</i>))[(<i>r</i> − <i>R</i>) − (<i>R</i> + <i>r</i>)] = 2/<i>r</i>,   <i>V</i><sub>outside</sub> = −<i>GM</i>/<i>r</i>.',
      },
      {
        t: 'p',
        html: 'One integral, both regions. <b>Checks:</b> at <i>r</i> = <i>R</i> both give −<i>GM</i>/<i>R</i> — continuous. Differentiate the outside branch: −(d/d<i>r</i>)(−<i>GM</i>/<i>r</i>) = −<i>GM</i>/<i>r</i><sup>2</sup> = <i>E</i><sub><i>r</i></sub>, the correct inward field in N/kg. Inside, the derivative of a constant is zero — the field vanishes, which is the shell theorem arriving for free.',
      },

      { t: 'part', title: 'Derivation 2 — Interior potential of a uniform solid sphere' },
      {
        t: 'p',
        html: 'Outside, the sphere behaves as a point mass: <i>V</i>(<i>R</i>) = −<i>GM</i>/<i>R</i> at the surface. Inside, the chapter’s field is |<i>E</i>| = <i>GMr</i>/<i>R</i><sup>3</sup>, pointing inward, so the signed component is<br><i>E</i><sub><i>r</i></sub> = −<i>GMr</i>/<i>R</i><sup>3</sup>   (<i>r</i> ≤ <i>R</i>).',
      },
      {
        t: 'p',
        html: 'Integrate inward from the surface using Engine 1:<br><i>V</i>(<i>r</i>) = <i>V</i>(<i>R</i>) − ∫<sub><i>R</i></sub><sup><i>r</i></sup> <i>E</i><sub><i>r</i></sub> d<i>r</i>′ = −<i>GM</i>/<i>R</i> − ∫<sub><i>R</i></sub><sup><i>r</i></sup> (−<i>GMr</i>′/<i>R</i><sup>3</sup>) d<i>r</i>′ = −<i>GM</i>/<i>R</i> + (<i>GM</i>/<i>R</i><sup>3</sup>) · (<i>r</i><sup>2</sup> − <i>R</i><sup>2</sup>)/2.',
      },
      {
        t: 'p',
        html: 'Combining over the common denominator 2<i>R</i><sup>3</sup>:<br><i>V</i>(<i>r</i>) = −(<i>GM</i>/(2<i>R</i><sup>3</sup>))(3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup>),   <i>r</i> ≤ <i>R</i>.',
      },
      {
        t: 'p',
        html: '<b>Checks.</b> At <i>r</i> = <i>R</i>: <i>V</i> = −(<i>GM</i>/(2<i>R</i><sup>3</sup>))(2<i>R</i><sup>2</sup>) = −<i>GM</i>/<i>R</i> — continuous with the outside branch. At the centre: <i>V</i> = −3<i>GM</i>/(2<i>R</i>), the quoted value, and the deepest point. Differentiate:<br>d<i>V</i>/d<i>r</i> = −(<i>GM</i>/(2<i>R</i><sup>3</sup>))(−2<i>r</i>) = +<i>GMr</i>/<i>R</i><sup>3</sup>,   <i>E</i><sub><i>r</i></sub> = −d<i>V</i>/d<i>r</i> = −<i>GMr</i>/<i>R</i><sup>3</sup>,<br>which is exactly the interior field. Units: (N m<sup>2</sup> kg<sup>−2</sup> · kg)/m<sup>3</sup> · m<sup>2</sup> = N m/kg = J/kg, as potential requires.',
      },

      { t: 'part', title: 'Derivation 3 — Self-energy of a uniform sphere, shell by shell' },
      {
        t: 'p',
        html: 'Assemble the sphere from radius 0 outward. When the built portion has radius <i>r</i>, its mass is<br><i>m</i>(<i>r</i>) = (4/3)π<i>r</i><sup>3</sup><i>ρ</i>.<br>Bring in the next shell of thickness d<i>r</i> and mass<br>d<i>m</i> = 4π<i>r</i><sup>2</sup><i>ρ</i> d<i>r</i><br>from infinity. As it arrives, the attractive field does positive work +<i>Gm</i>(<i>r</i>) d<i>m</i>/<i>r</i>, so the energy change of the system is its negative:<br>d<i>U</i> = −(<i>G</i>/<i>r</i>)((4/3)π<i>r</i><sup>3</sup><i>ρ</i>)(4π<i>r</i><sup>2</sup><i>ρ</i> d<i>r</i>) = −(16π<sup>2</sup><i>Gρ</i><sup>2</sup>/3) <i>r</i><sup>4</sup> d<i>r</i>.',
      },
      {
        t: 'p',
        html: 'Integrate from 0 to <i>R</i>:<br><i>U</i><sub>self</sub> = −(16π<sup>2</sup><i>Gρ</i><sup>2</sup>/3) · <i>R</i><sup>5</sup>/5 = −16π<sup>2</sup><i>Gρ</i><sup>2</sup><i>R</i><sup>5</sup>/15.',
      },
      {
        t: 'p',
        html: 'Eliminate <i>ρ</i> using <i>M</i> = (4/3)π<i>R</i><sup>3</sup><i>ρ</i>, so <i>ρ</i><sup>2</sup> = 9<i>M</i><sup>2</sup>/(16π<sup>2</sup><i>R</i><sup>6</sup>):<br><i>U</i><sub>self</sub> = −(16π<sup>2</sup><i>G</i>/15) · 9<i>M</i><sup>2</sup>/(16π<sup>2</sup><i>R</i><sup>6</sup>) · <i>R</i><sup>5</sup> = −3<i>GM</i><sup>2</sup>/(5<i>R</i>).',
      },
      {
        t: 'p',
        html: '<b>Unit check:</b> (N m<sup>2</sup> kg<sup>−2</sup>)(kg<sup>2</sup>)/m = N m = J. <b>Limit check:</b> halve <i>R</i> at fixed <i>M</i> and the binding doubles in magnitude — squeeze a body tighter and it binds harder, the fact that powers stellar collapse.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A particle of mass <i>m</i> = 1000 kg is moved slowly from the centre of the Earth (modelled as uniform, <i>M</i> = 6.0 × 10<sup>24</sup> kg, <i>R</i> = 6.4 × 10<sup>6</sup> m) to the surface. Find the minimum work required.',
        steps: [
          'Slowly means no kinetic energy is gained, so the work done by the external agent equals the rise in potential energy:<br><i>W</i> = <i>m</i>[<i>V</i>(<i>R</i>) − <i>V</i>(0)] = <i>m</i>[−<i>GM</i>/<i>R</i> − (−3<i>GM</i>/(2<i>R</i>))] = <i>GMm</i>/(2<i>R</i>).',
          'Substituting, keeping powers of ten explicit:<br><i>W</i> = (6.67 × 10<sup>−11</sup>)(6.0 × 10<sup>24</sup>)(1.0 × 10<sup>3</sup>)/[2(6.4 × 10<sup>6</sup>)] J.',
          'Numerator: 6.67 × 6.0 = 40.02, and −11 + 24 + 3 = 16, giving 4.00 × 10<sup>17</sup>. Denominator: 1.28 × 10<sup>7</sup>. So<br><i>W</i> = (4.00 × 10<sup>17</sup>)/(1.28 × 10<sup>7</sup>) J ≈ 3.1 × 10<sup>10</sup> J.',
          '<b>Independent cross-check by force integration.</b> At distance <i>s</i> from the centre the inward pull is <i>F</i> = <i>m</i> · <i>gs</i>/<i>R</i> (chapter’s interior field). The agent pulls outward against it, so<br><i>W</i> = ∫<sub>0</sub><sup><i>R</i></sup> (<i>mgs</i>/<i>R</i>) d<i>s</i> = (<i>mg</i>/<i>R</i>) · <i>R</i><sup>2</sup>/2 = <i>mgR</i>/2.',
          'With <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> = (6.67 × 10<sup>−11</sup> × 6.0 × 10<sup>24</sup>)/(6.4 × 10<sup>6</sup>)<sup>2</sup> m/s<sup>2</sup> = 9.77 m/s<sup>2</sup>:<br><i>W</i> = (1000)(9.77)(6.4 × 10<sup>6</sup>)/2 J = 3.1 × 10<sup>10</sup> J.',
          'Two routes, one answer — and notice the work is exactly half of <i>mgR</i>, not <i>mgR</i>: the interior field weakens as you descend, so climbing out from the centre costs less than a surface-to-surface <i>mgh</i> instinct suggests.',
          '<b>Why it is Advanced-level.</b> The naive reflexes both fail: quoting <i>V</i><sub>centre</sub> without derivation earns nothing under “show that,” and applying <i>mgR</i> treats the field as constant when it is not. The mark-winning structure is signed-component integration plus a second, independent route as a check.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CBSE Board / JEE Main Level',
        q: 'Find every point at which the potential of a uniform solid sphere equals half its value at the centre. Express the answer in terms of <i>R</i>.',
        steps: [
          'Half the central value is<br><i>V</i><sub>target</sub> = ½(−3<i>GM</i>/(2<i>R</i>)) = −3<i>GM</i>/(4<i>R</i>).',
          '<b>Try inside first.</b> Set −(<i>GM</i>/(2<i>R</i><sup>3</sup>))(3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup>) = −3<i>GM</i>/(4<i>R</i>) and cancel −<i>GM</i>/<i>R</i> throughout:<br>(3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup>)/(2<i>R</i><sup>2</sup>) = 3/4 ⇒ 3<i>R</i><sup>2</sup> − <i>r</i><sup>2</sup> = 3<i>R</i><sup>2</sup>/2 ⇒ <i>r</i><sup>2</sup> = 3<i>R</i><sup>2</sup>/2 ⇒ <i>r</i> = <i>R</i>√(3/2) ≈ 1.22<i>R</i>.',
          'This exceeds <i>R</i> — the interior formula has been applied where it does not hold, so there is <b>no interior solution</b>. The potential inside only ranges from −3<i>GM</i>/(2<i>R</i>) (centre) to −<i>GM</i>/<i>R</i> (surface), and −3<i>GM</i>/(4<i>R</i>) is above the whole of that range.',
          '<b>Try outside.</b> Solve −<i>GM</i>/<i>r</i> = −3<i>GM</i>/(4<i>R</i>):<br><i>r</i> = 4<i>R</i>/3.',
          'Since 4<i>R</i>/3 > <i>R</i>, this point genuinely lies in the exterior region, where the exterior formula is valid.',
          '<b>Check:</b> <i>V</i>(4<i>R</i>/3) = −<i>GM</i>/(4<i>R</i>/3) = −3<i>GM</i>/(4<i>R</i>), and 4/3 > 1 confirms it is outside. The trap was assuming the answer must lie inside, near the “deep” centre — but potential climbs back toward zero monotonically, so intermediate values live outside.',
        ],
        ans: 'The unique point is at <i>r</i> = 4<i>R</i>/3 from the centre.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Without any integration, state the work required to move a mass <i>m</i> from the surface of a thin spherical shell to its centre, and justify the answer in one line.',
            a: 'Zero: the field inside a shell is zero everywhere, so moving within it requires no work (<i>V</i> is constant at −<i>GM</i>/<i>R</i>).',
          },
          {
            q: 'Two concentric thin shells have masses <i>M</i><sub>1</sub> (radius <i>R</i><sub>1</sub>) and <i>M</i><sub>2</sub> (radius <i>R</i><sub>2</sub> > <i>R</i><sub>1</sub>). Find the potential at the common centre.',
            a: 'Potentials add as scalars:<br><i>V</i> = −<i>GM</i><sub>1</sub>/<i>R</i><sub>1</sub> − <i>GM</i><sub>2</sub>/<i>R</i><sub>2</sub>.<br>Note that each shell contributes −<i>GM</i>/(its own radius): at the centre you are inside both shells, so each term is that shell’s constant interior value, −<i>GM</i><sub>1</sub>/<i>R</i><sub>1</sub> and −<i>GM</i><sub>2</sub>/<i>R</i><sub>2</sub>.',
          },
          {
            q: 'Find all points where the potential of a uniform solid sphere equals its own surface value, other than the surface itself.',
            a: 'Inside, <i>V</i> ranges over [−3<i>GM</i>/(2<i>R</i>), −<i>GM</i>/<i>R</i>]; outside, over [−<i>GM</i>/<i>R</i>, 0); the surface value sits at the junction, attained nowhere else. No other point exists.',
          },
          {
            q: 'Two uniform spheres have the same density <i>ρ</i> and radii <i>R</i> and 2<i>R</i>. Find the ratio of their self-energies.',
            a: '<i>U</i><sub>self</sub> ∝ <i>M</i><sup>2</sup>/<i>R</i> and <i>M</i> ∝ <i>ρR</i><sup>3</sup>, so <i>U</i> ∝ <i>ρ</i><sup>2</sup><i>R</i><sup>5</sup>; the ratio is 1 ∶ 32.',
          },
          {
            q: 'Using Derivation 2, find the potential difference <i>V</i>(<i>R</i>) − <i>V</i>(<i>R</i>/2) inside a uniform sphere, and verify it equals 3<i>GM</i>/(8<i>R</i>).',
            a: '<i>V</i>(<i>R</i>) − <i>V</i>(<i>R</i>/2) = −(<i>GM</i>/(2<i>R</i><sup>3</sup>))(3<i>R</i><sup>2</sup> − <i>R</i><sup>2</sup>) + (<i>GM</i>/(2<i>R</i><sup>3</sup>))(3<i>R</i><sup>2</sup> − <i>R</i><sup>2</sup>/4) = (<i>GM</i>/(2<i>R</i><sup>3</sup>)) · 3<i>R</i><sup>2</sup>/4 = 3<i>GM</i>/(8<i>R</i>).',
          },
        ],
      },
    ],
  },

  {
    n: 'B',
    title: 'One Equation for Every Elliptical Orbit: Vis-Viva',
    extra: true,
    kalam:
      'Addendum B packages the elliptical-orbit calculation the chapter redoes from scratch in every example into one reusable tool, the vis-viva equation.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every elliptical-orbit problem in the chapter — worked example 4 of Topic 05, the practice items — is solved by writing energy and angular momentum afresh and grinding through algebra. JEE Advanced expects that grind once; after that it expects the packaged result. This addendum derives the package.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Work per unit mass (divide everything by the satellite’s mass <i>m</i>). Define<br><i>ε</i> = <i>v</i><sup>2</sup>/2 − <i>GM</i>/<i>r</i>   (specific energy, in J/kg),<br><i>h</i> = <i>rv</i><sub>⊥</sub>   (specific angular momentum, in m<sup>2</sup>/s),<br>where <i>v</i><sub>⊥</sub> is the component of velocity perpendicular to the radius. At the two <b>apsides</b> (perigee and apogee) the velocity is purely transverse, so <i>h</i> = <i>vr</i> exactly there.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — The apsidal quadratic.</b> At an apsis, substitute <i>v</i> = <i>h</i>/<i>r</i> into the energy:<br><i>h</i><sup>2</sup>/(2<i>r</i><sup>2</sup>) − <i>GM</i>/<i>r</i> = <i>ε</i>.<br>Multiply through by <i>r</i><sup>2</sup> and collect:<br><i>εr</i><sup>2</sup> + <i>GMr</i> − <i>h</i><sup>2</sup>/2 = 0.<br>Its two roots are precisely <i>r</i><sub><i>p</i></sub> and <i>r</i><sub><i>a</i></sub>. By Vieta’s formulas:<br><i>r</i><sub><i>p</i></sub> + <i>r</i><sub><i>a</i></sub> = −<i>GM</i>/<i>ε</i>,   <i>r</i><sub><i>p</i></sub><i>r</i><sub><i>a</i></sub> = −<i>h</i><sup>2</sup>/(2<i>ε</i>).',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Read off the semi-major axis.</b> Since <i>a</i> = (<i>r</i><sub><i>p</i></sub> + <i>r</i><sub><i>a</i></sub>)/2:<br><i>ε</i> = −<i>GM</i>/(2<i>a</i>),   i.e.   <i>E</i> = −<i>GMm</i>/(2<i>a</i>)<br>for a satellite of mass <i>m</i> — the chapter’s elliptical-orbit energy, now derived, with units (m<sup>3</sup>/s<sup>2</sup>)/m = m<sup>2</sup>/s<sup>2</sup> = J/kg.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Vis-viva.</b> Substitute Step 2 back into the definition of <i>ε</i> and solve for <i>v</i><sup>2</sup>:<br><i>v</i><sup>2</sup> = <i>GM</i>(2/<i>r</i> − 1/<i>a</i>)<br>valid at every point of the orbit, not just the apsides.',
      },
      {
        t: 'p',
        html: '<b>Built-in sanity checks.</b><br>• Circular orbit: <i>a</i> = <i>r</i> gives <i>v</i><sup>2</sup> = <i>GM</i>/<i>r</i> — the chapter’s <i>v</i><sub><i>o</i></sub>.<br>• Escape threshold: <i>a</i> → ∞ gives <i>v</i><sup>2</sup> = 2<i>GM</i>/<i>r</i> — the escape condition at radius <i>r</i>.<br>• A bound orbit needs <i>ε</i> < 0, i.e. <i>v</i><sup>2</sup> < 2<i>GM</i>/<i>r</i> at every point: the same statement in energy language.',
      },
      {
        t: 'p',
        html: '<b>Procedure for any single-impulse orbit problem:</b> compute <i>ε</i> at the burn point from the given speed; get <i>a</i> = −<i>GM</i>/(2<i>ε</i>); identify whether the burn point is perigee or apogee by comparing <i>r</i> with <i>a</i>; obtain the other apsis from <i>r</i><sub><i>p</i></sub> + <i>r</i><sub><i>a</i></sub> = 2<i>a</i>; obtain the period from Kepler III, <i>T</i> = 2π√(<i>a</i><sup>3</sup>/(<i>GM</i>)).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A satellite is at distance <i>r</i> = 2<i>R</i> from the Earth’s centre, moving tangentially at <i>v</i> = ½√(<i>GM</i>/(2<i>R</i>)) — half the circular speed at that radius. Find the semi-major axis, the other apsis, and the period in terms of the surface-skimming period <i>T</i><sub>0</sub> = 2π√(<i>R</i><sup>3</sup>/(<i>GM</i>)). Comment on the physical fate of this orbit.',
        steps: [
          'Specific energy at the burn point:<br><i>ε</i> = <i>v</i><sup>2</sup>/2 − <i>GM</i>/(2<i>R</i>) = ½ · <i>GM</i>/(8<i>R</i>) − <i>GM</i>/(2<i>R</i>) = (<i>GM</i>/<i>R</i>)(1/16 − 1/2) = −7<i>GM</i>/(16<i>R</i>).',
          'Negative, so the orbit is bound. The semi-major axis:<br><i>a</i> = −<i>GM</i>/(2<i>ε</i>) = −(<i>GM</i>/2) · (−16<i>R</i>/(7<i>GM</i>)) = 8<i>R</i>/7 ≈ 1.14<i>R</i>.',
          'The burn point has <i>r</i> = 2<i>R</i> > <i>a</i>, so it is the <b>apogee</b>. The perigee follows from <i>r</i><sub><i>p</i></sub> + <i>r</i><sub><i>a</i></sub> = 2<i>a</i>:<br><i>r</i><sub><i>p</i></sub> = 2<i>a</i> − <i>r</i><sub><i>a</i></sub> = 16<i>R</i>/7 − 2<i>R</i> = 2<i>R</i>/7 ≈ 0.29<i>R</i>.',
          'Period by Kepler III:<br><i>T</i> = 2π√(<i>a</i><sup>3</sup>/(<i>GM</i>)) = 2π√(<i>R</i><sup>3</sup>/(<i>GM</i>)) (8/7)<sup>3/2</sup> = <i>T</i><sub>0</sub>(8/7)<sup>3/2</sup>.',
          'Numerically (8/7)<sup>3/2</sup> = (8/7)√(8/7) = 1.22, so with <i>T</i><sub>0</sub> ≈ 84.6 min:<br><i>T</i> ≈ 103 min.',
          '<b>Physical verdict — the mark-winning remark.</b> The perigee <i>r</i><sub><i>p</i></sub> = 2<i>R</i>/7 lies well inside the Earth (<i>r</i><sub><i>p</i></sub> < <i>R</i>). The mathematical ellipse dips into the planet, so in reality the satellite never completes it: on its first descent toward perigee it plunges into the atmosphere and strikes the Earth. A tangential de-boost to half of circular speed is not a survivable orbit change. An Advanced answer that notices this outranks one that stops at the algebra.',
          '<b>Check.</b> <i>ε</i> < 0 (bound); <i>a</i> lies between the apsides, 2<i>R</i>/7 < 8<i>R</i>/7 < 2<i>R</i>; slower-than-circular at apogee means the opposite end dives closer.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A satellite in a circular orbit of radius <i>r</i><sub>1</sub> fires its engine once, tangentially, so that its new apogee is exactly 4<i>r</i><sub>1</sub>. Find (a) the speed immediately after the burn as a multiple of the original circular speed <i>v</i><sub><i>c</i>1</sub> = √(<i>GM</i>/<i>r</i><sub>1</sub>), and (b) the speed at apogee as a multiple of the local circular speed there. Show that a second burn is unavoidable.',
        steps: [
          '<b>(a) Speed after the burn.</b> The transfer orbit has apsides <i>r</i><sub>1</sub> and 4<i>r</i><sub>1</sub>, so<br><i>a</i> = (<i>r</i><sub>1</sub> + 4<i>r</i><sub>1</sub>)/2 = 5<i>r</i><sub>1</sub>/2.',
          'Vis-viva at <i>r</i> = <i>r</i><sub>1</sub>:<br><i>v</i><sub>1</sub><sup>2</sup> = <i>GM</i>(2/<i>r</i><sub>1</sub> − 1/<i>a</i>) = <i>GM</i>(2/<i>r</i><sub>1</sub> − 2/(5<i>r</i><sub>1</sub>)) = 8<i>GM</i>/(5<i>r</i><sub>1</sub>).',
          'Therefore<br><i>v</i><sub>1</sub> = √(8/5) <i>v</i><sub><i>c</i>1</sub> ≈ 1.265 <i>v</i><sub><i>c</i>1</sub>.',
          '<b>(b) Speed at apogee.</b> Vis-viva at <i>r</i> = 4<i>r</i><sub>1</sub>:<br><i>v</i><sub><i>a</i></sub><sup>2</sup> = <i>GM</i>(2/(4<i>r</i><sub>1</sub>) − 2/(5<i>r</i><sub>1</sub>)) = <i>GM</i>(1/(10<i>r</i><sub>1</sub>)),   <i>v</i><sub><i>a</i></sub> = √(<i>GM</i>/(10<i>r</i><sub>1</sub>)).',
          'Circular speed at 4<i>r</i><sub>1</sub> would be <i>v</i><sub><i>c</i>2</sub> = √(<i>GM</i>/(4<i>r</i><sub>1</sub>)), so<br><i>v</i><sub><i>a</i></sub>/<i>v</i><sub><i>c</i>2</sub> = √(4/10) = √0.4 ≈ 0.63.',
          'The satellite arrives at <i>r</i> = 4<i>r</i><sub>1</sub> moving at only 63% of the local circular speed — too slow to stay there, so it would fall back along the ellipse. <b>A second, forward burn raising the speed by a factor √2.5 ≈ 1.58 is unavoidable.</b> This is precisely why reaching a higher orbit takes two impulses, not one.',
          '<b>Check.</b> <i>v</i><sub><i>c</i>1</sub> < <i>v</i><sub>1</sub> < <i>v</i><sub><i>e</i></sub> at <i>r</i><sub>1</sub>, since 1 < 8/5 < 2 — fast enough to climb, too slow to escape, exactly a transfer ellipse. And <i>v</i><sub><i>a</i></sub>/<i>v</i><sub>1</sub> = <i>r</i><sub>1</sub>/(4<i>r</i><sub>1</sub>), matching angular momentum conservation <i>rv</i><sub>⊥</sub> = const.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A satellite is at <i>r</i> = 3<i>R</i> moving tangentially at 3/4 of the circular speed there. Show that the orbit survives (both apsides exceed <i>R</i>) and find the perigee.',
            a: '<i>ε</i> = ½ · 9/16 · <i>GM</i>/(3<i>R</i>) − <i>GM</i>/(3<i>R</i>) = (<i>GM</i>/<i>R</i>)(9/96 − 32/96) = −23<i>GM</i>/(96<i>R</i>), so <i>a</i> = 48<i>R</i>/23. The burn point <i>r</i> = 3<i>R</i> > <i>a</i> is the apogee; perigee = 2<i>a</i> − 3<i>R</i> = (96<i>R</i> − 69<i>R</i>)/23 = 27<i>R</i>/23 ≈ 1.17<i>R</i> > <i>R</i> — survivable, unlike the first worked example of this topic.',
          },
          {
            q: 'An object is launched vertically upward from the surface with speed <i>v</i><sub><i>e</i></sub>/2. Find its maximum height above the surface, and reconcile your answer with practice question 2 of Topic 04.',
            a: '<i>ε</i> = ½ · <i>v</i><sub><i>e</i></sub><sup>2</sup>/4 − <i>GM</i>/<i>R</i> = <i>GM</i>/(4<i>R</i>) − <i>GM</i>/<i>R</i> = −3<i>GM</i>/(4<i>R</i>), so <i>a</i> = 2<i>R</i>/3 and the turning point (where <i>v</i> = 0) is at <i>r</i><sub>max</sub> = 2<i>a</i> = 4<i>R</i>/3, giving height <i>R</i>/3. This is the same <i>h</i> = <i>R</i>/3 obtained in the chapter by direct energy conservation — vis-viva reproduces it with less algebra.',
          },
          {
            q: 'A satellite has <i>a</i> = 2<i>R</i>. Find its speed when it passes <i>r</i> = 3<i>R</i>/2.',
            a: '<i>v</i><sup>2</sup> = <i>GM</i>(2/(3<i>R</i>/2) − 1/(2<i>R</i>)) = <i>GM</i>(4/(3<i>R</i>) − 1/(2<i>R</i>)) = 5<i>GM</i>/(6<i>R</i>), so <i>v</i> = √(5<i>GM</i>/(6<i>R</i>)).',
          },
          {
            q: 'Two satellites of the same planet have semi-major axes in ratio 1 ∶ 4. Find the ratio of their periods.',
            a: '<i>T</i> ∝ <i>a</i><sup>3/2</sup>, so 1 ∶ 8.',
          },
          {
            q: 'Show from vis-viva that the speed at perigee of any bound ellipse is <i>v</i><sub><i>p</i></sub> = √(<i>GM</i>(1 + <i>e</i>)/[<i>a</i>(1 − <i>e</i>)]), where <i>e</i> is the eccentricity defined by <i>r</i><sub><i>p</i></sub> = <i>a</i>(1 − <i>e</i>).',
            a: 'Put <i>r</i> = <i>r</i><sub><i>p</i></sub> = <i>a</i>(1 − <i>e</i>) in vis-viva:<br><i>v</i><sub><i>p</i></sub><sup>2</sup> = <i>GM</i>(2/[<i>a</i>(1 − <i>e</i>)] − 1/<i>a</i>) = (<i>GM</i>/<i>a</i>) · [2 − (1 − <i>e</i>)]/(1 − <i>e</i>) = <i>GM</i>(1 + <i>e</i>)/[<i>a</i>(1 − <i>e</i>)].<br>As <i>e</i> → 0 this reduces to the circular speed √(<i>GM</i>/<i>a</i>); as <i>e</i> → 1 at fixed perigee distance it approaches the parabolic escape speed √(2<i>GM</i>/<i>r</i><sub><i>p</i></sub>).',
          },
        ],
      },
    ],
  },

  {
    n: 'C',
    title: 'Planets That Are Not Uniform: Fields from Piecewise and Graded Density',
    extra: true,
    kalam:
      'Addendum C breaks the chapter’s silent assumption of uniform density, which is exactly where JEE sets its interior-field problems.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Every interior result in the chapter — <i>GMr</i>/<i>R</i><sup>3</sup>, the depth formula, the tunnel oscillation — quietly assumes uniform density. JEE breaks that assumption constantly: layered planets, cores denser than mantles, densities graded as functions of <i>r</i>. The chapter even admits the real Earth is like this (its <i>g</i> initially rises with depth) without telling you how to compute it. Here is the machinery.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Spherical symmetry is the only licence needed. For any density profile <i>ρ</i>(<i>r</i>) (units kg/m<sup>3</sup>):',
      },
      {
        t: 'proc',
        title: 'Method',
        steps: [
          '<b>Enclosed mass.</b> Only the mass interior to radius <i>r</i> contributes (shells above contribute zero — the chapter’s rule, unchanged). With a varying density you must integrate rather than scale:<br><i>M</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> 4π<i>r</i>′<sup>2</sup> <i>ρ</i>(<i>r</i>′) d<i>r</i>′.',
          '<b>Interior field.</b><br>|<i>E</i>(<i>r</i>)| = <i>GM</i><sub>enc</sub>(<i>r</i>)/<i>r</i><sup>2</sup>,<br>directed radially inward. Units: (N m<sup>2</sup> kg<sup>−2</sup>)(kg)/m<sup>2</sup> = N/kg.',
          '<b>Exterior field.</b> Beyond the surface, <i>M</i><sub>enc</sub> freezes at the total mass <i>M</i> and |<i>E</i>| = <i>GM</i>/<i>r</i><sup>2</sup> as usual.',
          '<b>Continuity audit.</b> <i>E</i>(<i>r</i>) is continuous across any density jump (there is no infinitely thin sheet of mass at the interface), but its slope d<i>E</i>/d<i>r</i> generally jumps. If your graph of <i>E</i> versus <i>r</i> has a break, you have made an error.',
          '<b>Extrema.</b> To find where <i>g</i> peaks inside, differentiate <i>M</i><sub>enc</sub>(<i>r</i>)/<i>r</i><sup>2</sup> and set the derivative to zero.',
        ],
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A planet of radius <i>R</i> consists of a uniform core of radius <i>R</i>/2 and density 2<i>ρ</i><sub>0</sub>, surrounded by a uniform mantle of density <i>ρ</i><sub>0</sub>. Take <i>ρ</i><sub>0</sub> = 5500 kg/m<sup>3</sup>, <i>R</i> = 6.4 × 10<sup>6</sup> m. Find <i>g</i> (a) at the interface, (b) at <i>r</i> = 3<i>R</i>/4, and (c) at the surface. Compare with the uniform-<i>ρ</i><sub>0</sub> planet throughout.',
        steps: [
          'Let <i>M</i><sub><i>u</i></sub> = (4/3)π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup> denote the mass of a hypothetical uniform-<i>ρ</i><sub>0</sub> planet, for which the surface field would be <i>g</i><sub><i>u</i></sub> = (4/3)π<i>Gρ</i><sub>0</sub><i>R</i>.',
          '<b>(a) Interface, <i>r</i> = <i>R</i>/2.</b> Only the core is enclosed:<br><i>M</i><sub>enc</sub> = (4/3)π(2<i>ρ</i><sub>0</sub>)(<i>R</i>/2)<sup>3</sup> = (4/3)π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup> · 2/8 = <i>M</i><sub><i>u</i></sub>/4.<br>Then<br><i>g</i> = <i>G</i>(<i>M</i><sub><i>u</i></sub>/4)/(<i>R</i>/2)<sup>2</sup> = <i>GM</i><sub><i>u</i></sub>/<i>R</i><sup>2</sup> = <i>g</i><sub><i>u</i></sub>.',
          'From the mantle side the enclosed mass at the same radius is identical, so the field is continuous — as Method step 4 demands. Numerically:<br><i>g</i><sub><i>u</i></sub> = (4/3)π(6.67 × 10<sup>−11</sup>)(5500)(6.4 × 10<sup>6</sup>) m/s<sup>2</sup>.',
          'Chain the products: 6.67 × 10<sup>−11</sup> × 5500 = 3.67 × 10<sup>−7</sup>; × 6.4 × 10<sup>6</sup> = 2.35; × 4π/3 = 9.83. So<br><i>g</i>(<i>R</i>/2) = <i>g</i><sub><i>u</i></sub> = 9.83 m/s<sup>2</sup>.',
          '<b>(b) Mid-mantle, <i>r</i> = 3<i>R</i>/4.</b> Core plus the inner part of the mantle:<br><i>M</i><sub>enc</sub> = (4/3)π(2<i>ρ</i><sub>0</sub>)(<i>R</i>/2)<sup>3</sup> + (4/3)π<i>ρ</i><sub>0</sub>[(3<i>R</i>/4)<sup>3</sup> − (<i>R</i>/2)<sup>3</sup>].',
          'Convert to sixty-fourths of <i>M</i><sub><i>u</i></sub>: the core contributes 2/8 = 16/64; the mantle slab contributes 27/64 − 8/64 = 19/64. Total:<br><i>M</i><sub>enc</sub> = <i>M</i><sub><i>u</i></sub>((16 + 19)/64) = 35<i>M</i><sub><i>u</i></sub>/64.<br>Then<br><i>g</i> = <i>G</i>(35<i>M</i><sub><i>u</i></sub>/64)/(3<i>R</i>/4)<sup>2</sup> = (<i>GM</i><sub><i>u</i></sub>/<i>R</i><sup>2</sup>) · 35/64 · 16/9 = <i>g</i><sub><i>u</i></sub> · 35/36.',
          'Numerically:<br><i>g</i>(3<i>R</i>/4) = (35/36)(9.83) m/s<sup>2</sup> = 9.56 m/s<sup>2</sup>.',
          '<b>(c) Surface.</b> Core 16/64 plus full mantle (1 − 8/64) = 56/64:<br><i>M</i> = <i>M</i><sub><i>u</i></sub> · 72/64 = 9<i>M</i><sub><i>u</i></sub>/8,   <i>g</i><sub>surf</sub> = (9/8)<i>g</i><sub><i>u</i></sub> = 1.125 × 9.83 = 11.1 m/s<sup>2</sup>.',
          '<b>Reading the profile.</b> Because the dense core is concentrated deep down, the interior field at 3<i>R</i>/4 (9.56) exceeds what a uniform planet of the same <i>ρ</i><sub>0</sub> would give there (3/4 × 9.83 = 7.37 m/s<sup>2</sup>) — concentrating mass centrally props up the interior field. Note, though, that here <i>g</i> still falls as you first go down (11.1 → 9.56 m/s<sup>2</sup> by 3<i>R</i>/4): the mantle is too dense. <i>g</i> rises with depth only where the local density is below two-thirds of the mean density of everything beneath. Here that happens only below <i>r</i> ≈ 0.63<i>R</i>, climbing back to 9.83 m/s<sup>2</sup> at the core. That is why the real Earth’s <i>g</i> rises slightly as you descend its light crust before eventually falling: the iron core dominates.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A planet of radius <i>R</i> has density graded linearly, <i>ρ</i>(<i>r</i>) = <i>ρ</i><sub>0</sub>(1 − <i>r</i>/<i>R</i>). Find <i>g</i>(<i>r</i>) everywhere inside, locate the radius at which <i>g</i> is maximum, and show that the peak exceeds the surface value by a factor 4/3.',
        steps: [
          '<b>Enclosed mass.</b><br><i>M</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> 4π<i>r</i>′<sup>2</sup> <i>ρ</i><sub>0</sub>(1 − <i>r</i>′/<i>R</i>) d<i>r</i>′ = 4π<i>ρ</i><sub>0</sub>[<i>r</i><sup>3</sup>/3 − <i>r</i><sup>4</sup>/(4<i>R</i>)].',
          '<b>Interior field</b>, dividing by <i>r</i><sup>2</sup>:<br><i>g</i>(<i>r</i>) = 4π<i>Gρ</i><sub>0</sub>(<i>r</i>/3 − <i>r</i><sup>2</sup>/(4<i>R</i>)),   <i>r</i> ≤ <i>R</i>.',
          '<b>Checks.</b> At <i>r</i> = 0: <i>g</i> = 0 (symmetry). Total mass: <i>M</i> = 4π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>(1/3 − 1/4) = π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>/3, and the surface field is<br><i>g</i><sub><i>R</i></sub> = <i>GM</i>/<i>R</i><sup>2</sup> = π<i>Gρ</i><sub>0</sub><i>R</i>/3 = 4π<i>Gρ</i><sub>0</sub><i>R</i>(1/3 − 1/4),<br>which is exactly <i>g</i>(<i>R</i>) from the interior formula — continuous at the surface.',
          '<b>Maximum.</b> Differentiate:<br>d<i>g</i>/d<i>r</i> = 4π<i>Gρ</i><sub>0</sub>(1/3 − <i>r</i>/(2<i>R</i>)) = 0 ⇒ <i>r</i> = 2<i>R</i>/3.',
          'Substitute back:<br><i>g</i><sub>max</sub> = 4π<i>Gρ</i><sub>0</sub>(2<i>R</i>/9 − 4<i>R</i>/(9 · 4)) = 4π<i>Gρ</i><sub>0</sub>(2<i>R</i>/9 − <i>R</i>/9) = 4π<i>Gρ</i><sub>0</sub><i>R</i>/9.',
          'Compare with the surface value:<br><i>g</i><sub>max</sub>/<i>g</i><sub><i>R</i></sub> = (4π<i>Gρ</i><sub>0</sub><i>R</i>/9)/(π<i>Gρ</i><sub>0</sub><i>R</i>/3) = 4/3.',
          'So gravity inside this planet swells to 4/3 of its surface strength at <i>r</i> = 2<i>R</i>/3, then falls to <i>g</i><sub><i>R</i></sub> = (3/4)<i>g</i><sub>max</sub> at the surface (it is the density, not <i>g</i>, that vanishes there) and continues falling as 1/<i>r</i><sup>2</sup> outside. <b>The lesson the chapter only gestures at:</b> <i>g</i> need not be maximal at the surface. It peaks inside whenever the density just below the surface is less than two-thirds of the planet’s mean density, as here (where it is zero) and in the real Earth (crust ≈ 2.7 against a mean 5.5 g/cm<sup>3</sup>). The uniform-sphere “peak at the surface” result is a special case, not a law.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A planet has a uniform core of radius <i>R</i><sub>1</sub> and mass <i>M</i><sub>1</sub>, surrounded by a uniform mantle (between <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub>) of mass <i>M</i><sub>2</sub>. State <i>g</i> inside the core (<i>r</i> < <i>R</i><sub>1</sub>), in the mantle (<i>R</i><sub>1</sub> < <i>r</i> < <i>R</i><sub>2</sub>) and outside (<i>r</i> > <i>R</i><sub>2</sub>).',
            a: 'Core: <i>g</i> = <i>GM</i><sub>1</sub><i>r</i>/<i>R</i><sub>1</sub><sup>3</sup>. Mantle: <i>g</i> = <i>G</i>[<i>M</i><sub>1</sub> + <i>M</i><sub>2</sub>(<i>r</i><sup>3</sup> − <i>R</i><sub>1</sub><sup>3</sup>)/(<i>R</i><sub>2</sub><sup>3</sup> − <i>R</i><sub>1</sub><sup>3</sup>)]/<i>r</i><sup>2</sup>. Outside: <i>g</i> = <i>G</i>(<i>M</i><sub>1</sub> + <i>M</i><sub>2</sub>)/<i>r</i><sup>2</sup>. (The branches agree at <i>R</i><sub>1</sub> and <i>R</i><sub>2</sub>.)',
          },
          {
            q: 'A planet of radius <i>R</i> has density increasing linearly, <i>ρ</i>(<i>r</i>) = <i>ρ</i><sub>0</sub><i>r</i>/<i>R</i>. Show that <i>g</i>(<i>r</i>) ∝ <i>r</i><sup>2</sup> inside, and find <i>g</i> at the surface in terms of <i>ρ</i><sub>0</sub>, <i>G</i>, <i>R</i>.',
            a: '<i>M</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> 4π<i>r</i>′<sup>2</sup><i>ρ</i><sub>0</sub>(<i>r</i>′/<i>R</i>) d<i>r</i>′ = π<i>ρ</i><sub>0</sub><i>r</i><sup>4</sup>/<i>R</i>, so<br><i>g</i>(<i>r</i>) = (<i>G</i>π<i>ρ</i><sub>0</sub><i>r</i><sup>4</sup>/<i>R</i>)/<i>r</i><sup>2</sup> = (π<i>Gρ</i><sub>0</sub>/<i>R</i>) <i>r</i><sup>2</sup> ∝ <i>r</i><sup>2</sup>.<br>Total mass <i>M</i> = <i>M</i><sub>enc</sub>(<i>R</i>) = π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>, so <i>g</i><sub><i>R</i></sub> = <i>GM</i>/<i>R</i><sup>2</sup> = π<i>Gρ</i><sub>0</sub><i>R</i>, which agrees with <i>g</i>(<i>R</i>) from the formula above. Note the field grows even faster than the uniform case’s <i>r</i><sup>1</sup>, because ever-denser material keeps being added beneath you.',
          },
          {
            q: 'For the planet of practice question 2 above, state without calculation whether <i>g</i> is maximal at the surface or inside, and why.',
            a: 'At the surface. The density increases outward here, so each added shell carries more mass than it would in a uniform planet; formally, d<i>g</i>/d<i>r</i> = 2π<i>Gρ</i><sub>0</sub><i>r</i>/<i>R</i> > 0 throughout the interior, so <i>g</i> climbs all the way to the surface.',
          },
          {
            q: 'For the graded planet of the second worked example of this topic, replace the profile by <i>ρ</i>(<i>r</i>) = <i>ρ</i><sub>0</sub>(1 − <i>r</i>/<i>R</i>)<sup>2</sup> and find the radius at which <i>g</i> is maximum, in closed form.',
            a: '<i>M</i><sub>enc</sub> = 4π<i>ρ</i><sub>0</sub>(<i>r</i><sup>3</sup>/3 − <i>r</i><sup>4</sup>/(2<i>R</i>) + <i>r</i><sup>5</sup>/(5<i>R</i><sup>2</sup>)), so <i>g</i> ∝ <i>r</i>/3 − <i>r</i><sup>2</sup>/(2<i>R</i>) + <i>r</i><sup>3</sup>/(5<i>R</i><sup>2</sup>). Setting the derivative to zero: 1/3 − <i>r</i>/<i>R</i> + 3<i>r</i><sup>2</sup>/(5<i>R</i><sup>2</sup>) = 0, i.e. 9<i>r</i><sup>2</sup> − 15<i>Rr</i> + 5<i>R</i><sup>2</sup> = 0, giving<br><i>r</i> = ((15 − √45)/18)<i>R</i> = ((5 − √5)/6)<i>R</i> ≈ 0.461<i>R</i><br>(the other root exceeds <i>R</i>).',
          },
          {
            q: 'Explain in one line why <i>g</i> is continuous across the core–mantle interface of the first worked example of this topic while its slope is not.',
            a: 'Because the enclosed mass <i>M</i><sub>enc</sub>(<i>r</i>) is itself continuous across a finite density jump — no mass resides in the interface — so <i>GM</i><sub>enc</sub>/<i>r</i><sup>2</sup> cannot jump; but its rate of accumulation d<i>M</i><sub>enc</sub>/d<i>r</i> = 4π<i>r</i><sup>2</sup><i>ρ</i> changes abruptly with <i>ρ</i>, so the slope does jump.',
          },
        ],
      },
    ],
  },

  {
    n: 'D',
    title: 'Off the Axes: Arcs at Their Centres, and Tunnels That Miss the Centre',
    extra: true,
    kalam:
      'Addendum D leaves the symmetry axes: the field of an arc at its centre, and the chord-tunnel theorem that upgrades the chapter’s through-the-centre tunnel to every straight tunnel.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter integrates along one line (rod on its axis) and drills one tunnel (through the centre). Examiners go further in both directions. JEE Advanced sets the field at the centre of an arc — a vector integral with genuine cancellation — and rewards anyone who knows that every straight tunnel through a uniform planet, not just a diameter, gives the same 84-minute period, i.e. the same 42-minute one-way ride.',
      },

      { t: 'part', title: 'Field at the centre of a uniform arc' },
      {
        t: 'p',
        html: '<b>Setup.</b> A wire bent into a circular arc of radius <i>R</i>, linear density <i>λ</i> (units kg/m), spanning angles −<i>α</i> to +<i>α</i> measured from the bisector. A point of interest sits at the centre of curvature.',
      },
      {
        t: 'p',
        html: '<b>Element.</b> An element subtending d<i>θ</i> has length <i>R</i> d<i>θ</i>, mass d<i>m</i> = <i>λR</i> d<i>θ</i>, and sits at distance <i>R</i>. Its contribution:<br>d<i>E</i> = <i>G</i> d<i>m</i>/<i>R</i><sup>2</sup> = (<i>Gλ</i>/<i>R</i>) d<i>θ</i>,<br>directed from the centre toward the element (gravity attracts). Units: (N m<sup>2</sup> kg<sup>−2</sup>)(kg/m)/m = N/kg.',
      },
      {
        t: 'p',
        html: '<b>Cancellation.</b> Elements at +<i>θ</i> and −<i>θ</i> pull in directions mirror-symmetric about the bisector: the components along the bisector add, those across it cancel. Only the bisector component survives:<br>d<i>E</i><sub>∥</sub> = d<i>E</i> cos <i>θ</i> = (<i>Gλ</i>/<i>R</i>) cos <i>θ</i> d<i>θ</i>.',
      },
      {
        t: 'p',
        html: '<b>Integration.</b><br><i>E</i> = ∫<sub>−<i>α</i></sub><sup><i>α</i></sup> (<i>Gλ</i>/<i>R</i>) cos <i>θ</i> d<i>θ</i> = (<i>Gλ</i>/<i>R</i>)[sin <i>θ</i>]<sub>−<i>α</i></sub><sup>+<i>α</i></sup> = 2<i>Gλ</i> sin <i>α</i>/<i>R</i>,<br>pointing from the centre toward the midpoint of the arc.',
      },
      {
        t: 'p',
        html: '<b>Three checks that cost nothing.</b><br>• Small arc: <i>α</i> → 0 gives <i>E</i> ≈ <i>Gλ</i>(2<i>Rα</i>)/<i>R</i><sup>2</sup> = <i>GM</i><sub>arc</sub>/<i>R</i><sup>2</sup>, since <i>M</i><sub>arc</sub> = <i>λ</i>(2<i>Rα</i>) — the arc collapses to a point mass, as it must.<br>• Full ring: <i>α</i> = π gives sin π = 0 — complete cancellation, the chapter’s ring-centre result recovered.<br>• Semicircle: <i>α</i> = π/2, and with <i>λ</i> = <i>M</i>/(π<i>R</i>),<br><i>E</i> = 2<i>Gλ</i>/<i>R</i> = 2<i>GM</i>/(π<i>R</i><sup>2</sup>),<br>directed toward the middle of the semicircle. A force on a test mass <i>m</i> placed there is <i>F</i> = 2<i>GMm</i>/(π<i>R</i><sup>2</sup>).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A uniform wire of mass <i>M</i> = 12 kg is bent into a semicircle of radius <i>R</i> = 2.0 m. Find the gravitational field at its centre, and the force on a 5.0 kg bead placed there.',
        steps: [
          'Linear density: <i>λ</i> = <i>M</i>/(π<i>R</i>) = 12/[π(2.0)] kg/m = 1.91 kg/m.',
          'Field magnitude:<br><i>E</i> = 2<i>GM</i>/(π<i>R</i><sup>2</sup>) = 2(6.67 × 10<sup>−11</sup>)(12)/[π(2.0)<sup>2</sup>] N/kg = (1.60 × 10<sup>−9</sup>)/12.57 N/kg = 1.27 × 10<sup>−10</sup> N/kg.',
          'Force on the bead:<br><i>F</i> = <i>mE</i> = (5.0)(1.27 × 10<sup>−10</sup>) N = 6.4 × 10<sup>−10</sup> N,<br>directed toward the midpoint of the semicircle (the direction of the axis of symmetry).',
          '<b>Check.</b> Treat the semicircle crudely as its mass concentrated at its centroid on the bisector, at distance ⟨<i>R</i> cos <i>θ</i>⟩ = 2<i>R</i>/π ≈ 1.27 m from the centre:<br><i>E</i><sub>crude</sub> ≈ <i>GM</i>/(2<i>R</i>/π)<sup>2</sup> = (6.67 × 10<sup>−11</sup>)(12)/1.62 N/kg ≈ 4.9 × 10<sup>−10</sup> N/kg.<br>The crude estimate (4.9 × 10<sup>−10</sup> N/kg) overshoots the exact value (1.27 × 10<sup>−10</sup> N/kg) by a factor of about 4 — the exact answer is smaller because every element of the wire is a full distance <i>R</i> away (not 2<i>R</i>/π) and pulls at an angle to the bisector. Only the integral gives the exact value. The lesson: for curved sources, only the component integral is trustworthy — “mass at the centroid” is a trap.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'The chord-tunnel theorem' },
      {
        t: 'p',
        html: '<b>Claim.</b> In a uniform-density, non-rotating planet of radius <i>R</i> and surface gravity <i>g</i>, a bead sliding frictionlessly in any straight tunnel — through the centre or missing it entirely — executes SHM with the same period<br><i>T</i> = 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min,<br>and completes any crossing, of any length, in <i>T</i>/2 ≈ 42.3 min.',
      },
      {
        t: 'p',
        html: '<b>Derivation.</b> The chapter established that the field anywhere inside a uniform sphere is<br><i>E⃗</i>(<i>r⃗</i>) = −(<i>g</i>/<i>R</i>) <i>r⃗</i>,<br>where <i>r⃗</i> is the position from the centre — linear in displacement, pointing home. Now consider a tunnel whose closest approach to the centre is <i>d</i>, and let <i>s</i> measure position along the tunnel from the tunnel’s midpoint. Decompose <i>r⃗</i> into components along and across the tunnel; the along-component of <i>r⃗</i> is exactly <i>s</i>. The tunnel wall supplies whatever normal force the transverse component demands, so the motion along the tunnel obeys<br><i>ms̈</i> = −(<i>mg</i>/<i>R</i>) <i>s</i>.<br>This is Hooke’s law with effective constant <i>k</i><sub>eff</sub> = <i>mg</i>/<i>R</i> — identical to the through-centre case, and containing no trace of <i>d</i>. Hence<br><i>ω</i> = √(<i>g</i>/<i>R</i>),   <i>T</i> = 2π√(<i>R</i>/<i>g</i>),<br>for every chord. The amplitude is half the chord length; by Pythagoras in the triangle centre–midpoint–entry point,<br><i>A</i> = √(<i>R</i><sup>2</sup> − <i>d</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Why the independence is not magic.</b> A shallower chord (one passing farther from the centre) is shorter, but the restoring component of gravity along it is weaker (only (<i>g</i>/<i>R</i>)<i>A</i> of the field works along the tunnel at the ends). Shorter distance, gentler push — and the two effects cancel exactly because the field is strictly linear in <i>r⃗</i>. Any nonlinear field (a real, centrally-condensed Earth, for instance) destroys the cancellation, and chord times begin to differ.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A chord tunnel’s closest approach to the Earth’s centre is <i>d</i> = <i>R</i>/2. Take <i>g</i> = 9.8 m/s<sup>2</sup>, <i>R</i> = 6.4 × 10<sup>6</sup> m. Find the amplitude, the maximum speed, the acceleration component along the tunnel at the moment of entry, and the crossing time.',
        steps: [
          'Amplitude (half-chord):<br><i>A</i> = √(<i>R</i><sup>2</sup> − <i>R</i><sup>2</sup>/4) = (√3/2)<i>R</i> ≈ 0.866<i>R</i>.',
          'Angular frequency: <i>ω</i> = √(<i>g</i>/<i>R</i>) = √(9.8/(6.4 × 10<sup>6</sup>)) s<sup>−1</sup> = √(1.53 × 10<sup>−6</sup>) s<sup>−1</sup> = 1.24 × 10<sup>−3</sup> s<sup>−1</sup>.',
          'Maximum speed (at the tunnel’s midpoint, closest to the centre):<br><i>v</i><sub>max</sub> = <i>ωA</i> = 0.866√(<i>gR</i>) = 0.866√((9.8)(6.4 × 10<sup>6</sup>)) m/s = 0.866√(6.27 × 10<sup>7</sup>) m/s.',
          'Since √(6.27 × 10<sup>7</sup>) = 7.92 × 10<sup>3</sup> m/s (the familiar surface-orbit speed):<br><i>v</i><sub>max</sub> ≈ 6.86 km/s.',
          'Entry acceleration along the tunnel (at <i>s</i> = −<i>A</i>):<br>|<i>s̈</i>|<sub>entry</sub> = <i>ω</i><sup>2</sup><i>A</i> = (<i>g</i>/<i>R</i>)(0.866<i>R</i>) = 0.866<i>g</i> = 8.49 m/s<sup>2</sup>.',
          'Note this is less than <i>g</i>: at the tunnel mouth the full gravitational pull is 9.8 m/s<sup>2</sup>, but only its component along the tunnel accelerates the bead — the rest presses it against the wall.',
          'Crossing time — independent of the chord, by the theorem:<br><i>t</i> = <i>T</i>/2 = π√(<i>R</i>/<i>g</i>) = π√(6.4 × 10<sup>6</sup>/9.8) s = π(808) s ≈ 2540 s ≈ 42.3 min.',
          '<b>Check.</b> The through-centre tunnel is the special case <i>d</i> = 0: <i>A</i> = <i>R</i>, <i>v</i><sub>max</sub> = √(<i>gR</i>) = 7.92 km/s, same 42.3 min — matching worked example 4 of Topic 03 exactly. Our chord result slots into it seamlessly. And <i>v</i><sub>max</sub> = 6.86 < 7.92 km/s makes sense: a shallower dive samples weaker field.',
        ],
        // The book prints no answer line here; the result is in the steps.
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'An arc of linear density <i>λ</i> and radius <i>R</i> subtends 60° at its centre. Find the field at the centre.',
            a: '<i>α</i> = 30°, so <i>E</i> = 2<i>Gλ</i> sin 30°/<i>R</i> = <i>Gλ</i>/<i>R</i>, toward the arc’s midpoint.',
          },
          {
            q: 'The same for a quarter-circle wire.',
            a: '<i>α</i> = 45°: <i>E</i> = (2<i>Gλ</i>/<i>R</i>) · √2/2 = √2<i>Gλ</i>/<i>R</i>.',
          },
          {
            q: 'Explain in one sentence, using the pair-cancellation picture, why the field at the centre of a full ring vanishes even though no element’s individual field is zero.',
            a: 'Every element at angle <i>θ</i> has a partner diametrically opposite pulling with equal magnitude along the same line in the opposite direction, so the vector sum is zero pairwise.',
          },
          {
            q: 'A chord tunnel has <i>d</i> = 0.8<i>R</i>. Find <i>v</i><sub>max</sub> and the crossing time.',
            a: '<i>A</i> = √(<i>R</i><sup>2</sup> − 0.64<i>R</i><sup>2</sup>) = 0.60<i>R</i>, so <i>v</i><sub>max</sub> = 0.60√(<i>gR</i>) = 0.60(7.92) ≈ 4.75 km/s; the crossing time is unchanged at 42.3 min.',
          },
          {
            q: 'Prove in three lines that the crossing time of a chord tunnel is independent of <i>d</i>.',
            a: 'The equation of motion <i>s̈</i> = −(<i>g</i>/<i>R</i>)<i>s</i> contains no parameter of the chord; the crossing from <i>s</i> = −<i>A</i> to <i>s</i> = +<i>A</i> is half a period of this fixed oscillator, <i>t</i> = π√(<i>R</i>/<i>g</i>), regardless of <i>A</i> or <i>d</i>.',
          },
        ],
      },

      { t: 'part', title: 'Closing Note — What Changed Under Your Feet' },
      {
        t: 'p',
        html: 'Four habits separate a top solver from one who only quotes formulas. First, <b>derive or die</b>: shell potential, sphere-interior potential, and self-energy are derivations, not facts, and every one reduces to a single disciplined integral with a continuity check attached. Second, <b>stop re-deriving orbits</b>: write <i>ε</i>, read <i>a</i>, name the apsides — vis-viva turns the chapter’s longest worked examples into three-line calculations and flags crashing trajectories (<i>r</i><sub><i>p</i></sub> < <i>R</i>) that pure algebra hides. Third, <b>question the uniform density</b>: real planets are centrally condensed, and in the real Earth <i>g</i> peaks inside — the uniform sphere’s peak at the surface is a special case, not a law. Fourth, <b>trust linearity</b>: wherever the field is exactly proportional to displacement, projections along any axis inherit the same oscillator — the source of the 42-minute theorem and its cousins. Each habit is one integration deep. Go one layer past the formula and the formula stops being fragile.',
      },
    ],
  },
];
