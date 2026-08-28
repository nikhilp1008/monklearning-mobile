/**
 * Ch10 · Section 27 — "Fourier's law by feel: four sensible factors"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi reveals have beats 2-5 exactly 1s apart, so those Fade
 * delays stay ≤ ~0.3s.
 *
 * Beats (en [0,7.59,17.41,24.41,32.34,41.98,52.91]):
 *  0 hook: how fast does heat conduct? four sensible things
 *  1 setup: rod — T₁ hot, T₂ cold, cross-section A, length L
 *  2 bigger A (fatter) ⇒ faster
 *  3 bigger ΔT (T₁−T₂) ⇒ faster
 *  4 bigger L (longer) ⇒ SLOWER
 *  5 K (thermal conductivity): copper huge, air/wool tiny
 *  6 takeaway: tiny K is why a wool blanket throttles heat escape
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | rod x250..650 y155..185 · T₁ st x220 bl175 · T₂ st x680 bl175 ·
 *       L bracket y195..205 · L label mid x450 bl222
 *  b2 | line1 mid x540 bl240
 *  b3 | line2 mid x540 bl268
 *  b4 | line3 mid x540 bl296
 *  b5 | line4 mid x540 bl324
 *  b6 | takeaway mid x540 bl365
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

export default function Ch10Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("fourier's law by feel — four sensible factors", "fourier's law by feel — chaar samajhdaar factors")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("how fast does heat conduct? four sensible things", "heat kitni tez conduct hoti? chaar samajhdaar cheezein")}
        </T>
      </Fade>

      {/* beat 1 — the rod setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M250 155 h400 v30 h-400 z" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.55)}>
        <T x={220} y={175} size={13} fill={RED} anchor="end">T₁</T>
        <T x={680} y={175} size={13} fill={MUTED} anchor="start">T₂</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M250 195 v10 M250 200 h400 M650 195 v10" stroke={INK_LIGHT} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={450} y={222} size={12} fill={MUTED}>L</T>
      </Fade>

      {/* beat 2 — bigger A, faster */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={240} size={13} fill={GREEN} script anchor="middle">
          {t("bigger A (fatter rod) ⇒ faster", "bada A (mota rod) ⇒ tez")}
        </T>
      </Fade>

      {/* beat 3 — bigger ΔT, faster */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={268} size={13} fill={GREEN} script anchor="middle">
          {t("bigger ΔT (T₁−T₂) ⇒ faster", "bada ΔT (T₁−T₂) ⇒ tez")}
        </T>
      </Fade>

      {/* beat 4 — bigger L, slower */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={296} size={13} fill={RED} script anchor="middle">
          {t("bigger L (longer) ⇒ SLOWER", "bada L (lamba) ⇒ DHEEMA")}
        </T>
      </Fade>

      {/* beat 5 — K, the material's willingness */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={540} y={324} size={13} fill={AMBER_DARK} script anchor="middle">
          {t("K (conductivity): copper huge, air/wool tiny", "K (conductivity): copper bada, air/wool chhota")}
        </T>
      </Fade>

      {/* beat 6 — the wool takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={365} size={14} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "tiny K is why wool throttles the escape of your body heat",
            "chhota K hi wajah — wool tumhari body heat ko bahar jaane se rokta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
