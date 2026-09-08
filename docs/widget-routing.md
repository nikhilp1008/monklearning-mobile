# Widget routing: the archetype column is a gate, not an oracle

How a lesson segment gets a widget. Written before the first precompute,
because a routing rule decided after the cache fills is a rule nobody can
change.

## The rule

**Routing is HYBRID.** Three paths, in order:

```
1. v2_confidence == "high"          -> route deterministically to archetype_v2
2. otherwise                        -> the model picks from REGISTRY_MANIFEST
3. model declines, or validate()    -> tier 3 (fallback SVG), logged via onGap
   rejects the payload
```

Path 1 covers **83 concepts** (was 81 before mathematics 12 was reclassified on
2026-09-06: +3 maths 12 routes, -1 demoted maths 12 row that should never have
routed). Everything else takes path 2 or 3, and that is the designed behaviour
rather than a degraded one.

## Why not deterministic everywhere

The archetype column was going to be the runtime widget selector outright. It
should not be, and the measurement says so precisely.

The column was rebuilt from book content by eight adversarial agents, then
validated against 50 hand-adjudicated rows, blind. Agreement tracks the
agents' own confidence almost perfectly:

| confidence | agreement | rows in corpus |
|---|---|---|
| **high** | **21/21 = 100%** | 226 |
| med | 18/26 = 69% | 282 |
| low | 1/3 = 33% | 28 |

The row counts include the mathematics 12 reclassification of 2026-09-06, which
ran its own blind 50 and reproduced the shape — **high 29/31 = 94%**, med
13/17 = 76%, low 1/2 = 50%. Two independent measurements now agree that the
`high` tier holds and the `med` tier does not.

At `high` the column is right every time it was checked. At `med` it is wrong
about a third of the time — and a deterministic selector that is wrong a third
of the time puts the wrong diagram on a live board, forever, with no path to
notice. That is `retrieval.py`'s failure rebuilt in a different table, which
is the thing this whole exercise exists to avoid.

**And the residual error has a direction.** Of the ten disagreements, the
agent assigned a diagram where the adjudicator said none **6 times** against 3
the other way. All ten were `med` or `low`; not one was `high`. So the
medium-confidence population leans toward claiming a diagram that the content
does not support — the same optimism as the name-based column it replaced,
just smaller.

Treat `med` as leaning `none`. Concretely: on path 2 the model MAY choose a
widget, but the archetype column must not nudge it, because the column's
medium-confidence opinion is biased in the direction that produces false
coverage.

## What each path must record

Routing is a decision, and an unrecorded decision cannot be audited. Every
segment stores which path produced its payload:

```
route: "archetype_high" | "model_choice" | "tier3_fallback"
archetype_version: <identifier of the classification pass>
```

`archetype_version` is a component of the plan cache key
(`docs/plan-invalidation.md`), so a reclassification invalidates every plan
whose widget it chose. That is the correct outcome and it needs no extra
machinery.

## What would move a concept from path 2 to path 1

Only re-measurement. A concept is promoted to `high` by a reclassification
pass that reads current chunks — not by a human deciding it looks obvious, and
not by observing that the model kept picking the same widget. The second is
especially tempting and especially wrong: the model's consistency measures the
model, not the content.

## The caveat that must travel with this

The classification was read from the FIRST master-book corpus. That corpus has
been replaced, and is being replaced again by the Mathpix extraction. The
verdicts come from chunks that no longer exist.

They are good enough to gate on at `high` — 21/21 is 21/21 whatever the text
was — but the column should be re-run against the current corpus before path 1
is widened. **The number does not grow by argument, only by re-measurement.**

Mathematics 12 is the first slice re-measured that way (2026-09-06, current
corpus, two independent passes merged at `high` only where both agreed, its own
blind 50 at 94%). It moved path 1 from 81 to 83 — and it did so by ADDING three
routes and REMOVING one, because ch9 "Applications: Growth, Decay and Curve
Geometry" had been routing an `xy_plot` for exponentials the book never plots.
That is what re-measurement is for; a widening argument would never have found
it. Every other subject still comes from the replaced corpus.

## Not covered here

Which widget the model should pick on path 2, and how the manifest is
presented to it. That is prompt work and belongs with the generation prompts,
not with routing. Tier-3 rate remains the metric that tells us whether the
registry is big enough — see `lib/widgets/CLAUDE.md` §2.
