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

## Screenshots (reports/shots/)

Six exact-frame shots through the production path — chapter rows from the
figures endpoint, art downloaded and sha-verified into the file:// cache,
rendered by BoardWidget at the stated box:

    cockroach-343-figa.png    cockroach-900-figa.png
    connective-343-figa.png   connective-900-figa.png
    arthropoda-343-figa.png   arthropoda-900-figa.png

Plus `cockroach-900-figb.png` — the figure cue made visible: switching a to b
is, on the client, exactly a payload naming the other member of the set. And
two live boards: `live-class-cockroach.png` (local API) and
`live-class-production.png` (production), each with the plate drawn between
board text. All plates unlabelled — the correct state while every label set
is reviewed_by NULL. Note: the 900-wide box slightly exceeds the phone's
874pt landscape width, so wide-frame shots clip at the right edge; the widget
itself received exactly 900x430.

## Production verification

    /version                  13deabd49a47ed57d8be8a24c418439ebb6b813d
    GET .../figures           200 (9,820 ms cold — watch, not a blocker)
    ILLUSTRATION SERVED       bio11-ch7-cockroach--morphology-...--a
    DIAGRAM DROPPED           0
    client                    chapter prefetch: 23 asset(s), resolved 23,
                              missing 0; figure revealed; no gaps
    plate                     visible on the production board (screenshot)

## EAS preview build — DONE (2026-09-11)

    build      ac0922c1-1de6-47d8-b75d-68f3c587fabc  status=finished
    profile    preview (internal / ad-hoc)  version 1.0.0 (18)  SDK 54
    commit     dac6f899  (board-widget-runtime)
    install    https://expo.dev/accounts/nikhilp1018/projects/
               monk-learning-app/builds/ac0922c1-1de6-47d8-b75d-68f3c587fabc
    archive    .../artifacts/eas/eDl4E3K1xpa5P6ZjdjtXF9WFQ8QxYB0wmwT4y4HCwMQ.ipa
    device     iPhone UDID 00008130-0018041030FA8D3A on team 5NYMKKM5K5

Three separate credential walls stood between "EXPO_TOKEN exists" and a build,
and each looked like the previous one until it was read:

1. **Expo auth** — solved with EXPO_TOKEN in `.env.local` (gitignored).
2. **Apple portal auth.** `eas device:create` with an Apple ID failed with
   `iTunes service key is empty`. Fixed by authenticating with an App Store
   Connect **API key** instead (key G9VF92L7PH). This works for the PORTAL
   path, not only for submission: `credentials/ios/appstore/
   resolveCredentials.js` reads EXPO_ASC_API_KEY_PATH / _KEY_ID / _ISSUER_ID
   and `authenticate.js` has an `AuthenticationMode.API_KEY`. No Apple ID, no
   2FA, and the failure never recurred.
3. **No registered device, then no credentials.** Internal distribution is
   ad-hoc: it needs a device UDID registered (website flow, profile installed
   on the phone) AND a distribution certificate + ad-hoc provisioning profile.
   EAS refuses to CREATE credentials under `--non-interactive`, so the build
   was run interactively through a pty; it registered the bundle identifier,
   synced capabilities, generated the profile, and uploaded 259 MB.

Reproducing it non-interactively from here on (credentials now exist):

    EXPO_ASC_API_KEY_PATH=<path to AuthKey_G9VF92L7PH.p8> \
    EXPO_ASC_KEY_ID=G9VF92L7PH \
    EXPO_ASC_ISSUER_ID=ab2e1863-a67d-40f0-a099-b22c8f43fa7b \
    EXPO_APPLE_TEAM_ID=5NYMKKM5K5 \
    EXPO_APPLE_TEAM_TYPE=COMPANY_OR_ORGANIZATION \
    npx eas-cli build --profile preview --platform ios --non-interactive

Note EXPO_APPLE_TEAM_TYPE: without it the CLI prompts, and the FIRST option is
`Enterprise` while this team is Company/Organization. Pinning it removes a
prompt that is easy to answer wrongly.

Expect plates to draw UNLABELLED on device, with a 404 per slug in the log.
That is correct while every label set is reviewed_by NULL.

## Production verification — re-run on 8cb7c16 (2026-09-10)

The first verification above ran on `13deabd`. Between it and this one,
production teaching turns were found to be failing wholesale: DeepSeek began
echoing `deepseek-flash` in stream chunks for the pinned `deepseek-v4-flash`,
and tutor.py's strict model-echo equality check raised on the first chunk of
every turn — the failure fallback voiced "I didn't quite catch that" while
auto-populated boards and precomputed widgets made classes look healthy. Fixed
in `8cb7c16` (evidence-dated alias map `models.KNOWN_MODEL_ECHOES`; unknown
echoes still refused; six unit tests incl. the failing fixture).

Verification class: bio11-ch7 "Cockroach: Morphology and Digestive System",
live against production.

    /version                  8cb7c16ae7c1c94a451324d6b9a67b5c17fdff36
    MODEL ECHO ALIAS          warning logged once (new guard path, visible)
    turn                      failed=False, 200-word narration, llm=30.4s
    ILLUSTRATION SERVED       bio11-ch7-cockroach--morphology-and-digestive-system--a (seg=1)
    DIAGRAM DROPPED           0
    client                    chapter prefetch: 23 asset(s), resolved 23, missing 0
    reveal pairing            seq 1-5 each carriedBy=onItemStart(s1-0..s5-4) —
                              per-sentence pairing restored (during the outage
                              only seq 1 paired; the rest END_OF_TURN_FLUSH)
    checkpoint                question + 3 chips mounted after audio drain
    plate                     visible (shots/live-class-production-8cb7c16.png)

Plates draw unlabelled with a 404-per-slug warning — correct while every
label set is reviewed_by NULL, and now explicit in the client log.
