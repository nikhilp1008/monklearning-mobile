/**
 * Ch10 · Section 34 — "Worked example: halve the length, double the radius"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,4.95,15.96,24.75,25.75,26.75,27.75] — beats 3-6 exactly
 * 1s apart, so those Fade delays stay ≤ ~0.3s):
 *  0 hook: a quick trap that punishes one reflex error
 *  1 setup: rod at rate H; L→L/2, r→2r — new rate?
 *  2 reflex mistake: forgets cross-section goes as r², not r
 *  3 the wrong write-up: double r ⇒ double A — wrong factor
 *  4 fast way: H ∝ A/L = r²/L, holding K and ΔT fixed
 *  5 r² grows ×4, L halved ⇒ another ×2 ⇒ new rate = 8H
 *  6 takeaway: always think r² for circular rods
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl120
 *  b2 | note mid x540 bl155
 *  b3 | box x300..780 y180..220 · wrong mid x540 bl203 · cross over box
 *  b4 | fast-way mid x540 bl250
 *  b5 | box x350..730 y275..320 · answer mid x540 bl302
 *  b6 | takeaway mid x540 bl350
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — halve the length, double the radius", "worked example — length aadhi, radius double")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a quick trap that punishes one reflex error", "ek tez trap jo ek reflex galti ki saza deta")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={13} fill={INK} script anchor="middle">
          {t("rod at rate H; L→L/2, r→2r — new rate?", "rod rate H par; L→L/2, r→2r — naya rate?")}
        </T>
      </Fade>

      {/* beat 2 — the mistake */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={12} fill={INK} script anchor="middle">
          {t("forgets: cross-section goes as r², not r", "bhool jaate: cross-section r² jaisa, r jaisa nahi")}
        </T>
      </Fade>

      {/* beat 3 — the wrong write-up */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M300 180 h480 v40 h-480 z" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.35)}>
        <T x={540} y={203} size={13} fill={RED} anchor="middle">
          {t("double r ⇒ double A — WRONG factor", "double r ⇒ double A — GALAT factor")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={crossD(300, 180, 480, 40)} stroke={RED} sw={2} dur={0.35} />

      {/* beat 4 — the fast way */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={250} size={14} fill={INK} anchor="middle">
          {t("H ∝ A/L = r²/L (K, ΔT fixed)", "H ∝ A/L = r²/L (K, ΔT fixed)")}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 275 h380 v45 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={302} size={15} fill={GREEN} weight={800} anchor="middle">
          r²×4, L÷2 ⇒ new rate = 8H
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={350} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t("always think r² for circular rods — a doubled radius is 4× the area", "hamesha r² socho — double radius ka matlab 4× area")}
        </T>
      </Fade>
    </Scene>
  );
}
