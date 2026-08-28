/**
 * Ch10 · Section 33 — "Worked example: heat lost through a windowpane"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,7.78,17.42,23.05] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: a clean board numerical
 *  1 setup: pane 1.5m×1m, 4mm thick, inside 22°C, outside 8°C, find H
 *  2 given: A=1.5m², L=4×10⁻³m, ΔT=14K, K_glass=0.8
 *  3 formula: H = KAΔT/L
 *  4 substitute: 0.8×1.5×14 / (4×10⁻³)
 *  5 answer: 4200 W = 4.2 kW
 *  6 takeaway: double-glazing traps low-K air to cut the loss
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | pane x460..620 y110..190 + grid · inside st x440 bl150 ·
 *       outside st x640 bl150
 *  b2 | given mid x540 bl225
 *  b3 | formula mid x540 bl260
 *  b4 | substitution mid x540 bl292
 *  b5 | box x350..730 y320..362 · answer mid x540 bl347
 *  b6 | takeaway mid x540 bl390
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

export default function Ch10Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("worked example — heat lost through a windowpane", "worked example — windowpane se heat ka nuksaan")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={13} fill={INK} script anchor="middle">
          {t("a clean board numerical", "ek saaf board numerical")}
        </T>
      </Fade>

      {/* beat 1 — the pane */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M460 110 h160 v80 h-160 z" stroke={INK_LIGHT} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M540 110 v80 M460 150 h160" stroke={INK_LIGHT} sw={1.2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={440} y={150} size={12} fill={AMBER_DARK} anchor="end">{t("inside 22°C", "andar 22°C")}</T>
        <T x={640} y={150} size={12} fill={MUTED} anchor="start">{t("outside 8°C", "bahar 8°C")}</T>
      </Fade>

      {/* beat 2 — given */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={225} size={12} fill={INK} anchor="middle">
          A=1.5m², L=4×10⁻³m, ΔT=14K, K_glass=0.8
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={260} size={16} fill={INK} weight={700} anchor="middle">
          H = KAΔT⁄L
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={292} size={14} fill={INK} script anchor="middle">
          = 0.8×1.5×14 ⁄ (4×10⁻³)
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 320 h380 v42 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={347} size={16} fill={GREEN} weight={800} anchor="middle">
          = 4200 W = 4.2 kW
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={390} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "double-glazing traps a low-K air layer to cut the loss",
            "double-glazing low-K air ki layer trap karke nuksaan kam karti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
