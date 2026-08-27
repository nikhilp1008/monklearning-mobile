/**
 * C11 Chemistry Ch03 · Section 24 — "Physical-property toolkit" (subtopic 2 formula recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Reference-sheet layout: two
 * columns of bordered formula boxes, filled top-to-bottom left then right.
 *
 * Beats (en [0, 7.25, 18.01, 31.57, 45.57, 59.14, 74.75, 86.36, 99.24]):
 *  0 title + underline
 *  1 Zeff = Z − σ (box)
 *  2 red note: behaviour across/down
 *  3 radius box: rcov = ½d(A-A); size order
 *  4 IE box: X(g)→X+(g)+e-, X+(g)→X2+(g)+e-
 *  5 red note: ΔiH1 < ΔiH2 < ΔiH3
 *  6 EGE box: X(g)+e- → X-(g)
 *  7 Mulliken box: χM=(IE+EA)/2, χP≈χM/2.8
 *  8 Allred-Rochow box: χAR=0.359(Zeff/r²)+0.744
 *
 * Layout plan (left col x70..520, right col x560..1010):
 *  b1 | Zeff box                   | Draw | x70..520  y96..136 (bl 122)
 *  b2 | behaviour note (red)       | T st | x70..430  y145..159 (bl 155)
 *  b3 | radius box                 | Draw | x70..520  y175..230
 *  b4 | IE box (2 lines)           | Draw | x70..520  y248..328
 *  b5 | climb note (inside box)    | T mid| bl 314
 *  b6 | EGE box                    | Draw | x560..1010 y96..136 (bl 122)
 *  b7 | Mulliken box               | Draw | x560..1010 y155..210
 *  b8 | Allred-Rochow box          | Draw | x560..1010 y228..283
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

export default function C11Ch03Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("physical-property toolkit", "physical-property toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the master engine */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 70 96 h 450 v 40 h -450 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={295} y={122} size={18} weight={800} fill={INK}>
          Zeff = Z − σ
        </T>
      </Fade>

      {/* beat 2 — its behaviour */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={70} y={155} size={12} weight={700} fill={RED} anchor="start">
          {t("across: Zeff↑, shrink · down: distance+shielding win, grow", "across: Zeff↑, shrink · down: distance+shielding jeete, grow")}
        </T>
      </Fade>

      {/* beat 3 — radius */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 175 h 450 v 55 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={295} y={196} size={14} weight={700} fill={INK}>
          rcov = ½ d(A-A)
        </T>
        <T x={295} y={218} size={12} fill={MUTED}>
          rvdW &gt; rmetallic &gt; rcov
        </T>
      </Fade>

      {/* beat 4/5 — ionisation enthalpy */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 248 h 450 v 80 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={295} y={270} size={13} weight={700} fill={INK}>
          {"X(g) → X⁺(g) + e⁻   ΔiH1"}
        </T>
        <T x={295} y={292} size={13} weight={700} fill={INK}>
          {"X⁺(g) → X²⁺(g) + e⁻   ΔiH2"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={295} y={314} size={12} weight={700} fill={RED}>
          ΔiH1 &lt; ΔiH2 &lt; ΔiH3
        </T>
      </Fade>

      {/* beat 6 — electron gain enthalpy */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 560 96 h 450 v 40 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={785} y={122} size={13} weight={700} fill={INK}>
          {"X(g) + e⁻ → X⁻(g)   ΔegH"}
        </T>
      </Fade>

      {/* beat 7 — Mulliken / Pauling conversion */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 560 155 h 450 v 55 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={785} y={176} size={14} weight={700} fill={INK}>
          χM = (IE+EA)/2
        </T>
        <T x={785} y={198} size={12} fill={MUTED}>
          χP ≈ χM / 2.8
        </T>
      </Fade>

      {/* beat 8 — Allred-Rochow */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 560 228 h 450 v 55 h -450 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={785} y={249} size={13} weight={700} fill={INK}>
          χAR = 0.359(Zeff/r²)+0.744
        </T>
        <T x={785} y={271} size={11} fill={MUTED}>
          {t("r = covalent radius", "r = covalent radius")}
        </T>
      </Fade>
    </Scene>
  );
}
