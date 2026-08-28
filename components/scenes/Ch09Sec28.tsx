/**
 * Ch09 · Section 28 — "Deriving the paraboloid surface"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 13.8, 21.91, 28.31, 39.83, 48.36, 58.17]):
 *  0 title (always-on)
 *  1 text: take a surface element at radius r; needs centripetal force
 *  2 container + axis + paraboloid + radius bracket "r" + growing dP/dr arrows
 *  3 formula dP/dr = ρω²r
 *  4 text: along the surface the pressure stays constant
 *  5 formula dy/dr = ω²r/g
 *  6 formula (green) y(r) = ω²r²/2g
 *  7 red-margin note: integrating a linear gradient gives a parabola
 *
 * Layout plan:
 *  b2 | axis (dashed)             | line  | x500  y180..420
 *  b2 | container walls            | Draw   | x300..700  y200..420
 *  b2 | paraboloid surface         | Draw   | (300,260) Q (500,380) (700,260)
 *  b2 | r bracket + label          | Draw+T | x500..620  y400 · "r" x560 bl 415
 *  b2 | dP/dr arrows ×3 (growing)  | Draw   | x520/580/640  y400→385/375/365
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (17, w700)         | T mid  | x540  bl 445
 *  b4 | text (14, script)          | T mid  | x540  bl 477
 *  b5 | formula (16, w700)         | T mid  | x540  bl 507
 *  b6 | formula (18, w800, grn)    | T mid  | x540  bl 539
 *  b7 | margin bar (red)           | Draw   | x460  y556..580
 *  b7 | note (script 14, red)      | T st   | x476.. bl 576
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("deriving the paraboloid surface", "paraboloid surface derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("take a surface element at radius r", "radius r pe ek surface element lo")}
        </T>
      </Fade>

      {/* beat 2 — the spinning container, radius, and growing gradient */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Line x1={500} y1={180} x2={500} y2={420} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 300 200 V 420 H 700 V 200" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Draw on={beat >= 2} d="M 300 260 Q 500 380 700 260" stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <Draw on={beat >= 2} d="M 500 395 V 405 M 620 395 V 405 M 500 400 H 620" stroke={INK} sw={1.4} dur={0.5} />
        <T x={560} y={415} size={12} fill={INK} anchor="middle">
          r
        </T>
      </Fade>
      {[
        [520, 15],
        [580, 25],
        [640, 35],
      ].map(([x, len], i) => (
        <Fade key={x} on={beat >= 2} delay={dl(2, 3.3 + i * 0.4)}>
          <Line x1={x} y1={400} x2={x} y2={400 - len} stroke={INK} strokeWidth={1.8} />
        </Fade>
      ))}

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={445} size={17} fill={INK} weight={700} anchor="middle">
          dP/dr = ρω²r
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={477} size={14} fill={MUTED} script anchor="middle">
          {t("along the surface, pressure stays constant", "surface ke saath, pressure constant rehta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={507} size={16} fill={INK} weight={700} anchor="middle">
          dy/dr = ω²r / g
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={539} size={18} fill={GREEN} weight={800} anchor="middle">
          y(r) = ω²r² / 2g
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 556 L 460 580" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={576} size={14} fill={RED} script anchor="start">
          {t("integrating a linear gradient gives a parabola", "linear gradient integrate karo — parabola milta")}
        </T>
      </Fade>
    </Scene>
  );
}
