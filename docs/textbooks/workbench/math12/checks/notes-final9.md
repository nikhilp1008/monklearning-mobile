# Notes final9: Maths 11 Ch 0 fix (shots-00-fix) + Maths 12 Ch 13 (shots-13-final9)

## Ch 0 (shots-00-fix)
- p005-01..03: "y log_c a" glued FIXED; "p, q ≠ 0" together FIXED; log base now "2²" (small raised 2) not "22" FIXED; "2/2 log₂5" glued FIXED. Display lines starting "=" in derivation = accepted written working. No new faults.
- p006-01..04: bar notation "k+1.(mantissa)" together FIXED. No new faults.
- p007-01..03 (02=03 md5): steps 1/2/3 even gaps FIXED. No new faults.
- p008-01..05 (02=03, 04=05): The rule = heading + 3 evenly spaced bullets FIXED; mini-cases lead-in + 2 even bullets FIXED; no [NEW] tag (base-contains-x para clean) FIXED.
- p010-01..07: practice 1-4 Q/A OK (x; (6√3+3√5)/7; x<2 or x>3). No faults.
- p010-08..15: practice 4-8 OK (4: 3; 5: -4; 6: 13 digits; 7: x=5). No faults.
- p010-16..24: practice 8-12 OK; practice 10 'a, b, c > 0' on one line FIXED; 8: 2<x<7/3 correct; 12: 2.0333 correct ('+' at line end allowed).
- p012-01: Additional topic A intro, NEET note clean, no [NEW] FIXED.
- p014-01, 02: "96485 C mol⁻¹" whole FIXED; "(0.02955)(−2)" whole FIXED. Breaks after "F =" / "1.10 −" at line end = allowed. Card step tall spacing (fraction in step) accepted.
- p015-01, 02: "10⁻¹² W/m²" and "10⁻² W/m²" whole FIXED; "100 dB." no longer alone FIXED; Correction note accepted. NEW (minor): card step 1 product torn "= 10 ×" / "10 = 100 dB." (the glue starts at the second 10; should be "10 × 10 = 100 dB." glued).
- p016-01..04 (01=02, 03=04): no [NEW]; card step tall spacing (stacked fractions in step) accepted. No faults.
- p017-01..04 (03≈04 visually): no [NEW]; Correction note accepted. No faults.
- p018-01..03: "A + 2d, A + 5d, A + 11d" spaced FIXED; Correction note accepted (maths checked: 3d(d − A) = 0 ⇒ d = A, terms 3A, 6A, 12A ratio 2 correct). The editor-voice "As printed, the question asks for a logarithmic equation..." paragraph still present (founder item from the fault list, not a layout fault). No new layout faults.
- r0-p009 card1-01: '⟺ x⁴ = 81' no longer starts a line FIXED; maths OK. card2-01: OK (display '=' lines accepted). card3-01: OK.
- card4-01, 02: '·' now ends line 2, line 3 starts ln6/ln5 FIXED; gaps around display tight FIXED; stacked-fraction rows do not touch (~10px clear, checked on crop). Steps 1-2 tall spacing = accepted (stacked fraction in step).
- card5-01, 02: STILL (real). Step 2 rebuilt into short <br> lines, but the raised exponent of "4^(log₂ 8)" and "8^(log₂ 4)" is drawn one line LOWER, on top of "Also" and "Both" (garbled "Al̶so log₂ 8" / "Bo̶th log₂ 4"), leaving a blank gap after the "4" and "8" bases. Same collision as before, now on the following line. The answer box renders 4^(log₂8) = 8^(log₂4) = 64 correctly, so the fault is the <sup> right after a <br>/line start in the step. Step 1 "log_b c ·" / "log_b a" break after '·' = allowed.
- card6-01..03: "100 log₁₀ 2" and "−100 log₁₀ 2" whole FIXED; step 4 display tight, no big gaps FIXED; display stacked-fraction rows do not touch (crop checked). Step 3 tall spacing accepted. Maths OK (31 digits; 30 zeros).
- card7-01, 02: "log₂[(x − 1)(x + 1)]" whole FIXED. Maths OK. Step 5 '+' at line end allowed.
- card8-01, 02: no big gap before step 3 display FIXED; step 3 tall spacing accepted (stacked 1/0.25). Maths OK.
- Ch 0 shoot complete (log DONE). Card set advanced 1-8 correctly.

