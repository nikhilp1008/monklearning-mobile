/**
 * Ch10 · Section 51 — "Calibration and the universal gas thermometer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,10.45,28.71,37.41,50.13] — beats 0-1 exactly 1s apart,
 * so those Fade delays stay ≤ ~0.3s):
 *  0 intro: calibration needs two reproducible fixed points
 *  1 the classic pair: ice point 0°C, steam point 100°C (both at 1 atm)
 *  2 divide the span into 100 equal parts — a Celsius thermometer
 *  3 subtlety: mercury and alcohol, both calibrated, disagree at 50°
 *  4 which is true? neither, exactly
 *  5 the escape: dilute gas — H₂, He, N₂ all give the same reading
 *  6 universality ⇒ the ideal-gas standard all others are checked against
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | fixed points mid x540 bl118
 *  b2 | note mid x540 bl150
 *  b3 | tube1 x400..415 y180..280 · tube2 x480..495 y180..280 ·
 *       tick1 y230 · tick2 y210 · label mid x540 bl305
 *  b4 | note mid x540 bl335
 *  b5 | note mid x540 bl370
 *  b6 | takeaway mid x540 bl405
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("calibration and the universal gas thermometer", "calibration aur universal gas thermometer")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("calibration needs two reproducible fixed points", "calibration ke liye do reproducible fixed points chahiye")}
        </T>
      </Fade>

      {/* beat 1 — ice and steam points */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={12} fill={INK} anchor="middle">
          {t("ice point: 0°C — steam point: 100°C (both at 1 atm)", "ice point: 0°C — steam point: 100°C (dono 1 atm par)")}
        </T>
      </Fade>

      {/* beat 2 — the 100 divisions */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={150} size={12} fill={MUTED} script anchor="middle">
          {t("divide into 100 equal parts — a Celsius thermometer", "100 barabar hisson mein baanto — ek Celsius thermometer")}
        </T>
      </Fade>

      {/* beat 3 — mercury vs alcohol disagree */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M400 180 h15 v100 h-15 z M392 285 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0" stroke={INK_LIGHT} sw={1.6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.35)} d="M480 180 h15 v100 h-15 z M472 285 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0" stroke={INK_LIGHT} sw={1.6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M395 230 h20 M480 210 h20" stroke={RED} sw={2.5} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.85)}>
        <T x={540} y={305} size={12} fill={RED} script anchor="middle">
          {t("mercury vs alcohol — disagree at 50°!", "mercury vs alcohol — 50° par alag!")}
        </T>
      </Fade>

      {/* beat 4 — neither is true */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={335} size={12} fill={INK} script anchor="middle">
          {t("which one is true? neither, exactly", "kaunsa sahi hai? koi nahi, sateek roop se")}
        </T>
      </Fade>

      {/* beat 5 — the gas thermometer escape */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={370} size={13} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("dilute gas: H₂, He, N₂ — all agree!", "dilute gas: H₂, He, N₂ — sab match karte!")}
        </T>
      </Fade>

      {/* beat 6 — the fundamental standard */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={405} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "the ideal-gas standard — all other thermometers checked against it",
            "ideal-gas standard — sabhi thermometers isi se check hote hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
