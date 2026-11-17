# Mathematics Class 11 Chapter 0: keypoints helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T02:57:45Z)

I wrote `lib/revise/keypoints-mathematics-11-00.ts`, replacing the stub and keeping the `KEY_POINTS` export. `jest-serial.sh lib/revise` passes (137 tests) and `npx eslint` on the file is clean. I didn't run `tsc`. The `book-rules` test (em dashes in key points) was not run.

**Counts: 57 points in all, 43 in Topic 01 (index 0) and 14 in Additional topic A (index 1).**
- **Topic 01:** 25 Remember, 3 Don't mix up, 8 Common mistakes and 7 Exam shortcuts. The Common mistakes cover all seven book pitfalls, plus the Speed Trap on log(x²) and the negative-base trap.
- **Additional topic A:** 6 Remember, 2 Don't mix up, 3 Common mistakes and 3 Exam shortcuts.
- **`say` lines:** 7, all the book's own sentences. The chapter prints no mnemonics or cheat sheet, so these follow the models' fallback for chapters without them.

**Format:**
- **Fractions and exponents:** every fraction is stacked with `<frac>`, none nested. A slash is kept only inside sup/sub (such as a<sup>p/q</sup> and the exponent t/T) and in units.
- **Conventions:** variables are italic, there are no em dashes, and every point has a page-cite comment. The header comment lists each place the book is loose or wrong and says the point states the safe version.

**What the header records as loose or wrong, and how the points handle it:**
- **Graph of y = log_a x:** the points say only that it rises for a > 1 and falls for 0 < a < 1, going to −∞ or +∞ as x → 0⁺. The book's "slowly at first" and "negative side" claims are dropped.
- **Multiplying an inequality by log_a b:** the sign mnemonic holds only for b > 1, and a Don't mix up point says so.
- **Surds:** the definition names only √2 and ³√5, not 2 + √3.
- **Digit shift:** the "shifted three places" claim is replaced by the count of zeros after the point (k = 3).
- **Extraneous roots:** the reasoning is that the combined logarithm has the wider domain.
- **Reciprocal relation:** the point states that it needs b ≠ 1.
- **Left out:** the exam-frequency claims, the NCERT/Class 9–10 remark and the two "Chapter 13" references.
- **Addendum:** the points cover the NEET-has-no-Maths note, the 120 dB width, Nernst quoted as 1.16 V, N as nuclei, the x^x chain-rule route, and the AP/GP question (d = A, terms 3A, 6A, 12A, ratio 2).

**Unsure:**
- **Page cites:** these are the writers' section ranges (e.g. "pp. 15, 16"), not exact per-page folios, since I couldn't see the PDF. A reviewer could tighten them.
- **Point count:** Topic 01 is dense (25 Remember points) because its 11 sections each carry laws and derivations. I could trim it if you want it nearer the length of the other chapters.
- **Scientific notation:** the point repeats the book's loose "comparing exponents once the m parts are close" wording and carries no `why` line.
- **Cross-reference:** the 1/3 practice example is written log with a base of 1/3 as a slash inside the subscript, an exception to the stacking rule that I used on purpose.

---

## Report 2 (fixer, 2026-11-17T03:03:15Z)

I rewrote `lib/revise/keypoints-mathematics-11-00.ts` from 57 points to 27, and the tests pass. Jest ran as asked (2 suites passed, 4 tests passed, 147 skipped by the filter). eslint is clean after I removed 2 unused constants, but I re-ran only eslint after that fix, not jest.

**Counts, before to after**

| | Remember | Don't mix up | Common mistakes | Exam shortcuts | Total |
|---|---|---|---|---|---|
| Topic 01 | 25 to 10 | 3 to 2 | 8 to 3 | 7 to 3 | 43 to 18 |
| Additional A | 6 to 5 | 2 to 1 | 3 to 1 | 3 to 2 | 14 to 9 |

For comparison, the model chapters have about 12 points for Topic 0 in Chapter 14, 9 in Chapter 12 and 8 in Chapter 06, and 8 to 10 for their Additional-style topics. Topic 01 here is still above that because it covers eleven sections.

**Changes to match the corrected chapter text**
- **Graph of log_a x:** it hugs the y-axis without touching it, going to −∞ for a > 1 and +∞ for 0 < a < 1. For a > 1 it rises steeply near 0 and then ever more slowly. This now sits in the inequality point.
- **Identities and reciprocal:** the three immediate identities are in the laws point. The reciprocal relation now says it needs b ≠ 1 (stated as the change-of-base point's reciprocal clause).
- **Characteristic and mantissa:** the characteristic is the greatest integer not exceeding log N, with 0 ≤ mantissa < 1. The bar-notation reading rule is merged in.
- **Scientific notation:** compare exponents first, and the mantissa-like part only when the exponents are equal.
- **Sign mnemonic:** it holds only for b > 1. For 0 < b < 1 the sign flips, and for b = 1 it is 0.
- **Domain and extraneous roots:** combining logarithms can widen the domain, and splitting log x² into 2 log x narrows it and can lose a root.
- **Digit counting:** the shortcut now gives 2^−100 as thirty 0s then 788.
- **Log convention:** in calculus and many JEE Advanced questions a plain log can mean ln, so the question or its options decide.
- **Binomial surd:** 2 + √3 is named a binomial surd, not a surd.
- **Nernst and decibel:** the Nernst result is quoted as 1.16 V, and the decibel scale is about 120 units wide (not "a few tens").
- **pH:** 10^0.7 is about 5.0, so [H⁺] is about 5.0 × 10⁻⁵ M.
- **Chapter numbers:** no point names a chapter number, so there is no "Chapter 13".
- **Exam labels:** I added no exam-year or frequency claims.
- **AP/GP question:** kept as a mistake point, saying logarithms enter only in the follow-up.

**What I cut and why.** Everything below was a restatement or a rule another point already carries.
- **Topic 01, merged away:**
  - rational exponents and the positive-base reason, now one clause in the laws point
  - like surds and the three-surd case, now in the surds-and-rationalise point
  - the characteristic's two rules and the digit count, now one point, plus a shortcut
  - the mantissa-depends-on-digits point
  - reading common and natural logarithms
  - the standalone domain-first, modulus, product-split and remove-the-logarithm-direction mistakes
  - the (−8)^(2/6) mistake
  - the surd-reduction and negative-fractional-exponent shortcuts
  - the GP-to-AP shortcut
  - the verify-by-substitution shortcut, now a clause in the extraneous-roots mistake
- **Additional A, cut:**
  - the exam-setting mixup
  - the Nernst and decibel mistakes, now folded into their Remember points
  - the half-life shortcut, now in the half-life why line
  - the separate limit and derivative point, now in the log-differentiation point

**Kept:** all 6 `say` memory lines, and a `why` line wherever one existed before. Shortened `why` lines are 2 of the 3 shortcuts in Topic 01 and the Nernst, half-life and log-differentiation points. Cites are tightened to exact folios, for example p. 10, pp. 10, 11, p. 14, pp. 16, 17 and p. 24; the index points, which the book places on p. 10, are now cited at p. 10 instead of pp. 10, 11. The header comment is rewritten with the new counts, the list of corrections and the list of cuts. The file has no em dashes.
