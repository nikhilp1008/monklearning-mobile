import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 3, Additional Topics A to C, word for word from the Class 12
 * Physics Master Reference: the Supplement's shared opening (p. 235, set at
 * the head of Addendum A), then A Delta-Star (Y-Δ) Transformation (pp. 235 to
 * 238), B Infinite Resistor Networks and Symmetric Grids (pp. 239 to 242) and
 * C Mesh Analysis (Systematic Loop Current Method) (pp. 242 to 245; its last
 * practice questions and answers sit at the top of p. 245). Each addendum
 * prints its own practice problems and answers, which are its Practice part.
 * These pages print no drawings: the circuits are described in words only.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Additional topic A · pp. 235–238 ─────────────────────────
  {
    n: 'A',
    title: 'Delta-Star (Y-Δ) Transformation',
    extra: true,
    kalam:
      'Addendum A marries the series-parallel logic of Topic 03 to the star-delta transformation that JEE Advanced uses on any network containing a closed triangle.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'The chapter gives you Ohm’s law, drift velocity, resistor combinations, Kirchhoff’s laws, the Wheatstone bridge, and the potentiometer. Six JEE patterns still stand outside the door, each a marriage of two things the chapter already teaches separately. Addendum A marries the series-parallel logic of Topic 03 to the star-delta transformation that JEE Advanced uses on any network containing a closed triangle. Addendum B takes the infinite ladder of Topic 03 and widens it to two-dimensional grids that appear regularly in Advanced. Addendum C deepens Topic 07’s Kirchhoff tool into the systematic mesh-current method, which never needs junction equations and scales cleanly to circuits with a dozen loops. Addendum D opens Topic 08’s potentiometer to two of its most useful applications: comparing resistances directly and finding a temperature coefficient from balance lengths. Addendum E takes the unbalanced bridge beyond the “check balance first” shortcut to the exact galvanometer current that determines sensitivity. Addendum F returns to Topic 06’s cell grouping and shows how to maximise power into a load when the cells are non-identical.<br><br>Numbering continues from the chapter’s Topic 08. Nothing here is new physics. Every method below is the chapter’s series-parallel logic, Kirchhoff’s laws, or the null method, applied one configuration wider or one step deeper.',
      },
      {
        t: 'p',
        html: 'Topic 03 gives the rules for resistors in series and parallel. Those rules fail when three resistors form a triangle (delta, Δ) or a star (Y, also called T): no two resistors of a delta are in series (the node they share also connects to the rest of the circuit), and no two are in parallel (they do not share both nodes), so neither rule applies directly. The delta-star transformation is a standard JEE Advanced tool for exactly these networks.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>When to use it.</b> A network contains a triangle of resistors — or a star — that has no series or parallel reduction. Convert the offending shape to the other form; the resulting network will usually simplify by series and parallel.',
      },
      {
        t: 'p',
        html: '<b>Delta (Δ) to Star (Y).</b> Three resistors <i>R</i><sub>12</sub>, <i>R</i><sub>23</sub>, <i>R</i><sub>31</sub> connect nodes 1, 2, 3 in a triangle. Replace them with three resistors <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> joining the same three nodes to a central point:<br><i>R</i><sub>1</sub> = <i>R</i><sub>12</sub><i>R</i><sub>31</sub>/(<i>R</i><sub>12</sub> + <i>R</i><sub>23</sub> + <i>R</i><sub>31</sub>),   <i>R</i><sub>2</sub> = <i>R</i><sub>12</sub><i>R</i><sub>23</sub>/(<i>R</i><sub>12</sub> + <i>R</i><sub>23</sub> + <i>R</i><sub>31</sub>),   <i>R</i><sub>3</sub> = <i>R</i><sub>23</sub><i>R</i><sub>31</sub>/(<i>R</i><sub>12</sub> + <i>R</i><sub>23</sub> + <i>R</i><sub>31</sub>).<br>Each star resistor is the product of the two delta resistors that meet at its node, divided by the sum of all three.',
      },
      {
        t: 'p',
        html: '<b>Units check.</b> Each numerator: Ω × Ω = Ω<sup>2</sup>. Denominator: Ω. So <i>R</i><sub>1</sub> has units Ω<sup>2</sup>/Ω = Ω. Correct.',
      },
      {
        t: 'p',
        html: '<b>Special case — equal delta.</b> If all three delta resistors equal <i>R</i><sub>Δ</sub>, then each star resistor is <i>R</i><sub>Δ</sub>/3. This appears constantly in JEE.',
      },
      {
        t: 'p',
        html: '<b>Star to Delta (reverse transformation).</b> Given <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> in Y, the equivalent delta resistors are:<br><i>R</i><sub>12</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/<i>R</i><sub>3</sub>,   <i>R</i><sub>23</sub> = <i>R</i><sub>2</sub> + <i>R</i><sub>3</sub> + <i>R</i><sub>2</sub><i>R</i><sub>3</sub>/<i>R</i><sub>1</sub>,   <i>R</i><sub>31</sub> = <i>R</i><sub>3</sub> + <i>R</i><sub>1</sub> + <i>R</i><sub>3</sub><i>R</i><sub>1</sub>/<i>R</i><sub>2</sub>.',
      },
      {
        t: 'p',
        html: '<b>Verification.</b> The two transformations undo each other. Compute <i>R</i><sub>12</sub>, <i>R</i><sub>23</sub>, <i>R</i><sub>31</sub> from a star, then convert that delta back to a star — you recover <i>R</i><sub>1</sub>, <i>R</i><sub>2</sub>, <i>R</i><sub>3</sub> exactly (see practice question 5).',
      },
      {
        t: 'p',
        html: '<b>Which direction to use.</b> Convert whichever shape lets the rest of the network reduce by series and parallel. A delta whose three corners all connect to other parts of the circuit is usually replaced by a star, because the star’s arms then fall in series with resistors already attached to those corners. A star whose centre is connected to nothing else can be replaced by a delta, when each side of that delta then lands in parallel with an existing resistor.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Equal Delta to Star',
        q: 'Three resistors of 6 Ω each form a delta between terminals A, B, and C. Find the equivalent resistance between terminals A and B.',
        steps: [
          '<b>Convert delta to star.</b> Using <i>R</i><sub>Y</sub> = <i>R</i><sub>Δ</sub>/3:<br><i>R</i><sub>A</sub> = <i>R</i><sub>B</sub> = <i>R</i><sub>C</sub> = 6/3 = 2 Ω.',
          '<b>Read off.</b> Between A and B the star shows <i>R</i><sub>A</sub> and <i>R</i><sub>B</sub> in series (through the central node); terminal C is not connected to anything, so <i>R</i><sub>C</sub> carries no current:<br><i>R</i><sub>AB</sub> = <i>R</i><sub>A</sub> + <i>R</i><sub>B</sub> = 2 + 2 = 4 Ω.',
          '<b>Check.</b> Between two corners of the delta there are two paths: the side joining them directly (<i>R</i><sub>Δ</sub>), and the other two sides in series (2<i>R</i><sub>Δ</sub>). The two paths are in parallel:<br><i>R</i><sub>AB</sub> = <i>R</i><sub>Δ</sub> ∥ 2<i>R</i><sub>Δ</sub> = (<i>R</i><sub>Δ</sub> · 2<i>R</i><sub>Δ</sub>)/(<i>R</i><sub>Δ</sub> + 2<i>R</i><sub>Δ</sub>) = (2/3)<i>R</i><sub>Δ</sub> = 4 Ω.<br>The two methods agree.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Unbalanced Delta to Star',
        q: 'A delta has <i>R</i><sub>AB</sub> = 3 Ω, <i>R</i><sub>BC</sub> = 6 Ω, <i>R</i><sub>CA</sub> = 9 Ω. Convert to star and verify by recomputing <i>R</i><sub>AB</sub>.',
        steps: [
          '<b>Convert.</b> Sum <i>S</i> = 3 + 6 + 9 = 18 Ω.<br><i>R</i><sub>A</sub> = <i>R</i><sub>AB</sub><i>R</i><sub>CA</sub>/<i>S</i> = (3 × 9)/18 = 27/18 = 1.5 Ω,<br><i>R</i><sub>B</sub> = <i>R</i><sub>AB</sub><i>R</i><sub>BC</sub>/<i>S</i> = (3 × 6)/18 = 18/18 = 1 Ω,<br><i>R</i><sub>C</sub> = <i>R</i><sub>BC</sub><i>R</i><sub>CA</sub>/<i>S</i> = (6 × 9)/18 = 54/18 = 3 Ω.',
          '<b>Verify <i>R</i><sub>AB</sub>.</b> In the star, A and B are joined through <i>R</i><sub>A</sub> and <i>R</i><sub>B</sub> in series. Terminal C is left open, so <i>R</i><sub>C</sub> carries no current. Hence <i>R</i><sub>AB</sub> (star) = <i>R</i><sub>A</sub> + <i>R</i><sub>B</sub> = 1.5 + 1 = 2.5 Ω.',
          '<b>Direct check from the delta.</b> Between A and B in the original delta there are two paths: the direct side <i>R</i><sub>AB</sub> = 3 Ω, and the route A–C–B through <i>R</i><sub>CA</sub> and <i>R</i><sub>BC</sub> in series, 9 + 6 = 15 Ω. The two paths are in parallel:<br><i>R</i><sub>AB</sub> = 3 ∥ 15 = (3 × 15)/(3 + 15) = 45/18 = 2.5 Ω.<br>The two methods agree.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Delta-Star in a Bridge Network',
        q: 'A Wheatstone bridge has arms <i>P</i> = <i>AB</i> = 6 Ω, <i>Q</i> = <i>BC</i> = 3 Ω, <i>R</i> = <i>AD</i> = 9 Ω, <i>S</i> = <i>DC</i> = 3 Ω, and a 2 Ω resistor <i>R</i><sub>g</sub> joining B and D. The battery is connected across A and C. Find the equivalent resistance <i>R</i><sub>AC</sub> between the battery terminals.',
        steps: [
          '<b>Why this is not a series-parallel network.</b> The bridge is not balanced (<i>P</i>/<i>Q</i> = 2 but <i>R</i>/<i>S</i> = 3), so current flows in <i>R</i><sub>g</sub> and no simple reduction exists. The triangle A–B–D, made of <i>P</i> (<i>AB</i>), <i>R</i><sub>g</sub> (<i>BD</i>) and <i>R</i> (<i>AD</i>), is a delta; converting it to a star removes the difficulty.',
          '<b>Convert the delta A–B–D to a star.</b> Sum = 6 + 2 + 9 = 17 Ω. The star has one arm at each of A, B and D, joined at a centre O:<br><i>R</i><sub>A</sub> = <i>PR</i>/17 = (6 × 9)/17 = 54/17 ≈ 3.18 Ω,<br><i>R</i><sub>B</sub> = <i>PR</i><sub>g</sub>/17 = (6 × 2)/17 = 12/17 ≈ 0.71 Ω,<br><i>R</i><sub>D</sub> = <i>R</i><sub>g</sub><i>R</i>/17 = (2 × 9)/17 = 18/17 ≈ 1.06 Ω.',
          '<b>Reduce.</b> From the centre O there are now two routes to C: through <i>R</i><sub>B</sub> and then <i>Q</i>, or through <i>R</i><sub>D</sub> and then <i>S</i>. These are in parallel, and the pair is in series with <i>R</i><sub>A</sub>:<br><i>R</i><sub>B</sub> + <i>Q</i> = 12/17 + 3 = 63/17 Ω,   <i>R</i><sub>D</sub> + <i>S</i> = 18/17 + 3 = 69/17 Ω,<br>(63/17) ∥ (69/17) = (63 × 69)/(17(63 + 69)) = 4347/2244 ≈ 1.94 Ω,<br><i>R</i><sub>AC</sub> = <i>R</i><sub>A</sub> + 4347/2244 ≈ 3.176 + 1.937 ≈ 5.11 Ω.',
          '<b>Check by nodal analysis.</b> Put A at 1 V and C at 0. Kirchhoff’s current law at B and at D gives 6<i>V</i><sub>B</sub> − 3<i>V</i><sub>D</sub> = 1 and 9<i>V</i><sub>B</sub> − 17<i>V</i><sub>D</sub> = −2, so <i>V</i><sub>B</sub> = 23/75 ≈ 0.307 V and <i>V</i><sub>D</sub> = 0.28 V. The current from A is (1 − <i>V</i><sub>B</sub>)/6 + (1 − <i>V</i><sub>D</sub>)/9 = 0.1156 + 0.0800 = 0.1956 A for each volt, so <i>R</i><sub>AC</sub> = 1/0.1956 ≈ 5.11 Ω.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Three 12 Ω resistors in delta are converted to star. Find the star resistance and the resistance between any two terminals.',
            a: '<i>R</i><sub>Y</sub> = 12/3 = 4 Ω; <i>R</i><sub>AB</sub> = 4 + 4 = 8 Ω.',
          },
          {
            q: '[JEE Main] A delta has sides <i>R</i><sub>AB</sub> = 10 Ω, <i>R</i><sub>BC</sub> = 20 Ω, <i>R</i><sub>CA</sub> = 30 Ω. Convert to star and find <i>R</i><sub>AC</sub> from the star.',
            a: '<i>S</i> = 60 Ω. <i>R</i><sub>A</sub> = (10 × 30)/60 = 5 Ω, <i>R</i><sub>B</sub> = (10 × 20)/60 = 10/3 Ω, <i>R</i><sub>C</sub> = (20 × 30)/60 = 10 Ω. <i>R</i><sub>AC</sub> = <i>R</i><sub>A</sub> + <i>R</i><sub>C</sub> = 5 + 10 = 15 Ω. Direct check: 30 ∥ (10 + 20) = 30 ∥ 30 = 15 Ω.',
          },
          {
            q: '[JEE Advanced] A delta has sides <i>R</i><sub>AB</sub> = 3 Ω, <i>R</i><sub>BC</sub> = 6 Ω, <i>R</i><sub>CA</sub> = 9 Ω. A 5 Ω resistor is connected between the two terminals A and B (the ends of the 3 Ω side). Find the equivalent resistance between A and B.',
            a: 'Convert the delta to star: <i>R</i><sub>1</sub> = (3 × 9)/18 = 1.5 Ω (at A), <i>R</i><sub>2</sub> = (3 × 6)/18 = 1 Ω (at B), <i>R</i><sub>3</sub> = (6 × 9)/18 = 3 Ω (at C, open). Between A and B the star gives <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> = 2.5 Ω. In parallel with the 5 Ω resistor: <i>R</i><sub>eq</sub> = 2.5 ∥ 5 = (2.5 × 5)/7.5 = 5/3 ≈ 1.67 Ω.',
          },
          {
            q: '[JEE Advanced] Resistors <i>R</i> form a square grid with 6 × 6 nodes, every node being joined to its nearest neighbours by a resistor <i>R</i>. A current enters at the top-left corner node and leaves at the bottom-right corner node. Using symmetry, show that the top-right and bottom-left corner nodes are at the same potential.',
            a: 'Reflecting the grid in the diagonal that joins the entry and exit corners maps the network onto itself and leaves both of those nodes where they are. The current pattern, and therefore the potential pattern, must be unchanged by the reflection. That reflection exchanges the top-right and bottom-left corners, so these two nodes are at equal potential. (Reflecting in the other diagonal exchanges the entry and exit nodes, which shows that every node on that diagonal sits exactly midway in potential between them — the two corners in question lie on it.) Nodes at equal potential can be joined by a wire without changing any current, which is the first step in simplifying the grid.',
          },
          {
            q: '[JEE Advanced] A star has <i>R</i><sub>1</sub> = 2 Ω, <i>R</i><sub>2</sub> = 3 Ω, <i>R</i><sub>3</sub> = 6 Ω. Convert to delta, verify that <i>R</i><sub>12</sub> equals <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/<i>R</i><sub>3</sub>, and convert the delta back to a star to check that you recover 2, 3 and 6 Ω.',
            a: 'Delta: <i>R</i><sub>12</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> + <i>R</i><sub>1</sub><i>R</i><sub>2</sub>/<i>R</i><sub>3</sub> = 2 + 3 + 6/6 = 6 Ω. <i>R</i><sub>23</sub> = 3 + 6 + 18/2 = 18 Ω. <i>R</i><sub>31</sub> = 6 + 2 + 12/3 = 12 Ω. Check by converting back: <i>S</i> = 6 + 18 + 12 = 36 Ω, so <i>R</i>′<sub>1</sub> = <i>R</i><sub>12</sub><i>R</i><sub>31</sub>/36 = 72/36 = 2 Ω, <i>R</i>′<sub>2</sub> = <i>R</i><sub>12</sub><i>R</i><sub>23</sub>/36 = 108/36 = 3 Ω, <i>R</i>′<sub>3</sub> = <i>R</i><sub>23</sub><i>R</i><sub>31</sub>/36 = 216/36 = 6 Ω.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic B · pp. 239–242 ─────────────────────────
  {
    n: 'B',
    title: 'Infinite Resistor Networks and Symmetric Grids',
    extra: true,
    kalam:
      'Addendum B takes the infinite ladder of Topic 03 and widens it to two-dimensional grids that appear regularly in Advanced.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 03 solves the infinite ladder. JEE Advanced regularly asks for the resistance of an infinite square grid, an infinite cubic lattice, or a symmetric finite grid — problems where symmetry replaces algebra as the primary tool.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Symmetry principle.</b> If a reflection or rotation maps the network onto itself and leaves the entry and exit nodes where they are, then nodes carried into one another by that symmetry are at equal potential. If instead the symmetry exchanges the entry and exit nodes, every node on its mirror plane sits exactly midway in potential between them (the current crosses that plane; it does not run along it). Nodes at equal potential can be joined by a wire without changing any current, and this often reduces the network to series-parallel form.',
      },
      {
        t: 'p',
        html: '<b>Superposition.</b> The currents in a network of resistors are linear in the applied currents. The situation “current <i>I</i> enters at A and leaves at B” is therefore the sum of “current <i>I</i> enters at A and leaves at infinity” and “current <i>I</i> enters from infinity and leaves at B”.',
      },
      {
        t: 'p',
        html: '<b>Infinite square grid (JEE Advanced classic).</b> Consider an infinite 2D grid of identical resistors <i>R</i> connecting nearest neighbours. Find <i>R</i><sub>AB</sub> where A and B are adjacent nodes.',
      },
      {
        t: 'p',
        html: '<b>Step 1 — Inject current at A only.</b> Let a current <i>I</i> enter at A and spread out to infinity. The four bonds at A are equivalent by symmetry, so each carries <i>I</i>/4 away from A.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Remove current at B only.</b> Now let a current <i>I</i> arrive from infinity and leave at B. By the same argument, each of the four bonds at B carries <i>I</i>/4 towards B.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Superpose.</b> The bond AB belongs to both patterns. In the first it carries <i>I</i>/4 from A to B; in the second it carries <i>I</i>/4 from A to B as well (towards B). Hence in the real situation it carries<br><i>I</i><sub>AB</sub> = <i>I</i>/4 + <i>I</i>/4 = <i>I</i>/2   from A to B.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Read off the resistance.</b> The potential difference across that single bond is <i>V</i><sub>AB</sub> = <i>I</i><sub>AB</sub><i>R</i> = (<i>I</i>/2)<i>R</i>, so<br><i>R</i><sub>AB</sub> = <i>V</i><sub>AB</sub>/<i>I</i> = <i>R</i>/2.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Infinite Ladder',
        q: 'An infinite ladder network has a 1 Ω resistor in series along the top, followed by a 2 Ω resistor across the rails in parallel with the rest of the ladder, which repeats the same pattern forever. Find the equivalent resistance between the input terminals.',
        steps: [
          '<b>Setup.</b> Let <i>X</i> be the equivalent resistance of the whole ladder. Beyond the first 1 Ω resistor, the 2 Ω rung is in parallel with everything that follows, and what follows is an identical infinite ladder, whose resistance is again <i>X</i>:<br><i>X</i> = 1 + 2<i>X</i>/(2 + <i>X</i>).',
          'Multiply by (2 + <i>X</i>):<br><i>X</i>(2 + <i>X</i>) = (2 + <i>X</i>) + 2<i>X</i> ⟹ 2<i>X</i> + <i>X</i><sup>2</sup> = 2 + 3<i>X</i>.<br><i>X</i><sup>2</sup> − <i>X</i> − 2 = 0 ⟹ (<i>X</i> − 2)(<i>X</i> + 1) = 0.',
          'Reject <i>X</i> = −1, so <i>X</i> = 2 Ω.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — 2 × 2 Square Grid',
        q: 'Four resistors <i>R</i> form a square. Find the resistance between (a) adjacent corners, and (b) opposite corners.',
        steps: [
          '(a) Adjacent corners (A to B). Two paths connect A and B: the direct edge (resistance <i>R</i>) and the three-edge route A→D→C→B (resistance 3<i>R</i>). These are unequal, so the current does not split evenly — they are simply two resistors in parallel:<br><i>R</i><sub>AB</sub> = <i>R</i> ∥ 3<i>R</i> = (<i>R</i> · 3<i>R</i>)/(<i>R</i> + 3<i>R</i>) = 3<i>R</i>/4.',
          '(b) Opposite corners (A to C). Only four resistors exist in this network — one on each side, with no diagonal member. So there are exactly two paths from A to C: A→B→C and A→D→C, each of resistance 2<i>R</i>. These two paths are in parallel between A and C:<br>1/<i>R</i><sub>AC</sub> = 1/(2<i>R</i>) + 1/(2<i>R</i>) = 1/<i>R</i>.<br><i>R</i><sub>AC</sub> = <i>R</i>.',
          'So for this 2 × 2 grid, adjacent corners give <i>R</i><sub>AB</sub> = 3<i>R</i>/4 and opposite corners give <i>R</i><sub>AC</sub> = <i>R</i>. For a 3 × 3 grid or larger, the network of paths is richer and symmetry has to be used, as in the next example.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — 3 × 3 Grid of Nodes',
        q: 'Nine nodes are arranged in three rows and three columns, each node being joined to its nearest neighbours by a resistor <i>R</i>. This makes 12 resistors in all (three rows of two and three columns of two). Find the resistance between a corner node and the centre node.',
        steps: [
          '<b>Labels.</b> Label the nodes by (row, column). Take the corner (1, 1) at potential 1 (in volts, with <i>R</i> = 1 Ω for the algebra) and the centre (2, 2) at 0. The diagonal through these two nodes is a mirror line, which gives equal potentials in mirror pairs:<br>• <i>a</i> = potential of the two edge nodes next to the corner, (1, 2) and (2, 1);<br>• <i>b</i> = potential of the two other corners (1, 3) and (3, 1);<br>• <i>c</i> = potential of the two remaining edge nodes (2, 3) and (3, 2);<br>• <i>d</i> = potential of the far corner (3, 3).',
          '<b>Kirchhoff’s current law at each distinct node</b> (all resistors equal, so the currents out of a node add to zero when the potential differences are added):<br>at (1, 2): (1 − <i>a</i>) + (<i>b</i> − <i>a</i>) + (0 − <i>a</i>) = 0 ⟹ 3<i>a</i> = 1 + <i>b</i>,<br>at (1, 3): (<i>a</i> − <i>b</i>) + (<i>c</i> − <i>b</i>) = 0 ⟹ 2<i>b</i> = <i>a</i> + <i>c</i>,<br>at (2, 3): (<i>b</i> − <i>c</i>) + (<i>d</i> − <i>c</i>) + (0 − <i>c</i>) = 0 ⟹ 3<i>c</i> = <i>b</i> + <i>d</i>,<br>at (3, 3): (<i>c</i> − <i>d</i>) + (<i>c</i> − <i>d</i>) = 0 ⟹ <i>d</i> = <i>c</i>.',
          '<b>Solve.</b> From the last two, <i>b</i> = 2<i>c</i>. Then <i>a</i> = 2<i>b</i> − <i>c</i> = 3<i>c</i>, and the first equation gives 9<i>c</i> = 1 + 2<i>c</i>, so <i>c</i> = 1/7, <i>b</i> = 2/7, <i>a</i> = 3/7, <i>d</i> = 1/7.',
          '<b>Total current.</b> The current leaving the corner is 2 × (1 − <i>a</i>)/<i>R</i> = 2 × (4/7)/<i>R</i> = 8/(7<i>R</i>) for a potential difference of 1 V. Hence<br><i>R</i><sub>corner–centre</sub> = (1 V)/(8/(7<i>R</i>)) = (7/8)<i>R</i>.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] An infinite ladder has 2 Ω in series with (3 Ω ∥ <i>X</i>) where <i>X</i> is the whole network. Find <i>X</i>.',
            a: '<i>X</i> = 2 + 3<i>X</i>/(3 + <i>X</i>) ⟹ <i>X</i>(3 + <i>X</i>) = 2(3 + <i>X</i>) + 3<i>X</i> ⟹ <i>X</i><sup>2</sup> − 2<i>X</i> − 6 = 0 ⟹ <i>X</i> = 1 + √7 ≈ 3.65 Ω (positive root).',
          },
          {
            q: '[JEE Main] Four 4 Ω resistors form a square. Find the resistance between adjacent corners and between opposite corners.',
            a: 'Adjacent: <i>R</i> ∥ 3<i>R</i> = 3<i>R</i>/4 = 3 Ω. Opposite: two 2<i>R</i> paths in parallel (no diagonal member exists) give <i>R</i> = 4 Ω.',
          },
          {
            q: '[JEE Advanced] An infinite 2D square grid of resistors <i>R</i> has current <i>I</i> entering at a node. By symmetry and superposition, find the resistance between that node and a nearest-neighbour node.',
            a: '<i>R</i><sub>adjacent</sub> = <i>R</i>/2 (see the derivation in the Method).',
          },
          {
            q: '[JEE Advanced] A cubic network consists of 12 resistors <i>R</i> on the edges of a cube, connecting 8 corner nodes. Find the resistance between two opposite corners of the same face (not the body diagonal).',
            a: 'Face diagonal: label the cube ABCD (bottom face) and EFGH (top face, E above A, F above B, G above C, H above D), all twelve edges of resistance <i>R</i>. Current enters at A and leaves at C, the diagonally opposite corner of the same face. The plane containing A, C, E, G is a plane of symmetry: reflecting through it swaps B with D and swaps F with H, so <i>V</i><sub>B</sub> = <i>V</i><sub>D</sub> and <i>V</i><sub>F</sub> = <i>V</i><sub>H</sub>. Equal-potential nodes can be merged for the purposes of computing currents, so treat B and D as one node and F and H as another. Taking <i>V</i><sub>A</sub> = <i>V</i>, <i>V</i><sub>C</sub> = 0 and applying Kirchhoff’s current law at B, E, G and F gives <i>V</i><sub>B,D</sub> = <i>V</i>/2, <i>V</i><sub>E</sub> = 2<i>V</i>/3, <i>V</i><sub>F,H</sub> = <i>V</i>/2, <i>V</i><sub>G</sub> = <i>V</i>/3. The current leaving A is then <i>I</i> = ((<i>V</i> − <i>V</i>/2)/<i>R</i>) × 2 + (<i>V</i> − 2<i>V</i>/3)/<i>R</i> = <i>V</i>/<i>R</i> + <i>V</i>/(3<i>R</i>) = 4<i>V</i>/(3<i>R</i>), so <i>R</i><sub>face</sub> = <i>V</i>/<i>I</i> = 3<i>R</i>/4.',
          },
          {
            q: '[JEE Advanced] In the 3 × 3 grid of nodes of worked example 3 (12 resistors <i>R</i>), find the resistance between the centre node and the middle node of one side, for example (2, 3).',
            a: 'Take the node (2, 3) at potential 1 and the centre (2, 2) at 0. The row through these two nodes is a mirror line, so (1, 3) and (3, 3) share potential <i>a</i>; (1, 2) and (3, 2) share <i>b</i>; (1, 1) and (3, 1) share <i>c</i>; and (2, 1) has potential <i>d</i>. Kirchhoff’s current law gives 2<i>a</i> = 1 + <i>b</i> at (1, 3), <i>a</i> + <i>c</i> = 3<i>b</i> at (1, 2), 2<i>c</i> = <i>b</i> + <i>d</i> at (1, 1) and 2<i>c</i> = 3<i>d</i> at (2, 1). Hence <i>d</i> = 2<i>c</i>/3, <i>b</i> = 4<i>c</i>/3, <i>a</i> = 3<i>c</i>, and 6<i>c</i> = 1 + 4<i>c</i>/3 gives <i>c</i> = 3/14, <i>a</i> = 9/14. The current leaving (2, 3) is 2(1 − <i>a</i>) + 1 = 12/7 (in units of 1/<i>R</i>), so the resistance is 7<i>R</i>/12.',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Additional topic C · pp. 242–245 ─────────────────────────
  {
    n: 'C',
    title: 'Mesh Analysis (Systematic Loop Current Method)',
    extra: true,
    kalam:
      'Addendum C deepens Topic 07’s Kirchhoff tool into the systematic mesh-current method, which never needs junction equations and scales cleanly to circuits with a dozen loops.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Topic 07 gives Kirchhoff’s laws and the junction/loop method. For a circuit with many loops, writing junction equations plus loop equations for every independent loop is correct but repetitive. Mesh analysis is the streamlined version: write only loop equations (never junction equations), using the notion of a mesh current that flows in each independent loop.',
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: '<b>Key idea.</b> Assign a mesh current <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub>, …, <i>I</i><sub><i>m</i></sub> to each independent mesh (window) of the planar circuit. The actual branch current is the algebraic sum of the mesh currents passing through that branch.',
      },
      {
        t: 'proc',
        title: 'Step-by-step procedure',
        steps: [
          'Draw the circuit and identify all independent meshes (windows). Count them: for a planar circuit with <i>b</i> branches and <i>n</i> nodes, there are <i>m</i> = <i>b</i> − <i>n</i> + 1 independent meshes.',
          'Assign a clockwise mesh current to each mesh. Clockwise is conventional; any direction works but you must be consistent.',
          'For each mesh, write the KVL equation: sum of all voltage drops around the mesh equals zero. When a resistor is shared between two meshes carrying currents <i>I</i><sub><i>i</i></sub> and <i>I</i><sub><i>j</i></sub>, the current through it is the difference <i>I</i><sub><i>i</i></sub> − <i>I</i><sub><i>j</i></sub>.',
          'The sign convention: traverse WITH your mesh current through a resistor → voltage drop −<i>I</i><sub>mesh</sub><i>R</i>. If the shared resistor carries current <i>I</i><sub><i>i</i></sub> − <i>I</i><sub><i>j</i></sub> in the direction of mesh <i>i</i>, the drop is −(<i>I</i><sub><i>i</i></sub> − <i>I</i><sub><i>j</i></sub>)<i>R</i>.',
          'Solve the simultaneous linear equations. The solution gives each mesh current. The actual branch current is the algebraic sum of the mesh currents through that branch.',
        ],
      },
      {
        t: 'p',
        html: '<b>Advantages over the branch-current method.</b><br>• No junction equations are needed (they are automatically satisfied by mesh currents).<br>• Fewer simultaneous equations: <i>m</i> meshes give <i>m</i> equations, versus <i>b</i> equations for branch currents.<br>• The matrix is often symmetric and diagonally dominant, which makes it easier to solve by inspection or by determinants.<br>• The method applies directly to circuits with voltage sources, and, with the supermesh below, to current sources.',
      },
      {
        t: 'p',
        html: '<b>With a current source.</b> If a current source lies in a branch that belongs to only one mesh (on the outer boundary of the circuit), that mesh current is known (it equals the source current, with sign set by direction), so that mesh equation is replaced by a known value. If the current source lies in a branch shared between two meshes, introduce a supermesh that excludes the source branch but includes all surrounding elements, then apply KVL around the supermesh plus the constraint that the two mesh currents differ by the source current.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level — Two-Mesh Circuit',
        q: 'Two windows stand side by side and share the middle branch containing <i>R</i><sub>3</sub> = 4 Ω. The left outer branch contains <i>E</i><sub>1</sub> = 6 V in series with <i>R</i><sub>1</sub> = 2 Ω; the right outer branch contains <i>E</i><sub>2</sub> = 4 V in series with <i>R</i><sub>2</sub> = 2 Ω. Each cell drives current clockwise around its own window. Write the mesh equations and find all branch currents.',
        steps: [
          '<b>Mesh equations.</b><br>Mesh 1: traversing with <i>I</i><sub>1</sub>: source +6 V, drop through <i>R</i><sub>1</sub>: −<i>I</i><sub>1</sub>(2), drop through shared <i>R</i><sub>3</sub>: −(<i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>)(4) (the term is negative because we are moving with <i>I</i><sub>1</sub> through <i>R</i><sub>3</sub>, which carries <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub> in this direction).<br>6 − 2<i>I</i><sub>1</sub> − 4(<i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>) = 0 ⟹ 6<i>I</i><sub>1</sub> − 4<i>I</i><sub>2</sub> = 6.   (1)',
          'Mesh 2: traversing with <i>I</i><sub>2</sub>: source +4 V, drop through <i>R</i><sub>2</sub>: −<i>I</i><sub>2</sub>(2). The shared resistor <i>R</i><sub>3</sub> carries branch current <i>I</i><sub>2</sub> − <i>I</i><sub>1</sub> in the direction of <i>I</i><sub>2</sub>’s traversal (mesh 2’s own direction through that branch), so moving with <i>I</i><sub>2</sub> gives a drop −(<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>)(4):<br>4 − 2<i>I</i><sub>2</sub> − 4(<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>) = 0 ⟹ −4<i>I</i><sub>1</sub> + 6<i>I</i><sub>2</sub> = 4.   (2)',
          '<b>Solve.</b> From (1): 6<i>I</i><sub>1</sub> = 6 + 4<i>I</i><sub>2</sub> ⟹ <i>I</i><sub>1</sub> = 1 + (2/3)<i>I</i><sub>2</sub>.<br>Substitute into (2): −4(1 + (2/3)<i>I</i><sub>2</sub>) + 6<i>I</i><sub>2</sub> = 4 ⟹ −4 − (8/3)<i>I</i><sub>2</sub> + 6<i>I</i><sub>2</sub> = 4 ⟹ (10/3)<i>I</i><sub>2</sub> = 8 ⟹ <i>I</i><sub>2</sub> = 2.4 A.<br>Then <i>I</i><sub>1</sub> = 1 + (2/3)(2.4) = 1 + 1.6 = 2.6 A.',
          '<b>Branch currents.</b> Branch <i>R</i><sub>1</sub>: <i>I</i><sub>1</sub> = 2.6 A. Branch <i>R</i><sub>2</sub>: <i>I</i><sub>2</sub> = 2.4 A. Branch <i>R</i><sub>3</sub> (shared): <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub> = 0.2 A, in the direction of <i>I</i><sub>1</sub> (downward in the shared branch).',
          '<b>Check power.</b> Sources deliver 6(2.6) + 4(2.4) = 15.6 + 9.6 = 25.2 W. Dissipation: <i>I</i><sub>1</sub><sup>2</sup>(2) + <i>I</i><sub>2</sub><sup>2</sup>(2) + (<i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>)<sup>2</sup>(4) = (6.76)(2) + (5.76)(2) + (0.04)(4) = 13.52 + 11.52 + 0.16 = 25.2 W.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level — Three-Mesh Circuit',
        q: 'Three windows stand in a row (meshes 1, 2, 3 from left to right), separated by two shared branches. The four vertical branches, from left to right, contain: <i>E</i><sub>1</sub> = 10 V in series with <i>R</i><sub>1</sub> = 2 Ω; <i>R</i><sub>2</sub> = 4 Ω (shared by meshes 1 and 2); <i>R</i><sub>3</sub> = 4 Ω (shared by meshes 2 and 3); and <i>E</i><sub>2</sub> = 4 V in series with <i>R</i><sub>4</sub> = 2 Ω. Both cells drive current clockwise around the window they border. Find all branch currents.',
        steps: [
          '<b>Mesh equations</b> (clockwise mesh currents <i>I</i><sub>1</sub>, <i>I</i><sub>2</sub>, <i>I</i><sub>3</sub>; in a shared branch the current in the direction of mesh <i>k</i> is the difference of the two mesh currents, taken as “this mesh minus its neighbour”).',
          'Mesh 1:<br>10 − 2<i>I</i><sub>1</sub> − 4(<i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>) = 0 ⟹ 6<i>I</i><sub>1</sub> − 4<i>I</i><sub>2</sub> = 10.   (1)',
          'Mesh 2 (no source):<br>−4(<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>) − 4(<i>I</i><sub>2</sub> − <i>I</i><sub>3</sub>) = 0 ⟹ <i>I</i><sub>1</sub> − 2<i>I</i><sub>2</sub> + <i>I</i><sub>3</sub> = 0.   (2)',
          'Mesh 3:<br>4 − 4(<i>I</i><sub>3</sub> − <i>I</i><sub>2</sub>) − 2<i>I</i><sub>3</sub> = 0 ⟹ 2<i>I</i><sub>2</sub> − 3<i>I</i><sub>3</sub> = −2.   (3)',
          '<b>Solve.</b> From (2): <i>I</i><sub>3</sub> = 2<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>. Substituting into (3): 2<i>I</i><sub>2</sub> − 3(2<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>) = −2, which simplifies to<br>3<i>I</i><sub>1</sub> − 4<i>I</i><sub>2</sub> = −2.   (4)<br>Subtract (4) from (1): 3<i>I</i><sub>1</sub> = 12 ⟹ <i>I</i><sub>1</sub> = 4 A. Then (4) gives <i>I</i><sub>2</sub> = (3(4) + 2)/4 = 3.5 A, and <i>I</i><sub>3</sub> = 2(3.5) − 4 = 3 A.',
          '<b>Branch currents.</b> Left branch (<i>E</i><sub>1</sub>, <i>R</i><sub>1</sub>): <i>I</i><sub>1</sub> = 4 A upward. Branch <i>R</i><sub>2</sub>: <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub> = 0.5 A downward. Branch <i>R</i><sub>3</sub>: <i>I</i><sub>2</sub> − <i>I</i><sub>3</sub> = 0.5 A downward. Right branch (<i>E</i><sub>2</sub>, <i>R</i><sub>4</sub>): <i>I</i><sub>3</sub> = 3 A downward. (At the top node, 4 A arrives and 0.5 + 0.5 + 3 = 4 A leaves, as the junction rule requires.)',
          '<b>Check power.</b> Sources deliver 10(4) + 4(3) = 52 W. Dissipation: 4<sup>2</sup>(2) + 0.5<sup>2</sup>(4) + 0.5<sup>2</sup>(4) + 3<sup>2</sup>(2) = 32 + 1 + 1 + 18 = 52 W.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[JEE Main] Two windows side by side share a middle branch with <i>R</i><sub>3</sub> = 4 Ω. The left outer branch has <i>E</i><sub>1</sub> = 8 V in series with <i>R</i><sub>1</sub> = 2 Ω; the right outer branch has <i>E</i><sub>2</sub> = 2 V in series with <i>R</i><sub>2</sub> = 2 Ω. Each cell drives current clockwise around its own window. Find all branch currents.',
            a: 'Mesh equations: 8 − 2<i>I</i><sub>1</sub> − 4(<i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>) = 0 ⟹ 6<i>I</i><sub>1</sub> − 4<i>I</i><sub>2</sub> = 8 and 2 − 2<i>I</i><sub>2</sub> − 4(<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>) = 0 ⟹ −4<i>I</i><sub>1</sub> + 6<i>I</i><sub>2</sub> = 2. Solving, <i>I</i><sub>1</sub> = 2.8 A, <i>I</i><sub>2</sub> = 2.2 A, and the current in <i>R</i><sub>3</sub> is <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub> = 0.6 A.',
          },
          {
            q: '[JEE Main] Three 6 Ω resistors form a closed triangle. A 4 V cell is in series with the first side and a 2 V cell is in series with the second side, both driving current the same way around the triangle. Use a single mesh current to find the current through the third resistor.',
            a: 'With one mesh current <i>I</i> around the triangle, the net EMF is 4 + 2 = 6 V and the total resistance is 6 + 6 + 6 = 18 Ω, so <i>I</i> = 6/18 = 1/3 A ≈ 0.33 A through every resistor, including the third.',
          },
          {
            q: '[JEE Advanced] Take the three-window arrangement of worked example 2 with <i>R</i><sub>1</sub> = <i>R</i><sub>4</sub> = 1 Ω, <i>R</i><sub>2</sub> = <i>R</i><sub>3</sub> = 2 Ω, <i>E</i><sub>1</sub> = 8 V and <i>E</i><sub>2</sub> = 5 V, both cells driving current clockwise. Find the three mesh currents and the current in each shared branch.',
            a: 'Mesh 1: 8 − 1 · <i>I</i><sub>1</sub> − 2(<i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>) = 0 ⟹ 3<i>I</i><sub>1</sub> − 2<i>I</i><sub>2</sub> = 8. Mesh 2: −2(<i>I</i><sub>2</sub> − <i>I</i><sub>1</sub>) − 2(<i>I</i><sub>2</sub> − <i>I</i><sub>3</sub>) = 0 ⟹ <i>I</i><sub>1</sub> − 2<i>I</i><sub>2</sub> + <i>I</i><sub>3</sub> = 0. Mesh 3: 5 − 2(<i>I</i><sub>3</sub> − <i>I</i><sub>2</sub>) − 1 · <i>I</i><sub>3</sub> = 0 ⟹ 2<i>I</i><sub>2</sub> − 3<i>I</i><sub>3</sub> = −5. Solving, <i>I</i><sub>1</sub> = 7 A, <i>I</i><sub>2</sub> = 6.5 A, <i>I</i><sub>3</sub> = 6 A. The shared branches carry <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub> = 0.5 A and <i>I</i><sub>2</sub> − <i>I</i><sub>3</sub> = 0.5 A, both downward.',
          },
          {
            q: '[JEE Advanced] Explain how to handle a current source shared by two meshes using a supermesh, and apply it here. Two windows stand side by side; the left outer branch has a 12 V cell (driving current clockwise) in series with 2 Ω, the right outer branch has a 4 Ω resistor, and the shared middle branch contains an ideal current source that sends 3 A downward. Find the mesh currents.',
            a: 'Let <i>I</i><sub>1</sub> and <i>I</i><sub>2</sub> be the clockwise mesh currents of the left and right windows. In the shared branch the downward current is <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub>, and the source fixes it: <i>I</i><sub>1</sub> − <i>I</i><sub>2</sub> = 3 A. The unknown voltage across the current source makes the two separate mesh equations useless, so merge the windows into one supermesh and apply KVL around its outer boundary, which avoids the source: 12 − 2<i>I</i><sub>1</sub> − 4<i>I</i><sub>2</sub> = 0. With <i>I</i><sub>1</sub> = <i>I</i><sub>2</sub> + 3: 12 − 2<i>I</i><sub>2</sub> − 6 − 4<i>I</i><sub>2</sub> = 0 ⟹ <i>I</i><sub>2</sub> = 1 A and <i>I</i><sub>1</sub> = 4 A. Check at the top node: 4 A arrives and 3 + 1 = 4 A leaves.',
          },
        ],
      },
    ],
  },
];
