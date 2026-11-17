# Biology Class 11 Chapter 9: keypoints helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-16T23:12:04Z)

I wrote `/Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/revise/keypoints-biology-11-09.ts`. It exports `KEY_POINTS` with 30 points, and the two checks you asked for both pass. I did not run tsc, the whole jest suite or any git change.

**Checks**
- `jest-serial.sh lib/revise`: 1 suite passed, 137 tests passed.
- `npx eslint` on the file: clean.
- Those jest tests cover only formula cards. No test covers key-point content, so the em-dash, slash, apostrophe and chapter-text checks below were mine and I did not re-read the full file against the chapter after writing it.
- A grep of the file found 0 em dashes and 0 number-over-number slashes.

**Counts per topic**

| Topic | Index | Points | Kinds |
|---|---|---|---|
| Topic 01 | 0 | 5 | 2 remember, 1 mixup, 1 mistake, 1 shortcut |
| Topic 02 | 1 | 5 | same split |
| Topic 03 | 2 | 5 | same split |
| Topic 04 | 3 | 5 | same split |
| Additional A | 4 | 2 | remember |
| Additional B | 5 | 2 | remember |
| Additional C | 6 | 2 | remember |
| Additional D | 7 | 2 | remember |
| E (Summary Checklist) | 8 | 0 | none, as in Amines |
| F (What NEET Actually Asks) | 9 | 2 | 1 remember, 1 mistake |

- **Pages:** a folio comment sits above every point. I took the section pages from the paged text dump.
- **Formulas:** Additional A has Michaelis-Menten, Lineweaver-Burk, and `K`<sub>m</sub><sup>app</sup> and `V`<sub>max</sub><sup>app</sup> as stacked fractions. `K`, `V`, `S`, `I` are italic with upright subscripts.
- **A.1 arithmetic:** I recomputed A.1 (`V`<sub>max</sub> 50 μM min⁻¹, `K`<sub>m</sub> 20 μM), the practice answers 20, 5 μM and about 3 mM, and the urea cycle's 3 ATP and 4 high-energy bonds. All are correct.

**Memory lines (`say`), word for word without quotation marks**
- **Topic 01:** soluble = small, insoluble = big; lipids: small molecules in big company.
- **Topic 02:** nucleoTide = phosphaTe; Glycine = no handedness.
- **Topic 03:** nucleoTide = phosphaTe; PURe As Gold = purines A, G.
- **Topic 04:** Co-enzyme casual, Prosthetic permanent; catalyst = route-finder, not bulldozer (no equilibrium shift).
- Topic 02 and Topic 03 both open with the nucleotide aid, so it appears twice.
- In Topic 02 I put the nucleotide point before the glycine point in the array, so the memory lines keep the book's order.

**Where I departed from the book's words, and why** (all listed in the header comment)
- **Cellulose:** the book calls it a secondary metabolite in Topic 01 but a primary structural carbohydrate in its own MCQs. No point classifies it. The secondary examples used are rubber, gums, resins, alkaloids, pigments, drugs and toxins.
- **Da cut-offs:** I give the 18–800 and above-1000 Da figures as rough ranges, with the dividing line at about 1000 Da. I quote no lipid weight and do not assign the 800–1000 band.
- **Essential fatty acids:** left out, because arachidonic acid is only conditionally essential.
- **Amino-acid classes:** only the clear members are used. Borderline cases such as tyrosine and histidine are not asked.
- **Glycine:** it is "the lone achiral standard amino acid", not "all 19 others".
- **Glutamate:** it is the nitrogen collection point, and α-ketoglutarate is the acceptor in transamination. D.1's "primary amino-group donor" wording is not repeated.
- **Cholesterol:** it is the characteristic sterol of animal membranes. "Absent from plants" and "the liver is the sole site of the urea cycle" are not repeated.
- **Vitamins:** I dropped the claim that fat-soluble vitamins are missing from the acid-soluble fraction, and the B6 deficiency signs (Chemistry 12 gives different ones). Only the clear vitamin and disease pairs are used.
- **Enzymes:**
  - The temperature optimum is 37 °C for human enzymes, not the example's 40 °C.
  - Ligases use energy "usually from ATP", since bacterial DNA ligase uses NAD⁺.
  - An enzyme "on its own" cannot make an unfavourable reaction occur.
  - "Every time", "the single most common" and "answers a large share" are not repeated.
- **DNA and proteins:** DNA is double-stranded and RNA mostly single-stranded. "The primary sequence alone dictates the fold" is not repeated.
- **FAD:** it is a coenzyme when loosely bound and the prosthetic group in succinate dehydrogenase. NAD⁺ and haem are the clean examples.
- **Exam shares:** F is described as the book's estimate from past papers, not official figures, with no years and no "every".
- **Lineweaver-Burk:** the shared x-intercept is stated for pure non-competitive inhibition only.
