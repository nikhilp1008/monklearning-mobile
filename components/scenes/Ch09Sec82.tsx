/**
 * Ch09 · Section 82 — "A capillary tube cut too short" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.94, 17.66, 22.27, 32.43, 45.65, 46.65]):
 *  0 title (always-on)
 *  1 text: water would rise 8.0 cm; only 5.0 cm of tube projects
 *  2 short tube + flat meniscus + dashed "natural" level above
 *  3 red-margin note: the product (rise)×(meniscus radius) is fixed
 *  4 text: if the length is less than the natural rise, the meniscus flattens
 *  5 formula (green) R′ = r×(8.0/5.0) = 1.6r
 *  6 red-margin note: water rises to the top and stops — no overflow
 *
 * Layout plan:
 *  b2 | tube walls (short)        | Draw  | x400..440  y250..400
 *  b2 | flat meniscus             | Draw   | (400,252) Q (420,256) (440,252)
 *  b2 | dashed natural level      | line   | x390..450  y220
 *  b2 | dashed extension          | line   | x420  y220..250
 *  b2 | "5.0 cm tube" / "8.0 cm"  | T      | x460 bl 330 / x460 bl 220
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | margin bar (red)          | Draw   | x460  y438..462
 *  b3 | note (script 14, red)     | T st   | x476.. bl 458
 *  b4 | text (13, script)         | T mid  | x540  bl 488
 *  b5 | formula (18, w800, grn)   | T mid  | x540  bl 516
 *  b6 | margin bar (red)          | Draw   | x460  y536..560
 *  b6 | note (script 14, red)     | T st   | x476.. bl 556
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec82({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Main: a tube too short", "JEE Main: a tube too short")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("water would rise 8.0 cm; only 5.0 cm of tube projects", "water 8.0 cm rise karta; sirf 5.0 cm tube projects hota")}
        </T>
      </Fade>

      {/* beat 2 — the flattened meniscus */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 400 250 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 440 250 V 400" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 400 252 Q 420 256 440 252" stroke={INK} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Line x1={390} y1={220} x2={450} y2={220} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 4" />
        <Line x1={420} y1={220} x2={420} y2={250} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 3" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={465} y={330} size={12} fill={MUTED} anchor="start">
          {t("5.0 cm tube", "5.0 cm tube")}
        </T>
        <T x={465} y={220} size={12} fill={MUTED} anchor="start">
          {t("8.0 cm (natural)", "8.0 cm (natural)")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 438 L 460 462" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={458} size={14} fill={RED} script anchor="start">
          {t("(rise) × (meniscus radius) is fixed", "(rise) × (meniscus radius) fixed hota")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={488} size={13} fill={MUTED} script anchor="middle">
          {t("if length < natural rise, the meniscus flattens", "agar length < natural rise, meniscus flatten hota")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={516} size={18} fill={GREEN} weight={800} anchor="middle">
          R′ = r×(8.0/5.0) = 1.6r
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 536 L 460 560" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={556} size={14} fill={RED} script anchor="start">
          {t("water rises to the top and stops — no overflow", "water top tak rises hota aur ruk jaata — overflow nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
