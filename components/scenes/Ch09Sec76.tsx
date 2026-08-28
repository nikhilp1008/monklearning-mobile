/**
 * Ch09 · Section 76 — "Capillary rise: deriving Jurin's law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 4.44, 17.15, 25.0, 31.15, 39.59, 40.59, 41.59]):
 *  0 title (always-on)
 *  1 text: narrow tube in a wetting liquid; meniscus radius R = r/cosθ
 *  2 tube + meniscus + r label + θ + outer level (dashed) + h bracket
 *  3 text: outside, just below the flat surface, pressure is atmospheric
 *  4 text: liquid climbs until the raised column matches the deficit
 *  5 formula ρgh = 2S/R = 2Scosθ/r
 *  6 formula (green) h = 2Scosθ/rρg
 *  7 red-margin note: narrower tube, higher rise; mercury is depressed
 *
 * Layout plan:
 *  b2 | tube walls                | Draw  | x400..460  y170..380
 *  b2 | meniscus (concave)        | Draw   | (400,210) Q (430,225) (460,210)
 *  b2 | "r" bracket + label       | Draw+T | x400..460  y185 · bl 178
 *  b2 | "θ" (12)                  | T st   | x465  bl 216
 *  b2 | outer level (dashed)      | line   | x330..530  y320
 *  b2 | h bracket + label         | Draw+T | x370..375  y210..320 · bl 268
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 420
 *  b4 | text (13, script)         | T mid  | x540  bl 448
 *  b5 | formula (16, w700)        | T mid  | x540  bl 478
 *  b6 | formula (18, w800, grn)   | T mid  | x540  bl 506
 *  b7 | margin bar (red)          | Draw   | x460  y526..550
 *  b7 | note (script 14, red)     | T st   | x476.. bl 546
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("capillary rise: Jurin's law", "capillary rise: Jurin's law")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("narrow tube in a wetting liquid; R = r/cosθ", "narrow tube wetting liquid mein; R = r/cosθ")}
        </T>
      </Fade>

      {/* beat 2 — the geometry of the rise */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 400 170 V 380" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 460 170 V 380" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw on={beat >= 2} d="M 400 210 Q 430 225 460 210" stroke={INK} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Draw on={beat >= 2} d="M 400 185 H 460 M 400 180 V 190 M 460 180 V 190" stroke={INK} sw={1.2} dur={0.4} />
        <T x={430} y={178} size={11} fill={MUTED} anchor="middle">
          r
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={465} y={216} size={12} fill={INK} anchor="start">
          θ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <Line x1={330} y1={320} x2={530} y2={320} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Draw on={beat >= 2} d="M 370 210 H 375 M 370 320 H 375 M 372 210 V 320" stroke={INK} sw={1.3} dur={0.5} />
        <T x={360} y={268} size={12} fill={MUTED} anchor="end">
          h
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={420} size={13} fill={MUTED} script anchor="middle">
          {t("outside, just below the flat surface, pressure is atmospheric", "bahar, flat surface ke neeche, pressure atmospheric hai")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={448} size={13} fill={MUTED} script anchor="middle">
          {t("liquid climbs until the raised column matches the deficit", "liquid tab tak chadhta jab tak column deficit match kare")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={478} size={16} fill={INK} weight={700} anchor="middle">
          ρgh = 2S/R = 2Scosθ/r
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={506} size={18} fill={GREEN} weight={800} anchor="middle">
          h = 2Scosθ / rρg
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 526 L 460 550" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={546} size={14} fill={RED} script anchor="start">
          {t("narrower tube, higher rise; mercury is depressed", "narrow tube, zyada rise; mercury depressed hota")}
        </T>
      </Fade>
    </Scene>
  );
}
