import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 7, Topics 05 and 06, pp. 504–525 of the Class 11 Physics Master
 * Reference, word for word: Kepler's Laws and Satellites (the book's Part 5,
 * pp. 504 to 514) and The Gravitational Constant & Two-Body Systems (Part 6,
 * pp. 515 to 525), each split at the book's Sections 1 to 8. The book's
 * "Master Formula Sheet — All of Chapter 7" (pp. 526–527) is left out: it
 * repeats the cheat sheets, and the app has its own chapter Formula sheet.
 * Figures 7.10 (p. 504, drawn on p. 505), 7.11 (p. 510, drawn on p. 511),
 * 7.12 (p. 517, drawn on p. 518) and 7.13 (p. 521, drawn on p. 522).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 05 · pp. 504–514 ─────────────────────────
  {
    n: '05',
    title: 'Kepler’s Laws and Satellites',
    kalam:
      'Long before Newton, Johannes Kepler stared at decades of Tycho Brahe’s planetary data and distilled three crisp rules that the planets obey.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The chapter’s grand finale and a guaranteed scorer. JEE Main asks 2–3 questions (Kepler’s third law ratios, orbital velocity, satellite energy, geostationary parameters). NEET loves Kepler’s laws, weightlessness, and <i>T</i>–<i>r</i> scaling. JEE Advanced sets elliptical-orbit problems using angular-momentum and energy conservation. CBSE Boards expect all three Kepler laws, the orbital-velocity and time-period derivations, and the energy of a satellite — frequently 3–5 marks.',
      },
      {
        t: 'p',
        html: 'Picture standing on top of an impossibly tall mountain and firing a cannonball horizontally. Fire it gently — it arcs down and lands nearby. Fire it harder — it lands much farther, the Earth’s surface curving away a little beneath its path. Fire it hard enough, and something magical happens: the ball falls toward the Earth at exactly the rate the round Earth curves away under it. It keeps falling forever and never lands. <b>That is an orbit.</b> A satellite — the Moon, the ISS, a communications relay — is not “escaping” gravity or “balancing” it. It is in perpetual free fall, endlessly falling around the Earth. This single image (Newton’s own thought experiment) is the key to the entire topic.',
      },
      { t: 'fig', id: 'p11-07-fig-7.10' },
      {
        t: 'p',
        html: 'Long before Newton, Johannes Kepler stared at decades of Tycho Brahe’s planetary data and distilled three crisp rules that the planets obey. He didn’t know why — that took Newton’s gravity — but the rules were exact:<br>• <b>Orbits are ellipses,</b> not perfect circles, with the Sun sitting at one focus (not the centre).<br>• <b>Planets sweep equal areas in equal times.</b> This is why a planet races when it’s near the Sun and dawdles when it’s far. <b>Think about it this way…</b> imagine the planet tethered to the Sun by an elastic string; as it swings in close, the string is short, so it must whip around quickly to sweep out the same “pizza slice” of area each second; far away, with a long string, it crawls. This “equal areas” rule is secretly the <b>conservation of angular momentum</b> in disguise — the planet speeds up exactly enough to keep <i>L</i> constant.<br>• <b>Bigger orbits mean longer years,</b> and precisely so: the square of the period grows as the cube of the orbit size. Mercury whips around the Sun in 88 days; distant Pluto takes 248 years.',
      },
      {
        t: 'p',
        html: 'The beautiful part: Newton’s inverse-square gravity reproduces all three laws automatically. We’ll derive the third one for circular orbits in a few lines.<br><br>Two ideas that constantly confuse students, settled up front:',
      },
      {
        t: 'p',
        html: '<b>Weightlessness is not the absence of gravity.</b> An astronaut floating in the ISS is not beyond Earth’s pull — gravity there is nearly as strong as on the ground. They float because they and their spacecraft are both falling together, in free fall, so there is no contact force between them. It’s the same floating you’d feel in a lift whose cable snapped (don’t try it).',
      },
      {
        t: 'p',
        html: '<b>A satellite’s total energy is negative.</b> Being bound in the gravitational “valley,” its energy lies below the zero we set at infinity (recall Topic 04). Negative total energy is the mathematical signature of a bound, closed orbit.',
      },
      {
        t: 'p',
        html: '<b>Two kinds of useful satellites.</b> Not all satellites are alike. A <b>geostationary</b> satellite sits far out (about 36,000 km up) in the equatorial plane, circling once every 24 hours in the same direction the Earth spins — so it hovers over one fixed spot and appears motionless from the ground. That makes it perfect for television, telephone, and weather relay: your dish can point at one unchanging place in the sky. A <b>polar</b> satellite, by contrast, orbits low (about 500–800 km) in a north–south plane passing over the poles. As the Earth rotates beneath it, the satellite scans a fresh strip of the surface on each pass, eventually covering the whole globe — ideal for mapping, spying, and remote sensing. High-and-fixed for communication; low-and-sweeping for imaging.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b> Most of our formulas assume a <b>circular orbit</b> (a fine first approximation; real orbits are ellipses), a <b>two-body</b> system where the planet is far heavier than the satellite, <b>spherically symmetric</b> masses, and <b>no atmospheric drag</b>. The clean energy and velocity results below are for circular orbits; for ellipses we use the semi-major axis <i>a</i> and lean on conservation laws.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Kepler’s Laws',
        main: '1. Law of Orbits: every planet moves in an ellipse with the Sun at one focus.<br>2. Law of Areas: the radius vector sweeps equal areas in equal times — equivalently,<br>areal velocity d<i>A</i>/d<i>t</i> = <i>L</i>/(2<i>m</i>) = constant (angular momentum conserved).<br>3. Law of Periods: <i>T</i><sup>2</sup> ∝ <i>a</i><sup>3</sup> (<i>a</i> = semi-major axis; for a circle, <i>a</i> = <i>r</i>).',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Orbital velocity',
        main: '(gravity supplies the centripetal force):<br><i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>) = <i>R</i>√(<i>g</i>/<i>r</i>) →<sup><i>r</i>≈<i>R</i></sup> √(<i>gR</i>) ≈ 7.9 km/s',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Time period of a satellite',
        main: '<i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>GM</i>)) = 2π√(<i>r</i><sup>3</sup>/(<i>gR</i><sup>2</sup>)) →<sup><i>r</i>≈<i>R</i></sup> 2π√(<i>R</i>/<i>g</i>) ≈ 84.6 min',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Energies of a satellite in a circular orbit',
        main: '<i>K</i> = <i>GMm</i>/(2<i>r</i>), <i>U</i> = −<i>GMm</i>/<i>r</i>, <i>E</i> = <i>K</i> + <i>U</i> = −<i>GMm</i>/(2<i>r</i>)',
        legend: [],
        note: 'with the tidy relations <i>K</i> = −<i>E</i> and <i>U</i> = 2<i>E</i>.',
      },
      {
        t: 'formula',
        kicker: 'Binding energy (to send it to infinity)',
        main: '−<i>E</i> = <i>GMm</i>/(2<i>r</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Relation to escape velocity',
        main: '<i>v</i><sub><i>e</i></sub> = √2 <i>v</i><sub><i>o</i></sub>',
        legend: [],
        note: '(closing the loop from Topic 04).',
      },
      {
        t: 'formula',
        kicker: 'Angular momentum of a satellite',
        main: '<i>L</i> = <i>mv</i><sub><i>o</i></sub><i>r</i> = <i>m</i>√(<i>GMr</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Geostationary satellite',
        main: '<i>T</i> = 24 h, circular, <b>equatorial</b> plane, <b>west-to-east</b>, <i>r</i> ≈ 42,000 km, height <i>h</i> ≈ 36,000 km (≈ 6<i>R</i>; more exactly 5.6<i>R</i>), <i>v</i><sub><i>o</i></sub> ≈ 3.1 km/s',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Elliptical orbit (JEE)',
        main: 'Total energy <i>E</i> = −<i>GMm</i>/(2<i>a</i>)<br>at perigee/apogee (where <i>v</i> ⊥ <i>r</i>) angular momentum conservation gives:<br><i>v</i><sub><i>p</i></sub><i>r</i><sub><i>p</i></sub> = <i>v</i><sub><i>a</i></sub><i>r</i><sub><i>a</i></sub>',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>v</i><sub><i>o</i></sub>, <i>v</i><sub><i>e</i></sub>', 'Orbital velocity, escape velocity', 'm/s'],
          ['<i>T</i>', 'Period of revolution', 's'],
          ['<i>r</i>, <i>R</i>, <i>h</i>, <i>a</i>', 'Orbital radius; planet radius; height; semi-major axis', 'm'],
          ['<i>E</i>, <i>K</i>, <i>U</i>', 'Total / kinetic / potential energy', 'J'],
          ['<i>L</i>', 'Angular momentum of the satellite', 'kg·m<sup>2</sup>s<sup>−1</sup>'],
        ],
      },

      { t: 'part', title: 'CBSE board derivations' },
      {
        t: 'p',
        html: '<b>(a) Orbital velocity: <i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>)</b><br>A satellite of mass <i>m</i> moves in a circle of radius <i>r</i>. The only force on it is the planet’s gravity, pointing toward the centre — and that is exactly what a circular path needs as its centripetal force. So we set gravitational force equal to the required centripetal force:<br><i>GMm</i>/<i>r</i><sup>2</sup> = <i>mv</i><sub><i>o</i></sub><sup>2</sup>/<i>r</i><br>The reasoning: the planet’s pull doesn’t “fight” the motion, it bends it into a circle. Cancelling <i>m</i> and one power of <i>r</i>:<br><i>v</i><sub><i>o</i></sub><sup>2</sup> = <i>GM</i>/<i>r</i> ⇒ <i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>)<br>Notice <i>v</i><sub><i>o</i></sub> is <b>independent of the satellite’s mass</b> — a bolt and a space station at the same height orbit at the same speed. Smaller orbits demand higher speeds (<i>v</i><sub><i>o</i></sub> ∝ 1/√<i>r</i>).',
      },
      {
        t: 'p',
        html: '<b>(b) Time period and Kepler’s Third Law</b><br>The satellite covers one circumference 2π<i>r</i> in one period:<br><i>T</i> = 2π<i>r</i>/<i>v</i><sub><i>o</i></sub> = 2π<i>r</i>/√(<i>GM</i>/<i>r</i>) = 2π<i>r</i>√(<i>r</i>/(<i>GM</i>)) = 2π√(<i>r</i><sup>3</sup>/(<i>GM</i>))<br>Squaring lays bare Kepler’s third law:<br><i>T</i><sup>2</sup> = (4π<sup>2</sup>/(<i>GM</i>))<i>r</i><sup>3</sup> ⇒ <i>T</i><sup>2</sup> ∝ <i>r</i><sup>3</sup><br>The proportionality constant 4π<sup>2</sup>/(<i>GM</i>) depends only on the central mass <i>M</i> — the same for all satellites of that planet. This is Newton’s gravity deriving what Kepler could only observe.',
      },
      {
        t: 'p',
        html: '<b>(c) Energy of a satellite</b><br>The kinetic energy uses the orbital speed from part (a):<br><i>K</i> = ½<i>mv</i><sub><i>o</i></sub><sup>2</sup> = ½<i>m</i> · <i>GM</i>/<i>r</i> = <i>GMm</i>/(2<i>r</i>)<br>The potential energy (from Topic 04) is <i>U</i> = −<i>GMm</i>/<i>r</i>. Adding:<br><i>E</i> = <i>K</i> + <i>U</i> = <i>GMm</i>/(2<i>r</i>) − <i>GMm</i>/<i>r</i> = −<i>GMm</i>/(2<i>r</i>)<br>Three things to read off: <i>E</i> is <b>negative</b> (bound orbit); the kinetic energy equals the magnitude of the total energy (<i>K</i> = −<i>E</i>); and as the orbit grows (<i>r</i> ↑), <i>E</i> rises toward zero — a higher orbit is a higher-energy (less tightly bound) state, even though it moves slower.',
      },
      {
        t: 'p',
        html: '<b>(d) Kepler’s Second Law = conservation of angular momentum</b><br>Gravity always points along the line joining satellite and planet — it is a <b>central force</b>, so it exerts no torque about the centre. With zero torque, the satellite’s angular momentum <i>L</i> is constant. The area swept per unit time is d<i>A</i>/d<i>t</i> = <i>L</i>/(2<i>m</i>); since <i>L</i> and <i>m</i> are constant, <b>equal areas are swept in equal times.</b> This is why a planet speeds up near the Sun (small <i>r</i> forces large <i>v</i> to keep <i>L</i> = <i>mvr</i> fixed) — the law of areas is angular-momentum conservation wearing a geometric costume.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A satellite orbits the Earth in a circular path at a height of 600 km above the surface. Find (a) its orbital speed and (b) its period of revolution. Take <i>M</i> = 6.0 × 10<sup>24</sup> kg, <i>R</i> = 6.4 × 10<sup>6</sup> m, <i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup>kg<sup>−2</sup>.',
        steps: [
          '<b>Given:</b> <i>h</i> = 600 km = 6.0 × 10<sup>5</sup> m, so orbital radius <i>r</i> = <i>R</i> + <i>h</i> = 7.0 × 10<sup>6</sup> m.',
          '<b>(a) Orbital speed:</b><br><i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>) = √((6.67 × 10<sup>−11</sup>)(6.0 × 10<sup>24</sup>)/(7.0 × 10<sup>6</sup>)) = √(5.72 × 10<sup>7</sup>) ≈ 7.6 × 10<sup>3</sup> m/s',
          '<b>(b) Period:</b><br><i>T</i> = 2π<i>r</i>/<i>v</i><sub><i>o</i></sub> = 2π(7.0 × 10<sup>6</sup>)/(7.6 × 10<sup>3</sup>) ≈ 5.8 × 10<sup>3</sup> s ≈ 97 min',
          'A low-Earth-orbit satellite circles the planet roughly every hour and a half — consistent with the ISS, which orbits about 15½ times a day.',
        ],
        ans: '<i>v</i><sub><i>o</i></sub> ≈ 7.6 km/s, <i>T</i> ≈ 97 minutes.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The period of a satellite in a circular orbit around the Earth is 6 hours. If its orbital radius is increased to 4 times the original, what is the new period?',
        steps: [
          '<b>Use Kepler’s third law as a ratio.</b> Since <i>T</i><sup>2</sup> ∝ <i>r</i><sup>3</sup>, we have <i>T</i> ∝ <i>r</i><sup>3/2</sup>. So:<br><i>T</i><sub>2</sub>/<i>T</i><sub>1</sub> = (<i>r</i><sub>2</sub>/<i>r</i><sub>1</sub>)<sup>3/2</sup> = (4)<sup>3/2</sup> = 8 ⇒ <i>T</i><sub>2</sub> = 8 × 6 = 48 hours',
          '<b>The trap:</b> the tempting wrong answers are 4 × 6 = 24 h (treating <i>T</i> ∝ <i>r</i>) or applying the wrong power. The exponent is 3/2: take the radius factor, cube it, then square-root it — here 4<sup>3</sup> = 64, √64 = 8. Respect the 3/2 and the problem is a five-second mental calculation.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Kepler III × the geostationary condition)',
        q: 'Find the height above the Earth’s surface at which a geostationary satellite must orbit. Take <i>M</i> = 6.0 × 10<sup>24</sup> kg, <i>R</i> = 6.4 × 10<sup>6</sup> m.',
        steps: [
          'A geostationary satellite must have a period equal to the Earth’s rotation period, <i>T</i> = 24 h = 86,400 s. From <i>T</i><sup>2</sup> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GM</i>), solve for <i>r</i>:<br><i>r</i> = (<i>GMT</i><sup>2</sup>/(4π<sup>2</sup>))<sup>1/3</sup> = ((6.67 × 10<sup>−11</sup>)(6.0 × 10<sup>24</sup>)(86,400)<sup>2</sup>/(4π<sup>2</sup>))<sup>1/3</sup>',
          'Compute the inside: <i>GM</i> = 4.0 × 10<sup>14</sup>; <i>T</i><sup>2</sup> = 7.47 × 10<sup>9</sup>; numerator = 4.0 × 10<sup>14</sup> × 7.47 × 10<sup>9</sup> = 2.99 × 10<sup>24</sup>; divide by 4π<sup>2</sup> = 39.5:<br><i>r</i><sup>3</sup> = 7.56 × 10<sup>22</sup> m<sup>3</sup> ⇒ <i>r</i> = (7.56 × 10<sup>22</sup>)<sup>1/3</sup> ≈ 4.2 × 10<sup>7</sup> m',
          'Therefore the height is<br><i>h</i> = <i>r</i> − <i>R</i> = 4.2 × 10<sup>7</sup> − 6.4 × 10<sup>6</sup> ≈ 3.6 × 10<sup>7</sup> m = 36,000 km',
          'Every television and weather satellite parked over the equator sits at this single, special altitude — the only height where a satellite’s period matches the day, so it hovers over one fixed spot.',
        ],
        ans: '<i>h</i> ≈ 36,000 km (≈ 6<i>R</i>; more exactly 5.6<i>R</i>).',
      },
      {
        t: 'ex',
        fig: 'p11-07-fig-7.11',
        tag: 'JEE Advanced Level (Energy + angular-momentum conservation)',
        q: 'A satellite is in a circular orbit of radius <i>r</i><sub>0</sub> around a planet of mass <i>M</i>. A brief engine burn suddenly increases its speed to √(3/2) times the circular orbital speed, directed tangentially (still perpendicular to the radius). Find the maximum distance the satellite reaches from the planet’s centre.',
        steps: [
          '<b>Setup.</b> The circular speed is <i>v</i><sub>0</sub> = √(<i>GM</i>/<i>r</i><sub>0</sub>). The boosted speed is<br><i>v</i> = √(3/2) <i>v</i><sub>0</sub> = √(3<i>GM</i>/(2<i>r</i><sub>0</sub>))<br>Since <i>v</i><sub>0</sub> < <i>v</i> < √2 <i>v</i><sub>0</sub> = <i>v</i><sub><i>e</i></sub>, the satellite stays bound but on an ellipse. The burn point (radius <i>r</i><sub>0</sub>) becomes the <b>perigee</b> (closest approach); we want the <b>apogee</b> distance <i>r</i><sub><i>a</i></sub>.',
          '<b>Two conservation laws.</b> Gravity is central (no torque) and conservative:<br>• Angular momentum (velocity is perpendicular to radius at both perigee and apogee): <i>mvr</i><sub>0</sub> = <i>mv</i><sub><i>a</i></sub><i>r</i><sub><i>a</i></sub> ⇒ <i>v</i><sub><i>a</i></sub> = <i>vr</i><sub>0</sub>/<i>r</i><sub><i>a</i></sub>.<br>• Energy: ½<i>v</i><sup>2</sup> − <i>GM</i>/<i>r</i><sub>0</sub> = ½<i>v</i><sub><i>a</i></sub><sup>2</sup> − <i>GM</i>/<i>r</i><sub><i>a</i></sub>.',
          '<b>Solve.</b> Substitute <i>v</i><sup>2</sup> = 3<i>GM</i>/(2<i>r</i><sub>0</sub>) and <i>v</i><sub><i>a</i></sub> = <i>vr</i><sub>0</sub>/<i>r</i><sub><i>a</i></sub> into the energy equation:<br>3<i>GM</i>/(4<i>r</i><sub>0</sub>) − <i>GM</i>/<i>r</i><sub>0</sub> = 3<i>GMr</i><sub>0</sub>/(4<i>r</i><sub><i>a</i></sub><sup>2</sup>) − <i>GM</i>/<i>r</i><sub><i>a</i></sub><br>Divide through by <i>GM</i> and simplify the left side (3/(4<i>r</i><sub>0</sub>) − 1/<i>r</i><sub>0</sub> = −1/(4<i>r</i><sub>0</sub>)):<br>−1/(4<i>r</i><sub>0</sub>) = 3<i>r</i><sub>0</sub>/(4<i>r</i><sub><i>a</i></sub><sup>2</sup>) − 1/<i>r</i><sub><i>a</i></sub><br>Multiply by 4<i>r</i><sub>0</sub><i>r</i><sub><i>a</i></sub><sup>2</sup>:<br>−<i>r</i><sub><i>a</i></sub><sup>2</sup> = 3<i>r</i><sub>0</sub><sup>2</sup> − 4<i>r</i><sub>0</sub><i>r</i><sub><i>a</i></sub> ⇒ <i>r</i><sub><i>a</i></sub><sup>2</sup> − 4<i>r</i><sub>0</sub><i>r</i><sub><i>a</i></sub> + 3<i>r</i><sub>0</sub><sup>2</sup> = 0 ⇒ (<i>r</i><sub><i>a</i></sub> − <i>r</i><sub>0</sub>)(<i>r</i><sub><i>a</i></sub> − 3<i>r</i><sub>0</sub>) = 0',
          'A modest 22% speed boost (√1.5 ≈ 1.22) triples the far-point distance — the steep sensitivity of orbits to launch speed, which is why orbital insertions demand such precision.',
        ],
        ans: 'The roots are <i>r</i><sub><i>a</i></sub> = <i>r</i><sub>0</sub> (the perigee we started from) and <i>r</i><sub><i>a</i></sub> = 3<i>r</i><sub>0</sub> (the apogee). The maximum distance is <i>r</i><sub><i>a</i></sub> = 3<i>r</i><sub>0</sub>.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State Kepler’s three laws of planetary motion in one line each, and identify which law is a statement of the conservation of angular momentum.',
            a: 'Orbits (ellipse, Sun at focus); Areas (equal areas in equal times); Periods (<i>T</i><sup>2</sup> ∝ <i>a</i><sup>3</sup>). The <b>Law of Areas</b> expresses angular-momentum conservation.',
          },
          {
            q: '[NEET] Two satellites of the same planet have orbital radii in the ratio 1 : 4. Find the ratio of their orbital speeds.',
            a: '<i>v</i><sub><i>o</i></sub> ∝ 1/√<i>r</i>, so ratio = √4 : √1 = 2 : 1.',
          },
          {
            q: '[JEE Main] A satellite of mass <i>m</i> is in a circular orbit of radius <i>r</i> around a planet of mass <i>M</i>. How much additional energy must be supplied to move it to a circular orbit of radius 2<i>r</i>?',
            a: 'Δ<i>E</i> = <i>E</i><sub><i>f</i></sub> − <i>E</i><sub><i>i</i></sub> = −<i>GMm</i>/(4<i>r</i>) − (−<i>GMm</i>/(2<i>r</i>)) = <i>GMm</i>/(4<i>r</i>).',
          },
          {
            q: '[JEE Main] The orbital speed of a satellite very close to a planet’s surface is <i>v</i><sub><i>o</i></sub>. Show that the minimum speed needed for the satellite to escape the planet from that point is √2 <i>v</i><sub><i>o</i></sub>, and state the percentage increase required.',
            a: '<i>v</i><sub><i>e</i></sub> = √2 <i>v</i><sub><i>o</i></sub>; an increase of (√2 − 1) × 100% ≈ 41.4%.',
          },
          {
            q: '[JEE Advanced] A satellite is launched into a circular orbit of radius <i>r</i> with the correct orbital speed, but the launch vehicle accidentally directs the velocity at a small angle to the horizontal (still with the correct magnitude). Will the orbit remain circular? Describe the resulting orbit and name the conserved quantities that determine it.',
            a: 'No — it becomes an <b>ellipse</b> of the same semi-major axis (same speed ⇒ same energy ⇒ same <i>a</i>), with the launch point neither perigee nor apogee; the orbit is fixed by conserved <b>energy</b> and <b>angular momentum</b>.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'If the gravitational attraction between the Earth and an orbiting satellite suddenly vanished, the satellite would:',
        opts: [
          { label: 'fall straight down to Earth', nudge: '(A) wrongly assumes some leftover “downward” tendency.' },
          { label: 'continue along the original circular orbit', nudge: '(B) forgets that the inward force is required to maintain a circle.' },
          { label: 'fly off along the tangent to the orbit with its current speed', nudge: null },
          { label: 'stop and remain stationary', nudge: '(D) ignores the satellite’s large existing velocity.' },
        ],
        correct: 2,
        solution:
          'With no force, Newton’s first law takes over — the satellite travels in a straight line, tangent to where it was, at the speed it already had. Gravity was the only thing bending its path into a circle; remove it and the bending stops.',
      },
      {
        t: 'mcq',
        q: 'For a satellite in a stable circular orbit, which relation between kinetic energy <i>K</i>, potential energy <i>U</i>, and total energy <i>E</i> is correct?',
        opts: [
          { label: '<i>K</i> = <i>E</i>, <i>U</i> = −2<i>E</i>', nudge: '(A) and (C) scramble the signs/factors.' },
          { label: '<i>K</i> = −<i>E</i>, <i>U</i> = 2<i>E</i>', nudge: null },
          { label: '<i>K</i> = 2<i>E</i>, <i>U</i> = −<i>E</i>', nudge: '(A) and (C) scramble the signs/factors.' },
          { label: '<i>K</i> = <i>U</i>', nudge: '(D) is false — here |<i>U</i>| = 2<i>K</i>, never equal.' },
        ],
        correct: 1,
        solution:
          'From the derivations, <i>K</i> = +<i>GMm</i>/(2<i>r</i>), <i>U</i> = −<i>GMm</i>/<i>r</i>, <i>E</i> = −<i>GMm</i>/(2<i>r</i>). Hence <i>K</i> = −<i>E</i> (kinetic energy equals the magnitude of total energy) and <i>U</i> = 2<i>E</i> (both negative). This sign-and-factor bookkeeping is a JEE Main favourite.',
      },
      {
        t: 'mcq',
        q: 'A geostationary satellite must satisfy all of the following <b>except</b>:',
        opts: [
          {
            label: 'orbit in the equatorial plane',
            nudge: '(A), (B), (C) are the three genuine conditions — equatorial plane, same sense as Earth’s spin (west-to-east), and a matching 24-hour period.',
          },
          {
            label: 'revolve from west to east',
            nudge: '(A), (B), (C) are the three genuine conditions — equatorial plane, same sense as Earth’s spin (west-to-east), and a matching 24-hour period.',
          },
          {
            label: 'have a period of 24 hours',
            nudge: '(A), (B), (C) are the three genuine conditions — equatorial plane, same sense as Earth’s spin (west-to-east), and a matching 24-hour period.',
          },
          { label: 'be positioned directly above any chosen city', nudge: null },
        ],
        correct: 3,
        solution:
          'A geostationary satellite can hover only over points on the <b>equator</b>, because its orbital plane must contain the Earth’s centre and lie in the equatorial plane. It cannot be parked over, say, New Delhi (which is north of the equator). The trap in (D) is the intuitive but wrong belief that you can “park” a satellite over your own city.',
      },
      {
        t: 'mcq',
        q: 'An astronaut inside an orbiting space station feels weightless because:',
        opts: [
          {
            label: 'there is no gravity at that height',
            nudge: '(A) and (B) are flatly wrong — gravity at ISS altitude is roughly 90% of its surface value.',
          },
          {
            label: 'the station is beyond the Earth’s gravitational field',
            nudge: '(A) and (B) are flatly wrong — gravity at ISS altitude is roughly 90% of its surface value.',
          },
          { label: 'the astronaut and the station are in free fall together, so there is no contact force', nudge: null },
          {
            label: 'the centrifugal force exactly cancels gravity in the ground frame',
            nudge: '(D) misuses “centrifugal force,” which only appears in the rotating frame; in the inertial ground frame, gravity is unbalanced and provides the centripetal force.',
          },
        ],
        correct: 2,
        solution:
          'Both astronaut and station accelerate toward the Earth at the same rate (the local <i>g</i>), so the floor exerts no normal force on the astronaut — apparent weight is zero. Gravity is very much present; it is precisely what supplies the centripetal acceleration. The key idea: weightlessness = shared free fall, not absent gravity.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Scaling the period linearly.</b> Kepler’s third law is <i>T</i> ∝ <i>r</i><sup>3/2</sup>, not <i>T</i> ∝ <i>r</i>. Quadrupling the radius multiplies the period by 8, not 4. Cube the radius factor, then take the square root.',
          '<b>“Weightless means no gravity.”</b> False. Orbiting astronauts are in free fall with nearly full gravity acting. State it as shared free fall in exams — examiners specifically test this misconception.',
          '<b>Forgetting the sign / factor in satellite energy.</b> <i>E</i> = −<i>GMm</i>/(2<i>r</i>) is negative and half the magnitude of <i>U</i>. Writing <i>E</i> = −<i>GMm</i>/<i>r</i> (that’s <i>U</i>, not <i>E</i>) or dropping the negative sign is a frequent and costly slip.',
          '<b>Confusing orbital and escape velocity.</b> <i>v</i><sub><i>e</i></sub> = √2 <i>v</i><sub><i>o</i></sub> — only a 41.4% increase separates “orbiting forever” from “escaping forever.” Mixing the two (or the factor √2) reverses the physics of whether an orbit is bound.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — let conservation laws do the work in elliptical orbits.</b> At perigee and apogee the velocity is perpendicular to the radius, so angular momentum gives the clean relation <i>v</i><sub><i>p</i></sub><i>r</i><sub><i>p</i></sub> = <i>v</i><sub><i>a</i></sub><i>r</i><sub><i>a</i></sub>. Pair it with energy conservation and almost any two-point ellipse problem falls out — no calculus, no orbital equation needed.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — remember the chapter’s “magic numbers.”</b> Near-surface orbit: <i>v</i><sub><i>o</i></sub> ≈ 7.9 km/s, <i>T</i> ≈ 84.6 min (the same 2π√(<i>R</i>/<i>g</i>) as the tunnel-through-Earth SHM and the weightless-equator day from Topic 03 — all three are governed by one expression). Escape: <i>v</i><sub><i>e</i></sub> ≈ 11.2 km/s = √2 <i>v</i><sub><i>o</i></sub>. Geostationary: <i>T</i> = 24 h, <i>h</i> ≈ 36,000 km, <i>v</i><sub><i>o</i></sub> ≈ 3.1 km/s. Memorising these turns many questions into instant recognition.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Kepler',
            note: '(1) elliptical orbits, Sun at a focus; (2) equal areas in equal times = angular-momentum conservation; (3) <i>T</i><sup>2</sup> ∝ <i>a</i><sup>3</sup>.',
          },
          {
            f: 'Orbital velocity',
            note: '<i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>); near surface √(<i>gR</i>) ≈ 7.9 km/s. Independent of satellite mass.',
          },
          { f: 'Period', note: '<i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>GM</i>)); near surface ≈ 84.6 min.' },
          {
            f: 'Energies',
            note: '<i>K</i> = <i>GMm</i>/(2<i>r</i>), <i>U</i> = −<i>GMm</i>/<i>r</i>, <i>E</i> = −<i>GMm</i>/(2<i>r</i>). So <i>K</i> = −<i>E</i>, <i>U</i> = 2<i>E</i>; binding energy = <i>GMm</i>/(2<i>r</i>).',
          },
          { f: 'Escape link', note: '<i>v</i><sub><i>e</i></sub> = √2 <i>v</i><sub><i>o</i></sub> (≈ 41.4% faster ⇒ escape).' },
          {
            f: 'Geostationary',
            note: '<i>T</i> = 24 h, equatorial, west-to-east, <i>h</i> ≈ 36,000 km (≈ 6<i>R</i>; more exactly 5.6<i>R</i>), <i>v</i><sub><i>o</i></sub> ≈ 3.1 km/s. <b>Polar:</b> low (∼ 500–800 km), north-south, for imaging/remote sensing.',
          },
          {
            f: 'Ellipse',
            note: '<i>E</i> = −<i>GMm</i>/(2<i>a</i>); at perigee/apogee <i>v</i><sub><i>p</i></sub><i>r</i><sub><i>p</i></sub> = <i>v</i><sub><i>a</i></sub><i>r</i><sub><i>a</i></sub>.',
          },
        ],
        aids: [
          '“Areas = angular momentum” — Kepler’s 2nd law in one breath.',
          '“<i>T</i> goes as <i>r</i>-to-the-three-halves” — quadruple <i>r</i> ⇒ ×8 period.',
          '“Weightless = falling together, not gravity-free.”',
          '“<i>v</i><sub><i>e</i></sub> = √2 <i>v</i><sub><i>o</i></sub>; 84.6 min; 36,000 km” — the three numbers that crack half the questions.',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 06 · pp. 515–527 ─────────────────────────
  {
    n: '06',
    title: 'The Gravitational Constant & Two-Body Systems',
    kalam: 'To prise G loose, you must measure the gravitational force between two masses you can weigh in a laboratory.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Two distinct exam targets. The Cavendish experiment and mass/density of the Earth are reliable CBSE 2–3 mark questions and appear in NEET as numericals (<i>M</i> or <i>ρ</i> of a planet from <i>g</i>). Binary-star and two-body (reduced-mass) systems are a JEE Advanced specialty, occasionally JEE Main. Knowing how <i>G</i> was actually measured — and what happens when both masses move — completes the chapter’s foundations.',
      },
      {
        t: 'p',
        html: 'We have used the number <i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup>kg<sup>−2</sup> throughout this chapter as if it fell from the sky. But where does it come from? You cannot read <i>G</i> off the motion of planets, because every planetary orbit gives you only the product <i>GM</i> (look back at orbital velocity, <i>v</i><sub><i>o</i></sub> = √(<i>GM</i>/<i>r</i>) — <i>G</i> and <i>M</i> are always glued together). To prise <i>G</i> loose, you must measure the gravitational force between two masses you can weigh in a laboratory. And therein lies the difficulty: gravity is so absurdly weak that the attraction between two lead balls on a table is comparable to the weight of a single grain of sand. Measuring it is one of the great experimental triumphs of physics.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> imagine trying to detect a whisper in a hurricane. The gravitational pull between two lab masses is buried under air currents, vibrations, and the colossal pull of the whole Earth. Henry Cavendish’s stroke of genius (in 1798) was to make the tiny force reveal itself not as a push but as a twist. He hung a light dumbbell of two small masses from a fine fibre, then brought two large masses nearby. The minuscule gravitational attraction twisted the fibre by a hair’s breadth — but a mirror on the fibre threw a beam of light across the room, turning that hair’s-breadth twist into a large, readable swing of a light-spot on a distant scale. He had built an amplifier for the weakest force in nature. Measuring <i>G</i> then let him do something breathtaking: <b>weigh the Earth.</b>',
      },
      {
        t: 'p',
        html: 'The second idea in this topic fixes an approximation we have quietly leaned on all chapter. We always treated one body as a fixed centre and the other as a small thing orbiting it — Earth fixed, satellite circling. But Newton’s third law insists the satellite pulls the Earth just as hard. When the two masses are comparable — two stars, a planet and a heavy moon — <b>both</b> bodies move, each orbiting their common balance point, the <b>centre of mass</b>. Two stars locked in mutual orbit (a binary system) is the cleanest example: neither is “the centre”; they waltz around a point between them. Remarkably, this two-body dance can be reduced to a single equivalent one-body problem using a clever quantity called the <b>reduced mass</b> — and once you do, all our earlier orbit formulas snap back into use.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b> The Cavendish analysis assumes the fibre obeys a linear torsion law (<i>τ</i> = <i>κθ</i>) and that the large masses are close enough for a measurable, calculable force. “Weighing the Earth” via <i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i> assumes a spherically symmetric Earth. The two-body results assume an isolated pair (no third body) with their centre of mass either at rest or moving uniformly, and gravity as the only internal force.',
      },
      {
        t: 'p',
        html: '<b>One more two-body consequence worth knowing — tides.</b> Because gravity weakens with distance, an extended body feels a stronger pull on its near side than its far side. This difference in pull across a body is a <b>tidal force</b>, and it stretches the body along the line to its companion. The Earth’s oceans bulge out both toward and away from the Moon (the near water is pulled toward the Moon more than the solid Earth, the far water less), which is why most coasts see roughly two high tides a day. Curiously, although the Sun pulls the Earth far harder than the Moon does, the Moon dominates the tides — because tides depend on how rapidly the pull changes across the Earth (∝ 1/<i>r</i><sup>3</sup>), not on the pull itself (∝ 1/<i>r</i><sup>2</sup>), and the nearby Moon wins that comparison. Pushed to an extreme, tidal forces can tear a moon apart if it strays inside a critical distance called the Roche limit — the origin of planetary rings.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Cavendish balance — the working relation',
        main: 'At equilibrium, the gravitational torque equals the fibre’s restoring torque:<br>(<i>GMm</i>/<i>d</i><sup>2</sup>) · <i>L</i> (gravitational torque) = <i>κθ</i> (fibre torque) ⇒ <i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>)',
        legend: [
          '<i>m</i> = small mass',
          '<i>M</i> = large mass',
          '<i>d</i> = centre-to-centre distance of a near pair',
          '<i>L</i> = length of the suspended rod',
          '<i>θ</i> = angle of twist',
          '<i>κ</i> = torsion constant of the fibre (itself found from the torsional oscillation period <i>T</i><sub>osc</sub> = 2π√(<i>I</i>/<i>κ</i>))',
        ],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mass of the Earth',
        main: '(from surface gravity, since <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>):<br><i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Mean density of the Earth',
        main: '(using <i>M</i> = (4/3)π<i>R</i><sup>3</sup><i>ρ</i>):<br><i>ρ</i> = 3<i>g</i>/(4π<i>GR</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Two-body / binary system',
        main: '(masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, separation <i>r</i>, common centre of mass):<br><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), <i>r</i><sub>2</sub> = <i>m</i><sub>1</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) (<i>m</i><sub>1</sub><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i><sub>2</sub>)<br>Both orbit with the <b>same</b> angular velocity and period:<br><i>ω</i><sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup>, <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)))',
        legend: [],
        note: 'This is <b>Kepler’s third law with the total mass</b> in place of a single central mass.',
      },
      {
        t: 'formula',
        kicker: 'Reduced mass',
        main: '(collapses the two-body problem to one body orbiting a fixed point at separation <i>r</i>):<br><i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Total energy of a bound circular binary',
        main: '<i>E</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/(2<i>r</i>)',
        legend: [],
        note: null,
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>G</i>', 'Universal gravitational constant', 'N·m<sup>2</sup>kg<sup>−2</sup>'],
          ['<i>κ</i>', 'Torsion constant of the fibre', 'N·m/rad'],
          ['<i>θ</i>', 'Angle of twist', 'rad'],
          ['<i>M</i>, <i>R</i>, <i>ρ</i>', 'Mass, radius, mean density of Earth/planet', 'kg, m, kg/m<sup>3</sup>'],
          ['<i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>', 'The two interacting masses', 'kg'],
          ['<i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>', 'Their distances from the centre of mass', 'm'],
          ['<i>μ</i>', 'Reduced mass', 'kg'],
        ],
      },
      {
        t: 'p',
        html: '<b>Properties of <i>G</i> (recap):</b> universal scalar; value 6.67 × 10<sup>−11</sup>; dimensions [M<sup>−1</sup> L<sup>3</sup> T<sup>−2</sup>]; independent of medium, mass, time, and place. Its small value is why gravity feels so feeble beside the other fundamental forces.',
      },

      { t: 'part', title: 'Derivations and key procedures' },
      {
        t: 'p',
        html: '<b>(a) The Cavendish experiment — measuring <i>G</i></b><br><b>Apparatus.</b> Two small lead spheres (each mass <i>m</i>) are fixed to the ends of a light horizontal rod of length <i>L</i>, suspended at its midpoint by a thin fibre. A small mirror is attached to the fibre.',
      },
      { t: 'fig', id: 'p11-07-fig-7.12' },
      {
        t: 'p',
        html: '<b>Procedure and reasoning.</b> 1. Two large spheres (mass <i>M</i>) are brought close to the small ones, one on each side, so their gravitational pulls act as a couple, twisting the rod. 2. Each pull is <i>F</i> = <i>GMm</i>/<i>d</i><sup>2</sup>, and the couple’s torque about the fibre is <i>F</i> × <i>L</i>. 3. The fibre resists, exerting a restoring torque <i>κθ</i> proportional to the twist angle <i>θ</i>. The rod settles where the two torques balance:<br>(<i>GMm</i>/<i>d</i><sup>2</sup>)<i>L</i> = <i>κθ</i><br>4. The twist <i>θ</i> is read by the deflection of a reflected light-spot on a far scale (an optical lever that magnifies the tiny angle enormously). 5. The torsion constant <i>κ</i> is found separately by timing the free torsional oscillations of the rod: <i>T</i><sub>osc</sub> = 2π√(<i>I</i>/<i>κ</i>), where <i>I</i> is the rod-and-masses moment of inertia. 6. Solving for the unknown:<br><i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>)<br>Cavendish’s result was within about 1% of the modern figure — extraordinary for 1798.',
      },
      {
        t: 'p',
        html: '<b>(b) “Weighing the Earth” — mass and density</b><br>Once <i>G</i> is known, the Earth’s own surface gravity hands us its mass. Since <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>:<br><i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i><br>Plugging <i>g</i> = 9.8, <i>R</i> = 6.4 × 10<sup>6</sup> m gives <i>M</i> ≈ 6 × 10<sup>24</sup> kg — and we never had to leave the ground. The mean density follows from <i>M</i> = (4/3)π<i>R</i><sup>3</sup><i>ρ</i>:<br><i>ρ</i> = <i>M</i>/((4/3)π<i>R</i><sup>3</sup>) = 3<i>g</i>/(4π<i>GR</i>)<br>This was Cavendish’s actual goal: he reported the Earth’s density (about 5.5 times water), revealing that the deep interior must be far denser than the rocky crust — the first hint of the Earth’s iron core.',
      },
      {
        t: 'p',
        html: '<b>(c) The two-body problem and reduced mass</b><br>Two masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub> separated by <i>r</i> orbit their common centre of mass. The centre of mass divides the separation inversely to the masses: <i>m</i><sub>1</sub><i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i><sub>2</sub> with <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>r</i>, giving <i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>).<br>For <i>m</i><sub>1</sub>, gravity supplies the centripetal force for its circle of radius <i>r</i><sub>1</sub>:<br><i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> = <i>m</i><sub>1</sub><i>ω</i><sup>2</sup><i>r</i><sub>1</sub> = <i>m</i><sub>1</sub><i>ω</i><sup>2</sup> · <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)<br>Cancelling <i>m</i><sub>1</sub><i>m</i><sub>2</sub> and solving for <i>ω</i><sup>2</sup>:<br><i>ω</i><sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup> ⇒ <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)))<br>So the pair obeys Kepler’s third law, but with the <b>sum</b> of the masses — which is exactly how astronomers weigh binary stars: measure <i>T</i> and <i>r</i>, and read off <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>. Defining the <b>reduced mass</b> <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>), the entire two-body motion is mathematically identical to a single mass <i>μ</i> orbiting a fixed centre at distance <i>r</i> under a force <i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/<i>r</i><sup>2</sup> — restoring every single-body result we derived earlier.',
      },
      {
        t: 'p',
        html: 'Concretely, in reduced-mass form the system’s kinetic energy is <i>K</i> = ½<i>μv</i><sub>rel</sub><sup>2</sup> (with <i>v</i><sub>rel</sub> = <i>ωr</i> the relative speed of the two bodies), the angular momentum about the centre of mass is <i>L</i> = <i>μv</i><sub>rel</sub><i>r</i>, and for a bound circular binary the total energy is <i>E</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/(2<i>r</i>). The reduced mass is always smaller than either body (<i>μ</i> < <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>); when one mass hugely exceeds the other (say <i>m</i><sub>2</sub> ≫ <i>m</i><sub>1</sub>, like satellite-and-Earth), <i>μ</i> → <i>m</i><sub>1</sub> and the heavier body becomes effectively the fixed centre — which is exactly the approximation we made in Topic 05. So the two-body treatment doesn’t replace our earlier work; it contains it as the limiting case where one mass dominates.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Using the acceleration due to gravity at the Earth’s surface, estimate the mass of the Earth. Take <i>g</i> = 9.8 m/s<sup>2</sup>, <i>R</i> = 6.4 × 10<sup>6</sup> m, <i>G</i> = 6.67 × 10<sup>−11</sup> N·m<sup>2</sup>kg<sup>−2</sup>.',
        steps: [
          'From <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>, solve for <i>M</i>:<br><i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i> = (9.8)(6.4 × 10<sup>6</sup>)<sup>2</sup>/(6.67 × 10<sup>−11</sup>) = (9.8)(4.096 × 10<sup>13</sup>)/(6.67 × 10<sup>−11</sup>) = (4.01 × 10<sup>14</sup>)/(6.67 × 10<sup>−11</sup>)<br><i>M</i> ≈ 6.0 × 10<sup>24</sup> kg',
          'This is the celebrated “weighing of the Earth” — a planet’s entire mass deduced from a falling apple’s acceleration and a lab value of <i>G</i>.',
        ],
        ans: '<i>M</i> ≈ 6.0 × 10<sup>24</sup> kg.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A planet has the same surface gravity as the Earth but twice the radius. What is the ratio of the mean density of the planet to that of the Earth?',
        steps: [
          '<b>Use <i>g</i> = (4/3)π<i>GRρ</i> as a ratio.</b> Since <i>g</i> ∝ <i>Rρ</i> and <i>g</i> is the same for both:<br><i>R</i><sub><i>p</i></sub><i>ρ</i><sub><i>p</i></sub> = <i>R</i><sub><i>E</i></sub><i>ρ</i><sub><i>E</i></sub> ⇒ <i>ρ</i><sub><i>p</i></sub>/<i>ρ</i><sub><i>E</i></sub> = <i>R</i><sub><i>E</i></sub>/<i>R</i><sub><i>p</i></sub> = 1/2',
          '<b>The trap:</b> students instinctively reach for <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup> and get tangled computing masses. The density form <i>g</i> = (4/3)π<i>GRρ</i> makes it a one-line ratio — same <i>g</i>, double <i>R</i> ⇒ half <i>ρ</i>. Pick the right form of <i>g</i> and the work vanishes.',
        ],
        ans: 'the planet’s mean density is <b>half</b> the Earth’s.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (Binary system — Kepler with total mass)',
        q: 'Two stars, each of mass <i>M</i>, orbit their common centre of mass in a circle. Their separation is <i>d</i>. Find the period of revolution.',
        steps: [
          'For a two-body system the angular velocity obeys <i>ω</i><sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>d</i><sup>3</sup>. With <i>m</i><sub>1</sub> = <i>m</i><sub>2</sub> = <i>M</i>, the total mass is 2<i>M</i>:<br><i>ω</i><sup>2</sup> = <i>G</i>(2<i>M</i>)/<i>d</i><sup>3</sup> = 2<i>GM</i>/<i>d</i><sup>3</sup>',
          'The period is<br><i>T</i> = 2π/<i>ω</i> = 2π√(<i>d</i><sup>3</sup>/(2<i>GM</i>))',
          'Note the factor of 2 inside (the total mass): treating one star as fixed and using <i>T</i> = 2π√(<i>d</i><sup>3</sup>/(<i>GM</i>)) would be wrong by a factor of √2. In a binary, both masses drive the orbit.',
        ],
        ans: '<i>T</i> = 2π√(<i>d</i><sup>3</sup>/(2<i>GM</i>)).',
      },
      {
        t: 'ex',
        fig: 'p11-07-fig-7.13',
        tag: 'JEE Advanced Level (Full binary analysis)',
        q: 'Two stars of masses <i>m</i> and 2<i>m</i> are separated by a distance <i>d</i> and revolve in circular orbits about their common centre of mass under their mutual gravitation. Find (a) the radius of each star’s orbit, (b) the orbital speed of each, and (c) the total mechanical energy of the system.',
        steps: [
          '<b>(a) Orbital radii.</b> The centre of mass satisfies <i>mr</i><sub>1</sub> = 2<i>mr</i><sub>2</sub> and <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>d</i>. From <i>r</i><sub>1</sub> = 2<i>r</i><sub>2</sub> and <i>r</i><sub>1</sub> + <i>r</i><sub>2</sub> = <i>d</i>:<br><i>r</i><sub>2</sub> = <i>d</i>/3 (heavier star, 2<i>m</i>), <i>r</i><sub>1</sub> = 2<i>d</i>/3 (lighter star, <i>m</i>)<br>The lighter star traces the bigger circle — it has to swing wider to keep the balance point fixed.',
          '<b>(b) Orbital speeds.</b> The common angular velocity is <i>ω</i> = √(<i>G</i>(<i>m</i> + 2<i>m</i>)/<i>d</i><sup>3</sup>) = √(3<i>Gm</i>/<i>d</i><sup>3</sup>). Then <i>v</i> = <i>ωr</i>:<br><i>v</i><sub>1</sub> = <i>ωr</i><sub>1</sub> = (2<i>d</i>/3)√(3<i>Gm</i>/<i>d</i><sup>3</sup>) = (2/3)√(3<i>Gm</i>/<i>d</i>), <i>v</i><sub>2</sub> = <i>ωr</i><sub>2</sub> = (1/3)√(3<i>Gm</i>/<i>d</i>)<br>As expected, <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub> — the lighter star moves twice as fast (momentum balance: <i>mv</i><sub>1</sub> = 2<i>mv</i><sub>2</sub>).',
          '<b>(c) Total energy.</b> Kinetic plus potential:<br><i>E</i> = ½<i>mv</i><sub>1</sub><sup>2</sup> + ½(2<i>m</i>)<i>v</i><sub>2</sub><sup>2</sup> − <i>G</i>(<i>m</i>)(2<i>m</i>)/<i>d</i><br>The kinetic sum equals ½<i>μv</i><sub>rel</sub><sup>2</sup> with <i>μ</i> = (<i>m</i> · 2<i>m</i>)/(3<i>m</i>) = 2<i>m</i>/3 and <i>v</i><sub>rel</sub> = <i>ωd</i>; evaluating gives <i>K</i> = <i>Gm</i><sup>2</sup>/<i>d</i>. With <i>U</i> = −2<i>Gm</i><sup>2</sup>/<i>d</i>:<br><i>E</i> = <i>Gm</i><sup>2</sup>/<i>d</i> − 2<i>Gm</i><sup>2</sup>/<i>d</i> = −<i>Gm</i><sup>2</sup>/<i>d</i>',
          'Equivalently, <i>E</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/(2<i>d</i>) = −<i>G</i>(<i>m</i>)(2<i>m</i>)/(2<i>d</i>) = −<i>Gm</i><sup>2</sup>/<i>d</i> — confirming the compact binary-energy formula.',
        ],
        ans: '<i>r</i><sub>1</sub> = 2<i>d</i>/3, <i>r</i><sub>2</sub> = <i>d</i>/3; <i>v</i><sub>1</sub> = 2<i>v</i><sub>2</sub> = (2/3)√(3<i>Gm</i>/<i>d</i>); total energy <i>E</i> = −<i>Gm</i><sup>2</sup>/<i>d</i> (negative ⇒ bound, as it must be).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Describe, with the working relation, how the Cavendish experiment determines the universal gravitational constant <i>G</i>. Why is the optical-lever (mirror-and-scale) arrangement essential?',
            a: '<i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>); the optical lever magnifies the fibre’s microscopic twist into a readable deflection.',
          },
          {
            q: '[NEET] The mean density of a planet is the same as that of the Earth, but its radius is half. If the Earth’s surface gravity is <i>g</i>, what is the planet’s surface gravity?',
            a: '<i>g</i> ∝ <i>Rρ</i>, same <i>ρ</i>, half <i>R</i> ⇒ <i>g</i><sub>planet</sub> = <i>g</i>/2.',
          },
          {
            q: '[JEE Main] The mean density of the Earth is found from <i>g</i>, <i>R</i>, and <i>G</i>. Compute it for <i>g</i> = 9.8 m/s<sup>2</sup>, <i>R</i> = 6.4 × 10<sup>6</sup> m, <i>G</i> = 6.67 × 10<sup>−11</sup> SI units.',
            a: '<i>ρ</i> = 3<i>g</i>/(4π<i>GR</i>) ≈ 5.5 × 10<sup>3</sup> kg/m<sup>3</sup>.',
          },
          {
            q: '[JEE Main] Two stars of masses <i>m</i><sub>1</sub> and <i>m</i><sub>2</sub> form a binary with separation <i>r</i> and period <i>T</i>. Show how observing <i>T</i> and <i>r</i> yields the sum <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>.',
            a: '<i>ω</i><sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup> with <i>ω</i> = 2π/<i>T</i> gives <i>m</i><sub>1</sub> + <i>m</i><sub>2</sub> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GT</i><sup>2</sup>).',
          },
          {
            q: '[JEE Advanced] In a binary star system, two stars of masses <i>M</i> and 3<i>M</i> orbit their common centre of mass with separation <i>d</i>. Find the ratio of their kinetic energies <i>K</i><sub><i>M</i></sub> : <i>K</i><sub>3<i>M</i></sub>.',
            a: 'Speeds are inversely proportional to mass (<i>v</i> ∝ 1/<i>m</i>), so <i>K</i> = ½<i>mv</i><sup>2</sup> ∝ 1/<i>m</i>; thus <i>K</i><sub><i>M</i></sub> : <i>K</i><sub>3<i>M</i></sub> = 3 : 1.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In the Cavendish experiment, the extremely small gravitational force is made measurable by:',
        opts: [
          {
            label: 'using very large test masses only',
            nudge: '(A) alone is insufficient — even large masses give a minuscule force without the amplification.',
          },
          { label: 'converting it into a torsional twist read by an optical lever', nudge: null },
          {
            label: 'performing it in vacuum at high temperature',
            nudge: '(C) and (D) are irrelevant to the principle (gravity is medium- and temperature-independent, and unrelated to magnetism).',
          },
          {
            label: 'using the Earth’s magnetic field',
            nudge: '(C) and (D) are irrelevant to the principle (gravity is medium- and temperature-independent, and unrelated to magnetism).',
          },
        ],
        correct: 1,
        solution:
          'The genius of the design is converting a tiny linear force into a twist of a delicate fibre, then magnifying that twist with a mirror-and-light-beam (optical lever) so it can be read on a distant scale.',
      },
      {
        t: 'mcq',
        q: 'The mass of the Earth can be estimated from:',
        opts: [
          { label: '<i>g</i>, <i>R</i>, and <i>G</i>', nudge: null },
          { label: '<i>g</i> and <i>R</i> only', nudge: '(B) is missing <i>G</i> (without it you only know the product <i>GM</i>).' },
          { label: '<i>G</i> only', nudge: '(C) <i>G</i> alone tells you nothing about the Earth.' },
          {
            label: 'the Earth’s rotation period',
            nudge: '(D) rotation period relates to centrifugal effects on <i>g</i>, not to the Earth’s mass.',
          },
        ],
        correct: 0,
        solution: 'From <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>, we get <i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i> — all three quantities are needed.',
      },
      {
        t: 'mcq',
        q: 'In a binary star system, the two stars always have the same:',
        opts: [
          {
            label: 'orbital speed',
            nudge: '(A), (B), (D) are equal only in the special case of equal masses. In general the lighter star orbits faster, on a bigger circle, with more kinetic energy.',
          },
          {
            label: 'orbital radius',
            nudge: '(A), (B), (D) are equal only in the special case of equal masses. In general the lighter star orbits faster, on a bigger circle, with more kinetic energy.',
          },
          { label: 'angular velocity (and period)', nudge: null },
          {
            label: 'kinetic energy',
            nudge: '(A), (B), (D) are equal only in the special case of equal masses. In general the lighter star orbits faster, on a bigger circle, with more kinetic energy.',
          },
        ],
        correct: 2,
        solution:
          'Both stars complete one orbit in the same time, so they share a common angular velocity <i>ω</i> and period <i>T</i>. Their radii, speeds, and kinetic energies all differ (inversely with mass).',
      },
      {
        t: 'mcq',
        q: 'Two stars of masses <i>m</i> and 2<i>m</i> orbit their common centre of mass. The ratio of the radius of the lighter star’s orbit to that of the heavier star’s orbit is:',
        opts: [
          { label: '1 : 2', nudge: '(A) inverts the relation.' },
          { label: '2 : 1', nudge: null },
          { label: '1 : 1', nudge: '(C) would require equal masses.' },
          { label: '4 : 1', nudge: '(D) wrongly squares the mass ratio.' },
        ],
        correct: 1,
        solution:
          'The centre of mass gives <i>mr</i><sub>1</sub> = 2<i>mr</i><sub>2</sub>, so <i>r</i><sub>1</sub>/<i>r</i><sub>2</sub> = 2. The lighter star (<i>m</i>) orbits on the larger circle. Remember: orbital radius is inversely proportional to mass about the centre of mass.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Thinking orbits alone can give <i>G</i>.</b> Planetary and satellite data only fix the product <i>GM</i>. The value of <i>G</i> must come from a lab experiment between known masses (Cavendish). This is why <i>G</i> was a hard-won constant: only after Cavendish had measured <i>G</i> could <i>M</i> (and the Earth’s density) be computed from <i>g</i> and <i>R</i>.',
          '<b>Using single-body Kepler for a binary.</b> For two comparable masses, <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))) — the <b>total</b> mass, not one mass. Forgetting the sum gives a √2-type error.',
          '<b>Getting the centre-of-mass radii backwards.</b> The heavier star orbits on the smaller circle (<i>r</i> ∝ 1/<i>m</i>). Many students assign the bigger orbit to the bigger mass — exactly wrong.',
          '<b>Confusing the density and inverse-square forms of <i>g</i>.</b> For “same gravity / same density” planet comparisons, <i>g</i> = (4/3)π<i>GRρ</i> is far faster than <i>g</i> = <i>GM</i>/<i>R</i><sup>2</sup>. Choose the form that isolates the quantity you’re comparing.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — to weigh anything in space, find its orbit.</b> Sun’s mass from Earth’s orbit, Earth’s mass from the Moon’s orbit, a binary’s total mass from its period — all from <i>M</i> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GT</i><sup>2</sup>). One formula weighs the cosmos.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip — reduced mass restores your toolkit.</b> Replace a two-body problem (masses <i>m</i><sub>1</sub>, <i>m</i><sub>2</sub>, separation <i>r</i>) with one body of mass <i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) orbiting a fixed centre at distance <i>r</i>. Every single-body energy and angular-momentum formula then applies unchanged.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Cavendish',
            note: 'torsion balance; gravitational torque = fibre torque ⇒ <i>G</i> = <i>κθd</i><sup>2</sup>/(<i>MmL</i>). First lab measurement of <i>G</i>.',
          },
          { f: 'Orbits give only <i>GM</i>; <i>G</i> needs a lab experiment.', note: '' },
          { f: 'Mass of Earth', note: '<i>M</i> = <i>gR</i><sup>2</sup>/<i>G</i> ≈ 6 × 10<sup>24</sup> kg.' },
          { f: 'Mean density', note: '<i>ρ</i> = 3<i>g</i>/(4π<i>GR</i>) ≈ 5.5 × 10<sup>3</sup> kg/m<sup>3</sup>.' },
          {
            f: 'Binary',
            note: '<i>r</i><sub>1</sub> = <i>m</i><sub>2</sub><i>r</i>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) (radius ∝ 1/<i>m</i>); <i>ω</i><sup>2</sup> = <i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>)/<i>r</i><sup>3</sup>; <i>T</i> = 2π√(<i>r</i><sup>3</sup>/(<i>G</i>(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>))).',
          },
          {
            f: 'Reduced mass',
            note: '<i>μ</i> = <i>m</i><sub>1</sub><i>m</i><sub>2</sub>/(<i>m</i><sub>1</sub> + <i>m</i><sub>2</sub>) ⇒ two-body becomes one-body.',
          },
          { f: 'Binary energy', note: '<i>E</i> = −<i>Gm</i><sub>1</sub><i>m</i><sub>2</sub>/(2<i>r</i>).' },
        ],
        aids: [
          '“Orbits weigh the product <i>GM</i>; Cavendish weighs <i>G</i> itself.”',
          '“Heavier star, smaller circle” (<i>r</i> ∝ 1/<i>m</i>).',
          '“Binary Kepler uses the <b>sum</b> of the masses.”',
          '“To weigh anything, watch what orbits it: <i>M</i> = 4π<sup>2</sup><i>r</i><sup>3</sup>/(<i>GT</i><sup>2</sup>).”',
        ],
      },
    ],
  },
];
