/**
 * M11 Ch07 · Section 34 — "Why an expansion finds remainders"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 6 (Applications:
 * Divisibility/Remainders/Last Digits). 8 board_content items, seq1=title.
 *
 * Beats (en [0, 20.31, 36.52, 58.79, 78.08, 102.91, 123.14, 141.57]):
 *  0 title
 *  1 the setup: rewrite the base so it's almost a multiple of the divisor
 *  2 7²=49=50-1, 50 is a multiple of 25, so 7^103=7(50-1)^51
 *  3 red-margin HIGH: all but the last term carry a factor of K
 *  4 diagram: term row, first N-1 crossed out, last term ringed (survives)
 *  5 parts problems: conjugate cancels surds ⇒ integer
 *  6 conjugate is a tiny positive number, pins down both parts
 *  7 red-margin HIGH: verify 0 < p-√q < 1 before the conjugate trick
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, crossD, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const BOXES = [200, 360, 520, 720];

export default function M11Ch07Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("splitting a number into a clean piece plus a tiny piece", "number ko ek clean piece + tiny piece mein todna")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={15} fill={MUTED} script>
          {t("find 7¹⁰³ mod 25: rewrite the base so it's almost a multiple of 25", "7¹⁰³ mod 25 nikaalo: base ko 25 ke multiple ke paas likho")}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={135} size={15} fill={INK}>
          7² = 49 = 50-1, 50 is a multiple of 25.    So 7¹⁰³ = 7(50-1)⁵¹
        </T>
      </Fade>

      {/* beat 3 — red-margin */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 170 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={170} y={194} size={16} fill={RED} script anchor="start">
          {t("in (K±1)^n, all but the last term carry a factor of K", "(K±1)^n mein, last term ke alawa sab K ka factor rakhte")}
        </T>
      </Fade>

      {/* beat 4 — diagram: terms vanish except the last */}
      {BOXES.map((x, i) => (
        <Draw key={`box${i}`} on={beat >= 4} delay={dl(4, 0.2 + i * 0.25)} d={roundRectD(x - 55, 250, 110, 44)} stroke={i === 3 ? GREEN : MUTED} sw={2} dur={0.6} />
      ))}
      {BOXES.map((x, i) => (
        <Fade key={`lbl${i}`} on={beat >= 4} delay={dl(4, 0.4 + i * 0.25)}>
          <T x={x} y={277} size={13} fill={i === 3 ? GREEN_DARK : INK}>
            {i < 3 ? `T${i + 1}` : "Tn"}
          </T>
        </Fade>
      ))}
      {BOXES.slice(0, 3).map((x, i) => (
        <Draw key={`cross${i}`} on={beat >= 4} delay={dl(4, 1.2 + i * 0.25)} d={crossD(x - 55, 250, 110, 44)} stroke={RED} sw={2.2} dur={0.5} />
      ))}
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={ringD(BOXES[3], 272, 66, 34)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={540} y={325} size={14} fill={GREEN_DARK} script>
          {t("terms carrying K vanish mod K — only the constant survives", "K wale terms mod K vanish — sirf constant bachta")}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={370} size={15} fill={INK} script anchor="start">
          {t("(7+4√3)^n is irrational — add the conjugate (7-4√3)^n: surds cancel", "(7+4√3)^n irrational — conjugate (7-4√3)^n jodo: surds cancel")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={402} size={15} fill={INK} script anchor="start">
          {t("the conjugate is a tiny positive number (<1) — pins down both parts", "conjugate ek tiny positive number (<1) — dono parts fix karta")}
        </T>
      </Fade>

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 430 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={454} size={15} fill={RED} script anchor="start">
          {t("always verify 0 < p-√q < 1 before using the conjugate trick", "conjugate trick se pehle 0 < p-√q < 1 zaroor verify karo")}
        </T>
      </Fade>
    </Scene>
  );
}
