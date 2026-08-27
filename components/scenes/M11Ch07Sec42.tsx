/**
 * M11 Ch07 · Section 42 — "Why the counts hold, and how to extract a
 * coefficient"
 * Canvas 1080×620 · safe x36–1044, y30–596. FLAGGED for extra eye-scrutiny.
 * 8 board_content items, seq1=title (itself names 2 proofs + 2 techniques).
 * Two labeled PROOF blocks, then two labeled TECHNIQUE blocks.
 *
 * Beats (en [0, 5.63, 30.46, 52.48, 72.87, 91.05, 115.37, 140.2]):
 *  0 title
 *  1 proof 1 setup: picking one xi from each factor
 *  2 proof 1 formula, boxed (HIGH)
 *  3 proof 2 setup: term ↔ non-negative solution
 *  4 proof 2 formula, boxed (HIGH)
 *  5 technique 1: extracting a coefficient directly
 *  6 technique 2: coeff of x^m via geometric series bridge
 *  7 red-margin HIGH: independence assumption
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("two proofs and two techniques", "do proofs aur do techniques")}
        </T>
      </Fade>

      {/* beat 1 — proof 1 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={100} size={14} fill={AMBER_DARK} script anchor="start">
          PROOF 1 — the coefficient
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={150} y={124} size={14} fill={MUTED} script anchor="start">
          {t("expanding means picking one xi from each of the n factors", "expand karna matlab har n factor se ek xi chunna")}
        </T>
      </Fade>

      {/* beat 2 — proof 1 formula, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={166} size={14} fill={AMBER_DARK} script anchor="start">
          {t("#{assignments into groups n1,…,nk} = n!/(n1!n2!⋯nk!)", "#{n1,…,nk groups mein assignments} = n!/(n1!n2!⋯nk!)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 144, 560, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — proof 2 setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={150} y={216} size={14} fill={AMBER_DARK} script anchor="start">
          PROOF 2 — the term count
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={150} y={240} size={14} fill={MUTED} script anchor="start">
          {t("each term ↔ a non-negative solution of n1+⋯+nk=n", "har term ↔ n1+⋯+nk=n ka ek non-negative solution")}
        </T>
      </Fade>

      {/* beat 4 — proof 2 formula, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={282} size={16} fill={AMBER_DARK} script anchor="start">
          stars and bars   ⇒   (n+k-1)C(k-1)
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={roundRectD(135, 260, 380, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 5 — technique 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={150} y={335} size={14} fill={AMBER_DARK} script anchor="start">
          TECHNIQUE 1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={150} y={359} size={14} fill={INK} script anchor="start">
          {t("coeff of x1^a x2^b⋯: check a+b+⋯=n (else 0), then n!/(a!b!⋯)", "coeff of x1^a x2^b⋯: a+b+⋯=n check karo (nahi toh 0), phir n!/(a!b!⋯)")}
        </T>
      </Fade>

      {/* beat 6 — technique 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={150} y={400} size={14} fill={AMBER_DARK} script anchor="start">
          TECHNIQUE 2
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={150} y={424} size={14} fill={INK} script anchor="start">
          {t("coeff of x^m in (1+x+⋯+x^t)^k: use (1-x^(t+1))/(1-x) with (1-x)^(-k)", "coeff of x^m in (1+x+⋯+x^t)^k: (1-x^(t+1))/(1-x) aur (1-x)^(-k) use karo")}
        </T>
      </Fade>

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 458 v 66" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={478} size={14} fill={RED} script anchor="start">
          {t("'number of terms' assumes independent variables —", "'number of terms' independent variables maanta —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={170} y={516} size={14} fill={RED} script anchor="start">
          {t("related variables collapse the count", "related variables count ko collapse karte")}
        </T>
      </Fade>
    </Scene>
  );
}
