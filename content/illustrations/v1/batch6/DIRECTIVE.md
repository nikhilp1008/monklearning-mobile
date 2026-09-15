# Batch 6 + Session F — directive for Claude Code

Package: `drona-batch6.zip`. Contents: `raw/<asset_slug>.png` (the five Gemini plates, checked by Raasikh and by the reviewer against the anatomy reject rules below), this file, and `CONFIRMATIONS.txt` (Raasikh's eleven per-chapter lines for Session B).

Run everything in one pass. Stop only at a hard gate that is not released here. Report once at the end.

Standing constraints, unchanged: no web fetching for illustrations; never open, reference or trace an NCERT figure; licence/source_url/author CHECK allowlists extended deliberately, never weakened; the model never emits coordinates or SVG for a registry widget; precedence by tier not timing; Gemini raster masters never modified — SVG-authored plates are re-rendered from the SVG and replaced as a unit; CC never handles credentials or applies migrations; `reviewed_by` and SANE columns are written only on Raasikh's explicit confirmation, quoted in the report; labels are English only (`hi == en`).

## Part 1 — Batch 6 plates (five files in `raw/`)

| file | disposition | sub_index |
|---|---|---|
| `bio11-ch7-earthworm--morphology-and-digestive-system--a.png` | REPLACES the existing master by identical asset_slug (master_sha256 bumps; B0 refetches) | 0 |
| `bio11-ch7-cockroach--nervous-system-and-reproduction--b.png` | new sub-asset (male reproductive) | 1 |
| `bio11-ch7-cockroach--nervous-system-and-reproduction--c.png` | new sub-asset (female reproductive) | 2 |
| `bio11-ch7-frog--external-morphology-and-digestive-system--b.png` | new sub-asset (digestive system) | 1 |
| `bio11-ch4-phylum-platyhelminthes--c.png` | new sub-asset (Taenia) | 2 |

Manifest rows already exist as `pending-file` (`licence=generated-free`, `source_url=generated:gemini:batch6/<slug>`, `author=MonkLearning (AI-generated, Gemini)`). For each file: copy into `raw/` in the repo, flip the row to `accepted`, then the normal path — `--strip` if any baked text survived, normalize (near-white → white, 28 px margin, 16:10 canvas, never crop/scale), corner + OCR checks, ingest, renditions where width < 1600, `upload_and_verify`, public HEAD, reconciliation 0/0 both ways. Record measured `width,height,sha256` — never guessed.

Anatomy reject rules (if a plate fails one, refuse the row and say which; do not "fix" the art):
- earthworm: clitellum at roughly one-eighth of body length from the anterior end, NOT mid-body; prostomium visible at the anterior tip.
- cockroach male: two testes; vasa deferentia join into a single ejaculatory duct; mushroom gland present.
- cockroach female: two ovaries of ~8 tubules each; oviducts join; a PAIR of spermathecae.
- frog digestive: three-lobed liver; coiled small intestine; gall bladder, pancreas, spleen present.
- Taenia: scolex with suckers and hooks; segmented ribbon body.

Then point each new/replaced plate exactly as ch7 was pointed: coordinate grid over the master, anchors read off the grid, omit below 0.6 confidence and list why, group by `ncert_labels` order ≤ 5 per group unless larger is gate-clear, `hi := en`, `source=claude-pointed`, `reviewed_by` NULL. Run the 6× zoom audit on every anchor (the platelet method) and re-point any miss. TS gate at all five frames. Review sheet + zoom sheet per set; rebuild the ch7 and ch4 contact sheets.

Term moves that come with these plates:
- The Taenia terms (scolex, hook, sucker, neck, proglottid) move from `platyhelminthes--b`'s draft to `--c`. `--b` (planarian) stays bare.
- The earthworm whole-body terms (prostomium, mouth, anus, setae, the pore types, clitellum, segments) are pointed on the replaced `--a`.
- Cockroach male terms (testis, vas deferens, seminal vesicle, mushroom gland, ejaculatory duct, phallic gland, gonapophysis) to `--b`; female terms (ovary, ovarian tubule, oviduct, genital chamber, spermatheca, collateral gland) to `--c`. Whatever of these the bare parent plate had placed stays there too — a term may be anchored on more than one sub-asset of a set.
- Frog digestive terms (buccal cavity, oesophagus, stomach, small intestine, duodenum, ileum, rectum, cloaca, liver, gall bladder, bile duct, pancreas, spleen) to `--b`; the bare parent keeps whatever it already had placed.

Report these five as ready-for-signature. **Do not publish them.**

## Part 2 — Session B publish (the eleven lines in `CONFIRMATIONS.txt`)

For each line: `apply_review --chapter <id> --by raasikh --exclude <…>` with the line quoted. Per set: gate verdict, public URL, sha, `label_set_version`; row backfilled from the live object. Verify every published set against the bytes R2 serves (200, JSON, `max-age=300 must-revalidate`, `reviewed_by=raasikh`, row sha == live sha). One chapter prefetch per chapter on the running simulator, no restart: drop count = sets published in that chapter. Board captures at 343×236 to `reports/published/<chapter>/`.

The one exclusion is `bio11-ch4-phylum-platyhelminthes--b` (bare by decision). Any set that is not gate-clear at publish time is refused by name, not skipped silently.

## Part 3 — Session G: precompute with hold-back (Session F is complete; this supersedes it)

State after Session F: 113/113 stored payloads render across all four subjects; `conic_plot@1` is through the gate and routed; the `sane` column is null on every harness record, and the only SANE numbers are the proposals in `scripts/sane_proposals.md` (chem 89.4, physics ~32/40, bio 70, maths unmeasured).

Decision (Raasikh — the last line of `CONFIRMATIONS.txt`): the SANE proposals are adopted as verdicts for the chapters they cover. Write the SANE columns from the proposals with `verdict_by=raasikh` and the confirmation quoted. Invent no proposals for chapters that have none — those carry SANE = unmeasured.

- G1. Precompute runs for every chapter that has authored plans, in batches of ten, v5 prompt unchanged, with the hold-back rule: a registry widget bakes only where its chapter's SANE verdict is ≥ 85%; below 85% or unmeasured, the widget slot is skipped and the concept resolves down the precedence (illustration → precomputed SVG → live SVG). Illustration slots do not depend on SANE and always bake. Per concept report the resolved slot before/after. A concept with an asset or an eligible routed widget that resolves to `svg_precomputed`/`none` is a resolver bug — stop and report, never patch around.
- G2. After precompute: one classroom pass per subject on the simulator (three concepts each, 343×236 and 702×289), captures to `reports/precompute/<chapter>/`. Confirm slot-1 payloads draw, illustration plates draw with their published labels, and held-back widgets fall through to SVG without a blank board.
- G3. Held-back list with what raises each: physics 12 ch1 (about two more sane rows); bio 12 Ecosystem (`comparison_table` for 15 segments, an ecological-pyramid widget for 4 — write both specs in `docs/`, build nothing); chem multi-species mechanisms (8 segments — write the width constraint in `docs/`, build nothing).
- G4. Build status: state whether the current EAS preview build carries the placement rewrite, wrap rule, B0 invalidation, conic_plot and the payload caps; list what it lacks. A new build is Raasikh's to trigger — CC never handles Expo credentials.

## Report — one message

1. Batch 6: per plate — ingested / refused (rule named), anchors placed / omitted, groups, gate verdict, zoom-audit corrections; ch7 and ch4 contact sheet paths.
2. Session B publish: per chapter — sets published, excluded, refused; per set URL/sha/version; prefetch drop counts; capture folder.
3. Session G: SANE columns written (from which proposals, line quoted); precompute per chapter — concepts baked / held back / fell through, with the slot table; classroom captures; the held-back list with what raises each; build status.
4. Everything refused, with the reason and who unblocks it.

## Notes on the plates as delivered (reviewer)

- The frog digestive plate's liver reads as two lobes. Accepted: `liver` is the only liver term; do not add lobe terms to any draft for it.
- All five are 896x500 chat-downscaled; the `@2x` rendition rule applies (width < 1600).
- README.md carries the sha256 of each raw file; verify before ingest.
