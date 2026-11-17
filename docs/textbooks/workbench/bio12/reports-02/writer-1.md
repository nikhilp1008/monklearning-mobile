# Biology 12 Chapter 2, writer 1 (Topics 01 and 02, pp. 63 to 81)

File: content/textbooks/bio-12-02/topics-1-2.ts. Checks: book-rules passes; book-chapters fails only "draws only figures that exist" (the six undrawn ids below); eslint clean.

## Boundaries
Confirmed from the page dump (and p. 75 image): Topic 01 heading and Exam Relevance at the foot of p. 63, Section 1.1 starts p. 64, ends p. 73 (cheat sheet). Topic 02 starts top of p. 74, ends p. 81. Titles as printed ("Gametogenesis & Menstrual Cycle"). Page images were checked for p. 75 only; the other pages were read from the text dump (tables came out cleanly), so image proofreading of pp. 64 to 74, 76 to 81 (bold words, en dashes in the day ranges) is NOT done.

## Counts
- Topic 01: 8 parts; 2 tables (male, female); 4 worked examples; 5 practice items; 4 MCQs; 4 pitfalls; 1 pro-tip; cheat sheet 7 rows.
- Topic 02: 8 parts; 3 tables (ploidy, hormone roster); 4 worked examples; 5 practice items; 4 MCQs; 4 pitfalls; 1 pro-tip; cheat sheet 8 rows.

## Figures (fig ids, all undrawn at writing time)
b12-02-fig-2.1 (caption p. 66, drawn p. 67), b12-02-fig-2.2 (caption p. 68, drawn p. 69), b12-02-fig-2.3 (on Worked Example 4 as `fig`; caption p. 70, drawn p. 71), b12-02-fig-2.4 and 2.5 (captions p. 76, drawn p. 77), b12-02-fig-2.6 (caption p. 78, drawn p. 79). No unnumbered drawing on my pages. Notes for the diagram agent: Fig 2.3 also shows "Epididymis (coiled; stores sperm)" between W and X, a bladder and a seminal vesicle; Fig 2.6 day labels print "days 1 5", "6 13", "15 28" (en dash lost in the dump).

## Exceptions to word for word (all pages)
1. Every em dash replaced (colon, comma, bracket or full stop). Sense-risky ones: the three chain lines "X —mitosis→ Y" (p. 75/76 spermatogenesis, p. 76 oogenesis) are written "X → (mitosis) → Y"; the Mnemonic "PME — Protects, Moves, Embeds" (p. 73) is "PME: Protects, Moves, Embeds"; "Biology fork — descriptive" notes (pp. 64, 68, 74, 78) use a colon.
2. "subtopic" to "topic": p. 64 ("what this subtopic does not cover", "this subtopic is about structure", "later subtopics"), p. 74 ("Two big jobs live in this subtopic"). "belongs to Gametogenesis / the Menstrual Cycle" kept as printed (they name Topic 02).
3. Exam Relevance labels (new wording, to approve): p. 63 "(the book’s estimate from past papers, not official figures)" after "...assertion–reason pairs"; p. 74 the same after "highest-yield zones of Class 12 Biology". No year appears on my pages.
4. Run-in bullet lists (pp. 65, 66, 75: key definitions, uterine wall layers, core definitions) set as proper bullet lists with `<br>•`; menarche/menopause kept in one bullet as printed. Bold on defined terms is my reading of the dump (p. 75 image confirms for p. 75); other pages' bold is not image-checked.
5. Layout: "(see next page)" dropped from captions; tables that cross a page (p. 64 to 65, 65 to 66) joined into one; numbered headings (1.2.1, 1.3.1 ...) dropped, the sub-headings are bold paragraphs; the Exam Relevance box is the first `p` of "Concept intuition"; the "Think about it this way…" boxes are `p` with a bold lead. "∘ C" is written "°C" with a no-break space.
6. Examples and MCQs: Match-the-column items are written as labelled lists (Column I / Column II) in the question. The "Why the traps work:" lead-in is dropped where the per-option sentences are in the options' nudges; it stays (bold, in the solution) only where a general closing sentence exists: T01 MCQ 2 and 4, T02 MCQ 4. T02 MCQ 4 (follicle order) has a single sentence for all distractors, so its three wrong options have nudge null (the book explains none separately). Cheat-sheet mnemonics (PME; "Hypothalamus Pings Pituitary…") are printed as bullets inside the cheat sheet, so they stay in their rows and `aids` is empty; flag for the coordinator if aids is preferred. Cheat-sheet rows: "name: fact" bullets split into f and note; "Gonads (primary sex organs) do two jobs" and "Semen = seminal plasma + sperms." split at my choice.
7. Assertion-reason keys are the book's standard four (the book prints "A false, R true"; no "both false" on my pages). Practice 4 answers say "A true, R false", matching.

