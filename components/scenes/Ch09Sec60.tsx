/**
 * Ch09 · Section 60 — "The parabolic velocity profile"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.14, 12.63, 13.63, 14.63, 15.63, 16.63]):
 *  0 title (always-on)
 *  1 text: the fluid at the wall is stuck — the no-slip condition
 *  2 tube + 5 parabolic-profile arrows + "v_max" label
 *  3 text: speed rises from zero at the wall to a maximum at the axis
 *  4 text: plotted across the tube, it traces a bullet-shaped parabola
 *  5 red-margin note: the average speed is exactly half the maximum
 *  6 text (green): this half-average is used in every flow-rate calculation
 *
 * Layout plan:
 *  b2 | tube walls                | Draw  | x300..750  y220 / y380
 *  b2 | profile arrows ×5          | Draw   | x350  y240/275/300/325/360
 *  b2 | "v_max" (13)               | T st   | x465  bl 304
 *  b2 | v_avg dashed line + label  | Draw+T | x405  y220..380 · bl 400
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (13, script)          | T mid  | x540  bl 425
 *  b4 | text (13, script)          | T mid  | x540  bl 453
 *  b5 | margin bar (red)           | Draw   | x460  y472..496
 *  b5 | note (script 14, red)      | T st   | x476.. bl 492
 *  b6 | text (14, script, grn)     | T mid  | x540  bl 520
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("the parabolic velocity profile", "parabolic velocity profile")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("the fluid at the wall is stuck — the no-slip condition", "wall pe fluid stuck hota — no-slip condition")}
        </T>
      </Fade>

      {/* beat 2 — the profile */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 300 220 H 750" stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 300 380 H 750" stroke={INK} sw={2.4} dur={0.7} />
      {[
        [240, 15],
        [275, 70],
        [300, 110],
        [325, 70],
        [360, 15],
      ].map(([y, len], i) => (
        <Fade key={y} on={beat >= 2} delay={dl(2, 1.3 + i * 0.3)}>
          <Draw on={beat >= 2} d={arrowD(350, y, 350 + len, y)} stroke={INK} sw={2} dur={0.4} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={465} y={304} size={13} fill={INK} anchor="start">
          v_max
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Line x1={405} y1={220} x2={405} y2={380} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
        <T x={405} y={400} size={12} fill={MUTED} anchor="middle">
          v_avg = v_max/2
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={425} size={13} fill={MUTED} script anchor="middle">
          {t("speed rises from zero at the wall to a maximum at the axis", "speed wall pe zero se axis pe maximum tak badhta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={453} size={13} fill={MUTED} script anchor="middle">
          {t("plotted across the tube, it traces a bullet-shaped parabola", "tube ke across plot karo, bullet-shaped parabola bante")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 472 L 460 496" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={492} size={14} fill={RED} script anchor="start">
          {t("the average speed is exactly half the maximum", "average speed exactly maximum ka half hota")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={520} size={14} fill={GREEN} script anchor="middle">
          {t("this half-average is used in every flow-rate calculation", "yeh half-average har flow-rate calculation mein use hota")}
        </T>
      </Fade>
    </Scene>
  );
}
