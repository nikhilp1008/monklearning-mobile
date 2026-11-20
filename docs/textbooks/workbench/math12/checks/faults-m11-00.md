# Maths 11 Ch 0 (Basic Mathematics) faults, first Android shoot
Shots: /Users/nikhi/Developer/monk-books/math11/shots-00/ (c11-c00-pXXX-YY pages, r0-p009-cardN-YY card set). Full notes: /Users/nikhi/Developer/monk-books/math12/checks/notes-m11-00.md
Files: content/textbooks/math-11-00/topic-01.ts, extra-a.ts (and the joiner math-11-00-basic-mathematics.ts).
Source/notes for this chapter: docs/textbooks/workbench/math11/ (reports-00/, writer and review reports) in the app repo. The renderer keeps an operator with the term before it; long glued runs (> ~26 characters) force Android to break anywhere, so keep glue short.

SKIP (app-wide style, not this chapter): brackets that do not grow around a stacked fraction; radicals drawn "n√(…)"; the grey "table" label above tables; the repeated "(the book's estimate from past papers, not official figures)" hedge (a known founder item).

## Fix
- p005 Change of base: "…this is y" / "log_c a = …" torn product: glue "y log"; "For p," / "q ≠ 0" torn: glue "p, q ≠ 0"; log_{2²}(5²) renders its base as "22" (reads as base twenty-two): write the base so the power shows (e.g. <sub>2<sup>2</sup></sub> if supported, else log base written "(2²)" or rewrite as log_4 25 only if the source does); "= 2/2" / "log₂5 = m" coefficient torn from its log: glue.
- p006 Common logs: bar notation split "k+1-bar." / "(mantissa) means…" (topic-01.ts:330): glue.
- p007 Log equations: numbered steps: step 2's title and body split by a paragraph gap that steps 1 and 3 lack: make consistent.
- p008 Log inequalities: uneven bullet gaps in "The rule" (third bullet) and "Worked mini-cases" (first bullet tight): make each list consistent.
- "[NEW]" editorial tags printed (p008, p012-01, p014, p015, p016, p017, p018; extra-a.ts lines ~43, 77, 87, 106, 134, 153 and topic-01.ts:376): remove the tag text only, keep the content.
- Card set p009 (worked examples):
  - card 1: a line starts with "⟺ x⁴ = 81": glue "⟺" to the term before.
  - card 4: display's second line starts with "·" (… · ln6/ln5 …): glue "·" to the term before; big blank gaps between/around the displays; steps 1–2 oversized line spacing with no fraction (look for a stray inline fraction or tall run).
  - card 5 step 2: exponents of 4^(log₂8) and 8^(log₂4) overlap "Also" and "8² = 64" (garbled): rebuild the line so raised exponents do not collide (shorter lines, <br> between the two statements).
  - card 6: "= 100" / "log₁₀ 2" tears 100·log₁₀2: glue; step 4 "Check by direct estimate" big gaps before/inside/after its display.
  - card 7: "log₂[(x − 1)" / "(x + 1)] = 3" split inside the bracket: glue the bracket.
  - card 8: big gap before the step 3 display; step 3 prose oversized line spacing.
- p010 practice 10: "for a, b," / "c > 0" torn: glue "a, b, c > 0".
- p014: "F = 96485 C" / "mol⁻¹" unit torn: glue "C mol⁻¹"; "1.10 − (0.02955)" / "(−2)" product torn: WJ between ")" and "(".
- p015: "I₀ = 10⁻¹²" / "W/m²" and "I = 10⁻²" / "W/m²" units torn: glue the unit to its number; "100 dB." alone on the last line: glue "= 100 dB."
- p018: "A+2d, A+5d, A+11d" unspaced while the rest of the page is spaced: space as "A + 2d" etc. (glued).

## Content, check the source before changing (report what the source says; do NOT invent wording)
- p015: says "a few tens of units wide", then a note says "120 units wide, not a few tens": a self-contradiction. If the second note is an editor's correction of the book, keep the book's sentence and turn the note into a clearly marked correction, or remove whichever is ours; report what you did.
- p017: the card says variable base and variable exponent have "no direct differentiation rule at all", then the paragraph below gives that rule. Same handling.
- p018: an editor-voice paragraph ("As printed, the question asks for a logarithmic equation that its data do not produce…") admits the card's question and solution do not match. Same handling; if unclear, leave it and report it as a founder item.

## Ch 13 leftovers already done (skip).
