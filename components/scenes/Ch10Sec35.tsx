/**
 * Ch10 · Section 35 — "Worked example: copper and steel joined in series"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,15.46,22.03,30.82] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: the circuit method at work — Cu + steel in series
 *  1 setup: each rod 0.5m, A=4cm², Cu end 100°C, steel end 0°C
 *  2 method: convert to R, add in series, H = ΔT/R_eq
 *  3 R_cu=3.125, R_steel=25 (steel far bigger), R_eq=28.125 K/W
 *  4 H = 100/28.125 ≈ 3.56 W
 *  5 junction = 100 − H·R_cu ≈ 88.9°C
 *  6 takeaway: junction hugs the hot end — steel hogs nearly all the drop
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | rod1(Cu) x300..540 y105..125 · rod2(steel) x540..780 y105..125 ·
 *       junction (540,115) · 100°C end x280 bl120 · 0°C end x800 bl120 ·
 *       dims mid x540 bl155
 *  b2 | method mid x540 bl185
 *  b3 | R values mid x540 bl215
 *  b4 | box x380..700 y240..280 · H mid x540 bl265
 *  b5 | box x350..730 y300..340 · junction mid x540 bl325
 *  b6 | takeaway mid x540 bl370
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — copper and steel joined in series", "worked example — copper aur steel series mein jode")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the circuit method at work — copper + steel in series", "circuit method kaam mein — copper + steel series mein")}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M300 105 h240 v20 h-240 z" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M540 105 h240 v20 h-240 z" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.45)} d="M536 115 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" stroke={INK} sw={1.6} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.55)}>
        <T x={280} y={120} size={12} fill={RED} anchor="end">100°C</T>
        <T x={800} y={120} size={12} fill={MUTED} anchor="start">0°C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={155} size={11} fill={MUTED} anchor="middle">
          {t("each 0.5m, A=4cm²", "har ek 0.5m, A=4cm²")}
        </T>
      </Fade>

      {/* beat 2 — the method */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={185} size={13} fill={INK} script anchor="middle">
          {t("convert to R, add in series, H = ΔT/R_eq", "R mein badlo, series mein jodo, H = ΔT/R_eq")}
        </T>
      </Fade>

      {/* beat 3 — the resistances */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={215} size={13} fill={INK} anchor="middle">
          R_Cu=3.125, R_steel=25 ⇒ R_eq=28.125 K/W
        </T>
      </Fade>

      {/* beat 4 — the heat current */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M380 240 h320 v40 h-320 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={265} size={15} fill={GREEN} weight={800} anchor="middle">
          H = 100/28.125 ≈ 3.56 W
        </T>
      </Fade>

      {/* beat 5 — the junction temperature */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 300 h380 v40 h-380 z" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={325} size={15} fill={GREEN} weight={800} anchor="middle">
          T_junction ≈ 88.9°C
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={370} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "junction hugs the hot end — steel hogs nearly all the drop",
            "junction garam sire ke paas — steel taqreeban poora drop le leta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
