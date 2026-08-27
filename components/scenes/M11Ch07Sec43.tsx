/**
 * M11 Ch07 · Section 43 — "Counting terms, and a three-variable coefficient"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=worked_examples.
 * 7 board_content items, seq1="Example 1" label — title invented, always-on.
 *
 * Beats (en [0, 7.42, 26.88, 37.72, 59.39, 72.96, 90.97]):
 *  0 Example 1 [CBSE] label — distinct terms in (a+b+c)^12
 *  1 n=12,k=3: 14C2 = 91, boxed (HIGH)
 *  2 Example 2 [JEE Main] label — coeff of x^2y^3z^4 in (x+y+z)^9
 *  3 check: 2+3+4=9=n, checkmark
 *  4 coeff = 9!/(2!3!4!)
 *  5 = 1260, boxed (HIGH)
 *  6 red-margin HIGH: trap of using a single 9C2
 *
 * Math hand-verified: 14C2=91; 9!=362880, 2!3!4!=288, 362880/288=1260.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch07Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={INK} script>
          {t("counting terms, and a three-variable coefficient", "terms ginna, aur ek three-variable coefficient")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 label */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={150} y={100} size={15} fill={AMBER_DARK} anchor="start">
          Example 1 [CBSE] — distinct terms in (a+b+c)¹²
        </T>
      </Fade>

      {/* beat 1 — computed, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={144} size={17} fill={AMBER_DARK} anchor="start">
          n=12, k=3:  ¹⁴C₂ = 14·13/2 = 91
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(135, 122, 400, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 2 — Example 2 label */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={210} size={15} fill={AMBER_DARK} anchor="start">
          Example 2 [JEE Main] — coeff of x²y³z⁴ in (x+y+z)⁹
        </T>
      </Fade>

      {/* beat 3 — check, with checkmark */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={245} size={15} fill={INK} anchor="start">
          {t("check exponents sum to the index: 2+3+4 = 9 = n", "check: exponents ka sum index ke barabar: 2+3+4 = 9 = n")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={checkD(605, 241, 18)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={280} size={16} fill={INK} script anchor="start">
          coeff = 9! / (2! 3! 4!)
        </T>
      </Fade>

      {/* beat 5 — final, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={324} size={16} fill={AMBER_DARK} script anchor="start">
          = 362880/(2·6·24) = 362880/288 = 1260
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 302, 460, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — red-margin */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 362 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={386} size={15} fill={RED} script anchor="start">
          {t("trap: using a single 9C2 — three variables need the full n!/(a!b!c!)", "trap: sirf 9C2 use karna — teen variables ko poora n!/(a!b!c!) chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
