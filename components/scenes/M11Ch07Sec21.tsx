/**
 * M11 Ch07 · Section 21 — "Pitfalls and pro-tips for greatest term and
 * coefficient"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=tips: subtopic 3
 * closer. Same 2x3 colored-callout-grid pattern as Sec 8 / Sec 15.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 10.92, 29.1, 46.59, 61.7, 78.59, 98.47]):
 *  0 title
 *  1 don't confuse: coefficient=middle vs term depends on a,b,x (red)
 *  2 (1+4x)^n: ratio uses |4x| not |x| (red)
 *  3 integer crossing ⇒ two terms tie, report both (red)
 *  4 (a-b)^n: NGT may be negative, compare neighbours (red)
 *  5 pro-tip: memorise k formula, r=⌊k⌋ (green)
 *  6 memory aid: coefficient peak=middle; term peak=ratio crosses 1 (green)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: { x: number; y: number; color: string; textColor: string; en: string; hi: string }[] = [
  { x: 150, y: 100, color: RED, textColor: RED, en: "don't confuse: coefficient=middle (no x); term depends on a,b,x", hi: "confuse mat karo: coefficient=middle (x nahi); term a,b,x pe depend" },
  { x: 560, y: 100, color: RED, textColor: RED, en: "(1+4x)^n: ratio uses |4x|, not |x|", hi: "(1+4x)^n: ratio mein |4x| use hota, |x| nahi" },
  { x: 150, y: 190, color: RED, textColor: RED, en: "integer crossing point ⇒ two terms tie — report BOTH", hi: "integer crossing point ⇒ do terms tie — DONO batao" },
  { x: 560, y: 190, color: RED, textColor: RED, en: "(a-b)^n: numerically greatest may be negative — compare neighbours", hi: "(a-b)^n: numerically greatest negative ho sakta — neighbours compare karo" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, en: "memorise k = (n+1)|x| / (1+|x|), read r = ⌊k⌋", hi: "yaad rakho k = (n+1)|x| / (1+|x|), r = ⌊k⌋ padho" },
  { x: 560, y: 280, color: GREEN, textColor: GREEN_DARK, en: "coefficient peak = middle; term peak = where ratio crosses 1", hi: "coefficient peak = middle; term peak = jahan ratio 1 cross kare" },
];
const W = 380;
const H = 64;

export default function M11Ch07Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK} script>
          {en ? "where marks leak in this subtopic" : "iss subtopic mein marks kahaan katte hain"}
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
            <T x={c.x + W / 2} y={c.y + H / 2 + 5} size={13} fill={c.textColor} script>
              {en ? c.en : c.hi}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
