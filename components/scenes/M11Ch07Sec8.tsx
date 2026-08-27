/**
 * M11 Ch07 · Section 8 — "Pitfalls and pro-tips for expansions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type = tips: rapid sequence of
 * ringed/boxed pitfalls, one per beat. 2x3 grid of colored callout boxes —
 * 4 red traps, 2 green pro-tips (subtopic 1 closer).
 *
 * Beats (en [0, 9.64, 27.39, 44.29, 61.79, 80.73, 96.86]):
 *  0 title (always-on, = seq1 "traps that cost easy marks")
 *  1 off-by-one: n+1 terms, not n (red)
 *  2 raise the WHOLE bracket: (2x)³=8x³ (red)
 *  3 sign pattern: (-1)^r alternation (red)
 *  4 term vs index: (r+1)-th term uses nCr (red)
 *  5 pro-tip: x=1 check, sum = 2^n (green)
 *  6 free check: symmetry nCr=nC(n-r) (green)
 *
 * Layout: 2 cols (x150 / x560, w380) × 3 rows (y100 / y190 / y280, h64).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: {
  x: number;
  y: number;
  color: string;
  textColor: string;
  script: boolean;
  en: string;
  hi: string;
}[] = [
  { x: 150, y: 100, color: RED, textColor: RED, script: false, en: "(a+b)^n has n+1 terms, not n", hi: "(a+b)^n mein n+1 terms hain, n nahi" },
  { x: 560, y: 100, color: RED, textColor: RED, script: false, en: "(2x)³ = 8x³ — never 2x³", hi: "(2x)³ = 8x³ — kabhi 2x³ nahi" },
  { x: 150, y: 190, color: RED, textColor: RED, script: true, en: "(a-b)^n signs alternate: (-1)^r", hi: "(a-b)^n mein signs alternate: (-1)^r" },
  { x: 560, y: 190, color: RED, textColor: RED, script: true, en: "term (r+1) uses nCr — '3rd term' → r=2", hi: "term (r+1) → nCr — '3rd term' matlab r=2" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, script: true, en: "put x=1 → coefficients sum to 2^n", hi: "x=1 rakho → coefficients ka sum 2^n" },
  { x: 560, y: 280, color: GREEN, textColor: GREEN_DARK, script: true, en: "free check: nCr = nC(n-r)", hi: "free check: nCr = nC(n-r)" },
];
const W = 380;
const H = 64;

export default function M11Ch07Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {en ? "traps that cost easy marks" : "traps jo easy marks le jaate hain"}
        </T>
      </Fade>

      {CELLS.map((c, i) => (
        <React.Fragment key={i}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0.2)}
            d={roundRectD(c.x, c.y, W, H)}
            stroke={c.color}
            sw={2.2}
            dur={0.8}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.9)}>
            <T x={c.x + W / 2} y={c.y + H / 2 + 5} size={14} fill={c.textColor} script={c.script}>
              {en ? c.en : c.hi}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
