import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Topics 03 and 04, pp. 964–981 of the Class 11 Physics Master
 * Reference, word for word: Standing Waves and Acoustics (pp. 964 to 972) and
 * Doppler Effect (pp. 973 to 981), each split at the book's Sections 1 to 8.
 * Neither topic prints a drawing; Topic 03's key formulas carry one diagram
 * of our own (p11-14-03-d1).
 */
export const TOPICS: Topic[] = [
  {
    n: '03',
    title: 'Standing Waves and Acoustics',
    kalam: 'A standing wave needs two coherent waves travelling in opposite directions — usually a wave and its own reflection.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> One of the highest-yield topics in the chapter. JEE Main reliably asks 1–2 questions on organ-pipe harmonics, the closed-vs-open pipe distinction, or the “three successive resonance frequencies” trick. NEET favors conceptual questions on nodes/antinodes and which harmonics a closed pipe produces. JEE Advanced builds resonance-tube and end-correction problems, often multi-step. CBSE Boards regularly ask the derivation of a stationary wave and the harmonic series of a string or pipe for 3–5 marks.',
      },
      {
        t: 'p',
        html: 'Pluck a sitar string and watch closely. The string does not send a wave racing off to one side — instead the whole string seems to vibrate in place, with some points swinging wildly and other points sitting perfectly still. The pattern stands there, shimmering, going nowhere. That is a <b>standing wave</b> (also called a stationary wave).',
      },
      {
        t: 'p',
        html: 'Where does it come from? When you pluck the string, a wave travels to the fixed end, reflects, and travels back. Now you have two identical waves moving in <b>opposite directions</b> along the same string. They superpose. At certain points the two waves always cancel — these dead-still points are called <b>nodes</b>. Halfway between them, the two waves always reinforce, swinging with maximum amplitude — these are <b>antinodes</b>.<br>Standing wave = forward wave + its reflection',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> A travelling wave is like a train moving down a track — the disturbance carries energy from station to station. A standing wave is like a skipping rope two children are twirling: the rope clearly oscillates, but the pattern (one big loop, or two, or three) just sits between their hands. No energy streams off the ends — it sloshes back and forth, trapped between the boundaries. The nodes are where each child’s hand holds the rope still; the antinode is the fat middle of the loop.',
      },
      {
        t: 'p',
        html: 'The deep idea of <b>acoustics</b> is that a bounded medium — a string clamped at both ends, or an air column inside a flute — can only support standing waves whose pattern fits neatly between its boundaries. A string fixed at both ends must have a node at each end. Only certain wavelengths satisfy this: ones where a whole number of half-loops fit in the length <i>L</i>. These special, allowed frequencies are the <b>harmonics</b>, and the lowest one is the <b>fundamental</b> (or first harmonic). It’s exactly why a shorter string or a shorter air column gives a higher pitch — fewer centimetres means shorter allowed wavelengths means higher frequency. A bansuri (flute) player raises the pitch by uncovering holes, which shortens the effective air column.',
      },
      {
        t: 'p',
        html: '<b>Resonance</b> is the partner concept. If you drive an air column (say, with a tuning fork) at exactly one of its natural frequencies, the sound suddenly swells — the column “agrees” to vibrate and energy pours in efficiently. It’s the same physics as pushing a child on a swing: push at the swing’s natural rhythm and it climbs higher and higher.',
      },
      {
        t: 'p',
        html: 'For air columns in pipes, the boundary rule is about how the air can move:<br>• A <b>closed end</b> (sealed) forces the air to be still → a <b>displacement node</b>.<br>• An <b>open end</b> lets the air move freely → a <b>displacement antinode</b>.',
      },
      {
        t: 'p',
        html: 'This single rule produces two very different instruments:<br>• An <b>open pipe</b> (open at both ends) has antinodes at both ends and supports <b>all</b> harmonics: <i>f</i>, 2<i>f</i>, 3<i>f</i>, …<br>• A <b>closed pipe</b> (closed at one end) has a node at the closed end and an antinode at the open end. It supports <b>only odd</b> harmonics: <i>f</i>, 3<i>f</i>, 5<i>f</i>, … — and its fundamental is <b>one octave lower</b> than an open pipe of the same length.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• A standing wave needs <b>two coherent waves travelling in opposite directions</b> — usually a wave and its own reflection. A single travelling wave never forms one.<br>• The ideal organ-pipe formulas assume the antinode sits exactly at the open end. In reality it bulges slightly beyond, by the <b>end correction</b> <i>e</i> ≈ 0.6 <i>r</i> (where <i>r</i> is the pipe radius). Precise experiments must account for it.<br>• Standing-wave nodes are perfectly still only in an ideal, lossless medium.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Equation of a standing wave',
        main: 'from superposing <i>y</i><sub>1</sub> = <i>a</i> sin(<i>kx</i> − <i>ωt</i>) and <i>y</i><sub>2</sub> = <i>a</i> sin(<i>kx</i> + <i>ωt</i>):<br><i>y</i> = 2<i>a</i> sin(<i>kx</i>) cos(<i>ωt</i>)',
        legend: [],
        note: 'The amplitude <i>R</i> = 2<i>a</i> sin(<i>kx</i>) depends on position — that’s the signature of a standing wave.',
      },
      {
        t: 'formula',
        kicker: 'Node and antinode positions',
        main: 'Nodes: <i>x</i> = <i>nλ</i>/2   (<i>n</i> = 0, 1, 2, …)<br>Antinodes: <i>x</i> = (2<i>n</i> + 1)<i>λ</i>/4<br>Distance between two adjacent nodes (or antinodes) = <i>λ</i>/2<br>Distance between a node and the nearest antinode = <i>λ</i>/4',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'String fixed at both ends (length L)',
        main: '<i>L</i> = <i>nλ</i>/2 ⟹ <i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>),   <i>n</i> = 1, 2, 3, … (all harmonics)<br>Fundamental: <i>f</i><sub>1</sub> = <i>v</i>/(2<i>L</i>) = (1/(2<i>L</i>))√(<i>T</i>/<i>μ</i>)',
        legend: [],
        note: 'nodes at both ends.',
      },
      {
        t: 'formula',
        kicker: 'Open organ pipe (both ends open)',
        main: '<i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>),   <i>n</i> = 1, 2, 3, … (all harmonics)',
        legend: [],
        note: 'antinodes at both ends.',
      },
      {
        t: 'formula',
        kicker: 'Closed organ pipe (one end closed)',
        main: '<i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>),   <i>n</i> = 1, 2, 3, … (only odd harmonics)',
        legend: [],
        note: 'node at closed end, antinode at open end.',
      },
      { t: 'fig', id: 'p11-14-03-d1' },
      {
        t: 'formula',
        kicker: 'End correction',
        main: 'Effective length <i>L</i><sub>eff</sub> = <i>L</i> + <i>e</i>, with <i>e</i> ≈ 0.6 <i>r</i> (open end) per open end.',
        legend: ['<i>r</i> = pipe radius', '<i>e</i> = end correction'],
        note: 'A pipe open at both ends adds <i>e</i> at each end: <i>L</i><sub>eff</sub> = <i>L</i> + 2<i>e</i>.',
      },
      {
        t: 'formula',
        kicker: 'Resonance tube (first and second resonances at lengths l₁, l₂)',
        main: '<i>λ</i> = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>v</i> = 2<i>f</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2',
        legend: [],
        note: null,
      },
      {
        t: 'defgrid',
        title: 'Term — Meaning',
        rows: [
          { k: '<b>Node</b>', v: 'Point of permanently zero displacement' },
          { k: '<b>Antinode</b>', v: 'Point of maximum displacement amplitude' },
          { k: '<b>Fundamental (1st harmonic)</b>', v: 'Lowest natural frequency, <i>f</i><sub>1</sub>' },
          { k: '<i>n</i><b>-th harmonic</b>', v: 'Frequency <i>nf</i><sub>1</sub>' },
          { k: '<i>m</i><b>-th overtone</b>', v: 'The <i>m</i>-th allowed frequency above the fundamental' },
        ],
      },
      {
        t: 'p',
        html: '<b>Overtone–harmonic map (memorize this!):</b><br>• <b>Open pipe / string:</b> 1st overtone = 2nd harmonic; 2nd overtone = 3rd harmonic.<br>• <b>Closed pipe:</b> 1st overtone = <b>3rd</b> harmonic; 2nd overtone = <b>5th</b> harmonic.',
      },

      { t: 'part', title: 'CBSE board derivation — Stationary wave and the harmonics of a string' },
      {
        t: 'p',
        html: '<b>Part A: Forming the standing wave.</b> Consider a wave travelling in the +<i>x</i> direction and its reflection travelling in the −<i>x</i> direction, each of amplitude <i>a</i>:<br><i>y</i><sub>1</sub> = <i>a</i> sin(<i>kx</i> − <i>ωt</i>),   <i>y</i><sub>2</sub> = <i>a</i> sin(<i>kx</i> + <i>ωt</i>)',
      },
      {
        t: 'p',
        html: '<b>Why two opposite waves?</b> A wave hitting a fixed boundary bounces back. The original and the reflected wave are what superpose to make the standing pattern.',
      },
      {
        t: 'p',
        html: 'By the principle of superposition:<br><i>y</i> = <i>y</i><sub>1</sub> + <i>y</i><sub>2</sub> = <i>a</i>[sin(<i>kx</i> − <i>ωt</i>) + sin(<i>kx</i> + <i>ωt</i>)]<br>Using sin <i>C</i> + sin <i>D</i> = 2 sin((<i>C</i> + <i>D</i>)/2) cos((<i>C</i> − <i>D</i>)/2):<br><i>y</i> = 2<i>a</i> sin(<i>kx</i>) cos(<i>ωt</i>)',
      },
      {
        t: 'p',
        html: '<b>Read the physics.</b> Unlike a travelling wave (which has the form sin(<i>kx</i> − <i>ωt</i>), where <i>x</i> and <i>t</i> are locked together), here space and time have <b>separated</b>. Every particle oscillates in time as cos(<i>ωt</i>), but its amplitude, 2<i>a</i> sin(<i>kx</i>), is fixed by where it sits. The pattern doesn’t travel — it stands.',
      },
      {
        t: 'p',
        html: '<b>Nodes</b> (zero amplitude): sin(<i>kx</i>) = 0 ⇒ <i>kx</i> = <i>n</i>π ⇒ <i>x</i> = <i>nλ</i>/2. <b>Antinodes</b> (max amplitude 2<i>a</i>): sin(<i>kx</i>) = ±1 ⇒ <i>x</i> = (2<i>n</i> + 1)<i>λ</i>/4.<br><br>Adjacent nodes are <i>λ</i>/2 apart; a node and its neighbouring antinode are <i>λ</i>/4 apart.',
      },
      {
        t: 'p',
        html: '<b>Part B: Harmonics of a string fixed at both ends.</b> A string clamped at <i>x</i> = 0 and <i>x</i> = <i>L</i> <b>must</b> have a node at each end. The end <i>x</i> = 0 is already a node. For <i>x</i> = <i>L</i> to also be a node:<br>sin(<i>kL</i>) = 0 ⟹ <i>kL</i> = <i>n</i>π ⟹ (2π/<i>λ</i>)<i>L</i> = <i>n</i>π ⟹ <i>L</i> = <i>nλ</i>/2',
      },
      {
        t: 'p',
        html: '<b>Why this is the whole point:</b> the boundary conditions act like a filter — only wavelengths that fit a whole number of half-loops into <i>L</i> are allowed. Everything else dies out.',
      },
      {
        t: 'p',
        html: 'So the allowed wavelengths are <i>λ</i><sub><i>n</i></sub> = 2<i>L</i>/<i>n</i>, and using <i>v</i> = <i>fλ</i>:<br><i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>),   <i>n</i> = 1, 2, 3, …<br>The fundamental is <i>f</i><sub>1</sub> = <i>v</i>/(2<i>L</i>), and the string supports <b>every</b> integer multiple of it. Substituting <i>v</i> = √(<i>T</i>/<i>μ</i>) gives the sonometer’s master formula <i>f</i><sub>1</sub> = (1/(2<i>L</i>))√(<i>T</i>/<i>μ</i>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A stretched wire of length 0.5 m is fixed at both ends. The speed of a transverse wave on it is 200 m s<sup>−1</sup>. Find (a) its fundamental frequency and (b) the frequencies of its first two overtones.',
        steps: [
          '<b>Given:</b> <i>L</i> = 0.5 m, <i>v</i> = 200 m s<sup>−1</sup>.',
          '<b>(a)</b> Fundamental:<br><i>f</i><sub>1</sub> = <i>v</i>/(2<i>L</i>) = 200/(2(0.5)) = 200/1',
          '<b>(b)</b> A string supports all harmonics, so the first overtone is the 2nd harmonic and the second overtone is the 3rd harmonic:<br><i>f</i><sub>2</sub> = 2<i>f</i><sub>1</sub>,   <i>f</i><sub>3</sub> = 3<i>f</i><sub>1</sub>',
        ],
        ans: 'Fundamental = 200 Hz; first two overtones = 400 Hz and 600 Hz.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The fundamental frequency of a closed organ pipe is 200 Hz. What is the frequency of its first overtone?',
        steps: [
          '<b>The trap:</b> Students reflexively double it to 400 Hz (thinking “first overtone = 2nd harmonic”). For a <b>closed</b> pipe that is wrong — even harmonics simply do not exist.',
          '<b>The fast way:</b> A closed pipe produces only <b>odd</b> harmonics: <i>f</i><sub>1</sub>, 3<i>f</i><sub>1</sub>, 5<i>f</i><sub>1</sub>, … The first overtone is therefore the <b>3rd harmonic</b>:<br><i>f</i><sub>1st overtone</sub> = 3<i>f</i><sub>1</sub> = 3 × 200',
          '<b>Mental check:</b> “Closed pipe = odd-only. First overtone jumps straight to 3<i>f</i><sub>1</sub>, skipping 2<i>f</i><sub>1</sub> entirely.”',
        ],
        ans: '600 Hz.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'For a certain organ pipe, three successive resonance frequencies are observed at 250 Hz, 350 Hz, and 450 Hz. The speed of sound in air is 340 m s<sup>−1</sup>. (a) Is the pipe open or closed? (b) Find its fundamental frequency. (c) Find its length.',
        steps: [
          '<b>(a) Identify the pipe type.</b> The gap between successive resonances is constant:<br>350 − 250 = 100 Hz,   450 − 350 = 100 Hz',
          'This gap equals the fundamental for an open pipe, or twice the fundamental for a closed pipe. Test “open”: if <i>f</i><sub>1</sub> = 100, then 250/100 = 2.5 — not an integer, so 250 Hz can’t be a harmonic of a 100 Hz open pipe. So it must be <b>closed</b>, where the gap is 2<i>f</i><sub>1</sub>.',
          '<b>(b) Fundamental.</b> For a closed pipe, successive (odd) harmonics differ by 2<i>f</i><sub>1</sub>:<br>2<i>f</i><sub>1</sub> = 100 ⟹ <i>f</i><sub>1</sub> = 50 Hz',
          '<b>Check:</b> 250 = 5<i>f</i><sub>1</sub>, 350 = 7<i>f</i><sub>1</sub>, 450 = 9<i>f</i><sub>1</sub> — the 5th, 7th, 9th harmonics, all odd. ✓',
          '<b>(c) Length.</b> For a closed pipe, <i>f</i><sub>1</sub> = <i>v</i>/(4<i>L</i>):<br><i>L</i> = <i>v</i>/(4<i>f</i><sub>1</sub>) = 340/(4 × 50) = 340/200',
        ],
        ans: 'Closed pipe; fundamental = 50 Hz; length = 1.7 m.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'In a resonance-tube experiment, a tuning fork of frequency 480 Hz produces its first resonance when the air column is 17 cm long and its second resonance at 52 cm. Find (a) the speed of sound in air and (b) the end correction of the tube.',
        steps: [
          '<b>The insight:</b> A resonance tube is a closed pipe (water surface = closed end). The first resonance occurs at <i>λ</i>/4 and the second at 3<i>λ</i>/4 — <b>measured from the antinode, which lies slightly beyond the open end</b> by the end correction <i>e</i>. So:<br><i>l</i><sub>1</sub> + <i>e</i> = <i>λ</i>/4,   <i>l</i><sub>2</sub> + <i>e</i> = 3<i>λ</i>/4',
          '<b>(a) Speed of sound.</b> Subtract the two equations — the unknown <i>e</i> cancels:<br><i>l</i><sub>2</sub> − <i>l</i><sub>1</sub> = 3<i>λ</i>/4 − <i>λ</i>/4 = <i>λ</i>/2<br><i>λ</i> = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>) = 2(52 − 17) = 2(35) = 70 cm = 0.70 m<br><i>v</i> = <i>fλ</i> = 480 × 0.70',
          '<b>(b) End correction.</b> From <i>l</i><sub>1</sub> + <i>e</i> = <i>λ</i>/4 = 70/4 = 17.5 cm:<br><i>e</i> = 17.5 − 17',
          '(Equivalently, <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2 = (52 − 51)/2 = 0.5 cm. ✓)',
          '<b>Reasoning check:</b> Subtracting the two resonance conditions is the master move — it kills the end correction so you get the wavelength cleanly, then you back out <i>e</i> afterward.',
        ],
        ans: '<i>v</i> = 336 m s<sup>−1</sup>; end correction <i>e</i> = 0.5 cm.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] An open organ pipe of length 0.34 m is sounded. If the speed of sound is 340 m s<sup>−1</sup>, find its fundamental frequency.',
            a: '<i>f</i><sub>1</sub> = <i>v</i>/(2<i>L</i>) = 340/0.68 = 500 Hz.',
          },
          {
            q: '[NEET] A closed organ pipe and an open organ pipe have the same length. Find the ratio of their fundamental frequencies.',
            a: '<i>f</i><sub>closed</sub> ∶ <i>f</i><sub>open</sub> = <i>v</i>/(4<i>L</i>) ∶ <i>v</i>/(2<i>L</i>) = 1 ∶ 2.',
          },
          {
            q: '[JEE Main] A sonometer wire of length 1 m and linear mass density 0.01 kg m<sup>−1</sup> is under a tension of 100 N. Find its fundamental frequency.',
            a: '<i>f</i><sub>1</sub> = (1/(2<i>L</i>))√(<i>T</i>/<i>μ</i>) = ½√(100/0.01) = ½(100) = 50 Hz.',
          },
          {
            q: '[JEE Main] The second overtone of a closed organ pipe has the same frequency as the third harmonic of an open pipe. Find the ratio of their lengths (closed : open).',
            a: 'Closed 2nd overtone = 5th harmonic = 5<i>v</i>/(4<i>L</i><sub><i>c</i></sub>); open 3rd harmonic = 3<i>v</i>/(2<i>L</i><sub><i>o</i></sub>). Equate: 5/(4<i>L</i><sub><i>c</i></sub>) = 3/(2<i>L</i><sub><i>o</i></sub>) ⇒ <i>L</i><sub><i>c</i></sub>/<i>L</i><sub><i>o</i></sub> = 5/6.',
          },
          {
            q: '[JEE Advanced] A string fixed at both ends vibrates in 3 loops (its 3rd harmonic) at 420 Hz. What is its fundamental frequency, and at what frequency would it vibrate in 5 loops?',
            a: '<i>f</i><sub>1</sub> = 420/3 = 140 Hz; 5th harmonic = 5 × 140 = 700 Hz.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'In a stationary wave, the distance between a node and the nearest antinode is:',
        opts: [
          { label: '<i>λ</i>', nudge: '<b>(a) trap:</b> That’s a full wavelength — two complete loops away.' },
          {
            label: '<i>λ</i>/2',
            nudge: '<b>(b) trap:</b> That’s node-to-node (or antinode-to-antinode) — confusing the full half-wavelength with half of it.',
          },
          { label: '<i>λ</i>/4', nudge: null },
          { label: '<i>λ</i>/8', nudge: '<b>(d) trap:</b> Over-halving, a guess with no physical basis.' },
        ],
        correct: 2,
        solution: 'Adjacent nodes are <i>λ</i>/2 apart, and the antinode sits exactly halfway between them, so node-to-antinode is <i>λ</i>/4.',
      },
      {
        t: 'mcq',
        q: 'Which harmonics are present in a pipe closed at one end?',
        opts: [
          { label: 'all integer harmonics', nudge: '<b>(a) trap:</b> True for open pipes and strings, not closed pipes.' },
          { label: 'only even harmonics', nudge: '<b>(b) trap:</b> Exactly backwards — even harmonics are the forbidden ones.' },
          { label: 'only odd harmonics', nudge: null },
          { label: 'only the fundamental', nudge: '<b>(d) trap:</b> A closed pipe has many overtones, just only the odd ones.' },
        ],
        correct: 2,
        solution: 'A closed end is a node, an open end an antinode; this geometry permits only <i>f</i><sub>1</sub>, 3<i>f</i><sub>1</sub>, 5<i>f</i><sub>1</sub>, …',
      },
      {
        t: 'mcq',
        q: 'A standing wave is formed by the superposition of:',
        opts: [
          {
            label: 'two waves of slightly different frequencies travelling in the same direction',
            nudge: '<b>(a) trap:</b> That setup gives beats, not a standing wave.',
          },
          { label: 'two identical waves travelling in opposite directions', nudge: null },
          {
            label: 'two waves of different amplitudes travelling in the same direction',
            nudge: '<b>(c) trap:</b> Same-direction superposition gives a single travelling wave of modified amplitude, not a standing one.',
          },
          {
            label: 'a single wave reflected at a free end only',
            nudge: '<b>(d) trap:</b> Reflection is the usual source of the second wave, but it’s the superposition of the two opposite waves that matters — and reflection happens at both fixed and free ends.',
          },
        ],
        correct: 1,
        solution: 'Counter-propagating identical waves (typically a wave and its reflection) produce the standing pattern.',
      },
      {
        t: 'mcq',
        q: 'An open pipe and a closed pipe have the same fundamental frequency. The ratio of the length of the open pipe to that of the closed pipe is:',
        opts: [
          {
            label: '1 ∶ 1',
            nudge: '<b>(a) trap:</b> Assuming “same frequency means same length,” ignoring that a closed pipe is more efficient (lower pitch per metre).',
          },
          { label: '2 ∶ 1', nudge: null },
          { label: '1 ∶ 2', nudge: '<b>(c) trap:</b> The ratio inverted — a sign that the formulas got swapped.' },
          { label: '4 ∶ 1', nudge: '<b>(d) trap:</b> Squaring or double-applying the factor of 2.' },
        ],
        correct: 1,
        solution: 'Open: <i>f</i><sub>1</sub> = <i>v</i>/(2<i>L</i><sub><i>o</i></sub>). Closed: <i>f</i><sub>1</sub> = <i>v</i>/(4<i>L</i><sub><i>c</i></sub>). Setting them equal: <i>v</i>/(2<i>L</i><sub><i>o</i></sub>) = <i>v</i>/(4<i>L</i><sub><i>c</i></sub>) ⇒ <i>L</i><sub><i>o</i></sub> = 2<i>L</i><sub><i>c</i></sub>.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Mislabelling overtones in closed pipes.</b> First overtone of a closed pipe is the <b>3rd</b> harmonic (3<i>f</i><sub>1</sub>), not the 2nd. “Overtone” counts allowed frequencies above the fundamental; for closed pipes those skip the evens.',
          '<b>Forgetting the end correction.</b> In precise resonance-tube problems, the antinode lies beyond the open end by <i>e</i> ≈ 0.6<i>r</i>. Ignoring it gives a slightly wrong speed of sound — but the difference of two resonance lengths cancels it, so use that.',
          '<b>Confusing node/antinode spacing.</b> Node-to-node = <i>λ</i>/2; node-to-antinode = <i>λ</i>/4. Sketch one loop and label it — it prevents half the errors in this topic.',
          '<b>Mixing up displacement and pressure patterns.</b> At a closed end: displacement node but pressure antinode. They are always opposite. Many “find the pressure antinode” questions trip students who only think in displacement.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For “three successive resonance frequencies,” just take the <b>common difference</b> Δ. If the smallest frequency ÷ Δ is a whole number → <b>open pipe</b>, <i>f</i><sub>1</sub> = Δ. If not → <b>closed pipe</b>, <i>f</i><sub>1</sub> = Δ/2. This identifies the pipe and its fundamental in about five seconds, no diagrams needed.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Standing wave', note: '<i>y</i> = 2<i>a</i> sin(<i>kx</i>) cos(<i>ωt</i>) — amplitude depends on position.' },
          { f: 'Spacing', note: 'node–node = <i>λ</i>/2; node–antinode = <i>λ</i>/4.' },
          { f: 'String / open pipe', note: '<i>f</i><sub><i>n</i></sub> = <i>nv</i>/(2<i>L</i>), all harmonics (<i>n</i> = 1, 2, 3, …).' },
          { f: 'Closed pipe', note: '<i>f</i><sub><i>n</i></sub> = (2<i>n</i> − 1)<i>v</i>/(4<i>L</i>), odd harmonics only.' },
          { f: 'Open ∶ closed fundamental (same length) = 2 ∶ 1.', note: '' },
          {
            f: 'Resonance tube (1st and 2nd resonances)',
            note: '<i>λ</i> = 2(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>v</i> = 2<i>f</i>(<i>l</i><sub>2</sub> − <i>l</i><sub>1</sub>), <i>e</i> = (<i>l</i><sub>2</sub> − 3<i>l</i><sub>1</sub>)/2.',
          },
        ],
        aids: [
          '“Closed = odd only; open = all.”',
          '“Closed pipe’s first overtone leapfrogs to 3<i>f</i><sub>1</sub>.”',
          '“Subtract the resonance lengths — the end correction disappears.”',
        ],
      },
    ],
  },

  {
    n: '04',
    title: 'Doppler Effect',
    kalam: 'Toward → frequency up. Away → frequency down.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A guaranteed scorer and a perennial favourite. JEE Main almost always carries one Doppler problem — source/observer moving, both moving, or a reflection (wall/echo) setup. NEET loves the conceptual asymmetry question (source-moving vs observer-moving) and the simple approaching-source numerical. JEE Advanced layers in wind, angles, or double-Doppler echoes. CBSE Boards typically ask the derivation for a moving source and a stationary observer for 2–3 marks, plus a short numerical.',
      },
      {
        t: 'p',
        html: 'You’re standing at a railway crossing. A train rushes toward you, horn blaring at a high, urgent pitch — eeeeeee. The instant it passes and starts speeding away, the pitch suddenly drops — eeeooooww. The driver, sitting inside, hears no change at all. The horn itself never changed its note. So what happened?',
      },
      {
        t: 'p',
        html: 'This apparent change in the <b>observed frequency</b> of a wave, caused by the <b>relative motion</b> between the source and the observer, is the <b>Doppler Effect</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> Imagine the source spitting out wavefronts like ripples, one every fraction of a second. If the source is rushing toward you, each new wavefront is launched a little closer to you than the last — so the wavefronts bunch up. Bunched-up waves mean a shorter wavelength reaching you, which your ear hears as a higher pitch. When the source races away, each wavefront is launched farther back, the waves get stretched out, the wavelength grows, and you hear a lower pitch.',
      },
      {
        t: 'p',
        html: 'The same logic works if you move instead. Walk toward a stationary source and you sweep through more wavefronts per second than if you stood still — higher frequency. Walk away and you meet fewer per second — lower frequency.',
      },
      {
        t: 'p',
        html: 'A clean way to lock the whole effect into one sentence:<br><b>Toward → frequency up. Away → frequency down.</b>',
      },
      {
        t: 'p',
        html: 'Every Doppler problem, no matter how complicated, must agree with this gut check. If your formula spits out a higher frequency when source and observer are separating, you’ve made a sign error — full stop.',
      },
      {
        t: 'p',
        html: 'There’s a beautiful subtlety here, and JEE/NEET examiners adore it: <b>for sound, moving the source is NOT the same as moving the observer.</b> When the source moves, it physically changes the wavelength in the medium (it crowds or stretches the ripples). When the observer moves, the wavelength in the air is unchanged — instead the observer changes the effective speed at which they meet the waves. Two different mechanisms, two different formulas, two slightly different answers even at the same speed. This asymmetry exists because sound needs a <b>medium</b> (air), and that medium is a fixed stage everyone’s motion is measured against. Light, having no medium, behaves symmetrically — only the relative velocity matters.',
      },
      {
        t: 'p',
        html: 'Doppler is everywhere: the highway <b>radar speed gun</b> bounces microwaves off your car and reads the frequency shift to catch over-speeding; a <b>sonar</b> on a submarine measures the shift to track another vessel; and astronomers measure the <b>redshift</b> of distant galaxies — light stretched to longer (redder) wavelengths — which told us the universe is expanding.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions:</b><br>• The standard formulas assume motion is <b>along the line joining source and observer</b>. If velocity is at an angle, only the <b>component along the line of sight</b> matters. When the velocity is exactly sideways (perpendicular to the line of sight), there is <b>no Doppler shift</b> for sound. For a moving observer that is the moment of closest approach; for a moving source it is the sound emitted at closest approach, which reaches the observer a moment later.<br>• For sound, the <b>medium is the reference frame</b> — so a <b>wind</b> changes the effective sound speed and must be added in.<br>• The source speed must be <b>less than the speed of sound</b> (<i>v</i><sub><i>s</i></sub> < <i>v</i>). Once a source reaches or exceeds the sound speed, the wavefronts pile into a <b>shock wave</b> (sonic boom / Mach cone) and the ordinary formula no longer applies.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'General Doppler formula for sound',
        main: 'source speed <i>v</i><sub><i>s</i></sub>, observer speed <i>v</i><sub><i>o</i></sub>, sound speed <i>v</i>:<br><i>f</i>′ = <i>f</i>((<i>v</i> ± <i>v</i><sub><i>o</i></sub>)/(<i>v</i> ∓ <i>v</i><sub><i>s</i></sub>))',
        legend: [],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Sign rule — anchor everything to “toward raises pitch”:</b><br>• <b>Numerator</b> <i>v</i><sub><i>o</i></sub>: use +<i>v</i><sub><i>o</i></sub> if the observer moves toward the source; −<i>v</i><sub><i>o</i></sub> if away.<br>• <b>Denominator</b> <i>v</i><sub><i>s</i></sub>: use −<i>v</i><sub><i>s</i></sub> if the source moves toward the observer; +<i>v</i><sub><i>s</i></sub> if away.',
      },
      {
        t: 'table',
        title: null,
        head: ['Situation', 'Formula', 'Result'],
        rows: [
          ['Source toward, observer still', '<i>f</i>′ = <i>fv</i>/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)', '↑'],
          ['Source away, observer still', '<i>f</i>′ = <i>fv</i>/(<i>v</i> + <i>v</i><sub><i>s</i></sub>)', '↓'],
          ['Observer toward, source still', '<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/<i>v</i>', '↑'],
          ['Observer away, source still', '<i>f</i>′ = <i>f</i>(<i>v</i> − <i>v</i><sub><i>o</i></sub>)/<i>v</i>', '↓'],
          ['Both approaching', '<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)', '↑'],
        ],
      },
      {
        t: 'p',
        html: '<b>Effect of wind</b> (wind speed <i>w</i> along the direction of sound travel, source → observer): replace <i>v</i> with (<i>v</i> + <i>w</i>) everywhere; if the wind blows the other way, use (<i>v</i> − <i>w</i>).',
      },
      {
        t: 'formula',
        kicker: 'Doppler effect for light (relative speed u ≪ c, where c is the speed of light)',
        main: '<i>f</i>′ = <i>f</i>(1 ± <i>u</i>/<i>c</i>),   Δ<i>λ</i>/<i>λ</i> = <i>u</i>/<i>c</i>',
        legend: [],
        note: '• Approaching → frequency up, wavelength down: <b>blueshift</b>.<br>• Receding → frequency down, wavelength up: <b>redshift</b>.',
      },
      {
        t: 'table',
        title: null,
        head: ['Symbol', 'Meaning', 'SI Unit'],
        rows: [
          ['<i>f</i>', 'True (emitted) frequency', 'Hz'],
          ['<i>f</i>′', 'Apparent (observed) frequency', 'Hz'],
          ['<i>v</i>', 'Speed of sound in the medium', 'm s<sup>−1</sup>'],
          ['<i>v</i><sub><i>s</i></sub>, <i>v</i><sub><i>o</i></sub>', 'Speeds of source, observer', 'm s<sup>−1</sup>'],
          ['<i>w</i>', 'Wind speed', 'm s<sup>−1</sup>'],
          ['Δ<i>λ</i>', 'Wavelength shift (light)', 'm'],
        ],
      },

      { t: 'part', title: 'CBSE board derivation — Doppler formulas for sound' },
      {
        t: 'p',
        html: 'We derive the two basic cases and, crucially, see why they differ.',
      },
      {
        t: 'p',
        html: '<b>Case A: Source moving toward a stationary observer.</b> Let the source emit sound of frequency <i>f</i>, so its period is <i>T</i> = 1/<i>f</i>, and let sound travel at speed <i>v</i>. For a stationary source, one wavelength would be <i>λ</i> = <i>vT</i>.',
      },
      {
        t: 'p',
        html: '<b>The key event:</b> during one period <i>T</i>, the source itself advances a distance <i>v</i><sub><i>s</i></sub><i>T</i> toward the observer. So by the time it emits the next crest, it has crept forward — and the gap between consecutive crests (the wavelength reaching the observer) is <b>squeezed</b>:<br><i>λ</i>′ = <i>vT</i> − <i>v</i><sub><i>s</i></sub><i>T</i> = (<i>v</i> − <i>v</i><sub><i>s</i></sub>)<i>T</i> = (<i>v</i> − <i>v</i><sub><i>s</i></sub>)/<i>f</i>',
      },
      {
        t: 'p',
        html: '<b>Why this is the heart of it:</b> the source physically alters the wavelength in the air. The sound still travels at speed <i>v</i> (the medium sets that), so the observer measures:<br><i>f</i>′ = <i>v</i>/<i>λ</i>′ = <i>v</i>/((<i>v</i> − <i>v</i><sub><i>s</i></sub>)/<i>f</i>) = <i>f</i>(<i>v</i>/(<i>v</i> − <i>v</i><sub><i>s</i></sub>))<br>Since <i>v</i> − <i>v</i><sub><i>s</i></sub> < <i>v</i>, we get <i>f</i>′ > <i>f</i> — higher pitch, as expected for approach. ✓',
      },
      {
        t: 'p',
        html: '<b>Case B: Observer moving toward a stationary source.</b> Now the source is still, so the wavelength in the air is the <b>normal</b> <i>λ</i> = <i>v</i>/<i>f</i> — unchanged. But the observer is rushing into the waves at speed <i>v</i><sub><i>o</i></sub>.',
      },
      {
        t: 'p',
        html: '<b>The key event:</b> relative to the moving observer, the sound now approaches at an effective speed <i>v</i> + <i>v</i><sub><i>o</i></sub> (their own speed adds to the wave’s). The number of wavefronts they sweep past per second is therefore:<br><i>f</i>′ = (effective speed)/(wavelength) = (<i>v</i> + <i>v</i><sub><i>o</i></sub>)/<i>λ</i> = (<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i>/<i>f</i>) = <i>f</i>((<i>v</i> + <i>v</i><sub><i>o</i></sub>)/<i>v</i>)<br>Again <i>f</i>′ > <i>f</i>. ✓',
      },
      {
        t: 'p',
        html: '<b>Now compare — the asymmetry made visible.</b> Suppose <i>v</i><sub><i>s</i></sub> = <i>v</i><sub><i>o</i></sub> = <i>u</i>. Then:<br><i>f</i>′<sub>source moving</sub> = <i>fv</i>/(<i>v</i> − <i>u</i>),   <i>f</i>′<sub>observer moving</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/<i>v</i><br>These are <b>not equal</b> (the source-moving result is slightly larger). The reason is now transparent: a moving source changes <i>λ</i>, a moving observer changes the effective speed. Combining both cases gives the general result <i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i> − <i>v</i><sub><i>s</i></sub>).',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A train approaches a stationary listener at a railway platform with a speed of 30 m s<sup>−1</sup>, sounding a horn of frequency 500 Hz. If the speed of sound in air is 330 m s<sup>−1</sup>, find the frequency heard by the listener.',
        steps: [
          '<b>Given:</b> <i>f</i> = 500 Hz, <i>v</i><sub><i>s</i></sub> = 30 m s<sup>−1</sup> (toward observer), <i>v</i><sub><i>o</i></sub> = 0, <i>v</i> = 330 m s<sup>−1</sup>.',
          'Source moving toward a stationary observer:<br><i>f</i>′ = <i>f</i>(<i>v</i>/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)) = 500(330/(330 − 30)) = 500(330/300) = 500 × 1.1',
        ],
        ans: '550 Hz — higher than the true 500 Hz, as expected for an approaching source.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A source and an observer are separated by some distance. In Case 1, the source moves toward a stationary observer at 30 m s<sup>−1</sup>. In Case 2, the observer moves toward a stationary source at 30 m s<sup>−1</sup>. The true frequency is 300 Hz and the speed of sound is 330 m s<sup>−1</sup>. Are the two observed frequencies equal?',
        steps: [
          '<b>The trap:</b> “Same speed, same approach — so same frequency, right?” <b>Wrong.</b> Sound Doppler is asymmetric.',
          '<b>Case 1 (source moving):</b><br><i>f</i>′<sub>1</sub> = <i>fv</i>/(<i>v</i> − <i>v</i><sub><i>s</i></sub>) = 300 × 330/300',
          '<b>Case 2 (observer moving):</b><br><i>f</i>′<sub>2</sub> = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/<i>v</i> = 300 × 360/330',
          '<b>Mental note:</b> “Source-moving beats observer-moving” for approach. Only when <i>v</i><sub><i>s</i></sub>, <i>v</i><sub><i>o</i></sub> ≪ <i>v</i> do the two nearly coincide.',
        ],
        ans: 'No — 330 Hz ≠ 327.3 Hz. A moving source produces a slightly larger shift than a moving observer at the same speed, because the source physically compresses the wavelength while the observer merely changes the rate of meeting waves.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'An ambulance with a siren of frequency 600 Hz moves toward a motorcyclist at 40 m s<sup>−1</sup>. The motorcyclist rides toward the ambulance at 20 m s<sup>−1</sup>. Taking the speed of sound as 340 m s<sup>−1</sup>, find the frequency the motorcyclist hears.',
        steps: [
          '<b>Given:</b> <i>f</i> = 600 Hz, <i>v</i><sub><i>s</i></sub> = 40 m s<sup>−1</sup> (toward), <i>v</i><sub><i>o</i></sub> = 20 m s<sup>−1</sup> (toward), <i>v</i> = 340 m s<sup>−1</sup>.',
          'Both approaching, so numerator gets +<i>v</i><sub><i>o</i></sub> and denominator gets −<i>v</i><sub><i>s</i></sub>:<br><i>f</i>′ = <i>f</i>((<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)) = 600((340 + 20)/(340 − 40)) = 600(360/300) = 600 × 1.2',
          '(<b>Sanity check:</b> both moving toward each other → frequency must rise above 600. ✓)',
        ],
        ans: '720 Hz.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A car moving toward a large vertical wall at 20 m s<sup>−1</sup> continuously sounds a horn of frequency 320 Hz. The speed of sound is 340 m s<sup>−1</sup>. Find (a) the frequency of the echo heard by the driver, and (b) the beat frequency between the direct horn sound and the echo.',
        steps: [
          '<b>The insight — a double Doppler.</b> The wall first acts as a moving-source → stationary-observer problem, then re-emits as a stationary-source → moving-observer problem. The driver is both the original source and the final listener.',
          '<b>Step 1 — sound reaches the wall.</b> The wall is a stationary observer; the car is a source approaching at <i>u</i> = 20 m s<sup>−1</sup>:<br><i>f</i><sub>wall</sub> = <i>fv</i>/(<i>v</i> − <i>u</i>) = 320 × 340/320 = 340 Hz',
          '<b>Step 2 — the wall reflects.</b> The wall now behaves as a stationary source emitting <i>f</i><sub>wall</sub> = 340 Hz. The driver is an observer moving toward it at <i>u</i> = 20 m s<sup>−1</sup>:<br><i>f</i><sub>echo</sub> = <i>f</i><sub>wall</sub>(<i>v</i> + <i>u</i>)/<i>v</i> = 340 × 360/340',
          '(Combined shortcut: <i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>) = 320 × 360/320 = 360 Hz.)',
          '<b>Step 3 — beats.</b> The driver also hears the horn directly at its true 320 Hz (no relative motion between driver and their own horn). The beat frequency between the direct sound and the echo is:<br><i>f</i><sub>beat</sub> = <i>f</i><sub>echo</sub> − <i>f</i> = 360 − 320',
          '<b>Reasoning check:</b> The general result is <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>) = 2(20)(320)/320 = 40 Hz — the beats grow as the car speeds up, which is exactly how some old “speed by sound” gadgets worked.',
        ],
        ans: '(a) Echo frequency = 360 Hz; (b) Beat frequency = 40 Hz.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A car sounds a horn of frequency 400 Hz while moving away from a stationary listener at 20 m s<sup>−1</sup>. Find the observed frequency. (Speed of sound = 340 m s<sup>−1</sup>.)',
            a: '<i>f</i>′ = 400 · 340/360 = 377.8 Hz.',
          },
          {
            q: '[NEET] A whistle of frequency 500 Hz is stationary. An observer runs away from it at 34 m s<sup>−1</sup>. What frequency does the observer hear? (Speed of sound = 340 m s<sup>−1</sup>.)',
            a: '<i>f</i>′ = 500 · (340 − 34)/340 = 450 Hz.',
          },
          {
            q: '[JEE Main] Two trains move toward each other, each at 20 m s<sup>−1</sup>. One sounds a whistle of 660 Hz. What frequency does a passenger on the other train hear? (Speed of sound = 340 m s<sup>−1</sup>.)',
            a: '<i>f</i>′ = 660 · (340 + 20)/(340 − 20) = 660 · 360/320 = 742.5 Hz.',
          },
          {
            q: '[JEE Main] A source of frequency 400 Hz moves toward a stationary observer at 30 m s<sup>−1</sup>, while a wind blows at 10 m s<sup>−1</sup> from the source toward the observer. Find the observed frequency. (Still-air sound speed = 340 m s<sup>−1</sup>.)',
            a: 'Wind adds: <i>v</i> → 350; <i>f</i>′ = 400 · 350/(350 − 30) = 400 · 350/320 = 437.5 Hz.',
          },
          {
            q: '[JEE Advanced] A distant galaxy shows the sodium line (true wavelength 589.0 nm) shifted to 589.6 nm. Is the galaxy approaching or receding, and at what speed? (Take <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup>.)',
            a: 'Wavelength increased → <b>redshift → receding</b>; <i>u</i> = <i>c</i> Δ<i>λ</i>/<i>λ</i> = 3 × 10<sup>8</sup> · 0.6/589.0 ≈ 3.06 × 10<sup>5</sup> m s<sup>−1</sup> (≈ 306 km s<sup>−1</sup>).',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'A source of sound moves toward a stationary observer. Compared to the true sound, the observer hears a sound of:',
        opts: [
          { label: 'higher frequency and shorter wavelength', nudge: null },
          {
            label: 'higher frequency and longer wavelength',
            nudge: '<b>(b) trap:</b> Higher frequency must mean shorter wavelength (since <i>v</i> is fixed in the medium) — pairing it with longer is self-contradictory.',
          },
          { label: 'lower frequency and shorter wavelength', nudge: '<b>(c) trap:</b> Right about wavelength, wrong about frequency direction.' },
          { label: 'the same frequency', nudge: '<b>(d) trap:</b> “No change” ignores the relative motion entirely.' },
        ],
        correct: 0,
        solution: 'Approach bunches the wavefronts → shorter wavelength → higher frequency.',
      },
      {
        t: 'mcq',
        q: 'A source and an observer both move toward each other at the same speed. Which formula gives the observed frequency?',
        opts: [
          {
            label: '<i>f</i>′ = <i>f</i>(<i>v</i> − <i>v</i><sub><i>o</i></sub>)/(<i>v</i> + <i>v</i><sub><i>s</i></sub>)',
            nudge: '<b>(a) trap:</b> Both signs flipped — this is the receding case, which lowers the pitch.',
          },
          { label: '<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)', nudge: null },
          {
            label: '<i>f</i>′ = <i>f</i>(<i>v</i> − <i>v</i><sub><i>o</i></sub>)/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)',
            nudge: '<b>(c), (d) traps:</b> One sign correct, one wrong — the classic “half-remembered rule” mistake. Always test against “toward raises pitch.”',
          },
          {
            label: '<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i> + <i>v</i><sub><i>s</i></sub>)',
            nudge: '<b>(c), (d) traps:</b> One sign correct, one wrong — the classic “half-remembered rule” mistake. Always test against “toward raises pitch.”',
          },
        ],
        correct: 1,
        solution: 'Approach → frequency up → numerator gains +<i>v</i><sub><i>o</i></sub>, denominator loses <i>v</i><sub><i>s</i></sub>.',
      },
      {
        t: 'mcq',
        q: 'The Doppler effect for sound is not symmetric between a moving source and a moving observer because:',
        opts: [
          { label: 'sound waves are longitudinal', nudge: '<b>(a) trap:</b> Longitudinal/transverse character is irrelevant to the asymmetry.' },
          {
            label: 'the speed of sound depends on frequency',
            nudge: '<b>(b) trap:</b> In a non-dispersive medium, sound speed does not depend on frequency.',
          },
          { label: 'sound travels through a medium that serves as a fixed reference frame', nudge: null },
          {
            label: 'the observer cannot move faster than sound',
            nudge: '<b>(d) trap:</b> Not even true — an observer can move faster than sound (a supersonic jet) — and it is not the reason for the asymmetry.',
          },
        ],
        correct: 2,
        solution: 'A moving source changes the wavelength in the medium; a moving observer changes the effective wave speed they encounter. The medium breaks the symmetry.',
      },
      {
        t: 'mcq',
        q: 'Light from a distant star is observed to be shifted toward longer wavelengths. This means the star is:',
        opts: [
          {
            label: 'approaching us (blueshift)',
            nudge: '<b>(a) trap:</b> Approach gives a blueshift (shorter wavelength) — the term is correct but matched to the wrong motion.',
          },
          { label: 'receding from us (redshift)', nudge: null },
          { label: 'stationary', nudge: '<b>(c) trap:</b> A stationary star shows no shift at all.' },
          {
            label: 'heating up',
            nudge: '<b>(d) trap:</b> Confusing a Doppler shift with thermal (blackbody) colour changes — different physics entirely.',
          },
        ],
        correct: 1,
        solution: 'Longer wavelength = redshift = the source is moving away.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Sign-convention chaos.</b> The single most common error. Don’t memorize four formulas blindly — anchor every problem to “<b>toward → up, away → down</b>” and assign signs so the result matches. If it doesn’t, flip a sign.',
          '<b>Treating source-moving and observer-moving as identical.</b> They give different answers for sound. Use <i>v</i><sub><i>s</i></sub> in the denominator, <i>v</i><sub><i>o</i></sub> in the numerator — never swap them.',
          '<b>Ignoring the wind.</b> Wind changes the effective sound speed: <i>v</i> → <i>v</i> ± <i>w</i> in both numerator and denominator. Students often forget it applies everywhere, or get its direction backward.',
          '<b>Using the off-axis velocity directly.</b> Only the component of velocity along the line joining source and observer counts. Sound emitted while the motion is purely sideways (at closest approach) has <b>no shift</b>; from a moving source, that sound reaches you a moment after it passes.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> For a “source approaching a wall and hearing its own echo,” skip the two-step grind and use the combined result directly: <i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>), and the beat frequency with the direct sound is <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>). Recognizing the wall as “stationary mirror” turns a messy double-Doppler into one clean line.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Master formula (sound)',
            note: '<i>f</i>′ = <i>f</i>(<i>v</i> ± <i>v</i><sub><i>o</i></sub>)/(<i>v</i> ∓ <i>v</i><sub><i>s</i></sub>)',
          },
          {
            f: 'Sign rule',
            note: 'numerator +<i>v</i><sub><i>o</i></sub> if observer moves toward; denominator −<i>v</i><sub><i>s</i></sub> if source moves toward. (Toward → pitch up.)',
          },
          {
            f: 'Both approaching',
            note: '<i>f</i>′ = <i>f</i>(<i>v</i> + <i>v</i><sub><i>o</i></sub>)/(<i>v</i> − <i>v</i><sub><i>s</i></sub>)',
          },
          { f: 'Wind (speed <i>w</i>, source→observer)', note: 'replace <i>v</i> → <i>v</i> + <i>w</i> everywhere.' },
          {
            f: 'Echo off a wall (car at <i>u</i>)',
            note: '<i>f</i><sub>echo</sub> = <i>f</i>(<i>v</i> + <i>u</i>)/(<i>v</i> − <i>u</i>), <i>f</i><sub>beat</sub> = 2<i>uf</i>/(<i>v</i> − <i>u</i>).',
          },
          {
            f: 'Light (<i>u</i> ≪ <i>c</i>)',
            note: '<i>f</i>′ = <i>f</i>(1 ± <i>u</i>/<i>c</i>), Δ<i>λ</i>/<i>λ</i> = <i>u</i>/<i>c</i> (red = receding, blue = approaching).',
          },
        ],
        aids: [
          '“Toward raises, away lowers” — the universal sanity check.',
          '“<i>v</i><sub><i>s</i></sub> down below, <i>v</i><sub><i>o</i></sub> up top” — source in denominator, observer in numerator.',
          '“Red runs away” — redshift means receding.',
        ],
      },
    ],
  },
];
