import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 6, Additional topics A–D, pp. 558–579 of the Class 11 Mathematics Master
 * Reference (October 2026 edition), word for word: the book's "Additional Topics" part,
 * Addenda 07A–07D, lettered A–D (decision 23). Chapter 7 starts on p. 580.
 * The part's p. 558 opening and its table (heading not copied) are A's "Introduction";
 * each addendum's italic "Extends …" line closes or is its Introduction, then its Exam
 * Relevance box, Method, worked examples and Practice (answers set against their
 * questions). The closing "Cheat sheet — further patterns" (pp. 578–579) is D's last part.
 * The part numbers its own figures: "Figure 1" (p. 560) m11-06-A-d1, "Figure 2" (p. 565)
 * m11-06-B-d1, "Figure 3" (p. 570) m11-06-C-d1, "Figure 4" (p. 575) m11-06-D-d1, each at
 * the end of its Method part, where the book prints it. ⁿCᵣ with an italic C; the stacked
 * binomial as <binom>. Every fraction is stacked (<frac>), except inside a raised run;
 * no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const bn = (a: string, b: string) => `<binom><num>${a}</num><den>${b}</den></binom>`;
const D = (s: string) => `<i>D</i><sub>${s}</sub>`;

const n = '<i>n</i>';
const k = '<i>k</i>';
const m = '<i>m</i>';
const N = '<i>N</i>';
const a = '<i>a</i>';
const b = '<i>b</i>';
const t = '<i>t</i>';
const e = '<i>e</i>';
const ai = '<i>a</i><sub><i>i</i></sub>';
const pi = '<i>p</i><sub><i>i</i></sub>';
const dN = '<i>d</i>(<i>N</i>)';
const sN = '<i>σ</i>(<i>N</i>)';
const dM = '<i>d</i>(<i>M</i>)';
const sM = '<i>σ</i>(<i>M</i>)';
const Dnk = D('<i>n</i>−<i>k</i>');
const CEIL = fr(`${n}!`, '<i>p</i>! <i>q</i>! ⋯');
const NPRIME = `${N} = <i>p</i><sub>1</sub><sup><i>a</i>₁</sup><i>p</i><sub>2</sub><sup><i>a</i>₂</sup> ⋯ <i>p</i><sub><i>k</i></sub><sup><i>a</i>ₖ</sup>`;
const SIGMA = `∏ ${fr(`${pi}<sup><i>a</i>ᵢ+1</sup> − 1`, `${pi} − 1`)}`;
const NM = fr(N, m);
const NT = fr(N, t);
const MN = bn(`${m} + ${n}`, m);
const SUM = (lo: string, hi: string) => `∑<sub>${lo}</sub><sup>${hi}</sup>`;
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

