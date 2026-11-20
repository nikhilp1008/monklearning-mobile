# Fix log: Maths 11 Ch 0 (Basic Mathematics), scratch copy fixr5

Files: content/textbooks/math-11-00/topic-01.ts, extra-a.ts. Joiner math-11-00-basic-mathematics.ts unchanged (no fault in it).
Added `const WJ = '⁠';` (escaped) to both files; added `tight()` (single-<br> display lines) in topic-01.ts for card displays.

## topic-01.ts
- p005 Derivation: "${y}${NB}${LC(a)}" glues "y log_c a".
- p005 consequence 2: "For ${p},${NB}${q}${NB}≠${NB}0".
- p005 example: base of log written `lg('2²', …)` (Unicode superscript two inside the subscript; nested <sup> in <sub> drew "22"); "${fr('2','2')}${NB}${L2('5')}" glues coefficient to its log.
- p006 bar notation: "${KBAR}.${WJ}(mantissa)" (no break between "." and "(mantissa)").
- p007 numbered steps: lead-in, step 1, step 2, step 3 each their own 'p' block (even gaps; the splitter had cut inside step 2).
- p008 The rule: "The rule." heading, then each of the three bullets its own block.
- p008 Worked mini-cases: lead-in, then each bullet its own block.
- p008 "[NEW]" removed from the base-contains-x paragraph.
- Card 1: "= 4${NB}⟺".
- Card 4: "·" moved to the end of display line 2 ("…ln5/ln4${NB}·"), line 3 starts with ln6/ln5; display uses single <br> (tight) and single <br> after "consequences”:" and after "leaving".
- Card 5 step 2: rebuilt as short lines with <br>: "With a = 4, b = 2, c = 8:" / "log₂ 8 = 3, so the left side is" / "4^(log₂ 8) = 4³ = 64." / "Also log₂ 4 = 2, so the right side is" / "8^(log₂ 4) = 8² = 64." / "Both equal 64." (each raised exponent on a line that does not wrap).
- Card 6: "100${NB}log₁₀ 2" and "−100${NB}log₁₀ 2"; step 4: single <br> before and after the display, display lines joined by single <br> (tight).
- Card 7: "log₂[(x${NB}−${NB}1)${WJ}(x${NB}+${NB}1)]".
- Card 8 step 3: single <br> before the display line.
- Practice 10: "a,${NB}b,${NB}c${NB}>${NB}0".

## extra-a.ts
- "[NEW]" removed from: NEET note (l.43), Nernst units note (l.77), half-life N note (l.106). Header comment updated.
- Content items (all three notes are ours, per reports-00/writer-2.md and review-R2.md; the sentences they comment on are the book's): "[NEW]" replaced by bold "Correction:" on the decibel note (l.87), the x^x differentiation note (l.134) and the AP/GP note (l.153); book sentences kept word for word.
- p014: "96485${NB}C${NB}mol⁻¹"; "(0.02955)${WJ}(−2)".
- p015: "10⁻¹²${NB}W/m²", "10⁻²${NB}W/m²", "10 × 10${NB}=${NB}100${NB}dB.".
- p018: "A${NB}+${NB}2d, A${NB}+${NB}5d, A${NB}+${NB}11d".

## Not fixed
- Card 4 steps 1–2 (and card 6/8 prose) oversized line spacing: there's no stray inline fraction. The renderer gives the whole step a wider line height when the step contains any stacked fraction (markup.tsx leadBy), and the display fractions sit in the same step string. Fixing it in content would mean splitting a display into its own numbered step, which would change the step numbering, so it was left.

display-fit test: PASS (9/9).
