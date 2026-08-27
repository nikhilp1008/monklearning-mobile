/**
 * C11 Ch07 · Section 19 — Worked example (JEE Advanced): P₄ + OH⁻ disproportionation
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 12.46, 23.21, 41.47, 58.79, 73.56, 87.13, 101.38]):
 *  0 heading: white phosphorus with hot NaOH — classify and balance
 *  1 skeletal: P₄ + OH⁻ → PH₃ + H₂PO₂⁻
 *  2 classify: P in P₄=0 → PH₃=−3(reduced) → H₂PO₂⁻=+1(oxidised) ⇒ disproportionation
 *  3 red-margin: reduction 3e⁻(0→−3) · oxidation 1e⁻(0→+1) → 1P reduced per 3P oxidised
 *  4 branching diagram: P₄ → reduction box (1P→PH₃) + oxidation box (3P→3H₂PO₂⁻)
 *  5 so of 4P: 1→PH₃, 3→H₂PO₂⁻. skeleton: P₄→PH₃+3H₂PO₂⁻
 *  6 full balanced: P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻
 *  7 check: O 3+3=6=6 ✓ · H 3+6=9=3+6=9 ✓ · charge −3=−3 ✓
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans17 700)   | T mid | x540 bl100
 *  b1 | skeletal (sans19)      | T mid | x540 bl136
 *  b2 | classify (sans15)      | T mid | x540 bl172
 *  b3 | margin bar x64 y196..230, text (sans15 red) x80 bl216
 *  b4 | P₄ box x70..170 y290..330; reduction box x260..560 y245..285;
 *     | oxidation box x260..560 y325..365; arrows P₄→each box
 *  b5 | line (sans16)          | T mid | x540 bl400
 *  b6 | full eqn (sans18)      | T mid | x540 bl436
 *  b7 | check line (sans15 grn)| T mid | x540 bl470
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch07Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("same element, opposite fates — that's disproportionation", "same element, do fate — yahi hai disproportionation")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("white phosphorus with hot NaOH — classify and balance", "white phosphorus + hot NaOH — classify aur balance karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — skeletal ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={19} fill={INK} weight={700}>
          P₄ + OH⁻ → PH₃ + H₂PO₂⁻
        </T>
      </Fade>

      {/* ===== beat 2 — classify ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={15} fill={INK}>
          {t(
            "P: 0 in P₄  →  −3 in PH₃ (reduced)  →  +1 in H₂PO₂⁻ (oxidised)",
            "P: 0 (P₄)  →  −3 PH₃ mein (reduced)  →  +1 H₂PO₂⁻ mein (oxidised)"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — electron bookkeeping ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 196 L 64 230" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={216} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "reduction: 3e⁻ (0→−3)  ·  oxidation: 1e⁻ (0→+1)  →  1P reduced per 3P oxidised",
            "reduction: 3e⁻ (0→−3)  ·  oxidation: 1e⁻ (0→+1)  →  1P reduce per 3P oxidise"
          )}
        </T>
      </Fade>

      {/* ===== beat 4 — branching diagram ===== */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 70 290 h 100 v 40 h -100 Z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={120} y={314} size={15} fill={INK} weight={700}>
          P₄ (0)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={bondD(170, 300, 260, 268)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={bondD(170, 320, 260, 348)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 260 245 h 300 v 40 h -300 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 260 325 h 300 v 40 h -300 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={410} y={268} size={13} fill={GREEN} weight={700}>
          {t("0 → −3, gains 3e⁻  ·  1P → PH₃", "0 → −3, 3e⁻ gain  ·  1P → PH₃")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={410} y={348} size={13} fill={RED} weight={700}>
          {t("0 → +1, loses 1e⁻ (×3)  ·  3P → 3H₂PO₂⁻", "0 → +1, 1e⁻ loss (×3)  ·  3P → 3H₂PO₂⁻")}
        </T>
      </Fade>

      {/* ===== beat 5 — the skeleton in P ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={400} size={16} fill={INK}>
          {t("of the 4 P: 1 → PH₃, 3 → H₂PO₂⁻   ·   skeleton: P₄ → PH₃ + 3H₂PO₂⁻", "4 P mein se: 1 → PH₃, 3 → H₂PO₂⁻   ·   skeleton: P₄ → PH₃ + 3H₂PO₂⁻")}
        </T>
      </Fade>

      {/* ===== beat 6 — full balanced ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={436} size={18} fill={INK} weight={700}>
          P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻
        </T>
      </Fade>

      {/* ===== beat 7 — final check ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={470} size={15} fill={GREEN} weight={700}>
          {t("O: 3+3=6=6 ✓   ·   H: 3+6=9=3+6=9 ✓   ·   charge: −3 = −3 ✓", "O: 3+3=6=6 ✓   ·   H: 3+6=9=3+6=9 ✓   ·   charge: −3 = −3 ✓")}
        </T>
      </Fade>
    </Scene>
  );
}
