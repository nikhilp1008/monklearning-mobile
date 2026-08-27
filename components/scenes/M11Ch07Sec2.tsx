/**
 * M11 Ch07 · Section 2 — "Pascal's triangle and the addition rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0, 10.24, 32, 48.73, 64.94, 86.02, 102.32]):
 *  0 title (always-on)
 *  1 build the triangle rows n=0..5, one row at a time (PascalsTriangle × 6
 *    calls, each a single-row slice with a manually offset `top` so the
 *    stagger lands within one narration beat), row labels "n = k" alongside
 *  2 addition-rule demo: ring the two parents (row2 cols 0,1) amber, ring the
 *    child (row3 col1) green, short label to the right
 *  3 land Pascal's rule as a boxed formula, right column
 *  4 tie back: short caption "the two parents above" under the formula
 *  5 red-margin: symmetry nCr = nC(n-r)
 *  6 red-margin: row n ↔ coefficients of (a+b)^n
 *
 * Layout plan (Kalam bl−1.3s..+0.5s):
 *  b0 | title script26 cx540 bl58
 *  b1 | triangle cx300 top130 rowH34 colW40 size17 · row labels anchor-end x170 bl match
 *  b2 | rings (260,194)(300,194) amber r~18×21 · ring (280,228) green · label script16 cx300 bl345
 *  b3 | chip x560 y140 w440 h56 (label above x780 bl125)
 *  b4 | caption script15 cx780 bl222
 *  b5 | red bar x200 y490..530 · text script17 x220 bl515
 *  b6 | red bar x200 y545..580 · text script15 x220 bl568
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { PascalsTriangle } from "./math-kit";

const ROWS = [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
  [1, 5, 10, 10, 5, 1],
];
const CX = 300;
const TOP = 130;
const ROWH = 34;
const COLW = 40;

export default function M11Ch07Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("reading coefficients off Pascal's triangle", "Pascal's triangle se coefficients padho")}
        </T>
      </Fade>

      {/* beat 1 — build the triangle, one row at a time */}
      {ROWS.map((row, i) => (
        <PascalsTriangle
          key={i}
          on={[beat >= 1]}
          delay={dl(1, 0.3 + i * 0.7)}
          cx={CX}
          top={TOP + i * ROWH}
          rows={[row]}
          rowHeight={ROWH}
          colWidth={COLW}
          size={17}
        />
      ))}
      {ROWS.map((_, i) => (
        <Fade key={`lbl${i}`} on={beat >= 1} delay={dl(1, 0.3 + i * 0.7)}>
          <T x={170} y={TOP + i * ROWH} size={14} fill={MUTED} script anchor="end">
            n = {i}
          </T>
        </Fade>
      ))}

      {/* beat 2 — the addition rule, concretely: 1 + 2 = 3 */}
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={ringD(260, 194, 18, 21)} stroke={AMBER} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={ringD(300, 194, 18, 21)} stroke={AMBER} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={ringD(280, 228, 18, 21)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={300} y={345} size={16} fill={GREEN_DARK} script>
          {t("sum of the two above", "dono upar wale ka sum")}
        </T>
      </Fade>

      {/* beat 3 — land Pascal's rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={780} y={125} size={14} fill={MUTED} script>
          {t("Pascal's rule", "Pascal's rule")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={560} y={140} w={440} h={56} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19}>
          (n-1)C(r-1) + (n-1)C(r) = nCr
        </Chip>
      </Fade>

      {/* beat 4 — tie back to the concrete demo */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={780} y={222} size={15} fill={MUTED} script>
          {t("the two parents above", "upar wale dono parents")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: symmetry */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 200 490 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={220} y={515} size={17} fill={RED} script anchor="start">
          {t("nCr = nC(n-r)  — symmetric", "nCr = nC(n-r)  — symmetric")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: row n ↔ power n */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 200 548 v 32" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={220} y={568} size={15} fill={RED} script anchor="start">
          {t("row n = coefficients of (a+b)^n", "row n = (a+b)^n ke coefficients")}
        </T>
      </Fade>
    </Scene>
  );
}
