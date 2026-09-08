# concept-archetypes.csv — provenance

Provenance lives here rather than as `#` comments inside the CSV, because a
comment-prefixed CSV silently breaks `csv.DictReader` and every naive reader
after it. The routing code is the next consumer; laying that trap for it would
be the same defect class this column exists to fix.

## Method

**8-agent adversarial reclassification from `pdf_chunks` content, not from
concept names.** Every agent was told to DEFAULT each concept to
`none_symbolic` and make the retrieved book text EARN a widget. The original
`archetype` column was built from names alone, which fails in exactly one
direction, and every variance measured against it was optimistic.

Scope: 396 of 407 in-scope concepts. The other 11 are chemistry 11 ch8, which
had no chunks at the time.

Date: **2026-09-04**, against `chunk_corpus_version b6ae8226a951b903`.

## Result

~80% of rows changed. 143 lost their diagram entirely. **Zero promotions into
a shipped widget across 396 concepts** — not one concept was under-classified,
which is the signature the method predicted.

## Validation — 50 rows, hand-adjudicated, blind

Seed `20260904`. Classified from chunks alone, with the agents' verdicts held
in a separate key file until the adjudicator's were written; otherwise the
number measures agreement-with-the-agent rather than accuracy.

**80% exact agreement overall.**

| agent's own confidence | agreement |
|---|---|
| high | **21/21 = 100%** |
| med | 18/26 = 69% |
| low | 1/3 = 33% |

Retrieval similarity predicted nothing (77% / 88% / 50%, non-monotone).
**Confidence is the signal.** That is why it gates the runtime.

## Direction of the residual 20% — still optimistic, 6:3

| | count |
|---|---|
| agent assigned a diagram where the adjudicator said none | **6** |
| adjudicator assigned one where the agent said none | 3 |
| lateral, same tier | 1 |

**All ten disagreements were `med` or `low`. Not one was `high`.**

=> **Treat medium-confidence rows as leaning `none`.** The residual bias is
2:1 optimistic, and it lives entirely below the high-confidence line.

## How to use it

`archetype_v2` is a **gate, not an oracle**. Route a widget deterministically
only where `v2_confidence == high` — 81 concepts resolve to a real widget or
illustration there. Everything else goes to the model choosing from the
manifest, or to tier 3. See `docs/widget-routing.md`.

## Caveat that must travel with the file

This pass read the FIRST master-book corpus. That corpus was replaced hours
later and is being replaced again by the Mathpix extraction. **These verdicts
were read from chunks that no longer exist.** They are good enough to gate on
at high confidence and should be re-run against the current corpus before
being trusted more widely.

**Scope of that caveat has shrunk:** mathematics 12's 141 rows were re-read
against the current corpus on 2026-09-06 (Pass 2 below). Everything else still
comes from the replaced corpus.

---

# Pass 2 — mathematics class 12, all 141 concepts

Date: **2026-09-06**. Same method, run against the CURRENT corpus. All 13 maths
12 chapters are present in `pdf_chunks` (1,257 chunks); every one of the 141
concepts retrieved 10 chunks via `match_pdf_chunks`, so there is no
`UNVERIFIED_no_chunks` row in this slice. (The filter argument is
`filter_chapter_id`.)

Before this pass, 140 of the 141 rows were `not_in_scope` with a blank
archetype and the one classified row was wrong — see the demotion below.

## Method delta

**8 agents again, but arranged as two INDEPENDENT PASSES over the same 141
concepts** (4 chapter groups x 2), rather than 8 agents each owning a disjoint
slice. Pass 2 was told not to read pass 1's output, so disagreement is
measurable rather than assumed. Agreement between the two passes:

| | |
|---|---|
| exact archetype string | 122/141 = 87% |
| routing-relevant family (widget id / GAP / `none_symbolic` / `labelled_figure`) | 130/141 = **92%** |

`gap_*` names were deliberately NOT harmonised between passes — two agents
naming the same missing diagram `gap_circle_region` and `gap_conic_region`
agree about routing, and forcing a shared vocabulary would have hidden the real
disagreements. Eleven rows disagreed at family level; every one was demoted.

