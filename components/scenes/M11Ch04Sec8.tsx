/**
 * M11 Ch04 · Section 8 — "Worked: equating real and imaginary parts"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — the given equation visually forks into two
 * branches (real / imaginary), each solved, then recombined into the answer.
 *
 * Beats (board_reveal_at_english [0, 7.25, 19.46, 29.01, 42.33, 46.34, 56.66, 65.96]):
 *  0 heading: solve by equating parts
 *  1 given: 4x + i(3x - y) = 3 + i(-6)
 *  2 fork left: Real branch — 4x = 3
 *  3 fork right: Imaginary branch — 3x - y = -6
 *  4 solve x: 4x=3 ⇒ x=3/4, boxed
 *  5 solve y: y=3x+6=9/4+6=33/4, boxed
 *  6 guardrail (red-margin): two real equations from one complex equation
 *  7 verdict (green): x=3/4 and y=33/4
 *
 * Layout plan:
 *  b0 | heading (17,amber_dark)          | T mid   | x540 y102
 *  b0 | underline                         | Draw    | x420..660 y118
 *  b1 | given (16,ink)                    | T mid   | x540 y150
 *  b2 | fork arrow + Real label + underline| Draw+T | arrow(525,172)→(390,203), label x350 y222
 *  b3 | fork arrow + Imaginary label + u/l | Draw+T | arrow(555,172)→(690,203), label x730 y222
 *  b4 | chip "4x=3 ⇒ x=3/4"               | Chip    | x420..660 y254..292
 *  b5 | chip "y=3x+6=9/4+6=33/4"          | Chip    | x380..700 y316..354
 *  b6 | red bar + guardrail text          | Draw+T  | x300 y378..412, text y395
 *  b7 | green verdict chip                | Chip    | x340..740 y436..480
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
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch04Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Equating Real and Imaginary Parts", "Worked: Real aur Imaginary Parts Equate Karna")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Solve by equating parts", "Parts equate karke solve karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={150} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Find real x, y:  4x + i(3x - y) = 3 + i(-6)", "Real x, y nikaalo:  4x + i(3x - y) = 3 + i(-6)")}
        </T>
      </Fade>

      {/* beat 2 — fork left: real branch */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={arrowD(525, 172, 390, 203)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={350} y={222} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Real: 4x = 3", "Real: 4x = 3")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d="M 295 238 L 405 238" stroke={AMBER} sw={1.8} dur={0.4} />

      {/* beat 3 — fork right: imaginary branch */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={arrowD(555, 172, 690, 203)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={730} y={222} size={15} fill={INK} anchor="middle" weight={700}>
          {t("Imaginary: 3x - y = -6", "Imaginary: 3x - y = -6")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d="M 635 238 L 825 238" stroke={AMBER} sw={1.8} dur={0.4} />

      {/* beat 4 — solve x */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={420} y={254} w={240} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          4x = 3  ⇒  x = 3/4
        </Chip>
      </Fade>

      {/* beat 5 — solve y */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={380} y={316} w={320} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          y = 3x + 6 = 9/4 + 6 = 33/4
        </Chip>
      </Fade>

      {/* beat 6 — guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 300 378 L 300 412" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={316} y={395} size={16} fill={RED} anchor="start" weight={700}>
          {t("Two real equations from one complex equation.", "Ek complex equation se do real equations.")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={340} y={436} w={400} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          {t("Answer: x = 3/4 and y = 33/4", "Answer: x = 3/4 aur y = 33/4")}
        </Chip>
      </Fade>
    </Scene>
  );
}