## Ch 13 (shots-13-final9)
- p063-01..08: archetypes 1-6 cards (page carousel) advance 1/6..6/6, each new content. "1 − P(X = 0)." whole on its own line (p063-03) OK. Archetype 2 "P(A) −" / "P(A ∩ B)" break after operator allowed.
  STILL (real): archetype 6 Method (p063-06, 07, 08): "• Geometric (r = 1): P(first" / "success on trial n) = qⁿ⁻¹p." and "• Negative Binomial (r ≥ 2): P(r-th" / "success on trial n) = (n−1 r−1) pʳqⁿ⁻ʳ." Both split inside the bracket after "P(first" / "P(r-th", leaving a short first line with lots of room. Better: break before "P(" (glue "P(first success on trial n)" as one unit, it is 26 chars) so the whole P(...) moves down.
  p063-07 step 2 display: "=" starting line 3 = accepted written working; stacked fractions clear. Maths 5/11 correct.
- p065-01..07 (02=03, 04=05): NEW (real): practice 1/10 question prints the literal placeholder "at least$" / "{NB}once." (the glue for "once." was written as ${NB} inside a non-template string, so the source text shows "$" and "{NB}"). "once." itself no longer alone, but the text is broken.
  Practice 2/10: "or neither." on its own line with "or" FIXED (not alone). Answer: "P(A ∩ B) = P(A) + P(B) −" break after '−' allowed; maths OK (independent only). Practice 1 answer 1/9 correct.
- Source confirmed: extra-p.ts:257 single-quoted string with ${NB}. Same bug at extras-a-e.ts:450 ('two positive results${NB}cannot', not in this shot set).
- r13-p063 card1-01..04: "the posterior." not alone (with "the") OK; display "=" line starts accepted; stacked fractions in step 4 clear. Maths 26/31 correct. No faults.
- card2-01..04 (01 not opened separately; 02-04 cover the card): "or neither." with "or" OK. NEW (minor): step 5 "Hence E₁, E₂, E₃ are not" / "mutually independent." breaks early leaving half a line empty (glue run too long forcing the wrap). Maths OK, answer (b).
- card3-01..03: NOT CAPTURED (real, shoot): all three shots show the app Home screen (log had "app not in front ... reopening it"). Archetype 3 card unverified in the card set (it was seen on the page shot p063-03, where "1 − P(X = 0)." is whole).
- card4-01..03: OK, maths 32/49 correct; stacked rows clear.
- card5-01..03: OK; step 1 line starting "⇒" = accepted set break; 23/36 correct.
- card6-01 (1:28): Method now "• Geometric (r = 1):" / "P(first success on trial n) = qⁿ⁻¹p." and "• Negative Binomial (r ≥ 2):" / "P(r-th success on trial n) = …" whole: FIXED. The page shots p063-06..08 (1:22, before the app was relaunched at 1:26) still show the old split "P(first" / "success…", so those page shots were likely a stale bundle; card shots are authoritative.
- card6-02, 03: whole card OK, 5/11.
- r13-p065 card1-01, 02: STILL shows "at least$" / "{NB}once." (NEW real, see p065 above). Answer 1/9 OK.
- card2-01: "or neither." with "or" OK; answer OK.
- card3-01, 02: 8/17 correct; stacked rows clear. OK.
- card4-01: OK (137/65536). Minor: stacked numerator "16C0+16C1+16C2" over 2^16 tall fraction, fine.
- card5-01: OK (32/49). card6-01: OK (1/55, 41/55). card7-01: OK (1/3).
- card8-01..04: "U₁." not alone ("from U₁.") OK; fraction rows P(W|T) / "= 3/10 + …" do not touch (crop checked) OK; maths 23/30, 12/23 correct. NEW (minor): blank-line gap inside the answer box between "U₂ initially 1W." and "After transfer:" (a paragraph break the other lines lack).
- card9-01, 02: "!4" whole ("4: !4 = 4!(1 − …)") OK. Minor: "Number of derangements of" / "4: !4 …" splits "of 4" (the 4 starts the next line glued to "!4"); acceptable but reads oddly. 3/40 correct.
- card10-01, 02: 4/7 correct; blank gap between the two answer paragraphs (minor, appears intended paragraph break).

## Summary
STILL: Ch0 card 5 step 2 exponent collision (real). Ch13: none STILL in the card set (archetype 6 split seen only on stale-looking page shots p063-06..08).
NEW real: Ch13 practice 1/10 literal "at least$" / "{NB}once." (extra-p.ts:257, single-quoted string; same bug extras-a-e.ts:450). Shoot: r13-p063 card3 shots show Home screen (archetype 3 not captured in card set).
NEW minor: Ch0 p015 "= 10 ×" / "10 = 100 dB." torn; Ch13 card2 step 5 early break "are not" / "mutually independent."; p065 card8 blank gap before "After transfer:"; card9 "of" / "4: !4".
