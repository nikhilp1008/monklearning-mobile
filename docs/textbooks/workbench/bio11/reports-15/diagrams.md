# Biology Class 11 Chapter 15: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:22:11Z)

All seven Figure 15.1 to 15.7 diagrams are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-15.ts (export DIAGRAMS_BIOLOGY_11_15 kept). The one narrow run `jest-serial.sh lib/diagrams -t "biology.11.15"` passed 31 tests (every case: checks, audit, no unplaced tags), and `npx eslint lib/diagrams/biology-11-15.ts` is clean. I rendered every case from a scratch test through the kit's SVG output and looked at each one; the scratch test and renders are deleted. I edited no other file.

All seven ids were already used in the chapter files (topics-1-2.ts and topics-3-4-extras-a-c.ts), so nothing is missing.

**Ids, drawn page, topic index**
| id | drawn page (caption page) | topic index | cases (chips) |
|---|---|---|---|
| b11-15-fig-15.1 | p. 890 (889) | 0 | Three layers |
| b11-15-fig-15.2 | p. 892 (891) | 0 | Clotting cascade |
| b11-15-fig-15.3 | p. 894 (893) | 0 | ABO wheel |
| b11-15-fig-15.4 | p. 900 (899) | 1 | Vessels, Valves, Nodal pathway |
| b11-15-fig-15.5 | p. 902 (901) | 1 | Two circuits |
| b11-15-fig-15.6 | p. 907 (906) | 2 | One cardiac cycle |
| b11-15-fig-15.7 | p. 910 (909) | 2 | Healthy artery, Atherosclerotic artery |

Each caption is the book's, without "Figure 15.N" and without "(see next page)". Figures 15.4 and 15.7 are split into cases, and every case carries the whole caption word for word.

**Pages with no drawing:** `pdfimages -list` finds no raster image on any page of the chapter. The shapes were counted on the page images. Pages 887 to 942 other than the seven plate pages hold only text, tables and page rules. The lineage and cascade lines on pp. 919 and 921 are typeset text with arrows, so there are no unnumbered `-d` ids.

**What is the book's**
- Every label, box and note the plates print, word for word.
- 15.1: the shares (plasma ~55%, buffy coat <1%, RBC ~45%), drawn to scale from them (checked).
- 15.2: the eight boxes in the book's order, the dashed "acts as enzyme (+ Ca2+)" arrow from prothrombinase to the prothrombin step, HEPARIN (inhibits) on that same step, and "→ Clot retraction / → Fibrinolysis".
- 15.3: Ag and Ab of A, B, AB and O, and the five donor arrows (O to A, B and AB; A to AB; B to AB), recomputed from the antigen and antibody table.
- 15.4: the plate's own coordinates scaled by 0.33, the four valves, the SA node, AV node, bundle of His, Purkinje path, and the dashed (deoxygenated) and solid (oxygenated) sides.
- 15.5: the six boxes and six arrows, with a check that the blood path is one closed loop.
- 15.6: axes -1.0 to 1.5 mV and 0.0 to 0.8 s, P 0.15 mV near 0.12 s, R 1.0 mV near 0.24 s, Q about -0.1, S about -0.25, T 0.25 mV near 0.47 s, the PR bracket 0.05 to 0.20 s labelled ~0.12–0.2 s, and the 0.8 s cycle arrow (checked as 75 per minute).
- 15.7: the wall, plaque and lumen proportions (lumen 0.75 of the wall radius in (a), 0.31 in (b), so (b) carries about 17% of (a)'s lumen area), the lipid core under the fibrous cap, and the three Ca2+ deposits.

**What is schematic**
- All sizes and positions, re-laid for a phone.
- Between the ECG's named points the trace is a smooth interpolation, with straight segments through the QRS.
- The leader angles and arc radii in 15.3.
- The curve of the plaque layers in 15.7.
- The book's blue and red become dashed and solid outlines, with a legend in 15.4 and 15.5, because the app draws no fills.
- The 15.4 heart is cut into three cases (Vessels, Valves, Nodal pathway), because 13 tags do not fit around it at phone width.
- 15.1 has the red-cell column hatched; 15.2 is one two-column page instead of the book's two rows.

**Exceptions to word for word**
- Pulmonary valve (15.4, p. 900): the book draws the small oval at the base of the pulmonary artery with no label. It is labelled "Pulmonary valve", as the brief directs.
- "~0.12-0.2 s" in 15.6 (p. 907) is set with an en dash.
- The caption's "(<1%)" is kept as printed.

**Marigold highlight in each drawing (colour only):** buffy coat (15.1), prothrombinase box (15.2), the three donations of O (15.3), the four chambers (15.4 Vessels), the four valves (15.4 Valves), the nodal pathway (15.4 Nodal pathway), the heart group (15.5), the trace (15.6), the lumen (15.7).

Nothing in the figures contradicts the errata or the SA-node rates. The only other items of yours I saw on the plates are the PR bracket spanning 0.05 to 0.20 s (0.15 s, inside the printed 0.12 to 0.2 s) and a 0.8 s cycle (75 per minute).
