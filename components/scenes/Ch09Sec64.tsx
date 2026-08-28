/**
 * Ch09 · Section 64 — "Capillary flow rate" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.86, 21.16, 24.66, 25.66, 26.66, 27.66]):
 *  0 title (always-on)
 *  1 text: length 0.20 m, radius 0.50 mm, ΔP = 1000 Pa, water
 *  2 tube + L bracket + r bracket (reuses sec58's tube geometry)
 *  3 formula Q = πΔPr⁴/8ηl
 *  4 formula r⁴ = (5.0×10⁻⁴)⁴ = 6.25×10⁻¹⁴ m⁴
 *  5 formula Q = π(10³)(6.25×10⁻¹⁴)/(1.6×10⁻³) ≈ 1.23×10⁻⁷
 *  6 red-margin note (green number): about 0.12 millilitres per second
 *
 * Layout plan:
 *  b2 | tube walls                | Draw  | x300..750  y270 / y310
 *  b2 | L bracket + label          | Draw+T | x300..750  y330 · bl 349
 *  b2 | r bracket + label          | Draw+T | x270..280  y270..310 · bl 294
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (17, w700)         | T mid  | x540  bl 400
 *  b4 | formula (15, w700)         | T mid  | x540  bl 430
 *  b5 | formula (14, w700)         | T mid  | x540  bl 458
 *  b6 | margin bar (red)           | Draw   | x460  y480..504
 *  b6 | note (script 15, green)    | T st   | x476.. bl 500
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("CBSE: capillary flow rate", "CBSE: capillary flow rate")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("length 0.20 m, radius 0.50 mm, ΔP = 1000 Pa, water", "length 0.20 m, radius 0.50 mm, ΔP = 1000 Pa, water")}
        </T>
      </Fade>

      {/* beat 2 — the tube */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 270 H 750" stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 300 310 H 750" stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Draw on={beat >= 2} d="M 300 330 V 335 M 750 330 V 335 M 300 333 H 750" stroke={INK} sw={1.4} dur={0.6} />
        <T x={525} y={349} size={12} fill={MUTED} anchor="middle">
          L
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Draw on={beat >= 2} d="M 270 270 H 275 M 270 310 H 275 M 272 270 V 310" stroke={INK} sw={1.4} dur={0.5} />
        <T x={260} y={294} size={12} fill={MUTED} anchor="end">
          r
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={17} fill={INK} weight={700} anchor="middle">
          Q = πΔPr⁴ / 8ηl
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={430} size={15} fill={INK} weight={700} anchor="middle">
          r⁴ = (5.0×10⁻⁴)⁴ = 6.25×10⁻¹⁴ m⁴
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={458} size={14} fill={INK} weight={700} anchor="middle">
          Q = π(10³)(6.25×10⁻¹⁴)/(1.6×10⁻³) ≈ 1.23×10⁻⁷
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 480 L 460 504" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={500} size={15} fill={GREEN} script anchor="start">
          {t("about 0.12 millilitres per second", "lagbhag 0.12 millilitres per second")}
        </T>
      </Fade>
    </Scene>
  );
}
