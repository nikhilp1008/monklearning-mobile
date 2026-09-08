# Reclassification of concept-archetypes.csv from book content

The `archetype` column was built by reading concept NAMES only — no syllabus
text, no lesson content, no chunks. That method fails in exactly one direction:
a name that sounds like a picture gets marked as one. This pass rebuilt it from
`pdf_chunks` and measured the result.

## Method

- 396 of 407 in-scope concepts (the four Phase-2 widgets' archetypes plus the
  whole illustration list). The other 11 are all Chemistry 11 Ch8, one of the
  two chapters with no chunks — marked `UNVERIFIED_no_chunks`, NOT guessed.
- Retrieval mirrors `app/drona/retrieval.py` exactly: `text-embedding-3-small`,
  in-memory cosine over the concept's own chapter. (The `match_pdf_chunks` RPC
  it tries first does not exist in this database, so the in-memory fallback IS
  the production path.)
- Eight independent agents, each given `CLASSIFY-BRIEF.md`: default every
  concept to `none_symbolic` and make the CONTENT earn a widget.

## Result

**80% blind agreement** with an independent hand adjudication of 50 seeded
random rows. Blind on purpose — the adjudicator classified from chunks alone
and the agents' verdicts were held in `adjudication-key.json` until the
verdicts in `my-verdicts.json` were written. Otherwise the number measures
agreement-with-the-agent, not accuracy.

The 10 disagreements split roughly evenly on who was right, so neither pass is
systematically better than the other. Notable: the adjudicator's one clear
error was assigning `molecule_struct` to Hydrogen Bonding on the strength of a
prior spec rather than the retrieved text — the same name-based failure this
whole exercise exists to remove.

## The number that makes the column usable

Agreement against the agents' OWN confidence labels:

```
high   21/21 = 100%
med    18/26 =  69%
low     1/3  =  33%
```

Retrieval similarity does NOT predict accuracy (77% / 88% / 50%, non-monotone).
Confidence does.

**So gate the runtime selector on `v2_confidence == "high"`.** 81 concepts
resolve to a real widget or illustration at high confidence. Everything else
routes to a live model call or no diagram — which is the correct behaviour for
a row we cannot stand behind, and the difference between a selector that is
wrong 20% of the time and one that only speaks when it measured 100%.

## Direction of change (the headline)

Of 396 concepts, **~80% changed, and there were ZERO promotions into a shipped
widget.** Not one concept was under-classified. 143 rows lost their diagram
entirely.

## Caveat that must not be lost

Roughly 15 concepts were demoted on ABSENT evidence rather than evidence of
absence — retrieval returned off-topic chunks (Speciation returned only
Hardy-Weinberg; Metallic Bonding returned nothing about metallic bonding).
Those are flagged in `v2_evidence`. They need re-querying, not trusting.
