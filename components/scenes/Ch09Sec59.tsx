/**
 * Ch09 · Section 59 — "Why radius to the fourth"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 10.42, 15.71, 23.22]):
 *  0 title (always-on)
 *  1 text: a wider tube has more area, one factor of r²
 *  2 cross-section circle (area) + parabolic velocity-profile arrows
 *  3 text: the core is far from the sticky walls, so it moves faster
 *  4 text: that average-speed boost gives another factor of r²
 *  5 formula (green) r² × r² = r⁴
 *  6 red-margin note: area times average speed gives radius to the fourth
 *
 * Layout plan:
 *  b2 | cross-section circle       | circle | c(280,280) r70
 *  b2 | "area = πr²" (12)          | T mid  | x280  bl 370
 *  b2 | tube walls                 | Draw   | x520..820  y220 / y340
 *  b2 | velocity arrows ×5          | Draw   | x560  y230/255/280/305/330
 *  b2 | "faster core" (12)         | T mid  | x670  bl 370
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | text (13, script)          | T mid  | x540  bl 405
 *  b4 | text (13, script)          | T mid  | x540  bl 433
 *  b5 | formula (20, w800, grn)    | T mid  | x540  bl 468
 *  b6 | margin bar (red)           | Draw   | x460  y490..514
 *  b6 | note (script 14, red)      | T st   | x476.. bl 510
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("why radius to the fourth", "radius fourth power kyun")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("a wider tube has more area — one factor of r²", "wide tube mein zyada area — ek factor r² ka")}
        </T>
      </Fade>

      {/* beat 2 — area and speed profile */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={280} r={70} fill="none" stroke={INK} strokeWidth={2.4} />
        <T x={280} y={370} size={12} fill={MUTED} anchor="middle">
          {t("area = πr²", "area = πr²")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 520 220 H 820" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 520 340 H 820" stroke={INK} sw={2.2} dur={0.6} />
      {[
        [230, 10],
        [255, 60],
        [280, 90],
        [305, 60],
        [330, 10],
      ].map(([y, len], i) => (
        <Fade key={y} on={beat >= 2} delay={dl(2, 1.9 + i * 0.3)}>
          <Draw on={beat >= 2} d={arrowD(560, y, 560 + len, y)} stroke={INK} sw={2} dur={0.4} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={670} y={370} size={12} fill={MUTED} anchor="middle">
          {t("faster core, slow near walls", "core faster, walls ke paas slow")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={405} size={13} fill={MUTED} script anchor="middle">
          {t("the core is far from the sticky walls, so it moves faster", "core sticky walls se door hai, isliye faster move karta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={433} size={13} fill={MUTED} script anchor="middle">
          {t("that average-speed boost gives another factor of r²", "average-speed boost ek aur r² factor deta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={468} size={20} fill={GREEN} weight={800} anchor="middle">
          r² × r² = r⁴
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 490 L 460 514" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={510} size={14} fill={RED} script anchor="start">
          {t("area times average speed gives radius to the fourth", "area times average speed — radius ki fourth power")}
        </T>
      </Fade>
    </Scene>
  );
}
