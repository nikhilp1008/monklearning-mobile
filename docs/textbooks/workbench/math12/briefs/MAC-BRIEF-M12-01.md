# Brief: Mathematics Class 12, Chapter 1 Relations and Functions, rebuilt word for word from the Master Reference book

First read `MAC-BRIEF-M12-COMMON.md` (this folder) and everything it lists. Chapter 2 is being written at the same time
(MAC-BRIEF-M12-02.md): never touch its files.

**Your closest models:** `content/textbooks/math-11-14/topics-01-03.ts` (topics in the "Section N" form: an "Exam relevance"
part, then one part per Section), `content/textbooks/math-11-02/` (Class 11 Relations and Functions: same notation) and
`content/textbooks/math-11-14/extras-a-d.ts` (lettered additional topics with an Introduction part). Read one before writing.

## Layout (DECISIONS-M12 items 2–3)
- **Topics 01–07** = Subtopics 01–07 ("Subtopic 0N" → "Topic 0N" everywhere). pp. 43–44 (title and contents) are not copied.
  Each topic opens with its "Exam Relevance" box as the "Exam relevance" part (check p. 44's foot and p. 45 for Subtopic 01's
  box; if Subtopic 01 has none, its first part is "Concept intuition" and you report it), then "Section 1: Concept Intuition"
  … "Section 8: Cheat Sheet Box", each a part titled from its own name in sentence case ("Concept intuition", "Common student
  pitfalls and pro-tips", "Cheat sheet": the box is called "Cheat sheet" as in all of Class 11), "&" → "and", em dashes → a colon. Topic titles exactly as printed ("Types of
  Relations"), em dash → colon.
- **Additional A–F** (`n: 'A'` … `'F'`, `extra: true`), title = the text after "Addendum X — ", exactly as printed (em dash
  inside a title → colon). The Additional Topics part's heading (p. 102, "Chapter 1: Relations and Functions — Additional
  Topics") is not copied; its opening paragraphs (p. 102, "The chapter gave you the vocabulary …") are **A's first part,
  "Introduction"**, reworded only where they must ("Addendum A proves …" → "Additional topic A proves …"); list each change.
  Each addendum's own headings are its parts (sentence case). A link such as "extends Subtopic 03" → "Topic 03".
- **Additional P** (`n: 'P'`, `extra: true`, title "What JEE Actually Asks") = Addendum P, pp. 119–125, with its own numbered
  headings as parts ("1. The distribution" → part "The distribution", …). Question tags keep the exam and drop the year
  ("[JEE 1982]" → "[JEE]"); every share or count of past questions labelled "(the book’s estimate from past papers, not
  official figures)". Archetype letters ("Archetype H") kept as printed.
- **Cross-references:** "Subtopic 0N" → "Topic 0N"; "Section N" of the same subtopic → its part's name; another subtopic's
  "Section N" → "Topic 0N’s <part name> part"; "Addendum X" → "Additional topic X"; "Example N" of a topic → what the reader
  shows ("Topic 02’s third worked example"); Procedure/Derivation/Archetype letters and numbers kept; "Figure 1.N" stays;
  NCERT numbers and references to other chapters or to Class 11 copied as printed and listed.

## Page map (pp. 45–125). Confirm every boundary on the page images and report any difference.

| File (`content/textbooks/math-12-01/`) | Writer | Topics | Pages | Topic indexes | Numbered figures |
|---|---|---|---|---|---|
| `topics-01-02.ts` | m12w11 | 01 Types of Relations; 02 Types of Functions | 45–54; 55–64 | 0, 1 | 1.1 (46–47), 1.2 (51–52), 1.3 (56–57), 1.4 (61–62) |
| `topics-03-04.ts` | m12w12 | 03 Composition and Inverse of Functions; 04 Domain and Range of Real Functions | 65–74; 75–81 | 2, 3 | 1.5 (66–67) |
| `topics-05-07.ts` | m12w13 | 05 Standard Real Functions and Their Graphs; 06 Even, Odd, and Periodic Functions; 07 Algebra of Functions and Functional Equations | 82–89; 90–95; 96–101 | 4, 5, 6 | 1.6 (85–86) |
| `extras-a-f.ts` | m12w14 | Additional A–F (+ the p. 102 introduction) | 102–118 | 7–12 | |
| `extra-p.ts` | m12w15 | Additional P What JEE Actually Asks | 119–125 | 13 | |

Chapter 2 starts on p. 126: stop before it. Diagrams later in `lib/diagrams/mathematics-12-01.ts` (`'mathematics|12|1'`); key
points later in `lib/revise/keypoints-mathematics-12-01.ts`.
- **Figure ids:** `m12-01-fig-1.1` … `m12-01-fig-1.6`; any unnumbered drawing (arrow diagrams, graphs drawn without a number)
  `m12-01-<topic n>-d<k>` (`01` … `07`, `A` … `F`, `P`; k from 1 in page order). Count the vector shapes on every one of your
  pages and report which hold a drawing, with what it shows. Place a `fig` block where the figure is called or its caption is
  printed (caption without "Figure 1.N"); the drawings are made later by a diagram helper.

## Notation (on top of Class 11's)
- Relations: <i>R</i> ⊆ <i>A</i> × <i>A</i>, (<i>a</i>, <i>b</i>) ∈ <i>R</i>, <i>a</i> <i>R</i> <i>b</i>, [<i>a</i>] for an equivalence class, as printed.
- Functions: <i>f</i> : <i>A</i> → <i>B</i>, <i>f</i> ∘ <i>g</i>, <i>f</i><sup>−1</sup>, <i>f</i><sup>2023</sup>(<i>x</i>) for iterates, as printed; [<i>x</i>] or ⌊<i>x</i>⌋ and {<i>x</i>} exactly as printed;
  sgn, log, sin upright; counts like <i>m</i><sup><i>n</i></sup>, <sup><i>m</i></sup><i>P</i><sub><i>n</i></sub>, ⁿCᵣ as Class 11 Chapter 6.
