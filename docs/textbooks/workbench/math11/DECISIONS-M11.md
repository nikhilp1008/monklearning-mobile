# Mathematics 11: founder decisions

1. (2026-11-10) **Every fraction stacked**, numerator over denominator, never `a/b` on one line and never `½`.
   Written `<frac><num>…</num><den>…</den></frac>`, drawn by `components/textbook/markup.tsx` (fracRun).
   Founder: "while you are writing any fraction, write it properly, like a/b … not in a single line."
   Physics to follow later, when the founder says.
2. (2026-11-10, coordinator's default, shown to the founder) **Layout of a chapter with a supplement and a
   Round 2 addendum:** the main chapter's sub-topics are Topics 01–0N; a "New Subtopic" in the supplement is the
   next Topic (Ch 1: Topic 05), placed after the others; every Addendum is an Additional topic with the book's own
   letter (Ch 1: A–H from the supplement, I–M from Round 2); an addendum set's closing cheat sheet is the last part
   of its last addendum.
3. (2026-11-10) **The book is the October 2026 edition** (`math11/math11.pdf`, 1260 pages, from
   Raasikh/monk-learning-api branch books-snapshot-2026-10-15, the same snapshot as Physics and Chemistry). Its
   errata's resolved entries are already in the text, as in the other books. The August copy in the app folder
   (`math11-aug22-OLD.pdf`, 1094 pages, figures only described, errata not applied) is never used. The October
   edition adds a Chapter 00 "Basic Mathematics — Indices, Surds and Logarithms" (pp. 10–24). **Founder (2026-11-10): skip it for
   now** (no shelf row known; not built, not raised with Raasikh).
5. (2026-11-10) **Chapter 1 reviews (rm1a, rm1b, rm1c): "Everything, optional included".** Every flag applied as the
   reviewer proposed, including: the three-set inclusion–exclusion formula becomes a formula block (on the Formula
   sheet); every card gets legend lines for its symbols; the exam-frequency claims "recurred for decades" (Topic 05)
   and "returned to for four decades" (Additional A) get the estimate label like Topic 04's; "above" page-pointers are
   reworded; NCERT's ⊂ convention noted on the proper-subset row. Not changed (reviewers ruled no error): Additional L's
   "m ≥ 0", Topic 05's empty index set, Topic 01 Example 2's "The trap:" label.
6. (2026-11-10) **No em dashes in Mathematics** (founder: they read as AI-generated). Every em dash in the chapter text,
   key points and figure text is rewritten as a colon, commas, brackets, a semicolon or a full stop; the reader's own
   "symbol — meaning" in formula boxes becomes "symbol: meaning" for Mathematics (BlockCtx.noDash). Enforced by
   book-rules. Physics and Chemistry later, when the founder says.
7. (2026-11-10) **Chapter 2 plan shown to the founder:** Topics 01–03 main chapter, Topic 04 = the supplement's Subtopic 04,
   six additional topics; three writers per round, then diagrams, then key points; three expert reviewers. Brief
   `math11/briefs/MAC-BRIEF-M11-02.md`. The old chapter is backed up as `monk-books/old/old-math-11-02-relations.ts`.
8. (2026-11-10) **Chapter 2's "Addendum to Subtopic 03: Finding the Range" (pp. 146–152) is slotted into Topic 03** where the
   book says to read it: Procedure E after Procedure D, Examples 6–7 after Example 5. Its heading and reading instruction
   are not copied.
9. (2026-11-10) **Chapter 2's additional topics keep the book's letters F–K** (no A–E: the letters continue from the
   supplement's Procedure E, and each addendum holds the procedure of its own letter). book-chapters.test allows a chapter's
   extras to start at a later letter (FIRST_EXTRA).
10. (2026-11-10) **Chapter 2 reviews (rm2a, rm2b, rm2c): "Everything, optional included".** Every flag applied as the reviewer
    proposed (reports-02/rm2a.md, rm2b.md, rm2c.md). Also: the drawings F-d1 and H-d1 mark points ON the graph with FILLED dots
    (the book draws hollow rings; in this chapter hollow means "not included"); the book's cross-chapter example numbers
    ("Example 12(d)", "Example 19 shows") are reworded to what the reader shows ("the previous solved example, part (d)"); Topic
    04's Mumbai stations become a hypothetical ("it can happen that A is within 5 km of B …"); the cricket score "180/4" is
    written with an ordinary slash and exempted from the fraction check (not a fraction).
11. (2026-11-10) **Chapter 2 new wording approved** (.claude/textbook-review/new-text-math11-ch2.md). **Step labels: the book's
    numbers everywhere** (the I–K renumbering by fx2c undone; "Step 0" stays even though the reader's counter starts at 1, as in
    Sets). **Card "Number of relations": the book's note is kept** in the text although the card's new second line repeats it.
12. (2026-11-10) **Chapter 3 Trigonometric Functions layout:** Topics 01–12 in one numbered list (01–06 main chapter, 07–08
    supplement, 09–12 the "Additional Topics" part's subtopics), the book's own numbers.
13. (2026-11-10) **Chapter 3's closing "Topic D" is Additional topic D**, the book's letter (examples D1–D4 kept); book-chapters
    FIRST_EXTRA allows it. Brief `math11/briefs/MAC-BRIEF-M11-03.md`; old chapter backed up as `old/old-math-11-03-trigonometry.ts`.
14. (2026-11-10) **Chapter 3's "Addendum: Exercises for Product-to-Sum and Triple-Angle" (pp. 271–276, examples C1–C4,
    printed after Topic 08) is Additional topic C** (`extra-c.ts`, title "Exercises for Product-to-Sum and Triple-Angle",
    parts Introduction / Worked examples / Practice set), before Additional D; Topic 11's "Example C3 of the Chapter 3
    supplement" → "Example C3 of Additional topic C". FIRST_EXTRA for Ch 3 is now 'C'.
15. (2026-11-10) **Chapter 3 reviews (rm3a–rm3d, 91 flags): "Everything, optional included"**, as worded in reports-03/rm3a–d.md.
    D Practice 5 (negative base): the book's two answers kept with the reviewer's explanation and the note "if the base must be
    positive, only π/4" (rm3d flag 7 option a). Duplicate cards: Topic 05's kept; Topic 07's two blocks become plain lines (rm3d
    flag 22). Topic 06's "near-certain Board question" (NCERT §3.5 possibly dropped in the rationalised NCERT): kept as printed,
    listed for a check against a printed NCERT. "Correction:" set bold in every topic (as T07, T08, T11).
16. (2026-11-10) **Chapter 3 new wording approved** (.claude/textbook-review/new-text-math11-ch3.md). Display check fixed: measure.ts no longer splits fractions at closing tags; Chemistry 12 Ch 8 card 6 listed as seen-on-Android.
17. (2026-11-10) **Chapter 4 Complex Numbers and Quadratic Equations layout (as Ch 3, decision 12):** Topics 01–09 numbered (01–06 main, 07 supplement, 08–09 the Additional Topics part); its p. 397 introduction opens Topic 08's Exam relevance. Conjugate written with U+0305 after the letter (the house bar form). Brief math11/briefs/MAC-BRIEF-M11-04.md; old chapter backed up as old/old-math-11-04-complex.ts.
18. (2026-11-10) **Ch 4 Figures 4.7 and 4.8: the book's teal/terracotta sign bands are drawn as + and − signs above each stretch of the x-axis** (no grey bands, no key; founder). Other md4 departures as reported (no fills, filled roots, O added, chips per case).
19. (2026-11-10) **Chapter 4 reviews (rm4a, rm4b, rm4c): "Everything, optional included"**, as worded in reports-04/rm4a–c.md.
    Duplicate cards: one card each (rm4c section D): keep Topic 01's "Multiplicative inverse", Topic 03's "De Moivre’s theorem",
    Topic 05's "Cube roots of unity (the workhorse case)"; the other copies become plain lines (58 cards). Conjugate of a quotient on
    the T02 card: the w form (rm4a 16); T02 Practice 3 and T06 line equation as fractions of conjugates. Syllabus claims (polar form,
    quadratics with D < 0, T07 CBSE weights) kept as printed, listed for a check against a printed NCERT/CBSE.
20. (2026-11-10) **Chapter 4 new wording approved** (.claude/textbook-review/new-text-math11-ch4.md).
21. (2026-11-10) **Chapters 5 and 6 run together** (founder: "2 chapter at a time, carefully"); still at most 3 helpers at once.
    **Chapter 5 Linear Inequalities layout:** Topics 01–04 = Units 1–4 (pp. 415–450); Topic 05 = the supplement's Unit 5 (pp. 451–465),
    the supplement's introduction (p. 451) opening its Exam relevance; Additional topics A–F with the book's letters (Addenda A–C from
    the supplement, D–F from the Additional Topics part, whose p. 476 introduction is Additional D's "Introduction" part); each
    "Everything on One Screen" summary (pp. 475, 488) is the last part of Additional C and F. Brief MAC-BRIEF-M11-05.md; old chapter
    backed up as old/old-math-11-05-inequalities.ts.
22. (2026-11-10) **Chapter 5's "Unit 3, Section 5, Practice Exercise 3 — a boundary re-test" (p. 451) goes into Topic 03**, right after
    its Practice exercises part's answers (the book prints it at the start of the supplement).
23. (2026-11-10) **Chapter 6 Permutations and Combinations layout:** Topics 01–05 = Subtopics 01–05 (pp. 491–536); Topic 06 = the
    supplement's Subtopic 06 (pp. 537–557); the Additional Topics part's Addenda 07A–07D (pp. 558–579) are Additional topics A–D,
    "Addendum 07A" → "Additional topic A"; the p. 558 introduction and table are Additional A's "Introduction" part. Brief
    MAC-BRIEF-M11-06.md; old chapter backed up as old/old-math-11-06-permutations.ts.
24. (2026-11-10) **The stacked binomial coefficient** (n over r in tall round brackets, about 70 times in Chapter 6) is drawn by the
    reader as printed: written `<binom><num>n</num><den>r</den></binom>` (components/textbook/markup.tsx, like <frac> without the
    rule). ⁿCᵣ stays as printed: `<sup><i>n</i></sup><i>C</i><sub><i>r</i></sub>` (C italic or upright as the page sets it).
25. (2026-11-11) **Chapter 5 reviews (rm5a, rm5b, rm5c): "Everything, optional included"**, as worded in reports-05/rm5a–c.md, plus
    mk5's card fixes (P1, P3, P4, P5) and the coordinator's drawing flags (md5.md C1 italic variables, C2 Fig 5.6 ticks). The re-test
    (decision 22) stays, with rm5a's one-line rewording of its "Why this matters" sentence. Topic 05's NCERT sentence: rm5b's "NCERT
    Exemplar" wording. Duplicate cards: Topic 04's modulus card kept, Topic 05's "Standard results: constant right-hand side" becomes
    plain lines; "Squared forms" kept in both (different formulas). Syllabus claims (two-variable graphing in CBSE, the Miscellaneous
    Exercise "word problems") kept as printed, listed for a check against a printed NCERT/CBSE.
26. (2026-11-11) **Chapter 6 reviews (rm6a, rm6b, rm6c): "Everything, optional included"**, as worded in reports-06/rm6a–c.md, plus
    mk6's card fixes (C1–C12, with rm6c's main-line form for C10 and rm6b's two additions), incl. Rectangles + Parallelograms merged into
    one card and Topic 06's kickers "Union of two sets" / "Union of three sets". Topic 02's "Sory" (p. 502, four times) → "Sara". Duplicate
    cards: Topic 01's "Counting with repetition allowed" kept, Topic 02's "Repetition allowed" becomes a plain line. Syllabus claims (divisors
    and derangements in CBSE, circular permutations, NCERT Example 22's 49th vs 50th word) kept as printed, listed for a printed-NCERT check.
27. (2026-11-11) **Chapter 5 new wording approved** (.claude/textbook-review/new-text-math11-ch5.md). Chapters 5 and 6 are committed
    together (one commit each, pushed together) once Chapter 6 passes its Android re-check (founder).
28. (2026-11-11) **Chapter 6 new wording approved** (.claude/textbook-review/new-text-math11-ch6.md). The one stacked binomial drawn a
    line low on Android (Topic 06 MCQ 4 solution, p051-12: React Native measures that paragraph a line longer than it draws it) ships as a
    known issue, to fix next. Chapters 5 and 6 committed and pushed together.
29. (2026-11-11) **Chapters 7 and 8 run together** (founder: "go"), at most 3 helpers. **Chapter 7 Binomial Theorem layout:** Topics 01–07 =
    Subtopics 01–07 (pp. 581–623); Topic 08 = the supplement's new Subtopic 08 (pp. 645–657); Additional topics A–G with the book's letters:
    the supplement's Addenda A–C "to Subtopic 01/02/06" (pp. 624–644; founder: lettered, not slotted into their topics; each opening says
    which topic it extends) and the Additional Topics part's Addenda D–G (pp. 658–674); the supplement's p. 624 introduction and table open
    Additional A, the p. 658 one opens D. **Chapter 8 Sequences and Series layout:** Topics 01–08 = Units 1–8 (pp. 677–741), Topic 09 = the
    supplement's Unit 9 (pp. 742–757); Additional A–G with the book's letters (Addenda A–E pp. 758–771, F–G pp. 772–788). Briefs
    MAC-BRIEF-M11-07/08.md; old chapters backed up as old/old-math-11-07-binomial.ts, old-math-11-08-sequences.ts.
30. (2026-11-11) **Chapter 7 reviews (rm7a, rm7b, rm7c): "Everything, optional included"**, as worded in reports-07/rm7a–c.md, plus mk7's
    card fixes (K1–K13) with the reviewers' rulings. Duplicate cards: Topic 01's "General term" kept (Topic 02's a plain line; B's renamed
    "General term of a surd expansion"); **Vandermonde: Additional E's card kept** (where it is proved; Topic 04's becomes a plain line);
    Topic 08's Period 2 a plain line; F's absorption card gains the k-fold form; the rest kept. Cheat-sheet box titles: exam-scope words
    dropped in every topic (Topic 05's "|x| < 1" moves into its Series row). Topic 08's "CBSE board derivations" part → "Derivations and key
    procedures". Old NCERT numbers (pre-2023 edition) kept as printed and listed, with the other syllabus claims, for a printed-NCERT check.
    Roots written with a raised index, <sup>3</sup>√ (the reading font has no ∛ or ∜).
31. (2026-11-11) **Chapter 8 reviews (rm8a, rm8b, rm8c): "Everything, optional included"**, as worded in reports-08/rm8a–c.md, plus mk8's
    card fixes with the reviewers' rulings. Duplicate cards: Topic 05's means cards kept (Topic 04's "Relationship among the means" becomes
    plain text); Topic 01's sigma card kept (Topic 07's "Linearity of sigma" plain); Topic 07's products-two-at-a-time card kept (C's block made
    identical so the sheet drops it); **∑r⁴: Additional D's card kept** (where it is proved; Topic 07's becomes a plain line); G's AM-GM engine,
    Topic 02/03 pairs kept. Additional F's title "Recovering the nth term: from the sum, from a recurrence, and in the limit", its part
    "Method 1: from the sum to the nth term"; D's title keeps "∑ r⁴". The two "JEE Advanced" examples credited to JEE Main / AIEEE are retagged
    "JEE Main". Memory lines drop the "Golden habit:" / "One-liner:" labels (rm8c, optional). Syllabus claims kept as printed and listed.
    G1's answer "3 ⋅ <sup>3</sup>√3" (the ∛ font fix had glued 3 to the root index: 3³√3).
