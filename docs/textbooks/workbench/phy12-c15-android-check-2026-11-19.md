# Android check: Physics 12 Chapter 15 "Experimental Skills" (2026-11-19)

Emulator `pixel_play` (5554), dev client `com.monklearning.app` on Metro port 8082, signed in as the owner. Shots are outside the repo in `/Users/raasikhnaveed/Desktop/monk-learning-mobile/android-check-bio/shots/phy12-c15/` (`card*.png`, `fig*.png`, `pages/`). Nothing in the repo was changed by the check except the caption fix below.

## What was shot

| Part | Shot |
|---|---|
| Formula sheet | all 19 cards |
| Diagrams | all 28 figures, plus the second case of the four two-case figures (00-d1 negative error, 04-d1 reverse bias, 01-d2 ln A² panel, 01-d8 second resonance) |
| Reading pages | 14 parts, every screen: 1, 3, 6 (Topic 00), 14 (metre scale), 19 (Searle), 34 (resonance tube), 39 (mixtures), 46 and 47 (metre bridge), 60 (Topic 02 MCQ), 63 (parallax), 68 (prism), 80 (diode), 84 (Zener). Part numbers count from 1 across the chapter (91 parts). |

Looked at by eye, mostly as contact sheets; the sheets for parts 19, 39, 46, 63 and the MCQ and diode/Zener screens were read closely. Parts 1, 3, 14, 34, 47, 68 and 84 were shot and not read closely.

## Result

No blocking problem. Every card, figure and page opens and draws; no symbol is a box; subscripts, fractions (stacked in the cards) and the Greek letters render.

## Found and fixed

1. **Raw underscores in three figure captions** (`V_z`, `r_z`, `I_s`, `V_in`, `v_t` in the Zener regulator, Zener reverse curve and terminal-velocity captions): captions are rendered through the markup, so they must be `<i>V</i><sub>z</sub>`. Fixed in `physics-12-15.ts` and `physics-12-15b.ts`; the Zener regulator caption was re-shot after the fix and reads correctly. The terminal-velocity and Zener reverse captions were fixed the same way and not re-shot.
2. **Lens figure title** said "1/v against 1/u for a lens" while its axes and caption use |v| and |u|: renamed "1/|v| against 1/|u| for a lens".

## Observations, not defects of this chapter

- **Data tables become stacked rows** (shared reader): a five-column table such as the Searle readings reads as a tall list of label/value pairs, one block per row. Correct and readable, long. Same as the Biology and Maths tables.
- **Dev-build artefacts:** the "didn't open" state seen once was caused by a mis-quoted link of the shoot script (the part screen keeps its "missing" flag once set, until the app restarts); the thin dark line across some screenshots is the Android gesture bar.
- **Resonance, pendulum, calorimeter figures** are schematic by design (captions say so). The calorimeter's steam-heater thermometer is cut close to the right edge of the figure; legible.

## Key points screen (added later the same day)

Shot: the list top (Remember, 20 points), the first five answers opened ("Tap to check", marigold answer line, "I knew it / I didn't") and eight scroll screens through Remember and the start of Don't mix up (5), in `shots/phy12-c15/keypoints/`. Sections, counts, pinned headings, italics and subscripts, and the corrected lens answer (slope +1 with Cartesian signs, -1 with magnitudes) all render correctly. The answers of the first few points run four to five lines, within the other chapters' norm. The Common mistakes and Exam shortcuts sections and the memory lines at the foot were not scrolled to.

## Not checked

Not a real phone (emulator fonts). Not every reading screen of every part was read at full size. Reading parts were not shot for the other 77 parts. The last key-point sections and memory lines were not shot.
