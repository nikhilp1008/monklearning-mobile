# Notes: c12-c12 re-shoot r4 (Ch 12 Linear Programming)
Skipped byte-identical dups: p002-04,06,08,10; p004-02; p012-09; p013-02,06; p015-03; p022-02; p025-02; p028-02..05; p034-03,08; p040-04,06

## Findings
- card001-010, dg01-07: clean
- p000: clean
- p001-02..04 (part 1 Concept intuition, "Three ideas do all the work" numbered list): uneven gaps. No gap before items 1, 2, 3 (each glued to the line above: "work:" / "(no x², no xy)." / "constraints."), but blank paragraph gaps INSIDE items 1, 2, 3 ("...objective function." gap "Objective because"; "laddoos." gap "Each limit"; "the graph." gap "This is the feasible region"). Items read as running into each other.
- p001-05..07: clean (limiting-conditions bullets evenly spaced)
- p002-02/03 (part 2 Standard form box): "subject to c₁x + d₁y ≤ e₁, c₂x +" / "d₂y ≤ e₂, ..." second constraint torn mid-expression (break after the comma instead).
- p002 rest, p003-01/02: clean
- p003-03/04 (part 3 how-to step 1): "boundary line (replace ≤ or ≥ with" / "=), plot the line" line starts with "=" and the bracket "(replace ≤ or ≥ with =)" is torn.
- p003-05/06 (how-to step 4 "Read off the answer."): big blank gap between the step title and its first bullet (other steps have no gap).
- p003-07/08 (diagram description under "objective line meets the region last at a vertex"): "A dashed "objective line" ax" / "+ by = k is shown sliding outward" line starts with "+" (ax + by torn).
- p004-04/05: same card 3/4 shot twice (not byte-identical; capture repeat, card 4 follows in p004-06, so not a stuck card).
- p004-07/08 (part 4 worked example card 4, step 2): ASCII hyphens used as minus signs: "(0 - 3)/(5 - 2) = -1", "slope -p/q", "-p/q = -1" (should be U+2212). Tall line spacing in this step is the accepted inline-fraction case.
- p005 (practice 1-5): clean (07/09 are the question-only views of cards 4/5, same text as 08/10)
- p006 (MCQ 1-4), p007-01/02: clean
- p007-03, p008, p009-01: clean
- p009-02, p010-01..04: clean
- p010-05, p011-01/02: clean
- p011-03/04 (part 11 "Two phrasings that trap students"): "y - x ≤ k" and "x - 2y ≥ 0" minus drawn visibly shorter than the "−x" on the same line; looks like ASCII hyphen as minus (check source).
- p011 table "Constraint type" label wraps to two lines ("Constraint" / "type") in every row: acceptable but cramped (minor).
- p012-01..05: clean
- p012-06..08: clean. p013-01 (card1, only question visible; 02 identical) then p013-03 jumps to card 2/4: card 1 steps not captured (shot coverage gap, not an app fault)
- p013-03..09: clean (cards 2,3 only top captured)
- p014-02 (part 14 practice card 1 answer): "200x + 100y ≤" / "5000 ⇒ 2x + y ≤ 50;" short inequality torn (line above has room; "200x + 100y ≤ 5000" should stay whole).
- p014-04 (practice 2 answer) "x - 3y ≥ 0": minus looks like the short hyphen glyph again (same as p011); minor/check source.
- p014-06..11: clean
- p015-01..06: clean
- p015-07, p016: clean
- p017-01 (part 17 cheat sheet, "Four families"): line starts with the "·" separator ("· transport/allocation (min; ≤ & ≥) ·"); keep the dot at the line end.
- p017-02/03 (cheat sheet "Goal word = family"): "profit/output → maximise, expect" / "≤. cost/requirement → minimise," line starts with "≤" (symbol torn from "expect").
- p018-01: clean
- p019-01/02 (part 19 Topic 3 Concept intuition, "Four things can happen" list): uneven gaps; item 1 glued to the line above with no gap, items 2, 3, 4 each have a blank gap before them.
- p019-03..06, p020-01: clean
- p020-03/04/05 (part 20 "Properties to state precisely"): uneven bullet gaps: blank gap before "Unbounded solution test" and "Infeasibility" bullets, but none before "Redundancy" (glued to the Infeasibility bullet). Also extra-big gap between table end and "Properties" heading (p020-03/04).
- p021-01: clean
- p021-02..06 (incl. four-cases diagram (a)): clean
- p022-01..06: clean
- p022-07, p023-01..04: clean (p023-03/04 'x - y ≥ 1' short minus again, same group as p011/p014)
- p023-05..10, p024-01: clean
- p024-02,04,06,08,09: clean
- p024-11 (part 24 MCQ card 4, option B): option box has a big empty band below its three lines (box ~1.5 lines too tall); text not centred like the other options.
- p024-12 same option-B gap as p024-11 (unselected state). p024-13/14, p025: clean
- p026, p027-01/02: clean
- p027-03/04 (master ref E): '→ -x + y ≤ k' minus is the short hyphen glyph (same family as p011). Rest of p027, p028-01: clean
- p028: clean. p029-01: clean.
- p029-02 (Add. topic A Method, Proof of Lemma 1): coordinate pair torn inside its bracket "P = (λqₓ +" / "(1 − λ)rₓ, λq_y + (1 − λ)r_y), so"; and product torn "... + (1 − λ)" / "(arₓ + br_y). ■" (the factor (1 − λ) separated from the bracket it multiplies).
- CORRECTION: source uses U+2212 for all the "short minus" spots (checked topics-01-02.ts lines 223, 687; topic-03.ts 377). Short minus = accepted. DROP the p004-07/08, p011-03/04, p014-04, p023, p027 minus notes.
- p029-03..07: clean (the "= s + (1 − s)[t + 1 − t] = 1." line is an authored display line, previous line is short; convex-decomposition diagram fine)
- p029-08, p030-01..03: clean (maths checked: 1/4,1/3,5/12; Z=3)
- p030-04..08,10,11, p031-01: clean
- p030-09: clean
- p032-01/02 (Add. topic B Method, step 2): "if" alone on its own line ("if and only" / "if" / "Z(V_k) ≥ Z(V_j) for every j."), the display break leaves a one-word orphan.
- p032-02/03 (step 4): "when" alone on its line before the display "−p/q = m, i.e. p/q = −m." (same orphan pattern). Para "...which" / "rearranges to" then display: fine.
- p032-04/05, p033-01/02: clean (p033 card1 steps 3+ and card2 end not captured)
- p033-03, p034-01/02/04: clean (maths checked)
- p034-05..07,09: clean
- p034-10, p035-01, p036-01/02: clean
- p036-03, p037-01, p038-01/02: clean (p037 worked-example cards 2-5 not captured: coverage gap)
- p038-04,06,08,10: clean (maths checked)
- p038-03/05, p039-01: clean
- p040-01 (Add. topic D Method, Step 1): "For" alone on its own line, followed by a blank gap, then the display "a₁x + b₁y = c₁, a₂x + b₂y = c₂," (paragraph split: orphan word + gap inside the block).
- p040-02,03,05,07: clean
- p040-08/09, p041-01: clean
- p041-02 (Add. topic D worked example card 2, step 2): table header row still torn: "j → 8 − 2j → (12 − 2j)/3 → binding cap" / "→ integer x count" (line starts with "→"); the rows are rendered as arrow chains rather than a table (same item as earlier fix list).
- p041-03..05, p042-01: clean (maths checked, 16 lattice points)
- p042-02,04,06,08: clean (maths checked)
- p042-10 (previous product-tear fixed), p043-01, p044-01/02: clean
- p044-03/04, p045-01/02: clean
- p045-03..06: clean (maths checked). p045 card 1 steps beyond step 1 not captured (coverage gap)
- p045-07, p046-01/02/04: clean (maths checked)
- p046-03,05..09, p047-01: clean (card 3 marks now stay with points; bottom of card 3 answer not captured)

## FINAL fault list (after correction: short-minus items dropped)
1. p001-02..04 uneven gaps in "Three ideas" list
2. p002-02/03 Standard form box "c₂x +" / "d₂y ≤ e₂" torn
3. p003-03/04 how-to step 1 "(replace ≤ or ≥ with" / "=)" line starts with "=", bracket torn
4. p003-05/06 how-to step 4 big gap between title and first bullet
5. p003-07/08 diagram description "ax" / "+ by = k" line starts with "+"
6. p014-02 practice 1 answer "200x + 100y ≤" / "5000" torn
7. p017-01 cheat sheet line starts with "·"
8. p017-02/03 cheat sheet line starts with "≤"
9. p019-01/02 "Four things can happen" uneven gaps
10. p020-03..05 Properties bullets uneven gaps (+ big gap before heading)
11. p024-11/12 MCQ card 4 option B box too tall, empty band
12. p029-02 Lemma 1 proof: coordinate bracket torn; "(1 − λ)" / "(arₓ + br_y)" torn
13. p032-01/02 "if" alone on a line
14. p032-02/03 "when" alone on a line
15. p040-01 "For" alone on a line + gap before display
16. p041-02 strip table header "binding cap" / "→ integer x count" line starts with "→"
