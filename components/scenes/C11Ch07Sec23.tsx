/**
 * C11 Ch07 · Section 23 — "Procedure A: solving a redox titration"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 5.12, 18.86, 37.97, 51.37, 71.17, 79.79, 90.88]):
 *  0 heading: solve a redox titration in four steps
 *  1 diagram (right column): burette (KMnO₄) → flask (oxalic acid + H₂SO₄), pink at endpoint
 *  2 step 1: n-factor from O.N. change in THAT medium
 *  3 red-margin step 2: meq_ox = meq_red → M₁n₁V₁ = M₂n₂V₂
 *  4 insight: e⁻ given = e⁻ taken at endpoint → match equivalents, not moles
 *  5 step 3: substitute 3 knowns, solve the 4th, same volume units
 *  6 step 4: sanity-check — higher n-factor → proportionally less volume
 *  7 closer: equivalents in = equivalents out (green)
 *  (everything stays)
 *
 * Layout plan — two columns: steps left (x64, anchor start), diagram right (x810..910).
 * Anek sans bl−0.78s..+0.31s; longer language counts.
 *  b0 | heading (sans18 700)   | T mid | x540 bl100
 *  b1 | burette x845..871 y100..180 (tip→192, drop@200); flask x810..910 y220..270;
 *     | labels bl92/285/300
 *  b2 | step1 (sans15)         | T st  | x64 bl140
 *  b3 | margin bar x64 y168..200, text (sans15 red) x80 bl188
 *  b4 | insight (sans13 muted) | T st  | x64 bl222
 *  b5 | step3 (sans15)         | T st  | x64 bl254
 *  b6 | step4 (sans15)         | T st  | x64 bl286
 *  b7 | closer (sans17 green)  | T st  | x64 bl326
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("match equivalents, never raw moles", "equivalents match karo, raw moles kabhi nahi")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("solve a redox titration in four steps", "redox titration char steps mein solve karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — titration diagram ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={858} y={88} size={13} fill={INK} weight={700}>
          KMnO₄
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 845 100 h 26 v 80 h -26 Z M 845 118 h 26 M 845 138 h 26 M 845 158 h 26" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 845 180 L 871 180 L 858 194 Z" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={858} cy={200} r={3} fill={RED} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 810 270 L 910 270 L 880 220 L 840 220 Z" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={858} y={287} size={12} fill={INK}>
          {t("oxalic acid", "oxalic acid")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={858} y={303} size={12} fill={RED} weight={700}>
          {t("pink at endpoint", "endpoint pe pink")}
        </T>
      </Fade>

      {/* ===== beat 2 — step 1 ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={64} y={140} size={15} fill={INK} anchor="start">
          {t(
            "1 · n-factor from the O.N. change in THAT medium (medium fixes product → fixes n)",
            "1 · n-factor us medium mein O.N. change se (medium product fix → n fix)"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — endpoint balance ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 168 L 64 200" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={188} size={15} fill={RED} weight={700} anchor="start">
          2 · meq(ox) = meq(red)  →  M₁n₁V₁ = M₂n₂V₂
        </T>
      </Fade>

      {/* ===== beat 4 — why equivalents ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={64} y={222} size={13} fill={MUTED} anchor="start">
          {t(
            "(e⁻ given = e⁻ taken at the endpoint → match equivalents, never raw moles)",
            "(endpoint pe e⁻ diye = e⁻ liye → equivalents match, raw moles kabhi nahi)"
          )}
        </T>
      </Fade>

      {/* ===== beat 5 — step 3 ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={254} size={15} fill={INK} anchor="start">
          {t("3 · substitute the 3 knowns, solve the 4th — same volume units", "3 · 3 knowns substitute, 4th solve — same volume units")}
        </T>
      </Fade>

      {/* ===== beat 6 — step 4 ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={64} y={286} size={15} fill={INK} anchor="start">
          {t("4 · sanity-check: higher n-factor → proportionally less volume", "4 · sanity-check: zyada n-factor → kam volume")}
        </T>
      </Fade>

      {/* ===== beat 7 — closer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={64} y={326} size={17} fill={GREEN} weight={700} anchor="start">
          {t("equivalents in = equivalents out — that's the whole game", "equivalents in = equivalents out — yahi pura game hai")}
        </T>
      </Fade>
    </Scene>
  );
}
