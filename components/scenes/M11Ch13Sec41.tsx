/**
 * M11 Ch13 · Section 41 — "Worked example: combine two groups, then judge consistency"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — fuses the combined-variance and C.V. procedures.
 *
 * Verified: Group I n=40, mean=60, SD=8. Group II n=60, mean=50, SD=6.
 *  x̄ = (40×60+60×50)/100 = (2400+3000)/100 = 5400/100 = 54.
 *  d₁ = 60-54 = 6, d₂ = 50-54 = -4.
 *  σ² = [40(64+36)+60(36+16)]/100 = [40×100+60×52]/100 = [4000+3120]/100 = 71.2.
 *  σ = √71.2 ≈ 8.44. C.V. = 8.44/54×100 ≈ 15.63% ≈ 15.6%.
 *  8.44 > 8 and 8.44 > 6 — combined σ exceeds both group SDs.
 *
 * Beats (board_reveal_at_english [0, 24.83, 34.22, 46.93, 64.68, 88.41, 105.9]):
 *  0 anchor: heading
 *  1 represent: given (Group I 40/60/8, Group II 60/50/6)
 *  2 represent: x̄ = (40×60+60×50)/100 = 5400/100 = 54
 *  3 represent: d₁ = 60-54 = 6, d₂ = 50-54 = -4
 *  4 represent (high): σ² = [40(64+36)+60(36+16)]/100 = [4000+3120]/100 = 71.2
 *  5 land (boxed, high emphasis): σ = √71.2 ≈ 8.44, C.V. = 8.44/54×100 ≈ 15.6%
 *  6 note (red-margin): combined σ exceeds both group SDs — d² terms inject spread
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 16, red, always-on)     | T mid | x540 y50
 *  b0 | heading (script 13, amber_dark)  | T mid | x540 y74
 *  b1 | text (13, ink)                   | T mid | x540 y98
 *  b2 | formula (14, ink)                | Row   | x395 y122
 *  b3 | text/formula (13, ink)           | T mid | x540 y146
 *  b4 | formula (14, ink)                | T mid | x540 y170
 *  b5 | boxed (17, green)                | Draw+T| box x240..840 y190..234
 *  b6 | red bar + note (14)              | Draw+T| x60 y256..274 · text y270
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch13Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={50} size={16} fill={RED} anchor="middle" script>
          {t("Combine Two Groups, Then Judge Consistency", "Do Groups Combine Karna, Phir Consistency Judge Karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={74} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Advanced: pool 100 students, then find C.V.", "JEE Advanced: 100 students pool karo, phir C.V. nikaalo")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={98} size={13} fill={INK} anchor="middle">
          {t(
            "Group I: 40 students, mean 60, SD 8.  Group II: 60 students, mean 50, SD 6.",
            "Group I: 40 students, mean 60, SD 8.  Group II: 60 students, mean 50, SD 6."
          )}
        </T>
      </Fade>

      {/* beat 2 — combined mean */}
      <XBar on={beat >= 2} delay={dl(2, 0)} x={395} y={122} size={14} />
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={409} y={122} size={14} fill={INK} anchor="start" weight={700}>
          {" = (40×60+60×50)/100 = 5400/100 = 54"}
        </T>
      </Fade>

      {/* beat 3 — group-mean deviations */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={146} size={13} fill={INK} anchor="middle" weight={700}>
          {"d₁ = 60-54 = 6,   d₂ = 50-54 = -4"}
        </T>
      </Fade>

      {/* beat 4 — combined variance */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={170} size={14} fill={INK} anchor="middle" weight={700}>
          {"σ² = [40(64+36)+60(36+16)]/100 = [4000+3120]/100 = 71.2"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): combined SD & C.V. */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(240, 190, 600, 44)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={218} size={17} fill={GREEN} anchor="middle" weight={800}>
          {"σ = √71.2 ≈ 8.44,   C.V. = 8.44/54 × 100 ≈ 15.6%"}
        </T>
      </Fade>

      {/* beat 6 — note: combined σ exceeds both group SDs */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 256 L 60 274" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={270} size={13} fill={RED} anchor="start" weight={700}>
          {t(
            "Combined σ (8.44) exceeds both group SDs — the d² terms inject the between-group spread.",
            "Combined σ (8.44) dono group SDs se zyada hai — d² terms between-group spread inject karte hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
