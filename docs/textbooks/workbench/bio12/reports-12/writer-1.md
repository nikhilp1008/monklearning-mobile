# Biology 12 Chapter 12, writer 1 (Topics 01 to 03, pp. 659 to 679)

File: `content/textbooks/bio-12-12/topics-1-3.ts` (exports `TOPICS`, three topics). Tests: narrow jest run passes everything of mine; the only failures are (a) "draws only figures that exist": b12-12-fig-12.1 to 12.5 not yet drawn (diagram agent), (b) a Biology 11 Chapter 17 figure label with em dashes (not this chapter). `npx eslint` on the file: clean.

## Boundaries confirmed (page images)
- Topic 01 "Ecosystem: Structure & Productivity" starts top of p. 659 (printed "Chapter 1"), ends p. 665 (cheat sheet and mnemonics; page half empty).
- Topic 02 "Decomposition" top of p. 666 to p. 672. Topic 03 "Energy Flow & Ecological Pyramids" top of p. 673 to p. 679 (half empty). Topic 04 starts top of p. 680. No difference from the brief.

## Counts (each topic: 8 parts)
| Topic | Worked ex | Practice | MCQ | Pitfalls | Pro-tip | Cheat rows / aids | defs | formula | proc | fig |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 | 4 | 5 | 4 | 4 | 1 | 6 / 2 | 8 | 1 (NPP) | 2 (Framework A, B) | 12.1 |
| 02 | 4 | 5 | 4 | 4 | 1 | 6 / 3 | 5 | 0 | 1 (Framework A) | 12.2 |
| 03 | 4 | 5 | 4 | 4 | 1 | 6 / 3 | 6 | 1 (10% law, empty legend) | 2 (Framework A, B) | 12.3 |

Figures (fig blocks at the end of "Key processes and logical framework", where each caption is printed): b12-12-fig-12.1 (caption p. 662, drawn p. 663), b12-12-fig-12.2 (caption p. 669, drawn p. 670), b12-12-fig-12.3 (caption p. 675, drawn p. 676). No other drawing on pp. 659 to 679 (the table on p. 675 is a `table` block).

