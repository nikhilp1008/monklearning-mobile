/**
 * M11 Ch03 · Section 34 — "A telescoping product and a conditional identity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — FLAGGED (subtopic 5), two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 7.51, 20.39, 35.16, 44.63, 63.15, 73.05]):
 *  0 Ex7 heading: prove cos20°cos40°cos80°=1/8
 *  1 text: multiply/divide by 2sin20°, cascade 2sinθcosθ=sin2θ
 *  2 formula: the full telescoping cascade to 1/8
 *  3 Ex8 heading: if A+B+C=π, prove ∑tan=∏tan
 *  4 text: from A+B=π-C, tan(A+B)=-tanC setup
 *  5 formula: tanA+tanB+tanC = tanAtanBtanC
 *  6 red-margin: condition used at the first step - drop it, false
 *
 * Layout plan — left column (Ex7) x60-500, right column (Ex8) x580-1020:
 *  b0 | "Example 7..." (14,amber,w700)  | T st | x60..360  y104..119 (bl 110)
 *  b1 | 2 lines (13)                    | T st | x60..340   y139..174
 *  b2 | 2 lines + chip (green)          | T/Chip | x60..320  y188..267
 *  b3 | "Example 8..." (13,amber,w700)  | T st | x580..920 y104..119 (bl 110)
 *  b4 | 2 lines (12)                    | T st | x580..900  y139..174
 *  b5 | chip (green)                    | Chip | x580..920   y185..221
 *  b6 | margin bar (red)                 | Draw | x580  y240..285
 *  b6 | closer 2 lines (13,red)          | T st | x596..1020   y258..282
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} anchor="middle" script>
          {t("A Telescoping Product and a Conditional Identity", "Ek Telescoping Product aur Conditional Identity")}
        </T>
      </Fade>

      {/* beat 0 — Example 7 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 7 — prove cos20°cos40°cos80°=1/8", "Example 7 — prove cos20°cos40°cos80°=1/8")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 400 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the deliberate trick */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={13} fill={INK} anchor="start">
          {t("Multiply/divide by 2sin20°,", "2sin20° se multiply/divide karo,")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={13} fill={INK} anchor="start" weight={700}>
          {t("cascade 2sinθcosθ=sin2θ.", "2sinθcosθ=sin2θ cascade karo.")}
        </T>
      </Fade>

      {/* beat 2 — the telescoping cascade */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={200} size={11} fill={INK} anchor="start">
          sin40°cos40°cos80° / (2sin20°)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={60} y={222} size={12} fill={INK} anchor="start">
          = sin160° / (8sin20°)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Chip x={60} y={235} w={280} h={32} fill={GREEN} textFill="#FFFEFB" size={13} script={false}>
          = sin20°/(8sin20°) = 1/8
        </Chip>
      </Fade>

      {/* beat 3 — Example 8 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={580} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 8 — if A+B+C=π, prove ∑tan=∏tan", "Example 8 — agar A+B+C=π, prove ∑tan=∏tan")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M 580 118 L 920 118" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 0.4)} />

      {/* beat 4 — the setup */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={145} size={12} fill={INK} anchor="start">
          From A+B=π-C: tan(A+B)=-tanC,
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={580} y={168} size={11} fill={INK} anchor="start" weight={700}>
          (tanA+tanB)/(1-tanAtanB)=-tanC
        </T>
      </Fade>

      {/* beat 5 — the identity, landed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={580} y={185} w={340} h={36} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          tanA+tanB+tanC = tanAtanBtanC
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: the scope trap */}
      <Draw on={beat >= 6} d="M 580 240 L 580 285" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={596} y={258} size={13} fill={RED} anchor="start" weight={700}>
          {t("A+B+C=π is used at the FIRST step -", "A+B+C=π pehle hi step mein use hota -")}
        </T>
        <T x={596} y={280} size={13} fill={RED} anchor="start">
          {t("drop it and the identity is false.", "isse hataao, identity jhooth hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
