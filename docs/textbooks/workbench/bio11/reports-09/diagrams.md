# Biology Class 11 Chapter 9: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:07:08Z)

I wrote /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-11-09.ts and all five figures are drawn. `jest-serial.sh lib/diagrams -t "biology.11.9"` passes (43 tests) and `npx eslint` on the file is clean. I rendered every case and looked at it. I did not run tsc or the chapter book-rules tests.

**Figures** (one case per panel; every case carries the book's whole caption without "Figure 9.N", and there are no em dashes):

| id | drawn page | topic index | cases |
|---|---|---|---|
| `b11-09-fig-9.1` | 538 | 0 | Composition, Fractionation |
| `b11-09-fig-9.2` | 547 | 1 | Saturated, Unsaturated, Triglyceride |
| `b11-09-fig-9.3` | 555 | 2 | Protein levels, DNA strands |
| `b11-09-fig-9.4` | 562 | 3 | Energy profile, Enzyme models |
| `b11-09-fig-9.5` | 564 | 3 | Temperature, pH, Substrate, Inhibitor curves, Mechanism |

All five ids match the `fig` blocks in `content/textbooks/bio-11-09/topics-1-2.ts` and `topics-3-4.ts`. The placements are correct: 9.1 and 9.2 in Topics 01 and 02, 9.3 in Topic 03, and 9.4 and 9.5 in Topic 04. The captions are first printed on pp. 537, 546, 554, 561 and 563, and the drawings are on the pages above. I judged no other page of pp. 533-590 to hold a drawing. I did not run `pdfimages` or count vector shapes on each page, so that is a visual judgement.

**The book's (all of this is also stated in the file's header comment):**
- Every label, title and note, and the six composition shares. The bars use range midpoints: 80, 12.5, 6, 3, 2 and 1 per cent. Their proportions match the printed bars.
- The flow-chart steps and arrows.
- The fatty-acid skeletons: 8 C–C bonds, the C=C as the 4th bond with both neighbours on the same side (cis), and the triglyceride's CH₂/CH/CH₂ with three O–C(=O)–R arms.
- The protein levels and DNA sequence: top A T G C A G, bottom T A C G T C, two dotted bonds for A=T, three for G≡C, and opposed 5′/3′ arrows.
- The energy-profile proportions Ea : Ea′ : ΔG = 173 : 76 : 88 read from the page, scaled by 0.555.
- The temperature optimum at 37 °C with values read from the page: about 0.08 at 0 °C and 0.3 at 20 °C.
- The pH optimum at 7, Km at half Vmax, and Km′ = 3 Km (read from the page: 71 and 214 px) with the same Vmax.

**Schematic:**
- All positions and sizes are re-laid for a phone.
- The four protein levels sit in a 2×2 grid (the book has a row), and their pictures are schematic: the helix, sheet, folded star and four circles.
- Curve shapes are smooth stand-ins through the read points: Gaussian bumps for pH and the energy profile, an asymmetric curve for temperature, and a Michaelis–Menten hyperbola for the substrate and inhibitor curves.
- The notch and substrate shapes in 9.4(b) and the enzyme blocks in 9.5(v).
- I added a "Reaction rate" axis label to panels (ii) and (iii), because each panel is shown alone.
- Panels (i), (ii), (iii) and (iv) have no shaded area under the curve, because of the no-fills rule.

**Checks:** each case's `check` recomputes what its drawing states. Examples:
- Bar lengths against the midpoints; the flow-chart connections.
- Bond counts and cis geometry; carbon valence in the triglyceride.
- Base-pair complementarity and hydrogen-bond counts; strand direction.
- Both energy curves share the reactants and products levels, so ΔG is unchanged, and Ea and Ea′ are as drawn.
- Peak positions; Km at half Vmax; Km′ = 3 Km; same Vmax.
- Plus layout checks for label clearance, frame and label overlap, and the kit's `audit`.

I used the full-text-in-STIX approach (no tags, so no `mtag` was needed). Every text run is in a single font, which satisfies the Android rule. Subscripts follow the writers' notation, e.g. `<i>E</i><sub>a</sub>`.

Scratch page images and renders in `biology-work/work-diag09/` are deleted. No git changes were made.