export const TOPICS: Topic[] = [
  // ──────────────── Additional topic A · pp. 558–563 ────────────────
  {
    n: 'A',
    title: 'Rank of a word in dictionary order',
    extra: true,
    kalam: 'A dictionary lists every distinct arrangement of the letters in alphabetical order.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: `Topics 01–06 cover the NCERT syllabus and most of the JEE toolkit. This extension adds four high-frequency patterns that exams test directly ${ESTIMATE} and that each deserve a full worked treatment: the <b>rank of a word</b> in dictionary order, <b>lattice paths</b>, the <b>divisor toolkit</b> beyond ${dN} and ${sN}, and <b>partial derangements</b>.`,
      },
      {
        t: 'p',
        html: 'The rank of a word comes first because it is the pattern students most often believe they have mastered after one reading. Topic 05 gives the procedure in a few lines, and its Practice exercises part, question 4, asks for the rank of MATHS, but producing a rank on paper takes practice, and the repeated-letter case that NCERT itself examines (Example 22 on AGAIN, Miscellaneous Exercise Q4 on EXAMINATION) is where marks are lost: the repeat-denominator must be recomputed at every branch.',
      },
      {
        t: 'p',
        html: `Each item is a method statement, three or four laddered worked examples, and practice with answers, lettered A to D after Topic 06. Notation follows Topic 06: ${bn(n, '<i>r</i>')} and <sup><i>n</i></sup><i>C</i><sub><i>r</i></sub> mean the same thing.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Additional topic', 'Topic', 'Read after'],
        rows: [
          ['A', 'Rank of a word in dictionary order, and the inverse (<i>k</i>-th word)', 'Topic 05, 3.4'],
          ['B', 'Lattice-path counting: monotonic grid paths as combinations', 'Topic 02, Key formulas and definitions'],
          ['C', `The divisor toolkit beyond ${dN} and ${sN}`, 'Topic 05, 3.2'],
          ['D', `Partial derangements: exactly ${k} objects in place`, 'Topic 05, 3.5'],
        ],
      },
      {
        t: 'p',
        html: 'Extends Topic 05’s Key procedures and logical framework part, item 3.4, and its Practice exercises part, question 4. Uses the alike-objects formula from Topic 02’s Key formulas and definitions part.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards asks this directly as a 4-mark question, almost always in NCERT’s own two flavours: “if these words are written as in a dictionary, what is the ${k}-th word” and “how many words come before the first word starting with E” ${ESTIMATE}. JEE Main runs one rank question in most sittings ${ESTIMATE}, usually with a repeated letter to punish the student who memorised only the all-distinct recipe. JEE Advanced inverts it, or hides it inside a probability question. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'A dictionary lists every distinct arrangement of the letters in alphabetical order. The rank of a word is its position in that list. You never write the list; you count how many words precede it, then add 1.',
      },
      {
        t: 'p',
        html: `1. <b>Alphabetise the letter pool.</b> Write the letters of the word in sorted order, repeats included. Note the total number of distinct arrangements ${CEIL}: this is the ceiling your answer must respect.<br>2. <b>Scan the target word left to right.</b> At position <i>i</i>, let <i>ℓ</i> be the letter of the target and let <i>R</i> be the multiset of letters not yet placed (which still contains <i>ℓ</i>).<br>3. <b>For each distinct letter <i>c</i> in <i>R</i> with <i>c</i> < <i>ℓ</i>:</b> putting <i>c</i> at position <i>i</i> makes a word that is alphabetically earlier no matter how the tail is filled. The number of such words is the number of arrangements of the letters left after one copy of <i>c</i> has been removed from <i>R</i> (call that multiset <i>R</i><sub><i>c</i></sub>), namely<br>${fr(`(${n} − <i>i</i>)!`, '∏<sub><i>j</i></sub> <i>m</i><sub><i>j</i></sub>!')},<br>where the <i>m</i><sub><i>j</i></sub> are the repeat counts of <i>R</i><sub><i>c</i></sub>, recomputed for this step. Add these up.<br>4. <b>Delete <i>ℓ</i> from the pool</b> and move to position <i>i</i> + 1.<br>5. <b>Rank = (running total) + 1.</b> The +1 is the target word itself.`,
      },
      {
        t: 'p',
        html: `Two features cause most of the errors in this topic, so read them twice.<br>• <b>The denominator is not frozen.</b> Removing a letter can destroy a repeat group. In SAMOSA, after you fix an A at position 1 the remaining pool is {A, M, O, S, S}: only the S’s still repeat, so the count is ${fr('5!', '2!')}, not ${fr('5!', '2! 2!')}. Recompute the denominator at every branch.<br>• <b>Count distinct smaller letters, not smaller letter-slots.</b> If two A’s are still unplaced, “start with A” is one branch, not two. Branching twice double-counts every word in it.`,
      },
      {
        t: 'p',
        html: `<b>Sanity checks.</b> The rank is an integer between 1 and the total arrangement count. The alphabetically first arrangement ranks 1, the last ranks ${CEIL}. If your running total ever reaches that ceiling, you forgot a denominator or branched twice on a repeated letter.`,
      },
      {
        t: 'p',
        html: `<b>The inverse problem (${k}-th word).</b> Walk the same tree, but subtract instead of add. Compute the block size for each first letter in alphabetical order; keep subtracting until ${k} falls inside a block; fix that letter and repeat on the tail with the reduced ${k}.`,
      },
      { t: 'fig', id: 'm11-06-A-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'A1: CBSE Board Level',
        q: 'Find the rank of the word <b>DRONA</b> in the dictionary-ordered list of all arrangements of its letters.',
        steps: [
          'The letters D, R, O, N, A are all distinct. Sorted pool: A, D, N, O, R. Total arrangements = 5! = 120, so the answer must lie in [1, 120].',
          '• Position 1, letter D: unplaced pool A, D, N, O, R; distinct smaller letters A; words skipped 1 × 4! = 24.<br>• Position 2, letter R: unplaced pool A, N, O, R; distinct smaller letters A, N, O; words skipped 3 × 3! = 18.<br>• Position 3, letter O: unplaced pool A, N, O; distinct smaller letters A, N; words skipped 2 × 2! = 4.<br>• Position 4, letter N: unplaced pool A, N; distinct smaller letters A; words skipped 1 × 1! = 1.<br>• Position 5, letter A: unplaced pool A; distinct smaller letters none; words skipped 0.',
          'Words preceding DRONA = 24 + 18 + 4 + 1 = 47, so<br>rank(DRONA) = 47 + 1 = 48.',
          'Run the same steps on MATHS (sorted pool A, H, M, S, T) and you get: position 1, letter M, two smaller letters A and H, so 2 × 4! = 48; position 2, letter A, nothing smaller, 0; position 3, letter T, smaller letters H and S, so 2 × 2! = 4; positions 4 and 5 contribute nothing. Rank = 48 + 4 + 1 = 53: the answer to Topic 05’s Practice exercises part, question 4.',
        ],
        ans: 'rank(DRONA) = 47 + 1 = 48.',
      },
      {
        t: 'ex',
        tag: 'A2: JEE Main Level',
        q: 'Find the rank of the word <b>KOLKATA</b>.',
        steps: [
          `The pool is A, A, K, K, L, O, T: seven letters with A twice and K twice. Total arrangements = ${fr('7!', '2! 2!')} = 1260: the same 1260 you computed in Topic 02’s Practice exercises part, question 2. The answer must lie in [1, 1260].`,
          `<b>Position 1, letter K.</b> Pool {A, A, K, K, L, O, T}. The only distinct smaller letter is A. Fixing A leaves {A, K, K, L, O, T}, in which only the K’s repeat:<br>${fr('6!', '2!')} = 360.`,
          `<b>Position 2, letter O.</b> One K is used; pool {A, A, K, L, O, T}. Distinct smaller letters: A, K, L.<br>• Fix A: leaves {A, K, L, O, T}, all distinct, 5! = 120.<br>• Fix K: leaves {A, A, L, O, T}, A twice, ${fr('5!', '2!')} = 60.<br>• Fix L: leaves {A, A, K, O, T}, A twice, ${fr('5!', '2!')} = 60.<br>Subtotal 120 + 60 + 60 = 240. Notice the three branches have different denominators: this is the frozen-denominator warning in action.`,
          `<b>Position 3, letter L.</b> Pool {A, A, K, L, T}. Smaller: A, K.<br>• Fix A: leaves {A, K, L, T}, 4! = 24.<br>• Fix K: leaves {A, A, L, T}, ${fr('4!', '2!')} = 12.<br>Subtotal 36.`,
          '<b>Position 4, letter K.</b> Pool {A, A, K, T}. Smaller: A only. Fix A: leaves {A, K, T}, 3! = 6. Subtotal 6.',
          '<b>Position 5, letter A.</b> Pool {A, A, T}. No smaller letter. Subtotal 0.',
          '<b>Position 6, letter T.</b> Pool {A, T}. Smaller: A. Fix A: leaves {T}, 1! = 1. Subtotal 1.',
          '<b>Position 7, letter A.</b> Nothing left to beat it. Subtotal 0.',
          'The total 643 sits comfortably below the ceiling 1260, as it must.',
        ],
        ans: 'rank(KOLKATA)<br>= (360 + 240 + 36 + 6 + 0 + 1 + 0) + 1<br>= 643 + 1 = 644.',
      },
      {
        t: 'ex',
        tag: 'A3: JEE Main: Speed Trap',
        q: 'Find the rank of the word <b>SAMOSA</b>.',
        steps: [
          '<b>The trap: the undivided-block trap.</b> The student recognises the method from the all-distinct case and applies it verbatim, using plain factorials for the tail counts. At position 1 the letter is S and the distinct smaller letters are A, M, O, so the student writes 3 × 5! = 360, then continues:<br>360 + 0 + 1 ⋅ 3! + 1 ⋅ 2! + 1 ⋅ 1! + 1<br>= 360 + 6 + 2 + 1 + 1 = 370 (wrong).',
          `<b>Why 370 is impossible without computing anything.</b> SAMOSA has 6 letters with A twice and S twice, so there are only ${fr('6!', '2! 2!')} = 180 distinct arrangements. A rank of 370 places the word past the end of a 180-word list. The first branch alone, 360, already doubles the entire dictionary. <b>Check your running total against the ceiling after the very first position</b>: it costs three seconds and kills this error outright.`,
          '<b>Correct solution.</b> Sorted pool: A, A, M, O, S, S. Total = 180.',
          `<b>Position 1, letter S.</b> Pool {A, A, M, O, S, S}. Distinct smaller: A, M, O.<br>• Fix A: leaves {A, M, O, S, S}; the A’s no longer repeat, the S’s do: ${fr('5!', '2!')} = 60.<br>• Fix M: leaves {A, A, O, S, S}: ${fr('5!', '2! 2!')} = 30.<br>• Fix O: leaves {A, A, M, S, S}: ${fr('5!', '2! 2!')} = 30.<br>Subtotal 60 + 30 + 30 = 120. (The A-branch is double the other two, precisely because fixing an A dissolves a repeat group. The wrong solution above treated all three branches as equal.)`,
          '<b>Position 2, letter A.</b> Pool {A, A, M, O, S}. Nothing is smaller than A. Subtotal 0.',
          '<b>Position 3, letter M.</b> Pool {A, M, O, S}, all distinct. Smaller: A. 3! = 6.',
          '<b>Position 4, letter O.</b> Pool {A, O, S}. Smaller: A. 2! = 2.',
          '<b>Position 5, letter S.</b> Pool {A, S}. Smaller: A. 1! = 1.',
          '<b>Position 6, letter A.</b> Subtotal 0.',
          '<b>The second, quieter trap.</b> Stopping at 129 and calling it the rank. The count of words before SAMOSA is 129; SAMOSA is the 130th. Write “+1” on the page as soon as you start the table, before you have anything to add it to.',
        ],
        ans: 'rank(SAMOSA)<br>= (120 + 0 + 6 + 2 + 1 + 0) + 1<br>= 129 + 1 = 130.',
      },
      {
        t: 'ex',
        tag: 'A4: JEE Advanced Level',
        q: '(a) If all distinct arrangements of the letters of <b>EXAMINATION</b> are listed as in a dictionary, how many words appear before the first word beginning with E?<br>(b) If all distinct arrangements of the letters of <b>AGAIN</b> are listed as in a dictionary, what is the 50th word?',
        steps: [
          `<b>Solution (a).</b> EXAMINATION has 11 letters: A twice, I twice, N twice, and E, M, O, T, X once each. The sorted pool is A, A, E, I, I, M, N, N, O, T, X, and the full dictionary has<br>${fr('11!', '2! 2! 2!')} = ${fr('39,916,800', '8')}<br>= 4,989,600 words.`,
          `A word precedes every E-word exactly when its first letter is alphabetically before E. The only such letter in the pool is A. So we need the number of arrangements beginning with A. Fix one A; the remaining pool is {A, E, I, I, M, N, N, O, T, X}, ten letters with I twice and N twice (the A’s no longer repeat):<br>${fr('10!', '2! 2!')} = ${fr('3,628,800', '4')} = 907,200.`,
          '<b>907,200 words precede the first E-word.</b> Note that “A twice” appears in the original pool but contributes one branch, not two: this is the second warning from the Method.',
          `<b>Solution (b).</b> AGAIN has 5 letters with A twice; sorted pool A, A, G, I, N; total ${fr('5!', '2!')} = 60 words. Work down the first-letter blocks, subtracting as you go.<br>• First letter A: remaining pool {A, G, I, N}, block size 4! = 24, ranks covered 1–24.<br>• First letter G: remaining pool {A, A, I, N}, block size ${fr('4!', '2!')} = 12, ranks covered 25–36.<br>• First letter I: remaining pool {A, A, G, N}, block size ${fr('4!', '2!')} = 12, ranks covered 37–48.<br>• First letter N: remaining pool {A, A, G, I}, block size ${fr('4!', '2!')} = 12, ranks covered 49–60.`,
          'Rank 50 lies in the N block, and it is the 50 − 48 = 2nd word of that block. Fix N; solve “2nd arrangement of {A, A, G, I}”.<br>• Second letter A: remaining {A, G, I}, block size 3! = 6, covering positions 1–6 of the N block. Our target, position 2, is inside. Fix A; solve “2nd arrangement of {A, G, I}”.<br>• Third letter A: remaining {G, I}, block size 2! = 2, covering positions 1–2. Our target is inside. Fix A; solve “2nd arrangement of {G, I}”.<br>• The two arrangements of {G, I} in order are GI and IG. The 2nd is IG.',
          'Assembling: N, A, A, I, G. <b>The 50th word is NAAIG</b> (and the 49th is NAAGI).',
          'Both parts are NCERT items (part (a) is Miscellaneous Exercise Q4; part (b) is Example 22, which asks for the 49th word, NAAGI), which is why the technique is a Board liability, not only a JEE one.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] Find the rank of the word DELHI.', a: '5.' },
          { q: '[CBSE] Find the rank of the word BOARD.', a: '38.' },
          {
            q: '[JEE Main] Find the rank of the word INDIA.',
            a: `46 (out of ${fr('5!', '2!')} = 60; the repeated I matters only at position 1, where the A and D branches each leave {I, I, …} and give ${fr('4!', '2!')} = 12 words).`,
          },
          { q: '[JEE Main] Find the rank of the word GANGA.', a: `18 (out of ${fr('5!', '2! 2!')} = 30).` },
          { q: '[JEE Main] Find the rank of the word BHARAT.', a: `147 (out of ${fr('6!', '2!')} = 360; A appears twice).` },
          { q: '[JEE Advanced] Find the rank of the word SURITI.', a: `236 (out of ${fr('6!', '2!')} = 360; I appears twice).` },
          {
            q: '[JEE Advanced] If all arrangements of the letters of EXAMINATION are listed as in a dictionary, how many words precede the first word starting with E?',
            a: '907,200.',
          },
          { q: '[JEE Advanced] If all arrangements of the letters of AGAIN are listed as in a dictionary, find the 50th word.', a: 'NAAIG.' },
        ],
      },
    ],
  },

  // ──────────────── Additional topic B · pp. 564–568 ────────────────
  {
    n: 'B',
    title: 'Lattice-path counting',
    extra: true,
    kalam: 'The whole idea in one line: a path is a word.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 02’s Key formulas and definitions part (alike objects) and Topic 03. Uses Topic 06 for the multi-obstacle case.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards does not name this pattern, but its engine, the alike-objects formula, is squarely on the syllabus, and grid questions appear in sample papers as applications. JEE Main asks it as a one-step ${MN} recall, usually dressed as city streets or a chessboard ${ESTIMATE}. JEE Advanced is where it earns its place: paths forced through a checkpoint, paths banned from a point, two walkers meeting, and the Vandermonde identity that falls out of the meeting count. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: 'Put a rectangular street grid on axes with the start at the origin. A walker may take only <b>unit steps right (R) and unit steps up (U)</b>: no backtracking, no diagonals. Such a path is called monotonic.',
      },
      {
        t: 'p',
        html: `<b>The whole idea in one line: a path is a word.</b> To get from (0, 0) to (${m}, ${n}) you must take exactly ${m} R-steps and exactly ${n} U-steps, in some order, and the order is the path. So counting paths is counting arrangements of the letter-string RR⋯R (${m}) UU⋯U (${n}), which is Topic 02’s alike-objects count:`,
      },
      {
        t: 'formula',
        kicker: 'A path is a word',
        main: `#paths = ${fr(`(${m} + ${n})!`, `${m}! ${n}!`)}<br>= ${MN} = ${bn(`${m} + ${n}`, n)}.`,
        legend: [`${m} = the number of R-steps (unit steps right)`, `${n} = the number of U-steps (unit steps up)`],
        note: null,
      },
      { t: 'p', html: 'Every grid question is then one of four moves.' },
      {
        t: 'table',
        title: null,
        head: ['Requirement', 'Count'],
        rows: [
          [`Free path (0, 0) → (${m}, ${n})`, MN],
          [`Must pass through <i>P</i>(${a}, ${b})`, `${bn(`${a} + ${b}`, a)} × ${bn(`(${m} − ${a}) + (${n} − ${b})`, `${m} − ${a}`)}`],
          [`Must avoid <i>P</i>(${a}, ${b})`, `${MN} − [through <i>P</i>]`],
          ['Must avoid several points', 'inclusion–exclusion (Topic 06) on “passes through <i>P</i><sub><i>i</i></sub>”'],
        ],
      },
      {
        t: 'p',
        html: 'The checkpoint rule is the Multiplication Principle: the trip splits into an independent first leg and second leg, because arriving at <i>P</i> erases all memory of how you got there.',
      },
      {
        t: 'p',
        html: `<b>Sanity checks.</b> ${MN} is symmetric in ${m} and ${n}, as it must be: reflecting the grid in the line <i>y</i> = <i>x</i> is a bijection between the paths to (${m}, ${n}) and the paths to (${n}, ${m}). A checkpoint count is never larger than the free count. A path through <i>P</i>(${a}, ${b}) exists only if 0 ≤ ${a} ≤ ${m} and 0 ≤ ${b} ≤ ${n}; a “checkpoint” outside the rectangle contributes zero, not an error.`,
      },
      {
        t: 'p',
        html: `<b>Where this breaks down.</b> The formula counts monotonic paths only. Allow a diagonal step, or allow the walker to move left or down, and the path is no longer a rearrangement of a fixed letter-string, so no single binomial coefficient describes it. Similarly, a constraint that depends on the whole history (for example “the path must never rise above the line <i>y</i> = <i>x</i>”) is not a plain combination; that count, on an ${n} × ${n} grid (paths from (0, 0) to (${n}, ${n})), is the Catalan number ${fr('1', `${n} + 1`)}${bn(`2${n}`, n)} (for ${n} = 1, 2, 3, 4, 5: 1, 2, 5, 14, 42), which is beyond this syllabus but worth recognising so you do not waste minutes forcing a binomial onto it.`,
      },
      { t: 'fig', id: 'm11-06-B-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'B1: CBSE Board Level',
        q: 'A town is laid out as a grid. A courier starts at corner <i>A</i> and must reach corner <i>B</i>, which is 4 blocks east and 3 blocks north of <i>A</i>. He never rides west or south. In how many different routes can he make the trip?',
        steps: [
          `Every route consists of exactly 4 east steps and 3 north steps, taken in some order. The route is the order. So we are arranging the string EEEENNN, four alike of one kind and three alike of another:<br>${fr('7!', '4! 3!')} = ${bn('7', '4')} = 35.`,
          `There are <b>35 routes</b>. (Check the symmetry: ${bn('7', '4')} = ${bn('7', '3')} = 35, which is the same problem with east and north swapped, as it should be.)`,
        ],
        ans: `${fr('7!', '4! 3!')} = ${bn('7', '4')} = 35.`,
      },
      {
        t: 'ex',
        tag: 'B2: JEE Main Level',
        q: 'Find the number of monotonic paths from (0, 0) to (5, 5) that pass through the point (2, 3).',
        steps: [
          `Split the journey at the checkpoint and multiply the legs.<br>• Leg 1, (0, 0) → (2, 3): two R-steps and three U-steps, so ${bn('5', '2')} = 10 paths.<br>• Leg 2, (2, 3) → (5, 5): the displacement is (3, 2), so three R-steps and two U-steps, giving ${bn('5', '3')} = 10 paths.`,
          'Every leg-1 path can be followed by every leg-2 path, so by the Multiplication Principle<br>10 × 10 = 100 paths.',
          `For scale, the free count is ${bn('10', '5')} = 252, so the checkpoint filters out rather more than half the routes, and 100 being less than 252 is your sanity check.`,
        ],
        ans: '10 × 10 = 100 paths.',
      },
      {
        t: 'ex',
        tag: 'B3: JEE Main: Speed Trap',
        q: 'Find the number of monotonic paths from (0, 0) to (4, 4) that do <b>not</b> pass through the point (2, 2).',
        steps: [
          `<b>The trap: the additive-legs trap.</b> The student correctly writes “answer = total − through”, then computes “through (2, 2)” by <b>adding</b> the two legs instead of multiplying them:<br>${bn('8', '4')} − [${bn('4', '2')} + ${bn('4', '2')}]<br>= 70 − (6 + 6) = 58 (wrong).`,
          'A close cousin subtracts a single path (“there is one bad point, so remove one route”), giving 70 − 1 = 69.',
          '<b>Why the legs multiply.</b> Reaching (2, 2) in one of 6 ways and then continuing in one of 6 ways is a two-stage AND, and Topic 01 settled that AND multiplies. Adding would answer the question “how many paths use leg 1 <b>or</b> leg 2”, which is not a question anybody asked, and it is not even well posed since every path has both legs.',
          `<b>Correct solution.</b><br>• All paths (0, 0) → (4, 4): four R’s and four U’s, ${bn('8', '4')} = 70.<br>• Paths through (2, 2): ${bn('4', '2')} × ${bn('4', '2')} = 6 × 6 = 36.<br>• Paths avoiding (2, 2): 70 − 36 = <b>34</b>.`,
          '<b>How to spot it in three seconds.</b> After computing a “through a checkpoint” figure, ask whether it should be roughly the product or the sum of the legs. Here 36 out of 70: just over half the paths pass through the exact centre of the square, which is entirely believable. The trap’s 12 out of 70 would mean the centre point is nearly deserted, which for a 4 × 4 grid it plainly is not.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'B4: JEE Advanced Level',
        q: 'Two insects sit at opposite corners of an ordinary chessboard, on the lattice of lines: the first at (0, 0), the second at (8, 8). They start together and crawl at the same constant speed along the grid lines. The first insect moves only right or up; the second moves only left or down. Find the total number of ways in which the two insects can meet at a point.',
        steps: [
          `<b>Step 1: where can they meet?</b> Both crawl at the same speed and start together, so at any instant they have covered equal distances. The total gap is 8 + 8 = 16 units, so if they meet, each has covered exactly 8 units. After 8 unit steps the first insect stands at some (${k}, 8 − ${k}); the second, having taken 8 steps back from (8, 8), stands at some (8 − <i>j</i>, 8 − (8 − <i>j</i>)), that is, also on the anti-diagonal <i>x</i> + <i>y</i> = 8. So the meeting points are exactly the nine lattice points (${k}, 8 − ${k}) for ${k} = 0, 1, … , 8.`,
          `<b>Step 2: count at each meeting point.</b> The first insect reaches (${k}, 8 − ${k}) in ${bn('8', k)} ways. The second insect must travel from (8, 8) to (${k}, 8 − ${k}), a displacement of 8 − ${k} left steps and ${k} down steps, which it can do in ${bn('8', k)} ways as well.`,
          `<b>Step 3: combine.</b> The two journeys are independent, so multiply, then add over the nine disjoint meeting points:<br>${SUM(`${k}=0`, '8')} ${bn('8', k)}${bn('8', k)} = ${SUM(`${k}=0`, '8')} ${bn('8', k)}<sup>2</sup>.`,
          `<b>Step 4: evaluate.</b> Use Topic 03’s symmetry ${bn('8', k)} = ${bn('8', `8 − ${k}`)} to rewrite the sum as ∑<sub>${k}</sub> ${bn('8', k)}${bn('8', `8 − ${k}`)}. That is exactly the count of ways to choose 8 objects from a pile of 8 white and 8 black, split by how many are white, that is, ${bn('16', '8')}. Hence<br>${SUM(`${k}=0`, '8')} ${bn('8', k)}<sup>2</sup> = ${bn('16', '8')} = 12,870.`,
          `<b>Direct arithmetic check.</b> 1 + 64 + 784 + 3136 + 4900<br>+ 3136 + 784 + 64 + 1 = 12,870,<br>using ${bn('8', k)} = 1, 8, 28, 56, 70, 56, 28, 8, 1. Agreed.`,
          `<b>What was really tested.</b> Not the grid formula (that was Step 2) but the recognition in Step 1 that equal speed pins the meeting to one anti-diagonal, and the identity in Step 4 (Vandermonde’s, in the special case ∑ ${bn(n, k)}<sup>2</sup> = ${bn(`2${n}`, n)}) that turns a nine-term sum into a single coefficient.`,
        ],
        ans: `${SUM(`${k}=0`, '8')} ${bn('8', k)}<sup>2</sup> = ${bn('16', '8')} = 12,870.`,
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: '[CBSE] How many monotonic paths run from (0, 0) to (3, 3)?', a: `${bn('6', '3')} = 20.` },
          { q: '[CBSE] A grid is 5 blocks east and 5 blocks north. How many shortest routes cross it?', a: `${bn('10', '5')} = 252.` },
          {
            q: '[JEE Main] How many monotonic paths from (0, 0) to (6, 4) pass through (3, 2)?',
            a: `${bn('5', '3')}${bn('5', '3')} = 10 × 10 = 100.`,
          },
          {
            q: '[JEE Main] How many monotonic paths from (0, 0) to (5, 5) avoid the point (2, 3)?',
            a: `${bn('10', '5')} − ${bn('5', '2')}${bn('5', '3')} = 252 − 100 = 152.`,
          },
          {
            q: '[JEE Advanced] How many monotonic paths from (0, 0) to (9, 9) never pass through (5, 5)?',
            a: `${bn('18', '9')} − ${bn('10', '5')}${bn('8', '4')}<br>= 48,620 − 252 × 70<br>= 48,620 − 17,640 = 30,980.`,
          },
          {
            q: '[JEE Advanced] How many monotonic paths from (0, 0) to (6, 6) avoid <b>both</b> (2, 2) and (4, 4)?',
            a: `924 − 420 − 420 + 216 = 300. (Inclusion–exclusion: total ${bn('12', '6')} = 924; through (2, 2) is ${bn('4', '2')}${bn('8', '4')} = 420; through (4, 4) is ${bn('8', '4')}${bn('4', '2')} = 420; through both is ${bn('4', '2')}${bn('4', '2')}${bn('4', '2')} = 216, added back because paths through both were removed twice.)`,
          },
          {
            q: '[JEE Advanced] Rework the two-insect problem on a 4 × 4 board (insects at (0, 0) and (4, 4)).',
            a: `${SUM(`${k}=0`, '4')} ${bn('4', k)}<sup>2</sup> = ${bn('8', '4')} = 70.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic C · pp. 568–573 ────────────────
  {
    n: 'C',
    title: 'The divisor toolkit beyond d(N) and σ(N)',
    extra: true,
    kalam: 'A count is never a fraction.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 05’s Key formulas and definitions part and its Key procedures and logical framework part, item 3.2, which give only the divisor count and the divisor sum.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `CBSE Boards stops at the divisor count, occasionally the divisor sum ${ESTIMATE}, and Topic 05 already serves that. Everything in this additional topic is JEE territory and it is dense territory: “in how many ways can ${N} be written as a product of two factors”, “as a product of two coprime factors”, “how many divisors of ${N} are even / odd / divisible by 12”, “find the product of all divisors”, and “how many ordered triples satisfy <i>xyz</i> = ${N}” are all standard single-question items in JEE Main ${ESTIMATE}, and JEE Advanced chains two or three of them into one multi-part problem. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Everything below sits on the one idea Topic 05’s Key procedures and logical framework part, item 3.2, already established: if<br>${NPRIME}<br>with distinct primes ${pi}, then a divisor is exactly a choice of exponent <i>e</i><sub><i>i</i></sub> with 0 ≤ <i>e</i><sub><i>i</i></sub> ≤ ${ai}, independently for each prime. Every formula here is that choice with one extra condition bolted on.`,
      },
      {
        t: 'p',
        html: `Write ${dN} = ∏(${ai} + 1) for the divisor count and ${sN} = ${SIGMA} for the divisor sum, both from Topic 05.`,
      },
      { t: 'p', html: '<b>1. Product of all divisors.</b>' },
      {
        t: 'formula',
        kicker: 'Product of all divisors',
        main: `<i>P</i>(${N}) = ${N}<sup><i>d</i>(<i>N</i>)/2</sup>.`,
        legend: [`<i>P</i>(${N}) = the product of all divisors of ${N}`, `${dN} = the number of divisors of ${N}`, `${N} = the number whose divisors are counted`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why:</b> pair each divisor ${t} with its partner ${NT}; each pair multiplies to ${N}, and there are ${fr(dN, '2')} pairs. If ${N} is a perfect square the middle divisor √${N} pairs with itself, and the formula still holds because ${N}<sup>1/2</sup> = √${N} is exactly what that lone divisor contributes. Leave the answer as a power; never evaluate it.`,
      },
      {
        t: 'p',
        html: `<b>2. ${N} as a product of two factors.</b> Ordered pairs (${a}, ${b}) with <i>ab</i> = ${N} number ${dN}, one for each choice of ${a}. Unordered pairs {${a}, ${b}} are what exams ask for:`,
      },
      {
        t: 'formula',
        kicker: `${N} as a product of two factors`,
        main: `#{${a}, ${b}} = ${fr(dN, '2')}, ${N} not a perfect square,<br>#{${a}, ${b}} = ${fr(`${dN} + 1`, '2')}, ${N} a perfect square.`,
        legend: [`#{${a}, ${b}} = the number of unordered factor pairs of ${N}`, `${dN} = the number of divisors of ${N}`, `${N} = the number whose divisors are counted`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why:</b> the pairing ${t} ↔ ${NT} is a bijection with no fixed point unless ${t} = √${N}. A perfect square has exactly one such self-paired divisor, so ${dN} is odd and one pair is a singleton. ${N} <b>is a perfect square precisely when every</b> ${ai} <b>is even, equivalently when</b> ${dN} <b>is odd</b>: that is your test, and it is faster than taking a square root.`,
      },
      {
        t: 'p',
        html: `<b>3. ${N} as a product of two coprime factors.</b> Let ${k} be the number of <b>distinct</b> primes in ${N}. Then`,
      },
      {
        t: 'formula',
        kicker: `${N} as a product of two coprime factors`,
        main: `#ordered coprime pairs = 2<sup><i>k</i></sup>,<br>#unordered coprime pairs = 2<sup><i>k</i>−1</sup> (${N} > 1).`,
        legend: [`${k} = the number of distinct primes in ${N}`, `${N} = the number whose divisors are counted`],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why:</b> if gcd(${a}, ${b}) = 1 and <i>ab</i> = ${N}, then for each prime the whole block ${pi}<sup><i>a</i>ᵢ</sup> must go entirely to ${a} or entirely to ${b}: splitting it would leave ${pi} in both. That is ${k} independent two-way choices, and unordered halves it (for ${N} > 1, where ${a} = ${b} is impossible; ${N} = 1 has the single pair {1, 1}). Notice the exponents play no part whatsoever; only the number of distinct primes matters.`,
      },
      {
        t: 'p',
        html: `<b>4. Divisors satisfying a divisibility condition.</b> For ${m} ∣ ${N}, the divisors of ${N} that are multiples of ${m} are exactly ${m} × (divisors of ${NM}), a bijection. Hence`,
      },
      {
        t: 'formula',
        kicker: 'Divisors satisfying a divisibility condition',
        main: `#{${t} ∣ ${N} ∶ ${m} ∣ ${t}} = <i>d</i>(${NM}),<br>∑<sub><i>t</i>∣<i>N</i>, <i>m</i>∣<i>t</i></sub> ${t} = ${m} ⋅ <i>σ</i>(${NM}).`,
        legend: [
          `${m} = a divisor of ${N}`,
          `${t} = a divisor of ${N} that is a multiple of ${m}`,
          '<i>d</i>, <i>σ</i> = the divisor count and the divisor sum',
          `${N} = the number whose divisors are counted`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `The two most-asked special cases follow immediately. Write ${N} = 2<sup><i>a</i></sup><i>M</i> with <i>M</i> odd:<br>• <b>odd divisors:</b> count ${dM}, sum ${sM} (just delete the prime 2 from the factorisation);<br>• <b>even divisors:</b> count ${dN} − ${dM} = ${a} ⋅ ${dM}, sum ${sN} − ${sM}.`,
      },
      {
        t: 'p',
        html: `<b>5. Ordered triples with <i>xyz</i> = ${N}.</b> Each prime’s exponent ${ai} must be split among the three factors: <i>e</i><sub><i>i</i></sub><sup>(<i>x</i>)</sup> + <i>e</i><sub><i>i</i></sub><sup>(<i>y</i>)</sup> + <i>e</i><sub><i>i</i></sub><sup>(<i>z</i>)</sup> = ${ai} in non-negative integers, which is Topic 04’s stars and bars, ${bn(`${ai} + 2`, '2')} ways. The primes are independent, so`,
      },
      {
        t: 'formula',
        kicker: 'Ordered triples with <i>xyz</i> = <i>N</i>',
        main: `#{(<i>x</i>, <i>y</i>, <i>z</i>) ∈ ℕ<sup>3</sup> ∶ <i>xyz</i> = ${N}}<br>= ∏<sub><i>i</i>=1</sub><sup><i>k</i></sup> ${bn(`${ai} + 2`, '2')}.`,
        legend: [`${ai} = the exponent of the <i>i</i>-th prime in ${N}`, `${k} = the number of distinct primes in ${N}`, `${N} = the number whose divisors are counted`],
        note: null,
      },
      {
        t: 'p',
        html: `For integer solutions with ${N} > 0, the sign pattern must have an even number of negatives: all three positive, or exactly two negative (${bn('3', '2')} = 3 ways). Multiply by 1 + 3 = 4.`,
      },
      {
        t: 'p',
        html: `<b>Sanity checks.</b> Every count here is a positive integer; a fractional answer to item 2 means you missed that ${N} is a perfect square. The coprime-pair count never exceeds the total pair count. The odd-divisor count divides the total divisor count.`,
      },
      { t: 'fig', id: 'm11-06-C-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'C1: CBSE Board / Foundational Level',
        q: `For ${N} = 1200, find (a) the number of divisors, (b) the sum of the divisors, (c) the number and sum of the <b>odd</b> divisors, (d) the number and sum of the <b>even</b> divisors.`,
        steps: [
          'Factorise: 1200 = 2<sup>4</sup> ⋅ 3<sup>1</sup> ⋅ 5<sup>2</sup>.',
          '<b>(a)</b> <i>d</i>(1200) = (4 + 1)(1 + 1)(2 + 1) = 5 × 2 × 3 = <b>30</b>. This is the figure Topic 05’s Practice exercises part, question 2, already asked for.',
          `<b>(b)</b> <i>σ</i>(1200) = ${fr('2<sup>5</sup> − 1', '1')} ⋅ ${fr('3<sup>2</sup> − 1', '2')} ⋅ ${fr('5<sup>3</sup> − 1', '4')}<br>= 31 × 4 × 31 = <b>3844</b>.`,
          '<b>(c)</b> The odd part is <i>M</i> = 3 ⋅ 5<sup>2</sup> = 75. Odd divisors of 1200 are precisely the divisors of 75:<br><i>d</i>(75) = 2 × 3 = <b>6</b>, <i>σ</i>(75) = 4 × 31 = <b>124</b>.',
          '(Listing them as a check: 1, 3, 5, 15, 25, 75; six of them, summing to 124.)',
          '<b>(d)</b> Even divisors are everything else:<br>30 − 6 = <b>24</b> of them, 3844 − 124 = <b>3720</b>.',
          `Cross-check on the count: every even divisor is 2<sup><i>e</i></sup> × (odd divisor) with 1 ≤ ${e} ≤ 4, so there are 4 × 6 = 24 of them. Agreed.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C2: JEE Main Level',
        q: '(a) In how many ways can 7200 be resolved into a product of two factors?<br>(b) In how many ways can 3600 be resolved into a product of two factors?',
        steps: [
          'Run the perfect-square test first in both cases: it decides which formula applies.',
          `<b>(a)</b> 7200 = 2<sup>5</sup> ⋅ 3<sup>2</sup> ⋅ 5<sup>2</sup>, so <i>d</i> = (5 + 1)(2 + 1)(2 + 1) = 6 × 3 × 3 = 54. The exponent of 2 is odd, so 7200 is <b>not</b> a perfect square (equivalently, <i>d</i> = 54 is even). Therefore<br>${fr('54', '2')} = <b>27</b> ways.`,
          `<b>(b)</b> 3600 = 2<sup>4</sup> ⋅ 3<sup>2</sup> ⋅ 5<sup>2</sup>, so <i>d</i> = 5 × 3 × 3 = 45. Every exponent is even, so 3600 <b>is</b> a perfect square (3600 = 60<sup>2</sup>), and correspondingly <i>d</i> came out odd. Therefore<br>${fr('45 + 1', '2')} = <b>23</b> ways.`,
          'The self-paired factorisation in (b) is 60 × 60; the other 22 pairs have two distinct members, and 22 × 2 + 1 = 45 = <i>d</i>, which confirms the bookkeeping.',
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C3: JEE Main: Speed Trap',
        q: 'In how many ways can 36 be expressed as a product of two positive factors? In how many ways as a product of two <b>coprime</b> positive factors?',
        steps: [
          `<b>The trap: the perfect-square parity trap.</b> The student computes 36 = 2<sup>2</sup> ⋅ 3<sup>2</sup>, <i>d</i> = 3 × 3 = 9, then reaches for the memorised “${fr('<i>d</i>', '2')}”:<br>${fr('9', '2')} = 4.5 ⟶ 4 (wrong),<br>rounding down, or occasionally writing 4.5 and moving on. <b>A count is never a fraction.</b> The moment ${dN} comes out odd you are looking at a perfect square, and the odd <i>d</i> is not an accident: it is the signal.`,
          `<b>Correct solution, part 1.</b> <i>d</i>(36) = 9 is odd, so 36 is a perfect square and<br>${fr('<i>d</i> + 1', '2')} = ${fr('10', '2')} = <b>5</b>.`,
          'Listing all five confirms it: 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6. The self-paired 6 × 6 is exactly the pair the naive halving throws away.',
          `<b>Correct solution, part 2.</b> For coprime factors only the number of distinct primes matters. Here ${k} = 2 (namely 2 and 3), so the number of unordered coprime pairs is<br>2<sup><i>k</i>−1</sup> = 2<sup>1</sup> = <b>2</b>.`,
          `Indeed: 1 × 36 and 4 × 9. Check the others (2 × 18 shares 2, 3 × 12 shares 3, 6 × 6 shares both), so exactly two survive, as predicted. Note how the exponents 2 and 2 were irrelevant; had ${N} been 2<sup>50</sup> ⋅ 3<sup>50</sup> the coprime answer would still be 2.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'C4: JEE Advanced Level',
        q: `Let ${N} = 18900. Find<br>(a) the number of divisors of ${N};<br>(b) the number of ways ${N} can be written as a product of two coprime factors;<br>(c) the number of divisors of ${N} that are divisible by 15, and their sum;<br>(d) the product of all divisors of ${N}.`,
        steps: [
          'Factorise once and use it four times:<br>18900 = 2<sup>2</sup> ⋅ 3<sup>3</sup> ⋅ 5<sup>2</sup> ⋅ 7.',
          `<b>(a)</b> ${dN} = (2 + 1)(3 + 1)(2 + 1)(1 + 1)<br>= 3 × 4 × 3 × 2 = <b>72</b>.`,
          `<b>(b)</b> The number of distinct primes is ${k} = 4. Unordered coprime pairs:<br>2<sup><i>k</i>−1</sup> = 2<sup>3</sup> = <b>8</b>.`,
          `The eight splits are obtained by sending each of the blocks 4, 27, 25, 7 to one side or the other and then identifying {${a}, ${b}} with {${b}, ${a}}; for instance {4, 4725}, {27, 700}, {1, 18900}, {100, 189} and four more.`,
          `<b>(c)</b> Since 15 ∣ ${N}, the divisors of ${N} divisible by 15 are exactly 15${t} where ${t} runs over the divisors of<br>${fr(N, '15')} = 1260 = 2<sup>2</sup> ⋅ 3<sup>2</sup> ⋅ 5 ⋅ 7.<br>Hence the count is<br><i>d</i>(1260) = 3 × 3 × 2 × 2 = <b>36</b>,<br>and the sum is<br>15 ⋅ <i>σ</i>(1260)<br>= 15 × (${fr('2<sup>3</sup> − 1', '1')})(${fr('3<sup>3</sup> − 1', '2')})(${fr('5<sup>2</sup> − 1', '4')})(${fr('7<sup>2</sup> − 1', '6')})<br>= 15 × 7 × 13 × 6 × 8<br>= 15 × 4368 = <b>65,520</b>.`,
          `<b>(d)</b> Pairing ${t} with ${NT} gives ${fr(dN, '2')} = 36 pairs, each with product ${N}:<br><i>P</i>(${N}) = ${N}<sup>36</sup> = 18900<sup>36</sup>.`,
          'Leave it in this form. No examiner wants the digits, and no marking scheme rewards them.',
          `<b>Why part (c) is the Advanced-level move.</b> A student who tries to count “divisors with at least one factor 3 and at least one factor 5” by casework on exponents will get there (3 × 3 × 2 × 2, choosing <i>e</i><sub>2</sub> ∈ {0, 1, 2}, <i>e</i><sub>3</sub> ∈ {1, 2, 3}, <i>e</i><sub>5</sub> ∈ {1, 2}, <i>e</i><sub>7</sub> ∈ {0, 1}), but the ${NM} bijection gets there in one line and, crucially, hands you the sum for free, which the casework does not.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          {
            q: '[CBSE] Find the number and the sum of the divisors of 540.',
            a: '540 = 2<sup>2</sup> ⋅ 3<sup>3</sup> ⋅ 5; <i>d</i> = 3 × 4 × 2 = 24, <i>σ</i> = 7 × 40 × 6 = 1680.',
          },
          { q: '[CBSE] How many divisors of 540 are odd, and what do they sum to?', a: 'Odd part 135 = 3<sup>3</sup> ⋅ 5; count 4 × 2 = 8, sum 40 × 6 = 240.' },
          {
            q: '[JEE Main] In how many ways can 2520 be resolved into a product of two factors?',
            a: `2520 = 2<sup>3</sup> ⋅ 3<sup>2</sup> ⋅ 5 ⋅ 7; <i>d</i> = 4 × 3 × 2 × 2 = 48, not a perfect square, so ${fr('48', '2')} = 24.`,
          },
          { q: '[JEE Main] In how many ways can 3600 be resolved into a product of two factors?', a: '23 (perfect square; <i>d</i> = 45).' },
          { q: '[JEE Main] In how many ways can 2520 be written as a product of two coprime factors?', a: `${k} = 4 distinct primes, so 2<sup>4−1</sup> = 8.` },
          {
            q: '[JEE Main] How many divisors of 7200 are divisible by 12?',
            a: `${fr('7200', '12')} = 600 = 2<sup>3</sup> ⋅ 3 ⋅ 5<sup>2</sup>, so <i>d</i>(600) = 4 × 2 × 3 = 24.`,
          },
          { q: '[JEE Advanced] Find the product of all the divisors of 1200.', a: '<i>d</i>(1200) = 30, so the product is 1200<sup>15</sup>.' },
          {
            q: '[JEE Advanced] Find the number of ordered triples (<i>x</i>, <i>y</i>, <i>z</i>) of natural numbers with <i>xyz</i> = 360, and then the number of ordered triples of <b>integers</b> with <i>xyz</i> = 360.',
            a: `360 = 2<sup>3</sup> ⋅ 3<sup>2</sup> ⋅ 5, so ${bn('5', '2')}${bn('4', '2')}${bn('3', '2')} = 10 × 6 × 3 = 180 natural triples; multiplying by the 4 admissible sign patterns gives 180 × 4 = 720 integer triples.`,
          },
        ],
      },
    ],
  },

  // ──────────────── Additional topic D · pp. 573–579 ────────────────
  {
    n: 'D',
    title: 'Partial derangements: exactly k objects in place',
    extra: true,
    kalam: 'Fix k, derange the rest.',
    blocks: [
      { t: 'part', title: 'Introduction' },
      {
        t: 'p',
        html: 'Extends Topic 05’s Key formulas and definitions part and its Key procedures and logical framework part, item 3.5, and the derangement derivation in Topic 06.',
      },

      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `Topic 05 gives ${D(n)}, the count with <b>no</b> object in its own place, and that is where most students stop. Almost every actual exam question is the partial version ${ESTIMATE}: exactly two letters in the right envelopes, at least three guests with their own hats, at least one letter misplaced. JEE Main asks the “exactly ${k}” form directly; JEE Advanced buries it inside a probability question, where the partial-derangement count is the numerator. CBSE Boards asks the plain ${D(n)} only. NEET does not test mathematics.`,
      },

      { t: 'part', title: 'Method' },
      {
        t: 'p',
        html: `Suppose ${n} distinct objects are matched one-to-one with ${n} distinct places (letters into addressed envelopes, guests into their own hats, a permutation against the identity). An object is <b>in place</b> if it lands in its own slot; the number of in-place objects is the number of fixed points of the permutation.`,
      },
      { t: 'p', html: '<b>The whole method in one formula:</b>' },
      {
        t: 'formula',
        kicker: `Exactly ${k} in place`,
        main: `#{exactly ${k} in place} = ${bn(n, k)} ${Dnk}.`,
        legend: [
          `${n} = the number of objects (and of places)`,
          `${k} = the number of objects in their own place`,
          `${Dnk} = the number of derangements of the other ${n} − ${k} objects (0 ≤ ${k} ≤ ${n})`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Why:</b> first choose <b>which</b> ${k} objects are the correct ones, in ${bn(n, k)} ways. Then the remaining ${n} − ${k} objects must <b>all</b> be wrong: if even one of them landed correctly, the total would exceed ${k} and the word “exactly” would be violated. A permutation of those ${n} − ${k} objects with no fixed point is precisely a derangement, so there are ${Dnk} of them. Multiply, by the Multiplication Principle.`,
      },
      { t: 'p', html: 'Keep these values on hand (extending Topic 05’s short list):' },
      {
        t: 'table',
        title: null,
        head: ['<i>n</i>', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
        rows: [[D(n), '1', '0', '1', '2', '9', '44', '265', '1854', '14833']],
      },
      {
        t: 'p',
        html: `Note ${D('0')} = 1 (the empty arrangement, consistent with 0! = 1 from Topic 01) and ${D('1')} = 0: that single zero does real work, as Worked Example D3 shows.`,
      },
      {
        t: 'table',
        title: 'The three derived counts',
        head: ['Requirement', 'Count'],
        rows: [
          [`Exactly ${k} in place`, `${bn(n, k)}${Dnk}`],
          [`At least ${k} in place`, `${SUM(`<i>j</i>=${k}`, n)} ${bn(n, '<i>j</i>')}${D('<i>n</i>−<i>j</i>')}`],
          ['At least one out of place', `${n}! − 1 (everything but the identity)`],
        ],
      },
      {
        t: 'p',
        html: `<b>The identity that checks all your work.</b> Every one of the ${n}! permutations has some exact number of fixed points, and the categories are disjoint and exhaustive, so`,
      },
      {
        t: 'formula',
        kicker: 'The identity that checks all your work',
        main: `${SUM(`${k}=0`, n)} ${bn(n, k)}${Dnk} = ${n}!.`,
        legend: [`${n} = the number of objects`, `${k} = the number of objects in their own place`, `${Dnk} = the derangements of ${n} − ${k} objects`],
        note: null,
      },
      {
        t: 'p',
        html: `Compute the whole fixed-point distribution and add: if it does not total ${n}!, you have a slip. This is the cheapest insurance available in the topic.`,
      },
      {
        t: 'p',
        html: `<b>A useful estimate.</b> For every ${n} ≥ 1, ${D(n)} is the nearest integer to ${fr(`${n}!`, e)}. Since ${fr('1', e)} ≈ 0.3679, roughly 37 percent of all permutations are derangements, and from ${n} = 4 on that proportion barely moves. Use it to smell-test an answer, not to produce one.`,
      },
      {
        t: 'p',
        html: `<b>Where this breaks down.</b> The formula needs a genuine one-to-one matching between objects and places. If two envelopes could accept the same letter, or if some letters have no “correct” envelope at all, there is no identity permutation to compare against and ${D(m)} is the wrong tool: you are back to a direct inclusion–exclusion (Topic 06) with whatever forbidden positions the problem actually specifies.`,
      },
      { t: 'fig', id: 'm11-06-D-d1' },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'D1: CBSE Board / Foundational Level',
        q: 'Five letters are written and five envelopes are addressed, one for each letter. The letters are inserted at random, one per envelope. In how many ways can exactly two letters go into their correct envelopes?',
        steps: [
          `Split the job into the two stages the method names.<br>• <b>Stage 1: choose the two correct letters.</b> Any 2 of the 5 may be the lucky ones: ${bn('5', '2')} = 10 ways.<br>• <b>Stage 2: the other three must all be wrong.</b> Otherwise “exactly two” fails. That is a derangement of 3 objects: ${D('3')} = 2 ways.`,
          `By the Multiplication Principle,<br>${bn('5', '2')} × ${D('3')} = 10 × 2 = 20.`,
          `To see the ${D('3')} = 2 concretely, take the three remaining letters A, B, C and their envelopes: the only arrangements with nothing in its own place are B, C, A and C, A, B. The four other arrangements each fix at least one letter.`,
        ],
        ans: `${bn('5', '2')} × ${D('3')} = 10 × 2 = 20.`,
      },
      {
        t: 'ex',
        tag: 'D2: JEE Main Level',
        q: 'Six letters are placed at random into six correspondingly addressed envelopes, one per envelope. In how many ways do <b>at least two</b> letters go into their correct envelopes?',
        steps: [
          `“At least two” means exactly 2, 3, 4, 5 or 6: mutually exclusive cases, so count each and add (Addition Principle).<br>• Exactly 2 correct: ${bn('6', '2')} = 15, ${D('4')} = 9, product 135.<br>• Exactly 3 correct: ${bn('6', '3')} = 20, ${D('3')} = 2, product 40.<br>• Exactly 4 correct: ${bn('6', '4')} = 15, ${D('2')} = 1, product 15.<br>• Exactly 5 correct: ${bn('6', '5')} = 6, ${D('1')} = 0, product 0.<br>• Exactly 6 correct: ${bn('6', '6')} = 1, ${D('0')} = 1, product 1.`,
          `<b>Verification by the master identity.</b> Complete the list with the two missing rows: exactly 0 correct is ${D('6')} = 265, exactly 1 correct is ${bn('6', '1')}${D('5')} = 6 × 44 = 264. The whole distribution is<br>265 + 264 + 135 + 40 + 15 + 0 + 1<br>= 720 = 6!.`,
          'Every permutation is accounted for exactly once, so the 191 is safe.',
        ],
        ans: '135 + 40 + 15 + 0 + 1 = 191.',
      },
      {
        t: 'ex',
        tag: 'D3: JEE Main: Speed Trap',
        q: 'Five letters are inserted at random into five correspondingly addressed envelopes, one per envelope. In how many ways can exactly four letters go into their correct envelopes?',
        steps: [
          `<b>The trap: the last-one-is-forced trap.</b> The student reads “choose which four are correct” and stops there:<br>${bn('5', '4')} = 5 (wrong).`,
          'It looks like a complete answer (five choices, five ways), and it is the single most common wrong answer in the topic.',
          `<b>Correct solution.</b> Apply the formula without skipping the second factor:<br>${bn('5', '4')} ${D('1')} = 5 × 0 = 0.`,
          `<b>Why zero, in words.</b> Suppose four letters are in their correct envelopes. Then four envelopes are filled correctly and exactly one letter and one envelope remain, and that remaining envelope is necessarily the remaining letter’s own. The fifth letter has nowhere wrong to go. So “exactly four correct” describes no arrangement at all; the moment ${n} − 1 are right, the ${n}th is right too, and you are in the “all ${n} correct” case.`,
          `<b>The general statement worth memorising:</b> exactly ${n} − 1 in place is impossible for every ${n}, because ${D('1')} = 0. Any exam option offering a non-zero count for it is a distractor. Equally, note the neighbouring value is not zero: exactly three correct out of five is ${bn('5', '3')}${D('2')} = 10 × 1 = 10, perfectly possible; the last two letters simply swap.`,
        ],
        ans: `${bn('5', '4')} ${D('1')} = 5 × 0 = 0.`,
      },
      {
        t: 'ex',
        tag: 'D4: JEE Advanced Level',
        q: 'Six letters are placed at random into six correspondingly addressed envelopes, one letter per envelope.<br>(a) In how many ways is at least one letter in a wrong envelope?<br>(b) Verify your answer by summing the full fixed-point distribution.<br>(c) If instead the six letters are placed into the six envelopes at random, what is the probability that no letter reaches its correct envelope?',
        steps: [
          '<b>(a) The one-line route.</b> “At least one wrong” is the complement of “all six right”, and there is exactly one way for all six to be right: the identity arrangement. Hence<br>6! − 1 = 720 − 1 = <b>719</b>.',
          'Topic 01’s Pro-Tip, at least one means complement, is doing all the work here.',
          `<b>(b) The long route, as a check.</b> “At least one wrong” is the same as “at most five right”, so sum the exactly-${k} counts for ${k} = 0 through 5:<br>265 (${k} = 0) + 264 (${k} = 1) + 135 (${k} = 2)<br>+ 40 (${k} = 3) + 15 (${k} = 4) + 0 (${k} = 5)<br>= 719.`,
          'The two routes agree. Observe how much cheaper (a) was: recognising the complement is the skill being tested, and the six-term sum is the punishment for missing it.',
          `<b>(c)</b> Favourable outcomes are the derangements, ${D('6')} = 265; total outcomes 6! = 720:<br><i>P</i> = ${fr('265', '720')} = ${fr('53', '144')} ≈ 0.3681.`,
          `Compare with the estimate ${fr('1', e)} ≈ 0.3679. The agreement to three decimal places at ${n} = 6 is typical, and it is why “about 37 percent” is a safe mental benchmark for any derangement probability you meet later in Probability.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice' },
      {
        t: 'practice',
        items: [
          { q: `[CBSE] Write down ${D('4')} and ${D('5')}.`, a: `${D('4')} = 9, ${D('5')} = 44.` },
          {
            q: '[CBSE] Four letters are placed at random into four correspondingly addressed envelopes. In how many ways does exactly one letter reach its correct envelope?',
            a: `${bn('4', '1')}${D('3')} = 4 × 2 = 8.`,
          },
          {
            q: '[JEE Main] Six guests leave their hats at a party and collect one each at random. In how many ways do exactly two guests get their own hats?',
            a: `${bn('6', '2')}${D('4')} = 15 × 9 = 135.`,
          },
          {
            q: '[JEE Main] Seven letters go into seven addressed envelopes at random. In how many ways do exactly three reach the correct envelope?',
            a: `${bn('7', '3')}${D('4')} = 35 × 9 = 315.`,
          },
          {
            q: '[JEE Main] Five letters go into five addressed envelopes at random. In how many ways do at least three reach the correct envelope?',
            a: `${bn('5', '3')}${D('2')} + ${bn('5', '4')}${D('1')} + ${bn('5', '5')}${D('0')}<br>= 10 + 0 + 1 = 11.`,
          },
          { q: '[JEE Advanced] Six letters go into six addressed envelopes. In how many ways is at least one letter misplaced?', a: '6! − 1 = 719.' },
          {
            q: `[JEE Advanced] Show that the seven exactly-${k} counts (${k} = 0, 1, … , 6) for ${n} = 6 sum to 720.`,
            a: '265 + 264 + 135 + 40 + 15 + 0 + 1 = 720 = 6!.',
          },
          {
            q: '[JEE Advanced] Eight distinct objects are permuted at random. In how many permutations are exactly three objects in their original positions?',
            a: `${bn('8', '3')}${D('5')} = 56 × 44 = 2464.`,
          },
        ],
      },

      { t: 'part', title: 'Cheat sheet: further patterns' },
      {
        t: 'snapshot',
        rows: [
          {
            f: 'Rank of a word (Additional topic A)',
            note: `Alphabetise the pool. At each position, for every distinct unused letter smaller than the current one, add the arrangement count of the pool with that letter removed, recomputing the repeat-denominator every time. Finish with +1. Ceiling check: the rank lies between 1 and ${CEIL}. For the ${k}-th word, subtract block sizes instead of adding. Worked values: DRONA 48, MATHS 53, SAMOSA 130, KOLKATA 644; EXAMINATION has 907,200 words before the first E-word; the 50th word of AGAIN is NAAIG.`,
          },
          {
            f: 'Lattice paths (Additional topic B)',
            note: `A monotonic path is a word in R’s and U’s.<br>(0, 0) → (${m}, ${n}): ${MN}.<br>Through <i>P</i>(${a}, ${b}): ${bn(`${a} + ${b}`, a)}${bn(`${m} − ${a} + ${n} − ${b}`, `${m} − ${a}`)}.<br>Avoiding <i>P</i>: total − through.<br>Several forbidden points: inclusion–exclusion (Topic 06). Legs <b>multiply</b>, never add. Equal-speed walkers from opposite corners of an ${n} × ${n} grid meet on one anti-diagonal in ∑<sub>${k}</sub> ${bn(n, k)}<sup>2</sup> = ${bn(`2${n}`, n)} ways. Monotonic only: diagonal steps or history-dependent bans (Catalan, ${fr('1', `${n} + 1`)}${bn(`2${n}`, n)}) are outside the formula.`,
          },
          {
            f: 'Divisor toolkit (Additional topic C)',
            note: `For ${N} = ∏ ${pi}<sup><i>a</i>ᵢ</sup> with ${k} distinct primes:<br>• ${dN} = ∏(${ai} + 1); ${sN} = ${SIGMA} (Topic 05).<br>• Product of all divisors: ${N}<sup><i>d</i>(<i>N</i>)/2</sup>.<br>• Two factors, unordered: ${fr('<i>d</i>', '2')} if ${N} is not a perfect square, ${fr('<i>d</i> + 1', '2')} if it is. ${N} <b>is a perfect square exactly when</b> ${dN} <b>is odd</b>: a fractional answer means you missed it.<br>• Two <b>coprime</b> factors: 2<sup><i>k</i>−1</sup> unordered (${N} > 1), 2<sup><i>k</i></sup> ordered. Exponents are irrelevant.<br>• Divisors divisible by ${m} (with ${m} ∣ ${N}): count <i>d</i>(${NM}), sum ${m}<i>σ</i>(${NM}). Odd divisors: delete the prime 2. Even divisors: total minus odd.<br>• <i>xyz</i> = ${N} in naturals: ∏ ${bn(`${ai} + 2`, '2')}; in integers, multiply by 4.`,
          },
          {
            f: 'Partial derangements (Additional topic D)',
            note: `#{exactly ${k} fixed} = ${bn(n, k)}${Dnk},<br>${SUM(`${k}=0`, n)} ${bn(n, k)}${Dnk} = ${n}!.<br>${D(n)}: 1, 0, 1, 2, 9, 44, 265, 1854, 14833 for ${n} = 0 to 8. For ${n} ≥ 1, ${D(n)} is the nearest integer to ${fr(`${n}!`, e)}, so about 37 percent of permutations are derangements. <b>Exactly ${n} − 1 fixed is impossible</b> (${D('1')} = 0). “At least one misplaced” is ${n}! − 1, not an ${n}-term sum.`,
          },
        ],
        aids: [
          '“Rank = count the earlier words, then +1.”',
          '“A grid path is a word in R and U.”',
          '“<i>d</i>(<i>N</i>) odd means <i>N</i> is a perfect square.”',
          '“Coprime split colours whole prime blocks.”',
          '“Fix <i>k</i>, derange the rest.”',
        ],
      },
    ],
  },
];
