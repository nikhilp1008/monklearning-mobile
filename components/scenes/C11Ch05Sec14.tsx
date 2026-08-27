/**
 * C11 Chemistry Ch05 · Section 14 — "The master formulas of thermochemistry"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Section type: formulas (accumulating).
 *
 * Beats (board_reveal_at, en [0,5.12,13.4,25.09,31.74,44.46,64.6,73.64]):
 *  0 heading + underline (anchor)
 *  1 label: reaction enthalpy from formation enthalpies
 *  2 formula: ΔrH° = Σν·ΔfH°(products) − Σν·ΔfH°(reactants)
 *  3 label: reaction enthalpy from bond enthalpies (gaseous)
 *  4 formula: ΔrH = ΣBE(broken) − ΣBE(formed)
 *  5 red note: direction alert (opposite conventions)
 *  6 formula: ΔsubH = ΔfusH + ΔvapH
 *  7 formula: Born-Haber master, ΔfH° = ΔsubH + ΔiH + ½ΔdissH + ΔegH + ΔlatticeH
 *
 * Layout plan (centered x540, accumulating top to bottom):
 *  b0 | heading (18, w800) + underline| y81..101 (bl95); y105
 *  b1 | label1 (14, muted)            | T mid | y119..134 (bl130)
 *  b2 | formula chip (17)             | Chip  | x260..880 y145..190
 *  b3 | label3 (14, muted)            | T mid | y214..229 (bl225)
 *  b4 | formula chip (18)             | Chip  | x330..750 y240..280
 *  b5 | red note chip (14)            | Chip  | x120..920 y295..335
 *  b6 | formula chip (17)             | Chip  | x360..720 y350..390
 *  b7 | formula chip (16, wide)       | Chip  | x110..930 y405..455
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
  MUTED,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("thermochemistry master formulas", "thermochemistry master formulas")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={18} weight={800} fill={INK}>
          {t("Thermochemistry toolkit", "Thermochemistry toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 105 C 460 102, 620 102, 680 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — label */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={130} size={14} fill={MUTED}>
          {t("reaction enthalpy from formation enthalpies:", "formation enthalpies se reaction enthalpy:")}
        </T>
      </Fade>

      {/* beat 2 — formation formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={260} y={145} w={620} h={45} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔrH° = Σν·ΔfH°(products) − Σν·ΔfH°(reactants)
        </Chip>
      </Fade>

      {/* beat 3 — label */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={540} y={225} size={14} fill={MUTED}>
          {t("reaction enthalpy from bond enthalpies (gaseous species):", "bond enthalpies se reaction enthalpy (gaseous species):")}
        </T>
      </Fade>

      {/* beat 4 — bond enthalpy formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <Chip x={330} y={240} w={420} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          ΔrH = ΣBE(broken) − ΣBE(formed)
        </Chip>
      </Fade>

      {/* beat 5 — direction alert */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <Chip x={120} y={295} w={800} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "direction alert: formation = products − reactants; bond enthalpy = reactants − products (OPPOSITE)",
            "direction alert: formation = products − reactants; bond enthalpy = reactants − products (OPPOSITE)"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — sublimation formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={360} y={350} w={360} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔsubH = ΔfusH + ΔvapH
        </Chip>
      </Fade>

      {/* beat 7 — Born-Haber master formula */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={110} y={405} w={820} h={50} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ΔfH° = ΔsubH + ΔiH + ½ΔdissH + ΔegH + ΔlatticeH
        </Chip>
      </Fade>
    </Scene>
  );
}
