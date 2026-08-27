/**
 * M11 Ch07 · Section 6 — "Expanding a binomial, and the perfect-square trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type = worked_examples (two examples).
 *
 * Beats (en [0, 9.22, 25.77, 40.79, 54.11, 71.86, 82.52, 93.53]) — 8 board_content
 * items map 1:1 to reveal indices 0..7 (no separate always-on "beat -1" item
 * here, unlike sections 1-5 where seq1 doubled as the title):
 *  0 Example 1 [CBSE] label — expand (2x+3)⁴
 *  1 setup: a=2x, b=3, n=4 → row 4 coefficients
 *  2 the full expansion with binomial coefficients (numeric, non-script)
 *  3 simplified numeric answer, boxed (HIGH)
 *  4 red-margin sanity check: x=1 both sides = 625, checkmark
 *  5 Example 2 [JEE Main] label — terms in (1+2x+x²)¹⁰
 *  6 the trap: crossed-out "trinomial → 66 terms" wrong reasoning
 *  7 the correct insight: perfect square ⇒ 21 terms, boxed (HIGH)
 * (section title above is invented from the section's own metadata title,
 * always-on, separate from the beat-gated content.)
 *
 * Layout plan (Anek bl−0.78s..+0.31s / Kalam bl−1.3s..+0.5s):
 *  b0 | label NON-SCRIPT15 x150 bl95
 *  b1 | line script16 x150 bl130
 *  b2 | line NON-SCRIPT14 x150 bl165
 *  b3 | line NON-SCRIPT20 x150 bl210 (boxed x135..655 y188..228)
 *  b4 | red bar x120 y245..285 · text NON-SCRIPT14 x140 bl268 · checkD x500 y264
 *  b5 | label NON-SCRIPT15 x150 bl350
 *  b6 | line script16 RED x150 bl390 · crossD x148 y368 w296 h32
 *  b7 | line1 NON-SCRIPT16 x150 bl445 · line2 NON-SCRIPT17 x150 bl478 (boxed x135..655 y458..498)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch07Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={INK} script>
          {t("expanding a binomial, and the perfect-square trap", "binomial expand karo, aur perfect-square trap")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={95} size={15} fill={AMBER_DARK} anchor="start">
          Example 1 [CBSE] — expand (2x+3)⁴
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={130} size={16} fill={INK} script anchor="start">
          {t("a = 2x, b = 3, n = 4  →  row 4: 1, 4, 6, 4, 1", "a = 2x, b = 3, n = 4  →  row 4: 1, 4, 6, 4, 1")}
        </T>
      </Fade>

      {/* beat 2 — the full expansion, numeric coefficients */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={165} size={14} fill={INK} anchor="start">
          ⁴C₀(2x)⁴ + ⁴C₁(2x)³(3) + ⁴C₂(2x)²(3)² + ⁴C₃(2x)(3)³ + ⁴C₄(3)⁴
        </T>
      </Fade>

      {/* beat 3 — simplified answer, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={210} size={20} fill={AMBER_DARK} anchor="start">
          = 16x⁴ + 96x³ + 216x² + 216x + 81
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={roundRectD(135, 188, 520, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 4 — sanity check, red-margin */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 120 245 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={140} y={268} size={14} fill={RED} anchor="start">
          {t("check x=1: LHS = 5⁴ = 625, RHS = 16+96+216+216+81 = 625", "check x=1: LHS = 5⁴ = 625, RHS = 16+96+216+216+81 = 625")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={checkD(755, 264, 18)} stroke={GREEN_DARK} sw={2.4} dur={0.5} />

      {/* beat 5 — Example 2 label */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={350} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — terms in (1+2x+x²)¹⁰
        </T>
      </Fade>

      {/* beat 6 — the trap: crossed-out wrong reasoning */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={390} size={16} fill={RED} script anchor="start">
          {t("trinomial? → C(12,2) = 66 terms", "trinomial? → C(12,2) = 66 terms")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={crossD(148, 368, 296, 32)} stroke={RED} sw={2.6} dur={0.6} />

      {/* beat 7 — the correct insight, boxed payoff */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={150} y={445} size={16} fill={GREEN_DARK} anchor="start">
          1+2x+x² = (1+x)²
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={150} y={478} size={17} fill={AMBER_DARK} anchor="start">
          ⇒ (1+2x+x²)¹⁰ = (1+x)²⁰ ⇒ 21 terms
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.3)} d={roundRectD(135, 458, 520, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />
    </Scene>
  );
}
