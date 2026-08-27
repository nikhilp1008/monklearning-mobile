/**
 * M11 Ch03 · Section 40 — "The linear form, and factoring instead of dividing"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 5.55, 23.13, 34.73, 53.93, 70.06, 81.07]):
 *  0 Ex4 heading: solve √3cosx+sinx=1
 *  1 text: R=2, α=π/6, cos(x-π/6)=cos(π/3)
 *  2 formula: x=2nπ+π/2 or x=2nπ-π/6
 *  3 Ex5 heading: factor don't divide - sin2x=sinx
 *  4 formula: 2sinxcosx-sinx=0 ⇒ sinx(2cosx-1)=0
 *  5 text: sinx=0⇒x=nπ; cosx=1/2⇒x=2nπ±π/3
 *  6 red-margin (high): dividing by sinx erases the x=nπ family
 *
 * Layout plan — left column (Ex4) x60-500, right column (Ex5) x580-1020:
 *  b0 | "Example 4..." (14,amber,w700)  | T st | x60..400  y104..119 (bl 110)
 *  b1 | 2 lines (13)                    | T st | x60..440   y139..174
 *  b2 | chip                            | Chip | x60..380   y185..223
 *  b3 | "Example 5..." (13,amber,w700)  | T st | x580..960 y104..119 (bl 110)
 *  b4 | chip                            | Chip | x580..940   y145..181
 *  b5 | 2 lines (13)                    | T st | x580..800  y198..221
 *  b6 | margin bar (red)                 | Draw | x580  y245..290
 *  b6 | 2 lines (13,red)                 | T st | x596..1000   y265..287
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("The Linear Form, and Factor Don't Divide", "Linear Form, aur Factor Karo Divide Nahi")}
        </T>
      </Fade>

      {/* beat 0 — Example 4 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 4 — solve √3cosx+sinx=1", "Example 4 — √3cosx+sinx=1 solve karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 400 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — R, alpha, the reduced form */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={13} fill={INK} anchor="start">
          R=√(3+1)=2, tanα=1/√3⇒α=π/6.
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={13} fill={INK} anchor="start" weight={700}>
          cos(x-π/6)=1/2=cos(π/3)
        </T>
      </Fade>

      {/* beat 2 — the two solution families */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={185} w={380} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          x=2nπ+π/2 or x=2nπ-π/6
        </Chip>
      </Fade>

      {/* beat 3 — Example 5 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={580} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 5 — factor, don't divide: sin2x=sinx", "Example 5 — factor karo, divide nahi: sin2x=sinx")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 580 118 L 960 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — factor it */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={580} y={145} w={360} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          2sinxcosx-sinx=0 ⇒ sinx(2cosx-1)=0
        </Chip>
      </Fade>

      {/* beat 5 — the two factors' solutions */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={198} size={13} fill={INK} anchor="start">
          sinx=0 ⇒ x=nπ;
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={221} size={13} fill={INK} anchor="start" weight={700}>
          cosx=1/2 ⇒ x=2nπ±π/3.
        </T>
      </Fade>

      {/* beat 6 — red-margin: the signature trap */}
      <Draw on={beat >= 6} d="M 580 245 L 580 290" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={596} y={265} size={13} fill={RED} anchor="start" weight={700}>
          {t("Dividing by sinx would erase the", "sinx se divide karte to poori")}
        </T>
        <T x={596} y={287} size={13} fill={RED} anchor="start">
          {t("ENTIRE x=nπ family - the signature trap!", "x=nπ family mit jaati - signature trap!")}
        </T>
      </Fade>
    </Scene>
  );
}
