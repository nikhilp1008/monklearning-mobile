/**
 * M11 Ch07 · Section 39 — "Pitfalls and pro-tips for applications"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=tips: subtopic 6
 * closer. Same 2x3 colored-callout-grid pattern as Sec 8/15/21/27/33.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 10.92, 31.66, 47.27, 63.57, 82.6, 107.43]):
 *  0 title
 *  1 wrong split: match bracket to modulus (red)
 *  2 stopping reduction too early (red)
 *  3 negative remainders: shift into range (red)
 *  4 skipping the 0<f'<1 check (red)
 *  5 pro-tip: find the short cycle (green)
 *  6 memory aid: golden move (green)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: { x: number; y: number; color: string; textColor: string; en: string; hi: string }[] = [
  { x: 150, y: 100, color: RED, textColor: RED, en: "wrong split: match bracket to modulus (25→50, last-2-digits→100)", hi: "galat split: bracket ko modulus se match karo (25→50, digits→100)" },
  { x: 560, y: 100, color: RED, textColor: RED, en: "stopping reduction too early — keep going till modulus-free", hi: "reduction jaldi rokna — modulus-free hone tak jaari rakho" },
  { x: 150, y: 190, color: RED, textColor: RED, en: "negative remainders: -7 mod 25 = 18, not -7", hi: "negative remainders: -7 mod 25 = 18, -7 nahi" },
  { x: 560, y: 190, color: RED, textColor: RED, en: "skipping 0<f'<1 — needs 0<p-√q<1", hi: "0<f'<1 skip karna — 0<p-√q<1 chahiye" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, en: "find the smallest power ≡ ±1 mod the divisor — a short cycle", hi: "sabse chhoti power ≡ ±1 mod divisor dhoondo — short cycle" },
  { x: 560, y: 280, color: GREEN, textColor: GREEN_DARK, en: "make the divisor appear inside the bracket — it all disappears", hi: "divisor ko bracket ke andar laao — sab disappear ho jaata" },
];
const W = 380;
const H = 64;

export default function M11Ch07Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={INK} script>
          {en ? "where the method breaks if you're careless" : "careless ho toh method kahaan tootta"}
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
            <T x={c.x + W / 2} y={c.y + H / 2 + 5} size={12} fill={c.textColor} script>
              {en ? c.en : c.hi}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
