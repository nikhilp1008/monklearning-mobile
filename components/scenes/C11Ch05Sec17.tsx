/**
 * C11 Chemistry Ch05 · Section 17 — "Pitfalls and pro-tips: signs, scaling,
 * and directions" (closes subtopic 2)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,6.4,18.77,29.18,45.23,61.53,81.07,86.78]):
 *  0 heading: Thermochemistry traps + underline
 *  1 trap 1: reversing flips ΔH sign
 *  2 trap 2: scaling is extensive
 *  3 trap 3: bond-enthalpy direction (opposite to formation), gaseous only
 *  4 trap 4: elements ΔfH=0 vs O=O bond enthalpy
 *  5 trap 5: Born-Haber sign chaos
 *  6 divider + pro-tip heading (green) + underline
 *  7 pro-tip chip: two formulas, two directions
 *
 * Layout plan (centered x540, 5 trap rows x780 w, x130..910):
 *  b0 | heading (20, red, w800)       | T mid | y83..106 (bl100)
 *  b0 | underline                     | Draw  | y112 x400..680
 *  b1 | trap1 chip (14)               | Chip  | y118..152
 *  b2 | trap2 chip (14)               | Chip  | y162..196
 *  b3 | trap3 chip (14)               | Chip  | y206..240
 *  b4 | trap4 chip (14)               | Chip  | y250..284
 *  b5 | trap5 chip (14)               | Chip  | y294..328
 *  b6 | divider                       | Draw  | y352 x150..930
 *  b6 | pro-tip heading (19, green)   | T mid | y366..385 (bl380)
 *  b6 | underline2                    | Draw  | y390 x310..770
 *  b7 | pro-tip chip (14, green)      | Chip  | x130..910 y405..450
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
  RED,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const TRAPS = [
  { en: "reversing an equation flips ΔH to −ΔH — decide algebra BEFORE plugging numbers",
    hi: "equation reverse karne se ΔH → −ΔH ho jata hai — pehle algebra decide karo, phir numbers" },
  { en: "scaling: enthalpy is extensive — double the reaction, double its ΔH",
    hi: "scaling: enthalpy extensive hai — reaction double, ΔH bhi double" },
  { en: "bond-enthalpy direction = reactants − products (opposite to formation); gaseous only",
    hi: "bond-enthalpy direction = reactants − products (formation se opposite); sirf gaseous" },
  { en: "elements: ΔfH = 0 — don't confuse this with the O=O bond enthalpy",
    hi: "elements: ΔfH = 0 — ise O=O bond enthalpy se confuse mat karo" },
  { en: "Born-Haber sign chaos: subl/ion/dissoc = +; e⁻ gain/lattice = − — write EACH sign before summing",
    hi: "Born-Haber sign chaos: subl/ion/dissoc = +; e⁻ gain/lattice = − — sum karne se pehle har sign likho" },
];

export default function C11Ch05Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("pitfalls & pro-tips: signs, scaling, directions", "pitfalls & pro-tips: signs, scaling, directions")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={20} weight={800} fill={RED}>
          {t("Thermochemistry traps", "Thermochemistry traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 112 C 460 109, 620 109, 680 112" stroke={RED} sw={2} dur={0.5} />

      {/* beats 1-5 — trap rows */}
      {TRAPS.map((trap, i) => (
        <Fade key={i} on={beat >= 1 + i} delay={dl(1 + i, 0.1)}>
          <Chip x={130} y={118 + i * 44} w={780} h={34} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
            {t(trap.en, trap.hi)}
          </Chip>
        </Fade>
      ))}

      {/* beat 6 — pro-tip heading */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 150 352 L 930 352" stroke={GREEN} sw={1.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={380} size={19} weight={800} fill={GREEN}>
          {t("Pro-tip: two formulas, two directions", "Pro-tip: do formulas, do directions")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 310 390 C 380 387, 700 387, 770 390" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 7 — pro-tip content */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={130} y={405} w={780} h={45} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "Formation = products − reactants. Bond enthalpy = reactants − products. Mixing = the #1 sign error.",
            "Formation = products − reactants. Bond enthalpy = reactants − products. Mixing = sabse badi sign galti."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
