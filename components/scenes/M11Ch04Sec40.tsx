/**
 * M11 Ch04 · Section 40 — "Worked: build a quadratic, and a complex square root"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 4 (Quadratic Equations with Complex Roots).
 *
 * Beats (board_reveal_at_english [0, 8.19, 18.86, 30.63, 39.59, 48.9, 62.21, 76.37]):
 *  0 heading: from a root, and root of a complex number
 *  1 given: real quadratic, one root 2-3i ⇒ other is 2+3i
 *  2 setup: sum=4, product=(2-3i)(2+3i)=13
 *  3 boxed step: x² - 4x + 13 = 0
 *  4 given: find √(-15-8i), set it = x+iy
 *  5 step: x²-y²=-15, 2xy=-8, |z|=17
 *  6 step: x²=1, y²=16, xy<0
 *  7 boxed final answer (red-margin, important): √(-15-8i) = ±(1-4i)
 *
 * Layout plan (worked notebook, single column x=540, top to bottom):
 *  b0 | heading (15,amber_dark,w700) | T mid | x540 y90  + underline y104
 *  b1 | text (15,ink)                | T mid | x540 y126 + underline y142
 *  b2 | text (15,ink)                | T mid | x540 y168 + underline y184
 *  b3 | boxed (19,ink,w700)          | Chip  | x436.5..623.5 y210..254
 *  b4 | text (16,ink)                | T mid | x540 y296 + underline y312
 *  b5 | text (14,ink)                | T mid | x540 y352 + underline y366
 *  b6 | text (14,ink)                | T mid | x540 y406 + underline y420
 *  b7 | boxed final answer, red border| Chip | x437..643 y448..492
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
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch04Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Build a Quadratic, Find a Square Root", "Quadratic Banao, Square Root Nikaalo")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("From a root, and root of a complex number", "Ek root se, aur complex number ka root")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(390, 104, 690, 104)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={126} size={15} fill={INK} anchor="middle">
          {t(
            "Real quadratic with one root 2-3i: the other is 2+3i.",
            "Real quadratic ka ek root 2-3i hai: doosra hai 2+3i."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={lineD(334, 142, 746, 142)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 2 — sum and product */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={168} size={15} fill={INK} anchor="middle">
          sum = 4,   product = (2-3i)(2+3i) = 4+9 = 13
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(367.5, 184, 712.5, 184)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — boxed quadratic */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={436.5} y={210} w={187} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          x² - 4x + 13 = 0
        </Chip>
      </Fade>

      {/* beat 4 — second example, given */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={296} size={16} fill={INK} anchor="middle">
          {t("Now find √(-15-8i). Set it = x+iy.", "Ab √(-15-8i) nikaalo. Ise x+iy set karo.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(400, 312, 680, 312)} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 5 — equate real/imaginary parts */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={352} size={14} fill={INK} anchor="middle">
          x² - y² = -15,   2xy = -8,   |z| = √(225+64) = 17
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(365, 366, 715, 366)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 6 — solve for x², y², sign */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={406} size={14} fill={INK} anchor="middle">
          x² = (17-15)/2 = 1,   y² = (17+15)/2 = 16,   xy &lt; 0
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(358, 420, 722, 420)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 7 — the boxed final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={437} y={448} w={206} h={44} fill={CREAM} stroke={RED} textFill={INK} size={18} script={false}>
          √(-15-8i) = ±(1-4i)
        </Chip>
      </Fade>
    </Scene>
  );
}
