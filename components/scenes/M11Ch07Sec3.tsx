/**
 * M11 Ch07 · Section 3 — "The Binomial Theorem — the master formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type = formulas: assemble each identity
 * term by term rather than fading in the finished line.
 *
 * Beats (en [0, 14, 33.37, 48.64, 65.88, 82.86, 95.41, 112.56]):
 *  0 title (always-on)
 *  1 THE master formula, built chunk by chunk, then boxed
 *  2 special case (1+x)^n expansion, built in 3 chunks (non-script: has x²)
 *  3 the value formula nCr = n!/(r!(n-r)!), 0≤r≤n
 *  4 general term T(r+1) = nCr a^(n-r) b^r, boxed
 *  5 red-margin: number of terms = n+1, NOT n
 *  6 the two sum identities
 *  7 red-margin: pure numbers, no units
 *
 * Layout plan (Kalam bl−1.3s..+0.5s / Anek bl−0.78s..+0.31s):
 *  b0 | title script26 cx540 bl58
 *  b1 | chunks script22 y130 x190/300/340/500/570 · box x170..710 y105..158 · note script14 x750 bl135
 *  b2 | chunks NON-SCRIPT(anek)18 y210 x190/300/510
 *  b3 | line script18 x190 bl280
 *  b4 | line script20 x190 bl345 · box x170..640 y320..368
 *  b5 | red bar x150 y390..425 · text script16 x170 bl412
 *  b6 | line1 script17 x190 bl462 · line2 script17 x190 bl492
 *  b7 | red bar x150 y520..555 · text script15 x170 bl542
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch07Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("the theorem and its core properties", "theorem aur uski core properties")}
        </T>
      </Fade>

      {/* beat 1 — the master formula, built term by term */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={190} y={130} size={22} fill={INK} script anchor="start">(a+b)^n</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={300} y={130} size={22} fill={INK} script anchor="start">=</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={335} y={130} size={22} fill={MUTED} script anchor="start">
          {t("Σ(r=0 to n)", "Σ(r=0 se n)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={500} y={130} size={22} fill={AMBER_DARK} script anchor="start">nCr</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={565} y={130} size={22} fill={INK} script anchor="start">a^(n-r) b^r</T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d={roundRectD(170, 103, 550, 56)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={755} y={135} size={14} fill={MUTED} script anchor="start">
          (n ∈ N)
        </T>
      </Fade>

      {/* beat 2 — special case (1+x)^n, non-script (has x²) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={190} y={210} size={18} fill={INK} anchor="start">(1+x)^n =</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={300} y={210} size={18} fill={INK} anchor="start">1 + nC1 x + nC2 x²</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={510} y={210} size={18} fill={INK} anchor="start">+ ⋯ + nCn x^n</T>
      </Fade>

      {/* beat 3 — the value formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={190} y={280} size={18} fill={INK} script anchor="start">
          nCr = n! / (r! (n-r)!)&nbsp;&nbsp;&nbsp;0 ≤ r ≤ n
        </T>
      </Fade>

      {/* beat 4 — general term, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={190} y={345} size={20} fill={INK} script anchor="start">
          {t("T(r+1) = nCr a^(n-r) b^r   (general term)", "T(r+1) = nCr a^(n-r) b^r   (general term)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={roundRectD(170, 318, 480, 50)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1}
      />

      {/* beat 5 — red-margin: n+1 terms, not n */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 150 392 v 36" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={170} y={415} size={16} fill={RED} script anchor="start">
          {t("number of terms = n+1, NOT n", "terms ki ginti = n+1, NOT n")}
        </T>
      </Fade>

      {/* beat 6 — the two sum identities */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={190} y={470} size={17} fill={INK} script anchor="start">
          {t("Σ(r=0 to n) nCr = 2^n", "Σ(r=0 se n) nCr = 2^n")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={190} y={502} size={17} fill={INK} script anchor="start">
          {t("Σ(r=0 to n) (-1)^r nCr = 0   (n ≥ 1)", "Σ(r=0 se n) (-1)^r nCr = 0   (n ≥ 1)")}
        </T>
      </Fade>

      {/* beat 7 — red-margin: pure numbers */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 528 v 34" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={550} size={15} fill={RED} script anchor="start">
          {t("pure numbers — no units, no dimensions", "pure numbers — koi unit, koi dimension nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
