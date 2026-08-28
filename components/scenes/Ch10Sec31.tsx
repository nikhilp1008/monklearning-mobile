/**
 * Ch10 · Section 31 — "Thermal resistance, series and parallel"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en reveals have beats 1-5 exactly 1s apart, so those Fade
 * delays stay ≤ ~0.3s.
 *
 * Beats (en [0,4.35,5.35,6.35,7.35,8.35,9.35]):
 *  0 intro: the toolkit that cracks every multi-rod problem
 *  1 recap: R = L/(KA), H = ΔT/R
 *  2 unit K/W; ΔT~voltage, H~current
 *  3 series (end to end): R_eq = R₁ + R₂ + ...
 *  4 series detail: H common to all, ΔT divides ∝ R
 *  5 parallel (side by side): 1/R_eq = 1/R₁ + 1/R₂
 *  6 equal rods in parallel: K_eff = (K₁+K₂)/2
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl88
 *  b1 | recap mid x540 bl115
 *  b2 | unit mid x540 bl145
 *  b3 | series-label mid x540 bl165 · rod1 x250..400 y180..200 ·
 *       rod2 x400..550 y180..200 · R₁ mid x325 bl215 · R₂ mid x475 bl215 ·
 *       formula mid x540 bl245
 *  b4 | note mid x540 bl270
 *  b5 | parallel-label mid x540 bl300 · rod1 x300..600 y315..330 ·
 *       rod2 x300..600 y345..360 · connectors x300/600 y315..360 ·
 *       R₁ st x630 bl325 · R₂ st x630 bl355
 *  b6 | formula mid x540 bl385 · special case mid x540 bl410
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

export default function Ch10Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("thermal resistance, series and parallel", "thermal resistance, series aur parallel")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={88} size={12} fill={INK} script anchor="middle">
          {t("the toolkit that cracks every multi-rod problem", "toolkit jo har multi-rod problem todta hai")}
        </T>
      </Fade>

      {/* beat 1 — recap */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={115} size={13} fill={INK} anchor="middle">
          R = L⁄(KA),  H = ΔT⁄R
        </T>
      </Fade>

      {/* beat 2 — the unit */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={145} size={12} fill={MUTED} script anchor="middle">
          {t("unit K/W — ΔT~voltage, H~current", "unit K/W — ΔT~voltage, H~current")}
        </T>
      </Fade>

      {/* beat 3 — series */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={165} size={12} fill={INK} script weight={700} anchor="middle">
          {t("series — end to end", "series — ek ke baad ek")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M250 180 h150 v20 h-150 z" stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.65)} d="M400 180 h150 v20 h-150 z" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={325} y={215} size={12} fill={RED} anchor="middle">R₁</T>
        <T x={475} y={215} size={12} fill={AMBER_DARK} anchor="middle">R₂</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.15)}>
        <T x={540} y={245} size={14} fill={INK} weight={700} anchor="middle">
          R_eq = R₁ + R₂ + ...
        </T>
      </Fade>

      {/* beat 4 — series detail */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={270} size={12} fill={GREEN} script anchor="middle">
          {t("H common to all — ΔT divides ∝ R", "H sabke liye same — ΔT badhta ∝ R")}
        </T>
      </Fade>

      {/* beat 5 — parallel */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={300} size={12} fill={INK} script weight={700} anchor="middle">
          {t("parallel — side by side", "parallel — saath saath")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.45)} d="M300 315 h300 v15 h-300 z" stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d="M300 345 h300 v15 h-300 z" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.95)} d="M300 315 v45 M600 315 v45" stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={630} y={325} size={12} fill={RED} anchor="start">R₁</T>
        <T x={630} y={355} size={12} fill={AMBER_DARK} anchor="start">R₂</T>
      </Fade>

      {/* beat 6 — the parallel formulas */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={385} size={13} fill={INK} weight={700} anchor="middle">
          1⁄R_eq = 1⁄R₁ + 1⁄R₂
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={410} size={12} fill={GREEN} script anchor="middle">
          {t("equal rods ⇒ K_eff = (K₁+K₂)⁄2", "equal rods ⇒ K_eff = (K₁+K₂)⁄2")}
        </T>
      </Fade>
    </Scene>
  );
}
