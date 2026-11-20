# Chapter 13 new text from the R3 fix pass (all [NEW], founder to review)

Files: T1 = content/textbooks/bio-11-13/topics-1-2.ts, T3 = topic-3-extras-a-b.ts, EC = extras-c-f.ts, KP = lib/revise/keypoints-biology-11-13.ts, DG = lib/diagrams/biology-11-13.ts.

## [NEW] wordings (flag number from review-R3.md)
1. EC topic E Method, Nyctinasty Mechanism: "At dusk, water moves out of the extensor cells and into the flexor cells of the pulvinus, and the leaf closes. At dawn, the reverse occurs: water moves back into the extensor cells and the leaf opens."
1. EC Seismonasty Mechanism and Ex E.2 (c): "...from the motor cells in the lower half of the pulvinus..." (Practice 6 answer: "The motor cells in the lower half of the pulvinus are responsible for closure... inside these motor cells higher..."). KP E2: "K+ and Cl- leave the motor cells in the lower half of the pulvinus".
2. T3 Ex B.1: "Soaking in warm water softens the coat and makes it permeable, so water can enter (imbibition): a mild, heat-based form of scarification, which need not cut or abrade the coat."
3. DG header: "PANEL ORDER (layout decision...): panel (b) repeats panel (a)'s bar order (8/16, 16/8, night break) so the two panels compare row by row; the book prints its first two bars the other way round." (Option 2 of the review chosen; drawing unchanged.)
4. KP D1: "Pr maintains seed dormancy in light-sensitive seeds; where Pfr is absent, as in darkness, the seedling stays etiolated (pale and elongated)".
5. EC Archetype 5: "One trap is a true A paired with a partially true but logically disconnected R. A second trap: an R that sounds right but names the wrong site, hormone or direction, which makes R false." KP F2 why: "In an assertion-reason item, an R that names the wrong site, hormone or direction is false, however familiar it sounds."
6. T1 Concept intuition "Natural auxins are indole compounds, gibberellins..."; heading "1. Auxins (natural ones are indole compounds)."; KP topic 1: "Natural auxins, IAA and IBA, are indole compounds; the synthetic ones are NAA, 2,4-D and 2,4,5-T."; EC F Q1 answer: "auxins are indole compounds (natural) or synthetic compounds such as NAA and 2,4-D."
7. T3 Topic 03 step 4: "a defoliated photoperiod-sensitive plant cannot be induced to flower"; AR (A): "A photoperiod-sensitive plant whose every leaf has been removed will not flower even under a fully inductive photoperiod." (key (3) unchanged; the "photoperiodic stimulus" slip is reverted to the book's "photoperiod").
8. T1 ABA bullet: "found independently as three inhibitors, inhibitor-B, abscission II (abscisin II) and dormin; all three proved to be the same chemical, named abscisic acid." (NCERT wording from the reviewer's memory; not checked against an NCERT copy.) The Key definitions line "Other names: abscisin II; dormin" is the book's and is left.
9. T3 LDP examples: "(wheat, barley and sugar beet also appear below under vernalisation: their winter varieties need a cold spell first, then long days)".
10. T3 Concept intuition: "a so-called short-day plant can flower under a longer day than some long-day plants need."; KP why: "A so-called short-day plant can flower under a longer day than some long-day plants need."
11. T3 shared introduction: "(all five go beyond the NCERT text)".
12. T3 B introduction: "...it does not give the types of dormancy or the germination mechanism, and it names breaking methods only in passing (gibberellin in Topic 02, stratification in a Topic 03 pitfall)."
13. T1 Exam Relevance: "NEET often hides one trap here (the book's estimate from past papers, not official figures)"; "Hard NEET assertion-reason items exploit..."; T3 B procedure title "The mechanism, step by step:"; EC F "PGR questions dominate."
14. EC F: "Answers are checked against the chapter content."; "Two ideas are worth rehearsing until they are automatic."
15. T3 Ex B.3 step: "During dry storage (afterripening), ABA content falls and the seed becomes less sensitive to ABA, so the GA:ABA balance shifts toward GA."; answer: "Afterripening; during dry storage ABA content and ABA sensitivity fall, shifting the GA:ABA balance toward GA and breaking physiological dormancy."; Practice 3: "...ABA content falls (and the seed becomes less sensitive to ABA), raising the GA:ABA ratio, so the seed loses dormancy without any other treatment."
16. T1 gibberellin application: "makes fruits such as apple elongate and improves their shape"; "a tiny amount can swing the fate of a whole organ"; EC C Practice 1: "Name the tissue on which gibberellin acts to mobilise food reserves in germinating cereals, and name the enzyme it induces." (key "Aleurone layer; alpha-amylase." still right); T3 B Practice 6: "Which PGR is used commercially to speed up malting of barley, and which enzyme does it induce?" (answer unchanged, still right); ABA receptors: "ABA binds to ABA receptors in the guard cells" in C2 step 3, Ex C.2 step 2 and KP C2; EC D: "Phytochrome is one of the light signals that entrain".

## Printed keys, numbers, titles, headings changed
- Heading "1. Auxins (indole compounds)." -> "1. Auxins (natural ones are indole compounds)." (T1).
- Procedure title "This is the most testable mechanism:" -> "The mechanism, step by step:" (T3 B).
- Question wording only (no key change): C Practice 1, B Practice 6, AR (A) in Topic 03 (key (3) unchanged, rechecked: A true for a photoperiod-sensitive plant, R false).
- No answer key letter, no number and no figure changed.

## Founder decisions and not applied
- Flag 3 (Fig 13.4 panel b order): chose the review's alternative of keeping the parallel order and recording it in the DG header; the founder may instead ask for a redraw in the book's order (16/8 FLOWERS, 8/16 no flower, night break FLOWERS).
- Flag 16 last bullet (GA3 vs GA1 in barley): not applied; left as the book prints (NEET uses GA3). Optional suffix "(GA3 is the form used commercially)" not added, since two edits would lengthen NCERT-style lines for little gain.
- Flag 1: the nyctinasty flexor/extensor direction follows the review (standard Samanea definition); Mimosa naming dropped as the review advises. Key point E2 keeps the book's "flexor and extensor cells" for the nyctinasty sentence, which is now consistent.
- Flag 8 and 16 rest on the reviewer's recollection of NCERT; no NCERT copy in the repo.
- No conflicts between flags; no NCERT wording dropped (the book's lines were kept and the nuance added beside them in flags 2, 9, 10, 15).

## Tests
book-rules/book-chapters/display-fit (Biology 11 Chapter 13 and the text and fit filters): 3 suites passed, 27 passed. lib/diagrams biology.11.13: passed (13). lib/revise: 137 passed. eslint on the changed files: clean.
