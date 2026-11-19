# Ch 12 faults, round 4 shoot (shots in /Users/nikhi/Developer/monk-books/math12/shots-12/)
Some of these sit in text styles the renderer's operator rule does not reach (table cells, cheat sheets, captions, display lines); fix them by hand with   glue or a set <br>.

- p001-02..04 ("Three ideas do all the work" list): uneven gaps; each item sits right under the text above it, but there are blank paragraph gaps inside items 1, 2 and 3. Make it consistent (each item its own block, or no internal paragraph splits: blocks over ~420 characters get split by the paragraph splitter).
- p002-02/03 (Standard form box): second constraint split mid-expression "c₂x +" / "d₂y ≤ e₂": glue each constraint so it breaks only after the commas.
- p003-03/04 (how-to step 1): "(replace ≤ or ≥ with" / "=), plot the line": glue "with =)".
- p003-05/06 (how-to step 4 "Read off the answer"): big blank gap between the step title and its first bullet (other steps have none).
- p003-07/08 (diagram description / caption): "objective line ax" / "+ by = k": glue "ax + by".
- p014-02 (practice card 1 answer): "200x + 100y ≤" / "5000 ⇒ …": glue "≤ 5000".
- p017-01 (cheat sheet "Four families"): a line starts with the "·" separator: glue the word before it to "·" ( ·).
- p017-02/03 (cheat sheet "Goal word = family"): "expect" / "≤. cost/requirement …": glue "expect ≤".
- p019-01/02 ("Four things can happen" list): uneven gaps; item 1 has no space above it, items 2–4 each have a blank gap above.
- p020-03..05 ("Properties to state precisely"): uneven bullet gaps (gaps before "Unbounded solution test" and "Infeasibility", none before "Redundancy"); extra-large gap between the table and the heading.
- p024-11/12 (MCQ card 4): option B box about 1.5 lines too tall (an exact-fit line: Android measured one more line than it drew; reword-free fix: a set break or glue so it wraps differently).
- p029-02 (Additional topic A, proof of Lemma 1): "P = (λqₓ +" / "(1 − λ)rₓ, …)" splits the coordinate pair inside its bracket: give it break points only after the comma; "… + (1 − λ)" / "(arₓ + br_y). ■" separates the factor from its bracket: WJ between ")" and "(".
- p032-01/02 (Additional topic B, Method step 2): "if" alone on a line before the display: glue it to the word before.
- p032-02/03 (step 4): "when" alone on a line before the display: same.
- p040-01 (Additional topic D, Method step 1): "For" alone on a line, then a blank gap, then the display "a₁x + b₁y = c₁, …".
- p041-02/03 (Additional topic D, worked example card 2 step 2): strip table header still breaks "… → binding cap" / "→ integer x count" (line starts with "→"); make the header break cleanly, e.g. a set <br> before each "→" segment is NOT allowed (line would start with →); instead end lines after "→" (put the <br> after the arrow) or glue "binding cap →".
