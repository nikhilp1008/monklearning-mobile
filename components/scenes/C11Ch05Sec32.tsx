/**
 * C11 Chemistry Ch05 · Section 32 — "Adiabatic expansion and the Poisson
 * relation" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,13.14,28.76,49.66,65.11,78.17,98.39,111.19]):
 *  0 Example 3 heading (JEE Main: adiabatic cooling) + underline
 *  1 given: 2 mol monoatomic, adiabatic, 400K→300K
 *  2 formula: ΔU = -2494 J = w
 *  3 formula: ΔH = -4157 J
 *  4 red note: ΔU follows nCvΔT, ΔH follows nCpΔT even adiabatically
 *  5 divider + Example 4 heading (JEE Advanced: Poisson expansion) + underline
 *  6 given: 1 mol monoatomic, γ=5/3, 300K, 1.00→0.25 atm
 *  7 formula: T2 = 172.3 K, w ≈ -1.59x10^3 J
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (16, w800)           | T mid | y85..104 (bl98)
 *  b0 | underline1                    | Draw  | y107 x310..770
 *  b1 | given1 (14)                   | T mid | y121..136 (bl132)
 *  b2 | formula1 chip (16)            | Chip  | x320..760 y145..180
 *  b3 | formula2 chip (15)            | Chip  | x330..750 y190..222
 *  b4 | red note chip (14)            | Chip  | x330..750 y232..267
 *  b5 | divider                       | Draw  | y285 x150..930
 *  b5 | heading2 (16, w800)           | T mid | y301..320 (bl315)
 *  b5 | underline2                    | Draw  | y323 x290..790
 *  b6 | given2 (14)                   | T mid | y339..354 (bl350)
 *  b7 | formula3 chip (15)            | Chip  | x260..880 y365..410
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: adiabatic & Poisson", "worked examples: adiabatic & Poisson")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={98} size={16} weight={800} fill={INK}>
          {t("Example 3 (JEE Main): adiabatic cooling", "Example 3 (JEE Main): adiabatic cooling")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 310 107 C 380 104, 700 104, 770 107" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={132} size={14} fill={INK}>
          {t(
            "2 mol monoatomic (Cv=3/2R), adiabatic, cools 400K→300K, q=0",
            "2 mol monoatomic (Cv=3/2R), adiabatic, 400K se 300K thanda hota hai, q=0"
          )}
        </T>
      </Fade>

      {/* beat 2 — ΔU */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={320} y={145} w={440} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ΔU = nCvΔT = 2(12.47)(−100) = −2494 J = w
        </Chip>
      </Fade>

      {/* beat 3 — ΔH */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={330} y={190} w={420} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          ΔH = nCpΔT = 2(20.79)(−100) = −4157 J
        </Chip>
      </Fade>

      {/* beat 4 — red note */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <Chip x={330} y={232} w={420} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "even adiabatic: ΔU follows nCvΔT, ΔH follows nCpΔT",
            "adiabatic mein bhi: ΔU nCvΔT follow karta hai, ΔH nCpΔT follow karta hai"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — Example 4 heading */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 150 285 L 930 285" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={315} size={16} weight={800} fill={INK}>
          {t("Example 4 (JEE Advanced): Poisson expansion", "Example 4 (JEE Advanced): Poisson expansion")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 290 323 C 360 320, 720 320, 790 323" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 6 — given */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={540} y={350} size={14} fill={INK}>
          {t(
            "1 mol monoatomic (γ=5/3), 300K, 1.00 atm → 0.25 atm, reversible adiabatic",
            "1 mol monoatomic (γ=5/3), 300K, 1.00 atm → 0.25 atm, reversible adiabatic"
          )}
        </T>
      </Fade>

      {/* beat 7 — answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={260} y={365} w={620} h={45} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          T2 = 300(0.25)^0.40 = 172.3 K,  w = nCvΔT ≈ −1.59×10³ J
        </Chip>
      </Fade>
    </Scene>
  );
}
