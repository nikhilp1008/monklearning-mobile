# Fixer brief, round 4 (Class 12 Maths, Android check)

You edit ONLY the files named in your task, inside the scratch copy
/Users/nikhi/Developer/monk-books/math12/checks/fixr4/
(never the real repo at ~/Developer/monk-learning-app). No helper agents. Do not git anything.
Keep a running log of what you changed in your log file (named in your task) after every few fixes, so the work survives an interruption.

The text is word for word from the NCERT book (~/Developer/monk-books/math12/math12.pdf); keep every word and number. You may only change layout: glue, line breaks, splitting blocks, rewriting "a ÷ b" with stacked fractions as a product with the stacked reciprocal (or one stacked fraction), unstacking an inner fraction.

## Already fixed in the renderer (do NOT hand-fix these)
Reading pages and card sets now never start a line with an operator (= + − × → ⇒ ≥ ≤ < > ≈ ∝ ≡ stay with the term before them), keep a short bracket/set (text ≤ 18 characters, not touching another bracket) on one line, keep "✓" with its line, keep "(i)", "(ii)", "(a)" with what follows, and keep a conditional bar "P(A | B)" whole. So skip faults that are ONLY "line starts with = + − → ≥ …" or a short torn bracket on reading pages or card sets.
The middle dot "·" is NOT in that list: torn "a ·" / "b" products still need glue (  around ·).
Formula cards (lib/revise/keypoints-*.ts) use a different renderer: operator line starts THERE still need a hand fix (a <br> after the operator where the row is long, or   glue).

## Still to fix by hand
- "÷" next to a stacked fraction: rewrite (one stacked fraction, or "a/b × d/c").
- A stacked fraction or binomial stack inside a fraction's numerator or denominator: unstack the inner one (ⁿCᵣ inline as <sup>n</sup>C<sub>r</sub>).
- Stacked fractions touching or overlapping rows: separate them (glued "·", or `<br><br>` between stacked lines).
- A step ending on a dangling "=" or "⇒" with nothing after it: end the step on the expression.
- A short word ("so", "and", "while", "i.e.", "1.", "■", "0") alone on a line: glue it to its neighbour with  .
- Brackets longer than 18 characters torn inside: glue the break point with  .
- Uneven gaps between bullets of one list: make each bullet its own block (a block over ~420 characters gets split by the paragraph splitter), or join consistently.
- Big blank gap inside a box: usually a `<br>` before a tall stacked fraction or an empty line; remove it.
- Rules: every fraction stacked, no em dash (—), no fraction inside a fraction, never a `<br>` inside ( [ { or |…|. `const NB = ' ';` and `const WJ = '⁠';` stay written escaped in source.

## After editing
Do NOT run the TypeScript type check or the full test suite (the Mac crashes under load; the main session runs those).
You may run ONE quick test file at most, e.g. `npx jest content/textbooks/__tests__/display-fit` from the scratch copy, once at the end.
Report: each fault → what you changed (file + short quote), and any fault you could not fix and why.
