/**
 * M11 Ch07 · Section 15 — "Pitfalls and pro-tips for specific terms"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=tips: subtopic 2
 * closer. Same 2x3 colored-callout-grid pattern as Sec 8. 7 board_content
 * items, seq1=title.
 *
 * Beats (en [0, 10.15, 32.94, 47.79, 69.8, 90.28, 110.42]):
 *  0 title
 *  1 off-by-one: m-th term ⇒ r=m-1 (red)
 *  2 odd n has TWO middle terms (red)
 *  3 1/x^q contributes -qr, sign and all (red)
 *  4 non-integer/out-of-range r ⇒ absent, don't round (red)
 *  5 pro-tip: solve for r first, validate before substituting (green)
 *  6 memory aid: set power → solve r → check whole & in range (green)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: { x: number; y: number; color: string; textColor: string; en: string; hi: string }[] = [
  { x: 150, y: 100, color: RED, textColor: RED, en: "off-by-one: m-th term ⇒ r=m-1 ('7th'⇒r=6)", hi: "off-by-one: m-th term ⇒ r=m-1 ('7th'⇒r=6)" },
  { x: 560, y: 100, color: RED, textColor: RED, en: "odd n has TWO middle terms — a common trap", hi: "odd n mein DO middle terms — common trap" },
  { x: 150, y: 190, color: RED, textColor: RED, en: "1/x^q gives -qr — write E(r)=p(n-r)-qr, sign and all", hi: "1/x^q se -qr — E(r)=p(n-r)-qr likho, sign samet" },
  { x: 560, y: 190, color: RED, textColor: RED, en: "non-integer/out-of-range r ⇒ term absent. don't round", hi: "non-integer/out-of-range r ⇒ term absent. round mat karo" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, en: "solve for r FIRST — substitute once validated", hi: "pehle r solve karo — validate hone ke baad substitute" },
  { x: 560, y: 280, color: GREEN, textColor: GREEN_DARK, en: "memory aid: set power → solve r → check whole & in range", hi: "yaad rakho: power set → r solve → whole & in-range check" },
];
const W = 380;
const H = 64;

export default function M11Ch07Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";

  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {en ? "the four recurring traps" : "chaar baar-baar aane wale traps"}
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
