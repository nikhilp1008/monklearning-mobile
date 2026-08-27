/**
 * M11 Ch07 · Section 33 — "Pitfalls and pro-tips for any-index expansions"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=tips: subtopic 5
 * closer. Same 2x3 colored-callout-grid pattern as Sec 8/15/21/27.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 10.33, 30.63, 49.58, 66.9, 84.48, 101.03]):
 *  0 title
 *  1 ignoring |x|<1 (red)
 *  2 writing nCr for non-integer n (red)
 *  3 forgetting to factor out the leading term (red)
 *  4 over-truncating (red)
 *  5 pro-tip: one ratio gives n (green)
 *  6 memory aid (green)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: { x: number; y: number; color: string; textColor: string; en: string; hi: string }[] = [
  { x: 150, y: 100, color: RED, textColor: RED, en: "ignoring |x|<1 — always make the smaller part 'x'", hi: "|x|<1 ignore karna — hamesha chhota part 'x' banao" },
  { x: 560, y: 100, color: RED, textColor: RED, en: "writing nCr for non-integer n — undefined", hi: "non-integer n ke liye nCr likhna — undefined" },
  { x: 150, y: 190, color: RED, textColor: RED, en: "forgetting to factor out the leading term of (a+b)^n", hi: "(a+b)^n ka leading term factor karna bhool jaana" },
  { x: 560, y: 190, color: RED, textColor: RED, en: "over-truncating: 1+nx is first-order only", hi: "over-truncating: 1+nx sirf first-order hai" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, en: "3rd/(2nd)² = (n-1)/(2n) — one ratio gives n", hi: "3rd/(2nd)² = (n-1)/(2n) — ek ratio se n milta" },
  { x: 560, y: 280, color: GREEN, textColor: GREEN_DARK, en: "non-integer power → infinite series, only if |x|<1, never nCr", hi: "non-integer power → infinite series, sirf |x|<1, kabhi nCr nahi" },
];
const W = 380;
const H = 64;

export default function M11Ch07Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK} script>
          {en ? "the four ways this subtopic bites" : "yeh subtopic chaar tareekon se kaat sakta"}
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
            <T x={c.x + W / 2} y={c.y + H / 2 + 5} size={12.5} fill={c.textColor} script>
              {en ? c.en : c.hi}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
