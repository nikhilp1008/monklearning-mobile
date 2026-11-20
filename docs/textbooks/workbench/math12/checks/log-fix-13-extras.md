# Fix log, Ch 13 extras (16 Nov), scratch copy fixr5
Files: content/textbooks/math-12-13/extras-a-e.ts, extra-p.ts. Layout only, no words changed.
The 15 Nov shots came from a stale bundle (e.g. p063-07 shows "5/36 ÷ 11/36 =", which the source no longer has).

## Changed
- extras-a-e.ts + extra-p.ts `sb()`: WJ before `<sub>` so a subscript never drops to the next line (p063-05 "∑ pᵢ = 1" / "thein"; also E's "∑ pᵢ = 1").
- card018 legend 1 (extras-a-e.ts): `P(A) + P(B) + P(C)` now `P(A)NB+ P(B)NB+ P(C)` (breaks only after "+"; legend 2 already did; 3 is short).
- p065-09 / r13-p063-card4 (extra-p.ts): new `nCr()` helper (inline ⁿCᵣ); used inside the fractions in practice 4 (16C0 + 16C1 + 16C2 over 2¹⁶) and practice 8 (3C2/5C2, 3C1·2C1/10).
- p044-12/13: `P(at least two)` glued (3 places); also `P(exactly one occurs)`, `P(exactly two occur)` glued.
- p054-01: `g(X, Y)` and `g(xᵢ, yⱼ)` glued.
- p060-10/11: `AW`/`BW` = `P(A wins)`/`P(B wins)` glued.
- p066-01/02 (extra-p.ts): `(from P(A ∩ B) ≥ …)` glued after "from".
- r13-p043-card2: "1/4, and" glued (A advanced ex step 1).
- r13-p047-card1: "0, while" glued.
- p055-04/05/06, r13-p055-card2: "so<br>Cov(…)" → "so Cov(…)" (so no longer alone on its line).
- r13-p059-card2: "25/36, so" and "6/11, and" glued.

## Already fixed in source (skipped)
All ÷ faults (no ÷ left in either file); r13-p063-card1 step 4 and archetype 6 step 2 dangling "="; "sum to 1." glued; all torn "·" products listed (p044-06, p047-04/05, p052-06, p052-08, p056-02, p056-05, p065-06, p065-22 "4!(" with WJ); p043 "none = 1/4, and"; p054 "P(X = xᵢ, Y = yⱼ)", "2[E(XY) − μXμY]", "Cov(X, Y)"; p044-08 and p047-01 sets; ✓ all glued.

## Not fixed
- r13-p063-card1 blank gap before "Worked Example": no <br><br> or empty line in the source; probably the paragraph splitter / stale shot. Needs a fresh shot.
- p036, p040, p041 bullet gaps: those pages are in topics-03-04.ts (not my file).
- p063-01/03 tall line spacing: no stacked fraction in the text; looks like renderer line height. Left.

display-fit test: PASS (9/9).
