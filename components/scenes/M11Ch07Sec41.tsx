/**
 * M11 Ch07 · Section 41 — "The multinomial theorem and its counts"
 * Canvas 1080×620 · safe x36–1044, y30–596. FLAGGED for extra eye-scrutiny.
 * section_type=formulas. 8 board_content items, seq1=title (itself names
 * the four things covered).
 *
 * Beats (en [0, 9.9, 34.73, 53.85, 67.16, 84.39, 99.16, 113.07]):
 *  0 title
 *  1 THE multinomial theorem, boxed (HIGH)
 *  2 multinomial coefficient definition (HIGH)
 *  3 term-count formula, boxed (HIGH)
 *  4 trinomial special case
 *  5 sum of all coefficients = k^n, boxed (HIGH)
 *  6 red-margin HIGH: k=2 recovers binomial
 *  7 red-margin: glossary
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          {en ? "theorem, coefficient, term count, coefficient sum" : "theorem, coefficient, term count, coefficient sum"}
        </T>
      </Fade>

      {/* beat 1 — the master formula, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={102} size={14} fill={AMBER_DARK} script anchor="start">
          (x1+x2+⋯+xk)^n = Σ n!/(n1!n2!⋯nk!) · x1^n1 x2^n2⋯xk^nk
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(135, 80, 700, 40)} stroke={AMBER_DARK} sw={2.6} dur={1} />

      {/* beat 2 — coefficient definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={155} size={15} fill={AMBER_DARK} script anchor="start">
          multinomial coefficient = n!/(n1!n2!⋯nk!),    Σni = n
        </T>
      </Fade>

      {/* beat 3 — term-count formula, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={198} size={16} fill={AMBER_DARK} script anchor="start">
          number of distinct terms = (n+k-1)C(k-1)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={roundRectD(135, 176, 460, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 4 — trinomial special case */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={248} size={15} fill={INK} script anchor="start">
          {en ? "trinomial: (n+2)C2 = (n+1)(n+2)/2 terms" : "trinomial: (n+2)C2 = (n+1)(n+2)/2 terms"}
        </T>
      </Fade>

      {/* beat 5 — sum of all coefficients, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={292} size={16} fill={AMBER_DARK} script anchor="start">
          {en ? "sum of all coefficients = k^n   (set every xi = 1)" : "sab coefficients ka sum = k^n   (har xi = 1 rakho)"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 270, 480, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — red-margin: k=2 recovers binomial */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 330 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={354} size={16} fill={RED} script anchor="start">
          {en ? "k=2 recovers the ordinary binomial theorem" : "k=2 se ordinary binomial theorem wapas milta"}
        </T>
      </Fade>

      {/* beat 7 — red-margin glossary */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 385 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={409} size={14} fill={RED} script anchor="start">
          {en ? "n = index, k = number of parts, ni = exponents — pure numbers" : "n = index, k = parts ki ginti, ni = exponents — pure numbers"}
        </T>
      </Fade>
    </Scene>
  );
}
