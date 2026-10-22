import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Additional Topics D to F, word for word from the Class 12
 * Physics Master Reference: D Gauss’s Law Advanced: Non-Uniform Densities,
 * Coaxial, Slabs, Cavities (pp. 70 to 73), E Electrostatic Energy Density,
 * Self-Energy, and Pressure (pp. 73 to 76) and F JEE Advanced Problem
 * Patterns: Synthesis (pp. 76 to 79). Each addendum prints its own practice
 * problems and answers. The addenda print no drawings. Addendum F has no
 * “Method” heading: its parts are the book’s “Pattern 1/2/3” headings.
 */
export const TOPICS: Topic[] = [
  {
    n: 'D',
    title: 'Gauss’s Law Advanced: Non-Uniform Densities, Coaxial, Slabs, Cavities',
    extra: true,
    kalam:
      'Addendum D pushes Gauss’s law into a non-uniform density (ρ = kr), coaxial cables, slabs of finite thickness, and cavities inside conductors.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter solves three symmetric cases: infinite line, infinite sheet, spherical shell. Advanced problems use the same cylindrical/pillbox/spherical Gaussian surfaces but with <b>non-uniform</b> charge densities <i>ρ</i>(<i>r</i>), or <b>multiple</b> conductors (coaxial cable), or <b>finite-thickness</b> slabs, or <b>cavities</b> inside conductors.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Gauss’s law with non-uniform <i>ρ</i>(<i>r</i>) (spherical symmetry).</b><br><i>E⃗</i> = <i>E</i>(<i>r</i>) <i>r̂</i>,   <i>E</i>(<i>r</i>) · 4π<i>r</i><sup>2</sup> = <i>Q</i><sub>enc</sub>(<i>r</i>)/ε<sub>0</sub>,   <i>Q</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> <i>ρ</i>(<i>r</i>′)4π<i>r</i>′<sup>2</sup> d<i>r</i>′<br>Compute <i>Q</i><sub>enc</sub>(<i>r</i>) first, then <i>E</i>(<i>r</i>) = <i>Q</i><sub>enc</sub>(<i>r</i>)/(4πε<sub>0</sub><i>r</i><sup>2</sup>).',
      },
      {
        t: 'p',
        html: '<b>Coaxial cable / cylindrical symmetry.</b> Inner cylinder radius <i>a</i>, charge per length <i>λ</i>. Outer cylinder radius <i>b</i>, charge per length −<i>λ</i> (or other). Gaussian cylinder radius <i>r</i>, length <i>L</i>.<br>• <i>r</i> < <i>a</i>: <i>E</i> = 0 (inside inner conductor).<br>• <i>a</i> < <i>r</i> < <i>b</i>: <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>).<br>• <i>r</i> > <i>b</i>: <i>E</i> = <i>λ</i><sub>net</sub>/(2πε<sub>0</sub><i>r</i>) where <i>λ</i><sub>net</sub> = <i>λ</i><sub>inner</sub> + <i>λ</i><sub>outer</sub>.',
      },
      {
        t: 'p',
        html: '<b>Infinite slab of finite thickness.</b> Slab occupies −<i>d</i> ≤ <i>z</i> ≤ <i>d</i>, uniform <i>ρ</i>. Gaussian pillbox area <i>A</i>, extending from <i>z</i> = 0 to <i>z</i> (or symmetric).<br>• |<i>z</i>| < <i>d</i>: <i>E</i>(<i>z</i>) = <i>ρz</i>/ε<sub>0</sub> (linear).<br>• |<i>z</i>| > <i>d</i>: <i>E</i> = <i>ρd</i>/ε<sub>0</sub> = <i>σ</i>/(2ε<sub>0</sub>) where <i>σ</i> = <i>ρ</i> · 2<i>d</i> (matches infinite sheet).',
      },
      {
        t: 'p',
        html: '<b>Cavity in a conductor.</b> A conductor with a cavity containing charge <i>q</i>. The inner surface gets induced charge −<i>q</i> (Gaussian surface inside conductor enclosing cavity). The outer surface gets <i>Q</i><sub>conductor</sub> + <i>q</i>. Field in cavity is that of <i>q</i> plus induced charges on cavity wall (not uniform unless cavity is spherical and <i>q</i> at centre). Field in conductor material is zero. Field outside is that of <i>Q</i><sub>conductor</sub> + <i>q</i> at the outer surface.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Sphere with ρ = kr',
        q: 'A solid sphere of radius <i>R</i> has volume charge density <i>ρ</i>(<i>r</i>) = <i>kr</i> where <i>k</i> is a constant. Find the electric field (a) inside (<i>r</i> < <i>R</i>), (b) outside (<i>r</i> > <i>R</i>). Find the total charge <i>Q</i>.',
        steps: [
          '<b>Step 1 — Enclosed charge inside.</b><br><i>Q</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> <i>ρ</i>(<i>r</i>′)4π<i>r</i>′<sup>2</sup> d<i>r</i>′ = ∫<sub>0</sub><sup><i>r</i></sup> (<i>kr</i>′)4π<i>r</i>′<sup>2</sup> d<i>r</i>′ = 4π<i>k</i> ∫<sub>0</sub><sup><i>r</i></sup> <i>r</i>′<sup>3</sup> d<i>r</i>′ = 4π<i>k</i> · <i>r</i><sup>4</sup>/4 = π<i>kr</i><sup>4</sup>',
          '<b>Step 2 — Field inside.</b><br><i>E</i><sub>in</sub>(<i>r</i>) = <i>Q</i><sub>enc</sub>(<i>r</i>)/(4πε<sub>0</sub><i>r</i><sup>2</sup>) = π<i>kr</i><sup>4</sup>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) = <i>kr</i><sup>2</sup>/(4ε<sub>0</sub>)<br>Directed radially outward (if <i>k</i> > 0).',
          '<b>Step 3 — Total charge.</b><br><i>Q</i> = <i>Q</i><sub>enc</sub>(<i>R</i>) = π<i>kR</i><sup>4</sup>',
          '<b>Step 4 — Field outside.</b><br><i>E</i><sub>out</sub>(<i>r</i>) = <i>Q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) = π<i>kR</i><sup>4</sup>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) = <i>kR</i><sup>4</sup>/(4ε<sub>0</sub><i>r</i><sup>2</sup>)',
          '<b>Step 5 — Continuity at <i>r</i> = <i>R</i>.</b> <i>E</i><sub>in</sub>(<i>R</i>) = <i>kR</i><sup>2</sup>/(4ε<sub>0</sub>), <i>E</i><sub>out</sub>(<i>R</i>) = <i>kR</i><sup>2</sup>/(4ε<sub>0</sub>). Matches.',
        ],
        ans: '(a) <i>E</i> = <i>kr</i><sup>2</sup>/(4ε<sub>0</sub>) for <i>r</i> < <i>R</i>. (b) <i>E</i> = <i>kR</i><sup>4</sup>/(4ε<sub>0</sub><i>r</i><sup>2</sup>) for <i>r</i> > <i>R</i>. Total <i>Q</i> = π<i>kR</i><sup>4</sup>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level — Coaxial Cable',
        q: 'A long coaxial cable has an inner solid conductor of radius <i>a</i> carrying charge per unit length +<i>λ</i>. The outer conducting shell has inner radius <i>b</i>, outer radius <i>c</i>, and carries charge per unit length −<i>λ</i>. Find the electric field in all regions: <i>r</i> < <i>a</i>, <i>a</i> < <i>r</i> < <i>b</i>, <i>b</i> < <i>r</i> < <i>c</i>, <i>r</i> > <i>c</i>.',
        steps: [
          '<b>Step 1 — Gaussian cylinder</b> radius <i>r</i>, length <i>L</i>.',
          '<b>Region 1:</b> <i>r</i> < <i>a</i> <b>(inside inner conductor).</b> Conductor ⇒ <i>E</i> = 0.',
          '<b>Region 2:</b> <i>a</i> < <i>r</i> < <i>b</i> <b>(dielectric between conductors).</b> Encloses inner conductor’s charge +<i>λL</i>.<br><i>E</i>(2π<i>rL</i>) = <i>λL</i>/ε<sub>0</sub>   ⇒   <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>)<br>Radially outward.',
          '<b>Region 3:</b> <i>b</i> < <i>r</i> < <i>c</i> <b>(inside outer conductor).</b> Conductor ⇒ <i>E</i> = 0. (Implies inner surface of outer conductor at <i>r</i> = <i>b</i> has charge −<i>λL</i>.)',
          '<b>Region 4:</b> <i>r</i> > <i>c</i> <b>(outside cable).</b> Total enclosed charge = +<i>λL</i> − <i>λL</i> = 0.<br><i>E</i> = 0',
        ],
        ans: '<i>E</i> = 0 for <i>r</i> < <i>a</i> and <i>b</i> < <i>r</i> < <i>c</i> and <i>r</i> > <i>c</i>; <i>E</i> = <i>λ</i>/(2πε<sub>0</sub><i>r</i>) radially outward for <i>a</i> < <i>r</i> < <i>b</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Point Charge in Cavity of a Conductor',
        q: 'A neutral conducting spherical shell has inner radius <i>a</i>, outer radius <i>b</i>. A point charge <i>q</i> is placed at the centre of the cavity. Find the surface charge densities on the inner and outer surfaces, and the electric field everywhere.',
        steps: [
          '<b>Step 1 — Inner surface.</b> Gaussian sphere in conductor material (<i>a</i> < <i>r</i> < <i>b</i>). <i>E</i> = 0 ⇒ <i>Q</i><sub>enc</sub> = 0. Enclosed charge = <i>q</i> + <i>Q</i><sub>inner</sub> = 0 ⇒ <i>Q</i><sub>inner</sub> = −<i>q</i>. <i>σ</i><sub>inner</sub> = −<i>q</i>/(4π<i>a</i><sup>2</sup>) (uniform because <i>q</i> is at centre).',
          '<b>Step 2 — Outer surface.</b> Conductor is neutral: <i>Q</i><sub>inner</sub> + <i>Q</i><sub>outer</sub> = 0 ⇒ <i>Q</i><sub>outer</sub> = +<i>q</i>. <i>σ</i><sub>outer</sub> = <i>q</i>/(4π<i>b</i><sup>2</sup>) (uniform by spherical symmetry).',
          '<b>Step 3 — Electric field.</b><br>• <i>r</i> < <i>a</i>: <i>E</i> = <i>q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) radially outward.<br>• <i>a</i> < <i>r</i> < <i>b</i>: <i>E</i> = 0 (inside conductor).<br>• <i>r</i> > <i>b</i>: <i>E</i> = <i>q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>) radially outward (looks like point charge <i>q</i> at centre).',
        ],
        ans: '<i>σ</i><sub>inner</sub> = −<i>q</i>/(4π<i>a</i><sup>2</sup>), <i>σ</i><sub>outer</sub> = <i>q</i>/(4π<i>b</i><sup>2</sup>); <i>E</i> as above.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'An infinite slab of thickness 2<i>d</i> has uniform volume charge density <i>ρ</i>. Find <i>E</i> inside and outside. Sketch <i>E</i>(<i>z</i>).',
            a: 'Inside (|<i>z</i>| < <i>d</i>): <i>E</i> = <i>ρz</i>/ε<sub>0</sub> (linear, <i>E</i> = 0 at mid-plane). Outside: <i>E</i> = <i>ρd</i>/ε<sub>0</sub> = <i>σ</i>/(2ε<sub>0</sub>) (constant, <i>σ</i> = 2<i>ρd</i>).',
          },
          {
            q: 'A sphere of radius <i>R</i> has <i>ρ</i>(<i>r</i>) = <i>ρ</i><sub>0</sub>(1 − <i>r</i>/<i>R</i>). Find <i>E</i>(<i>r</i>) inside and outside. Total charge <i>Q</i>.',
            a: '<i>Q</i><sub>enc</sub>(<i>r</i>) = 4π<i>ρ</i><sub>0</sub> ∫<sub>0</sub><sup><i>r</i></sup> (1 − <i>r</i>′/<i>R</i>)<i>r</i>′<sup>2</sup>d<i>r</i>′ = 4π<i>ρ</i><sub>0</sub>(<i>r</i><sup>3</sup>/3 − <i>r</i><sup>4</sup>/(4<i>R</i>)). <i>E</i><sub>in</sub> = (<i>ρ</i><sub>0</sub><i>r</i>/ε<sub>0</sub>)(1/3 − <i>r</i>/(4<i>R</i>)). <i>Q</i> = π<i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>/3. <i>E</i><sub>out</sub> = <i>ρ</i><sub>0</sub><i>R</i><sup>3</sup>/(12ε<sub>0</sub><i>r</i><sup>2</sup>).',
          },
          {
            q: 'A coaxial cable: inner radius <i>a</i>, <i>λ</i><sub>1</sub> = +<i>λ</i>; outer inner radius <i>b</i>, outer radius <i>c</i>, <i>λ</i><sub>2</sub> = −2<i>λ</i>. Find <i>E</i> in all four regions.',
            a: '<i>r</i> < <i>a</i>: 0. <i>a</i> < <i>r</i> < <i>b</i>: <i>λ</i>/(2πε<sub>0</sub><i>r</i>). <i>b</i> < <i>r</i> < <i>c</i>: 0 (conductor). <i>r</i> > <i>c</i>: net <i>λ</i> = −<i>λ</i> ⇒ <i>E</i> = −<i>λ</i>/(2πε<sub>0</sub><i>r</i>) (inward).',
          },
          {
            q: 'A point charge <i>q</i> is placed <b>off-centre</b> in a spherical cavity of a conductor. Describe (qualitatively) the induced charge distribution on the cavity wall and the field inside the cavity.',
            a: 'Cavity wall: induced charge −<i>q</i>, non-uniform (more negative near <i>q</i>). Field in cavity: not uniform, not radial; superposition of <i>q</i> and induced charges. Conductor material: <i>E</i> = 0. Outer surface: uniform +<i>q</i> (if the conductor is neutral, its outer surface is spherical, and there are no external fields).',
          },
          {
            q: 'A long cylinder of radius <i>R</i> has <i>ρ</i>(<i>r</i>) = <i>ρ</i><sub>0</sub><i>r</i>/<i>R</i>. Find <i>E</i> inside and outside. Compare with <i>ρ</i> = const case.',
            a: '<i>Q</i><sub>enc</sub>(<i>r</i>) = ∫<sub>0</sub><sup><i>r</i></sup> (<i>ρ</i><sub>0</sub><i>r</i>′/<i>R</i>)2π<i>r</i>′<i>L</i>d<i>r</i>′ = (2π<i>ρ</i><sub>0</sub><i>L</i>/<i>R</i>)(<i>r</i><sup>3</sup>/3). <i>E</i><sub>in</sub> = <i>ρ</i><sub>0</sub><i>r</i><sup>2</sup>/(3ε<sub>0</sub><i>R</i>). <i>Q</i><sub>total</sub> = 2π<i>ρ</i><sub>0</sub><i>LR</i><sup>2</sup>/3. <i>E</i><sub>out</sub> = <i>ρ</i><sub>0</sub><i>R</i><sup>2</sup>/(3ε<sub>0</sub><i>r</i>). For uniform <i>ρ</i>: <i>E</i><sub>in</sub> ∝ <i>r</i>, here <i>E</i><sub>in</sub> ∝ <i>r</i><sup>2</sup>.',
          },
        ],
      },
    ],
  },

  {
    n: 'E',
    title: 'Electrostatic Energy Density, Self-Energy, and Pressure',
    extra: true,
    kalam:
      'Addendum E introduces electrostatic energy density, the self-energy of charged spheres and shells, and the electrostatic pressure.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter does not cover electrostatic energy. JEE Advanced expects: energy density <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>, total energy <i>U</i> = ∫ <i>u</i> d<i>V</i>, self-energy of a charged sphere (<i>U</i> = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i>) and shell (<i>U</i> = ½<i>kQ</i><sup>2</sup>/<i>R</i>), and the electrostatic pressure <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = ½ε<sub>0</sub><i>E</i><sup>2</sup> that acts on charged conductors.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Energy density.</b> In a region with field <i>E⃗</i>, the energy stored per unit volume is <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup>. Total energy <i>U</i> = ∫<sub>all space</sub> ½ε<sub>0</sub><i>E</i><sup>2</sup> d<i>V</i>.',
      },
      {
        t: 'p',
        html: '<b>Self-energy of a charged sphere (uniform volume charge <i>ρ</i>).</b><br><i>U</i> = ∫<sub>0</sub><sup><i>R</i></sup> ½ε<sub>0</sub><i>E</i><sub>in</sub><sup>2</sup>4π<i>r</i><sup>2</sup> d<i>r</i> + ∫<sub><i>R</i></sub><sup>∞</sup> ½ε<sub>0</sub><i>E</i><sub>out</sub><sup>2</sup>4π<i>r</i><sup>2</sup> d<i>r</i><br><i>E</i><sub>in</sub> = <i>ρr</i>/(3ε<sub>0</sub>) = <i>Qr</i>/(4πε<sub>0</sub><i>R</i><sup>3</sup>), <i>E</i><sub>out</sub> = <i>Q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>).<br><i>U</i><sub>in</sub> = ∫<sub>0</sub><sup><i>R</i></sup> ½ε<sub>0</sub> · <i>Q</i><sup>2</sup><i>r</i><sup>2</sup>/(16π<sup>2</sup>ε<sub>0</sub><sup>2</sup><i>R</i><sup>6</sup>) · 4π<i>r</i><sup>2</sup> d<i>r</i> = (<i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i><sup>6</sup>)) ∫<sub>0</sub><sup><i>R</i></sup> <i>r</i><sup>4</sup> d<i>r</i> = <i>Q</i><sup>2</sup>/(40πε<sub>0</sub><i>R</i>)<br><i>U</i><sub>out</sub> = ∫<sub><i>R</i></sub><sup>∞</sup> ½ε<sub>0</sub> · <i>Q</i><sup>2</sup>/(16π<sup>2</sup>ε<sub>0</sub><sup>2</sup><i>r</i><sup>4</sup>) · 4π<i>r</i><sup>2</sup> d<i>r</i> = (<i>Q</i><sup>2</sup>/(8πε<sub>0</sub>)) ∫<sub><i>R</i></sub><sup>∞</sup> d<i>r</i>/<i>r</i><sup>2</sup> = <i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i>)<br><i>U</i> = (<i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i>))(1/5 + 1) = (6/5)(<i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i>)) = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i><br>(Recall <i>k</i> = 1/(4πε<sub>0</sub>), so 1/(8πε<sub>0</sub>) = <i>k</i>/2.)',
      },
      {
        t: 'p',
        html: '<b>Self-energy of a thin spherical shell (charge <i>Q</i> on surface).</b> Field inside = 0. Only outside integral:<br><i>U</i> = ∫<sub><i>R</i></sub><sup>∞</sup> ½ε<sub>0</sub>(<i>Q</i>/(4πε<sub>0</sub><i>r</i><sup>2</sup>))<sup>2</sup>4π<i>r</i><sup>2</sup> d<i>r</i> = <i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i>) = ½<i>kQ</i><sup>2</sup>/<i>R</i>',
      },
      {
        t: 'p',
        html: '<b>Electrostatic pressure on a conductor.</b> As derived in Addendum B: <i>P</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = ½ε<sub>0</sub><i>E</i><sup>2</sup> (where <i>E</i> = <i>σ</i>/ε<sub>0</sub> is the field just outside). This pressure acts <b>outward</b>, trying to expand the conductor.',
      },
      {
        t: 'p',
        html: '<b>Charged soap bubble.</b> A soap bubble has two surfaces (inner and outer), each with surface tension <i>γ</i>. Excess pressure inside a bubble: Δ<i>P</i> = 4<i>γ</i>/<i>R</i>. If the bubble is charged, the electrostatic pressure <i>P</i><sub>elec</sub> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) adds to the internal pressure (or opposes surface tension). Equilibrium: 4<i>γ</i>/<i>R</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) + <i>P</i><sub>gas</sub> (if gas pressure difference is maintained). For an idealised bubble with no gas-pressure difference (no gas inside to hold it open), the only equilibrium is the radius at which 4<i>γ</i>/<i>R</i> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>); uncharged, such a bubble would collapse (worked example 2: <i>R</i> → 0 as <i>Q</i> → 0).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Energy of a Uniformly Charged Sphere',
        q: 'Derive the self-energy <i>U</i> = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i> of a solid sphere of radius <i>R</i> with uniform volume charge density <i>ρ</i>, using energy density integration. Verify by assembling the sphere shell by shell.',
        steps: [
          '<b>Step 1 — Energy density method.</b> (Done in Method above.) Result: <i>U</i> = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i>.',
          '<b>Step 2 — Assembly method (verification).</b> Build the sphere by bringing thin shells from infinity. At some stage, sphere has radius <i>r</i>, charge <i>q</i> = (4/3)π<i>r</i><sup>3</sup><i>ρ</i>. Potential at its surface: <i>V</i> = <i>kq</i>/<i>r</i> = (4/3)π<i>kρr</i><sup>2</sup>. Next shell: radius <i>r</i>, thickness d<i>r</i>, charge d<i>q</i> = 4π<i>r</i><sup>2</sup><i>ρ</i> d<i>r</i>. Work to bring it: d<i>W</i> = <i>V</i> d<i>q</i> = (4/3)π<i>kρr</i><sup>2</sup> · 4π<i>r</i><sup>2</sup><i>ρ</i> d<i>r</i> = (16/3)π<sup>2</sup><i>kρ</i><sup>2</sup><i>r</i><sup>4</sup> d<i>r</i>. Integrate <i>r</i> = 0 to <i>R</i>:<br><i>U</i> = (16/3)π<sup>2</sup><i>kρ</i><sup>2</sup> · <i>R</i><sup>5</sup>/5 = (16/15)π<sup>2</sup><i>kρ</i><sup>2</sup><i>R</i><sup>5</sup>',
          'Substitute <i>ρ</i> = 3<i>Q</i>/(4π<i>R</i><sup>3</sup>):<br><i>U</i> = (16/15)π<sup>2</sup><i>k</i> · 9<i>Q</i><sup>2</sup>/(16π<sup>2</sup><i>R</i><sup>6</sup>) · <i>R</i><sup>5</sup> = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i><br>Matches.',
        ],
        ans: '<i>U</i> = (3/5)<i>kQ</i><sup>2</sup>/<i>R</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Charged Soap Bubble Expansion',
        q: 'A charged thin conducting soap bubble in vacuum (two surfaces, surface tension <i>γ</i>, no gas-pressure difference across the film) carries charge <i>Q</i>. Find its equilibrium radius <i>R</i> in terms of <i>Q</i> and <i>γ</i>.',
        steps: [
          '<b>Step 1 — Surface charge density.</b> Total charge <i>Q</i> on sphere radius <i>R</i>. Area = 4π<i>R</i><sup>2</sup>. <i>σ</i> = <i>Q</i>/(4π<i>R</i><sup>2</sup>).',
          '<b>Step 2 — Electrostatic pressure.</b> <i>P</i><sub><i>e</i></sub> = <i>σ</i><sup>2</sup>/(2ε<sub>0</sub>) = <i>Q</i><sup>2</sup>/(32π<sup>2</sup>ε<sub>0</sub><i>R</i><sup>4</sup>), outward.',
          '<b>Step 3 — Surface tension pressure.</b> A soap bubble has two liquid-air interfaces. The excess pressure due to surface tension is Δ<i>P</i><sub><i>γ</i></sub> = 4<i>γ</i>/<i>R</i> (inward, tending to collapse the bubble).',
          '<b>Step 4 — Mechanical equilibrium.</b> Outward pressure = inward pressure.<br><i>Q</i><sup>2</sup>/(32π<sup>2</sup>ε<sub>0</sub><i>R</i><sup>4</sup>) = 4<i>γ</i>/<i>R</i><br><i>Q</i><sup>2</sup> = 128π<sup>2</sup>ε<sub>0</sub><i>γR</i><sup>3</sup><br><i>R</i> = (<i>Q</i><sup>2</sup>/(128π<sup>2</sup>ε<sub>0</sub><i>γ</i>))<sup>1/3</sup>',
          '<b>Step 5 — Check.</b> Since <i>R</i><sup>3</sup> ∝ <i>Q</i><sup>2</sup>, the radius grows steadily with <i>Q</i> and <i>R</i> → 0 as <i>Q</i> → 0, as expected for this idealised bubble, which has no gas inside to hold it open.',
        ],
        ans: '<i>R</i> = (<i>Q</i><sup>2</sup>/(128π<sup>2</sup>ε<sub>0</sub><i>γ</i>))<sup>1/3</sup>.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'Find the self-energy of a uniformly charged thin spherical shell of radius <i>R</i>, charge <i>Q</i>. (Use energy density or <i>U</i> = ½<i>QV</i>.)',
            a: '<i>U</i> = ½<i>kQ</i><sup>2</sup>/<i>R</i> = <i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i>).',
          },
          {
            q: 'A solid sphere of radius <i>R</i> has charge <i>Q</i> distributed uniformly. Find the energy stored in the field <b>inside</b> the sphere (<i>r</i> < <i>R</i>) and <b>outside</b> (<i>r</i> > <i>R</i>). Ratio?',
            a: '<i>U</i><sub>in</sub> = (1/5)(<i>kQ</i><sup>2</sup>/(2<i>R</i>)) = <i>Q</i><sup>2</sup>/(40πε<sub>0</sub><i>R</i>), <i>U</i><sub>out</sub> = ½<i>kQ</i><sup>2</sup>/<i>R</i> = <i>Q</i><sup>2</sup>/(8πε<sub>0</sub><i>R</i>). Ratio <i>U</i><sub>in</sub> ∶ <i>U</i><sub>out</sub> = 1 ∶ 5.',
          },
          {
            q: 'A conducting sphere of radius <i>R</i> has charge <i>Q</i>. Find the electrostatic pressure on its surface. If the sphere is made of a material with yield stress <i>σ</i><sub><i>y</i></sub>, what is the maximum charge it can hold before mechanical failure (taking failure when the pressure equals the yield stress)?',
            a: '<i>P</i> = <i>Q</i><sup>2</sup>/(32π<sup>2</sup>ε<sub>0</sub><i>R</i><sup>4</sup>). Force on hemisphere <i>F</i> = π<i>R</i><sup>2</sup><i>P</i> = <i>Q</i><sup>2</sup>/(32πε<sub>0</sub><i>R</i><sup>2</sup>). Failure when <i>P</i> = <i>σ</i><sub><i>y</i></sub> ⇒ <i>Q</i><sub>max</sub> = 4π<i>R</i><sup>2</sup>√(2ε<sub>0</sub><i>σ</i><sub><i>y</i></sub>).',
          },
          {
            q: 'Two identical charged soap bubbles (radius <i>R</i>, charge <i>Q</i> each) are brought into contact and coalesce into a single bubble. Find the new radius assuming charge conservation and surface tension <i>γ</i>, with each bubble in the equilibrium of worked example 2.',
            a: 'Two bubbles → one bubble. Charge conservation: <i>Q</i><sub>new</sub> = 2<i>Q</i>. The equilibrium condition from worked example 2, <i>Q</i><sup>2</sup> = 128π<sup>2</sup>ε<sub>0</sub><i>γR</i><sup>3</sup> (i.e. <i>Q</i><sup>2</sup> ∝ <i>R</i><sup>3</sup> at fixed <i>γ</i>), applies to both the original and the merged bubble, so <i>R</i>′<sup>3</sup>/<i>R</i><sup>3</sup> = <i>Q</i><sub>new</sub><sup>2</sup>/<i>Q</i><sup>2</sup> = 4 ⇒ <i>R</i>′ = 4<sup>1/3</sup><i>R</i> = 2<sup>2/3</sup><i>R</i> ≈ 1.587<i>R</i>.<br>(Each bubble obeys the balance of worked example 2.)',
          },
          {
            q: 'A parallel-plate capacitor has plate area <i>A</i>, separation <i>d</i>, charge <i>Q</i>. Find the force between plates using (i) energy density in the field, (ii) pressure on one plate.',
            a: '(i) <i>U</i> = <i>Q</i><sup>2</sup><i>d</i>/(2ε<sub>0</sub><i>A</i>), energy density <i>u</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup> = <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i><sup>2</sup>). Volume <i>Ad</i>. <i>F</i> = −∂<i>U</i>/∂<i>d</i> = −<i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i>) (magnitude <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i>), attractive). (ii) Pressure on one plate: <i>P</i> = ½ε<sub>0</sub><i>E</i><sup>2</sup> = <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i><sup>2</sup>). <i>F</i> = <i>PA</i> = <i>Q</i><sup>2</sup>/(2ε<sub>0</sub><i>A</i>). Attractive.',
          },
        ],
      },
    ],
  },

  {
    n: 'F',
    title: 'JEE Advanced Problem Patterns: Synthesis',
    extra: true,
    kalam: 'This section collects compound problems where electrostatics meets mechanics (springs, equilibrium).',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'This section collects compound problems where electrostatics meets mechanics (springs, equilibrium), or where multiple concepts from the chapter combine in non-standard ways.',
      },

      { t: 'part', title: 'Pattern 1: Spring–Block–Charge Equilibrium and Oscillation' },
      {
        t: 'p',
        html: 'A block of mass <i>m</i>, charge <i>q</i>, attached to a spring of constant <i>k</i>, on a frictionless horizontal table. A fixed charge <i>Q</i> is placed on the line of motion at distance <i>d</i> from the block’s equilibrium position (spring relaxed). Find the new equilibrium position and the angular frequency of small oscillations about it.',
      },
      {
        t: 'p',
        html: '<b>Method.</b> Net force on block at displacement <i>x</i> from spring’s natural length (with <i>x</i> = 0 at relaxed spring, <i>Q</i> at <i>x</i> = −<i>L</i>). Choose coordinates carefully. Let block coordinate be <i>x</i> (spring force −<i>kx</i>). Fixed charge <i>Q</i> at <i>x</i> = −<i>L</i>. Then Coulomb force on <i>q</i>: <i>F</i><sub><i>C</i></sub> = <i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i> + <i>L</i>)<sup>2</sup> (sign depends on signs). Equilibrium: −<i>kx</i><sub>0</sub> + <i>F</i><sub><i>C</i></sub>(<i>x</i><sub>0</sub>) = 0. Small oscillation: <i>mẍ</i> = −<i>kx</i> + <i>F</i><sub><i>C</i></sub>(<i>x</i>). Linearise: <i>F</i><sub><i>C</i></sub>(<i>x</i>) ≈ <i>F</i><sub><i>C</i></sub>(<i>x</i><sub>0</sub>) + <i>F</i>′<sub><i>C</i></sub>(<i>x</i><sub>0</sub>)(<i>x</i> − <i>x</i><sub>0</sub>). <i>ω</i><sup>2</sup> = (<i>k</i> − <i>F</i>′<sub><i>C</i></sub>(<i>x</i><sub>0</sub>))/<i>m</i>. Note <i>F</i>′<sub><i>C</i></sub> is negative if repulsive (<i>F</i><sub><i>C</i></sub> decreases with <i>x</i>), so effective <i>k</i> increases.',
      },

      { t: 'part', title: 'Pattern 2: Three Charges in Equilibrium on a Line / Ring' },
      {
        t: 'p',
        html: '<b>Earnshaw’s theorem:</b> No stable equilibrium for a charge in a purely electrostatic field from fixed charges. But a charge <b>constrained</b> to a line or ring can have stable equilibrium.',
      },
      {
        t: 'p',
        html: '<b>Three charges on a line:</b> Charges <i>q</i><sub>1</sub>, <i>q</i><sub>2</sub>, <i>q</i><sub>3</sub> on a line with separations. For the middle charge to be in equilibrium, the forces from the two outer charges must balance. For <b>all three</b> to be in equilibrium simultaneously (with one free), the ratio of charges and distances is fixed. <b>Classic result:</b> three charges <i>q</i>, <i>q</i><sub>2</sub>, <i>q</i> at <i>x</i> = −<i>a</i>, 0, +<i>a</i> are all in equilibrium together if <i>q</i><sub>2</sub> = −<i>q</i>/4. (If the outer two are held fixed, <i>q</i><sub>2</sub> at <i>x</i> = 0 is in equilibrium for any <i>q</i><sub>2</sub>, by symmetry.)',
      },
      {
        t: 'p',
        html: '<b>Charges on a ring:</b> <i>N</i> equal charges <i>q</i> on a ring, free to slide. They settle at vertices of a regular <i>N</i>-gon. A different charge <i>Q</i> at the centre — find equilibrium, stability.',
      },

      { t: 'part', title: 'Pattern 3: Method of Images (Point Charge + Grounded Plane / Sphere)' },
      {
        t: 'p',
        html: '<b>Plane:</b> Charge <i>q</i> at (0, 0, <i>d</i>). Plane <i>z</i> = 0 grounded. Image −<i>q</i> at (0, 0, −<i>d</i>). Potential for <i>z</i> > 0: <i>V</i> = (<i>q</i>/(4πε<sub>0</sub>))(1/√(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + (<i>z</i> − <i>d</i>)<sup>2</sup>) − 1/√(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + (<i>z</i> + <i>d</i>)<sup>2</sup>)). Induced <i>σ</i>(<i>x</i>, <i>y</i>) = −<i>qd</i>/(2π(<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> + <i>d</i><sup>2</sup>)<sup>3/2</sup>). Force on <i>q</i>: <i>F</i> = <i>q</i><sup>2</sup>/(16πε<sub>0</sub><i>d</i><sup>2</sup>) toward plane.',
      },
      {
        t: 'p',
        html: '<b>Sphere:</b> Charge <i>q</i> at distance <i>r</i> > <i>R</i> from centre of grounded sphere radius <i>R</i>. Image charge <i>q</i>′ = −<i>qR</i>/<i>r</i> at distance <i>a</i> = <i>R</i><sup>2</sup>/<i>r</i> from centre (on the line). Force: <i>F</i> = <i>qq</i>′/(4πε<sub>0</sub>(<i>r</i> − <i>a</i>)<sup>2</sup>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Spring–Block–Charge Oscillation',
        q: 'A block of mass <i>m</i> = 0.50 kg, charge <i>q</i> = +10 μC, is attached to a spring (<i>k</i> = 100 N/m) on a frictionless horizontal surface. A fixed charge <i>Q</i> = +20 μC is placed on the line of motion, at a distance <i>d</i> = 0.30 m from the block’s equilibrium position (spring relaxed at <i>x</i> = 0, <i>Q</i> at <i>x</i> = −<i>d</i>). Find (a) the new equilibrium position <i>x</i><sub>0</sub>, (b) the angular frequency of small oscillations about <i>x</i><sub>0</sub>.',
        steps: [
          '<b>Step 1 — Forces.</b> Let block position be <i>x</i> (spring force <i>F</i><sub><i>s</i></sub> = −<i>kx</i>). Distance to <i>Q</i> is <i>x</i> + <i>d</i>. Coulomb repulsion: <i>F</i><sub><i>C</i></sub> = <i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i> + <i>d</i>)<sup>2</sup> in +<i>x</i> direction. Net force: <i>F</i> = −<i>kx</i> + <i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i> + <i>d</i>)<sup>2</sup>.',
          '<b>Step 2 — Equilibrium.</b> <i>F</i>(<i>x</i><sub>0</sub>) = 0 ⇒ <i>kx</i><sub>0</sub> = <i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i><sub>0</sub> + <i>d</i>)<sup>2</sup>. <i>k</i><sub><i>e</i></sub> = 9 × 10<sup>9</sup>, <i>qQ</i> = 200 × 10<sup>−12</sup> = 2 × 10<sup>−10</sup>, <i>k</i><sub><i>e</i></sub><i>qQ</i> = 1.8 N·m<sup>2</sup>. Equation: 100<i>x</i><sub>0</sub> = 1.8/(<i>x</i><sub>0</sub> + 0.30)<sup>2</sup>. Solve numerically: try <i>x</i><sub>0</sub> = 0.10: LHS=10, RHS=1.8/0.16=11.25. <i>x</i><sub>0</sub> = 0.12: LHS=12, RHS=1.8/0.1764=10.2. <i>x</i><sub>0</sub> ≈ 0.11 m. Better: <i>x</i><sub>0</sub> ≈ 0.108 m.',
          '<b>Step 3 — Small oscillation frequency.</b> <i>F</i>(<i>x</i>) ≈ <i>F</i>(<i>x</i><sub>0</sub>) + <i>F</i>′(<i>x</i><sub>0</sub>)(<i>x</i> − <i>x</i><sub>0</sub>). <i>F</i>′(<i>x</i>) = −<i>k</i> − 2<i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i> + <i>d</i>)<sup>3</sup>. At <i>x</i><sub>0</sub>, <i>F</i>′(<i>x</i><sub>0</sub>) = −<i>k</i> − 2<i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i><sub>0</sub> + <i>d</i>)<sup>3</sup>. The equation of motion: <i>mÿ</i> = <i>F</i>′(<i>x</i><sub>0</sub>)<i>y</i> where <i>y</i> = <i>x</i> − <i>x</i><sub>0</sub>.<br><i>ω</i><sup>2</sup> = −<i>F</i>′(<i>x</i><sub>0</sub>)/<i>m</i> = (<i>k</i> + 2<i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i><sub>0</sub> + <i>d</i>)<sup>3</sup>)/<i>m</i>',
          'Using equilibrium condition <i>k</i><sub><i>e</i></sub><i>qQ</i> = <i>kx</i><sub>0</sub>(<i>x</i><sub>0</sub> + <i>d</i>)<sup>2</sup>:<br>2<i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>x</i><sub>0</sub> + <i>d</i>)<sup>3</sup> = 2<i>kx</i><sub>0</sub>/(<i>x</i><sub>0</sub> + <i>d</i>)<br><i>ω</i><sup>2</sup> = (<i>k</i>/<i>m</i>)(1 + 2<i>x</i><sub>0</sub>/(<i>x</i><sub>0</sub> + <i>d</i>))',
          'With <i>x</i><sub>0</sub> ≈ 0.108, <i>d</i> = 0.30: 2<i>x</i><sub>0</sub>/(<i>x</i><sub>0</sub> + <i>d</i>) = 0.216/0.408 ≈ 0.529. <i>ω</i><sup>2</sup> ≈ (100/0.5)(1.529) = 200 × 1.529 = 305.8.',
        ],
        ans: '(a) <i>x</i><sub>0</sub> ≈ 0.11 m from relaxed position. (b) <i>ω</i> ≈ 17.5 rad/s (<i>T</i> ≈ 0.36 s).',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Charge Sharing Between Unequal Spheres',
        q: 'Two conducting spheres of radii <i>R</i><sub>1</sub> = 5 cm and <i>R</i><sub>2</sub> = 15 cm are far apart. Sphere 1 has charge <i>Q</i><sub>1</sub> = 12 μC; sphere 2 is neutral. They are connected by a thin wire. Find (a) the final charges, (b) the charge that flows, (c) the energy lost as heat.',
        steps: [
          '<b>Step 1 — Same potential.</b> <i>V</i><sub>1</sub> = <i>V</i><sub>2</sub> ⇒ <i>Q</i>′<sub>1</sub>/<i>R</i><sub>1</sub> = <i>Q</i>′<sub>2</sub>/<i>R</i><sub>2</sub> ⇒ <i>Q</i>′<sub>1</sub>/<i>Q</i>′<sub>2</sub> = <i>R</i><sub>1</sub>/<i>R</i><sub>2</sub> = 1/3. <i>Q</i>′<sub>1</sub> + <i>Q</i>′<sub>2</sub> = <i>Q</i><sub>total</sub> = 12 μC. <i>Q</i>′<sub>1</sub> = 3 μC, <i>Q</i>′<sub>2</sub> = 9 μC.',
          '<b>Step 2 — Charge flow.</b> Sphere 1 loses 12 − 3 = 9 μC (flows to sphere 2).',
          '<b>Step 3 — Energy loss.</b> Initial energy: <i>U</i><sub><i>i</i></sub> = ½<i>kQ</i><sub>1</sub><sup>2</sup>/<i>R</i><sub>1</sub> (sphere 2 has zero energy). Final energy: <i>U</i><sub><i>f</i></sub> = ½<i>k</i>(<i>Q</i>′<sub>1</sub><sup>2</sup>/<i>R</i><sub>1</sub> + <i>Q</i>′<sub>2</sub><sup>2</sup>/<i>R</i><sub>2</sub>). <i>k</i> = 9 × 10<sup>9</sup>. <i>U</i><sub><i>i</i></sub> = ½ · 9 × 10<sup>9</sup> · (12 × 10<sup>−6</sup>)<sup>2</sup>/0.05 = 4.5 × 10<sup>9</sup> · (144 × 10<sup>−12</sup>)/0.05 = 4.5 × 10<sup>9</sup> · 2.88 × 10<sup>−9</sup> = 12.96 J. <i>U</i><sub><i>f</i></sub> = ½ · 9 × 10<sup>9</sup>((9 × 10<sup>−12</sup>)/0.05 + (81 × 10<sup>−12</sup>)/0.15) = 4.5 × 10<sup>9</sup>(180 × 10<sup>−12</sup> + 540 × 10<sup>−12</sup>) = 4.5 × 10<sup>9</sup> · 720 × 10<sup>−12</sup> = 3.24 J. Energy lost Δ<i>U</i> = <i>U</i><sub><i>i</i></sub> − <i>U</i><sub><i>f</i></sub> = 9.72 J. (Dissipated as heat in the wire.)',
        ],
        ans: '(a) <i>Q</i>′<sub>1</sub> = 3 μC, <i>Q</i>′<sub>2</sub> = 9 μC. (b) 9 μC flows from 1 to 2. (c) Δ<i>U</i> = 9.72 J.',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: 'A block of mass <i>m</i>, charge −<i>q</i>, is attached to a spring (<i>k</i>) on a frictionless table. A fixed charge +<i>Q</i> is placed at distance <i>d</i> from the block’s relaxed position, on the line of the spring. Find the equilibrium position and <i>ω</i> for small oscillations. (Signs opposite to worked example 1.)',
            a: 'Forces: spring −<i>kx</i>, Coulomb attraction +<i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>d</i> − <i>x</i>)<sup>2</sup> (if <i>Q</i> at <i>x</i> = <i>d</i> and block at <i>x</i>). Equilibrium: <i>kx</i><sub>0</sub> = <i>k</i><sub><i>e</i></sub><i>qQ</i>/(<i>d</i> − <i>x</i><sub>0</sub>)<sup>2</sup>. <i>ω</i><sup>2</sup> = (<i>k</i>/<i>m</i>)(1 − 2<i>x</i><sub>0</sub>/(<i>d</i> − <i>x</i><sub>0</sub>)) — requires <i>x</i><sub>0</sub> < <i>d</i>/3 for stability.',
          },
          {
            q: 'Three identical charges <i>q</i> are placed on a ring of radius <i>R</i>, free to slide. A fourth charge <i>Q</i> is fixed at the centre. Find the equilibrium positions of the three charges and the condition on <i>Q</i>/<i>q</i> for stable equilibrium.',
            a: 'By symmetry, three charges at 120° intervals. Net force on one from other two: 2 · <i>kq</i><sup>2</sup>/(2<i>R</i> sin 60°)<sup>2</sup> cos 30° = <i>kq</i><sup>2</sup>/(√3<i>R</i><sup>2</sup>) radially outward. Force from <i>Q</i>: <i>kqQ</i>/<i>R</i><sup>2</sup> inward.<br><b>Equilibrium:</b> for beads on a rigid ring the ring supplies any radial force, so the 120° arrangement is an equilibrium for any <i>Q</i>. (Were the charges held on the circle by <i>Q</i> alone, with no ring, <i>Q</i> would have to pull inward: opposite in sign to <i>q</i>, with <i>kq</i>|<i>Q</i>|/<i>R</i><sup>2</sup> = <i>kq</i><sup>2</sup>/(√3<i>R</i><sup>2</sup>), i.e. <i>Q</i> = −<i>q</i>/√3 ≈ −0.577<i>q</i>.) <b>Stability:</b> the field of <i>Q</i> is radial, so it exerts no tangential force; the mutual repulsion of the three ring charges restores any tangential displacement, so the 120° arrangement is stable along the ring for any <i>Q</i>.',
          },
          {
            q: 'A point charge <i>q</i> is placed at distance <i>r</i> = 2<i>R</i> from the centre of a grounded conducting sphere of radius <i>R</i>. Find the image charge magnitude and position, and the force on <i>q</i>.',
            a: 'Image: <i>q</i>′ = −<i>qR</i>/<i>r</i> = −<i>q</i>/2 at <i>a</i> = <i>R</i><sup>2</sup>/<i>r</i> = <i>R</i>/2. Distance from <i>q</i> to image: <i>r</i> − <i>a</i> = 2<i>R</i> − <i>R</i>/2 = 3<i>R</i>/2. Force: <i>F</i> = <i>kq</i>(<i>q</i>/2)/(9<i>R</i><sup>2</sup>/4) = 2<i>kq</i><sup>2</sup>/(9<i>R</i><sup>2</sup>) attractive toward sphere.',
          },
          {
            q: 'Two conducting spheres of radii <i>R</i> and 2<i>R</i>, far apart, carry charges <i>Q</i> and −<i>Q</i> respectively. They are connected by a wire. Find the final charges and the energy dissipated.',
            a: 'Total charge = 0. Potentials equal: <i>Q</i>′<sub>1</sub>/<i>R</i> = <i>Q</i>′<sub>2</sub>/(2<i>R</i>) ⇒ <i>Q</i>′<sub>2</sub> = 2<i>Q</i>′<sub>1</sub>. <i>Q</i>′<sub>1</sub> + <i>Q</i>′<sub>2</sub> = 0 ⇒ <i>Q</i>′<sub>1</sub> = 0, <i>Q</i>′<sub>2</sub> = 0. All charge flows and neutralizes. Initial energy: <i>U</i><sub><i>i</i></sub> = ½<i>k</i>(<i>Q</i><sup>2</sup>/<i>R</i> + <i>Q</i><sup>2</sup>/(2<i>R</i>)) = (3/4)<i>kQ</i><sup>2</sup>/<i>R</i>. Final energy = 0. Dissipated = (3/4)<i>kQ</i><sup>2</sup>/<i>R</i>.',
          },
          {
            q: 'A dipole <i>p⃗</i> is constrained to move on the axis of a fixed ring of charge <i>Q</i>, radius <i>R</i>. The dipole is always aligned with the axis. Find the equilibrium position(s) and their stability.',
            a: 'Ring field on axis: <i>E</i>(<i>z</i>) = <i>kQz</i>/(<i>z</i><sup>2</sup> + <i>R</i><sup>2</sup>)<sup>3/2</sup>. Dipole energy <i>U</i> = −<i>pE</i>(<i>z</i>). Equilibrium: d<i>U</i>/d<i>z</i> = 0 ⇒ d<i>E</i>/d<i>z</i> = 0. From chapter, d<i>E</i>/d<i>z</i> = 0 at <i>z</i> = ±<i>R</i>/√2. Taking <i>Q</i> > 0, <i>E</i> is a maximum at <i>z</i> = +<i>R</i>/√2 and a minimum at <i>z</i> = −<i>R</i>/√2. So for <i>p</i> > 0 (aligned with +<i>z</i>), <i>U</i> has a minimum at <i>z</i> = <i>R</i>/√2 — stable — and a maximum at <i>z</i> = −<i>R</i>/√2 — unstable; for <i>p</i> < 0 the two swap. Another equilibrium at <i>z</i> = 0? <i>E</i>(0) = 0, d<i>E</i>/d<i>z</i> > 0 for small <i>z</i>, so <i>U</i> ≈ −<i>p</i>(<i>kQ</i>/<i>R</i><sup>3</sup>)<i>z</i> — no equilibrium at <i>z</i> = 0 unless <i>p</i> = 0. The equilibria are <i>z</i> = ±<i>R</i>/√2 for either orientation; the sign of <i>pQ</i> decides which is stable.',
          },
        ],
      },
    ],
  },
];
