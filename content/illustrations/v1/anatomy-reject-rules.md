# Anatomy reject rules — the standing list

These are the checks a delivered plate is judged against before ingest. If a
plate fails one, **refuse the row and name the rule. Do not "fix" the art.**

This file exists because the rules were previously written only inside a
per-batch directive. `batch6/DIRECTIVE.md` is hashed into `prompt_sha` on
every row it ingested, so it cannot be edited without breaking the provenance
link on those rows — which means a rule found to be wrong had nowhere to be
corrected. It has one now.

## The rules

- **earthworm** — the clitellum **begins at segment 14**, counted from the
  anterior end, and is nowhere near mid-body. The prostomium is visible as a
  distinct lobe at the anterior tip.

  > CORRECTED 2026-09-14 (Raasikh). This rule read *"clitellum at roughly
  > one-eighth of body length from the anterior end"*. The batch-6 plate puts
  > it at **26.7% of body length**, which fails that rule — and the rule was
  > the wrong test. The plate draws the worm with **53 segments** against a
  > real *Pheretima*'s 100–120, and the clitellum begins at **segment 14 of
  > 53**, which is exactly right (segments 14–17). One-eighth is only the
  > correct fraction on a plate with a realistic segment count; on a stylised
  > one it rejects correct anatomy. **Count segments, not length.**

- **cockroach male** — two testes; the vasa deferentia join into a single
  ejaculatory duct; the mushroom gland is present.

- **cockroach female** — two ovaries of ~8 ovarioles each; the oviducts join;
  a **pair** of spermathecae.

- **frog digestive** — coiled small intestine; gall bladder, pancreas and
  spleen present.

  > AMENDED 2026-09-14 (Raasikh). This rule also demanded a **three-lobed
  > liver**. The batch-6 plate draws two lobes and was accepted anyway, with a
  > standing content rule attached: **`liver` is the only liver term on this
  > plate. Never add `left lobe`, `right lobe`, or any other lobe term to any
  > draft for it.** Lobe count is not a labelled term here, so the figure
  > cannot teach it wrong. A future plate that does label lobes must have
  > three.

- **Taenia** — scolex with suckers and hooks; segmented ribbon body; **the
  strobila is continuous from the neck to the terminal proglottid.**

  > ADDED 2026-09-14 (Raasikh). The batch-6 plate drew the body in **two
  > disconnected pieces** — the upper strand ended in a closed terminal
  > proglottid and the lower ribbon was a separate closed shape. It passed
  > every rule as written, because none of them said the animal has to be in
  > one piece. That set is held and the plate is being replaced. A severed
  > animal is a defect even when every named structure is present.

## How a plate is judged

Look at it, and **measure the claim** rather than accepting the delivery
note's word for it. Batch 6's README described the earthworm's clitellum as
"in the anterior third" and called it a pass; the directive's own rule said
one-eighth. Both were assertions about the same pixels and neither had been
measured. The segment count settled it.
