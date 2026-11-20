# Ch 11–12 last faults (shots in /Users/nikhi/Developer/monk-books/math12/shots-11-final4/ and shots-12-final4/)
These shots ran on the CURRENT renderer (fresh app start), so what you see is real.

## Ch 11
- OVERSHOOT, the main one: where stacked fractions on neighbouring lines used to touch, the `<br><br>` fix now leaves a full blank line inside the box: p020-01/02 (between the two cos θ rows), p038-01/02 (Point-to-a-line box, between the Foot row and the Distance row), p038-03 (Point-to-a-plane box, between t = … and Distance), p047-04/05 (between "= ±" and the second fraction). Go back to a single `<br>` and check whether the fractions really touch now (the renderer changed since). If touching is likely, prefer putting the two fractions on one line joined by text, or accept single <br>; do NOT leave a full blank line.
- p010-08/09: gap before "It is worth pausing…" still about 1.7× the normal paragraph gap (an exact-fit line in the paragraph before; try a different glue).
- p038-04: prose line starts with "=": "… = −t (foot)," / "= −2t (image).": restructure so the break is after "=" or after the comma (glue "= −2t (image)" to its left side).
- p047-02/03: "Cc ≠ 0" alone on its line after "b·n = Aa + Bb +": keep the whole condition on one line (glue) or break earlier.
- p048-09/10: "if and only if" alone on a line; "P_i = 0 is" and "equal:" short lines.
- p077-10 and p077-19: card 3/8 and 6/8 questions wrap early (6/8 "The" / "plane bisecting the angle"): look for a long glued run right after the break.
- p077-13/14: card 4/8: blank gap of about one line above "Check answer" and above the answer box; in the answer box "Normal =" and "Plane:" each sit alone on a line.
- p077-23/24: card 7/8 "√((−10)² +" / "(−10)² + (−10)²) = 10√3." split inside √( ): glue the whole radicand (it is ~24 characters).
- Minor: p002-07 "Collinearity of three points: either" breaks early; p003-08/09 "…the yz-plane" / "is the projection" early break.

## Ch 12
- p029-02: coordinate pair "(λq_x + (1 − λ)r_x," / "λq_y + …)" split at the comma inside its bracket: put it on its own line (set <br> before "P =" if needed) or glue whole.
- p032-01/02 step 2: "The maximum occurs at Vk" / "if and only if" / "Z(Vk) ≥ Z(Vj) for every j.": make "if and only if" end the first line (glue "Vk if and only if" or break before "if").
- p032-02/03 step 4: "rearranges to" short line before the fraction (minor).
- p014-09: "₹2000/" / "trip." torn at the slash: glue "₹2000/trip".
- p014-01: "₹25" / "per pastry" early break (minor).