## Exceptions taken (word for word)
1. Every em dash replaced (158 on these pages, counting "Example 1 —" labels and headings): by a colon where the dash introduced a definition, list item, example or explanation; by commas or brackets where it set off an aside. No sense changes. Titles: "Framework A — …" becomes "Framework A: …" (proc titles, bold run-in headings of Frameworks B and C in Topics 01 to 03 that are `p`). "Step 1 — functional placement:" (p. 662) is "Step 1: functional placement." (colon and full stop), same for Steps 2 and 3. Example tag "NEET — high difficulty / Assertion–Reason" and "NEET — high difficulty — Assertion–Reason" (pp. 662, 671, 677) are "NEET high-difficulty / Assertion–Reason"; practice tags "[NEET — high difficulty]" are "[NEET high-difficulty]".
2. "subtopic" to "topic": p. 659 "This subtopic is a near-guaranteed scorer"; p. 669 "linking this subtopic directly to the carbon and phosphorus cycles" (the cycles are in Topic 04; I did not add the number); p. 673 "the spine of everything in this subtopic".
3. Exam statements labelled once: "(These frequencies are the book’s estimate from past papers, not official figures.)" added (new wording) after the frequency sentence of each Exam Relevance box (pp. 659, 666, 673). No exam years on these pages; Lindeman 1942 and Elton 1927 are kept (discoveries).
4. "No answer printed twice": Topic 01 Example 1 step "Substitute: NPP = 25,000 − 9,000" now ends before the result (the book prints "= 16,000 kcal …" then repeats it after "Answer:"); Topic 03 Example 1 step ends "Secondary consumers = 0.1 × 4,800" and `ans` is "480 kJ m−2 yr−1". Example 4 in each topic: `ans` is "(i)" or "(ii)", the Trap line last.
5. Assertion-reason keys: all three examples print the key as (i) to (iv) (roman numerals, "(iv) A false, R true"); copied as printed in bold, not renumbered to letters. Nothing wrong with the fourth option here.
6. Run-in layout rewritten as lists (no wording change): Topic 01 Framework C bullets (the errata's short first line before the inline bullets is gone), Topic 02 "The five steps" and Framework B, Topic 03 "Laws governing flow" and Framework C. Frameworks with numbered steps are `proc` blocks; the lead-in sentence "Treat it as an income statement for the producers." sits as a `p` before Topic 01 Framework B's proc (the proc block cannot hold a line between title and steps). The three bold "Why:" remarks stay inside their steps as bold lead-ins.
7. Equations and symbols: NPP = GPP − R is a `formula` block (legend taken from the book's "where R = respiratory loss by the producers"); the 10% law is a `formula` block with stacked fraction (book prints E(n+1) ≈ 10 over 100 times E(n) = 0.1 E(n)); empty legend (the book defines no symbols). "x 0.1 each step" (p. 677) is "× 0.1"; "0.6×10^5" and "9×10^4" are written with spaces round ×; units carry a no-break space after the number. "<50%" (Framework A, pitfall) is "< 50%". Tight arrows in "grass→deer→tiger" and "detritus→earthworm→bird" (p. 678) are spaced.
8. `kalam` (shortened to fit 140 characters, all from the book): Topic 01 the book's definition of ecosystem after the dash; Topic 02 "Decomposition is nature’s recycling plant." (the sentence continues after the colon in the book); Topic 03 the "Energy flow" definition after the dash.
9. Cheat sheet bullets: "name: fact" lines split into `f` and `note`; "=" lines kept whole in `f` with `note: ''`. The printed "Mnemonics:" label is kept at the start of the first `aids` line of each topic.
10. Italics used by the book for emphasis dropped throughout (the whole question text of every worked example is italic on the page).

## Cross-references / false "never covers" claims
No cross-reference beyond the three "subtopic" words above. No false "chapter never covers X" introduction on these pages (those sit in the Additional topics, writers 2 and 3). "the pyramids section below" (p. 674) still points at something present in Topic 03.

## Suspected book errors (page, text, why, correction, confidence)
Overgeneral or superlative:
- p. 659 "near-guaranteed scorer", "MCQ-certain"; p. 666 "A dependable scorer", "almost always"; p. 673 "One of the highest-yield zones of the whole chapter", "MCQ-certain", "If you master only one functional aspect for marks-per-hour, make it this one"; p. 674 "the single costliest error in the exam"; p. 679 "This is the most-tested trap in the chapter"; p. 660 "the single most common conceptual slip". Copied (frequencies labelled); recommend dropping the superlatives. High.
- p. 660 "Energy and matter enter only through producers" (p. 661 Framework A step 2): not so for detritus imported from outside (a stream or cave subsidised by leaf litter) or the deep-sea case the book itself names on p. 673. Correct: "mostly through producers". Medium.
- p. 660 / p. 661 "the deep aphotic ocean lacks producers": contradicts p. 673 (hydrothermal vent communities are chemosynthetic); correct to "lacks photosynthetic producers". Medium-high.
- p. 660 "None of these is imported from outside on a daily basis: the same fixed energy … keep the unit ticking": the pond receives sunlight every day (energy is imported continuously; only the matter is recycled). Correct to nutrients only, or "the same recycled nutrients". Medium-high.
- p. 660 Standing crop "Measured as dry weight": NCERT also allows fresh weight or numbers per unit area; the book's own "water content would distort fresh-weight comparisons" is a good reason but "measured as" is stricter than NCERT. Low.
- p. 662 Example 2: harvested grain (12 quintals from 0.5 ha) is only the economic yield, a part of NPP, not NPP itself; correct "reflects net, not gross, productivity (and is only the harvested part of NPP)". Medium.
- p. 666 "decomposition is the only process that returns locked-up nutrients to circulation": fire, weathering and excretion also return nutrients. Correct "the main process". Medium-high.
- p. 666 "decomposers (microbes) are said to form the largest population in a food chain": not an NCERT statement; says "population" where numbers are meant. Low.
- p. 668 Framework B "cellulose" listed with lignin, tannin and resin as slow: NCERT names lignin and chitin as slow, and cellulose is broken down by many fungi and bacteria (slower than sugars, much faster than lignin). Also "acidic soils decompose slowly, alkaline faster" is a broad generalisation not in NCERT (book says "broadly"). Medium / low.
- p. 671 Practice 5 answer "(humification persists)": should be "humus persists" (humification is the process of forming it). Low-medium.
- p. 668 / 669 fine: five steps order and Figure 12.2 caption agree with the text (fragmentation, leaching, catabolism, humification, mineralisation); detritivore against decomposer used consistently.
- p. 673 "the lone exception being deep-sea hydrothermal vent communities": NCERT says the same, but other chemosynthetic and subsurface ecosystems exist; fine for NEET, label as NCERT position. Low.
- p. 673 PFC "a large host feeding many smaller parasites": direction is reversed in wording (parasites feed on the host); the chain tree → leaf-eating insects → parasitic mites is fine. Low-medium.
- p. 673 "usually only four to five trophic levels", p. 674 "only 4–5 trophic levels", p. 675 "rarely exceed 4–5 links": NCERT states 3–4 or 4–5 depending on edition; consistent inside the book. Low.
- p. 674 "the three were introduced by Charles Elton, 1927": Elton (1927) described the pyramid of numbers; the biomass pyramid came later and the energy pyramid is Lindeman's (1942, Odum), and p. 675 repeats "Ecological pyramids (Elton, 1927)". Attribution too broad. Medium-high.
- p. 674 "roughly 90% is lost as heat through respiration and metabolic activity" and Framework A "loses it as heat": part of the 90% is not assimilated (faeces) or is dead matter passing to the detritus chain, as the book itself says in Framework C. Correct "about 90% is not passed on (mostly lost as heat, the rest to detritus)". Medium.
- p. 674 and p. 679 "the pyramid of energy is always upright … never": true for energy flow per unit time (NCERT); a pyramid of energy stored at one instant need not be, so the "always" holds for productivity-based pyramids. Keep NCERT wording, add nuance. Medium. The book's "second law forbids it from inverting" is acceptable for rates.
- p. 674/675 table and p. 677 Example 4 / p. 678 Practice 5: the book's inverted-biomass example is "pond / open-sea". NCERT's example is the sea; small ponds usually show upright biomass pyramids (inverted in some). The book also lists "pond" as upright for numbers. Keep, mark pond as less safe. Low-medium.
- p. 675 Framework A step 2 "95–99% … immediately lost … only about 1–5% fixed" against "2–10% of PAR" with PAR < 50%: consistent (at most about 1–5% of incident radiation), fine; but "of the radiation actually reaching a plant" vs "of incident" is mixed. Low.

## Recomputed numbers (all correct)
- Topic 01 Ex 1: 25,000 − 9,000 = 16,000 kcal m−2 yr−1. Practice 3: 32,000 − 20,000 = 12,000. Ex 4 logic (NPP ≤ GPP, R ≥ 0): right; key (i).
- Topic 03 Ex 1: 48,000 → 4,800 → 480 kJ m−2 yr−1 (secondary consumer = 3rd level, twice). Ex 3: 0.6 × 10^5 = 60,000 → 6,000 → 600 → 60 → 6 → 0.6 (4th level 60). Practice 3: 9 × 10^4 → 9 × 10^3 → 9 × 10^2 → 90 (tertiary consumer = 4th level, three steps). All as printed.
- Option keys: Topic 01 Q1 b, Q2 d, Q3 c, Q4 c; Topic 02 Q1 b, Q2 c, Q3 b, Q4 c; Topic 03 Q1 c, Q2 c, Q3 b, Q4 c; all agree with their explanations and are the only correct option. Nudges attach to their own option. Example keys: (i), (ii), (ii) agree with the working.
- Percent signs: PAR < 50%, 2–10%, 10%, 90%, 95–99%, 1–5%: no sums to check; no pie or table of shares on these pages.

## Not checked / notes
- No exam years or counts of papers on pp. 659 to 679. Frequency claims labelled once per Exam Relevance box (3).
- The book prints "Chapter 12 · Figures" pages 663, 670, 676; I have not looked at their drawings beyond the caption (diagram agent). Figure 12.2 caption mentions "N/sugar-rich" and "lignin/chitin-rich" consistent with Topic 02.
- Errata entry (1) concerns Topic 04 (writer 2); entry (2) concerns Figure 12.4. Neither on my pages.