32. (2026-11-12) **Chapters 7 and 8 new wording approved** (.claude/textbook-review/new-text-math11-ch7.md, ch8.md); committed and
    pushed together. Reader changes shipped with them: long MCQ / practice answers split into short paragraphs (the misplaced binomial),
    a numerator with a subscript lifted, a denominator with a power dropped, fraction blocks at 1.25× line height, nested halves ≥ 10.5 px,
    Σ/∏ kept with their summand, a closing "|" before a no-break space joined, "&nbsp;" read as a space, empty table cells hidden.
33. (2026-11-12) **Chapters 9 and 10 run together** (founder: "go"), at most 3 helpers, emulator only on the founder's say. **Chapter 9
    Straight Lines layout:** the book's numbers kept: Topic 00 "Coordinate Foundations" is the app's opening topic ("Start here", n '00',
    as Physics 12), Topics 01–06 = Subtopics 01–06, Topic 07 = the supplement's Subtopic 07, Topic 08 = the Additional Topics part's
    Subtopic 08; **the book's Patterns 1–6 are Additional topics A–F** (Pattern N → Additional topic A…F; titles the book's words after
    "Pattern N —"). **Chapter 10 Conic Sections layout:** Topics 01–05 = the five unnumbered main sections, Topics 06–09 = the supplement's
    four units, Additional A–D = Addenda A–D (the book has four; the brief said three). Briefs MAC-BRIEF-M11-09/10.md; old chapters backed up in old/.
