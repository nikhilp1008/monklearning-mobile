/**
 * M11 Ch07 · Section 12 — "The specific-term algorithm, and why parity
 * gives one or two middles"
 * Canvas 1080×620 · safe x36–1044, y30–596. 7 board_content items, seq1=title.
 *
 * Beats (en [0, 11.95, 34.3, 57, 78.93, 97.02, 121.86]):
 *  0 title
 *  1 steps 1-3: write T(r+1) → read E(r) → impose E(r)=k or 0
 *  2 step 4 (HIGH): solve AND validate — integer, 0≤r≤n
 *  3 step 5: back-substitute
 *  4 parity: unique centre iff n+1 odd (n even)
 *  5 formula (HIGH): n even ⇒ r=n/2; n odd ⇒ r=(n-1)/2, (n+1)/2
 *  6 red-margin: read position off parity, don't expand to hunt
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t('the universal "specific term" procedure', 'universal "specific term" procedure')}
        </T>
      </Fade>

      {/* beat 1 — steps 1-3 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={100} size={16} fill={INK} script anchor="start">
          {t("1) write T(r+1), collect x into ONE power", "1) T(r+1) likho, x ko ek power mein jodo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={150} y={126} size={16} fill={INK} script anchor="start">
          {t("2) read off E(r)", "2) E(r) padho")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={150} y={152} size={16} fill={INK} script anchor="start">
          {t("3) impose E(r) = k  (or 0 for the independent term)", "3) E(r) = k rakho  (independent term ke liye 0)")}
        </T>
      </Fade>

      {/* beat 2 — step 4, HIGH, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={195} size={17} fill={AMBER_DARK} script anchor="start">
          {t("4) solve AND VALIDATE — r integer? 0 ≤ r ≤ n?", "4) solve KARO AUR VALIDATE — r integer? 0 ≤ r ≤ n?")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 173, 620, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — step 5 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={248} size={16} fill={INK} script anchor="start">
          {t("5) back-substitute the valid r into T(r+1)", "5) valid r ko T(r+1) mein wapas daalo")}
        </T>
      </Fade>

      {/* beat 4 — parity */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={300} size={16} fill={MUTED} script anchor="start">
          {t("n+1 terms have a unique centre iff n+1 is odd — i.e. n even", "n+1 terms ka ek hi centre hota hai jab n+1 odd — matlab n even")}
        </T>
      </Fade>

      {/* beat 5 — the parity formula, HIGH boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={345} size={18} fill={AMBER_DARK} script anchor="start">
          n even ⇒ r = n/2;      n odd ⇒ r = (n-1)/2, (n+1)/2
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 322, 680, 42)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — red-margin */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 395 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={418} size={16} fill={RED} script anchor="start">
          {t("don't hunt for the middle by expanding — read it off parity", "middle expand karke mat dhoondo — parity se seedha padho")}
        </T>
      </Fade>
    </Scene>
  );
}
