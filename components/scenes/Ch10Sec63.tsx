/**
 * Ch10 · Section 63 — "Melting and boiling points shift with pressure"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi reveals have beats 3-5 exactly 1s apart, so those Fade delays
 * stay ≤ ~0.3s.
 *
 * Beats (en [0,6.06,13.82,26.79,37.21,53.93,61.53]):
 *  0 intro: how pressure shifts transition temperatures
 *  1 most substances: melting point RISES with pressure
 *  2 water is the rebel: melting point FALLS with pressure (ice expands!)
 *  3 regelation: high pressure under a wire lowers the local melting point
 *  4 wire sinks, water refreezes above — the block stays whole
 *  5 boiling: saturated vapour pressure = external pressure
 *  6 pressure cooker (higher P, higher boil T) vs mountain (lower, lower)
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | note mid x540 bl115
 *  b2 | note mid x540 bl145
 *  b3 | block x400..680 y170..210 · wire y190 x430..650 · label mid x540 bl235
 *  b4 | note mid x540 bl265
 *  b5 | note mid x540 bl300
 *  b6 | cooker x300..360 y325..365 · mountain x720..780 y325..365 ·
 *       labels mid x330/750 bl390
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

export default function Ch10Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={19} fill={INK} script>
          {t("melting and boiling points shift with pressure", "melting aur boiling points pressure se badalte hain")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("how pressure shifts the transition temperatures", "pressure transition temperatures ko kaise badalta")}
        </T>
      </Fade>

      {/* beat 1 — most substances */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={115} size={12} fill={INK} script anchor="middle">
          {t("most substances: melting point RISES with pressure", "zyadatar substances: melting point pressure se BADHTA")}
        </T>
      </Fade>

      {/* beat 2 — water is the rebel */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={145} size={12} fill={RED} script weight={700} anchor="middle">
          {t("water is the rebel: melting point FALLS (ice expands!)", "paani rebel hai: melting point GHATTA (ice expand!)")}
        </T>
      </Fade>

      {/* beat 3 — regelation */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M400 170 h280 v40 h-280 z" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.35)} d="M430 190 h220 M430 190 l-8 -10 M430 190 l8 -10 M650 190 l-8 -10 M650 190 l8 -10" stroke={INK} sw={2.5} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.65)}>
        <T x={540} y={235} size={12} fill={INK} script anchor="middle">
          {t("regelation: pressure under the wire lowers local melting point", "regelation: wire ke neeche pressure melting point ghataata")}
        </T>
      </Fade>

      {/* beat 4 — the wire sinks through */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={265} size={12} fill={MUTED} script anchor="middle">
          {t(
            "wire sinks, water refreezes above — the block stays whole",
            "wire dhasta, upar paani wapas jamta — block poora rehta"
          )}
        </T>
      </Fade>

      {/* beat 5 — boiling condition */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={300} size={13} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("boils when: saturated vapour pressure = external pressure", "ubalta jab: saturated vapour pressure = external pressure")}
        </T>
      </Fade>

      {/* beat 6 — pressure cooker vs mountain */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M300 340 q30 -20 60 0 v10 h-60 z M310 340 v-12 h40 v12" stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.35)} d="M720 365 l30 -40 l30 40 z" stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.65)}>
        <T x={330} y={390} size={11} fill={AMBER_DARK} anchor="middle">{t("higher P — higher boil T", "zyada P — zyada boil T")}</T>
        <T x={750} y={390} size={11} fill={GREEN} anchor="middle">{t("lower P — boils below 100°C", "kam P — 100°C se neeche ubalta")}</T>
      </Fade>
    </Scene>
  );
}
