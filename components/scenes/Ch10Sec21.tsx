/**
 * Ch10 · Section 21 — "Worked example: heating a vessel and its water"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,5.97,16.21,26.54,38.14,46.25,54.27], hi beats 2-5 exactly
 * 1s apart — every Fade delay below stays ≤ ~0.3s):
 *  0 hook: a clean board-level warm-up
 *  1 setup: 0.5kg Al vessel + 2kg water, 25°C → 75°C, find Q
 *  2 given: ΔT=50K, c_water=4186, c_Al=900
 *  3 formula: Q = (m_w c_w + m_Al c_Al) ΔT
 *  4 substitute: (2×4186 + 0.5×900) × 50
 *  5 answer: = 8822 × 50 = 4.41×10⁵ J
 *  6 takeaway: vessel contributes only ~5% — always include the container
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | vessel x480..600 y120..180 + waterline · temp mid x540 bl200 ·
 *       question mid x540 bl225
 *  b2 | given mid x540 bl255
 *  b3 | formula mid x540 bl290
 *  b4 | substitution mid x540 bl320
 *  b5 | box x350..730 y350..390 · answer mid x540 bl375
 *  b6 | takeaway mid x540 bl420
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("worked example — heating a vessel and its water", "worked example — vessel aur uske paani ko garam karna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a clean board-level warm-up", "ek saaf board-level warm-up")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M480 120 h120 v60 h-120 z" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M480 145 h120" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.65)}>
        <T x={540} y={200} size={12} fill={MUTED} anchor="middle">25°C → 75°C</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={225} size={13} fill={INK} script anchor="middle">
          {t("heat the whole system — find Q", "poora system garam karo — Q nikaalo")}
        </T>
      </Fade>

      {/* beat 2 — given */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={255} size={12} fill={INK} anchor="middle">
          ΔT=50K, c_water=4186 J/(kg·K), c_Al=900 J/(kg·K)
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={290} size={15} fill={INK} weight={700} anchor="middle">
          Q = (m_w c_w + m_Al c_Al) ΔT
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={320} size={14} fill={INK} script anchor="middle">
          = (2×4186 + 0.5×900) × 50
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 350 h380 v40 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={375} size={15} fill={GREEN} weight={800} anchor="middle">
          = 8822 × 50 = 4.41×10⁵ J
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={420} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "the vessel contributes only ~5% — small, but always include the container",
            "vessel sirf ~5% deta hai — chhota, par container hamesha jodo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
