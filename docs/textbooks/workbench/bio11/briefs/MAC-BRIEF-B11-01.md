# Brief: Biology Class 11, Chapter 1 The Living World, rebuilt word for word from the Master Reference book

The first Biology chapter. Physics 11 and 12, Chemistry 11 and 12 and Mathematics 11 are finished the same way. Biology 11 and 12 are
built by Raasikh on his own Mac. Read this whole file before you start. Your own assignment (which pages, which file) is in your prompt.

## Paths on this Mac (they replace every `/Users/nikhi/...` path in the briefs you are sent to)

- **Repo (work only here):** `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks` (branch `biology-textbooks`). Never change git state.
- **Workbench (every brief, decision and script):** `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/docs/textbooks/workbench`.
  A path in an older brief like `/Users/nikhi/Developer/monk-books/chem12/briefs/MAC-BRIEF-C12-10.md` is `workbench/chem12/briefs/MAC-BRIEF-C12-10.md`;
  `/Users/nikhi/Developer/monk-books/BRIEF-12-07-08.md` is `workbench/BRIEF-12-07-08.md`; `/Users/nikhi/Developer/monk-learning-app` is the repo above.
- **The book (PDF page = the folio printed at the page foot):** `/Users/raasikhnaveed/Desktop/monk-learning-mobile/biology-work/books/bio11.pdf`
  (Drona Class 11 Biology Master Reference, October 2026 snapshot, 1,177 pages). Text dump with the page number in front of every line (prose only; chemical
  formulas, superscripts and subscripts are scrambled): `.../books/bio11.paged.txt`. Whole-book dump without page numbers: `.../books/bio11.txt`.
  Table of contents: `.../books/toc11.txt`. **Errata: pp. 1171–1177.**
- **Your scratch folder:** `/Users/raasikhnaveed/Desktop/monk-learning-mobile/biology-work/work-<your-name>/`. Delete page images when done.
- Never copy the book, or anything made from it, outside the biology-work folder. The only things that leave are the app files your prompt names.

## Read, in this order

1. `workbench/BRIEF-12-07-08.md`, the whole file: the product, word for word, ownership, the block system, topic fields, parts, which block for which book element, the exceptions,
   checking, the report, and every "Rules learned" section. Ignore its page map, file names, ids and physics notation. **Its fraction rules are replaced by "FRACTIONS" in
   `workbench/math11/briefs/MAC-BRIEF-M11-01.md`; read that section too, and its "NO EM DASHES" rule.**
2. `workbench/chem11/briefs/MAC-BRIEF-C11-01-02.md`: the Chemistry layout of a brief (the page map shape, the "Additional topics" decisions, the diagram id scheme).
   Chemistry notation does not apply, except the parts of it that Biology uses and that are repeated below.
3. `workbench/chem12/briefs/MAC-BRIEF-C12-10.md`: its "GO EASY ON THE MAC" and "Lessons from Chapter 9"; `workbench/chem11/briefs/MAC-BRIEF-C11-09-10.md`: its "Figure placement",
   "Lessons from the Physics 12 and Chemistry 7–8 reviews", "The automatic checks".
4. `workbench/bio11/DECISIONS-B11.md`: the founder's and coordinator's calls for Biology. **This file and DECISIONS-B11 win where they disagree with the briefs above.**

**Closest models (Biology is closest to Chemistry, names and labelled figures):** `content/textbooks/chem-12-10-biomolecules.ts` with `content/textbooks/chem-12-10/*.ts`,
`lib/diagrams/chemistry-12-10.ts`, `lib/revise/keypoints-chemistry-12-10.ts`. For a sub-topic of eight sections as parts see also `content/textbooks/phy-11-09/`. For a book whose sub-topics
start at "00" see `content/textbooks/chem-11-08/topics.ts` (its n `'00'`).

