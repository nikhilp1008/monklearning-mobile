/**
 * Ch10 · Section 58 — "Worked example: volume doubles at constant pressure"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,5.46,15.27,30.55,35.84,36.84,37.84] — beats 4-6 exactly
 * 1s apart, so those Fade delays stay ≤ ~0.3s):
 *  0 hook: the most common NEET gas-law trap — all about units
 *  1 setup: 27°C, constant P, volume doubles — find final T
 *  2 the reflex (WRONG): double 27 to 54°C
 *  3 convert first: 27°C = 300K
 *  4 V ∝ T ⇒ T₂ = 2×300 = 600K = 327°C
 *  5 the rule: convert to kelvin before any ratio
 *  6 takeaway: doubling the Celsius reading is the #1 error
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl120
 *  b2 | box x350..730 y145..185 · wrong mid x540 bl168 · cross over box
 *  b3 | convert mid x540 bl215
 *  b4 | box x330..750 y240..282 · answer mid x540 bl267
 *  b5 | rule mid x540 bl315
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

export default function Ch10Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("worked example — volume doubles at constant pressure", "worked example — constant pressure par volume double")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("the most common NEET gas-law trap — all about units", "sabse common NEET gas-law trap — sirf units ka khel")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={13} fill={INK} script anchor="middle">
          {t("27°C, constant P, volume doubles — find final T", "27°C, constant P, volume double — final T nikaalo")}
        </T>
      </Fade>

      {/* beat 2 — the wrong reflex */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M350 145 h380 v40 h-380 z" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={540} y={168} size={13} fill={RED} anchor="middle">
          {t("double 27 ⇒ 54°C — WRONG", "27 ko double ⇒ 54°C — GALAT")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={crossD(350, 145, 380, 40)} stroke={RED} sw={2} dur={0.35} />

      {/* beat 3 — convert first */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={215} size={13} fill={INK} anchor="middle">
          {t("convert first: 27°C = 300K", "pehle convert karo: 27°C = 300K")}
        </T>
      </Fade>

      {/* beat 4 — the answer */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M330 240 h420 v42 h-420 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={267} size={15} fill={GREEN} weight={800} anchor="middle">
          T₂ = 2×300 = 600K = 327°C
        </T>
      </Fade>

      {/* beat 5 — the rule */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={315} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t("convert to kelvin before any ratio", "kisi bhi ratio se pehle kelvin mein convert karo")}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={350} size={13} fill={RED} script weight={700} anchor="middle">
          {t(
            "doubling the Celsius reading is the #1 error",
            "Celsius reading double karna #1 galti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
