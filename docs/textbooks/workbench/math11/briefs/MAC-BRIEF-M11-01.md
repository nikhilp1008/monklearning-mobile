# Brief: Mathematics Class 11, Chapter 1 Sets, rebuilt word for word from the Master Reference book

The first Mathematics chapter. Physics 11, Physics 12, Chemistry 11 and Chemistry 12 are finished the same way.

**Read, in order:**
1. `/Users/nikhi/Developer/monk-books/BRIEF-12-07-08.md`, the whole file: the product, word for word, ownership, the block system, topic fields, parts, which block for which book element, the exceptions, checking and the report. Ignore its page map, file names, ids and physics notation. **Its fraction rules (one-line `a/b`, brackets round a side, `½`) are replaced by "FRACTIONS" below.**
2. `/Users/nikhi/Developer/monk-books/chem11/briefs/MAC-BRIEF-C11-09-10.md`: its "Figure placement", "Lessons from the Physics 12 and Chemistry 7–8 reviews", "The automatic checks" and "Your report" sections (ignore its page map and chemistry notation).
3. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-10.md`: its "GO EASY ON THE MAC" section (read "Chemistry 12 Chapter 10" as "Mathematics 11 Chapter 1") and its "Lessons from Chapter 9".
4. `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-11.md`: its "Lessons from Chapter 10".
5. This file. **Where they disagree, this file wins.**

**Your closest models** (no Mathematics chapter is done yet): Physics 11 Chapter 9 for a sub-topic of eight sections as parts (`content/textbooks/phy-11-09/`), and Chemistry 12 Chapter 10 for the latest house forms (`content/textbooks/chem-12-10/*.ts`, `lib/diagrams/chemistry-12-10.ts`, `lib/revise/keypoints-chemistry-12-10.ts`). Read one topic file first. The OLD Sets chapter (`/Users/nikhi/Developer/monk-books/old/old-math-11-01-sets.ts`) is an earlier rewrite we are replacing: never copy from it. Founder decisions: `math11/DECISIONS-M11.md`.

## FRACTIONS (the founder's rule for Mathematics, 2026-11-10). The most important rule in this brief.

The book prints fractions stacked, numerator over denominator. **So does the app: every fraction is written**

    <frac><num>numerator</num><den>denominator</den></frac>

and the reader draws it stacked with a rule between (`components/textbook/markup.tsx`, checked on Android). Never `a/b` on one line, never `½`.

- **Every fraction**, wherever it is: prose, formula `main` and `legend`, derivation steps, worked-example questions, steps and answers, MCQ options, nudges and solutions, practice answers, tables, cheat sheets. Also where the book itself printed a slash (a stray "1/2" in text): stack it and list each in your report.
- **No brackets added round a half**: the stack groups it. `(a + b)/2` is `<frac><num><i>a</i> + <i>b</i></num><den>2</den></frac>`. Brackets that are part of the maths stay (`<frac><num><i>n</i>(<i>E</i>)</num><den><i>n</i>(<i>S</i>)</den></frac>`).
- **Inside a half, write normally**: `<i>…</i>`, `<sup>`, `<sub>`, √, and a fraction inside a fraction (nest the tags: `<frac><num>1</num><den>1 − <frac><num>1</num><den>3</den></frac></den></frac>`).
- **A mixed number** `2½` is `2<frac><num>1</num><den>2</den></frac>`. **A root over a fraction** `√(a/b)` is `√(<frac>…</frac>)`, the bracket kept.
- **Exceptions, keep the slash and list each in your report:** a fraction inside `<sup>` or `<sub>` (`<i>x</i><sup>1/2</sup>`, too small to stack); plain-text fields (topic `title`, `kalam`, part titles, example `tag`, table and defgrid titles), which take no markup.
- **Not fractions, leave alone:** a ratio written with a colon (`2 : 3`), words with a slash (`and/or`, `km/h`), dates.
- No spaces right inside the tags (`<frac><num>1</num><den>2</den></frac>`, never `<frac> <num> 1 …`). The tags must be exactly these three, every `<frac>` holding one `<num>` then one `<den>`.
- The checks enforce it: `book-rules` fails on a one-line fraction in a Mathematics chapter (a slash with a digit, an italic letter, a bracket, π or √ on both sides, outside a raised run), on `½`-type characters, and on a malformed `<frac>`.

## Where things are
Book `/Users/nikhi/Developer/monk-books/math11/math11.pdf` (Class 11 Mathematics Master Reference, the October 2026 edition from the co-founder's books snapshot, 1260 pages; **PDF page = the bottom folio**; each page also prints a small chapter-own page number, which the errata uses). Text dump (prose only; maths, fractions, sub- and superscripts scrambled): `math11/math11.txt`. **Read every formula, fraction, power, subscript and symbol from the page** (the Read tool on the PDF with `pages`, a few at a time; render with `pdftoppm -r 110 -f N -l N -png` only where unclear, and delete the PNG). **Never use `math11-aug22-OLD.pdf`** (an older printing with different pages). Work folder `math11/work-<your-name>/`. Your file exists as an empty stub, already wired in.

## ERRATA (pp. 1238–1260)
As in Physics and Chemistry: entries marked "(resolved)" are already in the text (copy the page as printed); "Remaining known issues in this printing" (pp. 1258–1260) lists nothing for Chapter 1. Chapter 1's two resolved entries, for your information: Subtopic 01's Example 2 is now a multi-answer item ("which of the following are empty sets (more than one may apply)", answers (a) and (d)): copy it as printed; and Subtopic 04's production note is gone. Report anything on your pages that still looks like a defect (raw LaTeX such as `A \subseteq B`: write the symbol ⊆; a build note; a self-correction left in the text), with page.

## Page map, Chapter 1 Sets (pp. 25–100). Confirm every boundary on the page images and report any difference.
p. 25 is the chapter's title and contents (not copied). Each sub-topic opens with an "Exam Relevance:" box, then the usual eight sections, "Section 1: Concept Intuition" to "Section 8: Cheat Sheet Box". The Exam Relevance box is the topic's first part, titled "Exam relevance"; the sections are the next parts (BRIEF-12-07-08 "Parts"), titled from that sub-topic's own section names (Subtopic 02's "Key Definitions, Notation & Formulas" → "Key definitions, notation and formulas"; Subtopic 05's "CBSE Board Derivations and Key Procedures" → "CBSE board derivations and key procedures").
- Topic 01 "Sets and their Representations": pp. 26–33 (Figure 1.1, caption p. 28, figure p. 29).
- Topic 02 "Subsets, Power Set, and Universal Set": pp. 34–40 (Figure 1.2, pp. 37–38).
- Topic 03 "Venn Diagrams and Set Operations": pp. 41–48 (Figure 1.3, pp. 41–42; Figure 1.4, pp. 45–46).
- Topic 04 "Cardinality of Unions and Practical Problems": pp. 49–56 (Figure 1.5, pp. 50–51).
- Supplement, p. 57: its opening text (introducing "Part 1 — Addendum A to H" and "Part 2 — Subtopic 05") is the first paragraph(s) of Additional topic A's "Introduction", with "Part 2 — Subtopic 05" and the like rewritten to our names (Topic 05). The heading "Part 1 — Addendum to Subtopics 01–04" is not copied.
- Additional topics (title = the text after "Addendum X — ", exactly; confirm any part after a line break): A "Is this set finite or infinite?" (57–59), B "Subsets of a prescribed size" (59–61), C "The iterated power set" (61–62), D "Unbounded (infinite) intervals" (62–63), E "Counting ordered pairs of subsets" (63–65), F "Three-circle Venn shading and visual proof" (65–67; Figure 1.6, pp. 65–66; Figure 1.7, pp. 67–68, check whether 1.7 belongs to F or G by where the text that calls it stands), G "Operations on the standard number systems" (67–70), H "Bounds on an unknown overlap" (70–73). Addenda often end and start on the same page: check where each really ends. Their parts follow the book's own run-in headings (Introduction, Method, Worked examples, Practice …), as in Chemistry 12's additional topics.
- Topic 05 "Indexed Families of Sets, Generalised Laws, and Double Counting": pp. 73–86 (the book's "Subtopic 05 — …" in the supplement's "Part 2 — New Subtopic"; that heading is not copied; confirm the title's end after the line break; Figure 1.8, pp. 77–78; Figure 1.9, pp. 81–82). **It is Topic 05, placed after Topic 04**, before the additional topics (decision 2).
- "Chapter 1: Sets — Additional Topics" (the Round 2 addendum), p. 87: its opening text ("Subtopics 01-04 and the Supplement … together cover …", "This addendum closes that gap …") is the first paragraph(s) of Additional topic I's "Introduction"; its heading is not copied. Additional topics I "Sets whose elements are sets" (87–90; its "Figure 1" on p. 88), J "Power set laws" (90–92), K "The four equivalent forms of <i>A</i> ⊆ <i>B</i>, and the cancellation traps" (92–95; the title is plain text: "The four equivalent forms of A ⊆ B, and the cancellation traps"), L "Proving containment between algebraically described sets" (95–97), M "The algebra of set difference" (97–100). "Cheat sheet for this addendum" (p. 100) is the last part of M, titled "Cheat sheet: Additional topics I to M" (new wording, list it).
- Chapter 2 starts on p. 101: stop before it.
- Cross-references: "Subtopic 0N" → "Topic 0N" (same numbers; Subtopic 05 → Topic 05); "Addendum X" → "Additional topic X"; "Section N" of the same sub-topic → its part's name ("the Worked examples part"); "Part 1 / Part 2" of the supplement → "Additional topics A to H" / "Topic 05"; "the Supplement" → "Additional topics A to H and Topic 05"; "this addendum" in I–M's introduction → "Additional topics I to M"; "the main chapter" stays; "Figure 1.N" stays (the figure is shown with its number). NCERT example and exercise numbers ("Example 11", "Exercise 1.3 Q3") are copied as printed and listed. List every change.
- **Exam citations:** no exam years ("a recent JEE Main paper"); a share or frequency the book gives is labelled "the book's estimate from past papers, not official figures". List every dated citation and every share with page and exact words.

## Files and ids
- `content/textbooks/math-11-01/topics-1-2.ts` (Topics 01–02), `topics-3-4.ts` (03–04), `topic-5.ts` (05), `extras-a-h.ts` (A–H), `extras-i-m.ts` (I–M). Each exports `TOPICS`. The chapter file `content/textbooks/math-11-01-sets.ts` joins them (01–05, then A–M) and shows a placeholder topic only while every file is empty: never edit it.
- `topic` index = position in the chapter's topics array: **Topics 01–05 = 0–4, A–H = 5–12, I–M = 13–17.**
- Diagrams `lib/diagrams/mathematics-11-01.ts` (`DIAGRAMS_MATHEMATICS_11_01`), filed as `'mathematics|11|1'`. Key points `lib/revise/keypoints-mathematics-11-01.ts` (`KEY_POINTS`).
- **Figure ids:** numbered figures `m11-01-fig-1.1` … `m11-01-fig-1.9`; Addendum I's own "Figure 1" and any unnumbered drawing `m11-01-<topic n>-d<k>` (topic n = `01` … `05` or `A` … `M`; k counts that topic's unnumbered drawings in page order from 1), so Addendum I's is `m11-01-I-d1`.

## Figures
Numbered Figures 1.1–1.9 and Addendum I's Figure 1 are drawn in the book. As in Chemistry ("Figure placement"): the caption often prints with "(see next page)" a page before the figure; the `fig` block goes where the figure is called in the text, the caption is the book's without "Figure 1.N" and "(see next page)". Count the vector shapes on every page 25–100 for unnumbered drawings and report which pages hold none.

## Mathematics notation (the house form for every Mathematics chapter)
- **Italic:** every variable and every named set, point, function or event: <i>x</i>, <i>A</i>, <i>B</i>′, <i>U</i>, <i>n</i>(<i>A</i>), <i>P</i>(<i>A</i>) (the power set, as the book's italic P), <i>A</i><sub><i>i</i></sub>, <i>f</i>(<i>x</i>). A run of letters that is one product or one name may share one tag (<i>xy</i>). The PDF's maths letters (𝑥, 𝐴, 𝜃) are never copied: the checks fail on them.
- **Upright:** digits; function and operator names (sin, cos, log, max, min); ∅; the number sets ℕ ℤ ℚ ℝ ℂ (Letterlike Symbols) and 𝕎 𝕋 (double-struck, drawn in STIX Two Math; allowed); words inside set-builder ("is an even prime").
- **Symbols as printed:** ∈ ∉ ⊂ ⊆ ⊄ ⊈ ⊊ ⊃ ⊇ ∪ ∩ ∖ (only if the book prints a backslash difference; it mostly prints −) − (U+2212 for minus AND set difference) × ′ (U+2032 for the complement <i>A</i>′, never an apostrophe) ∶ (U+2236 in set-builder `{<i>x</i> ∈ ℕ ∶ <i>x</i> < 2}`, as the book prints it) | (modulus, and "such that" where the book uses a bar) … (U+2026) ⇒ ⇔ ⟺ ⇏ ≠ ≤ ≥ ∞ ≡ ∀ ∃. Braces `{ }` for sets; intervals as printed, open and half-open (`[−2, 5)`, `(−∞, 3]`).
- **Big union and intersection with limits** ⋃ ⋂ as the book prints them: `⋃<sub><i>i</i>=1</sub><sup><i>n</i></sup> <i>A</i><sub><i>i</i></sub>` (a sub straight after a sup, or the reverse, is drawn stacked). Σ likewise.
- **Cardinality** <i>n</i>(<i>A</i> ∪ <i>B</i>) = <i>n</i>(<i>A</i>) + <i>n</i>(<i>B</i>) − <i>n</i>(<i>A</i> ∩ <i>B</i>), spaces round binary operators and relations, none inside brackets.
- **Powers** 2<sup><i>n</i></sup>, 2<sup>2<sup><i>n</i></sup></sup> only if printed so (a sup inside a sup is allowed but tiny: list each).
- A Venn region label (<i>R</i><sub>4</sub>) as printed.

## Check every number and set
Recompute every worked example and practice answer (rosters, cardinalities, power-set sizes 2<sup><i>n</i></sup>, counts of subsets of a given size, ordered pairs of subsets 3<sup><i>n</i></sup>/4<sup><i>n</i></sup> as printed, inclusion–exclusion for two, three and four sets, bounds on overlaps, interval operations). Check every MCQ's right option and each nudge. Copy as printed and report anything that looks wrong (beyond the errata), with page and your working; scope words "always", "never", "only".

## Diagram agent
No fills (a shaded Venn region or interval is hatched or outlined with the one highlight instead of the book's colour fill, as Chemistry's "no fills" rule; say how you showed each shading), one highlight, phone width. Every label, value and region name as printed. Venn diagrams: circles labelled <i>A</i>, <i>B</i>, <i>C</i> in italic STIX, the universal set's rectangle labelled <i>U</i>; region labels and counts inside their regions, clear of every line. Number lines: open and closed endpoints as hollow and filled dots, exactly as the book draws them. A label with a fraction is drawn stacked by hand in your own file (two text runs and a short rule; `lib/diagrams/kit.ts` has no fraction helper and you may not edit it). Android rule: one font inside one tag; Greek, a sub or sup in a tag uses an all-STIX pill (`mtag` in `chemistry-11-09.ts`); leave room for real font widths. Render with `DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump` and `qlmanage -t -s 900 -o <folder> <file>.svg`. Your test: `npx jest lib/diagrams -t "mathematics.11.1"`.

## Writers' test run (once, when done; again only if it failed)
`npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Mathematics 11 Chapter 1|the text of every book chapter"`, plus `npx eslint <your file>`. Failures naming "Mathematics 11 Ch 1" and your topic are yours; undrawn fig ids are the diagram agent's.

## Your report
As the earlier briefs say, as your final message, plus: every fraction you stacked where the book had a slash, every slash you kept (in a script or a plain field), every fig id with its page. You cannot write .md files; the coordinator saves your report.

## Added after the first writer (follow these)
- **"Exam Relevance:" label:** the part is already titled "Exam relevance", so the paragraph starts with the box's text, without the bold "Exam Relevance:" label (the same as "Pitfall N —" labels are dropped).
- **Binomial coefficients** (the book's n over r in round brackets, no rule): written <sup><i>n</i></sup>C<sub><i>r</i></sub>, the NCERT form, never as a fraction. List each.
- **Answers:** where the book prints no separate result line, `ans: ''` and the result stays in the steps; a remark printed after the answer is the last step.

## NO EM DASHES (the founder's rule for Mathematics, 2026-11-10)
The founder: em dashes "create like it's AI generated kind of stuff". In every Mathematics string the app shows (topic text, titles, kalam, part titles, example tags, tables, formula kickers, legends and notes, MCQ options, nudges and solutions, cheat sheets, key points, figure names, captions and labels) there is **no em dash (—, U+2014)**. Rewrite each one with ordinary punctuation, keeping the words and the meaning exactly:
- A pair round an aside, "the set — as listed — is finite" → commas: "the set, as listed, is finite"; brackets if the aside has its own commas or is maths.
- One that introduces an explanation, a list, an example or a result, "Membership is binary — in or out" → a colon: "Membership is binary: in or out".
- One that joins two full sentences → a semicolon or a full stop, whichever reads best.
- Before "but", "and", "so", "yet" → a comma: "it is not empty, but it holds one element".
- In a label, heading, part title or tag: "Procedure C — Classify …" → "Procedure C: Classify …"; "JEE Main — Speed Trap" → "JEE Main: Speed Trap"; "Method — the three-way coin flip" → "Method: the three-way coin flip".
- A memory aid's gloss, "Well-defined or it’s not a set — kills subjective collections." → "Well-defined or it’s not a set: kills subjective collections."
- A dash used as a blank or a minus is not an em dash: maths minus is − (U+2212) and stays; ranges keep the en dash (–, U+2013).
- Change nothing else: no rewording, no new words beyond what the punctuation needs. A sentence that cannot be repunctuated without new words: list it.
The checks enforce it (`book-rules`: "in Mathematics, writes no em dash").
