/**
 * M11 Ch07 · Section 27 — "Pitfalls and pro-tips for coefficient sums"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=tips: subtopic 4
 * closer. Same 2x3 colored-callout-grid pattern as Sec 8/15/21.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 11.26, 30.55, 53.5, 73.98, 92.5, 117.33]):
 *  0 title
 *  1 sum of squares ≠ square of sum (red)
 *  2 differentiating drops the exponent (red)
 *  3 integration limits: 0-to-1 vs -1-to-0 (red)
 *  4 index-shift after differentiating (red)
 *  5 pro-tip: read the weights, pick the tool (green)
 *  6 memory aid: which tool for which weight (green)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: { x: number; y: number; color: string; textColor: string; en: string; hi: string }[] = [
  { x: 150, y: 100, color: RED, textColor: RED, en: "Σ Cr² = (2n)Cn, NOT (2^n)²", hi: "Σ Cr² = (2n)Cn, (2^n)² NAHI" },
  { x: 560, y: 100, color: RED, textColor: RED, en: "differentiating drops the exponent: n(1+x)^(n-1)", hi: "differentiate se exponent girta: n(1+x)^(n-1)" },
  { x: 150, y: 190, color: RED, textColor: RED, en: "limits: ∫(0 to 1) for plain sum; [-1,0] for alternating", hi: "limits: ∫(0 to 1) plain sum ke liye; [-1,0] alternating ke liye" },
  { x: 560, y: 190, color: RED, textColor: RED, en: "index-shift: after differentiating, sum starts at r=1", hi: "index-shift: differentiate ke baad, sum r=1 se shuru" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, en: "read the weights, THEN pick the tool", hi: "pehle weights padho, PHIR tool chuno" },
];
const W = 380;
const H = 64;
const MEMORY_AID = {
  x: 560,
  y: 280,
  en1: "constants→substitute; r→differentiate;",
  en2: "1/(r+1)→integrate; squares→multiply-compare",
  hi1: "constants→substitute; r→differentiate;",
  hi2: "1/(r+1)→integrate; squares→multiply-compare",
};

export default function M11Ch07Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          {en ? "the slips that turn a 15-second solve into a mess" : "woh slips jo 15-second solve ko mess bana dete"}
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

      {/* cell 6 — memory aid, two lines (too long for one at readable size) */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d={roundRectD(MEMORY_AID.x, MEMORY_AID.y, W, 90)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={MEMORY_AID.x + W / 2} y={MEMORY_AID.y + 34} size={12} fill={GREEN_DARK} script>
          {en ? MEMORY_AID.en1 : MEMORY_AID.hi1}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={MEMORY_AID.x + W / 2} y={MEMORY_AID.y + 72} size={12} fill={GREEN_DARK} script>
          {en ? MEMORY_AID.en2 : MEMORY_AID.hi2}
        </T>
      </Fade>
    </Scene>
  );
}
