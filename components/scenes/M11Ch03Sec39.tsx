/**
 * M11 Ch03 · Section 39 — "Principal solutions, a general solution, and a quadratic"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — three examples in three columns, left to right.
 *
 * Beats (board_reveal_at_english [0, 2.47, 17.75, 34.05, 40.96, 52.05, 66.05]):
 *  0 Ex1 heading: principal solutions of sinx=1/2
 *  1 formula: x=π/6(QI), x=5π/6(QII)
 *  2 Ex2 heading: general solution of cosx=-1/2
 *  3 formula: cosx=cos(2π/3)⇒x=2nπ±2π/3
 *  4 Ex3 heading: quadratic in sinx: 2sin²x+sinx-1=0
 *  5 text: factor (2sinx-1)(sinx+1)=0, sinx=1/2 or sinx=-1
 *  6 formula: x=nπ+(-1)ⁿπ/6 or x=(4n-1)π/2
 *
 * Layout plan — three columns: Ex1 x60-380, Ex2 x420-780, Ex3 x820-1020:
 *  b0 | "Example 1..." (14,amber,w700)  | T st | x60..370  y104..119 (bl 110)
 *  b1 | chip                             | Chip | x60..320   y145..185
 *  b2 | "Example 2..." (13,amber,w700)  | T st | x420..760 y104..119 (bl 110)
 *  b3 | chip                             | Chip | x420..760   y145..185
 *  b4 | "Example 3..." (13,amber,w700)  | T st | x820..1020 y104..119 (bl 110)
 *  b5 | 2 lines (12)                     | T st | x820..1020  y140..174
 *  b6 | chip                             | Chip | x820..1020   y185..229
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("Principal Solutions, a General Solution, and a Quadratic", "Principal Solutions, General Solution, aur Quadratic")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 1 — principal solutions of sinx=1/2", "Example 1 — sinx=1/2 ke principal solutions")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 370 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the two principal solutions */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={60} y={145} w={300} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          x=π/6(QI), x=5π/6(QII)
        </Chip>
      </Fade>

      {/* beat 2 — Example 2 heading */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={420} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 2 — general solution of cosx=-1/2", "Example 2 — cosx=-1/2 ka general solution")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M 420 118 L 760 118" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.4)} />

      {/* beat 3 — the general solution */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={420} y={145} w={340} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={12} script={false}>
          cosx=cos(2π/3)⇒x=2nπ±2π/3
        </Chip>
      </Fade>

      {/* beat 4 — Example 3 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={820} y={104} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 3 — quadratic in", "Example 3 — sinx mein")}
        </T>
        <T x={820} y={120} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          sinx: 2sin²x+sinx-1=0
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 820 128 L 1020 128" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.4)} />

      {/* beat 5 — factor it */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={820} y={150} size={12} fill={INK} anchor="start">
          (2sinx-1)(sinx+1)=0
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={820} y={172} size={12} fill={INK} anchor="start" weight={700}>
          sinx=1/2 or sinx=-1
        </T>
      </Fade>

      {/* beat 6 — the two solution families */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={820} y={185} w={220} h={44} fill="#FCF4E0" stroke={INK} textFill={INK} size={10} script={false}>
          x=nπ+(-1)ⁿπ/6 or x=(4n-1)π/2
        </Chip>
      </Fade>
    </Scene>
  );
}
