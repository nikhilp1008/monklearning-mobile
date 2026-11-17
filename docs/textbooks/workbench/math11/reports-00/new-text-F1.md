# Mathematics 11 Chapter 0: new wording applied by fixer F1 (reviews R1 and R2)

All [NEW] wording below is ours, not the book's. Files: `content/textbooks/math-11-00/topic-01.ts` (T01) and `extra-a.ts` (EA). Symbols are shown plain; the file draws them with italics, stacked fractions and sub/superscripts. Only the changed clause is quoted.

## topic-01.ts

1. Introduction, paragraph 1 (R1 13): "(the NCERT syllabus treats indices and surds as revision from earlier classes, Classes 8 and 9, and never gives logarithms a chapter of their own)". Replaces "Class 9-10 revision". Founder: check against a printed NCERT.
2. Introduction, paragraph 1 (R1 3, R2 3): "logarithmic differentiation is a named technique you will meet from Chapter 12 onward." Replaces "you will need by Chapter 13".
3. Indices, last paragraph (R1 11): "comparing two such numbers is just comparing the exponents n first (the larger exponent is the larger number), and the parts m only when the exponents are equal."
4. Surds, first paragraph (R1 8): "√2 and ∛5 are surds; √4 = 2 is not, because it simplifies to a rational number. An expression such as 2 + √3, a rational number plus a surd, is called a binomial surd."
5. Surds, double-rationalisation paragraph (R1 3): "in limit problems in Chapter 12" (number only).
6. Logarithms: definition and domain, bullet 3 (R1 5): "Hence zero and the negative numbers have no logarithm to a positive base: there is no real number y with a^y equal to zero or to a negative number."
7. Same part, "The shape of y = log_a x" (R1 1): "it hugs the y-axis as x → 0⁺ without ever touching it, because x = 0 is outside the domain (it runs down towards −∞ when a > 1 and up towards +∞ when 0 < a < 1)."
8. Same paragraph (R1 2): "the curve rises, steeply near x = 0 and ever more slowly as x grows; for 0 < a < 1 it falls instead (steeply near x = 0, then ever more slowly), mirroring ..."
9. Same part, "Practical consequence" (R1 12 optional reword): "it is frequently what a JEE question’s mark depends on (the book’s estimate from past papers, not official figures)". The label was already there.
10. The laws of logarithms, identities (R1 4): "Three immediate identities, all provable directly from the definition:".
11. Change of base, consequence 1 (R1 7): "Setting c = b in the formula (allowed because b > 0 and b ≠ 1):" and after the boxed result "(valid for a, b > 0 and a, b ≠ 1)".
12. Change of base, "One further identity" (R1 12): "because it recurs in JEE Advanced (the book’s estimate from past papers, not official figures):".
13. Common logarithms, first paragraph (R1 10, calculus nuance): "(In calculus, and in many JEE Advanced questions, log x written without a base can also mean the natural logarithm; the question or its answer options show which is meant, and ln is never ambiguous.)"
14. Common logarithms, definition (R1 9 and the optional display): lead-in "write log₁₀ N as an integer plus a fractional part, the integer being the greatest integer not exceeding log₁₀ N:" display "log₁₀ N = (integer part) + (fractional part)," then "where the integer part is called the characteristic and the fractional part the mantissa, and by convention the mantissa is always taken to be non-negative (0 ≤ mantissa < 1), even if this forces the characteristic to be negative." (R1 said "whole number"; "integer" used because the characteristic can be negative.) The book's subscripted-labels display is gone.
15. Common logarithms, "Why the mantissa is the useful part" (R1 6): "the same digit string 437 but with k = 3 zeros immediately after the decimal point before the first non-zero digit, so its characteristic is −(3 + 1) = −4, ..."
16. Logarithmic equations, second paragraph (R2 2, with the optional softening): "Extraneous roots are common in this topic, so always check. The reason is structural: combining two logarithms into one (say, via the product law) can widen the domain: log₂(x − 1) + log₂(x + 1) needs x > 1, but log₂(x² − 1) is defined for x > 1 and for x < −1. The reverse step, splitting log(x²) into 2 log x, narrows the domain and can lose a root (see the third example in the part “Worked examples”)."
17. Logarithmic inequalities, mnemonic (R2 1): "multiplying (or dividing) an inequality by log_a b, where b > 1, behaves exactly like multiplying by a number that has the same sign as (a − 1). When a > 1, log_a b (with b > 1) is positive, so the direction is kept; when 0 < a < 1, it is negative, which is precisely why the direction reverses. (If 0 < b < 1 the sign of log_a b is the opposite, and for b = 1 it is 0, so check b first.) This is the same rule you already know ..."
18. Logarithmic inequalities, new paragraph after the mini-cases (R2 11 optional): "[NEW] If the base itself contains x, split the work into the two cases base > 1 and 0 < base < 1, apply the rule above in each case, and keep the conditions base > 0 and base ≠ 1 in the domain as well." (an actual block, begins with a bold [NEW] as the existing notes in EA do).
19. Worked example 6(b), last step (R2 8): "thirty 0s and then the digits 788 … (7.89 when rounded to three figures), confirming k = 30 independently." Recomputed: 2^−100 = 7.8886 × 10^−31.
20. Practice exercise 1 answer (R2 11): "x (for x > 0)".
21. Pitfall 6 (R2 12, the calculus nuance): "Correction: check which symbol a formula actually uses before substituting numbers (in calculus a plain log often means ln, so read the context)."
22. Last pro-tip (R2 7): "... and it underlies the proof of a^(log_b c) = c^(log_b a), an identity JEE Advanced questions return to (the book’s estimate from past papers, not official figures)." Replaces "used throughout JEE Advanced".

