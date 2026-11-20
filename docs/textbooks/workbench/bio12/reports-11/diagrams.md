# Biology Class 12 Chapter 11: diagrams helper report(s)

Saved verbatim from the helper agents' final hand-backs (2026-11-17).

---

## Report 1 (writer, 2026-11-17T00:58:38Z)

Biology 12 Chapter 11: all six figure diagrams are drawn in /Users/raasikhnaveed/Desktop/monk-learning-mobile/wt-biology-textbooks/lib/diagrams/biology-12-11.ts (the only file I wrote). The export name `DIAGRAMS_BIOLOGY_12_11` is kept. Both final checks pass: `jest-serial.sh lib/diagrams -t "biology.12.11"` gave 19 passed, 0 failed, and `npx eslint lib/diagrams/biology-12-11.ts` is clean. I rendered all six to PNG and looked at them; the scratch files are deleted.

**Ids, drawn page, topic index.** The 6 ids match the chapter text and the brief, and there is no mismatch to report. Each is a single case.

| id | drawn page | topic | index |
|---|---|---|---|
| `b12-11-fig-11.1` | 605 | Topic 01 | 0 |
| `b12-11-fig-11.2` | 613 | Topic 02 | 1 |
| `b12-11-fig-11.3` | 618 | Topic 03 | 2 |
| `b12-11-fig-11.4` | 621 (upper) | Topic 03 | 2 |
| `b12-11-fig-11.5` | 621 (lower) | Topic 03 | 2 |
| `b12-11-fig-11.6` | 629 | Topic 04 | 3 |

- **Captions** are the book's, without "Figure 11.x" and without "(see next page)". In 11.4 and 11.5, K and N are italic, and 11.5 sets N = K/2 as a stacked fraction.
- **Page census:** I read every vector shape on pp. 604, 605, 613, 618, 620, 621 and 629 with PyMuPDF. The rest of pp. 600 to 655 has only text, tables and page rules, so I judged it to hold no drawing.

**The book's:**
- **11.1:** the five zones at 0, 20, 40, 60, 80, 100; the ticks 0.0 to 1.0 and 0 to 100; both axis names; both curves peaking at 1.0 at 50; the zones-note.
- **11.2:** the four responses with their descriptions, and the three adaptation types with their examples.
- **11.3:** the bar widths, read off the page vectors; the three growth words (Rapid, Zero, Negative).
- **11.4 and 11.5:** the axes (0 to 12 and 0 to 100), N₀ = 5, K = 100, both equations, and the five phase labels.
- **11.6:** the six interactions with their (+, −, 0) effects, descriptions and example pairs.

**Computed from the book's values:**
- **11.4 and 11.5 curves:** exponential N = 5e^(0.5t) and logistic N = 100/(1 + 19e^(−0.5t)). I fitted these to the page vectors: the exponential ends at 107 at t = 6.13, and the logistic is 95.5 at t = 12 and 50 at t = 5.89.
- **11.5 dots:** they sit on that curve at t = 0.8, 3, 5.89 and 8 (N of about 7, 19, 50, 74).
- **11.5 checks:** the code confirms the growth rate peaks at N = K/2.
- **11.1 curves:** Gaussians centred on 50 with σ = 24 (broad) and 9.9 (narrow), shifted to exactly 0 at 0 and 100. They match the book at the sampled points: broad 0.41 at 20 and about 0.9 at 40, narrow 0.6 at 40 and 60.

**Schematic (re-laid for a phone):**
- **11.1:** the curve names are a key under the plot (a stroke sample beside each name) instead of in-plot labels.
- **11.2:** a hub with four boxes (stressed organism circle in the centre).
- **11.3:** the bars are at the book's own widths.
- **11.4:** the legend is under the plot, and "dN/dt" and "(K − N)/K" are stacked fractions (house rule). The book prints them with slashes.
- **11.6:** two columns by three rows instead of three by two.
- **Colours:** one marigold highlight per drawing, not the book's colours. The highlights are the stenothermal curve (11.1), the hub (11.2), the pre-reproductive bars (11.3), the logistic curve (11.4), the K/2 square (11.5) and the effect pairs (11.6). The book's green, brown and blue carry no extra meaning, since every name is in its label.
- **Labels:** no em dashes. The minus signs in the effects are U+2212.

**Biology checks the code makes (about 7 per figure), and nothing in the book's figures came out wrong:**
- **11.3:** expanding has a widening base, stable is nearly straight-sided (base and middle within 5%), declining has the narrowest base. The three base widths rank in the same order as the growth words.
- **11.4:** the exponential curve passes K and the logistic stays below K. The two curves agree at the start and part later.
- **11.5:** growth is greatest at N = K/2, and acceleration comes before it and deceleration after.
- **11.6:** each description agrees with its effects. Predation and parasitism are the only repeated (+, −) pair. The link style (double arrow, single arrow, blocking bar) follows the effects.

**Not verified:** I did not check the italic and bold type on a device. The Mac renders STIX in stand-in fonts, so I judged layout only.
