/**
 * C11 Chemistry Ch05 · Section 31 — "Bomb calorimetry and the enthalpy of
 * solution" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,11.26,31.4,47.19,60.16,67.24,79.7,90.97]):
 *  0 Example 1 heading (CBSE: bomb calorimeter) + underline
 *  1 given: mass, heat capacity, ΔT
 *  2 formula/answer: ΔU = -19.7 kJ/g
 *  3 red note: exothermic, bomb gives ΔU not ΔH
 *  4 divider + Example 2 heading (NEET: ΔsolH of NaCl) + underline
 *  5 given: lattice, hydration enthalpies
 *  6 formula/answer: ΔsolH = +4 kJ/mol
 *  7 red note: slightly endothermic, cools water
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (17, w800)           | T mid | y87..106 (bl100)
 *  b0 | underline1                    | Draw  | y110 x300..780
 *  b1 | given1 (14)                   | T mid | y129..144 (bl140)
 *  b2 | formula1 chip (16)            | Chip  | x280..840 y155..197
 *  b3 | red note1 chip (14)           | Chip  | x310..770 y210..248
 *  b4 | divider                       | Draw  | y270 x150..930
 *  b4 | heading2 (16, w800)           | T mid | y286..306 (bl300)
 *  b4 | underline2                    | Draw  | y310 x270..810
 *  b5 | given2 (14)                   | T mid | y329..344 (bl340)
 *  b6 | formula2 chip (17)            | Chip  | x390..690 y355..395
 *  b7 | red note2 chip (14)           | Chip  | x190..890 y408..453
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

export default function C11Ch05Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: bomb & solution", "worked examples: bomb & solution")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={17} weight={800} fill={INK}>
          {t("Example 1 (CBSE): bomb calorimeter", "Example 1 (CBSE): bomb calorimeter")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 300 110 C 380 107, 700 107, 780 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={140} size={14} fill={INK}>
          {t(
            "burn 0.50 g fuel; C=8.2 kJ/K; ΔT=1.20 K — constant V gives ΔU",
            "0.50 g fuel jalao; C=8.2 kJ/K; ΔT=1.20 K — constant V se ΔU milta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — answer */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={280} y={155} w={560} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ΔU = −(8.2)(1.20) = −9.84 kJ (0.50 g) ⇒ −19.7 kJ/g
        </Chip>
      </Fade>

      {/* beat 3 — red note */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={310} y={210} w={460} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "negative — exothermic; bomb gives ΔU, not ΔH (V fixed)",
            "negative — exothermic hai; bomb ΔU deta hai, ΔH nahi (V fixed)"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 heading */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 150 270 L 930 270" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={300} size={16} weight={800} fill={INK}>
          {t("Example 2 (NEET): enthalpy of solution of NaCl", "Example 2 (NEET): NaCl ki enthalpy of solution")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 270 310 C 340 307, 740 307, 810 310" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={340} size={14} fill={INK}>
          {t(
            "lattice enthalpy = +788 (dissociation); hydration enthalpy = −784 kJ/mol",
            "lattice enthalpy = +788 (dissociation); hydration enthalpy = −784 kJ/mol"
          )}
        </T>
      </Fade>

      {/* beat 6 — answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={390} y={355} w={300} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔsolH = 788 + (−784) = +4 kJ/mol
        </Chip>
      </Fade>

      {/* beat 7 — red note */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={190} y={408} w={700} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "slightly endothermic ⇒ NaCl mildly COOLS water; use lattice in its + (dissociation) sense",
            "thoda endothermic ⇒ NaCl paani ko halka THANDA karta hai; lattice ko + (dissociation) sense mein lo"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
