# Handoff: landing-page classroom demo

A complete, authored stretch of a MonkLearning live class — board, voice and
captions — for the marketing site. Plus four standalone voice introductions,
one per teacher per language.

**Topic:** Rotational Motion → **Conservation of Angular Momentum**
(deliberately not torque — torque is what the current site demo already shows).

The class runs about **1:40** and teaches the concept end to end: the spinning
skater, `L = Iω`, `I = Σmr²`, why no external torque means `L` is fixed,
`I₁ω₁ = I₂ω₂`, a worked number (`4 × 2 / 1.2 = 6.7 rev/s`), the misconception
fix, the `K = L²/2I` exam trap, and a close. It does not stop mid-thought.

## The voices are the real ones

Not stand-ins. Every clip here was synthesised through the **production voice
stack** — Rumik Silk, model `mulberry`, presets `Lucas` and `Ira` — the same
endpoint and the same two presets a live class uses. The mapping was read from
`monk-learning-api/app/drona/persona.py`, which is the single source of truth:

| Teacher | Backend `voice` | Rumik preset | Displayed as |
| --- | --- | --- | --- |
| Drona | `male` | `Lucas` | Drona |
| Vedha | `female` | `Ira` | Vedha |

So a visitor who plays this hears exactly the voice they get after signing up.

## What's in the box

```
handoff_landing_demo/
├── demo/
│   ├── classroom-demo.html      the whole thing, self-contained, opens by double-click
│   ├── audio/                   4 × full class narration
│   │   ├── drona-hinglish.mp3   1:36
│   │   ├── drona-english.mp3    1:37
│   │   ├── veda-hinglish.mp3    1:48
│   │   └── veda-english.mp3     1:42
│   └── samples/                 4 × teacher introduction ("Hello! Main Drona hoon, aapka teacher…")
│       ├── drona-hinglish.mp3   19s
│       ├── drona-english.mp3    15s
│       ├── veda-hinglish.mp3    17s
│       └── veda-english.mp3     17s
├── scene.json                   the authored scene: board HTML, captions, per-variant cue times
└── scripts/
    ├── scene_script.py          the content — board items and all four narration scripts
    ├── render_voices.py         re-renders every clip through the production TTS
    └── build_demo.py            rebuilds classroom-demo.html from scene.json
```

All four teacher × language combinations exist for both the class and the
introductions — eight audio files, no gaps.

## The screen is not new

The 844 × 390 device frame inside `classroom-demo.html` is
`handoff_landscape_classroom/design/2a-live-class.html`. Markup, element ids and
every inline style are that file's, unchanged. Only the board's **content** is
new, plus the engine that drives it.

Everything that is not the phone screen — the play button, the teacher and
language pills, the voice-sample cards — sits **outside** the frame, in the page
around it, and is all scoped under `#mld`.

## How the timing works

Each of the twelve board items pairs with one spoken sentence. Every sentence
was synthesised as its own request, exactly as in a real class, and the audio's
**measured** length became that item's cue time. `scene.json` holds those cues
per variant, which is why the timings differ per voice — Ira speaks a little
slower than Lucas, so her cues are further apart. Nothing runs on a fixed timer.

Within a sentence, the line is written out one character at a time, paced so the
writing lands at roughly 62% of the way through what is being said about it —
a teacher writes, then talks it over. The caption strip fills at exactly speech
rate and scrolls to keep its tail visible, with a leading `…`, as in the design
still.

## What a visitor can do

- **Play the class.** Board writes, captions track the voice, the board
  follows the writing edge.
- **Switch teacher or language mid-class.** It resumes at the *same sentence* in
  the other voice, so you can A/B Drona against Vedha on the same line.
- **Play any of the four introductions.** Playing one pauses the class.
- The screen's own interactions are live too: tap the board to tuck the chrome,
  the right-edge handle brings it back, `CC` toggles captions, and holding
  **Interrupt** pauses the teacher for exactly as long as it is held, with the
  caption strip switching to **Listening** — the real hold-to-speak gesture.
- The chrome tucks itself ~5s in. The header floats over the board, so once the
  board scrolls past its first screenful, earlier lines would pass underneath
  it; tucking is the design's own answer (and what a student does anyway).
  It stays tucked at the end so the finished notes are unobstructed.

## Integrating it — for whoever picks this up

`demo/classroom-demo.html` is a standalone page, but the part you want is one
`<section id="mld">` plus one `<style>` and one `<script>`.

1. Copy `demo/audio/` and `demo/samples/` to the site, keeping the filenames.
   They are fetched as `audio/<teacher>-<language>.mp3` and
   `samples/<teacher>-<language>.mp3` — either preserve those relative paths or
   change the two `src` assignments in `loadVariant()` and `playSample()`.
