/**
 * M11 Ch04 · Section 17 — "Worked: conjugate, modulus, and a cube"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — given → set up → step by step → answer boxed → sanity check.
 *
 * Beats (board_reveal_at_english [0, 4.52, 18.01, 32.94, 50.18, 62.63, 77.06, 90.2]):
 *  0 heading: "basics: find conjugate and modulus"
 *  1 given/setup: z = 3+i card — z̄ = 3-i, |z| = √10 (left)
 *  2 given/setup: w = 2-5i card — w̄ = 2+5i, |w| = √29 (right)
 *  3 step: expand (5-3i)³ via the binomial
 *  4 step: substitute i²=-1, i³=-i carefully
 *  5 answer (boxed): (5-3i)³ = 125-225i-135+27i = -10-198i
 *  6 sanity check: the conjugate of the cube — just flip the imaginary sign
 *  7 guardrail (red-margin): keep substitutions clean, collect at the very end
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)      | T mid  | x540  y92
 *  b1 | z card, 3 lines (18,ink,w700)     | T/Bar  | x90   y140/175/210 (Overline #1)
 *  b2 | w card, 3 lines (18,ink,w700)     | T/Bar  | x600  y140/175/210 (Overline #2)
 *  b3 | expansion formula (16,ink)        | T mid  | x540  y270
 *  b4 | note (15,ink)                     | T mid  | x540  y310
 *  b5 | boxed result                      | Draw+T | box x310..770 y345..393
 *  b6 | conjugate of the cube (16,ink)    | Bar+T  | x380  y445 (Overline #3)
 *  b7 | red bar + guardrail (15,red,w700) | Draw+T | x60 y495..525, text x76 y512
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

/** T + Overline pair — see M11Ch04Sec13.tsx for the full contract. */
function Bar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
  text = "z",
  barWidth,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
  text?: string;
  barWidth?: number;
}) {
  const w = barWidth ?? size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          {text}
        </T>
      </Fade>
      <Overline on={on} delay={delay + 0.15} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch04Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Conjugate, Modulus, and a Cube", "Solved: Conjugate, Modulus, aur Cube")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Basics: find the conjugate and modulus", "Basics: conjugate aur modulus dhoondo")}
        </T>
      </Fade>

      {/* beat 1 — z card (left) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={90} y={140} size={18} fill={INK} anchor="start" weight={700}>z = 3 + i</T>
      </Fade>
      <Bar on={beat >= 1} delay={dl(1, 0.5)} x={90} y={175} size={18} barWidth={10.8} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={110} y={175} size={18} fill={INK} anchor="start" weight={700}>= 3 - i</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={90} y={210} size={18} fill={INK} anchor="start" weight={700}>|z| = √10</T>
      </Fade>

      {/* beat 2 — w card (right) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={600} y={140} size={18} fill={INK} anchor="start" weight={700}>w = 2 - 5i</T>
      </Fade>
      <Bar on={beat >= 2} delay={dl(2, 0.5)} x={600} y={175} size={18} text="w" barWidth={12} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={620} y={175} size={18} fill={INK} anchor="start" weight={700}>= 2 + 5i</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={600} y={210} size={18} fill={INK} anchor="start" weight={700}>|w| = √29</T>
      </Fade>

      {/* beat 3 — expand the cube */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={270} size={16} fill={INK} anchor="middle">
          (5-3i)³ = 5³ - 3(5²)(3i) + 3(5)(3i)² - (3i)³
        </T>
      </Fade>

      {/* beat 4 — substitution note */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={310} size={15} fill={INK} anchor="middle">
          {t("Substitute i² = -1 and i³ = -i carefully.", "i² = -1 aur i³ = -i ko dhyaan se substitute karo.")}
        </T>
      </Fade>

      {/* beat 5 — boxed answer */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(310, 345, 460, 48)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={375} size={18} fill={INK} anchor="middle" weight={700}>
          (5-3i)³ = 125-225i-135+27i = -10-198i
        </T>
      </Fade>

      {/* beat 6 — sanity check: conjugate of the cube */}
      <Bar on={beat >= 6} delay={dl(6, 0)} x={380} y={445} size={16} text="(5-3i)³" barWidth={64} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={454} y={445} size={16} fill={INK} anchor="start" weight={700}>= -10 + 198i</T>
      </Fade>

      {/* beat 7 — guardrail */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 495 L 60 525" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={512} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Substitute i², i³ cleanly — collect real & imaginary at the END.",
            "i², i³ ko cleanly substitute karo — real & imaginary END mein collect karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
