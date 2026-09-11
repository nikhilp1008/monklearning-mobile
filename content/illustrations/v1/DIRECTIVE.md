# Illustration ingest — directive for Claude Code

Package: `drona-illustrations-v1.zip`. Everything below is executed against this package; nothing is fetched from anywhere else.

## What is in the zip

| path | meaning |
|---|---|
| `masters/<asset_slug>.png` | **final plates.** 112 files, white ground, no text. These are what gets ingested. |
| `raw/<asset_slug>.png` | the same 112 as received from Gemini, before cleanup (provenance only; never ingested, never served). |
| `illustration-manifest.csv` | one row per asset — see columns below. 112 `accepted` rows + 1 `svg-queue` row. |
| `strip_labels.py` | the cleanup script used on 17 of the masters (column `cleanup=strip_labels`). Keep it in `scripts/` for future batches; it is not re-run on this package. |
| `DIRECTIVE.md` | this file. |

Manifest columns: `asset_slug, concept_slug, sub, batch, subject, class_, chapter, concept, file, width, height, sha256, cleanup, note, ncert_labels, licence, source_url, author, status`.

- `asset_slug` = `<concept_slug>` or `<concept_slug>--<letter>`. A concept with several sub-assets is an **ordered set** (`--a` first). 48 concepts, 112 assets.
- `sha256` is of `masters/<asset_slug>.png` — verify before insert.
- `cleanup` ∈ {`none`, `strip_labels`, `crop`} — how the master was derived from raw. Informational.
- `ncert_labels` = the label list for the **concept** (not per sub-asset). Step 5 splits it.
- `licence=generated-free`, `source_url=generated:gemini:batch{N}/{asset_slug}`, `author=MonkLearning (AI-generated, Gemini)` — already in the allowlisted forms. Extend the CHECK allowlist only if a form is missing; never weaken it.

Resolution note: 108 masters are 896×500 (chat-transferred), 4 are 1376×768, 1 is 1376×768 (kidney). Flat-colour line art upscales cleanly; step 3 handles it. If higher-resolution originals are supplied later, a re-ingest by identical `asset_slug` replaces the file and bumps `asset_version`; nothing else changes.

## Standing constraints (unchanged)

No web fetching for illustrations. Never open, reference or trace an NCERT figure. `licence`, `source_url`, `author` are NOT NULL with CHECK constraints — extend deliberately, never weaken. The model never emits coordinates or SVG for a registry widget. Precedence by tier, not timing: precomputed widget → live widget → illustration → precomputed SVG → live SVG.

## Steps, in order. Report after each numbered step before starting the next.

### 0. Preconditions
`R2_ASSETS_BUCKET_NAME=drona-assets` on the API, `EXPO_PUBLIC_ASSETS_BASE_URL=https://pub-03eaaad7d1294d45ab6ae17beecbd799.r2.dev` on the app. The `fb5c…` token is deleted; the existing API credential (`ff90…`) now has `drona-assets` in scope. Run the upload round-trip on one test object (put → HEAD via S3 → HEAD via public URL with a non-default User-Agent → delete) and confirm both legs green. Do not proceed on a red leg.

### 1. Unpack and adopt
Unzip to `content/illustrations/v1/`. Copy `strip_labels.py` to `scripts/strip_labels.py`; add an `ingest_asset.py --strip` flag that runs it on a raw drop (for future batches only). Diff the manifest against `content/illustration-routes.csv`: every `concept_slug` in the manifest must exist as an `illustration`-routed row there; report any mismatch — do not invent routes.

### 2. Sub-asset sets (schema)
Additive migration on the asset table: `concept_slug text NOT NULL`, `sub_index smallint NOT NULL DEFAULT 0` (`--a`=0, `--b`=1, …; no suffix = 0), unique on `(concept_slug, sub_index)`. `asset_object_key()` is unchanged (`concept-assets/{asset_slug}.{ext}`). Slot 3 resolves to the **ordered set** for `(chapter_id, subtopic_key)` → concept; the default figure is `sub_index 0`. Extend the `board_payload` schema in `plan_json` with an optional `figure: "<letter>"` so a segment can cue a specific sub-asset; validate it against the set at read time — an unknown letter falls back to 0 and logs, never blanks the board. No change to precedence.

### 3. Renditions
At ingest, for every master with `width < 1600`, produce `<asset_slug>@2x.png` by 2× Lanczos and upload beside the master. The client picks `@2x` when the frame's device-pixel width exceeds the master width, else the master. Provenance keeps the sha256 of the master only; renditions are derived and reproducible. Add a fixture proving the 343×236, 495×270 and 900×430 frames each pick the right file.

### 4. Ingest
For each `accepted` row: verify `sha256`; verify `width,height` match the file; verify the four corner pixels are white (≥ 250 on every channel) — a non-white corner is a failed row; insert with `licence/source_url/author` verbatim from the manifest; `upload_and_verify` (put → HEAD); public HEAD; then a final reconciliation both directions (rows without objects, objects without rows) that fails non-zero on any mismatch. Fail closed per row; never partially write a row. Output a per-row table: `asset_slug, ok|fail, reason, object_key, public_url, bytes`.

### 5. Label-set drafts
Run `draft-labels` for all 112 assets. Input per asset = the concept's `ncert_labels` list. The draft must decide, per label, whether that structure is **visible in this sub-asset**; a label not visible is omitted from this asset's set and listed in the report under "not in this figure". Shared-anchor defaults are reported as defaults, not locations (existing behaviour). All sets stay `reviewed_by = NULL`; the resolver ignores unreviewed sets, so plates ship without labels until reviewed in the anchor editor. Report: per asset, labels drafted / omitted / defaulted.

### 6. Frog heart SVG
`bio11-ch7-frog--circulatory-and-respiratory-systems--a` is on the SVG queue (row `status=svg-queue`). Draw it through the gate now so batch 1 has no hole: ventral view; two atria over one ventricle; sinus venosus behind; conus arteriosus → truncus → three arches per side (carotid, systemic, pulmocutaneous); pulmonary veins to the left atrium; precavals and postcaval to the sinus. Chrome constants from `lib/widgets/chrome.ts`; gate at all three frames. Ingest it as `sub_index 0` of that concept so the set is `[svg heart, raster respiration]`.

### 7. Re-precompute
Re-run precompute (v5 prompt, unchanged) for the chapters that now carry assets: bio11 ch2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18; bio12 ch2. Report per concept the resolved slot before vs after (`widget | illustration | svg_precomputed | none`). Expected: 48 concepts move to `illustration`; anything that resolves to `svg_precomputed` or `none` despite having an asset is a resolver bug — stop and report, do not patch around it.

### 8. C3 on the simulator
Classroom, tap-to-answer, three concepts: cockroach morphology (2-asset set), connective tissue (6-asset set), Phylum Arthropoda (6-asset set). Confirm at 343×236 and 900×430: the plate is inside the frame with the white ground flush to the board, no text in the plate, `figure` cue switches sub-assets, unreviewed label sets are not drawn, `@2x` chosen on the tablet frame. One screenshot per frame per concept, attached to the report.

### 9. Report
Routes table (widgets, unchanged from 90 unless step 2 touched routing — it should not), asset table from step 4, label-draft summary from step 5, precompute before/after from step 7, screenshots from step 8, and the list of anything refused.

Do not batch steps. Do not ingest anything not in the manifest. Do not modify a master.
