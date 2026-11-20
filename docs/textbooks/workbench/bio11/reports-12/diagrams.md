# Biology Class 11 Chapter 12: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:11:13Z)

All four Chapter 12 figures are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-12.ts, the only file I changed. The narrow jest run (`jest-serial.sh lib/diagrams -t "biology.11.12"`) passes (13 passed, 0 failed) and `npx eslint` on the file is clean. I rendered each figure with the dump and `qlmanage` and looked at it against the book page. The page images and the render folder are deleted. Nothing was run beyond what you listed.

**Ids created** (all registered under 'biology|11|12'; the topic index is the chapter array position, which agrees with the file holding each id):

| id | drawn / caption | topic | name |
|---|---|---|---|
| b11-12-fig-12.1 | p. 716 / p. 715 | 1 | Glycolysis (EMP pathway) |
| b11-12-fig-12.2 | p. 724 / p. 723 | 2 | The Krebs cycle |
| b11-12-fig-12.3 | p. 726 / p. 725 | 2 | ETS and chemiosmosis |
| b11-12-fig-12.4 | p. 733 / p. 732 | 3 | Amphibolic nature of respiration |

Each figure has one case. The caption is the book's own words, without "Figure 12.N" and without "(see next page)". The captions keep the book's Unicode CO₂, FADH₂ and H⁺. No em dashes in captions or labels, and a check confirms it.

**The book's, read from the page images:**
- Every box name, enzyme name, product label and key line, and the order of the steps.
- 12.1:
  - −ATP at hexokinase and phosphofructokinase, +NADH at PGAL dehydrogenase, +ATP at the 13BPG→3PG step and at pyruvate kinase.
  - The 2G3P→Pyr steps run twice per glucose.
  - The Investment and Pay-off bracket spans.
- 12.2: the carbon counts in the names, 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP, and acetyl-CoA entering at the oxaloacetate→citrate step.
- 12.3:
  - The complexes in the book's order, with only I, III and IV pumping H⁺ and II shorter.
  - UQ and cyt c, the NADH and FADH₂ entries, and the equation O₂ + 4H⁺ + 4e⁻ → 2H₂O.
  - ADP + Pᵢ in, ATP out, and H⁺ flowing back through ATP synthase.
- 12.4:
  - All 14 boxes and every arrow, including the two reverse (orange) arrows.
  - The box positions are the book's, scaled 0.66 across and 0.73 down.
  - Fats, Fatty acids and β-oxidation sit a little left of the book's and the Proteins column a little right, to make room for the labels.

**Schematic:**
- All box sizes, spacing and angles, re-laid for a phone.
- 12.1: a straight double arrow for triose phosphate isomerase (the book curves it), placed between G3P and DHAP.
- 12.2: the ring shape.
- 12.3: the membrane proportions, and Inter-membrane space and Matrix set horizontally (the book rotates them).
- 12.4: the curve of the fatty-acid reverse arrow.
- Colours: the book's red, green, orange and navy are replaced by the app's one marigold highlight, with a key line on the drawing:
  - 12.1: the −ATP arrows are marigold and the +ATP arrows are heavy ink.
  - 12.2: acetyl-CoA.
  - 12.3: ATP synthase and the H⁺ flow through it.
  - 12.4: the reverse arrows.
- The captions still say "red", "green" and "orange" arrows, as the book prints them, so the key lines on the drawing are what name them. Say if you want the caption colour words changed.
- Only 12.1 has a result tag ("Net: 2 ATP, 2 NADH, 2 pyruvate"), because the result tag is plain Onest and can't carry subscripts.
- The enzyme and compound names in 12.1, 12.2 and 12.4 are STIX text laid over the boxes, not tags.
- Mixed-font text uses `Sketch.text`, so sub/sup and Greek are all-STIX, per the Android rule.

**Checks in each diagram:**
- 12.1: ATP spent 2, made 4 (2 steps × 2 trioses), net 2; NADH 2; pyruvate 2 and carbons 6 = 3 + 3; ten enzyme labels (nine arrows plus triose phosphate isomerase); the book's labels are present.
- 12.2: CO₂ 2, NADH 3, FADH₂ 1, GTP 1, each counted from the step data and from the drawn labels; the carbon count round the ring (4+2 → 6, 6 → 5 → 4 → back to 4C); the members in the book's order.
- 12.3:
  - The complexes in the book's order, with exactly I, III and IV pumping, and 4 H⁺ arrows (3 up, 1 down).
  - The oxygen equation balanced by parsing it: 2 O and 4 H on each side, charge 0.
  - NADH, FADH₂, UQ, cyt c, ADP + Pᵢ and ATP present.
- 12.4: each of carbohydrates, fats and proteins reaches acetyl-CoA, the Krebs cycle and CO₂ + H₂O by the forward arrows; two reverse arrows; all 14 boxes and the legend present.
- All four: no em dash, labels at least 4 px clear of every line, inside the frame, inside their box, and the kit's `audit` clear with nothing unplaced.
