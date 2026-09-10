# Board Widget Runtime — final report (blocks A–H)

Two repos, one system: `monklearning-mobile` branch `board-widget-runtime`,
`monk-learning-api` branch `main`. Everything below is measured, not asserted;
where a number changed during the work, the defect that changed it is named.

## Routes (baseline 90)

| slot | count |
|---|---|
| `widget_precomputed` | (per-segment; not countable per concept) |
| `widget_archetype` | 9 |
| `illustration` | 48 |
| `svg_precomputed` | 77 |
| `svg_live` | 0 |

90 concepts route to a registry widget across the measured corpus (the
archetype column at high confidence); the twelve re-precomputed chapters
resolve as above. **48 of 48 asset-bearing concepts resolve to
`illustration`; zero resolve past an asset to svg or none.** Idempotent:
a second precompute run authored 0 and moved 0.

## Ingest (drona-illustrations-v1.1)

    manifest rows        113 accepted (112 generated + 1 hand-authored SVG)
    rows written         113   FAILED 0
    objects              225   (113 masters + 112 @2x; the 1800px frog heart
                                needs none)
    reconciliation       rows without objects 0 · objects without rows 0
    public HEAD          225/225 -> 200, non-default UA
    idempotency          WROTE 0, 113 content-hash skips
    master_sha256        113/113 backfilled; master ≠ raw on every row
    rendition_2x_sha256  112/112 narrow; NULL only on the 1800px master

## Label drafts

    sets           113   (112 vision-proposed, 1 svg-authored)
    anchors        709
    omitted        628   "not in this figure" — a decision, not a failure
    defaulted       48   same-point anchors; review these first
    reviewed_by      0   every set NULL; the resolver withholds labels,
                         and since the client-gate fix the PLATE still draws

## Precompute before/after

77 concepts moved `svg_live` → `svg_precomputed` across bio11
ch2,3,4,5,6,7,14,15,16,17,18 and bio12 ch2. The precompute now skips concepts
a higher slot answers (48 skipped as illustrated); `--dry-run` still authors —
it only declines to store — so the skip is what saves the model calls.

## The 19 shape advisories

OCR read no legible token; the shape heuristic flagged glyph-shaped chains
(hatching, segment rings, gut lumen on line art). Advisory, not refusal: the
heuristic scored 20/20 synthetic but 29 false refusals on real masters, so OCR
is the refusal authority. 17 on ingested rows, 2 on the earthworm rows that
were briefly refused (see the PostgREST finding). Slugs in
`2026-09-09-v1.1-ingest.md`.

## Findings — each one a check that passed on absent information

1. **PostgREST's 1000-row cap.** An unpaged select truncates silently;
   `concepts` holds 1,172. Four assets were refused for naming concepts that
   were present and active — reported (wrongly) as a catalogue gap. Every
   concept-table read in the ingest path now pages through `fetch_all`, with a
   truncating fake proving the test can fail.
2. **The env var that was nowhere.** `EXPO_PUBLIC_ASSETS_BASE_URL` was in no
   env file for the life of the illustration tier; the classroom silently used
   the placeholder resolver. Now in eas.json (all three profiles) and a
   committed `.env`; dev throws at startup if it resolves empty.
3. **The master had no hash.** Only the RAW plate's hash was recorded.
   Migrations 0040/0041 added `master_sha256` + `rendition_2x_sha256`,
   backfilled 113/113, NOT NULL with the frog-heart exception written as a
   CHECK. The client verifies whichever file it downloads.
4. **manifest_status: written 'accepted', read 'approved'.** The write
   constraint (0039) and slot 3's read filter disagreed; every asset was
   stored, public, and invisible. One shared constant now, pinned by tests on
   both sides.
5. **Slot 3 served, the sanitiser dropped.** `labelled_figure` is dispatched
   outside the registry on the client; the server's normalisation pass fed it
   to the registry gate anyway. Bypass now at both points.
6. **The loader and the widget were mutually exclusive.** `validate()` refuses
   remote URLs; the loader handed it one. The art is now downloaded, verified
   (length + sha), cached under `<slug>.<sha12>.<ext>`, LRU-evicted at 200 MB
   by last-drawn.
7. **The skip that skipped the backfill.** The content-hash skip decided from
   the object alone and left 113 rows with NULL hashes; a skip now requires
   the object AND the row to be what the run would make them. The fake S3
   returned no ETag, so no skip test had ever exercised the skip.

## Refused, and still refused

Non-hex hashes; a master hash equal to the raw hash; a rendition hash on a
wide master or missing on a narrow one; `manifest_status` other than
'accepted'; unreviewed label sets shipping labels; remote URLs reaching the
renderer; a figure cached with no version; a licence outside the enum;
`generated:` source_urls that name no asset.

## Screenshots

(appended with block 3: cockroach morphology, connective tissue, phylum
arthropoda at 343×236 and 900×430, unlabelled plates from file:// cache,
figure-letter switching = the figure cue.)

## Production

(appended with block 4: /version SHA, live class with ILLUSTRATION SERVED and
no DIAGRAM DROPPED, plate visible; EAS preview build id.)
