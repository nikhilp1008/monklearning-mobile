# Brief: Chemistry Class 11, Chapters 9 and 10, rebuilt word for word from the Master Reference book

**Read, in full and in this order:**
1. `/Users/nikhi/Developer/monk-books/chem11/briefs/MAC-BRIEF-C11-01-02.md` (Chemistry rules, notation, and through
   it the Physics base `/Users/nikhi/Developer/monk-books/BRIEF-12-07-08.md` — read that too, it is the block system,
   ownership, ids, parts, "word for word" exceptions, checking and report rules).
2. The "Lessons from the Chapter 1–2 reviews" section of `MAC-BRIEF-C11-03-04.md` (ignore its page map).
3. `MAC-BRIEF-C11-07-08.md` (ignore its page map; keep its rules on Summary Checklist, "What JEE and NEET
   Actually Ask", "Start here" openings, answers paired with their practice questions).
4. This file — it replaces only page maps and file names, and adds the lessons since. Where files disagree, this wins.

Chapters 1–8 of Class 11 Chemistry are finished and live. **Your closest models:** Chapter 8
(`content/textbooks/chem-11-08/topics.ts`, `extras.ts`, `lib/diagrams/chemistry-11-08.ts`,
`lib/revise/keypoints-chemistry-11-08.ts`) and Chapter 7 (`chem-11-07/…`). Read one topic file and the diagram file
before you start. Founder decisions for Chemistry: `/Users/nikhi/Developer/monk-books/chem11/DECISIONS-C11.md`.

## Where things are
- The book: `/Users/nikhi/Developer/monk-books/chem11/chem11.pdf` (PDF page = printed folio). Text dump (prose only,
  maths and subscripts scrambled): `/Users/nikhi/Developer/monk-books/chem11/chem11.txt`. Read every formula,
  charge, subscript, arrow condition and number from the page image (`pdftoppm -r 110 -f N -l N -png <pdf>
  <your folder>/p`, or the Read tool on the PDF with `pages`).
- Errata: book pp. 503–510 — check for any Chapter 9 or 10 item and undo/apply it; report each.
- Your work folder: `/Users/nikhi/Developer/monk-books/chem11/work-<your-name>/`. Delete PNGs when done.
- The repo: `/Users/nikhi/Developer/monk-learning-app`. Your file exists as an empty stub, already wired in.
- Never open an iOS Simulator or Android emulator. No Metro, Expo or builds. No git commands that change anything.

## Page map (confirm every boundary on the page images; report any difference)

**Chapter 9, Hydrocarbons (pp. 400–455).** p. 400 title, top of p. 401 contents (not copied).
- **'00' "Start here" opening = "Classification of Hydrocarbons" (pp. 401–402)** — founder's decision: `n: '00'`, not
  extra, like Chapter 8's Foundations; title "Classification of Hydrocarbons"; its parts at the book's own sections.
- Topic 01 Alkanes: pp. 403–411 (Figures 9.1, 9.2; figure page p. 406)
- Topic 02 Alkenes: pp. 412–420 (Figures 9.3–9.5; figure pages 414, 417)
- Topic 03 Alkynes: pp. 421–429 (Figures 9.6, 9.7; figure pages 423, 426)
- Topic 04 Aromatic Hydrocarbons: pp. 430–438 (Figures 9.8, 9.9; figure page 433)
- p. 439 shared introduction "Chapter 9: Hydrocarbons — Additional Topics" → first paragraph(s) of A's Introduction.
  Additional A Aromaticity as a Decision Procedure (439–441), B Ozonolysis, Completed (442), C Alkene Stability,
  Saytzeff Elimination, and Hydration Regio… (full title from p. 443; 443–444), D Putting Numbers on Free-Radical
  Selectivity (445–446), E Counting Puzzles: Isomers, Hydrogenation Reversals, and … (full title, 447), F EAS
  Reactivity Rankings and the Order of Operations (448–449), G Terminal Alkynes: The Two Further Tests (450),
  **H Summary Checklist** (p. 451), **I What JEE and NEET Actually Ask** (book "Addendum P", 452–455; "Addendum P"
  references → "Additional topic I").
- The book's "Sub-topic 01…04" references → "Topic 01…04"; "Sub-topic 00"/the classification → "the opening section,
  Classification of Hydrocarbons" (list each).

**Chapter 10, The p-Block Elements (Groups 13 and 14) (pp. 456–502).** The book runs the chapter as ONE block of
nine "Section N —" headings, not sub-topics. **Founder's layout (2026-10-31):**
- Topic 01 = Section 1 General Introduction to the p-Block (pp. 456–458)
- Topic 02 = Section 2 Group 13: The Boron Family (458–459)
- Topic 03 = Section 3 Important Compounds of Boron and Aluminium (460–461)
- Topic 04 = Section 4 Group 14: The Carbon Family (462–464)
- Topic 05 = Section 5 Important Compounds of Carbon and Silicon (465–466)
- Topic 06 "Worked examples & exam practice" = Section 6 Worked Examples (467–469), Section 7 Practice Exercises
  (470–471), Section 8 Common Pitfalls & Pro-Tips (472), Section 9 What JEE & NEET Actually Ask (473–474), each as a
  part of Topic 06 with the book's own section title.
- Each of Topics 01–05 has its own title (the section's title without "Section N —"), a kalam, and parts at the
  book's sub-headings within that section (bold run-in heads such as "Oxidation states.", "Metallic character." may
  become parts if they are true sub-sections; otherwise keep them as bold leads — be consistent and report your
  choice). The chapter's opening paragraph (p. 456, before Section 1) → the first part of Topic 01 ("Introduction").
- "Section N" references → "Topic 0N" (Section 6–9 → "Topic 06"); "Worked Example N" stays "worked example N".
- p. 475 shared introduction "… — Additional Topics" → A's Introduction. Additional A The Numbers Behind the Group 13
  and 14 Trends (475–477), B Boron's Anomalies and the Diagonal Relationship, Tabulated (478–479), C Boron Compounds in
  Depth: Borax, Boric Acid, the Trihalides … (full title, 480–484), D Aluminium: Oxide, Hydroxide, Chloride and Alums
  (485–486), E Allotropes of Carbon: Structure to Property (487–489), F Carbon Monoxide, Carbon Dioxide and the
  Carbonates (490–491), G Silicon: Silica, Silicates, Silicones and Zeolites (492–494), H Tin and Lead: Compounds the
  Papers Name (495–496), I Which Is Stronger, Which Is More Stable: The Reasoning Rules (497–499), **J Summary
  Checklist** (p. 499), **K What JEE and NEET Actually Ask** (book "Addendum P", 500–502; references → "Additional topic K").
- Check where each addendum's answers end — they often spill onto the next addendum's first page.

## Files and ids
- Ch 9: `content/textbooks/chem-11-09/guide-topic-1.ts` ('00' opening + Topic 01), `topic-2.ts`, `topic-3.ts`,
  `topic-4.ts`, `extras-a-d.ts`, `extras-e-i.ts` (E, F, G, H Summary Checklist, I).
- Ch 10: `content/textbooks/chem-11-10/topics-1-2.ts`, `topics-3-5.ts`, `topic-6.ts`, `extras-a-d.ts`,
  `extras-e-k.ts` (E–I, J Summary Checklist, K).
- Diagrams: `lib/diagrams/chemistry-11-09.ts` (`DIAGRAMS_CHEMISTRY_11_09`: Figures 9.1–9.5 and drawings of the '00'
  opening and Topics 01–02), `chemistry-11-09b.ts` (`…_09B`: Figures 9.6–9.9 and drawings of Topics 03–04 and A–I),
  `chemistry-11-10.ts` (`DIAGRAMS_CHEMISTRY_11_10`: every Chapter 10 drawing). Ids `c11-09-fig-9.N`,
  `c11-09-<topic n>-d<k>`, `c11-10-fig-10.N`, `c11-10-<topic n>-d<k>` (topic n = the app's: '00', '01'…, 'A'…).
- `topic` index = position in the chapter's topics array. **Ch 9: '00' opening = 0, Topics 01–04 = 1–4, A–I = 5–13.
  Ch 10: Topics 01–06 = 0–5, A–K = 6–16.**
- Key points: `lib/revise/keypoints-chemistry-11-09.ts`, `-10.ts` (none for Ch 9's '00' opening, none for Summary
  Checklists).

## Figure placement (rule since the Physics 12 Ch 12 review)
The book prints figures on "CHAPTER N · FIGURES" pages and often never refers to them. **Place each figure where it
illustrates the text** — after the paragraph, step or formula it shows; at the book's reference if there is one.
List each placement (after which block) in your report.

## Hydrocarbon and p-block notation (new for this pair)
- Structures in text: condensed formulas with en dashes for bonds (CH<sub>3</sub>–CH<sub>2</sub>–), "=" and "≡"
  for double/triple bonds; R, R′ upright; reaction conditions on the arrow as the book prints them (above/below
  → as "→ (conditions)" or on separate lines, consistently with Chapters 7–8); named reactions capitalised as
  printed (Wurtz, Kolbe, Markovnikov, Kharasch, Friedel–Crafts, Kucherov).
- cis/trans, E/Z, o-/m-/p-, sec-, tert-, n- upright (Chapter 8 rule); effect labels +I, −I, +R, −R upright.
- Ions and charges: digit first, real minus (CO<sub>3</sub><sup>2−</sup>, [B(OH)<sub>4</sub>]<sup>−</sup>,
  [AlCl<sub>4</sub>]<sup>−</sup>); hydrates with a middle dot (Na<sub>2</sub>B<sub>4</sub>O<sub>7</sub>·10H<sub>2</sub>O);
  bridging H in diborane as printed; states (s), (l), (g), (aq) upright.
- **Balance every equation for atoms and charge yourself** (preparations, combustion, ozonolysis, borax, diborane,
  aluminium with acid and alkali, CO/CO₂, silicones, SnCl₂/PbO₂). Recompute every number (isomer counts, ratios of
  free-radical products, heats/stabilities, borax/boric acid stoichiometry, hydrogen volumes at STP or 1 bar — note
  which molar volume the book uses, silicate charges, Tl⁺/Tl³⁺ reasoning).
- Check every IUPAC name against its structure (Chapter 8's NCERT parent-chain note applies; follow the book and
  report any name that differs under NCERT's convention).

## Lessons from the Physics 12 and Chemistry 7–8 reviews (follow them)
- **A nudge describes its own option.** Never one sentence shared by two options unless true of both; if the book
  shares one that is not true of both, report it.
- **Introductions' claims** ("the chapter does not cover / only mentions X", "Nothing here repeats the chapter"):
  check each against Topics as built and report every false one with what the chapter actually does.
- **Observations and colours** (bromine water, Baeyer's reagent, tests, flame colours): check each is chemically
  true; report any the book gets wrong.
- **Stability/acidity orders and "X always beats Y" rules**: check each; report overgeneral ones (e.g. "resonance
  overrides everything").
- **Questions with no printed answer**: report them (the reviewer drafts a model answer).
- **Unstated assumptions** (STP vs 1 bar, acidic/basic medium, "excess", "one molecule vs a sample"): report each.
- **Formula cards whose symbols have no meaning on the card**: report them (the reviewer adds legends).

## The automatic checks
`cd /Users/nikhi/Developer/monk-learning-app && npx jest content/textbooks lib/revise lib/diagrams` — all must pass on
your file before you report (failures naming only another agent's file or an undrawn fig id are theirs — say so).

## Diagram agents (also read `/Users/nikhi/Developer/monk-books/DIAGRAM_BRIEF-12-07-08.md` in full, and look at
`lib/diagrams/chemistry-11-08.ts` and `chemistry-11-04.ts` for chemistry drawing helpers)
- Computed and checked: the ethane torsional-energy curve (minima at 60°, 180°, 300°; barrier ≈ 12.5 kJ mol⁻¹ or the
  book's value), sawhorse/Newman projections with correct dihedral angles, orbital pictures (sp² σ frame + p-π;
  sp + two π), cis/trans isomers with correct geometry, ozonolysis products from the drawn alkene, benzene Kekulé and
  hybrid, the EAS mechanism (arrows from π to E⁺, the arenium ion, loss of H⁺), Kucherov hydration; for Chapter 10,
  any structures (diborane with bridging H, borax anion, silicate units, graphite/diamond, silicones) drawn with
  correct connectivity; each `check` recomputes what the drawing and caption state (atom counts, charges, angles).
- No fills; one highlight; fit a phone (390 wide). Caption = the book's caption word for word, without "(see next page)".

## Your report
As the earlier briefs say, plus: every figure placement, every renumbered cross-reference, every errata item, every
suspected book error (page, what it says, what is right, why), every MCQ key or nudge you doubt, every question with no
printed answer, every piece of new text written by us, and the exact results of `npx tsc --noEmit`,
`npx jest content/textbooks lib/revise lib/diagrams` and `npx eslint <your files>`. Return the report as your final
message (you cannot write .md files).
