# Ch 11 faults, round 4 shoot (shots in /Users/nikhi/Developer/monk-books/math12/shots-11/)
The renderer now also glues a closing "|" to an operator after it ("|D| = √3"), so lines starting "=" right after "|…|" are handled. Fix the rest by hand.

## Second half (p040–p078)
- p040-02 card 2/4 step 2: "|AP ×" / "b| = √(9+16+4)" breaks inside the |…| bars: glue the inside of the bars.
- p044-01 cheat sheet 04a: Foot fraction's denominator |b|² touches the numerator |AP × b| of the Distance fraction on the next line: separate.
- p047-02 box "Line meeting a plane": "Aa + Bb + Cc ≠" / "0": glue "≠ 0".
- p047-04/05 box "Angle-bisector planes": gap about one line tall after the first fraction, then next line starts with "±".
- p048-01 procedure 05a step 3: "λ." alone on a line.
- p048-02 Proof of Theorem 1: "gives" and "i.e." each stranded on their own line between two long unbreakable formulas: put them at the end of the line before (glue to the previous word) or make the formulas breakable at an operator.
- p048-05/07 diagram caption: "…N = b" / "× (P − a) is normal…" line starts with "×" (caption renderer: glue "b × (P − a)" with  ).
- p048-08 Proof of Theorem 3: "i.e." alone on a line.
- p050-02 practice 1/5 answer: "(1 + 2λ," / "2 − λ, −1 + λ)" breaks inside the bracket: glue.
- p050-04 practice 2/5 answer: "= 3 ≠" / "2)": glue "≠ 2)".
- p052-01 Watch out bullet 1: blank line between the bold title and its text (others have none).
- p061-06 practice 3/4 answer: "instead." alone on the last line.
- p067-04/05 D3 paragraph: "MB² = (u − x_B)² + …" / "= MB′²." line starts with "=".
- p071-01 E1: "⟹ −2 p·a + |a|²" / "= −2 p·b + |b|²," starts with "="; then "so" alone on a line.
- p074-04/05/06 distribution table: a line-sized gap under the row title "Line–Plane & Plane–Plane Configurations" (others have none).
- p075-02 archetype 1/7 Coplanarity bullet: "…(b1 × b2)" / "= 0." starts with "=".
- p077-13/14 practice 4/8: gap about 1.5 lines after "(d) (0, 1, −1)" before "Check answer".
- p077-23 practice 7/8 answer: "Distance = √((−10)² + (−10)² + (−10)²" / ")" / "= 10√3.": lone ")" (glue the last term with the ")" and give the radicand a break point after a "+").
- p077-28/29 practice 8/8 answer: "(a)" alone on a line above its fraction.
- Minor: p045-01 exam relevance paragraph 2 breaks early with a quarter of the line empty (likely a long glued run): loosen if easy.

## First half (p000–p039, formula cards, diagrams)
Renderer now also covers: operator line starts inside formula boxes and on formula cards (the formula style keeps an operator with the term before it), and "|…|" followed by "=" / "+". So items like "+ (z₂ − z₁)²)" starting a line in boxes/cards, "|Δy|" / "+ |Δz|", "|b₁×b₂|" / "= √18", "|AP × b|" / "= |AP||b| sin θ", "|AP⊥|" / "= |AP| sin θ" are done: skip them.
- card016, card017: denominator "|b₁ × b₂|" has no vector arrows while the numerator does: add the arrows (book notation). card026: in "|b||n|" the b has no arrow.
- dg02 (lib/diagrams/mathematics-12-11.ts): in cos β = y/r the tail of "y" touches the fraction bar (minor; nudge if easy).
- p002-06/07: "C:" alone on a line in "Centroid of a triangle with vertices A, B, C:": glue "B, C:".
- p003-01/02/03 diagram caption: "|z₂" / "− z₁|" split inside the bars (caption renderer): glue the inside of the bars with  .
- p004-04..07 worked example 4/4 step 3: product "(0)(1)" torn, "(1)" alone: glue with WJ between ")" and "(".
- p008-01 cheat sheet: "External" separated from its ratio "m : n: (…)" (minor): glue.
- p010-09/10: gap before "It is worth pausing…" about 1.6× the other paragraph gaps (check for a stray <br> or exact-fit line).
- p012-01/02 direction-angles diagram: the "y" axis label sits on the dotted line from P: move the label.
- p013-07/08 worked example 4/4 step 5: second line starts "= (2 − 2 + 1)/6 = 1/6." (if it is a <br> before "=", fine as written steps; if a wrap, glue).
- p020-03 perpendicular/parallel box: "a₁a₂ + b₁b₂ + c₁c₂" / "= 0", "= 0" alone: the previous round glued "= 0"; now glue "c₁c₂ =" too, or keep the whole condition together.
- p030-08/09: proof mark "■" wraps to the next line: glue with   to the last word.
- p031-04/05 worked example 4/4 step 2: "means N·(3, 2, 1) =" / "0:": glue "= 0:".
- p038-02/03 boxes "Point to a line" and "Point to a plane": gap between the first formula line and "Distance:" about twice the other gaps (a stray <br> or an exact-fit line).
