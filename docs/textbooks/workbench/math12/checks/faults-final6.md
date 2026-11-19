# Last faults (shots in /Users/nikhi/Developer/monk-books/math12/shots-1{1,2,3}-final5/)
Already handled, skip: Ch 11 p020/p047/p048-09 touching fractions (gaps restored); Ch 13 p020 table (head changed); lines starting "+" right after a stacked fraction (renderer now glues the fraction to a no-break space).
IMPORTANT: a glued run longer than about 26 characters cannot fit a line and Android then breaks it anywhere, even inside a word ("prim" / "e)"). Glue only short pieces (≤ ~20 characters) and leave a normal space at a sensible point.

## Ch 13
- p065-23/24 card 10/10: "…square before prim" / "e)": the fully glued "P(square is 9 | square before prime)" is too long. Unglue: keep "P(square is 9" together and "before prime)" together with normal spaces between.
- p004-04/05 (and r13-p004 card 3) step 1: "P(3rd is boy | first two" / "are girls) = 7/10": bracket ~30 chars, too long to keep whole; glue "two are girls)" so the break comes earlier ("P(3rd is boy |" / "first two are girls)") or put the bracket on its own line.
- p004-09/10 (and r13-p004 card 4) step 5: "P(both) +" alone on a short line: rework so the sum breaks evenly ("P(both) + P(exactly one) +" / "P(neither) = …").
- p013-02 (and r13-p013 card 2) options: "(c) ≈" / "50%": glue "≈ 50%" (and every option value to its label).
- p013-06 (and r13-p013 card 4) step 2: "0.012 + 0.010 +" / "0.012 = 0.034." minor; glue "0.012 = 0.034." if short.
- p048 5/5 and p052 4/4: gap of about one extra line above the answer box: look for an exact-fit last line of the question; break it differently.
- p048-10/11: "conditional" alone on a line (minor): glue "conditional probability".
- p048-06 card 3/5: blank line inside the answer box between "p²(1 − p) = 4/125." and "Expand: …": remove the extra <br>.
- p052-08..10 4/4: "P(D | +" / "+) = 324/423": glue "+⁠+" already done? Make the whole "P(D | ++)" one glued piece (it is short).
- p052 answers 2/4–4/4: blank lines between paragraphs inside the answer box (borderline): make consistent single <br> if they are <br><br>.
- r13-p013 card 3 step 1: blank line between each of the three likelihood rows P(W|A), P(W|B), P(W|C): single <br>, but check stacked fractions on neighbouring rows will not touch (if they would, keep <br><br>).
- r13-p063 card 2: "= P(A)" / "(1 − P(B)))." torn: glue "P(A)⁠(1 − P(B))"; "But" alone on a line: glue to the next word.
- r13-p063 card 6: "P(first success on trial" / "n)" and "P(r-th success on" / "trial n)": glue "trial n)" and "on trial n)".
- Labels "at least" / "one", "exactly" / "one" (p043 card 2 step 6, p047 card 2 step 7, p048 2/5 answer): glue "at least one", "exactly one".
- p058-03/04 minor: (1 − q)³ denominator about 1px from "2q" on the next row: fine to leave if a fix is risky.

## Ch 11 / 12 (minor)
- Ch 12 p029-01 "P₁, …," / "Pₙ" and p032-01 "V₁, …," / "Vₙ": glue the lists.
- Ch 11 p003-15/16: final "=" touches the fraction bar of (A + B + C)/3: add a normal space or NB after "=" before the fraction.
- Ch 11 p077-13 card 4/8: "[JEE Main – Medium] The" / "plane…" breaks early: glue "The plane".
