# K4 report: key points, Chemistry Class 11, Chapters 7 and 8

Files: `lib/revise/keypoints-chemistry-11-07.ts`, `lib/revise/keypoints-chemistry-11-08.ts`.
Checks: `npx tsc --noEmit` clean; `npx jest lib/revise` 134/134 passed; eslint clean on both files. Work PNGs deleted.

## Points per topic

**Ch 7 (pp. 295–344)**
- Topics 01–04 (index 0–3, pp. 296–304, 305–312, 313–319, 320–326): 5 each (2 Remember, 1 Don't mix up, 1 Common mistake, 1 Exam shortcut).
- Additional A–F (index 4–9; A pp. 327–331, B 331–333, C 333–334, D 335–336, E 336–338, F 338–339): 2 each.
- G Summary Checklist (index 10, p. 339): none, as instructed.
- H What JEE and NEET Actually Ask (index 11, pp. 340–344): 2 (1 Remember, 1 Common mistake).
- Total: 34.

**Ch 8 (pp. 345–399)**
- '00' Foundations (index 0, pp. 346–352): 5.
- Topics 01–04 (index 1–4, pp. 353–358, 359–365, 366–373, 374–380): 5 each.
- Additional A–F (index 5–10; A pp. 381–383, B 383–386, C 386–388, D 388–390, E 390–391, F 391–394): 2 each.
- G Checklist (index 11, p. 394): none.
- H (index 12, pp. 395–399): 2.
- Total: 39.

Page boundaries matched the brief. The only refinements: in Ch 7, D starts on p. 335 and E on p. 336 (bottom), and F on p. 338. In Ch 8, B starts on p. 383 (bottom), C on p. 386, D on p. 388 (bottom), E on p. 390 and F on p. 391.

## Memory lines (Ch 1–4 form: no quotation marks, a label after " — ")
- Ch 7, T01: OIL RIG; LEO the lion says GER (the book's third aid, "The agent does the opposite to itself", is not used). T02: 5–3–1 as the base grows on, the only one. T03: An Ox / Red Cat, the only one. T04: Count first, confirm with O.N.; …, the only one. So T02–T04 each have one memory line.
- Ch 8: '00' vertex and end … / CH2 climbs …; T01 Suffix first … / a missing bond drops you … (the book's second aid, split from the first); T02 Connect first, then arrange / two different on each end (the third aid, Zame Zide = Z, is not used); T03 Nu = electron-rich, E = electron-poor / resonance beats hyperconjugation beats induction; T04 blue is N, red is N&S / Carius cuts halogens, Kjeldahl/Dumas net nitrogen.
- The book's lowercase starts are kept ("vertex …", "two different …", "a missing bond …", "blue is N …").
- I wrote the labels where the book gives none.

## Recomputation

I recomputed every oxidation number, n-factor, electron count, balanced equation (atoms and charge), E° gap, log K, ΔG°, titre, percentage (Liebig, Dumas STP and gas-law forms, Kjeldahl direct and back-titration, Carius Cl/Br/S), specific rotation and enantiomeric excess, hyperconjugation count, isomer count (C3H6BrCl 5, C4H10O 7, C3H8O 3, cyclic C4H7Cl 7, hepta/hexa-2,4-diene 4/3, 2,3-dichlorobutane 3, 2,3-dibromopentane 4), IUPAC name and acid-strength ranking that I used. Every one checks out. I found **no outright numerical or chemical error** in the material used.

## Suspected book issues (left out, for the expert review)
1. **Ch 8, pp. 370, 372, 373: benzyl carbocation ranked the most stable, above tert-butyl.** Example 2 (p. 370) answers "benzyl". Pitfall 4 (p. 372) says "Allyl/benzyl beat tertiary", and the cheat sheet (p. 373) says "resonance (allyl/benzyl) overrides everything". Why it is suspect: benzyl versus tert-butyl is genuinely close and contested; gas-phase hydride affinities put tert-butyl as slightly more stable. Many JEE keys accept the book's answer, but "overrides everything" is an over-generalisation. Not used: the stability points use only the alkyl order and the substituted-benzyl order (p-methoxy > benzyl > p-nitro), which are safe. Correction suggestion: soften the wording to "resonance-stabilised (allyl/benzyl) cations are exceptionally stable, comparable to or above tertiary". Expert to decide.
2. **Ch 7, p. 341–342, Additional topic H, archetype 5:** the reasoning for the assertion–reason item says oxygen's O.N. is capped at +2 because it "cannot expand its valence shell beyond an octet (no d-orbitals), not merely its electronegativity". Why it is suspect: the usual explanation is electronegativity (only F is more electronegative), so this is debatable. Not used.
3. **Old NCERT numbering** (Ch 7 "NCERT Table 8.1", "Problem 8.5", pp. 327–343; Ch 8 "NCERT section 12.7.6–12.7.7", "Problem 12.16/12.17/12.19", pp. 381–384): the key points cite none of these. The Ch 8 Supplement uses the old Unit 12 numbering too, which may need the same bracketed note the brief prescribes for Ch 7.
4. **Book inconsistencies (notation only, no error in fact):**
   - Ch 8 Topic 01 lists seniority three ways. P. 354 includes anhydride and acyl halide; the cheat sheet on p. 358 omits acyl halide; p. 387 uses braces. I used the p. 354 form.
   - Single bonds in condensed formulas are printed with a minus sign "−" in the Ch 8 Additional topics and with an en dash "–" in the regular topics. I used the en dash throughout, per the house rule.

## Notation choices
- **Cell notation:** Zn|Zn<sup>2+</sup>(0.1 M)‖Cu<sup>2+</sup>(0.01 M)|Cu, with no spaces around the bars, as in the brief's example. The book typesets spaces.
- **Labels:** meq<sub>ox</sub> and meq<sub>red</sub> are upright. "n-factor" is upright as a word, and <i>n</i> is italic as a variable.
- **Superoxide O.N.:** written as −½. The book prints a stacked fraction.
- **Arrow conditions:** Δ over the arrow is written →<sup>Δ</sup>, used twice in Ch 7 T04. No condition is longer than 12 characters.
- **Hybrid labels:** sp<sup>3</sup>, sp<sup>2</sup>, sp and p orbitals are upright, NCERT style. The book sets them in maths italic. "s-character" is upright too.
- **Upright labels:**
  - Effect labels +I, −I, +M, −M, +E, −E are upright, as Topic 03 prints them. Additional topic B italicises them.
  - Descriptors (R,R), (E,Z), d/l, N- and N,N- are upright as printed. o-/p- are upright, as decided earlier.
  - Generic letters are upright: R in R<sub>3</sub>C<sup>+</sup>, A + B → AB, X in AgX.
- **Italic maths:**
  - [<i>α</i>], <i>α</i><sub>obs</sub>, <i>c</i>, <i>l</i>, <i>w</i>, <i>m</i>(CO<sub>2</sub>), <i>n</i>(N<sub>2</sub>).
  - <i>R</i><sub>f</sub>: the book italicises the f too; the label subscript is upright here.
  - α in "α C–H" is italic.
  - 2<sup><i>n</i></sup> is a superscript, as on the page; the text dump flattens it to "2n".
- **Radicals:** the radical dot is written as <sup>•</sup> (CH<sub>3</sub><sup>•</sup>, R<sub>3</sub>C<sup>•</sup>).
- **Masses in formulas:** I wrote <i>m</i>(CO<sub>2</sub>) and <i>m</i>(AgX), the cheat-sheet form, instead of the book's <i>m</i> with a formula subscript. This avoids a sub inside a sub.
- **Page images versus the text dump:** the dump flattens superscripts (2n for 2<sup><i>n</i></sup>, 22 for 2<sup>2</sup>), splits charges onto other lines, and garbles sp<sup>2</sup> into "ᵏᵌ2" on pp. 356, 358 and 372. In each case I read the value from the page image.
