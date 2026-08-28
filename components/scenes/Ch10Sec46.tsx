/**
 * Ch10 · Section 46 — "Worked example: by what factor does the power grow?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,5.03,16.21,25.09,26.09,27.09,28.09] — beats 3-6 exactly
 * 1s apart, so those Fade delays stay ≤ ~0.3s):
 *  0 hook: a two-error trap that catches students constantly
 *  1 setup: T raised 27°C→327°C — by what factor does power increase?
 *  2 the double trap: plug Celsius, or forget T⁴ and answer "2" — both wrong
 *  3 convert to kelvin: 300→600, a ratio of exactly 2
 *  4 power ratio = (T ratio)⁴ = 2⁴ = 16
 *  5 never touched σ or A — a pure kelvin ratio does the whole job
 *  6 takeaway: work in kelvin, use ratio⁴ — forgetting to convert is deadliest
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl120
 *  b2 | box x350..730 y145..185 · wrong mid x540 bl168 · cross over box
 *  b3 | convert mid x540 bl215
 *  b4 | box x400..680 y240..282 · answer mid x540 bl267
 *  b5 | note mid x540 bl310
 *  b6 | takeaway mid x540 bl345
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("worked example — by what factor does the power grow?", "worked example — power kitne factor se badhta hai?")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a two-error trap that catches students constantly", "do-galti ka trap jo students ko baar baar pakadta")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={13} fill={INK} script anchor="middle">
          {t("T raised 27°C → 327°C — power grows by what factor?", "T 27°C → 327°C — power kitne factor se badhta?")}
        </T>
      </Fade>

      {/* beat 2 — the double trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M350 145 h380 v40 h-380 z" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={540} y={168} size={13} fill={RED} anchor="middle">
          {t("Celsius numbers, or forget T⁴ ⇒ 'answer = 2' — WRONG", "Celsius numbers, ya T⁴ bhoolna ⇒ 'answer = 2' — GALAT")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={crossD(350, 145, 380, 40)} stroke={RED} sw={2} dur={0.35} />

      {/* beat 3 — convert to kelvin */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={215} size={13} fill={INK} anchor="middle">
          {t("convert to kelvin: 300 → 600, ratio = 2", "kelvin mein badlo: 300 → 600, ratio = 2")}
        </T>
      </Fade>

      {/* beat 4 — the answer */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M400 240 h280 v42 h-280 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={267} size={16} fill={GREEN} weight={800} anchor="middle">
          2⁴ = 16
        </T>
      </Fade>

      {/* beat 5 — the insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={310} size={12} fill={MUTED} script anchor="middle">
          {t("never touched σ or A — a pure kelvin ratio does the job", "σ ya A ko chhua hi nahi — sirf kelvin ratio kaafi tha")}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={345} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "work in kelvin, use ratio⁴ — skipping the conversion is deadliest",
            "kelvin mein kaam karo, ratio⁴ use karo — conversion bhoolna sabse ghatak"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
