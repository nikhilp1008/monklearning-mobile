/**
 * C11 Ch07 · Section 38 — Worked example (CBSE): classify three reactions
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 12.03, 20.22, 38.06, 44.71, 59.65, 65.28, 78.85]):
 *  0 heading: classify each; state whether it is redox
 *  1 (i) 2KClO₃ --Δ--> 2KCl + 3O₂
 *  2 (i) analysis: Cl +5→−1(reduced), O −2→0(oxidised) → decomposition redox
 *  3 (ii) CaO + CO₂ → CaCO₃
 *  4 (ii) analysis: Ca/C/O all unchanged → combination, NOT redox
 *  5 (iii) Fe + CuSO₄ → FeSO₄ + Cu
 *  6 (iii) analysis: Fe 0→+2(oxidised), Cu +2→0(reduced) → metal-displacement redox
 *  7 red-margin answer: (i) decomposition(redox) · (ii) combination(NOT redox) · (iii) displacement(redox)
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | eqn (sans17)   | T mid | x540 bl134
 *  b2 | analysis (sans14) | T mid | x540 bl162
 *  b3 | eqn (sans17)   | T mid | x540 bl198
 *  b4 | analysis (sans14) | T mid | x540 bl226
 *  b5 | eqn (sans17)   | T mid | x540 bl262
 *  b6 | analysis (sans14) | T mid | x540 bl290
 *  b7 | margin bar x64 y320..356, text (sans14 red) x80 bl338
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
  MUTED,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("assign O.N. first, every single time", "sabse pehle O.N. do, har baar")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("classify each; state whether it is redox", "har ek classify karo; batao redox hai ya nahi")}
        </T>
      </Fade>

      {/* ===== (i) decomposition ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={17} fill={INK} weight={700}>
          (i)  2KClO₃ → 2KCl + 3O₂   (Δ)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={162} size={14} fill={MUTED}>
          {t(
            "Cl: +5→−1 (reduced) · O: −2→0 (oxidised) → DECOMPOSITION REDOX",
            "Cl: +5→−1 (reduced) · O: −2→0 (oxidised) → DECOMPOSITION REDOX"
          )}
        </T>
      </Fade>

      {/* ===== (ii) combination, non-redox ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={198} size={17} fill={INK} weight={700}>
          (ii)  CaO + CO₂ → CaCO₃
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={226} size={14} fill={MUTED}>
          {t(
            "Ca +2, C +4, O −2 — all unchanged → combination, NOT redox",
            "Ca +2, C +4, O −2 — sab same → combination, redox NAHI"
          )}
        </T>
      </Fade>

      {/* ===== (iii) metal displacement ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={262} size={17} fill={INK} weight={700}>
          (iii)  Fe + CuSO₄ → FeSO₄ + Cu
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={290} size={14} fill={MUTED}>
          {t(
            "Fe: 0→+2 (oxidised) · Cu: +2→0 (reduced) → METAL-DISPLACEMENT REDOX",
            "Fe: 0→+2 (oxidised) · Cu: +2→0 (reduced) → METAL-DISPLACEMENT REDOX"
          )}
        </T>
      </Fade>

      {/* ===== beat 7 — answer ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 320 L 64 356" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={338} size={14} fill={RED} weight={700} anchor="start">
          {t(
            "(i) decomposition (redox) · (ii) combination (NOT redox) · (iii) displacement (redox)",
            "(i) decomposition (redox) · (ii) combination (redox NAHI) · (iii) displacement (redox)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
