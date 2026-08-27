/**
 * M11 Ch07 · Section 36 — "Four procedures for four question types"
 * Canvas 1080×620 · safe x36–1044, y30–596. 8 board_content items, seq1=title
 * (itself names the four procedures).
 *
 * Beats (en [0, 11.95, 36.78, 57.69, 78.85, 103.68, 125.18, 142.85]):
 *  0 title = "Remainder · last digits · divisibility · parts"
 *  1 procedure A — remainder
 *  2 procedure B — last two digits
 *  3 procedure C — divisibility proof
 *  4 procedure D — parts (integral/fractional)
 *  5 the evaluation formula, boxed (HIGH)
 *  6 red-margin HIGH: negative remainders, shift into range
 *  7 red-margin: the golden move
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          Remainder · Last digits · Divisibility · Parts
        </T>
      </Fade>

      {/* beat 1 — A) remainder */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={102} size={14} fill={AMBER_DARK} script anchor="start">
          {t("A) remainder: write a as K±1 (K = multiple of m); expand, drop K-terms", "A) remainder: a ko K±1 likho (K = m ka multiple); expand, K-terms drop")}
        </T>
      </Fade>

      {/* beat 2 — B) last two digits */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={134} size={14} fill={AMBER_DARK} script anchor="start">
          {t("B) last 2 digits: choose K = multiple of 100; keep terms till one hits 100", "B) last 2 digits: K = 100 ka multiple; terms rakho jab tak ek 100 ho")}
        </T>
      </Fade>

      {/* beat 3 — C) divisibility */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={166} size={14} fill={AMBER_DARK} script anchor="start">
          {t("C) divisibility: expand (K±1)^n, show every surviving term carries m", "C) divisibility: (K±1)^n expand, dikhao har surviving term m rakhta")}
        </T>
      </Fade>

      {/* beat 4 — D) parts */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={150} y={198} size={14} fill={AMBER_DARK} script anchor="start">
          {t("D) parts: I+f=(p+√q)^n, f'=(p-√q)^n; verify 0<f'<1; deduce f'=1-f", "D) parts: I+f=(p+√q)^n, f'=(p-√q)^n; 0<f'<1 verify; f'=1-f")}
        </T>
      </Fade>

      {/* beat 5 — evaluation formula, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={242} size={17} fill={AMBER_DARK} anchor="start">
          (I+f)f' = (p²-q)^n   — evaluate this
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={roundRectD(135, 220, 440, 40)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 6 — red-margin: negative remainders */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 280 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={304} size={15} fill={RED} script anchor="start">
          {t("negative remainders: shift into 0..m-1 (e.g. -7 ≡ 18 mod 25)", "negative remainders: 0..m-1 mein shift karo (jaise -7 ≡ 18 mod 25)")}
        </T>
      </Fade>

      {/* beat 7 — red-margin: golden move */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 335 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={359} size={15} fill={RED} script anchor="start">
          {t("golden move: make the divisor appear inside the bracket", "golden move: divisor ko bracket ke andar laao")}
        </T>
      </Fade>
    </Scene>
  );
}
