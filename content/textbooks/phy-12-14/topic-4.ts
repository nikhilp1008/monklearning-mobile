import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 14, Topic 04: pp. 902–911 of the Class 12 Physics Master Reference,
 * word for word. The book's sub-topic “Digital Electronics and Logic Gates”,
 * split at its Sections 1 to 8 (the Supplement starts on p. 912). Figure 14.11
 * is captioned on p. 903 (after Concept intuition) and drawn on p. 904;
 * Figure 14.12 is captioned on p. 905 (after Procedure B) and drawn on p. 906.
 * Each is set beside the text it illustrates: 14.11 after the paragraph on the
 * derived gates, 14.12 after Procedure B. They are redrawn in
 * lib/diagrams/physics-12-14b.ts. The topic has no unnumbered drawings.
 *
 * NOT is an overline: U+0305 (combining overline) after each character it
 * covers, with no spaces inside a barred group so the bar stays whole and never
 * breaks across lines; a character under two bars (the book's double bar)
 * takes U+033F (combining double overline). The truth tables inside worked
 * examples are written as bullets, one input row each (as Example E.1). Errata
 * (layout): the four MCQs print their options (A)–(D) run together in one line
 * (pp. 909–910; the errata calls them pp. 903–904): split into four options.
 */
export const TOPICS: Topic[] = [
  // ───────────────────────── Topic 04 · pp. 902–911 ─────────────────────────
  {
    n: '04',
    title: 'Digital Electronics and Logic Gates',
    kalam: 'Call a low voltage (say 0 V) a logical 0, and a high voltage (say 5 V) a logical 1.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> Removed from CBSE Boards, but firmly in JEE Main and NEET 2026 — and a reliable scoring zone because the questions are pattern-based, not calculation-heavy. NEET sets 1–2 questions on gate identification, truth tables, or universal gates. JEE Main asks for the Boolean expression of a combination circuit or the output of cascaded gates. JEE Advanced occasionally demands realising one gate purely from NAND/NOR gates, or simplifying a Boolean expression.',
      },
      {
        t: 'p',
        html: 'Everything so far in this chapter has been analog — voltages that vary smoothly and continuously, like the needle of a speedometer sweeping across its dial. But the entire digital world — your phone, your calculator, every computer — runs on a deliberately cruder idea: allow a voltage to be only <b>two values</b>. Call a low voltage (say 0 V) a logical <b>0</b>, and a high voltage (say 5 V) a logical <b>1</b>. That’s it. Two states, nothing in between. A signal that only ever takes these two levels is a <b>digital signal</b>, and the numbers built from 0s and 1s are <b>binary</b>.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> picture the tube-light switch on your wall. It is either ON or OFF — there is no “37% on.” If ON means 1 and OFF means 0, that single switch is the simplest possible digital element. Now imagine a little box with two such switches as inputs and one bulb as output, wired so the bulb’s state depends on the switches in a fixed, logical way. That box is a <b>logic gate</b>: a digital circuit that enforces a definite logical relationship between its input voltages and its output voltage.',
      },
      {
        t: 'p',
        html: 'Why bother restricting ourselves to two levels? Because two-level signals are extraordinarily robust. A little noise that would corrupt an analog reading can’t turn a clean “0 V” into “5 V” — the gap is too wide. And every complex digital operation, from adding numbers to running an app, can be assembled from a handful of these simple gates. Master the handful, and you understand the grammar of all digital electronics.',
      },
      {
        t: 'p',
        html: 'There are exactly <b>three basic gates</b> from which everything else is built:<br>• The <b>OR gate</b> is the “either” gate: its output is high if any input is high. Think of two switches wired in parallel to a bulb — close either one and the bulb lights.<br>• The <b>AND gate</b> is the “both” gate: its output is high only if all inputs are high. Think of two switches in series — the bulb lights only when both are closed.<br>• The <b>NOT gate</b> (inverter) is the “opposite” gate: it has a single input and simply flips it — 0 becomes 1, 1 becomes 0.',
      },
      {
        t: 'p',
        html: 'From these three we build the two most important derived gates: the <b>NAND</b> (AND followed by NOT) and the <b>NOR</b> (OR followed by NOT). These two are special — they are <b>universal gates</b>, meaning any logic function whatsoever can be built using only NANDs, or only NORs. That is why real chips are often manufactured from a sea of identical NAND gates.',
      },
      { t: 'fig', id: 'p12-14-fig-14.11' },
      {
        t: 'p',
        html: '<b>Limiting conditions & assumptions.</b> This whole framework assumes <b>positive logic</b> — that the higher voltage represents 1 and the lower represents 0 (the opposite convention, negative logic, simply swaps the labels). The “0 V and 5 V” levels are illustrative; real families use different thresholds, with a forbidden middle band that valid signals must avoid. And remember Boolean arithmetic is logic, not ordinary counting: 1 + 1 = 1 here (OR of two highs is still high), not 2 — forgetting this is the single most common beginner error.',
      },

      { t: 'part', title: 'Key definitions, symbols and Boolean identities' },
      {
        t: 'table',
        title: 'The three basic gates',
        head: ['Gate', 'Boolean expression', 'Output is HIGH (1) when…'],
        rows: [
          ['OR', '<i>Y</i> = <i>A</i> + <i>B</i>', 'any input is 1'],
          ['AND', '<i>Y</i> = <i>A</i> · <i>B</i>', 'all inputs are 1'],
          ['NOT', '<i>Y</i> = <i>A</i>̅', 'the input is 0 (it inverts)'],
        ],
      },
      {
        t: 'table',
        title: 'The derived / universal gates',
        head: ['Gate', 'Boolean expression', 'Description'],
        rows: [
          ['NAND', '<i>Y</i> = <i>A</i>̅·̅<i>B</i>̅', 'AND then NOT — universal'],
          ['NOR', '<i>Y</i> = <i>A</i>̅+̅<i>B</i>̅', 'OR then NOT — universal'],
          ['XOR', '<i>Y</i> = <i>A</i> ⊕ <i>B</i> = <i>AB</i>̅ + <i>A</i>̅<i>B</i>', 'output 1 only when inputs <b>differ</b>'],
          ['XNOR', '<i>Y</i> = <i>A</i>̅⊕̅<i>B</i>̅', 'output 1 only when inputs are the <b>same</b>'],
        ],
      },
      {
        t: 'table',
        title: 'Truth tables (two inputs; XNOR is the complement of XOR)',
        head: ['A', 'B', 'OR <i>A</i> + <i>B</i>', 'AND <i>A</i> · <i>B</i>', 'NAND', 'NOR', 'XOR'],
        rows: [
          ['0', '0', '0', '0', '1', '1', '0'],
          ['0', '1', '1', '0', '1', '0', '1'],
          ['1', '0', '1', '0', '1', '0', '1'],
          ['1', '1', '1', '1', '0', '0', '0'],
        ],
      },
      { t: 'p', html: '(NOT, single input: 0 → 1, 1 → 0.)' },
      {
        t: 'formula',
        kicker: 'Core Boolean identities',
        main: '<i>A</i> + 0 = <i>A</i><br><i>A</i> + 1 = 1<br><i>A</i> + <i>A</i> = <i>A</i><br><i>A</i> + <i>A</i>̅ = 1<br><i>A</i> · 0 = 0<br><i>A</i> · 1 = <i>A</i><br><i>A</i> · <i>A</i> = <i>A</i><br><i>A</i> · <i>A</i>̅ = 0<br><i>A</i>̿ = <i>A</i>',
        legend: ['<i>A</i> = a logic variable, 0 or 1', '<i>A</i>̅ = NOT <i>A</i>, the complement of <i>A</i>', '+ = OR', '· = AND'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'De Morgan’s theorems (the most-tested identities in the topic)',
        main: '<i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ · <i>B</i>̅<br><i>A</i>̅·̅<i>B</i>̅ = <i>A</i>̅ + <i>B</i>̅',
        legend: ['<i>A</i>, <i>B</i> = logic variables, 0 or 1', 'bar = NOT, the complement of everything under it', '+ = OR', '· = AND'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>A note on dimensions:</b> logic variables are dimensionless binary states — there is no SI unit or dimensional formula here. The quantities are Boolean (logical), not physical, which is exactly why “Key procedures and logical framework”, the next part, is a logical framework rather than a physics derivation.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'proc',
        title: 'Procedure A — Building the truth table of any combination circuit',
        steps: [
          '<b>Count the inputs.</b> With <i>n</i> inputs there are 2<sup><i>n</i></sup> rows. List every combination in binary order (00, 01, 10, 11 for two inputs).',
          '<b>Work gate by gate, left to right.</b> Add a column for the output of each intermediate gate, using its rule (OR = any-high, AND = all-high, NOT = flip).',
          '<b>Combine to the final output.</b> The last column is <i>Y</i>. <b>Why this works:</b> each gate is a deterministic function of its inputs, so propagating values left-to-right is guaranteed to give the unique output for every input case.',
        ],
      },
      { t: 'p', html: '<b>Procedure B — Why NAND and NOR are universal</b>' },
      {
        t: 'p',
        html: 'A gate set is universal if it can reproduce NOT, AND, and OR (since every Boolean function reduces to these). Take NAND:<br>• <b>NOT from NAND:</b> tie both inputs together. <i>A</i>̅·̅<i>A</i>̅ = <i>A</i>̅. One NAND gives an inverter.<br>• <b>AND from NAND:</b> a NAND followed by a NAND-inverter. <i>A</i>̿·̿<i>B</i>̿ = <i>A</i> · <i>B</i>.<br>• <b>OR from NAND:</b> invert each input, then NAND them. By De Morgan, <i>A</i>̿·̅<i>B</i>̿ = <i>A</i> + <i>B</i>.',
      },
      {
        t: 'p',
        html: 'Since NOT, AND, and OR are all reproducible, <b>NAND alone suffices for any logic circuit</b> — and the identical argument (with De Morgan’s other theorem) works for NOR. This is the deep reason chips are mass-produced from one repeated gate.',
      },
      { t: 'fig', id: 'p12-14-fig-14.12' },
      { t: 'p', html: '<b>Procedure C — Reading a gate from “tied inputs”</b>' },
      {
        t: 'p',
        html: 'A frequent exam move feeds the same signal to both inputs of a two-input gate. Use the identities: a NOR with both inputs <i>A</i> gives <i>A</i>̅+̅<i>A</i>̅ = <i>A</i>̅ (a NOT); a NAND with both inputs <i>A</i> gives <i>A</i>̅·̅<i>A</i>̅ = <i>A</i>̅ (also a NOT); an OR with both inputs <i>A</i> gives <i>A</i> + <i>A</i> = <i>A</i> (a wire); an AND with both inputs <i>A</i> gives <i>A</i> · <i>A</i> = <i>A</i> (a wire). Recognising this collapses many “what does this circuit do?” questions instantly.',
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A logic circuit produces the output <i>Y</i> = <i>A</i> + <i>B</i>̅ (read: “A OR (NOT B)”). Construct its complete truth table and state for how many input combinations the output is high.',
        steps: [
          '<b>Step 1 — list the 2<sup>2</sup> = 4 input rows and the intermediate <i>B</i>̅.</b><br>• <i>A</i> = 0, <i>B</i> = 0: <i>B</i>̅ = 1, <i>Y</i> = 1<br>• <i>A</i> = 0, <i>B</i> = 1: <i>B</i>̅ = 0, <i>Y</i> = 0<br>• <i>A</i> = 1, <i>B</i> = 0: <i>B</i>̅ = 1, <i>Y</i> = 1<br>• <i>A</i> = 1, <i>B</i> = 1: <i>B</i>̅ = 0, <i>Y</i> = 1',
          '<b>Step 2 — read off.</b> <i>Y</i> = 1 in three of the four cases; it is 0 only when <i>A</i> = 0 and <i>B</i> = 1 (the one case where neither “A is high” nor “B is low” holds).',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'The two inputs of a NOR gate are connected together to the same signal <i>A</i>. Which single gate does the circuit behave as?',
        steps: [
          '<b>The trap:</b> “It’s still a NOR / it’s an OR gate.”',
          '<b>Speed reasoning:</b> with both inputs equal to <i>A</i>, the output is <i>A</i>̅+̅<i>A</i>̅. Using the identity <i>A</i> + <i>A</i> = <i>A</i>, this is just <i>A</i>̅.',
        ],
        ans: 'A NOT gate (inverter). Whenever a two-input NOR or NAND has its inputs tied together, it becomes a NOT gate — a one-line result worth memorising, because it is the first step in the “universal gate” constructions.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In a circuit, input <i>A</i> and input <i>B</i> each split into two paths. Gate 1 computes <i>A</i> · <i>B</i>̅; Gate 2 computes <i>A</i>̅ · <i>B</i>; their outputs feed an OR gate. Find the Boolean expression and identify the standard gate this circuit implements.',
        steps: [
          '<b>Step 1 — write the OR of the two AND outputs:</b><br><i>Y</i> = <i>AB</i>̅ + <i>A</i>̅<i>B</i>',
          '<b>Step 2 — build the truth table:</b><br>• <i>A</i> = 0, <i>B</i> = 0: <i>AB</i>̅ = 0, <i>A</i>̅<i>B</i> = 0, <i>Y</i> = 0<br>• <i>A</i> = 0, <i>B</i> = 1: <i>AB</i>̅ = 0, <i>A</i>̅<i>B</i> = 1, <i>Y</i> = 1<br>• <i>A</i> = 1, <i>B</i> = 0: <i>AB</i>̅ = 1, <i>A</i>̅<i>B</i> = 0, <i>Y</i> = 1<br>• <i>A</i> = 1, <i>B</i> = 1: <i>AB</i>̅ = 0, <i>A</i>̅<i>B</i> = 0, <i>Y</i> = 0',
          '<b>Step 3 — identify.</b> The output is 1 exactly when the inputs differ — this is the <b>XOR (exclusive-OR) gate</b>, <i>Y</i> = <i>A</i> ⊕ <i>B</i>. (This combination, two AND gates with one inverted input each feeding an OR, is the standard way XOR is built from basic gates.)',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'Realise an <b>OR gate using only NAND gates.</b> Prove your circuit is correct using De Morgan’s theorem, and state the minimum number of NAND gates required.',
        steps: [
          '<b>Construction.</b><br>1. Invert each input with a NAND used as a NOT (inputs tied): gate 1 gives <i>A</i>̅, gate 2 gives <i>B</i>̅. (2 NAND gates.)<br>2. Feed <i>A</i>̅ and <i>B</i>̅ into a third NAND: output = <i>A</i>̿·̅<i>B</i>̿. (1 NAND gate.)',
          '<b>Proof via De Morgan.</b> Apply <i>X</i>̅·̅<i>Y</i>̅ = <i>X</i>̅ + <i>Y</i>̅ with <i>X</i> = <i>A</i>̅, <i>Y</i> = <i>B</i>̅:<br><i>A</i>̿·̅<i>B</i>̿ = <i>A</i>̿ + <i>B</i>̿ = <i>A</i> + <i>B</i><br>which is exactly the OR function.',
          '<b>Verification (truth table of the final NAND):</b><br>• <i>A</i> = 0, <i>B</i> = 0: <i>A</i>̅ = 1, <i>B</i>̅ = 1, <i>A</i>̿·̅<i>B</i>̿ = 0<br>• <i>A</i> = 0, <i>B</i> = 1: <i>A</i>̅ = 1, <i>B</i>̅ = 0, <i>A</i>̿·̅<i>B</i>̿ = 1<br>• <i>A</i> = 1, <i>B</i> = 0: <i>A</i>̅ = 0, <i>B</i>̅ = 1, <i>A</i>̿·̅<i>B</i>̿ = 1<br>• <i>A</i> = 1, <i>B</i> = 1: <i>A</i>̅ = 0, <i>B</i>̅ = 0, <i>A</i>̿·̅<i>B</i>̿ = 1',
          'The output column matches OR exactly. <b>Minimum number of NAND gates: 3.</b> The elegance is that De Morgan’s theorem predicts the construction before you draw a single wire — invert the inputs, NAND them, and an OR falls out.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[NEET] Draw the logic symbol and write the truth table and Boolean expression for the AND gate and the NOR gate.',
            a: 'AND: <i>Y</i> = <i>A</i> · <i>B</i>, output 1 only for <i>A</i> = <i>B</i> = 1. NOR: <i>Y</i> = <i>A</i>̅+̅<i>B</i>̅, output 1 only for <i>A</i> = <i>B</i> = 0. Symbols: Figure 14.11.',
          },
          {
            q: '[NEET] A NAND gate has both its inputs shorted together and fed with signal <i>A</i>. What logic operation does it perform?',
            a: 'NOT (inverter): <i>A</i>̅·̅<i>A</i>̅ = <i>A</i>̅.',
          },
          {
            q: '[JEE Main] Write the Boolean expression for the output of a two-input AND gate whose output is then passed through a NOT gate, and name the resulting gate.',
            a: '<i>Y</i> = <i>A</i>̅·̅<i>B</i>̅ — this is the <b>NAND</b> gate.',
          },
          {
            q: '[JEE Main] For inputs <i>A</i> = 1, <i>B</i> = 0, find the output of (i) an XOR gate, (ii) a NOR gate, and (iii) a NAND gate.',
            a: '(i) XOR = 1; (ii) NOR = 0; (iii) NAND = 1.',
          },
          {
            q: '[JEE Advanced] Using De Morgan’s theorem, realise an AND gate using only NOR gates, and state the minimum number of NOR gates needed.',
            a: 'Invert each input with a NOR-as-NOT (2 gates), then NOR the results: <i>A</i>̿+̅<i>B</i>̿ = <i>A</i> · <i>B</i> by De Morgan. <b>Minimum: 3 NOR gates.</b>',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'Which of the following is a universal gate?',
        opts: [
          {
            label: 'OR',
            nudge: '<b>(A)</b> and <b>(B)</b> are basic gates but cannot, by themselves, produce inversion, so they are not universal.',
          },
          {
            label: 'AND',
            nudge: '<b>(A)</b> and <b>(B)</b> are basic gates but cannot, by themselves, produce inversion, so they are not universal.',
          },
          { label: 'NAND', nudge: null },
          {
            label: 'XOR',
            nudge: '<b>(D)</b> XOR is a useful derived gate but is not universal: XOR gates alone can never produce AND or OR. Students who equate “important” with “universal” pick XOR.',
          },
        ],
        correct: 2,
        solution: 'A NAND gate can be combined to reproduce NOT, AND, and OR — hence any logic function — so it is universal (NOR is the other universal gate).',
      },
      {
        t: 'mcq',
        q: 'The Boolean expression <i>A</i>̅+̅<i>B</i>̅ is equal to:',
        opts: [
          {
            label: '<i>A</i>̅ + <i>B</i>̅',
            nudge: '<b>(A)</b> applies the bar to each term but keeps the OR — the classic De Morgan error of forgetting that the operation flips (+ becomes ·).',
          },
          { label: '<i>A</i>̅ · <i>B</i>̅', nudge: null },
          {
            label: '<i>A</i> · <i>B</i>',
            nudge: '<b>(C)</b> is an unrelated expression.',
          },
          {
            label: '<i>A</i>̅·̅<i>B</i>̅',
            nudge: '<b>(D)</b> is the other De Morgan form, <i>A</i>̅·̅<i>B</i>̅ = <i>A</i>̅ + <i>B</i>̅ (the NAND), which tempts students who memorise the theorems without tracking which is which.',
          },
        ],
        correct: 1,
        solution: 'This is De Morgan’s first theorem: the complement of a sum equals the product of the complements.',
      },
      {
        t: 'mcq',
        q: 'A two-input gate gives output 1 only when its two inputs are <b>different</b>. The gate is:',
        opts: [
          { label: 'AND', nudge: '<b>(A)</b> AND is 1 only when both are 1 (same).' },
          { label: 'NOR', nudge: '<b>(B)</b> NOR is 1 only when both are 0 (same).' },
          { label: 'XOR', nudge: null },
          { label: 'NAND', nudge: '<b>(D)</b> NAND is 1 except when both are 1.' },
        ],
        correct: 2,
        solution: '“Output 1 only when inputs differ” is the definition of the exclusive-OR (XOR) gate, <i>Y</i> = <i>AB</i>̅ + <i>A</i>̅<i>B</i>. None of the other options singles out “different,” which is XOR’s signature.',
      },
      {
        t: 'mcq',
        q: 'In Boolean algebra, 1 + 1 equals:',
        opts: [
          {
            label: '2',
            nudge: '<b>(A)</b> and <b>(D)</b> treat “+” as ordinary or binary addition — the most common conceptual slip in the entire topic.',
          },
          { label: '0', nudge: '<b>(B)</b> confuses OR with XOR (where 1 ⊕ 1 = 0).' },
          { label: '1', nudge: null },
          {
            label: '10',
            nudge: '<b>(A)</b> and <b>(D)</b> treat “+” as ordinary or binary addition — the most common conceptual slip in the entire topic.',
          },
        ],
        correct: 2,
        solution: 'The “+” is the logical OR, not arithmetic addition. OR of two highs is high, so 1 + 1 = 1. The lesson: in Boolean algebra, symbols denote logic operations, never counting.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Treating Boolean “+” as arithmetic.</b> <i>A</i> + <i>A</i> = <i>A</i> and 1 + 1 = 1. The “+” is OR, the “·” is AND — logic, never sums.',
          '<b>Botching De Morgan.</b> Both the bar distributes <b>and</b> the operation flips: <i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ · <i>B</i>̅ (not <i>A</i>̅ + <i>B</i>̅). Forgetting the flip is the top error.',
          '<b>Confusing AND/OR symbols.</b> AND is the flat-backed D-shape (·, “both”); OR is the curved-back shield (+, “either”). Swapping them changes the output for the mixed inputs 01 and 10.',
          '<b>Forgetting which gates are universal.</b> Only NAND and NOR. Tie their inputs and they become inverters — the gateway to every universal construction.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip:</b> To identify an unknown gate fast, you rarely need the full table — just test the three “corner” cases (0,0), (1,1), (0,1), and read the outputs in that order: OR 0, 1, 1; AND 0, 1, 0; NAND 1, 0, 1; NOR 1, 0, 0; XOR 0, 0, 1. Two or three rows pin down the gate. And for any “tied-input NAND/NOR” question, the answer is always NOT — answer it on sight.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Digital signal', note: 'two levels only — 0 (low, ∼0 V) and 1 (high, ∼5 V); positive logic = high is 1' },
          {
            f: 'Basic gates',
            note: 'OR <i>Y</i> = <i>A</i> + <i>B</i> (any-high); AND <i>Y</i> = <i>A</i> · <i>B</i> (all-high); NOT <i>Y</i> = <i>A</i>̅ (invert)',
          },
          {
            f: 'Derived',
            note: 'NAND <i>A</i>̅·̅<i>B</i>̅; NOR <i>A</i>̅+̅<i>B</i>̅; XOR <i>AB</i>̅ + <i>A</i>̅<i>B</i> (1 if inputs differ)',
          },
          { f: 'Universal gates', note: 'NAND and NOR — either alone builds any circuit; tie inputs → NOT' },
          {
            f: 'De Morgan',
            note: '<i>A</i>̅+̅<i>B</i>̅ = <i>A</i>̅ · <i>B</i>̅; <i>A</i>̅·̅<i>B</i>̅ = <i>A</i>̅ + <i>B</i>̅ (bar distributes <b>and</b> operation flips)',
          },
          {
            f: 'Key identities',
            note: '<i>A</i> + <i>A</i> = <i>A</i>; <i>A</i> · <i>A</i> = <i>A</i>; <i>A</i> + <i>A</i>̅ = 1; <i>A</i> · <i>A</i>̅ = 0; <i>A</i>̿ = <i>A</i>',
          },
          { f: '<i>n</i> inputs → 2<sup><i>n</i></sup> truth-table rows', note: '' },
        ],
        aids: [
          '“OR = either, AND = both, NOT = opposite.”',
          '“NAND & NOR are the universal twins; tied inputs make them NOT.”',
          '“De Morgan: break the bar, change the sign.”',
          '“XOR = eXclusive = the odd-one-out gate (1 when different).”',
        ],
      },
    ],
  },
];
