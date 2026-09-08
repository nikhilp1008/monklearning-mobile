# Paste this to Claude, along with this folder

Everything below is written to be handed straight to an agent working in the
marketing-site repo. It restates the facts it needs, so it does not have to
infer anything from the file tree.

---

## Prompt

> I'm adding a live-class demo section to our landing page. The folder
> `handoff_landing_demo/` has everything: a working self-contained page, eight
> mp3s, and a `scene.json` describing the scene.
>
> Read `handoff_landing_demo/README.md` first — it has the full spec, the
> integration steps, and the decisions already made. Then:
>
> 1. Copy `demo/audio/` and `demo/samples/` into our static assets, keeping the
>    filenames exactly (`<teacher>-<language>.mp3`, teacher ∈ {drona, veda},
>    language ∈ {hinglish, english}). If they don't end up at `audio/…` and
>    `samples/…` relative to the page, update the two `src` assignments in
>    `loadVariant()` and `playSample()` to match.
> 2. Port `<section id="mld">…</section>` from `demo/classroom-demo.html` into
>    our page, along with its `<style>`, its `<script>`, and the two `<audio>`
>    elements. All CSS is scoped to `#mld` except the `@keyframes` (`mlBlink`,
>    `mlWave`, `mlPulse`, `mlLevel`, `mlIdleWave`) and the `[data-noscroll]`
>    rule — bring those too.
> 3. Drop the placeholder eyebrow, `<h1>` and `.mld-sub`; write section copy in
>    our own voice. Keep `.mld-stage` and everything after it.
> 4. Make sure Anek Latin, Anek Devanagari and Kalam are loaded (Google Fonts).
> 5. Keep `preload="none"` on both `<audio>` elements.
> 6. Confirm our host serves HTTP Range requests (`206 Partial Content`) for
>    the mp3s — the mid-class voice switch seeks the audio, and without Range
>    the seek silently fails and `currentTime` stays at 0.
>
> Do not restyle the 844×390 device frame or anything inside it. That markup is
> our design handoff verbatim (`handoff_landscape_classroom/design/2a-live-class.html`)
> and the board's 26px writing rhythm and 56px left gutter only hold at the
> authored pixel sizes. The frame is scaled by `fit()`, never reflowed.
>
> If you're rebuilding rather than porting: `scene.json` is the source of truth
> for board HTML, captions and cue times, and `scripts/build_demo.py` shows
> exactly how the page is assembled from it.

---

## Facts an agent will want, without digging

**Component shape.** One `<section id="mld">` + one `<style>` + one `<script>`
+ two `<audio>` elements. No dependencies, no build step, no framework. Vanilla
DOM, ES5-compatible syntax.

**Files and how they're addressed at runtime**

| Purpose | Path pattern | Count | Size each |
| --- | --- | --- | --- |
| Class narration | `audio/<teacher>-<language>.mp3` | 4 | ~1.2–1.4 MB |
| Teacher introduction | `samples/<teacher>-<language>.mp3` | 4 | ~250–310 KB |

`teacher` is `drona` or `veda`; `language` is `hinglish` or `english`. All four
combinations exist in both sets. Display names come from `scene.json`'s
`teachers` map (`drona → "Drona"`, `veda → "Vedha"`), not from the filenames.

**Durations** — class: 96.4s / 96.7s / 107.8s / 102.0s (drona-hinglish,
drona-english, veda-hinglish, veda-english). Introductions: 18.9s / 19.5s /
16.2s / 15.4s in the same order.

**The `SCENE` object** inlined at the top of the script is the only data the
page needs:

```js
SCENE = {
  teachers:  { drona: "Drona", veda: "Vedha" },
  languages: ["hinglish", "english"],
  variants: {
    "drona-hinglish": {
      cues:     [0.5, 8.8, …],   // 12 floats, seconds — when each board item appears
      duration: 96.4,
      captions: [ …12 strings… ] // the spoken sentence, shown in the CC strip
    },
    … 3 more
  },
  samples: { "drona-hinglish": { duration: 18.9 }, … }
}
```

Board items live in the DOM, each tagged `data-line="<index>"` matching its cue
index, plus `data-type` (`heading` | `text` | `formula` | `note` | `diagram`).
`data-hidden` is removed when the cue fires. Text items are split into
`span.mld-ch` characters on first reveal and typed out; the `diagram` item fades
its SVG children in instead.

**Functions worth knowing**

| Function | Does |
| --- | --- |
| `mldStart()` | dismiss the veil, start playing |
| `mldToggle()` | play / pause |
| `mldRestart()` | reset board, seek 0, play |
| `setVariant(teacher, language)` | swap voice/language, resume at the same sentence |
| `playSample(key)` | play one introduction, e.g. `playSample('veda-english')` |
| `fit()` | recompute the frame scale — call after any container width change |

**Autoplay.** There is none, by design: the page waits for a click, because a
browser will not play audio without a gesture and a muted classroom demo is
pointless. An `IntersectionObserver` pauses playback when the section scrolls
out of view.

**Accessibility.** Teacher and language pills are real `<button>`s with
`aria-pressed`. `prefers-reduced-motion` stops the decorative level meters. The
board's typing and the caption are visual only — the captions are also in
`SCENE.variants[…].captions` as plain strings if you want a transcript in the
page for SEO or screen readers, which would be a genuine improvement.

**Do not** re-encode the mp3s. They are already loudness-levelled to −16 LUFS so
switching between Drona and Vedha is not a volume jump.
