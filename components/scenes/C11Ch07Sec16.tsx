/**
 * C11 Ch07 · Section 16 — Worked example (CBSE): balance Cr₂O₇²⁻ + Sn²⁺ in acid
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 11.35, 20.74, 26.45, 48.9, 55.55, 68.44, 82.52]):
 *  0 heading: ion-electron method, acidic medium
 *  1 skeletal: Cr₂O₇²⁻ + Sn²⁺ → Cr³⁺ + Sn⁴⁺
 *  2 label: reduction half (Cr: +6 → +3):
 *  3 reduction balanced: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O
 *  4 oxidation half: Sn²⁺ → Sn⁴⁺ + 2e⁻
 *  5 red-margin: equalise e⁻ — LCM(6,2)=6 → ×3 the oxidation half
 *  6 combined, boxed: Cr₂O₇²⁻ + 14H⁺ + 3Sn²⁺ → 2Cr³⁺ + 7H₂O + 3Sn⁴⁺
 *  7 charge check: left −2+14+6=+18; right +6+12=+18 ✓ atoms balance ✓
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)    | T mid | x540 bl100
 *  b1 | skeletal (sans20)       | T mid | x540 bl136
 *  b2 | label (sans17)          | T mid | x540 bl172
 *  b3 | reduction eqn (sans19)  | T mid | x540 bl206
 *  b4 | oxidation half (sans17) | T mid | x540 bl240
 *  b5 | margin bar x64 y262..302, text (sans16 red) x80 bl284
 *  b6 | box x140..940 y314..360, combined eqn (sans20 800) bl342
 *  b7 | 2 lines (sans16) x540 bl376/410
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

export default function C11Ch07Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("add the halves, cancel the electrons, check the charge", "halves add karo, electrons cancel, charge check karo")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("ion-electron method, acidic medium", "ion-electron method, acidic medium")}
        </T>
      </Fade>

      {/* ===== beat 1 — skeletal equation ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={20} fill={INK} weight={700}>
          Cr₂O₇²⁻ + Sn²⁺ → Cr³⁺ + Sn⁴⁺
        </T>
      </Fade>

      {/* ===== beat 2 — reduction half label ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={17} fill={INK}>
          {t("reduction half (Cr: +6 → +3):", "reduction half (Cr: +6 → +3):")}
        </T>
      </Fade>

      {/* ===== beat 3 — reduction half balanced ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={206} size={19} fill={INK} weight={700}>
          Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O
        </T>
      </Fade>

      {/* ===== beat 4 — oxidation half ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={240} size={17} fill={INK}>
          {t("oxidation half (Sn: +2 → +4): ", "oxidation half (Sn: +2 → +4): ")}Sn²⁺ → Sn⁴⁺ + 2e⁻
        </T>
      </Fade>

      {/* ===== beat 5 — equalise electrons ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 64 262 L 64 302" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={284} size={16} fill={RED} weight={700} anchor="start">
          {t("equalise e⁻: LCM(6, 2) = 6 → multiply oxidation half by 3", "e⁻ equalise: LCM(6, 2) = 6 → oxidation half ko 3 se multiply")}
        </T>
      </Fade>

      {/* ===== beat 6 — combined, boxed ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={130} y={314} width={820} height={46} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={342} size={19} fill={GREEN} weight={800}>
          Cr₂O₇²⁻ + 14H⁺ + 3Sn²⁺ → 2Cr³⁺ + 7H₂O + 3Sn⁴⁺
        </T>
      </Fade>

      {/* ===== beat 7 — charge check ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={376} size={16} fill={INK}>
          {t("left: −2 + 14 + 6 = +18", "left: −2 + 14 + 6 = +18")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={410} size={16} fill={GREEN} weight={700}>
          {t("right: +6 + 12 = +18 ✓  —  atoms balance ✓", "right: +6 + 12 = +18 ✓  —  atoms balance ✓")}
        </T>
      </Fade>
    </Scene>
  );
}
