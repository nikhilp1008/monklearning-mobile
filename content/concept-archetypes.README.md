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
