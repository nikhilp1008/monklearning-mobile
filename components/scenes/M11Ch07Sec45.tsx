/**
 * M11 Ch07 · Section 45 — "Pitfalls and pro-tips for the multinomial theorem"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=tips: subtopic 7
 * closer. Same 2x3 colored-callout-grid pattern as Sec 8/15/21/27/33/39.
 * 7 board_content items, seq1=title.
 *
 * Beats (en [0, 9.3, 32.85, 49.24, 67.93, 87.47, 112.3]):
 *  0 title
 *  1 using a binomial coefficient for 3+ variables (red)
 *  2 forgetting the sum-to-n check (red)
 *  3 confusing term count with coefficient sum (red)
 *  4 hidden relations merge terms (red)
 *  5 pro-tip: geometric-series bridge for [x^m] (green)
 *  6 memory aid: n choices over k boxes (green)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, GREEN, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CELLS: { x: number; y: number; color: string; textColor: string; en: string; hi: string }[] = [
  { x: 150, y: 100, color: RED, textColor: RED, en: "3+ variables need n!/(a!b!c!), not a binomial nCa", hi: "3+ variables ko n!/(a!b!c!) chahiye, binomial nCa nahi" },
  { x: 560, y: 100, color: RED, textColor: RED, en: "forgetting the sum-to-n check — else coefficient is 0", hi: "sum-to-n check bhoolna — nahi toh coefficient 0 hai" },
  { x: 150, y: 190, color: RED, textColor: RED, en: "confusing 'term count' (n+k-1)C(k-1) with 'coeff sum' k^n", hi: "'term count' aur 'coeff sum' k^n confuse karna" },
  { x: 560, y: 190, color: RED, textColor: RED, en: "hidden relations merge terms — count assumes independence", hi: "hidden relations terms merge karte — count independence maanta" },
  { x: 150, y: 280, color: GREEN, textColor: GREEN_DARK, en: "[x^m] in (1+x+⋯+x^t)^k: use (1-x^(t+1))/(1-x) with (1-x)^(-k)", hi: "[x^m] in (1+x+⋯+x^t)^k: (1-x^(t+1))/(1-x) aur (1-x)^(-k) use karo" },
  { x: 560, y: 280, color: GREEN, textColor: GREEN_DARK, en: "spread n choices over k boxes — n! over the box-size factorials", hi: "n choices ko k boxes mein failao — n! upar, box-size factorials neeche" },
];
const W = 380;
const H = 64;

export default function M11Ch07Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {en ? "the four ways multinomial questions go wrong" : "multinomial sawaal chaar tareekon se galat ho sakte"}
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
