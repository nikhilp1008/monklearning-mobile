/**
 * C11 Ch07 · Section 18 — Worked example (JEE Main): balance MnO₄⁻ + I⁻ in BASIC medium
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 13.99, 32.09, 56.92, 62.81, 73.05, 83.54, 96.51]):
 *  0 heading: ion-electron method, basic medium
 *  1 skeletal: MnO₄⁻ + I⁻ → MnO₂ + I₂
 *  2 label: reduction half (Mn: +7→+4, gains 3e⁻):
 *  3 reduction balanced: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻
 *  4 oxidation half + equalise: 2I⁻→I₂+2e⁻ · LCM 6: reduction×2, oxidation×3
 *  5 doubled reduction: 2MnO₄⁻ + 4H₂O + 6e⁻ → 2MnO₂ + 8OH⁻
 *  6 combined, boxed: 2MnO₄⁻ + 6I⁻ + 4H₂O → 2MnO₂ + 3I₂ + 8OH⁻
 *  7 red-margin charge check + lesson: MnO₄⁻ took only 3e⁻ here, not 5 — medium set the product
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)    | T mid | x540 bl100
 *  b1 | skeletal (sans19)       | T mid | x540 bl136
 *  b2 | label (sans17)          | T mid | x540 bl172
 *  b3 | reduction eqn (sans19)  | T mid | x540 bl208
 *  b4 | oxidation+equalise (sans15)| T mid | x540 bl244
 *  b5 | doubled reduction (sans18) | T mid | x540 bl280
 *  b6 | box x110..970 y306..352, combined eqn (sans19 800) bl334
 *  b7 | margin bar x64 y376..420, 2 lines (sans14/14) x80 bl398/422
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("the medium picks the product, the product picks the electrons", "medium product chunta hai, product electrons chunta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("ion-electron method, basic medium", "ion-electron method, basic medium")}
        </T>
      </Fade>

      {/* ===== beat 1 — skeletal ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={19} fill={INK} weight={700}>
          MnO₄⁻ + I⁻ → MnO₂ + I₂
        </T>
      </Fade>

      {/* ===== beat 2 — reduction half label ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={17} fill={INK}>
          {t("reduction half (Mn: +7 → +4, gains 3e⁻):", "reduction half (Mn: +7 → +4, 3e⁻ gain):")}
        </T>
      </Fade>

      {/* ===== beat 3 — reduction balanced ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={208} size={19} fill={INK} weight={700}>
          MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻
        </T>
      </Fade>

      {/* ===== beat 4 — oxidation half + equalise ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={244} size={15} fill={INK}>
          {t(
            "oxidation: 2I⁻ → I₂ + 2e⁻   ·   equalise (LCM 6): reduction ×2, oxidation ×3",
            "oxidation: 2I⁻ → I₂ + 2e⁻   ·   equalise (LCM 6): reduction ×2, oxidation ×3"
          )}
        </T>
      </Fade>

      {/* ===== beat 5 — doubled reduction ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={280} size={18} fill={INK} weight={700}>
          2MnO₄⁻ + 4H₂O + 6e⁻ → 2MnO₂ + 8OH⁻
        </T>
      </Fade>

      {/* ===== beat 6 — combined, boxed ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={110} y={306} width={860} height={46} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={334} size={19} fill={GREEN} weight={800}>
          2MnO₄⁻ + 6I⁻ + 4H₂O → 2MnO₂ + 3I₂ + 8OH⁻
        </T>
      </Fade>

      {/* ===== beat 7 — charge check + lesson ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 376 L 64 434" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={398} size={16} fill={RED} weight={700} anchor="start">
          {t("charge check: left −2 − 6 = −8   ·   right −8 ✓", "charge check: left −2 − 6 = −8   ·   right −8 ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={80} y={422} size={14} fill={RED} anchor="start">
          {t("MnO₄⁻ took only 3e⁻ here, not 5 — the medium set the product", "MnO₄⁻ ne yahan sirf 3e⁻ liye, 5 nahi — medium ne product set kiya")}
        </T>
      </Fade>
    </Scene>
  );
}