34. (2026-11-12) **Chapter 9 reviews (rm9a, rm9b, rm9c): "Everything, optional included"**, as worded in reports-09/rm9a–c.md, plus mk9's
    card fixes with the reviewers' rulings (incl. the parallel-pair condition g² ≥ ac AND f² ≥ bc). Duplicate cards: Topic 00's Centroid kept
    (Topic 07's block made identical so the sheet drops it); area, distance and bisector cards all kept and named apart. **Determinants: the
    expanded form only** (the book's printed expansion; worked examples name the rows in words). Topic 08's "CBSE Board Level" / "[CBSE]" tags
    → "Foundation Level" / "[Foundation]". **Topic 06's Pitfall 3 kept as printed**; its Key formulas line becomes "don't guess at the image's
    coefficients (substituting the reflection map does work: Additional topic F)" (rm9c A4), not rm9b's Pitfall rewrite. The old "5.1 / 5.2 /
    6.1" example tags dropped; "Chapter 11" for conics → Chapter 10. Nested fractions in numerators written as the flat single fractions the
    reviewers gave. Syllabus claims (JEE dropping family of lines, bisectors, pair of lines; rationalised NCERT) kept as printed and listed.
35. (2026-11-12) **Chapter 10 reviews (rm10a, rm10b, rm10c): "Everything, optional included"**, as worded in reports-10/rm10a–c.md, plus
    mk10's card fixes with the reviewers' rulings ("Standard equation of the circle / of the ellipse / of the hyperbola"; legends added;
    conditions moved from notes into the main lines). **Topic 07 gains two cards, "Condition of tangency" and "Director circle"** (rm10b's
    house-form legends); its tables stay. **Additional C's two determinants in the expanded form**, rows named in words (as decision 34).
    Figure 10.2's ∠AQB kept as printed. Topic 06's 12 nested fractions flattened. Syllabus claims (CBSE tangents/normals, the NCERT
    Miscellaneous claim, the Lamé quotation) kept as printed and listed.
36. (2026-11-13) **Chapters 9 and 10 new wording approved** (.claude/textbook-review/new-text-math11-ch9.md, ch10.md), incl. Chapter 10's
    reworded "beyond Class 11 scope" notes; committed and pushed together. Reader change shipped with them: primes ′ ″ ‴ drawn in STIX Two
    Math (PILOT_MATH). Every chapter file's no-break space is the real U+00A0 (`const NB = ' '`).
37. (2026-11-13) **Chapters 11 and 12 run together** (founder: "go"), at most 3 helpers. **Chapter 11 Introduction to Three Dimensional
    Geometry:** Topics 01–03 = Subtopics 01–03 (pp. 1010–1036); the book's Patterns 1–8 = Additional A–H as Chapter 9 (Patterns 1–6 the
    supplement's "Addendum to Chapter 11: Missing Problem Patterns", pp. 1037–1051, its opening = A's Introduction, its "Addendum Cheat Sheet"
    p. 1051 = F's last part; Patterns 7–8 the Additional Topics part, pp. 1052–1059, its opening = G's Introduction). **Chapter 12 Limits and
    Derivatives:** Topics 01–05 = Subtopics 01–05 (pp. 1062–1097); Topic 06 = the supplement's Subtopic 06 (pp. 1098–1113, the supplement's
    opening = Topic 06's Exam relevance start); Additional A–B = the supplement's Addenda A–B (pp. 1114–1123); Topic 07 = the Additional
    Topics part's Subtopic 07 (pp. 1124–1137, the part's opening = Topic 07's Exam relevance start). Layout follows decisions 29 and 34, no
    new choices. Briefs MAC-BRIEF-M11-11/12.md; old chapters backed up in old/.
38. (2026-11-13) **Chapter 12 reviews (rm12a/b/c), founder: "everything, optional included".** Figure 12.6's added chip "Close to
    x = 0" kept (caption ours); Figure 12.1's jump panel both ends hollow as printed; Additional A3 introduces t = h/x one step early
    (no fraction inside a numerator); NEW cards: A's four standard functional equations (rm12c's text) and B's two conditions (rm12c's
    labels, replacing the two Condition paragraphs). Reviewer rulings adopted: worked-example question lines plain (not bold) in the
    whole chapter; one-sided limits `<sup>+</sup>`/`<sup>−</sup>` everywhere, also in lim subscripts; "Chapter 12 at a Glance" stays as
    Topic 05's last five parts (formula sheets plain text); ■ for □ (or the word "box"); every fraction inside a numerator rewritten
    as the reviewers give it (÷ forms in Topic 06 accepted); L’Hopital "Class 12" claims reworded (NCERT teaches it in no class);
    other syllabus claims kept as printed and listed.
