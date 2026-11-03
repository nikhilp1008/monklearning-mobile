import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 1, Topics 04 to 06: Significant Figures; Measuring Instruments
 * (Vernier Callipers & Screw Gauge); Measurement of Length, Mass and Time.
 *
 * Pages 35 to 60 of the Drona Class 11 Physics Master Reference, word for
 * word. Each topic is cut into parts at the book's own sections; the only
 * changes are the ones that a phone forces (a stacked fraction written on one
 * line, a box or a page reference that the app cannot show).
 */
export const TOPICS: Topic[] = [
  // ───────────────────────────── 04 · pp. 35–43 ─────────────────────────────
  {
    n: '04',
    title: 'Significant Figures',
    kalam: 'Every digit in a measured value carries a promise about how precise your instrument was.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A high-frequency, easy-to-score subtopic. JEE Main carries roughly 1 question most years (counting significant figures, or reporting a calculated result correctly). NEET asks a quick counting/rounding question fairly often. CBSE Boards almost always include a 1–2 mark question on counting significant figures or expressing an answer to the correct number of figures. The rules are few — the marks are easy if you are precise.',
      },
      {
        t: 'p',
        html: 'Imagine you measure the length of your pencil with an ordinary plastic ruler marked in millimetres. You can confidently read it as 14.2 cm — the 1 and the 4 are certain, and that last 2 is your best honest estimate of the bit between two millimetre marks. Now suppose you wrote down 14.2000 cm. That would be lying — it claims you knew the length to the nearest ten-thousandth of a centimetre, which your humble ruler simply cannot deliver. The digits you are genuinely entitled to write down — the certain ones plus the first uncertain one — are called the <b>significant figures</b> of your measurement.<br><br>Here\'s the heart of the idea. <b>Every digit in a measured value carries a promise about how precise your instrument was.</b> The number 14.2 cm quietly says "I measured to about a millimetre." The number 14.20 cm says "I measured ten times more finely, to a tenth of a millimetre." These are different claims about the real world, even though mathematically 14.2 = 14.20. In pure mathematics trailing zeros are decoration; in physics they are information about precision. This is the single mental shift that makes significant figures click.',
      },
      {
        t: 'p',
        html: 'Think of it like a kirana shopkeeper weighing dal. A cheap spring balance might read "2.0 kg" — two significant figures, trustworthy only to the nearest hundred grams or so. A good digital scale reads "2.000 kg" — four significant figures, trustworthy to the gram. Both describe the same dal, but the second instrument earned those extra digits. You can never manufacture precision you didn\'t measure; significant figures are simply the rule of honesty that stops you from doing so.<br><br>Why does this honesty matter beyond exams? Because measurements travel. The length you record gets multiplied, divided, and combined by other people into final results, and if you over-state your precision, that false confidence silently corrupts everything downstream — a bridge tolerance, a drug dosage, a satellite trajectory. Significant figures are the universal shorthand scientists and engineers use to pass along not just a number but an honest statement of how much that number can be trusted. When a result is reported as 9.8 m s<sup>−2</sup> versus 9.81 m s<sup>−2</sup>, the writer is telling you something real about the experiment behind it. Learning to read and write that signal correctly is a genuine professional skill, not just a marking rule.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way...</b> picture significant figures as the "load-bearing" digits in a number — the ones actually holding up the weight of your measurement. Some zeros are load-bearing (they report real precision), and some are just scaffolding (they only position the decimal point). The whole skill of this topic is learning to tell the structural digits from the scaffolding. In 0.00450 kg, the three zeros on the left are pure scaffolding — they just push the decimal around — while the 4, 5, and the final 0 are load-bearing. So that number has <b>three</b> significant figures, not six.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• Significant figures apply to <b>measured (and calculated) quantities</b>, not to <b>exact</b> ones. The number of students in a class (say 42), pure counts, defined constants, and pure numbers like 2 in 2π<i>r</i> have <b>infinite</b> significant figures and never limit your answer.<br>• <b>Trailing zeros in a whole number without a decimal point are ambiguous.</b> Does 4500 have two, three, or four significant figures? You genuinely can\'t tell. The only honest fix is <b>scientific notation</b> — 4.5 × 10<sup>3</sup> (two), 4.50 × 10<sup>3</sup> (three), 4.500 × 10<sup>3</sup> (four).<br>• The number of significant figures is <b>independent of the unit chosen.</b> 5.6 cm, 0.056 m, and 56 mm all carry two significant figures — changing units only moves the decimal point and adds scaffolding zeros, never structural ones.<br>• Significant figures are a convention for reporting precision, not a replacement for a proper error analysis. They are a quick, standardised shorthand for "this is how far I trust this number."',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'p',
        html: 'Significant figures is a topic of <b>rules rather than formulas</b>, but the key definitions and quantitative conventions are:',
      },
      {
        t: 'def',
        term: 'Significant figures',
        html: 'all the digits in a measured value that are known reliably, plus the first uncertain (estimated) digit.',
      },
      {
        t: 'def',
        term: 'Implied uncertainty',
        html: 'a measured value is taken to be uncertain by about ±1 in its last significant digit (some conventions use ±½). Thus:<br>3.5 cm ⇒ 3.5 ± 0.1 cm,<br>3.50 cm ⇒ 3.50 ± 0.01 cm.',
      },
      { t: 'p', html: 'Adding one significant figure tightens the implied precision roughly <b>tenfold</b>.' },
      {
        t: 'def',
        term: 'Scientific notation',
        html: 'any measured value written as <i>m</i> × 10<sup><i>n</i></sup>, where 1 ≤ <i>m</i> < 10 is the <b>mantissa</b> and <i>n</i> is an integer power of ten. The number of significant figures is read <b>entirely from the mantissa</b> <i>m</i>; the power of ten contributes none.<br>6.30 × 10<sup>4</sup> ⇒ 3 significant figures (from 6.30).',
      },
      {
        t: 'p',
        html: '<b>The two arithmetic precision rules (quantitative):</b><br>• <b>Multiplication/Division:</b> the result keeps as many significant figures as the factor with the <b>fewest</b> significant figures.<br>• <b>Addition/Subtraction:</b> the result keeps as many decimal places as the term with the <b>fewest</b> decimal places.<br><br>These two rules are different and must never be swapped — that distinction is the most heavily tested point in the whole subtopic.',
      },
      {
        t: 'def',
        term: 'Order of magnitude (a close cousin)',
        html: 'Closely tied to scientific notation is the order of magnitude of a quantity — the power of ten nearest to it, found by writing the value as <i>m</i> × 10<sup><i>n</i></sup> with 1 ≤ <i>m</i> < about 3 (i.e. rounding the mantissa to the nearer power of ten) and reading off <i>n</i>. For example, the diameter of a hydrogen atom, about 1.06 × 10<sup>−10</sup> m, has order of magnitude 10<sup>−10</sup> m, while the mass of an electron, 9.1 × 10<sup>−31</sup> kg, rounds up to order 10<sup>−30</sup> kg (since 9.1 is closer to 10 than to 1). Orders of magnitude let physicists compare wildly different scales at a glance and make rapid "back-of-the-envelope" estimates without precise data.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: 'There is no derivation here; instead, master three clean procedures, each backed by a reason.' },
      { t: 'p', html: 'Apply these rules in order:' },
      {
        t: 'proc',
        title: 'Procedure 1 — Counting significant figures',
        steps: [
          '<b>All non-zero digits are significant.</b> (42.3 has 3.) Why? Every non-zero digit reports a measured magnitude.',
          '<b>Zeros between non-zero digits ("sandwiched zeros") are significant.</b> (5.004 has 4.) Why? They sit inside the measured span, so they carry genuine information.',
          '<b>Leading zeros (left of the first non-zero digit) are never significant.</b> (0.0067 has 2.) Why? They are pure scaffolding — they only locate the decimal point.',
          '<b>Trailing zeros after a decimal point are significant.</b> (4.330 has 4; 0.05000 has 4.) Why? You would only write them if you had actually measured that far.',
          '<b>Trailing zeros in a whole number with no decimal point are ambiguous</b> and conventionally not counted. (4500 → treat as 2.) Why? There\'s no way to know if they\'re measured or placeholders — hence use scientific notation.',
          '<b>In scientific notation, only the mantissa counts;</b> the power of ten is never significant.',
          '<b>Significant figures don\'t depend on the system of units.</b> (164 mm = 0.164 m, both 3.)',
        ],
      },
      {
        t: 'p',
        html: 'A quick counting walkthrough. Let\'s apply these to four tricky numbers at once. In 0.003080, the leading 0.00 is scaffolding, while 3, the sandwiched 0, 8, and the trailing 0 are all significant → <b>4</b>. In 5060, the sandwiched 0 is significant but the trailing 0 (no decimal) is ambiguous → conventionally <b>3</b>. In 5060. (note the deliberate decimal point), that trailing zero now is significant → <b>4</b>. And in 7.00 × 10<sup>8</sup>, only the mantissa 7.00 counts → <b>3</b>, regardless of the large power of ten. Notice how a single decimal point or a switch to scientific notation completely changes the count — that is why careful writers reach for scientific notation whenever zeros could be misread.',
      },
      {
        t: 'p',
        html: 'To round a number to the desired number of significant figures, look at the digit immediately to the right of the cut-off:',
      },
      {
        t: 'proc',
        title: 'Procedure 2 — Rounding off',
        steps: [
          'If it is <b>less than 5</b>, drop it and leave the last kept digit unchanged. (6.24 → 6.2.)',
          'If it is <b>greater than 5</b> (or 5 followed by any non-zero digit), increase the last kept digit by 1. (6.27 → 6.3; 14.252 → 14.3.)',
          'If it is <b>exactly 5</b> (or 5 followed only by zeros), use the <b>round-half-to-even</b> rule: leave the last kept digit unchanged if it is even, increase it if it is odd. (6.250 → 6.2, since 2 is even; 6.350 → 6.4, since 3 is odd.)<br>Why this odd-looking rule? Because always rounding 5 up would bias a long column of data slightly upward; rounding to the nearest even digit cancels that bias over many values.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure 3 — Carrying significant figures through a calculation',
        steps: [
          'For <b>×</b> or <b>÷</b>, count significant figures in each input; the answer gets the smallest count.',
          'For <b>+</b> or <b>−</b>, count decimal places in each input; the answer gets the smallest count. Why the difference? Addition is limited by the position of the last trustworthy digit (decimal place), while multiplication is limited by the total relative precision (significant figures).',
          '<b>Round only once, at the very end.</b> Keep one or two extra "guard" digits through intermediate steps; rounding early injects fresh error. Why? Repeated rounding compounds, dragging the final answer away from the truth.',
        ],
      },
      {
        t: 'p',
        html: 'A quick addition illustration. Add 124.5 g + 0.36 g + 7.02 g. The raw sum is 131.88 g. Now look at decimal places, not significant figures: 124.5 has one decimal place, 0.36 has two, 7.02 has two — the fewest is <b>one</b>. So the answer is rounded to one decimal place: 131.9 g. Contrast this with multiplication, where we would have counted significant figures instead. Running the same three numbers through the wrong rule (treating it as significant figures) would give a different, incorrect answer — which is exactly why the two rules must be kept firmly apart.',
      },
      { t: 'fig', id: 'p11-01-fig-1.4' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A rectangular glass sheet has a measured length of 2.165 m and breadth of 1.2 m. Calculate its area, expressed to the correct number of significant figures.',
        steps: [
          'Given: length = 2.165 m (4 significant figures), breadth = 1.2 m (2 significant figures).',
          'Step 1 — Multiply the raw values.<br>Area = 2.165 × 1.2 = 2.598 m<sup>2</sup>.',
          'Step 2 — Apply the multiplication rule. The result can carry only as many significant figures as the least precise factor. Here breadth has just <b>2</b> significant figures.',
          'Step 3 — Round to 2 significant figures. The digit after the cut-off is 9 (> 5), so we round up:<br>Area = 2.6 m<sup>2</sup>.',
        ],
        ans: 'The area is 2.6 m<sup>2</sup>. Even though the multiplication produced four digits, honesty forces us back to two — the breadth measurement was the weak link.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'How many significant figures are there in the measured value 0.002030 kg?',
        steps: [
          '<b>The trap.</b> Students rush and either (a) count the three leading zeros as significant, shouting "6!", or (b) drop the final zero, shouting "3!". Both are wrong.',
          '<b>Fast solution.</b> Scan left to right:<br>• 0.00 → leading zeros, pure scaffolding → <b>not significant.</b><br>• 2 → non-zero → significant.<br>• 0 → sandwiched between 2 and 3 → significant.<br>• 3 → non-zero → significant.<br>• final 0 → trailing zero after a decimal point → significant.',
          'Count the load-bearing digits: 2, 0, 3, 0 → <b>4 significant figures.</b>',
          '<b>Pitfall to remember:</b> Leading zeros never count; trailing zeros after a decimal always count. Rewriting as 2.030 × 10<sup>−3</sup> kg makes the four figures unmistakable.',
        ],
        ans: '4.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A thin cylindrical wire has radius 1.5 mm, length 30.0 cm, and mass 8.0 g. Taking π = 3.14 (exact), find the density of the wire in g cm<sup>−3</sup> to the correct number of significant figures. (This blends the geometry of a cylinder with the significant-figure rules.)',
        steps: [
          'Step 1 — Convert and note significant figures.<br>• radius <i>r</i> = 1.5 mm = 0.15 cm (2 sig figs)<br>• length <i>ℓ</i> = 30.0 cm (3 sig figs)<br>• mass <i>m</i> = 8.0 g (2 sig figs)<br>• π = 3.14 is exact → infinite sig figs, so it never limits the answer.',
          'Step 2 — Compute the volume <i>V</i> = π<i>r</i><sup>2</sup><i>ℓ</i> (keep guard digits):<br><i>V</i> = 3.14 × (0.15)<sup>2</sup> × 30.0 = 3.14 × 0.0225 × 30.0 = 2.1195 cm<sup>3</sup>.',
          'Step 3 — Compute density <i>ρ</i> = <i>m</i>/<i>V</i>:<br><i>ρ</i> = 8.0/2.1195 = 3.774 g cm<sup>−3</sup>.',
          'Step 4 — Round to the least significant figures among the measured inputs. The fewest is <b>2</b> (from <i>r</i> and <i>m</i>):<br><i>ρ</i> = 3.8 g cm<sup>−3</sup>.',
        ],
        ans: 'The density is 3.8 g cm<sup>−3</sup>. The exact π is a free pass — only the measured quantities decide the final precision.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A student records the side of a small metal cube as 2.5 cm. (a) Using the implied-uncertainty convention, find the percentage uncertainty in the side. (b) Hence find the volume and its percentage uncertainty, and state the volume to the correct significant figures. (c) Explain quantitatively how the situation would improve if the side were instead recorded as 2.50 cm.',
        steps: [
          '(a) Implied uncertainty of the side. A value 2.5 cm is uncertain by ±1 in its last digit, i.e. ±0.1 cm:<br>δ(side) = 0.1/2.5 × 100% = 4%.',
          '(b) Volume and its uncertainty. Volume <i>V</i> = <i>a</i><sup>3</sup>, so by the power rule the percentage uncertainty triples:<br>δ<i>V</i> = 3 × δ(side) = 3 × 4% = 12%.',
          'Numerically <i>V</i> = (2.5)<sup>3</sup> = 15.625 cm<sup>3</sup>. Since the side has only <b>2</b> significant figures, we report<br><i>V</i> = 16 cm<sup>3</sup>.',
          'And indeed 12% of 16 is about 2, consistent with <i>V</i> = (16 ± 2) cm<sup>3</sup>.',
          '(c) The effect of an extra significant figure. Writing 2.50 cm implies uncertainty ±0.01 cm:<br>δ(side) = 0.01/2.50 × 100% = 0.4%,<br>δ<i>V</i> = 3 × 0.4% = 1.2%.',
          '<b>Why this is "Advanced":</b> it fuses significant figures with error propagation and reveals the deep meaning of a trailing zero — it is not cosmetic but a tenfold tightening of your claim about reality. That conceptual link is exactly what separates rote rule-counting from real understanding.',
        ],
        ans: 'A single extra significant figure cuts the side\'s percentage uncertainty from 4% to 0.4% — a <b>tenfold</b> improvement — and the volume\'s from 12% to 1.2%.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] State the number of significant figures in each: (a) 0.00708 (b) 5.040 × 10<sup>4</sup> (c) 6500 (d) 100.00.',
            a: '(a) 3 (b) 4 (c) 2 (ambiguous; taken as 2) (d) 5',
          },
          { q: '[NEET] How many significant figures are there in the measured value 2.0040 m?', a: '5' },
          {
            q: '[JEE Main] Evaluate 24.36 + 0.0245 + 105.2 and express the answer to the correct number of significant figures.',
            a: '129.6 (addition rule → least decimal places is 1, from 105.2)',
          },
          {
            q: '[JEE Main] Evaluate 5.42 × 0.6 and express the answer to the correct number of significant figures.',
            a: '3 (multiplication rule → least significant figures is 1, from 0.6)',
          },
          {
            q: '[JEE Advanced] The edge of a cube is measured as 2.5 cm. Find its volume to the correct significant figures and state the implied percentage uncertainty in both the edge and the volume.',
            a: '<i>V</i> ≈ 16 cm<sup>3</sup>; edge ≈ 4%, volume ≈ 12%',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The number of significant figures in 0.0500 is:',
        opts: [
          { label: '1', nudge: '(A) and (B) come from wrongly dropping the trailing zeros, the most common error.' },
          { label: '2', nudge: '(A) and (B) come from wrongly dropping the trailing zeros, the most common error.' },
          { label: '3', nudge: null },
          { label: '4', nudge: '(D) comes from wrongly counting a leading zero.' },
        ],
        correct: 2,
        solution: 'The two leading zeros are scaffolding (not significant); the 5 and the two trailing zeros after the decimal are all significant → 5, 0, 0 = 3. Rewriting as 5.00 × 10<sup>−2</sup> makes the three figures obvious.',
      },
      {
        t: 'mcq',
        q: 'When two measured quantities are multiplied, the number of significant figures in the result equals:',
        opts: [
          { label: 'the largest among the factors', nudge: '(A) over-claims precision the data doesn\'t support.' },
          { label: 'the smallest among the factors', nudge: null },
          { label: 'the sum of the factors\' significant figures', nudge: '(C) is nonsensical — multiplying figures together.' },
          {
            label: 'the smallest number of decimal places among the factors',
            nudge: '(D) is the killer trap: decimal places govern addition, not multiplication. Mixing these two rules is the most-tested mistake in the chapter.',
          },
        ],
        correct: 1,
        solution: 'A product can be no more precise than its least precise factor, so it keeps the fewest significant figures.',
      },
      {
        t: 'mcq',
        q: 'Which of the following measured values has exactly <b>four</b> significant figures?',
        opts: [
          { label: '0.0024', nudge: '(A) has only 2 (leading zeros don\'t count).' },
          {
            label: '2400',
            nudge: '(B) and (D) have ambiguous trailing zeros with no decimal point, conventionally counted as 2 — students who assume "more digits = more significant figures" fall for these.',
          },
          { label: '2.400', nudge: null },
          {
            label: '24000',
            nudge: '(B) and (D) have ambiguous trailing zeros with no decimal point, conventionally counted as 2 — students who assume "more digits = more significant figures" fall for these.',
          },
        ],
        correct: 2,
        solution: 'The 2, 4, and two trailing zeros after the decimal are all significant → 4.',
      },
      {
        t: 'mcq',
        q: 'Rounded to <b>three</b> significant figures using the standard round-half-to-even rule, 4.7350 becomes:',
        opts: [
          { label: '4.73', nudge: '(A) is what you\'d wrongly get by leaving the odd digit unchanged.' },
          { label: '4.74', nudge: null },
          { label: '4.735', nudge: '(C) ignores the instruction to round to three figures.' },
          { label: '4.70', nudge: '(D) drops a significant digit incorrectly.' },
        ],
        correct: 1,
        solution: 'The digit being dropped is exactly 5 (followed only by a zero), so we apply round-half-to-even: the preceding digit is 3, which is <b>odd</b>, so we round it up to 4 → 4.74. This is the exact scenario where round-half-to-even is tested.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Counting leading zeros as significant.</b> Zeros to the left of the first non-zero digit are pure scaffolding. 0.0042 has two significant figures, not four.',
          '<b>Mishandling trailing zeros.</b> After a decimal point they are significant (3.50 has 3); in a bare whole number they are ambiguous (350). Always resolve the ambiguity with scientific notation.',
          '<b>Swapping the two arithmetic rules.</b> Use <b>significant figures</b> for ×/÷ and <b>decimal places</b> for +/−. They are not interchangeable, and exams deliberately bait this confusion.',
          '<b>Rounding too early.</b> Rounding at intermediate steps compounds error. Carry one or two guard digits and round only the final answer — and remember exact numbers (counts, defined constants, π taken as exact) have infinite significant figures and never limit the result. A handy self-check: your reported answer should never look more precise than your least precise measurement allowed.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (accuracy):</b> When a number\'s zeros make you unsure, mentally rewrite it in scientific notation — the mantissa instantly reveals the count, with zero ambiguity. And in any multi-step calculation, do the whole computation first keeping extra digits, decide the governing rule (least sig figs for ×/÷, least decimal places for +/−), and round exactly once at the end. This habit alone prevents the majority of significant-figure mark losses. A final guard: physical constants supplied in a question (like <i>g</i> = 9.8 m s<sup>−2</sup> or π = 3.14) carry their own significant figures, so check whether the question intends them as exact or as measured — when they are the least-precise value in your calculation, they set the precision of your answer.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Significant figures</b> = all reliably known digits + the first uncertain one. They report precision.', note: '' },
          {
            f: 'Counting',
            note: 'non-zero digits ✓; sandwiched zeros ✓; leading zeros ✗; trailing zeros after a decimal ✓; trailing zeros in a bare whole number = ambiguous (use scientific notation); powers of ten ✗.',
          },
          { f: 'Unit-independent', note: '5.6 cm = 0.056 m, both 2 sig figs.' },
          { f: '<b>Exact numbers</b> (counts, defined constants, π) → infinite sig figs; never limit the answer.', note: '' },
          { f: '<b>×, ÷</b> → keep the <b>least number of significant figures</b>.', note: '' },
          { f: '<b>+, −</b> → keep the <b>least number of decimal places</b>.', note: '' },
          { f: 'Rounding', note: '< 5 drop; > 5 round up; exactly 5 → round-half-to-even.' },
          { f: '<b>Round only once, at the end;</b> keep guard digits in between.', note: '' },
          { f: '<b>Implied uncertainty</b> ≈ ±1 in the last digit; one extra sig fig ≈ tenfold tighter precision.', note: '' },
        ],
        aids: [
          '"Leading zeros lead nowhere; trailing decimals tell the truth."',
          '"Times-divide → figures; plus-minus → places."',
          '"When zeros confuse, scientific notation defuses."',
          '"Round half to even keeps the data honest."',
          '"Exact numbers are infinitely precise — they never set the limit."',
        ],
      },
    ],
  },

  // ───────────────────────────── 05 · pp. 44–52 ─────────────────────────────
  {
    n: '05',
    title: 'Measuring Instruments (Vernier Callipers & Screw Gauge)',
    kalam: 'The whole magic rests on one clever idea: least count — the smallest length an instrument can reliably measure.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: '<b>Exam Relevance:</b> A favourite of examiners because it blends a formula, a reading procedure, and a sign convention. JEE Main and JEE Advanced both ask least-count and zero-error questions almost every year, often as "modified instrument" twists. NEET sets a quick least-count or reading question. CBSE Boards include it as a 2–3 mark numerical or in the practical/viva, especially the least-count calculation and zero-error correction.',
      },
      {
        t: 'p',
        html: 'An ordinary plastic ruler can measure to about a millimetre — but what if you need the diameter of a wire thinner than that, or the thickness of a coin to a hundredth of a millimetre? You\'d be stuck squinting between two marks, guessing. The genius of the <b>vernier callipers</b> and the <b>screw gauge</b> is that they let you read beyond the smallest mark on the main scale, turning a guess into a precise number. They are the instruments that take you from "about 2 mm" to "2.34 mm, confidently."<br><br>The whole magic rests on one clever idea: <b>least count</b> — the smallest length an instrument can reliably measure. A plain scale has a least count of 1 mm. A good vernier callipers gets down to 0.1 mm, and a screw gauge to 0.01 mm — ten times finer still. The smaller the least count, the more decimal places you\'re entitled to write, and the more precise your measurement. So this subtopic is really the practical, hands-on face of everything you learned about significant figures and errors: the least count is the uncertainty in a single reading.',
      },
      {
        t: 'p',
        html: 'How does a vernier read between the millimetre marks? Through a beautiful trick of mismatched scales. The sliding <b>vernier scale</b> has divisions that are very slightly smaller than the main scale\'s divisions — for example, 10 vernier divisions span only 9 millimetres. Because of this tiny, deliberate mismatch, exactly one vernier line will line up perfectly with a main-scale line, and which line it is tells you the fractional part. It\'s like two slightly different combs sliding past each other: only one pair of teeth ever aligns at a time, and that alignment pinpoints the gap.<br><br>The <b>screw gauge</b> uses a different trick — the magnifying power of a screw. When you turn a screw by one full rotation, it advances by a fixed small distance called the <b>pitch</b>. By wrapping a finely divided circular scale around that rotation, a movement far too small to see on a straight ruler gets "stretched out" around the circle, where you can read it easily. Turning rotational motion into tiny, readable linear motion is the screw\'s superpower.',
      },
      {
        t: 'p',
        html: '<b>Think about it this way...</b> imagine trying to measure a tiny gap with your fingers — impossible directly. But if you had a ramp so gentle that walking a long way along it raised you only a centimetre, you could measure that centimetre by measuring your long walk instead. The screw\'s threads are exactly that gentle ramp: they convert a hard-to-see linear distance into an easy-to-read rotation. The vernier and the screw gauge are both "precision amplifiers" — they take a measurement too fine for the eye and blow it up into something the eye can read.<br><br>This also explains which instrument a good experimenter reaches for. You don\'t always want the finest tool — you want the one matched to the job. To measure the length of a table you\'d use a metre scale; the vernier\'s extra precision would be wasted effort. To measure the internal diameter of a pipe or the length of a small cylinder, the vernier earns its keep. And for something genuinely tiny — the diameter of a wire, the thickness of a glass slide — only the screw gauge will do. There is a quiet trade-off here: finer instruments measure smaller ranges. A metre scale spans a metre but resolves a millimetre; a screw gauge resolves a hundredth of a millimetre but typically spans only a couple of centimetres. Choosing the right instrument is itself part of good measurement.',
      },
      {
        t: 'p',
        html: '<b>Limiting Conditions & Assumptions.</b><br>• The least count sets the <b>best-case</b> precision; the actual uncertainty can be worse if the instrument has a <b>zero error</b> (a built-in offset when the jaws are closed) that you forget to correct.<br>• A single reading carries an uncertainty equal to the least count (or, by some conventions, half of it) — these instruments do not magically remove all error.<br>• The vernier formula assumes the vernier divisions are uniformly slightly smaller than the main-scale divisions; a damaged or worn scale breaks this.<br>• <b>Backlash error</b> (play in the screw threads when you reverse direction) and over-tightening can spoil a screw-gauge reading, which is why a ratchet is used to apply consistent, gentle pressure.',
      },
      {
        t: 'p',
        html: 'A useful link back to error analysis: a <b>zero error is a textbook systematic error</b> — it has a fixed size and sign and shifts every reading the same way, so no amount of averaging will remove it. The only cure is to measure it (close the jaws and read the offset) and correct for it, exactly as we said systematic errors must be handled. By contrast, the irreducible least-count uncertainty behaves like the random/limiting error in a single reading. So these instruments are where the abstract ideas of the previous subtopic — systematic vs random error, precision vs accuracy — become something you can physically see and fix with your own hands.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'def',
        term: 'Least count (LC)',
        html: 'the smallest length an instrument can measure — equivalently, the uncertainty in one reading.',
      },
      {
        t: 'formula',
        kicker: 'Vernier callipers',
        main: 'LC = 1 MSD − 1 VSD<br>If <i>n</i> vernier divisions coincide with (<i>n</i> − 1) main scale divisions, this simplifies to the working formula:<br>LC = (Value of 1 main scale division)/(Number of vernier scale divisions (<i>n</i>))',
        legend: ['MSD = main scale division', 'VSD = vernier scale division'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reading of a vernier',
        main: 'Reading = MSR + (coinciding vernier division × LC) − zero error',
        legend: ['MSR = the main scale reading just before the vernier zero'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Screw gauge (micrometer)',
        main: 'Pitch = (distance moved on linear scale)/(number of complete rotations)<br>LC = Pitch/(Number of divisions on the circular scale)',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Reading of a screw gauge',
        main: 'Reading = MSR + (coinciding circular division × LC) − zero error',
        legend: [],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Zero error and correction',
        main: 'Corrected reading = Observed reading − zero error',
        legend: [],
        note: null,
      },
      {
        t: 'def',
        term: 'Positive zero error',
        html: 'when the jaws are closed, the moving zero lies ahead of the main zero, giving an excess reading. The zero error is <b>positive</b>, so we <b>subtract</b> it.',
      },
      {
        t: 'def',
        term: 'Negative zero error',
        html: 'the moving zero lies behind the main zero. The zero error is <b>negative</b>; subtracting a negative value means we effectively <b>add</b> its magnitude.',
      },
      { t: 'p', html: 'All of these are length quantities, with dimensional formula [L] and SI unit metre.' },

      { t: 'part', title: 'Key procedures and logical framework' },
      {
        t: 'p',
        html: 'There is no grand derivation here, but the least-count formula can be reasoned out, and the reading procedures must be airtight.',
      },
      {
        t: 'p',
        html: '<b>Reasoning out the vernier least count.</b> Suppose <i>n</i> vernier divisions exactly span (<i>n</i> − 1) main scale divisions. Then:<br><i>n</i> (VSD) = (<i>n</i> − 1) (MSD) ⇒ 1 VSD = ((<i>n</i> − 1)/<i>n</i>) MSD.<br>The least count is the gap between one main division and one vernier division:<br>LC = 1 MSD − 1 VSD = MSD (1 − (<i>n</i> − 1)/<i>n</i>) = MSD/<i>n</i>.<br><br>Why this is the smallest measurable length: the vernier zero advances by exactly this gap before the next vernier line takes its turn to coincide — so this gap is the finest distinction the instrument can register. This is why more vernier divisions (<i>n</i> larger) means a finer instrument.',
      },
      {
        t: 'proc',
        title: 'Procedure A — Reading a vernier callipers',
        steps: [
          'Note the <b>main scale reading (MSR)</b> — the last main-scale mark just before the vernier zero.',
          'Find which <b>vernier division coincides</b> exactly with any main-scale line; call it the vernier scale reading (VSR).',
          'Compute: Reading = MSR + (VSR × LC).',
          '<b>Apply zero-error correction:</b> subtract the zero error (with its sign).',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Reading a screw gauge',
        steps: [
          'Determine the <b>pitch</b> = (linear distance moved) ÷ (number of full rotations). Don\'t assume it\'s 1 mm — always check.',
          'Compute LC = pitch ÷ (circular scale divisions).',
          'Note the <b>MSR</b> on the linear scale, and the <b>circular division</b> in line with the reference line.',
          'Compute: Reading = MSR + (circular division × LC), then <b>correct for zero error.</b>',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — Handling zero error (the part students fail)',
        steps: [
          'Close the jaws fully (no object). If the moving zero does not line up with the main zero, there is a zero error.',
          'If the moving zero sits past the main zero (excess), the error is <b>positive</b> → corrected reading = observed − (positive value).',
          'If the moving zero sits short of the main zero, the error is <b>negative</b> → corrected reading = observed − (negative value) = observed + magnitude.',
          'Why subtract in both cases? Because "corrected = observed − zero error" is one universal rule; the sign of the zero error automatically does the right thing. Memorise the formula, not two separate cases.',
        ],
      },
      {
        t: 'p',
        html: '<b>A quick end-to-end illustration.</b> Suppose a vernier callipers has 1 MSD = 1 mm and 10 vernier divisions over 9 mm, so LC = 0.1 mm = 0.01 cm. When the jaws are closed, the 2<sup>nd</sup> vernier line coincides with a main mark past the zero, giving a positive zero error of 2 × 0.01 = 0.02 cm. Now an object is measured: main scale reads 4.5 cm and the 8<sup>th</sup> vernier division coincides. The observed reading is 4.5 + (8 × 0.01) = 4.58 cm. Applying the correction, the true length is 4.58 − 0.02 = 4.56 cm. Every measurement you ever take with these instruments follows this same three-beat rhythm: <b>find the LC, take the reading, correct the zero.</b>',
      },
      { t: 'fig', id: 'p11-01-fig-1.5' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'A vernier callipers has a main scale graduated in millimetres (1 MSD = 1 mm), and 10 vernier divisions coincide with 9 main scale divisions. While measuring a rod, the main scale reads 1.2 cm and the 6<sup>th</sup> vernier division coincides with a main scale mark. There is no zero error. Find the length of the rod.',
        steps: [
          'Step 1 — Least count. With <i>n</i> = 10 vernier divisions and 1 MSD = 1 mm:<br>LC = 1 MSD/<i>n</i> = 1 mm/10 = 0.1 mm = 0.01 cm.',
          'Step 2 — Apply the reading formula.<br>Length = MSR + (VSR × LC) = 1.2 cm + (6 × 0.01 cm) = 1.2 + 0.06 = 1.26 cm.',
        ],
        ans: 'The length of the rod is 1.26 cm. Note how the vernier added a confident second decimal place that the main scale alone could never provide.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A screw gauge shows a reading of +0.05 mm when its jaws are completely closed. While measuring a wire, the instrument reads 2.34 mm. What is the correct diameter of the wire?',
        steps: [
          '<b>The trap.</b> Seeing the wire reads 2.34 mm, the hasty student either reports it as is, or — worse — adds the zero error to get 2.39 mm. Both are wrong. A <b>positive</b> zero error means the instrument reads too high, so it must be <b>subtracted</b>.',
          '<b>Fast solution.</b><br>Corrected = Observed − zero error = 2.34 − (+0.05) = 2.29 mm.',
          '<b>Pitfall to remember:</b> Positive zero error → subtract. The single safe rule is <b>corrected = observed − zero error</b>, letting the sign handle the rest. Adding when you should subtract is the most common instrument mistake in NEET.',
        ],
        ans: '2.29 mm.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. While measuring the diameter of a wire, the main scale reads 2 mm and the 45<sup>th</sup> circular division coincides with the reference line. The instrument has a <b>negative zero error</b> of 5 circular divisions. Find (a) the corrected diameter, and (b) the maximum percentage error in the cross-sectional area of the wire, taking the least count as the uncertainty. (This blends instrument reading, zero-error correction, and error propagation through area.)',
        steps: [
          'Step 1 — Least count.<br>LC = pitch/(circular divisions) = 1 mm/100 = 0.01 mm.',
          'Step 2 — Observed reading.<br>Observed = MSR + (45 × LC) = 2 + (45 × 0.01) = 2.45 mm.',
          'Step 3 — Zero error. A negative zero error of 5 divisions means<br>zero error = −5 × 0.01 = −0.05 mm.',
          'Corrected diameter:<br><i>d</i> = Observed − zero error = 2.45 − (−0.05) = 2.50 mm.',
          'Step 4 — Percentage error in area. The cross-sectional area is <i>A</i> = π<i>d</i><sup>2</sup>/4, so <i>A</i> ∝ <i>d</i><sup>2</sup>. By the power rule:<br>Δ<i>A</i>/<i>A</i> = 2 Δ<i>d</i>/<i>d</i> = 2 × 0.01/2.50 = 2 × 0.004 = 0.008 = 0.8%.',
        ],
        ans: '(a) the corrected diameter is 2.50 mm; (b) the maximum percentage error in the area is 0.8%. Watch how the negative zero error increased the reading, and how the diameter\'s error doubles on its way into the area.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'A precision lab has two instruments. In a <b>vernier callipers</b>, 1 cm on the main scale is divided into 20 equal parts, and 25 vernier divisions coincide with 24 main scale divisions. In a <b>screw gauge</b>, the linear (main) scale is graduated in millimetres, one complete rotation of the circular scale advances the spindle by 3 main-scale divisions, and the circular scale has 200 divisions. (a) Find the least count of the vernier. (b) Find the least count of the screw gauge. (c) State which instrument is more precise.',
        steps: [
          '(a) Vernier least count. First, the value of one main scale division:<br>1 MSD = 1 cm/20 = 0.05 cm = 0.5 mm.',
          'With 25 VSD = 24 MSD, we have <i>n</i> = 25, so<br>LC<sub>vernier</sub> = 1 MSD/<i>n</i> = 0.5 mm/25 = 0.02 mm.',
          '(b) Screw gauge least count. The linear scale is in millimetres, so 1 main-scale division = 1 mm, and one rotation advances 3 such divisions:<br>pitch = 3 × 1 mm = 3 mm.<br>LC<sub>screw gauge</sub> = pitch/200 = 3 mm/200 = 0.015 mm.',
          '(c) Comparison. The smaller the least count, the finer the instrument:<br>0.015 mm (screw gauge) < 0.02 mm (vernier).',
          '<b>Why this is "Advanced":</b> every number is non-standard — you cannot assume a 1 mm main division, a 1 mm pitch, or the usual 10 : 9 relationship. You must rebuild each least count from its definition and then compare. Modified-instrument problems like this are exactly how JEE Advanced separates students who memorised a formula from those who understand where it comes from.',
        ],
        ans: 'The <b>screw gauge is more precise</b> (LC = 0.015 mm versus 0.02 mm).',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] A vernier callipers has 1 MSD = 1 mm and 20 vernier divisions coinciding with 19 main scale divisions. Find its least count.',
            a: '0.05 mm',
          },
          { q: '[NEET] A screw gauge has a pitch of 0.5 mm and 100 divisions on the circular scale. Find its least count.', a: '0.005 mm' },
          {
            q: '[JEE Main] A screw gauge (least count 0.01 mm) reads a main scale value of 4 mm with the 32<sup>nd</sup> circular division coinciding. The instrument has a positive zero error of 0.03 mm. Find the corrected diameter.',
            a: '4.29 mm (observed 4.32 mm − zero error 0.03 mm)',
          },
          {
            q: '[JEE Main] A vernier callipers (least count 0.01 cm) reads 3.2 cm on the main scale with the 7<sup>th</sup> vernier division coinciding. It has a negative zero error of 4 divisions. Find the corrected length.',
            a: '3.31 cm (observed 3.27 cm − (−0.04 cm))',
          },
          {
            q: '[JEE Advanced] In a vernier callipers, 50 vernier divisions coincide with 49 main scale divisions, and 1 MSD = 0.5 mm. Find the least count, and how many such least counts make up exactly 1 cm.',
            a: 'LC = 0.01 mm; and 1000 least counts make 1 cm',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The least count of a vernier callipers is given by:',
        opts: [
          {
            label: '1 MSD + 1 VSD',
            nudge: '(A) and (D) have no physical meaning; they come from blindly combining the symbols without understanding the "mismatched scales" idea.',
          },
          { label: '1 MSD − 1 VSD', nudge: null },
          { label: '1 VSD − 1 MSD', nudge: '(C) reverses the subtraction and would give a negative number — impossible for a length.' },
          {
            label: '1 MSD × 1 VSD',
            nudge: '(A) and (D) have no physical meaning; they come from blindly combining the symbols without understanding the "mismatched scales" idea.',
          },
        ],
        correct: 1,
        solution: 'The least count is the small gap by which a vernier division falls short of a main division, i.e. 1 MSD − 1 VSD.',
      },
      {
        t: 'mcq',
        q: 'The least count of a screw gauge equals:',
        opts: [
          { label: 'pitch × number of circular divisions', nudge: '(A) would make the least count larger than the pitch — absurd.' },
          { label: 'pitch ÷ number of circular divisions', nudge: null },
          { label: 'number of circular divisions ÷ pitch', nudge: '(C) inverts the ratio, giving wrong units.' },
          { label: 'pitch + number of circular divisions', nudge: '(D) is dimensionally meaningless.' },
        ],
        correct: 1,
        solution: 'One full rotation (the pitch) is shared out among all the circular divisions, so each division corresponds to pitch ÷ (number of divisions).',
      },
      {
        t: 'mcq',
        q: 'A measuring instrument has a positive zero error. To obtain the correct reading, the zero error should be:',
        opts: [
          { label: 'added to the observed reading', nudge: '(A) doubles the error — the classic sign mistake.' },
          { label: 'subtracted from the observed reading', nudge: null },
          {
            label: 'ignored, as it is constant',
            nudge: '(C) is wrong because a constant offset is precisely a systematic error that must be removed.',
          },
          { label: 'multiplied with the least count', nudge: '(D) confuses the correction with the least-count calculation.' },
        ],
        correct: 1,
        solution: 'A positive zero error means the instrument reads systematically high, so the excess must be subtracted: corrected = observed − zero error.',
      },
      {
        t: 'mcq',
        q: 'Among the following, the instrument capable of the most precise length measurement is the one with the:',
        opts: [
          { label: 'largest least count', nudge: '(A) is exactly backwards.' },
          { label: 'smallest least count', nudge: null },
          { label: 'longest main scale', nudge: '(C) a longer scale measures a bigger range, not more finely.' },
          {
            label: 'most main scale divisions',
            nudge: '(D) the number of main scale divisions doesn\'t set the least count — it\'s the vernier/circular divisions that refine it.',
          },
        ],
        correct: 1,
        solution: 'Precision improves as the least count shrinks, since the least count is the uncertainty in a single reading.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Getting the zero-error sign wrong.</b> Positive zero error → subtract; negative zero error → effectively add its magnitude. Always use the one rule <b>corrected = observed − zero error</b> and let the sign work for you.',
          '<b>Assuming the screw gauge pitch is 1 mm.</b> The pitch must be computed from how far the spindle moves per rotation. In modified problems it is often not 1 mm.',
          '<b>Confusing MSD with VSD.</b> The least count is 1 MSD − 1 VSD (main minus vernier). Swapping them gives a meaningless negative value.',
          '<b>Using the coinciding division number directly.</b> The vernier/circular division that coincides must be multiplied by the least count before adding — it is not a length on its own. For instance, "the 45th division" is not 45 mm; it is 45 × LC, which for a screw gauge of LC = 0.01 mm is only 0.45 mm.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> Compute the least count first, every time — for a vernier, LC = (smallest main division) ÷ (number of vernier divisions); for a screw gauge, find the pitch, then divide by the circular divisions. With the LC in hand, every reading is just MSR + (coinciding division × LC), followed by the universal correction corrected = observed − zero error. Nail this fixed sequence and these questions become near-automatic. One more time-saver for the exam hall: the answer\'s last meaningful decimal place should match the least count — if your "corrected diameter" carries more precision than the LC allows, you\'ve slipped somewhere, so the LC doubles as a built-in sanity check on your final figure.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: '<b>Least count (LC)</b> = smallest measurable length = uncertainty in one reading. Smaller LC ⇒ more precise.', note: '' },
          { f: '<b>Vernier LC</b> = 1 MSD − 1 VSD = (value of 1 main division)/(number of vernier divisions).', note: '' },
          { f: 'Screw gauge', note: 'pitch = (linear distance moved)/(number of rotations); LC = pitch/(circular divisions).' },
          { f: '<b>Reading</b> = MSR + (coinciding division × LC), then correct for zero error.', note: '' },
          {
            f: 'Zero-error rule (universal)',
            note: 'corrected = observed − zero error (sign included). Positive → subtract; negative → add magnitude.',
          },
          { f: 'Typical least counts', note: 'metre scale 1 mm; vernier 0.1 mm; screw gauge 0.01 mm.' },
        ],
        aids: [
          '"Main minus vernier" → LC of callipers.',
          '"Pitch over circle" → LC of screw gauge.',
          '"Corrected = observed minus zero error" → one rule, every sign.',
          '"Smaller least count, sharper the count."',
          '"Zero error is systematic — measure it, then correct it; averaging won\'t help."',
        ],
      },
    ],
  },

  // ───────────────────────────── 06 · pp. 53–60 ─────────────────────────────
  {
    n: '06',
    title: 'Measurement of Length, Mass and Time',
    kalam: 'Every method in this subtopic is a version of that same move: convert the un-measurable into something measurable, then do arithmetic.',
    blocks: [
      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'Exam Relevance: This subtopic is the “indirect measurement” toolkit of the chapter. CBSE Boards favour 1–2 mark questions on the parallax method, angular size, or the size-of-molecule estimate, and love order-of-magnitude reframing questions. JEE Main occasionally sets a parallax/angular-diameter or distance-by-echo numerical, and quietly tests parsec vs light-year. NEET asks the occasional definition or order-of-magnitude question (range of lengths/masses/times). JEE Advanced rarely asks it directly but uses the estimation mindset it builds. The marks here are easy and conceptual — provided you keep parsec, light year and AU straight, and never confuse half-angle parallax with full-baseline parallax.',
      },
      {
        t: 'p',
        html: 'Stretch out a measuring tape and you can read off the length of a room, the height of a friend, the width of a notebook. But now try to measure three things with that same tape: the distance to the Moon, the diameter of an oil molecule, and the distance to a star. The tape is useless for all three — two are absurdly large, one is absurdly small. This is the central problem of this subtopic: <b>direct measurement only works in the narrow “human-sized” band</b>, roughly a millimetre to a few hundred metres. Outside that band, we must be clever and measure things indirectly.<br><br>Here is the first clever trick, and you already use it without knowing. Hold your thumb up at arm’s length and look at it with your left eye only, then your right eye only. Your thumb appears to jump against the far wall. That apparent jump is <b>parallax</b> — the shift in a nearby object’s position when you view it from two different places. The closer the object, the bigger the jump. Turn this around and you have a distance-measuring machine: if you know how far apart your two eyes (or two telescopes) are, and you measure how big the jump is, you can compute the distance. Astronomers measure the distance to the Moon and to nearby stars in exactly this way — the two “eyes” become two observatories on Earth, or the same telescope six months apart at opposite ends of Earth’s orbit.',
      },
      {
        t: 'p',
        html: 'The second trick is <b>timing an echo</b>. Shout into a canyon and the time for the echo to return tells you the canyon wall’s distance, because sound travels at a known speed. Replace sound with a radio pulse (RADAR), or a laser pulse (LIDAR), or underwater sound (SONAR), and the same idea measures the distance to an aircraft, the Moon, or the seabed. The rule is always the same: the pulse goes out and comes back, so the distance is half the round-trip — and forgetting that factor of two is the classic blunder.<br><br>For the impossibly small — the size of a single molecule — we use a third trick: <b>spread it thin and divide</b>. If you take a tiny, known volume of oil and let it spread on water until it is just one molecule thick, then the thickness equals the molecule’s size. And thickness is simply volume divided by area, both of which you can measure. A measurement too small to see directly becomes an easy volume and an easy area.',
      },
      {
        t: 'p',
        html: 'Think about it this way… measuring extreme sizes is like weighing a single grain of rice. You can’t — your kitchen scale won’t budge for one grain. So instead you weigh a thousand grains and divide by a thousand. You never measured one grain directly; you measured something big and easy, then scaled down. Every method in this subtopic is a version of that same move: convert the un-measurable into something measurable, then do arithmetic.<br><br>Mass and time hide the same story. A chemical balance handles grams to kilograms, but the mass of an electron (∼ 10<sup>−30</sup> kg) or of a galaxy (∼ 10<sup>42</sup> kg) needs indirect methods — a <b>mass spectrograph</b> bends charged particles in a magnetic field to weigh atoms, while planetary orbits and gravity “weigh” stars and galaxies. Time stretches from the 10<sup>−24</sup> s life of an unstable particle to the ∼ 10<sup>17</sup> s age of the universe, and the most precise clocks today are <b>atomic clocks</b>, which count the unimaginably steady vibrations of caesium atoms. Stepping back, the quantities of physics span an astonishing range — about 10<sup>41</sup> in length, 10<sup>85</sup> in mass, 10<sup>41</sup> in time — and learning the order of magnitude of things across that range is itself a skill examiners test.',
      },
      {
        t: 'p',
        html: 'Limiting Conditions & Assumptions. A few quiet rules hold this topic together:<br>• The parallax relation <i>D</i> = <i>b</i>/<i>θ</i> requires the parallactic angle <i>θ</i> to be <b>in radians</b> and assumes <i>θ</i> is small (so the arc equals the chord). It works only when the object is far compared to the basis <i>b</i>.<br>• The angular-size relation <i>α</i> = <i>d</i>/<i>D</i> likewise needs <i>α</i> in radians and a small angle, and treats the object’s diameter as an arc of a circle of radius <i>D</i>.<br>• The molecular-size estimate assumes the oil film is <b>exactly one molecule thick</b> (a monolayer) and that molecules pack without gaps — so it gives an estimate of molecular diameter, good to an order of magnitude, not a precise value.<br>• Echo methods assume the pulse speed is constant along the whole path; in air or water this can vary with temperature, introducing error.',
      },

      { t: 'part', title: 'Key formulas and definitions' },
      {
        t: 'formula',
        kicker: 'Parallax method (distance of a far object)',
        main: '<i>θ</i> = <i>b</i>/<i>D</i> ⟹ <i>D</i> = <i>b</i>/<i>θ</i>',
        legend: [
          'Observe the object from two points <i>A</i> and <i>B</i> separated by a basis <i>b</i>.',
          'Let the object subtend the parallactic angle <i>θ</i> (in radians) between the two lines of sight.',
        ],
        note: 'For a planet, <i>b</i> is the distance between two observatories on Earth. For a star, the basis is the diameter of the Earth’s orbit, <i>b</i> = 2 AU.',
      },
      {
        t: 'formula',
        kicker: 'Angular size (actual size of a distant object)',
        main: '<i>α</i> = <i>d</i>/<i>D</i> ⟹ <i>d</i> = <i>αD</i>',
        legend: ['If an object of true diameter <i>d</i> at distance <i>D</i> subtends an angular diameter <i>α</i> (in radians)'],
        note: null,
      },
      {
        t: 'formula',
        kicker: 'Echo / RADAR / SONAR / LIDAR (distance from round-trip time)',
        main: 'A pulse travels to the target and back in total time <i>t</i> at speed <i>v</i>:<br><i>D</i> = <i>vt</i>/2',
        legend: [],
        note: 'Here <i>v</i> = <i>c</i> = 3 × 10<sup>8</sup> m s<sup>−1</sup> for radio/laser pulses, and <i>v</i> ≈ 1500 m s<sup>−1</sup> for sound in water.',
      },
      {
        t: 'formula',
        kicker: 'Size of a molecule (oleic-acid monolayer)',
        main: 'The molecular diameter is the film thickness:<br><i>t</i> = <i>V</i>/<i>A</i>',
        legend: ['A drop of known oleic-acid volume <i>V</i> spreads into a one-molecule-thick film of area <i>A</i>.'],
        note: null,
      },
      {
        t: 'p',
        html: '<b>Standard length units (practical, non-SI but accepted):</b><br>• 1 fermi = 1 fm = 10<sup>−15</sup> m (nuclear sizes)<br>• 1 angstrom = 1 Å = 10<sup>−10</sup> m (atomic sizes)<br>• 1 astronomical unit = 1 AU ≈ 1.496 × 10<sup>11</sup> m (mean Earth–Sun distance)<br>• 1 light year = 1 ly ≈ 9.46 × 10<sup>15</sup> m (distance light travels in one year)<br>• 1 parsec = 1 pc ≈ 3.08 × 10<sup>16</sup> m ≈ 3.26 ly',
      },
      {
        t: 'def',
        term: 'Definition of the parsec',
        html: 'the distance at which 1 AU subtends an angle of 1 arc-second (1″ = 1/3600 degree). Equivalently, a star whose parallax (the angle 1 AU subtends at it) is <i>p</i> arc-seconds lies at a distance <i>D</i> (in parsec) = 1/<i>p</i>.',
      },
      {
        t: 'p',
        html: '<b>Mass units and methods:</b><br>• 1 atomic mass unit = 1 u = 1/12 (mass of a <sup>12</sup>C atom) ≈ 1.66 × 10<sup>−27</sup> kg.<br>• 1 tonne = 10<sup>3</sup> kg; 1 quintal = 10<sup>2</sup> kg.<br>• Ordinary masses: common/beam balance. Atomic/sub-atomic masses: <b>mass spectrograph</b>, where a charged particle of charge <i>q</i> and speed <i>v</i> in a magnetic field <i>B</i> moves on a circle of radius <i>r</i> = <i>mv</i>/(<i>qB</i>), so <i>m</i> = <i>qBr</i>/<i>v</i>. Astronomical masses: from gravitation (a body’s orbit reveals the central mass via Newton’s law of gravitation).<br>• <b>Gravitational mass</b> (measured by the gravitational force a body feels) and <b>inertial mass</b> (measured by <i>F</i> = <i>ma</i>) are found by experiment to be equal — the basis of Einstein’s equivalence principle.',
      },
      {
        t: 'def',
        term: 'Time and atomic clocks',
        html: 'The SI second is defined by 9 192 631 770 oscillations of the radiation from the caesium-133 atom. <b>Atomic (caesium) clocks</b> are accurate to about 1 part in 10<sup>13</sup> — a drift of roughly 1 s in ∼ 10<sup>5</sup> years.',
      },
      {
        t: 'def',
        term: 'Order of magnitude',
        html: 'the power of ten nearest a quantity, found by writing it as <i>m</i> × 10<sup><i>n</i></sup> with 1 ≤ <i>m</i> < 10 and rounding the mantissa (mantissa < √10 ≈ 3.16 rounds down, otherwise up). Approximate ranges worth knowing:',
      },
      {
        t: 'p',
        html: '• <b>Lengths:</b> proton/nucleus ∼ 10<sup>−15</sup> m → atom ∼ 10<sup>−10</sup> m → human ∼ 10<sup>0</sup> m → Earth’s radius ∼ 10<sup>7</sup> m → Earth–Sun ∼ 10<sup>11</sup> m → observable universe ∼ 10<sup>26</sup> m. (Span ∼ 10<sup>41</sup>.)<br>• <b>Masses:</b> electron ∼ 10<sup>−30</sup> kg → proton ∼ 10<sup>−27</sup> kg → human ∼ 10<sup>2</sup> kg → Earth ∼ 10<sup>25</sup> kg → Sun ∼ 10<sup>30</sup> kg → observable universe ∼ 10<sup>55</sup> kg.<br>• <b>Time intervals:</b> light to cross a nucleus ∼ 10<sup>−24</sup> s → period of light wave ∼ 10<sup>−15</sup> s → human heartbeat ∼ 10<sup>0</sup> s → one year ∼ 10<sup>7</sup> s → age of universe ∼ 10<sup>17</sup> s.',
      },

      { t: 'part', title: 'Key procedures and logical framework' },
      { t: 'p', html: 'There is no formal derivation here, but four procedures must be airtight, each backed by a reason.' },
      {
        t: 'proc',
        title: 'Procedure A — Distance by the parallax method',
        steps: [
          'Pick a basis <i>b</i>: two points whose separation you know (two observatories, or the two ends of Earth’s orbit, <i>b</i> = 2 AU, viewed six months apart).',
          'Sight the distant object from both ends and measure the parallactic angle <i>θ</i> between the two lines of sight. Convert <i>θ</i> to radians.',
          'Apply <i>D</i> = <i>b</i>/<i>θ</i>. Why this works: the object, the basis and the lines of sight form a thin isosceles triangle; for a small angle the basis is the arc of a circle of radius <i>D</i>, so arc = radius × angle gives <i>b</i> = <i>Dθ</i>.',
          'Sanity check: a larger parallax means a closer object. If your answer says otherwise, you have inverted the ratio.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure B — Actual size from angular size',
        steps: [
          'Measure the angular diameter <i>α</i> of the object (radians) and know its distance <i>D</i> (often found first by parallax).',
          'Apply <i>d</i> = <i>αD</i>. Why: the diameter <i>d</i> is the arc subtended by angle <i>α</i> at radius <i>D</i>.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure C — Distance by echo (RADAR/SONAR/LIDAR)',
        steps: [
          'Send a pulse; measure the total time <i>t</i> for it to return.',
          'Halve it — the one-way travel time is <i>t</i>/2 — and multiply by the pulse speed: <i>D</i> = <i>vt</i>/2. Why halve? The pulse covers the distance twice. Skipping the ½ doubles your answer; this is the single most common error.',
        ],
      },
      {
        t: 'proc',
        title: 'Procedure D — Size of a molecule (oleic-acid monolayer)',
        steps: [
          'Dilute oleic acid in alcohol to a known, very small concentration (e.g. 1 cm<sup>3</sup> of acid in 20 cm<sup>3</sup> alcohol, then 1 cm<sup>3</sup> of that in 20 cm<sup>3</sup> — giving a concentration 1/20 × 1/20 = 1/400).',
          'Sprinkle lycopodium powder on clean water and place <b>one drop</b> of the solution on it. The alcohol dissolves away and the oleic acid spreads into a thin circular film, its edge marked by the powder.',
          'Measure the film’s area <i>A</i> (from its diameter). Compute the volume of pure oleic acid in the drop: (drop volume) × (concentration).',
          'The film is assumed one molecule thick, so the molecular diameter is <i>t</i> = <i>V</i>/<i>A</i>. Why this is only an estimate: it assumes a perfect, gap-free monolayer — true to about an order of magnitude.',
        ],
      },
      { t: 'fig', id: 'p11-01-fig-1.6' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level',
        q: 'The Moon subtends an angular diameter of about 0.5° at an observer on Earth. Taking the Earth–Moon distance as 3.84 × 10<sup>8</sup> m, estimate the diameter of the Moon.',
        steps: [
          'Step 1 — Convert the angle to radians.<br><i>α</i> = 0.5° = 0.5 × π/180 rad = 8.73 × 10<sup>−3</sup> rad.',
          'Step 2 — Apply the angular-size relation <i>d</i> = <i>αD</i>.<br><i>d</i> = (8.73 × 10<sup>−3</sup>) × (3.84 × 10<sup>8</sup> m) = 3.35 × 10<sup>6</sup> m.',
        ],
        ans: 'The Moon’s diameter is about 3.35 × 10<sup>6</sup> m ≈ 3350 km, close to the accepted value 3475 km. Notice we never went to the Moon — an angle and a distance were enough.',
      },
      {
        t: 'ex',
        tag: 'NEET Speed Trap',
        q: 'A nearby star lies at a distance of 4.0 light years from Earth. Its distance in parsec is closest to: (A) 13.0 pc (B) 1.2 pc (C) 4.0 pc (D) 0.31 pc',
        steps: [
          'The trap. Students who half-remember “1 pc ≈ 3.26 ly” often multiply (4.0 × 3.26 ≈ 13, option A) instead of dividing. A parsec is the bigger unit, so the number of parsecs must be smaller than the number of light years — the same “bigger unit, smaller number” logic from unit conversion.',
          'Fast solution.<br><i>D</i> = (4.0 ly)/(3.26 ly/pc) = 1.2 pc.',
          '<b>Pitfall to remember:</b> 1 parsec ≈ 3.26 light years ≈ 3.08 × 10<sup>16</sup> m — parsec is the largest of the three astronomical length units, then light year, then AU.',
        ],
        ans: '(B) 1.2 pc. Option (A) is the multiply-instead-of-divide trap; (C) wrongly assumes 1 pc = 1 ly; (D) inverts and also mis-scales.',
      },
      {
        t: 'ex',
        tag: 'JEE Main Level',
        q: 'In the oleic-acid experiment, 1 cm<sup>3</sup> of oleic acid is dissolved in alcohol to make 20 cm<sup>3</sup> of solution; then 1 cm<sup>3</sup> of this solution is further diluted to 20 cm<sup>3</sup>. One drop of the final solution (volume 0.05 cm<sup>3</sup>) is placed on water and spreads into a circular film of radius 10 cm. Estimate the diameter of an oleic-acid molecule.',
        steps: [
          'Step 1 — Concentration of oleic acid.<br>conc. = 1/20 × 1/20 = 1/400.',
          'Step 2 — Volume of pure oleic acid in one drop.<br><i>V</i> = (0.05 cm<sup>3</sup>) × 1/400 = 1.25 × 10<sup>−4</sup> cm<sup>3</sup>.',
          'Step 3 — Area of the circular film.<br><i>A</i> = π<i>r</i><sup>2</sup> = 3.14 × (10 cm)<sup>2</sup> = 314 cm<sup>2</sup>.',
          'Step 4 — Thickness = molecular diameter.<br><i>t</i> = <i>V</i>/<i>A</i> = (1.25 × 10<sup>−4</sup> cm<sup>3</sup>)/(314 cm<sup>2</sup>) = 3.98 × 10<sup>−7</sup> cm ≈ 4.0 × 10<sup>−9</sup> m.',
        ],
        ans: 'The molecular diameter is about 4 × 10<sup>−9</sup> m, i.e. a few nanometres — the right order of magnitude for a long-chain organic molecule. The whole estimate rests on the monolayer assumption: one molecule thick means thickness equals molecular size.',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced Level',
        q: 'The parallax of a star, measured using the diameter of the Earth’s orbit (≈ 3.0 × 10<sup>11</sup> m) as the basis, is 4.0 × 10<sup>−6</sup> rad. (a) Find the star’s distance, in metres, light years and parsec. (b) The star’s angular diameter is measured as 4.0 × 10<sup>−8</sup> rad. Find its actual diameter and express it as a multiple of the Sun’s diameter (1.39 × 10<sup>9</sup> m).',
        steps: [
          '(a) Distance by parallax, <i>D</i> = <i>b</i>/<i>θ</i>:<br><i>D</i> = (3.0 × 10<sup>11</sup> m)/(4.0 × 10<sup>−6</sup>) = 7.5 × 10<sup>16</sup> m.',
          'Convert:<br><i>D</i> = (7.5 × 10<sup>16</sup>)/(9.46 × 10<sup>15</sup>) ly ≈ 7.9 ly,<br><i>D</i> = (7.5 × 10<sup>16</sup>)/(3.08 × 10<sup>16</sup>) pc ≈ 2.4 pc.',
          '(b) Actual diameter from angular diameter, <i>d</i> = <i>αD</i>:<br><i>d</i> = (4.0 × 10<sup>−8</sup>) × (7.5 × 10<sup>16</sup> m) = 3.0 × 10<sup>9</sup> m.',
          'As a multiple of the Sun:<br><i>d</i>/<i>d</i><sub>⊙</sub> = (3.0 × 10<sup>9</sup>)/(1.39 × 10<sup>9</sup>) ≈ 2.2.',
          'Why this is “Advanced”: it chains two indirect methods — parallax first gives the distance, and only with that distance in hand does the angular diameter yield a real size — exactly the two-step reasoning real astronomers use, with three unit systems to juggle cleanly.',
        ],
        ans: 'The star is at 7.5 × 10<sup>16</sup> m ≈ 7.9 ly ≈ 2.4 pc, with a diameter about 2.2 times the Sun’s.',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] The Sun’s angular diameter seen from Earth is 1920″ (arc-seconds). Taking the Earth–Sun distance as 1.496 × 10<sup>11</sup> m, estimate the Sun’s diameter. (1″ = 4.85 × 10<sup>−6</sup> rad.)',
            a: '<i>d</i> = <i>αD</i> = (1920 × 4.85 × 10<sup>−6</sup>) × (1.496 × 10<sup>11</sup>) ≈ 1.39 × 10<sup>9</sup> m.',
          },
          {
            q: '[NEET] Arrange in increasing order of length: 1 AU, 1 light year, 1 parsec, 1 angstrom.',
            a: '1 Å < 1 AU < 1 ly < 1 pc (i.e. 10<sup>−10</sup> < 1.5 × 10<sup>11</sup> < 9.46 × 10<sup>15</sup> < 3.08 × 10<sup>16</sup> m).',
          },
          {
            q: '[JEE Main] A RADAR pulse sent towards a planet returns after 7.0 minutes. Taking <i>c</i> = 3.0 × 10<sup>8</sup> m s<sup>−1</sup>, find the distance of the planet from Earth.',
            a: '<i>D</i> = <i>ct</i>/2 = (3.0 × 10<sup>8</sup>) × (420)/2 = 6.3 × 10<sup>10</sup> m.',
          },
          {
            q: '[JEE Main] In a mass spectrograph, a singly-ionised atom (<i>q</i> = 1.6 × 10<sup>−19</sup> C) moving at <i>v</i> = 2.0 × 10<sup>5</sup> m s<sup>−1</sup> describes a circular arc of radius <i>r</i> = 0.10 m in a magnetic field <i>B</i> = 0.50 T. Find the atom’s mass (use <i>m</i> = <i>qBr</i>/<i>v</i>) and express it in atomic mass units.',
            a: '<i>m</i> = <i>qBr</i>/<i>v</i> = (1.6 × 10<sup>−19</sup>)(0.50)(0.10)/(2.0 × 10<sup>5</sup>) = 4.0 × 10<sup>−26</sup> kg ≈ 24 u.',
          },
          {
            q: '[JEE Advanced] A star has a parallax of 0.76″ measured with 1 AU as the basis (the standard stellar parallax). Find its distance in parsec, light years and metres.',
            a: '<i>D</i> = 1/0.76 = 1.32 pc ≈ 4.3 ly ≈ 4.05 × 10<sup>16</sup> m.',
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: 'The parallax method is best suited to measure:',
        opts: [
          {
            label: 'the thickness of a sheet of paper',
            nudge: '(A) and (C) are small-length problems (screw gauge; monolayer method), and (D) is a mass measurement (spectrograph) — none involve a line-of-sight shift.',
          },
          { label: 'the distance of a nearby star', nudge: null },
          {
            label: 'the size of a molecule',
            nudge: '(A) and (C) are small-length problems (screw gauge; monolayer method), and (D) is a mass measurement (spectrograph) — none involve a line-of-sight shift.',
          },
          {
            label: 'the mass of an atom',
            nudge: '(A) and (C) are small-length problems (screw gauge; monolayer method), and (D) is a mass measurement (spectrograph) — none involve a line-of-sight shift.',
          },
        ],
        correct: 1,
        solution: 'Parallax exploits the apparent shift of a relatively nearby object against a far background, ideal for the Moon, planets and nearby stars.',
      },
      {
        t: 'mcq',
        q: 'A radar signal takes 2.6 s to return after reflecting off the Moon. The Earth–Moon distance is closest to:',
        opts: [
          {
            label: '7.8 × 10<sup>8</sup> m',
            nudge: '(A) is the trap — forgetting to halve the round trip, the single most common echo-method error.',
          },
          { label: '3.9 × 10<sup>8</sup> m', nudge: null },
          { label: '1.95 × 10<sup>8</sup> m', nudge: '(C) wrongly divides by an extra factor; (D) is a units slip.' },
          { label: '3.9 × 10<sup>5</sup> m', nudge: '(C) wrongly divides by an extra factor; (D) is a units slip.' },
        ],
        correct: 1,
        solution: '<i>D</i> = <i>ct</i>/2 = (3 × 10<sup>8</sup>)(2.6)/2 = 3.9 × 10<sup>8</sup> m.',
      },
      {
        t: 'mcq',
        q: 'Which of the following correctly orders the units from smallest to largest?',
        opts: [
          { label: 'fermi, angstrom, AU, light year, parsec', nudge: null },
          {
            label: 'angstrom, fermi, AU, parsec, light year',
            nudge: 'The two classic traps are placing the fermi after the angstrom (it is smaller) and swapping light year with parsec (1 pc ≈ 3.26 ly, so parsec is larger).',
          },
          {
            label: 'fermi, angstrom, AU, parsec, light year',
            nudge: 'The two classic traps are placing the fermi after the angstrom (it is smaller) and swapping light year with parsec (1 pc ≈ 3.26 ly, so parsec is larger).',
          },
          {
            label: 'angstrom, fermi, light year, AU, parsec',
            nudge: 'The two classic traps are placing the fermi after the angstrom (it is smaller) and swapping light year with parsec (1 pc ≈ 3.26 ly, so parsec is larger).',
          },
        ],
        correct: 0,
        solution: '10<sup>−15</sup> < 10<sup>−10</sup> < 1.5 × 10<sup>11</sup> < 9.46 × 10<sup>15</sup> < 3.08 × 10<sup>16</sup> m.',
      },
      {
        t: 'mcq',
        q: 'The equality of inertial mass and gravitational mass is the experimental basis of:',
        opts: [
          { label: 'Newton’s first law', nudge: '(A), (B) and (D) are unrelated principles offered as distractors.' },
          { label: 'the principle of homogeneity', nudge: '(A), (B) and (D) are unrelated principles offered as distractors.' },
          { label: 'the equivalence principle', nudge: null },
          { label: 'the conservation of momentum', nudge: '(A), (B) and (D) are unrelated principles offered as distractors.' },
        ],
        correct: 2,
        solution: 'That a body’s resistance to acceleration (<i>F</i> = <i>ma</i>) and its response to gravity are measured to be identical underpins Einstein’s equivalence principle.',
      },

      { t: 'part', title: 'Common student pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          '<b>Forgetting the factor of two in echo methods.</b> The pulse travels to the target and back, so <i>D</i> = <i>vt</i>/2, never <i>vt</i>. Halve the round-trip time first.',
          '<b>Mixing up parsec, light year and AU.</b> From smallest to largest: AU < ly < pc, with 1 pc ≈ 3.26 ly ≈ 3.08 × 10<sup>16</sup> m. Since parsec is the biggest, a distance has the fewest parsecs — divide, don’t multiply, when converting ly to pc.',
          '<b>Using degrees instead of radians.</b> Both <i>D</i> = <i>b</i>/<i>θ</i> and <i>d</i> = <i>αD</i> demand the angle in radians. Convert first: 1° = π/180 rad, 1″ = 4.85 × 10<sup>−6</sup> rad.',
          '<b>Treating the molecular-size estimate as exact.</b> The monolayer method gives only an order-of-magnitude diameter (∼ 10<sup>−9</sup> m); it assumes a perfect one-molecule-thick film. Report it as an estimate, not a precise figure.',
        ],
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (speed + accuracy):</b> For any “indirect length” question, first name the method from the clue word — “subtends an angle” → parallax or angular size (<i>D</i> = <i>b</i>/<i>θ</i>, <i>d</i> = <i>αD</i>); “signal/echo returns in time <i>t</i>” → <i>D</i> = <i>vt</i>/2; “film/drop/monolayer” → <i>t</i> = <i>V</i>/<i>A</i>. Then convert every angle to radians before substituting. One more habit: after any astronomical answer, glance at the order of magnitude against the known ranges (Moon ∼ 10<sup>8</sup> m, nearby star ∼ 10<sup>16</sup> m, molecule ∼ 10<sup>−9</sup> m) — if you are off by powers of ten, you have dropped a factor or mishandled a unit.',
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Parallax', note: '<i>D</i> = <i>b</i>/<i>θ</i> (<i>θ</i> in radians); basis <i>b</i> = 2 AU for stars. Bigger parallax → closer object.' },
          { f: 'Angular size', note: '<i>d</i> = <i>αD</i> (<i>α</i> in radians) — find <i>D</i> first (often by parallax), then the size.' },
          { f: 'Echo / RADAR / SONAR / LIDAR', note: '<i>D</i> = <i>vt</i>/2 — always halve the round-trip.' },
          {
            f: 'Molecule size (oleic-acid monolayer)',
            note: '<i>t</i> = <i>V</i>/<i>A</i>, with <i>V</i> = (drop volume) × (concentration); gives ∼ 10<sup>−9</sup> m.',
          },
          {
            f: 'Astronomical lengths',
            note: '1 AU ≈ 1.496 × 10<sup>11</sup> m; 1 ly ≈ 9.46 × 10<sup>15</sup> m; 1 pc ≈ 3.08 × 10<sup>16</sup> m ≈ 3.26 ly.',
          },
          { f: 'Small lengths', note: '1 Å = 10<sup>−10</sup> m (atoms); 1 fermi = 10<sup>−15</sup> m (nuclei).' },
          {
            f: 'Mass',
            note: '1 u ≈ 1.66 × 10<sup>−27</sup> kg; spectrograph <i>m</i> = <i>qBr</i>/<i>v</i>; inertial mass = gravitational mass (equivalence principle).',
          },
          { f: 'Time', note: 'SI second = 9 192 631 770 caesium oscillations; atomic clocks accurate to ∼ 1 part in 10<sup>13</sup>.' },
          {
            f: 'Ranges (order of magnitude)',
            note: 'length 10<sup>−15</sup> to 10<sup>26</sup> m; mass 10<sup>−30</sup> to 10<sup>55</sup> kg; time 10<sup>−24</sup> to 10<sup>17</sup> s.',
          },
        ],
        aids: [
          '“Two eyes, one distance” → parallax needs a basis <i>b</i> and an angle <i>θ</i>; <i>D</i> = <i>b</i>/<i>θ</i>.',
          '“There and back, so halve the track” → echo distance is <i>vt</i>/2.',
          '“AU, then ly, then pc” → smallest to largest astronomical unit; parsec is biggest, so fewest parsecs.',
          '“One molecule thick” → film thickness is the molecular size, <i>t</i> = <i>V</i>/<i>A</i>.',
          '“Radians always” → convert every angle before using <i>D</i> = <i>b</i>/<i>θ</i> or <i>d</i> = <i>αD</i>.',
        ],
      },
    ],
  },
];
