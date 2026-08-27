/**
 * M11 Ch03 · Section 41 — "The squaring trap done right, and a range squeeze"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 4.78, 26.54, 35.93, 56.15, 63.74, 85.16]):
 *  0 Ex6 heading: solve sinx+cosx=1 without squaring
 *  1 text: amplitude form √2sin(x+π/4)=sin(π/4)
 *  2 formula: x=2nπ or x=2nπ+π/2 (clean, boxed)
 *  3 red-margin (high): contrast - squaring gives fake x=π
 *  4 Ex7 heading: range squeeze 2sin²x+sin²2x=2
 *  5 text: s=sin²x substitution, (2s-1)(s-1)=0
 *  6 formula: x=nπ±π/4 or x=(2n+1)π/2
 *
 * Layout plan — left column (Ex6) x60-500, right column (Ex7) x580-1020:
 *  b0 | "Example 6..." (13,amber,w700)  | T st | x60..430  y104..119 (bl 110)
 *  b1 | 2 lines (13)                    | T st | x60..380   y139..174
 *  b2 | chip (green)                    | Chip | x60..340   y185..221
 *  b3 | margin bar (red)                 | Draw | x60  y240..285
 *  b3 | 2 lines (12,red)                 | T st | x76..460   y260..282
 *  b4 | "Example 7..." (13,amber,w700)  | T st | x580..960 y104..119 (bl 110)
 *  b5 | 2 lines (13)                    | T st | x580..900  y139..174
 *  b6 | chip                            | Chip | x580..900   y185..229
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={18} fill={RED} anchor="middle" script>
          {t("The Squaring Trap Done Right, and a Range Squeeze", "Squaring Trap Sahi Se, aur Range Squeeze")}
        </T>
      </Fade>

      {/* beat 0 — Example 6 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 6 — solve sinx+cosx=1 (no squaring)", "Example 6 — sinx+cosx=1 (squaring nahi)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 430 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the amplitude form */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={13} fill={INK} anchor="start">
          √2sin(x+π/4)=1/√2
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={168} size={13} fill={INK} anchor="start" weight={700}>
          =sin(π/4)
        </T>
      </Fade>

      {/* beat 2 — the clean answer, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={185} w={280} h={36} fill={GREEN} textFill="#FFFEFB" size={14} script={false}>
          x=2nπ or x=2nπ+π/2
        </Chip>
      </Fade>

      {/* beat 3 — red-margin: the squaring contrast */}
      <Draw on={beat >= 3} d="M 60 240 L 60 285" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={76} y={260} size={12} fill={RED} anchor="start" weight={700}>
          {t("Squaring gives x=π, but sinπ+cosπ=-1 -", "Squaring se x=π, par sinπ+cosπ=-1 -")}
        </T>
        <T x={76} y={282} size={12} fill={RED} anchor="start">
          {t("back-checking removes the fake!", "back-check karke fake hataya jaata!")}
        </T>
      </Fade>

      {/* beat 4 — Example 7 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 7 — range squeeze: 2sin²x+sin²2x=2", "Example 7 — range squeeze: 2sin²x+sin²2x=2")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 960 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.4)} />

      {/* beat 5 — the substitution */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={145} size={13} fill={INK} anchor="start">
          s=sin²x: 2s+4s(1-s)=2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={168} size={13} fill={INK} anchor="start" weight={700}>
          ⇒ (2s-1)(s-1)=0
        </T>
      </Fade>

      {/* beat 6 — the two solution families */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={580} y={185} w={320} h={38} fill="#FCF4E0" stroke={INK} textFill={INK} size={14} script={false}>
          x=nπ±π/4 or x=(2n+1)π/2
        </Chip>
      </Fade>
    </Scene>
  );
}
