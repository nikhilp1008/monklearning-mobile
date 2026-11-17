# Writer 2 report: Mathematics 11 Chapter 0, Additional topic A (Addendum P)

File: content/textbooks/math-11-00/extra-a.ts (only file edited).

## Boundaries
- Addendum P starts at the TOP OF p. 23 (not p. 22) and ends at the foot of p. 24 (end of chapter). p. 22 holds only the main chapter's Pitfalls and Pro-Tips (Topic 01). The chapter file's comment "pp. 22 to 24" is off by one page. Confirmed on page images.
- Errata (pp. 1238 to 1260): no entry for Chapter 0 or Addendum P (only "simplified surd" appears, unrelated, line 782 of the dump; Chapter 0 is not listed).

## Counts
1 topic (n 'A', extra true, title "Where Logarithms Actually Show Up in JEE and NEET": "&" written "and", em dash/prefix dropped), 7 parts (Introduction; Chemistry: pH; Chemistry: the Nernst equation; Physics: sound intensity in decibels; Physics: radioactive decay and half-life; Mathematics: limits and derivatives; Mathematics: AP/GP problems), 6 Representative Questions as `ex` blocks (tag "Representative question", ans '' because the book prints no separate result line; the working stays in the step), no MCQs, pitfalls or practice. kalam = the book's first sentence.

## Figures
No drawing. PyMuPDF get_drawings: p. 22 = 3, p. 23 = 6, p. 24 = 12 shapes, all page rules and the boxes round the Representative Questions (checked on the images). No fig blocks.

## Book errors and loose claims (page, exact quote), all copied as printed with a [NEW] note beside
1. p. 23, intro: "and JEE assumes you recognise them on sight in every one of these settings" and title "JEE & NEET": NEET has no Mathematics paper, so the two Mathematics settings are not NEET maths. [NEW] note added. (The "every one of these settings, with no reminder" claim itself is kept, not annotated; it is over-general but not checkable.)
2. p. 23, decibels: "into a scale a few tens of units wide": the book's own "about twelve orders of magnitude" gives 12 x 10 = 120 dB (0 dB to about 120 dB at 1 W/m2). [NEW] note added.
3. p. 23, Nernst: "= 1.10 + 0.0591 = 1.1591 V": arithmetic right (0.02955 x 2 = 0.0591), but 5 s.f. from 1.10 V data; constant's unit (volt) and n not stated. [NEW] note: 0.0591 is in volt, n = electrons transferred, quote 1.16 V.
4. p. 23, half-life: "N = N0 (1/2)^t/T ... fall to exactly half its value" then "10% of its initial activity" with "N/N0": N is number of nuclei, not activity. [NEW] note: activity is proportional to N, same ratio.
5. p. 24, derivatives: "a variable base and a variable exponent sitting together have no direct differentiation rule at all": over-general (x^x = e^(x ln x) and the chain rule). [NEW] note added.
6. p. 24, AP/GP question: "show that the terms of the GP form an equation solvable using the laws of this chapter, and state which law is used." The printed answer never shows this or names a law for the printed question; it says the condition is "an ordinary algebraic condition, not yet a logarithmic one" and then answers a different (hypothetical) question. [NEW] note: works the algebra (d(d - A) = 0, d = A, terms 3A, 6A, 12A, ratio 2) and says the laws enter only in the follow-up.
7. p. 24, same answer: "which Section 8's base-direction rule then solves": that rule is about the base of the logarithm; here the base is 10 (> 1), and the direction depends on the sign of log10 r when dividing. [NEW] note added (also a, r, N > 0).
No JEE/NEET frequency, share or exam-year claim appears in Addendum P, so none were labelled or dropped.

All arithmetic recomputed and correct: pH 3; 10^-4.3 = 10^-5 x 10^0.7, 10^0.7 = 5.01, [H+] ~ 5.0 x 10^-5 M; 8.314 x 298 x 2.303 / 96485 = 0.05913 ~ 0.0591; E = 1.1591 V; beta = 100 dB; t/T = (-1)/(-0.3010) = 3.322 ~ 3.32 (2^3.32 ~ 10); d/dx x^x = x^x (ln x + 1); A+2d, A+5d, A+11d ... as above.

## Changes to the book's wording (all listed)
- Em dashes removed: intro "first glance — and" -> comma; Nernst "mol-1 — a substitution" -> comma; "capture" sentence "value — exactly" -> colon; decibels "range — audible ... magnitude — into" -> brackets; half-life "half-life — the time" -> comma; "3.32 half-lives — a little over three full halvings — to fall" -> commas; "no direct differentiation rule at all — the logarithm" -> colon; AP/GP "log c — so" -> comma; "(A+5d)^2 = ... (A+11d) — an ordinary" -> colon. Run-in headings (Chemistry — pH etc.) became part titles with a colon, bold labels "Representative Question." and "Answer." dropped (tag and step).
- Cross-references to the main chapter (assumed names, the other writer's part titles are not yet in the repo, please reconcile): "Section 4's laws" -> "the laws in Topic 01's part on the laws of logarithms"; "Sections 3-7 above" -> "Topic 01's parts from the definition and domain of a logarithm through logarithmic equations"; "Section 4" (product and power laws) -> "Topic 01's part on the laws of logarithms"; "Section 8's base-direction rule" -> "the base-direction rule of Topic 01's part on logarithmic inequalities". "this chapter", "Chapter 12" kept.
- Layout only: Nernst equation and the 8.314 x 298 x 2.303 / 96485 line, and the half-life, y = x^x working chains, each put on their own lines with <br> (book had them inline).
- Fractions stacked where the book printed a slash: I/I0, 10^-2 / 10^-12, N/N0, (1/2) base, "1/2" in "clean power of 1/2", t/T (in the working). Slash kept (exception): the exponent t/T in N = N0 (1/2)^(t/T) (inside a sup), and units mol/L, W/m2.
- "E°": written with the degree sign after italic E (house form E°).
- Title "JEE & NEET" -> "JEE and NEET" (ampersand to "and", as part titles).

## Exceptions / could not check
- No exceptions beyond the above. Not checked: whether the other writer's Topic 01 part titles match my wording; the chapter file comment says Addendum P is pp. 22 to 24 (it is 23 to 24).

## Checks
`jest-serial.sh ... -t "Mathematics 11 Chapter 0|the text of every book chapter"`: 2 suites passed, 25 tests passed. `npx eslint content/textbooks/math-11-00/extra-a.ts`: clean. No tsc, whole jest, git or subagents.
