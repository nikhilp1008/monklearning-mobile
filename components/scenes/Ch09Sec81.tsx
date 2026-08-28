/**
 * Ch09 · Section 81 — "Coalescing droplets heat up" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.68, 19.03, 25.69, 35.84, 48.64, 56.23, 67.67]):
 *  0 title (always-on)
 *  1 text: n droplets of radius r merge into one drop of radius R
 *  2 small droplet cluster → arrow → one big drop
 *  3 formula ΔE = 4πS(nr²−R²)
 *  4 text: set released energy equal to mass × specific heat × rise
 *  5 formula ΔT = 3S/ρc (1/r − 1/R)
 *  6 formula (green) ΔT ≈ 5.1×10⁻⁴ K
 *  7 red-margin note: tiny but real — smaller droplets give more heating
 *
 * Layout plan:
 *  b2 | small droplets ×4 (cream) | circle | c(390,240)/(430,215)/(470,250)/(415,280) r15
 *  b2 | arrow                     | Draw   | (500,250)→(600,250)
 *  b2 | big drop (cream)          | circle | c(700,250) r50
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (16, w700)        | T mid  | x540  bl 380
 *  b4 | text (13, script)         | T mid  | x540  bl 408
 *  b5 | formula (16, w700)        | T mid  | x540  bl 434
 *  b6 | formula (18, w800, grn)   | T mid  | x540  bl 462
 *  b7 | margin bar (red)          | Draw   | x460  y482..506
 *  b7 | note (script 14, red)     | T st   | x476.. bl 502
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec81({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Advanced: coalescence heating", "JEE Advanced: coalescence heating")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("n droplets of radius r merge into one drop of radius R", "n droplets radius r ke, ek drop radius R mein merge hote")}
        </T>
      </Fade>

      {/* beat 2 — droplets merge into one */}
      {[
        [390, 240],
        [430, 215],
        [470, 250],
        [415, 280],
      ].map(([x, y]) => (
        <Fade key={`${x}-${y}`} on={beat >= 2} delay={dl(2, 0.2)}>
          <Circle cx={x} cy={y} r={15} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Draw on={beat >= 2} d={arrowD(500, 250, 600, 250)} stroke={INK} sw={2.4} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Circle cx={700} cy={250} r={50} fill={CREAM} stroke={INK} strokeWidth={2.2} />
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={380} size={16} fill={INK} weight={700} anchor="middle">
          ΔE = 4πS(nr²−R²)
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={408} size={13} fill={MUTED} script anchor="middle">
          {t("set released energy = mass × specific heat × rise", "released energy = mass × specific heat × rise")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={434} size={16} fill={INK} weight={700} anchor="middle">
          ΔT = 3S/ρc · (1/r − 1/R)
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={462} size={18} fill={GREEN} weight={800} anchor="middle">
          ΔT ≈ 5.1×10⁻⁴ K
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 482 L 460 506" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={502} size={14} fill={RED} script anchor="start">
          {t("tiny but real — smaller droplets give more heating", "tiny par real — smaller droplets zyada heating dete")}
        </T>
      </Fade>
    </Scene>
  );
}