**Merge rule: `high` requires BOTH passes at `high` AND family agreement.** One
pass's confidence is not enough, because the failure this column exists to
prevent is a confident wrong diagram.

## Result

| v2_confidence | rows |
|---|---|
| high | 84 |
| med | 46 |
| low | 11 |

| verdict | rows |
|---|---|
| `none_symbolic` | 83 |
| `gap_*` (28 distinct names) | 51 |
| `process_flow` | 5 |
| `labelled_figure` | 4 |
| **`xy_plot`** | **2** |

**Three concepts route** (`high` AND a registered widget):

  - ch2 Sum and Difference Formulae for tan Inverse -> `process_flow`
    (Figure 2.8 is a literal decision tree: compute xy; xy<1 use directly;
    xy>1 add pi when x,y>0, subtract pi when x,y<0)
  - ch8 Area Under a Simple Curve Bounded by the Axes -> `xy_plot`
  - ch8 Area Bounded by a Parabola and a Line -> `xy_plot`

**Maths is symbolic and the numbers say so: 7 widget verdicts in 141 concepts,
3 of which route.** The useful output of this pass is not coverage — it is 51
`gap_*` rows and 83 `none_symbolic` rows that now state, from the book's own
text, that there is nothing here for the registry to draw. A future pass that
finds a widget for most of maths should be disbelieved.

**One existing route was DEMOTED.** ch9 "Applications: Growth, Decay and Curve
Geometry" was `xy_plot`/`high`. Both passes independently returned
`none_symbolic`: the exponentials are stated as formulas and worked as numeric
word problems, and are never plotted. That row was routing a curve the book
does not draw.

## Validation — 50 rows, hand-adjudicated, blind

Seed `20260906`, 50 of 141 drawn before any classifier ran. The adjudicator's
verdicts were written and sealed BEFORE any classifier output was opened, and
the agents were instructed to report only aggregate tallies and never
per-concept verdicts, so nothing per-row leaked back.

**86% overall agreement**, scored at family level (see the `gap_*` note above).

| merged confidence | agreement |
|---|---|
| high | **29/31 = 94%** |
| med | 13/17 = 76% |
| low | 1/2 = 50% |

94% clears the 90% bar, and pass 1's shape reproduces: confidence predicts
accuracy, and the errors live in `med`.

**Direction of the 7 disagreements:** classifier-optimistic 3,
adjudicator-optimistic 1, lateral 3. Milder than pass 1's 6:3, same sign.

**Neither of the two `high` disagreements was a classifier widget claim.** On
"Tangents and Normals to a Curve" the classifier said `gap_curve_with_tangent`
and the adjudicator said `xy_plot`; on "Direction Cosines and Direction Ratios"
the classifier said `none_symbolic` and the adjudicator said `gap_3d_axes`.
Both are the classifier being MORE conservative than the adjudicator. Neither
would have put a wrong diagram on a board.

**Tie-break, declared because it is the one place human judgement entered the
confidence column.** Three rows where both passes agreed on the verdict but
split `high`/`med` were promoted to `high` on the sealed adjudicator's
independent third read (2-of-3 `high`, unanimous family). Two of them are the
ch8 `xy_plot` rows.

## What this pass found out about `xy_plot`'s own header

`lib/widgets/xy-plot/index.tsx` enumerates ch8's ten concepts and claims **5
solid + 1 partial**. Read against what the book actually teaches under each
concept name, it is **2**.

The header is not wrong about the geometry — it is wrong about the content,
because it was written against the concept NAMES. "Area Between Two
Intersecting Curves" sounds like a line/parabola pair and the header says YES;
the retrieved chunks work it with sideways parabolas `y^2 = 4ax` and horizontal
strips, which are not `y = f(x)`. Same for "Area Bounded by a Curve and Its
Tangent or Normal" (conic segments spanning both branches) and "Area of Regions
Described by Inequalities" (a circular bound). **This is the name-based failure
mode reappearing inside a widget's own documentation** — which is precisely why
the column is read from chunks rather than written from a syllabus.
