# new-text-R3 (fixer for review R3, Biology 12 Chapter 12)

Files: TT = topics-4-5-extras-a-b.ts, EX = extras-c-f.ts, T13 = topics-1-3.ts, KP = lib/revise/keypoints-biology-12-12.ts (all under content/textbooks/bio-12-12/ except KP).

## [NEW] wordings (all flags applied, optional ones included)
1. TT Topic 04 Exam Relevance: "Nutrient Cycling appears in CBSE Boards as a 2–3 mark carbon/phosphorus cycle or gaseous-vs-sedimentary question, and has carried NEET questions in past papers, most often the “phosphorus is sedimentary, not gaseous” trap or reservoir matching (the book’s estimate from past papers, not official figures); check the current NTA syllabus for its status." MCQ 2 and 4 labels "(NEET-scope: nutrient)" -> "(nutrient cycling)". Topic 05 Exam Relevance: added "Check the current NTA syllabus for its status."
2. EX Additional D Practice 6 answer: "...whereas a pyramid of numbers can invert when one large producer (a tree) supports many small consumers, and a pyramid of biomass can invert in the sea, where a small, fast-renewed phytoplankton standing crop supports a larger biomass of consumers."
3. TT Additional A table row 2: "Optimal (fast and balanced: no nitrogen drawn from the soil)". KP topic 5 #2 answer: "Detritus at about 25–30 ∶ 1 decomposes fast and in balance; ... below 25 ∶ 1 (...) it is also fast."
4. TT Additional A worked example 3: step "Higher soil moisture in the rainforest (moist but well-aerated soil) supports a larger and more active microbial biomass."; answer "...the temperate winter’s near-freezing temperatures slow microbial enzyme activity, decelerating catabolism most severely."
5. EX Additional E: Method keystone examples now sea otters, the starfish <i>Pisaster</i> (its removal lets mussels crowd out other shore species), elephants (bees removed); Practice 2 answer "Example: sea otter (...) or elephant (...)."; Practice 5 answer "(an important service provider)".
6. a. TT Additional B kalam: "Each seral stage modifies the habitat in a way that makes room for the next." b. EX Additional C kalam: "These cycles share the gaseous/sedimentary distinction and involve specific microbial transformations." c. EX Additional E intro: "These can appear in high-difficulty application questions." d. TT Additional A intro para 1: "...ecosystem-service valuation, with the keystone-species concept that the chapter does not cover. High-difficulty questions can draw on these layers."
7. TT Additional A intro para 2: "The chapter names the five steps of decomposition, gives earthworms and termites as detritivores that fragment detritus, and says that decomposers (fungi and bacteria) mineralise it. It does not name ..." (rest unchanged).
8. T13 Topic 03 cheat sheet: "~90% not passed on (mostly lost as heat) → chains usually ~4–5 levels."
9. T13 Topic 03 Concept intuition: "The <b>Sun is the energy source</b> for nearly all ecosystems (the main exception being chemosynthetic communities, such as those at deep-sea hydrothermal vents)."
10. TT Topic 04 Framework A: xerarch "→ climax community (a forest, where the climate allows)"; hydrarch "→ climax community (a terrestrial forest, where the climate allows)".
11. EX Additional F archetype 5: "(2) the biomass pyramid can invert in some aquatic ecosystems, typically the sea."
12. EX Additional E Practice 5: "Bees are small but are the main animal pollinators, and animal pollination raises the yield of about 75% of the leading crop species and is essential for some. ... (an important service provider)."
13. TT Topic 04 hydrarch: "→ free-floating and rooted floating plants (e.g. Wolffia, Azolla; Nymphaea, Trapa)" (italic tags kept), plus note "(NCERT’s text gives the shorter order phytoplankton → free-floating plants → rooted hydrophytes → sedges and grasses → trees; its figure gives the stages above.)". TT Additional B hydrarch stage 3 changed to "Free-floating and rooted floating plants: e.g., Wolffia, Lemna, Azolla; Nymphaea, Trapa." (my extension for consistency).
14. EX Additional F archetype 4: "Draw a quick four-by-four grid (one row for each item of Column I)."
15. TT Topic 05 Framework B: "Every item in the NCERT list slots into regulating, supporting or cultural (the list has no provisioning item), which makes the list far easier to recall under exam pressure."
16. KP topic 0 #2 why: "Structure is what is there and how it is layered; function is what the ecosystem does: making, breaking down and passing on matter and energy."
17. TT Additional A kalam and first sentence of "C:N ratio as rate controller": "The C:N ratio of detritus is one of the main controls on decomposition speed."

## Printed keys, numbers, titles, headings changed
None. No answer key, number, title or heading changed (only text of explanations, labels, table cell).

## Founder decisions / not applied
- Flag 1 option: Topic 05 "NCERT names them", "The standard NCERT list", "NCERT’s wording and the one examined" left as is (the book prints NCERT’s own list and wording; the review allowed leaving them); the added syllabus sentence carries the caveat. Founder: confirm live NTA syllabus and decide whether to relabel "NCERT (earlier editions)".
- Flag 8: Figure 12.3 drawn labels "~90% lost / as heat" NOT changed (they are the book's printed words, the diagram tests assert them, and the caption already says "not passed on"). Founder decision whether to redraw as "~90% not passed on".
- Flag 1 note, kept book wording elsewhere: "Nutrient cycling" exam text keeps the book's phrasing plus the caveat.
- Review's "closed" items: keep "less than 10%" and carbon 1%/71% as printed (no change).
- Flag 13 optional NCERT-order note added as drafted (check it reads well).
- Did not touch "NEET often tests them" (F) and A intro para 2 "often examine (labelled)" per review 6e.

## Tests
- book-rules/book-chapters/display-fit (filtered): book-rules and book-chapters PASS; display-fit has 1 failure, "Biology 11 Ch 19 A p: pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH2 is 345 wide on a 342 line", a Biology 11 card outside this chapter, not caused by these edits (no Biology 12 Ch 12 line reported).
- lib/diagrams -t "biology.12.12": PASS (19).
- lib/revise: PASS (137).
- eslint on the changed files: clean (no output).