2. Copy `<section id="mld">…</section>` and the two `<audio>` elements into the
   page. Every CSS rule is already scoped to `#mld`; the only unscoped rules are
   the `@keyframes` (`mlBlink`, `mlWave`, `mlPulse`, `mlLevel`, `mlIdleWave`) and
   the `[data-noscroll]` scrollbar hider — both must come along, and both are
   named to avoid collisions.
3. The fonts are Google Fonts: **Anek Latin** (UI), **Anek Devanagari**
   (captions), **Kalam** (handwriting). If the site already loads them, drop the
   duplicate `<link>`.
4. Delete the eyebrow, `<h1>` and `.mld-sub` — that copy is placeholder, the
   page will have its own. Keep `.mld-stage` and everything below it.
5. The frame is pixel-authored at 844 × 390 and is **scaled**, not reflowed —
   `fit()` sets `transform: scale()` on `.mld-scaler` from the container width
   and runs on load and resize. If the section mounts inside something that
   animates its width, call `fit()` again after that settles.

### Two things that will bite

- **The host must serve HTTP Range requests.** Switching voices mid-class seeks
  the audio, and a server without `206 Partial Content` silently refuses to
  seek — `currentTime` stays at 0. S3, CloudFront, nginx, Vercel and Netlify all
  do it; Python's `http.server` does not, which is worth knowing if anyone
  previews locally.
- **`preload="none"` is deliberate.** The scene tracks are ~1.2 MB each and only
  fetch on the first play. Do not switch it to `auto` — that would pull 9 MB on
  every page load for a visitor who never presses play.

## Decisions worth knowing about

**The board is language-neutral.** One board serves all four variants, so
nothing written on the paper is language-specific — notation and English prose
only, with Hinglish confined to the voice and the captions. The original torque
board wrote Hinglish asides in Kalam, which was fine there because that file only
ever showed one session. If you want the Hinglish asides back, the board needs to
become two sets and swap with the language pill; say so and it's a small change.

**"Vedha", not "Veda".** The app displays *Vedha* on every screen
(`lib/preferences.ts` → `teacherName()`) while the voice service's `persona.py`
calls her *Veda*. This package follows the app, since the landing page is a
customer-facing surface like the app is — including in what she says out loud.
That mismatch is still unresolved server-side and should be settled in one place.

**"JEE" is written `J E E` in the narration, on purpose.** Rumik reads the bare
acronym as the word "jee". `voice_proxy.py` does have a phonetics layer, but
`_apply_letter_phonetics()` only spells *single* letters in variable contexts and
its all-caps rule `\b[A-Z]{2,5}\b` runs **only inside square brackets** — so an
acronym in ordinary prose is handed to Rumik untouched. Spaced capitals is the
form that recites correctly; it was picked by ear against `Jay Ee Ee`, `J.E.E.`
and the raw acronym. Do not re-pick this by measuring clip length — the correct
form is *shorter* than the mispronounced one, so duration points the wrong way.

**This bug is not confined to the demo.** Any class where a teacher says "JEE"
hits it. The durable fix is an acronym rule in `voice_proxy.py`, not a spelling
workaround in one script.

**Hinglish closes on a rhyming couplet, English does not.** English carries
internal near-rhyme (*NEET / need*, *teacher / teach you*); Hindi carries
end-rhyme, so the Hinglish intro lands a tukbandi couplet instead — *aaj ki
mushkil, kal ki manzil*. Same effect, different device. Don't translate one into
the other.

**The introductions are 15–19s, not exactly 15.** Lucas (Drona) speaks about
2.2 words/sec against Ira's 2.6, so identical text runs longer in his voice.
Each card shows its real length; trim the strings in `scene_script.py` and re-run
if you want them tighter.

**The board reveals per character, not per line.** The static handoff file
reveals whole lines, but its README specifies a typewriter (~26ms/char) as the
behaviour to build. This follows the spec, not the placeholder.

## Regenerating

Content lives in `scripts/scene_script.py` — board items in `BOARD`, narration in
`HINGLISH` / `ENGLISH`, introductions in `SAMPLES`. Editing text there and
re-running is the whole loop:

```bash
cd handoff_landing_demo/scripts
python3 render_voices.py --dry-run   # print what would be spoken, call nothing
python3 render_voices.py             # re-render all 8 clips + rewrite scene.json
python3 render_voices.py --samples   # just the four introductions
python3 build_demo.py                # rebuild classroom-demo.html from scene.json
```

Needs `requests`, `websockets` and `ffmpeg`. The Rumik key is read from
`monk-learning-api/.env` (or `RUMIK_API_KEY` / `MONK_API_ENV` in the
environment) and is never written into any output file. Rumik meters 100
requests/minute; the renderer paces itself at ~1.3s between calls, so a full run
is about five minutes.

Hinglish narration keeps gendered verb agreement per teacher — Drona *"main
board pe likhta hoon"*, Vedha *"likhti hoon"* — per Rule 12 of
`monk-learning-api/prompts/tutor.md`. English is strictly Hindi-free, per the
same file. If you add sentences, keep both rules.