39. (2026-11-13) **Chapter 11 reviews (rm11a/b), founder: "everything, optional included".** Additional E titled "The JEE
    Extensions" ("Promised" dropped); every fraction inside a numerator rewritten as the reviewers give it; duplicate cards: Centroid
    kept in Topic 03, section-formula cards in Topic 02, incentre in Additional E (the other copies plain lines; 16 cards).
    md11's drawing departures accepted (one oblique 3D frame, invented T and P, outlines). Syllabus claims kept as printed and listed.
40. (2026-11-13) **Chapters 13 and 14 written while Ch 11/12's Android shoot runs** (founder: "start the next two chapters as well …
    without interrupting the current session"). Writers write into their work folders (Metro would reload the app on the emulator
    if a chapter file changed mid-shoot); the coordinator installs the files after the shoot, then the writers run their tests.
    **Ch 13 Statistics:** Topics 01–03 = Subtopics 01–03 (pp. 1139–1167); Additional A–B = the supplement's Addenda 13.1–13.2
    (pp. 1168–1179, its cheat sheet p. 1179 = B's last part); Additional C = the Additional Topics part's Addendum 13.3 (pp. 1180–1187,
    its opening = C's Introduction). **Ch 14 Probability:** Topics 01–03 (pp. 1188–1214); Additional A–B = Addenda 14.1–14.2
    (pp. 1215–1226, cheat sheet = B's last part); Additional C–D = Addenda 14.3–14.4 (pp. 1227–1237, the p. 1227 opening and its
    table = C's Introduction; "Cheat Sheet Additions" = D's last part). Book numbering "Addendum 13.N", "Example SN", "Result N"
    kept as printed except Addendum → Additional topic X. Errata start p. 1238.
41. (2026-11-13) **Chapter 13 reviews (rm13a/b): the founder's standing rule (12 Nov, "I select whatever you recommend") applies —
    everything, optional included, every reviewer recommendation taken.** Grouped median un-nested (MEDIAN/MED = ℓ + (N/2 − C) × h/f,
    TFR = (N − 2C)/(2f)); new cards "Median of grouped data" (Topic 01), "Median of a discrete frequency distribution" (A), "True
    class boundaries" (C), optional shift card; duplicates: C.V. and combined variance kept in Topic 03, the transformation card kept
    in B (renamed "Mean and variance under yᵢ = axᵢ + b"), Topic 02's copies plain lines (B's "in a formula box" sentence adjusted);
    "CBSE Boards" claims kept as printed and listed (A's past-paper claim reworded); "marks" kept; part title "Derivations and key
    procedures" (as decision 30); ₹ in 13.1, Ramesh's two 30s one dot as printed. **Chapter 14 drawing:** C-d1's filled/hollow dots
    for girls/boys kept as printed (labelled).
42. (2026-11-13) **Chapter 14 reviews (rm14a/b): the founder's standing rule ("I select whatever you recommend") — everything,
    optional included, every reviewer recommendation taken.** φ kept (as printed); italic coin/ball letters kept; figures placed
    where they illustrate the text; the sub-inside-a-sub under ∑ kept; Class 12, NCERT and "CBSE Boards" claims kept as printed and
    listed; Example 3's unused B kept; mk14's cards ("For equally likely outcomes:", legends, #7 renamed, #14 reworded, C's new card
    "Selection then arrangement" if rm14b agrees). Fractions with a long half start their own line (lesson of Ch 12's Android check).

41. (2026-11-17, Raasikh asked for it) **Chapter 00 "Basic Mathematics: Indices, Surds and Logarithms" (book pp. 10 to 24) is now built**,
    reversing the 2026-11-10 "skip it for now" in item 3. Layout: the chapter has no subtopics, so it is ONE Topic 01 (the
    opening paragraph as the Introduction part, Sections 1 to 11 as parts; Section 11 runs on to the foot of p. 22) and
    the book's "Addendum P: Where Logarithms Actually Show Up in JEE and NEET" (pp. 23 to 24) is Additional topic A. Shelf key
    'mathematics|11|basic mathematics' (the catalogue's order-0 row), `OPENS_ON_CHOICE` index 0. Reports and new wording:
    reports-00/ (writer-1/2, review-R1/R2, new-text-F1.md). No Chapter 0 entry exists in the errata (pp. 1238 to 1260). The
    chapter draws no figures and has no formula boxes, so the Formula sheet has no cards for it. Open for the founder: the
    "integer" (greatest integer not exceeding log N) wording for the characteristic, the NCERT class claim ("Classes 8 and 9"),
    and two optional additions (the variable-base paragraph in Section 8 and the x^x two-term route in Additional A).
