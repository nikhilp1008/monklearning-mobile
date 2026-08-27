/**
 * M11 Ch07 · Section 17 — "The formulas: peak coefficient, ratio method, shortcut"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=formulas.
 * 8 board_content items, seq1=title.
 *
 * Beats (en [0, 10.67, 33.79, 50.35, 64.77, 84.14, 104.45, 126.56]):
 *  0 title
 *  1 peak coefficient formula (HIGH): n even unique, n odd two equal
 *  2 ratio-test formula, boxed (HIGH)
 *  3 solve the inequality for r
 *  4 shortcut k formula for (1+x)^n, boxed (HIGH)
 *  5 red-margin HIGH: k non-integer vs integer (tie) rule
 *  6 greatest-coefficient ratio for (1+λx)^n
 *  7 red-margin: glossary a,b,x,n,r
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("everything you need to locate the biggest", "sabse bada dhoondne ke liye sab kuch")}
        </T>
      </Fade>

      {/* beat 1 — peak coefficient */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={100} size={16} fill={INK} script anchor="start">
          n even: nC(n/2) (unique);    n odd: nC((n-1)/2) = nC((n+1)/2)
        </T>
      </Fade>

      {/* beat 2 — ratio-test formula, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={148} size={17} fill={AMBER_DARK} script anchor="start">
          |T(r+1)/Tr| = (n-r+1)/r · |b/a|  ≥  1
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 126, 500, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={195} size={15} fill={MUTED} script anchor="start">
          {t("solve that inequality for r → locate the greatest term", "woh inequality solve karo r ke liye → greatest term milega")}
        </T>
      </Fade>

      {/* beat 4 — shortcut k formula, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={240} size={17} fill={AMBER_DARK} script anchor="start">
          (1+x)^n:    k = (n+1)|x| / (1+|x|)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={roundRectD(135, 218, 420, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 5 — red-margin: integer vs non-integer k */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 280 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={300} size={15} fill={RED} script anchor="start">
          {t("k not an integer ⇒ greatest = T⌊k⌋+1", "k integer nahi ⇒ greatest = T⌊k⌋+1")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={170} y={324} size={15} fill={RED} script anchor="start">
          {t("k an integer ⇒ Tk = T(k+1)  (a tie)", "k integer hai ⇒ Tk = T(k+1)  (tie)")}
        </T>
      </Fade>

      {/* beat 6 — greatest-coefficient ratio */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={375} size={16} fill={INK} script anchor="start">
          {t("(1+λx)^n:    c(r+1)/cr = (n-r)/(r+1) · λ  ≥  1", "(1+λx)^n:    c(r+1)/cr = (n-r)/(r+1) · λ  ≥  1")}
        </T>
      </Fade>

      {/* beat 7 — red-margin glossary */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 410 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={433} size={14} fill={RED} script anchor="start">
          {t("a,b = the two parts; x = the value; n = index; r = term index — pure numbers", "a,b = do parts; x = value; n = index; r = term index — pure numbers")}
        </T>
      </Fade>
    </Scene>
  );
}
