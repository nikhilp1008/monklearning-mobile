/**
 * M11 Ch07 · Section 40 — "From two parts to k parts"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 7 (Multinomial
 * Theorem). FLAGGED for extra eye-scrutiny. 9 board_content items, seq1=title.
 *
 * Beats (en [0, 20.31, 38.23, 59.22, 77.99, 102.4, 122.45, 141.31, 155.73]):
 *  0 title
 *  1 binomial vs multinomial: how many choices per bracket
 *  2 a term of (a+b+c)^n: a^n1 b^n2 c^n3, n1+n2+n3=n
 *  3 diagram: each bracket donates one of a,b,c
 *  4 coefficient formula, boxed (HIGH)
 *  5 red-margin HIGH: k=2 collapses to the binomial theorem
 *  6 counting distinct terms is a P&C question
 *  7 stars-and-bars formula, boxed (HIGH)
 *  8 red-margin: assumes independent variables
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const BOX_X = [250, 370, 490, 610, 730];
const CHOICES = ["a", "b", "c", "a", "b"];

export default function M11Ch07Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("the same counting story, now with k choices per bracket", "wahi counting story, ab har bracket mein k choices")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} script>
          {t("binomial: each bracket donates a or b — multinomial: more than two choices", "binomial: har bracket a ya b deta — multinomial: do se zyada choices")}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={132} size={15} fill={INK} script>
          {t("a term of (a+b+c)^n looks like a^n1 b^n2 c^n3 with n1+n2+n3=n", "(a+b+c)^n ka term: a^n1 b^n2 c^n3, n1+n2+n3=n")}
        </T>
      </Fade>

      {/* beat 3 — diagram: brackets donate a/b/c */}
      {BOX_X.map((x, i) => (
        <Draw key={`box${i}`} on={beat >= 3} delay={dl(3, 0.2 + i * 0.2)} d={roundRectD(x - 40, 165, 80, 40)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      ))}
      {BOX_X.map((x, i) => (
        <Draw key={`arr${i}`} on={beat >= 3} delay={dl(3, 1.4 + i * 0.2)} d={arrowD(x, 208, x, 232)} stroke={INK} sw={1.8} dur={0.4} />
      ))}
      {BOX_X.map((x, i) => (
        <Fade key={`lbl${i}`} on={beat >= 3} delay={dl(3, 2.2 + i * 0.2)}>
          <T x={x} y={252} size={15} fill={AMBER_DARK}>{CHOICES[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={540} y={280} size={14} fill={MUTED} script>
          {t("each bracket donates one of a, b, c", "har bracket a, b, c mein se ek deta")}
        </T>
      </Fade>

      {/* beat 4 — coefficient formula, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={330} size={17} fill={AMBER_DARK} script anchor="start">
          coefficient of a^n1 b^n2 c^n3 = n! / (n1! n2! n3!)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={roundRectD(135, 308, 560, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 5 — red-margin: k=2 collapse */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 365 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={389} size={15} fill={RED} script anchor="start">
          {t("k=2 collapses to n!/(r!(n-r)!) = nCr — binomial is the k=2 case", "k=2 mein n!/(r!(n-r)!) = nCr — binomial hi k=2 case hai")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={430} size={15} fill={INK} script anchor="start">
          {t("counting distinct terms is a P&C question: solutions of n1+⋯+nk=n", "distinct terms ginna ek P&C sawaal: n1+⋯+nk=n ke solutions")}
        </T>
      </Fade>

      {/* beat 7 — stars-and-bars formula, boxed */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={150} y={474} size={16} fill={AMBER_DARK} script anchor="start">
          {t("number of distinct terms = (n+k-1)C(k-1)   (stars and bars)", "distinct terms ki ginti = (n+k-1)C(k-1)   (stars and bars)")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={roundRectD(135, 452, 620, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 8 — red-margin */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 150 522 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={170} y={546} size={14} fill={RED} script anchor="start">
          {t("assumes independent variables — hidden relations merge terms (e.g. (1+2x+x²)¹⁰=(1+x)²⁰)", "independent variables maante hain — chhupe relations terms merge karte")}
        </T>
      </Fade>
    </Scene>
  );
}
