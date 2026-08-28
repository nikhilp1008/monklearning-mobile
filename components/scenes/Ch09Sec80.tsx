/**
 * Ch09 · Section 80 — "Capillary rise and the Jurin scaling" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 12.68, 20.79]):
 *  0 title (always-on)
 *  1 text: tube radius 0.25 mm in water; S = 0.072, angle 0
 *  2 tube + meniscus + r label
 *  3 formula h = 2×0.072/(2.5×10⁻⁴×1000×10)
 *  4 formula (green) h = 0.0576 m = 5.76 cm
 *  5 text: (b) by Jurin, h ∝ 1/r — half the radius doubles the rise
 *  6 formula (green) h′ = 2×5.76 = 11.52 cm
 *  7 red-margin note: the scaling does the work — no need to recompute
 *
 * Layout plan:
 *  b2 | tube walls                | Draw  | x400..440  y200..400
 *  b2 | meniscus (concave)        | Draw   | (400,250) Q (420,262) (440,250)
 *  b2 | "r = 0.25 mm" (13)        | T st   | x455  bl 255
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (16, w700)        | T mid  | x540  bl 430
 *  b4 | formula (17, w800, grn)   | T mid  | x540  bl 458
 *  b5 | text (13, script)         | T mid  | x540  bl 484
 *  b6 | formula (17, w800, grn)   | T mid  | x540  bl 512
 *  b7 | margin bar (red)          | Draw   | x460  y532..556
 *  b7 | note (script 13, red)     | T st   | x476.. bl 552
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec80({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("JEE Main: capillary rise and scaling", "JEE Main: capillary rise and scaling")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("tube radius 0.25 mm in water; S = 0.072, angle 0", "tube radius 0.25 mm water mein; S = 0.072, angle 0")}
        </T>
      </Fade>

      {/* beat 2 — the tube */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 400 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 440 200 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 400 250 Q 420 262 440 250" stroke={INK} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={455} y={255} size={13} fill={MUTED} anchor="start">
          r = 0.25 mm
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={430} size={16} fill={INK} weight={700} anchor="middle">
          h = 2×0.072 / (2.5×10⁻⁴×1000×10)
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={458} size={17} fill={GREEN} weight={800} anchor="middle">
          h = 0.0576 m = 5.76 cm
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={484} size={13} fill={MUTED} script anchor="middle">
          {t("(b) by Jurin, h ∝ 1/r — half the radius doubles the rise", "(b) Jurin ke hisaab se, h ∝ 1/r — half radius se rise double")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={512} size={17} fill={GREEN} weight={800} anchor="middle">
          h′ = 2×5.76 = 11.52 cm
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 532 L 460 556" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={552} size={13} fill={RED} script anchor="start">
          {t("the scaling does the work — no need to recompute", "scaling hi kaam karti — recompute karne ki zaroorat nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
