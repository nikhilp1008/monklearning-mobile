# MonkLearning Chapter Content Spec (Block System)

Every chapter is one data object; the reader renders it with zero chapter-specific screen code. `ch1-sets-chapter.js` (`window.CH1SETS`) is the canonical, editorially finished example — match its voice and density when generating new chapters from textbook sources.

## Chapter object

```js
{
  chapter: "01",            // 2-digit string
  title: "Sets",
  subject: "Mathematics",
  klass: "Class 11",
  topics: [ Topic, ... ]    // 4–6 topics per chapter
}
```

## Topic object

```js
{
  n: "01",                  // 2-digit string, display number
  title: "Sets and their Representations",
  blocks: [ Block, ... ]    // rendered top to bottom
}
```

Topics are **self-contained**: a student finishes a topic, then explicitly navigates. Never write copy that assumes continuous scroll into the next topic.

## Block types

Every block has `t` (type). `html` fields accept inline HTML: `<b>`, `<i>` (also used for math variables), `<sup>`, `<sub>`. Math expressions and set symbols are rendered in serif italic — wrap variables in `<i>…</i>` and use real Unicode symbols (∈ ∉ ⊂ ⊆ ∪ ∩ ∅ △ ℕ ℤ ℚ ℝ −).

| t | Fields | Rendering |
|---|--------|-----------|
| `hook` | `html` | "WHY THIS MATTERS IN THE EXAM" collapsed accordion. **Only rendered on topic 1**; include it only there. Names the exams/marks where the chapter pays off. |
| `p` | `html` | Body paragraph, 16.5px. The workhorse; concept building with concrete anchors (cricket team-sheets, metro trains, class registers). |
| `think` | `html` | Handwritten aside (Kalam), auto-prefixed "think about it this way…". Lowercase, one reframing sentence or two. |
| `def` | `term`, `html` | Definition card: DEFINITION kicker, bold term, explanation. |
| `defgrid` | `title`, `rows: [{k, v}]` | Table card of paired notation/terms (title uppercased). 4–6 rows. |
| `formula` | `kicker`, `tag?`, `main`, `legend: [html]`, `note?` | Formula card: centered serif formula, legend lines explaining each symbol, optional note. |
| `proc` | `title`, `steps: [html]` | "HOW TO · TITLE" numbered procedure card (steps numbered 01, 02…). |
| `deriv` | `kicker`, `steps: [{eq, why}]` | Derivation: each row shows the equation `eq` (serif italic); tapping reveals `why` (the justification for that step). 3–6 steps. |
| `diagram` | `kind`, `kicker` | Interactive figure with chip selector + caption. `kind` ∈ existing set below. |
| `ex` | `tag`, `q`, `steps: [html]`, `ans` | Solved example card. `tag` = provenance ("CBSE BOARD", "JEE MAIN 2023 PATTERN"). **Consecutive `ex` blocks group into one swipeable carousel** — author them adjacent (2–4 per group). |
| `mcq` | `q`, `opts: [{label, nudge?}]`, `correct`, `solution` | Attempt-first MCQ. 4 options; `correct` = index. Every wrong option **should** carry a `nudge` naming the specific trap that makes it tempting. `solution` shows after solving. Consecutive `mcq` blocks group into one carousel. |
| `practice` | `items: [{q, a}]` | Try-first practice cards ("Check answer" reveal), one carousel per block. 3–5 items. |
| `mistakes` | `items: [html]` | "WATCH OUT" card, ✗-bulleted common errors. 3–5 items. |
| `protip` | `html` | Dashed-border PRO-TIP card, handwritten voice, lowercase. |
| `snapshot` | `rows: [{f, note}]`, `aids: [string]` | End-of-topic CHECKPOINT: `f` = serif formula/fact, `note` = small gray gloss; `aids` = handwritten memory lines. **Every topic ends with exactly one snapshot.** |

### Diagram kinds (implemented in the reader)
`numsys` (nested number systems ℕ⊂𝕎⊂ℤ⊂ℚ⊂ℝ + 𝕋) · `lattice` (subset lattice of a 3-element set) · `venn2` (2-set Venn: ∪ ∩ − △ ′) · `venn3` (3-set Venn: exactly one/two/all/none) · `family` (interval family intersection) · `grid` (incidence double-counting grid).

These are chapter-specific by nature. A new chapter that needs a new figure means implementing a new `kind` in the reader (same pattern: figure + chips + per-chip caption/highlight). Reuse `venn2`/`venn3` wherever set/probability logic appears.

## Canonical topic arc

hook (topic 1 only) → `p` concept paragraphs (with `think` asides) → `def`/`defgrid` → `formula` → `diagram` → `proc` → `deriv` → `ex` group → `mcq` group → `practice` → `mistakes` → `protip` → `snapshot`.

Not every topic needs every block, but keep the order and always end on `snapshot`. Interleave at least one interactive block (diagram/deriv/mcq) per screen-height of prose.

## Authoring rules

1. **No em dashes.** Use commas, colons or periods. Also applies to UI copy.
2. **No emoji.**
3. Voice: direct, concrete, exam-aware. Every abstraction gets a physical anchor before the notation. Address the student as "you".
4. `think`, `protip` and `aids` are lowercase, handwritten-casual. Everything else is standard prose.
5. Exam tags on examples/hooks must be honest about provenance ("…PATTERN" if paraphrased).
6. Wrong-option `nudges` explain the *specific* trap, never generic "try again".
7. Repetition, order, and units conventions follow NCERT; content is restructured from the provided textbook, not invented.
8. Keep `q`/`steps` concise enough for a 306px-wide card; long derivations belong in `deriv`, not `ex` steps.
9. Distinct-element counts: numbers in text use spaces around operators exactly as in Ch1 (`n(A ∪ B) = n(A) + n(B) − n(A ∩ B)`).

## Pipeline for new chapters

1. Receive textbook chapter (PDF/reference).
2. Split into 4–6 self-contained topics.
3. Restructure every piece of content into the block schema above (nothing outside it).
4. Emit one module per chapter, e.g. `content/math/ch02-relations.js`, same shape as `ch1-sets-chapter.js`.
5. Register the chapter as available in the Chapters screen (flips its row from "SOON" to "READY").