## extra-a.ts

23. Introduction, NEET note (R2 5), added sentence: "Questions often supply the needed logarithm values (for example log 2 = 0.3010), so recognising where a logarithm is hidden matters more than memorising its values."
24. pH question (R2 9): "10^0.7 ≈ 5.0, so [H⁺] ≈ 5.0 × 10⁻⁵ M" (was 5.01). Recomputed: 10^0.699 = 5.00, 10^−4.3 = 5.012 × 10⁻⁵.
25. Decibel note (R2 6): "so it is about 120 units wide, not “a few tens”."
26. Differentiation note (R2 10 optional): "The same derivative also comes from treating the base and the exponent one at a time and adding: varying the base with the exponent held fixed gives x·x^(x−1) = x^x, varying the exponent with the base held fixed gives x^x ln x, and the sum is x^x(1 + ln x)."
27. AP/GP note (R2 4): "As printed, the question asks for a logarithmic equation that its data do not produce; the answer above works a follow-up question instead." and at the end "and r ≠ 1 is needed before dividing by log₁₀ r."

## Founder decisions and notes

- Flag 14: "integer" versus R1's "whole number" (a negative characteristic is not a whole number in some usage). Reverting is a one-word change.
- Flag 1 of the intro (item 1): the Classes 8 and 9 claim is the reviewer's, unverified against a printed NCERT.
- Item 26 is an optional extra: the existing [NEW] note still says "the logarithm is needed either way"; the two-term route still produces ln x, so it stays true. Remove item 26 if it is too much for a note.
- Item 18 adds a new block (R2 called it optional, not an error).
- Not applied: R1's optional restoring of the book's italic emphasis words ("different", "all", "both") (house rule: only the markup the reader draws; the reviewer ruled it not an error). R2 13 (JEE Advanced tags on Examples 4 and 5 are difficulty tags, left as printed). R2 6's rock-concert remark (reviewer: no change). R2 3's Nernst remark about CBSE 0.059 (reviewer: not needed).
- Key points file `lib/revise/keypoints-mathematics-11-00.ts` untouched; if it repeats "Chapter 13", the other agent must fix it.
