/**
 * Ch09 · Section 66 — "Tubes in series: where the pressure drops" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 8.96, 19.54, 29.35, 39.0, 49.92, 50.92]):
 *  0 title (always-on)
 *  1 text: narrow tube (r) then wide tube (2r), same length, in series
 *  2 narrow tube + wide tube joined, labelled r / 2r
 *  3 formula R2 = R1/16,  Req = R1+R2 = (17/16)R1
 *  4 formula Q = ΔP/Req = 2πr⁴ΔP/17ηl
 *  5 formula (green) ΔP1 = QR1 = (16/17)ΔP ≈ 0.94ΔP
 *  6 red-margin note: almost all the drop falls across the narrow tube
 *
 * Layout plan:
 *  b2 | narrow tube (r)           | Draw  | x200..400  y270..310
 *  b2 | "r" (13)                  | T mid  | x300  bl 330
 *  b2 | wide tube (2r)            | Draw   | x400..650  y255..325
 *  b2 | "2r" (13)                 | T mid  | x525  bl 345
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (15, w700)        | T mid  | x540  bl 400
 *  b4 | formula (15, w700)        | T mid  | x540  bl 430
 *  b5 | formula (17, w800, grn)   | T mid  | x540  bl 462
 *  b6 | margin bar (red)          | Draw   | x460  y482..506
 *  b6 | note (script 14, red)     | T st   | x476.. bl 502
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Main: tubes in series", "JEE Main: tubes in series")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("narrow tube (r), then wide tube (2r), same length, in series", "narrow tube (r), phir wide tube (2r), same length, series mein")}
        </T>
      </Fade>

      {/* beat 2 — narrow then wide, joined */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 200 270 H 400" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 200 310 H 400" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={300} y={330} size={13} fill={MUTED} anchor="middle">
          r
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 400 255 H 650" stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 400 325 H 650" stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={525} y={345} size={13} fill={MUTED} anchor="middle">
          2r
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={15} fill={INK} weight={700} anchor="middle">
          R₂ = R₁/16,  R<TSpan fontSize={10} dy={4}>eq</TSpan>
          <TSpan dy={-4}> = R₁+R₂ = (17/16)R₁</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={430} size={15} fill={INK} weight={700} anchor="middle">
          Q = ΔP/R<TSpan fontSize={10} dy={4}>eq</TSpan>
          <TSpan dy={-4}> = 2πr⁴ΔP / 17ηl</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={462} size={17} fill={GREEN} weight={800} anchor="middle">
          ΔP₁ = QR₁ = (16/17)ΔP ≈ 0.94ΔP
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 482 L 460 506" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={502} size={14} fill={RED} script anchor="start">
          {t("almost all the drop falls across the narrow tube", "almost pura drop narrow tube ke across hota")}
        </T>
      </Fade>
    </Scene>
  );
}
