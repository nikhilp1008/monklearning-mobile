import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 01 and 02: pp. 9–26 of the Class 12 Physics Master
 * Reference, word for word: Electric Charge: Properties, Quantisation &
 * Charging (lower p. 9 to p. 14) and Coulomb’s Law and Electric Forces
 * (pp. 15–26). The chapter’s title page and contents (p. 8 and the top of
 * p. 9) are not copied. Each is split at its Sections 1 to 8. Figures 1.1
 * (caption p. 18, drawn on p. 19), 1.2 (pp. 21–22) and 1.3 (pp. 23–24) are
 * redrawn in lib/diagrams/physics-12-01.ts.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 01 · pp. 9–14 ─────────────────────────
  {
    n: '01',
    title: 'Electric Charge: Properties, Quantisation & Charging',
    kalam: 'Remove electrons and an object is left positive; add electrons and it becomes negative.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> The conceptual bedrock of the whole chapter. CBSE Boards reliably ask 1–3 mark questions on quantisation, conservation, and the steps of charging by induction. NEET favours conceptual one-liners (conductors vs insulators, properties of charge, induction sign). JEE Main sometimes sets quantisation numericals that feed into a Coulomb’s-law calculation. Master this first — everything later rests on it.',
      },
      {
        t: 'p',
        html: 'Rub a plastic comb on dry hair and it suddenly picks up tiny bits of paper. Rub a glass rod with silk and it attracts a hanging pith ball — but a second rod rubbed the same way repels the first. People have known these tricks since ancient times (the Greek word for amber, ēlektron, gives us “electricity”), and they reveal the two foundational facts of this entire chapter: there are <b>two kinds of electric charge</b>, and <b>like charges repel while unlike charges attract</b>.',
      },
      {
        t: 'p',
        html: 'We label them <b>positive</b> and <b>negative</b> — names Benjamin Franklin chose arbitrarily, long before anyone knew electrons existed. Today we know the truth underneath: every atom has a positive nucleus and negative electrons, and “charging” an object simply means transferring electrons. Remove electrons and an object is left positive; add electrons and it becomes negative. Crucially, no new charge is ever created — it is only moved around.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture a busy kirana shop where the total money in the till plus the customers’ pockets is fixed for the day. Money moves between till and pockets all the time, but the grand total never changes — nobody prints fresh notes mid-transaction. Charge behaves exactly like this: rubbing transfers electrons from one body to the other, so one gains exactly what the other loses. The universe’s books always balance.',
      },
      {
        t: 'p',
        html: 'Materials split into two camps based on how freely charge moves through them. In <b>conductors</b> (metals, the human body, the earth, ionic solutions) some electrons are loosely held and roam freely, so charge spreads across the whole object almost instantly. In <b>insulators</b> (rubber, glass, dry wood, plastic) electrons are tightly bound, so charge stays stuck where you put it. This single difference explains why you can charge a plastic comb by rubbing (the charge stays put) but a metal rod held in your bare hand won’t hold charge — it leaks away through you to the ground, a process called <b>earthing</b> or <b>grounding</b>.',
      },
      {
        t: 'p',
        html: 'A subtler, beautiful fact: charge is not infinitely divisible. You cannot have any arbitrary amount of charge — only <b>whole-number multiples of a fundamental “quantum”</b>, the charge on a single electron. Charge comes in indivisible packets, like eggs sold only by the dozen, never by the half-egg.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• This topic deals with charges <b>at rest</b> (electrostatics). Moving charges bring in magnetism, treated in later chapters.<br>• <b>Quantisation</b> holds for every free charge, at every scale (quarks carry ±<i>e</i>/3 or ±2<i>e</i>/3 but are never found free), but at everyday (macroscopic) scales the quantum <i>e</i> is so absurdly tiny that charge appears continuous — just as a sand dune looks smooth though it is built of discrete grains.<br>• The conductor/insulator divide is idealised; real materials (semiconductors, the slightly-conducting human body) sit on a spectrum.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Quantisation of charge',
        main: '<i>q</i> = <i>ne</i>,   <i>n</i> = 0, ±1, ±2, …',
        legend: ['<i>e</i> = 1.6 × 10<sup>−19</sup> C, the elementary (fundamental) charge', '<i>n</i> = an integer'],
        note: 'An electron carries −<i>e</i>, a proton +<i>e</i>.',
      },
      {
        t: 'formula',
        kicker: 'Additivity of charge',
        main: '<i>Q</i><sub>total</sub> = <i>q</i><sub>1</sub> + <i>q</i><sub>2</sub> + ⋯ + <i>q</i><sub><i>n</i></sub>',
        legend: [],
        note: 'The total charge of a system is the <b>algebraic</b> sum of all individual charges (signs included).',
      },
      {
        t: 'def',
        term: 'Conservation of charge',
        html: 'the net charge of an isolated system is constant in time. Charge can be transferred or created in equal-and-opposite pairs, but the total never changes.',
      },
      {
        t: 'formula',
        kicker: 'Charge sharing between identical conductors',
        main: '<i>q</i>′<sub>1</sub> = <i>q</i>′<sub>2</sub> = (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2',
        legend: [],
        note: 'When two identical conducting spheres carrying <i>q</i><sub>1</sub> and <i>q</i><sub>2</sub> touch and separate, the charge redistributes equally.',
      },
      {
        t: 'p',
        html: '<b>Symbol dictionary:</b><br>• <i>q</i>, <i>Q</i> — charge; SI unit <b>coulomb (C)</b>; dimensional formula [A T].<br>• <i>e</i> — elementary charge = 1.6 × 10<sup>−19</sup> C.<br>• <i>n</i> — number of excess/deficit electrons (a positive integer in magnitude).<br>• 1 C is the charge transported by a current of 1 A in 1 s — a very large unit; everyday charges are μC (10<sup>−6</sup>) or nC (10<sup>−9</sup>).<br>• Mass of one electron <i>m</i><sub><i>e</i></sub> = 9.1 × 10<sup>−31</sup> kg (relevant when charge transfer implies mass transfer).',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'This topic has no formal derivation; instead, master these procedures and the reasoning behind each.',
      },
      {
        t: 'p',
        html: '<b>Procedure A — Charging by friction (rubbing).</b> When two different insulators are rubbed, electrons transfer from the material that holds them less tightly to the one that holds them more tightly. The two bodies end up with <b>equal and opposite</b> charges — consistent with conservation. (Glass rubbed with silk: glass loses electrons → positive; silk gains them → negative.)',
      },
      {
        t: 'p',
        html: '<b>Procedure B — Charging by conduction (contact).</b> Touch a charged body to a neutral conductor. Some charge flows across until they share it (equally, if identical). The crucial signature: the neutral body acquires the <b>same sign</b> as the charging body, and the charging body <b>loses</b> some of its charge.',
      },
      {
        t: 'p',
        html: '<b>Procedure C — Charging by induction (no contact).</b> This is the most-tested procedure. To induce a charge opposite to a charging rod on a neutral conductor:<br>1. Bring the charged rod <b>near</b> (not touching) the neutral conductor. Free electrons rearrange: the near side develops a charge opposite to the rod, the far side the same sign as the rod.<br>2. <b>Earth</b> the conductor (connect it to ground) while the rod stays in place. The like-sign charge on the far side is repelled and flows away to earth.<br>3. <b>Remove the earthing</b> first, while the rod is still near. The conductor is now left with only the unlike charge, trapped by the rod’s attraction.<br>4. <b>Remove the rod.</b> The induced charge spreads over the conductor.',
      },
      {
        t: 'p',
        html: 'The key reasoning: in induction the <b>rod never loses any charge</b> (no contact), and the conductor ends up with charge opposite to the rod. Contrast this sharply with conduction, where the rod does lose charge and the body gains the same sign.',
      },
      {
        t: 'p',
        html: '<b>Procedure D — The gold-leaf electroscope.</b> A metal rod ends in two thin gold leaves inside a glass case, topped by a metal disc. Touch a charged body to the disc: charge spreads to both leaves, which acquire the same sign and <b>repel each other, diverging</b>. The angle of divergence indicates how much charge is present — this is how charge is detected and roughly measured.',
      },
      {
        t: 'p',
        html: '<b>Procedure E — Why we don’t notice quantisation.</b> Since <i>e</i> = 1.6 × 10<sup>−19</sup> C, even a small everyday charge of 1 μC corresponds to <i>n</i> = 10<sup>−6</sup>/(1.6 × 10<sup>−19</sup>) ≈ 6 × 10<sup>12</sup> electrons. Adding or removing one electron changes this by one part in a trillion — utterly undetectable — so charge seems to vary continuously, even though it does not.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A body carries a charge of −1.0 μC. How many excess electrons does it contain?',
        steps: [
          '<b>Given:</b> <i>q</i> = 1.0 × 10<sup>−6</sup> C (magnitude), <i>e</i> = 1.6 × 10<sup>−19</sup> C.',
          'By quantisation, <i>q</i> = <i>ne</i>, so:<br><i>n</i> = <i>q</i>/<i>e</i> = (1.0 × 10<sup>−6</sup>)/(1.6 × 10<sup>−19</sup>)',
          '(Negative charge means excess electrons.)',
        ],
        ans: '6.25 × 10<sup>12</sup> excess electrons.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two identical conducting spheres carry charges +<i>q</i> and −3<i>q</i>. They are brought into contact and then separated. What is the final charge on each?',
        steps: [
          '<b>The trap:</b> Students forget that identical conductors share charge equally and that the sharing uses the <b>algebraic</b> sum (signs matter).',
          '<b>Quick solve:</b> Final charge on each = (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2 = ((+<i>q</i>) + (−3<i>q</i>))/2 = −2<i>q</i>/2',
          '(<b>Sanity check:</b> total before = −2<i>q</i>, total after = −<i>q</i> + (−<i>q</i>) = −2<i>q</i> — conserved.)',
        ],
        ans: 'Each sphere ends with −<i>q</i>.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (quantisation → Coulomb’s law)',
        q: 'A metal sphere has 1.25 × 10<sup>13</sup> electrons removed from it. (a) Find its charge. (b) Two such identical spheres are placed 30 cm apart in vacuum. Find the force between them.',
        steps: [
          '<b>(a)</b> Removing electrons leaves the sphere <b>positive</b>:<br><i>q</i> = <i>ne</i> = (1.25 × 10<sup>13</sup>)(1.6 × 10<sup>−19</sup>)',
          '<b>(b)</b> Both spheres carry +2.0 μC; separation <i>r</i> = 0.30 m:<br><i>F</i> = <i>kq</i><sup>2</sup>/<i>r</i><sup>2</sup> = (9 × 10<sup>9</sup>)(2.0 × 10<sup>−6</sup>)<sup>2</sup>/(0.30)<sup>2</sup> = (9 × 10<sup>9</sup>)(4 × 10<sup>−12</sup>)/0.09',
        ],
        ans: '(a) +2.0 μC; (b) 0.4 N, repulsive.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (conservation + repeated sharing)',
        q: 'A conducting sphere carries charge <i>Q</i>. It is touched, one after another, to three identical, initially neutral conducting spheres (touched to the first, separated, then to the second, separated, then the third). Find the charge left on the original sphere, and the total charge on the three other spheres.',
        steps: [
          '<b>Reasoning.</b> Each time the original sphere (carrying charge <i>q</i>) touches an identical neutral sphere, the pair shares equally, so the original keeps <b>half</b>:<br>• After 1st touch: original has <i>Q</i>/2; sphere 1 gets <i>Q</i>/2.<br>• After 2nd touch: original has (<i>Q</i>/2)/2 = <i>Q</i>/4; sphere 2 gets <i>Q</i>/4.<br>• After 3rd touch: original has (<i>Q</i>/4)/2 = <i>Q</i>/8; sphere 3 gets <i>Q</i>/8.',
          '<b>Conservation check:</b> <i>Q</i>/8 + 7<i>Q</i>/8 = <i>Q</i> ✓. After <i>n</i> such touches the original would retain <i>Q</i>/2<sup><i>n</i></sup> — a geometric decay, a favourite Advanced twist.',
        ],
        ans: 'So the original retains <i>Q</i>/8. The three spheres carry <i>Q</i>/2 + <i>Q</i>/4 + <i>Q</i>/8 = 7<i>Q</i>/8.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] How much positive charge is carried by all the protons in 1 g of hydrogen? (Take 6 × 10<sup>23</sup> atoms per gram; each H atom has 1 proton.)',
            a: '<i>n</i> = 6 × 10<sup>23</sup>, <i>Q</i> = <i>ne</i> = 6 × 10<sup>23</sup> × 1.6 × 10<sup>−19</sup> = 9.6 × 10<sup>4</sup> C.',
          },
          {
            q: '[NEET] A glass rod rubbed with silk acquires a charge of +4.8 × 10<sup>−16</sup> C. How many electrons did it lose, and what charge does the silk acquire?',
            a: '<i>n</i> = 4.8 × 10<sup>−16</sup>/(1.6 × 10<sup>−19</sup>) = 3000 electrons lost; silk gains −4.8 × 10<sup>−16</sup> C.',
          },
          {
            q: '[JEE Main] Three identical conducting spheres carry +6 μC, −2 μC, and +2 μC. They are all brought into mutual contact simultaneously and then separated. Find the charge on each.',
            a: 'Total = +6 μC; each = +2 μC.',
          },
          {
            q: '[JEE Main] A charge of −2 μC is transferred from body A to body B. By how much does the mass of body B change, and in which direction?',
            a: 'Mass increases by Δ<i>m</i> = <i>nm</i><sub><i>e</i></sub> = (2 × 10<sup>−6</sup>/(1.6 × 10<sup>−19</sup>))(9.1 × 10<sup>−31</sup>) ≈ 1.14 × 10<sup>−17</sup> kg (B gains electrons, hence gains mass).',
          },
          {
            q: '[JEE Advanced] A positively charged rod is brought near (without touching) one end of an isolated neutral conductor. State the sign of charge induced on the near and far ends, and explain whether the rod loses any charge.',
            a: 'Near end: negative; far end: positive; the rod loses <b>no</b> charge (induction involves no contact).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is <b>not</b> a possible value of charge on a body?',
        opts: [
          {
            label: '3.2 × 10<sup>−19</sup> C',
            nudge: '<b>(A)</b>, <b>(B)</b>, <b>(D)</b> are exact multiples and tempt students who don’t divide by <i>e</i> to check.',
          },
          {
            label: '4.8 × 10<sup>−19</sup> C',
            nudge: '<b>(A)</b>, <b>(B)</b>, <b>(D)</b> are exact multiples and tempt students who don’t divide by <i>e</i> to check.',
          },
          { label: '2.4 × 10<sup>−19</sup> C', nudge: null },
          {
            label: '1.6 × 10<sup>−18</sup> C',
            nudge: '<b>(A)</b>, <b>(B)</b>, <b>(D)</b> are exact multiples and tempt students who don’t divide by <i>e</i> to check.',
          },
        ],
        correct: 2,
        solution: 'Charge must be an integer multiple of <i>e</i> = 1.6 × 10<sup>−19</sup> C. Check: <b>(A)</b> = 2<i>e</i>, <b>(B)</b> = 3<i>e</i>, <b>(D)</b> = 10<i>e</i> — all valid. But <b>(C)</b> = 2.4 × 10<sup>−19</sup>/(1.6 × 10<sup>−19</sup>) = 1.5<i>e</i> — not an integer, so impossible. <b>(C)</b> is the answer precisely because it violates quantisation.',
      },
      {
        t: 'mcq',
        q: 'A charged body B attracts a body A. We can conclude that:',
        opts: [
          {
            label: 'A is positively charged',
            nudge: '<b>(A)</b> and <b>(B)</b> overclaim a specific sign with no information about B.',
          },
          {
            label: 'A is negatively charged',
            nudge: '<b>(A)</b> and <b>(B)</b> overclaim a specific sign with no information about B.',
          },
          {
            label: 'A carries charge opposite to B',
            nudge: '<b>(C)</b> ignores the induction possibility — the classic trap.',
          },
          { label: 'A is either oppositely charged <b>or</b> neutral', nudge: null },
        ],
        correct: 3,
        solution: 'Attraction is not a sure test of charge — a charged body also attracts a <b>neutral</b> conductor by induction. Only <b>repulsion</b> is a definitive test of charge.',
      },
      {
        t: 'mcq',
        q: 'During charging by <b>induction</b>, the charging rod:',
        opts: [
          {
            label: 'loses charge equal to that induced',
            nudge: '<b>(A)</b> describes <b>conduction</b>, not induction — the most common mix-up.',
          },
          { label: 'gains charge', nudge: '<b>(B)</b> and <b>(D)</b> have no physical basis here.' },
          { label: 'loses no charge', nudge: null },
          { label: 'becomes neutral', nudge: '<b>(B)</b> and <b>(D)</b> have no physical basis here.' },
        ],
        correct: 2,
        solution: 'Induction involves <b>no contact</b>, so the rod transfers no charge — it merely rearranges charge within the conductor. The induced charge comes from the conductor’s own electrons (and earth).',
      },
      {
        t: 'mcq',
        q: 'Which property of charge ensures that in the reaction <i>γ</i> → <i>e</i><sup>−</sup> + <i>e</i><sup>+</sup> (pair production, in the field of a nucleus) the books still balance?',
        opts: [
          {
            label: 'Quantisation',
            nudge: '<b>(A)</b> quantisation explains the packet size, not the balance.',
          },
          {
            label: 'Additivity',
            nudge: '<b>(B)</b> additivity is used to compute the total but isn’t the conservation law itself.',
          },
          { label: 'Conservation', nudge: null },
          { label: 'Attraction of unlike charges', nudge: '<b>(D)</b> is unrelated to this bookkeeping.' },
        ],
        correct: 2,
        solution: 'A photon (<i>γ</i>) has zero charge; it produces an electron (−<i>e</i>) and a positron (+<i>e</i>) whose total is again zero. Net charge is unchanged — <b>conservation of charge</b>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Confusing induction with conduction.</b> Conduction: contact, same sign, rod loses charge. Induction: no contact, opposite sign, rod keeps its charge. Tag which is which before answering.',
          '<b>Treating attraction as proof of charge.</b> A charged object attracts neutral conductors too. Only <b>repulsion</b> proves a body is charged. This single fact is tested every year somewhere.',
          '<b>Forgetting signs in additivity / sharing.</b> The “share equally” rule uses the <b>algebraic</b> sum (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2. Plugging magnitudes loses the sign and the answer.',
          '<b>Sloppy quantisation checks.</b> A valid charge must give an integer when divided by <i>e</i>. Always do that division to test “possible value” questions.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “identical conductors touch” problems, jump straight to the average (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2 — and for <i>N</i> identical spheres brought into mutual contact at once, each ends with (total charge)/<i>N</i>. This collapses most charge-sharing questions into one line. Always finish with a conservation check: total before must equal total after.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Two kinds of charge',
            note: 'like repel, unlike attract. Charging = transfer of <b>electrons</b> (never creation).',
          },
          { f: 'Quantisation', note: '<i>q</i> = <i>ne</i>, <i>e</i> = 1.6 × 10<sup>−19</sup> C; charge [A T], unit C.' },
          {
            f: 'Conservation',
            note: 'net charge of an isolated system is constant (pairs created/destroyed equal-and-opposite).',
          },
          { f: 'Additivity', note: '<i>Q</i> = ∑ <i>q</i><sub><i>i</i></sub> (algebraic, with signs).' },
          {
            f: '<b>Conductors</b> let charge move freely; <b>insulators</b> don’t. <b>Earthing</b> drains charge to ground.',
            note: '',
          },
          {
            f: 'Charging',
            note: 'friction (equal & opposite), conduction (same sign, rod loses charge), induction (opposite sign, rod keeps charge).',
          },
          {
            f: 'Identical conductors touching',
            note: 'each gets (<i>q</i><sub>1</sub> + <i>q</i><sub>2</sub>)/2; <i>N</i> spheres: total/<i>N</i>.',
          },
        ],
        aids: [
          '“Charge moves, never made.”',
          '“Repulsion is the only sure test of charge.”',
          '“Induction: no touch, opposite charge, rod unharmed.”',
          '“Divide by <i>e</i> — must be a whole number.”',
        ],
      },
    ],
  },

  // ───────────────────────── Topic 02 · pp. 15–26 ─────────────────────────
  {
    n: '02',
    title: 'Coulomb’s Law and Electric Forces',
    kalam: 'A charge sitting quietly in a corner can shove or tug another charge across the room without any string, rod, or contact between them.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> This is the workhorse of all of electrostatics. Expect 1–2 direct numericals in JEE Main (often a superposition or equilibrium setup), at least 1 conceptual or single-step question in NEET (frequently the “force in a medium” trap), and integration-flavoured force problems in JEE Advanced. CBSE Boards reliably ask the vector statement of the law and a 2–3 mark numerical.',
      },
      {
        t: 'p',
        html: 'Imagine two cousins standing at opposite ends of a room, each holding one pole of a magnet. Even without touching, they feel each other — a push or a pull through empty space. Electric charges do exactly this. A charge sitting quietly in a corner can shove or tug another charge across the room without any string, rod, or contact between them. The whole job of <b>Coulomb’s Law</b> is to put a precise number on that invisible push-or-pull.',
      },
      {
        t: 'p',
        html: 'Charles Augustin de Coulomb worked this out in 1784 using a delicate <b>torsion balance</b> — essentially a tiny see-saw hanging from a thin fibre that twists when a force acts on it. He had a clever trick to vary charge without ever measuring it: touch a charged metal sphere to an identical uncharged one, and by symmetry the charge splits exactly in half. Touch again, you get a quarter, and so on. By comparing the twist for different charge pairs at different separations, he nailed down two clean dependencies.',
      },
      {
        t: 'p',
        html: 'First, the force grows with the <b>product</b> of the two charges — double either charge and the force doubles. Second, the force <b>falls off as the square of the distance</b> — push the charges twice as far apart and the force drops to one-quarter, not one-half. This second part is the famous <b>inverse-square law</b>, the same mathematical shape Newton found for gravity a century earlier.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Picture the aroma drifting out of a mithai shop. Stand right at the counter and it’s overpowering; walk to twice the distance and it’s far weaker than half-strength, because the smell spreads out over a sphere whose surface grows as distance-squared. Electric influence “spreads” in exactly the same geometric way. That’s why the <i>r</i><sup>2</sup> sits in the denominator — it isn’t an arbitrary choice, it’s geometry.',
      },
      {
        t: 'p',
        html: 'There’s one more idea baked in, and it’s beautifully democratic: the force the first charge feels from the second is <b>exactly equal and opposite</b> to the force the second feels from the first — no matter which charge is bigger. It’s like two kids in a tug-of-war: the rope tension on each child is identical even if one is twice the other’s size. This is just Newton’s third law showing up in electrostatics.',
      },
      {
        t: 'p',
        html: 'It is worth pausing on how closely Coulomb’s Law mirrors Newton’s law of gravitation. Both are <b>central, inverse-square</b> forces; swap charges for masses and <i>k</i> for <i>G</i> and the algebra looks identical. But two deep differences set them apart. Gravity is only ever attractive — masses never repel — whereas electric charges do both, depending on sign. And the electric force is staggeringly stronger: between two protons, the Coulomb repulsion outmuscles their gravitational attraction by a factor of around 10<sup>36</sup>. This is why, at the scale of atoms and molecules, gravity is utterly irrelevant and electric forces run the show.',
      },
      {
        t: 'p',
        html: 'So here’s a natural puzzle: if the electric force is this monstrous, why don’t we get flung across the room every time we walk past a charged object? Because ordinary matter is almost perfectly <b>neutral</b> — every object packs in nearly equal amounts of positive and negative charge, and their pushes and pulls cancel to extraordinary precision. We only notice electric forces when that delicate balance is disturbed — a comb rubbed on hair, a balloon on a sweater, the crackle of a synthetic shirt on a dry winter day. The giant force is always there; it’s just hiding behind near-perfect cancellation.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions</b> — Coulomb’s Law in its simple form is not a free pass. It strictly applies when:<br>• The charges are <b>point charges</b> — their physical size is tiny compared to the separation <i>r</i>. (A useful loophole: a uniformly charged sphere acts, from the outside, as if all its charge sat at the centre.)<br>• The charges are <b>at rest</b> (electrostatics). Moving charges produce extra magnetic forces that this law ignores.<br>• We are working in <b>vacuum or air</b>. Inside a material medium the force gets reduced, and the formula needs a correction factor.',
      },
      {
        t: 'p',
        html: 'The law has been tested from subatomic separations (∼ 10<sup>−15</sup> m) right up to large laboratory scales, which is part of why we trust it so deeply.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Coulomb’s Law (magnitude)',
        main: '<i>F</i> = (1/(4πε<sub>0</sub>)) |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup> = <i>k</i> |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Coulomb’s Law (vector form)',
        main: 'force on charge <i>q</i><sub>2</sub> due to <i>q</i><sub>1</sub>:<br><i>F⃗</i><sub>21</sub> = (1/(4πε<sub>0</sub>)) (<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) <i>r̂</i><sub>21</sub>',
        legend: ['<i>r̂</i><sub>21</sub> = the unit vector pointing <b>from</b> <i>q</i><sub>1</sub> <b>towards</b> <i>q</i><sub>2</sub>'],
        note: 'Substituting charges with their signs automatically gives repulsion (force along <i>r̂</i><sub>21</sub>) for like charges and attraction (opposite to <i>r̂</i><sub>21</sub>) for unlike charges — no separate cases needed.',
      },
      {
        t: 'formula',
        kicker: 'Force in a material medium of dielectric constant <i>K</i>',
        main: '<i>F</i><sub>med</sub> = <i>F</i><sub>vacuum</sub>/<i>K</i>,   <i>K</i> = ε<sub><i>r</i></sub> = ε/ε<sub>0</sub>',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: 'Physically, when charges sit inside a material, the molecules of that material polarise — their own internal charges shift slightly to oppose the field — and this screens the interaction, weakening the force by the factor <i>K</i>. The full permittivity of the medium is ε = <i>K</i>ε<sub>0</sub>, so the force can also be written <i>F</i><sub>med</sub> = (1/(4πε)) |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>. Because <i>K</i> ≥ 1 always, a medium can only reduce the force, never amplify it.',
      },
      {
        t: 'p',
        html: '<b>Symbol dictionary:</b><br>• <i>q</i><sub>1</sub>, <i>q</i><sub>2</sub> — the two charges, SI unit <b>coulomb (C)</b>; dimensional formula [A T].<br>• <i>r</i> — separation between the charges (m).<br>• <i>r̂</i><sub>21</sub> — dimensionless unit vector setting the direction.<br>• ε<sub>0</sub> — <b>permittivity of free space</b> = 8.854 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup> (equivalently F/m); dimensional formula [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>].<br>• <i>k</i> = 1/(4πε<sub>0</sub>) ≈ 9.0 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>; dimensional formula [M L<sup>3</sup> T<sup>−4</sup> A<sup>−2</sup>].<br>• <i>K</i> — <b>dielectric constant</b> (relative permittivity); pure number, dimensionless, <i>K</i> ≥ 1 (<i>K</i> = 1 for vacuum, ≈ 1.0006 for air).',
      },
      {
        t: 'p',
        html: '<b>One coulomb</b>, in physical terms, is enormous: two 1 C charges placed 1 m apart in vacuum would repel with a force of 9 × 10<sup>9</sup> N — roughly the weight of a million tonnes. In practice we work in <b>μC</b> (10<sup>−6</sup> C) and <b>nC</b> (10<sup>−9</sup> C).',
      },

      { t: 'part', title: 'CBSE board derivation and logical framework' },
      {
        t: 'p',
        html: '<b>Step 1 — From experiment to the scalar law.</b> Coulomb’s measurements established two proportionalities for point charges in vacuum:<br><i>F</i> ∝ |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|   and   <i>F</i> ∝ 1/<i>r</i><sup>2</sup><br>Combining them, <i>F</i> ∝ |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>, and introducing a proportionality constant <i>k</i>:<br><i>F</i> = <i>k</i> |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup><br>The constant <i>k</i> is not found by deriving it — it is fixed by our independent choice of how big a coulomb is. In SI units this works out to <i>k</i> = 1/(4πε<sub>0</sub>) ≈ 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>. The seemingly odd 4π is deliberately inserted so that later equations (Gauss’s law, field of a sphere) come out clean — a convention called rationalisation.',
      },
      {
        t: 'p',
        html: '<b>Step 2 — Building the vector form.</b> A force has direction, so we must point it. Let charges <i>q</i><sub>1</sub> and <i>q</i><sub>2</sub> sit at position vectors <i>r⃗</i><sub>1</sub> and <i>r⃗</i><sub>2</sub>. Define the separation vector pointing from 1 to 2:<br><i>r⃗</i><sub>21</sub> = <i>r⃗</i><sub>2</sub> − <i>r⃗</i><sub>1</sub>,   <i>r̂</i><sub>21</sub> = <i>r⃗</i><sub>21</sub>/|<i>r⃗</i><sub>21</sub>|<br>The force on <i>q</i><sub>2</sub> acts along the line joining the charges (this is why we call it a <b>central force</b>). Attaching the magnitude to this direction:<br><i>F⃗</i><sub>21</sub> = (1/(4πε<sub>0</sub>)) (<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) <i>r̂</i><sub>21</sub>',
      },
      {
        t: 'p',
        html: '<b>Why this single equation handles both attraction and repulsion:</b> if <i>q</i><sub>1</sub><i>q</i><sub>2</sub> > 0 (like charges), the prefactor is positive and <i>F⃗</i><sub>21</sub> points along <i>r̂</i><sub>21</sub> — away from <i>q</i><sub>1</sub>, i.e. repulsion. If <i>q</i><sub>1</sub><i>q</i><sub>2</sub> < 0 (unlike charges), the prefactor flips the vector to −<i>r̂</i><sub>21</sub> — towards <i>q</i><sub>1</sub>, i.e. attraction. The mathematics does the bookkeeping for us.',
      },
      {
        t: 'p',
        html: '<b>Step 3 — Consistency with Newton’s third law.</b> Swap the labels to get the force on <i>q</i><sub>1</sub> due to <i>q</i><sub>2</sub>. Since <i>r̂</i><sub>12</sub> = −<i>r̂</i><sub>21</sub>:<br><i>F⃗</i><sub>12</sub> = (1/(4πε<sub>0</sub>)) (<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) <i>r̂</i><sub>12</sub> = −<i>F⃗</i><sub>21</sub><br>The two forces are equal in magnitude and opposite in direction — Coulomb’s Law obeys Newton’s third law automatically, regardless of how unequal the charges are.',
      },
      {
        t: 'p',
        html: '<b>Step 4 — Many charges: the Superposition Principle.</b> Coulomb’s Law only knows about two charges. For a system of several charges, experiment confirms that the total force on any one charge is the <b>vector sum</b> of the individual two-body forces, each calculated as if the others weren’t there:<br><i>F⃗</i><sub>1</sub> = <i>F⃗</i><sub>12</sub> + <i>F⃗</i><sub>13</sub> + ⋯ + <i>F⃗</i><sub>1<i>n</i></sub> = (<i>q</i><sub>1</sub>/(4πε<sub>0</sub>)) ∑<sub><i>j</i>=2</sub><sup><i>n</i></sup> (<i>q</i><sub><i>j</i></sub>/<i>r</i><sub>1<i>j</i></sub><sup>2</sup>) <i>r̂</i><sub>1<i>j</i></sub><br>The forces don’t interfere with one another — they simply add as vectors. For a continuous charge distribution, this sum becomes an integral over infinitesimal charge elements d<i>q</i>.',
      },
      { t: 'fig', id: 'p12-01-fig-1.1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'Two point charges, <i>q</i><sub>1</sub> = +4 μC and <i>q</i><sub>2</sub> = −6 μC, are placed 30 cm apart in vacuum. Find the magnitude and nature of the force between them.',
        steps: [
          '<b>Given:</b> <i>q</i><sub>1</sub> = +4 × 10<sup>−6</sup> C, <i>q</i><sub>2</sub> = −6 × 10<sup>−6</sup> C, <i>r</i> = 0.30 m, <i>k</i> = 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>.',
          '<b>Formula:</b><br><i>F</i> = <i>k</i> |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>',
          '<b>Substitution:</b><br><i>F</i> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)(6 × 10<sup>−6</sup>)/(0.30)<sup>2</sup> = (9 × 10<sup>9</sup>)(24 × 10<sup>−12</sup>)/0.09<br><i>F</i> = (9 × 10<sup>9</sup>)(2.667 × 10<sup>−10</sup>)',
          '<b>Nature:</b> The charges carry opposite signs, so the force is <b>attractive</b>.',
        ],
        ans: '<i>F</i> = 2.4 N, attractive (directed along the line joining the charges).',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'Two charges repel each other with a force <i>F</i> when placed a distance <i>r</i> apart in vacuum. They are then immersed in kerosene of dielectric constant <i>K</i> = 4. By how much must their separation be changed so that the force returns to its original value <i>F</i>?',
        steps: [
          '<b>The trap:</b> Many students “fix” the medium by dividing the separation by <i>K</i>, giving <i>r</i>/4. Wrong — the medium weakens the force by <i>K</i>, but distance enters as <i>r</i><sup>2</sup>, so you only need to compensate by √<i>K</i>.',
          '<b>Quick reasoning (ratio method, no full calculation):</b> In vacuum: <i>F</i> = <i>kq</i><sup>2</sup>/<i>r</i><sup>2</sup>. In kerosene at a new separation <i>r</i>′: <i>F</i>′ = <i>kq</i><sup>2</sup>/(<i>Kr</i>′<sup>2</sup>).',
          'Set <i>F</i>′ = <i>F</i>:<br><i>kq</i><sup>2</sup>/(<i>Kr</i>′<sup>2</sup>) = <i>kq</i><sup>2</sup>/<i>r</i><sup>2</sup> ⇒ <i>Kr</i>′<sup>2</sup> = <i>r</i><sup>2</sup> ⇒ <i>r</i>′ = <i>r</i>/√<i>K</i> = <i>r</i>/√4',
          '(<b>Mental check:</b> halving the distance quadruples the force, exactly cancelling the ÷4 from the medium.)',
        ],
        ans: 'Bring them closer, from <i>r</i> to <i>r</i>/2.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level (multi-concept: superposition + equilibrium)',
        q: 'Three identical charges <i>Q</i> = 2 μC sit at the corners of an equilateral triangle of side <i>a</i> = 10 cm. (a) Find the net electrostatic force on any one charge. (b) What charge <i>q</i><sub>0</sub>, placed at the centroid, would hold the entire system in equilibrium?',
        fig: 'p12-01-fig-1.2',
        steps: [
          '<b>Part (a) — Superposition.</b> Each pair exerts a force of magnitude:<br><i>F</i> = <i>kQ</i><sup>2</sup>/<i>a</i><sup>2</sup> = (9 × 10<sup>9</sup>)(2 × 10<sup>−6</sup>)<sup>2</sup>/(0.10)<sup>2</sup> = (9 × 10<sup>9</sup>)(4 × 10<sup>−12</sup>)/0.01 = 3.6 N',
          'A corner charge feels two such forces, with 60° between them (the triangle’s interior angle). The resultant of two equal vectors <i>F</i> at angle 60°:<br><i>F</i><sub>net</sub> = 2<i>F</i> cos(60°/2) = 2<i>F</i> cos 30° = √3 <i>F</i> = √3 × 3.6<br>directed radially <b>outward</b>, away from the centroid.',
          '<b>Part (b) — Equilibrium condition.</b> The centroid lies a distance <i>d</i> = <i>a</i>/√3 from each vertex, so <i>d</i><sup>2</sup> = <i>a</i><sup>2</sup>/3. To cancel the outward √3<i>F</i>, the centroid charge must pull each corner charge inward — so <i>q</i><sub>0</sub> must be <b>negative</b>. Its force on a corner charge:<br><i>F</i><sub>0</sub> = <i>k</i>|<i>q</i><sub>0</sub>|<i>Q</i>/<i>d</i><sup>2</sup> = 3<i>k</i>|<i>q</i><sub>0</sub>|<i>Q</i>/<i>a</i><sup>2</sup>',
          'Setting <i>F</i><sub>0</sub> = √3 <i>F</i> = √3 <i>kQ</i><sup>2</sup>/<i>a</i><sup>2</sup>:<br>3|<i>q</i><sub>0</sub>| = √3 <i>Q</i> ⇒ |<i>q</i><sub>0</sub>| = <i>Q</i>/√3 = 2/√3',
          '(<b>Note:</b> this equilibrium is unstable, so always check stability.)',
        ],
        ans: '(a) <i>F</i><sub>net</sub> ≈ 6.24 N outward. (b) <i>q</i><sub>0</sub> ≈ −1.15 μC at the centroid.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level (integration + limiting check)',
        q: 'A thin rod of length <i>L</i> carries a total charge <i>Q</i> distributed uniformly. A point charge <i>q</i> lies on the axis of the rod, a distance <i>d</i> from the <b>near</b> end. Find the force on <i>q</i>. Then verify your result reduces correctly when the rod shrinks to a point.',
        fig: 'p12-01-fig-1.3',
        steps: [
          '<b>Setup.</b> The rod is not a point charge, so Coulomb’s Law cannot be applied in one shot — we slice the rod into infinitesimal elements and superpose.',
          'Linear charge density: <i>λ</i> = <i>Q</i>/<i>L</i>. Take an element of width d<i>x</i> at distance <i>x</i> from <i>q</i>, carrying charge d<i>q</i> = <i>λ</i> d<i>x</i>. As <i>x</i> runs over the rod, it goes from <i>d</i> (near end) to <i>d</i> + <i>L</i> (far end). Each element pushes/pulls <i>q</i> along the same axis, so the forces add as scalars (no vector resolution needed — that’s the symmetry gift here):<br>d<i>F</i> = <i>kq</i> d<i>q</i>/<i>x</i><sup>2</sup> = <i>kqλ</i> d<i>x</i>/<i>x</i><sup>2</sup>',
          '<b>Integrate:</b><br><i>F</i> = <i>kqλ</i> ∫<sub><i>d</i></sub><sup><i>d</i>+<i>L</i></sup> d<i>x</i>/<i>x</i><sup>2</sup> = <i>kqλ</i> [−1/<i>x</i>]<sub><i>d</i></sub><sup><i>d</i>+<i>L</i></sup> = <i>kqλ</i> (1/<i>d</i> − 1/(<i>d</i> + <i>L</i>))<br><i>F</i> = <i>kqλ</i> · <i>L</i>/(<i>d</i>(<i>d</i> + <i>L</i>)) = <i>kq</i> · (<i>Q</i>/<i>L</i>) · <i>L</i>/(<i>d</i>(<i>d</i> + <i>L</i>))',
          '<b>Limiting check (the deep step).</b> Let the rod collapse to a point, <i>L</i> → 0:<br><i>F</i> → <i>kqQ</i>/(<i>d</i>(<i>d</i> + 0)) = <i>kqQ</i>/<i>d</i><sup>2</sup><br>— exactly the point-charge Coulomb’s Law. The result passes the sanity test, confirming the integration.',
          '<b>Numerical illustration:</b> for <i>q</i> = 1 μC, <i>Q</i> = 5 μC, <i>d</i> = 0.10 m, <i>L</i> = 0.30 m:<br><i>F</i> = (9 × 10<sup>9</sup>)(10<sup>−6</sup>)(5 × 10<sup>−6</sup>)/((0.10)(0.40)) = 0.045/0.04 = 1.125 N',
        ],
        ans: '<i>F</i> = <i>kqQ</i>/(<i>d</i>(<i>d</i> + <i>L</i>))',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Two charges of +2 μC each are placed 10 cm apart in vacuum. Find the magnitude and nature of the force between them.',
            a: '3.6 N, repulsive.',
          },
          {
            q: '[NEET] The force between two point charges in air is <i>F</i>. Without changing the charges or their separation, they are placed in a medium of dielectric constant <i>K</i> = 3. What is the new force?',
            a: '<i>F</i>/3.',
          },
          {
            q: '[JEE Main] Charges +<i>q</i> and +4<i>q</i> are fixed a distance <i>d</i> apart. At what distance from +<i>q</i> (along the line joining them) should a third charge be placed so that it experiences zero net force?',
            a: 'At <i>d</i>/3 from +<i>q</i>.',
          },
          {
            q: '[JEE Main] A total charge <i>Q</i> is split into two parts, which are then held at a fixed distance apart. For the electrostatic force between the two parts to be <b>maximum</b>, what should the ratio of the two parts be?',
            a: '1 ∶ 1 (each part = <i>Q</i>/2).',
          },
          {
            q: '[JEE Advanced] Four equal charges <i>q</i> are placed at the corners of a square of side <i>a</i>. Find the magnitude of the net electrostatic force on any one corner charge.',
            a: '<i>F</i><sub>net</sub> = (<i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>)(√2 + 1/2) ≈ 1.91 <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>, directed outward along the diagonal.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Two point charges exert a force <i>F</i> on each other. If <b>both charges are doubled</b> and the <b>distance between them is also doubled</b>, the new force is:',
        opts: [
          {
            label: '4<i>F</i>',
            nudge: '<b>(A)</b> traps students who double the charges (×4) but forget to account for the distance.',
          },
          { label: '2<i>F</i>', nudge: '<b>(B)</b> is a “split the difference” guess with no physical basis.' },
          { label: '<i>F</i>', nudge: null },
          {
            label: '<i>F</i>/4',
            nudge: '<b>(D)</b> traps the reverse error — applying the distance factor (÷4) but ignoring the charges.',
          },
        ],
        correct: 2,
        solution: 'Since <i>F</i> ∝ <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>, the new force scales by (2)(2)/(2)<sup>2</sup> = 4/4 = 1. The force is <b>unchanged</b>.',
      },
      {
        t: 'mcq',
        q: 'Two charges separated by distance <i>r</i> in vacuum experience force <i>F</i>. They are now placed in a medium of dielectric constant <i>K</i>, keeping <i>r</i> the same. The new force is:',
        opts: [
          { label: '<i>KF</i>', nudge: '<b>(A)</b> gets the direction of the effect backwards (force increasing).' },
          { label: '<i>F</i>/<i>K</i>', nudge: null },
          {
            label: '<i>F</i>/<i>K</i><sup>2</sup>',
            nudge: '<b>(C)</b> confuses the role of <i>K</i> with the inverse-square distance dependence.',
          },
          {
            label: '√<i>K</i> <i>F</i>',
            nudge: '<b>(D)</b> misremembers the √<i>K</i> that appears in distance compensation problems (worked example 2), not in the force ratio itself.',
          },
        ],
        correct: 1,
        solution: 'A medium reduces the force: <i>F</i><sub>med</sub> = <i>F</i>/<i>K</i>. The medium screens the interaction, so the force can only get weaker (and <i>K</i> ≥ 1).',
      },
      {
        t: 'mcq',
        q: 'A charge +<i>Q</i> and a charge +9<i>Q</i> are held a fixed distance apart. Let <i>F</i><sub>1</sub> be the force on +<i>Q</i> due to +9<i>Q</i>, and <i>F</i><sub>2</sub> the force on +9<i>Q</i> due to +<i>Q</i>. Then:',
        opts: [
          {
            label: '<i>F</i><sub>1</sub> = 9<i>F</i><sub>2</sub>',
            nudge: '<b>(A)</b> and <b>(B)</b> come from the intuitive-but-wrong idea that the “bigger” charge pushes harder.',
          },
          {
            label: '<i>F</i><sub>2</sub> = 9<i>F</i><sub>1</sub>',
            nudge: '<b>(A)</b> and <b>(B)</b> come from the intuitive-but-wrong idea that the “bigger” charge pushes harder.',
          },
          { label: '<i>F</i><sub>1</sub> = <i>F</i><sub>2</sub>', nudge: null },
          {
            label: '<i>F</i><sub>1</sub> = 3<i>F</i><sub>2</sub>',
            nudge: '<b>(D)</b> misapplies the ratio √9 = 3 from an unrelated context.',
          },
        ],
        correct: 2,
        solution: 'By Newton’s third law (which Coulomb’s Law obeys exactly), the two forces are <b>equal in magnitude</b> and opposite in direction. The expression <i>F</i> = <i>kq</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup> is symmetric in <i>q</i><sub>1</sub> and <i>q</i><sub>2</sub> — the product is the same either way.',
      },
      {
        t: 'mcq',
        q: 'The dimensional formula of the permittivity of free space ε<sub>0</sub> is:',
        opts: [
          { label: '[M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>]', nudge: null },
          {
            label: '[M L<sup>3</sup> T<sup>−4</sup> A<sup>−2</sup>]',
            nudge: '<b>(B)</b> is the dimensional formula of <i>k</i> = 1/(4πε<sub>0</sub>) — the exact reciprocal, a classic swap trap.',
          },
          {
            label: '[M<sup>−1</sup> L<sup>−2</sup> T<sup>2</sup> A]',
            nudge: '<b>(C)</b> and <b>(D)</b> arise from miscounting the powers of charge ([A T]) or force.',
          },
          {
            label: '[M L<sup>2</sup> T<sup>−3</sup> A<sup>−1</sup>]',
            nudge: '<b>(C)</b> and <b>(D)</b> arise from miscounting the powers of charge ([A T]) or force.',
          },
        ],
        correct: 0,
        solution: 'From <i>F</i> = <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/(4πε<sub>0</sub><i>r</i><sup>2</sup>), we get ε<sub>0</sub> = <i>q</i><sub>1</sub><i>q</i><sub>2</sub>/(4π<i>Fr</i><sup>2</sup>), so [ε<sub>0</sub>] = [A<sup>2</sup> T<sup>2</sup>]/([M L T<sup>−2</sup>][L<sup>2</sup>]) = [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>].',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Plugging in signs where you shouldn’t.</b> When you only want the magnitude of force, use |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>| and decide attraction/repulsion separately from the physics. Signs go into the <b>vector</b> form; magnitude calculations stay positive. Mixing the two produces phantom negative forces.',
          '<b>Treating force like a scalar in superposition.</b> With three or more charges, the individual Coulomb forces must be added as <b>vectors</b>, not numbers. Adding magnitudes directly (e.g. saying the net force in the equilateral triangle is 2<i>F</i> instead of √3<i>F</i>) is one of the most common JEE Main errors.',
          '<b>The medium factor: <i>K</i> vs √<i>K</i>.</b> Force scales as 1/<i>K</i>, but the distance you’d need to restore the force scales as 1/√<i>K</i> (<i>r</i>′ = <i>r</i>/√<i>K</i>). Students routinely apply the wrong one. Tie the factor to what is being asked.',
          '<b>Unit slips.</b> Distances given in cm, charges in μC or nC. Forgetting to convert (1 cm = 10<sup>−2</sup> m, 1 μC = 10<sup>−6</sup> C) is the single biggest source of “right method, wrong answer.”',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For almost every multiple-charge problem, don’t compute each force fully first. Write everything as multiples of a single reference force <i>F</i><sub>0</sub> = <i>kq</i><sup>2</sup>/<i>a</i><sup>2</sup>, add the geometry, and substitute numbers only at the very end. You’ll cut arithmetic by half and dodge most calculator slips. And always run the dimensional/limiting check (like <i>L</i> → 0 in worked example 4) — if a formula doesn’t collapse to the point-charge result, it’s wrong.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Magnitude',
            note: '<i>F</i> = (1/(4πε<sub>0</sub>)) |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup> = <i>k</i> |<i>q</i><sub>1</sub><i>q</i><sub>2</sub>|/<i>r</i><sup>2</sup>, with <i>k</i> ≈ 9 × 10<sup>9</sup> N m<sup>2</sup> C<sup>−2</sup>.',
          },
          {
            f: 'Vector form',
            note: '<i>F⃗</i><sub>21</sub> = (1/(4πε<sub>0</sub>)) (<i>q</i><sub>1</sub><i>q</i><sub>2</sub>/<i>r</i><sup>2</sup>) <i>r̂</i><sub>21</sub> — signs included, it handles attraction and repulsion in one shot.',
          },
          {
            f: 'Constants',
            note: 'ε<sub>0</sub> = 8.854 × 10<sup>−12</sup> C<sup>2</sup> N<sup>−1</sup> m<sup>−2</sup>; [ε<sub>0</sub>] = [M<sup>−1</sup> L<sup>−3</sup> T<sup>4</sup> A<sup>2</sup>], [<i>k</i>] = [M L<sup>3</sup> T<sup>−4</sup> A<sup>−2</sup>], [<i>q</i>] = [A T].',
          },
          {
            f: 'In a medium',
            note: '<i>F</i><sub>med</sub> = <i>F</i><sub>vac</sub>/<i>K</i>. Distance to restore force: <i>r</i>′ = <i>r</i>/√<i>K</i>.',
          },
          {
            f: 'Superposition',
            note: 'net force = <b>vector</b> sum of pairwise forces; each pair acts independently.',
          },
          {
            f: 'Properties',
            note: 'central force, inverse-square, obeys Newton’s third law, valid for point charges at rest from ∼ 10<sup>−15</sup> m upward.',
          },
        ],
        aids: [
          '“Product up, distance squared down.”',
          '“Medium divides by K, distance divides by root-K.”',
          '“Forces are vectors — never just add the numbers.”',
        ],
      },
    ],
  },
];