## GO EASY ON THE MAC
- **Do NOT run `npx tsc` or the whole `npx jest`.** The coordinator runs those at the end.
- **Your only test run:** writers: `npx jest content/textbooks/__tests__/book-rules content/textbooks/__tests__/book-chapters -t "Biology 11 Chapter 1|the text of every book chapter"` (failures naming "Biology 11 Ch 1" or your topic are yours; undrawn fig ids are the diagram agent's; empty stubs not yet written are other writers').
  Diagram agent: `npx jest lib/diagrams -t "biology.11.01"`. Key points: `npx jest lib/revise`. Run once when done, again only if it failed. Plus `npx eslint <your file>`.
- Read pages with the Read tool on the PDF with `pages` (a few at a time). Render a page image (`pdftoppm -r 110 -f N -l N -png`) only where the PDF read is unclear, and delete it straight away.
- No subagents, no Metro, Expo, simulator, emulator or builds. No git commands that change anything.

## The book and its errata
Every sub-topic has the usual eight sections: "Section 1: Concept Intuition" (after an "Exam Relevance" paragraph) to "Section 8: Cheat Sheet Box". **Names of sections 2 and 3 differ from Physics:**
"Section 2: Key Terms, Definitions & Classifications", "Section 3: Key Procedures & Frameworks" (its Frameworks A, B, C… are the book's own numbered procedures). Use each sub-topic's own names for the parts
("Key terms, definitions and classifications", "Key procedures and frameworks", "Worked examples", "Practice exercises", "Crack the MCQ", "Common student pitfalls and pro-tips", "Cheat sheet").
**MCQ options and worked-example options are numbered (1) (2) (3) (4), not (A)–(D)** (assertion-reason items too). Keep the book's numerals: bold in running text (`<b>(1)</b>`), plain `label` text in `opts`.
**The book's "Answer: (3)." means option 3, so `correct` is index 2.** Check every one. Worked examples carry bracketed level tags, "[CBSE Board level]", "[NEET level]", "[NEET high-difficulty / statement analysis]": `tag` is the text inside the brackets.

Errata (pp. 1171–1177): the only entry for Chapter 1 is resolved, the credits for "phylum" and "division" were removed from the definitions list, Framework D ("Phylum vs Division") and the cheat sheet: copy the page as printed
and check those three places carry no credit. "Remaining known issues": Chapter 1: a few lines in the Additional Topics run past the right margin (layout only: nothing for you).

## Page map, Chapter 1 The Living World (pp. 12–62). Confirm every boundary on the page images and report any difference.
p. 12 is the chapter title page; the top of p. 13 holds the contents box (neither is copied).
- **Topic 00** "What is ‘Living’? Characteristics of Living Organisms" (book "Sub-topic 00"): pp. 13–19. Figure 1.1 (caption first on p. 14, figure p. 15).
- **Topic 01** "Biodiversity & Nomenclature": pp. 20–27. Figure 1.2 (caption first on p. 21, figure p. 22).
- **Topic 02** "Taxonomic Hierarchy": pp. 28–34. Figure 1.3 (caption first on p. 29, figure p. 30).
- p. 35 opens the shared introduction to "The Living World: Additional Topics" (its paragraph(s) before "Addendum A" → first paragraph(s) of Additional topic A's "Introduction"; the heading itself is not copied), then:
- **A** "Classification Methods Beyond Morphology" pp. 35–38 (its "Practice — Addendum A" is a part), **B** "Beyond the Biological Species Concept" pp. 39–41, **C** "The Dichotomous Key" pp. 42–45,
  **D** "The Kingdom Systems: Whittaker’s Five Kingdoms and the Six-Kingdom System" pp. 46–50 (confirm the end of the title after its line break on p. 46), **E** "What NEET Actually Asks" (the book's "Addendum P") pp. 51–62.
  The book writes "Addendum A — …": the title is what follows the dash. Addenda start and end mid-page: check where each really ends.
- p. 63 is the next chapter's title: stop before it.
- Titles are the book's own heading text exactly. The book prints the sub-topic titles with "&": keep "&". Plain-text fields take no markup.

## Topic numbering and cross-references (decisions 1–3)
- The book's sub-topics keep their numbers: **Sub-topic 00 → Topic 00 ("Start here" on the chapter home), 01 → Topic 01, 02 → Topic 02.** So a "Sub-topic 01" reference becomes "Topic 01" (same number, nothing else changes).
- "Sub-topic N" / "subtopic" → "Topic 0N" / "topic"; "Section N" of the same sub-topic → the part's name; "Addendum A–D" → "Additional topic A–D"; "Addendum P" → "Additional topic E" and the heading
  "Addendum P — What NEET Actually Asks" → title "What NEET Actually Asks". "Framework A" and the like stay. "the chapter" stays. List every change with page, original and replacement.
- **Exam statements** (decision 4): no exam years ("NEET 2021 asked…") and no counts of papers: a year becomes "a recent NEET paper", unless the sentence is an NCERT fact. Every share or frequency the book gives
  ("about 2–3 questions", "Approximate share") is labelled once, right there, "the book's estimate from past papers, not official figures" (the Maths rule). List each with page and exact words.
- The "What NEET Actually Asks" topic keeps the book's headings as parts; text before the first heading is "Introduction"; its worked items are `ex` (tag from the bracket, else "Worked representative"); its practice items with
  answers are `practice`.

## Files, ids, indexes
- `content/textbooks/bio-11-01/topics-0-1.ts` (Topics 00 and 01), `topic-2-extras-a-b.ts` (Topic 02, Additional topics A and B), `extras-c-e.ts` (C, D, E). Each exports `TOPICS`. The chapter file
  `content/textbooks/bio-11-01-living-world.ts` joins them and is wired into the shelf, the tests and the registries: never edit it or anything shared.
- **`topic` index in diagrams and key points = position in the chapter's `topics` array: Topics 00, 01, 02 = 0, 1, 2; Additional A, B, C, D, E = 3, 4, 5, 6, 7.**
- Diagrams `lib/diagrams/biology-11-01.ts` (`DIAGRAMS_BIOLOGY_11_01`), filed as `'biology|11|1'`. Key points `lib/revise/keypoints-biology-11-01.ts` (`KEY_POINTS`).
- **Figure ids:** numbered figures `b11-01-fig-1.1`, `-1.2`, `-1.3`; any unnumbered drawing (a flow chart, graph, table drawn as a picture, labelled sketch, a hierarchy tree, a key's branching tree)
  `b11-01-<topic n>-d<k>` (topic n = `00`, `01`, `02` or `A` … `E`; k counts that topic's unnumbered drawings in page order from 1). A plain table or a list is not a drawing.
  A figure the book prints inside a worked example goes on that `ex` as `fig`.

## Biology notation (the house form for every Biology chapter; the founder may amend it, see DECISIONS-B11)
- **Scientific names are italic**, as the book prints them: genus capitalised, species lower case, the whole binomial in one `<i>`: `<i>Homo sapiens</i>`, `<i>Mangifera indica</i>`, `<i>Panthera leo</i>`; the abbreviated genus
  after first use as the book writes it, `<i>E. coli</i>`. Names above the genus (families, orders, classes, phyla, divisions, kingdoms: Mammalia, Chordata, Animalia, Felidae, Poaceae) are upright, capitalised, as printed.
  An author's name after a binomial is upright (<i>Mangifera indica</i> Linn.). A genus alone is italic (<i>Amoeba</i>). A common name is plain text. A subspecies or variety: "var." and "subsp." upright, the epithets italic.
  This is the one use of `<i>` outside maths and it follows the book. Never italicise a word for emphasis, a term being defined, or a book title.
  Where the book italicises an English word for emphasis, keep the word and drop the italics (BRIEF-12-07-08).
- **Chemical formulas and ions are upright**, with real subscripts and superscripts, as in Chemistry: CO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>O, Ca<sup>2+</sup>, NH<sub>4</sub><sup>+</sup>. Reaction arrows → ⇌ as the book prints them.
- **Units and sizes** with a real micro sign: µm → "μm" (U+03BC, Greek mu), nm, mm, cm, m, kg, g, mg, °C, K, %. A value is kept with its unit by a no-break space. Multiplication ×, ranges with an en dash (2–3), minus −.
- **Symbols**: ♂ ♀ if the book prints them (check the fonts test: if a glyph is missing, report it), ×, →, ⇒, ±, ≈, °, ∶ for a ratio (like 9 ∶ 3 ∶ 3 ∶ 1). Never the PDF's mathematical alphanumeric letters (U+1D400–U+1D7FF).
- **Bullets and flow charts the book draws with arrows in text** ("Kingdom → Phylum → Class") are text with → (U+2192). A real drawn flow chart or tree is a figure.
- **Quotation marks** typographic as printed, the right way round. The book prints a left single quote in ‘Living’: copy it as printed.
- **FRACTIONS and NO EM DASHES** (the founder's house rules for every new subject, DECISIONS-B11 1): every fraction is `<frac><num>…</num><den>…</den></frac>`, never `a/b`, never `½`; the text carries **no em dash (—)**: the book uses
  them everywhere as a plain separator, so write a colon, commas, a bracket or a full stop (a range keeps its en dash). **The checks fail on both.** Every em dash you replace is a change to the book's text: say once in your report that you did it
  (a list of 200 lines is not needed) and report any where the sense could change.
- Plain-text fields (topic `title`, `kalam`, part titles, example `tag`, table and defgrid titles) take no markup and no Unicode subscript or superscript letters.

## Writing rules specific to this book
- Frameworks A, B, C… in "Key procedures and frameworks" are the book's numbered methods: a heading plus numbered steps is a `proc` (the heading, without "Framework A —", is a part-level `p` or the `proc` title as BRIEF-12-07-08 says; keep the book's
  heading words exactly, "Framework A: The “defining property” test (two failure modes)" is the title). A lead-in sentence stays a `p` before it.
- "Think about it" / "Memory aid" / "Mnemonic" lines: the "Memory aid:" in Section 7 goes in the cheat sheet's `aids` only if the book prints it in the Cheat Sheet Box; a "Memory aid" printed in Section 7 after the Pro-Tip is a `protip` (keep its label).
- The mnemonic printed under the Cheat Sheet Box goes in `aids`, word for word.
- Tables are `table` or `defgrid` blocks with the book's title; every cell as printed, cells read from the page image.
- "Exam Relevance" is the first `p` of "Concept intuition" (BRIEF-12-07-08).
- **Check the biology, then copy as printed and report anything wrong:** every taxonomic rank and its order (species is the lowest, Kingdom the highest), who coined or proposed what (Linnaeus, Whittaker, Carolus, Mayr, Cuvier…),
  the binomial rules (italic or underlined, genus capital, species lower case, author name), the number of known species given by the book (cross-check what NCERT gives and any two figures in different places), every table
  of kingdoms (cell wall, cell type, nuclear membrane, nutrition, organisation), the examples under each category (a plant listed as an animal, a species put in the wrong genus), every claim that uses "only", "all", "never".
  The book's mistakes are fixed in our copy only after the expert review and the founder's call; your list is the first line of defence (page, text, why, correction).
- **Never invent text**; an example with no answer line of its own has `ans: ''`; a wrong option the book never explains has `nudge: null`: both are reported (BRIEF-12-07-08).

## Diagram agent
No fills, one highlight, phone width. Read `workbench/DIAGRAM_BRIEF-12-07-08.md` and `lib/diagrams/kit.ts`; the models are `lib/diagrams/chemistry-12-10.ts` and `lib/diagrams/mathematics-11-01.ts`. Count the vector shapes and the raster images on every
page 12–62 (`pdfimages -list` and the shapes seen on the page image) to find unlabelled drawings: report which pages you judged to hold none and how. A hierarchy, a flow chart and a dichotomous key's tree are drawn from boxes and lines (labels are the
book's own words); say which values and positions are the book's and which are schematic. Caption = the book's, without "Figure 1.2" and without "(see next page)". Android rule: one font inside one tag; a tag needing Greek, a sub or sup uses an
all-STIX pill (`mtag` in `chemistry-11-09.ts`); labels clear of lines; leave room for real font widths. A scientific name inside a label is italic by `<i>`. Render with
`DUMP_DIAGRAMS=<folder> npx jest lib/diagrams/__tests__/dump` then `qlmanage -t -s 900 -o <folder> <file>.svg`. Every figure id used by the writers must exist; list the ids you created with their pages.

## Your report
Plain and complete, as BRIEF-12-07-08 says: pages covered; topics written (n, title, number of parts, examples, practice items, MCQs, pitfalls, pro-tips); fig ids used or created with pages; every exception to word for word (page, original,
replacement, reason), the cross-reference changes, every exam statement changed, every suspected error in the book, anything you were unsure of, and the results of your one narrow test run and eslint.

## Lessons from the Chapter 1 review (every later Biology chapter: do these now so reviewers need not)
- **Run jest through the lock script**, never bare: `/Users/raasikhnaveed/Desktop/monk-learning-mobile/biology-work/jest-serial.sh <the same jest arguments>` (it runs at most two jests at once on the laptop). Use it for your one narrow test run. `npx eslint <your file>` runs directly.
- **Read the page, not only the text dump.** The Chapter 1 writers dropped a "⇒ disqualified" the dump showed; check every sentence you copy, every table cell and every label against the page image (the PDF with the Read tool).
- **A title comes before its lead sentence.** A framework or procedure heading is printed first, then its lead sentence, then the steps: keep the book's order.
- **Assertion-reason questions that print no options** get the standard four, written as new wording and listed in your report: "Choose: (1) Both true, R explains A. (2) Both true, R not the explanation. (3) A true, R false. (4) A false, R true."
- **A table inside a question or example** is written as labelled rows ("A: Flagellum 1, Spore 1, Capsule 0, …"), never bare numbers in a row, so each value keeps its column name.
- **Worked-example headings** go into the question as a bold lead; "Worked Example A.1" labels are dropped; an example's printed result is `ans`, a remark after it is the last step.
- **Overgeneral claims in the book** ("only", "all", "every", "always", "mutually exclusive", "the whole system was introduced by …", unsupported superlatives "the most-tested …", "every NEET cycle"): copy as printed and report each with page, why, and the exact correction you would make. Chapter 1's reviewers found about 20 of these; they are the biggest class of error.
- **Attributions and "NCERT says …"**: if the book gives a person, a year or an NCERT sentence you cannot confirm, report it. Do not trust "canonical NCERT position".
- **A claim that "the chapter never covers X"**, in a supplement introduction: check it against the topics as built (with the topic numbering of the brief) and report each false one with the true replacement.
- **Assertion-reason fourth option** should read "A false, R true". A book that prints "both false" is reported.
- **Name currency**: keep the printed form (NCERT's spelling) and report the current one (Canis familiaris/Canis lupus familiaris, ICNB/ICNP, Primata/Primates).
- **Exam shares and "almost every year"**: label as the brief says, and report any that look overstated.
- **Titles with an em dash** ("Classification Systems & The Five Kingdoms — The Big Picture"): the title is plain text, write a colon in place of the dash ("… : The Big Picture") and list it.

## Slashes in Biology (checks, 2026-11-16)
The one-line fraction check for Biology flags only a number over a number (or over a bracket, π or a root), e.g. "3/4", "0/1", "5/6". A slash between genus names, option letters or words ("Amoeba/Entamoeba", "(c)/(d)", "and/or", "dunes/crystals") is not flagged and is left as printed. A number-over-number that is not a fraction (groove names "5/6", "0/1" binary) still trips the check: write it so it cannot be read as a fraction ("5 and 6", "0 or 1") and list it, as Chapter 1 did.
