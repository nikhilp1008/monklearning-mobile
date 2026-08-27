/**
 * C11 Chemistry Ch05 · Section 30 — "Calorimetry, the four processes, and
 * Poisson relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Section type: formulas (accumulating).
 *
 * Beats (board_reveal_at, en [0,5.8,15.1,29.61,36.95,55.13,73.05,81.24]):
 *  0 heading + underline (anchor)
 *  1 formula: q = CΔT = mcΔT
 *  2 formula: qV = ΔU = −Ccal·ΔTcal · qP = ΔH (high)
 *  3 label: four processes, work done ON system
 *  4 formula: the four work formulas (high)
 *  5 formula: Poisson relations (high)
 *  6 formula: ΔsolH = ΔlatticeH + ΔhydH
 *  7 formula: ΔvapS = ΔvapH/Tb ≈ 85-88 J/K/mol
 *
 * Layout plan (centered x540, accumulating top to bottom):
 *  b0 | heading (17,w800)+underline   | y81..96 (bl95); y105
 *  b1 | chip1 (16)                    | Chip | x430..650 y115..148
 *  b2 | chip2 (15)                    | Chip | x330..750 y156..192
 *  b3 | text3 (14, muted)             | T mid | y204..219 (bl215)
 *  b4 | chip4 (14, wide)              | Chip | x110..930 y228..268
 *  b5 | chip5 (15)                    | Chip | x260..880 y280..320
 *  b6 | chip6 (17)                    | Chip | x380..700 y332..368
 *  b7 | chip7 (15)                    | Chip | x300..780 y380..420
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

export default function C11Ch05Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("calorimetry & Poisson relations toolkit", "calorimetry & Poisson relations toolkit")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={17} weight={800} fill={INK}>
          {t("Applications toolkit", "Applications toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 105 C 460 102, 620 102, 680 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — heat capacity formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <Chip x={430} y={115} w={220} h={33} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          q = CΔT = mcΔT
        </Chip>
      </Fade>

      {/* beat 2 — qV, qP */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={330} y={156} w={420} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          qV = ΔU = −Ccal·ΔTcal   ·   qP = ΔH
        </Chip>
      </Fade>

      {/* beat 3 — four processes label */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={540} y={215} size={14} fill={MUTED}>
          {t("four processes (ideal gas), work done ON the system:", "chaar processes (ideal gas), work jo system PAR hota hai:")}
        </T>
      </Fade>

      {/* beat 4 — four work formulas */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <Chip x={110} y={228} w={820} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          w(iso) = −nRT ln(V2/V1)  ·  w(adia) = nCvΔT  ·  w(isobar) = −nRΔT  ·  w(isochor) = 0
        </Chip>
      </Fade>

      {/* beat 5 — Poisson relations */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <Chip x={260} y={280} w={620} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          PV^γ = const  ·  TV^(γ−1) = const  ·  P^(1−γ)T^γ = const
        </Chip>
      </Fade>

      {/* beat 6 — enthalpy of solution */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={380} y={332} w={320} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          ΔsolH = ΔlatticeH + ΔhydH
        </Chip>
      </Fade>

      {/* beat 7 — Trouton numeric */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={300} y={380} w={480} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          ΔvapS = ΔvapH/Tb ≈ 85–88 J/K/mol
        </Chip>
      </Fade>
    </Scene>
  );
}
