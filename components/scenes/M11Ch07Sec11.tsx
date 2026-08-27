/**
 * M11 Ch07 · Section 11 — "The specific-term machinery"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=formulas.
 * 7 board_content items, seq1 = title.
 *
 * Beats (en [0, 7.77, 27.65, 43.09, 57.26, 73.05, 88.06]):
 *  0 title
 *  1 general term expanded to nCr α^(n-r) β^r x^[p(n-r)-qr] (2 lines)
 *  2 E(r) = p(n-r) - qr, boxed (HIGH)
 *  3 term with x^k ⇒ E(r)=k; independent ⇒ E(r)=0 (HIGH)
 *  4 middle-term index formula (n even / n odd)
 *  5 red-margin: p-th from end = (n-p+2)-th from start
 *  6 glossary: α,β,p,q,n,r definitions
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t("one net-exponent expression runs every question", "ek net-exponent expression har sawaal chalata hai")}
        </T>
      </Fade>

      {/* beat 1 — the general term, expanded */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={105} size={16} fill={INK} script anchor="start">
          T(r+1) = nCr (αx^p)^(n-r) (β/x^q)^r
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={150} y={135} size={16} fill={INK} script anchor="start">
          = nCr α^(n-r) β^r x^[p(n-r)-qr]
        </T>
      </Fade>

      {/* beat 2 — E(r), boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={190} size={19} fill={AMBER_DARK} script anchor="start">
          E(r) = p(n-r) - qr    (net exponent of x)
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={roundRectD(135, 168, 590, 42)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 3 — the two rules */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={245} size={16} fill={INK} script anchor="start">
          {t("term with x^k:  set E(r) = k", "x^k wala term:  E(r) = k rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={150} y={272} size={16} fill={INK} script anchor="start">
          {t("independent term:  set E(r) = 0", "independent term:  E(r) = 0 rakho")}
        </T>
      </Fade>

      {/* beat 4 — middle-term index formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={318} size={16} fill={INK} script anchor="start">
          {t("n even:  T(n/2 + 1)", "n even:  T(n/2 + 1)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={420} y={318} size={16} fill={INK} script anchor="start">
          {t("n odd:  T((n+1)/2) and T((n+3)/2)", "n odd:  T((n+1)/2) aur T((n+3)/2)")}
        </T>
      </Fade>

      {/* beat 5 — red-margin: from-the-end rule */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 355 v 38" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={378} size={16} fill={RED} script anchor="start">
          {t("p-th term from the end = (n-p+2)-th from the start", "p-vaan term end se = (n-p+2)-vaan start se")}
        </T>
      </Fade>

      {/* beat 6 — glossary */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={425} size={15} fill={MUTED} script anchor="start">
          {t(
            "α, β = multipliers;  p, q = powers of x;  n ∈ N, r ∈ {0,…,n} — pure numbers",
            "α, β = multipliers;  p, q = x ki powers;  n ∈ N, r ∈ {0,…,n} — pure numbers"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
