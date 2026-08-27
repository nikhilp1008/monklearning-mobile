/**
 * C11 Ch01 · Section 48 — "Worked examples: mass-to-mass and limiting reagent"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,16.04,27.82,43.27,62.55,78.34,89.18]):
 *  0 Example 1 (CBSE) given: CaCO₃ (Ca40,C12,O16), 50g decomposed → CO₂?
 *  1 molar mass CaCO₃=100g/mol → 50g = 0.50 mol
 *  2 1:1 ratio → 0.50 mol CO₂ × 44 = 22g
 *  (example 1 fully fades at beat 3, freeing the board for example 2)
 *  3 Example 2 (NEET speed trap) given: 2mol H₂+1.5mol O₂→2H₂O — LR? water?
 *  4 ÷ by coefficient: H₂=2/2=1, O₂=1.5/1=1.5 → smallest=H₂ is limiting
 *  5 water fixed by H₂: 2 mol H₂ → 2 mol H₂O (2:2 ratio)
 *  6 the trap: comparing raw moles — always ÷ by coefficient first
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | given (script12 ink)         | T mid | x540  y88  [fade@b3]
 *  b1 | l (13 bold ink)              | T mid | x540  y113 [fade@b3]
 *  b2 | l (13 bold green)            | T mid | x540  y138 [fade@b3]
 *  b3 | given 2 (script12 ink)       | T mid | x540  y88  (same slot)
 *  b4 | l (script12 ink)             | T mid | x540  y118
 *  b5 | l (13 bold green)            | T mid | x540  y146
 *  b6 | l1 (script12 red)            | T mid | x540  y174
 *  b6 | l2 (script12 green)          | T mid | x540  y199
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("worked examples: mass-to-mass and limiting reagent", "worked examples: mass-to-mass aur limiting reagent")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given (CBSE); fully fades at beat 3 */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 1 (CBSE): CaCO₃ (Ca=40,C=12,O=16), 50g fully decomposed. Mass of CO₂?",
            "Example 1 (CBSE): CaCO₃ (Ca=40,C=12,O=16), 50g poora decompose. CO₂ ka mass?"
          )}
        </T>
      </Fade>

      {/* beat 1 — molar mass and moles */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} weight={700} script={false}>
          M(CaCO₃) = 40+12+48 = 100 g/mol → 50g = 0.50 mol
        </T>
      </Fade>

      {/* beat 2 — ratio and answer */}
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.4)}>
        <T x={540} y={138} size={13} fill={GREEN} weight={700} script={false}>
          1:1 ratio → 0.50 mol CO₂ × 44 = 22g
        </T>
      </Fade>

      {/* beat 3 — Example 2 given (NEET speed trap), same slot as beat 0 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={88} size={12} fill={INK} script>
          {t(
            "Example 2 (NEET speed trap): 2 mol H₂ + 1.5 mol O₂ → 2H₂O. Limiting? Moles of water?",
            "Example 2 (NEET speed trap): 2 mol H₂ + 1.5 mol O₂ → 2H₂O. Limiting? Kitna paani?"
          )}
        </T>
      </Fade>

      {/* beat 4 — divide by coefficient */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={118} size={12} fill={INK} script>
          {t(
            "÷ by coefficient: H₂=2/2=1 · O₂=1.5/1=1.5 → smallest = H₂ is LIMITING",
            "coefficient se ÷: H₂=2/2=1 · O₂=1.5/1=1.5 → sabse chhota = H₂ LIMITING hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — water fixed by H2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={146} size={13} fill={GREEN} weight={700} script={false}>
          2 mol H₂ → 2 mol H₂O (2:2 {t("ratio", "ratio")})
        </T>
      </Fade>

      {/* beat 6 — the trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={174} size={12} fill={RED} script>
          {t(
            "the trap: H₂(2) > O₂(1.5) LOOKS like O₂ is limiting — comparing raw moles is WRONG",
            "trap: H₂(2) > O₂(1.5) dekhkar lagta O₂ limiting hai — raw moles compare karna GALAT hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={199} size={12} fill={GREEN} script>
          {t("always ÷ by the COEFFICIENT first — every single time", "hamesha pehle COEFFICIENT se ÷ karo — har baar")}
        </T>
      </Fade>
    </Scene>
  );
}