## False "never covers" claims
None on my pages. The p. 64 "does not cover" paragraph (structure only; gametogenesis, cycle, fertilisation elsewhere) is true against Topics 02 and 03. Shared Additional-topics introduction is writer 2's.

## Suspected book errors and overgeneral lines (page, exact words, note, confidence)
- p. 63 "one of the highest-weight units in Class 12 Biology"; "a reliable 2–4 question zone, almost always testing NCERT lines verbatim": unsupported superlative and frequency, labelled (see 3).
- p. 66 "It prevents the single most common cell-location error in this chapter"; p. 72 MCQ 1 "the single most common error"; MCQ 4 "These layer-swaps are the most frequent uterus errors": unsupported superlatives, copied.
- p. 72 pitfall 2 "If you can place the cell, you can never mis-assign its job": overgeneral (Leydig/Sertoli location rule is correct, "never" is not); suggest "you are far less likely to".
- p. 70 Worked Example 4: clue "W receives several tiny tubes leaving the testis" with answer W = vasa efferentia. The vasa efferentia ARE the tiny tubes; the structure that receives them is the epididymis. Figure 2.3 puts "Epididymis" after W, so the answer order (efferentia, deferens, ejaculatory duct, urethra) is right but the W clue reads wrongly. Suggest "W is formed by the several tiny tubes leaving the testis" (confidence high). Route order W, X, Y, Z otherwise correct; the figure omits rete testis, fine for the clue set.
- p. 66 "vasa efferentia (about 10–25 fine tubules)": not in NCERT; textbooks give about 12 to 20 (confidence low-medium). Copied.
- p. 68 "The ovary is not physically joined to the oviduct: there is a small gap": NCERT says the fimbriae lie near the ovary; the ovarian fimbria touches the ovary in many texts. Low confidence.
- p. 76 "about two million" oogonia/primary oocytes at birth and then "about 60,000–80,000 survive in each ovary by puberty": NCERT gives only the 60,000–80,000 per ovary at puberty; the two million is from other texts (about 1–2 million at birth). Also two million (both ovaries) against 60,000–80,000 "in each ovary" mixes totals and per-ovary figures. "four to five hundred ovulated": NCERT implies about 400. Confidence medium.
- p. 76 "Within it [the Graafian follicle], the primary oocyte finally completes its first meiotic division": NCERT places it in the tertiary follicle, before the Graafian stage (the Figure 2.5 caption and Practice 5 repeat "at the Graafian stage"). Low-medium; propagates to Example 4 (p. 80), Practice 5 and the cheat sheet (p. 81).
- p. 75 hormone roster, Inhibin source "Sertoli cells" only; granulosa cells also secrete inhibin (incomplete, not wrong). Oestrogen "Growing follicle (granulosa)": theca/granulosa both, acceptable.
- p. 75 "repeating about every 28–29 days" and heading "≈ 28–29 days" against Figure 2.6 caption "about 28 days" and the cheat sheet "~14 d" luteal: consistent enough; days 1 to 5, 6 to 13, 14, 15 to 28 add to 28; the "28–29" is the NCERT wording. Fertile-window days not contradicted.
- p. 78 "rising FSH and LH" in the follicular phase: NCERT says gradual rise; fine. Menstrual "~3–5 days", ovulatory "~day 14": match NCERT.
- Numbers matching NCERT (confidence high): scrotal 2–2.5 °C below body temperature; testis 4–5 cm x 2–3 cm; about 250 lobules, 1–3 tubules; ovary 2–4 cm; oviduct 10–12 cm; 15–20 mammary lobes; menopause about 50 years.
- Recomputed: ploidy ladder 46, 46, 23, 23 consistent across p. 75 table, Figure 2.4/2.5 text, Examples 2 and 4, Practice 3 (2n, n, 2n, n), pitfalls and cheat sheet; yield 1 spermatocyte to 4 sperms, 1 oocyte to 1 ovum plus polar bodies consistent. Every MCQ key is correct and unique (T01: b, d, b, c; T02: b, b, b, c). Sertoli nourish / Leydig androgens consistent everywhere; the Practice 4 assertion-reason item is "A true, R false" as keyed. T01 Worked Example 3 and T02 Worked Example 3 are (a), correct.
- Propagation: the "highest-yield" Exam Relevance language and superlatives appear only in the places listed.

## Not checked
Page images other than p. 75; bold/italic details; Figure drawings (not mine); the p. 81 wording "Many students wrongly mark the spermatid stage" taken as printed.
